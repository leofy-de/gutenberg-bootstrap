/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 1 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),
/* 3 */
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.3): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Util = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */

  const TRANSITION_END = 'transitionend'
  const MAX_UID = 1000000
  const MILLISECONDS_MULTIPLIER = 1000

  // Shoutout AngusCroll (https://goo.gl/pxwQGp)
  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase()
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: TRANSITION_END,
      delegateType: TRANSITION_END,
      handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments) // eslint-disable-line prefer-rest-params
        }
        return undefined // eslint-disable-line no-undefined
      }
    }
  }

  function transitionEndEmulator(duration) {
    let called = false

    $(this).one(Util.TRANSITION_END, () => {
      called = true
    })

    setTimeout(() => {
      if (!called) {
        Util.triggerTransitionEnd(this)
      }
    }, duration)

    return this
  }

  function setTransitionEndSupport() {
    $.fn.emulateTransitionEnd = transitionEndEmulator
    $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent()
  }

  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */

  const Util = {

    TRANSITION_END: 'bsTransitionEnd',

    getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID) // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix))
      return prefix
    },

    getSelectorFromElement(element) {
      let selector = element.getAttribute('data-target')
      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || ''
      }

      try {
        return document.querySelector(selector) ? selector : null
      } catch (err) {
        return null
      }
    },

    getTransitionDurationFromElement(element) {
      if (!element) {
        return 0
      }

      // Get transition-duration of the element
      let transitionDuration = $(element).css('transition-duration')
      const floatTransitionDuration = parseFloat(transitionDuration)

      // Return 0 if element or transition duration is not found
      if (!floatTransitionDuration) {
        return 0
      }

      // If multiple durations are defined, take the first
      transitionDuration = transitionDuration.split(',')[0]

      return parseFloat(transitionDuration) * MILLISECONDS_MULTIPLIER
    },

    reflow(element) {
      return element.offsetHeight
    },

    triggerTransitionEnd(element) {
      $(element).trigger(TRANSITION_END)
    },

    // TODO: Remove in v5
    supportsTransitionEnd() {
      return Boolean(TRANSITION_END)
    },

    isElement(obj) {
      return (obj[0] || obj).nodeType
    },

    typeCheckConfig(componentName, config, configTypes) {
      for (const property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          const expectedTypes = configTypes[property]
          const value         = config[property]
          const valueType     = value && Util.isElement(value)
            ? 'element' : toType(value)

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(
              `${componentName.toUpperCase()}: ` +
              `Option "${property}" provided type "${valueType}" ` +
              `but expected type "${expectedTypes}".`)
          }
        }
      }
    }
  }

  setTransitionEndSupport()

  return Util
})(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a)

/* harmony default export */ __webpack_exports__["a"] = (Util);


/***/ }),
/* 4 */
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(/*! ./util */ 3);



/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.3): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Alert = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'alert'
  const VERSION             = '4.1.3'
  const DATA_KEY            = 'bs.alert'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const Selector = {
    DISMISS : '[data-dismiss="alert"]'
  }

  const Event = {
    CLOSE          : `close${EVENT_KEY}`,
    CLOSED         : `closed${EVENT_KEY}`,
    CLICK_DATA_API : `click${EVENT_KEY}${DATA_API_KEY}`
  }

  const ClassName = {
    ALERT : 'alert',
    FADE  : 'fade',
    SHOW  : 'show'
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Alert {
    constructor(element) {
      this._element = element
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    close(element) {
      let rootElement = this._element
      if (element) {
        rootElement = this._getRootElement(element)
      }

      const customEvent = this._triggerCloseEvent(rootElement)

      if (customEvent.isDefaultPrevented()) {
        return
      }

      this._removeElement(rootElement)
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // Private

    _getRootElement(element) {
      const selector = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getSelectorFromElement(element)
      let parent     = false

      if (selector) {
        parent = document.querySelector(selector)
      }

      if (!parent) {
        parent = $(element).closest(`.${ClassName.ALERT}`)[0]
      }

      return parent
    }

    _triggerCloseEvent(element) {
      const closeEvent = $.Event(Event.CLOSE)

      $(element).trigger(closeEvent)
      return closeEvent
    }

    _removeElement(element) {
      $(element).removeClass(ClassName.SHOW)

      if (!$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element)
        return
      }

      const transitionDuration = __WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].getTransitionDurationFromElement(element)

      $(element)
        .one(__WEBPACK_IMPORTED_MODULE_1__util__["a" /* default */].TRANSITION_END, (event) => this._destroyElement(element, event))
        .emulateTransitionEnd(transitionDuration)
    }

    _destroyElement(element) {
      $(element)
        .detach()
        .trigger(Event.CLOSED)
        .remove()
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        const $element = $(this)
        let data       = $element.data(DATA_KEY)

        if (!data) {
          data = new Alert(this)
          $element.data(DATA_KEY, data)
        }

        if (config === 'close') {
          data[config](this)
        }
      })
    }

    static _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault()
        }

        alertInstance.close(this)
      }
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document).on(
    Event.CLICK_DATA_API,
    Selector.DISMISS,
    Alert._handleDismiss(new Alert())
  )

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME]             = Alert._jQueryInterface
  $.fn[NAME].Constructor = Alert
  $.fn[NAME].noConflict  = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Alert._jQueryInterface
  }

  return Alert
})(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a)

/* unused harmony default export */ var _unused_webpack_default_export = (Alert);


