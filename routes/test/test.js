const router = require("express").Router();


router.get("/", function(req, res){
    res.send("test route worked")
});

router.post("/api/test", function(req, res){
    res.send("test route worked")
});

module.exports = router