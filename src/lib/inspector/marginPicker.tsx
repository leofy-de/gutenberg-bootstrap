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
    ButtonGroup,
    Button,
    PanelBody,
    PanelRow,
} = wp.components;

// Margin options
const marginOptions = [
    { value: 'my-0', label: __( 'No margin' ) },
    { value: 'my-1', label: __( 'my-1 - Tiny margin' ) },
    { value: 'my-2', label: __( 'my-2 - Small margin' ) },
    { value: 'my-3', label: __( 'my-3 - Middle margin' ) },
    { value: 'my-4', label: __( 'my-4 - Large margin' ) },
    { value: 'my-5', label: __( 'my-5 - Hugh margin' ) },
];

enum MarginList {
    none = 'my-0',
    xs = 'my-1',
    sm = 'my-2',
    md = 'my-3',
    lg = 'my-4',
    xl = 'my-5',
}
interface Props extends Pick<GutenbergBlockProps, 'setAttributes'>{
    margin: MarginList
}

/**
 * Create an Inspector Controls wrapper Component
 */
export default class MarginPicker extends React.Component<Props, {}> {

    render() {

        // Setup the attributes
        const {margin, setAttributes} = this.props;

        return (
            <PanelBody title={__('Margin top & bottom')}>
                <PanelRow>
                    <ButtonGroup>
                        <Button isLarge isPrimary={margin === 'my-0'} onClick={() => {
                            setAttributes({margin: 'my-0'})
                        }}>
                            {__('None')}
                        </Button>
                        <Button isLarge isPrimary={margin === 'my-1'} onClick={() => {
                            setAttributes({margin: 'my-1'})
                        }}>
                            {__('xs')}
                        </Button>
                        <Button isLarge isPrimary={margin === 'my-2'} onClick={() => {
                            setAttributes({margin: 'my-2'})
                        }}>
                            {__('sm')}
                        </Button>
                        <Button isLarge isPrimary={margin === 'my-3'} onClick={() => {
                            setAttributes({margin: 'my-3'})
                        }}>
                            {__('md')}
                        </Button>
                        <Button isLarge isPrimary={margin === 'my-4'} onClick={() => {
                            setAttributes({margin: 'my-4'})
                        }}>
                            {__('lg')}
                        </Button>
                        <Button isLarge isPrimary={margin === 'my-5'} onClick={() => {
                            setAttributes({margin: 'my-5'})
                        }}>
                            {__('xl')}
                        </Button>
                    </ButtonGroup>
                </PanelRow>
            </PanelBody>

        );
    }
}
