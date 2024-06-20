// Load the AWS SDK for Node.js
require('dotenv').config();
const {
    S3,
    PutObjectCommand,
    GetObjectCommand,
    HeadObjectCommand
} = require("@aws-sdk/client-s3");
const mime = require('mime-types')
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");

const AWS_BUCKET = process.env.AWS_BUCKET;
const s3 = new S3({
    endpoint: process.env.AWS_ENDPOINT,
    credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
    region: "global"
});
const getFileKey = (key, mimeType) => { 
    let extension = mime.extension(mimeType);
    return key + "." + extension;

}
const isAllowedToSeeObject = async (key, user_id, business_id) => {
    const tagCommand = new HeadObjectCommand({
      Bucket: AWS_BUCKET,
      Key: key,
    });
  
    try {
      let response = await s3.send(tagCommand);
      console.log("tags", response);
      let owners = JSON.parse(response.Metadata.owners);
      if (!owners.users && !owners.businesses) {
        return true;
      }
      if (owners.users && Array.isArray(owners.users) && owners.users.includes(user_id)) {
        return true;
      }
      if (owners.businesses && Array.isArray(owners.businesses) && owners.businesses.includes(business_id)) {
        return true;
      }
      if (owners.users.includes(user_id) || owners.businesses.includes(business_id)) {
        return true;
      }
      return false;
    } catch (err) {
      throw new Error(`Error fetching object: ${err}`);
    }
}

const GetObject = async (key) => {
  
    const command = new GetObjectCommand({
      Bucket: AWS_BUCKET,
      Key: key,
    });
    
    try {
      return await getSignedUrl(s3, command, { expiresIn: 604800 });
    } catch (err) {
      throw new Error(err)
    
    }
};

const SaveObject = async (key, data, mimeType, owners = {}, file) => {
  console.log("SaveObject data", key, data.substring(0, 15))
  console.log("SaveObject file", file)
  var buf = Buffer.from(data.replace(/^data:image\/\w+;base64,/, ""), 'base64')
  console.log("SaveObject key", key)
  let command = new PutObjectCommand({
    Bucket: AWS_BUCKET,
    Key: key,
    Body: buf,
    ContentEncoding: 'base64',
    ContentType: mimeType,
    Metadata: {
      "owners": JSON.stringify(owners)
    }
    //Tagging: encodeURIComponent(JSON.stringify(owners.users.concat(owners.businesses)))
  })
  
  try {
    let response = await s3.send(command)
    return response
  }
  catch (err) {
    throw new Error(err)
  }
}

module.exports = {
  getSignedUrl,
  GetObject,
  SaveObject,
  isAllowedToSeeObject,
  getFileKey
};