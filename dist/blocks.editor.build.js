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

/***/ "./node_modules/classnames/bind.js":
/*!*****************************************!*\
  !*** ./node_modules/classnames/bind.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(this && this[arg] || arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(this, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(this && this[key] || key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/assets/scss/styles.module.scss":
/*!********************************************!*\
  !*** ./src/assets/scss/styles.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"h1":"h1--222BH","h2":"h2--1RWWo","h3":"h3--2qKUp","h4":"h4--1BDxR","h5":"h5--3OXcQ","h6":"h6--1Z8SX","lead":"lead--yn6k5","display-1":"display-1--4Zfqb","display-2":"display-2--3skJL","display-3":"display-3--35nhN","display-4":"display-4--3sB07","small":"small--1ulk_","mark":"mark--3SI2C","list-unstyled":"list-unstyled--vUwT1","list-inline":"list-inline--AYQWB","list-inline-item":"list-inline-item--2izFN","initialism":"initialism--2E8Vt","blockquote":"blockquote--6-ppN","blockquote-footer":"blockquote-footer--2b6Gs","container":"container--3Qu8E","container-fluid":"container-fluid--10sWQ","row":"row--28t27","no-gutters":"no-gutters--25gac","col":"col---Uy08","col-1":"col-1--20p9s","col-2":"col-2--2x3_4","col-3":"col-3--2Y6PN","col-4":"col-4--6H0mg","col-5":"col-5--1SFiK","col-6":"col-6--2g4GB","col-7":"col-7--2nruE","col-8":"col-8--3lcDv","col-9":"col-9--1_7BA","col-10":"col-10--3RzpM","col-11":"col-11--3aWWE","col-12":"col-12--29ryJ","col-auto":"col-auto--1oOhi","col-sm-1":"col-sm-1--35FaF","col-sm-2":"col-sm-2--d1cuU","col-sm-3":"col-sm-3--7nCiQ","col-sm-4":"col-sm-4--2fcxA","col-sm-5":"col-sm-5--UeigR","col-sm-6":"col-sm-6--1Lb5D","col-sm-7":"col-sm-7--Y4O48","col-sm-8":"col-sm-8--30lUw","col-sm-9":"col-sm-9--1KHWP","col-sm-10":"col-sm-10--2lJMi","col-sm-11":"col-sm-11--1vXIP","col-sm-12":"col-sm-12--1zF3d","col-sm":"col-sm--1A9bm","col-sm-auto":"col-sm-auto--1tO1d","col-md-1":"col-md-1--qHClt","col-md-2":"col-md-2--1pII7","col-md-3":"col-md-3--37ALQ","col-md-4":"col-md-4--3CmNK","col-md-5":"col-md-5--3QawA","col-md-6":"col-md-6--3qjyC","col-md-7":"col-md-7--3i_5d","col-md-8":"col-md-8--1ETuq","col-md-9":"col-md-9--BSw5V","col-md-10":"col-md-10--3FVZB","col-md-11":"col-md-11--351-7","col-md-12":"col-md-12--2Y291","col-md":"col-md--3qIwV","col-md-auto":"col-md-auto--2_DBm","col-lg-1":"col-lg-1--1rxZ1","col-lg-2":"col-lg-2--2_Q8R","col-lg-3":"col-lg-3--2uu90","col-lg-4":"col-lg-4--1zD-Z","col-lg-5":"col-lg-5--2-mO4","col-lg-6":"col-lg-6--3ECXh","col-lg-7":"col-lg-7--2zCzq","col-lg-8":"col-lg-8--2KkFl","col-lg-9":"col-lg-9--3n7aJ","col-lg-10":"col-lg-10--17qhc","col-lg-11":"col-lg-11--3b_tj","col-lg-12":"col-lg-12--3CSIe","col-lg":"col-lg--3YiEK","col-lg-auto":"col-lg-auto--1-_2D","col-xl-1":"col-xl-1--BQTmy","col-xl-2":"col-xl-2--3Eowu","col-xl-3":"col-xl-3--3m-Rd","col-xl-4":"col-xl-4--3c_iQ","col-xl-5":"col-xl-5--3r3XZ","col-xl-6":"col-xl-6--3Woc4","col-xl-7":"col-xl-7--C-dfY","col-xl-8":"col-xl-8--3iORV","col-xl-9":"col-xl-9--35d2s","col-xl-10":"col-xl-10--Y_qB6","col-xl-11":"col-xl-11--2Cq1g","col-xl-12":"col-xl-12--2yQqu","col-xl":"col-xl--gRmSn","col-xl-auto":"col-xl-auto--3sfpg","order-first":"order-first--2ssqZ","order-last":"order-last--3ZtKu","order-0":"order-0--1uuSK","order-1":"order-1--zSbxJ","order-2":"order-2--9YsT9","order-3":"order-3--2rMpZ","order-4":"order-4--2Ilfw","order-5":"order-5--1fRFH","order-6":"order-6--1CxFO","order-7":"order-7--qx17H","order-8":"order-8--191Oo","order-9":"order-9--1g9CQ","order-10":"order-10--b97c6","order-11":"order-11--ZkBBr","order-12":"order-12--zev66","offset-1":"offset-1--1Q1Cf","offset-2":"offset-2--2PDHg","offset-3":"offset-3--386K2","offset-4":"offset-4--fEPF4","offset-5":"offset-5--ftovf","offset-6":"offset-6--39s_M","offset-7":"offset-7--RfqQn","offset-8":"offset-8--3qRLD","offset-9":"offset-9--1MNc1","offset-10":"offset-10--PGcUe","offset-11":"offset-11--3Q8k4","order-sm-first":"order-sm-first--3C194","order-sm-last":"order-sm-last--2a8vF","order-sm-0":"order-sm-0--2IRAk","order-sm-1":"order-sm-1--3JqU4","order-sm-2":"order-sm-2--3xROd","order-sm-3":"order-sm-3--EGTk8","order-sm-4":"order-sm-4--7k06W","order-sm-5":"order-sm-5--1_Pa3","order-sm-6":"order-sm-6--iDFUw","order-sm-7":"order-sm-7--1rri3","order-sm-8":"order-sm-8--2a3qc","order-sm-9":"order-sm-9--3HxDx","order-sm-10":"order-sm-10--ASOR1","order-sm-11":"order-sm-11--UkyW0","order-sm-12":"order-sm-12--1qQgf","offset-sm-0":"offset-sm-0--tfBgI","offset-sm-1":"offset-sm-1--3Hh5w","offset-sm-2":"offset-sm-2--3DPrv","offset-sm-3":"offset-sm-3--1UPgJ","offset-sm-4":"offset-sm-4--MQGdV","offset-sm-5":"offset-sm-5--3Zb3W","offset-sm-6":"offset-sm-6--33vvh","offset-sm-7":"offset-sm-7--1RvZ0","offset-sm-8":"offset-sm-8--2avJQ","offset-sm-9":"offset-sm-9--3PKAf","offset-sm-10":"offset-sm-10--2XA23","offset-sm-11":"offset-sm-11--3bvnO","order-md-first":"order-md-first--3_XPA","order-md-last":"order-md-last--3NwCI","order-md-0":"order-md-0--2m7RZ","order-md-1":"order-md-1--R_guB","order-md-2":"order-md-2--11_ak","order-md-3":"order-md-3--3yJjV","order-md-4":"order-md-4--1jWxI","order-md-5":"order-md-5--cXWs_","order-md-6":"order-md-6--QUdli","order-md-7":"order-md-7--2gZQd","order-md-8":"order-md-8--3rpfj","order-md-9":"order-md-9--2kmml","order-md-10":"order-md-10--36dco","order-md-11":"order-md-11--HoFfT","order-md-12":"order-md-12--3Ur7S","offset-md-0":"offset-md-0--2fNP7","offset-md-1":"offset-md-1--2_zS6","offset-md-2":"offset-md-2--31Yjm","offset-md-3":"offset-md-3--WUQNI","offset-md-4":"offset-md-4--23Hzx","offset-md-5":"offset-md-5--u_HsG","offset-md-6":"offset-md-6--1i6UH","offset-md-7":"offset-md-7--2QtBL","offset-md-8":"offset-md-8--1-Q-f","offset-md-9":"offset-md-9--PV4Q3","offset-md-10":"offset-md-10--bEXEx","offset-md-11":"offset-md-11--2eo4A","order-lg-first":"order-lg-first--17Gvh","order-lg-last":"order-lg-last--1OEK9","order-lg-0":"order-lg-0--bdY9v","order-lg-1":"order-lg-1--2q5o2","order-lg-2":"order-lg-2--eiOso","order-lg-3":"order-lg-3--1HaFV","order-lg-4":"order-lg-4--eQet-","order-lg-5":"order-lg-5--2KM8T","order-lg-6":"order-lg-6--2HdGP","order-lg-7":"order-lg-7--3fxIT","order-lg-8":"order-lg-8--u0EKH","order-lg-9":"order-lg-9--l_kpE","order-lg-10":"order-lg-10--1nBLo","order-lg-11":"order-lg-11--1LxzA","order-lg-12":"order-lg-12--bW9E1","offset-lg-0":"offset-lg-0--2nyXy","offset-lg-1":"offset-lg-1--fstCL","offset-lg-2":"offset-lg-2--1M80_","offset-lg-3":"offset-lg-3--2calJ","offset-lg-4":"offset-lg-4--GKxzR","offset-lg-5":"offset-lg-5--2a8BE","offset-lg-6":"offset-lg-6--1tSRX","offset-lg-7":"offset-lg-7--2g2p3","offset-lg-8":"offset-lg-8--1TSl3","offset-lg-9":"offset-lg-9--29kQC","offset-lg-10":"offset-lg-10--3XI16","offset-lg-11":"offset-lg-11--Y4mTn","order-xl-first":"order-xl-first--9K-Wk","order-xl-last":"order-xl-last--bQpfD","order-xl-0":"order-xl-0--24AyV","order-xl-1":"order-xl-1--2NR6c","order-xl-2":"order-xl-2--22j0M","order-xl-3":"order-xl-3--yKPsb","order-xl-4":"order-xl-4--2nKmF","order-xl-5":"order-xl-5--1l8-w","order-xl-6":"order-xl-6--3wkpP","order-xl-7":"order-xl-7--12alY","order-xl-8":"order-xl-8--2Dbjd","order-xl-9":"order-xl-9--3x2vx","order-xl-10":"order-xl-10--2NNEp","order-xl-11":"order-xl-11--3fP9U","order-xl-12":"order-xl-12--xOSO0","offset-xl-0":"offset-xl-0--1JaJS","offset-xl-1":"offset-xl-1--2wF18","offset-xl-2":"offset-xl-2--1yJWO","offset-xl-3":"offset-xl-3--29YtA","offset-xl-4":"offset-xl-4--11N0P","offset-xl-5":"offset-xl-5--8-voR","offset-xl-6":"offset-xl-6--10Uc5","offset-xl-7":"offset-xl-7--3OW34","offset-xl-8":"offset-xl-8--3hxuT","offset-xl-9":"offset-xl-9--TF0Zh","offset-xl-10":"offset-xl-10--3Aaxr","offset-xl-11":"offset-xl-11--2pPTg","btn":"btn--3CHrz","focus":"focus--2E4Vd","disabled":"disabled--1EYoL","btn-primary":"btn-primary--3cl2R","active":"active--2s-Vd","show":"show--PtmUe","dropdown-toggle":"dropdown-toggle--121aI","btn-secondary":"btn-secondary--Sjzl1","btn-success":"btn-success--2KAzM","btn-info":"btn-info--2Gloa","btn-warning":"btn-warning--22Jk9","btn-danger":"btn-danger--2-xVo","btn-light":"btn-light--fHX9A","btn-dark":"btn-dark--DOspN","btn-outline-primary":"btn-outline-primary--25sII","btn-outline-secondary":"btn-outline-secondary--2kPN_","btn-outline-success":"btn-outline-success--2RZq2","btn-outline-info":"btn-outline-info--LIkc6","btn-outline-warning":"btn-outline-warning--10wO-","btn-outline-danger":"btn-outline-danger--1p4Dx","btn-outline-light":"btn-outline-light--16tF0","btn-outline-dark":"btn-outline-dark--2ny7a","btn-link":"btn-link--1OuBp","btn-lg":"btn-lg--Ce5p0","btn-sm":"btn-sm--142LS","btn-block":"btn-block--31BgQ","fade":"fade--2matl","collapse":"collapse--1zSej","collapsing":"collapsing--37L-g","card":"card--317tK","list-group":"list-group--37Kn_","list-group-item":"list-group-item--32cUC","card-body":"card-body--lj3Pn","card-title":"card-title--3GQXU","card-subtitle":"card-subtitle--3Jwa9","card-text":"card-text--2N4ih","card-link":"card-link--1R9Y5","card-header":"card-header--32M7I","card-footer":"card-footer--3wofb","card-header-tabs":"card-header-tabs--1oO_H","card-header-pills":"card-header-pills--2eZ_R","card-img-overlay":"card-img-overlay--1x_Up","card-img":"card-img--11R3Y","card-img-top":"card-img-top--1yPJP","card-img-bottom":"card-img-bottom--1-iWk","card-deck":"card-deck--3s0C-","card-group":"card-group--249DB","card-columns":"card-columns--RsMBO","accordion":"accordion--lXutP","alert":"alert--34SY7","alert-heading":"alert-heading--3qc8t","alert-link":"alert-link--kHgho","alert-dismissible":"alert-dismissible--3zVLb","close":"close--1faOM","alert-primary":"alert-primary--2Ubbx","alert-secondary":"alert-secondary--3KJgw","alert-success":"alert-success--1yAMT","alert-info":"alert-info--3YmFg","alert-warning":"alert-warning--vTnJ2","alert-danger":"alert-danger--2ZLxn","alert-light":"alert-light--3Nfe0","alert-dark":"alert-dark--2Pc9l","media":"media--2NYiU","media-body":"media-body--1pd65","align-baseline":"align-baseline--307ZM","align-top":"align-top--1DwFe","align-middle":"align-middle--WEdec","align-bottom":"align-bottom--3RzE7","align-text-bottom":"align-text-bottom--2AIEk","align-text-top":"align-text-top--avDrM","bg-primary":"bg-primary--mjpCZ","bg-secondary":"bg-secondary--2lsu-","bg-success":"bg-success--2trHO","bg-info":"bg-info--Iz0M4","bg-warning":"bg-warning--jpsWC","bg-danger":"bg-danger--2P2jJ","bg-light":"bg-light--1UlyB","bg-dark":"bg-dark--2CaIP","bg-white":"bg-white--2h_Ri","bg-transparent":"bg-transparent--1_gGY","border":"border--3y8GO","border-top":"border-top--2QpjR","border-right":"border-right--1CX_E","border-bottom":"border-bottom--xBgTM","border-left":"border-left--H1ZWf","border-0":"border-0--3rqNB","border-top-0":"border-top-0--2lf4q","border-right-0":"border-right-0--1sM7P","border-bottom-0":"border-bottom-0--1cPIu","border-left-0":"border-left-0--3hfHx","border-primary":"border-primary--mfQfV","border-secondary":"border-secondary--jUzai","border-success":"border-success--3f1Fj","border-info":"border-info--2Og4n","border-warning":"border-warning--2RZgA","border-danger":"border-danger--2FPb-","border-light":"border-light--xfsPp","border-dark":"border-dark--3Kv6r","border-white":"border-white--gExik","rounded":"rounded--1sk7Y","rounded-top":"rounded-top--okkIl","rounded-right":"rounded-right--2OBza","rounded-bottom":"rounded-bottom--HaqJd","rounded-left":"rounded-left--_VFJX","rounded-circle":"rounded-circle--1Fm8W","rounded-0":"rounded-0--3ImBV","clearfix":"clearfix--2TaCA","d-none":"d-none--1jvpx","d-inline":"d-inline--3_ySs","d-inline-block":"d-inline-block--10lG9","d-block":"d-block--54ub6","d-table":"d-table--14fhP","d-table-row":"d-table-row--3gMnU","d-table-cell":"d-table-cell--3TkGA","d-flex":"d-flex--CbkfC","d-inline-flex":"d-inline-flex--2QYbW","d-sm-none":"d-sm-none--39Xxg","d-sm-inline":"d-sm-inline--1hBnM","d-sm-inline-block":"d-sm-inline-block--2L6hv","d-sm-block":"d-sm-block--2HIy_","d-sm-table":"d-sm-table--2HA0d","d-sm-table-row":"d-sm-table-row--2kJWN","d-sm-table-cell":"d-sm-table-cell--2c2-Y","d-sm-flex":"d-sm-flex--2yeIR","d-sm-inline-flex":"d-sm-inline-flex--16tKR","d-md-none":"d-md-none--2hMGX","d-md-inline":"d-md-inline--3IeKw","d-md-inline-block":"d-md-inline-block--3fpaT","d-md-block":"d-md-block--3sPBy","d-md-table":"d-md-table--2CTY2","d-md-table-row":"d-md-table-row--2VzRr","d-md-table-cell":"d-md-table-cell--2LYCL","d-md-flex":"d-md-flex--2TX2y","d-md-inline-flex":"d-md-inline-flex--3zuCS","d-lg-none":"d-lg-none--3IVvq","d-lg-inline":"d-lg-inline--18Nbz","d-lg-inline-block":"d-lg-inline-block--2LQwn","d-lg-block":"d-lg-block--1TffJ","d-lg-table":"d-lg-table--PFnqW","d-lg-table-row":"d-lg-table-row--27BdX","d-lg-table-cell":"d-lg-table-cell--3MAyA","d-lg-flex":"d-lg-flex--jS4HF","d-lg-inline-flex":"d-lg-inline-flex--2qldT","d-xl-none":"d-xl-none--1hMDv","d-xl-inline":"d-xl-inline--26eex","d-xl-inline-block":"d-xl-inline-block--3O0tm","d-xl-block":"d-xl-block--3hrFm","d-xl-table":"d-xl-table--2v2iy","d-xl-table-row":"d-xl-table-row--1Lgdn","d-xl-table-cell":"d-xl-table-cell--2spIC","d-xl-flex":"d-xl-flex--OgmfE","d-xl-inline-flex":"d-xl-inline-flex--3ZXpA","d-print-none":"d-print-none--1Zs3Q","d-print-inline":"d-print-inline--2LWZ6","d-print-inline-block":"d-print-inline-block--1y97Y","d-print-block":"d-print-block--3_Kp7","d-print-table":"d-print-table--BIHb0","d-print-table-row":"d-print-table-row--3iPUp","d-print-table-cell":"d-print-table-cell--3VKNK","d-print-flex":"d-print-flex--1zk1X","d-print-inline-flex":"d-print-inline-flex--1P5ph","embed-responsive":"embed-responsive--1l6FB","embed-responsive-item":"embed-responsive-item--2sknV","embed-responsive-21by9":"embed-responsive-21by9--79MAW","embed-responsive-16by9":"embed-responsive-16by9--3mSKN","embed-responsive-4by3":"embed-responsive-4by3--WxnHS","embed-responsive-1by1":"embed-responsive-1by1--1t4gJ","flex-row":"flex-row--1Sw1P","flex-column":"flex-column--1DOSm","flex-row-reverse":"flex-row-reverse--1U81f","flex-column-reverse":"flex-column-reverse--T_flw","flex-wrap":"flex-wrap--2vcGj","flex-nowrap":"flex-nowrap--2jxab","flex-wrap-reverse":"flex-wrap-reverse--3_Vka","flex-fill":"flex-fill--1Hl-I","flex-grow-0":"flex-grow-0--d0gnz","flex-grow-1":"flex-grow-1--3l-VZ","flex-shrink-0":"flex-shrink-0--3vKMB","flex-shrink-1":"flex-shrink-1--2Yszn","justify-content-start":"justify-content-start--2A0o8","justify-content-end":"justify-content-end--2i78G","justify-content-center":"justify-content-center--3B6VL","justify-content-between":"justify-content-between--2Nw83","justify-content-around":"justify-content-around--2Y-FI","align-items-start":"align-items-start--2KV2f","align-items-end":"align-items-end--1XIcC","align-items-center":"align-items-center--Wfzzr","align-items-baseline":"align-items-baseline--kIDD-","align-items-stretch":"align-items-stretch--wvOPH","align-content-start":"align-content-start--kCblv","align-content-end":"align-content-end--33442","align-content-center":"align-content-center--sJzjA","align-content-between":"align-content-between--13GNy","align-content-around":"align-content-around--2mGEc","align-content-stretch":"align-content-stretch--34usL","align-self-auto":"align-self-auto--1Ss3_","align-self-start":"align-self-start--eBD7f","align-self-end":"align-self-end--1pvDj","align-self-center":"align-self-center--1pNQX","align-self-baseline":"align-self-baseline--3_HEb","align-self-stretch":"align-self-stretch--1z-tN","flex-sm-row":"flex-sm-row--r7cFn","flex-sm-column":"flex-sm-column--2zuv8","flex-sm-row-reverse":"flex-sm-row-reverse--3nQKb","flex-sm-column-reverse":"flex-sm-column-reverse--eBdSW","flex-sm-wrap":"flex-sm-wrap--3EbMG","flex-sm-nowrap":"flex-sm-nowrap--rV38M","flex-sm-wrap-reverse":"flex-sm-wrap-reverse--yBYs7","flex-sm-fill":"flex-sm-fill--2zvAq","flex-sm-grow-0":"flex-sm-grow-0--15MyF","flex-sm-grow-1":"flex-sm-grow-1--2XhwE","flex-sm-shrink-0":"flex-sm-shrink-0--3l2o6","flex-sm-shrink-1":"flex-sm-shrink-1--1r8cB","justify-content-sm-start":"justify-content-sm-start--3pQZc","justify-content-sm-end":"justify-content-sm-end--3K-rk","justify-content-sm-center":"justify-content-sm-center--1VvNG","justify-content-sm-between":"justify-content-sm-between--3vOTK","justify-content-sm-around":"justify-content-sm-around--jYZ0r","align-items-sm-start":"align-items-sm-start--3KYo7","align-items-sm-end":"align-items-sm-end--Xp7jS","align-items-sm-center":"align-items-sm-center--vS4B8","align-items-sm-baseline":"align-items-sm-baseline--2muRt","align-items-sm-stretch":"align-items-sm-stretch--3ncep","align-content-sm-start":"align-content-sm-start--2tMpN","align-content-sm-end":"align-content-sm-end--38tsi","align-content-sm-center":"align-content-sm-center--1ZaSh","align-content-sm-between":"align-content-sm-between--1ksEI","align-content-sm-around":"align-content-sm-around--dXlgp","align-content-sm-stretch":"align-content-sm-stretch--wQOSE","align-self-sm-auto":"align-self-sm-auto--1599f","align-self-sm-start":"align-self-sm-start--18v9K","align-self-sm-end":"align-self-sm-end--psZ-U","align-self-sm-center":"align-self-sm-center--34uul","align-self-sm-baseline":"align-self-sm-baseline--3bOib","align-self-sm-stretch":"align-self-sm-stretch--8hTnf","flex-md-row":"flex-md-row--3invn","flex-md-column":"flex-md-column--20OUh","flex-md-row-reverse":"flex-md-row-reverse--1tycn","flex-md-column-reverse":"flex-md-column-reverse--2Jfb6","flex-md-wrap":"flex-md-wrap--6EFGY","flex-md-nowrap":"flex-md-nowrap--37k9e","flex-md-wrap-reverse":"flex-md-wrap-reverse--12c8j","flex-md-fill":"flex-md-fill--bmfk7","flex-md-grow-0":"flex-md-grow-0--PYOHw","flex-md-grow-1":"flex-md-grow-1--AlGwg","flex-md-shrink-0":"flex-md-shrink-0--2EdcN","flex-md-shrink-1":"flex-md-shrink-1--3z6rR","justify-content-md-start":"justify-content-md-start--1s36Y","justify-content-md-end":"justify-content-md-end--x8Td3","justify-content-md-center":"justify-content-md-center--20l73","justify-content-md-between":"justify-content-md-between--1LyKG","justify-content-md-around":"justify-content-md-around--1QDgM","align-items-md-start":"align-items-md-start--1lqKh","align-items-md-end":"align-items-md-end--25RM8","align-items-md-center":"align-items-md-center--2pLyI","align-items-md-baseline":"align-items-md-baseline--1KHHX","align-items-md-stretch":"align-items-md-stretch--3t2gB","align-content-md-start":"align-content-md-start--3cVNV","align-content-md-end":"align-content-md-end--3zU5G","align-content-md-center":"align-content-md-center--E4GT_","align-content-md-between":"align-content-md-between--1JPLR","align-content-md-around":"align-content-md-around--2h-nY","align-content-md-stretch":"align-content-md-stretch--3H8S7","align-self-md-auto":"align-self-md-auto--1YIQC","align-self-md-start":"align-self-md-start--2ZwkY","align-self-md-end":"align-self-md-end--1WGiW","align-self-md-center":"align-self-md-center--293PC","align-self-md-baseline":"align-self-md-baseline--20X6o","align-self-md-stretch":"align-self-md-stretch--1ELm5","flex-lg-row":"flex-lg-row--2EmG9","flex-lg-column":"flex-lg-column--2sTU1","flex-lg-row-reverse":"flex-lg-row-reverse--31H_y","flex-lg-column-reverse":"flex-lg-column-reverse--1OxtB","flex-lg-wrap":"flex-lg-wrap--3mYPE","flex-lg-nowrap":"flex-lg-nowrap--1kMOY","flex-lg-wrap-reverse":"flex-lg-wrap-reverse--sxytj","flex-lg-fill":"flex-lg-fill--34Lgw","flex-lg-grow-0":"flex-lg-grow-0--3Z9gB","flex-lg-grow-1":"flex-lg-grow-1--LfarO","flex-lg-shrink-0":"flex-lg-shrink-0--1c11W","flex-lg-shrink-1":"flex-lg-shrink-1--1bjh2","justify-content-lg-start":"justify-content-lg-start--3wtbh","justify-content-lg-end":"justify-content-lg-end--1Y2p3","justify-content-lg-center":"justify-content-lg-center--bWzCA","justify-content-lg-between":"justify-content-lg-between--3jRkP","justify-content-lg-around":"justify-content-lg-around--2WIGn","align-items-lg-start":"align-items-lg-start--3hgkJ","align-items-lg-end":"align-items-lg-end--325Pt","align-items-lg-center":"align-items-lg-center--DR5uQ","align-items-lg-baseline":"align-items-lg-baseline--2-PhX","align-items-lg-stretch":"align-items-lg-stretch--1c6XX","align-content-lg-start":"align-content-lg-start--3IFB1","align-content-lg-end":"align-content-lg-end--31e5p","align-content-lg-center":"align-content-lg-center--2_MgV","align-content-lg-between":"align-content-lg-between--10_Ce","align-content-lg-around":"align-content-lg-around--1j1xT","align-content-lg-stretch":"align-content-lg-stretch--pjpKU","align-self-lg-auto":"align-self-lg-auto--1kuq1","align-self-lg-start":"align-self-lg-start--3hY4f","align-self-lg-end":"align-self-lg-end--1sUaB","align-self-lg-center":"align-self-lg-center--1Qg_7","align-self-lg-baseline":"align-self-lg-baseline--2viUB","align-self-lg-stretch":"align-self-lg-stretch--3gZ44","flex-xl-row":"flex-xl-row--3nps5","flex-xl-column":"flex-xl-column--3C0up","flex-xl-row-reverse":"flex-xl-row-reverse--3R_xJ","flex-xl-column-reverse":"flex-xl-column-reverse--27cLE","flex-xl-wrap":"flex-xl-wrap--2GKVN","flex-xl-nowrap":"flex-xl-nowrap--26CXD","flex-xl-wrap-reverse":"flex-xl-wrap-reverse--gQhL6","flex-xl-fill":"flex-xl-fill--1yQjo","flex-xl-grow-0":"flex-xl-grow-0--2qAKh","flex-xl-grow-1":"flex-xl-grow-1--1-JLE","flex-xl-shrink-0":"flex-xl-shrink-0--12A5A","flex-xl-shrink-1":"flex-xl-shrink-1--1iq5X","justify-content-xl-start":"justify-content-xl-start--2sFML","justify-content-xl-end":"justify-content-xl-end--3y1Cv","justify-content-xl-center":"justify-content-xl-center--3EA9X","justify-content-xl-between":"justify-content-xl-between--3l6zi","justify-content-xl-around":"justify-content-xl-around--xHhFS","align-items-xl-start":"align-items-xl-start--2lshg","align-items-xl-end":"align-items-xl-end--2g4eA","align-items-xl-center":"align-items-xl-center--1P5-v","align-items-xl-baseline":"align-items-xl-baseline--2byu8","align-items-xl-stretch":"align-items-xl-stretch--sWIO7","align-content-xl-start":"align-content-xl-start--WvNnM","align-content-xl-end":"align-content-xl-end--2a22O","align-content-xl-center":"align-content-xl-center--1kLq1","align-content-xl-between":"align-content-xl-between--vlzAw","align-content-xl-around":"align-content-xl-around--1-EJV","align-content-xl-stretch":"align-content-xl-stretch--2frRj","align-self-xl-auto":"align-self-xl-auto--38TWS","align-self-xl-start":"align-self-xl-start--3rGvT","align-self-xl-end":"align-self-xl-end--31YPO","align-self-xl-center":"align-self-xl-center--3OZTN","align-self-xl-baseline":"align-self-xl-baseline--pRLEw","align-self-xl-stretch":"align-self-xl-stretch--1n-HT","float-left":"float-left--IMSta","float-right":"float-right--2l-54","float-none":"float-none--2kwXf","float-sm-left":"float-sm-left--y7Ghd","float-sm-right":"float-sm-right--2qQW1","float-sm-none":"float-sm-none--7whgB","float-md-left":"float-md-left--1V8YM","float-md-right":"float-md-right--1FvWE","float-md-none":"float-md-none--19pl5","float-lg-left":"float-lg-left--3rDOs","float-lg-right":"float-lg-right--1cYw3","float-lg-none":"float-lg-none--2PkYu","float-xl-left":"float-xl-left--3sfs4","float-xl-right":"float-xl-right--3xFSi","float-xl-none":"float-xl-none--2I3q5","position-static":"position-static--3TY2e","position-relative":"position-relative--pK9iC","position-absolute":"position-absolute--3ay9T","position-fixed":"position-fixed--2UDSy","position-sticky":"position-sticky--2rP3B","fixed-top":"fixed-top--1pxgU","fixed-bottom":"fixed-bottom--1-0tO","sticky-top":"sticky-top--30Iea","sr-only":"sr-only--1L_Gn","sr-only-focusable":"sr-only-focusable--1ax7t","shadow-sm":"shadow-sm--23LeO","shadow":"shadow--2eVGH","shadow-lg":"shadow-lg--1gAZg","shadow-none":"shadow-none--27xEG","w-25":"w-25--xFJlB","w-50":"w-50--18ueG","w-75":"w-75--34roi","w-100":"w-100--1GRRx","w-auto":"w-auto--1FSI3","h-25":"h-25--3j65d","h-50":"h-50--2Uc8X","h-75":"h-75--1HE9k","h-100":"h-100--1t2xo","h-auto":"h-auto--1aU3Z","mw-100":"mw-100--1HDd6","mh-100":"mh-100--337Ax","m-0":"m-0--_7y0k","mt-0":"mt-0--2YGSp","my-0":"my-0--1b7Ky","mr-0":"mr-0--3pFGi","mx-0":"mx-0--3stPl","mb-0":"mb-0--2QQPB","ml-0":"ml-0--1tTAs","m-1":"m-1--360gr","mt-1":"mt-1--37ANH","my-1":"my-1--1nMON","mr-1":"mr-1--2lj7J","mx-1":"mx-1--31_WK","mb-1":"mb-1--tGY9W","ml-1":"ml-1--3aTA4","m-2":"m-2--SnQpQ","mt-2":"mt-2--3vErb","my-2":"my-2--1w8nT","mr-2":"mr-2--1A_YX","mx-2":"mx-2--1gOiz","mb-2":"mb-2--UAkfA","ml-2":"ml-2--2Q0Zq","m-3":"m-3--3WgYW","mt-3":"mt-3--2S37G","my-3":"my-3--2HwrO","mr-3":"mr-3--3shSy","mx-3":"mx-3--3dhK4","mb-3":"mb-3--XshBb","ml-3":"ml-3--x0Zi9","m-4":"m-4--3wyOU","mt-4":"mt-4--kAoxT","my-4":"my-4--1F0nl","mr-4":"mr-4--3hC28","mx-4":"mx-4--2pZ7M","mb-4":"mb-4--2IWSS","ml-4":"ml-4--1W6p9","m-5":"m-5--13E96","mt-5":"mt-5--e6ttb","my-5":"my-5--38UZL","mr-5":"mr-5--1wbLk","mx-5":"mx-5--1aNuE","mb-5":"mb-5--1dgh8","ml-5":"ml-5--1b5aL","p-0":"p-0--1E6mQ","pt-0":"pt-0--dS4mj","py-0":"py-0--3s1ZT","pr-0":"pr-0--1EHFW","px-0":"px-0--3pSmb","pb-0":"pb-0--3yjMp","pl-0":"pl-0--34VVf","p-1":"p-1--2usqU","pt-1":"pt-1--SAhn4","py-1":"py-1--1QyZy","pr-1":"pr-1--TNZFL","px-1":"px-1--3-QAU","pb-1":"pb-1--14cgZ","pl-1":"pl-1--iAbc3","p-2":"p-2--Mk7qk","pt-2":"pt-2--3o-gv","py-2":"py-2--3VShN","pr-2":"pr-2--2N8Xd","px-2":"px-2--1uwTk","pb-2":"pb-2--2l5Pu","pl-2":"pl-2--2qydB","p-3":"p-3--2h_w8","pt-3":"pt-3--1T9gZ","py-3":"py-3--1h5y4","pr-3":"pr-3--2y9PQ","px-3":"px-3--3W-Zf","pb-3":"pb-3--3Up8g","pl-3":"pl-3--dwOu-","p-4":"p-4--12Li0","pt-4":"pt-4--Ssc5K","py-4":"py-4--3zMP_","pr-4":"pr-4--17efY","px-4":"px-4--1DS3n","pb-4":"pb-4--2t9_H","pl-4":"pl-4--FSMUc","p-5":"p-5--1kDM7","pt-5":"pt-5--2yIcD","py-5":"py-5--1ElZr","pr-5":"pr-5--3IqVB","px-5":"px-5--2bAER","pb-5":"pb-5--16oyo","pl-5":"pl-5--1XMgT","m-auto":"m-auto--2pD1h","mt-auto":"mt-auto--2vrm3","my-auto":"my-auto--1LmR2","mr-auto":"mr-auto--2elqR","mx-auto":"mx-auto--3N2L0","mb-auto":"mb-auto--1MXyz","ml-auto":"ml-auto--3DYCk","m-sm-0":"m-sm-0--uG8JE","mt-sm-0":"mt-sm-0--3Ka05","my-sm-0":"my-sm-0--2Q3Lm","mr-sm-0":"mr-sm-0--2zyC4","mx-sm-0":"mx-sm-0--1D1w7","mb-sm-0":"mb-sm-0--1mERJ","ml-sm-0":"ml-sm-0--1DUU6","m-sm-1":"m-sm-1--2a3gQ","mt-sm-1":"mt-sm-1--1A-uc","my-sm-1":"my-sm-1--30-9x","mr-sm-1":"mr-sm-1--3TKVB","mx-sm-1":"mx-sm-1--32Q5N","mb-sm-1":"mb-sm-1--A_3hi","ml-sm-1":"ml-sm-1--3vT3N","m-sm-2":"m-sm-2--3kAh2","mt-sm-2":"mt-sm-2--3-Wx8","my-sm-2":"my-sm-2--1VZ7b","mr-sm-2":"mr-sm-2--3TihW","mx-sm-2":"mx-sm-2--49mBs","mb-sm-2":"mb-sm-2--1nQfY","ml-sm-2":"ml-sm-2--2pROC","m-sm-3":"m-sm-3--qxz2Q","mt-sm-3":"mt-sm-3--3aQq8","my-sm-3":"my-sm-3--2DVJ5","mr-sm-3":"mr-sm-3--3WR10","mx-sm-3":"mx-sm-3--1YzaK","mb-sm-3":"mb-sm-3--27dF2","ml-sm-3":"ml-sm-3--3humK","m-sm-4":"m-sm-4--nzs-W","mt-sm-4":"mt-sm-4--Tg7DT","my-sm-4":"my-sm-4--10SFA","mr-sm-4":"mr-sm-4--eRaaC","mx-sm-4":"mx-sm-4--T2rAG","mb-sm-4":"mb-sm-4--3Ofvn","ml-sm-4":"ml-sm-4--k5uSE","m-sm-5":"m-sm-5--1ZRsP","mt-sm-5":"mt-sm-5--18YJM","my-sm-5":"my-sm-5--3TH7i","mr-sm-5":"mr-sm-5--3T_LO","mx-sm-5":"mx-sm-5--3HlAn","mb-sm-5":"mb-sm-5--24-Hs","ml-sm-5":"ml-sm-5--12A8s","p-sm-0":"p-sm-0--1yX_1","pt-sm-0":"pt-sm-0--2cpLB","py-sm-0":"py-sm-0--2Wd0r","pr-sm-0":"pr-sm-0--3vxDl","px-sm-0":"px-sm-0--fBQ2S","pb-sm-0":"pb-sm-0--2emxl","pl-sm-0":"pl-sm-0--1hWQT","p-sm-1":"p-sm-1--2QjoP","pt-sm-1":"pt-sm-1--QjZ8g","py-sm-1":"py-sm-1--1I4qV","pr-sm-1":"pr-sm-1--eeQqo","px-sm-1":"px-sm-1--1jP8B","pb-sm-1":"pb-sm-1--3V0U3","pl-sm-1":"pl-sm-1--3nkzv","p-sm-2":"p-sm-2--3zONR","pt-sm-2":"pt-sm-2--juw2E","py-sm-2":"py-sm-2--2NJZm","pr-sm-2":"pr-sm-2--2ZUvI","px-sm-2":"px-sm-2--1ZlTl","pb-sm-2":"pb-sm-2--2Jdys","pl-sm-2":"pl-sm-2--32Nzg","p-sm-3":"p-sm-3--2zUH3","pt-sm-3":"pt-sm-3--uir0u","py-sm-3":"py-sm-3--39_JO","pr-sm-3":"pr-sm-3--zY_G1","px-sm-3":"px-sm-3--17ls6","pb-sm-3":"pb-sm-3--1bC73","pl-sm-3":"pl-sm-3--2W0mN","p-sm-4":"p-sm-4--37GXU","pt-sm-4":"pt-sm-4--1zZi6","py-sm-4":"py-sm-4--1zqrt","pr-sm-4":"pr-sm-4--319Wt","px-sm-4":"px-sm-4--1-Ozf","pb-sm-4":"pb-sm-4--ffalz","pl-sm-4":"pl-sm-4--vKgWg","p-sm-5":"p-sm-5--2-xJ5","pt-sm-5":"pt-sm-5--23l6j","py-sm-5":"py-sm-5--3Od8H","pr-sm-5":"pr-sm-5--BDV-g","px-sm-5":"px-sm-5--1QAGs","pb-sm-5":"pb-sm-5--12YKg","pl-sm-5":"pl-sm-5--17MPP","m-sm-auto":"m-sm-auto--2MqfO","mt-sm-auto":"mt-sm-auto--2Rb4V","my-sm-auto":"my-sm-auto--oaFjn","mr-sm-auto":"mr-sm-auto--y6I2w","mx-sm-auto":"mx-sm-auto--1OS_A","mb-sm-auto":"mb-sm-auto--3oIMj","ml-sm-auto":"ml-sm-auto--NiR7G","m-md-0":"m-md-0--3xuWc","mt-md-0":"mt-md-0--1xt4E","my-md-0":"my-md-0--1iQIl","mr-md-0":"mr-md-0--5zMhR","mx-md-0":"mx-md-0--1xFap","mb-md-0":"mb-md-0--2Fouo","ml-md-0":"ml-md-0--3r3YM","m-md-1":"m-md-1--KqGJf","mt-md-1":"mt-md-1--erlrs","my-md-1":"my-md-1--1ufsj","mr-md-1":"mr-md-1--2Upv5","mx-md-1":"mx-md-1--jDyA7","mb-md-1":"mb-md-1--2OFWp","ml-md-1":"ml-md-1--10xm1","m-md-2":"m-md-2--3ed6m","mt-md-2":"mt-md-2--2q_Zb","my-md-2":"my-md-2--3G2Co","mr-md-2":"mr-md-2--dggxX","mx-md-2":"mx-md-2--1U9a8","mb-md-2":"mb-md-2--3CAnl","ml-md-2":"ml-md-2--1Biza","m-md-3":"m-md-3--1AKoE","mt-md-3":"mt-md-3--8QRvL","my-md-3":"my-md-3--dBAeI","mr-md-3":"mr-md-3--2hMkl","mx-md-3":"mx-md-3--3-oVl","mb-md-3":"mb-md-3--3sbmM","ml-md-3":"ml-md-3--3Gg3H","m-md-4":"m-md-4--13DHb","mt-md-4":"mt-md-4--1Wzjn","my-md-4":"my-md-4--3J77S","mr-md-4":"mr-md-4--3QA9O","mx-md-4":"mx-md-4--1TMn-","mb-md-4":"mb-md-4--30ewe","ml-md-4":"ml-md-4--16iZZ","m-md-5":"m-md-5--1V8TM","mt-md-5":"mt-md-5--3YMU-","my-md-5":"my-md-5--A8tOc","mr-md-5":"mr-md-5--2nwO2","mx-md-5":"mx-md-5--3Q8bv","mb-md-5":"mb-md-5--3gr2d","ml-md-5":"ml-md-5--3Ddy5","p-md-0":"p-md-0--3y2sy","pt-md-0":"pt-md-0--2osph","py-md-0":"py-md-0--ed77n","pr-md-0":"pr-md-0--2OiD7","px-md-0":"px-md-0--ZZz9T","pb-md-0":"pb-md-0--3lJvf","pl-md-0":"pl-md-0--3c67Z","p-md-1":"p-md-1--1g7II","pt-md-1":"pt-md-1--3Vg37","py-md-1":"py-md-1--2hS8k","pr-md-1":"pr-md-1--VVL2b","px-md-1":"px-md-1--3vRa7","pb-md-1":"pb-md-1--1ee9j","pl-md-1":"pl-md-1--qSoui","p-md-2":"p-md-2--48y7F","pt-md-2":"pt-md-2--18Y1Y","py-md-2":"py-md-2--JdC2q","pr-md-2":"pr-md-2--2C2ol","px-md-2":"px-md-2--3JOjx","pb-md-2":"pb-md-2--3Y9LP","pl-md-2":"pl-md-2--VsGon","p-md-3":"p-md-3--24RMp","pt-md-3":"pt-md-3--2GzvC","py-md-3":"py-md-3--1QwYP","pr-md-3":"pr-md-3--2zJa1","px-md-3":"px-md-3--2La_c","pb-md-3":"pb-md-3--1LEYd","pl-md-3":"pl-md-3--2b12s","p-md-4":"p-md-4--1z2o6","pt-md-4":"pt-md-4--3L8pn","py-md-4":"py-md-4--xtIDQ","pr-md-4":"pr-md-4--19lzK","px-md-4":"px-md-4--1FPRX","pb-md-4":"pb-md-4--1kC0q","pl-md-4":"pl-md-4--RovQh","p-md-5":"p-md-5--3sUEh","pt-md-5":"pt-md-5--39sRw","py-md-5":"py-md-5--1a6rM","pr-md-5":"pr-md-5--1QpFH","px-md-5":"px-md-5--1eAuG","pb-md-5":"pb-md-5--2I8en","pl-md-5":"pl-md-5--3cp8U","m-md-auto":"m-md-auto--eEIaQ","mt-md-auto":"mt-md-auto--3ca-7","my-md-auto":"my-md-auto--6Gc2L","mr-md-auto":"mr-md-auto--2Js2A","mx-md-auto":"mx-md-auto--3afqn","mb-md-auto":"mb-md-auto--z4YRI","ml-md-auto":"ml-md-auto--LsjiX","m-lg-0":"m-lg-0--1WMie","mt-lg-0":"mt-lg-0--SaA0n","my-lg-0":"my-lg-0--2mNvl","mr-lg-0":"mr-lg-0--1W8p7","mx-lg-0":"mx-lg-0--3chdY","mb-lg-0":"mb-lg-0--25Mmt","ml-lg-0":"ml-lg-0--kKZMb","m-lg-1":"m-lg-1--24815","mt-lg-1":"mt-lg-1--2aXiU","my-lg-1":"my-lg-1--jsXnu","mr-lg-1":"mr-lg-1--3nIep","mx-lg-1":"mx-lg-1--3WkN3","mb-lg-1":"mb-lg-1--2w84r","ml-lg-1":"ml-lg-1--1lLx0","m-lg-2":"m-lg-2--1LkGG","mt-lg-2":"mt-lg-2--1MTQT","my-lg-2":"my-lg-2--1dCmH","mr-lg-2":"mr-lg-2--2rseZ","mx-lg-2":"mx-lg-2--1MI7g","mb-lg-2":"mb-lg-2--2ouha","ml-lg-2":"ml-lg-2--2dIlf","m-lg-3":"m-lg-3--3I3tg","mt-lg-3":"mt-lg-3--2NX4Q","my-lg-3":"my-lg-3--2BcfI","mr-lg-3":"mr-lg-3--TDs1p","mx-lg-3":"mx-lg-3--B81q-","mb-lg-3":"mb-lg-3--3Rpc0","ml-lg-3":"ml-lg-3--2DvLv","m-lg-4":"m-lg-4--19bPh","mt-lg-4":"mt-lg-4--ZxKOU","my-lg-4":"my-lg-4--1ggcC","mr-lg-4":"mr-lg-4--JWjcQ","mx-lg-4":"mx-lg-4--1STaL","mb-lg-4":"mb-lg-4--3AJ6i","ml-lg-4":"ml-lg-4--29HWl","m-lg-5":"m-lg-5--3UfbW","mt-lg-5":"mt-lg-5--27mdP","my-lg-5":"my-lg-5--28M_X","mr-lg-5":"mr-lg-5--F1nb_","mx-lg-5":"mx-lg-5--W1u3b","mb-lg-5":"mb-lg-5--3IeM0","ml-lg-5":"ml-lg-5--2DdmO","p-lg-0":"p-lg-0--XbMq_","pt-lg-0":"pt-lg-0--3HSaC","py-lg-0":"py-lg-0--2xdHm","pr-lg-0":"pr-lg-0--1Iz93","px-lg-0":"px-lg-0--2Onto","pb-lg-0":"pb-lg-0--3kOXK","pl-lg-0":"pl-lg-0--3if4r","p-lg-1":"p-lg-1--2XGFB","pt-lg-1":"pt-lg-1--2bl37","py-lg-1":"py-lg-1--2_Cxj","pr-lg-1":"pr-lg-1--20voU","px-lg-1":"px-lg-1--2mgoU","pb-lg-1":"pb-lg-1--3Kb4N","pl-lg-1":"pl-lg-1--3disx","p-lg-2":"p-lg-2--1v_Ho","pt-lg-2":"pt-lg-2--2RSI7","py-lg-2":"py-lg-2--colzN","pr-lg-2":"pr-lg-2--3t0DH","px-lg-2":"px-lg-2--2vlMI","pb-lg-2":"pb-lg-2--3ZtC0","pl-lg-2":"pl-lg-2--RnrSK","p-lg-3":"p-lg-3--1v7TX","pt-lg-3":"pt-lg-3--2t7HX","py-lg-3":"py-lg-3--3NwJm","pr-lg-3":"pr-lg-3--1QoQH","px-lg-3":"px-lg-3--1aNN6","pb-lg-3":"pb-lg-3--15YDE","pl-lg-3":"pl-lg-3--1-DXD","p-lg-4":"p-lg-4--11XEm","pt-lg-4":"pt-lg-4--3Fn3c","py-lg-4":"py-lg-4--1tGHH","pr-lg-4":"pr-lg-4--CSyhB","px-lg-4":"px-lg-4--KyK_X","pb-lg-4":"pb-lg-4--12JPU","pl-lg-4":"pl-lg-4--2DG9b","p-lg-5":"p-lg-5--357Hy","pt-lg-5":"pt-lg-5--Hvw3b","py-lg-5":"py-lg-5--2-H_S","pr-lg-5":"pr-lg-5--3ceHH","px-lg-5":"px-lg-5--375U5","pb-lg-5":"pb-lg-5--27CEp","pl-lg-5":"pl-lg-5--3AJHo","m-lg-auto":"m-lg-auto--2WkMu","mt-lg-auto":"mt-lg-auto--2Et49","my-lg-auto":"my-lg-auto--1hIqm","mr-lg-auto":"mr-lg-auto--3HJtY","mx-lg-auto":"mx-lg-auto--OqBYO","mb-lg-auto":"mb-lg-auto--22UTt","ml-lg-auto":"ml-lg-auto--2oh5v","m-xl-0":"m-xl-0--2Ws83","mt-xl-0":"mt-xl-0--njt9t","my-xl-0":"my-xl-0--117Nw","mr-xl-0":"mr-xl-0--1vA2e","mx-xl-0":"mx-xl-0--3eD-r","mb-xl-0":"mb-xl-0--3VwBN","ml-xl-0":"ml-xl-0--328hB","m-xl-1":"m-xl-1--GHGGV","mt-xl-1":"mt-xl-1--1G6Pe","my-xl-1":"my-xl-1--35tML","mr-xl-1":"mr-xl-1--Bnknu","mx-xl-1":"mx-xl-1--1nUC_","mb-xl-1":"mb-xl-1--QJD8h","ml-xl-1":"ml-xl-1--2PKik","m-xl-2":"m-xl-2--3Etg_","mt-xl-2":"mt-xl-2--3167-","my-xl-2":"my-xl-2--ciGux","mr-xl-2":"mr-xl-2--2c6if","mx-xl-2":"mx-xl-2--1PFwU","mb-xl-2":"mb-xl-2--wI54L","ml-xl-2":"ml-xl-2--Bot6_","m-xl-3":"m-xl-3--2A6uJ","mt-xl-3":"mt-xl-3--3p34g","my-xl-3":"my-xl-3--3hmkB","mr-xl-3":"mr-xl-3--1zUOW","mx-xl-3":"mx-xl-3--2o_ep","mb-xl-3":"mb-xl-3--39I1Q","ml-xl-3":"ml-xl-3--13QPQ","m-xl-4":"m-xl-4--4ptW7","mt-xl-4":"mt-xl-4--oWwef","my-xl-4":"my-xl-4--13ZWU","mr-xl-4":"mr-xl-4--2_qQN","mx-xl-4":"mx-xl-4--3NDA9","mb-xl-4":"mb-xl-4--QIHut","ml-xl-4":"ml-xl-4--2UA5w","m-xl-5":"m-xl-5--1FJdS","mt-xl-5":"mt-xl-5--vq8yJ","my-xl-5":"my-xl-5--1BeZx","mr-xl-5":"mr-xl-5--kMdHt","mx-xl-5":"mx-xl-5--Kg7Si","mb-xl-5":"mb-xl-5--Hj9GH","ml-xl-5":"ml-xl-5--3GSH-","p-xl-0":"p-xl-0--2UZ5k","pt-xl-0":"pt-xl-0--3ROq_","py-xl-0":"py-xl-0--rhRWW","pr-xl-0":"pr-xl-0--3j58M","px-xl-0":"px-xl-0--2ITSx","pb-xl-0":"pb-xl-0--11Lx4","pl-xl-0":"pl-xl-0--3FPgI","p-xl-1":"p-xl-1--jID99","pt-xl-1":"pt-xl-1--3QfSG","py-xl-1":"py-xl-1--3tHoO","pr-xl-1":"pr-xl-1--26yf8","px-xl-1":"px-xl-1--3W09L","pb-xl-1":"pb-xl-1--3kByL","pl-xl-1":"pl-xl-1--18wSN","p-xl-2":"p-xl-2--38bPC","pt-xl-2":"pt-xl-2--1vCpH","py-xl-2":"py-xl-2--G5u0B","pr-xl-2":"pr-xl-2--3BkK2","px-xl-2":"px-xl-2--30Qao","pb-xl-2":"pb-xl-2--mGDy0","pl-xl-2":"pl-xl-2--28-fQ","p-xl-3":"p-xl-3--1a5KP","pt-xl-3":"pt-xl-3--1SvTd","py-xl-3":"py-xl-3--1YMWf","pr-xl-3":"pr-xl-3---JJ_I","px-xl-3":"px-xl-3--3meMn","pb-xl-3":"pb-xl-3--N-NkQ","pl-xl-3":"pl-xl-3--1EOei","p-xl-4":"p-xl-4--5DUuV","pt-xl-4":"pt-xl-4--wrze9","py-xl-4":"py-xl-4--3ghMx","pr-xl-4":"pr-xl-4--17569","px-xl-4":"px-xl-4--XCaFo","pb-xl-4":"pb-xl-4--3NxQA","pl-xl-4":"pl-xl-4--1CVGQ","p-xl-5":"p-xl-5--3riJt","pt-xl-5":"pt-xl-5--PPljY","py-xl-5":"py-xl-5--1AIvf","pr-xl-5":"pr-xl-5--2G6OZ","px-xl-5":"px-xl-5--c5uBj","pb-xl-5":"pb-xl-5--aqKmC","pl-xl-5":"pl-xl-5--2DAvV","m-xl-auto":"m-xl-auto--3lzeD","mt-xl-auto":"mt-xl-auto--Edhwk","my-xl-auto":"my-xl-auto--2mtc2","mr-xl-auto":"mr-xl-auto--1QFOo","mx-xl-auto":"mx-xl-auto--1JRCO","mb-xl-auto":"mb-xl-auto--2yIor","ml-xl-auto":"ml-xl-auto--UUE3p","text-monospace":"text-monospace--3NJEV","text-justify":"text-justify--1IIqo","text-nowrap":"text-nowrap--8KLsd","text-truncate":"text-truncate--3xojq","text-left":"text-left--GHrzo","text-right":"text-right--2QjmD","text-center":"text-center--23uS_","text-sm-left":"text-sm-left--aWLiD","text-sm-right":"text-sm-right--2Xgwj","text-sm-center":"text-sm-center--1OlB3","text-md-left":"text-md-left--1csQ5","text-md-right":"text-md-right--2iJEL","text-md-center":"text-md-center--Mdau7","text-lg-left":"text-lg-left--3b4H6","text-lg-right":"text-lg-right--3nHIb","text-lg-center":"text-lg-center--3QXR9","text-xl-left":"text-xl-left--3bA86","text-xl-right":"text-xl-right---Ie5V","text-xl-center":"text-xl-center--3virL","text-lowercase":"text-lowercase--1t2wA","text-uppercase":"text-uppercase--3Qzho","text-capitalize":"text-capitalize--2hMz3","font-weight-light":"font-weight-light--2Ds52","font-weight-normal":"font-weight-normal--1IlNk","font-weight-bold":"font-weight-bold--1WJcm","font-italic":"font-italic--2_zSl","text-white":"text-white--2Uu51","text-primary":"text-primary--dy3aC","text-secondary":"text-secondary--1Un1u","text-success":"text-success--1zoIr","text-info":"text-info--28P2I","text-warning":"text-warning--1XejM","text-danger":"text-danger--lWZqm","text-light":"text-light--2t2Ib","text-dark":"text-dark--U-HKu","text-body":"text-body--1lfpQ","text-muted":"text-muted--3DwFM","text-black-50":"text-black-50--w31-1","text-white-50":"text-white-50--3wHNd","text-hide":"text-hide--YfSMQ","visible":"visible--wE3RU","invisible":"invisible--3Yz26","removeCard":"removeCard--2c6Zb","media-image":"media-image--2le7Q"};

/***/ }),

