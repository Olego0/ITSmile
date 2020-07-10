let divblock = [
    "div1","div2","div3","div4","div5","div6","div7","div8","div9","div10",
    "div11","div12","div13","div14","div15","div16","div17","div18","div19","div20",
    "div21","div22","div23","div24","div25","div26","div27","div28","div29","div30",
    "div31","div32","div33","div34","div35","div36"
];
console.log(document.getElementsByTagName("div"));
 
let key;
let but;
let DB = {
    1: {score: 0},
    2: {score: 0},
    3: {score: 0},
    4: {score: 0},
    5: {score: 0},
    6: {score: 0}
};
console.log(DB);
let ok;
let num;
let coin;
let lul;
const thjhfjhfj = document.getElementById("div100");
thjhfjhfj.addEventListener("click", ggg);
let random = Math.floor(Math.random()*2);
/* console.log(typeof(DB["1234"])); */
// let col = event.target.style.backgroundColor="black";

let hhh;
let headcoin;

function gggg() {
    document.getElementById(divblock[random]).style.backgroundColor="black";
    event.target.style.backgroundColor="blue";
    console.log(event.target.innerHTML);
    hhh = event.target.innerHTML;
    setTimeout(qqq, 500);
    function qqq(){
        coin = +prompt("your coins:");
        num = hhh;
        headcoin = coin * 36;
        DB[key].score + headcoin; 
        console.log(DB);
        // event.target.style.backgroundColor="black";
    }
}






function ggg(){
    document.getElementById(divblock[random]).style.backgroundColor="black";
    random = Math.floor(Math.random()*2);
    document.getElementById(divblock[random]).style.backgroundColor="red";
    setTimeout(sayHi, 2000);
    function sayHi() {
        ok = confirm("one more???");
    }
    console.log(random);

    for (let pup in DB) {
        if (num == random) {
    
            DB[pup].score = DB[pup][num] * 36;
            console.log(DB[pup][num]);
            document.getElementById("a").innerHTML = DB[1].score;
            document.getElementById("b").innerHTML = DB[2].score;
            document.getElementById("c").innerHTML = DB[3].score;
            document.getElementById("d").innerHTML = DB[4].score;
            document.getElementById("e").innerHTML = DB[5].score;
            document.getElementById("g").innerHTML = DB[6].score;
            // setTimeout(jackpot, 800);
            // function jackpot(){
            //     alert("ДЖЕКПОТ!!! ВЫИГРАЛИ "+DB[pup].score+" баллов");
            // }
        }
    }
    
}
let pass = +prompt("your pass:");
while(pass == null || pass == "") {
    pass = +prompt("your pass:");
}
for (key in DB) {
    if (key == pass) {
        num = +prompt("your number:");
        coin = +prompt("your coins:");

        DB[key][num] = coin;
        console.log(num);
        /* break; */
    }
}
console.log(DB);













