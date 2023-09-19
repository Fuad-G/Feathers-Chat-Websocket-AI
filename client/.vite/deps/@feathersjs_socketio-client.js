import {
  __commonJS
} from "./chunk-4EOJPDL2.js";

// node_modules/@feathersjs/errors/lib/index.js
var require_lib = __commonJS({
  "node_modules/@feathersjs/errors/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.convert = exports.errors = exports.Unavailable = exports.BadGateway = exports.NotImplemented = exports.GeneralError = exports.TooManyRequests = exports.Unprocessable = exports.LengthRequired = exports.Gone = exports.Conflict = exports.Timeout = exports.NotAcceptable = exports.MethodNotAllowed = exports.NotFound = exports.Forbidden = exports.PaymentError = exports.NotAuthenticated = exports.BadRequest = exports.FeathersError = void 0;
    var FeathersError = class extends Error {
      constructor(err, name, code, className, _data) {
        let msg = typeof err === "string" ? err : "Error";
        const properties = {
          name,
          code,
          className,
          type: "FeathersError"
        };
        if (Array.isArray(_data)) {
          properties.data = _data;
        } else if (typeof err === "object" || _data !== void 0) {
          const { message, errors, ...rest } = err !== null && typeof err === "object" ? err : _data;
          msg = message || msg;
          properties.errors = errors;
          properties.data = rest;
        }
        super(msg);
        Object.assign(this, properties);
      }
      toJSON() {
        const result = {
          name: this.name,
          message: this.message,
          code: this.code,
          className: this.className
        };
        if (this.data !== void 0) {
          result.data = this.data;
        }
        if (this.errors !== void 0) {
          result.errors = this.errors;
        }
        return result;
      }
    };
    exports.FeathersError = FeathersError;
    var BadRequest = class extends FeathersError {
      constructor(message, data) {
        super(message, "BadRequest", 400, "bad-request", data);
      }
    };
    exports.BadRequest = BadRequest;
    var NotAuthenticated = class extends FeathersError {
      constructor(message, data) {
        super(message, "NotAuthenticated", 401, "not-authenticated", data);
      }
    };
    exports.NotAuthenticated = NotAuthenticated;
    var PaymentError = class extends FeathersError {
      constructor(message, data) {
        super(message, "PaymentError", 402, "payment-error", data);
      }
    };
    exports.PaymentError = PaymentError;
    var Forbidden = class extends FeathersError {
      constructor(message, data) {
        super(message, "Forbidden", 403, "forbidden", data);
      }
    };
    exports.Forbidden = Forbidden;
    var NotFound = class extends FeathersError {
      constructor(message, data) {
        super(message, "NotFound", 404, "not-found", data);
      }
    };
    exports.NotFound = NotFound;
    var MethodNotAllowed = class extends FeathersError {
      constructor(message, data) {
        super(message, "MethodNotAllowed", 405, "method-not-allowed", data);
      }
    };
    exports.MethodNotAllowed = MethodNotAllowed;
    var NotAcceptable = class extends FeathersError {
      constructor(message, data) {
        super(message, "NotAcceptable", 406, "not-acceptable", data);
      }
    };
    exports.NotAcceptable = NotAcceptable;
    var Timeout = class extends FeathersError {
      constructor(message, data) {
        super(message, "Timeout", 408, "timeout", data);
      }
    };
    exports.Timeout = Timeout;
    var Conflict = class extends FeathersError {
      constructor(message, data) {
        super(message, "Conflict", 409, "conflict", data);
      }
    };
    exports.Conflict = Conflict;
    var Gone = class extends FeathersError {
      constructor(message, data) {
        super(message, "Gone", 410, "gone", data);
      }
    };
    exports.Gone = Gone;
    var LengthRequired = class extends FeathersError {
      constructor(message, data) {
        super(message, "LengthRequired", 411, "length-required", data);
      }
    };
    exports.LengthRequired = LengthRequired;
    var Unprocessable = class extends FeathersError {
      constructor(message, data) {
        super(message, "Unprocessable", 422, "unprocessable", data);
      }
    };
    exports.Unprocessable = Unprocessable;
    var TooManyRequests = class extends FeathersError {
      constructor(message, data) {
        super(message, "TooManyRequests", 429, "too-many-requests", data);
      }
    };
    exports.TooManyRequests = TooManyRequests;
    var GeneralError = class extends FeathersError {
      constructor(message, data) {
        super(message, "GeneralError", 500, "general-error", data);
      }
    };
    exports.GeneralError = GeneralError;
    var NotImplemented = class extends FeathersError {
      constructor(message, data) {
        super(message, "NotImplemented", 501, "not-implemented", data);
      }
    };
    exports.NotImplemented = NotImplemented;
    var BadGateway = class extends FeathersError {
      constructor(message, data) {
        super(message, "BadGateway", 502, "bad-gateway", data);
      }
    };
    exports.BadGateway = BadGateway;
    var Unavailable = class extends FeathersError {
      constructor(message, data) {
        super(message, "Unavailable", 503, "unavailable", data);
      }
    };
    exports.Unavailable = Unavailable;
    exports.errors = {
      FeathersError,
      BadRequest,
      NotAuthenticated,
      PaymentError,
      Forbidden,
      NotFound,
      MethodNotAllowed,
      NotAcceptable,
      Timeout,
      Conflict,
      LengthRequired,
      Unprocessable,
      TooManyRequests,
      GeneralError,
      NotImplemented,
      BadGateway,
      Unavailable,
      400: BadRequest,
      401: NotAuthenticated,
      402: PaymentError,
      403: Forbidden,
      404: NotFound,
      405: MethodNotAllowed,
      406: NotAcceptable,
      408: Timeout,
      409: Conflict,
      410: Gone,
      411: LengthRequired,
      422: Unprocessable,
      429: TooManyRequests,
      500: GeneralError,
      501: NotImplemented,
      502: BadGateway,
      503: Unavailable
    };
    function convert(error) {
      if (!error) {
        return error;
      }
      const FeathersError2 = exports.errors[error.name];
      const result = FeathersError2 ? new FeathersError2(error.message, error.data) : new Error(error.message || error);
      if (typeof error === "object") {
        Object.assign(result, error);
      }
      return result;
    }
    exports.convert = convert;
  }
});

