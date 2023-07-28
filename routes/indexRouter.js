const express = require("express");
const UserController = require("../controllers/UserController");
const IndexController = require("../controllers/IndexController");
const createValidator = require("../middlewares/createValidator");
const checkUser = require("../middlewares/checkUser");
const router = express.Router();

router.get("/", IndexController.index);
router.get("/create",IndexController.createPage);
router.get("/read", IndexController.readPage);
router.get("/update", IndexController.updatePage);
router.get("/delete", IndexController.deletePage);

router.post("/create", createValidator, checkUser, UserController.createUserPost);
router.post("/read", UserController.readUserPost);
router.post("/update", UserController.updateUserPost);
router.post("/delete", UserController.deleteUserPost);


module.exports = router;