/***/ }),
/* 5 */,
/* 6 */
/*!******************************!*\
  !*** ./src/blocks.editor.js ***!
  \******************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_accordion_accordion__ = __webpack_require__(/*! ./block/accordion/accordion */ 7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_alert_alert__ = __webpack_require__(/*! ./block/alert/alert */ 8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__block_blockquote_blockquote__ = __webpack_require__(/*! ./block/blockquote/blockquote */ 9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__block_button_button__ = __webpack_require__(/*! ./block/button/button */ 10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__block_container_container__ = __webpack_require__(/*! ./block/container/container */ 12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__block_media_media__ = __webpack_require__(/*! ./block/media/media */ 13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__block_type_type__ = __webpack_require__(/*! ./block/type/type */ 15);
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

// Import bootstrap dependencies
//import '../node_modules/bootstrap/js/src/util';







//import './block/modal';


/***/ }),
/* 7 */
/*!******************************************!*\
  !*** ./src/block/accordion/accordion.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
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
	title: __('Bootstrap Accordion/Collapsible'), // Block title.
	description: __('Using the card component, you can extend the default collapse behavior to create an accordion.'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ width: 512, height: 512, viewBox: '0 0 16 16' },
		wp.element.createElement('path', {
			fill: '#444',
			d: 'M0 4v8h16V4H0zm15 7H1V7h14v4zM0 0h16v3H0V0zM0 13h16v3H0v-3z',
			'data-original': '#444444',
			className: 'active-path',
			'data-old_color': '#5D5C5C'
		})
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Accordion'), __('Collapse')],
	attributes: {
		alignment: {
			type: 'string'
		},
		content: {
			type: 'array',
			source: 'query',
			default: [{
				title: 'Collapsible Group Item #1',
				body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
			}, {
				title: 'Collapsible Group Item #2',
				body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
			}, {
				title: 'Collapsible Group Item #3',
				body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
			}],
			selector: '.accordion .card',
			query: {
				/*active: {
    	type   : 'boolean',
    	source  : 'text',
    	default: false,
    },*/
				title: {
					type: 'string',
					source: 'text',
					selector: '.card-header h5'
				},
				body: {
					type: 'array',
					selector: '.card-body',
					source: 'children'
				}
			}
		},
		margin: {
			type: 'string',
			default: 'my-3'
		},
		theme: {
			type: 'string',
			default: 'success'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		// Theme selection
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    content = _props$attributes.content,
		    margin = _props$attributes.margin,
		    theme = _props$attributes.theme,
		    setAttributes = props.setAttributes,
		    isSelected = props.isSelected;


		function setMargin(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ margin: selected.value });
			event.preventDefault();
		}

		function setTheme(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ theme: selected.value });
			event.preventDefault();
		}

		function addCard() {
			var newContent = content;
			newContent.push({
				title: 'Collapsible Group Item #' + (content.length + 1),
				body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
			});
			setAttributes({ content: newContent });
		}

		function removeCard(key) {
			var newContent = content;
			var index = newContent.indexOf(key);
			if (index > -1) {
				newContent.splice(index, 1);
			}
			setAttributes({ content: newContent });
		}

		function onChangeCardBody(key, body) {
			var newContent = content;
			newContent[key].body = body;
			setAttributes({ content: newContent });
		}

		function onChangeCardTitle(key, title) {
			var newContent = content;
			newContent[key].title = title;
			setAttributes({ content: newContent });
		}

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Select options') },
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Margin')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setMargin },
							wp.element.createElement(
								'select',
								{ value: margin, onChange: setMargin },
								wp.element.createElement(
									'option',
									{ value: 'my-0' },
									'No margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-1' },
									'my-1 - Tiny margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-2' },
									'my-2 - Small margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-3' },
									'my-3 - Middle margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-4' },
									'my-4 - Large margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-5' },
									'my-5 - Hugh margin'
								)
							)
						)
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Theme')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setTheme, style: { textAlign: alignment } },
							wp.element.createElement(
								'select',
								{ value: theme, onChange: setTheme },
								wp.element.createElement(
									'option',
									{ value: 'primary' },
									'Primary'
								),
								wp.element.createElement(
									'option',
									{ value: 'secondary' },
									'Secondary'
								),
								wp.element.createElement(
									'option',
									{ value: 'success' },
									'Success'
								),
								wp.element.createElement(
									'option',
									{ value: 'danger' },
									'Danger'
								),
								wp.element.createElement(
									'option',
									{ value: 'warning' },
									'Warning'
								),
								wp.element.createElement(
									'option',
									{ value: 'info' },
									'Info'
								),
								wp.element.createElement(
									'option',
									{ value: 'light' },
									'Light'
								),
								wp.element.createElement(
									'option',
									{ value: 'dark' },
									'Dark'
								)
							)
						)
					)
				)
			),
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: alignment,
					onChange: function onChange(newAlignment) {
						setAttributes({ alignment: newAlignment });
					}
				})
			),
			wp.element.createElement(
				'div',
				{ className: props.className },
				wp.element.createElement(
					'div',
					{
						className: 'accordion ' + margin,
						style: { textAlign: alignment }
					},
					content.map(function (card, key) {
						return wp.element.createElement(
							'div',
							{ className: 'card' },
							wp.element.createElement(
								'a',
								{ className: 'card-header',
									'data-toggle': 'collapse',
									'data-target': '#collapse' + key,
									'aria-expanded': 'false',
									'aria-controls': 'collapse' + key
								},
								wp.element.createElement(
									'div',
									{ className: 'removeCard float-right' },
									wp.element.createElement(
										'a',
										{
											className: 'btn btn-secondary btn-sm',
											onClick: function onClick() {
												return removeCard(key);
											}
										},
										wp.element.createElement('span', { className: 'dashicons dashicons-minus' }),
										' ',
										__('Remove card')
									)
								),
								wp.element.createElement(RichText, {
									tagName: 'h5',
									className: 'mb-0',
									multiline: 'p',
									onChange: function onChange(title) {
										return onChangeCardTitle(key, title);
									},
									value: card.title
								})
							),
							wp.element.createElement(
								'div',
								{
									id: 'collapse' + key,
									className: 'collapse'
								},
								wp.element.createElement(RichText, {
									className: 'card-body',
									tagName: 'div',
									onChange: function onChange(body) {
										return onChangeCardBody(key, body);
									},
									value: card.body
								})
							)
						);
					}),
					wp.element.createElement(
						'div',
						{ className: 'addCard text-center' },
						wp.element.createElement(
							'a',
							{
								className: 'btn btn-secondary mt-3',
								onClick: addCard
							},
							wp.element.createElement('span', { className: 'dashicons dashicons-plus' }),
							' ',
							__('Add card')
						)
					)
				)
			)
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
	save: function save(props) {

		// Initialize theme
		var _props$attributes2 = props.attributes,
		    alignment = _props$attributes2.alignment,
		    content = _props$attributes2.content,
		    margin = _props$attributes2.margin,
		    theme = _props$attributes2.theme;


		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				'div',
				{
					className: 'accordion ' + margin,
					style: { textAlign: alignment }
				},
				content.map(function (card, key) {
					return wp.element.createElement(
						'div',
						{ className: 'card' },
						wp.element.createElement(
							'a',
							{ className: 'card-header',
								'data-toggle': 'collapse',
								'data-target': '#collapse' + key
							},
							wp.element.createElement(RichText.Content, {
								className: 'mb-0',
								tagName: 'h5',
								value: card.title
							})
						),
						wp.element.createElement(
							'div',
							{
								id: 'collapse' + key,
								className: 'collapse'
							},
							wp.element.createElement(RichText.Content, {
								className: 'card-body',
								tagName: 'div',
								value: card.body
							})
						)
					);
				})
			)
		);
	}
});

