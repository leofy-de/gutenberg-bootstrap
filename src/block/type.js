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
registerBlockType('gbb/type', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title      : __('Bootstrap Type Headings'), // Block title.
	description: __(
		'Provide contextual feedback messages for typical user actions with the handful of available and flexible type messages.'), // Block title.
	icon       : <svg viewBox="0 0 220.068 220.068">
		<path d="M136.922 51.991H89.297v148.332H47.253V51.991H0V19.745h136.922v32.246z" />
		<path d="M220.068 98.245h-38.463v102.078h-38.236V98.245H105.47V68.919h114.598v29.326z" />
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Header'),
		__('Typography'),
	],
	attributes : {
		alignment: {
			type: 'string',
		},
		content  : {
			type    : 'array',
			source  : 'children',
			selector: 'div.type-content'
		},
		type        : {
			type   : 'string',
			default: 'display-1'
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
		const {attributes: {alignment, content, type}, setAttributes, isSelected} = props;

		function setType(event) {
			const selected = event.target.querySelector('option:checked');
			setAttributes({type: selected.value});
			event.preventDefault();
		}

		function onChangeAlignment(newAlignment) {
			setAttributes({alignment: newAlignment});
		}

		function onChangeContent(newContent) {
			setAttributes({content: newContent});
		}

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={__('Select options')}>
						<PanelRow>
							<label>{__('Theme')}</label>
							<form onSubmit={setType}>
								<select value={type} onChange={setType}>
									<option value="display-1">Display 1</option>
									<option value="display-2">Display 2</option>
									<option value="display-3">Display 3</option>
									<option value="display-4">Display 4</option>
									<option value="lead">Lead</option>
								</select>
							</form>
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
						className={`type-content ${type}`}
						tagName="div"
						onChange={onChangeContent}
						value={content}
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
		const {attributes: {alignment, content, type}} = props;

		return (
			<div style={{textAlign: alignment}}>
				<RichText.Content
					className={`type-content ${type}`}
					tagName="div"
					value={content}
				/>
			</div>
		);
	},
});
