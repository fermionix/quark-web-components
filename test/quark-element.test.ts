/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { html, fixture, expect, nextFrame, defineCE, unsafeStatic } from '@open-wc/testing';
import { QkElement, css } from '../src/qk-element/qk-element.js';

const tagName = defineCE(
    class extends QkElement {
        static get styles() {
            return [css`
                :host {
                    --quark-test-color: #FFFFFF;
                    display: block;
                }
            `];
        }
    },
);

const tag = unsafeStatic(tagName);

describe('quark-element', () => {
    it('can set the disabled state', async () => {
        const el:QkElement = await fixture(html`
            <${tag} disabled></${tag}>
        `);

        el.disabled = true;
        expect(el.disabled).to.equal(true);

        el.disabled = false;
        expect(el.disabled).to.equal(false);
    });

    it('reflects the disabled property to the attribute', async () => {
        const el:QkElement = await fixture(html`
            <${tag}></${tag}>
        `);

        el.disabled = true;
        await nextFrame();
        expect(el.hasAttribute('disabled')).to.equal(true);

        el.disabled = false;
        await nextFrame();
        expect(el.hasAttribute('disabled')).to.equal(false);
    });

    it('sets the disabled property from the attribute', async () => {
        const el:QkElement = await fixture(html`
            <${tag} disabled></${tag}>
        `);

        expect(el.disabled).to.equal(true);
    });

    it('reflects the disabled state to the aria-disabled attribute', async () => {
        const el:QkElement = await fixture(html`
            <${tag}></${tag}>
        `);

        el.disabled = true;
        await nextFrame();
        expect(el.getAttribute('aria-disabled')).to.equal('true');

        el.disabled = false;
        await nextFrame();
        expect(el.getAttribute('aria-disabled')).to.equal('false');
    });

    it('reflects the role property to the attribute', async () => {
        const el:QkElement = await fixture(html`
            <${tag}></${tag}>
        `);

        el.role = 'button';
        await nextFrame();
        expect(el.getAttribute('role')).to.equal('button');
    });

    it('sets the role property from the attribute', async () => {
        const el:QkElement = await fixture(html`
            <${tag} role="button"></${tag}>
        `);

        expect(el.role).to.equal('button');
    });

    it('provides a css variable value', async () => {
        const el: QkElement = await fixture(html`
            <${tag}></${tag}>
        `);

        await nextFrame();
        const cs = window.getComputedStyle(el);
        const val = el.getCssVariableValue(cs, '--quark-test-color', 'unknown').trim();
        

        expect(val).to.equal('#FFFFFF');
    });

    it('provides a default value if a css variable value does not exist', async () => {
        const el: QkElement = await fixture(html`
            <${tag}></${tag}>
        `);

        await nextFrame();
        const cs = window.getComputedStyle(el);
        const val = el.getCssVariableValue(cs, '--quark-test-font', 'unknown').trim();
        

        expect(val).to.equal('unknown');
    });
});