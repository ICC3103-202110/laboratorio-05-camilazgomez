const update_tip=(bill,percent)=> {
    return bill*(percent/100);
}

const update_total=(bill,tip)=> {
    return (bill+tip);
}

module.exports={
    update_tip,
    update_total,
}