// node_modules/@feathersjs/commons/lib/debug.js
var require_debug = __commonJS({
  "node_modules/@feathersjs/commons/lib/debug.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createDebug = exports.setDebug = exports.noopDebug = void 0;
    var debuggers = {};
    function noopDebug() {
      return function() {
      };
    }
    exports.noopDebug = noopDebug;
    var defaultInitializer = noopDebug;
    function setDebug(debug) {
      defaultInitializer = debug;
      Object.keys(debuggers).forEach((name) => {
        debuggers[name] = debug(name);
      });
    }
    exports.setDebug = setDebug;
    function createDebug(name) {
      if (!debuggers[name]) {
        debuggers[name] = defaultInitializer(name);
      }
      return (...args) => debuggers[name](...args);
    }
    exports.createDebug = createDebug;
  }
});

// node_modules/@feathersjs/commons/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/@feathersjs/commons/lib/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createSymbol = exports.isPromise = exports._ = exports.stripSlashes = void 0;
    function stripSlashes(name) {
      return name.replace(/^(\/+)|(\/+)$/g, "");
    }
    exports.stripSlashes = stripSlashes;
    exports._ = {
      each(obj, callback) {
        if (obj && typeof obj.forEach === "function") {
          obj.forEach(callback);
        } else if (exports._.isObject(obj)) {
          Object.keys(obj).forEach((key) => callback(obj[key], key));
        }
      },
      some(value, callback) {
        return Object.keys(value).map((key) => [value[key], key]).some(([val, key]) => callback(val, key));
      },
      every(value, callback) {
        return Object.keys(value).map((key) => [value[key], key]).every(([val, key]) => callback(val, key));
      },
      keys(obj) {
        return Object.keys(obj);
      },
      values(obj) {
        return exports._.keys(obj).map((key) => obj[key]);
      },
      isMatch(obj, item) {
        return exports._.keys(item).every((key) => obj[key] === item[key]);
      },
      isEmpty(obj) {
        return exports._.keys(obj).length === 0;
      },
      isObject(item) {
        return typeof item === "object" && !Array.isArray(item) && item !== null;
      },
      isObjectOrArray(value) {
        return typeof value === "object" && value !== null;
      },
      extend(first, ...rest) {
        return Object.assign(first, ...rest);
      },
      omit(obj, ...keys) {
        const result = exports._.extend({}, obj);
        keys.forEach((key) => delete result[key]);
        return result;
      },
      pick(source, ...keys) {
        return keys.reduce((result, key) => {
          if (source[key] !== void 0) {
            result[key] = source[key];
          }
          return result;
        }, {});
      },
      // Recursively merge the source object into the target object
      merge(target, source) {
        if (exports._.isObject(target) && exports._.isObject(source)) {
          Object.keys(source).forEach((key) => {
            if (exports._.isObject(source[key])) {
              if (!target[key]) {
                Object.assign(target, { [key]: {} });
              }
              exports._.merge(target[key], source[key]);
            } else {
              Object.assign(target, { [key]: source[key] });
            }
          });
        }
        return target;
      }
    };
    function isPromise(result) {
      return exports._.isObject(result) && typeof result.then === "function";
    }
    exports.isPromise = isPromise;
    function createSymbol(name) {
      return typeof Symbol !== "undefined" ? Symbol.for(name) : name;
    }
    exports.createSymbol = createSymbol;
    __exportStar(require_debug(), exports);
  }
});

// node_modules/@feathersjs/transport-commons/lib/client.js
var require_client = __commonJS({
  "node_modules/@feathersjs/transport-commons/lib/client.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Service = void 0;
    var errors_1 = require_lib();
    var commons_1 = require_lib2();
    var debug = (0, commons_1.createDebug)("@feathersjs/transport-commons/client");
    var namespacedEmitterMethods = [
      "addListener",
      "addEventListener",
      "emit",
      "listenerCount",
      "listeners",
      "on",
      "once",
      "prependListener",
      "prependOnceListener",
      "removeAllListeners",
      "removeEventListener",
      "removeListener"
    ];
    var otherEmitterMethods = ["eventNames", "getMaxListeners", "setMaxListeners"];
    var addEmitterMethods = (service) => {
      otherEmitterMethods.forEach((method) => {
        service[method] = function(...args) {
          if (typeof this.connection[method] !== "function") {
            throw new Error(`Can not call '${method}' on the client service connection`);
          }
          return this.connection[method](...args);
        };
      });
      namespacedEmitterMethods.forEach((method) => {
        service[method] = function(name, ...args) {
          if (typeof this.connection[method] !== "function") {
            throw new Error(`Can not call '${method}' on the client service connection`);
          }
          const eventName = `${this.path} ${name}`;
          debug(`Calling emitter method ${method} with namespaced event '${eventName}'`);
          const result = this.connection[method](eventName, ...args);
          return result === this.connection ? this : result;
        };
      });
    };
    var Service = class {
      constructor(options) {
        this.events = options.events;
        this.path = options.name;
        this.connection = options.connection;
        this.method = options.method;
        addEmitterMethods(this);
      }
      send(method, ...args) {
        return new Promise((resolve, reject) => {
          args.unshift(method, this.path);
          args.push(function(error, data) {
            return error ? reject((0, errors_1.convert)(error)) : resolve(data);
          });
          debug(`Sending socket.${this.method}`, args);
          this.connection[this.method](...args);
        });
      }
      methods(...names) {
        names.forEach((name) => {
          this[name] = function(data, params = {}) {
            return this.send(name, data, params.query || {});
          };
        });
        return this;
      }
      find(params = {}) {
        return this.send("find", params.query || {});
      }
      get(id, params = {}) {
        return this.send("get", id, params.query || {});
      }
      create(data, params = {}) {
        return this.send("create", data, params.query || {});
      }
      update(id, data, params = {}) {
        return this.send("update", id, data, params.query || {});
      }
      patch(id, data, params = {}) {
        return this.send("patch", id, data, params.query || {});
      }
      remove(id, params = {}) {
        return this.send("remove", id, params.query || {});
      }
      // `off` is actually not part of the Node event emitter spec
      // but we are adding it since everybody is expecting it because
      // of the emitter-component Socket.io is using
      off(name, ...args) {
        if (typeof this.connection.off === "function") {
          const result = this.connection.off(`${this.path} ${name}`, ...args);
          return result === this.connection ? this : result;
        } else if (args.length === 0) {
          return this.removeAllListeners(name);
        }
        return this.removeListener(name, ...args);
      }
    };
    exports.Service = Service;
  }
});

// node_modules/@feathersjs/transport-commons/client.js
var require_client2 = __commonJS({
  "node_modules/@feathersjs/transport-commons/client.js"(exports, module) {
    module.exports = require_client();
  }
});

// node_modules/@feathersjs/feathers/lib/version.js
var require_version = __commonJS({
  "node_modules/@feathersjs/feathers/lib/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = "5.0.5";
  }
});