/***/ }),
/* 8 */
/*!**********************************!*\
  !*** ./src/block/alert/alert.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_bootstrap_js_src_alert__ = __webpack_require__(/*! ../../../node_modules/bootstrap/js/src/alert */ 4);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



// Import JS.


var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
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
	title: __('Bootstrap Alert'), // Block title.
	description: __('Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 512 512' },
		wp.element.createElement('path', { d: 'M505.403 406.394L295.389 58.102c-8.274-13.721-23.367-22.245-39.39-22.245s-31.116 8.524-39.391 22.246L6.595 406.394c-8.551 14.182-8.804 31.95-.661 46.37 8.145 14.42 23.491 23.378 40.051 23.378h420.028c16.56 0 31.907-8.958 40.052-23.379 8.143-14.421 7.89-32.189-.662-46.369zm-28.364 29.978a12.684 12.684 0 0 1-11.026 6.436H45.985a12.68 12.68 0 0 1-11.025-6.435 12.683 12.683 0 0 1 .181-12.765L245.156 75.316A12.732 12.732 0 0 1 256 69.192c4.41 0 8.565 2.347 10.843 6.124l210.013 348.292a12.677 12.677 0 0 1 .183 12.764z' }),
		wp.element.createElement('path', { d: 'M256.154 173.005c-12.68 0-22.576 6.804-22.576 18.866 0 36.802 4.329 89.686 4.329 126.489.001 9.587 8.352 13.607 18.248 13.607 7.422 0 17.937-4.02 17.937-13.607 0-36.802 4.329-89.686 4.329-126.489 0-12.061-10.205-18.866-22.267-18.866zM256.465 353.306c-13.607 0-23.814 10.824-23.814 23.814 0 12.68 10.206 23.814 23.814 23.814 12.68 0 23.505-11.134 23.505-23.814 0-12.99-10.826-23.814-23.505-23.814z' })
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Alert'), __('Notification')],
	attributes: {
		theme: {
			type: 'string',
			default: 'success'
		},
		textColor: {
			source: 'string'
		},
		title: {
			source: 'text',
			selector: 'h4.alert-heading'
		},
		margin: {
			type: 'string',
			default: 'my-3'
		},
		content: {
			type: 'array',
			source: 'children',
			selector: 'div.content'
		},
		isDismissable: {
			type: 'boolean'
		},
		alignment: {
			type: 'string'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    content = _props$attributes.content,
		    isDismissable = _props$attributes.isDismissable,
		    margin = _props$attributes.margin,
		    title = _props$attributes.title,
		    theme = _props$attributes.theme,
		    setAttributes = props.setAttributes,
		    isSelected = props.isSelected;

		function setMargin(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ margin: selected.value });
			event.preventDefault();
		}

		function setTheme(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ theme: selected.value });
			event.preventDefault();
		}

		function onChangeAlignment(newAlignment) {
			setAttributes({ alignment: newAlignment });
		}

		function onChangeContent(newContent) {
			setAttributes({ content: newContent });
		}

		function onTitleContent(newTitle) {
			setAttributes({ title: newTitle });
		}

		function showThemeForm() {
			return wp.element.createElement(
				'form',
				{ onSubmit: setTheme, style: { textAlign: alignment } },
				wp.element.createElement(
					'select',
					{ value: theme, onChange: setTheme },
					wp.element.createElement(
						'option',
						{ value: 'primary' },
						'Primary'
					),
					wp.element.createElement(
						'option',
						{ value: 'secondary' },
						'Secondary'
					),
					wp.element.createElement(
						'option',
						{ value: 'success' },
						'Success'
					),
					wp.element.createElement(
						'option',
						{ value: 'danger' },
						'Danger'
					),
					wp.element.createElement(
						'option',
						{ value: 'warning' },
						'Warning'
					),
					wp.element.createElement(
						'option',
						{ value: 'info' },
						'Info'
					),
					wp.element.createElement(
						'option',
						{ value: 'light' },
						'Light'
					),
					wp.element.createElement(
						'option',
						{ value: 'dark' },
						'Dark'
					)
				)
			);
		}

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Select options') },
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Margin')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setMargin },
							wp.element.createElement(
								'select',
								{ value: margin, onChange: setMargin },
								wp.element.createElement(
									'option',
									{ value: 'my-0' },
									'No margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-1' },
									'my-1 - Tiny margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-2' },
									'my-2 - Small margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-3' },
									'my-3 - Middle margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-4' },
									'my-4 - Large margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-5' },
									'my-5 - Hugh margin'
								)
							)
						)
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Theme')
						),
						showThemeForm()
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(CheckboxControl, {
							label: __('Is dismissable?'),
							help: __('Can the user hide the alert by clicking a X button on the top right.'),
							checked: isDismissable,
							onChange: function onChange(isDismissable) {
								setAttributes({ isDismissable: isDismissable });
							}
						})
					)
				)
			),
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: alignment,
					onChange: onChangeAlignment
				})
			),
			wp.element.createElement(
				'div',
				{ className: props.className },
				wp.element.createElement(
					'div',
					{ className: 'alert alert-' + theme + ' alert-dismissible fade show ' + margin, role: 'alert',
						style: { textAlign: alignment } },
					wp.element.createElement(RichText, {
						className: 'alert-heading',
						tagName: 'h4',
						onChange: onTitleContent,
						value: title
					}),
					wp.element.createElement(RichText, {
						className: 'content',
						tagName: 'div',
						onChange: onChangeContent,
						value: content
					}),
					isDismissable && wp.element.createElement(
						'button',
						{ type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
						wp.element.createElement(
							'span',
							{ 'aria-hidden': 'true' },
							'\xD7'
						)
					)
				)
			)
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
	save: function save(props) {

		// Initialize theme
		var _props$attributes2 = props.attributes,
		    alignment = _props$attributes2.alignment,
		    content = _props$attributes2.content,
		    margin = _props$attributes2.margin,
		    title = _props$attributes2.title,
		    theme = _props$attributes2.theme;


		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				'div',
				{ className: 'alert alert-' + theme + ' alert-dismissible fade show ' + margin,
					role: 'alert',
					style: { textAlign: alignment }
				},
				wp.element.createElement(RichText.Content, {
					className: 'alert-heading',
					tagName: 'h4',
					value: title
				}),
				wp.element.createElement(RichText.Content, {
					className: 'content',
					tagName: 'div',
					value: content
				}),
				wp.element.createElement(
					'button',
					{ type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close' },
					wp.element.createElement(
						'span',
						{ 'aria-hidden': 'true' },
						'\xD7'
					)
				)
			)
		);
	}
});

