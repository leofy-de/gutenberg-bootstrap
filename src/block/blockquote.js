/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

const {__}                                         = wp.i18n; // Import __() from wp.i18n
const {registerBlockType}                          = wp.blocks; // Import registerBlockType() from wp.blocks
const {Fragment}                                   = wp.element;
const {AlignmentToolbar, BlockControls, RichText,} = wp.editor;
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
	title      : __('Bootstrap Blockquote'), // Block title.
	description: __('For quoting blocks of content from another source within your document.'), // Block title.
	icon       : <svg aria-hidden="true" data-prefix="fas" data-icon="quote-right"
					  className="svg-inline--fa fa-quote-right fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
					  viewBox="0 0 512 512">
		<path fill="currentColor"
			  d="M464 32H336c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48zm-288 0H48C21.5 32 0 53.5 0 80v128c0 26.5 21.5 48 48 48h80v64c0 35.3-28.7 64-64 64h-8c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h8c88.4 0 160-71.6 160-160V80c0-26.5-21.5-48-48-48z"></path>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Blockquote'),
		__('Quote'),
	],
	attributes : {
		textColor: {
			source: 'string',
		},
		quote    : {
			source  : 'text',
			selector: '.blockquote'
		},
		source   : {
			source  : 'text',
			selector: 'footer.blockquote-footer',
			default : 'Someone famous in <cite>Source Title</cite>',
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
		const {attributes: {alignment, quote, source}, setAttributes} = props;

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={(alignment) => {
							setAttributes({alignment})
						}}
					/>
				</BlockControls>
				<div className={props.className}>
					<blockquote className="blockquote" style={{textAlign: alignment}}>
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
		const {attributes: {alignment, quote, source}} = props;

		return (
			<div>
				<div className={`blockquote`} style={{textAlign: alignment}}>
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
