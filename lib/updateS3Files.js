const FileDao = require("../dao/File");
const prisma = require("../prisma/prisma");
const {GetObject, getFileKey} = require("./s3");

const updateS3Files = async () => {
    const files = await prisma.files.findMany();
    for (const file of files) {
        if (file.public) {
            const key = getFileKey(file.file_id, file.mime_type);
            let url = await GetObject(key, file.public);
            await FileDao.updateFileById(file.file_id, file.file_type, file.mime_type, url);
        }
    }
}

updateS3Files();