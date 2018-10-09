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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/blocks.editor.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/bootstrap/js/src/alert.js":
/*!************************************************!*\
  !*** ./node_modules/bootstrap/js/src/alert.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./node_modules/bootstrap/js/src/util.js");



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
      const selector = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getSelectorFromElement(element)
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

      const transitionDuration = _util__WEBPACK_IMPORTED_MODULE_1__["default"].getTransitionDurationFromElement(element)

      $(element)
        .one(_util__WEBPACK_IMPORTED_MODULE_1__["default"].TRANSITION_END, (event) => this._destroyElement(element, event))
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
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a)

/* harmony default export */ __webpack_exports__["default"] = (Alert);


/***/ }),

/***/ "./node_modules/bootstrap/js/src/button.js":
/*!*************************************************!*\
  !*** ./node_modules/bootstrap/js/src/button.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


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
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a)

/* harmony default export */ __webpack_exports__["default"] = (Button);


/***/ }),

/***/ "./node_modules/bootstrap/js/src/util.js":
/*!***********************************************!*\
  !*** ./node_modules/bootstrap/js/src/util.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);


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
})(jquery__WEBPACK_IMPORTED_MODULE_0___default.a)

/* harmony default export */ __webpack_exports__["default"] = (Util);


/***/ }),

/***/ "./src/block/accordion/accordion.tsx":
/*!*******************************************!*\
  !*** ./src/block/accordion/accordion.tsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.module.scss */ "./src/block/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.




var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, CheckboxControl = _a.CheckboxControl, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, ColorPalette = _b.ColorPalette, InspectorControls = _b.InspectorControls, RichText = _b.RichText;
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
    title: __('Bootstrap Accordion/Collapsible'),
    description: __('Using the card component, you can extend the default collapse behavior to create an accordion.'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["default"].accordion,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Accordion'),
        __('Collapse'),
    ],
    attributes: {
        alignment: {
            type: 'string',
        },
        content: {
            type: 'array',
            source: 'query',
            default: [
                {
                    title: 'Collapsible Group Item #1',
                    body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
                },
                {
                    title: 'Collapsible Group Item #2',
                    body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
                },
                {
                    title: 'Collapsible Group Item #3',
                    body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
                },
            ],
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
                    selector: '.card-header h5',
                },
                body: {
                    type: 'array',
                    selector: '.card-body',
                    source: 'children',
                },
            },
        },
        margin: {
            type: 'string',
            default: 'my-3'
        },
        theme: {
            type: 'string',
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, margin = _a.margin, theme = _a.theme, setAttributes = props.setAttributes, isSelected = props.isSelected;
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
            var card = {
                title: "Collapsible Group Item #" + (content.length + 1),
                body: ['Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven\'t heard of them accusamus labore sustainable VHS.']
            };
            setAttributes({
                content: content.concat([card])
            });
        }
        function removeCard(key) {
            setAttributes({ content: content.filter(function (card, i) { return i !== key; }) });
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
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", null, __('Margin')),
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("form", { onSubmit: setMargin },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("select", { value: margin, onChange: setMargin },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-0" }, "No margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-1" }, "my-1 - Tiny margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-2" }, "my-2 - Small margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-3" }, "my-3 - Middle margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-4" }, "my-4 - Large margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", null, __('Theme')),
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("form", { onSubmit: setTheme, style: { textAlign: alignment } },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("select", { value: theme, onChange: setTheme },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "primary" }, "Primary"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "secondary" }, "Secondary"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "success" }, "Success"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "danger" }, "Danger"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "warning" }, "Warning"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "info" }, "Info"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "light" }, "Light"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "dark" }, "Dark")))))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AlignmentToolbar, { value: alignment, onChange: function (newAlignment) {
                        setAttributes({ alignment: newAlignment });
                    } })),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: props.className },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["accordion"] + " " + margin, style: { textAlign: alignment } },
                    content.map(function (card, key) {
                        return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card"] },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "removeCard float-right" },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn-secondary"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn-sm"], onClick: function () { return removeCard(key); } },
                                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { className: "dashicons dashicons-minus" }),
                                    " ",
                                    __('Remove card'))),
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card-header"], "data-toggle": "collapse", "data-target": "#collapse" + key, "aria-expanded": "false", "aria-controls": "collapse" + key },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { tagName: "h5", className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mb-0"], multiline: "p", onChange: function (title) { return onChangeCardTitle(key, title); }, value: card.title })),
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { id: "collapse" + key, className: "collapse" },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card-body"], tagName: "div", onChange: function (body) { return onChangeCardBody(key, body); }, value: card.body })));
                    }),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "addCard " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["text-center"] },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn-secondary"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mt-3"], onClick: addCard },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { className: "dashicons dashicons-plus" }),
                            " ",
                            __('Add card')))))));
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, margin = _a.margin, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "accordion " + margin, style: { textAlign: alignment } }, content.map(function (card, key) {
                return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "card" },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("a", { className: "card-header", "data-toggle": "collapse", "data-target": "#collapse" + key },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { className: "mb-0", tagName: "h5", value: card.title })),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { id: "collapse" + key, className: "collapse" },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { className: "card-body", tagName: "div", value: card.body })));
            }))));
    },
});


/***/ }),

/***/ "./src/block/alert/alert.tsx":
/*!***********************************!*\
  !*** ./src/block/alert/alert.tsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles.module.scss */ "./src/block/styles.module.scss");
/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_bootstrap_js_src_alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/bootstrap/js/src/alert */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
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
var _a = wp.components, CheckboxControl = _a.CheckboxControl, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, ColorPalette = _b.ColorPalette, InspectorControls = _b.InspectorControls, RichText = _b.RichText;
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
    title: __('Bootstrap Alert'),
    description: __('Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_3__["default"].alert,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Alert'),
        __('Notification'),
    ],
    attributes: {
        theme: {
            type: 'string',
            default: 'success'
        },
        textColor: {
            source: 'string',
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
            type: 'boolean',
        },
        alignment: {
            type: 'string',
        },
    },
    deprecated: [
        {
            attributes: {},
            save: function (props) {
                return react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("p", null, props.attributes.text);
            },
        }
    ],
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, isDismissable = _a.isDismissable, margin = _a.margin, title = _a.title, theme = _a.theme, setAttributes = props.setAttributes, isSelected = props.isSelected;
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
            return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("form", { onSubmit: setTheme, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("select", { value: theme, onChange: setTheme },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "primary" }, "Primary"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "secondary" }, "Secondary"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "success" }, "Success"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "danger" }, "Danger"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "warning" }, "Warning"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "info" }, "Info"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "light" }, "Light"),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "dark" }, "Dark"))));
        }
        return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("label", null, __('Margin')),
                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("form", { onSubmit: setMargin },
                            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("select", { value: margin, onChange: setMargin },
                                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "my-0" }, "No margin"),
                                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "my-1" }, "my-1 - Tiny margin"),
                                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "my-2" }, "my-2 - Small margin"),
                                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "my-3" }, "my-3 - Middle margin"),
                                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "my-4" }, "my-4 - Large margin"),
                                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("label", null, __('Theme')),
                        showThemeForm()),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"](CheckboxControl, { label: __('Is dismissable?'), help: __('Can the user hide the alert by clicking a X button on the top right.'), checked: isDismissable, onChange: function (isDismissable) {
                                setAttributes({ isDismissable: isDismissable });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })),
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: props.className },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-" + theme] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-dismissible"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["fade"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["show"] + " " + margin, role: "alert", style: { textAlign: alignment } },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"](RichText, { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-heading"], tagName: "h4", multiline: "p", onChange: onTitleContent, value: title }),
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"](RichText, { className: "content", tagName: "div", onChange: onChangeContent, value: content }),
                    isDismissable &&
                        react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { type: "button", className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["close"], "data-dismiss": "alert", "aria-label": "Close" },
                            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7"))))));
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, margin = _a.margin, title = _a.title, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("div", { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-" + theme] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-dismissible"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["fade"] + " " + _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["show"] + " " + margin, role: "alert", style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](RichText.Content, { className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-heading"], tagName: "h4", value: title }),
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"](RichText.Content, { className: "content", tagName: "div", value: content }),
                react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("button", { type: "button", className: _styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["close"], "data-dismiss": "alert", "aria-label": "Close" },
                    react__WEBPACK_IMPORTED_MODULE_4__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7")))));
    },
});


/***/ }),

/***/ "./src/block/blockquote/blockquote.tsx":
/*!*********************************************!*\
  !*** ./src/block/blockquote/blockquote.tsx ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */



var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.element, Fragment = _a.Fragment, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, RichText = _b.RichText, InspectorControls = _b.InspectorControls;
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
    title: __('Bootstrap Blockquote'),
    description: __('For quoting blocks of content from another source within your document.'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_1__["default"].blockquote,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Blockquote'),
        __('Quote'),
    ],
    attributes: {
        textColor: {
            source: 'string',
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
            default: 'Someone famous in <cite>Source Title</cite>',
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
        var _a = props.attributes, alignment = _a.alignment, margin = _a.margin, quote = _a.quote, source = _a.source, setAttributes = props.setAttributes;
        function setMargin(event) {
            var selected = event.target.querySelector('option:checked');
            setAttributes({ margin: selected.value });
            event.preventDefault();
        }
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", null, __('Margin')),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("form", { onSubmit: setMargin },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: margin, onChange: setMargin },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-0" }, "No margin"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-1" }, "my-1 - Tiny margin"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-2" }, "my-2 - Small margin"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-3" }, "my-3 - Middle margin"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-4" }, "my-4 - Large margin"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))))),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](AlignmentToolbar, { value: alignment, onChange: function (alignment) {
                        setAttributes({ alignment: alignment });
                    } })),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: props.className },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("blockquote", { className: "blockquote " + margin, style: { textAlign: alignment } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: "mb-0 blockquote", tagName: "p", onChange: function (quote) {
                            setAttributes({ quote: quote });
                        }, value: quote }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: "blockquote-footer", format: "string", tagName: "footer", onChange: function (source) {
                            setAttributes({ source: source });
                        }, value: source })))));
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
        var _a = props.attributes, alignment = _a.alignment, margin = _a.margin, quote = _a.quote, source = _a.source;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "blockquote " + margin, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: "mb-0 blockquote", tagName: "p", value: quote }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: "blockquote-footer", format: "string", tagName: "footer", value: source }))));
    },
});


/***/ }),

