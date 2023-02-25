function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/IiNU2XL6q/model.json' ,modelReady);
}
function modelReady()
{
    classifier.clasify(gotResults);
}