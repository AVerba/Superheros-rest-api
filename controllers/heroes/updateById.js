const {createError} = require("../../helpers");

const {Hero} = require('../../models/hero')


const updateById = async (req, res) => {

    const {id} = req.params;
    const result = await Hero.findByIdAndUpdate(id, req.body);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = updateById;