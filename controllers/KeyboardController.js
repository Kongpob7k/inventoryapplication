const Data = require("../db/query");

exports.mainpage = (req,res)=>{
    res.render("index");
}

exports.brandGet = async(req,res)=>{
    const data = await Data.getallname();
    const brand = await Data.getallbrand();
    res.render("brand",{data,brand});
}

exports.switchGet = async(req,res)=>{
    const data = await Data.getallname();
    const sw = await Data.getallswitch();
    res.render("switch",{data,sw});
}

exports.formpageGet = (req,res)=>{
    res.render("form");
}

exports.formpagePost = (req,res)=>{
    Data.insertkeyboard(req.body.name,req.body.brand,req.body.switch);
    res.redirect("/");
}           