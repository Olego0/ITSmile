let divblock = [
    ("div1"),("div2"),("div3"),("div4"),("div5"),("div6"),("div7"),("div8"),("div9"),("div10"),
    ("div11"),("div12"),("div13"),("div14"),("div15"),("div16"),("div17"),("div18"),("div19"),("div20"),
    ("div21"),("div22"),("div23"),("div24"),("div25"),("div26"),("div27"),("div28"),("div29"),("div30"),
    ("div31"),("div32")
];
let DB = {
    1: {score: 0},
    2: {score: 0},
    3: {score: 0},
    4: {score: 0},
    5: {score: 0},
    6: {score: 0}
};console.log(DB);
let ok, num, coin;
const start = document.getElementById("div100");
start.addEventListener("click", ggg);
let random = Math.floor(Math.random()*32);
/* console.log(typeof(DB["1234"])); */
function ggg(){
    document.getElementById(divblock[random]).style.backgroundColor="black";
    random = Math.floor(Math.random()*32);
    document.getElementById(divblock[random]).style.backgroundColor="red";
    setTimeout(sayHi, 1000);
    function sayHi() {
        ok = confirm("one more???");
        if (ok == true) {
            num = +prompt("your number:");
            coin = +prompt("your coins:");
            DB[key][num] = coin;
            ggg();
        }
        else if (ok == false) {
            console.log(DB);
        }
    }
    console.log(random);

    for (let pup in DB) {
        if (num == random) {
    
            DB[pup].score = DB[pup][num] * 32;
            console.log(DB[pup][num]);
            document.getElementById("a").innerHTML = DB[1234].score;
            document.getElementById("b").innerHTML = DB[4321].score;
            setTimeout(jackpot, 800);
            function jackpot(){
                alert("ДЖЕКПОТ!!! ВЫИГРАЛИ "+DB[pup].score+" баллов");
            }
        }
    }
    
}
let pass = +prompt("your pass:");
while(pass == null || pass == "") {
    pass = +prompt("your pass:");
}
for (let key in DB) {
    if (key == pass) {
        num = +prompt("your number:");
        coin = +prompt("your coins:");

        DB[key][num] = coin;
        console.log(num);
        /* break; */
    }
}
console.log(DB);
// let number;
// DB.forEach(number => { 
//     if (random == DB[key][num]) {
//         DB[key]["score"] = coin * 11;
//     }
// });