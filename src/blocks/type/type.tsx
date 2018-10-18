/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import * as styles from '../../assets/scss/styles.module.scss';
import icons from '../../lib/icons';
import * as React from 'react';
import Inspector from "./components/inspector";

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {Fragment} = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    RichText,
} = wp.editor;
const classNames = require('classnames/bind');
let cx = classNames.bind(styles);

const attributes = {
    alignment: {
        type: 'string',
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.type-content'
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    type: {
        type: 'string',
        default: 'display-1'
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
registerBlockType('gbb/type', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Type Headings'), // Block title.
    description: __(
        'Provide contextual feedback messages for typical user actions with the handful of available and flexible type messages.'), // Block title.
    icon: icons.type,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Header'),
        __('Typography'),
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
        const {attributes: {alignment, content, margin, type}, setAttributes} = props;

        function onChangeAlignment(newAlignment) {
            setAttributes({alignment: newAlignment});
        }

        function onChangeContent(newContent) {
            setAttributes({content: newContent});
        }

        return (
            <Fragment>
                <Inspector {...props} />
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={onChangeAlignment}
                    />
                </BlockControls>
                <div className={props.className} style={{textAlign: alignment}}>
                    <RichText
                        className={cx('type-content', type, margin)}
                        tagName="div"
                        multiline="span"
                        onChange={onChangeContent}
                        value={content}
                    />
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
        const {attributes: {alignment, content, margin, type}} = props;

        return (
            <div style={{textAlign: alignment}}>
                <RichText.Content
                    className={cx('type-content', type, margin)}
                    tagName="div"
                    value={content}
                />
            </div>
        );
    },
});
