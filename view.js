const { printTable } = require('console-table-printer');
var figlet = require('figlet');

const title =()=>{return (figlet.textSync('Tip Calculator App', {
    font: 'nancyj-underlined',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 140,
    whitespaceBreak: false
}));}

//Function that creates table with parameters
const summary=(bill,percent,tip=0,total=0) => {return ([
  { "Bill Amount": "$"+bill, "Tip (%)": percent+"%", Tip:"$"+tip  ,Total:"$"+total},
]);}

module.exports={
    summary,
    title,
}
//print
//printTable(summary(1000,10,100,1100));

