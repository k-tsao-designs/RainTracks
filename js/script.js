$(document).ready(function(){

//     var lyr1;
//     var lyr2;
//     var lyr3;
//     var lyr4;
//     var lyr5;
//     var lyr6;
//     var lyr7; 
//     var repeat = 16;

//     for (lyr1= 0; lyr1 < repeat; lyr1++) { 
//         addLayer1(lyr1);
//     }

//     //add layer1 images

// function addLayer1(lyr1) {
//     var randomScrollTopRoad = Math.round((Math.random() * 2400) + 1200);
//     var randomScrollBottomRoad = Math.round((Math.random() * 1000) + 0);
//     var randomTopRoad = Math.round((Math.random() * 400) + 0);
//     var randomLeftRoad = Math.round((Math.random() * 370) + 0);
//     var randomWidthRoad = ((Math.random() * 3) + 1.5);
//     var randomHeightRoad = Math.round((Math.random() * 667) + 50);

//     var randomScrollTopParis = Math.round((Math.random() * 1200) + 0);
//     var randomScrollBottomParis = Math.round((Math.random() * 1000) + 0);
//     var randomTopParis = Math.round((Math.random() * 400) + 0);
//     var randomLeftParis = Math.round((Math.random() * 370) + 0);
//     var randomWidthParis = ((Math.random() * 3) + 1.5);
//     var randomHeightParis = Math.round((Math.random() * 667) + 50);

//     var randomScrollTopNYC = Math.round((Math.random() * 1200) + 0);
//     var randomScrollBottomNYC = Math.round((Math.random() * 1000) + 0);
//     var randomTopNYC = Math.round((Math.random() * 400) + 0);
//     var randomLeftNYC = Math.round((Math.random() * 370) + 0);
//     var randomWidthNYC = ((Math.random() * 3) + 1.5);
//     var randomHeightNYC = Math.round((Math.random() * 667) + 50);
    
//     $("body").append(
//         "<div id = \"track" + lyr1 + "\" 
//         + data-0=\"top:-" + randomScrollTopRoad + "px;\"
//         + data-" + randomScrollBottomRoad + "p=\"top:0px;\"" +
//         "></div>")
//         .addClass("layer1")
//         .addClass("tracks")
//         .css({
//             top: randomTopRoad + 'px',
//             left: randomLeftRoad + 'px',
//             width: randomWidthRoad + "%",
//             height: randomHeightRoad + "px",
//             backgroundImage: "url('images/road.jpg');",
//                 });

//     $("body").append("<div id = \"track" + lyr1 + "\"
//         + data-0=\"top:-" + randomScrollTopParis + "px;\"
//         + data-" + randomScrollBottomParis + "p=\"top:0px;\"" +
//         "></div>")
//         .addClass("layer1")
//         .addClass("tracks")
//         .css({
//             top: randomTopParis + 'px',
//             left: randomLeftParis + 'px',
//             width: randomWidthParis + "%",
//             height: randomHeightParis + "px",
//             backgroundImage: "url('images/paris.jpg');",
//                 });

//     $("body").append("<div id = \"track" + lyr1 + "\"
//         + data-0=\"top:-" + randomScrollTopNYC + "px;\"
//         + data-" + randomScrollBottomNYC + "p=\"top:0px;\"" +
//         "></div>")
//         .addClass("layer1")
//         .addClass("tracks")
//         .css({
//             top: randomTopNYC + 'px',
//             left: randomLeftNYC + 'px',
//             width: randomWidthNYC + "%",
//             height: randomHeightNYC + "px",
//             backgroundImage: "url('images/nyc.jpg');",
//                 });

// }

var audio = document.getElementById("bg-noise");
audio.play();

});
    

