/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import * as styles from '../../assets/scss/styles.module.scss';
import * as React from 'react';
import icons from '../../lib/icons';
import Inspector from "./components/inspector";

const {__} = wp.i18n; // Import __() from wp.i18n
const {registerBlockType} = wp.blocks; // Import registerBlockType() from wp.blocks
const {Fragment} = wp.element;
const {
    AlignmentToolbar,
    BlockControls,
    MediaUpload,
    RichText,
} = wp.editor;
const classNames = require('classnames/bind');
let cx = classNames.bind(styles);

const attributes = {
    imageId: {type: 'string'},
    imageUrl: {type: 'string'},
    margin: {
        type: 'string',
        default: 'my-3'
    },
    textColor: {
        source: 'string',
    },
    title: {
        source: 'text',
        selector: 'h4.media-heading',
        default: 'Enter a heading here',
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.content',
        default: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
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
registerBlockType('gbb/media', {
    // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
    title: __('Bootstrap Media Object'), // Block title.
    description: __(
        'media object to construct highly repetitive components like blog comments, tweets, and the like.'), // Block title.
    icon: icons.media,
    category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
    keywords: [
        __('Bootstrap'),
        __('Media Object'),
        __('image'),
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

        const {attributes: {alignment, content, imageId, imageUrl, margin, title}, setAttributes} = props;

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
                        className={cx('media', margin)}
                        style={{
                            textAlign: alignment
                        }}
                    >
                        <MediaUpload
                            buttonProps={{
                                className: 'change-image'
                            }}
                            onSelect={(img) => setAttributes({
                                imageId: img.id,
                                imageUrl: img.url,
                            })}
                            type="image"
                            value={imageId}
                            render={({open}) => (
                                <div
                                    className={cx("media-image", "mr-3")}
                                    onClick={open}
                                >
                                    {!imageId ?
                                        <div className="btn btn-secondary">
                                            {icons.upload} {__('Upload image')}
                                        </div> :
                                        <img src={imageUrl}/>
                                    }
                                </div>
                            )}
                        >
                        </MediaUpload>
                        <div className={cx("media-body")}>
                            <RichText
                                className={cx("media-heading", "mt-0")}
                                multiline="p"
                                tagName="h5"
                                onChange={(title) => {
                                    setAttributes({title})
                                }}
                                value={title}
                            />
                            <RichText
                                className={cx("content")}
                                tagName="div"
                                onChange={(content) => {
                                    setAttributes({content})
                                }}
                                value={content}
                            />
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

        // Initialize theme
        const {attributes: {alignment, content, imageId, imageUrl, margin, title}} = props;

        return (
            <div>
                <div className={cx('media', margin)}
                     style={{textAlign: alignment}}
                >
                    {
                        imageId &&
						<img src={imageUrl} className={cx("media-image", "mr-3")} />
                    }

                    <div className="media-body">
                        <RichText.Content
                            className={cx("media-heading", "mt-0")}
                            tagName="h5"
                            value={title}
                        />
                        <RichText.Content
                            className={cx("content")}
                            tagName="div"
                            value={content}
                        />
                    </div>
                </div>
            </div>
        );
    },
});