/***/ "./src/block/button/button.tsx":
/*!*************************************!*\
  !*** ./src/block/button/button.tsx ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ "./src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_bootstrap_js_src_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/bootstrap/js/src/button */ "./node_modules/bootstrap/js/src/button.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
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
var _a = wp.components, CheckboxControl = _a.CheckboxControl, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, ColorPalette = _b.ColorPalette, InspectorControls = _b.InspectorControls, RichText = _b.RichText, URLInput = _b.URLInput;
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
    title: __('Bootstrap Button'),
    description: __('Use Bootstrap’s custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_4__["default"].button,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Button'),
    ],
    attributes: {
        alignment: {
            type: 'string',
        },
        caption: {
            type: 'array',
            source: 'children',
            selector: 'div.content'
        },
        isBlockWidth: {
            type: 'boolean',
        },
        isOutline: {
            type: 'boolean',
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
        var _a = props.attributes, alignment = _a.alignment, caption = _a.caption, isBlockWidth = _a.isBlockWidth, isOutline = _a.isOutline, size = _a.size, theme = _a.theme, url = _a.url, setAttributes = props.setAttributes, isSelected = props.isSelected;
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
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", null, __('Theme')),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("form", { onSubmit: setTheme },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: theme, onChange: setTheme },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "primary" }, "Primary"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "secondary" }, "Secondary"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "success" }, "Success"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "danger" }, "Danger"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "warning" }, "Warning"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "info" }, "Info"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "light" }, "Light"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "dark" }, "Dark")))),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](CheckboxControl, { label: __('Outline Button?'), checked: isOutline, onChange: function (isOutline) {
                                setAttributes({ isOutline: isOutline });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", null, __('Size')),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("form", { onSubmit: setSize },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: size, onChange: setSize },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "" }, "Default"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "sm" }, "Small"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "lg" }, "Large")))),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](CheckboxControl, { label: __('Block Button / Full width?'), checked: isBlockWidth, onChange: function (isBlockWidth) {
                                setAttributes({ isBlockWidth: isBlockWidth });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: props.className, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { autoFocus: true, className: "btn btn-" + (isOutline ? 'outline-' : '') + theme + " " + (size !== '' ? "btn-" + size : '') + " " + (isBlockWidth ? "btn-block" : ''), role: "button", href: "#", tagName: "a", onChange: onChangeCaption, value: caption }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](URLInput, { autoFocus: false, className: "button-url", value: url, onChange: function (value) { return setAttributes({ url: value }); } }))));
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
        var _a = props.attributes, alignment = _a.alignment, caption = _a.caption, isBlockWidth = _a.isBlockWidth, isOutline = _a.isOutline, size = _a.size, theme = _a.theme, url = _a.url;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { textAlign: alignment } },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: "btn btn-" + (isOutline ? 'outline-' : '') + theme + " " + (size !== '' ? "btn-" + size : '') + " " + (isBlockWidth ? "btn-block" : ''), href: url, role: "button", tagName: "a", value: caption })));
    },
});


/***/ }),

/***/ "./src/block/container/container.tsx":
/*!*******************************************!*\
  !*** ./src/block/container/container.tsx ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ "./src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
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
var _a = wp.editor, AlignmentToolbar = _a.AlignmentToolbar, BlockControls = _a.BlockControls, InnerBlocks = _a.InnerBlocks, RichText = _a.RichText;
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
    title: __('Bootstrap Container'),
    description: __('Containers are the most basic layout element in Bootstrap and are required when using our default grid system. Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["default"].container,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Container'),
        __('Grid'),
    ],
    attributes: {
        content: {
            type: 'array',
            source: 'children',
            selector: 'div.content'
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, setAttributes = props.setAttributes;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: props.className + " my-5", style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InnerBlocks, null))));
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
        var alignment = props.attributes.alignment;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { textAlign: alignment } },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "container" },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InnerBlocks.Content, null))));
    },
});


/***/ }),

/***/ "./src/block/editor.scss":
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block/media/media.tsx":
/*!***********************************!*\
  !*** ./src/block/media/media.tsx ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ "./src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.




var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, CheckboxControl = _a.CheckboxControl, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, ColorPalette = _b.ColorPalette, InspectorControls = _b.InspectorControls, MediaUpload = _b.MediaUpload, RichText = _b.RichText;
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
    title: __('Bootstrap Media Object'),
    description: __('media object to construct highly repetitive components like blog comments, tweets, and the like.'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["default"].media,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Media Object'),
        __('image'),
    ],
    attributes: {
        imageId: { type: 'string' },
        imageUrl: { type: 'string' },
        margin: {
            type: 'string',
            default: 'my-3'
        },
        textColor: {
            source: 'string',
        },
        title: {
            source: 'text',
            selector: 'h4.media-heading',
            default: 'Enter a heading here',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: 'div.content',
            default: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, imageId = _a.imageId, imageUrl = _a.imageUrl, margin = _a.margin, title = _a.title, setAttributes = props.setAttributes, isSelected = props.isSelected;
        function setMargin(event) {
            var selected = event.target.querySelector('option:checked');
            setAttributes({ margin: selected.value });
            event.preventDefault();
        }
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", null, __('Margin')),
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("form", { onSubmit: setMargin },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("select", { value: margin, onChange: setMargin },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-0" }, "No margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-1" }, "my-1 - Tiny margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-2" }, "my-2 - Small margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-3" }, "my-3 - Middle margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-4" }, "my-4 - Large margin"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AlignmentToolbar, { value: alignment, onChange: function (alignment) {
                        setAttributes({ alignment: alignment });
                    } })),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: props.className },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "media " + margin, style: {
                        textAlign: alignment,
                        margin: margin
                    } },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](MediaUpload, { buttonProps: {
                            className: 'change-image'
                        }, onSelect: function (img) { return setAttributes({
                            imageId: img.id,
                            imageUrl: img.url,
                        }); }, type: "image", value: imageId, render: function (_a) {
                            var open = _a.open;
                            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "media-image mr-3", onClick: open }, !imageId ?
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "btn btn-secondary" },
                                    _lib_icons__WEBPACK_IMPORTED_MODULE_2__["default"].upload,
                                    " ",
                                    __('Upload image')) :
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("img", { src: imageUrl })));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "media-body" },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { className: "media-heading mt-0", multiline: "p", tagName: "h5", onChange: function (title) {
                                setAttributes({ title: title });
                            }, value: title }),
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { className: "content", tagName: "div", onChange: function (content) {
                                setAttributes({ content: content });
                            }, value: content }))))));
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, imageId = _a.imageId, imageUrl = _a.imageUrl, margin = _a.margin, title = _a.title;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "media " + margin, style: { textAlign: alignment } },
                imageId &&
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("img", { src: imageUrl, className: "media-image mr-3" }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: "media-body" },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { className: "media-heading", tagName: "h5", value: title }),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { className: "content", tagName: "div", value: content })))));
    },
});


/***/ }),

