var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) =>
  function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])((fn = 0))), res;
  };
var __commonJS = (cb, mod) =>
  function __require() {
    return (
      mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports
    );
  };
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key2 of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key2) && key2 !== except)
        __defProp(to, key2, {
          get: () => from[key2],
          enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, 'default', { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) => __copyProps(__defProp({}, '__esModule', { value: true }), mod);

// node_modules/.pnpm/@sveltejs+kit@1.0.0-next.379_svelte@3.49.0+vite@3.0.4/node_modules/@sveltejs/kit/dist/chunks/_commonjsHelpers.js
var commonjsGlobal;
var init_commonjsHelpers = __esm({
  'node_modules/.pnpm/@sveltejs+kit@1.0.0-next.379_svelte@3.49.0+vite@3.0.4/node_modules/@sveltejs/kit/dist/chunks/_commonjsHelpers.js'() {
    init_shims();
    commonjsGlobal =
      typeof globalThis !== 'undefined'
        ? globalThis
        : typeof window !== 'undefined'
        ? window
        : typeof global !== 'undefined'
        ? global
        : typeof self !== 'undefined'
        ? self
        : {};
  },
});

// node_modules/.pnpm/@sveltejs+kit@1.0.0-next.379_svelte@3.49.0+vite@3.0.4/node_modules/@sveltejs/kit/dist/node/polyfills.js
function nop() {}
function isStream(obj) {
  return obj && typeof obj.pipe === 'function';
}
function isBlobLike(object) {
  return (
    (Blob$1 && object instanceof Blob$1) ||
    (object &&
      typeof object === 'object' &&
      (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') &&
      /^(Blob|File)$/.test(object[Symbol.toStringTag]))
  );
}
function isObject(val) {
  return val !== null && typeof val === 'object';
}
function encode(val) {
  return encodeURIComponent(val);
}
function buildURL(url, queryParams) {
  if (url.includes('?') || url.includes('#')) {
    throw new Error('Query params cannot be passed when url already contains "?" or "#".');
  }
  if (!isObject(queryParams)) {
    throw new Error('Query params must be an object');
  }
  const parts = [];
  for (let [key2, val] of Object.entries(queryParams)) {
    if (val === null || typeof val === 'undefined') {
      continue;
    }
    if (!Array.isArray(val)) {
      val = [val];
    }
    for (const v of val) {
      if (isObject(v)) {
        throw new Error(
          'Passing object as a query param is not supported, please serialize to string up-front'
        );
      }
      parts.push(encode(key2) + '=' + encode(v));
    }
  }
  const serializedParams = parts.join('&');
  if (serializedParams) {
    url += '?' + serializedParams;
  }
  return url;
}
function parseURL(url) {
  if (typeof url === 'string') {
    url = new URL(url);
  }
  if (!url || typeof url !== 'object') {
    throw new InvalidArgumentError$e('invalid url');
  }
  if (url.port != null && url.port !== '' && !Number.isFinite(parseInt(url.port))) {
    throw new InvalidArgumentError$e('invalid port');
  }
  if (url.path != null && typeof url.path !== 'string') {
    throw new InvalidArgumentError$e('invalid path');
  }
  if (url.pathname != null && typeof url.pathname !== 'string') {
    throw new InvalidArgumentError$e('invalid pathname');
  }
  if (url.hostname != null && typeof url.hostname !== 'string') {
    throw new InvalidArgumentError$e('invalid hostname');
  }
  if (url.origin != null && typeof url.origin !== 'string') {
    throw new InvalidArgumentError$e('invalid origin');
  }
  if (!/^https?:/.test(url.origin || url.protocol)) {
    throw new InvalidArgumentError$e('invalid protocol');
  }
  if (!(url instanceof URL)) {
    const port = url.port != null ? url.port : url.protocol === 'https:' ? 443 : 80;
    const origin = url.origin != null ? url.origin : `${url.protocol}//${url.hostname}:${port}`;
    const path = url.path != null ? url.path : `${url.pathname || ''}${url.search || ''}`;
    url = new URL(path, origin);
  }
  return url;
}
function parseOrigin(url) {
  url = parseURL(url);
  if (url.pathname !== '/' || url.search || url.hash) {
    throw new InvalidArgumentError$e('invalid url');
  }
  return url;
}
function getHostname(host) {
  if (host[0] === '[') {
    const idx2 = host.indexOf(']');
    assert$7(idx2 !== -1);
    return host.substr(1, idx2 - 1);
  }
  const idx = host.indexOf(':');
  if (idx === -1) return host;
  return host.substr(0, idx);
}
function getServerName(host) {
  if (!host) {
    return null;
  }
  assert$7.strictEqual(typeof host, 'string');
  const servername = getHostname(host);
  if (net$2.isIP(servername)) {
    return '';
  }
  return servername;
}
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}
function isAsyncIterable(obj) {
  return !!(obj != null && typeof obj[Symbol.asyncIterator] === 'function');
}
function isIterable(obj) {
  return !!(
    obj != null &&
    (typeof obj[Symbol.iterator] === 'function' || typeof obj[Symbol.asyncIterator] === 'function')
  );
}
function bodyLength(body2) {
  if (body2 == null) {
    return 0;
  } else if (isStream(body2)) {
    const state = body2._readableState;
    return state && state.ended === true && Number.isFinite(state.length) ? state.length : null;
  } else if (isBlobLike(body2)) {
    return body2.size != null ? body2.size : null;
  } else if (isBuffer(body2)) {
    return body2.byteLength;
  }
  return null;
}
function isDestroyed(stream2) {
  return !stream2 || !!(stream2.destroyed || stream2[kDestroyed$1]);
}
function isReadableAborted(stream2) {
  const state = stream2 && stream2._readableState;
  return isDestroyed(stream2) && state && !state.endEmitted;
}
function destroy(stream2, err) {
  if (!isStream(stream2) || isDestroyed(stream2)) {
    return;
  }
  if (typeof stream2.destroy === 'function') {
    if (Object.getPrototypeOf(stream2).constructor === IncomingMessage) {
      stream2.socket = null;
    }
    stream2.destroy(err);
  } else if (err) {
    process.nextTick(
      (stream3, err2) => {
        stream3.emit('error', err2);
      },
      stream2,
      err
    );
  }
  if (stream2.destroyed !== true) {
    stream2[kDestroyed$1] = true;
  }
}
function parseKeepAliveTimeout(val) {
  const m = val.toString().match(KEEPALIVE_TIMEOUT_EXPR);
  return m ? parseInt(m[1], 10) * 1e3 : null;
}
function parseHeaders(headers2, obj = {}) {
  for (let i = 0; i < headers2.length; i += 2) {
    const key2 = headers2[i].toString().toLowerCase();
    let val = obj[key2];
    if (!val) {
      obj[key2] = headers2[i + 1].toString();
    } else {
      if (!Array.isArray(val)) {
        val = [val];
        obj[key2] = val;
      }
      val.push(headers2[i + 1].toString());
    }
  }
  return obj;
}
function parseRawHeaders(headers2) {
  return headers2.map((header) => header.toString());
}
function isBuffer(buffer) {
  return buffer instanceof Uint8Array || Buffer.isBuffer(buffer);
}
function validateHandler(handler, method, upgrade2) {
  if (!handler || typeof handler !== 'object') {
    throw new InvalidArgumentError$e('handler must be an object');
  }
  if (typeof handler.onConnect !== 'function') {
    throw new InvalidArgumentError$e('invalid onConnect method');
  }
  if (typeof handler.onError !== 'function') {
    throw new InvalidArgumentError$e('invalid onError method');
  }
  if (typeof handler.onBodySent !== 'function' && handler.onBodySent !== void 0) {
    throw new InvalidArgumentError$e('invalid onBodySent method');
  }
  if (upgrade2 || method === 'CONNECT') {
    if (typeof handler.onUpgrade !== 'function') {
      throw new InvalidArgumentError$e('invalid onUpgrade method');
    }
  } else {
    if (typeof handler.onHeaders !== 'function') {
      throw new InvalidArgumentError$e('invalid onHeaders method');
    }
    if (typeof handler.onData !== 'function') {
      throw new InvalidArgumentError$e('invalid onData method');
    }
    if (typeof handler.onComplete !== 'function') {
      throw new InvalidArgumentError$e('invalid onComplete method');
    }
  }
}
function isDisturbed(body2) {
  return !!(
    body2 &&
    (stream$1.isDisturbed
      ? stream$1.isDisturbed(body2) || body2[kBodyUsed$1]
      : body2[kBodyUsed$1] ||
        body2.readableDidRead ||
        (body2._readableState && body2._readableState.dataEmitted) ||
        isReadableAborted(body2))
  );
}
function isErrored(body2) {
  return !!(
    body2 &&
    (stream$1.isErrored
      ? stream$1.isErrored(body2)
      : /state: 'errored'/.test(nodeUtil.inspect(body2)))
  );
}
function isReadable(body2) {
  return !!(
    body2 &&
    (stream$1.isReadable
      ? stream$1.isReadable(body2)
      : /state: 'readable'/.test(nodeUtil.inspect(body2)))
  );
}
function getSocketInfo(socket) {
  return {
    localAddress: socket.localAddress,
    localPort: socket.localPort,
    remoteAddress: socket.remoteAddress,
    remotePort: socket.remotePort,
    remoteFamily: socket.remoteFamily,
    timeout: socket.timeout,
    bytesWritten: socket.bytesWritten,
    bytesRead: socket.bytesRead,
  };
}
function ReadableStreamFrom$1(iterable) {
  if (!ReadableStream2) {
    ReadableStream2 = import_web.default.ReadableStream;
  }
  if (ReadableStream2.from) {
    return ReadableStream2.from(iterable);
  }
  let iterator;
  return new ReadableStream2(
    {
      async start() {
        iterator = iterable[Symbol.asyncIterator]();
      },
      async pull(controller) {
        const { done, value } = await iterator.next();
        if (done) {
          queueMicrotask(() => {
            controller.close();
          });
        } else {
          const buf = Buffer.isBuffer(value) ? value : Buffer.from(value);
          controller.enqueue(new Uint8Array(buf));
        }
        return controller.desiredSize > 0;
      },
      async cancel(reason) {
        await iterator.return();
      },
    },
    0
  );
}
function isFormDataLike(chunk) {
  return chunk && chunk.constructor && chunk.constructor.name === 'FormData';
}
function requireConstants$1() {
  if (hasRequiredConstants$1) return constants$2;
  hasRequiredConstants$1 = 1;
  const corsSafeListedMethods = ['GET', 'HEAD', 'POST'];
  const nullBodyStatus = [101, 204, 205, 304];
  const redirectStatus = [301, 302, 303, 307, 308];
  const referrerPolicy = [
    '',
    'no-referrer',
    'no-referrer-when-downgrade',
    'same-origin',
    'origin',
    'strict-origin',
    'origin-when-cross-origin',
    'strict-origin-when-cross-origin',
    'unsafe-url',
  ];
  const requestRedirect = ['follow', 'manual', 'error'];
  const safeMethods = ['GET', 'HEAD', 'OPTIONS', 'TRACE'];
  const requestMode = ['navigate', 'same-origin', 'no-cors', 'cors'];
  const requestCredentials = ['omit', 'same-origin', 'include'];
  const requestCache = [
    'default',
    'no-store',
    'reload',
    'no-cache',
    'force-cache',
    'only-if-cached',
  ];
  const requestBodyHeader = [
    'content-encoding',
    'content-language',
    'content-location',
    'content-type',
  ];
  const forbiddenMethods = ['CONNECT', 'TRACE', 'TRACK'];
  const subresource = [
    'audio',
    'audioworklet',
    'font',
    'image',
    'manifest',
    'paintworklet',
    'script',
    'style',
    'track',
    'video',
    'xslt',
    '',
  ];
  const DOMException =
    globalThis.DOMException ??
    (() => {
      try {
        atob('~');
      } catch (err) {
        return Object.getPrototypeOf(err).constructor;
      }
    })();
  constants$2 = {
    DOMException,
    subresource,
    forbiddenMethods,
    requestBodyHeader,
    referrerPolicy,
    requestRedirect,
    requestMode,
    requestCredentials,
    requestCache,
    redirectStatus,
    corsSafeListedMethods,
    nullBodyStatus,
    safeMethods,
  };
  return constants$2;
}
function requireSymbols() {
  if (hasRequiredSymbols) return symbols;
  hasRequiredSymbols = 1;
  symbols = {
    kUrl: Symbol('url'),
    kHeaders: Symbol('headers'),
    kSignal: Symbol('signal'),
    kState: Symbol('state'),
    kGuard: Symbol('guard'),
    kRealm: Symbol('realm'),
  };
  return symbols;
}
function requireWebidl() {
  if (hasRequiredWebidl) return webidl_1;
  hasRequiredWebidl = 1;
  const { toUSVString: toUSVString2, types } = import_util.default;
  const webidl = {};
  webidl.converters = {};
  webidl.util = {};
  webidl.errors = {};
  webidl.errors.exception = function (message) {
    throw new TypeError(`${message.header}: ${message.message}`);
  };
  webidl.errors.conversionFailed = function (context) {
    const plural = context.types.length === 1 ? '' : ' one of';
    const message = `${context.argument} could not be converted to${plural}: ${context.types.join(
      ', '
    )}.`;
    return webidl.errors.exception({
      header: context.prefix,
      message,
    });
  };
  webidl.errors.invalidArgument = function (context) {
    return webidl.errors.exception({
      header: context.prefix,
      message: `"${context.value}" is an invalid ${context.type}.`,
    });
  };
  webidl.util.Type = function (V) {
    switch (typeof V) {
      case 'undefined':
        return 'Undefined';
      case 'boolean':
        return 'Boolean';
      case 'string':
        return 'String';
      case 'symbol':
        return 'Symbol';
      case 'number':
        return 'Number';
      case 'bigint':
        return 'BigInt';
      case 'function':
      case 'object': {
        if (V === null) {
          return 'Null';
        }
        return 'Object';
      }
    }
  };
  webidl.util.ConvertToInt = function (V, bitLength, signedness, opts = {}) {
    let upperBound;
    let lowerBound;
    if (bitLength === 64) {
      upperBound = Math.pow(2, 53) - 1;
      if (signedness === 'unsigned') {
        lowerBound = 0;
      } else {
        lowerBound = Math.pow(-2, 53) + 1;
      }
    } else if (signedness === 'unsigned') {
      lowerBound = 0;
      upperBound = Math.pow(2, bitLength) - 1;
    } else {
      lowerBound = Math.pow(-2, bitLength) - 1;
      upperBound = Math.pow(2, bitLength - 1) - 1;
    }
    let x = Number(V);
    if (Object.is(-0, x)) {
      x = 0;
    }
    if (opts.enforceRange === true) {
      if (Number.isNaN(x) || x === Number.POSITIVE_INFINITY || x === Number.NEGATIVE_INFINITY) {
        webidl.errors.exception({
          header: 'Integer conversion',
          message: `Could not convert ${V} to an integer.`,
        });
      }
      x = webidl.util.IntegerPart(x);
      if (x < lowerBound || x > upperBound) {
        webidl.errors.exception({
          header: 'Integer conversion',
          message: `Value must be between ${lowerBound}-${upperBound}, got ${x}.`,
        });
      }
      return x;
    }
    if (!Number.isNaN(x) && opts.clamp === true) {
      x = Math.min(Math.max(x, lowerBound), upperBound);
      if (Math.floor(x) % 2 === 0) {
        x = Math.floor(x);
      } else {
        x = Math.ceil(x);
      }
      return x;
    }
    if (
      Number.isNaN(x) ||
      Object.is(0, x) ||
      x === Number.POSITIVE_INFINITY ||
      x === Number.NEGATIVE_INFINITY
    ) {
      return 0;
    }
    x = webidl.util.IntegerPart(x);
    x = x % Math.pow(2, bitLength);
    if (signedness === 'signed' && x >= Math.pow(2, bitLength) - 1) {
      return x - Math.pow(2, bitLength);
    }
    return x;
  };
  webidl.util.IntegerPart = function (n) {
    const r = Math.floor(Math.abs(n));
    if (n < 0) {
      return -1 * r;
    }
    return r;
  };
  webidl.sequenceConverter = function (converter) {
    return (V) => {
      var _a;
      if (webidl.util.Type(V) !== 'Object') {
        webidl.errors.exception({
          header: 'Sequence',
          message: `Value of type ${webidl.util.Type(V)} is not an Object.`,
        });
      }
      const method = (_a = V == null ? void 0 : V[Symbol.iterator]) == null ? void 0 : _a.call(V);
      const seq = [];
      if (method === void 0 || typeof method.next !== 'function') {
        webidl.errors.exception({
          header: 'Sequence',
          message: 'Object is not an iterator.',
        });
      }
      while (true) {
        const { done, value } = method.next();
        if (done) {
          break;
        }
        seq.push(converter(value));
      }
      return seq;
    };
  };
  webidl.recordConverter = function (keyConverter, valueConverter) {
    return (V) => {
      const record = {};
      const type = webidl.util.Type(V);
      if (type === 'Undefined' || type === 'Null') {
        return record;
      }
      if (type !== 'Object') {
        webidl.errors.exception({
          header: 'Record',
          message: `Expected ${V} to be an Object type.`,
        });
      }
      for (let [key2, value] of Object.entries(V)) {
        key2 = keyConverter(key2);
        value = valueConverter(value);
        record[key2] = value;
      }
      return record;
    };
  };
  webidl.interfaceConverter = function (i) {
    return (V, opts = {}) => {
      if (opts.strict !== false && !(V instanceof i)) {
        webidl.errors.exception({
          header: i.name,
          message: `Expected ${V} to be an instance of ${i.name}.`,
        });
      }
      return V;
    };
  };
  webidl.dictionaryConverter = function (converters) {
    return (dictionary) => {
      const type = webidl.util.Type(dictionary);
      const dict = {};
      if (type !== 'Null' && type !== 'Undefined' && type !== 'Object') {
        webidl.errors.exception({
          header: 'Dictionary',
          message: `Expected ${dictionary} to be one of: Null, Undefined, Object.`,
        });
      }
      for (const options of converters) {
        const { key: key2, defaultValue, required, converter } = options;
        if (required === true) {
          if (!Object.hasOwn(dictionary, key2)) {
            webidl.errors.exception({
              header: 'Dictionary',
              message: `Missing required key "${key2}".`,
            });
          }
        }
        let value = dictionary[key2];
        const hasDefault = Object.hasOwn(options, 'defaultValue');
        if (hasDefault && value !== null) {
          value = value ?? defaultValue;
        }
        if (required || hasDefault || value !== void 0) {
          value = converter(value);
          if (options.allowedValues && !options.allowedValues.includes(value)) {
            webidl.errors.exception({
              header: 'Dictionary',
              message: `${value} is not an accepted type. Expected one of ${options.allowedValues.join(
                ', '
              )}.`,
            });
          }
          dict[key2] = value;
        }
      }
      return dict;
    };
  };
  webidl.nullableConverter = function (converter) {
    return (V) => {
      if (V === null) {
        return V;
      }
      return converter(V);
    };
  };
  webidl.converters.DOMString = function (V, opts = {}) {
    if (V === null && opts.legacyNullToEmptyString) {
      return '';
    }
    if (typeof V === 'symbol') {
      throw new TypeError('Could not convert argument of type symbol to string.');
    }
    return String(V);
  };
  const isNotLatin1 = /[^\u0000-\u00ff]/;
  webidl.converters.ByteString = function (V) {
    const x = webidl.converters.DOMString(V);
    if (isNotLatin1.test(x)) {
      throw new TypeError('Argument is not a ByteString');
    }
    return x;
  };
  webidl.converters.USVString = toUSVString2;
  webidl.converters.boolean = function (V) {
    const x = Boolean(V);
    return x;
  };
  webidl.converters.any = function (V) {
    return V;
  };
  webidl.converters['long long'] = function (V, opts) {
    const x = webidl.util.ConvertToInt(V, 64, 'signed', opts);
    return x;
  };
  webidl.converters['unsigned short'] = function (V) {
    const x = webidl.util.ConvertToInt(V, 16, 'unsigned');
    return x;
  };
  webidl.converters.ArrayBuffer = function (V, opts = {}) {
    if (webidl.util.Type(V) !== 'Object' || !types.isAnyArrayBuffer(V)) {
      webidl.errors.conversionFailed({
        prefix: `${V}`,
        argument: `${V}`,
        types: ['ArrayBuffer'],
      });
    }
    if (opts.allowShared === false && types.isSharedArrayBuffer(V)) {
      webidl.errors.exception({
        header: 'ArrayBuffer',
        message: 'SharedArrayBuffer is not allowed.',
      });
    }
    return V;
  };
  webidl.converters.TypedArray = function (V, T, opts = {}) {
    if (
      webidl.util.Type(V) !== 'Object' ||
      !types.isTypedArray(V) ||
      V.constructor.name !== T.name
    ) {
      webidl.errors.conversionFailed({
        prefix: `${T.name}`,
        argument: `${V}`,
        types: [T.name],
      });
    }
    if (opts.allowShared === false && types.isSharedArrayBuffer(V.buffer)) {
      webidl.errors.exception({
        header: 'ArrayBuffer',
        message: 'SharedArrayBuffer is not allowed.',
      });
    }
    return V;
  };
  webidl.converters.DataView = function (V, opts = {}) {
    if (webidl.util.Type(V) !== 'Object' || !types.isDataView(V)) {
      webidl.errors.exception({
        header: 'DataView',
        message: 'Object is not a DataView.',
      });
    }
    if (opts.allowShared === false && types.isSharedArrayBuffer(V.buffer)) {
      webidl.errors.exception({
        header: 'ArrayBuffer',
        message: 'SharedArrayBuffer is not allowed.',
      });
    }
    return V;
  };
  webidl.converters.BufferSource = function (V, opts = {}) {
    if (types.isAnyArrayBuffer(V)) {
      return webidl.converters.ArrayBuffer(V, opts);
    }
    if (types.isTypedArray(V)) {
      return webidl.converters.TypedArray(V, V.constructor);
    }
    if (types.isDataView(V)) {
      return webidl.converters.DataView(V, opts);
    }
    throw new TypeError(`Could not convert ${V} to a BufferSource.`);
  };
  webidl.converters['sequence<ByteString>'] = webidl.sequenceConverter(
    webidl.converters.ByteString
  );
  webidl.converters['sequence<sequence<ByteString>>'] = webidl.sequenceConverter(
    webidl.converters['sequence<ByteString>']
  );
  webidl.converters['record<ByteString, ByteString>'] = webidl.recordConverter(
    webidl.converters.ByteString,
    webidl.converters.ByteString
  );
  webidl_1 = {
    webidl,
  };
  return webidl_1;
}
function requireFile() {
  if (hasRequiredFile) return file;
  hasRequiredFile = 1;
  const { Blob: Blob2 } = import_buffer.default;
  const { types } = import_util.default;
  const { kState } = requireSymbols();
  const { isBlobLike: isBlobLike2 } = requireUtil();
  const { webidl } = requireWebidl();
  class File extends Blob2 {
    constructor(fileBits, fileName, options = {}) {
      if (arguments.length < 2) {
        throw new TypeError('2 arguments required');
      }
      fileBits = webidl.converters['sequence<BlobPart>'](fileBits);
      fileName = webidl.converters.USVString(fileName);
      options = webidl.converters.FilePropertyBag(options);
      const n = fileName;
      const d = options.lastModified;
      super(processBlobParts(fileBits, options), { type: options.type });
      this[kState] = {
        name: n,
        lastModified: d,
      };
    }
    get name() {
      if (!(this instanceof File)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].name;
    }
    get lastModified() {
      if (!(this instanceof File)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].lastModified;
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
  }
  class FileLike {
    constructor(blobLike, fileName, options = {}) {
      const n = fileName;
      const t = options.type;
      const d = options.lastModified ?? Date.now();
      this[kState] = {
        blobLike,
        name: n,
        type: t,
        lastModified: d,
      };
    }
    stream(...args) {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].blobLike.stream(...args);
    }
    arrayBuffer(...args) {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].blobLike.arrayBuffer(...args);
    }
    slice(...args) {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].blobLike.slice(...args);
    }
    text(...args) {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].blobLike.text(...args);
    }
    get size() {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].blobLike.size;
    }
    get type() {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].blobLike.type;
    }
    get name() {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].name;
    }
    get lastModified() {
      if (!(this instanceof FileLike)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].lastModified;
    }
    get [Symbol.toStringTag]() {
      return 'File';
    }
  }
  webidl.converters.Blob = webidl.interfaceConverter(Blob2);
  webidl.converters.BlobPart = function (V, opts) {
    if (webidl.util.Type(V) === 'Object') {
      if (isBlobLike2(V)) {
        return webidl.converters.Blob(V, { strict: false });
      }
      return webidl.converters.BufferSource(V, opts);
    } else {
      return webidl.converters.USVString(V, opts);
    }
  };
  webidl.converters['sequence<BlobPart>'] = webidl.sequenceConverter(webidl.converters.BlobPart);
  webidl.converters.FilePropertyBag = webidl.dictionaryConverter([
    {
      key: 'lastModified',
      converter: webidl.converters['long long'],
      get defaultValue() {
        return Date.now();
      },
    },
    {
      key: 'type',
      converter: webidl.converters.DOMString,
      defaultValue: '',
    },
    {
      key: 'endings',
      converter: (value) => {
        value = webidl.converters.DOMString(value);
        value = value.toLowerCase();
        if (value !== 'native') {
          value = 'transparent';
        }
        return value;
      },
      defaultValue: 'transparent',
    },
  ]);
  function processBlobParts(parts, options) {
    const bytes = [];
    for (const element of parts) {
      if (typeof element === 'string') {
        let s2 = element;
        if (options.endings === 'native') {
          s2 = convertLineEndingsNative(s2);
        }
        bytes.push(new TextEncoder().encode(s2));
      } else if (types.isAnyArrayBuffer(element) || types.isTypedArray(element)) {
        if (!element.buffer) {
          bytes.push(new Uint8Array(element));
        } else {
          bytes.push(element.buffer);
        }
      } else if (isBlobLike2(element)) {
        bytes.push(element);
      }
    }
    return bytes;
  }
  function convertLineEndingsNative(s2) {
    let nativeLineEnding = '\n';
    if (process.platform === 'win32') {
      nativeLineEnding = '\r\n';
    }
    return s2.replace(/\r?\n/g, nativeLineEnding);
  }
  file = { File, FileLike };
  return file;
}
function requireUtil() {
  if (hasRequiredUtil) return util$d;
  hasRequiredUtil = 1;
  const { redirectStatus } = requireConstants$1();
  const { performance: performance2 } = import_perf_hooks.default;
  const {
    isBlobLike: isBlobLike2,
    toUSVString: toUSVString2,
    ReadableStreamFrom: ReadableStreamFrom2,
  } = util$e;
  const assert2 = import_assert.default;
  let File;
  const badPorts = [
    '1',
    '7',
    '9',
    '11',
    '13',
    '15',
    '17',
    '19',
    '20',
    '21',
    '22',
    '23',
    '25',
    '37',
    '42',
    '43',
    '53',
    '69',
    '77',
    '79',
    '87',
    '95',
    '101',
    '102',
    '103',
    '104',
    '109',
    '110',
    '111',
    '113',
    '115',
    '117',
    '119',
    '123',
    '135',
    '137',
    '139',
    '143',
    '161',
    '179',
    '389',
    '427',
    '465',
    '512',
    '513',
    '514',
    '515',
    '526',
    '530',
    '531',
    '532',
    '540',
    '548',
    '554',
    '556',
    '563',
    '587',
    '601',
    '636',
    '989',
    '990',
    '993',
    '995',
    '1719',
    '1720',
    '1723',
    '2049',
    '3659',
    '4045',
    '5060',
    '5061',
    '6000',
    '6566',
    '6665',
    '6666',
    '6667',
    '6668',
    '6669',
    '6697',
    '10080',
  ];
  function responseURL(response2) {
    const urlList = response2.urlList;
    const length = urlList.length;
    return length === 0 ? null : urlList[length - 1].toString();
  }
  function responseLocationURL(response2, requestFragment) {
    if (!redirectStatus.includes(response2.status)) {
      return null;
    }
    let location = response2.headersList.get('location');
    location = location ? new URL(location, responseURL(response2)) : null;
    if (location && !location.hash) {
      location.hash = requestFragment;
    }
    return location;
  }
  function requestCurrentURL(request2) {
    return request2.urlList[request2.urlList.length - 1];
  }
  function requestBadPort(request2) {
    const url = requestCurrentURL(request2);
    if (/^https?:/.test(url.protocol) && badPorts.includes(url.port)) {
      return 'blocked';
    }
    return 'allowed';
  }
  function isFileLike(object) {
    if (!File) {
      File = requireFile().File;
    }
    return (
      object instanceof File ||
      (object &&
        (typeof object.stream === 'function' || typeof object.arrayBuffer === 'function') &&
        /^(File)$/.test(object[Symbol.toStringTag]))
    );
  }
  function isValidReasonPhrase(statusText) {
    for (let i = 0; i < statusText.length; ++i) {
      const c = statusText.charCodeAt(i);
      if (!(c === 9 || (c >= 32 && c <= 126) || (c >= 128 && c <= 255))) {
        return false;
      }
    }
    return true;
  }
  function isTokenChar(c) {
    return !(
      c >= 127 ||
      c <= 32 ||
      c === '(' ||
      c === ')' ||
      c === '<' ||
      c === '>' ||
      c === '@' ||
      c === ',' ||
      c === ';' ||
      c === ':' ||
      c === '\\' ||
      c === '"' ||
      c === '/' ||
      c === '[' ||
      c === ']' ||
      c === '?' ||
      c === '=' ||
      c === '{' ||
      c === '}'
    );
  }
  function isValidHTTPToken(characters) {
    if (!characters || typeof characters !== 'string') {
      return false;
    }
    for (let i = 0; i < characters.length; ++i) {
      const c = characters.charCodeAt(i);
      if (c > 127 || !isTokenChar(c)) {
        return false;
      }
    }
    return true;
  }
  function isValidHeaderName(potentialValue) {
    if (potentialValue.length === 0) {
      return false;
    }
    for (const char of potentialValue) {
      if (!isValidHTTPToken(char)) {
        return false;
      }
    }
    return true;
  }
  function isValidHeaderValue(potentialValue) {
    if (
      potentialValue.startsWith('	') ||
      potentialValue.startsWith(' ') ||
      potentialValue.endsWith('	') ||
      potentialValue.endsWith(' ')
    ) {
      return false;
    }
    if (
      potentialValue.includes('\0') ||
      potentialValue.includes('\r') ||
      potentialValue.includes('\n')
    ) {
      return false;
    }
    return true;
  }
  function setRequestReferrerPolicyOnRedirect(request2, actualResponse) {}
  function crossOriginResourcePolicyCheck() {
    return 'allowed';
  }
  function corsCheck() {
    return 'success';
  }
  function TAOCheck() {
    return 'success';
  }
  function appendFetchMetadata(httpRequest) {
    let header = null;
    header = httpRequest.mode;
    httpRequest.headersList.set('sec-fetch-mode', header);
  }
  function appendRequestOriginHeader(request2) {
    let serializedOrigin = request2.origin;
    if (request2.responseTainting === 'cors' || request2.mode === 'websocket') {
      if (serializedOrigin) {
        request2.headersList.append('Origin', serializedOrigin);
      }
    } else if (request2.method !== 'GET' && request2.method !== 'HEAD') {
      switch (request2.referrerPolicy) {
        case 'no-referrer':
          serializedOrigin = null;
          break;
        case 'no-referrer-when-downgrade':
        case 'strict-origin':
        case 'strict-origin-when-cross-origin':
          if (/^https:/.test(request2.origin) && !/^https:/.test(requestCurrentURL(request2))) {
            serializedOrigin = null;
          }
          break;
        case 'same-origin':
          if (!sameOrigin(request2, requestCurrentURL(request2))) {
            serializedOrigin = null;
          }
          break;
      }
      if (serializedOrigin) {
        request2.headersList.append('Origin', serializedOrigin);
      }
    }
  }
  function coarsenedSharedCurrentTime(crossOriginIsolatedCapability) {
    return performance2.now();
  }
  function createOpaqueTimingInfo(timingInfo) {
    return {
      startTime: timingInfo.startTime ?? 0,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: timingInfo.startTime ?? 0,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 0,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null,
    };
  }
  function makePolicyContainer() {
    return {};
  }
  function clonePolicyContainer() {
    return {};
  }
  function determineRequestsReferrer(request2) {
    return 'no-referrer';
  }
  function matchRequestIntegrity(request2, bytes) {
    return false;
  }
  function tryUpgradeRequestToAPotentiallyTrustworthyURL(request2) {}
  function sameOrigin(A, B) {
    if (A.protocol === B.protocol && A.hostname === B.hostname && A.port === B.port) {
      return true;
    }
    return false;
  }
  function createDeferredPromise() {
    let res;
    let rej;
    const promise = new Promise((resolve2, reject) => {
      res = resolve2;
      rej = reject;
    });
    return { promise, resolve: res, reject: rej };
  }
  function isAborted(fetchParams) {
    return fetchParams.controller.state === 'aborted';
  }
  function isCancelled(fetchParams) {
    return (
      fetchParams.controller.state === 'aborted' || fetchParams.controller.state === 'terminated'
    );
  }
  function normalizeMethod(method) {
    return /^(DELETE|GET|HEAD|OPTIONS|POST|PUT)$/i.test(method) ? method.toUpperCase() : method;
  }
  function serializeJavascriptValueToJSONString(value) {
    const result = JSON.stringify(value);
    if (result === void 0) {
      throw new TypeError('Value is not JSON serializable');
    }
    assert2(typeof result === 'string');
    return result;
  }
  const esIteratorPrototype = Object.getPrototypeOf(Object.getPrototypeOf([][Symbol.iterator]()));
  function makeIterator(iterator, name) {
    const i = {
      next() {
        if (Object.getPrototypeOf(this) !== i) {
          throw new TypeError(
            `'next' called on an object that does not implement interface ${name} Iterator.`
          );
        }
        return iterator.next();
      },
      [Symbol.toStringTag]: `${name} Iterator`,
    };
    Object.setPrototypeOf(i, esIteratorPrototype);
    return Object.setPrototypeOf({}, i);
  }
  util$d = {
    isAborted,
    isCancelled,
    createDeferredPromise,
    ReadableStreamFrom: ReadableStreamFrom2,
    toUSVString: toUSVString2,
    tryUpgradeRequestToAPotentiallyTrustworthyURL,
    coarsenedSharedCurrentTime,
    matchRequestIntegrity,
    determineRequestsReferrer,
    makePolicyContainer,
    clonePolicyContainer,
    appendFetchMetadata,
    appendRequestOriginHeader,
    TAOCheck,
    corsCheck,
    crossOriginResourcePolicyCheck,
    createOpaqueTimingInfo,
    setRequestReferrerPolicyOnRedirect,
    isValidHTTPToken,
    requestBadPort,
    requestCurrentURL,
    responseURL,
    responseLocationURL,
    isBlobLike: isBlobLike2,
    isFileLike,
    isValidReasonPhrase,
    sameOrigin,
    normalizeMethod,
    serializeJavascriptValueToJSONString,
    makeIterator,
    isValidHeaderName,
    isValidHeaderValue,
  };
  return util$d;
}
function requireFormdata() {
  if (hasRequiredFormdata) return formdata;
  hasRequiredFormdata = 1;
  const {
    isBlobLike: isBlobLike2,
    isFileLike,
    toUSVString: toUSVString2,
    makeIterator,
  } = requireUtil();
  const { kState } = requireSymbols();
  const { File, FileLike } = requireFile();
  const { webidl } = requireWebidl();
  const { Blob: Blob2 } = import_buffer.default;
  class FormData {
    static name = 'FormData';
    constructor(form) {
      if (arguments.length > 0 && form != null) {
        webidl.errors.conversionFailed({
          prefix: 'FormData constructor',
          argument: 'Argument 1',
          types: ['null'],
        });
      }
      this[kState] = [];
    }
    append(name, value, filename = void 0) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 2) {
        throw new TypeError(
          `Failed to execute 'append' on 'FormData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      if (arguments.length === 3 && !isBlobLike2(value)) {
        throw new TypeError(
          "Failed to execute 'append' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      }
      name = webidl.converters.USVString(name);
      value = isBlobLike2(value)
        ? webidl.converters.Blob(value, { strict: false })
        : webidl.converters.USVString(value);
      filename = arguments.length === 3 ? webidl.converters.USVString(filename) : void 0;
      const entry = makeEntry(name, value, filename);
      this[kState].push(entry);
    }
    delete(name) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'delete' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.USVString(name);
      const next = [];
      for (const entry of this[kState]) {
        if (entry.name !== name) {
          next.push(entry);
        }
      }
      this[kState] = next;
    }
    get(name) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'get' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.USVString(name);
      const idx = this[kState].findIndex((entry) => entry.name === name);
      if (idx === -1) {
        return null;
      }
      return this[kState][idx].value;
    }
    getAll(name) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'getAll' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.USVString(name);
      return this[kState].filter((entry) => entry.name === name).map((entry) => entry.value);
    }
    has(name) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'has' on 'FormData': 1 arguments required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.USVString(name);
      return this[kState].findIndex((entry) => entry.name === name) !== -1;
    }
    set(name, value, filename = void 0) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 2) {
        throw new TypeError(
          `Failed to execute 'set' on 'FormData': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      if (arguments.length === 3 && !isBlobLike2(value)) {
        throw new TypeError(
          "Failed to execute 'set' on 'FormData': parameter 2 is not of type 'Blob'"
        );
      }
      name = webidl.converters.USVString(name);
      value = isBlobLike2(value)
        ? webidl.converters.Blob(value, { strict: false })
        : webidl.converters.USVString(value);
      filename = arguments.length === 3 ? toUSVString2(filename) : void 0;
      const entry = makeEntry(name, value, filename);
      const idx = this[kState].findIndex((entry2) => entry2.name === name);
      if (idx !== -1) {
        this[kState] = [
          ...this[kState].slice(0, idx),
          entry,
          ...this[kState].slice(idx + 1).filter((entry2) => entry2.name !== name),
        ];
      } else {
        this[kState].push(entry);
      }
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
    entries() {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      return makeIterator(makeIterable(this[kState], 'entries'), 'FormData');
    }
    keys() {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      return makeIterator(makeIterable(this[kState], 'keys'), 'FormData');
    }
    values() {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      return makeIterator(makeIterable(this[kState], 'values'), 'FormData');
    }
    forEach(callbackFn, thisArg = globalThis) {
      if (!(this instanceof FormData)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'forEach' on 'FormData': 1 argument required, but only ${arguments.length} present.`
        );
      }
      if (typeof callbackFn !== 'function') {
        throw new TypeError(
          "Failed to execute 'forEach' on 'FormData': parameter 1 is not of type 'Function'."
        );
      }
      for (const [key2, value] of this) {
        callbackFn.apply(thisArg, [value, key2, this]);
      }
    }
  }
  FormData.prototype[Symbol.iterator] = FormData.prototype.entries;
  function makeEntry(name, value, filename) {
    name = Buffer.from(name).toString('utf8');
    if (typeof value === 'string') {
      value = Buffer.from(value).toString('utf8');
    } else {
      if (!isFileLike(value)) {
        value =
          value instanceof Blob2
            ? new File([value], 'blob', { type: value.type })
            : new FileLike(value, 'blob', { type: value.type });
      }
      if (filename !== void 0) {
        value =
          value instanceof File
            ? new File([value], filename, { type: value.type })
            : new FileLike(value, filename, { type: value.type });
      }
    }
    return { name, value };
  }
  function* makeIterable(entries, type) {
    for (const { name, value } of entries) {
      if (type === 'entries') {
        yield [name, value];
      } else if (type === 'values') {
        yield value;
      } else {
        yield name;
      }
    }
  }
  formdata = { FormData };
  return formdata;
}
function requireBody() {
  if (hasRequiredBody) return body;
  hasRequiredBody = 1;
  const util2 = util$e;
  const {
    ReadableStreamFrom: ReadableStreamFrom2,
    toUSVString: toUSVString2,
    isBlobLike: isBlobLike2,
  } = requireUtil();
  const { FormData } = requireFormdata();
  const { kState } = requireSymbols();
  const { webidl } = requireWebidl();
  const { Blob: Blob2 } = import_buffer.default;
  const { kBodyUsed: kBodyUsed2 } = symbols$1;
  const assert2 = import_assert.default;
  const { NotSupportedError: NotSupportedError2 } = errors$1;
  const { isErrored: isErrored2 } = util$e;
  const { isUint8Array, isArrayBuffer } = import_types.default;
  let ReadableStream3;
  async function* blobGen(blob) {
    if (blob.stream) {
      yield* blob.stream();
    } else {
      yield await blob.arrayBuffer();
    }
  }
  function extractBody2(object, keepalive = false) {
    if (!ReadableStream3) {
      ReadableStream3 = import_web.default.ReadableStream;
    }
    let stream2 = null;
    let action = null;
    let source = null;
    let length = null;
    let contentType = null;
    if (object == null);
    else if (object instanceof URLSearchParams) {
      source = object.toString();
      contentType = 'application/x-www-form-urlencoded;charset=UTF-8';
    } else if (isArrayBuffer(object) || ArrayBuffer.isView(object)) {
      if (object instanceof DataView) {
        object = object.buffer;
      }
      source = new Uint8Array(object);
    } else if (util2.isFormDataLike(object)) {
      const boundary = '----formdata-undici-' + Math.random();
      const prefix = `--${boundary}\r
Content-Disposition: form-data`;
      const escape2 = (str) => str.replace(/\n/g, '%0A').replace(/\r/g, '%0D').replace(/"/g, '%22');
      const normalizeLinefeeds = (value) => value.replace(/\r?\n|\r/g, '\r\n');
      action = async function* (object2) {
        const enc = new TextEncoder();
        for (const [name, value] of object2) {
          if (typeof value === 'string') {
            yield enc.encode(
              prefix +
                `; name="${escape2(normalizeLinefeeds(name))}"\r
\r
${normalizeLinefeeds(value)}\r
`
            );
          } else {
            yield enc.encode(
              prefix +
                `; name="${escape2(normalizeLinefeeds(name))}"` +
                (value.name ? `; filename="${escape2(value.name)}"` : '') +
                `\r
Content-Type: ${value.type || 'application/octet-stream'}\r
\r
`
            );
            yield* blobGen(value);
            yield enc.encode('\r\n');
          }
        }
        yield enc.encode(`--${boundary}--`);
      };
      source = object;
      contentType = 'multipart/form-data; boundary=' + boundary;
    } else if (isBlobLike2(object)) {
      action = blobGen;
      source = object;
      length = object.size;
      if (object.type) {
        contentType = object.type;
      }
    } else if (typeof object[Symbol.asyncIterator] === 'function') {
      if (keepalive) {
        throw new TypeError('keepalive');
      }
      if (util2.isDisturbed(object) || object.locked) {
        throw new TypeError('Response body object should not be disturbed or locked');
      }
      stream2 = object instanceof ReadableStream3 ? object : ReadableStreamFrom2(object);
    } else {
      source = toUSVString2(object);
      contentType = 'text/plain;charset=UTF-8';
    }
    if (typeof source === 'string' || util2.isBuffer(source)) {
      length = Buffer.byteLength(source);
    }
    if (action != null) {
      let iterator;
      stream2 = new ReadableStream3({
        async start() {
          iterator = action(object)[Symbol.asyncIterator]();
        },
        async pull(controller) {
          const { value, done } = await iterator.next();
          if (done) {
            queueMicrotask(() => {
              controller.close();
            });
          } else {
            if (!isErrored2(stream2)) {
              controller.enqueue(new Uint8Array(value));
            }
          }
          return controller.desiredSize > 0;
        },
        async cancel(reason) {
          await iterator.return();
        },
      });
    } else if (!stream2) {
      stream2 = new ReadableStream3({
        async pull(controller) {
          controller.enqueue(
            typeof source === 'string' ? new TextEncoder().encode(source) : source
          );
          queueMicrotask(() => {
            controller.close();
          });
        },
      });
    }
    const body2 = { stream: stream2, source, length };
    return [body2, contentType];
  }
  function safelyExtractBody(object, keepalive = false) {
    if (!ReadableStream3) {
      ReadableStream3 = import_web.default.ReadableStream;
    }
    if (object instanceof ReadableStream3) {
      assert2(!util2.isDisturbed(object), 'disturbed');
      assert2(!object.locked, 'locked');
    }
    return extractBody2(object, keepalive);
  }
  function cloneBody(body2) {
    const [out1, out2] = body2.stream.tee();
    body2.stream = out1;
    return {
      stream: out2,
      length: body2.length,
      source: body2.source,
    };
  }
  function bodyMixinMethods(instance) {
    const methods = {
      async blob() {
        if (!(this instanceof instance)) {
          throw new TypeError('Illegal invocation');
        }
        const chunks = [];
        if (this[kState].body) {
          if (isUint8Array(this[kState].body)) {
            chunks.push(this[kState].body);
          } else {
            const stream2 = this[kState].body.stream;
            if (util2.isDisturbed(stream2)) {
              throw new TypeError('disturbed');
            }
            if (stream2.locked) {
              throw new TypeError('locked');
            }
            stream2[kBodyUsed2] = true;
            for await (const chunk of stream2) {
              chunks.push(chunk);
            }
          }
        }
        return new Blob2(chunks, { type: this.headers.get('Content-Type') || '' });
      },
      async arrayBuffer() {
        if (!(this instanceof instance)) {
          throw new TypeError('Illegal invocation');
        }
        const blob = await this.blob();
        return await blob.arrayBuffer();
      },
      async text() {
        if (!(this instanceof instance)) {
          throw new TypeError('Illegal invocation');
        }
        const blob = await this.blob();
        return toUSVString2(await blob.text());
      },
      async json() {
        if (!(this instanceof instance)) {
          throw new TypeError('Illegal invocation');
        }
        return JSON.parse(await this.text());
      },
      async formData() {
        if (!(this instanceof instance)) {
          throw new TypeError('Illegal invocation');
        }
        const contentType = this.headers.get('Content-Type');
        if (/multipart\/form-data/.test(contentType)) {
          throw new NotSupportedError2('multipart/form-data not supported');
        } else if (/application\/x-www-form-urlencoded/.test(contentType)) {
          let entries;
          try {
            entries = new URLSearchParams(await this.text());
          } catch (err) {
            throw Object.assign(new TypeError(), { cause: err });
          }
          const formData = new FormData();
          for (const [name, value] of entries) {
            formData.append(name, value);
          }
          return formData;
        } else {
          webidl.errors.exception({
            header: `${instance.name}.formData`,
            value: 'Could not parse content as FormData.',
          });
        }
      },
    };
    return methods;
  }
  const properties = {
    body: {
      enumerable: true,
      get() {
        if (!this || !this[kState]) {
          throw new TypeError('Illegal invocation');
        }
        return this[kState].body ? this[kState].body.stream : null;
      },
    },
    bodyUsed: {
      enumerable: true,
      get() {
        if (!this || !this[kState]) {
          throw new TypeError('Illegal invocation');
        }
        return !!this[kState].body && util2.isDisturbed(this[kState].body.stream);
      },
    },
  };
  function mixinBody(prototype) {
    Object.assign(prototype.prototype, bodyMixinMethods(prototype));
    Object.defineProperties(prototype.prototype, properties);
  }
  body = {
    extractBody: extractBody2,
    safelyExtractBody,
    cloneBody,
    mixinBody,
  };
  return body;
}
function processHeader(request2, key2, val) {
  if (val && typeof val === 'object') {
    throw new InvalidArgumentError$d(`invalid ${key2} header`);
  } else if (val === void 0) {
    return;
  }
  if (request2.host === null && key2.length === 4 && key2.toLowerCase() === 'host') {
    request2.host = val;
  } else if (
    request2.contentLength === null &&
    key2.length === 14 &&
    key2.toLowerCase() === 'content-length'
  ) {
    request2.contentLength = parseInt(val, 10);
    if (!Number.isFinite(request2.contentLength)) {
      throw new InvalidArgumentError$d('invalid content-length header');
    }
  } else if (
    request2.contentType === null &&
    key2.length === 12 &&
    key2.toLowerCase() === 'content-type'
  ) {
    request2.contentType = val;
    request2.headers += `${key2}: ${val}\r
`;
  } else if (key2.length === 17 && key2.toLowerCase() === 'transfer-encoding') {
    throw new InvalidArgumentError$d('invalid transfer-encoding header');
  } else if (key2.length === 10 && key2.toLowerCase() === 'connection') {
    throw new InvalidArgumentError$d('invalid connection header');
  } else if (key2.length === 10 && key2.toLowerCase() === 'keep-alive') {
    throw new InvalidArgumentError$d('invalid keep-alive header');
  } else if (key2.length === 7 && key2.toLowerCase() === 'upgrade') {
    throw new InvalidArgumentError$d('invalid upgrade header');
  } else if (key2.length === 6 && key2.toLowerCase() === 'expect') {
    throw new NotSupportedError$1('expect header not supported');
  } else {
    request2.headers += `${key2}: ${val}\r
`;
  }
}
function parseLocation(statusCode, headers2) {
  if (redirectableStatusCodes.indexOf(statusCode) === -1) {
    return null;
  }
  for (let i = 0; i < headers2.length; i += 2) {
    if (headers2[i].toString().toLowerCase() === 'location') {
      return headers2[i + 1];
    }
  }
}
function shouldRemoveHeader(header, removeContent, unknownOrigin) {
  return (
    (header.length === 4 && header.toString().toLowerCase() === 'host') ||
    (removeContent && header.toString().toLowerCase().indexOf('content-') === 0) ||
    (unknownOrigin && header.length === 13 && header.toString().toLowerCase() === 'authorization')
  );
}
function cleanRequestHeaders(headers2, removeContent, unknownOrigin) {
  const ret = [];
  if (Array.isArray(headers2)) {
    for (let i = 0; i < headers2.length; i += 2) {
      if (!shouldRemoveHeader(headers2[i], removeContent, unknownOrigin)) {
        ret.push(headers2[i], headers2[i + 1]);
      }
    }
  } else if (headers2 && typeof headers2 === 'object') {
    for (const key2 of Object.keys(headers2)) {
      if (!shouldRemoveHeader(key2, removeContent, unknownOrigin)) {
        ret.push(key2, headers2[key2]);
      }
    }
  } else {
    assert$5(headers2 == null, 'headers must be an object or an array');
  }
  return ret;
}
function buildConnector$2({ maxCachedSessions, socketPath, timeout, ...opts }) {
  if (
    maxCachedSessions != null &&
    (!Number.isInteger(maxCachedSessions) || maxCachedSessions < 0)
  ) {
    throw new InvalidArgumentError$a('maxCachedSessions must be a positive integer or zero');
  }
  const options = { path: socketPath, ...opts };
  const sessionCache = /* @__PURE__ */ new Map();
  timeout = timeout == null ? 1e4 : timeout;
  maxCachedSessions = maxCachedSessions == null ? 100 : maxCachedSessions;
  return function connect2({ hostname, host, protocol, port, servername, httpSocket }, callback) {
    let socket;
    if (protocol === 'https:') {
      if (!tls) {
        tls = import_tls.default;
      }
      servername = servername || options.servername || util$a.getServerName(host) || null;
      const sessionKey = servername || hostname;
      const session = sessionCache.get(sessionKey) || null;
      assert$4(sessionKey);
      socket = tls.connect({
        highWaterMark: 16384,
        ...options,
        servername,
        session,
        socket: httpSocket,
        port: port || 443,
        host: hostname,
      });
      socket
        .on('session', function (session2) {
          if (maxCachedSessions === 0) {
            return;
          }
          if (sessionCache.size >= maxCachedSessions) {
            const { value: oldestKey } = sessionCache.keys().next();
            sessionCache.delete(oldestKey);
          }
          sessionCache.set(sessionKey, session2);
        })
        .on('error', function (err) {
          if (sessionKey && err.code !== 'UND_ERR_INFO') {
            sessionCache.delete(sessionKey);
          }
        });
    } else {
      assert$4(!httpSocket, 'httpSocket can only be sent on TLS update');
      socket = net$1.connect({
        highWaterMark: 64 * 1024,
        ...options,
        port: port || 80,
        host: hostname,
      });
    }
    const timeoutId = timeout ? setTimeout(onConnectTimeout, timeout, socket) : null;
    socket
      .setNoDelay(true)
      .once(protocol === 'https:' ? 'secureConnect' : 'connect', function () {
        clearTimeout(timeoutId);
        if (callback) {
          const cb = callback;
          callback = null;
          cb(null, this);
        }
      })
      .on('error', function (err) {
        clearTimeout(timeoutId);
        if (callback) {
          const cb = callback;
          callback = null;
          cb(err);
        }
      });
    return socket;
  };
}
function onConnectTimeout(socket) {
  util$a.destroy(socket, new ConnectTimeoutError());
}
function requireUtils() {
  if (hasRequiredUtils) return utils;
  hasRequiredUtils = 1;
  Object.defineProperty(utils, '__esModule', { value: true });
  utils.enumToMap = void 0;
  function enumToMap(obj) {
    const res = {};
    Object.keys(obj).forEach((key2) => {
      const value = obj[key2];
      if (typeof value === 'number') {
        res[key2] = value;
      }
    });
    return res;
  }
  utils.enumToMap = enumToMap;
  return utils;
}
function requireConstants() {
  if (hasRequiredConstants) return constants$1;
  hasRequiredConstants = 1;
  (function (exports) {
    Object.defineProperty(exports, '__esModule', { value: true });
    exports.SPECIAL_HEADERS =
      exports.HEADER_STATE =
      exports.MINOR =
      exports.MAJOR =
      exports.CONNECTION_TOKEN_CHARS =
      exports.HEADER_CHARS =
      exports.TOKEN =
      exports.STRICT_TOKEN =
      exports.HEX =
      exports.URL_CHAR =
      exports.STRICT_URL_CHAR =
      exports.USERINFO_CHARS =
      exports.MARK =
      exports.ALPHANUM =
      exports.NUM =
      exports.HEX_MAP =
      exports.NUM_MAP =
      exports.ALPHA =
      exports.FINISH =
      exports.H_METHOD_MAP =
      exports.METHOD_MAP =
      exports.METHODS_RTSP =
      exports.METHODS_ICE =
      exports.METHODS_HTTP =
      exports.METHODS =
      exports.LENIENT_FLAGS =
      exports.FLAGS =
      exports.TYPE =
      exports.ERROR =
        void 0;
    const utils_1 = requireUtils();
    (function (ERROR) {
      ERROR[(ERROR['OK'] = 0)] = 'OK';
      ERROR[(ERROR['INTERNAL'] = 1)] = 'INTERNAL';
      ERROR[(ERROR['STRICT'] = 2)] = 'STRICT';
      ERROR[(ERROR['LF_EXPECTED'] = 3)] = 'LF_EXPECTED';
      ERROR[(ERROR['UNEXPECTED_CONTENT_LENGTH'] = 4)] = 'UNEXPECTED_CONTENT_LENGTH';
      ERROR[(ERROR['CLOSED_CONNECTION'] = 5)] = 'CLOSED_CONNECTION';
      ERROR[(ERROR['INVALID_METHOD'] = 6)] = 'INVALID_METHOD';
      ERROR[(ERROR['INVALID_URL'] = 7)] = 'INVALID_URL';
      ERROR[(ERROR['INVALID_CONSTANT'] = 8)] = 'INVALID_CONSTANT';
      ERROR[(ERROR['INVALID_VERSION'] = 9)] = 'INVALID_VERSION';
      ERROR[(ERROR['INVALID_HEADER_TOKEN'] = 10)] = 'INVALID_HEADER_TOKEN';
      ERROR[(ERROR['INVALID_CONTENT_LENGTH'] = 11)] = 'INVALID_CONTENT_LENGTH';
      ERROR[(ERROR['INVALID_CHUNK_SIZE'] = 12)] = 'INVALID_CHUNK_SIZE';
      ERROR[(ERROR['INVALID_STATUS'] = 13)] = 'INVALID_STATUS';
      ERROR[(ERROR['INVALID_EOF_STATE'] = 14)] = 'INVALID_EOF_STATE';
      ERROR[(ERROR['INVALID_TRANSFER_ENCODING'] = 15)] = 'INVALID_TRANSFER_ENCODING';
      ERROR[(ERROR['CB_MESSAGE_BEGIN'] = 16)] = 'CB_MESSAGE_BEGIN';
      ERROR[(ERROR['CB_HEADERS_COMPLETE'] = 17)] = 'CB_HEADERS_COMPLETE';
      ERROR[(ERROR['CB_MESSAGE_COMPLETE'] = 18)] = 'CB_MESSAGE_COMPLETE';
      ERROR[(ERROR['CB_CHUNK_HEADER'] = 19)] = 'CB_CHUNK_HEADER';
      ERROR[(ERROR['CB_CHUNK_COMPLETE'] = 20)] = 'CB_CHUNK_COMPLETE';
      ERROR[(ERROR['PAUSED'] = 21)] = 'PAUSED';
      ERROR[(ERROR['PAUSED_UPGRADE'] = 22)] = 'PAUSED_UPGRADE';
      ERROR[(ERROR['PAUSED_H2_UPGRADE'] = 23)] = 'PAUSED_H2_UPGRADE';
      ERROR[(ERROR['USER'] = 24)] = 'USER';
    })(exports.ERROR || (exports.ERROR = {}));
    (function (TYPE) {
      TYPE[(TYPE['BOTH'] = 0)] = 'BOTH';
      TYPE[(TYPE['REQUEST'] = 1)] = 'REQUEST';
      TYPE[(TYPE['RESPONSE'] = 2)] = 'RESPONSE';
    })(exports.TYPE || (exports.TYPE = {}));
    (function (FLAGS) {
      FLAGS[(FLAGS['CONNECTION_KEEP_ALIVE'] = 1)] = 'CONNECTION_KEEP_ALIVE';
      FLAGS[(FLAGS['CONNECTION_CLOSE'] = 2)] = 'CONNECTION_CLOSE';
      FLAGS[(FLAGS['CONNECTION_UPGRADE'] = 4)] = 'CONNECTION_UPGRADE';
      FLAGS[(FLAGS['CHUNKED'] = 8)] = 'CHUNKED';
      FLAGS[(FLAGS['UPGRADE'] = 16)] = 'UPGRADE';
      FLAGS[(FLAGS['CONTENT_LENGTH'] = 32)] = 'CONTENT_LENGTH';
      FLAGS[(FLAGS['SKIPBODY'] = 64)] = 'SKIPBODY';
      FLAGS[(FLAGS['TRAILING'] = 128)] = 'TRAILING';
      FLAGS[(FLAGS['TRANSFER_ENCODING'] = 512)] = 'TRANSFER_ENCODING';
    })(exports.FLAGS || (exports.FLAGS = {}));
    (function (LENIENT_FLAGS) {
      LENIENT_FLAGS[(LENIENT_FLAGS['HEADERS'] = 1)] = 'HEADERS';
      LENIENT_FLAGS[(LENIENT_FLAGS['CHUNKED_LENGTH'] = 2)] = 'CHUNKED_LENGTH';
      LENIENT_FLAGS[(LENIENT_FLAGS['KEEP_ALIVE'] = 4)] = 'KEEP_ALIVE';
    })(exports.LENIENT_FLAGS || (exports.LENIENT_FLAGS = {}));
    var METHODS;
    (function (METHODS2) {
      METHODS2[(METHODS2['DELETE'] = 0)] = 'DELETE';
      METHODS2[(METHODS2['GET'] = 1)] = 'GET';
      METHODS2[(METHODS2['HEAD'] = 2)] = 'HEAD';
      METHODS2[(METHODS2['POST'] = 3)] = 'POST';
      METHODS2[(METHODS2['PUT'] = 4)] = 'PUT';
      METHODS2[(METHODS2['CONNECT'] = 5)] = 'CONNECT';
      METHODS2[(METHODS2['OPTIONS'] = 6)] = 'OPTIONS';
      METHODS2[(METHODS2['TRACE'] = 7)] = 'TRACE';
      METHODS2[(METHODS2['COPY'] = 8)] = 'COPY';
      METHODS2[(METHODS2['LOCK'] = 9)] = 'LOCK';
      METHODS2[(METHODS2['MKCOL'] = 10)] = 'MKCOL';
      METHODS2[(METHODS2['MOVE'] = 11)] = 'MOVE';
      METHODS2[(METHODS2['PROPFIND'] = 12)] = 'PROPFIND';
      METHODS2[(METHODS2['PROPPATCH'] = 13)] = 'PROPPATCH';
      METHODS2[(METHODS2['SEARCH'] = 14)] = 'SEARCH';
      METHODS2[(METHODS2['UNLOCK'] = 15)] = 'UNLOCK';
      METHODS2[(METHODS2['BIND'] = 16)] = 'BIND';
      METHODS2[(METHODS2['REBIND'] = 17)] = 'REBIND';
      METHODS2[(METHODS2['UNBIND'] = 18)] = 'UNBIND';
      METHODS2[(METHODS2['ACL'] = 19)] = 'ACL';
      METHODS2[(METHODS2['REPORT'] = 20)] = 'REPORT';
      METHODS2[(METHODS2['MKACTIVITY'] = 21)] = 'MKACTIVITY';
      METHODS2[(METHODS2['CHECKOUT'] = 22)] = 'CHECKOUT';
      METHODS2[(METHODS2['MERGE'] = 23)] = 'MERGE';
      METHODS2[(METHODS2['M-SEARCH'] = 24)] = 'M-SEARCH';
      METHODS2[(METHODS2['NOTIFY'] = 25)] = 'NOTIFY';
      METHODS2[(METHODS2['SUBSCRIBE'] = 26)] = 'SUBSCRIBE';
      METHODS2[(METHODS2['UNSUBSCRIBE'] = 27)] = 'UNSUBSCRIBE';
      METHODS2[(METHODS2['PATCH'] = 28)] = 'PATCH';
      METHODS2[(METHODS2['PURGE'] = 29)] = 'PURGE';
      METHODS2[(METHODS2['MKCALENDAR'] = 30)] = 'MKCALENDAR';
      METHODS2[(METHODS2['LINK'] = 31)] = 'LINK';
      METHODS2[(METHODS2['UNLINK'] = 32)] = 'UNLINK';
      METHODS2[(METHODS2['SOURCE'] = 33)] = 'SOURCE';
      METHODS2[(METHODS2['PRI'] = 34)] = 'PRI';
      METHODS2[(METHODS2['DESCRIBE'] = 35)] = 'DESCRIBE';
      METHODS2[(METHODS2['ANNOUNCE'] = 36)] = 'ANNOUNCE';
      METHODS2[(METHODS2['SETUP'] = 37)] = 'SETUP';
      METHODS2[(METHODS2['PLAY'] = 38)] = 'PLAY';
      METHODS2[(METHODS2['PAUSE'] = 39)] = 'PAUSE';
      METHODS2[(METHODS2['TEARDOWN'] = 40)] = 'TEARDOWN';
      METHODS2[(METHODS2['GET_PARAMETER'] = 41)] = 'GET_PARAMETER';
      METHODS2[(METHODS2['SET_PARAMETER'] = 42)] = 'SET_PARAMETER';
      METHODS2[(METHODS2['REDIRECT'] = 43)] = 'REDIRECT';
      METHODS2[(METHODS2['RECORD'] = 44)] = 'RECORD';
      METHODS2[(METHODS2['FLUSH'] = 45)] = 'FLUSH';
    })((METHODS = exports.METHODS || (exports.METHODS = {})));
    exports.METHODS_HTTP = [
      METHODS.DELETE,
      METHODS.GET,
      METHODS.HEAD,
      METHODS.POST,
      METHODS.PUT,
      METHODS.CONNECT,
      METHODS.OPTIONS,
      METHODS.TRACE,
      METHODS.COPY,
      METHODS.LOCK,
      METHODS.MKCOL,
      METHODS.MOVE,
      METHODS.PROPFIND,
      METHODS.PROPPATCH,
      METHODS.SEARCH,
      METHODS.UNLOCK,
      METHODS.BIND,
      METHODS.REBIND,
      METHODS.UNBIND,
      METHODS.ACL,
      METHODS.REPORT,
      METHODS.MKACTIVITY,
      METHODS.CHECKOUT,
      METHODS.MERGE,
      METHODS['M-SEARCH'],
      METHODS.NOTIFY,
      METHODS.SUBSCRIBE,
      METHODS.UNSUBSCRIBE,
      METHODS.PATCH,
      METHODS.PURGE,
      METHODS.MKCALENDAR,
      METHODS.LINK,
      METHODS.UNLINK,
      METHODS.PRI,
      METHODS.SOURCE,
    ];
    exports.METHODS_ICE = [METHODS.SOURCE];
    exports.METHODS_RTSP = [
      METHODS.OPTIONS,
      METHODS.DESCRIBE,
      METHODS.ANNOUNCE,
      METHODS.SETUP,
      METHODS.PLAY,
      METHODS.PAUSE,
      METHODS.TEARDOWN,
      METHODS.GET_PARAMETER,
      METHODS.SET_PARAMETER,
      METHODS.REDIRECT,
      METHODS.RECORD,
      METHODS.FLUSH,
      METHODS.GET,
      METHODS.POST,
    ];
    exports.METHOD_MAP = utils_1.enumToMap(METHODS);
    exports.H_METHOD_MAP = {};
    Object.keys(exports.METHOD_MAP).forEach((key2) => {
      if (/^H/.test(key2)) {
        exports.H_METHOD_MAP[key2] = exports.METHOD_MAP[key2];
      }
    });
    (function (FINISH) {
      FINISH[(FINISH['SAFE'] = 0)] = 'SAFE';
      FINISH[(FINISH['SAFE_WITH_CB'] = 1)] = 'SAFE_WITH_CB';
      FINISH[(FINISH['UNSAFE'] = 2)] = 'UNSAFE';
    })(exports.FINISH || (exports.FINISH = {}));
    exports.ALPHA = [];
    for (let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); i++) {
      exports.ALPHA.push(String.fromCharCode(i));
      exports.ALPHA.push(String.fromCharCode(i + 32));
    }
    exports.NUM_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
    };
    exports.HEX_MAP = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      A: 10,
      B: 11,
      C: 12,
      D: 13,
      E: 14,
      F: 15,
      a: 10,
      b: 11,
      c: 12,
      d: 13,
      e: 14,
      f: 15,
    };
    exports.NUM = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    exports.ALPHANUM = exports.ALPHA.concat(exports.NUM);
    exports.MARK = ['-', '_', '.', '!', '~', '*', "'", '(', ')'];
    exports.USERINFO_CHARS = exports.ALPHANUM.concat(exports.MARK).concat([
      '%',
      ';',
      ':',
      '&',
      '=',
      '+',
      '$',
      ',',
    ]);
    exports.STRICT_URL_CHAR = [
      '!',
      '"',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '@',
      '[',
      '\\',
      ']',
      '^',
      '_',
      '`',
      '{',
      '|',
      '}',
      '~',
    ].concat(exports.ALPHANUM);
    exports.URL_CHAR = exports.STRICT_URL_CHAR.concat(['	', '\f']);
    for (let i = 128; i <= 255; i++) {
      exports.URL_CHAR.push(i);
    }
    exports.HEX = exports.NUM.concat(['a', 'b', 'c', 'd', 'e', 'f', 'A', 'B', 'C', 'D', 'E', 'F']);
    exports.STRICT_TOKEN = [
      '!',
      '#',
      '$',
      '%',
      '&',
      "'",
      '*',
      '+',
      '-',
      '.',
      '^',
      '_',
      '`',
      '|',
      '~',
    ].concat(exports.ALPHANUM);
    exports.TOKEN = exports.STRICT_TOKEN.concat([' ']);
    exports.HEADER_CHARS = ['	'];
    for (let i = 32; i <= 255; i++) {
      if (i !== 127) {
        exports.HEADER_CHARS.push(i);
      }
    }
    exports.CONNECTION_TOKEN_CHARS = exports.HEADER_CHARS.filter((c) => c !== 44);
    exports.MAJOR = exports.NUM_MAP;
    exports.MINOR = exports.MAJOR;
    var HEADER_STATE;
    (function (HEADER_STATE2) {
      HEADER_STATE2[(HEADER_STATE2['GENERAL'] = 0)] = 'GENERAL';
      HEADER_STATE2[(HEADER_STATE2['CONNECTION'] = 1)] = 'CONNECTION';
      HEADER_STATE2[(HEADER_STATE2['CONTENT_LENGTH'] = 2)] = 'CONTENT_LENGTH';
      HEADER_STATE2[(HEADER_STATE2['TRANSFER_ENCODING'] = 3)] = 'TRANSFER_ENCODING';
      HEADER_STATE2[(HEADER_STATE2['UPGRADE'] = 4)] = 'UPGRADE';
      HEADER_STATE2[(HEADER_STATE2['CONNECTION_KEEP_ALIVE'] = 5)] = 'CONNECTION_KEEP_ALIVE';
      HEADER_STATE2[(HEADER_STATE2['CONNECTION_CLOSE'] = 6)] = 'CONNECTION_CLOSE';
      HEADER_STATE2[(HEADER_STATE2['CONNECTION_UPGRADE'] = 7)] = 'CONNECTION_UPGRADE';
      HEADER_STATE2[(HEADER_STATE2['TRANSFER_ENCODING_CHUNKED'] = 8)] = 'TRANSFER_ENCODING_CHUNKED';
    })((HEADER_STATE = exports.HEADER_STATE || (exports.HEADER_STATE = {})));
    exports.SPECIAL_HEADERS = {
      connection: HEADER_STATE.CONNECTION,
      'content-length': HEADER_STATE.CONTENT_LENGTH,
      'proxy-connection': HEADER_STATE.CONNECTION,
      'transfer-encoding': HEADER_STATE.TRANSFER_ENCODING,
      upgrade: HEADER_STATE.UPGRADE,
    };
  })(constants$1);
  return constants$1;
}
function requireLlhttp_wasm() {
  if (hasRequiredLlhttp_wasm) return llhttp_wasm;
  hasRequiredLlhttp_wasm = 1;
  llhttp_wasm =
    'AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAAzk4AwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAYGAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAAMEBQFwAQ4OBQMBAAIGCAF/AUGgtwQLB/UEHwZtZW1vcnkCAAtfaW5pdGlhbGl6ZQAJGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAtsbGh0dHBfaW5pdAAKGGxsaHR0cF9zaG91bGRfa2VlcF9hbGl2ZQA1DGxsaHR0cF9hbGxvYwAMBm1hbGxvYwA6C2xsaHR0cF9mcmVlAA0EZnJlZQA8D2xsaHR0cF9nZXRfdHlwZQAOFWxsaHR0cF9nZXRfaHR0cF9tYWpvcgAPFWxsaHR0cF9nZXRfaHR0cF9taW5vcgAQEWxsaHR0cF9nZXRfbWV0aG9kABEWbGxodHRwX2dldF9zdGF0dXNfY29kZQASEmxsaHR0cF9nZXRfdXBncmFkZQATDGxsaHR0cF9yZXNldAAUDmxsaHR0cF9leGVjdXRlABUUbGxodHRwX3NldHRpbmdzX2luaXQAFg1sbGh0dHBfZmluaXNoABcMbGxodHRwX3BhdXNlABgNbGxodHRwX3Jlc3VtZQAZG2xsaHR0cF9yZXN1bWVfYWZ0ZXJfdXBncmFkZQAaEGxsaHR0cF9nZXRfZXJybm8AGxdsbGh0dHBfZ2V0X2Vycm9yX3JlYXNvbgAcF2xsaHR0cF9zZXRfZXJyb3JfcmVhc29uAB0UbGxodHRwX2dldF9lcnJvcl9wb3MAHhFsbGh0dHBfZXJybm9fbmFtZQAfEmxsaHR0cF9tZXRob2RfbmFtZQAgGmxsaHR0cF9zZXRfbGVu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QZx/akHkAEkNACAAQcwBRg0AIABBsAJGDQBBBCEFIARBiARxQYAERg0CIARBKHFFDQILQQAPC0EAQQMgACkDIFAbIQULIAULXQECf0EAIQECQCAALQAoQQFGDQAgAC8BMiICQZx/akHkAEkNACACQcwBRg0AIAJBsAJGDQAgAC8BMCIAQcAAcQ0AQQEhASAAQYgEcUGABEYNACAAQShxRSEBCyABC6IBAQN/AkACQAJAIAAtACpFDQAgAC0AK0UNAEEAIQMgAC8BMCIEQQJxRQ0BDAILQQAhAyAALwEwIgRBAXFFDQELQQEhAyAALQAoQQFGDQAgAC8BMiIFQZx/akHkAEkNACAFQcwBRg0AIAVBsAJGDQAgBEHAAHENAEEAIQMgBEGIBHFBgARGDQAgBEEocUEARyEDCyAAQQA7ATAgAEEAOgAvIAMLlAEBAn8CQAJAAkAgAC0AKkUNACAALQArRQ0AQQAhASAALwEwIgJBAnFFDQEMAgtBACEBIAAvATAiAkEBcUUNAQtBASEBIAAtAChBAUYNACAALwEyIgBBnH9qQeQASQ0AIABBzAFGDQAgAEGwAkYNACACQcAAcQ0AQQAhASACQYgEcUGABEYNACACQShxQQBHIQELIAELTwAgAEEYakIANwMAIABCADcDACAAQTBqQgA3AwAgAEEoakIANwMAIABBIGpCADcDACAAQRBqQgA3AwAgAEEIakIANwMAIABBuAE2AhxBAAt7AQF/AkAgACgCDCIDDQACQCAAKAIERQ0AIAAgATYCBAsCQCAAIAEgAhC4gICAACIDDQAgACgCDA8LIAAgAzYCHEEAIQMgACgCBCIBRQ0AIAAgASACIAAoAggRgYCAgAAAIgFFDQAgACACNgIUIAAgATYCDCABIQMLIAML8soBAxl/A34FfyOAgICAAEEQayIDJICAgIAAIAEhBCABIQUgASEGIAEhByABIQggASEJIAEhCiABIQsgASEMIAEhDSABIQ4gASEPIAEhECABIREgASESIAEhEyABIRQgASEVIAEhFiABIRcgASEYIAEhGSABIRoCQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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QQEhGwwPC0GbASEbDA4LQZwBIRsMDQtBngEhGwwMC0GgASEbDAsLQZ8BIRsMCgtBoQEhGwwJC0GiASEbDAgLQaMBIRsMBwtBpAEhGwwGC0GlASEbDAULQaYBIRsMBAtBpwEhGwwDC0GoASEbDAILQakBIRsMAQtBrwEhGwsDQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAC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IAAgIDYCAAybAgsgAEEANgIAIB8gI2tBBWohAUEjIRsMswELAkAgASIEIAJHDQBB6wAhGwyaAgsCQAJAIAQtAABBtH9qDggAtgG2AbYBtgG2AbYBAbYBCyAEQQFqIQFB3QAhGwyPAgsgBEEBaiEBQd4AIRsMjgILAkAgASIEIAJHDQBB7AAhGwyZAgsgBC0AAEHFAEcNswEgBEEBaiEBDOQBC0HtACEbIAEiHyACRg2XAiACIB9rIAAoAgAiI2ohICAfIQQgIyEBAkADQCAELQAAIAFBqLKAgABqLQAARw2zASABQQNGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAICA2AgAMmAILIABBADYCACAfICNrQQRqIQFBLSEbDLABC0HuACEbIAEiHyACRg2WAiACIB9rIAAoAgAiI2ohICAfIQQgIyEBAkADQCAELQAAIAFB8LKAgABqLQAARw2yASABQQhGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAICA2AgAMlwILIABBADYCACAfICNrQQlqIQFBKSEbDK8BCwJAIAEiASACRw0AQe8AIRsMlgILQQEhGyABLQAAQd8ARw2uASABQQFqIQEM4gELQfAAIRsgASIfIAJGDZQCIAIgH2sgACgCACIjaiEgIB8hBCAjIQEDQCAELQAAIAFBrLKAgABqLQAARw2vASABQQFGDfoBIAFBAWohASAEQQFqIgQgAkcNAAsgACAgNgIADJQCC0HxACEbIAEiHyACRg2TAiACIB9rIAAoAgAiI2ohICAfIQQgIyEBAkADQCAELQAAIAFBrrKAgABqLQAARw2vASABQQJGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAICA2AgAMlAILIABBADYCACAfICNrQQNqIQFBAiEbDKwBC0HyACEbIAEiHyACRg2SAiACIB9rIAAoAgAiI2ohICAfIQQgIyEBAkADQCAELQAAIAFBkLOAgABqLQAARw2uASABQQFGDQEgAUEBaiEBIARBAWoiBCACRw0ACyAAICA2AgAMkwILIABBADYCACAfICNrQQJqIQFBHyEbDKsBC0HzACEbIAEiHyACRg2RAiACIB9rIAAoAgAiI2ohICAfIQQgIyEBAkADQCAELQAAIAFBkrOAgABqLQAARw2tASABQQFGDQEgAUEBaiEBIARBAWoiBCAC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c3QASW52YWxpZCBtZXRob2QgZm9yIFJUU1AveC54IHJlcXVlc3QARXhwZWN0ZWQgU09VUkNFIG1ldGhvZCBmb3IgSUNFL3gueCByZXF1ZXN0AEludmFsaWQgY2hhciBpbiB1cmwgZnJhZ21lbnQgc3RhcnQARXhwZWN0ZWQgZG90AFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fc3RhdHVzAEludmFsaWQgcmVzcG9uc2Ugc3RhdHVzAEludmFsaWQgY2hhcmFjdGVyIGluIGNodW5rIHBhcmFtZXRlcnMAVXNlciBjYWxsYmFjayBlcnJvcgBgb25fY2h1bmtfaGVhZGVyYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9iZWdpbmAgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2NvbXBsZXRlYCBjYWxsYmFjayBlcnJvcgBgb25fbWVzc2FnZV9jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzZXJ2ZXIASW52YWxpZCBoZWFkZXIgdmFsdWUgY2hhcgBJbnZhbGlkIGhlYWRlciBmaWVsZCBjaGFyAEludmFsaWQgbWlub3IgdmVyc2lvbgBJbnZhbGlkIG1ham9yIHZlcnNpb24ARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgdmVyc2lvbgBFeHBlY3RlZCBDUkxGIGFmdGVyIHZlcnNpb24ASW52YWxpZCBoZWFkZXIgdG9rZW4AU3BhbiBjYWxsYmFjayBlcnJvciBpbiBvbl91cmwASW52YWxpZCBjaGFyYWN0ZXJzIGluIHVybABVbmV4cGVjdGVkIHN0YXJ0IGNoYXIgaW4gdXJsAERvdWJsZSBAIGluIHVybABFbXB0eSBDb250ZW50LUxlbmd0aABJbnZhbGlkIGNoYXJhY3RlciBpbiBDb250ZW50LUxlbmd0aABEdXBsaWNhdGUgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyIGluIHVybCBwYXRoAENvbnRlbnQtTGVuZ3RoIGNhbid0IGJlIHByZXNlbnQgd2l0aCBUcmFuc2Zlci1FbmNvZGluZwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBzaXplAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX3ZhbHVlAE1pc3NpbmcgZXhwZWN0ZWQgTEYgYWZ0ZXIgaGVhZGVyIHZhbHVlAFBhdXNlZCBieSBvbl9oZWFkZXJzX2NvbXBsZXRlAEludmFsaWQgRU9GIHN0YXRlAG9uX2NodW5rX2hlYWRlciBwYXVzZQBvbl9tZXNzYWdlX2JlZ2luIHBhdXNlAG9uX2NodW5rX2NvbXBsZXRlIHBhdXNlAG9uX21lc3NhZ2VfY29tcGxldGUgcGF1c2UAUGF1c2Ugb24gQ09OTkVDVC9VcGdyYWRlAFBhdXNlIG9uIFBSSS9VcGdyYWRlAEV4cGVjdGVkIEhUVFAvMiBDb25uZWN0aW9uIFByZWZhY2UARXhwZWN0ZWQgc3BhY2UgYWZ0ZXIgbWV0aG9kAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25faGVhZGVyX2ZpZWxkAFBhdXNlZABJbnZhbGlkIHdvcmQgZW5jb3VudGVyZWQASW52YWxpZCBtZXRob2QgZW5jb3VudGVyZWQAVW5leHBlY3RlZCBjaGFyIGluIHVybCBzY2hlbWEAUmVxdWVzdCBoYXMgaW52YWxpZCBgVHJhbnNmZXItRW5jb2RpbmdgAE1LQUNUSVZJVFkAQ09QWQBOT1RJRlkAUExBWQBQVVQAQ0hFQ0tPVVQAUE9TVABSRVBPUlQASFBFX0lOVkFMSURfQ09OU1RBTlQAR0VUAEhQRV9TVFJJQ1QAUkVESVJFQ1QAQ09OTkVDVABIUEVfSU5WQUxJRF9TVEFUVVMAT1BUSU9OUwBTRVRfUEFSQU1FVEVSAEdFVF9QQVJBTUVURVIASFBFX1VTRVIASFBFX0NCX0NIVU5LX0hFQURFUgBNS0NBTEVOREFSAFNFVFVQAFRFQVJET1dOAEhQRV9DTE9TRURfQ09OTkVDVElPTgBIUEVfSU5WQUxJRF9WRVJTSU9OAEhQRV9DQl9NRVNTQUdFX0JFR0lOAEhQRV9JTlZBTElEX0hFQURFUl9UT0tFTgBIUEVfSU5WQUxJRF9VUkwATUtDT0wAQUNMAEhQRV9JTlRFUk5BTABIUEVfT0sAVU5MSU5LAFVOTE9DSwBQUkkASFBFX0lOVkFMSURfQ09OVEVOVF9MRU5HVEgASFBFX1VORVhQRUNURURfQ09OVEVOVF9MRU5HVEgARkxVU0gAUFJPUFBBVENIAE0tU0VBUkNIAEhQRV9JTlZBTElEX1RSQU5TRkVSX0VOQ09ESU5HAEV4cGVjdGVkIENSTEYASFBFX0lOVkFMSURfQ0hVTktfU0laRQBNT1ZFAEhQRV9DQl9IRUFERVJTX0NPTVBMRVRFAEhQRV9DQl9DSFVOS19DT01QTEVURQBIUEVfQ0JfTUVTU0FHRV9DT01QTEVURQBERUxFVEUASFBFX0lOVkFMSURfRU9GX1NUQVRFAFBBVVNFAFBVUkdFAE1FUkdFAEhQRV9QQVVTRURfVVBHUkFERQBIUEVfUEFVU0VEX0gyX1VQR1JBREUAU09VUkNFAEFOTk9VTkNFAFRSQUNFAERFU0NSSUJFAFVOU1VCU0NSSUJFAFJFQ09SRABIUEVfSU5WQUxJRF9NRVRIT0QAUFJPUEZJTkQAVU5CSU5EAFJFQklORABIUEVfTEZfRVhQRUNURUQASFBFX1BBVVNFRABIRUFEAEV4cGVjdGVkIEhUVFAvAIwLAAB/CwAAgwoAADkNAADACwAADQsAAA8NAABlCwAAagoAACMLAABMCwAApQsAACMMAACfCgAAjAwAAPcLAAA3CwAAPwwAAG0MAADfCgAAVwwAAEkNAAC0DAAAxwwAANYKAACFDAAAfwoAAFQNAABeCgAAUQoAAJcKAACyCgAA7QwAAEAKAACcCwAAdQsAADoMAAAiDQAA5AsAAPALAACaCwAANA0AADINAAArDQAAewsAAGMKAAA1CgAAVQoAAK4MAADuCwAARQoAAP4MAAD8DAAA6AsAAKgMAADzCgAAlQsAAJMLAADdDAAAoQsAAPMMAADkDAAA/goAAEwKAACiDAAABAsAAMgKAAC6CgAAjgoAAAgNAADeCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAIAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAWxvc2VlZXAtYWxpdmUAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAQEBAQEBAQECAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAWNodW5rZWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAEBAQEBAAABAQABAQABAQEBAQEBAQEBAAAAAAAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZWN0aW9uZW50LWxlbmd0aG9ucm94eS1jb25uZWN0aW9uAAAAAAAAAAAAAAAAAAAAcmFuc2Zlci1lbmNvZGluZ3BncmFkZQ0KDQoNClNNDQoNClRUUC9DRS9UU1AvAAAAAAAAAAAAAAAAAQIAAQMAAAAAAAAAAAAAAAAAAAAAAAAEAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBBQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAAABAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAAEAAAIAAAAAAAAAAAAAAAAAAAAAAAADBAAABAQEBAQEBAQEBAQFBAQEBAQEBAQEBAQEAAQABgcEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAAEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAABAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAACAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATk9VTkNFRUNLT1VUTkVDVEVURUNSSUJFTFVTSEVURUFEU0VBUkNIUkdFQ1RJVklUWUxFTkRBUlZFT1RJRllQVElPTlNDSFNFQVlTVEFUQ0hHRU9SRElSRUNUT1JUUkNIUEFSQU1FVEVSVVJDRUJTQ1JJQkVBUkRPV05BQ0VJTkROS0NLVUJTQ1JJQkVIVFRQL0FEVFAv';
  return llhttp_wasm;
}
function requireLlhttp_simd_wasm() {
  if (hasRequiredLlhttp_simd_wasm) return llhttp_simd_wasm;
  hasRequiredLlhttp_simd_wasm = 1;
  llhttp_simd_wasm =
    'AGFzbQEAAAABMAhgAX8Bf2ADf39/AX9gBH9/f38Bf2AAAGADf39/AGABfwBgAn9/AGAGf39/f39/AALLAQgDZW52GHdhc21fb25faGVhZGVyc19jb21wbGV0ZQACA2VudhV3YXNtX29uX21lc3NhZ2VfYmVnaW4AAANlbnYLd2FzbV9vbl91cmwAAQNlbnYOd2FzbV9vbl9zdGF0dXMAAQNlbnYUd2FzbV9vbl9oZWFkZXJfZmllbGQAAQNlbnYUd2FzbV9vbl9oZWFkZXJfdmFsdWUAAQNlbnYMd2FzbV9vbl9ib2R5AAEDZW52GHdhc21fb25fbWVzc2FnZV9jb21wbGV0ZQAAAzk4AwMEAAAFAAAAAAAABQEFAAUFBQAABgAAAAYGAQEBAQEBAQEBAQEBAQEBAQABAAABAQcAAAUFAAMEBQFwAQ4OBQMBAAIGCAF/AUGgtwQLB/UEHwZtZW1vcnkCAAtfaW5pdGlhbGl6ZQAJGV9faW5kaXJlY3RfZnVuY3Rpb25fdGFibGUBAAtsbGh0dHBfaW5pdAAKGGxsaHR0cF9zaG91bGRfa2VlcF9hbGl2ZQA1DGxsaHR0cF9hbGxvYwAMBm1hbGxvYwA6C2xsaHR0cF9mcmVlAA0EZnJlZQA8D2xsaHR0cF9nZXRfdHlwZQAOFWxsaHR0cF9nZXRfaHR0cF9tYWpvcgAPFWxsaHR0cF9nZXRfaHR0cF9taW5vcgAQEWxsaHR0cF9nZXRfbWV0aG9kABEWbGxodHRwX2dldF9zdGF0dXNfY29kZQASEmxsaHR0cF9nZXRfdXBncmFkZQATDGxsaHR0cF9yZXNldAAUDmxsaHR0cF9leGVjdXRlABUUbGxodHRwX3NldHRpbmdzX2luaXQAFg1sbGh0dHBfZmluaXNoABcMbGxodHRwX3BhdXNlABgNbGxodHRwX3Jlc3VtZQAZG2xsaHR0cF9yZXN1bWVfYWZ0ZXJfdXBncmFkZQAaEGxsaHR0cF9nZXRfZXJybm8AGxdsbGh0dHBfZ2V0X2Vycm9yX3JlYXNvbgAcF2xsaHR0cF9zZXRfZXJyb3JfcmVhc29uAB0UbGxodHRwX2dldF9lcnJvcl9wb3MAHhFsbGh0dHBfZXJybm9fbmFtZQAfEmxsaHR0cF9tZXRob2RfbmFtZQAgGmxsaHR0cF9zZXRfbGVu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C0GcASEbDA0LQZ4BIRsMDAtBoAEhGwwLC0GfASEbDAoLQaEBIRsMCQtBogEhGwwIC0GjASEbDAcLQaQBIRsMBgtBpQEhGwwFC0GmASEbDAQLQacBIRsMAwtBqAEhGwwCC0GpASEbDAELQa8BIRsLA0ACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAIBsO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aG9kIGZvciBSVFNQL3gueCByZXF1ZXN0AEV4cGVjdGVkIFNPVVJDRSBtZXRob2QgZm9yIElDRS94LnggcmVxdWVzdABJbnZhbGlkIGNoYXIgaW4gdXJsIGZyYWdtZW50IHN0YXJ0AEV4cGVjdGVkIGRvdABTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX3N0YXR1cwBJbnZhbGlkIHJlc3BvbnNlIHN0YXR1cwBJbnZhbGlkIGNoYXJhY3RlciBpbiBjaHVuayBwYXJhbWV0ZXJzAFVzZXIgY2FsbGJhY2sgZXJyb3IAYG9uX2NodW5rX2hlYWRlcmAgY2FsbGJhY2sgZXJyb3IAYG9uX21lc3NhZ2VfYmVnaW5gIGNhbGxiYWNrIGVycm9yAGBvbl9jaHVua19jb21wbGV0ZWAgY2FsbGJhY2sgZXJyb3IAYG9uX21lc3NhZ2VfY29tcGxldGVgIGNhbGxiYWNrIGVycm9yAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2VydmVyAEludmFsaWQgaGVhZGVyIHZhbHVlIGNoYXIASW52YWxpZCBoZWFkZXIgZmllbGQgY2hhcgBJbnZhbGlkIG1pbm9yIHZlcnNpb24ASW52YWxpZCBtYWpvciB2ZXJzaW9uAEV4cGVjdGVkIHNwYWNlIGFmdGVyIHZlcnNpb24ARXhwZWN0ZWQgQ1JMRiBhZnRlciB2ZXJzaW9uAEludmFsaWQgaGVhZGVyIHRva2VuAFNwYW4gY2FsbGJhY2sgZXJyb3IgaW4gb25fdXJsAEludmFsaWQgY2hhcmFjdGVycyBpbiB1cmwAVW5leHBlY3RlZCBzdGFydCBjaGFyIGluIHVybABEb3VibGUgQCBpbiB1cmwARW1wdHkgQ29udGVudC1MZW5ndGgASW52YWxpZCBjaGFyYWN0ZXIgaW4gQ29udGVudC1MZW5ndGgARHVwbGljYXRlIENvbnRlbnQtTGVuZ3RoAEludmFsaWQgY2hhciBpbiB1cmwgcGF0aABDb250ZW50LUxlbmd0aCBjYW4ndCBiZSBwcmVzZW50IHdpdGggVHJhbnNmZXItRW5jb2RpbmcASW52YWxpZCBjaGFyYWN0ZXIgaW4gY2h1bmsgc2l6ZQBTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2hlYWRlcl92YWx1ZQBNaXNzaW5nIGV4cGVjdGVkIExGIGFmdGVyIGhlYWRlciB2YWx1ZQBQYXVzZWQgYnkgb25faGVhZGVyc19jb21wbGV0ZQBJbnZhbGlkIEVPRiBzdGF0ZQBvbl9jaHVua19oZWFkZXIgcGF1c2UAb25fbWVzc2FnZV9iZWdpbiBwYXVzZQBvbl9jaHVua19jb21wbGV0ZSBwYXVzZQBvbl9tZXNzYWdlX2NvbXBsZXRlIHBhdXNlAFBhdXNlIG9uIENPTk5FQ1QvVXBncmFkZQBQYXVzZSBvbiBQUkkvVXBncmFkZQBFeHBlY3RlZCBIVFRQLzIgQ29ubmVjdGlvbiBQcmVmYWNlAEV4cGVjdGVkIHNwYWNlIGFmdGVyIG1ldGhvZABTcGFuIGNhbGxiYWNrIGVycm9yIGluIG9uX2hlYWRlcl9maWVsZABQYXVzZWQASW52YWxpZCB3b3JkIGVuY291bnRlcmVkAEludmFsaWQgbWV0aG9kIGVuY291bnRlcmVkAFVuZXhwZWN0ZWQgY2hhciBpbiB1cmwgc2NoZW1hAFJlcXVlc3QgaGFzIGludmFsaWQgYFRyYW5zZmVyLUVuY29kaW5nYABNS0FDVElWSVRZAENPUFkATk9USUZZAFBMQVkAUFVUAENIRUNLT1VUAFBPU1QAUkVQT1JUAEhQRV9JTlZBTElEX0NPTlNUQU5UAEdFVABIUEVfU1RSSUNUAFJFRElSRUNUAENPTk5FQ1QASFBFX0lOVkFMSURfU1RBVFVTAE9QVElPTlMAU0VUX1BBUkFNRVRFUgBHRVRfUEFSQU1FVEVSAEhQRV9VU0VSAEhQRV9DQl9DSFVOS19IRUFERVIATUtDQUxFTkRBUgBTRVRVUABURUFSRE9XTgBIUEVfQ0xPU0VEX0NPTk5FQ1RJT04ASFBFX0lOVkFMSURfVkVSU0lPTgBIUEVfQ0JfTUVTU0FHRV9CRUdJTgBIUEVfSU5WQUxJRF9IRUFERVJfVE9LRU4ASFBFX0lOVkFMSURfVVJMAE1LQ09MAEFDTABIUEVfSU5URVJOQUwASFBFX09LAFVOTElOSwBVTkxPQ0sAUFJJAEhQRV9JTlZBTElEX0NPTlRFTlRfTEVOR1RIAEhQRV9VTkVYUEVDVEVEX0NPTlRFTlRfTEVOR1RIAEZMVVNIAFBS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bmdwZ3JhZGUNCg0KDQpTTQ0KDQpUVFAvQ0UvVFNQLwAAAAAAAAAAAAAAAAECAAEDAAAAAAAAAAAAAAAAAAAAAAAABAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAAAAAAABAgABAwAAAAAAAAAAAAAAAAAAAAAAAAQBAQUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAAAAAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAwQAAAQEBAQEBAQEBAQEBQQEBAQEBAQEBAQEBAAEAAYHBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAQABAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAgAAAAACAAAAAAAAAAAAAAAAAAAAAAADAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwAAAAAAAAMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE5PVU5DRUVDS09VVE5FQ1RFVEVDUklCRUxVU0hFVEVBRFNFQVJDSFJHRUNUSVZJVFlMRU5EQVJWRU9USUZZUFRJT05TQ0hTRUFZU1RBVENIR0VPUkRJUkVDVE9SVFJDSFBBUkFNRVRFUlVSQ0VCU0NSSUJFQVJET1dOQUNFSU5ETktDS1VCU0NSSUJFSFRUUC9BRFRQLw==';
  return llhttp_simd_wasm;
}
async function lazyllhttp() {
  const llhttpWasmData = process.env.JEST_WORKER_ID ? requireLlhttp_wasm() : void 0;
  let mod;
  try {
    mod = await WebAssembly.compile(Buffer.from(requireLlhttp_simd_wasm(), 'base64'));
  } catch (e) {
    mod = await WebAssembly.compile(Buffer.from(llhttpWasmData || requireLlhttp_wasm(), 'base64'));
  }
  return await WebAssembly.instantiate(mod, {
    env: {
      wasm_on_url: (p, at, len) => {
        return 0;
      },
      wasm_on_status: (p, at, len) => {
        assert$3.strictEqual(currentParser.ptr, p);
        const start = at - currentBufferPtr;
        const end = start + len;
        return currentParser.onStatus(currentBufferRef.slice(start, end)) || 0;
      },
      wasm_on_message_begin: (p) => {
        assert$3.strictEqual(currentParser.ptr, p);
        return currentParser.onMessageBegin() || 0;
      },
      wasm_on_header_field: (p, at, len) => {
        assert$3.strictEqual(currentParser.ptr, p);
        const start = at - currentBufferPtr;
        const end = start + len;
        return currentParser.onHeaderField(currentBufferRef.slice(start, end)) || 0;
      },
      wasm_on_header_value: (p, at, len) => {
        assert$3.strictEqual(currentParser.ptr, p);
        const start = at - currentBufferPtr;
        const end = start + len;
        return currentParser.onHeaderValue(currentBufferRef.slice(start, end)) || 0;
      },
      wasm_on_headers_complete: (p, statusCode, upgrade2, shouldKeepAlive) => {
        assert$3.strictEqual(currentParser.ptr, p);
        return (
          currentParser.onHeadersComplete(
            statusCode,
            Boolean(upgrade2),
            Boolean(shouldKeepAlive)
          ) || 0
        );
      },
      wasm_on_body: (p, at, len) => {
        assert$3.strictEqual(currentParser.ptr, p);
        const start = at - currentBufferPtr;
        const end = start + len;
        return currentParser.onBody(currentBufferRef.slice(start, end)) || 0;
      },
      wasm_on_message_complete: (p) => {
        assert$3.strictEqual(currentParser.ptr, p);
        return currentParser.onMessageComplete() || 0;
      },
    },
  });
}
function onParserTimeout(parser) {
  const { socket, timeoutType, client: client2 } = parser;
  if (timeoutType === TIMEOUT_HEADERS) {
    assert$3(!parser.paused, 'cannot be paused while waiting for headers');
    util$9.destroy(socket, new HeadersTimeoutError());
  } else if (timeoutType === TIMEOUT_BODY) {
    if (!parser.paused) {
      util$9.destroy(socket, new BodyTimeoutError());
    }
  } else if (timeoutType === TIMEOUT_IDLE) {
    assert$3(client2[kRunning$3] === 0 && client2[kKeepAliveTimeoutValue]);
    util$9.destroy(socket, new InformationalError('socket idle timeout'));
  }
}
function onSocketReadable() {
  const { [kParser]: parser } = this;
  parser.readMore();
}
function onSocketError(err) {
  const { [kParser]: parser } = this;
  assert$3(err.code !== 'ERR_TLS_CERT_ALTNAME_INVALID');
  if (err.code === 'ECONNRESET' && parser.statusCode && !parser.shouldKeepAlive) {
    parser.finish();
    return;
  }
  this[kError] = err;
  onError(this[kClient], err);
}
function onError(client2, err) {
  if (client2[kRunning$3] === 0 && err.code !== 'UND_ERR_INFO' && err.code !== 'UND_ERR_SOCKET') {
    assert$3(client2[kPendingIdx] === client2[kRunningIdx]);
    const requests = client2[kQueue$1].splice(client2[kRunningIdx]);
    for (let i = 0; i < requests.length; i++) {
      const request2 = requests[i];
      errorRequest(client2, request2, err);
    }
    assert$3(client2[kSize$4] === 0);
  }
}
function onSocketEnd() {
  const { [kParser]: parser } = this;
  if (parser.statusCode && !parser.shouldKeepAlive) {
    parser.finish();
    return;
  }
  util$9.destroy(this, new SocketError$2('other side closed', util$9.getSocketInfo(this)));
}
function onSocketClose() {
  const { [kClient]: client2 } = this;
  this[kParser].destroy();
  this[kParser] = null;
  const err = this[kError] || new SocketError$2('closed', util$9.getSocketInfo(this));
  client2[kSocket] = null;
  if (client2.destroyed) {
    assert$3(client2[kPending$2] === 0);
    const requests = client2[kQueue$1].splice(client2[kRunningIdx]);
    for (let i = 0; i < requests.length; i++) {
      const request2 = requests[i];
      errorRequest(client2, request2, err);
    }
  } else if (client2[kRunning$3] > 0 && err.code !== 'UND_ERR_INFO') {
    const request2 = client2[kQueue$1][client2[kRunningIdx]];
    client2[kQueue$1][client2[kRunningIdx]++] = null;
    errorRequest(client2, request2, err);
  }
  client2[kPendingIdx] = client2[kRunningIdx];
  assert$3(client2[kRunning$3] === 0);
  client2.emit('disconnect', client2[kUrl$2], [client2], err);
  resume(client2);
}
async function connect$1(client2) {
  assert$3(!client2[kConnecting]);
  assert$3(!client2[kSocket]);
  let { host, hostname, protocol, port } = client2[kUrl$2];
  if (hostname[0] === '[') {
    const idx = hostname.indexOf(']');
    assert$3(idx !== -1);
    const ip = hostname.substr(1, idx - 1);
    assert$3(net.isIP(ip));
    hostname = ip;
  }
  client2[kConnecting] = true;
  if (channels.beforeConnect.hasSubscribers) {
    channels.beforeConnect.publish({
      connectParams: {
        host,
        hostname,
        protocol,
        port,
        servername: client2[kServerName],
      },
      connector: client2[kConnector],
    });
  }
  try {
    const socket = await new Promise((resolve2, reject) => {
      client2[kConnector](
        {
          host,
          hostname,
          protocol,
          port,
          servername: client2[kServerName],
        },
        (err, socket2) => {
          if (err) {
            reject(err);
          } else {
            resolve2(socket2);
          }
        }
      );
    });
    if (!llhttpInstance) {
      llhttpInstance = await llhttpPromise;
      llhttpPromise = null;
    }
    client2[kConnecting] = false;
    assert$3(socket);
    client2[kSocket] = socket;
    socket[kNoRef] = false;
    socket[kWriting] = false;
    socket[kReset] = false;
    socket[kBlocking] = false;
    socket[kError] = null;
    socket[kParser] = new Parser(client2, socket, llhttpInstance);
    socket[kClient] = client2;
    socket[kCounter] = 0;
    socket[kMaxRequests] = client2[kMaxRequests];
    socket
      .on('error', onSocketError)
      .on('readable', onSocketReadable)
      .on('end', onSocketEnd)
      .on('close', onSocketClose);
    if (channels.connected.hasSubscribers) {
      channels.connected.publish({
        connectParams: {
          host,
          hostname,
          protocol,
          port,
          servername: client2[kServerName],
        },
        connector: client2[kConnector],
        socket,
      });
    }
    client2.emit('connect', client2[kUrl$2], [client2]);
  } catch (err) {
    client2[kConnecting] = false;
    if (channels.connectError.hasSubscribers) {
      channels.connectError.publish({
        connectParams: {
          host,
          hostname,
          protocol,
          port,
          servername: client2[kServerName],
        },
        connector: client2[kConnector],
        error: err,
      });
    }
    if (err.code === 'ERR_TLS_CERT_ALTNAME_INVALID') {
      assert$3(client2[kRunning$3] === 0);
      while (
        client2[kPending$2] > 0 &&
        client2[kQueue$1][client2[kPendingIdx]].servername === client2[kServerName]
      ) {
        const request2 = client2[kQueue$1][client2[kPendingIdx]++];
        errorRequest(client2, request2, err);
      }
    } else {
      onError(client2, err);
    }
    client2.emit('connectionError', client2[kUrl$2], [client2], err);
  }
  resume(client2);
}
function emitDrain(client2) {
  client2[kNeedDrain$2] = 0;
  client2.emit('drain', client2[kUrl$2], [client2]);
}
function resume(client2, sync) {
  if (client2[kResuming] === 2) {
    return;
  }
  client2[kResuming] = 2;
  _resume(client2, sync);
  client2[kResuming] = 0;
  if (client2[kRunningIdx] > 256) {
    client2[kQueue$1].splice(0, client2[kRunningIdx]);
    client2[kPendingIdx] -= client2[kRunningIdx];
    client2[kRunningIdx] = 0;
  }
}
function _resume(client2, sync) {
  while (true) {
    if (client2.destroyed) {
      assert$3(client2[kPending$2] === 0);
      return;
    }
    if (client2.closed && !client2[kSize$4]) {
      client2.destroy();
      return;
    }
    const socket = client2[kSocket];
    if (socket) {
      if (client2[kSize$4] === 0) {
        if (!socket[kNoRef] && socket.unref) {
          socket.unref();
          socket[kNoRef] = true;
        }
      } else if (socket[kNoRef] && socket.ref) {
        socket.ref();
        socket[kNoRef] = false;
      }
      if (client2[kSize$4] === 0) {
        if (socket[kParser].timeoutType !== TIMEOUT_IDLE) {
          socket[kParser].setTimeout(client2[kKeepAliveTimeoutValue], TIMEOUT_IDLE);
        }
      } else if (client2[kRunning$3] > 0 && socket[kParser].statusCode < 200) {
        if (socket[kParser].timeoutType !== TIMEOUT_HEADERS) {
          const request3 = client2[kQueue$1][client2[kRunningIdx]];
          const headersTimeout =
            request3.headersTimeout != null ? request3.headersTimeout : client2[kHeadersTimeout];
          socket[kParser].setTimeout(headersTimeout, TIMEOUT_HEADERS);
        }
      }
    }
    if (client2[kBusy$1]) {
      client2[kNeedDrain$2] = 2;
    } else if (client2[kNeedDrain$2] === 2) {
      if (sync) {
        client2[kNeedDrain$2] = 1;
        process.nextTick(emitDrain, client2);
      } else {
        emitDrain(client2);
      }
      continue;
    }
    if (client2[kPending$2] === 0) {
      return;
    }
    if (client2[kRunning$3] >= (client2[kPipelining] || 1)) {
      return;
    }
    const request2 = client2[kQueue$1][client2[kPendingIdx]];
    if (client2[kUrl$2].protocol === 'https:' && client2[kServerName] !== request2.servername) {
      if (client2[kRunning$3] > 0) {
        return;
      }
      client2[kServerName] = request2.servername;
      if (socket && socket.servername !== request2.servername) {
        util$9.destroy(socket, new InformationalError('servername changed'));
        return;
      }
    }
    if (client2[kConnecting]) {
      return;
    }
    if (!socket) {
      connect$1(client2);
      continue;
    }
    if (socket.destroyed || socket[kWriting] || socket[kReset] || socket[kBlocking]) {
      return;
    }
    if (client2[kRunning$3] > 0 && !request2.idempotent) {
      return;
    }
    if (client2[kRunning$3] > 0 && (request2.upgrade || request2.method === 'CONNECT')) {
      return;
    }
    if (util$9.isStream(request2.body) && util$9.bodyLength(request2.body) === 0) {
      request2.body
        .on('data', function () {
          assert$3(false);
        })
        .on('error', function (err) {
          errorRequest(client2, request2, err);
        })
        .on('end', function () {
          util$9.destroy(this);
        });
      request2.body = null;
    }
    if (
      client2[kRunning$3] > 0 &&
      (util$9.isStream(request2.body) || util$9.isAsyncIterable(request2.body))
    ) {
      return;
    }
    if (!request2.aborted && write(client2, request2)) {
      client2[kPendingIdx]++;
    } else {
      client2[kQueue$1].splice(client2[kPendingIdx], 1);
    }
  }
}
function write(client2, request2) {
  const {
    body: body2,
    method,
    path,
    host,
    upgrade: upgrade2,
    headers: headers2,
    blocking,
  } = request2;
  const expectsPayload = method === 'PUT' || method === 'POST' || method === 'PATCH';
  if (body2 && typeof body2.read === 'function') {
    body2.read(0);
  }
  let contentLength = util$9.bodyLength(body2);
  if (contentLength === null) {
    contentLength = request2.contentLength;
  }
  if (contentLength === 0 && !expectsPayload) {
    contentLength = null;
  }
  if (request2.contentLength !== null && request2.contentLength !== contentLength) {
    if (client2[kStrictContentLength]) {
      errorRequest(client2, request2, new RequestContentLengthMismatchError());
      return false;
    }
    process.emitWarning(new RequestContentLengthMismatchError());
  }
  const socket = client2[kSocket];
  try {
    request2.onConnect((err) => {
      if (request2.aborted || request2.completed) {
        return;
      }
      errorRequest(client2, request2, err || new RequestAbortedError$7());
      util$9.destroy(socket, new InformationalError('aborted'));
    });
  } catch (err) {
    errorRequest(client2, request2, err);
  }
  if (request2.aborted) {
    return false;
  }
  if (method === 'HEAD') {
    socket[kReset] = true;
  }
  if (upgrade2 || method === 'CONNECT') {
    socket[kReset] = true;
  }
  if (client2[kMaxRequests] && socket[kCounter]++ >= client2[kMaxRequests]) {
    socket[kReset] = true;
  }
  if (blocking) {
    socket[kBlocking] = true;
  }
  let header = `${method} ${path} HTTP/1.1\r
`;
  if (typeof host === 'string') {
    header += `host: ${host}\r
`;
  } else {
    header += client2[kHostHeader];
  }
  if (upgrade2) {
    header += `connection: upgrade\r
upgrade: ${upgrade2}\r
`;
  } else if (client2[kPipelining]) {
    header += 'connection: keep-alive\r\n';
  } else {
    header += 'connection: close\r\n';
  }
  if (headers2) {
    header += headers2;
  }
  if (channels.sendHeaders.hasSubscribers) {
    channels.sendHeaders.publish({ request: request2, headers: header, socket });
  }
  if (!body2) {
    if (contentLength === 0) {
      socket.write(
        `${header}content-length: 0\r
\r
`,
        'ascii'
      );
    } else {
      assert$3(contentLength === null, 'no body must not have content length');
      socket.write(
        `${header}\r
`,
        'ascii'
      );
    }
    request2.onRequestSent();
  } else if (util$9.isBuffer(body2)) {
    assert$3(contentLength === body2.byteLength, 'buffer body must have content length');
    socket.cork();
    socket.write(
      `${header}content-length: ${contentLength}\r
\r
`,
      'ascii'
    );
    socket.write(body2);
    socket.uncork();
    request2.onBodySent(body2);
    request2.onRequestSent();
    if (!expectsPayload) {
      socket[kReset] = true;
    }
  } else if (util$9.isBlobLike(body2)) {
    if (typeof body2.stream === 'function') {
      writeIterable({
        body: body2.stream(),
        client: client2,
        request: request2,
        socket,
        contentLength,
        header,
        expectsPayload,
      });
    } else {
      writeBlob({
        body: body2,
        client: client2,
        request: request2,
        socket,
        contentLength,
        header,
        expectsPayload,
      });
    }
  } else if (util$9.isStream(body2)) {
    writeStream({
      body: body2,
      client: client2,
      request: request2,
      socket,
      contentLength,
      header,
      expectsPayload,
    });
  } else if (util$9.isIterable(body2)) {
    writeIterable({
      body: body2,
      client: client2,
      request: request2,
      socket,
      contentLength,
      header,
      expectsPayload,
    });
  } else {
    assert$3(false);
  }
  return true;
}
function writeStream({
  body: body2,
  client: client2,
  request: request2,
  socket,
  contentLength,
  header,
  expectsPayload,
}) {
  assert$3(contentLength !== 0 || client2[kRunning$3] === 0, 'stream body cannot be pipelined');
  let finished2 = false;
  const writer = new AsyncWriter({
    socket,
    request: request2,
    contentLength,
    client: client2,
    expectsPayload,
    header,
  });
  const onData = function (chunk) {
    try {
      assert$3(!finished2);
      if (!writer.write(chunk) && this.pause) {
        this.pause();
      }
    } catch (err) {
      util$9.destroy(this, err);
    }
  };
  const onDrain = function () {
    assert$3(!finished2);
    if (body2.resume) {
      body2.resume();
    }
  };
  const onAbort = function () {
    onFinished(new RequestAbortedError$7());
  };
  const onFinished = function (err) {
    if (finished2) {
      return;
    }
    finished2 = true;
    assert$3(socket.destroyed || (socket[kWriting] && client2[kRunning$3] <= 1));
    socket.off('drain', onDrain).off('error', onFinished);
    body2
      .removeListener('data', onData)
      .removeListener('end', onFinished)
      .removeListener('error', onFinished)
      .removeListener('close', onAbort);
    if (!err) {
      try {
        writer.end();
      } catch (er) {
        err = er;
      }
    }
    writer.destroy(err);
    if (err && (err.code !== 'UND_ERR_INFO' || err.message !== 'reset')) {
      util$9.destroy(body2, err);
    } else {
      util$9.destroy(body2);
    }
  };
  body2.on('data', onData).on('end', onFinished).on('error', onFinished).on('close', onAbort);
  if (body2.resume) {
    body2.resume();
  }
  socket.on('drain', onDrain).on('error', onFinished);
}
async function writeBlob({
  body: body2,
  client: client2,
  request: request2,
  socket,
  contentLength,
  header,
  expectsPayload,
}) {
  assert$3(contentLength === body2.size, 'blob body must have content length');
  try {
    if (contentLength != null && contentLength !== body2.size) {
      throw new RequestContentLengthMismatchError();
    }
    const buffer = Buffer.from(await body2.arrayBuffer());
    socket.cork();
    socket.write(
      `${header}content-length: ${contentLength}\r
\r
`,
      'ascii'
    );
    socket.write(buffer);
    socket.uncork();
    request2.onBodySent(buffer);
    request2.onRequestSent();
    if (!expectsPayload) {
      socket[kReset] = true;
    }
    resume(client2);
  } catch (err) {
    util$9.destroy(socket, err);
  }
}
async function writeIterable({
  body: body2,
  client: client2,
  request: request2,
  socket,
  contentLength,
  header,
  expectsPayload,
}) {
  assert$3(contentLength !== 0 || client2[kRunning$3] === 0, 'iterator body cannot be pipelined');
  let callback = null;
  function onDrain() {
    if (callback) {
      const cb = callback;
      callback = null;
      cb();
    }
  }
  const waitForDrain = () =>
    new Promise((resolve2, reject) => {
      assert$3(callback === null);
      if (socket[kError]) {
        reject(socket[kError]);
      } else {
        callback = resolve2;
      }
    });
  socket.on('close', onDrain).on('drain', onDrain);
  const writer = new AsyncWriter({
    socket,
    request: request2,
    contentLength,
    client: client2,
    expectsPayload,
    header,
  });
  try {
    for await (const chunk of body2) {
      if (socket[kError]) {
        throw socket[kError];
      }
      if (!writer.write(chunk)) {
        await waitForDrain();
      }
    }
    writer.end();
  } catch (err) {
    writer.destroy(err);
  } finally {
    socket.off('close', onDrain).off('drain', onDrain);
  }
}
function errorRequest(client2, request2, err) {
  try {
    request2.onError(err);
    assert$3(request2.aborted);
  } catch (err2) {
    client2.emit('error', err2);
  }
}
function defaultFactory$1(origin, opts) {
  return new Client$1(origin, opts);
}
function defaultFactory(origin, opts) {
  return opts && opts.connections === 1 ? new Client(origin, opts) : new Pool(origin, opts);
}
function isLocked(self2) {
  return (self2[kBody] && self2[kBody].locked === true) || self2[kConsume];
}
function isUnusable(self2) {
  return util$6.isDisturbed(self2) || isLocked(self2);
}
async function consume(stream2, type) {
  if (isUnusable(stream2)) {
    throw new TypeError('unusable');
  }
  assert$2(!stream2[kConsume]);
  return new Promise((resolve2, reject) => {
    stream2[kConsume] = {
      type,
      stream: stream2,
      resolve: resolve2,
      reject,
      length: 0,
      body: [],
    };
    stream2
      .on('error', function (err) {
        consumeFinish(this[kConsume], err);
      })
      .on('close', function () {
        if (this[kConsume].body !== null) {
          consumeFinish(this[kConsume], new RequestAbortedError$6());
        }
      });
    process.nextTick(consumeStart, stream2[kConsume]);
  });
}
function consumeStart(consume2) {
  if (consume2.body === null) {
    return;
  }
  const { _readableState: state } = consume2.stream;
  for (const chunk of state.buffer) {
    consumePush(consume2, chunk);
  }
  if (state.endEmitted) {
    consumeEnd(this[kConsume]);
  } else {
    consume2.stream.on('end', function () {
      consumeEnd(this[kConsume]);
    });
  }
  consume2.stream.resume();
  while (consume2.stream.read() != null) {}
}
function consumeEnd(consume2) {
  const { type, body: body2, resolve: resolve2, stream: stream2, length } = consume2;
  try {
    if (type === 'text') {
      resolve2(toUSVString(Buffer.concat(body2)));
    } else if (type === 'json') {
      resolve2(JSON.parse(Buffer.concat(body2)));
    } else if (type === 'arrayBuffer') {
      const dst = new Uint8Array(length);
      let pos = 0;
      for (const buf of body2) {
        dst.set(buf, pos);
        pos += buf.byteLength;
      }
      resolve2(dst);
    } else if (type === 'blob') {
      if (!Blob) {
        Blob = require('buffer').Blob;
      }
      resolve2(new Blob(body2, { type: stream2[kContentType] }));
    }
    consumeFinish(consume2);
  } catch (err) {
    stream2.destroy(err);
  }
}
function consumePush(consume2, chunk) {
  consume2.length += chunk.length;
  consume2.body.push(chunk);
}
function consumeFinish(consume2, err) {
  if (consume2.body === null) {
    return;
  }
  if (err) {
    consume2.reject(err);
  } else {
    consume2.resolve();
  }
  consume2.type = null;
  consume2.stream = null;
  consume2.resolve = null;
  consume2.reject = null;
  consume2.length = 0;
  consume2.body = null;
}
function abort(self2) {
  if (self2.abort) {
    self2.abort();
  } else {
    self2.onError(new RequestAbortedError$5());
  }
}
function addSignal$5(self2, signal) {
  self2[kSignal] = null;
  self2[kListener] = null;
  if (!signal) {
    return;
  }
  if (signal.aborted) {
    abort(self2);
    return;
  }
  self2[kSignal] = signal;
  self2[kListener] = () => {
    abort(self2);
  };
  if ('addEventListener' in self2[kSignal]) {
    self2[kSignal].addEventListener('abort', self2[kListener]);
  } else {
    self2[kSignal].addListener('abort', self2[kListener]);
  }
}
function removeSignal$5(self2) {
  if (!self2[kSignal]) {
    return;
  }
  if ('removeEventListener' in self2[kSignal]) {
    self2[kSignal].removeEventListener('abort', self2[kListener]);
  } else {
    self2[kSignal].removeListener('abort', self2[kListener]);
  }
  self2[kSignal] = null;
  self2[kListener] = null;
}
async function getResolveErrorBodyCallback({
  callback,
  body: body2,
  contentType,
  statusCode,
  statusMessage,
  headers: headers2,
}) {
  if (statusCode === 204 || !contentType) {
    body2.dump();
    process.nextTick(
      callback,
      new ResponseStatusCodeError(
        `Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`,
        statusCode,
        headers2
      )
    );
    return;
  }
  try {
    if (contentType.startsWith('application/json')) {
      const payload = await body2.json();
      process.nextTick(
        callback,
        new ResponseStatusCodeError(
          `Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`,
          statusCode,
          headers2,
          payload
        )
      );
      return;
    }
    if (contentType.startsWith('text/')) {
      const payload = await body2.text();
      process.nextTick(
        callback,
        new ResponseStatusCodeError(
          `Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`,
          statusCode,
          headers2,
          payload
        )
      );
      return;
    }
  } catch (err) {}
  body2.dump();
  process.nextTick(
    callback,
    new ResponseStatusCodeError(
      `Response status code ${statusCode}${statusMessage ? `: ${statusMessage}` : ''}`,
      statusCode,
      headers2
    )
  );
}
function request$1(opts, callback) {
  if (callback === void 0) {
    return new Promise((resolve2, reject) => {
      request$1.call(this, opts, (err, data) => {
        return err ? reject(err) : resolve2(data);
      });
    });
  }
  try {
    this.dispatch(opts, new RequestHandler(opts, callback));
  } catch (err) {
    if (typeof callback !== 'function') {
      throw err;
    }
    const opaque = opts && opts.opaque;
    queueMicrotask(() => callback(err, { opaque }));
  }
}
function stream(opts, factory, callback) {
  if (callback === void 0) {
    return new Promise((resolve2, reject) => {
      stream.call(this, opts, factory, (err, data) => {
        return err ? reject(err) : resolve2(data);
      });
    });
  }
  try {
    this.dispatch(opts, new StreamHandler(opts, factory, callback));
  } catch (err) {
    if (typeof callback !== 'function') {
      throw err;
    }
    const opaque = opts && opts.opaque;
    queueMicrotask(() => callback(err, { opaque }));
  }
}
function pipeline(opts, handler) {
  try {
    const pipelineHandler = new PipelineHandler(opts, handler);
    this.dispatch({ ...opts, body: pipelineHandler.req }, pipelineHandler);
    return pipelineHandler.ret;
  } catch (err) {
    return new PassThrough().destroy(err);
  }
}
function upgrade(opts, callback) {
  if (callback === void 0) {
    return new Promise((resolve2, reject) => {
      upgrade.call(this, opts, (err, data) => {
        return err ? reject(err) : resolve2(data);
      });
    });
  }
  try {
    const upgradeHandler = new UpgradeHandler(opts, callback);
    this.dispatch(
      {
        ...opts,
        method: opts.method || 'GET',
        upgrade: opts.protocol || 'Websocket',
      },
      upgradeHandler
    );
  } catch (err) {
    if (typeof callback !== 'function') {
      throw err;
    }
    const opaque = opts && opts.opaque;
    queueMicrotask(() => callback(err, { opaque }));
  }
}
function connect(opts, callback) {
  if (callback === void 0) {
    return new Promise((resolve2, reject) => {
      connect.call(this, opts, (err, data) => {
        return err ? reject(err) : resolve2(data);
      });
    });
  }
  try {
    const connectHandler = new ConnectHandler(opts, callback);
    this.dispatch({ ...opts, method: 'CONNECT' }, connectHandler);
  } catch (err) {
    if (typeof callback !== 'function') {
      throw err;
    }
    const opaque = opts && opts.opaque;
    queueMicrotask(() => callback(err, { opaque }));
  }
}
function setGlobalDispatcher$1(agent2) {
  if (!agent2 || typeof agent2.dispatch !== 'function') {
    throw new InvalidArgumentError$1('Argument agent must implement Agent');
  }
  Object.defineProperty(globalThis, globalDispatcher, {
    value: agent2,
    writable: true,
    enumerable: false,
    configurable: false,
  });
}
function getGlobalDispatcher$1() {
  return globalThis[globalDispatcher];
}
function requireHeaders() {
  if (hasRequiredHeaders) return headers;
  hasRequiredHeaders = 1;
  const { kHeadersList } = symbols$1;
  const { kGuard } = requireSymbols();
  const { kEnumerableProperty: kEnumerableProperty2 } = util$e;
  const { makeIterator, isValidHeaderName, isValidHeaderValue } = requireUtil();
  const { webidl } = requireWebidl();
  const kHeadersMap = Symbol('headers map');
  const kHeadersSortedMap = Symbol('headers map sorted');
  function headerValueNormalize(potentialValue) {
    return potentialValue.replace(/^[\r\n\t ]+|[\r\n\t ]+$/g, '');
  }
  function fill(headers2, object) {
    if (Array.isArray(object)) {
      for (const header of object) {
        if (header.length !== 2) {
          webidl.errors.exception({
            header: 'Headers constructor',
            message: `expected name/value pair to be length 2, found ${header.length}.`,
          });
        }
        headers2.append(header[0], header[1]);
      }
    } else if (typeof object === 'object' && object !== null) {
      for (const [key2, value] of Object.entries(object)) {
        headers2.append(key2, value);
      }
    } else {
      webidl.errors.conversionFailed({
        prefix: 'Headers constructor',
        argument: 'Argument 1',
        types: ['sequence<sequence<ByteString>>', 'record<ByteString, ByteString>'],
      });
    }
  }
  class HeadersList {
    constructor(init2) {
      if (init2 instanceof HeadersList) {
        this[kHeadersMap] = new Map(init2[kHeadersMap]);
        this[kHeadersSortedMap] = init2[kHeadersSortedMap];
      } else {
        this[kHeadersMap] = new Map(init2);
        this[kHeadersSortedMap] = null;
      }
    }
    contains(name) {
      name = name.toLowerCase();
      return this[kHeadersMap].has(name);
    }
    clear() {
      this[kHeadersMap].clear();
      this[kHeadersSortedMap] = null;
    }
    append(name, value) {
      this[kHeadersSortedMap] = null;
      name = name.toLowerCase();
      const exists = this[kHeadersMap].get(name);
      if (exists) {
        this[kHeadersMap].set(name, `${exists}, ${value}`);
      } else {
        this[kHeadersMap].set(name, `${value}`);
      }
    }
    set(name, value) {
      this[kHeadersSortedMap] = null;
      return this[kHeadersMap].set(name, value);
    }
    delete(name) {
      this[kHeadersSortedMap] = null;
      name = name.toLowerCase();
      return this[kHeadersMap].delete(name);
    }
    get(name) {
      name = name.toLowerCase();
      if (!this.contains(name)) {
        return null;
      }
      return this[kHeadersMap].get(name) ?? null;
    }
    has(name) {
      name = name.toLowerCase();
      return this[kHeadersMap].has(name);
    }
    keys() {
      return this[kHeadersMap].keys();
    }
    values() {
      return this[kHeadersMap].values();
    }
    entries() {
      return this[kHeadersMap].entries();
    }
    [Symbol.iterator]() {
      return this[kHeadersMap][Symbol.iterator]();
    }
  }
  class Headers3 {
    constructor(init2 = void 0) {
      this[kHeadersList] = new HeadersList();
      this[kGuard] = 'none';
      if (init2 !== void 0) {
        init2 = webidl.converters.HeadersInit(init2);
        fill(this, init2);
      }
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
    append(name, value) {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 2) {
        throw new TypeError(
          `Failed to execute 'append' on 'Headers': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.ByteString(name);
      value = webidl.converters.ByteString(value);
      value = headerValueNormalize(value);
      if (!isValidHeaderName(name)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.append',
          value: name,
          type: 'header name',
        });
      } else if (!isValidHeaderValue(value)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.append',
          value,
          type: 'header value',
        });
      }
      if (this[kGuard] === 'immutable') {
        throw new TypeError('immutable');
      } else if (this[kGuard] === 'request-no-cors');
      return this[kHeadersList].append(name, value);
    }
    delete(name) {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'delete' on 'Headers': 1 argument required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.ByteString(name);
      if (!isValidHeaderName(name)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.delete',
          value: name,
          type: 'header name',
        });
      }
      if (this[kGuard] === 'immutable') {
        throw new TypeError('immutable');
      } else if (this[kGuard] === 'request-no-cors');
      if (!this[kHeadersList].contains(name)) {
        return;
      }
      return this[kHeadersList].delete(name);
    }
    get(name) {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'get' on 'Headers': 1 argument required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.ByteString(name);
      if (!isValidHeaderName(name)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.get',
          value: name,
          type: 'header name',
        });
      }
      return this[kHeadersList].get(name);
    }
    has(name) {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'has' on 'Headers': 1 argument required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.ByteString(name);
      if (!isValidHeaderName(name)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.has',
          value: name,
          type: 'header name',
        });
      }
      return this[kHeadersList].contains(name);
    }
    set(name, value) {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 2) {
        throw new TypeError(
          `Failed to execute 'set' on 'Headers': 2 arguments required, but only ${arguments.length} present.`
        );
      }
      name = webidl.converters.ByteString(name);
      value = webidl.converters.ByteString(value);
      value = headerValueNormalize(value);
      if (!isValidHeaderName(name)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.set',
          value: name,
          type: 'header name',
        });
      } else if (!isValidHeaderValue(value)) {
        webidl.errors.invalidArgument({
          prefix: 'Headers.set',
          value,
          type: 'header value',
        });
      }
      if (this[kGuard] === 'immutable') {
        throw new TypeError('immutable');
      } else if (this[kGuard] === 'request-no-cors');
      return this[kHeadersList].set(name, value);
    }
    get [kHeadersSortedMap]() {
      this[kHeadersList][kHeadersSortedMap] ??= new Map(
        [...this[kHeadersList]].sort((a, b) => (a[0] < b[0] ? -1 : 1))
      );
      return this[kHeadersList][kHeadersSortedMap];
    }
    keys() {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      return makeIterator(this[kHeadersSortedMap].keys(), 'Headers');
    }
    values() {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      return makeIterator(this[kHeadersSortedMap].values(), 'Headers');
    }
    entries() {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      return makeIterator(this[kHeadersSortedMap].entries(), 'Headers');
    }
    forEach(callbackFn, thisArg = globalThis) {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'forEach' on 'Headers': 1 argument required, but only ${arguments.length} present.`
        );
      }
      if (typeof callbackFn !== 'function') {
        throw new TypeError(
          "Failed to execute 'forEach' on 'Headers': parameter 1 is not of type 'Function'."
        );
      }
      for (const [key2, value] of this) {
        callbackFn.apply(thisArg, [value, key2, this]);
      }
    }
    [Symbol.for('nodejs.util.inspect.custom')]() {
      if (!(this instanceof Headers3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kHeadersList];
    }
  }
  Headers3.prototype[Symbol.iterator] = Headers3.prototype.entries;
  Object.defineProperties(Headers3.prototype, {
    append: kEnumerableProperty2,
    delete: kEnumerableProperty2,
    get: kEnumerableProperty2,
    has: kEnumerableProperty2,
    set: kEnumerableProperty2,
    keys: kEnumerableProperty2,
    values: kEnumerableProperty2,
    entries: kEnumerableProperty2,
    forEach: kEnumerableProperty2,
  });
  webidl.converters.HeadersInit = function (V) {
    if (webidl.util.Type(V) === 'Object') {
      if (V[Symbol.iterator]) {
        return webidl.converters['sequence<sequence<ByteString>>'](V);
      }
      return webidl.converters['record<ByteString, ByteString>'](V);
    }
    webidl.errors.conversionFailed({
      prefix: 'Headers constructor',
      argument: 'Argument 1',
      types: ['sequence<sequence<ByteString>>', 'record<ByteString, ByteString>'],
    });
  };
  headers = {
    fill,
    Headers: Headers3,
    HeadersList,
  };
  return headers;
}
function requireResponse() {
  if (hasRequiredResponse) return response;
  hasRequiredResponse = 1;
  const { Headers: Headers3, HeadersList, fill } = requireHeaders();
  const { extractBody: extractBody2, cloneBody, mixinBody } = requireBody();
  const util2 = util$e;
  const { kEnumerableProperty: kEnumerableProperty2 } = util2;
  const {
    responseURL,
    isValidReasonPhrase,
    isCancelled,
    isAborted,
    isBlobLike: isBlobLike2,
    serializeJavascriptValueToJSONString,
  } = requireUtil();
  const { redirectStatus, nullBodyStatus, DOMException } = requireConstants$1();
  const { kState, kHeaders, kGuard, kRealm } = requireSymbols();
  const { webidl } = requireWebidl();
  const { FormData } = requireFormdata();
  const { kHeadersList } = symbols$1;
  const assert2 = import_assert.default;
  const { types } = import_util.default;
  const ReadableStream3 = globalThis.ReadableStream || import_web.default.ReadableStream;
  class Response3 {
    static error() {
      const relevantRealm = { settingsObject: {} };
      const responseObject = new Response3();
      responseObject[kState] = makeNetworkError();
      responseObject[kRealm] = relevantRealm;
      responseObject[kHeaders][kHeadersList] = responseObject[kState].headersList;
      responseObject[kHeaders][kGuard] = 'immutable';
      responseObject[kHeaders][kRealm] = relevantRealm;
      return responseObject;
    }
    static json(data, init2 = {}) {
      if (arguments.length === 0) {
        throw new TypeError(
          "Failed to execute 'json' on 'Response': 1 argument required, but 0 present."
        );
      }
      if (init2 !== null) {
        init2 = webidl.converters.ResponseInit(init2);
      }
      const bytes = new TextEncoder('utf-8').encode(serializeJavascriptValueToJSONString(data));
      const body2 = extractBody2(bytes);
      const relevantRealm = { settingsObject: {} };
      const responseObject = new Response3();
      responseObject[kRealm] = relevantRealm;
      responseObject[kHeaders][kGuard] = 'response';
      responseObject[kHeaders][kRealm] = relevantRealm;
      initializeResponse(responseObject, init2, { body: body2[0], type: 'application/json' });
      return responseObject;
    }
    static redirect(url, status = 302) {
      const relevantRealm = { settingsObject: {} };
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to execute 'redirect' on 'Response': 1 argument required, but only ${arguments.length} present.`
        );
      }
      url = webidl.converters.USVString(url);
      status = webidl.converters['unsigned short'](status);
      let parsedURL;
      try {
        parsedURL = new URL(url);
      } catch (err) {
        throw Object.assign(new TypeError('Failed to parse URL from ' + url), {
          cause: err,
        });
      }
      if (!redirectStatus.includes(status)) {
        throw new RangeError('Invalid status code');
      }
      const responseObject = new Response3();
      responseObject[kRealm] = relevantRealm;
      responseObject[kHeaders][kGuard] = 'immutable';
      responseObject[kHeaders][kRealm] = relevantRealm;
      responseObject[kState].status = status;
      const value = parsedURL.toString();
      responseObject[kState].headersList.append('location', value);
      return responseObject;
    }
    constructor(body2 = null, init2 = {}) {
      if (body2 !== null) {
        body2 = webidl.converters.BodyInit(body2);
      }
      init2 = webidl.converters.ResponseInit(init2);
      this[kRealm] = { settingsObject: {} };
      this[kState] = makeResponse({});
      this[kHeaders] = new Headers3();
      this[kHeaders][kGuard] = 'response';
      this[kHeaders][kHeadersList] = this[kState].headersList;
      this[kHeaders][kRealm] = this[kRealm];
      let bodyWithType = null;
      if (body2 != null) {
        const [extractedBody, type] = extractBody2(body2);
        bodyWithType = { body: extractedBody, type };
      }
      initializeResponse(this, init2, bodyWithType);
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
    get type() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].type;
    }
    get url() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      let url = responseURL(this[kState]);
      if (url == null) {
        return '';
      }
      if (url.hash) {
        url = new URL(url);
        url.hash = '';
      }
      return url.toString();
    }
    get redirected() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].urlList.length > 1;
    }
    get status() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].status;
    }
    get ok() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].status >= 200 && this[kState].status <= 299;
    }
    get statusText() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].statusText;
    }
    get headers() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kHeaders];
    }
    clone() {
      if (!(this instanceof Response3)) {
        throw new TypeError('Illegal invocation');
      }
      if (this.bodyUsed || (this.body && this.body.locked)) {
        webidl.errors.exception({
          header: 'Response.clone',
          message: 'Body has already been consumed.',
        });
      }
      const clonedResponse = cloneResponse(this[kState]);
      const clonedResponseObject = new Response3();
      clonedResponseObject[kState] = clonedResponse;
      clonedResponseObject[kRealm] = this[kRealm];
      clonedResponseObject[kHeaders][kHeadersList] = clonedResponse.headersList;
      clonedResponseObject[kHeaders][kGuard] = this[kHeaders][kGuard];
      clonedResponseObject[kHeaders][kRealm] = this[kHeaders][kRealm];
      return clonedResponseObject;
    }
  }
  mixinBody(Response3);
  Object.defineProperties(Response3.prototype, {
    type: kEnumerableProperty2,
    url: kEnumerableProperty2,
    status: kEnumerableProperty2,
    ok: kEnumerableProperty2,
    redirected: kEnumerableProperty2,
    statusText: kEnumerableProperty2,
    headers: kEnumerableProperty2,
    clone: kEnumerableProperty2,
  });
  function cloneResponse(response2) {
    if (response2.internalResponse) {
      return filterResponse(cloneResponse(response2.internalResponse), response2.type);
    }
    const newResponse = makeResponse({ ...response2, body: null });
    if (response2.body != null) {
      newResponse.body = cloneBody(response2.body);
    }
    return newResponse;
  }
  function makeResponse(init2) {
    return {
      aborted: false,
      rangeRequested: false,
      timingAllowPassed: false,
      requestIncludesCredentials: false,
      type: 'default',
      status: 200,
      timingInfo: null,
      cacheState: '',
      statusText: '',
      ...init2,
      headersList: init2.headersList ? new HeadersList(init2.headersList) : new HeadersList(),
      urlList: init2.urlList ? [...init2.urlList] : [],
    };
  }
  function makeNetworkError(reason) {
    return makeResponse({
      type: 'error',
      status: 0,
      error:
        reason instanceof Error
          ? reason
          : new Error(reason ? String(reason) : reason, {
              cause: reason instanceof Error ? reason : void 0,
            }),
      aborted: reason && reason.name === 'AbortError',
    });
  }
  function makeFilteredResponse(response2, state) {
    state = {
      internalResponse: response2,
      ...state,
    };
    return new Proxy(response2, {
      get(target, p) {
        return p in state ? state[p] : target[p];
      },
      set(target, p, value) {
        assert2(!(p in state));
        target[p] = value;
        return true;
      },
    });
  }
  function filterResponse(response2, type) {
    if (type === 'basic') {
      return makeFilteredResponse(response2, {
        type: 'basic',
        headersList: response2.headersList,
      });
    } else if (type === 'cors') {
      return makeFilteredResponse(response2, {
        type: 'cors',
        headersList: response2.headersList,
      });
    } else if (type === 'opaque') {
      return makeFilteredResponse(response2, {
        type: 'opaque',
        urlList: Object.freeze([]),
        status: 0,
        statusText: '',
        body: null,
      });
    } else if (type === 'opaqueredirect') {
      return makeFilteredResponse(response2, {
        type: 'opaqueredirect',
        status: 0,
        statusText: '',
        headersList: [],
        body: null,
      });
    } else {
      assert2(false);
    }
  }
  function makeAppropriateNetworkError(fetchParams) {
    assert2(isCancelled(fetchParams));
    return isAborted(fetchParams)
      ? makeNetworkError(new DOMException('The operation was aborted.', 'AbortError'))
      : makeNetworkError(fetchParams.controller.terminated.reason);
  }
  function initializeResponse(response2, init2, body2) {
    if (init2.status !== null && (init2.status < 200 || init2.status > 599)) {
      throw new RangeError('init["status"] must be in the range of 200 to 599, inclusive.');
    }
    if ('statusText' in init2 && init2.statusText != null) {
      if (!isValidReasonPhrase(String(init2.statusText))) {
        throw new TypeError('Invalid statusText');
      }
    }
    if ('status' in init2 && init2.status != null) {
      response2[kState].status = init2.status;
    }
    if ('statusText' in init2 && init2.statusText != null) {
      response2[kState].statusText = init2.statusText;
    }
    if ('headers' in init2 && init2.headers != null) {
      fill(response2[kState].headersList, init2.headers);
    }
    if (body2) {
      if (nullBodyStatus.includes(response2.status)) {
        webidl.errors.exception({
          header: 'Response constructor',
          message: 'Invalid response status code.',
        });
      }
      response2[kState].body = body2.body;
      if (body2.type != null && !response2[kState].headersList.has('Content-Type')) {
        response2[kState].headersList.append('content-type', body2.type);
      }
    }
  }
  webidl.converters.ReadableStream = webidl.interfaceConverter(ReadableStream3);
  webidl.converters.FormData = webidl.interfaceConverter(FormData);
  webidl.converters.URLSearchParams = webidl.interfaceConverter(URLSearchParams);
  webidl.converters.XMLHttpRequestBodyInit = function (V) {
    if (typeof V === 'string') {
      return webidl.converters.USVString(V);
    }
    if (isBlobLike2(V)) {
      return webidl.converters.Blob(V);
    }
    if (types.isAnyArrayBuffer(V) || types.isTypedArray(V) || types.isDataView(V)) {
      return webidl.converters.BufferSource(V);
    }
    if (V instanceof FormData) {
      return webidl.converters.FormData(V);
    }
    if (V instanceof URLSearchParams) {
      return webidl.converters.URLSearchParams(V);
    }
    return webidl.converters.DOMString(V);
  };
  webidl.converters.BodyInit = function (V) {
    if (V instanceof ReadableStream3) {
      return webidl.converters.ReadableStream(V);
    }
    if (V == null ? void 0 : V[Symbol.asyncIterator]) {
      return V;
    }
    return webidl.converters.XMLHttpRequestBodyInit(V);
  };
  webidl.converters.ResponseInit = webidl.dictionaryConverter([
    {
      key: 'status',
      converter: webidl.converters['unsigned short'],
      defaultValue: 200,
    },
    {
      key: 'statusText',
      converter: webidl.converters.ByteString,
      defaultValue: '',
    },
    {
      key: 'headers',
      converter: webidl.converters.HeadersInit,
    },
  ]);
  response = {
    makeNetworkError,
    makeResponse,
    makeAppropriateNetworkError,
    filterResponse,
    Response: Response3,
  };
  return response;
}
function requireRequest() {
  if (hasRequiredRequest) return request;
  hasRequiredRequest = 1;
  const { extractBody: extractBody2, mixinBody, cloneBody } = requireBody();
  const { Headers: Headers3, fill: fillHeaders, HeadersList } = requireHeaders();
  const util2 = util$e;
  const { isValidHTTPToken, sameOrigin, normalizeMethod } = requireUtil();
  const {
    forbiddenMethods,
    corsSafeListedMethods,
    referrerPolicy,
    requestRedirect,
    requestMode,
    requestCredentials,
    requestCache,
  } = requireConstants$1();
  const { kEnumerableProperty: kEnumerableProperty2 } = util2;
  const { kHeaders, kSignal: kSignal2, kState, kGuard, kRealm } = requireSymbols();
  const { webidl } = requireWebidl();
  const { kHeadersList } = symbols$1;
  const assert2 = import_assert.default;
  let TransformStream2;
  const kInit = Symbol('init');
  const requestFinalizer = new FinalizationRegistry(({ signal, abort: abort2 }) => {
    signal.removeEventListener('abort', abort2);
  });
  class Request3 {
    constructor(input, init2 = {}) {
      var _a, _b;
      if (input === kInit) {
        return;
      }
      if (arguments.length < 1) {
        throw new TypeError(
          `Failed to construct 'Request': 1 argument required, but only ${arguments.length} present.`
        );
      }
      input = webidl.converters.RequestInfo(input);
      init2 = webidl.converters.RequestInit(init2);
      this[kRealm] = { settingsObject: {} };
      let request2 = null;
      let fallbackMode = null;
      const baseUrl = this[kRealm].settingsObject.baseUrl;
      let signal = null;
      if (typeof input === 'string') {
        let parsedURL;
        try {
          parsedURL = new URL(input, baseUrl);
        } catch (err) {
          throw new TypeError('Failed to parse URL from ' + input, { cause: err });
        }
        if (parsedURL.username || parsedURL.password) {
          throw new TypeError(
            'Request cannot be constructed from a URL that includes credentials: ' + input
          );
        }
        request2 = makeRequest({ urlList: [parsedURL] });
        fallbackMode = 'cors';
      } else {
        assert2(input instanceof Request3);
        request2 = input[kState];
        signal = input[kSignal2];
      }
      const origin = this[kRealm].settingsObject.origin;
      let window2 = 'client';
      if (
        ((_b = (_a = request2.window) == null ? void 0 : _a.constructor) == null
          ? void 0
          : _b.name) === 'EnvironmentSettingsObject' &&
        sameOrigin(request2.window, origin)
      ) {
        window2 = request2.window;
      }
      if (init2.window !== void 0 && init2.window != null) {
        throw new TypeError(`'window' option '${window2}' must be null`);
      }
      if (init2.window !== void 0) {
        window2 = 'no-window';
      }
      request2 = makeRequest({
        method: request2.method,
        headersList: request2.headersList,
        unsafeRequest: request2.unsafeRequest,
        client: this[kRealm].settingsObject,
        window: window2,
        priority: request2.priority,
        origin: request2.origin,
        referrer: request2.referrer,
        referrerPolicy: request2.referrerPolicy,
        mode: request2.mode,
        credentials: request2.credentials,
        cache: request2.cache,
        redirect: request2.redirect,
        integrity: request2.integrity,
        keepalive: request2.keepalive,
        reloadNavigation: request2.reloadNavigation,
        historyNavigation: request2.historyNavigation,
        urlList: [...request2.urlList],
      });
      if (Object.keys(init2).length > 0) {
        if (request2.mode === 'navigate') {
          request2.mode = 'same-origin';
        }
        request2.reloadNavigation = false;
        request2.historyNavigation = false;
        request2.origin = 'client';
        request2.referrer = 'client';
        request2.referrerPolicy = '';
        request2.url = request2.urlList[request2.urlList.length - 1];
        request2.urlList = [request2.url];
      }
      if (init2.referrer !== void 0) {
        const referrer = init2.referrer;
        if (referrer === '') {
          request2.referrer = 'no-referrer';
        } else {
          let parsedReferrer;
          try {
            parsedReferrer = new URL(referrer, baseUrl);
          } catch (err) {
            throw new TypeError(`Referrer "${referrer}" is not a valid URL.`, { cause: err });
          }
          request2.referrer = parsedReferrer;
        }
      }
      if (init2.referrerPolicy !== void 0) {
        request2.referrerPolicy = init2.referrerPolicy;
        if (!referrerPolicy.includes(request2.referrerPolicy)) {
          throw new TypeError(
            `Failed to construct 'Request': The provided value '${request2.referrerPolicy}' is not a valid enum value of type ReferrerPolicy.`
          );
        }
      }
      let mode;
      if (init2.mode !== void 0) {
        mode = init2.mode;
        if (!requestMode.includes(mode)) {
          throw new TypeError(
            `Failed to construct 'Request': The provided value '${request2.mode}' is not a valid enum value of type RequestMode.`
          );
        }
      } else {
        mode = fallbackMode;
      }
      if (mode === 'navigate') {
        webidl.errors.exception({
          header: 'Request constructor',
          message: 'invalid request mode navigate.',
        });
      }
      if (mode != null) {
        request2.mode = mode;
      }
      if (init2.credentials !== void 0) {
        request2.credentials = init2.credentials;
        if (!requestCredentials.includes(request2.credentials)) {
          throw new TypeError(
            `Failed to construct 'Request': The provided value '${request2.credentials}' is not a valid enum value of type RequestCredentials.`
          );
        }
      }
      if (init2.cache !== void 0) {
        request2.cache = init2.cache;
        if (!requestCache.includes(request2.cache)) {
          throw new TypeError(
            `Failed to construct 'Request': The provided value '${request2.cache}' is not a valid enum value of type RequestCache.`
          );
        }
      }
      if (request2.cache === 'only-if-cached' && request2.mode !== 'same-origin') {
        throw new TypeError("'only-if-cached' can be set only with 'same-origin' mode");
      }
      if (init2.redirect !== void 0) {
        request2.redirect = init2.redirect;
        if (!requestRedirect.includes(request2.redirect)) {
          throw new TypeError(
            `Failed to construct 'Request': The provided value '${request2.redirect}' is not a valid enum value of type RequestRedirect.`
          );
        }
      }
      if (init2.integrity !== void 0 && init2.integrity != null) {
        request2.integrity = String(init2.integrity);
      }
      if (init2.keepalive !== void 0) {
        request2.keepalive = Boolean(init2.keepalive);
      }
      if (init2.method !== void 0) {
        let method = init2.method;
        if (!isValidHTTPToken(init2.method)) {
          throw TypeError(`'${init2.method}' is not a valid HTTP method.`);
        }
        if (forbiddenMethods.indexOf(method.toUpperCase()) !== -1) {
          throw TypeError(`'${init2.method}' HTTP method is unsupported.`);
        }
        method = normalizeMethod(init2.method);
        request2.method = method;
      }
      if (init2.signal !== void 0) {
        signal = init2.signal;
      }
      this[kState] = request2;
      const ac = new AbortController();
      this[kSignal2] = ac.signal;
      this[kSignal2][kRealm] = this[kRealm];
      if (signal != null) {
        if (
          !signal ||
          typeof signal.aborted !== 'boolean' ||
          typeof signal.addEventListener !== 'function'
        ) {
          throw new TypeError(
            "Failed to construct 'Request': member signal is not of type AbortSignal."
          );
        }
        if (signal.aborted) {
          ac.abort();
        } else {
          const abort2 = () => ac.abort();
          signal.addEventListener('abort', abort2, { once: true });
          requestFinalizer.register(this, { signal, abort: abort2 });
        }
      }
      this[kHeaders] = new Headers3();
      this[kHeaders][kHeadersList] = request2.headersList;
      this[kHeaders][kGuard] = 'request';
      this[kHeaders][kRealm] = this[kRealm];
      if (mode === 'no-cors') {
        if (!corsSafeListedMethods.includes(request2.method)) {
          throw new TypeError(`'${request2.method} is unsupported in no-cors mode.`);
        }
        this[kHeaders][kGuard] = 'request-no-cors';
      }
      if (Object.keys(init2).length !== 0) {
        let headers2 = new Headers3(this[kHeaders]);
        if (init2.headers !== void 0) {
          headers2 = init2.headers;
        }
        this[kHeaders][kHeadersList].clear();
        if (headers2.constructor.name === 'Headers') {
          for (const [key2, val] of headers2) {
            this[kHeaders].append(key2, val);
          }
        } else {
          fillHeaders(this[kHeaders], headers2);
        }
      }
      const inputBody = input instanceof Request3 ? input[kState].body : null;
      if (
        ((init2.body !== void 0 && init2.body != null) || inputBody != null) &&
        (request2.method === 'GET' || request2.method === 'HEAD')
      ) {
        throw new TypeError('Request with GET/HEAD method cannot have body.');
      }
      let initBody = null;
      if (init2.body !== void 0 && init2.body != null) {
        const [extractedBody, contentType] = extractBody2(init2.body, request2.keepalive);
        initBody = extractedBody;
        if (contentType && !this[kHeaders].has('content-type')) {
          this[kHeaders].append('content-type', contentType);
        }
      }
      const inputOrInitBody = initBody ?? inputBody;
      if (inputOrInitBody != null && inputOrInitBody.source == null) {
        if (request2.mode !== 'same-origin' && request2.mode !== 'cors') {
          throw new TypeError(
            'If request is made from ReadableStream, mode should be "same-origin" or "cors"'
          );
        }
        request2.useCORSPreflightFlag = true;
      }
      let finalBody = inputOrInitBody;
      if (initBody == null && inputBody != null) {
        if (util2.isDisturbed(inputBody.stream) || inputBody.stream.locked) {
          throw new TypeError(
            'Cannot construct a Request with a Request object that has already been used.'
          );
        }
        if (!TransformStream2) {
          TransformStream2 = import_web.default.TransformStream;
        }
        const identityTransform = new TransformStream2();
        inputBody.stream.pipeThrough(identityTransform);
        finalBody = {
          source: inputBody.source,
          length: inputBody.length,
          stream: identityTransform.readable,
        };
      }
      this[kState].body = finalBody;
    }
    get [Symbol.toStringTag]() {
      return this.constructor.name;
    }
    get method() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].method;
    }
    get url() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].url.toString();
    }
    get headers() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kHeaders];
    }
    get destination() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].destination;
    }
    get referrer() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      if (this[kState].referrer === 'no-referrer') {
        return '';
      }
      if (this[kState].referrer === 'client') {
        return 'about:client';
      }
      return this[kState].referrer.toString();
    }
    get referrerPolicy() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].referrerPolicy;
    }
    get mode() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].mode;
    }
    get credentials() {
      return this[kState].credentials;
    }
    get cache() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].cache;
    }
    get redirect() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].redirect;
    }
    get integrity() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].integrity;
    }
    get keepalive() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].keepalive;
    }
    get isReloadNavigation() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].reloadNavigation;
    }
    get isHistoryNavigation() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kState].historyNavigation;
    }
    get signal() {
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      return this[kSignal2];
    }
    clone() {
      var _a;
      if (!(this instanceof Request3)) {
        throw new TypeError('Illegal invocation');
      }
      if (this.bodyUsed || ((_a = this.body) == null ? void 0 : _a.locked)) {
        throw new TypeError('unusable');
      }
      const clonedRequest = cloneRequest(this[kState]);
      const clonedRequestObject = new Request3(kInit);
      clonedRequestObject[kState] = clonedRequest;
      clonedRequestObject[kRealm] = this[kRealm];
      clonedRequestObject[kHeaders] = new Headers3();
      clonedRequestObject[kHeaders][kHeadersList] = clonedRequest.headersList;
      clonedRequestObject[kHeaders][kGuard] = this[kHeaders][kGuard];
      clonedRequestObject[kHeaders][kRealm] = this[kHeaders][kRealm];
      const ac = new AbortController();
      if (this.signal.aborted) {
        ac.abort();
      } else {
        this.signal.addEventListener(
          'abort',
          function () {
            ac.abort();
          },
          { once: true }
        );
      }
      clonedRequestObject[kSignal2] = ac.signal;
      return clonedRequestObject;
    }
  }
  mixinBody(Request3);
  function makeRequest(init2) {
    const request2 = {
      method: 'GET',
      localURLsOnly: false,
      unsafeRequest: false,
      body: null,
      client: null,
      reservedClient: null,
      replacesClientId: '',
      window: 'client',
      keepalive: false,
      serviceWorkers: 'all',
      initiator: '',
      destination: '',
      priority: null,
      origin: 'client',
      policyContainer: 'client',
      referrer: 'client',
      referrerPolicy: '',
      mode: 'no-cors',
      useCORSPreflightFlag: false,
      credentials: 'same-origin',
      useCredentials: false,
      cache: 'default',
      redirect: 'follow',
      integrity: '',
      cryptoGraphicsNonceMetadata: '',
      parserMetadata: '',
      reloadNavigation: false,
      historyNavigation: false,
      userActivation: false,
      taintedOrigin: false,
      redirectCount: 0,
      responseTainting: 'basic',
      preventNoCacheCacheControlHeaderModification: false,
      done: false,
      timingAllowFailed: false,
      ...init2,
      headersList: init2.headersList ? new HeadersList(init2.headersList) : new HeadersList(),
    };
    request2.url = request2.urlList[0];
    return request2;
  }
  function cloneRequest(request2) {
    const newRequest = makeRequest({ ...request2, body: null });
    if (request2.body != null) {
      newRequest.body = cloneBody(request2.body);
    }
    return newRequest;
  }
  Object.defineProperties(Request3.prototype, {
    method: kEnumerableProperty2,
    url: kEnumerableProperty2,
    headers: kEnumerableProperty2,
    redirect: kEnumerableProperty2,
    clone: kEnumerableProperty2,
    signal: kEnumerableProperty2,
  });
  webidl.converters.Request = webidl.interfaceConverter(Request3);
  webidl.converters.RequestInfo = function (V) {
    if (typeof V === 'string') {
      return webidl.converters.USVString(V);
    }
    if (V instanceof Request3) {
      return webidl.converters.Request(V);
    }
    return webidl.converters.USVString(V);
  };
  webidl.converters.AbortSignal = webidl.interfaceConverter(AbortSignal);
  webidl.converters.RequestInit = webidl.dictionaryConverter([
    {
      key: 'method',
      converter: webidl.converters.ByteString,
    },
    {
      key: 'headers',
      converter: webidl.converters.HeadersInit,
    },
    {
      key: 'body',
      converter: webidl.nullableConverter(webidl.converters.BodyInit),
    },
    {
      key: 'referrer',
      converter: webidl.converters.USVString,
    },
    {
      key: 'referrerPolicy',
      converter: webidl.converters.DOMString,
      allowedValues: [
        '',
        'no-referrer',
        'no-referrer-when-downgrade',
        'same-origin',
        'origin',
        'strict-origin',
        'origin-when-cross-origin',
        'strict-origin-when-cross-origin',
        'unsafe-url',
      ],
    },
    {
      key: 'mode',
      converter: webidl.converters.DOMString,
      allowedValues: ['same-origin', 'cors', 'no-cors', 'navigate', 'websocket'],
    },
    {
      key: 'credentials',
      converter: webidl.converters.DOMString,
      allowedValues: ['omit', 'same-origin', 'include'],
    },
    {
      key: 'cache',
      converter: webidl.converters.DOMString,
      allowedValues: ['default', 'no-store', 'reload', 'no-cache', 'force-cache', 'only-if-cached'],
    },
    {
      key: 'redirect',
      converter: webidl.converters.DOMString,
      allowedValues: ['follow', 'error', 'manual'],
    },
    {
      key: 'integrity',
      converter: webidl.converters.DOMString,
    },
    {
      key: 'keepalive',
      converter: webidl.converters.boolean,
    },
    {
      key: 'signal',
      converter: webidl.nullableConverter(webidl.converters.AbortSignal),
    },
    {
      key: 'window',
      converter: webidl.converters.any,
    },
  ]);
  request = { Request: Request3, makeRequest };
  return request;
}
function requireDataURL() {
  if (hasRequiredDataURL) return dataURL;
  hasRequiredDataURL = 1;
  const assert2 = import_assert.default;
  const { atob: atob2 } = import_buffer.default;
  const encoder2 = new TextEncoder();
  function dataURLProcessor(dataURL2) {
    assert2(dataURL2.protocol === 'data:');
    let input = URLSerializer(dataURL2, true);
    input = input.slice(5);
    const position = { position: 0 };
    let mimeType = collectASequenceOfCodePoints((char) => char !== ',', input, position);
    const mimeTypeLength = mimeType.length;
    mimeType = mimeType.replace(/^(\u0020)+|(\u0020)+$/g, '');
    if (position.position >= input.length) {
      return 'failure';
    }
    position.position++;
    const encodedBody = input.slice(mimeTypeLength + 1);
    let body2 = stringPercentDecode(encodedBody);
    if (/;(\u0020){0,}base64$/i.test(mimeType)) {
      const stringBody = decodeURIComponent(new TextDecoder('utf-8').decode(body2));
      body2 = forgivingBase64(stringBody);
      if (body2 === 'failure') {
        return 'failure';
      }
      mimeType = mimeType.slice(0, -6);
      mimeType = mimeType.replace(/(\u0020)+$/, '');
      mimeType = mimeType.slice(0, -1);
    }
    if (mimeType.startsWith(';')) {
      mimeType = 'text/plain' + mimeType;
    }
    let mimeTypeRecord = parseMIMEType(mimeType);
    if (mimeTypeRecord === 'failure') {
      mimeTypeRecord = parseMIMEType('text/plain;charset=US-ASCII');
    }
    return { mimeType: mimeTypeRecord, body: body2 };
  }
  function URLSerializer(url, excludeFragment = false) {
    let output = url.protocol;
    if (url.host.length > 0) {
      output += '//';
      if (url.username.length > 0 || url.password.length > 0) {
        output += url.username;
        if (url.password.length > 0) {
          output += ':' + url.password;
        }
        output += '@';
      }
      output += decodeURIComponent(url.host);
      if (url.port.length > 0) {
        output += ':' + url.port;
      }
    }
    if (
      url.host.length === 0 &&
      url.pathname.length > 1 &&
      url.href.slice(url.protocol.length + 1)[0] === '.'
    ) {
      output += '/.';
    }
    output += url.pathname;
    if (url.search.length > 0) {
      output += url.search;
    }
    if (excludeFragment === false && url.hash.length > 0) {
      output += url.hash;
    }
    return output;
  }
  function collectASequenceOfCodePoints(condition, input, position) {
    let result = '';
    while (position.position < input.length && condition(input[position.position])) {
      result += input[position.position];
      position.position++;
    }
    return result;
  }
  function stringPercentDecode(input) {
    const bytes = encoder2.encode(input);
    return percentDecode(bytes);
  }
  function percentDecode(input) {
    const output = [];
    for (let i = 0; i < input.length; i++) {
      const byte = input[i];
      if (byte !== 37) {
        output.push(byte);
      } else if (
        byte === 37 &&
        !/^[0-9A-Fa-f]{2}$/i.test(String.fromCharCode(input[i + 1], input[i + 2]))
      ) {
        output.push(37);
      } else {
        const nextTwoBytes = String.fromCharCode(input[i + 1], input[i + 2]);
        const bytePoint = Number.parseInt(nextTwoBytes, 16);
        output.push(bytePoint);
        i += 2;
      }
    }
    return Uint8Array.of(...output);
  }
  function parseMIMEType(input) {
    input = input.trim();
    const position = { position: 0 };
    const type = collectASequenceOfCodePoints((char) => char !== '/', input, position);
    if (type.length === 0 || !/^[!#$%&'*+-.^_|~A-z0-9]+$/.test(type)) {
      return 'failure';
    }
    if (position.position > input.length) {
      return 'failure';
    }
    position.position++;
    let subtype = collectASequenceOfCodePoints((char) => char !== ';', input, position);
    subtype = subtype.trim();
    if (subtype.length === 0 || !/^[!#$%&'*+-.^_|~A-z0-9]+$/.test(subtype)) {
      return 'failure';
    }
    const mimeType = {
      type: type.toLowerCase(),
      subtype: subtype.toLowerCase(),
      parameters: /* @__PURE__ */ new Map(),
    };
    while (position.position < input.length) {
      position.position++;
      collectASequenceOfCodePoints(
        (char) => /(\u000A|\u000D|\u0009|\u0020)/.test(char),
        input,
        position
      );
      let parameterName = collectASequenceOfCodePoints(
        (char) => char !== ';' && char !== '=',
        input,
        position
      );
      parameterName = parameterName.toLowerCase();
      if (position.position < input.length) {
        if (input[position.position] === ';') {
          continue;
        }
        position.position++;
      }
      if (position.position > input.length) {
        break;
      }
      let parameterValue = null;
      if (input[position.position] === '"') {
        parameterValue = collectAnHTTPQuotedString(input, position);
        collectASequenceOfCodePoints((char) => char !== ';', input, position);
      } else {
        parameterValue = collectASequenceOfCodePoints((char) => char !== ';', input, position);
        parameterValue = parameterValue.trim();
        if (parameterValue.length === 0) {
          continue;
        }
      }
      if (
        parameterName.length !== 0 &&
        /^[!#$%&'*+-.^_|~A-z0-9]+$/.test(parameterName) &&
        !/^(\u0009|\x{0020}-\x{007E}|\x{0080}-\x{00FF})+$/.test(parameterValue) &&
        !mimeType.parameters.has(parameterName)
      ) {
        mimeType.parameters.set(parameterName, parameterValue);
      }
    }
    return mimeType;
  }
  function forgivingBase64(data) {
    data = data.replace(/[\u0009\u000A\u000C\u000D\u0020]/g, '');
    if (data.length % 4 === 0) {
      data = data.replace(/=?=$/, '');
    }
    if (data.length % 4 === 1) {
      return 'failure';
    }
    if (/[^+/0-9A-Za-z]/.test(data)) {
      return 'failure';
    }
    const binary = atob2(data);
    const bytes = new Uint8Array(binary.length);
    for (let byte = 0; byte < binary.length; byte++) {
      bytes[byte] = binary.charCodeAt(byte);
    }
    return bytes;
  }
  function collectAnHTTPQuotedString(input, position, extractValue) {
    const positionStart = position.position;
    let value = '';
    assert2(input[position.position] === '"');
    position.position++;
    while (true) {
      value += collectASequenceOfCodePoints(
        (char) => char !== '"' && char !== '\\',
        input,
        position
      );
      if (position.position >= input.length) {
        break;
      }
      const quoteOrBackslash = input[position.position];
      position.position++;
      if (quoteOrBackslash === '\\') {
        if (position.position >= input.length) {
          value += '\\';
          break;
        }
        value += input[position.position];
        position.position++;
      } else {
        assert2(quoteOrBackslash === '"');
        break;
      }
    }
    if (extractValue) {
      return value;
    }
    return input.slice(positionStart, position.position);
  }
  dataURL = {
    dataURLProcessor,
    URLSerializer,
    collectASequenceOfCodePoints,
    stringPercentDecode,
    parseMIMEType,
    collectAnHTTPQuotedString,
  };
  return dataURL;
}
function requireFetch() {
  if (hasRequiredFetch) return fetch_1;
  hasRequiredFetch = 1;
  const {
    Response: Response3,
    makeNetworkError,
    makeAppropriateNetworkError,
    filterResponse,
    makeResponse,
  } = requireResponse();
  const { Headers: Headers3 } = requireHeaders();
  const { Request: Request3, makeRequest } = requireRequest();
  const zlib = import_zlib.default;
  const {
    matchRequestIntegrity,
    makePolicyContainer,
    clonePolicyContainer,
    requestBadPort,
    TAOCheck,
    appendRequestOriginHeader,
    responseLocationURL,
    requestCurrentURL,
    setRequestReferrerPolicyOnRedirect,
    tryUpgradeRequestToAPotentiallyTrustworthyURL,
    createOpaqueTimingInfo,
    appendFetchMetadata,
    corsCheck,
    crossOriginResourcePolicyCheck,
    determineRequestsReferrer,
    coarsenedSharedCurrentTime,
    createDeferredPromise,
    isBlobLike: isBlobLike2,
    sameOrigin,
    isCancelled,
    isAborted,
  } = requireUtil();
  const { kState, kHeaders, kGuard, kRealm } = requireSymbols();
  const assert2 = import_assert.default;
  const { safelyExtractBody, extractBody: extractBody2 } = requireBody();
  const {
    redirectStatus,
    nullBodyStatus,
    safeMethods,
    requestBodyHeader,
    subresource,
    DOMException,
  } = requireConstants$1();
  const { kHeadersList } = symbols$1;
  const EE2 = import_events.default;
  const { Readable: Readable2, pipeline: pipeline2 } = import_stream.default;
  const { isErrored: isErrored2, isReadable: isReadable2 } = util$e;
  const { dataURLProcessor } = requireDataURL();
  const { TransformStream: TransformStream2 } = import_web.default;
  let resolveObjectURL;
  let ReadableStream3;
  const nodeVersion2 = process.versions.node.split('.');
  const nodeMajor2 = Number(nodeVersion2[0]);
  const nodeMinor2 = Number(nodeVersion2[1]);
  class Fetch extends EE2 {
    constructor(dispatcher2) {
      super();
      this.dispatcher = dispatcher2;
      this.connection = null;
      this.dump = false;
      this.state = 'ongoing';
    }
    terminate(reason) {
      var _a;
      if (this.state !== 'ongoing') {
        return;
      }
      this.state = 'terminated';
      (_a = this.connection) == null ? void 0 : _a.destroy(reason);
      this.emit('terminated', reason);
    }
    abort() {
      var _a;
      if (this.state !== 'ongoing') {
        return;
      }
      const reason = new DOMException('The operation was aborted.', 'AbortError');
      this.state = 'aborted';
      (_a = this.connection) == null ? void 0 : _a.destroy(reason);
      this.emit('terminated', reason);
    }
  }
  async function fetch3(input, init2 = {}) {
    var _a;
    if (arguments.length < 1) {
      throw new TypeError(
        `Failed to execute 'fetch' on 'Window': 1 argument required, but only ${arguments.length} present.`
      );
    }
    const p = createDeferredPromise();
    let requestObject;
    try {
      requestObject = new Request3(input, init2);
    } catch (e) {
      p.reject(e);
      return p.promise;
    }
    const request2 = requestObject[kState];
    if (requestObject.signal.aborted) {
      abortFetch(p, request2, null);
      return p.promise;
    }
    const globalObject = request2.client.globalObject;
    if (
      ((_a = globalObject == null ? void 0 : globalObject.constructor) == null
        ? void 0
        : _a.name) === 'ServiceWorkerGlobalScope'
    ) {
      request2.serviceWorkers = 'none';
    }
    let responseObject = null;
    const relevantRealm = null;
    let locallyAborted = false;
    let controller = null;
    requestObject.signal.addEventListener(
      'abort',
      () => {
        locallyAborted = true;
        abortFetch(p, request2, responseObject);
        if (controller != null) {
          controller.abort();
        }
      },
      { once: true }
    );
    const handleFetchDone = (response2) => finalizeAndReportTiming(response2, 'fetch');
    const processResponse = (response2) => {
      if (locallyAborted) {
        return;
      }
      if (response2.aborted) {
        abortFetch(p, request2, responseObject);
        return;
      }
      if (response2.type === 'error') {
        p.reject(Object.assign(new TypeError('fetch failed'), { cause: response2.error }));
        return;
      }
      responseObject = new Response3();
      responseObject[kState] = response2;
      responseObject[kRealm] = relevantRealm;
      responseObject[kHeaders][kHeadersList] = response2.headersList;
      responseObject[kHeaders][kGuard] = 'immutable';
      responseObject[kHeaders][kRealm] = relevantRealm;
      p.resolve(responseObject);
    };
    controller = fetching({
      request: request2,
      processResponseEndOfBody: handleFetchDone,
      processResponse,
      dispatcher: this,
    });
    return p.promise;
  }
  function finalizeAndReportTiming(response2, initiatorType = 'other') {
    var _a;
    if (response2.type === 'error' && response2.aborted) {
      return;
    }
    if (!((_a = response2.urlList) == null ? void 0 : _a.length)) {
      return;
    }
    const originalURL = response2.urlList[0];
    let timingInfo = response2.timingInfo;
    let cacheState = response2.cacheState;
    if (!/^https?:/.test(originalURL.protocol)) {
      return;
    }
    if (timingInfo === null) {
      return;
    }
    if (!timingInfo.timingAllowPassed) {
      timingInfo = createOpaqueTimingInfo({
        startTime: timingInfo.startTime,
      });
      cacheState = '';
    }
    response2.timingInfo.endTime = coarsenedSharedCurrentTime();
    response2.timingInfo = timingInfo;
    markResourceTiming(timingInfo, originalURL, initiatorType, globalThis, cacheState);
  }
  function markResourceTiming(timingInfo, originalURL, initiatorType, globalThis2, cacheState) {
    if (nodeMajor2 >= 18 && nodeMinor2 >= 2) {
      performance.markResourceTiming(
        timingInfo,
        originalURL,
        initiatorType,
        globalThis2,
        cacheState
      );
    }
  }
  function abortFetch(p, request2, responseObject) {
    var _a, _b;
    const error2 = new DOMException('The operation was aborted.', 'AbortError');
    p.reject(error2);
    if (request2.body != null && isReadable2((_a = request2.body) == null ? void 0 : _a.stream)) {
      request2.body.stream.cancel(error2).catch((err) => {
        if (err.code === 'ERR_INVALID_STATE') {
          return;
        }
        throw err;
      });
    }
    if (responseObject == null) {
      return;
    }
    const response2 = responseObject[kState];
    if (response2.body != null && isReadable2((_b = response2.body) == null ? void 0 : _b.stream)) {
      response2.body.stream.cancel(error2).catch((err) => {
        if (err.code === 'ERR_INVALID_STATE') {
          return;
        }
        throw err;
      });
    }
  }
  function fetching({
    request: request2,
    processRequestBodyChunkLength,
    processRequestEndOfBody,
    processResponse,
    processResponseEndOfBody,
    processResponseConsumeBody,
    useParallelQueue = false,
    dispatcher: dispatcher2,
  }) {
    var _a, _b, _c, _d;
    let taskDestination = null;
    let crossOriginIsolatedCapability = false;
    if (request2.client != null) {
      taskDestination = request2.client.globalObject;
      crossOriginIsolatedCapability = request2.client.crossOriginIsolatedCapability;
    }
    const currenTime = coarsenedSharedCurrentTime(crossOriginIsolatedCapability);
    const timingInfo = createOpaqueTimingInfo({
      startTime: currenTime,
    });
    const fetchParams = {
      controller: new Fetch(dispatcher2),
      request: request2,
      timingInfo,
      processRequestBodyChunkLength,
      processRequestEndOfBody,
      processResponse,
      processResponseConsumeBody,
      processResponseEndOfBody,
      taskDestination,
      crossOriginIsolatedCapability,
    };
    assert2(!request2.body || request2.body.stream);
    if (request2.window === 'client') {
      request2.window =
        ((_c =
          (_b = (_a = request2.client) == null ? void 0 : _a.globalObject) == null
            ? void 0
            : _b.constructor) == null
          ? void 0
          : _c.name) === 'Window'
          ? request2.client
          : 'no-window';
    }
    if (request2.origin === 'client') {
      request2.origin = (_d = request2.client) == null ? void 0 : _d.origin;
    }
    if (request2.policyContainer === 'client') {
      if (request2.client != null) {
        request2.policyContainer = clonePolicyContainer(request2.client.policyContainer);
      } else {
        request2.policyContainer = makePolicyContainer();
      }
    }
    if (!request2.headersList.has('accept')) {
      const value = '*/*';
      request2.headersList.append('accept', value);
    }
    if (!request2.headersList.has('accept-language')) {
      request2.headersList.append('accept-language', '*');
    }
    if (request2.priority === null);
    if (subresource.includes(request2.destination));
    mainFetch(fetchParams).catch((err) => {
      fetchParams.controller.terminate(err);
    });
    return fetchParams.controller;
  }
  async function mainFetch(fetchParams, recursive = false) {
    const request2 = fetchParams.request;
    let response2 = null;
    if (
      request2.localURLsOnly &&
      !/^(about|blob|data):/.test(requestCurrentURL(request2).protocol)
    ) {
      response2 = makeNetworkError('local URLs only');
    }
    tryUpgradeRequestToAPotentiallyTrustworthyURL(request2);
    if (requestBadPort(request2) === 'blocked') {
      response2 = makeNetworkError('bad port');
    }
    if (request2.referrerPolicy === '') {
      request2.referrerPolicy = request2.policyContainer.referrerPolicy;
    }
    if (request2.referrer !== 'no-referrer') {
      request2.referrer = determineRequestsReferrer(request2);
    }
    if (response2 === null) {
      response2 = await (async () => {
        const currentURL = requestCurrentURL(request2);
        if (
          (sameOrigin(currentURL, request2.url) && request2.responseTainting === 'basic') ||
          currentURL.protocol === 'data:' ||
          request2.mode === 'navigate' ||
          request2.mode === 'websocket'
        ) {
          request2.responseTainting = 'basic';
          return await schemeFetch(fetchParams);
        }
        if (request2.mode === 'same-origin') {
          return makeNetworkError('request mode cannot be "same-origin"');
        }
        if (request2.mode === 'no-cors') {
          if (request2.redirect !== 'follow') {
            return makeNetworkError('redirect mode cannot be "follow" for "no-cors" request');
          }
          request2.responseTainting = 'opaque';
          return await schemeFetch(fetchParams);
        }
        if (!/^https?:/.test(requestCurrentURL(request2).protocol)) {
          return makeNetworkError('URL scheme must be a HTTP(S) scheme');
        }
        request2.responseTainting = 'cors';
        return await httpFetch(fetchParams);
      })();
    }
    if (recursive) {
      return response2;
    }
    if (response2.status !== 0 && !response2.internalResponse) {
      if (request2.responseTainting === 'cors');
      if (request2.responseTainting === 'basic') {
        response2 = filterResponse(response2, 'basic');
      } else if (request2.responseTainting === 'cors') {
        response2 = filterResponse(response2, 'cors');
      } else if (request2.responseTainting === 'opaque') {
        response2 = filterResponse(response2, 'opaque');
      } else {
        assert2(false);
      }
    }
    let internalResponse = response2.status === 0 ? response2 : response2.internalResponse;
    if (internalResponse.urlList.length === 0) {
      internalResponse.urlList.push(...request2.urlList);
    }
    if (!request2.timingAllowFailed) {
      response2.timingAllowPassed = true;
    }
    if (
      response2.type === 'opaque' &&
      internalResponse.status === 206 &&
      internalResponse.rangeRequested &&
      !request2.headers.has('range')
    ) {
      response2 = internalResponse = makeNetworkError();
    }
    if (
      response2.status !== 0 &&
      (request2.method === 'HEAD' ||
        request2.method === 'CONNECT' ||
        nullBodyStatus.includes(internalResponse.status))
    ) {
      internalResponse.body = null;
      fetchParams.controller.dump = true;
    }
    if (request2.integrity) {
      const processBodyError = (reason) => fetchFinale(fetchParams, makeNetworkError(reason));
      if (request2.responseTainting === 'opaque' || response2.body == null) {
        processBodyError(response2.error);
        return;
      }
      const processBody = (bytes) => {
        if (!matchRequestIntegrity(request2, bytes)) {
          processBodyError('integrity mismatch');
          return;
        }
        response2.body = safelyExtractBody(bytes)[0];
        fetchFinale(fetchParams, response2);
      };
      try {
        processBody(await response2.arrayBuffer());
      } catch (err) {
        processBodyError(err);
      }
    } else {
      fetchFinale(fetchParams, response2);
    }
  }
  async function schemeFetch(fetchParams) {
    const { request: request2 } = fetchParams;
    const { protocol: scheme2, pathname: path } = requestCurrentURL(request2);
    switch (scheme2) {
      case 'about:': {
        if (path === 'blank') {
          const resp = makeResponse({
            statusText: 'OK',
            headersList: [['content-type', 'text/html;charset=utf-8']],
          });
          resp.urlList = [new URL('about:blank')];
          return resp;
        }
        return makeNetworkError('invalid path called');
      }
      case 'blob:': {
        resolveObjectURL = resolveObjectURL || import_buffer.default.resolveObjectURL;
        const currentURL = requestCurrentURL(request2);
        if (currentURL.search.length !== 0) {
          return makeNetworkError('NetworkError when attempting to fetch resource.');
        }
        const blob = resolveObjectURL(currentURL.toString());
        if (request2.method !== 'GET' || !isBlobLike2(blob)) {
          return makeNetworkError('invalid method');
        }
        const response2 = makeResponse({ statusText: 'OK', urlList: [currentURL] });
        response2.headersList.set('content-length', `${blob.size}`);
        response2.headersList.set('content-type', blob.type);
        response2.body = extractBody2(blob)[0];
        return response2;
      }
      case 'data:': {
        const currentURL = requestCurrentURL(request2);
        const dataURLStruct = dataURLProcessor(currentURL);
        if (dataURLStruct === 'failure') {
          return makeNetworkError('failed to fetch the data URL');
        }
        const { mimeType } = dataURLStruct;
        let contentType = `${mimeType.type}/${mimeType.subtype}`;
        const contentTypeParams = [];
        if (mimeType.parameters.size > 0) {
          contentType += ';';
        }
        for (const [key2, value] of mimeType.parameters) {
          if (value.length > 0) {
            contentTypeParams.push(`${key2}=${value}`);
          } else {
            contentTypeParams.push(key2);
          }
        }
        contentType += contentTypeParams.join(',');
        return makeResponse({
          statusText: 'OK',
          headersList: [['content-type', contentType]],
          body: extractBody2(dataURLStruct.body)[0],
        });
      }
      case 'file:': {
        return makeNetworkError('not implemented... yet...');
      }
      case 'http:':
      case 'https:': {
        return await httpFetch(fetchParams).catch((err) => makeNetworkError(err));
      }
      default: {
        return makeNetworkError('unknown scheme');
      }
    }
  }
  function finalizeResponse(fetchParams, response2) {
    fetchParams.request.done = true;
    if (fetchParams.processResponseDone != null) {
      queueMicrotask(() => fetchParams.processResponseDone(response2));
    }
  }
  async function fetchFinale(fetchParams, response2) {
    if (response2.type === 'error') {
      response2.urlList = [fetchParams.request.urlList[0]];
      response2.timingInfo = createOpaqueTimingInfo({
        startTime: fetchParams.timingInfo.startTime,
      });
    }
    const processResponseEndOfBody = () => {
      fetchParams.request.done = true;
      if (fetchParams.processResponseEndOfBody != null) {
        queueMicrotask(() => fetchParams.processResponseEndOfBody(response2));
      }
    };
    if (fetchParams.processResponse != null) {
      queueMicrotask(() => fetchParams.processResponse(response2));
    }
    if (response2.body == null) {
      processResponseEndOfBody();
    } else {
      const identityTransformAlgorithm = (chunk, controller) => {
        controller.enqueue(chunk);
      };
      const transformStream = new TransformStream2({
        start() {},
        transform: identityTransformAlgorithm,
        flush: processResponseEndOfBody,
      });
      response2.body = { stream: response2.body.stream.pipeThrough(transformStream) };
    }
    if (fetchParams.processResponseConsumeBody != null) {
      const processBody = (nullOrBytes) =>
        fetchParams.processResponseConsumeBody(response2, nullOrBytes);
      const processBodyError = (failure) =>
        fetchParams.processResponseConsumeBody(response2, failure);
      if (response2.body == null) {
        queueMicrotask(() => processBody(null));
      } else {
        try {
          processBody(await response2.body.stream.arrayBuffer());
        } catch (err) {
          processBodyError(err);
        }
      }
    }
  }
  async function httpFetch(fetchParams) {
    const request2 = fetchParams.request;
    let response2 = null;
    let actualResponse = null;
    const timingInfo = fetchParams.timingInfo;
    if (request2.serviceWorkers === 'all');
    if (response2 === null) {
      if (request2.redirect === 'follow') {
        request2.serviceWorkers = 'none';
      }
      actualResponse = response2 = await httpNetworkOrCacheFetch(fetchParams);
      if (request2.responseTainting === 'cors' && corsCheck(request2, response2) === 'failure') {
        return makeNetworkError('cors failure');
      }
      if (TAOCheck(request2, response2) === 'failure') {
        request2.timingAllowFailed = true;
      }
    }
    if (
      (request2.responseTainting === 'opaque' || response2.type === 'opaque') &&
      crossOriginResourcePolicyCheck(
        request2.origin,
        request2.client,
        request2.destination,
        actualResponse
      ) === 'blocked'
    ) {
      return makeNetworkError('blocked');
    }
    if (redirectStatus.includes(actualResponse.status)) {
      fetchParams.controller.connection.destroy();
      if (request2.redirect === 'error') {
        response2 = makeNetworkError('unexpected redirect');
      } else if (request2.redirect === 'manual') {
        response2 = actualResponse;
      } else if (request2.redirect === 'follow') {
        response2 = await httpRedirectFetch(fetchParams, response2);
      } else {
        assert2(false);
      }
    }
    response2.timingInfo = timingInfo;
    return response2;
  }
  async function httpRedirectFetch(fetchParams, response2) {
    const request2 = fetchParams.request;
    const actualResponse = response2.internalResponse ? response2.internalResponse : response2;
    let locationURL;
    try {
      locationURL = responseLocationURL(actualResponse, requestCurrentURL(request2).hash);
      if (locationURL == null) {
        return response2;
      }
    } catch (err) {
      return makeNetworkError(err);
    }
    if (!/^https?:/.test(locationURL.protocol)) {
      return makeNetworkError('URL scheme must be a HTTP(S) scheme');
    }
    if (request2.redirectCount === 20) {
      return makeNetworkError('redirect count exceeded');
    }
    request2.redirectCount += 1;
    if (
      request2.mode === 'cors' &&
      (locationURL.username || locationURL.password) &&
      !sameOrigin(request2, locationURL)
    ) {
      return makeNetworkError('cross origin not allowed for request mode "cors"');
    }
    if (request2.responseTainting === 'cors' && (locationURL.username || locationURL.password)) {
      return makeNetworkError('URL cannot contain credentials for request mode "cors"');
    }
    if (actualResponse.status !== 303 && request2.body != null && request2.body.source == null) {
      return makeNetworkError();
    }
    if (
      ([301, 302].includes(actualResponse.status) && request2.method === 'POST') ||
      (actualResponse.status === 303 && !['GET', 'HEAD'].includes(request2.method))
    ) {
      request2.method = 'GET';
      request2.body = null;
      for (const headerName of requestBodyHeader) {
        request2.headersList.delete(headerName);
      }
    }
    if (request2.body != null) {
      assert2(request2.body.source);
      request2.body = safelyExtractBody(request2.body.source)[0];
    }
    const timingInfo = fetchParams.timingInfo;
    timingInfo.redirectEndTime = timingInfo.postRedirectStartTime = coarsenedSharedCurrentTime(
      fetchParams.crossOriginIsolatedCapability
    );
    if (timingInfo.redirectStartTime === 0) {
      timingInfo.redirectStartTime = timingInfo.startTime;
    }
    request2.urlList.push(locationURL);
    setRequestReferrerPolicyOnRedirect(request2, actualResponse);
    return mainFetch(fetchParams, true);
  }
  async function httpNetworkOrCacheFetch(
    fetchParams,
    isAuthenticationFetch = false,
    isNewConnectionFetch = false
  ) {
    const request2 = fetchParams.request;
    let httpFetchParams = null;
    let httpRequest = null;
    let response2 = null;
    if (request2.window === 'no-window' && request2.redirect === 'error') {
      httpFetchParams = fetchParams;
      httpRequest = request2;
    } else {
      httpRequest = makeRequest(request2);
      httpFetchParams = { ...fetchParams };
      httpFetchParams.request = httpRequest;
    }
    const includeCredentials =
      request2.credentials === 'include' ||
      (request2.credentials === 'same-origin' && request2.responseTainting === 'basic');
    const contentLength = httpRequest.body ? httpRequest.body.length : null;
    let contentLengthHeaderValue = null;
    if (httpRequest.body == null && ['POST', 'PUT'].includes(httpRequest.method)) {
      contentLengthHeaderValue = '0';
    }
    if (contentLength != null) {
      contentLengthHeaderValue = String(contentLength);
    }
    if (contentLengthHeaderValue != null) {
      httpRequest.headersList.append('content-length', contentLengthHeaderValue);
    }
    if (contentLength != null && httpRequest.keepalive);
    if (httpRequest.referrer instanceof URL) {
      httpRequest.headersList.append('referer', httpRequest.referrer.href);
    }
    appendRequestOriginHeader(httpRequest);
    appendFetchMetadata(httpRequest);
    if (!httpRequest.headersList.has('user-agent')) {
      httpRequest.headersList.append('user-agent', 'undici');
    }
    if (
      httpRequest.cache === 'default' &&
      (httpRequest.headersList.has('if-modified-since') ||
        httpRequest.headersList.has('if-none-match') ||
        httpRequest.headersList.has('if-unmodified-since') ||
        httpRequest.headersList.has('if-match') ||
        httpRequest.headersList.has('if-range'))
    ) {
      httpRequest.cache = 'no-store';
    }
    if (
      httpRequest.cache === 'no-cache' &&
      !httpRequest.preventNoCacheCacheControlHeaderModification &&
      !httpRequest.headersList.has('cache-control')
    ) {
      httpRequest.headersList.append('cache-control', 'max-age=0');
    }
    if (httpRequest.cache === 'no-store' || httpRequest.cache === 'reload') {
      if (!httpRequest.headersList.has('pragma')) {
        httpRequest.headersList.append('pragma', 'no-cache');
      }
      if (!httpRequest.headersList.has('cache-control')) {
        httpRequest.headersList.append('cache-control', 'no-cache');
      }
    }
    if (httpRequest.headersList.has('range')) {
      httpRequest.headersList.append('accept-encoding', 'identity');
    }
    if (!httpRequest.headersList.has('accept-encoding')) {
      if (/^https:/.test(requestCurrentURL(httpRequest).protocol)) {
        httpRequest.headersList.append('accept-encoding', 'br, gzip, deflate');
      } else {
        httpRequest.headersList.append('accept-encoding', 'gzip, deflate');
      }
    }
    {
      httpRequest.cache = 'no-store';
    }
    if (httpRequest.mode !== 'no-store' && httpRequest.mode !== 'reload');
    if (response2 == null) {
      if (httpRequest.mode === 'only-if-cached') {
        return makeNetworkError('only if cached');
      }
      const forwardResponse = await httpNetworkFetch(
        httpFetchParams,
        includeCredentials,
        isNewConnectionFetch
      );
      if (
        !safeMethods.includes(httpRequest.method) &&
        forwardResponse.status >= 200 &&
        forwardResponse.status <= 399
      );
      if (response2 == null) {
        response2 = forwardResponse;
      }
    }
    response2.urlList = [...httpRequest.urlList];
    if (httpRequest.headersList.has('range')) {
      response2.rangeRequested = true;
    }
    response2.requestIncludesCredentials = includeCredentials;
    if (response2.status === 407) {
      if (request2.window === 'no-window') {
        return makeNetworkError();
      }
      if (isCancelled(fetchParams)) {
        return makeAppropriateNetworkError(fetchParams);
      }
      return makeNetworkError('proxy authentication required');
    }
    if (
      response2.status === 421 &&
      !isNewConnectionFetch &&
      (request2.body == null || request2.body.source != null)
    ) {
      if (isCancelled(fetchParams)) {
        return makeAppropriateNetworkError(fetchParams);
      }
      fetchParams.controller.connection.destroy();
      response2 = await httpNetworkOrCacheFetch(fetchParams, isAuthenticationFetch, true);
    }
    return response2;
  }
  async function httpNetworkFetch(
    fetchParams,
    includeCredentials = false,
    forceNewConnection = false
  ) {
    assert2(!fetchParams.controller.connection || fetchParams.controller.connection.destroyed);
    fetchParams.controller.connection = {
      abort: null,
      destroyed: false,
      destroy(err) {
        var _a;
        if (!this.destroyed) {
          this.destroyed = true;
          (_a = this.abort) == null
            ? void 0
            : _a.call(this, err ?? new DOMException('The operation was aborted.', 'AbortError'));
        }
      },
    };
    const request2 = fetchParams.request;
    let response2 = null;
    const timingInfo = fetchParams.timingInfo;
    {
      request2.cache = 'no-store';
    }
    if (request2.mode === 'websocket');
    let requestBody = null;
    if (request2.body == null && fetchParams.processRequestEndOfBody) {
      queueMicrotask(() => fetchParams.processRequestEndOfBody());
    } else if (request2.body != null) {
      const processBodyChunk = async function* (bytes) {
        var _a;
        if (isCancelled(fetchParams)) {
          return;
        }
        yield bytes;
        (_a = fetchParams.processRequestBodyChunkLength) == null
          ? void 0
          : _a.call(fetchParams, bytes.byteLength);
      };
      const processEndOfBody = () => {
        if (isCancelled(fetchParams)) {
          return;
        }
        if (fetchParams.processRequestEndOfBody) {
          fetchParams.processRequestEndOfBody();
        }
      };
      const processBodyError = (e) => {
        if (isCancelled(fetchParams)) {
          return;
        }
        if (e.name === 'AbortError') {
          fetchParams.controller.abort();
        } else {
          fetchParams.controller.terminate(e);
        }
      };
      requestBody = (async function* () {
        try {
          for await (const bytes of request2.body.stream) {
            yield* processBodyChunk(bytes);
          }
          processEndOfBody();
        } catch (err) {
          processBodyError(err);
        }
      })();
    }
    try {
      const {
        body: body2,
        status,
        statusText,
        headersList,
      } = await dispatch({ body: requestBody });
      const iterator = body2[Symbol.asyncIterator]();
      fetchParams.controller.next = () => iterator.next();
      response2 = makeResponse({ status, statusText, headersList });
    } catch (err) {
      if (err.name === 'AbortError') {
        fetchParams.controller.connection.destroy();
        return makeAppropriateNetworkError(fetchParams);
      }
      return makeNetworkError(err);
    }
    const pullAlgorithm = () => {
      fetchParams.controller.resume();
    };
    const cancelAlgorithm = () => {
      fetchParams.controller.abort();
    };
    if (!ReadableStream3) {
      ReadableStream3 = import_web.default.ReadableStream;
    }
    const stream2 = new ReadableStream3(
      {
        async start(controller) {
          fetchParams.controller.controller = controller;
        },
        async pull(controller) {
          await pullAlgorithm();
        },
        async cancel(reason) {
          await cancelAlgorithm();
        },
      },
      { highWaterMark: 0 }
    );
    response2.body = { stream: stream2 };
    fetchParams.controller.on('terminated', onAborted);
    fetchParams.controller.resume = async () => {
      while (true) {
        let bytes;
        try {
          const { done, value } = await fetchParams.controller.next();
          if (isAborted(fetchParams)) {
            break;
          }
          bytes = done ? void 0 : value;
        } catch (err) {
          if (fetchParams.controller.ended && !timingInfo.encodedBodySize) {
            bytes = void 0;
          } else {
            bytes = err;
          }
        }
        if (bytes === void 0) {
          try {
            fetchParams.controller.controller.close();
          } catch (err) {
            if (!/Controller is already closed/.test(err)) {
              throw err;
            }
          }
          finalizeResponse(fetchParams, response2);
          return;
        }
        timingInfo.decodedBodySize += (bytes == null ? void 0 : bytes.byteLength) ?? 0;
        if (bytes instanceof Error) {
          fetchParams.controller.terminate(bytes);
          return;
        }
        fetchParams.controller.controller.enqueue(new Uint8Array(bytes));
        if (isErrored2(stream2)) {
          fetchParams.controller.terminate();
          return;
        }
        if (!fetchParams.controller.controller.desiredSize) {
          return;
        }
      }
    };
    function onAborted(reason) {
      if (isAborted(fetchParams)) {
        response2.aborted = true;
        if (isReadable2(stream2)) {
          fetchParams.controller.controller.error(
            new DOMException('The operation was aborted.', 'AbortError')
          );
        }
      } else {
        if (isReadable2(stream2)) {
          fetchParams.controller.controller.error(
            new TypeError('terminated', {
              cause: reason instanceof Error ? reason : void 0,
            })
          );
        }
      }
      fetchParams.controller.connection.destroy();
    }
    return response2;
    async function dispatch({ body: body2 }) {
      const url = requestCurrentURL(request2);
      return new Promise((resolve2, reject) =>
        fetchParams.controller.dispatcher.dispatch(
          {
            path: url.pathname + url.search,
            origin: url.origin,
            method: request2.method,
            body: fetchParams.controller.dispatcher.isMockActive
              ? request2.body && request2.body.source
              : body2,
            headers: [...request2.headersList].flat(),
            maxRedirections: 0,
            bodyTimeout: 3e5,
            headersTimeout: 3e5,
          },
          {
            body: null,
            abort: null,
            onConnect(abort2) {
              const { connection } = fetchParams.controller;
              if (connection.destroyed) {
                abort2(new DOMException('The operation was aborted.', 'AbortError'));
              } else {
                fetchParams.controller.on('terminated', abort2);
                this.abort = connection.abort = abort2;
              }
            },
            onHeaders(status, headersList, resume2, statusText) {
              if (status < 200) {
                return;
              }
              let codings = [];
              const headers2 = new Headers3();
              for (let n = 0; n < headersList.length; n += 2) {
                const key2 = headersList[n + 0].toString();
                const val = headersList[n + 1].toString();
                if (key2.toLowerCase() === 'content-encoding') {
                  codings = val.split(',').map((x) => x.trim());
                }
                headers2.append(key2, val);
              }
              this.body = new Readable2({ read: resume2 });
              const decoders = [];
              if (
                request2.method !== 'HEAD' &&
                request2.method !== 'CONNECT' &&
                !nullBodyStatus.includes(status)
              ) {
                for (const coding of codings) {
                  if (/(x-)?gzip/.test(coding)) {
                    decoders.push(zlib.createGunzip());
                  } else if (/(x-)?deflate/.test(coding)) {
                    decoders.push(zlib.createInflate());
                  } else if (coding === 'br') {
                    decoders.push(zlib.createBrotliDecompress());
                  } else {
                    decoders.length = 0;
                    break;
                  }
                }
              }
              resolve2({
                status,
                statusText,
                headersList: headers2[kHeadersList],
                body: decoders.length
                  ? pipeline2(this.body, ...decoders, () => {})
                  : this.body.on('error', () => {}),
              });
              return true;
            },
            onData(chunk) {
              if (fetchParams.controller.dump) {
                return;
              }
              const bytes = chunk;
              timingInfo.encodedBodySize += bytes.byteLength;
              return this.body.push(bytes);
            },
            onComplete() {
              if (this.abort) {
                fetchParams.controller.off('terminated', this.abort);
              }
              fetchParams.controller.ended = true;
              this.body.push(null);
            },
            onError(error2) {
              var _a;
              if (this.abort) {
                fetchParams.controller.off('terminated', this.abort);
              }
              (_a = this.body) == null ? void 0 : _a.destroy(error2);
              fetchParams.controller.terminate(error2);
              reject(error2);
            },
          }
        )
      );
    }
  }
  fetch_1 = fetch3;
  return fetch_1;
}
function makeDispatcher(fn) {
  return (url, opts, handler) => {
    if (typeof opts === 'function') {
      handler = opts;
      opts = null;
    }
    if (!url || (typeof url !== 'string' && typeof url !== 'object' && !(url instanceof URL))) {
      throw new InvalidArgumentError('invalid url');
    }
    if (opts != null && typeof opts !== 'object') {
      throw new InvalidArgumentError('invalid opts');
    }
    if (opts && opts.path != null) {
      if (typeof opts.path !== 'string') {
        throw new InvalidArgumentError('invalid opts.path');
      }
      url = new URL(opts.path, util.parseOrigin(url));
    } else {
      if (!opts) {
        opts = typeof url === 'object' ? url : {};
      }
      url = util.parseURL(url);
    }
    const { agent: agent2, dispatcher: dispatcher2 = getGlobalDispatcher() } = opts;
    if (agent2) {
      throw new InvalidArgumentError('unsupported opts.agent. Did you mean opts.client?');
    }
    return fn.call(
      dispatcher2,
      {
        ...opts,
        origin: url.origin,
        path: url.search ? `${url.pathname}${url.search}` : url.pathname,
        method: opts.method || (opts.body ? 'PUT' : 'GET'),
      },
      handler
    );
  };
}
function installPolyfills() {
  for (const name in globals) {
    Object.defineProperty(globalThis, name, {
      enumerable: true,
      configurable: true,
      value: globals[name],
    });
  }
}
var import_assert,
  import_net,
  import_http,
  import_stream,
  import_buffer,
  import_util,
  import_web,
  import_perf_hooks,
  import_types,
  import_events,
  import_tls,
  import_async_hooks,
  import_zlib,
  import_crypto,
  symbols$1,
  UndiciError,
  ConnectTimeoutError$1,
  HeadersTimeoutError$1,
  HeadersOverflowError$1,
  BodyTimeoutError$1,
  ResponseStatusCodeError$1,
  InvalidArgumentError$f,
  InvalidReturnValueError$2,
  RequestAbortedError$8,
  InformationalError$1,
  RequestContentLengthMismatchError$1,
  ResponseContentLengthMismatchError$1,
  ClientDestroyedError$1,
  ClientClosedError$1,
  SocketError$3,
  NotSupportedError$2,
  BalancedPoolMissingUpstreamError,
  HTTPParserError$1,
  errors$1,
  assert$7,
  kDestroyed$1,
  kBodyUsed$1,
  IncomingMessage,
  stream$1,
  net$2,
  InvalidArgumentError$e,
  Blob$1,
  nodeUtil,
  KEEPALIVE_TIMEOUT_EXPR,
  ReadableStream2,
  kEnumerableProperty,
  util$e,
  constants$2,
  hasRequiredConstants$1,
  symbols,
  hasRequiredSymbols,
  webidl_1,
  hasRequiredWebidl,
  file,
  hasRequiredFile,
  util$d,
  hasRequiredUtil,
  formdata,
  hasRequiredFormdata,
  body,
  hasRequiredBody,
  InvalidArgumentError$d,
  NotSupportedError$1,
  assert$6,
  util$c,
  kHandler,
  channels$1,
  extractBody,
  nodeVersion$1,
  nodeMajor$1,
  nodeMinor$1,
  Request$2,
  request$2,
  EventEmitter,
  Dispatcher$2,
  dispatcher,
  Dispatcher$1,
  ClientDestroyedError,
  ClientClosedError,
  InvalidArgumentError$c,
  kDestroy$3,
  kClose$3,
  kDispatch$3,
  kDestroyed,
  kClosed,
  kOnDestroyed,
  kOnClosed,
  DispatcherBase$3,
  dispatcherBase,
  util$b,
  kBodyUsed,
  assert$5,
  InvalidArgumentError$b,
  EE,
  redirectableStatusCodes,
  kBody$1,
  BodyAsyncIterable,
  RedirectHandler$2,
  redirect,
  net$1,
  assert$4,
  util$a,
  InvalidArgumentError$a,
  ConnectTimeoutError,
  tls,
  connect$2,
  constants$1,
  utils,
  hasRequiredUtils,
  hasRequiredConstants,
  llhttp_wasm,
  hasRequiredLlhttp_wasm,
  llhttp_simd_wasm,
  hasRequiredLlhttp_simd_wasm,
  assert$3,
  net,
  util$9,
  Request$1,
  DispatcherBase$2,
  RedirectHandler$1,
  RequestContentLengthMismatchError,
  ResponseContentLengthMismatchError,
  InvalidArgumentError$9,
  RequestAbortedError$7,
  HeadersTimeoutError,
  HeadersOverflowError,
  SocketError$2,
  InformationalError,
  BodyTimeoutError,
  HTTPParserError,
  buildConnector$1,
  kUrl$2,
  kReset,
  kServerName,
  kClient,
  kBusy$1,
  kParser,
  kConnect,
  kBlocking,
  kResuming,
  kRunning$3,
  kPending$2,
  kSize$4,
  kWriting,
  kQueue$1,
  kConnected$3,
  kConnecting,
  kNeedDrain$2,
  kNoRef,
  kKeepAliveDefaultTimeout,
  kHostHeader,
  kPendingIdx,
  kRunningIdx,
  kError,
  kPipelining,
  kSocket,
  kKeepAliveTimeoutValue,
  kMaxHeadersSize,
  kKeepAliveMaxTimeout,
  kKeepAliveTimeoutThreshold,
  kHeadersTimeout,
  kBodyTimeout,
  kStrictContentLength,
  kConnector,
  kMaxRedirections$1,
  kMaxRequests,
  kCounter,
  kClose$2,
  kDestroy$2,
  kDispatch$2,
  kClosedResolve$1,
  channels,
  Client$2,
  constants,
  EMPTY_BUF,
  llhttpInstance,
  llhttpPromise,
  currentParser,
  currentBufferRef,
  currentBufferSize,
  currentBufferPtr,
  TIMEOUT_HEADERS,
  TIMEOUT_BODY,
  TIMEOUT_IDLE,
  Parser,
  AsyncWriter,
  client,
  kSize$3,
  kMask,
  FixedCircularBuffer,
  fixedQueue,
  kFree$1,
  kConnected$2,
  kPending$1,
  kQueued$1,
  kRunning$2,
  kSize$2,
  kPool,
  PoolStats$1,
  poolStats,
  DispatcherBase$1,
  FixedQueue2,
  kConnected$1,
  kSize$1,
  kRunning$1,
  kPending,
  kQueued,
  kBusy,
  kFree,
  kUrl$1,
  kClose$1,
  kDestroy$1,
  kDispatch$1,
  PoolStats,
  kClients$2,
  kNeedDrain$1,
  kQueue,
  kClosedResolve,
  kOnDrain$1,
  kOnConnect$1,
  kOnDisconnect$1,
  kOnConnectionError$1,
  kGetDispatcher$1,
  kAddClient$1,
  kRemoveClient,
  kStats,
  PoolBase$1,
  poolBase,
  PoolBase,
  kClients$1,
  kNeedDrain,
  kAddClient,
  kGetDispatcher,
  Client$1,
  InvalidArgumentError$8,
  util$8,
  kUrl,
  buildConnector,
  kOptions$1,
  kConnections,
  kFactory$1,
  Pool$1,
  pool,
  kConnected,
  kSize,
  CompatWeakRef,
  CompatFinalizer,
  dispatcherWeakref,
  InvalidArgumentError$7,
  kClients,
  kRunning,
  kClose,
  kDestroy,
  kDispatch,
  DispatcherBase,
  Pool,
  Client,
  util$7,
  RedirectHandler,
  WeakRef,
  FinalizationRegistry$1,
  kOnConnect,
  kOnDisconnect,
  kOnConnectionError,
  kMaxRedirections,
  kOnDrain,
  kFactory,
  kFinalizer,
  kOptions,
  Agent$1,
  agent,
  api$1,
  assert$2,
  Readable$2,
  RequestAbortedError$6,
  NotSupportedError,
  util$6,
  ReadableStreamFrom,
  toUSVString,
  Blob,
  kConsume,
  kReading,
  kBody,
  kAbort,
  kContentType,
  readable,
  RequestAbortedError$5,
  kListener,
  kSignal,
  abortSignal,
  Readable$1,
  InvalidArgumentError$6,
  RequestAbortedError$4,
  ResponseStatusCodeError,
  util$5,
  AsyncResource$4,
  addSignal$4,
  removeSignal$4,
  RequestHandler,
  apiRequest,
  finished,
  InvalidArgumentError$5,
  InvalidReturnValueError$1,
  RequestAbortedError$3,
  util$4,
  AsyncResource$3,
  addSignal$3,
  removeSignal$3,
  StreamHandler,
  apiStream,
  Readable,
  Duplex,
  PassThrough,
  InvalidArgumentError$4,
  InvalidReturnValueError,
  RequestAbortedError$2,
  util$3,
  AsyncResource$2,
  addSignal$2,
  removeSignal$2,
  assert$1,
  kResume,
  PipelineRequest,
  PipelineResponse,
  PipelineHandler,
  apiPipeline,
  InvalidArgumentError$3,
  RequestAbortedError$1,
  SocketError$1,
  AsyncResource$1,
  util$2,
  addSignal$1,
  removeSignal$1,
  assert,
  UpgradeHandler,
  apiUpgrade,
  InvalidArgumentError$2,
  RequestAbortedError,
  SocketError,
  AsyncResource,
  util$1,
  addSignal,
  removeSignal,
  ConnectHandler,
  apiConnect,
  globalDispatcher,
  InvalidArgumentError$1,
  Agent,
  global2,
  headers,
  hasRequiredHeaders,
  response,
  hasRequiredResponse,
  request,
  hasRequiredRequest,
  dataURL,
  hasRequiredDataURL,
  fetch_1,
  hasRequiredFetch,
  Request2,
  Response2,
  Headers2,
  fetch2,
  Dispatcher,
  errors,
  util,
  InvalidArgumentError,
  api,
  getGlobalDispatcher,
  setGlobalDispatcher,
  nodeVersion,
  nodeMajor,
  nodeMinor,
  globals;
var init_polyfills = __esm({
  'node_modules/.pnpm/@sveltejs+kit@1.0.0-next.379_svelte@3.49.0+vite@3.0.4/node_modules/@sveltejs/kit/dist/node/polyfills.js'() {
    init_shims();
    import_assert = __toESM(require('assert'), 1);
    import_net = __toESM(require('net'), 1);
    import_http = __toESM(require('http'), 1);
    import_stream = __toESM(require('stream'), 1);
    import_buffer = __toESM(require('buffer'), 1);
    import_util = __toESM(require('util'), 1);
    import_web = __toESM(require('stream/web'), 1);
    import_perf_hooks = __toESM(require('perf_hooks'), 1);
    import_types = __toESM(require('util/types'), 1);
    import_events = __toESM(require('events'), 1);
    import_tls = __toESM(require('tls'), 1);
    init_commonjsHelpers();
    import_async_hooks = __toESM(require('async_hooks'), 1);
    import_zlib = __toESM(require('zlib'), 1);
    import_crypto = require('crypto');
    symbols$1 = {
      kClose: Symbol('close'),
      kDestroy: Symbol('destroy'),
      kDispatch: Symbol('dispatch'),
      kUrl: Symbol('url'),
      kWriting: Symbol('writing'),
      kResuming: Symbol('resuming'),
      kQueue: Symbol('queue'),
      kConnect: Symbol('connect'),
      kConnecting: Symbol('connecting'),
      kHeadersList: Symbol('headers list'),
      kKeepAliveDefaultTimeout: Symbol('default keep alive timeout'),
      kKeepAliveMaxTimeout: Symbol('max keep alive timeout'),
      kKeepAliveTimeoutThreshold: Symbol('keep alive timeout threshold'),
      kKeepAliveTimeoutValue: Symbol('keep alive timeout'),
      kKeepAlive: Symbol('keep alive'),
      kHeadersTimeout: Symbol('headers timeout'),
      kBodyTimeout: Symbol('body timeout'),
      kServerName: Symbol('server name'),
      kHost: Symbol('host'),
      kNoRef: Symbol('no ref'),
      kBodyUsed: Symbol('used'),
      kRunning: Symbol('running'),
      kBlocking: Symbol('blocking'),
      kPending: Symbol('pending'),
      kSize: Symbol('size'),
      kBusy: Symbol('busy'),
      kQueued: Symbol('queued'),
      kFree: Symbol('free'),
      kConnected: Symbol('connected'),
      kClosed: Symbol('closed'),
      kNeedDrain: Symbol('need drain'),
      kReset: Symbol('reset'),
      kDestroyed: Symbol('destroyed'),
      kMaxHeadersSize: Symbol('max headers size'),
      kRunningIdx: Symbol('running index'),
      kPendingIdx: Symbol('pending index'),
      kError: Symbol('error'),
      kClients: Symbol('clients'),
      kClient: Symbol('client'),
      kParser: Symbol('parser'),
      kOnDestroyed: Symbol('destroy callbacks'),
      kPipelining: Symbol('pipelinig'),
      kSocket: Symbol('socket'),
      kHostHeader: Symbol('host header'),
      kConnector: Symbol('connector'),
      kStrictContentLength: Symbol('strict content length'),
      kMaxRedirections: Symbol('maxRedirections'),
      kMaxRequests: Symbol('maxRequestsPerClient'),
      kProxy: Symbol('proxy agent options'),
      kCounter: Symbol('socket request counter'),
    };
    UndiciError = class extends Error {
      constructor(message) {
        super(message);
        this.name = 'UndiciError';
        this.code = 'UND_ERR';
      }
    };
    ConnectTimeoutError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ConnectTimeoutError$1);
        this.name = 'ConnectTimeoutError';
        this.message = message || 'Connect Timeout Error';
        this.code = 'UND_ERR_CONNECT_TIMEOUT';
      }
    };
    HeadersTimeoutError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, HeadersTimeoutError$1);
        this.name = 'HeadersTimeoutError';
        this.message = message || 'Headers Timeout Error';
        this.code = 'UND_ERR_HEADERS_TIMEOUT';
      }
    };
    HeadersOverflowError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, HeadersOverflowError$1);
        this.name = 'HeadersOverflowError';
        this.message = message || 'Headers Overflow Error';
        this.code = 'UND_ERR_HEADERS_OVERFLOW';
      }
    };
    BodyTimeoutError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, BodyTimeoutError$1);
        this.name = 'BodyTimeoutError';
        this.message = message || 'Body Timeout Error';
        this.code = 'UND_ERR_BODY_TIMEOUT';
      }
    };
    ResponseStatusCodeError$1 = class extends UndiciError {
      constructor(message, statusCode, headers2, body2) {
        super(message);
        Error.captureStackTrace(this, ResponseStatusCodeError$1);
        this.name = 'ResponseStatusCodeError';
        this.message = message || 'Response Status Code Error';
        this.code = 'UND_ERR_RESPONSE_STATUS_CODE';
        this.body = body2;
        this.status = statusCode;
        this.statusCode = statusCode;
        this.headers = headers2;
      }
    };
    InvalidArgumentError$f = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InvalidArgumentError$f);
        this.name = 'InvalidArgumentError';
        this.message = message || 'Invalid Argument Error';
        this.code = 'UND_ERR_INVALID_ARG';
      }
    };
    InvalidReturnValueError$2 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InvalidReturnValueError$2);
        this.name = 'InvalidReturnValueError';
        this.message = message || 'Invalid Return Value Error';
        this.code = 'UND_ERR_INVALID_RETURN_VALUE';
      }
    };
    RequestAbortedError$8 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, RequestAbortedError$8);
        this.name = 'AbortError';
        this.message = message || 'Request aborted';
        this.code = 'UND_ERR_ABORTED';
      }
    };
    InformationalError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, InformationalError$1);
        this.name = 'InformationalError';
        this.message = message || 'Request information';
        this.code = 'UND_ERR_INFO';
      }
    };
    RequestContentLengthMismatchError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, RequestContentLengthMismatchError$1);
        this.name = 'RequestContentLengthMismatchError';
        this.message = message || 'Request body length does not match content-length header';
        this.code = 'UND_ERR_REQ_CONTENT_LENGTH_MISMATCH';
      }
    };
    ResponseContentLengthMismatchError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ResponseContentLengthMismatchError$1);
        this.name = 'ResponseContentLengthMismatchError';
        this.message = message || 'Response body length does not match content-length header';
        this.code = 'UND_ERR_RES_CONTENT_LENGTH_MISMATCH';
      }
    };
    ClientDestroyedError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ClientDestroyedError$1);
        this.name = 'ClientDestroyedError';
        this.message = message || 'The client is destroyed';
        this.code = 'UND_ERR_DESTROYED';
      }
    };
    ClientClosedError$1 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, ClientClosedError$1);
        this.name = 'ClientClosedError';
        this.message = message || 'The client is closed';
        this.code = 'UND_ERR_CLOSED';
      }
    };
    SocketError$3 = class extends UndiciError {
      constructor(message, socket) {
        super(message);
        Error.captureStackTrace(this, SocketError$3);
        this.name = 'SocketError';
        this.message = message || 'Socket error';
        this.code = 'UND_ERR_SOCKET';
        this.socket = socket;
      }
    };
    NotSupportedError$2 = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, NotSupportedError$2);
        this.name = 'NotSupportedError';
        this.message = message || 'Not supported error';
        this.code = 'UND_ERR_NOT_SUPPORTED';
      }
    };
    BalancedPoolMissingUpstreamError = class extends UndiciError {
      constructor(message) {
        super(message);
        Error.captureStackTrace(this, NotSupportedError$2);
        this.name = 'MissingUpstreamError';
        this.message = message || 'No upstream has been added to the BalancedPool';
        this.code = 'UND_ERR_BPL_MISSING_UPSTREAM';
      }
    };
    HTTPParserError$1 = class extends Error {
      constructor(message, code, data) {
        super(message);
        Error.captureStackTrace(this, HTTPParserError$1);
        this.name = 'HTTPParserError';
        this.code = code ? `HPE_${code}` : void 0;
        this.data = data ? data.toString() : void 0;
      }
    };
    errors$1 = {
      HTTPParserError: HTTPParserError$1,
      UndiciError,
      HeadersTimeoutError: HeadersTimeoutError$1,
      HeadersOverflowError: HeadersOverflowError$1,
      BodyTimeoutError: BodyTimeoutError$1,
      RequestContentLengthMismatchError: RequestContentLengthMismatchError$1,
      ConnectTimeoutError: ConnectTimeoutError$1,
      ResponseStatusCodeError: ResponseStatusCodeError$1,
      InvalidArgumentError: InvalidArgumentError$f,
      InvalidReturnValueError: InvalidReturnValueError$2,
      RequestAbortedError: RequestAbortedError$8,
      ClientDestroyedError: ClientDestroyedError$1,
      ClientClosedError: ClientClosedError$1,
      InformationalError: InformationalError$1,
      SocketError: SocketError$3,
      NotSupportedError: NotSupportedError$2,
      ResponseContentLengthMismatchError: ResponseContentLengthMismatchError$1,
      BalancedPoolMissingUpstreamError,
    };
    assert$7 = import_assert.default;
    ({ kDestroyed: kDestroyed$1, kBodyUsed: kBodyUsed$1 } = symbols$1);
    ({ IncomingMessage } = import_http.default);
    stream$1 = import_stream.default;
    net$2 = import_net.default;
    ({ InvalidArgumentError: InvalidArgumentError$e } = errors$1);
    ({ Blob: Blob$1 } = import_buffer.default);
    nodeUtil = import_util.default;
    KEEPALIVE_TIMEOUT_EXPR = /timeout=(\d+)/;
    kEnumerableProperty = /* @__PURE__ */ Object.create(null);
    kEnumerableProperty.enumerable = true;
    util$e = {
      kEnumerableProperty,
      nop,
      isDisturbed,
      isErrored,
      isReadable,
      toUSVString: nodeUtil.toUSVString || ((val) => `${val}`),
      isReadableAborted,
      isBlobLike,
      parseOrigin,
      parseURL,
      getServerName,
      isStream,
      isIterable,
      isAsyncIterable,
      isDestroyed,
      parseRawHeaders,
      parseHeaders,
      parseKeepAliveTimeout,
      destroy,
      bodyLength,
      deepClone,
      ReadableStreamFrom: ReadableStreamFrom$1,
      isBuffer,
      validateHandler,
      getSocketInfo,
      isFormDataLike,
      buildURL,
    };
    ({ InvalidArgumentError: InvalidArgumentError$d, NotSupportedError: NotSupportedError$1 } =
      errors$1);
    assert$6 = import_assert.default;
    util$c = util$e;
    kHandler = Symbol('handler');
    channels$1 = {};
    nodeVersion$1 = process.versions.node.split('.');
    nodeMajor$1 = Number(nodeVersion$1[0]);
    nodeMinor$1 = Number(nodeVersion$1[1]);
    try {
      const diagnosticsChannel = require('diagnostics_channel');
      channels$1.create = diagnosticsChannel.channel('undici:request:create');
      channels$1.bodySent = diagnosticsChannel.channel('undici:request:bodySent');
      channels$1.headers = diagnosticsChannel.channel('undici:request:headers');
      channels$1.trailers = diagnosticsChannel.channel('undici:request:trailers');
      channels$1.error = diagnosticsChannel.channel('undici:request:error');
    } catch {
      channels$1.create = { hasSubscribers: false };
      channels$1.bodySent = { hasSubscribers: false };
      channels$1.headers = { hasSubscribers: false };
      channels$1.trailers = { hasSubscribers: false };
      channels$1.error = { hasSubscribers: false };
    }
    Request$2 = class {
      constructor(
        origin,
        {
          path,
          method,
          body: body2,
          headers: headers2,
          query,
          idempotent,
          blocking,
          upgrade: upgrade2,
          headersTimeout,
          bodyTimeout,
          throwOnError,
        },
        handler
      ) {
        if (typeof path !== 'string') {
          throw new InvalidArgumentError$d('path must be a string');
        } else if (
          path[0] !== '/' &&
          !(path.startsWith('http://') || path.startsWith('https://')) &&
          method !== 'CONNECT'
        ) {
          throw new InvalidArgumentError$d('path must be an absolute URL or start with a slash');
        }
        if (typeof method !== 'string') {
          throw new InvalidArgumentError$d('method must be a string');
        }
        if (upgrade2 && typeof upgrade2 !== 'string') {
          throw new InvalidArgumentError$d('upgrade must be a string');
        }
        if (headersTimeout != null && (!Number.isFinite(headersTimeout) || headersTimeout < 0)) {
          throw new InvalidArgumentError$d('invalid headersTimeout');
        }
        if (bodyTimeout != null && (!Number.isFinite(bodyTimeout) || bodyTimeout < 0)) {
          throw new InvalidArgumentError$d('invalid bodyTimeout');
        }
        this.headersTimeout = headersTimeout;
        this.bodyTimeout = bodyTimeout;
        this.throwOnError = throwOnError === true;
        this.method = method;
        if (body2 == null) {
          this.body = null;
        } else if (util$c.isStream(body2)) {
          this.body = body2;
        } else if (util$c.isBuffer(body2)) {
          this.body = body2.byteLength ? body2 : null;
        } else if (ArrayBuffer.isView(body2)) {
          this.body = body2.buffer.byteLength
            ? Buffer.from(body2.buffer, body2.byteOffset, body2.byteLength)
            : null;
        } else if (body2 instanceof ArrayBuffer) {
          this.body = body2.byteLength ? Buffer.from(body2) : null;
        } else if (typeof body2 === 'string') {
          this.body = body2.length ? Buffer.from(body2) : null;
        } else if (
          util$c.isFormDataLike(body2) ||
          util$c.isIterable(body2) ||
          util$c.isBlobLike(body2)
        ) {
          this.body = body2;
        } else {
          throw new InvalidArgumentError$d(
            'body must be a string, a Buffer, a Readable stream, an iterable, or an async iterable'
          );
        }
        this.completed = false;
        this.aborted = false;
        this.upgrade = upgrade2 || null;
        this.path = query ? util$c.buildURL(path, query) : path;
        this.origin = origin;
        this.idempotent = idempotent == null ? method === 'HEAD' || method === 'GET' : idempotent;
        this.blocking = blocking == null ? false : blocking;
        this.host = null;
        this.contentLength = null;
        this.contentType = null;
        this.headers = '';
        if (Array.isArray(headers2)) {
          if (headers2.length % 2 !== 0) {
            throw new InvalidArgumentError$d('headers array must be even');
          }
          for (let i = 0; i < headers2.length; i += 2) {
            processHeader(this, headers2[i], headers2[i + 1]);
          }
        } else if (headers2 && typeof headers2 === 'object') {
          const keys = Object.keys(headers2);
          for (let i = 0; i < keys.length; i++) {
            const key2 = keys[i];
            processHeader(this, key2, headers2[key2]);
          }
        } else if (headers2 != null) {
          throw new InvalidArgumentError$d('headers must be an object or an array');
        }
        if (util$c.isFormDataLike(this.body)) {
          if (nodeMajor$1 < 16 || (nodeMajor$1 === 16 && nodeMinor$1 < 5)) {
            throw new InvalidArgumentError$d(
              'Form-Data bodies are only supported in node v16.5 and newer.'
            );
          }
          if (!extractBody) {
            extractBody = requireBody().extractBody;
          }
          const [bodyStream, contentType] = extractBody(body2);
          if (this.contentType == null) {
            this.contentType = contentType;
            this.headers += `content-type: ${contentType}\r
`;
          }
          this.body = bodyStream.stream;
        } else if (util$c.isBlobLike(body2) && this.contentType == null && body2.type) {
          this.contentType = body2.type;
          this.headers += `content-type: ${body2.type}\r
`;
        }
        util$c.validateHandler(handler, method, upgrade2);
        this.servername = util$c.getServerName(this.host);
        this[kHandler] = handler;
        if (channels$1.create.hasSubscribers) {
          channels$1.create.publish({ request: this });
        }
      }
      onBodySent(chunk) {
        if (this[kHandler].onBodySent) {
          try {
            this[kHandler].onBodySent(chunk);
          } catch (err) {
            this.onError(err);
          }
        }
      }
      onRequestSent() {
        if (channels$1.bodySent.hasSubscribers) {
          channels$1.bodySent.publish({ request: this });
        }
      }
      onConnect(abort2) {
        assert$6(!this.aborted);
        assert$6(!this.completed);
        return this[kHandler].onConnect(abort2);
      }
      onHeaders(statusCode, headers2, resume2, statusText) {
        assert$6(!this.aborted);
        assert$6(!this.completed);
        if (channels$1.headers.hasSubscribers) {
          channels$1.headers.publish({
            request: this,
            response: { statusCode, headers: headers2, statusText },
          });
        }
        return this[kHandler].onHeaders(statusCode, headers2, resume2, statusText);
      }
      onData(chunk) {
        assert$6(!this.aborted);
        assert$6(!this.completed);
        return this[kHandler].onData(chunk);
      }
      onUpgrade(statusCode, headers2, socket) {
        assert$6(!this.aborted);
        assert$6(!this.completed);
        return this[kHandler].onUpgrade(statusCode, headers2, socket);
      }
      onComplete(trailers) {
        assert$6(!this.aborted);
        this.completed = true;
        if (channels$1.trailers.hasSubscribers) {
          channels$1.trailers.publish({ request: this, trailers });
        }
        return this[kHandler].onComplete(trailers);
      }
      onError(error2) {
        if (channels$1.error.hasSubscribers) {
          channels$1.error.publish({ request: this, error: error2 });
        }
        if (this.aborted) {
          return;
        }
        this.aborted = true;
        return this[kHandler].onError(error2);
      }
      addHeader(key2, value) {
        processHeader(this, key2, value);
        return this;
      }
    };
    request$2 = Request$2;
    EventEmitter = import_events.default;
    Dispatcher$2 = class extends EventEmitter {
      dispatch() {
        throw new Error('not implemented');
      }
      close() {
        throw new Error('not implemented');
      }
      destroy() {
        throw new Error('not implemented');
      }
    };
    dispatcher = Dispatcher$2;
    Dispatcher$1 = dispatcher;
    ({
      ClientDestroyedError,
      ClientClosedError,
      InvalidArgumentError: InvalidArgumentError$c,
    } = errors$1);
    ({ kDestroy: kDestroy$3, kClose: kClose$3, kDispatch: kDispatch$3 } = symbols$1);
    kDestroyed = Symbol('destroyed');
    kClosed = Symbol('closed');
    kOnDestroyed = Symbol('onDestroyed');
    kOnClosed = Symbol('onClosed');
    DispatcherBase$3 = class extends Dispatcher$1 {
      constructor() {
        super();
        this[kDestroyed] = false;
        this[kOnDestroyed] = [];
        this[kClosed] = false;
        this[kOnClosed] = [];
      }
      get destroyed() {
        return this[kDestroyed];
      }
      get closed() {
        return this[kClosed];
      }
      close(callback) {
        if (callback === void 0) {
          return new Promise((resolve2, reject) => {
            this.close((err, data) => {
              return err ? reject(err) : resolve2(data);
            });
          });
        }
        if (typeof callback !== 'function') {
          throw new InvalidArgumentError$c('invalid callback');
        }
        if (this[kDestroyed]) {
          queueMicrotask(() => callback(new ClientDestroyedError(), null));
          return;
        }
        if (this[kClosed]) {
          if (this[kOnClosed]) {
            this[kOnClosed].push(callback);
          } else {
            queueMicrotask(() => callback(null, null));
          }
          return;
        }
        this[kClosed] = true;
        this[kOnClosed].push(callback);
        const onClosed = () => {
          const callbacks = this[kOnClosed];
          this[kOnClosed] = null;
          for (let i = 0; i < callbacks.length; i++) {
            callbacks[i](null, null);
          }
        };
        this[kClose$3]()
          .then(() => this.destroy())
          .then(() => {
            queueMicrotask(onClosed);
          });
      }
      destroy(err, callback) {
        if (typeof err === 'function') {
          callback = err;
          err = null;
        }
        if (callback === void 0) {
          return new Promise((resolve2, reject) => {
            this.destroy(err, (err2, data) => {
              return err2 ? reject(err2) : resolve2(data);
            });
          });
        }
        if (typeof callback !== 'function') {
          throw new InvalidArgumentError$c('invalid callback');
        }
        if (this[kDestroyed]) {
          if (this[kOnDestroyed]) {
            this[kOnDestroyed].push(callback);
          } else {
            queueMicrotask(() => callback(null, null));
          }
          return;
        }
        if (!err) {
          err = new ClientDestroyedError();
        }
        this[kDestroyed] = true;
        this[kOnDestroyed].push(callback);
        const onDestroyed = () => {
          const callbacks = this[kOnDestroyed];
          this[kOnDestroyed] = null;
          for (let i = 0; i < callbacks.length; i++) {
            callbacks[i](null, null);
          }
        };
        this[kDestroy$3](err).then(() => {
          queueMicrotask(onDestroyed);
        });
      }
      dispatch(opts, handler) {
        if (!handler || typeof handler !== 'object') {
          throw new InvalidArgumentError$c('handler must be an object');
        }
        try {
          if (!opts || typeof opts !== 'object') {
            throw new InvalidArgumentError$c('opts must be an object.');
          }
          if (this[kDestroyed]) {
            throw new ClientDestroyedError();
          }
          if (this[kClosed]) {
            throw new ClientClosedError();
          }
          return this[kDispatch$3](opts, handler);
        } catch (err) {
          if (typeof handler.onError !== 'function') {
            throw new InvalidArgumentError$c('invalid onError method');
          }
          handler.onError(err);
          return false;
        }
      }
    };
    dispatcherBase = DispatcherBase$3;
    util$b = util$e;
    ({ kBodyUsed } = symbols$1);
    assert$5 = import_assert.default;
    ({ InvalidArgumentError: InvalidArgumentError$b } = errors$1);
    EE = import_events.default;
    redirectableStatusCodes = [300, 301, 302, 303, 307, 308];
    kBody$1 = Symbol('body');
    BodyAsyncIterable = class {
      constructor(body2) {
        this[kBody$1] = body2;
        this[kBodyUsed] = false;
      }
      async *[Symbol.asyncIterator]() {
        assert$5(!this[kBodyUsed], 'disturbed');
        this[kBodyUsed] = true;
        yield* this[kBody$1];
      }
    };
    RedirectHandler$2 = class {
      constructor(dispatcher2, maxRedirections, opts, handler) {
        if (
          maxRedirections != null &&
          (!Number.isInteger(maxRedirections) || maxRedirections < 0)
        ) {
          throw new InvalidArgumentError$b('maxRedirections must be a positive number');
        }
        util$b.validateHandler(handler, opts.method, opts.upgrade);
        this.dispatcher = dispatcher2;
        this.location = null;
        this.abort = null;
        this.opts = { ...opts, maxRedirections: 0 };
        this.maxRedirections = maxRedirections;
        this.handler = handler;
        this.history = [];
        if (util$b.isStream(this.opts.body)) {
          if (util$b.bodyLength(this.opts.body) === 0) {
            this.opts.body.on('data', function () {
              assert$5(false);
            });
          }
          if (typeof this.opts.body.readableDidRead !== 'boolean') {
            this.opts.body[kBodyUsed] = false;
            EE.prototype.on.call(this.opts.body, 'data', function () {
              this[kBodyUsed] = true;
            });
          }
        } else if (this.opts.body && typeof this.opts.body.pipeTo === 'function') {
          this.opts.body = new BodyAsyncIterable(this.opts.body);
        } else if (
          this.opts.body &&
          typeof this.opts.body !== 'string' &&
          !ArrayBuffer.isView(this.opts.body) &&
          util$b.isIterable(this.opts.body)
        ) {
          this.opts.body = new BodyAsyncIterable(this.opts.body);
        }
      }
      onConnect(abort2) {
        this.abort = abort2;
        this.handler.onConnect(abort2, { history: this.history });
      }
      onUpgrade(statusCode, headers2, socket) {
        this.handler.onUpgrade(statusCode, headers2, socket);
      }
      onError(error2) {
        this.handler.onError(error2);
      }
      onHeaders(statusCode, headers2, resume2, statusText) {
        this.location =
          this.history.length >= this.maxRedirections || util$b.isDisturbed(this.opts.body)
            ? null
            : parseLocation(statusCode, headers2);
        if (this.opts.origin) {
          this.history.push(new URL(this.opts.path, this.opts.origin));
        }
        if (!this.location) {
          return this.handler.onHeaders(statusCode, headers2, resume2, statusText);
        }
        const { origin, pathname, search } = util$b.parseURL(
          new URL(this.location, this.opts.origin && new URL(this.opts.path, this.opts.origin))
        );
        const path = search ? `${pathname}${search}` : pathname;
        this.opts.headers = cleanRequestHeaders(
          this.opts.headers,
          statusCode === 303,
          this.opts.origin !== origin
        );
        this.opts.path = path;
        this.opts.origin = origin;
        this.opts.maxRedirections = 0;
        if (statusCode === 303 && this.opts.method !== 'HEAD') {
          this.opts.method = 'GET';
          this.opts.body = null;
        }
      }
      onData(chunk) {
        if (this.location);
        else {
          return this.handler.onData(chunk);
        }
      }
      onComplete(trailers) {
        if (this.location) {
          this.location = null;
          this.abort = null;
          this.dispatcher.dispatch(this.opts, this);
        } else {
          this.handler.onComplete(trailers);
        }
      }
      onBodySent(chunk) {
        if (this.handler.onBodySent) {
          this.handler.onBodySent(chunk);
        }
      }
    };
    redirect = RedirectHandler$2;
    net$1 = import_net.default;
    assert$4 = import_assert.default;
    util$a = util$e;
    ({ InvalidArgumentError: InvalidArgumentError$a, ConnectTimeoutError } = errors$1);
    connect$2 = buildConnector$2;
    constants$1 = {};
    utils = {};
    assert$3 = import_assert.default;
    net = import_net.default;
    util$9 = util$e;
    Request$1 = request$2;
    DispatcherBase$2 = dispatcherBase;
    RedirectHandler$1 = redirect;
    ({
      RequestContentLengthMismatchError,
      ResponseContentLengthMismatchError,
      InvalidArgumentError: InvalidArgumentError$9,
      RequestAbortedError: RequestAbortedError$7,
      HeadersTimeoutError,
      HeadersOverflowError,
      SocketError: SocketError$2,
      InformationalError,
      BodyTimeoutError,
      HTTPParserError,
    } = errors$1);
    buildConnector$1 = connect$2;
    ({
      kUrl: kUrl$2,
      kReset,
      kServerName,
      kClient,
      kBusy: kBusy$1,
      kParser,
      kConnect,
      kBlocking,
      kResuming,
      kRunning: kRunning$3,
      kPending: kPending$2,
      kSize: kSize$4,
      kWriting,
      kQueue: kQueue$1,
      kConnected: kConnected$3,
      kConnecting,
      kNeedDrain: kNeedDrain$2,
      kNoRef,
      kKeepAliveDefaultTimeout,
      kHostHeader,
      kPendingIdx,
      kRunningIdx,
      kError,
      kPipelining,
      kSocket,
      kKeepAliveTimeoutValue,
      kMaxHeadersSize,
      kKeepAliveMaxTimeout,
      kKeepAliveTimeoutThreshold,
      kHeadersTimeout,
      kBodyTimeout,
      kStrictContentLength,
      kConnector,
      kMaxRedirections: kMaxRedirections$1,
      kMaxRequests,
      kCounter,
      kClose: kClose$2,
      kDestroy: kDestroy$2,
      kDispatch: kDispatch$2,
    } = symbols$1);
    kClosedResolve$1 = Symbol('kClosedResolve');
    channels = {};
    try {
      const diagnosticsChannel = require('diagnostics_channel');
      channels.sendHeaders = diagnosticsChannel.channel('undici:client:sendHeaders');
      channels.beforeConnect = diagnosticsChannel.channel('undici:client:beforeConnect');
      channels.connectError = diagnosticsChannel.channel('undici:client:connectError');
      channels.connected = diagnosticsChannel.channel('undici:client:connected');
    } catch {
      channels.sendHeaders = { hasSubscribers: false };
      channels.beforeConnect = { hasSubscribers: false };
      channels.connectError = { hasSubscribers: false };
      channels.connected = { hasSubscribers: false };
    }
    Client$2 = class extends DispatcherBase$2 {
      constructor(
        url,
        {
          maxHeaderSize,
          headersTimeout,
          socketTimeout,
          requestTimeout,
          connectTimeout,
          bodyTimeout,
          idleTimeout,
          keepAlive,
          keepAliveTimeout,
          maxKeepAliveTimeout,
          keepAliveMaxTimeout,
          keepAliveTimeoutThreshold,
          socketPath,
          pipelining,
          tls: tls2,
          strictContentLength,
          maxCachedSessions,
          maxRedirections,
          connect: connect2,
          maxRequestsPerClient,
        } = {}
      ) {
        super();
        if (keepAlive !== void 0) {
          throw new InvalidArgumentError$9('unsupported keepAlive, use pipelining=0 instead');
        }
        if (socketTimeout !== void 0) {
          throw new InvalidArgumentError$9(
            'unsupported socketTimeout, use headersTimeout & bodyTimeout instead'
          );
        }
        if (requestTimeout !== void 0) {
          throw new InvalidArgumentError$9(
            'unsupported requestTimeout, use headersTimeout & bodyTimeout instead'
          );
        }
        if (idleTimeout !== void 0) {
          throw new InvalidArgumentError$9('unsupported idleTimeout, use keepAliveTimeout instead');
        }
        if (maxKeepAliveTimeout !== void 0) {
          throw new InvalidArgumentError$9(
            'unsupported maxKeepAliveTimeout, use keepAliveMaxTimeout instead'
          );
        }
        if (maxHeaderSize != null && !Number.isFinite(maxHeaderSize)) {
          throw new InvalidArgumentError$9('invalid maxHeaderSize');
        }
        if (socketPath != null && typeof socketPath !== 'string') {
          throw new InvalidArgumentError$9('invalid socketPath');
        }
        if (connectTimeout != null && (!Number.isFinite(connectTimeout) || connectTimeout < 0)) {
          throw new InvalidArgumentError$9('invalid connectTimeout');
        }
        if (
          keepAliveTimeout != null &&
          (!Number.isFinite(keepAliveTimeout) || keepAliveTimeout <= 0)
        ) {
          throw new InvalidArgumentError$9('invalid keepAliveTimeout');
        }
        if (
          keepAliveMaxTimeout != null &&
          (!Number.isFinite(keepAliveMaxTimeout) || keepAliveMaxTimeout <= 0)
        ) {
          throw new InvalidArgumentError$9('invalid keepAliveMaxTimeout');
        }
        if (keepAliveTimeoutThreshold != null && !Number.isFinite(keepAliveTimeoutThreshold)) {
          throw new InvalidArgumentError$9('invalid keepAliveTimeoutThreshold');
        }
        if (headersTimeout != null && (!Number.isInteger(headersTimeout) || headersTimeout < 0)) {
          throw new InvalidArgumentError$9('headersTimeout must be a positive integer or zero');
        }
        if (bodyTimeout != null && (!Number.isInteger(bodyTimeout) || bodyTimeout < 0)) {
          throw new InvalidArgumentError$9('bodyTimeout must be a positive integer or zero');
        }
        if (connect2 != null && typeof connect2 !== 'function' && typeof connect2 !== 'object') {
          throw new InvalidArgumentError$9('connect must be a function or an object');
        }
        if (
          maxRedirections != null &&
          (!Number.isInteger(maxRedirections) || maxRedirections < 0)
        ) {
          throw new InvalidArgumentError$9('maxRedirections must be a positive number');
        }
        if (
          maxRequestsPerClient != null &&
          (!Number.isInteger(maxRequestsPerClient) || maxRequestsPerClient < 0)
        ) {
          throw new InvalidArgumentError$9('maxRequestsPerClient must be a positive number');
        }
        if (typeof connect2 !== 'function') {
          connect2 = buildConnector$1({
            ...tls2,
            maxCachedSessions,
            socketPath,
            timeout: connectTimeout,
            ...connect2,
          });
        }
        this[kUrl$2] = util$9.parseOrigin(url);
        this[kConnector] = connect2;
        this[kSocket] = null;
        this[kPipelining] = pipelining != null ? pipelining : 1;
        this[kMaxHeadersSize] = maxHeaderSize || 16384;
        this[kKeepAliveDefaultTimeout] = keepAliveTimeout == null ? 4e3 : keepAliveTimeout;
        this[kKeepAliveMaxTimeout] = keepAliveMaxTimeout == null ? 6e5 : keepAliveMaxTimeout;
        this[kKeepAliveTimeoutThreshold] =
          keepAliveTimeoutThreshold == null ? 1e3 : keepAliveTimeoutThreshold;
        this[kKeepAliveTimeoutValue] = this[kKeepAliveDefaultTimeout];
        this[kServerName] = null;
        this[kResuming] = 0;
        this[kNeedDrain$2] = 0;
        this[kHostHeader] = `host: ${this[kUrl$2].hostname}${
          this[kUrl$2].port ? `:${this[kUrl$2].port}` : ''
        }\r
`;
        this[kBodyTimeout] = bodyTimeout != null ? bodyTimeout : 3e4;
        this[kHeadersTimeout] = headersTimeout != null ? headersTimeout : 3e4;
        this[kStrictContentLength] = strictContentLength == null ? true : strictContentLength;
        this[kMaxRedirections$1] = maxRedirections;
        this[kMaxRequests] = maxRequestsPerClient;
        this[kClosedResolve$1] = null;
        this[kQueue$1] = [];
        this[kRunningIdx] = 0;
        this[kPendingIdx] = 0;
      }
      get pipelining() {
        return this[kPipelining];
      }
      set pipelining(value) {
        this[kPipelining] = value;
        resume(this, true);
      }
      get [kPending$2]() {
        return this[kQueue$1].length - this[kPendingIdx];
      }
      get [kRunning$3]() {
        return this[kPendingIdx] - this[kRunningIdx];
      }
      get [kSize$4]() {
        return this[kQueue$1].length - this[kRunningIdx];
      }
      get [kConnected$3]() {
        return !!this[kSocket] && !this[kConnecting] && !this[kSocket].destroyed;
      }
      get [kBusy$1]() {
        const socket = this[kSocket];
        return (
          (socket && (socket[kReset] || socket[kWriting] || socket[kBlocking])) ||
          this[kSize$4] >= (this[kPipelining] || 1) ||
          this[kPending$2] > 0
        );
      }
      [kConnect](cb) {
        connect$1(this);
        this.once('connect', cb);
      }
      [kDispatch$2](opts, handler) {
        const { maxRedirections = this[kMaxRedirections$1] } = opts;
        if (maxRedirections) {
          handler = new RedirectHandler$1(this, maxRedirections, opts, handler);
        }
        const origin = opts.origin || this[kUrl$2].origin;
        const request2 = new Request$1(origin, opts, handler);
        this[kQueue$1].push(request2);
        if (this[kResuming]);
        else if (util$9.bodyLength(request2.body) == null && util$9.isIterable(request2.body)) {
          this[kResuming] = 1;
          process.nextTick(resume, this);
        } else {
          resume(this, true);
        }
        if (this[kResuming] && this[kNeedDrain$2] !== 2 && this[kBusy$1]) {
          this[kNeedDrain$2] = 2;
        }
        return this[kNeedDrain$2] < 2;
      }
      async [kClose$2]() {
        return new Promise((resolve2) => {
          if (!this[kSize$4]) {
            this.destroy(resolve2);
          } else {
            this[kClosedResolve$1] = resolve2;
          }
        });
      }
      async [kDestroy$2](err) {
        return new Promise((resolve2) => {
          const requests = this[kQueue$1].splice(this[kPendingIdx]);
          for (let i = 0; i < requests.length; i++) {
            const request2 = requests[i];
            errorRequest(this, request2, err);
          }
          const callback = () => {
            if (this[kClosedResolve$1]) {
              this[kClosedResolve$1]();
              this[kClosedResolve$1] = null;
            }
            resolve2();
          };
          if (!this[kSocket]) {
            queueMicrotask(callback);
          } else {
            util$9.destroy(this[kSocket].on('close', callback), err);
          }
          resume(this);
        });
      }
    };
    constants = requireConstants();
    EMPTY_BUF = Buffer.alloc(0);
    llhttpInstance = null;
    llhttpPromise = lazyllhttp().catch(() => {});
    currentParser = null;
    currentBufferRef = null;
    currentBufferSize = 0;
    currentBufferPtr = null;
    TIMEOUT_HEADERS = 1;
    TIMEOUT_BODY = 2;
    TIMEOUT_IDLE = 3;
    Parser = class {
      constructor(client2, socket, { exports }) {
        assert$3(Number.isFinite(client2[kMaxHeadersSize]) && client2[kMaxHeadersSize] > 0);
        this.llhttp = exports;
        this.ptr = this.llhttp.llhttp_alloc(constants.TYPE.RESPONSE);
        this.client = client2;
        this.socket = socket;
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.statusCode = null;
        this.statusText = '';
        this.upgrade = false;
        this.headers = [];
        this.headersSize = 0;
        this.headersMaxSize = client2[kMaxHeadersSize];
        this.shouldKeepAlive = false;
        this.paused = false;
        this.resume = this.resume.bind(this);
        this.bytesRead = 0;
        this.keepAlive = '';
        this.contentLength = '';
      }
      setTimeout(value, type) {
        this.timeoutType = type;
        if (value !== this.timeoutValue) {
          clearTimeout(this.timeout);
          if (value) {
            this.timeout = setTimeout(onParserTimeout, value, this);
            if (this.timeout.unref) {
              this.timeout.unref();
            }
          } else {
            this.timeout = null;
          }
          this.timeoutValue = value;
        } else if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
      }
      resume() {
        if (this.socket.destroyed || !this.paused) {
          return;
        }
        assert$3(this.ptr != null);
        assert$3(currentParser == null);
        this.llhttp.llhttp_resume(this.ptr);
        assert$3(this.timeoutType === TIMEOUT_BODY);
        if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        this.paused = false;
        this.execute(this.socket.read() || EMPTY_BUF);
        this.readMore();
      }
      readMore() {
        while (!this.paused && this.ptr) {
          const chunk = this.socket.read();
          if (chunk === null) {
            break;
          }
          this.execute(chunk);
        }
      }
      execute(data) {
        assert$3(this.ptr != null);
        assert$3(currentParser == null);
        assert$3(!this.paused);
        const { socket, llhttp } = this;
        if (data.length > currentBufferSize) {
          if (currentBufferPtr) {
            llhttp.free(currentBufferPtr);
          }
          currentBufferSize = Math.ceil(data.length / 4096) * 4096;
          currentBufferPtr = llhttp.malloc(currentBufferSize);
        }
        new Uint8Array(llhttp.memory.buffer, currentBufferPtr, currentBufferSize).set(data);
        try {
          let ret;
          try {
            currentBufferRef = data;
            currentParser = this;
            ret = llhttp.llhttp_execute(this.ptr, currentBufferPtr, data.length);
          } catch (err) {
            throw err;
          } finally {
            currentParser = null;
            currentBufferRef = null;
          }
          const offset = llhttp.llhttp_get_error_pos(this.ptr) - currentBufferPtr;
          if (ret === constants.ERROR.PAUSED_UPGRADE) {
            this.onUpgrade(data.slice(offset));
          } else if (ret === constants.ERROR.PAUSED) {
            this.paused = true;
            socket.unshift(data.slice(offset));
          } else if (ret !== constants.ERROR.OK) {
            const ptr = llhttp.llhttp_get_error_reason(this.ptr);
            let message = '';
            if (ptr) {
              const len = new Uint8Array(llhttp.memory.buffer, ptr).indexOf(0);
              message = Buffer.from(llhttp.memory.buffer, ptr, len).toString();
            }
            throw new HTTPParserError(message, constants.ERROR[ret], data.slice(offset));
          }
        } catch (err) {
          util$9.destroy(socket, err);
        }
      }
      finish() {
        try {
          try {
            currentParser = this;
          } finally {
            currentParser = null;
          }
        } catch (err) {
          util$9.destroy(this.socket, err);
        }
      }
      destroy() {
        assert$3(this.ptr != null);
        assert$3(currentParser == null);
        this.llhttp.llhttp_free(this.ptr);
        this.ptr = null;
        clearTimeout(this.timeout);
        this.timeout = null;
        this.timeoutValue = null;
        this.timeoutType = null;
        this.paused = false;
      }
      onStatus(buf) {
        this.statusText = buf.toString();
      }
      onMessageBegin() {
        const { socket, client: client2 } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request2 = client2[kQueue$1][client2[kRunningIdx]];
        if (!request2) {
          return -1;
        }
      }
      onHeaderField(buf) {
        const len = this.headers.length;
        if ((len & 1) === 0) {
          this.headers.push(buf);
        } else {
          this.headers[len - 1] = Buffer.concat([this.headers[len - 1], buf]);
        }
        this.trackHeader(buf.length);
      }
      onHeaderValue(buf) {
        let len = this.headers.length;
        if ((len & 1) === 1) {
          this.headers.push(buf);
          len += 1;
        } else {
          this.headers[len - 1] = Buffer.concat([this.headers[len - 1], buf]);
        }
        const key2 = this.headers[len - 2];
        if (key2.length === 10 && key2.toString().toLowerCase() === 'keep-alive') {
          this.keepAlive += buf.toString();
        } else if (key2.length === 14 && key2.toString().toLowerCase() === 'content-length') {
          this.contentLength += buf.toString();
        }
        this.trackHeader(buf.length);
      }
      trackHeader(len) {
        this.headersSize += len;
        if (this.headersSize >= this.headersMaxSize) {
          util$9.destroy(this.socket, new HeadersOverflowError());
        }
      }
      onUpgrade(head) {
        const { upgrade: upgrade2, client: client2, socket, headers: headers2, statusCode } = this;
        assert$3(upgrade2);
        const request2 = client2[kQueue$1][client2[kRunningIdx]];
        assert$3(request2);
        assert$3(!socket.destroyed);
        assert$3(socket === client2[kSocket]);
        assert$3(!this.paused);
        assert$3(request2.upgrade || request2.method === 'CONNECT');
        this.statusCode = null;
        this.statusText = '';
        this.shouldKeepAlive = null;
        assert$3(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        socket.unshift(head);
        socket[kParser].destroy();
        socket[kParser] = null;
        socket[kClient] = null;
        socket[kError] = null;
        socket
          .removeListener('error', onSocketError)
          .removeListener('readable', onSocketReadable)
          .removeListener('end', onSocketEnd)
          .removeListener('close', onSocketClose);
        client2[kSocket] = null;
        client2[kQueue$1][client2[kRunningIdx]++] = null;
        client2.emit('disconnect', client2[kUrl$2], [client2], new InformationalError('upgrade'));
        try {
          request2.onUpgrade(statusCode, headers2, socket);
        } catch (err) {
          util$9.destroy(socket, err);
        }
        resume(client2);
      }
      onHeadersComplete(statusCode, upgrade2, shouldKeepAlive) {
        const { client: client2, socket, headers: headers2, statusText } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request2 = client2[kQueue$1][client2[kRunningIdx]];
        if (!request2) {
          return -1;
        }
        assert$3(!this.upgrade);
        assert$3(this.statusCode < 200);
        if (statusCode === 100) {
          util$9.destroy(socket, new SocketError$2('bad response', util$9.getSocketInfo(socket)));
          return -1;
        }
        if (upgrade2 && !request2.upgrade) {
          util$9.destroy(socket, new SocketError$2('bad upgrade', util$9.getSocketInfo(socket)));
          return -1;
        }
        assert$3.strictEqual(this.timeoutType, TIMEOUT_HEADERS);
        this.statusCode = statusCode;
        this.shouldKeepAlive = shouldKeepAlive;
        if (this.statusCode >= 200) {
          const bodyTimeout =
            request2.bodyTimeout != null ? request2.bodyTimeout : client2[kBodyTimeout];
          this.setTimeout(bodyTimeout, TIMEOUT_BODY);
        } else if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        if (request2.method === 'CONNECT') {
          assert$3(client2[kRunning$3] === 1);
          this.upgrade = true;
          return 2;
        }
        if (upgrade2) {
          assert$3(client2[kRunning$3] === 1);
          this.upgrade = true;
          return 2;
        }
        assert$3(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (shouldKeepAlive && client2[kPipelining]) {
          const keepAliveTimeout = this.keepAlive
            ? util$9.parseKeepAliveTimeout(this.keepAlive)
            : null;
          if (keepAliveTimeout != null) {
            const timeout = Math.min(
              keepAliveTimeout - client2[kKeepAliveTimeoutThreshold],
              client2[kKeepAliveMaxTimeout]
            );
            if (timeout <= 0) {
              socket[kReset] = true;
            } else {
              client2[kKeepAliveTimeoutValue] = timeout;
            }
          } else {
            client2[kKeepAliveTimeoutValue] = client2[kKeepAliveDefaultTimeout];
          }
        } else {
          socket[kReset] = true;
        }
        let pause;
        try {
          pause = request2.onHeaders(statusCode, headers2, this.resume, statusText) === false;
        } catch (err) {
          util$9.destroy(socket, err);
          return -1;
        }
        if (request2.method === 'HEAD') {
          assert$3(socket[kReset]);
          return 1;
        }
        if (statusCode < 200) {
          return 1;
        }
        if (socket[kBlocking]) {
          socket[kBlocking] = false;
          resume(client2);
        }
        return pause ? constants.ERROR.PAUSED : 0;
      }
      onBody(buf) {
        const { client: client2, socket, statusCode } = this;
        if (socket.destroyed) {
          return -1;
        }
        const request2 = client2[kQueue$1][client2[kRunningIdx]];
        assert$3(request2);
        assert$3.strictEqual(this.timeoutType, TIMEOUT_BODY);
        if (this.timeout) {
          if (this.timeout.refresh) {
            this.timeout.refresh();
          }
        }
        assert$3(statusCode >= 200);
        this.bytesRead += buf.length;
        try {
          if (request2.onData(buf) === false) {
            return constants.ERROR.PAUSED;
          }
        } catch (err) {
          util$9.destroy(socket, err);
          return -1;
        }
      }
      onMessageComplete() {
        const {
          client: client2,
          socket,
          statusCode,
          upgrade: upgrade2,
          headers: headers2,
          contentLength,
          bytesRead,
          shouldKeepAlive,
        } = this;
        if (socket.destroyed && (!statusCode || shouldKeepAlive)) {
          return -1;
        }
        if (upgrade2) {
          return;
        }
        const request2 = client2[kQueue$1][client2[kRunningIdx]];
        assert$3(request2);
        assert$3(statusCode >= 100);
        this.statusCode = null;
        this.statusText = '';
        this.bytesRead = 0;
        this.contentLength = '';
        this.keepAlive = '';
        assert$3(this.headers.length % 2 === 0);
        this.headers = [];
        this.headersSize = 0;
        if (statusCode < 200) {
          return;
        }
        if (
          request2.method !== 'HEAD' &&
          contentLength &&
          bytesRead !== parseInt(contentLength, 10)
        ) {
          util$9.destroy(socket, new ResponseContentLengthMismatchError());
          return -1;
        }
        try {
          request2.onComplete(headers2);
        } catch (err) {
          errorRequest(client2, request2, err);
        }
        client2[kQueue$1][client2[kRunningIdx]++] = null;
        if (socket[kWriting]) {
          assert$3.strictEqual(client2[kRunning$3], 0);
          util$9.destroy(socket, new InformationalError('reset'));
          return constants.ERROR.PAUSED;
        } else if (!shouldKeepAlive) {
          util$9.destroy(socket, new InformationalError('reset'));
          return constants.ERROR.PAUSED;
        } else if (socket[kReset] && client2[kRunning$3] === 0) {
          util$9.destroy(socket, new InformationalError('reset'));
          return constants.ERROR.PAUSED;
        } else if (client2[kPipelining] === 1) {
          setImmediate(resume, client2);
        } else {
          resume(client2);
        }
      }
    };
    AsyncWriter = class {
      constructor({
        socket,
        request: request2,
        contentLength,
        client: client2,
        expectsPayload,
        header,
      }) {
        this.socket = socket;
        this.request = request2;
        this.contentLength = contentLength;
        this.client = client2;
        this.bytesWritten = 0;
        this.expectsPayload = expectsPayload;
        this.header = header;
        socket[kWriting] = true;
      }
      write(chunk) {
        const {
          socket,
          request: request2,
          contentLength,
          client: client2,
          bytesWritten,
          expectsPayload,
          header,
        } = this;
        if (socket[kError]) {
          throw socket[kError];
        }
        if (socket.destroyed) {
          return false;
        }
        const len = Buffer.byteLength(chunk);
        if (!len) {
          return true;
        }
        if (contentLength !== null && bytesWritten + len > contentLength) {
          if (client2[kStrictContentLength]) {
            throw new RequestContentLengthMismatchError();
          }
          process.emitWarning(new RequestContentLengthMismatchError());
        }
        if (bytesWritten === 0) {
          if (!expectsPayload) {
            socket[kReset] = true;
          }
          if (contentLength === null) {
            socket.write(
              `${header}transfer-encoding: chunked\r
`,
              'ascii'
            );
          } else {
            socket.write(
              `${header}content-length: ${contentLength}\r
\r
`,
              'ascii'
            );
          }
        }
        if (contentLength === null) {
          socket.write(
            `\r
${len.toString(16)}\r
`,
            'ascii'
          );
        }
        this.bytesWritten += len;
        const ret = socket.write(chunk);
        request2.onBodySent(chunk);
        return ret;
      }
      end() {
        const {
          socket,
          contentLength,
          client: client2,
          bytesWritten,
          expectsPayload,
          header,
          request: request2,
        } = this;
        request2.onRequestSent();
        socket[kWriting] = false;
        if (socket[kError]) {
          throw socket[kError];
        }
        if (socket.destroyed) {
          return;
        }
        if (bytesWritten === 0) {
          if (expectsPayload) {
            socket.write(
              `${header}content-length: 0\r
\r
`,
              'ascii'
            );
          } else {
            socket.write(
              `${header}\r
`,
              'ascii'
            );
          }
        } else if (contentLength === null) {
          socket.write('\r\n0\r\n\r\n', 'ascii');
        }
        if (contentLength !== null && bytesWritten !== contentLength) {
          if (client2[kStrictContentLength]) {
            throw new RequestContentLengthMismatchError();
          } else {
            process.emitWarning(new RequestContentLengthMismatchError());
          }
        }
        if (socket[kParser].timeout && socket[kParser].timeoutType === TIMEOUT_HEADERS) {
          if (socket[kParser].timeout.refresh) {
            socket[kParser].timeout.refresh();
          }
        }
        resume(client2);
      }
      destroy(err) {
        const { socket, client: client2 } = this;
        socket[kWriting] = false;
        if (err) {
          assert$3(client2[kRunning$3] <= 1, 'pipeline should only contain this request');
          util$9.destroy(socket, err);
        }
      }
    };
    client = Client$2;
    kSize$3 = 2048;
    kMask = kSize$3 - 1;
    FixedCircularBuffer = class {
      constructor() {
        this.bottom = 0;
        this.top = 0;
        this.list = new Array(kSize$3);
        this.next = null;
      }
      isEmpty() {
        return this.top === this.bottom;
      }
      isFull() {
        return ((this.top + 1) & kMask) === this.bottom;
      }
      push(data) {
        this.list[this.top] = data;
        this.top = (this.top + 1) & kMask;
      }
      shift() {
        const nextItem = this.list[this.bottom];
        if (nextItem === void 0) return null;
        this.list[this.bottom] = void 0;
        this.bottom = (this.bottom + 1) & kMask;
        return nextItem;
      }
    };
    fixedQueue = class FixedQueue {
      constructor() {
        this.head = this.tail = new FixedCircularBuffer();
      }
      isEmpty() {
        return this.head.isEmpty();
      }
      push(data) {
        if (this.head.isFull()) {
          this.head = this.head.next = new FixedCircularBuffer();
        }
        this.head.push(data);
      }
      shift() {
        const tail = this.tail;
        const next = tail.shift();
        if (tail.isEmpty() && tail.next !== null) {
          this.tail = tail.next;
        }
        return next;
      }
    };
    ({
      kFree: kFree$1,
      kConnected: kConnected$2,
      kPending: kPending$1,
      kQueued: kQueued$1,
      kRunning: kRunning$2,
      kSize: kSize$2,
    } = symbols$1);
    kPool = Symbol('pool');
    PoolStats$1 = class {
      constructor(pool2) {
        this[kPool] = pool2;
      }
      get connected() {
        return this[kPool][kConnected$2];
      }
      get free() {
        return this[kPool][kFree$1];
      }
      get pending() {
        return this[kPool][kPending$1];
      }
      get queued() {
        return this[kPool][kQueued$1];
      }
      get running() {
        return this[kPool][kRunning$2];
      }
      get size() {
        return this[kPool][kSize$2];
      }
    };
    poolStats = PoolStats$1;
    DispatcherBase$1 = dispatcherBase;
    FixedQueue2 = fixedQueue;
    ({
      kConnected: kConnected$1,
      kSize: kSize$1,
      kRunning: kRunning$1,
      kPending,
      kQueued,
      kBusy,
      kFree,
      kUrl: kUrl$1,
      kClose: kClose$1,
      kDestroy: kDestroy$1,
      kDispatch: kDispatch$1,
    } = symbols$1);
    PoolStats = poolStats;
    kClients$2 = Symbol('clients');
    kNeedDrain$1 = Symbol('needDrain');
    kQueue = Symbol('queue');
    kClosedResolve = Symbol('closed resolve');
    kOnDrain$1 = Symbol('onDrain');
    kOnConnect$1 = Symbol('onConnect');
    kOnDisconnect$1 = Symbol('onDisconnect');
    kOnConnectionError$1 = Symbol('onConnectionError');
    kGetDispatcher$1 = Symbol('get dispatcher');
    kAddClient$1 = Symbol('add client');
    kRemoveClient = Symbol('remove client');
    kStats = Symbol('stats');
    PoolBase$1 = class extends DispatcherBase$1 {
      constructor() {
        super();
        this[kQueue] = new FixedQueue2();
        this[kClients$2] = [];
        this[kQueued] = 0;
        const pool2 = this;
        this[kOnDrain$1] = function onDrain(origin, targets) {
          const queue = pool2[kQueue];
          let needDrain = false;
          while (!needDrain) {
            const item = queue.shift();
            if (!item) {
              break;
            }
            pool2[kQueued]--;
            needDrain = !this.dispatch(item.opts, item.handler);
          }
          this[kNeedDrain$1] = needDrain;
          if (!this[kNeedDrain$1] && pool2[kNeedDrain$1]) {
            pool2[kNeedDrain$1] = false;
            pool2.emit('drain', origin, [pool2, ...targets]);
          }
          if (pool2[kClosedResolve] && queue.isEmpty()) {
            Promise.all(pool2[kClients$2].map((c) => c.close())).then(pool2[kClosedResolve]);
          }
        };
        this[kOnConnect$1] = (origin, targets) => {
          pool2.emit('connect', origin, [pool2, ...targets]);
        };
        this[kOnDisconnect$1] = (origin, targets, err) => {
          pool2.emit('disconnect', origin, [pool2, ...targets], err);
        };
        this[kOnConnectionError$1] = (origin, targets, err) => {
          pool2.emit('connectionError', origin, [pool2, ...targets], err);
        };
        this[kStats] = new PoolStats(this);
      }
      get [kBusy]() {
        return this[kNeedDrain$1];
      }
      get [kConnected$1]() {
        return this[kClients$2].filter((client2) => client2[kConnected$1]).length;
      }
      get [kFree]() {
        return this[kClients$2].filter((client2) => client2[kConnected$1] && !client2[kNeedDrain$1])
          .length;
      }
      get [kPending]() {
        let ret = this[kQueued];
        for (const { [kPending]: pending } of this[kClients$2]) {
          ret += pending;
        }
        return ret;
      }
      get [kRunning$1]() {
        let ret = 0;
        for (const { [kRunning$1]: running } of this[kClients$2]) {
          ret += running;
        }
        return ret;
      }
      get [kSize$1]() {
        let ret = this[kQueued];
        for (const { [kSize$1]: size } of this[kClients$2]) {
          ret += size;
        }
        return ret;
      }
      get stats() {
        return this[kStats];
      }
      async [kClose$1]() {
        if (this[kQueue].isEmpty()) {
          return Promise.all(this[kClients$2].map((c) => c.close()));
        } else {
          return new Promise((resolve2) => {
            this[kClosedResolve] = resolve2;
          });
        }
      }
      async [kDestroy$1](err) {
        while (true) {
          const item = this[kQueue].shift();
          if (!item) {
            break;
          }
          item.handler.onError(err);
        }
        return Promise.all(this[kClients$2].map((c) => c.destroy(err)));
      }
      [kDispatch$1](opts, handler) {
        const dispatcher2 = this[kGetDispatcher$1]();
        if (!dispatcher2) {
          this[kNeedDrain$1] = true;
          this[kQueue].push({ opts, handler });
          this[kQueued]++;
        } else if (!dispatcher2.dispatch(opts, handler)) {
          dispatcher2[kNeedDrain$1] = true;
          this[kNeedDrain$1] = !this[kGetDispatcher$1]();
        }
        return !this[kNeedDrain$1];
      }
      [kAddClient$1](client2) {
        client2
          .on('drain', this[kOnDrain$1])
          .on('connect', this[kOnConnect$1])
          .on('disconnect', this[kOnDisconnect$1])
          .on('connectionError', this[kOnConnectionError$1]);
        this[kClients$2].push(client2);
        if (this[kNeedDrain$1]) {
          process.nextTick(() => {
            if (this[kNeedDrain$1]) {
              this[kOnDrain$1](client2[kUrl$1], [this, client2]);
            }
          });
        }
        return this;
      }
      [kRemoveClient](client2) {
        client2.close(() => {
          const idx = this[kClients$2].indexOf(client2);
          if (idx !== -1) {
            this[kClients$2].splice(idx, 1);
          }
        });
        this[kNeedDrain$1] = this[kClients$2].some(
          (dispatcher2) =>
            !dispatcher2[kNeedDrain$1] &&
            dispatcher2.closed !== true &&
            dispatcher2.destroyed !== true
        );
      }
    };
    poolBase = {
      PoolBase: PoolBase$1,
      kClients: kClients$2,
      kNeedDrain: kNeedDrain$1,
      kAddClient: kAddClient$1,
      kRemoveClient,
      kGetDispatcher: kGetDispatcher$1,
    };
    ({ PoolBase, kClients: kClients$1, kNeedDrain, kAddClient, kGetDispatcher } = poolBase);
    Client$1 = client;
    ({ InvalidArgumentError: InvalidArgumentError$8 } = errors$1);
    util$8 = util$e;
    ({ kUrl } = symbols$1);
    buildConnector = connect$2;
    kOptions$1 = Symbol('options');
    kConnections = Symbol('connections');
    kFactory$1 = Symbol('factory');
    Pool$1 = class extends PoolBase {
      constructor(
        origin,
        {
          connections,
          factory = defaultFactory$1,
          connect: connect2,
          connectTimeout,
          tls: tls2,
          maxCachedSessions,
          socketPath,
          ...options
        } = {}
      ) {
        super();
        if (connections != null && (!Number.isFinite(connections) || connections < 0)) {
          throw new InvalidArgumentError$8('invalid connections');
        }
        if (typeof factory !== 'function') {
          throw new InvalidArgumentError$8('factory must be a function.');
        }
        if (connect2 != null && typeof connect2 !== 'function' && typeof connect2 !== 'object') {
          throw new InvalidArgumentError$8('connect must be a function or an object');
        }
        if (typeof connect2 !== 'function') {
          connect2 = buildConnector({
            ...tls2,
            maxCachedSessions,
            socketPath,
            timeout: connectTimeout == null ? 1e4 : connectTimeout,
            ...connect2,
          });
        }
        this[kConnections] = connections || null;
        this[kUrl] = util$8.parseOrigin(origin);
        this[kOptions$1] = { ...util$8.deepClone(options), connect: connect2 };
        this[kFactory$1] = factory;
      }
      [kGetDispatcher]() {
        let dispatcher2 = this[kClients$1].find((dispatcher3) => !dispatcher3[kNeedDrain]);
        if (dispatcher2) {
          return dispatcher2;
        }
        if (!this[kConnections] || this[kClients$1].length < this[kConnections]) {
          dispatcher2 = this[kFactory$1](this[kUrl], this[kOptions$1]);
          this[kAddClient](dispatcher2);
        }
        return dispatcher2;
      }
    };
    pool = Pool$1;
    ({ kConnected, kSize } = symbols$1);
    CompatWeakRef = class {
      constructor(value) {
        this.value = value;
      }
      deref() {
        return this.value[kConnected] === 0 && this.value[kSize] === 0 ? void 0 : this.value;
      }
    };
    CompatFinalizer = class {
      constructor(finalizer) {
        this.finalizer = finalizer;
      }
      register(dispatcher2, key2) {
        dispatcher2.on('disconnect', () => {
          if (dispatcher2[kConnected] === 0 && dispatcher2[kSize] === 0) {
            this.finalizer(key2);
          }
        });
      }
    };
    dispatcherWeakref = function () {
      return {
        WeakRef: commonjsGlobal.WeakRef || CompatWeakRef,
        FinalizationRegistry: commonjsGlobal.FinalizationRegistry || CompatFinalizer,
      };
    };
    ({ InvalidArgumentError: InvalidArgumentError$7 } = errors$1);
    ({ kClients, kRunning, kClose, kDestroy, kDispatch } = symbols$1);
    DispatcherBase = dispatcherBase;
    Pool = pool;
    Client = client;
    util$7 = util$e;
    RedirectHandler = redirect;
    ({ WeakRef, FinalizationRegistry: FinalizationRegistry$1 } = dispatcherWeakref());
    kOnConnect = Symbol('onConnect');
    kOnDisconnect = Symbol('onDisconnect');
    kOnConnectionError = Symbol('onConnectionError');
    kMaxRedirections = Symbol('maxRedirections');
    kOnDrain = Symbol('onDrain');
    kFactory = Symbol('factory');
    kFinalizer = Symbol('finalizer');
    kOptions = Symbol('options');
    Agent$1 = class extends DispatcherBase {
      constructor({
        factory = defaultFactory,
        maxRedirections = 0,
        connect: connect2,
        ...options
      } = {}) {
        super();
        if (typeof factory !== 'function') {
          throw new InvalidArgumentError$7('factory must be a function.');
        }
        if (connect2 != null && typeof connect2 !== 'function' && typeof connect2 !== 'object') {
          throw new InvalidArgumentError$7('connect must be a function or an object');
        }
        if (!Number.isInteger(maxRedirections) || maxRedirections < 0) {
          throw new InvalidArgumentError$7('maxRedirections must be a positive number');
        }
        if (connect2 && typeof connect2 !== 'function') {
          connect2 = { ...connect2 };
        }
        this[kOptions] = { ...util$7.deepClone(options), connect: connect2 };
        this[kMaxRedirections] = maxRedirections;
        this[kFactory] = factory;
        this[kClients] = /* @__PURE__ */ new Map();
        this[kFinalizer] = new FinalizationRegistry$1((key2) => {
          const ref = this[kClients].get(key2);
          if (ref !== void 0 && ref.deref() === void 0) {
            this[kClients].delete(key2);
          }
        });
        const agent2 = this;
        this[kOnDrain] = (origin, targets) => {
          agent2.emit('drain', origin, [agent2, ...targets]);
        };
        this[kOnConnect] = (origin, targets) => {
          agent2.emit('connect', origin, [agent2, ...targets]);
        };
        this[kOnDisconnect] = (origin, targets, err) => {
          agent2.emit('disconnect', origin, [agent2, ...targets], err);
        };
        this[kOnConnectionError] = (origin, targets, err) => {
          agent2.emit('connectionError', origin, [agent2, ...targets], err);
        };
      }
      get [kRunning]() {
        let ret = 0;
        for (const ref of this[kClients].values()) {
          const client2 = ref.deref();
          if (client2) {
            ret += client2[kRunning];
          }
        }
        return ret;
      }
      [kDispatch](opts, handler) {
        let key2;
        if (opts.origin && (typeof opts.origin === 'string' || opts.origin instanceof URL)) {
          key2 = String(opts.origin);
        } else {
          throw new InvalidArgumentError$7('opts.origin must be a non-empty string or URL.');
        }
        const ref = this[kClients].get(key2);
        let dispatcher2 = ref ? ref.deref() : null;
        if (!dispatcher2) {
          dispatcher2 = this[kFactory](opts.origin, this[kOptions])
            .on('drain', this[kOnDrain])
            .on('connect', this[kOnConnect])
            .on('disconnect', this[kOnDisconnect])
            .on('connectionError', this[kOnConnectionError]);
          this[kClients].set(key2, new WeakRef(dispatcher2));
          this[kFinalizer].register(dispatcher2, key2);
        }
        const { maxRedirections = this[kMaxRedirections] } = opts;
        if (maxRedirections != null && maxRedirections !== 0) {
          opts = { ...opts, maxRedirections: 0 };
          handler = new RedirectHandler(this, maxRedirections, opts, handler);
        }
        return dispatcher2.dispatch(opts, handler);
      }
      async [kClose]() {
        const closePromises = [];
        for (const ref of this[kClients].values()) {
          const client2 = ref.deref();
          if (client2) {
            closePromises.push(client2.close());
          }
        }
        await Promise.all(closePromises);
      }
      async [kDestroy](err) {
        const destroyPromises = [];
        for (const ref of this[kClients].values()) {
          const client2 = ref.deref();
          if (client2) {
            destroyPromises.push(client2.destroy(err));
          }
        }
        await Promise.all(destroyPromises);
      }
    };
    agent = Agent$1;
    api$1 = {};
    assert$2 = import_assert.default;
    ({ Readable: Readable$2 } = import_stream.default);
    ({ RequestAbortedError: RequestAbortedError$6, NotSupportedError } = errors$1);
    util$6 = util$e;
    ({ ReadableStreamFrom, toUSVString } = util$e);
    kConsume = Symbol('kConsume');
    kReading = Symbol('kReading');
    kBody = Symbol('kBody');
    kAbort = Symbol('abort');
    kContentType = Symbol('kContentType');
    readable = class BodyReadable extends Readable$2 {
      constructor(resume2, abort2, contentType = '') {
        super({
          autoDestroy: true,
          read: resume2,
          highWaterMark: 64 * 1024,
        });
        this._readableState.dataEmitted = false;
        this[kAbort] = abort2;
        this[kConsume] = null;
        this[kBody] = null;
        this[kContentType] = contentType;
        this[kReading] = false;
      }
      destroy(err) {
        if (this.destroyed) {
          return this;
        }
        if (!err && !this._readableState.endEmitted) {
          err = new RequestAbortedError$6();
        }
        if (err) {
          this[kAbort]();
        }
        return super.destroy(err);
      }
      emit(ev, ...args) {
        if (ev === 'data') {
          this._readableState.dataEmitted = true;
        } else if (ev === 'error') {
          this._readableState.errorEmitted = true;
        }
        return super.emit(ev, ...args);
      }
      on(ev, ...args) {
        if (ev === 'data' || ev === 'readable') {
          this[kReading] = true;
        }
        return super.on(ev, ...args);
      }
      addListener(ev, ...args) {
        return this.on(ev, ...args);
      }
      off(ev, ...args) {
        const ret = super.off(ev, ...args);
        if (ev === 'data' || ev === 'readable') {
          this[kReading] = this.listenerCount('data') > 0 || this.listenerCount('readable') > 0;
        }
        return ret;
      }
      removeListener(ev, ...args) {
        return this.off(ev, ...args);
      }
      push(chunk) {
        if (this[kConsume] && chunk !== null) {
          consumePush(this[kConsume], chunk);
          return this[kReading] ? super.push(chunk) : true;
        }
        return super.push(chunk);
      }
      async text() {
        return consume(this, 'text');
      }
      async json() {
        return consume(this, 'json');
      }
      async blob() {
        return consume(this, 'blob');
      }
      async arrayBuffer() {
        return consume(this, 'arrayBuffer');
      }
      async formData() {
        throw new NotSupportedError();
      }
      get bodyUsed() {
        return util$6.isDisturbed(this);
      }
      get body() {
        if (!this[kBody]) {
          this[kBody] = ReadableStreamFrom(this);
          if (this[kConsume]) {
            this[kBody].getReader();
            assert$2(this[kBody].locked);
          }
        }
        return this[kBody];
      }
      async dump(opts) {
        let limit = opts && Number.isFinite(opts.limit) ? opts.limit : 262144;
        try {
          for await (const chunk of this) {
            limit -= Buffer.byteLength(chunk);
            if (limit < 0) {
              return;
            }
          }
        } catch {}
      }
    };
    ({ RequestAbortedError: RequestAbortedError$5 } = errors$1);
    kListener = Symbol('kListener');
    kSignal = Symbol('kSignal');
    abortSignal = {
      addSignal: addSignal$5,
      removeSignal: removeSignal$5,
    };
    Readable$1 = readable;
    ({
      InvalidArgumentError: InvalidArgumentError$6,
      RequestAbortedError: RequestAbortedError$4,
      ResponseStatusCodeError,
    } = errors$1);
    util$5 = util$e;
    ({ AsyncResource: AsyncResource$4 } = import_async_hooks.default);
    ({ addSignal: addSignal$4, removeSignal: removeSignal$4 } = abortSignal);
    RequestHandler = class extends AsyncResource$4 {
      constructor(opts, callback) {
        if (!opts || typeof opts !== 'object') {
          throw new InvalidArgumentError$6('invalid opts');
        }
        const { signal, method, opaque, body: body2, onInfo, responseHeaders, throwOnError } = opts;
        try {
          if (typeof callback !== 'function') {
            throw new InvalidArgumentError$6('invalid callback');
          }
          if (
            signal &&
            typeof signal.on !== 'function' &&
            typeof signal.addEventListener !== 'function'
          ) {
            throw new InvalidArgumentError$6('signal must be an EventEmitter or EventTarget');
          }
          if (method === 'CONNECT') {
            throw new InvalidArgumentError$6('invalid method');
          }
          if (onInfo && typeof onInfo !== 'function') {
            throw new InvalidArgumentError$6('invalid onInfo callback');
          }
          super('UNDICI_REQUEST');
        } catch (err) {
          if (util$5.isStream(body2)) {
            util$5.destroy(body2.on('error', util$5.nop), err);
          }
          throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.body = body2;
        this.trailers = {};
        this.context = null;
        this.onInfo = onInfo || null;
        this.throwOnError = throwOnError;
        if (util$5.isStream(body2)) {
          body2.on('error', (err) => {
            this.onError(err);
          });
        }
        addSignal$4(this, signal);
      }
      onConnect(abort2, context) {
        if (!this.callback) {
          throw new RequestAbortedError$4();
        }
        this.abort = abort2;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume2, statusMessage) {
        const { callback, opaque, abort: abort2, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers3 =
              this.responseHeaders === 'raw'
                ? util$5.parseRawHeaders(rawHeaders)
                : util$5.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers3 });
          }
          return;
        }
        const parsedHeaders = util$5.parseHeaders(rawHeaders);
        const contentType = parsedHeaders['content-type'];
        const body2 = new Readable$1(resume2, abort2, contentType);
        this.callback = null;
        this.res = body2;
        const headers2 =
          this.responseHeaders === 'raw'
            ? util$5.parseRawHeaders(rawHeaders)
            : util$5.parseHeaders(rawHeaders);
        if (callback !== null) {
          if (this.throwOnError && statusCode >= 400) {
            this.runInAsyncScope(getResolveErrorBodyCallback, null, {
              callback,
              body: body2,
              contentType,
              statusCode,
              statusMessage,
              headers: headers2,
            });
            return;
          }
          this.runInAsyncScope(callback, null, null, {
            statusCode,
            headers: headers2,
            trailers: this.trailers,
            opaque,
            body: body2,
            context,
          });
        }
      }
      onData(chunk) {
        const { res } = this;
        return res.push(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        removeSignal$4(this);
        util$5.parseHeaders(trailers, this.trailers);
        res.push(null);
      }
      onError(err) {
        const { res, callback, body: body2, opaque } = this;
        removeSignal$4(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
        if (res) {
          this.res = null;
          queueMicrotask(() => {
            util$5.destroy(res, err);
          });
        }
        if (body2) {
          this.body = null;
          util$5.destroy(body2, err);
        }
      }
    };
    apiRequest = request$1;
    ({ finished } = import_stream.default);
    ({
      InvalidArgumentError: InvalidArgumentError$5,
      InvalidReturnValueError: InvalidReturnValueError$1,
      RequestAbortedError: RequestAbortedError$3,
    } = errors$1);
    util$4 = util$e;
    ({ AsyncResource: AsyncResource$3 } = import_async_hooks.default);
    ({ addSignal: addSignal$3, removeSignal: removeSignal$3 } = abortSignal);
    StreamHandler = class extends AsyncResource$3 {
      constructor(opts, factory, callback) {
        if (!opts || typeof opts !== 'object') {
          throw new InvalidArgumentError$5('invalid opts');
        }
        const { signal, method, opaque, body: body2, onInfo, responseHeaders } = opts;
        try {
          if (typeof callback !== 'function') {
            throw new InvalidArgumentError$5('invalid callback');
          }
          if (typeof factory !== 'function') {
            throw new InvalidArgumentError$5('invalid factory');
          }
          if (
            signal &&
            typeof signal.on !== 'function' &&
            typeof signal.addEventListener !== 'function'
          ) {
            throw new InvalidArgumentError$5('signal must be an EventEmitter or EventTarget');
          }
          if (method === 'CONNECT') {
            throw new InvalidArgumentError$5('invalid method');
          }
          if (onInfo && typeof onInfo !== 'function') {
            throw new InvalidArgumentError$5('invalid onInfo callback');
          }
          super('UNDICI_STREAM');
        } catch (err) {
          if (util$4.isStream(body2)) {
            util$4.destroy(body2.on('error', util$4.nop), err);
          }
          throw err;
        }
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.factory = factory;
        this.callback = callback;
        this.res = null;
        this.abort = null;
        this.context = null;
        this.trailers = null;
        this.body = body2;
        this.onInfo = onInfo || null;
        if (util$4.isStream(body2)) {
          body2.on('error', (err) => {
            this.onError(err);
          });
        }
        addSignal$3(this, signal);
      }
      onConnect(abort2, context) {
        if (!this.callback) {
          throw new RequestAbortedError$3();
        }
        this.abort = abort2;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume2) {
        const { factory, opaque, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers3 =
              this.responseHeaders === 'raw'
                ? util$4.parseRawHeaders(rawHeaders)
                : util$4.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers3 });
          }
          return;
        }
        this.factory = null;
        const headers2 =
          this.responseHeaders === 'raw'
            ? util$4.parseRawHeaders(rawHeaders)
            : util$4.parseHeaders(rawHeaders);
        const res = this.runInAsyncScope(factory, null, {
          statusCode,
          headers: headers2,
          opaque,
          context,
        });
        if (
          !res ||
          typeof res.write !== 'function' ||
          typeof res.end !== 'function' ||
          typeof res.on !== 'function'
        ) {
          throw new InvalidReturnValueError$1('expected Writable');
        }
        res.on('drain', resume2);
        finished(res, { readable: false }, (err) => {
          const { callback, res: res2, opaque: opaque2, trailers, abort: abort2 } = this;
          this.res = null;
          if (err || !res2.readable) {
            util$4.destroy(res2, err);
          }
          this.callback = null;
          this.runInAsyncScope(callback, null, err || null, { opaque: opaque2, trailers });
          if (err) {
            abort2();
          }
        });
        this.res = res;
        const needDrain =
          res.writableNeedDrain !== void 0
            ? res.writableNeedDrain
            : res._writableState && res._writableState.needDrain;
        return needDrain !== true;
      }
      onData(chunk) {
        const { res } = this;
        return res.write(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        removeSignal$3(this);
        this.trailers = util$4.parseHeaders(trailers);
        res.end();
      }
      onError(err) {
        const { res, callback, opaque, body: body2 } = this;
        removeSignal$3(this);
        this.factory = null;
        if (res) {
          this.res = null;
          util$4.destroy(res, err);
        } else if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
        if (body2) {
          this.body = null;
          util$4.destroy(body2, err);
        }
      }
    };
    apiStream = stream;
    ({ Readable, Duplex, PassThrough } = import_stream.default);
    ({
      InvalidArgumentError: InvalidArgumentError$4,
      InvalidReturnValueError,
      RequestAbortedError: RequestAbortedError$2,
    } = errors$1);
    util$3 = util$e;
    ({ AsyncResource: AsyncResource$2 } = import_async_hooks.default);
    ({ addSignal: addSignal$2, removeSignal: removeSignal$2 } = abortSignal);
    assert$1 = import_assert.default;
    kResume = Symbol('resume');
    PipelineRequest = class extends Readable {
      constructor() {
        super({ autoDestroy: true });
        this[kResume] = null;
      }
      _read() {
        const { [kResume]: resume2 } = this;
        if (resume2) {
          this[kResume] = null;
          resume2();
        }
      }
      _destroy(err, callback) {
        this._read();
        callback(err);
      }
    };
    PipelineResponse = class extends Readable {
      constructor(resume2) {
        super({ autoDestroy: true });
        this[kResume] = resume2;
      }
      _read() {
        this[kResume]();
      }
      _destroy(err, callback) {
        if (!err && !this._readableState.endEmitted) {
          err = new RequestAbortedError$2();
        }
        callback(err);
      }
    };
    PipelineHandler = class extends AsyncResource$2 {
      constructor(opts, handler) {
        if (!opts || typeof opts !== 'object') {
          throw new InvalidArgumentError$4('invalid opts');
        }
        if (typeof handler !== 'function') {
          throw new InvalidArgumentError$4('invalid handler');
        }
        const { signal, method, opaque, onInfo, responseHeaders } = opts;
        if (
          signal &&
          typeof signal.on !== 'function' &&
          typeof signal.addEventListener !== 'function'
        ) {
          throw new InvalidArgumentError$4('signal must be an EventEmitter or EventTarget');
        }
        if (method === 'CONNECT') {
          throw new InvalidArgumentError$4('invalid method');
        }
        if (onInfo && typeof onInfo !== 'function') {
          throw new InvalidArgumentError$4('invalid onInfo callback');
        }
        super('UNDICI_PIPELINE');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.handler = handler;
        this.abort = null;
        this.context = null;
        this.onInfo = onInfo || null;
        this.req = new PipelineRequest().on('error', util$3.nop);
        this.ret = new Duplex({
          readableObjectMode: opts.objectMode,
          autoDestroy: true,
          read: () => {
            const { body: body2 } = this;
            if (body2 && body2.resume) {
              body2.resume();
            }
          },
          write: (chunk, encoding, callback) => {
            const { req } = this;
            if (req.push(chunk, encoding) || req._readableState.destroyed) {
              callback();
            } else {
              req[kResume] = callback;
            }
          },
          destroy: (err, callback) => {
            const { body: body2, req, res, ret, abort: abort2 } = this;
            if (!err && !ret._readableState.endEmitted) {
              err = new RequestAbortedError$2();
            }
            if (abort2 && err) {
              abort2();
            }
            util$3.destroy(body2, err);
            util$3.destroy(req, err);
            util$3.destroy(res, err);
            removeSignal$2(this);
            callback(err);
          },
        }).on('prefinish', () => {
          const { req } = this;
          req.push(null);
        });
        this.res = null;
        addSignal$2(this, signal);
      }
      onConnect(abort2, context) {
        const { ret, res } = this;
        assert$1(!res, 'pipeline cannot be retried');
        if (ret.destroyed) {
          throw new RequestAbortedError$2();
        }
        this.abort = abort2;
        this.context = context;
      }
      onHeaders(statusCode, rawHeaders, resume2) {
        const { opaque, handler, context } = this;
        if (statusCode < 200) {
          if (this.onInfo) {
            const headers2 =
              this.responseHeaders === 'raw'
                ? util$3.parseRawHeaders(rawHeaders)
                : util$3.parseHeaders(rawHeaders);
            this.onInfo({ statusCode, headers: headers2 });
          }
          return;
        }
        this.res = new PipelineResponse(resume2);
        let body2;
        try {
          this.handler = null;
          const headers2 =
            this.responseHeaders === 'raw'
              ? util$3.parseRawHeaders(rawHeaders)
              : util$3.parseHeaders(rawHeaders);
          body2 = this.runInAsyncScope(handler, null, {
            statusCode,
            headers: headers2,
            opaque,
            body: this.res,
            context,
          });
        } catch (err) {
          this.res.on('error', util$3.nop);
          throw err;
        }
        if (!body2 || typeof body2.on !== 'function') {
          throw new InvalidReturnValueError('expected Readable');
        }
        body2
          .on('data', (chunk) => {
            const { ret, body: body3 } = this;
            if (!ret.push(chunk) && body3.pause) {
              body3.pause();
            }
          })
          .on('error', (err) => {
            const { ret } = this;
            util$3.destroy(ret, err);
          })
          .on('end', () => {
            const { ret } = this;
            ret.push(null);
          })
          .on('close', () => {
            const { ret } = this;
            if (!ret._readableState.ended) {
              util$3.destroy(ret, new RequestAbortedError$2());
            }
          });
        this.body = body2;
      }
      onData(chunk) {
        const { res } = this;
        return res.push(chunk);
      }
      onComplete(trailers) {
        const { res } = this;
        res.push(null);
      }
      onError(err) {
        const { ret } = this;
        this.handler = null;
        util$3.destroy(ret, err);
      }
    };
    apiPipeline = pipeline;
    ({
      InvalidArgumentError: InvalidArgumentError$3,
      RequestAbortedError: RequestAbortedError$1,
      SocketError: SocketError$1,
    } = errors$1);
    ({ AsyncResource: AsyncResource$1 } = import_async_hooks.default);
    util$2 = util$e;
    ({ addSignal: addSignal$1, removeSignal: removeSignal$1 } = abortSignal);
    assert = import_assert.default;
    UpgradeHandler = class extends AsyncResource$1 {
      constructor(opts, callback) {
        if (!opts || typeof opts !== 'object') {
          throw new InvalidArgumentError$3('invalid opts');
        }
        if (typeof callback !== 'function') {
          throw new InvalidArgumentError$3('invalid callback');
        }
        const { signal, opaque, responseHeaders } = opts;
        if (
          signal &&
          typeof signal.on !== 'function' &&
          typeof signal.addEventListener !== 'function'
        ) {
          throw new InvalidArgumentError$3('signal must be an EventEmitter or EventTarget');
        }
        super('UNDICI_UPGRADE');
        this.responseHeaders = responseHeaders || null;
        this.opaque = opaque || null;
        this.callback = callback;
        this.abort = null;
        this.context = null;
        addSignal$1(this, signal);
      }
      onConnect(abort2, context) {
        if (!this.callback) {
          throw new RequestAbortedError$1();
        }
        this.abort = abort2;
        this.context = null;
      }
      onHeaders() {
        throw new SocketError$1('bad upgrade', null);
      }
      onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        assert.strictEqual(statusCode, 101);
        removeSignal$1(this);
        this.callback = null;
        const headers2 =
          this.responseHeaders === 'raw'
            ? util$2.parseRawHeaders(rawHeaders)
            : util$2.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
          headers: headers2,
          socket,
          opaque,
          context,
        });
      }
      onError(err) {
        const { callback, opaque } = this;
        removeSignal$1(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
      }
    };
    apiUpgrade = upgrade;
    ({ InvalidArgumentError: InvalidArgumentError$2, RequestAbortedError, SocketError } = errors$1);
    ({ AsyncResource } = import_async_hooks.default);
    util$1 = util$e;
    ({ addSignal, removeSignal } = abortSignal);
    ConnectHandler = class extends AsyncResource {
      constructor(opts, callback) {
        if (!opts || typeof opts !== 'object') {
          throw new InvalidArgumentError$2('invalid opts');
        }
        if (typeof callback !== 'function') {
          throw new InvalidArgumentError$2('invalid callback');
        }
        const { signal, opaque, responseHeaders } = opts;
        if (
          signal &&
          typeof signal.on !== 'function' &&
          typeof signal.addEventListener !== 'function'
        ) {
          throw new InvalidArgumentError$2('signal must be an EventEmitter or EventTarget');
        }
        super('UNDICI_CONNECT');
        this.opaque = opaque || null;
        this.responseHeaders = responseHeaders || null;
        this.callback = callback;
        this.abort = null;
        addSignal(this, signal);
      }
      onConnect(abort2, context) {
        if (!this.callback) {
          throw new RequestAbortedError();
        }
        this.abort = abort2;
        this.context = context;
      }
      onHeaders() {
        throw new SocketError('bad connect', null);
      }
      onUpgrade(statusCode, rawHeaders, socket) {
        const { callback, opaque, context } = this;
        removeSignal(this);
        this.callback = null;
        const headers2 =
          this.responseHeaders === 'raw'
            ? util$1.parseRawHeaders(rawHeaders)
            : util$1.parseHeaders(rawHeaders);
        this.runInAsyncScope(callback, null, null, {
          statusCode,
          headers: headers2,
          socket,
          opaque,
          context,
        });
      }
      onError(err) {
        const { callback, opaque } = this;
        removeSignal(this);
        if (callback) {
          this.callback = null;
          queueMicrotask(() => {
            this.runInAsyncScope(callback, null, err, { opaque });
          });
        }
      }
    };
    apiConnect = connect;
    api$1.request = apiRequest;
    api$1.stream = apiStream;
    api$1.pipeline = apiPipeline;
    api$1.upgrade = apiUpgrade;
    api$1.connect = apiConnect;
    globalDispatcher = Symbol.for('undici.globalDispatcher.1');
    ({ InvalidArgumentError: InvalidArgumentError$1 } = errors$1);
    Agent = agent;
    if (getGlobalDispatcher$1() === void 0) {
      setGlobalDispatcher$1(new Agent());
    }
    global2 = {
      setGlobalDispatcher: setGlobalDispatcher$1,
      getGlobalDispatcher: getGlobalDispatcher$1,
    };
    Dispatcher = dispatcher;
    errors = errors$1;
    util = util$e;
    ({ InvalidArgumentError } = errors);
    api = api$1;
    ({ getGlobalDispatcher, setGlobalDispatcher } = global2);
    nodeVersion = process.versions.node.split('.');
    nodeMajor = Number(nodeVersion[0]);
    nodeMinor = Number(nodeVersion[1]);
    Object.assign(Dispatcher.prototype, api);
    if (nodeMajor > 16 || (nodeMajor === 16 && nodeMinor >= 5)) {
      let fetchImpl = null;
      fetch2 = async function fetch3(resource) {
        if (!fetchImpl) {
          fetchImpl = requireFetch();
        }
        const dispatcher2 = (arguments[1] && arguments[1].dispatcher) || getGlobalDispatcher();
        return fetchImpl.apply(dispatcher2, arguments);
      };
      Headers2 = requireHeaders().Headers;
      Response2 = requireResponse().Response;
      Request2 = requireRequest().Request;
      requireFormdata().FormData;
      requireFile().File;
    }
    makeDispatcher(api.request);
    makeDispatcher(api.stream);
    makeDispatcher(api.pipeline);
    makeDispatcher(api.connect);
    makeDispatcher(api.upgrade);
    globals = {
      crypto: import_crypto.webcrypto,
      fetch: fetch2,
      Response: Response2,
      Request: Request2,
      Headers: Headers2,
      ReadableStream: import_web.ReadableStream,
      TransformStream: import_web.TransformStream,
      WritableStream: import_web.WritableStream,
    };
  },
});

// node_modules/.pnpm/svelte-adapter-firebase@0.14.1_o2hu26wxdktufucuf4m4t4a7ty/node_modules/svelte-adapter-firebase/src/files/shims.js
var init_shims = __esm({
  'node_modules/.pnpm/svelte-adapter-firebase@0.14.1_o2hu26wxdktufucuf4m4t4a7ty/node_modules/svelte-adapter-firebase/src/files/shims.js'() {
    init_polyfills();
    installPolyfills();
  },
});

// .svelte-kit/output/server/immutable/chunks/index-2a008567.js
function noop() {}
function run(fn) {
  return fn();
}
function blank_object() {
  return /* @__PURE__ */ Object.create(null);
}
function run_all(fns) {
  fns.forEach(run);
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0) raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0) raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add((task = { c: callback, f: fulfill }));
    }),
    abort() {
      tasks.delete(task);
    },
  };
}
function set_current_component(component) {
  current_component = component;
}
function get_current_component() {
  if (!current_component) throw new Error('Function called outside component initialization');
  return current_component;
}
function setContext(key2, context) {
  get_current_component().$$.context.set(key2, context);
  return context;
}
function getContext(key2) {
  return get_current_component().$$.context.get(key2);
}
function escape(value, is_attr = false) {
  const str = String(value);
  const pattern = is_attr ? ATTR_REGEX : CONTENT_REGEX;
  pattern.lastIndex = 0;
  let escaped2 = '';
  let last = 0;
  while (pattern.test(str)) {
    const i = pattern.lastIndex - 1;
    const ch = str[i];
    escaped2 += str.substring(last, i) + (ch === '&' ? '&amp;' : ch === '"' ? '&quot;' : '&lt;');
    last = i + 1;
  }
  return escaped2 + str.substring(last);
}
function each(items, fn) {
  let str = '';
  for (let i = 0; i < items.length; i += 1) {
    str += fn(items[i], i);
  }
  return str;
}
function validate_component(component, name) {
  if (!component || !component.$$render) {
    if (name === 'svelte:component') name += ' this={...}';
    throw new Error(
      `<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`
    );
  }
  return component;
}
function create_ssr_component(fn) {
  function $$render(result, props, bindings, slots, context) {
    const parent_component = current_component;
    const $$ = {
      on_destroy,
      context: new Map(context || (parent_component ? parent_component.$$.context : [])),
      on_mount: [],
      before_update: [],
      after_update: [],
      callbacks: blank_object(),
    };
    set_current_component({ $$ });
    const html = fn(result, props, bindings, slots);
    set_current_component(parent_component);
    return html;
  }
  return {
    render: (props = {}, { $$slots = {}, context = /* @__PURE__ */ new Map() } = {}) => {
      on_destroy = [];
      const result = { title: '', head: '', css: /* @__PURE__ */ new Set() };
      const html = $$render(result, props, {}, $$slots, context);
      run_all(on_destroy);
      return {
        html,
        css: {
          code: Array.from(result.css)
            .map((css5) => css5.code)
            .join('\n'),
          map: null,
        },
        head: result.title + result.head,
      };
    },
    $$render,
  };
}
function add_attribute(name, value, boolean) {
  if (value == null || (boolean && !value)) return '';
  const assignment = boolean && value === true ? '' : `="${escape(value, true)}"`;
  return ` ${name}${assignment}`;
}
var is_client,
  now,
  raf,
  tasks,
  current_component,
  ATTR_REGEX,
  CONTENT_REGEX,
  missing_component,
  on_destroy;
var init_index_2a008567 = __esm({
  '.svelte-kit/output/server/immutable/chunks/index-2a008567.js'() {
    init_shims();
    is_client = typeof window !== 'undefined';
    now = is_client ? () => window.performance.now() : () => Date.now();
    raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
    tasks = /* @__PURE__ */ new Set();
    Promise.resolve();
    ATTR_REGEX = /[&"]/g;
    CONTENT_REGEX = /[&<]/g;
    missing_component = {
      $$render: () => '',
    };
  },
});

// node_modules/.pnpm/cookie@0.4.2/node_modules/cookie/index.js
var require_cookie = __commonJS({
  'node_modules/.pnpm/cookie@0.4.2/node_modules/cookie/index.js'(exports) {
    'use strict';
    init_shims();
    exports.parse = parse3;
    exports.serialize = serialize3;
    var decode2 = decodeURIComponent;
    var encode3 = encodeURIComponent;
    var fieldContentRegExp2 = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
    function parse3(str, options) {
      if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
      }
      var obj = {};
      var opt = options || {};
      var pairs = str.split(';');
      var dec = opt.decode || decode2;
      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];
        var index6 = pair.indexOf('=');
        if (index6 < 0) {
          continue;
        }
        var key2 = pair.substring(0, index6).trim();
        if (void 0 == obj[key2]) {
          var val = pair.substring(index6 + 1, pair.length).trim();
          if (val[0] === '"') {
            val = val.slice(1, -1);
          }
          obj[key2] = tryDecode2(val, dec);
        }
      }
      return obj;
    }
    function serialize3(name, val, options) {
      var opt = options || {};
      var enc = opt.encode || encode3;
      if (typeof enc !== 'function') {
        throw new TypeError('option encode is invalid');
      }
      if (!fieldContentRegExp2.test(name)) {
        throw new TypeError('argument name is invalid');
      }
      var value = enc(val);
      if (value && !fieldContentRegExp2.test(value)) {
        throw new TypeError('argument val is invalid');
      }
      var str = name + '=' + value;
      if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
          throw new TypeError('option maxAge is invalid');
        }
        str += '; Max-Age=' + Math.floor(maxAge);
      }
      if (opt.domain) {
        if (!fieldContentRegExp2.test(opt.domain)) {
          throw new TypeError('option domain is invalid');
        }
        str += '; Domain=' + opt.domain;
      }
      if (opt.path) {
        if (!fieldContentRegExp2.test(opt.path)) {
          throw new TypeError('option path is invalid');
        }
        str += '; Path=' + opt.path;
      }
      if (opt.expires) {
        if (typeof opt.expires.toUTCString !== 'function') {
          throw new TypeError('option expires is invalid');
        }
        str += '; Expires=' + opt.expires.toUTCString();
      }
      if (opt.httpOnly) {
        str += '; HttpOnly';
      }
      if (opt.secure) {
        str += '; Secure';
      }
      if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch (sameSite) {
          case true:
            str += '; SameSite=Strict';
            break;
          case 'lax':
            str += '; SameSite=Lax';
            break;
          case 'strict':
            str += '; SameSite=Strict';
            break;
          case 'none':
            str += '; SameSite=None';
            break;
          default:
            throw new TypeError('option sameSite is invalid');
        }
      }
      return str;
    }
    function tryDecode2(str, decode3) {
      try {
        return decode3(str);
      } catch (e) {
        return str;
      }
    }
  },
});

// .svelte-kit/output/server/immutable/chunks/hooks-ea7275a5.js
var hooks_ea7275a5_exports = {};
__export(hooks_ea7275a5_exports, {
  handle: () => handle,
});
var cookie, handle;
var init_hooks_ea7275a5 = __esm({
  '.svelte-kit/output/server/immutable/chunks/hooks-ea7275a5.js'() {
    init_shims();
    cookie = __toESM(require_cookie(), 1);
    handle = async ({ event, resolve: resolve2 }) => {
      const cookies = cookie.parse(event.request.headers.get('cookie') || '');
      event.locals.userid = cookies['userid'] || crypto.randomUUID();
      const response2 = await resolve2(event);
      if (!cookies['userid']) {
        response2.headers.set(
          'set-cookie',
          cookie.serialize('userid', event.locals.userid, {
            path: '/',
            httpOnly: true,
          })
        );
      }
      return response2;
    };
  },
});

// .svelte-kit/output/server/entries/pages/__layout.svelte.js
var layout_svelte_exports = {};
__export(layout_svelte_exports, {
  default: () => _layout,
});
var getStores, page, logo, css$1, Header, css, _layout;
var init_layout_svelte = __esm({
  '.svelte-kit/output/server/entries/pages/__layout.svelte.js'() {
    init_shims();
    init_index_2a008567();
    getStores = () => {
      const stores = getContext('__svelte__');
      return {
        page: {
          subscribe: stores.page.subscribe,
        },
        navigating: {
          subscribe: stores.navigating.subscribe,
        },
        get preloading() {
          console.error('stores.preloading is deprecated; use stores.navigating instead');
          return {
            subscribe: stores.navigating.subscribe,
          };
        },
        session: stores.session,
        updated: stores.updated,
      };
    };
    page = {
      subscribe(fn) {
        const store = getStores().page;
        return store.subscribe(fn);
      },
    };
    logo = '/_app/immutable/assets/svelte-logo-87df40b8.svg';
    css$1 = {
      code: "header.svelte-t2wq17.svelte-t2wq17{display:flex;justify-content:space-between}.corner.svelte-t2wq17.svelte-t2wq17{width:3em;height:3em}.corner.svelte-t2wq17 a.svelte-t2wq17{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.corner.svelte-t2wq17 img.svelte-t2wq17{width:2em;height:2em;object-fit:contain}nav.svelte-t2wq17.svelte-t2wq17{display:flex;justify-content:center;--background:rgba(255, 255, 255, 0.7)}svg.svelte-t2wq17.svelte-t2wq17{width:2em;height:3em;display:block}path.svelte-t2wq17.svelte-t2wq17{fill:var(--background)}ul.svelte-t2wq17.svelte-t2wq17{position:relative;padding:0;margin:0;height:3em;display:flex;justify-content:center;align-items:center;list-style:none;background:var(--background);background-size:contain}li.svelte-t2wq17.svelte-t2wq17{position:relative;height:100%}li.active.svelte-t2wq17.svelte-t2wq17::before{--size:6px;content:'';width:0;height:0;position:absolute;top:0;left:calc(50% - var(--size));border:var(--size) solid transparent;border-top:var(--size) solid var(--accent-color)}nav.svelte-t2wq17 a.svelte-t2wq17{display:flex;height:100%;align-items:center;padding:0 1em;color:var(--heading-color);font-weight:700;font-size:0.8rem;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;transition:color 0.2s linear}a.svelte-t2wq17.svelte-t2wq17:hover{color:var(--accent-color)}",
      map: null,
    };
    Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let $page, $$unsubscribe_page;
      $$unsubscribe_page = subscribe(page, (value) => ($page = value));
      $$result.css.add(css$1);
      $$unsubscribe_page();
      return `<header class="${'svelte-t2wq17'}"><div class="${'corner svelte-t2wq17'}"><a href="${'https://kit.svelte.dev'}" class="${'svelte-t2wq17'}"><img${add_attribute(
        'src',
        logo,
        0
      )} alt="${'SvelteKit'}" class="${'svelte-t2wq17'}"></a></div>

	<nav class="${'svelte-t2wq17'}"><svg viewBox="${'0 0 2 3'}" aria-hidden="${'true'}" class="${'svelte-t2wq17'}"><path d="${'M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z'}" class="${'svelte-t2wq17'}"></path></svg>
		<ul class="${'svelte-t2wq17'}"><li class="${[
        'svelte-t2wq17',
        $page.url.pathname === '/' ? 'active' : '',
      ]
        .join(' ')
        .trim()}"><a sveltekit:prefetch href="${'/'}" class="${'svelte-t2wq17'}">Home</a></li>
			<li class="${['svelte-t2wq17', $page.url.pathname === '/about' ? 'active' : '']
        .join(' ')
        .trim()}"><a sveltekit:prefetch href="${'/about'}" class="${'svelte-t2wq17'}">About</a></li>
			<li class="${['svelte-t2wq17', $page.url.pathname === '/todos' ? 'active' : '']
        .join(' ')
        .trim()}"><a sveltekit:prefetch href="${'/todos'}" class="${'svelte-t2wq17'}">Todos</a></li></ul>
		<svg viewBox="${'0 0 2 3'}" aria-hidden="${'true'}" class="${'svelte-t2wq17'}"><path d="${'M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z'}" class="${'svelte-t2wq17'}"></path></svg></nav>

	<div class="${'corner svelte-t2wq17'}"></div>
</header>`;
    });
    css = {
      code: 'main.svelte-1izrdc8.svelte-1izrdc8{flex:1;display:flex;flex-direction:column;padding:1rem;width:100%;max-width:1024px;margin:0 auto;box-sizing:border-box}footer.svelte-1izrdc8.svelte-1izrdc8{display:flex;flex-direction:column;justify-content:center;align-items:center;padding:40px}footer.svelte-1izrdc8 a.svelte-1izrdc8{font-weight:bold}@media(min-width: 480px){footer.svelte-1izrdc8.svelte-1izrdc8{padding:40px 0}}',
      map: null,
    };
    _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css);
      return `${validate_component(Header, 'Header').$$render($$result, {}, {}, {})}

<main class="${'svelte-1izrdc8'}">${slots.default ? slots.default({}) : ``}</main>

<footer class="${'svelte-1izrdc8'}"><p>visit <a href="${'https://kit.svelte.dev'}" class="${'svelte-1izrdc8'}">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>`;
    });
  },
});

// .svelte-kit/output/server/nodes/0.js
var __exports = {};
__export(__exports, {
  file: () => file2,
  imports: () => imports,
  index: () => index,
  module: () => layout_svelte_exports,
  stylesheets: () => stylesheets,
});
var index, file2, imports, stylesheets;
var init__ = __esm({
  '.svelte-kit/output/server/nodes/0.js'() {
    init_shims();
    init_layout_svelte();
    index = 0;
    file2 = 'immutable/pages/__layout.svelte-ce5d2a59.js';
    imports = ['immutable/pages/__layout.svelte-ce5d2a59.js', 'immutable/chunks/index-8e439f9d.js'];
    stylesheets = ['immutable/assets/__layout-f74aac7c.css'];
  },
});

// .svelte-kit/output/server/entries/fallbacks/error.svelte.js
var error_svelte_exports = {};
__export(error_svelte_exports, {
  default: () => Error2,
  load: () => load,
});
function load({ error: error2, status }) {
  return { props: { error: error2, status } };
}
var Error2;
var init_error_svelte = __esm({
  '.svelte-kit/output/server/entries/fallbacks/error.svelte.js'() {
    init_shims();
    init_index_2a008567();
    Error2 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { status } = $$props;
      let { error: error2 } = $$props;
      if ($$props.status === void 0 && $$bindings.status && status !== void 0)
        $$bindings.status(status);
      if ($$props.error === void 0 && $$bindings.error && error2 !== void 0)
        $$bindings.error(error2);
      return `<h1>${escape(status)}</h1>

<pre>${escape(error2.message)}</pre>



${error2.frame ? `<pre>${escape(error2.frame)}</pre>` : ``}
${error2.stack ? `<pre>${escape(error2.stack)}</pre>` : ``}`;
    });
  },
});

// .svelte-kit/output/server/nodes/1.js
var __exports2 = {};
__export(__exports2, {
  file: () => file3,
  imports: () => imports2,
  index: () => index2,
  module: () => error_svelte_exports,
  stylesheets: () => stylesheets2,
});
var index2, file3, imports2, stylesheets2;
var init__2 = __esm({
  '.svelte-kit/output/server/nodes/1.js'() {
    init_shims();
    init_error_svelte();
    index2 = 1;
    file3 = 'immutable/error.svelte-97b82ad0.js';
    imports2 = ['immutable/error.svelte-97b82ad0.js', 'immutable/chunks/index-8e439f9d.js'];
    stylesheets2 = [];
  },
});

// .svelte-kit/output/server/entries/pages/index.svelte.js
var index_svelte_exports = {};
__export(index_svelte_exports, {
  default: () => Routes,
  prerender: () => prerender,
});
function writable2(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue2.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue2.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue2.length; i += 2) {
            subscriber_queue2[i][0](subscriber_queue2[i + 1]);
          }
          subscriber_queue2.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function is_date(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === 'number' || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) =>
      tick_spring(ctx, last_value[i], current_value[i], target_value[i])
    );
  } else if (typeof current_value === 'object') {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable2(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = (current_token = {});
    if (value == null || opts2.hard || (spring2.stiffness >= 1 && spring2.damping >= 1)) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set((value = target_value));
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: ((now2 - last_time) * 60) / 1e3,
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set((value = next_value));
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token) fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision,
  };
  return spring2;
}
function modulo(n, m) {
  return ((n % m) + m) % m;
}
var subscriber_queue2, css$12, Counter, css2, prerender, Routes;
var init_index_svelte = __esm({
  '.svelte-kit/output/server/entries/pages/index.svelte.js'() {
    init_shims();
    init_index_2a008567();
    subscriber_queue2 = [];
    css$12 = {
      code: '.counter.svelte-sx9eo4.svelte-sx9eo4{display:flex;border-top:1px solid rgba(0, 0, 0, 0.1);border-bottom:1px solid rgba(0, 0, 0, 0.1);margin:1rem 0}.counter.svelte-sx9eo4 button.svelte-sx9eo4{width:2em;padding:0;display:flex;align-items:center;justify-content:center;border:0;background-color:transparent;touch-action:manipulation;color:var(--text-color);font-size:2rem}.counter.svelte-sx9eo4 button.svelte-sx9eo4:hover{background-color:var(--secondary-color)}svg.svelte-sx9eo4.svelte-sx9eo4{width:25%;height:25%}path.svelte-sx9eo4.svelte-sx9eo4{vector-effect:non-scaling-stroke;stroke-width:2px;stroke:var(--text-color)}.counter-viewport.svelte-sx9eo4.svelte-sx9eo4{width:8em;height:4em;overflow:hidden;text-align:center;position:relative}.counter-viewport.svelte-sx9eo4 strong.svelte-sx9eo4{position:absolute;display:flex;width:100%;height:100%;font-weight:400;color:var(--accent-color);font-size:4rem;align-items:center;justify-content:center}.counter-digits.svelte-sx9eo4.svelte-sx9eo4{position:absolute;width:100%;height:100%}.hidden.svelte-sx9eo4.svelte-sx9eo4{top:-100%;user-select:none}',
      map: null,
    };
    Counter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let offset;
      let $displayed_count, $$unsubscribe_displayed_count;
      let count = 0;
      const displayed_count = spring();
      $$unsubscribe_displayed_count = subscribe(
        displayed_count,
        (value) => ($displayed_count = value)
      );
      $$result.css.add(css$12);
      {
        displayed_count.set(count);
      }
      offset = modulo($displayed_count, 1);
      $$unsubscribe_displayed_count();
      return `<div class="${'counter svelte-sx9eo4'}"><button aria-label="${'Decrease the counter by one'}" class="${'svelte-sx9eo4'}"><svg aria-hidden="${'true'}" viewBox="${'0 0 1 1'}" class="${'svelte-sx9eo4'}"><path d="${'M0,0.5 L1,0.5'}" class="${'svelte-sx9eo4'}"></path></svg></button>

	<div class="${'counter-viewport svelte-sx9eo4'}"><div class="${'counter-digits svelte-sx9eo4'}" style="${
        'transform: translate(0, ' + escape(100 * offset, true) + '%)'
      }"><strong class="${'hidden svelte-sx9eo4'}" aria-hidden="${'true'}">${escape(
        Math.floor($displayed_count + 1)
      )}</strong>
			<strong class="${'svelte-sx9eo4'}">${escape(Math.floor($displayed_count))}</strong></div></div>

	<button aria-label="${'Increase the counter by one'}" class="${'svelte-sx9eo4'}"><svg aria-hidden="${'true'}" viewBox="${'0 0 1 1'}" class="${'svelte-sx9eo4'}"><path d="${'M0,0.5 L1,0.5 M0.5,0 L0.5,1'}" class="${'svelte-sx9eo4'}"></path></svg></button>
</div>`;
    });
    css2 = {
      code: 'section.svelte-1egtvge.svelte-1egtvge{display:flex;flex-direction:column;justify-content:center;align-items:center;flex:1}h1.svelte-1egtvge.svelte-1egtvge{width:100%}.welcome.svelte-1egtvge.svelte-1egtvge{display:block;position:relative;width:100%;height:0;padding:0 0 calc(100% * 495 / 2048) 0}.welcome.svelte-1egtvge img.svelte-1egtvge{position:absolute;width:100%;height:100%;top:0;display:block}',
      map: null,
    };
    prerender = true;
    Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css2);
      return `${
        (($$result.head += `${
          (($$result.title = `<title>Home</title>`), '')
        }<meta name="${'description'}" content="${'Svelte demo app'}" data-svelte="svelte-t32ptj">`),
        '')
      }

<section class="${'svelte-1egtvge'}"><h1 class="${'svelte-1egtvge'}"><span class="${'welcome svelte-1egtvge'}"><picture><source srcset="${'svelte-welcome.webp'}" type="${'image/webp'}">
				<img src="${'svelte-welcome.png'}" alt="${'Welcome'}" class="${'svelte-1egtvge'}"></picture></span>

		to your new<br>SvelteKit app
	</h1>

	<h2>try editing <strong>src/routes/index.svelte</strong></h2>

	${validate_component(Counter, 'Counter').$$render($$result, {}, {}, {})}
</section>`;
    });
  },
});

// .svelte-kit/output/server/nodes/3.js
var __exports3 = {};
__export(__exports3, {
  file: () => file4,
  imports: () => imports3,
  index: () => index3,
  module: () => index_svelte_exports,
  stylesheets: () => stylesheets3,
});
var index3, file4, imports3, stylesheets3;
var init__3 = __esm({
  '.svelte-kit/output/server/nodes/3.js'() {
    init_shims();
    init_index_svelte();
    index3 = 3;
    file4 = 'immutable/pages/index.svelte-0db1dc7b.js';
    imports3 = [
      'immutable/pages/index.svelte-0db1dc7b.js',
      'immutable/chunks/index-8e439f9d.js',
      'immutable/chunks/index-804f213c.js',
    ];
    stylesheets3 = ['immutable/assets/index-8bad58d3.css'];
  },
});

// .svelte-kit/output/server/entries/pages/about.svelte.js
var about_svelte_exports = {};
__export(about_svelte_exports, {
  default: () => About,
  hydrate: () => hydrate,
  prerender: () => prerender2,
  router: () => router,
});
var browser, dev, css3, hydrate, router, prerender2, About;
var init_about_svelte = __esm({
  '.svelte-kit/output/server/entries/pages/about.svelte.js'() {
    init_shims();
    init_index_2a008567();
    browser = false;
    dev = false;
    css3 = {
      code: '.content.svelte-cf77e8{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto}',
      map: null,
    };
    hydrate = dev;
    router = browser;
    prerender2 = true;
    About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      $$result.css.add(css3);
      return `${
        (($$result.head += `${
          (($$result.title = `<title>About</title>`), '')
        }<meta name="${'description'}" content="${'About this app'}" data-svelte="svelte-1ds1qyu">`),
        '')
      }

<div class="${'content svelte-cf77e8'}"><h1>About this app</h1>

	<p>This is a <a href="${'https://kit.svelte.dev'}">SvelteKit</a> app. You can make your own by typing the
		following into your command line and following the prompts:
	</p>

	<pre>npm create svelte@latest</pre>

	<p>The page you&#39;re looking at is purely static HTML, with no client-side interactivity needed.
		Because of that, we don&#39;t need to load any JavaScript. Try viewing the page&#39;s source, or opening
		the devtools network panel and reloading.
	</p>

	<p>The <a href="${'/todos'}">TODOs</a> page illustrates SvelteKit&#39;s data loading and form handling. Try using
		it with JavaScript disabled!
	</p>
</div>`;
    });
  },
});

// .svelte-kit/output/server/nodes/2.js
var __exports4 = {};
__export(__exports4, {
  file: () => file5,
  imports: () => imports4,
  index: () => index4,
  module: () => about_svelte_exports,
  stylesheets: () => stylesheets4,
});
var index4, file5, imports4, stylesheets4;
var init__4 = __esm({
  '.svelte-kit/output/server/nodes/2.js'() {
    init_shims();
    init_about_svelte();
    index4 = 2;
    file5 = 'immutable/pages/about.svelte-23496a99.js';
    imports4 = ['immutable/pages/about.svelte-23496a99.js', 'immutable/chunks/index-8e439f9d.js'];
    stylesheets4 = ['immutable/assets/about-9682aba9.css'];
  },
});

// .svelte-kit/output/server/entries/pages/todos/index.svelte.js
var index_svelte_exports2 = {};
__export(index_svelte_exports2, {
  default: () => Todos,
});
var css4, Todos;
var init_index_svelte2 = __esm({
  '.svelte-kit/output/server/entries/pages/todos/index.svelte.js'() {
    init_shims();
    init_index_2a008567();
    css4 = {
      code: `.todos.svelte-16nsat.svelte-16nsat.svelte-16nsat{width:100%;max-width:var(--column-width);margin:var(--column-margin-top) auto 0 auto;line-height:1}.new.svelte-16nsat.svelte-16nsat.svelte-16nsat{margin:0 0 0.5rem 0}input.svelte-16nsat.svelte-16nsat.svelte-16nsat{border:1px solid transparent}input.svelte-16nsat.svelte-16nsat.svelte-16nsat:focus-visible{box-shadow:inset 1px 1px 6px rgba(0, 0, 0, 0.1);border:1px solid #ff3e00 !important;outline:none}.new.svelte-16nsat input.svelte-16nsat.svelte-16nsat{font-size:28px;width:100%;padding:0.5em 1em 0.3em 1em;box-sizing:border-box;background:rgba(255, 255, 255, 0.05);border-radius:8px;text-align:center}.todo.svelte-16nsat.svelte-16nsat.svelte-16nsat{display:grid;grid-template-columns:2rem 1fr 2rem;grid-gap:0.5rem;align-items:center;margin:0 0 0.5rem 0;padding:0.5rem;background-color:white;border-radius:8px;filter:drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.1));transform:translate(-1px, -1px);transition:filter 0.2s, transform 0.2s}.done.svelte-16nsat.svelte-16nsat.svelte-16nsat{transform:none;opacity:0.4;filter:drop-shadow(0 0 1px rgba(0, 0, 0, 0.1))}form.text.svelte-16nsat.svelte-16nsat.svelte-16nsat{position:relative;display:flex;align-items:center;flex:1}.todo.svelte-16nsat input.svelte-16nsat.svelte-16nsat{flex:1;padding:0.5em 2em 0.5em 0.8em;border-radius:3px}.todo.svelte-16nsat button.svelte-16nsat.svelte-16nsat{width:2em;height:2em;border:none;background-color:transparent;background-position:50% 50%;background-repeat:no-repeat}button.toggle.svelte-16nsat.svelte-16nsat.svelte-16nsat{border:1px solid rgba(0, 0, 0, 0.2);border-radius:50%;box-sizing:border-box;background-size:1em auto}.done.svelte-16nsat .toggle.svelte-16nsat.svelte-16nsat{background-image:url("data:image/svg+xml,%3Csvg width='22' height='16' viewBox='0 0 22 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 1.5L7.4375 14.5L1.5 8.5909' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-16nsat.svelte-16nsat.svelte-16nsat{background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5V22H19.5V5H4.5Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M14 10V16.5' stroke='white' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5H22' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M8 5L9.6445 2H14.3885L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E%0A");opacity:0.2}.delete.svelte-16nsat.svelte-16nsat.svelte-16nsat:hover,.delete.svelte-16nsat.svelte-16nsat.svelte-16nsat:focus{transition:opacity 0.2s;opacity:1}.save.svelte-16nsat.svelte-16nsat.svelte-16nsat{position:absolute;right:0;opacity:0;background-image:url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2H3.5C2.67158 2 2 2.67157 2 3.5V20.5C2 21.3284 2.67158 22 3.5 22H20.5C21.3284 22 22 21.3284 22 20.5V3.5C22 2.67157 21.3284 2 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2V11H7.5V2H17Z' fill='white' stroke='white' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5V7.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3Cpath d='M5.99844 2H18.4992' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E%0A")}.todo.svelte-16nsat input.svelte-16nsat:focus+.save.svelte-16nsat,.save.svelte-16nsat.svelte-16nsat.svelte-16nsat:focus{transition:opacity 0.2s;opacity:1}`,
      map: null,
    };
    Todos = create_ssr_component(($$result, $$props, $$bindings, slots) => {
      let { todos } = $$props;
      if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0) $$bindings.todos(todos);
      $$result.css.add(css4);
      return `${
        (($$result.head += `${
          (($$result.title = `<title>Todos</title>`), '')
        }<meta name="${'description'}" content="${'A todo list app'}" data-svelte="svelte-aw2gey">`),
        '')
      }

<div class="${'todos svelte-16nsat'}"><h1>Todos</h1>

	<form class="${'new svelte-16nsat'}" action="${'/todos'}" method="${'post'}"><input name="${'text'}" aria-label="${'Add todo'}" placeholder="${'+ tap to add a todo'}" class="${'svelte-16nsat'}"></form>

	${each(todos, (todo) => {
    return `<div class="${['todo svelte-16nsat', todo.done ? 'done' : '']
      .join(' ')
      .trim()}"><form action="${'/todos?_method=PATCH'}" method="${'post'}"><input type="${'hidden'}" name="${'uid'}"${add_attribute(
      'value',
      todo.uid,
      0
    )} class="${'svelte-16nsat'}">
				<input type="${'hidden'}" name="${'done'}"${add_attribute(
      'value',
      todo.done ? '' : 'true',
      0
    )} class="${'svelte-16nsat'}">
				<button class="${'toggle svelte-16nsat'}" aria-label="${
      'Mark todo as ' + escape(todo.done ? 'not done' : 'done', true)
    }"></button></form>

			<form class="${'text svelte-16nsat'}" action="${'/todos?_method=PATCH'}" method="${'post'}"><input type="${'hidden'}" name="${'uid'}"${add_attribute(
      'value',
      todo.uid,
      0
    )} class="${'svelte-16nsat'}">
				<input aria-label="${'Edit todo'}" type="${'text'}" name="${'text'}"${add_attribute(
      'value',
      todo.text,
      0
    )} class="${'svelte-16nsat'}">
				<button class="${'save svelte-16nsat'}" aria-label="${'Save todo'}"></button></form>

			<form action="${'/todos?_method=DELETE'}" method="${'post'}"><input type="${'hidden'}" name="${'uid'}"${add_attribute(
      'value',
      todo.uid,
      0
    )} class="${'svelte-16nsat'}">
				<button class="${'delete svelte-16nsat'}" aria-label="${'Delete todo'}" ${
      todo.pending_delete ? 'disabled' : ''
    }></button></form>
		</div>`;
  })}
</div>`;
    });
  },
});

// .svelte-kit/output/server/nodes/4.js
var __exports5 = {};
__export(__exports5, {
  file: () => file6,
  imports: () => imports5,
  index: () => index5,
  module: () => index_svelte_exports2,
  stylesheets: () => stylesheets5,
});
var index5, file6, imports5, stylesheets5;
var init__5 = __esm({
  '.svelte-kit/output/server/nodes/4.js'() {
    init_shims();
    init_index_svelte2();
    index5 = 4;
    file6 = 'immutable/pages/todos/index.svelte-741a8626.js';
    imports5 = [
      'immutable/pages/todos/index.svelte-741a8626.js',
      'immutable/chunks/index-8e439f9d.js',
      'immutable/chunks/singletons-cdeec3fd.js',
    ];
    stylesheets5 = ['immutable/assets/index-5c3529b5.css'];
  },
});

// .svelte-kit/output/server/entries/endpoints/todos/index.ts.js
var index_ts_exports = {};
__export(index_ts_exports, {
  DELETE: () => DELETE,
  GET: () => GET,
  PATCH: () => PATCH,
  POST: () => POST,
});
function api2(method, resource, data) {
  return fetch(`${base2}/${resource}`, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    body: data && JSON.stringify(data),
  });
}
var base2, GET, POST, redirect2, PATCH, DELETE;
var init_index_ts = __esm({
  '.svelte-kit/output/server/entries/endpoints/todos/index.ts.js'() {
    init_shims();
    base2 = 'https://api.svelte.dev';
    GET = async ({ locals }) => {
      const response2 = await api2('GET', `todos/${locals.userid}`);
      if (response2.status === 404) {
        return {
          body: {
            todos: [],
          },
        };
      }
      if (response2.status === 200) {
        return {
          body: {
            todos: await response2.json(),
          },
        };
      }
      return {
        status: response2.status,
      };
    };
    POST = async ({ request: request2, locals }) => {
      const form = await request2.formData();
      await api2('POST', `todos/${locals.userid}`, {
        text: form.get('text'),
      });
      return {};
    };
    redirect2 = {
      status: 303,
      headers: {
        location: '/todos',
      },
    };
    PATCH = async ({ request: request2, locals }) => {
      const form = await request2.formData();
      await api2('PATCH', `todos/${locals.userid}/${form.get('uid')}`, {
        text: form.has('text') ? form.get('text') : void 0,
        done: form.has('done') ? !!form.get('done') : void 0,
      });
      return redirect2;
    };
    DELETE = async ({ request: request2, locals }) => {
      const form = await request2.formData();
      await api2('DELETE', `todos/${locals.userid}/${form.get('uid')}`);
      return redirect2;
    };
  },
});

// .svelte-kit/.svelte-kit/entry.js
var entry_exports = {};
__export(entry_exports, {
  default: () => svelteKit,
});
module.exports = __toCommonJS(entry_exports);
init_shims();

// .svelte-kit/output/server/index.js
init_shims();
init_index_2a008567();
function afterUpdate() {}
var Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page: page2 } = $$props;
  let { components } = $$props;
  let { props_0 = null } = $$props;
  let { props_1 = null } = $$props;
  let { props_2 = null } = $$props;
  setContext('__svelte__', stores);
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0) $$bindings.page(page2);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.props_0 === void 0 && $$bindings.props_0 && props_0 !== void 0)
    $$bindings.props_0(props_0);
  if ($$props.props_1 === void 0 && $$bindings.props_1 && props_1 !== void 0)
    $$bindings.props_1(props_1);
  if ($$props.props_2 === void 0 && $$bindings.props_2 && props_2 !== void 0)
    $$bindings.props_2(props_2);
  {
    stores.page.set(page2);
  }
  return `


${
  components[1]
    ? `${validate_component(components[0] || missing_component, 'svelte:component').$$render(
        $$result,
        Object.assign(props_0 || {}),
        {},
        {
          default: () => {
            return `${
              components[2]
                ? `${validate_component(
                    components[1] || missing_component,
                    'svelte:component'
                  ).$$render(
                    $$result,
                    Object.assign(props_1 || {}),
                    {},
                    {
                      default: () => {
                        return `${validate_component(
                          components[2] || missing_component,
                          'svelte:component'
                        ).$$render($$result, Object.assign(props_2 || {}), {}, {})}`;
                      },
                    }
                  )}`
                : `${validate_component(
                    components[1] || missing_component,
                    'svelte:component'
                  ).$$render($$result, Object.assign(props_1 || {}), {}, {})}`
            }`;
          },
        }
      )}`
    : `${validate_component(components[0] || missing_component, 'svelte:component').$$render(
        $$result,
        Object.assign(props_0 || {}),
        {},
        {}
      )}`
}

${``}`;
});
function to_headers(object) {
  const headers2 = new Headers();
  if (object) {
    for (const key2 in object) {
      const value = object[key2];
      if (!value) continue;
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          headers2.append(key2, value2);
        });
      } else {
        headers2.set(key2, value);
      }
    }
  }
  return headers2;
}
function negotiate(accept, types) {
  const parts = [];
  accept.split(',').forEach((str, i) => {
    const match = /([^/]+)\/([^;]+)(?:;q=([0-9.]+))?/.exec(str);
    if (match) {
      const [, type, subtype, q = '1'] = match;
      parts.push({ type, subtype, q: +q, i });
    }
  });
  parts.sort((a, b) => {
    if (a.q !== b.q) {
      return b.q - a.q;
    }
    if ((a.subtype === '*') !== (b.subtype === '*')) {
      return a.subtype === '*' ? 1 : -1;
    }
    if ((a.type === '*') !== (b.type === '*')) {
      return a.type === '*' ? 1 : -1;
    }
    return a.i - b.i;
  });
  let accepted;
  let min_priority = Infinity;
  for (const mimetype of types) {
    const [type, subtype] = mimetype.split('/');
    const priority = parts.findIndex(
      (part) =>
        (part.type === type || part.type === '*') &&
        (part.subtype === subtype || part.subtype === '*')
    );
    if (priority !== -1 && priority < min_priority) {
      accepted = mimetype;
      min_priority = priority;
    }
  }
  return accepted;
}
function hash(value) {
  let hash2 = 5381;
  let i = value.length;
  if (typeof value === 'string') {
    while (i) hash2 = (hash2 * 33) ^ value.charCodeAt(--i);
  } else {
    while (i) hash2 = (hash2 * 33) ^ value[--i];
  }
  return (hash2 >>> 0).toString(36);
}
function lowercase_keys(obj) {
  const clone = {};
  for (const key2 in obj) {
    clone[key2.toLowerCase()] = obj[key2];
  }
  return clone;
}
function decode_params(params) {
  for (const key2 in params) {
    params[key2] = params[key2]
      .replace(/%23/g, '#')
      .replace(/%3[Bb]/g, ';')
      .replace(/%2[Cc]/g, ',')
      .replace(/%2[Ff]/g, '/')
      .replace(/%3[Ff]/g, '?')
      .replace(/%3[Aa]/g, ':')
      .replace(/%40/g, '@')
      .replace(/%26/g, '&')
      .replace(/%3[Dd]/g, '=')
      .replace(/%2[Bb]/g, '+')
      .replace(/%24/g, '$');
  }
  return params;
}
function is_pojo(body2) {
  if (typeof body2 !== 'object') return false;
  if (body2) {
    if (body2 instanceof Uint8Array) return false;
    if (body2 instanceof ReadableStream) return false;
    if (body2._readableState && typeof body2.pipe === 'function') {
      throw new Error('Node streams are no longer supported \u2014 use a ReadableStream instead');
    }
  }
  return true;
}
function serialize_error(error2, get_stack) {
  return JSON.stringify(clone_error(error2, get_stack));
}
function clone_error(error2, get_stack) {
  const { name, message, stack, cause, ...custom } = error2;
  const object = { name, message, stack: get_stack(error2) };
  if (cause) object.cause = clone_error(cause, get_stack);
  for (const key2 in custom) {
    object[key2] = custom[key2];
  }
  return object;
}
function check_method_names(mod) {
  ['get', 'post', 'put', 'patch', 'del'].forEach((m) => {
    if (m in mod) {
      const replacement = m === 'del' ? 'DELETE' : m.toUpperCase();
      throw Error(
        `Endpoint method "${m}" has changed to "${replacement}". See https://github.com/sveltejs/kit/discussions/5359 for more information.`
      );
    }
  });
}
var GENERIC_ERROR = {
  id: '__error',
};
function error(body2) {
  return new Response(body2, {
    status: 500,
  });
}
function is_string(s2) {
  return typeof s2 === 'string' || s2 instanceof String;
}
var text_types = /* @__PURE__ */ new Set([
  'application/xml',
  'application/json',
  'application/x-www-form-urlencoded',
  'multipart/form-data',
]);
var bodyless_status_codes = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function is_text(content_type) {
  if (!content_type) return true;
  const type = content_type.split(';')[0].toLowerCase();
  return type.startsWith('text/') || type.endsWith('+xml') || text_types.has(type);
}
async function render_endpoint(event, mod, options) {
  const { method } = event.request;
  check_method_names(mod);
  let handler = mod[method];
  if (!handler && method === 'HEAD') {
    handler = mod.GET;
  }
  if (!handler) {
    const allowed = [];
    for (const method2 in ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']) {
      if (mod[method2]) allowed.push(method2);
    }
    if (mod.GET || mod.HEAD) allowed.push('HEAD');
    return event.request.headers.get('x-sveltekit-load')
      ? new Response(void 0, {
          status: 204,
        })
      : new Response(`${method} method not allowed`, {
          status: 405,
          headers: {
            allow: allowed.join(', '),
          },
        });
  }
  const response2 = await handler(event);
  const preface = `Invalid response from route ${event.url.pathname}`;
  if (typeof response2 !== 'object') {
    return error(`${preface}: expected an object, got ${typeof response2}`);
  }
  if (response2.fallthrough) {
    throw new Error(
      'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
    );
  }
  const { status = 200, body: body2 = {} } = response2;
  const headers2 =
    response2.headers instanceof Headers
      ? new Headers(response2.headers)
      : to_headers(response2.headers);
  const type = headers2.get('content-type');
  if (
    !is_text(type) &&
    !(body2 instanceof Uint8Array || body2 instanceof ReadableStream || is_string(body2))
  ) {
    return error(
      `${preface}: body must be an instance of string, Uint8Array or ReadableStream if content-type is not a supported textual content-type`
    );
  }
  let normalized_body;
  if (is_pojo(body2) && (!type || type.startsWith('application/json'))) {
    headers2.set('content-type', 'application/json; charset=utf-8');
    normalized_body =
      body2 instanceof Error ? serialize_error(body2, options.get_stack) : JSON.stringify(body2);
  } else {
    normalized_body = body2;
  }
  if (
    (typeof normalized_body === 'string' || normalized_body instanceof Uint8Array) &&
    !headers2.has('etag')
  ) {
    const cache_control = headers2.get('cache-control');
    if (!cache_control || !/(no-store|immutable)/.test(cache_control)) {
      headers2.set('etag', `"${hash(normalized_body)}"`);
    }
  }
  return new Response(
    method !== 'HEAD' && !bodyless_status_codes.has(status) ? normalized_body : void 0,
    {
      status,
      headers: headers2,
    }
  );
}
var chars$1 = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_$';
var unsafeChars = /[<>\b\f\n\r\t\0\u2028\u2029]/g;
var reserved =
  /^(?:do|if|in|for|int|let|new|try|var|byte|case|char|else|enum|goto|long|this|void|with|await|break|catch|class|const|final|float|short|super|throw|while|yield|delete|double|export|import|native|return|switch|throws|typeof|boolean|default|extends|finally|package|private|abstract|continue|debugger|function|volatile|interface|protected|transient|implements|instanceof|synchronized)$/;
var escaped = {
  '<': '\\u003C',
  '>': '\\u003E',
  '/': '\\u002F',
  '\\': '\\\\',
  '\b': '\\b',
  '\f': '\\f',
  '\n': '\\n',
  '\r': '\\r',
  '	': '\\t',
  '\0': '\\0',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};
var objectProtoOwnPropertyNames = Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
function devalue(value) {
  var counts = /* @__PURE__ */ new Map();
  function walk(thing) {
    if (typeof thing === 'function') {
      throw new Error('Cannot stringify a function');
    }
    if (counts.has(thing)) {
      counts.set(thing, counts.get(thing) + 1);
      return;
    }
    counts.set(thing, 1);
    if (!isPrimitive(thing)) {
      var type = getType(thing);
      switch (type) {
        case 'Number':
        case 'String':
        case 'Boolean':
        case 'Date':
        case 'RegExp':
          return;
        case 'Array':
          thing.forEach(walk);
          break;
        case 'Set':
        case 'Map':
          Array.from(thing).forEach(walk);
          break;
        default:
          var proto = Object.getPrototypeOf(thing);
          if (
            proto !== Object.prototype &&
            proto !== null &&
            Object.getOwnPropertyNames(proto).sort().join('\0') !== objectProtoOwnPropertyNames
          ) {
            throw new Error('Cannot stringify arbitrary non-POJOs');
          }
          if (Object.getOwnPropertySymbols(thing).length > 0) {
            throw new Error('Cannot stringify POJOs with symbolic keys');
          }
          Object.keys(thing).forEach(function (key2) {
            return walk(thing[key2]);
          });
      }
    }
  }
  walk(value);
  var names = /* @__PURE__ */ new Map();
  Array.from(counts)
    .filter(function (entry) {
      return entry[1] > 1;
    })
    .sort(function (a, b) {
      return b[1] - a[1];
    })
    .forEach(function (entry, i) {
      names.set(entry[0], getName(i));
    });
  function stringify(thing) {
    if (names.has(thing)) {
      return names.get(thing);
    }
    if (isPrimitive(thing)) {
      return stringifyPrimitive(thing);
    }
    var type = getType(thing);
    switch (type) {
      case 'Number':
      case 'String':
      case 'Boolean':
        return 'Object(' + stringify(thing.valueOf()) + ')';
      case 'RegExp':
        return 'new RegExp(' + stringifyString(thing.source) + ', "' + thing.flags + '")';
      case 'Date':
        return 'new Date(' + thing.getTime() + ')';
      case 'Array':
        var members = thing.map(function (v, i) {
          return i in thing ? stringify(v) : '';
        });
        var tail = thing.length === 0 || thing.length - 1 in thing ? '' : ',';
        return '[' + members.join(',') + tail + ']';
      case 'Set':
      case 'Map':
        return 'new ' + type + '([' + Array.from(thing).map(stringify).join(',') + '])';
      default:
        var obj =
          '{' +
          Object.keys(thing)
            .map(function (key2) {
              return safeKey(key2) + ':' + stringify(thing[key2]);
            })
            .join(',') +
          '}';
        var proto = Object.getPrototypeOf(thing);
        if (proto === null) {
          return Object.keys(thing).length > 0
            ? 'Object.assign(Object.create(null),' + obj + ')'
            : 'Object.create(null)';
        }
        return obj;
    }
  }
  var str = stringify(value);
  if (names.size) {
    var params_1 = [];
    var statements_1 = [];
    var values_1 = [];
    names.forEach(function (name, thing) {
      params_1.push(name);
      if (isPrimitive(thing)) {
        values_1.push(stringifyPrimitive(thing));
        return;
      }
      var type = getType(thing);
      switch (type) {
        case 'Number':
        case 'String':
        case 'Boolean':
          values_1.push('Object(' + stringify(thing.valueOf()) + ')');
          break;
        case 'RegExp':
          values_1.push(thing.toString());
          break;
        case 'Date':
          values_1.push('new Date(' + thing.getTime() + ')');
          break;
        case 'Array':
          values_1.push('Array(' + thing.length + ')');
          thing.forEach(function (v, i) {
            statements_1.push(name + '[' + i + ']=' + stringify(v));
          });
          break;
        case 'Set':
          values_1.push('new Set');
          statements_1.push(
            name +
              '.' +
              Array.from(thing)
                .map(function (v) {
                  return 'add(' + stringify(v) + ')';
                })
                .join('.')
          );
          break;
        case 'Map':
          values_1.push('new Map');
          statements_1.push(
            name +
              '.' +
              Array.from(thing)
                .map(function (_a) {
                  var k = _a[0],
                    v = _a[1];
                  return 'set(' + stringify(k) + ', ' + stringify(v) + ')';
                })
                .join('.')
          );
          break;
        default:
          values_1.push(Object.getPrototypeOf(thing) === null ? 'Object.create(null)' : '{}');
          Object.keys(thing).forEach(function (key2) {
            statements_1.push('' + name + safeProp(key2) + '=' + stringify(thing[key2]));
          });
      }
    });
    statements_1.push('return ' + str);
    return (
      '(function(' +
      params_1.join(',') +
      '){' +
      statements_1.join(';') +
      '}(' +
      values_1.join(',') +
      '))'
    );
  } else {
    return str;
  }
}
function getName(num) {
  var name = '';
  do {
    name = chars$1[num % chars$1.length] + name;
    num = ~~(num / chars$1.length) - 1;
  } while (num >= 0);
  return reserved.test(name) ? name + '_' : name;
}
function isPrimitive(thing) {
  return Object(thing) !== thing;
}
function stringifyPrimitive(thing) {
  if (typeof thing === 'string') return stringifyString(thing);
  if (thing === void 0) return 'void 0';
  if (thing === 0 && 1 / thing < 0) return '-0';
  var str = String(thing);
  if (typeof thing === 'number') return str.replace(/^(-)?0\./, '$1.');
  return str;
}
function getType(thing) {
  return Object.prototype.toString.call(thing).slice(8, -1);
}
function escapeUnsafeChar(c) {
  return escaped[c] || c;
}
function escapeUnsafeChars(str) {
  return str.replace(unsafeChars, escapeUnsafeChar);
}
function safeKey(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2) ? key2 : escapeUnsafeChars(JSON.stringify(key2));
}
function safeProp(key2) {
  return /^[_$a-zA-Z][_$a-zA-Z0-9]*$/.test(key2)
    ? '.' + key2
    : '[' + escapeUnsafeChars(JSON.stringify(key2)) + ']';
}
function stringifyString(str) {
  var result = '"';
  for (var i = 0; i < str.length; i += 1) {
    var char = str.charAt(i);
    var code = char.charCodeAt(0);
    if (char === '"') {
      result += '\\"';
    } else if (char in escaped) {
      result += escaped[char];
    } else if (code >= 55296 && code <= 57343) {
      var next = str.charCodeAt(i + 1);
      if (code <= 56319 && next >= 56320 && next <= 57343) {
        result += char + str[++i];
      } else {
        result += '\\u' + code.toString(16).toUpperCase();
      }
    } else {
      result += char;
    }
  }
  result += '"';
  return result;
}
function noop2() {}
function safe_not_equal2(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === 'object') || typeof a === 'function';
}
Promise.resolve();
var subscriber_queue = [];
function readable2(value, start) {
  return {
    subscribe: writable(value, start).subscribe,
  };
}
function writable(value, start = noop2) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal2(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run2, invalidate = noop2) {
    const subscriber = [run2, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop2;
    }
    run2(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function coalesce_to_error(err) {
  return err instanceof Error || (err && err.name && err.message)
    ? err
    : new Error(JSON.stringify(err));
}
var render_json_payload_script_dict = {
  '<': '\\u003C',
  '\u2028': '\\u2028',
  '\u2029': '\\u2029',
};
var render_json_payload_script_regex = new RegExp(
  `[${Object.keys(render_json_payload_script_dict).join('')}]`,
  'g'
);
function render_json_payload_script(attrs, payload) {
  const safe_payload = JSON.stringify(payload).replace(
    render_json_payload_script_regex,
    (match) => render_json_payload_script_dict[match]
  );
  let safe_attrs = '';
  for (const [key2, value] of Object.entries(attrs)) {
    if (value === void 0) continue;
    safe_attrs += ` sveltekit:data-${key2}=${escape_html_attr(value)}`;
  }
  return `<script type="application/json"${safe_attrs}>${safe_payload}<\/script>`;
}
var escape_html_attr_dict = {
  '&': '&amp;',
  '"': '&quot;',
};
var escape_html_attr_regex = new RegExp(
  `[${Object.keys(escape_html_attr_dict).join(
    ''
  )}]|[\\ud800-\\udbff](?![\\udc00-\\udfff])|[\\ud800-\\udbff][\\udc00-\\udfff]|[\\udc00-\\udfff]`,
  'g'
);
function escape_html_attr(str) {
  const escaped_str = str.replace(escape_html_attr_regex, (match) => {
    if (match.length === 2) {
      return match;
    }
    return escape_html_attr_dict[match] ?? `&#${match.charCodeAt(0)};`;
  });
  return `"${escaped_str}"`;
}
var s = JSON.stringify;
var encoder = new TextEncoder();
function sha256(data) {
  if (!key[0]) precompute();
  const out = init.slice(0);
  const array2 = encode$1(data);
  for (let i = 0; i < array2.length; i += 16) {
    const w = array2.subarray(i, i + 16);
    let tmp;
    let a;
    let b;
    let out0 = out[0];
    let out1 = out[1];
    let out2 = out[2];
    let out3 = out[3];
    let out4 = out[4];
    let out5 = out[5];
    let out6 = out[6];
    let out7 = out[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        tmp = w[i2];
      } else {
        a = w[(i2 + 1) & 15];
        b = w[(i2 + 14) & 15];
        tmp = w[i2 & 15] =
          (((a >>> 7) ^ (a >>> 18) ^ (a >>> 3) ^ (a << 25) ^ (a << 14)) +
            ((b >>> 17) ^ (b >>> 19) ^ (b >>> 10) ^ (b << 15) ^ (b << 13)) +
            w[i2 & 15] +
            w[(i2 + 9) & 15]) |
          0;
      }
      tmp =
        tmp +
        out7 +
        ((out4 >>> 6) ^ (out4 >>> 11) ^ (out4 >>> 25) ^ (out4 << 26) ^ (out4 << 21) ^ (out4 << 7)) +
        (out6 ^ (out4 & (out5 ^ out6))) +
        key[i2];
      out7 = out6;
      out6 = out5;
      out5 = out4;
      out4 = (out3 + tmp) | 0;
      out3 = out2;
      out2 = out1;
      out1 = out0;
      out0 =
        (tmp +
          ((out1 & out2) ^ (out3 & (out1 ^ out2))) +
          ((out1 >>> 2) ^
            (out1 >>> 13) ^
            (out1 >>> 22) ^
            (out1 << 30) ^
            (out1 << 19) ^
            (out1 << 10))) |
        0;
    }
    out[0] = (out[0] + out0) | 0;
    out[1] = (out[1] + out1) | 0;
    out[2] = (out[2] + out2) | 0;
    out[3] = (out[3] + out3) | 0;
    out[4] = (out[4] + out4) | 0;
    out[5] = (out[5] + out5) | 0;
    out[6] = (out[6] + out6) | 0;
    out[7] = (out[7] + out7) | 0;
  }
  const bytes = new Uint8Array(out.buffer);
  reverse_endianness(bytes);
  return base64(bytes);
}
var init = new Uint32Array(8);
var key = new Uint32Array(64);
function precompute() {
  function frac(x) {
    return (x - Math.floor(x)) * 4294967296;
  }
  let prime = 2;
  for (let i = 0; i < 64; prime++) {
    let is_prime = true;
    for (let factor = 2; factor * factor <= prime; factor++) {
      if (prime % factor === 0) {
        is_prime = false;
        break;
      }
    }
    if (is_prime) {
      if (i < 8) {
        init[i] = frac(prime ** (1 / 2));
      }
      key[i] = frac(prime ** (1 / 3));
      i++;
    }
  }
}
function reverse_endianness(bytes) {
  for (let i = 0; i < bytes.length; i += 4) {
    const a = bytes[i + 0];
    const b = bytes[i + 1];
    const c = bytes[i + 2];
    const d = bytes[i + 3];
    bytes[i + 0] = d;
    bytes[i + 1] = c;
    bytes[i + 2] = b;
    bytes[i + 3] = a;
  }
}
function encode$1(str) {
  const encoded = encoder.encode(str);
  const length = encoded.length * 8;
  const size = 512 * Math.ceil((length + 65) / 512);
  const bytes = new Uint8Array(size / 8);
  bytes.set(encoded);
  bytes[encoded.length] = 128;
  reverse_endianness(bytes);
  const words = new Uint32Array(bytes.buffer);
  words[words.length - 2] = Math.floor(length / 4294967296);
  words[words.length - 1] = length;
  return words;
}
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('');
function base64(bytes) {
  const l = bytes.length;
  let result = '';
  let i;
  for (i = 2; i < l; i += 3) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[((bytes[i - 2] & 3) << 4) | (bytes[i - 1] >> 4)];
    result += chars[((bytes[i - 1] & 15) << 2) | (bytes[i] >> 6)];
    result += chars[bytes[i] & 63];
  }
  if (i === l + 1) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[(bytes[i - 2] & 3) << 4];
    result += '==';
  }
  if (i === l) {
    result += chars[bytes[i - 2] >> 2];
    result += chars[((bytes[i - 2] & 3) << 4) | (bytes[i - 1] >> 4)];
    result += chars[(bytes[i - 1] & 15) << 2];
    result += '=';
  }
  return result;
}
var array = new Uint8Array(16);
function generate_nonce() {
  crypto.getRandomValues(array);
  return base64(array);
}
var quoted = /* @__PURE__ */ new Set([
  'self',
  'unsafe-eval',
  'unsafe-hashes',
  'unsafe-inline',
  'none',
  'strict-dynamic',
  'report-sample',
]);
var crypto_pattern = /^(nonce|sha\d\d\d)-/;
var BaseProvider = class {
  #use_hashes;
  #script_needs_csp;
  #style_needs_csp;
  #directives;
  #script_src;
  #style_src;
  #nonce;
  constructor(use_hashes, directives, nonce, dev2) {
    this.#use_hashes = use_hashes;
    this.#directives = dev2 ? { ...directives } : directives;
    const d = this.#directives;
    if (dev2) {
      const effective_style_src2 = d['style-src'] || d['default-src'];
      if (effective_style_src2 && !effective_style_src2.includes('unsafe-inline')) {
        d['style-src'] = [...effective_style_src2, 'unsafe-inline'];
      }
    }
    this.#script_src = [];
    this.#style_src = [];
    const effective_script_src = d['script-src'] || d['default-src'];
    const effective_style_src = d['style-src'] || d['default-src'];
    this.#script_needs_csp =
      !!effective_script_src &&
      effective_script_src.filter((value) => value !== 'unsafe-inline').length > 0;
    this.#style_needs_csp =
      !dev2 &&
      !!effective_style_src &&
      effective_style_src.filter((value) => value !== 'unsafe-inline').length > 0;
    this.script_needs_nonce = this.#script_needs_csp && !this.#use_hashes;
    this.style_needs_nonce = this.#style_needs_csp && !this.#use_hashes;
    this.#nonce = nonce;
  }
  add_script(content) {
    if (this.#script_needs_csp) {
      if (this.#use_hashes) {
        this.#script_src.push(`sha256-${sha256(content)}`);
      } else if (this.#script_src.length === 0) {
        this.#script_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  add_style(content) {
    if (this.#style_needs_csp) {
      if (this.#use_hashes) {
        this.#style_src.push(`sha256-${sha256(content)}`);
      } else if (this.#style_src.length === 0) {
        this.#style_src.push(`nonce-${this.#nonce}`);
      }
    }
  }
  get_header(is_meta = false) {
    const header = [];
    const directives = { ...this.#directives };
    if (this.#style_src.length > 0) {
      directives['style-src'] = [
        ...(directives['style-src'] || directives['default-src'] || []),
        ...this.#style_src,
      ];
    }
    if (this.#script_src.length > 0) {
      directives['script-src'] = [
        ...(directives['script-src'] || directives['default-src'] || []),
        ...this.#script_src,
      ];
    }
    for (const key2 in directives) {
      if (is_meta && (key2 === 'frame-ancestors' || key2 === 'report-uri' || key2 === 'sandbox')) {
        continue;
      }
      const value = directives[key2];
      if (!value) continue;
      const directive = [key2];
      if (Array.isArray(value)) {
        value.forEach((value2) => {
          if (quoted.has(value2) || crypto_pattern.test(value2)) {
            directive.push(`'${value2}'`);
          } else {
            directive.push(value2);
          }
        });
      }
      header.push(directive.join(' '));
    }
    return header.join('; ');
  }
};
var CspProvider = class extends BaseProvider {
  get_meta() {
    const content = escape_html_attr(this.get_header(true));
    return `<meta http-equiv="content-security-policy" content=${content}>`;
  }
};
var CspReportOnlyProvider = class extends BaseProvider {
  constructor(use_hashes, directives, nonce, dev2) {
    var _a, _b;
    super(use_hashes, directives, nonce, dev2);
    if (Object.values(directives).filter((v) => !!v).length > 0) {
      const has_report_to = ((_a = directives['report-to']) == null ? void 0 : _a.length) ?? 0 > 0;
      const has_report_uri =
        ((_b = directives['report-uri']) == null ? void 0 : _b.length) ?? 0 > 0;
      if (!has_report_to && !has_report_uri) {
        throw Error(
          '`content-security-policy-report-only` must be specified with either the `report-to` or `report-uri` directives, or both'
        );
      }
    }
  }
};
var Csp = class {
  nonce = generate_nonce();
  csp_provider;
  report_only_provider;
  constructor({ mode, directives, reportOnly }, { prerender: prerender3, dev: dev2 }) {
    const use_hashes = mode === 'hash' || (mode === 'auto' && prerender3);
    this.csp_provider = new CspProvider(use_hashes, directives, this.nonce, dev2);
    this.report_only_provider = new CspReportOnlyProvider(use_hashes, reportOnly, this.nonce, dev2);
  }
  get script_needs_nonce() {
    return this.csp_provider.script_needs_nonce || this.report_only_provider.script_needs_nonce;
  }
  get style_needs_nonce() {
    return this.csp_provider.style_needs_nonce || this.report_only_provider.style_needs_nonce;
  }
  add_script(content) {
    this.csp_provider.add_script(content);
    this.report_only_provider.add_script(content);
  }
  add_style(content) {
    this.csp_provider.add_style(content);
    this.report_only_provider.add_style(content);
  }
};
var absolute = /^([a-z]+:)?\/?\//;
var scheme = /^[a-z]+:/;
function resolve(base22, path) {
  if (scheme.test(path)) return path;
  const base_match = absolute.exec(base22);
  const path_match = absolute.exec(path);
  if (!base_match) {
    throw new Error(`bad base path: "${base22}"`);
  }
  const baseparts = path_match ? [] : base22.slice(base_match[0].length).split('/');
  const pathparts = path_match ? path.slice(path_match[0].length).split('/') : path.split('/');
  baseparts.pop();
  for (let i = 0; i < pathparts.length; i += 1) {
    const part = pathparts[i];
    if (part === '.') continue;
    else if (part === '..') baseparts.pop();
    else baseparts.push(part);
  }
  const prefix = (path_match && path_match[0]) || (base_match && base_match[0]) || '';
  return `${prefix}${baseparts.join('/')}`;
}
function is_root_relative(path) {
  return path[0] === '/' && path[1] !== '/';
}
function normalize_path(path, trailing_slash) {
  if (path === '/' || trailing_slash === 'ignore') return path;
  if (trailing_slash === 'never') {
    return path.endsWith('/') ? path.slice(0, -1) : path;
  } else if (trailing_slash === 'always' && !path.endsWith('/')) {
    return path + '/';
  }
  return path;
}
var LoadURL = class extends URL {
  get hash() {
    throw new Error(
      'url.hash is inaccessible from load. Consider accessing hash from the page store within the script tag of your component.'
    );
  }
};
var PrerenderingURL = class extends URL {
  get search() {
    throw new Error('Cannot access url.search on a page with prerendering enabled');
  }
  get searchParams() {
    throw new Error('Cannot access url.searchParams on a page with prerendering enabled');
  }
};
var updated = {
  ...readable2(false),
  check: () => false,
};
async function render_response({
  branch,
  options,
  state,
  $session,
  page_config,
  status,
  error: error2 = null,
  event,
  resolve_opts,
  stuff,
}) {
  if (state.prerendering) {
    if (options.csp.mode === 'nonce') {
      throw new Error('Cannot use prerendering if config.kit.csp.mode === "nonce"');
    }
    if (options.template_contains_nonce) {
      throw new Error('Cannot use prerendering if page template contains %sveltekit.nonce%');
    }
  }
  const { entry } = options.manifest._;
  const stylesheets6 = new Set(entry.stylesheets);
  const modulepreloads = new Set(entry.imports);
  const inline_styles = /* @__PURE__ */ new Map();
  const serialized_data = [];
  let shadow_props;
  let rendered;
  let is_private = false;
  let cache;
  if (error2) {
    error2.stack = options.get_stack(error2);
  }
  if (resolve_opts.ssr) {
    const leaf = branch.at(-1);
    if (leaf.loaded.status) {
      status = leaf.loaded.status;
    }
    for (const { node, props: props2, loaded, fetched, uses_credentials } of branch) {
      if (node.imports) {
        node.imports.forEach((url) => modulepreloads.add(url));
      }
      if (node.stylesheets) {
        node.stylesheets.forEach((url) => stylesheets6.add(url));
      }
      if (node.inline_styles) {
        Object.entries(await node.inline_styles()).forEach(([k, v]) => inline_styles.set(k, v));
      }
      if (fetched && page_config.hydrate) serialized_data.push(...fetched);
      if (props2) shadow_props = props2;
      cache = loaded == null ? void 0 : loaded.cache;
      is_private = (cache == null ? void 0 : cache.private) ?? uses_credentials;
    }
    const session = writable($session);
    const props = {
      stores: {
        page: writable(null),
        navigating: writable(null),
        session: {
          ...session,
          subscribe: (fn) => {
            is_private = (cache == null ? void 0 : cache.private) ?? true;
            return session.subscribe(fn);
          },
        },
        updated,
      },
      page: {
        error: error2,
        params: event.params,
        routeId: event.routeId,
        status,
        stuff,
        url: state.prerendering ? new PrerenderingURL(event.url) : event.url,
      },
      components: branch.map(({ node }) => node.module.default),
    };
    const print_error = (property, replacement) => {
      Object.defineProperty(props.page, property, {
        get: () => {
          throw new Error(`$page.${property} has been replaced by $page.url.${replacement}`);
        },
      });
    };
    print_error('origin', 'origin');
    print_error('path', 'pathname');
    print_error('query', 'searchParams');
    for (let i = 0; i < branch.length; i += 1) {
      props[`props_${i}`] = await branch[i].loaded.props;
    }
    rendered = options.root.render(props);
  } else {
    rendered = { head: '', html: '', css: { code: '', map: null } };
  }
  let { head, html: body2 } = rendered;
  const csp = new Csp(options.csp, {
    dev: options.dev,
    prerender: !!state.prerendering,
  });
  const target = hash(body2);
  const init_app = `
		import { start } from ${s(options.prefix + entry.file)};
		start({
			target: document.querySelector('[data-sveltekit-hydrate="${target}"]').parentNode,
			paths: ${s(options.paths)},
			session: ${try_serialize($session, (error3) => {
        throw new Error(`Failed to serialize session data: ${error3.message}`);
      })},
			route: ${!!page_config.router},
			spa: ${!resolve_opts.ssr},
			trailing_slash: ${s(options.trailing_slash)},
			hydrate: ${
        resolve_opts.ssr && page_config.hydrate
          ? `{
				status: ${status},
				error: ${error2 && serialize_error(error2, (e) => e.stack)},
				nodes: [${branch.map(({ node }) => node.index).join(', ')}],
				params: ${devalue(event.params)},
				routeId: ${s(event.routeId)}
			}`
          : 'null'
      }
		});
	`;
  const init_service_worker = `
		if ('serviceWorker' in navigator) {
			addEventListener('load', function () {
				navigator.serviceWorker.register('${options.service_worker}');
			});
		}
	`;
  if (inline_styles.size > 0) {
    const content = Array.from(inline_styles.values()).join('\n');
    const attributes = [];
    if (options.dev) attributes.push(' data-sveltekit');
    if (csp.style_needs_nonce) attributes.push(` nonce="${csp.nonce}"`);
    csp.add_style(content);
    head += `
	<style${attributes.join('')}>${content}</style>`;
  }
  head += Array.from(stylesheets6)
    .map((dep) => {
      const attributes = ['rel="stylesheet"', `href="${options.prefix + dep}"`];
      if (csp.style_needs_nonce) {
        attributes.push(`nonce="${csp.nonce}"`);
      }
      if (inline_styles.has(dep)) {
        attributes.push('disabled', 'media="(max-width: 0)"');
      }
      return `
	<link ${attributes.join(' ')}>`;
    })
    .join('');
  if (page_config.router || page_config.hydrate) {
    head += Array.from(modulepreloads)
      .map(
        (dep) => `
	<link rel="modulepreload" href="${options.prefix + dep}">`
      )
      .join('');
    const attributes = ['type="module"', `data-sveltekit-hydrate="${target}"`];
    csp.add_script(init_app);
    if (csp.script_needs_nonce) {
      attributes.push(`nonce="${csp.nonce}"`);
    }
    body2 += `
		<script ${attributes.join(' ')}>${init_app}<\/script>`;
    body2 += serialized_data
      .map(({ url, body: body22, response: response2 }) =>
        render_json_payload_script(
          { type: 'data', url, body: typeof body22 === 'string' ? hash(body22) : void 0 },
          response2
        )
      )
      .join('\n	');
    if (shadow_props) {
      body2 += render_json_payload_script({ type: 'props' }, shadow_props);
    }
  }
  if (options.service_worker) {
    csp.add_script(init_service_worker);
    head += `
			<script${csp.script_needs_nonce ? ` nonce="${csp.nonce}"` : ''}>${init_service_worker}<\/script>`;
  }
  if (state.prerendering) {
    const http_equiv = [];
    const csp_headers = csp.csp_provider.get_meta();
    if (csp_headers) {
      http_equiv.push(csp_headers);
    }
    if (cache) {
      http_equiv.push(`<meta http-equiv="cache-control" content="max-age=${cache.maxage}">`);
    }
    if (http_equiv.length > 0) {
      head = http_equiv.join('\n') + head;
    }
  }
  const segments = event.url.pathname.slice(options.paths.base.length).split('/').slice(2);
  const assets2 =
    options.paths.assets || (segments.length > 0 ? segments.map(() => '..').join('/') : '.');
  const html = await resolve_opts.transformPage({
    html: options.template({ head, body: body2, assets: assets2, nonce: csp.nonce }),
  });
  const headers2 = new Headers({
    'content-type': 'text/html',
    etag: `"${hash(html)}"`,
  });
  if (cache) {
    headers2.set('cache-control', `${is_private ? 'private' : 'public'}, max-age=${cache.maxage}`);
  }
  if (!state.prerendering) {
    const csp_header = csp.csp_provider.get_header();
    if (csp_header) {
      headers2.set('content-security-policy', csp_header);
    }
    const report_only_header = csp.report_only_provider.get_header();
    if (report_only_header) {
      headers2.set('content-security-policy-report-only', report_only_header);
    }
  }
  return new Response(html, {
    status,
    headers: headers2,
  });
}
function try_serialize(data, fail) {
  try {
    return devalue(data);
  } catch (err) {
    if (fail) fail(coalesce_to_error(err));
    return null;
  }
}
var parse_1 = parse$1;
var serialize_1 = serialize2;
var __toString = Object.prototype.toString;
var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function parse$1(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }
  var obj = {};
  var opt = options || {};
  var dec = opt.decode || decode;
  var index6 = 0;
  while (index6 < str.length) {
    var eqIdx = str.indexOf('=', index6);
    if (eqIdx === -1) {
      break;
    }
    var endIdx = str.indexOf(';', index6);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index6 = str.lastIndexOf(';', eqIdx - 1) + 1;
      continue;
    }
    var key2 = str.slice(index6, eqIdx).trim();
    if (void 0 === obj[key2]) {
      var val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.charCodeAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key2] = tryDecode(val, dec);
    }
    index6 = endIdx + 1;
  }
  return obj;
}
function serialize2(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode2;
  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }
  var value = enc(val);
  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }
  var str = name + '=' + value;
  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid');
    }
    str += '; Max-Age=' + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }
    str += '; Domain=' + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }
    str += '; Path=' + opt.path;
  }
  if (opt.expires) {
    var expires = opt.expires;
    if (!isDate(expires) || isNaN(expires.valueOf())) {
      throw new TypeError('option expires is invalid');
    }
    str += '; Expires=' + expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += '; HttpOnly';
  }
  if (opt.secure) {
    str += '; Secure';
  }
  if (opt.priority) {
    var priority = typeof opt.priority === 'string' ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case 'low':
        str += '; Priority=Low';
        break;
      case 'medium':
        str += '; Priority=Medium';
        break;
      case 'high':
        str += '; Priority=High';
        break;
      default:
        throw new TypeError('option priority is invalid');
    }
  }
  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }
  return str;
}
function decode(str) {
  return str.indexOf('%') !== -1 ? decodeURIComponent(str) : str;
}
function encode2(val) {
  return encodeURIComponent(val);
}
function isDate(val) {
  return __toString.call(val) === '[object Date]' || val instanceof Date;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch (e) {
    return str;
  }
}
var setCookie = { exports: {} };
var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};
function isNonEmptyString(str) {
  return typeof str === 'string' && !!str.trim();
}
function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(';').filter(isNonEmptyString);
  var nameValue = parts.shift().split('=');
  var name = nameValue.shift();
  var value = nameValue.join('=');
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  try {
    value = options.decodeValues ? decodeURIComponent(value) : value;
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }
  var cookie2 = {
    name,
    value,
  };
  parts.forEach(function (part) {
    var sides = part.split('=');
    var key2 = sides.shift().trimLeft().toLowerCase();
    var value2 = sides.join('=');
    if (key2 === 'expires') {
      cookie2.expires = new Date(value2);
    } else if (key2 === 'max-age') {
      cookie2.maxAge = parseInt(value2, 10);
    } else if (key2 === 'secure') {
      cookie2.secure = true;
    } else if (key2 === 'httponly') {
      cookie2.httpOnly = true;
    } else if (key2 === 'samesite') {
      cookie2.sameSite = value2;
    } else {
      cookie2[key2] = value2;
    }
  });
  return cookie2;
}
function parse2(input, options) {
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }
  if (input.headers && input.headers['set-cookie']) {
    input = input.headers['set-cookie'];
  } else if (input.headers) {
    var sch =
      input.headers[
        Object.keys(input.headers).find(function (key2) {
          return key2.toLowerCase() === 'set-cookie';
        })
      ];
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        'Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning.'
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }
  options = options ? Object.assign({}, defaultParseOptions, options) : defaultParseOptions;
  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies2, str) {
      var cookie2 = parseString(str, options);
      cookies2[cookie2.name] = cookie2;
      return cookies2;
    }, cookies);
  }
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== 'string') {
    return [];
  }
  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;
  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }
  function notSpecialChar() {
    ch = cookiesString.charAt(pos);
    return ch !== '=' && ch !== ';' && ch !== ',';
  }
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ',') {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}
setCookie.exports = parse2;
setCookie.exports.parse = parse2;
var parseString_1 = (setCookie.exports.parseString = parseString);
var splitCookiesString_1 = (setCookie.exports.splitCookiesString = splitCookiesString);
function normalize(loaded) {
  if (!loaded) {
    return {};
  }
  if (loaded.fallthrough) {
    throw new Error(
      'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
    );
  }
  if ('maxage' in loaded) {
    throw new Error('maxage should be replaced with cache: { maxage }');
  }
  const has_error_status =
    loaded.status && loaded.status >= 400 && loaded.status <= 599 && !loaded.redirect;
  if (loaded.error || has_error_status) {
    const status = loaded.status;
    if (!loaded.error && has_error_status) {
      return {
        status: status || 500,
        error: new Error(`${status}`),
      };
    }
    const error2 = typeof loaded.error === 'string' ? new Error(loaded.error) : loaded.error;
    if (!(error2 instanceof Error)) {
      return {
        status: 500,
        error: new Error(
          `"error" property returned from load() must be a string or instance of Error, received type "${typeof error2}"`
        ),
      };
    }
    if (!status || status < 400 || status > 599) {
      console.warn(
        '"error" returned from load() without a valid status code \u2014 defaulting to 500'
      );
      return { status: 500, error: error2 };
    }
    return { status, error: error2 };
  }
  if (loaded.redirect) {
    if (!loaded.status || Math.floor(loaded.status / 100) !== 3) {
      throw new Error(
        '"redirect" property returned from load() must be accompanied by a 3xx status code'
      );
    }
    if (typeof loaded.redirect !== 'string') {
      throw new Error('"redirect" property returned from load() must be a string');
    }
  }
  if (loaded.dependencies) {
    if (
      !Array.isArray(loaded.dependencies) ||
      loaded.dependencies.some((dep) => typeof dep !== 'string')
    ) {
      throw new Error('"dependencies" property returned from load() must be of type string[]');
    }
  }
  if (loaded.context) {
    throw new Error(
      'You are returning "context" from a load function. "context" was renamed to "stuff", please adjust your code accordingly.'
    );
  }
  return loaded;
}
function domain_matches(hostname, constraint) {
  if (!constraint) return true;
  const normalized = constraint[0] === '.' ? constraint.slice(1) : constraint;
  if (hostname === normalized) return true;
  return hostname.endsWith('.' + normalized);
}
function path_matches(path, constraint) {
  if (!constraint) return true;
  const normalized = constraint.endsWith('/') ? constraint.slice(0, -1) : constraint;
  if (path === normalized) return true;
  return path.startsWith(normalized + '/');
}
async function load_node({
  event,
  options,
  state,
  route,
  node,
  $session,
  stuff,
  is_error,
  is_leaf,
  status,
  error: error2,
}) {
  const { module: module2 } = node;
  let uses_credentials = false;
  const fetched = [];
  const cookies = parse_1(event.request.headers.get('cookie') || '');
  const new_cookies = [];
  let loaded;
  const should_prerender = node.module.prerender ?? options.prerender.default;
  const shadow = is_leaf ? await load_shadow_data(route, event, options, should_prerender) : {};
  if (shadow.cookies) {
    shadow.cookies.forEach((header) => {
      new_cookies.push(parseString_1(header));
    });
  }
  if (shadow.error) {
    loaded = {
      error: shadow.error,
    };
  } else if (shadow.redirect) {
    loaded = {
      redirect: shadow.redirect,
    };
  } else if (module2.load) {
    const load_input = {
      url: state.prerendering ? new PrerenderingURL(event.url) : new LoadURL(event.url),
      params: event.params,
      props: shadow.body || {},
      routeId: event.routeId,
      get session() {
        if (node.module.prerender ?? options.prerender.default) {
          throw Error(
            'Attempted to access session from a prerendered page. Session would never be populated.'
          );
        }
        uses_credentials = true;
        return $session;
      },
      fetch: async (resource, opts = {}) => {
        let requested;
        if (typeof resource === 'string') {
          requested = resource;
        } else {
          requested = resource.url;
          opts = {
            method: resource.method,
            headers: resource.headers,
            body: resource.body,
            mode: resource.mode,
            credentials: resource.credentials,
            cache: resource.cache,
            redirect: resource.redirect,
            referrer: resource.referrer,
            integrity: resource.integrity,
            ...opts,
          };
        }
        opts.headers = new Headers(opts.headers);
        for (const [key2, value] of event.request.headers) {
          if (
            key2 !== 'authorization' &&
            key2 !== 'connection' &&
            key2 !== 'cookie' &&
            key2 !== 'host' &&
            key2 !== 'if-none-match' &&
            !opts.headers.has(key2)
          ) {
            opts.headers.set(key2, value);
          }
        }
        const resolved = resolve(event.url.pathname, requested.split('?')[0]);
        let response2;
        let dependency;
        const prefix = options.paths.assets || options.paths.base;
        const filename = decodeURIComponent(
          resolved.startsWith(prefix) ? resolved.slice(prefix.length) : resolved
        ).slice(1);
        const filename_html = `${filename}/index.html`;
        const is_asset = options.manifest.assets.has(filename);
        const is_asset_html = options.manifest.assets.has(filename_html);
        if (is_asset || is_asset_html) {
          const file7 = is_asset ? filename : filename_html;
          if (options.read) {
            const type = is_asset
              ? options.manifest.mimeTypes[filename.slice(filename.lastIndexOf('.'))]
              : 'text/html';
            response2 = new Response(options.read(file7), {
              headers: type ? { 'content-type': type } : {},
            });
          } else {
            response2 = await fetch(`${event.url.origin}/${file7}`, opts);
          }
        } else if (is_root_relative(resolved)) {
          if (opts.credentials !== 'omit') {
            uses_credentials = true;
            const authorization = event.request.headers.get('authorization');
            const combined_cookies = { ...cookies };
            for (const cookie22 of new_cookies) {
              if (!domain_matches(event.url.hostname, cookie22.domain)) continue;
              if (!path_matches(resolved, cookie22.path)) continue;
              combined_cookies[cookie22.name] = cookie22.value;
            }
            const cookie2 = Object.entries(combined_cookies)
              .map(([name, value]) => `${name}=${value}`)
              .join('; ');
            if (cookie2) {
              opts.headers.set('cookie', cookie2);
            }
            if (authorization && !opts.headers.has('authorization')) {
              opts.headers.set('authorization', authorization);
            }
          }
          if (opts.body && typeof opts.body !== 'string') {
            throw new Error('Request body must be a string');
          }
          response2 = await respond(
            new Request(new URL(requested, event.url).href, { ...opts }),
            options,
            {
              ...state,
              initiator: route,
            }
          );
          if (state.prerendering) {
            dependency = { response: response2, body: null };
            state.prerendering.dependencies.set(resolved, dependency);
          }
        } else {
          if (resolved.startsWith('//')) {
            requested = event.url.protocol + requested;
          }
          if (
            `.${new URL(requested).hostname}`.endsWith(`.${event.url.hostname}`) &&
            opts.credentials !== 'omit'
          ) {
            uses_credentials = true;
            const cookie2 = event.request.headers.get('cookie');
            if (cookie2) opts.headers.set('cookie', cookie2);
          }
          opts.headers.delete('connection');
          const external_request = new Request(requested, opts);
          response2 = await options.hooks.externalFetch.call(null, external_request);
        }
        const set_cookie = response2.headers.get('set-cookie');
        if (set_cookie) {
          new_cookies.push(...splitCookiesString_1(set_cookie).map((str) => parseString_1(str)));
        }
        const proxy = new Proxy(response2, {
          get(response22, key2, _receiver) {
            async function text() {
              const body2 = await response22.text();
              const headers2 = {};
              for (const [key3, value] of response22.headers) {
                if (key3 !== 'set-cookie' && key3 !== 'etag') {
                  headers2[key3] = value;
                }
              }
              if (!opts.body || typeof opts.body === 'string') {
                const status_number = Number(response22.status);
                if (isNaN(status_number)) {
                  throw new Error(
                    `response.status is not a number. value: "${
                      response22.status
                    }" type: ${typeof response22.status}`
                  );
                }
                fetched.push({
                  url: requested,
                  body: opts.body,
                  response: {
                    status: status_number,
                    statusText: response22.statusText,
                    headers: headers2,
                    body: body2,
                  },
                });
              }
              if (dependency) {
                dependency.body = body2;
              }
              return body2;
            }
            if (key2 === 'arrayBuffer') {
              return async () => {
                const buffer = await response22.arrayBuffer();
                if (dependency) {
                  dependency.body = new Uint8Array(buffer);
                }
                return buffer;
              };
            }
            if (key2 === 'text') {
              return text;
            }
            if (key2 === 'json') {
              return async () => {
                return JSON.parse(await text());
              };
            }
            return Reflect.get(response22, key2, response22);
          },
        });
        return proxy;
      },
      stuff: { ...stuff },
      status: (is_error ? status : shadow.status) ?? null,
      error: is_error ? error2 ?? null : null,
    };
    if (options.dev) {
      Object.defineProperty(load_input, 'page', {
        get: () => {
          throw new Error('`page` in `load` functions has been replaced by `url` and `params`');
        },
      });
    }
    loaded = normalize(await module2.load.call(null, load_input));
  } else if (shadow.body) {
    loaded = {
      props: shadow.body,
    };
  } else {
    loaded = {};
  }
  loaded.status = loaded.status ?? shadow.status;
  if (shadow.body && state.prerendering) {
    const pathname = `${event.url.pathname.replace(/\/$/, '')}/__data.json`;
    const dependency = {
      response: new Response(void 0),
      body: JSON.stringify(shadow.body),
    };
    state.prerendering.dependencies.set(pathname, dependency);
  }
  return {
    node,
    props: shadow.body,
    loaded,
    stuff: loaded.stuff || stuff,
    fetched,
    set_cookie_headers: new_cookies.map((new_cookie) => {
      const { name, value, ...options2 } = new_cookie;
      return serialize_1(name, value, options2);
    }),
    uses_credentials,
  };
}
async function load_shadow_data(route, event, options, prerender3) {
  if (!route.shadow) return {};
  try {
    const mod = await route.shadow();
    check_method_names(mod);
    if (prerender3 && (mod.POST || mod.PUT || mod.DELETE || mod.PATCH)) {
      throw new Error('Cannot prerender pages that have endpoints with mutative methods');
    }
    const { method } = event.request;
    const is_get = method === 'HEAD' || method === 'GET';
    const handler = method === 'HEAD' ? mod.HEAD || mod.GET : mod[method];
    if (!handler && !is_get) {
      return {
        status: 405,
        error: new Error(`${method} method not allowed`),
      };
    }
    const data = {
      status: void 0,
      cookies: [],
      body: {},
    };
    if (!is_get) {
      const {
        status,
        headers: headers2,
        body: body2,
      } = validate_shadow_output(await handler(event));
      add_cookies(data.cookies, headers2);
      data.status = status;
      if (body2 instanceof Error) {
        if (status < 400) {
          data.status = 500;
          data.error = new Error('A non-error status code was returned with an error body');
        } else {
          data.error = body2;
        }
        return data;
      }
      if (status >= 300 && status < 400) {
        data.redirect = headers2 instanceof Headers ? headers2.get('location') : headers2.location;
        return data;
      }
      data.body = body2;
    }
    const get = (method === 'HEAD' && mod.HEAD) || mod.GET;
    if (get) {
      const { status, headers: headers2, body: body2 } = validate_shadow_output(await get(event));
      add_cookies(data.cookies, headers2);
      if (body2 instanceof Error) {
        if (status < 400) {
          data.status = 500;
          data.error = new Error('A non-error status code was returned with an error body');
        } else {
          data.status = status;
          data.error = body2;
        }
        return data;
      }
      if (status >= 400) {
        data.status = status;
        data.error = new Error('Failed to load data');
        return data;
      }
      if (status >= 300) {
        data.status = status;
        data.redirect = headers2 instanceof Headers ? headers2.get('location') : headers2.location;
        return data;
      }
      data.body = { ...body2, ...data.body };
    }
    return data;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    return {
      status: 500,
      error: error2,
    };
  }
}
function add_cookies(target, headers2) {
  const cookies = headers2['set-cookie'];
  if (cookies) {
    if (Array.isArray(cookies)) {
      target.push(...cookies);
    } else {
      target.push(cookies);
    }
  }
}
function validate_shadow_output(result) {
  if (result.fallthrough) {
    throw new Error(
      'fallthrough is no longer supported. Use matchers instead: https://kit.svelte.dev/docs/routing#advanced-routing-matching'
    );
  }
  const { status = 200, body: body2 = {} } = result;
  let headers2 = result.headers || {};
  if (headers2 instanceof Headers) {
    if (headers2.has('set-cookie')) {
      throw new Error(
        'Endpoint request handler cannot use Headers interface with Set-Cookie headers'
      );
    }
  } else {
    headers2 = lowercase_keys(headers2);
  }
  if (!is_pojo(body2)) {
    throw new Error(
      'Body returned from endpoint request handler must be a plain object or an Error'
    );
  }
  return { status, headers: headers2, body: body2 };
}
async function respond_with_error({
  event,
  options,
  state,
  $session,
  status,
  error: error2,
  resolve_opts,
}) {
  try {
    const branch = [];
    let stuff = {};
    if (resolve_opts.ssr) {
      const default_layout = await options.manifest._.nodes[0]();
      const default_error = await options.manifest._.nodes[1]();
      const layout_loaded = await load_node({
        event,
        options,
        state,
        route: GENERIC_ERROR,
        node: default_layout,
        $session,
        stuff: {},
        is_error: false,
        is_leaf: false,
      });
      if (layout_loaded.loaded.error) {
        throw layout_loaded.loaded.error;
      }
      const error_loaded = await load_node({
        event,
        options,
        state,
        route: GENERIC_ERROR,
        node: default_error,
        $session,
        stuff: layout_loaded ? layout_loaded.stuff : {},
        is_error: true,
        is_leaf: false,
        status,
        error: error2,
      });
      branch.push(layout_loaded, error_loaded);
      stuff = error_loaded.stuff;
    }
    return await render_response({
      options,
      state,
      $session,
      page_config: {
        hydrate: options.hydrate,
        router: options.router,
      },
      stuff,
      status,
      error: error2,
      branch,
      event,
      resolve_opts,
    });
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return new Response(error3.stack, {
      status: 500,
    });
  }
}
async function respond$1(opts) {
  const { event, options, state, $session, route, resolve_opts } = opts;
  let nodes;
  if (!resolve_opts.ssr) {
    return await render_response({
      ...opts,
      branch: [],
      page_config: {
        hydrate: true,
        router: true,
      },
      status: 200,
      error: null,
      event,
      stuff: {},
    });
  }
  try {
    nodes = await Promise.all(
      route.a.map((n) => (n == void 0 ? n : options.manifest._.nodes[n]()))
    );
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return await respond_with_error({
      event,
      options,
      state,
      $session,
      status: 500,
      error: error3,
      resolve_opts,
    });
  }
  const leaf = nodes[nodes.length - 1].module;
  let page_config = get_page_config(leaf, options);
  if (state.prerendering) {
    const should_prerender = leaf.prerender ?? options.prerender.default;
    if (!should_prerender) {
      return new Response(void 0, {
        status: 204,
      });
    }
  }
  let branch = [];
  let status = 200;
  let error2 = null;
  let set_cookie_headers = [];
  let stuff = {};
  ssr: {
    for (let i = 0; i < nodes.length; i += 1) {
      const node = nodes[i];
      let loaded;
      if (node) {
        try {
          loaded = await load_node({
            ...opts,
            node,
            stuff,
            is_error: false,
            is_leaf: i === nodes.length - 1,
          });
          set_cookie_headers = set_cookie_headers.concat(loaded.set_cookie_headers);
          if (loaded.loaded.redirect) {
            return with_cookies(
              new Response(void 0, {
                status: loaded.loaded.status,
                headers: {
                  location: loaded.loaded.redirect,
                },
              }),
              set_cookie_headers
            );
          }
          if (loaded.loaded.error) {
            error2 = loaded.loaded.error;
            status = loaded.loaded.status ?? 500;
          }
        } catch (err) {
          const e = coalesce_to_error(err);
          options.handle_error(e, event);
          status = 500;
          error2 = e;
        }
        if (loaded && !error2) {
          branch.push(loaded);
        }
        if (error2) {
          while (i--) {
            if (route.b[i]) {
              const index6 = route.b[i];
              const error_node = await options.manifest._.nodes[index6]();
              let node_loaded;
              let j = i;
              while (!(node_loaded = branch[j])) {
                j -= 1;
              }
              try {
                const error_loaded = await load_node({
                  ...opts,
                  node: error_node,
                  stuff: node_loaded.stuff,
                  is_error: true,
                  is_leaf: false,
                  status,
                  error: error2,
                });
                if (error_loaded.loaded.error) {
                  continue;
                }
                page_config = get_page_config(error_node.module, options);
                branch = branch.slice(0, j + 1).concat(error_loaded);
                stuff = { ...node_loaded.stuff, ...error_loaded.stuff };
                break ssr;
              } catch (err) {
                const e = coalesce_to_error(err);
                options.handle_error(e, event);
                continue;
              }
            }
          }
          return with_cookies(
            await respond_with_error({
              event,
              options,
              state,
              $session,
              status,
              error: error2,
              resolve_opts,
            }),
            set_cookie_headers
          );
        }
      }
      if (loaded && loaded.loaded.stuff) {
        stuff = {
          ...stuff,
          ...loaded.loaded.stuff,
        };
      }
    }
  }
  try {
    return with_cookies(
      await render_response({
        ...opts,
        stuff,
        event,
        page_config,
        status,
        error: error2,
        branch: branch.filter(Boolean),
      }),
      set_cookie_headers
    );
  } catch (err) {
    const error3 = coalesce_to_error(err);
    options.handle_error(error3, event);
    return with_cookies(
      await respond_with_error({
        ...opts,
        status: 500,
        error: error3,
      }),
      set_cookie_headers
    );
  }
}
function get_page_config(leaf, options) {
  if ('ssr' in leaf) {
    throw new Error(
      '`export const ssr` has been removed \u2014 use the handle hook instead: https://kit.svelte.dev/docs/hooks#handle'
    );
  }
  return {
    router: 'router' in leaf ? !!leaf.router : options.router,
    hydrate: 'hydrate' in leaf ? !!leaf.hydrate : options.hydrate,
  };
}
function with_cookies(response2, set_cookie_headers) {
  if (set_cookie_headers.length) {
    set_cookie_headers.forEach((value) => {
      response2.headers.append('set-cookie', value);
    });
  }
  return response2;
}
async function render_page(event, route, options, state, resolve_opts) {
  if (state.initiator === route) {
    return new Response(`Not found: ${event.url.pathname}`, {
      status: 404,
    });
  }
  if (route.shadow) {
    const type = negotiate(event.request.headers.get('accept') || 'text/html', [
      'text/html',
      'application/json',
    ]);
    if (type === 'application/json') {
      return render_endpoint(event, await route.shadow(), options);
    }
  }
  const $session = await options.hooks.getSession(event);
  return respond$1({
    event,
    options,
    state,
    $session,
    resolve_opts,
    route,
  });
}
function exec(match, names, types, matchers) {
  const params = {};
  for (let i = 0; i < names.length; i += 1) {
    const name = names[i];
    const type = types[i];
    const value = match[i + 1] || '';
    if (type) {
      const matcher = matchers[type];
      if (!matcher) throw new Error(`Missing "${type}" param matcher`);
      if (!matcher(value)) return;
    }
    params[name] = value;
  }
  return params;
}
var DATA_SUFFIX = '/__data.json';
var default_transform = ({ html }) => html;
async function respond(request2, options, state) {
  var _a, _b, _c, _d;
  let url = new URL(request2.url);
  const { parameter, allowed } = options.method_override;
  const method_override =
    (_a = url.searchParams.get(parameter)) == null ? void 0 : _a.toUpperCase();
  if (method_override) {
    if (request2.method === 'POST') {
      if (allowed.includes(method_override)) {
        request2 = new Proxy(request2, {
          get: (target, property, _receiver) => {
            if (property === 'method') return method_override;
            return Reflect.get(target, property, target);
          },
        });
      } else {
        const verb = allowed.length === 0 ? 'enabled' : 'allowed';
        const body2 = `${parameter}=${method_override} is not ${verb}. See https://kit.svelte.dev/docs/configuration#methodoverride`;
        return new Response(body2, {
          status: 400,
        });
      }
    } else {
      throw new Error(`${parameter}=${method_override} is only allowed with POST requests`);
    }
  }
  let decoded;
  try {
    decoded = decodeURI(url.pathname);
  } catch {
    return new Response('Malformed URI', { status: 400 });
  }
  let route = null;
  let params = {};
  if (options.paths.base && !((_b = state.prerendering) == null ? void 0 : _b.fallback)) {
    if (!decoded.startsWith(options.paths.base)) {
      return new Response('Not found', { status: 404 });
    }
    decoded = decoded.slice(options.paths.base.length) || '/';
  }
  const is_data_request = decoded.endsWith(DATA_SUFFIX);
  if (is_data_request) {
    const data_suffix_length = DATA_SUFFIX.length - (options.trailing_slash === 'always' ? 1 : 0);
    decoded = decoded.slice(0, -data_suffix_length) || '/';
    url = new URL(url.origin + url.pathname.slice(0, -data_suffix_length) + url.search);
  }
  if (!((_c = state.prerendering) == null ? void 0 : _c.fallback)) {
    const matchers = await options.manifest._.matchers();
    for (const candidate of options.manifest._.routes) {
      const match = candidate.pattern.exec(decoded);
      if (!match) continue;
      const matched = exec(match, candidate.names, candidate.types, matchers);
      if (matched) {
        route = candidate;
        params = decode_params(matched);
        break;
      }
    }
  }
  if (route) {
    if (route.type === 'page') {
      const normalized = normalize_path(url.pathname, options.trailing_slash);
      if (
        normalized !== url.pathname &&
        !((_d = state.prerendering) == null ? void 0 : _d.fallback)
      ) {
        return new Response(void 0, {
          status: 301,
          headers: {
            'x-sveltekit-normalize': '1',
            location:
              (normalized.startsWith('//') ? url.origin + normalized : normalized) +
              (url.search === '?' ? '' : url.search),
          },
        });
      }
    } else if (is_data_request) {
      return new Response(void 0, {
        status: 404,
      });
    }
  }
  const event = {
    get clientAddress() {
      if (!state.getClientAddress) {
        throw new Error(
          `${'svelte-adapter-firebase'} does not specify getClientAddress. Please raise an issue`
        );
      }
      Object.defineProperty(event, 'clientAddress', {
        value: state.getClientAddress(),
      });
      return event.clientAddress;
    },
    locals: {},
    params,
    platform: state.platform,
    request: request2,
    routeId: route && route.id,
    url,
  };
  const removed = (property, replacement, suffix = '') => ({
    get: () => {
      throw new Error(`event.${property} has been replaced by event.${replacement}` + suffix);
    },
  });
  const details = '. See https://github.com/sveltejs/kit/pull/3384 for details';
  const body_getter = {
    get: () => {
      throw new Error(
        'To access the request body use the text/json/arrayBuffer/formData methods, e.g. `body = await request.json()`' +
          details
      );
    },
  };
  Object.defineProperties(event, {
    method: removed('method', 'request.method', details),
    headers: removed('headers', 'request.headers', details),
    origin: removed('origin', 'url.origin'),
    path: removed('path', 'url.pathname'),
    query: removed('query', 'url.searchParams'),
    body: body_getter,
    rawBody: body_getter,
  });
  let resolve_opts = {
    ssr: true,
    transformPage: default_transform,
  };
  try {
    const response2 = await options.hooks.handle({
      event,
      resolve: async (event2, opts) => {
        var _a2;
        if (opts) {
          resolve_opts = {
            ssr: opts.ssr !== false,
            transformPage: opts.transformPage || default_transform,
          };
        }
        if ((_a2 = state.prerendering) == null ? void 0 : _a2.fallback) {
          return await render_response({
            event: event2,
            options,
            state,
            $session: await options.hooks.getSession(event2),
            page_config: { router: true, hydrate: true },
            stuff: {},
            status: 200,
            error: null,
            branch: [],
            resolve_opts: {
              ...resolve_opts,
              ssr: false,
            },
          });
        }
        if (route) {
          let response22;
          if (is_data_request && route.type === 'page' && route.shadow) {
            response22 = await render_endpoint(event2, await route.shadow(), options);
            if (request2.headers.has('x-sveltekit-load')) {
              if (response22.status >= 300 && response22.status < 400) {
                const location = response22.headers.get('location');
                if (location) {
                  const headers2 = new Headers(response22.headers);
                  headers2.set('x-sveltekit-location', location);
                  response22 = new Response(void 0, {
                    status: 204,
                    headers: headers2,
                  });
                }
              }
            }
          } else {
            response22 =
              route.type === 'endpoint'
                ? await render_endpoint(event2, await route.load(), options)
                : await render_page(event2, route, options, state, resolve_opts);
          }
          if (response22) {
            if (response22.status === 200 && response22.headers.has('etag')) {
              let if_none_match_value = request2.headers.get('if-none-match');
              if (if_none_match_value == null ? void 0 : if_none_match_value.startsWith('W/"')) {
                if_none_match_value = if_none_match_value.substring(2);
              }
              const etag = response22.headers.get('etag');
              if (if_none_match_value === etag) {
                const headers2 = new Headers({ etag });
                for (const key2 of [
                  'cache-control',
                  'content-location',
                  'date',
                  'expires',
                  'vary',
                ]) {
                  const value = response22.headers.get(key2);
                  if (value) headers2.set(key2, value);
                }
                return new Response(void 0, {
                  status: 304,
                  headers: headers2,
                });
              }
            }
            return response22;
          }
        }
        if (state.initiator === GENERIC_ERROR) {
          return new Response('Internal Server Error', {
            status: 500,
          });
        }
        if (!state.initiator) {
          const $session = await options.hooks.getSession(event2);
          return await respond_with_error({
            event: event2,
            options,
            state,
            $session,
            status: 404,
            error: new Error(`Not found: ${event2.url.pathname}`),
            resolve_opts,
          });
        }
        if (state.prerendering) {
          return new Response('not found', { status: 404 });
        }
        return await fetch(request2);
      },
      get request() {
        throw new Error('request in handle has been replaced with event' + details);
      },
    });
    if (response2 && !(response2 instanceof Response)) {
      throw new Error('handle must return a Response object' + details);
    }
    return response2;
  } catch (e) {
    const error2 = coalesce_to_error(e);
    options.handle_error(error2, event);
    const type = negotiate(event.request.headers.get('accept') || 'text/html', [
      'text/html',
      'application/json',
    ]);
    if (is_data_request || type === 'application/json') {
      return new Response(serialize_error(error2, options.get_stack), {
        status: 500,
        headers: { 'content-type': 'application/json; charset=utf-8' },
      });
    }
    try {
      const $session = await options.hooks.getSession(event);
      return await respond_with_error({
        event,
        options,
        state,
        $session,
        status: 500,
        error: error2,
        resolve_opts,
      });
    } catch (e2) {
      const error3 = coalesce_to_error(e2);
      return new Response(options.dev ? error3.stack : error3.message, {
        status: 500,
      });
    }
  }
}
var base = '';
var assets = '';
function set_paths(paths) {
  base = paths.base;
  assets = paths.assets || base;
}
var template = ({ head, body: body2, assets: assets2, nonce }) =>
  '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' +
  assets2 +
  '/favicon.png" />\n		<meta name="viewport" content="width=device-width" />\n		' +
  head +
  '\n	</head>\n	<body>\n		<div>' +
  body2 +
  '</div>\n	</body>\n</html>\n';
var read = null;
set_paths({ base: '', assets: '' });
var Server = class {
  constructor(manifest2) {
    this.options = {
      csp: {
        mode: 'auto',
        directives: { 'upgrade-insecure-requests': false, 'block-all-mixed-content': false },
        reportOnly: { 'upgrade-insecure-requests': false, 'block-all-mixed-content': false },
      },
      dev: false,
      get_stack: (error2) => String(error2),
      handle_error: (error2, event) => {
        this.options.hooks.handleError({
          error: error2,
          event,
          get request() {
            throw new Error(
              'request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details'
            );
          },
        });
        error2.stack = this.options.get_stack(error2);
      },
      hooks: null,
      hydrate: true,
      manifest: manifest2,
      method_override: { parameter: '_method', allowed: ['PATCH', 'DELETE'] },
      paths: { base, assets },
      prefix: assets + '/_app/',
      prerender: {
        default: false,
        enabled: true,
      },
      read,
      root: Root,
      service_worker: null,
      router: true,
      template,
      template_contains_nonce: false,
      trailing_slash: 'never',
    };
  }
  async respond(request2, options = {}) {
    if (!(request2 instanceof Request)) {
      throw new Error(
        'The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details'
      );
    }
    if (!this.options.hooks) {
      const module2 = await Promise.resolve().then(
        () => (init_hooks_ea7275a5(), hooks_ea7275a5_exports)
      );
      this.options.hooks = {
        getSession: module2.getSession || (() => ({})),
        handle: module2.handle || (({ event, resolve: resolve2 }) => resolve2(event)),
        handleError: module2.handleError || (({ error: error2 }) => console.error(error2.stack)),
        externalFetch: module2.externalFetch || fetch,
      };
    }
    return respond(request2, this.options, options);
  }
};

// .svelte-kit/output/server/manifest.js
init_shims();
var manifest = {
  appDir: '_app',
  assets: /* @__PURE__ */ new Set([
    'favicon.png',
    'robots.txt',
    'svelte-welcome.png',
    'svelte-welcome.webp',
  ]),
  mimeTypes: { '.png': 'image/png', '.txt': 'text/plain', '.webp': 'image/webp' },
  _: {
    entry: {
      file: 'immutable/start-feb24c62.js',
      imports: [
        'immutable/start-feb24c62.js',
        'immutable/chunks/index-8e439f9d.js',
        'immutable/chunks/index-804f213c.js',
        'immutable/chunks/singletons-cdeec3fd.js',
      ],
      stylesheets: [],
    },
    nodes: [
      () => Promise.resolve().then(() => (init__(), __exports)),
      () => Promise.resolve().then(() => (init__2(), __exports2)),
      () => Promise.resolve().then(() => (init__3(), __exports3)),
      () => Promise.resolve().then(() => (init__4(), __exports4)),
      () => Promise.resolve().then(() => (init__5(), __exports5)),
    ],
    routes: [
      {
        type: 'page',
        id: '',
        pattern: /^\/$/,
        names: [],
        types: [],
        path: '/',
        shadow: null,
        a: [0, 2],
        b: [1],
      },
      {
        type: 'page',
        id: 'about',
        pattern: /^\/about\/?$/,
        names: [],
        types: [],
        path: '/about',
        shadow: null,
        a: [0, 3],
        b: [1],
      },
      {
        type: 'page',
        id: 'todos',
        pattern: /^\/todos\/?$/,
        names: [],
        types: [],
        path: '/todos',
        shadow: () => Promise.resolve().then(() => (init_index_ts(), index_ts_exports)),
        a: [0, 4],
        b: [1],
      },
    ],
    matchers: async () => {
      return {};
    },
  },
};

// .svelte-kit/.svelte-kit/firebase-to-svelte-kit.js
init_shims();
function toSvelteKitRequest(request2) {
  const host = `${request2.headers['x-forwarded-proto']}://${request2.headers.host}`;
  const { href, pathname, searchParams: searchParameters } = new URL(request2.url || '', host);
  return new Request(href, {
    method: request2.method,
    headers: toSvelteKitHeaders(request2.headers),
    body: request2.rawBody ? request2.rawBody : null,
    host,
    path: pathname,
    query: searchParameters,
  });
}
function toSvelteKitHeaders(headers2) {
  const finalHeaders = {};
  for (const [key2, value] of Object.entries(headers2)) {
    finalHeaders[key2] = Array.isArray(value) ? value.join(',') : value;
  }
  return finalHeaders;
}

// .svelte-kit/.svelte-kit/entry.js
var server = new Server(manifest);
async function svelteKit(request2, response2) {
  const rendered = await server.respond(toSvelteKitRequest(request2));
  const body2 = await rendered.text();
  return rendered
    ? response2.writeHead(rendered.status, rendered.headers).end(body2)
    : response2.writeHead(404, 'Not Found').end();
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */
