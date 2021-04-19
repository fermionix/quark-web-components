/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { css, CSSResultGroup } from 'lit';

const hostElevation0: CSSResultGroup = css`
    :host([elevation="0"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: none;
    }
`;

const elevation0: CSSResultGroup = css`
    .elevation-0 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: none;
    }
`;

const hostElevation1: CSSResultGroup = css`
    :host([elevation="1"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 1px 3px 0 rgba(0, 0, 0, 0.12),
                    0 2px 1px -1px rgba(0, 0, 0, 0.2);
    }
`;

const elevation1: CSSResultGroup = css`
    .elevation-1 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 1px 3px 0 rgba(0, 0, 0, 0.12),
                    0 2px 1px -1px rgba(0, 0, 0, 0.2);
    }
`;

const hostElevation2: CSSResultGroup = css`
    :host([elevation="2"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
`;

const elevation2: CSSResultGroup = css`
    .elevation-2 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
    }
`;

const hostElevation3: CSSResultGroup = css`
    :host([elevation="3"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
    }
`;

const elevation3: CSSResultGroup = css`
    .elevation-3 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
    }
`;

const hostElevation4: CSSResultGroup = css`
    :host([elevation="4"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
    }
`;

const elevation4: CSSResultGroup = css`
    .elevation-4 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
    }
`;

const hostElevation6: CSSResultGroup = css`
    :host([elevation="6"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }
`;

const elevation6: CSSResultGroup = css`
    .elevation-6 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }
`;

const hostElevation8: CSSResultGroup = css`
    :host([elevation="8"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
    }
`;

const elevation8: CSSResultGroup = css`
    .elevation-8 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
    }
`;

const hostElevation12: CSSResultGroup = css`
    :host([elevation="12"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
    }
`;

const elevation12: CSSResultGroup = css`
    .elevation-12 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
    }
`;

const hostElevation16: CSSResultGroup = css`
    :host([elevation="16"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0 6px 30px 5px rgba(0, 0, 0, 0.12),
                    0 8px 10px -5px rgba(0, 0, 0, 0.4);
    }
`;

const elevation16: CSSResultGroup = css`
    .elevation-16 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0 6px 30px 5px rgba(0, 0, 0, 0.12),
                    0 8px 10px -5px rgba(0, 0, 0, 0.4);
    }
`;

const hostElevation24: CSSResultGroup = css`
    :host([elevation="24"]) {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
    }
`;

const elevation24: CSSResultGroup = css`
    .elevation-24 {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
    }
`;

const elevation: Array<CSSResultGroup> = [elevation0, elevation1, elevation2, elevation3, elevation4, elevation6, elevation8, elevation12, elevation16, elevation24];
const hostElevation: Array<CSSResultGroup> = [hostElevation0, hostElevation1, hostElevation2, hostElevation3, hostElevation4, hostElevation6, hostElevation8, hostElevation12, hostElevation16, hostElevation24];

export {
    elevation0, hostElevation0, elevation1, hostElevation1, elevation2, hostElevation2, elevation3, hostElevation3, elevation4, hostElevation4,
    elevation6, hostElevation6, elevation8, hostElevation8, elevation12, hostElevation12, elevation16, hostElevation16, elevation24, hostElevation24,
    elevation, hostElevation
}
