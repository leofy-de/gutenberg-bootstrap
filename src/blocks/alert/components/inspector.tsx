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
} = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends React.Component<GutenbergBlockProps, {}> {


    render() {

        // Setup the attributes
        const {attributes: {isDismissable, margin, theme}, setAttributes} = this.props;

        return (
			<InspectorControls key="inspector">
				<PanelBody title={__('Alert options')}>

					<ThemePicker theme={theme} setAttributes={setAttributes}/>

                    <PanelRow>
                        <ButtonGroup>
                            <Button isLarge isPrimary={isDismissable} onClick={() => {
                                setAttributes({isDismissable: !isDismissable})
                            }}>{__('Is dismissible')}</Button>
                        </ButtonGroup>
                    </PanelRow>
				</PanelBody>

                <MarginPicker margin={margin} setAttributes={setAttributes}/>
			</InspectorControls>
        );
    }
}
