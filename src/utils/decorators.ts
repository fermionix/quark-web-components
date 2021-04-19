/** @event decorator
All events are composed, cancelable, and bubble. Calling emit() will return the dispatched event.

## Usage:

```javascript
import { EventEmitter, event } from 'quark-web-components/utils/decorators';

// Declare the emitter.
@event('some-event') someEvent: EventEmitter<string>;

// Emit the event:
this.someEvent.emit('something happened');
```
*/
export class EventEmitter<T> {
    constructor(private target: HTMLElement, private eventName: string) {}

    emit(value: T) {
        const e = new CustomEvent<T>(this.eventName, { 
            detail: value,
            bubbles: true,
            composed: true,
            cancelable: true
        });

        this.target.dispatchEvent(e);
        return e;
    }
}

export function event(eventName?: string) {
    return (protoOrDescriptor: any, name: string): any => {
        const descriptor = {
            get(this: HTMLElement) {
                return new EventEmitter(this, eventName);
            },
            enumerable: true,
            configurable: true,
        };

        if (name !== undefined) {
            // legacy TS decorator
            return Object.defineProperty(protoOrDescriptor, name, descriptor);
        } 
        
        // TC39 Decorators proposal
        return {
            kind: 'method',
            placement: 'prototype',
            key: protoOrDescriptor.key,
            descriptor,
        };
    };
}

/** @listen decorator
Attaches the method as a listener for the given event.

## Usage:

```javascript
import { listen } from 'quark-web-components/utils/decorators';

@listen('test-event')
handleTestEvent(e: any) {
    // Whatever
}
```
*/
export function listen(eventName: string) {
    return (protoOrDescriptor: any, name: string): any => {       
        const { connectedCallback, disconnectedCallback } = protoOrDescriptor;

        protoOrDescriptor.connectedCallback = function () {
            connectedCallback.call(this);
            addEventListener.call(this, eventName, protoOrDescriptor[name]);
        };

        protoOrDescriptor.disconnectedCallback = function () {
            removeEventListener.call(this, eventName, protoOrDescriptor[name]);
            disconnectedCallback.call(this);
        };
    };
}

/** @watch decorator
Runs after an observed property changes, e.g. @property or @state. This will only run after the first
update, so initial attribute => property mappings will not trigger the watch handler.

Note that changing props in a watch handler *will* trigger a rerender. To make pre-update changes to observed
properties, use the `update()` method instead.

## Usage:

```javascript
import { watch } from 'quark-web-components/utils/decorators';

@watch('propName')
handlePropChange(propName, oldValue, newValue) {
    // Whatever
}
```

You can watch multiple properties with the same handler by passing an array of property names.

```javascript
import { watch } from 'quark-web-components/utils/decorators';

@watch(['propName1', 'propName2']) 
handlePropChange(propName, oldValue, newValue) {
    // Whatever
}
```

You can watch all properties with the same handler by not passing a property name parameter.

```javascript
import { watch } from 'quark-web-components/utils/decorators';

@watch() 
handlePropChange(propName, oldValue, newValue) {
    // Whatever
}
```
*/
export function watch(propName?: string | Array<string>) {
    return (protoOrDescriptor: any, name: string): any => {       
        const { updated } = protoOrDescriptor;

        protoOrDescriptor.updated = function (changedProps: Map<string, any>) {
            if (!propName) {
                if (this.__hasBeenUpdated) {
                    changedProps.forEach((oldValue, prop) => {
                        const newValue = this[prop];
        
                        if (oldValue !== newValue) {
                            this[name].call(this, prop, oldValue, newValue);
                        }
                    });
                }
            } else {
                if (!Array.isArray(propName)) {
                    propName = [propName];
                }
    
                propName.forEach(prop => {
                    if (this.__hasBeenUpdated && changedProps.has(prop)) {
                        const oldValue = changedProps.get(prop);
                        const newValue = this[prop];
        
                        if (oldValue !== newValue) {
                            this[name].call(this, prop, oldValue, newValue);
                        }
                    }
                });
            }

            updated.call(this, changedProps);
            this.__hasBeenUpdated = true;
        };
    };
}