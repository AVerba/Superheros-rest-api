const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const ObjectID = require("bson-objectid");
const {Hero} = require("../../models/hero");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
    try {
        const {id} = req.params;
        const {path: tempPath, originalname} = req.file;
        const img = await Jimp.read(tempPath);
        await img.resize(220, 330);
        await img.writeAsync(tempPath);

        const [extension] = originalname.split(".").reverse();
        const newName = `${ObjectID()}.${extension}`;
        const uploadPath = path.join(avatarsDir, newName);
        await fs.rename(tempPath, uploadPath);
        const imageURL = path.join("avatars", newName);
        await Hero.findByIdAndUpdate(id, {imageURL});
        res.json({
            imageURL,
        })
    } catch (error) {
        await fs.unlink(req.file.path);
        throw error;
    }
}

module.exports = updateAvatar;