// node_modules/events/events.js
var require_events = __commonJS({
  "node_modules/events/events.js"(exports, module) {
    "use strict";
    var R = typeof Reflect === "object" ? Reflect : null;
    var ReflectApply = R && typeof R.apply === "function" ? R.apply : function ReflectApply2(target, receiver, args) {
      return Function.prototype.apply.call(target, receiver, args);
    };
    var ReflectOwnKeys;
    if (R && typeof R.ownKeys === "function") {
      ReflectOwnKeys = R.ownKeys;
    } else if (Object.getOwnPropertySymbols) {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target).concat(Object.getOwnPropertySymbols(target));
      };
    } else {
      ReflectOwnKeys = function ReflectOwnKeys2(target) {
        return Object.getOwnPropertyNames(target);
      };
    }
    function ProcessEmitWarning(warning) {
      if (console && console.warn)
        console.warn(warning);
    }
    var NumberIsNaN = Number.isNaN || function NumberIsNaN2(value) {
      return value !== value;
    };
    function EventEmitter() {
      EventEmitter.init.call(this);
    }
    module.exports = EventEmitter;
    module.exports.once = once;
    EventEmitter.EventEmitter = EventEmitter;
    EventEmitter.prototype._events = void 0;
    EventEmitter.prototype._eventsCount = 0;
    EventEmitter.prototype._maxListeners = void 0;
    var defaultMaxListeners = 10;
    function checkListener(listener) {
      if (typeof listener !== "function") {
        throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
      }
    }
    Object.defineProperty(EventEmitter, "defaultMaxListeners", {
      enumerable: true,
      get: function() {
        return defaultMaxListeners;
      },
      set: function(arg) {
        if (typeof arg !== "number" || arg < 0 || NumberIsNaN(arg)) {
          throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + ".");
        }
        defaultMaxListeners = arg;
      }
    });
    EventEmitter.init = function() {
      if (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) {
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
      }
      this._maxListeners = this._maxListeners || void 0;
    };
    EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
      if (typeof n !== "number" || n < 0 || NumberIsNaN(n)) {
        throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + ".");
      }
      this._maxListeners = n;
      return this;
    };
    function _getMaxListeners(that) {
      if (that._maxListeners === void 0)
        return EventEmitter.defaultMaxListeners;
      return that._maxListeners;
    }
    EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
      return _getMaxListeners(this);
    };
    EventEmitter.prototype.emit = function emit(type) {
      var args = [];
      for (var i = 1; i < arguments.length; i++)
        args.push(arguments[i]);
      var doError = type === "error";
      var events = this._events;
      if (events !== void 0)
        doError = doError && events.error === void 0;
      else if (!doError)
        return false;
      if (doError) {
        var er;
        if (args.length > 0)
          er = args[0];
        if (er instanceof Error) {
          throw er;
        }
        var err = new Error("Unhandled error." + (er ? " (" + er.message + ")" : ""));
        err.context = er;
        throw err;
      }
      var handler = events[type];
      if (handler === void 0)
        return false;
      if (typeof handler === "function") {
        ReflectApply(handler, this, args);
      } else {
        var len = handler.length;
        var listeners = arrayClone(handler, len);
        for (var i = 0; i < len; ++i)
          ReflectApply(listeners[i], this, args);
      }
      return true;
    };
    function _addListener(target, type, listener, prepend) {
      var m;
      var events;
      var existing;
      checkListener(listener);
      events = target._events;
      if (events === void 0) {
        events = target._events = /* @__PURE__ */ Object.create(null);
        target._eventsCount = 0;
      } else {
        if (events.newListener !== void 0) {
          target.emit(
            "newListener",
            type,
            listener.listener ? listener.listener : listener
          );
          events = target._events;
        }
        existing = events[type];
      }
      if (existing === void 0) {
        existing = events[type] = listener;
        ++target._eventsCount;
      } else {
        if (typeof existing === "function") {
          existing = events[type] = prepend ? [listener, existing] : [existing, listener];
        } else if (prepend) {
          existing.unshift(listener);
        } else {
          existing.push(listener);
        }
        m = _getMaxListeners(target);
        if (m > 0 && existing.length > m && !existing.warned) {
          existing.warned = true;
          var w = new Error("Possible EventEmitter memory leak detected. " + existing.length + " " + String(type) + " listeners added. Use emitter.setMaxListeners() to increase limit");
          w.name = "MaxListenersExceededWarning";
          w.emitter = target;
          w.type = type;
          w.count = existing.length;
          ProcessEmitWarning(w);
        }
      }
      return target;
    }
    EventEmitter.prototype.addListener = function addListener(type, listener) {
      return _addListener(this, type, listener, false);
    };
    EventEmitter.prototype.on = EventEmitter.prototype.addListener;
    EventEmitter.prototype.prependListener = function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };
    function onceWrapper() {
      if (!this.fired) {
        this.target.removeListener(this.type, this.wrapFn);
        this.fired = true;
        if (arguments.length === 0)
          return this.listener.call(this.target);
        return this.listener.apply(this.target, arguments);
      }
    }
    function _onceWrap(target, type, listener) {
      var state = { fired: false, wrapFn: void 0, target, type, listener };
      var wrapped = onceWrapper.bind(state);
      wrapped.listener = listener;
      state.wrapFn = wrapped;
      return wrapped;
    }
    EventEmitter.prototype.once = function once2(type, listener) {
      checkListener(listener);
      this.on(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.prependOnceListener = function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };
    EventEmitter.prototype.removeListener = function removeListener(type, listener) {
      var list, events, position, i, originalListener;
      checkListener(listener);
      events = this._events;
      if (events === void 0)
        return this;
      list = events[type];
      if (list === void 0)
        return this;
      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = /* @__PURE__ */ Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit("removeListener", type, list.listener || listener);
        }
      } else if (typeof list !== "function") {
        position = -1;
        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }
        if (position < 0)
          return this;
        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }
        if (list.length === 1)
          events[type] = list[0];
        if (events.removeListener !== void 0)
          this.emit("removeListener", type, originalListener || listener);
      }
      return this;
    };
    EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
    EventEmitter.prototype.removeAllListeners = function removeAllListeners(type) {
      var listeners, events, i;
      events = this._events;
      if (events === void 0)
        return this;
      if (events.removeListener === void 0) {
        if (arguments.length === 0) {
          this._events = /* @__PURE__ */ Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== void 0) {
          if (--this._eventsCount === 0)
            this._events = /* @__PURE__ */ Object.create(null);
          else
            delete events[type];
        }
        return this;
      }
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === "removeListener")
            continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = /* @__PURE__ */ Object.create(null);
        this._eventsCount = 0;
        return this;
      }
      listeners = events[type];
      if (typeof listeners === "function") {
        this.removeListener(type, listeners);
      } else if (listeners !== void 0) {
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }
      return this;
    };
    function _listeners(target, type, unwrap) {
      var events = target._events;
      if (events === void 0)
        return [];
      var evlistener = events[type];
      if (evlistener === void 0)
        return [];
      if (typeof evlistener === "function")
        return unwrap ? [evlistener.listener || evlistener] : [evlistener];
      return unwrap ? unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
    }
    EventEmitter.prototype.listeners = function listeners(type) {
      return _listeners(this, type, true);
    };
    EventEmitter.prototype.rawListeners = function rawListeners(type) {
      return _listeners(this, type, false);
    };
    EventEmitter.listenerCount = function(emitter, type) {
      if (typeof emitter.listenerCount === "function") {
        return emitter.listenerCount(type);
      } else {
        return listenerCount.call(emitter, type);
      }
    };
    EventEmitter.prototype.listenerCount = listenerCount;
    function listenerCount(type) {
      var events = this._events;
      if (events !== void 0) {
        var evlistener = events[type];
        if (typeof evlistener === "function") {
          return 1;
        } else if (evlistener !== void 0) {
          return evlistener.length;
        }
      }
      return 0;
    }
    EventEmitter.prototype.eventNames = function eventNames() {
      return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
    };
    function arrayClone(arr, n) {
      var copy = new Array(n);
      for (var i = 0; i < n; ++i)
        copy[i] = arr[i];
      return copy;
    }
    function spliceOne(list, index) {
      for (; index + 1 < list.length; index++)
        list[index] = list[index + 1];
      list.pop();
    }
    function unwrapListeners(arr) {
      var ret = new Array(arr.length);
      for (var i = 0; i < ret.length; ++i) {
        ret[i] = arr[i].listener || arr[i];
      }
      return ret;
    }
    function once(emitter, name) {
      return new Promise(function(resolve, reject) {
        function errorListener(err) {
          emitter.removeListener(name, resolver);
          reject(err);
        }
        function resolver() {
          if (typeof emitter.removeListener === "function") {
            emitter.removeListener("error", errorListener);
          }
          resolve([].slice.call(arguments));
        }
        ;
        eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
        if (name !== "error") {
          addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
        }
      });
    }
    function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
      if (typeof emitter.on === "function") {
        eventTargetAgnosticAddListener(emitter, "error", handler, flags);
      }
    }
    function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
      if (typeof emitter.on === "function") {
        if (flags.once) {
          emitter.once(name, listener);
        } else {
          emitter.on(name, listener);
        }
      } else if (typeof emitter.addEventListener === "function") {
        emitter.addEventListener(name, function wrapListener(arg) {
          if (flags.once) {
            emitter.removeEventListener(name, wrapListener);
          }
          listener(arg);
        });
      } else {
        throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
      }
    }
  }
});

