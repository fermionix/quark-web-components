# qk-input-element

`QkInputElement` is the base class of all the Qk input elements.

## Usage

You simply use `QkInputElement` as your base class, rather than `LitElement` or `HTMLElement`.

```javascript
import { html, css, QkInputElement } from 'quark-web-components/qk-input-element/qk-input-element.js';

export class MyElement extends QkInputElement {
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
        this.role = 'button';
        this.name = 'My Button';
    }
}

window.customElements.define('my-element', MyElement);
```

## Properties

| Property   | Attribute  | Type      | Default | Description                                      |
|------------|------------|-----------|---------|--------------------------------------------------|
| `disabled` | `disabled` | `Boolean` | false   | If true, the element will be disabled.           |
| `hasFocus` | `hasFocus` | `Boolean` | false   | (readonly) Whether or not the element has focus. |
| `name`     | `name`     | `String`  | ""      | The ARIA name of the element.                    |
| `role`     | `role`     | `String`  | ""      | The ARIA role of the element.                    |
| `tabIndex` |            | `number`  | 0       |                                                  |

## Methods

| Method                | Type                                             | Description                                      |
|-----------------------|--------------------------------------------------|--------------------------------------------------|
| `getCssVariableValue` | `(computedStyle: CSSStyleDeclaration, variableName: string, defaultValue: CSSStyleDeclaration): string` | Gets a custom CSS variable value.<br /><br />**computedStyle**: The computed style object for the element.<br />**variableName**: The CSS variable.<br />**defaultValue**: The default value to use if the variable isn't found. |
