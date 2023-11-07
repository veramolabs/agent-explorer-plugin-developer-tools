var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js
var require_classnames = __commonJS({
  "node_modules/.pnpm/classnames@2.3.2/node_modules/classnames/index.js"(exports, module) {
    (function() {
      "use strict";
      var hasOwn = {}.hasOwnProperty;
      var nativeCodeString = "[native code]";
      function classNames2() {
        var classes = [];
        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg)
            continue;
          var argType = typeof arg;
          if (argType === "string" || argType === "number") {
            classes.push(arg);
          } else if (Array.isArray(arg)) {
            if (arg.length) {
              var inner = classNames2.apply(null, arg);
              if (inner) {
                classes.push(inner);
              }
            }
          } else if (argType === "object") {
            if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
              classes.push(arg.toString());
              continue;
            }
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }
        return classes.join(" ");
      }
      if (typeof module !== "undefined" && module.exports) {
        classNames2.default = classNames2;
        module.exports = classNames2;
      } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) {
        define("classnames", [], function() {
          return classNames2;
        });
      } else {
        window.classNames = classNames2;
      }
    })();
  }
});

// node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js
var require_lodash = __commonJS({
  "node_modules/.pnpm/lodash.camelcase@4.3.0/node_modules/lodash.camelcase/index.js"(exports, module) {
    var INFINITY = 1 / 0;
    var symbolTag = "[object Symbol]";
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var rsAstralRange = "\\ud800-\\udfff";
    var rsComboMarksRange = "\\u0300-\\u036f\\ufe20-\\ufe23";
    var rsComboSymbolsRange = "\\u20d0-\\u20f0";
    var rsDingbatRange = "\\u2700-\\u27bf";
    var rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff";
    var rsMathOpRange = "\\xac\\xb1\\xd7\\xf7";
    var rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf";
    var rsPunctuationRange = "\\u2000-\\u206f";
    var rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000";
    var rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde";
    var rsVarRange = "\\ufe0e\\ufe0f";
    var rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]";
    var rsAstral = "[" + rsAstralRange + "]";
    var rsBreak = "[" + rsBreakRange + "]";
    var rsCombo = "[" + rsComboMarksRange + rsComboSymbolsRange + "]";
    var rsDigits = "\\d+";
    var rsDingbat = "[" + rsDingbatRange + "]";
    var rsLower = "[" + rsLowerRange + "]";
    var rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]";
    var rsFitz = "\\ud83c[\\udffb-\\udfff]";
    var rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")";
    var rsNonAstral = "[^" + rsAstralRange + "]";
    var rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}";
    var rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]";
    var rsUpper = "[" + rsUpperRange + "]";
    var rsZWJ = "\\u200d";
    var rsLowerMisc = "(?:" + rsLower + "|" + rsMisc + ")";
    var rsUpperMisc = "(?:" + rsUpper + "|" + rsMisc + ")";
    var rsOptLowerContr = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?";
    var rsOptUpperContr = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?";
    var reOptMod = rsModifier + "?";
    var rsOptVar = "[" + rsVarRange + "]?";
    var rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*";
    var rsSeq = rsOptVar + reOptMod + rsOptJoin;
    var rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq;
    var rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptLowerContr + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsUpperMisc + "+" + rsOptUpperContr + "(?=" + [rsBreak, rsUpper + rsLowerMisc, "$"].join("|") + ")",
      rsUpper + "?" + rsLowerMisc + "+" + rsOptLowerContr,
      rsUpper + "+" + rsOptUpperContr,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var deburredLetters = {
      // Latin-1 Supplement block.
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      // Latin Extended-A block.
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "ss"
    };
    var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array ? array.length : 0;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? void 0 : object[key];
      };
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var objectProto = Object.prototype;
    var objectToString = objectProto.toString;
    var Symbol2 = root.Symbol;
    var symbolProto = Symbol2 ? Symbol2.prototype : void 0;
    var symbolToString = symbolProto ? symbolProto.toString : void 0;
    function baseSlice(array, start, end) {
      var index = -1, length = array.length;
      if (start < 0) {
        start = -start > length ? 0 : length + start;
      }
      end = end > length ? length : end;
      if (end < 0) {
        end += length;
      }
      length = start > end ? 0 : end - start >>> 0;
      start >>>= 0;
      var result = Array(length);
      while (++index < length) {
        result[index] = array[index + start];
      }
      return result;
    }
    function baseToString(value) {
      if (typeof value == "string") {
        return value;
      }
      if (isSymbol(value)) {
        return symbolToString ? symbolToString.call(value) : "";
      }
      var result = value + "";
      return result == "0" && 1 / value == -INFINITY ? "-0" : result;
    }
    function castSlice(array, start, end) {
      var length = array.length;
      end = end === void 0 ? length : end;
      return !start && end >= length ? array : baseSlice(array, start, end);
    }
    function createCaseFirst(methodName) {
      return function(string) {
        string = toString(string);
        var strSymbols = hasUnicode(string) ? stringToArray(string) : void 0;
        var chr = strSymbols ? strSymbols[0] : string.charAt(0);
        var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
        return chr[methodName]() + trailing;
      };
    }
    function createCompounder(callback) {
      return function(string) {
        return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
      };
    }
    function isObjectLike(value) {
      return !!value && typeof value == "object";
    }
    function isSymbol(value) {
      return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
    }
    function toString(value) {
      return value == null ? "" : baseToString(value);
    }
    var camelCase2 = createCompounder(function(result, word, index) {
      word = word.toLowerCase();
      return result + (index ? capitalize(word) : word);
    });
    function capitalize(string) {
      return upperFirst(toString(string).toLowerCase());
    }
    function deburr(string) {
      string = toString(string);
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
    }
    var upperFirst = createCaseFirst("toUpperCase");
    function words(string, pattern, guard) {
      string = toString(string);
      pattern = guard ? void 0 : pattern;
      if (pattern === void 0) {
        return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
      }
      return string.match(pattern) || [];
    }
    module.exports = camelCase2;
  }
});

// external-global-plugin:antd
var require_antd = __commonJS({
  "external-global-plugin:antd"(exports, module) {
    module.exports = window.antd;
  }
});

// external-global-plugin:@veramo-community/veramo-react
var require_veramo_react = __commonJS({
  "external-global-plugin:@veramo-community/veramo-react"(exports, module) {
    module.exports = window.veramoreact;
  }
});

// external-global-plugin:react-query
var require_react_query = __commonJS({
  "external-global-plugin:react-query"(exports, module) {
    module.exports = window.reactquery;
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js
var require_alea = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/alea.js"(exports, module) {
    (function(global2, module2, define2) {
      function Alea(seed) {
        var me = this, mash = Mash();
        me.next = function() {
          var t = 2091639 * me.s0 + me.c * 23283064365386963e-26;
          me.s0 = me.s1;
          me.s1 = me.s2;
          return me.s2 = t - (me.c = t | 0);
        };
        me.c = 1;
        me.s0 = mash(" ");
        me.s1 = mash(" ");
        me.s2 = mash(" ");
        me.s0 -= mash(seed);
        if (me.s0 < 0) {
          me.s0 += 1;
        }
        me.s1 -= mash(seed);
        if (me.s1 < 0) {
          me.s1 += 1;
        }
        me.s2 -= mash(seed);
        if (me.s2 < 0) {
          me.s2 += 1;
        }
        mash = null;
      }
      function copy(f, t) {
        t.c = f.c;
        t.s0 = f.s0;
        t.s1 = f.s1;
        t.s2 = f.s2;
        return t;
      }
      function impl(seed, opts) {
        var xg = new Alea(seed), state = opts && opts.state, prng = xg.next;
        prng.int32 = function() {
          return xg.next() * 4294967296 | 0;
        };
        prng.double = function() {
          return prng() + (prng() * 2097152 | 0) * 11102230246251565e-32;
        };
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      function Mash() {
        var n = 4022871197;
        var mash = function(data) {
          data = String(data);
          for (var i = 0; i < data.length; i++) {
            n += data.charCodeAt(i);
            var h = 0.02519603282416938 * n;
            n = h >>> 0;
            h -= n;
            h *= n;
            n = h >>> 0;
            h -= n;
            n += h * 4294967296;
          }
          return (n >>> 0) * 23283064365386963e-26;
        };
        return mash;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.alea = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js
var require_xor128 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor128.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.next = function() {
          var t = me.x ^ me.x << 11;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          return me.w ^= me.w >>> 19 ^ t ^ t >>> 8;
        };
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top4 = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top4 + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor128 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js
var require_xorwow = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorwow.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var t = me.x ^ me.x >>> 2;
          me.x = me.y;
          me.y = me.z;
          me.z = me.w;
          me.w = me.v;
          return (me.d = me.d + 362437 | 0) + (me.v = me.v ^ me.v << 4 ^ (t ^ t << 1)) | 0;
        };
        me.x = 0;
        me.y = 0;
        me.z = 0;
        me.w = 0;
        me.v = 0;
        if (seed === (seed | 0)) {
          me.x = seed;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 64; k++) {
          me.x ^= strseed.charCodeAt(k) | 0;
          if (k == strseed.length) {
            me.d = me.x << 10 ^ me.x >>> 4;
          }
          me.next();
        }
      }
      function copy(f, t) {
        t.x = f.x;
        t.y = f.y;
        t.z = f.z;
        t.w = f.w;
        t.v = f.v;
        t.d = f.d;
        return t;
      }
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top4 = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top4 + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorwow = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js
var require_xorshift7 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xorshift7.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var X = me.x, i = me.i, t, v, w;
          t = X[i];
          t ^= t >>> 7;
          v = t ^ t << 24;
          t = X[i + 1 & 7];
          v ^= t ^ t >>> 10;
          t = X[i + 3 & 7];
          v ^= t ^ t >>> 3;
          t = X[i + 4 & 7];
          v ^= t ^ t << 7;
          t = X[i + 7 & 7];
          t = t ^ t << 13;
          v ^= t ^ t << 9;
          X[i] = v;
          me.i = i + 1 & 7;
          return v;
        };
        function init(me2, seed2) {
          var j, w, X = [];
          if (seed2 === (seed2 | 0)) {
            w = X[0] = seed2;
          } else {
            seed2 = "" + seed2;
            for (j = 0; j < seed2.length; ++j) {
              X[j & 7] = X[j & 7] << 15 ^ seed2.charCodeAt(j) + X[j + 1 & 7] << 13;
            }
          }
          while (X.length < 8)
            X.push(0);
          for (j = 0; j < 8 && X[j] === 0; ++j)
            ;
          if (j == 8)
            w = X[7] = -1;
          else
            w = X[j];
          me2.x = X;
          me2.i = 0;
          for (j = 256; j > 0; --j) {
            me2.next();
          }
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.x = f.x.slice();
        t.i = f.i;
        return t;
      }
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top4 = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top4 + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.x)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xorshift7 = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js
var require_xor4096 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/xor4096.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this;
        me.next = function() {
          var w = me.w, X = me.X, i = me.i, t, v;
          me.w = w = w + 1640531527 | 0;
          v = X[i + 34 & 127];
          t = X[i = i + 1 & 127];
          v ^= v << 13;
          t ^= t << 17;
          v ^= v >>> 15;
          t ^= t >>> 12;
          v = X[i] = v ^ t;
          me.i = i;
          return v + (w ^ w >>> 16) | 0;
        };
        function init(me2, seed2) {
          var t, v, i, j, w, X = [], limit = 128;
          if (seed2 === (seed2 | 0)) {
            v = seed2;
            seed2 = null;
          } else {
            seed2 = seed2 + "\0";
            v = 0;
            limit = Math.max(limit, seed2.length);
          }
          for (i = 0, j = -32; j < limit; ++j) {
            if (seed2)
              v ^= seed2.charCodeAt((j + 32) % seed2.length);
            if (j === 0)
              w = v;
            v ^= v << 10;
            v ^= v >>> 15;
            v ^= v << 4;
            v ^= v >>> 13;
            if (j >= 0) {
              w = w + 1640531527 | 0;
              t = X[j & 127] ^= v + w;
              i = 0 == t ? i + 1 : 0;
            }
          }
          if (i >= 128) {
            X[(seed2 && seed2.length || 0) & 127] = -1;
          }
          i = 127;
          for (j = 4 * 128; j > 0; --j) {
            v = X[i + 34 & 127];
            t = X[i = i + 1 & 127];
            v ^= v << 13;
            t ^= t << 17;
            v ^= v >>> 15;
            t ^= t >>> 12;
            X[i] = v ^ t;
          }
          me2.w = w;
          me2.X = X;
          me2.i = i;
        }
        init(me, seed);
      }
      function copy(f, t) {
        t.i = f.i;
        t.w = f.w;
        t.X = f.X.slice();
        return t;
      }
      ;
      function impl(seed, opts) {
        if (seed == null)
          seed = +/* @__PURE__ */ new Date();
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top4 = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top4 + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (state.X)
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.xor4096 = impl;
      }
    })(
      exports,
      // window object or global
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js
var require_tychei = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/lib/tychei.js"(exports, module) {
    (function(global2, module2, define2) {
      function XorGen(seed) {
        var me = this, strseed = "";
        me.next = function() {
          var b = me.b, c = me.c, d = me.d, a = me.a;
          b = b << 25 ^ b >>> 7 ^ c;
          c = c - d | 0;
          d = d << 24 ^ d >>> 8 ^ a;
          a = a - b | 0;
          me.b = b = b << 20 ^ b >>> 12 ^ c;
          me.c = c = c - d | 0;
          me.d = d << 16 ^ c >>> 16 ^ a;
          return me.a = a - b | 0;
        };
        me.a = 0;
        me.b = 0;
        me.c = 2654435769 | 0;
        me.d = 1367130551;
        if (seed === Math.floor(seed)) {
          me.a = seed / 4294967296 | 0;
          me.b = seed | 0;
        } else {
          strseed += seed;
        }
        for (var k = 0; k < strseed.length + 20; k++) {
          me.b ^= strseed.charCodeAt(k) | 0;
          me.next();
        }
      }
      function copy(f, t) {
        t.a = f.a;
        t.b = f.b;
        t.c = f.c;
        t.d = f.d;
        return t;
      }
      ;
      function impl(seed, opts) {
        var xg = new XorGen(seed), state = opts && opts.state, prng = function() {
          return (xg.next() >>> 0) / 4294967296;
        };
        prng.double = function() {
          do {
            var top4 = xg.next() >>> 11, bot = (xg.next() >>> 0) / 4294967296, result = (top4 + bot) / (1 << 21);
          } while (result === 0);
          return result;
        };
        prng.int32 = xg.next;
        prng.quick = prng;
        if (state) {
          if (typeof state == "object")
            copy(state, xg);
          prng.state = function() {
            return copy(xg, {});
          };
        }
        return prng;
      }
      if (module2 && module2.exports) {
        module2.exports = impl;
      } else if (define2 && define2.amd) {
        define2(function() {
          return impl;
        });
      } else {
        this.tychei = impl;
      }
    })(
      exports,
      typeof module == "object" && module,
      // present in node.js
      typeof define == "function" && define
      // present with an AMD loader
    );
  }
});

// (disabled):crypto
var require_crypto = __commonJS({
  "(disabled):crypto"() {
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js
var require_seedrandom = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/seedrandom.js"(exports, module) {
    (function(global2, pool, math) {
      var width = 256, chunks = 6, digits = 52, rngname = "random", startdenom = math.pow(width, chunks), significance = math.pow(2, digits), overflow = significance * 2, mask2 = width - 1, nodecrypto;
      function seedrandom(seed, options, callback) {
        var key = [];
        options = options == true ? { entropy: true } : options || {};
        var shortseed = mixkey(flatten(
          options.entropy ? [seed, tostring(pool)] : seed == null ? autoseed() : seed,
          3
        ), key);
        var arc4 = new ARC4(key);
        var prng = function() {
          var n = arc4.g(chunks), d = startdenom, x = 0;
          while (n < significance) {
            n = (n + x) * width;
            d *= width;
            x = arc4.g(1);
          }
          while (n >= overflow) {
            n /= 2;
            d /= 2;
            x >>>= 1;
          }
          return (n + x) / d;
        };
        prng.int32 = function() {
          return arc4.g(4) | 0;
        };
        prng.quick = function() {
          return arc4.g(4) / 4294967296;
        };
        prng.double = prng;
        mixkey(tostring(arc4.S), pool);
        return (options.pass || callback || function(prng2, seed2, is_math_call, state) {
          if (state) {
            if (state.S) {
              copy(state, arc4);
            }
            prng2.state = function() {
              return copy(arc4, {});
            };
          }
          if (is_math_call) {
            math[rngname] = prng2;
            return seed2;
          } else
            return prng2;
        })(
          prng,
          shortseed,
          "global" in options ? options.global : this == math,
          options.state
        );
      }
      function ARC4(key) {
        var t, keylen = key.length, me = this, i = 0, j = me.i = me.j = 0, s = me.S = [];
        if (!keylen) {
          key = [keylen++];
        }
        while (i < width) {
          s[i] = i++;
        }
        for (i = 0; i < width; i++) {
          s[i] = s[j = mask2 & j + key[i % keylen] + (t = s[i])];
          s[j] = t;
        }
        (me.g = function(count) {
          var t2, r = 0, i2 = me.i, j2 = me.j, s2 = me.S;
          while (count--) {
            t2 = s2[i2 = mask2 & i2 + 1];
            r = r * width + s2[mask2 & (s2[i2] = s2[j2 = mask2 & j2 + t2]) + (s2[j2] = t2)];
          }
          me.i = i2;
          me.j = j2;
          return r;
        })(width);
      }
      function copy(f, t) {
        t.i = f.i;
        t.j = f.j;
        t.S = f.S.slice();
        return t;
      }
      ;
      function flatten(obj, depth) {
        var result = [], typ = typeof obj, prop;
        if (depth && typ == "object") {
          for (prop in obj) {
            try {
              result.push(flatten(obj[prop], depth - 1));
            } catch (e) {
            }
          }
        }
        return result.length ? result : typ == "string" ? obj : obj + "\0";
      }
      function mixkey(seed, key) {
        var stringseed = seed + "", smear, j = 0;
        while (j < stringseed.length) {
          key[mask2 & j] = mask2 & (smear ^= key[mask2 & j] * 19) + stringseed.charCodeAt(j++);
        }
        return tostring(key);
      }
      function autoseed() {
        try {
          var out;
          if (nodecrypto && (out = nodecrypto.randomBytes)) {
            out = out(width);
          } else {
            out = new Uint8Array(width);
            (global2.crypto || global2.msCrypto).getRandomValues(out);
          }
          return tostring(out);
        } catch (e) {
          var browser = global2.navigator, plugins = browser && browser.plugins;
          return [+/* @__PURE__ */ new Date(), global2, plugins, global2.screen, tostring(pool)];
        }
      }
      function tostring(a) {
        return String.fromCharCode.apply(0, a);
      }
      mixkey(math.random(), pool);
      if (typeof module == "object" && module.exports) {
        module.exports = seedrandom;
        try {
          nodecrypto = require_crypto();
        } catch (ex) {
        }
      } else if (typeof define == "function" && define.amd) {
        define(function() {
          return seedrandom;
        });
      } else {
        math["seed" + rngname] = seedrandom;
      }
    })(
      // global: `self` in browsers (including strict mode and web workers),
      // otherwise `this` in Node and other environments
      typeof self !== "undefined" ? self : exports,
      [],
      // pool: entropy pool starts empty
      Math
      // math: package containing random, pow, and seedrandom
    );
  }
});

// node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js
var require_seedrandom2 = __commonJS({
  "node_modules/.pnpm/seedrandom@3.0.5/node_modules/seedrandom/index.js"(exports, module) {
    var alea = require_alea();
    var xor128 = require_xor128();
    var xorwow = require_xorwow();
    var xorshift7 = require_xorshift7();
    var xor4096 = require_xor4096();
    var tychei = require_tychei();
    var sr = require_seedrandom();
    sr.alea = alea;
    sr.xor128 = xor128;
    sr.xorwow = xorwow;
    sr.xorshift7 = xorshift7;
    sr.xor4096 = xor4096;
    sr.tychei = tychei;
    module.exports = sr;
  }
});

// node_modules/.pnpm/random-words@1.3.0/node_modules/random-words/index.js
var require_random_words = __commonJS({
  "node_modules/.pnpm/random-words@1.3.0/node_modules/random-words/index.js"(exports, module) {
    var seedrandom = require_seedrandom2();
    var wordList = [
      // Borrowed from xkcd password generator which borrowed it from wherever
      "ability",
      "able",
      "aboard",
      "about",
      "above",
      "accept",
      "accident",
      "according",
      "account",
      "accurate",
      "acres",
      "across",
      "act",
      "action",
      "active",
      "activity",
      "actual",
      "actually",
      "add",
      "addition",
      "additional",
      "adjective",
      "adult",
      "adventure",
      "advice",
      "affect",
      "afraid",
      "after",
      "afternoon",
      "again",
      "against",
      "age",
      "ago",
      "agree",
      "ahead",
      "aid",
      "air",
      "airplane",
      "alike",
      "alive",
      "all",
      "allow",
      "almost",
      "alone",
      "along",
      "aloud",
      "alphabet",
      "already",
      "also",
      "although",
      "am",
      "among",
      "amount",
      "ancient",
      "angle",
      "angry",
      "animal",
      "announced",
      "another",
      "answer",
      "ants",
      "any",
      "anybody",
      "anyone",
      "anything",
      "anyway",
      "anywhere",
      "apart",
      "apartment",
      "appearance",
      "apple",
      "applied",
      "appropriate",
      "are",
      "area",
      "arm",
      "army",
      "around",
      "arrange",
      "arrangement",
      "arrive",
      "arrow",
      "art",
      "article",
      "as",
      "aside",
      "ask",
      "asleep",
      "at",
      "ate",
      "atmosphere",
      "atom",
      "atomic",
      "attached",
      "attack",
      "attempt",
      "attention",
      "audience",
      "author",
      "automobile",
      "available",
      "average",
      "avoid",
      "aware",
      "away",
      "baby",
      "back",
      "bad",
      "badly",
      "bag",
      "balance",
      "ball",
      "balloon",
      "band",
      "bank",
      "bar",
      "bare",
      "bark",
      "barn",
      "base",
      "baseball",
      "basic",
      "basis",
      "basket",
      "bat",
      "battle",
      "be",
      "bean",
      "bear",
      "beat",
      "beautiful",
      "beauty",
      "became",
      "because",
      "become",
      "becoming",
      "bee",
      "been",
      "before",
      "began",
      "beginning",
      "begun",
      "behavior",
      "behind",
      "being",
      "believed",
      "bell",
      "belong",
      "below",
      "belt",
      "bend",
      "beneath",
      "bent",
      "beside",
      "best",
      "bet",
      "better",
      "between",
      "beyond",
      "bicycle",
      "bigger",
      "biggest",
      "bill",
      "birds",
      "birth",
      "birthday",
      "bit",
      "bite",
      "black",
      "blank",
      "blanket",
      "blew",
      "blind",
      "block",
      "blood",
      "blow",
      "blue",
      "board",
      "boat",
      "body",
      "bone",
      "book",
      "border",
      "born",
      "both",
      "bottle",
      "bottom",
      "bound",
      "bow",
      "bowl",
      "box",
      "boy",
      "brain",
      "branch",
      "brass",
      "brave",
      "bread",
      "break",
      "breakfast",
      "breath",
      "breathe",
      "breathing",
      "breeze",
      "brick",
      "bridge",
      "brief",
      "bright",
      "bring",
      "broad",
      "broke",
      "broken",
      "brother",
      "brought",
      "brown",
      "brush",
      "buffalo",
      "build",
      "building",
      "built",
      "buried",
      "burn",
      "burst",
      "bus",
      "bush",
      "business",
      "busy",
      "but",
      "butter",
      "buy",
      "by",
      "cabin",
      "cage",
      "cake",
      "call",
      "calm",
      "came",
      "camera",
      "camp",
      "can",
      "canal",
      "cannot",
      "cap",
      "capital",
      "captain",
      "captured",
      "car",
      "carbon",
      "card",
      "care",
      "careful",
      "carefully",
      "carried",
      "carry",
      "case",
      "cast",
      "castle",
      "cat",
      "catch",
      "cattle",
      "caught",
      "cause",
      "cave",
      "cell",
      "cent",
      "center",
      "central",
      "century",
      "certain",
      "certainly",
      "chain",
      "chair",
      "chamber",
      "chance",
      "change",
      "changing",
      "chapter",
      "character",
      "characteristic",
      "charge",
      "chart",
      "check",
      "cheese",
      "chemical",
      "chest",
      "chicken",
      "chief",
      "child",
      "children",
      "choice",
      "choose",
      "chose",
      "chosen",
      "church",
      "circle",
      "circus",
      "citizen",
      "city",
      "class",
      "classroom",
      "claws",
      "clay",
      "clean",
      "clear",
      "clearly",
      "climate",
      "climb",
      "clock",
      "close",
      "closely",
      "closer",
      "cloth",
      "clothes",
      "clothing",
      "cloud",
      "club",
      "coach",
      "coal",
      "coast",
      "coat",
      "coffee",
      "cold",
      "collect",
      "college",
      "colony",
      "color",
      "column",
      "combination",
      "combine",
      "come",
      "comfortable",
      "coming",
      "command",
      "common",
      "community",
      "company",
      "compare",
      "compass",
      "complete",
      "completely",
      "complex",
      "composed",
      "composition",
      "compound",
      "concerned",
      "condition",
      "congress",
      "connected",
      "consider",
      "consist",
      "consonant",
      "constantly",
      "construction",
      "contain",
      "continent",
      "continued",
      "contrast",
      "control",
      "conversation",
      "cook",
      "cookies",
      "cool",
      "copper",
      "copy",
      "corn",
      "corner",
      "correct",
      "correctly",
      "cost",
      "cotton",
      "could",
      "count",
      "country",
      "couple",
      "courage",
      "course",
      "court",
      "cover",
      "cow",
      "cowboy",
      "crack",
      "cream",
      "create",
      "creature",
      "crew",
      "crop",
      "cross",
      "crowd",
      "cry",
      "cup",
      "curious",
      "current",
      "curve",
      "customs",
      "cut",
      "cutting",
      "daily",
      "damage",
      "dance",
      "danger",
      "dangerous",
      "dark",
      "darkness",
      "date",
      "daughter",
      "dawn",
      "day",
      "dead",
      "deal",
      "dear",
      "death",
      "decide",
      "declared",
      "deep",
      "deeply",
      "deer",
      "definition",
      "degree",
      "depend",
      "depth",
      "describe",
      "desert",
      "design",
      "desk",
      "detail",
      "determine",
      "develop",
      "development",
      "diagram",
      "diameter",
      "did",
      "die",
      "differ",
      "difference",
      "different",
      "difficult",
      "difficulty",
      "dig",
      "dinner",
      "direct",
      "direction",
      "directly",
      "dirt",
      "dirty",
      "disappear",
      "discover",
      "discovery",
      "discuss",
      "discussion",
      "disease",
      "dish",
      "distance",
      "distant",
      "divide",
      "division",
      "do",
      "doctor",
      "does",
      "dog",
      "doing",
      "doll",
      "dollar",
      "done",
      "donkey",
      "door",
      "dot",
      "double",
      "doubt",
      "down",
      "dozen",
      "draw",
      "drawn",
      "dream",
      "dress",
      "drew",
      "dried",
      "drink",
      "drive",
      "driven",
      "driver",
      "driving",
      "drop",
      "dropped",
      "drove",
      "dry",
      "duck",
      "due",
      "dug",
      "dull",
      "during",
      "dust",
      "duty",
      "each",
      "eager",
      "ear",
      "earlier",
      "early",
      "earn",
      "earth",
      "easier",
      "easily",
      "east",
      "easy",
      "eat",
      "eaten",
      "edge",
      "education",
      "effect",
      "effort",
      "egg",
      "eight",
      "either",
      "electric",
      "electricity",
      "element",
      "elephant",
      "eleven",
      "else",
      "empty",
      "end",
      "enemy",
      "energy",
      "engine",
      "engineer",
      "enjoy",
      "enough",
      "enter",
      "entire",
      "entirely",
      "environment",
      "equal",
      "equally",
      "equator",
      "equipment",
      "escape",
      "especially",
      "essential",
      "establish",
      "even",
      "evening",
      "event",
      "eventually",
      "ever",
      "every",
      "everybody",
      "everyone",
      "everything",
      "everywhere",
      "evidence",
      "exact",
      "exactly",
      "examine",
      "example",
      "excellent",
      "except",
      "exchange",
      "excited",
      "excitement",
      "exciting",
      "exclaimed",
      "exercise",
      "exist",
      "expect",
      "experience",
      "experiment",
      "explain",
      "explanation",
      "explore",
      "express",
      "expression",
      "extra",
      "eye",
      "face",
      "facing",
      "fact",
      "factor",
      "factory",
      "failed",
      "fair",
      "fairly",
      "fall",
      "fallen",
      "familiar",
      "family",
      "famous",
      "far",
      "farm",
      "farmer",
      "farther",
      "fast",
      "fastened",
      "faster",
      "fat",
      "father",
      "favorite",
      "fear",
      "feathers",
      "feature",
      "fed",
      "feed",
      "feel",
      "feet",
      "fell",
      "fellow",
      "felt",
      "fence",
      "few",
      "fewer",
      "field",
      "fierce",
      "fifteen",
      "fifth",
      "fifty",
      "fight",
      "fighting",
      "figure",
      "fill",
      "film",
      "final",
      "finally",
      "find",
      "fine",
      "finest",
      "finger",
      "finish",
      "fire",
      "fireplace",
      "firm",
      "first",
      "fish",
      "five",
      "fix",
      "flag",
      "flame",
      "flat",
      "flew",
      "flies",
      "flight",
      "floating",
      "floor",
      "flow",
      "flower",
      "fly",
      "fog",
      "folks",
      "follow",
      "food",
      "foot",
      "football",
      "for",
      "force",
      "foreign",
      "forest",
      "forget",
      "forgot",
      "forgotten",
      "form",
      "former",
      "fort",
      "forth",
      "forty",
      "forward",
      "fought",
      "found",
      "four",
      "fourth",
      "fox",
      "frame",
      "free",
      "freedom",
      "frequently",
      "fresh",
      "friend",
      "friendly",
      "frighten",
      "frog",
      "from",
      "front",
      "frozen",
      "fruit",
      "fuel",
      "full",
      "fully",
      "fun",
      "function",
      "funny",
      "fur",
      "furniture",
      "further",
      "future",
      "gain",
      "game",
      "garage",
      "garden",
      "gas",
      "gasoline",
      "gate",
      "gather",
      "gave",
      "general",
      "generally",
      "gentle",
      "gently",
      "get",
      "getting",
      "giant",
      "gift",
      "girl",
      "give",
      "given",
      "giving",
      "glad",
      "glass",
      "globe",
      "go",
      "goes",
      "gold",
      "golden",
      "gone",
      "good",
      "goose",
      "got",
      "government",
      "grabbed",
      "grade",
      "gradually",
      "grain",
      "grandfather",
      "grandmother",
      "graph",
      "grass",
      "gravity",
      "gray",
      "great",
      "greater",
      "greatest",
      "greatly",
      "green",
      "grew",
      "ground",
      "group",
      "grow",
      "grown",
      "growth",
      "guard",
      "guess",
      "guide",
      "gulf",
      "gun",
      "habit",
      "had",
      "hair",
      "half",
      "halfway",
      "hall",
      "hand",
      "handle",
      "handsome",
      "hang",
      "happen",
      "happened",
      "happily",
      "happy",
      "harbor",
      "hard",
      "harder",
      "hardly",
      "has",
      "hat",
      "have",
      "having",
      "hay",
      "he",
      "headed",
      "heading",
      "health",
      "heard",
      "hearing",
      "heart",
      "heat",
      "heavy",
      "height",
      "held",
      "hello",
      "help",
      "helpful",
      "her",
      "herd",
      "here",
      "herself",
      "hidden",
      "hide",
      "high",
      "higher",
      "highest",
      "highway",
      "hill",
      "him",
      "himself",
      "his",
      "history",
      "hit",
      "hold",
      "hole",
      "hollow",
      "home",
      "honor",
      "hope",
      "horn",
      "horse",
      "hospital",
      "hot",
      "hour",
      "house",
      "how",
      "however",
      "huge",
      "human",
      "hundred",
      "hung",
      "hungry",
      "hunt",
      "hunter",
      "hurried",
      "hurry",
      "hurt",
      "husband",
      "ice",
      "idea",
      "identity",
      "if",
      "ill",
      "image",
      "imagine",
      "immediately",
      "importance",
      "important",
      "impossible",
      "improve",
      "in",
      "inch",
      "include",
      "including",
      "income",
      "increase",
      "indeed",
      "independent",
      "indicate",
      "individual",
      "industrial",
      "industry",
      "influence",
      "information",
      "inside",
      "instance",
      "instant",
      "instead",
      "instrument",
      "interest",
      "interior",
      "into",
      "introduced",
      "invented",
      "involved",
      "iron",
      "is",
      "island",
      "it",
      "its",
      "itself",
      "jack",
      "jar",
      "jet",
      "job",
      "join",
      "joined",
      "journey",
      "joy",
      "judge",
      "jump",
      "jungle",
      "just",
      "keep",
      "kept",
      "key",
      "kids",
      "kill",
      "kind",
      "kitchen",
      "knew",
      "knife",
      "know",
      "knowledge",
      "known",
      "label",
      "labor",
      "lack",
      "lady",
      "laid",
      "lake",
      "lamp",
      "land",
      "language",
      "large",
      "larger",
      "largest",
      "last",
      "late",
      "later",
      "laugh",
      "law",
      "lay",
      "layers",
      "lead",
      "leader",
      "leaf",
      "learn",
      "least",
      "leather",
      "leave",
      "leaving",
      "led",
      "left",
      "leg",
      "length",
      "lesson",
      "let",
      "letter",
      "level",
      "library",
      "lie",
      "life",
      "lift",
      "light",
      "like",
      "likely",
      "limited",
      "line",
      "lion",
      "lips",
      "liquid",
      "list",
      "listen",
      "little",
      "live",
      "living",
      "load",
      "local",
      "locate",
      "location",
      "log",
      "lonely",
      "long",
      "longer",
      "look",
      "loose",
      "lose",
      "loss",
      "lost",
      "lot",
      "loud",
      "love",
      "lovely",
      "low",
      "lower",
      "luck",
      "lucky",
      "lunch",
      "lungs",
      "lying",
      "machine",
      "machinery",
      "mad",
      "made",
      "magic",
      "magnet",
      "mail",
      "main",
      "mainly",
      "major",
      "make",
      "making",
      "man",
      "managed",
      "manner",
      "manufacturing",
      "many",
      "map",
      "mark",
      "market",
      "married",
      "mass",
      "massage",
      "master",
      "material",
      "mathematics",
      "matter",
      "may",
      "maybe",
      "me",
      "meal",
      "mean",
      "means",
      "meant",
      "measure",
      "meat",
      "medicine",
      "meet",
      "melted",
      "member",
      "memory",
      "men",
      "mental",
      "merely",
      "met",
      "metal",
      "method",
      "mice",
      "middle",
      "might",
      "mighty",
      "mile",
      "military",
      "milk",
      "mill",
      "mind",
      "mine",
      "minerals",
      "minute",
      "mirror",
      "missing",
      "mission",
      "mistake",
      "mix",
      "mixture",
      "model",
      "modern",
      "molecular",
      "moment",
      "money",
      "monkey",
      "month",
      "mood",
      "moon",
      "more",
      "morning",
      "most",
      "mostly",
      "mother",
      "motion",
      "motor",
      "mountain",
      "mouse",
      "mouth",
      "move",
      "movement",
      "movie",
      "moving",
      "mud",
      "muscle",
      "music",
      "musical",
      "must",
      "my",
      "myself",
      "mysterious",
      "nails",
      "name",
      "nation",
      "national",
      "native",
      "natural",
      "naturally",
      "nature",
      "near",
      "nearby",
      "nearer",
      "nearest",
      "nearly",
      "necessary",
      "neck",
      "needed",
      "needle",
      "needs",
      "negative",
      "neighbor",
      "neighborhood",
      "nervous",
      "nest",
      "never",
      "new",
      "news",
      "newspaper",
      "next",
      "nice",
      "night",
      "nine",
      "no",
      "nobody",
      "nodded",
      "noise",
      "none",
      "noon",
      "nor",
      "north",
      "nose",
      "not",
      "note",
      "noted",
      "nothing",
      "notice",
      "noun",
      "now",
      "number",
      "numeral",
      "nuts",
      "object",
      "observe",
      "obtain",
      "occasionally",
      "occur",
      "ocean",
      "of",
      "off",
      "offer",
      "office",
      "officer",
      "official",
      "oil",
      "old",
      "older",
      "oldest",
      "on",
      "once",
      "one",
      "only",
      "onto",
      "open",
      "operation",
      "opinion",
      "opportunity",
      "opposite",
      "or",
      "orange",
      "orbit",
      "order",
      "ordinary",
      "organization",
      "organized",
      "origin",
      "original",
      "other",
      "ought",
      "our",
      "ourselves",
      "out",
      "outer",
      "outline",
      "outside",
      "over",
      "own",
      "owner",
      "oxygen",
      "pack",
      "package",
      "page",
      "paid",
      "pain",
      "paint",
      "pair",
      "palace",
      "pale",
      "pan",
      "paper",
      "paragraph",
      "parallel",
      "parent",
      "park",
      "part",
      "particles",
      "particular",
      "particularly",
      "partly",
      "parts",
      "party",
      "pass",
      "passage",
      "past",
      "path",
      "pattern",
      "pay",
      "peace",
      "pen",
      "pencil",
      "people",
      "per",
      "percent",
      "perfect",
      "perfectly",
      "perhaps",
      "period",
      "person",
      "personal",
      "pet",
      "phrase",
      "physical",
      "piano",
      "pick",
      "picture",
      "pictured",
      "pie",
      "piece",
      "pig",
      "pile",
      "pilot",
      "pine",
      "pink",
      "pipe",
      "pitch",
      "place",
      "plain",
      "plan",
      "plane",
      "planet",
      "planned",
      "planning",
      "plant",
      "plastic",
      "plate",
      "plates",
      "play",
      "pleasant",
      "please",
      "pleasure",
      "plenty",
      "plural",
      "plus",
      "pocket",
      "poem",
      "poet",
      "poetry",
      "point",
      "pole",
      "police",
      "policeman",
      "political",
      "pond",
      "pony",
      "pool",
      "poor",
      "popular",
      "population",
      "porch",
      "port",
      "position",
      "positive",
      "possible",
      "possibly",
      "post",
      "pot",
      "potatoes",
      "pound",
      "pour",
      "powder",
      "power",
      "powerful",
      "practical",
      "practice",
      "prepare",
      "present",
      "president",
      "press",
      "pressure",
      "pretty",
      "prevent",
      "previous",
      "price",
      "pride",
      "primitive",
      "principal",
      "principle",
      "printed",
      "private",
      "prize",
      "probably",
      "problem",
      "process",
      "produce",
      "product",
      "production",
      "program",
      "progress",
      "promised",
      "proper",
      "properly",
      "property",
      "protection",
      "proud",
      "prove",
      "provide",
      "public",
      "pull",
      "pupil",
      "pure",
      "purple",
      "purpose",
      "push",
      "put",
      "putting",
      "quarter",
      "queen",
      "question",
      "quick",
      "quickly",
      "quiet",
      "quietly",
      "quite",
      "rabbit",
      "race",
      "radio",
      "railroad",
      "rain",
      "raise",
      "ran",
      "ranch",
      "range",
      "rapidly",
      "rate",
      "rather",
      "raw",
      "rays",
      "reach",
      "read",
      "reader",
      "ready",
      "real",
      "realize",
      "rear",
      "reason",
      "recall",
      "receive",
      "recent",
      "recently",
      "recognize",
      "record",
      "red",
      "refer",
      "refused",
      "region",
      "regular",
      "related",
      "relationship",
      "religious",
      "remain",
      "remarkable",
      "remember",
      "remove",
      "repeat",
      "replace",
      "replied",
      "report",
      "represent",
      "require",
      "research",
      "respect",
      "rest",
      "result",
      "return",
      "review",
      "rhyme",
      "rhythm",
      "rice",
      "rich",
      "ride",
      "riding",
      "right",
      "ring",
      "rise",
      "rising",
      "river",
      "road",
      "roar",
      "rock",
      "rocket",
      "rocky",
      "rod",
      "roll",
      "roof",
      "room",
      "root",
      "rope",
      "rose",
      "rough",
      "round",
      "route",
      "row",
      "rubbed",
      "rubber",
      "rule",
      "ruler",
      "run",
      "running",
      "rush",
      "sad",
      "saddle",
      "safe",
      "safety",
      "said",
      "sail",
      "sale",
      "salmon",
      "salt",
      "same",
      "sand",
      "sang",
      "sat",
      "satellites",
      "satisfied",
      "save",
      "saved",
      "saw",
      "say",
      "scale",
      "scared",
      "scene",
      "school",
      "science",
      "scientific",
      "scientist",
      "score",
      "screen",
      "sea",
      "search",
      "season",
      "seat",
      "second",
      "secret",
      "section",
      "see",
      "seed",
      "seeing",
      "seems",
      "seen",
      "seldom",
      "select",
      "selection",
      "sell",
      "send",
      "sense",
      "sent",
      "sentence",
      "separate",
      "series",
      "serious",
      "serve",
      "service",
      "sets",
      "setting",
      "settle",
      "settlers",
      "seven",
      "several",
      "shade",
      "shadow",
      "shake",
      "shaking",
      "shall",
      "shallow",
      "shape",
      "share",
      "sharp",
      "she",
      "sheep",
      "sheet",
      "shelf",
      "shells",
      "shelter",
      "shine",
      "shinning",
      "ship",
      "shirt",
      "shoe",
      "shoot",
      "shop",
      "shore",
      "short",
      "shorter",
      "shot",
      "should",
      "shoulder",
      "shout",
      "show",
      "shown",
      "shut",
      "sick",
      "sides",
      "sight",
      "sign",
      "signal",
      "silence",
      "silent",
      "silk",
      "silly",
      "silver",
      "similar",
      "simple",
      "simplest",
      "simply",
      "since",
      "sing",
      "single",
      "sink",
      "sister",
      "sit",
      "sitting",
      "situation",
      "six",
      "size",
      "skill",
      "skin",
      "sky",
      "slabs",
      "slave",
      "sleep",
      "slept",
      "slide",
      "slight",
      "slightly",
      "slip",
      "slipped",
      "slope",
      "slow",
      "slowly",
      "small",
      "smaller",
      "smallest",
      "smell",
      "smile",
      "smoke",
      "smooth",
      "snake",
      "snow",
      "so",
      "soap",
      "social",
      "society",
      "soft",
      "softly",
      "soil",
      "solar",
      "sold",
      "soldier",
      "solid",
      "solution",
      "solve",
      "some",
      "somebody",
      "somehow",
      "someone",
      "something",
      "sometime",
      "somewhere",
      "son",
      "song",
      "soon",
      "sort",
      "sound",
      "source",
      "south",
      "southern",
      "space",
      "speak",
      "special",
      "species",
      "specific",
      "speech",
      "speed",
      "spell",
      "spend",
      "spent",
      "spider",
      "spin",
      "spirit",
      "spite",
      "split",
      "spoken",
      "sport",
      "spread",
      "spring",
      "square",
      "stage",
      "stairs",
      "stand",
      "standard",
      "star",
      "stared",
      "start",
      "state",
      "statement",
      "station",
      "stay",
      "steady",
      "steam",
      "steel",
      "steep",
      "stems",
      "step",
      "stepped",
      "stick",
      "stiff",
      "still",
      "stock",
      "stomach",
      "stone",
      "stood",
      "stop",
      "stopped",
      "store",
      "storm",
      "story",
      "stove",
      "straight",
      "strange",
      "stranger",
      "straw",
      "stream",
      "street",
      "strength",
      "stretch",
      "strike",
      "string",
      "strip",
      "strong",
      "stronger",
      "struck",
      "structure",
      "struggle",
      "stuck",
      "student",
      "studied",
      "studying",
      "subject",
      "substance",
      "success",
      "successful",
      "such",
      "sudden",
      "suddenly",
      "sugar",
      "suggest",
      "suit",
      "sum",
      "summer",
      "sun",
      "sunlight",
      "supper",
      "supply",
      "support",
      "suppose",
      "sure",
      "surface",
      "surprise",
      "surrounded",
      "swam",
      "sweet",
      "swept",
      "swim",
      "swimming",
      "swing",
      "swung",
      "syllable",
      "symbol",
      "system",
      "table",
      "tail",
      "take",
      "taken",
      "tales",
      "talk",
      "tall",
      "tank",
      "tape",
      "task",
      "taste",
      "taught",
      "tax",
      "tea",
      "teach",
      "teacher",
      "team",
      "tears",
      "teeth",
      "telephone",
      "television",
      "tell",
      "temperature",
      "ten",
      "tent",
      "term",
      "terrible",
      "test",
      "than",
      "thank",
      "that",
      "thee",
      "them",
      "themselves",
      "then",
      "theory",
      "there",
      "therefore",
      "these",
      "they",
      "thick",
      "thin",
      "thing",
      "think",
      "third",
      "thirty",
      "this",
      "those",
      "thou",
      "though",
      "thought",
      "thousand",
      "thread",
      "three",
      "threw",
      "throat",
      "through",
      "throughout",
      "throw",
      "thrown",
      "thumb",
      "thus",
      "thy",
      "tide",
      "tie",
      "tight",
      "tightly",
      "till",
      "time",
      "tin",
      "tiny",
      "tip",
      "tired",
      "title",
      "to",
      "tobacco",
      "today",
      "together",
      "told",
      "tomorrow",
      "tone",
      "tongue",
      "tonight",
      "too",
      "took",
      "tool",
      "top",
      "topic",
      "torn",
      "total",
      "touch",
      "toward",
      "tower",
      "town",
      "toy",
      "trace",
      "track",
      "trade",
      "traffic",
      "trail",
      "train",
      "transportation",
      "trap",
      "travel",
      "treated",
      "tree",
      "triangle",
      "tribe",
      "trick",
      "tried",
      "trip",
      "troops",
      "tropical",
      "trouble",
      "truck",
      "trunk",
      "truth",
      "try",
      "tube",
      "tune",
      "turn",
      "twelve",
      "twenty",
      "twice",
      "two",
      "type",
      "typical",
      "uncle",
      "under",
      "underline",
      "understanding",
      "unhappy",
      "union",
      "unit",
      "universe",
      "unknown",
      "unless",
      "until",
      "unusual",
      "up",
      "upon",
      "upper",
      "upward",
      "us",
      "use",
      "useful",
      "using",
      "usual",
      "usually",
      "valley",
      "valuable",
      "value",
      "vapor",
      "variety",
      "various",
      "vast",
      "vegetable",
      "verb",
      "vertical",
      "very",
      "vessels",
      "victory",
      "view",
      "village",
      "visit",
      "visitor",
      "voice",
      "volume",
      "vote",
      "vowel",
      "voyage",
      "wagon",
      "wait",
      "walk",
      "wall",
      "want",
      "war",
      "warm",
      "warn",
      "was",
      "wash",
      "waste",
      "watch",
      "water",
      "wave",
      "way",
      "we",
      "weak",
      "wealth",
      "wear",
      "weather",
      "week",
      "weigh",
      "weight",
      "welcome",
      "well",
      "went",
      "were",
      "west",
      "western",
      "wet",
      "whale",
      "what",
      "whatever",
      "wheat",
      "wheel",
      "when",
      "whenever",
      "where",
      "wherever",
      "whether",
      "which",
      "while",
      "whispered",
      "whistle",
      "white",
      "who",
      "whole",
      "whom",
      "whose",
      "why",
      "wide",
      "widely",
      "wife",
      "wild",
      "will",
      "willing",
      "win",
      "wind",
      "window",
      "wing",
      "winter",
      "wire",
      "wise",
      "wish",
      "with",
      "within",
      "without",
      "wolf",
      "women",
      "won",
      "wonder",
      "wonderful",
      "wood",
      "wooden",
      "wool",
      "word",
      "wore",
      "work",
      "worker",
      "world",
      "worried",
      "worry",
      "worse",
      "worth",
      "would",
      "wrapped",
      "write",
      "writer",
      "writing",
      "written",
      "wrong",
      "wrote",
      "yard",
      "year",
      "yellow",
      "yes",
      "yesterday",
      "yet",
      "you",
      "young",
      "younger",
      "your",
      "yourself",
      "youth",
      "zero",
      "zebra",
      "zipper",
      "zoo",
      "zulu"
    ];
    function words(options) {
      const random = options?.seed ? new seedrandom(options.seed) : null;
      function word() {
        if (options && options.maxLength > 1) {
          return generateWordWithMaxLength();
        } else {
          return generateRandomWord();
        }
      }
      function generateWordWithMaxLength() {
        var rightSize = false;
        var wordUsed;
        while (!rightSize) {
          wordUsed = generateRandomWord();
          if (wordUsed.length <= options.maxLength) {
            rightSize = true;
          }
        }
        return wordUsed;
      }
      function generateRandomWord() {
        return wordList[randInt(wordList.length)];
      }
      function randInt(lessThan) {
        const r = random ? random() : Math.random();
        return Math.floor(r * lessThan);
      }
      if (typeof options === "undefined") {
        return word();
      }
      if (typeof options === "number") {
        options = { exactly: options };
      }
      if (options.exactly) {
        options.min = options.exactly;
        options.max = options.exactly;
      }
      if (typeof options.wordsPerString !== "number") {
        options.wordsPerString = 1;
      }
      if (typeof options.formatter !== "function") {
        options.formatter = (word2) => word2;
      }
      if (typeof options.separator !== "string") {
        options.separator = " ";
      }
      var total = options.min + randInt(options.max + 1 - options.min);
      var results = [];
      var token = "";
      var relativeIndex = 0;
      for (var i = 0; i < total * options.wordsPerString; i++) {
        if (relativeIndex === options.wordsPerString - 1) {
          token += options.formatter(word(), relativeIndex);
        } else {
          token += options.formatter(word(), relativeIndex) + options.separator;
        }
        relativeIndex++;
        if ((i + 1) % options.wordsPerString === 0) {
          results.push(token);
          token = "";
          relativeIndex = 0;
        }
      }
      if (typeof options.join === "string") {
        results = results.join(options.join);
      }
      return results;
    }
    module.exports = words;
    words.wordList = wordList;
  }
});

// external-global-plugin:@ant-design/pro-components
var require_pro_components = __commonJS({
  "external-global-plugin:@ant-design/pro-components"(exports, module) {
    module.exports = window.antdPro;
  }
});

// external-global-plugin:react/jsx-runtime
var require_jsx_runtime = __commonJS({
  "external-global-plugin:react/jsx-runtime"(exports, module) {
    module.exports = window.reactjsxruntime;
  }
});

// external-global-plugin:uuid
var require_uuid = __commonJS({
  "external-global-plugin:uuid"(exports, module) {
    module.exports = window.uuid;
  }
});

// external-global-plugin:date-fns
var require_date_fns = __commonJS({
  "external-global-plugin:date-fns"(exports, module) {
    module.exports = window.datefns;
  }
});

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/Context.js
var import_react = __toESM(require_react());
var IconContext = /* @__PURE__ */ (0, import_react.createContext)({});
var Context_default = IconContext;

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/extends.js
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr))
    return arr;
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s, _e, _x, _r, _arr = [], _n = true, _d = false;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i)
          return;
        _n = false;
      } else
        for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = true)
          ;
    } catch (err) {
      _d = true, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r))
          return;
      } finally {
        if (_d)
          throw _e;
      }
    }
    return _arr;
  }
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/slicedToArray.js
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(obj) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
    return typeof obj2;
  } : function(obj2) {
    return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
  }, _typeof(obj);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/toPrimitive.js
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null)
    return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object")
      return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/toPropertyKey.js
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/defineProperty.js
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
function _objectWithoutProperties(source, excluded) {
  if (source == null)
    return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0)
        continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key))
        continue;
      target[key] = source[key];
    }
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var React3 = __toESM(require_react());
var import_classnames = __toESM(require_classnames());

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/util.js
function bound01(n, max) {
  if (isOnePointZero(n)) {
    n = "100%";
  }
  var isPercent = isPercentage(n);
  n = max === 360 ? n : Math.min(max, Math.max(0, parseFloat(n)));
  if (isPercent) {
    n = parseInt(String(n * max), 10) / 100;
  }
  if (Math.abs(n - max) < 1e-6) {
    return 1;
  }
  if (max === 360) {
    n = (n < 0 ? n % max + max : n % max) / parseFloat(String(max));
  } else {
    n = n % max / parseFloat(String(max));
  }
  return n;
}
function isOnePointZero(n) {
  return typeof n === "string" && n.indexOf(".") !== -1 && parseFloat(n) === 1;
}
function isPercentage(n) {
  return typeof n === "string" && n.indexOf("%") !== -1;
}
function boundAlpha(a) {
  a = parseFloat(a);
  if (isNaN(a) || a < 0 || a > 1) {
    a = 1;
  }
  return a;
}
function convertToPercentage(n) {
  if (n <= 1) {
    return "".concat(Number(n) * 100, "%");
  }
  return n;
}
function pad2(c) {
  return c.length === 1 ? "0" + c : String(c);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/conversion.js
function rgbToRgb(r, g, b) {
  return {
    r: bound01(r, 255) * 255,
    g: bound01(g, 255) * 255,
    b: bound01(b, 255) * 255
  };
}
function hue2rgb(p, q, t) {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * (6 * t);
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
}
function hslToRgb(h, s, l) {
  var r;
  var g;
  var b;
  h = bound01(h, 360);
  s = bound01(s, 100);
  l = bound01(l, 100);
  if (s === 0) {
    g = l;
    b = l;
    r = l;
  } else {
    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHsv(r, g, b) {
  r = bound01(r, 255);
  g = bound01(g, 255);
  b = bound01(b, 255);
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h = 0;
  var v = max;
  var d = max - min;
  var s = max === 0 ? 0 : d / max;
  if (max === min) {
    h = 0;
  } else {
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        break;
    }
    h /= 6;
  }
  return { h, s, v };
}
function hsvToRgb(h, s, v) {
  h = bound01(h, 360) * 6;
  s = bound01(s, 100);
  v = bound01(v, 100);
  var i = Math.floor(h);
  var f = h - i;
  var p = v * (1 - s);
  var q = v * (1 - f * s);
  var t = v * (1 - (1 - f) * s);
  var mod = i % 6;
  var r = [v, q, p, p, t, v][mod];
  var g = [t, v, v, q, p, p][mod];
  var b = [p, p, t, v, v, q][mod];
  return { r: r * 255, g: g * 255, b: b * 255 };
}
function rgbToHex(r, g, b, allow3Char) {
  var hex = [
    pad2(Math.round(r).toString(16)),
    pad2(Math.round(g).toString(16)),
    pad2(Math.round(b).toString(16))
  ];
  if (allow3Char && hex[0].startsWith(hex[0].charAt(1)) && hex[1].startsWith(hex[1].charAt(1)) && hex[2].startsWith(hex[2].charAt(1))) {
    return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
  }
  return hex.join("");
}
function convertHexToDecimal(h) {
  return parseIntFromHex(h) / 255;
}
function parseIntFromHex(val) {
  return parseInt(val, 16);
}

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/css-color-names.js
var names = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};

// node_modules/.pnpm/@ctrl+tinycolor@3.6.0/node_modules/@ctrl/tinycolor/dist/module/format-input.js
function inputToRGB(color) {
  var rgb = { r: 0, g: 0, b: 0 };
  var a = 1;
  var s = null;
  var v = null;
  var l = null;
  var ok = false;
  var format2 = false;
  if (typeof color === "string") {
    color = stringInputToObject(color);
  }
  if (typeof color === "object") {
    if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
      rgb = rgbToRgb(color.r, color.g, color.b);
      ok = true;
      format2 = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
      s = convertToPercentage(color.s);
      v = convertToPercentage(color.v);
      rgb = hsvToRgb(color.h, s, v);
      ok = true;
      format2 = "hsv";
    } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
      s = convertToPercentage(color.s);
      l = convertToPercentage(color.l);
      rgb = hslToRgb(color.h, s, l);
      ok = true;
      format2 = "hsl";
    }
    if (Object.prototype.hasOwnProperty.call(color, "a")) {
      a = color.a;
    }
  }
  a = boundAlpha(a);
  return {
    ok,
    format: color.format || format2,
    r: Math.min(255, Math.max(rgb.r, 0)),
    g: Math.min(255, Math.max(rgb.g, 0)),
    b: Math.min(255, Math.max(rgb.b, 0)),
    a
  };
}
var CSS_INTEGER = "[-\\+]?\\d+%?";
var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
var CSS_UNIT = "(?:".concat(CSS_NUMBER, ")|(?:").concat(CSS_INTEGER, ")");
var PERMISSIVE_MATCH3 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var PERMISSIVE_MATCH4 = "[\\s|\\(]+(".concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")[,|\\s]+(").concat(CSS_UNIT, ")\\s*\\)?");
var matchers = {
  CSS_UNIT: new RegExp(CSS_UNIT),
  rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
  rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
  hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
  hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
  hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
  hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function stringInputToObject(color) {
  color = color.trim().toLowerCase();
  if (color.length === 0) {
    return false;
  }
  var named = false;
  if (names[color]) {
    color = names[color];
    named = true;
  } else if (color === "transparent") {
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  }
  var match = matchers.rgb.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3] };
  }
  match = matchers.rgba.exec(color);
  if (match) {
    return { r: match[1], g: match[2], b: match[3], a: match[4] };
  }
  match = matchers.hsl.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3] };
  }
  match = matchers.hsla.exec(color);
  if (match) {
    return { h: match[1], s: match[2], l: match[3], a: match[4] };
  }
  match = matchers.hsv.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3] };
  }
  match = matchers.hsva.exec(color);
  if (match) {
    return { h: match[1], s: match[2], v: match[3], a: match[4] };
  }
  match = matchers.hex8.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      a: convertHexToDecimal(match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex6.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1]),
      g: parseIntFromHex(match[2]),
      b: parseIntFromHex(match[3]),
      format: named ? "name" : "hex"
    };
  }
  match = matchers.hex4.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      a: convertHexToDecimal(match[4] + match[4]),
      format: named ? "name" : "hex8"
    };
  }
  match = matchers.hex3.exec(color);
  if (match) {
    return {
      r: parseIntFromHex(match[1] + match[1]),
      g: parseIntFromHex(match[2] + match[2]),
      b: parseIntFromHex(match[3] + match[3]),
      format: named ? "name" : "hex"
    };
  }
  return false;
}
function isValidCSSUnit(color) {
  return Boolean(matchers.CSS_UNIT.exec(String(color)));
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/generate.js
var hueStep = 2;
var saturationStep = 0.16;
var saturationStep2 = 0.05;
var brightnessStep1 = 0.05;
var brightnessStep2 = 0.15;
var lightColorCount = 5;
var darkColorCount = 4;
var darkColorMap = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function toHsv(_ref) {
  var r = _ref.r, g = _ref.g, b = _ref.b;
  var hsv = rgbToHsv(r, g, b);
  return {
    h: hsv.h * 360,
    s: hsv.s,
    v: hsv.v
  };
}
function toHex(_ref2) {
  var r = _ref2.r, g = _ref2.g, b = _ref2.b;
  return "#".concat(rgbToHex(r, g, b, false));
}
function mix(rgb1, rgb2, amount) {
  var p = amount / 100;
  var rgb = {
    r: (rgb2.r - rgb1.r) * p + rgb1.r,
    g: (rgb2.g - rgb1.g) * p + rgb1.g,
    b: (rgb2.b - rgb1.b) * p + rgb1.b
  };
  return rgb;
}
function getHue(hsv, i, light) {
  var hue;
  if (Math.round(hsv.h) >= 60 && Math.round(hsv.h) <= 240) {
    hue = light ? Math.round(hsv.h) - hueStep * i : Math.round(hsv.h) + hueStep * i;
  } else {
    hue = light ? Math.round(hsv.h) + hueStep * i : Math.round(hsv.h) - hueStep * i;
  }
  if (hue < 0) {
    hue += 360;
  } else if (hue >= 360) {
    hue -= 360;
  }
  return hue;
}
function getSaturation(hsv, i, light) {
  if (hsv.h === 0 && hsv.s === 0) {
    return hsv.s;
  }
  var saturation;
  if (light) {
    saturation = hsv.s - saturationStep * i;
  } else if (i === darkColorCount) {
    saturation = hsv.s + saturationStep;
  } else {
    saturation = hsv.s + saturationStep2 * i;
  }
  if (saturation > 1) {
    saturation = 1;
  }
  if (light && i === lightColorCount && saturation > 0.1) {
    saturation = 0.1;
  }
  if (saturation < 0.06) {
    saturation = 0.06;
  }
  return Number(saturation.toFixed(2));
}
function getValue(hsv, i, light) {
  var value;
  if (light) {
    value = hsv.v + brightnessStep1 * i;
  } else {
    value = hsv.v - brightnessStep2 * i;
  }
  if (value > 1) {
    value = 1;
  }
  return Number(value.toFixed(2));
}
function generate(color) {
  var opts = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var patterns = [];
  var pColor = inputToRGB(color);
  for (var i = lightColorCount; i > 0; i -= 1) {
    var hsv = toHsv(pColor);
    var colorString = toHex(inputToRGB({
      h: getHue(hsv, i, true),
      s: getSaturation(hsv, i, true),
      v: getValue(hsv, i, true)
    }));
    patterns.push(colorString);
  }
  patterns.push(toHex(pColor));
  for (var _i = 1; _i <= darkColorCount; _i += 1) {
    var _hsv = toHsv(pColor);
    var _colorString = toHex(inputToRGB({
      h: getHue(_hsv, _i),
      s: getSaturation(_hsv, _i),
      v: getValue(_hsv, _i)
    }));
    patterns.push(_colorString);
  }
  if (opts.theme === "dark") {
    return darkColorMap.map(function(_ref3) {
      var index = _ref3.index, opacity = _ref3.opacity;
      var darkColorString = toHex(mix(inputToRGB(opts.backgroundColor || "#141414"), inputToRGB(patterns[index]), opacity * 100));
      return darkColorString;
    });
  }
  return patterns;
}

// node_modules/.pnpm/@ant-design+colors@7.0.0/node_modules/@ant-design/colors/es/index.js
var presetPrimaryColors = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
};
var presetPalettes = {};
var presetDarkPalettes = {};
Object.keys(presetPrimaryColors).forEach(function(key) {
  presetPalettes[key] = generate(presetPrimaryColors[key]);
  presetPalettes[key].primary = presetPalettes[key][5];
  presetDarkPalettes[key] = generate(presetPrimaryColors[key], {
    theme: "dark",
    backgroundColor: "#141414"
  });
  presetDarkPalettes[key].primary = presetDarkPalettes[key][5];
});
var red = presetPalettes.red;
var volcano = presetPalettes.volcano;
var gold = presetPalettes.gold;
var orange = presetPalettes.orange;
var yellow = presetPalettes.yellow;
var lime = presetPalettes.lime;
var green = presetPalettes.green;
var cyan = presetPalettes.cyan;
var blue = presetPalettes.blue;
var geekblue = presetPalettes.geekblue;
var purple = presetPalettes.purple;
var magenta = presetPalettes.magenta;
var grey = presetPalettes.grey;
var gray = presetPalettes.grey;

// node_modules/.pnpm/@babel+runtime@7.22.10/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function(sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var React2 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_lodash = __toESM(require_lodash());

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/canUseDom.js
function canUseDom() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/contains.js
function contains(root, n) {
  if (!root) {
    return false;
  }
  if (root.contains) {
    return root.contains(n);
  }
  var node = n;
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/dynamicCSS.js
var APPEND_ORDER = "data-rc-order";
var APPEND_PRIORITY = "data-rc-priority";
var MARK_KEY = "rc-util-key";
var containerCache = /* @__PURE__ */ new Map();
function getMark() {
  var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, mark = _ref.mark;
  if (mark) {
    return mark.startsWith("data-") ? mark : "data-".concat(mark);
  }
  return MARK_KEY;
}
function getContainer(option) {
  if (option.attachTo) {
    return option.attachTo;
  }
  var head4 = document.querySelector("head");
  return head4 || document.body;
}
function getOrder(prepend) {
  if (prepend === "queue") {
    return "prependQueue";
  }
  return prepend ? "prepend" : "append";
}
function findStyles(container) {
  return Array.from((containerCache.get(container) || container).children).filter(function(node) {
    return node.tagName === "STYLE";
  });
}
function injectCSS(css) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!canUseDom()) {
    return null;
  }
  var csp = option.csp, prepend = option.prepend, _option$priority = option.priority, priority = _option$priority === void 0 ? 0 : _option$priority;
  var mergedOrder = getOrder(prepend);
  var isPrependQueue = mergedOrder === "prependQueue";
  var styleNode = document.createElement("style");
  styleNode.setAttribute(APPEND_ORDER, mergedOrder);
  if (isPrependQueue && priority) {
    styleNode.setAttribute(APPEND_PRIORITY, "".concat(priority));
  }
  if (csp !== null && csp !== void 0 && csp.nonce) {
    styleNode.nonce = csp === null || csp === void 0 ? void 0 : csp.nonce;
  }
  styleNode.innerHTML = css;
  var container = getContainer(option);
  var firstChild = container.firstChild;
  if (prepend) {
    if (isPrependQueue) {
      var existStyle = findStyles(container).filter(function(node) {
        if (!["prepend", "prependQueue"].includes(node.getAttribute(APPEND_ORDER))) {
          return false;
        }
        var nodePriority = Number(node.getAttribute(APPEND_PRIORITY) || 0);
        return priority >= nodePriority;
      });
      if (existStyle.length) {
        container.insertBefore(styleNode, existStyle[existStyle.length - 1].nextSibling);
        return styleNode;
      }
    }
    container.insertBefore(styleNode, firstChild);
  } else {
    container.appendChild(styleNode);
  }
  return styleNode;
}
function findExistNode(key) {
  var option = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var container = getContainer(option);
  return findStyles(container).find(function(node) {
    return node.getAttribute(getMark(option)) === key;
  });
}
function syncRealContainer(container, option) {
  var cachedRealContainer = containerCache.get(container);
  if (!cachedRealContainer || !contains(document, cachedRealContainer)) {
    var placeholderStyle = injectCSS("", option);
    var parentNode = placeholderStyle.parentNode;
    containerCache.set(container, parentNode);
    container.removeChild(placeholderStyle);
  }
}
function updateCSS(css, key) {
  var option = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  var container = getContainer(option);
  syncRealContainer(container, option);
  var existNode = findExistNode(key, option);
  if (existNode) {
    var _option$csp, _option$csp2;
    if ((_option$csp = option.csp) !== null && _option$csp !== void 0 && _option$csp.nonce && existNode.nonce !== ((_option$csp2 = option.csp) === null || _option$csp2 === void 0 ? void 0 : _option$csp2.nonce)) {
      var _option$csp3;
      existNode.nonce = (_option$csp3 = option.csp) === null || _option$csp3 === void 0 ? void 0 : _option$csp3.nonce;
    }
    if (existNode.innerHTML !== css) {
      existNode.innerHTML = css;
    }
    return existNode;
  }
  var newNode = injectCSS(css, option);
  newNode.setAttribute(getMark(option), key);
  return newNode;
}

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/Dom/shadow.js
function getRoot(ele) {
  var _ele$getRootNode;
  return ele === null || ele === void 0 ? void 0 : (_ele$getRootNode = ele.getRootNode) === null || _ele$getRootNode === void 0 ? void 0 : _ele$getRootNode.call(ele);
}
function inShadow(ele) {
  return getRoot(ele) instanceof ShadowRoot;
}
function getShadowRoot(ele) {
  return inShadow(ele) ? getRoot(ele) : null;
}

// node_modules/.pnpm/rc-util@5.36.0_react-dom@18.2.0_react@18.2.0/node_modules/rc-util/es/warning.js
var warned = {};
var preWarningFns = [];
var preMessage = function preMessage2(fn) {
  preWarningFns.push(fn);
};
function warning(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "warning");
    }, message);
    if (finalMessage) {
      console.error("Warning: ".concat(finalMessage));
    }
  }
}
function note(valid, message) {
  if (!valid && console !== void 0) {
    var finalMessage = preWarningFns.reduce(function(msg, preMessageFn) {
      return preMessageFn(msg !== null && msg !== void 0 ? msg : "", "note");
    }, message);
    if (finalMessage) {
      console.warn("Note: ".concat(finalMessage));
    }
  }
}
function resetWarned() {
  warned = {};
}
function call(method, valid, message) {
  if (!valid && !warned[message]) {
    method(false, message);
    warned[message] = true;
  }
}
function warningOnce(valid, message) {
  call(warning, valid, message);
}
function noteOnce(valid, message) {
  call(note, valid, message);
}
warningOnce.preMessage = preMessage;
warningOnce.resetWarned = resetWarned;
warningOnce.noteOnce = noteOnce;
var warning_default = warningOnce;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/utils.js
var import_react2 = __toESM(require_react());
function warning2(valid, message) {
  warning_default(valid, "[@ant-design/icons] ".concat(message));
}
function isIconDefinition(target) {
  return _typeof(target) === "object" && typeof target.name === "string" && typeof target.theme === "string" && (_typeof(target.icon) === "object" || typeof target.icon === "function");
}
function normalizeAttrs() {
  var attrs = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(attrs).reduce(function(acc, key) {
    var val = attrs[key];
    switch (key) {
      case "class":
        acc.className = val;
        delete acc.class;
        break;
      default:
        delete acc[key];
        acc[(0, import_lodash.default)(key)] = val;
    }
    return acc;
  }, {});
}
function generate2(node, key, rootProps) {
  if (!rootProps) {
    return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2({
      key
    }, normalizeAttrs(node.attrs)), (node.children || []).map(function(child, index) {
      return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
    }));
  }
  return /* @__PURE__ */ import_react2.default.createElement(node.tag, _objectSpread2(_objectSpread2({
    key
  }, normalizeAttrs(node.attrs)), rootProps), (node.children || []).map(function(child, index) {
    return generate2(child, "".concat(key, "-").concat(node.tag, "-").concat(index));
  }));
}
function getSecondaryColor(primaryColor) {
  return generate(primaryColor)[0];
}
function normalizeTwoToneColors(twoToneColor) {
  if (!twoToneColor) {
    return [];
  }
  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor];
}
var iconStyles = "\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n";
var useInsertStyles = function useInsertStyles2(eleRef) {
  var _useContext = (0, import_react2.useContext)(Context_default), csp = _useContext.csp, prefixCls = _useContext.prefixCls;
  var mergedStyleStr = iconStyles;
  if (prefixCls) {
    mergedStyleStr = mergedStyleStr.replace(/anticon/g, prefixCls);
  }
  (0, import_react2.useEffect)(function() {
    var ele = eleRef.current;
    var shadowRoot = getShadowRoot(ele);
    updateCSS(mergedStyleStr, "@ant-design-icons", {
      prepend: true,
      csp,
      attachTo: shadowRoot
    });
  }, []);
};

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/IconBase.js
var _excluded = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"];
var twoToneColorPalette = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: false
};
function setTwoToneColors(_ref) {
  var primaryColor = _ref.primaryColor, secondaryColor = _ref.secondaryColor;
  twoToneColorPalette.primaryColor = primaryColor;
  twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
  twoToneColorPalette.calculated = !!secondaryColor;
}
function getTwoToneColors() {
  return _objectSpread2({}, twoToneColorPalette);
}
var IconBase = function IconBase2(props) {
  var icon2 = props.icon, className = props.className, onClick = props.onClick, style2 = props.style, primaryColor = props.primaryColor, secondaryColor = props.secondaryColor, restProps = _objectWithoutProperties(props, _excluded);
  var svgRef = React2.useRef();
  var colors = twoToneColorPalette;
  if (primaryColor) {
    colors = {
      primaryColor,
      secondaryColor: secondaryColor || getSecondaryColor(primaryColor)
    };
  }
  useInsertStyles(svgRef);
  warning2(isIconDefinition(icon2), "icon should be icon definiton, but got ".concat(icon2));
  if (!isIconDefinition(icon2)) {
    return null;
  }
  var target = icon2;
  if (target && typeof target.icon === "function") {
    target = _objectSpread2(_objectSpread2({}, target), {}, {
      icon: target.icon(colors.primaryColor, colors.secondaryColor)
    });
  }
  return generate2(target.icon, "svg-".concat(target.name), _objectSpread2(_objectSpread2({
    className,
    onClick,
    style: style2,
    "data-icon": target.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, restProps), {}, {
    ref: svgRef
  }));
};
IconBase.displayName = "IconReact";
IconBase.getTwoToneColors = getTwoToneColors;
IconBase.setTwoToneColors = setTwoToneColors;
var IconBase_default = IconBase;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/twoTonePrimaryColor.js
function setTwoToneColor(twoToneColor) {
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return IconBase_default.setTwoToneColors({
    primaryColor,
    secondaryColor
  });
}
function getTwoToneColor() {
  var colors = IconBase_default.getTwoToneColors();
  if (!colors.calculated) {
    return colors.primaryColor;
  }
  return [colors.primaryColor, colors.secondaryColor];
}

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js
var _excluded2 = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
setTwoToneColor(blue.primary);
var Icon = /* @__PURE__ */ React3.forwardRef(function(props, ref) {
  var _classNames;
  var className = props.className, icon2 = props.icon, spin = props.spin, rotate = props.rotate, tabIndex = props.tabIndex, onClick = props.onClick, twoToneColor = props.twoToneColor, restProps = _objectWithoutProperties(props, _excluded2);
  var _React$useContext = React3.useContext(Context_default), _React$useContext$pre = _React$useContext.prefixCls, prefixCls = _React$useContext$pre === void 0 ? "anticon" : _React$useContext$pre, rootClassName = _React$useContext.rootClassName;
  var classString = (0, import_classnames.default)(rootClassName, prefixCls, (_classNames = {}, _defineProperty(_classNames, "".concat(prefixCls, "-").concat(icon2.name), !!icon2.name), _defineProperty(_classNames, "".concat(prefixCls, "-spin"), !!spin || icon2.name === "loading"), _classNames), className);
  var iconTabIndex = tabIndex;
  if (iconTabIndex === void 0 && onClick) {
    iconTabIndex = -1;
  }
  var svgStyle = rotate ? {
    msTransform: "rotate(".concat(rotate, "deg)"),
    transform: "rotate(".concat(rotate, "deg)")
  } : void 0;
  var _normalizeTwoToneColo = normalizeTwoToneColors(twoToneColor), _normalizeTwoToneColo2 = _slicedToArray(_normalizeTwoToneColo, 2), primaryColor = _normalizeTwoToneColo2[0], secondaryColor = _normalizeTwoToneColo2[1];
  return /* @__PURE__ */ React3.createElement("span", _extends({
    role: "img",
    "aria-label": icon2.name
  }, restProps, {
    ref,
    tabIndex: iconTabIndex,
    onClick,
    className: classString
  }), /* @__PURE__ */ React3.createElement(IconBase_default, {
    icon: icon2,
    primaryColor,
    secondaryColor,
    style: svgStyle
  }));
});
Icon.displayName = "AntdIcon";
Icon.getTwoToneColor = getTwoToneColor;
Icon.setTwoToneColor = setTwoToneColor;
var AntdIcon_default = Icon;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CodeOutlined.js
var React4 = __toESM(require_react());

// node_modules/.pnpm/@ant-design+icons-svg@4.3.0/node_modules/@ant-design/icons-svg/es/asn/CodeOutlined.js
var CodeOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 00308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 00-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z" } }] }, "name": "code", "theme": "outlined" };
var CodeOutlined_default = CodeOutlined;

// node_modules/.pnpm/@ant-design+icons@5.2.5_react-dom@18.2.0_react@18.2.0/node_modules/@ant-design/icons/es/icons/CodeOutlined.js
var CodeOutlined2 = function CodeOutlined3(props, ref) {
  return /* @__PURE__ */ React4.createElement(AntdIcon_default, _extends({}, props, {
    ref,
    icon: CodeOutlined_default
  }));
};
if (true) {
  CodeOutlined2.displayName = "CodeOutlined";
}
var CodeOutlined_default2 = /* @__PURE__ */ React4.forwardRef(CodeOutlined2);

// src/DataGenerator.tsx
var import_antd = __toESM(require_antd(), 1);
var import_veramo_react = __toESM(require_veramo_react(), 1);
var import_react_query = __toESM(require_react_query(), 1);

// src/utils/dataGenerator.ts
var import_random_words = __toESM(require_random_words(), 1);

// src/utils/kudos-messages.ts
var kudosMessages = [
  "Great job on that project; your expertise really shined through!",
  "Your creativity never ceases to amaze me; well done!",
  "Thanks for stepping up; you're a team player.",
  "Outstanding presentation; you nailed it!",
  "Your hard work is paying off; keep it up!",
  "Excellent problem-solving; you found a solution no one else could.",
  "Your dedication to quality is commendable.",
  "Thanks for going the extra mile; it didn't go unnoticed.",
  "Your leadership skills are inspiring to us all.",
  "You have a knack for making complex issues look easy; kudos!",
  "Consistent performance, well done!",
  "Your enthusiasm is contagious.",
  "You've got a great attitude, and it shows.",
  "Thanks for always being so dependable.",
  "You make teamwork look easy.",
  "Fantastic effort on the latest project.",
  "You're setting the bar high for the rest of us.",
  "You're a rockstar at what you do.",
  "Excellent execution; couldn't ask for more.",
  "Your drive for success is admirable.",
  "You've outdone yourself, again.",
  "Your focus and precision are remarkable.",
  "You're a great communicator; thanks for the clarity.",
  "Your work ethic is second to none.",
  "Your commitment to our mission is impressive.",
  "Your resilience during challenges is commendable.",
  "You've really mastered your craft.",
  "Your adaptability is a key asset.",
  "Thanks for taking ownership and seeing it through.",
  "Your positivity lights up the room.",
  "You made sense of the chaos; well played.",
  "Your contribution to the team is invaluable.",
  "Great collaboration skills; you make us better.",
  "You're always two steps ahead; keep it up.",
  "Exceptional attention to detail; it makes a difference.",
  "Your insights are always so helpful.",
  "You handled that difficult situation with grace.",
  "Thanks for the quick turnaround; it saved the day.",
  "Your humility adds to your greatness.",
  "Your initiative shows your dedication.",
  "Your mentorship has been invaluable.",
  "Thanks for being a standout colleague.",
  "You make a real difference; thank you.",
  "Your discipline is admirable.",
  "You bring out the best in others.",
  "You're a great example to us all.",
  "Thanks for always respecting deadlines.",
  "Your work always exceeds expectations.",
  "You're a pro at customer service.",
  "You have a great knack for problem-solving.",
  "You're very resourceful; it doesn't go unnoticed.",
  "Your passion for the work is inspiring.",
  "You keep the team focused and on track.",
  "Your technical skills are unmatched.",
  "You make challenging tasks look easy.",
  "Your innovation is a game-changer.",
  "Thanks for always being so organized.",
  "Your ability to lead is truly remarkable.",
  "You're great at making the workplace enjoyable.",
  "Thanks for the unwavering professionalism.",
  "Your strategic thinking is exceptional.",
  "You're the go-to person for sound advice.",
  "Your dependability is rock-solid.",
  "You're a quick learner; it's impressive.",
  "Thanks for adding value to every team meeting.",
  "Your confidence boosts the team's morale.",
  "You're the epitome of reliability.",
  "You make success look effortless.",
  "You have an eye for quality; it's refreshing.",
  "Your empathy makes you a great teammate.",
  "Your perseverance has paid off; well done.",
  "You're a visionary; you see the bigger picture.",
  "You've set a new standard for excellence.",
  "Your contributions to the project were key.",
  "You have a strong sense of responsibility.",
  "You're great at juggling multiple tasks.",
  "You've really fine-tuned your skills.",
  "You make the impossible look possible.",
  "Your ability to stay calm under pressure is admirable.",
  "Thanks for always bringing your A-game.",
  "Your positive energy is infectious.",
  "You're an excellent role model for the team.",
  "You're a catalyst for change; great work.",
  "Your work always hits the mark.",
  "Your ability to handle stress is inspiring.",
  "Your fearlessness in taking risks is commendable.",
  "You're the definition of a team player.",
  "You keep setting new benchmarks; amazing.",
  "Your humility makes you an even greater leader.",
  "Your time management skills are top-notch.",
  "You always bring fresh ideas to the table.",
  "Your professionalism sets you apart.",
  "Thanks for always stepping in when needed.",
  "You're an incredible asset to this team."
];

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/utils/escape.js
var escape_exports = {};
__export(escape_exports, {
  xml: () => xml
});
function xml(content) {
  return content.replace(/&/g, "&amp;").replace(/'/g, "&apos;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/utils/license.js
function xml2(style2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
  const title = (_b = (_a = style2.meta) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "Unnamed";
  const creator = (_d = (_c = style2.meta) === null || _c === void 0 ? void 0 : _c.creator) !== null && _d !== void 0 ? _d : "Unknown";
  let description = `"${title}" by "${creator}"`;
  if ((_f = (_e = style2.meta) === null || _e === void 0 ? void 0 : _e.license) === null || _f === void 0 ? void 0 : _f.name) {
    description += `, licensed under "${style2.meta.license.name}".`;
  }
  description += " / Remix of the original. - Created with dicebear.com";
  const xmlTitle = `<dc:title>${xml(title)}</dc:title>`;
  const xmlCreator = `<dc:creator><cc:Agent rdf:about="${xml((_h = (_g = style2.meta) === null || _g === void 0 ? void 0 : _g.homepage) !== null && _h !== void 0 ? _h : "")}"><dc:title>${xml(creator)}</dc:title></cc:Agent></dc:creator>`;
  const xmlSource = ((_j = style2.meta) === null || _j === void 0 ? void 0 : _j.source) ? `<dc:source>${xml(style2.meta.source)}</dc:source>` : "";
  const xmlLicense = ((_l = (_k = style2.meta) === null || _k === void 0 ? void 0 : _k.license) === null || _l === void 0 ? void 0 : _l.url) ? `<cc:license rdf:resource="${xml(style2.meta.license.url)}" />` : "";
  return `<desc>${description}</desc><metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:RDF><cc:Work>` + xmlTitle + xmlCreator + xmlSource + xmlLicense + "</cc:Work></rdf:RDF></metadata>";
}
function exif(style2) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _j;
  const title = (_b = (_a = style2.meta) === null || _a === void 0 ? void 0 : _a.title) !== null && _b !== void 0 ? _b : "Unnamed";
  const creator = (_d = (_c = style2.meta) === null || _c === void 0 ? void 0 : _c.creator) !== null && _d !== void 0 ? _d : "Unknown";
  let copyright = `"${title}" by "${creator}"`;
  if ((_f = (_e = style2.meta) === null || _e === void 0 ? void 0 : _e.license) === null || _f === void 0 ? void 0 : _f.name) {
    copyright += `, licensed under "${style2.meta.license.name}".`;
  }
  copyright += " / Remix of the original.";
  const exif2 = {
    ImageDescription: `${copyright} - Created with dicebear.com`,
    Copyright: copyright,
    "XMP-dc:Title": title,
    "XMP-dc:Creator": creator
  };
  if ((_g = style2.meta) === null || _g === void 0 ? void 0 : _g.source) {
    exif2["XMP-dc:Source"] = style2.meta.source;
  }
  if ((_j = (_h = style2.meta) === null || _h === void 0 ? void 0 : _h.license) === null || _j === void 0 ? void 0 : _j.url) {
    exif2["XMP-cc:License"] = style2.meta.license.url;
  }
  return exif2;
}

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/utils/prng.js
var MIN = -2147483648;
var MAX = 2147483647;
function xorshift(value) {
  value ^= value << 13;
  value ^= value >> 17;
  value ^= value << 5;
  return value;
}
function hashSeed(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash << 5) - hash + seed.charCodeAt(i) | 0;
    hash = xorshift(hash);
  }
  return hash;
}
function create(seed = "") {
  seed = seed.toString();
  let value = hashSeed(seed) || 1;
  const next = () => value = xorshift(value);
  const integer = (min, max) => {
    return Math.floor((next() - MIN) / (MAX - MIN) * (max + 1 - min) + min);
  };
  return {
    seed,
    next,
    bool(likelihood = 50) {
      return integer(1, 100) <= likelihood;
    },
    integer(min, max) {
      return integer(min, max);
    },
    pick(arr, fallback) {
      var _a;
      if (arr.length === 0) {
        next();
        return fallback;
      }
      return (_a = arr[integer(0, arr.length - 1)]) !== null && _a !== void 0 ? _a : fallback;
    },
    shuffle(arr) {
      const internalPrng = create(next().toString());
      return arr.sort(() => internalPrng.integer(-1, 1));
    },
    string(length, characters = "abcdefghijklmnopqrstuvwxyz1234567890") {
      const internalPrng = create(next().toString());
      let str = "";
      for (let i = 0; i < length; i++) {
        str += characters[internalPrng.integer(0, characters.length - 1)];
      }
      return str;
    }
  };
}

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/utils/svg.js
function getViewBox(result) {
  let viewBox = result.attributes["viewBox"].split(" ");
  let x = parseInt(viewBox[0]);
  let y = parseInt(viewBox[1]);
  let width = parseInt(viewBox[2]);
  let height = parseInt(viewBox[3]);
  return {
    x,
    y,
    width,
    height
  };
}
function addBackground(result, primaryColor, secondaryColor, type, rotation) {
  let { width, height, x, y } = getViewBox(result);
  const solidBackground = `<rect fill="${primaryColor}" width="${width}" height="${height}" x="${x}" y="${y}" />`;
  switch (type) {
    case "solid":
      return solidBackground + result.body;
    case "gradientLinear":
      return `<rect fill="url(#backgroundLinear)" width="${width}" height="${height}" x="${x}" y="${y}" /><defs><linearGradient id="backgroundLinear" gradientTransform="rotate(${rotation} 0.5 0.5)"><stop stop-color="${primaryColor}"/><stop offset="1" stop-color="${secondaryColor}"/></linearGradient></defs>` + result.body;
  }
}
function addScale(result, scale) {
  let { width, height, x, y } = getViewBox(result);
  let percent = scale ? (scale - 100) / 100 : 0;
  let translateX = (width / 2 + x) * percent * -1;
  let translateY = (height / 2 + y) * percent * -1;
  return `<g transform="translate(${translateX} ${translateY}) scale(${scale / 100})">${result.body}</g>`;
}
function addTranslate(result, x, y) {
  let viewBox = getViewBox(result);
  let translateX = (viewBox.width + viewBox.x * 2) * ((x !== null && x !== void 0 ? x : 0) / 100);
  let translateY = (viewBox.height + viewBox.y * 2) * ((y !== null && y !== void 0 ? y : 0) / 100);
  return `<g transform="translate(${translateX} ${translateY})">${result.body}</g>`;
}
function addRotate(result, rotate) {
  let { width, height, x, y } = getViewBox(result);
  return `<g transform="rotate(${rotate}, ${width / 2 + x}, ${height / 2 + y})">${result.body}</g>`;
}
function addFlip(result) {
  let { width, x } = getViewBox(result);
  return `<g transform="scale(-1 1) translate(${width * -1 - x * 2} 0)">${result.body}</g>`;
}
function addViewboxMask(result, radius) {
  let { width, height, x, y } = getViewBox(result);
  let rx = radius ? width * radius / 100 : 0;
  let ry = radius ? height * radius / 100 : 0;
  return `<mask id="viewboxMask"><rect width="${width}" height="${height}" rx="${rx}" ry="${ry}" x="${x}" y="${y}" fill="#fff" /></mask><g mask="url(#viewboxMask)">${result.body}</g>`;
}
function createAttrString(result) {
  const attributes = {
    xmlns: "http://www.w3.org/2000/svg",
    ...result.attributes
  };
  return Object.keys(attributes).map((attr) => `${xml(attr)}="${xml(attributes[attr])}"`).join(" ");
}
function randomizeIds(result) {
  const prng = create();
  const ids = {};
  return result.body.replace(/(id="|url\(#)([a-z0-9-_]+)([")])/gi, (match, m1, m2, m3) => {
    ids[m2] = ids[m2] || prng.string(8);
    return `${m1}${ids[m2]}${m3}`;
  });
}

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/schema.js
var schema = {
  type: "object",
  $schema: "http://json-schema.org/draft-07/schema#",
  properties: {
    seed: {
      type: "string"
    },
    flip: {
      type: "boolean",
      default: false
    },
    rotate: {
      type: "integer",
      minimum: 0,
      maximum: 360,
      default: 0
    },
    scale: {
      type: "integer",
      minimum: 0,
      maximum: 200,
      default: 100
    },
    radius: {
      type: "integer",
      minimum: 0,
      maximum: 50,
      default: 0
    },
    size: {
      type: "integer",
      minimum: 1
    },
    backgroundColor: {
      type: "array",
      items: {
        type: "string",
        pattern: "^(transparent|[a-fA-F0-9]{6})$"
      }
    },
    backgroundType: {
      type: "array",
      items: {
        type: "string",
        enum: ["solid", "gradientLinear"]
      },
      default: ["solid"]
    },
    backgroundRotation: {
      type: "array",
      items: {
        type: "integer",
        minimum: -360,
        maximum: 360
      },
      default: [
        0,
        360
      ]
    },
    translateX: {
      type: "integer",
      minimum: -100,
      maximum: 100,
      default: 0
    },
    translateY: {
      type: "integer",
      minimum: -100,
      maximum: 100,
      default: 0
    },
    clip: {
      type: "boolean",
      default: true
    },
    randomizeIds: {
      type: "boolean",
      default: false
    }
  }
};

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/utils/options.js
function defaults(schema30) {
  var _a;
  let result = {};
  let props = (_a = schema30.properties) !== null && _a !== void 0 ? _a : {};
  Object.keys(props).forEach((key) => {
    let val = props[key];
    if (typeof val === "object" && void 0 !== val.default) {
      if (Array.isArray(val.default)) {
        result[key] = [...val.default];
      } else if (typeof val.default === "object") {
        result[key] = { ...val.default };
      } else {
        result[key] = val.default;
      }
    }
  });
  return result;
}
function merge(style2, options) {
  var _a;
  let result = {
    ...defaults(schema),
    ...defaults((_a = style2.schema) !== null && _a !== void 0 ? _a : {}),
    ...options
  };
  return JSON.parse(JSON.stringify(result));
}

// node_modules/.pnpm/@dicebear+converter@7.0.1/node_modules/@dicebear/converter/lib/utils/mime-type.js
function getMimeType(format2) {
  switch (format2) {
    case "svg":
      return "image/svg+xml";
    case "png":
    case "jpeg":
      return `image/${format2}`;
    default:
      throw new Error(`Unsupported format: ${format2}`);
  }
}

// node_modules/.pnpm/@dicebear+converter@7.0.1/node_modules/@dicebear/converter/lib/utils/svg.js
function ensureSize(svg, defaultSize = 512) {
  let size = defaultSize;
  svg = svg.replace(/<svg([^>]*)/, (match, g1) => {
    const found = g1.match(/width="([^"]+)"/);
    if (found) {
      size = parseInt(found[1]);
    }
    if (g1.match(/width="([^"]+)"/)) {
      g1 = g1.replace(/width="([^"]+)"/, `width="${size}"`);
    } else {
      g1 += ` width="${size}"`;
    }
    if (g1.match(/height="([^"]+)"/)) {
      g1 = g1.replace(/height="([^"]+)"/, `height="${size}"`);
    } else {
      g1 += ` height="${size}"`;
    }
    return `<svg${g1}`;
  });
  return { svg, size };
}

// node_modules/.pnpm/@dicebear+converter@7.0.1/node_modules/@dicebear/converter/lib/utils/text.js
var encoder;
function getEncoder() {
  if (!encoder) {
    encoder = new TextEncoder();
  }
  return encoder;
}

// node_modules/.pnpm/@dicebear+converter@7.0.1/node_modules/@dicebear/converter/lib/core.js
var toFormat = function(svg, format2, exif2) {
  return {
    toDataUri: () => toDataUri(svg, format2, exif2),
    toFile: (name) => toFile(name, svg, format2, exif2),
    toArrayBuffer: () => toArrayBuffer(svg, format2, exif2)
  };
};
async function toDataUri(svg, format2, exif2) {
  if ("svg" === format2) {
    return `data:${getMimeType(format2)};utf8,${encodeURIComponent(svg)}`;
  }
  const canvas = await toCanvas(svg, format2, exif2);
  return canvas.toDataURL(getMimeType(format2));
}
async function toArrayBuffer(rawSvg, format2, exif2) {
  if ("svg" === format2) {
    return getEncoder().encode(rawSvg);
  }
  const canvas = await toCanvas(rawSvg, format2, exif2);
  return await new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      blob ? resolve(blob.arrayBuffer()) : reject(new Error("Could not create blob"));
    }, getMimeType(format2));
  });
}
async function toFile(name, svg, format2, exif2) {
  const link = document.createElement("a");
  link.href = await toDataUri(svg, format2, exif2);
  link.download = name;
  link.click();
  link.remove();
}
async function toCanvas(rawSvg, format2, exif2) {
  if (exif2) {
    console.warn("The `exif` option is not supported in the browser version of `@dicebear/converter`. \nPlease use the node version of `@dicebear/converter` to generate images with exif data.");
  }
  let { svg, size } = ensureSize(rawSvg);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext("2d");
  if (null === context) {
    throw new Error("Could not get canvas context");
  }
  if (format2 === "jpeg") {
    context.fillStyle = "white";
    context.fillRect(0, 0, size, size);
  }
  var img = document.createElement("img");
  img.width = size;
  img.height = size;
  img.setAttribute("src", await toDataUri(svg, "svg"));
  return new Promise((resolve, reject) => {
    img.onload = () => {
      context.drawImage(img, 0, 0, size, size);
      resolve(canvas);
    };
    img.onerror = (e) => reject(e);
  });
}

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/utils/color.js
function convertColor(color) {
  return "transparent" === color ? color : `#${color}`;
}
function getBackgroundColors(prng, backgroundColor) {
  var _a;
  let shuffledBackgroundColors;
  if (backgroundColor.length <= 2) {
    prng.next();
    shuffledBackgroundColors = backgroundColor;
  } else {
    shuffledBackgroundColors = prng.shuffle(backgroundColor);
  }
  if (shuffledBackgroundColors.length === 0) {
    shuffledBackgroundColors = ["transparent"];
  }
  const primary = shuffledBackgroundColors[0];
  const secondary = (_a = shuffledBackgroundColors[1]) !== null && _a !== void 0 ? _a : shuffledBackgroundColors[0];
  return {
    primary: convertColor(primary),
    secondary: convertColor(secondary)
  };
}

// node_modules/.pnpm/@dicebear+core@7.0.1/node_modules/@dicebear/core/lib/core.js
function createAvatar(style2, options = {}) {
  var _a, _b, _c, _d, _e;
  options = merge(style2, options);
  const prng = create(options.seed);
  const result = style2.create({ prng, options });
  const { primary: primaryBackgroundColor, secondary: secondaryBackgroundColor } = getBackgroundColors(prng, (_a = options.backgroundColor) !== null && _a !== void 0 ? _a : []);
  const backgroundType = prng.pick((_b = options.backgroundType) !== null && _b !== void 0 ? _b : [], "solid");
  const backgroundRotation = prng.integer(((_c = options.backgroundRotation) === null || _c === void 0 ? void 0 : _c.length) ? Math.min(...options.backgroundRotation) : 0, ((_d = options.backgroundRotation) === null || _d === void 0 ? void 0 : _d.length) ? Math.max(...options.backgroundRotation) : 0);
  if (options.size) {
    result.attributes.width = options.size.toString();
    result.attributes.height = options.size.toString();
  }
  if (options.scale !== void 0 && options.scale !== 100) {
    result.body = addScale(result, options.scale);
  }
  if (options.flip) {
    result.body = addFlip(result);
  }
  if (options.rotate) {
    result.body = addRotate(result, options.rotate);
  }
  if (options.translateX || options.translateY) {
    result.body = addTranslate(result, options.translateX, options.translateY);
  }
  if (primaryBackgroundColor !== "transparent" && secondaryBackgroundColor !== "transparent") {
    result.body = addBackground(result, primaryBackgroundColor, secondaryBackgroundColor, backgroundType, backgroundRotation);
  }
  if (options.radius || options.clip) {
    result.body = addViewboxMask(result, (_e = options.radius) !== null && _e !== void 0 ? _e : 0);
  }
  if (options.randomizeIds) {
    result.body = randomizeIds(result);
  }
  const attributes = createAttrString(result);
  const metadata = xml2(style2);
  const exif2 = exif(style2);
  const svg = `<svg ${attributes}>${metadata}${result.body}</svg>`;
  return {
    toString: () => svg,
    toJson: () => {
      var _a2;
      return {
        svg,
        extra: {
          primaryBackgroundColor,
          secondaryBackgroundColor,
          backgroundType,
          backgroundRotation,
          ...(_a2 = result.extra) === null || _a2 === void 0 ? void 0 : _a2.call(result)
        }
      };
    },
    toDataUriSync: () => {
      return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
    },
    ...toFormat(svg, "svg"),
    png: ({ includeExif = false } = {}) => {
      return toFormat(svg, "png", includeExif ? exif2 : void 0);
    },
    jpeg: ({ includeExif = false } = {}) => {
      return toFormat(svg, "jpeg", includeExif ? exif2 : void 0);
    }
  };
}

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/index.js
var lib_exports = {};
__export(lib_exports, {
  create: () => create2,
  meta: () => meta,
  schema: () => schema4
});

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/index.js
var components_exports3 = {};
__export(components_exports3, {
  accessories: () => accessories,
  base: () => base2,
  clothing: () => clothing,
  clothingGraphic: () => clothingGraphic,
  eyebrows: () => eyebrows3,
  eyes: () => eyes3,
  facialHair: () => facialHair,
  mouth: () => mouth3,
  nose: () => nose,
  style: () => style,
  top: () => top
});

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/style.js
var style = {
  "circle": (components, colors) => {
    var _a, _b;
    return `<circle cx="132" cy="160" r="120" fill="${escape_exports.xml(`${colors.background}`)}"/><mask id="styleCircle-a" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="264" height="280"><path d="M264 0H0v160h12c0 66.27 53.73 120 120 120 66.27 0 120-53.73 120-120h12V0Z" fill="#fff"/></mask><g mask="url(#styleCircle-a)">${(_b = (_a = components.base) === null || _a === void 0 ? void 0 : _a.value(components, colors)) !== null && _b !== void 0 ? _b : ""}</g>`;
  },
  "default": (components, colors) => {
    var _a, _b;
    return `${(_b = (_a = components.base) === null || _a === void 0 ? void 0 : _a.value(components, colors)) !== null && _b !== void 0 ? _b : ""}`;
  }
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/base.js
var base2 = {
  "default": (components, colors) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    return `<path d="M132 36a56 56 0 0 0-56 56v6.17A12 12 0 0 0 66 110v14a12 12 0 0 0 10.3 11.88 56.04 56.04 0 0 0 31.7 44.73v18.4h-4a72 72 0 0 0-72 72v9h200v-9a72 72 0 0 0-72-72h-4v-18.39a56.04 56.04 0 0 0 31.7-44.73A12 12 0 0 0 198 124v-14a12 12 0 0 0-10-11.83V92a56 56 0 0 0-56-56Z" fill="${escape_exports.xml(`${colors.skin}`)}"/><path d="M108 180.61v8a55.79 55.79 0 0 0 24 5.39c8.59 0 16.73-1.93 24-5.39v-8a55.79 55.79 0 0 1-24 5.39 55.79 55.79 0 0 1-24-5.39Z" fill="#000" fill-opacity=".1"/><g transform="translate(0 170)">${(_b = (_a = components.clothing) === null || _a === void 0 ? void 0 : _a.value(components, colors)) !== null && _b !== void 0 ? _b : ""}</g><g transform="translate(78 134)">${(_d = (_c = components.mouth) === null || _c === void 0 ? void 0 : _c.value(components, colors)) !== null && _d !== void 0 ? _d : ""}</g><g transform="translate(104 122)">${(_f = (_e = components.nose) === null || _e === void 0 ? void 0 : _e.value(components, colors)) !== null && _f !== void 0 ? _f : ""}</g><g transform="translate(76 90)">${(_h = (_g = components.eyes) === null || _g === void 0 ? void 0 : _g.value(components, colors)) !== null && _h !== void 0 ? _h : ""}</g><g transform="translate(76 82)">${(_k = (_j = components.eyebrows) === null || _j === void 0 ? void 0 : _j.value(components, colors)) !== null && _k !== void 0 ? _k : ""}</g><g transform="translate(-1)">${(_m = (_l = components.top) === null || _l === void 0 ? void 0 : _l.value(components, colors)) !== null && _m !== void 0 ? _m : ""}</g><g transform="translate(49 72)">${(_p = (_o = components.facialHair) === null || _o === void 0 ? void 0 : _o.value(components, colors)) !== null && _p !== void 0 ? _p : ""}</g><g transform="translate(62 42)">${(_r = (_q = components.accessories) === null || _q === void 0 ? void 0 : _q.value(components, colors)) !== null && _r !== void 0 ? _r : ""}</g>`;
  }
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/clothing.js
var clothing = {
  "blazerAndShirt": (components, colors) => `<path d="M132.5 51.83c18.5 0 33.5-9.62 33.5-21.48 0-.36-.01-.7-.04-1.06A72 72 0 0 1 232 101.04V110H32v-8.95a72 72 0 0 1 67.05-71.83c-.03.37-.05.75-.05 1.13 0 11.86 15 21.48 33.5 21.48Z" fill="#E6E6E6"/><path d="M132.5 58.76c21.89 0 39.63-12.05 39.63-26.91 0-.6-.02-1.2-.08-1.8-2-.33-4.03-.59-6.1-.76.04.35.05.7.05 1.06 0 11.86-15 21.48-33.5 21.48S99 42.2 99 30.35c0-.38.02-.76.05-1.13-2.06.14-4.08.36-6.08.67-.07.65-.1 1.3-.1 1.96 0 14.86 17.74 26.91 39.63 26.91Z" fill="#000" fill-opacity=".16"/><path d="M100.78 29.12 101 28c-2.96.05-6 1-6 1l-.42.66A72.01 72.01 0 0 0 32 101.06V110h74s-10.7-51.56-5.24-80.8l.02-.08ZM158 110s11-53 5-82c2.96.05 6 1 6 1l.42.66a72.01 72.01 0 0 1 62.58 71.4V110h-74Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><path d="M101 28c-6 29 5 82 5 82H90L76 74l6-9-6-6 19-30s3.04-.95 6-1ZM163 28c6 29-5 82-5 82h16l14-36-6-9 6-6-19-30s-3.04-.95-6-1Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".15"/><path d="m183.42 85.77.87-2.24 6.27-4.7a4 4 0 0 1 4.85.05l6.6 5.12-18.59 1.77Z" fill="#E6E6E6"/>`,
  "blazerAndSweater": (components, colors) => `<path d="M132 57.05c14.91 0 27-11.2 27-25 0-1.01-.06-2.01-.2-3h1.2a72 72 0 0 1 72 72V110H32v-8.95a72 72 0 0 1 72-72h1.2c-.14.99-.2 1.99-.2 3 0 13.8 12.09 25 27 25Z" fill="#E6E6E6"/><path d="M100.78 29.12 101 28c-2.96.05-6 1-6 1l-.42.66A72.01 72.01 0 0 0 32 101.06V110h74s-10.7-51.56-5.24-80.8l.02-.08ZM158 110s11-53 5-82c2.96.05 6 1 6 1l.42.66a72.01 72.01 0 0 1 62.58 71.4V110h-74Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><path d="M101 28c-6 29 5 82 5 82H90L76 74l6-9-6-6 19-30s3.04-.95 6-1ZM163 28c6 29-5 82-5 82h16l14-36-6-9 6-6-19-30s-3.04-.95-6-1Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".15"/><path d="M108 21.54c-6.77 4.6-11 11.12-11 18.35 0 7.4 4.43 14.05 11.48 18.67l5.94-4.68 4.58.33-1-3.15.08-.06c-6.1-3.15-10.08-8.3-10.08-14.12V21.54ZM156 36.88c0 5.82-3.98 10.97-10.08 14.12l.08.06-1 3.15 4.58-.33 5.94 4.68C162.57 53.94 167 47.29 167 39.89c0-7.23-4.23-13.75-11-18.35v15.34Z" fill="#F2F2F2"/><path d="m183.42 85.77.87-2.24 6.27-4.7a4 4 0 0 1 4.85.05l6.6 5.12-18.59 1.77Z" fill="#E6E6E6"/>`,
  "collarAndSweater": (components, colors) => `<path d="M100.37 29.14a27.6 27.6 0 0 1 7.63-7.57v15.3c0 5.83 3.98 10.98 10.08 14.13l-.08.06.9 2.86c3.89 2 8.35 3.13 13.1 3.13s9.21-1.13 13.1-3.13l.9-2.86-.08-.06c6.1-3.15 10.08-8.3 10.08-14.12v-14.6a27.1 27.1 0 0 1 6.6 6.82 72 72 0 0 1 69.4 71.95V110H32v-8.95a72 72 0 0 1 68.37-71.9Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><path d="M108 21.57c-6.77 4.6-11 11.17-11 18.46 0 7.4 4.36 14.05 11.3 18.66l6.12-4.81 4.58.33-1-3.15.08-.06c-6.1-3.15-10.08-8.3-10.08-14.12v-15.3ZM156 36.88c0 5.82-3.98 10.97-10.08 14.12l.08.06-1 3.15 4.58-.33 5.65 4.45c6.63-4.6 10.77-11.1 10.77-18.3 0-6.92-3.82-13.2-10-17.75v14.6Z" fill="#fff" fill-opacity=".75"/>`,
  "graphicShirt": (components, colors) => {
    var _a, _b;
    return `<path d="M132.5 54C151 54 166 44.37 166 32.5c0-1.1-.13-2.18-.38-3.23A72 72 0 0 1 232 101.05V110H32v-8.95A72 72 0 0 1 99.4 29.2a14.1 14.1 0 0 0-.4 3.3C99 44.37 114 54 132.5 54Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><g transform="translate(77 58)">${(_b = (_a = components.clothingGraphic) === null || _a === void 0 ? void 0 : _a.value(components, colors)) !== null && _b !== void 0 ? _b : ""}</g>`;
  },
  "hoodie": (components, colors) => `<path d="M108 14.7c-15.52 3.68-27.1 10.83-30.77 19.44A72.02 72.02 0 0 0 32 101v9h200v-9a72.02 72.02 0 0 0-45.23-66.86C183.1 25.53 171.52 18.38 156 14.7V32a24 24 0 1 1-48 0V14.7Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><path d="M102 63.34a67.1 67.1 0 0 1-7-2.82V110h7V63.34ZM162 63.34a67.04 67.04 0 0 0 7-2.82V98.5a3.5 3.5 0 1 1-7 0V63.34Z" fill="#F4F4F4"/><path d="M187.62 34.49a71.79 71.79 0 0 1 10.83 5.63C197.11 55.62 167.87 68 132 68c30.93 0 56-13.43 56-30 0-1.19-.13-2.36-.38-3.51ZM76.38 34.49a16.48 16.48 0 0 0-.38 3.5c0 16.58 25.07 30 56 30-35.87 0-65.1-12.38-66.45-27.88a71.79 71.79 0 0 1 10.83-5.63Z" fill="#000" fill-opacity=".16"/>`,
  "overall": (components, colors) => `<path d="M196 38.63V110H68V38.63a71.52 71.52 0 0 1 26-8.94v44.3h76V29.69a71.52 71.52 0 0 1 26 8.94Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><path d="M86 83a5 5 0 1 1-10 0 5 5 0 0 1 10 0ZM188 83a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z" fill="#F4F4F4"/>`,
  "shirtCrewNeck": (components, colors) => `<path d="M132.5 51.83c18.5 0 33.5-9.62 33.5-21.48 0-.36-.01-.7-.04-1.06A72 72 0 0 1 232 101.04V110H32v-8.95a72 72 0 0 1 67.05-71.83c-.03.37-.05.75-.05 1.13 0 11.86 15 21.48 33.5 21.48Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/><path d="M132.5 58.76c21.89 0 39.63-12.05 39.63-26.91 0-.6-.02-1.2-.08-1.8-2-.33-4.03-.59-6.1-.76.04.35.05.7.05 1.06 0 11.86-15 21.48-33.5 21.48S99 42.2 99 30.35c0-.38.02-.76.05-1.13-2.06.14-4.08.36-6.08.67-.07.65-.1 1.3-.1 1.96 0 14.86 17.74 26.91 39.63 26.91Z" fill="#000" fill-opacity=".08"/>`,
  "shirtScoopNeck": (components, colors) => `<path d="M132.5 65.83c27.34 0 49.5-13.2 49.5-29.48 0-1.37-.16-2.7-.46-4.02A72.03 72.03 0 0 1 232 101.05V110H32v-8.95A72.03 72.03 0 0 1 83.53 32a18 18 0 0 0-.53 4.35c0 16.28 22.16 29.48 49.5 29.48Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/>`,
  "shirtVNeck": (components, colors) => `<path d="M92.68 29.94A72.02 72.02 0 0 0 32 101.05V110h200v-8.95a72.02 72.02 0 0 0-60.68-71.11 23.87 23.87 0 0 1-7.56 13.6l-29.08 26.23a4 4 0 0 1-5.36 0l-29.08-26.23a23.87 23.87 0 0 1-7.56-13.6Z" fill="${escape_exports.xml(`${colors.clothes}`)}"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/mouth.js
var mouth3 = {
  "concerned": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M35.12 29.87a19 19 0 0 1 37.77.09c.08.77-.77 2.04-1.85 2.04H37.1C36 32 35 30.82 35.12 29.87Z" fill="#000" fill-opacity=".7"/><path d="M69.59 32H38.4a11 11 0 0 1 15.6-6.8A11 11 0 0 1 69.59 32Z" fill="#FF4F6D"/><path d="M66.57 17.75A5 5 0 0 1 65 18H44c-.8 0-1.57-.2-2.24-.53A18.92 18.92 0 0 1 54 13c4.82 0 9.22 1.8 12.57 4.75Z" fill="#fff"/>`,
  "default": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M40 15a14 14 0 1 0 28 0" fill="#000" fill-opacity=".7"/>`,
  "disbelief": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M40 29a14 14 0 1 1 28 0" fill="#000" fill-opacity=".7"/>`,
  "eating": (components, colors) => `<path d="M28 26.24c1.36.5 2.84.76 4.4.76 5.31 0 9.81-3.15 11.29-7.49 2.47 2.17 6.17 3.54 10.31 3.54 4.14 0 7.84-1.37 10.31-3.53 1.48 4.35 5.98 7.5 11.3 7.5 1.55 0 3.03-.27 4.4-.76h-.19c-6.33 0-11.8-4.9-11.8-10.56 0-4.18 2.32-7.72 5.69-9.68-5.5.8-9.73 5-9.9 10.1a17.61 17.61 0 0 1-9.8 2.8c-3.8 0-7.25-1.06-9.8-2.8-.18-5.1-4.4-9.3-9.9-10.1a11.18 11.18 0 0 1 5.68 9.68c0 5.66-5.47 10.57-11.8 10.57H28Z" fill="#000" fill-opacity=".6" opacity=".6"/><path d="M17 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM91 24a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" fill="#FF4646" fill-opacity=".2"/>`,
  "grimace": (components, colors) => `<rect x="22" y="7" width="64" height="26" rx="13" fill="#000" fill-opacity=".6"/><rect x="24" y="9" width="60" height="22" rx="11" fill="#fff"/><path d="M24.18 18H32V9.41A11 11 0 0 1 35 9h1v9h9V9h4v9h9V9h4v9h9V9h2c.68 0 1.35.06 2 .18V18h8.82l.05.28v3.44l-.05.28H75v8.82c-.65.12-1.32.18-2 .18h-2v-9h-9v9h-4v-9h-9v9h-4v-9h-9v9h-1a11 11 0 0 1-3-.41V22h-7.82a11.06 11.06 0 0 1 0-4Z" fill="#E6E6E6"/>`,
  "sad": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M40.06 27.72C40.7 20.7 46.7 16 54 16c7.34 0 13.36 4.75 13.95 11.85.03.38-.87.67-1.32.45-5.54-2.77-9.75-4.16-12.63-4.16-2.84 0-7 1.36-12.45 4.07-.5.25-1.53-.07-1.5-.49Z" fill="#000" fill-opacity=".7"/>`,
  "screamOpen": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M34 38.86C35.14 24.88 38.24 13.01 54 13c15.76 0 18.92 11.94 20 26 .08 1.12-.83 2-1.96 2-6.69 0-9.37-2-18.05-2-8.7 0-13.24 2-17.9 2-1.15 0-2.2-.74-2.1-2.14Z" fill="#000" fill-opacity=".7"/><path d="M67.02 17.57c-.61.28-1.3.43-2.02.43H44c-.98 0-1.9-.28-2.67-.77C44.23 14.57 48.28 13 54 13c5.95 0 10.1 1.7 13.02 4.57Z" fill="#fff"/><path d="M69.8 40.92a44.2 44.2 0 0 1-5.54-.82c-2.73-.53-5.65-1.1-10.27-1.1-5.02 0-8.66.66-11.74 1.23-1.45.26-2.77.5-4.06.65A11 11 0 0 1 54 33.2a11 11 0 0 1 15.8 7.72Z" fill="#FF4F6D"/>`,
  "serious": (components, colors) => `<rect x="42" y="18" width="24" height="6" rx="3" fill="#000" fill-opacity=".7"/>`,
  "smile": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M35.12 15.13a19 19 0 0 0 37.77-.09c.08-.77-.77-2.04-1.85-2.04H37.1C36 13 35 14.18 35.12 15.13Z" fill="#000" fill-opacity=".7"/><path d="M70 13H39a5 5 0 0 0 5 5h21a5 5 0 0 0 5-5Z" fill="#fff"/><path d="M66.7 27.14A10.96 10.96 0 0 0 54 25.2a10.95 10.95 0 0 0-12.7 1.94A18.93 18.93 0 0 0 54 32c4.88 0 9.33-1.84 12.7-4.86Z" fill="#FF4F6D"/>`,
  "tongue": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M29 15.6C30.41 25.24 41.06 33 54 33c12.97 0 23.65-7.82 25-18.26.1-.4-.22-1.74-2.17-1.74H31.17c-1.79 0-2.3 1.24-2.17 2.6Z" fill="#000" fill-opacity=".7"/><path d="M70 13H39a5 5 0 0 0 5 5h21a5 5 0 0 0 5-5Z" fill="#fff"/><path d="M43 23.5a1.88 1.88 0 0 0 0 .13v8.87a11.5 11.5 0 1 0 23 0v-8.87a1.62 1.62 0 0 0 0-.13c0-1.93-2.91-3.5-6.5-3.5-2.01 0-3.8.5-5 1.26a9.45 9.45 0 0 0-5-1.26c-3.59 0-6.5 1.57-6.5 3.5Z" fill="#FF4F6D"/>`,
  "twinkle": (components, colors) => `<path d="M40 16c0 5.37 6.16 9 14 9s14-3.63 14-9c0-1.1-.95-2-2-2-1.3 0-1.87.9-2 2-1.24 2.94-4.32 4.72-10 5-5.68-.28-8.76-2.06-10-5-.13-1.1-.7-2-2-2-1.05 0-2 .9-2 2Z" fill="#000" fill-opacity=".6"/>`,
  "vomit": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M34 30.4C35.14 19.9 38.24 11 54 11c15.76 0 18.92 8.96 20 19.5.08.84-.83 1.5-1.96 1.5-6.69 0-9.37-1.5-18.05-1.5-8.7 0-13.24 1.5-17.9 1.5-1.15 0-2.2-.55-2.1-1.6Z" fill="#000" fill-opacity=".7"/><path d="M67.86 15.1c-.8.57-1.8.9-2.86.9H44c-1.3 0-2.49-.5-3.38-1.31C43.56 12.38 47.8 11 54 11c6.54 0 10.9 1.54 13.86 4.1Z" fill="#fff"/><path d="M42 25a6 6 0 0 0-6 6v7a6 6 0 0 0 12 0v-2h.08a6 6 0 0 1 11.84 0H60a6 6 0 0 0 12 0v-5a6 6 0 0 0-6-6H42Z" fill="#7BB24B"/><path d="M72 31a6 6 0 0 0-6-6H42a6 6 0 0 0-6 6v6a6 6 0 0 0 12 0v-2h.08a6 6 0 0 1 11.84 0H60a6 6 0 0 0 12 0v-4Z" fill="#88C553"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/nose.js
var nose = {
  "default": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8c0 4.42 5.37 8 12 8s12-3.58 12-8" fill="#000" fill-opacity=".16"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/eyes.js
var eyes3 = {
  "closed": (components, colors) => `<path d="M16.16 27.55c1.85 3.8 6 6.45 10.84 6.45 4.81 0 8.96-2.63 10.82-6.4.55-1.13-.24-2.05-1.03-1.37a15.05 15.05 0 0 1-9.8 3.43c-3.73 0-7.12-1.24-9.55-3.23-.9-.73-1.82.01-1.28 1.12ZM74.16 27.55c1.85 3.8 6 6.45 10.84 6.45 4.81 0 8.96-2.63 10.82-6.4.55-1.13-.24-2.05-1.03-1.37a15.05 15.05 0 0 1-9.8 3.43c-3.74 0-7.13-1.24-9.56-3.23-.9-.73-1.82.01-1.28 1.12Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "cry": (components, colors) => `<path d="M25 27s-6 7.27-6 11.27a6 6 0 1 0 12 0c0-4-6-11.27-6-11.27Z" fill="#92D9FF"/><path d="M36 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM88 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" fill="#000" fill-opacity=".6"/>`,
  "default": (components, colors) => `<path d="M36 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM88 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" fill="#000" fill-opacity=".6"/>`,
  "eyeRoll": (components, colors) => `<path d="M44 22a14 14 0 1 1-28 0 14 14 0 0 1 28 0ZM96 22a14 14 0 1 1-28 0 14 14 0 0 1 28 0Z" fill="#fff"/><path d="M36 14a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM88 14a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" fill="#000" fill-opacity=".7"/>`,
  "happy": (components, colors) => `<path d="M16.16 22.45c1.85-3.8 6-6.45 10.84-6.45 4.81 0 8.96 2.63 10.82 6.4.55 1.13-.24 2.05-1.03 1.37a15.05 15.05 0 0 0-9.8-3.43c-3.73 0-7.12 1.24-9.55 3.23-.9.73-1.82-.01-1.28-1.12ZM74.16 22.45c1.85-3.8 6-6.45 10.84-6.45 4.81 0 8.96 2.63 10.82 6.4.55 1.13-.24 2.05-1.03 1.37a15.05 15.05 0 0 0-9.8-3.43c-3.74 0-7.13 1.24-9.56 3.23-.9.73-1.82-.01-1.28-1.12Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "hearts": (components, colors) => `<path d="M35.96 10c-2.55 0-5.08 1.98-6.46 3.82-1.39-1.84-3.9-3.82-6.46-3.82-5.49 0-9.04 3.33-9.04 7.64 0 5.73 4.41 9.13 9.04 12.74 1.66 1.23 4.78 4.4 5.17 5.1.38.68 2.1.7 2.58 0 .48-.73 3.51-3.87 5.17-5.1 4.63-3.6 9.04-7 9.04-12.74 0-4.3-3.55-7.64-9.04-7.64ZM88.96 10c-2.55 0-5.08 1.98-6.46 3.82-1.39-1.84-3.9-3.82-6.46-3.82-5.49 0-9.04 3.33-9.04 7.64 0 5.73 4.41 9.13 9.04 12.74 1.65 1.23 4.78 4.4 5.17 5.1.38.68 2.1.7 2.58 0 .48-.73 3.51-3.87 5.17-5.1 4.63-3.6 9.04-7 9.04-12.74 0-4.3-3.55-7.64-9.04-7.64Z" fill="#FF5353" fill-opacity=".8"/>`,
  "side": (components, colors) => `<path d="M27 16c-4.84 0-9 2.65-10.84 6.45-.54 1.1.39 1.85 1.28 1.12a15.13 15.13 0 0 1 9.8-3.22 6 6 0 1 0 10.7 2.8 2 2 0 0 0-.12-.74l-.15-.38a6 6 0 0 0-1.64-2.48C33.9 17.32 30.5 16 27 16ZM85 16c-4.84 0-9 2.65-10.84 6.45-.54 1.1.39 1.85 1.28 1.12a15.13 15.13 0 0 1 9.8-3.22 6 6 0 1 0 10.7 2.8 2 2 0 0 0-.12-.74l-.15-.38a6 6 0 0 0-1.64-2.48C91.9 17.32 88.5 16 85 16Z" fill="#000" fill-opacity=".6"/>`,
  "squint": (components, colors) => `<path d="M44 20.73c0 4.26-6.27 7.72-14 7.72S16 25 16 20.73C16 16.46 22.27 13 30 13s14 3.46 14 7.73ZM96 20.73c0 4.26-6.27 7.72-14 7.72S68 25 68 20.73C68 16.46 74.27 13 82 13s14 3.46 14 7.73Z" fill="#fff"/><path d="M32.82 28.3a25.15 25.15 0 0 1-5.64 0 6 6 0 1 1 5.64 0ZM84.82 28.3a25.15 25.15 0 0 1-5.64 0 6 6 0 1 1 5.64 0Z" fill="#000" fill-opacity=".7"/>`,
  "surprised": (components, colors) => `<path d="M44 22a14 14 0 1 1-28 0 14 14 0 0 1 28 0ZM96 22a14 14 0 1 1-28 0 14 14 0 0 1 28 0Z" fill="#fff"/><path d="M36 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0ZM88 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z" fill="#000" fill-opacity=".7"/>`,
  "winkWacky": (components, colors) => `<circle cx="82" cy="22" r="12" fill="#fff"/><circle cx="82" cy="22" r="6" fill="#000" fill-opacity=".7"/><path fill-rule="evenodd" clip-rule="evenodd" d="M16.16 25.45c1.85-3.8 6-6.45 10.84-6.45 4.81 0 8.96 2.63 10.82 6.4.55 1.13-.24 2.05-1.03 1.37a15.05 15.05 0 0 0-9.8-3.43c-3.73 0-7.12 1.24-9.55 3.23-.9.73-1.82-.01-1.28-1.12Z" fill="#000" fill-opacity=".6"/>`,
  "wink": (components, colors) => `<g fill="#000" fill-opacity=".6"><path d="M36 22a6 6 0 1 1-12 0 6 6 0 0 1 12 0Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M70.6 24.96c1.59-3.92 5.55-6.86 10.37-7.2 4.8-.33 9.12 2 11.24 5.64.63 1.09-.1 2.06-.93 1.43-2.6-1.93-6.15-3-10-2.73A15.13 15.13 0 0 0 71.95 26c-.84.78-1.81.1-1.35-1.04Z"/></g>`,
  "xDizzy": (components, colors) => `<path d="M34.5 30.7 29 25.2l-5.5 5.5c-.4.4-1.1.4-1.6 0l-1.6-1.6c-.4-.4-.4-1.1 0-1.6l5.5-5.5-5.5-5.5c-.4-.5-.4-1.2 0-1.6l1.6-1.6c.4-.4 1.1-.4 1.6 0l5.5 5.5 5.5-5.5c.4-.4 1.1-.4 1.6 0l1.6 1.6c.4.4.4 1.1 0 1.6L32.2 22l5.5 5.5c.4.4.4 1.1 0 1.6l-1.6 1.6c-.4.4-1.1.4-1.6 0ZM88.5 30.7 83 25.2l-5.5 5.5c-.4.4-1.1.4-1.6 0l-1.6-1.6c-.4-.4-.4-1.1 0-1.6l5.5-5.5-5.5-5.5c-.4-.5-.4-1.2 0-1.6l1.6-1.6c.4-.4 1.1-.4 1.6 0l5.5 5.5 5.5-5.5c.4-.4 1.1-.4 1.6 0l1.6 1.6c.4.4.4 1.1 0 1.6L86.2 22l5.5 5.5c.4.4.4 1.1 0 1.6l-1.6 1.6c-.4.4-1.1.4-1.6 0Z" fill="#000" fill-opacity=".6"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/eyebrows.js
var eyebrows3 = {
  "angryNatural": (components, colors) => `<path d="M44.1 17.12ZM19.27 5.01a7.16 7.16 0 0 0-6.42 2.43c-.6.73-1.56 2.48-1.51 3.42.02.35.22.37 1.12.59 1.65.39 4.5-1.12 6.36-.98 2.58.2 5.04 1.4 7.28 2.68 3.84 2.2 8.35 6.84 13.1 6.6.35-.02 5.41-1.74 4.4-2.72-.31-.49-3.03-1.13-3.5-1.36-2.17-1.09-4.37-2.45-6.44-3.72C29.14 9.18 24.72 5.6 19.28 5ZM68.03 17.12ZM92.91 5.01c2.36-.27 4.85.5 6.42 2.43.6.73 1.56 2.48 1.51 3.42-.02.35-.22.37-1.12.59-1.65.39-4.5-1.12-6.36-.98-2.58.2-5.04 1.4-7.28 2.68-3.84 2.2-8.35 6.84-13.1 6.6-.35-.02-5.41-1.74-4.4-2.72.31-.49 3.03-1.13 3.5-1.36 2.17-1.09 4.36-2.45 6.44-3.72C83.05 9.18 87.46 5.6 92.91 5Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "defaultNatural": (components, colors) => `<path d="M26.55 6.15c-5.8.27-15.2 4.49-14.96 10.34.01.18.3.27.43.12 2.76-2.96 22.32-5.95 29.2-4.36.64.14 1.12-.48.72-.93-3.43-3.85-10.2-5.43-15.4-5.18ZM86.45 6.15c5.8.27 15.2 4.49 14.96 10.34-.01.18-.3.27-.43.12-2.76-2.96-22.32-5.95-29.2-4.36-.64.14-1.12-.48-.72-.93 3.43-3.85 10.2-5.43 15.4-5.18Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "flatNatural": (components, colors) => `<path d="M38.66 11.1c-5 .35-9.92.08-14.92-.13-3.83-.16-7.72-.68-11.37 1.01-.7.32-4.53 2.28-4.44 3.35.07.85 3.93 2.2 4.63 2.44 3.67 1.29 7.18.9 10.95.66 4.64-.27 9.25-.07 13.87-.2 3.12-.1 7.92-.63 9.46-4.4.46-1.14.1-3.42-.36-4.66-.19-.5-.72-.69-1.13-.4a15.04 15.04 0 0 1-6.68 2.32ZM73.34 11.1c5 .35 9.92.08 14.92-.13 3.83-.16 7.72-.68 11.37 1.01.7.32 4.53 2.28 4.44 3.35-.07.85-3.93 2.2-4.63 2.44-3.67 1.29-7.18.9-10.95.66-4.63-.27-9.24-.07-13.86-.2-3.12-.1-7.92-.63-9.46-4.4-.46-1.14-.1-3.42.36-4.66.18-.5.72-.69 1.13-.4a15.04 15.04 0 0 0 6.68 2.32Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "frownNatural": (components, colors) => `<path d="M36.37 6.88c-1.97 2.9-5.55 4.64-8.74 5.68-3.94 1.29-18.55 3.38-15.11 11.35.05.12.22.12.27 0 1.15-2.65 17.47-5.12 18.97-5.7 4.45-1.71 8.4-5.5 9.17-10.55.35-2.31-.64-6.05-1.55-7.55-.11-.18-.37-.13-.43.07-.36 1.33-1.41 4.97-2.58 6.7ZM75.63 6.88c1.97 2.9 5.55 4.64 8.74 5.68 3.94 1.29 18.55 3.38 15.11 11.35a.15.15 0 0 1-.27 0c-1.15-2.65-17.47-5.12-18.97-5.7-4.45-1.71-8.4-5.5-9.17-10.55-.35-2.31.64-6.05 1.55-7.55.11-.18.37-.13.43.07.36 1.33 1.41 4.97 2.58 6.7Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "raisedExcitedNatural": (components, colors) => `<path d="m22.77 1.58.9-.4C28.93-.91 36.88-.03 41.73 2.3c.57.27.18 1.15-.4 1.1-14.92-1.14-24.96 8.15-28.37 14.45-.1.18-.41.2-.49.03-2.3-5.32 4.45-13.98 10.3-16.3ZM89.23 1.58l-.9-.4C83.07-.91 75.12-.03 70.27 2.3c-.57.27-.18 1.15.4 1.1 14.92-1.14 24.96 8.15 28.37 14.45.1.18.41.2.49.03 2.3-5.32-4.45-13.98-10.3-16.3Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "sadConcernedNatural": (components, colors) => `<path d="m31.23 20.42-.9.4c-5.25 2.09-13.2 1.21-18.05-1.12-.57-.27-.18-1.15.4-1.1 14.92 1.14 24.96-8.15 28.37-14.45.1-.18.41-.2.49-.03 2.3 5.32-4.45 13.98-10.3 16.3ZM80.77 20.42l.9.4c5.25 2.09 13.2 1.21 18.05-1.12.57-.27.18-1.15-.4-1.1-14.92 1.14-24.96-8.15-28.37-14.45-.1-.18-.41-.2-.49-.03-2.3 5.32 4.45 13.98 10.3 16.3Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "unibrowNatural": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd" fill="#DADADA"><path d="M57 12.82ZM96.12 7.6c1.46.56 9.19 6.43 7.86 9.16a.8.8 0 0 1-1.29.22 10.63 10.63 0 0 0-1.7-1.19c-5.1-2.84-11.3-1.93-16.73-.91-6.12 1.14-12.11 3.48-18.39 2.67-2.04-.26-6.08-1.22-7.63-2.96-.47-.53-.06-1.38.64-1.43 1.44-.11 2.86-.86 4.33-1.28 3.65-1.03 7.4-1.56 11.11-2.29 6.62-1.3 15.17-4.53 21.8-2Z"/><path d="M58.76 12.76c-1.17.04-2.8 3.56-.56 3.68 2.23.11 1.73-3.72.56-3.68ZM55 12.8c0-.01 0-.01 0 0ZM15.88 7.56c-1.46.56-9.19 6.43-7.86 9.16.24.5.89.6 1.29.22.55-.52 1.58-1.11 1.71-1.18 5.1-2.84 11.3-1.93 16.73-.91 6.12 1.14 12.11 3.48 18.39 2.67 2.04-.26 6.08-1.22 7.63-2.96.47-.53.06-1.38-.64-1.43-1.44-.11-2.86-.86-4.33-1.28-3.65-1.03-7.4-1.56-11.11-2.29-6.62-1.3-15.17-4.53-21.8-2Z"/><path d="M54.97 11.79c1.17.04 2.77 4.5.53 4.67-2.24.18-1.7-4.71-.53-4.67Z"/></g>`,
  "upDownNatural": (components, colors) => `<path d="m22.77 1.58.9-.4C28.93-.91 36.88-.03 41.73 2.3c.57.27.18 1.15-.4 1.1-14.92-1.14-24.96 8.15-28.37 14.45-.1.18-.41.2-.49.03-2.3-5.32 4.45-13.98 10.3-16.3ZM87 12.07c5.75.77 14.74 5.8 13.99 11.6-.03.2-.31.26-.44.1-2.49-3.2-21.71-7.87-28.71-6.9-.64.1-1.07-.57-.63-.98 3.75-3.54 10.62-4.52 15.78-3.82Z" fill-rule="evenodd" clip-rule="evenodd" fill="#000" fill-opacity=".6"/>`,
  "angry": (components, colors) => `<path d="M15.61 15.18c4.24-5.76 6.88-5.48 13.31-.62l.67.5C34.41 18.73 36.7 20 40 20a2 2 0 1 0 0-4c-2.07 0-3.9-1.02-7.99-4.12l-.68-.52C27.57 8.53 25.37 7.3 22.63 7c-3.68-.4-7.05 1.48-10.24 5.83a2 2 0 1 0 3.22 2.36ZM96.39 15.18c-4.24-5.76-6.88-5.48-13.31-.62l-.67.5C77.58 18.73 75.29 20 72 20a2 2 0 1 1 0-4c2.07 0 3.9-1.02 7.99-4.12l.68-.52c3.76-2.83 5.96-4.07 8.7-4.37 3.68-.4 7.05 1.48 10.24 5.83a2 2 0 1 1-3.22 2.36Z" fill="#000" fill-opacity=".6"/>`,
  "default": (components, colors) => `<path d="M15.63 17.16c3.92-5.51 14.65-8.6 23.9-6.33a2 2 0 1 0 .95-3.88c-10.74-2.64-23.17.94-28.11 7.9a2 2 0 0 0 3.26 2.3ZM96.37 17.16c-3.91-5.51-14.65-8.6-23.9-6.33a2 2 0 1 1-.95-3.88c10.74-2.64 23.17.94 28.11 7.9a2 2 0 0 1-3.26 2.3Z" fill="#000" fill-opacity=".6"/>`,
  "raisedExcited": (components, colors) => `<path d="M15.98 17.13C17.48 7.6 30.06 1.1 39.16 5.3a2 2 0 1 0 1.68-3.63c-11.5-5.3-26.9 2.66-28.82 14.84a2 2 0 0 0 3.96.63ZM96.02 17.13C94.52 7.6 81.94 1.1 72.84 5.3a2 2 0 1 1-1.68-3.63c11.5-5.3 26.9 2.66 28.82 14.84a2 2 0 0 1-3.96.63Z" fill="#000" fill-opacity=".6"/>`,
  "sadConcerned": (components, colors) => `<path d="M38.03 5.6c-1.48 8.38-14.1 14.17-23.24 10.42a2.04 2.04 0 0 0-2.64 1c-.43.97.04 2.1 1.05 2.5 11.45 4.7 26.84-2.37 28.76-13.3a1.92 1.92 0 0 0-1.64-2.2 2 2 0 0 0-2.3 1.57ZM73.97 5.6c1.48 8.38 14.1 14.17 23.24 10.42 1.02-.41 2.2.03 2.63 1 .43.97-.04 2.1-1.05 2.5-11.44 4.7-26.84-2.37-28.76-13.3a1.92 1.92 0 0 1 1.64-2.2 2 2 0 0 1 2.3 1.57Z" fill="#000" fill-opacity=".6"/>`,
  "upDown": (components, colors) => `<path d="M15.6 14.16c4.49-6.32 14-9.5 23.75-6.36a2 2 0 1 0 1.23-3.81c-11.41-3.68-22.74.1-28.25 7.85a2 2 0 1 0 3.26 2.32ZM96.38 21.16c-3.92-5.51-14.65-8.6-23.9-6.33a2 2 0 0 1-.95-3.88c10.74-2.64 23.17.94 28.1 7.9a2 2 0 1 1-3.25 2.3Z" fill="#000" fill-opacity=".6"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/top.js
var top = {
  "hat": (components, colors) => `<path d="M188.32 138.76C227.9 129.26 255 109.87 255 87.5c0-23.5-29.92-43.72-72.8-52.63l-.31-1.43A40 40 0 0 0 142.82 2h-18.64a40 40 0 0 0-39.07 31.44l-.27 1.21C41.41 43.45 11 63.8 11 87.5c0 22.37 27.1 41.76 66.68 51.26-.2-1.28-.36-2.58-.47-3.9A12 12 0 0 1 67 123v-13a12 12 0 0 1 10-11.83V92c0-8 1.68-15.62 4.7-22.51 8.61-15.69 92.73-16.49 102.66.16A55.82 55.82 0 0 1 189 92v6.17A12 12 0 0 1 199 110v13a12 12 0 0 1-10.2 11.87 56.06 56.06 0 0 1-.48 3.9Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><path d="M189 92.74c3.85-3.25 6-6.9 6-10.74 0-6.08-5.38-11.65-14.32-15.98 1.64 1.1 2.9 2.3 3.68 3.63A55.82 55.82 0 0 1 189 92v.74ZM157.26 58.99a144.36 144.36 0 0 0-24.26-2c-8.98 0-17.52.78-25.22 2.17 15.16-2.2 34.11-2.3 49.48-.17ZM84.69 66.33C76.12 70.62 71 76.07 71 82c0 3.85 2.15 7.49 6 10.74V92c0-8 1.68-15.62 4.7-22.51a9.94 9.94 0 0 1 2.99-3.16Z" fill="#000" fill-opacity=".5"/>`,
  "hijab": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M66 77.34c-.66 3.79-1 7.68-1 11.66v48c0 .97.02 1.94.06 2.9L65 142c.14 3.68-1.86 11.8-4.34 21.9-3.88 15.77-8.94 36.4-8.94 52.55 0 13.01 1.98 22.84 3.89 32.3 1.97 9.78 3.86 19.16 3.39 31.25h47s-.95-13.2-2.47-26.36c10.05 10.2 22.82 16.84 39.05 16.84 70.55 0 77.62-53.83 77.62-65.24 0-6.04-4.32-10.88-8.39-15.44-3.6-4.05-7.02-7.87-7-12.1 0-4.35 1.02-7.39 2.07-10.52 1.12-3.33 2.27-6.75 2.27-11.96 0-5.82-1.43-7.5-2.9-9.25a10.7 10.7 0 0 1-2.8-5.62c-.88-4.54-1.86-14.32-2.45-20.77V89A68 68 0 0 0 66.04 77.08L66 77v.34ZM133 53c-30.1 0-55 24.4-55 54.5v23c0 30.1 24.9 54.5 55 54.5s55-24.4 55-54.5v-23c0-30.1-24.9-54.5-55-54.5Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><path d="M193.93 104.96A61.4 61.4 0 0 0 195 93.5c0-33.97-27.76-61.5-62-61.5-34.24 0-62 27.53-62 61.5 0 3.92.37 7.75 1.07 11.46a61 61 0 0 1 121.86 0Z" fill="#fff" fill-opacity=".5"/><path d="M78.07 104.69c-.05.93-.07 1.87-.07 2.81v23c0 30.1 24.9 54.5 55 54.5s55-24.4 55-54.5v-23c0-.94-.02-1.88-.07-2.81.7 3.5 1.07 7.1 1.07 10.81v23a54.5 54.5 0 0 1-54.5 54.5h-3A54.5 54.5 0 0 1 77 138.5v-23c0-3.7.37-7.32 1.07-10.81ZM187.05 194.14c-4.39 6.9-17.9 13.66-34.65 16.62-16.74 2.95-31.75 1.22-38.23-3.76.02.26.05.52.1.78 1.7 9.69 19.42 14.67 39.57 11.12 20.15-3.56 35.1-14.3 33.38-23.99-.04-.26-.1-.51-.17-.77ZM198.66 209.49c-2.64 9.6-14.87 20.2-31.56 26.28-16.68 6.07-32.87 5.8-41.06.15.1.34.2.67.32 1 4.53 12.44 24.47 16.6 44.55 9.3 20.07-7.31 32.67-23.32 28.15-35.75-.12-.34-.26-.66-.4-.98Z" opacity=".9" fill="#000" fill-opacity=".16"/>`,
  "turban": (components, colors) => `<path d="M190.47 97.5c1-2.4 1.53-4.92 1.53-7.5 0-18.23-26.41-33-59-33-32.58 0-59 14.77-59 33 0 2.58.53 5.1 1.53 7.5C81.6 82.89 105.03 72 133 72s51.4 10.89 57.47 25.5Z" fill="#EDECE3"/><path d="M49 94.32C48.93 133.5 78 141 78 141c-5.44-49.55 23.54-65.15 46.53-77.53 2.94-1.58 5.78-3.11 8.44-4.65a309.5 309.5 0 0 0 8.48 4.68C164.43 75.87 193.42 91.48 188 141c0 0 29.07-8.46 29-46.68C216.92 47.15 164.85 3 135 3c-.67 0-1.34.03-2 .09-.67-.06-1.33-.09-2-.09-29.93 0-81.92 44.15-82 91.32Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><path d="M49.01 95.9c.7 37.8 29 45.1 29 45.1s-29.07-7.07-29-43.97l.01-1.13ZM77.33 129.68c.15-37.86 26.18-51.05 47.2-61.71 11-5.58 20.64-10.47 24.47-17.83 4.13-7.25 5.39-13.94 4.65-19.67-.5 4.37-1.98 9.1-4.65 14.07-3.83 7.82-13.47 13-24.47 18.93-21.14 11.38-47.35 25.49-47.2 66.21Z" fill="#000" fill-opacity=".16"/>`,
  "winterHat1": (components, colors) => `<path d="M86.67 68H64v112.91a4.09 4.09 0 0 0 4.09 4.1 18.58 18.58 0 0 0 18.58-18.6V68ZM202 68h-22.67v112.91a4.09 4.09 0 0 0 4.09 4.1A18.58 18.58 0 0 0 202 166.4V68Z" fill="#F4F4F4"/><path d="M63 64a44 44 0 0 1 44-44h52a44 44 0 0 1 44 44v104.6a16.4 16.4 0 0 1-16.4 16.4c-1.98 0-3.6-1.62-3.6-3.6V74H83v94.6A16.4 16.4 0 0 1 66.6 185c-1.99 0-3.6-1.62-3.6-3.6V64Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><rect x="74" y="52" width="118" height="36" rx="8" fill="#000" fill-opacity=".1"/><rect x="74" y="50" width="118" height="36" rx="8" fill="#F4F4F4"/>`,
  "winterHat02": (components, colors) => `<path d="M197 168h-2v56.06a9 9 0 1 0 2 0V168ZM71 176h-2v56.06a9 9 0 1 0 2 0V176Z" fill="#F4F4F4"/><circle cx="133" cy="20" r="20" fill="#F4F4F4"/><path d="M93.45 77.53h79.1c6.08 0 9.82 2.93 9.82 9V166c0 30.46 22.63 30.41 22.63 10.92v-73.86C205 68.8 187.77 21 133 21c-54.77 0-72 47.8-72 82.05v73.86c0 19.5 22.63 19.54 22.63-10.92V86.53c0-6.07 3.73-9 9.82-9Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><path d="M198.67 67H67.33C76.42 42.5 96.26 21 133 21s56.58 21.5 65.67 46Z" fill="#000" fill-opacity=".2"/><path d="M91.2 33.73 102.5 50 115 32H93.66c-.83.56-1.65 1.14-2.46 1.73ZM172.34 32H152l12.5 18 10.95-15.77c-1-.77-2.04-1.51-3.11-2.23ZM133.5 50 121 32h25l-12.5 18Z" fill="#fff" fill-opacity=".5"/><path d="M99 59 86.5 41 74 59h25ZM130 59l-12.5-18L105 59h25ZM148.5 41 161 59h-25l12.5-18ZM192 59l-12.5-18L167 59h25Z" fill="#000" fill-opacity=".5"/>`,
  "winterHat03": (components, colors) => `<circle cx="133" cy="20" r="20" fill="#F4F4F4"/><path fill-rule="evenodd" clip-rule="evenodd" d="M67 78a66 66 0 1 1 132 0v5H67v-5Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64 69.77a7.05 7.05 0 0 1 3.05-5.96c7.8-5.18 30.42-17.8 66.02-17.8 35.6 0 58.14 12.62 65.9 17.81a7.04 7.04 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C184.84 97.83 163.1 88 133.8 88a133.57 133.57 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75V69.77Z" fill="#000" fill-opacity=".1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64 67.77a7.05 7.05 0 0 1 3.05-5.96c7.8-5.18 30.42-17.8 66.02-17.8 35.6 0 58.14 12.62 65.9 17.81a7.04 7.04 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C184.84 95.83 163.1 86 133.8 86a133.57 133.57 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75V67.77Z" fill="#F4F4F4"/>`,
  "winterHat04": (components, colors) => `<path d="M67 65c0-8.16 1.6-15.95 4.5-23.06-3.86-8.95-8.33-22.96-3.86-32.82 8-2.43 17.8 1.33 25.63 5.73A60.72 60.72 0 0 1 128 4h10c12.91 0 24.9 4.01 34.75 10.86 7.84-4.4 17.66-8.17 25.67-5.74 4.47 9.88-.03 23.94-3.9 32.88A60.83 60.83 0 0 1 199 65v8H67v-8Z" fill="${escape_exports.xml(`${colors.hat}`)}"/><path d="M194.52 42c3.87-8.94 8.37-23 3.9-32.88-8.01-2.43-17.83 1.34-25.66 5.74A61.21 61.21 0 0 1 194.51 42ZM93.27 14.85c-7.83-4.4-17.63-8.16-25.63-5.73-4.47 9.86 0 23.87 3.87 32.82 4.5-11 12.12-20.4 21.76-27.1Z" fill="#000" fill-opacity=".24"/><path d="M190.2 33.42c1.99-6 3.5-12.86 1.49-16.1-2.67-1.16-7.59.47-12.4 2.77a61.28 61.28 0 0 1 10.9 13.33ZM86.66 20.14c-4.92-2.38-10-4.11-12.73-2.93-2.06 3.33-.42 10.47 1.64 16.59a61.28 61.28 0 0 1 11.1-13.66Z" fill="#fff" fill-opacity=".3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64 69.77a7.05 7.05 0 0 1 3.05-5.96c7.8-5.18 30.42-17.8 66.02-17.8 35.6 0 58.14 12.62 65.9 17.81a7.04 7.04 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C184.84 97.83 163.1 88 133.8 88a133.57 133.57 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75V69.77Z" fill="#000" fill-opacity=".1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M64 67.77a7.05 7.05 0 0 1 3.05-5.96c7.8-5.18 30.42-17.8 66.02-17.8 35.6 0 58.14 12.62 65.9 17.81a7.04 7.04 0 0 1 3.03 5.95v30.2c0 3.3-3.9 5.38-6.78 3.75C184.84 95.83 163.1 86 133.8 86a133.57 133.57 0 0 0-63.17 15.98c-2.85 1.56-6.63-.5-6.63-3.75V67.77Z" fill="#F4F4F4"/>`,
  "bob": (components, colors) => `<path d="M40 145c-.62-30.84 28.32-95.2 39-108 7.92-9.5 29.7-17.45 54-17 24.3.45 46.86 5.81 55 16 12.32 15.43 37.87 74.08 38 109 .1 24.8-9.54 49.66-23 51-7.6.76-17.26-.23-28.86-1.4-5.3-.55-11.02-1.13-17.14-1.6V180.6A56 56 0 0 0 189 130v-28.44a130.34 130.34 0 0 1-26.9-19.88c3.35 6.24 7.19 11.9 11.51 16.2-30.57-8.59-51.71-26.16-64.38-39.94C103.39 69.02 92.96 85.23 77 97.57V130a56 56 0 0 0 32 50.61v13.14c-6.95.95-13.41 2.16-19.36 3.27-10.85 2.02-19.98 3.73-27.26 2.98-14.22-1.47-21.88-30.2-22.38-55Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "bun": (components, colors) => `<path d="M151.12 28.28c3.06-2.97 4.88-6.71 4.88-10.78C156 7.84 145.7 0 133 0s-23 7.84-23 17.5c0 4.1 1.85 7.86 4.94 10.84-.99.22-1.95.45-2.9.69-15.1 3.8-24.02 14.62-31.68 30.62a67.68 67.68 0 0 0-6.34 25.83c-.13 3.41.33 6.94 1.25 10.22.33 1.2 2.15 5.39 2.65 2 .1-.66-.07-1.47-.24-2.27-.12-.55-.23-1.1-.26-1.6-.08-1.56 0-3.15.11-4.72.2-2.92.73-5.8 1.65-8.59 1.33-3.98 3.02-8.3 5.6-11.67.97-1.25 1.88-2.7 2.88-4.27 5.63-8.9 13.68-21.6 45.34-22.9 34.3-1.42 46.78 21.66 51.21 29.87.38.7.7 1.3.97 1.75 2.67 4.53 2.78 9.75 2.9 14.91.05 2.71.11 5.41.54 8 .47 2.84 1.54 2.78 2.13.23 1-4.33 1.47-8.83 1.15-13.28-.72-10.05-4.4-36.45-24.6-48.15a65.52 65.52 0 0 0-16.18-6.73Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "curly": (components, colors) => `<path d="M67 105.02c11.38-.72 24.68-14.4 31.98-33.94C108.78 72.94 120.04 74 132 74c12.55 0 24.31-1.16 34.45-3.2 7.38 19.96 21.01 33.87 32.55 34.24V88a66 66 0 0 0-38-59.78A183.64 183.64 0 0 0 132 26c-9.2 0-17.99.63-26.02 1.76A66.01 66.01 0 0 0 67 88v17.02Z" fill="#000" fill-opacity=".16"/><path d="M73 192a48 48 0 0 0 13.6-1.95 72.08 72.08 0 0 0 13.68 9.1c1.56-.1 3.13-.15 4.72-.15h4v-18.39a56.03 56.03 0 0 1-31.8-45.74A12 12 0 0 1 67 123v-13a12 12 0 0 1 10-11.83v-.75c8.46-5.38 16.75-16.36 21.98-30.34C108.78 68.94 120.04 70 132 70c12.55 0 24.31-1.16 34.45-3.2C171.76 81.17 180.32 92.4 189 97.7v.46c.44.07.87.17 1.29.29a24.4 24.4 0 0 0 3.23 1.47A11.99 11.99 0 0 1 199 110v13a12 12 0 0 1-10.2 11.87A56.03 56.03 0 0 1 157 180.6V199h4c1.59 0 3.16.05 4.72.15a72.08 72.08 0 0 0 13.69-9.1 48 48 0 0 0 45.19-82.18 44.01 44.01 0 0 0-28.37-69.28A44.02 44.02 0 0 0 133 15.9a44.02 44.02 0 0 0-63.23 22.7 44.01 44.01 0 0 0-28.37 69.27A48 48 0 0 0 73 192Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "curvy": (components, colors) => `<path d="M89.4 84.2c-4.88 1.3-9.65 2.78-14.4 4.34-11.13 3.64-6.68-6.1-3-14.04l111.79-9.52c6.02 7.33 24.82 41 7.12 27-3.1-2.45-9.57-4.45-12.66-7.27-2.34-2.12-5.16-1.78-6.28-4.48l-2.55.9a375.12 375.12 0 0 1-11.97-4.12l-.55-1.07-1.67.64-9.12-.33c-2.63-.03-13.73.22-16.28.43 0 0-1.23-.92-2.94-2.68l-1.33 3.22s-11.92 1.8-14.08 1.96l-1.06-1.95-2.74 2.97c-3.9.9-13.84 2.83-18.3 4.01Z" fill="#000" fill-opacity=".16"/><path d="M48.6 123.04c-5.7-17.86 2.75-37.13 11.12-47.27 1.48-1.8 3.06-5.11 5.06-9.3 8.34-17.47 23.9-50.05 69.8-50.27 49.93-.24 59.75 36.02 63.66 50.43 1.64 6.08 4.55 11.59 7.38 17.21 4 8 8.4 16.74 9.9 23.05 1.09 4.54 1.7 9.05 1.17 13.7-.12 1.06-1.08 4.22-.48 4.85.54.57 1.88 1.15 3.1 1.67 9.01 3.9 16.1 10.4 19.8 19.62 4.71 11.72-.99 25.47-11.26 32.17-1.4.9-.74 2.7-.76 4.1a74.22 74.22 0 0 1-4.33 23.5c-1.42 3.94-3.17 7.92-6.53 10.98-2.85 2.58-6.94 4.42-10.86 5.52-1.35.38-1.33.78-1.41 1.17-1.15 5.76 2.7 13.12 4.6 18.56 1.5 4.29 3 8.59 3.8 13 1.18 6.42-3.02 27.82-14.12 22.8 5.52-2.64 5.76-8.26 3.88-9.84-4.34-3.62-11.76-1.59-16.9-.74-3.7.61-7.63 1.25-11.15.43a31.34 31.34 0 0 1-10.6-4.84c-17.65-13.97-13.84-37.04 1.07-64.4l-.55-.03c-1.1-.06-1.67-.1-3-.1h-4v-18.39A56 56 0 0 0 189 130V92c0-1.47-.05-2.94-.16-4.38a68.09 68.09 0 0 0-3.66-1.86c-2.58-1.24-5.24-2.53-6.91-4.05a10.2 10.2 0 0 0-3-1.76c-1.39-.6-2.62-1.14-3.28-2.72l-2.55.9a373.94 373.94 0 0 1-11.97-4.12l-.55-1.07-1.67.64-9.12-.33c-2.63-.03-13.73.22-16.28.43 0 0-1.23-.92-2.94-2.68l-1.33 3.22s-11.92 1.8-14.08 1.96l-1.06-1.95-2.74 2.97c-1.43.33-3.66.8-6.13 1.31-4.3.9-9.34 1.95-12.17 2.7a248.15 248.15 0 0 0-11.93 3.53c-.31 2.38-.47 4.8-.47 7.27v38a56 56 0 0 0 32 50.61V199h-4a72.2 72.2 0 0 0-16.4 1.87c-.1.17-.22.32-.32.5-4.78 6.95-13.87 12.39-17.46 19.5-1.47 2.9.19 7.82 1.66 10.55 3.2 5.9 11.15 8.66 19.52 7.33-2.53 2.12-7.55 3.82-10.95 3.94-4.63.17-10.29-1.62-14.26-3.58.6 3.6 2.68 5.62 4.62 8.6-5.52-.28-10.88-7.06-12.68-12.05-2.2 4.51-3.44 16.64-2.35 20.03-14.14-6.34-25.13-19.44-24.3-35.66.54-10.56 7.15-18.9 9.48-28.9.46-1.96.14-2.38-1.05-3.94l-.05-.07c-4.38-5.73-9.62-10.69-12.43-17.48-2.54-6.13-2.63-13.18-.64-19.5 2.21-7.08 9.06-14.16 14.84-20.14a105.5 105.5 0 0 0 6.37-6.95Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="m164.5 199.2.26-.06s4.44-9.02 11.25-17.38c-1.33-10.43 5.86-23.71 5.86-23.71l-.35-.08A56.25 56.25 0 0 1 157 180.62V199h4c1.32 0 1.88.04 3 .1l.54.04-.04.07ZM82.27 153.74l-.14.06c6.02 9.99 13.63 36.95 6.55 46.66l.25.34A72.25 72.25 0 0 1 105 199h4v-18.39a56.23 56.23 0 0 1-26.73-26.87Z" fill="#000" fill-opacity=".24"/><g fill="#fff" fill-opacity=".6"><path d="M118.38 50.37c1.51-1.85 2.89-3.83 3.5-6.16.23-.87.47-1.77.89-2.3-4.76 4.99-8.8 9.91-12.3 15.63.77-1.02 2.73-2.02 3.76-2.91a34.94 34.94 0 0 0 4.15-4.25ZM171.5 41.98c-.3 3.5.47 6.94.63 10.4 0-.34.34-.92.65-1.47a6.98 6.98 0 0 0 .92-4.42c-.14-1-.55-1.95-1.07-2.85-.2-.36-1.12-1.33-1.12-1.66ZM56.4 120.38a88.61 88.61 0 0 0 4.47 18c2.06 5.72 4.42 11.46 7.8 16.69 3.17 4.87 6.93 9.42 9.96 14.36-.46-.55-1.22-1.17-1.9-1.73-.49-.4-.94-.76-1.2-1.05-3.23-3.4-5.82-7.2-8.29-11.04-3.25-5.07-5.69-10.58-7.8-16.08-4.14-10.78-8.3-23.85-4.7-35.24-.2.77.5 2.43.6 3.2.62 4.27.48 8.6 1.07 12.88ZM54.77 104.2a.76.76 0 0 0-.02.09l.02-.09ZM78.63 169.43c.5.58.35.56 0 0ZM68.86 165.04c-2.46-3.54-5.05-7.16-7.09-10.9-1.78-3.27-3.05-6.85-5.29-9.85-.32-.44-.72-.97-.8-1.32.68 6.15 3.45 12.74 7.73 17.3 1.56 1.67 4.09 3.04 5.45 4.77ZM64.08 171.32c3.55 3.82 6.94 7.76 9.45 12.18 1.75 3.07 3.22 6.64 3.46 10.21.04.53.08 1.2.2 1.57-2.22-4.29-3.91-8.83-6.55-12.94-2.6-4.05-5.95-7.78-9.44-11.28-3.7-3.7-7.41-7.18-9.4-11.85a25.53 25.53 0 0 1-1.99-12.55c.02 1.24.76 2.82 1.44 4.28 1.47 3.14 2.07 6.6 3.67 9.7 2.13 4.08 5.96 7.24 9.17 10.68ZM59.23 174.18c-.5-.49-2.41-1.69-2.75-2.3l-.03-.06.03.06c.7 1.5 1.48 2.95 2.22 4.43 1.53 3.08 3.71 5.71 5.93 8.4l1.08 1.3c-.8-1.02-1.02-3.29-1.53-4.5a21.43 21.43 0 0 0-4.95-7.33ZM48.9 180.53a83.67 83.67 0 0 0 3.73 5.02c1.9 2.43 3.8 4.86 5.25 7.5 2.83 5.2 4.07 10.81 4.32 16.55.12 2.7.12 5.46-.25 8.16-.24 1.77-.54 3.6-1.22 5.25-.25.6-.54 1.32-.63 1.84-.06-2.32-.03-4.64 0-6.95.13-8.2.25-16.3-4.02-23.96-1.58-2.83-3.68-5.4-5.78-7.99a90.37 90.37 0 0 1-3.9-5.02c-2.78-3.96-5.5-7.85-7.72-12.08 1.36 1.72 3.8 3.07 5.32 4.77 1.9 2.13 3.35 4.58 4.9 6.9Z"/><path d="M60.1 224.85c-.08.53.01.4 0 0ZM50.54 204l.02-1.5c0 .5.82 1.51 1.04 2.03 1.61 3.75 1.57 7.5.09 11.32-1.9 4.9-4.88 9.25-8.62 13.3.83-1.09 1.35-2.6 1.85-4.06 1.01-2.94 2.6-5.62 3.8-8.49 1.68-4.01 1.73-8.32 1.81-12.6ZM41.92 221.2a9.46 9.46 0 0 0 2.25-4.13c.2-.9-.41-2.68 0-3.38a13.66 13.66 0 0 0-1.85 3.64c-.2.69 0 3.32-.4 3.87ZM84.86 64.32a63.3 63.3 0 0 0 9.77-11.2 34.6 34.6 0 0 0 3.22-5.6c.13-.28.3-.87.48-1.54.3-1.09.65-2.4 1.04-2.97-2.7 2.9-4.84 6-7.03 9.17-1.45 2.12-2.99 4.18-4.34 6.37-.36.58-.68 1.35-1.03 2.14-.59 1.37-1.22 2.83-2.1 3.63ZM83.84 55.69c.14-.62.27-1.22.47-1.57.75-1.32 1.9-2.45 3.18-3.41-.35.3-.58 1.16-.79 1.95-.15.54-.28 1.05-.44 1.33a15.8 15.8 0 0 1-3.17 3.75c.36-.35.56-1.22.74-2.04ZM83.07 57.75l.03-.02-.03.02ZM203.8 150.6c.6-3.33 1.25-6.84 2.94-9.84.76-1.36 1.68-2.68 2.6-3.98.48-.7.94-1.38 1.35-2.11.66-1.16 1.46-2.56 2.26-3.03-4.16 2.43-7.42 5.54-9.16 9.64-.88 2.07-1.2 4.2-1.09 6.39.08 1.57.76 3.24.77 4.77.08-.62.2-1.23.32-1.85ZM202 130.48a22.88 22.88 0 0 1-1 3.63 25.14 25.14 0 0 1-1.77 3.74c-.43.75-1.98 2.32-1.98 3.15-.09-4.9 1.73-9.33 5.17-13.25-.38.65-.28 2.03-.42 2.74ZM201.2 165.72c2.28-.03 4.82 2.52 6.51 4.22 2.42 2.43 5.14 4.56 7.2 7.31l.06.07-.05-.07c-.68-.96-.7-2.74-1.23-3.85-.72-1.5-1.82-2.9-3.06-4.13-2.32-2.29-5.77-4.07-9.42-3.55ZM200.42 176.1c-.18-.06-1.78-.52-2.28-.35.59-.26 1.3-.57 1.93-.65 4.28-.57 9.5 3.14 10.07 6.72-.48-1.23-3.03-2.24-4.18-2.85-1.82-.97-3.56-2.14-5.54-2.87ZM198.14 175.75l-.06.03.03-.02h.03ZM202.23 183.9a7.6 7.6 0 0 0-3.79-.13c-.47.13-1.44.42-1.56.39 2.82.66 5.47.98 8.4.91-.44 0-1.16-.34-1.84-.66-.47-.22-.9-.43-1.21-.5ZM191.01 197.76c-.13 0-.13.01 0 0ZM191.01 197.76c4.26-.22 9.25.4 13.3 1.42a22.3 22.3 0 0 1 5.7 2.3c1.4.81 3.93 1.93 4.87 3.13-3.74-6.44-11.85-9.79-20.16-8.13-1.06.22-2.67 1.2-3.7 1.29ZM192.76 210.27c3.23.42 6.55-.07 9.77-.44 1.38-.15 3.03-.86 4.38-.49a23.55 23.55 0 0 0-8.4-1.17c-2.93.13-5.9 1.06-8.59 2.03.68-.2 1.81-.06 2.84.07ZM179.36 220.67c-.06 2.23-.04 4.52.1 6.74.25 3.97 2.55 7.44 5.93 10.08a32.36 32.36 0 0 0 4.34 2.72c2.51 1.39 5 2.76 6.63 5.1 2.15 3.1 2.33 6.96.82 10.36-.25.56-.51 1.16-.52 1.58v-.05c.03-3.87.07-8.36-2.64-11.6-1.59-1.9-3.87-3.1-6.16-4.29-1.63-.85-3.28-1.7-4.67-2.83-3.27-2.64-5.76-6.1-6.32-9.98-.45-3.13-.23-8.58 2.98-10.73-.6.45-.48 2.35-.5 2.9ZM179.9 217.74a.43.43 0 0 0-.04.03l.05-.03ZM177 242.67l.08.08a.69.69 0 0 1-.07-.08ZM188.15 255.52c-.2-5.11-3.7-8.96-7.94-11.34-.6-.34-2.6-.93-3.13-1.43 2.96 3.24 6.32 6.21 8.96 9.73.46.6 2.06 2.3 2.11 3.04ZM188.15 255.55v-.03.03ZM229.17 153.8a11.45 11.45 0 0 1 2.67 3.7 12.62 12.62 0 0 1 .6 10c.14-.52-.15-1.47-.38-2.22-.55-1.76-1.07-3.5-1.76-5.22-1.18-2.91-2.14-5.64-4.18-8.2.54.67 2.32 1.3 3.05 1.93ZM179.15 48.8a5.72 5.72 0 0 1-.97 3.75c.09-.2-.12-1.1-.28-1.84-.34-1.47-.14-2.96-.04-4.47 0 .64 1.18 1.77 1.29 2.57ZM127.57 50.07c-.73 1.16-2 2.11-3.3 2.78.58-.33 1.1-2 1.54-2.55.73-.94 1.63-1.84 2.58-2.63-.21.22-.61 2.05-.83 2.4Z"/></g>`,
  "dreads": (components, colors) => `<path d="M242.13 168.86c4.84 6.8 11.1 14 12.25 22.06.45 3.2.7 16.23-7.54 11.43-.27 4.36-.97 4.98.34 9.2.88 2.86 2.08 8.62-3.87 8.1 2.26 6.17 5.88 14.76 2.48 21.16-5.58 10.51-11.89-2.74-13.57-7.49.1 3.28-3.42 9.2-7.84 4.63.35 5.42 2.52 13.78-.66 18.86-6.16 9.85-12.97-2.62-13.2-7.9-1.11 3.56-.28 12.14-7.6 10.15-6.32-1.71-4.03-10.09-2.8-13.87-2.02 3.56-4.5 8.85-4.88 12.87-.34 3.45 2.94 11.57-5.55 10.05-6.52-1.17-6.76-10.9-6.65-15.18.1-3.48 3.46-11.43 1.18-14.25-12.73 5.34.6 23.3-10.95 27.3-3.84 1.32-7.04-1.18-8.32-4.64.4-1.7-.36-2.56-2.28-2.6-1.21-1.49-2.01-1.44-2.8-3.66-2.31-6.52 2.2-15.19 5.43-21-3.35 3.05-6.05 7.25-9.7 9.91-2.45 1.8-6.08 2.31-8.38-.17-2.51-2.73-.13-5.34 1.22-7.82 3-5.49 7.73-8.68 12.67-13.08 4.33-3.85 8.18-8.18 12.01-12.37 2.57-2.8 5.01-5.8 7.06-8.97A72.1 72.1 0 0 0 161 199h-4v-18.39a56.24 56.24 0 0 0 25.8-24.98c.1-3.28.28-7.11.47-11.2.54-12.09 1.19-26.4.48-35.34l-.2-2.58c-1.12-14.36-1.8-23.03-12-36.06-4.56-5.83-13.18-7.67-21.72-9.5-8.09-1.73-16.1-3.45-20.51-8.51-4.13 4.78-10.14 7.32-16.74 8.99-1.45.37-2.9.67-4.34.96-4.98 1.03-9.7 2-13.08 5.6-7.8 8.32-11.23 13.88-13.62 24.26A116.55 116.55 0 0 0 79 126.83c.13 1.88.22 3.78.32 5.69.35 7.1.71 14.32 2.9 21.1a56.23 56.23 0 0 0 26.78 27V199h-4c-1.1 0-2.2.03-3.28.07.67 3.44 1.09 6.93.81 10.34-.4 5-1.34 9.66-.85 14.7 1.04 10.52 5.41 20.5 9.02 30.52 1.73 4.82 9.36 10.49 6.23 14.46-3.13 3.98-13.81-5.47-16.2-10.05-2.44-4.66-4.65-9.4-7.18-14.03 1.48 6.46 2.77 13.1 4.8 19.41 1.36 4.27 3.43 10.72-2.28 11.94-8.95 1.91-9.3-12.58-10.18-16.9-1.47-7.19-3.1-9.98-5.5-16.97-.49 5.34.34 10.9-.81 16.2-.7 3.19-4.36 5.83-6.56 8.53-7.53 9.28-9.32-6.28-11.23-10.55-3.3 2.4-10.5 7.16-14.9 4.14-3.26-2.23-1.2-6.27-.44-9.03 1.22-4.45 1.94-8.85-1.31-12.87-3.1 3-9.92 4.75-13.88 1.88-5-3.63-.62-8.94 1.63-12.7 4.33-7.26 4.07-15.87 5.44-23.94.46-2.7 1.06-6.26.3-8.12-1.1-2.68-2.3-2.7-4.74-2.1-3.45.87-6.29 2.8-6.87 5.58-.84 4.03 3.57 5.62 3.93 9.12.77 7.55-8.7 4-11.53.62-6.95-8.36-1.26-18.23 4.21-25.56 1.87-2.5 2.4-3.22 2.02-6.48-.77-6.41-2.5-12.18-1.88-18.72.86-8.97 4.3-17.44 9.35-24.82 3.46-5.06 5.29-9.45 5.79-15.57 1.41-17.39 7.32-35.28 15.05-50.74 3.97-7.93 7.96-16.5 14.83-22.4 2.23-1.91 6.24-2.8 8.17-4.65 3.56-3.43.44-9.5 4.95-13.39 3.78-3.25 8.17-2.17 12.28-3.93 4.21-1.81 5.11-7.42 10.21-8.61 5.16-1.2 9.29 2.18 13.66 3.8 6.43 2.38 10.45 1.69 16.76-.3l.08-.03c4.2-1.33 6.95-2.2 10.89.1 2.55 1.5 4.52 5.95 7.65 6.37 3.8.52 9.14-3.04 13.35-2.9 6.45.2 9.59 4.24 12.25 8.55 1.55 2.5 4.4 3.67 6.1 6.15.62.9 1.24 1.8 2.13 2.61 6.31 5.77 14.58 10.25 21.37 15.68 12.66 10.15 15.66 23.88 16.48 37.83.66 11.18-.37 24.31 6.74 34.31 3.71 5.22 7.82 9.73 10.02 15.85.78 2.19 1.85 5.2.51 7.12-1.8 2.58-6.36 2.6-8.31.14-1.9 5.87 4.57 14.35 8.03 19.22Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M182.5 156.2c-.07 3 0 5.98.38 8.86.33 2.5.84 4.91 1.34 7.31 1.13 5.33 2.23 10.56 1.3 16.27-.75 4.53-2.73 8.87-5.36 12.94A72.09 72.09 0 0 0 161 199h-4v-18.39a56.24 56.24 0 0 0 25.5-24.4ZM101.72 199.07a125 125 0 0 0-1.23-5.48c-2.14-8.82-6.42-16.63-10.77-24.55-1.9-3.46-3.8-6.94-5.56-10.53a37.08 37.08 0 0 1-1.95-4.89 56.23 56.23 0 0 0 26.8 27V199h-4c-1.1 0-2.2.03-3.28.07Z" fill="#000" fill-opacity=".24"/><path d="M102.48 33.5c-1.67 0-12.16 4.75-8.24 6.16 2.4.86 12.5-6.15 8.24-6.15ZM171.05 47.36c-.85.38-.83.73.04 1.07.85-.38.83-.74-.04-1.07ZM195.51 65.6a26.84 26.84 0 0 0-1.37-2.76c-.89-1.27-6.24-8.4-2.47-7.5 2.08.48 4.89 6.17 6.15 8.74.78 1.57 4.28 7.12.72 6.75-.63-.07-1.95-2.92-3.03-5.23ZM204.02 110.75c-.15-1.17.25-4.76-2.46-3.42-1.8.9.67 11.72.82 13.13l.46 3.95v.03c.6 6.07 1.42 12.1 1.33 18.23-.01.76-1.2 6.66 1.55 5.4 1.46-.66.78-8.74.57-11.2-.74-8.72-1.11-17.46-2.27-26.12ZM65.36 122.25c.08 1.58-.7 9.75 1.43 9.8 1.83.04 1.24-8.4 1-11.83-.08-1.08-.08-11.14-2.1-9.91-2.32 1.4-.46 9.52-.34 11.94ZM73.8 180c0-1.43.82-14.45-1.9-11.38-1.37 1.54-.48 7.02-.35 8.88.05.7-.52 2.86.41 3.19.76.26 1.83.32 1.84-.7ZM48.12 193.16c1.93-.05.14-37.83-2.82-37.79-2.08.03 1.36 37.83 2.82 37.8ZM50.35 212.52c-2.4 0-1.95 8.46-.54 9.13 2.14 1.03 3.23-9.13.54-9.13ZM65.59 216.06c.02 1.05-1.18 1.07-1.98.74-.72-.3-.63-2.31-.58-3.49.05-1.1-.15-2.2-.31-3.29-.5-3.38-1.26-8.48.04-9.65 1.98-1.78 2.02.17 2.55 1.5 1.56 3.9.2 10.03.28 14.19ZM203.02 169.59c-2.53-.5-3.85 8.1-2.7 9.01 1.92 1.53 5.35-8.49 2.7-9.01ZM202.75 207.38c-1.13-.22-9.43 15.74-8.75 16.64 1.3 1.72 12.83-15.82 8.75-16.64ZM182.33 214.76c-1.78-.8-9.33 10.75-7.4 11.62 1.75.78 9.56-10.65 7.4-11.62ZM224.43 171.45c-2.16 0-2.06 11.82-.4 12.56 1.7.78 2.94-12.56.4-12.56ZM83.51 54.2c1.26-.65 5.45-.87 3.1 1.29-2 1.84-9.53 12.51-12.12 12.62-4.22.18 2.59-7.24 4.76-9.6 1.33-1.45 2.49-3.41 4.26-4.32ZM59.25 83.98c-2.18-.43-5.83 10.27-4.56 11.56 1.93 1.95 7.01-11.07 4.56-11.56ZM81.4 201.85c.48-2.6 2.38-.2 2.8 1.14.4 1.34 4.62 11.08 3.56 12.36-1.63 1.97-2.34-1.37-2.9-2.57-1.31-2.83-3.92-8.43-3.46-10.93ZM75.99 225.82c-2.3 0-2.03 9.8-.67 10.38 2.12.9 3.48-10.38.67-10.38ZM232.81 203.88a58.4 58.4 0 0 1 4.98 13.57c.14.6 2.06 5.56-.66 4.84-1.56-.41-1.8-4.78-2.2-6.1a32.5 32.5 0 0 0-2.58-5.56c-1.41-2.63-2.85-5.31-3.06-7.64-.33-3.9 1.84-2.42 3.52.89ZM218.09 216.95c-2.13 0-2.24 10.77-.9 11.4 1.86.88 3.62-11.4.9-11.4ZM224.25 128.65c1.58-.4-3.4-13.32-5.18-13.18-2.7.22 2.78 13.8 5.18 13.18ZM197.43 184.75c-.84.38-.83.74.05 1.07.84-.38.83-.74-.05-1.07ZM173.22 239.99c.79 0 1.12-1.23-.06-1.25-.77 0-1.18 1.25.06 1.25ZM74.68 184.63c.03-1.9-2.46-.5-2.45 1.1.03 3.21 2.4 1.75 2.45-1.1ZM68.52 136.88c-.8 0-1.13 1.24.05 1.27.78 0 1.2-1.27-.05-1.27ZM47.78 199.44c-.1 0 1.53-1.99 1.6-.05.07 1.47-1.31.06-1.6.05ZM53.6 98.06c-2.37 0-2.02 5.76-.51 6.13 2.52.61 2.86-6.13.5-6.13ZM66.21 222.33c-2.28 0-2.44 7.8-.86 8.3 2.45.75 3.24-8.3.86-8.3ZM47.46 227.93c-.88.4-.86.76.04 1.1.87-.39.86-.75-.04-1.1ZM217.46 231.28c-2.32 0-2.23 9.56-.8 10.2 1.98.9 3.48-10.2.8-10.2ZM193.95 240.16c-2.41-.48-3.68 7.4-2.55 8.3 1.85 1.45 5.02-7.8 2.55-8.3ZM173.47 247.45c-2 0-1.51 3.58-.36 4.1 2 .93 2.6-4.1.37-4.1Z" fill="#fff" fill-opacity=".3"/>`,
  "frida": (components, colors) => `<path d="M77 98.17v-.23l.08.06c1.7-27.45 17.84-33.2 32.51-38.41 10.53-3.75 20.3-7.22 23.4-18.25 3.12 11.03 12.89 14.5 23.42 18.25 14.67 5.22 30.82 10.96 32.5 38.41l.1-.06v.23a12 12 0 0 1 9.88 10.22 16.43 16.43 0 0 0 2.97-16.92 16.49 16.49 0 0 0-2.46-25.86 16.5 16.5 0 0 0-10.62-23.04 20.5 20.5 0 0 0-27.73-22.16A20.47 20.47 0 0 0 133 15.52a20.47 20.47 0 0 0-28.05 4.87 20.5 20.5 0 0 0-27.73 22.16A16.5 16.5 0 0 0 66.2 64.7a16.5 16.5 0 0 0-2.51 28.07 16.5 16.5 0 0 0 3.4 15.62A12 12 0 0 1 77 98.17ZM77.2 134.87c-3.85-.58-7.11-3-8.85-6.34a16.5 16.5 0 0 0 8.2 25.71 16.52 16.52 0 0 0 14.76 20.72A16.5 16.5 0 0 0 109 184.8v-4.2a56.03 56.03 0 0 1-31.8-45.74ZM157 180.61v4.2a16.5 16.5 0 0 0 17.69-9.85 16.5 16.5 0 0 0 14.76-20.71 16.5 16.5 0 0 0 8.2-25.72c-1.74 3.34-5 5.76-8.86 6.34A56.03 56.03 0 0 1 157 180.6Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M170.12 28.36c-.4.12-.77.27-1.13.45-.17-.5-.38-1-.62-1.48 3.72-3.63 5.25-9.54 5.25-9.54s-1.16.2-3.1.64c-.27.04-3.78.6-8.24 2.31-.8-.58-1.54-1.04-2.1-1.38.52-2.93 1.68-12.56-4.46-16.11-6.1-3.54-13.8 2.2-16.12 4.14l-.7-.42c-3.07-1.77-10.77-5.35-16.05-.23-5.64 5.46-2.31 14-1.04 16.7l-.55.53a7.14 7.14 0 0 0-8.17-1.63l-2.13.93-1.38-1.88a7.24 7.24 0 0 0-8.29-2.54c-2.69.94-4.49 3.2-4.8 6.05l-.26 2.32-2.32.25a7.12 7.12 0 0 0-6.05 4.81 7.22 7.22 0 0 0 .83 6.53 4.2 4.2 0 0 0-2.74.06c.27-.4.48-.77.59-1.13a5.2 5.2 0 0 0-9.95-3.04c-.1.36-.15.8-.14 1.27-.3-.38-.59-.7-.9-.91a5.2 5.2 0 0 0-5.96 8.52c.3.21.7.38 1.16.53-.45.15-.84.34-1.14.56a5.17 5.17 0 0 0-1.02 7.29 5.16 5.16 0 0 0 7.28 1.02c.3-.22.58-.55.86-.93 0 .47.07.9.19 1.25a5.2 5.2 0 0 0 9.83-3.39 4.23 4.23 0 0 0-.62-1.1c.45.15.88.22 1.25.22a5.18 5.18 0 0 0 3.36-1.32 7.2 7.2 0 0 0 2.13 4.44 7.15 7.15 0 0 0 8.06 1.52l2.13-.93 1.38 1.88c.29.38.6.74.94 1.05-.52.51-1.06 1-1.64 1.44-.47-.3-1.12-.7-1.92-1.06a11.98 11.98 0 0 0-13.25 1.82C84.62 61.46 83 67.7 83 67.7s7.37 4.17 15.26.42c5.9-2.8 6.53-7.22 6.48-9.26.78-.64 1.54-1.33 2.26-2.07a7.27 7.27 0 0 0 5.72.36 7.12 7.12 0 0 0 4.8-6.05l.26-2.32 2.32-.26a7.11 7.11 0 0 0 5.3-3.24c2.57.32 4.97.13 6.2-.01.99 1.88 3.82 6.71 7.88 9.06a9.1 9.1 0 0 0 5.07 1.33c6.9-.36 9.92-10 10.67-12.92.64-.09 1.6-.24 2.71-.51a7.36 7.36 0 0 0 .15 8.25 7.4 7.4 0 0 0 5.93 3.16c.53 0 1.14-.1 1.78-.3-.4.55-.7 1.07-.88 1.58a7.4 7.4 0 0 0 13.65 5.65l.34.62c-.71 1.48-3.8 8.96 5.53 12.36 6.77 2.46 13.45-1.15 13.5-1.17 0 0-2.07-9.48-9.46-12.55a7.38 7.38 0 0 0 3.7-7.5 7.35 7.35 0 0 0-2.87-4.87 6.05 6.05 0 0 0-1.62-.8c.64-.21 1.21-.45 1.65-.76a7.4 7.4 0 0 0-8.5-12.12c-.43.3-.85.76-1.26 1.3 0-.68-.05-1.3-.2-1.81a7.35 7.35 0 0 0-3.6-4.37 7.36 7.36 0 0 0-5.65-.54Zm-4.08 10.84a8.2 8.2 0 0 0-.73-.22l.4-.3c.1.17.2.34.33.52Zm14.35 20.08.48.33c-.36.17-.67.35-.93.52-.33-.6-.6-1.15-.8-1.65.02-.17.03-.35.03-.53a6 6 0 0 0 1.22 1.33ZM92.2 42.12l-.12-.32.2.15-.08.17Z" fill="#000" fill-opacity=".2"/><path d="M179.03 58.94s-4.98 8.83 5.4 12.6c6.8 2.48 13.5-1.16 13.5-1.16s-2.16-9.9-9.97-12.75c-6.1-2.22-8.93 1.3-8.93 1.3Z" fill="#5DD362"/><path d="M197.93 70.38s-2.16-9.9-9.97-12.75c-4.07-1.48-6.7-.39-8.02.5-1.36-2.4-1.47-4.18-1.45-4.25.03-.3-.2-.53-.46-.63-.07-.02-.2-.07-.3-.03-.39.01-.67.37-.66.75 0 .23.35 4.54 4.63 8.83 6.05 6.6 16.23 7.58 16.23 7.58Z" fill="#42BC53"/><path fill-rule="evenodd" clip-rule="evenodd" d="M166.22 27c5.28-3.06 7.4-11.2 7.4-11.2s-7.38-4.18-15.26-.43c-7.89 3.74-6.37 10.37-6.37 10.37s6.61 5.65 14.23 1.25Z" fill="#5DD362"/><path fill-rule="evenodd" clip-rule="evenodd" d="M148 29.43c.05.08.1.17.24.2.42.34 1.09.3 1.42-.12a23.68 23.68 0 0 1 3.26-3.15c1.97 1.41 7.33 4.1 13.3.64 5.28-3.06 7.4-11.2 7.4-11.2s-1.16.2-3.1.63c-.54.07-14.38 2.3-22.36 11.87a.96.96 0 0 0-.16 1.13Z" fill="#42BC53"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.4 54.5C85.1 57.55 83 65.7 83 65.7s7.37 4.17 15.26.42c7.88-3.74 6.36-10.37 6.36-10.37s-6.6-5.65-14.23-1.25Z" fill="#5DD362"/><path fill-rule="evenodd" clip-rule="evenodd" d="M108.61 52.06c-.05-.08-.1-.17-.23-.2-.42-.34-1.1-.3-1.43.12a23.6 23.6 0 0 1-3.26 3.16c-1.97-1.41-7.32-4.1-13.3-.64-5.28 3.05-7.4 11.2-7.4 11.2s1.16-.2 3.1-.64c.54-.07 14.39-2.3 22.37-11.87.3-.3.35-.8.15-1.14Z" fill="#42BC53"/><path d="M68.58 49.96a5.17 5.17 0 0 1 1.02-7.29c.3-.22.7-.4 1.14-.56a4.26 4.26 0 0 1-1.16-.53 5.2 5.2 0 0 1 5.96-8.52c.31.21.6.53.9.91 0-.47.03-.9.14-1.27a5.16 5.16 0 0 1 6.5-3.45 5.2 5.2 0 0 1 3.45 6.5c-.11.35-.32.73-.59 1.12.45-.15.87-.24 1.25-.25a5.2 5.2 0 0 1 .18 10.4c-.37 0-.8-.07-1.25-.2.28.37.5.74.62 1.1a5.2 5.2 0 1 1-9.83 3.38 4.23 4.23 0 0 1-.2-1.25c-.27.38-.55.7-.85.93a5.17 5.17 0 0 1-7.28-1.02Z" fill="#4ACAD3"/><path fill-rule="evenodd" clip-rule="evenodd" d="M81.82 37.64a1.44 1.44 0 1 0-2.76-.84c-.23.76.23 4.18.23 4.18s2.3-2.58 2.53-3.34Zm2.24 5.8a1.44 1.44 0 1 0-.05-2.9c-.8.02-3.9 1.52-3.9 1.52s3.16 1.4 3.95 1.38Zm-6.05-2.02s-1.74-2.98-2.4-3.44a1.44 1.44 0 1 0-1.65 2.37c.65.45 4.05 1.07 4.05 1.07Zm3.07 6.84a1.44 1.44 0 0 0 .9-1.84c-.26-.75-2.65-3.25-2.65-3.25s-.35 3.44-.09 4.2a1.44 1.44 0 0 0 1.84.89Zm-5.32-1.96c.64-.48 2.27-3.52 2.27-3.52s-3.37.73-4 1.2a1.44 1.44 0 1 0 1.73 2.32Z" fill="#fff"/><path d="m117.53 49.1.25-2.32 2.32-.26a7.12 7.12 0 0 0 6.05-4.8 7.23 7.23 0 0 0-2.55-8.29l-1.87-1.38.93-2.13c1.23-2.8.65-5.9-1.52-8.06a7.14 7.14 0 0 0-8.06-1.52l-2.13.93-1.38-1.88a7.24 7.24 0 0 0-8.29-2.54c-2.69.94-4.49 3.2-4.8 6.05l-.26 2.32-2.32.25a7.12 7.12 0 0 0-6.05 4.81 7.2 7.2 0 0 0 1.67 7.53c.27.27.56.52.87.76l1.88 1.38-.93 2.13a7.15 7.15 0 0 0 1.52 8.06 7.15 7.15 0 0 0 8.06 1.52l2.13-.93 1.38 1.88a7.23 7.23 0 0 0 8.29 2.54 7.12 7.12 0 0 0 4.8-6.05Z" fill="#FDB599"/><path fill-rule="evenodd" clip-rule="evenodd" d="M109.88 41.2a1.44 1.44 0 1 1-2.78.74c-.2-.77-.1-5.94-.1-5.94s-2.5 4.53-3.06 5.1a1.44 1.44 0 0 1-2.03-2.05c.56-.56 5.1-3.05 5.1-3.05s-5.17.1-5.94-.1a1.44 1.44 0 0 1 .75-2.78c.77.2 5.19 2.88 5.19 2.88s-2.68-4.42-2.88-5.2a1.44 1.44 0 1 1 2.78-.74c.2.77.1 5.94.1 5.94s2.5-4.53 3.05-5.1a1.44 1.44 0 0 1 2.04 2.05c-.56.56-5.1 3.05-5.1 3.05s5.17-.1 5.94.1a1.44 1.44 0 1 1-.75 2.78C111.42 38.68 107 36 107 36s2.67 4.42 2.88 5.2Z" fill="#fff"/><path d="M190.76 55.82a7.36 7.36 0 0 0-1.46-10.36 6.06 6.06 0 0 0-1.62-.8c.64-.21 1.21-.45 1.65-.76a7.4 7.4 0 0 0-8.5-12.12c-.43.3-.85.75-1.26 1.3 0-.68-.05-1.3-.2-1.81a7.35 7.35 0 0 0-3.6-4.37 7.4 7.4 0 0 0-10.55 8.7c.15.5.44 1.04.82 1.6a6 6 0 0 0-1.77-.36 7.4 7.4 0 0 0-.26 14.8c.53 0 1.14-.1 1.78-.3-.4.55-.7 1.07-.88 1.58a7.4 7.4 0 0 0 14 4.81 6 6 0 0 0 .26-1.78c.4.55.8 1 1.22 1.33a7.35 7.35 0 0 0 5.49 1.42 7.35 7.35 0 0 0 4.88-2.88Z" fill="#F7D30C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M171.9 38.3a2.05 2.05 0 1 1 3.94-1.2c.33 1.08-.33 5.94-.33 5.94s-3.27-3.66-3.6-4.74Zm-3.18 8.25a2.06 2.06 0 1 1 .07-4.11c1.13.02 5.56 2.15 5.56 2.15s-4.5 1.97-5.63 1.96Zm8.62-2.88s2.47-4.24 3.4-4.89a2.06 2.06 0 1 1 2.36 3.37c-.93.65-5.76 1.52-5.76 1.52Zm-4.38 9.73a2.06 2.06 0 0 1-1.27-2.6c.37-1.08 3.76-4.63 3.76-4.63s.5 4.89.13 5.96a2.06 2.06 0 0 1-2.62 1.27Zm7.57-2.79c-.9-.68-3.23-5-3.23-5s4.8 1.04 5.7 1.72a2.06 2.06 0 1 1-2.47 3.28Z" fill="#fff"/><path d="M169.14 31.55c1.82-6.99-6-12.42-8.95-14.19.5-2.93 1.67-12.56-4.47-16.11-6.1-3.54-13.8 2.2-16.12 4.14l-.7-.42c-3.07-1.77-10.77-5.35-16.05-.23-5.64 5.46-2.31 14-1.04 16.7-2.15 2-8.38 8.59-5.81 15.58a8.55 8.55 0 0 0 3.88 4.54c4.03 2.34 9.6 1.96 11.72 1.7 1 1.89 3.83 6.72 7.89 9.07a9.1 9.1 0 0 0 5.07 1.33c6.9-.36 9.92-10 10.67-12.92 2.86-.4 12.09-2.2 13.92-9.2Z" fill="#FF7398"/><path fill-rule="evenodd" clip-rule="evenodd" d="M142.76 25.6s3.69 8.2.36 8.71c-3.34.52-1.46-8.59-1.46-8.59s-7.11 6-8.15 3.03c-1.04-2.98 7.7-4.05 7.7-4.05s-7.98-4.7-5.38-6.83c2.59-2.15 6.21 6.09 6.21 6.09s1.94-8.92 4.82-7.26c2.88 1.67-3.86 7.82-3.86 7.82s8.88-1 8.37 2.35c-.5 3.34-8.6-1.27-8.6-1.27Z" fill="#fff"/><rect x="191" y="129" width="2" height="39" rx="1" fill="#E6E6E6"/><path d="M202 166h-9.43l6.43-17h-11l-6 21h8.64L186 189l16-23Z" fill="#9177FF"/>`,
  "fro": (components, colors) => `<path d="M94.7 69.39c-4.62 24.47-16 42.72-25.74 41a7.49 7.49 0 0 1-1.96-.63V89a65.93 65.93 0 0 1 28.4-54.24c.48 2.39.83 4.99 1.05 7.77a262.85 262.85 0 0 1 36.9-2.44c13.27 0 25.67.85 36.22 2.34.22-2.74.57-5.3 1.05-7.67A65.92 65.92 0 0 1 199 89v20.76c-.62.3-1.28.52-1.95.63-9.72 1.72-21.09-16.48-25.73-40.9a260.5 260.5 0 0 1-37.97 2.59c-14.3 0-27.6-1-38.65-2.7Z" fill="#000" fill-opacity=".16"/><path d="M133 0c-11.21 0-21.9 2.2-31.69 6.18-.92-.12-1.86-.18-2.81-.18-6.7 0-12.77 3.07-17.2 8.06-18.04.93-33.46 13.3-40.77 30.9C32.5 49.56 27 59.04 27 70c0 .58.02 1.15.05 1.73A62.11 62.11 0 0 0 17 106c0 7.33 1.21 14.34 3.43 20.78-.28 1.69-.43 3.44-.43 5.22 0 9.45 4.1 17.81 10.38 22.88C37.74 172.68 53.6 185 72 185c1.5 0 2.98-.08 4.44-.24C81.9 189.9 88.88 193 96.5 193c4.44 0 8.67-1.05 12.5-2.95v-9.44a56.03 56.03 0 0 1-31.8-45.74A12 12 0 0 1 67 123v-13c0-1.72.36-3.36 1.02-4.84.3.1.62.18.94.23 9.73 1.72 21.12-16.53 25.74-41 11.05 1.7 24.35 2.7 38.65 2.7 14.02 0 27.06-.96 37.97-2.6 4.64 24.41 16.01 42.6 25.73 40.9.32-.06.63-.14.94-.23a11.96 11.96 0 0 1 1 4.83v13a12 12 0 0 1-10.2 11.87A56.03 56.03 0 0 1 157 180.6v9.44a28.06 28.06 0 0 0 12.5 2.95c7.62 0 14.61-3.1 20.06-8.24 1.46.16 2.94.24 4.44.24 18.39 0 34.26-12.32 41.62-30.12C241.9 149.81 246 141.45 246 132c0-1.78-.15-3.53-.43-5.22A63.91 63.91 0 0 0 249 106a62.11 62.11 0 0 0-10.05-34.27c.04-.58.05-1.15.05-1.73 0-10.96-5.5-20.44-13.53-25.04-7.31-17.6-22.73-29.97-40.77-30.9C180.27 9.07 174.2 6 167.5 6c-.95 0-1.89.06-2.81.18A83.76 83.76 0 0 0 133 0Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "froBand": (components, colors) => `<path d="M250 70.5c0 .8-.03 1.6-.1 2.37A57.74 57.74 0 0 1 261 107c0 7.16-1.3 14.01-3.67 20.34a28.47 28.47 0 0 1-11.78 29.71 53.5 53.5 0 0 1-53.86 29.64A36.35 36.35 0 0 1 168.5 195c-4.02 0-7.88-.65-11.5-1.85v-12.54a56.03 56.03 0 0 0 31.8-45.74A12 12 0 0 0 199 123v-13a12 12 0 0 0-10-11.83V92a56 56 0 0 0-2.22-15.68l1.37 12.87-11.34-24-45.13-19.52-30.12 10.56-21.5 20.19-.04-2.6A55.93 55.93 0 0 0 77 92v6.17A12 12 0 0 0 67 110v13a12 12 0 0 0 10.2 11.87A56.03 56.03 0 0 0 109 180.6v10.94A36.36 36.36 0 0 1 93.5 195c-8.8 0-16.88-3.12-23.19-8.31a53.5 53.5 0 0 1-53.86-29.63 28.47 28.47 0 0 1-11.78-29.72A57.87 57.87 0 0 1 1 107a57.74 57.74 0 0 1 11.1-34.13 28.5 28.5 0 0 1 16-28.04 55.02 55.02 0 0 1 47.55-31.78 28.4 28.4 0 0 1 26.6-7.24A83.78 83.78 0 0 1 133 0a83.82 83.82 0 0 1 29.4 5.3 28.4 28.4 0 0 1 23.94 7.76 55.02 55.02 0 0 1 47.56 31.77A28.5 28.5 0 0 1 250 70.5Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M188.37 98.97c.41-2.55.63-5.16.63-7.82C189 62.35 163.7 39 132.5 39S76 62.35 76 91.15c0 2.66.22 5.27.63 7.82 4.1-25.09 27.55-44.32 55.87-44.32 28.32 0 51.78 19.23 55.87 44.32Z" fill="#92D9FF"/>`,
  "longButNotTooLong": (components, colors) => `<path d="M50 90.5c0 4.55 1.7 8.64 4.85 10.77.9.61 2.47.93 4.15 1.07V182a8 8 0 0 0 8 8h42v-9.39a56.03 56.03 0 0 1-31.8-45.74A12 12 0 0 1 67 123v-13c0-3.5 1.5-6.63 3.87-8.83 11.54-2.61 24.1-7.53 36.47-14.67 12.13-7 22.5-15.24 30.48-23.75a87.36 87.36 0 0 1-12.45 20.78c12.68-5.52 21.3-14.4 25.9-26.63.37.92.76 1.84 1.17 2.76 10.26 23.03 27.88 39.36 45.77 44.74.5 2.11.79 4.08.79 5.6v13a12 12 0 0 1-10.2 11.87A56.03 56.03 0 0 1 157 180.6V190h18a32 32 0 0 0 32-32v-54.12c0-.07 0-.17-.03-.28-.07-5.64-.28-18.87-.6-21.37A74.01 74.01 0 0 0 132.99 18c-36.08 0-66.14 25.83-73 60-5.52 0-10 5.6-10 12.5Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M152.44 59.66c11.94 26.81 33.86 44.53 54.56 46.5V92A74 74 0 0 0 60.32 78H60c-5.52 0-10 5.6-10 12.5 0 6.48 3.95 11.81 9 12.44v.15l.95-.1H60a8.1 8.1 0 0 0 1.9-.22C75.7 101 91.68 95.54 107.34 86.5c12.13-7 22.5-15.24 30.48-23.75a87.36 87.36 0 0 1-12.45 20.78c12.68-5.52 21.3-14.4 25.9-26.63.37.92.76 1.84 1.17 2.76Z" fill="#fff" fill-opacity=".08"/>`,
  "miaWallace": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M69.03 76.21C81.97 43.13 95.65 26.6 110.06 26.6c.54 0 29.25-.24 48.05-.36C178.77 35.59 193 55.3 193 78.1V93h-82.94l-2.8-23.18L103.36 93H69V78.11c0-.63.01-1.27.03-1.9Z" fill="#000" fill-opacity=".16"/><path d="M40 145c-.09-18.98 30.32-97.2 41-110 7.92-9.5 27.7-15.45 52-15 24.3.45 44.86 3.81 53 14 12.32 15.43 40.09 92.02 40 111-.1 21.27-9.62 33.59-18.6 45.22A293.1 293.1 0 0 0 203 196c-10.28-2.66-27.85-5.18-46-6.68v-8.7A56 56 0 0 0 189 130V92c0-1.34-.05-2.68-.14-4h-76.8l-2.8-21.44L105.36 88H77.14c-.1 1.32-.14 2.66-.14 4v38a56 56 0 0 0 32 50.61v8.7c-18.15 1.5-35.72 4.03-46 6.69-1.42-1.93-2.9-3.84-4.39-5.78C49.62 178.6 40.1 166.27 40 145Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "shavedSides": (components, colors) => `<path d="m175.83 55.92-.03.02c.76.88 1.49 1.78 2.19 2.7a55.74 55.74 0 0 1 11 33.36v5.5c0-15.77-6.69-29.98-17.4-39.93-11.58 3.77-49.58 14.27-77.63.42A54.35 54.35 0 0 0 77 97.5V92c0-12.5 4.1-24.04 11.01-33.35.71-.94 1.45-1.86 2.22-2.75l-.02-.02A55.88 55.88 0 0 1 133 36a55.88 55.88 0 0 1 42.82 19.92Z" fill="#000" fill-opacity=".16"/><path d="M92.54 53.29A55.81 55.81 0 0 0 77 91.99v6.17a11.97 11.97 0 0 0-6.49 3.34l.7-17.37a45.92 45.92 0 0 1 17.37-34.17c-2.2-3.84-1.45-10.33 7.8-13.1 5.07-1.5 7.57-5.08 10.24-8.88 3.5-5 7.27-10.37 17.48-11.92 9.87-1.5 13.23-.88 17.05-.18 3.13.57 6.58 1.2 14.2.76 9.85-.57 16.86-4 21.43-6.22 3.26-1.6 5.27-2.58 6.17-1.47 15.42 18.9 6.97 33.8-6.2 41.96A45.9 45.9 0 0 1 193 86v13.6c-1.22-.7-2.56-1.2-4-1.43V92c0-15.26-6.1-29.09-16-39.19-7.76 2.75-50.39 16.55-80.46.48ZM223.61 226.05c3.06 5.6 4.05 11.12 3.5 16.38A72.02 72.02 0 0 0 161 199h-4v-18.39a56.03 56.03 0 0 0 31.8-45.74c1.5-.23 2.93-.74 4.2-1.47v20.7c0 20.77 11.47 39.79 22.15 57.47 2.97 4.93 5.88 9.75 8.46 14.48ZM68.7 146.5l.66-16.35a12 12 0 0 0 7.85 4.72A56.03 56.03 0 0 0 109 180.6V199h-4c-11.2 0-21.8 2.56-31.25 7.12-2.99-18.29-4.3-38.68-5.05-59.62Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M90.88 52.36c33.22 19.3 83.37 0 83.37 0 14.53-7.77 25.08-23.32 8.7-43.4-2.17-2.66-10.7 6.72-27.6 7.7-16.9.97-13.27-3.31-31.25-.59-17.97 2.73-15.99 17.3-27.72 20.8-11.73 3.5-9.8 13-5.5 15.5Z" fill="#fff" fill-opacity=".2"/>`,
  "straight02": (components, colors) => `<path d="M157 180.61V199h4a71.7 71.7 0 0 1 46 16.6V92a74 74 0 0 0-148 0v183.72A28 28 0 0 0 83 248v-45.58a71.95 71.95 0 0 1 22-3.42h4v-18.39a56.24 56.24 0 0 1-26-25.36V93.27a150 150 0 0 0 28.34-12.77c15.4-8.9 28.1-19.56 36.73-30.1 1.76 5.2 4.1 10.4 7.04 15.48 8.78 15.2 21.12 26.35 33.9 32.04v.25c.4.06.8.15 1.18.26.77.32 1.55.62 2.33.9A12 12 0 0 1 199 110v13a12 12 0 0 1-10.22 11.87A56.03 56.03 0 0 1 157 180.6Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M157 199v-18.39a56.03 56.03 0 0 0 31.8-45.74A12 12 0 0 0 199 123v-13a12 12 0 0 0-6.5-10.66 44.57 44.57 0 0 0 14.5 2.8v113.47A71.7 71.7 0 0 0 161 199h-4ZM83 202.42v-47.17a56.24 56.24 0 0 0 26 25.36V199h-4c-7.67 0-15.07 1.2-22 3.42ZM189 97.92v.25c.4.06.8.15 1.18.26l-1.18-.51Z" fill="#000" fill-opacity=".27"/>`,
  "straight01": (components, colors) => `<path d="M67 113c10.86-22.7 34.67-31.6 55.44-39.36 13.32-4.97 25.39-9.48 32-16.86 2.22 2.02 4.75 4.05 7.41 6.2C172.06 71.16 184.21 80.91 189 98v.17a12 12 0 0 1 9.81 9.72V86.04c0-1.3-.05-2.57-.15-3.84 4.54-17-3.1-37.78-12.66-47.2-9.48-8.82-22.3-12.32-30.95-8.48C143.45 8.98 109.9 13.24 90 28c-13.22 9.8-24.79 25.72-27.84 45.75A46.18 46.18 0 0 0 61 84.05v88.5c-.2 31.5-7.4 82.49-21 90.45 62.36 16.8 71.93-38.15 69-82v-.39a56.03 56.03 0 0 1-31.8-45.74A12 12 0 0 1 67 123v-10ZM157 180.61a56.03 56.03 0 0 0 31.8-45.74 12 12 0 0 0 10.01-9.76v1.36A100 100 0 0 0 209.78 172l26.95 52.71a37.79 37.79 0 0 1-3.94 40.76A72 72 0 0 0 161 199h-4v-18.39Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M67 113c10.86-22.7 34.67-31.6 55.44-39.36 13.32-4.97 25.39-9.48 32-16.86 2.22 2.02 4.75 4.05 7.41 6.2 10.19 8.17 22.3 17.89 27.11 34.9-4.57-14.04-15.75-21.22-25.6-27.55-3.21-2.06-6.28-4.03-8.93-6.12-6.6 6.4-18.67 10.32-32 14.64C101.68 85.58 77.87 93.3 67 113Z" fill="#000" fill-opacity=".16"/>`,
  "straightAndStrand": (components, colors) => `<path d="M133 18a74 74 0 0 0-74 74v96c0 8.56 1.45 16.78 4.12 24.42A71.67 71.67 0 0 1 105 199h4v-18.39a56.03 56.03 0 0 1-31.8-45.74A12 12 0 0 1 67 123v-13a12 12 0 0 1 .46-3.3c17.13-6.02 33.75-21.94 43.59-44.04.4-.92.8-1.84 1.18-2.76 4.58 12.23 13.21 21.11 25.89 26.63a87.36 87.36 0 0 1-12.45-20.78c7.98 8.5 18.35 16.74 30.48 23.75 14.33 8.27 28.91 13.56 41.87 15.75.63 1.45.98 3.06.98 4.75v13a12 12 0 0 1-10.2 11.87A56.03 56.03 0 0 1 157 180.6V199h4a71.67 71.67 0 0 1 41.88 13.42A73.9 73.9 0 0 0 207 188V92a74 74 0 0 0-74-74Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M111.05 62.66C99.59 88.39 78.95 105.75 59 108.84v4c19.95-3.1 40.59-20.45 52.05-46.18.4-.92.8-1.84 1.18-2.76 4.58 12.23 13.21 21.11 25.89 26.63a78.16 78.16 0 0 1-4.62-6.26c-10.18-5.56-17.27-13.69-21.27-24.37a98.8 98.8 0 0 1-1.18 2.76ZM129.5 73.64a137.34 137.34 0 0 0 26.65 19.86c17.75 10.25 35.9 15.91 50.85 16.78v-4c-14.95-.87-33.1-6.54-50.85-16.78-12.13-7-22.5-15.24-30.48-23.75a98.3 98.3 0 0 0 3.83 7.89Z" fill="#000" fill-opacity=".16"/>`,
  "dreads01": (components, colors) => `<g fill="${escape_exports.xml(`${colors.hair}`)}"><path d="M187.7 56.12c.9 3.25 2.17 11.95-.06 14.84-.75.96-5.84-1.74-7.97-2.92l-3.53-1.96c-14.92-8.32-19.74-11-45.9-10.62-28.11.4-47.37 13.58-48.46 14.93-.75.93-1.71 3.44-2.5 10.41-.25 2.2-.32 4.97-.4 7.71-.14 5.94-.3 11.77-2.25 11.76-2.44-.01-2.97-23.78-1.92-33.21.04-.36.1-.78.18-1.23.23-1.4.5-3.13.16-4.11-.16-.44-.54-.7-.94-.99-.62-.43-1.26-.88-1.08-2.03.21-1.31 1.1-1.43 1.97-1.56.57-.08 1.13-.16 1.5-.56 1.13-1.23.46-1.87-.31-2.6-.46-.43-.95-.9-1.12-1.53-.63-2.36 1.03-3.1 2.69-3.83l.38-.17c.69-.3 1.1-.42 1.42-.5.6-.15.85-.21 1.89-1.35-2.14-1.56-2.9-3.69.01-4.83.56-.22 1.52-.2 2.5-.2 1.2.02 2.4.03 2.94-.37.15-.11.24-.53.33-.9.06-.27.11-.5.18-.6 1.35-1.93 1.23-3.4 1.08-5.4l-.07-.92c-.13-2.04-.11-3.9 2.33-4.11 1-.08 1.9.4 2.77.86.54.29 1.08.58 1.64.73.87.23 1.1.43 1.32.43.19 0 .37-.15.96-.55 1.18-.82 1.3-2.05 1.43-3.3.11-1.08.22-2.18 1.04-3 1.58-1.6 2.8-.64 4 .3.64.5 1.28 1 1.96 1.1 2.55.36 3.06-1.06 3.62-2.59.36-1 .74-2.06 1.74-2.68 1.83-1.15 2.64-.05 3.43 1.01.5.68.98 1.33 1.7 1.39 1.01.08 2.52-1.1 3.85-2.14a11.6 11.6 0 0 1 2.1-1.44c2.27-.93 3.91.07 5.58 1.08 1.4.85 2.83 1.72 4.65 1.43l.83-.13c2.24-.37 3.11-.51 5.45.96a4.2 4.2 0 0 0 3.74.69c.6-.12 1.3-.25 2.26-.26 1.1 0 1.98.5 2.83.99.7.4 1.36.79 2.13.87.42.04.84-.16 1.26-.36.42-.2.84-.4 1.3-.38 1.83.11 2.69 1.5 3.55 2.88.67 1.08 1.34 2.15 2.46 2.66 1.62.72 3.44.24 5.17-.21.79-.2 1.55-.4 2.28-.5 3.96-.46 3.27 1.97 2.55 4.56a11.1 11.1 0 0 0-.6 3.26c1.15.27 2.3-.15 3.46-.57 1.1-.4 2.18-.8 3.27-.6 3.4.58 2.25 4.02 1.44 6.45l-.08.21c.64 0 1.54-.2 2.56-.42 2.86-.6 6.61-1.41 7.78 1.13.47 1.05 0 2.31-.44 3.54a7.17 7.17 0 0 0-.61 2.41c.02 1.53.7 2.9 1.4 4.27.45.91.9 1.82 1.17 2.78Z"/><path d="m186.36 73.6.47.33c1.76.99 3.15 10.9 3.22 14.69.04 2.34.08 11.25-2.4 10.48-.75-.23-1.9-4.95-2.06-7.72-.16-2.76-1.74-12.16-4.14-16.49-.13-.23-.32-.51-.53-.8-.65-.96-1.44-2.12-.92-2.76.72-.88 1.43-.57 2.26-.2l.44.18c.87.35 2.77 1.68 3.66 2.3Z"/></g>`,
  "dreads02": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M218.2 107.16a12.2 12.2 0 0 1-6.25-5.56 9.62 9.62 0 0 1 1.95-.13c2.27-.02 5.15-.04 4.62-2.87-.57-2.98-5.4-2.07-7.28-1.6.58-.36 1.34-.49 2.12-.62 1.49-.25 3-.51 3.31-2.33.53-3.18-3.29-3.08-5.08-2.4-.26-2.12 2-3.89 4.14-5.55 1.25-.97 2.45-1.9 3.08-2.85.13-.2.29-.38.43-.55.47-.53.86-.97.31-2.08-1.16-2.35-3.95.32-5.34 1.66l-.45.43c.88-1.63 3.32-8.4 2.95-10.13-.54-2.52-2.34-2.61-3.78-.56-.62.88-.94 2.65-1.23 4.26-.15.81-.29 1.58-.45 2.16-.87-.65-1.39-.7-1.7-.74-.43-.04-.49-.05-.55-1.45-.04-1.02.8-2.7 1.56-4.16.4-.8.79-1.54.97-2.09.08-.24.2-.51.3-.81.53-1.36 1.24-3.18.65-4.23-1.78-3.15-3.48 1.17-3.94 2.65-.5-2.14.5-3.97 1.53-5.88.6-1.13 1.24-2.3 1.57-3.55.54-2.05 1.97-7.58-.51-8.56-2.48-.98-2.51 2.12-2.53 4.66-.01.93-.02 1.79-.15 2.34l-.03.13c-.37 1.57-.92 3.97-2.1 4.71-.18.11-2.83.34-2.96.2-1.1-1.29.42-3.53 1.74-5.49.76-1.13 1.46-2.17 1.55-2.87.22-1.73-.44-2.82-2.06-2.92-.47-.03-1.1.36-1.61.7-.4.24-.73.45-.89.41-1.07-.23-.36-3.82.17-6.5.2-1.04.38-1.94.42-2.46.15-2-.1-7.17-3.48-4.79l.16-2.06c.15-1.95.3-3.86.57-5.83.05-.37.18-.73.3-1.08.32-.97.63-1.86-.67-2.69-2.16-1.36-3.36 1.5-3.85 3.17-.26.9-.27 1.93-.28 2.95-.04 2.29-.07 4.45-2.87 4.52-3.37.07-2.63-2.42-1.87-4.99.29-1 .59-2 .65-2.88.13-1.74-1.01-6.42-3.26-3.26-.53.73-.64 2.56-.74 4.25-.07 1.19-.14 2.3-.34 2.92-.56-.25-.37-1.4-.17-2.61.2-1.2.41-2.44-.06-2.95-1.5-1.64-2.82-.36-3.94.72-.41.4-.8.79-1.16.97l-.08-1.22c-.06-1.04-.13-2.08-.17-3.12-.03-.72.1-1.7.22-2.75.28-2.15.58-4.58-.34-5.6-2.33-2.59-3.82.43-4.5 2.53-.1.28-.18.57-.25.85-.45 1.56-.83 2.93-2.98 3.15.08-1.1-.28-2.7-.65-4.38-.54-2.43-1.12-5-.39-6.35.27-.5.67-.59 1.07-.68.42-.09.85-.18 1.1-.78.83-1.9-.51-2.71-1.98-2.77-4.17-.18-3.8 3.31-3.46 6.58.22 2.04.42 4-.5 4.9-.55-.5-.54-1.03-.52-1.6.01-.6.03-1.24-.55-1.99-1.22-1.6-3.17-1.46-4.92-.73 0-.3.06-.93.16-1.72.41-3.5 1.2-10.27-3.24-6.1-.82.77-1 1.86-1.18 2.93-.12.7-.23 1.37-.51 1.95-.7 1.45-2.4 3.6-3.34 4.78-.47-1.92.16-4.26.7-6.22l.12-.45c.12-.45.46-1.2.85-2.07.84-1.84 1.9-4.2 1.53-5.17-1.27-3.38-4.63.5-6.52 2.68-.45.51-.8.94-1.05 1.15-1.58 1.4-7.88 6.04-9.9 4.64-.32-.23-.36-.74-.4-1.3-.05-.65-.11-1.38-.62-1.83-.48-.4-2.48-.6-3.06-.54.36-1.5-.34-3.43-2.05-2.9-1.23.36-1.45 1.56-1.67 2.74-.16.88-.33 1.75-.91 2.25-1.5 1.29-3.17.3-4.84-.68-1.15-.68-2.3-1.36-3.4-1.3.07-.32.22-.76.4-1.28.84-2.44 2.22-6.45-1.8-4.87-1.25.49-2.13 3.35-2.45 4.54-.14.55-.24 1.02-.32 1.42-.39 1.82-.5 2.32-3.18 3.03.09-.63.09-1.3.1-1.98 0-1.25 0-2.53.55-3.54.14-.28.4-.63.7-1.03 1.16-1.53 2.81-3.71-.24-4.05-3.78-.4-4.26 4.68-4.59 8.17-.08.9-.16 1.7-.28 2.27-4.12-2.5-6.86.96-9.33 4.07l-.15.19c.45-1.42 1.56-15.56-2.96-11.24-.84.8-.53 1.84-.24 2.87.16.55.32 1.1.29 1.6-.08 1.29-.5 2.43-1 3.62a24.52 24.52 0 0 1-2.97 5.53c-.3.4-.53.73-.71.99-.32.46-.48.7-.69.74-.22.04-.48-.17-1.04-.61a58.7 58.7 0 0 0-.38-.3c-2.43-1.87-3.58-6.62-3.46-9.52 0-.35.05-.76.1-1.19.22-2.24.51-5.2-2.5-4.35-3.01.86-2.05 6.15-1.5 9.2l.21 1.26c.4 2.69.65 5.43.2 8.17-2.3-2.36-3.09.87-3.6 2.97-.16.63-.28 1.16-.42 1.4-.7 1.26-1.84 2.07-2.98 2.86-.46.33-.93.65-1.36 1-.42-1.47.28-2.83.93-4.1.59-1.15 1.14-2.23.84-3.27-1.1-3.87-4.1.93-5.11 2.55l-.2.32c-.24.37-.69 1.42-1.19 2.59-.8 1.86-1.73 4.04-2.17 4.34-1.03.69-7.6-2.53-8.28-3.14-.55-.51-.76-1.45-.97-2.38-.25-1.11-.5-2.22-1.34-2.61-4.72-2.2-1.93 5.73-1 7.37a24.3 24.3 0 0 1 2.94 14.5 6.4 6.4 0 0 1-2.46-2.07 6.28 6.28 0 0 1-.87-2.53c-.19-.96-.36-1.88-.94-2.46-3.3-3.28-3.68 2.88-3.4 4.8.32 2.35 1.2 3.66 2.2 5.13.51.76 1.06 1.57 1.57 2.6.94 1.9.37 4.07-.2 6.23-.25.97-.51 1.95-.63 2.9-3.43-3.3-18.2-.55-14.4 4.5 1.17 1.55 2.47.44 3.8-.7.93-.8 1.87-1.6 2.8-1.55 4.09.22 6.24 5.3 5.97 8.84-.5-1.9-2.42-3.76-3.75-1.44-.8 1.4.32 3.67 1.1 5.25l.28.57c-.9-.44-5.37-2.52-6.25-2.16-3.44 1.41 1.3 4.15 2.54 4.7 4.22 1.87 6.89 3.92 8.2 8.99-1.43-.46-1.85-1.05-2.3-1.7-.3-.43-.62-.88-1.25-1.34-.95-.7-1.4-.7-1.96-.73-.31 0-.66-.02-1.13-.14l-.07-.02c-2.36-.6-5.4-1.4-8.04-.3-1.97.82-5.3 3.31-5.9 5.65-.77 2.87.84 3.6 2.9 2.14a9.77 9.77 0 0 0 2.08-2.23c1.09-1.45 2.12-2.82 4.5-2.73a6.6 6.6 0 0 1 4.64 2.33c.44.53.8 1.19 1.14 1.85.3.57.6 1.15.98 1.64.28.38.75.82 1.23 1.27.73.68 1.49 1.4 1.73 1.99 1.3 3.3-.87 6.27-2.63 8.68l-.46.63c-.42-.55-3.47-1.76-4.1-1.88-2.95-.56-4.05.8-2.2 3.52.3.45.8.77 1.28 1.08.43.28.85.55 1.15.91.37.45.66 1.03.94 1.61.27.54.54 1.08.88 1.53.92 1.24 2 2.08 3.1 2.94.55.44 1.12.88 1.68 1.39-.33.21-.46.02-.6-.17-.12-.17-.25-.34-.5-.24-.2.07-.47.04-.75 0-.3-.04-.61-.08-.87 0-.47.16-.64.68-.79 1.15-.12.36-.23.7-.46.79-1.91.76-3.84-.58-5.7-1.86-1.34-.94-2.64-1.85-3.89-1.92-1.61-.08-2.97 1-2.2 3.03.44 1.13 2.04 1.85 3.25 2.4l.79.36c3.24 1.65 6.48 2.87 9.95 1.6a14.73 14.73 0 0 0 9.67 3.69c-2.01 1-4 2.23-4.7 4.72a12.3 12.3 0 0 1-.9-1.17c-1.41-1.95-3.52-4.88-4.74-1.3-1.04 3.1 3.73 6.87 5.93 8.27-2.56.75-4.68.9-7.28.6-.3-.03-.66-.14-1.04-.25-1.4-.43-3.06-.92-2.2 2 1.13 3.83 7.59 2.37 10.13 1.62-1.78 1.5-9.56 11.7-2.8 9.39.95-.33 1.53-1.34 2.13-2.4.77-1.35 1.58-2.77 3.28-2.98 2.48-.3 3.38 1.37 4.41 3.28.43.79.88 1.62 1.47 2.37.39.49 1.3 1.21 2.28 1.98 1.58 1.24 3.3 2.6 3.17 3.28-.1.46-.72.82-1.4 1.21-.77.44-1.6.92-1.9 1.62-.62 1.55-.34 2.75.54 4.08 1.17 1.78 3.09 2.4 4.92 3.01.58.2 1.14.38 1.67.6 3.17 1.29 4.31 2.86 5.73 6.21-2.5.12-9.62 7.36-5.26 8.65 1.12.33 1.35-.25 1.6-.91.12-.3.24-.6.45-.86l.55-1.02.27-.52c.46-1.2.97-1.27 1.52-.22.07-.02.47.08.9.18.42.1.88.22 1.05.23 1.19.07 2.1-.53 3.03-1.15.4-.26.8-.53 1.24-.75.31-.15.62-.25.93-.35.68-.22 1.33-.42 1.86-1.23-.09.13.56-2.51.57-2.54.13-.31.38-.45.63-.6.25-.13.51-.28.68-.63a55.8 55.8 0 0 1-15.5-34.47A12 12 0 0 1 69 123v-13a12 12 0 0 1 7.5-11.13c.53.38 1.27 0 1.5-.84-.46-1.5 3.3-27.85 13-34.87 3.62-2.44 23-2.62 42.31-2.6 19.1 0 38.11.18 41.69 2.6 9.7 7.02 13.46 33.37 13 34.87.23.84.97 1.22 1.5.84A12 12 0 0 1 197 110v13a12 12 0 0 1-8.17 11.38 55.7 55.7 0 0 1-11.07 29.28c.2.81.4 1.63.55 2.5.18 1.1.23 2.14.28 3.15.1 2.04.19 3.94 1.37 5.95.19.33.42.6.66.86.33.38.66.76.86 1.28.16.44.2 1.05.25 1.68.1 1.4.2 2.92 1.7 2.92 3.1 0 1.37-5.97.6-7.38-.3-.54-.57-1-.82-1.41-1.03-1.74-1.63-2.74-1.57-5.64 1.75 1.16 7.53 3.38 9.45 2.32 3.5-1.94-2.69-3.9-5.83-4.89a11.7 11.7 0 0 1-1.6-.56c.63-.63 1.3-1.14 1.97-1.66 1.13-.86 2.25-1.72 3.22-3.1.25-.34.49-.72.73-1.11 1.01-1.6 2.1-3.3 3.82-3.38.4-.02 1.04.3 1.77.65 1.46.7 3.24 1.56 3.94.21.74-1.4-.26-1.89-1.15-2.33-.29-.14-.57-.28-.77-.44-.55-.45-.95-.57-1.2-.65-.45-.13-.5-.14-.27-1.49 1.1 1.17 2.8.43 3.25-1.01.3-.92-.16-1.46-.56-1.95-.28-.34-.55-.66-.54-1.07 0 .4.84-5.11.7-4.93.85-1.12 3.81-.8 5.34-.63h.07c2.13.24 2.17.31 3.03 2.02l.22.42c.88 1.72 3.2 5.18 3.7.64.13-1.08-.86-3.4-1.44-4.34a5.12 5.12 0 0 0-1.6-1.33c-.58-.37-1.12-.71-1.31-1.1-.48-.94.08-2.47.68-4.12.59-1.61 1.22-3.33.96-4.73.3.12.73.7 1.23 1.38 1.29 1.75 3 4.07 3.96.22.33-1.27-1.01-3.25-2.27-5.12-1.48-2.2-2.86-4.25-1.24-4.76 2.29-.73 4.61 2.22 5.25 4.04.2.56.27 1.37.35 2.22.12 1.2.24 2.48.72 3.14 3.03 4.2 3.4-2.75 3.16-4.58-.56-4.02-1.99-6.98-5.63-8.5 1.14-1.42 0-2.58-.91-3.53l-.36-.37c.55-.6 2.22-.75 4-.91 3.13-.28 6.62-.6 5.2-3.42-.39-.78-1.53-1.1-2.5-1.36-.36-.1-.7-.19-.96-.3ZM59.5 138.8c0-.14-.13-.09-.36.1l.35-.1Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "frizzle": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M90.91 55.36h84.18c18.24-10.53 21.67-29.2 8.76-45.43-3.21-4.04-8.76 11.75-25.82 12.72-17.06.98-15.42-6.3-33.57-3.58-18.15 2.73-16.15 17.3-28 20.8-11.84 3.5-5.55 15.5-5.55 15.5Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "shaggy": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M88.18 37.86c5.14-3.84 11.22-7.12 17.56-8.38 6.45-1.28 10.36-1.6 16.7-.07 1.64.39 2.2.78 3.63-.15 1.2-.79 9.66-9.5 35.42-4.66 26.03 4.88 33.77 44.08 43.42 45.57 3.49.53 7.79-.39 7.92-2.53 3.96 6.03 5 14 3.33 21.07-1.45 6.09-4.5 11.8-10 15.14-4.72 2.87-11.25 4.12-16.71 3.59a22.36 22.36 0 0 1-7.03-1.77c-2.76-1.2-4.96-3.4-7.67-4.54a53.9 53.9 0 0 0 9.18 6.42c1.64.9 3.3 1.53 5.11 2.02 1.24.34 3.76 1.48 4.96 1.18-7.81 1.4-15.16.18-22.32-3.16a51.67 51.67 0 0 1-9.2-5.48c-2.83-2.13-6.09-4.3-8.3-7.1.93 1.2-.7-.6-.92-.81a74.07 74.07 0 0 1-4.72-5.29c-1.99-2.48-3.84-5.08-5.5-7.8-1.68-2.76-8.36-13.87-10.38-16.5a195.3 195.3 0 0 0 6.41 16.93c-4.71-1.47-9.28-5.54-12.3-9.34a29.46 29.46 0 0 1-6.1-14.66c-3.83 10.41-12.79 18.63-22.03 24.3 2-3.74 5.05-6.9 7.05-10.69-9.2 9.33-24.57 13.9-28.6 27.58-1.03-4.76-4.35-8.58-5.34-13.43-1.1-5.4-1.9-11.11-1.73-16.62.4-12.24 8.64-23.72 18.16-30.82Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "shaggyMullet": (components, colors) => `<path d="M177.75 37.86c9.52 7.1 17.76 18.58 18.16 30.82.17 5.5-.62 11.23-1.73 16.62-.5 2.46-1.6 4.66-2.7 6.85-1.07 2.12-2.13 4.24-2.64 6.58-2.63-8.93-10.09-13.97-17.5-19-3.96-2.66-7.9-5.33-11.1-8.58 1.02 1.93 2.3 3.7 3.6 5.46 1.23 1.7 2.47 3.4 3.45 5.22-9.24-5.66-18.2-13.88-22.03-24.3a29.46 29.46 0 0 1-6.1 14.67c-3.02 3.8-7.59 7.87-12.3 9.34 2.43-5.5 4.5-11.21 6.4-16.92-1.78 2.31-7.21 11.29-9.6 15.23l-.77 1.26a73.9 73.9 0 0 1-10.47 13.35c-.5.53-1.42 1.52-.67.54-1.85 2.35-4.45 4.26-6.9 6.07l-1.4 1.04a51.67 51.67 0 0 1-9.2 5.48c-7.1 3.31-14.38 4.54-22.11 3.2.9.1 2.35-.4 3.53-.82a20 20 0 0 1 1.22-.4c1.8-.5 3.47-1.12 5.11-2.02a53.85 53.85 0 0 0 9.18-6.42c-1.37.58-2.6 1.42-3.84 2.27-1.23.83-2.46 1.67-3.83 2.27-2.28 1-4.54 1.53-7.03 1.77-5.46.53-12-.72-16.72-3.6-5.5-3.32-8.54-9.04-9.99-15.13-1.68-7.06-.63-15.04 3.33-21.07.13 2.14 4.43 3.06 7.92 2.53 3.77-.59 6.95-6.52 10.9-13.93 6.19-11.55 14.28-26.67 29.52-30.64 19.96-5.2 34.21 3.87 35.42 4.66 1.22.78 1.8.63 2.93.32l.68-.17c6.35-1.52 13.26-2.2 19.7-.92 6.35 1.26 12.43 4.54 17.57 8.38ZM71.93 110.75l.2.04a1.6 1.6 0 0 1-.2-.04ZM79 156.2c.8-1.53 1.57-3.06 2.32-4.6A56.2 56.2 0 0 0 109 180.6v9.01a54.4 54.4 0 0 1-7.73 1.97c-9 1.62-34.32-3.53-45.44-11.98-.85-.65-.42-1.92.67-2 11.66-.8 17.63-12.13 22.4-21.2l.1-.2ZM157 183.05v-2.44c6.95-3.3 13.11-8 18.13-13.71.71 2.24 1.75 4.33 3.43 5.79 1.32 1.14 3.48 1.12 5.34 1.1l1.2.01c1.67.05 3.34.06 5.02-.02.83-.03 1.2 1.02.53 1.5a39.2 39.2 0 0 1-3.64 2.07 29.3 29.3 0 0 1-7.98 2.74c-1.92.34-3.82.4-5.66.18a9.84 9.84 0 0 0 1.7 1.94c1.41 1.22 3.72 1.2 5.7 1.19h1.28c1.79.05 3.58.06 5.36-.02.9-.04 1.3 1.09.57 1.6a41.97 41.97 0 0 1-3.88 2.22 31.24 31.24 0 0 1-8.53 2.92c-5.5.97-10.86-.18-15.19-3.7a24.9 24.9 0 0 1-3.38-3.37Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path d="M81.32 151.6c-.75 1.54-1.51 3.07-2.31 4.6l-.1.18c-4.77 9.08-10.74 20.42-22.4 21.22-1.09.07-1.52 1.34-.67 1.99 11.12 8.45 36.43 13.6 45.44 11.98a54.4 54.4 0 0 0 7.73-1.96v-8.99a56.2 56.2 0 0 1-27.68-29ZM157 180.61v2.44a24.9 24.9 0 0 0 3.38 3.36c4.33 3.53 9.7 4.68 15.2 3.71a31.24 31.24 0 0 0 8.51-2.92 41.97 41.97 0 0 0 3.89-2.22c.72-.51.32-1.64-.57-1.6-1.78.08-3.57.07-5.35.02h-1.29c-1.98.01-4.29.03-5.7-1.2a9.84 9.84 0 0 1-1.7-1.93c1.84.22 3.74.16 5.66-.18a29.3 29.3 0 0 0 7.98-2.73 39.2 39.2 0 0 0 3.64-2.08c.68-.48.3-1.53-.53-1.5a69.9 69.9 0 0 1-5.02.02h-1.2c-1.86.01-4.02.03-5.34-1.11-1.69-1.46-2.72-3.55-3.43-5.8A56.18 56.18 0 0 1 157 180.62Z" fill="#000" fill-opacity=".16"/>`,
  "shortCurly": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M193.76 70.77a62.92 62.92 0 0 0-1.51-9.86 51.78 51.78 0 0 0-2.5-7.49c-.6-1.48-2.02-3.52-2.19-5.13-.16-1.57 1.07-3.32 1.33-5.16.24-1.79.2-3.66-.17-5.44-.83-4.03-3.6-7.77-7.85-8.82-.95-.23-2.97.06-3.64-.5-.77-.63-1.3-2.8-2-3.67-2-2.47-5.1-4.07-8.37-3.51-2.41.4-1.03.9-2.84-.51-1-.8-1.75-2-2.73-2.85a24.7 24.7 0 0 0-4.9-3.28 50.82 50.82 0 0 0-14.84-4.91c-9.28-1.52-19.2-.2-28.2 2.22a74.58 74.58 0 0 0-13.14 4.74c-1.78.87-2.81 1.58-4.67 1.81-2.93.36-5.4.34-8.18 1.58-8.54 3.82-12.39 12.69-9.06 21.17.66 1.71 1.57 3.21 2.82 4.59 1.52 1.68 2.07 1.35.76 3.28a52.78 52.78 0 0 0-4.96 9.17c-3.53 8.4-4.12 17.87-3.89 26.83.08 3.13.22 6.3.71 9.42.22 1.34.28 3.87 1.29 4.87.5.5 1.24.78 1.96.58 1.71-.47 1.13-1.73 1.17-2.9.2-5.88-.08-11.08 1.32-16.9a44.4 44.4 0 0 1 5-12.03 72.07 72.07 0 0 1 9.8-13.35c.92-.99 1.12-1.4 2.35-1.48.93-.05 2.3.59 3.2.8 2 .5 4 .98 6.03 1.3 3.74.6 7.45.65 11.22.53 7.43-.23 14.88-.75 22.09-2.62 4.78-1.24 9.02-3.47 13.6-5.1.08-.04 1.23-.85 1.43-.82.28.04 1.97 1.82 2.26 2.05 2.23 1.74 4.67 2.48 7.07 3.83 2.97 1.66.1-.72 1.73 1.36.48.6.72 1.72 1.1 2.4 1.22 2.2 2.9 4.1 4.93 5.63 1.96 1.47 4.9 2.18 5.9 4.1.76 1.47 1.02 3.48 1.64 5.06 1.63 4.13 3.78 7.99 5.93 11.88 1.73 3.14 3.62 5.89 3.81 9.47.07 1.25-1.12 8.74 1.78 6.46.43-.34 1.35-4.15 1.54-4.8.77-2.63 1.05-5.38 1.4-8.09.69-5.38.92-10.5.46-15.91Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "shortFlat": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M180.15 39.92c-2.76-2.82-5.96-5.21-9.08-7.61-.69-.53-1.39-1.05-2.06-1.6-.15-.12-1.72-1.24-1.9-1.66-.45-.99-.19-.22-.12-1.4.08-1.5 3.13-5.73.85-6.7-1-.43-2.8.7-3.75 1.08a59.56 59.56 0 0 1-5.73 1.9c.93-1.85 2.7-5.57-.63-4.58-2.6.78-5.03 2.77-7.64 3.7.86-1.4 4.32-5.8 1.2-6.05-.98-.07-3.8 1.75-4.86 2.14a55.81 55.81 0 0 1-9.63 2.51c-11.2 2.02-24.3 1.45-34.65 6.54-8 3.93-15.88 10.03-20.5 17.8-4.44 7.48-6.1 15.67-7.03 24.25-.69 6.3-.74 12.8-.42 19.12.1 2.07.34 11.61 3.34 8.72 1.5-1.44 1.49-7.25 1.87-9.22.75-3.91 1.47-7.85 2.72-11.64 2.2-6.68 4.81-13.8 10.3-18.4 3.53-2.94 6.01-6.93 9.39-9.9 1.51-1.35.36-1.2 2.8-1.03 1.63.12 3.28.16 4.92.2 3.8.1 7.6.08 11.4.1 7.64 0 15.25.12 22.89-.28 3.4-.18 6.8-.28 10.18-.6 1.9-.17 5.25-1.38 6.8-.45 1.43.84 2.91 3.61 3.94 4.75 2.41 2.67 5.3 4.72 8.12 6.92 5.9 4.57 8.87 10.33 10.66 17.48 1.79 7.13 1.29 13.75 3.5 20.76.38 1.24 1.4 3.36 2.67 1.46.24-.36.18-2.3.18-3.42 0-4.52 1.14-7.91 1.13-12.46-.06-13.83-.5-31.87-10.85-42.44Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "shortRound": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M167.3 35c-20.18-11.7-40.17-9.78-55.26-5.97-15.1 3.8-24.02 14.62-31.68 30.62a67.68 67.68 0 0 0-6.34 25.83c-.13 3.41.33 6.94 1.25 10.22.33 1.2 2.15 5.39 2.65 2 .17-1.12-.44-2.67-.5-3.86-.08-1.57 0-3.16.11-4.73.2-2.92.73-5.8 1.65-8.59 1.33-3.98 3.02-8.3 5.6-11.67 6.4-8.33 17.49-8.8 26.29-13.39-.77 1.4-3.7 3.68-2.7 5.27.71 1.1 3.38.76 4.65.72 3.35-.09 6.72-.67 10.02-1.14a71.5 71.5 0 0 0 15-4.1c4.02-1.5 8.61-2.88 11.63-6.07a68.67 68.67 0 0 0 17.4 13c5.62 2.88 14.68 4.32 18.11 10.16 4.07 6.91 2.2 15.4 3.44 22.9.47 2.85 1.54 2.79 2.13.24 1-4.33 1.47-8.83 1.15-13.28-.72-10.05-4.4-36.45-24.6-48.15Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "shortWaved": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M183.68 38.95c5.4-4.95 6.7-14.99 3.64-21.5-3.77-8-11.42-9-18.75-5.48-6.9 3.31-13.06 4.42-20.62 2.81-7.26-1.54-14.14-4.26-21.65-4.7-12.32-.74-24.3 3.83-32.7 13.05a35.75 35.75 0 0 0-4.11 5.8c-.98 1.63-2.08 3.38-2.5 5.26-.2.9.18 3.1-.27 3.83-.48.8-2.3 1.52-3.07 2.1a25.02 25.02 0 0 0-4.18 4.05c-2.66 3.22-4.13 6.59-5.37 10.57-4.1 13.25-4.45 29 .86 42 .7 1.74 2.9 5.36 4.18 1.64.26-.73-.33-3.19-.33-3.93 0-2.72 1.5-20.73 8.05-30.82 2.13-3.28 11.97-15.58 13.98-15.68 1.07 1.7 11.88 12.51 39.94 11.24 12.66-.58 22.4-6.27 24.74-8.73 1.03 5.53 13 13.81 14.82 17.22 5.26 9.85 6.43 30.3 8.44 30.27 2.01-.04 3.45-5.24 3.87-6.23 3.07-7.38 3.6-16.64 3.26-24.56-.42-10.2-4.63-21.23-12.23-28.22Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "sides": (components, colors) => `<path d="M70 97c0 4 .92 5.07 6 5 3.25-.05 3.44-6 3.65-12.59.14-4.37.29-9.03 1.35-12.41.62-4.43-1.82-3.17-3-1-3.96 4.78-8 15.34-8 21ZM196 97c0 4-.92 5.07-6 5-3.25-.05-3.44-6-3.65-12.59-.14-4.37-.29-9.03-1.35-12.41-.62-4.43 1.82-3.17 3-1 3.96 4.78 8 15.34 8 21Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "theCaesar": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M76 98c.35 1.49 1.67 1.22 2 0-.46-1.55 3.3-28.75 13-36 3.62-2.52 23-4.77 42.31-4.75 19.1 0 38.11 2.26 41.69 4.75 9.7 7.25 13.46 34.45 13 36 .33 1.22 1.65 1.49 2 0 .72-10.3 0-63.73-57-63-57 .73-57.72 52.7-57 63Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "theCaesarAndSidePart": (components, colors) => `<path d="M78 98c-.33 1.22-1.65 1.49-2 0-.72-10.3 0-62.27 57-63 57-.73 57.72 52.7 57 63-.35 1.49-1.67 1.22-2 0 .46-1.55-3.3-28.75-13-36-1.76-1.22-7.25-2.39-14.64-3.26L164 50l-6.98 8.38c-7.03-.7-15.36-1.13-23.7-1.13C114 57.23 94.61 59.48 91 62c-9.7 7.25-13.46 34.45-13 36Z" fill="${escape_exports.xml(`${colors.hair}`)}"/>`,
  "bigHair": (components, colors) => `<path d="M44.83 105.6c-.39-1.61-.77-3.24-1.13-4.92-1.95-9.23-2.95-20.22 2.89-39.67-6.9 22.99-4.25 34.15-1.76 44.58 1.23 5.2 2.43 10.2 2.37 16.4a15.44 15.44 0 0 0 0 0c.06-6.2-1.14-11.21-2.37-16.4ZM218.38 114.23c-.13.4-.16.8-.18 1.23l.18-1.23ZM218.05 116.81c-.11 1.09-.2 2.2-.23 3.35-29.04-10.76-54.94-29.62-70.32-51.55-12.1 15.62-31.96 23.04-51.63 30.4-17.38 6.5-34.62 12.94-46.2 24.94l1.09-1.5c11-14.6 28.76-21.88 46.7-29.24 18.82-7.71 37.82-15.5 49.39-31.9 15.4 24.1 41.81 44.65 71.16 55.63l.04-.12Z" fill="#000" fill-opacity=".16"/><path d="M32 280h1v-9a72 72 0 0 1 72-72h4v-18.39a56.03 56.03 0 0 1-31.8-45.74A12 12 0 0 1 67 123v-13c0-.8.08-1.57.22-2.32 9.12-5.82 19.65-10.13 30.24-14.48 18.81-7.71 37.82-15.5 49.39-31.9C158.8 80 177.4 96.6 198.87 108.2c.08.59.13 1.19.13 1.8v13a12 12 0 0 1-10.2 11.87A56.03 56.03 0 0 1 157 180.6V199h4a72 72 0 0 1 72 72v9c24.41-13.94 15.86-33.21 6.28-48.46a303.17 303.17 0 0 0-4.07-6.27c-3.48-5.25-6.45-9.74-7.2-12.97-.1-.46-.17-.9-.18-1.3-.14-4.62 3.14-7.84 7.16-11.78 6.22-6.08 14.18-13.89 14.01-31.22-.51-15.83-9.8-22.25-18.1-28-6.93-4.78-13.17-9.1-13.1-18-.01-1.82.08-3.54.25-5.19.11-.4.13-.83.15-1.25v-.1c.45-3.44 1.2-6.62 1.98-9.87 2.55-10.72 5.3-22.23-2.38-46.59-2.9-9.12-6.97-16.5-12.1-22.46-14.12-16.42-36.35-22.04-64.9-23.29-2.55-.11-5.15-.19-7.8-.23V13h-1c-43.08.77-73.16 9.54-84.8 46-7.67 24.36-4.93 35.87-2.37 46.6 1.23 5.19 2.43 10.2 2.37 16.4.03 3.75-1.06 6.7-2.85 9.2-2.46 3.43-6.23 6.04-10.24 8.8-8.3 5.75-17.6 12.17-18.1 28-.17 17.33 7.8 25.14 14.01 31.22 4.03 3.94 7.32 7.16 7.17 11.78-.08 3.26-3.4 8.27-7.38 14.27-10.54 15.9-25.7 38.8 2.2 54.73Z" fill="${escape_exports.xml(`${colors.hair}`)}"/><path fill-rule="evenodd" clip-rule="evenodd" d="M50.58 122.45c22.54-29.92 73.49-29.13 96.09-61.15 15.4 24.1 41.82 44.65 71.16 55.63.3-.86.08-1.85.37-2.7 2.15-14.14 9.14-24.37-.58-55.23-11.63-36.46-41.71-45.23-84.8-45.98l-1-.02c-43.08.77-73.16 9.54-84.8 46-11.38 36.16.17 44 0 63 .04 3.75-1.05 6.7-2.85 9.2.19.4 4.16-5.76 6.41-8.75Z" fill="#fff" fill-opacity=".2"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/facialHair.js
var facialHair = {
  "beardLight": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M101.43 98.17c-2.52 2.3-5.2 3.32-8.58 2.6-.58-.12-2.95-4.54-8.85-4.54-5.9 0-8.27 4.42-8.85 4.54-3.39.72-6.07-.3-8.58-2.6-4.72-4.31-8.65-10.26-6.3-16.75 1.24-3.38 3.24-7.1 6.88-8.17 3.89-1.15 9.35 0 13.26-.8A8.6 8.6 0 0 0 84 71a8.6 8.6 0 0 0 3.58 1.46c3.92.78 9.38-.36 13.27.79 3.64 1.07 5.64 4.79 6.87 8.17 2.36 6.49-1.57 12.44-6.3 16.75ZM140.08 26c-3.4 8.4-2.1 18.86-2.72 27.68-.52 7.16-2.02 17.9-8.39 22.53-3.25 2.37-9.18 6.35-13.43 5.24-2.93-.76-3.24-9.16-7.09-12.3a22.42 22.42 0 0 0-15.3-4.9c-2.37.11-7.17.09-9.15 1.91-1.98-1.82-6.78-1.8-9.15-1.9a22.42 22.42 0 0 0-15.3 4.89c-3.85 3.14-4.16 11.54-7.1 12.3-4.24 1.1-10.17-2.87-13.42-5.24-6.37-4.62-7.87-15.37-8.39-22.53-.63-8.82.69-19.28-2.72-27.68-1.66 0-.57 16.13-.57 16.13v20.36c.04 15.28 9.59 38.16 30.76 46.9C63.29 111.53 75 115 84 115c8.98.01 20.71-3.13 25.9-5.27 21.16-8.73 30.71-31.95 30.75-47.23V42.13s1.1-16.13-.57-16.13Z" fill="${escape_exports.xml(`${colors.facialHair}`)}"/>`,
  "beardMajestic": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M65.18 77.74c2.18-1.64 15.23-2.26 17.58-3.65.73-.43 1.3-.87 1.74-1.31.44.44 1 .88 1.74 1.3 2.35 1.4 15.4 2.02 17.58 3.66 2.21 1.65 3.82 5.44 3.65 8.41-.22 3.56-4.1 12.05-13.8 13.03a12.3 12.3 0 0 0-9.17-3.87 12.3 12.3 0 0 0-9.17 3.87c-9.7-.98-13.58-9.47-13.8-13.03-.17-2.97 1.44-6.76 3.65-8.41Zm.67 17.16h.01-.01ZM144.86 56c-.39-5.97-1.58-11.85-2.63-17.71-.28-1.58-1.8-12.29-2.5-12.29-.23 9.1-1.03 18.08-2.06 27.14-.3 2.7-.63 5.42-.84 8.13-.18 2.2.13 4.85-.4 6.98-.68 2.7-4.08 5.23-6.73 6.16-6.6 2.33-12.1-7.3-17.74-10.12-7.32-3.66-19.9-4.53-27.38.24-7.64-4.77-20.22-3.9-27.54-.24C51.4 67.11 45.9 76.74 39.3 74.41c-2.65-.93-6.05-3.46-6.73-6.16-.53-2.13-.22-4.78-.4-6.98-.2-2.71-.53-5.42-.84-8.13A308.31 308.31 0 0 1 29.27 26c-.7 0-2.22 10.7-2.5 12.29-1.05 5.86-2.24 11.74-2.63 17.7-.4 6.11.07 12.18 1.33 18.17.6 2.87 1.3 5.72 2.05 8.54.83 3.15-.32 9.27.05 12.5.7 6.1 3.58 18 6.81 23.25 1.56 2.54 3.4 4.12 5.44 6.17 1.96 1.97 2.78 5.02 4.9 7.12 3.96 3.9 9.73 6.23 15.65 6.8 5.3 4.51 14.14 7.46 24.13 7.46 10 0 18.82-2.95 24.14-7.46 5.91-.57 11.68-2.9 15.63-6.8 2.13-2.1 2.95-5.15 4.91-7.12 2.05-2.05 3.88-3.63 5.44-6.17 3.23-5.25 6.1-17.15 6.8-23.26.38-3.22-.77-9.34.06-12.49.75-2.82 1.45-5.67 2.05-8.54 1.25-6 1.73-12.06 1.33-18.17Z" fill="${escape_exports.xml(`${colors.facialHair}`)}"/>`,
  "beardMedium": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M84.5 93.84c-11.5.38-16.64 5.88-20.5.29-2.91-4.2-1.7-11.26 1.01-15.23 3.86-5.65 9.1-2.92 14.95-3.56 1.6-.18 3.2-.62 4.54-1.34 1.36.72 2.95 1.16 4.55 1.34 5.85.64 11.09-2.09 14.94 3.56 2.72 3.97 3.93 11.03 1.03 15.23-3.87 5.6-9-.67-20.52-.29ZM140.4 26c-3.43 14.07-5 28.43-7.5 42.67-.5 2.97-1.07 5.93-1.68 8.88-.12.62-.25 2.92-.86 3.21-1.85.89-5.62-3.81-6.63-4.87-2.53-2.67-5.05-5.36-8.13-7.45a43.7 43.7 0 0 0-21.13-7.32c-3.18-.25-7.47.18-10.47 2-3-1.82-7.3-2.25-10.47-2-7.6.6-14.9 3.1-21.13 7.32-3.09 2.09-5.6 4.78-8.13 7.45-1 1.06-4.78 5.76-6.63 4.87-.61-.29-.74-2.6-.86-3.21-.6-2.95-1.17-5.91-1.7-8.88-2.47-14.24-4.05-28.6-7.47-42.67-1 0-1.87 18.75-1.98 20.5-.46 7.09-.98 14.03-.3 21.13 1.16 12.24 2.37 27.6 11.7 36.96 8.44 8.45 20.68 10.22 31.24 15.55 1.36.69 3.16 1.54 5.1 2.23 2.06 1.56 6.12 2.63 10.8 2.63 4.91 0 9.15-1.17 11.08-2.86 1.7-.65 3.27-1.39 4.48-2 10.56-5.33 22.8-7.1 31.24-15.55 9.33-9.36 10.54-24.72 11.7-36.96.68-7.1.16-14.04-.3-21.14-.1-1.74-.98-20.5-1.98-20.5Z" fill="${escape_exports.xml(`${colors.facialHair}`)}"/>`,
  "moustacheFancy": (components, colors) => `<path d="M57.55 69.68a31.8 31.8 0 0 1 4.84-2.55C67.58 65.15 77.2 65.71 84 69.3c6.8-3.59 16.42-4.15 21.61-2.17 1.64.63 3.22 1.57 4.84 2.55 4.13 2.47 8.55 5.12 14.91 3.15.37-.12.73.22.62.58-1.37 4.5-9 7.6-11.6 7.7-6.2.24-11.75-2.26-17.13-4.69-4.44-2-8.77-3.96-13.25-4.26-4.48.3-8.8 2.26-13.25 4.26-5.38 2.43-10.92 4.93-17.13 4.69-2.6-.1-10.23-3.2-11.6-7.7-.11-.36.25-.7.62-.58 6.36 1.97 10.78-.68 14.9-3.15Z" fill="${escape_exports.xml(`${colors.facialHair}`)}"/>`,
  "moustacheMagnum": (components, colors) => `<path d="M84 66.94c-2.5-3.34-12.27-4.75-19.28-3.48-9.65 1.76-13.74 12.3-12.5 14.22.77 1.2 2.48.8 4.26.38.8-.2 1.64-.38 2.4-.43 1.48-.09 3.34.22 5.44.57 4.98.82 11.37 1.88 17.63-1.51A6.04 6.04 0 0 0 84 74.84a6.04 6.04 0 0 0 2.05 1.85c6.25 3.39 12.64 2.33 17.62 1.5 2.1-.34 3.96-.65 5.45-.56.76.05 1.59.24 2.4.43 1.78.41 3.49.81 4.26-.38 1.24-1.91-2.85-12.46-12.5-14.22-7.02-1.27-16.78.14-19.28 3.48Z" fill="${escape_exports.xml(`${colors.facialHair}`)}"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/accessories.js
var accessories = {
  "kurt": (components, colors) => `<path d="M71 58.11c-11.04 0-12.63-9.08-35.33-10.37C13 46.72 5.82 53.44 5.77 58.11c.04 4.3-1.12 15.45 13.6 28.52 14.77 15.51 29.9 10.25 35.32 5.18 5.45-2.34 11.65-23.35 16.3-23.33 4.67.02 10.87 21 16.32 23.33 5.42 5.07 20.55 10.33 35.33-5.18 14.71-13.07 13.55-24.23 13.58-28.52-.03-4.66-7.2-11.4-29.9-10.37C83.63 49.03 82.05 58.11 71 58.11Z" fill="#000" fill-opacity=".1"/><path d="M71 56.11c-11.04 0-12.63-9.08-35.33-10.37C13 44.72 5.82 51.44 5.77 56.11c.04 4.3-1.12 15.45 13.6 28.52 14.77 15.51 29.9 10.25 35.32 5.18 5.45-2.34 11.65-23.35 16.3-23.33 4.67.02 10.87 21 16.32 23.33 5.42 5.07 20.55 10.33 35.33-5.18 14.71-13.07 13.55-24.23 13.58-28.52-.03-4.66-7.2-11.4-29.9-10.37C83.63 47.03 82.05 56.11 71 56.11Z" fill="${escape_exports.xml(`${colors.accessories}`)}"/><path d="M32.95 50.93c14.27-.29 27.56 7.9 27.18 15.55-.22 5.05-2.93 22.83-19.02 23.33-16.1.5-24.81-17.79-24.46-25.92.2-3.51 2.05-12.67 16.3-12.96ZM109.05 50.93c-14.27-.29-27.56 7.9-27.18 15.55.22 5.05 2.93 22.83 19.02 23.33 16.1.5 24.81-17.79 24.46-25.92-.2-3.51-2.05-12.67-16.3-12.96Z" fill="#2F383B"/>`,
  "prescription01": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M111.71 53.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 93.8 87.34 88.53 81.53 79c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 68.5 63.01 74.7 60.4 79c-5.8 9.53-18.07 14.8-29.05 10.04-8.02-3.48-15.33-14.89-14.23-24.35l-.33.06-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.63 5.88-4.36 10.55-4.52l23.29-.46c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13l-.1-.01h-.06a47.08 47.08 0 0 1 .16 0c3.73.4 7.72.32 10.82-2.04 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-8.32 4.35l-.96.15c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="#000" fill-opacity=".1"/><path d="M111.71 51.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 91.8 87.34 86.53 81.53 77c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 66.5 63.01 72.7 60.4 77c-5.8 9.53-18.07 14.8-29.05 10.04-8.02-3.48-15.33-14.89-14.23-24.35-.11 0-.22.03-.33.05l-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.63 5.88-4.36 10.55-4.52l23.29-.46c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13l-.1-.01h-.06a47.08 47.08 0 0 1 .16 0c3.73.4 7.72.32 10.82-2.04 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-8.32 4.35l-.96.15c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="${escape_exports.xml(`${colors.accessories}`)}"/></g>`,
  "prescription02": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M38.5 52c-21.3 0-28.85 5.1-29.55 5.77A2.92 2.92 0 0 0 6 60.66v2.88c0 1.6 1.32 2.89 2.95 2.89 0 0 5.91 0 5.91 2.88 0 .44.07.65.19.68-.04.82-.05 1.66-.05 2.5C15 85.34 23.31 93 37.24 93H40c14.72 0 25-8.43 25-20.5 0-1.5-.04-3-.17-4.46l1.58-.77c.58-.29 1.21-.5 1.9-.64 1.85-.38 3.95-.22 5.99.28.73.18 1.26.35 1.5.45l1.38.55c-.14 1.5-.18 3.04-.18 4.6C77 85.34 85.31 93 99.24 93H102c14.72 0 25-8.43 25-20.5 0-1.54-.04-3.07-.18-4.56 1.74-1.51 6.22-1.51 6.22-1.51a2.92 2.92 0 0 0 2.96-2.89v-2.88c0-1.6-1.32-2.89-2.96-2.89-.69-.67-8.25-5.77-29.54-5.77H100.53c-1.8 0-3.44.07-4.97.2-9.54.54-14.68 2.15-19.92 4.7a17 17 0 0 1-4.56.87 17.01 17.01 0 0 1-4.81-.91l-.42-.2v-.01c-4.94-2.42-8.43-4.13-20.78-4.55a61.2 61.2 0 0 0-3.6-.1H38.5ZM19 73.5C19 64.84 19 58 38.39 58h3.22C61 58 61 64.84 61 73.5 61 82.63 52.36 89 40 89h-3.03C22.12 89 19 80.57 19 73.5Zm62 0c0-8.66 0-15.5 19.39-15.5h3.22C123 58 123 64.84 123 73.5c0 9.13-8.64 15.5-21 15.5h-3.03C84.12 89 81 80.57 81 73.5Z" fill="#000" fill-opacity=".1"/><path d="M38.5 50c-21.3 0-28.85 5.1-29.55 5.77A2.92 2.92 0 0 0 6 58.66v2.88c0 1.6 1.32 2.89 2.95 2.89 0 0 5.91 0 5.91 2.88 0 .44.07.65.19.68-.04.82-.05 1.66-.05 2.5C15 83.34 23.31 91 37.24 91H40c14.72 0 25-8.43 25-20.5 0-1.5-.04-3-.17-4.46l1.58-.77c.58-.29 1.21-.5 1.9-.64 1.85-.38 3.95-.22 5.99.28.73.18 1.26.35 1.5.45l1.38.55c-.14 1.5-.18 3.04-.18 4.6C77 83.34 85.31 91 99.24 91H102c14.72 0 25-8.43 25-20.5 0-1.54-.04-3.07-.18-4.56 1.74-1.51 6.22-1.51 6.22-1.51a2.92 2.92 0 0 0 2.96-2.89v-2.88c0-1.6-1.32-2.89-2.96-2.89-.69-.67-8.25-5.77-29.54-5.77H100.53c-1.8 0-3.44.07-4.97.2-9.54.54-14.68 2.15-19.92 4.7a17 17 0 0 1-4.56.87 17.01 17.01 0 0 1-4.81-.91l-.42-.2v-.01c-4.94-2.42-8.43-4.13-20.78-4.55a61.2 61.2 0 0 0-3.6-.1H38.5ZM19 71.5C19 62.84 19 56 38.39 56h3.22C61 56 61 62.84 61 71.5 61 80.63 52.36 87 40 87h-3.03C22.12 87 19 78.57 19 71.5Zm62 0c0-8.66 0-15.5 19.39-15.5h3.22C123 56 123 62.84 123 71.5c0 9.13-8.64 15.5-21 15.5h-3.03C84.12 87 81 78.57 81 71.5Z" fill="${escape_exports.xml(`${colors.accessories}`)}"/></g>`,
  "round": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M40 96a24 24 0 0 1-22.96-31H10.5a2.5 2.5 0 0 1 0-5h8c.23 0 .45.03.66.09a24 24 0 0 1 42.26 1.06A11.36 11.36 0 0 1 70.86 56c4.01 0 7.55 2.14 9.6 5.4a24 24 0 0 1 42.38-1.31c.2-.06.43-.1.66-.1h8a2.5 2.5 0 1 1 0 5h-6.54a24 24 0 1 1-46.6 2.83c-.08-4.37-3.45-7.83-7.5-7.83-3.73 0-6.89 2.94-7.42 6.83A24 24 0 0 1 40 96Zm0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm82-20a20 20 0 1 1-40 0 20 20 0 0 1 40 0Z" fill="#000" fill-opacity=".1"/><path d="M40 94a24 24 0 0 1-22.96-31H10.5a2.5 2.5 0 0 1 0-5h8c.23 0 .45.03.66.09a24 24 0 0 1 42.26 1.06A11.36 11.36 0 0 1 70.86 54c4.01 0 7.55 2.14 9.6 5.4a24 24 0 0 1 42.38-1.31c.2-.06.43-.1.66-.1h8a2.5 2.5 0 1 1 0 5h-6.54a24 24 0 1 1-46.6 2.84c-.08-4.37-3.45-7.83-7.5-7.83-3.73 0-6.89 2.94-7.42 6.83A24 24 0 0 1 40 94Zm0-4a20 20 0 1 0 0-40 20 20 0 0 0 0 40Zm82-20a20 20 0 1 1-40 0 20 20 0 0 1 40 0Z" fill="${escape_exports.xml(`${colors.accessories}`)}"/></g>`,
  "sunglasses": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd"><path d="M111.71 53.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 93.8 87.34 88.53 81.53 79c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 68.5 63.01 74.7 60.4 79c-5.8 9.53-18.07 14.8-29.05 10.04-8.02-3.48-15.33-14.89-14.23-24.35l-.33.06-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.63 5.88-4.36 10.55-4.52l23.29-.46c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13 3.73.4 7.72.3 10.82-2.05 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-9.28 4.5c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="#000" fill-opacity=".1"/><path d="M55.01 57.28c2.51.02 3.7.45 4.13 3.11.43 2.7 0 5.74-.5 8.4-.75 4.06-2.02 8.04-4.98 11a17.16 17.16 0 0 1-8.8 4.69c-.33.07-3.15.47-1.42.27-4.04.47-8.43.45-11.8-2.17-3.74-2.9-6.3-7.5-7.43-12.07-.66-2.66-2.04-9.06.49-11.2C27.6 56.85 55 57.28 55 57.28Z" fill="#000" fill-opacity=".7"/><path d="M55.01 57.28c2.51.02 3.7.45 4.13 3.11.43 2.7 0 5.74-.5 8.4-.75 4.06-2.02 8.04-4.98 11a17.16 17.16 0 0 1-8.8 4.69c-.33.07-3.15.47-1.42.27-4.04.47-8.43.45-11.8-2.17-3.74-2.9-6.3-7.5-7.43-12.07-.66-2.66-2.04-9.06.49-11.2C27.6 56.85 55 57.28 55 57.28Z" fill="url(#accessoriesSunglasses-a)" style="mix-blend-mode:screen"/><path d="M86.92 57.27c-2.51.03-3.7.45-4.13 3.12-.43 2.7 0 5.73.5 8.4.75 4.06 2.02 8.03 4.98 11a17.17 17.17 0 0 0 8.8 4.69c.33.07 3.15.47 1.42.26 4.04.47 8.43.45 11.8-2.16 3.74-2.9 6.3-7.5 7.43-12.07.66-2.67 2.04-9.07-.49-11.2-2.9-2.46-30.31-2.03-30.31-2.03Z" fill="#000" fill-opacity=".7"/><path d="M86.92 57.27c-2.51.03-3.7.45-4.13 3.12-.43 2.7 0 5.73.5 8.4.75 4.06 2.02 8.03 4.98 11a17.17 17.17 0 0 0 8.8 4.69c.33.07 3.15.47 1.42.26 4.04.47 8.43.45 11.8-2.16 3.74-2.9 6.3-7.5 7.43-12.07.66-2.67 2.04-9.07-.49-11.2-2.9-2.46-30.31-2.03-30.31-2.03Z" fill="url(#accessoriesSunglasses-b)" style="mix-blend-mode:screen"/><path d="M111.71 51.49c4.67.16 8 .88 10.55 4.52 3.01.15 6.25.37 8.98 1.63 3.39 1.56 3.9 5.1-.36 5.59-1.86.2-3.72-.12-5.55-.45l-.19-.03-.33-.06c1.1 9.46-6.21 20.87-14.23 24.35C99.6 91.8 87.34 86.53 81.53 77c-2.62-4.3-4.14-10.51-4.46-15.86-.42-.2-.83-.44-1.23-.67-.38-.22-.76-.44-1.12-.61-2-.98-5.34-1.1-7.5 0-.35.17-.7.37-1.05.58-.42.25-.86.5-1.3.72C64.53 66.5 63.01 72.7 60.4 77c-5.8 9.53-18.07 14.8-29.05 10.04-8.02-3.48-15.33-14.89-14.23-24.35-.11 0-.22.03-.33.05l-.2.03c-1.83.33-3.7.66-5.55.45-4.27-.5-3.74-4.03-.36-5.6 2.72-1.25 5.96-1.47 8.97-1.62 2.55-3.63 5.88-4.36 10.55-4.52l23.29-.46c5.19-.14 9.72 0 11.03 4.6a18.7 18.7 0 0 1 6.35-1.25c1.86 0 4.35.45 6.5 1.28 1.3-4.64 5.83-4.77 11.03-4.63l23.3.46Zm-24.03 6.78c-2.37.03-3.5.42-3.9 2.9-.4 2.5 0 5.31.46 7.78.73 3.77 1.92 7.46 4.71 10.22a16.24 16.24 0 0 0 8.32 4.34c.11.03.54.1.96.16.63.1 1.23.18.71.13 3.73.4 7.72.3 10.82-2.05 3.53-2.7 5.95-6.95 7.01-11.2.63-2.48 1.93-8.42-.46-10.4-2.73-2.28-28.63-1.88-28.63-1.88Zm-33.43 0c2.37.03 3.5.42 3.9 2.9.4 2.5 0 5.32-.46 7.78-.73 3.77-1.92 7.46-4.71 10.22a16.23 16.23 0 0 1-9.28 4.5c-.64.1-1.26.19-.68.13-3.73.4-7.74.32-10.85-2.05-3.53-2.69-5.95-6.95-7.01-11.2-.63-2.48-1.93-8.42.46-10.4 2.73-2.28 28.63-1.87 28.63-1.87Zm-10.93 25.5Z" fill="${escape_exports.xml(`${colors.accessories}`)}"/></g><defs><linearGradient id="accessoriesSunglasses-a" x1="28.56" y1="57.25" x2="28.56" y2="76.8" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-opacity=".5"/></linearGradient><linearGradient id="accessoriesSunglasses-b" x1="82.61" y1="57.25" x2="82.61" y2="84.98" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset=".71" stop-opacity=".5"/></linearGradient></defs>`,
  "wayfarers": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M39.25 52c-21.13 0-28.63 5.17-29.32 5.86A2.93 2.93 0 0 0 7 60.79v2.92a2.93 2.93 0 0 0 2.93 2.93s5.87 0 5.87 2.93c0 .2 0 .34.03.45-.03.82-.04 1.65-.04 2.48C15.78 85.34 24.07 93 37.96 93h2.75c14.68 0 24.93-8.43 24.93-20.5 0-1.44-.04-2.88-.16-4.28l1.45-.73c.57-.28 1.2-.5 1.87-.64 1.85-.39 3.93-.23 5.95.28.73.18 1.25.36 1.5.46l1.25.5a50.58 50.58 0 0 0-.16 4.4c0 12.84 8.29 20.5 22.17 20.5h2.75c14.68 0 24.93-8.43 24.93-20.5 0-.83 0-1.66-.04-2.48.02-.11.03-.26.03-.45 0-2.93 5.87-2.93 5.87-2.93 1.62 0 2.93-1.3 2.93-2.93V60.8a2.93 2.93 0 0 0-2.93-2.93c-.69-.69-8.2-5.86-29.32-5.86h-2.93c-1.83 0-3.52.07-5.08.21-9.38.56-14.46 2.19-19.63 4.76-.54.2-2.38.79-4.53.88a16.56 16.56 0 0 1-4.77-.92l-.42-.2v-.01c-4.9-2.45-8.36-4.18-20.55-4.61-1.15-.07-2.37-.1-3.66-.1h-2.93Zm-1.12 5.86h1.12c2.44 0 4.59.03 6.48.1 14.05.84 14.05 6.95 14.05 14.54 0 8.62-7.84 14.64-19.06 14.64h-2.75c-13.5 0-16.32-7.96-16.32-14.64 0-8 0-14.37 16.48-14.64Zm26.11 4.36.1.03-.07.03-.03-.06Zm14.52 0-.07.03.04.02c0-.02 0-.03.02-.05Zm16.7-4.12a125.22 125.22 0 0 1 9.4-.24c16.49.27 16.49 6.63 16.49 14.64 0 8.62-7.84 14.64-19.07 14.64h-2.75c-13.48 0-16.31-7.96-16.31-14.64 0-7.25 0-13.15 12.24-14.4Z" fill="#000" fill-opacity=".1"/><path d="M40.72 88.07c13.74 0 22-7.87 22-17.57s-1.3-17.57-20.54-17.57h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.25 17.57h2.75Z" fill="#000" fill-opacity=".7"/><path d="M40.72 88.07c13.74 0 22-7.87 22-17.57s-1.3-17.57-20.54-17.57h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.25 17.57h2.75Z" fill="url(#accessoriesWayfarers-a)" style="mix-blend-mode:screen"/><path d="M102.28 88.07c13.75 0 22-7.87 22-17.57S123 52.93 103.75 52.93h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.24 17.57h2.75Z" fill="#000" fill-opacity=".7"/><path d="M102.28 88.07c13.75 0 22-7.87 22-17.57S123 52.93 103.75 52.93h-2.93c-19.25 0-20.53 7.86-20.53 17.57 0 9.7 5.5 17.57 19.24 17.57h2.75Z" fill="url(#accessoriesWayfarers-b)" style="mix-blend-mode:screen"/><path fill-rule="evenodd" clip-rule="evenodd" d="M39.25 50c-21.13 0-28.63 5.17-29.32 5.86A2.93 2.93 0 0 0 7 58.79v2.92a2.93 2.93 0 0 0 2.93 2.93s5.87 0 5.87 2.93c0 .2 0 .34.03.45-.03.82-.04 1.65-.04 2.48C15.78 83.34 24.07 91 37.96 91h2.75c14.68 0 24.93-8.43 24.93-20.5 0-1.44-.04-2.88-.16-4.28l1.45-.73c.57-.28 1.2-.5 1.87-.64 1.85-.39 3.93-.23 5.95.28.73.18 1.25.36 1.5.46l1.25.5a50.58 50.58 0 0 0-.16 4.4c0 12.84 8.29 20.5 22.17 20.5h2.75c14.68 0 24.93-8.43 24.93-20.5 0-.83 0-1.66-.04-2.48.02-.11.03-.26.03-.45 0-2.93 5.87-2.93 5.87-2.93 1.62 0 2.93-1.3 2.93-2.93V58.8a2.93 2.93 0 0 0-2.93-2.93c-.69-.69-8.2-5.86-29.32-5.86h-2.93c-1.83 0-3.52.07-5.08.21-9.38.56-14.46 2.19-19.63 4.76-.54.2-2.38.79-4.53.88a16.56 16.56 0 0 1-4.77-.92l-.42-.2v-.01c-4.9-2.45-8.36-4.18-20.55-4.61-1.15-.07-2.37-.1-3.66-.1h-2.93Zm-1.12 5.86h1.12c2.44 0 4.59.03 6.48.1 14.05.84 14.05 6.95 14.05 14.54 0 8.62-7.84 14.64-19.06 14.64h-2.75c-13.5 0-16.32-7.96-16.32-14.64 0-8 0-14.37 16.48-14.64Zm26.11 4.36.1.03-.07.03-.03-.06Zm14.52 0-.07.03.04.02c0-.02 0-.03.02-.05Zm16.7-4.12a125.22 125.22 0 0 1 9.4-.24c16.49.27 16.49 6.63 16.49 14.64 0 8.62-7.84 14.64-19.07 14.64h-2.75c-13.48 0-16.31-7.96-16.31-14.64 0-7.25 0-13.15 12.24-14.4Z" fill="${escape_exports.xml(`${colors.accessories}`)}"/><defs><linearGradient id="accessoriesWayfarers-a" x1="80.29" y1="52.93" x2="80.29" y2="88.07" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset=".71" stop-opacity=".5"/></linearGradient><linearGradient id="accessoriesWayfarers-b" x1="80.29" y1="52.93" x2="80.29" y2="88.07" gradientUnits="userSpaceOnUse"><stop stop-color="#fff" stop-opacity=".5"/><stop offset=".71" stop-opacity=".5"/></linearGradient></defs>`,
  "eyepatch": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M94.4 4.78c-3.08-3.09-6.28 3.86-7.78 5.65-3.6 4.32-7.08 8.75-10.75 13.02-7.25 8.43-14.43 16.92-21.64 25.4-1.09 1.28-.96 1.41-2.4 1.54-.94.08-2.27-.4-3.26-.46-2.75-.16-5.46.3-8.13.9-5.35 1.17-11.01 3.1-15.65 6.07-1.22.78-2 1.7-3.32 1.94-1.15.21-2.68-.21-3.85-.32-2.08-.2-5.08-1.05-7.12-.6-2.6.55-3.58 3.7-.94 5.08 2.01 1.06 6.01.48 8.26.64 2.58.2 1.8.06 1.43 2.52-.53 3.54.35 7.49 1.84 10.72 3.46 7.5 13.03 15.46 21.77 14.72 7.28-.6 13.67-7.19 16.66-13.5a30.75 30.75 0 0 0 2.73-10.47c.19-2.27.08-4.67-.57-6.87a16.5 16.5 0 0 0-1.37-3.2c-.44-.79-2.4-2.64-2.52-3.44-.23-1.56 4.18-5.73 5.03-6.78 3.97-4.91 7.96-9.8 11.9-14.75 3.88-4.87 7.79-9.73 11.77-14.51 1.8-2.17 10.83-10.37 7.9-13.3" fill="#28354B"/>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/components/clothingGraphic.js
var clothingGraphic = {
  "bat": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M87.69 13.4c-1.4-6.43-6.21-10.15-12.5-11.58-2.53-.58-10.92-2.4-9.61 2.4.6 2.18.26 3.97-1.55 5.77-1.77 1.76-5.24 2.2-6.96-.01-1.47-1.9.43-4.72-.72-6.57-.44-.71-1.21-1.08-2.03-.73-1.14.5-.53 1.56-1.07 2.32-.85 1.2-1.24.83-2-.37-.49-.76-.02-1.58-1.26-1.9-1.43-.37-1.9.83-2.03 1.92-.08.69.32 1.8.34 2.5.03 1.35-.1 3.31-.73 4.52-1.12 2.14-2.7 1.45-4.38.1-1.98-1.6-2.56-3.39-2.18-5.82.46-2.92.3-5.71-3.28-3.89-5.02 2.57-9.68 7.14-12.59 11.92-2.44 4.02-4.36 8.9-2.2 13.48 2.21 4.67 5.86 8.69 10.97 9.88 1.32.3 5.09 1.81 6.34.55 1.95-1.96-2.54-3.78-3.43-4.97-1.26-1.7-2.34-4.92-.96-6.83 1.76-2.43 3.6-1.08 5.05.64 1.13 1.35 2.75 4.82 4.5 2.02 1.21-1.93 1.1-5.1 4.4-3.72 4.73 1.98 4.87 11.12 5.71 15.3.37 1.82 2.04 4.06 3.47 1.52.8-1.4.37-4.42.22-5.86-.3-2.99-1.08-5.92-.1-8.88.55-1.71 2-4.16 4.12-2.84 1.73 1.06 1 5.81 3.35 5.8 2.07 0 1.5-3.79 2.6-5.04 1.69-1.9 4.92-1 5.92 1.25 1.33 3.03-2.2 5.13-2.05 7.79.16 2.59 3.5 1.58 4.9.92 2.87-1.35 5.11-3.85 6.67-6.57 2.4-4.2 4.13-10.22 3.08-15.03" fill="#fff"/>`,
  "bear": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M76.74 17.44a16.78 16.78 0 0 1 2.15 7.86v.22c-.1 10.22-13.6 16.85-22.48 17.35-.63.03-1.26.05-1.89.05h-.01c-10.08 0-19.56-4.55-22.54-14.85a13.8 13.8 0 0 1-.52-3.81c0-3.36 1.12-6.83 3.15-9.4.24-.3.54-.6.83-.88.37-.36.74-.72 1-1.1.47-.71.64-.7.67-.75.02-.04-.09-.15-.18-.98-.06-.5-.22-.93-.38-1.37-.22-.58-.43-1.17-.41-1.88.05-2.4 1.76-5.08 4.05-5.95a5.95 5.95 0 0 1 3.96.08c.6.2 1.18.67 1.75 1.13.58.46 1.13.9 1.64 1.04.97.24 2.83-.14 4.47-.47.96-.2 1.84-.38 2.44-.41a34 34 0 0 1 4.2-.03c.27.01.72.11 1.2.23.84.19 1.8.4 2.23.27.45-.13.92-.5 1.4-.9.48-.4.98-.81 1.5-1a8.6 8.6 0 0 1 3.2-.45c2.34.13 5 1.18 6 3.42.8 1.8.24 3.3-.34 4.87-.2.53-.4 1.06-.55 1.62-.2.7-.31.85-.3.96.03.11.2.2.55.82.07.13.34.44.6.74l.42.48c.8.97 1.57 1.99 2.19 3.08ZM58.3 36.97c3.07 2.96 6.67-1.57 7.15-4.38.84-10.07-15.07-8.75-19.23-3-2.1 2.89-.61 6.8 2.58 8.2 1.4.61 2.58.9 3.58-.05.8-.76 1.03-3.52.5-4.27-.29-.39-.67-.5-1.05-.6-.55-.16-1.1-.32-1.35-1.3-.57-2.16 1.8-2.5 3.3-2.61l.97-.1c1.69-.2 4.05-.48 5.03.5 1.3 1.33.26 2.35-.83 3.42-1.21 1.18-2.47 2.42-.65 4.18Zm-9.58-20.46c-.59-.98-1.75-1.22-2.73-.78-1.82.83-.96 3.52.75 3.75 1.62.21 2.78-1.6 1.98-2.96Zm15.23.88c-.86 3-5.64-.38-2.94-2.3 1.55-1.09 3.45.5 2.94 2.3Z" fill="#fff"/>`,
  "cumbia": (components, colors) => `<path d="M10.27 30.13c3.28-.56 5.73-3.55 5.18-6.79-.46-2.72-1.74-.34-2.97.86-1.34 1.3-2.45 2.57-4.54 2.05-3.6-.9-4.86-5.4-3.84-8.48a5.94 5.94 0 0 1 3.48-3.7c1.85-.74 3.2.1 4.75 1.1.28.19 1.73 1.37 2 1.25.45-.21.1-2.43.04-2.73a4.8 4.8 0 0 0-2.62-3.24c-3.34-1.64-7.52.48-9.64 3.05-4.88 5.9-.91 18.17 8.17 16.62ZM20.28 11.04Zm-1.6 12.86c.51 3.48 2.99 6.5 6.96 6.36 4.28-.16 6.06-4.1 7-7.49.97-3.4 2.06-7.68.67-11.09-.42-1.03-.68-2.38-1.71-1.53-1.26 1.03-1.41 4.04-1.52 5.44-.2 2.65-.78 9.97-4.1 10.95-4.18 1.22-4.05-5.85-4-7.98.03-1.9.24-3.73-.35-5.58-.31-.99-.59-2.44-1.53-1.64-1.29 1.11-1.45 3.83-1.54 5.33-.14 2.4-.21 4.84.13 7.23ZM37.78 26.75c.2.4.63 1.4 1.02 1.67.95.67-.05.71.8-.05.82-.73 1.13-2.72 1.26-3.67.38-2.96-.12-6.11-.09-9.1 1.02 2.22 1.58 4.59 2.39 6.88.55 1.58 1.4 4.8 3.65 4.75 2.45-.05 2.58-3.14 2.9-4.82.47-2.37.97-4.72 1.68-7.04.1 3.91-1.43 11 2.1 13.92.02.02 1.44-4.15 1.47-4.4.23-1.7.09-3.45.11-5.15.05-3.6.72-8-.3-11.5-.33-1.14-.97-2.27-2.4-2.24-1.83.04-2.24 1.99-2.7 3.3a114.02 114.02 0 0 0-3.36 10.94c-.55-1.68-5.34-16.42-8.8-10.9-.55.89-.3 2.22-.33 3.2-.04 1.87-.15 3.75-.2 5.63-.06 2.84-.4 5.9.81 8.58ZM62.02 13.71c.72-.14 5.74-1.73 5.52-.14-.22 1.68-4.63 3.31-5.81 3.88 0-1.2-.24-2.44-.65-3.57l.94-.17Zm5.72-.64c-.03-.04 0 0 0 0Zm.12 8.34c2.27 1.22 1.29 3.42-.43 4.6-.65.47-6.53 1.82-6.51 1.68.18-1.69-.26-5.01 1-6.01 1.3-1.04 4.5-.81 5.94-.26Zm.06-8s.01.03 0 0Zm-9.98 16.85c.23.55.86 1.91 1.57 1.94.86.04.8-1.04.93-1.7 3.44 1.72 8.5-.05 10.9-3.03a6.15 6.15 0 0 0-2.57-9.75c2.1-1.69 4.02-5.4 1.25-7.49a7.68 7.68 0 0 0-8.12-.3c-2.74 1.72-3.85 5.83-4.1 9-.25 3.39-1.15 8.13.14 11.33ZM76.05 21.87c.07 2.07-.15 4.29.33 6.3.17.72.44 1.52.76 2.17.61 1.21.31 1.05 1.03.36 2.18-2.08 1.21-8.58 1.16-11.25-.04-2.08.06-4.28-.51-6.28-.16-.56-1.12-3.35-1.66-3.29-.81.1-1.37 3.93-1.42 4.7-.15 2.4.23 4.9.31 7.3ZM94.75 22.43c-1.58-.14-3.62.07-5.12.56.7-1.92 1.48-4.06 2.24-5.8.47-1.08.97-2.16 1.5-3.23 1.27 2.68 1.98 5.82 2.82 8.66-.47-.08-.96-.15-1.44-.19Zm5.44.72c-.73-2.77-1.58-5.53-2.43-8.27-.54-1.75-1.13-3.92-2.6-5.17-4.16-3.56-6.52 5.85-7.55 8.23-.98 2.3-2.21 4.63-2.85 7.05a9.48 9.48 0 0 0-.24 3.64c.2 1.52 0 1.74 1.3.91 1-.63 1.4-1.79 2.22-2.56.14-.14.22-.68.4-.76.18-.1 1.5.25 1.8.27 2.18.16 4.72-.2 6.72-1.04.2.84 1.63 5.96 2.98 5.77.6-.08.96-3.06 1-3.54.08-1.55-.36-3.05-.75-4.54ZM109.3 9.43c-.26-1.2-.81-3.29-1.84-2.11-1.4 1.6-1.1 5.17-1.11 7.18-.02 1.45-1.55 12.06.56 11.88-.1 0 .84-1.67.98-1.92a12.37 12.37 0 0 0 1.32-4.72c.37-3.24.79-7.12.1-10.3ZM108.16 30.3c-2.23-2.73-6.3.66-5.04 3.38 1.73 3.7 7.33-.57 5.04-3.38ZM94.9 34.54c-2.9-.73-6.3-.24-9.25-.15-3.08.1-6.16.27-9.24.36-6.57.2-13.13.1-19.7.04-12.44-.1-24.92.69-37.37.17-2.67-.12-5.54-.72-8.2-.21-.72.14-3 .54-3.32 1.26-.34.76 1.4 1.56 2.33 1.96 2.42 1.04 5.33.86 7.9.96 2.93.12 5.89.06 8.82-.01 12.07-.3 24.09-1.34 36.18-1.17 6.97.1 13.93.04 20.9 0 3.33-.01 7 .53 10.28-.06.55-.1 3.76-.85 3.8-1.83.03-.46-2.8-1.23-3.12-1.32Z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/>`,
  "deer": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M71.76 15.26c1.6-.18 4.79-.55 5.2.98.3 1.09-1.16 2.07-2.26 2.8-.34.24-.64.44-.85.61l-.16.14a25.73 25.73 0 0 1-4.66 3.41 12.85 12.85 0 0 1-2.93 1.08c-.28.07-.43.11-.55.2-.15.11-.23.3-.43.74l-.03.08c-.45 1-.73 2.18-1 3.36-.23 1.02-.47 2.04-.81 2.95-1.7 4.46-5.77 14.8-12.27 10.26-1.7-1.2-2.78-3.3-3.75-5.24-.2-.41-.4-.81-.61-1.2a43.46 43.46 0 0 1-3.38-8.24c-.1-.37-.16-.66-.2-.92-.14-.68-.2-1.04-.93-1.5-.37-.23-.9-.36-1.4-.49-.36-.09-.7-.17-.99-.29a17.05 17.05 0 0 1-4.08-2.44c-1.24-.97-6.11-4.95-2.14-5.7 1.8-.33 4.16-.2 6-.11h.07c2.03.1 4.07.57 5.88 1.54h.01c.9.48 1.22.66 1.54.65.2 0 .38-.08.68-.18.24-.1.55-.2.98-.33-3.32-1.12-6.65-3-8.89-5.78-1.2-1.5-4-7.65-1.9-9.06 1.8-1.2 2.42 2 2.88 4.4.2.97.36 1.81.56 2.17 1.24 2.13 3.28 3.23 5.32 4.33.58.32 1.16.63 1.72.96a12.47 12.47 0 0 1-3.67-5.86l-.08-.3c-.31-1.14-.9-3.28-.44-4.19.52-1.04 1.76-1.1 2.45-.22.41.53.48 1.52.54 2.4a8.63 8.63 0 0 0 2.11 5.23 11.17 11.17 0 0 0 5.68 3.73c5.12 1.26 6.91-4.1 7.6-8.25.04-.24.06-.52.08-.81.05-.93.11-2 .97-2.36 1.37-.6 1.9.74 1.94 1.78.09 2.31-1.06 5.85-2.17 7.84 2.8-1.73 5-4.48 5.9-7.69.1-.37.15-.9.2-1.46.1-1.2.22-2.58.98-3.04 1.54-.92 2.02.92 1.97 2.02-.32 6.52-5.3 12.44-11.49 14.07l.55.28c.95.5.98.53 2.3-.25.9-.53 1.86-.93 2.84-1.24 1.47-.45 3.05-.68 4.58-.81l.54-.06Zm-12.9 9.36c-.07 3.27-3.24 3.04-2.82.1.32-2.32 3.68-2.24 2.82-.1Zm-1.93 9.02c-.5 1.56-4.33 2.12-3.9-.17.37-1.95 4.56-2.03 3.9.17ZM51.7 27c-2.82 0-1.9-4.87 1-3.86 2.27.8 1.33 3.86-1 3.86Z" fill="#fff"/>`,
  "diamond": (components, colors) => `<path d="M63.78 29.74a320.2 320.2 0 0 1-7.34 7.82c1-3.56 1.74-7.58 3.2-10.96.43-.96.1-1.08.94-1.5.6-.3 2.07.05 2.8.07 1.56.04 3.15.19 4.7-.05-1.45 1.52-2.9 3.05-4.3 4.62ZM48.52 33.8c-2.7-3.28-5.39-6.57-8.66-9.32 1.29.14 2.7-.04 3.96.2 1.94.4 1.83 1 2.82 2.97a99.3 99.3 0 0 1 4.05 8.82c-.71-.9-1.45-1.79-2.17-2.67Zm-9.1-12.53c.96-1.58 1.14-2.98 2.92-3.78 2.06-.94 5.3-.74 7.49-.92-1.37 1.52-3.04 3.1-3.6 5.12a9.54 9.54 0 0 0-3.68-4.17c-.21-.1 1.16 4.55 1.34 4.87-1.72-.1-3.52-.4-5.22-.09l.75-1.03Zm16.4-5.01c1.6.03 3.17.16 4.74.42-1.26 1.67-1.64 3.63-2.1 5.63-.47-2.26-2.2-4.36-3.73-6.05h1.1Zm-3.5 1.07c.24-.16 4.46 5.09 5.07 5.56-3.31 0-6.62-.17-9.92-.32 1.9-1.48 3.02-3.68 4.86-5.24Zm2.7 17.1c-.4 1.35-.78 2.7-1.22 4.05-1.56-4.74-3.86-9.2-6.01-13.68 3.34.09 6.68.21 10.02.26-.82 3.16-1.87 6.24-2.8 9.37Zm7.22-17.46a36.24 36.24 0 0 1 3.87 4.44l1.26 1.65c-2.23-.23-4.54-.13-6.78-.15.5-2.06 1.1-4.01.58-6.13l1.07.19Zm7.65 5.61c-2.16-2.67-4.37-7.26-7.86-8.07-3.48-.8-7.55-.45-11.08-.22-3.07.2-8.08-.2-10.8 1.59-1.39.92-2.42 3-2.9 4.55-.44 1.4.27 2.28-1.25 2.28-.1 0 2.5 3.68 2.81 3.97a78.06 78.06 0 0 1 6.46 6.6c2.83 3.37 5.4 8.33 9.14 9.73-.68-.34 2.8-2.97 3.21-3.42 2.12-2.29 4.25-4.55 6.38-6.83 1.94-2.07 4.05-4.03 5.93-6.15 1.43-1.62 1.44-2.17-.04-4.02ZM36 14c.04.01-.9-2.05-.83-1.92a6.35 6.35 0 0 0-1.73-1.73C32.7 9.85 29.13 9.25 29 9c1.5 2.65 4.17 4.13 7 5ZM51.36 9.2c.17.65.43 1.25.79 1.8.07.08.86-4.18.85-4.55C52.99 5.83 52.6 2 51.8 2c-1.33 0-.67 6.47-.45 7.2ZM77.97 7c-3 0-9.68 5.85-8.9 9a3.35 3.35 0 0 0 .4-.33c1.27-1.02 2.72-2.02 4-3.2.9-.85 1.98-1.61 2.8-2.54.1-.1 2-2.93 1.7-2.93Z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/>`,
  "hola": (components, colors) => `<g fill="#fff"><path d="M63.84 17c-.29.65-.56 1.3-.82 1.95L63 19l2-.16A18.7 18.7 0 0 0 63.84 17ZM53.22 17.3c.2-.06.42-.13.7-.3.15.42.26 3.29-1.35 2.98-.92-.18-.5-1.77-.25-2.1.34-.41.59-.49.9-.58Z"/><path fill-rule="evenodd" clip-rule="evenodd" d="M74.64 16.95C73.46 11.68 70.6 7.97 66.18 5c-3.35-2.25-6.5-2.23-10.46-1.75-3.25.4-6.35 1.3-9.2 2.94-5.04 2.89-7.92 6.74-8.6 12.54-.28 2.33-.33 5.1.5 7.32.48 1.3 1.34 2.34 2.25 3.36.15.17.5.47.86.79.6.52 1.26 1.1 1.28 1.29.12.86-2.2 3.4-2.89 4.15-.05.06-.1.1-.12.14-.23.25-.73.6-1.3.99-1.02.7-2.25 1.55-2.43 2.2-.83 2.93 5.83 1.89 7.45 1.63 1.55-.24 3.11-.54 4.62-.98.7-.2 1.4-.44 2.07-.72.56-.23 1.17-.7 1.78-1.16.7-.52 1.38-1.03 1.97-1.2a5.9 5.9 0 0 1 2.1.02c.6.07 1.2.14 1.7.09 1.5-.15 3.03-.45 4.5-.87a19 19 0 0 0 7.05-3.84c4.42-3.76 6.6-9.24 5.33-15Zm-5.13 6.99c-.62.16-1.36-1.24-1.08-1.72.77-1.34 2.16 1.42 1.08 1.72Zm-2.22-9.38c-.27 1.1.12 2.95.4 4.05.07.36.42.47.73.43.55-.08.45-.56.36-.97-.03-.16-.06-.3-.06-.4.04-.75.11-2.64-.17-3.32-.51-1.26-.97-1.02-1.27.21Zm-.65 8.33c-.58.34-.86-.29-1.05-.74-.06-.13-.1-.24-.16-.32a1.39 1.39 0 0 1-.29-.72c-.01-.18-.02-.22-.58-.39-1.77-.52-1.8.7-1.84 1.94-.02.72-.04 1.45-.4 1.84-1.78 1.91-.58-3.68-.37-4.68l.03-.1.12-.7c.34-1.96 1.02-5.86 2.67-3.11.49.8 2.7 6.49 1.87 6.98Zm-10.37-.95c.6.6 3.7.22 4.02-.34.68-1.18-1.85-.85-2.78-.73l-.29.03c.04-.75.13-1.5.21-2.27.12-1.05.24-2.1.23-3.15v-.17c.02-.62.06-1.94-.96-1.21-.34.25-.33 1.19-.33 1.82v.46c-.02.23-.08.6-.15 1.02-.24 1.51-.61 3.87.04 4.54Zm-.77-2.78c-1.43 5.73-6.98 2.64-4.5-1.71.46-.8.83-.98 1.41-1.26.22-.1.46-.22.75-.4.05-.03.06-.14.06-.28 0-.27.02-.65.43-.64 1.76.03 2.18 2.93 1.85 4.28Zm-7 .83c-.04.87-.14 3.3.97 3 .76-.21.54-9.98-.33-9.98-.92 0-.75 1.78-.6 3.33.1 1 .19 1.91-.04 2.17-.1.12-.51.1-.84.06a2.1 2.1 0 0 0-.4 0c-1.15.2-1.9.08-2.25-.61-.1-.2-.1-.7-.1-1.29-.01-1.33-.02-2.96-1.15-1.5l.03 2.2c.34.72.21 1.16-.38 1.32-.02.3.16.58.28.77.07.1.12.19.12.24.02.14 0 .38-.01.66-.08 1.26-.2 3.54.92 3.4.71-.08.49-2.28.37-3.42l-.05-.6.91.03c.86.04 1.73.08 2.56-.03V20Z"/></g>`,
  "pizza": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd" fill="#fff"><path d="M65.93 25.4c-4.08 1.37-8.55 3.31-10.9 7.06-1.85 2.95-1.97-.45-4.55.6-2.5 1.02-1.82 5.22-2.73 7.3-.71-1.2-1.05-2.52-1.94-3.6a6.6 6.6 0 0 0 1.81-1.73c.16-.32-4.79.35-5.07.43-1.41.4-2.74.77-4.09 1.43a78.83 78.83 0 0 0 1.96-2.99c.21-.68.58-.68 1.11 0 .75.03 1.18.35 1.96.17 2.92-.66 3.85-6.22.25-5.98a93.38 93.38 0 0 0 4.26-8.8c.5 4.28 6.08 2.8 7.72.52 2.14-3-.6-8.66-4.49-8.11.58-1.38 1.17-2.77 1.65-4.18 1.1 1.6 3 2.39 4.54 3.45a18.2 18.2 0 0 1 4.16 4.01c2.4 3.14 3.8 7 6.22 10.05-.64.04-1.26.16-1.87.36Zm9-4.4c-.62-5.75-5.14-11.6-9.43-15.17-2.55-2.13-10.24-7.39-13.3-3.34 2.46 1.07 5.2 1.33 7.64 2.49 3.32 1.57 5.92 4.16 8.17 7.05 3.14 4.05 7.97 12.28.48 14.39.5-.34.8-.71 1.21-1.31-1-.23-.6-1.88-.95-2.95-.41-1.25-1.21-2.47-1.89-3.59a56.62 56.62 0 0 0-3.5-5.17A23.46 23.46 0 0 0 57.4 8c-.9-.58-1.77-1.1-2.81-1.4-1.35-.4-.91.08-1.28-1.15-.23-.78-.02-1.77-.25-2.6-1.97 1.66-2.6 4.06-3.5 6.39-1.01 2.68-2.12 5.33-3.2 8-2.63 6.53-6.02 12.39-9.88 18.24-.67 1.02-2.17 2.95-1.1 4.17.97 1.1 2.34.3 3.4-.13 1.43-.6 3.38-2.17 4.93-1.35 2 1.05 1.05 4.98 4.21 4.83 3.12-.16 2.53-5.28 3.53-7.32 2.31 1.68 4.18.64 5.58-1.61 1.63-2.61 3.77-3.66 6.51-4.94 1.12-.52 3.04-1.94 4.2-2.12.97-.13 1.9.9 3.19.85 3.1-.11 4.39-4.25 4.02-6.85Z"/><path d="M53.54 23.83c-2.43-.44-5.8-.07-6.03 3.16-.14 1.97 1.4 3.85 3.08 4.66 5.12 2.5 9.1-6.69 2.95-7.82ZM63.34 20.16c-.65-.7-1.7-1.24-2.68-1 .31-.2.57-.6.87-.83-3.16-2.29-5.14 3.47-3.35 5.74 2.72 3.44 8.04-.76 5.16-3.91Z"/></g>`,
  "resist": (components, colors) => `<path d="M105.56 30.07c-3.08-.66-5.19 3.54-1.9 4.79 2.8 1.07 4.84-4.15 1.9-4.79ZM104.2 27c3.65 0 2.3-5.98 2.31-7.97.02-2.13 1.55-8.6-.89-9.73-4.21-1.97-3.06 6.33-3.03 7.97.03 1.82.16 3.72-.23 5.5-.35 1.59-1.13 4.23 1.83 4.23ZM99.06 10.97c-1.08-.62-2.8-.32-3.99-.37-1.35-.06-2.69-.2-4.03-.3-2.18-.15-4.96-.56-7.12-.06-1.23.28-2.34 1.22-1.76 2.6.62 1.5 2.3 1.11 3.58 1.04.58-.04 2.03-.3 2.6-.1 1 .36.58-.1.8 1.08.35 1.8.14 4 .13 5.83-.03 3.18-.04 6.37-.1 9.54-.03 1.23-.45 2.63.75 3.45 1 .68 2.22.22 2.74-.8.5-1 .02-3.06-.03-4.2-.07-1.34-.14-2.67-.1-4.02.1-3.58.28-7.16.37-10.75.94.05 1.92.02 2.85.15.69.1 1.67.53 2.33.5 1.9-.1 2.69-2.59.98-3.59ZM70.72 17.81c-.08-.64-.01-.05 0 0Zm-.03-.27s0 .02 0 0Zm1.43-3.11c3.41-3.98 4.58 4.34 7.24 4 4.26-.57-.94-6.96-2.67-7.78-3.51-1.68-6.6.08-8.27 3.26-2.1 4-.77 6.71 3.26 8.45 1.47.63 7.03 2.52 5.53 4.96-.76 1.22-3.53 1.32-4.7 1.08-2.35-.48-1.98-2.08-3.13-3.57-1.03-1.34-3.03-.95-3.34.78-.25 1.36 1.17 3.42 2.11 4.38 2.24 2.26 6.04 2.44 8.89 1.4 4.39-1.57 4.92-5.7 1.8-8.9-1.74-1.8-3.93-2.35-6.1-3.42-2.65-1.3-2.16-2.4-.61-4.65ZM61.75 29.57c-.56-4.83-.7-9.72-.78-14.57-.03-1.55.7-5.2-1.45-5.86-2.92-.89-2.53 2.7-2.47 4.16.2 4.92.84 9.8 1.07 14.7.07 1.56-.43 4.57 1.83 4.95 2.75.45 2-2.09 1.8-3.38ZM52.47 13.68a6.74 6.74 0 0 0-10.09-.76c-2.07 2.06-3.38 6.92-1.41 9.4 2.12 2.7 7.35.34 8.72 3.39 1.68 3.74-2.73 5.15-5.07 2.66-.85-.9-.66-2.45-1.9-3-1.77-.8-2.87.92-2.52 2.35.85 3.5 4.65 5.4 8.1 5.27 3.77-.12 5.4-2.97 5.16-6.4-.33-4.74-3.98-5.48-7.99-6-1.7-.22-1.92-.2-1.81-1.95.13-2.12 1.37-4.57 3.99-4.07 2.1.4 2.3 3.57 4.45 3.72 3.5.24 1.26-3.43.37-4.62ZM34.72 29.44c-1.34.32-2.96.1-4.33.07-1.05-.02-4.57.43-5.26-.3-.76-.8-.5-3.24-.54-4.28-.05-1.45-.4-1.67.87-2 .75-.2 1.9-.1 2.68-.13 1.52-.07 3.47.2 4.93-.09 1.37-.28 2.5-1.75 1.25-3-.88-.9-2.54-.42-3.63-.4-2.03.06-4.07.05-6.1.08 0-1.57-.06-3.14.07-4.7 2.84.12 5.8.86 8.66.73 1.44-.07 3.04-1 2.3-2.73-.62-1.5-2.52-1.3-3.84-1.35-1.66-.07-3.32-.11-4.97-.17-1.22-.04-3-.44-4.16.1-2.36 1.14-1.55 5.02-1.48 7.12.08 2.67.08 5.27.17 7.96.09 2.43-.03 5.64 2.86 6.32 2.89.69 6.24.03 9.19.18 1.2.05 2.86.4 3.45-1 .57-1.35-.73-2.77-2.14-2.42ZM11.41 14.88c2.32.5 2.94 3.01 3.02 5.15.05 1.46.18 1.37-1 1.74-1.2.37-2.92.17-4.14.12-2.54-.11-2.24-.28-2.29-2.95 0-.62-.47-3.5-.1-3.91.47-.53 3.83-.2 4.51-.15Zm5.08 14.84a51.7 51.7 0 0 0-4.05-4.29c2.16-.06 4.5-.47 5.27-2.82.65-1.98.09-5-.67-6.87a7.05 7.05 0 0 0-5.63-4.48c-1.8-.25-6.28-.67-7.62.71-1.46 1.51-.45 5.65-.36 7.5.16 3.27.05 6.52-.15 9.79-.07 1.05-.59 2.78-.05 3.73a1.98 1.98 0 0 0 2.97.54c.99-.85.53-1.88.47-2.96-.1-1.68.08-3.4.18-5.08 1.6 1.3 3.25 2.59 4.76 4.02 1.49 1.41 2.56 3.2 3.99 4.62 1 1.01 2.82 1.43 3.33-.45.44-1.6-1.57-2.95-2.45-3.97Z" fill-rule="evenodd" clip-rule="evenodd" fill="#fff"/>`,
  "skull": (components, colors) => `<path fill-rule="evenodd" clip-rule="evenodd" d="M65.28 19.93c-.3 2.78-5.7 4.27-7.67 2.45-.91-.84-.93-2.58-1.13-3.7a48.65 48.65 0 0 1-.75-6.43c-.06-1.32-.4-2.38 1.04-2.58.89-.12 1.8.47 2.52.93 2.44 1.58 6.32 6.14 5.98 9.33Zm-12.4-5.85c.29 2.82 1.32 7.73-.93 10.1-2.02 2.12-6.16.02-6.79-2.47-.77-3.1 2.28-6.78 4.15-8.87.58-.64 1.85-2.41 2.84-1.82.39.23.7 2.61.74 3.06Zm1.44 11.03c.65-1.53 6.91 3.01 3.95 5.18-.48.35-4.16 1.46-4.86.94-1.48-1.1.43-4.97.91-6.12Zm19-7.58C72.89 2.05 53.08-2.31 42.49 6.5 38.43 9.88 36.1 14 36 19.28c-.1 4.47.62 8.7 4.03 11.77 1.48 1.33 2.46 2.15 3.25 3.97.82 1.9 1.2 4.33 2.74 5.83.85.83 2.09 1.5 3.26.96 2.17-.98 1.47-3.98 2.13-5.65 2.04 4.97 7.21 6.55 8.15.25 1.03 1.82 3.72 4.2 5.7 2.2.81-.8.93-2.14 1.07-3.22.25-1.9-.18-2.66 1.36-3.97 4.03-3.45 5.77-8.67 5.63-13.9Z" fill="#fff"/>`,
  "skullOutline": (components, colors) => `<g fill-rule="evenodd" clip-rule="evenodd" fill="#fff"><path d="M72.34 18.04a8.66 8.66 0 0 1-1 2.99c-.71 1.21-2.02 1.7-2.78 2.82-1.19 1.75.4 4.27-.78 5.83-1.27 1.68-4.14.67-5.26 2.9-1.18 2.35.53 5.49-.95 7.83-1.47-.37-1.92-5.9-4.19-2.37-1.45 2.25-.47 3.47-2.64.23-.76-1.12-1.62-2.13-3.1-1.39-1.04.52-1.26 2.84-2.21 3.09-2.33.6-2.42-5.62-3.21-6.8a2.8 2.8 0 0 0-1.62-1.28c-.67-.2-1.87.22-2.43-.1-1.04-.59-1.18-2.55-1.22-3.6-.07-1.93.58-3.91.04-5.83-.45-1.61-1.89-2.6-2.36-4.18C36.1 9.64 47.68 4.89 54.3 4.63c7.74-.3 19.04 4.22 18.04 13.4Zm1.83-5.32c-1.45-3.44-4.65-6.17-7.91-8-1.59-.9-3.3-1.56-5.09-1.95-1.64-.36-3.55-.12-5.12-.58C54.73 1.81 53.9.95 52.35 1c-2.11.07-4.31 1.17-6.16 2.09-3.66 1.8-6.77 4.15-8.73 7.74-2.1 3.86-1.9 7.36.35 10.95 2.15 3.44-.97 8.27 2.17 11.53 1.32 1.37 2.62.37 3.87 1.03.96.5.92 3.46 1.19 4.33 1.2 3.9 5.51 5.4 7.5 1.2.94 2.34 4.66 4.75 6.39 1.68 1.08 1.4 2.95 2 4.38.8 1.35-1.14 1.5-3.76 1.56-5.35.06-1.24-.5-2.77.46-3.66 1.04-.98 3.2-.57 4.37-1.84 1.34-1.45.78-3.14.89-4.87.1-1.75.41-1.3 1.7-2.56 2.9-2.81 3.38-7.8 1.88-11.35Z"/><path d="M50.42 29.12c2.02-1.82 1.6-7.4 1.42-9.96-.31-4.86-3.35-3.4-5.2-.38-1.4 2.3-4.77 6-3.26 8.88 1.2 2.3 5.18 3.13 7.04 1.46ZM63.8 20.27c-1.04-1.92-1.43-2.2-2.66-3.78-.8-1.01-1.9-2.8-3.4-2.44-2.59.62-1.53 6.6-1.5 8.4.02 1.36-.28 2.76.85 3.73 1.15.98 3.05.9 4.44.69 4.26-.64 4.06-3.26 2.26-6.6ZM55.24 32.83c-.28-.04.08-.36.12-.59.19.62.33.65-.12.59Zm1.04-4.31c-2.61-2.77-7.57 6.4-4.08 7.43.8.23 1.4-.37 2.16-.47 1.1-.16 2.02.48 2.97-.53 1.5-1.58.2-5.1-1.05-6.43Z"/></g>`
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/utils/pickComponent.js
function pickComponent3({ prng, group, values = [] }) {
  const componentCollection = components_exports3;
  const key = prng.pick(values);
  if (key && componentCollection[group][key]) {
    return {
      name: key,
      value: componentCollection[group][key]
    };
  } else {
    return void 0;
  }
}

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/utils/getComponents.js
function getComponents3({ prng, options }) {
  const styleComponent = pickComponent3({
    prng,
    group: "style",
    values: options.style
  });
  const baseComponent = pickComponent3({
    prng,
    group: "base",
    values: options.base
  });
  const clothingComponent = pickComponent3({
    prng,
    group: "clothing",
    values: options.clothing
  });
  const mouthComponent = pickComponent3({
    prng,
    group: "mouth",
    values: options.mouth
  });
  const noseComponent = pickComponent3({
    prng,
    group: "nose",
    values: options.nose
  });
  const eyesComponent = pickComponent3({
    prng,
    group: "eyes",
    values: options.eyes
  });
  const eyebrowsComponent = pickComponent3({
    prng,
    group: "eyebrows",
    values: options.eyebrows
  });
  const topComponent = pickComponent3({
    prng,
    group: "top",
    values: options.top
  });
  const facialHairComponent = pickComponent3({
    prng,
    group: "facialHair",
    values: options.facialHair
  });
  const accessoriesComponent = pickComponent3({
    prng,
    group: "accessories",
    values: options.accessories
  });
  const clothingGraphicComponent = pickComponent3({
    prng,
    group: "clothingGraphic",
    values: options.clothingGraphic
  });
  return {
    "style": styleComponent,
    "base": baseComponent,
    "clothing": clothingComponent,
    "mouth": mouthComponent,
    "nose": noseComponent,
    "eyes": eyesComponent,
    "eyebrows": eyebrowsComponent,
    "top": prng.bool(options.topProbability) ? topComponent : void 0,
    "facialHair": prng.bool(options.facialHairProbability) ? facialHairComponent : void 0,
    "accessories": prng.bool(options.accessoriesProbability) ? accessoriesComponent : void 0,
    "clothingGraphic": clothingGraphicComponent
  };
}

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/utils/convertColor.js
function convertColor3(color) {
  return "transparent" === color ? color : `#${color}`;
}

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/utils/getColors.js
function getColors3({ prng, options }) {
  var _a, _b, _c, _d, _e, _f, _g;
  return {
    "accessories": convertColor3(prng.pick((_a = options.accessoriesColor) !== null && _a !== void 0 ? _a : [], "transparent")),
    "clothes": convertColor3(prng.pick((_b = options.clothesColor) !== null && _b !== void 0 ? _b : [], "transparent")),
    "hat": convertColor3(prng.pick((_c = options.hatColor) !== null && _c !== void 0 ? _c : [], "transparent")),
    "hair": convertColor3(prng.pick((_d = options.hairColor) !== null && _d !== void 0 ? _d : [], "transparent")),
    "skin": convertColor3(prng.pick((_e = options.skinColor) !== null && _e !== void 0 ? _e : [], "transparent")),
    "facialHair": convertColor3(prng.pick((_f = options.facialHairColor) !== null && _f !== void 0 ? _f : [], "transparent")),
    "background": convertColor3(prng.pick((_g = options.backgroundColor) !== null && _g !== void 0 ? _g : [], "transparent"))
  };
}

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/hooks/onPostCreate.js
function onPostCreate2({ prng, options, components, colors }) {
  var _a, _b, _c;
  if (((_a = components.style) === null || _a === void 0 ? void 0 : _a.name) === "circle") {
    options.backgroundColor = [];
  }
  if (((_b = components.style) === null || _b === void 0 ? void 0 : _b.name) !== "circle" && options.backgroundColor && options.backgroundColor.length === 1 && options.backgroundColor[0] === "65c9ff") {
    options.backgroundColor = [];
  }
  if (options.facialHairProbability !== 100 && ((_c = components.top) === null || _c === void 0 ? void 0 : _c.name) === "hijab") {
    options.facialHair = void 0;
  }
}

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/schema.js
var schema4 = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "properties": {
    "accessories": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "kurt",
          "prescription01",
          "prescription02",
          "round",
          "sunglasses",
          "wayfarers",
          "eyepatch"
        ]
      },
      "default": [
        "kurt",
        "prescription01",
        "prescription02",
        "round",
        "sunglasses",
        "wayfarers",
        "eyepatch"
      ]
    },
    "accessoriesColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "262e33",
        "65c9ff",
        "5199e4",
        "25557c",
        "e6e6e6",
        "929598",
        "3c4f5c",
        "b1e2ff",
        "a7ffc4",
        "ffdeb5",
        "ffafb9",
        "ffffb1",
        "ff488e",
        "ff5c5c",
        "ffffff"
      ]
    },
    "accessoriesProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 10
    },
    "backgroundColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "65c9ff"
      ]
    },
    "base": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "default"
        ]
      },
      "default": [
        "default"
      ]
    },
    "clothesColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "262e33",
        "65c9ff",
        "5199e4",
        "25557c",
        "e6e6e6",
        "929598",
        "3c4f5c",
        "b1e2ff",
        "a7ffc4",
        "ffafb9",
        "ffffb1",
        "ff488e",
        "ff5c5c",
        "ffffff"
      ]
    },
    "clothing": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "blazerAndShirt",
          "blazerAndSweater",
          "collarAndSweater",
          "graphicShirt",
          "hoodie",
          "overall",
          "shirtCrewNeck",
          "shirtScoopNeck",
          "shirtVNeck"
        ]
      },
      "default": [
        "blazerAndShirt",
        "blazerAndSweater",
        "collarAndSweater",
        "graphicShirt",
        "hoodie",
        "overall",
        "shirtCrewNeck",
        "shirtScoopNeck",
        "shirtVNeck"
      ]
    },
    "clothingGraphic": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "bat",
          "bear",
          "cumbia",
          "deer",
          "diamond",
          "hola",
          "pizza",
          "resist",
          "skull",
          "skullOutline"
        ]
      },
      "default": [
        "bat",
        "bear",
        "cumbia",
        "deer",
        "diamond",
        "hola",
        "pizza",
        "resist",
        "skull",
        "skullOutline"
      ]
    },
    "eyebrows": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "angryNatural",
          "defaultNatural",
          "flatNatural",
          "frownNatural",
          "raisedExcitedNatural",
          "sadConcernedNatural",
          "unibrowNatural",
          "upDownNatural",
          "angry",
          "default",
          "raisedExcited",
          "sadConcerned",
          "upDown"
        ]
      },
      "default": [
        "angryNatural",
        "defaultNatural",
        "flatNatural",
        "frownNatural",
        "raisedExcitedNatural",
        "sadConcernedNatural",
        "unibrowNatural",
        "upDownNatural",
        "angry",
        "default",
        "raisedExcited",
        "sadConcerned",
        "upDown"
      ]
    },
    "eyes": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "closed",
          "cry",
          "default",
          "eyeRoll",
          "happy",
          "hearts",
          "side",
          "squint",
          "surprised",
          "winkWacky",
          "wink",
          "xDizzy"
        ]
      },
      "default": [
        "closed",
        "cry",
        "default",
        "eyeRoll",
        "happy",
        "hearts",
        "side",
        "squint",
        "surprised",
        "winkWacky",
        "wink",
        "xDizzy"
      ]
    },
    "facialHair": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "beardLight",
          "beardMajestic",
          "beardMedium",
          "moustacheFancy",
          "moustacheMagnum"
        ]
      },
      "default": [
        "beardLight",
        "beardMajestic",
        "beardMedium",
        "moustacheFancy",
        "moustacheMagnum"
      ]
    },
    "facialHairColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "a55728",
        "2c1b18",
        "b58143",
        "d6b370",
        "724133",
        "4a312c",
        "f59797",
        "ecdcbf",
        "c93305",
        "e8e1e1"
      ]
    },
    "facialHairProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 10
    },
    "hairColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "a55728",
        "2c1b18",
        "b58143",
        "d6b370",
        "724133",
        "4a312c",
        "f59797",
        "ecdcbf",
        "c93305",
        "e8e1e1"
      ]
    },
    "hatColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "262e33",
        "65c9ff",
        "5199e4",
        "25557c",
        "e6e6e6",
        "929598",
        "3c4f5c",
        "b1e2ff",
        "a7ffc4",
        "ffdeb5",
        "ffafb9",
        "ffffb1",
        "ff488e",
        "ff5c5c",
        "ffffff"
      ]
    },
    "mouth": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "concerned",
          "default",
          "disbelief",
          "eating",
          "grimace",
          "sad",
          "screamOpen",
          "serious",
          "smile",
          "tongue",
          "twinkle",
          "vomit"
        ]
      },
      "default": [
        "concerned",
        "default",
        "disbelief",
        "eating",
        "grimace",
        "sad",
        "screamOpen",
        "serious",
        "smile",
        "tongue",
        "twinkle",
        "vomit"
      ]
    },
    "nose": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "default"
        ]
      },
      "default": [
        "default"
      ]
    },
    "skinColor": {
      "type": "array",
      "items": {
        "type": "string",
        "pattern": "^(transparent|[a-fA-F0-9]{6})$"
      },
      "default": [
        "614335",
        "d08b5b",
        "ae5d29",
        "edb98a",
        "ffdbb4",
        "fd9841",
        "f8d25c"
      ]
    },
    "style": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "circle",
          "default"
        ]
      },
      "default": [
        "default"
      ]
    },
    "top": {
      "type": "array",
      "items": {
        "type": "string",
        "enum": [
          "hat",
          "hijab",
          "turban",
          "winterHat1",
          "winterHat02",
          "winterHat03",
          "winterHat04",
          "bob",
          "bun",
          "curly",
          "curvy",
          "dreads",
          "frida",
          "fro",
          "froBand",
          "longButNotTooLong",
          "miaWallace",
          "shavedSides",
          "straight02",
          "straight01",
          "straightAndStrand",
          "dreads01",
          "dreads02",
          "frizzle",
          "shaggy",
          "shaggyMullet",
          "shortCurly",
          "shortFlat",
          "shortRound",
          "shortWaved",
          "sides",
          "theCaesar",
          "theCaesarAndSidePart",
          "bigHair"
        ]
      },
      "default": [
        "hat",
        "hijab",
        "turban",
        "winterHat1",
        "winterHat02",
        "winterHat03",
        "winterHat04",
        "bob",
        "bun",
        "curly",
        "curvy",
        "dreads",
        "frida",
        "fro",
        "froBand",
        "longButNotTooLong",
        "miaWallace",
        "shavedSides",
        "straight02",
        "straight01",
        "straightAndStrand",
        "dreads01",
        "dreads02",
        "frizzle",
        "shaggy",
        "shaggyMullet",
        "shortCurly",
        "shortFlat",
        "shortRound",
        "shortWaved",
        "sides",
        "theCaesar",
        "theCaesarAndSidePart",
        "bigHair"
      ]
    },
    "topProbability": {
      "type": "integer",
      "minimum": 0,
      "maximum": 100,
      "default": 100
    }
  }
};

// node_modules/.pnpm/@dicebear+avataaars@7.0.1_@dicebear+core@7.0.1/node_modules/@dicebear/avataaars/lib/index.js
var meta = {
  title: "Avataaars",
  creator: "Pablo Stanley",
  source: "https://avataaars.com/",
  homepage: "https://twitter.com/pablostanley",
  license: {
    name: "Free for personal and commercial use",
    url: "https://avataaars.com/"
  }
};
var create2 = ({ prng, options }) => {
  var _a, _b;
  const components = getComponents3({ prng, options });
  const colors = getColors3({ prng, options });
  onPostCreate2({ prng, options, components, colors });
  return {
    attributes: {
      viewBox: "0 0 280 280",
      fill: "none",
      "shape-rendering": "auto"
    },
    body: `<g transform="translate(8)">${(_b = (_a = components.style) === null || _a === void 0 ? void 0 : _a.value(components, colors)) !== null && _b !== void 0 ? _b : ""}</g>`,
    extra: () => ({
      ...Object.entries(components).reduce((acc, [key, value]) => {
        acc[key] = value === null || value === void 0 ? void 0 : value.name;
        return acc;
      }, {}),
      ...Object.entries(colors).reduce((acc, [key, value]) => {
        acc[`${key}Color`] = value;
        return acc;
      }, {})
    })
  };
};

// src/utils/dataGenerator.ts
function getRandomDate(from, to) {
  const fromTime = from.getTime();
  const toTime = to.getTime();
  return new Date(fromTime + Math.random() * (toTime - fromTime));
}
function selectRandomIndexes(total, count) {
  const min = Math.ceil(0);
  const max = Math.floor(total);
  let selected = [];
  let n;
  for (n = 1; n <= count; n++) {
    var i = Math.floor(Math.random() * (max - min) + min);
    selected.push(i);
  }
  return selected;
}
async function createIdentifiers(createIdentifer, domain, provider, count, alias) {
  let promises = [];
  if (count) {
    let i;
    for (i = 0; i < count; i++) {
      promises.push(i);
    }
    return Promise.all(
      promises.map(async () => {
        const _alias = (0, import_random_words.default)({
          exactly: 1,
          wordsPerString: 2,
          join: "-"
        });
        const generatedAlias = provider === "did:web" ? domain + ":" + _alias : _alias;
        if (provider === "did:peer") {
          return await createIdentifer({
            provider,
            alias: generatedAlias,
            options: {
              num_algo: 2,
              service: {
                id: "1234",
                type: "DIDCommMessaging",
                serviceEndpoint: "did:web:dev-didcomm-mediator.herokuapp.com",
                description: "a DIDComm endpoint"
              }
            }
          });
        }
        return await createIdentifer({
          provider,
          alias: count === 1 && alias ? provider === "did:web" ? domain + ":" + alias : alias : generatedAlias
        });
      })
    );
  }
}
async function getRandomProfiles(count) {
  const url = `https://randomuser.me/api/?results=${count}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Cache-Control": "no-cache"
    }
  });
  return await response.json();
}
async function createProfileCredentials(createVerifiableCredential, identifiers) {
  if (!identifiers)
    return;
  const { results } = await getRandomProfiles(identifiers?.length);
  return Promise.all(
    results.map(async (profile, key) => {
      const picture = createAvatar(lib_exports, {
        seed: profile.name.first + " " + profile.name.last,
        backgroundType: ["solid"],
        // web safe colors
        backgroundColor: ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"]
      }).toDataUriSync();
      console.log(picture);
      return await createVerifiableCredential({
        save: true,
        proofFormat: "jwt",
        credential: {
          "@context": ["https://www.w3.org/2018/credentials/v1"],
          type: ["VerifiableCredential", "Profile"],
          issuer: { id: identifiers[key].did },
          issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
          credentialSubject: {
            id: identifiers[key].did,
            name: profile.name.first + " " + profile.name.last,
            firstName: profile.name.first,
            lastName: profile.name.last,
            nickname: profile.username,
            email: profile.email,
            picture
          }
        }
      });
    })
  );
}
async function createKudosCredentials(identifiers, createVerifiableCredential, count, date, agent) {
  if (!identifiers)
    return;
  const fromSelected = selectRandomIndexes(identifiers.length, count.from);
  const toSelected = selectRandomIndexes(identifiers.length, count.to);
  return Promise.all(
    fromSelected.map(async (fromIndex) => {
      const issuerProfile = await agent.getIdentifierProfile({ did: identifiers[fromIndex].did });
      return await Promise.all(
        toSelected.map(async (toIndex) => {
          const subjectProfile = await agent.getIdentifierProfile({ did: identifiers[toIndex].did });
          const kudos = kudosMessages[Math.floor(Math.random() * kudosMessages.length)];
          return await createVerifiableCredential({
            save: true,
            proofFormat: "jwt",
            credential: {
              "@context": ["https://www.w3.org/2018/credentials/v1"],
              type: ["VerifiableCredential", "Kudos"],
              issuer: { id: identifiers[fromIndex].did },
              issuanceDate: getRandomDate(
                new Date(date.from),
                new Date(date.to)
              ).toISOString(),
              credentialSubject: {
                id: identifiers[toIndex].did,
                name: subjectProfile?.name,
                avatar: subjectProfile?.picture,
                kudos,
                "authorId": issuerProfile?.did,
                "authorName": issuerProfile?.name,
                "authorAvatar": issuerProfile?.picture,
                "channelId": "878293684620234755",
                "channelName": "\u{1F4AC}\uFF5Cgeneral-chats",
                "guildId": "878293684620234752",
                "guildName": "Veramolabs",
                "guildAvatar": "https://cdn.discordapp.com/icons/878293684620234752/3a6e2e86c563b4f327e86d51289dd294.png"
              }
            }
          });
        })
      );
    })
  );
}

// src/utils/useGenerator.ts
var import_react3 = __toESM(require_react(), 1);
function useGenerator() {
  const [identifierProvider, setIdentifierProvider] = (0, import_react3.useState)("");
  const [identifierCount, setIdentifierCount] = (0, import_react3.useState)(10);
  const [identifiersGenerating, setIdentifiersGenerating] = (0, import_react3.useState)(false);
  const [alias, setAlias] = (0, import_react3.useState)("");
  const [domain, setDomain] = (0, import_react3.useState)("");
  const [credentialProfilesGenerating, setCredentialProfilesGenerating] = (0, import_react3.useState)(false);
  const [credentialIssueFromCount, setCredentialIssueFromCount] = (0, import_react3.useState)(1);
  const [credentialIssueToCount, setCredentialIssueToCount] = (0, import_react3.useState)(1);
  const [credentialsP2PGenerating, setCredentialsP2PGenerating] = (0, import_react3.useState)(false);
  return {
    domain,
    identifierProvider,
    identifierCount,
    identifiersGenerating,
    credentialProfilesGenerating,
    credentialIssueFromCount,
    credentialIssueToCount,
    credentialsP2PGenerating,
    alias,
    setDomain,
    setCredentialsP2PGenerating,
    setCredentialIssueToCount,
    setCredentialIssueFromCount,
    setCredentialProfilesGenerating,
    setIdentifierProvider,
    setIdentifierCount,
    setIdentifiersGenerating,
    setAlias
  };
}

// src/DataGenerator.tsx
var import_pro_components = __toESM(require_pro_components(), 1);
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
var { Title, Text } = import_antd.Typography;
var { Panel } = import_antd.Collapse;
var DataGenerator = () => {
  const queryClient = (0, import_react_query.useQueryClient)();
  const { agent } = (0, import_veramo_react.useVeramo)();
  const { notification } = import_antd.App.useApp();
  const { data: identifiers } = (0, import_react_query.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const { data: providers } = (0, import_react_query.useQuery)(
    ["providers", { agentId: agent?.context.id }],
    () => agent?.didManagerGetProviders(),
    { onSuccess(data) {
      if (data)
        setIdentifierProvider(data[0]);
    } }
  );
  const {
    domain,
    identifierProvider,
    identifierCount,
    identifiersGenerating,
    credentialProfilesGenerating,
    credentialIssueFromCount,
    credentialIssueToCount,
    credentialsP2PGenerating,
    setDomain,
    setCredentialsP2PGenerating,
    setCredentialIssueToCount,
    setCredentialIssueFromCount,
    setCredentialProfilesGenerating,
    setIdentifierProvider,
    setIdentifierCount,
    setIdentifiersGenerating
  } = useGenerator();
  const generateIdentifiers = async () => {
    setIdentifiersGenerating(true);
    await createIdentifiers(
      agent?.didManagerCreate,
      domain,
      identifierProvider,
      identifierCount
    );
    notification.success({
      message: "Success",
      description: `Generated ${identifierCount} identifiers`
    });
    setIdentifiersGenerating(false);
    queryClient.invalidateQueries("identifiers");
  };
  const generateProfileCredentials = async () => {
    if (identifiers) {
      setCredentialProfilesGenerating(true);
      await createProfileCredentials(
        // @ts-ignore
        agent?.createVerifiableCredential,
        // @ts-ignore
        identifiers
      );
      notification.success({
        message: "Success",
        description: `Generated ${identifiers.length} credentials`
      });
      setCredentialProfilesGenerating(false);
    }
  };
  const generateP2PCredentials = async () => {
    if (identifiers) {
      setCredentialsP2PGenerating(true);
      const fromCount = credentialIssueFromCount > identifiers.length ? identifiers.length : credentialIssueFromCount;
      const toCount = credentialIssueToCount > identifiers.length ? identifiers.length : credentialIssueToCount;
      await createKudosCredentials(
        // @ts-ignore
        identifiers,
        // @ts-ignore
        agent?.createVerifiableCredential,
        { from: fromCount, to: toCount },
        // @todo allow date to be user selectable
        { from: "2019-01-01T00:00:00.271Z", to: "2021-02-01T01:00:00.271Z" },
        agent
      );
      notification.success({
        message: "Success",
        description: `Issued kudos credentials from ${fromCount} identifiers to ${toCount} identifiers`
      });
      setCredentialsP2PGenerating(false);
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_pro_components.PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Collapse, { bordered: false, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { header: `Identifiers (${identifiers?.length})`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      import_antd.Form,
      {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
        layout: "vertical",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Generate multiple identifiers" }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Identifier count", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Input,
            {
              defaultValue: identifierCount,
              onChange: (e) => setIdentifierCount(parseInt(e.target.value))
            }
          ) }),
          identifierProvider === "did:web" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Domain", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Input,
            {
              defaultValue: domain,
              onChange: (e) => setDomain(e.target.value)
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Provider", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Select,
            {
              onSelect: (value) => setIdentifierProvider(value),
              value: identifierProvider,
              children: providers?.map((provider) => {
                return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Select.Option, { value: provider, children: provider }, provider);
              })
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_antd.Button,
            {
              onClick: () => generateIdentifiers(),
              disabled: identifierProvider === "did:web" && !domain || identifiersGenerating || !identifierCount || !identifierProvider,
              children: "Generate"
            }
          ) }),
          identifiersGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
            "Generating ",
            identifierCount,
            " identifiers.."
          ] })
        ]
      }
    ) }, "1"),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { header: "Credentials", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { level: 5, children: "Profile Credentials" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_antd.Form,
        {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
          layout: "vertical",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
              "Generate self-signed random profile credentials for",
              " ",
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: identifiers?.length }),
              " identifiers. Note profiles will be different everytime this is run."
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_antd.Button,
              {
                onClick: () => generateProfileCredentials(),
                disabled: credentialProfilesGenerating || !identifiers,
                children: "Generate Credentials"
              }
            ) }),
            credentialProfilesGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
              "Generating ",
              identifierCount,
              " credentials.."
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Divider, {}),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title, { level: 5, children: "Peer to Peer Credentials" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_antd.Space, { direction: "vertical", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Issue Kudos credential schema between identifiers" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, { children: "Issue Kudos credential schema between identifiers. Using higher numbers of identifiers will take longer. Run multiple times with lower numbers for varying results. Number should not be more that the amount of identifiers in your agent. Putting 2 and 5 in the boxes below will issue 1 credential from 2 random identifiers to 5 random identifers." }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Issuer count", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_antd.Input,
          {
            width: 200,
            defaultValue: credentialIssueFromCount,
            onChange: (e) => setCredentialIssueFromCount(parseInt(e.target.value))
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { label: "Subject count", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_antd.Input,
          {
            width: 200,
            defaultValue: credentialIssueToCount,
            onChange: (e) => setCredentialIssueToCount(parseInt(e.target.value))
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_antd.Button,
          {
            disabled: credentialsP2PGenerating || !identifiers,
            onClick: () => generateP2PCredentials(),
            children: "Generate Credentials"
          }
        ) }),
        credentialsP2PGenerating && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Text, { children: [
          "Issuing credentials from ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: credentialIssueFromCount }),
          " ",
          "identifiers to ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: credentialIssueToCount }),
          " identifers"
        ] })
      ] }) })
    ] }, "2")
  ] }) });
};
var DataGenerator_default = DataGenerator;

// src/CreateProfileCredential.tsx
var import_react4 = __toESM(require_react(), 1);
var import_antd2 = __toESM(require_antd(), 1);
var import_veramo_react2 = __toESM(require_veramo_react(), 1);
var import_react_query2 = __toESM(require_react_query(), 1);

// src/utils/signing.ts
var claimToObject = (arr) => {
  return arr.reduce(
    (obj, item) => Object.assign(obj, { [item.type]: item.value }),
    {}
  );
};
var issueCredential = async (agent, iss, sub, claims, proofFormat, customContext, type, credentialSchemaId) => {
  let credentialObj = {
    credential: {
      issuer: { id: iss },
      issuanceDate: (/* @__PURE__ */ new Date()).toISOString(),
      "@context": customContext ? ["https://www.w3.org/2018/credentials/v1", customContext] : ["https://www.w3.org/2018/credentials/v1"],
      type: type ? ["VerifiableCredential", type] : ["VerifiableCredential"],
      credentialSubject: { id: sub, ...claimToObject(claims) }
    },
    proofFormat,
    save: true
  };
  if (credentialSchemaId) {
    credentialObj = {
      ...credentialObj,
      credentialSchema: {
        id: credentialSchemaId,
        type: "JsonSchemaValidator2018"
      }
    };
  }
  return await agent?.createVerifiableCredential(credentialObj);
};
var signVerifiablePresentation = async (agent, did, verifier, selected, proofFormat) => {
  return await agent?.createVerifiablePresentation({
    presentation: {
      holder: did,
      verifier,
      "@context": ["https://www.w3.org/2018/credentials/v1"],
      verifiableCredential: selected
    },
    proofFormat,
    save: true
  });
};

// src/CreateProfileCredential.tsx
var import_uuid = __toESM(require_uuid(), 1);
var import_pro_components2 = __toESM(require_pro_components(), 1);
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
var { TextArea } = import_antd2.Input;
var { Option } = import_antd2.Select;
var CreateProfileCredential = () => {
  const { agent } = (0, import_veramo_react2.useVeramo)();
  const { data: identifiers, isLoading: identifiersLoading } = (0, import_react_query2.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const [issuer, setIssuer] = (0, import_react4.useState)("");
  const [proofFormat, setProofFormat] = (0, import_react4.useState)("");
  const [name, setName] = (0, import_react4.useState)("");
  const [bio, setBio] = (0, import_react4.useState)("");
  const [recipient, setRecipient] = (0, import_react4.useState)("");
  const [inFlight, setInFlight] = (0, import_react4.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_pro_components2.PageContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_antd2.Card, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Select,
      {
        style: { width: "60%" },
        loading: identifiersLoading,
        onChange: (e) => setIssuer(e),
        placeholder: "issuer DID",
        defaultActiveFirstOption: true,
        children: identifiers && identifiers.map((id) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Option, { value: id.did, children: id.did }, id.did))
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input, { placeholder: "Name", onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(TextArea, { placeholder: "Bio", onChange: (e) => setBio(e.target.value) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      import_antd2.Select,
      {
        style: { width: "60%" },
        onChange: (e) => setProofFormat(e),
        placeholder: "Proof type",
        defaultActiveFirstOption: true,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            Option,
            {
              value: "EthereumEip712Signature2021",
              children: "EthereumEip712Signature2021"
            },
            "EthereumEip712Signature2021lds"
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Option, { value: "jwt", children: "jwt" }, "jwt"),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Option, { value: "lds", children: "lds" }, "lds")
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Input,
      {
        placeholder: "Recipient DID",
        onChange: (e) => setRecipient(e.target.value)
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Button,
      {
        type: "primary",
        disabled: inFlight || !proofFormat || !issuer,
        onClick: async () => {
          try {
            setInFlight(true);
            const cred = await issueCredential(
              agent,
              issuer,
              issuer,
              [
                { type: "name", value: name },
                { type: "bio", value: bio }
              ],
              proofFormat,
              "",
              "ProfileCredentialSchema",
              "did:web:veramo.io;id=62a8ca5d-7e78-4e7b-a2c1-0bf2d37437ad;version=1.0"
            );
            console.log("cred: ", cred);
            if (recipient) {
              const packedMessage = await agent?.packDIDCommMessage({
                packing: "none",
                message: {
                  from: issuer,
                  to: recipient,
                  id: (0, import_uuid.v4)(),
                  type: "w3c.vc",
                  body: cred
                }
              });
              console.log("packedMessage: ", packedMessage);
              const res = await agent?.sendDIDCommMessage({
                messageId: (0, import_uuid.v4)(),
                packedMessage,
                recipientDidUrl: recipient
              });
              console.log("res: ", res);
            }
            setInFlight(false);
          } catch (ex) {
            console.error("ex: ", ex);
            setInFlight(false);
          }
        },
        children: "Create Profile"
      }
    )
  ] }) });
};
var CreateProfileCredential_default = CreateProfileCredential;

// src/IssueCredential.tsx
var import_react5 = __toESM(require_react(), 1);
var import_antd3 = __toESM(require_antd(), 1);
var import_veramo_react3 = __toESM(require_veramo_react(), 1);
var import_react_query3 = __toESM(require_react_query(), 1);
var import_uuid2 = __toESM(require_uuid(), 1);
var import_pro_components3 = __toESM(require_pro_components(), 1);
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
var { Option: Option2 } = import_antd3.Select;
var formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
var IssueCredential = () => {
  const { agent } = (0, import_veramo_react3.useVeramo)();
  const [claimType, setClaimType] = (0, import_react5.useState)("");
  const [claimValue, setClaimValue] = (0, import_react5.useState)("");
  const [credentialType, setCredentialType] = (0, import_react5.useState)("");
  const [customContext, setCustomContext] = (0, import_react5.useState)("");
  const [errorMessage, setErrorMessage] = (0, import_react5.useState)();
  const [sending] = (0, import_react5.useState)(false);
  const [issuer, setIssuer] = (0, import_react5.useState)("");
  const [subject, setSubject] = (0, import_react5.useState)();
  const [fields, updateFields] = (0, import_react5.useState)([]);
  const [proofFormat, setProofFormat] = (0, import_react5.useState)("jwt");
  const { data: identifiers, isLoading: identifiersLoading } = (0, import_react_query3.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const updateClaimFields = (field) => {
    const claimTypes = fields.map((field2) => field2.type);
    const newFields = fields.concat([field]);
    setErrorMessage(null);
    if (!field.type) {
      setErrorMessage("Enter claim type");
      return;
    }
    if (!field.value) {
      setErrorMessage("Enter claim value");
      return;
    }
    if (claimTypes.includes(field.type)) {
      setErrorMessage("Claim type already exists");
      return;
    }
    updateFields(newFields);
    setClaimValue("");
    setClaimType("");
  };
  const signVc = async (send) => {
    const credential = await issueCredential(
      agent,
      issuer,
      subject,
      fields,
      proofFormat,
      customContext,
      credentialType
    );
    setIssuer("");
    setSubject("");
    updateFields([]);
    if (send) {
      sendVC(credential);
    }
  };
  const sendVC = async (body4) => {
    try {
      const messageId = (0, import_uuid2.v4)();
      const message = {
        type: "veramo.io/chat/v1/basicmessage",
        to: subject,
        from: issuer,
        id: messageId,
        body: body4
      };
      const packedMessage = await agent?.packDIDCommMessage({
        packing: "authcrypt",
        message
      });
      if (packedMessage) {
        console.log(packedMessage);
        await agent?.sendDIDCommMessage({
          messageId,
          packedMessage,
          recipientDidUrl: subject
        });
      }
    } catch (err) {
      console.error(err);
      agent?.handleMessage({ raw: body4.proof.jwt, save: true });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_pro_components3.PageContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Typography.Text, { children: "Credential preview" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_antd3.Form, { ...formItemLayout, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Row, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("code", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("pre", { children: JSON.stringify(claimToObject(fields), null, 2) }) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Input,
        {
          value: subject,
          placeholder: "subject DID",
          style: { width: "60%" },
          onChange: (e) => setSubject(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Select,
        {
          style: { width: "60%" },
          loading: identifiersLoading,
          onChange: (e) => setIssuer(e),
          placeholder: "issuer DID",
          defaultActiveFirstOption: true,
          children: identifiers && identifiers.map((id) => /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Option2, { value: id.did, children: id.did }, id.did))
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Input,
        {
          value: credentialType,
          placeholder: "credential type e.g Profile",
          style: { width: "60%" },
          onChange: (e) => setCredentialType(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_antd3.Input,
        {
          value: customContext,
          placeholder: "custom context url",
          style: { width: "60%" },
          onChange: (e) => setCustomContext(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
        import_antd3.Select,
        {
          style: { width: "60%" },
          onChange: (e) => setProofFormat(e),
          placeholder: "Proof type",
          defaultActiveFirstOption: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Option2, { value: "jwt", children: "jwt" }, "jwt"),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Option2, { value: "lds", children: "lds" }, "lds"),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
              Option2,
              {
                value: "EthereumEip712Signature2021",
                children: "EthereumEip712Signature2021"
              },
              "EthereumEip712Signature2021lds"
            )
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_antd3.Form.Item, { style: { padding: 15 }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Input,
          {
            placeholder: "claim type e.g. 'name'",
            value: claimType,
            style: { width: "60%" },
            onChange: (e) => setClaimType(e.target.value)
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Input,
          {
            placeholder: "claim value e.g. Alice",
            value: claimValue,
            style: { width: "60%" },
            onChange: (e) => setClaimValue(e.target.value)
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            type: "primary",
            htmlType: "submit",
            onClick: () => {
              updateClaimFields({
                type: claimType,
                value: claimValue
              });
            },
            children: "Add"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Typography.Text, { children: errorMessage })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(import_antd3.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            type: "primary",
            onClick: () => signVc(),
            style: { marginRight: 5 },
            disabled: sending || fields.length === 0 || !subject || !issuer,
            children: "Issue"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_antd3.Button,
          {
            onClick: () => signVc(true),
            type: "primary",
            disabled: sending || fields.length === 0 || !subject || !issuer,
            children: "Issue & Send"
          }
        ) })
      ] }) })
    ] })
  ] });
};
var IssueCredential_default = IssueCredential;

// src/CreatePresentation.tsx
var import_react6 = __toESM(require_react(), 1);
var import_antd4 = __toESM(require_antd(), 1);
var import_veramo_react4 = __toESM(require_veramo_react(), 1);
var import_react_query4 = __toESM(require_react_query(), 1);
var import_date_fns = __toESM(require_date_fns(), 1);
var import_uuid3 = __toESM(require_uuid(), 1);
var import_pro_components4 = __toESM(require_pro_components(), 1);
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
var { Option: Option3 } = import_antd4.Select;
var formItemLayout2 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 }
  }
};
var historyColumns = [
  {
    title: "Issuance Date",
    dataIndex: "verifiableCredential",
    sorter: {
      compare: (a, b) => new Date(a.verifiableCredential.issuanceDate).getTime() - new Date(b.verifiableCredential.issuanceDate).getTime(),
      multiple: 1
    },
    render: (verifiableCredential) => (0, import_date_fns.format)(new Date(verifiableCredential.issuanceDate), "PPP")
  },
  {
    title: "Type",
    dataIndex: "verifiableCredential",
    render: (verifiableCredential) => verifiableCredential.type.map((type, i) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Tag, { color: "geekblue", children: type }, i))
  }
];
var CreatePresentation = () => {
  const { agent } = (0, import_veramo_react4.useVeramo)();
  if (!agent)
    throw Error("No agent");
  const [selectedCredentials, setSelectedCredentials] = (0, import_react6.useState)([]);
  const [sending] = (0, import_react6.useState)(false);
  const [issuer, setIssuer] = (0, import_react6.useState)("");
  const [subject, setSubject] = (0, import_react6.useState)("");
  const [proofFormat, setProofFormat] = (0, import_react6.useState)("jwt");
  const { data: credentials, isLoading: credentialHistoryLoading } = (0, import_react_query4.useQuery)(
    ["credentials"],
    () => agent?.dataStoreORMGetVerifiableCredentials()
  );
  const { data: identifiers, isLoading: identifiersLoading } = (0, import_react_query4.useQuery)(
    ["identifiers", { agentId: agent?.context.id }],
    () => agent?.didManagerFind()
  );
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      setSelectedCredentials(
        selectedRows.map((row) => row.verifiableCredential)
      );
    }
  };
  const signVP = async (send) => {
    const vp = await signVerifiablePresentation(
      agent,
      issuer,
      [subject],
      selectedCredentials,
      proofFormat
    );
    setIssuer("");
    setSubject("");
    setSelectedCredentials([]);
    if (send) {
      await sendVP(vp);
    }
  };
  const sendVP = async (body4) => {
    try {
      const messageId = (0, import_uuid3.v4)();
      const message = {
        type: "veramo.io/chat/v1/basicmessage",
        to: subject,
        from: issuer,
        id: messageId,
        body: body4
      };
      const packedMessage = await agent?.packDIDCommMessage({
        packing: "authcrypt",
        message
      });
      if (packedMessage) {
        await agent?.sendDIDCommMessage({
          messageId,
          packedMessage,
          recipientDidUrl: subject
        });
      }
    } catch (err) {
      console.log(err);
      agent?.handleMessage({ raw: body4.proof.jwt, save: true });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_pro_components4.PageContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_antd4.Card, { bordered: false, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Typography.Text, { children: "Select credentials to create presentation" }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("br", {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { noStyle: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_antd4.Input,
        {
          value: subject,
          placeholder: "verifier DID",
          style: { width: "60%", marginBottom: 15 },
          onChange: (e) => setSubject(e.target.value)
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_antd4.Select,
        {
          style: { width: "60%" },
          loading: identifiersLoading,
          onChange: (e) => setIssuer(e),
          placeholder: "issuer DID",
          defaultActiveFirstOption: true,
          children: identifiers && identifiers.map((id) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Option3, { value: id.did, children: id.did }, id.did))
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
        import_antd4.Select,
        {
          style: { width: "60%" },
          onChange: (e) => setProofFormat(e),
          placeholder: "jwt or lds",
          defaultActiveFirstOption: true,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Option3, { value: "jwt", children: "jwt" }, "jwt"),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Option3, { value: "lds", children: "lds" }, "lds")
          ]
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_antd4.Row, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_antd4.Button,
          {
            type: "primary",
            onClick: () => signVP(),
            style: { marginRight: 5 },
            disabled: sending || selectedCredentials.length === 0 || !subject || !issuer,
            children: "Create Presentation"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          import_antd4.Button,
          {
            onClick: () => signVP(true),
            type: "primary",
            disabled: sending || selectedCredentials.length === 0 || !subject || !issuer,
            children: "Create Presentation & Send"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form, { ...formItemLayout2, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.Form.Item, { noStyle: true, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      import_antd4.Table,
      {
        loading: credentialHistoryLoading,
        rowSelection,
        expandable: {
          expandedRowRender: (record) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("pre", { children: JSON.stringify(
            record.verifiableCredential.credentialSubject,
            null,
            2
          ) })
        },
        rowKey: (record) => record.hash,
        columns: historyColumns,
        dataSource: credentials,
        pagination: false
      }
    ) }) }) })
  ] });
};
var CreatePresentation_default = CreatePresentation;

// src/index.tsx
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var Plugin = {
  //@ts-ignore
  init: (agent) => {
    return {
      name: "Developer tools",
      description: "Collection of tools for experimenting with verifiable data",
      icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CodeOutlined_default2, {}),
      routes: [
        {
          path: "/developer/data-generator",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(DataGenerator_default, {})
        },
        {
          path: "/developer/issue-profile-credential",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CreateProfileCredential_default, {})
        },
        {
          path: "/developer/issue-credential",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(IssueCredential_default, {})
        },
        {
          path: "/developer/create-presentation",
          element: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CreatePresentation_default, {})
        }
      ],
      menuItems: [
        {
          name: "Developer tools",
          path: "/developer",
          icon: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CodeOutlined_default2, {}),
          routes: [
            {
              path: "/developer/data-generator",
              name: "Data generator"
            },
            {
              path: "/developer/issue-profile-credential",
              name: "Issue profile credential"
            },
            {
              path: "/developer/issue-credential",
              name: "Issue credential"
            },
            {
              path: "/developer/create-presentation",
              name: "Create presentation"
            }
          ]
        }
      ]
    };
  }
};
var src_default = Plugin;
export {
  src_default as default
};
/*! Bundled license information:

classnames/index.js:
  (*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  *)

@dicebear/converter/lib/index.js:
  (*!
   * DiceBear Converter (@dicebear/converter)
   *
   * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/main/LICENSE)
   * Copyright (c) 2023 Florian Körner
   *)

@dicebear/core/lib/index.js:
  (*!
   * DiceBear (@dicebear/core)
   *
   * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/main/LICENSE)
   * Copyright (c) 2023 Florian Körner
   *)

@dicebear/initials/lib/utils/initials.js:
  (*!
   * Copyright by chickens / stackoverflow
   * Licensed under CC BY-SA 4.0 (https://creativecommons.org/licenses/by-sa/4.0/).
   * Source: https://stackoverflow.com/a/63763497
   *)

@dicebear/initials/lib/index.js:
  (*!
   * DiceBear Initials (@dicebear/initials)
   *
   * Code licensed under MIT (https://github.com/dicebear/dicebear/blob/v4/packages/initials/LICENSE)
   * Copyright (c) 2023 Florian Körner
   *)
*/
