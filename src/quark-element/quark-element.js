/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, css, unsafeCSS, svg, LitElement } from 'lit';
/**
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
@element quark-element
@prop {Boolean}  [disabled=false] - If true, the element will be disabled.
@prop {String} [role=null] - The ARIA role of the element.
*/
class QuarkElement extends LitElement {
    static get properties() {
        return {
            disabled: {
                type: Boolean,
                reflect: true
            },

            role: {
                type: String,
                reflect: true
            }
        }
    }

    get disabled() {
        return this._disabled;
    }

    set disabled(value) {
        const oldval = this.disabled;

        if (value !== oldval) {
            this._disabled = value;
            this.requestUpdate('disabled', oldval);
            this.setAttribute('aria-disabled', value);
        }
    }

    constructor() {
        super();
        this._disabled = false;
        this.role = null;
    }

    /**
     * Gets a custom CSS variable value.
     * @param {'object'} computedStyle - The computed style object for the element.
     * @param {string} variableName - The CSS variable.
     * @param {'object'} defaultValue - The default value to use if the variable isn't found.
     */
    getCssVariableValue(computedStyle, variableName, defaultValue) {
        let val = computedStyle.getPropertyValue(variableName);
        return val ? val : defaultValue;
    }

    /**
     * Fires a custom message.
     * @param {string} name - The message name.
     * @param {'object'} detail - The message detail.
     * @param {boolean} cancelable - Whether or not the message can be cancelled.
     */
    fireMessage(name, detail = {}, cancelable = false) {
        const event = new CustomEvent(name, {
            bubbles: true,
            composed: true,
            cancelable: cancelable,
            detail: detail
        });

        return this.dispatchEvent(event);
    }
}

export { html, css, unsafeCSS, svg, QuarkElement }