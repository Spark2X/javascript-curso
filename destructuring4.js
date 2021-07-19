function rand( [min = 0, max = 1000] ) {
    if (min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return (Math.floor(valor))
}

console.log(rand([1, 60]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())



console.log('---------------------')
console.log('Free Win Mega:')

function mega( min = 1, max = 60, result = 6 ) {
    var resultado = []
    for (let index = 0; index < 6; index++) {
        const valor = Math.random() * (max - min) + min
        resultado.push((Math.floor(valor)))
    }
    return resultado
}

console.log(mega())