// node_modules/@feathersjs/hooks/script/utils.js
var require_utils = __commonJS({
  "node_modules/@feathersjs/hooks/script/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.copyFnProperties = exports.copyProperties = void 0;
    function copyProperties(target, ...originals) {
      for (const original of originals) {
        const originalProps = Object.keys(original).concat(Object.getOwnPropertySymbols(original));
        for (const prop of originalProps) {
          const propDescriptor = Object.getOwnPropertyDescriptor(original, prop);
          if (propDescriptor && !Object.prototype.hasOwnProperty.call(target, prop)) {
            Object.defineProperty(target, prop, propDescriptor);
          }
        }
      }
      return target;
    }
    exports.copyProperties = copyProperties;
    function copyFnProperties(target, original) {
      const internalProps = ["name", "length"];
      try {
        for (const prop of internalProps) {
          const value = original[prop];
          Object.defineProperty(target, prop, { value });
        }
      } catch (_e) {
      }
      return target;
    }
    exports.copyFnProperties = copyFnProperties;
  }
});

// node_modules/@feathersjs/hooks/script/base.js
var require_base = __commonJS({
  "node_modules/@feathersjs/hooks/script/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.setMiddleware = exports.getMiddleware = exports.setManager = exports.getManager = exports.convertOptions = exports.HookManager = exports.BaseHookContext = exports.HOOKS = void 0;
    var utils_js_1 = require_utils();
    exports.HOOKS = Symbol("@feathersjs/hooks");
    var BaseHookContext = class {
      constructor(data = {}) {
        Object.defineProperty(this, "self", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.assign(this, data);
      }
      toJSON() {
        const keys = Object.keys(this);
        let proto = Object.getPrototypeOf(this);
        while (proto) {
          keys.push(...Object.keys(proto));
          proto = Object.getPrototypeOf(proto);
        }
        return keys.reduce((result, key) => {
          result[key] = this[key];
          return result;
        }, {});
      }
    };
    exports.BaseHookContext = BaseHookContext;
    var HookManager = class {
      constructor() {
        Object.defineProperty(this, "_parent", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_params", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_middleware", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_props", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_defaults", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
      }
      parent(parent) {
        this._parent = parent;
        return this;
      }
      middleware(middleware) {
        this._middleware = (middleware == null ? void 0 : middleware.length) ? middleware : null;
        return this;
      }
      getMiddleware() {
        var _a;
        const previous = (_a = this._parent) == null ? void 0 : _a.getMiddleware();
        if (previous && this._middleware) {
          return previous.concat(this._middleware);
        }
        return previous || this._middleware;
      }
      collectMiddleware(self, _args) {
        const otherMiddleware = getMiddleware(self);
        const middleware = this.getMiddleware();
        if (otherMiddleware && middleware) {
          return otherMiddleware.concat(middleware);
        }
        return otherMiddleware || middleware || [];
      }
      props(props) {
        if (!this._props) {
          this._props = {};
        }
        (0, utils_js_1.copyProperties)(this._props, props);
        return this;
      }
      getProps() {
        var _a;
        const previous = (_a = this._parent) == null ? void 0 : _a.getProps();
        if (previous && this._props) {
          return (0, utils_js_1.copyProperties)({}, previous, this._props);
        }
        return previous || this._props || null;
      }
      params(...params) {
        this._params = params;
        return this;
      }
      getParams() {
        var _a;
        const previous = (_a = this._parent) == null ? void 0 : _a.getParams();
        if (previous && this._params) {
          return previous.concat(this._params);
        }
        return previous || this._params;
      }
      defaults(defaults) {
        this._defaults = defaults;
        return this;
      }
      getDefaults(self, args, context) {
        var _a;
        const defaults = typeof this._defaults === "function" ? this._defaults(self, args, context) : null;
        const previous = (_a = this._parent) == null ? void 0 : _a.getDefaults(self, args, context);
        if (previous && defaults) {
          return Object.assign({}, previous, defaults);
        }
        return previous || defaults;
      }
      getContextClass(Base = BaseHookContext) {
        const ContextClass = class ContextClass extends Base {
          constructor(data) {
            super(data);
          }
        };
        const params = this.getParams();
        const props = this.getProps();
        if (params) {
          params.forEach((name, index) => {
            if ((props == null ? void 0 : props[name]) !== void 0) {
              throw new Error(`Hooks can not have a property and param named '${name}'. Use .defaults instead.`);
            }
            Object.defineProperty(ContextClass.prototype, name, {
              enumerable: true,
              get() {
                return this == null ? void 0 : this.arguments[index];
              },
              set(value) {
                this.arguments[index] = value;
              }
            });
          });
        }
        if (props) {
          (0, utils_js_1.copyProperties)(ContextClass.prototype, props);
        }
        return ContextClass;
      }
      initializeContext(self, args, context) {
        const ctx = this._parent ? this._parent.initializeContext(self, args, context) : context;
        const defaults = this.getDefaults(self, args, ctx);
        if (self) {
          ctx.self = self;
        }
        ctx.arguments = args;
        if (defaults) {
          for (const name of Object.keys(defaults)) {
            if (ctx[name] === void 0) {
              ctx[name] = defaults[name];
            }
          }
        }
        return ctx;
      }
    };
    exports.HookManager = HookManager;
    function convertOptions(options = null) {
      if (!options) {
        return new HookManager();
      }
      return Array.isArray(options) ? new HookManager().middleware(options) : options;
    }
    exports.convertOptions = convertOptions;
    function getManager(target) {
      return target && target[exports.HOOKS] || null;
    }
    exports.getManager = getManager;
    function setManager(target, manager) {
      const parent = getManager(target);
      target[exports.HOOKS] = manager.parent(parent);
      return target;
    }
    exports.setManager = setManager;
    function getMiddleware(target) {
      const manager = getManager(target);
      return manager ? manager.getMiddleware() : null;
    }
    exports.getMiddleware = getMiddleware;
    function setMiddleware(target, middleware) {
      const manager = new HookManager().middleware(middleware);
      return setManager(target, manager);
    }
    exports.setMiddleware = setMiddleware;
  }
});

// node_modules/@feathersjs/hooks/script/compose.js
var require_compose = __commonJS({
  "node_modules/@feathersjs/hooks/script/compose.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.compose = void 0;
    function compose(middleware) {
      if (!Array.isArray(middleware)) {
        throw new TypeError("Middleware stack must be an array!");
      }
      for (const fn of middleware) {
        if (typeof fn !== "function") {
          throw new TypeError("Middleware must be composed of functions!");
        }
      }
      return function(context, next) {
        let index = -1;
        return dispatch.call(this, 0);
        function dispatch(i) {
          if (i <= index) {
            return Promise.reject(new Error("next() called multiple times"));
          }
          index = i;
          let fn = middleware[i];
          if (i === middleware.length) {
            fn = next;
          }
          if (!fn) {
            return Promise.resolve();
          }
          try {
            return Promise.resolve(fn.call(this, context, dispatch.bind(this, i + 1)));
          } catch (err) {
            return Promise.reject(err);
          }
        }
      };
    }
    exports.compose = compose;
  }
});

