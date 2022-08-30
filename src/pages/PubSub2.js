// Create a "pub/sub" class with two functions:
// 1. Subscribe
//   - Input: string eventName, function eventListener
 //           button clicked. event listener is also a 
//   - Output: unsubscribe callback
//     don't care anymore, unsubscribe
// 2. Publish
//   - Input: string eventName
//   - Output: none
//   - Action: call all functions that were registered via subscribe. name of event & function that was gove


//3. number of pairs is really big. lot of different eventNames, small number of functionNames
//4. how to go about testing this?
// events: [[handleClick, fn1],[handleClick2, fn1], [handleClick3, fn1], [pushData, fn2]];

// eve2: {
//     functionName: fn1,
//     eventNames: [handleClick, handleClick2, handleClick3],
// }


function pubSub(eventName, functionName){
    let events = [];

    //subsribe adds to the events array
    subscribe: function(eventName, functionName) {
        this.events.push([this.eventName, this.functionName]);
    },

    //ubsubsribe deletes from the events array
    unsubscribe: function(eventName, functionName) {
        for(let i =0; i<events.length; i++){
            if(events[i][0]===eventName && events[i][1]===functionName){
                events.splice(i, 1);
                break;
            }
        }
    },

    publish: function(eventName) {
        const matchingEvents = events.filter((e)=>events[0]===eventName);
        
        for(let i = 0; i<matchingEvents.length; i++){
            //function invocation fn1(handleClick);
            try {
            matchingEvents[i][1](matchingEvents[i][0]);
            } catch {
                console.log(`error ${matchingEvents[i][1]}`);
            }

        }

    }



}