/***/ "./src/block/style.scss":
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/block/styles.module.scss":
/*!**************************************!*\
  !*** ./src/block/styles.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"h1":"h1--21CVy","h2":"h2--1Ip_Z","h3":"h3--2V2uP","h4":"h4--3KQP6","h5":"h5--pZEUo","h6":"h6--1pugz","lead":"lead--3ofC3","display-1":"display-1--tspYa","display-2":"display-2--1j4GQ","display-3":"display-3--dn2iE","display-4":"display-4--3z9Ww","small":"small--2YVwc","mark":"mark--1oXnb","list-unstyled":"list-unstyled--10F8G","list-inline":"list-inline--3xoJu","list-inline-item":"list-inline-item--2x6qG","initialism":"initialism--1sroR","blockquote":"blockquote--1b2gw","blockquote-footer":"blockquote-footer--3O--k","container":"container--2_mQk","container-fluid":"container-fluid--2-sAm","row":"row--3ci9O","no-gutters":"no-gutters--1gkoQ","col":"col--24cIZ","col-1":"col-1--311Ja","col-2":"col-2--2utY9","col-3":"col-3--3ckRB","col-4":"col-4--3Vlje","col-5":"col-5--iwp4k","col-6":"col-6--2VxuX","col-7":"col-7--3VX_f","col-8":"col-8--1D2ty","col-9":"col-9--1b2Q0","col-10":"col-10--3EhWb","col-11":"col-11--3jtOg","col-12":"col-12--3EUt4","col-auto":"col-auto--2qIpS","col-sm-1":"col-sm-1--K8jkT","col-sm-2":"col-sm-2--1rqcN","col-sm-3":"col-sm-3--3eulK","col-sm-4":"col-sm-4--3Ue8K","col-sm-5":"col-sm-5--nC0BQ","col-sm-6":"col-sm-6--1VIzu","col-sm-7":"col-sm-7--2x7Yy","col-sm-8":"col-sm-8--EoWc1","col-sm-9":"col-sm-9---4W1s","col-sm-10":"col-sm-10--geWlR","col-sm-11":"col-sm-11--1e0Wa","col-sm-12":"col-sm-12--4KvBD","col-sm":"col-sm--2vqQ4","col-sm-auto":"col-sm-auto--3uwbM","col-md-1":"col-md-1--2O1j6","col-md-2":"col-md-2--2eWPi","col-md-3":"col-md-3--2YcOz","col-md-4":"col-md-4--1f3-H","col-md-5":"col-md-5--1ek4f","col-md-6":"col-md-6--mbyr4","col-md-7":"col-md-7--2P7yH","col-md-8":"col-md-8--3bS53","col-md-9":"col-md-9--8yaHa","col-md-10":"col-md-10--3KvuG","col-md-11":"col-md-11--3Zkja","col-md-12":"col-md-12--3HSaz","col-md":"col-md--1dm_M","col-md-auto":"col-md-auto--2C-eM","col-lg-1":"col-lg-1--2Dzir","col-lg-2":"col-lg-2--1JF8d","col-lg-3":"col-lg-3--iJKbc","col-lg-4":"col-lg-4--3Y3RT","col-lg-5":"col-lg-5--1lE0_","col-lg-6":"col-lg-6--x1sxV","col-lg-7":"col-lg-7--1zwD3","col-lg-8":"col-lg-8--1qX5D","col-lg-9":"col-lg-9--109qN","col-lg-10":"col-lg-10--3i06n","col-lg-11":"col-lg-11--23XB3","col-lg-12":"col-lg-12--35AA5","col-lg":"col-lg--nfK6W","col-lg-auto":"col-lg-auto--1hayo","col-xl-1":"col-xl-1--11IuG","col-xl-2":"col-xl-2--1E6Np","col-xl-3":"col-xl-3--3hPdL","col-xl-4":"col-xl-4--2C7PQ","col-xl-5":"col-xl-5--3hLMN","col-xl-6":"col-xl-6--3a479","col-xl-7":"col-xl-7--3_JWd","col-xl-8":"col-xl-8--2CXIF","col-xl-9":"col-xl-9--3X31X","col-xl-10":"col-xl-10--3QIvW","col-xl-11":"col-xl-11--91U0P","col-xl-12":"col-xl-12--3nXjU","col-xl":"col-xl--1QTaA","col-xl-auto":"col-xl-auto--1GQ0F","order-first":"order-first--l7D1j","order-last":"order-last--2VHlv","order-0":"order-0--TIlf4","order-1":"order-1--1Qt62","order-2":"order-2--HxGRI","order-3":"order-3--2sP6z","order-4":"order-4--2SkfC","order-5":"order-5--2Hz6f","order-6":"order-6--1En0G","order-7":"order-7--3if9H","order-8":"order-8--1uZci","order-9":"order-9--1ayWW","order-10":"order-10--T83tN","order-11":"order-11--1968h","order-12":"order-12--3XMQQ","offset-1":"offset-1--vNxyx","offset-2":"offset-2--2Gzy2","offset-3":"offset-3--1XfK_","offset-4":"offset-4--1eZaN","offset-5":"offset-5--3sQTh","offset-6":"offset-6--1JzIG","offset-7":"offset-7--1MVG5","offset-8":"offset-8--3FCjk","offset-9":"offset-9--2atrl","offset-10":"offset-10--15XbY","offset-11":"offset-11--2f7Fm","order-sm-first":"order-sm-first--26p9o","order-sm-last":"order-sm-last--JPFmv","order-sm-0":"order-sm-0--29bM5","order-sm-1":"order-sm-1--3cv3U","order-sm-2":"order-sm-2--XriZ-","order-sm-3":"order-sm-3--3ED7y","order-sm-4":"order-sm-4--hPZQ_","order-sm-5":"order-sm-5--1IrU1","order-sm-6":"order-sm-6--2jYXa","order-sm-7":"order-sm-7--10zkf","order-sm-8":"order-sm-8--3Oc5P","order-sm-9":"order-sm-9--1tK9i","order-sm-10":"order-sm-10--2F3c8","order-sm-11":"order-sm-11--PotGM","order-sm-12":"order-sm-12--3_YiG","offset-sm-0":"offset-sm-0--3Smmy","offset-sm-1":"offset-sm-1--RGbvf","offset-sm-2":"offset-sm-2--2ybLm","offset-sm-3":"offset-sm-3--2Qyu8","offset-sm-4":"offset-sm-4--ery_b","offset-sm-5":"offset-sm-5--2Vc77","offset-sm-6":"offset-sm-6--1sL3s","offset-sm-7":"offset-sm-7--fYQud","offset-sm-8":"offset-sm-8--6Nanx","offset-sm-9":"offset-sm-9--1YdGF","offset-sm-10":"offset-sm-10--15_Zi","offset-sm-11":"offset-sm-11--3ibbN","order-md-first":"order-md-first--2FPn-","order-md-last":"order-md-last--3gI_q","order-md-0":"order-md-0--2riEf","order-md-1":"order-md-1--2d015","order-md-2":"order-md-2--1RTh8","order-md-3":"order-md-3--mTU0A","order-md-4":"order-md-4--n0We6","order-md-5":"order-md-5--2gBn9","order-md-6":"order-md-6--14kQh","order-md-7":"order-md-7--7ldpw","order-md-8":"order-md-8--1cqYY","order-md-9":"order-md-9--1iXxA","order-md-10":"order-md-10--2Gz_j","order-md-11":"order-md-11--24WJ6","order-md-12":"order-md-12--8KwtY","offset-md-0":"offset-md-0--fgMsB","offset-md-1":"offset-md-1--3jItW","offset-md-2":"offset-md-2--1j6D6","offset-md-3":"offset-md-3--22Gvr","offset-md-4":"offset-md-4--3BIkN","offset-md-5":"offset-md-5--3FWYJ","offset-md-6":"offset-md-6--1aFVw","offset-md-7":"offset-md-7--1PRER","offset-md-8":"offset-md-8--Z0O-t","offset-md-9":"offset-md-9--2xyrb","offset-md-10":"offset-md-10--ZGhUu","offset-md-11":"offset-md-11--2jx4d","order-lg-first":"order-lg-first--37tFX","order-lg-last":"order-lg-last--3zSJO","order-lg-0":"order-lg-0--3mpLQ","order-lg-1":"order-lg-1--3jk9E","order-lg-2":"order-lg-2--27iP7","order-lg-3":"order-lg-3--39q_0","order-lg-4":"order-lg-4--AZ3SS","order-lg-5":"order-lg-5--3GvPA","order-lg-6":"order-lg-6--1g45_","order-lg-7":"order-lg-7--2cRAC","order-lg-8":"order-lg-8--KY3bK","order-lg-9":"order-lg-9--3C02A","order-lg-10":"order-lg-10--1aQgb","order-lg-11":"order-lg-11--1EWLc","order-lg-12":"order-lg-12--pLEAJ","offset-lg-0":"offset-lg-0--3rMv0","offset-lg-1":"offset-lg-1--1Ih6_","offset-lg-2":"offset-lg-2--2Vcup","offset-lg-3":"offset-lg-3--2vFpr","offset-lg-4":"offset-lg-4--eyVs1","offset-lg-5":"offset-lg-5--1tMkO","offset-lg-6":"offset-lg-6--2Aar8","offset-lg-7":"offset-lg-7--3GIau","offset-lg-8":"offset-lg-8--2xx0s","offset-lg-9":"offset-lg-9--2gk_W","offset-lg-10":"offset-lg-10--3o3IF","offset-lg-11":"offset-lg-11--2fqnj","order-xl-first":"order-xl-first--29IqR","order-xl-last":"order-xl-last--X0k4y","order-xl-0":"order-xl-0--263Im","order-xl-1":"order-xl-1--3YZbJ","order-xl-2":"order-xl-2--2Maqj","order-xl-3":"order-xl-3--2CNux","order-xl-4":"order-xl-4--1g6rG","order-xl-5":"order-xl-5--3WgHC","order-xl-6":"order-xl-6--388IS","order-xl-7":"order-xl-7--GtTDZ","order-xl-8":"order-xl-8--2cUYx","order-xl-9":"order-xl-9--1pCfe","order-xl-10":"order-xl-10--3v1aX","order-xl-11":"order-xl-11--H65fB","order-xl-12":"order-xl-12--yFJBz","offset-xl-0":"offset-xl-0--AXJuA","offset-xl-1":"offset-xl-1--16DW0","offset-xl-2":"offset-xl-2--34oxA","offset-xl-3":"offset-xl-3--2wflt","offset-xl-4":"offset-xl-4--hCPWN","offset-xl-5":"offset-xl-5--1zJDd","offset-xl-6":"offset-xl-6--3ecRR","offset-xl-7":"offset-xl-7--1quCE","offset-xl-8":"offset-xl-8--1Kofw","offset-xl-9":"offset-xl-9--35Zlu","offset-xl-10":"offset-xl-10--1WyQS","offset-xl-11":"offset-xl-11--cBD8c","btn":"btn--3_Unu","focus":"focus--1IS8y","disabled":"disabled--3XXtX","btn-primary":"btn-primary--1PjCd","active":"active--22Ic8","show":"show--3yyaG","dropdown-toggle":"dropdown-toggle--2-4kt","btn-secondary":"btn-secondary--3JwDl","btn-success":"btn-success--1Qa1j","btn-info":"btn-info--A0EAi","btn-warning":"btn-warning--2NYX4","btn-danger":"btn-danger--3qx44","btn-light":"btn-light--PHbXq","btn-dark":"btn-dark--2_U3e","btn-outline-primary":"btn-outline-primary--CiYHw","btn-outline-secondary":"btn-outline-secondary--D-VFq","btn-outline-success":"btn-outline-success--AC1kY","btn-outline-info":"btn-outline-info--jdarh","btn-outline-warning":"btn-outline-warning--3Tri_","btn-outline-danger":"btn-outline-danger--X3TzA","btn-outline-light":"btn-outline-light--aMCL3","btn-outline-dark":"btn-outline-dark--2UJ_n","btn-link":"btn-link--yQvj9","btn-lg":"btn-lg--1R5mo","btn-sm":"btn-sm--j7fnF","btn-block":"btn-block--32acs","fade":"fade--37G5B","collapse":"collapse--1egst","collapsing":"collapsing--2TWpC","card":"card--QY-IW","list-group":"list-group--Ztiru","list-group-item":"list-group-item--2Tjn2","card-body":"card-body--1nigO","card-title":"card-title--12F_n","card-subtitle":"card-subtitle--2GREV","card-text":"card-text--2f9GF","card-link":"card-link--2mF4_","card-header":"card-header--1nPTE","card-footer":"card-footer--1jcRn","card-header-tabs":"card-header-tabs--aTxpe","card-header-pills":"card-header-pills--2--eA","card-img-overlay":"card-img-overlay--x6Kgs","card-img":"card-img--cvsxj","card-img-top":"card-img-top--2SCIp","card-img-bottom":"card-img-bottom--3-_wO","card-deck":"card-deck--3xaZS","card-group":"card-group--5HhK-","card-columns":"card-columns--23DWZ","accordion":"accordion--18B9f","alert":"alert--3wtq3","alert-heading":"alert-heading--3uGRy","alert-link":"alert-link--3JY7K","alert-dismissible":"alert-dismissible--3fPFA","close":"close--no0yX","alert-primary":"alert-primary--3-Mgg","alert-secondary":"alert-secondary--2bAjR","alert-success":"alert-success--s8S0q","alert-info":"alert-info--1Mv3y","alert-warning":"alert-warning--2Qzo0","alert-danger":"alert-danger--2Ppyk","alert-light":"alert-light--1aoQk","alert-dark":"alert-dark--nEjKj","media":"media--3dJcO","media-body":"media-body--fj_XZ","align-baseline":"align-baseline--24Zcq","align-top":"align-top--14hEX","align-middle":"align-middle--3o7f_","align-bottom":"align-bottom--2iRqi","align-text-bottom":"align-text-bottom--1nwG_","align-text-top":"align-text-top--2ti-V","bg-primary":"bg-primary--3V4uS","bg-secondary":"bg-secondary--BX269","bg-success":"bg-success--3dgP9","bg-info":"bg-info--3SwoG","bg-warning":"bg-warning--3o__d","bg-danger":"bg-danger--1ycYM","bg-light":"bg-light--5dx8v","bg-dark":"bg-dark--1PYB5","bg-white":"bg-white--1u3zL","bg-transparent":"bg-transparent--IsXaO","border":"border--3Tnyw","border-top":"border-top--2Plll","border-right":"border-right--ovaPm","border-bottom":"border-bottom--2oxct","border-left":"border-left--16VRh","border-0":"border-0--2Afg-","border-top-0":"border-top-0--l8LEi","border-right-0":"border-right-0--3gqWK","border-bottom-0":"border-bottom-0--29b3u","border-left-0":"border-left-0--oBOqD","border-primary":"border-primary--3G1CU","border-secondary":"border-secondary--1PIs5","border-success":"border-success--2Ul7d","border-info":"border-info--3zrmC","border-warning":"border-warning--3hxvg","border-danger":"border-danger--wJD6X","border-light":"border-light--3laA6","border-dark":"border-dark--1Cp67","border-white":"border-white--1dPc1","rounded":"rounded--2iS9p","rounded-top":"rounded-top--3GtqX","rounded-right":"rounded-right--k6rfO","rounded-bottom":"rounded-bottom--2bbUR","rounded-left":"rounded-left--1vO3B","rounded-circle":"rounded-circle--3-xOL","rounded-0":"rounded-0--YWlRZ","clearfix":"clearfix--AfEr8","d-none":"d-none--LK0eR","d-inline":"d-inline--mT7GR","d-inline-block":"d-inline-block--3NhlZ","d-block":"d-block--1sExG","d-table":"d-table--30rzT","d-table-row":"d-table-row--31Q0o","d-table-cell":"d-table-cell--18gGD","d-flex":"d-flex--EKnzw","d-inline-flex":"d-inline-flex--p-s7u","d-sm-none":"d-sm-none--3_iCU","d-sm-inline":"d-sm-inline--KopNh","d-sm-inline-block":"d-sm-inline-block--3PVg3","d-sm-block":"d-sm-block--j1sF9","d-sm-table":"d-sm-table--1bzcT","d-sm-table-row":"d-sm-table-row--1n3Mn","d-sm-table-cell":"d-sm-table-cell--1xtHS","d-sm-flex":"d-sm-flex--1iA7t","d-sm-inline-flex":"d-sm-inline-flex--Bd3yn","d-md-none":"d-md-none--3Cl3B","d-md-inline":"d-md-inline--2oFAs","d-md-inline-block":"d-md-inline-block--3zSnm","d-md-block":"d-md-block--atYu4","d-md-table":"d-md-table--DwIpw","d-md-table-row":"d-md-table-row--3lCMJ","d-md-table-cell":"d-md-table-cell--3R4Gl","d-md-flex":"d-md-flex--21fU-","d-md-inline-flex":"d-md-inline-flex--1Y_oK","d-lg-none":"d-lg-none--3BLep","d-lg-inline":"d-lg-inline--37tOE","d-lg-inline-block":"d-lg-inline-block--2xhkp","d-lg-block":"d-lg-block--3zL6T","d-lg-table":"d-lg-table--73bSt","d-lg-table-row":"d-lg-table-row--1wEYm","d-lg-table-cell":"d-lg-table-cell--B-YuZ","d-lg-flex":"d-lg-flex--2QOvz","d-lg-inline-flex":"d-lg-inline-flex--21Ftm","d-xl-none":"d-xl-none--2vNxK","d-xl-inline":"d-xl-inline--3a4J8","d-xl-inline-block":"d-xl-inline-block--2FQGG","d-xl-block":"d-xl-block--2WWMV","d-xl-table":"d-xl-table--18At-","d-xl-table-row":"d-xl-table-row--1VnDm","d-xl-table-cell":"d-xl-table-cell--3y9ou","d-xl-flex":"d-xl-flex--2EMXG","d-xl-inline-flex":"d-xl-inline-flex--3sSbv","d-print-none":"d-print-none--5YZau","d-print-inline":"d-print-inline--3edA3","d-print-inline-block":"d-print-inline-block--umYhM","d-print-block":"d-print-block--3JHzv","d-print-table":"d-print-table--31egC","d-print-table-row":"d-print-table-row--2ZIE5","d-print-table-cell":"d-print-table-cell--IHx8f","d-print-flex":"d-print-flex--3GKOf","d-print-inline-flex":"d-print-inline-flex--n6yif","embed-responsive":"embed-responsive--2houh","embed-responsive-item":"embed-responsive-item--3Z1so","embed-responsive-21by9":"embed-responsive-21by9--9d73C","embed-responsive-16by9":"embed-responsive-16by9--3KwYt","embed-responsive-4by3":"embed-responsive-4by3--1GJmj","embed-responsive-1by1":"embed-responsive-1by1--35ue6","flex-row":"flex-row--39iS4","flex-column":"flex-column--1mu2C","flex-row-reverse":"flex-row-reverse--23-lZ","flex-column-reverse":"flex-column-reverse--T2aMh","flex-wrap":"flex-wrap--3MCN0","flex-nowrap":"flex-nowrap--3jtwH","flex-wrap-reverse":"flex-wrap-reverse--1nHf8","flex-fill":"flex-fill--3xTdp","flex-grow-0":"flex-grow-0--1tyEY","flex-grow-1":"flex-grow-1--2dMMD","flex-shrink-0":"flex-shrink-0--JFMU0","flex-shrink-1":"flex-shrink-1--22Q8f","justify-content-start":"justify-content-start--1AYVM","justify-content-end":"justify-content-end--bvezX","justify-content-center":"justify-content-center--aa3Wu","justify-content-between":"justify-content-between--34oz6","justify-content-around":"justify-content-around--EeREO","align-items-start":"align-items-start--2YaLQ","align-items-end":"align-items-end--3t3pF","align-items-center":"align-items-center--2ajiT","align-items-baseline":"align-items-baseline--2EJXx","align-items-stretch":"align-items-stretch--3adSn","align-content-start":"align-content-start--2rXVk","align-content-end":"align-content-end--1VyFv","align-content-center":"align-content-center--1Rfh6","align-content-between":"align-content-between--22Bsl","align-content-around":"align-content-around--1pOr0","align-content-stretch":"align-content-stretch--1E_LV","align-self-auto":"align-self-auto--3stIr","align-self-start":"align-self-start--1AqBn","align-self-end":"align-self-end--TjtyR","align-self-center":"align-self-center--2zBfj","align-self-baseline":"align-self-baseline--1XtYw","align-self-stretch":"align-self-stretch--HwOub","flex-sm-row":"flex-sm-row--_x4w5","flex-sm-column":"flex-sm-column--AiAGo","flex-sm-row-reverse":"flex-sm-row-reverse--3JfSR","flex-sm-column-reverse":"flex-sm-column-reverse--3merF","flex-sm-wrap":"flex-sm-wrap--22m0K","flex-sm-nowrap":"flex-sm-nowrap--2n464","flex-sm-wrap-reverse":"flex-sm-wrap-reverse--3tZIk","flex-sm-fill":"flex-sm-fill--1hI9s","flex-sm-grow-0":"flex-sm-grow-0--2fSNf","flex-sm-grow-1":"flex-sm-grow-1--1my-y","flex-sm-shrink-0":"flex-sm-shrink-0--3Uxhb","flex-sm-shrink-1":"flex-sm-shrink-1--28PkQ","justify-content-sm-start":"justify-content-sm-start--1y3-H","justify-content-sm-end":"justify-content-sm-end--3XWsr","justify-content-sm-center":"justify-content-sm-center--2ybnS","justify-content-sm-between":"justify-content-sm-between--3fMkW","justify-content-sm-around":"justify-content-sm-around--3xAk-","align-items-sm-start":"align-items-sm-start--NnXuS","align-items-sm-end":"align-items-sm-end--3bzd7","align-items-sm-center":"align-items-sm-center--2dIb7","align-items-sm-baseline":"align-items-sm-baseline--1zXjr","align-items-sm-stretch":"align-items-sm-stretch--12iYC","align-content-sm-start":"align-content-sm-start--2UT87","align-content-sm-end":"align-content-sm-end--E51FC","align-content-sm-center":"align-content-sm-center--3vp2s","align-content-sm-between":"align-content-sm-between--3Q2IH","align-content-sm-around":"align-content-sm-around--13vZ0","align-content-sm-stretch":"align-content-sm-stretch--14k43","align-self-sm-auto":"align-self-sm-auto--dGBiy","align-self-sm-start":"align-self-sm-start--3fCYE","align-self-sm-end":"align-self-sm-end--p0Wh5","align-self-sm-center":"align-self-sm-center--1K8tc","align-self-sm-baseline":"align-self-sm-baseline--2JZpb","align-self-sm-stretch":"align-self-sm-stretch--HanmY","flex-md-row":"flex-md-row--tAbqM","flex-md-column":"flex-md-column--16Lfe","flex-md-row-reverse":"flex-md-row-reverse--1XHXW","flex-md-column-reverse":"flex-md-column-reverse--1TDzQ","flex-md-wrap":"flex-md-wrap--1BjdG","flex-md-nowrap":"flex-md-nowrap--3Go3s","flex-md-wrap-reverse":"flex-md-wrap-reverse--2pusA","flex-md-fill":"flex-md-fill--2lta0","flex-md-grow-0":"flex-md-grow-0--2Y_xF","flex-md-grow-1":"flex-md-grow-1--2fTcb","flex-md-shrink-0":"flex-md-shrink-0--1bsh7","flex-md-shrink-1":"flex-md-shrink-1--Q4X2I","justify-content-md-start":"justify-content-md-start--3YtSX","justify-content-md-end":"justify-content-md-end--fO7xW","justify-content-md-center":"justify-content-md-center--27eg1","justify-content-md-between":"justify-content-md-between--MGwAD","justify-content-md-around":"justify-content-md-around--2-rGs","align-items-md-start":"align-items-md-start--mL1nY","align-items-md-end":"align-items-md-end--12CJR","align-items-md-center":"align-items-md-center--2zBg8","align-items-md-baseline":"align-items-md-baseline--1QgFc","align-items-md-stretch":"align-items-md-stretch--oMm8X","align-content-md-start":"align-content-md-start--FJWtd","align-content-md-end":"align-content-md-end--1vvkz","align-content-md-center":"align-content-md-center--2hmf1","align-content-md-between":"align-content-md-between--23u1M","align-content-md-around":"align-content-md-around--2Ezd7","align-content-md-stretch":"align-content-md-stretch--2YY6d","align-self-md-auto":"align-self-md-auto--3P2Kp","align-self-md-start":"align-self-md-start--uQtDC","align-self-md-end":"align-self-md-end--ZKKGM","align-self-md-center":"align-self-md-center--3B4nu","align-self-md-baseline":"align-self-md-baseline--2GoK7","align-self-md-stretch":"align-self-md-stretch--D46HS","flex-lg-row":"flex-lg-row--B2h9U","flex-lg-column":"flex-lg-column--MYF9G","flex-lg-row-reverse":"flex-lg-row-reverse--3vlyv","flex-lg-column-reverse":"flex-lg-column-reverse--2HAeP","flex-lg-wrap":"flex-lg-wrap--1ac0Q","flex-lg-nowrap":"flex-lg-nowrap--2c6hV","flex-lg-wrap-reverse":"flex-lg-wrap-reverse--3Zbvb","flex-lg-fill":"flex-lg-fill--3zaN5","flex-lg-grow-0":"flex-lg-grow-0--2MVn7","flex-lg-grow-1":"flex-lg-grow-1--2-ncP","flex-lg-shrink-0":"flex-lg-shrink-0--M9bjz","flex-lg-shrink-1":"flex-lg-shrink-1--2LlfD","justify-content-lg-start":"justify-content-lg-start--1OttF","justify-content-lg-end":"justify-content-lg-end--1Dhde","justify-content-lg-center":"justify-content-lg-center--145ZQ","justify-content-lg-between":"justify-content-lg-between--3quMg","justify-content-lg-around":"justify-content-lg-around--jtfGe","align-items-lg-start":"align-items-lg-start--WDKTY","align-items-lg-end":"align-items-lg-end--3h-fi","align-items-lg-center":"align-items-lg-center--2xe4I","align-items-lg-baseline":"align-items-lg-baseline--2px2h","align-items-lg-stretch":"align-items-lg-stretch--3qEpK","align-content-lg-start":"align-content-lg-start--1Y5sr","align-content-lg-end":"align-content-lg-end--1p-uG","align-content-lg-center":"align-content-lg-center--3rfC2","align-content-lg-between":"align-content-lg-between--2HY8q","align-content-lg-around":"align-content-lg-around--3V-AT","align-content-lg-stretch":"align-content-lg-stretch--2li40","align-self-lg-auto":"align-self-lg-auto--3OA-h","align-self-lg-start":"align-self-lg-start--33-zL","align-self-lg-end":"align-self-lg-end--1U8Bd","align-self-lg-center":"align-self-lg-center--nXlTC","align-self-lg-baseline":"align-self-lg-baseline--YW9cq","align-self-lg-stretch":"align-self-lg-stretch--LSyYS","flex-xl-row":"flex-xl-row--1CcNz","flex-xl-column":"flex-xl-column--3x_gj","flex-xl-row-reverse":"flex-xl-row-reverse--2TNNN","flex-xl-column-reverse":"flex-xl-column-reverse--2-tGa","flex-xl-wrap":"flex-xl-wrap--2dba3","flex-xl-nowrap":"flex-xl-nowrap--2lfDo","flex-xl-wrap-reverse":"flex-xl-wrap-reverse--3w1bb","flex-xl-fill":"flex-xl-fill--wP3_m","flex-xl-grow-0":"flex-xl-grow-0--7Zn42","flex-xl-grow-1":"flex-xl-grow-1--1--x9","flex-xl-shrink-0":"flex-xl-shrink-0--5ozBo","flex-xl-shrink-1":"flex-xl-shrink-1--3BxuW","justify-content-xl-start":"justify-content-xl-start--2W5Tl","justify-content-xl-end":"justify-content-xl-end--_3-ow","justify-content-xl-center":"justify-content-xl-center--18xTC","justify-content-xl-between":"justify-content-xl-between--wnP6Z","justify-content-xl-around":"justify-content-xl-around--eB_o5","align-items-xl-start":"align-items-xl-start--oD1ej","align-items-xl-end":"align-items-xl-end--1uri0","align-items-xl-center":"align-items-xl-center--8XUYB","align-items-xl-baseline":"align-items-xl-baseline--3Frgq","align-items-xl-stretch":"align-items-xl-stretch--D6b2O","align-content-xl-start":"align-content-xl-start--2UwOJ","align-content-xl-end":"align-content-xl-end--2CmB7","align-content-xl-center":"align-content-xl-center--856AM","align-content-xl-between":"align-content-xl-between--1UjfF","align-content-xl-around":"align-content-xl-around--LkjQE","align-content-xl-stretch":"align-content-xl-stretch--2Zrht","align-self-xl-auto":"align-self-xl-auto--wo58J","align-self-xl-start":"align-self-xl-start--LeTIB","align-self-xl-end":"align-self-xl-end--Lc7Rl","align-self-xl-center":"align-self-xl-center--3FTcr","align-self-xl-baseline":"align-self-xl-baseline--1Z_cE","align-self-xl-stretch":"align-self-xl-stretch--2QBhs","float-left":"float-left--3ho1k","float-right":"float-right--2RJt4","float-none":"float-none--1JTsn","float-sm-left":"float-sm-left--1jleM","float-sm-right":"float-sm-right--TaDec","float-sm-none":"float-sm-none--tlo38","float-md-left":"float-md-left--3QAcb","float-md-right":"float-md-right--2rFd6","float-md-none":"float-md-none--281Un","float-lg-left":"float-lg-left--3teUO","float-lg-right":"float-lg-right--1hGkx","float-lg-none":"float-lg-none--2MblU","float-xl-left":"float-xl-left--3nlJS","float-xl-right":"float-xl-right----QaF","float-xl-none":"float-xl-none--3PbEs","position-static":"position-static--29yrW","position-relative":"position-relative--2C1jy","position-absolute":"position-absolute--1CJ7X","position-fixed":"position-fixed--1-n6U","position-sticky":"position-sticky--2ej4w","fixed-top":"fixed-top--JeTgn","fixed-bottom":"fixed-bottom--ikhRa","sticky-top":"sticky-top--4gBGs","sr-only":"sr-only--lV4E7","sr-only-focusable":"sr-only-focusable--vkY7Q","shadow-sm":"shadow-sm--2Y91l","shadow":"shadow--3kYS_","shadow-lg":"shadow-lg--3M1Ln","shadow-none":"shadow-none--2T02R","w-25":"w-25--2nX7D","w-50":"w-50--3RNsa","w-75":"w-75--2Gt3i","w-100":"w-100--2VQp9","w-auto":"w-auto--2lo2p","h-25":"h-25---r-p8","h-50":"h-50--3oJtX","h-75":"h-75--bMB6k","h-100":"h-100--Ct9tS","h-auto":"h-auto--29B5M","mw-100":"mw-100--wWzo8","mh-100":"mh-100--35IwJ","m-0":"m-0--BXvqW","mt-0":"mt-0--2p9IV","my-0":"my-0--RuMEs","mr-0":"mr-0--2acvh","mx-0":"mx-0--LBEUj","mb-0":"mb-0--11FBe","ml-0":"ml-0--1JUks","m-1":"m-1--2umCz","mt-1":"mt-1--7eehW","my-1":"my-1--eTGWz","mr-1":"mr-1--1aGT2","mx-1":"mx-1--3c2rc","mb-1":"mb-1--2skal","ml-1":"ml-1--iGgpC","m-2":"m-2--10Hww","mt-2":"mt-2--2Pz6S","my-2":"my-2--3Xe4a","mr-2":"mr-2--2SbwS","mx-2":"mx-2--3KaiX","mb-2":"mb-2--2e9yI","ml-2":"ml-2--1s3mQ","m-3":"m-3--22QX6","mt-3":"mt-3--33vz6","my-3":"my-3--iFB0J","mr-3":"mr-3--22Vrb","mx-3":"mx-3--12UeG","mb-3":"mb-3--3ELfu","ml-3":"ml-3--3_sqv","m-4":"m-4--1CmMM","mt-4":"mt-4--2juVy","my-4":"my-4--3qAdP","mr-4":"mr-4--Y_NIf","mx-4":"mx-4--1V2FP","mb-4":"mb-4--19mqB","ml-4":"ml-4--MLkak","m-5":"m-5--Z48Iy","mt-5":"mt-5--3tuWK","my-5":"my-5--1Yrq0","mr-5":"mr-5--FqYAC","mx-5":"mx-5--2wFJ8","mb-5":"mb-5--2y6VB","ml-5":"ml-5--Jeq-5","p-0":"p-0--DzSY7","pt-0":"pt-0--2us5m","py-0":"py-0--UUnc2","pr-0":"pr-0--3HxJD","px-0":"px-0--2r5_O","pb-0":"pb-0--jNlka","pl-0":"pl-0--29NYn","p-1":"p-1--GhjhX","pt-1":"pt-1--1bDt9","py-1":"py-1--3kKj6","pr-1":"pr-1--39BKo","px-1":"px-1--1m4B1","pb-1":"pb-1--JbTsY","pl-1":"pl-1--1vY_x","p-2":"p-2--1bkTI","pt-2":"pt-2--2p3md","py-2":"py-2--12vp1","pr-2":"pr-2--i3AyQ","px-2":"px-2--IfJBi","pb-2":"pb-2--M7qw4","pl-2":"pl-2--19a33","p-3":"p-3--3a78b","pt-3":"pt-3--2zGDh","py-3":"py-3--1YFdq","pr-3":"pr-3--QTgkd","px-3":"px-3--38Keo","pb-3":"pb-3--2rFpd","pl-3":"pl-3--28jPd","p-4":"p-4--3iC6s","pt-4":"pt-4--3ux9Y","py-4":"py-4--21DZC","pr-4":"pr-4--3u6B-","px-4":"px-4--1hmJe","pb-4":"pb-4--1ABMM","pl-4":"pl-4--1tUsK","p-5":"p-5--NbtPt","pt-5":"pt-5--2iboe","py-5":"py-5--adanN","pr-5":"pr-5--2zbH7","px-5":"px-5--Eecos","pb-5":"pb-5--3rsmI","pl-5":"pl-5--6GZSy","m-auto":"m-auto--WqcdD","mt-auto":"mt-auto--1Tbic","my-auto":"my-auto--HW4IZ","mr-auto":"mr-auto--3WTl1","mx-auto":"mx-auto--snVKv","mb-auto":"mb-auto--3mgT8","ml-auto":"ml-auto--2j4Lg","m-sm-0":"m-sm-0--U1F8r","mt-sm-0":"mt-sm-0--3l43B","my-sm-0":"my-sm-0--39XxH","mr-sm-0":"mr-sm-0--_8thq","mx-sm-0":"mx-sm-0--3w-D7","mb-sm-0":"mb-sm-0--3gnxA","ml-sm-0":"ml-sm-0--1R26m","m-sm-1":"m-sm-1--2q1m3","mt-sm-1":"mt-sm-1--302d5","my-sm-1":"my-sm-1--1lCcc","mr-sm-1":"mr-sm-1--3paeL","mx-sm-1":"mx-sm-1--GtXIs","mb-sm-1":"mb-sm-1--3FM5l","ml-sm-1":"ml-sm-1--WGQHa","m-sm-2":"m-sm-2--3nyGf","mt-sm-2":"mt-sm-2--B8vRb","my-sm-2":"my-sm-2--2_6gK","mr-sm-2":"mr-sm-2--1-VV2","mx-sm-2":"mx-sm-2--1-6d5","mb-sm-2":"mb-sm-2--MNPlt","ml-sm-2":"ml-sm-2--3WalZ","m-sm-3":"m-sm-3--1rkAd","mt-sm-3":"mt-sm-3--yNvnn","my-sm-3":"my-sm-3--1EY5X","mr-sm-3":"mr-sm-3--ephKX","mx-sm-3":"mx-sm-3--d7wh1","mb-sm-3":"mb-sm-3--DsPx_","ml-sm-3":"ml-sm-3--5n_E5","m-sm-4":"m-sm-4--b2dCu","mt-sm-4":"mt-sm-4--2BoIP","my-sm-4":"my-sm-4--2GGxU","mr-sm-4":"mr-sm-4--3QpnZ","mx-sm-4":"mx-sm-4--3a7EC","mb-sm-4":"mb-sm-4--4Bm0L","ml-sm-4":"ml-sm-4--SbrU9","m-sm-5":"m-sm-5--2trhg","mt-sm-5":"mt-sm-5--sTjaZ","my-sm-5":"my-sm-5--Ow5el","mr-sm-5":"mr-sm-5--1wf2j","mx-sm-5":"mx-sm-5--3kP2V","mb-sm-5":"mb-sm-5--2orfX","ml-sm-5":"ml-sm-5--YPqKT","p-sm-0":"p-sm-0--ySF4L","pt-sm-0":"pt-sm-0--3yMI7","py-sm-0":"py-sm-0--2_MMU","pr-sm-0":"pr-sm-0--3N06L","px-sm-0":"px-sm-0--3RXBA","pb-sm-0":"pb-sm-0--3Bq23","pl-sm-0":"pl-sm-0--2mCyj","p-sm-1":"p-sm-1--3ixzZ","pt-sm-1":"pt-sm-1--2p1_z","py-sm-1":"py-sm-1--1llX5","pr-sm-1":"pr-sm-1--3r9P9","px-sm-1":"px-sm-1--1rM2_","pb-sm-1":"pb-sm-1--1VV4b","pl-sm-1":"pl-sm-1--3GNLS","p-sm-2":"p-sm-2--2K7wD","pt-sm-2":"pt-sm-2--2K9Cc","py-sm-2":"py-sm-2--1DV9J","pr-sm-2":"pr-sm-2--oKPeX","px-sm-2":"px-sm-2--2ML9I","pb-sm-2":"pb-sm-2--Wa2kr","pl-sm-2":"pl-sm-2--1NfFY","p-sm-3":"p-sm-3--36RpA","pt-sm-3":"pt-sm-3--3xyjb","py-sm-3":"py-sm-3--2AN-A","pr-sm-3":"pr-sm-3--21Gyh","px-sm-3":"px-sm-3--2f4vx","pb-sm-3":"pb-sm-3--3wTvq","pl-sm-3":"pl-sm-3--1d2kR","p-sm-4":"p-sm-4--3t6Hc","pt-sm-4":"pt-sm-4--3uIoz","py-sm-4":"py-sm-4--3aDR7","pr-sm-4":"pr-sm-4--3KveL","px-sm-4":"px-sm-4--3slhs","pb-sm-4":"pb-sm-4--2GTQ3","pl-sm-4":"pl-sm-4--2McQy","p-sm-5":"p-sm-5--3uCMA","pt-sm-5":"pt-sm-5--1Po4K","py-sm-5":"py-sm-5--2NjiU","pr-sm-5":"pr-sm-5--1MkBY","px-sm-5":"px-sm-5--2vDe2","pb-sm-5":"pb-sm-5--2lqLq","pl-sm-5":"pl-sm-5--NXFfd","m-sm-auto":"m-sm-auto--1BRhI","mt-sm-auto":"mt-sm-auto--3KG2x","my-sm-auto":"my-sm-auto--1dt3z","mr-sm-auto":"mr-sm-auto--U2Gwn","mx-sm-auto":"mx-sm-auto--2aSd1","mb-sm-auto":"mb-sm-auto--sex0l","ml-sm-auto":"ml-sm-auto--3XpbM","m-md-0":"m-md-0--3ZDWb","mt-md-0":"mt-md-0--2HuAy","my-md-0":"my-md-0--2ZAzE","mr-md-0":"mr-md-0--1fQ25","mx-md-0":"mx-md-0--2YC3v","mb-md-0":"mb-md-0--H4sYV","ml-md-0":"ml-md-0--AbJ4p","m-md-1":"m-md-1--2_yRj","mt-md-1":"mt-md-1--3i06D","my-md-1":"my-md-1--2HU-q","mr-md-1":"mr-md-1--3spNQ","mx-md-1":"mx-md-1--3slUp","mb-md-1":"mb-md-1--3fbme","ml-md-1":"ml-md-1--1tus9","m-md-2":"m-md-2--3fulq","mt-md-2":"mt-md-2--bIc0s","my-md-2":"my-md-2--ErwAo","mr-md-2":"mr-md-2--1YVsr","mx-md-2":"mx-md-2--fK5qk","mb-md-2":"mb-md-2--9f0w5","ml-md-2":"ml-md-2--2F15f","m-md-3":"m-md-3--2ybly","mt-md-3":"mt-md-3--vj3p8","my-md-3":"my-md-3--1AGC3","mr-md-3":"mr-md-3--Ulg2c","mx-md-3":"mx-md-3--1mAla","mb-md-3":"mb-md-3--2LKto","ml-md-3":"ml-md-3--BhGyW","m-md-4":"m-md-4--2LKOw","mt-md-4":"mt-md-4--1b0Wt","my-md-4":"my-md-4--2rWyt","mr-md-4":"mr-md-4--30i21","mx-md-4":"mx-md-4--1CgsT","mb-md-4":"mb-md-4--1J1Zd","ml-md-4":"ml-md-4--31v0j","m-md-5":"m-md-5--11Ygg","mt-md-5":"mt-md-5--3CD-x","my-md-5":"my-md-5--2hQdC","mr-md-5":"mr-md-5--2IGk7","mx-md-5":"mx-md-5--1kW4c","mb-md-5":"mb-md-5--3hyIx","ml-md-5":"ml-md-5--3DZsc","p-md-0":"p-md-0--mCUqJ","pt-md-0":"pt-md-0--3wmC6","py-md-0":"py-md-0--1Qn4o","pr-md-0":"pr-md-0--25RZd","px-md-0":"px-md-0--3jU3u","pb-md-0":"pb-md-0--gOfkH","pl-md-0":"pl-md-0--DJHeK","p-md-1":"p-md-1--2r-1W","pt-md-1":"pt-md-1--3_x7q","py-md-1":"py-md-1--aHL7o","pr-md-1":"pr-md-1--3IEk9","px-md-1":"px-md-1--2oqbk","pb-md-1":"pb-md-1---UFi8","pl-md-1":"pl-md-1--e45RU","p-md-2":"p-md-2--1O-Uq","pt-md-2":"pt-md-2--3SQj4","py-md-2":"py-md-2--2G3aZ","pr-md-2":"pr-md-2--NLd-i","px-md-2":"px-md-2--3iFPh","pb-md-2":"pb-md-2--26NC7","pl-md-2":"pl-md-2--3Oveh","p-md-3":"p-md-3--2LGa4","pt-md-3":"pt-md-3--3mXc5","py-md-3":"py-md-3--2iW4u","pr-md-3":"pr-md-3--1GiDb","px-md-3":"px-md-3--2-r4X","pb-md-3":"pb-md-3--OYVOR","pl-md-3":"pl-md-3--_GO9Z","p-md-4":"p-md-4--HjYc4","pt-md-4":"pt-md-4--2nK4f","py-md-4":"py-md-4--sxB9X","pr-md-4":"pr-md-4--2Qb4f","px-md-4":"px-md-4--3mVms","pb-md-4":"pb-md-4--3rNVm","pl-md-4":"pl-md-4--2__4t","p-md-5":"p-md-5--2XouG","pt-md-5":"pt-md-5--1OZJP","py-md-5":"py-md-5--1eruk","pr-md-5":"pr-md-5--1pcW1","px-md-5":"px-md-5--2r9FV","pb-md-5":"pb-md-5--dW5Ht","pl-md-5":"pl-md-5--3iMKq","m-md-auto":"m-md-auto--3A6fx","mt-md-auto":"mt-md-auto--2HtcV","my-md-auto":"my-md-auto--1TCDY","mr-md-auto":"mr-md-auto--2sthK","mx-md-auto":"mx-md-auto--B0e_9","mb-md-auto":"mb-md-auto--1FSeD","ml-md-auto":"ml-md-auto--1Jd1N","m-lg-0":"m-lg-0--JsYws","mt-lg-0":"mt-lg-0--1bC0f","my-lg-0":"my-lg-0--b3A7b","mr-lg-0":"mr-lg-0--3ecek","mx-lg-0":"mx-lg-0--2JpKW","mb-lg-0":"mb-lg-0--IAzKZ","ml-lg-0":"ml-lg-0--2exPZ","m-lg-1":"m-lg-1--1o43S","mt-lg-1":"mt-lg-1--3NUft","my-lg-1":"my-lg-1--384sZ","mr-lg-1":"mr-lg-1--6_oRf","mx-lg-1":"mx-lg-1--3NS0Y","mb-lg-1":"mb-lg-1--1Ply7","ml-lg-1":"ml-lg-1--1mL3h","m-lg-2":"m-lg-2--2swr4","mt-lg-2":"mt-lg-2--1O8YM","my-lg-2":"my-lg-2--2VSW0","mr-lg-2":"mr-lg-2--2gbS7","mx-lg-2":"mx-lg-2--3-WGm","mb-lg-2":"mb-lg-2--5nXOX","ml-lg-2":"ml-lg-2--3zsnd","m-lg-3":"m-lg-3--3buYo","mt-lg-3":"mt-lg-3--z4S8P","my-lg-3":"my-lg-3--1uLVF","mr-lg-3":"mr-lg-3--3qxMp","mx-lg-3":"mx-lg-3--26Tbs","mb-lg-3":"mb-lg-3--MJimx","ml-lg-3":"ml-lg-3--3xoIe","m-lg-4":"m-lg-4--Y8BK4","mt-lg-4":"mt-lg-4--hm2Q-","my-lg-4":"my-lg-4--2md_K","mr-lg-4":"mr-lg-4--2eX5k","mx-lg-4":"mx-lg-4--3fPGA","mb-lg-4":"mb-lg-4--1HLhp","ml-lg-4":"ml-lg-4--2q4cO","m-lg-5":"m-lg-5--derNR","mt-lg-5":"mt-lg-5--32am3","my-lg-5":"my-lg-5--j7qpK","mr-lg-5":"mr-lg-5--2uad5","mx-lg-5":"mx-lg-5--1BMPO","mb-lg-5":"mb-lg-5--3sKVn","ml-lg-5":"ml-lg-5--f39ec","p-lg-0":"p-lg-0--knTuo","pt-lg-0":"pt-lg-0--3MObR","py-lg-0":"py-lg-0--cUkLx","pr-lg-0":"pr-lg-0--2oFFn","px-lg-0":"px-lg-0--3sQ5k","pb-lg-0":"pb-lg-0--VvGIa","pl-lg-0":"pl-lg-0--1qHjd","p-lg-1":"p-lg-1--19uHU","pt-lg-1":"pt-lg-1--2_ucx","py-lg-1":"py-lg-1--3xBHI","pr-lg-1":"pr-lg-1--1XMRT","px-lg-1":"px-lg-1--22M_t","pb-lg-1":"pb-lg-1--1rx-M","pl-lg-1":"pl-lg-1--2eq81","p-lg-2":"p-lg-2--3IggO","pt-lg-2":"pt-lg-2--33DRl","py-lg-2":"py-lg-2--2EE4f","pr-lg-2":"pr-lg-2--2fOzw","px-lg-2":"px-lg-2--3_yCb","pb-lg-2":"pb-lg-2--AChUo","pl-lg-2":"pl-lg-2--1WDrX","p-lg-3":"p-lg-3--2WokA","pt-lg-3":"pt-lg-3--sq5bt","py-lg-3":"py-lg-3--2YNzZ","pr-lg-3":"pr-lg-3--3AI0i","px-lg-3":"px-lg-3--O_heB","pb-lg-3":"pb-lg-3--bQabJ","pl-lg-3":"pl-lg-3--2ZQDi","p-lg-4":"p-lg-4--23GgC","pt-lg-4":"pt-lg-4--2FriU","py-lg-4":"py-lg-4--3ulVi","pr-lg-4":"pr-lg-4--3B1hC","px-lg-4":"px-lg-4--1IkGl","pb-lg-4":"pb-lg-4--1FWqM","pl-lg-4":"pl-lg-4--3nw9K","p-lg-5":"p-lg-5--1sDax","pt-lg-5":"pt-lg-5--24aON","py-lg-5":"py-lg-5--3ognk","pr-lg-5":"pr-lg-5--2f5c8","px-lg-5":"px-lg-5--29IA-","pb-lg-5":"pb-lg-5--27Tu1","pl-lg-5":"pl-lg-5--3SNv5","m-lg-auto":"m-lg-auto--1I5zg","mt-lg-auto":"mt-lg-auto--23yLm","my-lg-auto":"my-lg-auto--PfAH3","mr-lg-auto":"mr-lg-auto--1v15D","mx-lg-auto":"mx-lg-auto--2ZE-l","mb-lg-auto":"mb-lg-auto--1Ng1C","ml-lg-auto":"ml-lg-auto--KDU5o","m-xl-0":"m-xl-0--z347H","mt-xl-0":"mt-xl-0--2mTdk","my-xl-0":"my-xl-0--3nuYS","mr-xl-0":"mr-xl-0--1DSFn","mx-xl-0":"mx-xl-0--1oVTX","mb-xl-0":"mb-xl-0--3tcAM","ml-xl-0":"ml-xl-0--196VW","m-xl-1":"m-xl-1--4m4OI","mt-xl-1":"mt-xl-1--2v-EX","my-xl-1":"my-xl-1--GUZti","mr-xl-1":"mr-xl-1--uMlgV","mx-xl-1":"mx-xl-1--31z2R","mb-xl-1":"mb-xl-1--1FhZb","ml-xl-1":"ml-xl-1--1r21I","m-xl-2":"m-xl-2--1pqlO","mt-xl-2":"mt-xl-2--2WDFj","my-xl-2":"my-xl-2--3fzik","mr-xl-2":"mr-xl-2--3dfCH","mx-xl-2":"mx-xl-2--3zn1I","mb-xl-2":"mb-xl-2--1NZAC","ml-xl-2":"ml-xl-2--2FPzw","m-xl-3":"m-xl-3--Mk3z3","mt-xl-3":"mt-xl-3--aniTN","my-xl-3":"my-xl-3--3exm6","mr-xl-3":"mr-xl-3--2UWOp","mx-xl-3":"mx-xl-3--30mP-","mb-xl-3":"mb-xl-3--1S86d","ml-xl-3":"ml-xl-3--2-KgX","m-xl-4":"m-xl-4--2KUt7","mt-xl-4":"mt-xl-4--1eCJT","my-xl-4":"my-xl-4--2r2ln","mr-xl-4":"mr-xl-4--2OiFR","mx-xl-4":"mx-xl-4--243lO","mb-xl-4":"mb-xl-4--1o41m","ml-xl-4":"ml-xl-4--QBvVp","m-xl-5":"m-xl-5--2l8ys","mt-xl-5":"mt-xl-5--1TYQy","my-xl-5":"my-xl-5--3Yq2W","mr-xl-5":"mr-xl-5--1sOhu","mx-xl-5":"mx-xl-5--3t7GC","mb-xl-5":"mb-xl-5--KYA8x","ml-xl-5":"ml-xl-5--1Tv07","p-xl-0":"p-xl-0--hQVO7","pt-xl-0":"pt-xl-0--3Dgda","py-xl-0":"py-xl-0--3TPMr","pr-xl-0":"pr-xl-0--3oSfq","px-xl-0":"px-xl-0--2Auev","pb-xl-0":"pb-xl-0--T9pOM","pl-xl-0":"pl-xl-0--1mULh","p-xl-1":"p-xl-1--3riFo","pt-xl-1":"pt-xl-1--3VLT-","py-xl-1":"py-xl-1--3q2Nh","pr-xl-1":"pr-xl-1--3pKz2","px-xl-1":"px-xl-1--3RiiA","pb-xl-1":"pb-xl-1--2FcVd","pl-xl-1":"pl-xl-1--3M4HB","p-xl-2":"p-xl-2--1__hF","pt-xl-2":"pt-xl-2--1NHqp","py-xl-2":"py-xl-2--3spil","pr-xl-2":"pr-xl-2--131Jo","px-xl-2":"px-xl-2--1YBpM","pb-xl-2":"pb-xl-2--1XZdR","pl-xl-2":"pl-xl-2--2ptzL","p-xl-3":"p-xl-3--2SOI6","pt-xl-3":"pt-xl-3--2ZoeO","py-xl-3":"py-xl-3--1nkiC","pr-xl-3":"pr-xl-3--2sk_m","px-xl-3":"px-xl-3--IGH9x","pb-xl-3":"pb-xl-3--2DyPH","pl-xl-3":"pl-xl-3--3U2aF","p-xl-4":"p-xl-4--1F1rY","pt-xl-4":"pt-xl-4--2YMYc","py-xl-4":"py-xl-4--3xzWp","pr-xl-4":"pr-xl-4--1d6g7","px-xl-4":"px-xl-4--3zQ-0","pb-xl-4":"pb-xl-4--3L8C-","pl-xl-4":"pl-xl-4--34eqe","p-xl-5":"p-xl-5---uyPB","pt-xl-5":"pt-xl-5--QBVPM","py-xl-5":"py-xl-5--33Grc","pr-xl-5":"pr-xl-5--1fy3O","px-xl-5":"px-xl-5--3Udtu","pb-xl-5":"pb-xl-5--21bHv","pl-xl-5":"pl-xl-5--o9up_","m-xl-auto":"m-xl-auto--3Ryps","mt-xl-auto":"mt-xl-auto--3zh94","my-xl-auto":"my-xl-auto--3AGj2","mr-xl-auto":"mr-xl-auto--1kOdi","mx-xl-auto":"mx-xl-auto--3WBo3","mb-xl-auto":"mb-xl-auto--35Zkm","ml-xl-auto":"ml-xl-auto--1aDAL","text-monospace":"text-monospace--3Od_b","text-justify":"text-justify--Lyu9k","text-nowrap":"text-nowrap--2DrhO","text-truncate":"text-truncate--3lLEi","text-left":"text-left--3ZLIS","text-right":"text-right--1B-ZV","text-center":"text-center--135cf","text-sm-left":"text-sm-left--1vHfz","text-sm-right":"text-sm-right--3TVRO","text-sm-center":"text-sm-center--1-NJ_","text-md-left":"text-md-left--2ikbo","text-md-right":"text-md-right--35oML","text-md-center":"text-md-center--3gDO1","text-lg-left":"text-lg-left--24yBG","text-lg-right":"text-lg-right--2AOMK","text-lg-center":"text-lg-center--2VDVo","text-xl-left":"text-xl-left--aDSor","text-xl-right":"text-xl-right--1y5gQ","text-xl-center":"text-xl-center--367Vu","text-lowercase":"text-lowercase---fRhm","text-uppercase":"text-uppercase--2UPvI","text-capitalize":"text-capitalize--3o5tP","font-weight-light":"font-weight-light--2tsyl","font-weight-normal":"font-weight-normal--3erZp","font-weight-bold":"font-weight-bold--owsyw","font-italic":"font-italic--3m6Xe","text-white":"text-white--3XIWy","text-primary":"text-primary--3PLfD","text-secondary":"text-secondary--WeYe9","text-success":"text-success--_AI6k","text-info":"text-info--3YOkj","text-warning":"text-warning--2oON2","text-danger":"text-danger--1nEBI","text-light":"text-light--3svCL","text-dark":"text-dark--2hom1","text-body":"text-body--1Zw__","text-muted":"text-muted--P55zJ","text-black-50":"text-black-50--16ztd","text-white-50":"text-white-50--3wQTz","text-hide":"text-hide--1v2PB","visible":"visible--1mB_l","invisible":"invisible--1oKd3"};

/***/ }),

