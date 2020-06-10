function resul1(a1,a2){
    a1  =  document.getElementById('a1').value;
    a2  =  document.getElementById('a2').value;
    let c=a1*a2
    document.getElementById('result1').innerHTML = c;
}
function resul2(a){
    var a, c;
    a  =  document.getElementById('a').value;
    if(a%4==0){
        c="Число кратное";
    }
    else{
        c="Число не кратно";
    }
    document.getElementById('result2').innerHTML = c;
}
function resul3(a){
    var a, c;
    a  =  document.getElementById('a').value;
    if(a%4==0){
        c="Год высокосный";
    }
    else{
        c="Год не высокосный";
    }
    document.getElementById('result3').innerHTML = c;
}
function resul4(a,b){
    for (let i=a; i<=b; i++){
        console.log(i);
    }
}
let xx=resul4(1,10);
function block4(){
    let elem = document.createElement('p');
    elem.style.cssText  = "display: inline-block;margin: 5px; border: 1px dotted black; width:100px; height:100px; background:blue;";
    some_div.append(elem);
}
block4();
block4();
block4();
block4();