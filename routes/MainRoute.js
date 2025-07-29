const {Router} = require("express");
const KeyboardController = require("../controllers/KeyboardController")
const KeyboardRouter = Router();

KeyboardRouter.get("/",KeyboardController.mainpage);

KeyboardRouter.get("/brand",KeyboardController.brandGet);

KeyboardRouter.get("/switch",KeyboardController.switchGet);

KeyboardRouter.get("/additem",KeyboardController.formpageGet);
KeyboardRouter.post("/additem",KeyboardController.formpagePost);


module.exports = KeyboardRouter;