// node_modules/@feathersjs/hooks/script/hooks.js
var require_hooks = __commonJS({
  "node_modules/@feathersjs/hooks/script/hooks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hookDecorator = exports.objectHooks = exports.functionHooks = exports.getOriginal = void 0;
    var compose_js_1 = require_compose();
    var base_js_1 = require_base();
    var utils_js_1 = require_utils();
    function getOriginal(fn) {
      return typeof fn.original === "function" ? getOriginal(fn.original) : fn;
    }
    exports.getOriginal = getOriginal;
    function functionHooks(fn, managerOrMiddleware) {
      if (typeof fn !== "function") {
        throw new Error("Can not apply hooks to non-function");
      }
      const manager = (0, base_js_1.convertOptions)(managerOrMiddleware);
      const wrapper = function(...args) {
        const { Context, original } = wrapper;
        const returnContext = args[args.length - 1] instanceof Context;
        const base = returnContext ? args.pop() : new Context();
        const context = manager.initializeContext(this, args, base);
        const hookChain = [
          // Return `ctx.result` or the context
          (ctx, next) => next().then(() => returnContext ? ctx : ctx.result)
        ];
        const mw = manager.collectMiddleware(this, args);
        if (mw) {
          Array.prototype.push.apply(hookChain, mw);
        }
        hookChain.push((ctx, next) => {
          if (!Object.prototype.hasOwnProperty.call(context, "result")) {
            return Promise.resolve(original.apply(this, ctx.arguments)).then((result) => {
              ctx.result = result;
              return next();
            });
          }
          return next();
        });
        return (0, compose_js_1.compose)(hookChain).call(this, context);
      };
      (0, utils_js_1.copyFnProperties)(wrapper, fn);
      (0, utils_js_1.copyProperties)(wrapper, fn);
      (0, base_js_1.setManager)(wrapper, manager);
      return Object.assign(wrapper, {
        original: getOriginal(fn),
        Context: manager.getContextClass(),
        createContext: (data = {}) => {
          return new wrapper.Context(data);
        }
      });
    }
    exports.functionHooks = functionHooks;
    function objectHooks(obj, hooks) {
      if (Array.isArray(hooks)) {
        return (0, base_js_1.setMiddleware)(obj, hooks);
      }
      for (const method of Object.keys(hooks)) {
        const target = typeof obj[method] === "function" ? obj : obj.prototype;
        const fn = target && target[method];
        if (typeof fn !== "function") {
          throw new Error(`Can not apply hooks. '${method}' is not a function`);
        }
        const manager = (0, base_js_1.convertOptions)(hooks[method]);
        target[method] = functionHooks(fn, manager.props({ method }));
      }
      return obj;
    }
    exports.objectHooks = objectHooks;
    var hookDecorator = (managerOrMiddleware) => {
      const wrapper = (_target, method, descriptor) => {
        const manager = (0, base_js_1.convertOptions)(managerOrMiddleware);
        if (!descriptor) {
          (0, base_js_1.setManager)(_target.prototype, manager);
          return _target;
        }
        const fn = descriptor.value;
        if (typeof fn !== "function") {
          throw new Error(`Can not apply hooks. '${method}' is not a function`);
        }
        descriptor.value = functionHooks(fn, manager.props({ method }));
        return descriptor;
      };
      return wrapper;
    };
    exports.hookDecorator = hookDecorator;
  }
});

