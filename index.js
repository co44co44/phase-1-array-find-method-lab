// code your solution here


//



function superbowlWin (records){
    const whatever=records.find(record => record.result === "W");
    return whatever? whatever.year: undefined
}
console.log (record.find (superbowlWin));
