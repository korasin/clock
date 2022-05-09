// console.log('it loaded') -testing linking

setInterval(setClock,1000)

function setClock(){
    const currentDate =new Date()
    const secondRatio = currentDate.getSeconds() /60
    const minuteRatio = (secondRatio + currentDate.getMinutes()) /60
    const hourRatio = (secondRatio + currentDate.getHours()) /12
}