# qk-element

`QkElement` is the base class of all the Quark elements.

## Usage

You simply use `QkElement` as your base class, rather than `LitElement` or `HTMLElement`.

```javascript
import { html, css, QkElement } from 'quark-web-components/qk-element/qk-element.js';

export class MyElement extends QkElement {
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
| `role`     | `role`     | `String`  | ""      | The ARIA role of the element.          |

## Methods

| Method                | Type                                             | Description                                      |
|-----------------------|--------------------------------------------------|--------------------------------------------------|
| `getCssVariableValue` | `(computedStyle: CSSStyleDeclaration, variableName: string, defaultValue: CSSStyleDeclaration): string` | Gets a custom CSS variable value.<br /><br />**computedStyle**: The computed style object for the element.<br />**variableName**: The CSS variable.<br />**defaultValue**: The default value to use if the variable isn't found. |
