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
import Inspector from "./components/inspector";

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType, createBlock} = wp.blocks; // Import registerBlockType() from wp.blocks
const {CheckboxControl, PanelBody, PanelRow} = wp.components;
const {Fragment} = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    InspectorControls,
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
        selector: 'h4.gbb-alert-heading'
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.content',
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

        return (
            <Fragment>
                <Inspector {...props} />

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
                            className={`gbb-alert-heading ${styles.alertHeading}`}
                            tagName="h4"
                            onChange={(title) => {
                                setAttributes({title})
                            }}
                            keepPlaceholderOnFocus={true}
                            placeholder={ __( 'Enter an optional title here...' ) }
                            value={title}
                        />
                        <RichText
                            tagName="div"
                            onChange={(content) => {
                                setAttributes({content})
                            }}
                            keepPlaceholderOnFocus={true}
                            placeholder={ __( 'Enter any text message here...' ) }
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
        const {attributes: {alignment, content, isDismissable, margin, title, theme}} = props;

        // Check if a title is available
        const titleAvailable = (title || '').replace(/<(?:.|\n)*?>/gm, '').length > 0;

        return (
            <div>
                <div
                    className={`${styles.alert} ${styles[`alert-${theme}`]} alert alert-dismissible fade show ${styles[margin]}`}
                    role="alert"
                    style={{textAlign: alignment}}
                >
                    {
                        titleAvailable && <RichText.Content
							className={`gbb-alert-heading ${styles.alertHeading}`}
							tagName="h4"
							value={title}
						/>
                    }
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
