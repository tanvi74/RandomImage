const router = require('express').Router();
const ImageInfo = require('../models/ImageGallery');

router.post('/store', async(req,res)=>{
    console.log(req.body);

    const findURL = await ImageInfo.findOne({id: req.body.id});
    if(!findURL){
        const imageinfo = new ImageInfo({
            id: req.body.id,
            urlofimage: req.body.imageURL
        });
    
        try{
            const savedUser = await imageinfo.save();
            res.json({
                status: "success",
            });
        }catch(err){
            res.send(err);
        }
    }else{
        findURL.urlofimage = req.body.imageURL;
        await findURL.save();
    }

    
})

router.post('/get-info', async(req,res)=>{
    console.log(req.body);
    const imagefindurl = await ImageInfo.findOne({id: req.body.id});
    if(!imagefindurl){
        return res.json({
            status: "notFound"
        })
    }


    return res.json({
        status: "found",
        imageurl: imagefindurl.urlofimage
    })
})

router.post('/all-images',async(req,res)=>{
    console.log(req.body);

    if(req.body.apiKey !== process.env.API_KEY){
        return res.json({status: "badRequest"})
    }

    // console.log(Book.find())
    const imageURLDetails = await ImageInfo.find();
    console.log(imageURLDetails);
    res.json({
        status: "yipeee",
        imageURL: imageURLDetails
    })
})

module.exports = router;