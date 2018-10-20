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
                title: 'Slide #1',
                body: ['Praesent commodo cursus magna, vel scelerisque nisl consectetur.']
            },
            {
                title: 'Slide #2',
                body: ['Praesent commodo cursus magna, vel scelerisque nisl consectetur.']
            },
            {
                title: 'Slide #3',
                body: ['Praesent commodo cursus magna, vel scelerisque nisl consectetur.']
            },
        ],
        selector: '.gbb-carousel .gbb-carousel-item',
        query: {
            active: {
                type: 'boolean',
                default: false,
            },
            title: {
                type: 'string',
                source: 'text',
                selector: '.gbb-carousel-caption h5',
            },
            body: {
                type: 'array',
                selector: '.gbb-carousel-caption-body',
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
registerBlockType('gbb/carousel', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Carousel'), // Block title.
    description: __(
        'A slideshow component for cycling through elements—images or slides of text—like a carousel.'),
    icon: icons.carousel,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Carousel'),
        __('Slider'),
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
        const carouselId = `carousel-${clientId}`;

        function addSlide() {
            const slide = {
                title: `Collapsible Group Item #${content.length + 1}`,
                body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
            };
            setAttributes({
                content: [...content, slide]
            });
        }

        function removeSlide(key) {
            setAttributes({content: content.filter((slide, i) => i !== key)});
        }

        function onChangeSlideBody(key, body) {
            const newContent = content;
            newContent[key].body = body;
            setAttributes({content: newContent});
        }

        function onChangeSlideTitle(key, title) {
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
                        id={carouselId}
                        className={`carousel gbb-carousel ${cx('carousel', 'slide')} ${styles[margin]}`}
                        style={{textAlign: alignment}}
                        data-ride="carousel"
                    >

                        <ol className={cx('carousel-indicators')}>
                            {
                                content.map((slide, key) => <li
                                    data-target={`#${carouselId}`}
                                    data-slide-to={key}
                                    className="active"></li>)
                            }
                        </ol>
                        <div className={cx('carousel-inner')}>
                            {
                                content.map((slide, key) => <div className={`gbb-carousel-item ${cx('carousel-item', {active: key === 0})}`}>
                                    <div className={cx('removeSlide', 'float-right')}>
                                        <button
                                            className={cx('btn', 'btn-secondary', 'btn-sm')}
                                            onClick={() => removeSlide(key)}
                                        >
                                            <span className="dashicons dashicons-minus"></span> {__('Remove')}
                                        </button>
                                    </div>
                                    <img className={cx('d-block', 'w-100')} src="https://placehold.it/800x400" />
                                    <div className={`gbb-carousel-caption ${cx('carousel-caption', 'd-none', 'd-md-block')}`}>
                                        <RichText
                                            tagName="h5"
                                            onChange={(title) => onChangeSlideTitle(key, title)}
                                            value={slide.title}
                                        />
                                        <RichText
                                            className={`gbb-carousel-caption-body`}
                                            tagName="p"
                                            onChange={(body) => onChangeSlideBody(key, body)}
                                            value={slide.body}
                                        />
                                    </div>
                                </div>)
                            }

                        </div>
                        <a className={cx('carousel-control-prev')} href={`#${carouselId}`} role="button"
                           data-slide="prev">
                            <span className={cx('carousel-control-prev-icon')} aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className={cx('carousel-control-next')} href={`#${carouselId}`} role="button"
                           data-slide="next">
                            <span className={cx('carousel-control-next-icon')} aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className={`addSlide ${styles['text-center']}`}>
                        <button
                            className={`${styles.btn} ${styles['btn-secondary']} ${styles['mt-3']}`}
                            onClick={addSlide}
                        >
                            <span className="dashicons dashicons-plus"></span> {__('Add')}
                        </button>
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
                    className={`gbb-carousel ${styles.carousel} ${styles[margin]}`}
                    style={{textAlign: alignment}}
                >
                    {
                        content.map((slide, key) => {
                            return <div className={`gbb-slide`}>
                                <div
                                    className={`gbb-slide-header ${cx('slide-header', `bg-${theme}`, {'text-white': (theme !== 'light')})}`}
                                    data-toggle="collapse"
                                    data-target={`#collapse${clientId}-${key}`}
                                >
                                    <RichText.Content
                                        className={`${styles['mb-0']} ${styles.h5}`}
                                        tagName="h5"
                                        value={slide.title}
                                    />
                                </div>
                                <div
                                    id={`collapse${clientId}-${key}`}
                                    className={`collapse`}
                                >
                                    <RichText.Content
                                        className={`gbb-slide-body ${styles['slide-body']}`}
                                        tagName="div"
                                        value={slide.body}
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
