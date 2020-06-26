
// ========================================================

// const oleh=1234,
// YarikPass=123123,
// OlehPass=654321;
let OlehPass = 123;
let ArsPass = 321;
let YarikPass = 312;

let headSubj;
let headCoin;
let headPoint;

let subj;
let coin;
let point;

let subj1;
let coin1;
let point1;

let headName;



let pas= +prompt("Ваш пароль:");
subj = prompt("Your leson:");
coin = +prompt("Your coin:");
point = +prompt("Your points:");


let DB = {
    oleh:{
        name: "oleh",
        coins: coin,
        points: point,
        subject: subj
    },
    ars:{
        name: "ars",
        coins: coin,
        points: point,
        subject: subj
    },
    yarik:{
        name: "yarik",
        coins: coin,
        points: point,
        subject: subj
    }
}
if(pas == OlehPass){
    document.getElementById("a").innerHTML = DB.oleh.name;
    document.getElementById("b").innerHTML = point;
    document.getElementById("c").innerHTML = coin;
    document.getElementById("d").innerHTML = subj;  
    
    headName = DB.oleh.name;
}else if(pas == ArsPass){
    document.getElementById("a").innerHTML = DB.ars.name;
    document.getElementById("b").innerHTML = coin;
    document.getElementById("c").innerHTML = point;
    document.getElementById("d").innerHTML = subj;
     
    headName = DB.ars.name;
}else if(pas == YarikPass){
    document.getElementById("a").innerHTML = DB.yarik.name;
    document.getElementById("b").innerHTML = coin;
    document.getElementById("c").innerHTML = point;
    document.getElementById("d").innerHTML = subj;
    
    headName = DB.yarik.name;
}

let button = document.getElementById("buttonPlusOne");
button.addEventListener("click", buttonFuncOne)
function buttonFuncOne(){
    subj1 = prompt("Your leson:");
    coin1 = +prompt("Your coin:");
    point1 = +prompt("Your points:");
    console.log("ghrtyrtyrtyrtyrtyrtyrtyrtyrtyrtytryrtyrtyrtyrthgrhrghrt");
    document.getElementById("ggg").innerHTML = headName;
    document.getElementById("fff").innerHTML = subj1;
    document.getElementById("jjj").innerHTML = coin1;
    document.getElementById("ooo").innerHTML = point1;
    // document.querySelector(".ggg").innerHTML = `<div class="grid-tr" id="ggg"><div class="grid-td">
    //     <div>2</div>
    // </div>
    // <div class="grid-td">
    //     <div>${headName}</div>
    // </div>
    // <div class="grid-td">
    //     <div>${subj1}</div>
    // </div>
    // <div class="grid-td">
    //     <div>${coin1}</div>
    // </div>
    // <div class="grid-td">
    //     <div>${point1}</div>
    // </div></div>`;
}






