const vision = require('@google-cloud/vision');
const dotenv = require("dotenv");
dotenv.config();

const imgRecognitionAPI= new vision.ImageAnnotatorClient({
    keyFilename:process.env.GOOGLE_APPLICATION_CREDENTIALS
});

async function detectLabels(file){
    try{
       const[result]= await imgRecognitionAPI.labelDetection(file);
        const label = result.labelAnnotations;
        const labelsDescriptions = label.map(label=>label.description);
        return labelsDescriptions;
    }
    catch(err){
        console.log(err);
        return;
    }
}


module.exports={
    detectLabels
}