/**
 * Inspector Controls
 */
import * as React from 'react';
import { CirclePicker } from 'react-color';
import {GutenbergBlockProps} from "../../../@types/global";
import MarginPicker from "../../../lib/inspector/marginPicker";

// Setup the block
const {__} = wp.i18n;

// Import block components
const {
    InspectorControls,
} = wp.editor;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends React.Component<GutenbergBlockProps, {}> {


    render() {

        // Setup the attributes
        const {attributes: {margin, theme}, setAttributes} = this.props;

        return (
			<InspectorControls key="inspector">
                <MarginPicker margin={margin} setAttributes={setAttributes}/>
			</InspectorControls>
        );
    }
}
