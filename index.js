const sumBtn = document.getElementById('sum');
const bgBtn = document.getElementById('bg');
const worker = new Worker('worker.js')

// This function sends a msg to the worker
sumBtn.addEventListener('click',()=>{
    worker.postMessage('hello')
})

// Listen for worker msg
worker.onmessage = function(message){
    console.log(`This message comes from worked thread ${message.data}`)
    alert(`The Sum is ${message.data} `)
   
}

// This function goes to main thread
bgBtn.addEventListener('click',()=>{
    if(document.body.style.background !== 'white'){
        document.body.style.background = 'White'
    }
    else{
        document.body.style.background = 'black'
    }
})

