
//document.getElementById('image1').style.backgroundImage = 'url(darkbg.jpg)';
//   document.getElementById("link1").href = "http://facebook.com";
//document.getElementById("link1").innerHTML = "facebook";   
//var linktest = "http://youtube.com";
//document.getElementById("link1").href = linktest;


var linkArray = [];
var linkNameArray = [];
var gameNameArray = [];
var imageArray = []; // works
var arrayCount = 0;

var img = new Image();


img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/brickGameImage.PNG?csf=1&e=86XRzN";
imageArray[0] = img.src;

linkArray[0] = "https://adcsuf.sharepoint.com/sites/Soft-Warehouse/SitePages/brick.aspx";
linkNameArray[0] = "Click here to play! No Download!";
gameNameArray[0] = "Brick Breaker Battle";

document.getElementById("link1").href = linkArray[0];
document.getElementById("link1").innerHTML = linkNameArray[0];  
document.getElementById("text1").innerHTML = gameNameArray[0];
document.getElementById("image1").style.backgroundImage = 'url('+imageArray[0]+')';

arrayCount++;

function addGame(link,linkName,gameName,image)
{
    
        linkArray[arrayCount] = link;
        linkNameArray[arrayCount] = linkName;
        gameNameArray[arrayCount] = gameName;
        imageArray[arrayCount] = image.src;
if(arrayCount < 9) // first 9 boxes in first page display, rest activate prev/next button
{
    if((arrayCount) % 9 == 0)
    {
        document.getElementById("link2").href = linkArray[arrayCount];
        document.getElementById("link2").innerHTML = linkNameArray[arrayCount];  
        document.getElementById("text2").innerHTML = gameNameArray[arrayCount];
        document.getElementById("image2").style.backgroundImage = 'url('+imageArray[arrayCount]+')'; 
     }
    else if((arrayCount) % 9 == 1)
    {
     document.getElementById("link2").href = linkArray[arrayCount];
     document.getElementById("link2").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text2").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image2").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 2)
    {
     document.getElementById("link3").href = linkArray[arrayCount];
     document.getElementById("link3").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text3").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image3").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 3)
    {
     document.getElementById("link4").href = linkArray[arrayCount];
     document.getElementById("link4").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text4").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image4").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 4)
    {
     document.getElementById("link5").href = linkArray[arrayCount];
     document.getElementById("link5").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text5").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image5").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 5)
    {
     document.getElementById("link6").href = linkArray[arrayCount];
     document.getElementById("link6").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text6").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image6").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 6)
    {
     document.getElementById("link7").href = linkArray[arrayCount];
     document.getElementById("link7").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text7").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image7").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 7)
    {
     document.getElementById("link8").href = linkArray[arrayCount];
     document.getElementById("link8").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text8").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image8").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
    else if((arrayCount) % 9 == 8)
    {
     document.getElementById("link9").href = linkArray[arrayCount];
     document.getElementById("link9").innerHTML = linkNameArray[arrayCount];  
     document.getElementById("text9").innerHTML = gameNameArray[arrayCount];
     document.getElementById("image9").style.backgroundImage = 'url('+imageArray[arrayCount]+')';
    }
}
arrayCount++; // incremement array count
}
// INITIALIZE FIRST 81 ARRAYS (to avoid errors and have fillers for -9 games a page)
img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/silverBanner.jpg?csf=1&e=hCo56d";
for(let i = 1;i < 81; i++)
{
    linkArray[i] = "none";
    linkNameArray[i] = "Your Link Could Be Here!";
    gameNameArray[i] = "Your Game Could Be Here!";
    imageArray[i] = img.src;
}

var pageCount = 1;

