const express = require("express");
const router = express.Router();
const {detectLanguage,translateText} = require('../utils/translateFunctions');
const {LANGUAGE_ISO_CODE}= require('../utils/dictionaries');
const { sendMail } = require("../utils/mailFunctions");
const { detectLabels } = require("../utils/imageRecognitionFunctions");

router.get("/detect", async (req, res)=>{
    const { text }=req.body;
    
    if(!text){
        return res.status(400).send("Missing parameters");

    }

    const languageDetection = await detectLanguage(text);
    return res.json({
        language: languageDetection[0]?.language
    });

});

router.get("/translate", async (req, res) => {
    const {text, language} = req.body;

    if (!text || !language) {
        return res.status(400).send("Missing Parametres");
    }

    if(!LANGUAGE_ISO_CODE[language]){
        return res.status(400).send("Invalid Language");
    }

    const translatedText = await translateText(text, LANGUAGE_ISO_CODE[language]); //here!!
    return res.json({
        translatedText: translatedText[0]
    })
});

router.post("/send",async(req,res)=>{
    const{ senderName,senderMail,receiverMail,messageContent}=req.body;
    if(!senderName||!senderMail||!receiverMail||!messageContent){
        return res.status(400).send("missing params");
    }
    sendMail(receiverMail,senderMail,messageContent,`${senderName} has sent you a message`);
    res.sendStatus(200);
});

router.get("/labels",async (req,res)=>{
    const{link} = req.body;
    if(!link){
        return res.status(400).send("missing params");

    }

    const labels = await detectLabels(link);
    return res.json({
        labels
    })
})


module.exports = router;