Can you create a constructor function to create stopwatch objects that lets you start,stop,reset and check time?

Starting code:

```js
function Stopwatch(){
}

sw = new Stopwatch()
sw.start()
sw.stop()
sw.duration
sw.reset()
```

stop and start will through error if it was already in same state. 
duration is a read-only property

### Solution

```js
function Stopwatch(){
  let startTime, endTime, running, duration = 0
  
  this.start = function(){
    if(running)
      throw new Error("Stopwatch is already started")
     
    running = true
    startTime = new Date();
  }
  
  this.stop = function(){
    if(!running)
      throw new Error("Stopwatch is not running")
      
    running = false
    endTime = new Date()
    
    const seconds = (startTime.getTime() - startTime.getTime())/1000
    duration += seconds    
  }
  
  this.reset = function(){
    startTime = null
    endTime = null
    duration = 0
    running = false
  }
}

Object.defineProperty(this, 'duration', {
  get: function(){ return duration };
})
```
