var brd = document.createElement("DIV");
document.body.insertBefore(brd, document.getElementById("board"));
const duration = 3000;
const speed = 0.5;
const cursorXOffset = 0;
const cursorYOffset = -5;
var hearts = [];
function generateHeart(x, y, xBound, xStart, scale)
{
   var heart = document.createElement("DIV");
   heart.setAttribute('class', 'heart');
   brd.appendChild(heart);
   heart.time = duration;
   heart.x = x;
   heart.y = y;
   heart.bound = xBound;
   heart.direction = xStart;
   heart.style.left = heart.x + "px";
   heart.style.top = heart.y + "px";
   heart.scale = scale;
   heart.style.transform = "scale(" + scale + "," + scale + ")";
   if(hearts == null)
    hearts = [];
   hearts.push(heart);
   return heart;
}
var before = Date.now();
var id = setInterval(frame, 5);
function frame()
{
   var current = Date.now();
   var deltaTime = current - before;
   before = current;
   for(i in hearts)
   {
    var heart = hearts[i];
    heart.time -= deltaTime;
    if(heart.time > 0)
    {
     heart.y -= speed;
     heart.style.top = heart.y + "px";
     heart.style.left = heart.x + heart.direction * heart.bound * Math.sin(heart.y * heart.scale / 30) + "px";
    }
    else
    {
     heart.parentNode.removeChild(heart);
     hearts.splice(i, 1);
    }
   }
}
setInterval(() => generateRandomHeart(),75);
function generateRandomHeart(){
    let x = generateRandomNumber(1, screen.width);
    let y = generateRandomNumber(1, screen.height);
    let scale = Math.random() * Math.random() * 0.8 + 0.2;
    let xBound = 30 + Math.random() * 20;
    let xStart = 1 - Math.round(Math.random()) * 2;
    
    generateHeart(x, y, xBound, xStart, scale);
}