// node_modules/@feathersjs/hooks/script/regular.js
var require_regular = __commonJS({
  "node_modules/@feathersjs/hooks/script/regular.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.collect = exports.fromErrorHook = exports.fromAfterHook = exports.fromBeforeHook = exports.runHooks = exports.runHook = void 0;
    var compose_js_1 = require_compose();
    var runHook = (hook, context, type) => {
      const typeBefore = context.type;
      if (type)
        context.type = type;
      return Promise.resolve(hook.call(context.self, context)).then((res) => {
        if (type)
          context.type = typeBefore;
        if (res && res !== context) {
          Object.assign(context, res);
        }
      });
    };
    exports.runHook = runHook;
    var runHooks = (hooks) => (context) => hooks.reduce((promise, hook) => promise.then(() => (0, exports.runHook)(hook, context)), Promise.resolve(context));
    exports.runHooks = runHooks;
    function fromBeforeHook(hook) {
      return (context, next) => {
        return (0, exports.runHook)(hook, context, "before").then(next);
      };
    }
    exports.fromBeforeHook = fromBeforeHook;
    function fromAfterHook(hook) {
      return (context, next) => {
        return next().then(() => (0, exports.runHook)(hook, context, "after"));
      };
    }
    exports.fromAfterHook = fromAfterHook;
    function fromErrorHook(hook) {
      return (context, next) => {
        return next().catch((error) => {
          if (context.error !== error || context.result !== void 0) {
            context.original = { ...context };
            context.error = error;
            delete context.result;
          }
          return (0, exports.runHook)(hook, context, "error").then(() => {
            if (context.result === void 0 && context.error !== void 0) {
              throw context.error;
            }
          }).catch((error2) => {
            context.error = error2;
            throw context.error;
          });
        });
      };
    }
    exports.fromErrorHook = fromErrorHook;
    function collect({ before = [], after = [], error = [] }) {
      const beforeHooks = before.map(fromBeforeHook);
      const afterHooks = [...after].reverse().map(fromAfterHook);
      const errorHooks = error.length ? [fromErrorHook((0, exports.runHooks)(error))] : [];
      return (0, compose_js_1.compose)([...errorHooks, ...beforeHooks, ...afterHooks]);
    }
    exports.collect = collect;
  }
});

// node_modules/@feathersjs/hooks/script/index.js
var require_script = __commonJS({
  "node_modules/@feathersjs/hooks/script/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hooks = exports.middleware = void 0;
    var base_js_1 = require_base();
    var hooks_js_1 = require_hooks();
    __exportStar(require_hooks(), exports);
    __exportStar(require_compose(), exports);
    __exportStar(require_base(), exports);
    __exportStar(require_regular(), exports);
    function middleware(mw, options) {
      const manager = new base_js_1.HookManager().middleware(mw);
      if (options) {
        if (options.params) {
          manager.params(...options.params);
        }
        if (options.defaults) {
          manager.defaults(options.defaults);
        }
        if (options.props) {
          manager.props(options.props);
        }
      }
      return manager;
    }
    exports.middleware = middleware;
    function hooks(...args) {
      const [target, _hooks] = args;
      if (typeof target === "function" && (_hooks instanceof base_js_1.HookManager || Array.isArray(_hooks) || args.length === 1)) {
        return (0, hooks_js_1.functionHooks)(target, _hooks);
      }
      if (args.length === 2) {
        return (0, hooks_js_1.objectHooks)(target, _hooks);
      }
      return (0, hooks_js_1.hookDecorator)(target);
    }
    exports.hooks = hooks;
  }
});

// node_modules/@feathersjs/feathers/lib/service.js
var require_service = __commonJS({
  "node_modules/@feathersjs/feathers/lib/service.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.wrapService = exports.normalizeServiceOptions = exports.getServiceOptions = exports.getHookMethods = exports.protectedMethods = exports.defaultServiceEvents = exports.defaultEventMap = exports.defaultServiceMethods = exports.defaultServiceArguments = exports.SERVICE = void 0;
    var events_1 = require_events();
    var commons_1 = require_lib2();
    exports.SERVICE = (0, commons_1.createSymbol)("@feathersjs/service");
    exports.defaultServiceArguments = {
      find: ["params"],
      get: ["id", "params"],
      create: ["data", "params"],
      update: ["id", "data", "params"],
      patch: ["id", "data", "params"],
      remove: ["id", "params"]
    };
    exports.defaultServiceMethods = ["find", "get", "create", "update", "patch", "remove"];
    exports.defaultEventMap = {
      create: "created",
      update: "updated",
      patch: "patched",
      remove: "removed"
    };
    exports.defaultServiceEvents = Object.values(exports.defaultEventMap);
    exports.protectedMethods = Object.keys(Object.prototype).concat(Object.keys(events_1.EventEmitter.prototype)).concat(["all", "around", "before", "after", "error", "hooks", "setup", "teardown", "publish"]);
    function getHookMethods(service, options) {
      const { methods } = options;
      return exports.defaultServiceMethods.filter((m) => typeof service[m] === "function" && !methods.includes(m)).concat(methods);
    }
    exports.getHookMethods = getHookMethods;
    function getServiceOptions(service) {
      return service[exports.SERVICE];
    }
    exports.getServiceOptions = getServiceOptions;
    var normalizeServiceOptions = (service, options = {}) => {
      const { methods = exports.defaultServiceMethods.filter((method) => typeof service[method] === "function"), events = service.events || [] } = options;
      const serviceEvents = options.serviceEvents || exports.defaultServiceEvents.concat(events);
      return {
        ...options,
        events,
        methods,
        serviceEvents
      };
    };
    exports.normalizeServiceOptions = normalizeServiceOptions;
    function wrapService(location, service, options) {
      if (service[exports.SERVICE]) {
        return service;
      }
      const protoService = Object.create(service);
      const serviceOptions = (0, exports.normalizeServiceOptions)(service, options);
      if (Object.keys(serviceOptions.methods).length === 0 && ![...exports.defaultServiceMethods, "setup", "teardown"].some((method) => typeof service[method] === "function")) {
        throw new Error(`Invalid service object passed for path \`${location}\``);
      }
      Object.defineProperty(protoService, exports.SERVICE, {
        value: serviceOptions
      });
      return protoService;
    }
    exports.wrapService = wrapService;
  }
});

