console.log("Det funkar");

document.addEventListener("keydown", (event) => {

    console.log(event.key);

    if (event.key == "q"){
        document.getElementById("q").style = "color: crimson;"
    } 

    else if (event.key == "w"){
        document.getElementById("w").style = "color: red";
    } 

    else if (event.key == "e"){
        document.getElementById("e").style = "color: darkorange";
    } 

    else if (event.key == "r"){
        document.getElementById("r").style = "color: orange";
    } 
    else if (event.key == "t"){
        document.getElementById("t").style = "color: gold";
    } 

    else if (event.key == "y"){
        document.getElementById("y").style = "color: greenyellow";
    } 
    else if (event.key == "u"){
        document.getElementById("u").style = "color: lime";
    } 
    else if (event.key == "i"){
        document.getElementById("i").style = "color: forestgreen";
    } 
    else if (event.key == "o"){
        document.getElementById("o").style = "color: cyan";
    }
    else if (event.key == "p"){
        document.getElementById("p").style = "color: dodgerblue";
    } 
    else if (event.key == "å"){
        document.getElementById("å").style = "color: indigo";
    } 
    else if (event.key == "a"){
        document.getElementById("a").style = "color: red";
    }
    else if (event.key == "s"){
        document.getElementById("s").style = "color: darkorange";
    } 
    else if (event.key == "d"){
        document.getElementById("d").style = "color: orange";
    } 
    else if (event.key == "f"){
        document.getElementById("f").style = "color: gold";
    } 
    else if (event.key == "g"){
        document.getElementById("g").style = "color: greenyellow";
    }
    else if (event.key == "h"){
        document.getElementById("h").style = "color: lime";
    } 
    else if (event.key == "j"){
        document.getElementById("j").style = "color: forestgreen";
    } 
    else if (event.key == "k"){
        document.getElementById("k").style = "color: cyan";
    } 
    else if (event.key == "l"){
        document.getElementById("l").style = "color: dodgerblue";
    } 
    else if (event.key == "ö"){
        document.getElementById("ö").style = "color: indigo";
    } 
    else if (event.key == "ä"){
        document.getElementById("ä").style = "color: darkmagenta";
    } 
    else if (event.key == "z"){
        document.getElementById("z").style = "color: darkorange";
    }
    else if (event.key == "x"){
        document.getElementById("x").style = "color: orange";
    } 
    else if (event.key == "c"){
        document.getElementById("c").style = "color: gold";
    } 
    else if (event.key == "v"){
        document.getElementById("v").style = "color: greenyellow";
    } 
    else if (event.key == "b"){
        document.getElementById("b").style = "color: lime";
    } 
    else if (event.key == "n"){
        document.getElementById("n").style = "color: forestgreen";
    } 
    else if (event.key == "m"){
        document.getElementById("m").style = "color: cyan";
    } 

    

});

document.addEventListener("keyup", (event) => {
    if (event.key == "q") {
        document.getElementById("q").style = "color: white";
    }

    else if (event.key == "w") {
        document.getElementById("w").style = "color: white";
    }
    else if (event.key == "e") {
        document.getElementById("e").style = "color: white";
    }
    else if (event.key == "r") {
        document.getElementById("r").style = "color: white";
    }
    else if (event.key == "t") {
        document.getElementById("t").style = "color: white";
    }
    else if (event.key == "y") {
        document.getElementById("y").style = "color: white";
    }
    else if (event.key == "u") {
        document.getElementById("u").style = "color: white";
    }
    else if (event.key == "i") {
        document.getElementById("i").style = "color: white";
    }
    else if (event.key == "o") {
        document.getElementById("o").style = "color: white";
    }
    else if (event.key == "p") {
        document.getElementById("p").style = "color: white";
    }
    else if (event.key == "å") {
        document.getElementById("å").style = "color: white";
    }
    else if (event.key == "a") {
        document.getElementById("a").style = "color: white";
    }
    else if (event.key == "s") {
        document.getElementById("s").style = "color: white";
    }
    else if (event.key == "d") {
        document.getElementById("d").style = "color: white";
    }
    else if (event.key == "f") {
        document.getElementById("f").style = "color: white";
    }
    else if (event.key == "g") {
        document.getElementById("g").style = "color: white";
    }
    else if (event.key == "h") {
        document.getElementById("h").style = "color: white";
    }
    else if (event.key == "j") {
        document.getElementById("j").style = "color: white";
    }
    else if (event.key == "k") {
        document.getElementById("k").style = "color: white";
    }
    else if (event.key == "l") {
        document.getElementById("l").style = "color: white";
    }
    else if (event.key == "ö") {
        document.getElementById("ö").style = "color: white";
    }
    else if (event.key == "ä") {
        document.getElementById("ä").style = "color: white";
    }
    else if (event.key == "z") {
        document.getElementById("z").style = "color: white";
    }
    else if (event.key == "x") {
        document.getElementById("x").style = "color: white";
    }
    else if (event.key == "c") {
        document.getElementById("c").style = "color: white";
    }
    else if (event.key == "v") {
        document.getElementById("v").style = "color: white";
    }
    else if (event.key == "b") {
        document.getElementById("b").style = "color: white";
    }
    else if (event.key == "n") {
        document.getElementById("n").style = "color: white";
    }
    else if (event.key == "m") {
        document.getElementById("m").style = "color: white";
    }
  
});

let gTal = 0;

document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() == "g") {
        gTal = gTal + 1;
    }
    else{
        gTal = 0;
    }

    if (gTal == 3) {
        document.getElementById("rainbow").classList.add("rainbow");

        gTal = 0;
    }
});

let musikTal = 0;

document.addEventListener("keydown", (event) => {
    let tangent = event.key.toLowerCase();

    if (tangent == "w") {
        musikTal = musikTal + 1;
    } else{
        musikTal = 0;
    }

    if (musikTal == 4) {

       

        let video = document.getElementById("min_video");
        video.classList.add("visa-video");
        video.play();

        musikTal = 0;
        
    }
});

document.getElementById("min_video").addEventListener("ended", () => {
    let video = document.getElementById("min_video");
    video.classList.remove("visa-video");
})


