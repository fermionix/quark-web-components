/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, css, svg, QuarkElement } from '../quark-element/quark-element.js';

/**
`QuarkInputElement` is the base class of all the Quark input elements.
 
## Usage

You simply use `QuarkInputElement` as your base class, rather than `LitElement` or `HTMLElement`.

```javascript
import { html, css, QuarkInputElement } from 'quark-web-components/quark-input-element/quark-input-element.js';

export class MyElement extends QuarkInputElement {
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
@element quark-input-element

@prop {String} [name=''] - The ARIA name of the element.
@prop {Boolean}  [hasFocus=false] - (readonly) Whether or not the element has focus.
*/
class QuarkInputElement extends QuarkElement {
    static get properties() {
        return {
            name: {
                type: String,
                reflect: true
            },

            hasFocus: {
                type: Boolean,
                attribute: 'has-focus',
                reflect: true
            },
        }
    }

    get hasFocus() {
        return this._hasFocus;
    }

    constructor() {
        super();
        this.name = ''
        this._hasFocus = false;
        this.tabIndex = 0;
        this._boundHandleFocusEvent = this._handleFocusEvent.bind(this);
        this._boundHandleBlurEvent = this._handleBlurEvent.bind(this);
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        changedProperties.forEach((oldValue, propName) => {
            if (propName === 'disabled') {
                this.disabled ?  this.tabIndex = -1 :  this.tabIndex = 0;
            }
        });
    }

    connectedCallback() {
        super.connectedCallback();
        this.addEventListener('focus', this._boundHandleFocusEvent);
        this.addEventListener('blur', this._boundHandleBlurEvent);
    }

    disconnectedCallback() {
        this.removeEventListener('focus', this._boundHandleFocusEvent);
        this.removeEventListener('blur', this._boundHandleBlurEvent);
        super.disconnectedCallback();
    }

    _handleFocusEvent(e) {
        if (!this.disabled) {
            this.hasFocus = true;
            this.requestUpdate('hasFocus', false);
        }
    }

    _handleBlurEvent(e) {
        this.hasFocus = false;
        this.requestUpdate('hasFocus', true);
    }
}

export { html, css, svg, QuarkInputElement } 