/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import '../style.scss';
import '../editor.scss';
import icons from './icons';

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
	title      : __('Bootstrap Media Object'), // Block title.
	description: __(
		'media object to construct highly repetitive components like blog comments, tweets, and the like.'), // Block title.
	icon       :<svg width={512} height={512} viewBox="0 0 612 612">
		<path
			d="M159.209 283.684c-.021 0-.021 0 0 0l-139.249-.165C8.947 283.477 0 274.489 0 263.496L.166 124.35c0-11.014 8.947-19.981 19.939-19.981l139.249.166c11.013.042 19.96 9.009 19.96 20.022l-.165 139.146c0 5.331-2.087 10.332-5.848 14.113a19.772 19.772 0 0 1-14.092 5.868zM20.146 120.92c-1.612 0-3.451 1.798-3.451 3.43l-.165 139.146c0 1.88 1.591 3.471 3.472 3.471l139.166.166v8.265l.042-8.265c1.611 0 3.43-1.818 3.43-3.43l.166-139.146a3.466 3.466 0 0 0-3.472-3.471l-139.188-.166zM159.209 507.631c-.021 0-.021 0 0 0l-139.249-.124C8.947 507.465 0 498.498 0 487.505l.166-139.207c0-11.014 8.947-19.981 19.939-19.981l139.249.165c11.013.041 19.96 9.03 19.96 20.022l-.165 139.146c0 5.331-2.087 10.332-5.848 14.113a19.772 19.772 0 0 1-14.092 5.868zM20.146 344.867c-1.612 0-3.451 1.798-3.451 3.431l-.165 139.207c0 1.88 1.591 3.45 3.472 3.45l139.166.124v8.266l.042-8.266c1.611 0 3.43-1.818 3.43-3.43l.166-139.146a3.466 3.466 0 0 0-3.472-3.472l-139.188-.164zM595.325 186.464H230.104c-9.195 0-16.675-8.183-16.675-18.266s7.48-18.266 16.675-18.266h365.221c9.194 0 16.675 8.183 16.675 18.266s-7.48 18.266-16.675 18.266zM230.104 162.33c-2.314 0-4.277 2.686-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.686 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 238.122H230.104c-9.195 0-16.675-8.183-16.675-18.266s7.48-18.266 16.675-18.266h365.221c9.194 0 16.675 8.183 16.675 18.266s-7.48 18.266-16.675 18.266zm-365.221-24.135c-2.314 0-4.277 2.686-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.686 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 410.411H230.104c-9.195 0-16.675-8.183-16.675-18.267s7.48-18.267 16.675-18.267h365.221c9.194 0 16.675 8.183 16.675 18.267s-7.48 18.267-16.675 18.267zm-365.221-24.135c-2.314 0-4.277 2.687-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.687 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 462.068H230.104c-9.195 0-16.675-8.183-16.675-18.266 0-10.084 7.48-18.267 16.675-18.267h365.221c9.194 0 16.675 8.183 16.675 18.267s-7.48 18.266-16.675 18.266zm-365.221-24.134c-2.314 0-4.277 2.687-4.277 5.869s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.687 4.277-5.868 0-3.183-1.964-5.869-4.277-5.869H230.104z"
			data-original="#000000"
			className="active-path"
			data-old_color="#484747"
			fill="#444"
		/>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Media Object'),
		__('image'),
	],
	attributes : {
		imageId  : {type: 'string'},
		imageUrl : {type: 'string'},
		margin   : {
			type   : 'string',
			default: 'my-3'
		},
		textColor: {
			source: 'string',
		},
		title    : {
			source  : 'text',
			selector: 'h4.media-heading',
			default : 'Enter a heading here',
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
										<div className="btn btn-secondary">
											{icons.upload} {__('Upload image')}
										</div> :
										<img src={imageUrl} />
									}
								</div>
							)}
						>
						</MediaUpload>
						<div className="media-body">
							<RichText
								className="media-heading mt-0"
								multiline="p"
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
		const {attributes: {alignment, content, imageId, imageUrl, margin, title}} = props;

		return (
			<div>
				<div className={`media ${margin}`}
					 style={{textAlign: alignment}}
				>
					{
						imageId &&
						<img src={imageUrl} className="media-image mr-3"/>
					}

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