function decrement(){

    if(pageCount > 1) // if there is still more games to display
    {

        pageCount--;


        document.getElementById("link1").href = linkArray[(pageCount * 1)-1];
        document.getElementById("link1").innerHTML = linkNameArray[(pageCount * 1)-1];  
        document.getElementById("text1").innerHTML = gameNameArray[(pageCount * 1)-1];
        document.getElementById("image1").style.backgroundImage = 'url('+imageArray[(pageCount * 1)-1]+')'; 
     
        document.getElementById("link2").href = linkArray[(pageCount * 2)-1];
        document.getElementById("link2").innerHTML = linkNameArray[(pageCount * 2)-1];  
        document.getElementById("text2").innerHTML = gameNameArray[(pageCount * 2)-1];
        document.getElementById("image2").style.backgroundImage = 'url('+imageArray[(pageCount * 2)-1]+')';

        document.getElementById("link3").href = linkArray[(pageCount * 3)-1];
        document.getElementById("link3").innerHTML = linkNameArray[(pageCount * 3)-1];  
        document.getElementById("text3").innerHTML = gameNameArray[(pageCount * 3)-1];
        document.getElementById("image3").style.backgroundImage = 'url('+imageArray[(pageCount * 3)-1]+')';

        document.getElementById("link4").href = linkArray[(pageCount * 4)-1];
        document.getElementById("link4").innerHTML = linkNameArray[(pageCount * 4)-1];  
        document.getElementById("text4").innerHTML = gameNameArray[(pageCount * 4)-1];
        document.getElementById("image4").style.backgroundImage = 'url('+imageArray[(pageCount * 4)-1]+')';

        document.getElementById("link5").href = linkArray[(pageCount * 5)-1];
        document.getElementById("link5").innerHTML = linkNameArray[(pageCount * 5)-1];  
        document.getElementById("text5").innerHTML = gameNameArray[(pageCount * 5)-1];
        document.getElementById("image5").style.backgroundImage = 'url('+imageArray[(pageCount * 5)-1]+')';

        document.getElementById("link6").href = linkArray[(pageCount * 6)-1];
        document.getElementById("link6").innerHTML = linkNameArray[(pageCount * 6)-1];  
        document.getElementById("text6").innerHTML = gameNameArray[(pageCount * 6)-1];
        document.getElementById("image6").style.backgroundImage = 'url('+imageArray[(pageCount * 6)-1]+')';

        document.getElementById("link7").href = linkArray[(pageCount * 7)-1];
        document.getElementById("link7").innerHTML = linkNameArray[(pageCount * 7)-1];  
        document.getElementById("text7").innerHTML = gameNameArray[(pageCount * 7)-1];
        document.getElementById("image7").style.backgroundImage = 'url('+imageArray[(pageCount * 7)-1]+')';

        document.getElementById("link8").href = linkArray[(pageCount * 8)-1];
        document.getElementById("link8").innerHTML = linkNameArray[(pageCount * 8)-1];  
        document.getElementById("text8").innerHTML = gameNameArray[(pageCount * 8)-1];
        document.getElementById("image8").style.backgroundImage = 'url('+imageArray[(pageCount * 8)-1]+')';

        document.getElementById("link9").href = linkArray[(pageCount * 9)-1];
        document.getElementById("link9").innerHTML = linkNameArray[(pageCount * 9)-1];  
        document.getElementById("text9").innerHTML = gameNameArray[(pageCount * 9)-1];
        document.getElementById("image9").style.backgroundImage = 'url('+imageArray[(pageCount * 9 )-1]+')';   
    }
}
function increment(){

    if((arrayCount / pageCount) > 9) // if there is still more games to display
    {

        pageCount++;


        document.getElementById("link1").href = linkArray[(pageCount * 1)];
        document.getElementById("link1").innerHTML = linkNameArray[(pageCount * 1)];  
        document.getElementById("text1").innerHTML = gameNameArray[(pageCount * 1)];
        document.getElementById("image1").style.backgroundImage = 'url('+imageArray[(pageCount * 1)]+')'; 
     
        document.getElementById("link2").href = linkArray[(pageCount * 2)];
        document.getElementById("link2").innerHTML = linkNameArray[(pageCount * 2)];  
        document.getElementById("text2").innerHTML = gameNameArray[(pageCount * 2)];
        document.getElementById("image2").style.backgroundImage = 'url('+imageArray[(pageCount * 2)]+')';

        document.getElementById("link3").href = linkArray[(pageCount * 3)];
        document.getElementById("link3").innerHTML = linkNameArray[(pageCount * 3)];  
        document.getElementById("text3").innerHTML = gameNameArray[(pageCount * 3)];
        document.getElementById("image3").style.backgroundImage = 'url('+imageArray[(pageCount * 3)]+')';

        document.getElementById("link4").href = linkArray[(pageCount * 4)];
        document.getElementById("link4").innerHTML = linkNameArray[(pageCount * 4)];  
        document.getElementById("text4").innerHTML = gameNameArray[(pageCount * 4)];
        document.getElementById("image4").style.backgroundImage = 'url('+imageArray[(pageCount * 4)]+')';

        document.getElementById("link5").href = linkArray[(pageCount * 5)];
        document.getElementById("link5").innerHTML = linkNameArray[(pageCount * 5)];  
        document.getElementById("text5").innerHTML = gameNameArray[(pageCount * 5)];
        document.getElementById("image5").style.backgroundImage = 'url('+imageArray[(pageCount * 5)]+')';

        document.getElementById("link6").href = linkArray[(pageCount * 6)];
        document.getElementById("link6").innerHTML = linkNameArray[(pageCount * 6)];  
        document.getElementById("text6").innerHTML = gameNameArray[(pageCount * 6)];
        document.getElementById("image6").style.backgroundImage = 'url('+imageArray[(pageCount * 6)]+')';

        document.getElementById("link7").href = linkArray[(pageCount * 7)];
        document.getElementById("link7").innerHTML = linkNameArray[(pageCount * 7)];  
        document.getElementById("text7").innerHTML = gameNameArray[(pageCount * 7)];
        document.getElementById("image7").style.backgroundImage = 'url('+imageArray[(pageCount * 7)]+')';

        document.getElementById("link8").href = linkArray[(pageCount * 8)];
        document.getElementById("link8").innerHTML = linkNameArray[(pageCount * 8)];  
        document.getElementById("text8").innerHTML = gameNameArray[(pageCount * 8)];
        document.getElementById("image8").style.backgroundImage = 'url('+imageArray[(pageCount * 8)]+')';

        document.getElementById("link9").href = linkArray[(pageCount * 9)];
        document.getElementById("link9").innerHTML = linkNameArray[(pageCount * 9)];  
        document.getElementById("text9").innerHTML = gameNameArray[(pageCount * 9)];
        document.getElementById("image9").style.backgroundImage = 'url('+imageArray[(pageCount * 9 )]+')';
        
    }
}
    // Flappy Bird
    img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/101508108-flappy_bird.jpg?csf=1&e=I2dwRb";
    addGame("https://adcsuf.sharepoint.com/:u:/r/sites/Soft-Warehouse/SitePages/FlappyTest.aspx?csf=1&e=NkF8W4","Click Here To Play!No Download!","Flappy Bird",img);

    // Big Money Beat Em Up
    img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/bigmoneypic.PNG?csf=1&e=GzjJHR";
    addGame("https://adcsuf.sharepoint.com/:u:/r/sites/Soft-Warehouse/Shared%20Documents/PunchingDemo(1).zip?csf=1&e=OGzN3Y","Click Here To Download Now!","Big Money Beat-Em-Up",img);
    
    // Pong Game
    img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/pongpic.PNG?csf=1&e=ZjyvVg";
    addGame("https://adcsuf.sharepoint.com/:u:/r/sites/Soft-Warehouse/Pictures/pong.jar?csf=1&e=rucRYI","Click Here To Download Now!","Pong Classic",img);

    // Snake Game
    img.src ="https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/SnakePreview.png?csf=1&e=GTmUAu";
    addGame("https://adcsuf.sharepoint.com/:u:/r/sites/Soft-Warehouse/SitePages/snake.aspx?csf=1&e=PbJsjt","Click Here To Play!No Download!","Snake Classic",img);

    // patatap
    img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/patatap-picture.png?csf=1&e=8oRyq2";
    addGame("https://adcsuf.sharepoint.com/:u:/r/sites/Soft-Warehouse/ChrisLibrary/patatap/circles.aspx?csf=1&e=2efhC3","Click Here To Play!No Download!","Patatap",img);

    // colors
    img.src = "https://adcsuf.sharepoint.com/:i:/r/sites/Soft-Warehouse/Pictures/color-game.png?csf=1&e=5AxKJ5";
    addGame("https://adcsuf.sharepoint.com/:u:/r/sites/Soft-Warehouse/ChrisLibrary/color-game/colorGame.aspx?csf=1&e=txVXWU","Click here to play!No Download","Color Game",img);


    