/***/ "./src/block/type/type.tsx":
/*!*********************************!*\
  !*** ./src/block/type/type.tsx ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ "./src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../editor.scss */ "./src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.




var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, CheckboxControl = _a.CheckboxControl, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, ColorPalette = _b.ColorPalette, InspectorControls = _b.InspectorControls, RichText = _b.RichText;
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
    title: __('Bootstrap Type Headings'),
    description: __('Provide contextual feedback messages for typical user actions with the handful of available and flexible type messages.'),
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["default"].type,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Header'),
        __('Typography'),
    ],
    attributes: {
        alignment: {
            type: 'string',
        },
        content: {
            type: 'array',
            source: 'children',
            selector: 'div.type-content'
        },
        type: {
            type: 'string',
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, type = _a.type, setAttributes = props.setAttributes, isSelected = props.isSelected;
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
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("label", null, __('Theme')),
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("form", { onSubmit: setType },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("select", { value: type, onChange: setType },
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "display-1" }, "Display 1"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "display-2" }, "Display 2"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "display-3" }, "Display 3"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "display-4" }, "Display 4"),
                                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "lead" }, "Lead")))))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: props.className, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { className: "type-content " + type, tagName: "div", onChange: onChangeContent, value: content }))));
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, type = _a.type;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { style: { textAlign: alignment } },
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { className: "type-content " + type, tagName: "div", value: content })));
    },
});


