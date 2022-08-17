const {Hero} = require('../../models/hero')

const getAll = async (req, res) => {
    const result = await Hero.find({}, "-createdAt -updatedAt");
    res.json(result);
}

module.exports = getAll;