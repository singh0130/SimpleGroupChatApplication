const express= require('express');

const router= express.Router();


router.get('/login', (req,res,next) => {
    res.send('<form action="/" method="POST"><label for="user">Username </label><input type="text" id="user" name="user"><label for="msg">Message </label> <input type="text" id="msg" name="msg"> <button type="submit" value="submit"> Send Message</button></form>');
});

