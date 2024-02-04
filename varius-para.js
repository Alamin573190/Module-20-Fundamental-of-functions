function stringsize(str){
    const size = str.length;

    console.log(str ,size);
    if(size % 2 === 0){
        console.log('even size');
        return true;

    }
    else{
        console.log('odd size');
        return false;
    }


}
// stringsize('Alamin');
// stringsize('hosaain');

// condition

function doubleOrTriple (number ,double){
    if(double=== true){
        const result =number* 2 ;
        return result;

    }
    else{
        const result = number * 3;
        return result;
    }
}
console.log(doubleOrTriple(5 ,true));
console.log(doubleOrTriple(5 ,false));
