const {createError} = require('../../helpers')
const {Hero} = require('../../models/hero')

const getById = async (req, res) => {
    const {id} = req.params;
    const result = await Hero.findById(id);
    if (!result) {
        throw createError(404);
    }
    res.json(result);
}

module.exports = getById;