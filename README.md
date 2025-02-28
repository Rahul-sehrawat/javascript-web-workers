# javascript-web-workers

JavaScript Web Workers are a way to run scripts in background threads. They allow you to execute scripts concurrently, without blocking the main execution thread of your web application. This is especially useful for performing time-consuming tasks that would otherwise slow down the user interface, such as complex calculations, data processing, or fetching large amounts of data.

### Key Features of Web Workers:

- Concurrency: Web Workers run in the background, allowing the main thread to remain responsive.
Independent Execution: They run independently of the main thread and each other. This means they have their own execution context.

- Communication: Communication between the main thread and web workers is done via message passing using the `postMessage` method. This is achieved through a system of events, where the main thread can send messages to workers, and workers can respond back.

```javascript
const worker = new Worker('worker.js')
worker.postMessage('hello')
```

### Types of Web Workers:

1. Dedicated Workers: These are single-instance workers used by a single script. Each worker is associated with a single web page.

2. Shared Workers: These can be accessed by multiple scripts, even if they are in different windows, iframes, or web workers.

### Limitations:
1. Same-Origin Policy: The script file for the worker must be on the same origin as the calling script.

2. Limited Access: Web Workers have no access to the DOM, the window object, and certain JavaScript features like alert or localStorage.

3. Performance Overhead: While Web Workers provide concurrency, they also come with overhead for message passing and creating the worker context.

### Use Cases:
- Heavy Computations: Performing complex calculations or data processing without freezing the UI.

```javascript
onmessage = function(message){
    console.log(`This msg comes from main thread ${message.data}`)
    
    let sum = 0
    for (i=0 ; i<1000000000;i++) sum += i
    
    this.postMessage(sum)
}
```

- Background Data Fetching: Fetching large data sets in the background.

- Real-time Data Processing: Processing data from streams, such as real-time chat applications or data visualization.


## Global Object

In a web worker context, the global object is not window as it is in the main thread. Instead, the global scope within a web worker is represented by the self object, which refers to the worker itself.

- Main Thread: The global object is window.
- Worker Thread: The global object is self.

note:-  you can omit 'self' as it's implicit