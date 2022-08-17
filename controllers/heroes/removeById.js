const {createError} = require("../../helpers");

const {Hero} = require('../../models/hero')

const removeById = async (req, res) => {
    const {id} = req.params;
    const result = await Hero.findOneAndDelete(id);
    if (!result) {
        throw createError(404)
    }
    res.json({
        message: "Hero deleted successfully"
    })
}

module.exports = removeById;