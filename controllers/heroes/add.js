const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const ObjectID = require("bson-objectid");

const {Hero} = require("../../models/hero");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const add = async (req, res) => {
    try {
        const {path: tempPath, originalname} = req.file;
        const img = await Jimp.read(tempPath);
        await img.resize(220, 330);
        await img.writeAsync(tempPath);

        const [extension] = originalname.split(".").reverse();
        const newName = `${ObjectID()}.${extension}`;
        const uploadPath = path.join(avatarsDir, newName);
        await fs.rename(tempPath, uploadPath);
        const imageURL = path.join("avatars", newName);

        const { name, nickname, description,superpowers,catchPhrase } = req.body;
        const newHero =new Hero({
            name,
            nickname ,
            description ,
            superpowers ,
            catchPhrase ,
            imageURL,
        })
        const result= await newHero.save();

        res.status(201).json(result).end();

    } catch (error) {
        await fs.unlink(req.file.path);
        throw error;
    }
}

module.exports = add;