// node_modules/@feathersjs/feathers/lib/events.js
var require_events2 = __commonJS({
  "node_modules/@feathersjs/feathers/lib/events.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.eventMixin = exports.eventHook = void 0;
    var events_1 = require_events();
    var service_1 = require_service();
    function eventHook(context, next) {
      const { events } = (0, service_1.getServiceOptions)(context.self);
      const defaultEvent = service_1.defaultEventMap[context.method] || null;
      context.event = defaultEvent;
      return next().then(() => {
        if (typeof context.event === "string" && !events.includes(context.event)) {
          const results = Array.isArray(context.result) ? context.result : [context.result];
          results.forEach((element) => context.self.emit(context.event, element, context));
        }
      });
    }
    exports.eventHook = eventHook;
    function eventMixin(service) {
      const isEmitter = typeof service.on === "function" && typeof service.emit === "function";
      if (!isEmitter) {
        Object.assign(service, events_1.EventEmitter.prototype);
      }
      return service;
    }
    exports.eventMixin = eventMixin;
  }
});

// node_modules/@feathersjs/feathers/lib/hooks.js
var require_hooks2 = __commonJS({
  "node_modules/@feathersjs/feathers/lib/hooks.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hookMixin = exports.FeathersHookManager = exports.createContext = exports.enableHooks = exports.collectHooks = exports.convertHookData = void 0;
    var hooks_1 = require_script();
    var service_1 = require_service();
    var types = ["before", "after", "error", "around"];
    var isType = (value) => types.includes(value);
    function convertHookData(input) {
      const result = {};
      if (Array.isArray(input)) {
        result.all = input;
      } else if (typeof input !== "object") {
        result.all = [input];
      } else {
        for (const key of Object.keys(input)) {
          const value = input[key];
          result[key] = Array.isArray(value) ? value : [value];
        }
      }
      return result;
    }
    exports.convertHookData = convertHookData;
    function collectHooks(target, method) {
      const { collected, collectedAll, around } = target.__hooks;
      return [
        ...around.all || [],
        ...around[method] || [],
        ...collectedAll.before || [],
        ...collected[method] || [],
        ...collectedAll.after || []
      ];
    }
    exports.collectHooks = collectHooks;
    function enableHooks(object) {
      const store = {
        around: {},
        before: {},
        after: {},
        error: {},
        collected: {},
        collectedAll: {}
      };
      Object.defineProperty(object, "__hooks", {
        configurable: true,
        value: store,
        writable: true
      });
      return function registerHooks(input) {
        const store2 = this.__hooks;
        const map = Object.keys(input).reduce((map2, type) => {
          if (!isType(type)) {
            throw new Error(`'${type}' is not a valid hook type`);
          }
          map2[type] = convertHookData(input[type]);
          return map2;
        }, {});
        const types2 = Object.keys(map);
        types2.forEach((type) => Object.keys(map[type]).forEach((method) => {
          var _a;
          const mapHooks = map[type][method];
          const storeHooks = (_a = store2[type])[method] || (_a[method] = []);
          storeHooks.push(...mapHooks);
          if (method === "all") {
            if (store2.before[method] || store2.error[method]) {
              const beforeAll = (0, hooks_1.collect)({
                before: store2.before[method] || [],
                error: store2.error[method] || []
              });
              store2.collectedAll.before = [beforeAll];
            }
            if (store2.after[method]) {
              const afterAll = (0, hooks_1.collect)({
                after: store2.after[method] || []
              });
              store2.collectedAll.after = [afterAll];
            }
          } else {
            if (store2.before[method] || store2.after[method] || store2.error[method]) {
              const collected = (0, hooks_1.collect)({
                before: store2.before[method] || [],
                after: store2.after[method] || [],
                error: store2.error[method] || []
              });
              store2.collected[method] = [collected];
            }
          }
        }));
        return this;
      };
    }
    exports.enableHooks = enableHooks;
    function createContext(service, method, data = {}) {
      const createContext2 = service[method].createContext;
      if (typeof createContext2 !== "function") {
        throw new Error(`Can not create context for method ${method}`);
      }
      return createContext2(data);
    }
    exports.createContext = createContext;
    var FeathersHookManager = class extends hooks_1.HookManager {
      constructor(app, method) {
        super();
        this.app = app;
        this.method = method;
        this._middleware = [];
      }
      collectMiddleware(self, args) {
        const appHooks = collectHooks(this.app, this.method);
        const middleware = super.collectMiddleware(self, args);
        const methodHooks = collectHooks(self, this.method);
        return [...appHooks, ...middleware, ...methodHooks];
      }
      initializeContext(self, args, context) {
        const ctx = super.initializeContext(self, args, context);
        ctx.params = ctx.params || {};
        return ctx;
      }
      middleware(mw) {
        this._middleware.push(...mw);
        return this;
      }
    };
    exports.FeathersHookManager = FeathersHookManager;
    function hookMixin(service, path, options) {
      if (typeof service.hooks === "function") {
        return service;
      }
      const hookMethods = (0, service_1.getHookMethods)(service, options);
      const serviceMethodHooks = hookMethods.reduce((res, method) => {
        const params = service_1.defaultServiceArguments[method] || ["data", "params"];
        res[method] = new FeathersHookManager(this, method).params(...params).props({
          app: this,
          path,
          method,
          service,
          event: null,
          type: "around",
          get statusCode() {
            var _a;
            return (_a = this.http) === null || _a === void 0 ? void 0 : _a.status;
          },
          set statusCode(value) {
            this.http = this.http || {};
            this.http.status = value;
          }
        });
        return res;
      }, {});
      const registerHooks = enableHooks(service);
      (0, hooks_1.hooks)(service, serviceMethodHooks);
      service.hooks = function(hookOptions) {
        if (hookOptions.before || hookOptions.after || hookOptions.error || hookOptions.around) {
          return registerHooks.call(this, hookOptions);
        }
        if (Array.isArray(hookOptions)) {
          return (0, hooks_1.hooks)(this, hookOptions);
        }
        Object.keys(hookOptions).forEach((method) => {
          const manager = (0, hooks_1.getManager)(this[method]);
          if (!(manager instanceof FeathersHookManager)) {
            throw new Error(`Method ${method} is not a Feathers hooks enabled service method`);
          }
          manager.middleware(hookOptions[method]);
        });
        return this;
      };
      return service;
    }
    exports.hookMixin = hookMixin;
  }
});

