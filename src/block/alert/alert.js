/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import '../style.scss';
import '../editor.scss';

// Import JS.
import '../../../node_modules/bootstrap/js/src/alert';

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
	icon       : <svg viewBox="0 0 512 512">
		<path d="M505.403 406.394L295.389 58.102c-8.274-13.721-23.367-22.245-39.39-22.245s-31.116 8.524-39.391 22.246L6.595 406.394c-8.551 14.182-8.804 31.95-.661 46.37 8.145 14.42 23.491 23.378 40.051 23.378h420.028c16.56 0 31.907-8.958 40.052-23.379 8.143-14.421 7.89-32.189-.662-46.369zm-28.364 29.978a12.684 12.684 0 0 1-11.026 6.436H45.985a12.68 12.68 0 0 1-11.025-6.435 12.683 12.683 0 0 1 .181-12.765L245.156 75.316A12.732 12.732 0 0 1 256 69.192c4.41 0 8.565 2.347 10.843 6.124l210.013 348.292a12.677 12.677 0 0 1 .183 12.764z" />
		<path d="M256.154 173.005c-12.68 0-22.576 6.804-22.576 18.866 0 36.802 4.329 89.686 4.329 126.489.001 9.587 8.352 13.607 18.248 13.607 7.422 0 17.937-4.02 17.937-13.607 0-36.802 4.329-89.686 4.329-126.489 0-12.061-10.205-18.866-22.267-18.866zM256.465 353.306c-13.607 0-23.814 10.824-23.814 23.814 0 12.68 10.206 23.814 23.814 23.814 12.68 0 23.505-11.134 23.505-23.814 0-12.99-10.826-23.814-23.505-23.814z" />
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
		margin   : {
			type: 'string',
			default: 'my-3'
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
		const {attributes: {alignment, content, isDismissable, margin, title, theme}, setAttributes, isSelected} = props;
		function setMargin(event) {
			const selected = event.target.querySelector('option:checked');
			setAttributes({margin: selected.value});
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
				</form>
			);
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
					<div className={`alert alert-${theme} alert-dismissible fade show ${margin}`} role="alert"
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
		const {attributes: {alignment, content, margin, title, theme}} = props;

		return (
			<div>
				<div className={`alert alert-${theme} alert-dismissible fade show ${margin}`}
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
