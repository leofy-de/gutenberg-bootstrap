/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';
import icons from './media/icons';

const {__}                                   = wp.i18n; // Import __() from wp.i18n
const {registerBlockType}                    = wp.blocks; // Import registerBlockType() from wp.blocks
const {CheckboxControl, PanelBody, PanelRow} = wp.components;
const {Fragment}                             = wp.element;
const {
		  AlignmentToolbar,
		  BlockControls,
		  ColorPalette,
		  InspectorControls,
		  MediaUpload,
		  RichText,
	  }                                      = wp.editor;
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
	title      : __('Bootstrap Media List'), // Block title.
	description: __(
		'media object to construct highly repetitive components like blog comments, tweets, and the like.'), // Block title.
	icon       : <svg height="496pt" viewBox="0 0 496 496" width="496pt">
		<path
			d="M488 0H8C3.574 0 0 3.586 0 8v480c0 4.426 3.574 8 8 8h480c4.426 0 8-3.574 8-8V8c0-4.414-3.574-8-8-8zm-8 16v80H16V16zM16 480V112h464v368zm0 0"/>
		<path
			d="M56 80c13.23 0 24-10.77 24-24S69.23 32 56 32 32 42.77 32 56s10.77 24 24 24zm0-32c4.414 0 8 3.594 8 8s-3.586 8-8 8-8-3.594-8-8 3.586-8 8-8zm0 0M120 80c13.23 0 24-10.77 24-24s-10.77-24-24-24-24 10.77-24 24 10.77 24 24 24zm0-32c4.414 0 8 3.594 8 8s-3.586 8-8 8-8-3.594-8-8 3.586-8 8-8zm0 0M184 80c13.23 0 24-10.77 24-24s-10.77-24-24-24-24 10.77-24 24 10.77 24 24 24zm0-32c4.414 0 8 3.594 8 8s-3.586 8-8 8-8-3.594-8-8 3.586-8 8-8zm0 0M448 48h16v16h-16zm0 0M416 48h16v16h-16zm0 0M384 48h16v16h-16zm0 0M104 192H40c-4.426 0-8 3.586-8 8v64c0 4.426 3.574 8 8 8h64c4.426 0 8-3.574 8-8v-64c0-4.414-3.574-8-8-8zm-8 64H48v-48h48zm0 0M128 256h112v16H128zm0 0M328 192h-64c-4.426 0-8 3.586-8 8v64c0 4.426 3.574 8 8 8h64c4.426 0 8-3.574 8-8v-64c0-4.414-3.574-8-8-8zm-8 64h-48v-48h48zm0 0M352 256h112v16H352zm0 0M352 224h112v16H352zm0 0M128 224h112v16H128zm0 0M104 288H40a7.99 7.99 0 0 0-8 8v64c0 4.426 3.574 8 8 8h64c4.426 0 8-3.574 8-8v-64c0-4.426-3.574-8-8-8zm-8 64H48v-48h48zm0 0M128 352h112v16H128zm0 0M328 288h-64a7.99 7.99 0 0 0-8 8v64c0 4.426 3.574 8 8 8h64c4.426 0 8-3.574 8-8v-64c0-4.426-3.574-8-8-8zm-8 64h-48v-48h48zm0 0M352 352h112v16H352zm0 0M352 320h112v16H352zm0 0M128 320h112v16H128zm0 0M104 384H40a7.99 7.99 0 0 0-8 8v64c0 4.426 3.574 8 8 8h64c4.426 0 8-3.574 8-8v-64c0-4.426-3.574-8-8-8zm-8 64H48v-48h48zm0 0M128 448h112v16H128zm0 0M328 384h-64a7.99 7.99 0 0 0-8 8v64c0 4.426 3.574 8 8 8h64c4.426 0 8-3.574 8-8v-64c0-4.426-3.574-8-8-8zm-8 64h-48v-48h48zm0 0M352 448h112v16H352zm0 0M352 416h112v16H352zm0 0M128 416h112v16H128zm0 0M32 160h432v16H32zm0 0M32 128h432v16H32zm0 0"/>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Media Object'),
		__('List'),
	],
	attributes : {
		imageId  : {type: 'string'},
		imageUrl : {type: 'string'},
		margin   : {
			type: 'string',
			default: 'my-3'
		},
		textColor: {
			source: 'string',
		},
		title    : {
			source  : 'text',
			selector: 'h4.media-heading',
			default : 'Media heading',
		},
		content  : {
			type    : 'array',
			source  : 'children',
			selector: 'div.content',
			default : 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
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

		const {attributes: {alignment, content, imageId, imageUrl, margin, title}, setAttributes, isSelected} = props;
		function setMargin(event) {
			const selected = event.target.querySelector('option:checked');
			setAttributes({margin: selected.value});
			event.preventDefault();
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
						className={`media ${margin}`}
						style={{
							textAlign: alignment,
							margin
						}}
					>
						<MediaUpload
							buttonProps={{
								className: 'change-image'
							}}
							onSelect={(img) => setAttributes({
								imageId : img.id,
								imageUrl: img.url,
							})}
							type="image"
							value={imageId}
							render={({open}) => (
								<div
									className="media-image mr-3"
									onClick={open}
								>
									{!imageId ?
										<div className="btn btn-primary ">
											{icons.upload}
										</div> : <img
											src={imageUrl}
										/>}
								</div>
							)}
						>
						</MediaUpload>
						<div className="media-body">
							<RichText
								className="media-heading mt-0"
								tagName="h5"
								onChange={(title) => {
									setAttributes({title})
								}}
								value={title}
							/>
							<RichText
								className="content"
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
		const {attributes: {alignment, content, imageUrl, margin, title}} = props;

		return (
			<div>
				<div className={`media ${margin}`}
					 style={{textAlign: alignment}}
				>
					<img src={imageUrl} className="media-image mr-3"/>
					<div className="media-body">
						<RichText.Content
							className="media-heading"
							tagName="h5"
							value={title}
						/>
						<RichText.Content
							className="content"
							tagName="div"
							value={content}
						/>
					</div>
				</div>
			</div>
		);
	},
});
