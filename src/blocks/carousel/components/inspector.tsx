/**
 * Inspector Controls
 */
import * as React from "react";
import { CirclePicker } from "react-color";
import { GutenbergBlockProps } from "../../../@types/global";
import MarginPicker from "../../../lib/inspector/marginPicker";
import ThemePicker from "../../../lib/inspector/themePicker";

// Setup the block
const { __ } = wp.i18n;
const { Component } = wp.element;

// Import block components
const { InspectorControls } = wp.editor;

// Import Inspector components
const { Button, ButtonGroup, PanelBody, PanelRow } = wp.components;

/**
 * Create an Inspector Controls wrapper Component
 */
export default class Inspector extends React.Component<
	GutenbergBlockProps,
	{}
> {
	public render() {
		// Setup the attributes
		const {
			attributes: { margin, theme },
			setAttributes
		} = this.props;

		return (
			<InspectorControls key="inspector">
				<PanelBody title={__("Select options")}>
					<ThemePicker theme={theme} setAttributes={setAttributes} />
					<MarginPicker margin={margin} setAttributes={setAttributes} />
				</PanelBody>
			</InspectorControls>
		);
	}
}
