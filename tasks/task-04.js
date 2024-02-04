function countZero(numberOfString){
    let count = 0;
    for(let i=0; i < numberOfString.length;i++){
        if(numberOfString[i] === '0'){
            count++;
        }
    }
    return count;
}
const numberOfString ="1010101100000000";
console.log(countZero(numberOfString));