/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, css, customElement, QkElement } from '../../src/qk-element/qk-element';
import { elevation1 } from '../../src/styles/elevation';
import { body } from '../../src/styles/typography';

@customElement('theme-helper')
export class ThemeHelper extends QkElement {
  
    static get styles() {
        return [elevation1, body, css`
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

            .items {
                display: flex;
                flex-wrap: wrap;
            }

            .item {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 120px;
                min-width: 120px;
                max-width: 120px;
                height: 40px;
                margin: 12px;
            }

            .light-primary-item {
                color: var(--theme-on-primary-color);
                background: var(--theme-primary-light-color);
            }

            .primary-item {
                color: var(--theme-on-primary-color);
                background: var(--theme-primary-color);
            }

            .dark-primary-item {
                color: var(--theme-on-primary-color);
                background: var(--theme-primary-dark-color);
            }

            .accent-item {
                color: var(--theme-on-accent-color);
                background: var(--theme-accent-color);
            }

            .surface-item {
                color: var(--theme-on-surface-color);
                background: var(--theme-surface-color);
            }

            .window-item {
                color: var(--theme-on-window-color);
                background: var(--theme-window-color);
            }

            .notification-item {
                color: var(--theme-on-notification-color);
                background: var(--theme-notification-color);
            }

            .error-item {
                color: var(--theme-on-error-color);
                background: var(--theme-error-color);
            }

            .selection-item {
                color: var(--theme-on-selection-color);
                background: var(--theme-selection-color);
            }

            .block-item {
                color: var(--theme-text-secondary-color);
                background: var(--theme-block-color);
            }

            .inactive-item {
                color: white;
                background: var(--theme-inactive-color);
            }
        `];
    }

    render() {
        return html`
            <div class="items">
                <div class="item light-primary-item elevation-1 typography-body">Primary Light</div>
                <div class="item primary-item elevation-1 typography-body">Primary</div>
                <div class="item dark-primary-item elevation-1 typography-body">Primary Dark</div>
                <div class="item accent-item elevation-1 typography-body">Accent</div>
                <div class="item surface-item elevation-1 typography-body">Surface</div>
                <div class="item window-item elevation-1 typography-body">Window</div>
                <div class="item notification-item elevation-1 typography-body">Notification</div>
                <div class="item error-item elevation-1 typography-body">Error</div>
                <div class="item selection-item elevation-1 typography-body">Selection</div>
                <div class="item block-item elevation-1 typography-body">Block</div>
                <div class="item inactive-item elevation-1 typography-body">Inactive</div>
            </div>
        `;
    }
}