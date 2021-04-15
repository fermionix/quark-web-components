This is just a long list of elements that I eventually hope to add to the suite. It's more for my own use than anything, but it gives you an idea of where I want to get to. There's a lot of dependencies between the different elements and the order doesn't reflect them, so I won't be implementing them in any particular order. The 'complexity rating' is very rough, especially the 'high' complexity elements, which range from normal complex to OMG complex (data table).

Complete elements are marked with an 'X' while those that are in progress are marked with a '-'.

### UI ELEMENTS
   
|Done|Tests|Complexity|Name                    |Notes                                                                                           |
|:--:|:---:|:--------:|------------------------|------------------------------------------------------------------------------------------------| 
|x   |x    |L         |quark-element           |The base class for all the elements.                                                            |
|    |     |H         |quark-styles            |Includes theming, typography and elevation.                                                     |
|    |     |H         |quark-selector          |Used by things that require iteme selection - tabs, pages, lists, menus, etc.                   |
|    |     |S         |quark-selector-container|Synchronizes selection lists, such as tabs to pages.                                            |
|    |     |H         |quark-attached-element  |Behaviour that docks an element to another element - uses by badges, tooltips, etc.             |
|    |     |L         |quark-pages             |Manages a list of views with only one being displayed at a time.                                |
|    |     |M         |quark-icons             |Manages SVG icon sets and includes all the standard material Design icons.                      |
|    |     |L         |quark-icon              |Displays a single SVG icons from an icon set managed by `quark-icons`.                          |
|    |     |L         |quark-material          |A Material Design container that looks like a lifted piece of paper.                            |
|    |     |M         |quark-tabs              |A Material Design tab set.                                                                      |
|    |     |L         |quark-badge             |A small round indicator that attaches to an element and displays a number or icon.              |
|    |     |L         |quark-tooltip           |A Material Design tooltip that is displayed on mouse hover.                                     |
|    |     |M         |quark-callout           |A speech bubble type element that can either behave like a tooltip or be fixed inline.          |
|    |     |M         |quark-ripple            |A Material Design ripple effect that is used to indicate selection (especially by buttons).     |
|    |     |H         |quark-button            |A Material Design Button. Supports regular, raised, icon and fab styles, with toggle support.   |
|    |     |L         |quark-check             |A Material Design checkbox.                                                                     |
|    |     |M         |quark-radio             |A Material Design radio button and group.                                                       |
|    |     |L         |quark-chip              |A Material Design chip.                                                                         |
|    |     |M         |quark-card              |A Material Design card.                                                                         |
|    |     |M         |quark-scroll-container  |A container with scroll buttons that allows the content to scroll.                              |
|    |     |M         |quark-spinner           |An element that allows you to select from a list of numbers, strings or custom objects.         |
|    |     |M         |quark-switch            |A Material Design switch element.                                                               |
|    |     |L         |quark-top-app-bar       |An application top toolbar element.                                                             |
|    |     |M         |quark-navigation-rail   |A Material Design Navigation Rail element.                                                      |
|    |     |M         |quark-collapse-container|A collapsible block of content (horizontal and vertical variants).                              |
|    |     |M         |quark-expandable-card   |A Material Design card that expands to display additional content.                              |
|    |     |M         |quark-accordion         |An expandable card list.                                                                        |
|    |     |L         |quark-pill-navigator    |A navigation element that uses small circles as navigation items (like on a carousel).          |
|    |     |L         |quark-rating            |A star rating element.                                                                          |
|    |     |H         |quark-dialog            |A Material Design dialog that can be modal or non-modal.                                        |
|    |     |M         |quark-linear-progress   |A linear progress bar element.                                                                  |
|    |     |M         |quark-circular-progress |A circular progress element.                                                                    |
|    |     |M         |quark-activity-indicator|A circular, linear or typing busy/activity indicator.                                           |
|    |     |L         |quark-banner            |A Material Design banner/jumbotron element.                                                     |
|    |     |H         |quark-horizontal-stepper|A horizontal Material Design Stepper (wizard). Step labels are at the top.                      |
|    |     |M         |quark-side-stepper      |A Material Design Stepper (wizard) where the step labels are on the left.                       |
|    |     |M         |quark-compact-stepper   |A compact Material Design Stepper (wizard) where the only the active label is displayed.        |
|    |     |H         |quark-vertical-stepper  |A vertical Material Design Stepper (wizard). Step labels are inline.                            |
|    |     |H         |quark-slider            |Sliders allow users to make selections from a range of values.                                  |
|    |     |H         |quark-treeview          |A Material Design heirarchical treeview.                                                        |
|    |     |M         |quark-splitter          |A splitter element that resizes its adjacent siblings relative to each other.                   |
|    |     |L         |quark-splitter-container|A horizontal or vertical container with a splitter that allows content areas to be resized.     |
|    |     |L         |quark-status-label      |A simple status label.                                                                          |
|    |     |M         |quark-snackbar          |A popup toast notification element.                                                             |
|    |     |M         |quark-message-dialog    |A Material Design dialog for displaying simple messages and options.                            |
|    |     |M         |quark-time-picker       |A Material Design time picker (not the mobile type).                                            |
|    |     |H         |quark-date-picker       |A Material Design date picker (not the mobile type).                                            |
|    |     |H         |quark-color-picker      |A Material Design color picker.                                                                 |
|    |     |M         |quark-date-time-picker  |A combined date and time picker (may just add an optional time picker to quark-date-picker).    |
|    |     |H         |quark-textfield         |A Material Design text field with a floating label.                                             |
|    |     |H         |quark-textarea          |A Material Design text area with a floating label.                                              |
|    |     |M         |quark-section-list      |A scrollable horizontal list of name/value items.                                               |
|    |     |M         |quark-navigation-drawer |A slide out drawer that can be anchored to the top, bottom or side.                             |
|    |     |M         |quark-list              |A scrollable list of items that can optionally be selectable.                                   |
|    |     |M         |quark-list-item         |A Material Design list item.                                                                    |
|    |     |L         |quark-image             |An image wrapper element.                                                                       |
|    |     |M         |quark-carousel          |A content carousel that supports overlays.                                                      |
|    |     |H         |quark-drag-drop-list    |A list that allows items to be reordered and moved between lists.                               |
|    |     |M         |quark-linked-selector   |Allows multiple selectors to be linked and share items.                                         |
|    |     |L         |quark-skeleton          |Display placeholder for content while the data loads.                                           |
|    |     |M         |quark-input-outline     |An outline element to create a notch that is used in outlined textfields and select elements.   |
|    |     |M         |quark-toolbar           |A traditional style toolbar.                                                                    |
|    |     |M         |quark-statusbar         |A traditional style statusbar.                                                                  |
|    |     |M         |quark-navigation-bar    |A Material Design navigation bar for view and sub-view based applications.                      |