/***/ }),
/* 9 */
/*!********************************************!*\
  !*** ./src/block/blockquote/blockquote.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    RichText = _wp$editor.RichText;
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

registerBlockType('gbb/blockquote', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Bootstrap Blockquote'), // Block title.
	description: __('For quoting blocks of content from another source within your document.'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 512 512' },
		wp.element.createElement('path', { d: 'M228 119c5.523 0 10-4.478 10-10V77c0-27.57-22.43-50-50-50H50C22.43 27 0 49.43 0 77v119.988c0 27.57 22.43 50 50 50h64.692c-2.276 74.706-30.621 113.542-86.459 118.622a10 10 0 0 0-9.094 9.959V475a10 10 0 0 0 10.561 9.984c68.908-3.876 121.511-27.591 156.349-70.487C220.521 372.051 238 310.029 238 230.152v-35.819c0-5.522-4.477-10-10-10s-10 4.478-10 10v35.819c0 146.644-58.535 223.331-178.86 234.097v-79.836c30.411-4.73 53.934-18.886 70.007-42.161 17.049-24.691 25.694-60.106 25.694-105.264 0-5.522-4.477-10-10-10H50c-16.542 0-30-13.458-30-30V77c0-16.542 13.458-30 30-30h138c16.542 0 30 13.458 30 30v32c0 5.522 4.477 10 10 10zM462 27H324c-27.57 0-50 22.43-50 50v119.988c0 27.57 22.43 50 50 50h64.692c-2.276 74.706-30.621 113.542-86.459 118.622a10 10 0 0 0-9.094 9.959V475a10 10 0 0 0 10.561 9.984c68.908-3.876 121.511-27.591 156.349-70.487C494.521 372.052 512 310.029 512 230.152V77c0-27.57-22.43-50-50-50zm30 203.152c0 146.644-58.535 223.331-178.861 234.097v-79.836c30.412-4.73 53.935-18.886 70.007-42.161 17.049-24.69 25.694-60.105 25.694-105.264 0-5.522-4.477-10-10-10H324c-16.542 0-30-13.458-30-30V77c0-16.542 13.458-30 30-30h120v74.034c0 5.522 4.477 10 10 10s10-4.478 10-10v-73.96c15.612 1.034 28 14.057 28 29.926v153.152z' }),
		wp.element.createElement('path', { d: 'M454 145.751c-5.523 0-10 4.527-10 10.049 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-.099c0-5.522-4.477-9.95-10-9.95zM228 141.666c-5.523 0-10 4.478-10 10v.209c0 5.522 4.477 10 10 10s10-4.478 10-10v-.209c0-5.522-4.477-10-10-10z' })
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Blockquote'), __('Quote')],
	attributes: {
		textColor: {
			source: 'string'
		},
		margin: {
			type: 'string',
			default: 'my-3'
		},
		quote: {
			source: 'text',
			selector: '.blockquote'
		},
		source: {
			source: 'text',
			selector: 'footer.blockquote-footer',
			default: 'Someone famous in <cite>Source Title</cite>'
		},
		alignment: {
			type: 'string'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    margin = _props$attributes.margin,
		    quote = _props$attributes.quote,
		    source = _props$attributes.source,
		    setAttributes = props.setAttributes;

		function setMargin(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ margin: selected.value });
			event.preventDefault();
		}

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Select options') },
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Margin')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setMargin },
							wp.element.createElement(
								'select',
								{ value: margin, onChange: setMargin },
								wp.element.createElement(
									'option',
									{ value: 'my-0' },
									'No margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-1' },
									'my-1 - Tiny margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-2' },
									'my-2 - Small margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-3' },
									'my-3 - Middle margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-4' },
									'my-4 - Large margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-5' },
									'my-5 - Hugh margin'
								)
							)
						)
					)
				)
			),
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: alignment,
					onChange: function onChange(alignment) {
						setAttributes({ alignment: alignment });
					}
				})
			),
			wp.element.createElement(
				'div',
				{ className: props.className },
				wp.element.createElement(
					'blockquote',
					{ className: 'blockquote ' + margin, style: { textAlign: alignment } },
					wp.element.createElement(RichText, {
						className: 'mb-0 blockquote',
						tagName: 'p',
						onChange: function onChange(quote) {
							setAttributes({ quote: quote });
						},
						value: quote
					}),
					wp.element.createElement(RichText, {
						className: 'blockquote-footer',
						format: 'string',
						tagName: 'footer',
						onChange: function onChange(source) {
							setAttributes({ source: source });
						},
						value: source
					})
				)
			)
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
	save: function save(props) {

		// Initialize theme
		var _props$attributes2 = props.attributes,
		    alignment = _props$attributes2.alignment,
		    margin = _props$attributes2.margin,
		    quote = _props$attributes2.quote,
		    source = _props$attributes2.source;


		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				'div',
				{ className: 'blockquote ' + margin, style: { textAlign: alignment } },
				wp.element.createElement(RichText.Content, {
					className: 'mb-0 blockquote',
					tagName: 'p',
					value: quote
				}),
				wp.element.createElement(RichText.Content, {
					className: 'blockquote-footer',
					format: 'string',
					tagName: 'footer',
					value: source
				})
			)
		);
	}
});

/***/ }),
/* 10 */
/*!************************************!*\
  !*** ./src/block/button/button.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_bootstrap_js_src_button__ = __webpack_require__(/*! ../../../node_modules/bootstrap/js/src/button */ 11);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



// Import JS.


