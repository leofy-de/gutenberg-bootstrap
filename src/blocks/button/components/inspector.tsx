/**
 * Inspector Controls
 */
import * as React from 'react';
import { CirclePicker } from 'react-color';
import {GutenbergBlockProps} from "../../../@types/global";

// Setup the block
const {__} = wp.i18n;
const {Component} = wp.element;

// Import block components
const {
    InspectorControls,
    PanelColorSettings,
} = wp.editor;

// Import Inspector components
const {
    Button,
    ButtonGroup,
    PanelBody,
    PanelRow,
    SelectControl,
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends React.Component<GutenbergBlockProps, {}> {


    render() {

        // Setup the attributes
        const {attributes: {isBlockWidth, isOutline, margin, size, theme}, setAttributes} = this.props;

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

        // Margin options
        const marginOptions = [
            { value: 'my-0', label: __( 'No margin' ) },
            { value: 'my-1', label: __( 'my-1 - Tiny margin' ) },
            { value: 'my-2', label: __( 'my-2 - Small margin' ) },
            { value: 'my-3', label: __( 'my-3 - Middle margin' ) },
            { value: 'my-4', label: __( 'my-4 - Large margin' ) },
            { value: 'my-5', label: __( 'my-5 - Hugh margin' ) },
        ];

        return (
            <InspectorControls key="inspector">
                <PanelBody title={__('Select options')}>
                    <SelectControl
                        label={ __( 'Margin (top & bottom)' ) }
                        value={ margin }
                        options={ marginOptions }
                        onChange={ margin => setAttributes( { margin } ) }
                    />
                    <PanelRow>
                        <label>{__('Color')}</label>
                        <CirclePicker
                            color={ selectedThemeColor.color }
                            colors={ availableColors.map(color => color.color) }
                            onChangeComplete={ setThemeColor }
                        />
                    </PanelRow>
                    <PanelRow>
                        <label>{__('Style')}</label>
                        <ButtonGroup>
                            <Button isLarge isPrimary={isOutline} onClick={() => {
                                setAttributes({isOutline: !isOutline})
                            }}>Outline</Button>
                            <Button isLarge isPrimary={isBlockWidth} onClick={() => {
                                setAttributes({isBlockWidth: !isBlockWidth})
                            }}>Full-Width</Button>
                        </ButtonGroup>
                    </PanelRow>
                    <PanelRow>
                        <label>{__('Size')}</label>
                        <ButtonGroup>
                            <Button isLarge isPrimary={size === 'sm'} onClick={() => {
                                setAttributes({size: 'sm'})
                            }}>Small</Button>
                            <Button isLarge isPrimary={size === ''} onClick={() => {
                                setAttributes({size: ''})
                            }}>Default</Button>
                            <Button isLarge isPrimary={size === 'lg'} onClick={() => {
                                setAttributes({size: 'lg'})
                            }}>Large</Button>
                        </ButtonGroup>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
        );
    }
}
