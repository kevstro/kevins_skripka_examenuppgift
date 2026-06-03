console.log("Det funkar");

document.addEventListener("keydown", (event) => {

    console.log(event.key);
    if (event.key == "q"){
        document.getElementById("q").style = "background-color: crimson;"
    } 
    else if (event.key == "Tab"){
        event.preventDefault();
        document.getElementById("tab").style = "background-color: crimson";
    }
    else if (event.key == "Escape"){
        document.getElementById("esc").style = "background-color: crimson";
    }
    else if (event.key == "§"){
        document.getElementById("§").style = "background-color: crimson";
    } 
    else if (event.key == "CapsLock"){
        document.getElementById("capslock").style = "background-color: crimson";
    }
    else if (event.code == "ControlLeft" ){
        document.getElementById("ctrlV").style = "background-color: crimson";
    }
    else if (event.code == "ShiftLeft"){
        document.getElementById("shiftV").style = "background-color: crimson";
    }
//________________________________________________________________________________________
    else if (event.key == "w"){
        document.getElementById("w").style = "background-color: red";
    } 
    else if (event.key == "e"){
        document.getElementById("e").style = "background-color: darkorange";
    } 
    else if (event.key == "r"){
        document.getElementById("r").style = "background-color: orange";
    } 
    else if (event.key == "t"){
        document.getElementById("t").style = "background-color: gold";
    } 
    else if (event.key == "y"){
        document.getElementById("y").style = "background-color: greenyellow";
    } 
    else if (event.key == "u"){
        document.getElementById("u").style = "background-color: lime";
    } 
    else if (event.key == "i"){
        document.getElementById("i").style = "background-color: forestgreen";
    } 
    else if (event.key == "o"){
        document.getElementById("o").style = "background-color: cyan";
    }
    else if (event.key == "p"){
        document.getElementById("p").style = "background-color: dodgerblue";
    } 
    else if (event.key == "å"){
        document.getElementById("å").style = "background-color: indigo";
    }
    else if (event.key == ""){      //Inget fungerar för accent eller trema frågade även chatgpt
        document.getElementById("pilupp").style = "background-color: cyan";
    }
    else if (event.key == "PageUp"){
        event.preventDefault();
        document.getElementById("pgup").style = "background-color: darkmagenta";
    }
//________________________________________________________________________________Mitten i layout 
    else if (event.key == "a"){
        document.getElementById("a").style = "background-color: red";
    }
    else if (event.key == "s"){
        document.getElementById("s").style = "background-color: darkorange";
    } 
    else if (event.key == "d"){
        document.getElementById("d").style = "background-color: orange";
    } 
    else if (event.key == "f"){
        document.getElementById("f").style = "background-color: gold";
    } 
    else if (event.key == "g"){
        document.getElementById("g").style = "background-color: greenyellow";
    }
    else if (event.key == "h"){
        document.getElementById("h").style = "background-color: lime";
    } 
    else if (event.key == "j"){
        document.getElementById("j").style = "background-color: forestgreen";
    } 
    else if (event.key == "k"){
        document.getElementById("k").style = "background-color: cyan";
    } 
    else if (event.key == "l"){
        document.getElementById("l").style = "background-color: dodgerblue";
    } 
    else if (event.key == "ö"){
        document.getElementById("ö").style = "background-color: indigo";
    } 
    else if (event.key == "ä"){
        document.getElementById("ä").style = "background-color: darkmagenta";
    }
    else if (event.code == "Backslash"){
        document.getElementById("star").style = "background-color: darkviolet";
    }
    else if (event.key == "Enter"){
        document.getElementById("enter").style = "background-color: darkorchid";
    }
    else if (event.key == "PageDown"){
        event.preventDefault();
        document.getElementById("pgdn").style = "background-color: darkmagenta";
    }
//________________________________________________________________________________________
    else if (event.code == "IntlBackslash"){
        document.getElementById("arrows").style = "background-color: red";
    } 
    else if (event.key == "z"){
        document.getElementById("z").style = "background-color: darkorange";
    }
    else if (event.key == "x"){
        document.getElementById("x").style = "background-color: orange";
    } 
    else if (event.key == "c"){
        document.getElementById("c").style = "background-color: gold";
    } 
    else if (event.key == "v"){
        document.getElementById("v").style = "background-color: greenyellow";
    } 
    else if (event.key == "b"){
        document.getElementById("b").style = "background-color: lime";
    } 
    else if (event.key == "n"){
        document.getElementById("n").style = "background-color: forestgreen";
    } 
    else if (event.key == "m"){
        document.getElementById("m").style = "background-color: cyan";
    }
    else if (event.code == "Comma"){
        document.getElementById("komma").style = "background-color: dodgerblue";
    }
    else if (event.code == "Period"){
        document.getElementById("punkt").style = "background-color: indigo";
    }
    else if (event.code == "Slash"){
        document.getElementById("sträck").style = "background-color: darkmagenta";
    }
    else if (event.code == "ShiftRight"){
        document.getElementById("shiftH").style = "background-color: darkorchid";
    }
    else if (event.key == "End"){
        document.getElementById("end").style = "background-color: darkmagenta";
        event.preventDefault();
    }
//________________________________________________________________________
    else if (event.key == "1"){
        document.getElementById("1").style = "background-color: crimson";
    }
    else if (event.key == "2"){
        document.getElementById("2").style = "background-color: red";
    } 
    else if (event.key == "3"){
        document.getElementById("3").style = "background-color: darkorange";
    }
    else if (event.key == "4"){
        document.getElementById("4").style = "background-color: orange";
    }
    else if (event.key == "5"){
        document.getElementById("5").style = "background-color: gold";
    } 
    else if (event.key == "6"){
        document.getElementById("6").style = "background-color: greenyellow";
    }
    else if (event.key == "7"){
        document.getElementById("7").style = "background-color: lime";
    } 
    else if (event.key == "8"){
        document.getElementById("8").style = "background-color: forestgreen";
    } 
    else if (event.key == "9"){
        document.getElementById("9").style = "background-color: cyan";
    } 
    else if (event.key == "0"){
        document.getElementById("0").style = "background-color: dodgerblue";
    }
    else if (event.key == "+"){
        document.getElementById("+").style = "background-color: indigo";
    } 
    else if (event.code == "Equal"){
        document.getElementById("accent").style = "background-color: darkmagenta";
    }
    else if (event.key == "Backspace"){
        document.getElementById("backspace").style = "background-color: darkorchid";
    }
    else if (event.key == "Home"){
        event.preventDefault();
        document.getElementById("home").style = "background-color: darkmagenta";
    } 
//__________________________________________________________________________________
    else if (event.code == "AltLeft"){
        event.preventDefault();
        document.getElementById("altL").style = "background-color: orange";
    }
    else if (event.code == "MetaLeft"){
        document.getElementById("window").style = "background-color: red";
    }
    else if (event.code == "Space"){
        event.preventDefault();
        document.getElementById("spacebar").style = "background-color: lime";
    } 
    else if (event.code == "AltRight"){
        document.getElementById("altH").style = "background-color: forestgreen";
    } 
    else if (event.code == "ContextMenu"){
        document.getElementById("clipboard").style = "background-color: cyan";
    } 
    else if (event.code == "ControlRight"){
        document.getElementById("ctrlH").style = "background-color: dodgerblue";
    } 
    else if (event.code == "ArrowLeft"){
        event.preventDefault();
        document.getElementById("leftarrow").style = "background-color: indigo";
    }
    else if (event.code == "ArrowUp"){
        event.preventDefault();
        document.getElementById("uparrow").style = "background-color: darkmagenta";
    } 
    else if (event.code == "ArrowDown"){
        event.preventDefault();
        document.getElementById("downarrow").style = "background-color: darkmagenta";
    }
    else if (event.code == "ArrowRight"){
        event.preventDefault();
        document.getElementById("rightarrow").style = "background-color: darkorchid";
    } 
//______________________________________________________________________________________________
    else if (event.code == "F2"){
    document.getElementById("f2").style = "background-color: red";
    } 
    else if (event.code == "Delete"){
        event.preventDefault();
        document.getElementById("delete").style = "background-color: darkmagenta";
    } 
});

