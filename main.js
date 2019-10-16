let numbers = [];
let val = document.getElementById("val");
let btn = document.getElementsByTagName("button");
let values;
let va1 = 0;
let va2 = 0;
let Tsum;
let num1;
let num2;
let va3;
let va4;
let va5;
let va6;
let va7;
let va8;
let va9;
let va10;
let sum = /\d\+\d/;
let m = /\d\-\d/;
let x = /\d\×\d/;
let s = /\d\%\d/;
let t = /\d\÷\d/;
let sd = "";
let b;
getT();
for (let i = 1; i < 19; i++) {
    btn[i].addEventListener("click", s => {
        values = s.target.attributes.name.value;
        getF();
        if (values == "=" || values == "%" || values == "×" || values == "+" ||values == "÷" || values == "-" || values == "p") {

        } else {
            val.innerHTML += values;
        }

    });
}
btn[0].addEventListener("click", k => {
    val.innerHTML = "";
    getT();
});
///////////////equals
btn[18].addEventListener("click", k => {
    btn[15].setAttribute("disabled","");
    getF();
    zero();
    let val = document.getElementById("val");
    getS(val.innerHTML);
    Tsum = b;
    num1 = val.innerHTML.split("+");
    va1 = num1[0];
    va2 = num1[1];
    num2 = val.innerHTML.split("-");
    va3 = num2[0];
    va4 = num2[1];
    num3 = val.innerHTML.split("×");
    va5 = num3[0];
    va6 = num3[1];
    num4 = val.innerHTML.split("÷");
    va7 = num4[0];
    va8 = num4[1];
    num5 = val.innerHTML.split("%");
    va9 = num5[0];
    va10 = num5[1];
    if (Tsum) {
        if (sd == "+") {
            val.innerHTML = parseFloat(va1) + parseFloat(va2);
        }
        if (sd == "-") {
            val.innerHTML = parseFloat(va3) - parseFloat(va4);
        }
        if (sd == "×") {
            val.innerHTML = parseFloat(va5) * parseFloat(va6);
        }
        if (sd == "÷") {
            val.innerHTML = parseFloat(va7) / parseFloat(va8);
        }
        if (sd == "%") {
            val.innerHTML = parseFloat(va9) % parseFloat(va10);
        }
    } else {
        console.log("F");
    }

});
//////////////%
btn[3].addEventListener("click", k => {
    val.innerHTML += values;
    getT();

});
/////////////////X
btn[7].addEventListener("click", k => {
    val.innerHTML += values;
    getT();
});
////////////////-
btn[11].addEventListener("click", k => {
    val.innerHTML += values;


});
////////////////////+
btn[15].addEventListener("click", k => {
    val.innerHTML += values;
    getT();
    

});
btn[2].addEventListener("click", k => {
    val.innerHTML += values;
    getT();
    
});

function getS(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "+") {
            sd = "+";
            b = sum.test(val.innerHTML);
        }
        if (string[i] == "-") {
            sd = "-";
            b = m.test(val.innerHTML);
        }
        if (string[i] == "×") {
            sd = "×";
            b = x.test(val.innerHTML);
        }
        if (string[i] == "÷") {
            sd = "÷";
            b = t.test(val.innerHTML);
        }
        if (string[i] == "%") {
            sd = "%";
            b = s.test(val.innerHTML);
        }

    }
}
function getT() {
   
    
    btn[15].setAttribute("disabled","");
    btn[3].setAttribute("disabled","");
    btn[7].setAttribute("disabled","");
    btn[11].setAttribute("disabled","");
    btn[2].setAttribute("disabled","");
    
}
function getF() {
   
    
    btn[15].removeAttribute("disabled");
    btn[3].removeAttribute("disabled");
    btn[7].removeAttribute("disabled");
    btn[11].removeAttribute("disabled");
    btn[2].removeAttribute("disabled");


}
function zero(){
    va1=0;
    va2=0;
    va3=0;
    va4=0;
    va5=0;
    va6=0;
    va7=0;
    va8=0;
}