var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText,
    URLInput = _wp$editor.URLInput;
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
	title: __('Bootstrap Button'), // Block title.
	description: __('Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 512 512' },
		wp.element.createElement('path', { d: 'M466.959 2.467H39.783C17.847 2.467 0 20.313 0 42.249V282.76c0 21.936 17.847 39.782 39.783 39.782h98.397c5.545 0 10.039-4.495 10.039-10.039s-4.495-10.039-10.04-10.039H39.783c-10.865 0-19.704-8.839-19.704-19.704V42.249c0-10.865 8.839-19.704 19.704-19.704h427.176c10.865 0 19.704 8.839 19.704 19.704V282.76c0 10.865-8.839 19.704-19.704 19.704h-30.148c-5.545 0-10.039 4.495-10.039 10.039s4.495 10.039 10.039 10.039h30.148c21.936 0 39.782-17.846 39.782-39.782V42.249c0-21.936-17.846-39.782-39.782-39.782z' }),
		wp.element.createElement('path', { d: 'M511.99 371.309a19.331 19.331 0 0 0-12.644-17.566v-.001l-166.048-61.603c-11.245-4.17-23.498-1.494-31.978 6.984-8.481 8.478-11.16 20.731-6.992 31.975l61.447 165.775c2.767 7.464 9.696 12.43 17.653 12.652.186.006.37.008.554.008 7.735 0 14.672-4.527 17.776-11.655l16.997-39.021 36.85 36.861c10.488 10.491 27.557 10.495 38.049.006l14.215-14.212c5.082-5.081 7.882-11.837 7.883-19.024.001-7.186-2.797-13.943-7.877-19.025L461.49 407.07l39.016-17.417a19.331 19.331 0 0 0 11.484-18.344zm-72.007 23.372a10.04 10.04 0 0 0-3.008 16.266l46.7 46.713a6.833 6.833 0 0 1-.001 9.653l-14.215 14.212a6.78 6.78 0 0 1-4.826 1.998h-.001a6.778 6.778 0 0 1-4.827-2l-47.269-47.282a10.038 10.038 0 0 0-16.304 3.089l-22.212 50.994-60.865-164.203c-2.117-5.712 1.272-9.709 2.361-10.798.839-.838 3.403-3.041 7.148-3.041 1.117 0 2.34.196 3.651.683l164.497 61.027-50.829 22.689zm52.386-22.11a.016.016 0 0 0-.007-.004l3.492-9.412-3.485 9.416zM285.926 269.48l-28.368-28.37c-3.921-3.919-10.277-3.919-14.198 0-3.921 3.921-3.921 10.277-.001 14.198l28.369 28.37a10.009 10.009 0 0 0 7.099 2.94c2.569 0 5.139-.98 7.099-2.94 3.921-3.921 3.921-10.277 0-14.198zM258.097 302.551h-40.12c-5.545 0-10.039 4.495-10.039 10.039s4.495 10.039 10.039 10.039h40.12c5.544 0 10.039-4.495 10.039-10.039s-4.495-10.039-10.039-10.039zM315.704 204.824c-5.544 0-10.039 4.495-10.039 10.039v40.12c0 5.544 4.495 10.039 10.039 10.039s10.039-4.495 10.039-10.039v-40.12c0-5.544-4.495-10.039-10.039-10.039zM399.987 223.474c-3.921-3.919-10.277-3.92-14.198 0l-28.369 28.369c-3.921 3.921-3.921 10.277-.001 14.198a10.011 10.011 0 0 0 7.1 2.94c2.569 0 5.139-.98 7.099-2.94l28.369-28.369c3.921-3.921 3.921-10.277 0-14.198zM274.284 349.176c-3.921-3.919-10.278-3.919-14.198 0l-28.369 28.37c-3.921 3.921-3.92 10.277 0 14.198a10.007 10.007 0 0 0 7.099 2.94c2.57 0 5.139-.98 7.099-2.94l28.369-28.37c3.921-3.921 3.92-10.277 0-14.198z' }),
		wp.element.createElement('circle', { cx: 178.01, cy: 312.5, r: 10.07 })
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Button')],
	attributes: {
		alignment: {
			type: 'string'
		},
		caption: {
			type: 'array',
			source: 'children',
			selector: 'div.content'
		},
		isBlockWidth: {
			type: 'boolean'
		},
		isOutline: {
			type: 'boolean'
		},
		size: {
			type: 'string',
			default: ''
		},
		theme: {
			type: 'string',
			default: 'primary'
		},
		url: {
			type: 'string',
			source: 'attribute',
			selector: 'a',
			attribute: 'href'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		// Theme selection
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    caption = _props$attributes.caption,
		    isBlockWidth = _props$attributes.isBlockWidth,
		    isOutline = _props$attributes.isOutline,
		    size = _props$attributes.size,
		    theme = _props$attributes.theme,
		    url = _props$attributes.url,
		    setAttributes = props.setAttributes,
		    isSelected = props.isSelected;


		function setSize(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ size: selected.value });
			event.preventDefault();
		}

		function setTheme(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ theme: selected.value });
			event.preventDefault();
		}

		function onChangeAlignment(newAlignment) {
			setAttributes({ alignment: newAlignment });
		}

		function onChangeCaption(newCaption) {
			setAttributes({ caption: newCaption });
		}

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Select options') },
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Theme')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setTheme },
							wp.element.createElement(
								'select',
								{ value: theme, onChange: setTheme },
								wp.element.createElement(
									'option',
									{ value: 'primary' },
									'Primary'
								),
								wp.element.createElement(
									'option',
									{ value: 'secondary' },
									'Secondary'
								),
								wp.element.createElement(
									'option',
									{ value: 'success' },
									'Success'
								),
								wp.element.createElement(
									'option',
									{ value: 'danger' },
									'Danger'
								),
								wp.element.createElement(
									'option',
									{ value: 'warning' },
									'Warning'
								),
								wp.element.createElement(
									'option',
									{ value: 'info' },
									'Info'
								),
								wp.element.createElement(
									'option',
									{ value: 'light' },
									'Light'
								),
								wp.element.createElement(
									'option',
									{ value: 'dark' },
									'Dark'
								)
							)
						)
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(CheckboxControl, {
							label: __('Outline Button?'),
							checked: isOutline,
							onChange: function onChange(isOutline) {
								setAttributes({ isOutline: isOutline });
							}
						})
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Size')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setSize },
							wp.element.createElement(
								'select',
								{ value: size, onChange: setSize },
								wp.element.createElement(
									'option',
									{ value: '' },
									'Default'
								),
								wp.element.createElement(
									'option',
									{ value: 'sm' },
									'Small'
								),
								wp.element.createElement(
									'option',
									{ value: 'lg' },
									'Large'
								)
							)
						)
					),
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(CheckboxControl, {
							label: __('Block Button / Full width?'),
							checked: isBlockWidth,
							onChange: function onChange(isBlockWidth) {
								setAttributes({ isBlockWidth: isBlockWidth });
							}
						})
					)
				)
			),
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: alignment,
					onChange: onChangeAlignment
				})
			),
			wp.element.createElement(
				'div',
				{ className: props.className, style: { textAlign: alignment } },
				wp.element.createElement(RichText, {
					autoFocus: true,
					className: 'btn btn-' + (isOutline ? 'outline-' : '') + theme + ' ' + (size !== '' ? 'btn-' + size : '') + ' ' + (isBlockWidth ? 'btn-block' : ''),
					role: 'button',
					href: '#',
					tagName: 'a',
					onChange: onChangeCaption,
					value: caption
				}),
				wp.element.createElement(URLInput, {
					autoFocus: false,
					className: 'button-url',
					value: url,
					onChange: function onChange(value) {
						return setAttributes({ url: value });
					}
				})
			)
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
	save: function save(props) {

		// Initialize theme
		var _props$attributes2 = props.attributes,
		    alignment = _props$attributes2.alignment,
		    caption = _props$attributes2.caption,
		    isBlockWidth = _props$attributes2.isBlockWidth,
		    isOutline = _props$attributes2.isOutline,
		    size = _props$attributes2.size,
		    theme = _props$attributes2.theme,
		    url = _props$attributes2.url;


		return wp.element.createElement(
			'div',
			{ style: { textAlign: alignment } },
			wp.element.createElement(RichText.Content, {
				className: 'btn btn-' + (isOutline ? 'outline-' : '') + theme + ' ' + (size !== '' ? 'btn-' + size : '') + ' ' + (isBlockWidth ? 'btn-block' : ''),
				href: url,
				role: 'button',
				tagName: 'a',
				value: caption
			})
		);
	}
});

