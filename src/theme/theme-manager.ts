/*
@license
Copyright (c) 2021 Paul H Mason. All rights reserved.
*/
import { Theme } from './theme';

declare global {
    interface Window { ThemeManager: ThemeManager; }
}

export class ThemeManager {
    private _root: HTMLElement = document.documentElement;
    private _theme: string = null;
    private _themes: Map<string, Theme> = new Map<string, Theme>();

    constructor() {
        this._createThemeItems();
        this.addTheme(new Theme('default', '#8e99f3', '#5c6bc0', '#26418f', '#ec407a'));
        this.theme = 'default';
    }

    get theme(): string {
        return this._theme;
    }

    set theme(value: string) {
        if (value !== this._theme) {
            this._theme = value;
            this.applyTheme(value);
        }
    }

    applyTheme(name?: string, root?: HTMLElement): boolean {
        name = name || this.theme;
        let theme = this._themes.get(name);
        root = root || this._root;

        if (theme) {
            root.style.setProperty('--theme-primary-light-color', theme.primaryLight);
            root.style.setProperty('--theme-primary-color', theme.primary);
            root.style.setProperty('--theme-primary-dark-color', theme.primaryDark);
            root.style.setProperty('--theme-accent-color', theme.accent);

            return true;
        }

        return false;
    }

    clearTheme(root?: HTMLElement) {
        root = root || this._root;

        if (root) {
            root.style.removeProperty('--theme-primary-light-color');
            root.style.removeProperty('--theme-primary-color');
            root.style.removeProperty('--theme-primary-dark-color');
            root.style.removeProperty('--theme-accent-color');
        } else {
            this.applyTheme('default');
        }
    }

    addTheme(theme: Theme) {
        this._themes.set(theme.name, theme);

        if (this.theme === theme.name) {
            this.applyTheme(this.theme);
        }
    }

    addThemes(themes: Array<Theme>) {
        themes.forEach(theme => this.addTheme(theme));
    }

    deleteTheme(name: string) {
        this._themes.delete(name);

        if (this.theme === name) {
            this.clearTheme();
        }
    }

    getThemeNames(): Array<string> {
        return [...this._themes.keys()];
    }

    hasTheme(name: string) {
        return this._themes.has(name);
    }

    getTheme(name: string) {
        return this._themes.get(name);
    }

    private _createThemeItems(): void {
        this._root.style.setProperty('--theme-primary-light-color', '#8e99f3');
        this._root.style.setProperty('--theme-primary-color', '#5c6bc0');
        this._root.style.setProperty('--theme-primary-dark-color', '#26418f');
        this._root.style.setProperty('--theme-accent-color', '#ec407a');

        this._root.style.setProperty('--theme-window-color', '#FAFAFA');
        this._root.style.setProperty('--theme-surface-color', '#FFFFFF');
        this._root.style.setProperty('--theme-error-color', '#e53935');
        this._root.style.setProperty('--theme-notification-color', '#323232');
        this._root.style.setProperty('--theme-selection-color', '#E0E0E0');
        this._root.style.setProperty('--theme-block-color', '#ECECEC');
        this._root.style.setProperty('--theme-inactive-color', '#9E9E9E');

        this._root.style.setProperty('--theme-on-primary-color', '#FFFFFF');
        this._root.style.setProperty('--theme-on-primary-inactive-color', 'rgba(255, 255, 255, 0.7)');
        this._root.style.setProperty('--theme-on-accent-color', '#FFFFFF');
        this._root.style.setProperty('--theme-on-accent-inactive-color', 'rgba(255, 255, 255, 0.7)');
        this._root.style.setProperty('--theme-on-surface-color', 'rgba(0, 0, 0, 0.87)');
        this._root.style.setProperty('--theme-on-window-color', 'rgba(0, 0, 0, 0.87)');
        this._root.style.setProperty('--theme-on-error-color', '#FFFFFF');
        this._root.style.setProperty('--theme-on-notification-color', 'rgba(255, 255, 255, 0.87)');
        this._root.style.setProperty('--theme-on-selection-color', 'rgba(0, 0, 0, 0.87)');

        this._root.style.setProperty('--theme-text-primary-color', 'rgba(0, 0, 0, 0.87)');
        this._root.style.setProperty('--theme-text-secondary-color', 'rgba(0, 0, 0, 0.54)');
        this._root.style.setProperty('--theme-text-hint-color', 'rgba(0, 0, 0, 0.38)');
        this._root.style.setProperty('--theme-text-disabled-color', 'rgba(0, 0, 0, 0.38)');
        this._root.style.setProperty('--theme-text-icon-color', 'rgba(0, 0, 0, 0.38)');

        this._root.style.setProperty('--theme-divider-on-primary-color', 'rgba(255, 255, 255, 0.20)');
        this._root.style.setProperty('--theme-divider-on-surface-color', 'rgba(0, 0, 0, 0.20)');

        this._root.style.setProperty('--theme-lighten-color', 'rgba(255, 255, 255, 0.10)');
        this._root.style.setProperty('--theme-darken-color', 'rgba(0, 0, 0, 0.05)');

        this._root.style.setProperty('--webkit-tap-highlight-color', 'transparent');
    }
}

window.ThemeManager = window.ThemeManager || new ThemeManager();