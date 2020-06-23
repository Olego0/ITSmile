/* const allDB=[
    {
        name: '',
        surname: '',
        date: ''
    }
]
// const button = send.addEventListener()

function sent() {

} */
// let html;
// function sent() {
//     let fname = document.getElementById('names').value;
//     let lname = document.getElementById('surnames').value;
//     let time = document.getElementById('times').value;

//     html = 'Hello <b>' + fname + '</b> ' + lname + '</b> ' + time;
 
//     // document.getElementById('result').innerHTML = html;
// }
 
// document.getElementById('send').addEventListener('click', sent);
// console.log(sent);


let fname=document.getElementById('names');
let lname=document.getElementById('surnames');
let time=document.getElementById('times');

document.getElementById('send').addEventListener('click', sent);

function sent(){
     let ggg = {
        name: fname.value,
        surname: lname.value,
        date: time.value
    }
    console.log(ggg);
}
