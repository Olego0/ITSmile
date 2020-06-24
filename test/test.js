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
let ggg;
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
    let csv = `Name: ${ggg.name} ${ggg.surname}`;
    let csvs = `    Date: ${ggg.date}`;
    let csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv) + ';' + encodeURIComponent(csvs);
    this.href = csvData;
    // this.target = '_blank';
    this.download = ggg.name+' '+ggg.surname+'.txt';

    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    // fs.writeFileSync("filename.txt", `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`);
    // let text = `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`
    // document.write('<a href="text.txt;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '">text.txt</a>');
    
};

/* 
let sfname=document.getElementById('namess');
let slname=document.getElementById('surnamess');
let stime=document.getElementById('timess');

document.getElementById('sends').addEventListener('click', sents);
let gggg;
function sents(){
    gggg = {
        names: sfname.value,
        surnames: slname.value,
        dates: stime.value
    }
    console.log(gggg);
}
// ================================================================
document.getElementsByClassName('f2')[0].onclick = function() {                  
    let csvss = `Name: ${gggg.names} ${gggg.surnames}`;
    let csvsss = `    Date: ${gggg.dates}`;
    let csvDatas = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csvss) + ';' + encodeURIComponent(csvsss);
    this.href = csvDatas;
    // this.target = '_blank';
    this.download = gggg.names+' '+gggg.surnames+'(ушел).txt';

    window.location.reload()
    window.location.reload()
    window.location.reload()
    window.location.reload()
    // fs.writeFileSync("filename.txt", `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`);
    // let text = `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`
    // document.write('<a href="text.txt;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '">text.txt</a>');
    
};
// ================================================================


 */