/***/ "./src/blocks.editor.ts":
/*!******************************!*\
  !*** ./src/blocks.editor.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_accordion_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/accordion/accordion */ "./src/blocks/accordion/accordion.tsx");
/* harmony import */ var _blocks_alert_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/alert/alert */ "./src/blocks/alert/alert.tsx");
/* harmony import */ var _blocks_blockquote_blockquote__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/blockquote/blockquote */ "./src/blocks/blockquote/blockquote.tsx");
/* harmony import */ var _blocks_button_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/button/button */ "./src/blocks/button/button.tsx");
/* harmony import */ var _blocks_container_container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/container/container */ "./src/blocks/container/container.tsx");
/* harmony import */ var _blocks_media_media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/media/media */ "./src/blocks/media/media.tsx");
/* harmony import */ var _blocks_type_type__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/type/type */ "./src/blocks/type/type.tsx");
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

/***/ "./src/blocks/accordion/accordion.tsx":
/*!********************************************!*\
  !*** ./src/blocks/accordion/accordion.tsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, InspectorControls = _b.InspectorControls, RichText = _b.RichText;
var classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
var cx = classNames.bind(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
var attributes = {
    alignment: {
        type: 'string',
    },
    clientId: {
        type: 'string'
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
        selector: '.gbb-accordion .gbb-card',
        query: {
            /*active: {
                type   : 'boolean',
                source  : 'text',
                default: false,
            },*/
            title: {
                type: 'string',
                source: 'text',
                selector: '.gbb-card-header h5',
            },
            body: {
                type: 'array',
                selector: '.gbb-card-body',
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
        default: 'light'
    },
};
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
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_1__["default"].accordion,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Accordion'),
        __('Collapse'),
    ],
    attributes: attributes,
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        var _a = props.attributes, alignment = _a.alignment, clientId = _a.clientId, content = _a.content, margin = _a.margin, theme = _a.theme, setAttributes = props.setAttributes;
        // Set the block identifier
        setAttributes({ clientId: props.clientId });
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
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", null, __('Theme')),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("form", { onSubmit: setTheme, style: { textAlign: alignment } },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: theme, onChange: setTheme },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "primary" }, "Primary"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "secondary" }, "Secondary"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "success" }, "Success"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "danger" }, "Danger"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "warning" }, "Warning"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "info" }, "Info"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "light" }, "Light"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "dark" }, "Dark")))))),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](AlignmentToolbar, { value: alignment, onChange: function (newAlignment) {
                        setAttributes({ alignment: newAlignment });
                    } })),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: props.className },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "gbb-accordion " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["accordion"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__[margin], style: { textAlign: alignment } },
                    content.map(function (card, key) {
                        return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "gbb-card " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card"] },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: cx('removeCard', 'float-right') },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", { className: cx('btn', 'btn-secondary', 'btn-sm'), onClick: function () { return removeCard(key); } },
                                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", { className: "dashicons dashicons-minus" }),
                                    " ",
                                    __('Remove'))),
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "gbb-card-header " + cx('card-header', "bg-" + theme, { 'text-white': (theme !== 'light') }), "data-toggle": "collapse", "data-target": "#collapse" + clientId + "-" + key, "aria-expanded": "false", "aria-controls": "collapse" + key },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { tagName: "h5", className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mb-0"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["h5"], onChange: function (title) { return onChangeCardTitle(key, title); }, value: card.title })),
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { id: "collapse" + clientId + "-" + key, className: "collapse" },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: "gbb-card-header " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card-body"], tagName: "div", onChange: function (body) { return onChangeCardBody(key, body); }, value: card.body })));
                    }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "addCard " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["text-center"] },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("button", { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["btn-secondary"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mt-3"], onClick: addCard },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", { className: "dashicons dashicons-plus" }),
                            " ",
                            __('Add')))))));
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
        var _a = props.attributes, alignment = _a.alignment, clientId = _a.clientId, content = _a.content, margin = _a.margin, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "gbb-accordion " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["accordion"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__[margin], style: { textAlign: alignment } }, content.map(function (card, key) {
                return react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "gbb-card " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card"] },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "gbb-card-header " + cx('card-header', "bg-" + theme, { 'text-white': (theme !== 'light') }), "data-toggle": "collapse", "data-target": "#collapse" + clientId + "-" + key },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mb-0"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["h5"], tagName: "h5", value: card.title })),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { id: "collapse" + clientId + "-" + key, className: "collapse" },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: "gbb-card-body " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["card-body"], tagName: "div", value: card.body })));
            }))));
    },
});


