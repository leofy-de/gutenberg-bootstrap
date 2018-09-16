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
import '../../node_modules/bootstrap/js/src/button';

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
		  URLInput,
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
registerBlockType('gbb/button', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title      : __('Bootstrap Button'), // Block title.
	description: __(
		'Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'), // Block title.
	icon       : {
		// Specifying a background color to appear with the icon e.g.: in the inserter.
		background: '#fff',
		// Specifying a color for the icon (optional: if not set, a readable color will be automatically defined)
		foreground: '#0088cc',
		// Specifying a dashicon for the block
		src       : 'editor-insertmore',
	}, // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.
	//icon: <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z" /><path d="M19 13H5v-2h14v2z" /></svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Button'),
	],
	attributes : {
		alignment: {
			type: 'string',
		},
		caption  : {
			type    : 'array',
			source  : 'children',
			selector: 'div.content'
		},
		isBlockWidth: {
			type: 'boolean',
		},
		isOutline: {
			type: 'boolean',
		},
		size     : {
			type   : 'string',
			default: ''
		},
		theme    : {
			type   : 'string',
			default: 'primary'
		},
		url      : {
			type     : 'string',
			source   : 'attribute',
			selector : 'a',
			attribute: 'href',
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
		// Theme selection
		const {attributes: {alignment, caption, isBlockWidth, isOutline, size, theme, url}, setAttributes, isSelected} = props;

		function setSize(event) {
			const selected = event.target.querySelector('option:checked');
			setAttributes({size: selected.value});
			event.preventDefault();
		}

		function setTheme(event) {
			const selected = event.target.querySelector('option:checked');
			setAttributes({theme: selected.value});
			event.preventDefault();
		}

		function onChangeAlignment(newAlignment) {
			setAttributes({alignment: newAlignment});
		}

		function onChangeCaption(newCaption) {
			setAttributes({caption: newCaption});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Select options')}>
						<PanelRow>
							<label>{__('Theme')}</label>
							<form onSubmit={setTheme}>
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
							</form>
						</PanelRow>
						<PanelRow>
							<CheckboxControl
								label={__('Outline Button?')}
								checked={isOutline}
								onChange={(isOutline) => {
									setAttributes({isOutline})
								}}
							/>
						</PanelRow>
						<PanelRow>
							<label>{__('Size')}</label>
							<form onSubmit={setSize}>
								<select value={size} onChange={setSize}>
									<option value="">Default</option>
									<option value="sm">Small</option>
									<option value="lg">Large</option>
								</select>
							</form>
						</PanelRow>
						<PanelRow>
							<CheckboxControl
								label={__('Block Button / Full width?')}
								checked={isBlockWidth}
								onChange={(isBlockWidth) => {
									setAttributes({isBlockWidth})
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
				<div className={props.className} style={{textAlign: alignment}}>
					<RichText
						autoFocus={true}
						className={`btn btn-${isOutline ? 'outline-' : ''}${theme} ${size !== '' ? `btn-${size}` : ''} ${isBlockWidth ? `btn-block` : ''}`}
						role="button"
						href={`#`}
						tagName="a"
						onChange={onChangeCaption}
						value={caption}
					/>

					<URLInput
						autoFocus={false}
						className="button-url"
						value={url}
						onChange={(value) => setAttributes({url: value})}
					/>
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
		const {attributes: {alignment, caption, isBlockWidth, isOutline, size, theme, url}} = props;

		return (
			<div style={{textAlign: alignment}}>
				<RichText.Content
					className={`btn btn-${isOutline ? 'outline-' : ''}${theme} ${size !== '' ? `btn-${size}` : ''} ${isBlockWidth ? `btn-block` : ''}`}
					href={url}
					role="button"
					tagName="a"
					value={caption}
				/>
			</div>
		);
	},
});
