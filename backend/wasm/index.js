let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder } = require(String.raw`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachegetUint8Memory0 = null;
function getUint8Memory0() {
    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(32).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function getObject(idx) { return heap[idx]; }

let WASM_VECTOR_LEN = 0;

let cachegetNodeBufferMemory0 = null;
function getNodeBufferMemory0() {
    if (cachegetNodeBufferMemory0 === null || cachegetNodeBufferMemory0.buffer !== wasm.memory.buffer) {
        cachegetNodeBufferMemory0 = Buffer.from(wasm.memory.buffer);
    }
    return cachegetNodeBufferMemory0;
}

function passStringToWasm0(arg, malloc) {

    const len = Buffer.byteLength(arg);
    const ptr = malloc(len);
    getNodeBufferMemory0().write(arg, ptr, len);
    WASM_VECTOR_LEN = len;
    return ptr;
}

let cachegetInt32Memory0 = null;
function getInt32Memory0() {
    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== wasm.memory.buffer) {
        cachegetInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachegetInt32Memory0;
}

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }

function handleError(e) {
    wasm.__wbindgen_exn_store(addHeapObject(e));
}

function getArrayU8FromWasm0(ptr, len) {
    return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}
/**
*/
class State {

    static __wrap(ptr) {
        const obj = Object.create(State.prototype);
        obj.ptr = ptr;

        return obj;
    }

    free() {
        const ptr = this.ptr;
        this.ptr = 0;

        wasm.__wbg_state_free(ptr);
    }
    /**
    * @param {Array<any>} changes
    * @returns {any}
    */
    applyChanges(changes) {
        var ret = wasm.state_applyChanges(this.ptr, addHeapObject(changes));
        return takeObject(ret);
    }
    /**
    * @param {Array<any>} changes
    */
    loadChanges(changes) {
        wasm.state_loadChanges(this.ptr, addHeapObject(changes));
    }
    /**
    * @param {any} change
    * @returns {Array<any>}
    */
    applyLocalChange(change) {
        var ret = wasm.state_applyLocalChange(this.ptr, addHeapObject(change));
        return takeObject(ret);
    }
    /**
    * @returns {any}
    */
    getPatch() {
        var ret = wasm.state_getPatch(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} have_deps
    * @returns {Array<any>}
    */
    getChanges(have_deps) {
        var ret = wasm.state_getChanges(this.ptr, addHeapObject(have_deps));
        return takeObject(ret);
    }
    /**
    * @param {any} actorid
    * @returns {Array<any>}
    */
    getChangesForActor(actorid) {
        var ret = wasm.state_getChangesForActor(this.ptr, addHeapObject(actorid));
        return takeObject(ret);
    }
    /**
    * @returns {any}
    */
    getMissingDeps() {
        var ret = wasm.state_getMissingDeps(this.ptr);
        return takeObject(ret);
    }
    /**
    * @returns {any}
    */
    getUndoStack() {
        var ret = wasm.state_getUndoStack(this.ptr);
        return takeObject(ret);
    }
    /**
    * @returns {any}
    */
    getRedoStack() {
        var ret = wasm.state_getRedoStack(this.ptr);
        return takeObject(ret);
    }
    /**
    * @returns {State}
    */
    clone() {
        var ret = wasm.state_clone(this.ptr);
        return State.__wrap(ret);
    }
    /**
    * @returns {any}
    */
    save() {
        var ret = wasm.state_save(this.ptr);
        return takeObject(ret);
    }
    /**
    * @param {any} data
    * @returns {State}
    */
    static load(data) {
        var ret = wasm.state_load(addHeapObject(data));
        return State.__wrap(ret);
    }
    /**
    * @returns {State}
    */
    static new() {
        var ret = wasm.state_new();
        return State.__wrap(ret);
    }
}
module.exports.State = State;

module.exports.__wbindgen_json_parse = function(arg0, arg1) {
    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbindgen_json_serialize = function(arg0, arg1) {
    const obj = getObject(arg1);
    var ret = JSON.stringify(obj === undefined ? null : obj);
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_object_drop_ref = function(arg0) {
    takeObject(arg0);
};

module.exports.__wbg_now_291da96737e4c339 = typeof Date.now == 'function' ? Date.now : notDefined('Date.now');

module.exports.__wbg_self_1b7a39e3a92c949c = function() {
    try {
        var ret = self.self;
        return addHeapObject(ret);
    } catch (e) {
        handleError(e)
    }
};

module.exports.__wbg_require_604837428532a733 = function(arg0, arg1) {
    var ret = require(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_crypto_968f1772287e2df0 = function(arg0) {
    var ret = getObject(arg0).crypto;
    return addHeapObject(ret);
};

module.exports.__wbindgen_is_undefined = function(arg0) {
    var ret = getObject(arg0) === undefined;
    return ret;
};

module.exports.__wbg_getRandomValues_a3d34b4fee3c2869 = function(arg0) {
    var ret = getObject(arg0).getRandomValues;
    return addHeapObject(ret);
};

module.exports.__wbg_getRandomValues_f5e14ab7ac8e995d = function(arg0, arg1, arg2) {
    getObject(arg0).getRandomValues(getArrayU8FromWasm0(arg1, arg2));
};

module.exports.__wbg_randomFillSync_d5bd2d655fdf256a = function(arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
};

module.exports.__wbg_get_82c22aeeb618210d = function(arg0, arg1) {
    var ret = getObject(arg0)[arg1 >>> 0];
    return addHeapObject(ret);
};

module.exports.__wbg_length_1f2b77c3caba45bb = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

module.exports.__wbg_new_ec28d6ba821801cb = function() {
    var ret = new Array();
    return addHeapObject(ret);
};

module.exports.__wbg_push_ffaa2df7422d3b4c = function(arg0, arg1) {
    var ret = getObject(arg0).push(getObject(arg1));
    return ret;
};

module.exports.__wbg_new_a674acf697de3e9f = function(arg0, arg1) {
    var ret = new Error(getStringFromWasm0(arg0, arg1));
    return addHeapObject(ret);
};

module.exports.__wbg_buffer_f897a8d316863411 = function(arg0) {
    var ret = getObject(arg0).buffer;
    return addHeapObject(ret);
};

module.exports.__wbg_newwithbyteoffsetandlength_284676320876299d = function(arg0, arg1, arg2) {
    var ret = new Uint8Array(getObject(arg0), arg1 >>> 0, arg2 >>> 0);
    return addHeapObject(ret);
};

module.exports.__wbg_length_b7dc6aed3ca09be1 = function(arg0) {
    var ret = getObject(arg0).length;
    return ret;
};

module.exports.__wbg_new_da17c07b1fbb4a8b = function(arg0) {
    var ret = new Uint8Array(getObject(arg0));
    return addHeapObject(ret);
};

module.exports.__wbg_set_4a8545284001c06f = function(arg0, arg1, arg2) {
    getObject(arg0).set(getObject(arg1), arg2 >>> 0);
};

module.exports.__wbg_instanceof_Uint8Array_4342cb3c1a0c83fe = function(arg0) {
    var ret = getObject(arg0) instanceof Uint8Array;
    return ret;
};

module.exports.__wbindgen_debug_string = function(arg0, arg1) {
    var ret = debugString(getObject(arg1));
    var ptr0 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    var len0 = WASM_VECTOR_LEN;
    getInt32Memory0()[arg0 / 4 + 1] = len0;
    getInt32Memory0()[arg0 / 4 + 0] = ptr0;
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

module.exports.__wbindgen_rethrow = function(arg0) {
    throw takeObject(arg0);
};

module.exports.__wbindgen_memory = function() {
    var ret = wasm.memory;
    return addHeapObject(ret);
};

const path = require('path').join(__dirname, 'index_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