/***/ }),
/* 11 */
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(/*! jquery */ 2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.1.3): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

const Button = (($) => {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME                = 'button'
  const VERSION             = '4.1.3'
  const DATA_KEY            = 'bs.button'
  const EVENT_KEY           = `.${DATA_KEY}`
  const DATA_API_KEY        = '.data-api'
  const JQUERY_NO_CONFLICT  = $.fn[NAME]

  const ClassName = {
    ACTIVE : 'active',
    BUTTON : 'btn',
    FOCUS  : 'focus'
  }

  const Selector = {
    DATA_TOGGLE_CARROT : '[data-toggle^="button"]',
    DATA_TOGGLE        : '[data-toggle="buttons"]',
    INPUT              : 'input',
    ACTIVE             : '.active',
    BUTTON             : '.btn'
  }

  const Event = {
    CLICK_DATA_API      : `click${EVENT_KEY}${DATA_API_KEY}`,
    FOCUS_BLUR_DATA_API : `focus${EVENT_KEY}${DATA_API_KEY} ` +
                            `blur${EVENT_KEY}${DATA_API_KEY}`
  }

  /**
   * ------------------------------------------------------------------------
   * Class Definition
   * ------------------------------------------------------------------------
   */

  class Button {
    constructor(element) {
      this._element = element
    }

    // Getters

    static get VERSION() {
      return VERSION
    }

    // Public

    toggle() {
      let triggerChangeEvent = true
      let addAriaPressed = true
      const rootElement = $(this._element).closest(
        Selector.DATA_TOGGLE
      )[0]

      if (rootElement) {
        const input = this._element.querySelector(Selector.INPUT)

        if (input) {
          if (input.type === 'radio') {
            if (input.checked &&
              this._element.classList.contains(ClassName.ACTIVE)) {
              triggerChangeEvent = false
            } else {
              const activeElement = rootElement.querySelector(Selector.ACTIVE)

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE)
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') ||
              rootElement.hasAttribute('disabled') ||
              input.classList.contains('disabled') ||
              rootElement.classList.contains('disabled')) {
              return
            }
            input.checked = !this._element.classList.contains(ClassName.ACTIVE)
            $(input).trigger('change')
          }

          input.focus()
          addAriaPressed = false
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed',
          !this._element.classList.contains(ClassName.ACTIVE))
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE)
      }
    }

    dispose() {
      $.removeData(this._element, DATA_KEY)
      this._element = null
    }

    // Static

    static _jQueryInterface(config) {
      return this.each(function () {
        let data = $(this).data(DATA_KEY)

        if (!data) {
          data = new Button(this)
          $(this).data(DATA_KEY, data)
        }

        if (config === 'toggle') {
          data[config]()
        }
      })
    }
  }

  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */

  $(document)
    .on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      event.preventDefault()

      let button = event.target

      if (!$(button).hasClass(ClassName.BUTTON)) {
        button = $(button).closest(Selector.BUTTON)
      }

      Button._jQueryInterface.call($(button), 'toggle')
    })
    .on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, (event) => {
      const button = $(event.target).closest(Selector.BUTTON)[0]
      $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type))
    })

  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface
  $.fn[NAME].Constructor = Button
  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Button._jQueryInterface
  }

  return Button
})(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a)

/* unused harmony default export */ var _unused_webpack_default_export = (Button);


/***/ }),
/* 12 */
/*!******************************************!*\
  !*** ./src/block/container/container.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    InnerBlocks = _wp$editor.InnerBlocks,
    RichText = _wp$editor.RichText;
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

registerBlockType('gbb/container', {
	// Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.
	title: __('Bootstrap Container'), // Block title.
	description: __('Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 512 512' },
		wp.element.createElement('path', { d: 'M16.797 51.094C-.044 52.193 0 67.02 0 67.02l1.244 386.934C1.26 458.667 3.821 460 8.533 460h494.933a8.533 8.533 0 0 0 8.533-8.533V58.933c-.071-.893 1.598-6.042-13.602-7.431 0 0-405.152-1.724-481.6-.408zm68.536 391.839H17.067V67.467h68.267v375.466zm324.267 0H102.4V67.467h307.2zm85.333 0h-68.267V67.467h68.267z' })
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Container'), __('Grid')],
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'div.content'
		},
		alignment: {
			type: 'string'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    content = _props$attributes.content,
		    setAttributes = props.setAttributes;


		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				'div',
				{ className: props.className + ' my-5', style: { textAlign: alignment } },
				wp.element.createElement(InnerBlocks, null)
			)
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
	save: function save(props) {

		// Initialize theme
		var alignment = props.attributes.alignment;


		return wp.element.createElement(
			'div',
			{ style: { textAlign: alignment } },
			wp.element.createElement(
				'div',
				{ className: 'container' },
				wp.element.createElement(InnerBlocks.Content, null)
			)
		);
	}
});

/***/ }),
/* 13 */
/*!**********************************!*\
  !*** ./src/block/media/media.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__icons__ = __webpack_require__(/*! ./icons */ 14);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.




