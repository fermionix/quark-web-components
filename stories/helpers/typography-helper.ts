/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, css, customElement, QkElement } from '../../src/qk-element/qk-element';
import { typography } from '../../src/styles/typography';

@customElement('typography-helper')
export class TypographyHelper extends QkElement {
  
    static get styles() {
        return [typography, css`
            :host {
                display: block;
                font-family: 'Roboto', 'Noto Sans SC', sans-serif;
            }
    
            :host([hidden]) {
                display: none !important;
            }
    
            :host([disabled]) {
                pointer-events: none;
            }

            div {
                border: 1px dashed lightgray;
                margin-bottom: 8px;
            }
        `];
    }

    render() {
        return html`
            <div class="typography-display">Display</div>
            <div class="typography-headline">Headline</div>
            <div class="typography-title">Title</div>
            <div class="typography-subtitle">Subtitle</div>
            <div class="typography-body">Body</div>
            <div class="typography-button">Button</div>
            <div class="typography-caption">Caption</div>
            <div class="typography-overline">Overline</div>
            <div class="typography-code">Code</div>
        `;
    }
}