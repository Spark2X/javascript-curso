function soma() {
    let num = 0
    for(i in arguments){
        num += arguments[i];
    }
 return num;
}

console.log(soma(3, 2, 4, 1, 2, 34, 2));