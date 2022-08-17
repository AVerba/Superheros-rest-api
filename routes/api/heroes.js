const express = require('express');

const ctrlHeroes = require("../../controllers/heroes");
const {ctrlWrapper} = require("../../helpers");
const {isValidId, validation, upload} = require("../../middlewares");
const {schemas} = require('../../models/hero')

const router = express.Router();

router.get('/', ctrlWrapper((ctrlHeroes.getAll)));

router.get("/:id", isValidId, ctrlWrapper(ctrlHeroes.getById));
//
// router.post('/', validation(schemas.addSchema), ctrlWrapper(ctrlHeroes.add));
router.post('/', upload.single("imageURL"),  ctrlWrapper(ctrlHeroes.add));
//
router.delete('/:id',isValidId, ctrlWrapper(ctrlHeroes.removeById));
//
router.put('/:id',isValidId, validation(schemas.addSchema), ctrlWrapper(ctrlHeroes.updateById));
//
router.put("/avatars/:id", upload.single("imageURL"), ctrlWrapper(ctrlHeroes.updateAvatar));


module.exports = router;
