/*
 * This is the login screen.
 */

 import { Router } from "express";
 const router = Router()
 
 router.get("/", (req, res) => {
     res.render('login/login')
 })
 
 export default router;
 