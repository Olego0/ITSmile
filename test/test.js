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
    ("div11"),
    ("div12")
]

let random = Math.floor(Math.random()*12);
console.log(random);



let conf = confirm("Точно ли запустить?");
/* if (conf==true){
    document.getElementById(divblock[random]).style.backgroundColor="red";
} */

for (let i =0; i<999; i++){
    /* conf = confirm("Точно ли запустить?")
    if (conf==true){
        document.getElementById(divblock[random]).style.backgroundColor="red";
    }
    if (conf==false){
        break;
    } */


    function switchcolor () {
        document.getElementById(divblock[random]).style.backgroundColor="red";
    }
    
    function User (callback){
        let conf = confirm("Точно ли запустить?");
        callback();
    }
    
    User(switchcolor);
}

