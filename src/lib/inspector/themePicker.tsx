/**
 * Inspector Controls
 */
import * as React from 'react';
import { CirclePicker } from 'react-color';
import {GutenbergBlockProps} from "../../@types/global";

// Setup the block
const {__} = wp.i18n;
const {Component} = wp.element;

// Import Inspector components
const {
    PanelRow,
} = wp.components;

enum AvailableColorList {
    primary = 'primary',
    secondary = 'secondary',
    success = 'success',
    info = 'info',
    warning = 'warning',
    danger = 'danger',
    light = 'light',
    dark = 'dark',
}
// Theme color settings
const availableColors = [
    {'name': 'primary', color: '#007bff'},
    {'name': 'secondary', color: '#6c757d'},
    {'name': 'success', color: '#28a745'},
    {'name': 'info', color: '#17a2b8'},
    {'name': 'warning', color: '#ffc107'},
    {'name': 'danger', color: '#dc3545'},
    {'name': 'light', color: '#f8f9fa'},
    {'name': 'dark', color: '#343a40'},
];

interface Props extends Pick<GutenbergBlockProps, 'setAttributes'>{
    theme: AvailableColorList
}

/**
 * Create an Inspector Controls wrapper Component
 */
export default class ThemePicker extends React.Component<Props, {}> {

    render() {

        // Setup the attributes
        const {theme, setAttributes} = this.props;

        const selectedThemeColor = availableColors.find(c => c.name === theme) ||  {color: '#007bff', name: 'primary'};
        function setThemeColor(color: {
            hex: string
            hsl: any
            hsv: any
            oldHue: any
            rgb: any
            source: "hex" | "hsl" | "hsv" | "rbg"
        }) {
            const selectedTheme = availableColors.find(c => c.color === color.hex) || {color: '#007bff', name: 'primary'};
            setAttributes({theme: selectedTheme.name});
        }


        return (
            <PanelRow>
                <label>{__('Color')}</label>
                <CirclePicker
                    color={ selectedThemeColor.color }
                    colors={ availableColors.map(color => color.color) }
                    onChangeComplete={ setThemeColor }
                />
            </PanelRow>
        );
    }
}
