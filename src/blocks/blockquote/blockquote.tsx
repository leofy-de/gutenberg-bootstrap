/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import * as styles from '../../assets/scss/styles.module.scss';
import '../../assets/scss/editor.scss';

import icons from "../../lib/icons";
import * as React from 'react';


const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {Fragment, PanelBody, PanelRow} = wp.element;
const {AlignmentToolbar, BlockControls, RichText, InspectorControls} = wp.editor;
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
registerBlockType('gbb/blockquote', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Blockquote'), // Block title.
    description: __('For quoting blocks of content from another source within your document.'), // Block title.
    icon: icons.blockquote,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Blockquote'),
        __('Quote'),
    ],
    attributes: {
        textColor: {
            source: 'string',
        },
        margin: {
            type: 'string',
            default: 'my-3'
        },
        quote: {
            source: 'text',
            selector: '.blockquote'
        },
        source: {
            source: 'text',
            selector: 'footer.blockquote-footer',
            default: 'Someone famous in <cite>Source Title</cite>',
        },
        alignment: {
            type: 'string',
        },
    },

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        const {attributes: {alignment, margin, quote, source}, setAttributes} = props;

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
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={(alignment) => {
                            setAttributes({alignment})
                        }}
                    />
                </BlockControls>
                <div className={props.className}>
                    <blockquote className={`blockquote ${margin}`} style={{textAlign: alignment}}>
                        <RichText
                            className="mb-0 blockquote"
                            tagName="p"
                            onChange={(quote) => {
                                setAttributes({quote})
                            }}
                            value={quote}
                        />
                        <RichText
                            className="blockquote-footer"
                            format="string"
                            tagName="footer"
                            onChange={(source) => {
                                setAttributes({source})
                            }}
                            value={source}
                        />
                    </blockquote>
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

        // Initialize theme
        const {attributes: {alignment, margin, quote, source}} = props;

        return (
            <div>
                <div className={`blockquote ${margin}`} style={{textAlign: alignment}}>
                    <RichText.Content
                        className="mb-0 blockquote"
                        tagName="p"
                        value={quote}
                    />
                    <RichText.Content
                        className="blockquote-footer"
                        format="string"
                        tagName="footer"
                        value={source}
                    />
                </div>

            </div>
        );
    },
});
