const {Schema, model} = require("mongoose");
const Joi = require('joi');


const heroSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Set name for hero'],
    },
    nickname: {
        type: String,
        required: [true, 'Set nick for hero'],
    },
    description: {
        type: String,
    },
    superpowers: {
        type: String,

    },
    catchPhrase: {
        type: String,
    },
    imageURL: {
        type: String

    },
}, {versionKey: false, timestamps: true})

const addSchema = Joi.object({
    name: Joi.string().required(),
    nickname: Joi.string().required(),
    description: Joi.string(),
    superpowers: Joi.string(),
    catchPhrase: Joi.string(),
    imageURL: Joi.string()

})

const schemas = {
    addSchema,

}
const Hero = model("Heroes", heroSchema)

module.exports = {
    Hero,
    schemas,
};