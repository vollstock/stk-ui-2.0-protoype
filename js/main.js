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
