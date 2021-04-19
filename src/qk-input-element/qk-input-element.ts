/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, svg, css, customElement, property, QkElement } from '../qk-element/qk-element';
import { listen, watch } from '../utils/decorators';
/**
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
@element qk-input-element

@prop {String} [name=''] - The ARIA name of the element.
@prop {Boolean}  [hasFocus=false] - (readonly) Whether or not the element has focus.
*/
class QkInputElement extends QkElement {
    private _hasFocus = false;

    @property({ type: String, reflect: true }) 
    name = '';

    @property({ type: Boolean, reflect: true }) 
    get hasFocus() {
        return this._hasFocus;
    }

    constructor() {
        super();
        this.tabIndex = 0;
    }

    @watch('disabled') 
    private _handleDisabledChange() {
        this.disabled ?  this.tabIndex = -1 :  this.tabIndex = 0;
    }

    @listen('focus')
    private _handleFocusEvent() {
        if (!this.disabled) {
            this._hasFocus = true;
            this.requestUpdate('hasFocus', false);
        }
    }

    @listen('blur')
    private _handleBlurEvent() {
        this._hasFocus = false;
        this.requestUpdate('hasFocus', true);
    }
}

export { html, svg, css, customElement, property, QkInputElement } 