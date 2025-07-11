// https://www.npmjs.com/package/bundle-js
/*!
 * GSAP 3.13.0
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
    "use strict";

    function _inheritsLoose(t, e) {
        t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
    }

    function _assertThisInitialized(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }

    function r(t) {
        return "string" == typeof t
    }

    function s(t) {
        return "function" == typeof t
    }

    function t(t) {
        return "number" == typeof t
    }

    function u(t) {
        return void 0 === t
    }

    function v(t) {
        return "object" == typeof t
    }

    function w(t) {
        return !1 !== t
    }

    function x() {
        return "undefined" != typeof window
    }

    function y(t) {
        return s(t) || r(t)
    }

    function P(t) {
        return (i = yt(t, ot)) && ze
    }

    function Q(t, e) {
        return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
    }

    function R(t, e) {
        return !e && console.warn(t)
    }

    function S(t, e) {
        return t && (ot[t] = e) && i && (i[t] = e) || ot
    }

    function T() {
        return 0
    }

    function ea(t) {
        var e, r, i = t[0];
        if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
            for (r = gt.length; r-- && !gt[r].targetTest(i););
            e = gt[r]
        }
        for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new Zt(t[r], e))) || t.splice(r, 1);
        return t
    }

    function fa(t) {
        return t._gsap || ea(Ot(t))[0]._gsap
    }

    function ga(t, e, r) {
        return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
    }

    function ha(t, e) {
        return (t = t.split(",")).forEach(e) || t
    }

    function ia(t) {
        return Math.round(1e5 * t) / 1e5 || 0
    }

    function ja(t) {
        return Math.round(1e7 * t) / 1e7 || 0
    }

    function ka(t, e) {
        var r = e.charAt(0),
            i = parseFloat(e.substr(2));
        return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
    }

    function la(t, e) {
        for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
        return i < r
    }

    function ma() {
        var t, e, r = dt.length,
            i = dt.slice(0);
        for (ct = {}, t = dt.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
    }

    function na(t) {
        return !!(t._initted || t._startAt || t.add)
    }

    function oa(t, e, r, i) {
        dt.length && !L && ma(), t.render(e, r, i || !!(L && e < 0 && na(t))), dt.length && !L && ma()
    }

    function pa(t) {
        var e = parseFloat(t);
        return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
    }

    function qa(t) {
        return t
    }

    function ra(t, e) {
        for (var r in e) r in t || (t[r] = e[r]);
        return t
    }

    function ua(t, e) {
        for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ua(t[r] || (t[r] = {}), e[r]) : e[r]);
        return t
    }

    function va(t, e) {
        var r, i = {};
        for (r in t) r in e || (i[r] = t[r]);
        return i
    }

    function wa(t) {
        var e = t.parent || I,
            r = t.keyframes ? function _setKeyframeDefaults(i) {
                return function(t, e) {
                    for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
                }
            }($(t.keyframes)) : ra;
        if (w(t.inherit))
            for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
        return t
    }

    function ya(t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var a, s = t[i];
        if (n)
            for (a = e[n]; s && s[n] > a;) s = s._prev;
        return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
    }

    function za(t, e, r, i) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var n = e._prev,
            a = e._next;
        n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
    }

    function Aa(t, e) {
        t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove && t.parent.remove(t), t._act = 0
    }

    function Ba(t, e) {
        if (t && (!e || e._end > t._dur || e._start < 0))
            for (var r = t; r;) r._dirty = 1, r = r.parent;
        return t
    }

    function Da(t, e, r, i) {
        return t._startAt && (L ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
    }

    function Fa(t) {
        return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
    }

    function Ha(t, e) {
        return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    }

    function Ia(t) {
        return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || U) || 0))
    }

    function Ja(t, e) {
        var r = t._dp;
        return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ia(t), r._dirty || Ba(r, t)), t
    }

    function Ka(t, e) {
        var r;
        if ((e._time || !e._dur && e._initted || e._start < t._time && (e._dur || !e.add)) && (r = Ha(t.rawTime(), e), (!e._dur || Mt(0, e.totalDuration(), r) - e._tTime > U) && e.render(r, !0)), Ba(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
            if (t._dur < t.duration())
                for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
            t._zTime = -U
        }
    }

    function La(e, r, i, n) {
        return r.parent && Aa(r), r._start = ja((t(i) ? i : i || e !== I ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), ya(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ka(e, r), e._ts < 0 && Ja(e, e._tTime), e
    }

    function Ma(t, e) {
        return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
    }

    function Na(t, e, r, i, n) {
        return Wt(t, e, n), t._initted ? !r && t._pt && !L && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Rt.frame ? (dt.push(t), t._lazy = [n, i], 1) : void 0 : 1
    }

    function Sa(t, e, r, i) {
        var n = t._repeat,
            a = ja(e) || 0,
            s = t._tTime / t._tDur;
        return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ja(t, t._tTime = t._tDur * s), t.parent && Ia(t), r || Ba(t.parent, t), t
    }

    function Ta(t) {
        return t instanceof Qt ? Ba(t) : Sa(t, t._dur)
    }

    function Wa(e, r, i) {
        var n, a, s = t(r[1]),
            o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
            u = r[o];
        if (s && (u.duration = r[1]), u.parent = i, e) {
            for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
            u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
        }
        return new Jt(r[0], u, r[1 + o])
    }

    function Xa(t, e) {
        return t || 0 === t ? e(t) : e
    }

    function Za(t, e) {
        return r(t) && (e = st.exec(t)) ? e[1] : ""
    }

    function ab(t, e) {
        return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
    }

    function db(r) {
        return r = Ot(r)[0] || R("Invalid scope") || {},
            function(t) {
                var e = r.current || r.nativeElement || r;
                return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
            }
    }

    function eb(t) {
        return t.sort(function() {
            return .5 - Math.random()
        })
    }

    function fb(t) {
        if (s(t)) return t;
        var p = v(t) ? t : {
                each: t
            },
            _ = Yt(p.ease),
            m = p.from || 0,
            g = parseFloat(p.base) || 0,
            y = {},
            e = 0 < m && m < 1,
            T = isNaN(m) || e,
            b = p.axis,
            w = m,
            x = m;
        return r(m) ? w = x = {
                center: .5,
                edges: .5,
                end: 1
            } [m] || 0 : !e && T && (w = m[0], x = m[1]),
            function(t, e, r) {
                var i, n, a, s, o, u, h, l, f, d = (r || p).length,
                    c = y[d];
                if (!c) {
                    if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, N])[1])) {
                        for (h = -N; h < (h = r[f++].getBoundingClientRect().left) && f < d;);
                        f < d && f--
                    }
                    for (c = y[d] = [], i = T ? Math.min(f, d) * w - .5 : m % f, n = f === N ? 0 : T ? d * x / f - .5 : m / f | 0, l = N, u = h = 0; u < d; u++) a = u % f - i, s = n - (u / f | 0), c[u] = o = b ? Math.abs("y" === b ? s : a) : G(a * a + s * s), h < o && (h = o), o < l && (l = o);
                    "random" === m && eb(c), c.max = h - l, c.min = l, c.v = d = (parseFloat(p.amount) || parseFloat(p.each) * (d < f ? d - 1 : b ? "y" === b ? d / f : f : Math.max(f, d / f)) || 0) * ("edges" === m ? -1 : 1), c.b = d < 0 ? g - d : g, c.u = Za(p.amount || p.each) || 0, _ = _ && d < 0 ? jt(_) : _
                }
                return d = (c[t] - c.min) / c.max || 0, ja(c.b + (_ ? _(d) : d) * c.v) + c.u
            }
    }

    function gb(i) {
        var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
        return function(e) {
            var r = ja(Math.round(parseFloat(e) / i) * i * n);
            return (r - r % 1) / n + (t(e) ? 0 : Za(e))
        }
    }

    function hb(h, e) {
        var l, f, r = $(h);
        return !r && v(h) && (l = r = h.radius || N, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = gb(h.increment)), Xa(e, r ? s(h) ? function(t) {
            return f = h(t), Math.abs(f - t) <= l ? f : t
        } : function(e) {
            for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = N, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
            return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Za(e)
        } : gb(h))
    }

    function ib(t, e, r, i) {
        return Xa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
            return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
        })
    }

    function mb(e, r, t) {
        return Xa(t, function(t) {
            return e[~~r(t)]
        })
    }

    function pb(t) {
        for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + ib(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
        return s + t.substr(a, t.length - a)
    }

    function sb(t, e, r) {
        var i, n, a, s = t.labels,
            o = N;
        for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
        return a
    }

    function ub(t) {
        return Aa(t), t.scrollTrigger && t.scrollTrigger.kill(!!L), t.progress() < 1 && Pt(t, "onInterrupt"), t
    }

    function xb(t) {
        if (t)
            if (t = !t.name && t.default || t, x() || t.headless) {
                var e = t.name,
                    r = s(t),
                    i = e && !r && t.init ? function() {
                        this._props = []
                    } : t,
                    n = {
                        init: T,
                        render: ue,
                        add: Vt,
                        kill: de,
                        modifier: he,
                        rawVars: 0
                    },
                    a = {
                        targetTest: 0,
                        get: 0,
                        getSetter: ie,
                        aliases: {},
                        register: 0
                    };
                if (Ft(), t !== i) {
                    if (pt[e]) return;
                    ra(i, ra(va(t, n), a)), yt(i.prototype, yt(n, va(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
                }
                S(e, i), t.register && t.register(ze, i, ge)
            } else Ct.push(t)
    }

    function Ab(t, e, r) {
        return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * St + .5 | 0
    }

    function Bb(e, r, i) {
        var n, a, s, o, u, h, l, f, d, c, p = e ? t(e) ? [e >> 16, e >> 8 & St, e & St] : 0 : Dt.black;
        if (!p) {
            if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), Dt[e]) p = Dt[e];
            else if ("#" === e.charAt(0)) {
                if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & St, p & St, parseInt(e.substr(7), 16) / 255];
                p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & St, e & St]
            } else if ("hsl" === e.substr(0, 3))
                if (p = c = e.match(tt), r) {
                    if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
                } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = Ab(o + 1 / 3, n, a), p[1] = Ab(o, n, a), p[2] = Ab(o - 1 / 3, n, a);
            else p = e.match(tt) || Dt.transparent;
            p = p.map(Number)
        }
        return r && !c && (n = p[0] / St, a = p[1] / St, s = p[2] / St, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (d = l - f, u = .5 < h ? d / (2 - l - f) : d / (l + f), o = l === n ? (a - s) / d + (a < s ? 6 : 0) : l === a ? (s - n) / d + 2 : (n - a) / d + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
    }

    function Cb(t) {
        var r = [],
            i = [],
            n = -1;
        return t.split(zt).forEach(function(t) {
            var e = t.match(rt) || [];
            r.push.apply(r, e), i.push(n += e.length + 1)
        }), r.c = i, r
    }

    function Db(t, e, r) {
        var i, n, a, s, o = "",
            u = (t + o).match(zt),
            h = e ? "hsla(" : "rgba(",
            l = 0;
        if (!u) return t;
        if (u = u.map(function(t) {
                return (t = Bb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
            }), r && (a = Cb(t), (i = r.c).join(o) !== a.c.join(o)))
            for (s = (n = t.replace(zt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
        if (!n)
            for (s = (n = t.split(zt)).length - 1; l < s; l++) o += n[l] + u[l];
        return o + n[s]
    }

    function Gb(t) {
        var e, r = t.join(" ");
        if (zt.lastIndex = 0, zt.test(r)) return e = Et.test(r), t[1] = Db(t[1], e), t[0] = Db(t[0], e, Cb(t[1])), !0
    }

    function Pb(t) {
        var e = (t + "").split("("),
            r = Lt[e[0]];
        return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
            for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i, s = r.substr(e + 1).trim();
            return n
        }(e[1])] : function _valueInParentheses(t) {
            var e = t.indexOf("(") + 1,
                r = t.indexOf(")"),
                i = t.indexOf("(", e);
            return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
        }(t).split(",").map(pa)) : Lt._CE && It.test(t) ? Lt._CE("", t) : r
    }

    function Rb(t, e) {
        for (var r, i = t._first; i;) i instanceof Qt ? Rb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Rb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
    }

    function Tb(t, e, r, i) {
        void 0 === r && (r = function easeOut(t) {
            return 1 - e(1 - t)
        }), void 0 === i && (i = function easeInOut(t) {
            return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
        });
        var n, a = {
            easeIn: e,
            easeOut: r,
            easeInOut: i
        };
        return ha(t, function(t) {
            for (var e in Lt[t] = ot[t] = a, Lt[n = t.toLowerCase()] = r, a) Lt[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Lt[t + "." + e] = a[e]
        }), a
    }

    function Ub(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
        }
    }

    function Vb(r, t, e) {
        function Lm(t) {
            return 1 === t ? 1 : i * Math.pow(2, -10 * t) * K((t - a) * n) + 1
        }
        var i = 1 <= t ? t : 1,
            n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
            a = n / q * (Math.asin(1 / i) || 0),
            s = "out" === r ? Lm : "in" === r ? function(t) {
                return 1 - Lm(1 - t)
            } : Ub(Lm);
        return n = q / n, s.config = function(t, e) {
            return Vb(r, t, e)
        }, s
    }

    function Wb(e, r) {
        function Tm(t) {
            return t ? --t * t * ((r + 1) * t + r) + 1 : 0
        }
        void 0 === r && (r = 1.70158);
        var t = "out" === e ? Tm : "in" === e ? function(t) {
            return 1 - Tm(1 - t)
        } : Ub(Tm);
        return t.config = function(t) {
            return Wb(e, t)
        }, t
    }
    var F, L, l, I, h, n, a, i, o, f, d, c, p, _, m, g, b, M, k, O, A, C, D, z, E, B, j, Y, X = {
            autoSleep: 120,
            force3D: "auto",
            nullTargetWarn: 1,
            units: {
                lineHeight: ""
            }
        },
        Z = {
            duration: .5,
            overwrite: !1,
            delay: 0
        },
        N = 1e8,
        U = 1 / N,
        q = 2 * Math.PI,
        V = q / 4,
        W = 0,
        G = Math.sqrt,
        H = Math.cos,
        K = Math.sin,
        J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
        $ = Array.isArray,
        tt = /(?:-?\.?\d|\.)+/gi,
        et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
        rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
        it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
        nt = /[+-]=-?[.\d]+/,
        at = /[^,'"\[\]\s]+/gi,
        st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
        ot = {},
        ut = {
            suppressEvents: !0,
            isStart: !0,
            kill: !1
        },
        ht = {
            suppressEvents: !0,
            kill: !1
        },
        lt = {
            suppressEvents: !0
        },
        ft = {},
        dt = [],
        ct = {},
        pt = {},
        _t = {},
        mt = 30,
        gt = [],
        vt = "",
        yt = function _merge(t, e) {
            for (var r in e) t[r] = e[r];
            return t
        },
        Tt = function _animationCycle(t, e) {
            var r = Math.floor(t = ja(t / e));
            return t && r === t ? r - 1 : r
        },
        bt = function _isFromOrFromStart(t) {
            var e = t.data;
            return "isFromStart" === e || "isStart" === e
        },
        wt = {
            _start: 0,
            endTime: T,
            totalDuration: T
        },
        xt = function _parsePosition(t, e, i) {
            var n, a, s, o = t.labels,
                u = t._recent || wt,
                h = t.duration() >= N ? u.endTime(!1) : t._dur;
            return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
        },
        Mt = function _clamp(t, e, r) {
            return r < t ? t : e < r ? e : r
        },
        kt = [].slice,
        Ot = function toArray(t, e, i) {
            return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && Ft() ? $(t) ? function _flatten(t, e, i) {
                return void 0 === i && (i = []), t.forEach(function(t) {
                    return r(t) && !e || ab(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
                }) || i
            }(t, i) : ab(t) ? kt.call(t, 0) : t ? [t] : [] : kt.call((e || a).querySelectorAll(t), 0)
        },
        At = function mapRange(e, t, r, i, n) {
            var a = t - e,
                s = i - r;
            return Xa(n, function(t) {
                return r + ((t - e) / a * s || 0)
            })
        },
        Pt = function _callback(t, e, r) {
            var i, n, a, s = t.vars,
                o = s[e],
                u = l,
                h = t._ctx;
            if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && dt.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
        },
        Ct = [],
        St = 255,
        Dt = {
            aqua: [0, St, St],
            lime: [0, St, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, St],
            navy: [0, 0, 128],
            white: [St, St, St],
            olive: [128, 128, 0],
            yellow: [St, St, 0],
            orange: [St, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [St, 0, 0],
            pink: [St, 192, 203],
            cyan: [0, St, St],
            transparent: [St, St, St, 0]
        },
        zt = function() {
            var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
            for (t in Dt) e += "|" + t + "\\b";
            return new RegExp(e + ")", "gi")
        }(),
        Et = /hsl[a]?\(/,
        Rt = (k = Date.now, O = 500, A = 33, C = k(), D = C, E = z = 1e3 / 240, g = {
            time: 0,
            frame: 0,
            tick: function tick() {
                Al(!0)
            },
            deltaRatio: function deltaRatio(t) {
                return b / (1e3 / (t || 60))
            },
            wake: function wake() {
                o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = ze, (h.gsapVersions || (h.gsapVersions = [])).push(ze.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), Ct.forEach(xb)), m = "undefined" != typeof requestAnimationFrame && requestAnimationFrame, p && g.sleep(), _ = m || function(t) {
                    return setTimeout(t, E - 1e3 * g.time + 1 | 0)
                }, c = 1, Al(2))
            },
            sleep: function sleep() {
                (m ? cancelAnimationFrame : clearTimeout)(p), c = 0, _ = T
            },
            lagSmoothing: function lagSmoothing(t, e) {
                O = t || 1 / 0, A = Math.min(e || 33, O)
            },
            fps: function fps(t) {
                z = 1e3 / (t || 240), E = 1e3 * g.time + z
            },
            add: function add(n, t, e) {
                var a = t ? function(t, e, r, i) {
                    n(t, e, r, i), g.remove(a)
                } : n;
                return g.remove(n), B[e ? "unshift" : "push"](a), Ft(), a
            },
            remove: function remove(t, e) {
                ~(e = B.indexOf(t)) && B.splice(e, 1) && e <= M && M--
            },
            _listeners: B = []
        }),
        Ft = function _wake() {
            return !c && Rt.wake()
        },
        Lt = {},
        It = /^[\d.\-M][\d.\-,\s]/,
        Bt = /["']/g,
        jt = function _invertEase(e) {
            return function(t) {
                return 1 - e(1 - t)
            }
        },
        Yt = function _parseEase(t, e) {
            return t && (s(t) ? t : Lt[t] || Pb(t)) || e
        };

    function Al(t) {
        var e, r, i, n, a = k() - D,
            s = !0 === t;
        if ((O < a || a < 0) && (C += a - A), (0 < (e = (i = (D += a) - C) - E) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, E += e + (z <= e ? 4 : z - e), r = 1), s || (p = _(Al)), r)
            for (M = 0; M < B.length; M++) B[M](i, b, n, t)
    }

    function jn(t) {
        return t < Y ? j * t * t : t < .7272727272727273 ? j * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? j * (t -= 2.25 / 2.75) * t + .9375 : j * Math.pow(t - 2.625 / 2.75, 2) + .984375
    }
    ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
        var r = e < 5 ? e + 1 : e;
        Tb(t + ",Power" + (r - 1), e ? function(t) {
            return Math.pow(t, r)
        } : function(t) {
            return t
        }, function(t) {
            return 1 - Math.pow(1 - t, r)
        }, function(t) {
            return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
        })
    }), Lt.Linear.easeNone = Lt.none = Lt.Linear.easeIn, Tb("Elastic", Vb("in"), Vb("out"), Vb()), j = 7.5625, Y = 1 / 2.75, Tb("Bounce", function(t) {
        return 1 - jn(1 - t)
    }, jn), Tb("Expo", function(t) {
        return Math.pow(2, 10 * (t - 1)) * t + t * t * t * t * t * t * (1 - t)
    }), Tb("Circ", function(t) {
        return -(G(1 - t * t) - 1)
    }), Tb("Sine", function(t) {
        return 1 === t ? 1 : 1 - H(t * V)
    }), Tb("Back", Wb("in"), Wb("out"), Wb()), Lt.SteppedEase = Lt.steps = ot.SteppedEase = {
        config: function config(t, e) {
            void 0 === t && (t = 1);
            var r = 1 / t,
                i = t + (e ? 0 : 1),
                n = e ? 1 : 0;
            return function(t) {
                return ((i * Mt(0, .99999999, t) | 0) + n) * r
            }
        }
    }, Z.ease = Lt["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
        return vt += t + "," + t + "Params,"
    });
    var Xt, Zt = function GSCache(t, e) {
            this.id = W++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : ie
        },
        Nt = ((Xt = Animation.prototype).delay = function delay(t) {
            return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
        }, Xt.duration = function duration(t) {
            return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
        }, Xt.totalDuration = function totalDuration(t) {
            return arguments.length ? (this._dirty = 0, Sa(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, Xt.totalTime = function totalTime(t, e) {
            if (Ft(), !arguments.length) return this._tTime;
            var r = this._dp;
            if (r && r.smoothChildTiming && this._ts) {
                for (Ja(this, t), !r._dp || r.parent || Ka(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
                !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && La(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === U || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), oa(this, t, e)), this
        }, Xt.time = function time(t, e) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Fa(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
        }, Xt.totalProgress = function totalProgress(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : 0 <= this.rawTime() && this._initted ? 1 : 0
        }, Xt.progress = function progress(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Fa(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : 0 < this.rawTime() ? 1 : 0
        }, Xt.iteration = function iteration(t, e) {
            var r = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
        }, Xt.timeScale = function timeScale(t, e) {
            if (!arguments.length) return this._rts === -U ? 0 : this._rts;
            if (this._rts === t) return this;
            var r = this.parent && this._ts ? Ha(this.parent._time, this) : this._tTime;
            return this._rts = +t || 0, this._ts = this._ps || t === -U ? 0 : this._rts, this.totalTime(Mt(-Math.abs(this._delay), this.totalDuration(), r), !1 !== e), Ia(this),
                function _recacheAncestors(t) {
                    for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                    return t
                }(this)
        }, Xt.paused = function paused(t) {
            return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ft(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== U && (this._tTime -= U)))), this) : this._ps
        }, Xt.startTime = function startTime(t) {
            if (arguments.length) {
                this._start = t;
                var e = this.parent || this._dp;
                return !e || !e._sort && this.parent || La(e, this, t - this._delay), this
            }
            return this._start
        }, Xt.endTime = function endTime(t) {
            return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, Xt.rawTime = function rawTime(t) {
            var e = this.parent || this._dp;
            return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ha(e.rawTime(t), this) : this._tTime : this._tTime
        }, Xt.revert = function revert(t) {
            void 0 === t && (t = lt);
            var e = L;
            return L = t, na(this) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), L = e, this
        }, Xt.globalTime = function globalTime(t) {
            for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (Math.abs(e._ts) || 1), e = e._dp;
            return !this.parent && this._sat ? this._sat.globalTime(t) : r
        }, Xt.repeat = function repeat(t) {
            return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Ta(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
        }, Xt.repeatDelay = function repeatDelay(t) {
            if (arguments.length) {
                var e = this._time;
                return this._rDelay = t, Ta(this), e ? this.time(e) : this
            }
            return this._rDelay
        }, Xt.yoyo = function yoyo(t) {
            return arguments.length ? (this._yoyo = t, this) : this._yoyo
        }, Xt.seek = function seek(t, e) {
            return this.totalTime(xt(this, t), w(e))
        }, Xt.restart = function restart(t, e) {
            return this.play().totalTime(t ? -this._delay : 0, w(e)), this._dur || (this._zTime = -U), this
        }, Xt.play = function play(t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, Xt.reverse = function reverse(t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, Xt.pause = function pause(t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
        }, Xt.resume = function resume() {
            return this.paused(!1)
        }, Xt.reversed = function reversed(t) {
            return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -U : 0)), this) : this._rts < 0
        }, Xt.invalidate = function invalidate() {
            return this._initted = this._act = 0, this._zTime = -U, this
        }, Xt.isActive = function isActive() {
            var t, e = this.parent || this._dp,
                r = this._start;
            return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - U))
        }, Xt.eventCallback = function eventCallback(t, e, r) {
            var i = this.vars;
            return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
        }, Xt.then = function then(t) {
            var i = this;
            return new Promise(function(e) {
                function Eo() {
                    var t = i.then;
                    i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
                }
                var r = s(t) ? t : qa;
                i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? Eo() : i._prom = Eo
            })
        }, Xt.kill = function kill() {
            ub(this)
        }, Animation);

    function Animation(t) {
        this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Sa(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), c || Rt.wake()
    }
    ra(Nt.prototype, {
        _time: 0,
        _start: 0,
        _end: 0,
        _tTime: 0,
        _tDur: 0,
        _dirty: 0,
        _repeat: 0,
        _yoyo: !1,
        parent: null,
        _initted: !1,
        _rDelay: 0,
        _ts: 1,
        _dp: 0,
        ratio: 0,
        _zTime: -U,
        _prom: 0,
        _ps: !1,
        _rts: 1
    });
    var Qt = function(i) {
        function Timeline(t, e) {
            var r;
            return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), I && La(t.parent || I, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && Ma(_assertThisInitialized(r), t.scrollTrigger), r
        }
        _inheritsLoose(Timeline, i);
        var e = Timeline.prototype;
        return e.to = function to(t, e, r) {
            return Wa(0, arguments, this), this
        }, e.from = function from(t, e, r) {
            return Wa(1, arguments, this), this
        }, e.fromTo = function fromTo(t, e, r, i) {
            return Wa(2, arguments, this), this
        }, e.set = function set(t, e, r) {
            return e.duration = 0, e.parent = this, wa(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Jt(t, e, xt(this, r), 1), this
        }, e.call = function call(t, e, r) {
            return La(this, Jt.delayedCall(0, t, e), r)
        }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
            return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Jt(t, r, xt(this, n)), this
        }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
            return r.runBackwards = 1, wa(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
        }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
            return i.startAt = r, wa(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
        }, e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _ = this._time,
                m = this._dirty ? this.totalDuration() : this._tDur,
                g = this._dur,
                v = t <= 0 ? 0 : ja(t),
                y = this._zTime < 0 != t < 0 && (this._initted || !g);
            if (this !== I && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
                if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                    if (c = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                    if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(d = ja(v / o))) && s === d && (i = g, s--), g < i && (i = g)), d = Tt(this._tTime, o), !_ && this._tTime && d !== s && this._tTime - d * o - this._dur <= 0 && (d = s), c && 1 & s && (i = g - i, p = 1), s !== d && !this._lock) {
                        var T = c && 1 & d,
                            b = T === (c && 1 & s);
                        if (s < d && (T = !T), _ = T ? 0 : v % g ? g : v, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Pt(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                        if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                        Rb(this, p)
                    }
                }
                if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                        var i;
                        if (e < r)
                            for (i = t._first; i && i._start <= r;) {
                                if ("isPause" === i.data && i._start > e) return i;
                                i = i._next
                            } else
                                for (i = t._last; i && i._start >= r;) {
                                    if ("isPause" === i.data && i._start < e) return i;
                                    i = i._prev
                                }
                    }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && v && !e && !d && (Pt(this, "onStart"), this._tTime !== v)) return this;
                if (_ <= i && 0 <= t)
                    for (n = this._first; n;) {
                        if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                            if (n.parent !== this) return this.render(t, e, r);
                            if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                                h = 0, a && (v += this._zTime = -U);
                                break
                            }
                        }
                        n = a
                    } else {
                        n = this._last;
                        for (var w = t < 0 ? t : i; n;) {
                            if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                                if (n.parent !== this) return this.render(t, e, r);
                                if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || L && na(n)), i !== this._time || !this._ts && !u) {
                                    h = 0, a && (v += this._zTime = w ? -U : U);
                                    break
                                }
                            }
                            n = a
                        }
                    }
                if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -U)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ia(this), this.render(t, e, r);
                this._onUpdate && !e && Pt(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || Aa(this, 1), e || t < 0 && !_ || !v && !_ && m || (Pt(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
            }
            return this
        }, e.add = function add(e, i) {
            var n = this;
            if (t(i) || (i = xt(this, i, e)), !(e instanceof Nt)) {
                if ($(e)) return e.forEach(function(t) {
                    return n.add(t, i)
                }), this;
                if (r(e)) return this.addLabel(e, i);
                if (!s(e)) return this;
                e = Jt.delayedCall(0, e)
            }
            return this !== e ? La(this, e, i) : this
        }, e.getChildren = function getChildren(t, e, r, i) {
            void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -N);
            for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Jt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
            return n
        }, e.getById = function getById(t) {
            for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
                if (e[r].vars.id === t) return e[r]
        }, e.remove = function remove(t) {
            return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (t.parent === this && za(this, t), t === this._recent && (this._recent = this._last), Ba(this))
        }, e.totalTime = function totalTime(t, e) {
            return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Rt.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
        }, e.addLabel = function addLabel(t, e) {
            return this.labels[t] = xt(this, e), this
        }, e.removeLabel = function removeLabel(t) {
            return delete this.labels[t], this
        }, e.addPause = function addPause(t, e, r) {
            var i = Jt.delayedCall(0, e || T, r);
            return i.data = "isPause", this._hasPause = 1, La(this, i, xt(this, t))
        }, e.removePause = function removePause(t) {
            var e = this._first;
            for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && Aa(e), e = e._next
        }, e.killTweensOf = function killTweensOf(t, e, r) {
            for (var i = this.getTweensOf(t, r), n = i.length; n--;) Ut !== i[n] && i[n].kill(t, e);
            return this
        }, e.getTweensOf = function getTweensOf(e, r) {
            for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof Jt ? la(s._targets, a) && (o ? (!Ut || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
            return n
        }, e.tweenTo = function tweenTo(t, e) {
            e = e || {};
            var r, i = this,
                n = xt(i, t),
                a = e.startAt,
                s = e.onStart,
                o = e.onStartParams,
                u = e.immediateRender,
                h = Jt.to(i, ra({
                    ease: e.ease || "none",
                    lazy: !1,
                    immediateRender: !1,
                    time: n,
                    overwrite: "auto",
                    duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || U,
                    onStart: function onStart() {
                        if (i.pause(), !r) {
                            var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                            h._dur !== t && Sa(h, t, 0, 1).render(h._time, !0, !0), r = 1
                        }
                        s && s.apply(h, o || [])
                    }
                }, e));
            return u ? h.render(0) : h
        }, e.tweenFromTo = function tweenFromTo(t, e, r) {
            return this.tweenTo(e, ra({
                startAt: {
                    time: xt(this, t)
                }
            }, r))
        }, e.recent = function recent() {
            return this._recent
        }, e.nextLabel = function nextLabel(t) {
            return void 0 === t && (t = this._time), sb(this, xt(this, t))
        }, e.previousLabel = function previousLabel(t) {
            return void 0 === t && (t = this._time), sb(this, xt(this, t), 1)
        }, e.currentLabel = function currentLabel(t) {
            return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + U)
        }, e.shiftChildren = function shiftChildren(t, e, r) {
            void 0 === r && (r = 0);
            for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
            if (e)
                for (i in a) a[i] >= r && (a[i] += t);
            return Ba(this)
        }, e.invalidate = function invalidate(t) {
            var e = this._first;
            for (this._lock = 0; e;) e.invalidate(t), e = e._next;
            return i.prototype.invalidate.call(this, t)
        }, e.clear = function clear(t) {
            void 0 === t && (t = !0);
            for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
            return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Ba(this)
        }, e.totalDuration = function totalDuration(t) {
            var e, r, i, n = 0,
                a = this,
                s = a._last,
                o = N;
            if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
            if (a._dirty) {
                for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, La(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
                Sa(a, a === I && a._time > n ? a._time : n, 1, 1), a._dirty = 0
            }
            return a._tDur
        }, Timeline.updateRoot = function updateRoot(t) {
            if (I._ts && (oa(I, Ha(t, I)), f = Rt.frame), Rt.frame >= mt) {
                mt += X.autoSleep || 120;
                var e = I._first;
                if ((!e || !e._ts) && X.autoSleep && Rt._listeners.length < 2) {
                    for (; e && !e._ts;) e = e._next;
                    e || Rt.sleep()
                }
            }
        }, Timeline
    }(Nt);
    ra(Qt.prototype, {
        _lock: 0,
        _hasPause: 0,
        _forcing: 0
    });

    function bc(t, e, i, n, a, o) {
        var u, h, l, f;
        if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
                if (s(t) && (t = Gt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || J(t)) return r(t) ? Gt(t, a, e, i, n) : t;
                var o, u = {};
                for (o in t) u[o] = Gt(t[o], a, e, i, n);
                return u
            }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new ge(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== d))
            for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
        return u
    }

    function hc(t, r, e, i) {
        var n, a, s = r.ease || i || "power1.inOut";
        if ($(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
            return a.push({
                t: e / (r.length - 1) * 100,
                v: t,
                e: s
            })
        });
        else
            for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
                t: parseFloat(t),
                v: r[n],
                e: s
            })
    }
    var Ut, qt, Vt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
            s(n) && (n = n(a || 0, t, o));
            var d, c = t[e],
                p = "get" !== i ? i : s(c) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : c,
                _ = s(c) ? l ? re : te : $t;
            if (r(n) && (~n.indexOf("random(") && (n = pb(n)), "=" === n.charAt(1) && (!(d = ka(p, n) + (Za(p) || 0)) && 0 !== d || (n = d))), !f || p !== n || qt) return isNaN(p * n) || "" === n ? (c || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
                var o, u, h, l, f, d, c, p, _ = new ge(this._pt, t, e, 0, 1, oe, null, n),
                    m = 0,
                    g = 0;
                for (_.b = r, _.e = i, r += "", (c = ~(i += "").indexOf("random(")) && (i = pb(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (d = parseFloat(u[g - 1]) || 0, _._pt = {
                    _next: _._pt,
                    p: f || 1 === g ? f : ",",
                    s: d,
                    c: "=" === l.charAt(1) ? ka(d, l) - d : parseFloat(l) - d,
                    m: h && h < 4 ? Math.round : 0
                }, m = it.lastIndex);
                return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || c) && (_.e = 0), this._pt = _
            }.call(this, t, e, p, n, _, h || X.stringFilter, l)) : (d = new ge(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof c ? se : ne, 0, _), l && (d.fp = l), u && d.modifier(u, this, t), this._pt = d)
        },
        Wt = function _initTween(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m = t.vars,
                g = m.ease,
                v = m.startAt,
                y = m.immediateRender,
                T = m.lazy,
                b = m.onUpdate,
                x = m.runBackwards,
                M = m.yoyoEase,
                k = m.keyframes,
                O = m.autoRevert,
                A = t._dur,
                P = t._startAt,
                C = t._targets,
                S = t.parent,
                D = S && "nested" === S.data ? S.vars.targets : C,
                z = "auto" === t._overwrite && !F,
                E = t.timeline;
            if (!E || k && g || (g = "none"), t._ease = Yt(g, Z.ease), t._yEase = M ? jt(Yt(!0 === M ? g : M, Z.ease)) : 0, M && t._yoyo && !t._repeat && (M = t._yEase, t._yEase = t._ease, t._ease = M), t._from = !E && !!m.runBackwards, !E || k && !m.stagger) {
                if (p = (l = C[0] ? fa(C[0]).harness : 0) && m[l.prop], i = va(m, ft), P && (P._zTime < 0 && P.progress(1), e < 0 && x && y && !O ? P.render(-1, !0) : P.revert(x && A ? ht : ut), P._lazy = 0), v) {
                    if (Aa(t._startAt = Jt.set(C, ra({
                            data: "isStart",
                            overwrite: !1,
                            parent: S,
                            immediateRender: !0,
                            lazy: !P && w(T),
                            startAt: null,
                            delay: 0,
                            onUpdate: b && function() {
                                return Pt(t, "onUpdate")
                            },
                            stagger: 0
                        }, v))), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L || !y && !O) && t._startAt.revert(ht), y && A && e <= 0 && r <= 0) return void(e && (t._zTime = e))
                } else if (x && A && !P)
                    if (e && (y = !1), a = ra({
                            overwrite: !1,
                            data: "isFromStart",
                            lazy: y && !P && w(T),
                            immediateRender: y,
                            stagger: 0,
                            parent: S
                        }, i), p && (a[l.prop] = p), Aa(t._startAt = Jt.set(C, a)), t._startAt._dp = 0, t._startAt._sat = t, e < 0 && (L ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                        if (!e) return
                    } else _initTween(t._startAt, U, U);
                for (t._pt = t._ptCache = 0, T = A && w(T) || T && !A, n = 0; n < C.length; n++) {
                    if (h = (o = C[n])._gsap || ea(C)[n]._gsap, t._ptLookup[n] = d = {}, ct[h.id] && dt.length && ma(), c = D === C ? n : D.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, c, D) && (t._pt = s = new ge(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                            d[t] = s
                        }), f.priority && (u = 1)), !l || p)
                        for (a in i) pt[a] && (f = bc(a, i, t, c, o, D)) ? f.priority && (u = 1) : d[a] = s = Vt.call(t, o, a, "get", i[a], c, D, 0, m.stringFilter);
                    t._op && t._op[n] && t.kill(o, t._op[n]), z && t._pt && (Ut = t, I.killTweensOf(o, d, t.globalTime(e)), _ = !t.parent, Ut = 0), t._pt && T && (ct[h.id] = 1)
                }
                u && _e(t), t._onInit && t._onInit(t)
            }
            t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, k && e <= 0 && E.render(N, !0, !0)
        },
        Gt = function _parseFuncOrString(t, e, i, n, a) {
            return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? pb(t) : t
        },
        Ht = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
        Kt = {};
    ha(Ht + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
        return Kt[t] = 1
    });
    var Jt = function(E) {
        function Tween(e, r, i, n) {
            var a;
            "number" == typeof r && (i.duration = r, r = i, i = null);
            var s, o, u, h, l, f, d, c, p = (a = E.call(this, n ? r : wa(r)) || this).vars,
                _ = p.duration,
                m = p.delay,
                g = p.immediateRender,
                T = p.stagger,
                b = p.overwrite,
                x = p.keyframes,
                M = p.defaults,
                k = p.scrollTrigger,
                O = p.yoyoEase,
                A = r.parent || I,
                P = ($(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
            if (a._targets = P.length ? ea(P) : R("GSAP target " + e + " not found. https://gsap.com", !X.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
                if (r = a.vars, (s = a.timeline = new Qt({
                        data: "nested",
                        defaults: M || {},
                        targets: A && "nested" === A.data ? A.vars.targets : P
                    })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                    if (h = P.length, d = T && fb(T), v(T))
                        for (l in T) ~Ht.indexOf(l) && ((c = c || {})[l] = T[l]);
                    for (o = 0; o < h; o++)(u = va(r, Kt)).stagger = 0, O && (u.yoyoEase = O), c && yt(u, c), f = P[o], u.duration = +Gt(_, _assertThisInitialized(a), o, f, P), u.delay = (+Gt(m, _assertThisInitialized(a), o, f, P) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, d ? d(o, f, P) : 0), s._ease = Lt.none;
                    s.duration() ? _ = m = 0 : a.timeline = 0
                } else if (x) {
                    wa(ra(s.vars.defaults, {
                        ease: "none"
                    })), s._ease = Yt(x.ease || r.ease || "none");
                    var C, S, D, z = 0;
                    if ($(x)) x.forEach(function(t) {
                        return s.to(P, t, ">")
                    }), s.duration();
                    else {
                        for (l in u = {}, x) "ease" === l || "easeEach" === l || hc(l, x[l], u, x.easeEach);
                        for (l in u)
                            for (C = u[l].sort(function(t, e) {
                                    return t.t - e.t
                                }), o = z = 0; o < C.length; o++)(D = {
                                ease: (S = C[o]).e,
                                duration: (S.t - (o ? C[o - 1].t : 0)) / 100 * _
                            })[l] = S.v, s.to(P, D, z), z += D.duration;
                        s.duration() < _ && s.to({}, {
                            duration: _ - s.duration()
                        })
                    }
                }
                _ || a.duration(_ = s.duration())
            } else a.timeline = 0;
            return !0 !== b || F || (Ut = _assertThisInitialized(a), I.killTweensOf(P), Ut = 0), La(A, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(A._time) && w(g) && function _hasNoPausedAncestors(t) {
                return !t || t._ts && _hasNoPausedAncestors(t.parent)
            }(_assertThisInitialized(a)) && "nested" !== A.data) && (a._tTime = -U, a.render(Math.max(0, -m) || 0)), k && Ma(_assertThisInitialized(a), k), a
        }
        _inheritsLoose(Tween, E);
        var e = Tween.prototype;
        return e.render = function render(t, e, r) {
            var i, n, a, s, o, u, h, l, f, d = this._time,
                c = this._tDur,
                p = this._dur,
                _ = t < 0,
                m = c - U < t && !_ ? c : t < U ? 0 : t;
            if (p) {
                if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _ || this._lazy) {
                    if (i = m, l = this.timeline, this._repeat) {
                        if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                        if (i = ja(m % s), m === c ? (a = this._repeat, i = p) : (a = ~~(o = ja(m / s))) && a === o ? (i = p, a--) : p < i && (i = p), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === d && !r && this._initted && a === o) return this._tTime = m, this;
                        a !== o && (l && this._yEase && Rb(l, u), this.vars.repeatRefresh && !u && !this._lock && i !== s && this._initted && (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                    }
                    if (!this._initted) {
                        if (Na(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                        if (!(d === this._time || r && this.vars.repeatRefresh && a !== o)) return this;
                        if (p !== this._dur) return this.render(t, e, r)
                    }
                    if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), !d && m && !e && !o && (Pt(this, "onStart"), this._tTime !== m)) return this;
                    for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                    l && l.render(t < 0 ? t : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Da(this, t, 0, r), Pt(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Pt(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Da(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || Aa(this, 1), e || _ && !d || !(m || d || u) || (Pt(this, m === c ? "onComplete" : "onReverseComplete", !0), !this._prom || m < c && 0 < this.timeScale() || this._prom()))
                }
            } else ! function _renderZeroDurationTween(t, e, r, i) {
                var n, a, s, o = t.ratio,
                    u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                        var e = t.parent;
                        return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                    }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
                    h = t._rDelay,
                    l = 0;
                if (h && t._repeat && (l = Mt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || L || i || t._zTime === U || !e && t._zTime) {
                    if (!t._initted && Na(t, e, i, r, l)) return;
                    for (s = t._zTime, t._zTime = e || (r ? U : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                    e < 0 && Da(t, e, 0, !0), t._onUpdate && !r && Pt(t, "onUpdate"), l && t._repeat && !r && t.parent && Pt(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && Aa(t, 1), r || L || (Pt(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
                } else t._zTime || (t._zTime = e)
            }(this, t, e, r);
            return this
        }, e.targets = function targets() {
            return this._targets
        }, e.invalidate = function invalidate(t) {
            return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), E.prototype.invalidate.call(this, t)
        }, e.resetTo = function resetTo(t, e, r, i, n) {
            c || Rt.wake(), this._ts || this.play();
            var a, s = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
            return this._initted || Wt(this, s), a = this._ease(s / this._dur),
                function _updatePropTweens(t, e, r, i, n, a, s, o) {
                    var u, h, l, f, d = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                    if (!d)
                        for (d = t._ptCache[e] = [], l = t._ptLookup, f = t._targets.length; f--;) {
                            if ((u = l[f][e]) && u.d && u.d._pt)
                                for (u = u.d._pt; u && u.p !== e && u.fp !== e;) u = u._next;
                            if (!u) return qt = 1, t.vars[e] = "+=0", Wt(t, s), qt = 0, o ? R(e + " not eligible for reset") : 1;
                            d.push(u)
                        }
                    for (f = d.length; f--;)(u = (h = d[f])._pt || h).s = !i && 0 !== i || n ? u.s + (i || 0) + a * u.c : i, u.c = r - u.s, h.e && (h.e = ia(r) + Za(h.e)), h.b && (h.b = u.s + Za(h.b))
                }(this, t, e, r, i, a, s, n) ? this.resetTo(t, e, r, i, 1) : (Ja(this, 0), this.parent || ya(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
        }, e.kill = function kill(t, e) {
            if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? ub(this) : this.scrollTrigger && this.scrollTrigger.kill(!!L), this;
            if (this.timeline) {
                var i = this.timeline.totalDuration();
                return this.timeline.killTweensOf(t, e, Ut && !0 !== Ut.vars.overwrite)._first || ub(this), this.parent && i !== this.timeline.totalDuration() && Sa(this, this._dur * this.timeline._tDur / i, 0, 1), this
            }
            var n, a, s, o, u, h, l, f = this._targets,
                d = t ? Ot(t) : f,
                c = this._ptLookup,
                p = this._pt;
            if ((!e || "all" === e) && function _arraysMatch(t, e) {
                    for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                    return r < 0
                }(f, d)) return "all" === e && (this._pt = 0), ub(this);
            for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
                    return u[t] = 1
                }), e = u), e = function _addAliasesToVars(t, e) {
                    var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
                        o = s && s.aliases;
                    if (!o) return e;
                    for (i in r = yt({}, e), o)
                        if (i in r)
                            for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                    return r
                }(f, e)), l = f.length; l--;)
                if (~d.indexOf(f[l]))
                    for (u in a = c[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || za(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
            return this._initted && !this._pt && p && ub(this), this
        }, Tween.to = function to(t, e, r) {
            return new Tween(t, e, r)
        }, Tween.from = function from(t, e) {
            return Wa(1, arguments)
        }, Tween.delayedCall = function delayedCall(t, e, r, i) {
            return new Tween(e, 0, {
                immediateRender: !1,
                lazy: !1,
                overwrite: !1,
                delay: t,
                onComplete: e,
                onReverseComplete: e,
                onCompleteParams: r,
                onReverseCompleteParams: r,
                callbackScope: i
            })
        }, Tween.fromTo = function fromTo(t, e, r) {
            return Wa(2, arguments)
        }, Tween.set = function set(t, e) {
            return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
        }, Tween.killTweensOf = function killTweensOf(t, e, r) {
            return I.killTweensOf(t, e, r)
        }, Tween
    }(Nt);
    ra(Jt.prototype, {
        _targets: [],
        _lazy: 0,
        _startAt: 0,
        _op: 0,
        _onInit: 0
    }), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
        Jt[r] = function() {
            var t = new Qt,
                e = kt.call(arguments, 0);
            return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
        }
    });

    function pc(t, e, r) {
        return t.setAttribute(e, r)
    }

    function xc(t, e, r, i) {
        i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
    }
    var $t = function _setterPlain(t, e, r) {
            return t[e] = r
        },
        te = function _setterFunc(t, e, r) {
            return t[e](r)
        },
        re = function _setterFuncWithParam(t, e, r, i) {
            return t[e](i.fp, r)
        },
        ie = function _getSetter(t, e) {
            return s(t[e]) ? te : u(t[e]) && t.setAttribute ? pc : $t
        },
        ne = function _renderPlain(t, e) {
            return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
        },
        se = function _renderBoolean(t, e) {
            return e.set(e.t, e.p, !!(e.s + e.c * t), e)
        },
        oe = function _renderComplexString(t, e) {
            var r = e._pt,
                i = "";
            if (!t && e.b) i = e.b;
            else if (1 === t && e.e) i = e.e;
            else {
                for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
                i += e.c
            }
            e.set(e.t, e.p, i, e)
        },
        ue = function _renderPropTweens(t, e) {
            for (var r = e._pt; r;) r.r(t, r.d), r = r._next
        },
        he = function _addPluginModifier(t, e, r, i) {
            for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
        },
        de = function _killPropTweensOf(t) {
            for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? za(this, i, "_pt") : i.dep || (e = 1), i = r;
            return !e
        },
        _e = function _sortPropTweensByPriority(t) {
            for (var e, r, i, n, a = t._pt; a;) {
                for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
                (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
            }
            t._pt = i
        },
        ge = (PropTween.prototype.modifier = function modifier(t, e, r) {
            this.mSet = this.mSet || this.set, this.set = xc, this.m = t, this.mt = r, this.tween = e
        }, PropTween);

    function PropTween(t, e, r, i, n, a, s, o, u) {
        this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ne, this.d = s || this, this.set = o || $t, this.pr = u || 0, (this._next = t) && (t._prev = this)
    }
    ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
        return ft[t] = 1
    }), ot.TweenMax = ot.TweenLite = Jt, ot.TimelineLite = ot.TimelineMax = Qt, I = new Qt({
        sortChildren: !1,
        defaults: Z,
        autoRemoveChildren: !0,
        id: "root",
        smoothChildTiming: !0
    }), X.stringFilter = Gb;

    function Fc(t) {
        return (be[t] || Me).map(function(t) {
            return t()
        })
    }

    function Gc() {
        var t = Date.now(),
            o = [];
        2 < t - Oe && (Fc("matchMediaInit"), Te.forEach(function(t) {
            var e, r, i, n, a = t.queries,
                s = t.conditions;
            for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
            n && (t.revert(), i && o.push(t))
        }), Fc("matchMediaRevert"), o.forEach(function(e) {
            return e.onMatch(e, function(t) {
                return e.add(null, t)
            })
        }), Oe = t, Fc("matchMedia"))
    }
    var ve, Te = [],
        be = {},
        Me = [],
        Oe = 0,
        Ae = 0,
        Pe = ((ve = Context.prototype).add = function add(t, i, n) {
            function Iw() {
                var t, e = l,
                    r = a.selector;
                return e && e !== a && e.data.push(a), n && (a.selector = db(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
            }
            s(t) && (n = i, i = t, t = s);
            var a = this;
            return a.last = Iw, t === s ? Iw(a, function(t) {
                return a.add(null, t)
            }) : t ? a[t] = Iw : Iw
        }, ve.ignore = function ignore(t) {
            var e = l;
            l = null, t(this), l = e
        }, ve.getTweens = function getTweens() {
            var e = [];
            return this.data.forEach(function(t) {
                return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Jt && !(t.parent && "nested" === t.parent.data) && e.push(t)
            }), e
        }, ve.clear = function clear() {
            this._r.length = this.data.length = 0
        }, ve.kill = function kill(i, t) {
            var n = this;
            if (i ? function() {
                    for (var t, e = n.getTweens(), r = n.data.length; r--;) "isFlip" === (t = n.data[r]).data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                        return e.splice(e.indexOf(t), 1)
                    }));
                    for (e.map(function(t) {
                            return {
                                g: t._dur || t._delay || t._sat && !t._sat.vars.immediateRender ? t.globalTime(0) : -1 / 0,
                                t: t
                            }
                        }).sort(function(t, e) {
                            return e.g - t.g || -1 / 0
                        }).forEach(function(t) {
                            return t.t.revert(i)
                        }), r = n.data.length; r--;)(t = n.data[r]) instanceof Qt ? "nested" !== t.data && (t.scrollTrigger && t.scrollTrigger.revert(), t.kill()) : t instanceof Jt || !t.revert || t.revert(i);
                    n._r.forEach(function(t) {
                        return t(i, n)
                    }), n.isReverted = !0
                }() : this.data.forEach(function(t) {
                    return t.kill && t.kill()
                }), this.clear(), t)
                for (var e = Te.length; e--;) Te[e].id === this.id && Te.splice(e, 1)
        }, ve.revert = function revert(t) {
            this.kill(t || {})
        }, Context);

    function Context(t, e) {
        this.selector = e && db(e), this.data = [], this._r = [], this.isReverted = !1, this.id = Ae++, t && this.add(t)
    }
    var Ce, Se = ((Ce = MatchMedia.prototype).add = function add(t, e, r) {
        v(t) || (t = {
            matches: t
        });
        var i, n, a, s = new Pe(0, r || this.scope),
            o = s.conditions = {};
        for (n in l && !s.selector && (s.selector = l.selector), this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (Te.indexOf(s) < 0 && Te.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Gc) : i.addEventListener("change", Gc));
        return a && e(s, function(t) {
            return s.add(null, t)
        }), this
    }, Ce.revert = function revert(t) {
        this.kill(t || {})
    }, Ce.kill = function kill(e) {
        this.contexts.forEach(function(t) {
            return t.kill(e, !0)
        })
    }, MatchMedia);

    function MatchMedia(t) {
        this.contexts = [], this.scope = t, l && l.data.push(this)
    }
    var De = {
        registerPlugin: function registerPlugin() {
            for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
            e.forEach(function(t) {
                return xb(t)
            })
        },
        timeline: function timeline(t) {
            return new Qt(t)
        },
        getTweensOf: function getTweensOf(t, e) {
            return I.getTweensOf(t, e)
        },
        getProperty: function getProperty(i, t, e, n) {
            r(i) && (i = Ot(i)[0]);
            var a = fa(i || {}).get,
                s = e ? qa : pa;
            return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
                return s((pt[t] && pt[t].get || a)(i, t, e, r))
            } : i
        },
        quickSetter: function quickSetter(r, e, i) {
            if (1 < (r = Ot(r)).length) {
                var n = r.map(function(t) {
                        return ze.quickSetter(t, e, i)
                    }),
                    a = n.length;
                return function(t) {
                    for (var e = a; e--;) n[e](t)
                }
            }
            r = r[0] || {};
            var s = pt[e],
                o = fa(r),
                u = o.harness && (o.harness.aliases || {})[e] || e,
                h = s ? function(t) {
                    var e = new s;
                    d._pt = 0, e.init(r, i ? t + i : t, d, 0, [r]), e.render(1, e), d._pt && ue(1, d)
                } : o.set(r, u);
            return s ? h : function(t) {
                return h(r, u, i ? t + i : t, o, 1)
            }
        },
        quickTo: function quickTo(t, i, e) {
            function ay(t, e, r) {
                return n.resetTo(i, t, e, r)
            }
            var r, n = ze.to(t, ra(((r = {})[i] = "+=0.1", r.paused = !0, r.stagger = 0, r), e || {}));
            return ay.tween = n, ay
        },
        isTweening: function isTweening(t) {
            return 0 < I.getTweensOf(t, !0).length
        },
        defaults: function defaults(t) {
            return t && t.ease && (t.ease = Yt(t.ease, Z.ease)), ua(Z, t || {})
        },
        config: function config(t) {
            return ua(X, t || {})
        },
        registerEffect: function registerEffect(t) {
            var i = t.name,
                n = t.effect,
                e = t.plugins,
                a = t.defaults,
                r = t.extendTimeline;
            (e || "").split(",").forEach(function(t) {
                return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
            }), _t[i] = function(t, e, r) {
                return n(Ot(t), ra(e || {}, a), r)
            }, r && (Qt.prototype[i] = function(t, e, r) {
                return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
            })
        },
        registerEase: function registerEase(t, e) {
            Lt[t] = Yt(e)
        },
        parseEase: function parseEase(t, e) {
            return arguments.length ? Yt(t, e) : Lt
        },
        getById: function getById(t) {
            return I.getById(t)
        },
        exportRoot: function exportRoot(t, e) {
            void 0 === t && (t = {});
            var r, i, n = new Qt(t);
            for (n.smoothChildTiming = w(t.smoothChildTiming), I.remove(n), n._dp = 0, n._time = n._tTime = I._time, r = I._first; r;) i = r._next, !e && !r._dur && r instanceof Jt && r.vars.onComplete === r._targets[0] || La(n, r, r._start - r._delay), r = i;
            return La(I, n, 0), n
        },
        context: function context(t, e) {
            return t ? new Pe(t, e) : l
        },
        matchMedia: function matchMedia(t) {
            return new Se(t)
        },
        matchMediaRefresh: function matchMediaRefresh() {
            return Te.forEach(function(t) {
                var e, r, i = t.conditions;
                for (r in i) i[r] && (i[r] = !1, e = 1);
                e && t.revert()
            }) || Gc()
        },
        addEventListener: function addEventListener(t, e) {
            var r = be[t] || (be[t] = []);
            ~r.indexOf(e) || r.push(e)
        },
        removeEventListener: function removeEventListener(t, e) {
            var r = be[t],
                i = r && r.indexOf(e);
            0 <= i && r.splice(i, 1)
        },
        utils: {
            wrap: function wrap(e, t, r) {
                var i = t - e;
                return $(e) ? mb(e, wrap(0, e.length), t) : Xa(r, function(t) {
                    return (i + (t - e) % i) % i + e
                })
            },
            wrapYoyo: function wrapYoyo(e, t, r) {
                var i = t - e,
                    n = 2 * i;
                return $(e) ? mb(e, wrapYoyo(0, e.length - 1), t) : Xa(r, function(t) {
                    return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
                })
            },
            distribute: fb,
            random: ib,
            snap: hb,
            normalize: function normalize(t, e, r) {
                return At(t, e, 0, 1, r)
            },
            getUnit: Za,
            clamp: function clamp(e, r, t) {
                return Xa(t, function(t) {
                    return Mt(e, r, t)
                })
            },
            splitColor: Bb,
            toArray: Ot,
            selector: db,
            mapRange: At,
            pipe: function pipe() {
                for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
                return function(t) {
                    return e.reduce(function(t, e) {
                        return e(t)
                    }, t)
                }
            },
            unitize: function unitize(e, r) {
                return function(t) {
                    return e(parseFloat(t)) + (r || Za(t))
                }
            },
            interpolate: function interpolate(e, i, t, n) {
                var a = isNaN(e + i) ? 0 : function(t) {
                    return (1 - t) * e + t * i
                };
                if (!a) {
                    var s, o, u, h, l, f = r(e),
                        d = {};
                    if (!0 === t && (n = 1) && (t = null), f) e = {
                        p: e
                    }, i = {
                        p: i
                    };
                    else if ($(e) && !$(i)) {
                        for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                        h--, a = function func(t) {
                            t *= h;
                            var e = Math.min(l, ~~t);
                            return u[e](t - e)
                        }, t = i
                    } else n || (e = yt($(e) ? [] : {}, e));
                    if (!u) {
                        for (s in i) Vt.call(d, e, s, "get", i[s]);
                        a = function func(t) {
                            return ue(t, d) || (f ? e.p : e)
                        }
                    }
                }
                return Xa(t, a)
            },
            shuffle: eb
        },
        install: P,
        effects: _t,
        ticker: Rt,
        updateRoot: Qt.updateRoot,
        plugins: pt,
        globalTimeline: I,
        core: {
            PropTween: ge,
            globals: S,
            Tween: Jt,
            Timeline: Qt,
            Animation: Nt,
            getCache: fa,
            _removeLinkedListItem: za,
            reverting: function reverting() {
                return L
            },
            context: function context(t) {
                return t && l && (l.data.push(t), t._ctx = l), l
            },
            suppressOverwrites: function suppressOverwrites(t) {
                return F = t
            }
        }
    };
    ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
        return De[t] = Jt[t]
    }), Rt.add(Qt.updateRoot), d = De.to({}, {
        duration: 0
    });

    function Kc(t, e) {
        for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
        return r
    }

    function Mc(t, a) {
        return {
            name: t,
            headless: 1,
            rawVars: 1,
            init: function init(t, n, e) {
                e._onInit = function(t) {
                    var e, i;
                    if (r(n) && (e = {}, ha(n, function(t) {
                            return e[t] = 1
                        }), n = e), a) {
                        for (i in e = {}, n) e[i] = a(n[i]);
                        n = e
                    }! function _addModifiers(t, e) {
                        var r, i, n, a = t._targets;
                        for (r in e)
                            for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Kc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                    }(t, n)
                }
            }
        }
    }
    var ze = De.registerPlugin({
        name: "attr",
        init: function init(t, e, r, i, n) {
            var a, s, o;
            for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
        },
        render: function render(t, e) {
            for (var r = e._pt; r;) L ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
        }
    }, {
        name: "endArray",
        headless: 1,
        init: function init(t, e) {
            for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
        }
    }, Mc("roundProps", gb), Mc("modifiers"), Mc("snap", hb)) || De;
    Jt.version = Qt.version = ze.version = "3.13.0", o = 1, x() && Ft();

    function wd(t, e) {
        return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function xd(t, e) {
        return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
    }

    function yd(t, e) {
        return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
    }

    function zd(t, e) {
        var r = e.s + e.c * t;
        e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
    }

    function Ad(t, e) {
        return e.set(e.t, e.p, t ? e.e : e.b, e)
    }

    function Bd(t, e) {
        return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
    }

    function Cd(t, e, r) {
        return t.style[e] = r
    }

    function Dd(t, e, r) {
        return t.style.setProperty(e, r)
    }

    function Ed(t, e, r) {
        return t._gsap[e] = r
    }

    function Fd(t, e, r) {
        return t._gsap.scaleX = t._gsap.scaleY = r
    }

    function Gd(t, e, r, i, n) {
        var a = t._gsap;
        a.scaleX = a.scaleY = r, a.renderTransform(n, a)
    }

    function Hd(t, e, r, i, n) {
        var a = t._gsap;
        a[e] = r, a.renderTransform(n, a)
    }

    function Kd(t, e) {
        var r = this,
            i = this.target,
            n = i.style,
            a = i._gsap;
        if (t in sr && n) {
            if (this.tfm = this.tfm || {}, "transform" === t) return cr.transform.split(",").forEach(function(t) {
                return Kd.call(r, t, e)
            });
            if (~(t = cr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                    return r.tfm[t] = Tr(i, t)
                }) : this.tfm[t] = a.x ? a[t] : Tr(i, t), t === _r && (this.tfm.zOrigin = a.zOrigin), 0 <= this.props.indexOf(pr)) return;
            a.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(_r, e, "")), t = pr
        }(n || e) && this.props.push(t, e, n[t])
    }

    function Ld(t) {
        t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
    }

    function Md() {
        var t, e, r = this.props,
            i = this.target,
            n = i.style,
            a = i._gsap;
        for (t = 0; t < r.length; t += 3) r[t + 1] ? 2 === r[t + 1] ? i[r[t]](r[t + 2]) : i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty("--" === r[t].substr(0, 2) ? r[t] : r[t].replace(lr, "-$1").toLowerCase());
        if (this.tfm) {
            for (e in this.tfm) a[e] = this.tfm[e];
            a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), (t = Ye()) && t.isStart || n[pr] || (Ld(n), a.zOrigin && n[_r] && (n[_r] += " " + a.zOrigin + "px", a.zOrigin = 0, a.renderTransform()), a.uncache = 1)
        }
    }

    function Nd(t, e) {
        var r = {
            target: t,
            props: [],
            revert: Md,
            save: Kd
        };
        return t._gsap || ze.core.getCache(t), e && t.style && t.nodeType && e.split(",").forEach(function(t) {
            return r.save(t)
        }), r
    }

    function Pd(t, e) {
        var r = Re.createElementNS ? Re.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Re.createElement(t);
        return r && r.style ? r : Re.createElement(t)
    }

    function Qd(t, e, r) {
        var i = getComputedStyle(t);
        return i[e] || i.getPropertyValue(e.replace(lr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Qd(t, gr(e) || e, 1) || ""
    }

    function Td() {
        (function _windowExists() {
            return "undefined" != typeof window
        })() && window.document && (Ee = window, Re = Ee.document, Fe = Re.documentElement, Ie = Pd("div") || {
            style: {}
        }, Pd("div"), pr = gr(pr), _r = pr + "Origin", Ie.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Xe = !!gr("perspective"), Ye = ze.core.reverting, Le = 1)
    }

    function Ud(t) {
        var e, r = t.ownerSVGElement,
            i = Pd("svg", r && r.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            n = t.cloneNode(!0);
        n.style.display = "block", i.appendChild(n), Fe.appendChild(i);
        try {
            e = n.getBBox()
        } catch (t) {}
        return i.removeChild(n), Fe.removeChild(i), e
    }

    function Vd(t, e) {
        for (var r = e.length; r--;)
            if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
    }

    function Wd(e) {
        var r, i;
        try {
            r = e.getBBox()
        } catch (t) {
            r = Ud(e), i = 1
        }
        return r && (r.width || r.height) || i || (r = Ud(e)), !r || r.width || r.x || r.y ? r : {
            x: +Vd(e, ["x", "cx", "x1"]) || 0,
            y: +Vd(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        }
    }

    function Xd(t) {
        return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Wd(t))
    }

    function Yd(t, e) {
        if (e) {
            var r, i = t.style;
            e in sr && e !== _r && (e = pr), i.removeProperty ? ("ms" !== (r = e.substr(0, 2)) && "webkit" !== e.substr(0, 6) || (e = "-" + e), i.removeProperty("--" === r ? e : e.replace(lr, "-$1").toLowerCase())) : i.removeAttribute(e)
        }
    }

    function Zd(t, e, r, i, n, a) {
        var s = new ge(t._pt, e, r, 0, 1, a ? Bd : Ad);
        return (t._pt = s).b = i, s.e = n, t._props.push(r), s
    }

    function ae(t, e, r, i) {
        var n, a, s, o, u = parseFloat(r) || 0,
            h = (r + "").trim().substr((u + "").length) || "px",
            l = Ie.style,
            f = fr.test(e),
            d = "svg" === t.tagName.toLowerCase(),
            c = (d ? "client" : "offset") + (f ? "Width" : "Height"),
            p = "px" === i,
            _ = "%" === i;
        if (i === h || !u || vr[i] || vr[h]) return u;
        if ("px" === h || p || (u = ae(t, e, r, "px")), o = t.getCTM && Xd(t), (_ || "%" === h) && (sr[e] || ~e.indexOf("adius"))) return n = o ? t.getBBox()[f ? "width" : "height"] : t[c], ia(_ ? u / n * 100 : u / 100 * n);
        if (l[f ? "width" : "height"] = 100 + (p ? h : i), a = "rem" !== i && ~e.indexOf("adius") || "em" === i && t.appendChild && !d ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Re && a.appendChild || (a = Re.body), (s = a._gsap) && _ && s.width && f && s.time === Rt.time && !s.uncache) return ia(u / s.width * 100);
        if (!_ || "height" !== e && "width" !== e) !_ && "%" !== h || yr[Qd(a, "display")] || (l.position = Qd(t, "position")), a === t && (l.position = "static"), a.appendChild(Ie), n = Ie[c], a.removeChild(Ie), l.position = "absolute";
        else {
            var m = t.style[e];
            t.style[e] = 100 + i, n = t[c], m ? t.style[e] = m : Yd(t, e)
        }
        return f && _ && ((s = fa(a)).time = Rt.time, s.width = a[c]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0)
    }

    function ce(t, e, r, i) {
        if (!r || "none" === r) {
            var n = gr(e, t, 1),
                a = n && Qd(t, n, 1);
            a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Qd(t, "borderTopColor"))
        }
        var s, o, u, h, l, f, d, c, p, _, m, g = new ge(this._pt, t.style, e, 0, 1, oe),
            v = 0,
            y = 0;
        if (g.b = r, g.e = i, r += "", "var(--" === (i += "").substring(0, 6) && (i = Qd(t, i.substring(4, i.indexOf(")")))), "auto" === i && (f = t.style[e], t.style[e] = i, i = Qd(t, e) || i, f ? t.style[e] = f : Yd(t, e)), Gb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
            for (; o = rt.exec(i);) d = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), d !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === d.charAt(1) && (d = ka(h, d) + m), c = parseFloat(d), _ = d.substr((c + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || X.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = ae(t, e, f, _) || 0), g._pt = {
                _next: g._pt,
                p: p || 1 === y ? p : ",",
                s: h,
                c: c - h,
                m: l && l < 4 || "zIndex" === e ? Math.round : 0
            });
            g.c = v < i.length ? i.substring(v, i.length) : ""
        } else g.r = "display" === e && "none" === i ? Bd : Ad;
        return nt.test(i) && (g.e = 0), this._pt = g
    }

    function ee(t) {
        var e = t.split(" "),
            r = e[0],
            i = e[1] || "50%";
        return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = br[r] || r, e[1] = br[i] || i, e.join(" ")
    }

    function fe(t, e) {
        if (e.tween && e.tween._time === e.tween._dur) {
            var r, i, n, a = e.t,
                s = a.style,
                o = e.u,
                u = a._gsap;
            if ("all" === o || !0 === o) s.cssText = "", i = 1;
            else
                for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], sr[r] && (i = 1, r = "transformOrigin" === r ? _r : pr), Yd(a, r);
            i && (Yd(a, pr), u && (u.svg && a.removeAttribute("transform"), s.scale = s.rotate = s.translate = "none", kr(a, 1), u.uncache = 1, Ld(s)))
        }
    }

    function je(t) {
        return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
    }

    function ke(t) {
        var e = Qd(t, pr);
        return je(e) ? xr : e.substr(7).match(et).map(ia)
    }

    function le(t, e) {
        var r, i, n, a, s = t._gsap || fa(t),
            o = t.style,
            u = ke(t);
        return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? xr : u : (u !== xr || t.offsetParent || t === Fe || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && (t.offsetParent || t.getBoundingClientRect().width) || (a = 1, i = t.nextElementSibling, Fe.appendChild(t)), u = ke(t), n ? o.display = n : Yd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Fe.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
    }

    function me(t, e, r, i, n, a) {
        var s, o, u, h = t._gsap,
            l = n || le(t, !0),
            f = h.xOrigin || 0,
            d = h.yOrigin || 0,
            c = h.xOffset || 0,
            p = h.yOffset || 0,
            _ = l[0],
            m = l[1],
            g = l[2],
            v = l[3],
            y = l[4],
            T = l[5],
            b = e.split(" "),
            w = parseFloat(b[0]) || 0,
            x = parseFloat(b[1]) || 0;
        r ? l !== xr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Wd(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - d, h.xOffset = c + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[_r] = "0px 0px", a && (Zd(a, h, "xOrigin", f, w), Zd(a, h, "yOrigin", d, x), Zd(a, h, "xOffset", c, h.xOffset), Zd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
    }

    function pe(t, e, r) {
        var i = Za(e);
        return ia(parseFloat(e) + parseFloat(ae(t, "x", r + "px", i))) + i
    }

    function we(t, e, i, n, a) {
        var s, o, u = 360,
            h = r(a),
            l = parseFloat(a) * (h && ~a.indexOf("rad") ? or : 1) - n,
            f = n + l + "deg";
        return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new ge(t._pt, e, i, n, l, xd), o.e = f, o.u = "deg", t._props.push(i), o
    }

    function xe(t, e) {
        for (var r in e) t[r] = e[r];
        return t
    }

    function ye(t, e, r) {
        var i, n, a, s, o, u, h, l = xe({}, r._gsap),
            f = r.style;
        for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[pr] = e, i = kr(r, 1), Yd(r, pr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[pr], f[pr] = e, i = kr(r, 1), f[pr] = a), sr)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Za(a) !== (h = Za(s)) ? ae(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new ge(t._pt, i, n, o, u - o, wd), t._pt.u = h || 0, t._props.push(n));
        xe(i, l)
    }
    var Ee, Re, Fe, Le, Ie, Be, Ye, Xe, Ze = Lt.Power0,
        Ne = Lt.Power1,
        Qe = Lt.Power2,
        Ue = Lt.Power3,
        qe = Lt.Power4,
        Ve = Lt.Linear,
        We = Lt.Quad,
        Ge = Lt.Cubic,
        He = Lt.Quart,
        Ke = Lt.Quint,
        Je = Lt.Strong,
        $e = Lt.Elastic,
        tr = Lt.Back,
        er = Lt.SteppedEase,
        rr = Lt.Bounce,
        ir = Lt.Sine,
        nr = Lt.Expo,
        ar = Lt.Circ,
        sr = {},
        or = 180 / Math.PI,
        ur = Math.PI / 180,
        hr = Math.atan2,
        lr = /([A-Z])/g,
        fr = /(left|right|width|margin|padding|x)/i,
        dr = /[\s,\(]\S/,
        cr = {
            autoAlpha: "opacity,visibility",
            scale: "scaleX,scaleY",
            alpha: "opacity"
        },
        pr = "transform",
        _r = pr + "Origin",
        mr = "O,Moz,ms,Ms,Webkit".split(","),
        gr = function _checkPropPrefix(t, e, r) {
            var i = (e || Ie).style,
                n = 5;
            if (t in i && !r) return t;
            for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(mr[n] + t in i););
            return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? mr[n] : "") + t
        },
        vr = {
            deg: 1,
            rad: 1,
            turn: 1
        },
        yr = {
            grid: 1,
            flex: 1
        },
        Tr = function _get(t, e, r, i) {
            var n;
            return Le || Td(), e in cr && "transform" !== e && ~(e = cr[e]).indexOf(",") && (e = e.split(",")[0]), sr[e] && "transform" !== e ? (n = kr(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Or(Qd(t, _r)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = wr[e] && wr[e](t, e, r) || Qd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? ae(t, e, n, r) + r : n
        },
        br = {
            top: "0%",
            bottom: "100%",
            left: "0%",
            right: "100%",
            center: "50%"
        },
        wr = {
            clearProps: function clearProps(t, e, r, i, n) {
                if ("isFromStart" !== n.data) {
                    var a = t._pt = new ge(t._pt, e, r, 0, 0, fe);
                    return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
                }
            }
        },
        xr = [1, 0, 0, 1, 0, 0],
        Mr = {},
        kr = function _parseTransform(t, e) {
            var r = t._gsap || new Zt(t);
            if ("x" in r && !e && !r.uncache) return r;
            var i, n, a, s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w, x, M, k, O, A, P, C, S, D, z, E, R, F = t.style,
                L = r.scaleX < 0,
                I = "deg",
                B = getComputedStyle(t),
                j = Qd(t, _r) || "0";
            return i = n = a = u = h = l = f = d = c = 0, s = o = 1, r.svg = !(!t.getCTM || !Xd(t)), B.translate && ("none" === B.translate && "none" === B.scale && "none" === B.rotate || (F[pr] = ("none" !== B.translate ? "translate3d(" + (B.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== B.rotate ? "rotate(" + B.rotate + ") " : "") + ("none" !== B.scale ? "scale(" + B.scale.split(" ").join(",") + ") " : "") + ("none" !== B[pr] ? B[pr] : "")), F.scale = F.rotate = F.translate = "none"), m = le(t, r.svg), r.svg && (O = r.uncache ? (A = t.getBBox(), j = r.xOrigin - A.x + "px " + (r.yOrigin - A.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), me(t, O || j, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== xr && (T = m[0], b = m[1], w = m[2], x = m[3], i = M = m[4], n = k = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? hr(b, T) * or : 0, (f = w || x ? hr(w, x) * or + u : 0) && (o *= Math.abs(Math.cos(f * ur))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (R = m[6], z = m[7], C = m[8], S = m[9], D = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = hr(R, D)) * or, g && (O = M * (v = Math.cos(-g)) + C * (y = Math.sin(-g)), A = k * v + S * y, P = R * v + D * y, C = M * -y + C * v, S = k * -y + S * v, D = R * -y + D * v, E = z * -y + E * v, M = O, k = A, R = P), l = (g = hr(-w, D)) * or, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = O = T * v - C * y, b = A = b * v - S * y, w = P = w * v - D * y), u = (g = hr(b, T)) * or, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), A = M * v + k * y, b = b * v - T * y, k = k * v - M * y, T = O, M = A), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(k * k + R * R)), g = hr(M, k), f = 2e-4 < Math.abs(g) ? g * or : 0, c = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !je(Qd(t, pr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (L ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + I, r.rotationX = ia(h) + I, r.rotationY = ia(l) + I, r.skewX = f + I, r.skewY = d + I, r.transformPerspective = c + "px", (r.zOrigin = parseFloat(j.split(" ")[2]) || !e && r.zOrigin || 0) && (F[_r] = Or(j)), r.xOffset = r.yOffset = 0, r.force3D = X.force3D, r.renderTransform = r.svg ? zr : Xe ? Dr : Ar, r.uncache = 0, r
        },
        Or = function _firstTwoOnly(t) {
            return (t = t.split(" "))[0] + " " + t[1]
        },
        Ar = function _renderNon3DTransforms(t, e) {
            e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Dr(t, e)
        },
        Pr = "0deg",
        Cr = "0px",
        Sr = ") ",
        Dr = function _renderCSSTransforms(t, e) {
            var r = e || this,
                i = r.xPercent,
                n = r.yPercent,
                a = r.x,
                s = r.y,
                o = r.z,
                u = r.rotation,
                h = r.rotationY,
                l = r.rotationX,
                f = r.skewX,
                d = r.skewY,
                c = r.scaleX,
                p = r.scaleY,
                _ = r.transformPerspective,
                m = r.force3D,
                g = r.target,
                v = r.zOrigin,
                y = "",
                T = "auto" === m && t && 1 !== t || !0 === m;
            if (v && (l !== Pr || h !== Pr)) {
                var b, w = parseFloat(h) * ur,
                    x = Math.sin(w),
                    M = Math.cos(w);
                w = parseFloat(l) * ur, b = Math.cos(w), a = pe(g, a, x * b * -v), s = pe(g, s, -Math.sin(w) * -v), o = pe(g, o, M * b * -v + v)
            }
            _ !== Cr && (y += "perspective(" + _ + Sr), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Cr && s === Cr && o === Cr || (y += o !== Cr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Sr), u !== Pr && (y += "rotate(" + u + Sr), h !== Pr && (y += "rotateY(" + h + Sr), l !== Pr && (y += "rotateX(" + l + Sr), f === Pr && d === Pr || (y += "skew(" + f + ", " + d + Sr), 1 === c && 1 === p || (y += "scale(" + c + ", " + p + Sr), g.style[pr] = y || "translate(0, 0)"
        },
        zr = function _renderSVGTransforms(t, e) {
            var r, i, n, a, s, o = e || this,
                u = o.xPercent,
                h = o.yPercent,
                l = o.x,
                f = o.y,
                d = o.rotation,
                c = o.skewX,
                p = o.skewY,
                _ = o.scaleX,
                m = o.scaleY,
                g = o.target,
                v = o.xOrigin,
                y = o.yOrigin,
                T = o.xOffset,
                b = o.yOffset,
                w = o.forceCSS,
                x = parseFloat(l),
                M = parseFloat(f);
            d = parseFloat(d), c = parseFloat(c), (p = parseFloat(p)) && (c += p = parseFloat(p), d += p), d || c ? (d *= ur, c *= ur, r = Math.cos(d) * _, i = Math.sin(d) * _, n = Math.sin(d - c) * -m, a = Math.cos(d - c) * m, c && (p *= ur, s = Math.tan(c - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || M && !~(f + "").indexOf("px")) && (x = ae(g, "x", l, "px"), M = ae(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), M = ia(M + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), M = ia(M + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + M + ")", g.setAttribute("transform", s), w && (g.style[pr] = s)
        };
    ha("padding,margin,Width,Radius", function(e, r) {
        var t = "Right",
            i = "Bottom",
            n = "Left",
            o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
                return r < 2 ? e + t : "border" + t + e
            });
        wr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
            var a, s;
            if (arguments.length < 4) return a = o.map(function(t) {
                return Tr(e, t, r)
            }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
            a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
                return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
            }), e.init(t, s, n)
        }
    });
    var Er, Rr, Fr, Lr = {
        name: "css",
        register: Td,
        targetTest: function targetTest(t) {
            return t.style && t.nodeType
        },
        init: function init(t, e, i, n, a) {
            var s, o, u, h, l, f, d, c, p, _, m, g, v, y, T, b, w = this._props,
                x = t.style,
                M = i.vars.startAt;
            for (d in Le || Td(), this.styles = this.styles || Nd(t), b = this.styles.props, this.tween = i, e)
                if ("autoRound" !== d && (o = e[d], !pt[d] || !bc(d, e, i, n, t, a)))
                    if (l = typeof o, f = wr[d], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = pb(o)), f) f(this, t, d, o, i) && (T = 1);
                    else if ("--" === d.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(d) + "").trim(), o += "", zt.lastIndex = 0, zt.test(s) || (c = Za(s), p = Za(o)), p ? c !== p && (s = ae(t, d, s, p) + p) : c && (o += c), this.add(x, "setProperty", s, o, n, a, 0, 0, d), w.push(d), b.push(d, 0, x[d]);
            else if ("undefined" !== l) {
                if (M && d in M ? (s = "function" == typeof M[d] ? M[d].call(i, n, t, a) : M[d], r(s) && ~s.indexOf("random(") && (s = pb(s)), Za(s + "") || "auto" === s || (s += X.units[d] || Za(Tr(t, d)) || ""), "=" === (s + "").charAt(1) && (s = Tr(t, d))) : s = Tr(t, d), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), d in cr && ("autoAlpha" === d && (1 === h && "hidden" === Tr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Zd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== d && "transform" !== d && ~(d = cr[d]).indexOf(",") && (d = d.split(",")[0])), m = d in sr)
                    if (this.styles.save(d), "string" === l && "var(--" === o.substring(0, 6) && (o = Qd(t, o.substring(4, o.indexOf(")"))), u = parseFloat(o)), g || ((v = t._gsap).renderTransform && !e.parseTransform || kr(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new ge(this._pt, x, pr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === d) this._pt = new ge(this._pt, v, "scaleY", v.scaleY, (_ ? ka(v.scaleY, _ + u) : u) - v.scaleY || 0, wd), this._pt.u = 0, w.push("scaleY", d), d += "X";
                    else {
                        if ("transformOrigin" === d) {
                            b.push(_r, 0, x[_r]), o = ee(o), v.svg ? me(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Zd(this, v, "zOrigin", v.zOrigin, p), Zd(this, x, d, Or(s), Or(o)));
                            continue
                        }
                        if ("svgOrigin" === d) {
                            me(t, o, 1, y, 0, this);
                            continue
                        }
                        if (d in Mr) {
                            we(this, v, d, h, _ ? ka(h, _ + o) : o);
                            continue
                        }
                        if ("smoothOrigin" === d) {
                            Zd(this, v, "smooth", v.smooth, o);
                            continue
                        }
                        if ("force3D" === d) {
                            v[d] = o;
                            continue
                        }
                        if ("transform" === d) {
                            ye(this, o, t);
                            continue
                        }
                    }
                else d in x || (d = gr(d) || d);
                if (m || (u || 0 === u) && (h || 0 === h) && !dr.test(o) && d in x) u = u || 0, (c = (s + "").substr((h + "").length)) !== (p = Za(o) || (d in X.units ? X.units[d] : c)) && (h = ae(t, d, s, p)), this._pt = new ge(this._pt, m ? v : x, d, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== d || !1 === e.autoRound ? wd : zd), this._pt.u = p || 0, c !== p && "%" !== p && (this._pt.b = s, this._pt.r = yd);
                else if (d in x) ce.call(this, t, d, s, _ ? _ + o : o);
                else if (d in t) this.add(t, d, s || t[d], _ ? _ + o : o, n, a);
                else if ("parseTransform" !== d) {
                    Q(d, o);
                    continue
                }
                m || (d in x ? b.push(d, 0, x[d]) : "function" == typeof t[d] ? b.push(d, 2, t[d]()) : b.push(d, 1, s || t[d])), w.push(d)
            }
            T && _e(this)
        },
        render: function render(t, e) {
            if (e.tween._time || !Ye())
                for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
            else e.styles.revert()
        },
        get: Tr,
        aliases: cr,
        getSetter: function getSetter(t, e, r) {
            var i = cr[e];
            return i && i.indexOf(",") < 0 && (e = i), e in sr && e !== _r && (t._gsap.x || Tr(t, "x")) ? r && Be === r ? "scale" === e ? Fd : Ed : (Be = r || {}) && ("scale" === e ? Gd : Hd) : t.style && !u(t.style[e]) ? Cd : ~e.indexOf("-") ? Dd : ie(t, e)
        },
        core: {
            _removeProperty: Yd,
            _getMatrix: le
        }
    };
    ze.utils.checkPrefix = gr, ze.core.getStyleSaver = Nd, Fr = ha((Er = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Rr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
        sr[t] = 1
    }), ha(Rr, function(t) {
        X.units[t] = "deg", Mr[t] = 1
    }), cr[Fr[13]] = Er + "," + Rr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
        var e = t.split(":");
        cr[e[1]] = Fr[e[0]]
    }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
        X.units[t] = "px"
    }), ze.registerPlugin(Lr);
    var Ir = ze.registerPlugin(Lr) || ze,
        Br = Ir.core.Tween;
    e.Back = tr, e.Bounce = rr, e.CSSPlugin = Lr, e.Circ = ar, e.Cubic = Ge, e.Elastic = $e, e.Expo = nr, e.Linear = Ve, e.Power0 = Ze, e.Power1 = Ne, e.Power2 = Qe, e.Power3 = Ue, e.Power4 = qe, e.Quad = We, e.Quart = He, e.Quint = Ke, e.Sine = ir, e.SteppedEase = er, e.Strong = Je, e.TimelineLite = Qt, e.TimelineMax = Qt, e.TweenLite = Jt, e.TweenMax = Br, e.default = Ir, e.gsap = Ir;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function _defineProperties(e, t) {
        for (var r = 0; r < t.length; r++) {
            var n = t[r];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r() {
        return Se || "undefined" != typeof window && (Se = window.gsap) && Se.registerPlugin && Se
    }

    function z(e, t) {
        return ~Ye.indexOf(e) && Ye[Ye.indexOf(e) + 1][t]
    }

    function A(e) {
        return !!~t.indexOf(e)
    }

    function B(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !1 !== n,
            capture: !!i
        })
    }

    function C(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function F() {
        return Re && Re.isPressed || ze.cache++
    }

    function G(r, n) {
        function ed(e) {
            if (e || 0 === e) {
                i && (Te.history.scrollRestoration = "manual");
                var t = Re && Re.isPressed;
                e = ed.v = Math.round(e) || (Re && Re.iOS ? 1 : 0), r(e), ed.cacheID = ze.cache, t && o("ss", e)
            } else(n || ze.cache !== ed.cacheID || o("ref")) && (ed.cacheID = ze.cache, ed.v = r());
            return ed.v + ed.offset
        }
        return ed.offset = 0, r && ed
    }

    function J(e, t) {
        return (t && t._ctx && t._ctx.selector || Se.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== Se.config().nullTargetWarn ? console.warn("Element not found:", e) : null)
    }

    function L(t, e) {
        var r = e.s,
            n = e.sc;
        A(t) && (t = Ce.scrollingElement || Me);
        var i = ze.indexOf(t),
            o = n === qe.sc ? 1 : 2;
        ~i || (i = ze.push(t) - 1), ze[i + o] || B(t, "scroll", F);
        var a = ze[i + o],
            s = a || (ze[i + o] = G(z(t, r), !0) || (A(t) ? n : G(function(e) {
                return arguments.length ? t[r] = e : t[r]
            })));
        return s.target = t, a || (s.smooth = "smooth" === Se.getProperty(t, "scrollBehavior")), s
    }

    function M(e, t, i) {
        function Gd(e, t) {
            var r = Le();
            t || n < r - s ? (a = o, o = e, l = s, s = r) : i ? o += e : o = a + (e - a) / (r - l) * (s - l)
        }
        var o = e,
            a = e,
            s = Le(),
            l = s,
            n = t || 50,
            c = Math.max(500, 3 * n);
        return {
            update: Gd,
            reset: function reset() {
                a = o = i ? 0 : o, l = s = 0
            },
            getVelocity: function getVelocity(e) {
                var t = l,
                    r = a,
                    n = Le();
                return !e && 0 !== e || e === o || Gd(e), s === l || c < n - l ? 0 : (o + (i ? r : -r)) / ((i ? n : s) - t) * 1e3
            }
        }
    }

    function N(e, t) {
        return t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e
    }

    function O(e) {
        var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
        return Math.abs(t) >= Math.abs(r) ? t : r
    }

    function P() {
        (Ae = Se.core.globals().ScrollTrigger) && Ae.core && function _integrate() {
            var e = Ae.core,
                r = e.bridge || {},
                t = e._scrollers,
                n = e._proxies;
            t.push.apply(t, ze), n.push.apply(n, Ye), ze = t, Ye = n, o = function _bridge(e, t) {
                return r[e](t)
            }
        }()
    }

    function Q(e) {
        return Se = e || r(), !ke && Se && "undefined" != typeof document && document.body && (Te = window, Me = (Ce = document).documentElement, Ee = Ce.body, t = [Te, Ce, Me, Ee], Se.utils.clamp, Be = Se.core.context || function() {}, Oe = "onpointerenter" in Ee ? "pointer" : "mouse", Pe = E.isTouch = Te.matchMedia && Te.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in Te || 0 < navigator.maxTouchPoints || 0 < navigator.msMaxTouchPoints ? 2 : 0, De = E.eventTypes = ("ontouchstart" in Me ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in Me ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
            return i = 0
        }, 500), P(), ke = 1), ke
    }
    var Se, ke, Te, Ce, Me, Ee, Pe, Oe, Ae, t, Re, De, Be, i = 1,
        Ie = [],
        ze = [],
        Ye = [],
        Le = Date.now,
        o = function _bridge(e, t) {
            return t
        },
        n = "scrollLeft",
        a = "scrollTop",
        He = {
            s: n,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: G(function(e) {
                return arguments.length ? Te.scrollTo(e, qe.sc()) : Te.pageXOffset || Ce[n] || Me[n] || Ee[n] || 0
            })
        },
        qe = {
            s: a,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: He,
            sc: G(function(e) {
                return arguments.length ? Te.scrollTo(He.sc(), e) : Te.pageYOffset || Ce[a] || Me[a] || Ee[a] || 0
            })
        };
    He.op = qe, ze.cache = 0;
    var E = (Observer.prototype.init = function init(e) {
        ke || Q(Se) || console.warn("Please gsap.registerPlugin(Observer)"), Ae || P();
        var i = e.tolerance,
            a = e.dragMinimum,
            t = e.type,
            o = e.target,
            r = e.lineHeight,
            n = e.debounce,
            s = e.preventDefault,
            l = e.onStop,
            c = e.onStopDelay,
            u = e.ignore,
            f = e.wheelSpeed,
            d = e.event,
            p = e.onDragStart,
            g = e.onDragEnd,
            h = e.onDrag,
            v = e.onPress,
            b = e.onRelease,
            m = e.onRight,
            y = e.onLeft,
            x = e.onUp,
            _ = e.onDown,
            w = e.onChangeX,
            S = e.onChangeY,
            k = e.onChange,
            T = e.onToggleX,
            E = e.onToggleY,
            R = e.onHover,
            D = e.onHoverEnd,
            I = e.onMove,
            z = e.ignoreCheck,
            Y = e.isNormalizer,
            H = e.onGestureStart,
            q = e.onGestureEnd,
            X = e.onWheel,
            U = e.onEnable,
            W = e.onDisable,
            G = e.onClick,
            V = e.scrollSpeed,
            K = e.capture,
            j = e.allowClicks,
            Z = e.lockAxis,
            $ = e.onLockAxis;

        function gf() {
            return xe = Le()
        }

        function hf(e, t) {
            return (se.event = e) && u && function _isWithin(e, t) {
                for (var r = t.length; r--;)
                    if (t[r] === e || t[r].contains(e)) return !0;
                return !1
            }(e.target, u) || t && he && "touch" !== e.pointerType || z && z(e, t)
        }

        function kf() {
            var e = se.deltaX = O(me),
                t = se.deltaY = O(ye),
                r = Math.abs(e) >= i,
                n = Math.abs(t) >= i;
            k && (r || n) && k(se, e, t, me, ye), r && (m && 0 < se.deltaX && m(se), y && se.deltaX < 0 && y(se), w && w(se), T && se.deltaX < 0 != le < 0 && T(se), le = se.deltaX, me[0] = me[1] = me[2] = 0), n && (_ && 0 < se.deltaY && _(se), x && se.deltaY < 0 && x(se), S && S(se), E && se.deltaY < 0 != ce < 0 && E(se), ce = se.deltaY, ye[0] = ye[1] = ye[2] = 0), (ne || re) && (I && I(se), re && (p && 1 === re && p(se), h && h(se), re = 0), ne = !1), oe && !(oe = !1) && $ && $(se), ie && (X(se), ie = !1), ee = 0
        }

        function lf(e, t, r) {
            me[r] += e, ye[r] += t, se._vx.update(e), se._vy.update(t), n ? ee = ee || requestAnimationFrame(kf) : kf()
        }

        function mf(e, t) {
            Z && !ae && (se.axis = ae = Math.abs(e) > Math.abs(t) ? "x" : "y", oe = !0), "y" !== ae && (me[2] += e, se._vx.update(e, !0)), "x" !== ae && (ye[2] += t, se._vy.update(t, !0)), n ? ee = ee || requestAnimationFrame(kf) : kf()
        }

        function nf(e) {
            if (!hf(e, 1)) {
                var t = (e = N(e, s)).clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y,
                    o = se.isDragging;
                se.x = t, se.y = r, (o || (n || i) && (Math.abs(se.startX - t) >= a || Math.abs(se.startY - r) >= a)) && (re = o ? 2 : 1, o || (se.isDragging = !0), mf(n, i))
            }
        }

        function qf(e) {
            return e.touches && 1 < e.touches.length && (se.isGesturing = !0) && H(e, se.isDragging)
        }

        function rf() {
            return (se.isGesturing = !1) || q(se)
        }

        function sf(e) {
            if (!hf(e)) {
                var t = fe(),
                    r = de();
                lf((t - pe) * V, (r - ge) * V, 1), pe = t, ge = r, l && te.restart(!0)
            }
        }

        function tf(e) {
            if (!hf(e)) {
                e = N(e, s), X && (ie = !0);
                var t = (1 === e.deltaMode ? r : 2 === e.deltaMode ? Te.innerHeight : 1) * f;
                lf(e.deltaX * t, e.deltaY * t, 0), l && !Y && te.restart(!0)
            }
        }

        function uf(e) {
            if (!hf(e)) {
                var t = e.clientX,
                    r = e.clientY,
                    n = t - se.x,
                    i = r - se.y;
                se.x = t, se.y = r, ne = !0, l && te.restart(!0), (n || i) && mf(n, i)
            }
        }

        function vf(e) {
            se.event = e, R(se)
        }

        function wf(e) {
            se.event = e, D(se)
        }

        function xf(e) {
            return hf(e) || N(e, s) && G(se)
        }
        this.target = o = J(o) || Me, this.vars = e, u = u && Se.utils.toArray(u), i = i || 1e-9, a = a || 0, f = f || 1, V = V || 1, t = t || "wheel,touch,pointer", n = !1 !== n, r = r || parseFloat(Te.getComputedStyle(Ee).lineHeight) || 22;
        var ee, te, re, ne, ie, oe, ae, se = this,
            le = 0,
            ce = 0,
            ue = e.passive || !s && !1 !== e.passive,
            fe = L(o, He),
            de = L(o, qe),
            pe = fe(),
            ge = de(),
            he = ~t.indexOf("touch") && !~t.indexOf("pointer") && "pointerdown" === De[0],
            ve = A(o),
            be = o.ownerDocument || Ce,
            me = [0, 0, 0],
            ye = [0, 0, 0],
            xe = 0,
            _e = se.onPress = function(e) {
                hf(e, 1) || e && e.button || (se.axis = ae = null, te.pause(), se.isPressed = !0, e = N(e), le = ce = 0, se.startX = se.x = e.clientX, se.startY = se.y = e.clientY, se._vx.reset(), se._vy.reset(), B(Y ? o : be, De[1], nf, ue, !0), se.deltaX = se.deltaY = 0, v && v(se))
            },
            we = se.onRelease = function(t) {
                if (!hf(t, 1)) {
                    C(Y ? o : be, De[1], nf, !0);
                    var e = !isNaN(se.y - se.startY),
                        r = se.isDragging,
                        n = r && (3 < Math.abs(se.x - se.startX) || 3 < Math.abs(se.y - se.startY)),
                        i = N(t);
                    !n && e && (se._vx.reset(), se._vy.reset(), s && j && Se.delayedCall(.08, function() {
                        if (300 < Le() - xe && !t.defaultPrevented)
                            if (t.target.click) t.target.click();
                            else if (be.createEvent) {
                            var e = be.createEvent("MouseEvents");
                            e.initMouseEvent("click", !0, !0, Te, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), t.target.dispatchEvent(e)
                        }
                    })), se.isDragging = se.isGesturing = se.isPressed = !1, l && r && !Y && te.restart(!0), re && kf(), g && r && g(se), b && b(se, n)
                }
            };
        te = se._dc = Se.delayedCall(c || .25, function onStopFunc() {
            se._vx.reset(), se._vy.reset(), te.pause(), l && l(se)
        }).pause(), se.deltaX = se.deltaY = 0, se._vx = M(0, 50, !0), se._vy = M(0, 50, !0), se.scrollX = fe, se.scrollY = de, se.isDragging = se.isGesturing = se.isPressed = !1, Be(this), se.enable = function(e) {
            return se.isEnabled || (B(ve ? be : o, "scroll", F), 0 <= t.indexOf("scroll") && B(ve ? be : o, "scroll", sf, ue, K), 0 <= t.indexOf("wheel") && B(o, "wheel", tf, ue, K), (0 <= t.indexOf("touch") && Pe || 0 <= t.indexOf("pointer")) && (B(o, De[0], _e, ue, K), B(be, De[2], we), B(be, De[3], we), j && B(o, "click", gf, !0, !0), G && B(o, "click", xf), H && B(be, "gesturestart", qf), q && B(be, "gestureend", rf), R && B(o, Oe + "enter", vf), D && B(o, Oe + "leave", wf), I && B(o, Oe + "move", uf)), se.isEnabled = !0, se.isDragging = se.isGesturing = se.isPressed = ne = re = !1, se._vx.reset(), se._vy.reset(), pe = fe(), ge = de(), e && e.type && _e(e), U && U(se)), se
        }, se.disable = function() {
            se.isEnabled && (Ie.filter(function(e) {
                return e !== se && A(e.target)
            }).length || C(ve ? be : o, "scroll", F), se.isPressed && (se._vx.reset(), se._vy.reset(), C(Y ? o : be, De[1], nf, !0)), C(ve ? be : o, "scroll", sf, K), C(o, "wheel", tf, K), C(o, De[0], _e, K), C(be, De[2], we), C(be, De[3], we), C(o, "click", gf, !0), C(o, "click", xf), C(be, "gesturestart", qf), C(be, "gestureend", rf), C(o, Oe + "enter", vf), C(o, Oe + "leave", wf), C(o, Oe + "move", uf), se.isEnabled = se.isPressed = se.isDragging = !1, W && W(se))
        }, se.kill = se.revert = function() {
            se.disable();
            var e = Ie.indexOf(se);
            0 <= e && Ie.splice(e, 1), Re === se && (Re = 0)
        }, Ie.push(se), Y && A(o) && (Re = se), se.enable(d)
    }, function _createClass(e, t, r) {
        return t && _defineProperties(e.prototype, t), r && _defineProperties(e, r), e
    }(Observer, [{
        key: "velocityX",
        get: function get() {
            return this._vx.getVelocity()
        }
    }, {
        key: "velocityY",
        get: function get() {
            return this._vy.getVelocity()
        }
    }]), Observer);

    function Observer(e) {
        this.init(e)
    }
    E.version = "3.13.0", E.create = function(e) {
        return new E(e)
    }, E.register = Q, E.getAll = function() {
        return Ie.slice()
    }, E.getById = function(t) {
        return Ie.filter(function(e) {
            return e.vars.id === t
        })[0]
    }, r() && Se.registerPlugin(E);

    function Da(e, t, r) {
        var n = ct(e) && ("clamp(" === e.substr(0, 6) || -1 < e.indexOf("max"));
        return (r["_" + t + "Clamp"] = n) ? e.substr(6, e.length - 7) : e
    }

    function Ea(e, t) {
        return !t || ct(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")"
    }

    function Ga() {
        return Qe = 1
    }

    function Ha() {
        return Qe = 0
    }

    function Ia(e) {
        return e
    }

    function Ja(e) {
        return Math.round(1e5 * e) / 1e5 || 0
    }

    function Ka() {
        return "undefined" != typeof window
    }

    function La() {
        return Ne || Ka() && (Ne = window.gsap) && Ne.registerPlugin && Ne
    }

    function Ma(e) {
        return !!~l.indexOf(e)
    }

    function Na(e) {
        return ("Height" === e ? S : Xe["inner" + e]) || Ue["client" + e] || We["client" + e]
    }

    function Oa(e) {
        return z(e, "getBoundingClientRect") || (Ma(e) ? function() {
            return Ot.width = Xe.innerWidth, Ot.height = S, Ot
        } : function() {
            return _t(e)
        })
    }

    function Ra(e, t) {
        var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
        return Math.max(0, (r = "scroll" + n) && (o = z(e, r)) ? o() - Oa(e)()[i] : Ma(e) ? (Ue[r] || We[r]) - Na(n) : e[r] - e["offset" + n])
    }

    function Sa(e, t) {
        for (var r = 0; r < g.length; r += 3) t && !~t.indexOf(g[r + 1]) || e(g[r], g[r + 1], g[r + 2])
    }

    function Ua(e) {
        return "function" == typeof e
    }

    function Va(e) {
        return "number" == typeof e
    }

    function Wa(e) {
        return "object" == typeof e
    }

    function Xa(e, t, r) {
        return e && e.progress(t ? 0 : 1) && r && e.pause()
    }

    function Ya(e, t) {
        if (e.enabled) {
            var r = e._ctx ? e._ctx.add(function() {
                return t(e)
            }) : t(e);
            r && r.totalTime && (e.callbackAnimation = r)
        }
    }

    function nb(e) {
        return Xe.getComputedStyle(e)
    }

    function pb(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    }

    function rb(e, t) {
        var r = t.d2;
        return e["offset" + r] || e["client" + r] || 0
    }

    function sb(e) {
        var t, r = [],
            n = e.labels,
            i = e.duration();
        for (t in n) r.push(n[t] / i);
        return r
    }

    function ub(i) {
        var o = Ne.utils.snap(i),
            a = Array.isArray(i) && i.slice(0).sort(function(e, t) {
                return e - t
            });
        return a ? function(e, t, r) {
            var n;
            if (void 0 === r && (r = .001), !t) return o(e);
            if (0 < t) {
                for (e -= r, n = 0; n < a.length; n++)
                    if (a[n] >= e) return a[n];
                return a[n - 1]
            }
            for (n = a.length, e += r; n--;)
                if (a[n] <= e) return a[n];
            return a[0]
        } : function(e, t, r) {
            void 0 === r && (r = .001);
            var n = o(e);
            return !t || Math.abs(n - e) < r || n - e < 0 == t < 0 ? n : o(t < 0 ? e - i : e + i)
        }
    }

    function wb(t, r, e, n) {
        return e.split(",").forEach(function(e) {
            return t(r, e, n)
        })
    }

    function xb(e, t, r, n, i) {
        return e.addEventListener(t, r, {
            passive: !n,
            capture: !!i
        })
    }

    function yb(e, t, r, n) {
        return e.removeEventListener(t, r, !!n)
    }

    function zb(e, t, r) {
        (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r))
    }

    function Db(e, t) {
        if (ct(e)) {
            var r = e.indexOf("="),
                n = ~r ? (e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r && (e.indexOf("%") > r && (n *= t / 100), e = e.substr(0, r - 1)), e = n + (e in q ? q[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
        }
        return e
    }

    function Eb(e, t, r, n, i, o, a, s) {
        var l = i.startColor,
            c = i.endColor,
            u = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = Fe.createElement("div"),
            g = Ma(r) || "fixed" === z(r, "pinType"),
            h = -1 !== e.indexOf("scroller"),
            v = g ? We : r,
            b = -1 !== e.indexOf("start"),
            m = b ? l : c,
            y = "border-color:" + m + ";font-size:" + u + ";color:" + m + ";font-weight:" + d + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
        return y += "position:" + ((h || s) && g ? "fixed;" : "absolute;"), !h && !s && g || (y += (n === qe ? I : Y) + ":" + (o + parseFloat(f)) + "px;"), a && (y += "box-sizing:border-box;text-align:left;width:" + a.offsetWidth + "px;"), p._isStart = b, p.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), p.style.cssText = y, p.innerText = t || 0 === t ? e + "-" + t : e, v.children[0] ? v.insertBefore(p, v.children[0]) : v.appendChild(p), p._offset = p["offset" + n.op.d2], X(p, 0, n, b), p
    }

    function Jb() {
        return 34 < at() - st && (T = T || requestAnimationFrame(Z))
    }

    function Kb() {
        v && v.isPressed && !(v.startX > We.clientWidth) || (ze.cache++, v ? T = T || requestAnimationFrame(Z) : Z(), st || V("scrollStart"), st = at())
    }

    function Lb() {
        y = Xe.innerWidth, m = Xe.innerHeight
    }

    function Mb(e) {
        ze.cache++, !0 !== e && (Ke || h || Fe.fullscreenElement || Fe.webkitFullscreenElement || b && y === Xe.innerWidth && !(Math.abs(Xe.innerHeight - m) > .25 * Xe.innerHeight)) || c.restart(!0)
    }

    function Pb() {
        return yb(ne, "scrollEnd", Pb) || Mt(!0)
    }

    function Sb(e) {
        for (var t = 0; t < K.length; t += 5)(!e || K[t + 4] && K[t + 4].query === e) && (K[t].style.cssText = K[t + 1], K[t].getBBox && K[t].setAttribute("transform", K[t + 2] || ""), K[t + 3].uncache = 1)
    }

    function Tb(e, t) {
        var r;
        for (je = 0; je < kt.length; je++) !(r = kt[je]) || t && r._ctx !== t || (e ? r.kill(1) : r.revert(!0, !0));
        k = !0, t && Sb(t), t || V("revert")
    }

    function Ub(e, t) {
        ze.cache++, !t && rt || ze.forEach(function(e) {
            return Ua(e) && e.cacheID++ && (e.rec = 0)
        }), ct(e) && (Xe.history.scrollRestoration = _ = e)
    }

    function Zb() {
        We.appendChild(w), S = !v && w.offsetHeight || Xe.innerHeight, We.removeChild(w)
    }

    function $b(t) {
        return Je(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e) {
            return e.style.display = t ? "none" : "block"
        })
    }

    function hc(e, t, r, n) {
        if (!e._gsap.swappedIn) {
            for (var i, o = $.length, a = t.style, s = e.style; o--;) a[i = $[o]] = r[i];
            a.position = "absolute" === r.position ? "absolute" : "relative", "inline" === r.display && (a.display = "inline-block"), s[Y] = s[I] = "auto", a.flexBasis = r.flexBasis || "auto", a.overflow = "visible", a.boxSizing = "border-box", a[ft] = rb(e, He) + xt, a[dt] = rb(e, qe) + xt, a[bt] = s[mt] = s.top = s.left = "0", Pt(n), s[ft] = s.maxWidth = r[ft], s[dt] = s.maxHeight = r[dt], s[bt] = r[bt], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
        }
    }

    function kc(e) {
        for (var t = ee.length, r = e.style, n = [], i = 0; i < t; i++) n.push(ee[i], r[ee[i]]);
        return n.t = e, n
    }

    function nc(e, t, r, n, i, o, a, s, l, c, u, f, d, p) {
        Ua(e) && (e = e(s)), ct(e) && "max" === e.substr(0, 3) && (e = f + ("=" === e.charAt(4) ? Db("0" + e.substr(3), r) : 0));
        var g, h, v, b = d ? d.time() : 0;
        if (d && d.seek(0), isNaN(e) || (e = +e), Va(e)) d && (e = Ne.utils.mapRange(d.scrollTrigger.start, d.scrollTrigger.end, 0, f, e)), a && X(a, r, n, !0);
        else {
            Ua(t) && (t = t(s));
            var m, y, x, _, w = (e || "0").split(" ");
            v = J(t, s) || We, (m = _t(v) || {}) && (m.left || m.top) || "none" !== nb(v).display || (_ = v.style.display, v.style.display = "block", m = _t(v), _ ? v.style.display = _ : v.style.removeProperty("display")), y = Db(w[0], m[n.d]), x = Db(w[1] || "0", r), e = m[n.p] - l[n.p] - c + y + i - x, a && X(a, x, n, r - x < 20 || a._isStart && 20 < x), r -= r - x
        }
        if (p && (s[p] = e || -.001, e < 0 && (e = 0)), o) {
            var S = e + r,
                k = o._isStart;
            g = "scroll" + n.d2, X(o, S, n, k && 20 < S || !k && (u ? Math.max(We[g], Ue[g]) : o.parentNode[g]) <= S + 1), u && (l = _t(a), u && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + xt))
        }
        return d && v && (g = _t(v), d.seek(f), h = _t(v), d._caScrollDist = g[n.p] - h[n.p], e = e / d._caScrollDist * f), d && d.seek(b), d ? e : Math.round(e)
    }

    function pc(e, t, r, n) {
        if (e.parentNode !== t) {
            var i, o, a = e.style;
            if (t === We) {
                for (i in e._stOrig = a.cssText, o = nb(e)) + i || re.test(i) || !o[i] || "string" != typeof a[i] || "0" === i || (a[i] = o[i]);
                a.top = r, a.left = n
            } else a.cssText = e._stOrig;
            Ne.core.getCache(e).uncache = 1, t.appendChild(e)
        }
    }

    function qc(r, e, n) {
        var i = e,
            o = i;
        return function(e) {
            var t = Math.round(r());
            return t !== i && t !== o && 3 < Math.abs(t - i) && 3 < Math.abs(t - o) && (e = t, n && n()), o = i, i = Math.round(e)
        }
    }

    function rc(e, t, r) {
        var n = {};
        n[t.p] = "+=" + r, Ne.set(e, n)
    }

    function sc(c, e) {
        function Hk(e, t, r, n, i) {
            var o = Hk.tween,
                a = t.onComplete,
                s = {};
            r = r || u();
            var l = qc(u, r, function() {
                o.kill(), Hk.tween = 0
            });
            return i = n && i || 0, n = n || e - r, o && o.kill(), t[f] = e, t.inherit = !1, (t.modifiers = s)[f] = function() {
                return l(r + n * o.ratio + i * o.ratio * o.ratio)
            }, t.onUpdate = function() {
                ze.cache++, Hk.tween && Z()
            }, t.onComplete = function() {
                Hk.tween = 0, a && a.call(o)
            }, o = Hk.tween = Ne.to(c, t)
        }
        var u = L(c, e),
            f = "_scroll" + e.p2;
        return (c[f] = u).wheelHandler = function() {
            return Hk.tween && Hk.tween.kill() && (Hk.tween = 0)
        }, xb(c, "wheel", u.wheelHandler), ne.isTouch && xb(c, "touchmove", u.wheelHandler), Hk
    }
    var Ne, s, Xe, Fe, Ue, We, l, c, Je, Ge, Ve, u, Ke, Qe, f, je, d, p, g, Ze, $e, h, v, b, m, y, R, x, _, w, S, k, et, tt, T, rt, nt, it, ot = 1,
        at = Date.now,
        D = at(),
        st = 0,
        lt = 0,
        ct = function _isString(e) {
            return "string" == typeof e
        },
        ut = Math.abs,
        I = "right",
        Y = "bottom",
        ft = "width",
        dt = "height",
        pt = "Right",
        gt = "Left",
        ht = "Top",
        vt = "Bottom",
        bt = "padding",
        mt = "margin",
        yt = "Width",
        H = "Height",
        xt = "px",
        _t = function _getBounds(e, t) {
            var r = t && "matrix(1, 0, 0, 1, 0, 0)" !== nb(e)[f] && Ne.to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0
                }).progress(1),
                n = e.getBoundingClientRect();
            return r && r.progress(0).kill(), n
        },
        wt = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal"
        },
        St = {
            toggleActions: "play",
            anticipatePin: 0
        },
        q = {
            top: 0,
            left: 0,
            center: .5,
            bottom: 1,
            right: 1
        },
        X = function _positionMarker(e, t, r, n) {
            var i = {
                    display: "block"
                },
                o = r[n ? "os2" : "p2"],
                a = r[n ? "p2" : "os2"];
            e._isFlipped = n, i[r.a + "Percent"] = n ? -100 : 0, i[r.a] = n ? "1px" : 0, i["border" + o + yt] = 1, i["border" + a + yt] = 0, i[r.p] = t + "px", Ne.set(e, i)
        },
        kt = [],
        Tt = {},
        U = {},
        W = [],
        V = function _dispatch(e) {
            return U[e] && U[e].map(function(e) {
                return e()
            }) || W
        },
        K = [],
        Ct = 0,
        Mt = function _refreshAll(e, t) {
            if (Ue = Fe.documentElement, We = Fe.body, l = [Xe, Fe, Ue, We], !st || e || k) {
                Zb(), rt = ne.isRefreshing = !0, ze.forEach(function(e) {
                    return Ua(e) && ++e.cacheID && (e.rec = e())
                });
                var r = V("refreshInit");
                Ze && ne.sort(), t || Tb(), ze.forEach(function(e) {
                    Ua(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
                }), kt.slice(0).forEach(function(e) {
                    return e.refresh()
                }), k = !1, kt.forEach(function(e) {
                    if (e._subPinOffset && e.pin) {
                        var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            r = e.pin[t];
                        e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh()
                    }
                }), et = 1, $b(!0), kt.forEach(function(e) {
                    var t = Ra(e.scroller, e._dir),
                        r = "max" === e.vars.end || e._endClamp && e.end > t,
                        n = e._startClamp && e.start >= t;
                    (r || n) && e.setPositions(n ? t - 1 : e.start, r ? Math.max(n ? t : e.start + 1, t) : e.end, !0)
                }), $b(!1), et = 0, r.forEach(function(e) {
                    return e && e.render && e.render(-1)
                }), ze.forEach(function(e) {
                    Ua(e) && (e.smooth && requestAnimationFrame(function() {
                        return e.target.style.scrollBehavior = "smooth"
                    }), e.rec && e(e.rec))
                }), Ub(_, 1), c.pause(), Ct++, Z(rt = 2), kt.forEach(function(e) {
                    return Ua(e.vars.onRefresh) && e.vars.onRefresh(e)
                }), rt = ne.isRefreshing = !1, V("refresh")
            } else xb(ne, "scrollEnd", Pb)
        },
        j = 0,
        Et = 1,
        Z = function _updateAll(e) {
            if (2 === e || !rt && !k) {
                ne.isUpdating = !0, it && it.update(0);
                var t = kt.length,
                    r = at(),
                    n = 50 <= r - D,
                    i = t && kt[0].scroll();
                if (Et = i < j ? -1 : 1, rt || (j = i), n && (st && !Qe && 200 < r - st && (st = 0, V("scrollEnd")), Ve = D, D = r), Et < 0) {
                    for (je = t; 0 < je--;) kt[je] && kt[je].update(0, n);
                    Et = 1
                } else
                    for (je = 0; je < t; je++) kt[je] && kt[je].update(0, n);
                ne.isUpdating = !1
            }
            T = 0
        },
        $ = ["left", "top", Y, I, mt + vt, mt + pt, mt + ht, mt + gt, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        ee = $.concat([ft, dt, "boxSizing", "max" + yt, "max" + H, "position", mt, bt, bt + ht, bt + pt, bt + vt, bt + gt]),
        te = /([A-Z])/g,
        Pt = function _setState(e) {
            if (e) {
                var t, r, n = e.t.style,
                    i = e.length,
                    o = 0;
                for ((e.t._gsap || Ne.core.getCache(e.t)).uncache = 1; o < i; o += 2) r = e[o + 1], t = e[o], r ? n[t] = r : n[t] && n.removeProperty(t.replace(te, "-$1").toLowerCase())
            }
        },
        Ot = {
            left: 0,
            top: 0
        },
        re = /(webkit|moz|length|cssText|inset)/i,
        ne = (ScrollTrigger.prototype.init = function init(P, O) {
            if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), lt) {
                var A, n, p, R, D, B, I, Y, H, q, N, e, X, F, U, W, G, V, t, K, b, Q, j, m, Z, y, $, x, r, _, w, ee, i, g, te, re, ne, S, o, k = (P = pb(ct(P) || Va(P) || P.nodeType ? {
                        trigger: P
                    } : P, St)).onUpdate,
                    T = P.toggleClass,
                    a = P.id,
                    C = P.onToggle,
                    ie = P.onRefresh,
                    M = P.scrub,
                    oe = P.trigger,
                    ae = P.pin,
                    se = P.pinSpacing,
                    le = P.invalidateOnRefresh,
                    E = P.anticipatePin,
                    s = P.onScrubComplete,
                    h = P.onSnapComplete,
                    ce = P.once,
                    ue = P.snap,
                    fe = P.pinReparent,
                    l = P.pinSpacer,
                    de = P.containerAnimation,
                    pe = P.fastScrollEnd,
                    ge = P.preventOverlaps,
                    he = P.horizontal || P.containerAnimation && !1 !== P.horizontal ? He : qe,
                    ve = !M && 0 !== M,
                    be = J(P.scroller || Xe),
                    c = Ne.core.getCache(be),
                    me = Ma(be),
                    ye = "fixed" === ("pinType" in P ? P.pinType : z(be, "pinType") || me && "fixed"),
                    xe = [P.onEnter, P.onLeave, P.onEnterBack, P.onLeaveBack],
                    _e = ve && P.toggleActions.split(" "),
                    we = "markers" in P ? P.markers : St.markers,
                    Se = me ? 0 : parseFloat(nb(be)["border" + he.p2 + yt]) || 0,
                    ke = this,
                    Te = P.onRefreshInit && function() {
                        return P.onRefreshInit(ke)
                    },
                    Ce = function _getSizeFunc(e, t, r) {
                        var n = r.d,
                            i = r.d2,
                            o = r.a;
                        return (o = z(e, "getBoundingClientRect")) ? function() {
                            return o()[n]
                        } : function() {
                            return (t ? Na(i) : e["client" + i]) || 0
                        }
                    }(be, me, he),
                    Me = function _getOffsetsFunc(e, t) {
                        return !t || ~Ye.indexOf(e) ? Oa(e) : function() {
                            return Ot
                        }
                    }(be, me),
                    Ee = 0,
                    Pe = 0,
                    Oe = 0,
                    Ae = L(be, he);
                if (ke._startClamp = ke._endClamp = !1, ke._dir = he, E *= 45, ke.scroller = be, ke.scroll = de ? de.time.bind(de) : Ae, R = Ae(), ke.vars = P, O = O || P.animation, "refreshPriority" in P && (Ze = 1, -9999 === P.refreshPriority && (it = ke)), c.tweenScroll = c.tweenScroll || {
                        top: sc(be, qe),
                        left: sc(be, He)
                    }, ke.tweenTo = A = c.tweenScroll[he.p], ke.scrubDuration = function(e) {
                        (i = Va(e) && e) ? ee ? ee.duration(e) : ee = Ne.to(O, {
                            ease: "expo",
                            totalProgress: "+=0",
                            inherit: !1,
                            duration: i,
                            paused: !0,
                            onComplete: function onComplete() {
                                return s && s(ke)
                            }
                        }): (ee && ee.progress(1).kill(), ee = 0)
                    }, O && (O.vars.lazy = !1, O._initted && !ke.isReverted || !1 !== O.vars.immediateRender && !1 !== P.immediateRender && O.duration() && O.render(0, !0, !0), ke.animation = O.pause(), (O.scrollTrigger = ke).scrubDuration(M), _ = 0, a = a || O.vars.id), ue && (Wa(ue) && !ue.push || (ue = {
                        snapTo: ue
                    }), "scrollBehavior" in We.style && Ne.set(me ? [We, Ue] : be, {
                        scrollBehavior: "auto"
                    }), ze.forEach(function(e) {
                        return Ua(e) && e.target === (me ? Fe.scrollingElement || Ue : be) && (e.smooth = !1)
                    }), p = Ua(ue.snapTo) ? ue.snapTo : "labels" === ue.snapTo ? function _getClosestLabel(t) {
                        return function(e) {
                            return Ne.utils.snap(sb(t), e)
                        }
                    }(O) : "labelsDirectional" === ue.snapTo ? function _getLabelAtDirection(r) {
                        return function(e, t) {
                            return ub(sb(r))(e, t.direction)
                        }
                    }(O) : !1 !== ue.directional ? function(e, t) {
                        return ub(ue.snapTo)(e, at() - Pe < 500 ? 0 : t.direction)
                    } : Ne.utils.snap(ue.snapTo), g = ue.duration || {
                        min: .1,
                        max: 2
                    }, g = Wa(g) ? Ge(g.min, g.max) : Ge(g, g), te = Ne.delayedCall(ue.delay || i / 2 || .1, function() {
                        var e = Ae(),
                            t = at() - Pe < 500,
                            r = A.tween;
                        if (!(t || Math.abs(ke.getVelocity()) < 10) || r || Qe || Ee === e) ke.isActive && Ee !== e && te.restart(!0);
                        else {
                            var n, i, o = (e - B) / F,
                                a = O && !ve ? O.totalProgress() : o,
                                s = t ? 0 : (a - w) / (at() - Ve) * 1e3 || 0,
                                l = Ne.utils.clamp(-o, 1 - o, ut(s / 2) * s / .185),
                                c = o + (!1 === ue.inertia ? 0 : l),
                                u = ue.onStart,
                                f = ue.onInterrupt,
                                d = ue.onComplete;
                            if (n = p(c, ke), Va(n) || (n = c), i = Math.max(0, Math.round(B + n * F)), e <= I && B <= e && i !== e) {
                                if (r && !r._initted && r.data <= ut(i - e)) return;
                                !1 === ue.inertia && (l = n - o), A(i, {
                                    duration: g(ut(.185 * Math.max(ut(c - a), ut(n - a)) / s / .05 || 0)),
                                    ease: ue.ease || "power3",
                                    data: ut(i - e),
                                    onInterrupt: function onInterrupt() {
                                        return te.restart(!0) && f && f(ke)
                                    },
                                    onComplete: function onComplete() {
                                        ke.update(), Ee = Ae(), O && !ve && (ee ? ee.resetTo("totalProgress", n, O._tTime / O._tDur) : O.progress(n)), _ = w = O && !ve ? O.totalProgress() : ke.progress, h && h(ke), d && d(ke)
                                    }
                                }, e, l * F, i - e - l * F), u && u(ke, A.tween)
                            }
                        }
                    }).pause()), a && (Tt[a] = ke), o = (o = (oe = ke.trigger = J(oe || !0 !== ae && ae)) && oe._gsap && oe._gsap.stRevert) && o(ke), ae = !0 === ae ? oe : J(ae), ct(T) && (T = {
                        targets: oe,
                        className: T
                    }), ae && (!1 === se || se === mt || (se = !(!se && ae.parentNode && ae.parentNode.style && "flex" === nb(ae.parentNode).display) && bt), ke.pin = ae, (n = Ne.core.getCache(ae)).spacer ? U = n.pinState : (l && ((l = J(l)) && !l.nodeType && (l = l.current || l.nativeElement), n.spacerIsNative = !!l, l && (n.spacerState = kc(l))), n.spacer = V = l || Fe.createElement("div"), V.classList.add("pin-spacer"), a && V.classList.add("pin-spacer-" + a), n.pinState = U = kc(ae)), !1 !== P.force3D && Ne.set(ae, {
                        force3D: !0
                    }), ke.spacer = V = n.spacer, r = nb(ae), m = r[se + he.os2], K = Ne.getProperty(ae), b = Ne.quickSetter(ae, he.a, xt), hc(ae, V, r), G = kc(ae)), we) {
                    e = Wa(we) ? pb(we, wt) : wt, q = Eb("scroller-start", a, be, he, e, 0), N = Eb("scroller-end", a, be, he, e, 0, q), t = q["offset" + he.op.d2];
                    var u = J(z(be, "content") || be);
                    Y = this.markerStart = Eb("start", a, u, he, e, t, 0, de), H = this.markerEnd = Eb("end", a, u, he, e, t, 0, de), de && (S = Ne.quickSetter([Y, H], he.a, xt)), ye || Ye.length && !0 === z(be, "fixedMarkers") || (function _makePositionable(e) {
                        var t = nb(e).position;
                        e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
                    }(me ? We : be), Ne.set([q, N], {
                        force3D: !0
                    }), y = Ne.quickSetter(q, he.a, xt), x = Ne.quickSetter(N, he.a, xt))
                }
                if (de) {
                    var f = de.vars.onUpdate,
                        d = de.vars.onUpdateParams;
                    de.eventCallback("onUpdate", function() {
                        ke.update(0, 0, 1), f && f.apply(de, d || [])
                    })
                }
                if (ke.previous = function() {
                        return kt[kt.indexOf(ke) - 1]
                    }, ke.next = function() {
                        return kt[kt.indexOf(ke) + 1]
                    }, ke.revert = function(e, t) {
                        if (!t) return ke.kill(!0);
                        var r = !1 !== e || !ke.enabled,
                            n = Ke;
                        r !== ke.isReverted && (r && (re = Math.max(Ae(), ke.scroll.rec || 0), Oe = ke.progress, ne = O && O.progress()), Y && [Y, H, q, N].forEach(function(e) {
                            return e.style.display = r ? "none" : "block"
                        }), r && (Ke = ke).update(r), !ae || fe && ke.isActive || (r ? function _swapPinOut(e, t, r) {
                            Pt(r);
                            var n = e._gsap;
                            if (n.spacerIsNative) Pt(n.spacerState);
                            else if (e._gsap.swappedIn) {
                                var i = t.parentNode;
                                i && (i.insertBefore(e, t), i.removeChild(t))
                            }
                            e._gsap.swappedIn = !1
                        }(ae, V, U) : hc(ae, V, nb(ae), Z)), r || ke.update(r), Ke = n, ke.isReverted = r)
                    }, ke.refresh = function(e, t, r, n) {
                        if (!Ke && ke.enabled || t)
                            if (ae && e && st) xb(ScrollTrigger, "scrollEnd", Pb);
                            else {
                                !rt && Te && Te(ke), Ke = ke, A.tween && !r && (A.tween.kill(), A.tween = 0), ee && ee.pause(), le && O && (O.revert({
                                    kill: !1
                                }).invalidate(), O.getChildren && O.getChildren(!0, !0, !1).forEach(function(e) {
                                    return e.vars.immediateRender && e.render(0, !0, !0)
                                })), ke.isReverted || ke.revert(!0, !0), ke._subPinOffset = !1;
                                var i, o, a, s, l, c, u, f, d, p, g, h, v, b = Ce(),
                                    m = Me(),
                                    y = de ? de.duration() : Ra(be, he),
                                    x = F <= .01 || !F,
                                    _ = 0,
                                    w = n || 0,
                                    S = Wa(r) ? r.end : P.end,
                                    k = P.endTrigger || oe,
                                    T = Wa(r) ? r.start : P.start || (0 !== P.start && oe ? ae ? "0 0" : "0 100%" : 0),
                                    C = ke.pinnedContainer = P.pinnedContainer && J(P.pinnedContainer, ke),
                                    M = oe && Math.max(0, kt.indexOf(ke)) || 0,
                                    E = M;
                                for (we && Wa(r) && (h = Ne.getProperty(q, he.p), v = Ne.getProperty(N, he.p)); 0 < E--;)(c = kt[E]).end || c.refresh(0, 1) || (Ke = ke), !(u = c.pin) || u !== oe && u !== ae && u !== C || c.isReverted || ((p = p || []).unshift(c), c.revert(!0, !0)), c !== kt[E] && (M--, E--);
                                for (Ua(T) && (T = T(ke)), T = Da(T, "start", ke), B = nc(T, oe, b, he, Ae(), Y, q, ke, m, Se, ye, y, de, ke._startClamp && "_startClamp") || (ae ? -.001 : 0), Ua(S) && (S = S(ke)), ct(S) && !S.indexOf("+=") && (~S.indexOf(" ") ? S = (ct(T) ? T.split(" ")[0] : "") + S : (_ = Db(S.substr(2), b), S = ct(T) ? T : (de ? Ne.utils.mapRange(0, de.duration(), de.scrollTrigger.start, de.scrollTrigger.end, B) : B) + _, k = oe)), S = Da(S, "end", ke), I = Math.max(B, nc(S || (k ? "100% 0" : y), k, b, he, Ae() + _, H, N, ke, m, Se, ye, y, de, ke._endClamp && "_endClamp")) || -.001, _ = 0, E = M; E--;)(u = (c = kt[E]).pin) && c.start - c._pinPush <= B && !de && 0 < c.end && (i = c.end - (ke._startClamp ? Math.max(0, c.start) : c.start), (u === oe && c.start - c._pinPush < B || u === C) && isNaN(T) && (_ += i * (1 - c.progress)), u === ae && (w += i));
                                if (B += _, I += _, ke._startClamp && (ke._startClamp += _), ke._endClamp && !rt && (ke._endClamp = I || -.001, I = Math.min(I, Ra(be, he))), F = I - B || (B -= .01) && .001, x && (Oe = Ne.utils.clamp(0, 1, Ne.utils.normalize(B, I, re))), ke._pinPush = w, Y && _ && ((i = {})[he.a] = "+=" + _, C && (i[he.p] = "-=" + Ae()), Ne.set([Y, H], i)), !ae || et && ke.end >= Ra(be, he)) {
                                    if (oe && Ae() && !de)
                                        for (o = oe.parentNode; o && o !== We;) o._pinOffset && (B -= o._pinOffset, I -= o._pinOffset), o = o.parentNode
                                } else i = nb(ae), s = he === qe, a = Ae(), Q = parseFloat(K(he.a)) + w, !y && 1 < I && (g = {
                                    style: g = (me ? Fe.scrollingElement || Ue : be).style,
                                    value: g["overflow" + he.a.toUpperCase()]
                                }, me && "scroll" !== nb(We)["overflow" + he.a.toUpperCase()] && (g.style["overflow" + he.a.toUpperCase()] = "scroll")), hc(ae, V, i), G = kc(ae), o = _t(ae, !0), f = ye && L(be, s ? He : qe)(), se ? ((Z = [se + he.os2, F + w + xt]).t = V, (E = se === bt ? rb(ae, he) + F + w : 0) && (Z.push(he.d, E + xt), "auto" !== V.style.flexBasis && (V.style.flexBasis = E + xt)), Pt(Z), C && kt.forEach(function(e) {
                                    e.pin === C && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
                                }), ye && Ae(re)) : (E = rb(ae, he)) && "auto" !== V.style.flexBasis && (V.style.flexBasis = E + xt), ye && ((l = {
                                    top: o.top + (s ? a - B : f) + xt,
                                    left: o.left + (s ? f : a - B) + xt,
                                    boxSizing: "border-box",
                                    position: "fixed"
                                })[ft] = l.maxWidth = Math.ceil(o.width) + xt, l[dt] = l.maxHeight = Math.ceil(o.height) + xt, l[mt] = l[mt + ht] = l[mt + pt] = l[mt + vt] = l[mt + gt] = "0", l[bt] = i[bt], l[bt + ht] = i[bt + ht], l[bt + pt] = i[bt + pt], l[bt + vt] = i[bt + vt], l[bt + gt] = i[bt + gt], W = function _copyState(e, t, r) {
                                    for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2) n = e[a], i.push(n, n in t ? t[n] : e[a + 1]);
                                    return i.t = e.t, i
                                }(U, l, fe), rt && Ae(0)), O ? (d = O._initted, $e(1), O.render(O.duration(), !0, !0), j = K(he.a) - Q + F + w, $ = 1 < Math.abs(F - j), ye && $ && W.splice(W.length - 2, 2), O.render(0, !0, !0), d || O.invalidate(!0), O.parent || O.totalTime(O.totalTime()), $e(0)) : j = F, g && (g.value ? g.style["overflow" + he.a.toUpperCase()] = g.value : g.style.removeProperty("overflow-" + he.a));
                                p && p.forEach(function(e) {
                                    return e.revert(!1, !0)
                                }), ke.start = B, ke.end = I, R = D = rt ? re : Ae(), de || rt || (R < re && Ae(re), ke.scroll.rec = 0), ke.revert(!1, !0), Pe = at(), te && (Ee = -1, te.restart(!0)), Ke = 0, O && ve && (O._initted || ne) && O.progress() !== ne && O.progress(ne || 0, !0).render(O.time(), !0, !0), (x || Oe !== ke.progress || de || le || O && !O._initted) && (O && !ve && (O._initted || Oe || !1 !== O.vars.immediateRender) && O.totalProgress(de && B < -.001 && !Oe ? Ne.utils.normalize(B, I, 0) : Oe, !0), ke.progress = x || (R - B) / F === Oe ? 0 : Oe), ae && se && (V._pinOffset = Math.round(ke.progress * j)), ee && ee.invalidate(), isNaN(h) || (h -= Ne.getProperty(q, he.p), v -= Ne.getProperty(N, he.p), rc(q, he, h), rc(Y, he, h - (n || 0)), rc(N, he, v), rc(H, he, v - (n || 0))), x && !rt && ke.update(), !ie || rt || X || (X = !0, ie(ke), X = !1)
                            }
                    }, ke.getVelocity = function() {
                        return (Ae() - D) / (at() - Ve) * 1e3 || 0
                    }, ke.endAnimation = function() {
                        Xa(ke.callbackAnimation), O && (ee ? ee.progress(1) : O.paused() ? ve || Xa(O, ke.direction < 0, 1) : Xa(O, O.reversed()))
                    }, ke.labelToScroll = function(e) {
                        return O && O.labels && (B || ke.refresh() || B) + O.labels[e] / O.duration() * F || 0
                    }, ke.getTrailing = function(t) {
                        var e = kt.indexOf(ke),
                            r = 0 < ke.direction ? kt.slice(0, e).reverse() : kt.slice(e + 1);
                        return (ct(t) ? r.filter(function(e) {
                            return e.vars.preventOverlaps === t
                        }) : r).filter(function(e) {
                            return 0 < ke.direction ? e.end <= B : e.start >= I
                        })
                    }, ke.update = function(e, t, r) {
                        if (!de || r || e) {
                            var n, i, o, a, s, l, c, u = !0 === rt ? re : ke.scroll(),
                                f = e ? 0 : (u - B) / F,
                                d = f < 0 ? 0 : 1 < f ? 1 : f || 0,
                                p = ke.progress;
                            if (t && (D = R, R = de ? Ae() : u, ue && (w = _, _ = O && !ve ? O.totalProgress() : d)), E && ae && !Ke && !ot && st && (!d && B < u + (u - D) / (at() - Ve) * E ? d = 1e-4 : 1 === d && I > u + (u - D) / (at() - Ve) * E && (d = .9999)), d !== p && ke.enabled) {
                                if (a = (s = (n = ke.isActive = !!d && d < 1) != (!!p && p < 1)) || !!d != !!p, ke.direction = p < d ? 1 : -1, ke.progress = d, a && !Ke && (i = d && !p ? 0 : 1 === d ? 1 : 1 === p ? 2 : 3, ve && (o = !s && "none" !== _e[i + 1] && _e[i + 1] || _e[i], c = O && ("complete" === o || "reset" === o || o in O))), ge && (s || c) && (c || M || !O) && (Ua(ge) ? ge(ke) : ke.getTrailing(ge).forEach(function(e) {
                                        return e.endAnimation()
                                    })), ve || (!ee || Ke || ot ? O && O.totalProgress(d, !(!Ke || !Pe && !e)) : (ee._dp._time - ee._start !== ee._time && ee.render(ee._dp._time - ee._start), ee.resetTo ? ee.resetTo("totalProgress", d, O._tTime / O._tDur) : (ee.vars.totalProgress = d, ee.invalidate().restart()))), ae)
                                    if (e && se && (V.style[se + he.os2] = m), ye) {
                                        if (a) {
                                            if (l = !e && p < d && u < I + 1 && u + 1 >= Ra(be, he), fe)
                                                if (e || !n && !l) pc(ae, V);
                                                else {
                                                    var g = _t(ae, !0),
                                                        h = u - B;
                                                    pc(ae, We, g.top + (he === qe ? h : 0) + xt, g.left + (he === qe ? 0 : h) + xt)
                                                } Pt(n || l ? W : G), $ && d < 1 && n || b(Q + (1 !== d || l ? 0 : j))
                                        }
                                    } else b(Ja(Q + j * d));
                                !ue || A.tween || Ke || ot || te.restart(!0), T && (s || ce && d && (d < 1 || !tt)) && Je(T.targets).forEach(function(e) {
                                    return e.classList[n || ce ? "add" : "remove"](T.className)
                                }), !k || ve || e || k(ke), a && !Ke ? (ve && (c && ("complete" === o ? O.pause().totalProgress(1) : "reset" === o ? O.restart(!0).pause() : "restart" === o ? O.restart(!0) : O[o]()), k && k(ke)), !s && tt || (C && s && Ya(ke, C), xe[i] && Ya(ke, xe[i]), ce && (1 === d ? ke.kill(!1, 1) : xe[i] = 0), s || xe[i = 1 === d ? 1 : 3] && Ya(ke, xe[i])), pe && !n && Math.abs(ke.getVelocity()) > (Va(pe) ? pe : 2500) && (Xa(ke.callbackAnimation), ee ? ee.progress(1) : Xa(O, "reverse" === o ? 1 : !d, 1))) : ve && k && !Ke && k(ke)
                            }
                            if (x) {
                                var v = de ? u / de.duration() * (de._caScrollDist || 0) : u;
                                y(v + (q._isFlipped ? 1 : 0)), x(v)
                            }
                            S && S(-u / de.duration() * (de._caScrollDist || 0))
                        }
                    }, ke.enable = function(e, t) {
                        ke.enabled || (ke.enabled = !0, xb(be, "resize", Mb), me || xb(be, "scroll", Kb), Te && xb(ScrollTrigger, "refreshInit", Te), !1 !== e && (ke.progress = Oe = 0, R = D = Ee = Ae()), !1 !== t && ke.refresh())
                    }, ke.getTween = function(e) {
                        return e && A ? A.tween : ee
                    }, ke.setPositions = function(e, t, r, n) {
                        if (de) {
                            var i = de.scrollTrigger,
                                o = de.duration(),
                                a = i.end - i.start;
                            e = i.start + a * e / o, t = i.start + a * t / o
                        }
                        ke.refresh(!1, !1, {
                            start: Ea(e, r && !!ke._startClamp),
                            end: Ea(t, r && !!ke._endClamp)
                        }, n), ke.update()
                    }, ke.adjustPinSpacing = function(e) {
                        if (Z && e) {
                            var t = Z.indexOf(he.d) + 1;
                            Z[t] = parseFloat(Z[t]) + e + xt, Z[1] = parseFloat(Z[1]) + e + xt, Pt(Z)
                        }
                    }, ke.disable = function(e, t) {
                        if (ke.enabled && (!1 !== e && ke.revert(!0, !0), ke.enabled = ke.isActive = !1, t || ee && ee.pause(), re = 0, n && (n.uncache = 1), Te && yb(ScrollTrigger, "refreshInit", Te), te && (te.pause(), A.tween && A.tween.kill() && (A.tween = 0)), !me)) {
                            for (var r = kt.length; r--;)
                                if (kt[r].scroller === be && kt[r] !== ke) return;
                            yb(be, "resize", Mb), me || yb(be, "scroll", Kb)
                        }
                    }, ke.kill = function(e, t) {
                        ke.disable(e, t), ee && !t && ee.kill(), a && delete Tt[a];
                        var r = kt.indexOf(ke);
                        0 <= r && kt.splice(r, 1), r === je && 0 < Et && je--, r = 0, kt.forEach(function(e) {
                            return e.scroller === ke.scroller && (r = 1)
                        }), r || rt || (ke.scroll.rec = 0), O && (O.scrollTrigger = null, e && O.revert({
                            kill: !1
                        }), t || O.kill()), Y && [Y, H, q, N].forEach(function(e) {
                            return e.parentNode && e.parentNode.removeChild(e)
                        }), it === ke && (it = 0), ae && (n && (n.uncache = 1), r = 0, kt.forEach(function(e) {
                            return e.pin === ae && r++
                        }), r || (n.spacer = 0)), P.onKill && P.onKill(ke)
                    }, kt.push(ke), ke.enable(!1, !1), o && o(ke), O && O.add && !F) {
                    var v = ke.update;
                    ke.update = function() {
                        ke.update = v, ze.cache++, B || I || ke.refresh()
                    }, Ne.delayedCall(.01, ke.update), F = .01, B = I = 0
                } else ke.refresh();
                ae && function _queueRefreshAll() {
                    if (nt !== Ct) {
                        var e = nt = Ct;
                        requestAnimationFrame(function() {
                            return e === Ct && Mt(!0)
                        })
                    }
                }()
            } else this.update = this.refresh = this.kill = Ia
        }, ScrollTrigger.register = function register(e) {
            return s || (Ne = e || La(), Ka() && window.document && ScrollTrigger.enable(), s = lt), s
        }, ScrollTrigger.defaults = function defaults(e) {
            if (e)
                for (var t in e) St[t] = e[t];
            return St
        }, ScrollTrigger.disable = function disable(t, r) {
            lt = 0, kt.forEach(function(e) {
                return e[r ? "kill" : "disable"](t)
            }), yb(Xe, "wheel", Kb), yb(Fe, "scroll", Kb), clearInterval(u), yb(Fe, "touchcancel", Ia), yb(We, "touchstart", Ia), wb(yb, Fe, "pointerdown,touchstart,mousedown", Ga), wb(yb, Fe, "pointerup,touchend,mouseup", Ha), c.kill(), Sa(yb);
            for (var e = 0; e < ze.length; e += 3) zb(yb, ze[e], ze[e + 1]), zb(yb, ze[e], ze[e + 2])
        }, ScrollTrigger.enable = function enable() {
            if (Xe = window, Fe = document, Ue = Fe.documentElement, We = Fe.body, Ne && (Je = Ne.utils.toArray, Ge = Ne.utils.clamp, x = Ne.core.context || Ia, $e = Ne.core.suppressOverwrites || Ia, _ = Xe.history.scrollRestoration || "auto", j = Xe.pageYOffset || 0, Ne.core.globals("ScrollTrigger", ScrollTrigger), We)) {
                lt = 1, (w = document.createElement("div")).style.height = "100vh", w.style.position = "absolute", Zb(),
                    function _rafBugFix() {
                        return lt && requestAnimationFrame(_rafBugFix)
                    }(), E.register(Ne), ScrollTrigger.isTouch = E.isTouch, R = E.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), b = 1 === E.isTouch, xb(Xe, "wheel", Kb), l = [Xe, Fe, Ue, We], Ne.matchMedia ? (ScrollTrigger.matchMedia = function(e) {
                        var t, r = Ne.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r
                    }, Ne.addEventListener("matchMediaInit", function() {
                        return Tb()
                    }), Ne.addEventListener("matchMediaRevert", function() {
                        return Sb()
                    }), Ne.addEventListener("matchMedia", function() {
                        Mt(0, 1), V("matchMedia")
                    }), Ne.matchMedia().add("(orientation: portrait)", function() {
                        return Lb(), Lb
                    })) : console.warn("Requires GSAP 3.11.0 or later"), Lb(), xb(Fe, "scroll", Kb);
                var e, t, r = We.hasAttribute("style"),
                    n = We.style,
                    i = n.borderTopStyle,
                    o = Ne.core.Animation.prototype;
                for (o.revert || Object.defineProperty(o, "revert", {
                        value: function value() {
                            return this.time(-.01, !0)
                        }
                    }), n.borderTopStyle = "solid", e = _t(We), qe.m = Math.round(e.top + qe.sc()) || 0, He.m = Math.round(e.left + He.sc()) || 0, i ? n.borderTopStyle = i : n.removeProperty("border-top-style"), r || (We.setAttribute("style", ""), We.removeAttribute("style")), u = setInterval(Jb, 250), Ne.delayedCall(.5, function() {
                        return ot = 0
                    }), xb(Fe, "touchcancel", Ia), xb(We, "touchstart", Ia), wb(xb, Fe, "pointerdown,touchstart,mousedown", Ga), wb(xb, Fe, "pointerup,touchend,mouseup", Ha), f = Ne.utils.checkPrefix("transform"), ee.push(f), s = at(), c = Ne.delayedCall(.2, Mt).pause(), g = [Fe, "visibilitychange", function() {
                        var e = Xe.innerWidth,
                            t = Xe.innerHeight;
                        Fe.hidden ? (d = e, p = t) : d === e && p === t || Mb()
                    }, Fe, "DOMContentLoaded", Mt, Xe, "load", Mt, Xe, "resize", Mb], Sa(xb), kt.forEach(function(e) {
                        return e.enable(0, 1)
                    }), t = 0; t < ze.length; t += 3) zb(yb, ze[t], ze[t + 1]), zb(yb, ze[t], ze[t + 2])
            }
        }, ScrollTrigger.config = function config(e) {
            "limitCallbacks" in e && (tt = !!e.limitCallbacks);
            var t = e.syncInterval;
            t && clearInterval(u) || (u = t) && setInterval(Jb, t), "ignoreMobileResize" in e && (b = 1 === ScrollTrigger.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Sa(yb) || Sa(xb, e.autoRefreshEvents || "none"), h = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }, ScrollTrigger.scrollerProxy = function scrollerProxy(e, t) {
            var r = J(e),
                n = ze.indexOf(r),
                i = Ma(r);
            ~n && ze.splice(n, i ? 6 : 2), t && (i ? Ye.unshift(Xe, t, We, t, Ue, t) : Ye.unshift(r, t))
        }, ScrollTrigger.clearMatchMedia = function clearMatchMedia(t) {
            kt.forEach(function(e) {
                return e._ctx && e._ctx.query === t && e._ctx.kill(!0, !0)
            })
        }, ScrollTrigger.isInViewport = function isInViewport(e, t, r) {
            var n = (ct(e) ? J(e) : e).getBoundingClientRect(),
                i = n[r ? ft : dt] * t || 0;
            return r ? 0 < n.right - i && n.left + i < Xe.innerWidth : 0 < n.bottom - i && n.top + i < Xe.innerHeight
        }, ScrollTrigger.positionInViewport = function positionInViewport(e, t, r) {
            ct(e) && (e = J(e));
            var n = e.getBoundingClientRect(),
                i = n[r ? ft : dt],
                o = null == t ? i / 2 : t in q ? q[t] * i : ~t.indexOf("%") ? parseFloat(t) * i / 100 : parseFloat(t) || 0;
            return r ? (n.left + o) / Xe.innerWidth : (n.top + o) / Xe.innerHeight
        }, ScrollTrigger.killAll = function killAll(e) {
            if (kt.slice(0).forEach(function(e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill()
                }), !0 !== e) {
                var t = U.killAll || [];
                U = {}, t.forEach(function(e) {
                    return e()
                })
            }
        }, ScrollTrigger);

    function ScrollTrigger(e, t) {
        s || ScrollTrigger.register(Ne) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), x(this), this.init(e, t)
    }
    ne.version = "3.13.0", ne.saveStyles = function(e) {
        return e ? Je(e).forEach(function(e) {
            if (e && e.style) {
                var t = K.indexOf(e);
                0 <= t && K.splice(t, 5), K.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), Ne.core.getCache(e), x())
            }
        }) : K
    }, ne.revert = function(e, t) {
        return Tb(!e, t)
    }, ne.create = function(e, t) {
        return new ne(e, t)
    }, ne.refresh = function(e) {
        return e ? Mb(!0) : (s || ne.register()) && Mt(!0)
    }, ne.update = function(e) {
        return ++ze.cache && Z(!0 === e ? 2 : 0)
    }, ne.clearScrollMemory = Ub, ne.maxScroll = function(e, t) {
        return Ra(e, t ? He : qe)
    }, ne.getScrollFunc = function(e, t) {
        return L(J(e), t ? He : qe)
    }, ne.getById = function(e) {
        return Tt[e]
    }, ne.getAll = function() {
        return kt.filter(function(e) {
            return "ScrollSmoother" !== e.vars.id
        })
    }, ne.isScrolling = function() {
        return !!st
    }, ne.snapDirectional = ub, ne.addEventListener = function(e, t) {
        var r = U[e] || (U[e] = []);
        ~r.indexOf(t) || r.push(t)
    }, ne.removeEventListener = function(e, t) {
        var r = U[e],
            n = r && r.indexOf(t);
        0 <= n && r.splice(n, 1)
    }, ne.batch = function(e, t) {
        function Jp(e, t) {
            var r = [],
                n = [],
                i = Ne.delayedCall(o, function() {
                    t(r, n), r = [], n = []
                }).pause();
            return function(e) {
                r.length || i.restart(!0), r.push(e.trigger), n.push(e), a <= r.length && i.progress(1)
            }
        }
        var r, n = [],
            i = {},
            o = t.interval || .016,
            a = t.batchMax || 1e9;
        for (r in t) i[r] = "on" === r.substr(0, 2) && Ua(t[r]) && "onRefreshInit" !== r ? Jp(0, t[r]) : t[r];
        return Ua(a) && (a = a(), xb(ne, "refresh", function() {
            return a = t.batchMax()
        })), Je(e).forEach(function(e) {
            var t = {};
            for (r in i) t[r] = i[r];
            t.trigger = e, n.push(ne.create(t))
        }), n
    };

    function uc(e, t, r, n) {
        return n < t ? e(n) : t < 0 && e(0), n < r ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
    }

    function vc(e, t) {
        !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (E.isTouch ? " pinch-zoom" : "") : "none", e === Ue && vc(We, t)
    }

    function xc(e) {
        var t, r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || Ne.core.getCache(o),
            s = at();
        if (!a._isScrollT || 2e3 < s - a._isScrollT) {
            for (; o && o !== We && (o.scrollHeight <= o.clientHeight && o.scrollWidth <= o.clientWidth || !oe[(t = nb(o)).overflowY] && !oe[t.overflowX]);) o = o.parentNode;
            a._isScroll = o && o !== n && !Ma(o) && (oe[(t = nb(o)).overflowY] || oe[t.overflowX]), a._isScrollT = s
        }!a._isScroll && "x" !== i || (r.stopPropagation(), r._gsapAllow = !0)
    }

    function yc(e, t, r, n) {
        return E.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: n = n && xc,
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function onEnable() {
                return r && xb(Fe, E.eventTypes[0], se, !1, !0)
            },
            onDisable: function onDisable() {
                return yb(Fe, E.eventTypes[0], se, !0)
            }
        })
    }

    function Cc(e) {
        function Gq() {
            return i = !1
        }

        function Jq() {
            o = Ra(p, qe), T = Ge(R ? 1 : 0, o), f && (k = Ge(0, Ra(p, He))), l = Ct
        }

        function Kq() {
            v._gsap.y = Ja(parseFloat(v._gsap.y) + b.offset) + "px", v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(v._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
        }

        function Qq() {
            Jq(), a.isActive() && a.vars.scrollY > o && (b() > o ? a.progress(1) && b(o) : a.resetTo("scrollY", o))
        }
        Wa(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
        var n, o, l, i, a, c, u, s, f = e.normalizeScrollX,
            t = e.momentum,
            r = e.allowNestedScroll,
            d = e.onRelease,
            p = J(e.target) || Ue,
            g = Ne.core.globals().ScrollSmoother,
            h = g && g.get(),
            v = R && (e.content && J(e.content) || h && !1 !== e.content && !h.smooth() && h.content()),
            b = L(p, qe),
            m = L(p, He),
            y = 1,
            x = (E.isTouch && Xe.visualViewport ? Xe.visualViewport.scale * Xe.visualViewport.width : Xe.outerWidth) / Xe.innerWidth,
            _ = 0,
            w = Ua(t) ? function() {
                return t(n)
            } : function() {
                return t || 2.8
            },
            S = yc(p, e.type, !0, r),
            k = Ia,
            T = Ia;
        return v && Ne.set(v, {
            y: "+=0"
        }), e.ignoreCheck = function(e) {
            return R && "touchmove" === e.type && function ignoreDrag() {
                if (i) {
                    requestAnimationFrame(Gq);
                    var e = Ja(n.deltaY / 2),
                        t = T(b.v - e);
                    if (v && t !== b.v + b.offset) {
                        b.offset = t - b.v;
                        var r = Ja((parseFloat(v && v._gsap.y) || 0) - b.offset);
                        v.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + r + ", 0, 1)", v._gsap.y = r + "px", b.cacheID = ze.cache, Z()
                    }
                    return !0
                }
                b.offset && Kq(), i = !0
            }() || 1.05 < y && "touchstart" !== e.type || n.isGesturing || e.touches && 1 < e.touches.length
        }, e.onPress = function() {
            i = !1;
            var e = y;
            y = Ja((Xe.visualViewport && Xe.visualViewport.scale || 1) / x), a.pause(), e !== y && vc(p, 1.01 < y || !f && "x"), c = m(), u = b(), Jq(), l = Ct
        }, e.onRelease = e.onGestureStart = function(e, t) {
            if (b.offset && Kq(), t) {
                ze.cache++;
                var r, n, i = w();
                f && (n = (r = m()) + .05 * i * -e.velocityX / .227, i *= uc(m, r, n, Ra(p, He)), a.vars.scrollX = k(n)), n = (r = b()) + .05 * i * -e.velocityY / .227, i *= uc(b, r, n, Ra(p, qe)), a.vars.scrollY = T(n), a.invalidate().duration(i).play(.01), (R && a.vars.scrollY >= o || o - 1 <= r) && Ne.to({}, {
                    onUpdate: Qq,
                    duration: i
                })
            } else s.restart(!0);
            d && d(e)
        }, e.onWheel = function() {
            a._ts && a.pause(), 1e3 < at() - _ && (l = 0, _ = at())
        }, e.onChange = function(e, t, r, n, i) {
            if (Ct !== l && Jq(), t && f && m(k(n[2] === t ? c + (e.startX - e.x) : m() + t - n[1])), r) {
                b.offset && Kq();
                var o = i[2] === r,
                    a = o ? u + e.startY - e.y : b() + r - i[1],
                    s = T(a);
                o && a !== s && (u += s - a), b(s)
            }(r || t) && Z()
        }, e.onEnable = function() {
            vc(p, !f && "x"), ne.addEventListener("refresh", Qq), xb(Xe, "resize", Qq), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = m.smooth = !1), S.enable()
        }, e.onDisable = function() {
            vc(p, !0), yb(Xe, "resize", Qq), ne.removeEventListener("refresh", Qq), S.kill()
        }, e.lockAxis = !1 !== e.lockAxis, ((n = new E(e)).iOS = R) && !b() && b(1), R && Ne.ticker.add(Ia), s = n._dc, a = Ne.to(n, {
            ease: "power4",
            paused: !0,
            inherit: !1,
            scrollX: f ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
                scrollY: qc(b, b(), function() {
                    return a.pause()
                })
            },
            onUpdate: Z,
            onComplete: s.vars.onComplete
        }), n
    }
    var ie, oe = {
            auto: 1,
            scroll: 1
        },
        ae = /(input|label|select|textarea)/i,
        se = function _captureInputs(e) {
            var t = ae.test(e.target.tagName);
            (t || ie) && (e._gsapAllow = !0, ie = t)
        };
    ne.sort = function(e) {
        if (Ua(e)) return kt.sort(e);
        var t = Xe.pageYOffset || 0;
        return ne.getAll().forEach(function(e) {
            return e._sortY = e.trigger ? t + e.trigger.getBoundingClientRect().top : e.start + Xe.innerHeight
        }), kt.sort(e || function(e, t) {
            return -1e6 * (e.vars.refreshPriority || 0) + (e.vars.containerAnimation ? 1e6 : e._sortY) - ((t.vars.containerAnimation ? 1e6 : t._sortY) + -1e6 * (t.vars.refreshPriority || 0))
        })
    }, ne.observe = function(e) {
        return new E(e)
    }, ne.normalizeScroll = function(e) {
        if (void 0 === e) return v;
        if (!0 === e && v) return v.enable();
        if (!1 === e) return v && v.kill(), void(v = e);
        var t = e instanceof E ? e : Cc(e);
        return v && v.target === t.target && v.kill(), Ma(t.target) && (v = t), t
    }, ne.core = {
        _getVelocityProp: M,
        _inputObserver: yc,
        _scrollers: ze,
        _proxies: Ye,
        bridge: {
            ss: function ss() {
                st || V("scrollStart"), st = at()
            },
            ref: function ref() {
                return Ke
            }
        }
    }, La() && Ne.registerPlugin(ne), e.ScrollTrigger = ne, e.default = ne;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/*!
 * ScrollToPlugin 3.13.0
 * https://gsap.com
 * 
 * @license Copyright 2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self).window = e.window || {})
}(this, function(e) {
    "use strict";

    function l() {
        return "undefined" != typeof window
    }

    function m() {
        return f || l() && (f = window.gsap) && f.registerPlugin && f
    }

    function n(e) {
        return "string" == typeof e
    }

    function o(e) {
        return "function" == typeof e
    }

    function p(e, t) {
        var o = "x" === t ? "Width" : "Height",
            n = "scroll" + o,
            r = "client" + o;
        return e === T || e === i || e === c ? Math.max(i[n], c[n]) - (T["inner" + o] || i[r] || c[r]) : e[n] - e["offset" + o]
    }

    function q(e, t) {
        var o = "scroll" + ("x" === t ? "Left" : "Top");
        return e === T && (null != e.pageXOffset ? o = "page" + t.toUpperCase() + "Offset" : e = null != i[o] ? i : c),
            function() {
                return e[o]
            }
    }

    function s(e, t) {
        if (!(e = y(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
        var o = e.getBoundingClientRect(),
            n = !t || t === T || t === c,
            r = n ? {
                top: i.clientTop - (T.pageYOffset || i.scrollTop || c.scrollTop || 0),
                left: i.clientLeft - (T.pageXOffset || i.scrollLeft || c.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            l = {
                x: o.left - r.left,
                y: o.top - r.top
            };
        return !n && t && (l.x += q(t, "x")(), l.y += q(t, "y")()), l
    }

    function t(e, t, o, r, l) {
        return isNaN(e) || "object" == typeof e ? n(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - l : "max" === e ? p(t, o) - l : Math.min(p(t, o), s(e, t)[o] - l) : parseFloat(e) - l
    }

    function u() {
        f = m(), l() && f && "undefined" != typeof document && document.body && (T = window, c = document.body, i = document.documentElement, y = f.utils.toArray, f.config({
            autoKillThreshold: 7
        }), h = f.config(), a = 1)
    }
    var f, a, T, i, c, y, h, v, r = {
        version: "3.13.0",
        name: "scrollTo",
        rawVars: 1,
        register: function register(e) {
            f = e, u()
        },
        init: function init(e, r, l, i, s) {
            a || u();
            var p = this,
                c = f.getProperty(e, "scrollSnapType");
            p.isWin = e === T, p.target = e, p.tween = l, r = function _clean(e, t, r, l) {
                if (o(e) && (e = e(t, r, l)), "object" != typeof e) return n(e) && "max" !== e && "=" !== e.charAt(1) ? {
                    x: e,
                    y: e
                } : {
                    y: e
                };
                if (e.nodeType) return {
                    y: e,
                    x: e
                };
                var i, s = {};
                for (i in e) s[i] = "onAutoKill" !== i && o(e[i]) ? e[i](t, r, l) : e[i];
                return s
            }(r, i, e, s), p.vars = r, p.autoKill = !!("autoKill" in r ? r : h).autoKill, p.getX = q(e, "x"), p.getY = q(e, "y"), p.x = p.xPrev = p.getX(), p.y = p.yPrev = p.getY(), v = v || f.core.globals().ScrollTrigger, "smooth" === f.getProperty(e, "scrollBehavior") && f.set(e, {
                scrollBehavior: "auto"
            }), c && "none" !== c && (p.snap = 1, p.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != r.x ? (p.add(p, "x", p.x, t(r.x, e, "x", p.x, r.offsetX || 0), i, s), p._props.push("scrollTo_x")) : p.skipX = 1, null != r.y ? (p.add(p, "y", p.y, t(r.y, e, "y", p.y, r.offsetY || 0), i, s), p._props.push("scrollTo_y")) : p.skipY = 1
        },
        render: function render(e, t) {
            for (var o, n, r, l, i, s = t._pt, c = t.target, u = t.tween, f = t.autoKill, a = t.xPrev, y = t.yPrev, d = t.isWin, g = t.snap, x = t.snapInline; s;) s.r(e, s.d), s = s._next;
            o = d || !t.skipX ? t.getX() : a, r = (n = d || !t.skipY ? t.getY() : y) - y, l = o - a, i = h.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), f && (!t.skipX && (i < l || l < -i) && o < p(c, "x") && (t.skipX = 1), !t.skipY && (i < r || r < -i) && n < p(c, "y") && (t.skipY = 1), t.skipX && t.skipY && (u.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(u, t.vars.onAutoKillParams || []))), d ? T.scrollTo(t.skipX ? o : t.x, t.skipY ? n : t.y) : (t.skipY || (c.scrollTop = t.y), t.skipX || (c.scrollLeft = t.x)), !g || 1 !== e && 0 !== e || (n = c.scrollTop, o = c.scrollLeft, x ? c.style.scrollSnapType = x : c.style.removeProperty("scroll-snap-type"), c.scrollTop = n + 1, c.scrollLeft = o + 1, c.scrollTop = n, c.scrollLeft = o), t.xPrev = t.x, t.yPrev = t.y, v && v.update()
        },
        kill: function kill(e) {
            var t = "scrollTo" === e,
                o = this._props.indexOf(e);
            return !t && "scrollTo_x" !== e || (this.skipX = 1), !t && "scrollTo_y" !== e || (this.skipY = 1), -1 < o && this._props.splice(o, 1), !this._props.length
        }
    };
    r.max = p, r.getOffset = s, r.buildGetter = q, r.config = function(e) {
        for (var t in h || u() || (h = f.config()), e) h[t] = e[t]
    }, m() && f.registerPlugin(r), e.ScrollToPlugin = r, e.default = r;
    if (typeof(window) === "undefined" || window !== e) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    } else {
        delete e.default
    }
});
/**
 * Swiper 11.2.10
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2025 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 28, 2025
 */
var Swiper = (function() {
    'use strict';
    /**
     * SSR Window 5.0.1
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2025, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: June 27, 2025
     */
    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
        return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend$1(target, src) {
        if (target === void 0) {
            target = {};
        }
        if (src === void 0) {
            src = {};
        }
        const noExtend = ['__proto__', 'constructor', 'prototype'];
        Object.keys(src).filter(key => noExtend.indexOf(key) < 0).forEach(key => {
            if (typeof target[key] === 'undefined') target[key] = src[key];
            else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
                extend$1(target[key], src[key]);
            }
        });
    }
    const ssrDocument = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ''
        },
        querySelector() {
            return null;
        },
        querySelectorAll() {
            return [];
        },
        getElementById() {
            return null;
        },
        createEvent() {
            return {
                initEvent() {}
            };
        },
        createElement() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName() {
                    return [];
                }
            };
        },
        createElementNS() {
            return {};
        },
        importNode() {
            return null;
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        }
    };

    function getDocument() {
        const doc = typeof document !== 'undefined' ? document : {};
        extend$1(doc, ssrDocument);
        return doc;
    }
    const ssrWindow = {
        document: ssrDocument,
        navigator: {
            userAgent: ''
        },
        location: {
            hash: '',
            host: '',
            hostname: '',
            href: '',
            origin: '',
            pathname: '',
            protocol: '',
            search: ''
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function CustomEvent() {
            return this;
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle() {
            return {
                getPropertyValue() {
                    return '';
                }
            };
        },
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia() {
            return {};
        },
        requestAnimationFrame(callback) {
            if (typeof setTimeout === 'undefined') {
                callback();
                return null;
            }
            return setTimeout(callback, 0);
        },
        cancelAnimationFrame(id) {
            if (typeof setTimeout === 'undefined') {
                return;
            }
            clearTimeout(id);
        }
    };

    function getWindow() {
        const win = typeof window !== 'undefined' ? window : {};
        extend$1(win, ssrWindow);
        return win;
    }

    function classesToTokens(classes) {
        if (classes === void 0) {
            classes = '';
        }
        return classes.trim().split(' ').filter(c => !!c.trim());
    }

    function deleteProps(obj) {
        const object = obj;
        Object.keys(object).forEach(key => {
            try {
                object[key] = null;
            } catch (e) {
                // no getter for object
            }
            try {
                delete object[key];
            } catch (e) {
                // something got wrong
            }
        });
    }

    function nextTick(callback, delay) {
        if (delay === void 0) {
            delay = 0;
        }
        return setTimeout(callback, delay);
    }

    function now() {
        return Date.now();
    }

    function getComputedStyle$1(el) {
        const window = getWindow();
        let style;
        if (window.getComputedStyle) {
            style = window.getComputedStyle(el, null);
        }
        if (!style && el.currentStyle) {
            style = el.currentStyle;
        }
        if (!style) {
            style = el.style;
        }
        return style;
    }

    function getTranslate(el, axis) {
        if (axis === void 0) {
            axis = 'x';
        }
        const window = getWindow();
        let matrix;
        let curTransform;
        let transformMatrix;
        const curStyle = getComputedStyle$1(el);
        if (window.WebKitCSSMatrix) {
            curTransform = curStyle.transform || curStyle.webkitTransform;
            if (curTransform.split(',').length > 6) {
                curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
            }
            // Some old versions of Webkit choke when 'none' is passed; pass
            // empty string instead in this case
            transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
            transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
            matrix = transformMatrix.toString().split(',');
        }
        if (axis === 'x') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41;
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[12]);
            // Normal Browsers
            else curTransform = parseFloat(matrix[4]);
        }
        if (axis === 'y') {
            // Latest Chrome and webkits Fix
            if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42;
            // Crazy IE10 Matrix
            else if (matrix.length === 16) curTransform = parseFloat(matrix[13]);
            // Normal Browsers
            else curTransform = parseFloat(matrix[5]);
        }
        return curTransform || 0;
    }

    function isObject(o) {
        return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
        // eslint-disable-next-line
        if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
            return node instanceof HTMLElement;
        }
        return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
        const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
        const noExtend = ['__proto__', 'constructor', 'prototype'];
        for (let i = 1; i < arguments.length; i += 1) {
            const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
            if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
                const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);
                for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                    const nextKey = keysArray[nextIndex];
                    const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend(to[nextKey], nextSource[nextKey]);
                            }
                        } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                            to[nextKey] = {};
                            if (nextSource[nextKey].__swiper__) {
                                to[nextKey] = nextSource[nextKey];
                            } else {
                                extend(to[nextKey], nextSource[nextKey]);
                            }
                        } else {
                            to[nextKey] = nextSource[nextKey];
                        }
                    }
                }
            }
        }
        return to;
    }

    function setCSSProperty(el, varName, varValue) {
        el.style.setProperty(varName, varValue);
    }

    function animateCSSModeScroll(_ref) {
        let {
            swiper,
            targetPosition,
            side
        } = _ref;
        const window = getWindow();
        const startPosition = -swiper.translate;
        let startTime = null;
        let time;
        const duration = swiper.params.speed;
        swiper.wrapperEl.style.scrollSnapType = 'none';
        window.cancelAnimationFrame(swiper.cssModeFrameID);
        const dir = targetPosition > startPosition ? 'next' : 'prev';
        const isOutOfBound = (current, target) => {
            return dir === 'next' && current >= target || dir === 'prev' && current <= target;
        };
        const animate = () => {
            time = new Date().getTime();
            if (startTime === null) {
                startTime = time;
            }
            const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
            const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
            let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);
            if (isOutOfBound(currentPosition, targetPosition)) {
                currentPosition = targetPosition;
            }
            swiper.wrapperEl.scrollTo({
                [side]: currentPosition
            });
            if (isOutOfBound(currentPosition, targetPosition)) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.scrollSnapType = '';
                setTimeout(() => {
                    swiper.wrapperEl.style.overflow = '';
                    swiper.wrapperEl.scrollTo({
                        [side]: currentPosition
                    });
                });
                window.cancelAnimationFrame(swiper.cssModeFrameID);
                return;
            }
            swiper.cssModeFrameID = window.requestAnimationFrame(animate);
        };
        animate();
    }

    function getSlideTransformEl(slideEl) {
        return slideEl.querySelector('.swiper-slide-transform') || slideEl.shadowRoot && slideEl.shadowRoot.querySelector('.swiper-slide-transform') || slideEl;
    }

    function elementChildren(element, selector) {
        if (selector === void 0) {
            selector = '';
        }
        const window = getWindow();
        const children = [...element.children];
        if (window.HTMLSlotElement && element instanceof HTMLSlotElement) {
            children.push(...element.assignedElements());
        }
        if (!selector) {
            return children;
        }
        return children.filter(el => el.matches(selector));
    }

    function elementIsChildOfSlot(el, slot) {
        // Breadth-first search through all parent's children and assigned elements
        const elementsQueue = [slot];
        while (elementsQueue.length > 0) {
            const elementToCheck = elementsQueue.shift();
            if (el === elementToCheck) {
                return true;
            }
            elementsQueue.push(...elementToCheck.children, ...(elementToCheck.shadowRoot ? elementToCheck.shadowRoot.children : []), ...(elementToCheck.assignedElements ? elementToCheck.assignedElements() : []));
        }
    }

    function elementIsChildOf(el, parent) {
        const window = getWindow();
        let isChild = parent.contains(el);
        if (!isChild && window.HTMLSlotElement && parent instanceof HTMLSlotElement) {
            const children = [...parent.assignedElements()];
            isChild = children.includes(el);
            if (!isChild) {
                isChild = elementIsChildOfSlot(el, parent);
            }
        }
        return isChild;
    }

    function showWarning(text) {
        try {
            console.warn(text);
            return;
        } catch (err) {
            // err
        }
    }

    function createElement(tag, classes) {
        if (classes === void 0) {
            classes = [];
        }
        const el = document.createElement(tag);
        el.classList.add(...(Array.isArray(classes) ? classes : classesToTokens(classes)));
        return el;
    }

    function elementOffset(el) {
        const window = getWindow();
        const document = getDocument();
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
            top: box.top + scrollTop - clientTop,
            left: box.left + scrollLeft - clientLeft
        };
    }

    function elementPrevAll(el, selector) {
        const prevEls = [];
        while (el.previousElementSibling) {
            const prev = el.previousElementSibling; // eslint-disable-line
            if (selector) {
                if (prev.matches(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return prevEls;
    }

    function elementNextAll(el, selector) {
        const nextEls = [];
        while (el.nextElementSibling) {
            const next = el.nextElementSibling; // eslint-disable-line
            if (selector) {
                if (next.matches(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return nextEls;
    }

    function elementStyle(el, prop) {
        const window = getWindow();
        return window.getComputedStyle(el, null).getPropertyValue(prop);
    }

    function elementIndex(el) {
        let child = el;
        let i;
        if (child) {
            i = 0;
            // eslint-disable-next-line
            while ((child = child.previousSibling) !== null) {
                if (child.nodeType === 1) i += 1;
            }
            return i;
        }
        return undefined;
    }

    function elementParents(el, selector) {
        const parents = []; // eslint-disable-line
        let parent = el.parentElement; // eslint-disable-line
        while (parent) {
            if (selector) {
                if (parent.matches(selector)) parents.push(parent);
            } else {
                parents.push(parent);
            }
            parent = parent.parentElement;
        }
        return parents;
    }

    function elementTransitionEnd(el, callback) {
        function fireCallBack(e) {
            if (e.target !== el) return;
            callback.call(el, e);
            el.removeEventListener('transitionend', fireCallBack);
        }
        if (callback) {
            el.addEventListener('transitionend', fireCallBack);
        }
    }

    function elementOuterSize(el, size, includeMargins) {
        const window = getWindow();
        if (includeMargins) {
            return el[size === 'width' ? 'offsetWidth' : 'offsetHeight'] + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-right' : 'margin-top')) + parseFloat(window.getComputedStyle(el, null).getPropertyValue(size === 'width' ? 'margin-left' : 'margin-bottom'));
        }
        return el.offsetWidth;
    }

    function makeElementsArray(el) {
        return (Array.isArray(el) ? el : [el]).filter(e => !!e);
    }

    function getRotateFix(swiper) {
        return v => {
            if (Math.abs(v) > 0 && swiper.browser && swiper.browser.need3dFix && Math.abs(v) % 90 === 0) {
                return v + 0.001;
            }
            return v;
        };
    }

    function setInnerHTML(el, html) {
        if (html === void 0) {
            html = '';
        }
        if (typeof trustedTypes !== 'undefined') {
            el.innerHTML = trustedTypes.createPolicy('html', {
                createHTML: s => s
            }).createHTML(html);
        } else {
            el.innerHTML = html;
        }
    }
    let support;

    function calcSupport() {
        const window = getWindow();
        const document = getDocument();
        return {
            smoothScroll: document.documentElement && document.documentElement.style && 'scrollBehavior' in document.documentElement.style,
            touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)
        };
    }

    function getSupport() {
        if (!support) {
            support = calcSupport();
        }
        return support;
    }
    let deviceCached;

    function calcDevice(_temp) {
        let {
            userAgent
        } = _temp === void 0 ? {} : _temp;
        const support = getSupport();
        const window = getWindow();
        const platform = window.navigator.platform;
        const ua = userAgent || window.navigator.userAgent;
        const device = {
            ios: false,
            android: false
        };
        const screenWidth = window.screen.width;
        const screenHeight = window.screen.height;
        const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
        let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
        const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
        const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        const windows = platform === 'Win32';
        let macos = platform === 'MacIntel';
        // iPadOs 13 fix
        const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
        if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
            ipad = ua.match(/(Version)\/([\d.]+)/);
            if (!ipad) ipad = [0, 1, '13_0_0'];
            macos = false;
        }
        // Android
        if (android && !windows) {
            device.os = 'android';
            device.android = true;
        }
        if (ipad || iphone || ipod) {
            device.os = 'ios';
            device.ios = true;
        }
        // Export object
        return device;
    }

    function getDevice(overrides) {
        if (overrides === void 0) {
            overrides = {};
        }
        if (!deviceCached) {
            deviceCached = calcDevice(overrides);
        }
        return deviceCached;
    }
    let browser;

    function calcBrowser() {
        const window = getWindow();
        const device = getDevice();
        let needPerspectiveFix = false;

        function isSafari() {
            const ua = window.navigator.userAgent.toLowerCase();
            return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
        }
        if (isSafari()) {
            const ua = String(window.navigator.userAgent);
            if (ua.includes('Version/')) {
                const [major, minor] = ua.split('Version/')[1].split(' ')[0].split('.').map(num => Number(num));
                needPerspectiveFix = major < 16 || major === 16 && minor < 2;
            }
        }
        const isWebView = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent);
        const isSafariBrowser = isSafari();
        const need3dFix = isSafariBrowser || isWebView && device.ios;
        return {
            isSafari: needPerspectiveFix || isSafariBrowser,
            needPerspectiveFix,
            need3dFix,
            isWebView
        };
    }

    function getBrowser() {
        if (!browser) {
            browser = calcBrowser();
        }
        return browser;
    }

    function Resize(_ref) {
        let {
            swiper,
            on,
            emit
        } = _ref;
        const window = getWindow();
        let observer = null;
        let animationFrame = null;
        const resizeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('beforeResize');
            emit('resize');
        };
        const createObserver = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            observer = new ResizeObserver(entries => {
                animationFrame = window.requestAnimationFrame(() => {
                    const {
                        width,
                        height
                    } = swiper;
                    let newWidth = width;
                    let newHeight = height;
                    entries.forEach(_ref2 => {
                        let {
                            contentBoxSize,
                            contentRect,
                            target
                        } = _ref2;
                        if (target && target !== swiper.el) return;
                        newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
                        newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
                    });
                    if (newWidth !== width || newHeight !== height) {
                        resizeHandler();
                    }
                });
            });
            observer.observe(swiper.el);
        };
        const removeObserver = () => {
            if (animationFrame) {
                window.cancelAnimationFrame(animationFrame);
            }
            if (observer && observer.unobserve && swiper.el) {
                observer.unobserve(swiper.el);
                observer = null;
            }
        };
        const orientationChangeHandler = () => {
            if (!swiper || swiper.destroyed || !swiper.initialized) return;
            emit('orientationchange');
        };
        on('init', () => {
            if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
                createObserver();
                return;
            }
            window.addEventListener('resize', resizeHandler);
            window.addEventListener('orientationchange', orientationChangeHandler);
        });
        on('destroy', () => {
            removeObserver();
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('orientationchange', orientationChangeHandler);
        });
    }

    function Observer(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const observers = [];
        const window = getWindow();
        const attach = function(target, options) {
            if (options === void 0) {
                options = {};
            }
            const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
            const observer = new ObserverFunc(mutations => {
                // The observerUpdate event should only be triggered
                // once despite the number of mutations.  Additional
                // triggers are redundant and are very costly
                if (swiper.__preventObserver__) return;
                if (mutations.length === 1) {
                    emit('observerUpdate', mutations[0]);
                    return;
                }
                const observerUpdate = function observerUpdate() {
                    emit('observerUpdate', mutations[0]);
                };
                if (window.requestAnimationFrame) {
                    window.requestAnimationFrame(observerUpdate);
                } else {
                    window.setTimeout(observerUpdate, 0);
                }
            });
            observer.observe(target, {
                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
                childList: swiper.isElement || (typeof options.childList === 'undefined' ? true : options).childList,
                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
            });
            observers.push(observer);
        };
        const init = () => {
            if (!swiper.params.observer) return;
            if (swiper.params.observeParents) {
                const containerParents = elementParents(swiper.hostEl);
                for (let i = 0; i < containerParents.length; i += 1) {
                    attach(containerParents[i]);
                }
            }
            // Observe container
            attach(swiper.hostEl, {
                childList: swiper.params.observeSlideChildren
            });
            // Observe wrapper
            attach(swiper.wrapperEl, {
                attributes: false
            });
        };
        const destroy = () => {
            observers.forEach(observer => {
                observer.disconnect();
            });
            observers.splice(0, observers.length);
        };
        extendParams({
            observer: false,
            observeParents: false,
            observeSlideChildren: false
        });
        on('init', init);
        on('destroy', destroy);
    }
    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
        on(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            events.split(' ').forEach(event => {
                if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
                self.eventsListeners[event][method](handler);
            });
            return self;
        },
        once(events, handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;

            function onceHandler() {
                self.off(events, onceHandler);
                if (onceHandler.__emitterProxy) {
                    delete onceHandler.__emitterProxy;
                }
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                handler.apply(self, args);
            }
            onceHandler.__emitterProxy = handler;
            return self.on(events, onceHandler, priority);
        },
        onAny(handler, priority) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (typeof handler !== 'function') return self;
            const method = priority ? 'unshift' : 'push';
            if (self.eventsAnyListeners.indexOf(handler) < 0) {
                self.eventsAnyListeners[method](handler);
            }
            return self;
        },
        offAny(handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsAnyListeners) return self;
            const index = self.eventsAnyListeners.indexOf(handler);
            if (index >= 0) {
                self.eventsAnyListeners.splice(index, 1);
            }
            return self;
        },
        off(events, handler) {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            events.split(' ').forEach(event => {
                if (typeof handler === 'undefined') {
                    self.eventsListeners[event] = [];
                } else if (self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach((eventHandler, index) => {
                        if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                            self.eventsListeners[event].splice(index, 1);
                        }
                    });
                }
            });
            return self;
        },
        emit() {
            const self = this;
            if (!self.eventsListeners || self.destroyed) return self;
            if (!self.eventsListeners) return self;
            let events;
            let data;
            let context;
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
            }
            if (typeof args[0] === 'string' || Array.isArray(args[0])) {
                events = args[0];
                data = args.slice(1, args.length);
                context = self;
            } else {
                events = args[0].events;
                data = args[0].data;
                context = args[0].context || self;
            }
            data.unshift(context);
            const eventsArray = Array.isArray(events) ? events : events.split(' ');
            eventsArray.forEach(event => {
                if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
                    self.eventsAnyListeners.forEach(eventHandler => {
                        eventHandler.apply(context, [event, ...data]);
                    });
                }
                if (self.eventsListeners && self.eventsListeners[event]) {
                    self.eventsListeners[event].forEach(eventHandler => {
                        eventHandler.apply(context, data);
                    });
                }
            });
            return self;
        }
    };

    function updateSize() {
        const swiper = this;
        let width;
        let height;
        const el = swiper.el;
        if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
            width = swiper.params.width;
        } else {
            width = el.clientWidth;
        }
        if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
            height = swiper.params.height;
        } else {
            height = el.clientHeight;
        }
        if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
            return;
        }
        // Subtract paddings
        width = width - parseInt(elementStyle(el, 'padding-left') || 0, 10) - parseInt(elementStyle(el, 'padding-right') || 0, 10);
        height = height - parseInt(elementStyle(el, 'padding-top') || 0, 10) - parseInt(elementStyle(el, 'padding-bottom') || 0, 10);
        if (Number.isNaN(width)) width = 0;
        if (Number.isNaN(height)) height = 0;
        Object.assign(swiper, {
            width,
            height,
            size: swiper.isHorizontal() ? width : height
        });
    }

    function updateSlides() {
        const swiper = this;

        function getDirectionPropertyValue(node, label) {
            return parseFloat(node.getPropertyValue(swiper.getDirectionLabel(label)) || 0);
        }
        const params = swiper.params;
        const {
            wrapperEl,
            slidesEl,
            size: swiperSize,
            rtlTranslate: rtl,
            wrongRTL
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
        const slides = elementChildren(slidesEl, `.${swiper.params.slideClass}, swiper-slide`);
        const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
        let snapGrid = [];
        const slidesGrid = [];
        const slidesSizesGrid = [];
        let offsetBefore = params.slidesOffsetBefore;
        if (typeof offsetBefore === 'function') {
            offsetBefore = params.slidesOffsetBefore.call(swiper);
        }
        let offsetAfter = params.slidesOffsetAfter;
        if (typeof offsetAfter === 'function') {
            offsetAfter = params.slidesOffsetAfter.call(swiper);
        }
        const previousSnapGridLength = swiper.snapGrid.length;
        const previousSlidesGridLength = swiper.slidesGrid.length;
        let spaceBetween = params.spaceBetween;
        let slidePosition = -offsetBefore;
        let prevSlideSize = 0;
        let index = 0;
        if (typeof swiperSize === 'undefined') {
            return;
        }
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        swiper.virtualSize = -spaceBetween;
        // reset margins
        slides.forEach(slideEl => {
            if (rtl) {
                slideEl.style.marginLeft = '';
            } else {
                slideEl.style.marginRight = '';
            }
            slideEl.style.marginBottom = '';
            slideEl.style.marginTop = '';
        });
        // reset cssMode offsets
        if (params.centeredSlides && params.cssMode) {
            setCSSProperty(wrapperEl, '--swiper-centered-offset-before', '');
            setCSSProperty(wrapperEl, '--swiper-centered-offset-after', '');
        }
        const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;
        if (gridEnabled) {
            swiper.grid.initSlides(slides);
        } else if (swiper.grid) {
            swiper.grid.unsetSlides();
        }
        // Calc slides
        let slideSize;
        const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
            return typeof params.breakpoints[key].slidesPerView !== 'undefined';
        }).length > 0;
        for (let i = 0; i < slidesLength; i += 1) {
            slideSize = 0;
            let slide;
            if (slides[i]) slide = slides[i];
            if (gridEnabled) {
                swiper.grid.updateSlide(i, slide, slides);
            }
            if (slides[i] && elementStyle(slide, 'display') === 'none') continue; // eslint-disable-line
            if (params.slidesPerView === 'auto') {
                if (shouldResetSlideSize) {
                    slides[i].style[swiper.getDirectionLabel('width')] = ``;
                }
                const slideStyles = getComputedStyle(slide);
                const currentTransform = slide.style.transform;
                const currentWebKitTransform = slide.style.webkitTransform;
                if (currentTransform) {
                    slide.style.transform = 'none';
                }
                if (currentWebKitTransform) {
                    slide.style.webkitTransform = 'none';
                }
                if (params.roundLengths) {
                    slideSize = swiper.isHorizontal() ? elementOuterSize(slide, 'width', true) : elementOuterSize(slide, 'height', true);
                } else {
                    // eslint-disable-next-line
                    const width = getDirectionPropertyValue(slideStyles, 'width');
                    const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
                    const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
                    const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
                    const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
                    const boxSizing = slideStyles.getPropertyValue('box-sizing');
                    if (boxSizing && boxSizing === 'border-box') {
                        slideSize = width + marginLeft + marginRight;
                    } else {
                        const {
                            clientWidth,
                            offsetWidth
                        } = slide;
                        slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
                    }
                }
                if (currentTransform) {
                    slide.style.transform = currentTransform;
                }
                if (currentWebKitTransform) {
                    slide.style.webkitTransform = currentWebKitTransform;
                }
                if (params.roundLengths) slideSize = Math.floor(slideSize);
            } else {
                slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
                if (params.roundLengths) slideSize = Math.floor(slideSize);
                if (slides[i]) {
                    slides[i].style[swiper.getDirectionLabel('width')] = `${slideSize}px`;
                }
            }
            if (slides[i]) {
                slides[i].swiperSlideSize = slideSize;
            }
            slidesSizesGrid.push(slideSize);
            if (params.centeredSlides) {
                slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
                if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
                if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
            } else {
                if (params.roundLengths) slidePosition = Math.floor(slidePosition);
                if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
                slidesGrid.push(slidePosition);
                slidePosition = slidePosition + slideSize + spaceBetween;
            }
            swiper.virtualSize += slideSize + spaceBetween;
            prevSlideSize = slideSize;
            index += 1;
        }
        swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
        if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
            wrapperEl.style.width = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (params.setWrapperSize) {
            wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
        }
        if (gridEnabled) {
            swiper.grid.updateWrapperSize(slideSize, snapGrid);
        }
        // Remove last grid elements depending on width
        if (!params.centeredSlides) {
            const newSlidesGrid = [];
            for (let i = 0; i < snapGrid.length; i += 1) {
                let slidesGridItem = snapGrid[i];
                if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
                    newSlidesGrid.push(slidesGridItem);
                }
            }
            snapGrid = newSlidesGrid;
            if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
                snapGrid.push(swiper.virtualSize - swiperSize);
            }
        }
        if (isVirtual && params.loop) {
            const size = slidesSizesGrid[0] + spaceBetween;
            if (params.slidesPerGroup > 1) {
                const groups = Math.ceil((swiper.virtual.slidesBefore + swiper.virtual.slidesAfter) / params.slidesPerGroup);
                const groupSize = size * params.slidesPerGroup;
                for (let i = 0; i < groups; i += 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + groupSize);
                }
            }
            for (let i = 0; i < swiper.virtual.slidesBefore + swiper.virtual.slidesAfter; i += 1) {
                if (params.slidesPerGroup === 1) {
                    snapGrid.push(snapGrid[snapGrid.length - 1] + size);
                }
                slidesGrid.push(slidesGrid[slidesGrid.length - 1] + size);
                swiper.virtualSize += size;
            }
        }
        if (snapGrid.length === 0) snapGrid = [0];
        if (spaceBetween !== 0) {
            const key = swiper.isHorizontal() && rtl ? 'marginLeft' : swiper.getDirectionLabel('marginRight');
            slides.filter((_, slideIndex) => {
                if (!params.cssMode || params.loop) return true;
                if (slideIndex === slides.length - 1) {
                    return false;
                }
                return true;
            }).forEach(slideEl => {
                slideEl.style[key] = `${spaceBetween}px`;
            });
        }
        if (params.centeredSlides && params.centeredSlidesBounds) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            });
            allSlidesSize -= spaceBetween;
            const maxSnap = allSlidesSize > swiperSize ? allSlidesSize - swiperSize : 0;
            snapGrid = snapGrid.map(snap => {
                if (snap <= 0) return -offsetBefore;
                if (snap > maxSnap) return maxSnap + offsetAfter;
                return snap;
            });
        }
        if (params.centerInsufficientSlides) {
            let allSlidesSize = 0;
            slidesSizesGrid.forEach(slideSizeValue => {
                allSlidesSize += slideSizeValue + (spaceBetween || 0);
            });
            allSlidesSize -= spaceBetween;
            const offsetSize = (params.slidesOffsetBefore || 0) + (params.slidesOffsetAfter || 0);
            if (allSlidesSize + offsetSize < swiperSize) {
                const allSlidesOffset = (swiperSize - allSlidesSize - offsetSize) / 2;
                snapGrid.forEach((snap, snapIndex) => {
                    snapGrid[snapIndex] = snap - allSlidesOffset;
                });
                slidesGrid.forEach((snap, snapIndex) => {
                    slidesGrid[snapIndex] = snap + allSlidesOffset;
                });
            }
        }
        Object.assign(swiper, {
            slides,
            snapGrid,
            slidesGrid,
            slidesSizesGrid
        });
        if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
            setCSSProperty(wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
            setCSSProperty(wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
            const addToSnapGrid = -swiper.snapGrid[0];
            const addToSlidesGrid = -swiper.slidesGrid[0];
            swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
            swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
        }
        if (slidesLength !== previousSlidesLength) {
            swiper.emit('slidesLengthChange');
        }
        if (snapGrid.length !== previousSnapGridLength) {
            if (swiper.params.watchOverflow) swiper.checkOverflow();
            swiper.emit('snapGridLengthChange');
        }
        if (slidesGrid.length !== previousSlidesGridLength) {
            swiper.emit('slidesGridLengthChange');
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        swiper.emit('slidesUpdated');
        if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
            const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
            const hasClassBackfaceClassAdded = swiper.el.classList.contains(backFaceHiddenClass);
            if (slidesLength <= params.maxBackfaceHiddenSlides) {
                if (!hasClassBackfaceClassAdded) swiper.el.classList.add(backFaceHiddenClass);
            } else if (hasClassBackfaceClassAdded) {
                swiper.el.classList.remove(backFaceHiddenClass);
            }
        }
    }

    function updateAutoHeight(speed) {
        const swiper = this;
        const activeSlides = [];
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let newHeight = 0;
        let i;
        if (typeof speed === 'number') {
            swiper.setTransition(speed);
        } else if (speed === true) {
            swiper.setTransition(swiper.params.speed);
        }
        const getSlideByIndex = index => {
            if (isVirtual) {
                return swiper.slides[swiper.getSlideIndexByData(index)];
            }
            return swiper.slides[index];
        };
        // Find slides currently in view
        if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
            if (swiper.params.centeredSlides) {
                (swiper.visibleSlides || []).forEach(slide => {
                    activeSlides.push(slide);
                });
            } else {
                for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
                    const index = swiper.activeIndex + i;
                    if (index > swiper.slides.length && !isVirtual) break;
                    activeSlides.push(getSlideByIndex(index));
                }
            }
        } else {
            activeSlides.push(getSlideByIndex(swiper.activeIndex));
        }
        // Find new height from highest slide in view
        for (i = 0; i < activeSlides.length; i += 1) {
            if (typeof activeSlides[i] !== 'undefined') {
                const height = activeSlides[i].offsetHeight;
                newHeight = height > newHeight ? height : newHeight;
            }
        }
        // Update Height
        if (newHeight || newHeight === 0) swiper.wrapperEl.style.height = `${newHeight}px`;
    }

    function updateSlidesOffset() {
        const swiper = this;
        const slides = swiper.slides;
        // eslint-disable-next-line
        const minusOffset = swiper.isElement ? swiper.isHorizontal() ? swiper.wrapperEl.offsetLeft : swiper.wrapperEl.offsetTop : 0;
        for (let i = 0; i < slides.length; i += 1) {
            slides[i].swiperSlideOffset = (swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop) - minusOffset - swiper.cssOverflowAdjustment();
        }
    }
    const toggleSlideClasses$1 = (slideEl, condition, className) => {
        if (condition && !slideEl.classList.contains(className)) {
            slideEl.classList.add(className);
        } else if (!condition && slideEl.classList.contains(className)) {
            slideEl.classList.remove(className);
        }
    };

    function updateSlidesProgress(translate) {
        if (translate === void 0) {
            translate = this && this.translate || 0;
        }
        const swiper = this;
        const params = swiper.params;
        const {
            slides,
            rtlTranslate: rtl,
            snapGrid
        } = swiper;
        if (slides.length === 0) return;
        if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
        let offsetCenter = -translate;
        if (rtl) offsetCenter = translate;
        swiper.visibleSlidesIndexes = [];
        swiper.visibleSlides = [];
        let spaceBetween = params.spaceBetween;
        if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
            spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
        } else if (typeof spaceBetween === 'string') {
            spaceBetween = parseFloat(spaceBetween);
        }
        for (let i = 0; i < slides.length; i += 1) {
            const slide = slides[i];
            let slideOffset = slide.swiperSlideOffset;
            if (params.cssMode && params.centeredSlides) {
                slideOffset -= slides[0].swiperSlideOffset;
            }
            const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + spaceBetween);
            const slideBefore = -(offsetCenter - slideOffset);
            const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
            const isFullyVisible = slideBefore >= 0 && slideBefore <= swiper.size - swiper.slidesSizesGrid[i];
            const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
            if (isVisible) {
                swiper.visibleSlides.push(slide);
                swiper.visibleSlidesIndexes.push(i);
            }
            toggleSlideClasses$1(slide, isVisible, params.slideVisibleClass);
            toggleSlideClasses$1(slide, isFullyVisible, params.slideFullyVisibleClass);
            slide.progress = rtl ? -slideProgress : slideProgress;
            slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
        }
    }

    function updateProgress(translate) {
        const swiper = this;
        if (typeof translate === 'undefined') {
            const multiplier = swiper.rtlTranslate ? -1 : 1;
            // eslint-disable-next-line
            translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
        }
        const params = swiper.params;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        let {
            progress,
            isBeginning,
            isEnd,
            progressLoop
        } = swiper;
        const wasBeginning = isBeginning;
        const wasEnd = isEnd;
        if (translatesDiff === 0) {
            progress = 0;
            isBeginning = true;
            isEnd = true;
        } else {
            progress = (translate - swiper.minTranslate()) / translatesDiff;
            const isBeginningRounded = Math.abs(translate - swiper.minTranslate()) < 1;
            const isEndRounded = Math.abs(translate - swiper.maxTranslate()) < 1;
            isBeginning = isBeginningRounded || progress <= 0;
            isEnd = isEndRounded || progress >= 1;
            if (isBeginningRounded) progress = 0;
            if (isEndRounded) progress = 1;
        }
        if (params.loop) {
            const firstSlideIndex = swiper.getSlideIndexByData(0);
            const lastSlideIndex = swiper.getSlideIndexByData(swiper.slides.length - 1);
            const firstSlideTranslate = swiper.slidesGrid[firstSlideIndex];
            const lastSlideTranslate = swiper.slidesGrid[lastSlideIndex];
            const translateMax = swiper.slidesGrid[swiper.slidesGrid.length - 1];
            const translateAbs = Math.abs(translate);
            if (translateAbs >= firstSlideTranslate) {
                progressLoop = (translateAbs - firstSlideTranslate) / translateMax;
            } else {
                progressLoop = (translateAbs + translateMax - lastSlideTranslate) / translateMax;
            }
            if (progressLoop > 1) progressLoop -= 1;
        }
        Object.assign(swiper, {
            progress,
            progressLoop,
            isBeginning,
            isEnd
        });
        if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
        if (isBeginning && !wasBeginning) {
            swiper.emit('reachBeginning toEdge');
        }
        if (isEnd && !wasEnd) {
            swiper.emit('reachEnd toEdge');
        }
        if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
            swiper.emit('fromEdge');
        }
        swiper.emit('progress', progress);
    }
    const toggleSlideClasses = (slideEl, condition, className) => {
        if (condition && !slideEl.classList.contains(className)) {
            slideEl.classList.add(className);
        } else if (!condition && slideEl.classList.contains(className)) {
            slideEl.classList.remove(className);
        }
    };

    function updateSlidesClasses() {
        const swiper = this;
        const {
            slides,
            params,
            slidesEl,
            activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        const getFilteredSlide = selector => {
            return elementChildren(slidesEl, `.${params.slideClass}${selector}, swiper-slide${selector}`)[0];
        };
        let activeSlide;
        let prevSlide;
        let nextSlide;
        if (isVirtual) {
            if (params.loop) {
                let slideIndex = activeIndex - swiper.virtual.slidesBefore;
                if (slideIndex < 0) slideIndex = swiper.virtual.slides.length + slideIndex;
                if (slideIndex >= swiper.virtual.slides.length) slideIndex -= swiper.virtual.slides.length;
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${slideIndex}"]`);
            } else {
                activeSlide = getFilteredSlide(`[data-swiper-slide-index="${activeIndex}"]`);
            }
        } else {
            if (gridEnabled) {
                activeSlide = slides.find(slideEl => slideEl.column === activeIndex);
                nextSlide = slides.find(slideEl => slideEl.column === activeIndex + 1);
                prevSlide = slides.find(slideEl => slideEl.column === activeIndex - 1);
            } else {
                activeSlide = slides[activeIndex];
            }
        }
        if (activeSlide) {
            if (!gridEnabled) {
                // Next Slide
                nextSlide = elementNextAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !nextSlide) {
                    nextSlide = slides[0];
                }
                // Prev Slide
                prevSlide = elementPrevAll(activeSlide, `.${params.slideClass}, swiper-slide`)[0];
                if (params.loop && !prevSlide === 0) {
                    prevSlide = slides[slides.length - 1];
                }
            }
        }
        slides.forEach(slideEl => {
            toggleSlideClasses(slideEl, slideEl === activeSlide, params.slideActiveClass);
            toggleSlideClasses(slideEl, slideEl === nextSlide, params.slideNextClass);
            toggleSlideClasses(slideEl, slideEl === prevSlide, params.slidePrevClass);
        });
        swiper.emitSlidesClasses();
    }
    const processLazyPreloader = (swiper, imageEl) => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        const slideSelector = () => swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        const slideEl = imageEl.closest(slideSelector());
        if (slideEl) {
            let lazyEl = slideEl.querySelector(`.${swiper.params.lazyPreloaderClass}`);
            if (!lazyEl && swiper.isElement) {
                if (slideEl.shadowRoot) {
                    lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                } else {
                    // init later
                    requestAnimationFrame(() => {
                        if (slideEl.shadowRoot) {
                            lazyEl = slideEl.shadowRoot.querySelector(`.${swiper.params.lazyPreloaderClass}`);
                            if (lazyEl) lazyEl.remove();
                        }
                    });
                }
            }
            if (lazyEl) lazyEl.remove();
        }
    };
    const unlazy = (swiper, index) => {
        if (!swiper.slides[index]) return;
        const imageEl = swiper.slides[index].querySelector('[loading="lazy"]');
        if (imageEl) imageEl.removeAttribute('loading');
    };
    const preload = swiper => {
        if (!swiper || swiper.destroyed || !swiper.params) return;
        let amount = swiper.params.lazyPreloadPrevNext;
        const len = swiper.slides.length;
        if (!len || !amount || amount < 0) return;
        amount = Math.min(amount, len);
        const slidesPerView = swiper.params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(swiper.params.slidesPerView);
        const activeIndex = swiper.activeIndex;
        if (swiper.params.grid && swiper.params.grid.rows > 1) {
            const activeColumn = activeIndex;
            const preloadColumns = [activeColumn - amount];
            preloadColumns.push(...Array.from({
                length: amount
            }).map((_, i) => {
                return activeColumn + slidesPerView + i;
            }));
            swiper.slides.forEach((slideEl, i) => {
                if (preloadColumns.includes(slideEl.column)) unlazy(swiper, i);
            });
            return;
        }
        const slideIndexLastInView = activeIndex + slidesPerView - 1;
        if (swiper.params.rewind || swiper.params.loop) {
            for (let i = activeIndex - amount; i <= slideIndexLastInView + amount; i += 1) {
                const realIndex = (i % len + len) % len;
                if (realIndex < activeIndex || realIndex > slideIndexLastInView) unlazy(swiper, realIndex);
            }
        } else {
            for (let i = Math.max(activeIndex - amount, 0); i <= Math.min(slideIndexLastInView + amount, len - 1); i += 1) {
                if (i !== activeIndex && (i > slideIndexLastInView || i < activeIndex)) {
                    unlazy(swiper, i);
                }
            }
        }
    };

    function getActiveIndexByTranslate(swiper) {
        const {
            slidesGrid,
            params
        } = swiper;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        let activeIndex;
        for (let i = 0; i < slidesGrid.length; i += 1) {
            if (typeof slidesGrid[i + 1] !== 'undefined') {
                if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
                    activeIndex = i;
                } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
                    activeIndex = i + 1;
                }
            } else if (translate >= slidesGrid[i]) {
                activeIndex = i;
            }
        }
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
        return activeIndex;
    }

    function updateActiveIndex(newActiveIndex) {
        const swiper = this;
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        const {
            snapGrid,
            params,
            activeIndex: previousIndex,
            realIndex: previousRealIndex,
            snapIndex: previousSnapIndex
        } = swiper;
        let activeIndex = newActiveIndex;
        let snapIndex;
        const getVirtualRealIndex = aIndex => {
            let realIndex = aIndex - swiper.virtual.slidesBefore;
            if (realIndex < 0) {
                realIndex = swiper.virtual.slides.length + realIndex;
            }
            if (realIndex >= swiper.virtual.slides.length) {
                realIndex -= swiper.virtual.slides.length;
            }
            return realIndex;
        };
        if (typeof activeIndex === 'undefined') {
            activeIndex = getActiveIndexByTranslate(swiper);
        }
        if (snapGrid.indexOf(translate) >= 0) {
            snapIndex = snapGrid.indexOf(translate);
        } else {
            const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
            snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
        }
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        if (activeIndex === previousIndex && !swiper.params.loop) {
            if (snapIndex !== previousSnapIndex) {
                swiper.snapIndex = snapIndex;
                swiper.emit('snapIndexChange');
            }
            return;
        }
        if (activeIndex === previousIndex && swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
            swiper.realIndex = getVirtualRealIndex(activeIndex);
            return;
        }
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        // Get real index
        let realIndex;
        if (swiper.virtual && params.virtual.enabled && params.loop) {
            realIndex = getVirtualRealIndex(activeIndex);
        } else if (gridEnabled) {
            const firstSlideInColumn = swiper.slides.find(slideEl => slideEl.column === activeIndex);
            let activeSlideIndex = parseInt(firstSlideInColumn.getAttribute('data-swiper-slide-index'), 10);
            if (Number.isNaN(activeSlideIndex)) {
                activeSlideIndex = Math.max(swiper.slides.indexOf(firstSlideInColumn), 0);
            }
            realIndex = Math.floor(activeSlideIndex / params.grid.rows);
        } else if (swiper.slides[activeIndex]) {
            const slideIndex = swiper.slides[activeIndex].getAttribute('data-swiper-slide-index');
            if (slideIndex) {
                realIndex = parseInt(slideIndex, 10);
            } else {
                realIndex = activeIndex;
            }
        } else {
            realIndex = activeIndex;
        }
        Object.assign(swiper, {
            previousSnapIndex,
            snapIndex,
            previousRealIndex,
            realIndex,
            previousIndex,
            activeIndex
        });
        if (swiper.initialized) {
            preload(swiper);
        }
        swiper.emit('activeIndexChange');
        swiper.emit('snapIndexChange');
        if (swiper.initialized || swiper.params.runCallbacksOnInit) {
            if (previousRealIndex !== realIndex) {
                swiper.emit('realIndexChange');
            }
            swiper.emit('slideChange');
        }
    }

    function updateClickedSlide(el, path) {
        const swiper = this;
        const params = swiper.params;
        let slide = el.closest(`.${params.slideClass}, swiper-slide`);
        if (!slide && swiper.isElement && path && path.length > 1 && path.includes(el)) {
            [...path.slice(path.indexOf(el) + 1, path.length)].forEach(pathEl => {
                if (!slide && pathEl.matches && pathEl.matches(`.${params.slideClass}, swiper-slide`)) {
                    slide = pathEl;
                }
            });
        }
        let slideFound = false;
        let slideIndex;
        if (slide) {
            for (let i = 0; i < swiper.slides.length; i += 1) {
                if (swiper.slides[i] === slide) {
                    slideFound = true;
                    slideIndex = i;
                    break;
                }
            }
        }
        if (slide && slideFound) {
            swiper.clickedSlide = slide;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                swiper.clickedIndex = parseInt(slide.getAttribute('data-swiper-slide-index'), 10);
            } else {
                swiper.clickedIndex = slideIndex;
            }
        } else {
            swiper.clickedSlide = undefined;
            swiper.clickedIndex = undefined;
            return;
        }
        if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
            swiper.slideToClickedSlide();
        }
    }
    var update = {
        updateSize,
        updateSlides,
        updateAutoHeight,
        updateSlidesOffset,
        updateSlidesProgress,
        updateProgress,
        updateSlidesClasses,
        updateActiveIndex,
        updateClickedSlide
    };

    function getSwiperTranslate(axis) {
        if (axis === void 0) {
            axis = this.isHorizontal() ? 'x' : 'y';
        }
        const swiper = this;
        const {
            params,
            rtlTranslate: rtl,
            translate,
            wrapperEl
        } = swiper;
        if (params.virtualTranslate) {
            return rtl ? -translate : translate;
        }
        if (params.cssMode) {
            return translate;
        }
        let currentTranslate = getTranslate(wrapperEl, axis);
        currentTranslate += swiper.cssOverflowAdjustment();
        if (rtl) currentTranslate = -currentTranslate;
        return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
        const swiper = this;
        const {
            rtlTranslate: rtl,
            params,
            wrapperEl,
            progress
        } = swiper;
        let x = 0;
        let y = 0;
        const z = 0;
        if (swiper.isHorizontal()) {
            x = rtl ? -translate : translate;
        } else {
            y = translate;
        }
        if (params.roundLengths) {
            x = Math.floor(x);
            y = Math.floor(y);
        }
        swiper.previousTranslate = swiper.translate;
        swiper.translate = swiper.isHorizontal() ? x : y;
        if (params.cssMode) {
            wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
        } else if (!params.virtualTranslate) {
            if (swiper.isHorizontal()) {
                x -= swiper.cssOverflowAdjustment();
            } else {
                y -= swiper.cssOverflowAdjustment();
            }
            wrapperEl.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
        }
        // Check if we need to update progress
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== progress) {
            swiper.updateProgress(translate);
        }
        swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
        return -this.snapGrid[0];
    }

    function maxTranslate() {
        return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
        if (translate === void 0) {
            translate = 0;
        }
        if (speed === void 0) {
            speed = this.params.speed;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (translateBounds === void 0) {
            translateBounds = true;
        }
        const swiper = this;
        const {
            params,
            wrapperEl
        } = swiper;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        const minTranslate = swiper.minTranslate();
        const maxTranslate = swiper.maxTranslate();
        let newTranslate;
        if (translateBounds && translate > minTranslate) newTranslate = minTranslate;
        else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;
        else newTranslate = translate;
        // Update progress
        swiper.updateProgress(newTranslate);
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            if (speed === 0) {
                wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: -newTranslate,
                        side: isH ? 'left' : 'top'
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? 'left' : 'top']: -newTranslate,
                    behavior: 'smooth'
                });
            }
            return true;
        }
        if (speed === 0) {
            swiper.setTransition(0);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionEnd');
            }
        } else {
            swiper.setTransition(speed);
            swiper.setTranslate(newTranslate);
            if (runCallbacks) {
                swiper.emit('beforeTransitionStart', speed, internal);
                swiper.emit('transitionStart');
            }
            if (!swiper.animating) {
                swiper.animating = true;
                if (!swiper.onTranslateToWrapperTransitionEnd) {
                    swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
                        if (!swiper || swiper.destroyed) return;
                        if (e.target !== this) return;
                        swiper.wrapperEl.removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
                        swiper.onTranslateToWrapperTransitionEnd = null;
                        delete swiper.onTranslateToWrapperTransitionEnd;
                        swiper.animating = false;
                        if (runCallbacks) {
                            swiper.emit('transitionEnd');
                        }
                    };
                }
                swiper.wrapperEl.addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
            }
        }
        return true;
    }
    var translate = {
        getTranslate: getSwiperTranslate,
        setTranslate,
        minTranslate,
        maxTranslate,
        translateTo
    };

    function setTransition(duration, byController) {
        const swiper = this;
        if (!swiper.params.cssMode) {
            swiper.wrapperEl.style.transitionDuration = `${duration}ms`;
            swiper.wrapperEl.style.transitionDelay = duration === 0 ? `0ms` : '';
        }
        swiper.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
        let {
            swiper,
            runCallbacks,
            direction,
            step
        } = _ref;
        const {
            activeIndex,
            previousIndex
        } = swiper;
        let dir = direction;
        if (!dir) {
            if (activeIndex > previousIndex) dir = 'next';
            else if (activeIndex < previousIndex) dir = 'prev';
            else dir = 'reset';
        }
        swiper.emit(`transition${step}`);
        if (runCallbacks && dir === 'reset') {
            swiper.emit(`slideResetTransition${step}`);
        } else if (runCallbacks && activeIndex !== previousIndex) {
            swiper.emit(`slideChangeTransition${step}`);
            if (dir === 'next') {
                swiper.emit(`slideNextTransition${step}`);
            } else {
                swiper.emit(`slidePrevTransition${step}`);
            }
        }
    }

    function transitionStart(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        if (params.cssMode) return;
        if (params.autoHeight) {
            swiper.updateAutoHeight();
        }
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'Start'
        });
    }

    function transitionEnd(runCallbacks, direction) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params
        } = swiper;
        swiper.animating = false;
        if (params.cssMode) return;
        swiper.setTransition(0);
        transitionEmit({
            swiper,
            runCallbacks,
            direction,
            step: 'End'
        });
    }
    var transition = {
        setTransition,
        transitionStart,
        transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
        if (index === void 0) {
            index = 0;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === 'string') {
            index = parseInt(index, 10);
        }
        const swiper = this;
        let slideIndex = index;
        if (slideIndex < 0) slideIndex = 0;
        const {
            params,
            snapGrid,
            slidesGrid,
            previousIndex,
            activeIndex,
            rtlTranslate: rtl,
            wrapperEl,
            enabled
        } = swiper;
        if (!enabled && !internal && !initial || swiper.destroyed || swiper.animating && params.preventInteractionOnTransition) {
            return false;
        }
        if (typeof speed === 'undefined') {
            speed = swiper.params.speed;
        }
        const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
        let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
        if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
        const translate = -snapGrid[snapIndex];
        // Normalize slideIndex
        if (params.normalizeSlideIndex) {
            for (let i = 0; i < slidesGrid.length; i += 1) {
                const normalizedTranslate = -Math.floor(translate * 100);
                const normalizedGrid = Math.floor(slidesGrid[i] * 100);
                const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);
                if (typeof slidesGrid[i + 1] !== 'undefined') {
                    if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
                        slideIndex = i;
                    } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
                        slideIndex = i + 1;
                    }
                } else if (normalizedTranslate >= normalizedGrid) {
                    slideIndex = i;
                }
            }
        }
        // Directions locks
        if (swiper.initialized && slideIndex !== activeIndex) {
            if (!swiper.allowSlideNext && (rtl ? translate > swiper.translate && translate > swiper.minTranslate() : translate < swiper.translate && translate < swiper.minTranslate())) {
                return false;
            }
            if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
                if ((activeIndex || 0) !== slideIndex) {
                    return false;
                }
            }
        }
        if (slideIndex !== (previousIndex || 0) && runCallbacks) {
            swiper.emit('beforeSlideChangeStart');
        }
        // Update progress
        swiper.updateProgress(translate);
        let direction;
        if (slideIndex > activeIndex) direction = 'next';
        else if (slideIndex < activeIndex) direction = 'prev';
        else direction = 'reset';
        // initial virtual
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const isInitialVirtual = isVirtual && initial;
        // Update Index
        if (!isInitialVirtual && (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate)) {
            swiper.updateActiveIndex(slideIndex);
            // Update Height
            if (params.autoHeight) {
                swiper.updateAutoHeight();
            }
            swiper.updateSlidesClasses();
            if (params.effect !== 'slide') {
                swiper.setTranslate(translate);
            }
            if (direction !== 'reset') {
                swiper.transitionStart(runCallbacks, direction);
                swiper.transitionEnd(runCallbacks, direction);
            }
            return false;
        }
        if (params.cssMode) {
            const isH = swiper.isHorizontal();
            const t = rtl ? translate : -translate;
            if (speed === 0) {
                if (isVirtual) {
                    swiper.wrapperEl.style.scrollSnapType = 'none';
                    swiper._immediateVirtual = true;
                }
                if (isVirtual && !swiper._cssModeVirtualInitialSet && swiper.params.initialSlide > 0) {
                    swiper._cssModeVirtualInitialSet = true;
                    requestAnimationFrame(() => {
                        wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                    });
                } else {
                    wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
                }
                if (isVirtual) {
                    requestAnimationFrame(() => {
                        swiper.wrapperEl.style.scrollSnapType = '';
                        swiper._immediateVirtual = false;
                    });
                }
            } else {
                if (!swiper.support.smoothScroll) {
                    animateCSSModeScroll({
                        swiper,
                        targetPosition: t,
                        side: isH ? 'left' : 'top'
                    });
                    return true;
                }
                wrapperEl.scrollTo({
                    [isH ? 'left' : 'top']: t,
                    behavior: 'smooth'
                });
            }
            return true;
        }
        const browser = getBrowser();
        const isSafari = browser.isSafari;
        if (isVirtual && !initial && isSafari && swiper.isElement) {
            swiper.virtual.update(false, false, slideIndex);
        }
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        if (speed === 0) {
            swiper.transitionEnd(runCallbacks, direction);
        } else if (!swiper.animating) {
            swiper.animating = true;
            if (!swiper.onSlideToWrapperTransitionEnd) {
                swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
                    if (!swiper || swiper.destroyed) return;
                    if (e.target !== this) return;
                    swiper.wrapperEl.removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
                    swiper.onSlideToWrapperTransitionEnd = null;
                    delete swiper.onSlideToWrapperTransitionEnd;
                    swiper.transitionEnd(runCallbacks, direction);
                };
            }
            swiper.wrapperEl.addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        }
        return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
        if (index === void 0) {
            index = 0;
        }
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (typeof index === 'string') {
            const indexAsNumber = parseInt(index, 10);
            index = indexAsNumber;
        }
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === 'undefined') {
            speed = swiper.params.speed;
        }
        const gridEnabled = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
        let newIndex = index;
        if (swiper.params.loop) {
            if (swiper.virtual && swiper.params.virtual.enabled) {
                // eslint-disable-next-line
                newIndex = newIndex + swiper.virtual.slidesBefore;
            } else {
                let targetSlideIndex;
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    targetSlideIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
                } else {
                    targetSlideIndex = swiper.getSlideIndexByData(newIndex);
                }
                const cols = gridEnabled ? Math.ceil(swiper.slides.length / swiper.params.grid.rows) : swiper.slides.length;
                const {
                    centeredSlides
                } = swiper.params;
                let slidesPerView = swiper.params.slidesPerView;
                if (slidesPerView === 'auto') {
                    slidesPerView = swiper.slidesPerViewDynamic();
                } else {
                    slidesPerView = Math.ceil(parseFloat(swiper.params.slidesPerView, 10));
                    if (centeredSlides && slidesPerView % 2 === 0) {
                        slidesPerView = slidesPerView + 1;
                    }
                }
                let needLoopFix = cols - targetSlideIndex < slidesPerView;
                if (centeredSlides) {
                    needLoopFix = needLoopFix || targetSlideIndex < Math.ceil(slidesPerView / 2);
                }
                if (internal && centeredSlides && swiper.params.slidesPerView !== 'auto' && !gridEnabled) {
                    needLoopFix = false;
                }
                if (needLoopFix) {
                    const direction = centeredSlides ? targetSlideIndex < swiper.activeIndex ? 'prev' : 'next' : targetSlideIndex - swiper.activeIndex - 1 < swiper.params.slidesPerView ? 'next' : 'prev';
                    swiper.loopFix({
                        direction,
                        slideTo: true,
                        activeSlideIndex: direction === 'next' ? targetSlideIndex + 1 : targetSlideIndex - cols + 1,
                        slideRealIndex: direction === 'next' ? swiper.realIndex : undefined
                    });
                }
                if (gridEnabled) {
                    const slideIndex = newIndex * swiper.params.grid.rows;
                    newIndex = swiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === slideIndex).column;
                } else {
                    newIndex = swiper.getSlideIndexByData(newIndex);
                }
            }
        }
        requestAnimationFrame(() => {
            swiper.slideTo(newIndex, speed, runCallbacks, internal);
        });
        return swiper;
    }
    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            enabled,
            params,
            animating
        } = swiper;
        if (!enabled || swiper.destroyed) return swiper;
        if (typeof speed === 'undefined') {
            speed = swiper.params.speed;
        }
        let perGroup = params.slidesPerGroup;
        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
            perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
        }
        const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: 'next'
            });
            // eslint-disable-next-line
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
            if (swiper.activeIndex === swiper.slides.length - 1 && params.cssMode) {
                requestAnimationFrame(() => {
                    swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
                });
                return true;
            }
        }
        if (params.rewind && swiper.isEnd) {
            return swiper.slideTo(0, speed, runCallbacks, internal);
        }
        return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        const {
            params,
            snapGrid,
            slidesGrid,
            rtlTranslate,
            enabled,
            animating
        } = swiper;
        if (!enabled || swiper.destroyed) return swiper;
        if (typeof speed === 'undefined') {
            speed = swiper.params.speed;
        }
        const isVirtual = swiper.virtual && params.virtual.enabled;
        if (params.loop) {
            if (animating && !isVirtual && params.loopPreventsSliding) return false;
            swiper.loopFix({
                direction: 'prev'
            });
            // eslint-disable-next-line
            swiper._clientLeft = swiper.wrapperEl.clientLeft;
        }
        const translate = rtlTranslate ? swiper.translate : -swiper.translate;

        function normalize(val) {
            if (val < 0) return -Math.floor(Math.abs(val));
            return Math.floor(val);
        }
        const normalizedTranslate = normalize(translate);
        const normalizedSnapGrid = snapGrid.map(val => normalize(val));
        const isFreeMode = params.freeMode && params.freeMode.enabled;
        let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
        if (typeof prevSnap === 'undefined' && (params.cssMode || isFreeMode)) {
            let prevSnapIndex;
            snapGrid.forEach((snap, snapIndex) => {
                if (normalizedTranslate >= snap) {
                    // prevSnap = snap;
                    prevSnapIndex = snapIndex;
                }
            });
            if (typeof prevSnapIndex !== 'undefined') {
                prevSnap = isFreeMode ? snapGrid[prevSnapIndex] : snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
            }
        }
        let prevIndex = 0;
        if (typeof prevSnap !== 'undefined') {
            prevIndex = slidesGrid.indexOf(prevSnap);
            if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
            if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
                prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
                prevIndex = Math.max(prevIndex, 0);
            }
        }
        if (params.rewind && swiper.isBeginning) {
            const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
        } else if (params.loop && swiper.activeIndex === 0 && params.cssMode) {
            requestAnimationFrame(() => {
                swiper.slideTo(prevIndex, speed, runCallbacks, internal);
            });
            return true;
        }
        return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === 'undefined') {
            speed = swiper.params.speed;
        }
        return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
        if (runCallbacks === void 0) {
            runCallbacks = true;
        }
        if (threshold === void 0) {
            threshold = 0.5;
        }
        const swiper = this;
        if (swiper.destroyed) return;
        if (typeof speed === 'undefined') {
            speed = swiper.params.speed;
        }
        let index = swiper.activeIndex;
        const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
        const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
        const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
        if (translate >= swiper.snapGrid[snapIndex]) {
            // The current translate is on or after the current snap index, so the choice
            // is between the current index and the one after it.
            const currentSnap = swiper.snapGrid[snapIndex];
            const nextSnap = swiper.snapGrid[snapIndex + 1];
            if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
                index += swiper.params.slidesPerGroup;
            }
        } else {
            // The current translate is before the current snap index, so the choice
            // is between the current index and the one before it.
            const prevSnap = swiper.snapGrid[snapIndex - 1];
            const currentSnap = swiper.snapGrid[snapIndex];
            if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
                index -= swiper.params.slidesPerGroup;
            }
        }
        index = Math.max(index, 0);
        index = Math.min(index, swiper.slidesGrid.length - 1);
        return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
        const swiper = this;
        if (swiper.destroyed) return;
        const {
            params,
            slidesEl
        } = swiper;
        const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
        let slideToIndex = swiper.getSlideIndexWhenGrid(swiper.clickedIndex);
        let realIndex;
        const slideSelector = swiper.isElement ? `swiper-slide` : `.${params.slideClass}`;
        const isGrid = swiper.grid && swiper.params.grid && swiper.params.grid.rows > 1;
        if (params.loop) {
            if (swiper.animating) return;
            realIndex = parseInt(swiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            if (params.centeredSlides) {
                swiper.slideToLoop(realIndex);
            } else if (slideToIndex > (isGrid ? (swiper.slides.length - slidesPerView) / 2 - (swiper.params.grid.rows - 1) : swiper.slides.length - slidesPerView)) {
                swiper.loopFix();
                slideToIndex = swiper.getSlideIndex(elementChildren(slidesEl, `${slideSelector}[data-swiper-slide-index="${realIndex}"]`)[0]);
                nextTick(() => {
                    swiper.slideTo(slideToIndex);
                });
            } else {
                swiper.slideTo(slideToIndex);
            }
        } else {
            swiper.slideTo(slideToIndex);
        }
    }
    var slide = {
        slideTo,
        slideToLoop,
        slideNext,
        slidePrev,
        slideReset,
        slideToClosest,
        slideToClickedSlide
    };

    function loopCreate(slideRealIndex, initial) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || swiper.virtual && swiper.params.virtual.enabled) return;
        const initSlides = () => {
            const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            slides.forEach((el, index) => {
                el.setAttribute('data-swiper-slide-index', index);
            });
        };
        const clearBlankSlides = () => {
            const slides = elementChildren(slidesEl, `.${params.slideBlankClass}`);
            slides.forEach(el => {
                el.remove();
            });
            if (slides.length > 0) {
                swiper.recalcSlides();
                swiper.updateSlides();
            }
        };
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        if (params.loopAddBlankSlides && (params.slidesPerGroup > 1 || gridEnabled)) {
            clearBlankSlides();
        }
        const slidesPerGroup = params.slidesPerGroup * (gridEnabled ? params.grid.rows : 1);
        const shouldFillGroup = swiper.slides.length % slidesPerGroup !== 0;
        const shouldFillGrid = gridEnabled && swiper.slides.length % params.grid.rows !== 0;
        const addBlankSlides = amountOfSlides => {
            for (let i = 0; i < amountOfSlides; i += 1) {
                const slideEl = swiper.isElement ? createElement('swiper-slide', [params.slideBlankClass]) : createElement('div', [params.slideClass, params.slideBlankClass]);
                swiper.slidesEl.append(slideEl);
            }
        };
        if (shouldFillGroup) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = slidesPerGroup - swiper.slides.length % slidesPerGroup;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else {
                showWarning('Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
            }
            initSlides();
        } else if (shouldFillGrid) {
            if (params.loopAddBlankSlides) {
                const slidesToAdd = params.grid.rows - swiper.slides.length % params.grid.rows;
                addBlankSlides(slidesToAdd);
                swiper.recalcSlides();
                swiper.updateSlides();
            } else {
                showWarning('Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)');
            }
            initSlides();
        } else {
            initSlides();
        }
        swiper.loopFix({
            slideRealIndex,
            direction: params.centeredSlides ? undefined : 'next',
            initial
        });
    }

    function loopFix(_temp) {
        let {
            slideRealIndex,
            slideTo = true,
            direction,
            setTranslate,
            activeSlideIndex,
            initial,
            byController,
            byMousewheel
        } = _temp === void 0 ? {} : _temp;
        const swiper = this;
        if (!swiper.params.loop) return;
        swiper.emit('beforeLoopFix');
        const {
            slides,
            allowSlidePrev,
            allowSlideNext,
            slidesEl,
            params
        } = swiper;
        const {
            centeredSlides,
            initialSlide
        } = params;
        swiper.allowSlidePrev = true;
        swiper.allowSlideNext = true;
        if (swiper.virtual && params.virtual.enabled) {
            if (slideTo) {
                if (!params.centeredSlides && swiper.snapIndex === 0) {
                    swiper.slideTo(swiper.virtual.slides.length, 0, false, true);
                } else if (params.centeredSlides && swiper.snapIndex < params.slidesPerView) {
                    swiper.slideTo(swiper.virtual.slides.length + swiper.snapIndex, 0, false, true);
                } else if (swiper.snapIndex === swiper.snapGrid.length - 1) {
                    swiper.slideTo(swiper.virtual.slidesBefore, 0, false, true);
                }
            }
            swiper.allowSlidePrev = allowSlidePrev;
            swiper.allowSlideNext = allowSlideNext;
            swiper.emit('loopFix');
            return;
        }
        let slidesPerView = params.slidesPerView;
        if (slidesPerView === 'auto') {
            slidesPerView = swiper.slidesPerViewDynamic();
        } else {
            slidesPerView = Math.ceil(parseFloat(params.slidesPerView, 10));
            if (centeredSlides && slidesPerView % 2 === 0) {
                slidesPerView = slidesPerView + 1;
            }
        }
        const slidesPerGroup = params.slidesPerGroupAuto ? slidesPerView : params.slidesPerGroup;
        let loopedSlides = centeredSlides ? Math.max(slidesPerGroup, Math.ceil(slidesPerView / 2)) : slidesPerGroup;
        if (loopedSlides % slidesPerGroup !== 0) {
            loopedSlides += slidesPerGroup - loopedSlides % slidesPerGroup;
        }
        loopedSlides += params.loopAdditionalSlides;
        swiper.loopedSlides = loopedSlides;
        const gridEnabled = swiper.grid && params.grid && params.grid.rows > 1;
        if (slides.length < slidesPerView + loopedSlides || swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
            showWarning('Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters');
        } else if (gridEnabled && params.grid.fill === 'row') {
            showWarning('Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`');
        }
        const prependSlidesIndexes = [];
        const appendSlidesIndexes = [];
        const cols = gridEnabled ? Math.ceil(slides.length / params.grid.rows) : slides.length;
        const isInitialOverflow = initial && cols - initialSlide < slidesPerView && !centeredSlides;
        let activeIndex = isInitialOverflow ? initialSlide : swiper.activeIndex;
        if (typeof activeSlideIndex === 'undefined') {
            activeSlideIndex = swiper.getSlideIndex(slides.find(el => el.classList.contains(params.slideActiveClass)));
        } else {
            activeIndex = activeSlideIndex;
        }
        const isNext = direction === 'next' || !direction;
        const isPrev = direction === 'prev' || !direction;
        let slidesPrepended = 0;
        let slidesAppended = 0;
        const activeColIndex = gridEnabled ? slides[activeSlideIndex].column : activeSlideIndex;
        const activeColIndexWithShift = activeColIndex + (centeredSlides && typeof setTranslate === 'undefined' ? -slidesPerView / 2 + 0.5 : 0);
        // prepend last slides before start
        if (activeColIndexWithShift < loopedSlides) {
            slidesPrepended = Math.max(loopedSlides - activeColIndexWithShift, slidesPerGroup);
            for (let i = 0; i < loopedSlides - activeColIndexWithShift; i += 1) {
                const index = i - Math.floor(i / cols) * cols;
                if (gridEnabled) {
                    const colIndexToPrepend = cols - index - 1;
                    for (let i = slides.length - 1; i >= 0; i -= 1) {
                        if (slides[i].column === colIndexToPrepend) prependSlidesIndexes.push(i);
                    }
                    // slides.forEach((slide, slideIndex) => {
                    //   if (slide.column === colIndexToPrepend) prependSlidesIndexes.push(slideIndex);
                    // });
                } else {
                    prependSlidesIndexes.push(cols - index - 1);
                }
            }
        } else if (activeColIndexWithShift + slidesPerView > cols - loopedSlides) {
            slidesAppended = Math.max(activeColIndexWithShift - (cols - loopedSlides * 2), slidesPerGroup);
            if (isInitialOverflow) {
                slidesAppended = Math.max(slidesAppended, slidesPerView - cols + initialSlide + 1);
            }
            for (let i = 0; i < slidesAppended; i += 1) {
                const index = i - Math.floor(i / cols) * cols;
                if (gridEnabled) {
                    slides.forEach((slide, slideIndex) => {
                        if (slide.column === index) appendSlidesIndexes.push(slideIndex);
                    });
                } else {
                    appendSlidesIndexes.push(index);
                }
            }
        }
        swiper.__preventObserver__ = true;
        requestAnimationFrame(() => {
            swiper.__preventObserver__ = false;
        });
        if (swiper.params.effect === 'cards' && slides.length < slidesPerView + loopedSlides * 2) {
            if (appendSlidesIndexes.includes(activeSlideIndex)) {
                appendSlidesIndexes.splice(appendSlidesIndexes.indexOf(activeSlideIndex), 1);
            }
            if (prependSlidesIndexes.includes(activeSlideIndex)) {
                prependSlidesIndexes.splice(prependSlidesIndexes.indexOf(activeSlideIndex), 1);
            }
        }
        if (isPrev) {
            prependSlidesIndexes.forEach(index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.prepend(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            });
        }
        if (isNext) {
            appendSlidesIndexes.forEach(index => {
                slides[index].swiperLoopMoveDOM = true;
                slidesEl.append(slides[index]);
                slides[index].swiperLoopMoveDOM = false;
            });
        }
        swiper.recalcSlides();
        if (params.slidesPerView === 'auto') {
            swiper.updateSlides();
        } else if (gridEnabled && (prependSlidesIndexes.length > 0 && isPrev || appendSlidesIndexes.length > 0 && isNext)) {
            swiper.slides.forEach((slide, slideIndex) => {
                swiper.grid.updateSlide(slideIndex, slide, swiper.slides);
            });
        }
        if (params.watchSlidesProgress) {
            swiper.updateSlidesOffset();
        }
        if (slideTo) {
            if (prependSlidesIndexes.length > 0 && isPrev) {
                if (typeof slideRealIndex === 'undefined') {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex + slidesPrepended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex + Math.ceil(slidesPrepended), 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else {
                    if (setTranslate) {
                        const shift = gridEnabled ? prependSlidesIndexes.length / params.grid.rows : prependSlidesIndexes.length;
                        swiper.slideTo(swiper.activeIndex + shift, 0, false, true);
                        swiper.touchEventsData.currentTranslate = swiper.translate;
                    }
                }
            } else if (appendSlidesIndexes.length > 0 && isNext) {
                if (typeof slideRealIndex === 'undefined') {
                    const currentSlideTranslate = swiper.slidesGrid[activeIndex];
                    const newSlideTranslate = swiper.slidesGrid[activeIndex - slidesAppended];
                    const diff = newSlideTranslate - currentSlideTranslate;
                    if (byMousewheel) {
                        swiper.setTranslate(swiper.translate - diff);
                    } else {
                        swiper.slideTo(activeIndex - slidesAppended, 0, false, true);
                        if (setTranslate) {
                            swiper.touchEventsData.startTranslate = swiper.touchEventsData.startTranslate - diff;
                            swiper.touchEventsData.currentTranslate = swiper.touchEventsData.currentTranslate - diff;
                        }
                    }
                } else {
                    const shift = gridEnabled ? appendSlidesIndexes.length / params.grid.rows : appendSlidesIndexes.length;
                    swiper.slideTo(swiper.activeIndex - shift, 0, false, true);
                }
            }
        }
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.controller && swiper.controller.control && !byController) {
            const loopParams = {
                slideRealIndex,
                direction,
                setTranslate,
                activeSlideIndex,
                byController: true
            };
            if (Array.isArray(swiper.controller.control)) {
                swiper.controller.control.forEach(c => {
                    if (!c.destroyed && c.params.loop) c.loopFix({
                        ...loopParams,
                        slideTo: c.params.slidesPerView === params.slidesPerView ? slideTo : false
                    });
                });
            } else if (swiper.controller.control instanceof swiper.constructor && swiper.controller.control.params.loop) {
                swiper.controller.control.loopFix({
                    ...loopParams,
                    slideTo: swiper.controller.control.params.slidesPerView === params.slidesPerView ? slideTo : false
                });
            }
        }
        swiper.emit('loopFix');
    }

    function loopDestroy() {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (!params.loop || !slidesEl || swiper.virtual && swiper.params.virtual.enabled) return;
        swiper.recalcSlides();
        const newSlidesOrder = [];
        swiper.slides.forEach(slideEl => {
            const index = typeof slideEl.swiperSlideIndex === 'undefined' ? slideEl.getAttribute('data-swiper-slide-index') * 1 : slideEl.swiperSlideIndex;
            newSlidesOrder[index] = slideEl;
        });
        swiper.slides.forEach(slideEl => {
            slideEl.removeAttribute('data-swiper-slide-index');
        });
        newSlidesOrder.forEach(slideEl => {
            slidesEl.append(slideEl);
        });
        swiper.recalcSlides();
        swiper.slideTo(swiper.realIndex, 0);
    }
    var loop = {
        loopCreate,
        loopFix,
        loopDestroy
    };

    function setGrabCursor(moving) {
        const swiper = this;
        if (!swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
        const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        el.style.cursor = 'move';
        el.style.cursor = moving ? 'grabbing' : 'grab';
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
            });
        }
    }

    function unsetGrabCursor() {
        const swiper = this;
        if (swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
            return;
        }
        if (swiper.isElement) {
            swiper.__preventObserver__ = true;
        }
        swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
        if (swiper.isElement) {
            requestAnimationFrame(() => {
                swiper.__preventObserver__ = false;
            });
        }
    }
    var grabCursor = {
        setGrabCursor,
        unsetGrabCursor
    };
    // Modified from https://stackoverflow.com/questions/54520554/custom-element-getrootnode-closest-function-crossing-multiple-parent-shadowd
    function closestElement(selector, base) {
        if (base === void 0) {
            base = this;
        }

        function __closestFrom(el) {
            if (!el || el === getDocument() || el === getWindow()) return null;
            if (el.assignedSlot) el = el.assignedSlot;
            const found = el.closest(selector);
            if (!found && !el.getRootNode) {
                return null;
            }
            return found || __closestFrom(el.getRootNode().host);
        }
        return __closestFrom(base);
    }

    function preventEdgeSwipe(swiper, event, startX) {
        const window = getWindow();
        const {
            params
        } = swiper;
        const edgeSwipeDetection = params.edgeSwipeDetection;
        const edgeSwipeThreshold = params.edgeSwipeThreshold;
        if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
            if (edgeSwipeDetection === 'prevent') {
                event.preventDefault();
                return true;
            }
            return false;
        }
        return true;
    }

    function onTouchStart(event) {
        const swiper = this;
        const document = getDocument();
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        const data = swiper.touchEventsData;
        if (e.type === 'pointerdown') {
            if (data.pointerId !== null && data.pointerId !== e.pointerId) {
                return;
            }
            data.pointerId = e.pointerId;
        } else if (e.type === 'touchstart' && e.targetTouches.length === 1) {
            data.touchId = e.targetTouches[0].identifier;
        }
        if (e.type === 'touchstart') {
            // don't proceed touch event
            preventEdgeSwipe(swiper, e, e.targetTouches[0].pageX);
            return;
        }
        const {
            params,
            touches,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && e.pointerType === 'mouse') return;
        if (swiper.animating && params.preventInteractionOnTransition) {
            return;
        }
        if (!swiper.animating && params.cssMode && params.loop) {
            swiper.loopFix();
        }
        let targetEl = e.target;
        if (params.touchEventsTarget === 'wrapper') {
            if (!elementIsChildOf(targetEl, swiper.wrapperEl)) return;
        }
        if ('which' in e && e.which === 3) return;
        if ('button' in e && e.button > 0) return;
        if (data.isTouched && data.isMoved) return;
        // change target el for shadow root component
        const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
        // eslint-disable-next-line
        const eventPath = e.composedPath ? e.composedPath() : e.path;
        if (swipingClassHasValue && e.target && e.target.shadowRoot && eventPath) {
            targetEl = eventPath[0];
        }
        const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
        const isTargetShadow = !!(e.target && e.target.shadowRoot);
        // use closestElement for shadow root element to get the actual closest for nested shadow root element
        if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, targetEl) : targetEl.closest(noSwipingSelector))) {
            swiper.allowClick = true;
            return;
        }
        if (params.swipeHandler) {
            if (!targetEl.closest(params.swipeHandler)) return;
        }
        touches.currentX = e.pageX;
        touches.currentY = e.pageY;
        const startX = touches.currentX;
        const startY = touches.currentY;
        // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
        if (!preventEdgeSwipe(swiper, e, startX)) {
            return;
        }
        Object.assign(data, {
            isTouched: true,
            isMoved: false,
            allowTouchCallbacks: true,
            isScrolling: undefined,
            startMoving: undefined
        });
        touches.startX = startX;
        touches.startY = startY;
        data.touchStartTime = now();
        swiper.allowClick = true;
        swiper.updateSize();
        swiper.swipeDirection = undefined;
        if (params.threshold > 0) data.allowThresholdMove = false;
        let preventDefault = true;
        if (targetEl.matches(data.focusableElements)) {
            preventDefault = false;
            if (targetEl.nodeName === 'SELECT') {
                data.isTouched = false;
            }
        }
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== targetEl && (e.pointerType === 'mouse' || e.pointerType !== 'mouse' && !targetEl.matches(data.focusableElements))) {
            document.activeElement.blur();
        }
        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !targetEl.isContentEditable) {
            e.preventDefault();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
            swiper.freeMode.onTouchStart();
        }
        swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
        const document = getDocument();
        const swiper = this;
        const data = swiper.touchEventsData;
        const {
            params,
            touches,
            rtlTranslate: rtl,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && event.pointerType === 'mouse') return;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        if (e.type === 'pointermove') {
            if (data.touchId !== null) return; // return from pointer if we use touch
            const id = e.pointerId;
            if (id !== data.pointerId) return;
        }
        let targetTouch;
        if (e.type === 'touchmove') {
            targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
            if (!targetTouch || targetTouch.identifier !== data.touchId) return;
        } else {
            targetTouch = e;
        }
        if (!data.isTouched) {
            if (data.startMoving && data.isScrolling) {
                swiper.emit('touchMoveOpposite', e);
            }
            return;
        }
        const pageX = targetTouch.pageX;
        const pageY = targetTouch.pageY;
        if (e.preventedByNestedSwiper) {
            touches.startX = pageX;
            touches.startY = pageY;
            return;
        }
        if (!swiper.allowTouchMove) {
            if (!e.target.matches(data.focusableElements)) {
                swiper.allowClick = false;
            }
            if (data.isTouched) {
                Object.assign(touches, {
                    startX: pageX,
                    startY: pageY,
                    currentX: pageX,
                    currentY: pageY
                });
                data.touchStartTime = now();
            }
            return;
        }
        if (params.touchReleaseOnEdges && !params.loop) {
            if (swiper.isVertical()) {
                // Vertical
                if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
                    data.isTouched = false;
                    data.isMoved = false;
                    return;
                }
            } else if (rtl && (pageX > touches.startX && -swiper.translate <= swiper.maxTranslate() || pageX < touches.startX && -swiper.translate >= swiper.minTranslate())) {
                return;
            } else if (!rtl && (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate())) {
                return;
            }
        }
        if (document.activeElement && document.activeElement.matches(data.focusableElements) && document.activeElement !== e.target && e.pointerType !== 'mouse') {
            document.activeElement.blur();
        }
        if (document.activeElement) {
            if (e.target === document.activeElement && e.target.matches(data.focusableElements)) {
                data.isMoved = true;
                swiper.allowClick = false;
                return;
            }
        }
        if (data.allowTouchCallbacks) {
            swiper.emit('touchMove', e);
        }
        touches.previousX = touches.currentX;
        touches.previousY = touches.currentY;
        touches.currentX = pageX;
        touches.currentY = pageY;
        const diffX = touches.currentX - touches.startX;
        const diffY = touches.currentY - touches.startY;
        if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;
        if (typeof data.isScrolling === 'undefined') {
            let touchAngle;
            if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
                data.isScrolling = false;
            } else {
                // eslint-disable-next-line
                if (diffX * diffX + diffY * diffY >= 25) {
                    touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
                    data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
                }
            }
        }
        if (data.isScrolling) {
            swiper.emit('touchMoveOpposite', e);
        }
        if (typeof data.startMoving === 'undefined') {
            if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
                data.startMoving = true;
            }
        }
        if (data.isScrolling || e.type === 'touchmove' && data.preventTouchMoveFromPointerMove) {
            data.isTouched = false;
            return;
        }
        if (!data.startMoving) {
            return;
        }
        swiper.allowClick = false;
        if (!params.cssMode && e.cancelable) {
            e.preventDefault();
        }
        if (params.touchMoveStopPropagation && !params.nested) {
            e.stopPropagation();
        }
        let diff = swiper.isHorizontal() ? diffX : diffY;
        let touchesDiff = swiper.isHorizontal() ? touches.currentX - touches.previousX : touches.currentY - touches.previousY;
        if (params.oneWayMovement) {
            diff = Math.abs(diff) * (rtl ? 1 : -1);
            touchesDiff = Math.abs(touchesDiff) * (rtl ? 1 : -1);
        }
        touches.diff = diff;
        diff *= params.touchRatio;
        if (rtl) {
            diff = -diff;
            touchesDiff = -touchesDiff;
        }
        const prevTouchesDirection = swiper.touchesDirection;
        swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
        swiper.touchesDirection = touchesDiff > 0 ? 'prev' : 'next';
        const isLoop = swiper.params.loop && !params.cssMode;
        const allowLoopFix = swiper.touchesDirection === 'next' && swiper.allowSlideNext || swiper.touchesDirection === 'prev' && swiper.allowSlidePrev;
        if (!data.isMoved) {
            if (isLoop && allowLoopFix) {
                swiper.loopFix({
                    direction: swiper.swipeDirection
                });
            }
            data.startTranslate = swiper.getTranslate();
            swiper.setTransition(0);
            if (swiper.animating) {
                const evt = new window.CustomEvent('transitionend', {
                    bubbles: true,
                    cancelable: true,
                    detail: {
                        bySwiperTouchMove: true
                    }
                });
                swiper.wrapperEl.dispatchEvent(evt);
            }
            data.allowMomentumBounce = false;
            // Grab Cursor
            if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
                swiper.setGrabCursor(true);
            }
            swiper.emit('sliderFirstMove', e);
        }
        let loopFixed;
        new Date().getTime();
        if (params._loopSwapReset !== false && data.isMoved && data.allowThresholdMove && prevTouchesDirection !== swiper.touchesDirection && isLoop && allowLoopFix && Math.abs(diff) >= 1) {
            Object.assign(touches, {
                startX: pageX,
                startY: pageY,
                currentX: pageX,
                currentY: pageY,
                startTranslate: data.currentTranslate
            });
            data.loopSwapReset = true;
            data.startTranslate = data.currentTranslate;
            return;
        }
        swiper.emit('sliderMove', e);
        data.isMoved = true;
        data.currentTranslate = diff + data.startTranslate;
        let disableParentSwiper = true;
        let resistanceRatio = params.resistanceRatio;
        if (params.touchReleaseOnEdges) {
            resistanceRatio = 0;
        }
        if (diff > 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate > (params.centeredSlides ? swiper.minTranslate() - swiper.slidesSizesGrid[swiper.activeIndex + 1] - (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.activeIndex + 1] + swiper.params.spaceBetween : 0) - swiper.params.spaceBetween : swiper.minTranslate())) {
                swiper.loopFix({
                    direction: 'prev',
                    setTranslate: true,
                    activeSlideIndex: 0
                });
            }
            if (data.currentTranslate > swiper.minTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
                }
            }
        } else if (diff < 0) {
            if (isLoop && allowLoopFix && !loopFixed && data.allowThresholdMove && data.currentTranslate < (params.centeredSlides ? swiper.maxTranslate() + swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween + (params.slidesPerView !== 'auto' && swiper.slides.length - params.slidesPerView >= 2 ? swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] + swiper.params.spaceBetween : 0) : swiper.maxTranslate())) {
                swiper.loopFix({
                    direction: 'next',
                    setTranslate: true,
                    activeSlideIndex: swiper.slides.length - (params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : Math.ceil(parseFloat(params.slidesPerView, 10)))
                });
            }
            if (data.currentTranslate < swiper.maxTranslate()) {
                disableParentSwiper = false;
                if (params.resistance) {
                    data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
                }
            }
        }
        if (disableParentSwiper) {
            e.preventedByNestedSwiper = true;
        }
        // Directions locks
        if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
            data.currentTranslate = data.startTranslate;
        }
        if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
            data.currentTranslate = data.startTranslate;
        }
        // Threshold
        if (params.threshold > 0) {
            if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
                if (!data.allowThresholdMove) {
                    data.allowThresholdMove = true;
                    touches.startX = touches.currentX;
                    touches.startY = touches.currentY;
                    data.currentTranslate = data.startTranslate;
                    touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
                    return;
                }
            } else {
                data.currentTranslate = data.startTranslate;
                return;
            }
        }
        if (!params.followFinger || params.cssMode) return;
        // Update active index in free mode
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        if (params.freeMode && params.freeMode.enabled && swiper.freeMode) {
            swiper.freeMode.onTouchMove();
        }
        // Update progress
        swiper.updateProgress(data.currentTranslate);
        // Update translate
        swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
        const swiper = this;
        const data = swiper.touchEventsData;
        let e = event;
        if (e.originalEvent) e = e.originalEvent;
        let targetTouch;
        const isTouchEvent = e.type === 'touchend' || e.type === 'touchcancel';
        if (!isTouchEvent) {
            if (data.touchId !== null) return; // return from pointer if we use touch
            if (e.pointerId !== data.pointerId) return;
            targetTouch = e;
        } else {
            targetTouch = [...e.changedTouches].find(t => t.identifier === data.touchId);
            if (!targetTouch || targetTouch.identifier !== data.touchId) return;
        }
        if (['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(e.type)) {
            const proceed = ['pointercancel', 'contextmenu'].includes(e.type) && (swiper.browser.isSafari || swiper.browser.isWebView);
            if (!proceed) {
                return;
            }
        }
        data.pointerId = null;
        data.touchId = null;
        const {
            params,
            touches,
            rtlTranslate: rtl,
            slidesGrid,
            enabled
        } = swiper;
        if (!enabled) return;
        if (!params.simulateTouch && e.pointerType === 'mouse') return;
        if (data.allowTouchCallbacks) {
            swiper.emit('touchEnd', e);
        }
        data.allowTouchCallbacks = false;
        if (!data.isTouched) {
            if (data.isMoved && params.grabCursor) {
                swiper.setGrabCursor(false);
            }
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        // Return Grab Cursor
        if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
            swiper.setGrabCursor(false);
        }
        // Time diff
        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;
        // Tap, doubleTap, Click
        if (swiper.allowClick) {
            const pathTree = e.path || e.composedPath && e.composedPath();
            swiper.updateClickedSlide(pathTree && pathTree[0] || e.target, pathTree);
            swiper.emit('tap click', e);
            if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
                swiper.emit('doubleTap doubleClick', e);
            }
        }
        data.lastClickTime = now();
        nextTick(() => {
            if (!swiper.destroyed) swiper.allowClick = true;
        });
        if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 && !data.loopSwapReset || data.currentTranslate === data.startTranslate && !data.loopSwapReset) {
            data.isTouched = false;
            data.isMoved = false;
            data.startMoving = false;
            return;
        }
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        let currentPos;
        if (params.followFinger) {
            currentPos = rtl ? swiper.translate : -swiper.translate;
        } else {
            currentPos = -data.currentTranslate;
        }
        if (params.cssMode) {
            return;
        }
        if (params.freeMode && params.freeMode.enabled) {
            swiper.freeMode.onTouchEnd({
                currentPos
            });
            return;
        }
        // Find current slide
        const swipeToLast = currentPos >= -swiper.maxTranslate() && !swiper.params.loop;
        let stopIndex = 0;
        let groupSize = swiper.slidesSizesGrid[0];
        for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
            const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
            if (typeof slidesGrid[i + increment] !== 'undefined') {
                if (swipeToLast || currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
                    stopIndex = i;
                    groupSize = slidesGrid[i + increment] - slidesGrid[i];
                }
            } else if (swipeToLast || currentPos >= slidesGrid[i]) {
                stopIndex = i;
                groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
            }
        }
        let rewindFirstIndex = null;
        let rewindLastIndex = null;
        if (params.rewind) {
            if (swiper.isBeginning) {
                rewindLastIndex = params.virtual && params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
            } else if (swiper.isEnd) {
                rewindFirstIndex = 0;
            }
        }
        // Find current slide size
        const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
        const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
        if (timeDiff > params.longSwipesMs) {
            // Long touches
            if (!params.longSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (swiper.swipeDirection === 'next') {
                if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);
                else swiper.slideTo(stopIndex);
            }
            if (swiper.swipeDirection === 'prev') {
                if (ratio > 1 - params.longSwipesRatio) {
                    swiper.slideTo(stopIndex + increment);
                } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
                    swiper.slideTo(rewindLastIndex);
                } else {
                    swiper.slideTo(stopIndex);
                }
            }
        } else {
            // Short swipes
            if (!params.shortSwipes) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
            if (!isNavButtonTarget) {
                if (swiper.swipeDirection === 'next') {
                    swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
                }
                if (swiper.swipeDirection === 'prev') {
                    swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
                }
            } else if (e.target === swiper.navigation.nextEl) {
                swiper.slideTo(stopIndex + increment);
            } else {
                swiper.slideTo(stopIndex);
            }
        }
    }

    function onResize() {
        const swiper = this;
        const {
            params,
            el
        } = swiper;
        if (el && el.offsetWidth === 0) return;
        // Breakpoints
        if (params.breakpoints) {
            swiper.setBreakpoint();
        }
        // Save locks
        const {
            allowSlideNext,
            allowSlidePrev,
            snapGrid
        } = swiper;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        // Disable locks on resize
        swiper.allowSlideNext = true;
        swiper.allowSlidePrev = true;
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateSlidesClasses();
        const isVirtualLoop = isVirtual && params.loop;
        if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides && !isVirtualLoop) {
            swiper.slideTo(swiper.slides.length - 1, 0, false, true);
        } else {
            if (swiper.params.loop && !isVirtual) {
                swiper.slideToLoop(swiper.realIndex, 0, false, true);
            } else {
                swiper.slideTo(swiper.activeIndex, 0, false, true);
            }
        }
        if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
            clearTimeout(swiper.autoplay.resizeTimeout);
            swiper.autoplay.resizeTimeout = setTimeout(() => {
                if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
                    swiper.autoplay.resume();
                }
            }, 500);
        }
        // Return locks after resize
        swiper.allowSlidePrev = allowSlidePrev;
        swiper.allowSlideNext = allowSlideNext;
        if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
            swiper.checkOverflow();
        }
    }

    function onClick(e) {
        const swiper = this;
        if (!swiper.enabled) return;
        if (!swiper.allowClick) {
            if (swiper.params.preventClicks) e.preventDefault();
            if (swiper.params.preventClicksPropagation && swiper.animating) {
                e.stopPropagation();
                e.stopImmediatePropagation();
            }
        }
    }

    function onScroll() {
        const swiper = this;
        const {
            wrapperEl,
            rtlTranslate,
            enabled
        } = swiper;
        if (!enabled) return;
        swiper.previousTranslate = swiper.translate;
        if (swiper.isHorizontal()) {
            swiper.translate = -wrapperEl.scrollLeft;
        } else {
            swiper.translate = -wrapperEl.scrollTop;
        }
        // eslint-disable-next-line
        if (swiper.translate === 0) swiper.translate = 0;
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
        let newProgress;
        const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
        if (translatesDiff === 0) {
            newProgress = 0;
        } else {
            newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
        }
        if (newProgress !== swiper.progress) {
            swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
        }
        swiper.emit('setTranslate', swiper.translate, false);
    }

    function onLoad(e) {
        const swiper = this;
        processLazyPreloader(swiper, e.target);
        if (swiper.params.cssMode || swiper.params.slidesPerView !== 'auto' && !swiper.params.autoHeight) {
            return;
        }
        swiper.update();
    }

    function onDocumentTouchStart() {
        const swiper = this;
        if (swiper.documentTouchHandlerProceeded) return;
        swiper.documentTouchHandlerProceeded = true;
        if (swiper.params.touchReleaseOnEdges) {
            swiper.el.style.touchAction = 'auto';
        }
    }
    const events = (swiper, method) => {
        const document = getDocument();
        const {
            params,
            el,
            wrapperEl,
            device
        } = swiper;
        const capture = !!params.nested;
        const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
        const swiperMethod = method;
        if (!el || typeof el === 'string') return;
        // Touch Events
        document[domMethod]('touchstart', swiper.onDocumentTouchStart, {
            passive: false,
            capture
        });
        el[domMethod]('touchstart', swiper.onTouchStart, {
            passive: false
        });
        el[domMethod]('pointerdown', swiper.onTouchStart, {
            passive: false
        });
        document[domMethod]('touchmove', swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]('pointermove', swiper.onTouchMove, {
            passive: false,
            capture
        });
        document[domMethod]('touchend', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerup', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointercancel', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('touchcancel', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerout', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('pointerleave', swiper.onTouchEnd, {
            passive: true
        });
        document[domMethod]('contextmenu', swiper.onTouchEnd, {
            passive: true
        });
        // Prevent Links Clicks
        if (params.preventClicks || params.preventClicksPropagation) {
            el[domMethod]('click', swiper.onClick, true);
        }
        if (params.cssMode) {
            wrapperEl[domMethod]('scroll', swiper.onScroll);
        }
        // Resize handler
        if (params.updateOnWindowResize) {
            swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
        } else {
            swiper[swiperMethod]('observerUpdate', onResize, true);
        }
        // Images loader
        el[domMethod]('load', swiper.onLoad, {
            capture: true
        });
    };

    function attachEvents() {
        const swiper = this;
        const {
            params
        } = swiper;
        swiper.onTouchStart = onTouchStart.bind(swiper);
        swiper.onTouchMove = onTouchMove.bind(swiper);
        swiper.onTouchEnd = onTouchEnd.bind(swiper);
        swiper.onDocumentTouchStart = onDocumentTouchStart.bind(swiper);
        if (params.cssMode) {
            swiper.onScroll = onScroll.bind(swiper);
        }
        swiper.onClick = onClick.bind(swiper);
        swiper.onLoad = onLoad.bind(swiper);
        events(swiper, 'on');
    }

    function detachEvents() {
        const swiper = this;
        events(swiper, 'off');
    }
    var events$1 = {
        attachEvents,
        detachEvents
    };
    const isGridEnabled = (swiper, params) => {
        return swiper.grid && params.grid && params.grid.rows > 1;
    };

    function setBreakpoint() {
        const swiper = this;
        const {
            realIndex,
            initialized,
            params,
            el
        } = swiper;
        const breakpoints = params.breakpoints;
        if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return;
        const document = getDocument();
        // Get breakpoint for window/container width and update parameters
        const breakpointsBase = params.breakpointsBase === 'window' || !params.breakpointsBase ? params.breakpointsBase : 'container';
        const breakpointContainer = ['window', 'container'].includes(params.breakpointsBase) || !params.breakpointsBase ? swiper.el : document.querySelector(params.breakpointsBase);
        const breakpoint = swiper.getBreakpoint(breakpoints, breakpointsBase, breakpointContainer);
        if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
        const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
        const breakpointParams = breakpointOnlyParams || swiper.originalParams;
        const wasMultiRow = isGridEnabled(swiper, params);
        const isMultiRow = isGridEnabled(swiper, breakpointParams);
        const wasGrabCursor = swiper.params.grabCursor;
        const isGrabCursor = breakpointParams.grabCursor;
        const wasEnabled = params.enabled;
        if (wasMultiRow && !isMultiRow) {
            el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
            swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
            el.classList.add(`${params.containerModifierClass}grid`);
            if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
                el.classList.add(`${params.containerModifierClass}grid-column`);
            }
            swiper.emitContainerClasses();
        }
        if (wasGrabCursor && !isGrabCursor) {
            swiper.unsetGrabCursor();
        } else if (!wasGrabCursor && isGrabCursor) {
            swiper.setGrabCursor();
        }
        // Toggle navigation, pagination, scrollbar
        ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
            if (typeof breakpointParams[prop] === 'undefined') return;
            const wasModuleEnabled = params[prop] && params[prop].enabled;
            const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;
            if (wasModuleEnabled && !isModuleEnabled) {
                swiper[prop].disable();
            }
            if (!wasModuleEnabled && isModuleEnabled) {
                swiper[prop].enable();
            }
        });
        const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
        const wasLoop = params.loop;
        if (directionChanged && initialized) {
            swiper.changeDirection();
        }
        extend(swiper.params, breakpointParams);
        const isEnabled = swiper.params.enabled;
        const hasLoop = swiper.params.loop;
        Object.assign(swiper, {
            allowTouchMove: swiper.params.allowTouchMove,
            allowSlideNext: swiper.params.allowSlideNext,
            allowSlidePrev: swiper.params.allowSlidePrev
        });
        if (wasEnabled && !isEnabled) {
            swiper.disable();
        } else if (!wasEnabled && isEnabled) {
            swiper.enable();
        }
        swiper.currentBreakpoint = breakpoint;
        swiper.emit('_beforeBreakpoint', breakpointParams);
        if (initialized) {
            if (needsReLoop) {
                swiper.loopDestroy();
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (!wasLoop && hasLoop) {
                swiper.loopCreate(realIndex);
                swiper.updateSlides();
            } else if (wasLoop && !hasLoop) {
                swiper.loopDestroy();
            }
        }
        swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
        if (base === void 0) {
            base = 'window';
        }
        if (!breakpoints || base === 'container' && !containerEl) return undefined;
        let breakpoint = false;
        const window = getWindow();
        const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
        const points = Object.keys(breakpoints).map(point => {
            if (typeof point === 'string' && point.indexOf('@') === 0) {
                const minRatio = parseFloat(point.substr(1));
                const value = currentHeight * minRatio;
                return {
                    value,
                    point
                };
            }
            return {
                value: point,
                point
            };
        });
        points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));
        for (let i = 0; i < points.length; i += 1) {
            const {
                point,
                value
            } = points[i];
            if (base === 'window') {
                if (window.matchMedia(`(min-width: ${value}px)`).matches) {
                    breakpoint = point;
                }
            } else if (value <= containerEl.clientWidth) {
                breakpoint = point;
            }
        }
        return breakpoint || 'max';
    }
    var breakpoints = {
        setBreakpoint,
        getBreakpoint
    };

    function prepareClasses(entries, prefix) {
        const resultClasses = [];
        entries.forEach(item => {
            if (typeof item === 'object') {
                Object.keys(item).forEach(classNames => {
                    if (item[classNames]) {
                        resultClasses.push(prefix + classNames);
                    }
                });
            } else if (typeof item === 'string') {
                resultClasses.push(prefix + item);
            }
        });
        return resultClasses;
    }

    function addClasses() {
        const swiper = this;
        const {
            classNames,
            params,
            rtl,
            el,
            device
        } = swiper;
        // prettier-ignore
        const suffixes = prepareClasses(['initialized', params.direction, {
            'free-mode': swiper.params.freeMode && params.freeMode.enabled
        }, {
            'autoheight': params.autoHeight
        }, {
            'rtl': rtl
        }, {
            'grid': params.grid && params.grid.rows > 1
        }, {
            'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
        }, {
            'android': device.android
        }, {
            'ios': device.ios
        }, {
            'css-mode': params.cssMode
        }, {
            'centered': params.cssMode && params.centeredSlides
        }, {
            'watch-progress': params.watchSlidesProgress
        }], params.containerModifierClass);
        classNames.push(...suffixes);
        el.classList.add(...classNames);
        swiper.emitContainerClasses();
    }

    function removeClasses() {
        const swiper = this;
        const {
            el,
            classNames
        } = swiper;
        if (!el || typeof el === 'string') return;
        el.classList.remove(...classNames);
        swiper.emitContainerClasses();
    }
    var classes = {
        addClasses,
        removeClasses
    };

    function checkOverflow() {
        const swiper = this;
        const {
            isLocked: wasLocked,
            params
        } = swiper;
        const {
            slidesOffsetBefore
        } = params;
        if (slidesOffsetBefore) {
            const lastSlideIndex = swiper.slides.length - 1;
            const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
            swiper.isLocked = swiper.size > lastSlideRightEdge;
        } else {
            swiper.isLocked = swiper.snapGrid.length === 1;
        }
        if (params.allowSlideNext === true) {
            swiper.allowSlideNext = !swiper.isLocked;
        }
        if (params.allowSlidePrev === true) {
            swiper.allowSlidePrev = !swiper.isLocked;
        }
        if (wasLocked && wasLocked !== swiper.isLocked) {
            swiper.isEnd = false;
        }
        if (wasLocked !== swiper.isLocked) {
            swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
        }
    }
    var checkOverflow$1 = {
        checkOverflow
    };
    var defaults = {
        init: true,
        direction: 'horizontal',
        oneWayMovement: false,
        swiperElementNodeName: 'SWIPER-CONTAINER',
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: false,
        updateOnWindowResize: true,
        resizeObserver: true,
        nested: false,
        createElements: false,
        eventsPrefix: 'swiper',
        enabled: true,
        focusableElements: 'input, select, option, textarea, button, video, label',
        // Overrides
        width: null,
        height: null,
        //
        preventInteractionOnTransition: false,
        // ssr
        userAgent: null,
        url: null,
        // To support iOS's swipe-to-go-back gesture (when being used in-app).
        edgeSwipeDetection: false,
        edgeSwipeThreshold: 20,
        // Autoheight
        autoHeight: false,
        // Set wrapper width
        setWrapperSize: false,
        // Virtual Translate
        virtualTranslate: false,
        // Effects
        effect: 'slide',
        // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
        // Breakpoints
        breakpoints: undefined,
        breakpointsBase: 'window',
        // Slides grid
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: false,
        centeredSlides: false,
        centeredSlidesBounds: false,
        slidesOffsetBefore: 0,
        // in px
        slidesOffsetAfter: 0,
        // in px
        normalizeSlideIndex: true,
        centerInsufficientSlides: false,
        // Disable swiper and hide navigation when container not overflow
        watchOverflow: true,
        // Round length
        roundLengths: false,
        // Touches
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: true,
        shortSwipes: true,
        longSwipes: true,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: true,
        allowTouchMove: true,
        threshold: 5,
        touchMoveStopPropagation: false,
        touchStartPreventDefault: true,
        touchStartForcePreventDefault: false,
        touchReleaseOnEdges: false,
        // Unique Navigation Elements
        uniqueNavElements: true,
        // Resistance
        resistance: true,
        resistanceRatio: 0.85,
        // Progress
        watchSlidesProgress: false,
        // Cursor
        grabCursor: false,
        // Clicks
        preventClicks: true,
        preventClicksPropagation: true,
        slideToClickedSlide: false,
        // loop
        loop: false,
        loopAddBlankSlides: true,
        loopAdditionalSlides: 0,
        loopPreventsSliding: true,
        // rewind
        rewind: false,
        // Swiping/no swiping
        allowSlidePrev: true,
        allowSlideNext: true,
        swipeHandler: null,
        // '.swipe-handler',
        noSwiping: true,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        // Passive Listeners
        passiveListeners: true,
        maxBackfaceHiddenSlides: 10,
        // NS
        containerModifierClass: 'swiper-',
        // NEW
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-blank',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideFullyVisibleClass: 'swiper-slide-fully-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        // Callbacks
        runCallbacksOnInit: true,
        // Internals
        _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
        return function extendParams(obj) {
            if (obj === void 0) {
                obj = {};
            }
            const moduleParamName = Object.keys(obj)[0];
            const moduleParams = obj[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) {
                extend(allModulesParams, obj);
                return;
            }
            if (params[moduleParamName] === true) {
                params[moduleParamName] = {
                    enabled: true
                };
            }
            if (moduleParamName === 'navigation' && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].prevEl && !params[moduleParamName].nextEl) {
                params[moduleParamName].auto = true;
            }
            if (['pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] && params[moduleParamName].enabled && !params[moduleParamName].el) {
                params[moduleParamName].auto = true;
            }
            if (!(moduleParamName in params && 'enabled' in moduleParams)) {
                extend(allModulesParams, obj);
                return;
            }
            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
                params[moduleParamName].enabled = true;
            }
            if (!params[moduleParamName]) params[moduleParamName] = {
                enabled: false
            };
            extend(allModulesParams, obj);
        };
    }
    /* eslint no-param-reassign: "off" */
    const prototypes = {
        eventsEmitter,
        update,
        translate,
        transition,
        slide,
        loop,
        grabCursor,
        events: events$1,
        breakpoints,
        checkOverflow: checkOverflow$1,
        classes
    };
    const extendedDefaults = {};
    class Swiper {
        constructor() {
            let el;
            let params;
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }
            if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
                params = args[0];
            } else {
                [el, params] = args;
            }
            if (!params) params = {};
            params = extend({}, params);
            if (el && !params.el) params.el = el;
            const document = getDocument();
            if (params.el && typeof params.el === 'string' && document.querySelectorAll(params.el).length > 1) {
                const swipers = [];
                document.querySelectorAll(params.el).forEach(containerEl => {
                    const newParams = extend({}, params, {
                        el: containerEl
                    });
                    swipers.push(new Swiper(newParams));
                });
                // eslint-disable-next-line no-constructor-return
                return swipers;
            }
            // Swiper Instance
            const swiper = this;
            swiper.__swiper__ = true;
            swiper.support = getSupport();
            swiper.device = getDevice({
                userAgent: params.userAgent
            });
            swiper.browser = getBrowser();
            swiper.eventsListeners = {};
            swiper.eventsAnyListeners = [];
            swiper.modules = [...swiper.__modules__];
            if (params.modules && Array.isArray(params.modules)) {
                swiper.modules.push(...params.modules);
            }
            const allModulesParams = {};
            swiper.modules.forEach(mod => {
                mod({
                    params,
                    swiper,
                    extendParams: moduleExtendParams(params, allModulesParams),
                    on: swiper.on.bind(swiper),
                    once: swiper.once.bind(swiper),
                    off: swiper.off.bind(swiper),
                    emit: swiper.emit.bind(swiper)
                });
            });
            // Extend defaults with modules params
            const swiperParams = extend({}, defaults, allModulesParams);
            // Extend defaults with passed params
            swiper.params = extend({}, swiperParams, extendedDefaults, params);
            swiper.originalParams = extend({}, swiper.params);
            swiper.passedParams = extend({}, params);
            // add event listeners
            if (swiper.params && swiper.params.on) {
                Object.keys(swiper.params.on).forEach(eventName => {
                    swiper.on(eventName, swiper.params.on[eventName]);
                });
            }
            if (swiper.params && swiper.params.onAny) {
                swiper.onAny(swiper.params.onAny);
            }
            // Extend Swiper
            Object.assign(swiper, {
                enabled: swiper.params.enabled,
                el,
                // Classes
                classNames: [],
                // Slides
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                // isDirection
                isHorizontal() {
                    return swiper.params.direction === 'horizontal';
                },
                isVertical() {
                    return swiper.params.direction === 'vertical';
                },
                // Indexes
                activeIndex: 0,
                realIndex: 0,
                //
                isBeginning: true,
                isEnd: false,
                // Props
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: false,
                cssOverflowAdjustment() {
                    // Returns 0 unless `translate` is > 2**23
                    // Should be subtracted from css values to prevent overflow
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
                },
                // Locks
                allowSlideNext: swiper.params.allowSlideNext,
                allowSlidePrev: swiper.params.allowSlidePrev,
                // Touch Events
                touchEventsData: {
                    isTouched: undefined,
                    isMoved: undefined,
                    allowTouchCallbacks: undefined,
                    touchStartTime: undefined,
                    isScrolling: undefined,
                    currentTranslate: undefined,
                    startTranslate: undefined,
                    allowThresholdMove: undefined,
                    // Form elements to match
                    focusableElements: swiper.params.focusableElements,
                    // Last click time
                    lastClickTime: 0,
                    clickTimeout: undefined,
                    // Velocities
                    velocities: [],
                    allowMomentumBounce: undefined,
                    startMoving: undefined,
                    pointerId: null,
                    touchId: null
                },
                // Clicks
                allowClick: true,
                // Touches
                allowTouchMove: swiper.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                // Images
                imagesToLoad: [],
                imagesLoaded: 0
            });
            swiper.emit('_swiper');
            // Init
            if (swiper.params.init) {
                swiper.init();
            }
            // Return app instance
            // eslint-disable-next-line no-constructor-return
            return swiper;
        }
        getDirectionLabel(property) {
            if (this.isHorizontal()) {
                return property;
            }
            // prettier-ignore
            return {
                'width': 'height',
                'margin-top': 'margin-left',
                'margin-bottom ': 'margin-right',
                'margin-left': 'margin-top',
                'margin-right': 'margin-bottom',
                'padding-left': 'padding-top',
                'padding-right': 'padding-bottom',
                'marginRight': 'marginBottom'
            } [property];
        }
        getSlideIndex(slideEl) {
            const {
                slidesEl,
                params
            } = this;
            const slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
            const firstSlideIndex = elementIndex(slides[0]);
            return elementIndex(slideEl) - firstSlideIndex;
        }
        getSlideIndexByData(index) {
            return this.getSlideIndex(this.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') * 1 === index));
        }
        getSlideIndexWhenGrid(index) {
            if (this.grid && this.params.grid && this.params.grid.rows > 1) {
                if (this.params.grid.fill === 'column') {
                    index = Math.floor(index / this.params.grid.rows);
                } else if (this.params.grid.fill === 'row') {
                    index = index % Math.ceil(this.slides.length / this.params.grid.rows);
                }
            }
            return index;
        }
        recalcSlides() {
            const swiper = this;
            const {
                slidesEl,
                params
            } = swiper;
            swiper.slides = elementChildren(slidesEl, `.${params.slideClass}, swiper-slide`);
        }
        enable() {
            const swiper = this;
            if (swiper.enabled) return;
            swiper.enabled = true;
            if (swiper.params.grabCursor) {
                swiper.setGrabCursor();
            }
            swiper.emit('enable');
        }
        disable() {
            const swiper = this;
            if (!swiper.enabled) return;
            swiper.enabled = false;
            if (swiper.params.grabCursor) {
                swiper.unsetGrabCursor();
            }
            swiper.emit('disable');
        }
        setProgress(progress, speed) {
            const swiper = this;
            progress = Math.min(Math.max(progress, 0), 1);
            const min = swiper.minTranslate();
            const max = swiper.maxTranslate();
            const current = (max - min) * progress + min;
            swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }
        emitContainerClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const cls = swiper.el.className.split(' ').filter(className => {
                return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
            });
            swiper.emit('_containerClasses', cls.join(' '));
        }
        getSlideClasses(slideEl) {
            const swiper = this;
            if (swiper.destroyed) return '';
            return slideEl.className.split(' ').filter(className => {
                return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
            }).join(' ');
        }
        emitSlidesClasses() {
            const swiper = this;
            if (!swiper.params._emitClasses || !swiper.el) return;
            const updates = [];
            swiper.slides.forEach(slideEl => {
                const classNames = swiper.getSlideClasses(slideEl);
                updates.push({
                    slideEl,
                    classNames
                });
                swiper.emit('_slideClass', slideEl, classNames);
            });
            swiper.emit('_slideClasses', updates);
        }
        slidesPerViewDynamic(view, exact) {
            if (view === void 0) {
                view = 'current';
            }
            if (exact === void 0) {
                exact = false;
            }
            const swiper = this;
            const {
                params,
                slides,
                slidesGrid,
                slidesSizesGrid,
                size: swiperSize,
                activeIndex
            } = swiper;
            let spv = 1;
            if (typeof params.slidesPerView === 'number') return params.slidesPerView;
            if (params.centeredSlides) {
                let slideSize = slides[activeIndex] ? Math.ceil(slides[activeIndex].swiperSlideSize) : 0;
                let breakLoop;
                for (let i = activeIndex + 1; i < slides.length; i += 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += Math.ceil(slides[i].swiperSlideSize);
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
                for (let i = activeIndex - 1; i >= 0; i -= 1) {
                    if (slides[i] && !breakLoop) {
                        slideSize += slides[i].swiperSlideSize;
                        spv += 1;
                        if (slideSize > swiperSize) breakLoop = true;
                    }
                }
            } else {
                // eslint-disable-next-line
                if (view === 'current') {
                    for (let i = activeIndex + 1; i < slides.length; i += 1) {
                        const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                } else {
                    // previous
                    for (let i = activeIndex - 1; i >= 0; i -= 1) {
                        const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;
                        if (slideInView) {
                            spv += 1;
                        }
                    }
                }
            }
            return spv;
        }
        update() {
            const swiper = this;
            if (!swiper || swiper.destroyed) return;
            const {
                snapGrid,
                params
            } = swiper;
            // Breakpoints
            if (params.breakpoints) {
                swiper.setBreakpoint();
            }
            [...swiper.el.querySelectorAll('[loading="lazy"]')].forEach(imageEl => {
                if (imageEl.complete) {
                    processLazyPreloader(swiper, imageEl);
                }
            });
            swiper.updateSize();
            swiper.updateSlides();
            swiper.updateProgress();
            swiper.updateSlidesClasses();

            function setTranslate() {
                const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
                const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
                swiper.setTranslate(newTranslate);
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
            let translated;
            if (params.freeMode && params.freeMode.enabled && !params.cssMode) {
                setTranslate();
                if (params.autoHeight) {
                    swiper.updateAutoHeight();
                }
            } else {
                if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !params.centeredSlides) {
                    const slides = swiper.virtual && params.virtual.enabled ? swiper.virtual.slides : swiper.slides;
                    translated = swiper.slideTo(slides.length - 1, 0, false, true);
                } else {
                    translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
                }
                if (!translated) {
                    setTranslate();
                }
            }
            if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
                swiper.checkOverflow();
            }
            swiper.emit('update');
        }
        changeDirection(newDirection, needUpdate) {
            if (needUpdate === void 0) {
                needUpdate = true;
            }
            const swiper = this;
            const currentDirection = swiper.params.direction;
            if (!newDirection) {
                // eslint-disable-next-line
                newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
            }
            if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
                return swiper;
            }
            swiper.el.classList.remove(`${swiper.params.containerModifierClass}${currentDirection}`);
            swiper.el.classList.add(`${swiper.params.containerModifierClass}${newDirection}`);
            swiper.emitContainerClasses();
            swiper.params.direction = newDirection;
            swiper.slides.forEach(slideEl => {
                if (newDirection === 'vertical') {
                    slideEl.style.width = '';
                } else {
                    slideEl.style.height = '';
                }
            });
            swiper.emit('changeDirection');
            if (needUpdate) swiper.update();
            return swiper;
        }
        changeLanguageDirection(direction) {
            const swiper = this;
            if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
            swiper.rtl = direction === 'rtl';
            swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;
            if (swiper.rtl) {
                swiper.el.classList.add(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = 'rtl';
            } else {
                swiper.el.classList.remove(`${swiper.params.containerModifierClass}rtl`);
                swiper.el.dir = 'ltr';
            }
            swiper.update();
        }
        mount(element) {
            const swiper = this;
            if (swiper.mounted) return true;
            // Find el
            let el = element || swiper.params.el;
            if (typeof el === 'string') {
                el = document.querySelector(el);
            }
            if (!el) {
                return false;
            }
            el.swiper = swiper;
            if (el.parentNode && el.parentNode.host && el.parentNode.host.nodeName === swiper.params.swiperElementNodeName.toUpperCase()) {
                swiper.isElement = true;
            }
            const getWrapperSelector = () => {
                return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
            };
            const getWrapper = () => {
                if (el && el.shadowRoot && el.shadowRoot.querySelector) {
                    const res = el.shadowRoot.querySelector(getWrapperSelector());
                    // Children needs to return slot items
                    return res;
                }
                return elementChildren(el, getWrapperSelector())[0];
            };
            // Find Wrapper
            let wrapperEl = getWrapper();
            if (!wrapperEl && swiper.params.createElements) {
                wrapperEl = createElement('div', swiper.params.wrapperClass);
                el.append(wrapperEl);
                elementChildren(el, `.${swiper.params.slideClass}`).forEach(slideEl => {
                    wrapperEl.append(slideEl);
                });
            }
            Object.assign(swiper, {
                el,
                wrapperEl,
                slidesEl: swiper.isElement && !el.parentNode.host.slideSlots ? el.parentNode.host : wrapperEl,
                hostEl: swiper.isElement ? el.parentNode.host : el,
                mounted: true,
                // RTL
                rtl: el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl',
                rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || elementStyle(el, 'direction') === 'rtl'),
                wrongRTL: elementStyle(wrapperEl, 'display') === '-webkit-box'
            });
            return true;
        }
        init(el) {
            const swiper = this;
            if (swiper.initialized) return swiper;
            const mounted = swiper.mount(el);
            if (mounted === false) return swiper;
            swiper.emit('beforeInit');
            // Set breakpoint
            if (swiper.params.breakpoints) {
                swiper.setBreakpoint();
            }
            // Add Classes
            swiper.addClasses();
            // Update size
            swiper.updateSize();
            // Update slides
            swiper.updateSlides();
            if (swiper.params.watchOverflow) {
                swiper.checkOverflow();
            }
            // Set Grab Cursor
            if (swiper.params.grabCursor && swiper.enabled) {
                swiper.setGrabCursor();
            }
            // Slide To Initial Slide
            if (swiper.params.loop && swiper.virtual && swiper.params.virtual.enabled) {
                swiper.slideTo(swiper.params.initialSlide + swiper.virtual.slidesBefore, 0, swiper.params.runCallbacksOnInit, false, true);
            } else {
                swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
            }
            // Create loop
            if (swiper.params.loop) {
                swiper.loopCreate(undefined, true);
            }
            // Attach events
            swiper.attachEvents();
            const lazyElements = [...swiper.el.querySelectorAll('[loading="lazy"]')];
            if (swiper.isElement) {
                lazyElements.push(...swiper.hostEl.querySelectorAll('[loading="lazy"]'));
            }
            lazyElements.forEach(imageEl => {
                if (imageEl.complete) {
                    processLazyPreloader(swiper, imageEl);
                } else {
                    imageEl.addEventListener('load', e => {
                        processLazyPreloader(swiper, e.target);
                    });
                }
            });
            preload(swiper);
            // Init Flag
            swiper.initialized = true;
            preload(swiper);
            // Emit
            swiper.emit('init');
            swiper.emit('afterInit');
            return swiper;
        }
        destroy(deleteInstance, cleanStyles) {
            if (deleteInstance === void 0) {
                deleteInstance = true;
            }
            if (cleanStyles === void 0) {
                cleanStyles = true;
            }
            const swiper = this;
            const {
                params,
                el,
                wrapperEl,
                slides
            } = swiper;
            if (typeof swiper.params === 'undefined' || swiper.destroyed) {
                return null;
            }
            swiper.emit('beforeDestroy');
            // Init Flag
            swiper.initialized = false;
            // Detach events
            swiper.detachEvents();
            // Destroy loop
            if (params.loop) {
                swiper.loopDestroy();
            }
            // Cleanup styles
            if (cleanStyles) {
                swiper.removeClasses();
                if (el && typeof el !== 'string') {
                    el.removeAttribute('style');
                }
                if (wrapperEl) {
                    wrapperEl.removeAttribute('style');
                }
                if (slides && slides.length) {
                    slides.forEach(slideEl => {
                        slideEl.classList.remove(params.slideVisibleClass, params.slideFullyVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass);
                        slideEl.removeAttribute('style');
                        slideEl.removeAttribute('data-swiper-slide-index');
                    });
                }
            }
            swiper.emit('destroy');
            // Detach emitter events
            Object.keys(swiper.eventsListeners).forEach(eventName => {
                swiper.off(eventName);
            });
            if (deleteInstance !== false) {
                if (swiper.el && typeof swiper.el !== 'string') {
                    swiper.el.swiper = null;
                }
                deleteProps(swiper);
            }
            swiper.destroyed = true;
            return null;
        }
        static extendDefaults(newDefaults) {
            extend(extendedDefaults, newDefaults);
        }
        static get extendedDefaults() {
            return extendedDefaults;
        }
        static get defaults() {
            return defaults;
        }
        static installModule(mod) {
            if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
            const modules = Swiper.prototype.__modules__;
            if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
                modules.push(mod);
            }
        }
        static use(module) {
            if (Array.isArray(module)) {
                module.forEach(m => Swiper.installModule(m));
                return Swiper;
            }
            Swiper.installModule(module);
            return Swiper;
        }
    }
    Object.keys(prototypes).forEach(prototypeGroup => {
        Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
            Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        });
    });
    Swiper.use([Resize, Observer]);

    function Virtual(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            virtual: {
                enabled: false,
                slides: [],
                cache: true,
                renderSlide: null,
                renderExternal: null,
                renderExternalUpdate: true,
                addSlidesBefore: 0,
                addSlidesAfter: 0
            }
        });
        let cssModeTimeout;
        const document = getDocument();
        swiper.virtual = {
            cache: {},
            from: undefined,
            to: undefined,
            slides: [],
            offset: 0,
            slidesGrid: []
        };
        const tempDOM = document.createElement('div');

        function renderSlide(slide, index) {
            const params = swiper.params.virtual;
            if (params.cache && swiper.virtual.cache[index]) {
                return swiper.virtual.cache[index];
            }
            // eslint-disable-next-line
            let slideEl;
            if (params.renderSlide) {
                slideEl = params.renderSlide.call(swiper, slide, index);
                if (typeof slideEl === 'string') {
                    setInnerHTML(tempDOM, slideEl);
                    slideEl = tempDOM.children[0];
                }
            } else if (swiper.isElement) {
                slideEl = createElement('swiper-slide');
            } else {
                slideEl = createElement('div', swiper.params.slideClass);
            }
            slideEl.setAttribute('data-swiper-slide-index', index);
            if (!params.renderSlide) {
                setInnerHTML(slideEl, slide);
            }
            if (params.cache) {
                swiper.virtual.cache[index] = slideEl;
            }
            return slideEl;
        }

        function update(force, beforeInit, forceActiveIndex) {
            const {
                slidesPerView,
                slidesPerGroup,
                centeredSlides,
                loop: isLoop,
                initialSlide
            } = swiper.params;
            if (beforeInit && !isLoop && initialSlide > 0) {
                return;
            }
            const {
                addSlidesBefore,
                addSlidesAfter
            } = swiper.params.virtual;
            const {
                from: previousFrom,
                to: previousTo,
                slides,
                slidesGrid: previousSlidesGrid,
                offset: previousOffset
            } = swiper.virtual;
            if (!swiper.params.cssMode) {
                swiper.updateActiveIndex();
            }
            const activeIndex = typeof forceActiveIndex === 'undefined' ? swiper.activeIndex || 0 : forceActiveIndex;
            let offsetProp;
            if (swiper.rtlTranslate) offsetProp = 'right';
            else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
            let slidesAfter;
            let slidesBefore;
            if (centeredSlides) {
                slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
                slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
            } else {
                slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
                slidesBefore = (isLoop ? slidesPerView : slidesPerGroup) + addSlidesBefore;
            }
            let from = activeIndex - slidesBefore;
            let to = activeIndex + slidesAfter;
            if (!isLoop) {
                from = Math.max(from, 0);
                to = Math.min(to, slides.length - 1);
            }
            let offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
            if (isLoop && activeIndex >= slidesBefore) {
                from -= slidesBefore;
                if (!centeredSlides) offset += swiper.slidesGrid[0];
            } else if (isLoop && activeIndex < slidesBefore) {
                from = -slidesBefore;
                if (centeredSlides) offset += swiper.slidesGrid[0];
            }
            Object.assign(swiper.virtual, {
                from,
                to,
                offset,
                slidesGrid: swiper.slidesGrid,
                slidesBefore,
                slidesAfter
            });

            function onRendered() {
                swiper.updateSlides();
                swiper.updateProgress();
                swiper.updateSlidesClasses();
                emit('virtualUpdate');
            }
            if (previousFrom === from && previousTo === to && !force) {
                if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
                    swiper.slides.forEach(slideEl => {
                        slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
                    });
                }
                swiper.updateProgress();
                emit('virtualUpdate');
                return;
            }
            if (swiper.params.virtual.renderExternal) {
                swiper.params.virtual.renderExternal.call(swiper, {
                    offset,
                    from,
                    to,
                    slides: function getSlides() {
                        const slidesToRender = [];
                        for (let i = from; i <= to; i += 1) {
                            slidesToRender.push(slides[i]);
                        }
                        return slidesToRender;
                    }()
                });
                if (swiper.params.virtual.renderExternalUpdate) {
                    onRendered();
                } else {
                    emit('virtualUpdate');
                }
                return;
            }
            const prependIndexes = [];
            const appendIndexes = [];
            const getSlideIndex = index => {
                let slideIndex = index;
                if (index < 0) {
                    slideIndex = slides.length + index;
                } else if (slideIndex >= slides.length) {
                    // eslint-disable-next-line
                    slideIndex = slideIndex - slides.length;
                }
                return slideIndex;
            };
            if (force) {
                swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`)).forEach(slideEl => {
                    slideEl.remove();
                });
            } else {
                for (let i = previousFrom; i <= previousTo; i += 1) {
                    if (i < from || i > to) {
                        const slideIndex = getSlideIndex(i);
                        swiper.slides.filter(el => el.matches(`.${swiper.params.slideClass}[data-swiper-slide-index="${slideIndex}"], swiper-slide[data-swiper-slide-index="${slideIndex}"]`)).forEach(slideEl => {
                            slideEl.remove();
                        });
                    }
                }
            }
            const loopFrom = isLoop ? -slides.length : 0;
            const loopTo = isLoop ? slides.length * 2 : slides.length;
            for (let i = loopFrom; i < loopTo; i += 1) {
                if (i >= from && i <= to) {
                    const slideIndex = getSlideIndex(i);
                    if (typeof previousTo === 'undefined' || force) {
                        appendIndexes.push(slideIndex);
                    } else {
                        if (i > previousTo) appendIndexes.push(slideIndex);
                        if (i < previousFrom) prependIndexes.push(slideIndex);
                    }
                }
            }
            appendIndexes.forEach(index => {
                swiper.slidesEl.append(renderSlide(slides[index], index));
            });
            if (isLoop) {
                for (let i = prependIndexes.length - 1; i >= 0; i -= 1) {
                    const index = prependIndexes[i];
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
                }
            } else {
                prependIndexes.sort((a, b) => b - a);
                prependIndexes.forEach(index => {
                    swiper.slidesEl.prepend(renderSlide(slides[index], index));
                });
            }
            elementChildren(swiper.slidesEl, '.swiper-slide, swiper-slide').forEach(slideEl => {
                slideEl.style[offsetProp] = `${offset - Math.abs(swiper.cssOverflowAdjustment())}px`;
            });
            onRendered();
        }

        function appendSlide(slides) {
            if (typeof slides === 'object' && 'length' in slides) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.push(slides[i]);
                }
            } else {
                swiper.virtual.slides.push(slides);
            }
            update(true);
        }

        function prependSlide(slides) {
            const activeIndex = swiper.activeIndex;
            let newActiveIndex = activeIndex + 1;
            let numberOfNewSlides = 1;
            if (Array.isArray(slides)) {
                for (let i = 0; i < slides.length; i += 1) {
                    if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
                }
                newActiveIndex = activeIndex + slides.length;
                numberOfNewSlides = slides.length;
            } else {
                swiper.virtual.slides.unshift(slides);
            }
            if (swiper.params.virtual.cache) {
                const cache = swiper.virtual.cache;
                const newCache = {};
                Object.keys(cache).forEach(cachedIndex => {
                    const cachedEl = cache[cachedIndex];
                    const cachedElIndex = cachedEl.getAttribute('data-swiper-slide-index');
                    if (cachedElIndex) {
                        cachedEl.setAttribute('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
                    }
                    newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = cachedEl;
                });
                swiper.virtual.cache = newCache;
            }
            update(true);
            swiper.slideTo(newActiveIndex, 0);
        }

        function removeSlide(slidesIndexes) {
            if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
            let activeIndex = swiper.activeIndex;
            if (Array.isArray(slidesIndexes)) {
                for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
                    if (swiper.params.virtual.cache) {
                        delete swiper.virtual.cache[slidesIndexes[i]];
                        // shift cache indexes
                        Object.keys(swiper.virtual.cache).forEach(key => {
                            if (key > slidesIndexes) {
                                swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                                swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                                delete swiper.virtual.cache[key];
                            }
                        });
                    }
                    swiper.virtual.slides.splice(slidesIndexes[i], 1);
                    if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
                    activeIndex = Math.max(activeIndex, 0);
                }
            } else {
                if (swiper.params.virtual.cache) {
                    delete swiper.virtual.cache[slidesIndexes];
                    // shift cache indexes
                    Object.keys(swiper.virtual.cache).forEach(key => {
                        if (key > slidesIndexes) {
                            swiper.virtual.cache[key - 1] = swiper.virtual.cache[key];
                            swiper.virtual.cache[key - 1].setAttribute('data-swiper-slide-index', key - 1);
                            delete swiper.virtual.cache[key];
                        }
                    });
                }
                swiper.virtual.slides.splice(slidesIndexes, 1);
                if (slidesIndexes < activeIndex) activeIndex -= 1;
                activeIndex = Math.max(activeIndex, 0);
            }
            update(true);
            swiper.slideTo(activeIndex, 0);
        }

        function removeAllSlides() {
            swiper.virtual.slides = [];
            if (swiper.params.virtual.cache) {
                swiper.virtual.cache = {};
            }
            update(true);
            swiper.slideTo(0, 0);
        }
        on('beforeInit', () => {
            if (!swiper.params.virtual.enabled) return;
            let domSlidesAssigned;
            if (typeof swiper.passedParams.virtual.slides === 'undefined') {
                const slides = [...swiper.slidesEl.children].filter(el => el.matches(`.${swiper.params.slideClass}, swiper-slide`));
                if (slides && slides.length) {
                    swiper.virtual.slides = [...slides];
                    domSlidesAssigned = true;
                    slides.forEach((slideEl, slideIndex) => {
                        slideEl.setAttribute('data-swiper-slide-index', slideIndex);
                        swiper.virtual.cache[slideIndex] = slideEl;
                        slideEl.remove();
                    });
                }
            }
            if (!domSlidesAssigned) {
                swiper.virtual.slides = swiper.params.virtual.slides;
            }
            swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
            update(false, true);
        });
        on('setTranslate', () => {
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode && !swiper._immediateVirtual) {
                clearTimeout(cssModeTimeout);
                cssModeTimeout = setTimeout(() => {
                    update();
                }, 100);
            } else {
                update();
            }
        });
        on('init update resize', () => {
            if (!swiper.params.virtual.enabled) return;
            if (swiper.params.cssMode) {
                setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
            }
        });
        Object.assign(swiper.virtual, {
            appendSlide,
            prependSlide,
            removeSlide,
            removeAllSlides,
            update
        });
    }
    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const document = getDocument();
        const window = getWindow();
        swiper.keyboard = {
            enabled: false
        };
        extendParams({
            keyboard: {
                enabled: false,
                onlyInViewport: true,
                pageUpDown: true
            }
        });

        function handle(event) {
            if (!swiper.enabled) return;
            const {
                rtlTranslate: rtl
            } = swiper;
            let e = event;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            const kc = e.keyCode || e.charCode;
            const pageUpDown = swiper.params.keyboard.pageUpDown;
            const isPageUp = pageUpDown && kc === 33;
            const isPageDown = pageUpDown && kc === 34;
            const isArrowLeft = kc === 37;
            const isArrowRight = kc === 39;
            const isArrowUp = kc === 38;
            const isArrowDown = kc === 40;
            // Directions locks
            if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
                return false;
            }
            if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
                return false;
            }
            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
                return undefined;
            }
            if (document.activeElement && (document.activeElement.isContentEditable || document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea'))) {
                return undefined;
            }
            if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
                let inView = false;
                // Check that swiper should be inside of visible area of window
                if (elementParents(swiper.el, `.${swiper.params.slideClass}, swiper-slide`).length > 0 && elementParents(swiper.el, `.${swiper.params.slideActiveClass}`).length === 0) {
                    return undefined;
                }
                const el = swiper.el;
                const swiperWidth = el.clientWidth;
                const swiperHeight = el.clientHeight;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;
                const swiperOffset = elementOffset(el);
                if (rtl) swiperOffset.left -= el.scrollLeft;
                const swiperCoord = [
                    [swiperOffset.left, swiperOffset.top],
                    [swiperOffset.left + swiperWidth, swiperOffset.top],
                    [swiperOffset.left, swiperOffset.top + swiperHeight],
                    [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]
                ];
                for (let i = 0; i < swiperCoord.length; i += 1) {
                    const point = swiperCoord[i];
                    if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
                        if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line
                        inView = true;
                    }
                }
                if (!inView) return undefined;
            }
            if (swiper.isHorizontal()) {
                if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
                if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
            } else {
                if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
                    if (e.preventDefault) e.preventDefault();
                    else e.returnValue = false;
                }
                if (isPageDown || isArrowDown) swiper.slideNext();
                if (isPageUp || isArrowUp) swiper.slidePrev();
            }
            emit('keyPress', kc);
            return undefined;
        }

        function enable() {
            if (swiper.keyboard.enabled) return;
            document.addEventListener('keydown', handle);
            swiper.keyboard.enabled = true;
        }

        function disable() {
            if (!swiper.keyboard.enabled) return;
            document.removeEventListener('keydown', handle);
            swiper.keyboard.enabled = false;
        }
        on('init', () => {
            if (swiper.params.keyboard.enabled) {
                enable();
            }
        });
        on('destroy', () => {
            if (swiper.keyboard.enabled) {
                disable();
            }
        });
        Object.assign(swiper.keyboard, {
            enable,
            disable
        });
    }
    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const window = getWindow();
        extendParams({
            mousewheel: {
                enabled: false,
                releaseOnEdges: false,
                invert: false,
                forceToAxis: false,
                sensitivity: 1,
                eventsTarget: 'container',
                thresholdDelta: null,
                thresholdTime: null,
                noMousewheelClass: 'swiper-no-mousewheel'
            }
        });
        swiper.mousewheel = {
            enabled: false
        };
        let timeout;
        let lastScrollTime = now();
        let lastEventBeforeSnap;
        const recentWheelEvents = [];

        function normalize(e) {
            // Reasonable defaults
            const PIXEL_STEP = 10;
            const LINE_HEIGHT = 40;
            const PAGE_HEIGHT = 800;
            let sX = 0;
            let sY = 0; // spinX, spinY
            let pX = 0;
            let pY = 0; // pixelX, pixelY
            // Legacy
            if ('detail' in e) {
                sY = e.detail;
            }
            if ('wheelDelta' in e) {
                sY = -e.wheelDelta / 120;
            }
            if ('wheelDeltaY' in e) {
                sY = -e.wheelDeltaY / 120;
            }
            if ('wheelDeltaX' in e) {
                sX = -e.wheelDeltaX / 120;
            }
            // side scrolling on FF with DOMMouseScroll
            if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
                sX = sY;
                sY = 0;
            }
            pX = sX * PIXEL_STEP;
            pY = sY * PIXEL_STEP;
            if ('deltaY' in e) {
                pY = e.deltaY;
            }
            if ('deltaX' in e) {
                pX = e.deltaX;
            }
            if (e.shiftKey && !pX) {
                // if user scrolls with shift he wants horizontal scroll
                pX = pY;
                pY = 0;
            }
            if ((pX || pY) && e.deltaMode) {
                if (e.deltaMode === 1) {
                    // delta in LINE units
                    pX *= LINE_HEIGHT;
                    pY *= LINE_HEIGHT;
                } else {
                    // delta in PAGE units
                    pX *= PAGE_HEIGHT;
                    pY *= PAGE_HEIGHT;
                }
            }
            // Fall-back if spin cannot be determined
            if (pX && !sX) {
                sX = pX < 1 ? -1 : 1;
            }
            if (pY && !sY) {
                sY = pY < 1 ? -1 : 1;
            }
            return {
                spinX: sX,
                spinY: sY,
                pixelX: pX,
                pixelY: pY
            };
        }

        function handleMouseEnter() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = true;
        }

        function handleMouseLeave() {
            if (!swiper.enabled) return;
            swiper.mouseEntered = false;
        }

        function animateSlider(newEvent) {
            if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
                // Prevent if delta of wheel scroll delta is below configured threshold
                return false;
            }
            if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
                // Prevent if time between scrolls is below configured threshold
                return false;
            }
            // If the movement is NOT big enough and
            // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
            //   Don't go any further (avoid insignificant scroll movement).
            if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
                // Return false as a default
                return true;
            }
            // If user is scrolling towards the end:
            //   If the slider hasn't hit the latest slide or
            //   if the slider is a loop and
            //   if the slider isn't moving right now:
            //     Go to next slide and
            //     emit a scroll event.
            // Else (the user is scrolling towards the beginning) and
            // if the slider hasn't hit the first slide or
            // if the slider is a loop and
            // if the slider isn't moving right now:
            //   Go to prev slide and
            //   emit a scroll event.
            if (newEvent.direction < 0) {
                if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
                    swiper.slideNext();
                    emit('scroll', newEvent.raw);
                }
            } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
                swiper.slidePrev();
                emit('scroll', newEvent.raw);
            }
            // If you got here is because an animation has been triggered so store the current time
            lastScrollTime = new window.Date().getTime();
            // Return false as a default
            return false;
        }

        function releaseScroll(newEvent) {
            const params = swiper.params.mousewheel;
            if (newEvent.direction < 0) {
                if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
                    // Return true to animate scroll on edges
                    return true;
                }
            } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
                // Return true to animate scroll on edges
                return true;
            }
            return false;
        }

        function handle(event) {
            let e = event;
            let disableParentSwiper = true;
            if (!swiper.enabled) return;
            // Ignore event if the target or its parents have the swiper-no-mousewheel class
            if (event.target.closest(`.${swiper.params.mousewheel.noMousewheelClass}`)) return;
            const params = swiper.params.mousewheel;
            if (swiper.params.cssMode) {
                e.preventDefault();
            }
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            }
            const targetElContainsTarget = targetEl && targetEl.contains(e.target);
            if (!swiper.mouseEntered && !targetElContainsTarget && !params.releaseOnEdges) return true;
            if (e.originalEvent) e = e.originalEvent; // jquery fix
            let delta = 0;
            const rtlFactor = swiper.rtlTranslate ? -1 : 1;
            const data = normalize(e);
            if (params.forceToAxis) {
                if (swiper.isHorizontal()) {
                    if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;
                    else return true;
                } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;
                else return true;
            } else {
                delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
            }
            if (delta === 0) return true;
            if (params.invert) delta = -delta;
            // Get the scroll positions
            let positions = swiper.getTranslate() + delta * params.sensitivity;
            if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
            if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate();
            // When loop is true:
            //     the disableParentSwiper will be true.
            // When loop is false:
            //     if the scroll positions is not on edge,
            //     then the disableParentSwiper will be true.
            //     if the scroll on edge positions,
            //     then the disableParentSwiper will be false.
            disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
            if (disableParentSwiper && swiper.params.nested) e.stopPropagation();
            if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
                // Register the new event in a variable which stores the relevant data
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta),
                    raw: event
                };
                // Keep the most recent events
                if (recentWheelEvents.length >= 2) {
                    recentWheelEvents.shift(); // only store the last N events
                }
                const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                recentWheelEvents.push(newEvent);
                // If there is at least one previous recorded event:
                //   If direction has changed or
                //   if the scroll is quicker than the previous one:
                //     Animate the slider.
                // Else (this is the first time the wheel is moved):
                //     Animate the slider.
                if (prevEvent) {
                    if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
                        animateSlider(newEvent);
                    }
                } else {
                    animateSlider(newEvent);
                }
                // If it's time to release the scroll:
                //   Return now so you don't hit the preventDefault.
                if (releaseScroll(newEvent)) {
                    return true;
                }
            } else {
                // Freemode or scrollContainer:
                // If we recently snapped after a momentum scroll, then ignore wheel events
                // to give time for the deceleration to finish. Stop ignoring after 500 msecs
                // or if it's a new scroll (larger delta or inverse sign as last event before
                // an end-of-momentum snap).
                const newEvent = {
                    time: now(),
                    delta: Math.abs(delta),
                    direction: Math.sign(delta)
                };
                const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;
                if (!ignoreWheelEvents) {
                    lastEventBeforeSnap = undefined;
                    let position = swiper.getTranslate() + delta * params.sensitivity;
                    const wasBeginning = swiper.isBeginning;
                    const wasEnd = swiper.isEnd;
                    if (position >= swiper.minTranslate()) position = swiper.minTranslate();
                    if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
                    swiper.setTransition(0);
                    swiper.setTranslate(position);
                    swiper.updateProgress();
                    swiper.updateActiveIndex();
                    swiper.updateSlidesClasses();
                    if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
                        swiper.updateSlidesClasses();
                    }
                    if (swiper.params.loop) {
                        swiper.loopFix({
                            direction: newEvent.direction < 0 ? 'next' : 'prev',
                            byMousewheel: true
                        });
                    }
                    if (swiper.params.freeMode.sticky) {
                        // When wheel scrolling starts with sticky (aka snap) enabled, then detect
                        // the end of a momentum scroll by storing recent (N=15?) wheel events.
                        // 1. do all N events have decreasing or same (absolute value) delta?
                        // 2. did all N events arrive in the last M (M=500?) msecs?
                        // 3. does the earliest event have an (absolute value) delta that's
                        //    at least P (P=1?) larger than the most recent event's delta?
                        // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
                        // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
                        // Snap immediately and ignore remaining wheel events in this scroll.
                        // See comment above for "remaining wheel events in this scroll" determination.
                        // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
                        clearTimeout(timeout);
                        timeout = undefined;
                        if (recentWheelEvents.length >= 15) {
                            recentWheelEvents.shift(); // only store the last N events
                        }
                        const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
                        const firstEvent = recentWheelEvents[0];
                        recentWheelEvents.push(newEvent);
                        if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                            // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                            recentWheelEvents.splice(0);
                        } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                            // We're at the end of the deceleration of a momentum scroll, so there's no need
                            // to wait for more events. Snap ASAP on the next tick.
                            // Also, because there's some remaining momentum we'll bias the snap in the
                            // direction of the ongoing scroll because it's better UX for the scroll to snap
                            // in the same direction as the scroll instead of reversing to snap.  Therefore,
                            // if it's already scrolled more than 20% in the current direction, keep going.
                            const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                            lastEventBeforeSnap = newEvent;
                            recentWheelEvents.splice(0);
                            timeout = nextTick(() => {
                                if (swiper.destroyed || !swiper.params) return;
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 0); // no delay; move on next tick
                        }
                        if (!timeout) {
                            // if we get here, then we haven't detected the end of a momentum scroll, so
                            // we'll consider a scroll "complete" when there haven't been any wheel events
                            // for 500ms.
                            timeout = nextTick(() => {
                                if (swiper.destroyed || !swiper.params) return;
                                const snapToThreshold = 0.5;
                                lastEventBeforeSnap = newEvent;
                                recentWheelEvents.splice(0);
                                swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                            }, 500);
                        }
                    }
                    // Emit event
                    if (!ignoreWheelEvents) emit('scroll', e);
                    // Stop autoplay
                    if (swiper.params.autoplay && swiper.params.autoplay.disableOnInteraction) swiper.autoplay.stop();
                    // Return page scroll on edge positions
                    if (params.releaseOnEdges && (position === swiper.minTranslate() || position === swiper.maxTranslate())) {
                        return true;
                    }
                }
            }
            if (e.preventDefault) e.preventDefault();
            else e.returnValue = false;
            return false;
        }

        function events(method) {
            let targetEl = swiper.el;
            if (swiper.params.mousewheel.eventsTarget !== 'container') {
                targetEl = document.querySelector(swiper.params.mousewheel.eventsTarget);
            }
            targetEl[method]('mouseenter', handleMouseEnter);
            targetEl[method]('mouseleave', handleMouseLeave);
            targetEl[method]('wheel', handle);
        }

        function enable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.removeEventListener('wheel', handle);
                return true;
            }
            if (swiper.mousewheel.enabled) return false;
            events('addEventListener');
            swiper.mousewheel.enabled = true;
            return true;
        }

        function disable() {
            if (swiper.params.cssMode) {
                swiper.wrapperEl.addEventListener(event, handle);
                return true;
            }
            if (!swiper.mousewheel.enabled) return false;
            events('removeEventListener');
            swiper.mousewheel.enabled = false;
            return true;
        }
        on('init', () => {
            if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
                disable();
            }
            if (swiper.params.mousewheel.enabled) enable();
        });
        on('destroy', () => {
            if (swiper.params.cssMode) {
                enable();
            }
            if (swiper.mousewheel.enabled) disable();
        });
        Object.assign(swiper.mousewheel, {
            enable,
            disable
        });
    }

    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
        if (swiper.params.createElements) {
            Object.keys(checkProps).forEach(key => {
                if (!params[key] && params.auto === true) {
                    let element = elementChildren(swiper.el, `.${checkProps[key]}`)[0];
                    if (!element) {
                        element = createElement('div', checkProps[key]);
                        element.className = checkProps[key];
                        swiper.el.append(element);
                    }
                    params[key] = element;
                    originalParams[key] = element;
                }
            });
        }
        return params;
    }

    function Navigation(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        extendParams({
            navigation: {
                nextEl: null,
                prevEl: null,
                hideOnClick: false,
                disabledClass: 'swiper-button-disabled',
                hiddenClass: 'swiper-button-hidden',
                lockClass: 'swiper-button-lock',
                navigationDisabledClass: 'swiper-navigation-disabled'
            }
        });
        swiper.navigation = {
            nextEl: null,
            prevEl: null
        };

        function getEl(el) {
            let res;
            if (el && typeof el === 'string' && swiper.isElement) {
                res = swiper.el.querySelector(el) || swiper.hostEl.querySelector(el);
                if (res) return res;
            }
            if (el) {
                if (typeof el === 'string') res = [...document.querySelectorAll(el)];
                if (swiper.params.uniqueNavElements && typeof el === 'string' && res && res.length > 1 && swiper.el.querySelectorAll(el).length === 1) {
                    res = swiper.el.querySelector(el);
                } else if (res && res.length === 1) {
                    res = res[0];
                }
            }
            if (el && !res) return el;
            // if (Array.isArray(res) && res.length === 1) res = res[0];
            return res;
        }

        function toggleEl(el, disabled) {
            const params = swiper.params.navigation;
            el = makeElementsArray(el);
            el.forEach(subEl => {
                if (subEl) {
                    subEl.classList[disabled ? 'add' : 'remove'](...params.disabledClass.split(' '));
                    if (subEl.tagName === 'BUTTON') subEl.disabled = disabled;
                    if (swiper.params.watchOverflow && swiper.enabled) {
                        subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                    }
                }
            });
        }

        function update() {
            // Update Navigation Buttons
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (swiper.params.loop) {
                toggleEl(prevEl, false);
                toggleEl(nextEl, false);
                return;
            }
            toggleEl(prevEl, swiper.isBeginning && !swiper.params.rewind);
            toggleEl(nextEl, swiper.isEnd && !swiper.params.rewind);
        }

        function onPrevClick(e) {
            e.preventDefault();
            if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slidePrev();
            emit('navigationPrev');
        }

        function onNextClick(e) {
            e.preventDefault();
            if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
            swiper.slideNext();
            emit('navigationNext');
        }

        function init() {
            const params = swiper.params.navigation;
            swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
                nextEl: 'swiper-button-next',
                prevEl: 'swiper-button-prev'
            });
            if (!(params.nextEl || params.prevEl)) return;
            let nextEl = getEl(params.nextEl);
            let prevEl = getEl(params.prevEl);
            Object.assign(swiper.navigation, {
                nextEl,
                prevEl
            });
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const initButton = (el, dir) => {
                if (el) {
                    el.addEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
                }
                if (!swiper.enabled && el) {
                    el.classList.add(...params.lockClass.split(' '));
                }
            };
            nextEl.forEach(el => initButton(el, 'next'));
            prevEl.forEach(el => initButton(el, 'prev'));
        }

        function destroy() {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const destroyButton = (el, dir) => {
                el.removeEventListener('click', dir === 'next' ? onNextClick : onPrevClick);
                el.classList.remove(...swiper.params.navigation.disabledClass.split(' '));
            };
            nextEl.forEach(el => destroyButton(el, 'next'));
            prevEl.forEach(el => destroyButton(el, 'prev'));
        }
        on('init', () => {
            if (swiper.params.navigation.enabled === false) {
                // eslint-disable-next-line
                disable();
            } else {
                init();
                update();
            }
        });
        on('toEdge fromEdge lock unlock', () => {
            update();
        });
        on('destroy', () => {
            destroy();
        });
        on('enable disable', () => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (swiper.enabled) {
                update();
                return;
            }
            [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.add(swiper.params.navigation.lockClass));
        });
        on('click', (_s, e) => {
            let {
                nextEl,
                prevEl
            } = swiper.navigation;
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            const targetEl = e.target;
            let targetIsButton = prevEl.includes(targetEl) || nextEl.includes(targetEl);
            if (swiper.isElement && !targetIsButton) {
                const path = e.path || e.composedPath && e.composedPath();
                if (path) {
                    targetIsButton = path.find(pathEl => nextEl.includes(pathEl) || prevEl.includes(pathEl));
                }
            }
            if (swiper.params.navigation.hideOnClick && !targetIsButton) {
                if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
                let isHidden;
                if (nextEl.length) {
                    isHidden = nextEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                } else if (prevEl.length) {
                    isHidden = prevEl[0].classList.contains(swiper.params.navigation.hiddenClass);
                }
                if (isHidden === true) {
                    emit('navigationShow');
                } else {
                    emit('navigationHide');
                }
                [...nextEl, ...prevEl].filter(el => !!el).forEach(el => el.classList.toggle(swiper.params.navigation.hiddenClass));
            }
        });
        const enable = () => {
            swiper.el.classList.remove(...swiper.params.navigation.navigationDisabledClass.split(' '));
            init();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(...swiper.params.navigation.navigationDisabledClass.split(' '));
            destroy();
        };
        Object.assign(swiper.navigation, {
            enable,
            disable,
            update,
            init,
            destroy
        });
    }

    function classesToSelector(classes) {
        if (classes === void 0) {
            classes = '';
        }
        return `.${classes.trim().replace(/([\.:!+\/()[\]])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const pfx = 'swiper-pagination';
        extendParams({
            pagination: {
                el: null,
                bulletElement: 'span',
                clickable: false,
                hideOnClick: false,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: false,
                type: 'bullets',
                // 'bullets' or 'progressbar' or 'fraction' or 'custom'
                dynamicBullets: false,
                dynamicMainBullets: 1,
                formatFractionCurrent: number => number,
                formatFractionTotal: number => number,
                bulletClass: `${pfx}-bullet`,
                bulletActiveClass: `${pfx}-bullet-active`,
                modifierClass: `${pfx}-`,
                currentClass: `${pfx}-current`,
                totalClass: `${pfx}-total`,
                hiddenClass: `${pfx}-hidden`,
                progressbarFillClass: `${pfx}-progressbar-fill`,
                progressbarOppositeClass: `${pfx}-progressbar-opposite`,
                clickableClass: `${pfx}-clickable`,
                lockClass: `${pfx}-lock`,
                horizontalClass: `${pfx}-horizontal`,
                verticalClass: `${pfx}-vertical`,
                paginationDisabledClass: `${pfx}-disabled`
            }
        });
        swiper.pagination = {
            el: null,
            bullets: []
        };
        let bulletSize;
        let dynamicBulletIndex = 0;

        function isPaginationDisabled() {
            return !swiper.params.pagination.el || !swiper.pagination.el || Array.isArray(swiper.pagination.el) && swiper.pagination.el.length === 0;
        }

        function setSideBullets(bulletEl, position) {
            const {
                bulletActiveClass
            } = swiper.params.pagination;
            if (!bulletEl) return;
            bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
            if (bulletEl) {
                bulletEl.classList.add(`${bulletActiveClass}-${position}`);
                bulletEl = bulletEl[`${position === 'prev' ? 'previous' : 'next'}ElementSibling`];
                if (bulletEl) {
                    bulletEl.classList.add(`${bulletActiveClass}-${position}-${position}`);
                }
            }
        }

        function getMoveDirection(prevIndex, nextIndex, length) {
            prevIndex = prevIndex % length;
            nextIndex = nextIndex % length;
            if (nextIndex === prevIndex + 1) {
                return 'next';
            } else if (nextIndex === prevIndex - 1) {
                return 'previous';
            }
            return;
        }

        function onBulletClick(e) {
            const bulletEl = e.target.closest(classesToSelector(swiper.params.pagination.bulletClass));
            if (!bulletEl) {
                return;
            }
            e.preventDefault();
            const index = elementIndex(bulletEl) * swiper.params.slidesPerGroup;
            if (swiper.params.loop) {
                if (swiper.realIndex === index) return;
                const moveDirection = getMoveDirection(swiper.realIndex, index, swiper.slides.length);
                if (moveDirection === 'next') {
                    swiper.slideNext();
                } else if (moveDirection === 'previous') {
                    swiper.slidePrev();
                } else {
                    swiper.slideToLoop(index);
                }
            } else {
                swiper.slideTo(index);
            }
        }

        function update() {
            // Render || Update Pagination bullets/items
            const rtl = swiper.rtl;
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            // Current/Total
            let current;
            let previousIndex;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
            const total = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
            if (swiper.params.loop) {
                previousIndex = swiper.previousRealIndex || 0;
                current = swiper.params.slidesPerGroup > 1 ? Math.floor(swiper.realIndex / swiper.params.slidesPerGroup) : swiper.realIndex;
            } else if (typeof swiper.snapIndex !== 'undefined') {
                current = swiper.snapIndex;
                previousIndex = swiper.previousSnapIndex;
            } else {
                previousIndex = swiper.previousIndex || 0;
                current = swiper.activeIndex || 0;
            }
            // Types
            if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
                const bullets = swiper.pagination.bullets;
                let firstIndex;
                let lastIndex;
                let midIndex;
                if (params.dynamicBullets) {
                    bulletSize = elementOuterSize(bullets[0], swiper.isHorizontal() ? 'width' : 'height', true);
                    el.forEach(subEl => {
                        subEl.style[swiper.isHorizontal() ? 'width' : 'height'] = `${bulletSize * (params.dynamicMainBullets + 4)}px`;
                    });
                    if (params.dynamicMainBullets > 1 && previousIndex !== undefined) {
                        dynamicBulletIndex += current - (previousIndex || 0);
                        if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                            dynamicBulletIndex = params.dynamicMainBullets - 1;
                        } else if (dynamicBulletIndex < 0) {
                            dynamicBulletIndex = 0;
                        }
                    }
                    firstIndex = Math.max(current - dynamicBulletIndex, 0);
                    lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
                    midIndex = (lastIndex + firstIndex) / 2;
                }
                bullets.forEach(bulletEl => {
                    const classesToRemove = [...['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`)].map(s => typeof s === 'string' && s.includes(' ') ? s.split(' ') : s).flat();
                    bulletEl.classList.remove(...classesToRemove);
                });
                if (el.length > 1) {
                    bullets.forEach(bullet => {
                        const bulletIndex = elementIndex(bullet);
                        if (bulletIndex === current) {
                            bullet.classList.add(...params.bulletActiveClass.split(' '));
                        } else if (swiper.isElement) {
                            bullet.setAttribute('part', 'bullet');
                        }
                        if (params.dynamicBullets) {
                            if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                                bullet.classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                            }
                            if (bulletIndex === firstIndex) {
                                setSideBullets(bullet, 'prev');
                            }
                            if (bulletIndex === lastIndex) {
                                setSideBullets(bullet, 'next');
                            }
                        }
                    });
                } else {
                    const bullet = bullets[current];
                    if (bullet) {
                        bullet.classList.add(...params.bulletActiveClass.split(' '));
                    }
                    if (swiper.isElement) {
                        bullets.forEach((bulletEl, bulletIndex) => {
                            bulletEl.setAttribute('part', bulletIndex === current ? 'bullet-active' : 'bullet');
                        });
                    }
                    if (params.dynamicBullets) {
                        const firstDisplayedBullet = bullets[firstIndex];
                        const lastDisplayedBullet = bullets[lastIndex];
                        for (let i = firstIndex; i <= lastIndex; i += 1) {
                            if (bullets[i]) {
                                bullets[i].classList.add(...`${params.bulletActiveClass}-main`.split(' '));
                            }
                        }
                        setSideBullets(firstDisplayedBullet, 'prev');
                        setSideBullets(lastDisplayedBullet, 'next');
                    }
                }
                if (params.dynamicBullets) {
                    const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
                    const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
                    const offsetProp = rtl ? 'right' : 'left';
                    bullets.forEach(bullet => {
                        bullet.style[swiper.isHorizontal() ? offsetProp : 'top'] = `${bulletsOffset}px`;
                    });
                }
            }
            el.forEach((subEl, subElIndex) => {
                if (params.type === 'fraction') {
                    subEl.querySelectorAll(classesToSelector(params.currentClass)).forEach(fractionEl => {
                        fractionEl.textContent = params.formatFractionCurrent(current + 1);
                    });
                    subEl.querySelectorAll(classesToSelector(params.totalClass)).forEach(totalEl => {
                        totalEl.textContent = params.formatFractionTotal(total);
                    });
                }
                if (params.type === 'progressbar') {
                    let progressbarDirection;
                    if (params.progressbarOpposite) {
                        progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
                    } else {
                        progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
                    }
                    const scale = (current + 1) / total;
                    let scaleX = 1;
                    let scaleY = 1;
                    if (progressbarDirection === 'horizontal') {
                        scaleX = scale;
                    } else {
                        scaleY = scale;
                    }
                    subEl.querySelectorAll(classesToSelector(params.progressbarFillClass)).forEach(progressEl => {
                        progressEl.style.transform = `translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`;
                        progressEl.style.transitionDuration = `${swiper.params.speed}ms`;
                    });
                }
                if (params.type === 'custom' && params.renderCustom) {
                    setInnerHTML(subEl, params.renderCustom(swiper, current + 1, total));
                    if (subElIndex === 0) emit('paginationRender', subEl);
                } else {
                    if (subElIndex === 0) emit('paginationRender', subEl);
                    emit('paginationUpdate', subEl);
                }
                if (swiper.params.watchOverflow && swiper.enabled) {
                    subEl.classList[swiper.isLocked ? 'add' : 'remove'](params.lockClass);
                }
            });
        }

        function render() {
            // Render Container
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.grid && swiper.params.grid.rows > 1 ? swiper.slides.length / Math.ceil(swiper.params.grid.rows) : swiper.slides.length;
            let el = swiper.pagination.el;
            el = makeElementsArray(el);
            let paginationHTML = '';
            if (params.type === 'bullets') {
                let numberOfBullets = swiper.params.loop ? Math.ceil(slidesLength / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
                if (swiper.params.freeMode && swiper.params.freeMode.enabled && numberOfBullets > slidesLength) {
                    numberOfBullets = slidesLength;
                }
                for (let i = 0; i < numberOfBullets; i += 1) {
                    if (params.renderBullet) {
                        paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
                    } else {
                        // prettier-ignore
                        paginationHTML += `<${params.bulletElement} ${swiper.isElement ? 'part="bullet"' : ''} class="${params.bulletClass}"></${params.bulletElement}>`;
                    }
                }
            }
            if (params.type === 'fraction') {
                if (params.renderFraction) {
                    paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
                } else {
                    paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
                }
            }
            if (params.type === 'progressbar') {
                if (params.renderProgressbar) {
                    paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
                } else {
                    paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
                }
            }
            swiper.pagination.bullets = [];
            el.forEach(subEl => {
                if (params.type !== 'custom') {
                    setInnerHTML(subEl, paginationHTML || '');
                }
                if (params.type === 'bullets') {
                    swiper.pagination.bullets.push(...subEl.querySelectorAll(classesToSelector(params.bulletClass)));
                }
            });
            if (params.type !== 'custom') {
                emit('paginationRender', el[0]);
            }
        }

        function init() {
            swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
                el: 'swiper-pagination'
            });
            const params = swiper.params.pagination;
            if (!params.el) return;
            let el;
            if (typeof params.el === 'string' && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === 'string') {
                el = [...document.querySelectorAll(params.el)];
            }
            if (!el) {
                el = params.el;
            }
            if (!el || el.length === 0) return;
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && Array.isArray(el) && el.length > 1) {
                el = [...swiper.el.querySelectorAll(params.el)];
                // check if it belongs to another nested Swiper
                if (el.length > 1) {
                    el = el.find(subEl => {
                        if (elementParents(subEl, '.swiper')[0] !== swiper.el) return false;
                        return true;
                    });
                }
            }
            if (Array.isArray(el) && el.length === 1) el = el[0];
            Object.assign(swiper.pagination, {
                el
            });
            el = makeElementsArray(el);
            el.forEach(subEl => {
                if (params.type === 'bullets' && params.clickable) {
                    subEl.classList.add(...(params.clickableClass || '').split(' '));
                }
                subEl.classList.add(params.modifierClass + params.type);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                if (params.type === 'bullets' && params.dynamicBullets) {
                    subEl.classList.add(`${params.modifierClass}${params.type}-dynamic`);
                    dynamicBulletIndex = 0;
                    if (params.dynamicMainBullets < 1) {
                        params.dynamicMainBullets = 1;
                    }
                }
                if (params.type === 'progressbar' && params.progressbarOpposite) {
                    subEl.classList.add(params.progressbarOppositeClass);
                }
                if (params.clickable) {
                    subEl.addEventListener('click', onBulletClick);
                }
                if (!swiper.enabled) {
                    subEl.classList.add(params.lockClass);
                }
            });
        }

        function destroy() {
            const params = swiper.params.pagination;
            if (isPaginationDisabled()) return;
            let el = swiper.pagination.el;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => {
                    subEl.classList.remove(params.hiddenClass);
                    subEl.classList.remove(params.modifierClass + params.type);
                    subEl.classList.remove(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
                    if (params.clickable) {
                        subEl.classList.remove(...(params.clickableClass || '').split(' '));
                        subEl.removeEventListener('click', onBulletClick);
                    }
                });
            }
            if (swiper.pagination.bullets) swiper.pagination.bullets.forEach(subEl => subEl.classList.remove(...params.bulletActiveClass.split(' ')));
        }
        on('changeDirection', () => {
            if (!swiper.pagination || !swiper.pagination.el) return;
            const params = swiper.params.pagination;
            let {
                el
            } = swiper.pagination;
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            });
        });
        on('init', () => {
            if (swiper.params.pagination.enabled === false) {
                // eslint-disable-next-line
                disable();
            } else {
                init();
                render();
                update();
            }
        });
        on('activeIndexChange', () => {
            if (typeof swiper.snapIndex === 'undefined') {
                update();
            }
        });
        on('snapIndexChange', () => {
            update();
        });
        on('snapGridLengthChange', () => {
            render();
            update();
        });
        on('destroy', () => {
            destroy();
        });
        on('enable disable', () => {
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList[swiper.enabled ? 'remove' : 'add'](swiper.params.pagination.lockClass));
            }
        });
        on('lock unlock', () => {
            update();
        });
        on('click', (_s, e) => {
            const targetEl = e.target;
            const el = makeElementsArray(swiper.pagination.el);
            if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && el && el.length > 0 && !targetEl.classList.contains(swiper.params.pagination.bulletClass)) {
                if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
                const isHidden = el[0].classList.contains(swiper.params.pagination.hiddenClass);
                if (isHidden === true) {
                    emit('paginationShow');
                } else {
                    emit('paginationHide');
                }
                el.forEach(subEl => subEl.classList.toggle(swiper.params.pagination.hiddenClass));
            }
        });
        const enable = () => {
            swiper.el.classList.remove(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList.remove(swiper.params.pagination.paginationDisabledClass));
            }
            init();
            render();
            update();
        };
        const disable = () => {
            swiper.el.classList.add(swiper.params.pagination.paginationDisabledClass);
            let {
                el
            } = swiper.pagination;
            if (el) {
                el = makeElementsArray(el);
                el.forEach(subEl => subEl.classList.add(swiper.params.pagination.paginationDisabledClass));
            }
            destroy();
        };
        Object.assign(swiper.pagination, {
            enable,
            disable,
            render,
            update,
            init,
            destroy
        });
    }

    function Scrollbar(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const document = getDocument();
        let isTouched = false;
        let timeout = null;
        let dragTimeout = null;
        let dragStartPos;
        let dragSize;
        let trackSize;
        let divider;
        extendParams({
            scrollbar: {
                el: null,
                dragSize: 'auto',
                hide: false,
                draggable: false,
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
                scrollbarDisabledClass: 'swiper-scrollbar-disabled',
                horizontalClass: `swiper-scrollbar-horizontal`,
                verticalClass: `swiper-scrollbar-vertical`
            }
        });
        swiper.scrollbar = {
            el: null,
            dragEl: null
        };

        function setTranslate() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
                scrollbar,
                rtlTranslate: rtl
            } = swiper;
            const {
                dragEl,
                el
            } = scrollbar;
            const params = swiper.params.scrollbar;
            const progress = swiper.params.loop ? swiper.progressLoop : swiper.progress;
            let newSize = dragSize;
            let newPos = (trackSize - dragSize) * progress;
            if (rtl) {
                newPos = -newPos;
                if (newPos > 0) {
                    newSize = dragSize - newPos;
                    newPos = 0;
                } else if (-newPos + dragSize > trackSize) {
                    newSize = trackSize + newPos;
                }
            } else if (newPos < 0) {
                newSize = dragSize + newPos;
                newPos = 0;
            } else if (newPos + dragSize > trackSize) {
                newSize = trackSize - newPos;
            }
            if (swiper.isHorizontal()) {
                dragEl.style.transform = `translate3d(${newPos}px, 0, 0)`;
                dragEl.style.width = `${newSize}px`;
            } else {
                dragEl.style.transform = `translate3d(0px, ${newPos}px, 0)`;
                dragEl.style.height = `${newSize}px`;
            }
            if (params.hide) {
                clearTimeout(timeout);
                el.style.opacity = 1;
                timeout = setTimeout(() => {
                    el.style.opacity = 0;
                    el.style.transitionDuration = '400ms';
                }, 1000);
            }
        }

        function setTransition(duration) {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            swiper.scrollbar.dragEl.style.transitionDuration = `${duration}ms`;
        }

        function updateSize() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            const {
                scrollbar
            } = swiper;
            const {
                dragEl,
                el
            } = scrollbar;
            dragEl.style.width = '';
            dragEl.style.height = '';
            trackSize = swiper.isHorizontal() ? el.offsetWidth : el.offsetHeight;
            divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));
            if (swiper.params.scrollbar.dragSize === 'auto') {
                dragSize = trackSize * divider;
            } else {
                dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
            }
            if (swiper.isHorizontal()) {
                dragEl.style.width = `${dragSize}px`;
            } else {
                dragEl.style.height = `${dragSize}px`;
            }
            if (divider >= 1) {
                el.style.display = 'none';
            } else {
                el.style.display = '';
            }
            if (swiper.params.scrollbar.hide) {
                el.style.opacity = 0;
            }
            if (swiper.params.watchOverflow && swiper.enabled) {
                scrollbar.el.classList[swiper.isLocked ? 'add' : 'remove'](swiper.params.scrollbar.lockClass);
            }
        }

        function getPointerPosition(e) {
            return swiper.isHorizontal() ? e.clientX : e.clientY;
        }

        function setDragPosition(e) {
            const {
                scrollbar,
                rtlTranslate: rtl
            } = swiper;
            const {
                el
            } = scrollbar;
            let positionRatio;
            positionRatio = (getPointerPosition(e) - elementOffset(el)[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
            positionRatio = Math.max(Math.min(positionRatio, 1), 0);
            if (rtl) {
                positionRatio = 1 - positionRatio;
            }
            const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
            swiper.updateProgress(position);
            swiper.setTranslate(position);
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
        }

        function onDragStart(e) {
            const params = swiper.params.scrollbar;
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el,
                dragEl
            } = scrollbar;
            isTouched = true;
            dragStartPos = e.target === dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
            e.preventDefault();
            e.stopPropagation();
            wrapperEl.style.transitionDuration = '100ms';
            dragEl.style.transitionDuration = '100ms';
            setDragPosition(e);
            clearTimeout(dragTimeout);
            el.style.transitionDuration = '0ms';
            if (params.hide) {
                el.style.opacity = 1;
            }
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style['scroll-snap-type'] = 'none';
            }
            emit('scrollbarDragStart', e);
        }

        function onDragMove(e) {
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el,
                dragEl
            } = scrollbar;
            if (!isTouched) return;
            if (e.preventDefault && e.cancelable) e.preventDefault();
            else e.returnValue = false;
            setDragPosition(e);
            wrapperEl.style.transitionDuration = '0ms';
            el.style.transitionDuration = '0ms';
            dragEl.style.transitionDuration = '0ms';
            emit('scrollbarDragMove', e);
        }

        function onDragEnd(e) {
            const params = swiper.params.scrollbar;
            const {
                scrollbar,
                wrapperEl
            } = swiper;
            const {
                el
            } = scrollbar;
            if (!isTouched) return;
            isTouched = false;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style['scroll-snap-type'] = '';
                wrapperEl.style.transitionDuration = '';
            }
            if (params.hide) {
                clearTimeout(dragTimeout);
                dragTimeout = nextTick(() => {
                    el.style.opacity = 0;
                    el.style.transitionDuration = '400ms';
                }, 1000);
            }
            emit('scrollbarDragEnd', e);
            if (params.snapOnRelease) {
                swiper.slideToClosest();
            }
        }

        function events(method) {
            const {
                scrollbar,
                params
            } = swiper;
            const el = scrollbar.el;
            if (!el) return;
            const target = el;
            const activeListener = params.passiveListeners ? {
                passive: false,
                capture: false
            } : false;
            const passiveListener = params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            if (!target) return;
            const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
            target[eventMethod]('pointerdown', onDragStart, activeListener);
            document[eventMethod]('pointermove', onDragMove, activeListener);
            document[eventMethod]('pointerup', onDragEnd, passiveListener);
        }

        function enableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events('on');
        }

        function disableDraggable() {
            if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
            events('off');
        }

        function init() {
            const {
                scrollbar,
                el: swiperEl
            } = swiper;
            swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
                el: 'swiper-scrollbar'
            });
            const params = swiper.params.scrollbar;
            if (!params.el) return;
            let el;
            if (typeof params.el === 'string' && swiper.isElement) {
                el = swiper.el.querySelector(params.el);
            }
            if (!el && typeof params.el === 'string') {
                el = document.querySelectorAll(params.el);
                if (!el.length) return;
            } else if (!el) {
                el = params.el;
            }
            if (swiper.params.uniqueNavElements && typeof params.el === 'string' && el.length > 1 && swiperEl.querySelectorAll(params.el).length === 1) {
                el = swiperEl.querySelector(params.el);
            }
            if (el.length > 0) el = el[0];
            el.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            let dragEl;
            if (el) {
                dragEl = el.querySelector(classesToSelector(swiper.params.scrollbar.dragClass));
                if (!dragEl) {
                    dragEl = createElement('div', swiper.params.scrollbar.dragClass);
                    el.append(dragEl);
                }
            }
            Object.assign(scrollbar, {
                el,
                dragEl
            });
            if (params.draggable) {
                enableDraggable();
            }
            if (el) {
                el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
            }
        }

        function destroy() {
            const params = swiper.params.scrollbar;
            const el = swiper.scrollbar.el;
            if (el) {
                el.classList.remove(...classesToTokens(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass));
            }
            disableDraggable();
        }
        on('changeDirection', () => {
            if (!swiper.scrollbar || !swiper.scrollbar.el) return;
            const params = swiper.params.scrollbar;
            let {
                el
            } = swiper.scrollbar;
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.classList.remove(params.horizontalClass, params.verticalClass);
                subEl.classList.add(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
            });
        });
        on('init', () => {
            if (swiper.params.scrollbar.enabled === false) {
                // eslint-disable-next-line
                disable();
            } else {
                init();
                updateSize();
                setTranslate();
            }
        });
        on('update resize observerUpdate lock unlock changeDirection', () => {
            updateSize();
        });
        on('setTranslate', () => {
            setTranslate();
        });
        on('setTransition', (_s, duration) => {
            setTransition(duration);
        });
        on('enable disable', () => {
            const {
                el
            } = swiper.scrollbar;
            if (el) {
                el.classList[swiper.enabled ? 'remove' : 'add'](...classesToTokens(swiper.params.scrollbar.lockClass));
            }
        });
        on('destroy', () => {
            destroy();
        });
        const enable = () => {
            swiper.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            if (swiper.scrollbar.el) {
                swiper.scrollbar.el.classList.remove(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            }
            init();
            updateSize();
            setTranslate();
        };
        const disable = () => {
            swiper.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            if (swiper.scrollbar.el) {
                swiper.scrollbar.el.classList.add(...classesToTokens(swiper.params.scrollbar.scrollbarDisabledClass));
            }
            destroy();
        };
        Object.assign(swiper.scrollbar, {
            enable,
            disable,
            updateSize,
            setTranslate,
            init,
            destroy
        });
    }

    function Parallax(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            parallax: {
                enabled: false
            }
        });
        const elementsSelector = '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]';
        const setTransform = (el, progress) => {
            const {
                rtl
            } = swiper;
            const rtlFactor = rtl ? -1 : 1;
            const p = el.getAttribute('data-swiper-parallax') || '0';
            let x = el.getAttribute('data-swiper-parallax-x');
            let y = el.getAttribute('data-swiper-parallax-y');
            const scale = el.getAttribute('data-swiper-parallax-scale');
            const opacity = el.getAttribute('data-swiper-parallax-opacity');
            const rotate = el.getAttribute('data-swiper-parallax-rotate');
            if (x || y) {
                x = x || '0';
                y = y || '0';
            } else if (swiper.isHorizontal()) {
                x = p;
                y = '0';
            } else {
                y = p;
                x = '0';
            }
            if (x.indexOf('%') >= 0) {
                x = `${parseInt(x, 10) * progress * rtlFactor}%`;
            } else {
                x = `${x * progress * rtlFactor}px`;
            }
            if (y.indexOf('%') >= 0) {
                y = `${parseInt(y, 10) * progress}%`;
            } else {
                y = `${y * progress}px`;
            }
            if (typeof opacity !== 'undefined' && opacity !== null) {
                const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
                el.style.opacity = currentOpacity;
            }
            let transform = `translate3d(${x}, ${y}, 0px)`;
            if (typeof scale !== 'undefined' && scale !== null) {
                const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
                transform += ` scale(${currentScale})`;
            }
            if (rotate && typeof rotate !== 'undefined' && rotate !== null) {
                const currentRotate = rotate * progress * -1;
                transform += ` rotate(${currentRotate}deg)`;
            }
            el.style.transform = transform;
        };
        const setTranslate = () => {
            const {
                el,
                slides,
                progress,
                snapGrid,
                isElement
            } = swiper;
            const elements = elementChildren(el, elementsSelector);
            if (swiper.isElement) {
                elements.push(...elementChildren(swiper.hostEl, elementsSelector));
            }
            elements.forEach(subEl => {
                setTransform(subEl, progress);
            });
            slides.forEach((slideEl, slideIndex) => {
                let slideProgress = slideEl.progress;
                if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
                    slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
                }
                slideProgress = Math.min(Math.max(slideProgress, -1), 1);
                slideEl.querySelectorAll(`${elementsSelector}, [data-swiper-parallax-rotate]`).forEach(subEl => {
                    setTransform(subEl, slideProgress);
                });
            });
        };
        const setTransition = function(duration) {
            if (duration === void 0) {
                duration = swiper.params.speed;
            }
            const {
                el,
                hostEl
            } = swiper;
            const elements = [...el.querySelectorAll(elementsSelector)];
            if (swiper.isElement) {
                elements.push(...hostEl.querySelectorAll(elementsSelector));
            }
            elements.forEach(parallaxEl => {
                let parallaxDuration = parseInt(parallaxEl.getAttribute('data-swiper-parallax-duration'), 10) || duration;
                if (duration === 0) parallaxDuration = 0;
                parallaxEl.style.transitionDuration = `${parallaxDuration}ms`;
            });
        };
        on('beforeInit', () => {
            if (!swiper.params.parallax.enabled) return;
            swiper.params.watchSlidesProgress = true;
            swiper.originalParams.watchSlidesProgress = true;
        });
        on('init', () => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        });
        on('setTranslate', () => {
            if (!swiper.params.parallax.enabled) return;
            setTranslate();
        });
        on('setTransition', (_swiper, duration) => {
            if (!swiper.params.parallax.enabled) return;
            setTransition(duration);
        });
    }

    function Zoom(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit
        } = _ref;
        const window = getWindow();
        extendParams({
            zoom: {
                enabled: false,
                limitToOriginalSize: false,
                maxRatio: 3,
                minRatio: 1,
                panOnMouseMove: false,
                toggle: true,
                containerClass: 'swiper-zoom-container',
                zoomedSlideClass: 'swiper-slide-zoomed'
            }
        });
        swiper.zoom = {
            enabled: false
        };
        let currentScale = 1;
        let isScaling = false;
        let isPanningWithMouse = false;
        let mousePanStart = {
            x: 0,
            y: 0
        };
        const mousePanSensitivity = -3; // Negative to invert pan direction
        let fakeGestureTouched;
        let fakeGestureMoved;
        const evCache = [];
        const gesture = {
            originX: 0,
            originY: 0,
            slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            imageEl: undefined,
            imageWrapEl: undefined,
            maxRatio: 3
        };
        const image = {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
        };
        const velocity = {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
        };
        let scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
            get() {
                return scale;
            },
            set(value) {
                if (scale !== value) {
                    const imageEl = gesture.imageEl;
                    const slideEl = gesture.slideEl;
                    emit('zoomChange', value, imageEl, slideEl);
                }
                scale = value;
            }
        });

        function getDistanceBetweenTouches() {
            if (evCache.length < 2) return 1;
            const x1 = evCache[0].pageX;
            const y1 = evCache[0].pageY;
            const x2 = evCache[1].pageX;
            const y2 = evCache[1].pageY;
            const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
            return distance;
        }

        function getMaxRatio() {
            const params = swiper.params.zoom;
            const maxRatio = gesture.imageWrapEl.getAttribute('data-swiper-zoom') || params.maxRatio;
            if (params.limitToOriginalSize && gesture.imageEl && gesture.imageEl.naturalWidth) {
                const imageMaxRatio = gesture.imageEl.naturalWidth / gesture.imageEl.offsetWidth;
                return Math.min(imageMaxRatio, maxRatio);
            }
            return maxRatio;
        }

        function getScaleOrigin() {
            if (evCache.length < 2) return {
                x: null,
                y: null
            };
            const box = gesture.imageEl.getBoundingClientRect();
            return [(evCache[0].pageX + (evCache[1].pageX - evCache[0].pageX) / 2 - box.x - window.scrollX) / currentScale, (evCache[0].pageY + (evCache[1].pageY - evCache[0].pageY) / 2 - box.y - window.scrollY) / currentScale];
        }

        function getSlideSelector() {
            return swiper.isElement ? `swiper-slide` : `.${swiper.params.slideClass}`;
        }

        function eventWithinSlide(e) {
            const slideSelector = getSlideSelector();
            if (e.target.matches(slideSelector)) return true;
            if (swiper.slides.filter(slideEl => slideEl.contains(e.target)).length > 0) return true;
            return false;
        }

        function eventWithinZoomContainer(e) {
            const selector = `.${swiper.params.zoom.containerClass}`;
            if (e.target.matches(selector)) return true;
            if ([...swiper.hostEl.querySelectorAll(selector)].filter(containerEl => containerEl.contains(e.target)).length > 0) return true;
            return false;
        }
        // Events
        function onGestureStart(e) {
            if (e.pointerType === 'mouse') {
                evCache.splice(0, evCache.length);
            }
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            evCache.push(e);
            if (evCache.length < 2) {
                return;
            }
            fakeGestureTouched = true;
            gesture.scaleStart = getDistanceBetweenTouches();
            if (!gesture.slideEl) {
                gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                if (!gesture.slideEl) gesture.slideEl = swiper.slides[swiper.activeIndex];
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
                if (!gesture.imageWrapEl) {
                    gesture.imageEl = undefined;
                    return;
                }
                gesture.maxRatio = getMaxRatio();
            }
            if (gesture.imageEl) {
                const [originX, originY] = getScaleOrigin();
                gesture.originX = originX;
                gesture.originY = originY;
                gesture.imageEl.style.transitionDuration = '0ms';
            }
            isScaling = true;
        }

        function onGestureChange(e) {
            if (!eventWithinSlide(e)) return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
            if (pointerIndex >= 0) evCache[pointerIndex] = e;
            if (evCache.length < 2) {
                return;
            }
            fakeGestureMoved = true;
            gesture.scaleMove = getDistanceBetweenTouches();
            if (!gesture.imageEl) {
                return;
            }
            zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
            if (zoom.scale > gesture.maxRatio) {
                zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
            }
            if (zoom.scale < params.minRatio) {
                zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
            }
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }

        function onGestureEnd(e) {
            if (!eventWithinSlide(e)) return;
            if (e.pointerType === 'mouse' && e.type === 'pointerout') return;
            const params = swiper.params.zoom;
            const zoom = swiper.zoom;
            const pointerIndex = evCache.findIndex(cachedEv => cachedEv.pointerId === e.pointerId);
            if (pointerIndex >= 0) evCache.splice(pointerIndex, 1);
            if (!fakeGestureTouched || !fakeGestureMoved) {
                return;
            }
            fakeGestureTouched = false;
            fakeGestureMoved = false;
            if (!gesture.imageEl) return;
            zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
            gesture.imageEl.style.transitionDuration = `${swiper.params.speed}ms`;
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
            currentScale = zoom.scale;
            isScaling = false;
            if (zoom.scale > 1 && gesture.slideEl) {
                gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            } else if (zoom.scale <= 1 && gesture.slideEl) {
                gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            }
            if (zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
                gesture.slideEl = undefined;
            }
        }
        let allowTouchMoveTimeout;

        function allowTouchMove() {
            swiper.touchEventsData.preventTouchMoveFromPointerMove = false;
        }

        function preventTouchMove() {
            clearTimeout(allowTouchMoveTimeout);
            swiper.touchEventsData.preventTouchMoveFromPointerMove = true;
            allowTouchMoveTimeout = setTimeout(() => {
                if (swiper.destroyed) return;
                allowTouchMove();
            });
        }

        function onTouchStart(e) {
            const device = swiper.device;
            if (!gesture.imageEl) return;
            if (image.isTouched) return;
            if (device.android && e.cancelable) e.preventDefault();
            image.isTouched = true;
            const event = evCache.length > 0 ? evCache[0] : e;
            image.touchesStart.x = event.pageX;
            image.touchesStart.y = event.pageY;
        }

        function onTouchMove(e) {
            const isMouseEvent = e.pointerType === 'mouse';
            const isMousePan = isMouseEvent && swiper.params.zoom.panOnMouseMove;
            if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) {
                return;
            }
            const zoom = swiper.zoom;
            if (!gesture.imageEl) {
                return;
            }
            if (!image.isTouched || !gesture.slideEl) {
                if (isMousePan) onMouseMove(e);
                return;
            }
            if (isMousePan) {
                onMouseMove(e);
                return;
            }
            if (!image.isMoved) {
                image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
                image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
                image.startX = getTranslate(gesture.imageWrapEl, 'x') || 0;
                image.startY = getTranslate(gesture.imageWrapEl, 'y') || 0;
                gesture.slideWidth = gesture.slideEl.offsetWidth;
                gesture.slideHeight = gesture.slideEl.offsetHeight;
                gesture.imageWrapEl.style.transitionDuration = '0ms';
            }
            // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.touchesCurrent.x = evCache.length > 0 ? evCache[0].pageX : e.pageX;
            image.touchesCurrent.y = evCache.length > 0 ? evCache[0].pageY : e.pageY;
            const touchesDiff = Math.max(Math.abs(image.touchesCurrent.x - image.touchesStart.x), Math.abs(image.touchesCurrent.y - image.touchesStart.y));
            if (touchesDiff > 5) {
                swiper.allowClick = false;
            }
            if (!image.isMoved && !isScaling) {
                if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
                    image.isTouched = false;
                    allowTouchMove();
                    return;
                }
                if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
                    image.isTouched = false;
                    allowTouchMove();
                    return;
                }
            }
            if (e.cancelable) {
                e.preventDefault();
            }
            e.stopPropagation();
            preventTouchMove();
            image.isMoved = true;
            const scaleRatio = (zoom.scale - currentScale) / (gesture.maxRatio - swiper.params.zoom.minRatio);
            const {
                originX,
                originY
            } = gesture;
            image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX + scaleRatio * (image.width - originX * 2);
            image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY + scaleRatio * (image.height - originY * 2);
            if (image.currentX < image.minX) {
                image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
            }
            if (image.currentX > image.maxX) {
                image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
            }
            if (image.currentY < image.minY) {
                image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
            }
            if (image.currentY > image.maxY) {
                image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
            }
            // Velocity
            if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
            if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
            if (!velocity.prevTime) velocity.prevTime = Date.now();
            velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
            velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
            if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
            if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
            velocity.prevPositionX = image.touchesCurrent.x;
            velocity.prevPositionY = image.touchesCurrent.y;
            velocity.prevTime = Date.now();
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }

        function onTouchEnd() {
            const zoom = swiper.zoom;
            evCache.length = 0;
            if (!gesture.imageEl) return;
            if (!image.isTouched || !image.isMoved) {
                image.isTouched = false;
                image.isMoved = false;
                return;
            }
            image.isTouched = false;
            image.isMoved = false;
            let momentumDurationX = 300;
            let momentumDurationY = 300;
            const momentumDistanceX = velocity.x * momentumDurationX;
            const newPositionX = image.currentX + momentumDistanceX;
            const momentumDistanceY = velocity.y * momentumDurationY;
            const newPositionY = image.currentY + momentumDistanceY;
            // Fix duration
            if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
            if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
            const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
            image.currentX = newPositionX;
            image.currentY = newPositionY;
            // Define if we need image drag
            const scaledWidth = image.width * zoom.scale;
            const scaledHeight = image.height * zoom.scale;
            image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
            image.maxX = -image.minX;
            image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
            image.maxY = -image.minY;
            image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
            image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
            gesture.imageWrapEl.style.transitionDuration = `${momentumDuration}ms`;
            gesture.imageWrapEl.style.transform = `translate3d(${image.currentX}px, ${image.currentY}px,0)`;
        }

        function onTransitionEnd() {
            const zoom = swiper.zoom;
            if (gesture.slideEl && swiper.activeIndex !== swiper.slides.indexOf(gesture.slideEl)) {
                if (gesture.imageEl) {
                    gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
                }
                if (gesture.imageWrapEl) {
                    gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
                }
                gesture.slideEl.classList.remove(`${swiper.params.zoom.zoomedSlideClass}`);
                zoom.scale = 1;
                currentScale = 1;
                gesture.slideEl = undefined;
                gesture.imageEl = undefined;
                gesture.imageWrapEl = undefined;
                gesture.originX = 0;
                gesture.originY = 0;
            }
        }

        function onMouseMove(e) {
            // Only pan if zoomed in and mouse panning is enabled
            if (currentScale <= 1 || !gesture.imageWrapEl) return;
            if (!eventWithinSlide(e) || !eventWithinZoomContainer(e)) return;
            const currentTransform = window.getComputedStyle(gesture.imageWrapEl).transform;
            const matrix = new window.DOMMatrix(currentTransform);
            if (!isPanningWithMouse) {
                isPanningWithMouse = true;
                mousePanStart.x = e.clientX;
                mousePanStart.y = e.clientY;
                image.startX = matrix.e;
                image.startY = matrix.f;
                image.width = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
                image.height = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
                gesture.slideWidth = gesture.slideEl.offsetWidth;
                gesture.slideHeight = gesture.slideEl.offsetHeight;
                return;
            }
            const deltaX = (e.clientX - mousePanStart.x) * mousePanSensitivity;
            const deltaY = (e.clientY - mousePanStart.y) * mousePanSensitivity;
            const scaledWidth = image.width * currentScale;
            const scaledHeight = image.height * currentScale;
            const slideWidth = gesture.slideWidth;
            const slideHeight = gesture.slideHeight;
            const minX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
            const maxX = -minX;
            const minY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
            const maxY = -minY;
            const newX = Math.max(Math.min(image.startX + deltaX, maxX), minX);
            const newY = Math.max(Math.min(image.startY + deltaY, maxY), minY);
            gesture.imageWrapEl.style.transitionDuration = '0ms';
            gesture.imageWrapEl.style.transform = `translate3d(${newX}px, ${newY}px, 0)`;
            mousePanStart.x = e.clientX;
            mousePanStart.y = e.clientY;
            image.startX = newX;
            image.startY = newY;
            image.currentX = newX;
            image.currentY = newY;
        }

        function zoomIn(e) {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (e && e.target) {
                    gesture.slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
                }
                if (!gesture.slideEl) {
                    if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                        gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                    } else {
                        gesture.slideEl = swiper.slides[swiper.activeIndex];
                    }
                }
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = 'hidden';
                swiper.wrapperEl.style.touchAction = 'none';
            }
            gesture.slideEl.classList.add(`${params.zoomedSlideClass}`);
            let touchX;
            let touchY;
            let offsetX;
            let offsetY;
            let diffX;
            let diffY;
            let translateX;
            let translateY;
            let imageWidth;
            let imageHeight;
            let scaledWidth;
            let scaledHeight;
            let translateMinX;
            let translateMinY;
            let translateMaxX;
            let translateMaxY;
            let slideWidth;
            let slideHeight;
            if (typeof image.touchesStart.x === 'undefined' && e) {
                touchX = e.pageX;
                touchY = e.pageY;
            } else {
                touchX = image.touchesStart.x;
                touchY = image.touchesStart.y;
            }
            const prevScale = currentScale;
            const forceZoomRatio = typeof e === 'number' ? e : null;
            if (currentScale === 1 && forceZoomRatio) {
                touchX = undefined;
                touchY = undefined;
                image.touchesStart.x = undefined;
                image.touchesStart.y = undefined;
            }
            const maxRatio = getMaxRatio();
            zoom.scale = forceZoomRatio || maxRatio;
            currentScale = forceZoomRatio || maxRatio;
            if (e && !(currentScale === 1 && forceZoomRatio)) {
                slideWidth = gesture.slideEl.offsetWidth;
                slideHeight = gesture.slideEl.offsetHeight;
                offsetX = elementOffset(gesture.slideEl).left + window.scrollX;
                offsetY = elementOffset(gesture.slideEl).top + window.scrollY;
                diffX = offsetX + slideWidth / 2 - touchX;
                diffY = offsetY + slideHeight / 2 - touchY;
                imageWidth = gesture.imageEl.offsetWidth || gesture.imageEl.clientWidth;
                imageHeight = gesture.imageEl.offsetHeight || gesture.imageEl.clientHeight;
                scaledWidth = imageWidth * zoom.scale;
                scaledHeight = imageHeight * zoom.scale;
                translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
                translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
                translateMaxX = -translateMinX;
                translateMaxY = -translateMinY;
                if (prevScale > 0 && forceZoomRatio && typeof image.currentX === 'number' && typeof image.currentY === 'number') {
                    translateX = image.currentX * zoom.scale / prevScale;
                    translateY = image.currentY * zoom.scale / prevScale;
                } else {
                    translateX = diffX * zoom.scale;
                    translateY = diffY * zoom.scale;
                }
                if (translateX < translateMinX) {
                    translateX = translateMinX;
                }
                if (translateX > translateMaxX) {
                    translateX = translateMaxX;
                }
                if (translateY < translateMinY) {
                    translateY = translateMinY;
                }
                if (translateY > translateMaxY) {
                    translateY = translateMaxY;
                }
            } else {
                translateX = 0;
                translateY = 0;
            }
            if (forceZoomRatio && zoom.scale === 1) {
                gesture.originX = 0;
                gesture.originY = 0;
            }
            image.currentX = translateX;
            image.currentY = translateY;
            gesture.imageWrapEl.style.transitionDuration = '300ms';
            gesture.imageWrapEl.style.transform = `translate3d(${translateX}px, ${translateY}px,0)`;
            gesture.imageEl.style.transitionDuration = '300ms';
            gesture.imageEl.style.transform = `translate3d(0,0,0) scale(${zoom.scale})`;
        }

        function zoomOut() {
            const zoom = swiper.zoom;
            const params = swiper.params.zoom;
            if (!gesture.slideEl) {
                if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
                    gesture.slideEl = elementChildren(swiper.slidesEl, `.${swiper.params.slideActiveClass}`)[0];
                } else {
                    gesture.slideEl = swiper.slides[swiper.activeIndex];
                }
                let imageEl = gesture.slideEl.querySelector(`.${params.containerClass}`);
                if (imageEl) {
                    imageEl = imageEl.querySelectorAll('picture, img, svg, canvas, .swiper-zoom-target')[0];
                }
                gesture.imageEl = imageEl;
                if (imageEl) {
                    gesture.imageWrapEl = elementParents(gesture.imageEl, `.${params.containerClass}`)[0];
                } else {
                    gesture.imageWrapEl = undefined;
                }
            }
            if (!gesture.imageEl || !gesture.imageWrapEl) return;
            if (swiper.params.cssMode) {
                swiper.wrapperEl.style.overflow = '';
                swiper.wrapperEl.style.touchAction = '';
            }
            zoom.scale = 1;
            currentScale = 1;
            image.currentX = undefined;
            image.currentY = undefined;
            image.touchesStart.x = undefined;
            image.touchesStart.y = undefined;
            gesture.imageWrapEl.style.transitionDuration = '300ms';
            gesture.imageWrapEl.style.transform = 'translate3d(0,0,0)';
            gesture.imageEl.style.transitionDuration = '300ms';
            gesture.imageEl.style.transform = 'translate3d(0,0,0) scale(1)';
            gesture.slideEl.classList.remove(`${params.zoomedSlideClass}`);
            gesture.slideEl = undefined;
            gesture.originX = 0;
            gesture.originY = 0;
            if (swiper.params.zoom.panOnMouseMove) {
                mousePanStart = {
                    x: 0,
                    y: 0
                };
                if (isPanningWithMouse) {
                    isPanningWithMouse = false;
                    image.startX = 0;
                    image.startY = 0;
                }
            }
        }
        // Toggle Zoom
        function zoomToggle(e) {
            const zoom = swiper.zoom;
            if (zoom.scale && zoom.scale !== 1) {
                // Zoom Out
                zoomOut();
            } else {
                // Zoom In
                zoomIn(e);
            }
        }

        function getListeners() {
            const passiveListener = swiper.params.passiveListeners ? {
                passive: true,
                capture: false
            } : false;
            const activeListenerWithCapture = swiper.params.passiveListeners ? {
                passive: false,
                capture: true
            } : true;
            return {
                passiveListener,
                activeListenerWithCapture
            };
        }
        // Attach/Detach Events
        function enable() {
            const zoom = swiper.zoom;
            if (zoom.enabled) return;
            zoom.enabled = true;
            const {
                passiveListener,
                activeListenerWithCapture
            } = getListeners();
            // Scale image
            swiper.wrapperEl.addEventListener('pointerdown', onGestureStart, passiveListener);
            swiper.wrapperEl.addEventListener('pointermove', onGestureChange, activeListenerWithCapture);
            ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
                swiper.wrapperEl.addEventListener(eventName, onGestureEnd, passiveListener);
            });
            // Move image
            swiper.wrapperEl.addEventListener('pointermove', onTouchMove, activeListenerWithCapture);
        }

        function disable() {
            const zoom = swiper.zoom;
            if (!zoom.enabled) return;
            zoom.enabled = false;
            const {
                passiveListener,
                activeListenerWithCapture
            } = getListeners();
            // Scale image
            swiper.wrapperEl.removeEventListener('pointerdown', onGestureStart, passiveListener);
            swiper.wrapperEl.removeEventListener('pointermove', onGestureChange, activeListenerWithCapture);
            ['pointerup', 'pointercancel', 'pointerout'].forEach(eventName => {
                swiper.wrapperEl.removeEventListener(eventName, onGestureEnd, passiveListener);
            });
            // Move image
            swiper.wrapperEl.removeEventListener('pointermove', onTouchMove, activeListenerWithCapture);
        }
        on('init', () => {
            if (swiper.params.zoom.enabled) {
                enable();
            }
        });
        on('destroy', () => {
            disable();
        });
        on('touchStart', (_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchStart(e);
        });
        on('touchEnd', (_s, e) => {
            if (!swiper.zoom.enabled) return;
            onTouchEnd();
        });
        on('doubleTap', (_s, e) => {
            if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
                zoomToggle(e);
            }
        });
        on('transitionEnd', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
                onTransitionEnd();
            }
        });
        on('slideChange', () => {
            if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
                onTransitionEnd();
            }
        });
        Object.assign(swiper.zoom, {
            enable,
            disable,
            in: zoomIn,
            out: zoomOut,
            toggle: zoomToggle
        });
    }
    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            controller: {
                control: undefined,
                inverse: false,
                by: 'slide' // or 'container'
            }
        });
        swiper.controller = {
            control: undefined
        };

        function LinearSpline(x, y) {
            const binarySearch = function search() {
                let maxIndex;
                let minIndex;
                let guess;
                return (array, val) => {
                    minIndex = -1;
                    maxIndex = array.length;
                    while (maxIndex - minIndex > 1) {
                        guess = maxIndex + minIndex >> 1;
                        if (array[guess] <= val) {
                            minIndex = guess;
                        } else {
                            maxIndex = guess;
                        }
                    }
                    return maxIndex;
                };
            }();
            this.x = x;
            this.y = y;
            this.lastIndex = x.length - 1;
            // Given an x value (x2), return the expected y2 value:
            // (x1,y1) is the known point before given value,
            // (x3,y3) is the known point after given value.
            let i1;
            let i3;
            this.interpolate = function interpolate(x2) {
                if (!x2) return 0;
                // Get the indexes of x1 and x3 (the array indexes before and after given x2):
                i3 = binarySearch(this.x, x2);
                i1 = i3 - 1;
                // We have our indexes i1 & i3, so we can calculate already:
                // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
                return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
            };
            return this;
        }

        function getInterpolateFunction(c) {
            swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }

        function setTranslate(_t, byController) {
            const controlled = swiper.controller.control;
            let multiplier;
            let controlledTranslate;
            const Swiper = swiper.constructor;

            function setControlledTranslate(c) {
                if (c.destroyed) return;
                // this will create an Interpolate function based on the snapGrids
                // x is the Grid of the scrolled scroller and y will be the controlled scroller
                // it makes sense to create this only once and recall it for the interpolation
                // the function does a lot of value caching for performance
                const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
                if (swiper.params.controller.by === 'slide') {
                    getInterpolateFunction(c);
                    // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
                    // but it did not work out
                    controlledTranslate = -swiper.controller.spline.interpolate(-translate);
                }
                if (!controlledTranslate || swiper.params.controller.by === 'container') {
                    multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
                    if (Number.isNaN(multiplier) || !Number.isFinite(multiplier)) {
                        multiplier = 1;
                    }
                    controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
                }
                if (swiper.params.controller.inverse) {
                    controlledTranslate = c.maxTranslate() - controlledTranslate;
                }
                c.updateProgress(controlledTranslate);
                c.setTranslate(controlledTranslate, swiper);
                c.updateActiveIndex();
                c.updateSlidesClasses();
            }
            if (Array.isArray(controlled)) {
                for (let i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTranslate(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTranslate(controlled);
            }
        }

        function setTransition(duration, byController) {
            const Swiper = swiper.constructor;
            const controlled = swiper.controller.control;
            let i;

            function setControlledTransition(c) {
                if (c.destroyed) return;
                c.setTransition(duration, swiper);
                if (duration !== 0) {
                    c.transitionStart();
                    if (c.params.autoHeight) {
                        nextTick(() => {
                            c.updateAutoHeight();
                        });
                    }
                    elementTransitionEnd(c.wrapperEl, () => {
                        if (!controlled) return;
                        c.transitionEnd();
                    });
                }
            }
            if (Array.isArray(controlled)) {
                for (i = 0; i < controlled.length; i += 1) {
                    if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
                        setControlledTransition(controlled[i]);
                    }
                }
            } else if (controlled instanceof Swiper && byController !== controlled) {
                setControlledTransition(controlled);
            }
        }

        function removeSpline() {
            if (!swiper.controller.control) return;
            if (swiper.controller.spline) {
                swiper.controller.spline = undefined;
                delete swiper.controller.spline;
            }
        }
        on('beforeInit', () => {
            if (typeof window !== 'undefined' && (
                    // eslint-disable-line
                    typeof swiper.params.controller.control === 'string' || swiper.params.controller.control instanceof HTMLElement)) {
                const controlElements = typeof swiper.params.controller.control === 'string' ? [...document.querySelectorAll(swiper.params.controller.control)] : [swiper.params.controller.control];
                controlElements.forEach(controlElement => {
                    if (!swiper.controller.control) swiper.controller.control = [];
                    if (controlElement && controlElement.swiper) {
                        swiper.controller.control.push(controlElement.swiper);
                    } else if (controlElement) {
                        const eventName = `${swiper.params.eventsPrefix}init`;
                        const onControllerSwiper = e => {
                            swiper.controller.control.push(e.detail[0]);
                            swiper.update();
                            controlElement.removeEventListener(eventName, onControllerSwiper);
                        };
                        controlElement.addEventListener(eventName, onControllerSwiper);
                    }
                });
                return;
            }
            swiper.controller.control = swiper.params.controller.control;
        });
        on('update', () => {
            removeSpline();
        });
        on('resize', () => {
            removeSpline();
        });
        on('observerUpdate', () => {
            removeSpline();
        });
        on('setTranslate', (_s, translate, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
            swiper.controller.setTranslate(translate, byController);
        });
        on('setTransition', (_s, duration, byController) => {
            if (!swiper.controller.control || swiper.controller.control.destroyed) return;
            swiper.controller.setTransition(duration, byController);
        });
        Object.assign(swiper.controller, {
            setTranslate,
            setTransition
        });
    }

    function A11y(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            a11y: {
                enabled: true,
                notificationClass: 'swiper-notification',
                prevSlideMessage: 'Previous slide',
                nextSlideMessage: 'Next slide',
                firstSlideMessage: 'This is the first slide',
                lastSlideMessage: 'This is the last slide',
                paginationBulletMessage: 'Go to slide {{index}}',
                slideLabelMessage: '{{index}} / {{slidesLength}}',
                containerMessage: null,
                containerRoleDescriptionMessage: null,
                containerRole: null,
                itemRoleDescriptionMessage: null,
                slideRole: 'group',
                id: null,
                scrollOnFocus: true
            }
        });
        swiper.a11y = {
            clicked: false
        };
        let liveRegion = null;
        let preventFocusHandler;
        let focusTargetSlideEl;
        let visibilityChangedTimestamp = new Date().getTime();

        function notify(message) {
            const notification = liveRegion;
            if (notification.length === 0) return;
            setInnerHTML(notification, message);
        }

        function getRandomNumber(size) {
            if (size === void 0) {
                size = 16;
            }
            const randomChar = () => Math.round(16 * Math.random()).toString(16);
            return 'x'.repeat(size).replace(/x/g, randomChar);
        }

        function makeElFocusable(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('tabIndex', '0');
            });
        }

        function makeElNotFocusable(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('tabIndex', '-1');
            });
        }

        function addElRole(el, role) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('role', role);
            });
        }

        function addElRoleDescription(el, description) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-roledescription', description);
            });
        }

        function addElControls(el, controls) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-controls', controls);
            });
        }

        function addElLabel(el, label) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-label', label);
            });
        }

        function addElId(el, id) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('id', id);
            });
        }

        function addElLive(el, live) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-live', live);
            });
        }

        function disableEl(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-disabled', true);
            });
        }

        function enableEl(el) {
            el = makeElementsArray(el);
            el.forEach(subEl => {
                subEl.setAttribute('aria-disabled', false);
            });
        }

        function onEnterOrSpaceKey(e) {
            if (e.keyCode !== 13 && e.keyCode !== 32) return;
            const params = swiper.params.a11y;
            const targetEl = e.target;
            if (swiper.pagination && swiper.pagination.el && (targetEl === swiper.pagination.el || swiper.pagination.el.contains(e.target))) {
                if (!e.target.matches(classesToSelector(swiper.params.pagination.bulletClass))) return;
            }
            if (swiper.navigation && swiper.navigation.prevEl && swiper.navigation.nextEl) {
                const prevEls = makeElementsArray(swiper.navigation.prevEl);
                const nextEls = makeElementsArray(swiper.navigation.nextEl);
                if (nextEls.includes(targetEl)) {
                    if (!(swiper.isEnd && !swiper.params.loop)) {
                        swiper.slideNext();
                    }
                    if (swiper.isEnd) {
                        notify(params.lastSlideMessage);
                    } else {
                        notify(params.nextSlideMessage);
                    }
                }
                if (prevEls.includes(targetEl)) {
                    if (!(swiper.isBeginning && !swiper.params.loop)) {
                        swiper.slidePrev();
                    }
                    if (swiper.isBeginning) {
                        notify(params.firstSlideMessage);
                    } else {
                        notify(params.prevSlideMessage);
                    }
                }
            }
            if (swiper.pagination && targetEl.matches(classesToSelector(swiper.params.pagination.bulletClass))) {
                targetEl.click();
            }
        }

        function updateNavigation() {
            if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
            const {
                nextEl,
                prevEl
            } = swiper.navigation;
            if (prevEl) {
                if (swiper.isBeginning) {
                    disableEl(prevEl);
                    makeElNotFocusable(prevEl);
                } else {
                    enableEl(prevEl);
                    makeElFocusable(prevEl);
                }
            }
            if (nextEl) {
                if (swiper.isEnd) {
                    disableEl(nextEl);
                    makeElNotFocusable(nextEl);
                } else {
                    enableEl(nextEl);
                    makeElFocusable(nextEl);
                }
            }
        }

        function hasPagination() {
            return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
        }

        function hasClickablePagination() {
            return hasPagination() && swiper.params.pagination.clickable;
        }

        function updatePagination() {
            const params = swiper.params.a11y;
            if (!hasPagination()) return;
            swiper.pagination.bullets.forEach(bulletEl => {
                if (swiper.params.pagination.clickable) {
                    makeElFocusable(bulletEl);
                    if (!swiper.params.pagination.renderBullet) {
                        addElRole(bulletEl, 'button');
                        addElLabel(bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, elementIndex(bulletEl) + 1));
                    }
                }
                if (bulletEl.matches(classesToSelector(swiper.params.pagination.bulletActiveClass))) {
                    bulletEl.setAttribute('aria-current', 'true');
                } else {
                    bulletEl.removeAttribute('aria-current');
                }
            });
        }
        const initNavEl = (el, wrapperId, message) => {
            makeElFocusable(el);
            if (el.tagName !== 'BUTTON') {
                addElRole(el, 'button');
                el.addEventListener('keydown', onEnterOrSpaceKey);
            }
            addElLabel(el, message);
            addElControls(el, wrapperId);
        };
        const handlePointerDown = e => {
            if (focusTargetSlideEl && focusTargetSlideEl !== e.target && !focusTargetSlideEl.contains(e.target)) {
                preventFocusHandler = true;
            }
            swiper.a11y.clicked = true;
        };
        const handlePointerUp = () => {
            preventFocusHandler = false;
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    if (!swiper.destroyed) {
                        swiper.a11y.clicked = false;
                    }
                });
            });
        };
        const onVisibilityChange = e => {
            visibilityChangedTimestamp = new Date().getTime();
        };
        const handleFocus = e => {
            if (swiper.a11y.clicked || !swiper.params.a11y.scrollOnFocus) return;
            if (new Date().getTime() - visibilityChangedTimestamp < 100) return;
            const slideEl = e.target.closest(`.${swiper.params.slideClass}, swiper-slide`);
            if (!slideEl || !swiper.slides.includes(slideEl)) return;
            focusTargetSlideEl = slideEl;
            const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
            const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
            if (isActive || isVisible) return;
            if (e.sourceCapabilities && e.sourceCapabilities.firesTouchEvents) return;
            if (swiper.isHorizontal()) {
                swiper.el.scrollLeft = 0;
            } else {
                swiper.el.scrollTop = 0;
            }
            requestAnimationFrame(() => {
                if (preventFocusHandler) return;
                if (swiper.params.loop) {
                    swiper.slideToLoop(swiper.getSlideIndexWhenGrid(parseInt(slideEl.getAttribute('data-swiper-slide-index'))), 0);
                } else {
                    swiper.slideTo(swiper.getSlideIndexWhenGrid(swiper.slides.indexOf(slideEl)), 0);
                }
                preventFocusHandler = false;
            });
        };
        const initSlides = () => {
            const params = swiper.params.a11y;
            if (params.itemRoleDescriptionMessage) {
                addElRoleDescription(swiper.slides, params.itemRoleDescriptionMessage);
            }
            if (params.slideRole) {
                addElRole(swiper.slides, params.slideRole);
            }
            const slidesLength = swiper.slides.length;
            if (params.slideLabelMessage) {
                swiper.slides.forEach((slideEl, index) => {
                    const slideIndex = swiper.params.loop ? parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10) : index;
                    const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
                    addElLabel(slideEl, ariaLabelMessage);
                });
            }
        };
        const init = () => {
            const params = swiper.params.a11y;
            swiper.el.append(liveRegion);
            // Container
            const containerEl = swiper.el;
            if (params.containerRoleDescriptionMessage) {
                addElRoleDescription(containerEl, params.containerRoleDescriptionMessage);
            }
            if (params.containerMessage) {
                addElLabel(containerEl, params.containerMessage);
            }
            if (params.containerRole) {
                addElRole(containerEl, params.containerRole);
            }
            // Wrapper
            const wrapperEl = swiper.wrapperEl;
            const wrapperId = params.id || wrapperEl.getAttribute('id') || `swiper-wrapper-${getRandomNumber(16)}`;
            const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
            addElId(wrapperEl, wrapperId);
            addElLive(wrapperEl, live);
            // Slide
            initSlides();
            // Navigation
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach(el => initNavEl(el, wrapperId, params.nextSlideMessage));
            }
            if (prevEl) {
                prevEl.forEach(el => initNavEl(el, wrapperId, params.prevSlideMessage));
            }
            // Pagination
            if (hasClickablePagination()) {
                const paginationEl = makeElementsArray(swiper.pagination.el);
                paginationEl.forEach(el => {
                    el.addEventListener('keydown', onEnterOrSpaceKey);
                });
            }
            // Tab focus
            const document = getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
            swiper.el.addEventListener('focus', handleFocus, true);
            swiper.el.addEventListener('focus', handleFocus, true);
            swiper.el.addEventListener('pointerdown', handlePointerDown, true);
            swiper.el.addEventListener('pointerup', handlePointerUp, true);
        };

        function destroy() {
            if (liveRegion) liveRegion.remove();
            let {
                nextEl,
                prevEl
            } = swiper.navigation ? swiper.navigation : {};
            nextEl = makeElementsArray(nextEl);
            prevEl = makeElementsArray(prevEl);
            if (nextEl) {
                nextEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
            }
            if (prevEl) {
                prevEl.forEach(el => el.removeEventListener('keydown', onEnterOrSpaceKey));
            }
            // Pagination
            if (hasClickablePagination()) {
                const paginationEl = makeElementsArray(swiper.pagination.el);
                paginationEl.forEach(el => {
                    el.removeEventListener('keydown', onEnterOrSpaceKey);
                });
            }
            const document = getDocument();
            document.removeEventListener('visibilitychange', onVisibilityChange);
            // Tab focus
            if (swiper.el && typeof swiper.el !== 'string') {
                swiper.el.removeEventListener('focus', handleFocus, true);
                swiper.el.removeEventListener('pointerdown', handlePointerDown, true);
                swiper.el.removeEventListener('pointerup', handlePointerUp, true);
            }
        }
        on('beforeInit', () => {
            liveRegion = createElement('span', swiper.params.a11y.notificationClass);
            liveRegion.setAttribute('aria-live', 'assertive');
            liveRegion.setAttribute('aria-atomic', 'true');
        });
        on('afterInit', () => {
            if (!swiper.params.a11y.enabled) return;
            init();
        });
        on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
            if (!swiper.params.a11y.enabled) return;
            initSlides();
        });
        on('fromEdge toEdge afterInit lock unlock', () => {
            if (!swiper.params.a11y.enabled) return;
            updateNavigation();
        });
        on('paginationUpdate', () => {
            if (!swiper.params.a11y.enabled) return;
            updatePagination();
        });
        on('destroy', () => {
            if (!swiper.params.a11y.enabled) return;
            destroy();
        });
    }

    function History(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            history: {
                enabled: false,
                root: '',
                replaceState: false,
                key: 'slides',
                keepQuery: false
            }
        });
        let initialized = false;
        let paths = {};
        const slugify = text => {
            return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
        };
        const getPathValues = urlOverride => {
            const window = getWindow();
            let location;
            if (urlOverride) {
                location = new URL(urlOverride);
            } else {
                location = window.location;
            }
            const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
            const total = pathArray.length;
            const key = pathArray[total - 2];
            const value = pathArray[total - 1];
            return {
                key,
                value
            };
        };
        const setHistory = (key, index) => {
            const window = getWindow();
            if (!initialized || !swiper.params.history.enabled) return;
            let location;
            if (swiper.params.url) {
                location = new URL(swiper.params.url);
            } else {
                location = window.location;
            }
            const slide = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${index}"]`) : swiper.slides[index];
            let value = slugify(slide.getAttribute('data-history'));
            if (swiper.params.history.root.length > 0) {
                let root = swiper.params.history.root;
                if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
                value = `${root}/${key ? `${key}/` : ''}${value}`;
            } else if (!location.pathname.includes(key)) {
                value = `${key ? `${key}/` : ''}${value}`;
            }
            if (swiper.params.history.keepQuery) {
                value += location.search;
            }
            const currentState = window.history.state;
            if (currentState && currentState.value === value) {
                return;
            }
            if (swiper.params.history.replaceState) {
                window.history.replaceState({
                    value
                }, null, value);
            } else {
                window.history.pushState({
                    value
                }, null, value);
            }
        };
        const scrollToSlide = (speed, value, runCallbacks) => {
            if (value) {
                for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
                    const slide = swiper.slides[i];
                    const slideHistory = slugify(slide.getAttribute('data-history'));
                    if (slideHistory === value) {
                        const index = swiper.getSlideIndex(slide);
                        swiper.slideTo(index, speed, runCallbacks);
                    }
                }
            } else {
                swiper.slideTo(0, speed, runCallbacks);
            }
        };
        const setHistoryPopState = () => {
            paths = getPathValues(swiper.params.url);
            scrollToSlide(swiper.params.speed, paths.value, false);
        };
        const init = () => {
            const window = getWindow();
            if (!swiper.params.history) return;
            if (!window.history || !window.history.pushState) {
                swiper.params.history.enabled = false;
                swiper.params.hashNavigation.enabled = true;
                return;
            }
            initialized = true;
            paths = getPathValues(swiper.params.url);
            if (!paths.key && !paths.value) {
                if (!swiper.params.history.replaceState) {
                    window.addEventListener('popstate', setHistoryPopState);
                }
                return;
            }
            scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);
            if (!swiper.params.history.replaceState) {
                window.addEventListener('popstate', setHistoryPopState);
            }
        };
        const destroy = () => {
            const window = getWindow();
            if (!swiper.params.history.replaceState) {
                window.removeEventListener('popstate', setHistoryPopState);
            }
        };
        on('init', () => {
            if (swiper.params.history.enabled) {
                init();
            }
        });
        on('destroy', () => {
            if (swiper.params.history.enabled) {
                destroy();
            }
        });
        on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
            }
        });
        on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
                setHistory(swiper.params.history.key, swiper.activeIndex);
            }
        });
    }

    function HashNavigation(_ref) {
        let {
            swiper,
            extendParams,
            emit,
            on
        } = _ref;
        let initialized = false;
        const document = getDocument();
        const window = getWindow();
        extendParams({
            hashNavigation: {
                enabled: false,
                replaceState: false,
                watchState: false,
                getSlideIndex(_s, hash) {
                    if (swiper.virtual && swiper.params.virtual.enabled) {
                        const slideWithHash = swiper.slides.find(slideEl => slideEl.getAttribute('data-hash') === hash);
                        if (!slideWithHash) return 0;
                        const index = parseInt(slideWithHash.getAttribute('data-swiper-slide-index'), 10);
                        return index;
                    }
                    return swiper.getSlideIndex(elementChildren(swiper.slidesEl, `.${swiper.params.slideClass}[data-hash="${hash}"], swiper-slide[data-hash="${hash}"]`)[0]);
                }
            }
        });
        const onHashChange = () => {
            emit('hashChange');
            const newHash = document.location.hash.replace('#', '');
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') : '';
            if (newHash !== activeSlideHash) {
                const newIndex = swiper.params.hashNavigation.getSlideIndex(swiper, newHash);
                if (typeof newIndex === 'undefined' || Number.isNaN(newIndex)) return;
                swiper.slideTo(newIndex);
            }
        };
        const setHash = () => {
            if (!initialized || !swiper.params.hashNavigation.enabled) return;
            const activeSlideEl = swiper.virtual && swiper.params.virtual.enabled ? swiper.slidesEl.querySelector(`[data-swiper-slide-index="${swiper.activeIndex}"]`) : swiper.slides[swiper.activeIndex];
            const activeSlideHash = activeSlideEl ? activeSlideEl.getAttribute('data-hash') || activeSlideEl.getAttribute('data-history') : '';
            if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
                window.history.replaceState(null, null, `#${activeSlideHash}` || '');
                emit('hashSet');
            } else {
                document.location.hash = activeSlideHash || '';
                emit('hashSet');
            }
        };
        const init = () => {
            if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
            initialized = true;
            const hash = document.location.hash.replace('#', '');
            if (hash) {
                const speed = 0;
                const index = swiper.params.hashNavigation.getSlideIndex(swiper, hash);
                swiper.slideTo(index || 0, speed, swiper.params.runCallbacksOnInit, true);
            }
            if (swiper.params.hashNavigation.watchState) {
                window.addEventListener('hashchange', onHashChange);
            }
        };
        const destroy = () => {
            if (swiper.params.hashNavigation.watchState) {
                window.removeEventListener('hashchange', onHashChange);
            }
        };
        on('init', () => {
            if (swiper.params.hashNavigation.enabled) {
                init();
            }
        });
        on('destroy', () => {
            if (swiper.params.hashNavigation.enabled) {
                destroy();
            }
        });
        on('transitionEnd _freeModeNoMomentumRelease', () => {
            if (initialized) {
                setHash();
            }
        });
        on('slideChange', () => {
            if (initialized && swiper.params.cssMode) {
                setHash();
            }
        });
    }
    /* eslint no-underscore-dangle: "off" */
    /* eslint no-use-before-define: "off" */
    function Autoplay(_ref) {
        let {
            swiper,
            extendParams,
            on,
            emit,
            params
        } = _ref;
        swiper.autoplay = {
            running: false,
            paused: false,
            timeLeft: 0
        };
        extendParams({
            autoplay: {
                enabled: false,
                delay: 3000,
                waitForTransition: true,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: false,
                pauseOnMouseEnter: false
            }
        });
        let timeout;
        let raf;
        let autoplayDelayTotal = params && params.autoplay ? params.autoplay.delay : 3000;
        let autoplayDelayCurrent = params && params.autoplay ? params.autoplay.delay : 3000;
        let autoplayTimeLeft;
        let autoplayStartTime = new Date().getTime();
        let wasPaused;
        let isTouched;
        let pausedByTouch;
        let touchStartTimeout;
        let slideChanged;
        let pausedByInteraction;
        let pausedByPointerEnter;

        function onTransitionEnd(e) {
            if (!swiper || swiper.destroyed || !swiper.wrapperEl) return;
            if (e.target !== swiper.wrapperEl) return;
            swiper.wrapperEl.removeEventListener('transitionend', onTransitionEnd);
            if (pausedByPointerEnter || e.detail && e.detail.bySwiperTouchMove) {
                return;
            }
            resume();
        }
        const calcTimeLeft = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.autoplay.paused) {
                wasPaused = true;
            } else if (wasPaused) {
                autoplayDelayCurrent = autoplayTimeLeft;
                wasPaused = false;
            }
            const timeLeft = swiper.autoplay.paused ? autoplayTimeLeft : autoplayStartTime + autoplayDelayCurrent - new Date().getTime();
            swiper.autoplay.timeLeft = timeLeft;
            emit('autoplayTimeLeft', timeLeft, timeLeft / autoplayDelayTotal);
            raf = requestAnimationFrame(() => {
                calcTimeLeft();
            });
        };
        const getSlideDelay = () => {
            let activeSlideEl;
            if (swiper.virtual && swiper.params.virtual.enabled) {
                activeSlideEl = swiper.slides.find(slideEl => slideEl.classList.contains('swiper-slide-active'));
            } else {
                activeSlideEl = swiper.slides[swiper.activeIndex];
            }
            if (!activeSlideEl) return undefined;
            const currentSlideDelay = parseInt(activeSlideEl.getAttribute('data-swiper-autoplay'), 10);
            return currentSlideDelay;
        };
        const run = delayForce => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            cancelAnimationFrame(raf);
            calcTimeLeft();
            let delay = typeof delayForce === 'undefined' ? swiper.params.autoplay.delay : delayForce;
            autoplayDelayTotal = swiper.params.autoplay.delay;
            autoplayDelayCurrent = swiper.params.autoplay.delay;
            const currentSlideDelay = getSlideDelay();
            if (!Number.isNaN(currentSlideDelay) && currentSlideDelay > 0 && typeof delayForce === 'undefined') {
                delay = currentSlideDelay;
                autoplayDelayTotal = currentSlideDelay;
                autoplayDelayCurrent = currentSlideDelay;
            }
            autoplayTimeLeft = delay;
            const speed = swiper.params.speed;
            const proceed = () => {
                if (!swiper || swiper.destroyed) return;
                if (swiper.params.autoplay.reverseDirection) {
                    if (!swiper.isBeginning || swiper.params.loop || swiper.params.rewind) {
                        swiper.slidePrev(speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(swiper.slides.length - 1, speed, true, true);
                        emit('autoplay');
                    }
                } else {
                    if (!swiper.isEnd || swiper.params.loop || swiper.params.rewind) {
                        swiper.slideNext(speed, true, true);
                        emit('autoplay');
                    } else if (!swiper.params.autoplay.stopOnLastSlide) {
                        swiper.slideTo(0, speed, true, true);
                        emit('autoplay');
                    }
                }
                if (swiper.params.cssMode) {
                    autoplayStartTime = new Date().getTime();
                    requestAnimationFrame(() => {
                        run();
                    });
                }
            };
            if (delay > 0) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    proceed();
                }, delay);
            } else {
                requestAnimationFrame(() => {
                    proceed();
                });
            }
            // eslint-disable-next-line
            return delay;
        };
        const start = () => {
            autoplayStartTime = new Date().getTime();
            swiper.autoplay.running = true;
            run();
            emit('autoplayStart');
        };
        const stop = () => {
            swiper.autoplay.running = false;
            clearTimeout(timeout);
            cancelAnimationFrame(raf);
            emit('autoplayStop');
        };
        const pause = (internal, reset) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            clearTimeout(timeout);
            if (!internal) {
                pausedByInteraction = true;
            }
            const proceed = () => {
                emit('autoplayPause');
                if (swiper.params.autoplay.waitForTransition) {
                    swiper.wrapperEl.addEventListener('transitionend', onTransitionEnd);
                } else {
                    resume();
                }
            };
            swiper.autoplay.paused = true;
            if (reset) {
                if (slideChanged) {
                    autoplayTimeLeft = swiper.params.autoplay.delay;
                }
                slideChanged = false;
                proceed();
                return;
            }
            const delay = autoplayTimeLeft || swiper.params.autoplay.delay;
            autoplayTimeLeft = delay - (new Date().getTime() - autoplayStartTime);
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop) return;
            if (autoplayTimeLeft < 0) autoplayTimeLeft = 0;
            proceed();
        };
        const resume = () => {
            if (swiper.isEnd && autoplayTimeLeft < 0 && !swiper.params.loop || swiper.destroyed || !swiper.autoplay.running) return;
            autoplayStartTime = new Date().getTime();
            if (pausedByInteraction) {
                pausedByInteraction = false;
                run(autoplayTimeLeft);
            } else {
                run();
            }
            swiper.autoplay.paused = false;
            emit('autoplayResume');
        };
        const onVisibilityChange = () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            const document = getDocument();
            if (document.visibilityState === 'hidden') {
                pausedByInteraction = true;
                pause(true);
            }
            if (document.visibilityState === 'visible') {
                resume();
            }
        };
        const onPointerEnter = e => {
            if (e.pointerType !== 'mouse') return;
            pausedByInteraction = true;
            pausedByPointerEnter = true;
            if (swiper.animating || swiper.autoplay.paused) return;
            pause(true);
        };
        const onPointerLeave = e => {
            if (e.pointerType !== 'mouse') return;
            pausedByPointerEnter = false;
            if (swiper.autoplay.paused) {
                resume();
            }
        };
        const attachMouseEvents = () => {
            if (swiper.params.autoplay.pauseOnMouseEnter) {
                swiper.el.addEventListener('pointerenter', onPointerEnter);
                swiper.el.addEventListener('pointerleave', onPointerLeave);
            }
        };
        const detachMouseEvents = () => {
            if (swiper.el && typeof swiper.el !== 'string') {
                swiper.el.removeEventListener('pointerenter', onPointerEnter);
                swiper.el.removeEventListener('pointerleave', onPointerLeave);
            }
        };
        const attachDocumentEvents = () => {
            const document = getDocument();
            document.addEventListener('visibilitychange', onVisibilityChange);
        };
        const detachDocumentEvents = () => {
            const document = getDocument();
            document.removeEventListener('visibilitychange', onVisibilityChange);
        };
        on('init', () => {
            if (swiper.params.autoplay.enabled) {
                attachMouseEvents();
                attachDocumentEvents();
                start();
            }
        });
        on('destroy', () => {
            detachMouseEvents();
            detachDocumentEvents();
            if (swiper.autoplay.running) {
                stop();
            }
        });
        on('_freeModeStaticRelease', () => {
            if (pausedByTouch || pausedByInteraction) {
                resume();
            }
        });
        on('_freeModeNoMomentumRelease', () => {
            if (!swiper.params.autoplay.disableOnInteraction) {
                pause(true, true);
            } else {
                stop();
            }
        });
        on('beforeTransitionStart', (_s, speed, internal) => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
                pause(true, true);
            } else {
                stop();
            }
        });
        on('sliderFirstMove', () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            if (swiper.params.autoplay.disableOnInteraction) {
                stop();
                return;
            }
            isTouched = true;
            pausedByTouch = false;
            pausedByInteraction = false;
            touchStartTimeout = setTimeout(() => {
                pausedByInteraction = true;
                pausedByTouch = true;
                pause(true);
            }, 200);
        });
        on('touchEnd', () => {
            if (swiper.destroyed || !swiper.autoplay.running || !isTouched) return;
            clearTimeout(touchStartTimeout);
            clearTimeout(timeout);
            if (swiper.params.autoplay.disableOnInteraction) {
                pausedByTouch = false;
                isTouched = false;
                return;
            }
            if (pausedByTouch && swiper.params.cssMode) resume();
            pausedByTouch = false;
            isTouched = false;
        });
        on('slideChange', () => {
            if (swiper.destroyed || !swiper.autoplay.running) return;
            slideChanged = true;
        });
        Object.assign(swiper.autoplay, {
            start,
            stop,
            pause,
            resume
        });
    }

    function Thumb(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            thumbs: {
                swiper: null,
                multipleActiveThumbs: true,
                autoScrollOffset: 0,
                slideThumbActiveClass: 'swiper-slide-thumb-active',
                thumbsContainerClass: 'swiper-thumbs'
            }
        });
        let initialized = false;
        let swiperCreated = false;
        swiper.thumbs = {
            swiper: null
        };

        function onThumbClick() {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const clickedIndex = thumbsSwiper.clickedIndex;
            const clickedSlide = thumbsSwiper.clickedSlide;
            if (clickedSlide && clickedSlide.classList.contains(swiper.params.thumbs.slideThumbActiveClass)) return;
            if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
            let slideToIndex;
            if (thumbsSwiper.params.loop) {
                slideToIndex = parseInt(thumbsSwiper.clickedSlide.getAttribute('data-swiper-slide-index'), 10);
            } else {
                slideToIndex = clickedIndex;
            }
            if (swiper.params.loop) {
                swiper.slideToLoop(slideToIndex);
            } else {
                swiper.slideTo(slideToIndex);
            }
        }

        function init() {
            const {
                thumbs: thumbsParams
            } = swiper.params;
            if (initialized) return false;
            initialized = true;
            const SwiperClass = swiper.constructor;
            if (thumbsParams.swiper instanceof SwiperClass) {
                if (thumbsParams.swiper.destroyed) {
                    initialized = false;
                    return false;
                }
                swiper.thumbs.swiper = thumbsParams.swiper;
                Object.assign(swiper.thumbs.swiper.originalParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                Object.assign(swiper.thumbs.swiper.params, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper.update();
            } else if (isObject(thumbsParams.swiper)) {
                const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
                Object.assign(thumbsSwiperParams, {
                    watchSlidesProgress: true,
                    slideToClickedSlide: false
                });
                swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
                swiperCreated = true;
            }
            swiper.thumbs.swiper.el.classList.add(swiper.params.thumbs.thumbsContainerClass);
            swiper.thumbs.swiper.on('tap', onThumbClick);
            return true;
        }

        function update(initial) {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
            // Activate thumbs
            let thumbsToActivate = 1;
            const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
            if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
                thumbsToActivate = swiper.params.slidesPerView;
            }
            if (!swiper.params.thumbs.multipleActiveThumbs) {
                thumbsToActivate = 1;
            }
            thumbsToActivate = Math.floor(thumbsToActivate);
            thumbsSwiper.slides.forEach(slideEl => slideEl.classList.remove(thumbActiveClass));
            if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                    elementChildren(thumbsSwiper.slidesEl, `[data-swiper-slide-index="${swiper.realIndex + i}"]`).forEach(slideEl => {
                        slideEl.classList.add(thumbActiveClass);
                    });
                }
            } else {
                for (let i = 0; i < thumbsToActivate; i += 1) {
                    if (thumbsSwiper.slides[swiper.realIndex + i]) {
                        thumbsSwiper.slides[swiper.realIndex + i].classList.add(thumbActiveClass);
                    }
                }
            }
            const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
            const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
            if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
                const currentThumbsIndex = thumbsSwiper.activeIndex;
                let newThumbsIndex;
                let direction;
                if (thumbsSwiper.params.loop) {
                    const newThumbsSlide = thumbsSwiper.slides.find(slideEl => slideEl.getAttribute('data-swiper-slide-index') === `${swiper.realIndex}`);
                    newThumbsIndex = thumbsSwiper.slides.indexOf(newThumbsSlide);
                    direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
                } else {
                    newThumbsIndex = swiper.realIndex;
                    direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
                }
                if (useOffset) {
                    newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
                }
                if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
                    if (thumbsSwiper.params.centeredSlides) {
                        if (newThumbsIndex > currentThumbsIndex) {
                            newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
                        } else {
                            newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
                        }
                    } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1);
                    thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
                }
            }
        }
        on('beforeInit', () => {
            const {
                thumbs
            } = swiper.params;
            if (!thumbs || !thumbs.swiper) return;
            if (typeof thumbs.swiper === 'string' || thumbs.swiper instanceof HTMLElement) {
                const document = getDocument();
                const getThumbsElementAndInit = () => {
                    const thumbsElement = typeof thumbs.swiper === 'string' ? document.querySelector(thumbs.swiper) : thumbs.swiper;
                    if (thumbsElement && thumbsElement.swiper) {
                        thumbs.swiper = thumbsElement.swiper;
                        init();
                        update(true);
                    } else if (thumbsElement) {
                        const eventName = `${swiper.params.eventsPrefix}init`;
                        const onThumbsSwiper = e => {
                            thumbs.swiper = e.detail[0];
                            thumbsElement.removeEventListener(eventName, onThumbsSwiper);
                            init();
                            update(true);
                            thumbs.swiper.update();
                            swiper.update();
                        };
                        thumbsElement.addEventListener(eventName, onThumbsSwiper);
                    }
                    return thumbsElement;
                };
                const watchForThumbsToAppear = () => {
                    if (swiper.destroyed) return;
                    const thumbsElement = getThumbsElementAndInit();
                    if (!thumbsElement) {
                        requestAnimationFrame(watchForThumbsToAppear);
                    }
                };
                requestAnimationFrame(watchForThumbsToAppear);
            } else {
                init();
                update(true);
            }
        });
        on('slideChange update resize observerUpdate', () => {
            update();
        });
        on('setTransition', (_s, duration) => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            thumbsSwiper.setTransition(duration);
        });
        on('beforeDestroy', () => {
            const thumbsSwiper = swiper.thumbs.swiper;
            if (!thumbsSwiper || thumbsSwiper.destroyed) return;
            if (swiperCreated) {
                thumbsSwiper.destroy();
            }
        });
        Object.assign(swiper.thumbs, {
            init,
            update
        });
    }

    function freeMode(_ref) {
        let {
            swiper,
            extendParams,
            emit,
            once
        } = _ref;
        extendParams({
            freeMode: {
                enabled: false,
                momentum: true,
                momentumRatio: 1,
                momentumBounce: true,
                momentumBounceRatio: 1,
                momentumVelocityRatio: 1,
                sticky: false,
                minimumVelocity: 0.02
            }
        });

        function onTouchStart() {
            if (swiper.params.cssMode) return;
            const translate = swiper.getTranslate();
            swiper.setTranslate(translate);
            swiper.setTransition(0);
            swiper.touchEventsData.velocities.length = 0;
            swiper.freeMode.onTouchEnd({
                currentPos: swiper.rtl ? swiper.translate : -swiper.translate
            });
        }

        function onTouchMove() {
            if (swiper.params.cssMode) return;
            const {
                touchEventsData: data,
                touches
            } = swiper;
            // Velocity
            if (data.velocities.length === 0) {
                data.velocities.push({
                    position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
                    time: data.touchStartTime
                });
            }
            data.velocities.push({
                position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
                time: now()
            });
        }

        function onTouchEnd(_ref2) {
            let {
                currentPos
            } = _ref2;
            if (swiper.params.cssMode) return;
            const {
                params,
                wrapperEl,
                rtlTranslate: rtl,
                snapGrid,
                touchEventsData: data
            } = swiper;
            // Time diff
            const touchEndTime = now();
            const timeDiff = touchEndTime - data.touchStartTime;
            if (currentPos < -swiper.minTranslate()) {
                swiper.slideTo(swiper.activeIndex);
                return;
            }
            if (currentPos > -swiper.maxTranslate()) {
                if (swiper.slides.length < snapGrid.length) {
                    swiper.slideTo(snapGrid.length - 1);
                } else {
                    swiper.slideTo(swiper.slides.length - 1);
                }
                return;
            }
            if (params.freeMode.momentum) {
                if (data.velocities.length > 1) {
                    const lastMoveEvent = data.velocities.pop();
                    const velocityEvent = data.velocities.pop();
                    const distance = lastMoveEvent.position - velocityEvent.position;
                    const time = lastMoveEvent.time - velocityEvent.time;
                    swiper.velocity = distance / time;
                    swiper.velocity /= 2;
                    if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
                        swiper.velocity = 0;
                    }
                    // this implies that the user stopped moving a finger then released.
                    // There would be no events with distance zero, so the last event is stale.
                    if (time > 150 || now() - lastMoveEvent.time > 300) {
                        swiper.velocity = 0;
                    }
                } else {
                    swiper.velocity = 0;
                }
                swiper.velocity *= params.freeMode.momentumVelocityRatio;
                data.velocities.length = 0;
                let momentumDuration = 1000 * params.freeMode.momentumRatio;
                const momentumDistance = swiper.velocity * momentumDuration;
                let newPosition = swiper.translate + momentumDistance;
                if (rtl) newPosition = -newPosition;
                let doBounce = false;
                let afterBouncePosition;
                const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
                let needsLoopFix;
                if (newPosition < swiper.maxTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                            newPosition = swiper.maxTranslate() - bounceAmount;
                        }
                        afterBouncePosition = swiper.maxTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.maxTranslate();
                    }
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (newPosition > swiper.minTranslate()) {
                    if (params.freeMode.momentumBounce) {
                        if (newPosition - swiper.minTranslate() > bounceAmount) {
                            newPosition = swiper.minTranslate() + bounceAmount;
                        }
                        afterBouncePosition = swiper.minTranslate();
                        doBounce = true;
                        data.allowMomentumBounce = true;
                    } else {
                        newPosition = swiper.minTranslate();
                    }
                    if (params.loop && params.centeredSlides) needsLoopFix = true;
                } else if (params.freeMode.sticky) {
                    let nextSlide;
                    for (let j = 0; j < snapGrid.length; j += 1) {
                        if (snapGrid[j] > -newPosition) {
                            nextSlide = j;
                            break;
                        }
                    }
                    if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
                        newPosition = snapGrid[nextSlide];
                    } else {
                        newPosition = snapGrid[nextSlide - 1];
                    }
                    newPosition = -newPosition;
                }
                if (needsLoopFix) {
                    once('transitionEnd', () => {
                        swiper.loopFix();
                    });
                }
                // Fix duration
                if (swiper.velocity !== 0) {
                    if (rtl) {
                        momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
                    } else {
                        momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
                    }
                    if (params.freeMode.sticky) {
                        // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
                        // event, then durations can be 20+ seconds to slide one (or zero!) slides.
                        // It's easy to see this when simulating touch with mouse events. To fix this,
                        // limit single-slide swipes to the default slide duration. This also has the
                        // nice side effect of matching slide speed if the user stopped moving before
                        // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
                        // For faster swipes, also apply limits (albeit higher ones).
                        const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
                        const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
                        if (moveDistance < currentSlideSize) {
                            momentumDuration = params.speed;
                        } else if (moveDistance < 2 * currentSlideSize) {
                            momentumDuration = params.speed * 1.5;
                        } else {
                            momentumDuration = params.speed * 2.5;
                        }
                    }
                } else if (params.freeMode.sticky) {
                    swiper.slideToClosest();
                    return;
                }
                if (params.freeMode.momentumBounce && doBounce) {
                    swiper.updateProgress(afterBouncePosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    swiper.animating = true;
                    elementTransitionEnd(wrapperEl, () => {
                        if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
                        emit('momentumBounce');
                        swiper.setTransition(params.speed);
                        setTimeout(() => {
                            swiper.setTranslate(afterBouncePosition);
                            elementTransitionEnd(wrapperEl, () => {
                                if (!swiper || swiper.destroyed) return;
                                swiper.transitionEnd();
                            });
                        }, 0);
                    });
                } else if (swiper.velocity) {
                    emit('_freeModeNoMomentumRelease');
                    swiper.updateProgress(newPosition);
                    swiper.setTransition(momentumDuration);
                    swiper.setTranslate(newPosition);
                    swiper.transitionStart(true, swiper.swipeDirection);
                    if (!swiper.animating) {
                        swiper.animating = true;
                        elementTransitionEnd(wrapperEl, () => {
                            if (!swiper || swiper.destroyed) return;
                            swiper.transitionEnd();
                        });
                    }
                } else {
                    swiper.updateProgress(newPosition);
                }
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            } else if (params.freeMode.sticky) {
                swiper.slideToClosest();
                return;
            } else if (params.freeMode) {
                emit('_freeModeNoMomentumRelease');
            }
            if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
                emit('_freeModeStaticRelease');
                swiper.updateProgress();
                swiper.updateActiveIndex();
                swiper.updateSlidesClasses();
            }
        }
        Object.assign(swiper, {
            freeMode: {
                onTouchStart,
                onTouchMove,
                onTouchEnd
            }
        });
    }

    function Grid(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            grid: {
                rows: 1,
                fill: 'column'
            }
        });
        let slidesNumberEvenToRows;
        let slidesPerRow;
        let numFullColumns;
        let wasMultiRow;
        const getSpaceBetween = () => {
            let spaceBetween = swiper.params.spaceBetween;
            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiper.size;
            } else if (typeof spaceBetween === 'string') {
                spaceBetween = parseFloat(spaceBetween);
            }
            return spaceBetween;
        };
        const initSlides = slides => {
            const {
                slidesPerView
            } = swiper.params;
            const {
                rows,
                fill
            } = swiper.params.grid;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
            numFullColumns = Math.floor(slidesLength / rows);
            if (Math.floor(slidesLength / rows) === slidesLength / rows) {
                slidesNumberEvenToRows = slidesLength;
            } else {
                slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
            }
            if (slidesPerView !== 'auto' && fill === 'row') {
                slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
            }
            slidesPerRow = slidesNumberEvenToRows / rows;
        };
        const unsetSlides = () => {
            if (swiper.slides) {
                swiper.slides.forEach(slide => {
                    if (slide.swiperSlideGridSet) {
                        slide.style.height = '';
                        slide.style[swiper.getDirectionLabel('margin-top')] = '';
                    }
                });
            }
        };
        const updateSlide = (i, slide, slides) => {
            const {
                slidesPerGroup
            } = swiper.params;
            const spaceBetween = getSpaceBetween();
            const {
                rows,
                fill
            } = swiper.params.grid;
            const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : slides.length;
            // Set slides order
            let newSlideOrderIndex;
            let column;
            let row;
            if (fill === 'row' && slidesPerGroup > 1) {
                const groupIndex = Math.floor(i / (slidesPerGroup * rows));
                const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
                const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
                row = Math.floor(slideIndexInGroup / columnsInGroup);
                column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
                newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
                slide.style.order = newSlideOrderIndex;
            } else if (fill === 'column') {
                column = Math.floor(i / rows);
                row = i - column * rows;
                if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
                    row += 1;
                    if (row >= rows) {
                        row = 0;
                        column += 1;
                    }
                }
            } else {
                row = Math.floor(i / slidesPerRow);
                column = i - row * slidesPerRow;
            }
            slide.row = row;
            slide.column = column;
            slide.style.height = `calc((100% - ${(rows - 1) * spaceBetween}px) / ${rows})`;
            slide.style[swiper.getDirectionLabel('margin-top')] = row !== 0 ? spaceBetween && `${spaceBetween}px` : '';
            slide.swiperSlideGridSet = true;
        };
        const updateWrapperSize = (slideSize, snapGrid) => {
            const {
                centeredSlides,
                roundLengths
            } = swiper.params;
            const spaceBetween = getSpaceBetween();
            const {
                rows
            } = swiper.params.grid;
            swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
            swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
            if (!swiper.params.cssMode) {
                swiper.wrapperEl.style[swiper.getDirectionLabel('width')] = `${swiper.virtualSize + spaceBetween}px`;
            }
            if (centeredSlides) {
                const newSlidesGrid = [];
                for (let i = 0; i < snapGrid.length; i += 1) {
                    let slidesGridItem = snapGrid[i];
                    if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
                    if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
                }
                snapGrid.splice(0, snapGrid.length);
                snapGrid.push(...newSlidesGrid);
            }
        };
        const onInit = () => {
            wasMultiRow = swiper.params.grid && swiper.params.grid.rows > 1;
        };
        const onUpdate = () => {
            const {
                params,
                el
            } = swiper;
            const isMultiRow = params.grid && params.grid.rows > 1;
            if (wasMultiRow && !isMultiRow) {
                el.classList.remove(`${params.containerModifierClass}grid`, `${params.containerModifierClass}grid-column`);
                numFullColumns = 1;
                swiper.emitContainerClasses();
            } else if (!wasMultiRow && isMultiRow) {
                el.classList.add(`${params.containerModifierClass}grid`);
                if (params.grid.fill === 'column') {
                    el.classList.add(`${params.containerModifierClass}grid-column`);
                }
                swiper.emitContainerClasses();
            }
            wasMultiRow = isMultiRow;
        };
        on('init', onInit);
        on('update', onUpdate);
        swiper.grid = {
            initSlides,
            unsetSlides,
            updateSlide,
            updateWrapperSize
        };
    }

    function appendSlide(slides) {
        const swiper = this;
        const {
            params,
            slidesEl
        } = swiper;
        if (params.loop) {
            swiper.loopDestroy();
        }
        const appendElement = slideEl => {
            if (typeof slideEl === 'string') {
                const tempDOM = document.createElement('div');
                setInnerHTML(tempDOM, slideEl);
                slidesEl.append(tempDOM.children[0]);
                setInnerHTML(tempDOM, '');
            } else {
                slidesEl.append(slideEl);
            }
        };
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) appendElement(slides[i]);
            }
        } else {
            appendElement(slides);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
    }

    function prependSlide(slides) {
        const swiper = this;
        const {
            params,
            activeIndex,
            slidesEl
        } = swiper;
        if (params.loop) {
            swiper.loopDestroy();
        }
        let newActiveIndex = activeIndex + 1;
        const prependElement = slideEl => {
            if (typeof slideEl === 'string') {
                const tempDOM = document.createElement('div');
                setInnerHTML(tempDOM, slideEl);
                slidesEl.prepend(tempDOM.children[0]);
                setInnerHTML(tempDOM, '');
            } else {
                slidesEl.prepend(slideEl);
            }
        };
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) prependElement(slides[i]);
            }
            newActiveIndex = activeIndex + slides.length;
        } else {
            prependElement(slides);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
        const swiper = this;
        const {
            params,
            activeIndex,
            slidesEl
        } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
            swiper.recalcSlides();
        }
        const baseLength = swiper.slides.length;
        if (index <= 0) {
            swiper.prependSlide(slides);
            return;
        }
        if (index >= baseLength) {
            swiper.appendSlide(slides);
            return;
        }
        let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
        const slidesBuffer = [];
        for (let i = baseLength - 1; i >= index; i -= 1) {
            const currentSlide = swiper.slides[i];
            currentSlide.remove();
            slidesBuffer.unshift(currentSlide);
        }
        if (typeof slides === 'object' && 'length' in slides) {
            for (let i = 0; i < slides.length; i += 1) {
                if (slides[i]) slidesEl.append(slides[i]);
            }
            newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
        } else {
            slidesEl.append(slides);
        }
        for (let i = 0; i < slidesBuffer.length; i += 1) {
            slidesEl.append(slidesBuffer[i]);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeSlide(slidesIndexes) {
        const swiper = this;
        const {
            params,
            activeIndex
        } = swiper;
        let activeIndexBuffer = activeIndex;
        if (params.loop) {
            activeIndexBuffer -= swiper.loopedSlides;
            swiper.loopDestroy();
        }
        let newActiveIndex = activeIndexBuffer;
        let indexToRemove;
        if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
            for (let i = 0; i < slidesIndexes.length; i += 1) {
                indexToRemove = slidesIndexes[i];
                if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
                if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            }
            newActiveIndex = Math.max(newActiveIndex, 0);
        } else {
            indexToRemove = slidesIndexes;
            if (swiper.slides[indexToRemove]) swiper.slides[indexToRemove].remove();
            if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
            newActiveIndex = Math.max(newActiveIndex, 0);
        }
        swiper.recalcSlides();
        if (params.loop) {
            swiper.loopCreate();
        }
        if (!params.observer || swiper.isElement) {
            swiper.update();
        }
        if (params.loop) {
            swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
        } else {
            swiper.slideTo(newActiveIndex, 0, false);
        }
    }

    function removeAllSlides() {
        const swiper = this;
        const slidesIndexes = [];
        for (let i = 0; i < swiper.slides.length; i += 1) {
            slidesIndexes.push(i);
        }
        swiper.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
        let {
            swiper
        } = _ref;
        Object.assign(swiper, {
            appendSlide: appendSlide.bind(swiper),
            prependSlide: prependSlide.bind(swiper),
            addSlide: addSlide.bind(swiper),
            removeSlide: removeSlide.bind(swiper),
            removeAllSlides: removeAllSlides.bind(swiper)
        });
    }

    function effectInit(params) {
        const {
            effect,
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams,
            perspective,
            recreateShadows,
            getEffectParams
        } = params;
        on('beforeInit', () => {
            if (swiper.params.effect !== effect) return;
            swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);
            if (perspective && perspective()) {
                swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
            }
            const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
            Object.assign(swiper.params, overwriteParamsResult);
            Object.assign(swiper.originalParams, overwriteParamsResult);
        });
        on('setTranslate _virtualUpdated', () => {
            if (swiper.params.effect !== effect) return;
            setTranslate();
        });
        on('setTransition', (_s, duration) => {
            if (swiper.params.effect !== effect) return;
            setTransition(duration);
        });
        on('transitionEnd', () => {
            if (swiper.params.effect !== effect) return;
            if (recreateShadows) {
                if (!getEffectParams || !getEffectParams().slideShadows) return;
                // remove shadows
                swiper.slides.forEach(slideEl => {
                    slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => shadowEl.remove());
                });
                // create new one
                recreateShadows();
            }
        });
        let requireUpdateOnVirtual;
        on('virtualUpdate', () => {
            if (swiper.params.effect !== effect) return;
            if (!swiper.slides.length) {
                requireUpdateOnVirtual = true;
            }
            requestAnimationFrame(() => {
                if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
                    setTranslate();
                    requireUpdateOnVirtual = false;
                }
            });
        });
    }

    function effectTarget(effectParams, slideEl) {
        const transformEl = getSlideTransformEl(slideEl);
        if (transformEl !== slideEl) {
            transformEl.style.backfaceVisibility = 'hidden';
            transformEl.style['-webkit-backface-visibility'] = 'hidden';
        }
        return transformEl;
    }

    function effectVirtualTransitionEnd(_ref) {
        let {
            swiper,
            duration,
            transformElements,
            allSlides
        } = _ref;
        const {
            activeIndex
        } = swiper;
        const getSlide = el => {
            if (!el.parentElement) {
                // assume shadow root
                const slide = swiper.slides.find(slideEl => slideEl.shadowRoot && slideEl.shadowRoot === el.parentNode);
                return slide;
            }
            return el.parentElement;
        };
        if (swiper.params.virtualTranslate && duration !== 0) {
            let eventTriggered = false;
            let transitionEndTarget;
            if (allSlides) {
                transitionEndTarget = transformElements;
            } else {
                transitionEndTarget = transformElements.filter(transformEl => {
                    const el = transformEl.classList.contains('swiper-slide-transform') ? getSlide(transformEl) : transformEl;
                    return swiper.getSlideIndex(el) === activeIndex;
                });
            }
            transitionEndTarget.forEach(el => {
                elementTransitionEnd(el, () => {
                    if (eventTriggered) return;
                    if (!swiper || swiper.destroyed) return;
                    eventTriggered = true;
                    swiper.animating = false;
                    const evt = new window.CustomEvent('transitionend', {
                        bubbles: true,
                        cancelable: true
                    });
                    swiper.wrapperEl.dispatchEvent(evt);
                });
            });
        }
    }

    function EffectFade(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            fadeEffect: {
                crossFade: false
            }
        });
        const setTranslate = () => {
            const {
                slides
            } = swiper;
            const params = swiper.params.fadeEffect;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = swiper.slides[i];
                const offset = slideEl.swiperSlideOffset;
                let tx = -offset;
                if (!swiper.params.virtualTranslate) tx -= swiper.translate;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                }
                const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(slideEl.progress), 0) : 1 + Math.min(Math.max(slideEl.progress, -1), 0);
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.opacity = slideOpacity;
                targetEl.style.transform = `translate3d(${tx}px, ${ty}px, 0px)`;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: 'fade',
            swiper,
            on,
            setTranslate,
            setTransition,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    function EffectCube(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            cubeEffect: {
                slideShadows: true,
                shadow: true,
                shadowOffset: 20,
                shadowScale: 0.94
            }
        });
        const createSlideShadows = (slideEl, progress, isHorizontal) => {
            let shadowBefore = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfter = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBefore) {
                shadowBefore = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}`.split(' '));
                slideEl.append(shadowBefore);
            }
            if (!shadowAfter) {
                shadowAfter = createElement('div', `swiper-slide-shadow-cube swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}`.split(' '));
                slideEl.append(shadowAfter);
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            // create new ones
            const isHorizontal = swiper.isHorizontal();
            swiper.slides.forEach(slideEl => {
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                createSlideShadows(slideEl, progress, isHorizontal);
            });
        };
        const setTranslate = () => {
            const {
                el,
                wrapperEl,
                slides,
                width: swiperWidth,
                height: swiperHeight,
                rtlTranslate: rtl,
                size: swiperSize,
                browser
            } = swiper;
            const r = getRotateFix(swiper);
            const params = swiper.params.cubeEffect;
            const isHorizontal = swiper.isHorizontal();
            const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
            let wrapperRotate = 0;
            let cubeShadowEl;
            if (params.shadow) {
                if (isHorizontal) {
                    cubeShadowEl = swiper.wrapperEl.querySelector('.swiper-cube-shadow');
                    if (!cubeShadowEl) {
                        cubeShadowEl = createElement('div', 'swiper-cube-shadow');
                        swiper.wrapperEl.append(cubeShadowEl);
                    }
                    cubeShadowEl.style.height = `${swiperWidth}px`;
                } else {
                    cubeShadowEl = el.querySelector('.swiper-cube-shadow');
                    if (!cubeShadowEl) {
                        cubeShadowEl = createElement('div', 'swiper-cube-shadow');
                        el.append(cubeShadowEl);
                    }
                }
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let slideIndex = i;
                if (isVirtual) {
                    slideIndex = parseInt(slideEl.getAttribute('data-swiper-slide-index'), 10);
                }
                let slideAngle = slideIndex * 90;
                let round = Math.floor(slideAngle / 360);
                if (rtl) {
                    slideAngle = -slideAngle;
                    round = Math.floor(-slideAngle / 360);
                }
                const progress = Math.max(Math.min(slideEl.progress, 1), -1);
                let tx = 0;
                let ty = 0;
                let tz = 0;
                if (slideIndex % 4 === 0) {
                    tx = -round * 4 * swiperSize;
                    tz = 0;
                } else if ((slideIndex - 1) % 4 === 0) {
                    tx = 0;
                    tz = -round * 4 * swiperSize;
                } else if ((slideIndex - 2) % 4 === 0) {
                    tx = swiperSize + round * 4 * swiperSize;
                    tz = swiperSize;
                } else if ((slideIndex - 3) % 4 === 0) {
                    tx = -swiperSize;
                    tz = 3 * swiperSize + swiperSize * 4 * round;
                }
                if (rtl) {
                    tx = -tx;
                }
                if (!isHorizontal) {
                    ty = tx;
                    tx = 0;
                }
                const transform = `rotateX(${r(isHorizontal ? 0 : -slideAngle)}deg) rotateY(${r(isHorizontal ? slideAngle : 0)}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;
                if (progress <= 1 && progress > -1) {
                    wrapperRotate = slideIndex * 90 + progress * 90;
                    if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
                }
                slideEl.style.transform = transform;
                if (params.slideShadows) {
                    createSlideShadows(slideEl, progress, isHorizontal);
                }
            }
            wrapperEl.style.transformOrigin = `50% 50% -${swiperSize / 2}px`;
            wrapperEl.style['-webkit-transform-origin'] = `50% 50% -${swiperSize / 2}px`;
            if (params.shadow) {
                if (isHorizontal) {
                    cubeShadowEl.style.transform = `translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${params.shadowScale})`;
                } else {
                    const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
                    const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
                    const scale1 = params.shadowScale;
                    const scale2 = params.shadowScale / multiplier;
                    const offset = params.shadowOffset;
                    cubeShadowEl.style.transform = `scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-89.99deg)`;
                }
            }
            const zFactor = (browser.isSafari || browser.isWebView) && browser.needPerspectiveFix ? -swiperSize / 2 : 0;
            wrapperEl.style.transform = `translate3d(0px,0,${zFactor}px) rotateX(${r(swiper.isHorizontal() ? 0 : wrapperRotate)}deg) rotateY(${r(swiper.isHorizontal() ? -wrapperRotate : 0)}deg)`;
            wrapperEl.style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
        };
        const setTransition = duration => {
            const {
                el,
                slides
            } = swiper;
            slides.forEach(slideEl => {
                slideEl.style.transitionDuration = `${duration}ms`;
                slideEl.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(subEl => {
                    subEl.style.transitionDuration = `${duration}ms`;
                });
            });
            if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
                const shadowEl = el.querySelector('.swiper-cube-shadow');
                if (shadowEl) shadowEl.style.transitionDuration = `${duration}ms`;
            }
        };
        effectInit({
            effect: 'cube',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.cubeEffect,
            perspective: () => true,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: false,
                virtualTranslate: true
            })
        });
    }

    function createShadow(suffix, slideEl, side) {
        const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}${suffix ? ` swiper-slide-shadow-${suffix}` : ''}`;
        const shadowContainer = getSlideTransformEl(slideEl);
        let shadowEl = shadowContainer.querySelector(`.${shadowClass.split(' ').join('.')}`);
        if (!shadowEl) {
            shadowEl = createElement('div', shadowClass.split(' '));
            shadowContainer.append(shadowEl);
        }
        return shadowEl;
    }

    function EffectFlip(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            flipEffect: {
                slideShadows: true,
                limitRotation: true
            }
        });
        const createSlideShadows = (slideEl, progress) => {
            let shadowBefore = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
            let shadowAfter = swiper.isHorizontal() ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
            if (!shadowBefore) {
                shadowBefore = createShadow('flip', slideEl, swiper.isHorizontal() ? 'left' : 'top');
            }
            if (!shadowAfter) {
                shadowAfter = createShadow('flip', slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
            }
            if (shadowBefore) shadowBefore.style.opacity = Math.max(-progress, 0);
            if (shadowAfter) shadowAfter.style.opacity = Math.max(progress, 0);
        };
        const recreateShadows = () => {
            // Set shadows
            swiper.params.flipEffect;
            swiper.slides.forEach(slideEl => {
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min(slideEl.progress, 1), -1);
                }
                createSlideShadows(slideEl, progress);
            });
        };
        const setTranslate = () => {
            const {
                slides,
                rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.flipEffect;
            const rotateFix = getRotateFix(swiper);
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                let progress = slideEl.progress;
                if (swiper.params.flipEffect.limitRotation) {
                    progress = Math.max(Math.min(slideEl.progress, 1), -1);
                }
                const offset = slideEl.swiperSlideOffset;
                const rotate = -180 * progress;
                let rotateY = rotate;
                let rotateX = 0;
                let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let ty = 0;
                if (!swiper.isHorizontal()) {
                    ty = tx;
                    tx = 0;
                    rotateX = -rotateY;
                    rotateY = 0;
                } else if (rtl) {
                    rotateY = -rotateY;
                }
                slideEl.style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
                if (params.slideShadows) {
                    createSlideShadows(slideEl, progress);
                }
                const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateFix(rotateX)}deg) rotateY(${rotateFix(rotateY)}deg)`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: 'flip',
            swiper,
            on,
            setTranslate,
            setTransition,
            recreateShadows,
            getEffectParams: () => swiper.params.flipEffect,
            perspective: () => true,
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: true,
                spaceBetween: 0,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    function EffectCoverflow(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                scale: 1,
                modifier: 1,
                slideShadows: true
            }
        });
        const setTranslate = () => {
            const {
                width: swiperWidth,
                height: swiperHeight,
                slides,
                slidesSizesGrid
            } = swiper;
            const params = swiper.params.coverflowEffect;
            const isHorizontal = swiper.isHorizontal();
            const transform = swiper.translate;
            const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
            const rotate = isHorizontal ? params.rotate : -params.rotate;
            const translate = params.depth;
            const r = getRotateFix(swiper);
            // Each slide offset from center
            for (let i = 0, length = slides.length; i < length; i += 1) {
                const slideEl = slides[i];
                const slideSize = slidesSizesGrid[i];
                const slideOffset = slideEl.swiperSlideOffset;
                const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
                const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
                let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
                let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
                // var rotateZ = 0
                let translateZ = -translate * Math.abs(offsetMultiplier);
                let stretch = params.stretch;
                // Allow percentage to make a relative stretch for responsive sliders
                if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
                    stretch = parseFloat(params.stretch) / 100 * slideSize;
                }
                let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
                let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
                let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier);
                // Fix for ultra small values
                if (Math.abs(translateX) < 0.001) translateX = 0;
                if (Math.abs(translateY) < 0.001) translateY = 0;
                if (Math.abs(translateZ) < 0.001) translateZ = 0;
                if (Math.abs(rotateY) < 0.001) rotateY = 0;
                if (Math.abs(rotateX) < 0.001) rotateX = 0;
                if (Math.abs(scale) < 0.001) scale = 0;
                const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${r(rotateX)}deg) rotateY(${r(rotateY)}deg) scale(${scale})`;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = slideTransform;
                slideEl.style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
                if (params.slideShadows) {
                    // Set shadows
                    let shadowBeforeEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-left') : slideEl.querySelector('.swiper-slide-shadow-top');
                    let shadowAfterEl = isHorizontal ? slideEl.querySelector('.swiper-slide-shadow-right') : slideEl.querySelector('.swiper-slide-shadow-bottom');
                    if (!shadowBeforeEl) {
                        shadowBeforeEl = createShadow('coverflow', slideEl, isHorizontal ? 'left' : 'top');
                    }
                    if (!shadowAfterEl) {
                        shadowAfterEl = createShadow('coverflow', slideEl, isHorizontal ? 'right' : 'bottom');
                    }
                    if (shadowBeforeEl) shadowBeforeEl.style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
                    if (shadowAfterEl) shadowAfterEl.style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
        };
        effectInit({
            effect: 'coverflow',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
                watchSlidesProgress: true
            })
        });
    }

    function EffectCreative(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            creativeEffect: {
                limitProgress: 1,
                shadowPerProgress: false,
                progressMultiplier: 1,
                perspective: true,
                prev: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                },
                next: {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    opacity: 1,
                    scale: 1
                }
            }
        });
        const getTranslateValue = value => {
            if (typeof value === 'string') return value;
            return `${value}px`;
        };
        const setTranslate = () => {
            const {
                slides,
                wrapperEl,
                slidesSizesGrid
            } = swiper;
            const params = swiper.params.creativeEffect;
            const {
                progressMultiplier: multiplier
            } = params;
            const isCenteredSlides = swiper.params.centeredSlides;
            const rotateFix = getRotateFix(swiper);
            if (isCenteredSlides) {
                const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
                wrapperEl.style.transform = `translateX(calc(50% - ${margin}px))`;
            }
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideEl.progress, -params.limitProgress), params.limitProgress);
                let originalProgress = progress;
                if (!isCenteredSlides) {
                    originalProgress = Math.min(Math.max(slideEl.originalProgress, -params.limitProgress), params.limitProgress);
                }
                const offset = slideEl.swiperSlideOffset;
                const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
                const r = [0, 0, 0];
                let custom = false;
                if (!swiper.isHorizontal()) {
                    t[1] = t[0];
                    t[0] = 0;
                }
                let data = {
                    translate: [0, 0, 0],
                    rotate: [0, 0, 0],
                    scale: 1,
                    opacity: 1
                };
                if (progress < 0) {
                    data = params.next;
                    custom = true;
                } else if (progress > 0) {
                    data = params.prev;
                    custom = true;
                }
                // set translate
                t.forEach((value, index) => {
                    t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
                });
                // set rotates
                r.forEach((value, index) => {
                    let val = data.rotate[index] * Math.abs(progress * multiplier);
                    r[index] = val;
                });
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const translateString = t.join(', ');
                const rotateString = `rotateX(${rotateFix(r[0])}deg) rotateY(${rotateFix(r[1])}deg) rotateZ(${rotateFix(r[2])}deg)`;
                const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
                const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
                const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`;
                // Set shadows
                if (custom && data.shadow || !custom) {
                    let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                    if (!shadowEl && data.shadow) {
                        shadowEl = createShadow('creative', slideEl);
                    }
                    if (shadowEl) {
                        const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
                        shadowEl.style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
                    }
                }
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
                targetEl.style.opacity = opacityString;
                if (data.origin) {
                    targetEl.style.transformOrigin = data.origin;
                }
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements,
                allSlides: true
            });
        };
        effectInit({
            effect: 'creative',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => swiper.params.creativeEffect.perspective,
            overwriteParams: () => ({
                watchSlidesProgress: true,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }

    function EffectCards(_ref) {
        let {
            swiper,
            extendParams,
            on
        } = _ref;
        extendParams({
            cardsEffect: {
                slideShadows: true,
                rotate: true,
                perSlideRotate: 2,
                perSlideOffset: 8
            }
        });
        const setTranslate = () => {
            const {
                slides,
                activeIndex,
                rtlTranslate: rtl
            } = swiper;
            const params = swiper.params.cardsEffect;
            const {
                startTranslate,
                isTouched
            } = swiper.touchEventsData;
            const currentTranslate = rtl ? -swiper.translate : swiper.translate;
            for (let i = 0; i < slides.length; i += 1) {
                const slideEl = slides[i];
                const slideProgress = slideEl.progress;
                const progress = Math.min(Math.max(slideProgress, -4), 4);
                let offset = slideEl.swiperSlideOffset;
                if (swiper.params.centeredSlides && !swiper.params.cssMode) {
                    swiper.wrapperEl.style.transform = `translateX(${swiper.minTranslate()}px)`;
                }
                if (swiper.params.centeredSlides && swiper.params.cssMode) {
                    offset -= slides[0].swiperSlideOffset;
                }
                let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
                let tY = 0;
                const tZ = -100 * Math.abs(progress);
                let scale = 1;
                let rotate = -params.perSlideRotate * progress;
                let tXAdd = params.perSlideOffset - Math.abs(progress) * 0.75;
                const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
                const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
                const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;
                if (isSwipeToNext || isSwipeToPrev) {
                    const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
                    rotate += -28 * progress * subProgress;
                    scale += -0.5 * subProgress;
                    tXAdd += 96 * subProgress;
                    tY = `${-25 * subProgress * Math.abs(progress)}%`;
                }
                if (progress < 0) {
                    // next
                    tX = `calc(${tX}px ${rtl ? '-' : '+'} (${tXAdd * Math.abs(progress)}%))`;
                } else if (progress > 0) {
                    // prev
                    tX = `calc(${tX}px ${rtl ? '-' : '+'} (-${tXAdd * Math.abs(progress)}%))`;
                } else {
                    tX = `${tX}px`;
                }
                if (!swiper.isHorizontal()) {
                    const prevY = tY;
                    tY = tX;
                    tX = prevY;
                }
                const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
                /* eslint-disable */
                const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rtl ? -rotate : rotate : 0}deg)
        scale(${scaleString})
      `;
                /* eslint-enable */
                if (params.slideShadows) {
                    // Set shadows
                    let shadowEl = slideEl.querySelector('.swiper-slide-shadow');
                    if (!shadowEl) {
                        shadowEl = createShadow('cards', slideEl);
                    }
                    if (shadowEl) shadowEl.style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
                }
                slideEl.style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
                const targetEl = effectTarget(params, slideEl);
                targetEl.style.transform = transform;
            }
        };
        const setTransition = duration => {
            const transformElements = swiper.slides.map(slideEl => getSlideTransformEl(slideEl));
            transformElements.forEach(el => {
                el.style.transitionDuration = `${duration}ms`;
                el.querySelectorAll('.swiper-slide-shadow').forEach(shadowEl => {
                    shadowEl.style.transitionDuration = `${duration}ms`;
                });
            });
            effectVirtualTransitionEnd({
                swiper,
                duration,
                transformElements
            });
        };
        effectInit({
            effect: 'cards',
            swiper,
            on,
            setTranslate,
            setTransition,
            perspective: () => true,
            overwriteParams: () => ({
                _loopSwapReset: false,
                watchSlidesProgress: true,
                loopAdditionalSlides: swiper.params.cardsEffect.rotate ? 3 : 2,
                centeredSlides: true,
                virtualTranslate: !swiper.params.cssMode
            })
        });
    }
    /**
     * Swiper 11.2.10
     * Most modern mobile touch slider and framework with hardware accelerated transitions
     * https://swiperjs.com
     *
     * Copyright 2014-2025 Vladimir Kharlampidi
     *
     * Released under the MIT License
     *
     * Released on: June 28, 2025
     */
    // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);
    return Swiper;
})();
var App = (function() {
    'use strict';
    var screen = null;
    var music = null;
    var currentTemplate = null;
    var config = {
        music: {
            src: "audio/menutheme_enhanced.ogg",
            volume: 0.5,
            autoplay: true
        },
        button: {
            hoverSound: "audio/kenney_interface-sounds/Audio/bong_001.ogg",
            clickSound: "audio/kenney_interface-sounds/Audio/click_002.ogg",
            successSound: "audio/kenney_interface-sounds/Audio/confirmation_001.ogg",
            cancelSound: "audio/kenney_interface-sounds/Audio/drop_004.ogg",
            errorSound: "audio/kenney_interface-sounds/Audio/minimize_006.ogg"
        }
    }
    var init = function() {
        this.screen = document.querySelector("#screen");
        this.music = document.querySelector("#music");
        this.music.src = this.config.music.src;
        this.music.volume = this.config.music.volume;
        // adding _this_ as event handler will result in the special 
        // handleEvent function being called
        document.addEventListener('keydown', this, false);
        Focus.init();
        this.load("#desktop-template");
    }
    var load = function(templateId) {
        Focus.blur();
        this.screen.innerHTML = "";
        const template = document.querySelector(templateId);
        const clone = template.content.cloneNode(true);
        this.screen.appendChild(clone);
        this.currentTemplate = templateId;
        // init button objects
        document.querySelectorAll('button').forEach((button, index) => {
            Button.init(button);
        });
    }
    var reload = function() {
        this.load(this.currentTemplate);
    }
    var toggleMusic = function() {
        if (this.music.paused) this.music.play();
        else this.music.pause();
    }
    var quit = function() {
        this.load('#desktop-template');
        this.music.pause();
        this.music.currentTime = 0;
    }
    var handleEvent = function(event) {
        switch (event.type) {
            case 'keydown':
                if (event.key === "m") this.toggleMusic();
                else if (event.key === "1") this.load("#title-screen-template");
                else if (event.key === "2") this.load("#main-menu-template");
                else if (event.key === "3") this.load("#game-mode-screen-template");
                else if (event.key === "r") this.reload();
                else if (event.key === "Escape") this.quit();
                break;
        }
    };
    return {
        config: config,
        currentTemplate: currentTemplate,
        init: init,
        load: load,
        reload: reload,
        toggleMusic: toggleMusic,
        handleEvent: handleEvent,
        quit: quit
    }
})();
document.addEventListener('DOMContentLoaded', function() {
    App.init();
});
var Button = (function() {
    'use strict';
    var init = function(element) {
        element.addEventListener("mouseenter", (e) => {
            e.target.focus();
        });
        element.addEventListener("focus", (e) => {
            new Audio(App.config.button.hoverSound).play();
            Focus.focus(e.target);
        });
        element.addEventListener("mouseleave", (e) => {
            e.target.blur();
        });
        element.addEventListener("blur", (e) => {
            // new Audio("audio/kenney_ui-audio/Audio/mouserelease1.ogg").play();
            Focus.blur();
        });
        element.addEventListener("pointerdown", (e) => {
            new Audio(App.config.button.clickSound).play();
            // new Audio("audio/kenney_ui-audio/Audio/switch18.ogg").play();
        });
        element.addEventListener("pointerup", (e) => {
            if (e.target.dataset.successSound) {
                new Audio(App.config.button.successSound).play();
            } else if (e.target.dataset.cancelSound) {
                new Audio(App.config.button.cancelSound).play();
            } else if (e.target.dataset.errorSound) {
                new Audio(App.config.button.errorSound).play();
            }
        });
    }
    return {
        init: init
    }
})();
var Focus = (function() {
    'use strict';
    var element = null;
    var init = function(element) {
        this.element = document.createElement("div");
        this.element.id = "focus";
        for (let i = 0; i < 4; i++) {
            let corner = document.createElement("div");
            corner.className = "corner";
            this.element.append(corner);
        }
        document.body.append(this.element);
    }
    var focus = function(element) {
        let offset = cumulativeOffset(element);
        let border = parseInt(window.getComputedStyle(element, null).borderWidth);
        this.element.style.width = element.clientWidth + "px";
        this.element.style.height = element.clientHeight + "px";
        this.element.style.left = offset.left + border + "px";
        this.element.style.top = offset.top + border + "px";
        this.element.classList.toggle("small", element.classList.contains("small"));
        this.element.classList.toggle("text", element.classList.contains("text"));
        this.element.classList.add("active");
    }
    var blur = function() {
        this.element.classList.remove("active");
    }
    var cumulativeOffset = function(element) {
        var top = 0,
            left = 0;
        do {
            top += element.offsetTop || 0;
            left += element.offsetLeft || 0;
            element = element.offsetParent;
        } while (element);
        return {
            top: top,
            left: left
        };
    };
    return {
        init: init,
        focus: focus,
        blur: blur,
    }
})();
var Desktop = (function() {
    'use strict';
    var desktop = null;
    var appIcon = null;
    var init = function() {
        this.desktop = document.querySelector("#desktop");
        this.desktop = document.querySelector("#desktop");
        this.desktop.addEventListener("pointerdown", (e) => {
            Desktop.setAppIconFocus(false);
            e.stopPropagation();
        });
        this.appIcon = document.querySelector(".app-icon");
        this.appIcon.addEventListener("pointerdown", (e) => {
            Desktop.setAppIconFocus(true);
            e.stopPropagation();
        });
        this.appIcon.addEventListener("dblclick", (e) => {
            Desktop.startApp();
        });
    }
    var setAppIconFocus = function(state) {
        this.appIcon.classList.toggle("focussed", state);
    }
    var startApp = function() {
        this.setAppIconFocus(false);
        gsap.to(this.appIcon, {
            scale: 3,
            opacity: 0,
            duration: 0.333,
            onComplete: function() {
                App.load('#title-screen-template');
            }
        })
    }
    var hide = function() {}
    return {
        init: init,
        hide: hide,
        setAppIconFocus: setAppIconFocus,
        startApp: startApp,
        appIcon: appIcon
    }
})();
var TitleScreen = (function() {
    'use strict';
    var init = function() {
        if (App.config.music.autoplay) App.music.play();
        gsap.fromTo("#title-screen .background", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2,
        });
        gsap.fromTo("#title-screen .logo, #title-screen .loading", {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1,
            scale: 1,
            stagger: 0.1,
            delay: 0.166,
            duration: 0.5,
            ease: "back"
        });
        gsap.to("#title-screen .loading .progress .slider", {
            width: "100%",
            duration: 1.5,
            delay: 1,
            ease: "linear",
            onComplete: finishLoading
        });
    }
    var finishLoading = function() {
        gsap.to("#title-screen .loading", {
            opacity: 0,
            duration: 0.5,
            delay: 0.333
        });
        gsap.fromTo("#title-screen .start-button", {
            opacity: 0,
            scale: 0.9
        }, {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            delay: 0.333,
            ease: "back",
            onComplete: function() {
                let b = document.querySelector("#title-screen .start-button");
                Focus.focus(b);
                b.focus();
            }
        });
        gsap.to("#title-screen .start-button", {
            color: "var(--color-grey-2)",
            repeat: -1,
            yoyo: true,
            yoyoEase: "power1.inOut",
            duration: 0.666
        });
    }
    var hide = function() {}
    return {
        init: init,
        hide: hide
    }
})();
var MainMenu = (function() {
    'use strict';
    var init = function() {
        gsap.fromTo("#main-menu .background", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.666,
        });
        gsap.fromTo("#player-menu button", {
            opacity: 0,
            left: -120
        }, {
            opacity: 1,
            left: 0,
            stagger: 0.1,
            duration: 0.333,
            ease: "back"
        })
    }
    var hide = function() {}
    return {
        init: init,
        hide: hide
    }
})();
var GameModeScreen = (function() {
    'use strict';
    var init = function() {
        gsap.fromTo("#game-mode-menu button", {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.333,
            stagger: 0.05,
        })
    }
    var hide = function() {}
    return {
        init: init,
        hide: hide
    }
})();
