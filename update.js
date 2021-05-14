const update_tip=(bill,percent)=> {
    return bill*(percent/100);
}

const update_total=(bill,tip)=> {
    return (bill+tip);
}

function update(model,newBill,newPercent){
    const newTip=update_tip(newBill,newPercent);
    const newTotal=update_total(newBill,newTip);
    return {
        ...model,
        bill: newBill,
        percent:newPercent,
        tip:newTip,
        total:newTotal
    }
}

module.exports={
    update
}