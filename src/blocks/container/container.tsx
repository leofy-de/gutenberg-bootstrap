/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import * as styles from '../../assets/scss/styles.module.scss';

import icons from "../../lib/icons";
import * as React from 'react';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {Fragment} = wp.element;
const {InnerBlocks, InspectorControls} = wp.editor;
const {PanelBody, PanelRow} = wp.components;
const classNames = require('classnames/bind');
let cx = classNames.bind(styles);

const attributes = {
    alignment: {
        type: 'string',
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.content'
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
};

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType('gbb/container', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Container'), // Block title.
    description: __(
        'Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).'), // Block title.
    icon: icons.container,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Container'),
        __('Grid'),
    ],
    attributes,

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        const {attributes: {alignment, content, margin}, setAttributes} = props;

        function setMargin(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({margin: selected.value});
            event.preventDefault();
        }

        return (
            <Fragment>
                <InspectorControls>
                    <PanelBody title={__('Select options')}>
                        <PanelRow>
                            <label>{__('Margin')}</label>
                            <form onSubmit={setMargin}>
                                <select value={margin} onChange={setMargin}>
                                    <option value="my-0">No margin</option>
                                    <option value="my-1">my-1 - Tiny margin</option>
                                    <option value="my-2">my-2 - Small margin</option>
                                    <option value="my-3">my-3 - Middle margin</option>
                                    <option value="my-4">my-4 - Large margin</option>
                                    <option value="my-5">my-5 - Hugh margin</option>
                                </select>
                            </form>
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <div className={`${props.className} ${cx(margin)}`} style={{textAlign: alignment}}>
                    <InnerBlocks/>
                </div>
            </Fragment>
        );
    },

    /**
     * The save function defines the way in which the different attributes should be combined
     * into the final markup, which is then serialized by Gutenberg into post_content.
     *
     * The "save" property must be specified and must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    save: function (props) {
        const {attributes: {alignment, margin}} = props;

        return (
            <div className={cx(margin)} style={{textAlign: alignment}}>
                <div className={`${cx('container')}`}>
                    <InnerBlocks.Content/>
                </div>
            </div>
        );
    },
});
