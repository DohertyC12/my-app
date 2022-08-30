import react, { Component } from "react";
// Create a "pub/sub" class with two functions:
// 1. Subscribe
//   - Input: string eventName, function eventListener
 //           button clicked. event listener is also a 
//   - Output: unsubscribe callback
//     don't care anymore, unsubscribe



// 2. Publish
//   - Input: string eventName
//   - Output: none
//   - Action: call all functions that were registered via subscribe

class pubSub extends Component{
    constructor(props){
        super(props);
        this.state = {
            events: [],
        }
    }

    private state 

    subscribe(eventName: string, eventListener: Function) {
        this.state.events.push(eventName);
        

    }
    
    publish(eventName: string) {
    //publsih some data to a data store. 

    }
}