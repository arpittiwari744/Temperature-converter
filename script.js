window.addEventListener("load", convert, false);
function convert() {
    document.getElementById("convert").onclick=calculate;    
}
function calculate() {
    var temp=Number(document.getElementById("num").value);
    if (document.getElementById("celsius").checked) {
        document.getElementById("cel").value=temp;  
        document.getElementById("far").value=temp*9/5+32;
        document.getElementById("kel").value=temp+273.15;
    }
    else if (document.getElementById("fahrenhite").checked) {
        document.getElementById("cel").value=(temp-32)*5/9;
        document.getElementById("far").value=temp;
        document.getElementById("kel").value=(temp-32)*(5/9)+273.15;
    }
    else if (document.getElementById("kelvin").checked) {
        document.getElementById("cel").value=temp-273.15;
        document.getElementById("far").value=(temp-273.15)*(9/5)+32;
        document.getElementById("kel").value=temp;
    }
    else{
        alert("Choose a Unit..");
    }
    return;
}