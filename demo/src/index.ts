import { html, css, customElement, property, QkInputElement } from '../../src/qk-input-element/qk-input-element';
import { EventEmitter, event, listen, watch } from '../../src/utils/decorators';

@customElement('test-element')
export class TestElement extends QkInputElement { 
    @property({ type: String }) 
    caption = '';

    @event('test-event') 
    testEventEmitter: EventEmitter<string>;

    static get styles() {
        return css`
            :host {
                display: block;
                padding: 16px;
                background-color: cornflowerblue;
                color: white;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }
      `;
    }

    render() {
        return html`
            <div @click="${() => this._send()}">${this.caption}</div>
        `;
    }

    private _send() {
        this.testEventEmitter.emit('Item was clicked 3');
    }

    @listen('test-event')
    private _handleTestEvent(e: any) {
        console.log(`GOT EVENT XXX5: ${e.detail}`);
        this.style.backgroundColor = 'red';
    }

    @watch(['caption', 'disabled']) 
    private _handleCaptionChange(propName: string, oldValue: any, newValue: any) {
        console.log(`${propName} change: ${oldValue} -> ${newValue}`)
    }
}
