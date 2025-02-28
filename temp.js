const fs = require("fs");
const jwt = require("jsonwebtoken");

const generateAppleClientSecret = () => {
    const privateKey = fs.readFileSync("AuthKey_BZB78G8C3D.p8", "utf8"); // Replace with your key file
    const teamId = "WBLCW23C96"; // Replace with your Apple Team ID
    const clientId = "com.example.app"; // Replace with your Apple Client ID (Service ID)
    const keyId = "BZB78G8C3D"; // Replace with your Key ID

    const token = jwt.sign({}, privateKey, {
        algorithm: "ES256",
        expiresIn: "180d", // Valid for 180 days
        audience: "https://appleid.apple.com",
        issuer: teamId,
        subject: clientId,
        keyid: keyId,
    });

    console.log("Your Apple Client Secret:", token);
    return token;
};

console.log(generateAppleClientSecret());