/***/ }),

/***/ "./src/blocks/alert/alert.tsx":
/*!************************************!*\
  !*** ./src/blocks/alert/alert.tsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_bootstrap_js_src_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/bootstrap/js/src/alert */ "./node_modules/bootstrap/js/src/alert.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.

// Import JS.



var __ = wp.i18n.__; // Import __() from wp.i18n
var _a = wp.blocks, registerBlockType = _a.registerBlockType, createBlock = _a.createBlock; // Import registerBlockType() from wp.blocks
var _b = wp.components, CheckboxControl = _b.CheckboxControl, PanelBody = _b.PanelBody, PanelRow = _b.PanelRow;
var Fragment = wp.element.Fragment;
var _c = wp.editor, AlignmentToolbar = _c.AlignmentToolbar, BlockControls = _c.BlockControls, ColorPalette = _c.ColorPalette, InspectorControls = _c.InspectorControls, InnerBlocks = _c.InnerBlocks, RichText = _c.RichText;
// Block attributes
var blockAttributes = {
    theme: {
        type: 'string',
        default: 'success'
    },
    textColor: {
        source: 'string',
    },
    title: {
        source: 'text',
        selector: 'h4.alert-heading',
        default: __('Enter an optional title here')
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.content',
        default: __('Enter any text message here')
    },
    isDismissable: {
        type: 'boolean',
    },
    alignment: {
        type: 'string',
    },
};
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
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_2__["default"].alert,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Alert'),
        __('Notification'),
    ],
    attributes: blockAttributes,
    deprecated: [
        {
            attributes: __assign({}, blockAttributes),
            migrate: function (attributes, innerBlocks) {
                return [
                    attributes,
                    [
                        createBlock('core/paragraph', {
                            content: attributes.title,
                        })
                    ].concat(innerBlocks),
                ];
            },
            save: function (props) {
                return react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("p", null, props.attributes.text);
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, isDismissable = _a.isDismissable, margin = _a.margin, title = _a.title, theme = _a.theme, setAttributes = props.setAttributes;
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
        function showThemeForm() {
            return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("form", { onSubmit: setTheme, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("select", { value: theme, onChange: setTheme },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "primary" }, "Primary"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "secondary" }, "Secondary"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "success" }, "Success"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "danger" }, "Danger"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "warning" }, "Warning"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "info" }, "Info"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "light" }, "Light"),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("option", { value: "dark" }, "Dark"))));
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
                        showThemeForm()),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"](CheckboxControl, { label: __('Is dismissable?'), help: __('Can the user hide the alert by clicking a X button on the top right.'), checked: isDismissable, onChange: function (isDismissable) {
                                setAttributes({ isDismissable: isDismissable });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](AlignmentToolbar, { value: alignment, onChange: function (alignment) {
                        setAttributes({ alignment: alignment });
                    } })),
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: props.className },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-" + theme] + " alert alert-dismissible fade show " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__[margin], role: "alert", style: { textAlign: alignment } },
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-heading"], tagName: "h4", multiline: "p", onChange: function (title) {
                            setAttributes({ title: title });
                        }, value: title }),
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText, { tagName: "div", onChange: function (content) {
                            setAttributes({ content: content });
                        }, value: content }),
                    isDismissable &&
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", { type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close" },
                            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7"))))));
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, isDismissable = _a.isDismissable, margin = _a.margin, title = _a.title, theme = _a.theme;
        return (react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-" + theme] + " alert alert-dismissible fade show " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__[margin], role: "alert", style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["alert-heading"], tagName: "h4", value: title }),
                react__WEBPACK_IMPORTED_MODULE_3__["createElement"](RichText.Content, { tagName: "div", value: content }),
                isDismissable &&
                    react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("button", { type: "button", className: "close", "data-dismiss": "alert", "aria-label": "Close" },
                        react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("span", { "aria-hidden": "true" }, "\u00D7")))));
    },
});


