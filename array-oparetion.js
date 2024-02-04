function sumOfNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        console.log(number);
        sum = sum + number;
    }
    return sum;


}
const numbs = [56 ,62 ,12 ,6]
const sum = sumOfNumbers(numbs);
console.log('sum of numbers',sum);