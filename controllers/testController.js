const testController = (req,res)=>{
    res.status(200)
    res.send({
        message: "Hello World"
    });
}

module.exports = testController;