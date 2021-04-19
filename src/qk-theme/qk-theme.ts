/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, css, customElement, property, QkElement } from '../qk-element/qk-element';

/**
- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.
**/
@customElement('qk-theme')
export class QkTheme extends QkElement {
    private _theme: string = null;

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

    @property({ type: String }) 
    get theme() : string {
        return this._theme;
    }

    set theme(value: string) {
        const oldval = this.theme;

        if (value !== oldval) {
            this._theme = value;
            this.requestUpdate('theme', oldval);
            
            if (this._theme && window.ThemeManager) {
                window.ThemeManager.applyTheme(this._theme, this);
            }
        }
    }
    
    render() {
        return html`<slot></slot>`;
    }
}