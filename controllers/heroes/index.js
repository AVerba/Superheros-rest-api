const getAll = require("./getAll");
const getById = require("./getById");
const add = require("./add");
const updateById = require("./updateById");
const updateAvatar=require('./updateAvatar')
const removeById = require("./removeById");



module.exports = {
    getAll,
    getById,
    add,
    updateById,
    removeById,
    updateAvatar
}