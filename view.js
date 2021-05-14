const inquirer= require("inquirer");
const figlet = require('figlet');
const chalk = require('chalk');

const title =()=>{return chalk.cyan(figlet.textSync('Tip Calculator App', {
    font: 'rozzo',
    horizontalLayout: 'full',
    verticalLayout: 'default',
    width: 140,
    whitespaceBreak: false
}));}

//Function that creates table with parameters
const summary=(model) => {return ([
  { "Bill Amount": "$"+Math.round(model.bill*100)/100, "Tip (%)": Math.round(model.percent*100)/100+"%", Tip:"$"+Math.round(model.tip*100)/100,Total:"$"+Math.round(model.total*100)/100},
]);}

function getInputs(model){
    const {bill,percent}=model.model;
    return inquirer.prompt([
        { 
            name: 'bill',
            type: 'number',
            message: "Bill amount?",
            default: bill,
        },
        {
            name: 'percent',
            type: 'number',
            message: 'Tip(%)?',
            default: percent,
        }
    ])
}

function view(model){
    return {
        title:title(),
        table:summary(model),
    }
}


module.exports={
    view,
    getInputs
}
