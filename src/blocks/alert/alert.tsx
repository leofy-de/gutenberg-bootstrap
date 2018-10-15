/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.
import * as styles from '../../assets/scss/styles.module.scss';
// Import JS.
import '../../../node_modules/bootstrap/js/src/alert';
import icons from "../../lib/icons";
import * as React from 'react';

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType, createBlock} = wp.blocks; // Import registerBlockType() from wp.blocks
const {CheckboxControl, PanelBody, PanelRow} = wp.components;
const {Fragment} = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    ColorPalette,
    InspectorControls,
    InnerBlocks,
    RichText,
} = wp.editor;

// Block attributes
const blockAttributes = {
    theme: {
        type: 'string',
        default: 'success'
    },
    textColor: {
        source: 'string',
    },
    title: {
        source: 'text',
        selector: 'h4.alert-heading',
        default: __('Enter an optional title here')
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.content',
        default: __('Enter any text message here')
    },
    isDismissable: {
        type: 'boolean',
    },
    alignment: {
        type: 'string',
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
registerBlockType('gbb/alert', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Alert'), // Block title.
    description: __(
        'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'), // Block title.
    icon: icons.alert,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Alert'),
        __('Notification'),
    ],
    attributes: blockAttributes,
    deprecated: [
        {
            attributes: {
                ...blockAttributes
            },

            migrate( attributes, innerBlocks  ) {
                return [
                    attributes,
                    [
                        createBlock( 'core/paragraph', {
                            content: attributes.title,
                        } ),
                        ...innerBlocks,
                    ],
                ];
            },

            save( props ) {
                return <p>{ props.attributes.text }</p>;
            },
        }
    ],

    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        const {attributes: {alignment, content, isDismissable, margin, title, theme}, setAttributes} = props;

        function setMargin(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({margin: selected.value});
            event.preventDefault();
        }

        function setTheme(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({theme: selected.value});
            event.preventDefault();
        }


        function showThemeForm() {
            return (
                <form onSubmit={setTheme} style={{textAlign: alignment}}>
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
            );
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
                            {showThemeForm()}
                        </PanelRow>
                        <PanelRow>
                            <CheckboxControl
                                label={__('Is dismissable?')}
                                help={__('Can the user hide the alert by clicking a X button on the top right.')}
                                checked={isDismissable}
                                onChange={(isDismissable) => {
                                    setAttributes({isDismissable})
                                }}
                            />
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
                    <div
                        className={`${styles.alert} ${styles[`alert-${theme}`]} alert alert-dismissible fade show ${styles[margin]}`}
                        role="alert"
                        style={{textAlign: alignment}}>
                        <RichText
                            className={styles["alert-heading"]}
                            tagName="h4"
                            multiline="p"
                            onChange={(title) => {
                                setAttributes({title})
                            }}
                            value={title}
                        />
                        <RichText
                            tagName="div"
                            onChange={(content) => {
                                setAttributes({content})
                            }}
                            value={content}
                        />
                        {
                            isDismissable &&
							<button type="button" className={`close`} data-dismiss="alert" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
                        }
                    </div>
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
        const {attributes: {alignment, content, isDismissable, margin, title, theme}} = props;

        return (
            <div>
                <div
                    className={`${styles['alert']} ${styles[`alert-${theme}`]} alert alert-dismissible fade show ${styles[margin]}`}
                    role="alert"
                    style={{textAlign: alignment}}
                >
                    <RichText.Content
                        className={styles["alert-heading"]}
                        tagName="h4"
                        value={title}
                    />
                    <RichText.Content
                        tagName="div"
                        value={content}
                    />
                    {
                        isDismissable &&
						<button type="button" className={`close`} data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
                    }
                </div>
            </div>
        );
    },
});
