const { printTable } = require('console-table-printer');
const chalk = require('chalk');
const { getInputs } = require('./view');


async function app(state,view,update) {
    while (true){
    const {model, currentView} = state;
    const {title, table} = currentView;
    console.clear();
    console.log(title);
    printTable(table);
    const {bill,percent}= await getInputs(state);
    const newState= update(model,bill,percent);
    state= {
        ...state,
        model:newState,
        currentView:view(newState)
    }

    }

}

module.exports={
    app
}

