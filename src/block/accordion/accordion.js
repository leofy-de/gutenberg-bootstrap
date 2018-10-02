/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.
import '../style.scss';
import '../editor.scss';


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
registerBlockType('gbb/accordion', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title      : __('Bootstrap Accordion/Collapsible'), // Block title.
	description: __(
		'Using the card component, you can extend the default collapse behavior to create an accordion.'), // Block title.
	icon       : <svg width={512} height={512} viewBox="0 0 16 16">
		<path
			fill="#444"
			d="M0 4v8h16V4H0zm15 7H1V7h14v4zM0 0h16v3H0V0zM0 13h16v3H0v-3z"
			data-original="#444444"
			className="active-path"
			data-old_color="#5D5C5C"
		/>
	</svg>,
	category   : 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords   : [
		__('Bootstrap'),
		__('Accordion'),
		__('Collapse'),
	],
	attributes : {
		alignment: {
			type: 'string',
		},
		content  : {
			type    : 'array',
			source  : 'query',
			default : [
				{
					title: 'Collapsible Group Item #1',
					body : ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
				},
				{
					title: 'Collapsible Group Item #2',
					body : ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
				},
				{
					title: 'Collapsible Group Item #3',
					body : ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
				},
			],
			selector: '.accordion .card',
			query   : {
				/*active: {
					type   : 'boolean',
					source  : 'text',
					default: false,
				},*/
				title: {
					type    : 'string',
					source  : 'text',
					selector: '.card-header h5',
				},
				body : {
					type    : 'array',
					selector: '.card-body',
					source  : 'children',
				},
			},
		},
		margin   : {
			type   : 'string',
			default: 'my-3'
		},
		theme    : {
			type   : 'string',
			default: 'success'
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
		const {attributes: {alignment, content, margin, theme}, setAttributes, isSelected} = props;

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

		function addCard() {
			const newContent = content;
			newContent.push({
				title: `Collapsible Group Item #${content.length + 1}`,
				body : ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
			});
			setAttributes({content: newContent});
		}

		function removeCard(key) {
			const newContent = content;
			const index      = newContent.indexOf(key);
			if (index > -1) {
				newContent.splice(index, 1);
			}
			setAttributes({content: newContent});
		}

		function onChangeCardBody(key, body) {
			const newContent     = content;
			newContent[key].body = body;
			setAttributes({content: newContent});
		}

		function onChangeCardTitle(key, title) {
			const newContent      = content;
			newContent[key].title = title;
			setAttributes({content: newContent});
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
						</PanelRow>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<AlignmentToolbar
						value={alignment}
						onChange={(newAlignment) => {
							setAttributes({alignment: newAlignment});
						}}
					/>
				</BlockControls>
				<div className={props.className}>
					<div
						className={`accordion ${margin}`}
						style={{textAlign: alignment}}
					>
						{
							content.map((card, key) => {
								return <div className="card">
									<a className="card-header"
									   data-toggle="collapse"
									   data-target={`#collapse${key}`}
									   aria-expanded="false"
									   aria-controls={`collapse${key}`}
									>
										<div className="removeCard float-right">
											<a
												className="btn btn-secondary btn-sm"
												onClick={() => removeCard(key)}
											>
												<span className="dashicons dashicons-minus"></span> {__('Remove card')}
											</a>
										</div>
										<RichText
											tagName="h5"
											className="mb-0"
											multiline="p"
											onChange={(title) => onChangeCardTitle(key, title)}
											value={card.title}
										/>
									</a>
									<div
										id={`collapse${key}`}
										className={`collapse`}
									>
										<RichText
											className="card-body"
											tagName="div"
											onChange={(body) => onChangeCardBody(key, body)}
											value={card.body}
										/>
									</div>
								</div>
							})
						}

						<div className="addCard text-center">
							<a
								className="btn btn-secondary mt-3"
								onClick={addCard}
							>
								<span className="dashicons dashicons-plus"></span> {__('Add card')}
							</a>
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
		const {attributes: {alignment, content, margin, theme}} = props;

		return (
			<div>
				<div
					className={`accordion ${margin}`}
					style={{textAlign: alignment}}
				>
					{
						content.map((card, key) => {
							return <div className="card">
								<a className="card-header"
								   data-toggle="collapse"
								   data-target={`#collapse${key}`}
								>
									<RichText.Content
										className="mb-0"
										tagName="h5"
										value={card.title}
									/>
								</a>
								<div
									id={`collapse${key}`}
									className={`collapse`}
								>
									<RichText.Content
										className="card-body"
										tagName="div"
										value={card.body}
									/>
								</div>
							</div>
						})
					}
				</div>
			</div>
		);
	},
});
