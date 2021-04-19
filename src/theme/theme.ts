/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
/** Defines a single custom theme. All color values should be passed as hex color values. */
export class Theme {
    private _primaryLight: string;
    private _primary: string;
    private _primaryDark: string;
    private _accent: string;
    name: string;

    /**
    * Creates a new custom theme.
    * @param {string} name - The unique theme name.
    * @param {string} primaryLight - The light variant of the primary color.
    * @param {string} primary - The primary color.
    * @param {string} primaryDark - The dark variant of the primary color.
    * @param {string} accent - The accent or secondary color.
    */
    constructor(name: string, primaryLight: string, primary: string, primaryDark: string, accent: string) {
        this.name = name;
        this._primaryLight = primaryLight;
        this._primary = primary;
        this._primaryDark = primaryDark;
        this._accent = accent;
    }

    get primaryLight() {
        return this._primaryLight;
    }

    set primaryLight(value: string) {
        if (this._primaryLight !== value) {
            this._primaryLight = value;

            if ((window.ThemeManager) && (window.ThemeManager.hasTheme(this.name))) {
                window.ThemeManager.applyTheme(this.name);
            }
        }
    }

    get primary() {
        return this._primary;
    }

    set primary(value: string) {
        if (this._primary !== value) {
            this._primary = value;

            if ((window.ThemeManager) && (window.ThemeManager.hasTheme(this.name))) {
                window.ThemeManager.applyTheme(this.name);
            }
        }
    }

    get primaryDark() {
        return this._primaryDark;
    }

    set primaryDark(value: string) {
        if (this._primaryDark !== value) {
            this._primaryDark = value;

            if ((window.ThemeManager) && (window.ThemeManager.hasTheme(this.name))) {
                window.ThemeManager.applyTheme(this.name);
            }
        }
    }

    get accent() {
        return this._accent;
    }

    set accent(value: string) {
        if (this._accent !== value) {
            this._accent = value;

            if ((window.ThemeManager) && (window.ThemeManager.hasTheme(this.name))) {
                window.ThemeManager.applyTheme(this.name);
            }
        }
    }
}