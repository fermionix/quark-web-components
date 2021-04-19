/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { css, CSSResultGroup } from 'lit';

const acrylic1: CSSResultGroup = css`
    .acrylic-1 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.125);
        backdrop-filter: blur(10px);
    }
`;

const acrylic2: CSSResultGroup = css`
    .acrylic-2 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.250);
        backdrop-filter: blur(10px);
    }
`;

const acrylic3: CSSResultGroup = css`
    .acrylic-3 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.375);
        backdrop-filter: blur(10px);
    }
`;

const acrylic4: CSSResultGroup = css`
    .acrylic-4 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.500);
        backdrop-filter: blur(10px);
    }
`;

const acrylic5: CSSResultGroup = css`
    .acrylic-5 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.625);
        backdrop-filter: blur(10px);
    }
`;

const acrylic6: CSSResultGroup = css`
    .acrylic-6 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.750);
        backdrop-filter: blur(10px);
    }
`;

const acrylic7: CSSResultGroup = css`
    .acrylic-7 {
        border: 1px solid rgba(255, 255, 255, 0.25);
        background: rgba(255, 255, 255, 0.875);
        backdrop-filter: blur(10px);
    }
`;

const acrylic8: CSSResultGroup = css`
    .acrylic-8 {
        border: 1px solid rgba(255, 255, 255, 1);
        background: rgba(255, 255, 255, 1);
    }
`;

const acrylic: Array<CSSResultGroup> = [acrylic1, acrylic2, acrylic3, acrylic4, acrylic5, acrylic6, acrylic7, acrylic8];
export { acrylic1, acrylic2, acrylic3, acrylic4, acrylic5, acrylic6, acrylic7, acrylic8, acrylic }