onmessage = function(message){
    console.log(`This msg comes from main thread ${message.data}`)
    
    let sum = 0
    for (i=0 ; i<1000000000;i++) sum += i
    
    this.postMessage(sum)
}