/***/ }),

/***/ "./src/blocks.editor.ts":
/*!******************************!*\
  !*** ./src/blocks.editor.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/accordion/accordion */ "./src/block/accordion/accordion.tsx");
/* harmony import */ var _block_alert_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block/alert/alert */ "./src/block/alert/alert.tsx");
/* harmony import */ var _block_blockquote_blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block/blockquote/blockquote */ "./src/block/blockquote/blockquote.tsx");
/* harmony import */ var _block_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./block/button/button */ "./src/block/button/button.tsx");
/* harmony import */ var _block_container_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block/container/container */ "./src/block/container/container.tsx");
/* harmony import */ var _block_media_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block/media/media */ "./src/block/media/media.tsx");
/* harmony import */ var _block_type_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./block/type/type */ "./src/block/type/type.tsx");
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

/***/ "./src/lib/icons.tsx":
/*!***************************!*\
  !*** ./src/lib/icons.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var icons = {};

icons.accordion = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { width: "512", height: "512", viewBox: "0 0 16 16" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { fill: "#444", d: "M0 4v8h16V4H0zm15 7H1V7h14v4zM0 0h16v3H0V0zM0 13h16v3H0v-3z", "data-original": "#444444", className: "active-path", "data-old_color": "#5D5C5C" }));
icons.alert = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M505.403 406.394L295.389 58.102c-8.274-13.721-23.367-22.245-39.39-22.245s-31.116 8.524-39.391 22.246L6.595 406.394c-8.551 14.182-8.804 31.95-.661 46.37 8.145 14.42 23.491 23.378 40.051 23.378h420.028c16.56 0 31.907-8.958 40.052-23.379 8.143-14.421 7.89-32.189-.662-46.369zm-28.364 29.978a12.684 12.684 0 0 1-11.026 6.436H45.985a12.68 12.68 0 0 1-11.025-6.435 12.683 12.683 0 0 1 .181-12.765L245.156 75.316A12.732 12.732 0 0 1 256 69.192c4.41 0 8.565 2.347 10.843 6.124l210.013 348.292a12.677 12.677 0 0 1 .183 12.764z" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M256.154 173.005c-12.68 0-22.576 6.804-22.576 18.866 0 36.802 4.329 89.686 4.329 126.489.001 9.587 8.352 13.607 18.248 13.607 7.422 0 17.937-4.02 17.937-13.607 0-36.802 4.329-89.686 4.329-126.489 0-12.061-10.205-18.866-22.267-18.866zM256.465 353.306c-13.607 0-23.814 10.824-23.814 23.814 0 12.68 10.206 23.814 23.814 23.814 12.68 0 23.505-11.134 23.505-23.814 0-12.99-10.826-23.814-23.505-23.814z" }));
icons.blockquote = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M228 119c5.523 0 10-4.478 10-10V77c0-27.57-22.43-50-50-50H50C22.43 27 0 49.43 0 77v119.988c0 27.57 22.43 50 50 50h64.692c-2.276 74.706-30.621 113.542-86.459 118.622a10 10 0 0 0-9.094 9.959V475a10 10 0 0 0 10.561 9.984c68.908-3.876 121.511-27.591 156.349-70.487C220.521 372.051 238 310.029 238 230.152v-35.819c0-5.522-4.477-10-10-10s-10 4.478-10 10v35.819c0 146.644-58.535 223.331-178.86 234.097v-79.836c30.411-4.73 53.934-18.886 70.007-42.161 17.049-24.691 25.694-60.106 25.694-105.264 0-5.522-4.477-10-10-10H50c-16.542 0-30-13.458-30-30V77c0-16.542 13.458-30 30-30h138c16.542 0 30 13.458 30 30v32c0 5.522 4.477 10 10 10zM462 27H324c-27.57 0-50 22.43-50 50v119.988c0 27.57 22.43 50 50 50h64.692c-2.276 74.706-30.621 113.542-86.459 118.622a10 10 0 0 0-9.094 9.959V475a10 10 0 0 0 10.561 9.984c68.908-3.876 121.511-27.591 156.349-70.487C494.521 372.052 512 310.029 512 230.152V77c0-27.57-22.43-50-50-50zm30 203.152c0 146.644-58.535 223.331-178.861 234.097v-79.836c30.412-4.73 53.935-18.886 70.007-42.161 17.049-24.69 25.694-60.105 25.694-105.264 0-5.522-4.477-10-10-10H324c-16.542 0-30-13.458-30-30V77c0-16.542 13.458-30 30-30h120v74.034c0 5.522 4.477 10 10 10s10-4.478 10-10v-73.96c15.612 1.034 28 14.057 28 29.926v153.152z" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M454 145.751c-5.523 0-10 4.527-10 10.049 0 5.522 4.477 10 10 10 5.522 0 10-4.478 10-10v-.099c0-5.522-4.477-9.95-10-9.95zM228 141.666c-5.523 0-10 4.478-10 10v.209c0 5.522 4.477 10 10 10s10-4.478 10-10v-.209c0-5.522-4.477-10-10-10z" }));
icons.button = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M466.959 2.467H39.783C17.847 2.467 0 20.313 0 42.249V282.76c0 21.936 17.847 39.782 39.783 39.782h98.397c5.545 0 10.039-4.495 10.039-10.039s-4.495-10.039-10.04-10.039H39.783c-10.865 0-19.704-8.839-19.704-19.704V42.249c0-10.865 8.839-19.704 19.704-19.704h427.176c10.865 0 19.704 8.839 19.704 19.704V282.76c0 10.865-8.839 19.704-19.704 19.704h-30.148c-5.545 0-10.039 4.495-10.039 10.039s4.495 10.039 10.039 10.039h30.148c21.936 0 39.782-17.846 39.782-39.782V42.249c0-21.936-17.846-39.782-39.782-39.782z" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M511.99 371.309a19.331 19.331 0 0 0-12.644-17.566v-.001l-166.048-61.603c-11.245-4.17-23.498-1.494-31.978 6.984-8.481 8.478-11.16 20.731-6.992 31.975l61.447 165.775c2.767 7.464 9.696 12.43 17.653 12.652.186.006.37.008.554.008 7.735 0 14.672-4.527 17.776-11.655l16.997-39.021 36.85 36.861c10.488 10.491 27.557 10.495 38.049.006l14.215-14.212c5.082-5.081 7.882-11.837 7.883-19.024.001-7.186-2.797-13.943-7.877-19.025L461.49 407.07l39.016-17.417a19.331 19.331 0 0 0 11.484-18.344zm-72.007 23.372a10.04 10.04 0 0 0-3.008 16.266l46.7 46.713a6.833 6.833 0 0 1-.001 9.653l-14.215 14.212a6.78 6.78 0 0 1-4.826 1.998h-.001a6.778 6.778 0 0 1-4.827-2l-47.269-47.282a10.038 10.038 0 0 0-16.304 3.089l-22.212 50.994-60.865-164.203c-2.117-5.712 1.272-9.709 2.361-10.798.839-.838 3.403-3.041 7.148-3.041 1.117 0 2.34.196 3.651.683l164.497 61.027-50.829 22.689zm52.386-22.11a.016.016 0 0 0-.007-.004l3.492-9.412-3.485 9.416zM285.926 269.48l-28.368-28.37c-3.921-3.919-10.277-3.919-14.198 0-3.921 3.921-3.921 10.277-.001 14.198l28.369 28.37a10.009 10.009 0 0 0 7.099 2.94c2.569 0 5.139-.98 7.099-2.94 3.921-3.921 3.921-10.277 0-14.198zM258.097 302.551h-40.12c-5.545 0-10.039 4.495-10.039 10.039s4.495 10.039 10.039 10.039h40.12c5.544 0 10.039-4.495 10.039-10.039s-4.495-10.039-10.039-10.039zM315.704 204.824c-5.544 0-10.039 4.495-10.039 10.039v40.12c0 5.544 4.495 10.039 10.039 10.039s10.039-4.495 10.039-10.039v-40.12c0-5.544-4.495-10.039-10.039-10.039zM399.987 223.474c-3.921-3.919-10.277-3.92-14.198 0l-28.369 28.369c-3.921 3.921-3.921 10.277-.001 14.198a10.011 10.011 0 0 0 7.1 2.94c2.569 0 5.139-.98 7.099-2.94l28.369-28.369c3.921-3.921 3.921-10.277 0-14.198zM274.284 349.176c-3.921-3.919-10.278-3.919-14.198 0l-28.369 28.37c-3.921 3.921-3.92 10.277 0 14.198a10.007 10.007 0 0 0 7.099 2.94c2.57 0 5.139-.98 7.099-2.94l28.369-28.37c3.921-3.921 3.92-10.277 0-14.198z" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", { cx: 178.01, cy: 312.5, r: 10.07 }));
icons.container = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { viewBox: "0 0 512 512" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M16.797 51.094C-.044 52.193 0 67.02 0 67.02l1.244 386.934C1.26 458.667 3.821 460 8.533 460h494.933a8.533 8.533 0 0 0 8.533-8.533V58.933c-.071-.893 1.598-6.042-13.602-7.431 0 0-405.152-1.724-481.6-.408zm68.536 391.839H17.067V67.467h68.267v375.466zm324.267 0H102.4V67.467h307.2zm85.333 0h-68.267V67.467h68.267z" }));
icons.media = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { width: 512, height: 512, viewBox: "0 0 612 612" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M159.209 283.684c-.021 0-.021 0 0 0l-139.249-.165C8.947 283.477 0 274.489 0 263.496L.166 124.35c0-11.014 8.947-19.981 19.939-19.981l139.249.166c11.013.042 19.96 9.009 19.96 20.022l-.165 139.146c0 5.331-2.087 10.332-5.848 14.113a19.772 19.772 0 0 1-14.092 5.868zM20.146 120.92c-1.612 0-3.451 1.798-3.451 3.43l-.165 139.146c0 1.88 1.591 3.471 3.472 3.471l139.166.166v8.265l.042-8.265c1.611 0 3.43-1.818 3.43-3.43l.166-139.146a3.466 3.466 0 0 0-3.472-3.471l-139.188-.166zM159.209 507.631c-.021 0-.021 0 0 0l-139.249-.124C8.947 507.465 0 498.498 0 487.505l.166-139.207c0-11.014 8.947-19.981 19.939-19.981l139.249.165c11.013.041 19.96 9.03 19.96 20.022l-.165 139.146c0 5.331-2.087 10.332-5.848 14.113a19.772 19.772 0 0 1-14.092 5.868zM20.146 344.867c-1.612 0-3.451 1.798-3.451 3.431l-.165 139.207c0 1.88 1.591 3.45 3.472 3.45l139.166.124v8.266l.042-8.266c1.611 0 3.43-1.818 3.43-3.43l.166-139.146a3.466 3.466 0 0 0-3.472-3.472l-139.188-.164zM595.325 186.464H230.104c-9.195 0-16.675-8.183-16.675-18.266s7.48-18.266 16.675-18.266h365.221c9.194 0 16.675 8.183 16.675 18.266s-7.48 18.266-16.675 18.266zM230.104 162.33c-2.314 0-4.277 2.686-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.686 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 238.122H230.104c-9.195 0-16.675-8.183-16.675-18.266s7.48-18.266 16.675-18.266h365.221c9.194 0 16.675 8.183 16.675 18.266s-7.48 18.266-16.675 18.266zm-365.221-24.135c-2.314 0-4.277 2.686-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.686 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 410.411H230.104c-9.195 0-16.675-8.183-16.675-18.267s7.48-18.267 16.675-18.267h365.221c9.194 0 16.675 8.183 16.675 18.267s-7.48 18.267-16.675 18.267zm-365.221-24.135c-2.314 0-4.277 2.687-4.277 5.868s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.687 4.277-5.868s-1.964-5.868-4.277-5.868H230.104zM595.325 462.068H230.104c-9.195 0-16.675-8.183-16.675-18.266 0-10.084 7.48-18.267 16.675-18.267h365.221c9.194 0 16.675 8.183 16.675 18.267s-7.48 18.266-16.675 18.266zm-365.221-24.134c-2.314 0-4.277 2.687-4.277 5.869s1.963 5.868 4.277 5.868h365.221c2.313 0 4.277-2.687 4.277-5.868 0-3.183-1.964-5.869-4.277-5.869H230.104z", "data-original": "#000000", className: "active-path", "data-old_color": "#484747", fill: "#444" }));
icons.type = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { viewBox: "0 0 220.068 220.068" },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M136.922 51.991H89.297v148.332H47.253V51.991H0V19.745h136.922v32.246z" }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: "M220.068 98.245h-38.463v102.078h-38.236V98.245H105.47V68.919h114.598v29.326z" }));
icons.upload = react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", { width: '20px', height: '20px', viewBox: '0 0 100 100', xmlns: 'http://www.w3.org/2000/svg' },
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: 'm77.945 91.453h-72.371c-3.3711 0-5.5742-2.3633-5.5742-5.2422v-55.719c0-3.457 2.1172-6.0703 5.5742-6.0703h44.453v11.051l-38.98-0.003906v45.008h60.977v-17.133l11.988-0.007812v22.875c0 2.8789-2.7812 5.2422-6.0664 5.2422z' }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: 'm16.543 75.48l23.25-22.324 10.441 9.7773 11.234-14.766 5.5039 10.539 0.039063 16.773z' }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: 'm28.047 52.992c-3.168 0-5.7422-2.5742-5.7422-5.7461 0-3.1758 2.5742-5.75 5.7422-5.75 3.1797 0 5.7539 2.5742 5.7539 5.75 0 3.1719-2.5742 5.7461-5.7539 5.7461z' }),
    react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", { d: 'm84.043 30.492v22.02h-12.059l-0.015625-22.02h-15.852l21.941-21.945 21.941 21.945z' }));
/* harmony default export */ __webpack_exports__["default"] = (icons);


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = React;

/***/ })

/******/ });
//# sourceMappingURL=blocks.editor.build.js.map