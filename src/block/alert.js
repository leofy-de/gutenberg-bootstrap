/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import './style.scss';
import './editor.scss';

// Import JS.
import '../../node_modules/bootstrap/js/src/alert';

const {__}                                   = wp.i18n; // Import __() from wp.i18n
const {registerBlockType}                    = wp.blocks; // Import registerBlockType() from wp.blocks
const {CheckboxControl, PanelBody, PanelRow} = wp.components;
const {Fragment}                             = wp.element;
const {
		  AlignmentToolbar,
		  BlockControls,
		  ColorPalette,
		  InspectorControls,
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
registerBlockType('gbb/alert', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title      : __('Bootstrap Alert'), // Block title.
	description: __(
		'Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'), // Block title.
	icon       : <svg aria-hidden="true" data-prefix="far" data-icon="comment-alt"
					  className="svg-inline--fa fa-comment-alt fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg"
					  viewBox="0 0 512 512">
		<path fill="currentColor"
			  d="M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z"></path>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Alert'),
		__('Notification'),
	],
	attributes : {
		theme        : {
			type   : 'string',
			default: 'success'
		},
		textColor    : {
			source: 'string',
		},
		title        : {
			source  : 'text',
			selector: 'h4.alert-heading'
		},
		content      : {
			type    : 'array',
			source  : 'children',
			selector: 'div.content'
		},
		isDismissable: {
			type: 'boolean',
		},
		alignment    : {
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
		// Creates a <p class='wp-block-gbb-alert'></p>.

		// Theme selection
		const {attributes: {alignment, content, isDismissable, textColor, title, theme}, setAttributes, isSelected} = props;

		function setTheme(event) {
			const selected = event.target.querySelector('option:checked');
			setAttributes({theme: selected.value});
			event.preventDefault();
		}

		function onChangeAlignment(newAlignment) {
			setAttributes({alignment: newAlignment});
		}

		function onChangeContent(newContent) {
			setAttributes({content: newContent});
		}

		function onTitleContent(newTitle) {
			setAttributes({title: newTitle});
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
					{/*<ColorPalette
						value={textColor}
						onChange={(textColor) => setAttributes({ textColor })} />*/}
				</form>
			);
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Select options')}>
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
						onChange={onChangeAlignment}
					/>
				</BlockControls>
				<div className={props.className}>
					<div className={`alert alert-${theme} alert-dismissible fade show`} role="alert"
						 style={{textAlign: alignment}}>
						<RichText
							className="alert-heading"
							tagName="h4"
							onChange={onTitleContent}
							value={title}
						/>
						<RichText
							className="content"
							tagName="div"
							onChange={onChangeContent}
							value={content}
						/>
						{
							isDismissable &&
							<button type="button" className="close" data-dismiss="alert" aria-label="Close">
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
		const {attributes: {alignment, content, title, theme}} = props;

		return (
			<div>
				<div className={`alert alert-${theme} alert-dismissible fade show`}
					 role="alert"
					 style={{textAlign: alignment}}
				>
					<RichText.Content
						className="alert-heading"
						tagName="h4"
						value={title}
					/>
					<RichText.Content
						className="content"
						tagName="div"
						value={content}
					/>
					<button type="button" className="close" data-dismiss="alert" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

			</div>
		);
	},
});
