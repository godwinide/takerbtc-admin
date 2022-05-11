const router = require("express").Router();

router.get("/", async (req,res) => {
    try{
        return res.render("down", {pageTitle: "Server Closed Down", req});
    }
    catch(err){
        return res.redirect("/");
    }
});


module.exports = router;