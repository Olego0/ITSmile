let fname=document.getElementById('names');
let lname=document.getElementById('surnames');
let time=document.getElementById('times');

document.getElementById('send').addEventListener('click', sent);
let ggg;
let password;
let passwordOne;
function sent(){
    ggg = {
        name: fname.value,
        surname: lname.value,
        date: time.value
    }
    console.log(ggg);
}
// ================================================================
document.getElementsByTagName('a')[0].onclick = function() {  
    console.log(variants.value);             
    if(variants.value == 1){
        password = "-пришел";
        passwordOne = "    пришел/ушел: пришел";
    } else{
        password = "-ушел";
        passwordOne = "    пришел/ушел: ушел";
    }
    let csv = `Name: ${ggg.name} ${ggg.surname}`;
    let csvs = `    Date: ${ggg.date}`;
    let csvData = 'data:application/csv;charset=utf-8,' + 
                    encodeURIComponent(csv) + ';' + 
                    encodeURIComponent(csvs) + ';' + 
                    encodeURIComponent(passwordOne) + ';';
    this.href = csvData;
    this.download = ggg.name + ' ' + 
                    ggg.surname + 
                    password + '.txt';
    window.location.reload()
};
const variants = document.getElementById("variants");
// ====================DarkMode====================
const round = document.querySelector('.round');
const body = document.querySelector('body');
let mode = false;
round.addEventListener('click', eventHandler);
function eventHandler({ target }) {
    if (mode === false) {
        mode = true;
        body.style.background = 'aqua';
        body.style.transition = 1 + "s";
        round.style.background = 'cornsilk';
        round.style.transition = 1 + "s";

    } else if (mode === true) {
        mode = false;
        body.style.background = '#3e4243';
        body.style.transition = 1 + "s";
        round.style.background = '#608ae4';
    }
}
// ================================================
