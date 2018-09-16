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
	icon       : <svg aria-hidden="true" data-prefix="fas" data-icon="ad" className="svg-inline--fa fa-ad fa-w-16"
					  role="img"
					  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
		<path fill="currentColor"
			  d="M157.52 272h36.96L176 218.78 157.52 272zM352 256c-13.23 0-24 10.77-24 24s10.77 24 24 24 24-10.77 24-24-10.77-24-24-24zM464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM250.58 352h-16.94c-6.81 0-12.88-4.32-15.12-10.75L211.15 320h-70.29l-7.38 21.25A16 16 0 0 1 118.36 352h-16.94c-11.01 0-18.73-10.85-15.12-21.25L140 176.12A23.995 23.995 0 0 1 162.67 160h26.66A23.99 23.99 0 0 1 212 176.13l53.69 154.62c3.61 10.4-4.11 21.25-15.11 21.25zM424 336c0 8.84-7.16 16-16 16h-16c-4.85 0-9.04-2.27-11.98-5.68-8.62 3.66-18.09 5.68-28.02 5.68-39.7 0-72-32.3-72-72s32.3-72 72-72c8.46 0 16.46 1.73 24 4.42V176c0-8.84 7.16-16 16-16h16c8.84 0 16 7.16 16 16v160z"></path>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Button'),
	],
	attributes : {
		alignment   : {
			type: 'string',
		},
		caption     : {
			type    : 'array',
			source  : 'children',
			selector: 'div.content'
		},
		isBlockWidth: {
			type: 'boolean',
		},
		isOutline   : {
			type: 'boolean',
		},
		size        : {
			type   : 'string',
			default: ''
		},
		theme       : {
			type   : 'string',
			default: 'primary'
		},
		url         : {
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