var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    MediaUpload = _wp$editor.MediaUpload,
    RichText = _wp$editor.RichText;
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
	title: __('Bootstrap Media Object'), // Block title.
	description: __('media object to construct highly repetitive components like blog comments, tweets, and the like.'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ width: 512, height: 512, viewBox: '0 0 612 612' },
		wp.element.createElement('path', {
			d: 'M159.209 283.684c-.021 0-.021 0 0 0l-139.249-.165C8.947 283.477 0 274.489 0 263.496L.166 124.35c0-11.014 8.947-19.981 19.939-19.981l139.249.166c11.013.042 19.96 9.009 19.96 20.022l-.165 139.146c0 5.331-2.087 10.332-5.848 14.113a19.772 19.772 0 0 1-14.092 5.868zM20.146 120.92c-1.612 0-3.451 1.798-3.451 3.43l-.165 139.146c0 1.88 1.591 3.471 3.472 3.471l139.166.166v8.265l.042-8.265c1.611 0 3.43-1.818 3.43-3.43l.166-139.146a3.466 3.466 0 0 0-3.472-3.471l-139.188-.166zM159.209 507.631c-.021 0-.021 0 0 0l-139.249-.124C8.947 507.465 0 498.498 0 487.505l.166-139.207c0-11.014 8.947-19.981 19.939-19.981l139.249.165c11.013.041 19.96 9.03 19.96 20.022l-.165 139.146c0 5.331-2.087 10.332-5.848 14.113a19.772 19.772 0 0 1-14.092 5.868zM20.146 344.867c-1.612 0-3.451 1.798-3.451 3.431l-.165 139.207c0 1.88 1.591 3.45 3.472 3.45l139.166.124v8.266l.042-8.266c1.611 0 3.43-1.818 3.43-3.43l.166-139.146a3.466 3.466 0 0 0-3.472-3.472l-139.188-.164zM595.325 186.464H230.104c-9.195 0-16.675-8.183-16.675-18.266s7.48-18.266 16.675-18.266h365.221c9.194 0 16.675 8.183 16.675 18.266s-7.48 18.266-16.675 18.266zM230.104 162.33c-2.314 0-4.277 2.686-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.686 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 238.122H230.104c-9.195 0-16.675-8.183-16.675-18.266s7.48-18.266 16.675-18.266h365.221c9.194 0 16.675 8.183 16.675 18.266s-7.48 18.266-16.675 18.266zm-365.221-24.135c-2.314 0-4.277 2.686-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.686 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 410.411H230.104c-9.195 0-16.675-8.183-16.675-18.267s7.48-18.267 16.675-18.267h365.221c9.194 0 16.675 8.183 16.675 18.267s-7.48 18.267-16.675 18.267zm-365.221-24.135c-2.314 0-4.277 2.687-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.687 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 462.068H230.104c-9.195 0-16.675-8.183-16.675-18.266 0-10.084 7.48-18.267 16.675-18.267h365.221c9.194 0 16.675 8.183 16.675 18.267s-7.48 18.266-16.675 18.266zm-365.221-24.134c-2.314 0-4.277 2.687-4.277 5.869s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.687 4.277-5.868 0-3.183-1.964-5.869-4.277-5.869H230.104z',
			'data-original': '#000000',
			className: 'active-path',
			'data-old_color': '#484747',
			fill: '#444'
		})
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Media Object'), __('image')],
	attributes: {
		imageId: { type: 'string' },
		imageUrl: { type: 'string' },
		margin: {
			type: 'string',
			default: 'my-3'
		},
		textColor: {
			source: 'string'
		},
		title: {
			source: 'text',
			selector: 'h4.media-heading',
			default: 'Media heading'
		},
		content: {
			type: 'array',
			source: 'children',
			selector: 'div.content',
			default: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
		},
		alignment: {
			type: 'string'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    content = _props$attributes.content,
		    imageId = _props$attributes.imageId,
		    imageUrl = _props$attributes.imageUrl,
		    margin = _props$attributes.margin,
		    title = _props$attributes.title,
		    setAttributes = props.setAttributes,
		    isSelected = props.isSelected;


		function setMargin(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ margin: selected.value });
			event.preventDefault();
		}

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Select options') },
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Margin')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setMargin },
							wp.element.createElement(
								'select',
								{ value: margin, onChange: setMargin },
								wp.element.createElement(
									'option',
									{ value: 'my-0' },
									'No margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-1' },
									'my-1 - Tiny margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-2' },
									'my-2 - Small margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-3' },
									'my-3 - Middle margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-4' },
									'my-4 - Large margin'
								),
								wp.element.createElement(
									'option',
									{ value: 'my-5' },
									'my-5 - Hugh margin'
								)
							)
						)
					)
				)
			),
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: alignment,
					onChange: function onChange(alignment) {
						setAttributes({ alignment: alignment });
					}
				})
			),
			wp.element.createElement(
				'div',
				{ className: props.className },
				wp.element.createElement(
					'div',
					{
						className: 'media ' + margin,
						style: {
							textAlign: alignment,
							margin: margin
						}
					},
					wp.element.createElement(MediaUpload, {
						buttonProps: {
							className: 'change-image'
						},
						onSelect: function onSelect(img) {
							return setAttributes({
								imageId: img.id,
								imageUrl: img.url
							});
						},
						type: 'image',
						value: imageId,
						render: function render(_ref) {
							var open = _ref.open;
							return wp.element.createElement(
								'div',
								{
									className: 'media-image mr-3',
									onClick: open
								},
								!imageId ? wp.element.createElement(
									'div',
									{ className: 'btn btn-primary ' },
									__WEBPACK_IMPORTED_MODULE_2__icons__["a" /* default */].upload
								) : wp.element.createElement('img', {
									src: imageUrl
								})
							);
						}
					}),
					wp.element.createElement(
						'div',
						{ className: 'media-body' },
						wp.element.createElement(RichText, {
							className: 'media-heading mt-0',
							tagName: 'h5',
							onChange: function onChange(title) {
								setAttributes({ title: title });
							},
							value: title
						}),
						wp.element.createElement(RichText, {
							className: 'content',
							tagName: 'div',
							onChange: function onChange(content) {
								setAttributes({ content: content });
							},
							value: content
						})
					)
				)
			)
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
	save: function save(props) {

		// Initialize theme
		var _props$attributes2 = props.attributes,
		    alignment = _props$attributes2.alignment,
		    content = _props$attributes2.content,
		    imageUrl = _props$attributes2.imageUrl,
		    margin = _props$attributes2.margin,
		    title = _props$attributes2.title;


		return wp.element.createElement(
			'div',
			null,
			wp.element.createElement(
				'div',
				{ className: 'media ' + margin,
					style: { textAlign: alignment }
				},
				wp.element.createElement('img', { src: imageUrl, className: 'media-image mr-3' }),
				wp.element.createElement(
					'div',
					{ className: 'media-body' },
					wp.element.createElement(RichText.Content, {
						className: 'media-heading',
						tagName: 'h5',
						value: title
					}),
					wp.element.createElement(RichText.Content, {
						className: 'content',
						tagName: 'div',
						value: content
					})
				)
			)
		);
	}
});

