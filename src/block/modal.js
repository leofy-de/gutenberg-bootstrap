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
import '../../node_modules/bootstrap/js/src/modal';

const {__}                  = wp.i18n; // Import __() from wp.i18n
const {registerBlockType}   = wp.blocks; // Import registerBlockType() from wp.blocks
const {CheckboxControl, PanelBody, PanelRow} = wp.components;
const {Fragment}            = wp.element;
const {
		  AlignmentToolbar,
		  BlockControls,
		  ColorPalette,
		  InspectorControls,
		  RichText,
	  }                     = wp.editor;
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
registerBlockType('gbb/modal', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title      : __('Bootstrap Modal'), // Block title.
	description: __(
		'Provide contextual feedback messages for typical user actions with the handful of available and flexible modal messages.'), // Block title.
	icon: <svg version="1.1" id="Capa_1" x="0px" y="0px"	 width="437.348px" height="437.348px" viewBox="0 0 437.348 437.348" style="enable-background:new 0 0 437.348 437.348;"><g>	<g>		<polygon style="fill:#030303;" points="428.233,324.297 350.983,324.297 350.983,312.587 416.523,312.587 416.523,11.711 			115.647,11.711 115.647,95.474 103.936,95.474 103.936,0 428.233,0 		"/>	</g>	<g>		<polygon style="fill:#030303;" points="333.417,437.348 9.115,437.348 9.115,113.04 86.371,113.04 86.371,124.75 20.825,124.75 			20.825,425.638 321.707,425.638 321.707,341.863 333.417,341.863 		"/>	</g>	<g>		<polygon style="fill:#030303;" points="333.417,341.863 321.707,341.863 321.707,124.75 86.371,124.75 86.371,113.04 			333.417,113.04 		"/>	</g></g></svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Modal'),
		__('Popup'),
	],
	attributes : {
		theme      : {
			type   : 'string',
			default: 'success'
		},
		textColor      : {
			source  : 'string',
		},
		title      : {
			source  : 'text',
			selector: 'h4.modal-heading'
		},
		content    : {
			type    : 'array',
			source  : 'children',
			selector: 'div.content'
		},
		isDismissable: {
			type: 'boolean',
		},
		alignment  : {
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
		// Creates a <p class='wp-block-gbb-modal'></p>.

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
								help={__('Can the user hide the modal by clicking a X button on the top right.')}
								checked={ isDismissable }
								onChange={ ( isDismissable ) => { setAttributes( { isDismissable } ) } }
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
					<div className={`modal modal-${theme} modal-dismissible fade show`} role="modal"
						 style={{textAlign: alignment}}>
						<RichText
							className="modal-heading"
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
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
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
				<div className={`modal modal-${theme} modal-dismissible fade show`}
					 role="modal"
					 style={{textAlign: alignment}}
				>
					<RichText.Content
						className="modal-heading"
						tagName="h4"
						value={title}
					/>
					<RichText.Content
						className="content"
						tagName="div"
						value={content}
					/>
					<button type="button" className="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					</button>
				</div>

			</div>
		);
	},
});
