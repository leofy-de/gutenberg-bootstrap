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
	icon       : <svg viewBox="0 0 512 512">
		<path d="M228 119c5.523 0 10-4.478 10-10V77c0-27.57-22.43-50-50-50H50C22.43 27 0 49.43 0 77v119.988c0 27.57 22.43 50 50 50h64.692c-2.276 74.706-30.621 113.542-86.459 118.622a10 10 0 0 0-9.094 9.959V475a10 10 0 0 0 10.561 9.984c68.908-3.876 121.511-27.591 156.349-70.487C220.521 372.051 238 310.029 238 230.152v-35.819c0-5.522-4.477-10-10-10s-10 4.478-10 10v35.819c0 146.644-58.535 223.331-178.86 234.097v-79.836c30.411-4.73 53.934-18.886 70.007-42.161 17.049-24.691 25.694-60.106 25.694-105.264 0-5.522-4.477-10-10-10H50c-16.542 0-30-13.458-30-30V77c0-16.542 13.458-30 30-30h138c16.542 0 30 13.458 30 30v32c0 5.522 4.477 10 10 10zM462 27H324c-27.57 0-50 22.43-50 50v119.988c0 27.57 22.43 50 50 50h64.692c-2.276 74.706-30.621 113.542-86.459 118.622a10 10 0 0 0-9.094 9.959V475a10 10 0 0 0 10.561 9.984c68.908-3.876 121.511-27.591 156.349-70.487C494.521 372.052 512 310.029 512 230.152V77c0-27.57-22.43-50-50-50zm30 203.152c0 146.644-58.535 223.331-178.861 234.097v-79.836c30.412-4.73 53.935-18.886 70.007-42.161 17.049-24.69 25.694-60.105 25.694-105.264 0-5.522-4.477-10-10-10H324c-16.542 0-30-13.458-30-30V77c0-16.542 13.458-30 30-30h120v74.034c0 5.522 4.477 10 10 10s10-4.478 10-10v-73.96c15.612 1.034 28 14.057 28 29.926v153.152z" />
		<path d="M454 145.751c-5.523 0-10 4.527-10 10.049 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-.099c0-5.522-4.477-9.95-10-9.95zM228 141.666c-5.523 0-10 4.478-10 10v.209c0 5.522 4.477 10 10 10s10-4.478 10-10v-.209c0-5.522-4.477-10-10-10z" />
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