/***/ }),

/***/ "./src/blocks/blockquote/blockquote.tsx":
/*!**********************************************!*\
  !*** ./src/blocks/blockquote/blockquote.tsx ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
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
            selector: '.blockquote',
            default: 'Enter your quote here'
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
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("blockquote", { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["blockquote"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__[margin], style: { textAlign: alignment } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["blockquote"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mb-0"], tagName: "p", onChange: function (quote) {
                            setAttributes({ quote: quote });
                        }, value: quote }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["blockquote-footer"], format: "string", tagName: "footer", onChange: function (source) {
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
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["blockquote"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__[margin], style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["blockquote"] + " " + _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["mb-0"], tagName: "p", value: quote }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__["blockquote-footer"], format: "string", tagName: "footer", value: source }))));
    },
});


/***/ }),

/***/ "./src/blocks/button/button.tsx":
/*!**************************************!*\
  !*** ./src/blocks/button/button.tsx ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_bootstrap_js_src_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/bootstrap/js/src/button */ "./node_modules/bootstrap/js/src/button.js");
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
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
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, InspectorControls = _b.InspectorControls, RichText = _b.RichText, URLInput = _b.URLInput;
var classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
var cx = classNames.bind(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
var attributes = {
    alignment: {
        type: 'string',
    },
    caption: {
        type: 'array',
        source: 'children',
        selector: 'div.content',
        default: 'Visit Gutenberg-Unlimited Website'
    },
    isBlockWidth: {
        type: 'boolean',
    },
    isOutline: {
        type: 'boolean',
    },
    margin: {
        type: 'string',
        default: 'my-3'
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
        default: 'https://www.gutenberg-unlimited.org'
    },
};
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
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_3__["default"].button,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Button'),
    ],
    attributes: attributes,
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
        var _a = props.attributes, alignment = _a.alignment, caption = _a.caption, isBlockWidth = _a.isBlockWidth, isOutline = _a.isOutline, margin = _a.margin, size = _a.size, theme = _a.theme, url = _a.url, setAttributes = props.setAttributes;
        function setMargin(event) {
            var selected = event.target.querySelector('option:checked');
            setAttributes({ margin: selected.value });
            event.preventDefault();
        }
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
        function getButtonClasses() {
            var classes = ['btn'];
            classes.push(isOutline ? "btn-outline-" + theme : "btn-" + theme);
            if (size !== '') {
                classes.push("btn-" + size);
            }
            if (isBlockWidth) {
                classes.push("btn-block");
            }
            return classes;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"](Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](InspectorControls, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PanelBody, { title: __('Select options') },
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, __('Margin')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: setMargin },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: margin, onChange: setMargin },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "my-0" }, "No margin"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "my-1" }, "my-1 - Tiny margin"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "my-2" }, "my-2 - Small margin"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "my-3" }, "my-3 - Middle margin"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "my-4" }, "my-4 - Large margin"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, __('Theme')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: setTheme },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: theme, onChange: setTheme },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "primary" }, "Primary"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "secondary" }, "Secondary"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "success" }, "Success"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "danger" }, "Danger"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "warning" }, "Warning"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "info" }, "Info"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "light" }, "Light"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "dark" }, "Dark")))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CheckboxControl, { label: __('Outline Button?'), checked: isOutline, onChange: function (isOutline) {
                                setAttributes({ isOutline: isOutline });
                            } })),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("label", null, __('Size')),
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("form", { onSubmit: setSize },
                            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("select", { value: size, onChange: setSize },
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "" }, "Default"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "sm" }, "Small"),
                                react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("option", { value: "lg" }, "Large")))),
                    react__WEBPACK_IMPORTED_MODULE_1__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_1__["createElement"](CheckboxControl, { label: __('Full width? (.btn-block)'), checked: isBlockWidth, onChange: function (isBlockWidth) {
                                setAttributes({ isBlockWidth: isBlockWidth });
                            } })))),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })),
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { className: props.className, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RichText, { autoFocus: true, className: cx(getButtonClasses(), margin), tagName: "span", multiline: "p", onChange: onChangeCaption, value: caption }),
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](URLInput, { autoFocus: false, className: "button-url", value: url, onChange: function (value) { return setAttributes({ url: value }); } }))));
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
        var _a = props.attributes, alignment = _a.alignment, caption = _a.caption, isBlockWidth = _a.isBlockWidth, isOutline = _a.isOutline, margin = _a.margin, size = _a.size, theme = _a.theme, url = _a.url;
        function getButtonClasses() {
            var classes = ['btn'];
            classes.push(isOutline ? "btn-outline-" + theme : "btn-" + theme);
            if (size !== '') {
                classes.push("btn-" + size);
            }
            if (isBlockWidth) {
                classes.push("btn-block");
            }
            return classes;
        }
        return (react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("div", { style: { textAlign: alignment } },
            react__WEBPACK_IMPORTED_MODULE_1__["createElement"]("a", { href: url, className: cx(getButtonClasses(), margin), role: "button" },
                react__WEBPACK_IMPORTED_MODULE_1__["createElement"](RichText.Content, { tagName: "span", value: caption }))));
    },
});


