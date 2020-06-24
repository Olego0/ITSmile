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
    let csvs = `Date: ${ggg.date}`;
    let csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv) + ';' + encodeURIComponent(csvs);
    this.href = csvData;
    // this.target = '_blank';
    this.download = 'filename.txt';
    // fs.writeFileSync("filename.txt", `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`);
    // let text = `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`
    // document.write('<a href="text.txt;charset=utf-8,%EF%BB%BF' + encodeURIComponent(text) + '">text.txt</a>');
    
};
// ================================================================