// node_modules/@feathersjs/feathers/lib/application.js
var require_application = __commonJS({
  "node_modules/@feathersjs/feathers/lib/application.js"(exports) {
    "use strict";
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Feathers = void 0;
    var version_1 = __importDefault(require_version());
    var events_1 = require_events();
    var commons_1 = require_lib2();
    var hooks_1 = require_script();
    var events_2 = require_events2();
    var hooks_2 = require_hooks2();
    var service_1 = require_service();
    var hooks_3 = require_hooks2();
    var debug = (0, commons_1.createDebug)("@feathersjs/feathers");
    var Feathers = class extends events_1.EventEmitter {
      constructor() {
        super();
        this.services = {};
        this.settings = {};
        this.mixins = [hooks_2.hookMixin, events_2.eventMixin];
        this.version = version_1.default;
        this._isSetup = false;
        this.registerHooks = (0, hooks_3.enableHooks)(this);
        this.registerHooks({
          around: [events_2.eventHook]
        });
      }
      get(name) {
        return this.settings[name];
      }
      set(name, value) {
        this.settings[name] = value;
        return this;
      }
      configure(callback) {
        callback.call(this, this);
        return this;
      }
      defaultService(location) {
        throw new Error(`Can not find service '${location}'`);
      }
      service(location) {
        const path = (0, commons_1.stripSlashes)(location) || "/";
        const current = this.services[path];
        if (typeof current === "undefined") {
          this.use(path, this.defaultService(path));
          return this.service(path);
        }
        return current;
      }
      _setup() {
        this._isSetup = true;
        return Object.keys(this.services).reduce((current, path) => current.then(() => {
          const service = this.service(path);
          if (typeof service.setup === "function") {
            debug(`Setting up service for \`${path}\``);
            return service.setup(this, path);
          }
        }), Promise.resolve()).then(() => this);
      }
      get setup() {
        return this._setup;
      }
      set setup(value) {
        this._setup = value[hooks_1.HOOKS] ? value : (0, hooks_1.hooks)(value, (0, hooks_1.middleware)().params("server").props({
          app: this
        }));
      }
      _teardown() {
        this._isSetup = false;
        return Object.keys(this.services).reduce((current, path) => current.then(() => {
          const service = this.service(path);
          if (typeof service.teardown === "function") {
            debug(`Tearing down service for \`${path}\``);
            return service.teardown(this, path);
          }
        }), Promise.resolve()).then(() => this);
      }
      get teardown() {
        return this._teardown;
      }
      set teardown(value) {
        this._teardown = value[hooks_1.HOOKS] ? value : (0, hooks_1.hooks)(value, (0, hooks_1.middleware)().params("server").props({
          app: this
        }));
      }
      use(path, service, options) {
        if (typeof path !== "string") {
          throw new Error(`'${path}' is not a valid service path.`);
        }
        const location = (0, commons_1.stripSlashes)(path) || "/";
        const subApp = service;
        const isSubApp = typeof subApp.service === "function" && subApp.services;
        if (isSubApp) {
          Object.keys(subApp.services).forEach((subPath) => this.use(`${location}/${subPath}`, subApp.service(subPath)));
          return this;
        }
        const protoService = (0, service_1.wrapService)(location, service, options);
        const serviceOptions = (0, service_1.getServiceOptions)(protoService);
        for (const name of service_1.protectedMethods) {
          if (serviceOptions.methods.includes(name)) {
            throw new Error(`'${name}' on service '${location}' is not allowed as a custom method name`);
          }
        }
        debug(`Registering new service at \`${location}\``);
        this.mixins.forEach((fn) => fn.call(this, protoService, location, serviceOptions));
        this.services[location] = protoService;
        if (this._isSetup && typeof protoService.setup === "function") {
          debug(`Setting up service for \`${location}\``);
          protoService.setup(this, location);
        }
        return this;
      }
      async unuse(location) {
        const path = (0, commons_1.stripSlashes)(location) || "/";
        const service = this.services[path];
        if (service && typeof service.teardown === "function") {
          await service.teardown(this, path);
        }
        delete this.services[path];
        return service;
      }
      hooks(hookMap) {
        const untypedMap = hookMap;
        if (untypedMap.before || untypedMap.after || untypedMap.error || untypedMap.around) {
          this.registerHooks(untypedMap);
        } else if (untypedMap.setup || untypedMap.teardown) {
          (0, hooks_1.hooks)(this, untypedMap);
        } else {
          this.registerHooks({
            around: untypedMap
          });
        }
        return this;
      }
    };
    exports.Feathers = Feathers;
  }
});

// node_modules/@feathersjs/feathers/lib/declarations.js
var require_declarations = __commonJS({
  "node_modules/@feathersjs/feathers/lib/declarations.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@feathersjs/feathers/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/@feathersjs/feathers/lib/index.js"(exports, module) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Feathers = exports.version = exports.feathers = void 0;
    var commons_1 = require_lib2();
    var version_1 = __importDefault(require_version());
    exports.version = version_1.default;
    var application_1 = require_application();
    Object.defineProperty(exports, "Feathers", { enumerable: true, get: function() {
      return application_1.Feathers;
    } });
    function feathers() {
      return new application_1.Feathers();
    }
    exports.feathers = feathers;
    feathers.setDebug = commons_1.setDebug;
    __exportStar(require_hooks2(), exports);
    __exportStar(require_declarations(), exports);
    __exportStar(require_service(), exports);
    if (typeof module !== "undefined") {
      module.exports = Object.assign(feathers, module.exports);
    }
  }
});

// node_modules/@feathersjs/socketio-client/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/@feathersjs/socketio-client/lib/index.js"(exports, module) {
    Object.defineProperty(exports, "__esModule", { value: true });
    var client_1 = require_client2();
    var feathers_1 = require_lib3();
    function socketioClient(connection, options) {
      if (!connection) {
        throw new Error("Socket.io connection needs to be provided");
      }
      const defaultService = function(name) {
        const events = Object.values(feathers_1.defaultEventMap);
        const settings = Object.assign({}, options, {
          events,
          name,
          connection,
          method: "emit"
        });
        return new client_1.Service(settings);
      };
      const initialize = function(app) {
        if (app.io !== void 0) {
          throw new Error("Only one default client provider can be configured");
        }
        app.io = connection;
        app.defaultService = defaultService;
        app.mixins.unshift((service, _location, options2) => {
          if (options2 && options2.methods && service instanceof client_1.Service) {
            const customMethods = options2.methods.filter((name) => !feathers_1.defaultServiceMethods.includes(name));
            service.methods(...customMethods);
          }
        });
      };
      initialize.Service = client_1.Service;
      initialize.service = defaultService;
      return initialize;
    }
    exports.default = socketioClient;
    if (typeof module !== "undefined") {
      module.exports = Object.assign(socketioClient, module.exports);
    }
  }
});
export default require_lib4();
//# sourceMappingURL=@feathersjs_socketio-client.js.map
