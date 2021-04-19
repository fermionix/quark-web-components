/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, css, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
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
@element qk-element
@prop {Boolean}  [disabled=false] - If true, the element will be disabled.
@prop {String} [role=null] - The ARIA role of the element.
*/
class QkElement extends LitElement {
    private _disabled = false;

    @property({ type: String, reflect: true }) 
    role = '';

    @property({ type: Boolean, reflect: true }) 
    get disabled() : boolean {
        return this._disabled;
    }

    set disabled(value: boolean) {
        const oldval = this.disabled;

        if (value !== oldval) {
            this._disabled = value;
            this.requestUpdate('disabled', oldval);
            this.setAttribute('aria-disabled', String(value));
        }
    }

    /**
     * Gets a custom CSS variable value.
     * @param {CSSStyleDeclaration} computedStyle - The computed style object for the element.
     * @param {string} variableName - The CSS variable.
     * @param {any} defaultValue - The default value to use if the variable isn't found.
     */
    getCssVariableValue(computedStyle: CSSStyleDeclaration, variableName: string, defaultValue: any): string {
        return computedStyle.getPropertyValue(variableName) || defaultValue;
    }
}

export { html, svg, css, customElement, property, QkElement }