/***/ }),
/* 14 */
/*!**********************************!*\
  !*** ./src/block/media/icons.js ***!
  \**********************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var icons = {};

icons.upload = wp.element.createElement(
	'svg',
	{ width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
	wp.element.createElement('path', { d: 'm77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z'
	}),
	wp.element.createElement('path', { d: 'm16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z'
	}),
	wp.element.createElement('path', { d: 'm28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z'
	}),
	wp.element.createElement('path', { d: 'm84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z'
	})
);

/* harmony default export */ __webpack_exports__["a"] = (icons);

/***/ }),
/* 15 */
/*!********************************!*\
  !*** ./src/block/type/type.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss__ = __webpack_require__(/*! ../style.scss */ 0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__style_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss__ = __webpack_require__(/*! ../editor.scss */ 1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__editor_scss__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$components = wp.components,
    CheckboxControl = _wp$components.CheckboxControl,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow;
var Fragment = wp.element.Fragment;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls,
    ColorPalette = _wp$editor.ColorPalette,
    InspectorControls = _wp$editor.InspectorControls,
    RichText = _wp$editor.RichText;
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
	title: __('Bootstrap Type Headings'), // Block title.
	description: __('Provide contextual feedback messages for typical user actions with the handful of available and flexible type messages.'), // Block title.
	icon: wp.element.createElement(
		'svg',
		{ viewBox: '0 0 220.068 220.068' },
		wp.element.createElement('path', { d: 'M136.922 51.991H89.297v148.332H47.253V51.991H0V19.745h136.922v32.246z' }),
		wp.element.createElement('path', { d: 'M220.068 98.245h-38.463v102.078h-38.236V98.245H105.47V68.919h114.598v29.326z' })
	),
	category: 'gbb', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.
	keywords: [__('Bootstrap'), __('Header'), __('Typography')],
	attributes: {
		alignment: {
			type: 'string'
		},
		content: {
			type: 'array',
			source: 'children',
			selector: 'div.type-content'
		},
		type: {
			type: 'string',
			default: 'display-1'
		}
	},

	/**
  * The edit function describes the structure of your block in the context of the editor.
  * This represents what the editor will render when the block is used.
  *
  * The "edit" property must be a valid function.
  *
  * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
  */
	edit: function edit(props) {
		// Theme selection
		var _props$attributes = props.attributes,
		    alignment = _props$attributes.alignment,
		    content = _props$attributes.content,
		    type = _props$attributes.type,
		    setAttributes = props.setAttributes,
		    isSelected = props.isSelected;


		function setType(event) {
			var selected = event.target.querySelector('option:checked');
			setAttributes({ type: selected.value });
			event.preventDefault();
		}

		function onChangeAlignment(newAlignment) {
			setAttributes({ alignment: newAlignment });
		}

		function onChangeContent(newContent) {
			setAttributes({ content: newContent });
		}

		return wp.element.createElement(
			Fragment,
			null,
			wp.element.createElement(
				InspectorControls,
				null,
				wp.element.createElement(
					PanelBody,
					{ title: __('Select options') },
					wp.element.createElement(
						PanelRow,
						null,
						wp.element.createElement(
							'label',
							null,
							__('Theme')
						),
						wp.element.createElement(
							'form',
							{ onSubmit: setType },
							wp.element.createElement(
								'select',
								{ value: type, onChange: setType },
								wp.element.createElement(
									'option',
									{ value: 'display-1' },
									'Display 1'
								),
								wp.element.createElement(
									'option',
									{ value: 'display-2' },
									'Display 2'
								),
								wp.element.createElement(
									'option',
									{ value: 'display-3' },
									'Display 3'
								),
								wp.element.createElement(
									'option',
									{ value: 'display-4' },
									'Display 4'
								),
								wp.element.createElement(
									'option',
									{ value: 'lead' },
									'Lead'
								)
							)
						)
					)
				)
			),
			wp.element.createElement(
				BlockControls,
				null,
				wp.element.createElement(AlignmentToolbar, {
					value: alignment,
					onChange: onChangeAlignment
				})
			),
			wp.element.createElement(
				'div',
				{ className: props.className, style: { textAlign: alignment } },
				wp.element.createElement(RichText, {
					className: 'type-content ' + type,
					tagName: 'div',
					onChange: onChangeContent,
					value: content
				})
			)
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
	save: function save(props) {

		// Initialize theme
		var _props$attributes2 = props.attributes,
		    alignment = _props$attributes2.alignment,
		    content = _props$attributes2.content,
		    type = _props$attributes2.type;


		return wp.element.createElement(
			'div',
			{ style: { textAlign: alignment } },
			wp.element.createElement(RichText.Content, {
				className: 'type-content ' + type,
				tagName: 'div',
				value: content
			})
		);
	}
});

/***/ })
/******/ ]);
//# sourceMappingURL=blocks.editor.build.js.map