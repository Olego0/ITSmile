let divblock = [
    ("div1"),
    ("div2"),
    ("div3"),
    ("div4"),
    ("div5"),
    ("div6"),
    ("div7"),
    ("div8"),
    ("div9"),
    ("div10"),
    ("div11")
];
let DB = {
    1234: {score: 0},

    4321: {score: 0}
};
let ok;
console.log(DB);

console.log(ok);
const start = document.getElementById("div100");
start.addEventListener("click", ggg);
let random = Math.floor(Math.random()*11);
/* console.log(typeof(DB["1234"])); */
// let conf = confirm("Точно ли запустить?");
function ggg(){
    document.getElementById(divblock[random]).style.backgroundColor="black";
    random = Math.floor(Math.random()*11);
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
            ggg();
        }
    }
    console.log(random);

    for (let pup in DB) {
        if (num == random) {
    
            DB[pup].score = DB[pup][num] * 11;
            console.log(DB[pup][num]);
            setTimeout(jackpot, 800);
            function jackpot(){
                confirm ("ДЖЕКПОТ!!! ВЫ ВЫИГРАЛИ "+DB[pup].score+" баллов");
            }
        }
    }
    
}
let pass = +prompt("your pass:");
while (pass == null || pass == "") {
    pass = +prompt("your pass:");
}
let num;
let coin;
for (let key in DB) {
    if (key == pass) {
        num = +prompt("your number:");
        coin = +prompt("your coins:");

        DB[key][num] = coin;
        console.log(num);
        /* 
        break; */
    }
}



console.log(DB);



// let number;
// DB.forEach(number => { 
//     if (random == DB[key][num]) {
//         DB[key]["score"] = coin * 11;
//     }
// });
