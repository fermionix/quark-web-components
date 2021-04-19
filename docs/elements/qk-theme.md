# qk-theme

- Use an avatar for attributing actions or content to specific users.
- The user's name should always be present when using Avatar – either printed beside the avatar or in a tooltip.

## Properties

| Property   | Attribute  | Type      | Default | Description                            |
|------------|------------|-----------|---------|----------------------------------------|
| `disabled` | `disabled` | `Boolean` | false   | If true, the element will be disabled. |
| `role`     | `role`     | `String`  | ""      | The ARIA role of the element.          |
| `theme`    | `theme`    | `string`  |         |                                        |

## Methods

| Method                | Type                                             | Description                                      |
|-----------------------|--------------------------------------------------|--------------------------------------------------|
| `getCssVariableValue` | `(computedStyle: CSSStyleDeclaration, variableName: string, defaultValue: CSSStyleDeclaration): string` | Gets a custom CSS variable value.<br /><br />**computedStyle**: The computed style object for the element.<br />**variableName**: The CSS variable.<br />**defaultValue**: The default value to use if the variable isn't found. |
