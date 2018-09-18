/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const {__}                                                     = wp.i18n; // Import __() from wp.i18n
const {registerBlockType}                                      = wp.blocks; // Import registerBlockType() from wp.blocks
const {Fragment}                                               = wp.element;
const {AlignmentToolbar, BlockControls, InnerBlocks, RichText} = wp.editor;
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
	title      : __('Bootstrap Container'), // Block title.
	description: __(
		'Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).'), // Block title.
	icon       : <svg aria-hidden="true" data-prefix="far" data-icon="square"
					  className="svg-inline--fa fa-square fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg"
					  viewBox="0 0 448 512">
		<path fill="currentColor"
			  d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z"></path>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Container'),
		__('Grid'),
	],
	attributes : {
		content  : {
			type    : 'array',
			source  : 'children',
			selector: 'div.content'
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
		const {attributes: {alignment, content}, setAttributes} = props;

		return (
			<Fragment>
				<div className={props.className} style={{textAlign: alignment}}>
					<InnerBlocks />
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
		const {attributes: {alignment}} = props;

		return (
			<div style={{textAlign: alignment}}>
				<div className="container">
					<InnerBlocks.Content />
				</div>

			</div>
		);
	},
});
