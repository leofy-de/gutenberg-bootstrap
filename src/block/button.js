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
	icon       : <svg viewBox="0 0 512 512">
		<path d="M466.959 2.467H39.783C17.847 2.467 0 20.313 0 42.249V282.76c0 21.936 17.847 39.782 39.783 39.782h98.397c5.545 0 10.039-4.495 10.039-10.039s-4.495-10.039-10.04-10.039H39.783c-10.865 0-19.704-8.839-19.704-19.704V42.249c0-10.865 8.839-19.704 19.704-19.704h427.176c10.865 0 19.704 8.839 19.704 19.704V282.76c0 10.865-8.839 19.704-19.704 19.704h-30.148c-5.545 0-10.039 4.495-10.039 10.039s4.495 10.039 10.039 10.039h30.148c21.936 0 39.782-17.846 39.782-39.782V42.249c0-21.936-17.846-39.782-39.782-39.782z" />
		<path d="M511.99 371.309a19.331 19.331 0 0 0-12.644-17.566v-.001l-166.048-61.603c-11.245-4.17-23.498-1.494-31.978 6.984-8.481 8.478-11.16 20.731-6.992 31.975l61.447 165.775c2.767 7.464 9.696 12.43 17.653 12.652.186.006.37.008.554.008 7.735 0 14.672-4.527 17.776-11.655l16.997-39.021 36.85 36.861c10.488 10.491 27.557 10.495 38.049.006l14.215-14.212c5.082-5.081 7.882-11.837 7.883-19.024.001-7.186-2.797-13.943-7.877-19.025L461.49 407.07l39.016-17.417a19.331 19.331 0 0 0 11.484-18.344zm-72.007 23.372a10.04 10.04 0 0 0-3.008 16.266l46.7 46.713a6.833 6.833 0 0 1-.001 9.653l-14.215 14.212a6.78 6.78 0 0 1-4.826 1.998h-.001a6.778 6.778 0 0 1-4.827-2l-47.269-47.282a10.038 10.038 0 0 0-16.304 3.089l-22.212 50.994-60.865-164.203c-2.117-5.712 1.272-9.709 2.361-10.798.839-.838 3.403-3.041 7.148-3.041 1.117 0 2.34.196 3.651.683l164.497 61.027-50.829 22.689zm52.386-22.11a.016.016 0 0 0-.007-.004l3.492-9.412-3.485 9.416zM285.926 269.48l-28.368-28.37c-3.921-3.919-10.277-3.919-14.198 0-3.921 3.921-3.921 10.277-.001 14.198l28.369 28.37a10.009 10.009 0 0 0 7.099 2.94c2.569 0 5.139-.98 7.099-2.94 3.921-3.921 3.921-10.277 0-14.198zM258.097 302.551h-40.12c-5.545 0-10.039 4.495-10.039 10.039s4.495 10.039 10.039 10.039h40.12c5.544 0 10.039-4.495 10.039-10.039s-4.495-10.039-10.039-10.039zM315.704 204.824c-5.544 0-10.039 4.495-10.039 10.039v40.12c0 5.544 4.495 10.039 10.039 10.039s10.039-4.495 10.039-10.039v-40.12c0-5.544-4.495-10.039-10.039-10.039zM399.987 223.474c-3.921-3.919-10.277-3.92-14.198 0l-28.369 28.369c-3.921 3.921-3.921 10.277-.001 14.198a10.011 10.011 0 0 0 7.1 2.94c2.569 0 5.139-.98 7.099-2.94l28.369-28.369c3.921-3.921 3.921-10.277 0-14.198zM274.284 349.176c-3.921-3.919-10.278-3.919-14.198 0l-28.369 28.37c-3.921 3.921-3.92 10.277 0 14.198a10.007 10.007 0 0 0 7.099 2.94c2.57 0 5.139-.98 7.099-2.94l28.369-28.37c3.921-3.921 3.92-10.277 0-14.198z" />
		<circle cx={178.01} cy={312.5} r={10.07} />
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
