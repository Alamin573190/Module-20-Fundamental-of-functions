function evenNumberOnly(numbers){
    const evens = [];
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number);
            evens.push(number);

        }
    }
    return evens;
}
    
    const numbers=[2, 4, 7 , 6, 9];
    const evens = evenNumberOnly(numbers)
    console.log(evens);
