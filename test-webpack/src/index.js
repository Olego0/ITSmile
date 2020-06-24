import './styles.css';
const fname=document.getElementById('names');
const lname=document.getElementById('surnames');
const time=document.getElementById('times');

const lsend=document.getElementById('send');

lsend.addEventListener('click', sent);
let text;
let ggg;
function sent(){
    ggg = {
        name: fname.value,
        surname: lname.value,
        date: time.value
    }
    console.log(ggg);
}
// const save = document.getElementById("saveBtn");
// console.log(save);
// save.addEventListener("click", function() {
//   console.log("rgtrtt");
//   let csv = `Name: ${ggg.name} ${ggg.surname} Date: ${ggg.date}`;
//   let csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);
//   this.href = csvData;
//   this.target = '_blank';
//   this.download = 'filename.csv';
  
// });


Excel.run(function (context) {
  var sheet = context.workbook.worksheets.getItem("Sample");
  var expensesTable = sheet.tables.add("A1:D1", true /*hasHeaders*/);
  expensesTable.name = "ExpensesTable";

  expensesTable.getHeaderRowRange().values = [["Date", "Merchant", "Category", "Amount"]];

  expensesTable.rows.add(null /*add rows to the end of the table*/, [
      ["1/1/2017", "The Phone Company", "Communications", "$120"],
      ["1/2/2017", "Northwind Electric Cars", "Transportation", "$142"],
      ["1/5/2017", "Best For You Organics Company", "Groceries", "$27"],
      ["1/10/2017", "Coho Vineyard", "Restaurant", "$33"],
      ["1/11/2017", "Bellows College", "Education", "$350"],
      ["1/15/2017", "Trey Research", "Other", "$135"],
      ["1/15/2017", "Best For You Organics Company", "Groceries", "$97"]
  ]);

  if (Office.context.requirements.isSetSupported("ExcelApi", "1.2")) {
      sheet.getUsedRange().format.autofitColumns();
      sheet.getUsedRange().format.autofitRows();
  }

  sheet.activate();

  return context.sync();
}).catch(errorHandlerFunction);

























































// ===============================================================================
// var fs = require('fs');
// var xlsx = require('xlsx');
 
// var cell1 = 'A1';
 
 
// var workbook = xlsx.readFile('result_iz4islenia.xlsx');
 
 
// var sheets = workbook.Sheets;
 
 
// var sheetNames = workbook.SheetNames;
 
// var sheetName = workbook.SheetNames[0];
// var sheet = workbook.Sheets[sheetName ];
 
// for (var i = 0; i < workbook.SheetNames.length; ++i) {
// var sheet = workbook.Sheets[workbook.SheetNames[i]];
// }
// console.log(sheet[cell1].v);