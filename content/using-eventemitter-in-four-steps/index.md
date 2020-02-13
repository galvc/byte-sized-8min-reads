---
title: "Using Event Emitter in 4 Steps"
date: "2020-01-11"
tags: ["angular", "event emitter"]

---

#1. Parent Method

```
(parentMethod) {
}
```

#2. Child Component .ts
Create an output variable

```
import { Output } from '@angular/core';

....
@Output() outputVariable = new EventEmitter<any>;
```

#3. Child Component .html
```
<div (click)="outputVariable.emit(variableToPass)" ></div>
```

#Alternative 3. Child Component .ts
```
method() {
    this.outputVariable.emit(variableToPass);
}
```

#4. Parent .html
```
<child-component-app (outputVariable)="parentMethod($event)"></child-component-app>
```

always use $event