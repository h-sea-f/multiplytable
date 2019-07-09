function isValid(start,end){
    if(start<=end&&start>0&&end<1000)
        return true;
    else return false;
}
function createReport(start,end){
    let report="";
    for(let i=start;i<=end;i++){
        for(let j=start;j<=i;j++){
            report+=j+"*"+i+"="+i*j+(j==i?"\n":"\t");
        }
    }
    console.log(report);
    return report;
}
function createMultiplyTable(start,end){
    if(isValid(start,end)) 
        return createReport(start,end);
    else return null;
}
module.exports = {
    isValid,createMultiplyTable,createReport,createMultiplyTable
}