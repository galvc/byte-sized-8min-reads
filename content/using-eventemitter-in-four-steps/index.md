---
title: "Using Event Emitter in 4 Steps"
date: "2020-02-13"
tags: ["angular", "event emitter"]

---
EventEmitters are a good way to pass simple data between parent and child components.
Emitting an event can trigger methods on a separate component or pass data that will be utilized after the
occurence of an event.  
&nbsp;  
The concept may be easy to understand but the process of setting it up can be a tad puzzling what with the criss-crossing between
components. 
Let's take a common situation where a button that is clicked in the child component emits an event and passes along data
to the parent component.

##1. Parent Component .ts

```typescript
export class ParentComponent implements OnInit {
    constructor() { }
    ngOnInit() { }

    parentMethod(value) {
    //actions
    }
}
```

##2. Child Component .ts
In the .ts file of the child component where the event will be originating from,
import Output from @angular/core and initialize the variable with an EventEmitter object

```typescript
import { Output } from '@angular/core';

...

export class ChildComponent implements OnInit {
    @Output() outputVariable = new EventEmitter<any>;

    constructor() {}
    
    ngOnInit() {}
}

```

##3. Child Component .html or .ts
There are two ways to emit an event. Emitting from the .html file is quick and straightforward; emitting from 
the .ts file allows for more sequences of actions to occur.

### Option A: Child Component .html
When a button in the child component is clicked, the `outputVariable` which we intialized with the EventEmitter object
will call its method `.emit()`. Inside the parantheses is the data that will be passed to the parent component. 

```html
<button (click)="outputVariable.emit(data)" ></button>
```

### Option B: Child Component .ts
Calling the emit method is similar from the .html file, however when the button is clicked, we are calling
the handleClick method that houses our emit call.

```typescript
export class ChildComponent implements OnInit {
    @Output() outputVariable = new EventEmitter<any>;
    data;
    
    constructor() {}
    ngOnInit() {}

    handleClick() {
        this.outputVariable.emit(this.data);
        //other actions
    }
}
```

##4. Parent Component .html
Finally, in the parent's .html file we are adding the child element using its template name.
Using the `outputVariable` we created in the child component, we wrap it in parentheses to bind it as an event. 
When this event emits from the child component, it will call the parentMethod and pass the value from the 
child component as an argument.
Note: The parameter must be named `$event` otherwise it will not recognize that a value has been passed.

```html
<app-child (outputVariable)="parentMethod($event)"></app-child>
```