
let password =+ prompt("Your password:");
let leson;
let mybal;
let mycoins;
let passwords = {
    oleh:{
        pass: 123,
        coins: {},
        points: {}
    },
    ars: {
        pass: 321,
        coins: {}
    }
    
}
passwords.oleh.coins[leson] = mybal;
if(password == passwords.oleh.pass){
    console.log("1");
    leson = prompt("Your leson:");
    mybal =+ prompt("Your bal:");
    mycoins =+ prompt("Your coins:");
    document.getElementById('a').innerHTML = password.oleh;
    document.getElementById('b').innerHTML = password.oleh;
    document.getElementById('c').innerHTML = password.coins

} else if(password == passwords.ars.pass){
    console.log("2");
    leson = prompt("Your leson:");
    mybal =+ prompt("Your bal:");
    mycoins =+ prompt("Your coins:");
    document.getElementById('a').innerHTML = password.ars;
    document.getElementById('b').innerHTML = password.ars;
    document.getElementById('c').innerHTML = password.ars
} else{
    alert("Вас нету в базе данных!!!");
}
console.log(passwords.oleh);
console.log(passwords.ars);


