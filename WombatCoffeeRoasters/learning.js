function multiply(num, times){
    if(time == 1){
        return num;
    }
    return num + multiply(num, times - 1);
}

console.log(multiply(2,3));
console.log(multiply(7,6));