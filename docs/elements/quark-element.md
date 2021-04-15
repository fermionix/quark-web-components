# quark-element

`QuarkElement` is the base class of all the Quark elements.

## Usage

You simply use `QuarkElement` as your base class, rather than `LitElement` or `HTMLElement`.

```javascript
import { html, css, QuarkElement } from 'quark-web-components/quark-element/quark-element.js';

export class MyElement extends QuarkElement {
    static get styles() {
        return [css`
            :host {
                display: block;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
        `];
    }

    constructor() {
        super();
        this.disabled = false;
        this.role = 'button';
    }
}

window.customElements.define('my-element', MyElement);
```

## Properties

| Property   | Attribute  | Type      | Default | Description                            |
|------------|------------|-----------|---------|----------------------------------------|
| `disabled` | `disabled` | `Boolean` | false   | If true, the element will be disabled. |
| `role`     | `role`     | `String`  | null    | The ARIA role of the element.          |

## Methods

| Method                | Type                                             | Description                                      |
|-----------------------|--------------------------------------------------|--------------------------------------------------|
| `fireMessage`         | `(name: string, detail?: "object", cancelable?: boolean): boolean` | Fires a custom message.<br /><br />**name**: The message name.<br />**detail**: The message detail.<br />**cancelable**: Whether or not the message can be cancelled. |
| `getCssVariableValue` | `(computedStyle: "object", variableName: string, defaultValue: "object"): 'object'` | Gets a custom CSS variable value.<br /><br />**computedStyle**: The computed style object for the element.<br />**variableName**: The CSS variable.<br />**defaultValue**: The default value to use if the variable isn't found. |
