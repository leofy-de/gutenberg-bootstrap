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
    clientId: {
        type: 'string'
    },
    content: {
        type: 'array',
        source: 'query',
        default: [
            {
                title: 'Collapsible Group Item #1',
                body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
            },
            {
                title: 'Collapsible Group Item #2',
                body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
            },
            {
                title: 'Collapsible Group Item #3',
                body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
            },
        ],
        selector: '.gbb-accordion .gbb-card',
        query: {
            /*active: {
                type   : 'boolean',
                source  : 'text',
                default: false,
            },*/
            title: {
                type: 'string',
                source: 'text',
                selector: '.gbb-card-header h5',
            },
            body: {
                type: 'array',
                selector: '.gbb-card-body',
                source: 'children',
            },
        },
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    theme: {
        type: 'string',
        default: 'light'
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
registerBlockType('gbb/accordion', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Accordion/Collapsible'), // Block title.
    description: __(
        'Using the card component, you can extend the default collapse behavior to create an accordion.'), // Block title.
    icon: icons.accordion,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Accordion'),
        __('Collapse'),
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
        const {attributes: {alignment, clientId, content, margin, theme}, setAttributes} = props;

        // Set the block identifier
        setAttributes({clientId: props.clientId});

        function setMargin(event) {
            const selected = event.target.querySelector('option:checked');
            setAttributes({margin: selected.value});
            event.preventDefault();
        }

        function addCard() {
            const card = {
                title: `Collapsible Group Item #${content.length + 1}`,
                body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
            };
            setAttributes({
                content: [...content, card]
            });
        }

        function removeCard(key) {
            setAttributes({content: content.filter((card, i) => i !== key)});
        }

        function onChangeCardBody(key, body) {
            const newContent = content;
            newContent[key].body = body;
            setAttributes({content: newContent});
        }

        function onChangeCardTitle(key, title) {
            const newContent = content;
            newContent[key].title = title;
            setAttributes({content: newContent});
        }

        return (
            <Fragment>
                <Inspector {...props} />
                <BlockControls>
                    <AlignmentToolbar
                        value={alignment}
                        onChange={(newAlignment) => {
                            setAttributes({alignment: newAlignment});
                        }}
                    />
                </BlockControls>
                <div className={props.className}>
                    <div
                        className={`gbb-accordion ${styles.accordion} ${styles[margin]}`}
                        style={{textAlign: alignment}}
                    >
                        {
                            content.map((card, key) => {
                                return <div className={`gbb-card ${styles.card}`}>
                                    <div className={cx('removeCard', 'float-right')}>
                                        <button
                                            className={cx('btn', 'btn-secondary', 'btn-sm')}
                                            onClick={() => removeCard(key)}
                                        >
                                            <span className="dashicons dashicons-minus"></span> {__('Remove')}
                                        </button>
                                    </div>
                                    <div
                                        className={`gbb-card-header ${cx('card-header', `bg-${theme}`, {'text-white': (theme !== 'light')})}`}
                                        data-toggle="collapse"
                                        data-target={`#collapse${clientId}-${key}`}
                                        aria-expanded="false"
                                        aria-controls={`collapse${key}`}
                                    >
                                        <RichText
                                            tagName="h5"
                                            className={`${styles['mb-0']} ${styles.h5}`}
                                            onChange={(title) => onChangeCardTitle(key, title)}
                                            value={card.title}
                                        />
                                    </div>
                                    <div
                                        id={`collapse${clientId}-${key}`}
                                        className={`collapse`}
                                    >
                                        <RichText
                                            className={`gbb-card-header ${styles["card-body"]}`}
                                            tagName="div"
                                            onChange={(body) => onChangeCardBody(key, body)}
                                            value={card.body}
                                        />
                                    </div>
                                </div>
                            })
                        }

                        <div className={`addCard ${styles['text-center']}`}>
                            <button
                                className={`${styles.btn} ${styles['btn-secondary']} ${styles['mt-3']}`}
                                onClick={addCard}
                            >
                                <span className="dashicons dashicons-plus"></span> {__('Add')}
                            </button>
                        </div>
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
        const {attributes: {alignment, clientId, content, margin, theme}} = props;

        return (
            <div>
                <div
                    className={`gbb-accordion ${styles.accordion} ${styles[margin]}`}
                    style={{textAlign: alignment}}
                >
                    {
                        content.map((card, key) => {
                            return <div className={`gbb-card ${styles.card}`}>
                                <div className={`gbb-card-header ${cx('card-header', `bg-${theme}`, {'text-white': (theme !== 'light')})}`}
                                     data-toggle="collapse"
                                     data-target={`#collapse${clientId}-${key}`}
                                >
                                    <RichText.Content
                                        className={`${styles['mb-0']} ${styles.h5}`}
                                        tagName="h5"
                                        value={card.title}
                                    />
                                </div>
                                <div
                                    id={`collapse${clientId}-${key}`}
                                    className={`collapse`}
                                >
                                    <RichText.Content
                                        className={`gbb-card-body ${styles['card-body']}`}
                                        tagName="div"
                                        value={card.body}
                                    />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        );
    },
});
