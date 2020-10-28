(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Automerge"] = factory();
	else
		root["Automerge"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/automerge.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./backend/columnar.js":
/*!*****************************!*\
  !*** ./backend/columnar.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    ROOT_ID = _require.ROOT_ID,
    copyObject = _require.copyObject,
    parseOpId = _require.parseOpId,
    equalBytes = _require.equalBytes;

var _require2 = __webpack_require__(/*! ./encoding */ "./backend/encoding.js"),
    utf8ToString = _require2.utf8ToString,
    hexStringToBytes = _require2.hexStringToBytes,
    bytesToHexString = _require2.bytesToHexString,
    Encoder = _require2.Encoder,
    Decoder = _require2.Decoder,
    RLEEncoder = _require2.RLEEncoder,
    RLEDecoder = _require2.RLEDecoder,
    DeltaEncoder = _require2.DeltaEncoder,
    DeltaDecoder = _require2.DeltaDecoder,
    BooleanEncoder = _require2.BooleanEncoder,
    BooleanDecoder = _require2.BooleanDecoder;

// Maybe we should be using the platform's built-in hash implementation?
// Node has the crypto module: https://nodejs.org/api/crypto.html and browsers have
// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest
// However, the WebCrypto API is asynchronous (returns promises), which would
// force all our APIs to become asynchronous as well, which would be annoying.
//
// I think on balance, it's safe enough to use a random library off npm:
// - We only need one hash function (not a full suite of crypto algorithms);
// - SHA256 is quite simple and has fairly few opportunities for subtle bugs
//   (compared to asymmetric cryptography anyway);
// - It does not need a secure source of random bits and does not need to be
//   constant-time;
// - I have reviewed the source code and it seems pretty reasonable.


var _require3 = __webpack_require__(/*! fast-sha256 */ "./node_modules/fast-sha256/sha256.js"),
    Hash = _require3.Hash;

// These bytes don't mean anything, they were generated randomly


var MAGIC_BYTES = Uint8Array.of(0x85, 0x6f, 0x4a, 0x83);

var COLUMN_TYPE = {
  GROUP_CARD: 0, ACTOR_ID: 1, INT_RLE: 2, INT_DELTA: 3, BOOLEAN: 4,
  STRING_RLE: 5, VALUE_LEN: 6, VALUE_RAW: 7
};

var VALUE_TYPE = {
  NULL: 0, FALSE: 1, TRUE: 2, LEB128_UINT: 3, LEB128_INT: 4, IEEE754: 5,
  UTF8: 6, BYTES: 7, COUNTER: 8, TIMESTAMP: 9, MIN_UNKNOWN: 10, MAX_UNKNOWN: 15

  // make* actions must be at even-numbered indexes in this list
};var ACTIONS = ['makeMap', 'set', 'makeList', 'del', 'makeText', 'inc', 'makeTable', 'link'];

var OBJECT_TYPE = { makeMap: 'map', makeList: 'list', makeText: 'text', makeTable: 'table' };

var COMMON_COLUMNS = {
  objActor: 0 << 3 | COLUMN_TYPE.ACTOR_ID,
  objCtr: 0 << 3 | COLUMN_TYPE.INT_RLE,
  keyActor: 1 << 3 | COLUMN_TYPE.ACTOR_ID,
  keyCtr: 1 << 3 | COLUMN_TYPE.INT_DELTA,
  keyStr: 1 << 3 | COLUMN_TYPE.STRING_RLE,
  idActor: 2 << 3 | COLUMN_TYPE.ACTOR_ID,
  idCtr: 2 << 3 | COLUMN_TYPE.INT_DELTA,
  insert: 3 << 3 | COLUMN_TYPE.BOOLEAN,
  action: 4 << 3 | COLUMN_TYPE.INT_RLE,
  valLen: 5 << 3 | COLUMN_TYPE.VALUE_LEN,
  valRaw: 5 << 3 | COLUMN_TYPE.VALUE_RAW,
  chldActor: 6 << 3 | COLUMN_TYPE.ACTOR_ID,
  chldCtr: 6 << 3 | COLUMN_TYPE.INT_DELTA
};

var CHANGE_COLUMNS = Object.assign({
  predNum: 7 << 3 | COLUMN_TYPE.GROUP_CARD,
  predActor: 7 << 3 | COLUMN_TYPE.ACTOR_ID,
  predCtr: 7 << 3 | COLUMN_TYPE.INT_DELTA
}, COMMON_COLUMNS);

var DOC_OPS_COLUMNS = Object.assign({
  succNum: 8 << 3 | COLUMN_TYPE.GROUP_CARD,
  succActor: 8 << 3 | COLUMN_TYPE.ACTOR_ID,
  succCtr: 8 << 3 | COLUMN_TYPE.INT_DELTA
}, COMMON_COLUMNS);

var DOC_OPS_COLUMNS_REV = Object.entries(DOC_OPS_COLUMNS).reduce(function (acc, _ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      k = _ref2[0],
      v = _ref2[1];

  acc[v] = k;return acc;
}, []);

var DOCUMENT_COLUMNS = {
  actor: 0 << 3 | COLUMN_TYPE.ACTOR_ID,
  seq: 0 << 3 | COLUMN_TYPE.INT_DELTA,
  maxOp: 1 << 3 | COLUMN_TYPE.INT_DELTA,
  time: 2 << 3 | COLUMN_TYPE.INT_DELTA,
  message: 3 << 3 | COLUMN_TYPE.STRING_RLE,
  depsNum: 4 << 3 | COLUMN_TYPE.GROUP_CARD,
  depsIndex: 4 << 3 | COLUMN_TYPE.INT_DELTA

  /**
   * Updates `objectTree`, which is a tree of nested objects, so that afterwards
   * `objectTree[path[0]][path[1]][...] === value`. Only the root object is mutated, whereas any
   * nested objects are copied before updating. This means that once the root object has been
   * shallow-copied, this function can be used to update it without mutating the previous version.
   */
};function deepCopyUpdate(objectTree, path, value) {
  if (path.length === 1) {
    objectTree[path[0]] = value;
  } else {
    var child = Object.assign({}, objectTree[path[0]]);
    deepCopyUpdate(child, path.slice(1), value);
    objectTree[path[0]] = child;
  }
}

/**
 * Parses a string of the form '12345@someActorId' into an object of the form
 * {counter: 12345, actorId: 'someActorId'}, and any other string into an object
 * of the form {value: 'originalString'}.
 */
function maybeParseOpId(value) {
  if (value === undefined) return {};
  // FIXME when parsing the "key" of an operation, need to correctly handle
  // map property names that happen to contain an @ sign
  return value.indexOf('@') >= 0 ? parseOpId(value) : { value: value };
}

/**
 * Maps an opId of the form {counter: 12345, actorId: 'someActorId'} to the form
 * {counter: 12345, actorNum: 123, actorId: 'someActorId'}, where the actorNum
 * is the index into the `actorIds` array.
 */
function actorIdToActorNum(opId, actorIds) {
  if (!opId.actorId) return opId;
  var counter = opId.counter;
  var actorNum = actorIds.indexOf(opId.actorId);
  if (actorNum < 0) throw new RangeError('missing actorId'); // should not happen
  return { counter: counter, actorNum: actorNum, actorId: opId.actorId };
}

/**
 * Takes `changes`, an array of changes (represented as JS objects). Returns an
 * object `{changes, actorIds}`, where `changes` is a copy of the argument in
 * which all string opIds have been replaced with `{counter, actorNum}` objects,
 * and where `actorIds` is a lexicographically sorted array of actor IDs occurring
 * in any of the operations. `actorNum` is an index into that array of actorIds.
 * If `single` is true, the actorId of the author of the change is moved to the
 * beginning of the array of actorIds, so that `actorNum` is zero when referencing
 * the author of the change itself. This special-casing is omitted if `single` is
 * false.
 */
function parseAllOpIds(changes, single) {
  var actors = {},
      newChanges = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = changes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var change = _step.value;

      change = copyObject(change);
      actors[change.actor] = true;
      change.ops = change.ops.map(function (op) {
        op = copyObject(op);
        op.obj = maybeParseOpId(op.obj);
        op.key = maybeParseOpId(op.key);
        op.child = maybeParseOpId(op.child);
        if (op.pred) op.pred = op.pred.map(parseOpId);
        if (op.obj.actorId) actors[op.obj.actorId] = true;
        if (op.key.actorId) actors[op.key.actorId] = true;
        if (op.child.actorId) actors[op.child.actorId] = true;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = op.pred[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var pred = _step3.value;
            actors[pred.actorId] = true;
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }

        return op;
      });
      newChanges.push(change);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var actorIds = Object.keys(actors).sort();
  if (single) {
    actorIds = [changes[0].actor].concat(actorIds.filter(function (actor) {
      return actor !== changes[0].actor;
    }));
  }
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = newChanges[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _change = _step2.value;

      _change.actorNum = actorIds.indexOf(_change.actor);
      for (var i = 0; i < _change.ops.length; i++) {
        var op = _change.ops[i];
        op.id = { counter: _change.startOp + i, actorNum: _change.actorNum, actorId: _change.actor };
        op.obj = actorIdToActorNum(op.obj, actorIds);
        op.key = actorIdToActorNum(op.key, actorIds);
        op.child = actorIdToActorNum(op.child, actorIds);
        op.pred = op.pred.map(function (pred) {
          return actorIdToActorNum(pred, actorIds);
        });
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return { changes: newChanges, actorIds: actorIds };
}

/**
 * Encodes the `obj` property of operation `op` into the two columns
 * `objActor` and `objCtr`.
 */
function encodeObjectId(op, columns) {
  if (op.obj.value === ROOT_ID) {
    columns.objActor.appendValue(null);
    columns.objCtr.appendValue(null);
  } else if (op.obj.actorNum >= 0 && op.obj.counter > 0) {
    columns.objActor.appendValue(op.obj.actorNum);
    columns.objCtr.appendValue(op.obj.counter);
  } else {
    throw new RangeError('Unexpected objectId reference: ' + JSON.stringify(op.obj));
  }
}

/**
 * Encodes the `key` property of operation `op` into the three columns
 * `keyActor`, `keyCtr`, and `keyStr`.
 */
function encodeOperationKey(op, columns) {
  if (op.key.value === '_head' && op.insert) {
    columns.keyActor.appendValue(null);
    columns.keyCtr.appendValue(0);
    columns.keyStr.appendValue(null);
  } else if (op.key.value) {
    columns.keyActor.appendValue(null);
    columns.keyCtr.appendValue(null);
    columns.keyStr.appendValue(op.key.value);
  } else if (op.key.actorNum >= 0 && op.key.counter > 0) {
    columns.keyActor.appendValue(op.key.actorNum);
    columns.keyCtr.appendValue(op.key.counter);
    columns.keyStr.appendValue(null);
  } else {
    throw new RangeError('Unexpected operation key: ' + JSON.stringify(op.key));
  }
}

/**
 * Encodes the `action` property of operation `op` into the `action` column.
 */
function encodeOperationAction(op, columns) {
  var actionCode = ACTIONS.indexOf(op.action);
  if (actionCode >= 0) {
    columns.action.appendValue(actionCode);
  } else if (typeof op.action === 'number') {
    columns.action.appendValue(op.action);
  } else {
    throw new RangeError('Unexpected operation action: ' + op.action);
  }
}

/**
 * Encodes the integer `value` into the two columns `valLen` and `valRaw`,
 * with the datatype tag set to `typeTag`. If `typeTag` is zero, it is set
 * automatically to signed or unsigned depending on the sign of the value.
 * Values with non-zero type tags are always encoded as signed integers.
 */
function encodeInteger(value, typeTag, columns) {
  var numBytes = void 0;
  if (value < 0 || typeTag > 0) {
    numBytes = columns.valRaw.appendInt53(value);
    if (!typeTag) typeTag = VALUE_TYPE.LEB128_INT;
  } else {
    numBytes = columns.valRaw.appendUint53(value);
    typeTag = VALUE_TYPE.LEB128_UINT;
  }
  columns.valLen.appendValue(numBytes << 4 | typeTag);
}

/**
 * Encodes the `value` property of operation `op` into the two columns
 * `valLen` and `valRaw`.
 */
function encodeValue(op, columns) {
  if (op.action !== 'set' && op.action !== 'inc' || op.value === null) {
    columns.valLen.appendValue(VALUE_TYPE.NULL);
  } else if (op.value === false) {
    columns.valLen.appendValue(VALUE_TYPE.FALSE);
  } else if (op.value === true) {
    columns.valLen.appendValue(VALUE_TYPE.TRUE);
  } else if (typeof op.value === 'string') {
    var numBytes = columns.valRaw.appendRawString(op.value);
    columns.valLen.appendValue(numBytes << 4 | VALUE_TYPE.UTF8);
  } else if (ArrayBuffer.isView(op.value)) {
    var _numBytes = columns.valRaw.appendRawBytes(new Uint8Array(op.value.buffer));
    columns.valLen.appendValue(_numBytes << 4 | VALUE_TYPE.BYTES);
  } else if (op.datatype === 'counter' && typeof op.value === 'number') {
    encodeInteger(op.value, VALUE_TYPE.COUNTER, columns);
  } else if (op.datatype === 'timestamp' && typeof op.value === 'number') {
    encodeInteger(op.value, VALUE_TYPE.TIMESTAMP, columns);
  } else if (typeof op.datatype === 'number' && op.datatype >= VALUE_TYPE.MIN_UNKNOWN && op.datatype <= VALUE_TYPE.MAX_UNKNOWN && op.value instanceof Uint8Array) {
    var _numBytes2 = columns.valRaw.appendRawBytes(op.value);
    columns.valLen.appendValue(_numBytes2 << 4 | op.datatype);
  } else if (op.datatype) {
    throw new RangeError('Unknown datatype ' + op.datatype + ' for value ' + op.value);
  } else if (typeof op.value === 'number') {
    if (Number.isInteger(op.value) && op.value <= Number.MAX_SAFE_INTEGER && op.value >= Number.MIN_SAFE_INTEGER) {
      encodeInteger(op.value, 0, columns);
    } else {
      // Encode number in 32-bit float if this can be done without loss of precision
      var buf32 = new ArrayBuffer(4),
          view32 = new DataView(buf32);
      view32.setFloat32(0, op.value, true); // true means little-endian
      if (view32.getFloat32(0, true) === op.value) {
        columns.valRaw.appendRawBytes(new Uint8Array(buf32));
        columns.valLen.appendValue(4 << 4 | VALUE_TYPE.IEEE754);
      } else {
        var buf64 = new ArrayBuffer(8),
            view64 = new DataView(buf64);
        view64.setFloat64(0, op.value, true); // true means little-endian
        columns.valRaw.appendRawBytes(new Uint8Array(buf64));
        columns.valLen.appendValue(8 << 4 | VALUE_TYPE.IEEE754);
      }
    }
  } else {
    throw new RangeError('Unsupported value in operation: ' + op.value);
  }
}

/**
 * Given `sizeTag` (an unsigned integer read from a VALUE_LEN column) and `bytes` (a Uint8Array
 * read from a VALUE_RAW column, with length `sizeTag >> 4`), this function returns an object of the
 * form `{value: value, datatype: datatypeTag}` where `value` is a JavaScript primitive datatype
 * corresponding to the value, and `datatypeTag` is a datatype annotation such as 'counter'.
 */
function decodeValue(sizeTag, bytes) {
  if (sizeTag === VALUE_TYPE.NULL) {
    return { value: null };
  } else if (sizeTag === VALUE_TYPE.FALSE) {
    return { value: false };
  } else if (sizeTag === VALUE_TYPE.TRUE) {
    return { value: true };
  } else if (sizeTag % 16 === VALUE_TYPE.UTF8) {
    return { value: utf8ToString(bytes) };
  } else {
    if (sizeTag % 16 === VALUE_TYPE.LEB128_UINT) {
      return { value: new Decoder(bytes).readUint53() };
    } else if (sizeTag % 16 === VALUE_TYPE.LEB128_INT) {
      return { value: new Decoder(bytes).readInt53() };
    } else if (sizeTag % 16 === VALUE_TYPE.IEEE754) {
      var view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength);
      if (bytes.byteLength === 4) {
        return { value: view.getFloat32(0, true) // true means little-endian
        };
      } else if (bytes.byteLength === 8) {
        return { value: view.getFloat64(0, true) };
      } else {
        throw new RangeError('Invalid length for floating point number: ' + bytes.byteLength);
      }
    } else if (sizeTag % 16 === VALUE_TYPE.COUNTER) {
      return { value: new Decoder(bytes).readInt53(), datatype: 'counter' };
    } else if (sizeTag % 16 === VALUE_TYPE.TIMESTAMP) {
      return { value: new Decoder(bytes).readInt53(), datatype: 'timestamp' };
    } else {
      return { value: bytes, datatype: sizeTag % 16 };
    }
  }
}

/**
 * Reads one value from the column `columns[colIndex]` and interprets it based
 * on the column type. `actorIds` is a list of actors that appear in the change;
 * `actorIds[0]` is the actorId of the change's author. Mutates the `result`
 * object with the value, and returns the number of columns processed (this is 2
 * in the case of a pair of VALUE_LEN and VALUE_RAW columns, which are processed
 * in one go).
 */
function decodeValueColumns(columns, colIndex, actorIds, result) {
  var _columns$colIndex = columns[colIndex],
      columnId = _columns$colIndex.columnId,
      columnName = _columns$colIndex.columnName,
      decoder = _columns$colIndex.decoder;

  if (columnId % 8 === COLUMN_TYPE.VALUE_LEN && colIndex + 1 < columns.length && columns[colIndex + 1].columnId === columnId + 1) {
    var sizeTag = decoder.readValue();
    var rawValue = columns[colIndex + 1].decoder.readRawBytes(sizeTag >> 4);

    var _decodeValue = decodeValue(sizeTag, rawValue),
        value = _decodeValue.value,
        datatype = _decodeValue.datatype;

    result[columnName] = value;
    if (datatype) result[columnName + '_datatype'] = datatype;
    return 2;
  } else if (columnId % 8 === COLUMN_TYPE.ACTOR_ID) {
    var actorNum = decoder.readValue();
    if (actorNum === null) {
      result[columnName] = null;
    } else {
      if (!actorIds[actorNum]) throw new RangeError('No actor index ' + actorNum);
      result[columnName] = actorIds[actorNum];
    }
  } else {
    result[columnName] = decoder.readValue();
  }
  return 1;
}

/**
 * Encodes an array of operations in a set of columns. The operations need to
 * be parsed with `parseAllOpIds()` beforehand. If `forDocument` is true, we use
 * the column structure of a whole document, otherwise we use the column
 * structure for an individual change. Returns an array of `{id, name, encoder}`
 * objects.
 */
function encodeOps(ops, forDocument) {
  var columns = {
    objActor: new RLEEncoder('uint'),
    objCtr: new RLEEncoder('uint'),
    keyActor: new RLEEncoder('uint'),
    keyCtr: new DeltaEncoder(),
    keyStr: new RLEEncoder('utf8'),
    insert: new BooleanEncoder(),
    action: new RLEEncoder('uint'),
    valLen: new RLEEncoder('uint'),
    valRaw: new Encoder(),
    chldActor: new RLEEncoder('uint'),
    chldCtr: new DeltaEncoder()
  };

  if (forDocument) {
    columns.idActor = new RLEEncoder('uint');
    columns.idCtr = new DeltaEncoder();
    columns.succNum = new RLEEncoder('uint');
    columns.succActor = new RLEEncoder('uint');
    columns.succCtr = new DeltaEncoder();
  } else {
    columns.predNum = new RLEEncoder('uint');
    columns.predCtr = new DeltaEncoder();
    columns.predActor = new RLEEncoder('uint');
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = ops[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var op = _step4.value;

      encodeObjectId(op, columns);
      encodeOperationKey(op, columns);
      columns.insert.appendValue(!!op.insert);
      encodeOperationAction(op, columns);
      encodeValue(op, columns);

      if (op.child.counter) {
        columns.chldActor.appendValue(op.child.actorNum);
        columns.chldCtr.appendValue(op.child.counter);
      } else {
        columns.chldActor.appendValue(null);
        columns.chldCtr.appendValue(null);
      }

      if (forDocument) {
        columns.idActor.appendValue(op.id.actorNum);
        columns.idCtr.appendValue(op.id.counter);
        columns.succNum.appendValue(op.succ.length);
        for (var i = 0; i < op.succ.length; i++) {
          columns.succActor.appendValue(op.succ[i].actorNum);
          columns.succCtr.appendValue(op.succ[i].counter);
        }
      } else {
        columns.predNum.appendValue(op.pred.length);
        for (var _i = 0; _i < op.pred.length; _i++) {
          columns.predActor.appendValue(op.pred[_i].actorNum);
          columns.predCtr.appendValue(op.pred[_i].counter);
        }
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  var columnList = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = Object.entries(forDocument ? DOC_OPS_COLUMNS : CHANGE_COLUMNS)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var _ref3 = _step5.value;

      var _ref4 = _slicedToArray(_ref3, 2);

      var name = _ref4[0];
      var id = _ref4[1];

      if (columns[name]) columnList.push({ id: id, name: name, encoder: columns[name] });
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5.return) {
        _iterator5.return();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
      }
    }
  }

  return columnList.sort(function (a, b) {
    return a.id - b.id;
  });
}

/**
 * Takes a change as decoded by `decodeColumns`, and changes it into the form
 * expected by the rest of the backend. If `forDocument` is true, we use the op
 * structure of a whole document, otherwise we use the op structure for an
 * individual change.
 */
function decodeOps(ops, forDocument) {
  var newOps = [];
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = ops[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var op = _step6.value;

      var newOp = {
        obj: op.objCtr === null ? ROOT_ID : op.objCtr + '@' + op.objActor,
        key: op.keyCtr === 0 ? '_head' : op.keyStr || op.keyCtr + '@' + op.keyActor,
        action: ACTIONS[op.action] || op.action
      };
      newOp.insert = !!op.insert;
      if (ACTIONS[op.action] === 'set' || ACTIONS[op.action] === 'inc') {
        newOp.value = op.valLen;
        if (op.valLen_datatype) newOp.datatype = op.valLen_datatype;
      }
      if (!!op.chldCtr !== !!op.chldActor) {
        throw new RangeError('Mismatched child columns: ' + op.chldCtr + ' and ' + op.chldActor);
      }
      if (op.chldCtr !== null) newOp.child = op.chldCtr + '@' + op.chldActor;
      if (forDocument) {
        newOp.id = op.idCtr + '@' + op.idActor;
        newOp.succ = op.succNum.map(function (succ) {
          return succ.succCtr + '@' + succ.succActor;
        });
      } else {
        newOp.pred = op.predNum.map(function (pred) {
          return pred.predCtr + '@' + pred.predActor;
        });
      }
      newOps.push(newOp);
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }

  return newOps;
}

function encoderByColumnId(columnId) {
  if ((columnId & 7) === COLUMN_TYPE.INT_DELTA) {
    return new DeltaEncoder();
  } else if ((columnId & 7) === COLUMN_TYPE.BOOLEAN) {
    return new BooleanEncoder();
  } else if ((columnId & 7) === COLUMN_TYPE.STRING_RLE) {
    return new RLEEncoder('utf8');
  } else if ((columnId & 7) === COLUMN_TYPE.VALUE_RAW) {
    return new Encoder();
  } else {
    return new RLEEncoder('uint');
  }
}

function decoderByColumnId(columnId, buffer) {
  if ((columnId & 7) === COLUMN_TYPE.INT_DELTA) {
    return new DeltaDecoder(buffer);
  } else if ((columnId & 7) === COLUMN_TYPE.BOOLEAN) {
    return new BooleanDecoder(buffer);
  } else if ((columnId & 7) === COLUMN_TYPE.STRING_RLE) {
    return new RLEDecoder('utf8', buffer);
  } else if ((columnId & 7) === COLUMN_TYPE.VALUE_RAW) {
    return new Decoder(buffer);
  } else {
    return new RLEDecoder('uint', buffer);
  }
}

function makeDecoders(columns, columnSpec) {
  // By default, every column decodes an empty byte array
  var emptyBuf = Uint8Array.of(),
      decoders = {};
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = Object.entries(columnSpec)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var _ref5 = _step7.value;

      var _ref6 = _slicedToArray(_ref5, 2);

      var columnName = _ref6[0];
      var columnId = _ref6[1];

      decoders[columnId] = decoderByColumnId(columnId, emptyBuf);
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7.return) {
        _iterator7.return();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  var _iteratorNormalCompletion8 = true;
  var _didIteratorError8 = false;
  var _iteratorError8 = undefined;

  try {
    for (var _iterator8 = columns[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
      var column = _step8.value;

      decoders[column.columnId] = decoderByColumnId(column.columnId, column.buffer);
    }
  } catch (err) {
    _didIteratorError8 = true;
    _iteratorError8 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion8 && _iterator8.return) {
        _iterator8.return();
      }
    } finally {
      if (_didIteratorError8) {
        throw _iteratorError8;
      }
    }
  }

  var result = [];

  var _loop = function _loop(_columnId) {
    var _Object$entries$find = Object.entries(columnSpec).find(function (_ref7) {
      var _ref8 = _slicedToArray(_ref7, 2),
          name = _ref8[0],
          id = _ref8[1];

      return id === _columnId;
    }),
        _Object$entries$find2 = _slicedToArray(_Object$entries$find, 2),
        columnName = _Object$entries$find2[0],
        _ = _Object$entries$find2[1];

    if (!columnName) columnName = _columnId.toString();
    result.push({ columnId: _columnId, columnName: columnName, decoder: decoders[_columnId] });
  };

  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = Object.keys(decoders).map(function (id) {
      return parseInt(id);
    }).sort(function (a, b) {
      return a - b;
    })[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var _columnId = _step9.value;

      _loop(_columnId);
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9.return) {
        _iterator9.return();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  return result;
}

function decodeColumns(columns, actorIds, columnSpec) {
  columns = makeDecoders(columns, columnSpec);
  var parsedRows = [];
  while (columns.some(function (col) {
    return !col.decoder.done;
  })) {
    var row = {},
        col = 0;
    while (col < columns.length) {
      var columnId = columns[col].columnId;
      var groupId = columnId >> 3,
          groupCols = 1;
      while (col + groupCols < columns.length && columns[col + groupCols].columnId >> 3 === groupId) {
        groupCols++;
      }

      if (columnId % 8 === COLUMN_TYPE.GROUP_CARD) {
        var values = [],
            count = columns[col].decoder.readValue();
        for (var i = 0; i < count; i++) {
          var value = {};
          for (var colOffset = 1; colOffset < groupCols; colOffset++) {
            decodeValueColumns(columns, col + colOffset, actorIds, value);
          }
          values.push(value);
        }
        row[columns[col].columnName] = values;
        col += groupCols;
      } else {
        col += decodeValueColumns(columns, col, actorIds, row);
      }
    }
    parsedRows.push(row);
  }
  return parsedRows;
}

function readColumns(decoder) {
  var numColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;

  var lastColumnId = -1,
      columns = [];
  while (!decoder.done && columns.length < numColumns) {
    var columnId = decoder.readUint32();
    var columnBuf = decoder.readPrefixedBytes();
    if (columnId <= lastColumnId) throw new RangeError('Columns must be in ascending order');
    lastColumnId = columnId;
    columns.push({ columnId: columnId, buffer: columnBuf });
  }
  return columns;
}

function decodeChangeHeader(decoder) {
  var change = {
    actor: decoder.readHexString(),
    seq: decoder.readUint53(),
    startOp: decoder.readUint53(),
    time: decoder.readInt53(),
    message: decoder.readPrefixedString(),
    deps: []
  };
  var actorIds = [change.actor],
      numActorIds = decoder.readUint53();
  for (var i = 0; i < numActorIds; i++) {
    actorIds.push(decoder.readHexString());
  }var numDeps = decoder.readUint53();
  for (var _i2 = 0; _i2 < numDeps; _i2++) {
    change.deps.push(bytesToHexString(decoder.readRawBytes(32)));
  }
  change.actorIds = actorIds;
  return change;
}

/**
 * Assembles a chunk of encoded data containing a checksum, headers, and a
 * series of encoded columns. Calls `encodeHeaderCallback` with an encoder that
 * should be used to add the headers. The columns should be given as `columns`.
 */
function encodeContainer(chunkType, columns, encodeHeaderCallback) {
  var CHECKSUM_SIZE = 4; // checksum is first 4 bytes of SHA-256 hash of the rest of the data
  var HEADER_SPACE = MAGIC_BYTES.byteLength + CHECKSUM_SIZE + 1 + 5; // 1 byte type + 5 bytes length
  var body = new Encoder();
  // Make space for the header at the beginning of the body buffer. We will
  // copy the header in here later. This is cheaper than copying the body since
  // the body is likely to be much larger than the header.
  body.appendRawBytes(new Uint8Array(HEADER_SPACE));
  encodeHeaderCallback(body);

  var _iteratorNormalCompletion10 = true;
  var _didIteratorError10 = false;
  var _iteratorError10 = undefined;

  try {
    for (var _iterator10 = columns[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
      var column = _step10.value;

      var buffer = column.encoder.buffer;
      if (buffer.byteLength > 0) {
        body.appendUint53(column.id);
        body.appendPrefixedBytes(buffer);
      }
    }
  } catch (err) {
    _didIteratorError10 = true;
    _iteratorError10 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion10 && _iterator10.return) {
        _iterator10.return();
      }
    } finally {
      if (_didIteratorError10) {
        throw _iteratorError10;
      }
    }
  }

  var bodyBuf = body.buffer;
  var header = new Encoder();
  if (chunkType === 'document') {
    header.appendByte(0);
  } else if (chunkType === 'change') {
    header.appendByte(1);
  } else {
    throw new RangeError('Unsupported chunk type: ' + chunkType);
  }
  header.appendUint53(bodyBuf.byteLength - HEADER_SPACE);

  // Compute the hash over chunkType, length, and body
  var headerBuf = header.buffer;
  var sha256 = new Hash();
  sha256.update(headerBuf);
  sha256.update(bodyBuf.subarray(HEADER_SPACE));
  var hash = sha256.digest(),
      checksum = hash.subarray(0, CHECKSUM_SIZE);

  // Copy header into the body buffer so that they are contiguous
  bodyBuf.set(MAGIC_BYTES, HEADER_SPACE - headerBuf.byteLength - CHECKSUM_SIZE - MAGIC_BYTES.byteLength);
  bodyBuf.set(checksum, HEADER_SPACE - headerBuf.byteLength - CHECKSUM_SIZE);
  bodyBuf.set(headerBuf, HEADER_SPACE - headerBuf.byteLength);
  return { hash: hash, bytes: bodyBuf.subarray(HEADER_SPACE - headerBuf.byteLength - CHECKSUM_SIZE - MAGIC_BYTES.byteLength) };
}

function decodeContainerHeader(decoder, computeHash) {
  if (!equalBytes(decoder.readRawBytes(MAGIC_BYTES.byteLength), MAGIC_BYTES)) {
    throw new RangeError('Data does not begin with magic bytes 85 6f 4a 83');
  }
  var expectedHash = decoder.readRawBytes(4);
  var hashStartOffset = decoder.offset;
  var chunkType = decoder.readByte();
  var chunkLength = decoder.readUint53();
  var header = { chunkType: chunkType, chunkLength: chunkLength, chunkData: decoder.readRawBytes(chunkLength) };

  if (computeHash) {
    var sha256 = new Hash();
    sha256.update(decoder.buf.subarray(hashStartOffset, decoder.offset));
    var binaryHash = sha256.digest();
    if (!equalBytes(binaryHash.subarray(0, 4), expectedHash)) {
      throw new RangeError('checksum does not match data');
    }
    header.hash = bytesToHexString(binaryHash);
  }
  return header;
}

function encodeChange(changeObj) {
  var _parseAllOpIds = parseAllOpIds([changeObj], true),
      changes = _parseAllOpIds.changes,
      actorIds = _parseAllOpIds.actorIds;

  var change = changes[0];

  var _encodeContainer = encodeContainer('change', encodeOps(change.ops, false), function (encoder) {
    encoder.appendHexString(change.actor);
    encoder.appendUint53(change.seq);
    encoder.appendUint53(change.startOp);
    encoder.appendInt53(change.time);
    encoder.appendPrefixedString(change.message || '');
    encoder.appendUint53(actorIds.length - 1);
    var _iteratorNormalCompletion11 = true;
    var _didIteratorError11 = false;
    var _iteratorError11 = undefined;

    try {
      for (var _iterator11 = actorIds.slice(1)[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
        var actor = _step11.value;
        encoder.appendHexString(actor);
      }
    } catch (err) {
      _didIteratorError11 = true;
      _iteratorError11 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion11 && _iterator11.return) {
          _iterator11.return();
        }
      } finally {
        if (_didIteratorError11) {
          throw _iteratorError11;
        }
      }
    }

    if (!Array.isArray(change.deps)) throw new TypeError('deps is not an array');
    encoder.appendUint53(change.deps.length);
    var _iteratorNormalCompletion12 = true;
    var _didIteratorError12 = false;
    var _iteratorError12 = undefined;

    try {
      for (var _iterator12 = change.deps.slice().sort()[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
        var _hash = _step12.value;

        encoder.appendRawBytes(hexStringToBytes(_hash));
      }
    } catch (err) {
      _didIteratorError12 = true;
      _iteratorError12 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion12 && _iterator12.return) {
          _iterator12.return();
        }
      } finally {
        if (_didIteratorError12) {
          throw _iteratorError12;
        }
      }
    }
  }),
      hash = _encodeContainer.hash,
      bytes = _encodeContainer.bytes;

  var hexHash = bytesToHexString(hash);
  if (changeObj.hash && changeObj.hash !== hexHash) {
    throw new RangeError('Change hash does not match encoding: ' + changeObj.hash + ' != ' + hexHash);
  }
  return bytes;
}

function decodeChangeColumns(buffer) {
  var decoder = new Decoder(buffer);
  var header = decodeContainerHeader(decoder, true);
  var chunkDecoder = new Decoder(header.chunkData);
  if (!decoder.done) throw new RangeError('Encoded change has trailing data');
  if (header.chunkType !== 1) throw new RangeError('Unexpected chunk type: ' + header.chunkType);

  var change = decodeChangeHeader(chunkDecoder);
  change.hash = header.hash;
  change.columns = readColumns(chunkDecoder);
  return change;
}

/**
 * Decodes one change in binary format into its JS object representation.
 */
function decodeChange(buffer) {
  var change = decodeChangeColumns(buffer);
  change.ops = decodeOps(decodeColumns(change.columns, change.actorIds, CHANGE_COLUMNS), false);
  delete change.actorIds;
  delete change.columns;
  return change;
}

/**
 * Decodes the header fields of a change in binary format, but does not decode
 * the operations. Saves work when we only need to inspect the headers. Only
 * computes the hash of the change if `computeHash` is true.
 */
function decodeChangeMeta(buffer, computeHash) {
  var header = decodeContainerHeader(new Decoder(buffer), computeHash);
  if (header.chunkType !== 1) {
    throw new RangeError('Buffer chunk type is not a change');
  }
  var meta = decodeChangeHeader(new Decoder(header.chunkData));
  if (computeHash) meta.hash = header.hash;
  return meta;
}

/**
 * Takes an Uint8Array that may contain multiple concatenated changes, and
 * returns an array of subarrays, each subarray containing one change.
 */
function splitContainers(buffer) {
  var decoder = new Decoder(buffer),
      chunks = [],
      startOffset = 0;
  while (!decoder.done) {
    decodeContainerHeader(decoder, false);
    chunks.push(buffer.subarray(startOffset, decoder.offset));
    startOffset = decoder.offset;
  }
  return chunks;
}

/**
 * Decodes a list of changes from the binary format into JS objects.
 * `binaryChanges` is an array of `Uint8Array` objects.
 */
function decodeChanges(binaryChanges) {
  var decoded = [];
  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    for (var _iterator13 = binaryChanges[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      var binaryChange = _step13.value;
      var _iteratorNormalCompletion14 = true;
      var _didIteratorError14 = false;
      var _iteratorError14 = undefined;

      try {
        for (var _iterator14 = splitContainers(binaryChange)[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
          var chunk = _step14.value;

          if (chunk[8] === 0) {
            decoded = decoded.concat(decodeDocument(chunk));
          } else if (chunk[8] === 1) {
            decoded.push(decodeChange(chunk));
          } else {
            // ignoring chunk of unknown type
          }
        }
      } catch (err) {
        _didIteratorError14 = true;
        _iteratorError14 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion14 && _iterator14.return) {
            _iterator14.return();
          }
        } finally {
          if (_didIteratorError14) {
            throw _iteratorError14;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion13 && _iterator13.return) {
        _iterator13.return();
      }
    } finally {
      if (_didIteratorError13) {
        throw _iteratorError13;
      }
    }
  }

  return decoded;
}

function sortOpIds(a, b) {
  if (a === b) return 0;
  if (a === ROOT_ID) return -1;
  if (b === ROOT_ID) return +1;
  var a_ = parseOpId(a),
      b_ = parseOpId(b);
  if (a_.counter < b_.counter) return -1;
  if (a_.counter > b_.counter) return +1;
  if (a_.actorId < b_.actorId) return -1;
  if (a_.actorId > b_.actorId) return +1;
  return 0;
}

function groupDocumentOps(changes) {
  var byObjectId = {},
      byReference = {},
      objectType = {};
  var _iteratorNormalCompletion15 = true;
  var _didIteratorError15 = false;
  var _iteratorError15 = undefined;

  try {
    for (var _iterator15 = changes[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
      var change = _step15.value;

      for (var i = 0; i < change.ops.length; i++) {
        var op = change.ops[i],
            opId = op.id.counter + '@' + op.id.actorId;
        var _objectId = op.obj.value === ROOT_ID ? ROOT_ID : op.obj.counter + '@' + op.obj.actorId;
        if (op.action.startsWith('make')) {
          objectType[opId] = op.action;
          if (op.action === 'makeList' || op.action === 'makeText') {
            byReference[opId] = { '_head': [] };
          }
        }

        var key = void 0;
        if (_objectId === ROOT_ID || objectType[_objectId] === 'makeMap' || objectType[_objectId] === 'makeTable') {
          key = op.key.value;
        } else if (objectType[_objectId] === 'makeList' || objectType[_objectId] === 'makeText') {
          if (op.insert) {
            key = opId;
            var ref = op.key.value === '_head' ? '_head' : op.key.counter + '@' + op.key.actorId;
            byReference[_objectId][ref].push(opId);
            byReference[_objectId][opId] = [];
          } else {
            key = op.key.counter + '@' + op.key.actorId;
          }
        } else {
          throw new RangeError('Unknown object type for object ' + _objectId);
        }

        if (!byObjectId[_objectId]) byObjectId[_objectId] = {};
        if (!byObjectId[_objectId][key]) byObjectId[_objectId][key] = {};
        byObjectId[_objectId][key][opId] = op;
        op.succ = [];

        var _iteratorNormalCompletion17 = true;
        var _didIteratorError17 = false;
        var _iteratorError17 = undefined;

        try {
          for (var _iterator17 = op.pred[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
            var pred = _step17.value;

            var predId = pred.counter + '@' + pred.actorId;
            if (!byObjectId[_objectId][key][predId]) {
              throw new RangeError('No predecessor operation ' + predId);
            }
            byObjectId[_objectId][key][predId].succ.push(op.id);
          }
        } catch (err) {
          _didIteratorError17 = true;
          _iteratorError17 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion17 && _iterator17.return) {
              _iterator17.return();
            }
          } finally {
            if (_didIteratorError17) {
              throw _iteratorError17;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError15 = true;
    _iteratorError15 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion15 && _iterator15.return) {
        _iterator15.return();
      }
    } finally {
      if (_didIteratorError15) {
        throw _iteratorError15;
      }
    }
  }

  var ops = [];
  var _iteratorNormalCompletion16 = true;
  var _didIteratorError16 = false;
  var _iteratorError16 = undefined;

  try {
    for (var _iterator16 = Object.keys(byObjectId).sort(sortOpIds)[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
      var objectId = _step16.value;

      var keys = [];
      if (objectType[objectId] === 'makeList' || objectType[objectId] === 'makeText') {
        var stack = ['_head'];
        while (stack.length > 0) {
          var _key = stack.pop();
          if (_key !== '_head') keys.push(_key);
          var _iteratorNormalCompletion18 = true;
          var _didIteratorError18 = false;
          var _iteratorError18 = undefined;

          try {
            for (var _iterator18 = byReference[objectId][_key].sort(sortOpIds)[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
              var _opId = _step18.value;
              stack.push(_opId);
            }
          } catch (err) {
            _didIteratorError18 = true;
            _iteratorError18 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion18 && _iterator18.return) {
                _iterator18.return();
              }
            } finally {
              if (_didIteratorError18) {
                throw _iteratorError18;
              }
            }
          }
        }
      } else {
        // FIXME JavaScript sorts based on UTF-16 encoding. We should change this to use the UTF-8
        // encoding instead (the sort order will be different beyond the basic multilingual plane)
        keys = Object.keys(byObjectId[objectId]).sort();
      }

      var _iteratorNormalCompletion19 = true;
      var _didIteratorError19 = false;
      var _iteratorError19 = undefined;

      try {
        for (var _iterator19 = keys[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
          var _key2 = _step19.value;
          var _iteratorNormalCompletion20 = true;
          var _didIteratorError20 = false;
          var _iteratorError20 = undefined;

          try {
            for (var _iterator20 = Object.keys(byObjectId[objectId][_key2]).sort(sortOpIds)[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
              var _opId2 = _step20.value;

              var _op = byObjectId[objectId][_key2][_opId2];
              if (_op.action !== 'del') ops.push(_op);
            }
          } catch (err) {
            _didIteratorError20 = true;
            _iteratorError20 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion20 && _iterator20.return) {
                _iterator20.return();
              }
            } finally {
              if (_didIteratorError20) {
                throw _iteratorError20;
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError19 = true;
        _iteratorError19 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion19 && _iterator19.return) {
            _iterator19.return();
          }
        } finally {
          if (_didIteratorError19) {
            throw _iteratorError19;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError16 = true;
    _iteratorError16 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion16 && _iterator16.return) {
        _iterator16.return();
      }
    } finally {
      if (_didIteratorError16) {
        throw _iteratorError16;
      }
    }
  }

  return ops;
}

/**
 * Takes a set of operations `ops` loaded from an encoded document, and
 * reconstructs the changes that they originally came from.
 * Does not return anything, only mutates `changes`.
 */
function groupChangeOps(changes, ops) {
  var changesByActor = {}; // map from actorId to array of changes by that actor
  var _iteratorNormalCompletion21 = true;
  var _didIteratorError21 = false;
  var _iteratorError21 = undefined;

  try {
    for (var _iterator21 = changes[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
      var change = _step21.value;

      change.ops = [];
      if (!changesByActor[change.actor]) changesByActor[change.actor] = [];
      if (change.seq !== changesByActor[change.actor].length + 1) {
        throw new RangeError('Expected seq = ' + (changesByActor[change.actor].length + 1) + ', got ' + change.seq);
      }
      if (change.seq > 1 && changesByActor[change.actor][change.seq - 2].maxOp > change.maxOp) {
        throw new RangeError('maxOp must increase monotonically per actor');
      }
      changesByActor[change.actor].push(change);
    }
  } catch (err) {
    _didIteratorError21 = true;
    _iteratorError21 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion21 && _iterator21.return) {
        _iterator21.return();
      }
    } finally {
      if (_didIteratorError21) {
        throw _iteratorError21;
      }
    }
  }

  var opsById = {};
  var _iteratorNormalCompletion22 = true;
  var _didIteratorError22 = false;
  var _iteratorError22 = undefined;

  try {
    for (var _iterator22 = ops[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
      var op = _step22.value;

      if (op.action === 'del') throw new RangeError('document should not contain del operations');
      op.pred = opsById[op.id] ? opsById[op.id].pred : [];
      opsById[op.id] = op;
      var _iteratorNormalCompletion26 = true;
      var _didIteratorError26 = false;
      var _iteratorError26 = undefined;

      try {
        for (var _iterator26 = op.succ[Symbol.iterator](), _step26; !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
          var succ = _step26.value;

          if (!opsById[succ]) {
            var key = op.insert ? op.id : op.key;
            opsById[succ] = { id: succ, action: 'del', obj: op.obj, key: key, pred: [] };
          }
          opsById[succ].pred.push(op.id);
        }
      } catch (err) {
        _didIteratorError26 = true;
        _iteratorError26 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion26 && _iterator26.return) {
            _iterator26.return();
          }
        } finally {
          if (_didIteratorError26) {
            throw _iteratorError26;
          }
        }
      }

      delete op.succ;
    }
  } catch (err) {
    _didIteratorError22 = true;
    _iteratorError22 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion22 && _iterator22.return) {
        _iterator22.return();
      }
    } finally {
      if (_didIteratorError22) {
        throw _iteratorError22;
      }
    }
  }

  var _iteratorNormalCompletion23 = true;
  var _didIteratorError23 = false;
  var _iteratorError23 = undefined;

  try {
    for (var _iterator23 = Object.values(opsById)[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
      var _op2 = _step23.value;

      if (_op2.action === 'del') ops.push(_op2);
    }
  } catch (err) {
    _didIteratorError23 = true;
    _iteratorError23 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion23 && _iterator23.return) {
        _iterator23.return();
      }
    } finally {
      if (_didIteratorError23) {
        throw _iteratorError23;
      }
    }
  }

  var _iteratorNormalCompletion24 = true;
  var _didIteratorError24 = false;
  var _iteratorError24 = undefined;

  try {
    for (var _iterator24 = ops[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
      var _op3 = _step24.value;

      var _parseOpId = parseOpId(_op3.id),
          counter = _parseOpId.counter,
          actorId = _parseOpId.actorId;

      var actorChanges = changesByActor[actorId];
      // Binary search to find the change that should contain this operation
      var left = 0,
          right = actorChanges.length;
      while (left < right) {
        var index = Math.floor((left + right) / 2);
        if (actorChanges[index].maxOp < counter) {
          left = index + 1;
        } else {
          right = index;
        }
      }
      if (left >= actorChanges.length) {
        throw new RangeError('Operation ID ' + _op3.id + ' outside of allowed range');
      }
      actorChanges[left].ops.push(_op3);
    }
  } catch (err) {
    _didIteratorError24 = true;
    _iteratorError24 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion24 && _iterator24.return) {
        _iterator24.return();
      }
    } finally {
      if (_didIteratorError24) {
        throw _iteratorError24;
      }
    }
  }

  var _iteratorNormalCompletion25 = true;
  var _didIteratorError25 = false;
  var _iteratorError25 = undefined;

  try {
    for (var _iterator25 = changes[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
      var _change2 = _step25.value;

      _change2.ops.sort(function (op1, op2) {
        return sortOpIds(op1.id, op2.id);
      });
      _change2.startOp = _change2.maxOp - _change2.ops.length + 1;
      delete _change2.maxOp;
      for (var i = 0; i < _change2.ops.length; i++) {
        var _op4 = _change2.ops[i],
            expectedId = _change2.startOp + i + '@' + _change2.actor;
        if (_op4.id !== expectedId) {
          throw new RangeError('Expected opId ' + expectedId + ', got ' + _op4.id);
        }
        delete _op4.id;
      }
    }
  } catch (err) {
    _didIteratorError25 = true;
    _iteratorError25 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion25 && _iterator25.return) {
        _iterator25.return();
      }
    } finally {
      if (_didIteratorError25) {
        throw _iteratorError25;
      }
    }
  }
}

function encodeDocumentChanges(changes) {
  var columns = { // see DOCUMENT_COLUMNS
    actor: new RLEEncoder('uint'),
    seq: new DeltaEncoder(),
    maxOp: new DeltaEncoder(),
    time: new DeltaEncoder(),
    message: new RLEEncoder('utf8'),
    depsNum: new RLEEncoder('uint'),
    depsIndex: new DeltaEncoder()
  };
  var indexByHash = {}; // map from change hash to its index in the changes array
  var heads = {}; // change hashes that are not a dependency of any other change

  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];
    indexByHash[change.hash] = i;
    heads[change.hash] = true;

    columns.actor.appendValue(change.actorNum);
    columns.seq.appendValue(change.seq);
    columns.maxOp.appendValue(change.startOp + change.ops.length - 1);
    columns.time.appendValue(change.time);
    columns.message.appendValue(change.message);
    columns.depsNum.appendValue(change.deps.length);

    var _iteratorNormalCompletion27 = true;
    var _didIteratorError27 = false;
    var _iteratorError27 = undefined;

    try {
      for (var _iterator27 = change.deps[Symbol.iterator](), _step27; !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
        var dep = _step27.value;

        if (typeof indexByHash[dep] !== 'number') {
          throw new RangeError('Unknown dependency hash: ' + dep);
        }
        columns.depsIndex.appendValue(indexByHash[dep]);
        if (heads[dep]) delete heads[dep];
      }
    } catch (err) {
      _didIteratorError27 = true;
      _iteratorError27 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion27 && _iterator27.return) {
          _iterator27.return();
        }
      } finally {
        if (_didIteratorError27) {
          throw _iteratorError27;
        }
      }
    }
  }

  var changesColumns = [];
  var _iteratorNormalCompletion28 = true;
  var _didIteratorError28 = false;
  var _iteratorError28 = undefined;

  try {
    for (var _iterator28 = Object.entries(DOCUMENT_COLUMNS)[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
      var _ref9 = _step28.value;

      var _ref10 = _slicedToArray(_ref9, 2);

      var name = _ref10[0];
      var id = _ref10[1];

      changesColumns.push({ id: id, name: name, encoder: columns[name] });
    }
  } catch (err) {
    _didIteratorError28 = true;
    _iteratorError28 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion28 && _iterator28.return) {
        _iterator28.return();
      }
    } finally {
      if (_didIteratorError28) {
        throw _iteratorError28;
      }
    }
  }

  changesColumns.sort(function (a, b) {
    return a.id - b.id;
  });
  return { changesColumns: changesColumns, heads: Object.keys(heads).sort() };
}

function decodeDocumentChanges(changes, expectedHeads) {
  var heads = {}; // change hashes that are not a dependency of any other change
  for (var _i3 = 0; _i3 < changes.length; _i3++) {
    var change = changes[_i3];
    change.deps = [];
    var _iteratorNormalCompletion29 = true;
    var _didIteratorError29 = false;
    var _iteratorError29 = undefined;

    try {
      for (var _iterator29 = change.depsNum.map(function (d) {
        return d.depsIndex;
      })[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
        var index = _step29.value;

        if (!changes[index] || !changes[index].hash) {
          throw new RangeError('No hash for index ' + index + ' while processing index ' + _i3);
        }
        var hash = changes[index].hash;
        change.deps.push(hash);
        if (heads[hash]) delete heads[hash];
      }
    } catch (err) {
      _didIteratorError29 = true;
      _iteratorError29 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion29 && _iterator29.return) {
          _iterator29.return();
        }
      } finally {
        if (_didIteratorError29) {
          throw _iteratorError29;
        }
      }
    }

    change.deps.sort();
    delete change.depsNum;

    // Encoding and decoding again to compute the hash of the change
    changes[_i3] = decodeChange(encodeChange(change));
    heads[changes[_i3].hash] = true;
  }

  var actualHeads = Object.keys(heads).sort();
  var headsEqual = actualHeads.length === expectedHeads.length,
      i = 0;
  while (headsEqual && i < actualHeads.length) {
    headsEqual = actualHeads[i] === expectedHeads[i];
    i++;
  }
  if (!headsEqual) {
    throw new RangeError('Mismatched heads hashes: expected ' + expectedHeads.join(', ') + ', got ' + actualHeads.join(', '));
  }
}

/**
 * Transforms a list of changes into a binary representation of the document state.
 */
function encodeDocument(binaryChanges) {
  var _parseAllOpIds2 = parseAllOpIds(decodeChanges(binaryChanges), false),
      changes = _parseAllOpIds2.changes,
      actorIds = _parseAllOpIds2.actorIds;

  var _encodeDocumentChange = encodeDocumentChanges(changes),
      changesColumns = _encodeDocumentChange.changesColumns,
      heads = _encodeDocumentChange.heads;

  var opsColumns = encodeOps(groupDocumentOps(changes), true);

  var numChangesColumns = 0;
  var _iteratorNormalCompletion30 = true;
  var _didIteratorError30 = false;
  var _iteratorError30 = undefined;

  try {
    for (var _iterator30 = changesColumns[Symbol.iterator](), _step30; !(_iteratorNormalCompletion30 = (_step30 = _iterator30.next()).done); _iteratorNormalCompletion30 = true) {
      var column = _step30.value;

      if (column.encoder.buffer.byteLength > 0) numChangesColumns++;
    }
  } catch (err) {
    _didIteratorError30 = true;
    _iteratorError30 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion30 && _iterator30.return) {
        _iterator30.return();
      }
    } finally {
      if (_didIteratorError30) {
        throw _iteratorError30;
      }
    }
  }

  return encodeContainer('document', changesColumns.concat(opsColumns), function (encoder) {
    encoder.appendUint53(actorIds.length);
    var _iteratorNormalCompletion31 = true;
    var _didIteratorError31 = false;
    var _iteratorError31 = undefined;

    try {
      for (var _iterator31 = actorIds[Symbol.iterator](), _step31; !(_iteratorNormalCompletion31 = (_step31 = _iterator31.next()).done); _iteratorNormalCompletion31 = true) {
        var actor = _step31.value;

        encoder.appendHexString(actor);
      }
    } catch (err) {
      _didIteratorError31 = true;
      _iteratorError31 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion31 && _iterator31.return) {
          _iterator31.return();
        }
      } finally {
        if (_didIteratorError31) {
          throw _iteratorError31;
        }
      }
    }

    encoder.appendUint53(heads.length);
    var _iteratorNormalCompletion32 = true;
    var _didIteratorError32 = false;
    var _iteratorError32 = undefined;

    try {
      for (var _iterator32 = heads.sort()[Symbol.iterator](), _step32; !(_iteratorNormalCompletion32 = (_step32 = _iterator32.next()).done); _iteratorNormalCompletion32 = true) {
        var head = _step32.value;

        encoder.appendRawBytes(hexStringToBytes(head));
      }
    } catch (err) {
      _didIteratorError32 = true;
      _iteratorError32 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion32 && _iterator32.return) {
          _iterator32.return();
        }
      } finally {
        if (_didIteratorError32) {
          throw _iteratorError32;
        }
      }
    }

    encoder.appendUint53(numChangesColumns);
  }).bytes;
}

function decodeDocumentHeader(buffer) {
  var documentDecoder = new Decoder(buffer);
  var header = decodeContainerHeader(documentDecoder, true);
  var decoder = new Decoder(header.chunkData);
  if (!documentDecoder.done) throw new RangeError('Encoded document has trailing data');
  if (header.chunkType !== 0) throw new RangeError('Unexpected chunk type: ' + header.chunkType);

  var actorIds = [],
      numActors = decoder.readUint53();
  for (var i = 0; i < numActors; i++) {
    actorIds.push(decoder.readHexString());
  }
  var heads = [],
      numHeads = decoder.readUint53();
  for (var _i4 = 0; _i4 < numHeads; _i4++) {
    heads.push(bytesToHexString(decoder.readRawBytes(32)));
  }

  var changesColumns = readColumns(decoder, decoder.readUint53());
  var opsColumns = readColumns(decoder);
  return { changesColumns: changesColumns, opsColumns: opsColumns, actorIds: actorIds, heads: heads };
}

function decodeDocument(buffer) {
  var _decodeDocumentHeader = decodeDocumentHeader(buffer),
      changesColumns = _decodeDocumentHeader.changesColumns,
      opsColumns = _decodeDocumentHeader.opsColumns,
      actorIds = _decodeDocumentHeader.actorIds,
      heads = _decodeDocumentHeader.heads;

  var changes = decodeColumns(changesColumns, actorIds, DOCUMENT_COLUMNS);
  var ops = decodeOps(decodeColumns(opsColumns, actorIds, DOC_OPS_COLUMNS), true);
  groupChangeOps(changes, ops);
  decodeDocumentChanges(changes, heads);
  return changes;
}

/**
 * Takes all the operations for the same property (i.e. the same key in a map, or the same list
 * element) and mutates the object patch to reflect the current value(s) of that property. There
 * might be multiple values in the case of a conflict. `objects` is a map from objectId to the
 * patch for that object. `property` contains `objId`, `key`, and list of `ops`.
 */
function addPatchProperty(objects, property) {
  var values = {},
      counter = null;
  var _iteratorNormalCompletion33 = true;
  var _didIteratorError33 = false;
  var _iteratorError33 = undefined;

  try {
    for (var _iterator33 = property.ops[Symbol.iterator](), _step33; !(_iteratorNormalCompletion33 = (_step33 = _iterator33.next()).done); _iteratorNormalCompletion33 = true) {
      var op = _step33.value;

      // Apply counters and their increments regardless of the number of successor operations
      if (op.actionName === 'set' && op.value.datatype === 'counter') {
        if (!counter) counter = { opId: op.opId, value: 0, succ: {} };
        counter.value += op.value.value;
        var _iteratorNormalCompletion34 = true;
        var _didIteratorError34 = false;
        var _iteratorError34 = undefined;

        try {
          for (var _iterator34 = op.succ[Symbol.iterator](), _step34; !(_iteratorNormalCompletion34 = (_step34 = _iterator34.next()).done); _iteratorNormalCompletion34 = true) {
            var succId = _step34.value;
            counter.succ[succId] = true;
          }
        } catch (err) {
          _didIteratorError34 = true;
          _iteratorError34 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion34 && _iterator34.return) {
              _iterator34.return();
            }
          } finally {
            if (_didIteratorError34) {
              throw _iteratorError34;
            }
          }
        }
      } else if (op.actionName === 'inc') {
        if (!counter) throw new RangeError('inc operation ' + op.opId + ' without a counter');
        counter.value += op.value.value;
        delete counter.succ[op.opId];
        var _iteratorNormalCompletion35 = true;
        var _didIteratorError35 = false;
        var _iteratorError35 = undefined;

        try {
          for (var _iterator35 = op.succ[Symbol.iterator](), _step35; !(_iteratorNormalCompletion35 = (_step35 = _iterator35.next()).done); _iteratorNormalCompletion35 = true) {
            var _succId = _step35.value;
            counter.succ[_succId] = true;
          }
        } catch (err) {
          _didIteratorError35 = true;
          _iteratorError35 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion35 && _iterator35.return) {
              _iterator35.return();
            }
          } finally {
            if (_didIteratorError35) {
              throw _iteratorError35;
            }
          }
        }
      } else if (op.succ.length === 0) {
        // Ignore any ops that have been overwritten
        if (op.actionName.startsWith('make')) {
          values[op.opId] = objects[op.opId];
        } else if (op.actionName === 'set') {
          values[op.opId] = op.value;
        } else if (op.actionName === 'link') {
          // NB. This assumes that the ID of the child object is greater than the ID of the current
          // object. This is true as long as link operations are only used to redo undone make*
          // operations, but it will cease to be true once subtree moves are allowed.
          if (!op.childId) throw new RangeError('link operation ' + op.opId + ' without a childId');
          values[op.opId] = objects[op.childId];
        } else {
          throw new RangeError('Unexpected action type: ' + op.actionName);
        }
      }
    }

    // If the counter had any successor operation that was not an increment, that means the counter
    // must have been deleted, so we omit it from the patch.
  } catch (err) {
    _didIteratorError33 = true;
    _iteratorError33 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion33 && _iterator33.return) {
        _iterator33.return();
      }
    } finally {
      if (_didIteratorError33) {
        throw _iteratorError33;
      }
    }
  }

  if (counter && Object.keys(counter.succ).length === 0) {
    values[counter.opId] = { value: counter.value, datatype: 'counter' };
  }

  if (Object.keys(values).length > 0) {
    var obj = objects[property.objId];
    if (!obj.props) obj.props = {};
    if (obj.type === 'map' || obj.type === 'table') {
      obj.props[property.key] = values;
    } else if (obj.type === 'list' || obj.type === 'text') {
      if (!obj.edits) obj.edits = [];
      obj.props[obj.edits.length] = values;
      obj.edits.push({ action: 'insert', index: obj.edits.length });
    }
  }
}

/**
 * Parses the document (in compressed binary format) given as `documentBuffer`
 * and returns a patch that can be sent to the frontend to instantiate the
 * current state of that document.
 */
function constructPatch(documentBuffer) {
  var _decodeDocumentHeader2 = decodeDocumentHeader(documentBuffer),
      opsColumns = _decodeDocumentHeader2.opsColumns,
      actorIds = _decodeDocumentHeader2.actorIds;

  var col = makeDecoders(opsColumns, DOC_OPS_COLUMNS).reduce(function (acc, col) {
    return Object.assign(acc, _defineProperty({}, col.columnName, col.decoder));
  }, {});

  var objects = _defineProperty({}, ROOT_ID, { objectId: ROOT_ID, type: 'map' });
  var property = null;

  while (!col.idActor.done) {
    var opId = col.idCtr.readValue() + '@' + actorIds[col.idActor.readValue()];
    var action = col.action.readValue(),
        actionName = ACTIONS[action];
    if (action % 2 === 0) {
      // even-numbered actions are object creation
      objects[opId] = { objectId: opId, type: OBJECT_TYPE[actionName] || 'unknown' };
    }

    var objActor = col.objActor.readValue(),
        objCtr = col.objCtr.readValue();
    var objId = objActor === null ? ROOT_ID : objCtr + '@' + actorIds[objActor];
    var obj = objects[objId];
    if (!obj) throw new RangeError('Operation for nonexistent object: ' + objId);

    var keyActor = col.keyActor.readValue(),
        keyCtr = col.keyCtr.readValue();
    var keyStr = col.keyStr.readValue(),
        insert = !!col.insert.readValue();
    var chldActor = col.chldActor.readValue(),
        chldCtr = col.chldCtr.readValue();
    var childId = chldActor === null ? null : chldCtr + '@' + actorIds[chldActor];
    var sizeTag = col.valLen.readValue();
    var rawValue = col.valRaw.readRawBytes(sizeTag >> 4);
    var value = decodeValue(sizeTag, rawValue);
    var succNum = col.succNum.readValue();
    var succ = [];
    for (var i = 0; i < succNum; i++) {
      succ.push(col.succCtr.readValue() + '@' + actorIds[col.succActor.readValue()]);
    }

    if (!actionName || obj.type === 'unknown') continue;

    var key = void 0;
    if (obj.type === 'list' || obj.type === 'text') {
      if (keyCtr === null || keyCtr === 0 && !insert) {
        throw new RangeError('Operation ' + opId + ' on ' + obj.type + ' object has no key');
      }
      key = insert ? opId : keyCtr + '@' + actorIds[keyActor];
    } else {
      if (keyStr === null) {
        throw new RangeError('Operation ' + opId + ' on ' + obj.type + ' object has no key');
      }
      key = keyStr;
    }

    if (!property || property.objId !== objId || property.key !== key) {
      if (property) addPatchProperty(objects, property);
      property = { objId: objId, key: key, ops: [] };
    }
    property.ops.push({ opId: opId, actionName: actionName, value: value, childId: childId, succ: succ });
  }

  if (property) addPatchProperty(objects, property);
  return objects[ROOT_ID];
}

/**
 * Scans a chunk of document operations, encoded as columns `docCols`, to find the position at which
 * an operation (or sequence of operations) `ops` should be applied. Returns an object with keys:
 *   - `skipCount`: the number of operations, counted from the start of the chunk, after which the
 *     new operations should be inserted or applied.
 *   - `visibleCount`: if modifying a list object, the number of visible (i.e. non-deleted) list
 *     elements that precede the position where the new operations should be applied.
 */
function seekToOp(ops, docCols, actorIds) {
  var objActor = ops.objActor,
      objCtr = ops.objCtr,
      keyActor = ops.keyActor,
      keyCtr = ops.keyCtr,
      keyStr = ops.keyStr,
      idActor = ops.idActor,
      idCtr = ops.idCtr,
      insert = ops.insert,
      action = ops.action,
      consecutiveOps = ops.consecutiveOps;

  var _docCols$map = docCols.map(function (col) {
    return col.decoder;
  }),
      _docCols$map2 = _slicedToArray(_docCols$map, 14),
      objActorD = _docCols$map2[0],
      objCtrD = _docCols$map2[1],
      keyActorD = _docCols$map2[2],
      keyCtrD = _docCols$map2[3],
      keyStrD = _docCols$map2[4],
      idActorD = _docCols$map2[5],
      idCtrD = _docCols$map2[6],
      insertD = _docCols$map2[7],
      actionD = _docCols$map2[8],
      valLenD = _docCols$map2[9],
      valRawD = _docCols$map2[10],
      chldActorD = _docCols$map2[11],
      chldCtrD = _docCols$map2[12],
      succNumD = _docCols$map2[13];

  var skipCount = 0,
      visibleCount = 0,
      elemVisible = false,
      nextObjActor = null,
      nextObjCtr = null;
  var nextIdActor = null,
      nextIdCtr = null,
      nextKeyStr = null,
      nextInsert = null,
      nextSuccNum = 0;

  // Seek to the beginning of the object being updated
  if (objCtr !== null) {
    while (!objCtrD.done || !objActorD.done || !actionD.done) {
      nextObjCtr = objCtrD.readValue();
      nextObjActor = actorIds[objActorD.readValue()];
      actionD.skipValues(1);
      if (nextObjCtr === null || !nextObjActor || nextObjCtr < objCtr || nextObjCtr === objCtr && nextObjActor < objActor) {
        skipCount += 1;
      } else {
        break;
      }
    }
  }
  if (nextObjCtr !== objCtr || nextObjActor !== objActor) return { skipCount: skipCount, visibleCount: visibleCount

    // Seek to the appropriate key (if string key is used)
  };if (keyStr !== null) {
    keyStrD.skipValues(skipCount);
    while (!keyStrD.done) {
      var objActorIndex = objActorD.readValue();
      nextObjActor = objActorIndex === null ? null : actorIds[objActorIndex];
      nextObjCtr = objCtrD.readValue();
      nextKeyStr = keyStrD.readValue();
      if (nextKeyStr !== null && nextKeyStr < keyStr && nextObjCtr === objCtr && nextObjActor === objActor) {
        skipCount += 1;
      } else {
        break;
      }
    }
    return { skipCount: skipCount, visibleCount: visibleCount };
  }

  idCtrD.skipValues(skipCount);
  idActorD.skipValues(skipCount);
  insertD.skipValues(skipCount);
  succNumD.skipValues(skipCount);
  nextIdCtr = idCtrD.readValue();
  nextIdActor = actorIds[idActorD.readValue()];
  nextInsert = insertD.readValue();
  nextSuccNum = succNumD.readValue();

  // If we are inserting into a list, an opId key is used, and we need to seek to a position *after*
  // the referenced operation. Moreover, we need to skip over any existing operations with a greater
  // opId than the new insertion, for CRDT convergence on concurrent insertions in the same place.
  if (insert) {
    // If insertion is not at the head, search for the reference element
    if (keyCtr !== null && keyCtr > 0 && keyActor !== null) {
      skipCount += 1;
      while (!idCtrD.done && !idActorD.done && (nextIdCtr !== keyCtr || nextIdActor !== keyActor)) {
        if (nextInsert) elemVisible = false;
        if (nextSuccNum === 0 && !elemVisible) {
          visibleCount += 1;
          elemVisible = true;
        }
        nextIdCtr = idCtrD.readValue();
        nextIdActor = actorIds[idActorD.readValue()];
        nextObjCtr = objCtrD.readValue();
        nextObjActor = actorIds[objActorD.readValue()];
        nextInsert = insertD.readValue();
        nextSuccNum = succNumD.readValue();
        if (nextObjCtr === objCtr && nextObjActor === objActor) skipCount += 1;else break;
      }
      if (nextObjCtr !== objCtr || nextObjActor !== objActor || nextIdCtr !== keyCtr || nextIdActor !== keyActor || !nextInsert) {
        throw new RangeError('Reference element not found: ' + keyCtr + '@' + keyActor);
      }
      if (nextInsert) elemVisible = false;
      if (nextSuccNum === 0 && !elemVisible) {
        visibleCount += 1;
        elemVisible = true;
      }

      // Set up the next* variables to the operation following the reference element
      if (idCtrD.done || idActorD.done) return { skipCount: skipCount, visibleCount: visibleCount };
      nextIdCtr = idCtrD.readValue();
      nextIdActor = actorIds[idActorD.readValue()];
      nextObjCtr = objCtrD.readValue();
      nextObjActor = actorIds[objActorD.readValue()];
      nextInsert = insertD.readValue();
      nextSuccNum = succNumD.readValue();
    }

    // Skip over any list elements with greater ID than the new one, and any non-insertions
    while ((!nextInsert || nextIdCtr > idCtr || nextIdCtr === idCtr && nextIdActor > idActor) && nextObjCtr === objCtr && nextObjActor === objActor) {
      skipCount += 1;
      if (nextInsert) elemVisible = false;
      if (nextSuccNum === 0 && !elemVisible) {
        visibleCount += 1;
        elemVisible = true;
      }
      if (!idCtrD.done && !idActorD.done) {
        nextIdCtr = idCtrD.readValue();
        nextIdActor = actorIds[idActorD.readValue()];
        nextObjCtr = objCtrD.readValue();
        nextObjActor = actorIds[objActorD.readValue()];
        nextInsert = insertD.readValue();
        nextSuccNum = succNumD.readValue();
      } else {
        break;
      }
    }
  } else if (keyCtr !== null && keyCtr > 0 && keyActor !== null) {
    // If we are updating an existing list element, seek to just before the referenced ID
    while ((!nextInsert || nextIdCtr !== keyCtr || nextIdActor !== keyActor) && nextObjCtr === objCtr && nextObjActor === objActor) {
      skipCount += 1;
      if (nextInsert) elemVisible = false;
      if (nextSuccNum === 0 && !elemVisible) {
        visibleCount += 1;
        elemVisible = true;
      }
      if (!idCtrD.done && !idActorD.done) {
        nextIdCtr = idCtrD.readValue();
        nextIdActor = actorIds[idActorD.readValue()];
        nextObjCtr = objCtrD.readValue();
        nextObjActor = actorIds[objActorD.readValue()];
        nextInsert = insertD.readValue();
        nextSuccNum = succNumD.readValue();
      } else {
        break;
      }
    }
    if (nextObjCtr !== objCtr || nextObjActor !== objActor || nextIdCtr !== keyCtr || nextIdActor !== keyActor || !nextInsert) {
      throw new RangeError('Element not found for update: ' + keyCtr + '@' + keyActor);
    }
  }
  return { skipCount: skipCount, visibleCount: visibleCount };
}

/**
 * Copies `count` rows from the set of input columns `inCols` to the set of output columns
 * `outCols`. The input columns are given as an array of `{columnId, decoder}` objects, and the
 * output columns are given as an array of `{columnId, encoder}` objects. Both are sorted in
 * increasing order of columnId. If there is no matching input column for a given output column, it
 * is filled in with `count` blank values (according to the column type).
 */
function copyColumns(outCols, inCols, count) {
  if (count === 0) return;
  var inIndex = 0,
      lastGroup = -1,
      lastCardinality = 0,
      valueColumn = -1,
      valueBytes = 0;
  var _iteratorNormalCompletion36 = true;
  var _didIteratorError36 = false;
  var _iteratorError36 = undefined;

  try {
    for (var _iterator36 = outCols[Symbol.iterator](), _step36; !(_iteratorNormalCompletion36 = (_step36 = _iterator36.next()).done); _iteratorNormalCompletion36 = true) {
      var outCol = _step36.value;

      while (inIndex < inCols.length && inCols[inIndex].columnId < outCol.columnId) {
        inIndex++;
      }var inCol = null;
      if (inIndex < inCols.length && inCols[inIndex].columnId === outCol.columnId && inCols[inIndex].decoder.buf.byteLength > 0) {
        inCol = inCols[inIndex].decoder;
      }
      var colCount = outCol.columnId >> 3 === lastGroup ? lastCardinality : count;

      if (outCol.columnId % 8 === COLUMN_TYPE.GROUP_CARD) {
        lastGroup = outCol.columnId >> 3;
        if (inCol) {
          lastCardinality = outCol.encoder.copyFrom(inCol, { count: count, sumValues: true }).sum;
        } else {
          outCol.encoder.appendValue(0, count);
          lastCardinality = 0;
        }
      } else if (outCol.columnId % 8 === COLUMN_TYPE.VALUE_LEN) {
        if (inCol) {
          if (inIndex + 1 === inCols.length || inCols[inIndex + 1].columnId !== outCol.columnId + 1) {
            throw new RangeError('VALUE_LEN column without accompanying VALUE_RAW column');
          }
          valueColumn = outCol.columnId + 1;
          valueBytes = outCol.encoder.copyFrom(inCol, { count: colCount, sumValues: true, sumShift: 4 }).sum;
        } else {
          outCol.encoder.appendValue(null, colCount);
          valueColumn = outCol.columnId + 1;
          valueBytes = 0;
        }
      } else if (outCol.columnId % 8 === COLUMN_TYPE.VALUE_RAW) {
        if (outCol.columnId !== valueColumn) {
          throw new RangeError('VALUE_RAW column without accompanying VALUE_LEN column');
        }
        if (valueBytes > 0) {
          outCol.encoder.appendRawBytes(inCol.readRawBytes(valueBytes));
        }
      } else {
        // ACTOR_ID, INT_RLE, INT_DELTA, BOOLEAN, or STRING_RLE
        if (inCol) {
          outCol.encoder.copyFrom(inCol, { count: colCount });
        } else {
          var blankValue = outCol.columnId % 8 === COLUMN_TYPE.BOOLEAN ? false : null;
          outCol.encoder.appendValue(blankValue, colCount);
        }
      }
    }
  } catch (err) {
    _didIteratorError36 = true;
    _iteratorError36 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion36 && _iterator36.return) {
        _iterator36.return();
      }
    } finally {
      if (_didIteratorError36) {
        throw _iteratorError36;
      }
    }
  }
}

/**
 * Parses one operation from a set of columns. The argument `columns` contains a list of objects
 * with `columnId` and `decoder` properties. Returns an array in which the i'th element is the
 * value read from the i'th column in `columns`. Does not interpret datatypes; the only
 * interpretation of values is that if `actorTable` is given, a value `v` in a column of type
 * ACTOR_ID is replaced with `actorTable[v]`.
 */
function readOperation(columns, actorTable) {
  var operation = [],
      colValue = void 0,
      lastGroup = -1,
      lastCardinality = 0,
      valueColumn = -1,
      valueBytes = 0;
  var _iteratorNormalCompletion37 = true;
  var _didIteratorError37 = false;
  var _iteratorError37 = undefined;

  try {
    for (var _iterator37 = columns[Symbol.iterator](), _step37; !(_iteratorNormalCompletion37 = (_step37 = _iterator37.next()).done); _iteratorNormalCompletion37 = true) {
      var col = _step37.value;

      if (col.columnId % 8 === COLUMN_TYPE.VALUE_RAW) {
        if (col.columnId !== valueColumn) throw new RangeError('unexpected VALUE_RAW column');
        colValue = col.decoder.readRawBytes(valueBytes);
      } else if (col.columnId % 8 === COLUMN_TYPE.GROUP_CARD) {
        lastGroup = col.columnId >> 3;
        lastCardinality = col.decoder.readValue() || 0;
        colValue = lastCardinality;
      } else if (col.columnId >> 3 === lastGroup) {
        colValue = [];
        if (col.columnId % 8 === COLUMN_TYPE.VALUE_LEN) {
          valueColumn = col.columnId + 1;
          valueBytes = 0;
        }
        for (var i = 0; i < lastCardinality; i++) {
          var value = col.decoder.readValue();
          if (col.columnId % 8 === COLUMN_TYPE.ACTOR_ID && actorTable && typeof value === 'number') {
            value = actorTable[value];
          }
          if (col.columnId % 8 === COLUMN_TYPE.VALUE_LEN) {
            valueBytes += colValue >>> 4;
          }
          colValue.push(value);
        }
      } else {
        colValue = col.decoder.readValue();
        if (col.columnId % 8 === COLUMN_TYPE.ACTOR_ID && actorTable && typeof colValue === 'number') {
          colValue = actorTable[colValue];
        }
        if (col.columnId % 8 === COLUMN_TYPE.VALUE_LEN) {
          valueColumn = col.columnId + 1;
          valueBytes = colValue >>> 4;
        }
      }

      operation.push(colValue);
    }
  } catch (err) {
    _didIteratorError37 = true;
    _iteratorError37 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion37 && _iterator37.return) {
        _iterator37.return();
      }
    } finally {
      if (_didIteratorError37) {
        throw _iteratorError37;
      }
    }
  }

  return operation;
}

/**
 * Appends `operation`, in the form returned by `readOperation()`, to the columns in `outCols`. The
 * argument `inCols` provides metadata about the types of columns in `operation`; the value
 * `operation[i]` comes from the column `inCols[i]`.
 */
function appendOperation(outCols, inCols, operation) {
  var inIndex = 0,
      lastGroup = -1,
      lastCardinality = 0;
  var _iteratorNormalCompletion38 = true;
  var _didIteratorError38 = false;
  var _iteratorError38 = undefined;

  try {
    for (var _iterator38 = outCols[Symbol.iterator](), _step38; !(_iteratorNormalCompletion38 = (_step38 = _iterator38.next()).done); _iteratorNormalCompletion38 = true) {
      var outCol = _step38.value;

      while (inIndex < inCols.length && inCols[inIndex].columnId < outCol.columnId) {
        inIndex++;
      }if (inIndex < inCols.length && inCols[inIndex].columnId === outCol.columnId) {
        var colValue = operation[inIndex];
        if (outCol.columnId % 8 === COLUMN_TYPE.GROUP_CARD) {
          lastGroup = outCol.columnId >> 3;
          lastCardinality = colValue;
          outCol.encoder.appendValue(colValue);
        } else if (outCol.columnId >> 3 === lastGroup) {
          if (!Array.isArray(colValue) || colValue.length !== lastCardinality) {
            throw new RangeError('bad group value');
          }
          var _iteratorNormalCompletion39 = true;
          var _didIteratorError39 = false;
          var _iteratorError39 = undefined;

          try {
            for (var _iterator39 = colValue[Symbol.iterator](), _step39; !(_iteratorNormalCompletion39 = (_step39 = _iterator39.next()).done); _iteratorNormalCompletion39 = true) {
              var v = _step39.value;
              outCol.encoder.appendValue(v);
            }
          } catch (err) {
            _didIteratorError39 = true;
            _iteratorError39 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion39 && _iterator39.return) {
                _iterator39.return();
              }
            } finally {
              if (_didIteratorError39) {
                throw _iteratorError39;
              }
            }
          }
        } else if (outCol.columnId % 8 === COLUMN_TYPE.VALUE_RAW) {
          outCol.encoder.appendRawBytes(colValue);
        } else {
          outCol.encoder.appendValue(colValue);
        }
      } else if (outCol.columnId % 8 === COLUMN_TYPE.GROUP_CARD) {
        lastGroup = outCol.columnId >> 3;
        lastCardinality = 0;
        outCol.encoder.appendValue(0);
      } else if (outCol.columnId % 8 !== COLUMN_TYPE.VALUE_RAW) {
        var count = outCol.columnId >> 3 === lastGroup ? lastCardinality : 1;
        var blankValue = null;
        if (outCol.columnId % 8 === COLUMN_TYPE.BOOLEAN) blankValue = false;
        if (outCol.columnId % 8 === COLUMN_TYPE.VALUE_LEN) blankValue = 0;
        outCol.encoder.appendValue(blankValue, count);
      }
    }
  } catch (err) {
    _didIteratorError38 = true;
    _iteratorError38 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion38 && _iterator38.return) {
        _iterator38.return();
      }
    } finally {
      if (_didIteratorError38) {
        throw _iteratorError38;
      }
    }
  }
}

/**
 * Given a change parsed by `decodeChangeColumns()` and its column decoders as instantiated by
 * `makeDecoders()`, reads the operations in the change and groups together any related operations
 * that can be applied at the same time. Returns an object of the form `{opSequences, objectIds}`:
 *    - `opSequences` is an array of operation groups, where each group is an object with a
 *      `consecutiveOps` property indicating how many operations are in that group.
 *    - `objectIds` is an array of objectIds that are created or modified in this change.
 *
 * In order for a set of operations to be related, they have to satisfy the following properties:
 *   1. They must all be for the same object. (Even when several objects are created in the same
 *      change, we don't group together operations from different objects, since those ops may not
 *      be consecutive in the document, since objectIds from different actors can be interleaved.)
 *   2. Operations with string keys must appear in lexicographic order. For operations with opId
 *      keys (i.e. list/text operations), this function does not know whether the order of
 *      operations in the change matches the document order. We optimistically group together any
 *      such operations for the same object, on the basis that the ops are likely to be consecutive
 *      in practice (e.g. deleting a consecutive sequence of characters from text is likely to be
 *      represented by a sequence of deletion operations in document order).
 *   3. On a list, the operations must either all be non-insertions (i.e. updates/deletions of
 *      existing list items), or they must be consecutive insertions (where each operation inserts
 *      immediately after the preceding operations). Non-consecutive insertions are returned as
 *      separate groups.
 *
 * The `objectMeta` argument is a map from objectId to metadata about that object (such as the
 * object type, that object's parent, and the key within the parent object where it is located).
 * This function mutates `objectMeta` to include objects created in this change.
 */
function groupRelatedOps(change, changeCols, objectMeta) {
  var currentActor = change.actorIds[0];

  var _changeCols$map = changeCols.map(function (col) {
    return col.decoder;
  }),
      _changeCols$map2 = _slicedToArray(_changeCols$map, 9),
      objActorD = _changeCols$map2[0],
      objCtrD = _changeCols$map2[1],
      keyActorD = _changeCols$map2[2],
      keyCtrD = _changeCols$map2[3],
      keyStrD = _changeCols$map2[4],
      idActorD = _changeCols$map2[5],
      idCtrD = _changeCols$map2[6],
      insertD = _changeCols$map2[7],
      actionD = _changeCols$map2[8];

  var objIdSeen = {},
      firstOp = null,
      lastOp = null,
      opIdCtr = change.startOp;
  var opSequences = [],
      objectIds = {};

  while (!actionD.done) {
    var objActor = objActorD.readValue(),
        keyActor = keyActorD.readValue();
    var thisOp = {
      objActor: objActor === null ? null : change.actorIds[objActor],
      objCtr: objCtrD.readValue(),
      keyActor: keyActor === null ? null : change.actorIds[keyActor],
      keyCtr: keyCtrD.readValue(),
      keyStr: keyStrD.readValue(),
      idActor: currentActor,
      idCtr: opIdCtr,
      insert: insertD.readValue(),
      action: actionD.readValue(),
      idActorIndex: -1, // the index of currentActor in the document's actor list, filled in later
      consecutiveOps: 1
    };
    if (thisOp.objCtr === null && thisOp.objActor !== null || thisOp.objCtr !== null && typeof thisOp.objActor !== 'string') {
      throw new RangeError('Mismatched object reference: (' + thisOp.objCtr + ', ' + thisOp.objActor + ')');
    }
    if (thisOp.keyCtr === null && thisOp.keyActor !== null || thisOp.keyCtr === 0 && thisOp.keyActor !== null || thisOp.keyCtr > 0 && typeof thisOp.keyActor !== 'string') {
      throw new RangeError('Mismatched operation key: (' + thisOp.keyCtr + ', ' + thisOp.keyActor + ')');
    }

    thisOp.opId = thisOp.idCtr + '@' + thisOp.idActor;
    thisOp.objId = thisOp.objCtr === null ? ROOT_ID : thisOp.objCtr + '@' + thisOp.objActor;
    objectIds[thisOp.objId] = true;

    // An even-numbered action indicates a make* operation that creates a new object.
    // TODO: also handle link/move operations.
    if (thisOp.action % 2 === 0) {
      var parentKey = void 0;
      if (thisOp.keyStr !== null) {
        parentKey = thisOp.keyStr;
      } else if (thisOp.insert) {
        parentKey = thisOp.opId;
      } else {
        parentKey = thisOp.keyCtr + '@' + thisOp.keyActor;
      }
      var type = thisOp.action < ACTIONS.length ? OBJECT_TYPE[ACTIONS[thisOp.action]] : null;
      objectMeta[thisOp.opId] = { parentObj: thisOp.objId, parentKey: parentKey, opId: thisOp.opId, type: type, children: {} };
      objectIds[thisOp.opId] = true;
      deepCopyUpdate(objectMeta, [thisOp.objId, 'children', parentKey, thisOp.opId], { objectId: thisOp.opId, type: type, props: {} });
    }

    if (!firstOp) {
      firstOp = thisOp;
      lastOp = thisOp;
    } else if (thisOp.objActor === lastOp.objActor && thisOp.objCtr === lastOp.objCtr && (thisOp.keyStr !== null && lastOp.keyStr !== null && lastOp.keyStr <= thisOp.keyStr || thisOp.keyStr === null && lastOp.keyStr === null && !lastOp.insert && !thisOp.insert || thisOp.keyStr === null && lastOp.keyStr === null && lastOp.insert && thisOp.insert && thisOp.keyActor === lastOp.idActor && thisOp.keyCtr === lastOp.idCtr)) {
      firstOp.consecutiveOps += 1;
      lastOp = thisOp;
    } else {
      objIdSeen[thisOp.objId] = true;
      opSequences.push(firstOp);
      firstOp = thisOp;
      lastOp = thisOp;
    }

    opIdCtr += 1;
  }

  if (firstOp) opSequences.push(firstOp);
  return { opSequences: opSequences, objectIds: Object.keys(objectIds) };
}

var BackendDoc = function () {
  function BackendDoc(buffer) {
    _classCallCheck(this, BackendDoc);

    if (buffer) {
      var doc = decodeDocumentHeader(buffer);
      this.changesColumns = doc.changesColumns;
      this.actorIds = doc.actorIds;
      this.heads = doc.heads;
      this.docColumns = makeDecoders(doc.opsColumns, DOC_OPS_COLUMNS);
      this.numOps = 0; // TODO count actual number of ops in the document
      this.objectMeta = {}; // TODO fill this in
    } else {
      this.actorIds = [];
      this.heads = [];
      this.docColumns = makeDecoders([], DOC_OPS_COLUMNS);
      this.numOps = 0;
      this.objectMeta = _defineProperty({}, ROOT_ID, { parentObj: null, parentKey: null, opId: null, type: 'map', children: {} });
    }
  }

  /**
   * Updates `patches` to reflect the operation `op` within the document with state `docState`.
   * `ops` is the operation sequence (as per `groupRelatedOps`) that we're currently processing.
   * Can be called multiple times if there are multiple operations for the same property (e.g. due
   * to a conflict). `propState` is an object that carries over state between such successive
   * invocations for the same property. If the current object is a list, `listIndex` is the index
   * into that list (counting only visible elements). If the operation `op` was already previously
   * in the document, `oldSuccNum` is the value of `op[succNum]` before the current change was
   * applied (allowing us to determine whether this operation was overwritten or deleted in the
   * current change). `oldSuccNum` must be undefined if the operation came from the current change.
   */


  _createClass(BackendDoc, [{
    key: 'updatePatchProperty',
    value: function updatePatchProperty(patches, ops, op, docState, propState, listIndex, oldSuccNum) {
      // FIXME: these constants duplicate those at the beginning of mergeDocChangeOps()
      var objActor = 0,
          objCtr = 1,
          keyActor = 2,
          keyCtr = 3,
          keyStr = 4,
          idActor = 5,
          idCtr = 6,
          insert = 7,
          action = 8,
          valLen = 9,
          valRaw = 10,
          predNum = 13,
          predActor = 14,
          predCtr = 15,
          succNum = 13,
          succActor = 14,
          succCtr = 15;

      var objectId = ops.objId;
      var elemId = op[keyStr] ? op[keyStr] : op[insert] ? op[idCtr] + '@' + docState.actorIds[op[idActor]] : op[keyCtr] + '@' + docState.actorIds[op[keyActor]];

      if (!patches[objectId]) patches[objectId] = { objectId: objectId, type: docState.objectMeta[objectId].type, props: {} };
      var patch = patches[objectId];

      if (op[keyStr] === null) {
        // Updating a list or text object (with opId key)
        if (!patch.edits) patch.edits = [];

        // If the property has a non-overwritten/non-deleted value, it's either an insert or an update
        if (op[succNum] === 0) {
          if (!propState[elemId]) {
            patch.edits.push({ action: 'insert', index: listIndex });
            propState[elemId] = { action: 'insert', visibleOps: [], hasChild: false };
          } else if (propState[elemId].action === 'remove') {
            patch.edits.pop();
            propState[elemId].action = 'update';
          }
        }

        // If the property formerly had a non-overwritten value, it's either a remove or an update
        if (oldSuccNum === 0) {
          if (!propState[elemId]) {
            patch.edits.push({ action: 'remove', index: listIndex });
            propState[elemId] = { action: 'remove', visibleOps: [], hasChild: false };
          } else if (propState[elemId].action === 'insert') {
            patch.edits.pop();
            propState[elemId].action = 'update';
          }
        }

        if (!patch.props[listIndex] && propState[elemId] && ['insert', 'update'].includes(propState[elemId].action)) {
          patch.props[listIndex] = {};
        }
      } else {
        // Updating a map or table (with string key)
        if (!patch.props[op[keyStr]]) patch.props[op[keyStr]] = {};
      }

      // If one or more of the values of the property is a child object, we update objectMeta to store
      // all of the visible values of the property (even the non-child-object values). Then, when we
      // subsequently process an update within that child object, we can construct the patch to
      // contain the conflicting values.
      if (op[succNum] === 0) {
        if (!propState[elemId]) propState[elemId] = { visibleOps: [], hasChild: false };
        propState[elemId].visibleOps.push(op);
        propState[elemId].hasChild = propState[elemId].hasChild || op[action] % 2 === 0; // even-numbered action == make* operation

        if (propState[elemId].hasChild) {
          var values = {};
          var _iteratorNormalCompletion40 = true;
          var _didIteratorError40 = false;
          var _iteratorError40 = undefined;

          try {
            for (var _iterator40 = propState[elemId].visibleOps[Symbol.iterator](), _step40; !(_iteratorNormalCompletion40 = (_step40 = _iterator40.next()).done); _iteratorNormalCompletion40 = true) {
              var visible = _step40.value;

              var opId = visible[idCtr] + '@' + docState.actorIds[visible[idActor]];
              if (ACTIONS[visible[action]] === 'set') {
                values[opId] = decodeValue(visible[valLen], visible[valRaw]);
              } else if (visible[action] % 2 === 0) {
                var type = visible[action] < ACTIONS.length ? OBJECT_TYPE[ACTIONS[visible[action]]] : null;
                values[opId] = { objectId: opId, type: type, props: {} };
              }
            }

            // Copy so that objectMeta is not modified if an exception is thrown while applying change
          } catch (err) {
            _didIteratorError40 = true;
            _iteratorError40 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion40 && _iterator40.return) {
                _iterator40.return();
              }
            } finally {
              if (_didIteratorError40) {
                throw _iteratorError40;
              }
            }
          }

          deepCopyUpdate(docState.objectMeta, [objectId, 'children', elemId], values);
        }
      }

      var key = op[keyStr] !== null ? op[keyStr] : listIndex;
      if (op[succNum] === 0 && patch.props[key]) {
        var _opId3 = op[idCtr] + '@' + docState.actorIds[op[idActor]];
        if (ACTIONS[op[action]] === 'set') {
          patch.props[key][_opId3] = decodeValue(op[valLen], op[valRaw]);
        } else if (op[action] % 2 === 0) {
          // even-numbered action == make* operation
          if (!patches[_opId3]) {
            var _type = op[action] < ACTIONS.length ? OBJECT_TYPE[ACTIONS[op[action]]] : null;
            patches[_opId3] = { objectId: _opId3, type: _type, props: {} };
          }
          patch.props[key][_opId3] = patches[_opId3];
        }
      }
    }

    /**
     * Applies a sequence of change operations to the document. `changeCols` contains the columns of
     * the change. Assumes that the decoders of both sets of columns are at the position where we want
     * to start merging. `patches` is mutated to reflect the effect of the change operations. `ops` is
     * the operation sequence to apply (as decoded by `groupRelatedOps()`). `docState` is as
     * documented in `applyOps()`. If the operations are updating a list or text object, `listIndex`
     * is the number of visible elements that precede the position at which we start merging.
     */

  }, {
    key: 'mergeDocChangeOps',
    value: function mergeDocChangeOps(patches, outCols, ops, changeCols, docState, listIndex) {
      // Check the first couple of columns are in the positions where we expect them to be
      var objActor = 0,
          objCtr = 1,
          keyActor = 2,
          keyCtr = 3,
          keyStr = 4,
          idActor = 5,
          idCtr = 6,
          insert = 7,
          action = 8,
          valLen = 9,
          valRaw = 10,
          predNum = 13,
          predActor = 14,
          predCtr = 15,
          succNum = 13,
          succActor = 14,
          succCtr = 15;
      if (docState.opsCols[objActor].columnId !== DOC_OPS_COLUMNS.objActor || changeCols[objActor].columnId !== CHANGE_COLUMNS.objActor || docState.opsCols[objCtr].columnId !== DOC_OPS_COLUMNS.objCtr || changeCols[objCtr].columnId !== CHANGE_COLUMNS.objCtr || docState.opsCols[keyActor].columnId !== DOC_OPS_COLUMNS.keyActor || changeCols[keyActor].columnId !== CHANGE_COLUMNS.keyActor || docState.opsCols[keyCtr].columnId !== DOC_OPS_COLUMNS.keyCtr || changeCols[keyCtr].columnId !== CHANGE_COLUMNS.keyCtr || docState.opsCols[keyStr].columnId !== DOC_OPS_COLUMNS.keyStr || changeCols[keyStr].columnId !== CHANGE_COLUMNS.keyStr || docState.opsCols[idActor].columnId !== DOC_OPS_COLUMNS.idActor || changeCols[idActor].columnId !== CHANGE_COLUMNS.idActor || docState.opsCols[idCtr].columnId !== DOC_OPS_COLUMNS.idCtr || changeCols[idCtr].columnId !== CHANGE_COLUMNS.idCtr || docState.opsCols[insert].columnId !== DOC_OPS_COLUMNS.insert || changeCols[insert].columnId !== CHANGE_COLUMNS.insert || docState.opsCols[action].columnId !== DOC_OPS_COLUMNS.action || changeCols[action].columnId !== CHANGE_COLUMNS.action || docState.opsCols[valLen].columnId !== DOC_OPS_COLUMNS.valLen || changeCols[valLen].columnId !== CHANGE_COLUMNS.valLen || docState.opsCols[valRaw].columnId !== DOC_OPS_COLUMNS.valRaw || changeCols[valRaw].columnId !== CHANGE_COLUMNS.valRaw || docState.opsCols[succNum].columnId !== DOC_OPS_COLUMNS.succNum || changeCols[predNum].columnId !== CHANGE_COLUMNS.predNum || docState.opsCols[succActor].columnId !== DOC_OPS_COLUMNS.succActor || changeCols[predActor].columnId !== CHANGE_COLUMNS.predActor || docState.opsCols[succCtr].columnId !== DOC_OPS_COLUMNS.succCtr || changeCols[predCtr].columnId !== CHANGE_COLUMNS.predCtr) {
        throw new RangeError('unexpected columnId');
      }

      var opCount = ops.consecutiveOps,
          opsAppended = 0,
          opIdCtr = ops.idCtr;
      var foundListElem = false,
          elemVisible = false,
          propState = {};
      var docOp = docState.opsCols[action].decoder.done ? null : readOperation(docState.opsCols);
      var docOpsConsumed = docOp === null ? 0 : 1;
      var docOpOldSuccNum = docOp === null ? 0 : docOp[succNum];
      var changeOp = null,
          nextChangeOp = null,
          changeOps = [];

      // Merge the two inputs: the sequence of ops in the doc, and the sequence of ops in the change.
      // At each iteration, we either output the doc's op (possibly updated based on the change's ops)
      // or output an op from the change.
      while (true) {
        // Read operations from the change, and fill the array `changeOps` with all the operations
        // that pertain to the same property (the same key or list element). If the operation
        // sequence consists of consecutive list insertions, `changeOps` contains all of the ops.
        if (changeOps.length === 0) {
          foundListElem = false;
          while (changeOps.length === 0 || ops.insert || nextChangeOp[keyStr] !== null && nextChangeOp[keyStr] === changeOps[0][keyStr] || nextChangeOp[keyStr] === null && nextChangeOp[keyActor] === changeOps[0][keyActor] && nextChangeOp[keyCtr] === changeOps[0][keyCtr]) {
            if (nextChangeOp !== null) {
              changeOps.push(nextChangeOp);
            }
            if (opCount === 0) {
              nextChangeOp = null;
              break;
            }

            nextChangeOp = readOperation(changeCols, docState.actorTable);
            nextChangeOp[idActor] = ops.idActorIndex;
            nextChangeOp[idCtr] = opIdCtr;
            opCount--;
            opIdCtr++;
          }
        }

        if (changeOps.length > 0) changeOp = changeOps[0];
        var inCorrectObject = docOp && docOp[objActor] === changeOp[objActor] && docOp[objCtr] === changeOp[objCtr];
        var keyMatches = docOp && docOp[keyStr] !== null && docOp[keyStr] === changeOp[keyStr];
        var listElemMatches = docOp && docOp[keyStr] === null && changeOp[keyStr] === null && (!docOp[insert] && docOp[keyActor] === changeOp[keyActor] && docOp[keyCtr] === changeOp[keyCtr] || docOp[insert] && docOp[idActor] === changeOp[keyActor] && docOp[idCtr] === changeOp[keyCtr]);

        // We keep going until we run out of ops in the change, except that even when we run out, we
        // keep going until we have processed all doc ops for the current key/list element.
        if (changeOps.length === 0 && !(inCorrectObject && (keyMatches || listElemMatches))) break;

        var takeDocOp = false,
            takeChangeOps = 0;

        // The change operations come first if we are inserting list elements (seekToOp already
        // determines the correct insertion position), if there is no document operation, if the next
        // document operation is for a different object, or if the change op's string key is
        // lexicographically first (TODO check ordering of keys beyond the basic multilingual plane).
        if (ops.insert || !inCorrectObject || docOp[keyStr] === null && changeOp[keyStr] !== null || docOp[keyStr] !== null && changeOp[keyStr] !== null && changeOp[keyStr] < docOp[keyStr]) {
          // Take the operations from the change
          takeChangeOps = changeOps.length;
          if (!inCorrectObject && !foundListElem && changeOp[keyStr] === null && !changeOp[insert]) {
            // This can happen if we first update one list element, then another one earlier in the
            // list. That is not allowed: list element updates must occur in ascending order.
            throw new RangeError("could not find list element with ID: " + (changeOp[keyCtr] + '@' + docState.actorIds[changeOp[keyActor]]));
          }
        } else if (keyMatches || listElemMatches || foundListElem) {
          // The doc operation is for the same key or list element in the same object as the change
          // ops, so we merge them. First, if any of the change ops' `pred` matches the opId of the
          // document operation, we update the document operation's `succ` accordingly.
          var _iteratorNormalCompletion41 = true;
          var _didIteratorError41 = false;
          var _iteratorError41 = undefined;

          try {
            for (var _iterator41 = changeOps[Symbol.iterator](), _step41; !(_iteratorNormalCompletion41 = (_step41 = _iterator41.next()).done); _iteratorNormalCompletion41 = true) {
              var op = _step41.value;

              for (var _i5 = 0; _i5 < op[predNum]; _i5++) {
                if (op[predActor][_i5] === docOp[idActor] && op[predCtr][_i5] === docOp[idCtr]) {
                  // Insert into the doc op's succ list such that the lists remains sorted
                  var j = 0;
                  while (j < docOp[succNum] && (docOp[succCtr][j] < op[idCtr] || docOp[succCtr][j] === op[idCtr] && docState.actorIds[docOp[succActor][j]] < ops.idActor)) {
                    j++;
                  }docOp[succCtr].splice(j, 0, op[idCtr]);
                  docOp[succActor].splice(j, 0, ops.idActorIndex);
                  docOp[succNum]++;
                  op[predCtr].splice(_i5, 1);
                  op[predActor].splice(_i5, 1);
                  op[predNum]--;
                  break;
                }
              }
            }
          } catch (err) {
            _didIteratorError41 = true;
            _iteratorError41 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion41 && _iterator41.return) {
                _iterator41.return();
              }
            } finally {
              if (_didIteratorError41) {
                throw _iteratorError41;
              }
            }
          }

          if (listElemMatches) foundListElem = true;

          if (foundListElem && !listElemMatches) {
            // If the previous docOp was for the correct list element, and the current docOp is for
            // the wrong list element, then place the current changeOp before the docOp.
            takeChangeOps = changeOps.length;
          } else if (changeOps.length === 0 || docOp[idCtr] < changeOp[idCtr] || docOp[idCtr] === changeOp[idCtr] && docState.actorIds[docOp[idActor]] < ops.idActor) {
            // When we have several operations for the same object and the same key, we want to keep
            // them sorted in ascending order by opId. Here we have docOp with a lower opId, so we
            // output it first.
            takeDocOp = true;
            this.updatePatchProperty(patches, ops, docOp, docState, propState, listIndex, docOpOldSuccNum);

            // A deletion op in the change is represented in the document only by its entries in the
            // succ list of the operations it overwrites; it has no separate row in the set of ops.
            for (var i = changeOps.length - 1; i >= 0; i--) {
              if (ACTIONS[changeOps[i][action]] === 'del' && changeOps[i][predNum] === 0) {
                changeOps.splice(i, 1);
              }
            }
          } else if (docOp[idCtr] === changeOp[idCtr] && docState.actorIds[docOp[idActor]] === ops.idActor) {
            throw new RangeError('duplicate operation ID: ' + changeOp[idCtr] + '@' + ops.idActor);
          } else {
            // The changeOp has the lower opId, so we output it first.
            takeChangeOps = 1;
          }
        } else {
          // The document operation comes first if its string key is lexicographically first, or if
          // we're using opId keys and the keys don't match (i.e. we scan the document until we find a
          // matching key).
          takeDocOp = true;
        }

        if (takeDocOp) {
          appendOperation(outCols, docState.opsCols, docOp);
          if (docOp[insert] && elemVisible) {
            elemVisible = false;
            listIndex++;
          }
          if (docOp[succNum] === 0) elemVisible = true;
          opsAppended++;
          docOp = docState.opsCols[action].decoder.done ? null : readOperation(docState.opsCols);
          if (docOp !== null) {
            docOpsConsumed++;
            docOpOldSuccNum = docOp[succNum];
          }
        }

        if (takeChangeOps > 0) {
          for (var _i6 = 0; _i6 < takeChangeOps; _i6++) {
            var _op5 = changeOps[_i6];
            // Check that we've seen all ops mentioned in `pred` (they must all have lower opIds than
            // the change op's own opId, so we must have seen them already)
            if (_op5[predNum] > 0) {
              throw new RangeError('no matching operation for pred: ' + _op5[predCtr][0] + '@' + docState.actorIds[_op5[predActor][0]]);
            }
            this.updatePatchProperty(patches, ops, _op5, docState, propState, listIndex);
            appendOperation(outCols, changeCols, _op5);
            if (_op5[insert]) {
              elemVisible = false;
              listIndex++;
            }
            if (_op5[succNum] === 0) elemVisible = true;
          }

          if (takeChangeOps === changeOps.length) {
            changeOps.length = 0;
          } else {
            changeOps.splice(0, takeChangeOps);
          }
          opsAppended += takeChangeOps;
        }
      }

      if (docOp) {
        appendOperation(outCols, docState.opsCols, docOp);
        opsAppended++;
      }
      return { opsAppended: opsAppended, docOpsConsumed: docOpsConsumed };
    }

    /**
     * Applies the operation sequence in `ops` (as produced by `groupRelatedOps()`) from the change
     * with columns `changeCols` to the document `docState`. `docState` is an object with keys:
     *   - `actorIds` is an array of actorIds (as hex strings) occurring in the document (values in
     *     the document's objActor/keyActor/idActor/... columns are indexes into this array).
     *   - `actorTable` is an array of integers where `actorTable[i]` contains the document's actor
     *     index for the actor that has index `i` in the change (`i == 0` is the author of the change).
     *   - `allCols` is an array of all the columnIds in either the document or the change.
     *   - `opsCols` is an array of columns containing the operations in the document.
     *   - `numOps` is an integer, the number of operations in the document.
     *   - `objectMeta` is a map from objectId to metadata about that object.
     *   - `lastIndex` is an object where the key is an objectId, and the value is the last list index
     *     accessed in that object. This is used to check that accesses occur in ascending order
     *     (which makes it easier to generate patches for lists).
     *
     * `docState` is mutated to contain the updated document state.
     * `patches` is a patch object that is mutated to reflect the operations applied by this function.
     */

  }, {
    key: 'applyOps',
    value: function applyOps(patches, ops, changeCols, docState) {
      var _iteratorNormalCompletion42 = true;
      var _didIteratorError42 = false;
      var _iteratorError42 = undefined;

      try {
        for (var _iterator42 = docState.opsCols[Symbol.iterator](), _step42; !(_iteratorNormalCompletion42 = (_step42 = _iterator42.next()).done); _iteratorNormalCompletion42 = true) {
          var col = _step42.value;
          col.decoder.reset();
        }
      } catch (err) {
        _didIteratorError42 = true;
        _iteratorError42 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion42 && _iterator42.return) {
            _iterator42.return();
          }
        } finally {
          if (_didIteratorError42) {
            throw _iteratorError42;
          }
        }
      }

      var _seekToOp = seekToOp(ops, docState.opsCols, docState.actorIds),
          skipCount = _seekToOp.skipCount,
          visibleCount = _seekToOp.visibleCount;

      if (docState.lastIndex[ops.objId] && visibleCount < docState.lastIndex[ops.objId]) {
        throw new RangeError('list element accesses must occur in ascending order');
      }
      docState.lastIndex[ops.objId] = visibleCount;
      var _iteratorNormalCompletion43 = true;
      var _didIteratorError43 = false;
      var _iteratorError43 = undefined;

      try {
        for (var _iterator43 = docState.opsCols[Symbol.iterator](), _step43; !(_iteratorNormalCompletion43 = (_step43 = _iterator43.next()).done); _iteratorNormalCompletion43 = true) {
          var _col = _step43.value;
          _col.decoder.reset();
        }
      } catch (err) {
        _didIteratorError43 = true;
        _iteratorError43 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion43 && _iterator43.return) {
            _iterator43.return();
          }
        } finally {
          if (_didIteratorError43) {
            throw _iteratorError43;
          }
        }
      }

      var outCols = docState.allCols.map(function (columnId) {
        return { columnId: columnId, encoder: encoderByColumnId(columnId) };
      });
      copyColumns(outCols, docState.opsCols, skipCount);

      var _mergeDocChangeOps = this.mergeDocChangeOps(patches, outCols, ops, changeCols, docState, visibleCount),
          opsAppended = _mergeDocChangeOps.opsAppended,
          docOpsConsumed = _mergeDocChangeOps.docOpsConsumed;

      copyColumns(outCols, docState.opsCols, docState.numOps - skipCount - docOpsConsumed);
      var _iteratorNormalCompletion44 = true;
      var _didIteratorError44 = false;
      var _iteratorError44 = undefined;

      try {
        for (var _iterator44 = docState.opsCols[Symbol.iterator](), _step44; !(_iteratorNormalCompletion44 = (_step44 = _iterator44.next()).done); _iteratorNormalCompletion44 = true) {
          var _col2 = _step44.value;

          if (!_col2.decoder.done) throw new RangeError('excess ops in ' + _col2.columnName + ' column');
        }
      } catch (err) {
        _didIteratorError44 = true;
        _iteratorError44 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion44 && _iterator44.return) {
            _iterator44.return();
          }
        } finally {
          if (_didIteratorError44) {
            throw _iteratorError44;
          }
        }
      }

      docState.opsCols = outCols.map(function (col) {
        var decoder = decoderByColumnId(col.columnId, col.encoder.buffer);
        return { columnId: col.columnId, columnName: DOC_OPS_COLUMNS_REV[col.columnId], decoder: decoder };
      });
      docState.numOps = docState.numOps + opsAppended - docOpsConsumed;
    }

    /**
     * Takes `changeCols`, a list of `{columnId, columnName, decoder}` objects for a change, and
     * checks that it has the expected structure. Returns an array of column IDs (integers) of the
     * columns that occur either in the document or in the change.
     */

  }, {
    key: 'getAllColumns',
    value: function getAllColumns(changeCols) {
      var expectedCols = ['objActor', 'objCtr', 'keyActor', 'keyCtr', 'keyStr', 'idActor', 'idCtr', 'insert', 'action', 'valLen', 'valRaw', 'chldActor', 'chldCtr', 'predNum', 'predActor', 'predCtr'];
      var allCols = {};
      for (var i = 0; i < expectedCols.length; i++) {
        if (changeCols[i].columnName !== expectedCols[i]) {
          throw new RangeError('Expected column ' + expectedCols[i] + ' at index ' + i + ', got ' + changeCols[i].columnName);
        }
      }
      var _iteratorNormalCompletion45 = true;
      var _didIteratorError45 = false;
      var _iteratorError45 = undefined;

      try {
        for (var _iterator45 = changeCols[Symbol.iterator](), _step45; !(_iteratorNormalCompletion45 = (_step45 = _iterator45.next()).done); _iteratorNormalCompletion45 = true) {
          var col = _step45.value;
          allCols[col.columnId] = true;
        }
      } catch (err) {
        _didIteratorError45 = true;
        _iteratorError45 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion45 && _iterator45.return) {
            _iterator45.return();
          }
        } finally {
          if (_didIteratorError45) {
            throw _iteratorError45;
          }
        }
      }

      var _iteratorNormalCompletion46 = true;
      var _didIteratorError46 = false;
      var _iteratorError46 = undefined;

      try {
        for (var _iterator46 = Object.entries(DOC_OPS_COLUMNS)[Symbol.iterator](), _step46; !(_iteratorNormalCompletion46 = (_step46 = _iterator46.next()).done); _iteratorNormalCompletion46 = true) {
          var _ref11 = _step46.value;

          var _ref12 = _slicedToArray(_ref11, 2);

          var columnName = _ref12[0];
          var columnId = _ref12[1];
          allCols[columnId] = true;
        } // Final document should contain any columns in either the document or the change, except for
        // pred, since the document encoding uses succ instead of pred
      } catch (err) {
        _didIteratorError46 = true;
        _iteratorError46 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion46 && _iterator46.return) {
            _iterator46.return();
          }
        } finally {
          if (_didIteratorError46) {
            throw _iteratorError46;
          }
        }
      }

      delete allCols[CHANGE_COLUMNS.predNum];
      delete allCols[CHANGE_COLUMNS.predActor];
      delete allCols[CHANGE_COLUMNS.predCtr];
      return Object.keys(allCols).map(function (id) {
        return parseInt(id);
      }).sort(function (a, b) {
        return a - b;
      });
    }

    /**
     * Takes a decoded change header, including an array of actorIds. Returns an object of the form
     * `{actorIds, actorTable}`, where `actorIds` is an updated array of actorIds appearing in the
     * document (including the new change's actorId), and `actorTable` is an array for translating
     * the change's actor indexes into the document's actor indexes.
     */

  }, {
    key: 'getActorTable',
    value: function getActorTable(change) {
      // TODO check if change is causally ready, enqueue it if not (cf. OpSet.applyQueuedOps)
      var actorIds = this.actorIds;
      if (actorIds.indexOf(change.actorIds[0]) < 0) {
        if (change.seq !== 1) {
          throw new RangeError('Seq ' + change.seq + ' is the first change for actor ' + change.actorIds[0]);
        }
        // Use concat, not push, so that the original array is not mutated
        actorIds = actorIds.concat([change.actorIds[0]]);
      }
      var actorTable = []; // translate from change's actor index to doc's actor index
      var _iteratorNormalCompletion47 = true;
      var _didIteratorError47 = false;
      var _iteratorError47 = undefined;

      try {
        for (var _iterator47 = change.actorIds[Symbol.iterator](), _step47; !(_iteratorNormalCompletion47 = (_step47 = _iterator47.next()).done); _iteratorNormalCompletion47 = true) {
          var actorId = _step47.value;

          var index = actorIds.indexOf(actorId);
          if (index < 0) {
            throw new RangeError('actorId ' + actorId + ' is not known to document');
          }
          actorTable.push(index);
        }
      } catch (err) {
        _didIteratorError47 = true;
        _iteratorError47 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion47 && _iterator47.return) {
            _iterator47.return();
          }
        } finally {
          if (_didIteratorError47) {
            throw _iteratorError47;
          }
        }
      }

      return { actorIds: actorIds, actorTable: actorTable };
    }

    /**
     * Finalises the patch for a change. `patches` is a map from objectIds to patch for that
     * particular object, `objectIds` is the array of IDs of objects that are created or updated in the
     * change, and `docState` is an object containing various bits of document state, including
     * `objectMeta`, a  map from objectIds to metadata about that object (such as its parent in the
     * document tree). Mutates `patches` such that child objects are linked into their parent object,
     * all the way to the root object.
     */

  }, {
    key: 'setupPatches',
    value: function setupPatches(patches, objectIds, docState) {
      var _iteratorNormalCompletion48 = true;
      var _didIteratorError48 = false;
      var _iteratorError48 = undefined;

      try {
        for (var _iterator48 = objectIds[Symbol.iterator](), _step48; !(_iteratorNormalCompletion48 = (_step48 = _iterator48.next()).done); _iteratorNormalCompletion48 = true) {
          var objectId = _step48.value;

          var meta = docState.objectMeta[objectId],
              childMeta = null,
              patchExists = false;
          while (true) {
            if (!patches[objectId]) patches[objectId] = { objectId: objectId, type: meta.type, props: {} };

            if (childMeta) {
              // key is the property name being updated. In maps and table objects, this is just q
              // string, while in list and text objects, we need to translate the elemID into an index
              var key = childMeta.parentKey;
              if (meta.type === 'list' || meta.type === 'text') {
                var obj = parseOpId(objectId),
                    elem = parseOpId(key);
                var seekPos = {
                  objActor: obj.actorId, objCtr: obj.counter,
                  keyActor: elem.actorId, keyCtr: elem.counter,
                  keyStr: null, insert: false
                };

                var _seekToOp2 = seekToOp(seekPos, docState.opsCols, docState.actorIds),
                    skipCount = _seekToOp2.skipCount,
                    visibleCount = _seekToOp2.visibleCount;

                key = visibleCount;
              }
              if (!patches[objectId].props[key]) patches[objectId].props[key] = {};

              var values = patches[objectId].props[key];
              var _iteratorNormalCompletion49 = true;
              var _didIteratorError49 = false;
              var _iteratorError49 = undefined;

              try {
                for (var _iterator49 = Object.entries(meta.children[childMeta.parentKey])[Symbol.iterator](), _step49; !(_iteratorNormalCompletion49 = (_step49 = _iterator49.next()).done); _iteratorNormalCompletion49 = true) {
                  var _ref13 = _step49.value;

                  var _ref14 = _slicedToArray(_ref13, 2);

                  var opId = _ref14[0];
                  var value = _ref14[1];

                  if (values[opId]) {
                    patchExists = true;
                  } else if (value.objectId) {
                    if (!patches[value.objectId]) patches[value.objectId] = Object.assign({}, value, { props: {} });
                    values[opId] = patches[value.objectId];
                  } else {
                    values[opId] = value;
                  }
                }
              } catch (err) {
                _didIteratorError49 = true;
                _iteratorError49 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion49 && _iterator49.return) {
                    _iterator49.return();
                  }
                } finally {
                  if (_didIteratorError49) {
                    throw _iteratorError49;
                  }
                }
              }

              if (!values[childMeta.opId]) {
                throw new RangeError('object metadata did not contain child entry for ' + childMeta.opId);
              }
            }
            if (patchExists || !meta.parentObj) break;
            childMeta = meta;
            objectId = meta.parentObj;
            meta = docState.objectMeta[objectId];
          }
        }
      } catch (err) {
        _didIteratorError48 = true;
        _iteratorError48 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion48 && _iterator48.return) {
            _iterator48.return();
          }
        } finally {
          if (_didIteratorError48) {
            throw _iteratorError48;
          }
        }
      }

      return patches;
    }

    /**
     * Parses the change given as a Uint8Array in `changeBuffer`, and applies it to the current
     * document. Returns a patch to apply to the frontend. If an exception is thrown, the document
     * object is not modified.
     */

  }, {
    key: 'applyChange',
    value: function applyChange(changeBuffer) {
      var change = decodeChangeColumns(changeBuffer); // { actor, seq, startOp, time, message, deps, actorIds, hash, columns }
      var changeCols = makeDecoders(change.columns, CHANGE_COLUMNS);
      var allCols = this.getAllColumns(changeCols);

      var _getActorTable = this.getActorTable(change),
          actorIds = _getActorTable.actorIds,
          actorTable = _getActorTable.actorTable;

      var actorIndex = actorIds.indexOf(change.actorIds[0]);
      var objectMeta = Object.assign({}, this.objectMeta);

      var _groupRelatedOps = groupRelatedOps(change, changeCols, objectMeta),
          opSequences = _groupRelatedOps.opSequences,
          objectIds = _groupRelatedOps.objectIds;

      var patches = _defineProperty({}, ROOT_ID, { objectId: ROOT_ID, type: 'map', props: {} });
      var docState = {
        actorIds: actorIds, actorTable: actorTable, allCols: allCols, opsCols: this.docColumns, numOps: this.numOps,
        objectMeta: objectMeta, lastIndex: {}
      };
      var _iteratorNormalCompletion50 = true;
      var _didIteratorError50 = false;
      var _iteratorError50 = undefined;

      try {
        for (var _iterator50 = changeCols[Symbol.iterator](), _step50; !(_iteratorNormalCompletion50 = (_step50 = _iterator50.next()).done); _iteratorNormalCompletion50 = true) {
          var col = _step50.value;
          col.decoder.reset();
        }
      } catch (err) {
        _didIteratorError50 = true;
        _iteratorError50 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion50 && _iterator50.return) {
            _iterator50.return();
          }
        } finally {
          if (_didIteratorError50) {
            throw _iteratorError50;
          }
        }
      }

      var _iteratorNormalCompletion51 = true;
      var _didIteratorError51 = false;
      var _iteratorError51 = undefined;

      try {
        for (var _iterator51 = opSequences[Symbol.iterator](), _step51; !(_iteratorNormalCompletion51 = (_step51 = _iterator51.next()).done); _iteratorNormalCompletion51 = true) {
          var op = _step51.value;

          op.idActorIndex = actorIndex;
          this.applyOps(patches, op, changeCols, docState);
        }
      } catch (err) {
        _didIteratorError51 = true;
        _iteratorError51 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion51 && _iterator51.return) {
            _iterator51.return();
          }
        } finally {
          if (_didIteratorError51) {
            throw _iteratorError51;
          }
        }
      }

      this.setupPatches(patches, objectIds, docState);

      // Update the document state at the end, so that if any of the earlier code throws an exception,
      // the document is not modified (making `applyChange` atomic in the ACID sense).
      this.actorIds = docState.actorIds;
      this.docColumns = docState.opsCols;
      this.numOps = docState.numOps;
      this.objectMeta = docState.objectMeta;
      return patches[ROOT_ID];
    }
  }]);

  return BackendDoc;
}();

module.exports = {
  COLUMN_TYPE: COLUMN_TYPE, VALUE_TYPE: VALUE_TYPE, ACTIONS: ACTIONS, DOC_OPS_COLUMNS: DOC_OPS_COLUMNS, CHANGE_COLUMNS: CHANGE_COLUMNS, DOCUMENT_COLUMNS: DOCUMENT_COLUMNS,
  splitContainers: splitContainers, encodeChange: encodeChange, decodeChange: decodeChange, decodeChangeMeta: decodeChangeMeta, decodeChanges: decodeChanges, encodeDocument: encodeDocument, decodeDocument: decodeDocument,
  constructPatch: constructPatch, BackendDoc: BackendDoc
};

/***/ }),

/***/ "./backend/encoding.js":
/*!*****************************!*\
  !*** ./backend/encoding.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * UTF-8 decoding and encoding
 */
var stringToUtf8 = void 0,
    utf8ToString = void 0;

if (typeof TextEncoder === 'function' && typeof TextDecoder === 'function') {
  // Modern web browsers:
  // https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode
  // https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode
  var utf8encoder = new TextEncoder(),
      utf8decoder = new TextDecoder('utf-8');
  stringToUtf8 = function stringToUtf8(string) {
    return utf8encoder.encode(string);
  };
  utf8ToString = function utf8ToString(buffer) {
    return utf8decoder.decode(buffer);
  };
} else if (typeof Buffer === 'function') {
  // Node.js:
  // https://nodejs.org/api/buffer.html
  // https://nodejs.org/api/string_decoder.html
  var _require = __webpack_require__(/*! string_decoder */ "./node_modules/string_decoder/lib/string_decoder.js"),
      StringDecoder = _require.StringDecoder;

  var _utf8decoder = new StringDecoder('utf8');
  stringToUtf8 = function stringToUtf8(string) {
    return Buffer.from(string, 'utf8');
  };
  // In Node >= 10 we can simply do "utf8decoder.end(buffer)". However, in Node 8 there
  // is a bug that causes an Uint8Array to be incorrectly decoded when passed directly to
  // StringDecoder.end(). Wrapping in an additional "Buffer.from()" works around this bug.
  utf8ToString = function utf8ToString(buffer) {
    return _utf8decoder.end(Buffer.from(buffer));
  };
} else {
  // Could use a polyfill? e.g. https://github.com/anonyco/FastestSmallestTextEncoderDecoder
  throw new Error('Platform does not provide UTF-8 encoding/decoding feature');
}

/**
 * Converts a string consisting of hexadecimal digits into an Uint8Array.
 */
function hexStringToBytes(value) {
  if (typeof value !== 'string') {
    throw new TypeError('value is not a string');
  }
  if (!/^([0-9a-f][0-9a-f])*$/.test(value)) {
    throw new RangeError('value is not hexadecimal');
  }
  if (value === '') {
    return new Uint8Array(0);
  } else {
    return new Uint8Array(value.match(/../g).map(function (b) {
      return parseInt(b, 16);
    }));
  }
}

/**
 * Converts a Uint8Array into the equivalent hexadecimal string.
 */
function bytesToHexString(bytes) {
  var hex = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = bytes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var b = _step.value;

      if (b < 0 || b > 255) throw new RangeError('value does not fit in one byte: ' + b);
      hex.push(('0' + b.toString(16)).slice(-2));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return hex.join('');
}

/**
 * Wrapper around an Uint8Array that allows values to be appended to the buffer,
 * and that automatically grows the buffer when space runs out.
 */

var Encoder = function () {
  function Encoder() {
    _classCallCheck(this, Encoder);

    this.buf = new Uint8Array(16);
    this.offset = 0;
  }

  /**
   * Returns the byte array containing the encoded data.
   */


  _createClass(Encoder, [{
    key: 'grow',


    /**
     * Reallocates the encoder's buffer to be bigger.
     */
    value: function grow() {
      var minSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      var newSize = this.buf.byteLength * 4;
      while (newSize < minSize) {
        newSize *= 2;
      }var newBuf = new Uint8Array(newSize);
      newBuf.set(this.buf, 0);
      this.buf = newBuf;
      return this;
    }

    /**
     * Appends one byte (0 to 255) to the buffer.
     */

  }, {
    key: 'appendByte',
    value: function appendByte(value) {
      if (this.offset >= this.buf.byteLength) this.grow();
      this.buf[this.offset] = value;
      this.offset += 1;
    }

    /**
     * Encodes a 32-bit nonnegative integer in a variable number of bytes using
     * the LEB128 encoding scheme (https://en.wikipedia.org/wiki/LEB128) and
     * appends it to the buffer. Returns the number of bytes written.
     */

  }, {
    key: 'appendUint32',
    value: function appendUint32(value) {
      if (!Number.isInteger(value)) throw new RangeError('value is not an integer');
      if (value < 0 || value > 0xffffffff) throw new RangeError('number out of range');

      var numBytes = Math.max(1, Math.ceil((32 - Math.clz32(value)) / 7));
      if (this.offset + numBytes > this.buf.byteLength) this.grow();

      for (var i = 0; i < numBytes; i++) {
        this.buf[this.offset + i] = value & 0x7f | (i === numBytes - 1 ? 0x00 : 0x80);
        value >>>= 7; // zero-filling right shift
      }
      this.offset += numBytes;
      return numBytes;
    }

    /**
     * Encodes a 32-bit signed integer in a variable number of bytes using the
     * LEB128 encoding scheme (https://en.wikipedia.org/wiki/LEB128) and appends
     * it to the buffer. Returns the number of bytes written.
     */

  }, {
    key: 'appendInt32',
    value: function appendInt32(value) {
      if (!Number.isInteger(value)) throw new RangeError('value is not an integer');
      if (value < -0x80000000 || value > 0x7fffffff) throw new RangeError('number out of range');

      var numBytes = Math.ceil((33 - Math.clz32(value >= 0 ? value : -value - 1)) / 7);
      if (this.offset + numBytes > this.buf.byteLength) this.grow();

      for (var i = 0; i < numBytes; i++) {
        this.buf[this.offset + i] = value & 0x7f | (i === numBytes - 1 ? 0x00 : 0x80);
        value >>= 7; // sign-propagating right shift
      }
      this.offset += numBytes;
      return numBytes;
    }

    /**
     * Encodes a nonnegative integer in a variable number of bytes using the LEB128
     * encoding scheme, up to the maximum size of integers supported by JavaScript
     * (53 bits).
     */

  }, {
    key: 'appendUint53',
    value: function appendUint53(value) {
      if (!Number.isInteger(value)) throw new RangeError('value is not an integer');
      if (value < 0 || value > Number.MAX_SAFE_INTEGER) {
        throw new RangeError('number out of range');
      }
      var high32 = Math.floor(value / 0x100000000);
      var low32 = (value & 0xffffffff) >>> 0; // right shift to interpret as unsigned
      return this.appendUint64(high32, low32);
    }

    /**
     * Encodes a signed integer in a variable number of bytes using the LEB128
     * encoding scheme, up to the maximum size of integers supported by JavaScript
     * (53 bits).
     */

  }, {
    key: 'appendInt53',
    value: function appendInt53(value) {
      if (!Number.isInteger(value)) throw new RangeError('value is not an integer');
      if (value < Number.MIN_SAFE_INTEGER || value > Number.MAX_SAFE_INTEGER) {
        throw new RangeError('number out of range');
      }
      var high32 = Math.floor(value / 0x100000000);
      var low32 = (value & 0xffffffff) >>> 0; // right shift to interpret as unsigned
      return this.appendInt64(high32, low32);
    }

    /**
     * Encodes a 64-bit nonnegative integer in a variable number of bytes using
     * the LEB128 encoding scheme, and appends it to the buffer. The number is
     * given as two 32-bit halves since JavaScript cannot accurately represent
     * integers with more than 53 bits in a single variable.
     */

  }, {
    key: 'appendUint64',
    value: function appendUint64(high32, low32) {
      if (!Number.isInteger(high32) || !Number.isInteger(low32)) {
        throw new RangeError('value is not an integer');
      }
      if (high32 < 0 || high32 > 0xffffffff || low32 < 0 || low32 > 0xffffffff) {
        throw new RangeError('number out of range');
      }
      if (high32 === 0) return this.appendUint32(low32);

      var numBytes = Math.ceil((64 - Math.clz32(high32)) / 7);
      if (this.offset + numBytes > this.buf.byteLength) this.grow();
      for (var i = 0; i < 4; i++) {
        this.buf[this.offset + i] = low32 & 0x7f | 0x80;
        low32 >>>= 7; // zero-filling right shift
      }
      this.buf[this.offset + 4] = low32 & 0x0f | (high32 & 0x07) << 4 | (numBytes === 5 ? 0x00 : 0x80);
      high32 >>>= 3;
      for (var _i = 5; _i < numBytes; _i++) {
        this.buf[this.offset + _i] = high32 & 0x7f | (_i === numBytes - 1 ? 0x00 : 0x80);
        high32 >>>= 7;
      }
      this.offset += numBytes;
      return numBytes;
    }

    /**
     * Encodes a 64-bit signed integer in a variable number of bytes using the
     * LEB128 encoding scheme, and appends it to the buffer. The number is given
     * as two 32-bit halves since JavaScript cannot accurately represent integers
     * with more than 53 bits in a single variable. The sign of the 64-bit
     * number is determined by the sign of the `high32` half; the sign of the
     * `low32` half is ignored.
     */

  }, {
    key: 'appendInt64',
    value: function appendInt64(high32, low32) {
      if (!Number.isInteger(high32) || !Number.isInteger(low32)) {
        throw new RangeError('value is not an integer');
      }
      if (high32 < -0x80000000 || high32 > 0x7fffffff || low32 < -0x80000000 || low32 > 0xffffffff) {
        throw new RangeError('number out of range');
      }
      low32 >>>= 0; // interpret as unsigned
      if (high32 === 0 && low32 <= 0x7fffffff) return this.appendInt32(low32);
      if (high32 === -1 && low32 >= 0x80000000) return this.appendInt32(low32 - 0x100000000);

      var numBytes = Math.ceil((65 - Math.clz32(high32 >= 0 ? high32 : -high32 - 1)) / 7);
      if (this.offset + numBytes > this.buf.byteLength) this.grow();
      for (var i = 0; i < 4; i++) {
        this.buf[this.offset + i] = low32 & 0x7f | 0x80;
        low32 >>>= 7; // zero-filling right shift
      }
      this.buf[this.offset + 4] = low32 & 0x0f | (high32 & 0x07) << 4 | (numBytes === 5 ? 0x00 : 0x80);
      high32 >>= 3; // sign-propagating right shift
      for (var _i2 = 5; _i2 < numBytes; _i2++) {
        this.buf[this.offset + _i2] = high32 & 0x7f | (_i2 === numBytes - 1 ? 0x00 : 0x80);
        high32 >>= 7;
      }
      this.offset += numBytes;
      return numBytes;
    }

    /**
     * Appends the contents of byte buffer `data` to the buffer. Returns the
     * number of bytes appended.
     */

  }, {
    key: 'appendRawBytes',
    value: function appendRawBytes(data) {
      if (this.offset + data.byteLength > this.buf.byteLength) {
        this.grow(this.offset + data.byteLength);
      }
      this.buf.set(data, this.offset);
      this.offset += data.byteLength;
      return data.byteLength;
    }

    /**
     * Appends a UTF-8 string to the buffer, without any metadata. Returns the
     * number of bytes appended.
     */

  }, {
    key: 'appendRawString',
    value: function appendRawString(value) {
      if (typeof value !== 'string') throw new TypeError('value is not a string');
      return this.appendRawBytes(stringToUtf8(value));
    }

    /**
     * Appends the contents of byte buffer `data` to the buffer, prefixed with the
     * number of bytes in the buffer (as a LEB128-encoded unsigned integer).
     */

  }, {
    key: 'appendPrefixedBytes',
    value: function appendPrefixedBytes(data) {
      this.appendUint53(data.byteLength);
      this.appendRawBytes(data);
      return this;
    }

    /**
     * Appends a UTF-8 string to the buffer, prefixed with its length in bytes
     * (where the length is encoded as an unsigned LEB128 integer).
     */

  }, {
    key: 'appendPrefixedString',
    value: function appendPrefixedString(value) {
      if (typeof value !== 'string') throw new TypeError('value is not a string');
      this.appendPrefixedBytes(stringToUtf8(value));
      return this;
    }

    /**
     * Takes a value, which must be a string consisting only of hexadecimal
     * digits, maps it to a byte array, and appends it to the buffer, prefixed
     * with its length in bytes.
     */

  }, {
    key: 'appendHexString',
    value: function appendHexString(value) {
      this.appendPrefixedBytes(hexStringToBytes(value));
      return this;
    }

    /**
     * Flushes any unwritten data to the buffer. Call this before reading from
     * the buffer constructed by this Encoder.
     */

  }, {
    key: 'finish',
    value: function finish() {}
  }, {
    key: 'buffer',
    get: function get() {
      this.finish();
      return this.buf.subarray(0, this.offset);
    }
  }]);

  return Encoder;
}();

/**
 * Counterpart to Encoder. Wraps a Uint8Array buffer with a cursor indicating
 * the current decoding position, and allows values to be incrementally read by
 * decoding the bytes at the current position.
 */


var Decoder = function () {
  function Decoder(buffer) {
    _classCallCheck(this, Decoder);

    if (!(buffer instanceof Uint8Array)) {
      throw new TypeError('Not a byte array: ' + buffer);
    }
    this.buf = buffer;
    this.offset = 0;
  }

  /**
   * Returns false if there is still data to be read at the current decoding
   * position, and true if we are at the end of the buffer.
   */


  _createClass(Decoder, [{
    key: 'reset',


    /**
     * Resets the cursor position, so that the next read goes back to the
     * beginning of the buffer.
     */
    value: function reset() {
      this.offset = 0;
    }

    /**
     * Moves the current decoding position forward by the specified number of
     * bytes, without decoding anything.
     */

  }, {
    key: 'skip',
    value: function skip(bytes) {
      if (this.offset + bytes > this.buf.byteLength) {
        throw new RangeError('cannot skip beyond end of buffer');
      }
      this.offset += bytes;
    }

    /**
     * Reads one byte (0 to 255) from the buffer.
     */

  }, {
    key: 'readByte',
    value: function readByte() {
      this.offset += 1;
      return this.buf[this.offset - 1];
    }

    /**
     * Reads a LEB128-encoded unsigned integer from the current position in the buffer.
     * Throws an exception if the value doesn't fit in a 32-bit unsigned int.
     */

  }, {
    key: 'readUint32',
    value: function readUint32() {
      var result = 0,
          shift = 0;
      while (this.offset < this.buf.byteLength) {
        var nextByte = this.buf[this.offset];
        if (shift === 28 && (nextByte & 0xf0) !== 0) {
          // more than 5 bytes, or value > 0xffffffff
          throw new RangeError('number out of range');
        }
        result = (result | (nextByte & 0x7f) << shift) >>> 0; // right shift to interpret value as unsigned
        shift += 7;
        this.offset++;
        if ((nextByte & 0x80) === 0) return result;
      }
      throw new RangeError('buffer ended with incomplete number');
    }

    /**
     * Reads a LEB128-encoded signed integer from the current position in the buffer.
     * Throws an exception if the value doesn't fit in a 32-bit signed int.
     */

  }, {
    key: 'readInt32',
    value: function readInt32() {
      var result = 0,
          shift = 0;
      while (this.offset < this.buf.byteLength) {
        var nextByte = this.buf[this.offset];
        if (shift === 28 && (nextByte & 0x80) !== 0 || // more than 5 bytes
        shift === 28 && (nextByte & 0x40) === 0 && (nextByte & 0x38) !== 0 || // positive int > 0x7fffffff
        shift === 28 && (nextByte & 0x40) !== 0 && (nextByte & 0x38) !== 0x38) {
          // negative int < -0x80000000
          throw new RangeError('number out of range');
        }
        result |= (nextByte & 0x7f) << shift;
        shift += 7;
        this.offset++;

        if ((nextByte & 0x80) === 0) {
          if ((nextByte & 0x40) === 0 || shift > 28) {
            return result; // positive, or negative value that doesn't need sign-extending
          } else {
            return result | -1 << shift; // sign-extend negative integer
          }
        }
      }
      throw new RangeError('buffer ended with incomplete number');
    }

    /**
     * Reads a LEB128-encoded unsigned integer from the current position in the
     * buffer. Allows any integer that can be safely represented by JavaScript
     * (up to 2^53 - 1), and throws an exception outside of that range.
     */

  }, {
    key: 'readUint53',
    value: function readUint53() {
      var _readUint = this.readUint64(),
          low32 = _readUint.low32,
          high32 = _readUint.high32;

      if (high32 < 0 || high32 > 0x1fffff) {
        throw new RangeError('number out of range');
      }
      return high32 * 0x100000000 + low32;
    }

    /**
     * Reads a LEB128-encoded signed integer from the current position in the
     * buffer. Allows any integer that can be safely represented by JavaScript
     * (between -(2^53 - 1) and 2^53 - 1), throws an exception outside of that range.
     */

  }, {
    key: 'readInt53',
    value: function readInt53() {
      var _readInt = this.readInt64(),
          low32 = _readInt.low32,
          high32 = _readInt.high32;

      if (high32 < -0x200000 || high32 === -0x200000 && low32 === 0 || high32 > 0x1fffff) {
        throw new RangeError('number out of range');
      }
      return high32 * 0x100000000 + low32;
    }

    /**
     * Reads a LEB128-encoded unsigned integer from the current position in the
     * buffer. Throws an exception if the value doesn't fit in a 64-bit unsigned
     * int. Returns the number in two 32-bit halves, as an object of the form
     * `{high32, low32}`.
     */

  }, {
    key: 'readUint64',
    value: function readUint64() {
      var low32 = 0,
          high32 = 0,
          shift = 0;
      while (this.offset < this.buf.byteLength && shift <= 28) {
        var nextByte = this.buf[this.offset];
        low32 = (low32 | (nextByte & 0x7f) << shift) >>> 0; // right shift to interpret value as unsigned
        if (shift === 28) {
          high32 = (nextByte & 0x70) >>> 4;
        }
        shift += 7;
        this.offset++;
        if ((nextByte & 0x80) === 0) return { high32: high32, low32: low32 };
      }

      shift = 3;
      while (this.offset < this.buf.byteLength) {
        var _nextByte = this.buf[this.offset];
        if (shift === 31 && (_nextByte & 0xfe) !== 0) {
          // more than 10 bytes, or value > 2^64 - 1
          throw new RangeError('number out of range');
        }
        high32 = (high32 | (_nextByte & 0x7f) << shift) >>> 0;
        shift += 7;
        this.offset++;
        if ((_nextByte & 0x80) === 0) return { high32: high32, low32: low32 };
      }
      throw new RangeError('buffer ended with incomplete number');
    }

    /**
     * Reads a LEB128-encoded signed integer from the current position in the
     * buffer. Throws an exception if the value doesn't fit in a 64-bit signed
     * int. Returns the number in two 32-bit halves, as an object of the form
     * `{high32, low32}`. The `low32` half is always non-negative, and the
     * sign of the `high32` half indicates the sign of the 64-bit number.
     */

  }, {
    key: 'readInt64',
    value: function readInt64() {
      var low32 = 0,
          high32 = 0,
          shift = 0;
      while (this.offset < this.buf.byteLength && shift <= 28) {
        var nextByte = this.buf[this.offset];
        low32 = (low32 | (nextByte & 0x7f) << shift) >>> 0; // right shift to interpret value as unsigned
        if (shift === 28) {
          high32 = (nextByte & 0x70) >>> 4;
        }
        shift += 7;
        this.offset++;
        if ((nextByte & 0x80) === 0) {
          if ((nextByte & 0x40) !== 0) {
            // sign-extend negative integer
            if (shift < 32) low32 = (low32 | -1 << shift) >>> 0;
            high32 |= -1 << Math.max(shift - 32, 0);
          }
          return { high32: high32, low32: low32 };
        }
      }

      shift = 3;
      while (this.offset < this.buf.byteLength) {
        var _nextByte2 = this.buf[this.offset];
        // On the 10th byte there are only two valid values: all 7 value bits zero
        // (if the value is positive) or all 7 bits one (if the value is negative)
        if (shift === 31 && _nextByte2 !== 0 && _nextByte2 !== 0x7f) {
          throw new RangeError('number out of range');
        }
        high32 |= (_nextByte2 & 0x7f) << shift;
        shift += 7;
        this.offset++;
        if ((_nextByte2 & 0x80) === 0) {
          if ((_nextByte2 & 0x40) !== 0 && shift < 32) {
            // sign-extend negative integer
            high32 |= -1 << shift;
          }
          return { high32: high32, low32: low32 };
        }
      }
      throw new RangeError('buffer ended with incomplete number');
    }

    /**
     * Extracts a subarray `length` bytes in size, starting from the current
     * position in the buffer, and moves the position forward.
     */

  }, {
    key: 'readRawBytes',
    value: function readRawBytes(length) {
      var start = this.offset;
      if (start + length > this.buf.byteLength) {
        throw new RangeError('subarray exceeds buffer size');
      }
      this.offset += length;
      return this.buf.subarray(start, this.offset);
    }

    /**
     * Extracts `length` bytes from the buffer, starting from the current position,
     * and returns the UTF-8 string decoding of those bytes.
     */

  }, {
    key: 'readRawString',
    value: function readRawString(length) {
      return utf8ToString(this.readRawBytes(length));
    }

    /**
     * Extracts a subarray from the current position in the buffer, prefixed with
     * its length in bytes (encoded as an unsigned LEB128 integer).
     */

  }, {
    key: 'readPrefixedBytes',
    value: function readPrefixedBytes() {
      return this.readRawBytes(this.readUint53());
    }

    /**
     * Reads a UTF-8 string from the current position in the buffer, prefixed with its
     * length in bytes (where the length is encoded as an unsigned LEB128 integer).
     */

  }, {
    key: 'readPrefixedString',
    value: function readPrefixedString() {
      return utf8ToString(this.readPrefixedBytes());
    }

    /**
     * Reads a byte array from the current position in the buffer, prefixed with its
     * length in bytes. Returns that byte array converted to a hexadecimal string.
     */

  }, {
    key: 'readHexString',
    value: function readHexString() {
      return bytesToHexString(this.readPrefixedBytes());
    }
  }, {
    key: 'done',
    get: function get() {
      return this.offset === this.buf.byteLength;
    }
  }]);

  return Decoder;
}();

/**
 * An encoder that uses run-length encoding to compress sequences of repeated
 * values. The constructor argument specifies the type of values, which may be
 * either 'int', 'uint', or 'utf8'. Besides valid values of the selected
 * datatype, values may also be null.
 *
 * The encoded buffer starts with a LEB128-encoded signed integer, the
 * repetition count. The interpretation of the following values depends on this
 * repetition count:
 *   - If this number is a positive value n, the next value in the buffer
 *     (encoded as the specified datatype) is repeated n times in the sequence.
 *   - If the repetition count is a negative value -n, then the next n values
 *     (encoded as the specified datatype) in the buffer are treated as a
 *     literal, i.e. they appear in the sequence without any further
 *     interpretation or repetition.
 *   - If the repetition count is zero, then the next value in the buffer is a
 *     LEB128-encoded unsigned integer indicating the number of null values
 *     that appear at the current position in the sequence.
 *
 * After one of these three has completed, the process repeats, starting again
 * with a repetition count, until we reach the end of the buffer.
 */


var RLEEncoder = function (_Encoder) {
  _inherits(RLEEncoder, _Encoder);

  function RLEEncoder(type) {
    _classCallCheck(this, RLEEncoder);

    var _this = _possibleConstructorReturn(this, (RLEEncoder.__proto__ || Object.getPrototypeOf(RLEEncoder)).call(this));

    _this.type = type;
    _this.state = 'empty';
    _this.lastValue = undefined;
    _this.count = 0;
    _this.literal = [];
    return _this;
  }

  /**
   * Appends a new value to the sequence. If `repetitions` is given, the value is repeated
   * `repetitions` times.
   */


  _createClass(RLEEncoder, [{
    key: 'appendValue',
    value: function appendValue(value) {
      var repetitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      this._appendValue(value, repetitions);
    }

    /**
     * Like `appendValue()`, but this method is not overridden by `DeltaEncoder`.
     */

  }, {
    key: '_appendValue',
    value: function _appendValue(value) {
      var repetitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (repetitions <= 0) return;
      if (this.state === 'empty') {
        this.state = value === null ? 'nulls' : repetitions === 1 ? 'loneValue' : 'repetition';
        this.lastValue = value;
        this.count = repetitions;
      } else if (this.state === 'loneValue') {
        if (value === null) {
          this.flush();
          this.state = 'nulls';
          this.count = repetitions;
        } else if (value === this.lastValue) {
          this.state = 'repetition';
          this.count = 1 + repetitions;
        } else if (repetitions > 1) {
          this.flush();
          this.state = 'repetition';
          this.count = repetitions;
          this.lastValue = value;
        } else {
          this.state = 'literal';
          this.literal = [this.lastValue];
          this.lastValue = value;
        }
      } else if (this.state === 'repetition') {
        if (value === null) {
          this.flush();
          this.state = 'nulls';
          this.count = repetitions;
        } else if (value === this.lastValue) {
          this.count += repetitions;
        } else if (repetitions > 1) {
          this.flush();
          this.state = 'repetition';
          this.count = repetitions;
          this.lastValue = value;
        } else {
          this.flush();
          this.state = 'loneValue';
          this.lastValue = value;
        }
      } else if (this.state === 'literal') {
        if (value === null) {
          this.literal.push(this.lastValue);
          this.flush();
          this.state = 'nulls';
          this.count = repetitions;
        } else if (value === this.lastValue) {
          this.flush();
          this.state = 'repetition';
          this.count = 1 + repetitions;
        } else if (repetitions > 1) {
          this.literal.push(this.lastValue);
          this.flush();
          this.state = 'repetition';
          this.count = repetitions;
          this.lastValue = value;
        } else {
          this.literal.push(this.lastValue);
          this.lastValue = value;
        }
      } else if (this.state === 'nulls') {
        if (value === null) {
          this.count += repetitions;
        } else if (repetitions > 1) {
          this.flush();
          this.state = 'repetition';
          this.count = repetitions;
          this.lastValue = value;
        } else {
          this.flush();
          this.state = 'loneValue';
          this.lastValue = value;
        }
      }
    }

    /**
     * Copies values from the RLEDecoder `decoder` into this encoder. The `options` object may
     * contain the following keys:
     *  - `count`: The number of values to copy. If not specified, copies all remaining values.
     *  - `sumValues`: If true, the function computes the sum of all numeric values as they are
     *    copied (null values are counted as zero), and returns that number.
     *  - `sumShift`: If set, values are shifted right by `sumShift` bits before adding to the sum.
     *
     * Returns an object of the form `{nonNullValues, sum}` where `nonNullValues` is the number of
     * non-null values copied, and `sum` is the sum (only if the `sumValues` option is set).
     */

  }, {
    key: 'copyFrom',
    value: function copyFrom(decoder) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var count = options.count,
          sumValues = options.sumValues,
          sumShift = options.sumShift;

      if (!(decoder instanceof RLEDecoder) || decoder.type !== this.type) {
        throw new TypeError('incompatible type of decoder');
      }
      var remaining = typeof count === 'number' ? count : Number.MAX_SAFE_INTEGER;
      var nonNullValues = 0,
          sum = 0;
      if (count && remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + count + ' values');
      if (remaining === 0 || decoder.done) return sumValues ? { nonNullValues: nonNullValues, sum: sum } : { nonNullValues: nonNullValues

        // Copy a value so that we have a well-defined starting state. NB: when super.copyFrom() is
        // called by the DeltaEncoder subclass, the following calls to readValue() and appendValue()
        // refer to the overridden methods, while later readRecord(), readRawValue() and _appendValue()
        // calls refer to the non-overridden RLEDecoder/RLEEncoder methods.
      };var firstValue = decoder.readValue();
      if (firstValue === null) {
        var numNulls = Math.min(decoder.count + 1, remaining);
        remaining -= numNulls;
        decoder.count -= numNulls - 1;
        this.appendValue(null, numNulls);
        if (count && remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + count + ' values');
        if (remaining === 0 || decoder.done) return sumValues ? { nonNullValues: nonNullValues, sum: sum } : { nonNullValues: nonNullValues };
        firstValue = decoder.readValue();
        if (firstValue === null) throw new RangeError('null run must be followed by non-null value');
      }
      this.appendValue(firstValue);
      remaining--;
      nonNullValues++;
      if (sumValues) sum += sumShift ? firstValue >>> sumShift : firstValue;
      if (count && remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + count + ' values');
      if (remaining === 0 || decoder.done) return sumValues ? { nonNullValues: nonNullValues, sum: sum } : { nonNullValues: nonNullValues

        // Copy data at the record level without expanding repetitions
      };var startOffset = void 0,
          endOffset = void 0,
          skipValues = !sumValues,
          firstRun = true;
      while (remaining > 0 && !decoder.done) {
        endOffset = decoder.offset;
        if (firstRun && decoder.count === 0) {
          firstRun = false;
          startOffset = decoder.offset;
        }
        if (!firstRun) decoder.readRecord();

        var numValues = Math.min(decoder.count, remaining);
        decoder.count -= numValues;

        if (decoder.state === 'literal') {
          nonNullValues += numValues;
          if (skipValues && !firstRun) {
            decoder.skipRawValues(numValues);
          } else {
            for (var i = 0; i < numValues; i++) {
              if (decoder.done) throw new RangeError('incomplete literal');
              var value = decoder.readRawValue();
              if (value === decoder.lastValue) throw new RangeError('Repetition of values is not allowed in literal');
              decoder.lastValue = value;
              this._appendValue(value);
              if (sumValues) sum += sumShift ? value >>> sumShift : value;
            }
          }
        } else if (decoder.state === 'repetition') {
          nonNullValues += numValues;
          if (sumValues) sum += numValues * (sumShift ? decoder.lastValue >>> sumShift : decoder.lastValue);
          if (!skipValues || firstRun) {
            var _value = decoder.lastValue;
            this._appendValue(_value);
            if (numValues > 1) {
              this._appendValue(_value);
              if (this.state !== 'repetition') throw new RangeError('Unexpected state ' + this.state);
              this.count += numValues - 2;
            }
          }
        } else if (decoder.state === 'nulls') {
          if (!skipValues || firstRun) {
            this._appendValue(null);
            if (this.state !== 'nulls') throw new RangeError('Unexpected state ' + this.state);
            this.count += numValues - 1;
          }
        }

        if (firstRun) {
          firstRun = false;
          startOffset = decoder.offset;
          remaining -= numValues;
        } else if ((decoder.done || remaining === numValues) && skipValues) {
          // If that was the last record, and we skipped over its values, we have to go back and re-read
          // it. However, we can directly copy the previous records at the byte level.
          skipValues = false;
          decoder.offset = endOffset;
          decoder.state = undefined;
          if (this.state === 'literal') this.literal.push(this.lastValue);
          this.flush();
          if (startOffset < endOffset) {
            this.appendRawBytes(decoder.buf.subarray(startOffset, endOffset));
          }
        } else {
          remaining -= numValues;
        }
      }
      if (count && remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + count + ' values');
      return sumValues ? { nonNullValues: nonNullValues, sum: sum } : { nonNullValues: nonNullValues };
    }

    /**
     * Private method, do not call from outside the class.
     */

  }, {
    key: 'flush',
    value: function flush() {
      if (this.state === 'loneValue') {
        this.appendInt32(-1);
        this.appendRawValue(this.lastValue);
      } else if (this.state === 'repetition') {
        this.appendInt53(this.count);
        this.appendRawValue(this.lastValue);
      } else if (this.state === 'literal') {
        this.appendInt53(-this.literal.length);
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = this.literal[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var v = _step2.value;
            this.appendRawValue(v);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      } else if (this.state === 'nulls') {
        this.appendInt32(0);
        this.appendUint53(this.count);
      }
      this.state = 'empty';
    }

    /**
     * Private method, do not call from outside the class.
     */

  }, {
    key: 'appendRawValue',
    value: function appendRawValue(value) {
      if (this.type === 'int') {
        this.appendInt53(value);
      } else if (this.type === 'uint') {
        this.appendUint53(value);
      } else if (this.type === 'utf8') {
        this.appendPrefixedString(value);
      } else {
        throw new RangeError('Unknown RLEEncoder datatype: ' + this.type);
      }
    }

    /**
     * Flushes any unwritten data to the buffer. Call this before reading from
     * the buffer constructed by this Encoder.
     */

  }, {
    key: 'finish',
    value: function finish() {
      if (this.state === 'literal') this.literal.push(this.lastValue);
      // Don't write anything if the only values we have seen are nulls
      if (this.state !== 'nulls' || this.offset > 0) this.flush();
    }
  }]);

  return RLEEncoder;
}(Encoder);

/**
 * Counterpart to RLEEncoder: reads values from an RLE-compressed sequence,
 * returning nulls and repeated values as required.
 */


var RLEDecoder = function (_Decoder) {
  _inherits(RLEDecoder, _Decoder);

  function RLEDecoder(type, buffer) {
    _classCallCheck(this, RLEDecoder);

    var _this2 = _possibleConstructorReturn(this, (RLEDecoder.__proto__ || Object.getPrototypeOf(RLEDecoder)).call(this, buffer));

    _this2.type = type;
    _this2.lastValue = undefined;
    _this2.count = 0;
    _this2.state = undefined;
    return _this2;
  }

  /**
   * Returns false if there is still data to be read at the current decoding
   * position, and true if we are at the end of the buffer.
   */


  _createClass(RLEDecoder, [{
    key: 'reset',


    /**
     * Resets the cursor position, so that the next read goes back to the
     * beginning of the buffer.
     */
    value: function reset() {
      this.offset = 0;
      this.lastValue = undefined;
      this.count = 0;
      this.state = undefined;
    }

    /**
     * Returns the next value (or null) in the sequence.
     */

  }, {
    key: 'readValue',
    value: function readValue() {
      if (this.done) return null;
      if (this.count === 0) this.readRecord();
      this.count -= 1;
      if (this.state === 'literal') {
        var value = this.readRawValue();
        if (value === this.lastValue) throw new RangeError('Repetition of values is not allowed in literal');
        this.lastValue = value;
        return value;
      } else {
        return this.lastValue;
      }
    }

    /**
     * Discards the next `numSkip` values in the sequence.
     */

  }, {
    key: 'skipValues',
    value: function skipValues(numSkip) {
      while (numSkip > 0 && !this.done) {
        if (this.count === 0) {
          this.count = this.readInt53();
          if (this.count > 0) {
            this.lastValue = this.count <= numSkip ? this.skipRawValues(1) : this.readRawValue();
            this.state = 'repetition';
          } else if (this.count < 0) {
            this.count = -this.count;
            this.state = 'literal';
          } else {
            // this.count == 0
            this.count = this.readUint53();
            this.lastValue = null;
            this.state = 'nulls';
          }
        }

        var consume = Math.min(numSkip, this.count);
        if (this.state === 'literal') this.skipRawValues(consume);
        numSkip -= consume;
        this.count -= consume;
      }
    }

    /**
     * Private method, do not call from outside the class.
     * Reads a repetition count from the buffer and sets up the state appropriately.
     */

  }, {
    key: 'readRecord',
    value: function readRecord() {
      this.count = this.readInt53();
      if (this.count > 1) {
        var value = this.readRawValue();
        if ((this.state === 'repetition' || this.state === 'literal') && this.lastValue === value) {
          throw new RangeError('Successive repetitions with the same value are not allowed');
        }
        this.state = 'repetition';
        this.lastValue = value;
      } else if (this.count === 1) {
        throw new RangeError('Repetition count of 1 is not allowed, use a literal instead');
      } else if (this.count < 0) {
        this.count = -this.count;
        if (this.state === 'literal') throw new RangeError('Successive literals are not allowed');
        this.state = 'literal';
      } else {
        // this.count == 0
        if (this.state === 'nulls') throw new RangeError('Successive null runs are not allowed');
        this.count = this.readUint53();
        if (this.count === 0) throw new RangeError('Zero-length null runs are not allowed');
        this.lastValue = null;
        this.state = 'nulls';
      }
    }

    /**
     * Private method, do not call from outside the class.
     * Reads one value of the datatype configured on construction.
     */

  }, {
    key: 'readRawValue',
    value: function readRawValue() {
      if (this.type === 'int') {
        return this.readInt53();
      } else if (this.type === 'uint') {
        return this.readUint53();
      } else if (this.type === 'utf8') {
        return this.readPrefixedString();
      } else {
        throw new RangeError('Unknown RLEDecoder datatype: ' + this.type);
      }
    }

    /**
     * Private method, do not call from outside the class.
     * Skips over `num` values of the datatype configured on construction.
     */

  }, {
    key: 'skipRawValues',
    value: function skipRawValues(num) {
      if (this.type === 'utf8') {
        for (var i = 0; i < num; i++) {
          this.skip(this.readUint53());
        }
      } else {
        while (num > 0 && this.offset < this.buf.byteLength) {
          if ((this.buf[this.offset] & 0x80) === 0) num--;
          this.offset++;
        }
        if (num > 0) throw new RangeError('cannot skip beyond end of buffer');
      }
    }
  }, {
    key: 'done',
    get: function get() {
      return this.count === 0 && this.offset === this.buf.byteLength;
    }
  }]);

  return RLEDecoder;
}(Decoder);

/**
 * A variant of RLEEncoder: rather than storing the actual values passed to
 * appendValue(), this version stores only the first value, and for all
 * subsequent values it stores the difference to the previous value. This
 * encoding is good when values tend to come in sequentially incrementing runs,
 * because the delta between successive values is 1, and repeated values of 1
 * are easily compressed with run-length encoding.
 *
 * Null values are also allowed, as with RLEEncoder.
 */


var DeltaEncoder = function (_RLEEncoder) {
  _inherits(DeltaEncoder, _RLEEncoder);

  function DeltaEncoder() {
    _classCallCheck(this, DeltaEncoder);

    var _this3 = _possibleConstructorReturn(this, (DeltaEncoder.__proto__ || Object.getPrototypeOf(DeltaEncoder)).call(this, 'int'));

    _this3.absoluteValue = 0;
    return _this3;
  }

  /**
   * Appends a new integer value to the sequence. If `repetitions` is given, the value is repeated
   * `repetitions` times.
   */


  _createClass(DeltaEncoder, [{
    key: 'appendValue',
    value: function appendValue(value) {
      var repetitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (repetitions <= 0) return;
      if (typeof value === 'number') {
        _get(DeltaEncoder.prototype.__proto__ || Object.getPrototypeOf(DeltaEncoder.prototype), 'appendValue', this).call(this, value - this.absoluteValue, 1);
        this.absoluteValue = value;
        if (repetitions > 1) _get(DeltaEncoder.prototype.__proto__ || Object.getPrototypeOf(DeltaEncoder.prototype), 'appendValue', this).call(this, 0, repetitions - 1);
      } else {
        _get(DeltaEncoder.prototype.__proto__ || Object.getPrototypeOf(DeltaEncoder.prototype), 'appendValue', this).call(this, value, repetitions);
      }
    }

    /**
     * Copies values from the DeltaDecoder `decoder` into this encoder. The `options` object may
     * contain the key `count`, indicating the number of values to copy. If not specified, copies
     * all remaining values in the decoder.
     */

  }, {
    key: 'copyFrom',
    value: function copyFrom(decoder) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (options.sumValues) {
        throw new RangeError('unsupported options for DeltaEncoder.copyFrom()');
      }
      if (!(decoder instanceof DeltaDecoder)) {
        throw new TypeError('incompatible type of decoder');
      }

      var remaining = options.count;
      if (remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + remaining + ' values');
      if (remaining === 0 || decoder.done) return;

      // Copy any null values, and the first non-null value, so that appendValue() computes the
      // difference between the encoder's last value and the decoder's first (absolute) value.
      var value = decoder.readValue(),
          nulls = 0;
      this.appendValue(value);
      if (value === null) {
        nulls = decoder.count + 1;
        if (remaining !== undefined && remaining < nulls) nulls = remaining;
        decoder.count -= nulls - 1;
        this.count += nulls - 1;
        if (remaining > nulls && decoder.done) throw new RangeError('cannot copy ' + remaining + ' values');
        if (remaining === nulls || decoder.done) return;

        // The next value read is certain to be non-null because we're not at the end of the decoder,
        // and a run of nulls must be followed by a run of non-nulls.
        if (decoder.count === 0) this.appendValue(decoder.readValue());
      }

      // Once we have the first value, the subsequent relative values can be copied verbatim without
      // any further processing. Note that the first value copied by super.copyFrom() is an absolute
      // value, while subsequent values are relative. Thus, the sum of all of the (non-null) copied
      // values must equal the absolute value of the final element copied.
      if (remaining !== undefined) remaining -= nulls + 1;

      var _get$call = _get(DeltaEncoder.prototype.__proto__ || Object.getPrototypeOf(DeltaEncoder.prototype), 'copyFrom', this).call(this, decoder, { count: remaining, sumValues: true }),
          nonNullValues = _get$call.nonNullValues,
          sum = _get$call.sum;

      if (nonNullValues > 0) {
        this.absoluteValue = sum;
        decoder.absoluteValue = sum;
      }
    }
  }]);

  return DeltaEncoder;
}(RLEEncoder);

/**
 * Counterpart to DeltaEncoder: reads values from a delta-compressed sequence of
 * numbers (may include null values).
 */


var DeltaDecoder = function (_RLEDecoder) {
  _inherits(DeltaDecoder, _RLEDecoder);

  function DeltaDecoder(buffer) {
    _classCallCheck(this, DeltaDecoder);

    var _this4 = _possibleConstructorReturn(this, (DeltaDecoder.__proto__ || Object.getPrototypeOf(DeltaDecoder)).call(this, 'int', buffer));

    _this4.absoluteValue = 0;
    return _this4;
  }

  /**
   * Resets the cursor position, so that the next read goes back to the
   * beginning of the buffer.
   */


  _createClass(DeltaDecoder, [{
    key: 'reset',
    value: function reset() {
      this.offset = 0;
      this.lastValue = undefined;
      this.count = 0;
      this.state = undefined;
      this.absoluteValue = 0;
    }

    /**
     * Returns the next integer (or null) value in the sequence.
     */

  }, {
    key: 'readValue',
    value: function readValue() {
      var value = _get(DeltaDecoder.prototype.__proto__ || Object.getPrototypeOf(DeltaDecoder.prototype), 'readValue', this).call(this);
      if (value === null) return null;
      this.absoluteValue += value;
      return this.absoluteValue;
    }

    /**
     * Discards the next `numSkip` values in the sequence.
     */

  }, {
    key: 'skipValues',
    value: function skipValues(numSkip) {
      while (numSkip > 0 && !this.done) {
        if (this.count === 0) this.readRecord();
        var consume = Math.min(numSkip, this.count);
        if (this.state === 'literal') {
          for (var i = 0; i < consume; i++) {
            this.lastValue = this.readRawValue();
            this.absoluteValue += this.lastValue;
          }
        } else if (this.state === 'repetition') {
          this.absoluteValue += consume * this.lastValue;
        }
        numSkip -= consume;
        this.count -= consume;
      }
    }
  }]);

  return DeltaDecoder;
}(RLEDecoder);

/**
 * Encodes a sequence of boolean values by mapping it to a sequence of integers:
 * the number of false values, followed by the number of true values, followed
 * by the number of false values, and so on. Each number is encoded as a LEB128
 * unsigned integer. This encoding is a bit like RLEEncoder, except that we
 * only encode the repetition count but not the actual value, since the values
 * just alternate between false and true (starting with false).
 */


var BooleanEncoder = function (_Encoder2) {
  _inherits(BooleanEncoder, _Encoder2);

  function BooleanEncoder() {
    _classCallCheck(this, BooleanEncoder);

    var _this5 = _possibleConstructorReturn(this, (BooleanEncoder.__proto__ || Object.getPrototypeOf(BooleanEncoder)).call(this));

    _this5.lastValue = false;
    _this5.count = 0;
    return _this5;
  }

  /**
   * Appends a new value to the sequence. If `repetitions` is given, the value is repeated
   * `repetitions` times.
   */


  _createClass(BooleanEncoder, [{
    key: 'appendValue',
    value: function appendValue(value) {
      var repetitions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (value !== false && value !== true) {
        throw new RangeError('Unsupported value for BooleanEncoder: ' + value);
      }
      if (repetitions <= 0) return;
      if (this.lastValue === value) {
        this.count += repetitions;
      } else {
        this.appendUint53(this.count);
        this.lastValue = value;
        this.count = repetitions;
      }
    }

    /**
     * Copies values from the BooleanDecoder `decoder` into this encoder. The `options` object may
     * contain the key `count`, indicating the number of values to copy. If not specified, copies
     * all remaining values in the decoder.
     */

  }, {
    key: 'copyFrom',
    value: function copyFrom(decoder) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (!(decoder instanceof BooleanDecoder)) {
        throw new TypeError('incompatible type of decoder');
      }

      var count = options.count;

      var remaining = typeof count === 'number' ? count : Number.MAX_SAFE_INTEGER;
      if (count && remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + count + ' values');
      if (remaining === 0 || decoder.done) return;

      // Copy one value to bring decoder and encoder state into sync, then finish that value's repetitions
      this.appendValue(decoder.readValue());
      remaining--;
      var firstCopy = Math.min(decoder.count, remaining);
      this.count += firstCopy;
      decoder.count -= firstCopy;
      remaining -= firstCopy;

      while (remaining > 0 && !decoder.done) {
        decoder.count = decoder.readUint53();
        if (decoder.count === 0) throw new RangeError('Zero-length runs are not allowed');
        decoder.lastValue = !decoder.lastValue;
        this.appendUint53(this.count);

        var numCopied = Math.min(decoder.count, remaining);
        this.count = numCopied;
        this.lastValue = decoder.lastValue;
        decoder.count -= numCopied;
        remaining -= numCopied;
      }

      if (count && remaining > 0 && decoder.done) throw new RangeError('cannot copy ' + count + ' values');
    }

    /**
     * Flushes any unwritten data to the buffer. Call this before reading from
     * the buffer constructed by this Encoder.
     */

  }, {
    key: 'finish',
    value: function finish() {
      if (this.count > 0) {
        this.appendUint53(this.count);
        this.count = 0;
      }
    }
  }]);

  return BooleanEncoder;
}(Encoder);

/**
 * Counterpart to BooleanEncoder: reads boolean values from a runlength-encoded
 * sequence.
 */


var BooleanDecoder = function (_Decoder2) {
  _inherits(BooleanDecoder, _Decoder2);

  function BooleanDecoder(buffer) {
    _classCallCheck(this, BooleanDecoder);

    var _this6 = _possibleConstructorReturn(this, (BooleanDecoder.__proto__ || Object.getPrototypeOf(BooleanDecoder)).call(this, buffer));

    _this6.lastValue = true; // is negated the first time we read a count
    _this6.firstRun = true;
    _this6.count = 0;
    return _this6;
  }

  /**
   * Returns false if there is still data to be read at the current decoding
   * position, and true if we are at the end of the buffer.
   */


  _createClass(BooleanDecoder, [{
    key: 'reset',


    /**
     * Resets the cursor position, so that the next read goes back to the
     * beginning of the buffer.
     */
    value: function reset() {
      this.offset = 0;
      this.lastValue = true;
      this.firstRun = true;
      this.count = 0;
    }

    /**
     * Returns the next value in the sequence.
     */

  }, {
    key: 'readValue',
    value: function readValue() {
      if (this.done) return false;
      while (this.count === 0) {
        this.count = this.readUint53();
        this.lastValue = !this.lastValue;
        if (this.count === 0 && !this.firstRun) {
          throw new RangeError('Zero-length runs are not allowed');
        }
        this.firstRun = false;
      }
      this.count -= 1;
      return this.lastValue;
    }

    /**
     * Discards the next `numSkip` values in the sequence.
     */

  }, {
    key: 'skipValues',
    value: function skipValues(numSkip) {
      while (numSkip > 0 && !this.done) {
        if (this.count === 0) {
          this.count = this.readUint53();
          this.lastValue = !this.lastValue;
          if (this.count === 0) throw new RangeError('Zero-length runs are not allowed');
        }
        if (this.count < numSkip) {
          numSkip -= this.count;
          this.count = 0;
        } else {
          this.count -= numSkip;
          numSkip = 0;
        }
      }
    }
  }, {
    key: 'done',
    get: function get() {
      return this.count === 0 && this.offset === this.buf.byteLength;
    }
  }]);

  return BooleanDecoder;
}(Decoder);

module.exports = {
  stringToUtf8: stringToUtf8, utf8ToString: utf8ToString, hexStringToBytes: hexStringToBytes, bytesToHexString: bytesToHexString,
  Encoder: Encoder, Decoder: Decoder, RLEEncoder: RLEEncoder, RLEDecoder: RLEDecoder, DeltaEncoder: DeltaEncoder, DeltaDecoder: DeltaDecoder, BooleanEncoder: BooleanEncoder, BooleanDecoder: BooleanDecoder
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/node-libs-browser/node_modules/buffer/index.js */ "./node_modules/node-libs-browser/node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./backend/index.js":
/*!**************************!*\
  !*** ./backend/index.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"),
    Map = _require.Map,
    List = _require.List;

var _require2 = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    copyObject = _require2.copyObject;

var OpSet = __webpack_require__(/*! ./op_set */ "./backend/op_set.js");

var _require3 = __webpack_require__(/*! ./skip_list */ "./backend/skip_list.js"),
    SkipList = _require3.SkipList;

var _require4 = __webpack_require__(/*! ./columnar */ "./backend/columnar.js"),
    splitContainers = _require4.splitContainers,
    encodeChange = _require4.encodeChange,
    decodeChanges = _require4.decodeChanges,
    encodeDocument = _require4.encodeDocument,
    constructPatch = _require4.constructPatch;

function backendState(backend) {
  if (backend.frozen) {
    throw new Error('Attempting to use an outdated Automerge document that has already been updated. ' + 'Please use the latest document state, or call Automerge.clone() if you really ' + 'need to use this old document state.');
  }
  return backend.state;
}

/**
 * Mutates the operations in `change` to include the opIds of prior value
 * operations on the appropriate properties in `opSet`.
 */
function fillInPred(opSet, change) {
  var myOps = {}; // maps objectId => key => opId
  change.ops.forEach(function (op, index) {
    var opId = change.startOp + index + '@' + change.actor;
    var key = op.insert ? opId : op.key;

    if (myOps[op.obj] && myOps[op.obj][key]) {
      op.pred = [myOps[op.obj][key]];
    } else {
      var fieldOps = OpSet.getFieldOps(opSet, op.obj, key);
      op.pred = fieldOps.map(function (fieldOp) {
        return fieldOp.get('opId');
      }).toJS();
    }

    if (!myOps[op.obj]) myOps[op.obj] = {};
    if (!myOps[op.obj][key]) myOps[op.obj][key] = opId;
  });
}

/**
 * Processes a change request `request` that is incoming from the frontend. Translates index-based
 * addressing of lists into identifier-based addressing used by the CRDT, translates temporary
 * objectIds into operationId-based identifiers, and removes duplicate assignments to the same
 * object and key. `opSet` corresponds to the version of the document on top of which the frontend
 * made its change (which may lag behind the backend, because there might be remote changes that
 * the backend has already applied, but that the frontend has not yet seen).
 */
function processChangeRequest(state, opSet, request, startOp) {
  var actor = request.actor,
      seq = request.seq,
      deps = request.deps,
      time = request.time,
      message = request.message;

  var change = { actor: actor, seq: seq, startOp: startOp, deps: deps, time: time, message: message, ops: [] };

  var objectIds = state.get('objectIds'),
      objectTypes = {},
      elemIds = {},
      assignments = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = request.ops[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var op = _step.value;

      var opId = startOp + change.ops.length + '@' + actor;
      op = copyObject(op);

      if (objectIds.has(op.obj)) {
        op.obj = objectIds.get(op.obj);
      }
      if (op.action === 'link' && objectIds.has(op.child)) {
        op.child = objectIds.get(op.child);
      }

      var objType = objectTypes[op.obj] || opSet.getIn(['byObject', op.obj, '_init', 'action']);

      // The objectId generated by the frontend is temporary, and we map it into an operation ID.
      if (op.action.startsWith('make')) {
        objectIds = objectIds.set(op.child, opId);
        delete op.child;
        objectTypes[opId] = op.action;
      }

      if (objType === 'makeList' || objType === 'makeText') {
        if (!elemIds[op.obj]) {
          elemIds[op.obj] = opSet.getIn(['byObject', op.obj, '_elemIds']) || new SkipList();
        }
        if (typeof op.key !== 'number') {
          throw new TypeError('Unexpected operation key: ' + op.key);
        }

        if (op.insert) {
          if (op.key === 0) {
            op.key = '_head';
            elemIds[op.obj] = elemIds[op.obj].insertAfter(null, opId);
          } else {
            op.key = elemIds[op.obj].keyOf(op.key - 1);
            elemIds[op.obj] = elemIds[op.obj].insertAfter(op.key, opId);
          }
        } else {
          op.key = elemIds[op.obj].keyOf(op.key);
          if (op.action === 'del') {
            elemIds[op.obj] = elemIds[op.obj].removeKey(op.key);
          }
        }
      }

      // Detect duplicate assignments to the same object and key
      if (['set', 'del', 'link', 'inc'].includes(op.action) && !op.insert) {
        if (!assignments[op.obj]) {
          assignments[op.obj] = _defineProperty({}, op.key, op);
        } else if (!assignments[op.obj][op.key]) {
          assignments[op.obj][op.key] = op;
        } else if (op.action === 'inc') {
          assignments[op.obj][op.key].value += op.value;
          continue;
        } else {
          assignments[op.obj][op.key].action = op.action;
          assignments[op.obj][op.key].value = op.value;
          continue;
        }
      }

      change.ops.push(op);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return [state.set('objectIds', objectIds), change];
}

/**
 * Returns an empty node state.
 */
function init() {
  var opSet = OpSet.init(),
      versionObj = Map({ version: 0, localOnly: true, opSet: opSet });
  var state = Map({ opSet: opSet, versions: List.of(versionObj), objectIds: Map() });
  return { state: state };
}

function clone(backend) {
  return { state: backendState(backend) };
}

function free(backend) {
  backend.state = null;
  backend.frozen = true;
}

/**
 * Constructs a patch object from the current node state `state` and the
 * object modifications `diffs`.
 */
function makePatch(state, diffs, request, isIncremental) {
  var version = state.get('versions').last().get('version');
  var clock = state.getIn(['opSet', 'states']).map(function (seqs) {
    return seqs.size;
  }).toJSON();
  var deps = state.getIn(['opSet', 'deps']).toJSON().sort();
  var canUndo = state.getIn(['opSet', 'undoPos']) > 0;
  var canRedo = !state.getIn(['opSet', 'redoStack']).isEmpty();
  var patch = { version: version, clock: clock, deps: deps, canUndo: canUndo, canRedo: canRedo, diffs: diffs };

  if (isIncremental && request) {
    patch.actor = request.actor;
    patch.seq = request.seq;
  }
  return patch;
}

/**
 * The implementation behind `applyChanges()`, `applyLocalChange()`, and
 * `loadChanges()`.
 */
function apply(state, changes, request, isUndoable, isIncremental) {
  var diffs = isIncremental ? {} : null;
  var opSet = state.get('opSet');
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = changes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var change = _step2.value;
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = splitContainers(change)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var chunk = _step3.value;

          if (request) {
            opSet = OpSet.addLocalChange(opSet, change, isUndoable, diffs);
          } else {
            opSet = OpSet.addChange(opSet, change, diffs);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  OpSet.finalizePatch(opSet, diffs);
  state = state.set('opSet', opSet);

  if (isIncremental) {
    var version = state.get('versions').last().get('version') + 1;
    var versionObj = Map({ version: version, localOnly: true, opSet: opSet });
    state = state.update('versions', function (versions) {
      return versions.push(versionObj);
    });
  } else {
    var _versionObj = Map({ version: 0, localOnly: true, opSet: opSet });
    state = state.set('versions', List.of(_versionObj));
  }

  return [state, isIncremental ? makePatch(state, diffs, request, true) : null];
}

/**
 * Applies a list of `changes` from remote nodes to the node state `backend`.
 * Returns a two-element array `[state, patch]` where `state` is the updated
 * node state, and `patch` describes the modifications that need to be made
 * to the document objects to reflect these changes.
 */
function applyChanges(backend, changes) {
  var state = backendState(backend),
      patch = void 0;

  // The localOnly flag on a version object is set to true if all changes since that version have
  // been local changes. Since we are applying a remote change here, we have to set that flag to
  // false on all existing version objects.
  state = state.update('versions', function (versions) {
    return versions.map(function (v) {
      return v.set('localOnly', false);
    });
  });
  var _apply = apply(state, changes, null, false, true);

  var _apply2 = _slicedToArray(_apply, 2);

  state = _apply2[0];
  patch = _apply2[1];

  backend.frozen = true;
  return [{ state: state }, patch];
}

/**
 * Takes a single change request `request` made by the local user, and applies
 * it to the node state `backend`. The difference to `applyChanges()` is that this
 * function adds the change to the undo history, so it can be undone (whereas
 * remote changes are not normally added to the undo history). Returns a
 * two-element array `[backend, patch]` where `backend` is the updated node state,
 * and `patch` confirms the modifications to the document objects.
 */
function applyLocalChange(backend, request) {
  var state = backendState(backend);
  if (typeof request.actor !== 'string' || typeof request.seq !== 'number') {
    throw new TypeError('Change request requries `actor` and `seq` properties');
  }
  if (typeof request.time !== 'number') {
    throw new TypeError('Change request requires `time` property');
  }
  // Throw error if we have already applied this change request
  if (request.seq <= state.getIn(['opSet', 'states', request.actor], List()).size) {
    throw new RangeError('Change request has already been applied');
  }

  var versionObj = state.get('versions').find(function (v) {
    return v.get('version') === request.version;
  });
  if (!versionObj) {
    throw new RangeError('Unknown base document version ' + request.version);
  }
  request.deps = versionObj.getIn(['opSet', 'deps']).toJSON();

  var change = void 0,
      startOp = versionObj.getIn(['opSet', 'maxOp'], 0) + 1;
  if (request.requestType === 'change') {
    ;
    var _processChangeRequest = processChangeRequest(state, versionObj.get('opSet'), request, startOp);

    var _processChangeRequest2 = _slicedToArray(_processChangeRequest, 2);

    state = _processChangeRequest2[0];
    change = _processChangeRequest2[1];
  } else if (request.requestType === 'undo') {
    ;
    var _undo = undo(state, request, startOp);

    var _undo2 = _slicedToArray(_undo, 2);

    state = _undo2[0];
    change = _undo2[1];
  } else if (request.requestType === 'redo') {
    ;
    var _redo = redo(state, request, startOp);

    var _redo2 = _slicedToArray(_redo, 2);

    state = _redo2[0];
    change = _redo2[1];
  } else {
    throw new RangeError('Unknown requestType: ' + request.requestType);
  }

  fillInPred(versionObj.get('opSet'), change);
  var binaryChange = encodeChange(change);
  var patch = void 0,
      isUndoable = request.requestType === 'change' && request.undoable !== false;
  var _apply3 = apply(state, [binaryChange], request, isUndoable, true);

  var _apply4 = _slicedToArray(_apply3, 2);

  state = _apply4[0];
  patch = _apply4[1];


  state = state.update('versions', function (versions) {
    // Remove any versions before the one referenced by the current request, since future requests
    // will always reference a version number that is greater than or equal to the current
    return versions.filter(function (v) {
      return v.get('version') >= request.version;
    })
    // Update the list of past versions so that if a future change request from the frontend
    // refers to one of these versions, we know exactly what state the frontend was in when it
    // made the change. If there have only been local updates since a given version, then the
    // frontend is in sync with the backend (since the frontend has applied the same change
    // locally). However, if there have also been remote updates, then we construct a special
    // opSet that contains only the local changes but excludes the remote ones. This opSet should
    // match the state of the frontend (which has not yet seen the remote update).
    .map(function (v) {
      if (v.get('localOnly')) {
        return v.set('opSet', state.get('opSet'));
      } else {
        return v.set('opSet', OpSet.addLocalChange(v.get('opSet'), binaryChange, false, null));
      }
    });
  });
  backend.frozen = true;
  return [{ state: state }, patch, binaryChange];
}

/**
 * Returns the state of the document serialised to an Uint8Array.
 */
function save(backend) {
  return encodeDocument(getChanges(backend, []));
}

/**
 * Loads the document and/or changes contained in an Uint8Array, and returns a
 * backend initialised with this state.
 */
function load(data) {
  // Reconstruct the original change history that created the document.
  // It's a bit silly to convert to and from the binary encoding several times...!
  var binaryChanges = decodeChanges([data]).map(encodeChange);
  return loadChanges(init(), binaryChanges);
}

/**
 * Applies a list of `changes` to the node state `backend`, and returns the updated
 * state with those changes incorporated. Unlike `applyChanges()`, this function
 * does not produce a patch describing the incremental modifications, making it
 * a little faster when loading a document from disk. When all the changes have
 * been loaded, you can use `getPatch()` to construct the latest document state.
 */
function loadChanges(backend, changes) {
  var state = backendState(backend);

  var _apply5 = apply(state, changes, null, false, false),
      _apply6 = _slicedToArray(_apply5, 2),
      newState = _apply6[0],
      _ = _apply6[1];

  backend.frozen = true;
  return { state: newState };
}

/**
 * Returns a patch that, when applied to an empty document, constructs the
 * document tree in the state described by the node state `backend`.
 */
function getPatch(backend) {
  var state = backendState(backend);
  var diffs = constructPatch(save(backend));
  return makePatch(state, diffs, null, false);
}

function getChangesForActor(backend, actorId) {
  var state = backendState(backend);
  return OpSet.getChangesForActor(state.get('opSet'), actorId);
}

function getChanges(backend, haveDeps) {
  if (!Array.isArray(haveDeps)) {
    throw new TypeError('Pass an array of hashes to Backend.getChanges()');
  }
  var state = backendState(backend);
  return OpSet.getMissingChanges(state.get('opSet'), List(haveDeps));
}

function getMissingDeps(backend) {
  var state = backendState(backend);
  return OpSet.getMissingDeps(state.get('opSet'));
}

/**
 * Undoes the last change by the local user in the node state `state`. The
 * `request` object contains all parts of the change except the operations;
 * this function fetches the operations from the undo stack, pushes a record
 * onto the redo stack, and returns a two-element list `[state, change]`
 * where `change` is the change to be applied.
 */
function undo(state, request, startOp) {
  var undoPos = state.getIn(['opSet', 'undoPos']);
  var undoOps = state.getIn(['opSet', 'undoStack', undoPos - 1]);
  if (undoPos < 1 || !undoOps) {
    throw new RangeError('Cannot undo: there is nothing to be undone');
  }
  var actor = request.actor,
      seq = request.seq,
      deps = request.deps,
      time = request.time,
      message = request.message;

  var change = { actor: actor, seq: seq, startOp: startOp, deps: deps, time: time, message: message, ops: undoOps.toJS() };

  var opSet = state.get('opSet');
  var redoOps = List().withMutations(function (redoOps) {
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = undoOps[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var op = _step4.value;

        if (!['set', 'del', 'link', 'inc'].includes(op.get('action'))) {
          throw new RangeError('Unexpected operation type in undo history: ' + op);
        }
        // TODO this duplicates OpSet.recordUndoHistory
        var key = OpSet.getOperationKey(op);
        var fieldOps = OpSet.getFieldOps(opSet, op.get('obj'), key);
        if (op.get('action') === 'inc') {
          redoOps.push(Map({ action: 'inc', obj: op.get('obj'), key: key, insert: false, value: -op.get('value') }));
        } else if (fieldOps.isEmpty()) {
          redoOps.push(Map({ action: 'del', obj: op.get('obj'), key: key, insert: false }));
        } else {
          var _iteratorNormalCompletion5 = true;
          var _didIteratorError5 = false;
          var _iteratorError5 = undefined;

          try {
            for (var _iterator5 = fieldOps[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
              var fieldOp = _step5.value;

              if (fieldOp.get('insert')) {
                fieldOp = fieldOp.remove('insert').set('key', key);
              }
              if (fieldOp.get('action').startsWith('make')) {
                var childId = fieldOp.get('child', fieldOp.get('opId'));
                fieldOp = fieldOp.set('action', 'link').set('child', childId);
              }
              fieldOp = fieldOp.remove('opId').remove('pred').set('insert', false);
              redoOps.push(fieldOp);
            }
          } catch (err) {
            _didIteratorError5 = true;
            _iteratorError5 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion5 && _iterator5.return) {
                _iterator5.return();
              }
            } finally {
              if (_didIteratorError5) {
                throw _iteratorError5;
              }
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }
  });

  opSet = opSet.set('undoPos', undoPos - 1).update('redoStack', function (stack) {
    return stack.push(redoOps);
  });
  return [state.set('opSet', opSet), change];
}

/**
 * Redoes the last `undo()` in the node state `state`. The `request` object
 * contains all parts of the change except the operations; this function
 * fetches the operations from the redo stack, and returns two-element list
 * `[state, change]` where `change` is the change to be applied.
 */
function redo(state, request, startOp) {
  var redoOps = state.getIn(['opSet', 'redoStack']).last();
  if (!redoOps) {
    throw new RangeError('Cannot redo: the last change was not an undo');
  }
  var actor = request.actor,
      seq = request.seq,
      deps = request.deps,
      time = request.time,
      message = request.message;

  var change = { actor: actor, seq: seq, startOp: startOp, deps: deps, time: time, message: message, ops: redoOps.toJS() };

  var opSet = state.get('opSet').update('undoPos', function (undoPos) {
    return undoPos + 1;
  }).update('redoStack', function (stack) {
    return stack.pop();
  });
  return [state.set('opSet', opSet), change];
}

function getUndoStack(backend) {
  return backendState(backend).getIn(['opSet', 'undoStack']).toJS();
}

function getRedoStack(backend) {
  return backendState(backend).getIn(['opSet', 'redoStack']).toJS();
}

module.exports = {
  init: init, clone: clone, free: free, applyChanges: applyChanges, applyLocalChange: applyLocalChange, save: save, load: load, loadChanges: loadChanges, getPatch: getPatch,
  getChangesForActor: getChangesForActor, getChanges: getChanges, getMissingDeps: getMissingDeps, getUndoStack: getUndoStack, getRedoStack: getRedoStack
};

/***/ }),

/***/ "./backend/op_set.js":
/*!***************************!*\
  !*** ./backend/op_set.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"),
    Map = _require.Map,
    List = _require.List,
    Set = _require.Set,
    fromJS = _require.fromJS;

var _require2 = __webpack_require__(/*! ./skip_list */ "./backend/skip_list.js"),
    SkipList = _require2.SkipList;

var _require3 = __webpack_require__(/*! ./columnar */ "./backend/columnar.js"),
    decodeChange = _require3.decodeChange,
    decodeChangeMeta = _require3.decodeChangeMeta;

var _require4 = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    ROOT_ID = _require4.ROOT_ID,
    parseOpId = _require4.parseOpId;

// Returns true if all changes that causally precede the given change
// have already been applied in `opSet`.


function causallyReady(opSet, change) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = change.deps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var hash = _step.value;

      if (!opSet.hasIn(['hashes', hash])) return false;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return true;
}

/**
 * Returns the path from the root object to the given objectId, as an array of
 * operations describing the objects and keys traversed. If there are several
 * paths to the same object, returns one of the paths arbitrarily.
 */
function getPath(opSet, objectId) {
  var path = [];
  while (objectId !== ROOT_ID) {
    var ref = opSet.getIn(['byObject', objectId, '_inbound'], Set()).first();
    if (!ref) throw new RangeError('No path found to object ' + objectId);
    path.unshift(ref);
    objectId = ref.get('obj');
  }
  return path;
}

/**
 * Returns a string that is either 'map', 'table', 'list', or 'text', indicating
 * the type of the object with ID `objectId`.
 */
function getObjectType(opSet, objectId) {
  if (objectId === ROOT_ID) return 'map';
  var objInit = opSet.getIn(['byObject', objectId, '_init', 'action']);
  var type = { makeMap: 'map', makeTable: 'table', makeList: 'list', makeText: 'text' }[objInit];
  if (!type) throw new RangeError('Unknown object type ' + objInit + ' for ' + objectId);
  return type;
}

// Processes a 'makeMap', 'makeList', 'makeTable', or 'makeText' operation
function applyMake(opSet, op, patch) {
  var objectId = getChildId(op),
      action = op.get('action');
  if (opSet.hasIn(['byObject', objectId, '_keys'])) throw new Error('Duplicate creation of object ' + objectId);

  var object = Map({ _init: op, _inbound: Set(), _keys: Map() });
  if (action === 'makeList' || action === 'makeText') {
    object = object.set('_elemIds', new SkipList());
  }
  opSet = opSet.setIn(['byObject', objectId], object);

  if (patch) {
    patch.objectId = objectId;
    patch.type = getObjectType(opSet, objectId);
  }
  return opSet;
}

// Processes an insertion operation. Does not modify any patch because the new list element
// only becomes visible through the assignment of a value to the new list element.
function applyInsert(opSet, op) {
  var objectId = op.get('obj'),
      opId = op.get('opId');
  if (!opSet.get('byObject').has(objectId)) throw new Error('Modification of unknown object ' + objectId);
  if (opSet.hasIn(['byObject', objectId, '_insertion', opId])) throw new Error('Duplicate list element ID ' + opId);

  return opSet.updateIn(['byObject', objectId, '_following', op.get('key')], List(), function (list) {
    return list.push(op);
  }).setIn(['byObject', objectId, '_insertion', opId], op);
}

function updateListElement(opSet, objectId, elemId, patch) {
  var ops = getFieldOps(opSet, objectId, elemId);
  var elemIds = opSet.getIn(['byObject', objectId, '_elemIds']);
  var index = elemIds.indexOf(elemId);

  if (patch && patch.edits === undefined) {
    patch.edits = [];
  }

  if (index >= 0) {
    if (ops.isEmpty()) {
      elemIds = elemIds.removeIndex(index);
      if (patch) patch.edits.push({ action: 'remove', index: index });
    } else {
      elemIds = elemIds.setValue(elemId, ops.first().get('value'));
    }
  } else {
    if (ops.isEmpty()) return opSet; // deleting a non-existent element = no-op

    // find the index of the closest preceding list element
    var prevId = elemId;
    while (true) {
      index = -1;
      prevId = getPrevious(opSet, objectId, prevId);
      if (!prevId) break;
      index = elemIds.indexOf(prevId);
      if (index >= 0) break;
    }

    index += 1;
    elemIds = elemIds.insertIndex(index, elemId, ops.first().get('value'));
    if (patch) patch.edits.push({ action: 'insert', index: index });
  }
  return opSet.setIn(['byObject', objectId, '_elemIds'], elemIds);
}

/**
 * Computes the inverse of operation `op` and adds it to the list of undo operations
 * (`undoLocal`) in `opSet`. The inverse is the operation that restores the modified
 * field to its previous value. Returns the updated `opSet`.
 */
function recordUndoHistory(opSet, op) {
  if (!opSet.has('undoLocal')) return opSet;
  var objectId = op.get('obj'),
      key = getOperationKey(op),
      value = op.get('value');

  var undoOps = void 0;
  if (op.get('action') === 'inc') {
    undoOps = List.of(Map({ action: 'inc', obj: objectId, key: key, insert: false, value: -value }));
  } else {
    undoOps = getFieldOps(opSet, objectId, key).map(function (ref) {
      if (ref.get('insert')) {
        ref = ref.set('key', key);
      }
      if (ref.get('action').startsWith('make')) {
        ref = ref.set('action', 'link').set('child', getChildId(ref));
      }
      ref = ref.filter(function (v, k) {
        return ['action', 'obj', 'key', 'value', 'datatype', 'child'].includes(k);
      });
      ref = ref.set('insert', false);
      return ref;
    });
  }
  if (undoOps.isEmpty()) {
    undoOps = List.of(Map({ action: 'del', obj: objectId, key: key, insert: false }));
  }
  return opSet.update('undoLocal', function (undoLocal) {
    return undoLocal.concat(undoOps);
  });
}

/**
 * Returns true if the operation `op` introduces a child object.
 */
function isChildOp(op) {
  var action = op.get('action');
  return action.startsWith('make') || action === 'link';
}

/**
 * Returns the object ID of the child introduced by `op`.
 */
function getChildId(op) {
  return op.get('child', op.get('opId'));
}

/**
 * Returns the key that is updated by the given operation. In the case of lists and text,
 * the key is the element ID; in the case of maps, it is the property name.
 */
function getOperationKey(op) {
  return op.get('insert') ? op.get('opId') : op.get('key');
}

/**
 * Processes a 'set', 'del', 'make*', 'link', or 'inc' operation. Mutates `patch`
 * to describe the change and returns an updated `opSet`.
 */
function applyAssign(opSet, op, patch) {
  var objectId = op.get('obj'),
      action = op.get('action'),
      key = getOperationKey(op);
  if (!opSet.get('byObject').has(objectId)) throw new RangeError('Modification of unknown object ' + objectId);
  var type = getObjectType(opSet, objectId);

  if (patch) {
    patch.objectId = patch.objectId || objectId;
    if (patch.objectId !== objectId) {
      throw new RangeError('objectId mismatch in patch: ' + patch.objectId + ' != ' + objectId);
    }
    if (patch.props === undefined) {
      patch.props = {};
    }
    if (patch.props[key] === undefined) {
      patch.props[key] = {};
    }

    patch.type = patch.type || type;
    if (patch.type !== type) {
      throw new RangeError('object type mismatch in patch: ' + patch.type + ' != ' + type);
    }
  }

  if (action.startsWith('make')) {
    if (patch) {
      patch.props[key][op.get('opId')] = {};
      opSet = applyMake(opSet, op, patch.props[key][op.get('opId')]);
    } else {
      opSet = applyMake(opSet, op);
    }
  }
  if (action === 'link' && patch) {
    patch.props[key][op.get('opId')] = constructObject(opSet, getChildId(op));
  }

  var ops = getFieldOps(opSet, objectId, key);
  var overwritten = void 0,
      remaining = void 0;

  if (action === 'inc') {
    overwritten = List();
    remaining = ops.map(function (other) {
      if (other.get('action') === 'set' && typeof other.get('value') === 'number' && other.get('datatype') === 'counter' && op.get('pred').includes(other.get('opId'))) {
        return other.set('value', other.get('value') + op.get('value'));
      } else {
        return other;
      }
    });
  } else {
    var priorOpsOverwritten = ops.groupBy(function (other) {
      return op.get('pred').includes(other.get('opId'));
    });
    overwritten = priorOpsOverwritten.get(true, List());
    remaining = priorOpsOverwritten.get(false, List());
  }

  // If any child object references were overwritten, remove them from the index of inbound links

  var _loop = function _loop(old) {
    opSet = opSet.updateIn(['byObject', getChildId(old), '_inbound'], function (ops) {
      return ops.remove(old);
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = overwritten.filter(isChildOp)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var old = _step2.value;

      _loop(old);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (isChildOp(op)) {
    opSet = opSet.updateIn(['byObject', getChildId(op), '_inbound'], Set(), function (ops) {
      return ops.add(op);
    });
  }
  if (action === 'set' || isChildOp(op)) {
    // not 'inc' or 'del'
    remaining = remaining.push(op);
  }
  remaining = remaining.sort(lamportCompare).reverse();
  opSet = opSet.setIn(['byObject', objectId, '_keys', key], remaining);
  setPatchProps(opSet, objectId, key, patch);

  if (type === 'list' || type === 'text') {
    opSet = updateListElement(opSet, objectId, key, patch);
  }
  return opSet;
}

/**
 * Updates `patch` with the fields required in a patch. `pathOp` is an operation
 * along the path from the root to the object being modified, as returned by
 * `getPath()`. Returns the sub-object representing the child identified by this
 * operation.
 */
function initializePatch(opSet, pathOp, patch) {
  var objectId = pathOp.get('obj'),
      opId = pathOp.get('opId'),
      key = getOperationKey(pathOp);
  var type = getObjectType(opSet, objectId);
  patch.objectId = patch.objectId || objectId;
  patch.type = patch.type || type;

  if (patch.objectId !== objectId) {
    throw new RangeError('objectId mismatch in path: ' + patch.objectId + ' != ' + objectId);
  }
  if (patch.type !== type) {
    throw new RangeError('object type mismatch in path: ' + patch.type + ' != ' + type);
  }
  setPatchProps(opSet, objectId, key, patch);

  if (patch.props[key][opId] === undefined) {
    throw new RangeError('field ops for ' + key + ' did not contain opId ' + opId);
  }
  return patch.props[key][opId];
}

/**
 * Updates `patch` to include all the values (including conflicts) for the field
 * `key` of the object with ID `objectId`.
 */
function setPatchProps(opSet, objectId, key, patch) {
  if (!patch) return;
  if (patch.props === undefined) {
    patch.props = {};
  }
  if (patch.props[key] === undefined) {
    patch.props[key] = {};
  }

  var ops = {};
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = getFieldOps(opSet, objectId, key)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var op = _step3.value;

      var opId = op.get('opId');
      ops[opId] = true;

      if (op.get('action') === 'set') {
        patch.props[key][opId] = { value: op.get('value') };
        if (op.get('datatype')) {
          patch.props[key][opId].datatype = op.get('datatype');
        }
      } else if (isChildOp(op)) {
        if (!patch.props[key][opId]) {
          var childId = getChildId(op);
          patch.props[key][opId] = { objectId: childId, type: getObjectType(opSet, childId) };
        }
      } else {
        throw new RangeError('Unexpected operation in field ops: ' + op.get('action'));
      }
    }

    // Remove any values that appear in the patch, but were not returned by getFieldOps()
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = Object.keys(patch.props[key])[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var opId = _step4.value;

      if (!ops[opId]) {
        delete patch.props[key][opId];
      }
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
}

/**
 * Mutates `patch`, changing elemId-based addressing of lists to index-based
 * addressing. (This can only be done once all the changes have been applied,
 * since the indexes are still in flux until that point.)
 */
function finalizePatch(opSet, patch) {
  if (!patch || !patch.props) return;

  if (patch.type === 'list' || patch.type === 'text') {
    var elemIds = opSet.getIn(['byObject', patch.objectId, '_elemIds']);
    var newProps = {};
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = Object.keys(patch.props)[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var elemId = _step5.value;

        if (/^[0-9]+$/.test(elemId)) {
          newProps[elemId] = patch.props[elemId];
        } else if (Object.keys(patch.props[elemId]).length > 0) {
          var index = elemIds.indexOf(elemId);
          if (index < 0) throw new RangeError('List element has no index: ' + elemId);
          newProps[index] = patch.props[elemId];
        }
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5.return) {
          _iterator5.return();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    patch.props = newProps;
  }

  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = Object.keys(patch.props)[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var key = _step6.value;
      var _iteratorNormalCompletion7 = true;
      var _didIteratorError7 = false;
      var _iteratorError7 = undefined;

      try {
        for (var _iterator7 = Object.keys(patch.props[key])[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
          var opId = _step7.value;

          finalizePatch(opSet, patch.props[key][opId]);
        }
      } catch (err) {
        _didIteratorError7 = true;
        _iteratorError7 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion7 && _iterator7.return) {
            _iterator7.return();
          }
        } finally {
          if (_didIteratorError7) {
            throw _iteratorError7;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6.return) {
        _iterator6.return();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
}

/**
 * Applies the operations in the `change` to `opSet`. As a side-effect, `patch`
 * is mutated to describe the changes. Returns the updated `opSet`.
 */
function applyOps(opSet, change, patch) {
  var actor = change.get('actor'),
      seq = change.get('seq'),
      startOp = change.get('startOp');
  var newObjects = Set();
  change.get('ops').forEach(function (op, index) {
    var action = op.get('action'),
        obj = op.get('obj'),
        insert = op.get('insert');
    if (!['set', 'del', 'inc', 'link', 'makeMap', 'makeList', 'makeText', 'makeTable'].includes(action)) {
      throw new RangeError('Unknown operation action: ' + action);
    }
    if (!op.get('pred')) {
      throw new RangeError('Missing \'pred\' field in operation ' + op);
    }

    var localPatch = patch;
    if (patch) {
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = getPath(opSet, obj)[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var pathOp = _step8.value;

          localPatch = initializePatch(opSet, pathOp, localPatch);
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }

    var opWithId = op.merge({ opId: startOp + index + '@' + actor });
    if (insert) {
      opSet = applyInsert(opSet, opWithId);
    }
    if (action.startsWith('make')) {
      newObjects = newObjects.add(getChildId(opWithId));
    }
    if (!newObjects.contains(obj)) {
      opSet = recordUndoHistory(opSet, opWithId);
    }
    opSet = applyAssign(opSet, opWithId, localPatch);
  });
  return opSet;
}

/**
 * Applies the changeset `change` to `opSet` (unless it has already been applied,
 * in which case we do nothing). As a side-effect, `patch` is mutated to describe
 * the changes. Returns the updated `opSet`.
 */
function applyChange(opSet, binaryChange, patch) {
  var change = fromJS(decodeChange(binaryChange));
  var actor = change.get('actor'),
      seq = change.get('seq'),
      startOp = change.get('startOp'),
      hash = change.get('hash');
  if (typeof actor !== 'string' || typeof seq !== 'number' || typeof startOp !== 'number') {
    throw new TypeError('Missing change metadata: actor = ' + actor + ', seq = ' + seq + ', startOp = ' + startOp);
  }
  if (opSet.hasIn(['hashes', hash])) return opSet; // change already applied, return unchanged

  var expectedSeq = opSet.getIn(['states', actor], List()).size + 1;
  if (seq !== expectedSeq) {
    throw new RangeError('Expected change ' + expectedSeq + ' by ' + actor + ', got change ' + seq);
  }

  var maxOpId = 0;
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = change.get('deps')[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var depHash = _step9.value;

      maxOpId = Math.max(maxOpId, opSet.getIn(['hashes', depHash, 'maxOpId']));
      opSet = opSet.updateIn(['hashes', depHash, 'depsFuture'], Set(), function (future) {
        return future.add(hash);
      });
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9.return) {
        _iterator9.return();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  if (startOp !== maxOpId + 1) {
    throw new RangeError('Expected startOp to be ' + (maxOpId + 1) + ', was ' + startOp);
  }

  var queue = change.get('deps'),
      sameActorDep = seq === 1;
  while (!sameActorDep && !queue.isEmpty()) {
    var dep = opSet.getIn(['hashes', queue.first()]);
    queue = queue.shift();
    if (dep.get('actor') === actor && dep.get('seq') === seq - 1) {
      sameActorDep = true;
    } else {
      queue = queue.concat(dep.get('depsPast'));
    }
  }
  if (!sameActorDep) {
    throw new RangeError('Change lacks dependency on prior sequence number by the same actor');
  }

  var changeInfo = Map({
    actor: actor, seq: seq, startOp: startOp,
    change: binaryChange,
    maxOpId: startOp + change.get('ops').size - 1,
    depsPast: change.get('deps').toSet(),
    depsFuture: Set()
  });

  opSet = applyOps(opSet, change, patch);
  return opSet.setIn(['hashes', hash], changeInfo).updateIn(['states', actor], List(), function (prior) {
    return prior.push(hash);
  }).update('deps', function (deps) {
    return deps.subtract(change.get('deps')).add(hash);
  }).update('maxOp', function (maxOp) {
    return Math.max(maxOp, changeInfo.get('maxOpId'));
  }).update('history', function (history) {
    return history.push(hash);
  });
}

function applyQueuedOps(opSet, patch) {
  var queue = List();
  while (true) {
    var _iteratorNormalCompletion10 = true;
    var _didIteratorError10 = false;
    var _iteratorError10 = undefined;

    try {
      for (var _iterator10 = opSet.get('queue')[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
        var change = _step10.value;

        if (causallyReady(opSet, decodeChangeMeta(change, false))) {
          opSet = applyChange(opSet, change, patch);
        } else {
          queue = queue.push(change);
        }
      }
    } catch (err) {
      _didIteratorError10 = true;
      _iteratorError10 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion10 && _iterator10.return) {
          _iterator10.return();
        }
      } finally {
        if (_didIteratorError10) {
          throw _iteratorError10;
        }
      }
    }

    if (queue.count() === opSet.get('queue').count()) return opSet;
    opSet = opSet.set('queue', queue);
    queue = List();
  }
}

function pushUndoHistory(opSet) {
  var undoPos = opSet.get('undoPos');
  return opSet.update('undoStack', function (stack) {
    return stack.slice(0, undoPos).push(opSet.get('undoLocal'));
  }).set('undoPos', undoPos + 1).set('redoStack', List()).remove('undoLocal');
}

function init() {
  return Map().set('states', Map()).set('history', List()).set('byObject', Map().set(ROOT_ID, Map().set('_keys', Map()))).set('hashes', Map()).set('deps', Set()).set('maxOp', 0).set('undoPos', 0).set('undoStack', List()).set('redoStack', List()).set('queue', List());
}

/**
 * Adds `change` to `opSet` without any modification or undo history creation
 * (e.g. because it's a remote change, or we have loaded it from disk). `change`
 * is given as an Immutable.js Map object. `patch` is mutated to describe the
 * change (in the format used by patches).
 */
function addChange(opSet, change, patch) {
  opSet = opSet.update('queue', function (queue) {
    return queue.push(change);
  });
  return applyQueuedOps(opSet, patch);
}

/**
 * Applies a change made by the local user and adds it to `opSet`. The `change`
 * is given as an Immutable.js Map object. If `isUndoable` is true, an undo
 * history entry is created. `patch` is mutated to describe the change (in the
 * format used by patches).
 */
function addLocalChange(opSet, change, isUndoable, patch) {
  if (isUndoable) {
    opSet = opSet.set('undoLocal', List()); // setting the undoLocal key enables undo history capture
    opSet = applyChange(opSet, change, patch);
    opSet = pushUndoHistory(opSet);
  } else {
    opSet = applyChange(opSet, change, patch);
  }
  return opSet;
}

/**
 * Returns all the changes in `opSet` that need to be sent to another replica.
 * `haveDeps` is an Immutable.js List object containing the hashes (as hex
 * strings) of the heads that the other replica has. Those changes in `haveDeps`
 * and any of their transitive dependencies will not be returned; any changes
 * later than or concurrent to the hashes in `haveDeps` will be returned.
 * If `haveDeps` is an empty list, all changes are returned.
 *
 * NOTE: This function throws an exception if any of the given hashes are not
 * known to this replica. This means that if the other replica is ahead of us,
 * this function cannot be used directly to find the changes to send.
 * TODO need to fix this.
 */
function getMissingChanges(opSet, haveDeps) {
  var stack = haveDeps,
      seenHashes = {};
  while (!stack.isEmpty()) {
    var hash = stack.last();
    var deps = opSet.getIn(['hashes', hash, 'depsPast']);
    if (!deps) throw new RangeError('hash not found: ' + hash);
    stack = stack.pop().concat(deps);
    seenHashes[hash] = true;
  }

  return opSet.get('history').filter(function (hash) {
    return !seenHashes[hash];
  }).map(function (hash) {
    return opSet.getIn(['hashes', hash, 'change']);
  }).toJSON();
}

function getChangesForActor(opSet, forActor, afterSeq) {
  afterSeq = afterSeq || 0;

  return opSet.getIn(['states', forActor], List()).skip(afterSeq).map(function (hash) {
    return opSet.getIn(['hashes', hash, 'change']);
  }).toJSON();
}

function getMissingDeps(opSet) {
  var missing = {},
      inQueue = {};
  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = opSet.get('queue')[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var binaryChange = _step11.value;

      var change = decodeChangeMeta(binaryChange, true);
      inQueue[change.hash] = true;
      var _iteratorNormalCompletion12 = true;
      var _didIteratorError12 = false;
      var _iteratorError12 = undefined;

      try {
        for (var _iterator12 = change.deps[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
          var depHash = _step12.value;

          if (!opSet.hasIn(['hashes', depHash])) missing[depHash] = true;
        }
      } catch (err) {
        _didIteratorError12 = true;
        _iteratorError12 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion12 && _iterator12.return) {
            _iterator12.return();
          }
        } finally {
          if (_didIteratorError12) {
            throw _iteratorError12;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11.return) {
        _iterator11.return();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  return Object.keys(missing).filter(function (hash) {
    return !inQueue[hash];
  }).sort();
}

function getFieldOps(opSet, objectId, key) {
  return opSet.getIn(['byObject', objectId, '_keys', key], List());
}

function getParent(opSet, objectId, key) {
  if (key === '_head') return;
  var insertion = opSet.getIn(['byObject', objectId, '_insertion', key]);
  if (!insertion) throw new TypeError('Missing index entry for list element ' + key);
  return insertion.get('key');
}

function lamportCompare(op1, op2) {
  var time1 = parseOpId(op1.get('opId')),
      time2 = parseOpId(op2.get('opId'));
  if (time1.counter < time2.counter) return -1;
  if (time1.counter > time2.counter) return 1;
  if (time1.actorId < time2.actorId) return -1;
  if (time1.actorId > time2.actorId) return 1;
  return 0;
}

function insertionsAfter(opSet, objectId, parentId, childId) {
  var childKey = null;
  if (childId) childKey = Map({ opId: childId });

  return opSet.getIn(['byObject', objectId, '_following', parentId], List()).filter(function (op) {
    return op.get('insert') && (!childKey || lamportCompare(op, childKey) < 0);
  }).sort(lamportCompare).reverse() // descending order
  .map(function (op) {
    return op.get('opId');
  });
}

function getNext(opSet, objectId, key) {
  var children = insertionsAfter(opSet, objectId, key);
  if (!children.isEmpty()) return children.first();

  var ancestor = void 0;
  while (true) {
    ancestor = getParent(opSet, objectId, key);
    if (!ancestor) return;
    var siblings = insertionsAfter(opSet, objectId, ancestor, key);
    if (!siblings.isEmpty()) return siblings.first();
    key = ancestor;
  }
}

// Given the ID of a list element, returns the ID of the immediate predecessor list element,
// or null if the given list element is at the head.
function getPrevious(opSet, objectId, key) {
  var parentId = getParent(opSet, objectId, key);
  var children = insertionsAfter(opSet, objectId, parentId);
  if (children.first() === key) {
    if (parentId === '_head') return null;else return parentId;
  }

  var prevId = void 0;
  var _iteratorNormalCompletion13 = true;
  var _didIteratorError13 = false;
  var _iteratorError13 = undefined;

  try {
    for (var _iterator13 = children[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
      var child = _step13.value;

      if (child === key) break;
      prevId = child;
    }
  } catch (err) {
    _didIteratorError13 = true;
    _iteratorError13 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion13 && _iterator13.return) {
        _iterator13.return();
      }
    } finally {
      if (_didIteratorError13) {
        throw _iteratorError13;
      }
    }
  }

  while (true) {
    children = insertionsAfter(opSet, objectId, prevId);
    if (children.isEmpty()) return prevId;
    prevId = children.last();
  }
}

function constructField(opSet, op) {
  if (isChildOp(op)) {
    return constructObject(opSet, getChildId(op));
  } else if (op.get('action') === 'set') {
    var result = { value: op.get('value') };
    if (op.get('datatype')) result.datatype = op.get('datatype');
    return result;
  } else {
    throw new TypeError('Unexpected operation action: ' + op.get('action'));
  }
}

function constructMap(opSet, objectId, type) {
  var patch = { objectId: objectId, type: type, props: {} };
  var _iteratorNormalCompletion14 = true;
  var _didIteratorError14 = false;
  var _iteratorError14 = undefined;

  try {
    for (var _iterator14 = opSet.getIn(['byObject', objectId, '_keys']).entries()[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
      var _ref = _step14.value;

      var _ref2 = _slicedToArray(_ref, 2);

      var key = _ref2[0];
      var fieldOps = _ref2[1];

      if (!fieldOps.isEmpty()) {
        patch.props[key] = {};
        var _iteratorNormalCompletion15 = true;
        var _didIteratorError15 = false;
        var _iteratorError15 = undefined;

        try {
          for (var _iterator15 = fieldOps[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
            var op = _step15.value;

            patch.props[key][op.get('opId')] = constructField(opSet, op);
          }
        } catch (err) {
          _didIteratorError15 = true;
          _iteratorError15 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion15 && _iterator15.return) {
              _iterator15.return();
            }
          } finally {
            if (_didIteratorError15) {
              throw _iteratorError15;
            }
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError14 = true;
    _iteratorError14 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion14 && _iterator14.return) {
        _iterator14.return();
      }
    } finally {
      if (_didIteratorError14) {
        throw _iteratorError14;
      }
    }
  }

  return patch;
}

function constructList(opSet, objectId, type) {
  var patch = { objectId: objectId, type: type, props: {}, edits: [] };
  var elemId = '_head',
      index = 0,
      maxCounter = 0;

  while (true) {
    elemId = getNext(opSet, objectId, elemId);
    if (!elemId) {
      return patch;
    }
    maxCounter = Math.max(maxCounter, parseOpId(elemId).counter);

    var fieldOps = getFieldOps(opSet, objectId, elemId);
    if (!fieldOps.isEmpty()) {
      patch.edits.push({ action: 'insert', index: index });
      patch.props[index] = {};
      var _iteratorNormalCompletion16 = true;
      var _didIteratorError16 = false;
      var _iteratorError16 = undefined;

      try {
        for (var _iterator16 = fieldOps[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
          var op = _step16.value;

          patch.props[index][op.get('opId')] = constructField(opSet, op);
        }
      } catch (err) {
        _didIteratorError16 = true;
        _iteratorError16 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion16 && _iterator16.return) {
            _iterator16.return();
          }
        } finally {
          if (_didIteratorError16) {
            throw _iteratorError16;
          }
        }
      }

      index += 1;
    }
  }
}

function constructObject(opSet, objectId) {
  var type = getObjectType(opSet, objectId);
  if (type === 'map' || type === 'table') {
    return constructMap(opSet, objectId, type);
  } else if (type === 'list' || type === 'text') {
    return constructList(opSet, objectId, type);
  } else {
    throw new RangeError('Unknown object type: ' + type);
  }
}

module.exports = {
  init: init, addChange: addChange, addLocalChange: addLocalChange, getMissingChanges: getMissingChanges, getChangesForActor: getChangesForActor, getMissingDeps: getMissingDeps,
  constructObject: constructObject, getFieldOps: getFieldOps, getOperationKey: getOperationKey, finalizePatch: finalizePatch, ROOT_ID: ROOT_ID
};

/***/ }),

/***/ "./backend/skip_list.js":
/*!******************************!*\
  !*** ./backend/skip_list.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js"),
    Map = _require.Map;

// Returns a random number from the geometric distribution with p = 0.75.
// That is, returns k with probability p * (1 - p)^(k - 1).
// For example, returns 1 with probability 3/4, returns 2 with probability 3/16,
// returns 3 with probability 3/64, and so on.


function randomLevel() {
  // NOTE: this function used to be a generator; it has been converted to a regular
  // function (that mimics the interface of a generator) to avoid having to include
  // generator polyfills in the distribution build.
  return {
    next: function next() {
      // Create random number between 0 and 2^32 - 1
      var rand = Math.floor(Math.random() * 0x100000000);
      // Count leading zeros in that 32-bit number
      var level = 1;
      while (rand < 1 << 32 - 2 * level && level < 16) {
        level += 1;
      }return { value: level, done: false };
    }
  };
}

var Node = function () {
  function Node(key, value, level, prevKey, nextKey, prevCount, nextCount) {
    _classCallCheck(this, Node);

    this.key = key;
    this.value = value;
    this.level = level;
    this.prevKey = prevKey;
    this.nextKey = nextKey;
    this.prevCount = prevCount;
    this.nextCount = nextCount;
  }

  _createClass(Node, [{
    key: 'setValue',
    value: function setValue(value) {
      return new Node(this.key, value, this.level, this.prevKey, this.nextKey, this.prevCount, this.nextCount);
    }
  }, {
    key: 'insertAfter',
    value: function insertAfter(newKey, newLevel, fromLevel, distance) {
      if (newLevel > this.level && this.key !== null) {
        throw new RangeError('Cannot increase the level of a non-head node');
      }
      var maxLevel = Math.max(this.level, newLevel);
      var nextKey = this.nextKey.slice();
      var nextCount = this.nextCount.slice();

      for (var level = fromLevel; level < maxLevel; level++) {
        if (level < newLevel) {
          nextKey[level] = newKey;
          nextCount[level] = distance;
        } else {
          nextCount[level] += 1;
        }
      }

      return new Node(this.key, this.value, maxLevel, this.prevKey, nextKey, this.prevCount, nextCount);
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(newKey, newLevel, fromLevel, distance) {
      if (newLevel > this.level) throw new RangeError('Cannot increase node level');
      var prevKey = this.prevKey.slice();
      var prevCount = this.prevCount.slice();

      for (var level = fromLevel; level < this.level; level++) {
        if (level < newLevel) {
          prevKey[level] = newKey;
          prevCount[level] = distance;
        } else {
          prevCount[level] += 1;
        }
      }

      return new Node(this.key, this.value, this.level, prevKey, this.nextKey, prevCount, this.nextCount);
    }
  }, {
    key: 'removeAfter',
    value: function removeAfter(fromLevel, removedLevel, newKeys, distances) {
      var nextKey = this.nextKey.slice();
      var nextCount = this.nextCount.slice();

      for (var level = fromLevel; level < this.level; level++) {
        if (level < removedLevel) {
          nextKey[level] = newKeys[level];
          nextCount[level] = distances[level];
        } else {
          nextCount[level] -= 1;
        }
      }

      return new Node(this.key, this.value, this.level, this.prevKey, nextKey, this.prevCount, nextCount);
    }
  }, {
    key: 'removeBefore',
    value: function removeBefore(fromLevel, removedLevel, newKeys, distances) {
      var prevKey = this.prevKey.slice();
      var prevCount = this.prevCount.slice();

      for (var level = fromLevel; level < this.level; level++) {
        if (level < removedLevel) {
          prevKey[level] = newKeys[level];
          prevCount[level] = distances[level];
        } else {
          prevCount[level] -= 1;
        }
      }

      return new Node(this.key, this.value, this.level, prevKey, this.nextKey, prevCount, this.nextCount);
    }
  }]);

  return Node;
}();

var SkipList = function () {
  function SkipList(randomSource) {
    _classCallCheck(this, SkipList);

    var head = new Node(null, null, 1, [], [null], [], [null]);
    var random = randomSource ? randomSource() : randomLevel();
    return makeInstance(0, Map().set(null, head), random);
  }

  _createClass(SkipList, [{
    key: 'predecessors',
    value: function predecessors(predecessor, maxLevel) {
      var preKeys = [predecessor],
          preCounts = [1];

      for (var level = 1; level < maxLevel; level++) {
        var preKey = preKeys[level - 1];
        var count = preCounts[level - 1];
        while (preKey) {
          var node = this._nodes.get(preKey);
          if (node.level > level) break;
          if (node.level < level) {
            throw new RangeError('Node ' + preKey + ' below expected level ' + (level - 1));
          }
          count += node.prevCount[level - 1];
          preKey = node.prevKey[level - 1];
        }
        preKeys[level] = preKey;
        preCounts[level] = count;
      }

      return { preKeys: preKeys, preCounts: preCounts };
    }
  }, {
    key: 'successors',
    value: function successors(successor, maxLevel) {
      var sucKeys = [successor],
          sucCounts = [1];

      for (var level = 1; level < maxLevel; level++) {
        var sucKey = sucKeys[level - 1];
        var count = sucCounts[level - 1];
        while (sucKey) {
          var node = this._nodes.get(sucKey);
          if (node.level > level) break;
          if (node.level < level) {
            throw new RangeError('Node ' + sucKey + ' below expected level ' + (level - 1));
          }
          count += node.nextCount[level - 1];
          sucKey = node.nextKey[level - 1];
        }
        sucKeys[level] = sucKey;
        sucCounts[level] = count;
      }

      return { sucKeys: sucKeys, sucCounts: sucCounts };
    }

    // Inserts a new list element immediately after the element with key `predecessor`.
    // If predecessor === null, inserts at the head of the list.

  }, {
    key: 'insertAfter',
    value: function insertAfter(predecessor, key, value) {
      if (typeof key !== 'string' || key === '') {
        throw new RangeError('Key must be a nonempty string');
      }
      if (!this._nodes.has(predecessor)) {
        throw new RangeError('The referenced predecessor key does not exist');
      }
      if (this._nodes.has(key)) {
        throw new RangeError('Cannot insert a key that already exists');
      }

      var newLevel = this._randomSource.next().value;
      var maxLevel = Math.max(newLevel, this.headNode.level);
      var successor = this._nodes.get(predecessor).nextKey[0] || null;

      var _predecessors = this.predecessors(predecessor, maxLevel),
          preKeys = _predecessors.preKeys,
          preCounts = _predecessors.preCounts;

      var _successors = this.successors(successor, maxLevel),
          sucKeys = _successors.sucKeys,
          sucCounts = _successors.sucCounts;

      return makeInstance(this.length + 1, this._nodes.withMutations(function (nodes) {
        var preLevel = 0,
            sucLevel = 0;

        var _loop = function _loop(level) {
          var updateLevel = Math.min(level, newLevel);
          if (level === maxLevel || preKeys[level] !== preKeys[preLevel]) {
            nodes.update(preKeys[preLevel], function (node) {
              return node.insertAfter(key, updateLevel, preLevel, preCounts[preLevel]);
            });
            preLevel = level;
          }
          if (sucKeys[sucLevel] && (level === maxLevel || sucKeys[level] !== sucKeys[sucLevel])) {
            nodes.update(sucKeys[sucLevel], function (node) {
              return node.insertBefore(key, updateLevel, sucLevel, sucCounts[sucLevel]);
            });
            sucLevel = level;
          }
        };

        for (var level = 1; level <= maxLevel; level++) {
          _loop(level);
        }

        nodes.set(key, new Node(key, value, newLevel, preKeys.slice(0, newLevel), sucKeys.slice(0, newLevel), preCounts.slice(0, newLevel), sucCounts.slice(0, newLevel)));
      }), this._randomSource);
    }
  }, {
    key: 'insertIndex',
    value: function insertIndex(index, key, value) {
      if (typeof index !== 'number' || index < 0) {
        throw new RangeError('Index must be a non-negative integer');
      }
      if (index === 0) {
        return this.insertAfter(null, key, value);
      } else {
        return this.insertAfter(this.keyOf(index - 1), key, value);
      }
    }
  }, {
    key: 'removeKey',
    value: function removeKey(key) {
      if (typeof key !== 'string' || !this._nodes.has(key)) {
        throw new RangeError('The given key cannot be removed because it does not exist');
      }
      var removedNode = this._nodes.get(key);
      var maxLevel = this.headNode.level;

      var _predecessors2 = this.predecessors(removedNode.prevKey[0], maxLevel),
          preKeys = _predecessors2.preKeys,
          preCounts = _predecessors2.preCounts;

      var _successors2 = this.successors(removedNode.nextKey[0], maxLevel),
          sucKeys = _successors2.sucKeys,
          sucCounts = _successors2.sucCounts;

      var distances = new Array(maxLevel);

      for (var level = 0; level < maxLevel; level++) {
        distances[level] = preCounts[level] + sucCounts[level] - 1;
      }

      return makeInstance(this.length - 1, this._nodes.withMutations(function (nodes) {
        nodes.remove(key);
        var preLevel = 0,
            sucLevel = 0;

        var _loop2 = function _loop2(_level) {
          var updateLevel = Math.min(_level, removedNode.level);
          if (_level === maxLevel || preKeys[_level] !== preKeys[preLevel]) {
            nodes.update(preKeys[preLevel], function (node) {
              return node.removeAfter(preLevel, updateLevel, sucKeys, distances);
            });
            preLevel = _level;
          }
          if (sucKeys[sucLevel] && (_level === maxLevel || sucKeys[_level] !== sucKeys[sucLevel])) {
            nodes.update(sucKeys[sucLevel], function (node) {
              return node.removeBefore(sucLevel, updateLevel, preKeys, distances);
            });
            sucLevel = _level;
          }
        };

        for (var _level = 1; _level <= maxLevel; _level++) {
          _loop2(_level);
        }
      }), this._randomSource);
    }
  }, {
    key: 'removeIndex',
    value: function removeIndex(index) {
      return this.removeKey(this.keyOf(index));
    }
  }, {
    key: 'indexOf',
    value: function indexOf(key) {
      if (typeof key !== 'string' || key === '' || !this._nodes.has(key)) return -1;
      var node = this._nodes.get(key),
          count = 0;
      while (node && node.key) {
        count += node.prevCount[node.level - 1];
        node = this._nodes.get(node.prevKey[node.level - 1]);
      }
      return count - 1;
    }
  }, {
    key: 'keyOf',
    value: function keyOf(index) {
      if (typeof index !== 'number') return null;
      if (index < 0) index = index + this.length;
      if (index < 0 || index >= this.length) return null;

      var node = this._nodes.get(null),
          level = node.level - 1,
          count = 0;
      while (true) {
        if (count === index + 1) {
          return node.key;
        } else if (count + node.nextCount[level] > index + 1) {
          level -= 1;
        } else {
          count += node.nextCount[level];
          node = this._nodes.get(node.nextKey[level]);
        }
      }
    }
  }, {
    key: 'getValue',
    value: function getValue(key) {
      if (typeof key !== 'string' || key === '') {
        throw new RangeError('Key must be a nonempty string');
      }
      var node = this._nodes.get(key);
      return node && node.value;
    }
  }, {
    key: 'setValue',
    value: function setValue(key, value) {
      if (typeof key !== 'string' || key === '') {
        throw new RangeError('Key must be a nonempty string');
      }
      var node = this._nodes.get(key);
      if (!node) throw new RangeError('The referenced key does not exist');

      node = node.setValue(value);
      return makeInstance(this.length, this._nodes.set(key, node), this._randomSource);
    }
  }, {
    key: 'iterator',
    value: function iterator(mode) {
      var _this = this;

      // NOTE: this method used to be a generator; it has been converted to a regular
      // method (that mimics the interface of a generator) to avoid having to include
      // generator polyfills in the distribution build.
      var nodes = this._nodes;
      var key = nodes.get(null).nextKey[0];
      return _defineProperty({
        next: function next() {
          if (!key) return { value: undefined, done: true };
          var node = nodes.get(key);
          var rval = undefined;
          switch (mode) {
            case 'keys':
              rval = { value: key, done: false };break;
            case 'values':
              rval = { value: node.value, done: false };break;
            case 'entries':
              rval = { value: [key, node.value], done: false };break;
          }
          key = node.nextKey[0];
          return rval;
        }
      }, Symbol.iterator, function () {
        return _this.iterator(mode);
      });
    }
  }, {
    key: Symbol.iterator,
    value: function value() {
      return this.iterator('values');
    }
  }, {
    key: 'headNode',
    get: function get() {
      return this._nodes.get(null);
    }
  }]);

  return SkipList;
}();

function makeInstance(length, nodes, randomSource) {
  var instance = Object.create(SkipList.prototype);
  instance.length = length;
  instance._nodes = nodes;
  instance._randomSource = randomSource;
  return instance;
}

module.exports = { SkipList: SkipList };

/***/ }),

/***/ "./frontend/apply_patch.js":
/*!*********************************!*\
  !*** ./frontend/apply_patch.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _require = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    ROOT_ID = _require.ROOT_ID,
    isObject = _require.isObject,
    copyObject = _require.copyObject,
    parseOpId = _require.parseOpId;

var _require2 = __webpack_require__(/*! ./constants */ "./frontend/constants.js"),
    OPTIONS = _require2.OPTIONS,
    OBJECT_ID = _require2.OBJECT_ID,
    CONFLICTS = _require2.CONFLICTS;

var _require3 = __webpack_require__(/*! ./text */ "./frontend/text.js"),
    Text = _require3.Text,
    instantiateText = _require3.instantiateText;

var _require4 = __webpack_require__(/*! ./table */ "./frontend/table.js"),
    Table = _require4.Table,
    instantiateTable = _require4.instantiateTable;

var _require5 = __webpack_require__(/*! ./counter */ "./frontend/counter.js"),
    Counter = _require5.Counter;

/**
 * Reconstructs the value from the patch object `patch`.
 */


function getValue(patch, object, updated) {
  if (patch.objectId) {
    // If the objectId of the existing object does not match the objectId in the patch,
    // that means the patch is replacing the object with a new one made from scratch
    if (object && object[OBJECT_ID] !== patch.objectId) {
      object = undefined;
    }
    return interpretPatch(patch, object, updated);
  } else if (patch.datatype === 'timestamp') {
    // Timestamp: value is milliseconds since 1970 epoch
    return new Date(patch.value);
  } else if (patch.datatype === 'counter') {
    return new Counter(patch.value);
  } else if (patch.datatype !== undefined) {
    throw new TypeError('Unknown datatype: ' + patch.datatype);
  } else {
    // Primitive value (number, string, boolean, or null)
    return patch.value;
  }
}

/**
 * Compares two strings, interpreted as Lamport timestamps of the form
 * 'counter@actorId'. Returns 1 if ts1 is greater, or -1 if ts2 is greater.
 */
function lamportCompare(ts1, ts2) {
  var regex = /^(\d+)@(.*)$/;
  var time1 = regex.test(ts1) ? parseOpId(ts1) : { counter: 0, actorId: ts1 };
  var time2 = regex.test(ts2) ? parseOpId(ts2) : { counter: 0, actorId: ts2 };
  if (time1.counter < time2.counter) return -1;
  if (time1.counter > time2.counter) return 1;
  if (time1.actorId < time2.actorId) return -1;
  if (time1.actorId > time2.actorId) return 1;
  return 0;
}

/**
 * `props` is an object of the form:
 * `{key1: {opId1: {...}, opId2: {...}}, key2: {opId3: {...}}}`
 * where the outer object is a mapping from property names to inner objects,
 * and the inner objects are a mapping from operation ID to sub-patch.
 * This function interprets that structure and updates the objects `object` and
 * `conflicts` to reflect it. For each key, the greatest opId (by Lamport TS
 * order) is chosen as the default resolution; that op's value is assigned
 * to `object[key]`. Moreover, all the opIds and values are packed into a
 * conflicts object of the form `{opId1: value1, opId2: value2}` and assigned
 * to `conflicts[key]`. If there is no conflict, the conflicts object contains
 * just a single opId-value mapping.
 */
function applyProperties(props, object, conflicts, updated) {
  if (!props) return;

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(props)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      var values = {},
          opIds = Object.keys(props[key]).sort(lamportCompare).reverse();
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = opIds[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var opId = _step2.value;

          var subpatch = props[key][opId];
          if (conflicts[key] && conflicts[key][opId]) {
            values[opId] = getValue(subpatch, conflicts[key][opId], updated);
          } else {
            values[opId] = getValue(subpatch, undefined, updated);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (opIds.length === 0) {
        delete object[key];
        delete conflicts[key];
      } else {
        object[key] = values[opIds[0]];
        conflicts[key] = values;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

/**
 * `edits` is an array of edits to a list data structure, each of which is an object of the form
 * either `{action: 'insert', index}` or `{action: 'remove', index}`. This merges adjacent edits
 * and calls `insertCallback(index, count)` or `removeCallback(index, count)`, as appropriate,
 * for each sequence of insertions or removals.
 */
function iterateEdits(edits, insertCallback, removeCallback) {
  if (!edits) return;
  var splicePos = -1,
      deletions = void 0,
      insertions = void 0;

  for (var i = 0; i < edits.length; i++) {
    var edit = edits[i],
        action = edit.action,
        index = edit.index;

    if (action === 'insert') {
      if (splicePos < 0) {
        splicePos = index;
        deletions = 0;
        insertions = 0;
      }
      insertions += 1;

      // If there are multiple consecutive insertions at successive indexes,
      // accumulate them and then process them in a single insertCallback
      if (i === edits.length - 1 || edits[i + 1].action !== 'insert' || edits[i + 1].index !== index + 1) {
        insertCallback(splicePos, insertions);
        splicePos = -1;
      }
    } else if (action === 'remove') {
      if (splicePos < 0) {
        splicePos = index;
        deletions = 0;
        insertions = 0;
      }
      deletions += 1;

      // If there are multiple consecutive removals of the same index,
      // accumulate them and then process them in a single removeCallback
      if (i === edits.length - 1 || edits[i + 1].action !== 'remove' || edits[i + 1].index !== index) {
        removeCallback(splicePos, deletions);
        splicePos = -1;
      }
    } else {
      throw new RangeError('Unknown list edit action: ' + action);
    }
  }
}

/**
 * Creates a writable copy of an immutable map object. If `originalObject`
 * is undefined, creates an empty object with ID `objectId`.
 */
function cloneMapObject(originalObject, objectId) {
  var object = copyObject(originalObject);
  var conflicts = copyObject(originalObject ? originalObject[CONFLICTS] : undefined);
  Object.defineProperty(object, OBJECT_ID, { value: objectId });
  Object.defineProperty(object, CONFLICTS, { value: conflicts });
  return object;
}

/**
 * Updates the map object `obj` according to the modifications described in
 * `patch`, or creates a new object if `obj` is undefined. Mutates `updated`
 * to map the objectId to the new object, and returns the new object.
 */
function updateMapObject(patch, obj, updated) {
  var objectId = patch.objectId;
  if (!updated[objectId]) {
    updated[objectId] = cloneMapObject(obj, objectId);
  }

  var object = updated[objectId];
  applyProperties(patch.props, object, object[CONFLICTS], updated);
  return object;
}

/**
 * Updates the table object `obj` according to the modifications described in
 * `patch`, or creates a new object if `obj` is undefined. Mutates `updated`
 * to map the objectId to the new object, and returns the new object.
 */
function updateTableObject(patch, obj, updated) {
  var objectId = patch.objectId;
  if (!updated[objectId]) {
    updated[objectId] = obj ? obj._clone() : instantiateTable(objectId);
  }

  var object = updated[objectId];

  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = Object.keys(patch.props || {})[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var key = _step3.value;

      var values = {},
          opIds = Object.keys(patch.props[key]);

      if (opIds.length === 0) {
        object.remove(key);
      } else if (opIds.length === 1) {
        var subpatch = patch.props[key][opIds[0]];
        object._set(key, getValue(subpatch, object.byId(key), updated), opIds[0]);
      } else {
        throw new RangeError('Conflicts are not supported on properties of a table');
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3.return) {
        _iterator3.return();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return object;
}

/**
 * Creates a writable copy of an immutable list object. If `originalList` is
 * undefined, creates an empty list with ID `objectId`.
 */
function cloneListObject(originalList, objectId) {
  var list = originalList ? originalList.slice() : []; // slice() makes a shallow clone
  var conflicts = originalList && originalList[CONFLICTS] ? originalList[CONFLICTS].slice() : [];
  Object.defineProperty(list, OBJECT_ID, { value: objectId });
  Object.defineProperty(list, CONFLICTS, { value: conflicts });
  return list;
}

/**
 * Updates the list object `obj` according to the modifications described in
 * `patch`, or creates a new object if `obj` is undefined. Mutates `updated`
 * to map the objectId to the new object, and returns the new object.
 */
function updateListObject(patch, obj, updated) {
  var objectId = patch.objectId;
  if (!updated[objectId]) {
    updated[objectId] = cloneListObject(obj, objectId);
  }

  var list = updated[objectId],
      conflicts = list[CONFLICTS];

  iterateEdits(patch.edits, function (index, insertions) {
    // insertion
    var blanks = new Array(insertions);
    list.splice.apply(list, [index, 0].concat(blanks));
    conflicts.splice.apply(conflicts, [index, 0].concat(blanks));
  }, function (index, count) {
    // deletion
    list.splice(index, count);
    conflicts.splice(index, count);
  });

  applyProperties(patch.props, list, conflicts, updated);
  return list;
}

/**
 * Updates the text object `obj` according to the modifications described in
 * `patch`, or creates a new object if `obj` is undefined. Mutates `updated`
 * to map the objectId to the new object, and returns the new object.
 */
function updateTextObject(patch, obj, updated) {
  var objectId = patch.objectId;
  var elems = void 0;
  if (updated[objectId]) {
    elems = updated[objectId].elems;
  } else if (obj) {
    elems = obj.elems.slice();
  } else {
    elems = [];
  }

  iterateEdits(patch.edits, function (index, insertions) {
    var _elems;

    // insertion
    var blanks = [];
    for (var i = 0; i < insertions; i++) {
      blanks.push({});
    }(_elems = elems).splice.apply(_elems, [index, 0].concat(blanks));
  }, function (index, deletions) {
    // deletion
    elems.splice(index, deletions);
  });

  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = Object.keys(patch.props || {})[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var key = _step4.value;

      var opId = Object.keys(patch.props[key]).sort(lamportCompare).reverse()[0];
      if (!opId) throw new RangeError('No default value at index ' + key);

      // TODO Text object does not support conflicts. Should it?
      var oldValue = elems[key].opId === opId ? elems[key].value : undefined;
      elems[key].value = getValue(patch.props[key][opId], oldValue, updated);
      elems[key].opId = opId;
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }

  updated[objectId] = instantiateText(objectId, elems);
  return updated[objectId];
}

/**
 * Applies the patch object `patch` to the read-only document object `obj`.
 * Clones a writable copy of `obj` and places it in `updated` (indexed by
 * objectId), if that has not already been done. Returns the updated object.
 */
function interpretPatch(patch, obj, updated) {
  // Return original object if it already exists and isn't being modified
  if (isObject(obj) && !patch.props && !patch.edits && !updated[patch.objectId]) {
    return obj;
  }

  if (patch.type === 'map') {
    return updateMapObject(patch, obj, updated);
  } else if (patch.type === 'table') {
    return updateTableObject(patch, obj, updated);
  } else if (patch.type === 'list') {
    return updateListObject(patch, obj, updated);
  } else if (patch.type === 'text') {
    return updateTextObject(patch, obj, updated);
  } else {
    throw new TypeError('Unknown object type: ' + patch.type);
  }
}

/**
 * Creates a writable copy of the immutable document root object `root`.
 */
function cloneRootObject(root) {
  if (root[OBJECT_ID] !== ROOT_ID) {
    throw new RangeError('Not the root object: ' + root[OBJECT_ID]);
  }
  return cloneMapObject(root, ROOT_ID);
}

module.exports = {
  interpretPatch: interpretPatch, cloneRootObject: cloneRootObject
};

/***/ }),

/***/ "./frontend/constants.js":
/*!*******************************!*\
  !*** ./frontend/constants.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Properties of the document root object
var OPTIONS = Symbol('_options'); // object containing options passed to init()
var CACHE = Symbol('_cache'); // map from objectId to immutable object
var STATE = Symbol('_state'); // object containing metadata about current state (e.g. sequence numbers)

// Properties of all Automerge objects
var OBJECT_ID = Symbol('_objectId'); // the object ID of the current object (string)
var CONFLICTS = Symbol('_conflicts'); // map or list (depending on object type) of conflicts
var CHANGE = Symbol('_change'); // the context object on proxy objects used in change callback

module.exports = {
  OPTIONS: OPTIONS, CACHE: CACHE, STATE: STATE, OBJECT_ID: OBJECT_ID, CONFLICTS: CONFLICTS, CHANGE: CHANGE
};

/***/ }),

/***/ "./frontend/context.js":
/*!*****************************!*\
  !*** ./frontend/context.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! ./constants */ "./frontend/constants.js"),
    CACHE = _require.CACHE,
    OBJECT_ID = _require.OBJECT_ID,
    CONFLICTS = _require.CONFLICTS;

var _require2 = __webpack_require__(/*! ./apply_patch */ "./frontend/apply_patch.js"),
    interpretPatch = _require2.interpretPatch;

var _require3 = __webpack_require__(/*! ./text */ "./frontend/text.js"),
    Text = _require3.Text;

var _require4 = __webpack_require__(/*! ./table */ "./frontend/table.js"),
    Table = _require4.Table;

var _require5 = __webpack_require__(/*! ./counter */ "./frontend/counter.js"),
    Counter = _require5.Counter,
    getWriteableCounter = _require5.getWriteableCounter;

var _require6 = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    ROOT_ID = _require6.ROOT_ID,
    isObject = _require6.isObject,
    copyObject = _require6.copyObject;

var uuid = __webpack_require__(/*! ../src/uuid */ "./src/uuid.js");

/**
 * An instance of this class is passed to `rootObjectProxy()`. The methods are
 * called by proxy object mutation functions to query the current object state
 * and to apply the requested changes.
 */

var Context = function () {
  function Context(doc, actorId, applyPatch) {
    _classCallCheck(this, Context);

    this.actorId = actorId;
    this.cache = doc[CACHE];
    this.updated = {};
    this.ops = [];
    this.applyPatch = applyPatch ? applyPatch : interpretPatch;
  }

  /**
   * Adds an operation object to the list of changes made in the current context.
   */


  _createClass(Context, [{
    key: 'addOp',
    value: function addOp(operation) {
      this.ops.push(operation);
    }

    /**
     * Takes a value and returns an object describing the value (in the format used by patches).
     */

  }, {
    key: 'getValueDescription',
    value: function getValueDescription(value) {
      if (!['object', 'boolean', 'number', 'string'].includes(typeof value === 'undefined' ? 'undefined' : _typeof(value))) {
        throw new TypeError('Unsupported type of value: ' + (typeof value === 'undefined' ? 'undefined' : _typeof(value)));
      }

      if (isObject(value)) {
        if (value instanceof Date) {
          // Date object, represented as milliseconds since epoch
          return { value: value.getTime(), datatype: 'timestamp' };
        } else if (value instanceof Counter) {
          // Counter object
          return { value: value.value, datatype: 'counter' };
        } else {
          // Nested object (map, list, text, or table)
          var objectId = value[OBJECT_ID];
          if (!objectId) {
            throw new RangeError('Object ' + JSON.stringify(value) + ' has no objectId');
          }
          return { objectId: objectId, type: this.getObjectType(objectId) };
        }
      } else {
        // Primitive value (number, string, boolean, or null)
        return { value: value };
      }
    }

    /**
     * Builds the values structure describing a single property in a patch. Finds all the values of
     * property `key` of `object` (there might be multiple values in the case of a conflict), and
     * returns an object that maps operation IDs to descriptions of values.
     */

  }, {
    key: 'getValuesDescriptions',
    value: function getValuesDescriptions(path, object, key) {
      if (object instanceof Table) {
        // Table objects don't have conflicts, since rows are identified by their unique objectId
        var value = object.byId(key);
        if (value) {
          return _defineProperty({}, key, this.getValueDescription(value));
        } else {
          return {};
        }
      } else {
        // Map, list, or text objects
        var conflicts = object[CONFLICTS][key],
            values = {};
        if (!conflicts) {
          throw new RangeError('No children at key ' + key + ' of path ' + JSON.stringify(path));
        }
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Object.keys(conflicts)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var opId = _step.value;

            values[opId] = this.getValueDescription(conflicts[opId]);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return values;
      }
    }

    /**
     * Returns the value at property `key` of object `object`. In the case of a conflict, returns
     * the value whose assignment operation has the ID `opId`.
     */

  }, {
    key: 'getPropertyValue',
    value: function getPropertyValue(object, key, opId) {
      if (object instanceof Table) {
        return object.byId(key);
      } else {
        return object[CONFLICTS][key][opId];
      }
    }

    /**
     * Recurses along `path` into the patch object `patch`, creating nodes along the way as needed
     * by mutating the patch object. Returns the subpatch at the given path.
     */

  }, {
    key: 'getSubpatch',
    value: function getSubpatch(patch, path) {
      var subpatch = patch.diffs,
          object = this.getObject(ROOT_ID);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = path[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var pathElem = _step2.value;

          if (!subpatch.props) {
            subpatch.props = {};
          }
          if (!subpatch.props[pathElem.key]) {
            subpatch.props[pathElem.key] = this.getValuesDescriptions(path, object, pathElem.key);
          }

          var nextOpId = null,
              values = subpatch.props[pathElem.key];
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = Object.keys(values)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var opId = _step3.value;

              if (values[opId].objectId === pathElem.objectId) {
                nextOpId = opId;
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          if (!nextOpId) {
            throw new RangeError('Cannot find path object with objectId ' + pathElem.objectId);
          }
          subpatch = values[nextOpId];
          object = this.getPropertyValue(object, pathElem.key, nextOpId);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (!subpatch.props) {
        subpatch.props = {};
      }
      return subpatch;
    }

    /**
     * Returns an object (not proxied) from the cache or updated set, as appropriate.
     */

  }, {
    key: 'getObject',
    value: function getObject(objectId) {
      var object = this.updated[objectId] || this.cache[objectId];
      if (!object) throw new RangeError('Target object does not exist: ' + objectId);
      return object;
    }

    /**
     * Returns a string that is either 'map', 'table', 'list', or 'text', indicating
     * the type of the object with ID `objectId`.
     */

  }, {
    key: 'getObjectType',
    value: function getObjectType(objectId) {
      if (objectId === ROOT_ID) return 'map';
      var object = this.getObject(objectId);
      if (object instanceof Text) return 'text';
      if (object instanceof Table) return 'table';
      if (Array.isArray(object)) return 'list';
      return 'map';
    }

    /**
     * Returns the value associated with the property named `key` on the object
     * at path `path`. If the value is an object, returns a proxy for it.
     */

  }, {
    key: 'getObjectField',
    value: function getObjectField(path, objectId, key) {
      if (!['string', 'number'].includes(typeof key === 'undefined' ? 'undefined' : _typeof(key))) return;
      var object = this.getObject(objectId);

      if (object[key] instanceof Counter) {
        return getWriteableCounter(object[key].value, this, path, objectId, key);
      } else if (isObject(object[key])) {
        var childId = object[key][OBJECT_ID];
        var subpath = path.concat([{ key: key, objectId: childId }]);
        // The instantiateObject function is added to the context object by rootObjectProxy()
        return this.instantiateObject(subpath, childId);
      } else {
        return object[key];
      }
    }

    /**
     * Recursively creates Automerge versions of all the objects and nested objects in `value`,
     * constructing a patch and operations that describe the object tree. The new object is
     * assigned to the property `key` in the object with ID `obj`. If `insert` is true, a new
     * list element is created at index `key`, and the new object is assigned to that list
     * element. If `key` is null, the ID of the new object is used as key (this construction
     * is used by Automerge.Table).
     */

  }, {
    key: 'createNestedObjects',
    value: function createNestedObjects(obj, key, value, insert) {
      if (value[OBJECT_ID]) {
        throw new RangeError('Cannot create a reference to an existing document object');
      }
      var child = uuid();
      if (key === null) key = child;

      if (value instanceof Text) {
        // Create a new Text object
        this.addOp({ action: 'makeText', obj: obj, key: key, insert: insert, child: child });
        var subpatch = { objectId: child, type: 'text', edits: [], props: {} };
        this.insertListItems(subpatch, 0, [].concat(_toConsumableArray(value)), true);
        return subpatch;
      } else if (value instanceof Table) {
        // Create a new Table object
        if (value.count > 0) {
          throw new RangeError('Assigning a non-empty Table object is not supported');
        }
        this.addOp({ action: 'makeTable', obj: obj, key: key, insert: insert, child: child });
        return { objectId: child, type: 'table', props: {} };
      } else if (Array.isArray(value)) {
        // Create a new list object
        this.addOp({ action: 'makeList', obj: obj, key: key, insert: insert, child: child });
        var _subpatch = { objectId: child, type: 'list', edits: [], props: {} };
        this.insertListItems(_subpatch, 0, value, true);
        return _subpatch;
      } else {
        // Create a new map object
        this.addOp({ action: 'makeMap', obj: obj, key: key, insert: insert, child: child });
        var props = {};
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = Object.keys(value)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var nested = _step4.value;

            var valuePatch = this.setValue(child, nested, value[nested], false);
            props[nested] = _defineProperty({}, this.actorId, valuePatch);
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        return { objectId: child, type: 'map', props: props };
      }
    }

    /**
     * Records an assignment to a particular key in a map, or a particular index in a list.
     * `objectId` is the ID of the object being modified, `key` is the property name or list
     * index being updated, and `value` is the new value being assigned. If `insert` is true,
     * a new list element is inserted at index `key`, and `value` is assigned to that new list
     * element. Returns a patch describing the new value. The return value is of the form
     * `{objectId, type, props}` if `value` is an object, or `{value, datatype}` if it is a
     * primitive value. For string, number, boolean, or null the datatype is omitted.
     */

  }, {
    key: 'setValue',
    value: function setValue(objectId, key, value, insert) {
      if (!objectId) {
        throw new RangeError('setValue needs an objectId');
      }
      if (key === '') {
        throw new RangeError('The key of a map entry must not be an empty string');
      }

      if (isObject(value) && !(value instanceof Date) && !(value instanceof Counter)) {
        // Nested object (map, list, text, or table)
        return this.createNestedObjects(objectId, key, value, insert);
      } else {
        // Date or counter object, or primitive value (number, string, boolean, or null)
        var description = this.getValueDescription(value);
        this.addOp(Object.assign({ action: 'set', obj: objectId, key: key, insert: insert }, description));
        return description;
      }
    }

    /**
     * Constructs a new patch, calls `callback` with the subpatch at the location `path`,
     * and then immediately applies the patch to the document.
     */

  }, {
    key: 'applyAtPath',
    value: function applyAtPath(path, callback) {
      var patch = { diffs: { objectId: ROOT_ID, type: 'map' } };
      callback(this.getSubpatch(patch, path));
      this.applyPatch(patch.diffs, this.cache[ROOT_ID], this.updated);
    }

    /**
     * Updates the map object at path `path`, setting the property with name
     * `key` to `value`.
     */

  }, {
    key: 'setMapKey',
    value: function setMapKey(path, key, value) {
      var _this = this;

      if (typeof key !== 'string') {
        throw new RangeError('The key of a map entry must be a string, not ' + (typeof key === 'undefined' ? 'undefined' : _typeof(key)));
      }

      var objectId = path.length === 0 ? ROOT_ID : path[path.length - 1].objectId;
      var object = this.getObject(objectId);
      if (object[key] instanceof Counter) {
        throw new RangeError('Cannot overwrite a Counter object; use .increment() or .decrement() to change its value.');
      }

      // If the assigned field value is the same as the existing value, and
      // the assignment does not resolve a conflict, do nothing
      if (object[key] !== value || Object.keys(object[CONFLICTS][key] || {}).length > 1 || value === undefined) {
        this.applyAtPath(path, function (subpatch) {
          var valuePatch = _this.setValue(objectId, key, value, false);
          subpatch.props[key] = _defineProperty({}, _this.actorId, valuePatch);
        });
      }
    }

    /**
     * Updates the map object at path `path`, deleting the property `key`.
     */

  }, {
    key: 'deleteMapKey',
    value: function deleteMapKey(path, key) {
      var objectId = path.length === 0 ? ROOT_ID : path[path.length - 1].objectId;
      var object = this.getObject(objectId);

      if (object[key] !== undefined) {
        this.addOp({ action: 'del', obj: objectId, key: key, insert: false });
        this.applyAtPath(path, function (subpatch) {
          subpatch.props[key] = {};
        });
      }
    }

    /**
     * Inserts a sequence of new list elements `values` into a list, starting at position `index`.
     * `newObject` is true if we are creating a new list object, and false if we are updating an
     * existing one. `subpatch` is the patch for the list object being modified. Mutates
     * `subpatch` to reflect the sequence of values.
     */

  }, {
    key: 'insertListItems',
    value: function insertListItems(subpatch, index, values, newObject) {
      var list = newObject ? [] : this.getObject(subpatch.objectId);
      if (index < 0 || index > list.length) {
        throw new RangeError('List index ' + index + ' is out of bounds for list of length ' + list.length);
      }

      for (var offset = 0; offset < values.length; offset++) {
        var valuePatch = this.setValue(subpatch.objectId, index + offset, values[offset], true);
        subpatch.edits.push({ action: 'insert', index: index + offset });
        subpatch.props[index + offset] = _defineProperty({}, this.actorId, valuePatch);
      }
    }

    /**
     * Updates the list object at path `path`, replacing the current value at
     * position `index` with the new value `value`.
     */

  }, {
    key: 'setListIndex',
    value: function setListIndex(path, index, value) {
      var _this2 = this;

      var objectId = path.length === 0 ? ROOT_ID : path[path.length - 1].objectId;
      var list = this.getObject(objectId);
      if (index === list.length) {
        return this.splice(path, index, 0, [value]);
      }
      if (index < 0 || index > list.length) {
        throw new RangeError('List index ' + index + ' is out of bounds for list of length ' + list.length);
      }
      if (list[index] instanceof Counter) {
        throw new RangeError('Cannot overwrite a Counter object; use .increment() or .decrement() to change its value.');
      }

      // If the assigned list element value is the same as the existing value, and
      // the assignment does not resolve a conflict, do nothing
      if (list[index] !== value || Object.keys(list[CONFLICTS][index] || {}).length > 1 || value === undefined) {
        this.applyAtPath(path, function (subpatch) {
          var valuePatch = _this2.setValue(objectId, index, value, false);
          subpatch.props[index] = _defineProperty({}, _this2.actorId, valuePatch);
        });
      }
    }

    /**
     * Updates the list object at path `path`, deleting `deletions` list elements starting from
     * list index `start`, and inserting the list of new elements `insertions` at that position.
     */

  }, {
    key: 'splice',
    value: function splice(path, start, deletions, insertions) {
      var objectId = path.length === 0 ? ROOT_ID : path[path.length - 1].objectId;
      var list = this.getObject(objectId);
      if (start < 0 || deletions < 0 || start > list.length - deletions) {
        throw new RangeError(deletions + ' deletions starting at index ' + start + ' are out of bounds for list of length ' + list.length);
      }
      if (deletions === 0 && insertions.length === 0) return;

      var patch = { diffs: { objectId: ROOT_ID, type: 'map' } };
      var subpatch = this.getSubpatch(patch, path);
      if (!subpatch.edits) subpatch.edits = [];

      if (deletions > 0) {
        for (var i = 0; i < deletions; i++) {
          this.addOp({ action: 'del', obj: objectId, key: start, insert: false });
          subpatch.edits.push({ action: 'remove', index: start });
        }
      }

      if (insertions.length > 0) {
        this.insertListItems(subpatch, start, insertions, false);
      }
      this.applyPatch(patch.diffs, this.cache[ROOT_ID], this.updated);
    }

    /**
     * Updates the table object at path `path`, adding a new entry `row`.
     * Returns the objectId of the new row.
     */

  }, {
    key: 'addTableRow',
    value: function addTableRow(path, row) {
      if (!isObject(row) || Array.isArray(row)) {
        throw new TypeError('A table row must be an object');
      }
      if (row[OBJECT_ID]) {
        throw new TypeError('Cannot reuse an existing object as table row');
      }
      if (row.id) {
        throw new TypeError('A table row must not have an "id" property; it is generated automatically');
      }

      var valuePatch = this.setValue(path[path.length - 1].objectId, null, row, false);
      this.applyAtPath(path, function (subpatch) {
        subpatch.props[valuePatch.objectId] = _defineProperty({}, valuePatch.objectId, valuePatch);
      });
      return valuePatch.objectId;
    }

    /**
     * Updates the table object at path `path`, deleting the row with ID `rowId`.
     */

  }, {
    key: 'deleteTableRow',
    value: function deleteTableRow(path, rowId) {
      var objectId = path[path.length - 1].objectId,
          table = this.getObject(objectId);

      if (table.byId(rowId)) {
        this.addOp({ action: 'del', obj: objectId, key: rowId, insert: false });
        this.applyAtPath(path, function (subpatch) {
          subpatch.props[rowId] = {};
        });
      }
    }

    /**
     * Adds the integer `delta` to the value of the counter located at property
     * `key` in the object at path `path`.
     */

  }, {
    key: 'increment',
    value: function increment(path, key, delta) {
      var _this3 = this;

      var objectId = path.length === 0 ? ROOT_ID : path[path.length - 1].objectId;
      var object = this.getObject(objectId);
      if (!(object[key] instanceof Counter)) {
        throw new TypeError('Only counter values can be incremented');
      }

      // TODO what if there is a conflicting value on the same key as the counter?
      var value = object[key].value + delta;
      this.addOp({ action: 'inc', obj: objectId, key: key, value: delta, insert: false });
      this.applyAtPath(path, function (subpatch) {
        subpatch.props[key] = _defineProperty({}, _this3.actorId, { value: value, datatype: 'counter' });
      });
    }
  }]);

  return Context;
}();

module.exports = {
  Context: Context
};

/***/ }),

/***/ "./frontend/counter.js":
/*!*****************************!*\
  !*** ./frontend/counter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The most basic CRDT: an integer value that can be changed only by
 * incrementing and decrementing. Since addition of integers is commutative,
 * the value trivially converges.
 */
var Counter = function () {
  function Counter(value) {
    _classCallCheck(this, Counter);

    this.value = value || 0;
    Object.freeze(this);
  }

  /**
   * A peculiar JavaScript language feature from its early days: if the object
   * `x` has a `valueOf()` method that returns a number, you can use numerical
   * operators on the object `x` directly, such as `x + 1` or `x < 4`.
   * This method is also called when coercing a value to a string by
   * concatenating it with another string, as in `x + ''`.
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/valueOf
   */


  _createClass(Counter, [{
    key: 'valueOf',
    value: function valueOf() {
      return this.value;
    }

    /**
     * Returns the counter value as a decimal string. If `x` is a counter object,
     * this method is called e.g. when you do `['value: ', x].join('')` or when
     * you use string interpolation: `value: ${x}`.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.valueOf().toString();
    }

    /**
     * Returns the counter value, so that a JSON serialization of an Automerge
     * document represents the counter simply as an integer.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.value;
    }
  }]);

  return Counter;
}();

/**
 * An instance of this class is used when a counter is accessed within a change
 * callback.
 */


var WriteableCounter = function (_Counter) {
  _inherits(WriteableCounter, _Counter);

  function WriteableCounter() {
    _classCallCheck(this, WriteableCounter);

    return _possibleConstructorReturn(this, (WriteableCounter.__proto__ || Object.getPrototypeOf(WriteableCounter)).apply(this, arguments));
  }

  _createClass(WriteableCounter, [{
    key: 'increment',

    /**
     * Increases the value of the counter by `delta`. If `delta` is not given,
     * increases the value of the counter by 1.
     */
    value: function increment(delta) {
      delta = typeof delta === 'number' ? delta : 1;
      this.context.increment(this.path, this.key, delta);
      this.value += delta;
      return this.value;
    }

    /**
     * Decreases the value of the counter by `delta`. If `delta` is not given,
     * decreases the value of the counter by 1.
     */

  }, {
    key: 'decrement',
    value: function decrement(delta) {
      return this.increment(typeof delta === 'number' ? -delta : -1);
    }
  }]);

  return WriteableCounter;
}(Counter);

/**
 * Returns an instance of `WriteableCounter` for use in a change callback.
 * `context` is the proxy context that keeps track of the mutations.
 * `objectId` is the ID of the object containing the counter, and `key` is
 * the property name (key in map, or index in list) where the counter is
 * located.
*/


function getWriteableCounter(value, context, path, objectId, key) {
  var instance = Object.create(WriteableCounter.prototype);
  instance.value = value;
  instance.context = context;
  instance.path = path;
  instance.objectId = objectId;
  instance.key = key;
  return instance;
}

module.exports = { Counter: Counter, getWriteableCounter: getWriteableCounter };

/***/ }),

/***/ "./frontend/index.js":
/*!***************************!*\
  !*** ./frontend/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = __webpack_require__(/*! ./constants */ "./frontend/constants.js"),
    OPTIONS = _require.OPTIONS,
    CACHE = _require.CACHE,
    STATE = _require.STATE,
    OBJECT_ID = _require.OBJECT_ID,
    CONFLICTS = _require.CONFLICTS,
    CHANGE = _require.CHANGE;

var _require2 = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    ROOT_ID = _require2.ROOT_ID,
    isObject = _require2.isObject,
    copyObject = _require2.copyObject;

var uuid = __webpack_require__(/*! ../src/uuid */ "./src/uuid.js");

var _require3 = __webpack_require__(/*! ./apply_patch */ "./frontend/apply_patch.js"),
    interpretPatch = _require3.interpretPatch,
    cloneRootObject = _require3.cloneRootObject;

var _require4 = __webpack_require__(/*! ./proxies */ "./frontend/proxies.js"),
    rootObjectProxy = _require4.rootObjectProxy;

var _require5 = __webpack_require__(/*! ./context */ "./frontend/context.js"),
    Context = _require5.Context;

var _require6 = __webpack_require__(/*! ./text */ "./frontend/text.js"),
    Text = _require6.Text;

var _require7 = __webpack_require__(/*! ./table */ "./frontend/table.js"),
    Table = _require7.Table;

var _require8 = __webpack_require__(/*! ./counter */ "./frontend/counter.js"),
    Counter = _require8.Counter;

/**
 * Actor IDs must consist only of hexadecimal digits so that they can be encoded
 * compactly in binary form.
 */


function checkActorId(actorId) {
  if (typeof actorId !== 'string') {
    throw new TypeError('Unsupported type of actorId: ' + (typeof actorId === 'undefined' ? 'undefined' : _typeof(actorId)));
  }
  if (!/^[0-9a-f]+$/.test(actorId)) {
    throw new RangeError('actorId must consist only of lowercase hex digits');
  }
  if (actorId.length % 2 !== 0) {
    throw new RangeError('actorId must consist of an even number of digits');
  }
}

/**
 * Takes a set of objects that have been updated (in `updated`) and an updated state object
 * `state`, and returns a new immutable document root object based on `doc` that reflects
 * those updates.
 */
function updateRootObject(doc, updated, state) {
  var newDoc = updated[ROOT_ID];
  if (!newDoc) {
    newDoc = cloneRootObject(doc[CACHE][ROOT_ID]);
    updated[ROOT_ID] = newDoc;
  }
  Object.defineProperty(newDoc, OPTIONS, { value: doc[OPTIONS] });
  Object.defineProperty(newDoc, CACHE, { value: updated });
  Object.defineProperty(newDoc, STATE, { value: state });

  if (doc[OPTIONS].freeze) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(updated)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var objectId = _step.value;

        if (updated[objectId] instanceof Table) {
          updated[objectId]._freeze();
        } else if (updated[objectId] instanceof Text) {
          Object.freeze(updated[objectId].elems);
          Object.freeze(updated[objectId]);
        } else {
          Object.freeze(updated[objectId]);
          Object.freeze(updated[objectId][CONFLICTS]);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Object.keys(doc[CACHE])[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _objectId = _step2.value;

      if (!updated[_objectId]) {
        updated[_objectId] = doc[CACHE][_objectId];
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  if (doc[OPTIONS].freeze) {
    Object.freeze(updated);
  }
  return newDoc;
}

/**
 * Adds a new change request to the list of pending requests, and returns an
 * updated document root object. `requestType` is a string indicating the type
 * of request, which may be "change", "undo", or "redo". For the "change" request
 * type, the details of the change are taken from the context object `context`.
 * `options` contains properties that may affect how the change is processed; in
 * particular, the `message` property of `options` is an optional human-readable
 * string describing the change.
 */
function makeChange(doc, requestType, context, options) {
  var actor = getActorId(doc);
  if (!actor) {
    throw new Error('Actor ID must be initialized with setActorId() before making a change');
  }
  var state = copyObject(doc[STATE]);
  state.seq += 1;

  var request = {
    requestType: requestType, actor: actor, seq: state.seq,
    time: Math.round(new Date().getTime() / 1000),
    message: options && typeof options.message === 'string' ? options.message : '',
    version: state.version
  };
  if (options && options.undoable === false) {
    request.undoable = false;
  }
  if (context) {
    request.ops = context.ops;
  }

  if (doc[OPTIONS].backend) {
    var _doc$OPTIONS$backend$ = doc[OPTIONS].backend.applyLocalChange(state.backendState, request),
        _doc$OPTIONS$backend$2 = _slicedToArray(_doc$OPTIONS$backend$, 3),
        backendState = _doc$OPTIONS$backend$2[0],
        patch = _doc$OPTIONS$backend$2[1],
        _change = _doc$OPTIONS$backend$2[2];

    state.backendState = backendState;
    // NOTE: When performing a local change, the patch is effectively applied twice -- once by the
    // context invoking interpretPatch as soon as any change is made, and the second time here
    // (after a round-trip through the backend). This is perhaps more robust, as changes only take
    // effect in the form processed by the backend, but the downside is a performance cost.
    // Should we change this?
    return [applyPatchToDoc(doc, patch, state, true), request, _change];
  } else {
    if (!context) context = new Context(doc, actor);
    var queuedRequest = copyObject(request);
    queuedRequest.before = doc;
    state.requests = state.requests.concat([queuedRequest]);
    return [updateRootObject(doc, context.updated, state), request, null];
  }
}

/**
 * Applies the changes described in `patch` to the document with root object
 * `doc`. The state object `state` is attached to the new root object.
 * `fromBackend` should be set to `true` if the patch came from the backend,
 * and to `false` if the patch is a transient local (optimistically applied)
 * change from the frontend.
 */
function applyPatchToDoc(doc, patch, state, fromBackend) {
  var actor = getActorId(doc);
  var updated = {};
  interpretPatch(patch.diffs, doc, updated);

  if (fromBackend) {
    if (!patch.clock) throw new RangeError('patch is missing clock field');
    if (patch.clock[actor] && patch.clock[actor] > state.seq) {
      state.seq = patch.clock[actor];
    }
    state.clock = patch.clock;
    state.deps = patch.deps;
    state.version = patch.version;
    state.canUndo = patch.canUndo;
    state.canRedo = patch.canRedo;
  }
  return updateRootObject(doc, updated, state);
}

/**
 * Creates an empty document object with no changes.
 */
function init(options) {
  if (typeof options === 'string') {
    options = { actorId: options };
  } else if (typeof options === 'undefined') {
    options = {};
  } else if (!isObject(options)) {
    throw new TypeError('Unsupported value for init() options: ' + options);
  }

  if (!options.deferActorId) {
    if (options.actorId === undefined) {
      options.actorId = uuid();
    }
    checkActorId(options.actorId);
  }

  var root = {},
      cache = _defineProperty({}, ROOT_ID, root);
  var state = { seq: 0, requests: [], version: 0, clock: {}, deps: [], canUndo: false, canRedo: false };
  if (options.backend) {
    state.backendState = options.backend.init();
  }
  Object.defineProperty(root, OBJECT_ID, { value: ROOT_ID });
  Object.defineProperty(root, OPTIONS, { value: Object.freeze(options) });
  Object.defineProperty(root, CONFLICTS, { value: Object.freeze({}) });
  Object.defineProperty(root, CACHE, { value: Object.freeze(cache) });
  Object.defineProperty(root, STATE, { value: Object.freeze(state) });
  return Object.freeze(root);
}

/**
 * Returns a new document object initialized with the given state.
 */
function from(initialState, options) {
  return change(init(options), 'Initialization', function (doc) {
    return Object.assign(doc, initialState);
  });
}

/**
 * Changes a document `doc` according to actions taken by the local user.
 * `options` is an object that can contain the following properties:
 *  - `message`: an optional descriptive string that is attached to the change.
 *  - `undoable`: false if the change should not affect the undo history.
 * If `options` is a string, it is treated as `message`.
 *
 * The actual change is made within the callback function `callback`, which is
 * given a mutable version of the document as argument. Returns a two-element
 * array `[doc, request]` where `doc` is the updated document, and `request`
 * is the change request to send to the backend. If nothing was actually
 * changed, returns the original `doc` and a `null` change request.
 */
function change(doc, options, callback) {
  if (doc[OBJECT_ID] !== ROOT_ID) {
    throw new TypeError('The first argument to Automerge.change must be the document root');
  }
  if (doc[CHANGE]) {
    throw new TypeError('Calls to Automerge.change cannot be nested');
  }
  if (typeof options === 'function' && callback === undefined) {
    ;var _ref = [callback, options];
    options = _ref[0];
    callback = _ref[1];
  }
  if (typeof options === 'string') {
    options = { message: options };
  }
  if (options !== undefined && !isObject(options)) {
    throw new TypeError('Unsupported type of options');
  }

  var actorId = getActorId(doc);
  if (!actorId) {
    throw new Error('Actor ID must be initialized with setActorId() before making a change');
  }
  var context = new Context(doc, actorId);
  callback(rootObjectProxy(context));

  if (Object.keys(context.updated).length === 0) {
    // If the callback didn't change anything, return the original document object unchanged
    return [doc, null, null];
  } else {
    return makeChange(doc, 'change', context, options);
  }
}

/**
 * Triggers a new change request on the document `doc` without actually
 * modifying its data. `options` is an object as described in the documentation
 * for the `change` function. This function can be useful for acknowledging the
 * receipt of some message (as it's incorported into the `deps` field of the
 * change). Returns a two-element array `[doc, request]` where `doc` is the
 * updated document, and `request` is the change request to send to the backend.
 */
function emptyChange(doc, options) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  if (options !== undefined && !isObject(options)) {
    throw new TypeError('Unsupported type of options');
  }

  var actorId = getActorId(doc);
  if (!actorId) {
    throw new Error('Actor ID must be initialized with setActorId() before making a change');
  }
  return makeChange(doc, 'change', new Context(doc, actorId), options);
}

/**
 * Applies `patch` to the document root object `doc`. This patch must come
 * from the backend; it may be the result of a local change or a remote change.
 * If it is the result of a local change, the `seq` field from the change
 * request should be included in the patch, so that we can match them up here.
 */
function applyPatch(doc, patch) {
  var state = copyObject(doc[STATE]);

  if (doc[OPTIONS].backend) {
    if (!patch.state) {
      throw new RangeError('When an immediate backend is used, a patch must contain the new backend state');
    }
    state.backendState = patch.state;
    return applyPatchToDoc(doc, patch, state, true);
  }

  var baseDoc = void 0;

  if (state.requests.length > 0) {
    baseDoc = state.requests[0].before;
    if (patch.actor === getActorId(doc) && patch.seq !== undefined) {
      if (state.requests[0].seq !== patch.seq) {
        throw new RangeError('Mismatched sequence number: patch ' + patch.seq + ' does not match next request ' + state.requests[0].seq);
      }
      state.requests = state.requests.slice(1).map(copyObject);
    } else {
      state.requests = state.requests.slice().map(copyObject);
    }
  } else {
    baseDoc = doc;
    state.requests = [];
  }

  var newDoc = applyPatchToDoc(baseDoc, patch, state, true);
  if (state.requests.length === 0) {
    return newDoc;
  } else {
    state.requests[0].before = newDoc;
    return updateRootObject(doc, {}, state);
  }
}

/**
 * Returns `true` if undo is currently possible on the document `doc` (because
 * there is a local change that has not already been undone); `false` if not.
 */
function canUndo(doc) {
  return !!doc[STATE].canUndo && !isUndoRedoInFlight(doc);
}

/**
 * Returns `true` if one of the pending requests is an undo or redo.
 */
function isUndoRedoInFlight(doc) {
  return doc[STATE].requests.some(function (req) {
    return ['undo', 'redo'].includes(req.requestType);
  });
}

/**
 * Creates a request to perform an undo on the document `doc`, returning a
 * two-element array `[doc, request]` where `doc` is the updated document, and
 * `request` needs to be sent to the backend. `options` is an object as
 * described in the documentation for the `change` function; it may contain a
 * `message` property with an optional change description to attach to the undo.
 * Note that the undo does not take effect immediately: only after the request
 * is sent to the backend, and the backend responds with a patch, does the
 * user-visible document update actually happen.
 */
function undo(doc, options) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  if (options !== undefined && !isObject(options)) {
    throw new TypeError('Unsupported type of options');
  }
  if (!doc[STATE].canUndo) {
    throw new Error('Cannot undo: there is nothing to be undone');
  }
  if (isUndoRedoInFlight(doc)) {
    throw new Error('Can only have one undo in flight at any one time');
  }
  return makeChange(doc, 'undo', null, options);
}

/**
 * Returns `true` if redo is currently possible on the document `doc` (because
 * a prior action was an undo that has not already been redone); `false` if not.
 */
function canRedo(doc) {
  return !!doc[STATE].canRedo && !isUndoRedoInFlight(doc);
}

/**
 * Creates a request to perform a redo of a prior undo on the document `doc`,
 * returning a two-element array `[doc, request]` where `doc` is the updated
 * document, and `request` needs to be sent to the backend. `options` is an
 * object as described in the documentation for the `change` function; it may
 * contain a `message` property with an optional change description to attach
 * to the redo. Note that the redo does not take effect immediately: only
 * after the request is sent to the backend, and the backend responds with a
 * patch, does the user-visible document update actually happen.
 */
function redo(doc, options) {
  if (typeof options === 'string') {
    options = { message: options };
  }
  if (options !== undefined && !isObject(options)) {
    throw new TypeError('Unsupported type of options');
  }
  if (!doc[STATE].canRedo) {
    throw new Error('Cannot redo: there is no prior undo');
  }
  if (isUndoRedoInFlight(doc)) {
    throw new Error('Can only have one redo in flight at any one time');
  }
  return makeChange(doc, 'redo', null, options);
}

/**
 * Returns the Automerge object ID of the given object.
 */
function getObjectId(object) {
  return object[OBJECT_ID];
}

/**
 * Returns the object with the given Automerge object ID. Note: when called
 * within a change callback, the returned object is read-only (not a mutable
 * proxy object).
 */
function getObjectById(doc, objectId) {
  // It would be nice to return a proxied object in a change callback.
  // However, that requires knowing the path from the root to the current
  // object, which we don't have if we jumped straight to the object by its ID.
  // If we maintained an index from object ID to parent ID we could work out the path.
  if (doc[CHANGE]) {
    throw new TypeError('Cannot use getObjectById in a change callback');
  }
  return doc[CACHE][objectId];
}

/**
 * Returns the Automerge actor ID of the given document.
 */
function getActorId(doc) {
  return doc[STATE].actorId || doc[OPTIONS].actorId;
}

/**
 * Sets the Automerge actor ID on the document object `doc`, returning a
 * document object with updated metadata.
 */
function setActorId(doc, actorId) {
  checkActorId(actorId);
  var state = Object.assign({}, doc[STATE], { actorId: actorId });
  return updateRootObject(doc, {}, state);
}

/**
 * Returns an array of hashes of the "head" changes (i.e. those changes that
 * are not depended on by any other change), according to the current doc state.
 */
function getDeps(doc) {
  return doc[STATE].deps;
}

/**
 * Fetches the conflicts on the property `key` of `object`, which may be any
 * object in a document. If `object` is a list, then `key` must be a list
 * index; if `object` is a map, then `key` must be a property name.
 */
function getConflicts(object, key) {
  if (object[CONFLICTS] && object[CONFLICTS][key] && Object.keys(object[CONFLICTS][key]).length > 1) {
    return object[CONFLICTS][key];
  }
}

/**
 * Returns the backend state associated with the document `doc` (only used if
 * a backend implementation is passed to `init()`).
 */
function getBackendState(doc) {
  return doc[STATE].backendState;
}

module.exports = {
  init: init, from: from, change: change, emptyChange: emptyChange, applyPatch: applyPatch,
  canUndo: canUndo, undo: undo, canRedo: canRedo, redo: redo,
  getObjectId: getObjectId, getObjectById: getObjectById, getActorId: getActorId, setActorId: setActorId, getDeps: getDeps, getConflicts: getConflicts,
  getBackendState: getBackendState,
  Text: Text, Table: Table, Counter: Counter
};

/***/ }),

/***/ "./frontend/proxies.js":
/*!*****************************!*\
  !*** ./frontend/proxies.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _require = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    ROOT_ID = _require.ROOT_ID;

var _require2 = __webpack_require__(/*! ./constants */ "./frontend/constants.js"),
    OBJECT_ID = _require2.OBJECT_ID,
    CHANGE = _require2.CHANGE,
    STATE = _require2.STATE;

var _require3 = __webpack_require__(/*! ./text */ "./frontend/text.js"),
    Text = _require3.Text;

var _require4 = __webpack_require__(/*! ./table */ "./frontend/table.js"),
    Table = _require4.Table;

function parseListIndex(key) {
  if (typeof key === 'string' && /^[0-9]+$/.test(key)) key = parseInt(key);
  if (typeof key !== 'number') {
    throw new TypeError('A list index must be a number, but you passed ' + JSON.stringify(key));
  }
  if (key < 0 || isNaN(key) || key === Infinity || key === -Infinity) {
    throw new RangeError('A list index must be positive, but you passed ' + key);
  }
  return key;
}

function listMethods(context, listId, path) {
  var methods = {
    deleteAt: function deleteAt(index, numDelete) {
      context.splice(path, parseListIndex(index), numDelete || 1, []);
      return this;
    },
    fill: function fill(value, start, end) {
      var list = context.getObject(listId);
      for (var index = parseListIndex(start || 0); index < parseListIndex(end || list.length); index++) {
        context.setListIndex(path, index, value);
      }
      return this;
    },
    insertAt: function insertAt(index) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      context.splice(path, parseListIndex(index), 0, values);
      return this;
    },
    pop: function pop() {
      var list = context.getObject(listId);
      if (list.length == 0) return;
      var last = context.getObjectField(path, listId, list.length - 1);
      context.splice(path, list.length - 1, 1, []);
      return last;
    },
    push: function push() {
      var list = context.getObject(listId);

      for (var _len2 = arguments.length, values = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        values[_key2] = arguments[_key2];
      }

      context.splice(path, list.length, 0, values);
      // need to getObject() again because the list object above may be immutable
      return context.getObject(listId).length;
    },
    shift: function shift() {
      var list = context.getObject(listId);
      if (list.length == 0) return;
      var first = context.getObjectField(path, listId, 0);
      context.splice(path, 0, 1, []);
      return first;
    },
    splice: function splice(start, deleteCount) {
      var list = context.getObject(listId);
      start = parseListIndex(start);
      if (deleteCount === undefined) {
        deleteCount = list.length - start;
      }
      var deleted = [];
      for (var n = 0; n < deleteCount; n++) {
        deleted.push(context.getObjectField(path, listId, start + n));
      }

      for (var _len3 = arguments.length, values = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        values[_key3 - 2] = arguments[_key3];
      }

      context.splice(path, start, deleteCount, values);
      return deleted;
    },
    unshift: function unshift() {
      for (var _len4 = arguments.length, values = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        values[_key4] = arguments[_key4];
      }

      context.splice(path, 0, 0, values);
      return context.getObject(listId).length;
    }
  };

  var _loop = function _loop(iterator) {
    var list = context.getObject(listId);
    methods[iterator] = function () {
      return list[iterator]();
    };
  };

  var _arr = ['entries', 'keys', 'values'];
  for (var _i = 0; _i < _arr.length; _i++) {
    var iterator = _arr[_i];
    _loop(iterator);
  }

  // Read-only methods that can delegate to the JavaScript built-in implementations

  var _loop2 = function _loop2(method) {
    methods[method] = function () {
      var _list$method;

      for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      var list = context.getObject(listId).map(function (item, index) {
        return context.getObjectField(path, listId, index);
      });
      return (_list$method = list[method]).call.apply(_list$method, [list].concat(args));
    };
  };

  var _arr2 = ['concat', 'every', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'slice', 'some', 'toLocaleString', 'toString'];
  for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
    var method = _arr2[_i2];
    _loop2(method);
  }

  return methods;
}

var MapHandler = {
  get: function get(target, key) {
    var context = target.context,
        objectId = target.objectId,
        path = target.path;

    if (key === OBJECT_ID) return objectId;
    if (key === CHANGE) return context;
    if (key === STATE) return { actorId: context.actorId };
    return context.getObjectField(path, objectId, key);
  },
  set: function set(target, key, value) {
    var context = target.context,
        objectId = target.objectId,
        path = target.path,
        readonly = target.readonly;

    if (Array.isArray(readonly) && readonly.indexOf(key) >= 0) {
      throw new RangeError('Object property "' + key + '" cannot be modified');
    }
    context.setMapKey(path, key, value);
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    var context = target.context,
        objectId = target.objectId,
        path = target.path,
        readonly = target.readonly;

    if (Array.isArray(readonly) && readonly.indexOf(key) >= 0) {
      throw new RangeError('Object property "' + key + '" cannot be modified');
    }
    context.deleteMapKey(path, key);
    return true;
  },
  has: function has(target, key) {
    var context = target.context,
        objectId = target.objectId;

    return [OBJECT_ID, CHANGE].includes(key) || key in context.getObject(objectId);
  },
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, key) {
    var context = target.context,
        objectId = target.objectId;

    var object = context.getObject(objectId);
    if (key in object) {
      return { configurable: true, enumerable: true };
    }
  },
  ownKeys: function ownKeys(target) {
    var context = target.context,
        objectId = target.objectId;

    return Object.keys(context.getObject(objectId));
  }
};

var ListHandler = {
  get: function get(target, key) {
    var _target = _slicedToArray(target, 3),
        context = _target[0],
        objectId = _target[1],
        path = _target[2];

    if (key === Symbol.iterator) return context.getObject(objectId)[Symbol.iterator];
    if (key === OBJECT_ID) return objectId;
    if (key === CHANGE) return context;
    if (key === 'length') return context.getObject(objectId).length;
    if (typeof key === 'string' && /^[0-9]+$/.test(key)) {
      return context.getObjectField(path, objectId, parseListIndex(key));
    }
    return listMethods(context, objectId, path)[key];
  },
  set: function set(target, key, value) {
    var _target2 = _slicedToArray(target, 3),
        context = _target2[0],
        objectId = _target2[1],
        path = _target2[2];

    context.setListIndex(path, parseListIndex(key), value);
    return true;
  },
  deleteProperty: function deleteProperty(target, key) {
    var _target3 = _slicedToArray(target, 3),
        context = _target3[0],
        objectId = _target3[1],
        path = _target3[2];

    context.splice(path, parseListIndex(key), 1, []);
    return true;
  },
  has: function has(target, key) {
    var _target4 = _slicedToArray(target, 3),
        context = _target4[0],
        objectId = _target4[1],
        path = _target4[2];

    if (typeof key === 'string' && /^[0-9]+$/.test(key)) {
      return parseListIndex(key) < context.getObject(objectId).length;
    }
    return ['length', OBJECT_ID, CHANGE].includes(key);
  },
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, key) {
    if (key === 'length') return { writable: true };
    if (key === OBJECT_ID) return { configurable: false, enumerable: false };

    var _target5 = _slicedToArray(target, 3),
        context = _target5[0],
        objectId = _target5[1],
        path = _target5[2];

    var object = context.getObject(objectId);

    if (typeof key === 'string' && /^[0-9]+$/.test(key)) {
      var index = parseListIndex(key);
      if (index < object.length) return { configurable: true, enumerable: true };
    }
  },
  ownKeys: function ownKeys(target) {
    var _target6 = _slicedToArray(target, 3),
        context = _target6[0],
        objectId = _target6[1],
        path = _target6[2];

    var object = context.getObject(objectId);
    var keys = ['length'];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = Object.keys(object)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;
        keys.push(key);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return keys;
  }
};

function mapProxy(context, objectId, path, readonly) {
  return new Proxy({ context: context, objectId: objectId, path: path, readonly: readonly }, MapHandler);
}

function listProxy(context, objectId, path) {
  return new Proxy([context, objectId, path], ListHandler);
}

/**
 * Instantiates a proxy object for the given `objectId`.
 * This function is added as a method to the context object by rootObjectProxy().
 * When it is called, `this` is the context object.
 * `readonly` is a list of map property names that cannot be modified.
 */
function instantiateProxy(path, objectId, readonly) {
  var object = this.getObject(objectId);
  if (Array.isArray(object)) {
    return listProxy(this, objectId, path);
  } else if (object instanceof Text || object instanceof Table) {
    return object.getWriteable(this, path);
  } else {
    return mapProxy(this, objectId, path, readonly);
  }
}

function rootObjectProxy(context) {
  context.instantiateObject = instantiateProxy;
  return mapProxy(context, ROOT_ID, []);
}

module.exports = { rootObjectProxy: rootObjectProxy };

/***/ }),

/***/ "./frontend/table.js":
/*!***************************!*\
  !*** ./frontend/table.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! ./constants */ "./frontend/constants.js"),
    OBJECT_ID = _require.OBJECT_ID,
    CONFLICTS = _require.CONFLICTS;

var _require2 = __webpack_require__(/*! ../src/common */ "./src/common.js"),
    isObject = _require2.isObject,
    copyObject = _require2.copyObject;

function compareRows(properties, row1, row2) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = properties[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var prop = _step.value;

      if (row1[prop] === row2[prop]) continue;

      if (typeof row1[prop] === 'number' && typeof row2[prop] === 'number') {
        return row1[prop] - row2[prop];
      } else {
        var prop1 = '' + row1[prop],
            prop2 = '' + row2[prop];
        if (prop1 === prop2) continue;
        if (prop1 < prop2) return -1;else return +1;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return 0;
}

/**
 * A relational-style unordered collection of records (rows). Each row is an
 * object that maps column names to values. The set of rows is represented by
 * a map from object ID to row object.
 */

var Table = function () {
  /**
   * This constructor is used by application code when creating a new Table
   * object within a change callback.
   */
  function Table() {
    _classCallCheck(this, Table);

    this.entries = Object.freeze({});
    Object.freeze(this);
  }

  /**
   * Looks up a row in the table by its unique ID.
   */


  _createClass(Table, [{
    key: 'byId',
    value: function byId(id) {
      return this.entries[id];
    }

    /**
     * Returns an array containing the unique IDs of all rows in the table, in no
     * particular order.
     */

  }, {
    key: 'filter',


    /**
     * The standard JavaScript `filter()` method, which passes each row to the
     * callback function and returns all rows for which the it returns true.
     */
    value: function filter(callback, thisArg) {
      return this.rows.filter(callback, thisArg);
    }

    /**
     * The standard JavaScript `find()` method, which passes each row to the
     * callback function and returns the first row for which it returns true.
     */

  }, {
    key: 'find',
    value: function find(callback, thisArg) {
      return this.rows.find(callback, thisArg);
    }

    /**
     * The standard JavaScript `map()` method, which passes each row to the
     * callback function and returns a list of its return values.
     */

  }, {
    key: 'map',
    value: function map(callback, thisArg) {
      return this.rows.map(callback, thisArg);
    }

    /**
    * Returns the list of rows, sorted by one of the following:
    * - If a function argument is given, it compares rows as per
    *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#Description
    * - If a string argument is given, it is interpreted as a column name and
    *   rows are sorted according to that column.
    * - If an array of strings is given, it is interpreted as a list of column
    *   names, and rows are sorted lexicographically by those columns.
    * - If no argument is given, it sorts by row ID by default.
    */

  }, {
    key: 'sort',
    value: function sort(arg) {
      if (typeof arg === 'function') {
        return this.rows.sort(arg);
      } else if (typeof arg === 'string') {
        return this.rows.sort(function (row1, row2) {
          return compareRows([arg], row1, row2);
        });
      } else if (Array.isArray(arg)) {
        return this.rows.sort(function (row1, row2) {
          return compareRows(arg, row1, row2);
        });
      } else if (arg === undefined) {
        return this.rows.sort(function (row1, row2) {
          return compareRows(['id'], row1, row2);
        });
      } else {
        throw new TypeError('Unsupported sorting argument: ' + arg);
      }
    }

    /**
     * When iterating over a table, you get all rows in the table, in no
     * particular order.
     */

  }, {
    key: Symbol.iterator,
    value: function value() {
      var rows = this.rows,
          index = -1;
      return {
        next: function next() {
          index += 1;
          if (index < rows.length) {
            return { done: false, value: rows[index] };
          } else {
            return { done: true };
          }
        }
      };
    }

    /**
     * Returns a shallow clone of this object. This clone is used while applying
     * a patch to the table, and `freeze()` is called on it when we have finished
     * applying the patch.
     */

  }, {
    key: '_clone',
    value: function _clone() {
      if (!this[OBJECT_ID]) {
        throw new RangeError('clone() requires the objectId to be set');
      }
      return instantiateTable(this[OBJECT_ID], copyObject(this.entries));
    }

    /**
     * Sets the entry with key `id` to `value`. This method is for internal use
     * only; it is not part of the public API of Automerge.Table.
     */

  }, {
    key: '_set',
    value: function _set(id, value) {
      if (Object.isFrozen(this.entries)) {
        throw new Error('A table can only be modified in a change function');
      }
      if (isObject(value) && !Array.isArray(value)) {
        Object.defineProperty(value, 'id', { value: id, enumerable: true });
      }
      this.entries[id] = value;
    }

    /**
     * Removes the row with unique ID `id` from the table.
     */

  }, {
    key: 'remove',
    value: function remove(id) {
      if (Object.isFrozen(this.entries)) {
        throw new Error('A table can only be modified in a change function');
      }
      delete this.entries[id];
    }

    /**
     * Makes this object immutable. This is called after a change has been made.
     */

  }, {
    key: '_freeze',
    value: function _freeze() {
      Object.freeze(this.entries);
      Object.freeze(this);
    }

    /**
     * Returns a writeable instance of this table. This instance is returned when
     * the table is accessed within a change callback. `context` is the proxy
     * context that keeps track of the mutations.
     */

  }, {
    key: 'getWriteable',
    value: function getWriteable(context, path) {
      if (!this[OBJECT_ID]) {
        throw new RangeError('getWriteable() requires the objectId to be set');
      }

      var instance = Object.create(WriteableTable.prototype);
      instance[OBJECT_ID] = this[OBJECT_ID];
      instance.context = context;
      instance.entries = this.entries;
      instance.path = path;
      return instance;
    }

    /**
     * Returns an object containing the table entries, indexed by objectID,
     * for serializing an Automerge document to JSON.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var rows = {};
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.ids[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var id = _step2.value;
          rows[id] = this.byId(id);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return rows;
    }
  }, {
    key: 'ids',
    get: function get() {
      var _this = this;

      return Object.keys(this.entries).filter(function (key) {
        var entry = _this.entries[key];
        return isObject(entry) && entry.id === key;
      });
    }

    /**
     * Returns the number of rows in the table.
     */

  }, {
    key: 'count',
    get: function get() {
      return this.ids.length;
    }

    /**
     * Returns an array containing all of the rows in the table, in no particular
     * order.
     */

  }, {
    key: 'rows',
    get: function get() {
      var _this2 = this;

      return this.ids.map(function (id) {
        return _this2.byId(id);
      });
    }
  }]);

  return Table;
}();

/**
 * An instance of this class is used when a table is accessed within a change
 * callback.
 */


var WriteableTable = function (_Table) {
  _inherits(WriteableTable, _Table);

  function WriteableTable() {
    _classCallCheck(this, WriteableTable);

    return _possibleConstructorReturn(this, (WriteableTable.__proto__ || Object.getPrototypeOf(WriteableTable)).apply(this, arguments));
  }

  _createClass(WriteableTable, [{
    key: 'byId',

    /**
     * Returns a proxied version of the row with ID `id`. This row object can be
     * modified within a change callback.
     */
    value: function byId(id) {
      if (isObject(this.entries[id]) && this.entries[id].id === id) {
        var objectId = this.entries[id][OBJECT_ID];
        var path = this.path.concat([{ key: id, objectId: objectId }]);
        return this.context.instantiateObject(path, objectId, ['id']);
      }
    }

    /**
     * Adds a new row to the table. The row is given as a map from
     * column name to value. Returns the objectId of the new row.
     */

  }, {
    key: 'add',
    value: function add(row) {
      return this.context.addTableRow(this.path, row);
    }

    /**
     * Removes the row with ID `id` from the table. Throws an exception if the row
     * does not exist in the table.
     */

  }, {
    key: 'remove',
    value: function remove(id) {
      if (isObject(this.entries[id]) && this.entries[id].id === id) {
        this.context.deleteTableRow(this.path, id);
      } else {
        throw new RangeError('There is no row with ID ' + id + ' in this table');
      }
    }
  }]);

  return WriteableTable;
}(Table);

/**
 * This function is used to instantiate a Table object in the context of
 * applying a patch (see apply_patch.js).
 */


function instantiateTable(objectId, entries) {
  var instance = Object.create(Table.prototype);
  if (!objectId) {
    throw new RangeError('instantiateTable requires an objectId to be given');
  }
  instance[OBJECT_ID] = objectId;
  instance[CONFLICTS] = Object.freeze({});
  instance.entries = entries || {};
  return instance;
}

module.exports = { Table: Table, instantiateTable: instantiateTable };

/***/ }),

/***/ "./frontend/text.js":
/*!**************************!*\
  !*** ./frontend/text.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(/*! ./constants */ "./frontend/constants.js"),
    OBJECT_ID = _require.OBJECT_ID;

var Text = function () {
  function Text(text) {
    _classCallCheck(this, Text);

    if (typeof text === 'string') {
      var elems = text.split('').map(function (value) {
        return { value: value };
      });
      return instantiateText(undefined, elems);
    } else if (Array.isArray(text)) {
      var _elems = text.map(function (value) {
        return { value: value };
      });
      return instantiateText(undefined, _elems);
    } else if (text === undefined) {
      return instantiateText(undefined, []);
    } else {
      throw new TypeError('Unsupported initial value for Text: ' + text);
    }
  }

  _createClass(Text, [{
    key: 'get',
    value: function get(index) {
      return this.elems[index].value;
    }

    /**
     * Iterates over the text elements character by character, including any
     * inline objects.
     */

  }, {
    key: Symbol.iterator,
    value: function value() {
      var elems = this.elems,
          index = -1;
      return {
        next: function next() {
          index += 1;
          if (index < elems.length) {
            return { done: false, value: elems[index].value };
          } else {
            return { done: true };
          }
        }
      };
    }

    /**
     * Returns the content of the Text object as a simple string, ignoring any
     * non-character elements.
     */

  }, {
    key: 'toString',
    value: function toString() {
      // Concatting to a string is faster than creating an array and then
      // .join()ing for small (<100KB) arrays.
      // https://jsperf.com/join-vs-loop-w-type-test
      var str = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.elems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var elem = _step.value;

          if (typeof elem.value === 'string') str += elem.value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return str;
    }

    /**
     * Returns the content of the Text object as a sequence of strings,
     * interleaved with non-character elements.
     *
     * For example, the value ['a', 'b', {x: 3}, 'c', 'd'] has spans:
     * => ['ab', {x: 3}, 'cd']
     */

  }, {
    key: 'toSpans',
    value: function toSpans() {
      var spans = [];
      var chars = '';
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this.elems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var elem = _step2.value;

          if (typeof elem.value === 'string') {
            chars += elem.value;
          } else {
            if (chars.length > 0) {
              spans.push(chars);
              chars = '';
            }
            spans.push(elem.value);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      if (chars.length > 0) {
        spans.push(chars);
      }
      return spans;
    }

    /**
     * Returns the content of the Text object as a simple string, so that the
     * JSON serialization of an Automerge document represents text nicely.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      return this.toString();
    }

    /**
     * Returns a writeable instance of this object. This instance is returned when
     * the text object is accessed within a change callback. `context` is the
     * proxy context that keeps track of the mutations.
     */

  }, {
    key: 'getWriteable',
    value: function getWriteable(context, path) {
      if (!this[OBJECT_ID]) {
        throw new RangeError('getWriteable() requires the objectId to be set');
      }

      var instance = instantiateText(this[OBJECT_ID], this.elems);
      instance.context = context;
      instance.path = path;
      return instance;
    }

    /**
     * Updates the list item at position `index` to a new value `value`.
     */

  }, {
    key: 'set',
    value: function set(index, value) {
      if (this.context) {
        this.context.setListIndex(this.path, index, value);
      } else if (!this[OBJECT_ID]) {
        this.elems[index].value = value;
      } else {
        throw new TypeError('Automerge.Text object cannot be modified outside of a change block');
      }
      return this;
    }

    /**
     * Inserts new list items `values` starting at position `index`.
     */

  }, {
    key: 'insertAt',
    value: function insertAt(index) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        values[_key - 1] = arguments[_key];
      }

      if (this.context) {
        this.context.splice(this.path, index, 0, values);
      } else if (!this[OBJECT_ID]) {
        var _elems2;

        (_elems2 = this.elems).splice.apply(_elems2, [index, 0].concat(_toConsumableArray(values.map(function (value) {
          return { value: value };
        }))));
      } else {
        throw new TypeError('Automerge.Text object cannot be modified outside of a change block');
      }
      return this;
    }

    /**
     * Deletes `numDelete` list items starting at position `index`.
     * if `numDelete` is not given, one item is deleted.
     */

  }, {
    key: 'deleteAt',
    value: function deleteAt(index) {
      var numDelete = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

      if (this.context) {
        this.context.splice(this.path, index, numDelete, []);
      } else if (!this[OBJECT_ID]) {
        this.elems.splice(index, numDelete);
      } else {
        throw new TypeError('Automerge.Text object cannot be modified outside of a change block');
      }
      return this;
    }
  }, {
    key: 'length',
    get: function get() {
      return this.elems.length;
    }
  }]);

  return Text;
}();

// Read-only methods that can delegate to the JavaScript built-in array


var _loop = function _loop(method) {
  Text.prototype[method] = function () {
    var _array$method;

    var array = [].concat(_toConsumableArray(this));

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return (_array$method = array[method]).call.apply(_array$method, [array].concat(args));
  };
};

var _arr = ['concat', 'every', 'filter', 'find', 'findIndex', 'forEach', 'includes', 'indexOf', 'join', 'lastIndexOf', 'map', 'reduce', 'reduceRight', 'slice', 'some', 'toLocaleString'];
for (var _i = 0; _i < _arr.length; _i++) {
  var method = _arr[_i];
  _loop(method);
}

function instantiateText(objectId, elems) {
  var instance = Object.create(Text.prototype);
  instance[OBJECT_ID] = objectId;
  instance.elems = elems;
  return instance;
}

module.exports = { Text: Text, instantiateText: instantiateText };

/***/ }),

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/fast-sha256/sha256.js":
/*!********************************************!*\
  !*** ./node_modules/fast-sha256/sha256.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
    // Hack to make all exports of this module sha256 function object properties.
    var exports = {};
    factory(exports);
    var sha256 = exports["default"];
    for (var k in exports) {
        sha256[k] = exports[k];
    }
        
    if ( true && typeof module.exports === 'object') {
        module.exports = sha256;
    } else if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return sha256; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)); 
    } else {}
})(this, function(exports) {
"use strict";
exports.__esModule = true;
// SHA-256 (+ HMAC and PBKDF2) for JavaScript.
//
// Written in 2014-2016 by Dmitry Chestnykh.
// Public domain, no warranty.
//
// Functions (accept and return Uint8Arrays):
//
//   sha256(message) -> hash
//   sha256.hmac(key, message) -> mac
//   sha256.pbkdf2(password, salt, rounds, dkLen) -> dk
//
//  Classes:
//
//   new sha256.Hash()
//   new sha256.HMAC(key)
//
exports.digestLength = 32;
exports.blockSize = 64;
// SHA-256 constants
var K = new Uint32Array([
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b,
    0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
    0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7,
    0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
    0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152,
    0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
    0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc,
    0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819,
    0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
    0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f,
    0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
    0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2
]);
function hashBlocks(w, v, p, pos, len) {
    var a, b, c, d, e, f, g, h, u, i, j, t1, t2;
    while (len >= 64) {
        a = v[0];
        b = v[1];
        c = v[2];
        d = v[3];
        e = v[4];
        f = v[5];
        g = v[6];
        h = v[7];
        for (i = 0; i < 16; i++) {
            j = pos + i * 4;
            w[i] = (((p[j] & 0xff) << 24) | ((p[j + 1] & 0xff) << 16) |
                ((p[j + 2] & 0xff) << 8) | (p[j + 3] & 0xff));
        }
        for (i = 16; i < 64; i++) {
            u = w[i - 2];
            t1 = (u >>> 17 | u << (32 - 17)) ^ (u >>> 19 | u << (32 - 19)) ^ (u >>> 10);
            u = w[i - 15];
            t2 = (u >>> 7 | u << (32 - 7)) ^ (u >>> 18 | u << (32 - 18)) ^ (u >>> 3);
            w[i] = (t1 + w[i - 7] | 0) + (t2 + w[i - 16] | 0);
        }
        for (i = 0; i < 64; i++) {
            t1 = (((((e >>> 6 | e << (32 - 6)) ^ (e >>> 11 | e << (32 - 11)) ^
                (e >>> 25 | e << (32 - 25))) + ((e & f) ^ (~e & g))) | 0) +
                ((h + ((K[i] + w[i]) | 0)) | 0)) | 0;
            t2 = (((a >>> 2 | a << (32 - 2)) ^ (a >>> 13 | a << (32 - 13)) ^
                (a >>> 22 | a << (32 - 22))) + ((a & b) ^ (a & c) ^ (b & c))) | 0;
            h = g;
            g = f;
            f = e;
            e = (d + t1) | 0;
            d = c;
            c = b;
            b = a;
            a = (t1 + t2) | 0;
        }
        v[0] += a;
        v[1] += b;
        v[2] += c;
        v[3] += d;
        v[4] += e;
        v[5] += f;
        v[6] += g;
        v[7] += h;
        pos += 64;
        len -= 64;
    }
    return pos;
}
// Hash implements SHA256 hash algorithm.
var Hash = /** @class */ (function () {
    function Hash() {
        this.digestLength = exports.digestLength;
        this.blockSize = exports.blockSize;
        // Note: Int32Array is used instead of Uint32Array for performance reasons.
        this.state = new Int32Array(8); // hash state
        this.temp = new Int32Array(64); // temporary state
        this.buffer = new Uint8Array(128); // buffer for data to hash
        this.bufferLength = 0; // number of bytes in buffer
        this.bytesHashed = 0; // number of total bytes hashed
        this.finished = false; // indicates whether the hash was finalized
        this.reset();
    }
    // Resets hash state making it possible
    // to re-use this instance to hash other data.
    Hash.prototype.reset = function () {
        this.state[0] = 0x6a09e667;
        this.state[1] = 0xbb67ae85;
        this.state[2] = 0x3c6ef372;
        this.state[3] = 0xa54ff53a;
        this.state[4] = 0x510e527f;
        this.state[5] = 0x9b05688c;
        this.state[6] = 0x1f83d9ab;
        this.state[7] = 0x5be0cd19;
        this.bufferLength = 0;
        this.bytesHashed = 0;
        this.finished = false;
        return this;
    };
    // Cleans internal buffers and re-initializes hash state.
    Hash.prototype.clean = function () {
        for (var i = 0; i < this.buffer.length; i++) {
            this.buffer[i] = 0;
        }
        for (var i = 0; i < this.temp.length; i++) {
            this.temp[i] = 0;
        }
        this.reset();
    };
    // Updates hash state with the given data.
    //
    // Optionally, length of the data can be specified to hash
    // fewer bytes than data.length.
    //
    // Throws error when trying to update already finalized hash:
    // instance must be reset to use it again.
    Hash.prototype.update = function (data, dataLength) {
        if (dataLength === void 0) { dataLength = data.length; }
        if (this.finished) {
            throw new Error("SHA256: can't update because hash was finished.");
        }
        var dataPos = 0;
        this.bytesHashed += dataLength;
        if (this.bufferLength > 0) {
            while (this.bufferLength < 64 && dataLength > 0) {
                this.buffer[this.bufferLength++] = data[dataPos++];
                dataLength--;
            }
            if (this.bufferLength === 64) {
                hashBlocks(this.temp, this.state, this.buffer, 0, 64);
                this.bufferLength = 0;
            }
        }
        if (dataLength >= 64) {
            dataPos = hashBlocks(this.temp, this.state, data, dataPos, dataLength);
            dataLength %= 64;
        }
        while (dataLength > 0) {
            this.buffer[this.bufferLength++] = data[dataPos++];
            dataLength--;
        }
        return this;
    };
    // Finalizes hash state and puts hash into out.
    //
    // If hash was already finalized, puts the same value.
    Hash.prototype.finish = function (out) {
        if (!this.finished) {
            var bytesHashed = this.bytesHashed;
            var left = this.bufferLength;
            var bitLenHi = (bytesHashed / 0x20000000) | 0;
            var bitLenLo = bytesHashed << 3;
            var padLength = (bytesHashed % 64 < 56) ? 64 : 128;
            this.buffer[left] = 0x80;
            for (var i = left + 1; i < padLength - 8; i++) {
                this.buffer[i] = 0;
            }
            this.buffer[padLength - 8] = (bitLenHi >>> 24) & 0xff;
            this.buffer[padLength - 7] = (bitLenHi >>> 16) & 0xff;
            this.buffer[padLength - 6] = (bitLenHi >>> 8) & 0xff;
            this.buffer[padLength - 5] = (bitLenHi >>> 0) & 0xff;
            this.buffer[padLength - 4] = (bitLenLo >>> 24) & 0xff;
            this.buffer[padLength - 3] = (bitLenLo >>> 16) & 0xff;
            this.buffer[padLength - 2] = (bitLenLo >>> 8) & 0xff;
            this.buffer[padLength - 1] = (bitLenLo >>> 0) & 0xff;
            hashBlocks(this.temp, this.state, this.buffer, 0, padLength);
            this.finished = true;
        }
        for (var i = 0; i < 8; i++) {
            out[i * 4 + 0] = (this.state[i] >>> 24) & 0xff;
            out[i * 4 + 1] = (this.state[i] >>> 16) & 0xff;
            out[i * 4 + 2] = (this.state[i] >>> 8) & 0xff;
            out[i * 4 + 3] = (this.state[i] >>> 0) & 0xff;
        }
        return this;
    };
    // Returns the final hash digest.
    Hash.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    // Internal function for use in HMAC for optimization.
    Hash.prototype._saveState = function (out) {
        for (var i = 0; i < this.state.length; i++) {
            out[i] = this.state[i];
        }
    };
    // Internal function for use in HMAC for optimization.
    Hash.prototype._restoreState = function (from, bytesHashed) {
        for (var i = 0; i < this.state.length; i++) {
            this.state[i] = from[i];
        }
        this.bytesHashed = bytesHashed;
        this.finished = false;
        this.bufferLength = 0;
    };
    return Hash;
}());
exports.Hash = Hash;
// HMAC implements HMAC-SHA256 message authentication algorithm.
var HMAC = /** @class */ (function () {
    function HMAC(key) {
        this.inner = new Hash();
        this.outer = new Hash();
        this.blockSize = this.inner.blockSize;
        this.digestLength = this.inner.digestLength;
        var pad = new Uint8Array(this.blockSize);
        if (key.length > this.blockSize) {
            (new Hash()).update(key).finish(pad).clean();
        }
        else {
            for (var i = 0; i < key.length; i++) {
                pad[i] = key[i];
            }
        }
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36;
        }
        this.inner.update(pad);
        for (var i = 0; i < pad.length; i++) {
            pad[i] ^= 0x36 ^ 0x5c;
        }
        this.outer.update(pad);
        this.istate = new Uint32Array(8);
        this.ostate = new Uint32Array(8);
        this.inner._saveState(this.istate);
        this.outer._saveState(this.ostate);
        for (var i = 0; i < pad.length; i++) {
            pad[i] = 0;
        }
    }
    // Returns HMAC state to the state initialized with key
    // to make it possible to run HMAC over the other data with the same
    // key without creating a new instance.
    HMAC.prototype.reset = function () {
        this.inner._restoreState(this.istate, this.inner.blockSize);
        this.outer._restoreState(this.ostate, this.outer.blockSize);
        return this;
    };
    // Cleans HMAC state.
    HMAC.prototype.clean = function () {
        for (var i = 0; i < this.istate.length; i++) {
            this.ostate[i] = this.istate[i] = 0;
        }
        this.inner.clean();
        this.outer.clean();
    };
    // Updates state with provided data.
    HMAC.prototype.update = function (data) {
        this.inner.update(data);
        return this;
    };
    // Finalizes HMAC and puts the result in out.
    HMAC.prototype.finish = function (out) {
        if (this.outer.finished) {
            this.outer.finish(out);
        }
        else {
            this.inner.finish(out);
            this.outer.update(out, this.digestLength).finish(out);
        }
        return this;
    };
    // Returns message authentication code.
    HMAC.prototype.digest = function () {
        var out = new Uint8Array(this.digestLength);
        this.finish(out);
        return out;
    };
    return HMAC;
}());
exports.HMAC = HMAC;
// Returns SHA256 hash of data.
function hash(data) {
    var h = (new Hash()).update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hash = hash;
// Function hash is both available as module.hash and as default export.
exports["default"] = hash;
// Returns HMAC-SHA256 of data under the key.
function hmac(key, data) {
    var h = (new HMAC(key)).update(data);
    var digest = h.digest();
    h.clean();
    return digest;
}
exports.hmac = hmac;
// Fills hkdf buffer like this:
// T(1) = HMAC-Hash(PRK, T(0) | info | 0x01)
function fillBuffer(buffer, hmac, info, counter) {
    // Counter is a byte value: check if it overflowed.
    var num = counter[0];
    if (num === 0) {
        throw new Error("hkdf: cannot expand more");
    }
    // Prepare HMAC instance for new data with old key.
    hmac.reset();
    // Hash in previous output if it was generated
    // (i.e. counter is greater than 1).
    if (num > 1) {
        hmac.update(buffer);
    }
    // Hash in info if it exists.
    if (info) {
        hmac.update(info);
    }
    // Hash in the counter.
    hmac.update(counter);
    // Output result to buffer and clean HMAC instance.
    hmac.finish(buffer);
    // Increment counter inside typed array, this works properly.
    counter[0]++;
}
var hkdfSalt = new Uint8Array(exports.digestLength); // Filled with zeroes.
function hkdf(key, salt, info, length) {
    if (salt === void 0) { salt = hkdfSalt; }
    if (length === void 0) { length = 32; }
    var counter = new Uint8Array([1]);
    // HKDF-Extract uses salt as HMAC key, and key as data.
    var okm = hmac(salt, key);
    // Initialize HMAC for expanding with extracted key.
    // Ensure no collisions with `hmac` function.
    var hmac_ = new HMAC(okm);
    // Allocate buffer.
    var buffer = new Uint8Array(hmac_.digestLength);
    var bufpos = buffer.length;
    var out = new Uint8Array(length);
    for (var i = 0; i < length; i++) {
        if (bufpos === buffer.length) {
            fillBuffer(buffer, hmac_, info, counter);
            bufpos = 0;
        }
        out[i] = buffer[bufpos++];
    }
    hmac_.clean();
    buffer.fill(0);
    counter.fill(0);
    return out;
}
exports.hkdf = hkdf;
// Derives a key from password and salt using PBKDF2-HMAC-SHA256
// with the given number of iterations.
//
// The number of bytes returned is equal to dkLen.
//
// (For better security, avoid dkLen greater than hash length - 32 bytes).
function pbkdf2(password, salt, iterations, dkLen) {
    var prf = new HMAC(password);
    var len = prf.digestLength;
    var ctr = new Uint8Array(4);
    var t = new Uint8Array(len);
    var u = new Uint8Array(len);
    var dk = new Uint8Array(dkLen);
    for (var i = 0; i * len < dkLen; i++) {
        var c = i + 1;
        ctr[0] = (c >>> 24) & 0xff;
        ctr[1] = (c >>> 16) & 0xff;
        ctr[2] = (c >>> 8) & 0xff;
        ctr[3] = (c >>> 0) & 0xff;
        prf.reset();
        prf.update(salt);
        prf.update(ctr);
        prf.finish(u);
        for (var j = 0; j < len; j++) {
            t[j] = u[j];
        }
        for (var j = 2; j <= iterations; j++) {
            prf.reset();
            prf.update(u).finish(u);
            for (var k = 0; k < len; k++) {
                t[k] ^= u[k];
            }
        }
        for (var j = 0; j < len && i * len + j < dkLen; j++) {
            dk[i * len + j] = t[j];
        }
    }
    for (var i = 0; i < len; i++) {
        t[i] = u[i] = 0;
    }
    for (var i = 0; i < 4; i++) {
        ctr[i] = 0;
    }
    prf.clean();
    return dk;
}
exports.pbkdf2 = pbkdf2;
});


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/immutable/dist/immutable.js":
/*!**************************************************!*\
  !*** ./node_modules/immutable/dist/immutable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, function () { 'use strict';var SLICE$0 = Array.prototype.slice;

  function createClass(ctor, superClass) {
    if (superClass) {
      ctor.prototype = Object.create(superClass.prototype);
    }
    ctor.prototype.constructor = ctor;
  }

  function Iterable(value) {
      return isIterable(value) ? value : Seq(value);
    }


  createClass(KeyedIterable, Iterable);
    function KeyedIterable(value) {
      return isKeyed(value) ? value : KeyedSeq(value);
    }


  createClass(IndexedIterable, Iterable);
    function IndexedIterable(value) {
      return isIndexed(value) ? value : IndexedSeq(value);
    }


  createClass(SetIterable, Iterable);
    function SetIterable(value) {
      return isIterable(value) && !isAssociative(value) ? value : SetSeq(value);
    }



  function isIterable(maybeIterable) {
    return !!(maybeIterable && maybeIterable[IS_ITERABLE_SENTINEL]);
  }

  function isKeyed(maybeKeyed) {
    return !!(maybeKeyed && maybeKeyed[IS_KEYED_SENTINEL]);
  }

  function isIndexed(maybeIndexed) {
    return !!(maybeIndexed && maybeIndexed[IS_INDEXED_SENTINEL]);
  }

  function isAssociative(maybeAssociative) {
    return isKeyed(maybeAssociative) || isIndexed(maybeAssociative);
  }

  function isOrdered(maybeOrdered) {
    return !!(maybeOrdered && maybeOrdered[IS_ORDERED_SENTINEL]);
  }

  Iterable.isIterable = isIterable;
  Iterable.isKeyed = isKeyed;
  Iterable.isIndexed = isIndexed;
  Iterable.isAssociative = isAssociative;
  Iterable.isOrdered = isOrdered;

  Iterable.Keyed = KeyedIterable;
  Iterable.Indexed = IndexedIterable;
  Iterable.Set = SetIterable;


  var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  // Used for setting prototype methods that IE8 chokes on.
  var DELETE = 'delete';

  // Constants describing the size of trie nodes.
  var SHIFT = 5; // Resulted in best performance after ______?
  var SIZE = 1 << SHIFT;
  var MASK = SIZE - 1;

  // A consistent shared value representing "not set" which equals nothing other
  // than itself, and nothing that could be provided externally.
  var NOT_SET = {};

  // Boolean references, Rough equivalent of `bool &`.
  var CHANGE_LENGTH = { value: false };
  var DID_ALTER = { value: false };

  function MakeRef(ref) {
    ref.value = false;
    return ref;
  }

  function SetRef(ref) {
    ref && (ref.value = true);
  }

  // A function which returns a value representing an "owner" for transient writes
  // to tries. The return value will only ever equal itself, and will not equal
  // the return of any subsequent call of this function.
  function OwnerID() {}

  // http://jsperf.com/copy-array-inline
  function arrCopy(arr, offset) {
    offset = offset || 0;
    var len = Math.max(0, arr.length - offset);
    var newArr = new Array(len);
    for (var ii = 0; ii < len; ii++) {
      newArr[ii] = arr[ii + offset];
    }
    return newArr;
  }

  function ensureSize(iter) {
    if (iter.size === undefined) {
      iter.size = iter.__iterate(returnTrue);
    }
    return iter.size;
  }

  function wrapIndex(iter, index) {
    // This implements "is array index" which the ECMAString spec defines as:
    //
    //     A String property name P is an array index if and only if
    //     ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal
    //     to 2^32−1.
    //
    // http://www.ecma-international.org/ecma-262/6.0/#sec-array-exotic-objects
    if (typeof index !== 'number') {
      var uint32Index = index >>> 0; // N >>> 0 is shorthand for ToUint32
      if ('' + uint32Index !== index || uint32Index === 4294967295) {
        return NaN;
      }
      index = uint32Index;
    }
    return index < 0 ? ensureSize(iter) + index : index;
  }

  function returnTrue() {
    return true;
  }

  function wholeSlice(begin, end, size) {
    return (begin === 0 || (size !== undefined && begin <= -size)) &&
      (end === undefined || (size !== undefined && end >= size));
  }

  function resolveBegin(begin, size) {
    return resolveIndex(begin, size, 0);
  }

  function resolveEnd(end, size) {
    return resolveIndex(end, size, size);
  }

  function resolveIndex(index, size, defaultIndex) {
    return index === undefined ?
      defaultIndex :
      index < 0 ?
        Math.max(0, size + index) :
        size === undefined ?
          index :
          Math.min(size, index);
  }

  /* global Symbol */

  var ITERATE_KEYS = 0;
  var ITERATE_VALUES = 1;
  var ITERATE_ENTRIES = 2;

  var REAL_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator';

  var ITERATOR_SYMBOL = REAL_ITERATOR_SYMBOL || FAUX_ITERATOR_SYMBOL;


  function Iterator(next) {
      this.next = next;
    }

    Iterator.prototype.toString = function() {
      return '[Iterator]';
    };


  Iterator.KEYS = ITERATE_KEYS;
  Iterator.VALUES = ITERATE_VALUES;
  Iterator.ENTRIES = ITERATE_ENTRIES;

  Iterator.prototype.inspect =
  Iterator.prototype.toSource = function () { return this.toString(); }
  Iterator.prototype[ITERATOR_SYMBOL] = function () {
    return this;
  };


  function iteratorValue(type, k, v, iteratorResult) {
    var value = type === 0 ? k : type === 1 ? v : [k, v];
    iteratorResult ? (iteratorResult.value = value) : (iteratorResult = {
      value: value, done: false
    });
    return iteratorResult;
  }

  function iteratorDone() {
    return { value: undefined, done: true };
  }

  function hasIterator(maybeIterable) {
    return !!getIteratorFn(maybeIterable);
  }

  function isIterator(maybeIterator) {
    return maybeIterator && typeof maybeIterator.next === 'function';
  }

  function getIterator(iterable) {
    var iteratorFn = getIteratorFn(iterable);
    return iteratorFn && iteratorFn.call(iterable);
  }

  function getIteratorFn(iterable) {
    var iteratorFn = iterable && (
      (REAL_ITERATOR_SYMBOL && iterable[REAL_ITERATOR_SYMBOL]) ||
      iterable[FAUX_ITERATOR_SYMBOL]
    );
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  function isArrayLike(value) {
    return value && typeof value.length === 'number';
  }

  createClass(Seq, Iterable);
    function Seq(value) {
      return value === null || value === undefined ? emptySequence() :
        isIterable(value) ? value.toSeq() : seqFromValue(value);
    }

    Seq.of = function(/*...values*/) {
      return Seq(arguments);
    };

    Seq.prototype.toSeq = function() {
      return this;
    };

    Seq.prototype.toString = function() {
      return this.__toString('Seq {', '}');
    };

    Seq.prototype.cacheResult = function() {
      if (!this._cache && this.__iterateUncached) {
        this._cache = this.entrySeq().toArray();
        this.size = this._cache.length;
      }
      return this;
    };

    // abstract __iterateUncached(fn, reverse)

    Seq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, true);
    };

    // abstract __iteratorUncached(type, reverse)

    Seq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, true);
    };



  createClass(KeyedSeq, Seq);
    function KeyedSeq(value) {
      return value === null || value === undefined ?
        emptySequence().toKeyedSeq() :
        isIterable(value) ?
          (isKeyed(value) ? value.toSeq() : value.fromEntrySeq()) :
          keyedSeqFromValue(value);
    }

    KeyedSeq.prototype.toKeyedSeq = function() {
      return this;
    };



  createClass(IndexedSeq, Seq);
    function IndexedSeq(value) {
      return value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value.toIndexedSeq();
    }

    IndexedSeq.of = function(/*...values*/) {
      return IndexedSeq(arguments);
    };

    IndexedSeq.prototype.toIndexedSeq = function() {
      return this;
    };

    IndexedSeq.prototype.toString = function() {
      return this.__toString('Seq [', ']');
    };

    IndexedSeq.prototype.__iterate = function(fn, reverse) {
      return seqIterate(this, fn, reverse, false);
    };

    IndexedSeq.prototype.__iterator = function(type, reverse) {
      return seqIterator(this, type, reverse, false);
    };



  createClass(SetSeq, Seq);
    function SetSeq(value) {
      return (
        value === null || value === undefined ? emptySequence() :
        !isIterable(value) ? indexedSeqFromValue(value) :
        isKeyed(value) ? value.entrySeq() : value
      ).toSetSeq();
    }

    SetSeq.of = function(/*...values*/) {
      return SetSeq(arguments);
    };

    SetSeq.prototype.toSetSeq = function() {
      return this;
    };



  Seq.isSeq = isSeq;
  Seq.Keyed = KeyedSeq;
  Seq.Set = SetSeq;
  Seq.Indexed = IndexedSeq;

  var IS_SEQ_SENTINEL = '@@__IMMUTABLE_SEQ__@@';

  Seq.prototype[IS_SEQ_SENTINEL] = true;



  createClass(ArraySeq, IndexedSeq);
    function ArraySeq(array) {
      this._array = array;
      this.size = array.length;
    }

    ArraySeq.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._array[wrapIndex(this, index)] : notSetValue;
    };

    ArraySeq.prototype.__iterate = function(fn, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(array[reverse ? maxIndex - ii : ii], ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ArraySeq.prototype.__iterator = function(type, reverse) {
      var array = this._array;
      var maxIndex = array.length - 1;
      var ii = 0;
      return new Iterator(function() 
        {return ii > maxIndex ?
          iteratorDone() :
          iteratorValue(type, ii, array[reverse ? maxIndex - ii++ : ii++])}
      );
    };



  createClass(ObjectSeq, KeyedSeq);
    function ObjectSeq(object) {
      var keys = Object.keys(object);
      this._object = object;
      this._keys = keys;
      this.size = keys.length;
    }

    ObjectSeq.prototype.get = function(key, notSetValue) {
      if (notSetValue !== undefined && !this.has(key)) {
        return notSetValue;
      }
      return this._object[key];
    };

    ObjectSeq.prototype.has = function(key) {
      return this._object.hasOwnProperty(key);
    };

    ObjectSeq.prototype.__iterate = function(fn, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var key = keys[reverse ? maxIndex - ii : ii];
        if (fn(object[key], key, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    ObjectSeq.prototype.__iterator = function(type, reverse) {
      var object = this._object;
      var keys = this._keys;
      var maxIndex = keys.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var key = keys[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, key, object[key]);
      });
    };

  ObjectSeq.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(IterableSeq, IndexedSeq);
    function IterableSeq(iterable) {
      this._iterable = iterable;
      this.size = iterable.length || iterable.size;
    }

    IterableSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      var iterations = 0;
      if (isIterator(iterator)) {
        var step;
        while (!(step = iterator.next()).done) {
          if (fn(step.value, iterations++, this) === false) {
            break;
          }
        }
      }
      return iterations;
    };

    IterableSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterable = this._iterable;
      var iterator = getIterator(iterable);
      if (!isIterator(iterator)) {
        return new Iterator(iteratorDone);
      }
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step : iteratorValue(type, iterations++, step.value);
      });
    };



  createClass(IteratorSeq, IndexedSeq);
    function IteratorSeq(iterator) {
      this._iterator = iterator;
      this._iteratorCache = [];
    }

    IteratorSeq.prototype.__iterateUncached = function(fn, reverse) {
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      while (iterations < cache.length) {
        if (fn(cache[iterations], iterations++, this) === false) {
          return iterations;
        }
      }
      var step;
      while (!(step = iterator.next()).done) {
        var val = step.value;
        cache[iterations] = val;
        if (fn(val, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };

    IteratorSeq.prototype.__iteratorUncached = function(type, reverse) {
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = this._iterator;
      var cache = this._iteratorCache;
      var iterations = 0;
      return new Iterator(function()  {
        if (iterations >= cache.length) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          cache[iterations] = step.value;
        }
        return iteratorValue(type, iterations, cache[iterations++]);
      });
    };




  // # pragma Helper functions

  function isSeq(maybeSeq) {
    return !!(maybeSeq && maybeSeq[IS_SEQ_SENTINEL]);
  }

  var EMPTY_SEQ;

  function emptySequence() {
    return EMPTY_SEQ || (EMPTY_SEQ = new ArraySeq([]));
  }

  function keyedSeqFromValue(value) {
    var seq =
      Array.isArray(value) ? new ArraySeq(value).fromEntrySeq() :
      isIterator(value) ? new IteratorSeq(value).fromEntrySeq() :
      hasIterator(value) ? new IterableSeq(value).fromEntrySeq() :
      typeof value === 'object' ? new ObjectSeq(value) :
      undefined;
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of [k, v] entries, '+
        'or keyed object: ' + value
      );
    }
    return seq;
  }

  function indexedSeqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value);
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values: ' + value
      );
    }
    return seq;
  }

  function seqFromValue(value) {
    var seq = maybeIndexedSeqFromValue(value) ||
      (typeof value === 'object' && new ObjectSeq(value));
    if (!seq) {
      throw new TypeError(
        'Expected Array or iterable object of values, or keyed object: ' + value
      );
    }
    return seq;
  }

  function maybeIndexedSeqFromValue(value) {
    return (
      isArrayLike(value) ? new ArraySeq(value) :
      isIterator(value) ? new IteratorSeq(value) :
      hasIterator(value) ? new IterableSeq(value) :
      undefined
    );
  }

  function seqIterate(seq, fn, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      for (var ii = 0; ii <= maxIndex; ii++) {
        var entry = cache[reverse ? maxIndex - ii : ii];
        if (fn(entry[1], useKeys ? entry[0] : ii, seq) === false) {
          return ii + 1;
        }
      }
      return ii;
    }
    return seq.__iterateUncached(fn, reverse);
  }

  function seqIterator(seq, type, reverse, useKeys) {
    var cache = seq._cache;
    if (cache) {
      var maxIndex = cache.length - 1;
      var ii = 0;
      return new Iterator(function()  {
        var entry = cache[reverse ? maxIndex - ii : ii];
        return ii++ > maxIndex ?
          iteratorDone() :
          iteratorValue(type, useKeys ? entry[0] : ii - 1, entry[1]);
      });
    }
    return seq.__iteratorUncached(type, reverse);
  }

  function fromJS(json, converter) {
    return converter ?
      fromJSWith(converter, json, '', {'': json}) :
      fromJSDefault(json);
  }

  function fromJSWith(converter, json, key, parentJSON) {
    if (Array.isArray(json)) {
      return converter.call(parentJSON, key, IndexedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    if (isPlainObj(json)) {
      return converter.call(parentJSON, key, KeyedSeq(json).map(function(v, k)  {return fromJSWith(converter, v, k, json)}));
    }
    return json;
  }

  function fromJSDefault(json) {
    if (Array.isArray(json)) {
      return IndexedSeq(json).map(fromJSDefault).toList();
    }
    if (isPlainObj(json)) {
      return KeyedSeq(json).map(fromJSDefault).toMap();
    }
    return json;
  }

  function isPlainObj(value) {
    return value && (value.constructor === Object || value.constructor === undefined);
  }

  /**
   * An extension of the "same-value" algorithm as [described for use by ES6 Map
   * and Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map#Key_equality)
   *
   * NaN is considered the same as NaN, however -0 and 0 are considered the same
   * value, which is different from the algorithm described by
   * [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is).
   *
   * This is extended further to allow Objects to describe the values they
   * represent, by way of `valueOf` or `equals` (and `hashCode`).
   *
   * Note: because of this extension, the key equality of Immutable.Map and the
   * value equality of Immutable.Set will differ from ES6 Map and Set.
   *
   * ### Defining custom values
   *
   * The easiest way to describe the value an object represents is by implementing
   * `valueOf`. For example, `Date` represents a value by returning a unix
   * timestamp for `valueOf`:
   *
   *     var date1 = new Date(1234567890000); // Fri Feb 13 2009 ...
   *     var date2 = new Date(1234567890000);
   *     date1.valueOf(); // 1234567890000
   *     assert( date1 !== date2 );
   *     assert( Immutable.is( date1, date2 ) );
   *
   * Note: overriding `valueOf` may have other implications if you use this object
   * where JavaScript expects a primitive, such as implicit string coercion.
   *
   * For more complex types, especially collections, implementing `valueOf` may
   * not be performant. An alternative is to implement `equals` and `hashCode`.
   *
   * `equals` takes another object, presumably of similar type, and returns true
   * if the it is equal. Equality is symmetrical, so the same result should be
   * returned if this and the argument are flipped.
   *
   *     assert( a.equals(b) === b.equals(a) );
   *
   * `hashCode` returns a 32bit integer number representing the object which will
   * be used to determine how to store the value object in a Map or Set. You must
   * provide both or neither methods, one must not exist without the other.
   *
   * Also, an important relationship between these methods must be upheld: if two
   * values are equal, they *must* return the same hashCode. If the values are not
   * equal, they might have the same hashCode; this is called a hash collision,
   * and while undesirable for performance reasons, it is acceptable.
   *
   *     if (a.equals(b)) {
   *       assert( a.hashCode() === b.hashCode() );
   *     }
   *
   * All Immutable collections implement `equals` and `hashCode`.
   *
   */
  function is(valueA, valueB) {
    if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
      return true;
    }
    if (!valueA || !valueB) {
      return false;
    }
    if (typeof valueA.valueOf === 'function' &&
        typeof valueB.valueOf === 'function') {
      valueA = valueA.valueOf();
      valueB = valueB.valueOf();
      if (valueA === valueB || (valueA !== valueA && valueB !== valueB)) {
        return true;
      }
      if (!valueA || !valueB) {
        return false;
      }
    }
    if (typeof valueA.equals === 'function' &&
        typeof valueB.equals === 'function' &&
        valueA.equals(valueB)) {
      return true;
    }
    return false;
  }

  function deepEqual(a, b) {
    if (a === b) {
      return true;
    }

    if (
      !isIterable(b) ||
      a.size !== undefined && b.size !== undefined && a.size !== b.size ||
      a.__hash !== undefined && b.__hash !== undefined && a.__hash !== b.__hash ||
      isKeyed(a) !== isKeyed(b) ||
      isIndexed(a) !== isIndexed(b) ||
      isOrdered(a) !== isOrdered(b)
    ) {
      return false;
    }

    if (a.size === 0 && b.size === 0) {
      return true;
    }

    var notAssociative = !isAssociative(a);

    if (isOrdered(a)) {
      var entries = a.entries();
      return b.every(function(v, k)  {
        var entry = entries.next().value;
        return entry && is(entry[1], v) && (notAssociative || is(entry[0], k));
      }) && entries.next().done;
    }

    var flipped = false;

    if (a.size === undefined) {
      if (b.size === undefined) {
        if (typeof a.cacheResult === 'function') {
          a.cacheResult();
        }
      } else {
        flipped = true;
        var _ = a;
        a = b;
        b = _;
      }
    }

    var allEqual = true;
    var bSize = b.__iterate(function(v, k)  {
      if (notAssociative ? !a.has(v) :
          flipped ? !is(v, a.get(k, NOT_SET)) : !is(a.get(k, NOT_SET), v)) {
        allEqual = false;
        return false;
      }
    });

    return allEqual && a.size === bSize;
  }

  createClass(Repeat, IndexedSeq);

    function Repeat(value, times) {
      if (!(this instanceof Repeat)) {
        return new Repeat(value, times);
      }
      this._value = value;
      this.size = times === undefined ? Infinity : Math.max(0, times);
      if (this.size === 0) {
        if (EMPTY_REPEAT) {
          return EMPTY_REPEAT;
        }
        EMPTY_REPEAT = this;
      }
    }

    Repeat.prototype.toString = function() {
      if (this.size === 0) {
        return 'Repeat []';
      }
      return 'Repeat [ ' + this._value + ' ' + this.size + ' times ]';
    };

    Repeat.prototype.get = function(index, notSetValue) {
      return this.has(index) ? this._value : notSetValue;
    };

    Repeat.prototype.includes = function(searchValue) {
      return is(this._value, searchValue);
    };

    Repeat.prototype.slice = function(begin, end) {
      var size = this.size;
      return wholeSlice(begin, end, size) ? this :
        new Repeat(this._value, resolveEnd(end, size) - resolveBegin(begin, size));
    };

    Repeat.prototype.reverse = function() {
      return this;
    };

    Repeat.prototype.indexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return 0;
      }
      return -1;
    };

    Repeat.prototype.lastIndexOf = function(searchValue) {
      if (is(this._value, searchValue)) {
        return this.size;
      }
      return -1;
    };

    Repeat.prototype.__iterate = function(fn, reverse) {
      for (var ii = 0; ii < this.size; ii++) {
        if (fn(this._value, ii, this) === false) {
          return ii + 1;
        }
      }
      return ii;
    };

    Repeat.prototype.__iterator = function(type, reverse) {var this$0 = this;
      var ii = 0;
      return new Iterator(function() 
        {return ii < this$0.size ? iteratorValue(type, ii++, this$0._value) : iteratorDone()}
      );
    };

    Repeat.prototype.equals = function(other) {
      return other instanceof Repeat ?
        is(this._value, other._value) :
        deepEqual(other);
    };


  var EMPTY_REPEAT;

  function invariant(condition, error) {
    if (!condition) throw new Error(error);
  }

  createClass(Range, IndexedSeq);

    function Range(start, end, step) {
      if (!(this instanceof Range)) {
        return new Range(start, end, step);
      }
      invariant(step !== 0, 'Cannot step a Range by 0');
      start = start || 0;
      if (end === undefined) {
        end = Infinity;
      }
      step = step === undefined ? 1 : Math.abs(step);
      if (end < start) {
        step = -step;
      }
      this._start = start;
      this._end = end;
      this._step = step;
      this.size = Math.max(0, Math.ceil((end - start) / step - 1) + 1);
      if (this.size === 0) {
        if (EMPTY_RANGE) {
          return EMPTY_RANGE;
        }
        EMPTY_RANGE = this;
      }
    }

    Range.prototype.toString = function() {
      if (this.size === 0) {
        return 'Range []';
      }
      return 'Range [ ' +
        this._start + '...' + this._end +
        (this._step !== 1 ? ' by ' + this._step : '') +
      ' ]';
    };

    Range.prototype.get = function(index, notSetValue) {
      return this.has(index) ?
        this._start + wrapIndex(this, index) * this._step :
        notSetValue;
    };

    Range.prototype.includes = function(searchValue) {
      var possibleIndex = (searchValue - this._start) / this._step;
      return possibleIndex >= 0 &&
        possibleIndex < this.size &&
        possibleIndex === Math.floor(possibleIndex);
    };

    Range.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      begin = resolveBegin(begin, this.size);
      end = resolveEnd(end, this.size);
      if (end <= begin) {
        return new Range(0, 0);
      }
      return new Range(this.get(begin, this._end), this.get(end, this._end), this._step);
    };

    Range.prototype.indexOf = function(searchValue) {
      var offsetValue = searchValue - this._start;
      if (offsetValue % this._step === 0) {
        var index = offsetValue / this._step;
        if (index >= 0 && index < this.size) {
          return index
        }
      }
      return -1;
    };

    Range.prototype.lastIndexOf = function(searchValue) {
      return this.indexOf(searchValue);
    };

    Range.prototype.__iterate = function(fn, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      for (var ii = 0; ii <= maxIndex; ii++) {
        if (fn(value, ii, this) === false) {
          return ii + 1;
        }
        value += reverse ? -step : step;
      }
      return ii;
    };

    Range.prototype.__iterator = function(type, reverse) {
      var maxIndex = this.size - 1;
      var step = this._step;
      var value = reverse ? this._start + maxIndex * step : this._start;
      var ii = 0;
      return new Iterator(function()  {
        var v = value;
        value += reverse ? -step : step;
        return ii > maxIndex ? iteratorDone() : iteratorValue(type, ii++, v);
      });
    };

    Range.prototype.equals = function(other) {
      return other instanceof Range ?
        this._start === other._start &&
        this._end === other._end &&
        this._step === other._step :
        deepEqual(this, other);
    };


  var EMPTY_RANGE;

  createClass(Collection, Iterable);
    function Collection() {
      throw TypeError('Abstract');
    }


  createClass(KeyedCollection, Collection);function KeyedCollection() {}

  createClass(IndexedCollection, Collection);function IndexedCollection() {}

  createClass(SetCollection, Collection);function SetCollection() {}


  Collection.Keyed = KeyedCollection;
  Collection.Indexed = IndexedCollection;
  Collection.Set = SetCollection;

  var imul =
    typeof Math.imul === 'function' && Math.imul(0xffffffff, 2) === -2 ?
    Math.imul :
    function imul(a, b) {
      a = a | 0; // int
      b = b | 0; // int
      var c = a & 0xffff;
      var d = b & 0xffff;
      // Shift by 0 fixes the sign on the high part.
      return (c * d) + ((((a >>> 16) * d + c * (b >>> 16)) << 16) >>> 0) | 0; // int
    };

  // v8 has an optimization for storing 31-bit signed numbers.
  // Values which have either 00 or 11 as the high order bits qualify.
  // This function drops the highest order bit in a signed number, maintaining
  // the sign bit.
  function smi(i32) {
    return ((i32 >>> 1) & 0x40000000) | (i32 & 0xBFFFFFFF);
  }

  function hash(o) {
    if (o === false || o === null || o === undefined) {
      return 0;
    }
    if (typeof o.valueOf === 'function') {
      o = o.valueOf();
      if (o === false || o === null || o === undefined) {
        return 0;
      }
    }
    if (o === true) {
      return 1;
    }
    var type = typeof o;
    if (type === 'number') {
      if (o !== o || o === Infinity) {
        return 0;
      }
      var h = o | 0;
      if (h !== o) {
        h ^= o * 0xFFFFFFFF;
      }
      while (o > 0xFFFFFFFF) {
        o /= 0xFFFFFFFF;
        h ^= o;
      }
      return smi(h);
    }
    if (type === 'string') {
      return o.length > STRING_HASH_CACHE_MIN_STRLEN ? cachedHashString(o) : hashString(o);
    }
    if (typeof o.hashCode === 'function') {
      return o.hashCode();
    }
    if (type === 'object') {
      return hashJSObj(o);
    }
    if (typeof o.toString === 'function') {
      return hashString(o.toString());
    }
    throw new Error('Value type ' + type + ' cannot be hashed.');
  }

  function cachedHashString(string) {
    var hash = stringHashCache[string];
    if (hash === undefined) {
      hash = hashString(string);
      if (STRING_HASH_CACHE_SIZE === STRING_HASH_CACHE_MAX_SIZE) {
        STRING_HASH_CACHE_SIZE = 0;
        stringHashCache = {};
      }
      STRING_HASH_CACHE_SIZE++;
      stringHashCache[string] = hash;
    }
    return hash;
  }

  // http://jsperf.com/hashing-strings
  function hashString(string) {
    // This is the hash from JVM
    // The hash code for a string is computed as
    // s[0] * 31 ^ (n - 1) + s[1] * 31 ^ (n - 2) + ... + s[n - 1],
    // where s[i] is the ith character of the string and n is the length of
    // the string. We "mod" the result to make it between 0 (inclusive) and 2^31
    // (exclusive) by dropping high bits.
    var hash = 0;
    for (var ii = 0; ii < string.length; ii++) {
      hash = 31 * hash + string.charCodeAt(ii) | 0;
    }
    return smi(hash);
  }

  function hashJSObj(obj) {
    var hash;
    if (usingWeakMap) {
      hash = weakMap.get(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = obj[UID_HASH_KEY];
    if (hash !== undefined) {
      return hash;
    }

    if (!canDefineProperty) {
      hash = obj.propertyIsEnumerable && obj.propertyIsEnumerable[UID_HASH_KEY];
      if (hash !== undefined) {
        return hash;
      }

      hash = getIENodeHash(obj);
      if (hash !== undefined) {
        return hash;
      }
    }

    hash = ++objHashUID;
    if (objHashUID & 0x40000000) {
      objHashUID = 0;
    }

    if (usingWeakMap) {
      weakMap.set(obj, hash);
    } else if (isExtensible !== undefined && isExtensible(obj) === false) {
      throw new Error('Non-extensible objects are not allowed as keys.');
    } else if (canDefineProperty) {
      Object.defineProperty(obj, UID_HASH_KEY, {
        'enumerable': false,
        'configurable': false,
        'writable': false,
        'value': hash
      });
    } else if (obj.propertyIsEnumerable !== undefined &&
               obj.propertyIsEnumerable === obj.constructor.prototype.propertyIsEnumerable) {
      // Since we can't define a non-enumerable property on the object
      // we'll hijack one of the less-used non-enumerable properties to
      // save our hash on it. Since this is a function it will not show up in
      // `JSON.stringify` which is what we want.
      obj.propertyIsEnumerable = function() {
        return this.constructor.prototype.propertyIsEnumerable.apply(this, arguments);
      };
      obj.propertyIsEnumerable[UID_HASH_KEY] = hash;
    } else if (obj.nodeType !== undefined) {
      // At this point we couldn't get the IE `uniqueID` to use as a hash
      // and we couldn't use a non-enumerable property to exploit the
      // dontEnum bug so we simply add the `UID_HASH_KEY` on the node
      // itself.
      obj[UID_HASH_KEY] = hash;
    } else {
      throw new Error('Unable to set a non-enumerable property on object.');
    }

    return hash;
  }

  // Get references to ES5 object methods.
  var isExtensible = Object.isExtensible;

  // True if Object.defineProperty works as expected. IE8 fails this test.
  var canDefineProperty = (function() {
    try {
      Object.defineProperty({}, '@', {});
      return true;
    } catch (e) {
      return false;
    }
  }());

  // IE has a `uniqueID` property on DOM nodes. We can construct the hash from it
  // and avoid memory leaks from the IE cloneNode bug.
  function getIENodeHash(node) {
    if (node && node.nodeType > 0) {
      switch (node.nodeType) {
        case 1: // Element
          return node.uniqueID;
        case 9: // Document
          return node.documentElement && node.documentElement.uniqueID;
      }
    }
  }

  // If possible, use a WeakMap.
  var usingWeakMap = typeof WeakMap === 'function';
  var weakMap;
  if (usingWeakMap) {
    weakMap = new WeakMap();
  }

  var objHashUID = 0;

  var UID_HASH_KEY = '__immutablehash__';
  if (typeof Symbol === 'function') {
    UID_HASH_KEY = Symbol(UID_HASH_KEY);
  }

  var STRING_HASH_CACHE_MIN_STRLEN = 16;
  var STRING_HASH_CACHE_MAX_SIZE = 255;
  var STRING_HASH_CACHE_SIZE = 0;
  var stringHashCache = {};

  function assertNotInfinite(size) {
    invariant(
      size !== Infinity,
      'Cannot perform this action with an infinite size.'
    );
  }

  createClass(Map, KeyedCollection);

    // @pragma Construction

    function Map(value) {
      return value === null || value === undefined ? emptyMap() :
        isMap(value) && !isOrdered(value) ? value :
        emptyMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    Map.of = function() {var keyValues = SLICE$0.call(arguments, 0);
      return emptyMap().withMutations(function(map ) {
        for (var i = 0; i < keyValues.length; i += 2) {
          if (i + 1 >= keyValues.length) {
            throw new Error('Missing value for key: ' + keyValues[i]);
          }
          map.set(keyValues[i], keyValues[i + 1]);
        }
      });
    };

    Map.prototype.toString = function() {
      return this.__toString('Map {', '}');
    };

    // @pragma Access

    Map.prototype.get = function(k, notSetValue) {
      return this._root ?
        this._root.get(0, undefined, k, notSetValue) :
        notSetValue;
    };

    // @pragma Modification

    Map.prototype.set = function(k, v) {
      return updateMap(this, k, v);
    };

    Map.prototype.setIn = function(keyPath, v) {
      return this.updateIn(keyPath, NOT_SET, function()  {return v});
    };

    Map.prototype.remove = function(k) {
      return updateMap(this, k, NOT_SET);
    };

    Map.prototype.deleteIn = function(keyPath) {
      return this.updateIn(keyPath, function()  {return NOT_SET});
    };

    Map.prototype.update = function(k, notSetValue, updater) {
      return arguments.length === 1 ?
        k(this) :
        this.updateIn([k], notSetValue, updater);
    };

    Map.prototype.updateIn = function(keyPath, notSetValue, updater) {
      if (!updater) {
        updater = notSetValue;
        notSetValue = undefined;
      }
      var updatedValue = updateInDeepMap(
        this,
        forceIterator(keyPath),
        notSetValue,
        updater
      );
      return updatedValue === NOT_SET ? undefined : updatedValue;
    };

    Map.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._root = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyMap();
    };

    // @pragma Composition

    Map.prototype.merge = function(/*...iters*/) {
      return mergeIntoMapWith(this, undefined, arguments);
    };

    Map.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, merger, iters);
    };

    Map.prototype.mergeIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.merge === 'function' ?
          m.merge.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoMapWith(this, deepMerger, arguments);
    };

    Map.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoMapWith(this, deepMergerWith(merger), iters);
    };

    Map.prototype.mergeDeepIn = function(keyPath) {var iters = SLICE$0.call(arguments, 1);
      return this.updateIn(
        keyPath,
        emptyMap(),
        function(m ) {return typeof m.mergeDeep === 'function' ?
          m.mergeDeep.apply(m, iters) :
          iters[iters.length - 1]}
      );
    };

    Map.prototype.sort = function(comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator));
    };

    Map.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedMap(sortFactory(this, comparator, mapper));
    };

    // @pragma Mutability

    Map.prototype.withMutations = function(fn) {
      var mutable = this.asMutable();
      fn(mutable);
      return mutable.wasAltered() ? mutable.__ensureOwner(this.__ownerID) : this;
    };

    Map.prototype.asMutable = function() {
      return this.__ownerID ? this : this.__ensureOwner(new OwnerID());
    };

    Map.prototype.asImmutable = function() {
      return this.__ensureOwner();
    };

    Map.prototype.wasAltered = function() {
      return this.__altered;
    };

    Map.prototype.__iterator = function(type, reverse) {
      return new MapIterator(this, type, reverse);
    };

    Map.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      this._root && this._root.iterate(function(entry ) {
        iterations++;
        return fn(entry[1], entry[0], this$0);
      }, reverse);
      return iterations;
    };

    Map.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeMap(this.size, this._root, ownerID, this.__hash);
    };


  function isMap(maybeMap) {
    return !!(maybeMap && maybeMap[IS_MAP_SENTINEL]);
  }

  Map.isMap = isMap;

  var IS_MAP_SENTINEL = '@@__IMMUTABLE_MAP__@@';

  var MapPrototype = Map.prototype;
  MapPrototype[IS_MAP_SENTINEL] = true;
  MapPrototype[DELETE] = MapPrototype.remove;
  MapPrototype.removeIn = MapPrototype.deleteIn;


  // #pragma Trie Nodes



    function ArrayMapNode(ownerID, entries) {
      this.ownerID = ownerID;
      this.entries = entries;
    }

    ArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    ArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && entries.length === 1) {
        return; // undefined
      }

      if (!exists && !removed && entries.length >= MAX_ARRAY_MAP_SIZE) {
        return createNodes(ownerID, entries, key, value);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new ArrayMapNode(ownerID, newEntries);
    };




    function BitmapIndexedNode(ownerID, bitmap, nodes) {
      this.ownerID = ownerID;
      this.bitmap = bitmap;
      this.nodes = nodes;
    }

    BitmapIndexedNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var bit = (1 << ((shift === 0 ? keyHash : keyHash >>> shift) & MASK));
      var bitmap = this.bitmap;
      return (bitmap & bit) === 0 ? notSetValue :
        this.nodes[popCount(bitmap & (bit - 1))].get(shift + SHIFT, keyHash, key, notSetValue);
    };

    BitmapIndexedNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var keyHashFrag = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var bit = 1 << keyHashFrag;
      var bitmap = this.bitmap;
      var exists = (bitmap & bit) !== 0;

      if (!exists && value === NOT_SET) {
        return this;
      }

      var idx = popCount(bitmap & (bit - 1));
      var nodes = this.nodes;
      var node = exists ? nodes[idx] : undefined;
      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);

      if (newNode === node) {
        return this;
      }

      if (!exists && newNode && nodes.length >= MAX_BITMAP_INDEXED_SIZE) {
        return expandNodes(ownerID, nodes, bitmap, keyHashFrag, newNode);
      }

      if (exists && !newNode && nodes.length === 2 && isLeafNode(nodes[idx ^ 1])) {
        return nodes[idx ^ 1];
      }

      if (exists && newNode && nodes.length === 1 && isLeafNode(newNode)) {
        return newNode;
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newBitmap = exists ? newNode ? bitmap : bitmap ^ bit : bitmap | bit;
      var newNodes = exists ? newNode ?
        setIn(nodes, idx, newNode, isEditable) :
        spliceOut(nodes, idx, isEditable) :
        spliceIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.bitmap = newBitmap;
        this.nodes = newNodes;
        return this;
      }

      return new BitmapIndexedNode(ownerID, newBitmap, newNodes);
    };




    function HashArrayMapNode(ownerID, count, nodes) {
      this.ownerID = ownerID;
      this.count = count;
      this.nodes = nodes;
    }

    HashArrayMapNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var node = this.nodes[idx];
      return node ? node.get(shift + SHIFT, keyHash, key, notSetValue) : notSetValue;
    };

    HashArrayMapNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }
      var idx = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;
      var removed = value === NOT_SET;
      var nodes = this.nodes;
      var node = nodes[idx];

      if (removed && !node) {
        return this;
      }

      var newNode = updateNode(node, ownerID, shift + SHIFT, keyHash, key, value, didChangeSize, didAlter);
      if (newNode === node) {
        return this;
      }

      var newCount = this.count;
      if (!node) {
        newCount++;
      } else if (!newNode) {
        newCount--;
        if (newCount < MIN_HASH_ARRAY_MAP_SIZE) {
          return packNodes(ownerID, nodes, newCount, idx);
        }
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newNodes = setIn(nodes, idx, newNode, isEditable);

      if (isEditable) {
        this.count = newCount;
        this.nodes = newNodes;
        return this;
      }

      return new HashArrayMapNode(ownerID, newCount, newNodes);
    };




    function HashCollisionNode(ownerID, keyHash, entries) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entries = entries;
    }

    HashCollisionNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      var entries = this.entries;
      for (var ii = 0, len = entries.length; ii < len; ii++) {
        if (is(key, entries[ii][0])) {
          return entries[ii][1];
        }
      }
      return notSetValue;
    };

    HashCollisionNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      if (keyHash === undefined) {
        keyHash = hash(key);
      }

      var removed = value === NOT_SET;

      if (keyHash !== this.keyHash) {
        if (removed) {
          return this;
        }
        SetRef(didAlter);
        SetRef(didChangeSize);
        return mergeIntoNode(this, ownerID, shift, keyHash, [key, value]);
      }

      var entries = this.entries;
      var idx = 0;
      for (var len = entries.length; idx < len; idx++) {
        if (is(key, entries[idx][0])) {
          break;
        }
      }
      var exists = idx < len;

      if (exists ? entries[idx][1] === value : removed) {
        return this;
      }

      SetRef(didAlter);
      (removed || !exists) && SetRef(didChangeSize);

      if (removed && len === 2) {
        return new ValueNode(ownerID, this.keyHash, entries[idx ^ 1]);
      }

      var isEditable = ownerID && ownerID === this.ownerID;
      var newEntries = isEditable ? entries : arrCopy(entries);

      if (exists) {
        if (removed) {
          idx === len - 1 ? newEntries.pop() : (newEntries[idx] = newEntries.pop());
        } else {
          newEntries[idx] = [key, value];
        }
      } else {
        newEntries.push([key, value]);
      }

      if (isEditable) {
        this.entries = newEntries;
        return this;
      }

      return new HashCollisionNode(ownerID, this.keyHash, newEntries);
    };




    function ValueNode(ownerID, keyHash, entry) {
      this.ownerID = ownerID;
      this.keyHash = keyHash;
      this.entry = entry;
    }

    ValueNode.prototype.get = function(shift, keyHash, key, notSetValue) {
      return is(key, this.entry[0]) ? this.entry[1] : notSetValue;
    };

    ValueNode.prototype.update = function(ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
      var removed = value === NOT_SET;
      var keyMatch = is(key, this.entry[0]);
      if (keyMatch ? value === this.entry[1] : removed) {
        return this;
      }

      SetRef(didAlter);

      if (removed) {
        SetRef(didChangeSize);
        return; // undefined
      }

      if (keyMatch) {
        if (ownerID && ownerID === this.ownerID) {
          this.entry[1] = value;
          return this;
        }
        return new ValueNode(ownerID, this.keyHash, [key, value]);
      }

      SetRef(didChangeSize);
      return mergeIntoNode(this, ownerID, shift, hash(key), [key, value]);
    };



  // #pragma Iterators

  ArrayMapNode.prototype.iterate =
  HashCollisionNode.prototype.iterate = function (fn, reverse) {
    var entries = this.entries;
    for (var ii = 0, maxIndex = entries.length - 1; ii <= maxIndex; ii++) {
      if (fn(entries[reverse ? maxIndex - ii : ii]) === false) {
        return false;
      }
    }
  }

  BitmapIndexedNode.prototype.iterate =
  HashArrayMapNode.prototype.iterate = function (fn, reverse) {
    var nodes = this.nodes;
    for (var ii = 0, maxIndex = nodes.length - 1; ii <= maxIndex; ii++) {
      var node = nodes[reverse ? maxIndex - ii : ii];
      if (node && node.iterate(fn, reverse) === false) {
        return false;
      }
    }
  }

  ValueNode.prototype.iterate = function (fn, reverse) {
    return fn(this.entry);
  }

  createClass(MapIterator, Iterator);

    function MapIterator(map, type, reverse) {
      this._type = type;
      this._reverse = reverse;
      this._stack = map._root && mapIteratorFrame(map._root);
    }

    MapIterator.prototype.next = function() {
      var type = this._type;
      var stack = this._stack;
      while (stack) {
        var node = stack.node;
        var index = stack.index++;
        var maxIndex;
        if (node.entry) {
          if (index === 0) {
            return mapIteratorValue(type, node.entry);
          }
        } else if (node.entries) {
          maxIndex = node.entries.length - 1;
          if (index <= maxIndex) {
            return mapIteratorValue(type, node.entries[this._reverse ? maxIndex - index : index]);
          }
        } else {
          maxIndex = node.nodes.length - 1;
          if (index <= maxIndex) {
            var subNode = node.nodes[this._reverse ? maxIndex - index : index];
            if (subNode) {
              if (subNode.entry) {
                return mapIteratorValue(type, subNode.entry);
              }
              stack = this._stack = mapIteratorFrame(subNode, stack);
            }
            continue;
          }
        }
        stack = this._stack = this._stack.__prev;
      }
      return iteratorDone();
    };


  function mapIteratorValue(type, entry) {
    return iteratorValue(type, entry[0], entry[1]);
  }

  function mapIteratorFrame(node, prev) {
    return {
      node: node,
      index: 0,
      __prev: prev
    };
  }

  function makeMap(size, root, ownerID, hash) {
    var map = Object.create(MapPrototype);
    map.size = size;
    map._root = root;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_MAP;
  function emptyMap() {
    return EMPTY_MAP || (EMPTY_MAP = makeMap(0));
  }

  function updateMap(map, k, v) {
    var newRoot;
    var newSize;
    if (!map._root) {
      if (v === NOT_SET) {
        return map;
      }
      newSize = 1;
      newRoot = new ArrayMapNode(map.__ownerID, [[k, v]]);
    } else {
      var didChangeSize = MakeRef(CHANGE_LENGTH);
      var didAlter = MakeRef(DID_ALTER);
      newRoot = updateNode(map._root, map.__ownerID, 0, undefined, k, v, didChangeSize, didAlter);
      if (!didAlter.value) {
        return map;
      }
      newSize = map.size + (didChangeSize.value ? v === NOT_SET ? -1 : 1 : 0);
    }
    if (map.__ownerID) {
      map.size = newSize;
      map._root = newRoot;
      map.__hash = undefined;
      map.__altered = true;
      return map;
    }
    return newRoot ? makeMap(newSize, newRoot) : emptyMap();
  }

  function updateNode(node, ownerID, shift, keyHash, key, value, didChangeSize, didAlter) {
    if (!node) {
      if (value === NOT_SET) {
        return node;
      }
      SetRef(didAlter);
      SetRef(didChangeSize);
      return new ValueNode(ownerID, keyHash, [key, value]);
    }
    return node.update(ownerID, shift, keyHash, key, value, didChangeSize, didAlter);
  }

  function isLeafNode(node) {
    return node.constructor === ValueNode || node.constructor === HashCollisionNode;
  }

  function mergeIntoNode(node, ownerID, shift, keyHash, entry) {
    if (node.keyHash === keyHash) {
      return new HashCollisionNode(ownerID, keyHash, [node.entry, entry]);
    }

    var idx1 = (shift === 0 ? node.keyHash : node.keyHash >>> shift) & MASK;
    var idx2 = (shift === 0 ? keyHash : keyHash >>> shift) & MASK;

    var newNode;
    var nodes = idx1 === idx2 ?
      [mergeIntoNode(node, ownerID, shift + SHIFT, keyHash, entry)] :
      ((newNode = new ValueNode(ownerID, keyHash, entry)), idx1 < idx2 ? [node, newNode] : [newNode, node]);

    return new BitmapIndexedNode(ownerID, (1 << idx1) | (1 << idx2), nodes);
  }

  function createNodes(ownerID, entries, key, value) {
    if (!ownerID) {
      ownerID = new OwnerID();
    }
    var node = new ValueNode(ownerID, hash(key), [key, value]);
    for (var ii = 0; ii < entries.length; ii++) {
      var entry = entries[ii];
      node = node.update(ownerID, 0, undefined, entry[0], entry[1]);
    }
    return node;
  }

  function packNodes(ownerID, nodes, count, excluding) {
    var bitmap = 0;
    var packedII = 0;
    var packedNodes = new Array(count);
    for (var ii = 0, bit = 1, len = nodes.length; ii < len; ii++, bit <<= 1) {
      var node = nodes[ii];
      if (node !== undefined && ii !== excluding) {
        bitmap |= bit;
        packedNodes[packedII++] = node;
      }
    }
    return new BitmapIndexedNode(ownerID, bitmap, packedNodes);
  }

  function expandNodes(ownerID, nodes, bitmap, including, node) {
    var count = 0;
    var expandedNodes = new Array(SIZE);
    for (var ii = 0; bitmap !== 0; ii++, bitmap >>>= 1) {
      expandedNodes[ii] = bitmap & 1 ? nodes[count++] : undefined;
    }
    expandedNodes[including] = node;
    return new HashArrayMapNode(ownerID, count + 1, expandedNodes);
  }

  function mergeIntoMapWith(map, merger, iterables) {
    var iters = [];
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = KeyedIterable(value);
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    return mergeIntoCollectionWith(map, merger, iters);
  }

  function deepMerger(existing, value, key) {
    return existing && existing.mergeDeep && isIterable(value) ?
      existing.mergeDeep(value) :
      is(existing, value) ? existing : value;
  }

  function deepMergerWith(merger) {
    return function(existing, value, key)  {
      if (existing && existing.mergeDeepWith && isIterable(value)) {
        return existing.mergeDeepWith(merger, value);
      }
      var nextValue = merger(existing, value, key);
      return is(existing, nextValue) ? existing : nextValue;
    };
  }

  function mergeIntoCollectionWith(collection, merger, iters) {
    iters = iters.filter(function(x ) {return x.size !== 0});
    if (iters.length === 0) {
      return collection;
    }
    if (collection.size === 0 && !collection.__ownerID && iters.length === 1) {
      return collection.constructor(iters[0]);
    }
    return collection.withMutations(function(collection ) {
      var mergeIntoMap = merger ?
        function(value, key)  {
          collection.update(key, NOT_SET, function(existing )
            {return existing === NOT_SET ? value : merger(existing, value, key)}
          );
        } :
        function(value, key)  {
          collection.set(key, value);
        }
      for (var ii = 0; ii < iters.length; ii++) {
        iters[ii].forEach(mergeIntoMap);
      }
    });
  }

  function updateInDeepMap(existing, keyPathIter, notSetValue, updater) {
    var isNotSet = existing === NOT_SET;
    var step = keyPathIter.next();
    if (step.done) {
      var existingValue = isNotSet ? notSetValue : existing;
      var newValue = updater(existingValue);
      return newValue === existingValue ? existing : newValue;
    }
    invariant(
      isNotSet || (existing && existing.set),
      'invalid keyPath'
    );
    var key = step.value;
    var nextExisting = isNotSet ? NOT_SET : existing.get(key, NOT_SET);
    var nextUpdated = updateInDeepMap(
      nextExisting,
      keyPathIter,
      notSetValue,
      updater
    );
    return nextUpdated === nextExisting ? existing :
      nextUpdated === NOT_SET ? existing.remove(key) :
      (isNotSet ? emptyMap() : existing).set(key, nextUpdated);
  }

  function popCount(x) {
    x = x - ((x >> 1) & 0x55555555);
    x = (x & 0x33333333) + ((x >> 2) & 0x33333333);
    x = (x + (x >> 4)) & 0x0f0f0f0f;
    x = x + (x >> 8);
    x = x + (x >> 16);
    return x & 0x7f;
  }

  function setIn(array, idx, val, canEdit) {
    var newArray = canEdit ? array : arrCopy(array);
    newArray[idx] = val;
    return newArray;
  }

  function spliceIn(array, idx, val, canEdit) {
    var newLen = array.length + 1;
    if (canEdit && idx + 1 === newLen) {
      array[idx] = val;
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        newArray[ii] = val;
        after = -1;
      } else {
        newArray[ii] = array[ii + after];
      }
    }
    return newArray;
  }

  function spliceOut(array, idx, canEdit) {
    var newLen = array.length - 1;
    if (canEdit && idx === newLen) {
      array.pop();
      return array;
    }
    var newArray = new Array(newLen);
    var after = 0;
    for (var ii = 0; ii < newLen; ii++) {
      if (ii === idx) {
        after = 1;
      }
      newArray[ii] = array[ii + after];
    }
    return newArray;
  }

  var MAX_ARRAY_MAP_SIZE = SIZE / 4;
  var MAX_BITMAP_INDEXED_SIZE = SIZE / 2;
  var MIN_HASH_ARRAY_MAP_SIZE = SIZE / 4;

  createClass(List, IndexedCollection);

    // @pragma Construction

    function List(value) {
      var empty = emptyList();
      if (value === null || value === undefined) {
        return empty;
      }
      if (isList(value)) {
        return value;
      }
      var iter = IndexedIterable(value);
      var size = iter.size;
      if (size === 0) {
        return empty;
      }
      assertNotInfinite(size);
      if (size > 0 && size < SIZE) {
        return makeList(0, size, SHIFT, null, new VNode(iter.toArray()));
      }
      return empty.withMutations(function(list ) {
        list.setSize(size);
        iter.forEach(function(v, i)  {return list.set(i, v)});
      });
    }

    List.of = function(/*...values*/) {
      return this(arguments);
    };

    List.prototype.toString = function() {
      return this.__toString('List [', ']');
    };

    // @pragma Access

    List.prototype.get = function(index, notSetValue) {
      index = wrapIndex(this, index);
      if (index >= 0 && index < this.size) {
        index += this._origin;
        var node = listNodeFor(this, index);
        return node && node.array[index & MASK];
      }
      return notSetValue;
    };

    // @pragma Modification

    List.prototype.set = function(index, value) {
      return updateList(this, index, value);
    };

    List.prototype.remove = function(index) {
      return !this.has(index) ? this :
        index === 0 ? this.shift() :
        index === this.size - 1 ? this.pop() :
        this.splice(index, 1);
    };

    List.prototype.insert = function(index, value) {
      return this.splice(index, 0, value);
    };

    List.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = this._origin = this._capacity = 0;
        this._level = SHIFT;
        this._root = this._tail = null;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyList();
    };

    List.prototype.push = function(/*...values*/) {
      var values = arguments;
      var oldSize = this.size;
      return this.withMutations(function(list ) {
        setListBounds(list, 0, oldSize + values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(oldSize + ii, values[ii]);
        }
      });
    };

    List.prototype.pop = function() {
      return setListBounds(this, 0, -1);
    };

    List.prototype.unshift = function(/*...values*/) {
      var values = arguments;
      return this.withMutations(function(list ) {
        setListBounds(list, -values.length);
        for (var ii = 0; ii < values.length; ii++) {
          list.set(ii, values[ii]);
        }
      });
    };

    List.prototype.shift = function() {
      return setListBounds(this, 1);
    };

    // @pragma Composition

    List.prototype.merge = function(/*...iters*/) {
      return mergeIntoListWith(this, undefined, arguments);
    };

    List.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, merger, iters);
    };

    List.prototype.mergeDeep = function(/*...iters*/) {
      return mergeIntoListWith(this, deepMerger, arguments);
    };

    List.prototype.mergeDeepWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return mergeIntoListWith(this, deepMergerWith(merger), iters);
    };

    List.prototype.setSize = function(size) {
      return setListBounds(this, 0, size);
    };

    // @pragma Iteration

    List.prototype.slice = function(begin, end) {
      var size = this.size;
      if (wholeSlice(begin, end, size)) {
        return this;
      }
      return setListBounds(
        this,
        resolveBegin(begin, size),
        resolveEnd(end, size)
      );
    };

    List.prototype.__iterator = function(type, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      return new Iterator(function()  {
        var value = values();
        return value === DONE ?
          iteratorDone() :
          iteratorValue(type, index++, value);
      });
    };

    List.prototype.__iterate = function(fn, reverse) {
      var index = 0;
      var values = iterateList(this, reverse);
      var value;
      while ((value = values()) !== DONE) {
        if (fn(value, index++, this) === false) {
          break;
        }
      }
      return index;
    };

    List.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        return this;
      }
      return makeList(this._origin, this._capacity, this._level, this._root, this._tail, ownerID, this.__hash);
    };


  function isList(maybeList) {
    return !!(maybeList && maybeList[IS_LIST_SENTINEL]);
  }

  List.isList = isList;

  var IS_LIST_SENTINEL = '@@__IMMUTABLE_LIST__@@';

  var ListPrototype = List.prototype;
  ListPrototype[IS_LIST_SENTINEL] = true;
  ListPrototype[DELETE] = ListPrototype.remove;
  ListPrototype.setIn = MapPrototype.setIn;
  ListPrototype.deleteIn =
  ListPrototype.removeIn = MapPrototype.removeIn;
  ListPrototype.update = MapPrototype.update;
  ListPrototype.updateIn = MapPrototype.updateIn;
  ListPrototype.mergeIn = MapPrototype.mergeIn;
  ListPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  ListPrototype.withMutations = MapPrototype.withMutations;
  ListPrototype.asMutable = MapPrototype.asMutable;
  ListPrototype.asImmutable = MapPrototype.asImmutable;
  ListPrototype.wasAltered = MapPrototype.wasAltered;



    function VNode(array, ownerID) {
      this.array = array;
      this.ownerID = ownerID;
    }

    // TODO: seems like these methods are very similar

    VNode.prototype.removeBefore = function(ownerID, level, index) {
      if (index === level ? 1 << level :  false || this.array.length === 0) {
        return this;
      }
      var originIndex = (index >>> level) & MASK;
      if (originIndex >= this.array.length) {
        return new VNode([], ownerID);
      }
      var removingFirst = originIndex === 0;
      var newChild;
      if (level > 0) {
        var oldChild = this.array[originIndex];
        newChild = oldChild && oldChild.removeBefore(ownerID, level - SHIFT, index);
        if (newChild === oldChild && removingFirst) {
          return this;
        }
      }
      if (removingFirst && !newChild) {
        return this;
      }
      var editable = editableVNode(this, ownerID);
      if (!removingFirst) {
        for (var ii = 0; ii < originIndex; ii++) {
          editable.array[ii] = undefined;
        }
      }
      if (newChild) {
        editable.array[originIndex] = newChild;
      }
      return editable;
    };

    VNode.prototype.removeAfter = function(ownerID, level, index) {
      if (index === (level ? 1 << level : 0) || this.array.length === 0) {
        return this;
      }
      var sizeIndex = ((index - 1) >>> level) & MASK;
      if (sizeIndex >= this.array.length) {
        return this;
      }

      var newChild;
      if (level > 0) {
        var oldChild = this.array[sizeIndex];
        newChild = oldChild && oldChild.removeAfter(ownerID, level - SHIFT, index);
        if (newChild === oldChild && sizeIndex === this.array.length - 1) {
          return this;
        }
      }

      var editable = editableVNode(this, ownerID);
      editable.array.splice(sizeIndex + 1);
      if (newChild) {
        editable.array[sizeIndex] = newChild;
      }
      return editable;
    };



  var DONE = {};

  function iterateList(list, reverse) {
    var left = list._origin;
    var right = list._capacity;
    var tailPos = getTailOffset(right);
    var tail = list._tail;

    return iterateNodeOrLeaf(list._root, list._level, 0);

    function iterateNodeOrLeaf(node, level, offset) {
      return level === 0 ?
        iterateLeaf(node, offset) :
        iterateNode(node, level, offset);
    }

    function iterateLeaf(node, offset) {
      var array = offset === tailPos ? tail && tail.array : node && node.array;
      var from = offset > left ? 0 : left - offset;
      var to = right - offset;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        if (from === to) {
          return DONE;
        }
        var idx = reverse ? --to : from++;
        return array && array[idx];
      };
    }

    function iterateNode(node, level, offset) {
      var values;
      var array = node && node.array;
      var from = offset > left ? 0 : (left - offset) >> level;
      var to = ((right - offset) >> level) + 1;
      if (to > SIZE) {
        to = SIZE;
      }
      return function()  {
        do {
          if (values) {
            var value = values();
            if (value !== DONE) {
              return value;
            }
            values = null;
          }
          if (from === to) {
            return DONE;
          }
          var idx = reverse ? --to : from++;
          values = iterateNodeOrLeaf(
            array && array[idx], level - SHIFT, offset + (idx << level)
          );
        } while (true);
      };
    }
  }

  function makeList(origin, capacity, level, root, tail, ownerID, hash) {
    var list = Object.create(ListPrototype);
    list.size = capacity - origin;
    list._origin = origin;
    list._capacity = capacity;
    list._level = level;
    list._root = root;
    list._tail = tail;
    list.__ownerID = ownerID;
    list.__hash = hash;
    list.__altered = false;
    return list;
  }

  var EMPTY_LIST;
  function emptyList() {
    return EMPTY_LIST || (EMPTY_LIST = makeList(0, 0, SHIFT));
  }

  function updateList(list, index, value) {
    index = wrapIndex(list, index);

    if (index !== index) {
      return list;
    }

    if (index >= list.size || index < 0) {
      return list.withMutations(function(list ) {
        index < 0 ?
          setListBounds(list, index).set(0, value) :
          setListBounds(list, 0, index + 1).set(index, value)
      });
    }

    index += list._origin;

    var newTail = list._tail;
    var newRoot = list._root;
    var didAlter = MakeRef(DID_ALTER);
    if (index >= getTailOffset(list._capacity)) {
      newTail = updateVNode(newTail, list.__ownerID, 0, index, value, didAlter);
    } else {
      newRoot = updateVNode(newRoot, list.__ownerID, list._level, index, value, didAlter);
    }

    if (!didAlter.value) {
      return list;
    }

    if (list.__ownerID) {
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(list._origin, list._capacity, list._level, newRoot, newTail);
  }

  function updateVNode(node, ownerID, level, index, value, didAlter) {
    var idx = (index >>> level) & MASK;
    var nodeHas = node && idx < node.array.length;
    if (!nodeHas && value === undefined) {
      return node;
    }

    var newNode;

    if (level > 0) {
      var lowerNode = node && node.array[idx];
      var newLowerNode = updateVNode(lowerNode, ownerID, level - SHIFT, index, value, didAlter);
      if (newLowerNode === lowerNode) {
        return node;
      }
      newNode = editableVNode(node, ownerID);
      newNode.array[idx] = newLowerNode;
      return newNode;
    }

    if (nodeHas && node.array[idx] === value) {
      return node;
    }

    SetRef(didAlter);

    newNode = editableVNode(node, ownerID);
    if (value === undefined && idx === newNode.array.length - 1) {
      newNode.array.pop();
    } else {
      newNode.array[idx] = value;
    }
    return newNode;
  }

  function editableVNode(node, ownerID) {
    if (ownerID && node && ownerID === node.ownerID) {
      return node;
    }
    return new VNode(node ? node.array.slice() : [], ownerID);
  }

  function listNodeFor(list, rawIndex) {
    if (rawIndex >= getTailOffset(list._capacity)) {
      return list._tail;
    }
    if (rawIndex < 1 << (list._level + SHIFT)) {
      var node = list._root;
      var level = list._level;
      while (node && level > 0) {
        node = node.array[(rawIndex >>> level) & MASK];
        level -= SHIFT;
      }
      return node;
    }
  }

  function setListBounds(list, begin, end) {
    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      end = end | 0;
    }
    var owner = list.__ownerID || new OwnerID();
    var oldOrigin = list._origin;
    var oldCapacity = list._capacity;
    var newOrigin = oldOrigin + begin;
    var newCapacity = end === undefined ? oldCapacity : end < 0 ? oldCapacity + end : oldOrigin + end;
    if (newOrigin === oldOrigin && newCapacity === oldCapacity) {
      return list;
    }

    // If it's going to end after it starts, it's empty.
    if (newOrigin >= newCapacity) {
      return list.clear();
    }

    var newLevel = list._level;
    var newRoot = list._root;

    // New origin might need creating a higher root.
    var offsetShift = 0;
    while (newOrigin + offsetShift < 0) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [undefined, newRoot] : [], owner);
      newLevel += SHIFT;
      offsetShift += 1 << newLevel;
    }
    if (offsetShift) {
      newOrigin += offsetShift;
      oldOrigin += offsetShift;
      newCapacity += offsetShift;
      oldCapacity += offsetShift;
    }

    var oldTailOffset = getTailOffset(oldCapacity);
    var newTailOffset = getTailOffset(newCapacity);

    // New size might need creating a higher root.
    while (newTailOffset >= 1 << (newLevel + SHIFT)) {
      newRoot = new VNode(newRoot && newRoot.array.length ? [newRoot] : [], owner);
      newLevel += SHIFT;
    }

    // Locate or create the new tail.
    var oldTail = list._tail;
    var newTail = newTailOffset < oldTailOffset ?
      listNodeFor(list, newCapacity - 1) :
      newTailOffset > oldTailOffset ? new VNode([], owner) : oldTail;

    // Merge Tail into tree.
    if (oldTail && newTailOffset > oldTailOffset && newOrigin < oldCapacity && oldTail.array.length) {
      newRoot = editableVNode(newRoot, owner);
      var node = newRoot;
      for (var level = newLevel; level > SHIFT; level -= SHIFT) {
        var idx = (oldTailOffset >>> level) & MASK;
        node = node.array[idx] = editableVNode(node.array[idx], owner);
      }
      node.array[(oldTailOffset >>> SHIFT) & MASK] = oldTail;
    }

    // If the size has been reduced, there's a chance the tail needs to be trimmed.
    if (newCapacity < oldCapacity) {
      newTail = newTail && newTail.removeAfter(owner, 0, newCapacity);
    }

    // If the new origin is within the tail, then we do not need a root.
    if (newOrigin >= newTailOffset) {
      newOrigin -= newTailOffset;
      newCapacity -= newTailOffset;
      newLevel = SHIFT;
      newRoot = null;
      newTail = newTail && newTail.removeBefore(owner, 0, newOrigin);

    // Otherwise, if the root has been trimmed, garbage collect.
    } else if (newOrigin > oldOrigin || newTailOffset < oldTailOffset) {
      offsetShift = 0;

      // Identify the new top root node of the subtree of the old root.
      while (newRoot) {
        var beginIndex = (newOrigin >>> newLevel) & MASK;
        if (beginIndex !== (newTailOffset >>> newLevel) & MASK) {
          break;
        }
        if (beginIndex) {
          offsetShift += (1 << newLevel) * beginIndex;
        }
        newLevel -= SHIFT;
        newRoot = newRoot.array[beginIndex];
      }

      // Trim the new sides of the new root.
      if (newRoot && newOrigin > oldOrigin) {
        newRoot = newRoot.removeBefore(owner, newLevel, newOrigin - offsetShift);
      }
      if (newRoot && newTailOffset < oldTailOffset) {
        newRoot = newRoot.removeAfter(owner, newLevel, newTailOffset - offsetShift);
      }
      if (offsetShift) {
        newOrigin -= offsetShift;
        newCapacity -= offsetShift;
      }
    }

    if (list.__ownerID) {
      list.size = newCapacity - newOrigin;
      list._origin = newOrigin;
      list._capacity = newCapacity;
      list._level = newLevel;
      list._root = newRoot;
      list._tail = newTail;
      list.__hash = undefined;
      list.__altered = true;
      return list;
    }
    return makeList(newOrigin, newCapacity, newLevel, newRoot, newTail);
  }

  function mergeIntoListWith(list, merger, iterables) {
    var iters = [];
    var maxSize = 0;
    for (var ii = 0; ii < iterables.length; ii++) {
      var value = iterables[ii];
      var iter = IndexedIterable(value);
      if (iter.size > maxSize) {
        maxSize = iter.size;
      }
      if (!isIterable(value)) {
        iter = iter.map(function(v ) {return fromJS(v)});
      }
      iters.push(iter);
    }
    if (maxSize > list.size) {
      list = list.setSize(maxSize);
    }
    return mergeIntoCollectionWith(list, merger, iters);
  }

  function getTailOffset(size) {
    return size < SIZE ? 0 : (((size - 1) >>> SHIFT) << SHIFT);
  }

  createClass(OrderedMap, Map);

    // @pragma Construction

    function OrderedMap(value) {
      return value === null || value === undefined ? emptyOrderedMap() :
        isOrderedMap(value) ? value :
        emptyOrderedMap().withMutations(function(map ) {
          var iter = KeyedIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v, k)  {return map.set(k, v)});
        });
    }

    OrderedMap.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedMap.prototype.toString = function() {
      return this.__toString('OrderedMap {', '}');
    };

    // @pragma Access

    OrderedMap.prototype.get = function(k, notSetValue) {
      var index = this._map.get(k);
      return index !== undefined ? this._list.get(index)[1] : notSetValue;
    };

    // @pragma Modification

    OrderedMap.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._map.clear();
        this._list.clear();
        return this;
      }
      return emptyOrderedMap();
    };

    OrderedMap.prototype.set = function(k, v) {
      return updateOrderedMap(this, k, v);
    };

    OrderedMap.prototype.remove = function(k) {
      return updateOrderedMap(this, k, NOT_SET);
    };

    OrderedMap.prototype.wasAltered = function() {
      return this._map.wasAltered() || this._list.wasAltered();
    };

    OrderedMap.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._list.__iterate(
        function(entry ) {return entry && fn(entry[1], entry[0], this$0)},
        reverse
      );
    };

    OrderedMap.prototype.__iterator = function(type, reverse) {
      return this._list.fromEntrySeq().__iterator(type, reverse);
    };

    OrderedMap.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      var newList = this._list.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        this._list = newList;
        return this;
      }
      return makeOrderedMap(newMap, newList, ownerID, this.__hash);
    };


  function isOrderedMap(maybeOrderedMap) {
    return isMap(maybeOrderedMap) && isOrdered(maybeOrderedMap);
  }

  OrderedMap.isOrderedMap = isOrderedMap;

  OrderedMap.prototype[IS_ORDERED_SENTINEL] = true;
  OrderedMap.prototype[DELETE] = OrderedMap.prototype.remove;



  function makeOrderedMap(map, list, ownerID, hash) {
    var omap = Object.create(OrderedMap.prototype);
    omap.size = map ? map.size : 0;
    omap._map = map;
    omap._list = list;
    omap.__ownerID = ownerID;
    omap.__hash = hash;
    return omap;
  }

  var EMPTY_ORDERED_MAP;
  function emptyOrderedMap() {
    return EMPTY_ORDERED_MAP || (EMPTY_ORDERED_MAP = makeOrderedMap(emptyMap(), emptyList()));
  }

  function updateOrderedMap(omap, k, v) {
    var map = omap._map;
    var list = omap._list;
    var i = map.get(k);
    var has = i !== undefined;
    var newMap;
    var newList;
    if (v === NOT_SET) { // removed
      if (!has) {
        return omap;
      }
      if (list.size >= SIZE && list.size >= map.size * 2) {
        newList = list.filter(function(entry, idx)  {return entry !== undefined && i !== idx});
        newMap = newList.toKeyedSeq().map(function(entry ) {return entry[0]}).flip().toMap();
        if (omap.__ownerID) {
          newMap.__ownerID = newList.__ownerID = omap.__ownerID;
        }
      } else {
        newMap = map.remove(k);
        newList = i === list.size - 1 ? list.pop() : list.set(i, undefined);
      }
    } else {
      if (has) {
        if (v === list.get(i)[1]) {
          return omap;
        }
        newMap = map;
        newList = list.set(i, [k, v]);
      } else {
        newMap = map.set(k, list.size);
        newList = list.set(list.size, [k, v]);
      }
    }
    if (omap.__ownerID) {
      omap.size = newMap.size;
      omap._map = newMap;
      omap._list = newList;
      omap.__hash = undefined;
      return omap;
    }
    return makeOrderedMap(newMap, newList);
  }

  createClass(ToKeyedSequence, KeyedSeq);
    function ToKeyedSequence(indexed, useKeys) {
      this._iter = indexed;
      this._useKeys = useKeys;
      this.size = indexed.size;
    }

    ToKeyedSequence.prototype.get = function(key, notSetValue) {
      return this._iter.get(key, notSetValue);
    };

    ToKeyedSequence.prototype.has = function(key) {
      return this._iter.has(key);
    };

    ToKeyedSequence.prototype.valueSeq = function() {
      return this._iter.valueSeq();
    };

    ToKeyedSequence.prototype.reverse = function() {var this$0 = this;
      var reversedSequence = reverseFactory(this, true);
      if (!this._useKeys) {
        reversedSequence.valueSeq = function()  {return this$0._iter.toSeq().reverse()};
      }
      return reversedSequence;
    };

    ToKeyedSequence.prototype.map = function(mapper, context) {var this$0 = this;
      var mappedSequence = mapFactory(this, mapper, context);
      if (!this._useKeys) {
        mappedSequence.valueSeq = function()  {return this$0._iter.toSeq().map(mapper, context)};
      }
      return mappedSequence;
    };

    ToKeyedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var ii;
      return this._iter.__iterate(
        this._useKeys ?
          function(v, k)  {return fn(v, k, this$0)} :
          ((ii = reverse ? resolveSize(this) : 0),
            function(v ) {return fn(v, reverse ? --ii : ii++, this$0)}),
        reverse
      );
    };

    ToKeyedSequence.prototype.__iterator = function(type, reverse) {
      if (this._useKeys) {
        return this._iter.__iterator(type, reverse);
      }
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var ii = reverse ? resolveSize(this) : 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, reverse ? --ii : ii++, step.value, step);
      });
    };

  ToKeyedSequence.prototype[IS_ORDERED_SENTINEL] = true;


  createClass(ToIndexedSequence, IndexedSeq);
    function ToIndexedSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToIndexedSequence.prototype.includes = function(value) {
      return this._iter.includes(value);
    };

    ToIndexedSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      return this._iter.__iterate(function(v ) {return fn(v, iterations++, this$0)}, reverse);
    };

    ToIndexedSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, iterations++, step.value, step)
      });
    };



  createClass(ToSetSequence, SetSeq);
    function ToSetSequence(iter) {
      this._iter = iter;
      this.size = iter.size;
    }

    ToSetSequence.prototype.has = function(key) {
      return this._iter.includes(key);
    };

    ToSetSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(v ) {return fn(v, v, this$0)}, reverse);
    };

    ToSetSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        return step.done ? step :
          iteratorValue(type, step.value, step.value, step);
      });
    };



  createClass(FromEntriesSequence, KeyedSeq);
    function FromEntriesSequence(entries) {
      this._iter = entries;
      this.size = entries.size;
    }

    FromEntriesSequence.prototype.entrySeq = function() {
      return this._iter.toSeq();
    };

    FromEntriesSequence.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._iter.__iterate(function(entry ) {
        // Check if entry exists first so array access doesn't throw for holes
        // in the parent iteration.
        if (entry) {
          validateEntry(entry);
          var indexedIterable = isIterable(entry);
          return fn(
            indexedIterable ? entry.get(1) : entry[1],
            indexedIterable ? entry.get(0) : entry[0],
            this$0
          );
        }
      }, reverse);
    };

    FromEntriesSequence.prototype.__iterator = function(type, reverse) {
      var iterator = this._iter.__iterator(ITERATE_VALUES, reverse);
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          // Check if entry exists first so array access doesn't throw for holes
          // in the parent iteration.
          if (entry) {
            validateEntry(entry);
            var indexedIterable = isIterable(entry);
            return iteratorValue(
              type,
              indexedIterable ? entry.get(0) : entry[0],
              indexedIterable ? entry.get(1) : entry[1],
              step
            );
          }
        }
      });
    };


  ToIndexedSequence.prototype.cacheResult =
  ToKeyedSequence.prototype.cacheResult =
  ToSetSequence.prototype.cacheResult =
  FromEntriesSequence.prototype.cacheResult =
    cacheResultThrough;


  function flipFactory(iterable) {
    var flipSequence = makeSequence(iterable);
    flipSequence._iter = iterable;
    flipSequence.size = iterable.size;
    flipSequence.flip = function()  {return iterable};
    flipSequence.reverse = function () {
      var reversedSequence = iterable.reverse.apply(this); // super.reverse()
      reversedSequence.flip = function()  {return iterable.reverse()};
      return reversedSequence;
    };
    flipSequence.has = function(key ) {return iterable.includes(key)};
    flipSequence.includes = function(key ) {return iterable.has(key)};
    flipSequence.cacheResult = cacheResultThrough;
    flipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(k, v, this$0) !== false}, reverse);
    }
    flipSequence.__iteratorUncached = function(type, reverse) {
      if (type === ITERATE_ENTRIES) {
        var iterator = iterable.__iterator(type, reverse);
        return new Iterator(function()  {
          var step = iterator.next();
          if (!step.done) {
            var k = step.value[0];
            step.value[0] = step.value[1];
            step.value[1] = k;
          }
          return step;
        });
      }
      return iterable.__iterator(
        type === ITERATE_VALUES ? ITERATE_KEYS : ITERATE_VALUES,
        reverse
      );
    }
    return flipSequence;
  }


  function mapFactory(iterable, mapper, context) {
    var mappedSequence = makeSequence(iterable);
    mappedSequence.size = iterable.size;
    mappedSequence.has = function(key ) {return iterable.has(key)};
    mappedSequence.get = function(key, notSetValue)  {
      var v = iterable.get(key, NOT_SET);
      return v === NOT_SET ?
        notSetValue :
        mapper.call(context, v, key, iterable);
    };
    mappedSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(
        function(v, k, c)  {return fn(mapper.call(context, v, k, c), k, this$0) !== false},
        reverse
      );
    }
    mappedSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      return new Iterator(function()  {
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var key = entry[0];
        return iteratorValue(
          type,
          key,
          mapper.call(context, entry[1], key, iterable),
          step
        );
      });
    }
    return mappedSequence;
  }


  function reverseFactory(iterable, useKeys) {
    var reversedSequence = makeSequence(iterable);
    reversedSequence._iter = iterable;
    reversedSequence.size = iterable.size;
    reversedSequence.reverse = function()  {return iterable};
    if (iterable.flip) {
      reversedSequence.flip = function () {
        var flipSequence = flipFactory(iterable);
        flipSequence.reverse = function()  {return iterable.flip()};
        return flipSequence;
      };
    }
    reversedSequence.get = function(key, notSetValue) 
      {return iterable.get(useKeys ? key : -1 - key, notSetValue)};
    reversedSequence.has = function(key )
      {return iterable.has(useKeys ? key : -1 - key)};
    reversedSequence.includes = function(value ) {return iterable.includes(value)};
    reversedSequence.cacheResult = cacheResultThrough;
    reversedSequence.__iterate = function (fn, reverse) {var this$0 = this;
      return iterable.__iterate(function(v, k)  {return fn(v, k, this$0)}, !reverse);
    };
    reversedSequence.__iterator =
      function(type, reverse)  {return iterable.__iterator(type, !reverse)};
    return reversedSequence;
  }


  function filterFactory(iterable, predicate, context, useKeys) {
    var filterSequence = makeSequence(iterable);
    if (useKeys) {
      filterSequence.has = function(key ) {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && !!predicate.call(context, v, key, iterable);
      };
      filterSequence.get = function(key, notSetValue)  {
        var v = iterable.get(key, NOT_SET);
        return v !== NOT_SET && predicate.call(context, v, key, iterable) ?
          v : notSetValue;
      };
    }
    filterSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      }, reverse);
      return iterations;
    };
    filterSequence.__iteratorUncached = function (type, reverse) {
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterations = 0;
      return new Iterator(function()  {
        while (true) {
          var step = iterator.next();
          if (step.done) {
            return step;
          }
          var entry = step.value;
          var key = entry[0];
          var value = entry[1];
          if (predicate.call(context, value, key, iterable)) {
            return iteratorValue(type, useKeys ? key : iterations++, value, step);
          }
        }
      });
    }
    return filterSequence;
  }


  function countByFactory(iterable, grouper, context) {
    var groups = Map().asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        0,
        function(a ) {return a + 1}
      );
    });
    return groups.asImmutable();
  }


  function groupByFactory(iterable, grouper, context) {
    var isKeyedIter = isKeyed(iterable);
    var groups = (isOrdered(iterable) ? OrderedMap() : Map()).asMutable();
    iterable.__iterate(function(v, k)  {
      groups.update(
        grouper.call(context, v, k, iterable),
        function(a ) {return (a = a || [], a.push(isKeyedIter ? [k, v] : v), a)}
      );
    });
    var coerce = iterableClass(iterable);
    return groups.map(function(arr ) {return reify(iterable, coerce(arr))});
  }


  function sliceFactory(iterable, begin, end, useKeys) {
    var originalSize = iterable.size;

    // Sanitize begin & end using this shorthand for ToInt32(argument)
    // http://www.ecma-international.org/ecma-262/6.0/#sec-toint32
    if (begin !== undefined) {
      begin = begin | 0;
    }
    if (end !== undefined) {
      if (end === Infinity) {
        end = originalSize;
      } else {
        end = end | 0;
      }
    }

    if (wholeSlice(begin, end, originalSize)) {
      return iterable;
    }

    var resolvedBegin = resolveBegin(begin, originalSize);
    var resolvedEnd = resolveEnd(end, originalSize);

    // begin or end will be NaN if they were provided as negative numbers and
    // this iterable's size is unknown. In that case, cache first so there is
    // a known size and these do not resolve to NaN.
    if (resolvedBegin !== resolvedBegin || resolvedEnd !== resolvedEnd) {
      return sliceFactory(iterable.toSeq().cacheResult(), begin, end, useKeys);
    }

    // Note: resolvedEnd is undefined when the original sequence's length is
    // unknown and this slice did not supply an end and should contain all
    // elements after resolvedBegin.
    // In that case, resolvedSize will be NaN and sliceSize will remain undefined.
    var resolvedSize = resolvedEnd - resolvedBegin;
    var sliceSize;
    if (resolvedSize === resolvedSize) {
      sliceSize = resolvedSize < 0 ? 0 : resolvedSize;
    }

    var sliceSeq = makeSequence(iterable);

    // If iterable.size is undefined, the size of the realized sliceSeq is
    // unknown at this point unless the number of items to slice is 0
    sliceSeq.size = sliceSize === 0 ? sliceSize : iterable.size && sliceSize || undefined;

    if (!useKeys && isSeq(iterable) && sliceSize >= 0) {
      sliceSeq.get = function (index, notSetValue) {
        index = wrapIndex(this, index);
        return index >= 0 && index < sliceSize ?
          iterable.get(index + resolvedBegin, notSetValue) :
          notSetValue;
      }
    }

    sliceSeq.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (sliceSize === 0) {
        return 0;
      }
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var skipped = 0;
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k)  {
        if (!(isSkipping && (isSkipping = skipped++ < resolvedBegin))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0) !== false &&
                 iterations !== sliceSize;
        }
      });
      return iterations;
    };

    sliceSeq.__iteratorUncached = function(type, reverse) {
      if (sliceSize !== 0 && reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      // Don't bother instantiating parent iterator if taking 0.
      var iterator = sliceSize !== 0 && iterable.__iterator(type, reverse);
      var skipped = 0;
      var iterations = 0;
      return new Iterator(function()  {
        while (skipped++ < resolvedBegin) {
          iterator.next();
        }
        if (++iterations > sliceSize) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (useKeys || type === ITERATE_VALUES) {
          return step;
        } else if (type === ITERATE_KEYS) {
          return iteratorValue(type, iterations - 1, undefined, step);
        } else {
          return iteratorValue(type, iterations - 1, step.value[1], step);
        }
      });
    }

    return sliceSeq;
  }


  function takeWhileFactory(iterable, predicate, context) {
    var takeSequence = makeSequence(iterable);
    takeSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var iterations = 0;
      iterable.__iterate(function(v, k, c) 
        {return predicate.call(context, v, k, c) && ++iterations && fn(v, k, this$0)}
      );
      return iterations;
    };
    takeSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var iterating = true;
      return new Iterator(function()  {
        if (!iterating) {
          return iteratorDone();
        }
        var step = iterator.next();
        if (step.done) {
          return step;
        }
        var entry = step.value;
        var k = entry[0];
        var v = entry[1];
        if (!predicate.call(context, v, k, this$0)) {
          iterating = false;
          return iteratorDone();
        }
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return takeSequence;
  }


  function skipWhileFactory(iterable, predicate, context, useKeys) {
    var skipSequence = makeSequence(iterable);
    skipSequence.__iterateUncached = function (fn, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterate(fn, reverse);
      }
      var isSkipping = true;
      var iterations = 0;
      iterable.__iterate(function(v, k, c)  {
        if (!(isSkipping && (isSkipping = predicate.call(context, v, k, c)))) {
          iterations++;
          return fn(v, useKeys ? k : iterations - 1, this$0);
        }
      });
      return iterations;
    };
    skipSequence.__iteratorUncached = function(type, reverse) {var this$0 = this;
      if (reverse) {
        return this.cacheResult().__iterator(type, reverse);
      }
      var iterator = iterable.__iterator(ITERATE_ENTRIES, reverse);
      var skipping = true;
      var iterations = 0;
      return new Iterator(function()  {
        var step, k, v;
        do {
          step = iterator.next();
          if (step.done) {
            if (useKeys || type === ITERATE_VALUES) {
              return step;
            } else if (type === ITERATE_KEYS) {
              return iteratorValue(type, iterations++, undefined, step);
            } else {
              return iteratorValue(type, iterations++, step.value[1], step);
            }
          }
          var entry = step.value;
          k = entry[0];
          v = entry[1];
          skipping && (skipping = predicate.call(context, v, k, this$0));
        } while (skipping);
        return type === ITERATE_ENTRIES ? step :
          iteratorValue(type, k, v, step);
      });
    };
    return skipSequence;
  }


  function concatFactory(iterable, values) {
    var isKeyedIterable = isKeyed(iterable);
    var iters = [iterable].concat(values).map(function(v ) {
      if (!isIterable(v)) {
        v = isKeyedIterable ?
          keyedSeqFromValue(v) :
          indexedSeqFromValue(Array.isArray(v) ? v : [v]);
      } else if (isKeyedIterable) {
        v = KeyedIterable(v);
      }
      return v;
    }).filter(function(v ) {return v.size !== 0});

    if (iters.length === 0) {
      return iterable;
    }

    if (iters.length === 1) {
      var singleton = iters[0];
      if (singleton === iterable ||
          isKeyedIterable && isKeyed(singleton) ||
          isIndexed(iterable) && isIndexed(singleton)) {
        return singleton;
      }
    }

    var concatSeq = new ArraySeq(iters);
    if (isKeyedIterable) {
      concatSeq = concatSeq.toKeyedSeq();
    } else if (!isIndexed(iterable)) {
      concatSeq = concatSeq.toSetSeq();
    }
    concatSeq = concatSeq.flatten(true);
    concatSeq.size = iters.reduce(
      function(sum, seq)  {
        if (sum !== undefined) {
          var size = seq.size;
          if (size !== undefined) {
            return sum + size;
          }
        }
      },
      0
    );
    return concatSeq;
  }


  function flattenFactory(iterable, depth, useKeys) {
    var flatSequence = makeSequence(iterable);
    flatSequence.__iterateUncached = function(fn, reverse) {
      var iterations = 0;
      var stopped = false;
      function flatDeep(iter, currentDepth) {var this$0 = this;
        iter.__iterate(function(v, k)  {
          if ((!depth || currentDepth < depth) && isIterable(v)) {
            flatDeep(v, currentDepth + 1);
          } else if (fn(v, useKeys ? k : iterations++, this$0) === false) {
            stopped = true;
          }
          return !stopped;
        }, reverse);
      }
      flatDeep(iterable, 0);
      return iterations;
    }
    flatSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(type, reverse);
      var stack = [];
      var iterations = 0;
      return new Iterator(function()  {
        while (iterator) {
          var step = iterator.next();
          if (step.done !== false) {
            iterator = stack.pop();
            continue;
          }
          var v = step.value;
          if (type === ITERATE_ENTRIES) {
            v = v[1];
          }
          if ((!depth || stack.length < depth) && isIterable(v)) {
            stack.push(iterator);
            iterator = v.__iterator(type, reverse);
          } else {
            return useKeys ? step : iteratorValue(type, iterations++, v, step);
          }
        }
        return iteratorDone();
      });
    }
    return flatSequence;
  }


  function flatMapFactory(iterable, mapper, context) {
    var coerce = iterableClass(iterable);
    return iterable.toSeq().map(
      function(v, k)  {return coerce(mapper.call(context, v, k, iterable))}
    ).flatten(true);
  }


  function interposeFactory(iterable, separator) {
    var interposedSequence = makeSequence(iterable);
    interposedSequence.size = iterable.size && iterable.size * 2 -1;
    interposedSequence.__iterateUncached = function(fn, reverse) {var this$0 = this;
      var iterations = 0;
      iterable.__iterate(function(v, k) 
        {return (!iterations || fn(separator, iterations++, this$0) !== false) &&
        fn(v, iterations++, this$0) !== false},
        reverse
      );
      return iterations;
    };
    interposedSequence.__iteratorUncached = function(type, reverse) {
      var iterator = iterable.__iterator(ITERATE_VALUES, reverse);
      var iterations = 0;
      var step;
      return new Iterator(function()  {
        if (!step || iterations % 2) {
          step = iterator.next();
          if (step.done) {
            return step;
          }
        }
        return iterations % 2 ?
          iteratorValue(type, iterations++, separator) :
          iteratorValue(type, iterations++, step.value, step);
      });
    };
    return interposedSequence;
  }


  function sortFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    var isKeyedIterable = isKeyed(iterable);
    var index = 0;
    var entries = iterable.toSeq().map(
      function(v, k)  {return [k, v, index++, mapper ? mapper(v, k, iterable) : v]}
    ).toArray();
    entries.sort(function(a, b)  {return comparator(a[3], b[3]) || a[2] - b[2]}).forEach(
      isKeyedIterable ?
      function(v, i)  { entries[i].length = 2; } :
      function(v, i)  { entries[i] = v[1]; }
    );
    return isKeyedIterable ? KeyedSeq(entries) :
      isIndexed(iterable) ? IndexedSeq(entries) :
      SetSeq(entries);
  }


  function maxFactory(iterable, comparator, mapper) {
    if (!comparator) {
      comparator = defaultComparator;
    }
    if (mapper) {
      var entry = iterable.toSeq()
        .map(function(v, k)  {return [v, mapper(v, k, iterable)]})
        .reduce(function(a, b)  {return maxCompare(comparator, a[1], b[1]) ? b : a});
      return entry && entry[0];
    } else {
      return iterable.reduce(function(a, b)  {return maxCompare(comparator, a, b) ? b : a});
    }
  }

  function maxCompare(comparator, a, b) {
    var comp = comparator(b, a);
    // b is considered the new max if the comparator declares them equal, but
    // they are not equal and b is in fact a nullish value.
    return (comp === 0 && b !== a && (b === undefined || b === null || b !== b)) || comp > 0;
  }


  function zipWithFactory(keyIter, zipper, iters) {
    var zipSequence = makeSequence(keyIter);
    zipSequence.size = new ArraySeq(iters).map(function(i ) {return i.size}).min();
    // Note: this a generic base implementation of __iterate in terms of
    // __iterator which may be more generically useful in the future.
    zipSequence.__iterate = function(fn, reverse) {
      /* generic:
      var iterator = this.__iterator(ITERATE_ENTRIES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        iterations++;
        if (fn(step.value[1], step.value[0], this) === false) {
          break;
        }
      }
      return iterations;
      */
      // indexed:
      var iterator = this.__iterator(ITERATE_VALUES, reverse);
      var step;
      var iterations = 0;
      while (!(step = iterator.next()).done) {
        if (fn(step.value, iterations++, this) === false) {
          break;
        }
      }
      return iterations;
    };
    zipSequence.__iteratorUncached = function(type, reverse) {
      var iterators = iters.map(function(i )
        {return (i = Iterable(i), getIterator(reverse ? i.reverse() : i))}
      );
      var iterations = 0;
      var isDone = false;
      return new Iterator(function()  {
        var steps;
        if (!isDone) {
          steps = iterators.map(function(i ) {return i.next()});
          isDone = steps.some(function(s ) {return s.done});
        }
        if (isDone) {
          return iteratorDone();
        }
        return iteratorValue(
          type,
          iterations++,
          zipper.apply(null, steps.map(function(s ) {return s.value}))
        );
      });
    };
    return zipSequence
  }


  // #pragma Helper Functions

  function reify(iter, seq) {
    return isSeq(iter) ? seq : iter.constructor(seq);
  }

  function validateEntry(entry) {
    if (entry !== Object(entry)) {
      throw new TypeError('Expected [K, V] tuple: ' + entry);
    }
  }

  function resolveSize(iter) {
    assertNotInfinite(iter.size);
    return ensureSize(iter);
  }

  function iterableClass(iterable) {
    return isKeyed(iterable) ? KeyedIterable :
      isIndexed(iterable) ? IndexedIterable :
      SetIterable;
  }

  function makeSequence(iterable) {
    return Object.create(
      (
        isKeyed(iterable) ? KeyedSeq :
        isIndexed(iterable) ? IndexedSeq :
        SetSeq
      ).prototype
    );
  }

  function cacheResultThrough() {
    if (this._iter.cacheResult) {
      this._iter.cacheResult();
      this.size = this._iter.size;
      return this;
    } else {
      return Seq.prototype.cacheResult.call(this);
    }
  }

  function defaultComparator(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }

  function forceIterator(keyPath) {
    var iter = getIterator(keyPath);
    if (!iter) {
      // Array might not be iterable in this environment, so we need a fallback
      // to our wrapped type.
      if (!isArrayLike(keyPath)) {
        throw new TypeError('Expected iterable or array-like: ' + keyPath);
      }
      iter = getIterator(Iterable(keyPath));
    }
    return iter;
  }

  createClass(Record, KeyedCollection);

    function Record(defaultValues, name) {
      var hasInitialized;

      var RecordType = function Record(values) {
        if (values instanceof RecordType) {
          return values;
        }
        if (!(this instanceof RecordType)) {
          return new RecordType(values);
        }
        if (!hasInitialized) {
          hasInitialized = true;
          var keys = Object.keys(defaultValues);
          setProps(RecordTypePrototype, keys);
          RecordTypePrototype.size = keys.length;
          RecordTypePrototype._name = name;
          RecordTypePrototype._keys = keys;
          RecordTypePrototype._defaultValues = defaultValues;
        }
        this._map = Map(values);
      };

      var RecordTypePrototype = RecordType.prototype = Object.create(RecordPrototype);
      RecordTypePrototype.constructor = RecordType;

      return RecordType;
    }

    Record.prototype.toString = function() {
      return this.__toString(recordName(this) + ' {', '}');
    };

    // @pragma Access

    Record.prototype.has = function(k) {
      return this._defaultValues.hasOwnProperty(k);
    };

    Record.prototype.get = function(k, notSetValue) {
      if (!this.has(k)) {
        return notSetValue;
      }
      var defaultVal = this._defaultValues[k];
      return this._map ? this._map.get(k, defaultVal) : defaultVal;
    };

    // @pragma Modification

    Record.prototype.clear = function() {
      if (this.__ownerID) {
        this._map && this._map.clear();
        return this;
      }
      var RecordType = this.constructor;
      return RecordType._empty || (RecordType._empty = makeRecord(this, emptyMap()));
    };

    Record.prototype.set = function(k, v) {
      if (!this.has(k)) {
        throw new Error('Cannot set unknown key "' + k + '" on ' + recordName(this));
      }
      if (this._map && !this._map.has(k)) {
        var defaultVal = this._defaultValues[k];
        if (v === defaultVal) {
          return this;
        }
      }
      var newMap = this._map && this._map.set(k, v);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.remove = function(k) {
      if (!this.has(k)) {
        return this;
      }
      var newMap = this._map && this._map.remove(k);
      if (this.__ownerID || newMap === this._map) {
        return this;
      }
      return makeRecord(this, newMap);
    };

    Record.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Record.prototype.__iterator = function(type, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterator(type, reverse);
    };

    Record.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return KeyedIterable(this._defaultValues).map(function(_, k)  {return this$0.get(k)}).__iterate(fn, reverse);
    };

    Record.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map && this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return makeRecord(this, newMap, ownerID);
    };


  var RecordPrototype = Record.prototype;
  RecordPrototype[DELETE] = RecordPrototype.remove;
  RecordPrototype.deleteIn =
  RecordPrototype.removeIn = MapPrototype.removeIn;
  RecordPrototype.merge = MapPrototype.merge;
  RecordPrototype.mergeWith = MapPrototype.mergeWith;
  RecordPrototype.mergeIn = MapPrototype.mergeIn;
  RecordPrototype.mergeDeep = MapPrototype.mergeDeep;
  RecordPrototype.mergeDeepWith = MapPrototype.mergeDeepWith;
  RecordPrototype.mergeDeepIn = MapPrototype.mergeDeepIn;
  RecordPrototype.setIn = MapPrototype.setIn;
  RecordPrototype.update = MapPrototype.update;
  RecordPrototype.updateIn = MapPrototype.updateIn;
  RecordPrototype.withMutations = MapPrototype.withMutations;
  RecordPrototype.asMutable = MapPrototype.asMutable;
  RecordPrototype.asImmutable = MapPrototype.asImmutable;


  function makeRecord(likeRecord, map, ownerID) {
    var record = Object.create(Object.getPrototypeOf(likeRecord));
    record._map = map;
    record.__ownerID = ownerID;
    return record;
  }

  function recordName(record) {
    return record._name || record.constructor.name || 'Record';
  }

  function setProps(prototype, names) {
    try {
      names.forEach(setProp.bind(undefined, prototype));
    } catch (error) {
      // Object.defineProperty failed. Probably IE8.
    }
  }

  function setProp(prototype, name) {
    Object.defineProperty(prototype, name, {
      get: function() {
        return this.get(name);
      },
      set: function(value) {
        invariant(this.__ownerID, 'Cannot set on an immutable record.');
        this.set(name, value);
      }
    });
  }

  createClass(Set, SetCollection);

    // @pragma Construction

    function Set(value) {
      return value === null || value === undefined ? emptySet() :
        isSet(value) && !isOrdered(value) ? value :
        emptySet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    Set.of = function(/*...values*/) {
      return this(arguments);
    };

    Set.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    Set.prototype.toString = function() {
      return this.__toString('Set {', '}');
    };

    // @pragma Access

    Set.prototype.has = function(value) {
      return this._map.has(value);
    };

    // @pragma Modification

    Set.prototype.add = function(value) {
      return updateSet(this, this._map.set(value, true));
    };

    Set.prototype.remove = function(value) {
      return updateSet(this, this._map.remove(value));
    };

    Set.prototype.clear = function() {
      return updateSet(this, this._map.clear());
    };

    // @pragma Composition

    Set.prototype.union = function() {var iters = SLICE$0.call(arguments, 0);
      iters = iters.filter(function(x ) {return x.size !== 0});
      if (iters.length === 0) {
        return this;
      }
      if (this.size === 0 && !this.__ownerID && iters.length === 1) {
        return this.constructor(iters[0]);
      }
      return this.withMutations(function(set ) {
        for (var ii = 0; ii < iters.length; ii++) {
          SetIterable(iters[ii]).forEach(function(value ) {return set.add(value)});
        }
      });
    };

    Set.prototype.intersect = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (!iters.every(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.subtract = function() {var iters = SLICE$0.call(arguments, 0);
      if (iters.length === 0) {
        return this;
      }
      iters = iters.map(function(iter ) {return SetIterable(iter)});
      var originalSet = this;
      return this.withMutations(function(set ) {
        originalSet.forEach(function(value ) {
          if (iters.some(function(iter ) {return iter.includes(value)})) {
            set.remove(value);
          }
        });
      });
    };

    Set.prototype.merge = function() {
      return this.union.apply(this, arguments);
    };

    Set.prototype.mergeWith = function(merger) {var iters = SLICE$0.call(arguments, 1);
      return this.union.apply(this, iters);
    };

    Set.prototype.sort = function(comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator));
    };

    Set.prototype.sortBy = function(mapper, comparator) {
      // Late binding
      return OrderedSet(sortFactory(this, comparator, mapper));
    };

    Set.prototype.wasAltered = function() {
      return this._map.wasAltered();
    };

    Set.prototype.__iterate = function(fn, reverse) {var this$0 = this;
      return this._map.__iterate(function(_, k)  {return fn(k, k, this$0)}, reverse);
    };

    Set.prototype.__iterator = function(type, reverse) {
      return this._map.map(function(_, k)  {return k}).__iterator(type, reverse);
    };

    Set.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      var newMap = this._map.__ensureOwner(ownerID);
      if (!ownerID) {
        this.__ownerID = ownerID;
        this._map = newMap;
        return this;
      }
      return this.__make(newMap, ownerID);
    };


  function isSet(maybeSet) {
    return !!(maybeSet && maybeSet[IS_SET_SENTINEL]);
  }

  Set.isSet = isSet;

  var IS_SET_SENTINEL = '@@__IMMUTABLE_SET__@@';

  var SetPrototype = Set.prototype;
  SetPrototype[IS_SET_SENTINEL] = true;
  SetPrototype[DELETE] = SetPrototype.remove;
  SetPrototype.mergeDeep = SetPrototype.merge;
  SetPrototype.mergeDeepWith = SetPrototype.mergeWith;
  SetPrototype.withMutations = MapPrototype.withMutations;
  SetPrototype.asMutable = MapPrototype.asMutable;
  SetPrototype.asImmutable = MapPrototype.asImmutable;

  SetPrototype.__empty = emptySet;
  SetPrototype.__make = makeSet;

  function updateSet(set, newMap) {
    if (set.__ownerID) {
      set.size = newMap.size;
      set._map = newMap;
      return set;
    }
    return newMap === set._map ? set :
      newMap.size === 0 ? set.__empty() :
      set.__make(newMap);
  }

  function makeSet(map, ownerID) {
    var set = Object.create(SetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_SET;
  function emptySet() {
    return EMPTY_SET || (EMPTY_SET = makeSet(emptyMap()));
  }

  createClass(OrderedSet, Set);

    // @pragma Construction

    function OrderedSet(value) {
      return value === null || value === undefined ? emptyOrderedSet() :
        isOrderedSet(value) ? value :
        emptyOrderedSet().withMutations(function(set ) {
          var iter = SetIterable(value);
          assertNotInfinite(iter.size);
          iter.forEach(function(v ) {return set.add(v)});
        });
    }

    OrderedSet.of = function(/*...values*/) {
      return this(arguments);
    };

    OrderedSet.fromKeys = function(value) {
      return this(KeyedIterable(value).keySeq());
    };

    OrderedSet.prototype.toString = function() {
      return this.__toString('OrderedSet {', '}');
    };


  function isOrderedSet(maybeOrderedSet) {
    return isSet(maybeOrderedSet) && isOrdered(maybeOrderedSet);
  }

  OrderedSet.isOrderedSet = isOrderedSet;

  var OrderedSetPrototype = OrderedSet.prototype;
  OrderedSetPrototype[IS_ORDERED_SENTINEL] = true;

  OrderedSetPrototype.__empty = emptyOrderedSet;
  OrderedSetPrototype.__make = makeOrderedSet;

  function makeOrderedSet(map, ownerID) {
    var set = Object.create(OrderedSetPrototype);
    set.size = map ? map.size : 0;
    set._map = map;
    set.__ownerID = ownerID;
    return set;
  }

  var EMPTY_ORDERED_SET;
  function emptyOrderedSet() {
    return EMPTY_ORDERED_SET || (EMPTY_ORDERED_SET = makeOrderedSet(emptyOrderedMap()));
  }

  createClass(Stack, IndexedCollection);

    // @pragma Construction

    function Stack(value) {
      return value === null || value === undefined ? emptyStack() :
        isStack(value) ? value :
        emptyStack().unshiftAll(value);
    }

    Stack.of = function(/*...values*/) {
      return this(arguments);
    };

    Stack.prototype.toString = function() {
      return this.__toString('Stack [', ']');
    };

    // @pragma Access

    Stack.prototype.get = function(index, notSetValue) {
      var head = this._head;
      index = wrapIndex(this, index);
      while (head && index--) {
        head = head.next;
      }
      return head ? head.value : notSetValue;
    };

    Stack.prototype.peek = function() {
      return this._head && this._head.value;
    };

    // @pragma Modification

    Stack.prototype.push = function(/*...values*/) {
      if (arguments.length === 0) {
        return this;
      }
      var newSize = this.size + arguments.length;
      var head = this._head;
      for (var ii = arguments.length - 1; ii >= 0; ii--) {
        head = {
          value: arguments[ii],
          next: head
        };
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pushAll = function(iter) {
      iter = IndexedIterable(iter);
      if (iter.size === 0) {
        return this;
      }
      assertNotInfinite(iter.size);
      var newSize = this.size;
      var head = this._head;
      iter.reverse().forEach(function(value ) {
        newSize++;
        head = {
          value: value,
          next: head
        };
      });
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    Stack.prototype.pop = function() {
      return this.slice(1);
    };

    Stack.prototype.unshift = function(/*...values*/) {
      return this.push.apply(this, arguments);
    };

    Stack.prototype.unshiftAll = function(iter) {
      return this.pushAll(iter);
    };

    Stack.prototype.shift = function() {
      return this.pop.apply(this, arguments);
    };

    Stack.prototype.clear = function() {
      if (this.size === 0) {
        return this;
      }
      if (this.__ownerID) {
        this.size = 0;
        this._head = undefined;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return emptyStack();
    };

    Stack.prototype.slice = function(begin, end) {
      if (wholeSlice(begin, end, this.size)) {
        return this;
      }
      var resolvedBegin = resolveBegin(begin, this.size);
      var resolvedEnd = resolveEnd(end, this.size);
      if (resolvedEnd !== this.size) {
        // super.slice(begin, end);
        return IndexedCollection.prototype.slice.call(this, begin, end);
      }
      var newSize = this.size - resolvedBegin;
      var head = this._head;
      while (resolvedBegin--) {
        head = head.next;
      }
      if (this.__ownerID) {
        this.size = newSize;
        this._head = head;
        this.__hash = undefined;
        this.__altered = true;
        return this;
      }
      return makeStack(newSize, head);
    };

    // @pragma Mutability

    Stack.prototype.__ensureOwner = function(ownerID) {
      if (ownerID === this.__ownerID) {
        return this;
      }
      if (!ownerID) {
        this.__ownerID = ownerID;
        this.__altered = false;
        return this;
      }
      return makeStack(this.size, this._head, ownerID, this.__hash);
    };

    // @pragma Iteration

    Stack.prototype.__iterate = function(fn, reverse) {
      if (reverse) {
        return this.reverse().__iterate(fn);
      }
      var iterations = 0;
      var node = this._head;
      while (node) {
        if (fn(node.value, iterations++, this) === false) {
          break;
        }
        node = node.next;
      }
      return iterations;
    };

    Stack.prototype.__iterator = function(type, reverse) {
      if (reverse) {
        return this.reverse().__iterator(type);
      }
      var iterations = 0;
      var node = this._head;
      return new Iterator(function()  {
        if (node) {
          var value = node.value;
          node = node.next;
          return iteratorValue(type, iterations++, value);
        }
        return iteratorDone();
      });
    };


  function isStack(maybeStack) {
    return !!(maybeStack && maybeStack[IS_STACK_SENTINEL]);
  }

  Stack.isStack = isStack;

  var IS_STACK_SENTINEL = '@@__IMMUTABLE_STACK__@@';

  var StackPrototype = Stack.prototype;
  StackPrototype[IS_STACK_SENTINEL] = true;
  StackPrototype.withMutations = MapPrototype.withMutations;
  StackPrototype.asMutable = MapPrototype.asMutable;
  StackPrototype.asImmutable = MapPrototype.asImmutable;
  StackPrototype.wasAltered = MapPrototype.wasAltered;


  function makeStack(size, head, ownerID, hash) {
    var map = Object.create(StackPrototype);
    map.size = size;
    map._head = head;
    map.__ownerID = ownerID;
    map.__hash = hash;
    map.__altered = false;
    return map;
  }

  var EMPTY_STACK;
  function emptyStack() {
    return EMPTY_STACK || (EMPTY_STACK = makeStack(0));
  }

  /**
   * Contributes additional methods to a constructor
   */
  function mixin(ctor, methods) {
    var keyCopier = function(key ) { ctor.prototype[key] = methods[key]; };
    Object.keys(methods).forEach(keyCopier);
    Object.getOwnPropertySymbols &&
      Object.getOwnPropertySymbols(methods).forEach(keyCopier);
    return ctor;
  }

  Iterable.Iterator = Iterator;

  mixin(Iterable, {

    // ### Conversion to other types

    toArray: function() {
      assertNotInfinite(this.size);
      var array = new Array(this.size || 0);
      this.valueSeq().__iterate(function(v, i)  { array[i] = v; });
      return array;
    },

    toIndexedSeq: function() {
      return new ToIndexedSequence(this);
    },

    toJS: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJS === 'function' ? value.toJS() : value}
      ).__toJS();
    },

    toJSON: function() {
      return this.toSeq().map(
        function(value ) {return value && typeof value.toJSON === 'function' ? value.toJSON() : value}
      ).__toJS();
    },

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, true);
    },

    toMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return Map(this.toKeyedSeq());
    },

    toObject: function() {
      assertNotInfinite(this.size);
      var object = {};
      this.__iterate(function(v, k)  { object[k] = v; });
      return object;
    },

    toOrderedMap: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedMap(this.toKeyedSeq());
    },

    toOrderedSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return OrderedSet(isKeyed(this) ? this.valueSeq() : this);
    },

    toSet: function() {
      // Use Late Binding here to solve the circular dependency.
      return Set(isKeyed(this) ? this.valueSeq() : this);
    },

    toSetSeq: function() {
      return new ToSetSequence(this);
    },

    toSeq: function() {
      return isIndexed(this) ? this.toIndexedSeq() :
        isKeyed(this) ? this.toKeyedSeq() :
        this.toSetSeq();
    },

    toStack: function() {
      // Use Late Binding here to solve the circular dependency.
      return Stack(isKeyed(this) ? this.valueSeq() : this);
    },

    toList: function() {
      // Use Late Binding here to solve the circular dependency.
      return List(isKeyed(this) ? this.valueSeq() : this);
    },


    // ### Common JavaScript methods and properties

    toString: function() {
      return '[Iterable]';
    },

    __toString: function(head, tail) {
      if (this.size === 0) {
        return head + tail;
      }
      return head + ' ' + this.toSeq().map(this.__toStringMapper).join(', ') + ' ' + tail;
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    concat: function() {var values = SLICE$0.call(arguments, 0);
      return reify(this, concatFactory(this, values));
    },

    includes: function(searchValue) {
      return this.some(function(value ) {return is(value, searchValue)});
    },

    entries: function() {
      return this.__iterator(ITERATE_ENTRIES);
    },

    every: function(predicate, context) {
      assertNotInfinite(this.size);
      var returnValue = true;
      this.__iterate(function(v, k, c)  {
        if (!predicate.call(context, v, k, c)) {
          returnValue = false;
          return false;
        }
      });
      return returnValue;
    },

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, true));
    },

    find: function(predicate, context, notSetValue) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[1] : notSetValue;
    },

    forEach: function(sideEffect, context) {
      assertNotInfinite(this.size);
      return this.__iterate(context ? sideEffect.bind(context) : sideEffect);
    },

    join: function(separator) {
      assertNotInfinite(this.size);
      separator = separator !== undefined ? '' + separator : ',';
      var joined = '';
      var isFirst = true;
      this.__iterate(function(v ) {
        isFirst ? (isFirst = false) : (joined += separator);
        joined += v !== null && v !== undefined ? v.toString() : '';
      });
      return joined;
    },

    keys: function() {
      return this.__iterator(ITERATE_KEYS);
    },

    map: function(mapper, context) {
      return reify(this, mapFactory(this, mapper, context));
    },

    reduce: function(reducer, initialReduction, context) {
      assertNotInfinite(this.size);
      var reduction;
      var useFirst;
      if (arguments.length < 2) {
        useFirst = true;
      } else {
        reduction = initialReduction;
      }
      this.__iterate(function(v, k, c)  {
        if (useFirst) {
          useFirst = false;
          reduction = v;
        } else {
          reduction = reducer.call(context, reduction, v, k, c);
        }
      });
      return reduction;
    },

    reduceRight: function(reducer, initialReduction, context) {
      var reversed = this.toKeyedSeq().reverse();
      return reversed.reduce.apply(reversed, arguments);
    },

    reverse: function() {
      return reify(this, reverseFactory(this, true));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, true));
    },

    some: function(predicate, context) {
      return !this.every(not(predicate), context);
    },

    sort: function(comparator) {
      return reify(this, sortFactory(this, comparator));
    },

    values: function() {
      return this.__iterator(ITERATE_VALUES);
    },


    // ### More sequential methods

    butLast: function() {
      return this.slice(0, -1);
    },

    isEmpty: function() {
      return this.size !== undefined ? this.size === 0 : !this.some(function()  {return true});
    },

    count: function(predicate, context) {
      return ensureSize(
        predicate ? this.toSeq().filter(predicate, context) : this
      );
    },

    countBy: function(grouper, context) {
      return countByFactory(this, grouper, context);
    },

    equals: function(other) {
      return deepEqual(this, other);
    },

    entrySeq: function() {
      var iterable = this;
      if (iterable._cache) {
        // We cache as an entries array, so we can just return the cache!
        return new ArraySeq(iterable._cache);
      }
      var entriesSequence = iterable.toSeq().map(entryMapper).toIndexedSeq();
      entriesSequence.fromEntrySeq = function()  {return iterable.toSeq()};
      return entriesSequence;
    },

    filterNot: function(predicate, context) {
      return this.filter(not(predicate), context);
    },

    findEntry: function(predicate, context, notSetValue) {
      var found = notSetValue;
      this.__iterate(function(v, k, c)  {
        if (predicate.call(context, v, k, c)) {
          found = [k, v];
          return false;
        }
      });
      return found;
    },

    findKey: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry && entry[0];
    },

    findLast: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().find(predicate, context, notSetValue);
    },

    findLastEntry: function(predicate, context, notSetValue) {
      return this.toKeyedSeq().reverse().findEntry(predicate, context, notSetValue);
    },

    findLastKey: function(predicate, context) {
      return this.toKeyedSeq().reverse().findKey(predicate, context);
    },

    first: function() {
      return this.find(returnTrue);
    },

    flatMap: function(mapper, context) {
      return reify(this, flatMapFactory(this, mapper, context));
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, true));
    },

    fromEntrySeq: function() {
      return new FromEntriesSequence(this);
    },

    get: function(searchKey, notSetValue) {
      return this.find(function(_, key)  {return is(key, searchKey)}, undefined, notSetValue);
    },

    getIn: function(searchKeyPath, notSetValue) {
      var nested = this;
      // Note: in an ES6 environment, we would prefer:
      // for (var key of searchKeyPath) {
      var iter = forceIterator(searchKeyPath);
      var step;
      while (!(step = iter.next()).done) {
        var key = step.value;
        nested = nested && nested.get ? nested.get(key, NOT_SET) : NOT_SET;
        if (nested === NOT_SET) {
          return notSetValue;
        }
      }
      return nested;
    },

    groupBy: function(grouper, context) {
      return groupByFactory(this, grouper, context);
    },

    has: function(searchKey) {
      return this.get(searchKey, NOT_SET) !== NOT_SET;
    },

    hasIn: function(searchKeyPath) {
      return this.getIn(searchKeyPath, NOT_SET) !== NOT_SET;
    },

    isSubset: function(iter) {
      iter = typeof iter.includes === 'function' ? iter : Iterable(iter);
      return this.every(function(value ) {return iter.includes(value)});
    },

    isSuperset: function(iter) {
      iter = typeof iter.isSubset === 'function' ? iter : Iterable(iter);
      return iter.isSubset(this);
    },

    keyOf: function(searchValue) {
      return this.findKey(function(value ) {return is(value, searchValue)});
    },

    keySeq: function() {
      return this.toSeq().map(keyMapper).toIndexedSeq();
    },

    last: function() {
      return this.toSeq().reverse().first();
    },

    lastKeyOf: function(searchValue) {
      return this.toKeyedSeq().reverse().keyOf(searchValue);
    },

    max: function(comparator) {
      return maxFactory(this, comparator);
    },

    maxBy: function(mapper, comparator) {
      return maxFactory(this, comparator, mapper);
    },

    min: function(comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator);
    },

    minBy: function(mapper, comparator) {
      return maxFactory(this, comparator ? neg(comparator) : defaultNegComparator, mapper);
    },

    rest: function() {
      return this.slice(1);
    },

    skip: function(amount) {
      return this.slice(Math.max(0, amount));
    },

    skipLast: function(amount) {
      return reify(this, this.toSeq().reverse().skip(amount).reverse());
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, true));
    },

    skipUntil: function(predicate, context) {
      return this.skipWhile(not(predicate), context);
    },

    sortBy: function(mapper, comparator) {
      return reify(this, sortFactory(this, comparator, mapper));
    },

    take: function(amount) {
      return this.slice(0, Math.max(0, amount));
    },

    takeLast: function(amount) {
      return reify(this, this.toSeq().reverse().take(amount).reverse());
    },

    takeWhile: function(predicate, context) {
      return reify(this, takeWhileFactory(this, predicate, context));
    },

    takeUntil: function(predicate, context) {
      return this.takeWhile(not(predicate), context);
    },

    valueSeq: function() {
      return this.toIndexedSeq();
    },


    // ### Hashable Object

    hashCode: function() {
      return this.__hash || (this.__hash = hashIterable(this));
    }


    // ### Internal

    // abstract __iterate(fn, reverse)

    // abstract __iterator(type, reverse)
  });

  // var IS_ITERABLE_SENTINEL = '@@__IMMUTABLE_ITERABLE__@@';
  // var IS_KEYED_SENTINEL = '@@__IMMUTABLE_KEYED__@@';
  // var IS_INDEXED_SENTINEL = '@@__IMMUTABLE_INDEXED__@@';
  // var IS_ORDERED_SENTINEL = '@@__IMMUTABLE_ORDERED__@@';

  var IterablePrototype = Iterable.prototype;
  IterablePrototype[IS_ITERABLE_SENTINEL] = true;
  IterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.values;
  IterablePrototype.__toJS = IterablePrototype.toArray;
  IterablePrototype.__toStringMapper = quoteString;
  IterablePrototype.inspect =
  IterablePrototype.toSource = function() { return this.toString(); };
  IterablePrototype.chain = IterablePrototype.flatMap;
  IterablePrototype.contains = IterablePrototype.includes;

  mixin(KeyedIterable, {

    // ### More sequential methods

    flip: function() {
      return reify(this, flipFactory(this));
    },

    mapEntries: function(mapper, context) {var this$0 = this;
      var iterations = 0;
      return reify(this,
        this.toSeq().map(
          function(v, k)  {return mapper.call(context, [k, v], iterations++, this$0)}
        ).fromEntrySeq()
      );
    },

    mapKeys: function(mapper, context) {var this$0 = this;
      return reify(this,
        this.toSeq().flip().map(
          function(k, v)  {return mapper.call(context, k, v, this$0)}
        ).flip()
      );
    }

  });

  var KeyedIterablePrototype = KeyedIterable.prototype;
  KeyedIterablePrototype[IS_KEYED_SENTINEL] = true;
  KeyedIterablePrototype[ITERATOR_SYMBOL] = IterablePrototype.entries;
  KeyedIterablePrototype.__toJS = IterablePrototype.toObject;
  KeyedIterablePrototype.__toStringMapper = function(v, k)  {return JSON.stringify(k) + ': ' + quoteString(v)};



  mixin(IndexedIterable, {

    // ### Conversion to other types

    toKeyedSeq: function() {
      return new ToKeyedSequence(this, false);
    },


    // ### ES6 Collection methods (ES6 Array and Map)

    filter: function(predicate, context) {
      return reify(this, filterFactory(this, predicate, context, false));
    },

    findIndex: function(predicate, context) {
      var entry = this.findEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    indexOf: function(searchValue) {
      var key = this.keyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    lastIndexOf: function(searchValue) {
      var key = this.lastKeyOf(searchValue);
      return key === undefined ? -1 : key;
    },

    reverse: function() {
      return reify(this, reverseFactory(this, false));
    },

    slice: function(begin, end) {
      return reify(this, sliceFactory(this, begin, end, false));
    },

    splice: function(index, removeNum /*, ...values*/) {
      var numArgs = arguments.length;
      removeNum = Math.max(removeNum | 0, 0);
      if (numArgs === 0 || (numArgs === 2 && !removeNum)) {
        return this;
      }
      // If index is negative, it should resolve relative to the size of the
      // collection. However size may be expensive to compute if not cached, so
      // only call count() if the number is in fact negative.
      index = resolveBegin(index, index < 0 ? this.count() : this.size);
      var spliced = this.slice(0, index);
      return reify(
        this,
        numArgs === 1 ?
          spliced :
          spliced.concat(arrCopy(arguments, 2), this.slice(index + removeNum))
      );
    },


    // ### More collection methods

    findLastIndex: function(predicate, context) {
      var entry = this.findLastEntry(predicate, context);
      return entry ? entry[0] : -1;
    },

    first: function() {
      return this.get(0);
    },

    flatten: function(depth) {
      return reify(this, flattenFactory(this, depth, false));
    },

    get: function(index, notSetValue) {
      index = wrapIndex(this, index);
      return (index < 0 || (this.size === Infinity ||
          (this.size !== undefined && index > this.size))) ?
        notSetValue :
        this.find(function(_, key)  {return key === index}, undefined, notSetValue);
    },

    has: function(index) {
      index = wrapIndex(this, index);
      return index >= 0 && (this.size !== undefined ?
        this.size === Infinity || index < this.size :
        this.indexOf(index) !== -1
      );
    },

    interpose: function(separator) {
      return reify(this, interposeFactory(this, separator));
    },

    interleave: function(/*...iterables*/) {
      var iterables = [this].concat(arrCopy(arguments));
      var zipped = zipWithFactory(this.toSeq(), IndexedSeq.of, iterables);
      var interleaved = zipped.flatten(true);
      if (zipped.size) {
        interleaved.size = zipped.size * iterables.length;
      }
      return reify(this, interleaved);
    },

    keySeq: function() {
      return Range(0, this.size);
    },

    last: function() {
      return this.get(-1);
    },

    skipWhile: function(predicate, context) {
      return reify(this, skipWhileFactory(this, predicate, context, false));
    },

    zip: function(/*, ...iterables */) {
      var iterables = [this].concat(arrCopy(arguments));
      return reify(this, zipWithFactory(this, defaultZipper, iterables));
    },

    zipWith: function(zipper/*, ...iterables */) {
      var iterables = arrCopy(arguments);
      iterables[0] = this;
      return reify(this, zipWithFactory(this, zipper, iterables));
    }

  });

  IndexedIterable.prototype[IS_INDEXED_SENTINEL] = true;
  IndexedIterable.prototype[IS_ORDERED_SENTINEL] = true;



  mixin(SetIterable, {

    // ### ES6 Collection methods (ES6 Array and Map)

    get: function(value, notSetValue) {
      return this.has(value) ? value : notSetValue;
    },

    includes: function(value) {
      return this.has(value);
    },


    // ### More sequential methods

    keySeq: function() {
      return this.valueSeq();
    }

  });

  SetIterable.prototype.has = IterablePrototype.includes;
  SetIterable.prototype.contains = SetIterable.prototype.includes;


  // Mixin subclasses

  mixin(KeyedSeq, KeyedIterable.prototype);
  mixin(IndexedSeq, IndexedIterable.prototype);
  mixin(SetSeq, SetIterable.prototype);

  mixin(KeyedCollection, KeyedIterable.prototype);
  mixin(IndexedCollection, IndexedIterable.prototype);
  mixin(SetCollection, SetIterable.prototype);


  // #pragma Helper functions

  function keyMapper(v, k) {
    return k;
  }

  function entryMapper(v, k) {
    return [k, v];
  }

  function not(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    }
  }

  function neg(predicate) {
    return function() {
      return -predicate.apply(this, arguments);
    }
  }

  function quoteString(value) {
    return typeof value === 'string' ? JSON.stringify(value) : String(value);
  }

  function defaultZipper() {
    return arrCopy(arguments);
  }

  function defaultNegComparator(a, b) {
    return a < b ? 1 : a > b ? -1 : 0;
  }

  function hashIterable(iterable) {
    if (iterable.size === Infinity) {
      return 0;
    }
    var ordered = isOrdered(iterable);
    var keyed = isKeyed(iterable);
    var h = ordered ? 1 : 0;
    var size = iterable.__iterate(
      keyed ?
        ordered ?
          function(v, k)  { h = 31 * h + hashMerge(hash(v), hash(k)) | 0; } :
          function(v, k)  { h = h + hashMerge(hash(v), hash(k)) | 0; } :
        ordered ?
          function(v ) { h = 31 * h + hash(v) | 0; } :
          function(v ) { h = h + hash(v) | 0; }
    );
    return murmurHashOfSize(size, h);
  }

  function murmurHashOfSize(size, h) {
    h = imul(h, 0xCC9E2D51);
    h = imul(h << 15 | h >>> -15, 0x1B873593);
    h = imul(h << 13 | h >>> -13, 5);
    h = (h + 0xE6546B64 | 0) ^ size;
    h = imul(h ^ h >>> 16, 0x85EBCA6B);
    h = imul(h ^ h >>> 13, 0xC2B2AE35);
    h = smi(h ^ h >>> 16);
    return h;
  }

  function hashMerge(a, b) {
    return a ^ b + 0x9E3779B9 + (a << 6) + (a >> 2) | 0; // int
  }

  var Immutable = {

    Iterable: Iterable,

    Seq: Seq,
    Collection: Collection,
    Map: Map,
    OrderedMap: OrderedMap,
    List: List,
    Stack: Stack,
    Set: Set,
    OrderedSet: OrderedSet,

    Record: Record,
    Range: Range,
    Repeat: Repeat,

    is: is,
    fromJS: fromJS

  };

  return Immutable;

}));

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ "./node_modules/node-libs-browser/node_modules/buffer/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/node-libs-browser/node_modules/buffer/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
var ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
var isArray = __webpack_require__(/*! isarray */ "./node_modules/isarray/index.js")

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/safe-buffer/index.js":
/*!*******************************************!*\
  !*** ./node_modules/safe-buffer/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "./node_modules/node-libs-browser/node_modules/buffer/index.js")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.prototype = Object.create(Buffer.prototype)

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "./node_modules/string_decoder/lib/string_decoder.js":
/*!***********************************************************!*\
  !*** ./node_modules/string_decoder/lib/string_decoder.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



/*<replacement>*/

var Buffer = __webpack_require__(/*! safe-buffer */ "./node_modules/safe-buffer/index.js").Buffer;
/*</replacement>*/

var isEncoding = Buffer.isEncoding || function (encoding) {
  encoding = '' + encoding;
  switch (encoding && encoding.toLowerCase()) {
    case 'hex':case 'utf8':case 'utf-8':case 'ascii':case 'binary':case 'base64':case 'ucs2':case 'ucs-2':case 'utf16le':case 'utf-16le':case 'raw':
      return true;
    default:
      return false;
  }
};

function _normalizeEncoding(enc) {
  if (!enc) return 'utf8';
  var retried;
  while (true) {
    switch (enc) {
      case 'utf8':
      case 'utf-8':
        return 'utf8';
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return 'utf16le';
      case 'latin1':
      case 'binary':
        return 'latin1';
      case 'base64':
      case 'ascii':
      case 'hex':
        return enc;
      default:
        if (retried) return; // undefined
        enc = ('' + enc).toLowerCase();
        retried = true;
    }
  }
};

// Do not cache `Buffer.isEncoding` when checking encoding names as some
// modules monkey-patch it to support additional encodings
function normalizeEncoding(enc) {
  var nenc = _normalizeEncoding(enc);
  if (typeof nenc !== 'string' && (Buffer.isEncoding === isEncoding || !isEncoding(enc))) throw new Error('Unknown encoding: ' + enc);
  return nenc || enc;
}

// StringDecoder provides an interface for efficiently splitting a series of
// buffers into a series of JS strings without breaking apart multi-byte
// characters.
exports.StringDecoder = StringDecoder;
function StringDecoder(encoding) {
  this.encoding = normalizeEncoding(encoding);
  var nb;
  switch (this.encoding) {
    case 'utf16le':
      this.text = utf16Text;
      this.end = utf16End;
      nb = 4;
      break;
    case 'utf8':
      this.fillLast = utf8FillLast;
      nb = 4;
      break;
    case 'base64':
      this.text = base64Text;
      this.end = base64End;
      nb = 3;
      break;
    default:
      this.write = simpleWrite;
      this.end = simpleEnd;
      return;
  }
  this.lastNeed = 0;
  this.lastTotal = 0;
  this.lastChar = Buffer.allocUnsafe(nb);
}

StringDecoder.prototype.write = function (buf) {
  if (buf.length === 0) return '';
  var r;
  var i;
  if (this.lastNeed) {
    r = this.fillLast(buf);
    if (r === undefined) return '';
    i = this.lastNeed;
    this.lastNeed = 0;
  } else {
    i = 0;
  }
  if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
  return r || '';
};

StringDecoder.prototype.end = utf8End;

// Returns only complete characters in a Buffer
StringDecoder.prototype.text = utf8Text;

// Attempts to complete a partial non-UTF-8 character using bytes from a Buffer
StringDecoder.prototype.fillLast = function (buf) {
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
  this.lastNeed -= buf.length;
};

// Checks the type of a UTF-8 byte, whether it's ASCII, a leading byte, or a
// continuation byte. If an invalid byte is detected, -2 is returned.
function utf8CheckByte(byte) {
  if (byte <= 0x7F) return 0;else if (byte >> 5 === 0x06) return 2;else if (byte >> 4 === 0x0E) return 3;else if (byte >> 3 === 0x1E) return 4;
  return byte >> 6 === 0x02 ? -1 : -2;
}

// Checks at most 3 bytes at the end of a Buffer in order to detect an
// incomplete multi-byte UTF-8 character. The total number of bytes (2, 3, or 4)
// needed to complete the UTF-8 character (if applicable) are returned.
function utf8CheckIncomplete(self, buf, i) {
  var j = buf.length - 1;
  if (j < i) return 0;
  var nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 1;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) self.lastNeed = nb - 2;
    return nb;
  }
  if (--j < i || nb === -2) return 0;
  nb = utf8CheckByte(buf[j]);
  if (nb >= 0) {
    if (nb > 0) {
      if (nb === 2) nb = 0;else self.lastNeed = nb - 3;
    }
    return nb;
  }
  return 0;
}

// Validates as many continuation bytes for a multi-byte UTF-8 character as
// needed or are available. If we see a non-continuation byte where we expect
// one, we "replace" the validated continuation bytes we've seen so far with
// a single UTF-8 replacement character ('\ufffd'), to match v8's UTF-8 decoding
// behavior. The continuation byte check is included three times in the case
// where all of the continuation bytes for a character exist in the same buffer.
// It is also done this way as a slight performance increase instead of using a
// loop.
function utf8CheckExtraBytes(self, buf, p) {
  if ((buf[0] & 0xC0) !== 0x80) {
    self.lastNeed = 0;
    return '\ufffd';
  }
  if (self.lastNeed > 1 && buf.length > 1) {
    if ((buf[1] & 0xC0) !== 0x80) {
      self.lastNeed = 1;
      return '\ufffd';
    }
    if (self.lastNeed > 2 && buf.length > 2) {
      if ((buf[2] & 0xC0) !== 0x80) {
        self.lastNeed = 2;
        return '\ufffd';
      }
    }
  }
}

// Attempts to complete a multi-byte UTF-8 character using bytes from a Buffer.
function utf8FillLast(buf) {
  var p = this.lastTotal - this.lastNeed;
  var r = utf8CheckExtraBytes(this, buf, p);
  if (r !== undefined) return r;
  if (this.lastNeed <= buf.length) {
    buf.copy(this.lastChar, p, 0, this.lastNeed);
    return this.lastChar.toString(this.encoding, 0, this.lastTotal);
  }
  buf.copy(this.lastChar, p, 0, buf.length);
  this.lastNeed -= buf.length;
}

// Returns all complete UTF-8 characters in a Buffer. If the Buffer ended on a
// partial character, the character's bytes are buffered until the required
// number of bytes are available.
function utf8Text(buf, i) {
  var total = utf8CheckIncomplete(this, buf, i);
  if (!this.lastNeed) return buf.toString('utf8', i);
  this.lastTotal = total;
  var end = buf.length - (total - this.lastNeed);
  buf.copy(this.lastChar, 0, end);
  return buf.toString('utf8', i, end);
}

// For UTF-8, a replacement character is added when ending on a partial
// character.
function utf8End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + '\ufffd';
  return r;
}

// UTF-16LE typically needs two bytes per character, but even if we have an even
// number of bytes available, we need to check if we end on a leading/high
// surrogate. In that case, we need to wait for the next two bytes in order to
// decode the last character properly.
function utf16Text(buf, i) {
  if ((buf.length - i) % 2 === 0) {
    var r = buf.toString('utf16le', i);
    if (r) {
      var c = r.charCodeAt(r.length - 1);
      if (c >= 0xD800 && c <= 0xDBFF) {
        this.lastNeed = 2;
        this.lastTotal = 4;
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
        return r.slice(0, -1);
      }
    }
    return r;
  }
  this.lastNeed = 1;
  this.lastTotal = 2;
  this.lastChar[0] = buf[buf.length - 1];
  return buf.toString('utf16le', i, buf.length - 1);
}

// For UTF-16LE we do not explicitly append special replacement characters if we
// end on a partial character, we simply let v8 handle that.
function utf16End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) {
    var end = this.lastTotal - this.lastNeed;
    return r + this.lastChar.toString('utf16le', 0, end);
  }
  return r;
}

function base64Text(buf, i) {
  var n = (buf.length - i) % 3;
  if (n === 0) return buf.toString('base64', i);
  this.lastNeed = 3 - n;
  this.lastTotal = 3;
  if (n === 1) {
    this.lastChar[0] = buf[buf.length - 1];
  } else {
    this.lastChar[0] = buf[buf.length - 2];
    this.lastChar[1] = buf[buf.length - 1];
  }
  return buf.toString('base64', i, buf.length - n);
}

function base64End(buf) {
  var r = buf && buf.length ? this.write(buf) : '';
  if (this.lastNeed) return r + this.lastChar.toString('base64', 0, 3 - this.lastNeed);
  return r;
}

// Pass bytes on through for single-byte encodings (e.g. ascii, latin1, hex)
function simpleWrite(buf) {
  return buf.toString(this.encoding);
}

function simpleEnd(buf) {
  return buf && buf.length ? this.write(buf) : '';
}

/***/ }),

/***/ "./node_modules/transit-immutable-js/index.js":
/*!****************************************************!*\
  !*** ./node_modules/transit-immutable-js/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var transit = __webpack_require__(/*! transit-js */ "./node_modules/transit-js/transit.js");
var Immutable = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");

function createReader(handlers) {
  return transit.reader('json', {
    mapBuilder: {
      init: function() {
        return {};
      },
      add: function(m, k, v) {
        m[k] = v;
        return m;
      },
      finalize: function(m) {
        return m;
      }
    },
    handlers: handlers
  });
}

function createReaderHandlers(extras, recordMap, missingRecordHandler) {
  var handlers = {
    iM: function(v) {
      var m = Immutable.Map().asMutable();
      for (var i = 0; i < v.length; i += 2) {
        m = m.set(v[i], v[i + 1]);
      }
      return m.asImmutable();
    },
    iOM: function(v) {
      var m = Immutable.OrderedMap().asMutable();
      for (var i = 0; i < v.length; i += 2) {
        m = m.set(v[i], v[i + 1]);
      }
      return m.asImmutable();
    },
    iL: function(v) {
      return Immutable.List(v);
    },
    iS: function(v) {
      return Immutable.Set(v);
    },
    iOS: function(v) {
      return Immutable.OrderedSet(v);
    },
    iR: function(v) {
      var RecordType = recordMap[v.n];
      if (!RecordType) {
        return missingRecordHandler(v.n, v.v);
      }

      return new RecordType(v.v);
    }
  };
  extras.forEach(function(extra) {
    handlers[extra.tag] = extra.read;
  });
  return handlers;
}

function createWriter(handlers) {
  return transit.writer('json', {
    handlers: handlers
  });
}

function createWriterHandlers(extras, recordMap, predicate) {
  function mapSerializer(m) {
    var i = 0;
    if (predicate) {
      m = m.filter(predicate);
    }
    var a = new Array(2 * m.size);
    m.forEach(function(v, k) {
      a[i++] = k;
      a[i++] = v;
    });
    return a;
  }

  var handlers = transit.map([
    Immutable.Map, transit.makeWriteHandler({
      tag: function() {
        return 'iM';
      },
      rep: mapSerializer
    }),
    Immutable.OrderedMap, transit.makeWriteHandler({
      tag: function() {
        return 'iOM';
      },
      rep: mapSerializer
    }),
    Immutable.List, transit.makeWriteHandler({
      tag: function() {
        return "iL";
      },
      rep: function(v) {
        if (predicate) {
          v = v.filter(predicate);
        }
        return v.toArray();
      }
    }),
    Immutable.Set, transit.makeWriteHandler({
      tag: function() {
        return "iS";
      },
      rep: function(v) {
        if (predicate) {
          v = v.filter(predicate);
        }
        return v.toArray();
      }
    }),
    Immutable.OrderedSet, transit.makeWriteHandler({
      tag: function() {
        return "iOS";
      },
      rep: function(v) {
        if (predicate) {
          v = v.filter(predicate);
        }
        return v.toArray();
      }
    }),
    Function, transit.makeWriteHandler({
      tag: function() {
        return '_';
      },
      rep: function() {
        return null;
      }
    }),
    "default", transit.makeWriteHandler({
      tag: function() {
        return 'iM';
      },
      rep: function(m) {
        if (!('toMap' in m)) {
          var e = "Error serializing unrecognized object " + m.toString();
          throw new Error(e);
        }
        return mapSerializer(m.toMap());
      }
    })
  ]);

  Object.keys(recordMap).forEach(function(name) {
    handlers.set(recordMap[name], makeRecordHandler(name, predicate));
  });

  extras.forEach(function(extra) {
    handlers.set(extra.class, transit.makeWriteHandler({
      tag: function() { return extra.tag; },
      rep: extra.write
    }));
  });

  return handlers;
}

function validateExtras(extras) {
  if (!Array.isArray(extras)) {
    invalidExtras(extras, "Expected array of handlers, got %j");
  }
  extras.forEach(function(extra) {
    if (typeof extra.tag !== "string") {
      invalidExtras(extra,
        "Expected %j to have property 'tag' which is a string");
    }
    if (typeof extra.class !== "function") {
      invalidExtras(extra,
        "Expected %j to have property 'class' which is a constructor function");
    }
    if (typeof extra.write !== "function") {
      invalidExtras(extra,
        "Expected %j to have property 'write' which is a function");
    }
    if (typeof extra.read !== "function") {
      invalidExtras(extra,
        "Expected %j to have property 'write' which is a function");
    }
  });
}
function invalidExtras(data, msg) {
  var json = JSON.stringify(data);
  throw new Error(msg.replace("%j", json));
}

function recordName(record) {
  /* eslint no-underscore-dangle: 0 */
  return record._name || record.constructor.name || 'Record';
}

function makeRecordHandler(name) {
  return transit.makeWriteHandler({
    tag: function() {
      return 'iR';
    },
    rep: function(m) {
      return {
        n: name,
        v: m.toObject()
      };
    }
  });
}

function buildRecordMap(recordClasses) {
  var recordMap = {};

  recordClasses.forEach(function(RecordType) {
    var rec = new RecordType({});
    var recName = recordName(rec);

    if (!recName || recName === 'Record') {
      throw new Error('Cannot (de)serialize Record() without a name');
    }

    if (recordMap[recName]) {
      throw new Error('There\'s already a constructor for a Record named ' +
                      recName);
    }
    recordMap[recName] = RecordType;
  });

  return recordMap;
}

function defaultMissingRecordHandler(recName) {
  var msg = 'Tried to deserialize Record type named `' + recName + '`, ' +
            'but no type with that name was passed to withRecords()';
  throw new Error(msg);
}

function createInstanceFromHandlers(handlers) {
  var reader = createReader(handlers.read);
  var writer = createWriter(handlers.write);

  return {
    toJSON: function toJSON(data) {
      return writer.write(data);
    },
    fromJSON: function fromJSON(json) {
      return reader.read(json);
    },
    withExtraHandlers: function(extra) {
      return createInstanceFromHandlers(handlers.withExtraHandlers(extra));
    },
    withFilter: function(predicate) {
      return createInstanceFromHandlers(handlers.withFilter(predicate));
    },
    withRecords: function(recordClasses, missingRecordHandler) {
      return createInstanceFromHandlers(
        handlers.withRecords(recordClasses, missingRecordHandler)
      );
    }
  };
}

function createHandlers(options) {
  var records = options.records || {};
  var filter = options.filter || false;
  var missingRecordFn = options.missingRecordHandler
                          || defaultMissingRecordHandler;
  var extras = options.extras || [];

  return {
    read: createReaderHandlers(extras, records, missingRecordFn),
    write: createWriterHandlers(extras, records, filter),
    withExtraHandlers: function(moreExtras) {
      validateExtras(moreExtras);

      return createHandlers({
        extras: extras.concat(moreExtras),
        records: records,
        filter: filter,
        missingRecordHandler: missingRecordFn
      });
    },
    withFilter: function(newFilter) {
      return createHandlers({
        extras: extras,
        records: records,
        filter: newFilter,
        missingRecordHandler: missingRecordFn
      });
    },
    withRecords: function(recordClasses, missingRecordHandler) {
      var recordMap = buildRecordMap(recordClasses);
      return createHandlers({
        extras: extras,
        records: recordMap,
        filter: filter,
        missingRecordHandler: missingRecordHandler
      });
    }
  };
}

module.exports = createInstanceFromHandlers(createHandlers({}));
module.exports.handlers = createHandlers({});


/***/ }),

/***/ "./node_modules/transit-js/transit.js":
/*!********************************************!*\
  !*** ./node_modules/transit-js/transit.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// transit-js 0.8.862
// http://transit-format.org
// 
// Copyright 2014 Cognitect. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License..
var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.checkStringArgs = function(a, b, c) {
  if (null == a) {
    throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
  }
  if (b instanceof RegExp) {
    throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
  }
  return a + "";
};
$jscomp.defineProperty = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
$jscomp.getGlobal = function(a) {
  return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, b, c, d) {
  if (b) {
    c = $jscomp.global;
    a = a.split(".");
    for (d = 0; d < a.length - 1; d++) {
      var e = a[d];
      e in c || (c[e] = {});
      c = c[e];
    }
    a = a[a.length - 1];
    d = c[a];
    b = b(d);
    b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
  }
};
$jscomp.polyfill("String.prototype.repeat", function(a) {
  return a ? a : function(a) {
    var b = $jscomp.checkStringArgs(this, null, "repeat");
    if (0 > a || 1342177279 < a) {
      throw new RangeError("Invalid count value");
    }
    a |= 0;
    for (var d = ""; a;) {
      if (a & 1 && (d += b), a >>>= 1) {
        b += b;
      }
    }
    return d;
  };
}, "es6-impl", "es3");
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
  $jscomp.initSymbol = function() {
  };
  $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol);
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(a) {
  return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++;
};
$jscomp.initSymbolIterator = function() {
  $jscomp.initSymbol();
  var a = $jscomp.global.Symbol.iterator;
  a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return $jscomp.arrayIterator(this);
  }});
  $jscomp.initSymbolIterator = function() {
  };
};
$jscomp.arrayIterator = function(a) {
  var b = 0;
  return $jscomp.iteratorPrototype(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
};
$jscomp.iteratorPrototype = function(a) {
  $jscomp.initSymbolIterator();
  a = {next:a};
  a[$jscomp.global.Symbol.iterator] = function() {
    return this;
  };
  return a;
};
$jscomp.iteratorFromArray = function(a, b) {
  $jscomp.initSymbolIterator();
  a instanceof String && (a += "");
  var c = 0, d = {next:function() {
    if (c < a.length) {
      var e = c++;
      return {value:b(e, a[e]), done:!1};
    }
    d.next = function() {
      return {done:!0, value:void 0};
    };
    return d.next();
  }};
  d[Symbol.iterator] = function() {
    return d;
  };
  return d;
};
$jscomp.polyfill("Array.prototype.entries", function(a) {
  return a ? a : function() {
    return $jscomp.iteratorFromArray(this, function(a, c) {
      return [a, c];
    });
  };
}, "es6-impl", "es3");
$jscomp.polyfill("Array.prototype.keys", function(a) {
  return a ? a : function() {
    return $jscomp.iteratorFromArray(this, function(a) {
      return a;
    });
  };
}, "es6-impl", "es3");
$jscomp.polyfill("Array.prototype.values", function(a) {
  return a ? a : function() {
    return $jscomp.iteratorFromArray(this, function(a, c) {
      return c;
    });
  };
}, "es6", "es3");
var COMPILED = !0, goog = goog || {};
goog.global = this;
goog.isDef = function(a) {
  return void 0 !== a;
};
goog.exportPath_ = function(a, b, c) {
  a = a.split(".");
  c = c || goog.global;
  a[0] in c || !c.execScript || c.execScript("var " + a[0]);
  for (var d; a.length && (d = a.shift());) {
    !a.length && goog.isDef(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {};
  }
};
goog.define = function(a, b) {
  var c = b;
  COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, a) ? c = goog.global.CLOSURE_UNCOMPILED_DEFINES[a] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, a) && (c = goog.global.CLOSURE_DEFINES[a]));
  goog.exportPath_(a, c);
};
goog.DEBUG = !0;
goog.LOCALE = "en";
goog.TRUSTED_SITE = !0;
goog.STRICT_MODE_COMPATIBLE = !1;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1;
goog.provide = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.provide can not be used within a goog.module.");
  }
  if (!COMPILED && goog.isProvided_(a)) {
    throw Error('Namespace "' + a + '" already declared.');
  }
  goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
  if (!COMPILED) {
    delete goog.implicitNamespaces_[a];
    for (var c = a; (c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);) {
      goog.implicitNamespaces_[c] = !0;
    }
  }
  goog.exportPath_(a, b);
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
  if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) {
    throw Error("Invalid module identifier");
  }
  if (!goog.isInModuleLoader_()) {
    throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
  }
  if (goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module may only be called once per module.");
  }
  goog.moduleLoaderState_.moduleName = a;
  if (!COMPILED) {
    if (goog.isProvided_(a)) {
      throw Error('Namespace "' + a + '" already declared.');
    }
    delete goog.implicitNamespaces_[a];
  }
};
goog.module.get = function(a) {
  return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
  if (!COMPILED) {
    if (a in goog.loadedModules_) {
      return goog.loadedModules_[a];
    }
    if (!goog.implicitNamespaces_[a]) {
      return a = goog.getObjectByName(a), null != a ? a : null;
    }
  }
  return null;
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
  return null != goog.moduleLoaderState_;
};
goog.module.declareLegacyNamespace = function() {
  if (!COMPILED && !goog.isInModuleLoader_()) {
    throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
  }
  if (!COMPILED && !goog.moduleLoaderState_.moduleName) {
    throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
  }
  goog.moduleLoaderState_.declareLegacyNamespace = !0;
};
goog.setTestOnly = function(a) {
  if (goog.DISALLOW_TEST_ONLY_CODE) {
    throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
  }
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
  return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {"goog.module":!0});
goog.getObjectByName = function(a, b) {
  for (var c = a.split("."), d = b || goog.global, e; e = c.shift();) {
    if (goog.isDefAndNotNull(d[e])) {
      d = d[e];
    } else {
      return null;
    }
  }
  return d;
};
goog.globalize = function(a, b) {
  var c = b || goog.global, d;
  for (d in a) {
    c[d] = a[d];
  }
};
goog.addDependency = function(a, b, c, d) {
  if (goog.DEPENDENCIES_ENABLED) {
    var e;
    a = a.replace(/\\/g, "/");
    var f = goog.dependencies_;
    d && "boolean" !== typeof d || (d = d ? {module:"goog"} : {});
    for (var g = 0; e = b[g]; g++) {
      f.nameToPath[e] = a, f.loadFlags[a] = d;
    }
    for (d = 0; b = c[d]; d++) {
      a in f.requires || (f.requires[a] = {}), f.requires[a][b] = !0;
    }
  }
};
goog.ENABLE_DEBUG_LOADER = !0;
goog.logToConsole_ = function(a) {
  goog.global.console && goog.global.console.error(a);
};
goog.require = function(a) {
  if (!COMPILED) {
    goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(a);
    if (goog.isProvided_(a)) {
      if (goog.isInModuleLoader_()) {
        return goog.module.getInternal_(a);
      }
    } else {
      if (goog.ENABLE_DEBUG_LOADER) {
        var b = goog.getPathFromDeps_(a);
        if (b) {
          goog.writeScripts_(b);
        } else {
          throw a = "goog.require could not find: " + a, goog.logToConsole_(a), Error(a);
        }
      }
    }
    return null;
  }
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
  throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
  a.instance_ = void 0;
  a.getInstance = function() {
    if (a.instance_) {
      return a.instance_;
    }
    goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
    return a.instance_ = new a;
  };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = !0;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.TRANSPILER = "transpile.js";
goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {loadFlags:{}, nameToPath:{}, requires:{}, visited:{}, written:{}, deferred:{}}, goog.inHtmlDocument_ = function() {
  var a = goog.global.document;
  return null != a && "write" in a;
}, goog.findBasePath_ = function() {
  if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) {
    goog.basePath = goog.global.CLOSURE_BASE_PATH;
  } else {
    if (goog.inHtmlDocument_()) {
      for (var a = goog.global.document.getElementsByTagName("SCRIPT"), b = a.length - 1; 0 <= b; --b) {
        var c = a[b].src, d = c.lastIndexOf("?"), d = -1 == d ? c.length : d;
        if ("base.js" == c.substr(d - 7, 7)) {
          goog.basePath = c.substr(0, d - 7);
          break;
        }
      }
    }
  }
}, goog.importScript_ = function(a, b) {
  (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(a, b) && (goog.dependencies_.written[a] = !0);
}, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.oldIeWaiting_ = !1, goog.importProcessedScript_ = function(a, b, c) {
  goog.importScript_("", 'goog.retrieveAndExec_("' + a + '", ' + b + ", " + c + ");");
}, goog.queuedModules_ = [], goog.wrapModule_ = function(a, b) {
  return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(b + "\n//# sourceURL=" + a + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + b + "\n;return exports});\n//# sourceURL=" + a + "\n";
}, goog.loadQueuedModules_ = function() {
  var a = goog.queuedModules_.length;
  if (0 < a) {
    var b = goog.queuedModules_;
    goog.queuedModules_ = [];
    for (var c = 0; c < a; c++) {
      goog.maybeProcessDeferredPath_(b[c]);
    }
  }
  goog.oldIeWaiting_ = !1;
}, goog.maybeProcessDeferredDep_ = function(a) {
  goog.isDeferredModule_(a) && goog.allDepsAreAvailable_(a) && (a = goog.getPathFromDeps_(a), goog.maybeProcessDeferredPath_(goog.basePath + a));
}, goog.isDeferredModule_ = function(a) {
  var b = (a = goog.getPathFromDeps_(a)) && goog.dependencies_.loadFlags[a] || {}, c = b.lang || "es3";
  return a && ("goog" == b.module || goog.needsTranspile_(c)) ? goog.basePath + a in goog.dependencies_.deferred : !1;
}, goog.allDepsAreAvailable_ = function(a) {
  if ((a = goog.getPathFromDeps_(a)) && a in goog.dependencies_.requires) {
    for (var b in goog.dependencies_.requires[a]) {
      if (!goog.isProvided_(b) && !goog.isDeferredModule_(b)) {
        return !1;
      }
    }
  }
  return !0;
}, goog.maybeProcessDeferredPath_ = function(a) {
  if (a in goog.dependencies_.deferred) {
    var b = goog.dependencies_.deferred[a];
    delete goog.dependencies_.deferred[a];
    goog.globalEval(b);
  }
}, goog.loadModuleFromUrl = function(a) {
  goog.retrieveAndExec_(a, !0, !1);
}, goog.writeScriptSrcNode_ = function(a) {
  goog.global.document.write('<script type="text/javascript" src="' + a + '">\x3c/script>');
}, goog.appendScriptSrcNode_ = function(a) {
  var b = goog.global.document, c = b.createElement("script");
  c.type = "text/javascript";
  c.src = a;
  c.defer = !1;
  c.async = !1;
  b.head.appendChild(c);
}, goog.writeScriptTag_ = function(a, b) {
  if (goog.inHtmlDocument_()) {
    var c = goog.global.document;
    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == c.readyState) {
      if (/\bdeps.js$/.test(a)) {
        return !1;
      }
      throw Error('Cannot write "' + a + '" after document load');
    }
    if (void 0 === b) {
      if (goog.IS_OLD_IE_) {
        goog.oldIeWaiting_ = !0;
        var d = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ";
        c.write('<script type="text/javascript" src="' + a + '"' + d + ">\x3c/script>");
      } else {
        goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(a) : goog.writeScriptSrcNode_(a);
      }
    } else {
      c.write('<script type="text/javascript">' + goog.protectScriptTag_(b) + "\x3c/script>");
    }
    return !0;
  }
  return !1;
}, goog.protectScriptTag_ = function(a) {
  return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.needsTranspile_ = function(a) {
  if ("always" == goog.TRANSPILE) {
    return !0;
  }
  if ("never" == goog.TRANSPILE) {
    return !1;
  }
  goog.requiresTranspilation_ || (goog.requiresTranspilation_ = goog.createRequiresTranspilation_());
  if (a in goog.requiresTranspilation_) {
    return goog.requiresTranspilation_[a];
  }
  throw Error("Unknown language mode: " + a);
}, goog.requiresTranspilation_ = null, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function(a, b) {
  "complete" == a.readyState && goog.lastNonModuleScriptIndex_ == b && goog.loadQueuedModules_();
  return !0;
}, goog.writeScripts_ = function(a) {
  function b(a) {
    if (!(a in e.written || a in e.visited)) {
      e.visited[a] = !0;
      if (a in e.requires) {
        for (var f in e.requires[a]) {
          if (!goog.isProvided_(f)) {
            if (f in e.nameToPath) {
              b(e.nameToPath[f]);
            } else {
              throw Error("Undefined nameToPath for " + f);
            }
          }
        }
      }
      a in d || (d[a] = !0, c.push(a));
    }
  }
  var c = [], d = {}, e = goog.dependencies_;
  b(a);
  for (var f = 0; f < c.length; f++) {
    a = c[f], goog.dependencies_.written[a] = !0;
  }
  var g = goog.moduleLoaderState_;
  goog.moduleLoaderState_ = null;
  for (f = 0; f < c.length; f++) {
    if (a = c[f]) {
      var h = e.loadFlags[a] || {}, k = goog.needsTranspile_(h.lang || "es3");
      "goog" == h.module || k ? goog.importProcessedScript_(goog.basePath + a, "goog" == h.module, k) : goog.importScript_(goog.basePath + a);
    } else {
      throw goog.moduleLoaderState_ = g, Error("Undefined script input");
    }
  }
  goog.moduleLoaderState_ = g;
}, goog.getPathFromDeps_ = function(a) {
  return a in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[a] : null;
}, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js"));
goog.hasBadLetScoping = null;
goog.useSafari10Workaround = function() {
  if (null == goog.hasBadLetScoping) {
    try {
      var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
    } catch (b) {
      a = !1;
    }
    goog.hasBadLetScoping = a;
  }
  return goog.hasBadLetScoping;
};
goog.workaroundSafari10EvalBug = function(a) {
  return "(function(){" + a + "\n;})();\n";
};
goog.loadModule = function(a) {
  var b = goog.moduleLoaderState_;
  try {
    goog.moduleLoaderState_ = {moduleName:void 0, declareLegacyNamespace:!1};
    if (goog.isFunction(a)) {
      var c = a.call(void 0, {});
    } else {
      if (goog.isString(a)) {
        goog.useSafari10Workaround() && (a = goog.workaroundSafari10EvalBug(a)), c = goog.loadModuleFromSource_.call(void 0, a);
      } else {
        throw Error("Invalid module definition");
      }
    }
    var d = goog.moduleLoaderState_.moduleName;
    if (!goog.isString(d) || !d) {
      throw Error('Invalid module name "' + d + '"');
    }
    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c && null != c && Object.seal(c);
    goog.loadedModules_[d] = c;
  } finally {
    goog.moduleLoaderState_ = b;
  }
};
goog.loadModuleFromSource_ = function(a) {
  eval(a);
  return {};
};
goog.normalizePath_ = function(a) {
  a = a.split("/");
  for (var b = 0; b < a.length;) {
    "." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
  }
  return a.join("/");
};
goog.loadFileSync_ = function(a) {
  if (goog.global.CLOSURE_LOAD_FILE_SYNC) {
    return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
  }
  try {
    var b = new goog.global.XMLHttpRequest;
    b.open("get", a, !1);
    b.send();
    return 0 == b.status || 200 == b.status ? b.responseText : null;
  } catch (c) {
    return null;
  }
};
goog.retrieveAndExec_ = function(a, b, c) {
  if (!COMPILED) {
    var d = a;
    a = goog.normalizePath_(a);
    var e = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, f = goog.loadFileSync_(a);
    if (null == f) {
      throw Error('Load of "' + a + '" failed');
    }
    c && (f = goog.transpile_.call(goog.global, f, a));
    f = b ? goog.wrapModule_(a, f) : f + ("\n//# sourceURL=" + a);
    goog.IS_OLD_IE_ && goog.oldIeWaiting_ ? (goog.dependencies_.deferred[d] = f, goog.queuedModules_.push(d)) : e(a, f);
  }
};
goog.transpile_ = function(a, b) {
  var c = goog.global.$jscomp;
  c || (goog.global.$jscomp = c = {});
  var d = c.transpile;
  if (!d) {
    var e = goog.basePath + goog.TRANSPILER, f = goog.loadFileSync_(e);
    if (f) {
      eval(f + "\n//# sourceURL=" + e);
      if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) {
        throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
      }
      goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
      c = goog.global.$jscomp;
      d = c.transpile;
    }
  }
  d || (d = c.transpile = function(a, b) {
    goog.logToConsole_(b + " requires transpilation but no transpiler was found.");
    return a;
  });
  return d(a, b);
};
goog.typeOf = function(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
};
goog.isNull = function(a) {
  return null === a;
};
goog.isDefAndNotNull = function(a) {
  return null != a;
};
goog.isArray = function(a) {
  return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
  var b = goog.typeOf(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
  return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isString = function(a) {
  return "string" == typeof a;
};
goog.isBoolean = function(a) {
  return "boolean" == typeof a;
};
goog.isNumber = function(a) {
  return "number" == typeof a;
};
goog.isFunction = function(a) {
  return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
  return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
  return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
  null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
  try {
    delete a[goog.UID_PROPERTY_];
  } catch (b) {
  }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (a.clone) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.cloneObject(a[c]);
    }
    return b;
  }
  return a;
};
goog.bindNative_ = function(a, b, c) {
  return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
};
goog.bind = function(a, b, c) {
  Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
  return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
  var c = Array.prototype.slice.call(arguments, 1);
  return function() {
    var b = c.slice();
    b.push.apply(b, arguments);
    return a.apply(this, b);
  };
};
goog.mixin = function(a, b) {
  for (var c in b) {
    a[c] = b[c];
  }
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
  return +new Date;
};
goog.globalEval = function(a) {
  if (goog.global.execScript) {
    goog.global.execScript(a, "JavaScript");
  } else {
    if (goog.global.eval) {
      if (null == goog.evalWorksForGlobals_) {
        if (goog.global.eval("var _evalTest_ = 1;"), "undefined" != typeof goog.global._evalTest_) {
          try {
            delete goog.global._evalTest_;
          } catch (d) {
          }
          goog.evalWorksForGlobals_ = !0;
        } else {
          goog.evalWorksForGlobals_ = !1;
        }
      }
      if (goog.evalWorksForGlobals_) {
        goog.global.eval(a);
      } else {
        var b = goog.global.document, c = b.createElement("SCRIPT");
        c.type = "text/javascript";
        c.defer = !1;
        c.appendChild(b.createTextNode(a));
        b.body.appendChild(c);
        b.body.removeChild(c);
      }
    } else {
      throw Error("goog.globalEval not available");
    }
  }
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
  if ("." == String(a).charAt(0)) {
    throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
  }
  var c = function(a) {
    return goog.cssNameMapping_[a] || a;
  }, d = function(a) {
    a = a.split("-");
    for (var b = [], d = 0; d < a.length; d++) {
      b.push(c(a[d]));
    }
    return b.join("-");
  }, d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a) {
    return a;
  }, d = b ? a + "-" + d(b) : d(a);
  return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(d) : d;
};
goog.setCssNameMapping = function(a, b) {
  goog.cssNameMapping_ = a;
  goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b) {
  b && (a = a.replace(/\{\$([^}]+)}/g, function(a, d) {
    return null != b && d in b ? b[d] : a;
  }));
  return a;
};
goog.getMsgWithFallback = function(a, b) {
  return a;
};
goog.exportSymbol = function(a, b, c) {
  goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
  a[b] = c;
};
goog.inherits = function(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.superClass_ = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.base = function(a, c, f) {
    for (var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++) {
      d[e - 2] = arguments[e];
    }
    return b.prototype[c].apply(a, d);
  };
};
goog.base = function(a, b, c) {
  var d = arguments.callee.caller;
  if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) {
    throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
  }
  if (d.superClass_) {
    for (var e = Array(arguments.length - 1), f = 1; f < arguments.length; f++) {
      e[f - 1] = arguments[f];
    }
    return d.superClass_.constructor.apply(a, e);
  }
  e = Array(arguments.length - 2);
  for (f = 2; f < arguments.length; f++) {
    e[f - 2] = arguments[f];
  }
  for (var f = !1, g = a.constructor; g; g = g.superClass_ && g.superClass_.constructor) {
    if (g.prototype[b] === d) {
      f = !0;
    } else {
      if (f) {
        return g.prototype[b].apply(a, e);
      }
    }
  }
  if (a[b] === d) {
    return a.constructor.prototype[b].apply(a, e);
  }
  throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
  if (goog.isInModuleLoader_()) {
    throw Error("goog.scope is not supported within a goog.module.");
  }
  a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
  var c = b.constructor, d = b.statics;
  c && c != Object.prototype.constructor || (c = function() {
    throw Error("cannot instantiate an interface (no constructor defined).");
  });
  c = goog.defineClass.createSealingConstructor_(c, a);
  a && goog.inherits(c, a);
  delete b.constructor;
  delete b.statics;
  goog.defineClass.applyProperties_(c.prototype, b);
  null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
  return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
  if (!goog.defineClass.SEAL_CLASS_INSTANCES) {
    return a;
  }
  var c = !goog.defineClass.isUnsealable_(b), d = function() {
    var b = a.apply(this, arguments) || this;
    b[goog.UID_PROPERTY_] = b[goog.UID_PROPERTY_];
    this.constructor === d && c && Object.seal instanceof Function && Object.seal(b);
    return b;
  };
  return d;
};
goog.defineClass.isUnsealable_ = function(a) {
  return a && a.prototype && a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
  for (var c in b) {
    Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
  for (var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++) {
    c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
  }
};
goog.tagUnsealableClass = function(a) {
  !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
goog.createRequiresTranspilation_ = function() {
  function a(a, b) {
    d ? c[a] = !0 : b() ? c[a] = !1 : d = c[a] = !0;
  }
  function b(a) {
    try {
      return !!eval(a);
    } catch (g) {
      return !1;
    }
  }
  var c = {es3:!1}, d = !1, e = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
  a("es5", function() {
    return b("[1,].length==1");
  });
  a("es6", function() {
    var a = e.match(/Edge\/(\d+)(\.\d)*/i);
    return a && 15 > Number(a[1]) ? !1 : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
  });
  a("es6-impl", function() {
    return !0;
  });
  a("es7", function() {
    return b("2 ** 2 == 4");
  });
  a("es8", function() {
    return b("async () => 1, true");
  });
  return c;
};
goog.debug = {};
goog.debug.Error = function(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, goog.debug.Error);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
  this.reportErrorToServer = !0;
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.dom = {};
goog.dom.NodeType = {ELEMENT:1, ATTRIBUTE:2, TEXT:3, CDATA_SECTION:4, ENTITY_REFERENCE:5, ENTITY:6, PROCESSING_INSTRUCTION:7, COMMENT:8, DOCUMENT:9, DOCUMENT_TYPE:10, DOCUMENT_FRAGMENT:11, NOTATION:12};
goog.string = {};
goog.string.DETECT_DOUBLE_ESCAPING = !1;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1;
goog.string.Unicode = {NBSP:"\u00a0"};
goog.string.startsWith = function(a, b) {
  return 0 == a.lastIndexOf(b, 0);
};
goog.string.endsWith = function(a, b) {
  var c = a.length - b.length;
  return 0 <= c && a.indexOf(b, c) == c;
};
goog.string.caseInsensitiveStartsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(0, b.length));
};
goog.string.caseInsensitiveEndsWith = function(a, b) {
  return 0 == goog.string.caseInsensitiveCompare(b, a.substr(a.length - b.length, b.length));
};
goog.string.caseInsensitiveEquals = function(a, b) {
  return a.toLowerCase() == b.toLowerCase();
};
goog.string.subs = function(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
};
goog.string.collapseWhitespace = function(a) {
  return a.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = function(a) {
  return /^[\s\xa0]*$/.test(a);
};
goog.string.isEmptyString = function(a) {
  return 0 == a.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(a) {
  return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(a) {
  return !/[^\t\n\r ]/.test(a);
};
goog.string.isAlpha = function(a) {
  return !/[^a-zA-Z]/.test(a);
};
goog.string.isNumeric = function(a) {
  return !/[^0-9]/.test(a);
};
goog.string.isAlphaNumeric = function(a) {
  return !/[^a-zA-Z0-9]/.test(a);
};
goog.string.isSpace = function(a) {
  return " " == a;
};
goog.string.isUnicodeChar = function(a) {
  return 1 == a.length && " " <= a && "~" >= a || "\u0080" <= a && "\ufffd" >= a;
};
goog.string.stripNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(a) {
  return a.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(a) {
  return a.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(a) {
  return a.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(a) {
  return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a) {
  return a.trim();
} : function(a) {
  return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
};
goog.string.trimLeft = function(a) {
  return a.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(a) {
  return a.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = function(a, b) {
  var c = String(a).toLowerCase(), d = String(b).toLowerCase();
  return c < d ? -1 : c == d ? 0 : 1;
};
goog.string.numberAwareCompare_ = function(a, b, c) {
  if (a == b) {
    return 0;
  }
  if (!a) {
    return -1;
  }
  if (!b) {
    return 1;
  }
  for (var d = a.toLowerCase().match(c), e = b.toLowerCase().match(c), f = Math.min(d.length, e.length), g = 0; g < f; g++) {
    c = d[g];
    var h = e[g];
    if (c != h) {
      return a = parseInt(c, 10), !isNaN(a) && (b = parseInt(h, 10), !isNaN(b) && a - b) ? a - b : c < h ? -1 : 1;
    }
  }
  return d.length != e.length ? d.length - e.length : a < b ? -1 : 1;
};
goog.string.intAwareCompare = function(a, b) {
  return goog.string.numberAwareCompare_(a, b, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function(a, b) {
  return goog.string.numberAwareCompare_(a, b, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function(a) {
  return encodeURIComponent(String(a));
};
goog.string.urlDecode = function(a) {
  return decodeURIComponent(a.replace(/\+/g, " "));
};
goog.string.newLineToBr = function(a, b) {
  return a.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
};
goog.string.htmlEscape = function(a, b) {
  if (b) {
    a = a.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (a = a.replace(goog.string.E_RE_, "&#101;"));
  } else {
    if (!goog.string.ALL_RE_.test(a)) {
      return a;
    }
    -1 != a.indexOf("&") && (a = a.replace(goog.string.AMP_RE_, "&amp;"));
    -1 != a.indexOf("<") && (a = a.replace(goog.string.LT_RE_, "&lt;"));
    -1 != a.indexOf(">") && (a = a.replace(goog.string.GT_RE_, "&gt;"));
    -1 != a.indexOf('"') && (a = a.replace(goog.string.QUOT_RE_, "&quot;"));
    -1 != a.indexOf("'") && (a = a.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;"));
    -1 != a.indexOf("\x00") && (a = a.replace(goog.string.NULL_RE_, "&#0;"));
    goog.string.DETECT_DOUBLE_ESCAPING && -1 != a.indexOf("e") && (a = a.replace(goog.string.E_RE_, "&#101;"));
  }
  return a;
};
goog.string.AMP_RE_ = /&/g;
goog.string.LT_RE_ = /</g;
goog.string.GT_RE_ = />/g;
goog.string.QUOT_RE_ = /"/g;
goog.string.SINGLE_QUOTE_RE_ = /'/g;
goog.string.NULL_RE_ = /\x00/g;
goog.string.E_RE_ = /e/g;
goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/;
goog.string.unescapeEntities = function(a) {
  return goog.string.contains(a, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a) : goog.string.unescapePureXmlEntities_(a) : a;
};
goog.string.unescapeEntitiesWithDocument = function(a, b) {
  return goog.string.contains(a, "&") ? goog.string.unescapeEntitiesUsingDom_(a, b) : a;
};
goog.string.unescapeEntitiesUsingDom_ = function(a, b) {
  var c = {"&amp;":"&", "&lt;":"<", "&gt;":">", "&quot;":'"'};
  var d = b ? b.createElement("div") : goog.global.document.createElement("div");
  return a.replace(goog.string.HTML_ENTITY_PATTERN_, function(a, b) {
    var e = c[a];
    if (e) {
      return e;
    }
    if ("#" == b.charAt(0)) {
      var f = Number("0" + b.substr(1));
      isNaN(f) || (e = String.fromCharCode(f));
    }
    e || (d.innerHTML = a + " ", e = d.firstChild.nodeValue.slice(0, -1));
    return c[a] = e;
  });
};
goog.string.unescapePureXmlEntities_ = function(a) {
  return a.replace(/&([^;]+);/g, function(a, c) {
    switch(c) {
      case "amp":
        return "&";
      case "lt":
        return "<";
      case "gt":
        return ">";
      case "quot":
        return '"';
      default:
        if ("#" == c.charAt(0)) {
          var b = Number("0" + c.substr(1));
          if (!isNaN(b)) {
            return String.fromCharCode(b);
          }
        }
        return a;
    }
  });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(a, b) {
  return goog.string.newLineToBr(a.replace(/  /g, " &#160;"), b);
};
goog.string.preserveSpaces = function(a) {
  return a.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(a, b) {
  for (var c = b.length, d = 0; d < c; d++) {
    var e = 1 == c ? b : b.charAt(d);
    if (a.charAt(0) == e && a.charAt(a.length - 1) == e) {
      return a.substring(1, a.length - 1);
    }
  }
  return a;
};
goog.string.truncate = function(a, b, c) {
  c && (a = goog.string.unescapeEntities(a));
  a.length > b && (a = a.substring(0, b - 3) + "...");
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.truncateMiddle = function(a, b, c, d) {
  c && (a = goog.string.unescapeEntities(a));
  if (d && a.length > b) {
    d > b && (d = b);
    var e = a.length - d;
    a = a.substring(0, b - d) + "..." + a.substring(e);
  } else {
    a.length > b && (d = Math.floor(b / 2), e = a.length - d, a = a.substring(0, d + b % 2) + "..." + a.substring(e));
  }
  c && (a = goog.string.htmlEscape(a));
  return a;
};
goog.string.specialEscapeChars_ = {"\x00":"\\0", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t", "\x0B":"\\x0B", '"':'\\"', "\\":"\\\\", "<":"<"};
goog.string.jsEscapeCache_ = {"'":"\\'"};
goog.string.quote = function(a) {
  a = String(a);
  for (var b = ['"'], c = 0; c < a.length; c++) {
    var d = a.charAt(c), e = d.charCodeAt(0);
    b[c + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
  }
  b.push('"');
  return b.join("");
};
goog.string.escapeString = function(a) {
  for (var b = [], c = 0; c < a.length; c++) {
    b[c] = goog.string.escapeChar(a.charAt(c));
  }
  return b.join("");
};
goog.string.escapeChar = function(a) {
  if (a in goog.string.jsEscapeCache_) {
    return goog.string.jsEscapeCache_[a];
  }
  if (a in goog.string.specialEscapeChars_) {
    return goog.string.jsEscapeCache_[a] = goog.string.specialEscapeChars_[a];
  }
  var b = a.charCodeAt(0);
  if (31 < b && 127 > b) {
    var c = a;
  } else {
    if (256 > b) {
      if (c = "\\x", 16 > b || 256 < b) {
        c += "0";
      }
    } else {
      c = "\\u", 4096 > b && (c += "0");
    }
    c += b.toString(16).toUpperCase();
  }
  return goog.string.jsEscapeCache_[a] = c;
};
goog.string.contains = function(a, b) {
  return -1 != a.indexOf(b);
};
goog.string.caseInsensitiveContains = function(a, b) {
  return goog.string.contains(a.toLowerCase(), b.toLowerCase());
};
goog.string.countOf = function(a, b) {
  return a && b ? a.split(b).length - 1 : 0;
};
goog.string.removeAt = function(a, b, c) {
  var d = a;
  0 <= b && b < a.length && 0 < c && (d = a.substr(0, b) + a.substr(b + c, a.length - b - c));
  return d;
};
goog.string.remove = function(a, b) {
  return a.replace(b, "");
};
goog.string.removeAll = function(a, b) {
  var c = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(c, "");
};
goog.string.replaceAll = function(a, b, c) {
  b = new RegExp(goog.string.regExpEscape(b), "g");
  return a.replace(b, c.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function(a) {
  return String(a).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function(a, b) {
  return a.repeat(b);
} : function(a, b) {
  return Array(b + 1).join(a);
};
goog.string.padNumber = function(a, b, c) {
  a = goog.isDef(c) ? a.toFixed(c) : String(a);
  c = a.indexOf(".");
  -1 == c && (c = a.length);
  return goog.string.repeat("0", Math.max(0, b - c)) + a;
};
goog.string.makeSafe = function(a) {
  return null == a ? "" : String(a);
};
goog.string.buildString = function(a) {
  return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
  return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = function(a, b) {
  for (var c = 0, d = goog.string.trim(String(a)).split("."), e = goog.string.trim(String(b)).split("."), f = Math.max(d.length, e.length), g = 0; 0 == c && g < f; g++) {
    var h = d[g] || "", k = e[g] || "";
    do {
      h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
      k = /(\d*)(\D*)(.*)/.exec(k) || ["", "", "", ""];
      if (0 == h[0].length && 0 == k[0].length) {
        break;
      }
      var c = 0 == h[1].length ? 0 : parseInt(h[1], 10), m = 0 == k[1].length ? 0 : parseInt(k[1], 10), c = goog.string.compareElements_(c, m) || goog.string.compareElements_(0 == h[2].length, 0 == k[2].length) || goog.string.compareElements_(h[2], k[2]), h = h[3], k = k[3];
    } while (0 == c);
  }
  return c;
};
goog.string.compareElements_ = function(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
};
goog.string.hashCode = function(a) {
  for (var b = 0, c = 0; c < a.length; ++c) {
    b = 31 * b + a.charCodeAt(c) >>> 0;
  }
  return b;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
  return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(a) {
  var b = Number(a);
  return 0 == b && goog.string.isEmptyOrWhitespace(a) ? NaN : b;
};
goog.string.isLowerCamelCase = function(a) {
  return /^[a-z]+([A-Z][a-z]*)*$/.test(a);
};
goog.string.isUpperCamelCase = function(a) {
  return /^([A-Z][a-z]*)+$/.test(a);
};
goog.string.toCamelCase = function(a) {
  return String(a).replace(/\-([a-z])/g, function(a, c) {
    return c.toUpperCase();
  });
};
goog.string.toSelectorCase = function(a) {
  return String(a).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(a, b) {
  var c = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
  return a.replace(new RegExp("(^" + (c ? "|[" + c + "]+" : "") + ")([a-z])", "g"), function(a, b, c) {
    return b + c.toUpperCase();
  });
};
goog.string.capitalize = function(a) {
  return String(a.charAt(0)).toUpperCase() + String(a.substr(1)).toLowerCase();
};
goog.string.parseInt = function(a) {
  isFinite(a) && (a = String(a));
  return goog.isString(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN;
};
goog.string.splitLimit = function(a, b, c) {
  a = a.split(b);
  for (var d = []; 0 < c && a.length;) {
    d.push(a.shift()), c--;
  }
  a.length && d.push(a.join(b));
  return d;
};
goog.string.lastComponent = function(a, b) {
  if (b) {
    "string" == typeof b && (b = [b]);
  } else {
    return a;
  }
  for (var c = -1, d = 0; d < b.length; d++) {
    if ("" != b[d]) {
      var e = a.lastIndexOf(b[d]);
      e > c && (c = e);
    }
  }
  return -1 == c ? a : a.slice(c + 1);
};
goog.string.editDistance = function(a, b) {
  var c = [], d = [];
  if (a == b) {
    return 0;
  }
  if (!a.length || !b.length) {
    return Math.max(a.length, b.length);
  }
  for (var e = 0; e < b.length + 1; e++) {
    c[e] = e;
  }
  for (e = 0; e < a.length; e++) {
    d[0] = e + 1;
    for (var f = 0; f < b.length; f++) {
      d[f + 1] = Math.min(d[f] + 1, c[f + 1] + 1, c[f] + Number(a[e] != b[f]));
    }
    for (f = 0; f < c.length; f++) {
      c[f] = d[f];
    }
  }
  return d[b.length];
};
goog.asserts = {};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
  b.unshift(a);
  goog.debug.Error.call(this, goog.string.subs.apply(null, b));
  b.shift();
  this.messagePattern = a;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
  throw a;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.doAssertFailure_ = function(a, b, c, d) {
  var e = "Assertion failed";
  if (c) {
    e += ": " + c;
    var f = d;
  } else {
    a && (e += ": " + a, f = b);
  }
  a = new goog.asserts.AssertionError("" + e, f || []);
  goog.asserts.errorHandler_(a);
};
goog.asserts.setErrorHandler = function(a) {
  goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
};
goog.asserts.assert = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.fail = function(a, b) {
  goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertString = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertFunction = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertObject = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertArray = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertBoolean = function(a, b, c) {
  goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertElement = function(a, b, c) {
  !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(a), a], b, Array.prototype.slice.call(arguments, 2));
  return a;
};
goog.asserts.assertInstanceof = function(a, b, c, d) {
  !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(b), goog.asserts.getType_(a)], c, Array.prototype.slice.call(arguments, 3));
  return a;
};
goog.asserts.assertObjectPrototypeIsIntact = function() {
  for (var a in Object.prototype) {
    goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
  }
};
goog.asserts.getType_ = function(a) {
  return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
goog.object = {};
goog.object.is = function(a, b) {
  return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
};
goog.object.forEach = function(a, b, c) {
  for (var d in a) {
    b.call(c, a[d], d, a);
  }
};
goog.object.filter = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    b.call(c, a[e], e, a) && (d[e] = a[e]);
  }
  return d;
};
goog.object.map = function(a, b, c) {
  var d = {}, e;
  for (e in a) {
    d[e] = b.call(c, a[e], e, a);
  }
  return d;
};
goog.object.some = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return !0;
    }
  }
  return !1;
};
goog.object.every = function(a, b, c) {
  for (var d in a) {
    if (!b.call(c, a[d], d, a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.getCount = function(a) {
  var b = 0, c;
  for (c in a) {
    b++;
  }
  return b;
};
goog.object.getAnyKey = function(a) {
  for (var b in a) {
    return b;
  }
};
goog.object.getAnyValue = function(a) {
  for (var b in a) {
    return a[b];
  }
};
goog.object.contains = function(a, b) {
  return goog.object.containsValue(a, b);
};
goog.object.getValues = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = a[d];
  }
  return b;
};
goog.object.getKeys = function(a) {
  var b = [], c = 0, d;
  for (d in a) {
    b[c++] = d;
  }
  return b;
};
goog.object.getValueByKeys = function(a, b) {
  for (var c = goog.isArrayLike(b), d = c ? b : arguments, c = c ? 0 : 1; c < d.length && (a = a[d[c]], goog.isDef(a)); c++) {
  }
  return a;
};
goog.object.containsKey = function(a, b) {
  return null !== a && b in a;
};
goog.object.containsValue = function(a, b) {
  for (var c in a) {
    if (a[c] == b) {
      return !0;
    }
  }
  return !1;
};
goog.object.findKey = function(a, b, c) {
  for (var d in a) {
    if (b.call(c, a[d], d, a)) {
      return d;
    }
  }
};
goog.object.findValue = function(a, b, c) {
  return (b = goog.object.findKey(a, b, c)) && a[b];
};
goog.object.isEmpty = function(a) {
  for (var b in a) {
    return !1;
  }
  return !0;
};
goog.object.clear = function(a) {
  for (var b in a) {
    delete a[b];
  }
};
goog.object.remove = function(a, b) {
  var c;
  (c = b in a) && delete a[b];
  return c;
};
goog.object.add = function(a, b, c) {
  if (null !== a && b in a) {
    throw Error('The object already contains the key "' + b + '"');
  }
  goog.object.set(a, b, c);
};
goog.object.get = function(a, b, c) {
  return null !== a && b in a ? a[b] : c;
};
goog.object.set = function(a, b, c) {
  a[b] = c;
};
goog.object.setIfUndefined = function(a, b, c) {
  return b in a ? a[b] : a[b] = c;
};
goog.object.setWithReturnValueIfNotSet = function(a, b, c) {
  if (b in a) {
    return a[b];
  }
  c = c();
  return a[b] = c;
};
goog.object.equals = function(a, b) {
  for (var c in a) {
    if (!(c in b) || a[c] !== b[c]) {
      return !1;
    }
  }
  for (c in b) {
    if (!(c in a)) {
      return !1;
    }
  }
  return !0;
};
goog.object.clone = function(a) {
  var b = {}, c;
  for (c in a) {
    b[c] = a[c];
  }
  return b;
};
goog.object.unsafeClone = function(a) {
  var b = goog.typeOf(a);
  if ("object" == b || "array" == b) {
    if (goog.isFunction(a.clone)) {
      return a.clone();
    }
    var b = "array" == b ? [] : {}, c;
    for (c in a) {
      b[c] = goog.object.unsafeClone(a[c]);
    }
    return b;
  }
  return a;
};
goog.object.transpose = function(a) {
  var b = {}, c;
  for (c in a) {
    b[a[c]] = c;
  }
  return b;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
  for (var c, d, e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d) {
      a[c] = d[c];
    }
    for (var f = 0; f < goog.object.PROTOTYPE_FIELDS_.length; f++) {
      c = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
  }
};
goog.object.create = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.create.apply(null, arguments[0]);
  }
  if (b % 2) {
    throw Error("Uneven number of arguments");
  }
  for (var c = {}, d = 0; d < b; d += 2) {
    c[arguments[d]] = arguments[d + 1];
  }
  return c;
};
goog.object.createSet = function(a) {
  var b = arguments.length;
  if (1 == b && goog.isArray(arguments[0])) {
    return goog.object.createSet.apply(null, arguments[0]);
  }
  for (var c = {}, d = 0; d < b; d++) {
    c[arguments[d]] = !0;
  }
  return c;
};
goog.object.createImmutableView = function(a) {
  var b = a;
  Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
  return b;
};
goog.object.isImmutableView = function(a) {
  return !!Object.isFrozen && Object.isFrozen(a);
};
goog.object.getAllPropertyNames = function(a, b, c) {
  if (!a) {
    return [];
  }
  if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) {
    return goog.object.getKeys(a);
  }
  for (var d = {}; a && (a !== Object.prototype || b) && (a !== Function.prototype || c);) {
    for (var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++) {
      d[e[f]] = !0;
    }
    a = Object.getPrototypeOf(a);
  }
  return goog.object.getKeys(d);
};
goog.reflect = {};
goog.reflect.object = function(a, b) {
  return b;
};
goog.reflect.objectProperty = function(a, b) {
  return a;
};
goog.reflect.sinkValue = function(a) {
  goog.reflect.sinkValue[" "](a);
  return a;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(a, b) {
  try {
    return goog.reflect.sinkValue(a[b]), !0;
  } catch (c) {
  }
  return !1;
};
goog.reflect.cache = function(a, b, c, d) {
  d = d ? d(b) : b;
  return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
};
goog.math = {};
goog.math.Long = function(a, b) {
  this.low_ = a | 0;
  this.high_ = b | 0;
};
goog.math.Long.IntCache_ = {};
goog.math.Long.valueCache_ = {};
goog.math.Long.getCachedIntValue_ = function(a) {
  return goog.reflect.cache(goog.math.Long.IntCache_, a, function(a) {
    return new goog.math.Long(a, 0 > a ? -1 : 0);
  });
};
goog.math.Long.MAX_VALUE_FOR_RADIX_ = "  111111111111111111111111111111111111111111111111111111111111111 2021110011022210012102010021220101220221 13333333333333333333333333333333 1104332401304422434310311212 1540241003031030222122211 22341010611245052052300 777777777777777777777 67404283172107811827 9223372036854775807 1728002635214590697 41a792678515120367 10b269549075433c37 4340724c6c71dc7a7 160e2ad3246366807 7fffffffffffffff 33d3d8307b214008 16agh595df825fa7 ba643dci0ffeehh 5cbfjia3fh26ja7 2heiciiie82dh97 1adaibb21dckfa7 i6k448cf4192c2 acd772jnc9l0l7 64ie1focnn5g77 3igoecjbmca687 27c48l5b37oaop 1bk39f3ah3dmq7 q1se8f0m04isb hajppbc1fc207 bm03i95hia437 7vvvvvvvvvvvv 5hg4ck9jd4u37 3tdtk1v8j6tpp 2pijmikexrxp7 1y2p0ij32e8e7".split(" ");
goog.math.Long.MIN_VALUE_FOR_RADIX_ = "  -1000000000000000000000000000000000000000000000000000000000000000 -2021110011022210012102010021220101220222 -20000000000000000000000000000000 -1104332401304422434310311213 -1540241003031030222122212 -22341010611245052052301 -1000000000000000000000 -67404283172107811828 -9223372036854775808 -1728002635214590698 -41a792678515120368 -10b269549075433c38 -4340724c6c71dc7a8 -160e2ad3246366808 -8000000000000000 -33d3d8307b214009 -16agh595df825fa8 -ba643dci0ffeehi -5cbfjia3fh26ja8 -2heiciiie82dh98 -1adaibb21dckfa8 -i6k448cf4192c3 -acd772jnc9l0l8 -64ie1focnn5g78 -3igoecjbmca688 -27c48l5b37oaoq -1bk39f3ah3dmq8 -q1se8f0m04isc -hajppbc1fc208 -bm03i95hia438 -8000000000000 -5hg4ck9jd4u38 -3tdtk1v8j6tpq -2pijmikexrxp8 -1y2p0ij32e8e8".split(" ");
goog.math.Long.fromInt = function(a) {
  var b = a | 0;
  goog.asserts.assert(a === b, "value should be a 32-bit integer");
  return -128 <= b && 128 > b ? goog.math.Long.getCachedIntValue_(b) : new goog.math.Long(b, 0 > b ? -1 : 0);
};
goog.math.Long.fromNumber = function(a) {
  return isNaN(a) ? goog.math.Long.getZero() : a <= -goog.math.Long.TWO_PWR_63_DBL_ ? goog.math.Long.getMinValue() : a + 1 >= goog.math.Long.TWO_PWR_63_DBL_ ? goog.math.Long.getMaxValue() : 0 > a ? goog.math.Long.fromNumber(-a).negate() : new goog.math.Long(a % goog.math.Long.TWO_PWR_32_DBL_ | 0, a / goog.math.Long.TWO_PWR_32_DBL_ | 0);
};
goog.math.Long.fromBits = function(a, b) {
  return new goog.math.Long(a, b);
};
goog.math.Long.fromString = function(a, b) {
  if (0 == a.length) {
    throw Error("number format error: empty string");
  }
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  if ("-" == a.charAt(0)) {
    return goog.math.Long.fromString(a.substring(1), c).negate();
  }
  if (0 <= a.indexOf("-")) {
    throw Error('number format error: interior "-" character: ' + a);
  }
  for (var d = goog.math.Long.fromNumber(Math.pow(c, 8)), e = goog.math.Long.getZero(), f = 0; f < a.length; f += 8) {
    var g = Math.min(8, a.length - f), h = parseInt(a.substring(f, f + g), c);
    8 > g ? (g = goog.math.Long.fromNumber(Math.pow(c, g)), e = e.multiply(g).add(goog.math.Long.fromNumber(h))) : (e = e.multiply(d), e = e.add(goog.math.Long.fromNumber(h)));
  }
  return e;
};
goog.math.Long.isStringInRange = function(a, b) {
  var c = b || 10;
  if (2 > c || 36 < c) {
    throw Error("radix out of range: " + c);
  }
  c = "-" == a.charAt(0) ? goog.math.Long.MIN_VALUE_FOR_RADIX_[c] : goog.math.Long.MAX_VALUE_FOR_RADIX_[c];
  return a.length < c.length ? !0 : a.length == c.length && a <= c ? !0 : !1;
};
goog.math.Long.TWO_PWR_16_DBL_ = 65536;
goog.math.Long.TWO_PWR_32_DBL_ = goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
goog.math.Long.TWO_PWR_64_DBL_ = goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
goog.math.Long.TWO_PWR_63_DBL_ = goog.math.Long.TWO_PWR_64_DBL_ / 2;
goog.math.Long.getZero = function() {
  return goog.math.Long.getCachedIntValue_(0);
};
goog.math.Long.getOne = function() {
  return goog.math.Long.getCachedIntValue_(1);
};
goog.math.Long.getNegOne = function() {
  return goog.math.Long.getCachedIntValue_(-1);
};
goog.math.Long.getMaxValue = function() {
  return goog.reflect.cache(goog.math.Long.valueCache_, goog.math.Long.ValueCacheId_.MAX_VALUE, function() {
    return goog.math.Long.fromBits(-1, 2147483647);
  });
};
goog.math.Long.getMinValue = function() {
  return goog.reflect.cache(goog.math.Long.valueCache_, goog.math.Long.ValueCacheId_.MIN_VALUE, function() {
    return goog.math.Long.fromBits(0, -2147483648);
  });
};
goog.math.Long.getTwoPwr24 = function() {
  return goog.reflect.cache(goog.math.Long.valueCache_, goog.math.Long.ValueCacheId_.TWO_PWR_24, function() {
    return goog.math.Long.fromInt(16777216);
  });
};
goog.math.Long.prototype.toInt = function() {
  return this.low_;
};
goog.math.Long.prototype.toNumber = function() {
  return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ + this.getLowBitsUnsigned();
};
goog.math.Long.prototype.toString = function(a) {
  a = a || 10;
  if (2 > a || 36 < a) {
    throw Error("radix out of range: " + a);
  }
  if (this.isZero()) {
    return "0";
  }
  if (this.isNegative()) {
    if (this.equals(goog.math.Long.getMinValue())) {
      var b = goog.math.Long.fromNumber(a);
      var c = this.div(b);
      b = c.multiply(b).subtract(this);
      return c.toString(a) + b.toInt().toString(a);
    }
    return "-" + this.negate().toString(a);
  }
  c = goog.math.Long.fromNumber(Math.pow(a, 6));
  b = this;
  for (var d = "";;) {
    var e = b.div(c), f = (b.subtract(e.multiply(c)).toInt() >>> 0).toString(a);
    b = e;
    if (b.isZero()) {
      return f + d;
    }
    for (; 6 > f.length;) {
      f = "0" + f;
    }
    d = "" + f + d;
  }
};
goog.math.Long.prototype.getHighBits = function() {
  return this.high_;
};
goog.math.Long.prototype.getLowBits = function() {
  return this.low_;
};
goog.math.Long.prototype.getLowBitsUnsigned = function() {
  return 0 <= this.low_ ? this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
};
goog.math.Long.prototype.getNumBitsAbs = function() {
  if (this.isNegative()) {
    return this.equals(goog.math.Long.getMinValue()) ? 64 : this.negate().getNumBitsAbs();
  }
  for (var a = 0 != this.high_ ? this.high_ : this.low_, b = 31; 0 < b && 0 == (a & 1 << b); b--) {
  }
  return 0 != this.high_ ? b + 33 : b + 1;
};
goog.math.Long.prototype.isZero = function() {
  return 0 == this.high_ && 0 == this.low_;
};
goog.math.Long.prototype.isNegative = function() {
  return 0 > this.high_;
};
goog.math.Long.prototype.isOdd = function() {
  return 1 == (this.low_ & 1);
};
goog.math.Long.prototype.equals = function(a) {
  return this.high_ == a.high_ && this.low_ == a.low_;
};
goog.math.Long.prototype.notEquals = function(a) {
  return this.high_ != a.high_ || this.low_ != a.low_;
};
goog.math.Long.prototype.lessThan = function(a) {
  return 0 > this.compare(a);
};
goog.math.Long.prototype.lessThanOrEqual = function(a) {
  return 0 >= this.compare(a);
};
goog.math.Long.prototype.greaterThan = function(a) {
  return 0 < this.compare(a);
};
goog.math.Long.prototype.greaterThanOrEqual = function(a) {
  return 0 <= this.compare(a);
};
goog.math.Long.prototype.compare = function(a) {
  if (this.equals(a)) {
    return 0;
  }
  var b = this.isNegative(), c = a.isNegative();
  return b && !c ? -1 : !b && c ? 1 : this.subtract(a).isNegative() ? -1 : 1;
};
goog.math.Long.prototype.negate = function() {
  return this.equals(goog.math.Long.getMinValue()) ? goog.math.Long.getMinValue() : this.not().add(goog.math.Long.getOne());
};
goog.math.Long.prototype.add = function(a) {
  var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = a.high_ >>> 16, f = a.high_ & 65535, g = a.low_ >>> 16;
  a = 0 + ((this.low_ & 65535) + (a.low_ & 65535));
  g = 0 + (a >>> 16) + (d + g);
  d = 0 + (g >>> 16);
  d += c + f;
  b = 0 + (d >>> 16) + (b + e) & 65535;
  return goog.math.Long.fromBits((g & 65535) << 16 | a & 65535, b << 16 | d & 65535);
};
goog.math.Long.prototype.subtract = function(a) {
  return this.add(a.negate());
};
goog.math.Long.prototype.multiply = function(a) {
  if (this.isZero() || a.isZero()) {
    return goog.math.Long.getZero();
  }
  if (this.equals(goog.math.Long.getMinValue())) {
    return a.isOdd() ? goog.math.Long.getMinValue() : goog.math.Long.getZero();
  }
  if (a.equals(goog.math.Long.getMinValue())) {
    return this.isOdd() ? goog.math.Long.getMinValue() : goog.math.Long.getZero();
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().multiply(a.negate()) : this.negate().multiply(a).negate();
  }
  if (a.isNegative()) {
    return this.multiply(a.negate()).negate();
  }
  if (this.lessThan(goog.math.Long.getTwoPwr24()) && a.lessThan(goog.math.Long.getTwoPwr24())) {
    return goog.math.Long.fromNumber(this.toNumber() * a.toNumber());
  }
  var b = this.high_ >>> 16, c = this.high_ & 65535, d = this.low_ >>> 16, e = this.low_ & 65535, f = a.high_ >>> 16, g = a.high_ & 65535, h = a.low_ >>> 16;
  a = a.low_ & 65535;
  var k = 0 + e * a;
  var m = 0 + (k >>> 16) + d * a;
  var l = 0 + (m >>> 16);
  m = (m & 65535) + e * h;
  l += m >>> 16;
  l += c * a;
  var n = 0 + (l >>> 16);
  l = (l & 65535) + d * h;
  n += l >>> 16;
  l = (l & 65535) + e * g;
  n = n + (l >>> 16) + (b * a + c * h + d * g + e * f) & 65535;
  return goog.math.Long.fromBits((m & 65535) << 16 | k & 65535, n << 16 | l & 65535);
};
goog.math.Long.prototype.div = function(a) {
  if (a.isZero()) {
    throw Error("division by zero");
  }
  if (this.isZero()) {
    return goog.math.Long.getZero();
  }
  if (this.equals(goog.math.Long.getMinValue())) {
    if (a.equals(goog.math.Long.getOne()) || a.equals(goog.math.Long.getNegOne())) {
      return goog.math.Long.getMinValue();
    }
    if (a.equals(goog.math.Long.getMinValue())) {
      return goog.math.Long.getOne();
    }
    var b = this.shiftRight(1);
    b = b.div(a).shiftLeft(1);
    if (b.equals(goog.math.Long.getZero())) {
      return a.isNegative() ? goog.math.Long.getOne() : goog.math.Long.getNegOne();
    }
    var c = this.subtract(a.multiply(b));
    return b.add(c.div(a));
  }
  if (a.equals(goog.math.Long.getMinValue())) {
    return goog.math.Long.getZero();
  }
  if (this.isNegative()) {
    return a.isNegative() ? this.negate().div(a.negate()) : this.negate().div(a).negate();
  }
  if (a.isNegative()) {
    return this.div(a.negate()).negate();
  }
  var d = goog.math.Long.getZero();
  for (c = this; c.greaterThanOrEqual(a);) {
    b = Math.max(1, Math.floor(c.toNumber() / a.toNumber()));
    for (var e = Math.ceil(Math.log(b) / Math.LN2), e = 48 >= e ? 1 : Math.pow(2, e - 48), f = goog.math.Long.fromNumber(b), g = f.multiply(a); g.isNegative() || g.greaterThan(c);) {
      b -= e, f = goog.math.Long.fromNumber(b), g = f.multiply(a);
    }
    f.isZero() && (f = goog.math.Long.getOne());
    d = d.add(f);
    c = c.subtract(g);
  }
  return d;
};
goog.math.Long.prototype.modulo = function(a) {
  return this.subtract(this.div(a).multiply(a));
};
goog.math.Long.prototype.not = function() {
  return goog.math.Long.fromBits(~this.low_, ~this.high_);
};
goog.math.Long.prototype.and = function(a) {
  return goog.math.Long.fromBits(this.low_ & a.low_, this.high_ & a.high_);
};
goog.math.Long.prototype.or = function(a) {
  return goog.math.Long.fromBits(this.low_ | a.low_, this.high_ | a.high_);
};
goog.math.Long.prototype.xor = function(a) {
  return goog.math.Long.fromBits(this.low_ ^ a.low_, this.high_ ^ a.high_);
};
goog.math.Long.prototype.shiftLeft = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.low_;
  return 32 > a ? goog.math.Long.fromBits(b << a, this.high_ << a | b >>> 32 - a) : goog.math.Long.fromBits(0, b << a - 32);
};
goog.math.Long.prototype.shiftRight = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.high_;
  return 32 > a ? goog.math.Long.fromBits(this.low_ >>> a | b << 32 - a, b >> a) : goog.math.Long.fromBits(b >> a - 32, 0 <= b ? 0 : -1);
};
goog.math.Long.prototype.shiftRightUnsigned = function(a) {
  a &= 63;
  if (0 == a) {
    return this;
  }
  var b = this.high_;
  return 32 > a ? goog.math.Long.fromBits(this.low_ >>> a | b << 32 - a, b >>> a) : 32 == a ? goog.math.Long.fromBits(b, 0) : goog.math.Long.fromBits(b >>> a - 32, 0);
};
goog.math.Long.ValueCacheId_ = {MAX_VALUE:1, MIN_VALUE:2, TWO_PWR_24:6};
var com = {cognitect:{}};
com.cognitect.transit = {};
com.cognitect.transit.delimiters = {};
com.cognitect.transit.delimiters.ESC = "~";
com.cognitect.transit.delimiters.TAG = "#";
com.cognitect.transit.delimiters.SUB = "^";
com.cognitect.transit.delimiters.RES = "`";
com.cognitect.transit.delimiters.ESC_TAG = "~#";
com.cognitect.transit.caching = {};
com.cognitect.transit.caching.MIN_SIZE_CACHEABLE = 3;
com.cognitect.transit.caching.BASE_CHAR_IDX = 48;
com.cognitect.transit.caching.CACHE_CODE_DIGITS = 44;
com.cognitect.transit.caching.MAX_CACHE_ENTRIES = com.cognitect.transit.caching.CACHE_CODE_DIGITS * com.cognitect.transit.caching.CACHE_CODE_DIGITS;
com.cognitect.transit.caching.MAX_CACHE_SIZE = 4096;
com.cognitect.transit.caching.isCacheable = function(a, b) {
  if (a.length > com.cognitect.transit.caching.MIN_SIZE_CACHEABLE) {
    if (b) {
      return !0;
    }
    var c = a.charAt(0), d = a.charAt(1);
    return c === com.cognitect.transit.delimiters.ESC ? ":" === d || "$" === d || "#" === d : !1;
  }
  return !1;
};
com.cognitect.transit.caching.idxToCode = function(a) {
  var b = Math.floor(a / com.cognitect.transit.caching.CACHE_CODE_DIGITS);
  a = String.fromCharCode(a % com.cognitect.transit.caching.CACHE_CODE_DIGITS + com.cognitect.transit.caching.BASE_CHAR_IDX);
  return 0 === b ? com.cognitect.transit.delimiters.SUB + a : com.cognitect.transit.delimiters.SUB + String.fromCharCode(b + com.cognitect.transit.caching.BASE_CHAR_IDX) + a;
};
com.cognitect.transit.caching.WriteCache = function() {
  this.cacheSize = this.gen = this.idx = 0;
  this.cache = {};
};
com.cognitect.transit.caching.WriteCache.prototype.write = function(a, b) {
  if (com.cognitect.transit.caching.isCacheable(a, b)) {
    this.cacheSize === com.cognitect.transit.caching.MAX_CACHE_SIZE ? (this.clear(), this.gen = 0, this.cache = {}) : this.idx === com.cognitect.transit.caching.MAX_CACHE_ENTRIES && this.clear();
    var c = this.cache[a];
    return null == c ? (this.cache[a] = [com.cognitect.transit.caching.idxToCode(this.idx), this.gen], this.idx++, a) : c[1] != this.gen ? (c[1] = this.gen, c[0] = com.cognitect.transit.caching.idxToCode(this.idx), this.idx++, a) : c[0];
  }
  return a;
};
com.cognitect.transit.caching.WriteCache.prototype.clear = function() {
  this.idx = 0;
  this.gen++;
};
com.cognitect.transit.caching.writeCache = function() {
  return new com.cognitect.transit.caching.WriteCache;
};
com.cognitect.transit.caching.isCacheCode = function(a) {
  return a.charAt(0) === com.cognitect.transit.delimiters.SUB && " " !== a.charAt(1);
};
com.cognitect.transit.caching.codeToIdx = function(a) {
  if (2 === a.length) {
    return a.charCodeAt(1) - com.cognitect.transit.caching.BASE_CHAR_IDX;
  }
  var b = (a.charCodeAt(1) - com.cognitect.transit.caching.BASE_CHAR_IDX) * com.cognitect.transit.caching.CACHE_CODE_DIGITS;
  a = a.charCodeAt(2) - com.cognitect.transit.caching.BASE_CHAR_IDX;
  return b + a;
};
com.cognitect.transit.caching.ReadCache = function() {
  this.idx = 0;
  this.cache = [];
};
com.cognitect.transit.caching.ReadCache.prototype.write = function(a, b) {
  this.idx == com.cognitect.transit.caching.MAX_CACHE_ENTRIES && (this.idx = 0);
  this.cache[this.idx] = a;
  this.idx++;
  return a;
};
com.cognitect.transit.caching.ReadCache.prototype.read = function(a, b) {
  return this.cache[com.cognitect.transit.caching.codeToIdx(a)];
};
com.cognitect.transit.caching.ReadCache.prototype.clear = function() {
  this.idx = 0;
};
com.cognitect.transit.caching.readCache = function() {
  return new com.cognitect.transit.caching.ReadCache;
};
com.cognitect.transit.util = {};
com.cognitect.transit.util.objectKeys = "undefined" != typeof Object.keys ? function(a) {
  return Object.keys(a);
} : function(a) {
  return goog.object.getKeys(a);
};
com.cognitect.transit.util.isArray = "undefined" != typeof Array.isArray ? function(a) {
  return Array.isArray(a);
} : function(a) {
  return "array" === goog.typeOf(a);
};
com.cognitect.transit.util.chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
com.cognitect.transit.util.randInt = function(a) {
  return Math.round(Math.random() * a);
};
com.cognitect.transit.util.randHex = function() {
  return com.cognitect.transit.util.randInt(15).toString(16);
};
com.cognitect.transit.util.randomUUID = function() {
  var a = (8 | 3 & com.cognitect.transit.util.randInt(14)).toString(16);
  return com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-" + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-4" + com.cognitect.transit.util.randHex() + 
  com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-" + a + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + "-" + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + 
  com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex() + com.cognitect.transit.util.randHex();
};
com.cognitect.transit.util.btoa = function(a) {
  if ("undefined" != typeof btoa) {
    return btoa(a);
  }
  a = String(a);
  for (var b, c, d = 0, e = com.cognitect.transit.util.chars, f = ""; a.charAt(d | 0) || (e = "=", d % 1); f += e.charAt(63 & b >> 8 - d % 1 * 8)) {
    c = a.charCodeAt(d += .75);
    if (255 < c) {
      throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
    }
    b = b << 8 | c;
  }
  return f;
};
com.cognitect.transit.util.atob = function(a) {
  if ("undefined" != typeof atob) {
    return atob(a);
  }
  a = String(a).replace(/=+$/, "");
  if (1 == a.length % 4) {
    throw Error("'atob' failed: The string to be decoded is not correctly encoded.");
  }
  for (var b = 0, c, d, e = 0, f = ""; d = a.charAt(e++); ~d && (c = b % 4 ? 64 * c + d : d, b++ % 4) ? f += String.fromCharCode(255 & c >> (-2 * b & 6)) : 0) {
    d = com.cognitect.transit.util.chars.indexOf(d);
  }
  return f;
};
com.cognitect.transit.util.Uint8ToBase64 = function(a) {
  for (var b = 0, c = a.length, d = "", e; b < c;) {
    e = a.subarray(b, Math.min(b + 32768, c)), d += String.fromCharCode.apply(null, e), b += 32768;
  }
  return com.cognitect.transit.util.btoa(d);
};
com.cognitect.transit.util.Base64ToUint8 = function(a) {
  a = com.cognitect.transit.util.atob(a);
  for (var b = a.length, c = new Uint8Array(b), d = 0; d < b; d++) {
    var e = a.charCodeAt(d);
    c[d] = e;
  }
  return c;
};
com.cognitect.transit.eq = {};
com.cognitect.transit.eq.hashCodeProperty = "transit$hashCode$";
com.cognitect.transit.eq.hashCodeCounter = 1;
com.cognitect.transit.eq.equals = function(a, b) {
  if (null == a) {
    return null == b;
  }
  if (a === b) {
    return !0;
  }
  if ("object" === typeof a) {
    if (com.cognitect.transit.util.isArray(a)) {
      if (com.cognitect.transit.util.isArray(b) && a.length === b.length) {
        for (var c = 0; c < a.length; c++) {
          if (!com.cognitect.transit.eq.equals(a[c], b[c])) {
            return !1;
          }
        }
        return !0;
      }
      return !1;
    }
    if (a.com$cognitect$transit$equals) {
      return a.com$cognitect$transit$equals(b);
    }
    if (null != b && "object" === typeof b) {
      if (b.com$cognitect$transit$equals) {
        return b.com$cognitect$transit$equals(a);
      }
      var c = 0, d = com.cognitect.transit.util.objectKeys(b).length, e;
      for (e in a) {
        if (a.hasOwnProperty(e) && (c++, !b.hasOwnProperty(e) || !com.cognitect.transit.eq.equals(a[e], b[e]))) {
          return !1;
        }
      }
      return c === d;
    }
  }
  return !1;
};
com.cognitect.transit.eq.hashCombine = function(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
};
com.cognitect.transit.eq.stringCodeCache = {};
com.cognitect.transit.eq.stringCodeCacheSize = 0;
com.cognitect.transit.eq.STR_CACHE_MAX = 256;
com.cognitect.transit.eq.hashString = function(a) {
  var b = com.cognitect.transit.eq.stringCodeCache[a];
  if (null != b) {
    return b;
  }
  for (var c = b = 0; c < a.length; ++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  com.cognitect.transit.eq.stringCodeCacheSize++;
  com.cognitect.transit.eq.stringCodeCacheSize >= com.cognitect.transit.eq.STR_CACHE_MAX && (com.cognitect.transit.eq.stringCodeCache = {}, com.cognitect.transit.eq.stringCodeCacheSize = 1);
  return com.cognitect.transit.eq.stringCodeCache[a] = b;
};
com.cognitect.transit.eq.hashMapLike = function(a) {
  var b = 0;
  if (null != a.forEach) {
    a.forEach(function(a, c, d) {
      b = (b + (com.cognitect.transit.eq.hashCode(c) ^ com.cognitect.transit.eq.hashCode(a))) % 4503599627370496;
    });
  } else {
    for (var c = com.cognitect.transit.util.objectKeys(a), d = 0; d < c.length; d++) {
      var e = c[d], f = a[e], b = (b + (com.cognitect.transit.eq.hashCode(e) ^ com.cognitect.transit.eq.hashCode(f))) % 4503599627370496;
    }
  }
  return b;
};
com.cognitect.transit.eq.hashArrayLike = function(a) {
  var b = 0;
  if (com.cognitect.transit.util.isArray(a)) {
    for (var c = 0; c < a.length; c++) {
      b = com.cognitect.transit.eq.hashCombine(b, com.cognitect.transit.eq.hashCode(a[c]));
    }
  } else {
    a.forEach && a.forEach(function(a, c) {
      b = com.cognitect.transit.eq.hashCombine(b, com.cognitect.transit.eq.hashCode(a));
    });
  }
  return b;
};
com.cognitect.transit.eq.hashCode = function(a) {
  if (null == a) {
    return 0;
  }
  switch(typeof a) {
    case "number":
      return a;
    case "boolean":
      return !0 === a ? 1 : 0;
    case "string":
      return com.cognitect.transit.eq.hashString(a);
    case "function":
      var b = a[com.cognitect.transit.eq.hashCodeProperty];
      b || (b = com.cognitect.transit.eq.hashCodeCounter, "undefined" != typeof Object.defineProperty ? Object.defineProperty(a, com.cognitect.transit.eq.hashCodeProperty, {value:b, enumerable:!1}) : a[com.cognitect.transit.eq.hashCodeProperty] = b, com.cognitect.transit.eq.hashCodeCounter++);
      return b;
    default:
      return a instanceof Date ? a.valueOf() : com.cognitect.transit.util.isArray(a) ? com.cognitect.transit.eq.hashArrayLike(a) : a.com$cognitect$transit$hashCode ? a.com$cognitect$transit$hashCode() : com.cognitect.transit.eq.hashMapLike(a);
  }
};
com.cognitect.transit.eq.extendToEQ = function(a, b) {
  a.com$cognitect$transit$hashCode = b.hashCode;
  a.com$cognitect$transit$equals = b.equals;
  return a;
};
com.cognitect.transit.types = {};
com.cognitect.transit.types.ITERATOR = "undefined" != typeof Symbol ? Symbol.iterator : "@@iterator";
com.cognitect.transit.types.TaggedValue = function(a, b) {
  this.tag = a;
  this.rep = b;
  this.hashCode = -1;
};
com.cognitect.transit.types.TaggedValue.prototype.toString = function() {
  return "[TaggedValue: " + this.tag + ", " + this.rep + "]";
};
com.cognitect.transit.types.TaggedValue.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.TaggedValue.prototype.equiv = com.cognitect.transit.types.TaggedValue.prototype.equiv;
com.cognitect.transit.types.TaggedValue.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue ? this.tag === a.tag && com.cognitect.transit.eq.equals(this.rep, a.rep) : !1;
};
com.cognitect.transit.types.TaggedValue.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCombine(com.cognitect.transit.eq.hashCode(this.tag), com.cognitect.transit.eq.hashCode(this.rep)));
  return this.hashCode;
};
com.cognitect.transit.types.taggedValue = function(a, b) {
  return new com.cognitect.transit.types.TaggedValue(a, b);
};
com.cognitect.transit.types.isTaggedValue = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue;
};
com.cognitect.transit.types.nullValue = function() {
  return null;
};
com.cognitect.transit.types.boolValue = function(a) {
  return "t" === a;
};
com.cognitect.transit.types.MAX_INT = goog.math.Long.fromString("9007199254740991");
com.cognitect.transit.types.MIN_INT = goog.math.Long.fromString("-9007199254740991");
com.cognitect.transit.types.intValue = function(a) {
  if ("number" === typeof a || a instanceof goog.math.Long) {
    return a;
  }
  a = goog.math.Long.fromString(a, 10);
  return a.greaterThan(com.cognitect.transit.types.MAX_INT) || a.lessThan(com.cognitect.transit.types.MIN_INT) ? a : a.toNumber();
};
goog.math.Long.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
goog.math.Long.prototype.equiv = goog.math.Long.prototype.equiv;
goog.math.Long.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof goog.math.Long && this.equals(a);
};
goog.math.Long.prototype.com$cognitect$transit$hashCode = function() {
  return this.toInt();
};
com.cognitect.transit.types.isInteger = function(a) {
  return a instanceof goog.math.Long ? !0 : "number" === typeof a && !isNaN(a) && Infinity !== a && parseFloat(a) === parseInt(a, 10);
};
com.cognitect.transit.types.floatValue = function(a) {
  return parseFloat(a);
};
com.cognitect.transit.types.bigInteger = function(a) {
  return com.cognitect.transit.types.taggedValue("n", a);
};
com.cognitect.transit.types.isBigInteger = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "n" === a.tag;
};
com.cognitect.transit.types.bigDecimalValue = function(a) {
  return com.cognitect.transit.types.taggedValue("f", a);
};
com.cognitect.transit.types.isBigDecimal = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "f" === a.tag;
};
com.cognitect.transit.types.charValue = function(a) {
  return a;
};
com.cognitect.transit.types.Keyword = function(a) {
  this._name = a;
  this.hashCode = -1;
};
com.cognitect.transit.types.Keyword.prototype.toString = function() {
  return ":" + this._name;
};
com.cognitect.transit.types.Keyword.prototype.namespace = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(0, a) : null;
};
com.cognitect.transit.types.Keyword.prototype.name = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(a + 1, this._name.length) : this._name;
};
com.cognitect.transit.types.Keyword.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.Keyword.prototype.equiv = com.cognitect.transit.types.Keyword.prototype.equiv;
com.cognitect.transit.types.Keyword.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.Keyword && this._name == a._name;
};
com.cognitect.transit.types.Keyword.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCode(this._name));
  return this.hashCode;
};
com.cognitect.transit.types.keyword = function(a) {
  return new com.cognitect.transit.types.Keyword(a);
};
com.cognitect.transit.types.isKeyword = function(a) {
  return a instanceof com.cognitect.transit.types.Keyword;
};
com.cognitect.transit.types.Symbol = function(a) {
  this._name = a;
  this.hashCode = -1;
};
com.cognitect.transit.types.Symbol.prototype.namespace = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(0, a) : null;
};
com.cognitect.transit.types.Symbol.prototype.name = function() {
  var a = this._name.indexOf("/");
  return -1 != a ? this._name.substring(a + 1, this._name.length) : this._name;
};
com.cognitect.transit.types.Symbol.prototype.toString = function() {
  return this._name;
};
com.cognitect.transit.types.Symbol.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.Symbol.prototype.equiv = com.cognitect.transit.types.Symbol.prototype.equiv;
com.cognitect.transit.types.Symbol.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.Symbol && this._name == a._name;
};
com.cognitect.transit.types.Symbol.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCode(this._name));
  return this.hashCode;
};
com.cognitect.transit.types.symbol = function(a) {
  return new com.cognitect.transit.types.Symbol(a);
};
com.cognitect.transit.types.isSymbol = function(a) {
  return a instanceof com.cognitect.transit.types.Symbol;
};
com.cognitect.transit.types.hexFor = function(a, b, c) {
  var d = "";
  c = c || b + 1;
  for (var e = 8 * (7 - b), f = goog.math.Long.fromInt(255).shiftLeft(e); b < c; b++, e -= 8, f = f.shiftRightUnsigned(8)) {
    var g = a.and(f).shiftRightUnsigned(e).toString(16);
    1 == g.length && (g = "0" + g);
    d += g;
  }
  return d;
};
com.cognitect.transit.types.UUID = function(a, b) {
  this.high = a;
  this.low = b;
  this.hashCode = -1;
};
com.cognitect.transit.types.UUID.prototype.getLeastSignificantBits = function() {
  return this.low;
};
com.cognitect.transit.types.UUID.prototype.getMostSignificantBits = function() {
  return this.high;
};
com.cognitect.transit.types.UUID.prototype.toString = function() {
  var a = this.high, b = this.low;
  var c = "" + (com.cognitect.transit.types.hexFor(a, 0, 4) + "-");
  c += com.cognitect.transit.types.hexFor(a, 4, 6) + "-";
  c += com.cognitect.transit.types.hexFor(a, 6, 8) + "-";
  c += com.cognitect.transit.types.hexFor(b, 0, 2) + "-";
  return c += com.cognitect.transit.types.hexFor(b, 2, 8);
};
com.cognitect.transit.types.UUID.prototype.equiv = function(a) {
  return com.cognitect.transit.eq.equals(this, a);
};
com.cognitect.transit.types.UUID.prototype.equiv = com.cognitect.transit.types.UUID.prototype.equiv;
com.cognitect.transit.types.UUID.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof com.cognitect.transit.types.UUID && this.high.equals(a.high) && this.low.equals(a.low);
};
com.cognitect.transit.types.UUID.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashCode(this.toString()));
  return this.hashCode;
};
com.cognitect.transit.types.UUIDfromString = function(a) {
  a = a.replace(/-/g, "");
  var b, c;
  var d = b = 0;
  for (c = 24; 8 > d; d += 2, c -= 8) {
    b |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  var e = 0;
  d = 8;
  for (c = 24; 16 > d; d += 2, c -= 8) {
    e |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  var f = goog.math.Long.fromBits(e, b);
  b = 0;
  d = 16;
  for (c = 24; 24 > d; d += 2, c -= 8) {
    b |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  e = 0;
  for (c = d = 24; 32 > d; d += 2, c -= 8) {
    e |= parseInt(a.substring(d, d + 2), 16) << c;
  }
  a = goog.math.Long.fromBits(e, b);
  return new com.cognitect.transit.types.UUID(f, a);
};
com.cognitect.transit.types.uuid = function(a) {
  return com.cognitect.transit.types.UUIDfromString(a);
};
com.cognitect.transit.types.isUUID = function(a) {
  return a instanceof com.cognitect.transit.types.UUID;
};
com.cognitect.transit.types.date = function(a) {
  a = "number" === typeof a ? a : parseInt(a, 10);
  return new Date(a);
};
com.cognitect.transit.types.verboseDate = function(a) {
  return new Date(a);
};
Date.prototype.com$cognitect$transit$equals = function(a) {
  return a instanceof Date ? this.valueOf() === a.valueOf() : !1;
};
Date.prototype.com$cognitect$transit$hashCode = function() {
  return this.valueOf();
};
com.cognitect.transit.types.binary = function(a, b) {
  return b && !1 === b.preferBuffers || "undefined" == typeof goog.global.Buffer ? "undefined" != typeof Uint8Array ? com.cognitect.transit.util.Base64ToUint8(a) : com.cognitect.transit.types.taggedValue("b", a) : new goog.global.Buffer(a, "base64");
};
com.cognitect.transit.types.isBinary = function(a) {
  return "undefined" != typeof goog.global.Buffer && a instanceof goog.global.Buffer ? !0 : "undefined" != typeof Uint8Array && a instanceof Uint8Array ? !0 : a instanceof com.cognitect.transit.types.TaggedValue && "b" === a.tag;
};
com.cognitect.transit.types.uri = function(a) {
  return com.cognitect.transit.types.taggedValue("r", a);
};
com.cognitect.transit.types.isURI = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "r" === a.tag;
};
com.cognitect.transit.types.KEYS = 0;
com.cognitect.transit.types.VALUES = 1;
com.cognitect.transit.types.ENTRIES = 2;
com.cognitect.transit.types.TransitArrayMapIterator = function(a, b) {
  this.entries = a;
  this.type = b || com.cognitect.transit.types.KEYS;
  this.idx = 0;
};
com.cognitect.transit.types.TransitArrayMapIterator.prototype.next = function() {
  if (this.idx < this.entries.length) {
    var a = {value:this.type === com.cognitect.transit.types.KEYS ? this.entries[this.idx] : this.type === com.cognitect.transit.types.VALUES ? this.entries[this.idx + 1] : [this.entries[this.idx], this.entries[this.idx + 1]], done:!1};
    this.idx += 2;
    return a;
  }
  return {value:null, done:!0};
};
com.cognitect.transit.types.TransitArrayMapIterator.prototype.next = com.cognitect.transit.types.TransitArrayMapIterator.prototype.next;
com.cognitect.transit.types.TransitArrayMapIterator.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this;
};
com.cognitect.transit.types.TransitMapIterator = function(a, b) {
  this.map = a;
  this.type = b || com.cognitect.transit.types.KEYS;
  this.keys = this.map.getKeys();
  this.idx = 0;
  this.bucket = null;
  this.bucketIdx = 0;
};
com.cognitect.transit.types.TransitMapIterator.prototype.next = function() {
  if (this.idx < this.map.size) {
    null != this.bucket && this.bucketIdx < this.bucket.length || (this.bucket = this.map.map[this.keys[this.idx]], this.bucketIdx = 0);
    var a = {value:this.type === com.cognitect.transit.types.KEYS ? this.bucket[this.bucketIdx] : this.type === com.cognitect.transit.types.VALUES ? this.bucket[this.bucketIdx + 1] : [this.bucket[this.bucketIdx], this.bucket[this.bucketIdx + 1]], done:!1};
    this.idx++;
    this.bucketIdx += 2;
    return a;
  }
  return {value:null, done:!0};
};
com.cognitect.transit.types.TransitMapIterator.prototype.next = com.cognitect.transit.types.TransitMapIterator.prototype.next;
com.cognitect.transit.types.TransitMapIterator.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this;
};
com.cognitect.transit.types.mapEquals = function(a, b) {
  if (a instanceof com.cognitect.transit.types.TransitMap && com.cognitect.transit.types.isMap(b)) {
    if (a.size !== b.size) {
      return !1;
    }
    for (var c in a.map) {
      for (var d = a.map[c], e = 0; e < d.length; e += 2) {
        if (!com.cognitect.transit.eq.equals(d[e + 1], b.get(d[e]))) {
          return !1;
        }
      }
    }
    return !0;
  }
  if (a instanceof com.cognitect.transit.types.TransitArrayMap && com.cognitect.transit.types.isMap(b)) {
    if (a.size !== b.size) {
      return !1;
    }
    c = a._entries;
    for (e = 0; e < c.length; e += 2) {
      if (!com.cognitect.transit.eq.equals(c[e + 1], b.get(c[e]))) {
        return !1;
      }
    }
    return !0;
  }
  if (null != b && "object" === typeof b && (e = com.cognitect.transit.util.objectKeys(b), c = e.length, a.size === c)) {
    for (d = 0; d < c; d++) {
      var f = e[d];
      if (!a.has(f) || !com.cognitect.transit.eq.equals(b[f], a.get(f))) {
        return !1;
      }
    }
    return !0;
  }
  return !1;
};
com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD = 8;
com.cognitect.transit.types.ARRAY_MAP_THRESHOLD = 32;
com.cognitect.transit.types.ARRAY_MAP_ACCESS_THRESHOLD = 32;
com.cognitect.transit.types.print = function(a) {
  return null == a ? "null" : goog.isArray(a) ? "[" + a.toString() + "]" : goog.isString(a) ? '"' + a + '"' : a.toString();
};
com.cognitect.transit.types.printMap = function(a) {
  var b = 0, c = "TransitMap {";
  a.forEach(function(d, e) {
    c += com.cognitect.transit.types.print(e) + " => " + com.cognitect.transit.types.print(d);
    b < a.size - 1 && (c += ", ");
    b++;
  });
  return c + "}";
};
com.cognitect.transit.types.printSet = function(a) {
  var b = 0, c = "TransitSet {";
  a.forEach(function(d) {
    c += com.cognitect.transit.types.print(d);
    b < a.size - 1 && (c += ", ");
    b++;
  });
  return c + "}";
};
com.cognitect.transit.types.TransitArrayMap = function(a) {
  this._entries = a;
  this.backingMap = null;
  this.hashCode = -1;
  this.size = a.length / 2;
  this.accesses = 0;
};
com.cognitect.transit.types.TransitArrayMap.prototype.toString = function() {
  return com.cognitect.transit.types.printMap(this);
};
com.cognitect.transit.types.TransitArrayMap.prototype.inspect = function() {
  return this.toString();
};
com.cognitect.transit.types.TransitArrayMap.prototype.convert = function() {
  if (this.backingMap) {
    throw Error("Invalid operation, already converted");
  }
  if (this.size < com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD) {
    return !1;
  }
  this.accesses++;
  return this.accesses > com.cognitect.transit.types.ARRAY_MAP_ACCESS_THRESHOLD ? (this.backingMap = com.cognitect.transit.types.map(this._entries, !1, !0), this._entries = [], !0) : !1;
};
com.cognitect.transit.types.TransitArrayMap.prototype.clear = function() {
  this.hashCode = -1;
  this.backingMap ? this.backingMap.clear() : this._entries = [];
  this.size = 0;
};
com.cognitect.transit.types.TransitArrayMap.prototype.clear = com.cognitect.transit.types.TransitArrayMap.prototype.clear;
com.cognitect.transit.types.TransitArrayMap.prototype.keys = function() {
  return this.backingMap ? this.backingMap.keys() : new com.cognitect.transit.types.TransitArrayMapIterator(this._entries, com.cognitect.transit.types.KEYS);
};
com.cognitect.transit.types.TransitArrayMap.prototype.keys = com.cognitect.transit.types.TransitArrayMap.prototype.keys;
com.cognitect.transit.types.TransitArrayMap.prototype.keySet = function() {
  if (this.backingMap) {
    return this.backingMap.keySet();
  }
  for (var a = [], b = 0, c = 0; c < this._entries.length; b++, c += 2) {
    a[b] = this._entries[c];
  }
  return a;
};
com.cognitect.transit.types.TransitArrayMap.prototype.keySet = com.cognitect.transit.types.TransitArrayMap.prototype.keySet;
com.cognitect.transit.types.TransitArrayMap.prototype.entries = function() {
  return this.backingMap ? this.backingMap.entries() : new com.cognitect.transit.types.TransitArrayMapIterator(this._entries, com.cognitect.transit.types.ENTRIES);
};
com.cognitect.transit.types.TransitArrayMap.prototype.entries = com.cognitect.transit.types.TransitArrayMap.prototype.entries;
com.cognitect.transit.types.TransitArrayMap.prototype.values = function() {
  return this.backingMap ? this.backingMap.values() : new com.cognitect.transit.types.TransitArrayMapIterator(this._entries, com.cognitect.transit.types.VALUES);
};
com.cognitect.transit.types.TransitArrayMap.prototype.values = com.cognitect.transit.types.TransitArrayMap.prototype.values;
com.cognitect.transit.types.TransitArrayMap.prototype.forEach = function(a) {
  if (this.backingMap) {
    this.backingMap.forEach(a);
  } else {
    for (var b = 0; b < this._entries.length; b += 2) {
      a(this._entries[b + 1], this._entries[b]);
    }
  }
};
com.cognitect.transit.types.TransitArrayMap.prototype.forEach = com.cognitect.transit.types.TransitArrayMap.prototype.forEach;
com.cognitect.transit.types.TransitArrayMap.prototype.get = function(a, b) {
  if (this.backingMap) {
    return this.backingMap.get(a);
  }
  if (this.convert()) {
    return this.get(a);
  }
  for (var c = 0; c < this._entries.length; c += 2) {
    if (com.cognitect.transit.eq.equals(this._entries[c], a)) {
      return this._entries[c + 1];
    }
  }
  return b;
};
com.cognitect.transit.types.TransitArrayMap.prototype.get = com.cognitect.transit.types.TransitArrayMap.prototype.get;
com.cognitect.transit.types.TransitArrayMap.prototype.has = function(a) {
  if (this.backingMap) {
    return this.backingMap.has(a);
  }
  if (this.convert()) {
    return this.has(a);
  }
  for (var b = 0; b < this._entries.length; b += 2) {
    if (com.cognitect.transit.eq.equals(this._entries[b], a)) {
      return !0;
    }
  }
  return !1;
};
com.cognitect.transit.types.TransitArrayMap.prototype.has = com.cognitect.transit.types.TransitArrayMap.prototype.has;
com.cognitect.transit.types.TransitArrayMap.prototype.set = function(a, b) {
  this.hashCode = -1;
  if (this.backingMap) {
    this.backingMap.set(a, b), this.size = this.backingMap.size;
  } else {
    for (var c = 0; c < this._entries.length; c += 2) {
      if (com.cognitect.transit.eq.equals(this._entries[c], a)) {
        this._entries[c + 1] = b;
        return;
      }
    }
    this._entries.push(a);
    this._entries.push(b);
    this.size++;
    this.size > com.cognitect.transit.types.ARRAY_MAP_THRESHOLD && (this.backingMap = com.cognitect.transit.types.map(this._entries, !1, !0), this._entries = null);
  }
};
com.cognitect.transit.types.TransitArrayMap.prototype.set = com.cognitect.transit.types.TransitArrayMap.prototype.set;
com.cognitect.transit.types.TransitArrayMap.prototype["delete"] = function(a) {
  this.hashCode = -1;
  if (this.backingMap) {
    return a = this.backingMap["delete"](a), this.size = this.backingMap.size, a;
  }
  for (var b = 0; b < this._entries.length; b += 2) {
    if (com.cognitect.transit.eq.equals(this._entries[b], a)) {
      return a = this._entries[b + 1], this._entries.splice(b, 2), this.size--, a;
    }
  }
};
com.cognitect.transit.types.TransitArrayMap.prototype.clone = function() {
  var a = com.cognitect.transit.types.map();
  this.forEach(function(b, c) {
    a.set(c, b);
  });
  return a;
};
com.cognitect.transit.types.TransitArrayMap.prototype.clone = com.cognitect.transit.types.TransitArrayMap.prototype.clone;
com.cognitect.transit.types.TransitArrayMap.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this.entries();
};
com.cognitect.transit.types.TransitArrayMap.prototype.com$cognitect$transit$hashCode = function() {
  if (this.backingMap) {
    return this.backingMap.com$cognitect$transit$hashCode();
  }
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashMapLike(this));
  return this.hashCode;
};
com.cognitect.transit.types.TransitArrayMap.prototype.com$cognitect$transit$equals = function(a) {
  return this.backingMap ? com.cognitect.transit.types.mapEquals(this.backingMap, a) : com.cognitect.transit.types.mapEquals(this, a);
};
com.cognitect.transit.types.TransitMap = function(a, b, c) {
  this.map = b || {};
  this._keys = a || [];
  this.size = c || 0;
  this.hashCode = -1;
};
com.cognitect.transit.types.TransitMap.prototype.toString = function() {
  return com.cognitect.transit.types.printMap(this);
};
com.cognitect.transit.types.TransitMap.prototype.inspect = function() {
  return this.toString();
};
com.cognitect.transit.types.TransitMap.prototype.clear = function() {
  this.hashCode = -1;
  this.map = {};
  this._keys = [];
  this.size = 0;
};
com.cognitect.transit.types.TransitMap.prototype.clear = com.cognitect.transit.types.TransitMap.prototype.clear;
com.cognitect.transit.types.TransitMap.prototype.getKeys = function() {
  return null != this._keys ? this._keys : com.cognitect.transit.util.objectKeys(this.map);
};
com.cognitect.transit.types.TransitMap.prototype["delete"] = function(a) {
  this.hashCode = -1;
  this._keys = null;
  for (var b = com.cognitect.transit.eq.hashCode(a), c = this.map[b], d = 0; d < c.length; d += 2) {
    if (com.cognitect.transit.eq.equals(a, c[d])) {
      return a = c[d + 1], c.splice(d, 2), 0 === c.length && delete this.map[b], this.size--, a;
    }
  }
};
com.cognitect.transit.types.TransitMap.prototype.entries = function() {
  return new com.cognitect.transit.types.TransitMapIterator(this, com.cognitect.transit.types.ENTRIES);
};
com.cognitect.transit.types.TransitMap.prototype.entries = com.cognitect.transit.types.TransitMap.prototype.entries;
com.cognitect.transit.types.TransitMap.prototype.forEach = function(a) {
  for (var b = this.getKeys(), c = 0; c < b.length; c++) {
    for (var d = this.map[b[c]], e = 0; e < d.length; e += 2) {
      a(d[e + 1], d[e], this);
    }
  }
};
com.cognitect.transit.types.TransitMap.prototype.forEach = com.cognitect.transit.types.TransitMap.prototype.forEach;
com.cognitect.transit.types.TransitMap.prototype.get = function(a, b) {
  var c = com.cognitect.transit.eq.hashCode(a), c = this.map[c];
  if (null != c) {
    for (var d = 0; d < c.length; d += 2) {
      if (com.cognitect.transit.eq.equals(a, c[d])) {
        return c[d + 1];
      }
    }
  } else {
    return b;
  }
};
com.cognitect.transit.types.TransitMap.prototype.get = com.cognitect.transit.types.TransitMap.prototype.get;
com.cognitect.transit.types.TransitMap.prototype.has = function(a) {
  var b = com.cognitect.transit.eq.hashCode(a), b = this.map[b];
  if (null != b) {
    for (var c = 0; c < b.length; c += 2) {
      if (com.cognitect.transit.eq.equals(a, b[c])) {
        return !0;
      }
    }
  }
  return !1;
};
com.cognitect.transit.types.TransitMap.prototype.has = com.cognitect.transit.types.TransitMap.prototype.has;
com.cognitect.transit.types.TransitMap.prototype.keys = function() {
  return new com.cognitect.transit.types.TransitMapIterator(this, com.cognitect.transit.types.KEYS);
};
com.cognitect.transit.types.TransitMap.prototype.keys = com.cognitect.transit.types.TransitMap.prototype.keys;
com.cognitect.transit.types.TransitMap.prototype.keySet = function() {
  for (var a = this.getKeys(), b = [], c = 0; c < a.length; c++) {
    for (var d = this.map[a[c]], e = 0; e < d.length; e += 2) {
      b.push(d[e]);
    }
  }
  return b;
};
com.cognitect.transit.types.TransitMap.prototype.keySet = com.cognitect.transit.types.TransitMap.prototype.keySet;
com.cognitect.transit.types.TransitMap.prototype.set = function(a, b) {
  this.hashCode = -1;
  var c = com.cognitect.transit.eq.hashCode(a), d = this.map[c];
  if (null == d) {
    this._keys && this._keys.push(c), this.map[c] = [a, b], this.size++;
  } else {
    for (var c = !0, e = 0; e < d.length; e += 2) {
      if (com.cognitect.transit.eq.equals(b, d[e])) {
        c = !1;
        d[e] = b;
        break;
      }
    }
    c && (d.push(a), d.push(b), this.size++);
  }
};
com.cognitect.transit.types.TransitMap.prototype.set = com.cognitect.transit.types.TransitMap.prototype.set;
com.cognitect.transit.types.TransitMap.prototype.values = function() {
  return new com.cognitect.transit.types.TransitMapIterator(this, com.cognitect.transit.types.VALUES);
};
com.cognitect.transit.types.TransitMap.prototype.values = com.cognitect.transit.types.TransitMap.prototype.values;
com.cognitect.transit.types.TransitMap.prototype.clone = function() {
  var a = com.cognitect.transit.types.map();
  this.forEach(function(b, c) {
    a.set(c, b);
  });
  return a;
};
com.cognitect.transit.types.TransitMap.prototype.clone = com.cognitect.transit.types.TransitMap.prototype.clone;
com.cognitect.transit.types.TransitMap.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this.entries();
};
com.cognitect.transit.types.TransitMap.prototype.com$cognitect$transit$hashCode = function() {
  -1 === this.hashCode && (this.hashCode = com.cognitect.transit.eq.hashMapLike(this));
  return this.hashCode;
};
com.cognitect.transit.types.TransitMap.prototype.com$cognitect$transit$equals = function(a) {
  return com.cognitect.transit.types.mapEquals(this, a);
};
com.cognitect.transit.types.map = function(a, b, c) {
  a = a || [];
  b = !1 === b ? b : !0;
  if ((!0 !== c || !c) && a.length <= 2 * com.cognitect.transit.types.ARRAY_MAP_THRESHOLD) {
    if (b) {
      var d = a;
      a = [];
      for (b = 0; b < d.length; b += 2) {
        var e = !1;
        for (c = 0; c < a.length; c += 2) {
          if (com.cognitect.transit.eq.equals(a[c], d[b])) {
            a[c + 1] = d[b + 1];
            e = !0;
            break;
          }
        }
        e || (a.push(d[b]), a.push(d[b + 1]));
      }
    }
    return new com.cognitect.transit.types.TransitArrayMap(a);
  }
  var d = {}, e = [], f = 0;
  for (b = 0; b < a.length; b += 2) {
    c = com.cognitect.transit.eq.hashCode(a[b]);
    var g = d[c];
    if (null == g) {
      e.push(c), d[c] = [a[b], a[b + 1]], f++;
    } else {
      var h = !0;
      for (c = 0; c < g.length; c += 2) {
        if (com.cognitect.transit.eq.equals(g[c], a[b])) {
          g[c + 1] = a[b + 1];
          h = !1;
          break;
        }
      }
      h && (g.push(a[b]), g.push(a[b + 1]), f++);
    }
  }
  return new com.cognitect.transit.types.TransitMap(e, d, f);
};
com.cognitect.transit.types.isArrayMap = function(a) {
  return a instanceof com.cognitect.transit.types.TransitArrayMap;
};
com.cognitect.transit.types.isMap = function(a) {
  return a instanceof com.cognitect.transit.types.TransitArrayMap || a instanceof com.cognitect.transit.types.TransitMap;
};
com.cognitect.transit.types.TransitSet = function(a) {
  this.map = a;
  this.size = a.size;
};
com.cognitect.transit.types.TransitSet.prototype.toString = function() {
  return com.cognitect.transit.types.printSet(this);
};
com.cognitect.transit.types.TransitSet.prototype.inspect = function() {
  return this.toString();
};
com.cognitect.transit.types.TransitSet.prototype.add = function(a) {
  this.map.set(a, a);
  this.size = this.map.size;
};
com.cognitect.transit.types.TransitSet.prototype.add = com.cognitect.transit.types.TransitSet.prototype.add;
com.cognitect.transit.types.TransitSet.prototype.clear = function() {
  this.map = new com.cognitect.transit.types.TransitMap;
  this.size = 0;
};
com.cognitect.transit.types.TransitSet.prototype.clear = com.cognitect.transit.types.TransitSet.prototype.clear;
com.cognitect.transit.types.TransitSet.prototype["delete"] = function(a) {
  a = this.map["delete"](a);
  this.size = this.map.size;
  return a;
};
com.cognitect.transit.types.TransitSet.prototype.entries = function() {
  return this.map.entries();
};
com.cognitect.transit.types.TransitSet.prototype.entries = com.cognitect.transit.types.TransitSet.prototype.entries;
com.cognitect.transit.types.TransitSet.prototype.forEach = function(a, b) {
  var c = this;
  this.map.forEach(function(b, e, f) {
    a(e, c);
  });
};
com.cognitect.transit.types.TransitSet.prototype.forEach = com.cognitect.transit.types.TransitSet.prototype.forEach;
com.cognitect.transit.types.TransitSet.prototype.has = function(a) {
  return this.map.has(a);
};
com.cognitect.transit.types.TransitSet.prototype.has = com.cognitect.transit.types.TransitSet.prototype.has;
com.cognitect.transit.types.TransitSet.prototype.keys = function() {
  return this.map.keys();
};
com.cognitect.transit.types.TransitSet.prototype.keys = com.cognitect.transit.types.TransitSet.prototype.keys;
com.cognitect.transit.types.TransitSet.prototype.keySet = function() {
  return this.map.keySet();
};
com.cognitect.transit.types.TransitSet.prototype.keySet = com.cognitect.transit.types.TransitSet.prototype.keySet;
com.cognitect.transit.types.TransitSet.prototype.values = function() {
  return this.map.values();
};
com.cognitect.transit.types.TransitSet.prototype.values = com.cognitect.transit.types.TransitSet.prototype.values;
com.cognitect.transit.types.TransitSet.prototype.clone = function() {
  var a = com.cognitect.transit.types.set();
  this.forEach(function(b) {
    a.add(b);
  });
  return a;
};
com.cognitect.transit.types.TransitSet.prototype.clone = com.cognitect.transit.types.TransitSet.prototype.clone;
com.cognitect.transit.types.TransitSet.prototype[com.cognitect.transit.types.ITERATOR] = function() {
  return this.values();
};
com.cognitect.transit.types.TransitSet.prototype.com$cognitect$transit$equals = function(a) {
  if (a instanceof com.cognitect.transit.types.TransitSet) {
    if (this.size === a.size) {
      return com.cognitect.transit.eq.equals(this.map, a.map);
    }
  } else {
    return !1;
  }
};
com.cognitect.transit.types.TransitSet.prototype.com$cognitect$transit$hashCode = function(a) {
  return com.cognitect.transit.eq.hashCode(this.map);
};
com.cognitect.transit.types.set = function(a) {
  a = a || [];
  for (var b = {}, c = [], d = 0, e = 0; e < a.length; e++) {
    var f = com.cognitect.transit.eq.hashCode(a[e]), g = b[f];
    if (null == g) {
      c.push(f), b[f] = [a[e], a[e]], d++;
    } else {
      for (var f = !0, h = 0; h < g.length; h += 2) {
        if (com.cognitect.transit.eq.equals(g[h], a[e])) {
          f = !1;
          break;
        }
      }
      f && (g.push(a[e]), g.push(a[e]), d++);
    }
  }
  return new com.cognitect.transit.types.TransitSet(new com.cognitect.transit.types.TransitMap(c, b, d));
};
com.cognitect.transit.types.isSet = function(a) {
  return a instanceof com.cognitect.transit.types.TransitSet;
};
com.cognitect.transit.types.quoted = function(a) {
  return com.cognitect.transit.types.taggedValue("'", a);
};
com.cognitect.transit.types.isQuoted = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "'" === a.tag;
};
com.cognitect.transit.types.list = function(a) {
  return com.cognitect.transit.types.taggedValue("list", a);
};
com.cognitect.transit.types.isList = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "list" === a.tag;
};
com.cognitect.transit.types.link = function(a) {
  return com.cognitect.transit.types.taggedValue("link", a);
};
com.cognitect.transit.types.isLink = function(a) {
  return a instanceof com.cognitect.transit.types.TaggedValue && "link" === a.tag;
};
com.cognitect.transit.types.specialDouble = function(a) {
  switch(a) {
    case "-INF":
      return -Infinity;
    case "INF":
      return Infinity;
    case "NaN":
      return NaN;
    default:
      throw Error("Invalid special double value " + a);
  }
};
com.cognitect.transit.handlers = {};
com.cognitect.transit.handlers.ctorGuid = 0;
com.cognitect.transit.handlers.ctorGuidProperty = "transit$guid$" + com.cognitect.transit.util.randomUUID();
com.cognitect.transit.handlers.typeTag = function(a) {
  if (null == a) {
    return "null";
  }
  if (a === String) {
    return "string";
  }
  if (a === Boolean) {
    return "boolean";
  }
  if (a === Number) {
    return "number";
  }
  if (a === Array) {
    return "array";
  }
  if (a === Object) {
    return "map";
  }
  var b = a[com.cognitect.transit.handlers.ctorGuidProperty];
  null == b && ("undefined" != typeof Object.defineProperty ? (b = ++com.cognitect.transit.handlers.ctorGuid, Object.defineProperty(a, com.cognitect.transit.handlers.ctorGuidProperty, {value:b, enumerable:!1})) : a[com.cognitect.transit.handlers.ctorGuidProperty] = b = ++com.cognitect.transit.handlers.ctorGuid);
  return b;
};
com.cognitect.transit.handlers.constructor = function(a) {
  return null == a ? null : a.constructor;
};
com.cognitect.transit.handlers.padZeros = function(a, b) {
  for (var c = a.toString(), d = c.length; d < b; d++) {
    c = "0" + c;
  }
  return c;
};
com.cognitect.transit.handlers.stringableKeys = function(a) {
  a = com.cognitect.transit.util.objectKeys(a);
  for (var b = 0; b < a.length; b++) {
  }
  return !0;
};
com.cognitect.transit.handlers.NilHandler = function() {
};
com.cognitect.transit.handlers.NilHandler.prototype.tag = function(a) {
  return "_";
};
com.cognitect.transit.handlers.NilHandler.prototype.rep = function(a) {
  return null;
};
com.cognitect.transit.handlers.NilHandler.prototype.stringRep = function(a) {
  return "null";
};
com.cognitect.transit.handlers.StringHandler = function() {
};
com.cognitect.transit.handlers.StringHandler.prototype.tag = function(a) {
  return "s";
};
com.cognitect.transit.handlers.StringHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.StringHandler.prototype.stringRep = function(a) {
  return a;
};
com.cognitect.transit.handlers.NumberHandler = function() {
};
com.cognitect.transit.handlers.NumberHandler.prototype.tag = function(a) {
  return "i";
};
com.cognitect.transit.handlers.NumberHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.NumberHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.IntegerHandler = function() {
};
com.cognitect.transit.handlers.IntegerHandler.prototype.tag = function(a) {
  return "i";
};
com.cognitect.transit.handlers.IntegerHandler.prototype.rep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.IntegerHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.BooleanHandler = function() {
};
com.cognitect.transit.handlers.BooleanHandler.prototype.tag = function(a) {
  return "?";
};
com.cognitect.transit.handlers.BooleanHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.BooleanHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.ArrayHandler = function() {
};
com.cognitect.transit.handlers.ArrayHandler.prototype.tag = function(a) {
  return "array";
};
com.cognitect.transit.handlers.ArrayHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.ArrayHandler.prototype.stringRep = function(a) {
  return null;
};
com.cognitect.transit.handlers.MapHandler = function() {
};
com.cognitect.transit.handlers.MapHandler.prototype.tag = function(a) {
  return "map";
};
com.cognitect.transit.handlers.MapHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.MapHandler.prototype.stringRep = function(a) {
  return null;
};
com.cognitect.transit.handlers.VerboseDateHandler = function() {
};
com.cognitect.transit.handlers.VerboseDateHandler.prototype.tag = function(a) {
  return "t";
};
com.cognitect.transit.handlers.VerboseDateHandler.prototype.rep = function(a) {
  return a.getUTCFullYear() + "-" + com.cognitect.transit.handlers.padZeros(a.getUTCMonth() + 1, 2) + "-" + com.cognitect.transit.handlers.padZeros(a.getUTCDate(), 2) + "T" + com.cognitect.transit.handlers.padZeros(a.getUTCHours(), 2) + ":" + com.cognitect.transit.handlers.padZeros(a.getUTCMinutes(), 2) + ":" + com.cognitect.transit.handlers.padZeros(a.getUTCSeconds(), 2) + "." + com.cognitect.transit.handlers.padZeros(a.getUTCMilliseconds(), 3) + "Z";
};
com.cognitect.transit.handlers.VerboseDateHandler.prototype.stringRep = function(a, b) {
  return b.rep(a);
};
com.cognitect.transit.handlers.DateHandler = function() {
};
com.cognitect.transit.handlers.DateHandler.prototype.tag = function(a) {
  return "m";
};
com.cognitect.transit.handlers.DateHandler.prototype.rep = function(a) {
  return a.valueOf();
};
com.cognitect.transit.handlers.DateHandler.prototype.stringRep = function(a) {
  return a.valueOf().toString();
};
com.cognitect.transit.handlers.DateHandler.prototype.getVerboseHandler = function(a) {
  return new com.cognitect.transit.handlers.VerboseDateHandler;
};
com.cognitect.transit.handlers.UUIDHandler = function() {
};
com.cognitect.transit.handlers.UUIDHandler.prototype.tag = function(a) {
  return "u";
};
com.cognitect.transit.handlers.UUIDHandler.prototype.rep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.UUIDHandler.prototype.stringRep = function(a) {
  return a.toString();
};
com.cognitect.transit.handlers.KeywordHandler = function() {
};
com.cognitect.transit.handlers.KeywordHandler.prototype.tag = function(a) {
  return ":";
};
com.cognitect.transit.handlers.KeywordHandler.prototype.rep = function(a) {
  return a._name;
};
com.cognitect.transit.handlers.KeywordHandler.prototype.stringRep = function(a, b) {
  return b.rep(a);
};
com.cognitect.transit.handlers.SymbolHandler = function() {
};
com.cognitect.transit.handlers.SymbolHandler.prototype.tag = function(a) {
  return "$";
};
com.cognitect.transit.handlers.SymbolHandler.prototype.rep = function(a) {
  return a._name;
};
com.cognitect.transit.handlers.SymbolHandler.prototype.stringRep = function(a, b) {
  return b.rep(a);
};
com.cognitect.transit.handlers.TaggedHandler = function() {
};
com.cognitect.transit.handlers.TaggedHandler.prototype.tag = function(a) {
  return a.tag;
};
com.cognitect.transit.handlers.TaggedHandler.prototype.rep = function(a) {
  return a.rep;
};
com.cognitect.transit.handlers.TaggedHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.TransitSetHandler = function() {
};
com.cognitect.transit.handlers.TransitSetHandler.prototype.tag = function(a) {
  return "set";
};
com.cognitect.transit.handlers.TransitSetHandler.prototype.rep = function(a) {
  var b = [];
  a.forEach(function(a, d) {
    b.push(a);
  });
  return com.cognitect.transit.types.taggedValue("array", b);
};
com.cognitect.transit.handlers.TransitSetHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.TransitArrayMapHandler = function() {
};
com.cognitect.transit.handlers.TransitArrayMapHandler.prototype.tag = function(a) {
  return "map";
};
com.cognitect.transit.handlers.TransitArrayMapHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.TransitArrayMapHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.TransitMapHandler = function() {
};
com.cognitect.transit.handlers.TransitMapHandler.prototype.tag = function(a) {
  return "map";
};
com.cognitect.transit.handlers.TransitMapHandler.prototype.rep = function(a) {
  return a;
};
com.cognitect.transit.handlers.TransitMapHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.BufferHandler = function() {
};
com.cognitect.transit.handlers.BufferHandler.prototype.tag = function(a) {
  return "b";
};
com.cognitect.transit.handlers.BufferHandler.prototype.rep = function(a) {
  return a.toString("base64");
};
com.cognitect.transit.handlers.BufferHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.Uint8ArrayHandler = function() {
};
com.cognitect.transit.handlers.Uint8ArrayHandler.prototype.tag = function(a) {
  return "b";
};
com.cognitect.transit.handlers.Uint8ArrayHandler.prototype.rep = function(a) {
  return com.cognitect.transit.util.Uint8ToBase64(a);
};
com.cognitect.transit.handlers.Uint8ArrayHandler.prototype.stringRep = function(a, b) {
  return null;
};
com.cognitect.transit.handlers.defaultHandlers = function(a) {
  a.set(null, new com.cognitect.transit.handlers.NilHandler);
  a.set(String, new com.cognitect.transit.handlers.StringHandler);
  a.set(Number, new com.cognitect.transit.handlers.NumberHandler);
  a.set(goog.math.Long, new com.cognitect.transit.handlers.IntegerHandler);
  a.set(Boolean, new com.cognitect.transit.handlers.BooleanHandler);
  a.set(Array, new com.cognitect.transit.handlers.ArrayHandler);
  a.set(Object, new com.cognitect.transit.handlers.MapHandler);
  a.set(Date, new com.cognitect.transit.handlers.DateHandler);
  a.set(com.cognitect.transit.types.UUID, new com.cognitect.transit.handlers.UUIDHandler);
  a.set(com.cognitect.transit.types.Keyword, new com.cognitect.transit.handlers.KeywordHandler);
  a.set(com.cognitect.transit.types.Symbol, new com.cognitect.transit.handlers.SymbolHandler);
  a.set(com.cognitect.transit.types.TaggedValue, new com.cognitect.transit.handlers.TaggedHandler);
  a.set(com.cognitect.transit.types.TransitSet, new com.cognitect.transit.handlers.TransitSetHandler);
  a.set(com.cognitect.transit.types.TransitArrayMap, new com.cognitect.transit.handlers.TransitArrayMapHandler);
  a.set(com.cognitect.transit.types.TransitMap, new com.cognitect.transit.handlers.TransitMapHandler);
  "undefined" != typeof goog.global.Buffer && a.set(goog.global.Buffer, new com.cognitect.transit.handlers.BufferHandler);
  "undefined" != typeof Uint8Array && a.set(Uint8Array, new com.cognitect.transit.handlers.Uint8ArrayHandler);
  return a;
};
com.cognitect.transit.handlers.Handlers = function() {
  this.handlers = {};
  com.cognitect.transit.handlers.defaultHandlers(this);
};
com.cognitect.transit.handlers.Handlers.prototype.get = function(a) {
  a = "string" === typeof a ? this.handlers[a] : this.handlers[com.cognitect.transit.handlers.typeTag(a)];
  return null != a ? a : this.handlers["default"];
};
com.cognitect.transit.handlers.Handlers.prototype.get = com.cognitect.transit.handlers.Handlers.prototype.get;
com.cognitect.transit.handlers.validTag = function(a) {
  switch(a) {
    case "null":
    case "string":
    case "boolean":
    case "number":
    case "array":
    case "map":
      return !1;
  }
  return !0;
};
com.cognitect.transit.handlers.Handlers.prototype.set = function(a, b) {
  "string" === typeof a && com.cognitect.transit.handlers.validTag(a) ? this.handlers[a] = b : this.handlers[com.cognitect.transit.handlers.typeTag(a)] = b;
};
com.cognitect.transit.impl = {};
com.cognitect.transit.impl.decoder = {};
com.cognitect.transit.impl.decoder.Tag = function(a) {
  this.str = a;
};
com.cognitect.transit.impl.decoder.tag = function(a) {
  return new com.cognitect.transit.impl.decoder.Tag(a);
};
com.cognitect.transit.impl.decoder.isTag = function(a) {
  return a && a instanceof com.cognitect.transit.impl.decoder.Tag;
};
com.cognitect.transit.impl.decoder.isGroundHandler = function(a) {
  switch(a) {
    case "_":
    case "s":
    case "?":
    case "i":
    case "d":
    case "b":
    case "'":
    case "array":
    case "map":
      return !0;
  }
  return !1;
};
com.cognitect.transit.impl.decoder.Decoder = function(a) {
  this.options = a || {};
  this.handlers = {};
  for (var b in this.defaults.handlers) {
    this.handlers[b] = this.defaults.handlers[b];
  }
  for (b in this.options.handlers) {
    if (com.cognitect.transit.impl.decoder.isGroundHandler(b)) {
      throw Error('Cannot override handler for ground type "' + b + '"');
    }
    this.handlers[b] = this.options.handlers[b];
  }
  this.preferStrings = null != this.options.preferStrings ? this.options.preferStrings : this.defaults.preferStrings;
  this.preferBuffers = null != this.options.preferBuffers ? this.options.preferBuffers : this.defaults.preferBuffers;
  this.defaultHandler = this.options.defaultHandler || this.defaults.defaultHandler;
  this.mapBuilder = this.options.mapBuilder;
  this.arrayBuilder = this.options.arrayBuilder;
};
com.cognitect.transit.impl.decoder.Decoder.prototype.defaults = {handlers:{_:function(a, b) {
  return com.cognitect.transit.types.nullValue();
}, "?":function(a, b) {
  return com.cognitect.transit.types.boolValue(a);
}, b:function(a, b) {
  return com.cognitect.transit.types.binary(a, b);
}, i:function(a, b) {
  return com.cognitect.transit.types.intValue(a);
}, n:function(a, b) {
  return com.cognitect.transit.types.bigInteger(a);
}, d:function(a, b) {
  return com.cognitect.transit.types.floatValue(a);
}, f:function(a, b) {
  return com.cognitect.transit.types.bigDecimalValue(a);
}, c:function(a, b) {
  return com.cognitect.transit.types.charValue(a);
}, ":":function(a, b) {
  return com.cognitect.transit.types.keyword(a);
}, $:function(a, b) {
  return com.cognitect.transit.types.symbol(a);
}, r:function(a, b) {
  return com.cognitect.transit.types.uri(a);
}, z:function(a, b) {
  return com.cognitect.transit.types.specialDouble(a);
}, "'":function(a, b) {
  return a;
}, m:function(a, b) {
  return com.cognitect.transit.types.date(a);
}, t:function(a, b) {
  return com.cognitect.transit.types.verboseDate(a);
}, u:function(a, b) {
  return com.cognitect.transit.types.uuid(a);
}, set:function(a, b) {
  return com.cognitect.transit.types.set(a);
}, list:function(a, b) {
  return com.cognitect.transit.types.list(a);
}, link:function(a, b) {
  return com.cognitect.transit.types.link(a);
}, cmap:function(a, b) {
  return com.cognitect.transit.types.map(a, !1);
}}, defaultHandler:function(a, b) {
  return com.cognitect.transit.types.taggedValue(a, b);
}, preferStrings:!0, preferBuffers:!0};
com.cognitect.transit.impl.decoder.Decoder.prototype.decode = function(a, b, c, d) {
  if (null == a) {
    return null;
  }
  switch(typeof a) {
    case "string":
      return this.decodeString(a, b, c, d);
    case "object":
      return com.cognitect.transit.util.isArray(a) ? "^ " === a[0] ? this.decodeArrayHash(a, b, c, d) : this.decodeArray(a, b, c, d) : this.decodeHash(a, b, c, d);
  }
  return a;
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decode = com.cognitect.transit.impl.decoder.Decoder.prototype.decode;
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeString = function(a, b, c, d) {
  return com.cognitect.transit.caching.isCacheable(a, c) ? (a = this.parseString(a, b, !1), b && b.write(a, c), a) : com.cognitect.transit.caching.isCacheCode(a) ? b.read(a, c) : this.parseString(a, b, c);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeHash = function(a, b, c, d) {
  c = com.cognitect.transit.util.objectKeys(a);
  var e = c[0];
  d = 1 == c.length ? this.decode(e, b, !1, !1) : null;
  if (com.cognitect.transit.impl.decoder.isTag(d)) {
    return a = a[e], c = this.handlers[d.str], null != c ? c(this.decode(a, b, !1, !0), this) : com.cognitect.transit.types.taggedValue(d.str, this.decode(a, b, !1, !1));
  }
  if (this.mapBuilder) {
    if (c.length < 2 * com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD && this.mapBuilder.fromArray) {
      var f = [];
      for (e = 0; e < c.length; e++) {
        d = c[e], f.push(this.decode(d, b, !0, !1)), f.push(this.decode(a[d], b, !1, !1));
      }
      return this.mapBuilder.fromArray(f, a);
    }
    f = this.mapBuilder.init(a);
    for (e = 0; e < c.length; e++) {
      d = c[e], f = this.mapBuilder.add(f, this.decode(d, b, !0, !1), this.decode(a[d], b, !1, !1), a);
    }
    return this.mapBuilder.finalize(f, a);
  }
  f = [];
  for (e = 0; e < c.length; e++) {
    d = c[e], f.push(this.decode(d, b, !0, !1)), f.push(this.decode(a[d], b, !1, !1));
  }
  return com.cognitect.transit.types.map(f, !1);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeArrayHash = function(a, b, c, d) {
  if (this.mapBuilder) {
    if (a.length < 2 * com.cognitect.transit.types.SMALL_ARRAY_MAP_THRESHOLD + 1 && this.mapBuilder.fromArray) {
      d = [];
      for (c = 1; c < a.length; c += 2) {
        d.push(this.decode(a[c], b, !0, !1)), d.push(this.decode(a[c + 1], b, !1, !1));
      }
      return this.mapBuilder.fromArray(d, a);
    }
    d = this.mapBuilder.init(a);
    for (c = 1; c < a.length; c += 2) {
      d = this.mapBuilder.add(d, this.decode(a[c], b, !0, !1), this.decode(a[c + 1], b, !1, !1), a);
    }
    return this.mapBuilder.finalize(d, a);
  }
  d = [];
  for (c = 1; c < a.length; c += 2) {
    d.push(this.decode(a[c], b, !0, !1)), d.push(this.decode(a[c + 1], b, !1, !1));
  }
  return com.cognitect.transit.types.map(d, !1);
};
com.cognitect.transit.impl.decoder.Decoder.prototype.decodeArray = function(a, b, c, d) {
  if (d) {
    var e = [];
    for (d = 0; d < a.length; d++) {
      e.push(this.decode(a[d], b, c, !1));
    }
    return e;
  }
  e = b && b.idx;
  if (2 === a.length && "string" === typeof a[0] && (d = this.decode(a[0], b, !1, !1), com.cognitect.transit.impl.decoder.isTag(d))) {
    return e = a[1], a = this.handlers[d.str], null != a ? e = a(this.decode(e, b, c, !0), this) : com.cognitect.transit.types.taggedValue(d.str, this.decode(e, b, c, !1));
  }
  b && e != b.idx && (b.idx = e);
  if (this.arrayBuilder) {
    if (32 >= a.length && this.arrayBuilder.fromArray) {
      e = [];
      for (d = 0; d < a.length; d++) {
        e.push(this.decode(a[d], b, c, !1));
      }
      return this.arrayBuilder.fromArray(e, a);
    }
    e = this.arrayBuilder.init(a);
    for (d = 0; d < a.length; d++) {
      e = this.arrayBuilder.add(e, this.decode(a[d], b, c, !1), a);
    }
    return this.arrayBuilder.finalize(e, a);
  }
  e = [];
  for (d = 0; d < a.length; d++) {
    e.push(this.decode(a[d], b, c, !1));
  }
  return e;
};
com.cognitect.transit.impl.decoder.Decoder.prototype.parseString = function(a, b, c) {
  if (a.charAt(0) === com.cognitect.transit.delimiters.ESC) {
    b = a.charAt(1);
    if (b === com.cognitect.transit.delimiters.ESC || b === com.cognitect.transit.delimiters.SUB || b === com.cognitect.transit.delimiters.RES) {
      return a.substring(1);
    }
    if (b === com.cognitect.transit.delimiters.TAG) {
      return com.cognitect.transit.impl.decoder.tag(a.substring(2));
    }
    c = this.handlers[b];
    return null == c ? this.defaultHandler(b, a.substring(2)) : c(a.substring(2), this);
  }
  return a;
};
com.cognitect.transit.impl.decoder.decoder = function(a) {
  return new com.cognitect.transit.impl.decoder.Decoder(a);
};
com.cognitect.transit.impl.reader = {};
com.cognitect.transit.impl.reader.JSONUnmarshaller = function(a) {
  this.decoder = new com.cognitect.transit.impl.decoder.Decoder(a);
};
com.cognitect.transit.impl.reader.JSONUnmarshaller.prototype.unmarshal = function(a, b) {
  return this.decoder.decode(JSON.parse(a), b);
};
com.cognitect.transit.impl.reader.Reader = function(a, b) {
  this.unmarshaller = a;
  this.options = b || {};
  this.cache = this.options.cache ? this.options.cache : new com.cognitect.transit.caching.ReadCache;
};
com.cognitect.transit.impl.reader.Reader.prototype.read = function(a) {
  a = this.unmarshaller.unmarshal(a, this.cache);
  this.cache.clear();
  return a;
};
com.cognitect.transit.impl.reader.Reader.prototype.read = com.cognitect.transit.impl.reader.Reader.prototype.read;
com.cognitect.transit.impl.writer = {};
com.cognitect.transit.impl.writer.escape = function(a) {
  if (0 < a.length) {
    var b = a.charAt(0);
    return b === com.cognitect.transit.delimiters.ESC || b === com.cognitect.transit.delimiters.SUB || b === com.cognitect.transit.delimiters.RES ? com.cognitect.transit.delimiters.ESC + a : a;
  }
  return a;
};
com.cognitect.transit.impl.writer.JSONMarshaller = function(a) {
  this.opts = a || {};
  this.preferStrings = null != this.opts.preferStrings ? this.opts.preferStrings : !0;
  this.objectBuilder = this.opts.objectBuilder || null;
  this.transform = this.opts.transform || null;
  this.handlers = new com.cognitect.transit.handlers.Handlers;
  if (a = this.opts.handlers) {
    if (com.cognitect.transit.util.isArray(a) || !a.forEach) {
      throw Error('transit writer "handlers" option must be a map');
    }
    var b = this;
    a.forEach(function(a, d) {
      if (void 0 !== d) {
        b.handlers.set(d, a);
      } else {
        throw Error("Cannot create handler for JavaScript undefined");
      }
    });
  }
  this.handlerForForeign = this.opts.handlerForForeign;
  this.unpack = this.opts.unpack || function(a) {
    return com.cognitect.transit.types.isArrayMap(a) && null === a.backingMap ? a._entries : !1;
  };
  this.verbose = this.opts && this.opts.verbose || !1;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.handler = function(a) {
  var b = this.handlers.get(com.cognitect.transit.handlers.constructor(a));
  return null != b ? b : (a = a && a.transitTag) ? this.handlers.get(a) : null;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.registerHandler = function(a, b) {
  this.handlers.set(a, b);
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitNil = function(a, b) {
  return a ? this.emitString(com.cognitect.transit.delimiters.ESC, "_", "", a, b) : null;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitString = function(a, b, c, d, e) {
  a = a + b + c;
  return e ? e.write(a, d) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitBoolean = function(a, b, c) {
  return b ? this.emitString(com.cognitect.transit.delimiters.ESC, "?", a.toString()[0], b, c) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitInteger = function(a, b, c) {
  return Infinity === a ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "INF", b, c) : -Infinity === a ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "-INF", b, c) : isNaN(a) ? this.emitString(com.cognitect.transit.delimiters.ESC, "z", "NaN", b, c) : b || "string" === typeof a || a instanceof goog.math.Long ? this.emitString(com.cognitect.transit.delimiters.ESC, "i", a.toString(), b, c) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitDouble = function(a, b, c) {
  return b ? this.emitString(a.ESC, "d", a, b, c) : a;
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitBinary = function(a, b, c) {
  return this.emitString(com.cognitect.transit.delimiters.ESC, "b", a, b, c);
};
com.cognitect.transit.impl.writer.JSONMarshaller.prototype.emitQuoted = function(a, b, c) {
  if (a.verbose) {
    a = {};
    var d = this.emitString(com.cognitect.transit.delimiters.ESC_TAG, "'", "", !0, c);
    a[d] = com.cognitect.transit.impl.writer.marshal(this, b, !1, c);
    return a;
  }
  return [this.emitString(com.cognitect.transit.delimiters.ESC_TAG, "'", "", !0, c), com.cognitect.transit.impl.writer.marshal(this, b, !1, c)];
};
com.cognitect.transit.impl.writer.emitObjects = function(a, b, c) {
  var d = [];
  if (com.cognitect.transit.util.isArray(b)) {
    for (var e = 0; e < b.length; e++) {
      d.push(com.cognitect.transit.impl.writer.marshal(a, b[e], !1, c));
    }
  } else {
    b.forEach(function(b, e) {
      d.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, c));
    });
  }
  return d;
};
com.cognitect.transit.impl.writer.emitArray = function(a, b, c, d) {
  return com.cognitect.transit.impl.writer.emitObjects(a, b, d);
};
com.cognitect.transit.impl.writer.isStringableKey = function(a, b) {
  if ("string" !== typeof b) {
    var c = a.handler(b);
    return c && 1 === c.tag(b).length;
  }
  return !0;
};
com.cognitect.transit.impl.writer.stringableKeys = function(a, b) {
  var c = a.unpack(b), d = !0;
  if (c) {
    for (var e = 0; e < c.length && (d = com.cognitect.transit.impl.writer.isStringableKey(a, c[e]), d); e += 2) {
    }
    return d;
  }
  if (b.keys && (c = b.keys(), e = null, c.next)) {
    for (e = c.next(); !e.done;) {
      d = com.cognitect.transit.impl.writer.isStringableKey(a, e.value);
      if (!d) {
        break;
      }
      e = c.next();
    }
    return d;
  }
  if (b.forEach) {
    return b.forEach(function(b, c) {
      d = d && com.cognitect.transit.impl.writer.isStringableKey(a, c);
    }), d;
  }
  throw Error("Cannot walk keys of object type " + com.cognitect.transit.handlers.constructor(b).name);
};
com.cognitect.transit.impl.writer.isForeignObject = function(a) {
  if (a.constructor.transit$isObject) {
    return !0;
  }
  var b = a.constructor.toString(), b = b.substr(9), b = b.substr(0, b.indexOf("(")), b = "Object" == b;
  "undefined" != typeof Object.defineProperty ? Object.defineProperty(a.constructor, "transit$isObject", {value:b, enumerable:!1}) : a.constructor.transit$isObject = b;
  return b;
};
com.cognitect.transit.impl.writer.emitMap = function(a, b, c, d) {
  var e = null, f = null, g = null, e = null;
  c = 0;
  if (b.constructor === Object || null != b.forEach || a.handlerForForeign && com.cognitect.transit.impl.writer.isForeignObject(b)) {
    if (a.verbose) {
      if (null != b.forEach) {
        if (com.cognitect.transit.impl.writer.stringableKeys(a, b)) {
          var h = {};
          b.forEach(function(b, c) {
            h[com.cognitect.transit.impl.writer.marshal(a, c, !0, !1)] = com.cognitect.transit.impl.writer.marshal(a, b, !1, d);
          });
        } else {
          e = a.unpack(b);
          f = [];
          g = a.emitString(com.cognitect.transit.delimiters.ESC_TAG, "cmap", "", !0, d);
          if (e) {
            for (; c < e.length; c += 2) {
              f.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !1, !1)), f.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
            }
          } else {
            b.forEach(function(b, c) {
              f.push(com.cognitect.transit.impl.writer.marshal(a, c, !1, !1));
              f.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, d));
            });
          }
          h = {};
          h[g] = f;
        }
      } else {
        for (e = com.cognitect.transit.util.objectKeys(b), h = {}; c < e.length; c++) {
          h[com.cognitect.transit.impl.writer.marshal(a, e[c], !0, !1)] = com.cognitect.transit.impl.writer.marshal(a, b[e[c]], !1, d);
        }
      }
      return h;
    }
    if (null != b.forEach) {
      if (com.cognitect.transit.impl.writer.stringableKeys(a, b)) {
        e = a.unpack(b);
        h = ["^ "];
        if (e) {
          for (; c < e.length; c += 2) {
            h.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !0, d)), h.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
          }
        } else {
          b.forEach(function(b, c) {
            h.push(com.cognitect.transit.impl.writer.marshal(a, c, !0, d));
            h.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, d));
          });
        }
        return h;
      }
      e = a.unpack(b);
      f = [];
      g = a.emitString(com.cognitect.transit.delimiters.ESC_TAG, "cmap", "", !0, d);
      if (e) {
        for (; c < e.length; c += 2) {
          f.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !1, d)), f.push(com.cognitect.transit.impl.writer.marshal(a, e[c + 1], !1, d));
        }
      } else {
        b.forEach(function(b, c) {
          f.push(com.cognitect.transit.impl.writer.marshal(a, c, !1, d));
          f.push(com.cognitect.transit.impl.writer.marshal(a, b, !1, d));
        });
      }
      return [g, f];
    }
    h = ["^ "];
    for (e = com.cognitect.transit.util.objectKeys(b); c < e.length; c++) {
      h.push(com.cognitect.transit.impl.writer.marshal(a, e[c], !0, d)), h.push(com.cognitect.transit.impl.writer.marshal(a, b[e[c]], !1, d));
    }
    return h;
  }
  if (null != a.objectBuilder) {
    return a.objectBuilder(b, function(b) {
      return com.cognitect.transit.impl.writer.marshal(a, b, !0, d);
    }, function(b) {
      return com.cognitect.transit.impl.writer.marshal(a, b, !1, d);
    });
  }
  c = com.cognitect.transit.handlers.constructor(b).name;
  e = Error("Cannot write " + c);
  e.data = {obj:b, type:c};
  throw e;
};
com.cognitect.transit.impl.writer.emitTaggedMap = function(a, b, c, d, e) {
  return a.verbose ? (d = {}, d[a.emitString(com.cognitect.transit.delimiters.ESC_TAG, b, "", !0, e)] = com.cognitect.transit.impl.writer.marshal(a, c, !1, e), d) : [a.emitString(com.cognitect.transit.delimiters.ESC_TAG, b, "", !0, e), com.cognitect.transit.impl.writer.marshal(a, c, !1, e)];
};
com.cognitect.transit.impl.writer.emitEncoded = function(a, b, c, d, e, f, g) {
  if (1 === c.length) {
    if ("string" === typeof d) {
      return a.emitString(com.cognitect.transit.delimiters.ESC, c, d, f, g);
    }
    if (f || a.preferStrings) {
      (d = a.verbose && b.getVerboseHandler()) ? (c = d.tag(e), d = d.stringRep(e, d)) : d = b.stringRep(e, b);
      if (null !== d) {
        return a.emitString(com.cognitect.transit.delimiters.ESC, c, d, f, g);
      }
      a = Error('Tag "' + c + '" cannot be encoded as string');
      a.data = {tag:c, rep:d, obj:e};
      throw a;
    }
  }
  return com.cognitect.transit.impl.writer.emitTaggedMap(a, c, d, f, g);
};
com.cognitect.transit.impl.writer.marshal = function(a, b, c, d) {
  null !== a.transform && (b = a.transform(b));
  var e = a.handler(b) || (a.handlerForForeign ? a.handlerForForeign(b, a.handlers) : null), f = e ? e.tag(b) : null, g = e ? e.rep(b) : null;
  if (null != e && null != f) {
    switch(f) {
      case "_":
        return a.emitNil(c, d);
      case "s":
        return a.emitString("", "", com.cognitect.transit.impl.writer.escape(g), c, d);
      case "?":
        return a.emitBoolean(g, c, d);
      case "i":
        return a.emitInteger(g, c, d);
      case "d":
        return a.emitDouble(g, c, d);
      case "b":
        return a.emitBinary(g, c, d);
      case "'":
        return a.emitQuoted(a, g, d);
      case "array":
        return com.cognitect.transit.impl.writer.emitArray(a, g, c, d);
      case "map":
        return com.cognitect.transit.impl.writer.emitMap(a, g, c, d);
      default:
        return com.cognitect.transit.impl.writer.emitEncoded(a, e, f, g, b, c, d);
    }
  } else {
    throw a = com.cognitect.transit.handlers.constructor(b).name, c = Error("Cannot write " + a), c.data = {obj:b, type:a}, c;
  }
};
com.cognitect.transit.impl.writer.maybeQuoted = function(a, b) {
  var c = a.handler(b) || (a.handlerForForeign ? a.handlerForForeign(b, a.handlers) : null);
  if (null != c) {
    return 1 === c.tag(b).length ? com.cognitect.transit.types.quoted(b) : b;
  }
  var c = com.cognitect.transit.handlers.constructor(b).name, d = Error("Cannot write " + c);
  d.data = {obj:b, type:c};
  throw d;
};
com.cognitect.transit.impl.writer.marshalTop = function(a, b, c, d) {
  return JSON.stringify(com.cognitect.transit.impl.writer.marshal(a, com.cognitect.transit.impl.writer.maybeQuoted(a, b), c, d));
};
com.cognitect.transit.impl.writer.Writer = function(a, b) {
  this._marshaller = a;
  this.options = b || {};
  this.cache = !1 === this.options.cache ? null : this.options.cache ? this.options.cache : new com.cognitect.transit.caching.WriteCache;
};
com.cognitect.transit.impl.writer.Writer.prototype.marshaller = function() {
  return this._marshaller;
};
com.cognitect.transit.impl.writer.Writer.prototype.marshaller = com.cognitect.transit.impl.writer.Writer.prototype.marshaller;
com.cognitect.transit.impl.writer.Writer.prototype.write = function(a, b) {
  var c = b || {};
  var d = c.asMapKey || !1, e = this._marshaller.verbose ? !1 : this.cache;
  c = !1 === c.marshalTop ? com.cognitect.transit.impl.writer.marshal(this._marshaller, a, d, e) : com.cognitect.transit.impl.writer.marshalTop(this._marshaller, a, d, e);
  null != this.cache && this.cache.clear();
  return c;
};
com.cognitect.transit.impl.writer.Writer.prototype.write = com.cognitect.transit.impl.writer.Writer.prototype.write;
com.cognitect.transit.impl.writer.Writer.prototype.register = function(a, b) {
  this._marshaller.registerHandler(a, b);
};
com.cognitect.transit.impl.writer.Writer.prototype.register = com.cognitect.transit.impl.writer.Writer.prototype.register;
var TRANSIT_DEV = !0, TRANSIT_NODE_TARGET = !0, TRANSIT_BROWSER_TARGET = !1, TRANSIT_BROWSER_AMD_TARGET = !1;
com.cognitect.transit.reader = function(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    var c = new com.cognitect.transit.impl.reader.JSONUnmarshaller(b);
    return new com.cognitect.transit.impl.reader.Reader(c, b);
  }
  throw Error("Cannot create reader of type " + a);
};
com.cognitect.transit.writer = function(a, b) {
  if ("json" === a || "json-verbose" === a || null == a) {
    "json-verbose" === a && (null == b && (b = {}), b.verbose = !0);
    var c = new com.cognitect.transit.impl.writer.JSONMarshaller(b);
    return new com.cognitect.transit.impl.writer.Writer(c, b);
  }
  c = Error('Type must be "json"');
  c.data = {type:a};
  throw c;
};
com.cognitect.transit.makeWriteHandler = function(a) {
  var b = function() {
  };
  b.prototype.tag = a.tag;
  b.prototype.rep = a.rep;
  b.prototype.stringRep = a.stringRep;
  b.prototype.getVerboseHandler = a.getVerboseHandler;
  return new b;
};
com.cognitect.transit.makeBuilder = function(a) {
  var b = function() {
  };
  b.prototype.init = a.init;
  b.prototype.add = a.add;
  b.prototype.finalize = a.finalize;
  b.prototype.fromArray = a.fromArray;
  return new b;
};
com.cognitect.transit.date = com.cognitect.transit.types.date;
com.cognitect.transit.integer = com.cognitect.transit.types.intValue;
com.cognitect.transit.isInteger = com.cognitect.transit.types.isInteger;
com.cognitect.transit.uuid = com.cognitect.transit.types.uuid;
com.cognitect.transit.isUUID = com.cognitect.transit.types.isUUID;
com.cognitect.transit.bigInt = com.cognitect.transit.types.bigInteger;
com.cognitect.transit.isBigInt = com.cognitect.transit.types.isBigInteger;
com.cognitect.transit.bigDec = com.cognitect.transit.types.bigDecimalValue;
com.cognitect.transit.isBigDec = com.cognitect.transit.types.isBigDecimal;
com.cognitect.transit.keyword = com.cognitect.transit.types.keyword;
com.cognitect.transit.isKeyword = com.cognitect.transit.types.isKeyword;
com.cognitect.transit.symbol = com.cognitect.transit.types.symbol;
com.cognitect.transit.isSymbol = com.cognitect.transit.types.isSymbol;
com.cognitect.transit.binary = com.cognitect.transit.types.binary;
com.cognitect.transit.isBinary = com.cognitect.transit.types.isBinary;
com.cognitect.transit.uri = com.cognitect.transit.types.uri;
com.cognitect.transit.isURI = com.cognitect.transit.types.isURI;
com.cognitect.transit.map = com.cognitect.transit.types.map;
com.cognitect.transit.isMap = com.cognitect.transit.types.isMap;
com.cognitect.transit.set = com.cognitect.transit.types.set;
com.cognitect.transit.isSet = com.cognitect.transit.types.isSet;
com.cognitect.transit.list = com.cognitect.transit.types.list;
com.cognitect.transit.isList = com.cognitect.transit.types.isList;
com.cognitect.transit.quoted = com.cognitect.transit.types.quoted;
com.cognitect.transit.isQuoted = com.cognitect.transit.types.isQuoted;
com.cognitect.transit.tagged = com.cognitect.transit.types.taggedValue;
com.cognitect.transit.isTaggedValue = com.cognitect.transit.types.isTaggedValue;
com.cognitect.transit.link = com.cognitect.transit.types.link;
com.cognitect.transit.isLink = com.cognitect.transit.types.isLink;
com.cognitect.transit.hash = com.cognitect.transit.eq.hashCode;
com.cognitect.transit.hashMapLike = com.cognitect.transit.eq.hashMapLike;
com.cognitect.transit.hashArrayLike = com.cognitect.transit.eq.hashArrayLike;
com.cognitect.transit.equals = com.cognitect.transit.eq.equals;
com.cognitect.transit.extendToEQ = com.cognitect.transit.eq.extendToEQ;
com.cognitect.transit.mapToObject = function(a) {
  var b = {};
  a.forEach(function(a, d) {
    if ("string" !== typeof d) {
      throw Error("Cannot convert map with non-string keys");
    }
    b[d] = a;
  });
  return b;
};
com.cognitect.transit.objectToMap = function(a) {
  var b = com.cognitect.transit.map(), c;
  for (c in a) {
    a.hasOwnProperty(c) && b.set(c, a[c]);
  }
  return b;
};
com.cognitect.transit.decoder = com.cognitect.transit.impl.decoder.decoder;
com.cognitect.transit.readCache = com.cognitect.transit.caching.readCache;
com.cognitect.transit.writeCache = com.cognitect.transit.caching.writeCache;
com.cognitect.transit.UUIDfromString = com.cognitect.transit.types.UUIDfromString;
com.cognitect.transit.randomUUID = com.cognitect.transit.util.randomUUID;
com.cognitect.transit.stringableKeys = com.cognitect.transit.impl.writer.stringableKeys;
TRANSIT_BROWSER_TARGET && (goog.exportSymbol("transit.reader", com.cognitect.transit.reader), goog.exportSymbol("transit.writer", com.cognitect.transit.writer), goog.exportSymbol("transit.makeBuilder", com.cognitect.transit.makeBuilder), goog.exportSymbol("transit.makeWriteHandler", com.cognitect.transit.makeWriteHandler), goog.exportSymbol("transit.date", com.cognitect.transit.types.date), goog.exportSymbol("transit.integer", com.cognitect.transit.types.intValue), goog.exportSymbol("transit.isInteger", 
com.cognitect.transit.types.isInteger), goog.exportSymbol("transit.uuid", com.cognitect.transit.types.uuid), goog.exportSymbol("transit.isUUID", com.cognitect.transit.types.isUUID), goog.exportSymbol("transit.bigInt", com.cognitect.transit.types.bigInteger), goog.exportSymbol("transit.isBigInt", com.cognitect.transit.types.isBigInteger), goog.exportSymbol("transit.bigDec", com.cognitect.transit.types.bigDecimalValue), goog.exportSymbol("transit.isBigDec", com.cognitect.transit.types.isBigDecimal), 
goog.exportSymbol("transit.keyword", com.cognitect.transit.types.keyword), goog.exportSymbol("transit.isKeyword", com.cognitect.transit.types.isKeyword), goog.exportSymbol("transit.symbol", com.cognitect.transit.types.symbol), goog.exportSymbol("transit.isSymbol", com.cognitect.transit.types.isSymbol), goog.exportSymbol("transit.binary", com.cognitect.transit.types.binary), goog.exportSymbol("transit.isBinary", com.cognitect.transit.types.isBinary), goog.exportSymbol("transit.uri", com.cognitect.transit.types.uri), 
goog.exportSymbol("transit.isURI", com.cognitect.transit.types.isURI), goog.exportSymbol("transit.map", com.cognitect.transit.types.map), goog.exportSymbol("transit.isMap", com.cognitect.transit.types.isMap), goog.exportSymbol("transit.set", com.cognitect.transit.types.set), goog.exportSymbol("transit.isSet", com.cognitect.transit.types.isSet), goog.exportSymbol("transit.list", com.cognitect.transit.types.list), goog.exportSymbol("transit.isList", com.cognitect.transit.types.isList), goog.exportSymbol("transit.quoted", 
com.cognitect.transit.types.quoted), goog.exportSymbol("transit.isQuoted", com.cognitect.transit.types.isQuoted), goog.exportSymbol("transit.tagged", com.cognitect.transit.types.taggedValue), goog.exportSymbol("transit.isTaggedValue", com.cognitect.transit.types.isTaggedValue), goog.exportSymbol("transit.link", com.cognitect.transit.types.link), goog.exportSymbol("transit.isLink", com.cognitect.transit.types.isLink), goog.exportSymbol("transit.hash", com.cognitect.transit.eq.hashCode), goog.exportSymbol("transit.hashMapLike", 
com.cognitect.transit.eq.hashMapLike), goog.exportSymbol("transit.hashArrayLike", com.cognitect.transit.eq.hashArrayLike), goog.exportSymbol("transit.equals", com.cognitect.transit.eq.equals), goog.exportSymbol("transit.extendToEQ", com.cognitect.transit.eq.extendToEQ), goog.exportSymbol("transit.mapToObject", com.cognitect.transit.mapToObject), goog.exportSymbol("transit.objectToMap", com.cognitect.transit.objectToMap), goog.exportSymbol("transit.decoder", com.cognitect.transit.impl.decoder.decoder), 
goog.exportSymbol("transit.UUIDfromString", com.cognitect.transit.types.UUIDfromString), goog.exportSymbol("transit.randomUUID", com.cognitect.transit.util.randomUUID), goog.exportSymbol("transit.stringableKeys", com.cognitect.transit.impl.writer.stringableKeys), goog.exportSymbol("transit.readCache", com.cognitect.transit.caching.readCache), goog.exportSymbol("transit.writeCache", com.cognitect.transit.caching.writeCache));
TRANSIT_NODE_TARGET && (module.exports = {reader:com.cognitect.transit.reader, writer:com.cognitect.transit.writer, makeBuilder:com.cognitect.transit.makeBuilder, makeWriteHandler:com.cognitect.transit.makeWriteHandler, date:com.cognitect.transit.types.date, integer:com.cognitect.transit.types.intValue, isInteger:com.cognitect.transit.types.isInteger, uuid:com.cognitect.transit.types.uuid, isUUID:com.cognitect.transit.types.isUUID, bigInt:com.cognitect.transit.types.bigInteger, isBigInt:com.cognitect.transit.types.isBigInteger, 
bigDec:com.cognitect.transit.types.bigDecimalValue, isBigDec:com.cognitect.transit.types.isBigDecimal, keyword:com.cognitect.transit.types.keyword, isKeyword:com.cognitect.transit.types.isKeyword, symbol:com.cognitect.transit.types.symbol, isSymbol:com.cognitect.transit.types.isSymbol, binary:com.cognitect.transit.types.binary, isBinary:com.cognitect.transit.types.isBinary, uri:com.cognitect.transit.types.uri, isURI:com.cognitect.transit.types.isURI, map:com.cognitect.transit.types.map, isMap:com.cognitect.transit.types.isMap, 
set:com.cognitect.transit.types.set, isSet:com.cognitect.transit.types.isSet, list:com.cognitect.transit.types.list, isList:com.cognitect.transit.types.isList, quoted:com.cognitect.transit.types.quoted, isQuoted:com.cognitect.transit.types.isQuoted, tagged:com.cognitect.transit.types.taggedValue, isTaggedValue:com.cognitect.transit.types.isTaggedValue, link:com.cognitect.transit.types.link, isLink:com.cognitect.transit.types.isLink, hash:com.cognitect.transit.eq.hashCode, hashArrayLike:com.cognitect.transit.eq.hashArrayLike, 
hashMapLike:com.cognitect.transit.eq.hashMapLike, equals:com.cognitect.transit.eq.equals, extendToEQ:com.cognitect.transit.eq.extendToEQ, mapToObject:com.cognitect.transit.mapToObject, objectToMap:com.cognitect.transit.objectToMap, decoder:com.cognitect.transit.impl.decoder.decoder, UUIDfromString:com.cognitect.transit.types.UUIDfromString, randomUUID:com.cognitect.transit.util.randomUUID, stringableKeys:com.cognitect.transit.impl.writer.stringableKeys, readCache:com.cognitect.transit.caching.readCache, 
writeCache:com.cognitect.transit.caching.writeCache});


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/automerge.js":
/*!**************************!*\
  !*** ./src/automerge.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var transit = __webpack_require__(/*! transit-immutable-js */ "./node_modules/transit-immutable-js/index.js");
var uuid = __webpack_require__(/*! ./uuid */ "./src/uuid.js");
var Frontend = __webpack_require__(/*! ../frontend */ "./frontend/index.js");

var _require = __webpack_require__(/*! ../backend/columnar */ "./backend/columnar.js"),
    encodeChange = _require.encodeChange,
    decodeChange = _require.decodeChange;

var _require2 = __webpack_require__(/*! ./common */ "./src/common.js"),
    isObject = _require2.isObject;

var backend = __webpack_require__(/*! ../backend */ "./backend/index.js"); // mutable: can be overridden with setDefaultBackend()

///// Automerge.* API

function init(options) {
  if (typeof options === 'string') {
    options = { actorId: options };
  } else if (typeof options === 'undefined') {
    options = {};
  } else if (!isObject(options)) {
    throw new TypeError('Unsupported options for init(): ' + options);
  }
  return Frontend.init(Object.assign({ backend: backend }, options));
}

/**
 * Returns a new document object initialized with the given state.
 */
function from(initialState, options) {
  var changeOpts = { message: 'Initialization', undoable: false };
  return change(init(options), changeOpts, function (doc) {
    return Object.assign(doc, initialState);
  });
}

function change(doc, options, callback) {
  var _Frontend$change = Frontend.change(doc, options, callback),
      _Frontend$change2 = _slicedToArray(_Frontend$change, 3),
      newDoc = _Frontend$change2[0],
      request = _Frontend$change2[1],
      change = _Frontend$change2[2];

  return newDoc;
}

function change2(doc, options, callback) {
  var _Frontend$change3 = Frontend.change(doc, options, callback),
      _Frontend$change4 = _slicedToArray(_Frontend$change3, 3),
      newDoc = _Frontend$change4[0],
      request = _Frontend$change4[1],
      change = _Frontend$change4[2];

  return [newDoc, change];
}

function emptyChange(doc, options) {
  var _Frontend$emptyChange = Frontend.emptyChange(doc, options),
      _Frontend$emptyChange2 = _slicedToArray(_Frontend$emptyChange, 3),
      newDoc = _Frontend$emptyChange2[0],
      request = _Frontend$emptyChange2[1],
      change = _Frontend$emptyChange2[2];

  return newDoc;
}

function undo(doc, options) {
  var _Frontend$undo = Frontend.undo(doc, options),
      _Frontend$undo2 = _slicedToArray(_Frontend$undo, 3),
      newDoc = _Frontend$undo2[0],
      request = _Frontend$undo2[1],
      change = _Frontend$undo2[2];

  return newDoc;
}

function redo(doc, options) {
  var _Frontend$redo = Frontend.redo(doc, options),
      _Frontend$redo2 = _slicedToArray(_Frontend$redo, 3),
      newDoc = _Frontend$redo2[0],
      request = _Frontend$redo2[1],
      change = _Frontend$redo2[2];

  return newDoc;
}

function clone(doc) {
  var state = backend.clone(Frontend.getBackendState(doc));
  var patch = backend.getPatch(state);
  patch.state = state;
  return Frontend.applyPatch(init(), patch);
}

function free(doc) {
  backend.free(Frontend.getBackendState(doc));
}

function load(data, options) {
  var state = backend.load(data);
  var patch = backend.getPatch(state);
  patch.state = state;
  return Frontend.applyPatch(init(options), patch);
}

function save(doc) {
  return backend.save(Frontend.getBackendState(doc));
}

function merge(localDoc, remoteDoc) {
  if (Frontend.getActorId(localDoc) === Frontend.getActorId(remoteDoc)) {
    throw new RangeError('Cannot merge an actor with itself');
  }
  // Just copy all changes from the remote doc; any duplicates will be ignored
  return applyChanges(localDoc, getAllChanges(remoteDoc));
}

function getChanges(oldDoc, newDoc) {
  var newState = Frontend.getBackendState(newDoc);
  return backend.getChanges(newState, Frontend.getDeps(oldDoc));
}

function getAllChanges(doc) {
  return backend.getChanges(Frontend.getBackendState(doc), []);
}

function applyChanges(doc, changes) {
  var oldState = Frontend.getBackendState(doc);

  var _backend$applyChanges = backend.applyChanges(oldState, changes),
      _backend$applyChanges2 = _slicedToArray(_backend$applyChanges, 2),
      newState = _backend$applyChanges2[0],
      patch = _backend$applyChanges2[1];

  patch.state = newState;
  return Frontend.applyPatch(doc, patch);
}

function getMissingDeps(doc) {
  return backend.getMissingDeps(Frontend.getBackendState(doc));
}

function equals(val1, val2) {
  if (!isObject(val1) || !isObject(val2)) return val1 === val2;
  var keys1 = Object.keys(val1).sort(),
      keys2 = Object.keys(val2).sort();
  if (keys1.length !== keys2.length) return false;
  for (var i = 0; i < keys1.length; i++) {
    if (keys1[i] !== keys2[i]) return false;
    if (!equals(val1[keys1[i]], val2[keys2[i]])) return false;
  }
  return true;
}

function getHistory(doc) {
  var actor = Frontend.getActorId(doc);
  var history = getAllChanges(doc);
  return history.map(function (change, index) {
    return {
      get change() {
        return decodeChange(change);
      },
      get snapshot() {
        var state = backend.loadChanges(backend.init(), history.slice(0, index + 1));
        var patch = backend.getPatch(state);
        patch.state = state;
        return Frontend.applyPatch(init(actor), patch);
      }
    };
  });
}

/**
 * Replaces the default backend implementation with a different one.
 * This allows you to switch to using the Rust/WebAssembly implementation.
 */
function setDefaultBackend(newBackend) {
  backend = newBackend;
}

module.exports = {
  change2: change2,
  init: init, from: from, change: change, emptyChange: emptyChange, undo: undo, redo: redo, clone: clone, free: free,
  load: load, save: save, merge: merge, getChanges: getChanges, getAllChanges: getAllChanges, applyChanges: applyChanges, getMissingDeps: getMissingDeps,
  encodeChange: encodeChange, decodeChange: decodeChange, equals: equals, getHistory: getHistory, uuid: uuid,
  Frontend: Frontend, setDefaultBackend: setDefaultBackend,
  get Backend() {
    return backend;
  }
};

var _arr = ['canUndo', 'canRedo', 'getObjectId', 'getObjectById', 'getActorId', 'setActorId', 'getConflicts', 'Text', 'Table', 'Counter'];
for (var _i = 0; _i < _arr.length; _i++) {
  var name = _arr[_i];
  module.exports[name] = Frontend[name];
}

/***/ }),

/***/ "./src/common.js":
/*!***********************!*\
  !*** ./src/common.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var ROOT_ID = '00000000-0000-0000-0000-000000000000';

function isObject(obj) {
  return (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null;
}

/**
 * Returns a shallow copy of the object `obj`. Faster than `Object.assign({}, obj)`.
 * https://jsperf.com/cloning-large-objects/1
 */
function copyObject(obj) {
  if (!isObject(obj)) return {};
  var copy = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Object.keys(obj)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      copy[key] = obj[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return copy;
}

/**
 * Takes a string in the form that is used to identify operations (a counter concatenated
 * with an actor ID, separated by an `@` sign) and returns an object `{counter, actorId}`.
 */
function parseOpId(opId) {
  var match = /^(\d+)@(.*)$/.exec(opId || '');
  if (!match) {
    throw new RangeError('Not a valid opId: ' + opId);
  }
  return { counter: parseInt(match[1]), actorId: match[2] };
}

/**
 * Returns true if the two byte arrays contain the same data, false if not.
 */
function equalBytes(array1, array2) {
  if (!(array1 instanceof Uint8Array) || !(array2 instanceof Uint8Array)) {
    throw new TypeError('equalBytes can only compare Uint8Arrays');
  }
  if (array1.byteLength !== array2.byteLength) return false;
  for (var i = 0; i < array1.byteLength; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
}

module.exports = {
  ROOT_ID: ROOT_ID, isObject: isObject, copyObject: copyObject, parseOpId: parseOpId, equalBytes: equalBytes
};

/***/ }),

/***/ "./src/uuid.js":
/*!*********************!*\
  !*** ./src/uuid.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uuid = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");

function defaultFactory() {
  return uuid().replace(/-/g, '');
}

var factory = defaultFactory;

function makeUuid() {
  return factory();
}

makeUuid.setFactory = function (newFactory) {
  factory = newFactory;
};
makeUuid.reset = function () {
  factory = defaultFactory;
};

module.exports = makeUuid;

/***/ })

/******/ });
});
//# sourceMappingURL=automerge.js.map