document.addEventListener("keyup", (event) => {
        if (event.key == "q"){
            document.getElementById("q").style = "";
        } 
        else if (event.key == "Tab"){
            event.preventDefault();
            document.getElementById("tab").style = "";
        }
        else if (event.key == "Escape"){
            document.getElementById("esc").style = "";
        }
        else if (event.key == "§"){
            document.getElementById("§").style = "";
        } 
        else if (event.key == "CapsLock"){
            document.getElementById("capslock").style = "";
        }
        else if (event.code == "ControlLeft" ){
            document.getElementById("ctrlV").style = "";
        }
        else if (event.code == "ShiftLeft"){
            document.getElementById("shiftV").style = "";
        }
    //________________________________________________________________________________________
        else if (event.key == "w"){
            document.getElementById("w").style = "";
        } 
        else if (event.key == "e"){
            document.getElementById("e").style = "";
        } 
        else if (event.key == "r"){
            document.getElementById("r").style = "";
        } 
        else if (event.key == "t"){
            document.getElementById("t").style = "";
        } 
        else if (event.key == "y"){
            document.getElementById("y").style = "";
        } 
        else if (event.key == "u"){
            document.getElementById("u").style = "";
        } 
        else if (event.key == "i"){
            document.getElementById("i").style = "";
        } 
        else if (event.key == "o"){
            document.getElementById("o").style = "";
        }
        else if (event.key == "p"){
            document.getElementById("p").style = "";
        } 
        else if (event.key == "å"){
            document.getElementById("å").style = "";
        }
        else if (event.key == "PageUp"){
            event.preventDefault();
            document.getElementById("pgup").style = "";
        }
    //________________________________________________________________________________Mitten i layout 
        else if (event.key == "a"){
            document.getElementById("a").style = "";
        }
        else if (event.key == "s"){
            document.getElementById("s").style = "";
        } 
        else if (event.key == "d"){
            document.getElementById("d").style = "";
        } 
        else if (event.key == "f"){
            document.getElementById("f").style = "";
        } 
        else if (event.key == "g"){
            document.getElementById("g").style = "";
        }
        else if (event.key == "h"){
            document.getElementById("h").style = "";
        } 
        else if (event.key == "j"){
            document.getElementById("j").style = "";
        } 
        else if (event.key == "k"){
            document.getElementById("k").style = "";
        } 
        else if (event.key == "l"){
            document.getElementById("l").style = "";
        } 
        else if (event.key == "ö"){
            document.getElementById("ö").style = "";
        } 
        else if (event.key == "ä"){
            document.getElementById("ä").style = "";
        }
        else if (event.code == "Backslash"){
            document.getElementById("star").style = "";
        }
        else if (event.key == "Enter"){
            document.getElementById("enter").style = "";
        }
        else if (event.key == "PageDown"){
            event.preventDefault();
            document.getElementById("pgdn").style = "";
        }
    //________________________________________________________________________________________
        else if (event.code == "IntlBackslash"){
            document.getElementById("arrows").style = "";
        } 
        else if (event.key == "z"){
            document.getElementById("z").style = "";
        }
        else if (event.key == "x"){
            document.getElementById("x").style = "";
        } 
        else if (event.key == "c"){
            document.getElementById("c").style = "";
        } 
        else if (event.key == "v"){
            document.getElementById("v").style = "";
        } 
        else if (event.key == "b"){
            document.getElementById("b").style = "";
        } 
        else if (event.key == "n"){
            document.getElementById("n").style = "";
        } 
        else if (event.key == "m"){
            document.getElementById("m").style = "";
        }
        else if (event.code == "Comma"){
            document.getElementById("komma").style = "";
        }
        else if (event.code == "Period"){
            document.getElementById("punkt").style = "";
        }
        else if (event.code == "Slash"){
            document.getElementById("sträck").style = "";
        }
        else if (event.code == "ShiftRight"){
            document.getElementById("shiftH").style = "";
        }
        else if (event.key == "End"){
            document.getElementById("end").style = "";
            event.preventDefault();
        }
    //________________________________________________________________________
        else if (event.key == "1"){
            document.getElementById("1").style = "";
        }
        else if (event.key == "2"){
            document.getElementById("2").style = "";
        } 
        else if (event.key == "3"){
            document.getElementById("3").style = "";
        }
        else if (event.key == "4"){
            document.getElementById("4").style = "";
        }
        else if (event.key == "5"){
            document.getElementById("5").style = "";
        } 
        else if (event.key == "6"){
            document.getElementById("6").style = "";
        }
        else if (event.key == "7"){
            document.getElementById("7").style = "";
        } 
        else if (event.key == "8"){
            document.getElementById("8").style = "";
        } 
        else if (event.key == "9"){
            document.getElementById("9").style = "";
        } 
        else if (event.key == "0"){
            document.getElementById("0").style = "";
        }
        else if (event.key == "+"){
            document.getElementById("+").style = "";
        } 
        else if (event.code == "Equal"){
            document.getElementById("accent").style = "";
        }
        else if (event.key == "Backspace"){
            document.getElementById("backspace").style = "";
        }
        else if (event.key == "Home"){
            event.preventDefault();
            document.getElementById("home").style = "";
        } 
    //__________________________________________________________________________________
        else if (event.code == "AltLeft"){
            event.preventDefault();
            document.getElementById("altL").style = "";
        }
        else if (event.code == "MetaLeft"){
            document.getElementById("window").style = "";
        }
        else if (event.code == "Space"){
            event.preventDefault();
            document.getElementById("spacebar").style = "";
        } 
        else if (event.code == "AltRight"){
            document.getElementById("altH").style = "";
        } 
        else if (event.code == "ContextMenu"){
            document.getElementById("clipboard").style = "";
        } 
        else if (event.code == "ControlRight"){
            document.getElementById("ctrlH").style = "";
        } 
        else if (event.code == "ArrowLeft"){
            event.preventDefault();
            document.getElementById("leftarrow").style = "";
        }
        else if (event.code == "ArrowUp"){
            event.preventDefault();
            document.getElementById("uparrow").style = "";
        } 
        else if (event.code == "ArrowDown"){
            event.preventDefault();
            document.getElementById("downarrow").style = "";
        }
        else if (event.code == "ArrowRight"){
            event.preventDefault();
            document.getElementById("rightarrow").style = "";
        } 
    //______________________________________________________________________________________________
        else if (event.code == "F2"){
        document.getElementById("f2").style = "";
        } 
        else if (event.code == "Delete"){
            event.preventDefault();
            document.getElementById("delete").style = "";
        };
  
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

let videoTal = 0;

document.addEventListener("keydown", (event) => {
    let tangent = event.key.toLowerCase();

    if (tangent == "w") {
        videoTal = videoTal + 1;
    } else{
        videoTal = 0;
    }
    if (videoTal == 4) {
        let video = document.getElementById("min_video");
        video.classList.add("visa-video");
        video.play();

        videoTal = 0;
        
    }
});

document.getElementById("min_video").addEventListener("ended", () => {
    let video = document.getElementById("min_video");
    video.classList.remove("visa-video");
})


