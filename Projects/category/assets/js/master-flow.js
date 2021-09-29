/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler;
 * Webflow.push(readyFunction);
 */
! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var i = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var i in t) n.d(r, i, function(e) {
                return t[e]
            }.bind(null, i));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 120)
}([function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e) {
    var n = Array.isArray;
    t.exports = n
}, function(t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var i = {
        IX2EngineActionTypes: !0,
        IX2EngineConstants: !0
    };
    e.IX2EngineConstants = e.IX2EngineActionTypes = void 0;
    var o = n(170);
    Object.keys(o).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return o[t]
            }
        }))
    });
    var a = n(171);
    Object.keys(a).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return a[t]
            }
        }))
    });
    var u = n(172);
    Object.keys(u).forEach(function(t) {
        "default" !== t && "__esModule" !== t && (Object.prototype.hasOwnProperty.call(i, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: function() {
                return u[t]
            }
        }))
    });
    var c = r(n(173));
    e.IX2EngineActionTypes = c;
    var s = r(n(174));
    e.IX2EngineConstants = s
}, function(t, e, n) {
    (function(e) {
        var n = "object",
            r = function(t) {
                return t && t.Math == Math && t
            };
        t.exports = r(typeof globalThis == n && globalThis) || r(typeof window == n && window) || r(typeof self == n && self) || r(typeof e == n && e) || Function("return this")()
    }).call(this, n(22))
}, function(t, e, n) {
    var r = n(89),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r || i || Function("return this")();
    t.exports = o
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
    }
}, function(t, e, n) {
    "use strict";
    var r = {},
        i = {},
        o = [],
        a = window.Webflow || [],
        u = window.jQuery,
        c = u(window),
        s = u(document),
        f = u.isFunction,
        l = r._ = n(122),
        d = r.tram = n(64) && u.tram,
        p = !1,
        v = !1;

    function h(t) {
        r.env() && (f(t.design) && c.on("__wf_design", t.design), f(t.preview) && c.on("__wf_preview", t.preview)), f(t.destroy) && c.on("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
            if (p) return void t.ready();
            if (l.contains(o, t.ready)) return;
            o.push(t.ready)
        }(t)
    }

    function E(t) {
        f(t.design) && c.off("__wf_design", t.design), f(t.preview) && c.off("__wf_preview", t.preview), f(t.destroy) && c.off("__wf_destroy", t.destroy), t.ready && f(t.ready) && function(t) {
            o = l.filter(o, function(e) {
                return e !== t.ready
            })
        }(t)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function(t, e, n) {
        i[t] && E(i[t]);
        var r = i[t] = e(u, l, n) || {};
        return h(r), r
    }, r.require = function(t) {
        return i[t]
    }, r.push = function(t) {
        p ? f(t) && t() : a.push(t)
    }, r.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var _, g = navigator.userAgent.toLowerCase(),
        y = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        m = r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10),
        I = r.env.ios = /(ipod|iphone|ipad)/.test(g);
    r.env.safari = /safari/.test(g) && !m && !I, y && s.on("touchstart mousedown", function(t) {
        _ = t.target
    }), r.validClick = y ? function(t) {
        return t === _ || u.contains(t, _)
    } : function() {
        return !0
    };
    var T, O = "resize.webflow orientationchange.webflow load.webflow";

    function b(t, e) {
        var n = [],
            r = {};
        return r.up = l.throttle(function(t) {
            l.each(n, function(e) {
                e(t)
            })
        }), t && e && t.on(e, r.up), r.on = function(t) {
            "function" == typeof t && (l.contains(n, t) || n.push(t))
        }, r.off = function(t) {
            n = arguments.length ? l.filter(n, function(e) {
                return e !== t
            }) : []
        }, r
    }

    function A(t) {
        f(t) && t()
    }

    function w() {
        T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
    }
    r.resize = b(c, O), r.scroll = b(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = b(), r.location = function(t) {
        window.location = t
    }, r.env() && (r.location = function() {}), r.ready = function() {
        p = !0, v ? (v = !1, l.each(i, h)) : l.each(o, A), l.each(a, A), r.resize.up()
    }, r.load = function(t) {
        T.then(t)
    }, r.destroy = function(t) {
        t = t || {}, v = !0, c.triggerHandler("__wf_destroy"), null != t.domready && (p = t.domready), l.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && w()
    }, u(r.ready), w(), t.exports = window.Webflow = r
}, function(t, e, n) {
    var r = n(177),
        i = n(231),
        o = n(58),
        a = n(1),
        u = n(240);
    t.exports = function(t) {
        return "function" == typeof t ? t : null == t ? o : "object" == typeof t ? a(t) ? i(t[0], t[1]) : r(t) : u(t)
    }
}, function(t, e, n) {
    var r = n(189),
        i = n(194);
    t.exports = function(t, e) {
        var n = i(t, e);
        return r(n) ? n : void 0
    }
}, function(t, e) {
    t.exports = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(13);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2VanillaUtils = e.IX2VanillaPlugins = e.IX2ElementsReducer = e.IX2EasingUtils = e.IX2Easings = e.IX2BrowserSupport = void 0;
    var i = r(n(43));
    e.IX2BrowserSupport = i;
    var o = r(n(106));
    e.IX2Easings = o;
    var a = r(n(108));
    e.IX2EasingUtils = a;
    var u = r(n(247));
    e.IX2ElementsReducer = u;
    var c = r(n(110));
    e.IX2VanillaPlugins = c;
    var s = r(n(249));
    e.IX2VanillaUtils = s
}, function(t, e, n) {
    var r = n(19),
        i = n(190),
        o = n(191),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? i(t) : o(t)
    }
}, function(t, e, n) {
    var r = n(88),
        i = n(51);
    t.exports = function(t) {
        return null != t && i(t.length) && !r(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (t && t.__esModule) return t;
        var e = {};
        if (null != t)
            for (var n in t)
                if (Object.prototype.hasOwnProperty.call(t, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(t, n) : {};
                    r.get || r.set ? Object.defineProperty(e, n, r) : e[n] = t[n]
                }
        return e.default = t, e
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = !r(function() {
        return 7 != Object.defineProperty({}, "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t()
        } catch (t) {
            return !0
        }
    }
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e)
    }
}, function(t, e, n) {
    var r = n(14),
        i = n(37),
        o = n(67);
    t.exports = r ? function(t, e, n) {
        return i.f(t, e, o(1, n))
    } : function(t, e, n) {
        return t[e] = n, t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    e.clone = c, e.addLast = l, e.addFirst = d, e.removeLast = p, e.removeFirst = v, e.insert = h, e.removeAt = E, e.replaceAt = _, e.getIn = g, e.set = y, e.setIn = m, e.update = I, e.updateIn = T, e.merge = O, e.mergeDeep = b, e.mergeIn = A, e.omit = w, e.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(t) {
        throw new Error(t)
    }

    function a(t) {
        var e = Object.keys(t);
        return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e
    }
    var u = {}.hasOwnProperty;

    function c(t) {
        if (Array.isArray(t)) return t.slice();
        for (var e = a(t), n = {}, r = 0; r < e.length; r++) {
            var i = e[r];
            n[i] = t[i]
        }
        return n
    }

    function s(t, e, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, l = arguments.length, d = Array(l > 3 ? l - 3 : 0), p = 3; p < l; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length)
                    for (var _ = 0; _ <= E.length; _++) {
                        var g = E[_];
                        if (!t || void 0 === r[g]) {
                            var y = h[g];
                            e && f(r[g]) && f(y) && (y = s(t, e, r[g], y)), void 0 !== y && y !== r[g] && (u || (u = !0, r = c(r)), r[g] = y)
                        }
                    }
            }
        }
        return r
    }

    function f(t) {
        var e = void 0 === t ? "undefined" : r(t);
        return null != t && ("object" === e || "function" === e)
    }

    function l(t, e) {
        return Array.isArray(e) ? t.concat(e) : t.concat([e])
    }

    function d(t, e) {
        return Array.isArray(e) ? e.concat(t) : [e].concat(t)
    }

    function p(t) {
        return t.length ? t.slice(0, t.length - 1) : t
    }

    function v(t) {
        return t.length ? t.slice(1) : t
    }

    function h(t, e, n) {
        return t.slice(0, e).concat(Array.isArray(n) ? n : [n]).concat(t.slice(e))
    }

    function E(t, e) {
        return e >= t.length || e < 0 ? t : t.slice(0, e).concat(t.slice(e + 1))
    }

    function _(t, e, n) {
        if (t[e] === n) return t;
        for (var r = t.length, i = Array(r), o = 0; o < r; o++) i[o] = t[o];
        return i[e] = n, i
    }

    function g(t, e) {
        if (!Array.isArray(e) && o(i), null != t) {
            for (var n = t, r = 0; r < e.length; r++) {
                var a = e[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function y(t, e, n) {
        var r = null == t ? "number" == typeof e ? [] : {} : t;
        if (r[e] === n) return r;
        var i = c(r);
        return i[e] = n, i
    }

    function m(t, e, n) {
        return e.length ? function t(e, n, r, i) {
            var o = void 0,
                a = n[i];
            o = i === n.length - 1 ? r : t(f(e) && f(e[a]) ? e[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return y(e, a, o)
        }(t, e, n, 0) : n
    }

    function I(t, e, n) {
        return y(t, e, n(null == t ? void 0 : t[e]))
    }

    function T(t, e, n) {
        return m(t, e, n(g(t, e)))
    }

    function O(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, t, e, n, r, i, o].concat(u)) : s(!1, !1, t, e, n, r, i, o)
    }

    function b(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, t, e, n, r, i, o].concat(u)) : s(!1, !0, t, e, n, r, i, o)
    }

    function A(t, e, n, r, i, o, a) {
        var u = g(t, e);
        null == u && (u = {});
        for (var c = arguments.length, f = Array(c > 7 ? c - 7 : 0), l = 7; l < c; l++) f[l - 7] = arguments[l];
        return m(t, e, f.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(f)) : s(!1, !1, u, n, r, i, o, a))
    }

    function w(t, e) {
        for (var n = Array.isArray(e) ? e : [e], r = !1, i = 0; i < n.length; i++)
            if (u.call(t, n[i])) {
                r = !0;
                break
            }
        if (!r) return t;
        for (var o = {}, c = a(t), s = 0; s < c.length; s++) {
            var f = c[s];
            n.indexOf(f) >= 0 || (o[f] = t[f])
        }
        return o
    }

    function S(t, e, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, t, e, n, r, i, o].concat(u)) : s(!0, !1, t, e, n, r, i, o)
    }
    var R = {
        clone: c,
        addLast: l,
        addFirst: d,
        removeLast: p,
        removeFirst: v,
        insert: h,
        removeAt: E,
        replaceAt: _,
        getIn: g,
        set: y,
        setIn: m,
        update: I,
        updateIn: T,
        merge: O,
        mergeDeep: b,
        mergeIn: A,
        omit: w,
        addDefaults: S
    };
    e.default = R
}, function(t, e, n) {
    var r = n(4).Symbol;
    t.exports = r
}, function(t, e, n) {
    var r = n(35),
        i = 1 / 0;
    t.exports = function(t) {
        if ("string" == typeof t || r(t)) return t;
        var e = t + "";
        return "0" == e && 1 / t == -i ? "-0" : e
    }
}, function(t, e) {
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        })(t)
    }

    function r(e) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? t.exports = r = function(t) {
            return n(t)
        } : t.exports = r = function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : n(t)
        }, r(e)
    }
    t.exports = r
}, function(t, e) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function(t, e) {
    t.exports = function(t) {
        return "object" == typeof t ? null !== t : "function" == typeof t
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t) {
        if (!r(t)) throw TypeError(String(t) + " is not an object");
        return t
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(38),
        o = n(136),
        a = r["__core-js_shared__"] || i("__core-js_shared__", {});
    (t.exports = function(t, e) {
        return a[t] || (a[t] = void 0 !== e ? e : {})
    })("versions", []).push({
        version: "3.1.3",
        mode: o ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    })
}, function(t, e) {
    t.exports = function(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }
}, function(t, e) {
    function n() {
        return t.exports = n = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        }, n.apply(this, arguments)
    }
    t.exports = n
}, function(t, e, n) {
    var r = n(179),
        i = n(180),
        o = n(181),
        a = n(182),
        u = n(183);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(44);
    t.exports = function(t, e) {
        for (var n = t.length; n--;)
            if (r(t[n][0], e)) return n;
        return -1
    }
}, function(t, e, n) {
    var r = n(8)(Object, "create");
    t.exports = r
}, function(t, e, n) {
    var r = n(203);
    t.exports = function(t, e) {
        var n = t.__data__;
        return r(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
    }
}, function(t, e, n) {
    var r = n(96),
        i = n(52),
        o = n(12);
    t.exports = function(t) {
        return o(t) ? r(t) : i(t)
    }
}, function(t, e, n) {
    var r = n(221),
        i = n(9),
        o = Object.prototype,
        a = o.hasOwnProperty,
        u = o.propertyIsEnumerable,
        c = r(function() {
            return arguments
        }()) ? r : function(t) {
            return i(t) && a.call(t, "callee") && !u.call(t, "callee")
        };
    t.exports = c
}, function(t, e, n) {
    var r = n(1),
        i = n(57),
        o = n(232),
        a = n(235);
    t.exports = function(t, e) {
        return r(t) ? t : i(t, e) ? [t] : o(a(t))
    }
}, function(t, e, n) {
    var r = n(11),
        i = n(9),
        o = "[object Symbol]";
    t.exports = function(t) {
        return "symbol" == typeof t || i(t) && r(t) == o
    }
}, function(t, e, n) {
    var r = n(132),
        i = n(134);
    t.exports = function(t) {
        return r(i(t))
    }
}, function(t, e, n) {
    var r = n(14),
        i = n(69),
        o = n(24),
        a = n(68),
        u = Object.defineProperty;
    e.f = r ? u : function(t, e, n) {
        if (o(t), e = a(e, !0), o(n), i) try {
            return u(t, e, n)
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
        return "value" in n && (t[e] = n.value), t
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(17);
    t.exports = function(t, e) {
        try {
            i(r, t, e)
        } catch (n) {
            r[t] = e
        }
        return e
    }
}, function(t, e) {
    t.exports = {}
}, function(t, e) {
    t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "ActionTypes", function() {
        return o
    }), n.d(e, "default", function() {
        return a
    });
    var r = n(79),
        i = n(165),
        o = {
            INIT: "@@redux/INIT"
        };

    function a(t, e, n) {
        var u;
        if ("function" == typeof e && void 0 === n && (n = e, e = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(t, e)
        }
        if ("function" != typeof t) throw new Error("Expected the reducer to be a function.");
        var c = t,
            s = e,
            f = [],
            l = f,
            d = !1;

        function p() {
            l === f && (l = f.slice())
        }

        function v() {
            return s
        }

        function h(t) {
            if ("function" != typeof t) throw new Error("Expected listener to be a function.");
            var e = !0;
            return p(), l.push(t),
                function() {
                    if (e) {
                        e = !1, p();
                        var n = l.indexOf(t);
                        l.splice(n, 1)
                    }
                }
        }

        function E(t) {
            if (!Object(r.default)(t)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === t.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, t)
            } finally {
                d = !1
            }
            for (var e = f = l, n = 0; n < e.length; n++) e[n]();
            return t
        }
        return E({
            type: o.INIT
        }), (u = {
            dispatch: E,
            subscribe: h,
            getState: v,
            replaceReducer: function(t) {
                if ("function" != typeof t) throw new Error("Expected the nextReducer to be a function.");
                c = t, E({
                    type: o.INIT
                })
            }
        })[i.default] = function() {
            var t, e = h;
            return (t = {
                subscribe: function(t) {
                    if ("object" != typeof t) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        t.next && t.next(v())
                    }
                    return n(), {
                        unsubscribe: e(n)
                    }
                }
            })[i.default] = function() {
                return this
            }, t
        }, u
    }
}, function(t, e, n) {
    "use strict";

    function r() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        if (0 === e.length) return function(t) {
            return t
        };
        if (1 === e.length) return e[0];
        var r = e[e.length - 1],
            i = e.slice(0, -1);
        return function() {
            return i.reduceRight(function(t, e) {
                return e(t)
            }, r.apply(void 0, arguments))
        }
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.TRANSFORM_STYLE_PREFIXED = e.TRANSFORM_PREFIXED = e.FLEX_PREFIXED = e.ELEMENT_MATCHES = e.withBrowser = e.IS_BROWSER_ENV = void 0;
    var i = r(n(85)),
        o = "undefined" != typeof window;
    e.IS_BROWSER_ENV = o;
    var a = function(t, e) {
        return o ? t() : e
    };
    e.withBrowser = a;
    var u = a(function() {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function(t) {
            return t in Element.prototype
        })
    });
    e.ELEMENT_MATCHES = u;
    var c = a(function() {
        var t = document.createElement("i"),
            e = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = e.length, r = 0; r < n; r++) {
                var i = e[r];
                if (t.style.display = i, t.style.display === i) return i
            }
            return ""
        } catch (t) {
            return ""
        }
    }, "flex");
    e.FLEX_PREFIXED = c;
    var s = a(function() {
        var t = document.createElement("i");
        if (null == t.style.transform)
            for (var e = ["Webkit", "Moz", "ms"], n = e.length, r = 0; r < n; r++) {
                var i = e[r] + "Transform";
                if (void 0 !== t.style[i]) return i
            }
        return "transform"
    }, "transform");
    e.TRANSFORM_PREFIXED = s;
    var f = s.split("transform")[0],
        l = f ? f + "TransformStyle" : "transformStyle";
    e.TRANSFORM_STYLE_PREFIXED = l
}, function(t, e) {
    t.exports = function(t, e) {
        return t === e || t != t && e != e
    }
}, function(t, e, n) {
    var r = n(8)(n(4), "Map");
    t.exports = r
}, function(t, e, n) {
    var r = n(195),
        i = n(202),
        o = n(204),
        a = n(205),
        u = n(206);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
        return t
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(4),
            i = n(222),
            o = e && !e.nodeType && e,
            a = o && "object" == typeof t && t && !t.nodeType && t,
            u = a && a.exports === o ? r.Buffer : void 0,
            c = (u ? u.isBuffer : void 0) || i;
        t.exports = c
    }).call(this, n(97)(t))
}, function(t, e) {
    var n = 9007199254740991,
        r = /^(?:0|[1-9]\d*)$/;
    t.exports = function(t, e) {
        var i = typeof t;
        return !!(e = null == e ? n : e) && ("number" == i || "symbol" != i && r.test(t)) && t > -1 && t % 1 == 0 && t < e
    }
}, function(t, e, n) {
    var r = n(223),
        i = n(224),
        o = n(225),
        a = o && o.isTypedArray,
        u = a ? i(a) : r;
    t.exports = u
}, function(t, e) {
    var n = 9007199254740991;
    t.exports = function(t) {
        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= n
    }
}, function(t, e, n) {
    var r = n(53),
        i = n(226),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return i(t);
        var e = [];
        for (var n in Object(t)) o.call(t, n) && "constructor" != n && e.push(n);
        return e
    }
}, function(t, e) {
    var n = Object.prototype;
    t.exports = function(t) {
        var e = t && t.constructor;
        return t === ("function" == typeof e && e.prototype || n)
    }
}, function(t, e, n) {
    var r = n(227),
        i = n(45),
        o = n(228),
        a = n(229),
        u = n(99),
        c = n(11),
        s = n(90),
        f = s(r),
        l = s(i),
        d = s(o),
        p = s(a),
        v = s(u),
        h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function(t) {
        var e = c(t),
            n = "[object Object]" == e ? t.constructor : void 0,
            r = n ? s(n) : "";
        if (r) switch (r) {
            case f:
                return "[object DataView]";
            case l:
                return "[object Map]";
            case d:
                return "[object Promise]";
            case p:
                return "[object Set]";
            case v:
                return "[object WeakMap]"
        }
        return e
    }), t.exports = h
}, function(t, e, n) {
    var r = n(56);
    t.exports = function(t, e, n) {
        var i = null == t ? void 0 : r(t, e);
        return void 0 === i ? n : i
    }
}, function(t, e, n) {
    var r = n(34),
        i = n(20);
    t.exports = function(t, e) {
        for (var n = 0, o = (e = r(e, t)).length; null != t && n < o;) t = t[i(e[n++])];
        return n && n == o ? t : void 0
    }
}, function(t, e, n) {
    var r = n(1),
        i = n(35),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(t, e) {
        if (r(t)) return !1;
        var n = typeof t;
        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !i(t)) || a.test(t) || !o.test(t) || null != e && t in Object(e)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(35),
        o = NaN,
        a = /^\s+|\s+$/g,
        u = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        s = /^0o[0-7]+$/i,
        f = parseInt;
    t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return o;
        if (r(t)) {
            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
            t = r(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = t.replace(a, "");
        var n = c.test(t);
        return n || s.test(t) ? f(t.slice(2), n ? 2 : 8) : u.test(t) ? o : +t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.mediaQueriesDefined = e.viewportWidthChanged = e.actionListPlaybackChanged = e.elementStateChanged = e.instanceRemoved = e.instanceStarted = e.instanceAdded = e.parameterChanged = e.animationFrameChanged = e.eventStateChanged = e.testFrameRendered = e.eventListenerAdded = e.clearRequested = e.stopRequested = e.playbackRequested = e.previewRequested = e.sessionStopped = e.sessionStarted = e.sessionInitialized = e.rawDataImported = void 0;
    var i = r(n(27)),
        o = n(2),
        a = n(10),
        u = o.IX2EngineActionTypes,
        c = u.IX2_RAW_DATA_IMPORTED,
        s = u.IX2_SESSION_INITIALIZED,
        f = u.IX2_SESSION_STARTED,
        l = u.IX2_SESSION_STOPPED,
        d = u.IX2_PREVIEW_REQUESTED,
        p = u.IX2_PLAYBACK_REQUESTED,
        v = u.IX2_STOP_REQUESTED,
        h = u.IX2_CLEAR_REQUESTED,
        E = u.IX2_EVENT_LISTENER_ADDED,
        _ = u.IX2_TEST_FRAME_RENDERED,
        g = u.IX2_EVENT_STATE_CHANGED,
        y = u.IX2_ANIMATION_FRAME_CHANGED,
        m = u.IX2_PARAMETER_CHANGED,
        I = u.IX2_INSTANCE_ADDED,
        T = u.IX2_INSTANCE_STARTED,
        O = u.IX2_INSTANCE_REMOVED,
        b = u.IX2_ELEMENT_STATE_CHANGED,
        A = u.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        w = u.IX2_VIEWPORT_WIDTH_CHANGED,
        S = u.IX2_MEDIA_QUERIES_DEFINED,
        R = a.IX2VanillaUtils.reifyState;
    e.rawDataImported = function(t) {
        return {
            type: c,
            payload: (0, i.default)({}, R(t))
        }
    };
    e.sessionInitialized = function(t) {
        var e = t.hasBoundaryNodes;
        return {
            type: s,
            payload: {
                hasBoundaryNodes: e
            }
        }
    };
    e.sessionStarted = function() {
        return {
            type: f
        }
    };
    e.sessionStopped = function() {
        return {
            type: l
        }
    };
    e.previewRequested = function(t) {
        var e = t.rawData,
            n = t.defer;
        return {
            type: d,
            payload: {
                defer: n,
                rawData: e
            }
        }
    };
    e.playbackRequested = function(t) {
        var e = t.actionTypeId,
            n = void 0 === e ? o.ActionTypeConsts.GENERAL_START_ACTION : e,
            r = t.actionListId,
            i = t.actionItemId,
            a = t.eventId,
            u = t.allowEvents,
            c = t.immediate,
            s = t.testManual,
            f = t.verbose,
            l = t.rawData;
        return {
            type: p,
            payload: {
                actionTypeId: n,
                actionListId: r,
                actionItemId: i,
                testManual: s,
                eventId: a,
                allowEvents: u,
                immediate: c,
                verbose: f,
                rawData: l
            }
        }
    };
    e.stopRequested = function(t) {
        return {
            type: v,
            payload: {
                actionListId: t
            }
        }
    };
    e.clearRequested = function() {
        return {
            type: h
        }
    };
    e.eventListenerAdded = function(t, e) {
        return {
            type: E,
            payload: {
                target: t,
                listenerParams: e
            }
        }
    };
    e.testFrameRendered = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: _,
            payload: {
                step: t
            }
        }
    };
    e.eventStateChanged = function(t, e) {
        return {
            type: g,
            payload: {
                stateKey: t,
                newState: e
            }
        }
    };
    e.animationFrameChanged = function(t, e) {
        return {
            type: y,
            payload: {
                now: t,
                parameters: e
            }
        }
    };
    e.parameterChanged = function(t, e) {
        return {
            type: m,
            payload: {
                key: t,
                value: e
            }
        }
    };
    e.instanceAdded = function(t) {
        return {
            type: I,
            payload: (0, i.default)({}, t)
        }
    };
    e.instanceStarted = function(t, e) {
        return {
            type: T,
            payload: {
                instanceId: t,
                time: e
            }
        }
    };
    e.instanceRemoved = function(t) {
        return {
            type: O,
            payload: {
                instanceId: t
            }
        }
    };
    e.elementStateChanged = function(t, e, n, r) {
        return {
            type: b,
            payload: {
                elementId: t,
                actionTypeId: e,
                current: n,
                actionItem: r
            }
        }
    };
    e.actionListPlaybackChanged = function(t) {
        var e = t.actionListId,
            n = t.isPlaying;
        return {
            type: A,
            payload: {
                actionListId: e,
                isPlaying: n
            }
        }
    };
    e.viewportWidthChanged = function(t) {
        var e = t.width,
            n = t.mediaQueries;
        return {
            type: w,
            payload: {
                width: e,
                mediaQueries: n
            }
        }
    };
    e.mediaQueriesDefined = function() {
        return {
            type: S
        }
    }
}, function(t, e, n) {
    var r = n(117),
        i = n(62);

    function o(t, e) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, t.exports = o
}, function(t, e) {
    t.exports = function() {}
}, function(t, e, n) {
    var r = n(117),
        i = n(62),
        o = 4294967295;

    function a(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, t.exports = a
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    window.tram = function(t) {
        function e(t, e) {
            return (new F.Bare).init(t, e)
        }

        function n(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function i(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(t, e, n) {
            s("Units do not match [" + t + "]: " + e + ", " + n)
        }

        function c(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var r = n;
            return $.test(t) || !Z.test(t) ? r = parseInt(t, 10) : Z.test(t) && (r = 1e3 * parseFloat(t)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(t) {
            H.debug && window && window.console.warn(t)
        }
        var f = function(t, e, n) {
                function i(t) {
                    return "object" == (0, r.default)(t)
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}
                return function r(u, c) {
                    function s() {
                        var t = new f;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function f() {}
                    c === n && (c = u, u = Object), s.Bare = f;
                    var l, d = a[t] = u[t],
                        p = f[t] = s[t] = new a;
                    return p.constructor = s, s.mixin = function(e) {
                        return f[t] = s[t] = r(s, e)[t], s
                    }, s.open = function(t) {
                        if (l = {}, o(t) ? l = t.call(s, p, d, s, u) : i(t) && (l = t), i(l))
                            for (var n in l) e.call(l, n) && (p[n] = l[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }],
                "ease-out": ["ease-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, r) {
                    var i = (t /= r) * t,
                        o = i * t;
                    return e + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }],
                linear: ["linear", function(t, e, n, r) {
                    return n * t / r + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, r) {
                    return n * (t /= r) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, r) {
                    return -n * (t /= r) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, r) {
                    return n * (t /= r) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, r) {
                    return -n * ((t = t / r - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, r) {
                    return n * (t /= r) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, r) {
                    return n * ((t = t / r - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, r) {
                    return -n * Math.cos(t / r * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, r) {
                    return n * Math.sin(t / r * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, r) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / r - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, r) {
                    return t === r ? e + n : n * (1 - Math.pow(2, -10 * t / r)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, r) {
                    return 0 === t ? e : t === r ? e + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, r) {
                    return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, r) {
                    return n * Math.sqrt(1 - (t = t / r - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, r) {
                    return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (t /= r) * t * ((i + 1) * t - i) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((t = t / r - 1) * t * ((i + 1) * t + i) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, r, i) {
                    return void 0 === i && (i = 1.70158), (t /= r / 2) < 1 ? n / 2 * t * t * ((1 + (i *= 1.525)) * t - i) + e : n / 2 * ((t -= 2) * t * ((1 + (i *= 1.525)) * t + i) + 2) + e
                }]
            },
            d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            p = document,
            v = window,
            h = "bkwld-tram",
            E = /[\-\.0-9]/g,
            _ = /[A-Z]/,
            g = "number",
            y = /^(rgb|#)/,
            m = /(em|cm|mm|in|pt|pc|px)$/,
            I = /(em|cm|mm|in|pt|pc|px|%)$/,
            T = /(deg|rad|turn)$/,
            O = "unitless",
            b = /(all|none) 0s ease 0s/,
            A = /^(width|height)$/,
            w = " ",
            S = p.createElement("a"),
            R = ["Webkit", "Moz", "O", "ms"],
            N = ["-webkit-", "-moz-", "-o-", "-ms-"],
            x = function(t) {
                if (t in S.style) return {
                    dom: t,
                    css: t
                };
                var e, n, r = "",
                    i = t.split("-");
                for (e = 0; e < i.length; e++) r += i[e].charAt(0).toUpperCase() + i[e].slice(1);
                for (e = 0; e < R.length; e++)
                    if ((n = R[e] + r) in S.style) return {
                        dom: n,
                        css: N[e] + t
                    }
            },
            C = e.support = {
                bind: Function.prototype.bind,
                transform: x("transform"),
                transition: x("transition"),
                backface: x("backface-visibility"),
                timing: x("transition-timing-function")
            };
        if (C.transition) {
            var L = C.timing.dom;
            if (S.style[L] = l["ease-in-back"][0], !S.style[L])
                for (var D in d) l[D][0] = d[D]
        }
        var P = e.frame = function() {
                var t = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return t && C.bind ? t.bind(v) : function(t) {
                    v.setTimeout(t, 16)
                }
            }(),
            M = e.now = function() {
                var t = v.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && C.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            j = f(function(e) {
                function i(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, r = []; ++e < n;) {
                                var i = t[e];
                                i && r.push(i)
                            }
                            return r
                        }(("" + t).split(w)),
                        r = n[0];
                    e = e || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!e.weak || !this.props[r]) {
                        var o = i[0],
                            a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, e), a
                    }
                }

                function o(t, e, n) {
                    if (t) {
                        var o = (0, r.default)(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new W({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    f.call(this);
                                    break;
                                case "stop":
                                    u.call(this);
                                    break;
                                case "redraw":
                                    l.call(this);
                                    break;
                                default:
                                    i.call(this, t, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, t, function(t, e) {
                                t.span > s && (s = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (s = c(t.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new W({
                                duration: s,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var v = this,
                                h = !1,
                                E = {};
                            P(function() {
                                p.call(v, t, function(t) {
                                    t.active && (h = !0, E[t.name] = t.nextStyle)
                                }), h && v.$el.css(E)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function u(t) {
                    var e;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof t ? (e = {})[t] = 1 : e = "object" == (0, r.default)(t) && null != t ? t : this.props, p.call(this, e, v), d.call(this)
                }

                function f() {
                    u.call(this), this.el.style.display = "none"
                }

                function l() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    for (t in this.upstream && n.push(this.upstream), this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[C.transition.dom] = n)
                }

                function p(t, e, r) {
                    var o, a, u, c, s = e !== v,
                        f = {};
                    for (o in t) u = t[o], o in q ? (f.transform || (f.transform = {}), f.transform[o] = u) : (_.test(o) && (o = n(o)), o in Q ? f[o] = u : (c || (c = {}), c[o] = u));
                    for (o in f) {
                        if (u = f[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        e.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(t) {
                    t.stop()
                }

                function E(t, e) {
                    t.set(e)
                }

                function g(t) {
                    this.$el.css(t)
                }

                function y(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = Y(this.el, "transition");
                        n && !b.test(n) && (this.upstream = n)
                    }
                    C.backface && H.hideBackface && z(this.el, C.backface.css, "hidden")
                }, y("add", i), y("start", o), y("wait", function(t) {
                    t = c(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new W({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), y("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), y("next", a), y("stop", u), y("set", function(t) {
                    u.call(this, t), p.call(this, t, E, g)
                }), y("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), y("hide", f), y("redraw", l), y("destroy", function() {
                    u.call(this), t.removeData(this.el, h), this.$el = this.el = null
                })
            }),
            F = f(j, function(e) {
                function n(e, n) {
                    var r = t.data(e, h) || t.data(e, h, new j.Bare);
                    return r.el || r.init(e), n ? r.start(n) : r
                }
                e.init = function(e, r) {
                    var i = t(e);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function(t, e) {
                        o.push(n(e, r))
                    }), this.children = o, this
                }
            }),
            G = f(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }

                function n(t) {
                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500,
                    a = "ease",
                    u = 0;
                t.init = function(t, e, n, r) {
                    this.$el = t, this.el = t[0];
                    var o = e[0];
                    n[2] && (o = n[2]), K[o] && (o = K[o]), this.name = o, this.type = n[1], this.duration = c(e[1], this.duration, i), this.ease = function(t, e, n) {
                        return void 0 !== e && (n = e), t in l ? t : n
                    }(e[2], this.ease, a), this.delay = c(e[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + w + this.duration + "ms" + ("ease" != this.ease ? w + l[this.ease][0] : "") + (this.delay ? w + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new U({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return Y(this.el, this.name)
                }, t.update = function(t) {
                    z(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, o = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case g:
                            if (o) return t;
                            if (a && "" === t.replace(E, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case y:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : n(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case m:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case I:
                            if (o) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case T:
                            if (o) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case O:
                            if (o) return t;
                            if (a && I.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        s("Type warning: Expected: [" + t + "] Got: [" + (0, r.default)(e) + "] " + e)
                    }(i, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            X = f(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), y))
                }
            }),
            k = f(G, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            V = f(G, function(t, e) {
                function n(t, e) {
                    var n, r, i, o, a;
                    for (n in t) i = (o = q[n])[0], r = o[1] || n, a = this.convert(t[n], i), e.call(this, r, a, i)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), z(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new B({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    z(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function(t) {
                    var e, r = {};
                    return n.call(this, t, function(t, n, i) {
                        r[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, i))
                    }), r
                }
            }),
            U = f(function(e) {
                function n() {
                    var t, e, r, i = c.length;
                    if (i)
                        for (P(n), e = M(), t = i; t--;)(r = c[t]) && r.render(e)
                }
                var r = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || r.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = r.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        i = t.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    var t;
                    this.active || (this.start || (this.start = M()), this.active = !0, t = this, 1 === c.push(t) && P(n))
                }, e.stop = function() {
                    var e, n, r;
                    this.active && (this.active = !1, e = this, (r = t.inArray(e, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, r) : function(t) {
                            return Math.round(t * s) / s
                        }(this.begin + r * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = i(e), this.endRGB = i(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(E, "");
                        n !== t.replace(E, "") && u("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = [],
                    s = 1e3
            }),
            W = f(U, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            B = f(U, function(t, e) {
                t.init = function(t) {
                    var e, n;
                    for (e in this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current, t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new U({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, n, r = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !C.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!C.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new U(t)
        }, e.delay = function(t, e, n) {
            return new W({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var z = t.style,
            Y = t.css,
            K = {
                transform: C.transform && C.transform.css
            },
            Q = {
                color: [X, y],
                background: [X, y, "background-color"],
                "outline-color": [X, y],
                "border-color": [X, y],
                "border-top-color": [X, y],
                "border-right-color": [X, y],
                "border-bottom-color": [X, y],
                "border-left-color": [X, y],
                "border-width": [G, m],
                "border-top-width": [G, m],
                "border-right-width": [G, m],
                "border-bottom-width": [G, m],
                "border-left-width": [G, m],
                "border-spacing": [G, m],
                "letter-spacing": [G, m],
                margin: [G, m],
                "margin-top": [G, m],
                "margin-right": [G, m],
                "margin-bottom": [G, m],
                "margin-left": [G, m],
                padding: [G, m],
                "padding-top": [G, m],
                "padding-right": [G, m],
                "padding-bottom": [G, m],
                "padding-left": [G, m],
                "outline-width": [G, m],
                opacity: [G, g],
                top: [G, I],
                right: [G, I],
                bottom: [G, I],
                left: [G, I],
                "font-size": [G, I],
                "text-indent": [G, I],
                "word-spacing": [G, I],
                width: [G, I],
                "min-width": [G, I],
                "max-width": [G, I],
                height: [G, I],
                "min-height": [G, I],
                "max-height": [G, I],
                "line-height": [G, O],
                "scroll-top": [k, g, "scrollTop"],
                "scroll-left": [k, g, "scrollLeft"]
            },
            q = {};
        C.transform && (Q.transform = [V], q = {
            x: [I, "translateX"],
            y: [I, "translateY"],
            rotate: [T],
            rotateX: [T],
            rotateY: [T],
            scale: [g],
            scaleX: [g],
            scaleY: [g],
            skew: [T],
            skewX: [T],
            skewY: [T]
        }), C.transform && C.backface && (q.z = [I, "translateZ"], q.rotateZ = [T], q.scaleZ = [g], q.perspective = [m]);
        var $ = /ms/,
            Z = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    "use strict";
    var r = n(124);

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var o = window.jQuery,
        a = {},
        u = {
            reset: function(t, e) {
                r.triggers.reset(t, e)
            },
            intro: function(t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), t.exports = a
}, function(t, e, n) {
    var r = n(14),
        i = n(131),
        o = n(67),
        a = n(36),
        u = n(68),
        c = n(16),
        s = n(69),
        f = Object.getOwnPropertyDescriptor;
    e.f = r ? f : function(t, e) {
        if (t = a(t), e = u(e, !0), s) try {
            return f(t, e)
        } catch (t) {}
        if (c(t, e)) return o(!i.f.call(t, e), t[e])
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        }
    }
}, function(t, e, n) {
    var r = n(23);
    t.exports = function(t, e) {
        if (!r(t)) return t;
        var n, i;
        if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
        if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value")
    }
}, function(t, e, n) {
    var r = n(14),
        i = n(15),
        o = n(70);
    t.exports = !r && !i(function() {
        return 7 != Object.defineProperty(o("div"), "a", {
            get: function() {
                return 7
            }
        }).a
    })
}, function(t, e, n) {
    var r = n(3),
        i = n(23),
        o = r.document,
        a = i(o) && i(o.createElement);
    t.exports = function(t) {
        return a ? o.createElement(t) : {}
    }
}, function(t, e, n) {
    var r = n(25);
    t.exports = r("native-function-to-string", Function.toString)
}, function(t, e, n) {
    var r = n(25),
        i = n(73),
        o = r("keys");
    t.exports = function(t) {
        return o[t] || (o[t] = i(t))
    }
}, function(t, e) {
    var n = 0,
        r = Math.random();
    t.exports = function(t) {
        return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++n + r).toString(36)
    }
}, function(t, e, n) {
    var r = n(141),
        i = n(3),
        o = function(t) {
            return "function" == typeof t ? t : void 0
        };
    t.exports = function(t, e) {
        return arguments.length < 2 ? o(r[t]) || o(i[t]) : r[t] && r[t][e] || i[t] && i[t][e]
    }
}, function(t, e, n) {
    var r = n(16),
        i = n(36),
        o = n(76).indexOf,
        a = n(39);
    t.exports = function(t, e) {
        var n, u = i(t),
            c = 0,
            s = [];
        for (n in u) !r(a, n) && r(u, n) && s.push(n);
        for (; e.length > c;) r(u, n = e[c++]) && (~o(s, n) || s.push(n));
        return s
    }
}, function(t, e, n) {
    var r = n(36),
        i = n(143),
        o = n(144),
        a = function(t) {
            return function(e, n, a) {
                var u, c = r(e),
                    s = i(c.length),
                    f = o(a, s);
                if (t && n != n) {
                    for (; s > f;)
                        if ((u = c[f++]) != u) return !0
                } else
                    for (; s > f; f++)
                        if ((t || f in c) && c[f] === n) return t || f || 0;
                return !t && -1
            }
        };
    t.exports = {
        includes: a(!0),
        indexOf: a(!1)
    }
}, function(t, e) {
    var n = Math.ceil,
        r = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(41);
    n.d(e, "createStore", function() {
        return r.default
    });
    var i = n(81);
    n.d(e, "combineReducers", function() {
        return i.default
    });
    var o = n(83);
    n.d(e, "bindActionCreators", function() {
        return o.default
    });
    var a = n(84);
    n.d(e, "applyMiddleware", function() {
        return a.default
    });
    var u = n(42);
    n.d(e, "compose", function() {
        return u.default
    });
    n(82)
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(157),
        i = n(162),
        o = n(164),
        a = "[object Object]",
        u = Function.prototype,
        c = Object.prototype,
        s = u.toString,
        f = c.hasOwnProperty,
        l = s.call(Object);
    e.default = function(t) {
        if (!Object(o.default)(t) || Object(r.default)(t) != a) return !1;
        var e = Object(i.default)(t);
        if (null === e) return !0;
        var n = f.call(e, "constructor") && e.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == l
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(158).default.Symbol;
    e.default = r
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(41);
    n(79), n(82);

    function i(t, e) {
        var n = e && e.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + t + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(t) {
        for (var e = Object.keys(t), n = {}, o = 0; o < e.length; o++) {
            var a = e[o];
            0, "function" == typeof t[a] && (n[a] = t[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function(t) {
                Object.keys(t).forEach(function(e) {
                    var n = t[e];
                    if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        })) throw new Error('Reducer "' + e + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + e + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (t) {
            u = t
        }
        return function() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                e = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a],
                    f = n[s],
                    l = t[s],
                    d = f(l, e);
                if (void 0 === d) {
                    var p = i(s, e);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== l
            }
            return r ? o : t
        }
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(t);
        try {
            throw new Error(t)
        } catch (t) {}
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";

    function r(t, e) {
        return function() {
            return e(t.apply(void 0, arguments))
        }
    }

    function i(t, e) {
        if ("function" == typeof t) return r(t, e);
        if ("object" != typeof t || null === t) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === t ? "null" : typeof t) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(t), i = {}, o = 0; o < n.length; o++) {
            var a = n[o],
                u = t[a];
            "function" == typeof u && (i[a] = r(u, e))
        }
        return i
    }
    n.r(e), n.d(e, "default", function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, "default", function() {
        return o
    });
    var r = n(42),
        i = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
            }
            return t
        };

    function o() {
        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return function(t) {
            return function(n, o, a) {
                var u, c = t(n, o, a),
                    s = c.dispatch,
                    f = {
                        getState: c.getState,
                        dispatch: function(t) {
                            return s(t)
                        }
                    };
                return u = e.map(function(t) {
                    return t(f)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
                    dispatch: s
                })
            }
        }
    }
}, function(t, e, n) {
    var r = n(86)(n(242));
    t.exports = r
}, function(t, e, n) {
    var r = n(7),
        i = n(12),
        o = n(32);
    t.exports = function(t) {
        return function(e, n, a) {
            var u = Object(e);
            if (!i(e)) {
                var c = r(n, 3);
                e = o(e), n = function(t) {
                    return c(u[t], t, u)
                }
            }
            var s = t(e, n, a);
            return s > -1 ? u[c ? e[s] : s] : void 0
        }
    }
}, function(t, e, n) {
    var r = n(28),
        i = n(184),
        o = n(185),
        a = n(186),
        u = n(187),
        c = n(188);

    function s(t) {
        var e = this.__data__ = new r(t);
        this.size = e.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, t.exports = s
}, function(t, e, n) {
    var r = n(11),
        i = n(5),
        o = "[object AsyncFunction]",
        a = "[object Function]",
        u = "[object GeneratorFunction]",
        c = "[object Proxy]";
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return e == a || e == u || e == o || e == c
    }
}, function(t, e, n) {
    (function(e) {
        var n = "object" == typeof e && e && e.Object === Object && e;
        t.exports = n
    }).call(this, n(22))
}, function(t, e) {
    var n = Function.prototype.toString;
    t.exports = function(t) {
        if (null != t) {
            try {
                return n.call(t)
            } catch (t) {}
            try {
                return t + ""
            } catch (t) {}
        }
        return ""
    }
}, function(t, e, n) {
    var r = n(207),
        i = n(9);
    t.exports = function t(e, n, o, a, u) {
        return e === n || (null == e || null == n || !i(e) && !i(n) ? e != e && n != n : r(e, n, o, a, t, u))
    }
}, function(t, e, n) {
    var r = n(208),
        i = n(211),
        o = n(212),
        a = 1,
        u = 2;
    t.exports = function(t, e, n, c, s, f) {
        var l = n & a,
            d = t.length,
            p = e.length;
        if (d != p && !(l && p > d)) return !1;
        var v = f.get(t),
            h = f.get(e);
        if (v && h) return v == e && h == t;
        var E = -1,
            _ = !0,
            g = n & u ? new r : void 0;
        for (f.set(t, e), f.set(e, t); ++E < d;) {
            var y = t[E],
                m = e[E];
            if (c) var I = l ? c(m, y, E, e, t, f) : c(y, m, E, t, e, f);
            if (void 0 !== I) {
                if (I) continue;
                _ = !1;
                break
            }
            if (g) {
                if (!i(e, function(t, e) {
                        if (!o(g, e) && (y === t || s(y, t, n, c, f))) return g.push(e)
                    })) {
                    _ = !1;
                    break
                }
            } else if (y !== m && !s(y, m, n, c, f)) {
                _ = !1;
                break
            }
        }
        return f.delete(t), f.delete(e), _
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(1);
    t.exports = function(t, e, n) {
        var o = e(t);
        return i(t) ? o : r(o, n(t))
    }
}, function(t, e, n) {
    var r = n(219),
        i = n(95),
        o = Object.prototype.propertyIsEnumerable,
        a = Object.getOwnPropertySymbols,
        u = a ? function(t) {
            return null == t ? [] : (t = Object(t), r(a(t), function(e) {
                return o.call(t, e)
            }))
        } : i;
    t.exports = u
}, function(t, e) {
    t.exports = function() {
        return []
    }
}, function(t, e, n) {
    var r = n(220),
        i = n(33),
        o = n(1),
        a = n(48),
        u = n(49),
        c = n(50),
        s = Object.prototype.hasOwnProperty;
    t.exports = function(t, e) {
        var n = o(t),
            f = !n && i(t),
            l = !n && !f && a(t),
            d = !n && !f && !l && c(t),
            p = n || f || l || d,
            v = p ? r(t.length, String) : [],
            h = v.length;
        for (var E in t) !e && !s.call(t, E) || p && ("length" == E || l && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function(t, e) {
    t.exports = function(t) {
        return t.webpackPolyfill || (t.deprecate = function() {}, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    var r = n(8)(n(4), "WeakMap");
    t.exports = r
}, function(t, e, n) {
    var r = n(5);
    t.exports = function(t) {
        return t == t && !r(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return function(n) {
            return null != n && n[t] === e && (void 0 !== e || t in Object(n))
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;) i[n] = e(t[n], n, t);
        return i
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (e(t[o], o, t)) return o;
        return -1
    }
}, function(t, e, n) {
    var r = n(243);
    t.exports = function(t) {
        var e = r(t),
            n = e % 1;
        return e == e ? n ? e - n : e : 0
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.inQuad = function(t) {
        return Math.pow(t, 2)
    }, e.outQuad = function(t) {
        return -(Math.pow(t - 1, 2) - 1)
    }, e.inOutQuad = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 2);
        return -.5 * ((t -= 2) * t - 2)
    }, e.inCubic = function(t) {
        return Math.pow(t, 3)
    }, e.outCubic = function(t) {
        return Math.pow(t - 1, 3) + 1
    }, e.inOutCubic = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 3);
        return .5 * (Math.pow(t - 2, 3) + 2)
    }, e.inQuart = function(t) {
        return Math.pow(t, 4)
    }, e.outQuart = function(t) {
        return -(Math.pow(t - 1, 4) - 1)
    }, e.inOutQuart = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 4);
        return -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
    }, e.inQuint = function(t) {
        return Math.pow(t, 5)
    }, e.outQuint = function(t) {
        return Math.pow(t - 1, 5) + 1
    }, e.inOutQuint = function(t) {
        if ((t /= .5) < 1) return .5 * Math.pow(t, 5);
        return .5 * (Math.pow(t - 2, 5) + 2)
    }, e.inSine = function(t) {
        return 1 - Math.cos(t * (Math.PI / 2))
    }, e.outSine = function(t) {
        return Math.sin(t * (Math.PI / 2))
    }, e.inOutSine = function(t) {
        return -.5 * (Math.cos(Math.PI * t) - 1)
    }, e.inExpo = function(t) {
        return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
    }, e.outExpo = function(t) {
        return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
    }, e.inOutExpo = function(t) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if ((t /= .5) < 1) return .5 * Math.pow(2, 10 * (t - 1));
        return .5 * (2 - Math.pow(2, -10 * --t))
    }, e.inCirc = function(t) {
        return -(Math.sqrt(1 - t * t) - 1)
    }, e.outCirc = function(t) {
        return Math.sqrt(1 - Math.pow(t - 1, 2))
    }, e.inOutCirc = function(t) {
        if ((t /= .5) < 1) return -.5 * (Math.sqrt(1 - t * t) - 1);
        return .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
    }, e.outBounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.inBack = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.outBack = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.inOutBack = function(t) {
        var e = o;
        if ((t /= .5) < 1) return t * t * ((1 + (e *= 1.525)) * t - e) * .5;
        return .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.inElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n)
    }, e.outElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (1 === t) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / n) + 1
    }, e.inOutElastic = function(t) {
        var e = o,
            n = 0,
            r = 1;
        if (0 === t) return 0;
        if (2 == (t /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, e = n / 4) : e = n / (2 * Math.PI) * Math.asin(1 / r);
        if (t < 1) return r * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / n) * .5 + 1
    }, e.swingFromTo = function(t) {
        var e = o;
        return (t /= .5) < 1 ? t * t * ((1 + (e *= 1.525)) * t - e) * .5 : .5 * ((t -= 2) * t * ((1 + (e *= 1.525)) * t + e) + 2)
    }, e.swingFrom = function(t) {
        return t * t * ((o + 1) * t - o)
    }, e.swingTo = function(t) {
        return (t -= 1) * t * ((o + 1) * t + o) + 1
    }, e.bounce = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
    }, e.bouncePast = function(t) {
        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
    }, e.easeInOut = e.easeOut = e.easeIn = e.ease = void 0;
    var i = r(n(107)),
        o = 1.70158,
        a = (0, i.default)(.25, .1, .25, 1);
    e.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    e.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    e.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    e.easeInOut = s
}, function(t, e) {
    var n = 4,
        r = .001,
        i = 1e-7,
        o = 10,
        a = 11,
        u = 1 / (a - 1),
        c = "function" == typeof Float32Array;

    function s(t, e) {
        return 1 - 3 * e + 3 * t
    }

    function f(t, e) {
        return 3 * e - 6 * t
    }

    function l(t) {
        return 3 * t
    }

    function d(t, e, n) {
        return ((s(e, n) * t + f(e, n)) * t + l(e)) * t
    }

    function p(t, e, n) {
        return 3 * s(e, n) * t * t + 2 * f(e, n) * t + l(e)
    }
    t.exports = function(t, e, s, f) {
        if (!(0 <= t && t <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var l = c ? new Float32Array(a) : new Array(a);
        if (t !== e || s !== f)
            for (var v = 0; v < a; ++v) l[v] = d(v * u, t, s);

        function h(e) {
            for (var c = 0, f = 1, v = a - 1; f !== v && l[f] <= e; ++f) c += u;
            var h = c + (e - l[--f]) / (l[f + 1] - l[f]) * u,
                E = p(h, t, s);
            return E >= r ? function(t, e, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(e, r, i);
                    if (0 === a) return e;
                    e -= (d(e, r, i) - t) / a
                }
                return e
            }(e, h, t, s) : 0 === E ? h : function(t, e, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = e + (n - e) / 2, r, a) - t) > 0 ? n = c : e = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(e, c, c + u, t, s)
        }
        return function(n) {
            return t === e && s === f ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), e, f)
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
        i = n(0),
        o = n(13);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.optimizeFloat = c, e.createBezierEasing = function(t) {
        return u.default.apply(void 0, (0, r.default)(t))
    }, e.applyEasing = function(t, e, n) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if (n) return c(e > 0 ? n(e) : e);
        return c(e > 0 && t && a[t] ? a[t](e) : e)
    };
    var a = o(n(106)),
        u = i(n(107));

    function c(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
            r = Math.pow(n, e),
            i = Number(Math.round(t * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function(t, e, n) {
    var r = n(244),
        i = n(245),
        o = n(246);
    t.exports = function(t) {
        return r(t) || i(t) || o()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(26));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.isPluginType = function(t) {
        return t === o.ActionTypeConsts.PLUGIN_LOTTIE
    }, e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginDuration = e.getPluginOrigin = e.getPluginConfig = void 0;
    var i = n(248),
        o = n(2),
        a = n(43),
        u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig,
            getOrigin: i.getPluginOrigin,
            getDuration: i.getPluginDuration,
            getDestination: i.getPluginDestination,
            createInstance: i.createPluginInstance,
            render: i.renderPlugin,
            clear: i.clearPlugin
        });
    var c = function(t) {
            return function(e) {
                if (!a.IS_BROWSER_ENV) return function() {
                    return null
                };
                var n = u[e];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(e));
                var r = n[t];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(t));
                return r
            }
        },
        s = c("getConfig");
    e.getPluginConfig = s;
    var f = c("getOrigin");
    e.getPluginOrigin = f;
    var l = c("getDuration");
    e.getPluginDuration = l;
    var d = c("getDestination");
    e.getPluginDestination = d;
    var p = c("createInstance");
    e.createPluginInstance = p;
    var v = c("render");
    e.renderPlugin = v;
    var h = c("clear");
    e.clearPlugin = h
}, function(t, e, n) {
    var r = n(112),
        i = n(255)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(253),
        i = n(32);
    t.exports = function(t, e) {
        return t && r(t, e, i)
    }
}, function(t, e, n) {
    "use strict";
    var r = n(259);
    e.__esModule = !0, e.default = void 0;
    var i = r(n(260)).default;
    e.default = i
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(109)),
        i = n(13),
        o = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.observeRequests = function(t) {
        P({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.preview
            },
            onChange: et
        }), P({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.playback
            },
            onChange: rt
        }), P({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.stop
            },
            onChange: it
        }), P({
            store: t,
            select: function(t) {
                var e = t.ixRequest;
                return e.clear
            },
            onChange: ot
        })
    }, e.startEngine = at, e.stopEngine = ut, e.stopAllActionGroups = ht, e.stopActionGroup = Et, e.startActionGroup = _t;
    var a = o(n(27)),
        u = o(n(263)),
        c = o(n(85)),
        s = o(n(55)),
        f = o(n(264)),
        l = o(n(270)),
        d = o(n(282)),
        p = o(n(283)),
        v = o(n(284)),
        h = o(n(287)),
        E = o(n(113)),
        _ = n(2),
        g = n(10),
        y = n(60),
        m = i(n(290)),
        I = o(n(291)),
        T = Object.keys(_.QuickEffectIds),
        O = function(t) {
            return T.includes(t)
        },
        b = _.IX2EngineConstants,
        A = b.COLON_DELIMITER,
        w = b.BOUNDARY_SELECTOR,
        S = b_ELEMENT,
        R = b.RENDER_GENERAL,
        N = b.W_MOD_IX,
        x = g.IX2VanillaUtils,
        C = x.getAffectedElements,
        L = x.getElementId,
        D = x.getDestinationValues,
        P = x.observeStore,
        M = x.getInstanceId,
        j = x.renderHTMLElement,
        F = x.clearAllStyles,
        G = x.getMaxDurationItemIndex,
        X = x.getComputedStyle,
        k = x.getInstanceOrigin,
        V = x.reduceListToGroup,
        U = x.shouldNamespaceEventParameter,
        W = x.getNamespacedParameterId,
        B = x.shouldAllowMediaQuery,
        H = x.cleanupHTMLElement,
        z = x.stringifyTarget,
        Y = x.mediaQueriesEqual,
        K = g.IX2VanillaPlugins,
        Q = K.isPluginType,
        q = K.createPluginInstance,
        $ = K.getPluginDuration,
        Z = navigator.userAgent,
        J = Z.match(/iPad/i) || Z.match(/iPhone/),
        tt = 12;

    function et(t, e) {
        var n = t.rawData,
            r = function() {
                at({
                    store: e,
                    rawData: n,
                    allowEvents: !0
                }), nt()
            };
        t.defer ? setTimeout(r, 0) : r()
    }

    function nt() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function rt(t, e) {
        var n = t.actionTypeId,
            r = t.actionListId,
            i = t.actionItemId,
            o = t.eventId,
            a = t.allowEvents,
            u = t.immediate,
            c = t.testManual,
            s = t.verbose,
            f = void 0 === s || s,
            l = t.rawData;
        if (r && i && l && u) {
            var d = l.actionLists[r];
            d && (l = V({
                actionList: d,
                actionItemId: i,
                rawData: l
            }))
        }
        if (at({
                store: e,
                rawData: l,
                allowEvents: a,
                testManual: c
            }), r && n === _.ActionTypeConsts.GENERAL_START_ACTION || O(n)) {
            Et({
                store: e,
                actionListId: r
            }), vt({
                store: e,
                actionListId: r,
                eventId: o
            });
            var p = _t({
                store: e,
                eventId: o,
                actionListId: r,
                immediate: u,
                verbose: f
            });
            f && p && e.dispatch((0, y.actionListPlaybackChanged)({
                actionListId: r,
                isPlaying: !u
            }))
        }
    }

    function it(t, e) {
        var n = t.actionListId;
        n ? Et({
            store: e,
            actionListId: n
        }) : ht({
            store: e
        }), ut(e)
    }

    function ot(t, e) {
        ut(e), F({
            store: e,
            elementApi: m
        })
    }

    function at(t) {
        var e, n = t.store,
            i = t.rawData,
            o = t.allowEvents,
            a = t.testManual,
            u = n.getState().ixSession;
        i && n.dispatch((0, y.rawDataImported)(i)), u.active || (n.dispatch((0, y.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(w))
        })), o && (function(t) {
            var e = t.getState().ixData.eventTypeMap;
            ft(t), (0, v.default)(e, function(e, n) {
                var i = I.default[n];
                i ? function(t) {
                    var e = t.logic,
                        n = t.store,
                        i = t.events;
                    ! function(t) {
                        if (J) {
                            var e = {},
                                n = "";
                            for (var r in t) {
                                var i = t[r],
                                    o = i.eventTypeId,
                                    a = i.target,
                                    u = m.getQuerySelector(a);
                                e[u] || o !== _.EventTypeConsts.MOUSE_CLICK && o !== _.EventTypeConsts.MOUSE_SECOND_CLICK || (e[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = e.types,
                        a = e.handler,
                        u = n.getState().ixData,
                        l = u.actionLists,
                        d = lt(i, pt);
                    if ((0, f.default)(d)) {
                        (0, v.default)(d, function(t, e) {
                            var o = i[e],
                                a = o.action,
                                f = o.id,
                                d = o.mediaQueries,
                                p = void 0 === d ? u.mediaQueryKeys : d,
                                v = a.config.actionListId;
                            if (Y(p, u.mediaQueryKeys) || n.dispatch((0, y.mediaQueriesDefined)()), a.actionTypeId === _.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function(e) {
                                    var i = e.continuousParameterGroupId,
                                        o = (0, s.default)(l, "".concat(v, ".continuousParameterGroups"), []),
                                        a = (0, c.default)(o, function(t) {
                                            var e = t.id;
                                            return e === i
                                        }),
                                        u = (e.smoothing || 0) / 100,
                                        d = (e.restingState || 0) / 100;
                                    a && t.forEach(function(t, i) {
                                        var o = f + A + i;
                                        ! function(t) {
                                            var e = t.store,
                                                n = t.eventStateKey,
                                                i = t.eventTarget,
                                                o = t.eventId,
                                                a = t.eventConfig,
                                                u = t.actionListId,
                                                c = t.parameterGroup,
                                                f = t.smoothing,
                                                l = t.restingValue,
                                                d = e.getState(),
                                                p = d.ixData,
                                                v = d.ixSession,
                                                h = p.events[o],
                                                E = h.eventTypeId,
                                                _ = {},
                                                g = {},
                                                y = [],
                                                I = c.continuousActionGroups,
                                                T = c.id;
                                            U(E, a) && (T = W(n, T));
                                            var O = v.hasBoundaryNodes && i ? m.getClosestElement(i, w) : null;
                                            I.forEach(function(t) {
                                                var e = t.keyframe,
                                                    n = t.actionItems;
                                                n.forEach(function(t) {
                                                    var n = t.actionTypeId,
                                                        o = t.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? O : null,
                                                            u = z(o) + A + n;
                                                        if (g[u] = function() {
                                                                var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                                                    n = arguments.length > 1 ? arguments[1] : void 0,
                                                                    i = arguments.length > 2 ? arguments[2] : void 0,
                                                                    o = (0, r.default)(e);
                                                                return o.some(function(e, r) {
                                                                    return e.keyframe === n && (t = r, !0)
                                                                }), null == t && (t = o.length, o.push({
                                                                    keyframe: n,
                                                                    actionItems: []
                                                                })), o[t].actionItems.push(i), o
                                                            }(g[u], e, t), !_[u]) {
                                                            _[u] = !0;
                                                            var c = t.config;
                                                            C({
                                                                config: c,
                                                                event: h,
                                                                eventTarget: i,
                                                                elementRoot: a,
                                                                elementApi: m
                                                            }).forEach(function(t) {
                                                                y.push({
                                                                    element: t,
                                                                    key: u
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), y.forEach(function(t) {
                                                var n = t.element,
                                                    r = t.key,
                                                    i = g[r],
                                                    a = (0, s.default)(i, "[0].actionItems[0]", {}),
                                                    c = a.actionTypeId,
                                                    d = Q(c) ? q(c)(n, a) : null,
                                                    p = D({
                                                        element: n,
                                                        actionItem: a,
                                                        elementApi: m
                                                    }, d);
                                                gt({
                                                    store: e,
                                                    element: n,
                                                    eventId: o,
                                                    actionListId: u,
                                                    actionItem: a,
                                                    destination: p,
                                                    continuous: !0,
                                                    parameterId: T,
                                                    actionGroups: i,
                                                    smoothing: f,
                                                    restingValue: l,
                                                    pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n,
                                            eventStateKey: o,
                                            eventTarget: t,
                                            eventId: f,
                                            eventConfig: e,
                                            actionListId: v,
                                            parameterGroup: a,
                                            smoothing: u,
                                            restingValue: d
                                        })
                                    })
                                })
                            }(a.actionTypeId === _.ActionTypeConsts.GENERAL_START_ACTION || O(a.actionTypeId)) && vt({
                                store: n,
                                actionListId: v,
                                eventId: f
                            })
                        });
                        var p = function(t) {
                                var e = n.getState(),
                                    r = e.ixSession;
                                dt(d, function(e, o, c) {
                                    var s = i[o],
                                        f = r.eventState[c],
                                        l = s.action,
                                        d = s.mediaQueries,
                                        p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (B(p, r.mediaQueryKey)) {
                                        var v = function() {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                                i = a({
                                                    store: n,
                                                    element: e,
                                                    event: s,
                                                    eventConfig: r,
                                                    nativeEvent: t,
                                                    eventStateKey: c
                                                }, f);
                                            (0, E.default)(i, f) || n.dispatch((0, y.eventStateChanged)(c, i))
                                        };
                                        if (l.actionTypeId === _.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            },
                            g = (0, h.default)(p, tt),
                            I = function(t) {
                                var e = t.target,
                                    r = void 0 === e ? document : e,
                                    i = t.types,
                                    o = t.throttle;
                                i.split(" ").filter(Boolean).forEach(function(t) {
                                    var e = o ? g : p;
                                    r.addEventListener(t, e), n.dispatch((0, y.eventListenerAdded)(r, [t, e]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(e)
                    }
                }({
                    logic: i,
                    store: t,
                    events: e
                }) : console.warn("IX2 event type not configured: ".concat(n))
            }), t.getState().ixSession.eventListeners.length && function(t) {
                var e = function() {
                    ft(t)
                };
                st.forEach(function(n) {
                    window.addEventListener(n, e), t.dispatch((0, y.eventListenerAdded)(window, [n, e]))
                }), e()
            }(t)
        }(n), -1 === (e = document.documentElement).className.indexOf(N) && (e.className += " ".concat(N)), n.getState().ixSession.hasDefinedMediaQueries && function(t) {
            P({
                store: t,
                select: function(t) {
                    return t.ixSession.mediaQueryKey
                },
                onChange: function() {
                    ut(t), F({
                        store: t,
                        elementApi: m
                    }), at({
                        store: t,
                        allowEvents: !0
                    }), nt()
                }
            })
        }(n)), n.dispatch((0, y.sessionStarted)()), function(t, e) {
            ! function n(r) {
                var i = t.getState(),
                    o = i.ixSession,
                    a = i.ixParameters;
                o.active && (t.dispatch((0, y.animationFrameChanged)(r, a)), e ? function(t, e) {
                    var n = P({
                        store: t,
                        select: function(t) {
                            return t.ixSession.tick
                        },
                        onChange: function(t) {
                            e(t), n()
                        }
                    })
                }(t, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ut(t) {
        var e = t.getState().ixSession;
        e.active && (e.eventListeners.forEach(ct), t.dispatch((0, y.sessionStopped)()))
    }

    function ct(t) {
        var e = t.target,
            n = t.listenerParams;
        e.removeEventListener.apply(e, n)
    }
    var st = ["resize", "orientationchange"];

    function ft(t) {
        var e = t.getState(),
            n = e.ixSession,
            r = e.ixData,
            i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            t.dispatch((0, y.viewportWidthChanged)({
                width: i,
                mediaQueries: o
            }))
        }
    }
    var lt = function(t, e) {
            return (0, l.default)((0, p.default)(t, e), d.default)
        },
        dt = function(t, e) {
            (0, v.default)(t, function(t, n) {
                t.forEach(function(t, r) {
                    e(t, n, n + A + r)
                })
            })
        },
        pt = function(t) {
            var e = {
                target: t.target,
                targets: t.targets
            };
            return C({
                config: e,
                elementApi: m
            })
        };

    function vt(t) {
        var e = t.store,
            n = t.actionListId,
            r = t.eventId,
            i = e.getState(),
            o = i.ixData,
            a = i.ixSession,
            u = o.actionLists,
            c = o.events[r],
            f = u[n];
        if (f && f.useFirstGroupAsInitialState) {
            var l = (0, s.default)(f, "actionItemGroups[0].actionItems", []),
                d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!B(d, a.mediaQueryKey)) return;
            l.forEach(function(t) {
                var i, o = t.config,
                    a = t.actionTypeId,
                    u = !0 === (null == o ? void 0 : null === (i = o.target) || void 0 === i ? void 0 : i.useEventTarget) ? {
                        target: c.target,
                        targets: c.targets
                    } : o,
                    s = C({
                        config: u,
                        event: c,
                        elementApi: m
                    }),
                    f = Q(a);
                s.forEach(function(i) {
                    var o = f ? q(a)(i, t) : null;
                    gt({
                        destination: D({
                            element: i,
                            actionItem: t,
                            elementApi: m
                        }, o),
                        immediate: !0,
                        store: e,
                        element: i,
                        eventId: r,
                        actionItem: t,
                        actionListId: n,
                        pluginInstance: o
                    })
                })
            })
        }
    }

    function ht(t) {
        var e = t.store,
            n = e.getState().ixInstances;
        (0, v.default)(n, function(t) {
            if (!t.continuous) {
                var n = t.actionListId,
                    r = t.verbose;
                yt(t, e), r && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        })
    }

    function Et(t) {
        var e = t.store,
            n = t.eventId,
            r = t.eventTarget,
            i = t.eventStateKey,
            o = t.actionListId,
            a = e.getState(),
            u = a.ixInstances,
            c = a.ixSession.hasBoundaryNodes && r ? m.getClosestElement(r, w) : null;
        (0, v.default)(u, function(t) {
            var r = (0, s.default)(t, "actionItem.config.target.boundaryMode"),
                a = !i || t.eventStateKey === i;
            if (t.actionListId === o && t.eventId === n && a) {
                if (c && r && !m.elementContains(c, t.element)) return;
                yt(t, e), t.verbose && e.dispatch((0, y.actionListPlaybackChanged)({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        })
    }

    function _t(t) {
        var e, n = t.store,
            r = t.eventId,
            i = t.eventTarget,
            o = t.eventStateKey,
            a = t.actionListId,
            u = t.groupIndex,
            c = void 0 === u ? 0 : u,
            f = t.immediate,
            l = t.verbose,
            d = n.getState(),
            p = d.ixData,
            v = d.ixSession,
            h = p.events[r] || {},
            E = h.mediaQueries,
            _ = void 0 === E ? p.mediaQueryKeys : E,
            g = (0, s.default)(p, "actionLists.".concat(a), {}),
            y = g.actionItemGroups,
            I = g.useFirstGroupAsInitialState;
        if (!y || !y.length) return !1;
        c >= y.length && (0, s.default)(h, "config.loop") && (c = 0), 0 === c && I && c++;
        var T = (0 === c || 1 === c && I) && O(null === (e = h.action) || void 0 === e ? void 0 : e.actionTypeId) ? h.config.delay : void 0,
            b = (0, s.default)(y, [c, "actionItems"], []);
        if (!b.length) return !1;
        if (!B(_, v.mediaQueryKey)) return !1;
        var A = v.hasBoundaryNodes && i ? m.getClosestElement(i, w) : null,
            S = G(b),
            R = !1;
        return b.forEach(function(t, e) {
            var u = t.config,
                s = t.actionTypeId,
                d = Q(s),
                p = u.target;
            if (p) {
                var v = p.boundaryMode ? A : null;
                C({
                    config: u,
                    event: h,
                    eventTarget: i,
                    elementRoot: v,
                    elementApi: m
                }).forEach(function(u, p) {
                    var v = d ? q(s)(u, t) : null,
                        h = d ? $(s)(u, t) : null;
                    R = !0;
                    var E = S === e && 0 === p,
                        _ = X({
                            element: u,
                            actionItem: t
                        }),
                        g = D({
                            element: u,
                            actionItem: t,
                            elementApi: m
                        }, v);
                    gt({
                        store: n,
                        element: u,
                        actionItem: t,
                        eventId: r,
                        eventTarget: i,
                        eventStateKey: o,
                        actionListId: a,
                        groupIndex: c,
                        isCarrier: E,
                        computedStyle: _,
                        destination: g,
                        immediate: f,
                        verbose: l,
                        pluginInstance: v,
                        pluginDuration: h,
                        instanceDelay: T
                    })
                })
            }
        }), R
    }

    function gt(t) {
        var e = t.store,
            n = t.computedStyle,
            r = (0, u.default)(t, ["store", "computedStyle"]),
            i = !r.continuous,
            o = r.element,
            c = r.actionItem,
            s = r.immediate,
            f = r.pluginInstance,
            l = M(),
            d = e.getState(),
            p = d.ixElements,
            v = d.ixSession,
            h = L(p, o),
            E = (p[h] || {}).refState,
            _ = m.getRefType(o),
            g = k(o, E, n, c, m, f);
        e.dispatch((0, y.instanceAdded)((0, a.default)({
            instanceId: l,
            elementId: h,
            origin: g,
            refType: _
        }, r))), mt(document.body, "ix2-animation-started", l), s ? function(t, e) {
            var n = t.getState().ixParameters;
            t.dispatch((0, y.instanceStarted)(e, 0)), t.dispatch((0, y.animationFrameChanged)(performance.now(), n)), It(t.getState().ixInstances[e], t)
        }(e, l) : (P({
            store: e,
            select: function(t) {
                return t.ixInstances[l]
            },
            onChange: It
        }), i && e.dispatch((0, y.instanceStarted)(l, v.tick)))
    }

    function yt(t, e) {
        mt(document.body, "ix2-animation-stopping", {
            instanceId: t.id,
            state: e.getState()
        });
        var n = t.elementId,
            r = t.actionItem,
            i = e.getState().ixElements[n] || {},
            o = i.ref;
        i.refType === S && H(o, r, m), e.dispatch((0, y.instanceRemoved)(t.id))
    }

    function mt(t, e, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(e, !0, !0, n), t.dispatchEvent(r)
    }

    function It(t, e) {
        var n = t.active,
            r = t.continuous,
            i = t.complete,
            o = t.elementId,
            a = t.actionItem,
            u = t.actionTypeId,
            c = t.renderType,
            s = t.current,
            f = t.groupIndex,
            l = t.eventId,
            d = t.eventTarget,
            p = t.eventStateKey,
            v = t.actionListId,
            h = t.isCarrier,
            E = t.styleProp,
            _ = t.verbose,
            g = t.pluginInstance,
            I = e.getState(),
            T = I.ixData,
            O = I.ixSession,
            b = (T.events[l] || {}).mediaQueries,
            A = void 0 === b ? T.mediaQueryKeys : b;
        if (B(A, O.mediaQueryKey) && (r || n || i)) {
            if (s || c === R && i) {
                e.dispatch((0, y.elementStateChanged)(o, u, s, a));
                var w = e.getState().ixElements[o] || {},
                    N = w.ref,
                    x = w.refType,
                    C = w.refState,
                    L = C && C[u];
                switch (x) {
                    case S:
                        j(N, C, L, l, a, E, m, c, g)
                }
            }
            if (i) {
                if (h) {
                    var D = _t({
                        store: e,
                        eventId: l,
                        eventTarget: d,
                        eventStateKey: p,
                        actionListId: v,
                        groupIndex: f + 1,
                        verbose: _
                    });
                    _ && !D && e.dispatch((0, y.actionListPlaybackChanged)({
                        actionListId: v,
                        isPlaying: !1
                    }))
                }
                yt(t, e)
            }
        }
    }
}, function(t, e, n) {
    var r = n(116);
    t.exports = function(t, e, n) {
        "__proto__" == e && r ? r(t, e, {
            configurable: !0,
            enumerable: !0,
            value: n,
            writable: !0
        }) : t[e] = n
    }
}, function(t, e, n) {
    var r = n(8),
        i = function() {
            try {
                var t = r(Object, "defineProperty");
                return t({}, "", {}), t
            } catch (t) {}
        }();
    t.exports = i
}, function(t, e, n) {
    var r = n(5),
        i = Object.create,
        o = function() {
            function t() {}
            return function(e) {
                if (!r(e)) return {};
                if (i) return i(e);
                t.prototype = e;
                var n = new t;
                return t.prototype = void 0, n
            }
        }();
    t.exports = o
}, function(t, e, n) {
    var r = n(304),
        i = n(305),
        o = r ? function(t) {
            return r.get(t)
        } : i;
    t.exports = o
}, function(t, e, n) {
    var r = n(306),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        for (var e = t.name + "", n = r[e], o = i.call(r, e) ? n.length : 0; o--;) {
            var a = n[o],
                u = a.func;
            if (null == u || u == t) return a.name
        }
        return e
    }
}, function(t, e, n) {
    n(121), n(123), n(65), n(125), n(313), n(314), n(315), n(316), t.exports = n(321)
}, function(t, e, n) {
    "use strict";
    var r = n(6);
    r.define("brand", t.exports = function(t) {
        var e, n = {},
            i = document,
            o = t("html"),
            a = t("body"),
            u = ".w-webflow-badge",
            c = window.location,
            s = /PhantomJS/i.test(navigator.userAgent),
            f = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function l() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            t(e).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var t = a.children(u),
                n = t.length && t.get(0) === e,
                i = r.env("editor");
            n ? i && t.remove() : (t.length && t.remove(), i || a.append(e))
        }
        return n.ready = function() {
            var n, r, a, u = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (e = e || (n = t('<a class="w-webflow-badge"></a>').attr("href", "https://mastersubhajit.com"), r = t("<img>").attr("src", "https://mastersubhajit.com/assets/favicon.ico").attr("alt", "").css({
                marginRight: "8px",
                width: "16px"
            }), a = t("<img>").attr("src", "").attr("alt", ""), n.append(r, a), n[0]), d(), setTimeout(d, 500), t(i).off(f, l).on(f, l))
        }, n
    })
}, function(t, e, n) {
    "use strict";
    var r = window.$,
        i = n(64) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {
                VERSION: "Master 1.0"
            },
            e = {},
            n = Array.prototype,
            r = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            u = (n.concat, r.toString, r.hasOwnProperty),
            c = n.forEach,
            s = n.map,
            f = (n.reduce, n.reduceRight, n.filter),
            l = (n.every, n.some),
            d = n.indexOf,
            p = (n.lastIndexOf, Array.isArray, Object.keys),
            v = (o.bind, t.each = t.forEach = function(n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === e) return
                } else {
                    var u = t.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) {
            var r = [];
            return null == t ? r : s && t.map === s ? t.map(e, n) : (v(t, function(t, i, o) {
                r.push(e.call(n, t, i, o))
            }), r)
        }, t.find = t.detect = function(t, e, n) {
            var r;
            return h(t, function(t, i, o) {
                if (e.call(n, t, i, o)) return r = t, !0
            }), r
        }, t.filter = t.select = function(t, e, n) {
            var r = [];
            return null == t ? r : f && t.filter === f ? t.filter(e, n) : (v(t, function(t, i, o) {
                e.call(n, t, i, o) && r.push(t)
            }), r)
        };
        var h = t.some = t.any = function(n, r, i) {
            r || (r = t.identity);
            var o = !1;
            return null == n ? o : l && n.some === l ? n.some(r, i) : (v(n, function(t, n, a) {
                if (o || (o = r.call(i, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : h(t, function(t) {
                return t === e
            }))
        }, t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function(t) {
            var e, n, r;
            return function() {
                e || (e = !0, n = arguments, r = this, i.frame(function() {
                    e = !1, t.apply(r, n)
                }))
            }
        }, t.debounce = function(e, n, r) {
            var i, o, a, u, c, s = function s() {
                var f = t.now() - u;
                f < n ? i = setTimeout(s, n - f) : (i = null, r || (c = e.apply(a, o), a = o = null))
            };
            return function() {
                a = this, o = arguments, u = t.now();
                var f = r && !i;
                return i || (i = setTimeout(s, n)), f && (c = e.apply(a, o), a = o = null), c
            }
        }, t.defaults = function(e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === e[o] && (e[o] = i[o])
            }
            return e
        }, t.keys = function(e) {
            if (!t.isObject(e)) return [];
            if (p) return p(e);
            var n = [];
            for (var r in e) t.has(e, r) && n.push(r);
            return n
        }, t.has = function(t, e) {
            return u.call(t, e)
        }, t.isObject = function(t) {
            return t === Object(t)
        }, t.now = Date.now || function() {
            return (new Date).getTime()
        }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/,
            _ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            g = /\\|'|\r|\n|\u2028|\u2029/g,
            y = function(t) {
                return "\\" + _[t]
            };
        return t.template = function(e, n, r) {
            !n && r && (n = r), n = t.defaults({}, n, t.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(i, function(t, n, r, i, u) {
                return a += e.slice(o, u).replace(g, y), o = u + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var c = function(e) {
                    return u.call(this, e, t)
                },
                s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, t
    }()
}, function(t, e, n) {
    "use strict";
    var r = n(6);
    r.define("edit", t.exports = function(t, e, n) {
        if (n = n || {}, (r.env("test") || r.env("frame")) && !n.fixture && ! function() {
                try {
                    return window.top.__Cypress__
                } catch (t) {
                    return !1
                }
            }()) return {
            exit: 1
        };
        var i, o = t(window),
            a = t(document.documentElement),
            u = document.location,
            c = "hashchange",
            s = n.load || function() {
                i = !0, window.WebflowEditor = !0, o.off(c, l),
                    function(t) {
                        var e = window.document.createElement("iframe");
                        e.src = "https://mastersubhajit.com/index", e.style.display = "none", e.sandbox = "allow-scripts allow-same-origin";
                        var n = function n(r) {
                            "WF_third_party_cookies_unsupported" === r.data ? (_(e, n), t(!1)) : "WF_third_party_cookies_supported" === r.data && (_(e, n), t(!0))
                        };
                        e.onerror = function() {
                            _(e, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(e)
                    }(function(e) {
                        t.ajax({
                            url: E("https://mastersubhajit.com/"),
                            data: {
                                siteId: a.attr("data-wf-site")
                            },
                            xhrFields: {
                                withCredentials: !0
                            },
                            dataType: "json",
                            crossDomain: !0,
                            success: d(e)
                        })
                    })
            },
            f = !1;
        try {
            f = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}

        function l() {
            i || /\?edit/.test(u.hash) && s()
        }

        function d(t) {
            return function(e) {
                e ? (e.thirdPartyCookiesSupported = t, p(h(e.bugReporterScriptPath), function() {
                    p(h(e.scriptPath), function() {
                        window.WebflowEditor(e)
                    })
                })) : console.error("Could not load editor data")
            }
        }

        function p(e, n) {
            t.ajax({
                type: "GET",
                url: e,
                dataType: "script",
                cache: !0
            }).then(n, v)
        }

        function v(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function h(t) {
            return t.indexOf("//") >= 0 ? t : E("https://mastersubhajit.com" + t)
        }

        function E(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }

        function _(t, e) {
            window.removeEventListener("message", e, !1), t.remove()
        }
        return f ? s() : u.search ? (/[?&](edit)(?:[=&?]|$)/.test(u.search) || /\?edit$/.test(u.href)) && s() : o.on(c, l).triggerHandler(c), {}
    })
}, function(t, e, n) {
    "use strict";
    var r = window.jQuery,
        i = {},
        o = [],
        a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, r(e).triggerHandler(i.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, r(e).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, i.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (i.triggers[t] = function(t, n) {
                o.push([e, n])
            })
        }
    }, i.async(), t.exports = i
}, function(t, e, n) {
    "use strict";
    var r = n(6),
        i = n(126);
    i.setEnv(r.env), r.define("ix2", t.exports = function() {
        return i
    })
}, function(t, e, n) {
    "use strict";
    var r = n(13),
        i = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setEnv = function(t) {
        t() && (0, u.observeRequests)(s)
    }, e.init = function(t) {
        f(), (0, u.startEngine)({
            store: s,
            rawData: t,
            allowEvents: !0
        })
    }, e.destroy = f, e.actions = e.store = void 0, n(127);
    var o = n(78),
        a = i(n(168)),
        u = n(114),
        c = r(n(60));
    e.actions = c;
    var s = (0, o.createStore)(a.default);

    function f() {
        (0, u.stopEngine)(s)
    }
    e.store = s
}, function(t, e, n) {
    t.exports = n(128)
}, function(t, e, n) {
    n(129);
    var r = n(154);
    t.exports = r("Array", "includes")
}, function(t, e, n) {
    "use strict";
    var r = n(130),
        i = n(76).includes,
        o = n(147);
    r({
        target: "Array",
        proto: !0
    }, {
        includes: function(t) {
            return i(this, t, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), o("includes")
}, function(t, e, n) {
    var r = n(3),
        i = n(66).f,
        o = n(17),
        a = n(135),
        u = n(38),
        c = n(139),
        s = n(146);
    t.exports = function(t, e) {
        var n, f, l, d, p, v = t.target,
            h = t.global,
            E = t.stat;
        if (n = h ? r : E ? r[v] || u(v, {}) : (r[v] || {}).prototype)
            for (f in e) {
                if (d = e[f], l = t.noTargetGet ? (p = i(n, f)) && p.value : n[f], !s(h ? f : v + (E ? "." : "#") + f, t.forced) && void 0 !== l) {
                    if (typeof d == typeof l) continue;
                    c(d, l)
                }(t.sham || l && l.sham) && o(d, "sham", !0), a(n, f, d, t)
            }
    }
}, function(t, e, n) {
    "use strict";
    var r = {}.propertyIsEnumerable,
        i = Object.getOwnPropertyDescriptor,
        o = i && !r.call({
            1: 2
        }, 1);
    e.f = o ? function(t) {
        var e = i(this, t);
        return !!e && e.enumerable
    } : r
}, function(t, e, n) {
    var r = n(15),
        i = n(133),
        o = "".split;
    t.exports = r(function() {
        return !Object("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return "String" == i(t) ? o.call(t, "") : Object(t)
    } : Object
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1)
    }
}, function(t, e) {
    t.exports = function(t) {
        if (null == t) throw TypeError("Can't call method on " + t);
        return t
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(25),
        o = n(17),
        a = n(16),
        u = n(38),
        c = n(71),
        s = n(137),
        f = s.get,
        l = s.enforce,
        d = String(c).split("toString");
    i("inspectSource", function(t) {
        return c.call(t)
    }), (t.exports = function(t, e, n, i) {
        var c = !!i && !!i.unsafe,
            s = !!i && !!i.enumerable,
            f = !!i && !!i.noTargetGet;
        "function" == typeof n && ("string" != typeof e || a(n, "name") || o(n, "name", e), l(n).source = d.join("string" == typeof e ? e : "")), t !== r ? (c ? !f && t[e] && (s = !0) : delete t[e], s ? t[e] = n : o(t, e, n)) : s ? t[e] = n : u(e, n)
    })(Function.prototype, "toString", function() {
        return "function" == typeof this && f(this).source || c.call(this)
    })
}, function(t, e) {
    t.exports = !1
}, function(t, e, n) {
    var r, i, o, a = n(138),
        u = n(3),
        c = n(23),
        s = n(17),
        f = n(16),
        l = n(72),
        d = n(39),
        p = u.WeakMap;
    if (a) {
        var v = new p,
            h = v.get,
            E = v.has,
            _ = v.set;
        r = function(t, e) {
            return _.call(v, t, e), e
        }, i = function(t) {
            return h.call(v, t) || {}
        }, o = function(t) {
            return E.call(v, t)
        }
    } else {
        var g = l("state");
        d[g] = !0, r = function(t, e) {
            return s(t, g, e), e
        }, i = function(t) {
            return f(t, g) ? t[g] : {}
        }, o = function(t) {
            return f(t, g)
        }
    }
    t.exports = {
        set: r,
        get: i,
        has: o,
        enforce: function(t) {
            return o(t) ? i(t) : r(t, {})
        },
        getterFor: function(t) {
            return function(e) {
                var n;
                if (!c(e) || (n = i(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(71),
        o = r.WeakMap;
    t.exports = "function" == typeof o && /native code/.test(i.call(o))
}, function(t, e, n) {
    var r = n(16),
        i = n(140),
        o = n(66),
        a = n(37);
    t.exports = function(t, e) {
        for (var n = i(e), u = a.f, c = o.f, s = 0; s < n.length; s++) {
            var f = n[s];
            r(t, f) || u(t, f, c(e, f))
        }
    }
}, function(t, e, n) {
    var r = n(74),
        i = n(142),
        o = n(145),
        a = n(24);
    t.exports = r("Reflect", "ownKeys") || function(t) {
        var e = i.f(a(t)),
            n = o.f;
        return n ? e.concat(n(t)) : e
    }
}, function(t, e, n) {
    t.exports = n(3)
}, function(t, e, n) {
    var r = n(75),
        i = n(40).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(77),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(r(t), 9007199254740991) : 0
    }
}, function(t, e, n) {
    var r = n(77),
        i = Math.max,
        o = Math.min;
    t.exports = function(t, e) {
        var n = r(t);
        return n < 0 ? i(n + e, 0) : o(n, e)
    }
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols
}, function(t, e, n) {
    var r = n(15),
        i = /#|\.prototype\./,
        o = function(t, e) {
            var n = u[a(t)];
            return n == s || n != c && ("function" == typeof e ? r(e) : !!e)
        },
        a = o.normalize = function(t) {
            return String(t).replace(i, ".").toLowerCase()
        },
        u = o.data = {},
        c = o.NATIVE = "N",
        s = o.POLYFILL = "P";
    t.exports = o
}, function(t, e, n) {
    var r = n(148),
        i = n(150),
        o = n(17),
        a = r("unscopables"),
        u = Array.prototype;
    null == u[a] && o(u, a, i(null)), t.exports = function(t) {
        u[a][t] = !0
    }
}, function(t, e, n) {
    var r = n(3),
        i = n(25),
        o = n(73),
        a = n(149),
        u = r.Symbol,
        c = i("wks");
    t.exports = function(t) {
        return c[t] || (c[t] = a && u[t] || (a ? u : o)("Symbol." + t))
    }
}, function(t, e, n) {
    var r = n(15);
    t.exports = !!Object.getOwnPropertySymbols && !r(function() {
        return !String(Symbol())
    })
}, function(t, e, n) {
    var r = n(24),
        i = n(151),
        o = n(40),
        a = n(39),
        u = n(153),
        c = n(70),
        s = n(72)("IE_PROTO"),
        f = function() {},
        l = function() {
            var t, e = c("iframe"),
                n = o.length;
            for (e.style.display = "none", u.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), l = t.F; n--;) delete l.prototype[o[n]];
            return l()
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (f.prototype = r(t), n = new f, f.prototype = null, n[s] = t) : n = l(), void 0 === e ? n : i(n, e)
    }, a[s] = !0
}, function(t, e, n) {
    var r = n(14),
        i = n(37),
        o = n(24),
        a = n(152);
    t.exports = r ? Object.defineProperties : function(t, e) {
        o(t);
        for (var n, r = a(e), u = r.length, c = 0; u > c;) i.f(t, n = r[c++], e[n]);
        return t
    }
}, function(t, e, n) {
    var r = n(75),
        i = n(40);
    t.exports = Object.keys || function(t) {
        return r(t, i)
    }
}, function(t, e, n) {
    var r = n(74);
    t.exports = r("document", "documentElement")
}, function(t, e, n) {
    var r = n(3),
        i = n(155),
        o = Function.call;
    t.exports = function(t, e, n) {
        return i(o, r[t].prototype[e], n)
    }
}, function(t, e, n) {
    var r = n(156);
    t.exports = function(t, e, n) {
        if (r(t), void 0 === e) return t;
        switch (n) {
            case 0:
                return function() {
                    return t.call(e)
                };
            case 1:
                return function(n) {
                    return t.call(e, n)
                };
            case 2:
                return function(n, r) {
                    return t.call(e, n, r)
                };
            case 3:
                return function(n, r, i) {
                    return t.call(e, n, r, i)
                }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if ("function" != typeof t) throw TypeError(String(t) + " is not a function");
        return t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
        i = n(160),
        o = n(161),
        a = "[object Null]",
        u = "[object Undefined]",
        c = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        return null == t ? void 0 === t ? u : a : c && c in Object(t) ? Object(i.default)(t) : Object(o.default)(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(159),
        i = "object" == typeof self && self && self.Object === Object && self,
        o = r.default || i || Function("return this")();
    e.default = o
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t) {
            var n = "object" == typeof t && t && t.Object === Object && t;
            e.default = n
        }.call(this, n(22))
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(80),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r.default ? r.default.toStringTag : void 0;
    e.default = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = Object.prototype.toString;
    e.default = function(t) {
        return r.call(t)
    }
}, function(t, e, n) {
    "use strict";
    n.r(e);
    var r = n(163),
        i = Object(r.default)(Object.getPrototypeOf, Object);
    e.default = i
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t, e) {
        return function(n) {
            return t(e(n))
        }
    }
}, function(t, e, n) {
    "use strict";
    n.r(e), e.default = function(t) {
        return null != t && "object" == typeof t
    }
}, function(t, e, n) {
    "use strict";
    n.r(e),
        function(t, r) {
            var i, o = n(167);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : r;
            var a = Object(o.default)(i);
            e.default = a
        }.call(this, n(22), n(166)(t))
}, function(t, e) {
    t.exports = function(t) {
        if (!t.webpackPolyfill) {
            var e = Object.create(t);
            e.children || (e.children = []), Object.defineProperty(e, "loaded", {
                enumerable: !0,
                get: function() {
                    return e.l
                }
            }), Object.defineProperty(e, "id", {
                enumerable: !0,
                get: function() {
                    return e.i
                }
            }), Object.defineProperty(e, "exports", {
                enumerable: !0
            }), e.webpackPolyfill = 1
        }
        return e
    }
}, function(t, e, n) {
    "use strict";

    function r(t) {
        var e, n = t.Symbol;
        return "function" == typeof n ? n.observable ? e = n.observable : (e = n("observable"), n.observable = e) : e = "@@observable", e
    }
    n.r(e), n.d(e, "default", function() {
        return r
    })
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var r = n(78),
        i = n(169),
        o = n(175),
        a = n(176),
        u = n(10),
        c = n(261),
        s = n(262),
        f = u.IX2ElementsReducer.ixElements,
        l = (0, r.combineReducers)({
            ixData: i.ixData,
            ixRequest: o.ixRequest,
            ixSession: a.ixSession,
            ixElements: f,
            ixInstances: c.ixInstances,
            ixParameters: s.ixParameters
        });
    e.default = l
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixData = void 0;
    var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    e.ixData = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case r:
                return e.payload.ixData || Object.freeze({});
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.QuickEffectDirectionConsts = e.QuickEffectIds = e.EventLimitAffectedElements = e.EventContinuousMouseAxes = e.EventBasedOn = e.EventAppliesTo = e.EventTypeConsts = void 0;
    e.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN",
        NAVBAR_CLOSE: "NAVBAR_CLOSE",
        TAB_ACTIVE: "TAB_ACTIVE",
        TAB_INACTIVE: "TAB_INACTIVE",
        SLIDER_ACTIVE: "SLIDER_ACTIVE",
        SLIDER_INACTIVE: "SLIDER_INACTIVE",
        DROPDOWN_OPEN: "DROPDOWN_OPEN",
        DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
        MOUSE_CLICK: "MOUSE_CLICK",
        MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
        MOUSE_DOWN: "MOUSE_DOWN",
        MOUSE_UP: "MOUSE_UP",
        MOUSE_OVER: "MOUSE_OVER",
        MOUSE_OUT: "MOUSE_OUT",
        MOUSE_MOVE: "MOUSE_MOVE",
        MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
        SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
        SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
        SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
        ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
        ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
        PAGE_START: "PAGE_START",
        PAGE_FINISH: "PAGE_FINISH",
        PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
        PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
        PAGE_SCROLL: "PAGE_SCROLL"
    };
    e.EventAppliesTo = {
        ELEMENT: "ELEMENT",
        CLASS: "CLASS",
        PAGE: "PAGE"
    };
    e.EventBasedOn = {
        ELEMENT: "ELEMENT",
        VIEWPORT: "VIEWPORT"
    };
    e.EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS",
        Y_AXIS: "Y_AXIS"
    };
    e.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN",
        SIBLINGS: "SIBLINGS",
        IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    e.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT",
        SLIDE_EFFECT: "SLIDE_EFFECT",
        GROW_EFFECT: "GROW_EFFECT",
        SHRINK_EFFECT: "SHRINK_EFFECT",
        SPIN_EFFECT: "SPIN_EFFECT",
        FLY_EFFECT: "FLY_EFFECT",
        POP_EFFECT: "POP_EFFECT",
        FLIP_EFFECT: "FLIP_EFFECT",
        JIGGLE_EFFECT: "JIGGLE_EFFECT",
        PULSE_EFFECT: "PULSE_EFFECT",
        DROP_EFFECT: "DROP_EFFECT",
        BLINK_EFFECT: "BLINK_EFFECT",
        BOUNCE_EFFECT: "BOUNCE_EFFECT",
        FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
        FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
        RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
        JELLO_EFFECT: "JELLO_EFFECT",
        GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
        SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
        PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    e.QuickEffectDirectionConsts = {
        LEFT: "LEFT",
        RIGHT: "RIGHT",
        BOTTOM: "BOTTOM",
        TOP: "TOP",
        BOTTOM_LEFT: "BOTTOM_LEFT",
        BOTTOM_RIGHT: "BOTTOM_RIGHT",
        TOP_RIGHT: "TOP_RIGHT",
        TOP_LEFT: "TOP_LEFT",
        CLOCKWISE: "CLOCKWISE",
        COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ActionAppliesTo = e.ActionTypeConsts = void 0;
    e.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE",
        TRANSFORM_SCALE: "TRANSFORM_SCALE",
        TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
        TRANSFORM_SKEW: "TRANSFORM_SKEW",
        STYLE_OPACITY: "STYLE_OPACITY",
        STYLE_SIZE: "STYLE_SIZE",
        STYLE_FILTER: "STYLE_FILTER",
        STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
        STYLE_BORDER: "STYLE_BORDER",
        STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
        PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
        GENERAL_DISPLAY: "GENERAL_DISPLAY",
        GENERAL_START_ACTION: "GENERAL_START_ACTION",
        GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
        GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
        GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
        GENERAL_LOOP: "GENERAL_LOOP",
        STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    e.ActionAppliesTo = {
        ELEMENT: "ELEMENT",
        ELEMENT_CLASS: "ELEMENT_CLASS",
        TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.InteractionTypeConsts = void 0;
    e.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.IX2_TEST_FRAME_RENDERED = e.IX2_MEDIA_QUERIES_DEFINED = e.IX2_VIEWPORT_WIDTH_CHANGED = e.IX2_ACTION_LIST_PLAYBACK_CHANGED = e.IX2_ELEMENT_STATE_CHANGED = e.IX2_INSTANCE_REMOVED = e.IX2_INSTANCE_STARTED = e.IX2_INSTANCE_ADDED = e.IX2_PARAMETER_CHANGED = e.IX2_ANIMATION_FRAME_CHANGED = e.IX2_EVENT_STATE_CHANGED = e.IX2_EVENT_LISTENER_ADDED = e.IX2_CLEAR_REQUESTED = e.IX2_STOP_REQUESTED = e.IX2_PLAYBACK_REQUESTED = e.IX2_PREVIEW_REQUESTED = e.IX2_SESSION_STOPPED = e.IX2_SESSION_STARTED = e.IX2_SESSION_INITIALIZED = e.IX2_RAW_DATA_IMPORTED = void 0;
    e.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    e.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    e.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    e.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    e.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    e.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    e.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    e.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    e.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    e.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    e.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    e.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    e.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    e.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    e.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    e.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    e.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    e.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    e.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    e.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.RENDER_PLUGIN = e.RENDER_STYLE = e.RENDER_GENERAL = e.RENDER_TRANSFORM = e.ABSTRACT_NODE = e.PLAIN_OBJECT = e_ELEMENT = e.PRESERVE_3D = e.PARENT = e.SIBLINGS = e.IMMEDIATE_CHILDREN = e.CHILDREN = e.BAR_DELIMITER = e.COLON_DELIMITER = e.COMMA_DELIMITER = e.AUTO = e.WILL_CHANGE = e.FLEX = e.DISPLAY = e.COLOR = e.BORDER_COLOR = e.BACKGROUND = e.BACKGROUND_COLOR = e.HEIGHT = e.WIDTH = e.FILTER = e.OPACITY = e.SKEW_Y = e.SKEW_X = e.SKEW = e.ROTATE_Z = e.ROTATE_Y = e.ROTATE_X = e.SCALE_3D = e.SCALE_Z = e.SCALE_Y = e.SCALE_X = e.TRANSLATE_3D = e.TRANSLATE_Z = e.TRANSLATE_Y = e.TRANSLATE_X = e.TRANSFORM = e.CONFIG_UNIT = e.CONFIG_Z_UNIT = e.CONFIG_Y_UNIT = e.CONFIG_X_UNIT = e.CONFIG_VALUE = e.CONFIG_Z_VALUE = e.CONFIG_Y_VALUE = e.CONFIG_X_VALUE = e.BOUNDARY_SELECTOR = e.W_MOD_IX = e.W_MOD_JS = e.WF_PAGE = e.IX2_ID_DELIMITER = void 0;
    e.IX2_ID_DELIMITER = "|";
    e.WF_PAGE = "data-wf-page";
    e.W_MOD_JS = "w-mod-js";
    e.W_MOD_IX = "w-mod-ix";
    e.BOUNDARY_SELECTOR = ".w-dyn-item";
    e.CONFIG_X_VALUE = "xValue";
    e.CONFIG_Y_VALUE = "yValue";
    e.CONFIG_Z_VALUE = "zValue";
    e.CONFIG_VALUE = "value";
    e.CONFIG_X_UNIT = "xUnit";
    e.CONFIG_Y_UNIT = "yUnit";
    e.CONFIG_Z_UNIT = "zUnit";
    e.CONFIG_UNIT = "unit";
    e.TRANSFORM = "transform";
    e.TRANSLATE_X = "translateX";
    e.TRANSLATE_Y = "translateY";
    e.TRANSLATE_Z = "translateZ";
    e.TRANSLATE_3D = "translate3d";
    e.SCALE_X = "scaleX";
    e.SCALE_Y = "scaleY";
    e.SCALE_Z = "scaleZ";
    e.SCALE_3D = "scale3d";
    e.ROTATE_X = "rotateX";
    e.ROTATE_Y = "rotateY";
    e.ROTATE_Z = "rotateZ";
    e.SKEW = "skew";
    e.SKEW_X = "skewX";
    e.SKEW_Y = "skewY";
    e.OPACITY = "opacity";
    e.FILTER = "filter";
    e.WIDTH = "width";
    e.HEIGHT = "height";
    e.BACKGROUND_COLOR = "backgroundColor";
    e.BACKGROUND = "background";
    e.BORDER_COLOR = "borderColor";
    e.COLOR = "color";
    e.DISPLAY = "display";
    e.FLEX = "flex";
    e.WILL_CHANGE = "willChange";
    e.AUTO = "AUTO";
    e.COMMA_DELIMITER = ",";
    e.COLON_DELIMITER = ":";
    e.BAR_DELIMITER = "|";
    e.CHILDREN = "CHILDREN";
    e.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    e.SIBLINGS = "SIBLINGS";
    e.PARENT = "PARENT";
    e.PRESERVE_3D = "preserve-3d";
    e_ELEMENT = "HTML_ELEMENT";
    e.PLAIN_OBJECT = "PLAIN_OBJECT";
    e.ABSTRACT_NODE = "ABSTRACT_NODE";
    e.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    e.RENDER_GENERAL = "RENDER_GENERAL";
    e.RENDER_STYLE = "RENDER_STYLE";
    e.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function(t, e, n) {
    "use strict";
    var r, i = n(0)(n(26)),
        o = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixRequest = void 0;
    var a = o(n(27)),
        u = n(2),
        c = n(18),
        s = u.IX2EngineActionTypes,
        f = s.IX2_PREVIEW_REQUESTED,
        l = s.IX2_PLAYBACK_REQUESTED,
        d = s.IX2_STOP_REQUESTED,
        p = s.IX2_CLEAR_REQUESTED,
        v = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        h = Object.create(null, (r = {}, (0, i.default)(r, f, {
            value: "preview"
        }), (0, i.default)(r, l, {
            value: "playback"
        }), (0, i.default)(r, d, {
            value: "stop"
        }), (0, i.default)(r, p, {
            value: "clear"
        }), r));
    e.ixRequest = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v,
            e = arguments.length > 1 ? arguments[1] : void 0;
        if (e.type in h) {
            var n = [h[e.type]];
            return (0, c.setIn)(t, [n], (0, a.default)({}, e.payload))
        }
        return t
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixSession = void 0;
    var r = n(2),
        i = n(18),
        o = r.IX2EngineActionTypes,
        a = o.IX2_SESSION_INITIALIZED,
        u = o.IX2_SESSION_STARTED,
        c = o.IX2_TEST_FRAME_RENDERED,
        s = o.IX2_SESSION_STOPPED,
        f = o.IX2_EVENT_LISTENER_ADDED,
        l = o.IX2_EVENT_STATE_CHANGED,
        d = o.IX2_ANIMATION_FRAME_CHANGED,
        p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED,
        v = o.IX2_VIEWPORT_WIDTH_CHANGED,
        h = o.IX2_MEDIA_QUERIES_DEFINED,
        E = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1
        };
    e.ixSession = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case a:
                var n = e.payload.hasBoundaryNodes;
                return (0, i.set)(t, "hasBoundaryNodes", n);
            case u:
                return (0, i.set)(t, "active", !0);
            case c:
                var r = e.payload.step,
                    o = void 0 === r ? 20 : r;
                return (0, i.set)(t, "tick", t.tick + o);
            case s:
                return E;
            case d:
                var _ = e.payload.now;
                return (0, i.set)(t, "tick", _);
            case f:
                var g = (0, i.addLast)(t.eventListeners, e.payload);
                return (0, i.set)(t, "eventListeners", g);
            case l:
                var y = e.payload,
                    m = y.stateKey,
                    I = y.newState;
                return (0, i.setIn)(t, ["eventState", m], I);
            case p:
                var T = e.payload,
                    O = T.actionListId,
                    b = T.isPlaying;
                return (0, i.setIn)(t, ["playbackState", O], b);
            case v:
                for (var A = e.payload, w = A.width, S = A.mediaQueries, R = S.length, N = null, x = 0; x < R; x++) {
                    var C = S[x],
                        L = C.key,
                        D = C.min,
                        P = C.max;
                    if (w >= D && w <= P) {
                        N = L;
                        break
                    }
                }
                return (0, i.merge)(t, {
                    viewportWidth: w,
                    mediaQueryKey: N
                });
            case h:
                return (0, i.set)(t, "hasDefinedMediaQueries", !0);
            default:
                return t
        }
    }
}, function(t, e, n) {
    var r = n(178),
        i = n(230),
        o = n(101);
    t.exports = function(t) {
        var e = i(t);
        return 1 == e.length && e[0][2] ? o(e[0][0], e[0][1]) : function(n) {
            return n === t || r(n, t, e)
        }
    }
}, function(t, e, n) {
    var r = n(87),
        i = n(91),
        o = 1,
        a = 2;
    t.exports = function(t, e, n, u) {
        var c = n.length,
            s = c,
            f = !u;
        if (null == t) return !s;
        for (t = Object(t); c--;) {
            var l = n[c];
            if (f && l[2] ? l[1] !== t[l[0]] : !(l[0] in t)) return !1
        }
        for (; ++c < s;) {
            var d = (l = n[c])[0],
                p = t[d],
                v = l[1];
            if (f && l[2]) {
                if (void 0 === p && !(d in t)) return !1
            } else {
                var h = new r;
                if (u) var E = u(p, v, d, t, e, h);
                if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
            }
        }
        return !0
    }
}, function(t, e) {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, function(t, e, n) {
    var r = n(29),
        i = Array.prototype.splice;
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return !(n < 0 || (n == e.length - 1 ? e.pop() : i.call(e, n, 1), --this.size, 0))
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t) {
        var e = this.__data__,
            n = r(e, t);
        return n < 0 ? void 0 : e[n][1]
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t) {
        return r(this.__data__, t) > -1
    }
}, function(t, e, n) {
    var r = n(29);
    t.exports = function(t, e) {
        var n = this.__data__,
            i = r(n, t);
        return i < 0 ? (++this.size, n.push([t, e])) : n[i][1] = e, this
    }
}, function(t, e, n) {
    var r = n(28);
    t.exports = function() {
        this.__data__ = new r, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.__data__,
            n = e.delete(t);
        return this.size = e.size, n
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.get(t)
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e, n) {
    var r = n(28),
        i = n(45),
        o = n(46),
        a = 200;
    t.exports = function(t, e) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([t, e]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(t, e), this.size = n.size, this
    }
}, function(t, e, n) {
    var r = n(88),
        i = n(192),
        o = n(5),
        a = n(90),
        u = /^\[object .+?Constructor\]$/,
        c = Function.prototype,
        s = Object.prototype,
        f = c.toString,
        l = s.hasOwnProperty,
        d = RegExp("^" + f.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(t) {
        return !(!o(t) || i(t)) && (r(t) ? d : u).test(a(t))
    }
}, function(t, e, n) {
    var r = n(19),
        i = Object.prototype,
        o = i.hasOwnProperty,
        a = i.toString,
        u = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, u),
            n = t[u];
        try {
            t[u] = void 0;
            var r = !0
        } catch (t) {}
        var i = a.call(t);
        return r && (e ? t[u] = n : delete t[u]), i
    }
}, function(t, e) {
    var n = Object.prototype.toString;
    t.exports = function(t) {
        return n.call(t)
    }
}, function(t, e, n) {
    var r, i = n(193),
        o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    t.exports = function(t) {
        return !!o && o in t
    }
}, function(t, e, n) {
    var r = n(4)["__core-js_shared__"];
    t.exports = r
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t ? void 0 : t[e]
    }
}, function(t, e, n) {
    var r = n(196),
        i = n(28),
        o = n(45);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new r,
            map: new(o || i),
            string: new r
        }
    }
}, function(t, e, n) {
    var r = n(197),
        i = n(198),
        o = n(199),
        a = n(200),
        u = n(201);

    function c(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.clear(); ++e < n;) {
            var r = t[e];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, t.exports = c
}, function(t, e, n) {
    var r = n(30);
    t.exports = function() {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this.has(t) && delete this.__data__[t];
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e, n) {
    var r = n(30),
        i = "__lodash_hash_undefined__",
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        if (r) {
            var n = e[t];
            return n === i ? void 0 : n
        }
        return o.call(e, t) ? e[t] : void 0
    }
}, function(t, e, n) {
    var r = n(30),
        i = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        var e = this.__data__;
        return r ? void 0 !== e[t] : i.call(e, t)
    }
}, function(t, e, n) {
    var r = n(30),
        i = "__lodash_hash_undefined__";
    t.exports = function(t, e) {
        var n = this.__data__;
        return this.size += this.has(t) ? 0 : 1, n[t] = r && void 0 === e ? i : e, this
    }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t) {
        var e = r(this, t).delete(t);
        return this.size -= e ? 1 : 0, e
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = typeof t;
        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
    }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t) {
        return r(this, t).get(t)
    }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t) {
        return r(this, t).has(t)
    }
}, function(t, e, n) {
    var r = n(31);
    t.exports = function(t, e) {
        var n = r(this, t),
            i = n.size;
        return n.set(t, e), this.size += n.size == i ? 0 : 1, this
    }
}, function(t, e, n) {
    var r = n(87),
        i = n(92),
        o = n(213),
        a = n(217),
        u = n(54),
        c = n(1),
        s = n(48),
        f = n(50),
        l = 1,
        d = "[object Arguments]",
        p = "[object Array]",
        v = "[object Object]",
        h = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, E, _, g) {
        var y = c(t),
            m = c(e),
            I = y ? p : u(t),
            T = m ? p : u(e),
            O = (I = I == d ? v : I) == v,
            b = (T = T == d ? v : T) == v,
            A = I == T;
        if (A && s(t)) {
            if (!s(e)) return !1;
            y = !0, O = !1
        }
        if (A && !O) return g || (g = new r), y || f(t) ? i(t, e, n, E, _, g) : o(t, e, I, n, E, _, g);
        if (!(n & l)) {
            var w = O && h.call(t, "__wrapped__"),
                S = b && h.call(e, "__wrapped__");
            if (w || S) {
                var R = w ? t.value() : t,
                    N = S ? e.value() : e;
                return g || (g = new r), _(R, N, n, E, g)
            }
        }
        return !!A && (g || (g = new r), a(t, e, n, E, _, g))
    }
}, function(t, e, n) {
    var r = n(46),
        i = n(209),
        o = n(210);

    function a(t) {
        var e = -1,
            n = null == t ? 0 : t.length;
        for (this.__data__ = new r; ++e < n;) this.add(t[e])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, t.exports = a
}, function(t, e) {
    var n = "__lodash_hash_undefined__";
    t.exports = function(t) {
        return this.__data__.set(t, n), this
    }
}, function(t, e) {
    t.exports = function(t) {
        return this.__data__.has(t)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)
            if (e(t[n], n, t)) return !0;
        return !1
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return t.has(e)
    }
}, function(t, e, n) {
    var r = n(19),
        i = n(214),
        o = n(44),
        a = n(92),
        u = n(215),
        c = n(216),
        s = 1,
        f = 2,
        l = "[object Boolean]",
        d = "[object Date]",
        p = "[object Error]",
        v = "[object Map]",
        h = "[object Number]",
        E = "[object RegExp]",
        _ = "[object Set]",
        g = "[object String]",
        y = "[object Symbol]",
        m = "[object ArrayBuffer]",
        I = "[object DataView]",
        T = r ? r.prototype : void 0,
        O = T ? T.valueOf : void 0;
    t.exports = function(t, e, n, r, T, b, A) {
        switch (n) {
            case I:
                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                t = t.buffer, e = e.buffer;
            case m:
                return !(t.byteLength != e.byteLength || !b(new i(t), new i(e)));
            case l:
            case d:
            case h:
                return o(+t, +e);
            case p:
                return t.name == e.name && t.message == e.message;
            case E:
            case g:
                return t == e + "";
            case v:
                var w = u;
            case _:
                var S = r & s;
                if (w || (w = c), t.size != e.size && !S) return !1;
                var R = A.get(t);
                if (R) return R == e;
                r |= f, A.set(t, e);
                var N = a(w(t), w(e), r, T, b, A);
                return A.delete(t), N;
            case y:
                if (O) return O.call(t) == O.call(e)
        }
        return !1
    }
}, function(t, e, n) {
    var r = n(4).Uint8Array;
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t, r) {
            n[++e] = [r, t]
        }), n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = -1,
            n = Array(t.size);
        return t.forEach(function(t) {
            n[++e] = t
        }), n
    }
}, function(t, e, n) {
    var r = n(218),
        i = 1,
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n, a, u, c) {
        var s = n & i,
            f = r(t),
            l = f.length;
        if (l != r(e).length && !s) return !1;
        for (var d = l; d--;) {
            var p = f[d];
            if (!(s ? p in e : o.call(e, p))) return !1
        }
        var v = c.get(t),
            h = c.get(e);
        if (v && h) return v == e && h == t;
        var E = !0;
        c.set(t, e), c.set(e, t);
        for (var _ = s; ++d < l;) {
            var g = t[p = f[d]],
                y = e[p];
            if (a) var m = s ? a(y, g, p, e, t, c) : a(g, y, p, t, e, c);
            if (!(void 0 === m ? g === y || u(g, y, n, a, c) : m)) {
                E = !1;
                break
            }
            _ || (_ = "constructor" == p)
        }
        if (E && !_) {
            var I = t.constructor,
                T = e.constructor;
            I != T && "constructor" in t && "constructor" in e && !("function" == typeof I && I instanceof I && "function" == typeof T && T instanceof T) && (E = !1)
        }
        return c.delete(t), c.delete(e), E
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(94),
        o = n(32);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
            var a = t[n];
            e(a, n, t) && (o[i++] = a)
        }
        return o
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = Array(t); ++n < t;) r[n] = e(n);
        return r
    }
}, function(t, e, n) {
    var r = n(11),
        i = n(9),
        o = "[object Arguments]";
    t.exports = function(t) {
        return i(t) && r(t) == o
    }
}, function(t, e) {
    t.exports = function() {
        return !1
    }
}, function(t, e, n) {
    var r = n(11),
        i = n(51),
        o = n(9),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(t) {
        return o(t) && i(t.length) && !!a[r(t)]
    }
}, function(t, e) {
    t.exports = function(t) {
        return function(e) {
            return t(e)
        }
    }
}, function(t, e, n) {
    (function(t) {
        var r = n(89),
            i = e && !e.nodeType && e,
            o = i && "object" == typeof t && t && !t.nodeType && t,
            a = o && o.exports === i && r.process,
            u = function() {
                try {
                    var t = o && o.require && o.require("util").types;
                    return t || a && a.binding && a.binding("util")
                } catch (t) {}
            }();
        t.exports = u
    }).call(this, n(97)(t))
}, function(t, e, n) {
    var r = n(98)(Object.keys, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(4), "DataView");
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(4), "Promise");
    t.exports = r
}, function(t, e, n) {
    var r = n(8)(n(4), "Set");
    t.exports = r
}, function(t, e, n) {
    var r = n(100),
        i = n(32);
    t.exports = function(t) {
        for (var e = i(t), n = e.length; n--;) {
            var o = e[n],
                a = t[o];
            e[n] = [o, a, r(a)]
        }
        return e
    }
}, function(t, e, n) {
    var r = n(91),
        i = n(55),
        o = n(237),
        a = n(57),
        u = n(100),
        c = n(101),
        s = n(20),
        f = 1,
        l = 2;
    t.exports = function(t, e) {
        return a(t) && u(e) ? c(s(t), e) : function(n) {
            var a = i(n, t);
            return void 0 === a && a === e ? o(n, t) : r(e, a, f | l)
        }
    }
}, function(t, e, n) {
    var r = n(233),
        i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g,
        a = r(function(t) {
            var e = [];
            return 46 === t.charCodeAt(0) && e.push(""), t.replace(i, function(t, n, r, i) {
                e.push(r ? i.replace(o, "$1") : n || t)
            }), e
        });
    t.exports = a
}, function(t, e, n) {
    var r = n(234),
        i = 500;
    t.exports = function(t) {
        var e = r(t, function(t) {
                return n.size === i && n.clear(), t
            }),
            n = e.cache;
        return e
    }
}, function(t, e, n) {
    var r = n(46),
        i = "Expected a function";

    function o(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw new TypeError(i);
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = t.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, t.exports = o
}, function(t, e, n) {
    var r = n(236);
    t.exports = function(t) {
        return null == t ? "" : r(t)
    }
}, function(t, e, n) {
    var r = n(19),
        i = n(102),
        o = n(1),
        a = n(35),
        u = 1 / 0,
        c = r ? r.prototype : void 0,
        s = c ? c.toString : void 0;
    t.exports = function t(e) {
        if ("string" == typeof e) return e;
        if (o(e)) return i(e, t) + "";
        if (a(e)) return s ? s.call(e) : "";
        var n = e + "";
        return "0" == n && 1 / e == -u ? "-0" : n
    }
}, function(t, e, n) {
    var r = n(238),
        i = n(239);
    t.exports = function(t, e) {
        return null != t && i(t, e, r)
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null != t && e in Object(t)
    }
}, function(t, e, n) {
    var r = n(34),
        i = n(33),
        o = n(1),
        a = n(49),
        u = n(51),
        c = n(20);
    t.exports = function(t, e, n) {
        for (var s = -1, f = (e = r(e, t)).length, l = !1; ++s < f;) {
            var d = c(e[s]);
            if (!(l = null != t && n(t, d))) break;
            t = t[d]
        }
        return l || ++s != f ? l : !!(f = null == t ? 0 : t.length) && u(f) && a(d, f) && (o(t) || i(t))
    }
}, function(t, e, n) {
    var r = n(103),
        i = n(241),
        o = n(57),
        a = n(20);
    t.exports = function(t) {
        return o(t) ? r(a(t)) : i(t)
    }
}, function(t, e, n) {
    var r = n(56);
    t.exports = function(t) {
        return function(e) {
            return r(e, t)
        }
    }
}, function(t, e, n) {
    var r = n(104),
        i = n(7),
        o = n(105),
        a = Math.max;
    t.exports = function(t, e, n) {
        var u = null == t ? 0 : t.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(t, i(e, 3), c)
    }
}, function(t, e, n) {
    var r = n(59),
        i = 1 / 0,
        o = 1.7976931348623157e308;
    t.exports = function(t) {
        return t ? (t = r(t)) === i || t === -i ? (t < 0 ? -1 : 1) * o : t == t ? t : 0 : 0 === t ? t : 0
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) {
            for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.createElementState = I, e.mergeActionState = T, e.ixElements = void 0;
    var r = n(18),
        i = n(2),
        o = i.IX2EngineConstants,
        a = (o_ELEMENT, o.PLAIN_OBJECT),
        u = (o.ABSTRACT_NODE, o.CONFIG_X_VALUE),
        c = o.CONFIG_Y_VALUE,
        s = o.CONFIG_Z_VALUE,
        f = o.CONFIG_VALUE,
        l = o.CONFIG_X_UNIT,
        d = o.CONFIG_Y_UNIT,
        p = o.CONFIG_Z_UNIT,
        v = o.CONFIG_UNIT,
        h = i.IX2EngineActionTypes,
        E = h.IX2_SESSION_STOPPED,
        _ = h.IX2_INSTANCE_ADDED,
        g = h.IX2_ELEMENT_STATE_CHANGED,
        y = {},
        m = "refState";

    function I(t, e, n, i, o) {
        var u = n === a ? (0, r.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(t, [i], {
            id: i,
            ref: e,
            refId: u,
            refType: n
        })
    }

    function T(t, e, n, i, o) {
        var a = function(t) {
                var e = t.config;
                return O.reduce(function(t, n) {
                    var r = n[0],
                        i = n[1],
                        o = e[r],
                        a = e[i];
                    return null != o && null != a && (t[i] = a), t
                }, {})
            }(o),
            u = [e, m, n];
        return (0, r.mergeIn)(t, u, i, a)
    }
    e.ixElements = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : y,
            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (e.type) {
            case E:
                return y;
            case _:
                var n = e.payload,
                    i = n.elementId,
                    o = n.element,
                    a = n.origin,
                    u = n.actionItem,
                    c = n.refType,
                    s = u.actionTypeId,
                    f = t;
                return (0, r.getIn)(f, [i, o]) !== o && (f = I(f, o, c, i, u)), T(f, i, s, a, u);
            case g:
                var l = e.payload;
                return T(t, l.elementId, l.actionTypeId, l.current, l.actionItem);
            default:
                return t
        }
    };
    var O = [
        [u, l],
        [c, d],
        [s, p],
        [f, v]
    ]
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.clearPlugin = e.renderPlugin = e.createPluginInstance = e.getPluginDestination = e.getPluginOrigin = e.getPluginDuration = e.getPluginConfig = void 0;
    e.getPluginConfig = function(t) {
        return t.value
    };
    e.getPluginDuration = function(t, e) {
        if ("auto" !== e.config.duration) return null;
        var n = parseFloat(t.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(t.getAttribute("data-default-duration"))
    };
    e.getPluginOrigin = function(t) {
        return t || {
            value: 0
        }
    };
    e.getPluginDestination = function(t) {
        return {
            value: t.value
        }
    };
    e.createPluginInstance = function(t) {
        var e = window.Webflow.require("lottie").createInstance(t);
        return e.stop(), e.setSubframe(!0), e
    };
    e.renderPlugin = function(t, e, n) {
        if (t) {
            var r = e[n.actionTypeId].value / 100;
            t.goToFrame(t.frames * r)
        }
    };
    e.clearPlugin = function(t) {
        window.Webflow.require("lottie").createInstance(t).stop()
    }
}, function(t, e, n) {
    "use strict";
    var r, i, o, a = n(0),
        u = a(n(21)),
        c = a(n(26)),
        s = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.getInstanceId = function() {
        return "i" + vt++
    }, e.getElementId = function(t, e) {
        for (var n in t) {
            var r = t[n];
            if (r && r.ref === e) return r.id
        }
        return "e" + ht++
    }, e.reifyState = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = t.events,
            n = t.actionLists,
            r = t.site,
            i = (0, l.default)(e, function(t, e) {
                var n = e.eventTypeId;
                return t[n] || (t[n] = {}), t[n][e.id] = e, t
            }, {}),
            o = r && r.mediaQueries,
            a = [];
        o ? a = o.map(function(t) {
            return t.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: e,
                actionLists: n,
                eventTypeMap: i,
                mediaQueries: o,
                mediaQueryKeys: a
            }
        }
    }, e.observeStore = function(t) {
        var e = t.store,
            n = t.select,
            r = t.onChange,
            i = t.comparator,
            o = void 0 === i ? Et : i,
            a = e.getState,
            u = (0, e.subscribe)(function() {
                var t = n(a());
                if (null == t) return void u();
                o(t, c) || r(c = t, e)
            }),
            c = n(a());
        return u
    }, e.getAffectedElements = gt, e.getComputedStyle = function(t) {
        var e = t.element,
            n = t.actionItem;
        if (!g.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
            case it:
            case ot:
            case at:
            case ut:
            case ct:
                return window.getComputedStyle(e);
            default:
                return {}
        }
    }, e.getInstanceOrigin = function(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = (arguments.length > 4 ? arguments[4] : void 0).getStyle,
            o = r.actionTypeId,
            a = r.config;
        if ((0, _.isPluginType)(o)) return (0, _.getPluginOrigin)(o)(e[o]);
        switch (o) {
            case Z:
            case J:
            case tt:
            case et:
                return e[o] || Ot[o];
            case rt:
                return mt(e[o], r.config.filters);
            case nt:
                return {
                    value: (0, f.default)(parseFloat(i(t, x)), 1)
                };
            case it:
                var u, c, s = i(t, L),
                    l = i(t, D);
                return u = a.widthUnit === W ? yt.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, f.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === W ? yt.test(l) ? parseFloat(l) : parseFloat(n.height) : (0, f.default)(parseFloat(l), parseFloat(n.height)), {
                    widthValue: u,
                    heightValue: c
                };
            case ot:
            case at:
            case ut:
                return function(t) {
                    var e = t.element,
                        n = t.actionTypeId,
                        r = t.computedStyle,
                        i = t.getStyle,
                        o = lt[n],
                        a = i(e, o),
                        u = St.test(a) ? a : r[o],
                        c = function(t, e) {
                            var n = t.exec(e);
                            return n ? n[1] : ""
                        }(Rt, u).split(B);
                    return {
                        rValue: (0, f.default)(parseInt(c[0], 10), 255),
                        gValue: (0, f.default)(parseInt(c[1], 10), 255),
                        bValue: (0, f.default)(parseInt(c[2], 10), 255),
                        aValue: (0, f.default)(parseFloat(c[3]), 1)
                    }
                }({
                    element: t,
                    actionTypeId: o,
                    computedStyle: n,
                    getStyle: i
                });
            case ct:
                return {
                    value: (0, f.default)(i(t, V), n.display)
                };
            case st:
                return e[o] || {
                    value: 0
                };
            default:
                return
        }
    }, e.getDestinationValues = function(t) {
        var e = t.element,
            n = t.actionItem,
            r = t.elementApi,
            i = n.actionTypeId;
        if ((0, _.isPluginType)(i)) return (0, _.getPluginDestination)(i)(n.config);
        switch (i) {
            case Z:
            case J:
            case tt:
            case et:
                var o = n.config,
                    a = o.xValue,
                    u = o.yValue,
                    c = o.zValue;
                return {
                    xValue: a,
                    yValue: u,
                    zValue: c
                };
            case it:
                var s = r.getStyle,
                    f = r.setStyle,
                    l = r.getProperty,
                    d = n.config,
                    p = d.widthUnit,
                    v = d.heightUnit,
                    h = n.config,
                    E = h.widthValue,
                    y = h.heightValue;
                if (!g.IS_BROWSER_ENV) return {
                    widthValue: E,
                    heightValue: y
                };
                if (p === W) {
                    var m = s(e, L);
                    f(e, L, ""), E = l(e, "offsetWidth"), f(e, L, m)
                }
                if (v === W) {
                    var I = s(e, D);
                    f(e, D, ""), y = l(e, "offsetHeight"), f(e, D, I)
                }
                return {
                    widthValue: E,
                    heightValue: y
                };
            case ot:
            case at:
            case ut:
                var T = n.config,
                    O = T.rValue,
                    b = T.gValue,
                    A = T.bValue,
                    w = T.aValue;
                return {
                    rValue: O,
                    gValue: b,
                    bValue: A,
                    aValue: w
                };
            case rt:
                return n.config.filters.reduce(It, {});
            default:
                var S = n.config.value;
                return {
                    value: S
                }
        }
    }, e.getRenderType = Tt, e.getStyleProp = function(t, e) {
        return t === Q ? e.replace("STYLE_", "").toLowerCase() : null
    }, e.renderHTMLElement = function(t, e, n, r, i, o, a, u, c) {
        switch (u) {
            case Y:
                return function(t, e, n, r, i) {
                    var o = wt.map(function(t) {
                            var n = Ot[t],
                                r = e[t] || {},
                                i = r.xValue,
                                o = void 0 === i ? n.xValue : i,
                                a = r.yValue,
                                u = void 0 === a ? n.yValue : a,
                                c = r.zValue,
                                s = void 0 === c ? n.zValue : c,
                                f = r.xUnit,
                                l = void 0 === f ? "" : f,
                                d = r.yUnit,
                                p = void 0 === d ? "" : d,
                                v = r.zUnit,
                                h = void 0 === v ? "" : v;
                            switch (t) {
                                case Z:
                                    return "".concat(T, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case J:
                                    return "".concat(O, "(").concat(o).concat(l, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                                case tt:
                                    return "".concat(b, "(").concat(o).concat(l, ") ").concat(A, "(").concat(u).concat(p, ") ").concat(w, "(").concat(s).concat(h, ")");
                                case et:
                                    return "".concat(S, "(").concat(o).concat(l, ", ").concat(u).concat(p, ")");
                                default:
                                    return ""
                            }
                        }).join(" "),
                        a = i.setStyle;
                    Nt(t, g.TRANSFORM_PREFIXED, i), a(t, g.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, f = c.xValue, l = c.yValue, d = c.zValue, (s === Z && void 0 !== d || s === J && void 0 !== d || s === tt && (void 0 !== f || void 0 !== l)) && a(t, g.TRANSFORM_STYLE_PREFIXED, R);
                    var u, c, s, f, l, d
                }(t, e, n, i, a);
            case Q:
                return function(t, e, n, r, i, o) {
                    var a = o.setStyle,
                        u = r.actionTypeId,
                        c = r.config;
                    switch (u) {
                        case it:
                            var s = r.config,
                                f = s.widthUnit,
                                d = void 0 === f ? "" : f,
                                p = s.heightUnit,
                                v = void 0 === p ? "" : p,
                                h = n.widthValue,
                                E = n.heightValue;
                            void 0 !== h && (d === W && (d = "px"), Nt(t, L, o), a(t, L, h + d)), void 0 !== E && (v === W && (v = "px"), Nt(t, D, o), a(t, D, E + v));
                            break;
                        case rt:
                            ! function(t, e, n, r) {
                                var i = (0, l.default)(e, function(t, e, r) {
                                        return "".concat(t, " ").concat(r, "(").concat(e).concat(At(r, n), ")")
                                    }, ""),
                                    o = r.setStyle;
                                Nt(t, C, r), o(t, C, i)
                            }(t, n, c, o);
                            break;
                        case ot:
                        case at:
                        case ut:
                            var _ = lt[u],
                                g = Math.round(n.rValue),
                                y = Math.round(n.gValue),
                                m = Math.round(n.bValue),
                                I = n.aValue;
                            Nt(t, _, o), a(t, _, I >= 1 ? "rgb(".concat(g, ",").concat(y, ",").concat(m, ")") : "rgba(".concat(g, ",").concat(y, ",").concat(m, ",").concat(I, ")"));
                            break;
                        default:
                            var T = c.unit,
                                O = void 0 === T ? "" : T;
                            Nt(t, i, o), a(t, i, n.value + O)
                    }
                }(t, 0, n, i, o, a);
            case K:
                return function(t, e, n) {
                    var r = n.setStyle;
                    switch (e.actionTypeId) {
                        case ct:
                            var i = e.config.value;
                            return void(i === N && g.IS_BROWSER_ENV ? r(t, V, g.FLEX_PREFIXED) : r(t, V, i))
                    }
                }(t, i, a);
            case q:
                var s = i.actionTypeId;
                if ((0, _.isPluginType)(s)) return (0, _.renderPlugin)(s)(c, e, i)
        }
    }, e.clearAllStyles = function(t) {
        var e = t.store,
            n = t.elementApi,
            r = e.getState().ixData,
            i = r.events,
            o = void 0 === i ? {} : i,
            a = r.actionLists,
            u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function(t) {
            var e = o[t],
                r = e.action.config,
                i = r.actionListId,
                a = u[i];
            a && Ct({
                actionList: a,
                event: e,
                elementApi: n
            })
        }), Object.keys(u).forEach(function(t) {
            Ct({
                actionList: u[t],
                elementApi: n
            })
        })
    }, e.cleanupHTMLElement = function(t, e, n) {
        var r = n.setStyle,
            i = n.getStyle,
            o = e.actionTypeId;
        if (o === it) {
            var a = e.config;
            a.widthUnit === W && r(t, L, ""), a.heightUnit === W && r(t, D, "")
        }
        i(t, U) && Dt({
            effect: xt,
            actionTypeId: o,
            elementApi: n
        })(t)
    }, e.getMaxDurationItemIndex = Mt, e.getActionListProgress = function(t, e) {
        var n = t.actionItemGroups,
            r = t.useFirstGroupAsInitialState,
            i = e.actionItem,
            o = e.verboseTimeElapsed,
            a = void 0 === o ? 0 : o,
            u = 0,
            c = 0;
        return n.forEach(function(t, e) {
            if (!r || 0 !== e) {
                var n = t.actionItems,
                    o = n[Mt(n)],
                    s = o.config,
                    f = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var l = Tt(f) === K ? 0 : s.duration;
                u += s.delay + l
            }
        }), u > 0 ? (0, E.optimizeFloat)(c / u) : 0
    }, e.reduceListToGroup = function(t) {
        var e = t.actionList,
            n = t.actionItemId,
            r = t.rawData,
            i = e.actionItemGroups,
            o = e.continuousParameterGroups,
            a = [],
            u = function(t) {
                return a.push((0, p.mergeIn)(t, ["config"], {
                    delay: 0,
                    duration: 0
                })), t.id === n
            };
        return i && i.some(function(t) {
            return t.actionItems.some(u)
        }), o && o.some(function(t) {
            return t.continuousActionGroups.some(function(t) {
                return t.actionItems.some(u)
            })
        }), (0, p.setIn)(r, ["actionLists"], (0, c.default)({}, e.id, {
            id: e.id,
            actionItemGroups: [{
                actionItems: a
            }]
        }))
    }, e.shouldNamespaceEventParameter = function(t, e) {
        var n = e.basedOn;
        return t === h.EventTypeConsts.SCROLLING_IN_VIEW && (n === h.EventBasedOn.ELEMENT || null == n) || t === h.EventTypeConsts.MOUSE_MOVE && n === h.EventBasedOn.ELEMENT
    }, e.getNamespacedParameterId = function(t, e) {
        return t + H + e
    }, e.shouldAllowMediaQuery = function(t, e) {
        if (null == e) return !0;
        return -1 !== t.indexOf(e)
    }, e.mediaQueriesEqual = function(t, e) {
        return (0, v.default)(t && t.sort(), e && e.sort())
    }, e.stringifyTarget = function(t) {
        if ("string" == typeof t) return t;
        var e = t.id,
            n = void 0 === e ? "" : e,
            r = t.selector,
            i = void 0 === r ? "" : r,
            o = t.useEventTarget;
        return n + z + i + z + (void 0 === o ? "" : o)
    }, e.getItemConfigByKey = void 0;
    var f = s(n(250)),
        l = s(n(251)),
        d = s(n(257)),
        p = n(18),
        v = s(n(113)),
        h = n(2),
        E = n(108),
        _ = n(110),
        g = n(43),
        y = h.IX2EngineConstants,
        m = y.BACKGROUND,
        I = y.TRANSFORM,
        T = y.TRANSLATE_3D,
        O = y.SCALE_3D,
        b = y.ROTATE_X,
        A = y.ROTATE_Y,
        w = y.ROTATE_Z,
        S = y.SKEW,
        R = y.PRESERVE_3D,
        N = y.FLEX,
        x = y.OPACITY,
        C = y.FILTER,
        L = y.WIDTH,
        D = y.HEIGHT,
        P = y.BACKGROUND_COLOR,
        M = y.BORDER_COLOR,
        j = y.COLOR,
        F = y.CHILDREN,
        G = y.IMMEDIATE_CHILDREN,
        X = y.SIBLINGS,
        k = y.PARENT,
        V = y.DISPLAY,
        U = y.WILL_CHANGE,
        W = y.AUTO,
        B = y.COMMA_DELIMITER,
        H = y.COLON_DELIMITER,
        z = y.BAR_DELIMITER,
        Y = y.RENDER_TRANSFORM,
        K = y.RENDER_GENERAL,
        Q = y.RENDER_STYLE,
        q = y.RENDER_PLUGIN,
        $ = h.ActionTypeConsts,
        Z = $.TRANSFORM_MOVE,
        J = $.TRANSFORM_SCALE,
        tt = $.TRANSFORM_ROTATE,
        et = $.TRANSFORM_SKEW,
        nt = $.STYLE_OPACITY,
        rt = $.STYLE_FILTER,
        it = $.STYLE_SIZE,
        ot = $.STYLE_BACKGROUND_COLOR,
        at = $.STYLE_BORDER,
        ut = $.STYLE_TEXT_COLOR,
        ct = $.GENERAL_DISPLAY,
        st = "OBJECT_VALUE",
        ft = function(t) {
            return t.trim()
        },
        lt = Object.freeze((r = {}, (0, c.default)(r, ot, P), (0, c.default)(r, at, M), (0, c.default)(r, ut, j), r)),
        dt = Object.freeze((i = {}, (0, c.default)(i, g.TRANSFORM_PREFIXED, I), (0, c.default)(i, P, m), (0, c.default)(i, x, x), (0, c.default)(i, C, C), (0, c.default)(i, L, L), (0, c.default)(i, D, D), i)),
        pt = {},
        vt = 1;
    var ht = 1;
    var Et = function(t, e) {
        return t === e
    };

    function _t(t) {
        var e = (0, u.default)(t);
        return "string" === e ? {
            id: t
        } : null != t && "object" === e ? {
            id: t.id,
            objectId: t.objectId,
            selector: t.selector,
            selectorGuids: t.selectorGuids,
            appliesTo: t.appliesTo,
            useEventTarget: t.useEventTarget
        } : {}
    }

    function gt(t) {
        var e, n, r, i = t.config,
            o = t.event,
            a = t.eventTarget,
            u = t.elementRoot,
            c = t.elementApi;
        if (!c) throw new Error("IX2 missing elementApi");
        var s = i.targets;
        if (Array.isArray(s) && s.length > 0) return s.reduce(function(t, e) {
            return t.concat(gt({
                config: {
                    target: e
                },
                event: o,
                eventTarget: a,
                elementRoot: u,
                elementApi: c
            }))
        }, []);
        var f = c.getValidDocument,
            l = c.getQuerySelector,
            d = c.queryDocument,
            p = c.getChildElements,
            v = c.getSiblingElements,
            E = c.matchSelector,
            _ = c.elementContains,
            y = c.isSiblingNode,
            m = i.target;
        if (!m) return [];
        var I = _t(m),
            T = I.id,
            O = I.objectId,
            b = I.selector,
            A = I.selectorGuids,
            w = I.appliesTo,
            S = I.useEventTarget;
        if (O) return [pt[O] || (pt[O] = {})];
        if (w === h.EventAppliesTo.PAGE) {
            var R = f(T);
            return R ? [R] : []
        }
        var N, x, C, L = (null !== (e = null == o ? void 0 : null === (n = o.action) || void 0 === n ? void 0 : null === (r = n.config) || void 0 === r ? void 0 : r.affectedElements) && void 0 !== e ? e : {})[T || b] || {},
            D = Boolean(L.id || L.selector),
            P = o && l(_t(o.target));
        if (D ? (N = L.limitAffectedElements, x = P, C = l(L)) : x = C = l({
                id: T,
                selector: b,
                selectorGuids: A
            }), o && S) {
            var M = a && (C || !0 === S) ? [a] : d(P);
            if (C) {
                if (S === k) return d(C).filter(function(t) {
                    return M.some(function(e) {
                        return _(t, e)
                    })
                });
                if (S === F) return d(C).filter(function(t) {
                    return M.some(function(e) {
                        return _(e, t)
                    })
                });
                if (S === X) return d(C).filter(function(t) {
                    return M.some(function(e) {
                        return y(e, t)
                    })
                })
            }
            return M
        }
        return null == x || null == C ? [] : g.IS_BROWSER_ENV && u ? d(C).filter(function(t) {
            return u.contains(t)
        }) : N === F ? d(x, C) : N === G ? p(d(x)).filter(E(C)) : N === X ? v(d(x)).filter(E(C)) : d(C)
    }
    var yt = /px/,
        mt = function(t, e) {
            return e.reduce(function(t, e) {
                return null == t[e.type] && (t[e.type] = bt[e.type]), t
            }, t || {})
        };
    var It = function(t, e) {
        return e && (t[e.type] = e.value || 0), t
    };

    function Tt(t) {
        return /^TRANSFORM_/.test(t) ? Y : /^STYLE_/.test(t) ? Q : /^GENERAL_/.test(t) ? K : /^PLUGIN_/.test(t) ? q : void 0
    }
    e.getItemConfigByKey = function(t, e, n) {
        if ((0, _.isPluginType)(t)) return (0, _.getPluginConfig)(t)(n, e);
        switch (t) {
            case rt:
                var r = (0, d.default)(n.filters, function(t) {
                    return t.type === e
                });
                return r ? r.value : 0;
            default:
                return n[e]
        }
    };
    var Ot = (o = {}, (0, c.default)(o, Z, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, J, Object.freeze({
            xValue: 1,
            yValue: 1,
            zValue: 1
        })), (0, c.default)(o, tt, Object.freeze({
            xValue: 0,
            yValue: 0,
            zValue: 0
        })), (0, c.default)(o, et, Object.freeze({
            xValue: 0,
            yValue: 0
        })), o),
        bt = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        At = function(t, e) {
            var n = (0, d.default)(e.filters, function(e) {
                return e.type === t
            });
            if (n && n.unit) return n.unit;
            switch (t) {
                case "blur":
                    return "px";
                case "hue-rotate":
                    return "deg";
                default:
                    return "%"
            }
        },
        wt = Object.keys(Ot);
    var St = /^rgb/,
        Rt = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function Nt(t, e, n) {
        if (g.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                if (a) {
                    var u = a.split(B).map(ft); - 1 === u.indexOf(r) && o(t, U, u.concat(r).join(B))
                } else o(t, U, r)
            }
        }
    }

    function xt(t, e, n) {
        if (g.IS_BROWSER_ENV) {
            var r = dt[e];
            if (r) {
                var i = n.getStyle,
                    o = n.setStyle,
                    a = i(t, U);
                a && -1 !== a.indexOf(r) && o(t, U, a.split(B).map(ft).filter(function(t) {
                    return t !== r
                }).join(B))
            }
        }
    }

    function Ct(t) {
        var e = t.actionList,
            n = void 0 === e ? {} : e,
            r = t.event,
            i = t.elementApi,
            o = n.actionItemGroups,
            a = n.continuousParameterGroups;
        o && o.forEach(function(t) {
            Lt({
                actionGroup: t,
                event: r,
                elementApi: i
            })
        }), a && a.forEach(function(t) {
            t.continuousActionGroups.forEach(function(t) {
                Lt({
                    actionGroup: t,
                    event: r,
                    elementApi: i
                })
            })
        })
    }

    function Lt(t) {
        var e = t.actionGroup,
            n = t.event,
            r = t.elementApi;
        e.actionItems.forEach(function(t) {
            var e, i = t.actionTypeId,
                o = t.config;
            e = (0, _.isPluginType)(i) ? (0, _.clearPlugin)(i) : Dt({
                effect: Pt,
                actionTypeId: i,
                elementApi: r
            }), gt({
                config: o,
                event: n,
                elementApi: r
            }).forEach(e)
        })
    }
    var Dt = function(t) {
        var e = t.effect,
            n = t.actionTypeId,
            r = t.elementApi;
        return function(t) {
            switch (n) {
                case Z:
                case J:
                case tt:
                case et:
                    e(t, g.TRANSFORM_PREFIXED, r);
                    break;
                case rt:
                    e(t, C, r);
                    break;
                case nt:
                    e(t, x, r);
                    break;
                case it:
                    e(t, L, r), e(t, D, r);
                    break;
                case ot:
                case at:
                case ut:
                    e(t, lt[n], r);
                    break;
                case ct:
                    e(t, V, r)
            }
        }
    };

    function Pt(t, e, n) {
        var r = n.setStyle;
        xt(t, e, n), r(t, e, ""), e === g.TRANSFORM_PREFIXED && r(t, g.TRANSFORM_STYLE_PREFIXED, "")
    }

    function Mt(t) {
        var e = 0,
            n = 0;
        return t.forEach(function(t, r) {
            var i = t.config,
                o = i.delay + i.duration;
            o >= e && (e = o, n = r)
        }), n
    }
}, function(t, e) {
    t.exports = function(t, e) {
        return null == t || t != t ? e : t
    }
}, function(t, e, n) {
    var r = n(252),
        i = n(111),
        o = n(7),
        a = n(256),
        u = n(1);
    t.exports = function(t, e, n) {
        var c = u(t) ? r : a,
            s = arguments.length < 3;
        return c(t, o(e, 4), n, s, i)
    }
}, function(t, e) {
    t.exports = function(t, e, n, r) {
        var i = -1,
            o = null == t ? 0 : t.length;
        for (r && o && (n = t[++i]); ++i < o;) n = e(n, t[i], i, t);
        return n
    }
}, function(t, e, n) {
    var r = n(254)();
    t.exports = r
}, function(t, e) {
    t.exports = function(t) {
        return function(e, n, r) {
            for (var i = -1, o = Object(e), a = r(e), u = a.length; u--;) {
                var c = a[t ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return e
        }
    }
}, function(t, e, n) {
    var r = n(12);
    t.exports = function(t, e) {
        return function(n, i) {
            if (null == n) return n;
            if (!r(n)) return t(n, i);
            for (var o = n.length, a = e ? o : -1, u = Object(n);
                (e ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function(t, e) {
    t.exports = function(t, e, n, r, i) {
        return i(t, function(t, i, o) {
            n = r ? (r = !1, t) : e(n, t, i, o)
        }), n
    }
}, function(t, e, n) {
    var r = n(86)(n(258));
    t.exports = r
}, function(t, e, n) {
    var r = n(104),
        i = n(7),
        o = n(105),
        a = Math.max,
        u = Math.min;
    t.exports = function(t, e, n) {
        var c = null == t ? 0 : t.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(t, i(e, 3), s, !0)
    }
}, function(t, e) {
    t.exports = function(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }
}, function(t, e, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(t, e) {
        return t === e ? 0 !== t || 0 !== e || 1 / t == 1 / e : t != t && e != e
    }
    t.exports = function(t, e) {
        if (i(t, e)) return !0;
        if ("object" != typeof t || null === t || "object" != typeof e || null === e) return !1;
        var n = Object.keys(t),
            o = Object.keys(e);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(e, n[a]) || !i(t[n[a]], e[n[a]])) return !1;
        return !0
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixInstances = void 0;
    var r = n(2),
        i = n(10),
        o = n(18),
        a = r.IX2EngineActionTypes,
        u = a.IX2_RAW_DATA_IMPORTED,
        c = a.IX2_SESSION_STOPPED,
        s = a.IX2_INSTANCE_ADDED,
        f = a.IX2_INSTANCE_STARTED,
        l = a.IX2_INSTANCE_REMOVED,
        d = a.IX2_ANIMATION_FRAME_CHANGED,
        p = i.IX2EasingUtils,
        v = p.optimizeFloat,
        h = p.applyEasing,
        E = p.createBezierEasing,
        _ = r.IX2EngineConstants.RENDER_GENERAL,
        g = i.IX2VanillaUtils,
        y = g.getItemConfigByKey,
        m = g.getRenderType,
        I = g.getStyleProp,
        T = function(t, e) {
            var n = t.position,
                r = t.parameterId,
                i = t.actionGroups,
                a = t.destinationKeys,
                u = t.smoothing,
                c = t.restingValue,
                s = t.actionTypeId,
                f = t.customEasingFn,
                l = e.payload.parameters,
                d = Math.max(1 - u, .01),
                p = l[r];
            null == p && (d = 1, p = c);
            var E, _, g, m, I = Math.max(p, 0) || 0,
                T = v(I - n),
                O = v(n + T * d),
                b = 100 * O;
            if (O === n && t.current) return t;
            for (var A = 0, w = i.length; A < w; A++) {
                var S = i[A],
                    R = S.keyframe,
                    N = S.actionItems;
                if (0 === A && (E = N[0]), b >= R) {
                    E = N[0];
                    var x = i[A + 1],
                        C = x && b !== R;
                    _ = C ? x.actionItems[0] : null, C && (g = R / 100, m = (x.keyframe - R) / 100)
                }
            }
            var L = {};
            if (E && !_)
                for (var D = 0, P = a.length; D < P; D++) {
                    var M = a[D];
                    L[M] = y(s, M, E.config)
                } else if (E && _ && void 0 !== g && void 0 !== m)
                    for (var j = (O - g) / m, F = E.config.easing, G = h(F, j, f), X = 0, k = a.length; X < k; X++) {
                        var V = a[X],
                            U = y(s, V, E.config),
                            W = (y(s, V, _.config) - U) * G + U;
                        L[V] = W
                    }
            return (0, o.merge)(t, {
                position: O,
                current: L
            })
        },
        O = function(t, e) {
            var n = t,
                r = n.active,
                i = n.origin,
                a = n.start,
                u = n.immediate,
                c = n.renderType,
                s = n.verbose,
                f = n.actionItem,
                l = n.destination,
                d = n.destinationKeys,
                p = n.pluginDuration,
                E = n.instanceDelay,
                g = n.customEasingFn,
                y = f.config.easing,
                m = f.config,
                I = m.duration,
                T = m.delay;
            null != p && (I = p), T = null != E ? E : T, c === _ ? I = 0 : u && (I = T = 0);
            var O = e.payload.now;
            if (r && i) {
                var b = O - (a + T);
                if (s) {
                    var A = O - a,
                        w = I + T,
                        S = v(Math.min(Math.max(0, A / w), 1));
                    t = (0, o.set)(t, "verboseTimeElapsed", w * S)
                }
                if (b < 0) return t;
                var R = v(Math.min(Math.max(0, b / I), 1)),
                    N = h(y, R, g),
                    x = {},
                    C = null;
                return d.length && (C = d.reduce(function(t, e) {
                    var n = l[e],
                        r = parseFloat(i[e]) || 0,
                        o = (parseFloat(n) - r) * N + r;
                    return t[e] = o, t
                }, {})), x.current = C, x.position = R, 1 === R && (x.active = !1, x.complete = !0), (0, o.merge)(t, x)
            }
            return t
        };
    e.ixInstances = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({}),
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case u:
                return e.payload.ixInstances || Object.freeze({});
            case c:
                return Object.freeze({});
            case s:
                var n = e.payload,
                    r = n.instanceId,
                    i = n.elementId,
                    a = n.actionItem,
                    p = n.eventId,
                    v = n.eventTarget,
                    h = n.eventStateKey,
                    _ = n.actionListId,
                    g = n.groupIndex,
                    y = n.isCarrier,
                    b = n.origin,
                    A = n.destination,
                    w = n.immediate,
                    S = n.verbose,
                    R = n.continuous,
                    N = n.parameterId,
                    x = n.actionGroups,
                    C = n.smoothing,
                    L = n.restingValue,
                    D = n.pluginInstance,
                    P = n.pluginDuration,
                    M = n.instanceDelay,
                    j = a.actionTypeId,
                    F = m(j),
                    G = I(F, j),
                    X = Object.keys(A).filter(function(t) {
                        return null != A[t]
                    }),
                    k = a.config.easing;
                return (0, o.set)(t, r, {
                    id: r,
                    elementId: i,
                    active: !1,
                    position: 0,
                    start: 0,
                    origin: b,
                    destination: A,
                    destinationKeys: X,
                    immediate: w,
                    verbose: S,
                    current: null,
                    actionItem: a,
                    actionTypeId: j,
                    eventId: p,
                    eventTarget: v,
                    eventStateKey: h,
                    actionListId: _,
                    groupIndex: g,
                    renderType: F,
                    isCarrier: y,
                    styleProp: G,
                    continuous: R,
                    parameterId: N,
                    actionGroups: x,
                    smoothing: C,
                    restingValue: L,
                    pluginInstance: D,
                    pluginDuration: P,
                    instanceDelay: M,
                    customEasingFn: Array.isArray(k) && 4 === k.length ? E(k) : void 0
                });
            case f:
                var V = e.payload,
                    U = V.instanceId,
                    W = V.time;
                return (0, o.mergeIn)(t, [U], {
                    active: !0,
                    complete: !1,
                    start: W
                });
            case l:
                var B = e.payload.instanceId;
                if (!t[B]) return t;
                for (var H = {}, z = Object.keys(t), Y = z.length, K = 0; K < Y; K++) {
                    var Q = z[K];
                    Q !== B && (H[Q] = t[Q])
                }
                return H;
            case d:
                for (var q = t, $ = Object.keys(t), Z = $.length, J = 0; J < Z; J++) {
                    var tt = $[J],
                        et = t[tt],
                        nt = et.continuous ? T : O;
                    q = (0, o.set)(q, tt, nt(et, e))
                }
                return q;
            default:
                return t
        }
    }
}, function(t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.ixParameters = void 0;
    var r = n(2).IX2EngineActionTypes,
        i = r.IX2_RAW_DATA_IMPORTED,
        o = r.IX2_SESSION_STOPPED,
        a = r.IX2_PARAMETER_CHANGED;
    e.ixParameters = function() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            e = arguments.length > 1 ? arguments[1] : void 0;
        switch (e.type) {
            case i:
                return e.payload.ixParameters || {};
            case o:
                return {};
            case a:
                var n = e.payload,
                    r = n.key,
                    u = n.value;
                return t[r] = u, t;
            default:
                return t
        }
    }
}, function(t, e) {
    t.exports = function(t, e) {
        if (null == t) return {};
        var n, r, i = {},
            o = Object.keys(t);
        for (r = 0; r < o.length; r++) n = o[r], e.indexOf(n) >= 0 || (i[n] = t[n]);
        return i
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(54),
        o = n(12),
        a = n(265),
        u = n(266),
        c = "[object Map]",
        s = "[object Set]";
    t.exports = function(t) {
        if (null == t) return 0;
        if (o(t)) return a(t) ? u(t) : t.length;
        var e = i(t);
        return e == c || e == s ? t.size : r(t).length
    }
}, function(t, e, n) {
    var r = n(11),
        i = n(1),
        o = n(9),
        a = "[object String]";
    t.exports = function(t) {
        return "string" == typeof t || !i(t) && o(t) && r(t) == a
    }
}, function(t, e, n) {
    var r = n(267),
        i = n(268),
        o = n(269);
    t.exports = function(t) {
        return i(t) ? o(t) : r(t)
    }
}, function(t, e, n) {
    var r = n(103)("length");
    t.exports = r
}, function(t, e) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    t.exports = function(t) {
        return n.test(t)
    }
}, function(t, e) {
    var n = "[\\ud800-\\udfff]",
        r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
        i = "\\ud83c[\\udffb-\\udfff]",
        o = "[^\\ud800-\\udfff]",
        a = "(?:\\ud83c[\\udde6-\\uddff]){2}",
        u = "[\\ud800-\\udbff][\\udc00-\\udfff]",
        c = "(?:" + r + "|" + i + ")" + "?",
        s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*"),
        f = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")",
        l = RegExp(i + "(?=" + i + ")|" + f + s, "g");
    t.exports = function(t) {
        for (var e = l.lastIndex = 0; l.test(t);) ++e;
        return e
    }
}, function(t, e, n) {
    var r = n(7),
        i = n(271),
        o = n(272);
    t.exports = function(t, e) {
        return o(t, i(r(e)))
    }
}, function(t, e) {
    var n = "Expected a function";
    t.exports = function(t) {
        if ("function" != typeof t) throw new TypeError(n);
        return function() {
            var e = arguments;
            switch (e.length) {
                case 0:
                    return !t.call(this);
                case 1:
                    return !t.call(this, e[0]);
                case 2:
                    return !t.call(this, e[0], e[1]);
                case 3:
                    return !t.call(this, e[0], e[1], e[2])
            }
            return !t.apply(this, e)
        }
    }
}, function(t, e, n) {
    var r = n(102),
        i = n(7),
        o = n(273),
        a = n(276);
    t.exports = function(t, e) {
        if (null == t) return {};
        var n = r(a(t), function(t) {
            return [t]
        });
        return e = i(e), o(t, n, function(t, n) {
            return e(t, n[0])
        })
    }
}, function(t, e, n) {
    var r = n(56),
        i = n(274),
        o = n(34);
    t.exports = function(t, e, n) {
        for (var a = -1, u = e.length, c = {}; ++a < u;) {
            var s = e[a],
                f = r(t, s);
            n(f, s) && i(c, o(s, t), f)
        }
        return c
    }
}, function(t, e, n) {
    var r = n(275),
        i = n(34),
        o = n(49),
        a = n(5),
        u = n(20);
    t.exports = function(t, e, n, c) {
        if (!a(t)) return t;
        for (var s = -1, f = (e = i(e, t)).length, l = f - 1, d = t; null != d && ++s < f;) {
            var p = u(e[s]),
                v = n;
            if ("__proto__" === p || "constructor" === p || "prototype" === p) return t;
            if (s != l) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(e[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return t
    }
}, function(t, e, n) {
    var r = n(115),
        i = n(44),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(t, e, n) {
        var a = t[e];
        o.call(t, e) && i(a, n) && (void 0 !== n || e in t) || r(t, e, n)
    }
}, function(t, e, n) {
    var r = n(93),
        i = n(277),
        o = n(279);
    t.exports = function(t) {
        return r(t, o, i)
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(278),
        o = n(94),
        a = n(95),
        u = Object.getOwnPropertySymbols ? function(t) {
            for (var e = []; t;) r(e, o(t)), t = i(t);
            return e
        } : a;
    t.exports = u
}, function(t, e, n) {
    var r = n(98)(Object.getPrototypeOf, Object);
    t.exports = r
}, function(t, e, n) {
    var r = n(96),
        i = n(280),
        o = n(12);
    t.exports = function(t) {
        return o(t) ? r(t, !0) : i(t)
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(53),
        o = n(281),
        a = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (!r(t)) return o(t);
        var e = i(t),
            n = [];
        for (var u in t)("constructor" != u || !e && a.call(t, u)) && n.push(u);
        return n
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = [];
        if (null != t)
            for (var n in Object(t)) e.push(n);
        return e
    }
}, function(t, e, n) {
    var r = n(52),
        i = n(54),
        o = n(33),
        a = n(1),
        u = n(12),
        c = n(48),
        s = n(53),
        f = n(50),
        l = "[object Map]",
        d = "[object Set]",
        p = Object.prototype.hasOwnProperty;
    t.exports = function(t) {
        if (null == t) return !0;
        if (u(t) && (a(t) || "string" == typeof t || "function" == typeof t.splice || c(t) || f(t) || o(t))) return !t.length;
        var e = i(t);
        if (e == l || e == d) return !t.size;
        if (s(t)) return !r(t).length;
        for (var n in t)
            if (p.call(t, n)) return !1;
        return !0
    }
}, function(t, e, n) {
    var r = n(115),
        i = n(112),
        o = n(7);
    t.exports = function(t, e) {
        var n = {};
        return e = o(e, 3), i(t, function(t, i, o) {
            r(n, i, e(t, i, o))
        }), n
    }
}, function(t, e, n) {
    var r = n(285),
        i = n(111),
        o = n(286),
        a = n(1);
    t.exports = function(t, e) {
        return (a(t) ? r : i)(t, o(e))
    }
}, function(t, e) {
    t.exports = function(t, e) {
        for (var n = -1, r = null == t ? 0 : t.length; ++n < r && !1 !== e(t[n], n, t););
        return t
    }
}, function(t, e, n) {
    var r = n(58);
    t.exports = function(t) {
        return "function" == typeof t ? t : r
    }
}, function(t, e, n) {
    var r = n(288),
        i = n(5),
        o = "Expected a function";
    t.exports = function(t, e, n) {
        var a = !0,
            u = !0;
        if ("function" != typeof t) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(t, e, {
            leading: a,
            maxWait: e,
            trailing: u
        })
    }
}, function(t, e, n) {
    var r = n(5),
        i = n(289),
        o = n(59),
        a = "Expected a function",
        u = Math.max,
        c = Math.min;
    t.exports = function(t, e, n) {
        var s, f, l, d, p, v, h = 0,
            E = !1,
            _ = !1,
            g = !0;
        if ("function" != typeof t) throw new TypeError(a);

        function y(e) {
            var n = s,
                r = f;
            return s = f = void 0, h = e, d = t.apply(r, n)
        }

        function m(t) {
            var n = t - v;
            return void 0 === v || n >= e || n < 0 || _ && t - h >= l
        }

        function I() {
            var t = i();
            if (m(t)) return T(t);
            p = setTimeout(I, function(t) {
                var n = e - (t - v);
                return _ ? c(n, l - (t - h)) : n
            }(t))
        }

        function T(t) {
            return p = void 0, g && s ? y(t) : (s = f = void 0, d)
        }

        function O() {
            var t = i(),
                n = m(t);
            if (s = arguments, f = this, v = t, n) {
                if (void 0 === p) return function(t) {
                    return h = t, p = setTimeout(I, e), E ? y(t) : d
                }(v);
                if (_) return clearTimeout(p), p = setTimeout(I, e), y(v)
            }
            return void 0 === p && (p = setTimeout(I, e)), d
        }
        return e = o(e) || 0, r(n) && (E = !!n.leading, l = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, e) : l, g = "trailing" in n ? !!n.trailing : g), O.cancel = function() {
            void 0 !== p && clearTimeout(p), h = 0, s = v = f = p = void 0
        }, O.flush = function() {
            return void 0 === p ? d : T(i())
        }, O
    }
}, function(t, e, n) {
    var r = n(4);
    t.exports = function() {
        return r.Date.now()
    }
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(21));
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.setStyle = function(t, e, n) {
        t.style[e] = n
    }, e.getStyle = function(t, e) {
        return t.style[e]
    }, e.getProperty = function(t, e) {
        return t[e]
    }, e.matchSelector = function(t) {
        return function(e) {
            return e[a](t)
        }
    }, e.getQuerySelector = function(t) {
        var e = t.id,
            n = t.selector;
        if (e) {
            var r = e;
            if (-1 !== e.indexOf(c)) {
                var i = e.split(c),
                    o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id="'.concat(r, '"], [data-w-id^="').concat(r, '_instance"]')
        }
        return n
    }, e.getValidDocument = function(t) {
        if (null == t || t === document.documentElement.getAttribute(l)) return document;
        return null
    }, e.queryDocument = function(t, e) {
        return Array.prototype.slice.call(document.querySelectorAll(e ? t + " " + e : t))
    }, e.elementContains = function(t, e) {
        return t.contains(e)
    }, e.isSiblingNode = function(t, e) {
        return t !== e && t.parentNode === e.parentNode
    }, e.getChildElements = function(t) {
        for (var e = [], n = 0, r = (t || []).length; n < r; n++) {
            var i = t[n].children,
                o = i.length;
            if (o)
                for (var a = 0; a < o; a++) e.push(i[a])
        }
        return e
    }, e.getSiblingElements = function() {
        for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = [], n = [], r = 0, i = t.length; r < i; r++) {
            var o = t[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === t.indexOf(a) && e.push(a), a = a.nextElementSibling
            }
        }
        return e
    }, e.getRefType = function(t) {
        if (null != t && "object" == (0, r.default)(t)) return t instanceof Element ? s : f;
        return null
    }, e.getClosestElement = void 0;
    var i = n(10),
        o = n(2),
        a = i.IX2BrowserSupport.ELEMENT_MATCHES,
        u = o.IX2EngineConstants,
        c = u.IX2_ID_DELIMITER,
        s = u_ELEMENT,
        f = u.PLAIN_OBJECT,
        l = u.WF_PAGE;
    var d = Element.prototype.closest ? function(t, e) {
        return document.documentElement.contains(t) ? t.closest(e) : null
    } : function(t, e) {
        if (!document.documentElement.contains(t)) return null;
        var n = t;
        do {
            if (n[a] && n[a](e)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    e.getClosestElement = d
}, function(t, e, n) {
    "use strict";
    var r, i = n(0),
        o = i(n(26)),
        a = i(n(21)),
        u = n(0);
    Object.defineProperty(e, "__esModule", {
        value: !0
    }), e.default = void 0;
    var c, s, f, l = u(n(27)),
        d = u(n(292)),
        p = u(n(55)),
        v = u(n(311)),
        h = n(2),
        E = n(114),
        _ = n(60),
        g = n(10),
        y = h.EventTypeConsts,
        m = y.MOUSE_CLICK,
        I = y.MOUSE_SECOND_CLICK,
        T = y.MOUSE_DOWN,
        O = y.MOUSE_UP,
        b = y.MOUSE_OVER,
        A = y.MOUSE_OUT,
        w = y.DROPDOWN_CLOSE,
        S = y.DROPDOWN_OPEN,
        R = y.SLIDER_ACTIVE,
        N = y.SLIDER_INACTIVE,
        x = y.TAB_ACTIVE,
        C = y.TAB_INACTIVE,
        L = y.NAVBAR_CLOSE,
        D = y.NAVBAR_OPEN,
        P = y.MOUSE_MOVE,
        M = y.PAGE_SCROLL_DOWN,
        j = y.SCROLL_INTO_VIEW,
        F = y.SCROLL_OUT_OF_VIEW,
        G = y.PAGE_SCROLL_UP,
        X = y.SCROLLING_IN_VIEW,
        k = y.PAGE_FINISH,
        V = y.ECOMMERCE_CART_CLOSE,
        U = y.ECOMMERCE_CART_OPEN,
        W = y.PAGE_START,
        B = y.PAGE_SCROLL,
        H = "COMPONENT_ACTIVE",
        z = "COMPONENT_INACTIVE",
        Y = h.IX2EngineConstants.COLON_DELIMITER,
        K = g.IX2VanillaUtils.getNamespacedParameterId,
        Q = function(t) {
            return function(e) {
                return !("object" !== (0, a.default)(e) || !t(e)) || e
            }
        },
        q = Q(function(t) {
            return t.element === t.nativeEvent.target
        }),
        $ = Q(function(t) {
            var e = t.element,
                n = t.nativeEvent;
            return e.contains(n.target)
        }),
        Z = (0, d.default)([q, $]),
        J = function(t, e) {
            if (e) {
                var n = t.getState().ixData.events[e];
                if (n && !at[n.eventTypeId]) return n
            }
            return null
        },
        tt = function(t, e) {
            var n = t.store,
                r = t.event,
                i = t.element,
                o = t.eventStateKey,
                a = r.action,
                u = r.id,
                c = a.config,
                s = c.actionListId,
                f = c.autoStopEventId,
                l = J(n, f);
            return l && (0, E.stopActionGroup)({
                store: n,
                eventId: f,
                eventTarget: i,
                eventStateKey: f + Y + o.split(Y)[1],
                actionListId: (0, p.default)(l, "action.config.actionListId")
            }), (0, E.stopActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), (0, E.startActionGroup)({
                store: n,
                eventId: u,
                eventTarget: i,
                eventStateKey: o,
                actionListId: s
            }), e
        },
        et = function(t, e) {
            return function(n, r) {
                return !0 === t(n, r) ? e(n, r) : r
            }
        },
        nt = {
            handler: et(Z, tt)
        },
        rt = (0, l.default)({}, nt, {
            types: [H, z].join(" ")
        }),
        it = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        ot = {
            types: it
        },
        at = {
            PAGE_START: W,
            PAGE_FINISH: k
        },
        ut = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function() {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft,
                scrollTop: c ? window.pageYOffset : s.scrollTop,
                stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight),
                scrollWidth: s.scrollWidth,
                scrollHeight: s.scrollHeight,
                clientWidth: s.clientWidth,
                clientHeight: s.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            }
        }),
        ct = function(t) {
            var e = t.element,
                n = t.nativeEvent,
                r = n.type,
                i = n.target,
                o = n.relatedTarget,
                a = e.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = e.contains(o);
            return !("mouseout" !== r || !a || !u)
        },
        st = function(t) {
            var e, n, r = t.element,
                i = t.event.config,
                o = ut(),
                a = o.clientWidth,
                u = o.clientHeight,
                c = i.scrollOffsetValue,
                s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return e = r.getBoundingClientRect(), n = {
                left: 0,
                top: s,
                right: a,
                bottom: u - s
            }, !(e.left > n.right || e.right < n.left || e.top > n.bottom || e.bottom < n.top)
        },
        ft = function(t) {
            return function(e, n) {
                var r = e.nativeEvent.type,
                    i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive,
                    o = (0, l.default)({}, n, {
                        isActive: i
                    });
                return n && o.isActive === n.isActive ? o : t(e, o) || o
            }
        },
        lt = function(t) {
            return function(e, n) {
                var r = {
                    elementHovered: ct(e)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && t(e, r) || r
            }
        },
        dt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = ut(),
                    i = r.stiffScrollTop,
                    o = r.scrollHeight,
                    a = r.innerHeight,
                    u = e.event,
                    c = u.config,
                    s = u.eventTypeId,
                    f = c.scrollOffsetValue,
                    d = "PX" === c.scrollOffsetUnit,
                    p = o - a,
                    v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, E, _ = (d ? f : a * (f || 0) / 100) / p,
                    g = 0;
                n && (h = v > n.percentTop, g = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var y = s === M ? v >= g + _ : v <= g - _,
                    m = (0, l.default)({}, n, {
                        percentTop: v,
                        inBounds: y,
                        anchorTop: g,
                        scrollingDown: h
                    });
                return n && y && (E || m.inBounds !== n.inBounds) && t(e, m) || m
            }
        },
        pt = function(t) {
            return function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    },
                    r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && t(e, r) || r
            }
        },
        vt = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function(t, e) {
                    return e.isActive ? nt.handler(t, e) : e
                }))
            })
        },
        ht = function() {
            var t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, l.default)({}, rt, {
                handler: et(t ? Z : q, ft(function(t, e) {
                    return e.isActive ? e : nt.handler(t, e)
                }))
            })
        },
        Et = (0, l.default)({}, ot, {
            handler: (f = function(t, e) {
                var n = e.elementVisible,
                    r = t.event;
                return !t.store.getState().ixData.events[r.action.config.autoStopEventId] && e.triggered ? e : r.eventTypeId === j === n ? (tt(t), (0, l.default)({}, e, {
                    triggered: !0
                })) : e
            }, function(t, e) {
                var n = (0, l.default)({}, e, {
                    elementVisible: st(t)
                });
                return (e ? n.elementVisible !== e.elementVisible : n.elementVisible) && f(t, n) || n
            })
        }),
        _t = (r = {}, (0, o.default)(r, R, vt()), (0, o.default)(r, N, ht()), (0, o.default)(r, S, vt()), (0, o.default)(r, w, ht()), (0, o.default)(r, D, vt(!1)), (0, o.default)(r, L, ht(!1)), (0, o.default)(r, x, vt()), (0, o.default)(r, C, ht()), (0, o.default)(r, U, {
            types: "ecommerce-cart-open",
            handler: et(Z, tt)
        }), (0, o.default)(r, V, {
            types: "ecommerce-cart-close",
            handler: et(Z, tt)
        }), (0, o.default)(r, m, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                var n, r, i, o = e.clickCount;
                r = (n = t).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && tt(t) : tt(t)
            }))
        }), (0, o.default)(r, I, {
            types: "click",
            handler: et(Z, pt(function(t, e) {
                2 === e.clickCount && tt(t)
            }))
        }), (0, o.default)(r, T, (0, l.default)({}, nt, {
            types: "mousedown"
        })), (0, o.default)(r, O, (0, l.default)({}, nt, {
            types: "mouseup"
        })), (0, o.default)(r, b, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function(t, e) {
                e.elementHovered && tt(t)
            }))
        }), (0, o.default)(r, A, {
            types: "mouseover mouseout",
            handler: et(Z, lt(function(t, e) {
                e.elementHovered || tt(t)
            }))
        }), (0, o.default)(r, P, {
            types: "mousemove mouseout scroll",
            handler: function(t) {
                var e = t.store,
                    n = t.element,
                    r = t.eventConfig,
                    i = t.nativeEvent,
                    o = t.eventStateKey,
                    a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    },
                    u = r.basedOn,
                    c = r.selectedAxis,
                    s = r.continuousParameterGroupId,
                    f = r.reverse,
                    l = r.restingState,
                    d = void 0 === l ? 0 : l,
                    p = i.clientX,
                    v = void 0 === p ? a.clientX : p,
                    E = i.clientY,
                    g = void 0 === E ? a.clientY : E,
                    y = i.pageX,
                    m = void 0 === y ? a.pageX : y,
                    I = i.pageY,
                    T = void 0 === I ? a.pageY : I,
                    O = "X_AXIS" === c,
                    b = "mouseout" === i.type,
                    A = d / 100,
                    w = s,
                    S = !1;
                switch (u) {
                    case h.EventBasedOn.VIEWPORT:
                        A = O ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                        break;
                    case h.EventBasedOn.PAGE:
                        var R = ut(),
                            N = R.scrollLeft,
                            x = R.scrollTop,
                            C = R.scrollWidth,
                            L = R.scrollHeight;
                        A = O ? Math.min(N + m, C) / C : Math.min(x + T, L) / L;
                        break;
                    case h.EventBasedOn.ELEMENT:
                    default:
                        w = K(o, s);
                        var D = 0 === i.type.indexOf("mouse");
                        if (D && !0 !== Z({
                                element: n,
                                nativeEvent: i
                            })) break;
                        var P = n.getBoundingClientRect(),
                            M = P.left,
                            j = P.top,
                            F = P.width,
                            G = P.height;
                        if (!D && ! function(t, e) {
                                return t.left > e.left && t.left < e.right && t.top > e.top && t.top < e.bottom
                            }({
                                left: v,
                                top: g
                            }, P)) break;
                        S = !0, A = O ? (v - M) / F : (g - j) / G
                }
                return b && (A > .95 || A < .05) && (A = Math.round(A)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (A = f ? 1 - A : A, e.dispatch((0, _.parameterChanged)(w, A))), {
                    elementHovered: S,
                    clientX: v,
                    clientY: g,
                    pageX: m,
                    pageY: T
                }
            }
        }), (0, o.default)(r, B, {
            types: it,
            handler: function(t) {
                var e = t.store,
                    n = t.eventConfig,
                    r = n.continuousParameterGroupId,
                    i = n.reverse,
                    o = ut(),
                    a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, e.dispatch((0, _.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, X, {
            types: it,
            handler: function(t) {
                var e = t.element,
                    n = t.store,
                    r = t.eventConfig,
                    i = t.eventStateKey,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    },
                    a = ut(),
                    u = a.scrollLeft,
                    c = a.scrollTop,
                    s = a.scrollWidth,
                    f = a.scrollHeight,
                    l = a.clientHeight,
                    d = r.basedOn,
                    p = r.selectedAxis,
                    v = r.continuousParameterGroupId,
                    E = r.startsEntering,
                    g = r.startsExiting,
                    y = r.addEndOffset,
                    m = r.addStartOffset,
                    I = r.addOffsetValue,
                    T = void 0 === I ? 0 : I,
                    O = r.endOffsetValue,
                    b = void 0 === O ? 0 : O,
                    A = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) {
                    var w = A ? u / s : c / f;
                    return w !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(v, w)), {
                        scrollPercent: w
                    }
                }
                var S = K(i, v),
                    R = e.getBoundingClientRect(),
                    N = (m ? T : 0) / 100,
                    x = (y ? b : 0) / 100;
                N = E ? N : 1 - N, x = g ? x : 1 - x;
                var C = R.top + Math.min(R.height * N, l),
                    L = R.top + R.height * x - C,
                    D = Math.min(l + L, f),
                    P = Math.min(Math.max(0, l - C), D) / D;
                return P !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(S, P)), {
                    scrollPercent: P
                }
            }
        }), (0, o.default)(r, j, Et), (0, o.default)(r, F, Et), (0, o.default)(r, M, (0, l.default)({}, ot, {
            handler: dt(function(t, e) {
                e.scrollingDown && tt(t)
            })
        })), (0, o.default)(r, G, (0, l.default)({}, ot, {
            handler: dt(function(t, e) {
                e.scrollingDown || tt(t)
            })
        })), (0, o.default)(r, k, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function(t) {
                return function(e, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || t(e), r
                }
            }(tt))
        }), (0, o.default)(r, W, {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: et(q, function(t) {
                return function(e, n) {
                    return n || t(e), {
                        started: !0
                    }
                }
            }(tt))
        }), r);
    e.default = _t
}, function(t, e, n) {
    var r = n(293)();
    t.exports = r
}, function(t, e, n) {
    var r = n(61),
        i = n(294),
        o = n(118),
        a = n(119),
        u = n(1),
        c = n(307),
        s = "Expected a function",
        f = 8,
        l = 32,
        d = 128,
        p = 256;
    t.exports = function(t) {
        return i(function(e) {
            var n = e.length,
                i = n,
                v = r.prototype.thru;
            for (t && e.reverse(); i--;) {
                var h = e[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
            }
            for (i = E ? i : n; ++i < n;) {
                h = e[i];
                var _ = a(h),
                    g = "wrapper" == _ ? o(h) : void 0;
                E = g && c(g[0]) && g[1] == (d | f | l | p) && !g[4].length && 1 == g[9] ? E[a(g[0])].apply(E, g[3]) : 1 == h.length && c(h) ? E[_]() : E.thru(h)
            }
            return function() {
                var t = arguments,
                    r = t[0];
                if (E && 1 == t.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;) o = e[i].call(this, o);
                return o
            }
        })
    }
}, function(t, e, n) {
    var r = n(295),
        i = n(298),
        o = n(300);
    t.exports = function(t) {
        return o(i(t, void 0, r), t + "")
    }
}, function(t, e, n) {
    var r = n(296);
    t.exports = function(t) {
        return null != t && t.length ? r(t, 1) : []
    }
}, function(t, e, n) {
    var r = n(47),
        i = n(297);
    t.exports = function t(e, n, o, a, u) {
        var c = -1,
            s = e.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var f = e[c];
            n > 0 && o(f) ? n > 1 ? t(f, n - 1, o, a, u) : r(u, f) : a || (u[u.length] = f)
        }
        return u
    }
}, function(t, e, n) {
    var r = n(19),
        i = n(33),
        o = n(1),
        a = r ? r.isConcatSpreadable : void 0;
    t.exports = function(t) {
        return o(t) || i(t) || !!(a && t && t[a])
    }
}, function(t, e, n) {
    var r = n(299),
        i = Math.max;
    t.exports = function(t, e, n) {
        return e = i(void 0 === e ? t.length - 1 : e, 0),
            function() {
                for (var o = arguments, a = -1, u = i(o.length - e, 0), c = Array(u); ++a < u;) c[a] = o[e + a];
                a = -1;
                for (var s = Array(e + 1); ++a < e;) s[a] = o[a];
                return s[e] = n(c), r(t, this, s)
            }
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        switch (n.length) {
            case 0:
                return t.call(e);
            case 1:
                return t.call(e, n[0]);
            case 2:
                return t.call(e, n[0], n[1]);
            case 3:
                return t.call(e, n[0], n[1], n[2])
        }
        return t.apply(e, n)
    }
}, function(t, e, n) {
    var r = n(301),
        i = n(303)(r);
    t.exports = i
}, function(t, e, n) {
    var r = n(302),
        i = n(116),
        o = n(58),
        a = i ? function(t, e) {
            return i(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value: r(e),
                writable: !0
            })
        } : o;
    t.exports = a
}, function(t, e) {
    t.exports = function(t) {
        return function() {
            return t
        }
    }
}, function(t, e) {
    var n = 800,
        r = 16,
        i = Date.now;
    t.exports = function(t) {
        var e = 0,
            o = 0;
        return function() {
            var a = i(),
                u = r - (a - o);
            if (o = a, u > 0) {
                if (++e >= n) return arguments[0]
            } else e = 0;
            return t.apply(void 0, arguments)
        }
    }
}, function(t, e, n) {
    var r = n(99),
        i = r && new r;
    t.exports = i
}, function(t, e) {
    t.exports = function() {}
}, function(t, e) {
    t.exports = {}
}, function(t, e, n) {
    var r = n(63),
        i = n(118),
        o = n(119),
        a = n(308);
    t.exports = function(t) {
        var e = o(t),
            n = a[e];
        if ("function" != typeof n || !(e in r.prototype)) return !1;
        if (t === n) return !0;
        var u = i(n);
        return !!u && t === u[0]
    }
}, function(t, e, n) {
    var r = n(63),
        i = n(61),
        o = n(62),
        a = n(1),
        u = n(9),
        c = n(309),
        s = Object.prototype.hasOwnProperty;

    function f(t) {
        if (u(t) && !a(t) && !(t instanceof r)) {
            if (t instanceof i) return t;
            if (s.call(t, "__wrapped__")) return c(t)
        }
        return new i(t)
    }
    f.prototype = o.prototype, f.prototype.constructor = f, t.exports = f
}, function(t, e, n) {
    var r = n(63),
        i = n(61),
        o = n(310);
    t.exports = function(t) {
        if (t instanceof r) return t.clone();
        var e = new i(t.__wrapped__, t.__chain__);
        return e.__actions__ = o(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = -1,
            r = t.length;
        for (e || (e = Array(r)); ++n < r;) e[n] = t[n];
        return e
    }
}, function(t, e, n) {
    var r = n(312),
        i = n(59);
    t.exports = function(t, e, n) {
        return void 0 === n && (n = e, e = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== e && (e = (e = i(e)) == e ? e : 0), r(i(t), e, n)
    }
}, function(t, e) {
    t.exports = function(t, e, n) {
        return t == t && (void 0 !== n && (t = t <= n ? t : n), void 0 !== e && (t = t >= e ? t : e)), t
    }
}, function(t, e, n) {
    "use strict";
    var r = n(6);
    r.define("links", t.exports = function(t, e) {
        var n, i, o, a = {},
            u = t(window),
            c = r.env(),
            s = window.location,
            f = document.createElement("a"),
            l = "w--current",
            d = /index\.(html|php)$/,
            p = /\/$/;

        function v(e) {
            var r = n && e.getAttribute("href-disabled") || e.getAttribute("href");
            if (f.href = r, !(r.indexOf(":") >= 0)) {
                var a = t(e);
                if (f.hash.length > 1 && f.host + f.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(f.hash)) return;
                    var u = t(f.hash);
                    u.length && i.push({
                        link: a,
                        sec: u,
                        active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = f.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, l, c)
                }
            }
        }

        function h() {
            var t = u.scrollTop(),
                n = u.height();
            e.each(i, function(e) {
                var r = e.link,
                    i = e.sec,
                    o = i.offset().top,
                    a = i.outerHeight(),
                    u = .5 * n,
                    c = i.is(":visible") && o + a - u >= t && o + u <= t + n;
                e.active !== c && (e.active = c, E(r, l, c))
            })
        }

        function E(t, e, n) {
            var r = t.hasClass(e);
            n && r || (n || r) && (n ? t.addClass(e) : t.removeClass(e))
        }
        return a.ready = a.design = a.preview = function() {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var t = document.links, e = 0; e < t.length; ++e) v(t[e]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function(t, e, n) {
    "use strict";
    var r = n(6);
    r.define("scroll", t.exports = function(t) {
        var e, n = {
                WF_CHANGE: "change.wf-change",
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            },
            i = t(document),
            o = window,
            a = o.location,
            u = function() {
                try {
                    return Boolean(o.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : o.history,
            c = /^[a-zA-Z0-9][\w:.-]*$/,
            s = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + s + ")";

        function l(n) {
            if (!(r.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link"))) {
                var i = this.href.split("#"),
                    s = i[0] === e ? i[1] : null;
                s && function(e, n) {
                    if (!c.test(e)) return;
                    var i = t("#" + e);
                    if (!i.length) return;
                    n && (n.preventDefault(), n.stopPropagation());
                    if (a.hash !== e && u && u.pushState && (!r.env.chrome || "file:" !== a.protocol)) {
                        var s = u.state && u.state.hash;
                        s !== e && u.pushState({
                            hash: e
                        }, "", "#" + e)
                    }
                    var f = r.env("editor") ? ".w-editor-body" : "body",
                        l = t("header, " + f + " > .header, " + f + " > .w-nav:not([data-no-scroll])"),
                        d = "fixed" === l.css("position") ? l.outerHeight() : 0;
                    o.setTimeout(function() {
                        ! function(e, n) {
                            var r = t(o).scrollTop(),
                                i = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(o).height() - n,
                                    u = e.outerHeight();
                                u < a && (i -= Math.round((a - u) / 2))
                            }
                            var c = 1;
                            t("body").add(e).each(function() {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (c = e)
                            }), Date.now || (Date.now = function() {
                                return (new Date).getTime()
                            });
                            var s = Date.now(),
                                f = o.requestAnimationFrame || o.mozRequestAnimationFrame || o.webkitRequestAnimationFrame || function(t) {
                                    o.setTimeout(t, 15)
                                },
                                l = (472.143 * Math.log(Math.abs(r - i) + 125) - 2e3) * c;
                            ! function t() {
                                var e = Date.now() - s;
                                o.scroll(0, function(t, e, n, r) {
                                    if (n > r) return e;
                                    return t + (e - t) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, i, e, l)), e <= l && f(t)
                            }()
                        }(i, d)
                    }, n ? 0 : 300)
                }(s, n)
            }
        }
        return {
            ready: function() {
                n.WF_CHANGE;
                var t = n.WF_CLICK_EMPTY,
                    r = n.WF_CLICK_SCROLL;
                e = a.href.split("#")[0], i.on(r, f, l), i.on(t, s, function(t) {
                    t.preventDefault()
                })
            }
        }
    })
}, function(t, e, n) {
    "use strict";
    n(6).define("touch", t.exports = function(t) {
        var e = {},
            n = window.getSelection;

        function r(e) {
            var r, i, o = !1,
                a = !1,
                u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(t) {
                var e = t.touches;
                e && e.length > 1 || (o = !0, e ? (a = !0, r = e[0].clientX) : r = t.clientX, i = r)
            }

            function s(e) {
                if (o) {
                    if (a && "mousemove" === e.type) return e.preventDefault(), void e.stopPropagation();
                    var r = e.touches,
                        c = r ? r[0].clientX : e.clientX,
                        s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function(e, n, r) {
                        var i = t.Event(e, {
                            originalEvent: n
                        });
                        t(n.target).trigger(i, r)
                    }("swipe", e, {
                        direction: s > 0 ? "right" : "left"
                    }), l())
                }
            }

            function f(t) {
                if (o) return o = !1, a && "mouseup" === t.type ? (t.preventDefault(), t.stopPropagation(), void(a = !1)) : void 0
            }

            function l() {
                o = !1
            }
            e.addEventListener("touchstart", c, !1), e.addEventListener("touchmove", s, !1), e.addEventListener("touchend", f, !1), e.addEventListener("touchcancel", l, !1), e.addEventListener("mousedown", c, !1), e.addEventListener("mousemove", s, !1), e.addEventListener("mouseup", f, !1), e.addEventListener("mouseout", l, !1), this.destroy = function() {
                e.removeEventListener("touchstart", c, !1), e.removeEventListener("touchmove", s, !1), e.removeEventListener("touchend", f, !1), e.removeEventListener("touchcancel", l, !1), e.removeEventListener("mousedown", c, !1), e.removeEventListener("mousemove", s, !1), e.removeEventListener("mouseup", f, !1), e.removeEventListener("mouseout", l, !1), e = null
            }
        }
        return t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }, e.init = function(e) {
            return (e = "string" == typeof e ? t(e).get(0) : e) ? new r(e) : null
        }, e.instance = e.init(document), e
    })
}, function(t, e, n) {
    "use strict";
    var r = n(0)(n(317)),
        i = n(6);
    i.define("forms", t.exports = function(t, e) {
        var n, o, a, u, c, s = {},
            f = t(document),
            l = window.location,
            d = window.XDomainRequest && !window.atob,
            p = ".w-form",
            v = /e(-)?mail/i,
            h = /^\S+@\S+$/,
            E = window.alert,
            _ = i.env(),
            g = /list-manage[1-9]?.com/i,
            y = e.debounce(function() {
                E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function m(e, n) {
            var r = t(n),
                i = t.data(n, p);
            i || (i = t.data(n, p, {
                form: r
            })), I(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function(e) {
                ! function(e, n) {
                    if (!n.fileUploads || !n.fileUploads[e]) return;
                    var r, i = t(n.fileUploads[e]),
                        o = i.find("> .w-file-upload-default"),
                        a = i.find("> .w-file-upload-uploading"),
                        u = i.find("> .w-file-upload-success"),
                        s = i.find("> .w-file-upload-error"),
                        f = o.find(".w-file-upload-input"),
                        l = o.find(".w-file-upload-label"),
                        d = l.children(),
                        p = s.find(".w-file-upload-error-msg"),
                        v = u.find(".w-file-upload-file"),
                        h = u.find(".w-file-remove-link"),
                        E = v.find(".w-file-upload-file-name"),
                        g = p.attr("data-w-size-error"),
                        y = p.attr("data-w-type-error"),
                        m = p.attr("data-w-generic-error");
                    if (_) f.on("click", function(t) {
                        t.preventDefault()
                    }), l.on("click", function(t) {
                        t.preventDefault()
                    }), d.on("click", function(t) {
                        t.preventDefault()
                    });
                    else {
                        h.on("click", function() {
                            f.removeAttr("data-value"), f.val(""), E(""), o.toggle(!0), u.toggle(!1)
                        }), f.on("change", function(i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[e].uploading = !0, function(e, n) {
                                var r = {
                                    name: e.name,
                                    size: e.size
                                };
                                t.ajax({
                                    type: "POST",
                                    url: c,
                                    data: r,
                                    dataType: "json",
                                    crossDomain: !0
                                }).done(function(t) {
                                    n(null, t)
                                }).fail(function(t) {
                                    n(t)
                                })
                            }(r, A))
                        });
                        var O = l.outerHeight();
                        f.height(O), f.width(1)
                    }

                    function b(t) {
                        var r = t.responseJSON && t.responseJSON.msg,
                            i = m;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = y : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = g), p.text(i), f.removeAttr("data-value"), f.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function A(e, n) {
                        if (e) return b(e);
                        var i = n.fileName,
                            o = n.postData,
                            a = n.fileId,
                            u = n.s3Url;
                        f.attr("data-value", a),
                            function(e, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), t.ajax({
                                    type: "POST",
                                    url: e,
                                    data: a,
                                    processData: !1,
                                    contentType: !1
                                }).done(function() {
                                    o(null)
                                }).fail(function(t) {
                                    o(t)
                                })
                            }(u, o, r, i, w)
                    }

                    function w(t) {
                        if (t) return b(t);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[e].uploading = !1, S() || I(n)
                    }

                    function S() {
                        var t = n.fileUploads && n.fileUploads.toArray() || [];
                        return t.some(function(t) {
                            return t.uploading
                        })
                    }
                }(e, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), g.test(u) ? i.handler = A : u || (o ? i.handler = b : y())
        }

        function I(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function T(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function O(e, n) {
            var r = null;
            return n = n || {}, e.find(':input:not([type="submit"]):not([type="file"])').each(function(i, o) {
                var a = t(o),
                    u = a.attr("type"),
                    c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1),
                    s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = t.trim(s)), n[c] = s, r = r || function(t, e, n, r) {
                    var i = null;
                    "password" === e ? i = "Passwords cannot be submitted." : t.attr("required") ? r ? v.test(t.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }

        function b(e) {
            I(e);
            var n = e.form,
                r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: l.href,
                    test: i.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n())
                };
            S(e);
            var a = O(n, r.fields);
            if (a) return E(a);
            r.fileUploads = function(e) {
                var n = {};
                return e.find(':input[type="file"]').each(function(e, r) {
                    var i = t(r),
                        o = i.attr("data-name") || i.attr("name") || "File " + (e + 1),
                        a = i.attr("data-value");
                    "string" == typeof a && (a = t.trim(a)), n[o] = a
                }), n
            }(n), T(e), o ? t.ajax({
                url: u,
                type: "POST",
                data: r,
                dataType: "json",
                crossDomain: !0
            }).done(function(t) {
                t && 200 === t.code && (e.success = !0), w(e)
            }).fail(function() {
                w(e)
            }) : w(e)
        }

        function A(n) {
            I(n);
            var r = n.form,
                i = {};
            if (!/^https/.test(l.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = O(r, i);
                if (a) return E(a);
                T(n), e.each(i, function(t, e) {
                    v.test(e) && (i.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (o = t), /^(first[ _-]?name)$/i.test(e) && (i.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (i.LNAME = t)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?",
                    c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", t.ajax({
                    url: u,
                    data: i,
                    dataType: "jsonp"
                }).done(function(t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), w(n)
                }).fail(function() {
                    w(n)
                })
            } else r.attr("method", "post")
        }

        function w(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), I(t))
        }

        function S(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        return s.ready = s.design = s.preview = function() {
            ! function() {
                o = t("html").attr("data-wf-site"), u = "" + o, d && u.indexOf("https://mastersubhajit.com") >= 0 && (u = u.replace("https://mastersubhajit.com", "http://mastersubhajit.com"));
                if (c = "".concat(u, "/signFile"), !(n = t(p + " form")).length) return;
                n.each(m)
            }(), _ || a || function() {
                a = !0, f.on("submit", p + " form", function(e) {
                    var n = t.data(this, p);
                    n.handler && (n.evt = e, n.handler(n))
                });
                var e = [
                    ["checkbox", ".w-checkbox-input"],
                    ["radio", ".w-radio-input"]
                ];
                f.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function(e) {
                    t(e.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), f.on("change", p + ' form input[type="radio"]', function(e) {
                    t('input[name="'.concat(e.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function(e, n) {
                        return t(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = t(e.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), e.forEach(function(e) {
                    var n = (0, r.default)(e, 2),
                        i = n[0],
                        o = n[1];
                    f.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).addClass("w--redirected-focus")
                    }), f.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function(e) {
                        t(e.target).siblings(o).removeClass("w--redirected-focus")
                    })
                })
            }()
        }, s
    })
}, function(t, e, n) {
    var r = n(318),
        i = n(319),
        o = n(320);
    t.exports = function(t, e) {
        return r(t) || i(t, e) || o()
    }
}, function(t, e) {
    t.exports = function(t) {
        if (Array.isArray(t)) return t
    }
}, function(t, e) {
    t.exports = function(t, e) {
        var n = [],
            r = !0,
            i = !1,
            o = void 0;
        try {
            for (var a, u = t[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
        } catch (t) {
            i = !0, o = t
        } finally {
            try {
                r || null == u.return || u.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}, function(t, e) {
    t.exports = function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function(t, e, n) {
    "use strict";
    var r = n(6),
        i = n(65),
        o = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
    r.define("navbar", t.exports = function(t, e) {
        var n, a, u, c, s = {},
            f = t.tram,
            l = t(window),
            d = t(document),
            p = e.debounce,
            v = r.env(),
            h = '<div class="w-nav-overlay" data-wf-ignore />',
            E = ".w-nav",
            _ = "w--open",
            g = "w--nav-dropdown-open",
            y = "w--nav-dropdown-toggle-open",
            m = "w--nav-dropdown-list-open",
            I = "w--nav-link-open",
            T = i.triggers,
            O = t();

        function b() {
            r.resize.off(A)
        }

        function A() {
            a.each(M)
        }

        function w(n, r) {
            var i = t(r),
                a = t.data(r, E);
            a || (a = t.data(r, E, {
                open: !1,
                el: i,
                config: {},
                selectedIdx: -1
            })), a.menu = i.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.dropdownToggle = a.menu.find(".w-dropdown-toggle"), a.dropdownList = a.menu.find(".w-dropdown-list"), a.button = i.find(".w-nav-button"), a.container = i.find(".w-container"), a.overlayContainerId = "w-nav-overlay-" + n, a.outside = function(e) {
                e.outside && d.off("click" + E, e.outside);
                return function(n) {
                    var r = t(n.target);
                    c && r.closest(".w-editor-bem-EditorOverlay").length || P(e, r)
                }
            }(a);
            var s = i.find(".w-nav-brand");
            s && "/" === s.attr("href") && null == s.attr("aria-label") && s.attr("aria-label", "home"), a.button.attr("style", "-webkit-user-select: text;"), null == a.button.attr("aria-label") && a.button.attr("aria-label", "menu"), a.button.attr("role", "button"), a.button.attr("tabindex", "0"), a.button.attr("aria-controls", a.overlayContainerId), a.button.attr("aria-haspopup", "menu"), a.button.attr("aria-expanded", "false"), a.el.off(E), a.button.off(E), a.menu.off(E), N(a), u ? (R(a), a.el.on("setting" + E, function(t) {
                return function(n, r) {
                    r = r || {};
                    var i = l.width();
                    N(t), !0 === r.open && X(t, !0), !1 === r.open && V(t, !0), t.open && e.defer(function() {
                        i !== l.width() && C(t)
                    })
                }
            }(a))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(h).appendTo(e.el), e.overlay.attr("id", e.overlayContainerId), e.parent = e.menu.parent(), V(e, !0)
            }(a), a.button.on("click" + E, L(a)), a.menu.on("click" + E, "a", D(a)), a.button.on("keydown" + E, function(t) {
                return function(e) {
                    switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                            return L(t)(), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                            return t.open ? (e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, x(t), e.preventDefault(), e.stopPropagation()) : (e.preventDefault(), e.stopPropagation())
                    }
                }
            }(a)), a.el.on("keydown" + E, function(t) {
                return function(e) {
                    if (t.open) switch (t.selectedIdx = t.links.index(document.activeElement), e.keyCode) {
                        case o.HOME:
                        case o.END:
                            return e.keyCode === o.END ? t.selectedIdx = t.links.length - 1 : t.selectedIdx = 0, x(t), e.preventDefault(), e.stopPropagation();
                        case o.ESCAPE:
                            return V(t), t.button.focus(), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_LEFT:
                        case o.ARROW_UP:
                            return t.selectedIdx = Math.max(-1, t.selectedIdx - 1), x(t), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                            return t.selectedIdx = Math.min(t.links.length - 1, t.selectedIdx + 1), x(t), e.preventDefault(), e.stopPropagation()
                    }
                }
            }(a))), M(n, r)
        }

        function S(e, n) {
            var r = t.data(n, E);
            r && (R(r), t.removeData(n, E))
        }

        function R(t) {
            t.overlay && (V(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function N(t) {
            var n = {},
                r = t.config || {},
                i = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && t.open && e.defer(C, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function x(t) {
            if (t.links[t.selectedIdx]) {
                var e = t.links[t.selectedIdx];
                e.focus(), D(e)
            }
        }

        function C(t) {
            t.open && (V(t, !0), X(t, !0))
        }

        function L(t) {
            return p(function() {
                t.open ? V(t) : X(t)
            })
        }

        function D(e) {
            return function(n) {
                var i = t(this).attr("href");
                r.validClick(n.currentTarget) ? i && 0 === i.indexOf("#") && e.open && V(e) : n.preventDefault()
            }
        }
        s.ready = s.design = s.preview = function() {
            if (u = v && r.env("design"), c = r.env("editor"), n = t(document.body), !(a = d.find(E)).length) return;
            a.each(w), b(), r.resize.on(A)
        }, s.destroy = function() {
            O = t(), b(), a && a.length && a.each(S)
        };
        var P = p(function(t, e) {
            if (t.open) {
                var n = e.closest(".w-nav-menu");
                t.menu.is(n) || V(t)
            }
        });

        function M(e, n) {
            var r = t.data(n, E),
                i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || u || V(r, !0), r.container.length) {
                var o = function(e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function(e, r) {
                        (r = t(r)).css(j, ""), "none" === r.css(j) && r.css(j, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && k(r)
        }
        var j = "max-width";

        function F(t, e) {
            e.setAttribute("data-nav-menu-open", "")
        }

        function G(t, e) {
            e.removeAttribute("data-nav-menu-open")
        }

        function X(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.each(F), t.links.addClass(I), t.dropdowns.addClass(g), t.dropdownToggle.addClass(y), t.dropdownList.addClass(m), t.button.addClass(_);
                var n = t.config;
                "none" !== n.animation && f.support.transform || (e = !0);
                var i = k(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    c = t.el.height(),
                    s = t.el[0];
                if (M(0, s), T.intro(0, s), r.redraw.up(), u || d.on("click" + E, t.outside), e) v();
                else {
                    var l = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (O = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return f(t.menu).add(l).set({
                        x: n.animDirect * a,
                        height: i
                    }).start({
                        x: 0
                    }).then(v), void(t.overlay && t.overlay.width(a));
                    var p = c + o;
                    f(t.menu).add(l).set({
                        y: -p
                    }).start({
                        y: 0
                    }).then(v)
                }
            }

            function v() {
                t.button.attr("aria-expanded", "true")
            }
        }

        function k(t) {
            var e = t.config,
                r = e.docHeight ? d.height() : n.height();
            return e.animOver ? t.menu.height(r) : "fixed" !== t.el.css("position") && (r -= t.el.outerHeight(!0)), t.overlay && t.overlay.height(r), r
        }

        function V(t, e) {
            if (t.open) {
                t.open = !1, t.button.removeClass(_);
                var n = t.config;
                if (("none" === n.animation || !f.support.transform || n.duration <= 0) && (e = !0), T.outro(0, t.el[0]), d.off("click" + E, t.outside), e) return f(t.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2,
                    i = t.menu.outerHeight(!0),
                    o = t.menu.outerWidth(!0),
                    a = t.el.height();
                if (n.animOver) f(t.menu).add(r).start({
                    x: o * n.animDirect
                }).then(c);
                else {
                    var u = a + i;
                    f(t.menu).add(r).start({
                        y: -u
                    }).then(c)
                }
            }

            function c() {
                t.menu.height(""), f(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.each(G), t.links.removeClass(I), t.dropdowns.removeClass(g), t.dropdownToggle.removeClass(y), t.dropdownList.removeClass(m), t.overlay && t.overlay.children().length && (O.length ? t.menu.insertAfter(O) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close"), t.button.attr("aria-expanded", "false")
            }
        }
        return s
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|c50d35a4-afc5-52b4-4df2-051165d5d057"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|c50d35a4-afc5-52b4-4df2-051165d5d057"
            }],
            "config": [{
                "continuousParameterGroupId": "a-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1597515087183
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597656969683
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597656969684
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link",
                "originalId": "5f3558801756d764cbdb8de7|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link",
                "originalId": "5f3558801756d764cbdb8de7|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597668426206
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".link",
                "originalId": "5f3558801756d764cbdb8de7|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".link",
                "originalId": "5f3558801756d764cbdb8de7|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597668426207
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-7"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597678890411
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597678890411
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597680032439
        },
        "e-9": {
            "id": "e-9",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-8"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597680032440
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".project-item",
                "originalId": "5f3558801756d764cbdb8de7|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item",
                "originalId": "5f3558801756d764cbdb8de7|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597685480525
        },
        "e-11": {
            "id": "e-11",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-10"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".project-item",
                "originalId": "5f3558801756d764cbdb8de7|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item",
                "originalId": "5f3558801756d764cbdb8de7|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597685480526
        },
        "e-13": {
            "id": "e-13",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1597686655667
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav-link",
                "originalId": "5f3558801756d764cbdb8de7|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "5f3558801756d764cbdb8de7|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597740634437
        },
        "e-15": {
            "id": "e-15",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-14"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".nav-link",
                "originalId": "5f3558801756d764cbdb8de7|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".nav-link",
                "originalId": "5f3558801756d764cbdb8de7|bed729f5-ef26-ecb5-ce96-7096039fcd12",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1597740634438
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-14",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|8e103ee9-dbec-87b8-ceb4-7c4e59637dd4"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|8e103ee9-dbec-87b8-ceb4-7c4e59637dd4"
            }],
            "config": [{
                "continuousParameterGroupId": "a-14-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1597744160521
        },
        "e-17": {
            "id": "e-17",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1597765384390
        },
        "e-21": {
            "id": "e-21",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-22"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598264119792
        },
        "e-22": {
            "id": "e-22",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-21"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598264119792
        },
        "e-23": {
            "id": "e-23",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-24"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598264119792
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-23"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598264119792
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598264119792
        },
        "e-27": {
            "id": "e-27",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598264119792
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".project-item-style-2",
                "originalId": "5f439337f224418b7fac52f2|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item-style-2",
                "originalId": "5f439337f224418b7fac52f2|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598280168150
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".project-item-style-2",
                "originalId": "5f439337f224418b7fac52f2|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item-style-2",
                "originalId": "5f439337f224418b7fac52f2|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598280168151
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2|2797be1f-952f-d3cc-cf52-5041c8f40593"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f439337f224418b7fac52f2|2797be1f-952f-d3cc-cf52-5041c8f40593"
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598452100959
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598455409812
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598455409812
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598455409812
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598455409812
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598455409812
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598455409812
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|2797be1f-952f-d3cc-cf52-5041c8f40593"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|2797be1f-952f-d3cc-cf52-5041c8f40593"
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598455409812
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|31c49487-4e57-7e5e-712b-c700c5df09b6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|31c49487-4e57-7e5e-712b-c700c5df09b6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598458003509
        },
        "e-43": {
            "id": "e-43",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-42"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|31c49487-4e57-7e5e-712b-c700c5df09b6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|31c49487-4e57-7e5e-712b-c700c5df09b6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598458003511
        },
        "e-44": {
            "id": "e-44",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".skill-panel",
                "originalId": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".skill-panel",
                "originalId": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-22-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598535640219
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb"
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-35-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598625061549
        },
        "e-48": {
            "id": "e-48",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-49"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".instagram-content",
                "originalId": "5f467e7182910d0f55559cfb|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".instagram-content",
                "originalId": "5f467e7182910d0f55559cfb|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598625875340
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".instagram-content",
                "originalId": "5f467e7182910d0f55559cfb|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".instagram-content",
                "originalId": "5f467e7182910d0f55559cfb|711125c6-74f5-7e63-b2e6-ee52c41f8f45",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598625875342
        },
        "e-52": {
            "id": "e-52",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-53"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598881389717
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598881389720
        },
        "e-54": {
            "id": "e-54",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-55"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598881971485
        },
        "e-56": {
            "id": "e-56",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598883525798
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598883763781
        },
        "e-58": {
            "id": "e-58",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-57"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598883763821
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598883783806
        },
        "e-60": {
            "id": "e-60",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-59"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598883783845
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598884005050
        },
        "e-62": {
            "id": "e-62",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-61"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598884005089
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-64"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598884023534
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-63"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598884023574
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": [{
                "continuousParameterGroupId": "a-31-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598886805608
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-67"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598886914390
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598888846062
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-72"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598888859123
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598888859126
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4cec8753ac662454d856bd"
            }],
            "config": [{
                "continuousParameterGroupId": "a-31-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598889647646
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f|38ddf452-1dab-1994-6468-3ddbc4107f3b"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f|38ddf452-1dab-1994-6468-3ddbc4107f3b"
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598955328923
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-76"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598955482641
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-75"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598955482645
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598955496332
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598955506178
        },
        "e-79": {
            "id": "e-79",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-80"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598955535283
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd3955c02969871ba06f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598955535286
        },
        "e-81": {
            "id": "e-81",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-82"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968441662
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-81"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968441662
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968441662
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968441662
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598968441662
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598968441662
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598968441662
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f|2797be1f-952f-d3cc-cf52-5041c8f40593"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f|2797be1f-952f-d3cc-cf52-5041c8f40593"
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598968441662
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-90"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f|31c49487-4e57-7e5e-712b-c700c5df09b6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f|31c49487-4e57-7e5e-712b-c700c5df09b6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968441662
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f|31c49487-4e57-7e5e-712b-c700c5df09b6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5279e691179b9f16eb7f|31c49487-4e57-7e5e-712b-c700c5df09b6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968441662
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".post-item",
                "originalId": "5f4e5279e691179b9f16eb7f|26d29e72-2966-c052-f3fb-cf221fb4942f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".post-item",
                "originalId": "5f4e5279e691179b9f16eb7f|26d29e72-2966-c052-f3fb-cf221fb4942f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968970419
        },
        "e-97": {
            "id": "e-97",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-96"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".post-item",
                "originalId": "5f4e5279e691179b9f16eb7f|26d29e72-2966-c052-f3fb-cf221fb4942f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".post-item",
                "originalId": "5f4e5279e691179b9f16eb7f|26d29e72-2966-c052-f3fb-cf221fb4942f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598968970423
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598971007657
        },
        "e-99": {
            "id": "e-99",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-98"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598971007657
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598971007657
        },
        "e-101": {
            "id": "e-101",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-100"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598971007657
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598971007657
        },
        "e-103": {
            "id": "e-103",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598971007657
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598971007657
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-18",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127|2797be1f-952f-d3cc-cf52-5041c8f40593"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127|2797be1f-952f-d3cc-cf52-5041c8f40593"
            }],
            "config": [{
                "continuousParameterGroupId": "a-18-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1598971007657
        },
        "e-106": {
            "id": "e-106",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-107"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127|31c49487-4e57-7e5e-712b-c700c5df09b6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127|31c49487-4e57-7e5e-712b-c700c5df09b6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598971007657
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127|31c49487-4e57-7e5e-712b-c700c5df09b6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f4e5c7ff5d4d9524b66b127|31c49487-4e57-7e5e-712b-c700c5df09b6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1598971007657
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1598976591801
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": [{
                "continuousParameterGroupId": "a-11-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-11-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1599036517127
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-114"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599137994392
        },
        "e-114": {
            "id": "e-114",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599137994392
        },
        "e-115": {
            "id": "e-115",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599137994392
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_OUT_OF_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-115"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae62"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 20,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599137994392
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".insta-content",
                "originalId": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae73",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".insta-content",
                "originalId": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae73",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599140872410
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".insta-content",
                "originalId": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae73",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".insta-content",
                "originalId": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae73",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599140872413
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "selector": ".insta-content",
                "originalId": "5f467e7182910d0f55559cfb|50b51607-829b-abb6-529d-5019aeef85c4",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".insta-content",
                "originalId": "5f467e7182910d0f55559cfb|50b51607-829b-abb6-529d-5019aeef85c4",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-36-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1599140940406
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae64"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|418bb44c-4439-0238-84f8-29dd865eae64"
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-36-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1599141290629
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490129447
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|97e1075d-3ddc-15d0-3372-a59bb1b7d8c1"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490229209
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|7d427232-de51-e8f3-9d9d-325373d6b98f"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|7d427232-de51-e8f3-9d9d-325373d6b98f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490246790
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|4ec821fc-24b1-ae8c-c6b8-790c1a67a126"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|4ec821fc-24b1-ae8c-c6b8-790c1a67a126"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490253968
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|6ad28240-6bff-758d-a485-38de4274e965"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|6ad28240-6bff-758d-a485-38de4274e965"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490267559
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|e74ed22c-3155-00fa-e7e3-df8b5875d506"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f3558801756d764cbdb8de7|e74ed22c-3155-00fa-e7e3-df8b5875d506"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490295280
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f626e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f626e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490406484
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6275"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6275"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490415776
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6278"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6278"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490422627
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f627d"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f627d"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490430603
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6282"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6282"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490437366
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-163"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6285"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6285"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490455569
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f628d"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f628d"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490463556
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-167"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6295"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6295"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490469905
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-169"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f628a"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f628a"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490476201
        },
        "e-170": {
            "id": "e-170",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-171"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6292"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f6292"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490482367
        },
        "e-172": {
            "id": "e-172",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-173"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f629a"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "de92693f-5cd7-2490-e574-5df6f86f629a"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490490577
        },
        "e-174": {
            "id": "e-174",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-175"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbbb"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbbb"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490502778
        },
        "e-176": {
            "id": "e-176",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-177"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490512530
        },
        "e-178": {
            "id": "e-178",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-179"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbc3"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbc3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490519743
        },
        "e-180": {
            "id": "e-180",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-181"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbc9"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbc9"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490529929
        },
        "e-184": {
            "id": "e-184",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-185"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbd4"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbd4"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490557747
        },
        "e-186": {
            "id": "e-186",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-187"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbd9"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbd9"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490579242
        },
        "e-190": {
            "id": "e-190",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-191"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbde"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "99bc6bd0-837d-9882-425d-1889465cdbde"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490597157
        },
        "e-192": {
            "id": "e-192",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-193"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "4e61a589-7fc2-d56d-ad8f-4913fbd96017"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "4e61a589-7fc2-d56d-ad8f-4913fbd96017"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490614257
        },
        "e-194": {
            "id": "e-194",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-195"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "4e61a589-7fc2-d56d-ad8f-4913fbd96019"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490620898
        },
        "e-200": {
            "id": "e-200",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-201"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "79f85f44-a7c8-ff86-bd73-edb7dc8ebfc8"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "79f85f44-a7c8-ff86-bd73-edb7dc8ebfc8"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490760016
        },
        "e-202": {
            "id": "e-202",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "79f85f44-a7c8-ff86-bd73-edb7dc8ebfcb"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "79f85f44-a7c8-ff86-bd73-edb7dc8ebfcb"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490767833
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033ef"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033ef"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490776330
        },
        "e-206": {
            "id": "e-206",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-207"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033f3"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033f3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490786528
        },
        "e-208": {
            "id": "e-208",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-209"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033f7"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033f7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490794189
        },
        "e-210": {
            "id": "e-210",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-211"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033fd"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d263037033fd"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490804248
        },
        "e-214": {
            "id": "e-214",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-215"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d26303703413"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d26303703413"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490824759
        },
        "e-216": {
            "id": "e-216",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-217"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d26303703418"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d26303703418"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490834076
        },
        "e-218": {
            "id": "e-218",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-219"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d2630370341d"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d2630370341d"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490841760
        },
        "e-222": {
            "id": "e-222",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-223"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|bf21f31c-5b60-a9e6-c0f4-7018620aa09c"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|bf21f31c-5b60-a9e6-c0f4-7018620aa09c"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490866194
        },
        "e-224": {
            "id": "e-224",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-225"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|f0bbd3a8-de51-9c41-1fc9-0937dbc2b442"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|f0bbd3a8-de51-9c41-1fc9-0937dbc2b442"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490872824
        },
        "e-226": {
            "id": "e-226",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-227"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|8c850743-0b07-ee95-edbd-ace5892da8d8"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|8c850743-0b07-ee95-edbd-ace5892da8d8"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490880527
        },
        "e-228": {
            "id": "e-228",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-229"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|f81c9a7c-5611-708c-0994-4d677549c359"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|f81c9a7c-5611-708c-0994-4d677549c359"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490894962
        },
        "e-230": {
            "id": "e-230",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-231"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1ff"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1ff"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490901363
        },
        "e-232": {
            "id": "e-232",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-233"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|155a6be8-f39e-de48-b75a-3960f011414e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|155a6be8-f39e-de48-b75a-3960f011414e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490907405
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-235"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|ae2a9521-3b71-251a-8c46-fc51abc136ef"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|ae2a9521-3b71-251a-8c46-fc51abc136ef"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490912746
        },
        "e-236": {
            "id": "e-236",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-237"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|155a6be8-f39e-de48-b75a-3960f0114149"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|155a6be8-f39e-de48-b75a-3960f0114149"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490919218
        },
        "e-238": {
            "id": "e-238",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-239"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|ae2a9521-3b71-251a-8c46-fc51abc136ea"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f467e7182910d0f55559cfb|ae2a9521-3b71-251a-8c46-fc51abc136ea"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599490925249
        },
        "e-241": {
            "id": "e-241",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-242"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|05953480-8571-f84b-7200-0618e2b06cbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|05953480-8571-f84b-7200-0618e2b06cbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491182824
        },
        "e-242": {
            "id": "e-242",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-241"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|05953480-8571-f84b-7200-0618e2b06cbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|05953480-8571-f84b-7200-0618e2b06cbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491182824
        },
        "e-243": {
            "id": "e-243",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-244"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0421ca99-f121-2ab4-1770-40008572f6a5"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0421ca99-f121-2ab4-1770-40008572f6a5"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491391497
        },
        "e-245": {
            "id": "e-245",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-246"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|b045dbb9-9d76-6475-2822-953f74d62c9f"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|b045dbb9-9d76-6475-2822-953f74d62c9f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491397964
        },
        "e-247": {
            "id": "e-247",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-248"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|c7ede1a4-3a93-24be-f31c-72c67c6d4259"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|c7ede1a4-3a93-24be-f31c-72c67c6d4259"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491414672
        },
        "e-249": {
            "id": "e-249",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-250"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|473fb9b0-5fb0-e163-ca45-79a2de7aa271"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|473fb9b0-5fb0-e163-ca45-79a2de7aa271"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491422930
        },
        "e-251": {
            "id": "e-251",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-252"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|c0163fbc-a79d-6740-c6de-0df5234ba669"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|c0163fbc-a79d-6740-c6de-0df5234ba669"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491428554
        },
        "e-253": {
            "id": "e-253",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-254"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|13f8cb45-605a-f22a-5ec2-0fd31296d88e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|13f8cb45-605a-f22a-5ec2-0fd31296d88e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491436992
        },
        "e-255": {
            "id": "e-255",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-256"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|b835d8c3-d34c-b72a-0f96-72bcbd9980a0"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|b835d8c3-d34c-b72a-0f96-72bcbd9980a0"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491443686
        },
        "e-257": {
            "id": "e-257",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-258"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|5be8af71-e51d-6657-8e2a-ad2ab0d69d43"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|5be8af71-e51d-6657-8e2a-ad2ab0d69d43"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491450391
        },
        "e-259": {
            "id": "e-259",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|1e7518aa-e895-994a-bccc-2fa1fbe7e2e3"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|1e7518aa-e895-994a-bccc-2fa1fbe7e2e3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491463174
        },
        "e-261": {
            "id": "e-261",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-262"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|2ae9310b-62f4-7acf-96a2-cfb63a524ac5"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|2ae9310b-62f4-7acf-96a2-cfb63a524ac5"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491468909
        },
        "e-263": {
            "id": "e-263",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-264"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|8953bb65-ec6a-fa8d-2a65-989fe046821d"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|8953bb65-ec6a-fa8d-2a65-989fe046821d"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491474872
        },
        "e-265": {
            "id": "e-265",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-266"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|ea438f59-7b0a-018a-2a5f-d127feb4896b"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|ea438f59-7b0a-018a-2a5f-d127feb4896b"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491479945
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-268"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|09e84816-5737-bbd5-9f06-def9c4b8098f"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|09e84816-5737-bbd5-9f06-def9c4b8098f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491487024
        },
        "e-269": {
            "id": "e-269",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-270"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0e78452f-bdab-7657-a0f9-33a96cbf0dbe"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0e78452f-bdab-7657-a0f9-33a96cbf0dbe"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491502031
        },
        "e-271": {
            "id": "e-271",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-272"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0dc81707-83fa-4d05-22ff-2eba85874a42"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0dc81707-83fa-4d05-22ff-2eba85874a42"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491512599
        },
        "e-273": {
            "id": "e-273",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-274"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee4e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee4e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491564946
        },
        "e-275": {
            "id": "e-275",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-276"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee50"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee50"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491572444
        },
        "e-277": {
            "id": "e-277",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-278"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|5685afb5-601b-5be2-d1d1-578bf7cdea0e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|5685afb5-601b-5be2-d1d1-578bf7cdea0e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491577974
        },
        "e-279": {
            "id": "e-279",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-280"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|695c6914-9d3d-0981-14d3-ceed669fe3e7"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|695c6914-9d3d-0981-14d3-ceed669fe3e7"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491584366
        },
        "e-281": {
            "id": "e-281",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-282"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|1cedc0d3-8538-dc90-d519-586ce3ee3d71"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|1cedc0d3-8538-dc90-d519-586ce3ee3d71"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491590667
        },
        "e-283": {
            "id": "e-283",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-284"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|b360163b-8e01-7d2b-b0f0-0f601a0d9f9e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|b360163b-8e01-7d2b-b0f0-0f601a0d9f9e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491599895
        },
        "e-285": {
            "id": "e-285",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-286"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|61f4328e-8eae-42c6-da78-2c3f66664699"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|61f4328e-8eae-42c6-da78-2c3f66664699"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491606051
        },
        "e-287": {
            "id": "e-287",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-288"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|f8d58902-5bca-c5a0-a8c7-78828d2303f1"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|f8d58902-5bca-c5a0-a8c7-78828d2303f1"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491612117
        },
        "e-289": {
            "id": "e-289",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-290"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|61250761-8bcb-7480-19a6-b7f802181799"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|61250761-8bcb-7480-19a6-b7f802181799"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491619260
        },
        "e-291": {
            "id": "e-291",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-292"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee54"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee54"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491627257
        },
        "e-293": {
            "id": "e-293",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-294"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee58"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|531be9e8-dabf-2ab2-cff3-77096619ee58"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491633357
        },
        "e-295": {
            "id": "e-295",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-296"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491670848
        },
        "e-296": {
            "id": "e-296",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-295"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491670848
        },
        "e-297": {
            "id": "e-297",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-298"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491670848
        },
        "e-298": {
            "id": "e-298",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-297"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491670848
        },
        "e-299": {
            "id": "e-299",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1599491670848
        },
        "e-300": {
            "id": "e-300",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-301"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|05953480-8571-f84b-7200-0618e2b06cbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|05953480-8571-f84b-7200-0618e2b06cbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491670848
        },
        "e-301": {
            "id": "e-301",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-300"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|05953480-8571-f84b-7200-0618e2b06cbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|05953480-8571-f84b-7200-0618e2b06cbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491670848
        },
        "e-322": {
            "id": "e-322",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-323"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-323": {
            "id": "e-323",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-322"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-324": {
            "id": "e-324",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-325"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-325": {
            "id": "e-325",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-324"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-326": {
            "id": "e-326",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1599491770402
        },
        "e-327": {
            "id": "e-327",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-328"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|05953480-8571-f84b-7200-0618e2b06cbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|05953480-8571-f84b-7200-0618e2b06cbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-328": {
            "id": "e-328",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-327"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|05953480-8571-f84b-7200-0618e2b06cbf"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|05953480-8571-f84b-7200-0618e2b06cbf"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-335": {
            "id": "e-335",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-336"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|13f8cb45-605a-f22a-5ec2-0fd31296d88e"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|13f8cb45-605a-f22a-5ec2-0fd31296d88e"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599491770402
        },
        "e-339": {
            "id": "e-339",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-340"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|4f27ca08-0fda-cecf-ef60-797126c7be8d"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|4f27ca08-0fda-cecf-ef60-797126c7be8d"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599564825676
        },
        "e-341": {
            "id": "e-341",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-342"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|cbf38323-6d12-a704-bd2e-04516b697331"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564e56c04fcd142bf2bae0|cbf38323-6d12-a704-bd2e-04516b697331"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599565144782
        },
        "e-345": {
            "id": "e-345",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-346"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".category-acronym",
                "originalId": "5f3558801756d764cbdb8de7|3120f182-d5a1-3427-75e4-ac4b41d54a4f",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".category-acronym",
                "originalId": "5f3558801756d764cbdb8de7|3120f182-d5a1-3427-75e4-ac4b41d54a4f",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599566650964
        },
        "e-347": {
            "id": "e-347",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-348"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".project-item-title",
                "originalId": "5f439337f224418b7fac52f2|804825c8-8eb4-541e-6bd5-f129a6f07a40",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item-title",
                "originalId": "5f439337f224418b7fac52f2|804825c8-8eb4-541e-6bd5-f129a6f07a40",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599566708891
        },
        "e-349": {
            "id": "e-349",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-350"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599732517370
        },
        "e-350": {
            "id": "e-350",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-349"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f3abd5f12428e73c4694bc3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1599732517380
        },
        "e-351": {
            "id": "e-351",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-352"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1600701904782
        },
        "e-352": {
            "id": "e-352",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-19",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-351"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1600701904799
        },
        "e-353": {
            "id": "e-353",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1600701937076
        },
        "e-354": {
            "id": "e-354",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_UP",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-355"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1600702034395
        },
        "e-355": {
            "id": "e-355",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL_DOWN",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-354"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0765a554e515fb3a83c8"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1600702034406
        },
        "e-356": {
            "id": "e-356",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-15",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            },
            "targets": [{
                "appliesTo": "PAGE",
                "styleBlockIds": [],
                "id": "5f4d0775fc835d8c170019a6"
            }],
            "config": [{
                "continuousParameterGroupId": "a-15-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-15-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1600702062720
        },
        "e-357": {
            "id": "e-357",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-358"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".licensing-card",
                "originalId": "5f564eb9891b32244d1ec83e|b8aa41b4-d53e-73d8-d43e-ea324ea22163",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".licensing-card",
                "originalId": "5f564eb9891b32244d1ec83e|b8aa41b4-d53e-73d8-d43e-ea324ea22163",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604868307386
        },
        "e-359": {
            "id": "e-359",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-360"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|04301f2e-76c4-ab68-7f6b-a8f3ab5b801f"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f564eb9891b32244d1ec83e|04301f2e-76c4-ab68-7f6b-a8f3ab5b801f"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604868321830
        },
        "e-361": {
            "id": "e-361",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-362"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|32967b20-7e59-b07f-7197-75486cc3cef6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|32967b20-7e59-b07f-7197-75486cc3cef6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604868457686
        },
        "e-365": {
            "id": "e-365",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-366"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0cb966be-10c0-47cf-c914-8a8411b9f8a6"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|0cb966be-10c0-47cf-c914-8a8411b9f8a6"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604868938235
        },
        "e-367": {
            "id": "e-367",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-368"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|554ccfea-8217-66b2-994b-da65f46200c2"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|554ccfea-8217-66b2-994b-da65f46200c2"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604868982315
        },
        "e-369": {
            "id": "e-369",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-370"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|85b1c94c-6972-78a9-f8f6-90fe5adbd542"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "5f380b61bba6e9dda9e04d1a|85b1c94c-6972-78a9-f8f6-90fe5adbd542"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604868986199
        },
        "e-371": {
            "id": "e-371",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-372"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "85743820-c351-e018-a09c-9b7b76c518f3"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "85743820-c351-e018-a09c-9b7b76c518f3"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604870964266
        },
        "e-373": {
            "id": "e-373",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-374"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "881c0b78-b38b-a076-e73a-5ef752c0cb92"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "881c0b78-b38b-a076-e73a-5ef752c0cb92"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604870980440
        },
        "e-375": {
            "id": "e-375",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-376"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d26303703403"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d26303703403"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604871384373
        },
        "e-377": {
            "id": "e-377",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLL_INTO_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-378"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d2630370340b"
            },
            "targets": [{
                "appliesTo": "ELEMENT",
                "styleBlockIds": [],
                "id": "26cd800f-5e50-b07b-1a54-d2630370340b"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": 0,
                "scrollOffsetUnit": "%",
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1604871393173
        },
        "e-379": {
            "id": "e-379",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".project-item",
                "originalId": "5f3558801756d764cbdb8de7|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item",
                "originalId": "5f3558801756d764cbdb8de7|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-39-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1604872600249
        },
        "e-380": {
            "id": "e-380",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "selector": ".project-item-style-2",
                "originalId": "5f439337f224418b7fac52f2|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".project-item-style-2",
                "originalId": "5f439337f224418b7fac52f2|bc835b08-adcf-9322-7277-95514d102f86",
                "appliesTo": "CLASS"
            }],
            "config": [{
                "continuousParameterGroupId": "a-40-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1604874227081
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Hero On Scroll",
            "continuousParameterGroups": [{
                "id": "a-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-hello-text",
                                "selectorGuids": ["f8ac8062-29db-635e-7d68-120a7ced87b9"]
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-text-content",
                                "selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
                            },
                            "xValue": 20,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-hello-text",
                                "selectorGuids": ["f8ac8062-29db-635e-7d68-120a7ced87b9"]
                            },
                            "xValue": 50,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".hero-text-content",
                                "selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
                            },
                            "xValue": -90,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1597515097636
        },
        "a-2": {
            "id": "a-2",
            "title": "Hide Hero content on Loading",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-hello-text",
                            "selectorGuids": ["f8ac8062-29db-635e-7d68-120a7ced87b9"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-hello-text",
                            "selectorGuids": ["f8ac8062-29db-635e-7d68-120a7ced87b9"]
                        },
                        "yValue": 40,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text-content",
                            "selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-text-content",
                            "selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-picture",
                            "selectorGuids": ["2cb27e36-28c6-c56c-c193-6eb70d3c15c2"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-2-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-picture",
                            "selectorGuids": ["2cb27e36-28c6-c56c-c193-6eb70d3c15c2"]
                        },
                        "xValue": 20,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597657002522,
            "useFirstGroupAsInitialState": true
        },
        "a-5": {
            "id": "a-5",
            "title": "Show Hero content on Load",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "selector": ".hero-hello-text",
                            "selectorGuids": ["f8ac8062-29db-635e-7d68-120a7ced87b9"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "selector": ".hero-hello-text",
                            "selectorGuids": ["f8ac8062-29db-635e-7d68-120a7ced87b9"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-picture",
                            "selectorGuids": ["2cb27e36-28c6-c56c-c193-6eb70d3c15c2"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-picture",
                            "selectorGuids": ["2cb27e36-28c6-c56c-c193-6eb70d3c15c2"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-text-content",
                            "selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "inOutQuart",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-text-content",
                            "selectorGuids": ["9e29dcf4-2227-12a5-c65c-4a0cef2232bf"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1597657002522,
            "useFirstGroupAsInitialState": false
        },
        "a-3": {
            "id": "a-3",
            "title": "Display Underline On Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-underline",
                            "selectorGuids": ["eb757645-e5c9-6d26-b70b-7432ef5ec849"]
                        },
                        "xValue": -102,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-3-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-underline",
                            "selectorGuids": ["eb757645-e5c9-6d26-b70b-7432ef5ec849"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597668431110,
            "useFirstGroupAsInitialState": true
        },
        "a-4": {
            "id": "a-4",
            "title": "Hide Underline On Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-underline",
                            "selectorGuids": ["eb757645-e5c9-6d26-b70b-7432ef5ec849"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-4-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-underline",
                            "selectorGuids": ["eb757645-e5c9-6d26-b70b-7432ef5ec849"]
                        },
                        "xValue": 102,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".link-underline",
                            "selectorGuids": ["eb757645-e5c9-6d26-b70b-7432ef5ec849"]
                        },
                        "xValue": -102,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597668431110,
            "useFirstGroupAsInitialState": true
        },
        "a-6": {
            "id": "a-6",
            "title": "Page On Loading",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".fixed-nav",
                            "selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-6-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".animonload-right",
                            "selectorGuids": ["629e1b24-8b66-bc31-e380-491b4e30774d"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".animonload-left",
                            "selectorGuids": ["07d20bc5-1aeb-25e3-3de0-6a6386dfdba4"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "selector": ".animonload-left",
                            "selectorGuids": ["07d20bc5-1aeb-25e3-3de0-6a6386dfdba4"]
                        }
                    }
                }, {
                    "id": "a-6-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "selector": ".animonload-right",
                            "selectorGuids": ["629e1b24-8b66-bc31-e380-491b4e30774d"]
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 100,
                        "target": {
                            "selector": ".link-underline",
                            "selectorGuids": ["eb757645-e5c9-6d26-b70b-7432ef5ec849"]
                        },
                        "xValue": -102,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597678893336,
            "useFirstGroupAsInitialState": true
        },
        "a-19": {
            "id": "a-19",
            "title": "Page Load Done",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".fixed-nav",
                            "selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".animonload-right",
                            "selectorGuids": ["629e1b24-8b66-bc31-e380-491b4e30774d"]
                        },
                        "xValue": 100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-19-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 300,
                        "easing": "ease",
                        "duration": 800,
                        "target": {
                            "selector": ".animonload-left",
                            "selectorGuids": ["07d20bc5-1aeb-25e3-3de0-6a6386dfdba4"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597678893336,
            "useFirstGroupAsInitialState": false
        },
        "a-7": {
            "id": "a-7",
            "title": "Show Nav On Scroll",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".fixed-nav",
                            "selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597680042366,
            "useFirstGroupAsInitialState": false
        },
        "a-8": {
            "id": "a-8",
            "title": "Hide Nav On Scroll",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".fixed-nav",
                            "selectorGuids": ["76c2403f-c27b-7ac6-9cba-42bdcb6612d2"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1597680042366,
            "useFirstGroupAsInitialState": false
        },
        "a-9": {
            "id": "a-9",
            "title": "Project Item Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-bg-color",
                            "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-arrow",
                            "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-title",
                            "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-bg-color",
                            "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-arrow",
                            "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-arrow",
                            "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-title",
                            "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                        },
                        "xValue": 80,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-title",
                            "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-9-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-bg-white",
                            "selectorGuids": ["eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".category-acronym",
                            "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-9-n-13",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".category-acronym",
                            "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                        },
                        "xValue": 80,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        }
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1597685484841,
            "useFirstGroupAsInitialState": true
        },
        "a-10": {
            "id": "a-10",
            "title": "Project Item Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-bg-color",
                            "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-arrow",
                            "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-arrow",
                            "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-title",
                            "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-title",
                            "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-bg-white",
                            "selectorGuids": ["eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".category-acronym",
                            "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-10-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".category-acronym",
                            "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        }
                    }
                }]
            }],
            "createdOn": 1597685484841,
            "useFirstGroupAsInitialState": false
        },
        "a-11": {
            "id": "a-11",
            "title": "Display Project Image On Item Hover",
            "continuousParameterGroups": [{
                "id": "a-11-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "xValue": 0,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "xValue": 100,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-11-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-11-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "yValue": 0,
                            "xUnit": "VW",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-11-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "yValue": 100,
                            "xUnit": "VW",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1597686493768
        },
        "a-12": {
            "id": "a-12",
            "title": "Display Icon On Nav Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-arrow",
                            "selectorGuids": ["d1ac030d-deb0-5106-05a1-0ea15dab9bab"]
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-arrow",
                            "selectorGuids": ["d1ac030d-deb0-5106-05a1-0ea15dab9bab"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-link-text",
                            "selectorGuids": ["f8bb3813-adaa-2b4b-8624-0d4fdf336e41"]
                        },
                        "xValue": -20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-arrow",
                            "selectorGuids": ["d1ac030d-deb0-5106-05a1-0ea15dab9bab"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-arrow",
                            "selectorGuids": ["d1ac030d-deb0-5106-05a1-0ea15dab9bab"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1597740637889,
            "useFirstGroupAsInitialState": true
        },
        "a-13": {
            "id": "a-13",
            "title": "Hide Icon On Nav Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-link-text",
                            "selectorGuids": ["f8bb3813-adaa-2b4b-8624-0d4fdf336e41"]
                        },
                        "xValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-arrow",
                            "selectorGuids": ["d1ac030d-deb0-5106-05a1-0ea15dab9bab"]
                        },
                        "xValue": -10,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".nav-arrow",
                            "selectorGuids": ["d1ac030d-deb0-5106-05a1-0ea15dab9bab"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1597740637889,
            "useFirstGroupAsInitialState": false
        },
        "a-14": {
            "id": "a-14",
            "title": "Horizontal Content Scroller",
            "continuousParameterGroups": [{
                "id": "a-14-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-14-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scroller-track",
                                "selectorGuids": ["5a20ecc9-5036-6365-b69f-db57a2e4bf86"]
                            },
                            "xValue": 40,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-14-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scroller-track",
                                "selectorGuids": ["5a20ecc9-5036-6365-b69f-db57a2e4bf86"]
                            },
                            "xValue": -80,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1597744164689
        },
        "a-15": {
            "id": "a-15",
            "title": "Write Email Mouse Track on Move",
            "continuousParameterGroups": [{
                "id": "a-15-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-15-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".write-email-content",
                                "selectorGuids": ["05262176-a5d8-16fc-7191-d9641287e2e7"]
                            },
                            "xValue": 10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-15-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".write-email-content",
                                "selectorGuids": ["05262176-a5d8-16fc-7191-d9641287e2e7"]
                            },
                            "xValue": -45,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-15-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": []
            }],
            "createdOn": 1597765389234
        },
        "a-16": {
            "id": "a-16",
            "title": "Project Item 2 Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-bg-color",
                            "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-view-more",
                            "selectorGuids": ["0545d5d7-3422-7d8f-bd30-ea117212f9c1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-15",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-view-more",
                            "selectorGuids": ["0545d5d7-3422-7d8f-bd30-ea117212f9c1"]
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-bg-color",
                            "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-bg-white",
                            "selectorGuids": ["eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-10",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".category-acronym",
                            "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-16-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-view-more",
                            "selectorGuids": ["0545d5d7-3422-7d8f-bd30-ea117212f9c1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-16-n-17",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-view-more",
                            "selectorGuids": ["0545d5d7-3422-7d8f-bd30-ea117212f9c1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-16-n-12",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 100,
                        "easing": "",
                        "duration": 0,
                        "value": "block",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        }
                    }
                }, {
                    "id": "a-16-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1597685484841,
            "useFirstGroupAsInitialState": true
        },
        "a-17": {
            "id": "a-17",
            "title": "Project Item 2 Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-17-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-bg-color",
                            "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".nav-bg-white",
                            "selectorGuids": ["eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-view-more",
                            "selectorGuids": ["0545d5d7-3422-7d8f-bd30-ea117212f9c1"]
                        },
                        "yValue": 30,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-17-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-view-more",
                            "selectorGuids": ["0545d5d7-3422-7d8f-bd30-ea117212f9c1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-17-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 300,
                        "easing": "",
                        "duration": 0,
                        "value": "none",
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".project-item-image",
                            "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                        }
                    }
                }]
            }],
            "createdOn": 1597685484841,
            "useFirstGroupAsInitialState": false
        },
        "a-18": {
            "id": "a-18",
            "title": "Hero Horizontal Content Scroller",
            "continuousParameterGroups": [{
                "id": "a-18-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 33,
                    "actionItems": [{
                        "id": "a-18-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scroller-track",
                                "selectorGuids": ["5a20ecc9-5036-6365-b69f-db57a2e4bf86"]
                            },
                            "xValue": 0,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-18-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".scroller-track",
                                "selectorGuids": ["5a20ecc9-5036-6365-b69f-db57a2e4bf86"]
                            },
                            "xValue": -90,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1597744164689
        },
        "a-20": {
            "id": "a-20",
            "title": "Display Gif Animation On Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".human-gif-anim",
                            "selectorGuids": ["2ceee3af-38c4-c037-7161-73462a5ac1d7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".human-gif-anim",
                            "selectorGuids": ["2ceee3af-38c4-c037-7161-73462a5ac1d7"]
                        },
                        "xValue": 0.85,
                        "yValue": 0.85,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".human-gif-anim",
                            "selectorGuids": ["2ceee3af-38c4-c037-7161-73462a5ac1d7"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-20-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".human-gif-anim",
                            "selectorGuids": ["2ceee3af-38c4-c037-7161-73462a5ac1d7"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1598457639127,
            "useFirstGroupAsInitialState": true
        },
        "a-21": {
            "id": "a-21",
            "title": "Hide Gif Animation On Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".human-gif-anim",
                            "selectorGuids": ["2ceee3af-38c4-c037-7161-73462a5ac1d7"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "selector": ".human-gif-anim",
                            "selectorGuids": ["2ceee3af-38c4-c037-7161-73462a5ac1d7"]
                        },
                        "xValue": 0.85,
                        "yValue": 0.85,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1598457639127,
            "useFirstGroupAsInitialState": false
        },
        "a-22": {
            "id": "a-22",
            "title": "Gray Text On Scroll",
            "continuousParameterGroups": [{
                "id": "a-22-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-22-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
                            },
                            "value": 0.2,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 36,
                    "actionItems": [{
                        "id": "a-22-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
                            },
                            "value": 0.2,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-22-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 64,
                    "actionItems": [{
                        "id": "a-22-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
                            },
                            "value": 0.2,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-22-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|da88d4c7-ec88-0ec4-b020-3f7d1e5da1f1"
                            },
                            "value": 0.2,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1598535643789
        },
        "a-35": {
            "id": "a-35",
            "title": "Move Instagram Images On Mouse Move",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".instagram-container",
                                "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                            },
                            "xValue": 5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._1",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "9ecb5143-fd5b-9e92-e32f-80d18a8c9bea"]
                            },
                            "xValue": 20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._2",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "5c0c2cea-7f8b-0d58-cab3-e63b1b344afd"]
                            },
                            "xValue": 10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._3",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "e9e35fc2-168d-d28a-7092-101bc5110791"]
                            },
                            "xValue": 5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._4",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "409657d2-5b15-d039-788c-fb4bc8a68c44"]
                            },
                            "xValue": 5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._5",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "4e843406-9a06-31d4-22fb-2b50e8f0a7a0"]
                            },
                            "xValue": 15,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-7",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._6",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "7bfd3c80-a132-7894-4746-276fff59cbbc"]
                            },
                            "xValue": 20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._7",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "17cc7227-f40d-7150-eefb-13e280179b85"]
                            },
                            "xValue": 8,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-9",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._8",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "d73b3e3c-4805-ffb0-1763-de7166274887"]
                            },
                            "xValue": 10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._9",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "71b0e968-50a3-d89f-7e66-25de9fa6404b"]
                            },
                            "xValue": 5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._10",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "486215e6-8215-7627-e785-89da5ff572bc"]
                            },
                            "xValue": 20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-text-container",
                                "selectorGuids": ["12a027ef-5fc1-3290-93c7-5b502cd21660"]
                            },
                            "xValue": 6,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-35-n-13",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".instagram-container",
                                "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                            },
                            "xValue": -5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-14",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._1",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "9ecb5143-fd5b-9e92-e32f-80d18a8c9bea"]
                            },
                            "xValue": -10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-15",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._2",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "5c0c2cea-7f8b-0d58-cab3-e63b1b344afd"]
                            },
                            "xValue": -10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-16",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._3",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "e9e35fc2-168d-d28a-7092-101bc5110791"]
                            },
                            "xValue": -5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-17",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._4",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "409657d2-5b15-d039-788c-fb4bc8a68c44"]
                            },
                            "xValue": -25,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-18",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._5",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "4e843406-9a06-31d4-22fb-2b50e8f0a7a0"]
                            },
                            "xValue": -10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-19",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._6",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "7bfd3c80-a132-7894-4746-276fff59cbbc"]
                            },
                            "xValue": -15,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-20",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._7",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "17cc7227-f40d-7150-eefb-13e280179b85"]
                            },
                            "xValue": -20,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-21",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._8",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "d73b3e3c-4805-ffb0-1763-de7166274887"]
                            },
                            "xValue": -10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._9",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "71b0e968-50a3-d89f-7e66-25de9fa6404b"]
                            },
                            "xValue": -5,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._10",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "486215e6-8215-7627-e785-89da5ff572bc"]
                            },
                            "xValue": -30,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-text-container",
                                "selectorGuids": ["12a027ef-5fc1-3290-93c7-5b502cd21660"]
                            },
                            "xValue": -6,
                            "xUnit": "VW",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-35-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n-25",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".instagram-container",
                                "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                            },
                            "yValue": 10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-26",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._1",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "9ecb5143-fd5b-9e92-e32f-80d18a8c9bea"]
                            },
                            "yValue": 20,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-27",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._2",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "5c0c2cea-7f8b-0d58-cab3-e63b1b344afd"]
                            },
                            "yValue": 10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-28",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._3",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "e9e35fc2-168d-d28a-7092-101bc5110791"]
                            },
                            "yValue": 5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-29",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._4",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "409657d2-5b15-d039-788c-fb4bc8a68c44"]
                            },
                            "yValue": 5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-30",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._5",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "4e843406-9a06-31d4-22fb-2b50e8f0a7a0"]
                            },
                            "yValue": 5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-31",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._6",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "7bfd3c80-a132-7894-4746-276fff59cbbc"]
                            },
                            "yValue": 20,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-32",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._7",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "17cc7227-f40d-7150-eefb-13e280179b85"]
                            },
                            "yValue": 25,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-33",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._8",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "d73b3e3c-4805-ffb0-1763-de7166274887"]
                            },
                            "yValue": 10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-34",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._9",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "71b0e968-50a3-d89f-7e66-25de9fa6404b"]
                            },
                            "yValue": 5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-35",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._10",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "486215e6-8215-7627-e785-89da5ff572bc"]
                            },
                            "yValue": 20,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-36",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-text-container",
                                "selectorGuids": ["12a027ef-5fc1-3290-93c7-5b502cd21660"]
                            },
                            "yValue": 5,
                            "xUnit": "VW",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-35-n-37",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".instagram-container",
                                "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                            },
                            "yValue": -10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-38",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._1",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "9ecb5143-fd5b-9e92-e32f-80d18a8c9bea"]
                            },
                            "yValue": -10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-39",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._2",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "5c0c2cea-7f8b-0d58-cab3-e63b1b344afd"]
                            },
                            "yValue": -10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-40",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._3",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "e9e35fc2-168d-d28a-7092-101bc5110791"]
                            },
                            "yValue": -5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-41",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._4",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "409657d2-5b15-d039-788c-fb4bc8a68c44"]
                            },
                            "yValue": -5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-42",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._5",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "4e843406-9a06-31d4-22fb-2b50e8f0a7a0"]
                            },
                            "yValue": -20,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-43",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._6",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "7bfd3c80-a132-7894-4746-276fff59cbbc"]
                            },
                            "yValue": -15,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-44",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._7",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "17cc7227-f40d-7150-eefb-13e280179b85"]
                            },
                            "yValue": -5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-45",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._8",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "d73b3e3c-4805-ffb0-1763-de7166274887"]
                            },
                            "yValue": -10,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-46",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._9",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "71b0e968-50a3-d89f-7e66-25de9fa6404b"]
                            },
                            "yValue": -5,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-47",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-content._10",
                                "selectorGuids": ["1bdd3396-0766-23f5-6e09-2edade1bc336", "486215e6-8215-7627-e785-89da5ff572bc"]
                            },
                            "yValue": -30,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-48",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".insta-text-container",
                                "selectorGuids": ["12a027ef-5fc1-3290-93c7-5b502cd21660"]
                            },
                            "yValue": -6,
                            "xUnit": "VW",
                            "yUnit": "VH",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1598624816377
        },
        "a-26": {
            "id": "a-26",
            "title": "Display Instagram Description Text",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-description",
                            "selectorGuids": ["8d18c971-4078-94a9-5c96-8b52d390e7b1"]
                        },
                        "xValue": 0.95,
                        "yValue": 0.95,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-description",
                            "selectorGuids": ["8d18c971-4078-94a9-5c96-8b52d390e7b1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-description",
                            "selectorGuids": ["8d18c971-4078-94a9-5c96-8b52d390e7b1"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-26-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-description",
                            "selectorGuids": ["8d18c971-4078-94a9-5c96-8b52d390e7b1"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1598625878269,
            "useFirstGroupAsInitialState": true
        },
        "a-27": {
            "id": "a-27",
            "title": "Hide Instagram Description Text",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-description",
                            "selectorGuids": ["8d18c971-4078-94a9-5c96-8b52d390e7b1"]
                        },
                        "xValue": 0.95,
                        "yValue": 0.95,
                        "locked": true
                    }
                }, {
                    "id": "a-27-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".instagram-description",
                            "selectorGuids": ["8d18c971-4078-94a9-5c96-8b52d390e7b1"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1598625878269,
            "useFirstGroupAsInitialState": false
        },
        "a-30": {
            "id": "a-30",
            "title": "Load Blog Post Details",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".arrow-down-image",
                            "selectorGuids": ["040cdcac-b512-3bfc-312b-4e8ab46ff2c1"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-3",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "452e",
                            "value": 100,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-30-n-9",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".text-display",
                            "selectorGuids": ["4c234af5-ec65-77e5-9c3f-61145630af1b"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".content-slider-from-top",
                            "selectorGuids": ["1dcb430b-3ed4-510f-7ada-a924e0e83f5f"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-4",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "452e",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-30-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-30-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".text-display",
                            "selectorGuids": ["4c234af5-ec65-77e5-9c3f-61145630af1b"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".content-slider-from-top",
                            "selectorGuids": ["1dcb430b-3ed4-510f-7ada-a924e0e83f5f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "selector": ".arrow-down-image",
                            "selectorGuids": ["040cdcac-b512-3bfc-312b-4e8ab46ff2c1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1598881975105,
            "useFirstGroupAsInitialState": true
        },
        "a-31": {
            "id": "a-31",
            "title": "Update Progress Bar On Header",
            "continuousParameterGroups": [{
                "id": "a-31-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-31-n",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "selector": ".progress-bar",
                                "selectorGuids": ["25faf4c7-f5b3-a646-b242-dd3fdd3eaaad"]
                            },
                            "widthValue": 0,
                            "widthUnit": "%",
                            "heightUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-31-n-2",
                        "actionTypeId": "STYLE_SIZE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "locked": false,
                            "target": {
                                "selector": ".progress-bar",
                                "selectorGuids": ["25faf4c7-f5b3-a646-b242-dd3fdd3eaaad"]
                            },
                            "widthValue": 100,
                            "widthUnit": "%",
                            "heightUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1598886809031
        },
        "a-32": {
            "id": "a-32",
            "title": "Load Project Details",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".arrow-down-image",
                            "selectorGuids": ["040cdcac-b512-3bfc-312b-4e8ab46ff2c1"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "452e",
                            "value": 100,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-32-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-32-n-5",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".content-slider-from-bottom",
                            "selectorGuids": ["13ea79b4-f002-a388-efe9-a8167eb9a8ae"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-11",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".content-slider-from-top",
                            "selectorGuids": ["1dcb430b-3ed4-510f-7ada-a924e0e83f5f"]
                        },
                        "yValue": -100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-7",
                    "actionTypeId": "STYLE_FILTER",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "filters": [{
                            "type": "blur",
                            "filterId": "452e",
                            "value": 0,
                            "unit": "px"
                        }]
                    }
                }, {
                    "id": "a-32-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "selector": ".hero-image-background",
                            "selectorGuids": ["af5df33e-7517-dd6f-8d8b-ba7cee1c838c"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-32-n-10",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".content-slider-from-bottom",
                            "selectorGuids": ["13ea79b4-f002-a388-efe9-a8167eb9a8ae"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-12",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".content-slider-from-top",
                            "selectorGuids": ["1dcb430b-3ed4-510f-7ada-a924e0e83f5f"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-32-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 800,
                        "easing": "inOutCubic",
                        "duration": 1000,
                        "target": {
                            "selector": ".arrow-down-image",
                            "selectorGuids": ["040cdcac-b512-3bfc-312b-4e8ab46ff2c1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1598881975105,
            "useFirstGroupAsInitialState": true
        },
        "a-33": {
            "id": "a-33",
            "title": "Post Item Animate On Hover",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".post-item-image",
                            "selectorGuids": ["9fb0e910-1fae-e70e-3afc-40c3cf1bb5fe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow",
                            "selectorGuids": ["5204b93a-8663-3d5b-d1c1-c24942369c78"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".post-item-image",
                            "selectorGuids": ["9fb0e910-1fae-e70e-3afc-40c3cf1bb5fe"]
                        },
                        "yValue": -50,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow",
                            "selectorGuids": ["5204b93a-8663-3d5b-d1c1-c24942369c78"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1598968973228,
            "useFirstGroupAsInitialState": true
        },
        "a-34": {
            "id": "a-34",
            "title": "Post Item Animate On Hover Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n-3",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".post-item-image",
                            "selectorGuids": ["9fb0e910-1fae-e70e-3afc-40c3cf1bb5fe"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".read-more-arrow",
                            "selectorGuids": ["5204b93a-8663-3d5b-d1c1-c24942369c78"]
                        },
                        "xValue": -100,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1598968973228,
            "useFirstGroupAsInitialState": false
        },
        "a-28": {
            "id": "a-28",
            "title": "Show Instagram Container On Scroll",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "yValue": 30,
                        "xUnit": "VH",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "xValue": 0.75,
                        "yValue": 0.75,
                        "locked": true
                    }
                }, {
                    "id": "a-28-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {},
                        "xValue": 0.7,
                        "yValue": 0.7,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-28-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "yValue": 0,
                        "xUnit": "VH",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-28-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-28-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-28-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 2000,
                        "target": {},
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1598867112517,
            "useFirstGroupAsInitialState": true
        },
        "a-29": {
            "id": "a-29",
            "title": "Hide Instagram Container On Scroll Out",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "xValue": 0.75,
                        "yValue": 0.75,
                        "locked": true
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "yValue": 30,
                        "xUnit": "VH",
                        "yUnit": "VH",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".instagram-container",
                            "selectorGuids": ["f9500542-f47a-2518-6f31-6c1ca9fa183d"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 500,
                        "easing": "ease",
                        "duration": 500,
                        "target": {},
                        "xValue": 0.7,
                        "yValue": 0.7,
                        "locked": true
                    }
                }]
            }],
            "createdOn": 1598867112517,
            "useFirstGroupAsInitialState": false
        },
        "a-23": {
            "id": "a-23",
            "title": "Change Background To Black",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".wrapper",
                            "selectorGuids": ["87e38b99-c60b-0fad-6f26-ba54bfb1e8ca"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-23-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-bg-white",
                            "selectorGuids": ["eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-3",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-link-text",
                            "selectorGuids": ["f8bb3813-adaa-2b4b-8624-0d4fdf336e41"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-23-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".change-color-black-white",
                            "selectorGuids": ["202f1221-4d0e-76ed-3767-be67aa97a860"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1598539169874,
            "useFirstGroupAsInitialState": false
        },
        "a-24": {
            "id": "a-24",
            "title": "Change Background To White",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".wrapper",
                            "selectorGuids": ["87e38b99-c60b-0fad-6f26-ba54bfb1e8ca"]
                        },
                        "rValue": 255,
                        "gValue": 255,
                        "bValue": 255,
                        "aValue": 1
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-link-text",
                            "selectorGuids": ["f8bb3813-adaa-2b4b-8624-0d4fdf336e41"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".nav-bg-white",
                            "selectorGuids": ["eb48b55d-ce44-6ec0-1ecb-1ba7f3d525cd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "selector": ".change-color-black-white",
                            "selectorGuids": ["202f1221-4d0e-76ed-3767-be67aa97a860"]
                        },
                        "rValue": 0,
                        "gValue": 0,
                        "bValue": 0,
                        "aValue": 1
                    }
                }]
            }],
            "createdOn": 1598539169874,
            "useFirstGroupAsInitialState": false
        },
        "a-36": {
            "id": "a-36",
            "title": "Skew Element On Mouse Over",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|50b51607-829b-abb6-529d-5019aeef85c4"
                            },
                            "xValue": -2,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|50b51607-829b-abb6-529d-5019aeef85c4"
                            },
                            "xValue": 2,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }, {
                "id": "a-36-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n-3",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|50b51607-829b-abb6-529d-5019aeef85c4"
                            },
                            "yValue": 2,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-4",
                        "actionTypeId": "TRANSFORM_SKEW",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "5f467e7182910d0f55559cfb|50b51607-829b-abb6-529d-5019aeef85c4"
                            },
                            "yValue": -2,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1599140943353
        },
        "a-37": {
            "id": "a-37",
            "title": "Fade Move In Element On Scroll into View",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5f3558801756d764cbdb8de7|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5f3558801756d764cbdb8de7|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1200,
                        "target": {
                            "useEventTarget": true,
                            "id": "5f3558801756d764cbdb8de7|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1000,
                        "target": {
                            "useEventTarget": true,
                            "id": "5f3558801756d764cbdb8de7|7cfc0610-17c8-cfb3-1dab-3d44d138f306"
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "createdOn": 1599490134104,
            "useFirstGroupAsInitialState": true
        },
        "a-38": {
            "id": "a-38",
            "title": "Fade In Slow - On Scroll into VIew",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5f3558801756d764cbdb8de7|e74ed22c-3155-00fa-e7e3-df8b5875d506"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 1500,
                        "target": {
                            "useEventTarget": true,
                            "id": "5f3558801756d764cbdb8de7|e74ed22c-3155-00fa-e7e3-df8b5875d506"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "createdOn": 1599490304692,
            "useFirstGroupAsInitialState": true
        },
        "a-39": {
            "id": "a-39",
            "title": "Display Project Image On Scroll",
            "continuousParameterGroups": [{
                "id": "a-39-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 30,
                    "actionItems": [{
                        "id": "a-39-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-bg-color",
                                "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-arrow",
                                "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-8",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-arrow",
                                "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-10",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-title",
                                "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-13",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-title",
                                "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-39-n-19",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category-acronym",
                                "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-39-n-22",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-16",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-25",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "zValue": -20,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-39-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-bg-color",
                                "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-arrow",
                                "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                            },
                            "xValue": -10,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-9",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-arrow",
                                "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-12",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-title",
                                "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                            },
                            "xValue": 30,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-15",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-title",
                                "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-39-n-18",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-21",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category-acronym",
                                "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                            },
                            "rValue": 255,
                            "gValue": 255,
                            "bValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-39-n-24",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "xValue": 30,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-27",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-39-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-bg-color",
                                "selectorGuids": ["5b7d7d7d-44dd-367d-46b3-6b5526f91372"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 70,
                    "actionItems": [{
                        "id": "a-39-n-6",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-arrow",
                                "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-arrow",
                                "selectorGuids": ["ec858018-0f11-72a5-3d76-b521695740ef"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-11",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-title",
                                "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-14",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-title",
                                "selectorGuids": ["5b5fc7d0-1700-df19-35fa-5d5fcf8beed4"]
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-39-n-17",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-39-n-20",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".category-acronym",
                                "selectorGuids": ["9365bdfb-07dd-8bee-6cad-569d47552728"]
                            },
                            "rValue": 0,
                            "gValue": 0,
                            "bValue": 0,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-39-n-23",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "xValue": 0,
                            "xUnit": "PX",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-39-n-26",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "zValue": 20,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1604872638815
        },
        "a-40": {
            "id": "a-40",
            "title": "Display Project Image On Scroll 2",
            "continuousParameterGroups": [{
                "id": "a-40-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-40-n",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-4",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "zValue": -10,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 50,
                    "actionItems": [{
                        "id": "a-40-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-5",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "zValue": 0,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-40-n-2",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-40-n-6",
                        "actionTypeId": "TRANSFORM_ROTATE",
                        "config": {
                            "delay": 0,
                            "easing": "ease",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".project-item-image",
                                "selectorGuids": ["faadcee7-605a-9d8c-5d03-347937045d36"]
                            },
                            "zValue": 10,
                            "xUnit": "DEG",
                            "yUnit": "DEG",
                            "zUnit": "DEG"
                        }
                    }]
                }]
            }],
            "createdOn": 1604872638815
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});
