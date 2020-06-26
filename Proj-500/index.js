
// ========================================================

// const oleh=1234,
// YarikPass=123123,
// OlehPass=654321;

let pas= +prompt("Ваш пароль:");
let subj = prompt("Your leson:");
let coin = +prompt("Your coin:");
let point = +prompt("Your points:");
let OlehPass = 123;
let ArsPass = 321;
let YarikPass = 312;


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

}else if(pas == ArsPass){
    document.getElementById("a").innerHTML = DB.ars.name;

}else if(pas == YarikPass){
   document.getElementById("a").innerHTML = DB.yarik.name;

}







