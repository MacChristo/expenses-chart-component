let bars = document.querySelectorAll(".bar");
let barAmount = document.querySelectorAll(".bar-amount");
let monLength;
let tueLength;
let wedLength;
let thuLength;
let friLength;
let satLength;
let sunLength;

import data from './data.json' assert{type: 'json'};
let myJSONData = data;

let useJSONData = function () {
    
    for (let i = 0; i < bars.length; i++) {
        for (let j = 0; j < barAmount.length; j++) {
            bars[i].addEventListener("mousemove", function () {
                if (j = i) {
                    barAmount[j].style.visibility = "visible";
                }
            })  
            bars[i].addEventListener("mouseout", function() {
                if (j = i) {
                    barAmount[j].style.visibility = "hidden";
                }
            })
        }
    }
    bars[0].addEventListener("mousemove", function () {
            barAmount[0].style.visibility = "visible";
    }) 
    bars[0].addEventListener("mouseout", function () {
        barAmount[0].style.visibility = "hidden";
    })

    let changeBarHeight = function () {
        monLength = 50 + myJSONData[0].amount;
        document.querySelector(".mon-bar").style.height = monLength + "px";

        tueLength = 50 + myJSONData[1].amount;
        document.querySelector(".tue-bar").style.height = tueLength + "px";

        wedLength = 50 + myJSONData[2].amount;
        document.querySelector(".wed-bar").style.height = wedLength + "px";

        thuLength = 50 + myJSONData[3].amount;
        document.querySelector(".thu-bar").style.height = thuLength + "px";

        friLength = 50 + myJSONData[4].amount;
        document.querySelector(".fri-bar").style.height = friLength + "px";

        satLength = 50 + myJSONData[6].amount;
        document.querySelector(".sat-bar").style.height = satLength + "px";

        sunLength = 50 + myJSONData[6].amount;
        document.querySelector(".sun-bar").style.height = sunLength + "px";
    }
    
    changeBarHeight();

    let changeBarColor = function () {
        const day = new Date;
        let weekday = day.getDay();
        switch (weekday) {
            case 0:
                bars[6].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            case 1:
                bars[0].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            case 2:
                bars[1].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            case 3:
                bars[2].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            case 4:
                bars[3].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            case 5:
                bars[4].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            case 6:
                bars[5].style.backgroundColor = " hsl(186, 34%, 60%)";
                break;
            default:
                break;
        }
    }

    changeBarColor();
}

useJSONData();
