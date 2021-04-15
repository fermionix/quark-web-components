import { html } from 'lit-html';
import '../quark-element.js';

export default {
    title: 'QuarkElement',
    component: 'quark-element',
    argTypes: {
        title: { control: 'text' },
        counter: { control: 'number' },
        textColor: { control: 'color' },
    },
};

function Template({ title = 'Hello world', counter = 5, textColor, slot }) {
    return html`
    <quark-element
      style="--quark-element-text-color: ${textColor || 'black'}"
      .title=${title}
      .counter=${counter}
    >
      ${slot}
    </quark-element>
  `;
}

export const Regular = Template.bind({});

export const CustomTitle = Template.bind({});
CustomTitle.args = {
    title: 'My title',
};

export const CustomCounter = Template.bind({});
CustomCounter.args = {
    counter: 123456,
};

export const SlottedContent = Template.bind({});
SlottedContent.args = {
    slot: html`<p>Slotted content</p>`,
};
SlottedContent.argTypes = {
    slot: { table: { disable: true } },
};
