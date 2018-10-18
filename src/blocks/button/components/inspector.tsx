/**
 * Inspector Controls
 */
import * as React from 'react';
import { CirclePicker } from 'react-color';
import {GutenbergBlockProps} from "../../../@types/global";
import ThemePicker from "../../../lib/inspector/themePicker";
import MarginPicker from "../../../lib/inspector/marginPicker";

// Setup the block
const {__} = wp.i18n;
const {Component} = wp.element;

// Import block components
const {
    InspectorControls,
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

                    <ThemePicker theme={theme} setAttributes={setAttributes}/>
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

                    <MarginPicker margin={margin} setAttributes={setAttributes}/>
                </PanelBody>
            </InspectorControls>
        );
    }
}
