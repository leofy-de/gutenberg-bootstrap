/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import * as styles from '../../assets/scss/styles.module.scss';
import * as React from 'react';

// Import JS.
import '../../../node_modules/bootstrap/js/src/button';
import icons from "../../lib/icons";

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {CheckboxControl, PanelBody, PanelRow} = wp.components;
const {Fragment} = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    InspectorControls,
    RichText,
    URLInput,
} = wp.editor;
const classNames = require('classnames/bind');
let cx = classNames.bind(styles);
const attributes = {
    alignment: {
        type: 'string',
    },
    caption: {
        type: 'array',
        source: 'children',
        selector: 'div.content',
        default: 'Visit Gutenberg-Unlimited Website'
    },
    isBlockWidth: {
        type: 'boolean',
    },
    isOutline: {
        type: 'boolean',
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    size: {
        type: 'string',
        default: ''
    },
    theme: {
        type: 'string',
        default: 'primary'
    },
    url: {
        type: 'string',
        source: 'attribute',
        selector: 'a',
        attribute: 'href',
        default: 'https://www.gutenberg-unlimited.org'
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
registerBlockType('gbb/button', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Button'), // Block title.
    description: __(
        'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'), // Block title.
    icon: icons.button,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Button'),
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
        // Theme selection
        const {attributes: {alignment, caption, isBlockWidth, isOutline, margin, size, theme, url}, setAttributes} = props;

        function setMargin(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({margin: selected.value});
            event.preventDefault();
        }

        function setSize(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({size: selected.value});
            event.preventDefault();
        }

        function setTheme(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({theme: selected.value});
            event.preventDefault();
        }

        function onChangeAlignment(newAlignment) {
            setAttributes({alignment: newAlignment});
        }

        function onChangeCaption(newCaption) {
            setAttributes({caption: newCaption});
        }

        function getButtonClasses() {
            let classes = ['btn'];

            classes.push(isOutline ? `btn-outline-${theme}` : `btn-${theme}`);
            if (size !== '') {
                classes.push(`btn-${size}`);
            }
            if (isBlockWidth) {
                classes.push(`btn-block`);
            }

            return classes;
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
                        <PanelRow>
                            <label>{__('Theme')}</label>
                            <form onSubmit={setTheme}>
                                <select value={theme} onChange={setTheme}>
                                    <option value="primary">Primary</option>
                                    <option value="secondary">Secondary</option>
                                    <option value="success">Success</option>
                                    <option value="danger">Danger</option>
                                    <option value="warning">Warning</option>
                                    <option value="info">Info</option>
                                    <option value="light">Light</option>
                                    <option value="dark">Dark</option>
                                </select>
                            </form>
                        </PanelRow>
                        <PanelRow>
                            <CheckboxControl
                                label={__('Outline Button?')}
                                checked={isOutline}
                                onChange={(isOutline) => {
                                    setAttributes({isOutline})
                                }}
                            />
                        </PanelRow>
                        <PanelRow>
                            <label>{__('Size')}</label>
                            <form onSubmit={setSize}>
                                <select value={size} onChange={setSize}>
                                    <option value="">Default</option>
                                    <option value="sm">Small</option>
                                    <option value="lg">Large</option>
                                </select>
                            </form>
                        </PanelRow>
                        <PanelRow>
                            <CheckboxControl
                                label={__('Full width? (.btn-block)')}
                                checked={isBlockWidth}
                                onChange={(isBlockWidth) => {
                                    setAttributes({isBlockWidth})
                                }}
                            />
                        </PanelRow>
                    </PanelBody>
                </InspectorControls>
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={onChangeAlignment}
                    />
                </BlockControls>
                <div className={props.className} style={{textAlign: alignment}}>
                    <RichText
                        autoFocus={true}
                        className={cx(getButtonClasses(), margin)}
                        tagName="span"
                        multiline="p"
                        onChange={onChangeCaption}
                        value={caption}
                    />

                    <URLInput
                        autoFocus={false}
                        className="button-url"
                        value={url}
                        onChange={(value) => setAttributes({url: value})}
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
        const {attributes: {alignment, caption, isBlockWidth, isOutline, margin, size, theme, url}} = props;

        function getButtonClasses() {
            let classes = ['btn'];

            classes.push(isOutline ? `btn-outline-${theme}` : `btn-${theme}`);
            if (size !== '') {
                classes.push(`btn-${size}`);
            }
            if (isBlockWidth) {
                classes.push(`btn-block`);
            }

            return classes;
        }

        return (
            <div style={{textAlign: alignment}}>
                <a
                    href={url}
                    className={cx(getButtonClasses(), margin)}
                    role="button"
                >
                    <RichText.Content
                        tagName="span"
                        value={caption}
                    />
                </a>

            </div>
        );
    },
});
