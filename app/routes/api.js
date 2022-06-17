const router = require('express').Router();
const Users= require("../http/controller/userController")
const users=new Users();
const Auth=require("../http/middleware/Auth")



router.post("/user/login",users.login);
router.post("/user/register",users.register);

router.get("/list/getList",Auth,users.getList);
router.post("/list/addTodo",Auth,users.addTodo);
router.get("/list/editTodo/:id",Auth,users.editTodo);
router.delete("/list/deleteTodo/:id",Auth,users.deleteTodo);



module.exports = router;
