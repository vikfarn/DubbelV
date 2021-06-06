let moving = [];
for(let i = 0; i < 39; i++){
    moving[i] = false;
}
let interval = setInterval(() => ActivateImage(0), 2000);
setTimeout(() => setInterval(() => ActivateImage(33), 2000), 1000);
setTimeout(() => setInterval(() => ActivateImage(66), 2000), 2000);

function ActivateImage(leftBias){
    let imageId;
    while(true){
        imageId = generateRandomNumber(1, 39);
        if(!moving[imageId]){
            break;
        }
    }
    
    let time = generateRandomNumber(9, 11);
    let width = generateRandomNumber(20,40);
    let left = generateRandomNumber(0 + leftBias, 33  + leftBias - width);
    moving[imageId] = true;
    document.getElementById(imageId).style = "left:" + left + "vw;width: " + width + "vw;display: block;animation: propel-image " + time +"s linear";
    setTimeout(() => {
        document.getElementById(imageId).style = "display: none;";
        moving[imageId] = false;
    }, time*1000);
    //setTimeout(DeactivateImage(imageId), 1000);
}

const generateRandomNumber = (min, max) =>  {
    return Math.floor(Math.random() * (max - min) + min);
      };

      
/*.image {
    position:absolute;
    top: -100vh;
    left: 10em;
    width: 50em;
    animation: propel-balloon 10s linear;
    }
    
    @keyframes propel-balloon {
    
        0% {
        position:absolute;
        top: 110vh;
        left: 10em;
        }
    
        100% {
        position:absolute;
        top: -100vh;
        left: 10em;
        }
    }*/