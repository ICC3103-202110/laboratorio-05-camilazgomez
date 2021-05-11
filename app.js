const { printTable } = require('console-table-printer');
const prompt=require('prompt-sync')({sigint:true});
const chalk = require('chalk');


calculator=(bill,percent,tip,total)=>{
    while (true){
    const views=require('./view');
    const updates=require('./update');
    const currentView=views.summary(Math.round(bill*100)/100,Math.round(percent*100)/100,Math.round(tip*100)/100,Math.round(total*100)/100);
    console.clear();
    console.log(chalk.green(views.title()));
    printTable(currentView);
    bill= Number(prompt(chalk.green(`? `)+`bill amount? `+chalk.blackBright(`(${bill}) `)));
    console.clear();
    console.log(chalk.green(views.title()));
    printTable(currentView);
    console.log(chalk.green(`? `)+`bill amount? `+chalk.cyan(`${bill} `));
    percent= Number(prompt(chalk.green(`? `)+`Tip(%)? `+chalk.blackBright(`(${percent}) `)));
    tip= Number(updates.update_tip(bill,percent));
    total=updates.update_total(bill,tip);

    }

}

calculator(0,0,0,0);