Count: 0/63

### LAYOUT ELEMENTS

These are end-user elements (won't be used by framework elements), possibly for use with a wireframe designer, and wrap simple container elements that use flexbox and grid layout. They'll be grouped under `quark-layout`. Not sure if a grid layout is required.

|Done|Tests|Complexity|Name                |Notes                                             |
|:--:|:---:|:--------:|--------------------|--------------------------------------------------|
|    |     |L         |quark-row-layout     |A single horizontal row layout (can wrap).        |
|    |     |L         |quark-column-layout  |A single vertical column layout (can wrap).       |
|    |     |L         |quark-position-layout|Positions a single child in a particular position.|
|    |     |M         |quark-grid-layout    |A grid (multiple column/row) layout.              |

Count: 0/4

### MENU ELEMENTS

|Done|Tests|Complexity|Name                   |Notes                                                                                           |
|:--:|:---:|:--------:|-----------------------|------------------------------------------------------------------------------------------------|
|    |     |H         |quark-popup-menu        |A popup menu item.                                                                              |
|    |     |H         |quark-menu              |A top level application menu bar element.                                                       |
|    |     |H         |quark-overflow-container|A list element that displays overflow elements in a popup overflow menu.                        |
|    |     |H         |quark-radial-menu       |A circular or speed-dial type menu.                                                             |

Count: 0/4

### DROPDOWN PICKERS

Lots of things could be in a dropdown container. Should there just be a generic one or multiple? They're separate from the other UI elements because I'm not too sure about them.

|Done|Tests|Complexity|Name                 |Notes                                   |
|:--:|:---:|:--------:|---------------------|----------------------------------------|
|    |     |H         |quark-select-container|A generic popup selection container.    |
|    |     |M         |quark-select          |A single/multi option dropdown selector.|
|    |     |L         |quark-date-select     |                                        |
|    |     |L         |quark-time-select     |                                        |
|    |     |L         |quark-color-select    |                                        |

Count: 0/5

### DATA TABLE ELEMENTS

|Done|Tests|Complexity|Name                  |Notes                                                                                                                      |
|:--:|:---:|:--------:|----------------------|---------------------------------------------------------------------------------------------------------------------------|
|    |     |H         |quark-data-table-layout|A helper container element to simplify creating complex data table elements.                                               |
|    |     |M         |quark-data-pager       |A page switcher element for tables with a lot of data (required by `quark-data-table`). Needs `quark-select`.                |
|-   |     |H         |quark-data-table       |A complex Material Design data table suitable for large data sets. Needs `quark-data-pager`.                                |

Count: 0/3

### SPARKLINE CHART ELEMENTS

Sparklines are very small charts, drawn without adornments, interactivity or other chart-specific elements.

|Done|Tests|Complexity|Name                     |Notes                                                                                          |
|:--:|:---:|:--------:|-------------------------|-----------------------------------------------------------------------------------------------|
|    |     |H         |quark-bar-sparkline       |A simple bar chart element.                                                                    |
|    |     |H         |quark-bullet-sparkline    |A simple horizontal bullet chart element.                                                      |
|    |     |H         |quark-line-sparkline      |A simple line chart element that supports lines, markers (scatter) and area styles.            |
|    |     |H         |quark-pie-sparkline       |A simple pie or donut chart.                                                                   |
|    |     |H         |quark-winloss-sparkline   |A simple win-loss chart.                                                                       |
|    |     |H         |quark-percentage-sparkline|A simple percentage bar chart.                                                                 |

Count: 0/6

### CHART ELEMENTS

The `quark-xxx-chart` elements are the more complex charts.

|Done|Tests|Complexity|Name              |Notes                   |
|:--:|:---:|:--------:|------------------|------------------------|
|    |     |H         |quark-bar-chart    |A bar chart element.    |
|    |     |H         |quark-line-chart   |A line chart element.   |
|    |     |H         |quark-area-chart   |A area chart element.   |
|    |     |H         |quark-donut-chart  |A donut chart element.  |
|    |     |H         |quark-pie-chart    |A pie chart element.    |
|    |     |H         |quark-polar-chart  |A polar chart element.  |
|    |     |H         |quark-radar-chart  |A radar chart element.  |
|    |     |H         |quark-bubble-chart |A bubble chart element. |
|    |     |H         |quark-stock-chart  |A stock chart element.  |
|    |     |H         |quark-scatter-chart|A scatter chart element.|
|    |     |H         |quark-bullet-chart |A bullet chart element. |
|    |     |H         |quark-funnel-chart |A funnel chart element. |

Count: 0/12

### PORTALS

This allows DOM content to be projected to different places in a page, while keeping the data context intact.

|Done|Tests|Complexity|Name       |Notes                                                       |
|:--:|:---:|:--------:|-----------|------------------------------------------------------------|
|    |     |H         |quark-portal|A source and destination element for projecting DOM content.|

Based on this [article](https://dev.to/westbrook/your-portal-content-through-a-litelement-5h8b).

Count: 0/1

### APPLICATION ELEMENTS

These are high level elements used to construct applications. 

|Done|Tests|Complexity|Name                      |Notes                                              |
|:--:|:---:|:--------:|--------------------------|---------------------------------------------------|
|    |     |M         |quark-router               |A simple view router for quark-application.         |
|    |     |M         |quark-translations         |A translation module for quark-application.         |
|    |     |M         |quark-local-storage        |A helper library for local storage.                |
|    |     |M         |quark-fetch                |A helper library to simplify the fetch API.        |
|    |     |H         |quark-application          |A view based desktop application framework.        |
|    |     |H         |quark-composite-application|An iFrame view based desktop application framework.|
|    |     |H         |quark-mobile-application   |A view based mobile application framework.         |
|    |     |H         |quark-messaging            |A messaging system for quark-application views.     |
|    |     |H         |quark-application-state    |A Flux-like state manager.                         |
|    |     |H         |quark-identity             |Handles a user OpenID Connect account, login, etc. |
|    |     |H         |quark-access-policy        |Handles application feature access for users.      |

*There is no "policy" standard, so `quark-access-policy` will define a standard based on the Quark Policy Server. The `quark-identity` modules will support the Quark Identity Server (OIDC) and allow providers (`quark-identity-provider`) to be written for other identity provider types.*

*`quark-application` development will be ongoing, with new features being added as requirements are collected and other elements completed.*

Count: 0/11

### DEMO & DOCUMENTATION ELEMENTS

These are elements to make creating documented demos easily, kind of like the Polymer demo helper elements.

|Done|Tests|Complexity|Name                         |Notes                                                                                                                  |
|:--:|:---:|:--------:|-----------------------------|-----------------------------------------------------------------------------------------------------------------------|
|    |     |M         |quark-markdown-viewer         |A markdown viewer, based on Marked.                                                                                    |
|    |     |M         |quark-demo-snippet            |A helper element that displays the source of a code snippet and its rendered demo.                                     |
|    |     |H         |quark-property-viewer         |A helper element that displays a custom elements properties, etc.                                                      |
|    |     |H         |quark-property-editor         |A helper element that displays and allowes editing of a custom elements properties, etc.                               |
|    |     |H         |quark-interactive-demo-snippet|A helper element that displays the source of a code snippet and its rendered demo, and allows properties to be changed.|

**Dependencies**

* [Marked Library](https://marked.js.org/#/README.md)
* custom-elements.json


Count: 0/5

### NICE TO HAVE

These are unlikely to happen any time soon, but would be really nice to have.

|Done|Tests|Complexity|Name                 |Notes                                             |
|:--:|:---:|:--------:|---------------------|--------------------------------------------------|
|    |     |H         |quark-scheduler       |A calender scheduler like the Outlook calendar.   |
|    |     |H         |quark-task-board      |A kanban/trello board and tasks.                  |
|    |     |H         |quark-gantt-chart     |A gantt chart element.                            |
|    |     |H         |quark-dashboard       |A drag & drop dashbard control for cards.         |
|    |     |H         |quark-diagram         |A diagram editor, like Lucid.                     |
|    |     |H         |quark-workflow        |A workflow builder.                               |
|    |     |H         |quark-markdown-editor |A markdown editor, based on ProseMirror.          |

Count: 0/7