/***/ }),

/***/ "./src/blocks/container/container.tsx":
/*!********************************************!*\
  !*** ./src/blocks/container/container.tsx ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
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
var _a = wp.editor, InnerBlocks = _a.InnerBlocks, InspectorControls = _a.InspectorControls;
var _b = wp.components, PanelBody = _b.PanelBody, PanelRow = _b.PanelRow;
var classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
var cx = classNames.bind(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
var attributes = {
    alignment: {
        type: 'string',
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.content'
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
};
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
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_1__["default"].container,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Container'),
        __('Grid'),
    ],
    attributes: attributes,
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, margin = _a.margin, setAttributes = props.setAttributes;
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
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: props.className + " " + cx(margin), style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InnerBlocks, null))));
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
        var _a = props.attributes, alignment = _a.alignment, margin = _a.margin;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: cx(margin), style: { textAlign: alignment } },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "" + cx('container') },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](InnerBlocks.Content, null))));
    },
});


/***/ }),

/***/ "./src/blocks/media/media.tsx":
/*!************************************!*\
  !*** ./src/blocks/media/media.tsx ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, InspectorControls = _b.InspectorControls, MediaUpload = _b.MediaUpload, RichText = _b.RichText;
var classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
var cx = classNames.bind(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
var attributes = {
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
};
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
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_1__["default"].media,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Media Object'),
        __('image'),
    ],
    attributes: attributes,
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, imageId = _a.imageId, imageUrl = _a.imageUrl, margin = _a.margin, title = _a.title, setAttributes = props.setAttributes;
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
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: cx('media', margin), style: {
                        textAlign: alignment
                    } },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](MediaUpload, { buttonProps: {
                            className: 'change-image'
                        }, onSelect: function (img) { return setAttributes({
                            imageId: img.id,
                            imageUrl: img.url,
                        }); }, type: "image", value: imageId, render: function (_a) {
                            var open = _a.open;
                            return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: cx("media-image", "mr-3"), onClick: open }, !imageId ?
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "btn btn-secondary" },
                                    _lib_icons__WEBPACK_IMPORTED_MODULE_1__["default"].upload,
                                    " ",
                                    __('Upload image')) :
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", { src: imageUrl })));
                        } }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: cx("media-body") },
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: cx("media-heading", "mt-0"), multiline: "p", tagName: "h5", onChange: function (title) {
                                setAttributes({ title: title });
                            }, value: title }),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: cx("content"), tagName: "div", onChange: function (content) {
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
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", null,
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: cx('media', margin), style: { textAlign: alignment } },
                imageId &&
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("img", { src: imageUrl, className: cx("media-image", "mr-3") }),
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: "media-body" },
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: cx("media-heading", "mt-0"), tagName: "h5", value: title }),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: cx("content"), tagName: "div", value: content })))));
    },
});


/***/ }),

