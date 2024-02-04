// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function makeAvg(Arrays){
    let sum = 0;
    for(const array of Arrays ){
        // console.log(array);
        sum = sum + array;
        // console.log(sum);
    }
    return sum / size;
}
const itArray =[4 ,2 ,3 ,5 ,9];
const size = itArray.length;
const sum = makeAvg(itArray)
console.log(sum);
console.log(itArray , size );