/***/ "./src/blocks/type/type.tsx":
/*!**********************************!*\
  !*** ./src/blocks/type/type.tsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/scss/styles.module.scss */ "./src/assets/scss/styles.module.scss");
/* harmony import */ var _assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/icons */ "./src/lib/icons.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/**
 * BLOCK: bootstrap-blocks
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */
//  Import CSS.



var __ = wp.i18n.__; // Import __() from wp.i18n
var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks
var _a = wp.components, PanelBody = _a.PanelBody, PanelRow = _a.PanelRow;
var Fragment = wp.element.Fragment;
var _b = wp.editor, AlignmentToolbar = _b.AlignmentToolbar, BlockControls = _b.BlockControls, InspectorControls = _b.InspectorControls, RichText = _b.RichText;
var classNames = __webpack_require__(/*! classnames/bind */ "./node_modules/classnames/bind.js");
var cx = classNames.bind(_assets_scss_styles_module_scss__WEBPACK_IMPORTED_MODULE_0__);
var attributes = {
    alignment: {
        type: 'string',
    },
    content: {
        type: 'array',
        source: 'children',
        selector: 'div.type-content'
    },
    margin: {
        type: 'string',
        default: 'my-3'
    },
    type: {
        type: 'string',
        default: 'display-1'
    },
};
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
    icon: _lib_icons__WEBPACK_IMPORTED_MODULE_1__["default"].type,
    category: 'gbb',
    keywords: [
        __('Bootstrap'),
        __('Header'),
        __('Typography'),
    ],
    attributes: attributes,
    /**
     * The edit function describes the structure of your block in the context of the editor.
     * This represents what the editor will render when the block is used.
     *
     * The "edit" property must be a valid function.
     *
     * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
     */
    edit: function (props) {
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, margin = _a.margin, type = _a.type, setAttributes = props.setAttributes;
        function setMargin(event) {
            var selected = event.target.querySelector('option:checked');
            setAttributes({ margin: selected.value });
            event.preventDefault();
        }
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
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "my-5" }, "my-5 - Hugh margin")))),
                    react__WEBPACK_IMPORTED_MODULE_2__["createElement"](PanelRow, null,
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("label", null, __('Theme')),
                        react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("form", { onSubmit: setType },
                            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("select", { value: type, onChange: setType },
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "display-1" }, "Display 1"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "display-2" }, "Display 2"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "display-3" }, "Display 3"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "display-4" }, "Display 4"),
                                react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("option", { value: "lead" }, "Lead")))))),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](BlockControls, null,
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](AlignmentToolbar, { value: alignment, onChange: onChangeAlignment })),
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { className: props.className, style: { textAlign: alignment } },
                react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText, { className: cx('type-content', type, margin), tagName: "div", multiline: "span", onChange: onChangeContent, value: content }))));
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
        var _a = props.attributes, alignment = _a.alignment, content = _a.content, margin = _a.margin, type = _a.type;
        return (react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", { style: { textAlign: alignment } },
            react__WEBPACK_IMPORTED_MODULE_2__["createElement"](RichText.Content, { className: cx('type-content', type, margin), tagName: "div", value: content })));
    },
});


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