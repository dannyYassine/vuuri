var Js = typeof global == "object" && global && global.Object === Object && global, Zs = typeof self == "object" && self && self.Object === Object && self, ai = Js || Zs || Function("return this")(), Zt = ai.Symbol, wn = Object.prototype, Qs = wn.hasOwnProperty, to = wn.toString, ae = Zt ? Zt.toStringTag : void 0;
function eo(t) {
  var e = Qs.call(t, ae), i = t[ae];
  try {
    t[ae] = void 0;
    var r = !0;
  } catch {
  }
  var n = to.call(t);
  return r && (e ? t[ae] = i : delete t[ae]), n;
}
var io = Object.prototype, ro = io.toString;
function no(t) {
  return ro.call(t);
}
var so = "[object Null]", oo = "[object Undefined]", Ar = Zt ? Zt.toStringTag : void 0;
function Zi(t) {
  return t == null ? t === void 0 ? oo : so : Ar && Ar in Object(t) ? eo(t) : no(t);
}
function li(t) {
  return t != null && typeof t == "object";
}
var ao = "[object Symbol]";
function lo(t) {
  return typeof t == "symbol" || li(t) && Zi(t) == ao;
}
function ho(t, e) {
  for (var i = -1, r = t == null ? 0 : t.length, n = Array(r); ++i < r; )
    n[i] = e(t[i], i, t);
  return n;
}
var uo = Array.isArray, co = /\s/;
function fo(t) {
  for (var e = t.length; e-- && co.test(t.charAt(e)); )
    ;
  return e;
}
var _o = /^\s+/;
function po(t) {
  return t && t.slice(0, fo(t) + 1).replace(_o, "");
}
function _e(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var xr = NaN, go = /^[-+]0x[0-9a-f]+$/i, vo = /^0b[01]+$/i, mo = /^0o[0-7]+$/i, yo = parseInt;
function Rr(t) {
  if (typeof t == "number")
    return t;
  if (lo(t))
    return xr;
  if (_e(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = _e(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = po(t);
  var i = vo.test(t);
  return i || mo.test(t) ? yo(t.slice(2), i ? 2 : 8) : go.test(t) ? xr : +t;
}
function bn(t) {
  return t;
}
var So = "[object AsyncFunction]", Eo = "[object Function]", wo = "[object GeneratorFunction]", bo = "[object Proxy]";
function Dn(t) {
  if (!_e(t))
    return !1;
  var e = Zi(t);
  return e == Eo || e == wo || e == So || e == bo;
}
var Ii = ai["__core-js_shared__"], Or = function() {
  var t = /[^.]+$/.exec(Ii && Ii.keys && Ii.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Do(t) {
  return !!Or && Or in t;
}
var To = Function.prototype, Io = To.toString;
function Ao(t) {
  if (t != null) {
    try {
      return Io.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var xo = /[\\^$.*+?()[\]{}|]/g, Ro = /^\[object .+?Constructor\]$/, Oo = Function.prototype, No = Object.prototype, Co = Oo.toString, Lo = No.hasOwnProperty, Po = RegExp(
  "^" + Co.call(Lo).replace(xo, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Mo(t) {
  if (!_e(t) || Do(t))
    return !1;
  var e = Dn(t) ? Po : Ro;
  return e.test(Ao(t));
}
function Vo(t, e) {
  return t == null ? void 0 : t[e];
}
function Qi(t, e) {
  var i = Vo(t, e);
  return Mo(i) ? i : void 0;
}
function ko(t, e, i) {
  switch (i.length) {
    case 0:
      return t.call(e);
    case 1:
      return t.call(e, i[0]);
    case 2:
      return t.call(e, i[0], i[1]);
    case 3:
      return t.call(e, i[0], i[1], i[2]);
  }
  return t.apply(e, i);
}
var Yo = 800, Ho = 16, Xo = Date.now;
function Go(t) {
  var e = 0, i = 0;
  return function() {
    var r = Xo(), n = Ho - (r - i);
    if (i = r, n > 0) {
      if (++e >= Yo)
        return arguments[0];
    } else
      e = 0;
    return t.apply(void 0, arguments);
  };
}
function $o(t) {
  return function() {
    return t;
  };
}
var Nr = function() {
  try {
    var t = Qi(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Fo = Nr ? function(t, e) {
  return Nr(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: $o(e),
    writable: !0
  });
} : bn;
const qo = Fo;
var Wo = Go(qo);
function jo(t, e, i, r) {
  for (var n = t.length, s = i + (r ? 1 : -1); r ? s-- : ++s < n; )
    if (e(t[s], s, t))
      return s;
  return -1;
}
function Bo(t) {
  return t !== t;
}
function zo(t, e, i) {
  for (var r = i - 1, n = t.length; ++r < n; )
    if (t[r] === e)
      return r;
  return -1;
}
function Ko(t, e, i) {
  return e === e ? zo(t, e, i) : jo(t, Bo, i);
}
function Uo(t, e) {
  var i = t == null ? 0 : t.length;
  return !!i && Ko(t, e, 0) > -1;
}
function Jo(t, e) {
  return t === e || t !== t && e !== e;
}
var Cr = Math.max;
function Zo(t, e, i) {
  return e = Cr(e === void 0 ? t.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, s = Cr(r.length - e, 0), o = Array(s); ++n < s; )
      o[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(o), ko(t, this, a);
  };
}
function Qo(t, e) {
  return Wo(Zo(t, e, bn), t + "");
}
var ta = 9007199254740991;
function ea(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ta;
}
function ia(t) {
  return t != null && ea(t.length) && !Dn(t);
}
var ra = "[object Arguments]";
function Lr(t) {
  return li(t) && Zi(t) == ra;
}
var Tn = Object.prototype, na = Tn.hasOwnProperty, sa = Tn.propertyIsEnumerable, oa = Lr(/* @__PURE__ */ function() {
  return arguments;
}()) ? Lr : function(t) {
  return li(t) && na.call(t, "callee") && !sa.call(t, "callee");
};
function aa(t) {
  return function(e) {
    return t(e);
  };
}
var pe = Qi(Object, "create");
function la() {
  this.__data__ = pe ? pe(null) : {}, this.size = 0;
}
function ha(t) {
  var e = this.has(t) && delete this.__data__[t];
  return this.size -= e ? 1 : 0, e;
}
var ua = "__lodash_hash_undefined__", ca = Object.prototype, fa = ca.hasOwnProperty;
function da(t) {
  var e = this.__data__;
  if (pe) {
    var i = e[t];
    return i === ua ? void 0 : i;
  }
  return fa.call(e, t) ? e[t] : void 0;
}
var _a = Object.prototype, pa = _a.hasOwnProperty;
function ga(t) {
  var e = this.__data__;
  return pe ? e[t] !== void 0 : pa.call(e, t);
}
var va = "__lodash_hash_undefined__";
function ma(t, e) {
  var i = this.__data__;
  return this.size += this.has(t) ? 0 : 1, i[t] = pe && e === void 0 ? va : e, this;
}
function Ht(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
Ht.prototype.clear = la;
Ht.prototype.delete = ha;
Ht.prototype.get = da;
Ht.prototype.has = ga;
Ht.prototype.set = ma;
function ya() {
  this.__data__ = [], this.size = 0;
}
function hi(t, e) {
  for (var i = t.length; i--; )
    if (Jo(t[i][0], e))
      return i;
  return -1;
}
var Sa = Array.prototype, Ea = Sa.splice;
function wa(t) {
  var e = this.__data__, i = hi(e, t);
  if (i < 0)
    return !1;
  var r = e.length - 1;
  return i == r ? e.pop() : Ea.call(e, i, 1), --this.size, !0;
}
function ba(t) {
  var e = this.__data__, i = hi(e, t);
  return i < 0 ? void 0 : e[i][1];
}
function Da(t) {
  return hi(this.__data__, t) > -1;
}
function Ta(t, e) {
  var i = this.__data__, r = hi(i, t);
  return r < 0 ? (++this.size, i.push([t, e])) : i[r][1] = e, this;
}
function re(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
re.prototype.clear = ya;
re.prototype.delete = wa;
re.prototype.get = ba;
re.prototype.has = Da;
re.prototype.set = Ta;
var Ia = Qi(ai, "Map");
function Aa() {
  this.size = 0, this.__data__ = {
    hash: new Ht(),
    map: new (Ia || re)(),
    string: new Ht()
  };
}
function xa(t) {
  var e = typeof t;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t !== "__proto__" : t === null;
}
function ui(t, e) {
  var i = t.__data__;
  return xa(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function Ra(t) {
  var e = ui(this, t).delete(t);
  return this.size -= e ? 1 : 0, e;
}
function Oa(t) {
  return ui(this, t).get(t);
}
function Na(t) {
  return ui(this, t).has(t);
}
function Ca(t, e) {
  var i = ui(this, t), r = i.size;
  return i.set(t, e), this.size += i.size == r ? 0 : 1, this;
}
function ne(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.clear(); ++e < i; ) {
    var r = t[e];
    this.set(r[0], r[1]);
  }
}
ne.prototype.clear = Aa;
ne.prototype.delete = Ra;
ne.prototype.get = Oa;
ne.prototype.has = Na;
ne.prototype.set = Ca;
function La(t, e) {
  for (var i = -1, r = e.length, n = t.length; ++i < r; )
    t[n + i] = e[i];
  return t;
}
var Pr = Zt ? Zt.isConcatSpreadable : void 0;
function Pa(t) {
  return uo(t) || oa(t) || !!(Pr && t && t[Pr]);
}
function In(t, e, i, r, n) {
  var s = -1, o = t.length;
  for (i || (i = Pa), n || (n = []); ++s < o; ) {
    var a = t[s];
    e > 0 && i(a) ? e > 1 ? In(a, e - 1, i, r, n) : La(n, a) : r || (n[n.length] = a);
  }
  return n;
}
var Ma = "__lodash_hash_undefined__";
function Va(t) {
  return this.__data__.set(t, Ma), this;
}
function ka(t) {
  return this.__data__.has(t);
}
function Be(t) {
  var e = -1, i = t == null ? 0 : t.length;
  for (this.__data__ = new ne(); ++e < i; )
    this.add(t[e]);
}
Be.prototype.add = Be.prototype.push = Va;
Be.prototype.has = ka;
function Ya(t, e) {
  return t.has(e);
}
var Ai = function() {
  return ai.Date.now();
}, Ha = "Expected a function", Xa = Math.max, Ga = Math.min;
function $a(t, e, i) {
  var r, n, s, o, a, l, h = 0, c = !1, u = !1, g = !0;
  if (typeof t != "function")
    throw new TypeError(Ha);
  e = Rr(e) || 0, _e(i) && (c = !!i.leading, u = "maxWait" in i, s = u ? Xa(Rr(i.maxWait) || 0, e) : s, g = "trailing" in i ? !!i.trailing : g);
  function m(S) {
    var O = r, C = n;
    return r = n = void 0, h = S, o = t.apply(C, O), o;
  }
  function w(S) {
    return h = S, a = setTimeout(y, e), c ? m(S) : o;
  }
  function f(S) {
    var O = S - l, C = S - h, A = e - O;
    return u ? Ga(A, s - C) : A;
  }
  function d(S) {
    var O = S - l, C = S - h;
    return l === void 0 || O >= e || O < 0 || u && C >= s;
  }
  function y() {
    var S = Ai();
    if (d(S))
      return p(S);
    a = setTimeout(y, f(S));
  }
  function p(S) {
    return a = void 0, g && r ? m(S) : (r = n = void 0, o);
  }
  function E() {
    a !== void 0 && clearTimeout(a), h = 0, r = l = n = a = void 0;
  }
  function v() {
    return a === void 0 ? o : p(Ai());
  }
  function b() {
    var S = Ai(), O = d(S);
    if (r = arguments, n = this, l = S, O) {
      if (a === void 0)
        return w(l);
      if (u)
        return clearTimeout(a), a = setTimeout(y, e), m(l);
    }
    return a === void 0 && (a = setTimeout(y, e)), o;
  }
  return b.cancel = E, b.flush = v, b;
}
function xi(t) {
  return li(t) && ia(t);
}
function Fa(t, e, i) {
  for (var r = -1, n = t == null ? 0 : t.length; ++r < n; )
    if (i(e, t[r]))
      return !0;
  return !1;
}
var qa = 200;
function Wa(t, e, i, r) {
  var n = -1, s = Uo, o = !0, a = t.length, l = [], h = e.length;
  if (!a)
    return l;
  i && (e = ho(e, aa(i))), r ? (s = Fa, o = !1) : e.length >= qa && (s = Ya, o = !1, e = new Be(e));
  t:
    for (; ++n < a; ) {
      var c = t[n], u = i == null ? c : i(c);
      if (c = r || c !== 0 ? c : 0, o && u === u) {
        for (var g = h; g--; )
          if (e[g] === u)
            continue t;
        l.push(c);
      } else
        s(e, u, r) || l.push(c);
    }
  return l;
}
function ja(t) {
  var e = t == null ? 0 : t.length;
  return e ? t[e - 1] : void 0;
}
var Ba = Qo(function(t, e) {
  var i = ja(e);
  return xi(i) && (i = void 0), xi(t) ? Wa(t, In(e, 1, xi, !0), void 0, i) : [];
});
const za = Ba;
/**
* Muuri v0.9.5
* https://muuri.dev/
* Copyright (c) 2015-present, Haltu Oy
* Released under the MIT license
* https://github.com/haltu/muuri/blob/master/LICENSE.md
* @license MIT
*
* Muuri Packer
* Copyright (c) 2016-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri Ticker / Muuri Emitter / Muuri Dragger
* Copyright (c) 2018-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*
* Muuri AutoScroller
* Copyright (c) 2019-present, Niklas Rämö <inramo@gmail.com>
* @license MIT
*/
var ci = {}, Lt = typeof Map == "function" ? /* @__PURE__ */ new Map() : null, ut = "swap", Xt = "move", Ka = "synchronize", It = "layoutStart", Mr = "layoutEnd", Vr = "layoutAbort", kr = "add", Yr = "remove", Ua = "showStart", Ja = "showEnd", ge = "hideStart", Za = "hideEnd", Hr = "filter", Xr = "sort", ze = "move", Ke = "send", At = "beforeSend", Ue = "receive", Je = "beforeReceive", Qa = "dragInit", tl = "dragStart", el = "dragMove", il = "dragScroll", rl = "dragEnd", nl = "dragReleaseStart", ve = "dragReleaseEnd", sl = "destroy", An = "ontouchstart" in window, tr = !!window.PointerEvent, er = !!window.navigator.msPointerEnabled, ol = 16777216;
function nt() {
  this._events = {}, this._queue = [], this._counter = 0, this._clearOnEmit = !1;
}
nt.prototype.on = function(t, e) {
  if (!this._events || !t || !e)
    return this;
  var i = this._events[t];
  return i || (i = this._events[t] = []), i.push(e), this;
};
nt.prototype.off = function(t, e) {
  if (!this._events || !t || !e)
    return this;
  var i = this._events[t];
  if (!i || !i.length)
    return this;
  for (var r; (r = i.indexOf(e)) !== -1; )
    i.splice(r, 1);
  return this;
};
nt.prototype.clear = function(t) {
  if (!this._events || !t)
    return this;
  var e = this._events[t];
  return e && (e.length = 0, delete this._events[t]), this;
};
nt.prototype.emit = function(t) {
  if (!this._events || !t)
    return this._clearOnEmit = !1, this;
  var e = this._events[t];
  if (!e || !e.length)
    return this._clearOnEmit = !1, this;
  var i = this._queue, r = i.length, n = arguments.length - 1, s;
  n > 3 && (s = [], s.push.apply(s, arguments), s.shift()), i.push.apply(i, e), this._clearOnEmit && (e.length = 0, this._clearOnEmit = !1), ++this._counter;
  for (var o = r, a = i.length; o < a; o++)
    if (n === 0 ? i[o]() : n === 1 ? i[o](arguments[1]) : n === 2 ? i[o](arguments[1], arguments[2]) : n === 3 ? i[o](arguments[1], arguments[2], arguments[3]) : i[o].apply(null, s), !this._events)
      return this;
  return --this._counter, this._counter || (i.length = 0), this;
};
nt.prototype.burst = function() {
  return this._events ? (this._clearOnEmit = !0, this.emit.apply(this, arguments), this) : this;
};
nt.prototype.countListeners = function(t) {
  if (!this._events)
    return 0;
  var e = this._events[t];
  return e ? e.length : 0;
};
nt.prototype.destroy = function() {
  return this._events ? (this._queue.length = this._counter = 0, this._events = null, this) : this;
};
var fi = tr ? "pointerout" : er ? "MSPointerOut" : "", al = 100;
function Rt(t) {
  fi && (this._dragger = t, this._timeout = null, this._outEvent = null, this._isActive = !1, this._addBehaviour = this._addBehaviour.bind(this), this._removeBehaviour = this._removeBehaviour.bind(this), this._onTimeout = this._onTimeout.bind(this), this._resetData = this._resetData.bind(this), this._onStart = this._onStart.bind(this), this._onOut = this._onOut.bind(this), this._dragger.on("start", this._onStart));
}
Rt.prototype._addBehaviour = function() {
  this._isActive || (this._isActive = !0, this._dragger.on("move", this._resetData), this._dragger.on("cancel", this._removeBehaviour), this._dragger.on("end", this._removeBehaviour), window.addEventListener(fi, this._onOut));
};
Rt.prototype._removeBehaviour = function() {
  this._isActive && (this._dragger.off("move", this._resetData), this._dragger.off("cancel", this._removeBehaviour), this._dragger.off("end", this._removeBehaviour), window.removeEventListener(fi, this._onOut), this._resetData(), this._isActive = !1);
};
Rt.prototype._resetData = function() {
  window.clearTimeout(this._timeout), this._timeout = null, this._outEvent = null;
};
Rt.prototype._onStart = function(t) {
  t.pointerType !== "mouse" && this._addBehaviour();
};
Rt.prototype._onOut = function(t) {
  this._dragger._getTrackedTouch(t) && (this._resetData(), this._outEvent = t, this._timeout = window.setTimeout(this._onTimeout, al));
};
Rt.prototype._onTimeout = function() {
  var t = this._outEvent;
  this._resetData(), this._dragger.isActive() && this._dragger._onCancel(t);
};
Rt.prototype.destroy = function() {
  fi && (this._dragger.off("start", this._onStart), this._removeBehaviour());
};
var Ri = ["", "webkit", "moz", "ms", "o", "Webkit", "Moz", "MS", "O"], Gr = {};
function di(t, e) {
  var i = Gr[e] || "";
  if (i)
    return i;
  for (var r = e[0].toUpperCase() + e.slice(1), n = 0; n < Ri.length; ) {
    if (i = Ri[n] ? Ri[n] + r : e, i in t)
      return Gr[e] = i, i;
    ++n;
  }
  return "";
}
function xn() {
  var t = !1;
  try {
    var e = Object.defineProperty({}, "passive", {
      get: function() {
        t = !0;
      }
    });
    window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e);
  } catch {
  }
  return t;
}
var _i = window.navigator.userAgent.toLowerCase(), ll = _i.indexOf("edge") > -1, hl = _i.indexOf("trident") > -1, ul = _i.indexOf("firefox") > -1, cl = _i.indexOf("android") > -1, bt = xn() ? { passive: !0 } : !1, Rn = "touchAction", Re = di(document.documentElement.style, Rn), fl = "auto";
function _(t, e) {
  this._element = t, this._emitter = new nt(), this._isDestroyed = !1, this._cssProps = {}, this._touchAction = "", this._isActive = !1, this._pointerId = null, this._startTime = 0, this._startX = 0, this._startY = 0, this._currentX = 0, this._currentY = 0, this._onStart = this._onStart.bind(this), this._onMove = this._onMove.bind(this), this._onCancel = this._onCancel.bind(this), this._onEnd = this._onEnd.bind(this), this._edgeHack = null, (ll || hl) && (tr || er) && (this._edgeHack = new Rt(this)), this.setCssProps(e), this._touchAction || this.setTouchAction(fl), t.addEventListener("dragstart", _._preventDefault, !1), t.addEventListener(_._inputEvents.start, this._onStart, bt);
}
_._pointerEvents = {
  start: "pointerdown",
  move: "pointermove",
  cancel: "pointercancel",
  end: "pointerup"
};
_._msPointerEvents = {
  start: "MSPointerDown",
  move: "MSPointerMove",
  cancel: "MSPointerCancel",
  end: "MSPointerUp"
};
_._touchEvents = {
  start: "touchstart",
  move: "touchmove",
  cancel: "touchcancel",
  end: "touchend"
};
_._mouseEvents = {
  start: "mousedown",
  move: "mousemove",
  cancel: "",
  end: "mouseup"
};
_._inputEvents = function() {
  return An ? _._touchEvents : tr ? _._pointerEvents : er ? _._msPointerEvents : _._mouseEvents;
}();
_._emitter = new nt();
_._emitterEvents = {
  start: "start",
  move: "move",
  end: "end",
  cancel: "cancel"
};
_._activeInstances = [];
_._preventDefault = function(t) {
  t.preventDefault && t.cancelable !== !1 && t.preventDefault();
};
_._activateInstance = function(t) {
  var e = _._activeInstances.indexOf(t);
  e > -1 || (_._activeInstances.push(t), _._emitter.on(_._emitterEvents.move, t._onMove), _._emitter.on(_._emitterEvents.cancel, t._onCancel), _._emitter.on(_._emitterEvents.end, t._onEnd), _._activeInstances.length === 1 && _._bindListeners());
};
_._deactivateInstance = function(t) {
  var e = _._activeInstances.indexOf(t);
  e !== -1 && (_._activeInstances.splice(e, 1), _._emitter.off(_._emitterEvents.move, t._onMove), _._emitter.off(_._emitterEvents.cancel, t._onCancel), _._emitter.off(_._emitterEvents.end, t._onEnd), _._activeInstances.length || _._unbindListeners());
};
_._bindListeners = function() {
  window.addEventListener(_._inputEvents.move, _._onMove, bt), window.addEventListener(_._inputEvents.end, _._onEnd, bt), _._inputEvents.cancel && window.addEventListener(_._inputEvents.cancel, _._onCancel, bt);
};
_._unbindListeners = function() {
  window.removeEventListener(_._inputEvents.move, _._onMove, bt), window.removeEventListener(_._inputEvents.end, _._onEnd, bt), _._inputEvents.cancel && window.removeEventListener(_._inputEvents.cancel, _._onCancel, bt);
};
_._getEventPointerId = function(t) {
  return typeof t.pointerId == "number" ? t.pointerId : t.changedTouches ? t.changedTouches[0] ? t.changedTouches[0].identifier : null : 1;
};
_._getTouchById = function(t, e) {
  if (typeof t.pointerId == "number")
    return t.pointerId === e ? t : null;
  if (t.changedTouches) {
    for (var i = 0; i < t.changedTouches.length; i++)
      if (t.changedTouches[i].identifier === e)
        return t.changedTouches[i];
    return null;
  }
  return t;
};
_._onMove = function(t) {
  _._emitter.emit(_._emitterEvents.move, t);
};
_._onCancel = function(t) {
  _._emitter.emit(_._emitterEvents.cancel, t);
};
_._onEnd = function(t) {
  _._emitter.emit(_._emitterEvents.end, t);
};
_.prototype._reset = function() {
  this._pointerId = null, this._startTime = 0, this._startX = 0, this._startY = 0, this._currentX = 0, this._currentY = 0, this._isActive = !1, _._deactivateInstance(this);
};
_.prototype._createEvent = function(t, e) {
  var i = this._getTrackedTouch(e);
  return {
    // Hammer.js compatibility interface.
    type: t,
    srcEvent: e,
    distance: this.getDistance(),
    deltaX: this.getDeltaX(),
    deltaY: this.getDeltaY(),
    deltaTime: t === _._emitterEvents.start ? 0 : this.getDeltaTime(),
    isFirst: t === _._emitterEvents.start,
    isFinal: t === _._emitterEvents.end || t === _._emitterEvents.cancel,
    pointerType: e.pointerType || (e.touches ? "touch" : "mouse"),
    // Partial Touch API interface.
    identifier: this._pointerId,
    screenX: i.screenX,
    screenY: i.screenY,
    clientX: i.clientX,
    clientY: i.clientY,
    pageX: i.pageX,
    pageY: i.pageY,
    target: i.target
  };
};
_.prototype._emit = function(t, e) {
  this._emitter.emit(t, this._createEvent(t, e));
};
_.prototype._getTrackedTouch = function(t) {
  return this._pointerId === null ? null : _._getTouchById(t, this._pointerId);
};
_.prototype._onStart = function(t) {
  if (!this._isDestroyed && this._pointerId === null && (this._pointerId = _._getEventPointerId(t), this._pointerId !== null)) {
    var e = this._getTrackedTouch(t);
    this._startX = this._currentX = e.clientX, this._startY = this._currentY = e.clientY, this._startTime = Date.now(), this._isActive = !0, this._emit(_._emitterEvents.start, t), this._isActive && _._activateInstance(this);
  }
};
_.prototype._onMove = function(t) {
  var e = this._getTrackedTouch(t);
  e && (this._currentX = e.clientX, this._currentY = e.clientY, this._emit(_._emitterEvents.move, t));
};
_.prototype._onCancel = function(t) {
  this._getTrackedTouch(t) && (this._emit(_._emitterEvents.cancel, t), this._reset());
};
_.prototype._onEnd = function(t) {
  this._getTrackedTouch(t) && (this._emit(_._emitterEvents.end, t), this._reset());
};
_.prototype.isActive = function() {
  return this._isActive;
};
_.prototype.setTouchAction = function(t) {
  this._touchAction = t, Re && (this._cssProps[Re] = "", this._element.style[Re] = t), An && (this._element.removeEventListener(_._touchEvents.start, _._preventDefault, !0), (this._element.style[Re] !== t || ul && cl) && this._element.addEventListener(_._touchEvents.start, _._preventDefault, !0));
};
_.prototype.setCssProps = function(t) {
  if (t) {
    var e = this._cssProps, i = this._element, r, n;
    for (r in e)
      i.style[r] = e[r], delete e[r];
    for (r in t)
      if (t[r]) {
        if (r === Rn) {
          this.setTouchAction(t[r]);
          continue;
        }
        n = di(i.style, r), n && (e[n] = "", i.style[n] = t[r]);
      }
  }
};
_.prototype.getDeltaX = function() {
  return this._currentX - this._startX;
};
_.prototype.getDeltaY = function() {
  return this._currentY - this._startY;
};
_.prototype.getDistance = function() {
  var t = this.getDeltaX(), e = this.getDeltaY();
  return Math.sqrt(t * t + e * e);
};
_.prototype.getDeltaTime = function() {
  return this._startTime ? Date.now() - this._startTime : 0;
};
_.prototype.on = function(t, e) {
  this._emitter.on(t, e);
};
_.prototype.off = function(t, e) {
  this._emitter.off(t, e);
};
_.prototype.destroy = function() {
  if (!this._isDestroyed) {
    var t = this._element;
    this._edgeHack && this._edgeHack.destroy(), this._reset(), this._emitter.destroy(), t.removeEventListener(_._inputEvents.start, this._onStart, bt), t.removeEventListener("dragstart", _._preventDefault, !1), t.removeEventListener(_._touchEvents.start, _._preventDefault, !0);
    for (var e in this._cssProps)
      t.style[e] = this._cssProps[e], delete this._cssProps[e];
    this._element = null, this._isDestroyed = !0;
  }
};
var dl = 1e3 / 60, _l = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
  return this.setTimeout(function() {
    t(Date.now());
  }, dl);
}).bind(window);
function pi(t) {
  this._nextStep = null, this._lanes = [], this._stepQueue = [], this._stepCallbacks = {}, this._step = this._step.bind(this);
  for (var e = 0; e < t; e++)
    this._lanes.push(new ir());
}
pi.prototype._step = function(t) {
  var e = this._lanes, i = this._stepQueue, r = this._stepCallbacks, n, s, o, a, l, h;
  for (this._nextStep = null, n = 0; n < e.length; n++) {
    for (a = e[n].queue, l = e[n].callbacks, h = e[n].indices, s = 0; s < a.length; s++)
      o = a[s], o && (i.push(o), r[o] = l[o], delete l[o], delete h[o]);
    a.length = 0;
  }
  for (n = 0; n < i.length; n++)
    o = i[n], r[o] && r[o](t), delete r[o];
  i.length = 0;
};
pi.prototype.add = function(t, e, i) {
  this._lanes[t].add(e, i), this._nextStep || (this._nextStep = _l(this._step));
};
pi.prototype.remove = function(t, e) {
  this._lanes[t].remove(e);
};
function ir() {
  this.queue = [], this.indices = {}, this.callbacks = {};
}
ir.prototype.add = function(t, e) {
  var i = this.indices[t];
  i !== void 0 && (this.queue[i] = void 0), this.queue.push(t), this.callbacks[t] = e, this.indices[t] = this.queue.length - 1;
};
ir.prototype.remove = function(t) {
  var e = this.indices[t];
  e !== void 0 && (this.queue[e] = void 0, delete this.callbacks[t], delete this.indices[t]);
};
var On = "layoutRead", Nn = "layoutWrite", Cn = "visibilityRead", Ln = "visibilityWrite", Pn = "dragStartRead", Mn = "dragStartWrite", Vn = "dragMoveRead", kn = "dragMoveWrite", Yn = "dragScrollRead", Hn = "dragScrollWrite", Xn = "dragSortRead", Gn = "placeholderLayoutRead", $n = "placeholderLayoutWrite", Fn = "placeholderResizeWrite", qn = "autoScrollRead", Wn = "autoScrollWrite", jn = "debounceRead", q = 0, Bn = 1, W = 2, x = new pi(3);
function pl(t, e, i) {
  x.add(q, On + t, e), x.add(W, Nn + t, i);
}
function zn(t) {
  x.remove(q, On + t), x.remove(W, Nn + t);
}
function gl(t, e, i) {
  x.add(q, Cn + t, e), x.add(W, Ln + t, i);
}
function Kn(t) {
  x.remove(q, Cn + t), x.remove(W, Ln + t);
}
function vl(t, e, i) {
  x.add(q, Pn + t, e), x.add(W, Mn + t, i);
}
function Un(t) {
  x.remove(q, Pn + t), x.remove(W, Mn + t);
}
function ml(t, e, i) {
  x.add(q, Vn + t, e), x.add(W, kn + t, i);
}
function Jn(t) {
  x.remove(q, Vn + t), x.remove(W, kn + t);
}
function yl(t, e, i) {
  x.add(q, Yn + t, e), x.add(W, Hn + t, i);
}
function Zn(t) {
  x.remove(q, Yn + t), x.remove(W, Hn + t);
}
function gi(t, e) {
  x.add(Bn, Xn + t, e);
}
function Sl(t) {
  x.remove(Bn, Xn + t);
}
function El(t, e, i) {
  x.add(q, Gn + t, e), x.add(W, $n + t, i);
}
function Qn(t) {
  x.remove(q, Gn + t), x.remove(W, $n + t);
}
function wl(t, e) {
  x.add(W, Fn + t, e);
}
function bl(t) {
  x.remove(W, Fn + t);
}
function ts(t, e) {
  x.add(q, qn, t), x.add(W, Wn, e);
}
function Dl() {
  x.remove(q, qn), x.remove(W, Wn);
}
function Tl(t, e) {
  x.add(q, jn + t, e);
}
function Il(t) {
  x.remove(q, jn + t);
}
var M = 1, H = 2, se = 4, rr = 8, me = M | rr, ye = M | se, Se = H | rr, Ze = H | se, Al = "function";
function I(t) {
  return typeof t === Al;
}
var Oe = typeof WeakMap == "function" ? /* @__PURE__ */ new WeakMap() : null;
function K(t, e) {
  var i = Oe && Oe.get(t);
  return i || (i = window.getComputedStyle(t, null), Oe && Oe.set(t, i)), i.getPropertyValue(e);
}
function et(t, e) {
  return parseFloat(K(t, e)) || 0;
}
var Gt = document.documentElement, xl = document.body, Ne = { value: 0, offset: 0 };
function es(t) {
  return t === window || t === Gt || t === xl ? window : t;
}
function Ee(t) {
  return t === window ? t.pageXOffset : t.scrollLeft;
}
function we(t) {
  return t === window ? t.pageYOffset : t.scrollTop;
}
function is(t) {
  return t === window ? Gt.scrollWidth - Gt.clientWidth : t.scrollWidth - t.clientWidth;
}
function rs(t) {
  return t === window ? Gt.scrollHeight - Gt.clientHeight : t.scrollHeight - t.clientHeight;
}
function ns(t, e) {
  if (e = e || {}, t === window)
    e.width = Gt.clientWidth, e.height = Gt.clientHeight, e.left = 0, e.right = e.width, e.top = 0, e.bottom = e.height;
  else {
    var i = t.getBoundingClientRect(), r = t.clientLeft || et(t, "border-left-width"), n = t.clientTop || et(t, "border-top-width");
    e.width = t.clientWidth, e.height = t.clientHeight, e.left = i.left + r, e.right = e.left + e.width, e.top = i.top + n, e.bottom = e.top + e.height;
  }
  return e;
}
function Te(t) {
  return t._drag._getGrid()._settings.dragAutoScroll;
}
function Rl(t) {
  t._drag && t._drag._prepareScroll();
}
function Ol(t) {
  if (!(!t._drag || !t._isActive)) {
    var e = t._drag;
    e._scrollDiffX = e._scrollDiffY = 0, t._setTranslate(e._left, e._top);
  }
}
function Hi(t, e, i, r) {
  return Ne.value = Math.min(r / 2, t), Ne.offset = Math.max(0, i + Ne.value * 2 + r * e - r) / 2, Ne;
}
function gt() {
  this.reset();
}
gt.prototype.reset = function() {
  this.isActive && this.onStop(), this.item = null, this.element = null, this.isActive = !1, this.isEnding = !1, this.direction = null, this.value = null, this.maxValue = 0, this.threshold = 0, this.distance = 0, this.speed = 0, this.duration = 0, this.action = null;
};
gt.prototype.hasReachedEnd = function() {
  return se & this.direction ? this.value >= this.maxValue : this.value <= 0;
};
gt.prototype.computeCurrentScrollValue = function() {
  return this.value === null ? M & this.direction ? Ee(this.element) : we(this.element) : Math.max(0, Math.min(this.value, this.maxValue));
};
gt.prototype.computeNextScrollValue = function(t) {
  var e = this.speed * (t / 1e3), i = se & this.direction ? this.value + e : this.value - e;
  return Math.max(0, Math.min(i, this.maxValue));
};
gt.prototype.computeSpeed = /* @__PURE__ */ function() {
  var t = {
    direction: null,
    threshold: 0,
    distance: 0,
    value: 0,
    maxValue: 0,
    deltaTime: 0,
    duration: 0,
    isEnding: !1
  };
  return function(e) {
    var i = this.item, r = Te(i).speed;
    return I(r) ? (t.direction = this.direction, t.threshold = this.threshold, t.distance = this.distance, t.value = this.value, t.maxValue = this.maxValue, t.duration = this.duration, t.speed = this.speed, t.deltaTime = e, t.isEnding = this.isEnding, r(i, this.element, t)) : r;
  };
}();
gt.prototype.tick = function(t) {
  return this.isActive || (this.isActive = !0, this.onStart()), this.value = this.computeCurrentScrollValue(), this.speed = this.computeSpeed(t), this.value = this.computeNextScrollValue(t), this.duration += t, this.value;
};
gt.prototype.onStart = function() {
  var t = this.item, e = Te(t).onStart;
  I(e) && e(t, this.element, this.direction);
};
gt.prototype.onStop = function() {
  var t = this.item, e = Te(t).onStop;
  I(e) && e(t, this.element, this.direction), t._drag && t._drag.sort();
};
function oe() {
  this.element = null, this.requestX = null, this.requestY = null, this.scrollLeft = 0, this.scrollTop = 0;
}
oe.prototype.reset = function() {
  this.requestX && (this.requestX.action = null), this.requestY && (this.requestY.action = null), this.element = null, this.requestX = null, this.requestY = null, this.scrollLeft = 0, this.scrollTop = 0;
};
oe.prototype.addRequest = function(t) {
  M & t.direction ? (this.removeRequest(this.requestX), this.requestX = t) : (this.removeRequest(this.requestY), this.requestY = t), t.action = this;
};
oe.prototype.removeRequest = function(t) {
  t && (this.requestX === t ? (this.requestX = null, t.action = null) : this.requestY === t && (this.requestY = null, t.action = null));
};
oe.prototype.computeScrollValues = function() {
  this.scrollLeft = this.requestX ? this.requestX.value : Ee(this.element), this.scrollTop = this.requestY ? this.requestY.value : we(this.element);
};
oe.prototype.scroll = function() {
  var t = this.element;
  t && (t.scrollTo ? t.scrollTo(this.scrollLeft, this.scrollTop) : (t.scrollLeft = this.scrollLeft, t.scrollTop = this.scrollTop));
};
function be(t, e) {
  this.pool = [], this.createItem = t, this.releaseItem = e;
}
be.prototype.pick = function() {
  return this.pool.pop() || this.createItem();
};
be.prototype.release = function(t) {
  this.releaseItem(t), this.pool.indexOf(t) === -1 && this.pool.push(t);
};
be.prototype.reset = function() {
  this.pool.length = 0;
};
function Nl(t, e) {
  return !(t.left + t.width <= e.left || e.left + e.width <= t.left || t.top + t.height <= e.top || e.top + e.height <= t.top);
}
function Cl(t, e) {
  if (!Nl(t, e))
    return 0;
  var i = Math.min(t.left + t.width, e.left + e.width) - Math.max(t.left, e.left), r = Math.min(t.top + t.height, e.top + e.height) - Math.max(t.top, e.top);
  return i * r;
}
function Qe(t, e) {
  var i = Cl(t, e);
  if (!i)
    return 0;
  var r = Math.min(t.width, e.width) * Math.min(t.height, e.height);
  return i / r * 100;
}
var ss = {
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, os = {
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
function R() {
  this._isDestroyed = !1, this._isTicking = !1, this._tickTime = 0, this._tickDeltaTime = 0, this._items = [], this._actions = [], this._requests = {}, this._requests[M] = {}, this._requests[H] = {}, this._requestOverlapCheck = {}, this._dragPositions = {}, this._dragDirections = {}, this._overlapCheckInterval = 150, this._requestPool = new be(
    function() {
      return new gt();
    },
    function(t) {
      t.reset();
    }
  ), this._actionPool = new be(
    function() {
      return new oe();
    },
    function(t) {
      t.reset();
    }
  ), this._readTick = this._readTick.bind(this), this._writeTick = this._writeTick.bind(this);
}
R.AXIS_X = M;
R.AXIS_Y = H;
R.FORWARD = se;
R.BACKWARD = rr;
R.LEFT = me;
R.RIGHT = ye;
R.UP = Se;
R.DOWN = Ze;
R.smoothSpeed = function(t, e, i) {
  return function(r, n, s) {
    var o = 0;
    if (!s.isEnding)
      if (s.threshold > 0) {
        var a = s.threshold - Math.max(0, s.distance);
        o = t / s.threshold * a;
      } else
        o = t;
    var l = s.speed, h = o;
    return l === o ? h : l < o ? (h = l + e * (s.deltaTime / 1e3), Math.min(o, h)) : (h = l - i * (s.deltaTime / 1e3), Math.max(o, h));
  };
};
R.pointerHandle = function(t) {
  var e = { left: 0, top: 0, width: 0, height: 0 }, i = t || 1;
  return function(r, n, s, o, a, l, h) {
    return e.left = l - i * 0.5, e.top = h - i * 0.5, e.width = i, e.height = i, e;
  };
};
R.prototype._readTick = function(t) {
  this._isDestroyed || (t && this._tickTime ? (this._tickDeltaTime = t - this._tickTime, this._tickTime = t, this._updateRequests(), this._updateActions()) : (this._tickTime = t, this._tickDeltaTime = 0));
};
R.prototype._writeTick = function() {
  this._isDestroyed || (this._applyActions(), ts(this._readTick, this._writeTick));
};
R.prototype._startTicking = function() {
  this._isTicking = !0, ts(this._readTick, this._writeTick);
};
R.prototype._stopTicking = function() {
  this._isTicking = !1, this._tickTime = 0, this._tickDeltaTime = 0, Dl();
};
R.prototype._getItemHandleRect = function(t, e, i) {
  var r = t._drag;
  if (e) {
    var n = r._dragMoveEvent || r._dragStartEvent, s = e(
      t,
      r._clientX,
      r._clientY,
      t._width,
      t._height,
      n.clientX,
      n.clientY
    );
    i.left = s.left, i.top = s.top, i.width = s.width, i.height = s.height;
  } else
    i.left = r._clientX, i.top = r._clientY, i.width = t._width, i.height = t._height;
  return i.right = i.left + i.width, i.bottom = i.top + i.height, i;
};
R.prototype._requestItemScroll = function(t, e, i, r, n, s, o) {
  var a = this._requests[e], l = a[t._id];
  l ? (l.element !== i || l.direction !== r) && l.reset() : l = this._requestPool.pick(), l.item = t, l.element = i, l.direction = r, l.threshold = n, l.distance = s, l.maxValue = o, a[t._id] = l;
};
R.prototype._cancelItemScroll = function(t, e) {
  var i = this._requests[e], r = i[t._id];
  r && (r.action && r.action.removeRequest(r), this._requestPool.release(r), delete i[t._id]);
};
R.prototype._checkItemOverlap = function(t, e, i) {
  var r = Te(t), n = I(r.targets) ? r.targets(t) : r.targets, s = r.threshold, o = r.safeZone;
  if (!n || !n.length) {
    e && this._cancelItemScroll(t, M), i && this._cancelItemScroll(t, H);
    return;
  }
  var a = this._dragDirections[t._id], l = a[0], h = a[1];
  if (!l && !h) {
    e && this._cancelItemScroll(t, M), i && this._cancelItemScroll(t, H);
    return;
  }
  for (var c = this._getItemHandleRect(t, r.handle, ss), u = os, g = null, m = null, w = !0, f = !0, d = 0, y = 0, p = null, E = null, v = 0, b = 0, S = 0, O = null, C = -1 / 0, A = 0, dt = 0, Y = null, J = 0, yt = 0, X = null, xe = -1 / 0, wr = 0, br = 0, Dr = null, Tr = 0, Ir = 0, Ti = 0; Ti < n.length; Ti++)
    g = n[Ti], w = e && l && g.axis !== H, f = i && h && g.axis !== M, y = g.priority || 0, !((!w || y < C) && (!f || y < xe)) && (m = es(g.element || g), b = w ? is(m) : -1, S = f ? rs(m) : -1, !(!b && !S) && (u = ns(m, u), d = Qe(c, u), !(d <= 0) && (w && y >= C && b > 0 && (y > C || d > dt) && (E = null, p = Hi(
      typeof g.threshold == "number" ? g.threshold : s,
      o,
      c.width,
      u.width
    ), l === ye ? (v = u.right + p.offset - c.right, v <= p.value && Ee(m) < b && (E = ye)) : l === me && (v = c.left - (u.left - p.offset), v <= p.value && Ee(m) > 0 && (E = me)), E !== null && (O = m, C = y, A = p.value, dt = d, Y = E, J = v, yt = b)), f && y >= xe && S > 0 && (y > xe || d > br) && (E = null, p = Hi(
      typeof g.threshold == "number" ? g.threshold : s,
      o,
      c.height,
      u.height
    ), h === Ze ? (v = u.bottom + p.offset - c.bottom, v <= p.value && we(m) < S && (E = Ze)) : h === Se && (v = c.top - (u.top - p.offset), v <= p.value && we(m) > 0 && (E = Se)), E !== null && (X = m, xe = y, wr = p.value, br = d, Dr = E, Tr = v, Ir = S)))));
  e && (O ? this._requestItemScroll(
    t,
    M,
    O,
    Y,
    A,
    J,
    yt
  ) : this._cancelItemScroll(t, M)), i && (X ? this._requestItemScroll(
    t,
    H,
    X,
    Dr,
    wr,
    Tr,
    Ir
  ) : this._cancelItemScroll(t, H));
};
R.prototype._updateScrollRequest = function(t) {
  for (var e = t.item, i = Te(e), r = I(i.targets) ? i.targets(e) : i.targets, n = r && r.length || 0, s = i.threshold, o = i.safeZone, a = this._getItemHandleRect(e, i.handle, ss), l = os, h = null, c = null, u = !1, g = null, m = null, w = null, f = null, d = null, y = null, p = 0; p < n; p++)
    if (h = r[p], c = es(h.element || h), c === t.element) {
      if (u = !!(M & t.direction), u) {
        if (h.axis === H)
          continue;
      } else if (h.axis === M)
        continue;
      if (d = u ? is(c) : rs(c), d <= 0 || (l = ns(c, l), g = Qe(a, l), g <= 0) || (m = Hi(
        typeof h.threshold == "number" ? h.threshold : s,
        o,
        u ? a.width : a.height,
        u ? l.width : l.height
      ), t.direction === me ? w = a.left - (l.left - m.offset) : t.direction === ye ? w = l.right + m.offset - a.right : t.direction === Se ? w = a.top - (l.top - m.offset) : w = l.bottom + m.offset - a.bottom, w > m.value) || (f = u ? Ee(c) : we(c), y = se & t.direction ? f >= d : f <= 0, y))
        break;
      return t.maxValue = d, t.threshold = m.value, t.distance = w, t.isEnding = !1, !0;
    }
  return i.smoothStop === !0 && t.speed > 0 ? (y === null && (y = t.hasReachedEnd()), t.isEnding = !y) : t.isEnding = !1, t.isEnding;
};
R.prototype._updateRequests = function() {
  for (var t = this._items, e = this._requests[M], i = this._requests[H], r, n, s, o, a, l, h, c = 0; c < t.length; c++)
    r = t[c], o = this._requestOverlapCheck[r._id], a = o > 0 && this._tickTime - o > this._overlapCheckInterval, l = !0, n = e[r._id], n && n.isActive && (l = !this._updateScrollRequest(n), l && (a = !0, this._cancelItemScroll(r, M))), h = !0, s = i[r._id], s && s.isActive && (h = !this._updateScrollRequest(s), h && (a = !0, this._cancelItemScroll(r, H))), a && (this._requestOverlapCheck[r._id] = 0, this._checkItemOverlap(r, l, h));
};
R.prototype._requestAction = function(t, e) {
  for (var i = this._actions, r = e === M, n = null, s = 0; s < i.length; s++) {
    if (n = i[s], t.element !== n.element) {
      n = null;
      continue;
    }
    if (r ? n.requestX : n.requestY) {
      this._cancelItemScroll(t.item, e);
      return;
    }
    break;
  }
  n || (n = this._actionPool.pick()), n.element = t.element, n.addRequest(t), t.tick(this._tickDeltaTime), i.push(n);
};
R.prototype._updateActions = function() {
  var t = this._items, e = this._requests, i = this._actions, r, n, s, o;
  for (o = 0; o < t.length; o++)
    r = t[o]._id, n = e[M][r], s = e[H][r], n && this._requestAction(n, M), s && this._requestAction(s, H);
  for (o = 0; o < i.length; o++)
    i[o].computeScrollValues();
};
R.prototype._applyActions = function() {
  var t = this._actions, e = this._items, i;
  if (t.length) {
    for (i = 0; i < t.length; i++)
      t[i].scroll(), this._actionPool.release(t[i]);
    for (t.length = 0, i = 0; i < e.length; i++)
      Rl(e[i]);
    for (i = 0; i < e.length; i++)
      Ol(e[i]);
  }
};
R.prototype._updateDragDirection = function(t) {
  var e = this._dragPositions[t._id], i = this._dragDirections[t._id], r = t._drag._left, n = t._drag._top;
  if (e.length) {
    var s = e[0], o = e[1];
    i[0] = r > s ? ye : r < s ? me : i[0] || 0, i[1] = n > o ? Ze : n < o ? Se : i[1] || 0;
  }
  e[0] = r, e[1] = n;
};
R.prototype.addItem = function(t) {
  if (!this._isDestroyed) {
    var e = this._items.indexOf(t);
    e === -1 && (this._items.push(t), this._requestOverlapCheck[t._id] = this._tickTime, this._dragDirections[t._id] = [0, 0], this._dragPositions[t._id] = [], this._isTicking || this._startTicking());
  }
};
R.prototype.updateItem = function(t) {
  this._isDestroyed || this._dragDirections[t._id] && (this._updateDragDirection(t), this._requestOverlapCheck[t._id] || (this._requestOverlapCheck[t._id] = this._tickTime));
};
R.prototype.removeItem = function(t) {
  if (!this._isDestroyed) {
    var e = this._items.indexOf(t);
    if (e !== -1) {
      var i = t._id, r = this._requests[M][i];
      r && (this._cancelItemScroll(t, M), delete this._requests[M][i]);
      var n = this._requests[H][i];
      n && (this._cancelItemScroll(t, H), delete this._requests[H][i]), delete this._requestOverlapCheck[i], delete this._dragPositions[i], delete this._dragDirections[i], this._items.splice(e, 1), this._isTicking && !this._items.length && this._stopTicking();
    }
  }
};
R.prototype.isItemScrollingX = function(t) {
  var e = this._requests[M][t._id];
  return !!(e && e.isActive);
};
R.prototype.isItemScrollingY = function(t) {
  var e = this._requests[H][t._id];
  return !!(e && e.isActive);
};
R.prototype.isItemScrolling = function(t) {
  return this.isItemScrollingX(t) || this.isItemScrollingY(t);
};
R.prototype.destroy = function() {
  if (!this._isDestroyed) {
    for (var t = this._items.slice(0), e = 0; e < t.length; e++)
      this.removeItem(t[e]);
    this._actions.length = 0, this._requestPool.reset(), this._actionPool.reset(), this._isDestroyed = !0;
  }
};
var Ft = window.Element.prototype, Ll = Ft.matches || Ft.matchesSelector || Ft.webkitMatchesSelector || Ft.mozMatchesSelector || Ft.msMatchesSelector || Ft.oMatchesSelector || function() {
  return !1;
};
function vi(t, e) {
  return Ll.call(t, e);
}
function Q(t, e) {
  e && (t.classList ? t.classList.add(e) : vi(t, "." + e) || (t.className += " " + e));
}
var $r = [], Pl = "number";
function nr(t, e, i) {
  var r = typeof i === Pl ? i : -1;
  r < 0 && (r = t.length - r + 1), t.splice.apply(t, $r.concat(r, 0, e)), $r.length = 0;
}
function Qt(t, e, i) {
  var r = Math.max(0, t.length - 1 + (i || 0));
  return e > r ? r : e < 0 ? Math.max(r + e + 1, 0) : e;
}
function as(t, e, i) {
  if (!(t.length < 2)) {
    var r = Qt(t, e), n = Qt(t, i);
    r !== n && t.splice(n, 0, t.splice(r, 1)[0]);
  }
}
function ls(t, e, i) {
  if (!(t.length < 2)) {
    var r = Qt(t, e), n = Qt(t, i), s;
    r !== n && (s = t[r], t[r] = t[n], t[n] = s);
  }
}
var ct = di(document.documentElement.style, "transform") || "transform", Ml = /([A-Z])/g, Vl = /^(webkit-|moz-|ms-|o-)/, kl = /^(-m-s-)/;
function Xi(t) {
  var e = t.replace(Ml, "-$1").toLowerCase();
  return e = e.replace(Vl, "-$1"), e = e.replace(kl, "-ms-"), e;
}
var hs = Xi(ct), Yl = "none", Hl = "inline", Xl = "none", Gl = "display";
function $l(t) {
  var e = K(t, hs);
  if (!e || e === Yl)
    return !1;
  var i = K(t, Gl);
  return !(i === Hl || i === Xl);
}
function Gi(t) {
  for (var e = document, i = t || e; i && i !== e && K(i, "position") === "static" && !$l(i); )
    i = i.parentElement || e;
  return i;
}
var Oi = {}, Ni = {}, Nt = {};
function Fr(t, e) {
  var i = e || {}, r;
  return i.left = 0, i.top = 0, t === document || (i.left = window.pageXOffset || 0, i.top = window.pageYOffset || 0, t.self === window.self) || (r = t.getBoundingClientRect(), i.left += r.left, i.top += r.top, i.left += et(t, "border-left-width"), i.top += et(t, "border-top-width")), i;
}
function te(t, e, i) {
  return Nt.left = 0, Nt.top = 0, t === e || i && (t = Gi(t), e = Gi(e), t === e) || (Fr(t, Oi), Fr(e, Ni), Nt.left = Ni.left - Oi.left, Nt.top = Ni.top - Oi.top), Nt;
}
function Ci(t) {
  return t === "auto" || t === "scroll" || t === "overlay";
}
function Fl(t) {
  return Ci(K(t, "overflow")) || Ci(K(t, "overflow-x")) || Ci(K(t, "overflow-y"));
}
function qr(t, e) {
  for (e = e || []; t && t !== document; ) {
    if (t.getRootNode && t instanceof DocumentFragment) {
      t = t.getRootNode().host;
      continue;
    }
    Fl(t) && e.push(t), t = t.parentNode;
  }
  return e.push(window), e;
}
var qt = {}, ql = "none", Wl = /^matrix3d/, jl = /([^,]*,){4}/, Bl = /([^,]*,){12}/, zl = /[^,]*,/;
function pt(t) {
  qt.x = 0, qt.y = 0;
  var e = K(t, hs);
  if (!e || e === ql)
    return qt;
  var i = Wl.test(e), r = e.replace(i ? Bl : jl, ""), n = r.replace(zl, "");
  return qt.x = parseFloat(r) || 0, qt.y = parseFloat(n) || 0, qt;
}
function F(t, e) {
  e && (t.classList ? t.classList.remove(e) : vi(t, "." + e) && (t.className = (" " + t.className + " ").replace(" " + e + " ", " ").trim()));
}
var Kl = /^(iPad|iPhone|iPod)/.test(window.navigator.platform) || /^Mac/.test(window.navigator.platform) && window.navigator.maxTouchPoints > 1, ti = 0, $i = 1, ei = 2, us = xn() ? { passive: !0 } : !1;
function D(t) {
  var e = t._element, i = t.getGrid(), r = i._settings;
  this._item = t, this._gridId = i._id, this._isDestroyed = !1, this._isMigrating = !1, this._startPredicate = I(r.dragStartPredicate) ? r.dragStartPredicate : D.defaultStartPredicate, this._startPredicateState = ti, this._startPredicateResult = void 0, this._isSortNeeded = !1, this._sortTimer = void 0, this._blockedSortIndex = null, this._sortX1 = 0, this._sortX2 = 0, this._sortY1 = 0, this._sortY2 = 0, this._reset(), this._preStartCheck = this._preStartCheck.bind(this), this._preEndCheck = this._preEndCheck.bind(this), this._onScroll = this._onScroll.bind(this), this._prepareStart = this._prepareStart.bind(this), this._applyStart = this._applyStart.bind(this), this._prepareMove = this._prepareMove.bind(this), this._applyMove = this._applyMove.bind(this), this._prepareScroll = this._prepareScroll.bind(this), this._applyScroll = this._applyScroll.bind(this), this._handleSort = this._handleSort.bind(this), this._handleSortDelayed = this._handleSortDelayed.bind(this), this._handle = r.dragHandle && e.querySelector(r.dragHandle) || e, this._dragger = new _(this._handle, r.dragCssProps), this._dragger.on("start", this._preStartCheck), this._dragger.on("move", this._preStartCheck), this._dragger.on("cancel", this._preEndCheck), this._dragger.on("end", this._preEndCheck);
}
D.autoScroller = new R();
D.defaultStartPredicate = function(t, e, i) {
  var r = t._drag;
  if (e.isFirst && e.srcEvent.button || !Kl && e.isFirst && e.srcEvent.isTrusted === !0 && e.srcEvent.defaultPrevented === !1 && e.srcEvent.cancelable === !1)
    return !1;
  if (e.isFinal) {
    r._finishStartPredicate(e);
    return;
  }
  var n = r._startPredicateData;
  if (!n) {
    var s = i || r._getGrid()._settings.dragStartPredicate || {};
    r._startPredicateData = n = {
      distance: Math.max(s.distance, 0) || 0,
      delay: Math.max(s.delay, 0) || 0
    };
  }
  return n.delay && (n.event = e, n.delayTimer || (n.delayTimer = window.setTimeout(function() {
    n.delay = 0, r._resolveStartPredicate(n.event) && (r._forceResolveStartPredicate(n.event), r._resetStartPredicate());
  }, n.delay))), r._resolveStartPredicate(e);
};
D.defaultSortPredicate = /* @__PURE__ */ function() {
  var t = {}, e = {}, i = {}, r = [], n = 1, s = 100;
  function o(a, l, h) {
    var c = null, u = l._settings.dragSort, g = -1, m, w, f, d, y, p, E, v, b, S;
    if (u === !0 ? (r[0] = l, w = r) : I(u) && (w = u.call(l, a)), !w || !Array.isArray(w) || !w.length)
      return c;
    for (S = 0; S < w.length; S++)
      if (f = w[S], !f._isDestroyed) {
        for (f._updateBoundingRect(), p = Math.max(0, f._left), E = Math.max(0, f._top), v = Math.min(window.innerWidth, f._right), b = Math.min(window.innerHeight, f._bottom), d = f._element.parentNode; d && d !== document && d !== document.documentElement && d !== document.body; ) {
          if (d.getRootNode && d instanceof DocumentFragment) {
            d = d.getRootNode().host;
            continue;
          }
          if (K(d, "overflow") !== "visible" && (y = d.getBoundingClientRect(), p = Math.max(p, y.left), E = Math.max(E, y.top), v = Math.min(v, y.right), b = Math.min(b, y.bottom)), K(d, "position") === "fixed")
            break;
          d = d.parentNode;
        }
        p >= v || E >= b || (e.left = p, e.top = E, e.width = v - p, e.height = b - E, m = Qe(t, e), m > h && m > g && (g = m, c = f));
      }
    return r.length = 0, c;
  }
  return function(a, l) {
    var h = a._drag, c = h._getGrid(), u = l && typeof l.threshold == "number" ? l.threshold : 50, g = l && l.action === ut ? ut : Xt, m = l && l.migrateAction === ut ? ut : Xt;
    u = Math.min(Math.max(u, n), s), t.width = a._width, t.height = a._height, t.left = h._clientX, t.top = h._clientY;
    var w = o(a, c, u);
    if (!w)
      return null;
    var f = a.getGrid() !== w, d = 0, y = 0, p = 0, E = -1, v = !1, b, S, O;
    for (w === c ? (t.left = h._gridX + a._marginLeft, t.top = h._gridY + a._marginTop) : (w._updateBorders(1, 0, 1, 0), d = w._left + w._borderLeft, y = w._top + w._borderTop), O = 0; O < w._items.length; O++)
      b = w._items[O], !(!b._isActive || b === a) && (v = !0, e.width = b._width, e.height = b._height, e.left = b._left + b._marginLeft + d, e.top = b._top + b._marginTop + y, S = Qe(t, e), S > p && (E = O, p = S));
    return f && p < u && (E = v ? E : 0, p = u), p >= u ? (i.grid = w, i.index = E, i.action = f ? m : g, i) : null;
  };
}();
D.prototype.stop = function() {
  if (this._isActive) {
    if (this._isMigrating) {
      this._finishMigration();
      return;
    }
    var t = this._item, e = t._id;
    if (D.autoScroller.removeItem(t), Un(e), Jn(e), Zn(e), this._cancelSort(), this._isStarted) {
      this._unbindScrollListeners();
      var i = t._element, r = this._getGrid(), n = r._settings.itemDraggingClass;
      i.parentNode !== r._element && (r._element.appendChild(i), t._setTranslate(this._gridX, this._gridY), n && i.clientWidth), F(i, n);
    }
    this._reset();
  }
};
D.prototype.sort = function(t) {
  var e = this._item;
  this._isActive && e._isActive && this._dragMoveEvent && (t === !0 ? this._handleSort() : gi(e._id, this._handleSort));
};
D.prototype.destroy = function() {
  this._isDestroyed || (this.stop(), this._dragger.destroy(), D.autoScroller.removeItem(this._item), this._isDestroyed = !0);
};
D.prototype._getGrid = function() {
  return ci[this._gridId] || null;
};
D.prototype._reset = function() {
  this._isActive = !1, this._isStarted = !1, this._container = null, this._containingBlock = null, this._dragStartEvent = null, this._dragMoveEvent = null, this._dragPrevMoveEvent = null, this._scrollEvent = null, this._scrollers = [], this._left = 0, this._top = 0, this._gridX = 0, this._gridY = 0, this._clientX = 0, this._clientY = 0, this._scrollDiffX = 0, this._scrollDiffY = 0, this._moveDiffX = 0, this._moveDiffY = 0, this._containerDiffX = 0, this._containerDiffY = 0;
};
D.prototype._bindScrollListeners = function() {
  var t = this._getGrid()._element, e = this._container, i = this._scrollers, r, n;
  if (i.length = 0, qr(this._item._element.parentNode, i), e !== t)
    for (r = [], qr(t, r), n = 0; n < r.length; n++)
      i.indexOf(r[n]) < 0 && i.push(r[n]);
  for (n = 0; n < i.length; n++)
    i[n].addEventListener("scroll", this._onScroll, us);
};
D.prototype._unbindScrollListeners = function() {
  var t = this._scrollers, e;
  for (e = 0; e < t.length; e++)
    t[e].removeEventListener("scroll", this._onScroll, us);
  t.length = 0;
};
D.prototype._resolveStartPredicate = function(t) {
  var e = this._startPredicateData;
  if (!(t.distance < e.distance || e.delay))
    return this._resetStartPredicate(), !0;
};
D.prototype._forceResolveStartPredicate = function(t) {
  !this._isDestroyed && this._startPredicateState === $i && (this._startPredicateState = ei, this._onStart(t));
};
D.prototype._finishStartPredicate = function(t) {
  var e = this._item._element, i = Math.abs(t.deltaX) < 2 && Math.abs(t.deltaY) < 2 && t.deltaTime < 200;
  this._resetStartPredicate(), i && Ul(e);
};
D.prototype._resetHeuristics = function(t, e) {
  this._blockedSortIndex = null, this._sortX1 = this._sortX2 = t, this._sortY1 = this._sortY2 = e;
};
D.prototype._checkHeuristics = function(t, e) {
  var i = this._getGrid()._settings.dragSortHeuristics, r = i.minDragDistance;
  if (r <= 0)
    return this._blockedSortIndex = null, !0;
  var n = t - this._sortX2, s = e - this._sortY2, o = r > 3 && i.minBounceBackAngle > 0;
  if (o || (this._blockedSortIndex = null), Math.abs(n) > r || Math.abs(s) > r) {
    if (o) {
      var a = Math.atan2(n, s), l = Math.atan2(this._sortX2 - this._sortX1, this._sortY2 - this._sortY1), h = Math.atan2(Math.sin(a - l), Math.cos(a - l));
      Math.abs(h) > i.minBounceBackAngle && (this._blockedSortIndex = null);
    }
    return this._sortX1 = this._sortX2, this._sortY1 = this._sortY2, this._sortX2 = t, this._sortY2 = e, !0;
  }
  return !1;
};
D.prototype._resetStartPredicate = function() {
  var t = this._startPredicateData;
  t && (t.delayTimer && (t.delayTimer = window.clearTimeout(t.delayTimer)), this._startPredicateData = null);
};
D.prototype._handleSort = function() {
  if (this._isActive) {
    var t = this._getGrid()._settings;
    if (!t.dragSort || !t.dragAutoScroll.sortDuringScroll && D.autoScroller.isItemScrolling(this._item)) {
      this._sortX1 = this._sortX2 = this._gridX, this._sortY1 = this._sortY2 = this._gridY, this._isSortNeeded = !0, this._sortTimer !== void 0 && (this._sortTimer = window.clearTimeout(this._sortTimer));
      return;
    }
    var e = this._checkHeuristics(this._gridX, this._gridY);
    if (!(!this._isSortNeeded && !e)) {
      var i = t.dragSortHeuristics.sortInterval;
      i <= 0 || this._isSortNeeded ? (this._isSortNeeded = !1, this._sortTimer !== void 0 && (this._sortTimer = window.clearTimeout(this._sortTimer)), this._checkOverlap()) : this._sortTimer === void 0 && (this._sortTimer = window.setTimeout(this._handleSortDelayed, i));
    }
  }
};
D.prototype._handleSortDelayed = function() {
  this._isSortNeeded = !0, this._sortTimer = void 0, gi(this._item._id, this._handleSort);
};
D.prototype._cancelSort = function() {
  this._isSortNeeded = !1, this._sortTimer !== void 0 && (this._sortTimer = window.clearTimeout(this._sortTimer)), Sl(this._item._id);
};
D.prototype._finishSort = function() {
  var t = this._getGrid()._settings.dragSort, e = t && (this._isSortNeeded || this._sortTimer !== void 0);
  this._cancelSort(), e && this._checkOverlap();
};
D.prototype._checkOverlap = function() {
  if (this._isActive) {
    var t = this._item, e = this._getGrid()._settings, i, r, n, s, o, a, l, h;
    I(e.dragSortPredicate) ? i = e.dragSortPredicate(t, this._dragMoveEvent) : i = D.defaultSortPredicate(t, e.dragSortPredicate), !(!i || typeof i.index != "number") && (l = i.action === ut ? ut : Xt, r = t.getGrid(), s = i.grid || r, h = r !== s, n = r._items.indexOf(t), o = Qt(
      s._items,
      i.index,
      h && l === Xt ? 1 : 0
    ), !(!h && o === this._blockedSortIndex) && (h ? (this._blockedSortIndex = null, a = s._items[o], r._hasListeners(At) && r._emit(At, {
      item: t,
      fromGrid: r,
      fromIndex: n,
      toGrid: s,
      toIndex: o
    }), s._hasListeners(Je) && s._emit(Je, {
      item: t,
      fromGrid: r,
      fromIndex: n,
      toGrid: s,
      toIndex: o
    }), t._gridId = s._id, this._isMigrating = t._gridId !== this._gridId, r._items.splice(n, 1), nr(s._items, t, o), t._sortData = null, r._hasListeners(Ke) && r._emit(Ke, {
      item: t,
      fromGrid: r,
      fromIndex: n,
      toGrid: s,
      toIndex: o
    }), s._hasListeners(Ue) && s._emit(Ue, {
      item: t,
      fromGrid: r,
      fromIndex: n,
      toGrid: s,
      toIndex: o
    }), l === ut && a && a.isActive() && s._items.indexOf(a) > -1 && s.send(a, r, n, {
      appendTo: this._container || document.body,
      layoutSender: !1,
      layoutReceiver: !1
    }), r.layout(), s.layout()) : n !== o && (this._blockedSortIndex = n, (l === ut ? ls : as)(
      r._items,
      n,
      o
    ), r._hasListeners(ze) && r._emit(ze, {
      item: t,
      fromIndex: n,
      toIndex: o,
      action: l
    }), r.layout())));
  }
};
D.prototype._finishMigration = function() {
  var t = this._item, e = t._dragRelease, i = t._element, r = t._isActive, n = t.getGrid(), s = n._element, o = n._settings, a = o.dragContainer || s, l = this._getGrid()._settings, h = i.parentNode, c = r ? l.itemVisibleClass : l.itemHiddenClass, u = r ? o.itemVisibleClass : o.itemHiddenClass, g, m;
  this._isMigrating = !1, this.destroy(), l.itemClass !== o.itemClass && (F(i, l.itemClass), Q(i, o.itemClass)), c !== u && (F(i, c), Q(i, u)), a !== h && (a.appendChild(i), m = te(h, a, !0), g = pt(i), g.x -= m.left, g.y -= m.top), t._refreshDimensions(), m = te(a, s, !0), e._containerDiffX = m.left, e._containerDiffY = m.top, t._drag = o.dragEnabled ? new D(t) : null, a !== h && t._setTranslate(g.x, g.y), t._visibility.setStyles(r ? o.visibleStyles : o.hiddenStyles), e.start();
};
D.prototype._preStartCheck = function(t) {
  this._startPredicateState === ti && (this._startPredicateState = $i), this._startPredicateState === $i ? (this._startPredicateResult = this._startPredicate(this._item, t), this._startPredicateResult === !0 ? (this._startPredicateState = ei, this._onStart(t)) : this._startPredicateResult === !1 && (this._resetStartPredicate(t), this._dragger._reset(), this._startPredicateState = ti)) : this._startPredicateState === ei && this._isActive && this._onMove(t);
};
D.prototype._preEndCheck = function(t) {
  var e = this._startPredicateState === ei;
  this._startPredicate(this._item, t), this._startPredicateState = ti, !(!e || !this._isActive) && (this._isStarted ? this._onEnd(t) : this.stop());
};
D.prototype._onStart = function(t) {
  var e = this._item;
  e._isActive && (this._isActive = !0, this._dragStartEvent = t, D.autoScroller.addItem(e), vl(e._id, this._prepareStart, this._applyStart));
};
D.prototype._prepareStart = function() {
  if (this._isActive) {
    var t = this._item;
    if (t._isActive) {
      var e = t._element, i = this._getGrid(), r = i._settings, n = i._element, s = r.dragContainer || n, o = Gi(s), a = pt(e), l = e.getBoundingClientRect(), h = s !== n;
      if (this._container = s, this._containingBlock = o, this._clientX = l.left, this._clientY = l.top, this._left = this._gridX = a.x, this._top = this._gridY = a.y, this._scrollDiffX = this._scrollDiffY = 0, this._moveDiffX = this._moveDiffY = 0, this._resetHeuristics(this._gridX, this._gridY), h) {
        var c = te(o, n);
        this._containerDiffX = c.left, this._containerDiffY = c.top;
      }
    }
  }
};
D.prototype._applyStart = function() {
  if (this._isActive) {
    var t = this._item;
    if (t._isActive) {
      var e = this._getGrid(), i = t._element, r = t._dragRelease, n = t._migrate, s = this._container !== e._element;
      t.isPositioning() && t._layout.stop(!0, this._left, this._top), n._isActive && (this._left -= n._containerDiffX, this._top -= n._containerDiffY, this._gridX -= n._containerDiffX, this._gridY -= n._containerDiffY, n.stop(!0, this._left, this._top)), t.isReleasing() && r._reset(), e._settings.dragPlaceholder.enabled && t._dragPlaceholder.create(), this._isStarted = !0, e._emit(Qa, t, this._dragStartEvent), s && (i.parentNode === this._container ? (this._gridX -= this._containerDiffX, this._gridY -= this._containerDiffY) : (this._left += this._containerDiffX, this._top += this._containerDiffY, this._container.appendChild(i), t._setTranslate(this._left, this._top))), Q(i, e._settings.itemDraggingClass), this._bindScrollListeners(), e._emit(tl, t, this._dragStartEvent);
    }
  }
};
D.prototype._onMove = function(t) {
  var e = this._item;
  if (!e._isActive) {
    this.stop();
    return;
  }
  this._dragMoveEvent = t, ml(e._id, this._prepareMove, this._applyMove), gi(e._id, this._handleSort);
};
D.prototype._prepareMove = function() {
  if (this._isActive) {
    var t = this._item;
    if (t._isActive) {
      var e = this._getGrid()._settings, i = e.dragAxis, r = this._dragMoveEvent, n = this._dragPrevMoveEvent || this._dragStartEvent || r;
      if (i !== "y") {
        var s = r.clientX - n.clientX;
        this._left = this._left - this._moveDiffX + s, this._gridX = this._gridX - this._moveDiffX + s, this._clientX = this._clientX - this._moveDiffX + s, this._moveDiffX = s;
      }
      if (i !== "x") {
        var o = r.clientY - n.clientY;
        this._top = this._top - this._moveDiffY + o, this._gridY = this._gridY - this._moveDiffY + o, this._clientY = this._clientY - this._moveDiffY + o, this._moveDiffY = o;
      }
      this._dragPrevMoveEvent = r;
    }
  }
};
D.prototype._applyMove = function() {
  if (this._isActive) {
    var t = this._item;
    t._isActive && (this._moveDiffX = this._moveDiffY = 0, t._setTranslate(this._left, this._top), this._getGrid()._emit(el, t, this._dragMoveEvent), D.autoScroller.updateItem(t));
  }
};
D.prototype._onScroll = function(t) {
  var e = this._item;
  if (!e._isActive) {
    this.stop();
    return;
  }
  this._scrollEvent = t, yl(e._id, this._prepareScroll, this._applyScroll), gi(e._id, this._handleSort);
};
D.prototype._prepareScroll = function() {
  if (this._isActive) {
    var t = this._item;
    if (t._isActive) {
      var e = t._element, i = this._getGrid(), r = i._element, n = e.getBoundingClientRect();
      if (this._container !== r) {
        var s = te(this._containingBlock, r);
        this._containerDiffX = s.left, this._containerDiffY = s.top;
      }
      var o = this._clientX - this._moveDiffX - n.left;
      this._left = this._left - this._scrollDiffX + o, this._scrollDiffX = o;
      var a = this._clientY - this._moveDiffY - n.top;
      this._top = this._top - this._scrollDiffY + a, this._scrollDiffY = a, this._gridX = this._left - this._containerDiffX, this._gridY = this._top - this._containerDiffY;
    }
  }
};
D.prototype._applyScroll = function() {
  if (this._isActive) {
    var t = this._item;
    t._isActive && (this._scrollDiffX = this._scrollDiffY = 0, t._setTranslate(this._left, this._top), this._getGrid()._emit(il, t, this._scrollEvent));
  }
};
D.prototype._onEnd = function(t) {
  var e = this._item, i = e._element, r = this._getGrid(), n = r._settings, s = e._dragRelease;
  if (!e._isActive) {
    this.stop();
    return;
  }
  Un(e._id), Jn(e._id), Zn(e._id), this._finishSort(), this._unbindScrollListeners(), s._containerDiffX = this._containerDiffX, s._containerDiffY = this._containerDiffY, this._reset(), F(i, n.itemDraggingClass), D.autoScroller.removeItem(e), r._emit(rl, e, t), this._isMigrating ? this._finishMigration() : s.start();
};
function Ul(t) {
  if (t.tagName.toLowerCase() === "a") {
    var e = t.getAttribute("href");
    if (e) {
      var i = t.getAttribute("target");
      i && i !== "_self" ? window.open(e, i) : window.location.href = e;
    }
  }
}
function cs(t, e) {
  var i = {}, r, n;
  if (Array.isArray(e))
    for (n = 0; n < e.length; n++)
      r = e[n], i[r] = K(t, Xi(r));
  else
    for (r in e)
      i[r] = K(t, Xi(r));
  return i;
}
var Jl = /^(webkit|moz|ms|o|Webkit|Moz|MS|O)(?=[A-Z])/, Wr = {};
function Zl(t) {
  var e = Wr[t];
  return e || (e = t.replace(Jl, ""), e !== t && (e = e[0].toLowerCase() + e.slice(1)), Wr[t] = e, e);
}
var Ql = "[native code]";
function th(t) {
  var e = window.Symbol;
  return !!(t && I(e) && I(e.toString) && e(t).toString().indexOf(Ql) > -1);
}
function ee(t, e) {
  for (var i in e)
    t.style[i] = e[i];
}
var eh = !!(Element && I(Element.prototype.animate)), jr = !!(Element && th(Element.prototype.animate));
function ft(t) {
  this._element = t, this._animation = null, this._duration = 0, this._easing = "", this._callback = null, this._props = [], this._values = [], this._isDestroyed = !1, this._onFinish = this._onFinish.bind(this);
}
ft.prototype.start = function(t, e, i) {
  if (!this._isDestroyed) {
    var r = this._element, n = i || {};
    if (!eh) {
      ee(r, e), this._callback = I(n.onFinish) ? n.onFinish : null, this._onFinish();
      return;
    }
    var s = this._animation, o = this._props, a = this._values, l = n.duration || 300, h = n.easing || "ease", c = !1, u, g, m;
    if (s && (g = 0, (l !== this._duration || h !== this._easing) && (c = !0), !c)) {
      for (u in e)
        if (++g, m = o.indexOf(u), m === -1 || e[u] !== a[m]) {
          c = !0;
          break;
        }
      g !== o.length && (c = !0);
    }
    if (c && s.cancel(), this._callback = I(n.onFinish) ? n.onFinish : null, !(s && !c)) {
      o.length = a.length = 0;
      for (u in e)
        o.push(u), a.push(e[u]);
      this._duration = l, this._easing = h, this._animation = r.animate(
        [
          Br(t, jr),
          Br(e, jr)
        ],
        {
          duration: l,
          easing: h
        }
      ), this._animation.onfinish = this._onFinish, ee(r, e);
    }
  }
};
ft.prototype.stop = function() {
  this._isDestroyed || !this._animation || (this._animation.cancel(), this._animation = this._callback = null, this._props.length = this._values.length = 0);
};
ft.prototype.getCurrentStyles = function() {
  return cs(element, currentProps);
};
ft.prototype.isAnimating = function() {
  return !!this._animation;
};
ft.prototype.destroy = function() {
  this._isDestroyed || (this.stop(), this._element = null, this._isDestroyed = !0);
};
ft.prototype._onFinish = function() {
  var t = this._callback;
  this._animation = this._callback = null, this._props.length = this._values.length = 0, t && t();
};
function Br(t, e) {
  var i = {};
  for (var r in t)
    i[e ? r : Zl(r)] = t[r];
  return i;
}
function Dt(t, e) {
  return "translateX(" + t + "px) translateY(" + e + "px)";
}
function j(t) {
  this._item = t, this._animation = new ft(), this._element = null, this._className = "", this._didMigrate = !1, this._resetAfterLayout = !1, this._left = 0, this._top = 0, this._transX = 0, this._transY = 0, this._nextTransX = 0, this._nextTransY = 0, this._setupAnimation = this._setupAnimation.bind(this), this._startAnimation = this._startAnimation.bind(this), this._updateDimensions = this._updateDimensions.bind(this), this._onLayoutStart = this._onLayoutStart.bind(this), this._onLayoutEnd = this._onLayoutEnd.bind(this), this._onReleaseEnd = this._onReleaseEnd.bind(this), this._onMigrate = this._onMigrate.bind(this), this._onHide = this._onHide.bind(this);
}
j.prototype._updateDimensions = function() {
  this.isActive() && ee(this._element, {
    width: this._item._width + "px",
    height: this._item._height + "px"
  });
};
j.prototype._onLayoutStart = function(t, e) {
  var i = this._item;
  if (t.indexOf(i) === -1) {
    this.reset();
    return;
  }
  var r = i._left, n = i._top, s = this._left, o = this._top;
  if (this._left = r, this._top = n, !(!e && !this._didMigrate && s === r && o === n)) {
    var a = r + i._marginLeft, l = n + i._marginTop, h = i.getGrid(), c = !e && h._settings.layoutDuration > 0;
    if (!c || this._didMigrate) {
      Qn(i._id), this._element.style[ct] = Dt(a, l), this._animation.stop(), this._didMigrate && (h.getElement().appendChild(this._element), this._didMigrate = !1);
      return;
    }
    this._nextTransX = a, this._nextTransY = l, El(i._id, this._setupAnimation, this._startAnimation);
  }
};
j.prototype._setupAnimation = function() {
  if (this.isActive()) {
    var t = pt(this._element);
    this._transX = t.x, this._transY = t.y;
  }
};
j.prototype._startAnimation = function() {
  if (this.isActive()) {
    var t = this._animation, e = this._transX, i = this._transY, r = this._nextTransX, n = this._nextTransY;
    if (e === r && i === n) {
      t.isAnimating() && (this._element.style[ct] = Dt(r, n), t.stop());
      return;
    }
    var s = this._item.getGrid()._settings, o = {}, a = {};
    o[ct] = Dt(e, i), a[ct] = Dt(r, n), t.start(o, a, {
      duration: s.layoutDuration,
      easing: s.layoutEasing,
      onFinish: this._onLayoutEnd
    });
  }
};
j.prototype._onLayoutEnd = function() {
  this._resetAfterLayout && this.reset();
};
j.prototype._onReleaseEnd = function(t) {
  if (t._id === this._item._id) {
    if (!this._animation.isAnimating()) {
      this.reset();
      return;
    }
    this._resetAfterLayout = !0;
  }
};
j.prototype._onMigrate = function(t) {
  if (t.item === this._item) {
    var e = this._item.getGrid(), i = t.toGrid;
    e.off(ve, this._onReleaseEnd), e.off(It, this._onLayoutStart), e.off(At, this._onMigrate), e.off(ge, this._onHide), i.on(ve, this._onReleaseEnd), i.on(It, this._onLayoutStart), i.on(At, this._onMigrate), i.on(ge, this._onHide), this._didMigrate = !0;
  }
};
j.prototype._onHide = function(t) {
  t.indexOf(this._item) > -1 && this.reset();
};
j.prototype.create = function() {
  if (this.isActive()) {
    this._resetAfterLayout = !1;
    return;
  }
  var t = this._item, e = t.getGrid(), i = e._settings, r = this._animation;
  this._left = t._left, this._top = t._top;
  var n;
  I(i.dragPlaceholder.createElement) ? n = i.dragPlaceholder.createElement(t) : n = document.createElement("div"), this._element = n, r._element = n, this._className = i.itemPlaceholderClass || "", this._className && Q(n, this._className), ee(n, {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: t._width + "px",
    height: t._height + "px"
  }), n.style[ct] = Dt(
    t._left + t._marginLeft,
    t._top + t._marginTop
  ), e.on(It, this._onLayoutStart), e.on(ve, this._onReleaseEnd), e.on(At, this._onMigrate), e.on(ge, this._onHide), I(i.dragPlaceholder.onCreate) && i.dragPlaceholder.onCreate(t, n), e.getElement().appendChild(n);
};
j.prototype.reset = function() {
  if (this.isActive()) {
    var t = this._element, e = this._item, i = e.getGrid(), r = i._settings, n = this._animation;
    this._resetAfterLayout = !1, Qn(e._id), bl(e._id), n.stop(), n._element = null, i.off(ve, this._onReleaseEnd), i.off(It, this._onLayoutStart), i.off(At, this._onMigrate), i.off(ge, this._onHide), this._className && (F(t, this._className), this._className = ""), t.parentNode.removeChild(t), this._element = null, I(r.dragPlaceholder.onRemove) && r.dragPlaceholder.onRemove(e, t);
  }
};
j.prototype.isActive = function() {
  return !!this._element;
};
j.prototype.getElement = function() {
  return this._element;
};
j.prototype.updateDimensions = function() {
  this.isActive() && wl(this._item._id, this._updateDimensions);
};
j.prototype.destroy = function() {
  this.reset(), this._animation.destroy(), this._item = this._animation = null;
};
function Ot(t) {
  this._item = t, this._isActive = !1, this._isDestroyed = !1, this._isPositioningStarted = !1, this._containerDiffX = 0, this._containerDiffY = 0;
}
Ot.prototype.start = function() {
  if (!(this._isDestroyed || this._isActive)) {
    var t = this._item, e = t.getGrid(), i = e._settings;
    this._isActive = !0, Q(t._element, i.itemReleasingClass), i.dragRelease.useDragContainer || this._placeToGrid(), e._emit(nl, t), e._nextLayoutData || t._layout.start(!1);
  }
};
Ot.prototype.stop = function(t, e, i) {
  if (!(this._isDestroyed || !this._isActive)) {
    var r = this._item, n = r.getGrid();
    !t && (e === void 0 || i === void 0) && (e = r._left, i = r._top);
    var s = this._placeToGrid(e, i);
    this._reset(s), t || n._emit(ve, r);
  }
};
Ot.prototype.isJustReleased = function() {
  return this._isActive && this._isPositioningStarted === !1;
};
Ot.prototype.destroy = function() {
  this._isDestroyed || (this.stop(!0), this._item = null, this._isDestroyed = !0);
};
Ot.prototype._placeToGrid = function(t, e) {
  if (!this._isDestroyed) {
    var i = this._item, r = i._element, n = i.getGrid()._element, s = !1;
    if (r.parentNode !== n) {
      if (t === void 0 || e === void 0) {
        var o = pt(r);
        t = o.x - this._containerDiffX, e = o.y - this._containerDiffY;
      }
      n.appendChild(r), i._setTranslate(t, e), s = !0;
    }
    return this._containerDiffX = 0, this._containerDiffY = 0, s;
  }
};
Ot.prototype._reset = function(t) {
  if (!this._isDestroyed) {
    var e = this._item, i = e.getGrid()._settings.itemReleasingClass;
    this._isActive = !1, this._isPositioningStarted = !1, this._containerDiffX = 0, this._containerDiffY = 0, i && (t && e._element.clientWidth, F(e._element, i));
  }
};
var zr = 2;
function vt(t) {
  var e = t._element, i = e.style;
  this._item = t, this._isActive = !1, this._isDestroyed = !1, this._isInterrupted = !1, this._currentStyles = {}, this._targetStyles = {}, this._nextLeft = 0, this._nextTop = 0, this._offsetLeft = 0, this._offsetTop = 0, this._skipNextAnimation = !1, this._animOptions = {
    onFinish: this._finish.bind(this),
    duration: 0,
    easing: 0
  }, i.left = "0px", i.top = "0px", t._setTranslate(0, 0), this._animation = new ft(e), this._queue = "layout-" + t._id, this._setupAnimation = this._setupAnimation.bind(this), this._startAnimation = this._startAnimation.bind(this);
}
vt.prototype.start = function(t, e) {
  if (!this._isDestroyed) {
    var i = this._item, r = i._dragRelease, n = i.getGrid()._settings, s = this._isActive, o = r.isJustReleased(), a = o ? n.dragRelease.duration : n.layoutDuration, l = o ? n.dragRelease.easing : n.layoutEasing, h = !t && !this._skipNextAnimation && a > 0;
    if (s && (zn(i._id), i._emitter.burst(this._queue, !0, i)), o && (r._isPositioningStarted = !0), I(e) && i._emitter.on(this._queue, e), this._skipNextAnimation = !1, !h) {
      this._updateOffsets(), i._setTranslate(this._nextLeft, this._nextTop), this._animation.stop(), this._finish();
      return;
    }
    this._animation.isAnimating() && (this._animation._animation.onfinish = null), this._isActive = !0, this._animOptions.easing = l, this._animOptions.duration = a, this._isInterrupted = s, pl(i._id, this._setupAnimation, this._startAnimation);
  }
};
vt.prototype.stop = function(t, e, i) {
  if (!(this._isDestroyed || !this._isActive)) {
    var r = this._item;
    if (zn(r._id), this._animation.isAnimating()) {
      if (e === void 0 || i === void 0) {
        var n = pt(r._element);
        e = n.x, i = n.y;
      }
      r._setTranslate(e, i), this._animation.stop();
    }
    F(r._element, r.getGrid()._settings.itemPositioningClass), this._isActive = !1, t && r._emitter.burst(this._queue, !0, r);
  }
};
vt.prototype.destroy = function() {
  if (!this._isDestroyed) {
    var t = this._item._element.style;
    this.stop(!0, 0, 0), this._item._emitter.clear(this._queue), this._animation.destroy(), t[ct] = "", t.left = "", t.top = "", this._item = null, this._currentStyles = null, this._targetStyles = null, this._animOptions = null, this._isDestroyed = !0;
  }
};
vt.prototype._updateOffsets = function() {
  if (!this._isDestroyed) {
    var t = this._item, e = t._migrate, i = t._dragRelease;
    this._offsetLeft = i._isActive ? i._containerDiffX : e._isActive ? e._containerDiffX : 0, this._offsetTop = i._isActive ? i._containerDiffY : e._isActive ? e._containerDiffY : 0, this._nextLeft = this._item._left + this._offsetLeft, this._nextTop = this._item._top + this._offsetTop;
  }
};
vt.prototype._finish = function() {
  if (!this._isDestroyed) {
    var t = this._item, e = t._migrate, i = t._dragRelease;
    t._tX = this._nextLeft, t._tY = this._nextTop, this._isActive && (this._isActive = !1, F(t._element, t.getGrid()._settings.itemPositioningClass)), i._isActive && i.stop(), e._isActive && e.stop(), t._emitter.burst(this._queue, !1, t);
  }
};
vt.prototype._setupAnimation = function() {
  var t = this._item;
  if (t._tX === void 0 || t._tY === void 0) {
    var e = pt(t._element);
    t._tX = e.x, t._tY = e.y;
  }
};
vt.prototype._startAnimation = function() {
  var t = this._item, e = t.getGrid()._settings, i = this._animOptions.duration <= 0;
  this._updateOffsets();
  var r = Math.abs(t._left - (t._tX - this._offsetLeft)), n = Math.abs(t._top - (t._tY - this._offsetTop));
  if (i || r < zr && n < zr) {
    (r || n || this._isInterrupted) && t._setTranslate(this._nextLeft, this._nextTop), this._animation.stop(), this._finish();
    return;
  }
  this._isInterrupted || Q(t._element, e.itemPositioningClass), this._currentStyles[ct] = Dt(t._tX, t._tY), this._targetStyles[ct] = Dt(this._nextLeft, this._nextTop), t._tX = t._tY = void 0, this._animation.start(this._currentStyles, this._targetStyles, this._animOptions);
};
function Ie(t) {
  this._item = t, this._isActive = !1, this._isDestroyed = !1, this._container = !1, this._containerDiffX = 0, this._containerDiffY = 0;
}
Ie.prototype.start = function(t, e, i) {
  if (!this._isDestroyed) {
    var r = this._item, n = r._element, s = r.isActive(), o = r.isVisible(), a = r.getGrid(), l = a._settings, h = t._settings, c = t._element, u = t._items, g = a._items.indexOf(r), m = i || document.body, w, f, d, y, p, E, v, b, S, O;
    if (typeof e == "number")
      w = Qt(u, e, 1);
    else {
      if (f = t.getItem(e), !f)
        return;
      w = u.indexOf(f);
    }
    (r.isPositioning() || this._isActive || r.isReleasing()) && (E = pt(n), v = E.x, b = E.y), r.isPositioning() && r._layout.stop(!0, v, b), this._isActive && (v -= this._containerDiffX, b -= this._containerDiffY, this.stop(!0, v, b)), r.isReleasing() && (v -= r._dragRelease._containerDiffX, b -= r._dragRelease._containerDiffY, r._dragRelease.stop(!0, v, b)), r._visibility.stop(!0), r._drag && r._drag.destroy(), a._hasListeners(At) && a._emit(At, {
      item: r,
      fromGrid: a,
      fromIndex: g,
      toGrid: t,
      toIndex: w
    }), t._hasListeners(Je) && t._emit(Je, {
      item: r,
      fromGrid: a,
      fromIndex: g,
      toGrid: t,
      toIndex: w
    }), l.itemClass !== h.itemClass && (F(n, l.itemClass), Q(n, h.itemClass)), S = o ? l.itemVisibleClass : l.itemHiddenClass, O = o ? h.itemVisibleClass : h.itemHiddenClass, S !== O && (F(n, S), Q(n, O)), a._items.splice(g, 1), nr(u, r, w), r._gridId = t._id, s ? (d = n.parentNode, m !== d && (m.appendChild(n), y = te(m, d, !0), E || (E = pt(n), v = E.x, b = E.y), r._setTranslate(v + y.left, b + y.top))) : c.appendChild(n), r._visibility.setStyles(
      o ? h.visibleStyles : h.hiddenStyles
    ), s && (p = te(m, c, !0)), r._refreshDimensions(), r._sortData = null, r._drag = h.dragEnabled ? new D(r) : null, s ? (this._isActive = !0, this._container = m, this._containerDiffX = p.left, this._containerDiffY = p.top) : (this._isActive = !1, this._container = null, this._containerDiffX = 0, this._containerDiffY = 0), a._hasListeners(Ke) && a._emit(Ke, {
      item: r,
      fromGrid: a,
      fromIndex: g,
      toGrid: t,
      toIndex: w
    }), t._hasListeners(Ue) && t._emit(Ue, {
      item: r,
      fromGrid: a,
      fromIndex: g,
      toGrid: t,
      toIndex: w
    });
  }
};
Ie.prototype.stop = function(t, e, i) {
  if (!(this._isDestroyed || !this._isActive)) {
    var r = this._item, n = r._element, s = r.getGrid(), o = s._element, a;
    this._container !== o && ((e === void 0 || i === void 0) && (t ? (a = pt(n), e = a.x - this._containerDiffX, i = a.y - this._containerDiffY) : (e = r._left, i = r._top)), o.appendChild(n), r._setTranslate(e, i)), this._isActive = !1, this._container = null, this._containerDiffX = 0, this._containerDiffY = 0;
  }
};
Ie.prototype.destroy = function() {
  this._isDestroyed || (this.stop(!0), this._item = null, this._isDestroyed = !0);
};
function at(t) {
  var e = t._isActive, i = t._element, r = i.children[0], n = t.getGrid()._settings;
  if (!r)
    throw new Error("No valid child element found within item element.");
  this._item = t, this._isDestroyed = !1, this._isHidden = !e, this._isHiding = !1, this._isShowing = !1, this._childElement = r, this._currentStyleProps = [], this._animation = new ft(r), this._queue = "visibility-" + t._id, this._finishShow = this._finishShow.bind(this), this._finishHide = this._finishHide.bind(this), i.style.display = e ? "" : "none", Q(i, e ? n.itemVisibleClass : n.itemHiddenClass), this.setStyles(e ? n.visibleStyles : n.hiddenStyles);
}
at.prototype.show = function(t, e) {
  if (!this._isDestroyed) {
    var i = this._item, r = i._element, n = I(e) ? e : null, s = i.getGrid(), o = s._settings;
    if (!this._isShowing && !this._isHidden) {
      n && n(!1, i);
      return;
    }
    if (this._isShowing && !t) {
      n && i._emitter.on(this._queue, n);
      return;
    }
    this._isShowing || (i._emitter.burst(this._queue, !0, i), F(r, o.itemHiddenClass), Q(r, o.itemVisibleClass), this._isHiding || (r.style.display = "")), n && i._emitter.on(this._queue, n), this._isShowing = !0, this._isHiding = this._isHidden = !1, this._startAnimation(!0, t, this._finishShow);
  }
};
at.prototype.hide = function(t, e) {
  if (!this._isDestroyed) {
    var i = this._item, r = i._element, n = I(e) ? e : null, s = i.getGrid(), o = s._settings;
    if (!this._isHiding && this._isHidden) {
      n && n(!1, i);
      return;
    }
    if (this._isHiding && !t) {
      n && i._emitter.on(this._queue, n);
      return;
    }
    this._isHiding || (i._emitter.burst(this._queue, !0, i), Q(r, o.itemHiddenClass), F(r, o.itemVisibleClass)), n && i._emitter.on(this._queue, n), this._isHidden = this._isHiding = !0, this._isShowing = !1, this._startAnimation(!1, t, this._finishHide);
  }
};
at.prototype.stop = function(t) {
  if (!this._isDestroyed && !(!this._isHiding && !this._isShowing)) {
    var e = this._item;
    Kn(e._id), this._animation.stop(), t && e._emitter.burst(this._queue, !0, e);
  }
};
at.prototype.setStyles = function(t) {
  var e = this._childElement, i = this._currentStyleProps;
  this._removeCurrentStyles();
  for (var r in t)
    i.push(r), e.style[r] = t[r];
};
at.prototype.destroy = function() {
  if (!this._isDestroyed) {
    var t = this._item, e = t._element, i = t.getGrid(), r = i._settings;
    this.stop(!0), t._emitter.clear(this._queue), this._animation.destroy(), this._removeCurrentStyles(), F(e, r.itemVisibleClass), F(e, r.itemHiddenClass), e.style.display = "", this._isHiding = this._isShowing = !1, this._isDestroyed = this._isHidden = !0;
  }
};
at.prototype._startAnimation = function(t, e, i) {
  if (!this._isDestroyed) {
    var r = this._item, n = this._animation, s = this._childElement, o = r.getGrid()._settings, a = t ? o.visibleStyles : o.hiddenStyles, l = t ? o.showDuration : o.hideDuration, h = t ? o.showEasing : o.hideEasing, c = e || l <= 0, u;
    if (!a) {
      i && i();
      return;
    }
    if (Kn(r._id), c) {
      ee(s, a), n.stop(), i && i();
      return;
    }
    n.isAnimating() && (n._animation.onfinish = null), gl(
      r._id,
      function() {
        u = cs(s, a);
      },
      function() {
        n.start(u, a, {
          duration: l,
          easing: h,
          onFinish: i
        });
      }
    );
  }
};
at.prototype._finishShow = function() {
  this._isHidden || (this._isShowing = !1, this._item._emitter.burst(this._queue, !1, this._item));
};
at.prototype._finishHide = function() {
  if (this._isHidden) {
    var t = this._item;
    this._isHiding = !1, t._layout.stop(!0, 0, 0), t._element.style.display = "none", t._emitter.burst(this._queue, !1, t);
  }
};
at.prototype._removeCurrentStyles = function() {
  for (var t = this._childElement, e = this._currentStyleProps, i = 0; i < e.length; i++)
    t.style[e[i]] = "";
  e.length = 0;
};
var ih = 0;
function fs() {
  return ++ih;
}
function P(t, e, i) {
  var r = t._settings;
  if (Lt) {
    if (Lt.has(e))
      throw new Error("You can only create one Muuri Item per element!");
    Lt.set(e, this);
  }
  this._id = fs(), this._gridId = t._id, this._element = e, this._isDestroyed = !1, this._left = 0, this._top = 0, this._width = 0, this._height = 0, this._marginLeft = 0, this._marginRight = 0, this._marginTop = 0, this._marginBottom = 0, this._tX = void 0, this._tY = void 0, this._sortData = null, this._emitter = new nt(), e.parentNode !== t._element && t._element.appendChild(e), Q(e, r.itemClass), typeof i != "boolean" && (i = K(e, "display") !== "none"), this._isActive = i, this._visibility = new at(this), this._layout = new vt(this), this._migrate = new Ie(this), this._drag = r.dragEnabled ? new D(this) : null, this._dragRelease = new Ot(this), this._dragPlaceholder = new j(this);
}
P.prototype.getGrid = function() {
  return ci[this._gridId];
};
P.prototype.getElement = function() {
  return this._element;
};
P.prototype.getWidth = function() {
  return this._width;
};
P.prototype.getHeight = function() {
  return this._height;
};
P.prototype.getMargin = function() {
  return {
    left: this._marginLeft,
    right: this._marginRight,
    top: this._marginTop,
    bottom: this._marginBottom
  };
};
P.prototype.getPosition = function() {
  return {
    left: this._left,
    top: this._top
  };
};
P.prototype.isActive = function() {
  return this._isActive;
};
P.prototype.isVisible = function() {
  return !!this._visibility && !this._visibility._isHidden;
};
P.prototype.isShowing = function() {
  return !!(this._visibility && this._visibility._isShowing);
};
P.prototype.isHiding = function() {
  return !!(this._visibility && this._visibility._isHiding);
};
P.prototype.isPositioning = function() {
  return !!(this._layout && this._layout._isActive);
};
P.prototype.isDragging = function() {
  return !!(this._drag && this._drag._isActive);
};
P.prototype.isReleasing = function() {
  return !!(this._dragRelease && this._dragRelease._isActive);
};
P.prototype.isDestroyed = function() {
  return this._isDestroyed;
};
P.prototype._refreshDimensions = function(t) {
  if (!this._isDestroyed && !(t !== !0 && this._visibility._isHidden)) {
    var e = this._element, i = this._dragPlaceholder, r = e.getBoundingClientRect();
    this._width = r.width, this._height = r.height, this._marginLeft = Math.max(0, et(e, "margin-left")), this._marginRight = Math.max(0, et(e, "margin-right")), this._marginTop = Math.max(0, et(e, "margin-top")), this._marginBottom = Math.max(0, et(e, "margin-bottom")), i && i.updateDimensions();
  }
};
P.prototype._refreshSortData = function() {
  if (!this._isDestroyed) {
    var t = this._sortData = {}, e = this.getGrid()._settings.sortData, i;
    for (i in e)
      t[i] = e[i](this, this._element);
  }
};
P.prototype._addToLayout = function(t, e) {
  this._isActive !== !0 && (this._isActive = !0, this._left = t || 0, this._top = e || 0);
};
P.prototype._removeFromLayout = function() {
  this._isActive !== !1 && (this._isActive = !1, this._left = 0, this._top = 0);
};
P.prototype._canSkipLayout = function(t, e) {
  return this._left === t && this._top === e && !this._migrate._isActive && !this._layout._skipNextAnimation && !this._dragRelease.isJustReleased();
};
P.prototype._setTranslate = function(t, e) {
  return this._tX === t && this._tY === e ? !1 : (this._tX = t, this._tY = e, this._element.style[ct] = Dt(t, e), !0);
};
P.prototype._destroy = function(t) {
  if (!this._isDestroyed) {
    var e = this._element, i = this.getGrid(), r = i._settings;
    this._dragPlaceholder.destroy(), this._dragRelease.destroy(), this._migrate.destroy(), this._layout.destroy(), this._visibility.destroy(), this._drag && this._drag.destroy(), this._emitter.destroy(), F(e, r.itemClass), t && e.parentNode.removeChild(e), Lt && Lt.delete(e), this._isActive = !1, this._isDestroyed = !0;
  }
};
function ds(t) {
  var e = 1, i = 2, r = 4, n = 8, s = 16, o = 1e-3, a = 0.5;
  function l(f) {
    return ((f * 1e3 + 0.5 << 0) / 10 << 0) / 100;
  }
  function h() {
    this.currentRects = [], this.nextRects = [], this.rectTarget = {}, this.rectStore = [], this.slotSizes = [], this.rectId = 0, this.slotIndex = -1, this.slotData = { left: 0, top: 0, width: 0, height: 0 }, this.sortRectsLeftTop = this.sortRectsLeftTop.bind(this), this.sortRectsTopLeft = this.sortRectsTopLeft.bind(this);
  }
  if (h.prototype.computeLayout = function(f, d) {
    var y = f.items, p = f.slots, E = !!(d & e), v = !!(d & i), b = !!(d & r), S = !!(d & n), O = !!(d & s), C = typeof y[0] == "number", A, dt, Y, J, yt, X;
    if (!y.length)
      return f;
    for (dt = C ? 2 : 1, A = 0; A < y.length; A += dt)
      C ? (J = y[A], yt = y[A + 1]) : (Y = y[A], J = Y._width + Y._marginLeft + Y._marginRight, yt = Y._height + Y._marginTop + Y._marginBottom), O && (J = l(J), yt = l(yt)), X = this.computeNextSlot(f, J, yt, E, v), v ? X.left + X.width > f.width && (f.width = X.left + X.width) : X.top + X.height > f.height && (f.height = X.top + X.height), p[++this.slotIndex] = X.left, p[++this.slotIndex] = X.top, (b || S) && this.slotSizes.push(X.width, X.height);
    if (b)
      for (A = 0; A < p.length; A += 2)
        p[A] = f.width - (p[A] + this.slotSizes[A]);
    if (S)
      for (A = 1; A < p.length; A += 2)
        p[A] = f.height - (p[A] + this.slotSizes[A]);
    return this.slotSizes.length = 0, this.currentRects.length = 0, this.nextRects.length = 0, this.rectStore.length = 0, this.rectId = 0, this.slotIndex = -1, f;
  }, h.prototype.computeNextSlot = function(f, d, y, p, E) {
    var v = this.slotData, b = this.currentRects, S = this.nextRects, O = !1, C, A, dt, Y, J;
    for (S.length = 0, v.left = null, v.top = null, v.width = d, v.height = y, Y = 0; Y < b.length; Y++)
      if (A = b[Y], !!A && (C = this.getRect(A), v.width <= C.width + o && v.height <= C.height + o)) {
        v.left = C.left, v.top = C.top;
        break;
      }
    if (v.left === null && (E ? (v.left = f.width, v.top = 0) : (v.left = 0, v.top = f.height), p || (O = !0)), !E && v.top + v.height > f.height + o && (v.left > a && S.push(this.addRect(0, f.height, v.left, 1 / 0)), v.left + v.width < f.width - a && S.push(
      this.addRect(
        v.left + v.width,
        f.height,
        f.width - v.left - v.width,
        1 / 0
      )
    ), f.height = v.top + v.height), E && v.left + v.width > f.width + o && (v.top > a && S.push(this.addRect(f.width, 0, 1 / 0, v.top)), v.top + v.height < f.height - a && S.push(
      this.addRect(
        f.width,
        v.top + v.height,
        1 / 0,
        f.height - v.top - v.height
      )
    ), f.width = v.left + v.width), !O) {
      for (p && (Y = 0); Y < b.length; Y++)
        if (A = b[Y], !!A)
          for (C = this.getRect(A), dt = this.splitRect(C, v), J = 0; J < dt.length; J++)
            A = dt[J], C = this.getRect(A), (E ? C.left + o < f.width - o : C.top + o < f.height - o) && S.push(A);
    }
    return S.length > 1 && this.purgeRects(S).sort(E ? this.sortRectsLeftTop : this.sortRectsTopLeft), this.currentRects = S, this.nextRects = b, v;
  }, h.prototype.addRect = function(f, d, y, p) {
    var E = ++this.rectId;
    return this.rectStore[E] = f || 0, this.rectStore[++this.rectId] = d || 0, this.rectStore[++this.rectId] = y || 0, this.rectStore[++this.rectId] = p || 0, E;
  }, h.prototype.getRect = function(f, d) {
    return d || (d = this.rectTarget), d.left = this.rectStore[f] || 0, d.top = this.rectStore[++f] || 0, d.width = this.rectStore[++f] || 0, d.height = this.rectStore[++f] || 0, d;
  }, h.prototype.splitRect = /* @__PURE__ */ function() {
    var f = [], d = 0, y = 0;
    return function(p, E) {
      return f.length = 0, p.left + p.width <= E.left + o || E.left + E.width <= p.left + o || p.top + p.height <= E.top + o || E.top + E.height <= p.top + o ? (f.push(this.addRect(p.left, p.top, p.width, p.height)), f) : (d = E.left - p.left, d >= a && f.push(this.addRect(p.left, p.top, d, p.height)), d = p.left + p.width - (E.left + E.width), d >= a && f.push(this.addRect(E.left + E.width, p.top, d, p.height)), y = E.top - p.top, y >= a && f.push(this.addRect(p.left, p.top, p.width, y)), y = p.top + p.height - (E.top + E.height), y >= a && f.push(this.addRect(p.left, E.top + E.height, p.width, y)), f);
    };
  }(), h.prototype.isRectAWithinRectB = function(f, d) {
    return f.left + o >= d.left && f.top + o >= d.top && f.left + f.width - o <= d.left + d.width && f.top + f.height - o <= d.top + d.height;
  }, h.prototype.purgeRects = /* @__PURE__ */ function() {
    var f = {}, d = {};
    return function(y) {
      for (var p = y.length, E; p--; )
        if (E = y.length, !!y[p]) {
          for (this.getRect(y[p], f); E--; )
            if (!(!y[E] || p === E) && (this.getRect(y[E], d), this.isRectAWithinRectB(f, d))) {
              y[p] = 0;
              break;
            }
        }
      return y;
    };
  }(), h.prototype.sortRectsTopLeft = /* @__PURE__ */ function() {
    var f = {}, d = {};
    return function(y, p) {
      return this.getRect(y, f), this.getRect(p, d), f.top < d.top && f.top + o < d.top ? -1 : f.top > d.top && f.top - o > d.top ? 1 : f.left < d.left && f.left + o < d.left ? -1 : f.left > d.left && f.left - o > d.left ? 1 : 0;
    };
  }(), h.prototype.sortRectsLeftTop = /* @__PURE__ */ function() {
    var f = {}, d = {};
    return function(y, p) {
      return this.getRect(y, f), this.getRect(p, d), f.left < d.left && f.left + o < d.left ? -1 : f.left > d.left && f.left - o < d.left ? 1 : f.top < d.top && f.top + o < d.top ? -1 : f.top > d.top && f.top - o > d.top ? 1 : 0;
    };
  }(), t) {
    var c = 1, u = 2, g = 3, m = 4, w = new h();
    self.onmessage = function(f) {
      var d = new Float32Array(f.data), y = d.subarray(m, d.length), p = new Float32Array(y.length), E = d[g], v = {
        items: y,
        slots: p,
        width: d[c],
        height: d[u]
      };
      w.computeLayout(v, E), d[c] = v.width, d[u] = v.height, d.set(v.slots, m), postMessage(d.buffer, [d.buffer]);
    };
  }
  return h;
}
var Kr = ds(), zt = null, $e = [];
function rh(t, e) {
  var i = [];
  if (t > 0) {
    zt || (zt = URL.createObjectURL(
      new Blob(["(" + ds.toString() + ")(true)"], {
        type: "application/javascript"
      })
    ));
    for (var r = 0, n; r < t; r++)
      n = new Worker(zt), e && (n.onmessage = e), i.push(n), $e.push(n);
  }
  return i;
}
function nh(t) {
  for (var e, i, r = 0; r < t.length; r++)
    e = t[r], e.onmessage = null, e.onerror = null, e.onmessageerror = null, e.terminate(), i = $e.indexOf(e), i > -1 && $e.splice(i, 1);
  zt && !$e.length && (URL.revokeObjectURL(zt), zt = null);
}
function sh() {
  return !!(window.Worker && window.URL && window.Blob);
}
var Ur = 1, ii = 2, Jr = 4, Zr = 8, Qr = 16, _s = 0, ps = 1, gs = 2, oh = 3, Fi = 4;
function mt(t, e) {
  if (this._options = 0, this._processor = null, this._layoutQueue = [], this._layouts = {}, this._layoutCallbacks = {}, this._layoutWorkers = {}, this._layoutWorkerData = {}, this._workers = [], this._onWorkerMessage = this._onWorkerMessage.bind(this), this.setOptions(e), t = typeof t == "number" ? Math.max(0, t) : 0, t && sh())
    try {
      this._workers = rh(t, this._onWorkerMessage);
    } catch {
      this._processor = new Kr();
    }
  else
    this._processor = new Kr();
}
mt.prototype._sendToWorker = function() {
  if (!(!this._layoutQueue.length || !this._workers.length)) {
    var t = this._layoutQueue.shift(), e = this._workers.pop(), i = this._layoutWorkerData[t];
    delete this._layoutWorkerData[t], this._layoutWorkers[t] = e, e.postMessage(i.buffer, [i.buffer]);
  }
};
mt.prototype._onWorkerMessage = function(t) {
  var e = new Float32Array(t.data), i = e[_s], r = this._layouts[i], n = this._layoutCallbacks[i], s = this._layoutWorkers[i];
  r && delete this._layouts[i], n && delete this._layoutCallbacks[i], s && delete this._layoutWorkers[i], r && n && (r.width = e[ps], r.height = e[gs], r.slots = e.subarray(Fi, e.length), this._finalizeLayout(r), n(r)), s && (this._workers.push(s), this._sendToWorker());
};
mt.prototype._finalizeLayout = function(t) {
  var e = t._grid, i = t._settings & ii, r = e._boxSizing === "border-box";
  return delete t._grid, delete t._settings, t.styles = {}, i ? t.styles.width = (r ? t.width + e._borderLeft + e._borderRight : t.width) + "px" : t.styles.height = (r ? t.height + e._borderTop + e._borderBottom : t.height) + "px", t;
};
mt.prototype.setOptions = function(t) {
  if (t) {
    var e;
    typeof t.fillGaps == "boolean" ? e = t.fillGaps ? Ur : 0 : e = this._options & Ur;
    var i;
    typeof t.horizontal == "boolean" ? i = t.horizontal ? ii : 0 : i = this._options & ii;
    var r;
    typeof t.alignRight == "boolean" ? r = t.alignRight ? Jr : 0 : r = this._options & Jr;
    var n;
    typeof t.alignBottom == "boolean" ? n = t.alignBottom ? Zr : 0 : n = this._options & Zr;
    var s;
    typeof t.rounding == "boolean" ? s = t.rounding ? Qr : 0 : s = this._options & Qr, this._options = e | i | r | n | s;
  }
};
mt.prototype.createLayout = function(t, e, i, r, n, s) {
  if (this._layouts[e])
    throw new Error("A layout with the provided id is currently being processed.");
  var o = this._options & ii, a = {
    id: e,
    items: i,
    slots: null,
    width: o ? 0 : r,
    height: o ? n : 0,
    // Temporary data, which will be removed before sending the layout data
    // outside of Packer's context.
    _grid: t,
    _settings: this._options
  };
  if (!i.length) {
    a.slots = [], this._finalizeLayout(a), s(a);
    return;
  }
  if (this._processor) {
    a.slots = window.Float32Array ? new Float32Array(i.length * 2) : new Array(i.length * 2), this._processor.computeLayout(a, a._settings), this._finalizeLayout(a), s(a);
    return;
  }
  var l = new Float32Array(Fi + i.length * 2);
  l[_s] = e, l[ps] = a.width, l[gs] = a.height, l[oh] = a._settings;
  var h, c, u;
  for (h = 0, c = Fi - 1, u; h < i.length; h++)
    u = i[h], l[++c] = u._width + u._marginLeft + u._marginRight, l[++c] = u._height + u._marginTop + u._marginBottom;
  return this._layoutQueue.push(e), this._layouts[e] = a, this._layoutCallbacks[e] = s, this._layoutWorkerData[e] = l, this._sendToWorker(), this.cancelLayout.bind(this, e);
};
mt.prototype.cancelLayout = function(t) {
  var e = this._layouts[t];
  if (e && (delete this._layouts[t], delete this._layoutCallbacks[t], this._layoutWorkerData[t])) {
    delete this._layoutWorkerData[t];
    var i = this._layoutQueue.indexOf(t);
    i > -1 && this._layoutQueue.splice(i, 1);
  }
};
mt.prototype.destroy = function() {
  for (var t in this._layoutWorkers)
    this._workers.push(this._layoutWorkers[t]);
  nh(this._workers), this._workers.length = 0, this._layoutQueue.length = 0, this._layouts = {}, this._layoutCallbacks = {}, this._layoutWorkers = {}, this._layoutWorkerData = {};
};
var ah = 0;
function lh(t, e) {
  var i = ++ah, r = 0, n = 0, s = !1, o = function(a) {
    s || (n && (r -= a - n), n = a, r > 0 ? Tl(i, o) : (r = n = 0, t()));
  };
  return function(a) {
    if (!s) {
      if (e <= 0) {
        a !== !0 && t();
        return;
      }
      if (a === !0) {
        s = !0, r = n = 0, o = void 0, Il(i);
        return;
      }
      r <= 0 ? (r = e, o(0)) : r = e;
    }
  };
}
var hh = "[object HTMLCollection]", uh = "[object NodeList]";
function sr(t) {
  var e = Object.prototype.toString.call(t);
  return e === hh || e === uh;
}
var ch = "object", fh = "[object Object]", dh = Object.prototype.toString;
function tn(t) {
  return typeof t === ch && dh.call(t) === fh;
}
function _h() {
}
function ph(t) {
  return sr(t) ? Array.prototype.slice.call(t) : Array.prototype.concat(t);
}
var vs = "number", mi = "string", xt = "instant", Li = 0;
function T(t, e) {
  typeof t === mi && (t = document.querySelector(t));
  var i = t.getRootNode ? t.getRootNode({ composed: !0 }) === document : document.body.contains(t);
  if (!i || t === document.documentElement)
    throw new Error("Container element must be an existing DOM element.");
  var r = gh(T.defaultOptions, e);
  r.visibleStyles = en(r.visibleStyles), r.hiddenStyles = en(r.hiddenStyles), I(r.dragSort) || (r.dragSort = !!r.dragSort), this._id = fs(), this._element = t, this._settings = r, this._isDestroyed = !1, this._items = [], this._layout = {
    id: 0,
    items: [],
    slots: []
  }, this._isLayoutFinished = !0, this._nextLayoutData = null, this._emitter = new nt(), this._onLayoutDataReceived = this._onLayoutDataReceived.bind(this), ci[this._id] = this, Q(t, r.containerClass), mh(this, r.layoutOnResize), this.add(vh(t, r.items), { layout: !1 }), r.layoutOnInit && this.layout(!0);
}
T.Item = P;
T.ItemLayout = vt;
T.ItemVisibility = at;
T.ItemMigrate = Ie;
T.ItemDrag = D;
T.ItemDragRelease = Ot;
T.ItemDragPlaceholder = j;
T.Emitter = nt;
T.Animator = ft;
T.Dragger = _;
T.Packer = mt;
T.AutoScroller = R;
T.defaultPacker = new mt(2);
T.defaultOptions = {
  // Initial item elements
  items: "*",
  // Default show animation
  showDuration: 300,
  showEasing: "ease",
  // Default hide animation
  hideDuration: 300,
  hideEasing: "ease",
  // Item's visible/hidden state styles
  visibleStyles: {
    opacity: "1",
    transform: "scale(1)"
  },
  hiddenStyles: {
    opacity: "0",
    transform: "scale(0.5)"
  },
  // Layout
  layout: {
    fillGaps: !1,
    horizontal: !1,
    alignRight: !1,
    alignBottom: !1,
    rounding: !1
  },
  layoutOnResize: 150,
  layoutOnInit: !0,
  layoutDuration: 300,
  layoutEasing: "ease",
  // Sorting
  sortData: null,
  // Drag & Drop
  dragEnabled: !1,
  dragContainer: null,
  dragHandle: null,
  dragStartPredicate: {
    distance: 0,
    delay: 0
  },
  dragAxis: "xy",
  dragSort: !0,
  dragSortHeuristics: {
    sortInterval: 100,
    minDragDistance: 10,
    minBounceBackAngle: 1
  },
  dragSortPredicate: {
    threshold: 50,
    action: Xt,
    migrateAction: Xt
  },
  dragRelease: {
    duration: 300,
    easing: "ease",
    useDragContainer: !0
  },
  dragCssProps: {
    touchAction: "none",
    userSelect: "none",
    userDrag: "none",
    tapHighlightColor: "rgba(0, 0, 0, 0)",
    touchCallout: "none",
    contentZooming: "none"
  },
  dragPlaceholder: {
    enabled: !1,
    createElement: null,
    onCreate: null,
    onRemove: null
  },
  dragAutoScroll: {
    targets: [],
    handle: null,
    threshold: 50,
    safeZone: 0.2,
    speed: R.smoothSpeed(1e3, 2e3, 2500),
    sortDuringScroll: !0,
    smoothStop: !1,
    onStart: null,
    onStop: null
  },
  // Classnames
  containerClass: "muuri",
  itemClass: "muuri-item",
  itemVisibleClass: "muuri-item-shown",
  itemHiddenClass: "muuri-item-hidden",
  itemPositioningClass: "muuri-item-positioning",
  itemDraggingClass: "muuri-item-dragging",
  itemReleasingClass: "muuri-item-releasing",
  itemPlaceholderClass: "muuri-item-placeholder"
};
T.prototype.on = function(t, e) {
  return this._emitter.on(t, e), this;
};
T.prototype.off = function(t, e) {
  return this._emitter.off(t, e), this;
};
T.prototype.getElement = function() {
  return this._element;
};
T.prototype.getItem = function(t) {
  if (this._isDestroyed || !t && t !== 0)
    return null;
  if (typeof t === vs)
    return this._items[t > -1 ? t : this._items.length + t] || null;
  if (t instanceof P)
    return t._gridId === this._id ? t : null;
  if (Lt) {
    var e = Lt.get(t);
    return e && e._gridId === this._id ? e : null;
  } else
    for (var i = 0; i < this._items.length; i++)
      if (this._items[i]._element === t)
        return this._items[i];
  return null;
};
T.prototype.getItems = function(t) {
  if (this._isDestroyed || t === void 0)
    return this._items.slice(0);
  var e = [], i, r;
  if (Array.isArray(t) || sr(t))
    for (i = 0; i < t.length; i++)
      r = this.getItem(t[i]), r && e.push(r);
  else
    r = this.getItem(t), r && e.push(r);
  return e;
};
T.prototype.refreshItems = function(t, e) {
  if (this._isDestroyed)
    return this;
  var i = t || this._items, r, n, s, o;
  if (e === !0)
    for (o = [], r = 0; r < i.length; r++)
      n = i[r], !n.isVisible() && !n.isHiding() && (s = n.getElement().style, s.visibility = "hidden", s.display = "", o.push(s));
  for (r = 0; r < i.length; r++)
    i[r]._refreshDimensions(e);
  if (e === !0) {
    for (r = 0; r < o.length; r++)
      s = o[r], s.visibility = "", s.display = "none";
    o.length = 0;
  }
  return this;
};
T.prototype.refreshSortData = function(t) {
  if (this._isDestroyed)
    return this;
  for (var e = t || this._items, i = 0; i < e.length; i++)
    e[i]._refreshSortData();
  return this;
};
T.prototype.synchronize = function() {
  if (this._isDestroyed)
    return this;
  var t = this._items;
  if (!t.length)
    return this;
  for (var e, i, r = 0; r < t.length; r++)
    i = t[r]._element, i.parentNode === this._element && (e = e || document.createDocumentFragment(), e.appendChild(i));
  return e ? (this._element.appendChild(e), this._emit(Ka), this) : this;
};
T.prototype.layout = function(t, e) {
  if (this._isDestroyed)
    return this;
  var i = this._nextLayoutData;
  i && I(i.cancel) && i.cancel(), Li = Li % ol + 1;
  var r = Li;
  this._nextLayoutData = {
    id: r,
    instant: t,
    onFinish: e,
    cancel: null
  };
  for (var n = this._items, s = [], o = 0; o < n.length; o++)
    n[o]._isActive && s.push(n[o]);
  this._refreshDimensions();
  var a = this._width - this._borderLeft - this._borderRight, l = this._height - this._borderTop - this._borderBottom, h = this._settings.layout, c;
  return I(h) ? c = h(
    this,
    r,
    s,
    a,
    l,
    this._onLayoutDataReceived
  ) : (T.defaultPacker.setOptions(h), c = T.defaultPacker.createLayout(
    this,
    r,
    s,
    a,
    l,
    this._onLayoutDataReceived
  )), I(c) && this._nextLayoutData && this._nextLayoutData.id === r && (this._nextLayoutData.cancel = c), this;
};
T.prototype.add = function(t, e) {
  if (this._isDestroyed || !t)
    return [];
  var i = ph(t);
  if (!i.length)
    return i;
  var r = e || {}, n = r.layout ? r.layout : r.layout === void 0, s = this._items, o = !1, a, l, h, c;
  for (c = 0; c < i.length; c++)
    l = i[c], l.parentNode !== this._element && (a = a || document.createDocumentFragment(), a.appendChild(l));
  for (a && this._element.appendChild(a), c = 0; c < i.length; c++)
    l = i[c], h = i[c] = new P(this, l, r.active), h._isActive && (o = !0, h._layout._skipNextAnimation = !0);
  for (c = 0; c < i.length; c++)
    h = i[c], h._refreshDimensions(), h._refreshSortData();
  return nr(s, i, r.index), this._hasListeners(kr) && this._emit(kr, i.slice(0)), o && n && this.layout(n === xt, I(n) ? n : void 0), i;
};
T.prototype.remove = function(t, e) {
  if (this._isDestroyed || !t.length)
    return [];
  var i = e || {}, r = i.layout ? i.layout : i.layout === void 0, n = !1, s = this.getItems(), o = [], a = [], l, h, c;
  for (c = 0; c < t.length; c++)
    h = t[c], !h._isDestroyed && (l = this._items.indexOf(h), l !== -1 && (h._isActive && (n = !0), o.push(h), a.push(s.indexOf(h)), h._destroy(i.removeElements), this._items.splice(l, 1)));
  return this._hasListeners(Yr) && this._emit(Yr, o.slice(0), a), n && r && this.layout(r === xt, I(r) ? r : void 0), o;
};
T.prototype.show = function(t, e) {
  return !this._isDestroyed && t.length && this._setItemsVisibility(t, !0, e), this;
};
T.prototype.hide = function(t, e) {
  return !this._isDestroyed && t.length && this._setItemsVisibility(t, !1, e), this;
};
T.prototype.filter = function(t, e) {
  if (this._isDestroyed || !this._items.length)
    return this;
  var i = [], r = [], n = typeof t === mi, s = I(t), o = e || {}, a = o.instant === !0, l = o.syncWithLayout, h = o.layout ? o.layout : o.layout === void 0, c = I(o.onFinish) ? o.onFinish : null, u = -1, g = _h, m, w;
  if (c && (g = function() {
    ++u && c(i.slice(0), r.slice(0));
  }), s || n)
    for (w = 0; w < this._items.length; w++)
      m = this._items[w], (s ? t(m) : vi(m._element, t)) ? i.push(m) : r.push(m);
  return i.length ? this.show(i, {
    instant: a,
    syncWithLayout: l,
    onFinish: g,
    layout: !1
  }) : g(), r.length ? this.hide(r, {
    instant: a,
    syncWithLayout: l,
    onFinish: g,
    layout: !1
  }) : g(), (i.length || r.length) && (this._hasListeners(Hr) && this._emit(Hr, i.slice(0), r.slice(0)), h && this.layout(h === xt, I(h) ? h : void 0)), this;
};
T.prototype.sort = /* @__PURE__ */ function() {
  var t, e, i, r;
  function n(o, a) {
    for (var l = 0, h, c, u, g, m = 0; m < t.length; m++)
      if (h = t[m][0], c = t[m][1], u = (o._sortData ? o : o._refreshSortData())._sortData[h], g = (a._sortData ? a : a._refreshSortData())._sortData[h], c === "desc" || !c && e ? l = g < u ? -1 : g > u ? 1 : 0 : l = u < g ? -1 : u > g ? 1 : 0, l)
        return l;
    return l || (r || (r = rn(i)), l = e ? Ce(r, a, o) : Ce(r, o, a)), l;
  }
  function s(o, a) {
    var l = e ? -t(o, a) : t(o, a);
    return l || (r || (r = rn(i)), l = e ? Ce(r, a, o) : Ce(r, o, a)), l;
  }
  return function(o, a) {
    if (this._isDestroyed || this._items.length < 2)
      return this;
    var l = this._items, h = a || {}, c = h.layout ? h.layout : h.layout === void 0;
    if (e = !!h.descending, i = l.slice(0), r = null, I(o))
      t = o, l.sort(s);
    else if (typeof o === mi)
      t = o.trim().split(" ").filter(function(u) {
        return u;
      }).map(function(u) {
        return u.split(":");
      }), l.sort(n);
    else if (Array.isArray(o))
      l.length = 0, l.push.apply(l, o);
    else
      throw t = e = i = r = null, new Error("Invalid comparer argument provided.");
    return this._hasListeners(Xr) && this._emit(Xr, l.slice(0), i), c && this.layout(c === xt, I(c) ? c : void 0), t = e = i = r = null, this;
  };
}();
T.prototype.move = function(t, e, i) {
  if (this._isDestroyed || this._items.length < 2)
    return this;
  var r = this._items, n = i || {}, s = n.layout ? n.layout : n.layout === void 0, o = n.action === ut, a = o ? ut : Xt, l = this.getItem(t), h = this.getItem(e), c, u;
  return l && h && l !== h && (c = r.indexOf(l), u = r.indexOf(h), o ? ls(r, c, u) : as(r, c, u), this._hasListeners(ze) && this._emit(ze, {
    item: l,
    fromIndex: c,
    toIndex: u,
    action: a
  }), s && this.layout(s === xt, I(s) ? s : void 0)), this;
};
T.prototype.send = function(t, e, i, r) {
  if (this._isDestroyed || e._isDestroyed || this === e)
    return this;
  if (t = this.getItem(t), !t)
    return this;
  var n = r || {}, s = n.appendTo || document.body, o = n.layoutSender ? n.layoutSender : n.layoutSender === void 0, a = n.layoutReceiver ? n.layoutReceiver : n.layoutReceiver === void 0;
  return t._migrate.start(e, i, s), t._migrate._isActive && t._isActive && (o && this.layout(
    o === xt,
    I(o) ? o : void 0
  ), a && e.layout(
    a === xt,
    I(a) ? a : void 0
  )), this;
};
T.prototype.destroy = function(t) {
  if (this._isDestroyed)
    return this;
  var e = this._element, i = this._items.slice(0), r = this._layout && this._layout.styles || {}, n, s;
  for (yh(this), n = 0; n < i.length; n++)
    i[n]._destroy(t);
  this._items.length = 0, F(e, this._settings.containerClass);
  for (s in r)
    e.style[s] = "";
  return this._emit(sl), this._emitter.destroy(), delete ci[this._id], this._isDestroyed = !0, this;
};
T.prototype._emit = function() {
  this._isDestroyed || this._emitter.emit.apply(this._emitter, arguments);
};
T.prototype._hasListeners = function(t) {
  return this._isDestroyed ? !1 : this._emitter.countListeners(t) > 0;
};
T.prototype._updateBoundingRect = function() {
  var t = this._element, e = t.getBoundingClientRect();
  this._width = e.width, this._height = e.height, this._left = e.left, this._top = e.top, this._right = e.right, this._bottom = e.bottom;
};
T.prototype._updateBorders = function(t, e, i, r) {
  var n = this._element;
  t && (this._borderLeft = et(n, "border-left-width")), e && (this._borderRight = et(n, "border-right-width")), i && (this._borderTop = et(n, "border-top-width")), r && (this._borderBottom = et(n, "border-bottom-width"));
};
T.prototype._refreshDimensions = function() {
  this._updateBoundingRect(), this._updateBorders(1, 1, 1, 1), this._boxSizing = K(this._element, "box-sizing");
};
T.prototype._onLayoutDataReceived = /* @__PURE__ */ function() {
  var t = [];
  return function(e) {
    if (!(this._isDestroyed || !this._nextLayoutData || this._nextLayoutData.id !== e.id)) {
      var i = this, r = this._nextLayoutData.instant, n = this._nextLayoutData.onFinish, s = e.items.length, o = s, a, l, h, c;
      for (this._nextLayoutData = null, !this._isLayoutFinished && this._hasListeners(Vr) && this._emit(Vr, this._layout.items.slice(0)), this._layout = e, t.length = 0, c = 0; c < s; c++) {
        if (a = e.items[c], !a) {
          --o;
          continue;
        }
        if (l = e.slots[c * 2], h = e.slots[c * 2 + 1], a._canSkipLayout(l, h)) {
          --o;
          continue;
        }
        a._left = l, a._top = h, a.isActive() && !a.isDragging() ? t.push(a) : --o;
      }
      if (e.styles && ee(this._element, e.styles), !(this._hasListeners(It) && (this._emit(It, e.items.slice(0), r === !0), this._layout.id !== e.id))) {
        var u = function() {
          if (!(--o > 0)) {
            var g = i._layout.id !== e.id, m = I(r) ? r : n;
            g || (i._isLayoutFinished = !0), I(m) && m(e.items.slice(0), g), !g && i._hasListeners(Mr) && i._emit(Mr, e.items.slice(0));
          }
        };
        if (!t.length)
          return u(), this;
        for (this._isLayoutFinished = !1, c = 0; c < t.length && this._layout.id === e.id; c++)
          t[c]._layout.start(r === !0, u);
        return this._layout.id === e.id && (t.length = 0), this;
      }
    }
  };
}();
T.prototype._setItemsVisibility = function(t, e, i) {
  var r = this, n = t.slice(0), s = i || {}, o = s.instant === !0, a = s.onFinish, l = s.layout ? s.layout : s.layout === void 0, h = n.length, c = e ? Ua : ge, u = e ? Ja : Za, g = e ? "show" : "hide", m = !1, w = [], f = [], d, y;
  if (!h) {
    I(a) && a(n);
    return;
  }
  for (y = 0; y < n.length; y++)
    d = n[y], (e && !d._isActive || !e && d._isActive) && (m = !0), d._layout._skipNextAnimation = !!(e && !d._isActive), e && d._visibility._isHidden && f.push(d), e ? d._addToLayout() : d._removeFromLayout();
  f.length && (this.refreshItems(f, !0), f.length = 0);
  function p() {
    for (m && s.syncWithLayout !== !1 && r.off(It, p), r._hasListeners(c) && r._emit(c, n.slice(0)), y = 0; y < n.length; y++) {
      if (n[y]._gridId !== r._id) {
        --h < 1 && (I(a) && a(w.slice(0)), r._hasListeners(u) && r._emit(u, w.slice(0)));
        continue;
      }
      n[y]._visibility[g](o, function(E, v) {
        E || w.push(v), --h < 1 && (I(a) && a(w.slice(0)), r._hasListeners(u) && r._emit(u, w.slice(0)));
      });
    }
  }
  m && s.syncWithLayout !== !1 ? this.on(It, p) : p(), m && l && this.layout(l === xt, I(l) ? l : void 0);
};
function gh(t, e) {
  var i = ue({}, t);
  return e && (i = ue(i, e)), e && e.visibleStyles ? i.visibleStyles = e.visibleStyles : t && t.visibleStyles && (i.visibleStyles = t.visibleStyles), e && e.hiddenStyles ? i.hiddenStyles = e.hiddenStyles : t && t.hiddenStyles && (i.hiddenStyles = t.hiddenStyles), i;
}
function ue(t, e) {
  var i = Object.keys(e), r = i.length, n, s, o;
  for (o = 0; o < r; o++) {
    if (s = i[o], n = tn(e[s]), tn(t[s]) && n) {
      t[s] = ue(ue({}, t[s]), e[s]);
      continue;
    }
    if (n) {
      t[s] = ue({}, e[s]);
      continue;
    }
    if (Array.isArray(e[s])) {
      t[s] = e[s].slice(0);
      continue;
    }
    t[s] = e[s];
  }
  return t;
}
function vh(t, e) {
  if (e === "*")
    return t.children;
  if (typeof e === mi) {
    for (var i = [], r = t.children, n = 0; n < r.length; n++)
      vi(r[n], e) && i.push(r[n]);
    return i;
  }
  return Array.isArray(e) || sr(e) ? e : [];
}
function mh(t, e) {
  typeof e !== vs && (e = e === !0 ? 0 : -1), e >= 0 && (t._resizeHandler = lh(function() {
    t.refreshItems().layout();
  }, e), window.addEventListener("resize", t._resizeHandler));
}
function yh(t) {
  t._resizeHandler && (t._resizeHandler(!0), window.removeEventListener("resize", t._resizeHandler), t._resizeHandler = null);
}
function en(t) {
  var e = {}, i = document.documentElement.style, r, n;
  for (r in t)
    t[r] && (n = di(i, r), n && (e[n] = t[r]));
  return e;
}
function rn(t) {
  for (var e = {}, i = 0; i < t.length; i++)
    e[t[i]._id] = i;
  return e;
}
function Ce(t, e, i) {
  var r = t[e._id], n = t[i._id];
  return r - n;
}
var Le, Sh = new Uint8Array(16);
function Eh() {
  if (!Le && (Le = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !Le))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return Le(Sh);
}
const wh = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function bh(t) {
  return typeof t == "string" && wh.test(t);
}
var G = [];
for (var Pi = 0; Pi < 256; ++Pi)
  G.push((Pi + 256).toString(16).substr(1));
function Dh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = (G[t[e + 0]] + G[t[e + 1]] + G[t[e + 2]] + G[t[e + 3]] + "-" + G[t[e + 4]] + G[t[e + 5]] + "-" + G[t[e + 6]] + G[t[e + 7]] + "-" + G[t[e + 8]] + G[t[e + 9]] + "-" + G[t[e + 10]] + G[t[e + 11]] + G[t[e + 12]] + G[t[e + 13]] + G[t[e + 14]] + G[t[e + 15]]).toLowerCase();
  if (!bh(i))
    throw TypeError("Stringified UUID is invalid");
  return i;
}
function Mi(t, e, i) {
  t = t || {};
  var r = t.random || (t.rng || Eh)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    i = i || 0;
    for (var n = 0; n < 16; ++n)
      e[i + n] = r[n];
    return e;
  }
  return Dh(r);
}
const Ct = {
  synchronize: "synchronize",
  layoutStart: "layoutStart",
  layoutEnd: "layoutEnd",
  layoutAbort: "layoutAbort",
  add: "add",
  remove: "remove",
  showStart: "showStart",
  showEnd: "showEnd",
  hideStart: "hideStart",
  hideEnd: "hideEnd",
  filter: "filter",
  sort: "sort",
  move: "move",
  send: "send",
  beforeSend: "beforeSend",
  receive: "receive",
  beforeReceive: "beforeReceive",
  dragInit: "dragInit",
  dragStart: "dragStart",
  dragMove: "dragMove",
  dragScroll: "dragScroll",
  dragEnd: "dragEnd",
  dragReleaseStart: "dragReleaseStart",
  dragReleaseEnd: "dragReleaseEnd",
  destroy: "destroy"
};
class Th {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._itemStore = /* @__PURE__ */ new Map(), this._draggingGridItem = null, this._draggingItem = null;
  }
  /**
   * @param {number} gridId
   * @param {Array<*>} items
   */
  setItemsForGridId(e, i) {
    this._itemStore.set(e, i);
  }
  /**
   * @param {Muuri.Item} value
   */
  setDraggingGridItem(e) {
    this._draggingGridItem = e;
  }
  /**
   * @param {*} value
   */
  setDraggingItem(e) {
    this._draggingItem = e;
  }
  /**
   * @return {Muuri.Item}
   */
  getDraggingGridItem() {
    return this._draggingGridItem;
  }
  /**
   * @return {*}
   */
  getDraggingItem() {
    return this._draggingItem;
  }
  /**
   * @param {string} groupId
   * @param {Muuri} grid
   */
  addGrid(e, i) {
    const r = e + "";
    this._store.has(r) || this._store.set(r + "", []), this._store.get(r).push(i);
  }
  /**
   * @param {Array<string>} groupIds
   * @param {Muuri} grid
   */
  addGridToGroups(e, i) {
    e.forEach((r) => this.addGrid(r, i));
  }
  /**
   * @param {Array<string>} group
   * @returns {*}
   */
  getGrids(e) {
    let i = [];
    return e.forEach((r) => i = i.concat(this._store.get(r + ""))), i;
  }
  clear() {
    this._store = /* @__PURE__ */ new Map(), this._itemStore = /* @__PURE__ */ new Map(), this._draggingGridItem = null, this._draggingItem = null;
  }
}
const tt = new Th(), nn = {
  key: "_$muuri_id"
}, sn = {
  width: "100px",
  height: "100px"
}, Ih = {
  selector: ".muuri-item:first-child"
};
/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ah(t, e) {
  const i = new Set(t.split(","));
  return e ? (r) => i.has(r.toLowerCase()) : (r) => i.has(r);
}
const ht = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, xh = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], jt = () => {
}, Rh = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), lt = Object.assign, Oh = Object.prototype.hasOwnProperty, k = (t, e) => Oh.call(t, e), L = Array.isArray, Kt = (t) => Si(t) === "[object Map]", Nh = (t) => Si(t) === "[object Set]", $ = (t) => typeof t == "function", it = (t) => typeof t == "string", yi = (t) => typeof t == "symbol", z = (t) => t !== null && typeof t == "object", Ch = (t) => (z(t) || $(t)) && $(t.then) && $(t.catch), Lh = Object.prototype.toString, Si = (t) => Lh.call(t), ms = (t) => Si(t).slice(8, -1), Ph = (t) => Si(t) === "[object Object]", or = (t) => it(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Mh = (t) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (i) => e[i] || (e[i] = t(i));
}, Vh = Mh((t) => t.charAt(0).toUpperCase() + t.slice(1)), ie = (t, e) => !Object.is(t, e), kh = (t, e, i) => {
  Object.defineProperty(t, e, {
    configurable: !0,
    enumerable: !1,
    value: i
  });
};
let on;
const ys = () => on || (on = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ei(t) {
  if (L(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++) {
      const r = t[i], n = it(r) ? Gh(r) : Ei(r);
      if (n)
        for (const s in n)
          e[s] = n[s];
    }
    return e;
  } else if (it(t) || z(t))
    return t;
}
const Yh = /;(?![^(]*\))/g, Hh = /:([^]+)/, Xh = /\/\*[^]*?\*\//g;
function Gh(t) {
  const e = {};
  return t.replace(Xh, "").split(Yh).forEach((i) => {
    if (i) {
      const r = i.split(Hh);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function wi(t) {
  let e = "";
  if (it(t))
    e = t;
  else if (L(t))
    for (let i = 0; i < t.length; i++) {
      const r = wi(t[i]);
      r && (e += r + " ");
    }
  else if (z(t))
    for (const i in t)
      t[i] && (e += i + " ");
  return e.trim();
}
/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function an(t, ...e) {
  console.warn(`[Vue warn] ${t}`, ...e);
}
let $h;
function Fh(t, e = $h) {
  e && e.active && e.effects.push(t);
}
let ce;
class qh {
  constructor(e, i, r, n) {
    this.fn = e, this.trigger = i, this.scheduler = r, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Fh(this, n);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, ar();
      for (let e = 0; e < this._depsLength; e++) {
        const i = this.deps[e];
        if (i.computed && (Wh(i.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), lr();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(e) {
    this._dirtyLevel = e ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let e = Pt, i = ce;
    try {
      return Pt = !0, ce = this, this._runnings++, ln(this), this.fn();
    } finally {
      hn(this), this._runnings--, ce = i, Pt = e;
    }
  }
  stop() {
    var e;
    this.active && (ln(this), hn(this), (e = this.onStop) == null || e.call(this), this.active = !1);
  }
}
function Wh(t) {
  return t.value;
}
function ln(t) {
  t._trackId++, t._depsLength = 0;
}
function hn(t) {
  if (t.deps.length > t._depsLength) {
    for (let e = t._depsLength; e < t.deps.length; e++)
      Ss(t.deps[e], t);
    t.deps.length = t._depsLength;
  }
}
function Ss(t, e) {
  const i = t.get(e);
  i !== void 0 && e._trackId !== i && (t.delete(e), t.size === 0 && t.cleanup());
}
let Pt = !0, qi = 0;
const Es = [];
function ar() {
  Es.push(Pt), Pt = !1;
}
function lr() {
  const t = Es.pop();
  Pt = t === void 0 ? !0 : t;
}
function hr() {
  qi++;
}
function ur() {
  for (qi--; !qi && Wi.length; )
    Wi.shift()();
}
function jh(t, e, i) {
  var r;
  if (e.get(t) !== t._trackId) {
    e.set(t, t._trackId);
    const n = t.deps[t._depsLength];
    n !== e ? (n && Ss(n, t), t.deps[t._depsLength++] = e) : t._depsLength++, process.env.NODE_ENV !== "production" && ((r = t.onTrack) == null || r.call(t, lt({ effect: t }, i)));
  }
}
const Wi = [];
function Bh(t, e, i) {
  var r;
  hr();
  for (const n of t.keys()) {
    let s;
    n._dirtyLevel < e && (s ?? (s = t.get(n) === n._trackId)) && (n._shouldSchedule || (n._shouldSchedule = n._dirtyLevel === 0), n._dirtyLevel = e), n._shouldSchedule && (s ?? (s = t.get(n) === n._trackId)) && (process.env.NODE_ENV !== "production" && ((r = n.onTrigger) == null || r.call(n, lt({ effect: n }, i))), n.trigger(), (!n._runnings || n.allowRecurse) && n._dirtyLevel !== 2 && (n._shouldSchedule = !1, n.scheduler && Wi.push(n.scheduler)));
  }
  ur();
}
const zh = (t, e) => {
  const i = /* @__PURE__ */ new Map();
  return i.cleanup = t, i.computed = e, i;
}, ji = /* @__PURE__ */ new WeakMap(), Mt = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Bi = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function U(t, e, i) {
  if (Pt && ce) {
    let r = ji.get(t);
    r || ji.set(t, r = /* @__PURE__ */ new Map());
    let n = r.get(i);
    n || r.set(i, n = zh(() => r.delete(i))), jh(
      ce,
      n,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: i
      } : void 0
    );
  }
}
function Tt(t, e, i, r, n, s) {
  const o = ji.get(t);
  if (!o)
    return;
  let a = [];
  if (e === "clear")
    a = [...o.values()];
  else if (i === "length" && L(t)) {
    const l = Number(r);
    o.forEach((h, c) => {
      (c === "length" || !yi(c) && c >= l) && a.push(h);
    });
  } else
    switch (i !== void 0 && a.push(o.get(i)), e) {
      case "add":
        L(t) ? or(i) && a.push(o.get("length")) : (a.push(o.get(Mt)), Kt(t) && a.push(o.get(Bi)));
        break;
      case "delete":
        L(t) || (a.push(o.get(Mt)), Kt(t) && a.push(o.get(Bi)));
        break;
      case "set":
        Kt(t) && a.push(o.get(Mt));
        break;
    }
  hr();
  for (const l of a)
    l && Bh(
      l,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: t,
        type: e,
        key: i,
        newValue: r,
        oldValue: n,
        oldTarget: s
      } : void 0
    );
  ur();
}
const Kh = /* @__PURE__ */ Ah("__proto__,__v_isRef,__isVue"), ws = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(yi)
), un = /* @__PURE__ */ Uh();
function Uh() {
  const t = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((e) => {
    t[e] = function(...i) {
      const r = N(this);
      for (let s = 0, o = this.length; s < o; s++)
        U(r, "get", s + "");
      const n = r[e](...i);
      return n === -1 || n === !1 ? r[e](...i.map(N)) : n;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((e) => {
    t[e] = function(...i) {
      ar(), hr();
      const r = N(this)[e].apply(this, i);
      return ur(), lr(), r;
    };
  }), t;
}
function Jh(t) {
  const e = N(this);
  return U(e, "has", t), e.hasOwnProperty(t);
}
class bs {
  constructor(e = !1, i = !1) {
    this._isReadonly = e, this._shallow = i;
  }
  get(e, i, r) {
    const n = this._isReadonly, s = this._shallow;
    if (i === "__v_isReactive")
      return !n;
    if (i === "__v_isReadonly")
      return n;
    if (i === "__v_isShallow")
      return s;
    if (i === "__v_raw")
      return r === (n ? s ? xs : As : s ? uu : Is).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const o = L(e);
    if (!n) {
      if (o && k(un, i))
        return Reflect.get(un, i, r);
      if (i === "hasOwnProperty")
        return Jh;
    }
    const a = Reflect.get(e, i, r);
    return (yi(i) ? ws.has(i) : Kh(i)) || (n || U(e, "get", i), s) ? a : rt(a) ? o && or(i) ? a : a.value : z(a) ? n ? Os(a) : Rs(a) : a;
  }
}
class Zh extends bs {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, i, r, n) {
    let s = e[i];
    if (!this._shallow) {
      const l = $t(s);
      if (!Ut(r) && !$t(r) && (s = N(s), r = N(r)), !L(e) && rt(s) && !rt(r))
        return l ? !1 : (s.value = r, !0);
    }
    const o = L(e) && or(i) ? Number(i) < e.length : k(e, i), a = Reflect.set(e, i, r, n);
    return e === N(n) && (o ? ie(r, s) && Tt(e, "set", i, r, s) : Tt(e, "add", i, r)), a;
  }
  deleteProperty(e, i) {
    const r = k(e, i), n = e[i], s = Reflect.deleteProperty(e, i);
    return s && r && Tt(e, "delete", i, void 0, n), s;
  }
  has(e, i) {
    const r = Reflect.has(e, i);
    return (!yi(i) || !ws.has(i)) && U(e, "has", i), r;
  }
  ownKeys(e) {
    return U(
      e,
      "iterate",
      L(e) ? "length" : Mt
    ), Reflect.ownKeys(e);
  }
}
class Ds extends bs {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, i) {
    return process.env.NODE_ENV !== "production" && an(
      `Set operation on key "${String(i)}" failed: target is readonly.`,
      e
    ), !0;
  }
  deleteProperty(e, i) {
    return process.env.NODE_ENV !== "production" && an(
      `Delete operation on key "${String(i)}" failed: target is readonly.`,
      e
    ), !0;
  }
}
const Qh = /* @__PURE__ */ new Zh(), tu = /* @__PURE__ */ new Ds(), eu = /* @__PURE__ */ new Ds(!0), cr = (t) => t, bi = (t) => Reflect.getPrototypeOf(t);
function Pe(t, e, i = !1, r = !1) {
  t = t.__v_raw;
  const n = N(t), s = N(e);
  i || (ie(e, s) && U(n, "get", e), U(n, "get", s));
  const { has: o } = bi(n), a = r ? cr : i ? pr : _r;
  if (o.call(n, e))
    return a(t.get(e));
  if (o.call(n, s))
    return a(t.get(s));
  t !== n && t.get(e);
}
function Me(t, e = !1) {
  const i = this.__v_raw, r = N(i), n = N(t);
  return e || (ie(t, n) && U(r, "has", t), U(r, "has", n)), t === n ? i.has(t) : i.has(t) || i.has(n);
}
function Ve(t, e = !1) {
  return t = t.__v_raw, !e && U(N(t), "iterate", Mt), Reflect.get(t, "size", t);
}
function cn(t) {
  t = N(t);
  const e = N(this);
  return bi(e).has.call(e, t) || (e.add(t), Tt(e, "add", t, t)), this;
}
function fn(t, e) {
  e = N(e);
  const i = N(this), { has: r, get: n } = bi(i);
  let s = r.call(i, t);
  s ? process.env.NODE_ENV !== "production" && Ts(i, r, t) : (t = N(t), s = r.call(i, t));
  const o = n.call(i, t);
  return i.set(t, e), s ? ie(e, o) && Tt(i, "set", t, e, o) : Tt(i, "add", t, e), this;
}
function dn(t) {
  const e = N(this), { has: i, get: r } = bi(e);
  let n = i.call(e, t);
  n ? process.env.NODE_ENV !== "production" && Ts(e, i, t) : (t = N(t), n = i.call(e, t));
  const s = r ? r.call(e, t) : void 0, o = e.delete(t);
  return n && Tt(e, "delete", t, void 0, s), o;
}
function _n() {
  const t = N(this), e = t.size !== 0, i = process.env.NODE_ENV !== "production" ? Kt(t) ? new Map(t) : new Set(t) : void 0, r = t.clear();
  return e && Tt(t, "clear", void 0, void 0, i), r;
}
function ke(t, e) {
  return function(r, n) {
    const s = this, o = s.__v_raw, a = N(o), l = e ? cr : t ? pr : _r;
    return !t && U(a, "iterate", Mt), o.forEach((h, c) => r.call(n, l(h), l(c), s));
  };
}
function Ye(t, e, i) {
  return function(...r) {
    const n = this.__v_raw, s = N(n), o = Kt(s), a = t === "entries" || t === Symbol.iterator && o, l = t === "keys" && o, h = n[t](...r), c = i ? cr : e ? pr : _r;
    return !e && U(
      s,
      "iterate",
      l ? Bi : Mt
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = h.next();
        return g ? { value: u, done: g } : {
          value: a ? [c(u[0]), c(u[1])] : c(u),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function St(t) {
  return function(...e) {
    if (process.env.NODE_ENV !== "production") {
      const i = e[0] ? `on key "${e[0]}" ` : "";
      console.warn(
        `${Vh(t)} operation ${i}failed: target is readonly.`,
        N(this)
      );
    }
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function iu() {
  const t = {
    get(s) {
      return Pe(this, s);
    },
    get size() {
      return Ve(this);
    },
    has: Me,
    add: cn,
    set: fn,
    delete: dn,
    clear: _n,
    forEach: ke(!1, !1)
  }, e = {
    get(s) {
      return Pe(this, s, !1, !0);
    },
    get size() {
      return Ve(this);
    },
    has: Me,
    add: cn,
    set: fn,
    delete: dn,
    clear: _n,
    forEach: ke(!1, !0)
  }, i = {
    get(s) {
      return Pe(this, s, !0);
    },
    get size() {
      return Ve(this, !0);
    },
    has(s) {
      return Me.call(this, s, !0);
    },
    add: St("add"),
    set: St("set"),
    delete: St("delete"),
    clear: St("clear"),
    forEach: ke(!0, !1)
  }, r = {
    get(s) {
      return Pe(this, s, !0, !0);
    },
    get size() {
      return Ve(this, !0);
    },
    has(s) {
      return Me.call(this, s, !0);
    },
    add: St("add"),
    set: St("set"),
    delete: St("delete"),
    clear: St("clear"),
    forEach: ke(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((s) => {
    t[s] = Ye(
      s,
      !1,
      !1
    ), i[s] = Ye(
      s,
      !0,
      !1
    ), e[s] = Ye(
      s,
      !1,
      !0
    ), r[s] = Ye(
      s,
      !0,
      !0
    );
  }), [
    t,
    i,
    e,
    r
  ];
}
const [
  ru,
  nu,
  su,
  ou
] = /* @__PURE__ */ iu();
function fr(t, e) {
  const i = e ? t ? ou : su : t ? nu : ru;
  return (r, n, s) => n === "__v_isReactive" ? !t : n === "__v_isReadonly" ? t : n === "__v_raw" ? r : Reflect.get(
    k(i, n) && n in r ? i : r,
    n,
    s
  );
}
const au = {
  get: /* @__PURE__ */ fr(!1, !1)
}, lu = {
  get: /* @__PURE__ */ fr(!0, !1)
}, hu = {
  get: /* @__PURE__ */ fr(!0, !0)
};
function Ts(t, e, i) {
  const r = N(i);
  if (r !== i && e.call(t, r)) {
    const n = ms(t);
    console.warn(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Is = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap(), As = /* @__PURE__ */ new WeakMap(), xs = /* @__PURE__ */ new WeakMap();
function cu(t) {
  switch (t) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function fu(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : cu(ms(t));
}
function Rs(t) {
  return $t(t) ? t : dr(
    t,
    !1,
    Qh,
    au,
    Is
  );
}
function Os(t) {
  return dr(
    t,
    !0,
    tu,
    lu,
    As
  );
}
function He(t) {
  return dr(
    t,
    !0,
    eu,
    hu,
    xs
  );
}
function dr(t, e, i, r, n) {
  if (!z(t))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(t)}`), t;
  if (t.__v_raw && !(e && t.__v_isReactive))
    return t;
  const s = n.get(t);
  if (s)
    return s;
  const o = fu(t);
  if (o === 0)
    return t;
  const a = new Proxy(
    t,
    o === 2 ? r : i
  );
  return n.set(t, a), a;
}
function Vt(t) {
  return $t(t) ? Vt(t.__v_raw) : !!(t && t.__v_isReactive);
}
function $t(t) {
  return !!(t && t.__v_isReadonly);
}
function Ut(t) {
  return !!(t && t.__v_isShallow);
}
function zi(t) {
  return Vt(t) || $t(t);
}
function N(t) {
  const e = t && t.__v_raw;
  return e ? N(e) : t;
}
function du(t) {
  return Object.isExtensible(t) && kh(t, "__v_skip", !0), t;
}
const _r = (t) => z(t) ? Rs(t) : t, pr = (t) => z(t) ? Os(t) : t;
function rt(t) {
  return !!(t && t.__v_isRef === !0);
}
function _u(t) {
  return rt(t) ? t.value : t;
}
const pu = {
  get: (t, e, i) => _u(Reflect.get(t, e, i)),
  set: (t, e, i, r) => {
    const n = t[e];
    return rt(n) && !rt(i) ? (n.value = i, !0) : Reflect.set(t, e, i, r);
  }
};
function gu(t) {
  return Vt(t) ? t : new Proxy(t, pu);
}
/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const kt = [];
function vu(t) {
  kt.push(t);
}
function mu() {
  kt.pop();
}
function V(t, ...e) {
  ar();
  const i = kt.length ? kt[kt.length - 1].component : null, r = i && i.appContext.config.warnHandler, n = yu();
  if (r)
    Yt(
      r,
      i,
      11,
      [
        t + e.join(""),
        i && i.proxy,
        n.map(
          ({ vnode: s }) => `at <${Ks(i, s.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const s = [`[Vue warn]: ${t}`, ...e];
    n.length && s.push(`
`, ...Su(n)), console.warn(...s);
  }
  lr();
}
function yu() {
  let t = kt[kt.length - 1];
  if (!t)
    return [];
  const e = [];
  for (; t; ) {
    const i = e[0];
    i && i.vnode === t ? i.recurseCount++ : e.push({
      vnode: t,
      recurseCount: 0
    });
    const r = t.component && t.component.parent;
    t = r && r.vnode;
  }
  return e;
}
function Su(t) {
  const e = [];
  return t.forEach((i, r) => {
    e.push(...r === 0 ? [] : [`
`], ...Eu(i));
  }), e;
}
function Eu({ vnode: t, recurseCount: e }) {
  const i = e > 0 ? `... (${e} recursive calls)` : "", r = t.component ? t.component.parent == null : !1, n = ` at <${Ks(
    t.component,
    t.type,
    r
  )}`, s = ">" + i;
  return t.props ? [n, ...wu(t.props), s] : [n + s];
}
function wu(t) {
  const e = [], i = Object.keys(t);
  return i.slice(0, 3).forEach((r) => {
    e.push(...Ns(r, t[r]));
  }), i.length > 3 && e.push(" ..."), e;
}
function Ns(t, e, i) {
  return it(e) ? (e = JSON.stringify(e), i ? e : [`${t}=${e}`]) : typeof e == "number" || typeof e == "boolean" || e == null ? i ? e : [`${t}=${e}`] : rt(e) ? (e = Ns(t, N(e.value), !0), i ? e : [`${t}=Ref<`, e, ">"]) : $(e) ? [`${t}=fn${e.name ? `<${e.name}>` : ""}`] : (e = N(e), i ? e : [`${t}=`, e]);
}
const Cs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Yt(t, e, i, r) {
  try {
    return r ? t(...r) : t();
  } catch (n) {
    gr(n, e, i);
  }
}
function Fe(t, e, i, r) {
  if ($(t)) {
    const s = Yt(t, e, i, r);
    return s && Ch(s) && s.catch((o) => {
      gr(o, e, i);
    }), s;
  }
  const n = [];
  for (let s = 0; s < t.length; s++)
    n.push(Fe(t[s], e, i, r));
  return n;
}
function gr(t, e, i, r = !0) {
  const n = e ? e.vnode : null;
  if (e) {
    let s = e.parent;
    const o = e.proxy, a = process.env.NODE_ENV !== "production" ? Cs[i] : `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; s; ) {
      const h = s.ec;
      if (h) {
        for (let c = 0; c < h.length; c++)
          if (h[c](t, o, a) === !1)
            return;
      }
      s = s.parent;
    }
    const l = e.appContext.config.errorHandler;
    if (l) {
      Yt(
        l,
        null,
        10,
        [t, o, a]
      );
      return;
    }
  }
  bu(t, i, n, r);
}
function bu(t, e, i, r = !0) {
  if (process.env.NODE_ENV !== "production") {
    const n = Cs[e];
    if (i && vu(i), V(`Unhandled error${n ? ` during execution of ${n}` : ""}`), i && mu(), r)
      throw t;
    console.error(t);
  } else
    console.error(t);
}
let ri = !1, Ki = !1;
const st = [];
let wt = 0;
const Jt = [];
let _t = null, Et = 0;
const Ls = /* @__PURE__ */ Promise.resolve();
let vr = null;
const Du = 100;
function Tu(t) {
  const e = vr || Ls;
  return t ? e.then(this ? t.bind(this) : t) : e;
}
function Iu(t) {
  let e = wt + 1, i = st.length;
  for (; e < i; ) {
    const r = e + i >>> 1, n = st[r], s = De(n);
    s < t || s === t && n.pre ? e = r + 1 : i = r;
  }
  return e;
}
function mr(t) {
  (!st.length || !st.includes(
    t,
    ri && t.allowRecurse ? wt + 1 : wt
  )) && (t.id == null ? st.push(t) : st.splice(Iu(t.id), 0, t), Ps());
}
function Ps() {
  !ri && !Ki && (Ki = !0, vr = Ls.then(Vs));
}
function Ms(t) {
  L(t) ? Jt.push(...t) : (!_t || !_t.includes(
    t,
    t.allowRecurse ? Et + 1 : Et
  )) && Jt.push(t), Ps();
}
function Au(t) {
  if (Jt.length) {
    const e = [...new Set(Jt)].sort(
      (i, r) => De(i) - De(r)
    );
    if (Jt.length = 0, _t) {
      _t.push(...e);
      return;
    }
    for (_t = e, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), Et = 0; Et < _t.length; Et++)
      process.env.NODE_ENV !== "production" && ks(t, _t[Et]) || _t[Et]();
    _t = null, Et = 0;
  }
}
const De = (t) => t.id == null ? 1 / 0 : t.id, xu = (t, e) => {
  const i = De(t) - De(e);
  if (i === 0) {
    if (t.pre && !e.pre)
      return -1;
    if (e.pre && !t.pre)
      return 1;
  }
  return i;
};
function Vs(t) {
  Ki = !1, ri = !0, process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()), st.sort(xu);
  const e = process.env.NODE_ENV !== "production" ? (i) => ks(t, i) : jt;
  try {
    for (wt = 0; wt < st.length; wt++) {
      const i = st[wt];
      if (i && i.active !== !1) {
        if (process.env.NODE_ENV !== "production" && e(i))
          continue;
        Yt(i, null, 14);
      }
    }
  } finally {
    wt = 0, st.length = 0, Au(t), ri = !1, vr = null, (st.length || Jt.length) && Vs(t);
  }
}
function ks(t, e) {
  if (!t.has(e))
    t.set(e, 1);
  else {
    const i = t.get(e);
    if (i > Du) {
      const r = e.ownerInstance, n = r && zs(r.type);
      return gr(
        `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      t.set(e, i + 1);
  }
}
const le = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (ys().__VUE_HMR_RUNTIME__ = {
  createRecord: Vi(Ru),
  rerender: Vi(Ou),
  reload: Vi(Nu)
});
const ni = /* @__PURE__ */ new Map();
function Ru(t, e) {
  return ni.has(t) ? !1 : (ni.set(t, {
    initialDef: fe(e),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function fe(t) {
  return Us(t) ? t.__vccOpts : t;
}
function Ou(t, e) {
  const i = ni.get(t);
  i && (i.initialDef.render = e, [...i.instances].forEach((r) => {
    e && (r.render = e, fe(r.type).render = e), r.renderCache = [], r.effect.dirty = !0, r.update();
  }));
}
function Nu(t, e) {
  const i = ni.get(t);
  if (!i)
    return;
  e = fe(e), pn(i.initialDef, e);
  const r = [...i.instances];
  for (const n of r) {
    const s = fe(n.type);
    le.has(s) || (s !== i.initialDef && pn(s, e), le.add(s)), n.appContext.propsCache.delete(n.type), n.appContext.emitsCache.delete(n.type), n.appContext.optionsCache.delete(n.type), n.ceReload ? (le.add(s), n.ceReload(e.styles), le.delete(s)) : n.parent ? (n.parent.effect.dirty = !0, mr(n.parent.update)) : n.appContext.reload ? n.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Ms(() => {
    for (const n of r)
      le.delete(
        fe(n.type)
      );
  });
}
function pn(t, e) {
  lt(t, e);
  for (const i in t)
    i !== "__file" && !(i in e) && delete t[i];
}
function Vi(t) {
  return (e, i) => {
    try {
      return t(e, i);
    } catch (r) {
      console.error(r), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Wt, Xe = [];
function Ys(t, e) {
  var i, r;
  Wt = t, Wt ? (Wt.enabled = !0, Xe.forEach(({ event: n, args: s }) => Wt.emit(n, ...s)), Xe = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((r = (i = window.navigator) == null ? void 0 : i.userAgent) != null && r.includes("jsdom")) ? ((e.__VUE_DEVTOOLS_HOOK_REPLAY__ = e.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    Ys(s, e);
  }), setTimeout(() => {
    Wt || (e.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Xe = []);
  }, 3e3)) : Xe = [];
}
let Z = null, Cu = null;
const Lu = Symbol.for("v-ndc"), Pu = (t) => t.__isSuspense;
function Mu(t, e) {
  e && e.pendingBranch ? L(t) ? e.effects.push(...t) : e.effects.push(t) : Ms(t);
}
const Vu = Symbol.for("v-scx"), ku = () => {
  {
    const t = Uu(Vu);
    return t || process.env.NODE_ENV !== "production" && V(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), t;
  }
}, Ge = {};
function Yu(t, e, {
  immediate: i,
  deep: r,
  flush: n,
  once: s,
  onTrack: o,
  onTrigger: a
} = ht) {
  if (e && s) {
    const S = e;
    e = (...O) => {
      S(...O), b();
    };
  }
  process.env.NODE_ENV !== "production" && r !== void 0 && typeof r == "number" && V(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !e && (i !== void 0 && V(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && V(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && V(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = (S) => {
    V(
      "Invalid watch source: ",
      S,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, h = Di, c = (S) => r === !0 ? S : (
    // for deep: false, only traverse root-level properties
    Bt(S, r === !1 ? 1 : void 0)
  );
  let u, g = !1, m = !1;
  if (rt(t) ? (u = () => t.value, g = Ut(t)) : Vt(t) ? (u = () => c(t), g = !0) : L(t) ? (m = !0, g = t.some((S) => Vt(S) || Ut(S)), u = () => t.map((S) => {
    if (rt(S))
      return S.value;
    if (Vt(S))
      return c(S);
    if ($(S))
      return Yt(S, h, 2);
    process.env.NODE_ENV !== "production" && l(S);
  })) : $(t) ? e ? u = () => Yt(t, h, 2) : u = () => (w && w(), Fe(
    t,
    h,
    3,
    [f]
  )) : (u = jt, process.env.NODE_ENV !== "production" && l(t)), e && r) {
    const S = u;
    u = () => Bt(S());
  }
  let w, f = (S) => {
    w = v.onStop = () => {
      Yt(S, h, 4), w = v.onStop = void 0;
    };
  }, d;
  if (Bs)
    if (f = jt, e ? i && Fe(e, h, 3, [
      u(),
      m ? [] : void 0,
      f
    ]) : u(), n === "sync") {
      const S = ku();
      d = S.__watcherHandles || (S.__watcherHandles = []);
    } else
      return jt;
  let y = m ? new Array(t.length).fill(Ge) : Ge;
  const p = () => {
    if (!(!v.active || !v.dirty))
      if (e) {
        const S = v.run();
        (r || g || (m ? S.some((O, C) => ie(O, y[C])) : ie(S, y))) && (w && w(), Fe(e, h, 3, [
          S,
          // pass undefined as the old value when it's changed for the first time
          y === Ge ? void 0 : m && y[0] === Ge ? [] : y,
          f
        ]), y = S);
      } else
        v.run();
  };
  p.allowRecurse = !!e;
  let E;
  n === "sync" ? E = p : n === "post" ? E = () => En(p, h && h.suspense) : (p.pre = !0, h && (p.id = h.uid), E = () => mr(p));
  const v = new qh(u, jt, E), b = () => {
    v.stop();
  };
  return process.env.NODE_ENV !== "production" && (v.onTrack = o, v.onTrigger = a), e ? i ? p() : y = v.run() : n === "post" ? En(
    v.run.bind(v),
    h && h.suspense
  ) : v.run(), d && d.push(b), b;
}
function Hu(t, e, i) {
  const r = this.proxy, n = it(t) ? t.includes(".") ? Xu(r, t) : () => r[t] : t.bind(r, r);
  let s;
  $(e) ? s = e : (s = e.handler, i = e);
  const o = sc(this), a = Yu(n, s.bind(r), i);
  return o(), a;
}
function Xu(t, e) {
  const i = e.split(".");
  return () => {
    let r = t;
    for (let n = 0; n < i.length && r; n++)
      r = r[i[n]];
    return r;
  };
}
function Bt(t, e, i = 0, r) {
  if (!z(t) || t.__v_skip)
    return t;
  if (e && e > 0) {
    if (i >= e)
      return t;
    i++;
  }
  if (r = r || /* @__PURE__ */ new Set(), r.has(t))
    return t;
  if (r.add(t), rt(t))
    Bt(t.value, e, i, r);
  else if (L(t))
    for (let n = 0; n < t.length; n++)
      Bt(t[n], e, i, r);
  else if (Nh(t) || Kt(t))
    t.forEach((n) => {
      Bt(n, e, i, r);
    });
  else if (Ph(t))
    for (const n in t)
      Bt(t[n], e, i, r);
  return t;
}
const Gu = (t) => !!t.type.__asyncLoader;
function $u(t, e, i, r) {
  let n;
  const s = i && i[r];
  if (L(t) || it(t)) {
    n = new Array(t.length);
    for (let o = 0, a = t.length; o < a; o++)
      n[o] = e(t[o], o, void 0, s && s[o]);
  } else if (typeof t == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(t) && V(`The v-for range expect an integer value but got ${t}.`), n = new Array(t);
    for (let o = 0; o < t; o++)
      n[o] = e(o + 1, o, void 0, s && s[o]);
  } else if (z(t))
    if (t[Symbol.iterator])
      n = Array.from(
        t,
        (o, a) => e(o, a, void 0, s && s[a])
      );
    else {
      const o = Object.keys(t);
      n = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const h = o[a];
        n[a] = e(t[h], h, a, s && s[a]);
      }
    }
  else
    n = [];
  return i && (i[r] = n), n;
}
function Fu(t, e, i = {}, r, n) {
  if (Z.isCE || Z.parent && Gu(Z.parent) && Z.parent.isCE)
    return e !== "default" && (i.name = e), Sr("slot", i, r && r());
  let s = t[e];
  process.env.NODE_ENV !== "production" && s && s.length > 1 && (V(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), s = () => []), s && s._c && (s._d = !1), We();
  const o = s && Hs(s(i)), a = tc(
    Ae,
    {
      key: i.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      o && o.key || `_${e}`
    },
    o || (r ? r() : []),
    o && t._ === 1 ? 64 : -2
  );
  return !n && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a;
}
function Hs(t) {
  return t.some((e) => $s(e) ? !(e.type === Xs || e.type === Ae && !Hs(e.children)) : !0) ? t : null;
}
const Ui = (t) => t ? oc(t) ? ac(t) || t.proxy : Ui(t.parent) : null, de = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ lt(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => process.env.NODE_ENV !== "production" ? He(t.props) : t.props,
    $attrs: (t) => process.env.NODE_ENV !== "production" ? He(t.attrs) : t.attrs,
    $slots: (t) => process.env.NODE_ENV !== "production" ? He(t.slots) : t.slots,
    $refs: (t) => process.env.NODE_ENV !== "production" ? He(t.refs) : t.refs,
    $parent: (t) => Ui(t.parent),
    $root: (t) => Ui(t.root),
    $emit: (t) => t.emit,
    $options: (t) => ju(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      t.effect.dirty = !0, mr(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Tu.bind(t.proxy)),
    $watch: (t) => Hu.bind(t)
  })
), qu = (t) => t === "_" || t === "$", ki = (t, e) => t !== ht && !t.__isScriptSetup && k(t, e), Wu = {
  get({ _: t }, e) {
    const { ctx: i, setupState: r, data: n, props: s, accessCache: o, type: a, appContext: l } = t;
    if (process.env.NODE_ENV !== "production" && e === "__isVue")
      return !0;
    let h;
    if (e[0] !== "$") {
      const m = o[e];
      if (m !== void 0)
        switch (m) {
          case 1:
            return r[e];
          case 2:
            return n[e];
          case 4:
            return i[e];
          case 3:
            return s[e];
        }
      else {
        if (ki(r, e))
          return o[e] = 1, r[e];
        if (n !== ht && k(n, e))
          return o[e] = 2, n[e];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (h = t.propsOptions[0]) && k(h, e)
        )
          return o[e] = 3, s[e];
        if (i !== ht && k(i, e))
          return o[e] = 4, i[e];
        o[e] = 0;
      }
    }
    const c = de[e];
    let u, g;
    if (c)
      return e === "$attrs" ? (U(t, "get", e), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && e === "$slots" && U(t, "get", e), c(t);
    if (
      // css module (injected by vue-loader)
      (u = a.__cssModules) && (u = u[e])
    )
      return u;
    if (i !== ht && k(i, e))
      return o[e] = 4, i[e];
    if (
      // global properties
      g = l.config.globalProperties, k(g, e)
    )
      return g[e];
    process.env.NODE_ENV !== "production" && Z && (!it(e) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    e.indexOf("__v") !== 0) && (n !== ht && qu(e[0]) && k(n, e) ? V(
      `Property ${JSON.stringify(
        e
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : t === Z && V(
      `Property ${JSON.stringify(e)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: t }, e, i) {
    const { data: r, setupState: n, ctx: s } = t;
    return ki(n, e) ? (n[e] = i, !0) : process.env.NODE_ENV !== "production" && n.__isScriptSetup && k(n, e) ? (V(`Cannot mutate <script setup> binding "${e}" from Options API.`), !1) : r !== ht && k(r, e) ? (r[e] = i, !0) : k(t.props, e) ? (process.env.NODE_ENV !== "production" && V(`Attempting to mutate prop "${e}". Props are readonly.`), !1) : e[0] === "$" && e.slice(1) in t ? (process.env.NODE_ENV !== "production" && V(
      `Attempting to mutate public property "${e}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && e in t.appContext.config.globalProperties ? Object.defineProperty(s, e, {
      enumerable: !0,
      configurable: !0,
      value: i
    }) : s[e] = i, !0);
  },
  has({
    _: { data: t, setupState: e, accessCache: i, ctx: r, appContext: n, propsOptions: s }
  }, o) {
    let a;
    return !!i[o] || t !== ht && k(t, o) || ki(e, o) || (a = s[0]) && k(a, o) || k(r, o) || k(de, o) || k(n.config.globalProperties, o);
  },
  defineProperty(t, e, i) {
    return i.get != null ? t._.accessCache[e] = 0 : k(i, "value") && this.set(t, e, i.value, null), Reflect.defineProperty(t, e, i);
  }
};
process.env.NODE_ENV !== "production" && (Wu.ownKeys = (t) => (V(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(t)));
function gn(t) {
  return L(t) ? t.reduce(
    (e, i) => (e[i] = null, e),
    {}
  ) : t;
}
function ju(t) {
  const e = t.type, { mixins: i, extends: r } = e, {
    mixins: n,
    optionsCache: s,
    config: { optionMergeStrategies: o }
  } = t.appContext, a = s.get(e);
  let l;
  return a ? l = a : !n.length && !i && !r ? l = e : (l = {}, n.length && n.forEach(
    (h) => si(l, h, o, !0)
  ), si(l, e, o)), z(e) && s.set(e, l), l;
}
function si(t, e, i, r = !1) {
  const { mixins: n, extends: s } = e;
  s && si(t, s, i, !0), n && n.forEach(
    (o) => si(t, o, i, !0)
  );
  for (const o in e)
    if (r && o === "expose")
      process.env.NODE_ENV !== "production" && V(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const a = Bu[o] || i && i[o];
      t[o] = a ? a(t[o], e[o]) : e[o];
    }
  return t;
}
const Bu = {
  data: vn,
  props: yn,
  emits: yn,
  // objects
  methods: he,
  computed: he,
  // lifecycle
  beforeCreate: B,
  created: B,
  beforeMount: B,
  mounted: B,
  beforeUpdate: B,
  updated: B,
  beforeDestroy: B,
  beforeUnmount: B,
  destroyed: B,
  unmounted: B,
  activated: B,
  deactivated: B,
  errorCaptured: B,
  serverPrefetch: B,
  // assets
  components: he,
  directives: he,
  // watch
  watch: Ku,
  // provide / inject
  provide: vn,
  inject: zu
};
function vn(t, e) {
  return e ? t ? function() {
    return lt(
      $(t) ? t.call(this, this) : t,
      $(e) ? e.call(this, this) : e
    );
  } : e : t;
}
function zu(t, e) {
  return he(mn(t), mn(e));
}
function mn(t) {
  if (L(t)) {
    const e = {};
    for (let i = 0; i < t.length; i++)
      e[t[i]] = t[i];
    return e;
  }
  return t;
}
function B(t, e) {
  return t ? [...new Set([].concat(t, e))] : e;
}
function he(t, e) {
  return t ? lt(/* @__PURE__ */ Object.create(null), t, e) : e;
}
function yn(t, e) {
  return t ? L(t) && L(e) ? [.../* @__PURE__ */ new Set([...t, ...e])] : lt(
    /* @__PURE__ */ Object.create(null),
    gn(t),
    gn(e ?? {})
  ) : e;
}
function Ku(t, e) {
  if (!t)
    return e;
  if (!e)
    return t;
  const i = lt(/* @__PURE__ */ Object.create(null), t);
  for (const r in e)
    i[r] = B(t[r], e[r]);
  return i;
}
let Sn = null;
function Uu(t, e, i = !1) {
  const r = Di || Z;
  if (r || Sn) {
    const n = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Sn._context.provides;
    if (n && t in n)
      return n[t];
    if (arguments.length > 1)
      return i && $(e) ? e.call(r && r.proxy) : e;
    process.env.NODE_ENV !== "production" && V(`injection "${String(t)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && V("inject() can only be used inside setup() or functional components.");
}
const En = Mu, Ju = (t) => t.__isTeleport, Ae = Symbol.for("v-fgt"), Zu = Symbol.for("v-txt"), Xs = Symbol.for("v-cmt"), qe = [];
let ot = null;
function We(t = !1) {
  qe.push(ot = t ? null : []);
}
function Qu() {
  qe.pop(), ot = qe[qe.length - 1] || null;
}
function Gs(t) {
  return t.dynamicChildren = ot || xh, Qu(), ot && ot.push(t), t;
}
function Yi(t, e, i, r, n, s) {
  return Gs(
    yr(
      t,
      e,
      i,
      r,
      n,
      s,
      !0
    )
  );
}
function tc(t, e, i, r, n) {
  return Gs(
    Sr(
      t,
      e,
      i,
      r,
      n,
      !0
    )
  );
}
function $s(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
const ec = (...t) => Ws(
  ...t
), Fs = "__vInternal", qs = ({ key: t }) => t ?? null, je = ({
  ref: t,
  ref_key: e,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? it(t) || rt(t) || $(t) ? { i: Z, r: t, k: e, f: !!i } : t : null);
function yr(t, e = null, i = null, r = 0, n = null, s = t === Ae ? 0 : 1, o = !1, a = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: e,
    key: e && qs(e),
    ref: e && je(e),
    scopeId: Cu,
    slotScopeIds: null,
    children: i,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: r,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: Z
  };
  return a ? (Er(l, i), s & 128 && t.normalize(l)) : i && (l.shapeFlag |= it(i) ? 8 : 16), process.env.NODE_ENV !== "production" && l.key !== l.key && V("VNode created with invalid key (NaN). VNode type:", l.type), // avoid a block node from tracking itself
  !o && // has current parent block
  ot && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && ot.push(l), l;
}
const Sr = process.env.NODE_ENV !== "production" ? ec : Ws;
function Ws(t, e = null, i = null, r = 0, n = null, s = !1) {
  if ((!t || t === Lu) && (process.env.NODE_ENV !== "production" && !t && V(`Invalid vnode type when creating vnode: ${t}.`), t = Xs), $s(t)) {
    const a = oi(
      t,
      e,
      !0
      /* mergeRef: true */
    );
    return i && Er(a, i), !s && ot && (a.shapeFlag & 6 ? ot[ot.indexOf(t)] = a : ot.push(a)), a.patchFlag |= -2, a;
  }
  if (Us(t) && (t = t.__vccOpts), e) {
    e = ic(e);
    let { class: a, style: l } = e;
    a && !it(a) && (e.class = wi(a)), z(l) && (zi(l) && !L(l) && (l = lt({}, l)), e.style = Ei(l));
  }
  const o = it(t) ? 1 : Pu(t) ? 128 : Ju(t) ? 64 : z(t) ? 4 : $(t) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && o & 4 && zi(t) && (t = N(t), V(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    t
  )), yr(
    t,
    e,
    i,
    r,
    n,
    o,
    s,
    !0
  );
}
function ic(t) {
  return t ? zi(t) || Fs in t ? lt({}, t) : t : null;
}
function oi(t, e, i = !1) {
  const { props: r, ref: n, patchFlag: s, children: o } = t, a = e ? nc(r || {}, e) : r;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: a,
    key: a && qs(a),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && n ? L(n) ? n.concat(je(e)) : [n, je(e)] : je(e)
    ) : n,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && s === -1 && L(o) ? o.map(js) : o,
    target: t.target,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && t.type !== Ae ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: t.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && oi(t.ssContent),
    ssFallback: t.ssFallback && oi(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
}
function js(t) {
  const e = oi(t);
  return L(t.children) && (e.children = t.children.map(js)), e;
}
function rc(t = " ", e = 0) {
  return Sr(Zu, null, t, e);
}
function Er(t, e) {
  let i = 0;
  const { shapeFlag: r } = t;
  if (e == null)
    e = null;
  else if (L(e))
    i = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const n = e.default;
      n && (n._c && (n._d = !1), Er(t, n()), n._c && (n._d = !0));
      return;
    } else {
      i = 32;
      const n = e._;
      !n && !(Fs in e) ? e._ctx = Z : n === 3 && Z && (Z.slots._ === 1 ? e._ = 1 : (e._ = 2, t.patchFlag |= 1024));
    }
  else
    $(e) ? (e = { default: e, _ctx: Z }, i = 32) : (e = String(e), r & 64 ? (i = 16, e = [rc(e)]) : i = 8);
  t.children = e, t.shapeFlag |= i;
}
function nc(...t) {
  const e = {};
  for (let i = 0; i < t.length; i++) {
    const r = t[i];
    for (const n in r)
      if (n === "class")
        e.class !== r.class && (e.class = wi([e.class, r.class]));
      else if (n === "style")
        e.style = Ei([e.style, r.style]);
      else if (Rh(n)) {
        const s = e[n], o = r[n];
        o && s !== o && !(L(s) && s.includes(o)) && (e[n] = s ? [].concat(s, o) : o);
      } else
        n !== "" && (e[n] = r[n]);
  }
  return e;
}
let Di = null, Ji;
{
  const t = ys(), e = (i, r) => {
    let n;
    return (n = t[i]) || (n = t[i] = []), n.push(r), (s) => {
      n.length > 1 ? n.forEach((o) => o(s)) : n[0](s);
    };
  };
  Ji = e(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Di = i
  ), e(
    "__VUE_SSR_SETTERS__",
    (i) => Bs = i
  );
}
const sc = (t) => {
  const e = Di;
  return Ji(t), t.scope.on(), () => {
    t.scope.off(), Ji(e);
  };
};
function oc(t) {
  return t.vnode.shapeFlag & 4;
}
let Bs = !1;
function ac(t) {
  if (t.exposed)
    return t.exposeProxy || (t.exposeProxy = new Proxy(gu(du(t.exposed)), {
      get(e, i) {
        if (i in e)
          return e[i];
        if (i in de)
          return de[i](t);
      },
      has(e, i) {
        return i in e || i in de;
      }
    }));
}
const lc = /(?:^|[-_])(\w)/g, hc = (t) => t.replace(lc, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function zs(t, e = !0) {
  return $(t) ? t.displayName || t.name : t.name || e && t.__name;
}
function Ks(t, e, i = !1) {
  let r = zs(e);
  if (!r && e.__file) {
    const n = e.__file.match(/([^/\\]+)\.\w+$/);
    n && (r = n[1]);
  }
  if (!r && t && t.parent) {
    const n = (s) => {
      for (const o in s)
        if (s[o] === e)
          return o;
    };
    r = n(
      t.components || t.parent.type.components
    ) || n(t.appContext.components);
  }
  return r ? hc(r) : i ? "App" : "Anonymous";
}
function Us(t) {
  return $(t) && "__vccOpts" in t;
}
function uc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const t = { style: "color:#3ba776" }, e = { style: "color:#1677ff" }, i = { style: "color:#f5222d" }, r = { style: "color:#eb2f96" }, n = {
    header(u) {
      return z(u) ? u.__isVue ? ["div", t, "VueInstance"] : rt(u) ? [
        "div",
        {},
        ["span", t, c(u)],
        "<",
        a(u.value),
        ">"
      ] : Vt(u) ? [
        "div",
        {},
        ["span", t, Ut(u) ? "ShallowReactive" : "Reactive"],
        "<",
        a(u),
        `>${$t(u) ? " (readonly)" : ""}`
      ] : $t(u) ? [
        "div",
        {},
        ["span", t, Ut(u) ? "ShallowReadonly" : "Readonly"],
        "<",
        a(u),
        ">"
      ] : null : null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const g = [];
    u.type.props && u.props && g.push(o("props", N(u.props))), u.setupState !== ht && g.push(o("setup", u.setupState)), u.data !== ht && g.push(o("data", N(u.data)));
    const m = l(u, "computed");
    m && g.push(o("computed", m));
    const w = l(u, "inject");
    return w && g.push(o("injected", w)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: r.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function o(u, g) {
    return g = lt({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((m) => [
          "div",
          {},
          ["span", r, m + ": "],
          a(g[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function a(u, g = !0) {
    return typeof u == "number" ? ["span", e, u] : typeof u == "string" ? ["span", i, JSON.stringify(u)] : typeof u == "boolean" ? ["span", r, u] : z(u) ? ["object", { object: g ? N(u) : u }] : ["span", i, String(u)];
  }
  function l(u, g) {
    const m = u.type;
    if ($(m))
      return;
    const w = {};
    for (const f in u.ctx)
      h(m, f, g) && (w[f] = u.ctx[f]);
    return w;
  }
  function h(u, g, m) {
    const w = u[m];
    if (L(w) && w.includes(g) || z(w) && g in w || u.extends && h(u.extends, g, m) || u.mixins && u.mixins.some((f) => h(f, g, m)))
      return !0;
  }
  function c(u) {
    return Ut(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function cc() {
  uc();
}
process.env.NODE_ENV !== "production" && cc();
const fc = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [r, n] of e)
    i[r] = n;
  return i;
}, dc = {
  name: "Vuuri",
  props: {
    /**
     * Optional class name to add to the grid. If not, one will be provided
     */
    className: {
      type: String,
      required: !1,
      default: () => `class${Mi().replace(/-/g, "")}`
    },
    /**
     * To set up options of the grid
     * https://github.com/haltu/muuri#grid-options
     */
    options: {
      type: Object,
      required: !1,
      default: () => ({})
    },
    /**
     * Array input for items to display (via v-model)
     */
    modelValue: {
      type: Array,
      required: !1
    },
    /**
     * Identifier property for each item
     */
    itemKey: {
      type: String,
      required: !1,
      default: () => nn.key
    },
    /**
     * Callback to fetch a dynamic width based on item
     */
    getItemWidth: {
      type: Function,
      required: !1,
      default: () => sn.width
    },
    /**
     * Callback to fetch a dynamic height based on item
     */
    getItemHeight: {
      type: Function,
      required: !1,
      default: () => sn.height
    },
    /**
     * Enable drag and drop feature on the grid
     */
    dragEnabled: {
      type: Boolean,
      required: !1,
      default: !1
    },
    /**
     * Selector for determining the handle to activate dragging
     */
    dragHandle: {
      type: String,
      required: !1,
      default: Ih.select
    },
    /**
     * When dragEnabled is on, can control which other grid you can drag into
     */
    groupId: {
      type: [String, Number],
      required: !1
    },
    /**
     * When dragEnabled is on, can control which other grid you can drag into
     */
    groupIds: {
      type: [Array],
      required: !1
    }
  },
  data() {
    return {
      /**
       * Deep copy of props items
       * @type Array<*>
       */
      copiedItems: [],
      /**
       * Map of events with respective listener function
       * @type Object.<string, function>
       */
      events: {},
      /*
       * The generated Muuri Options object
       */
      muuriOptions: {}
    };
  },
  watch: {
    modelValue: {
      handler(t) {
        this.internallySet || this._sync(t, this.copiedItems);
      },
      deep: !0
    }
  },
  computed: {
    selector() {
      return `.${this.className}`;
    }
  },
  methods: {
    /**
     * Manually update the items in the muuri grid
     */
    update() {
      this.$nextTick(() => {
        this.muuri.refreshItems().layout(!0, () => this.$emit("updated"));
      });
    },
    /**
     * Prepares the muuri instance
     * @private
     */
    _setup() {
      this.muuri = new T(this.selector, this.muuriOptions), this.groupId && tt.addGrid(this.groupId, this.muuri), this.groupIds && tt.addGridToGroups(this.groupIds, this.muuri), this.observer = new ResizeObserver(() => {
        this._resizeOnLoad();
      }), this.observer.observe(this.muuri.getElement()), this._sync(this.modelValue, []), this.$nextTick(() => {
        tt.setItemsForGridId(this.gridKey, this.modelValue);
      });
    },
    /**
     * @private
     */
    _setupNonReactiveProps() {
      this.muuri = void 0, this.observer = void 0, this.gridKey = Mi().replace(/-/g, "");
    },
    /**
     * Creates the options object for Muuri
     * @private
     */
    _setupOptions() {
      if (this.dragEnabled && (this.muuriOptions = { ...this._generateDragOptions(), ...this.muuriOptions }), this.groupId || this.groupIds) {
        let t = [];
        this.groupId && t.push(this.groupId), this.groupIds && (t = t.concat(this.groupIds)), this.muuriOptions.dragSort = () => tt.getGrids(t);
      }
      this.muuriOptions = { ...this.options, ...this.muuriOptions };
    },
    /**
     * @private
     */
    _generateDragOptions() {
      return {
        dragEnabled: !0,
        dragHandle: this.dragHandle,
        dragContainer: document.querySelector(`.muuri-grid${this.selector}`),
        dragRelease: {
          duration: 400,
          easing: "cubic-bezier(0.625, 0.225, 0.100, 0.890)",
          useDragContainer: !0
        },
        dragPlaceholder: {
          enabled: !0,
          createElement(t) {
            return t.getElement().cloneNode(!0);
          }
        },
        dragAutoScroll: {
          targets: [window],
          sortDuringScroll: !1,
          syncAfterScroll: !1
        }
      };
    },
    /**
     * Registers Muuri events
     * @private
     */
    _registerEvents() {
      Object.values(Ct).forEach((t) => {
        this.events[t] = (...e) => {
          this.$emit(t, ...e);
        }, this.muuri.on(t, this.events[t]), t === Ct.dragStart && this.muuri.on(t, this._onDragStart), t === Ct.send && this.muuri.on(t, this._onItemSend), t === Ct.receive && this.muuri.on(t, this._onItemReceive), t === Ct.move && this.muuri.on(t, this._onItemMove), t === Ct.dragEnd && this.muuri.on(t, this._onDragEnd);
      });
    },
    /**
     * Unregister Muuri events
     * @private
     */
    _unregisterEvents() {
      Object.values(Ct).forEach((t) => {
        this.muuri.off(t, this.events[t]), delete this.events[t];
      });
    },
    /**
     * Listener when dragging begins
     * @type {Muuri.Item} item
     * @private
     */
    _onDragStart(t) {
      tt.setDraggingGridItem(t);
    },
    /**
     * Listener when item moves within the same grid
     * @type {Muuri.Item} item
     * @private
     */
    _onItemMove({ item: t }) {
      const e = this._reOrderWithItem(t);
      this._emitValue(e);
    },
    /**
     * Listener when item leaves its original grid
     * @type {Muuri.Item} item
     * @private
     */
    _onItemSend({ item: t }) {
      const e = this.modelValue.findIndex(
        (r) => r[this.itemKey] == t.getElement().dataset.itemKey
      ), i = this.modelValue.splice(e, 1)[0];
      tt.setDraggingItem(i), this._emitValue(this.modelValue);
    },
    /**
     * Listener when item enters a new grid
     * @private
     */
    _onItemReceive() {
      const t = tt.getDraggingItem();
      this.modelValue.push(t);
      const e = this._reOrderWithItem(tt.getDraggingGridItem());
      this._emitValue(e);
    },
    /**
     * Listener when dragging ends
     */
    _onDragEnd() {
      tt.setDraggingGridItem(null), tt.setDraggingItem(null);
    },
    /**
     * Makes sure the items order is updated with value
     * @type {Muuri.Item} item
     * @private
     */
    _reOrderWithItem(t) {
      const e = t.getGrid();
      let i = 0;
      const r = e.getItems().reduce((n, s) => (n[s.getElement().dataset.itemKey] = i, i += 1, n), {});
      return this.modelValue.reduce((n, s) => (n[r[s[this.itemKey]]] = s, n), []);
    },
    /**
     * Styles for each grid item
     * @private
     */
    _getItemStyles(t) {
      return {
        width: this.getItemWidth(t),
        height: this.getItemHeight(t)
      };
    },
    /**
     * Creates a unique identifier for the item based its property values
     * and adds a uuid
     * @param item
     * @returns {string}
     * @private
     */
    _generateItemKey(t) {
      t._$muuri_id = Mi();
    },
    /**
     * Callback used to resize the muuri grid
     * @private
     */
    _resizeOnLoad: $a(function() {
      this.$nextTick(() => {
        this.update();
      }, 100);
    }),
    /**
     * Returns the difference between the two arrays
     * @param {Array<*>} newValue
     * @param {Array<*>} oldValue
     * @returns {Array<*>}
     * @private
     */
    _getDiff(t, e) {
      return za(t, e, (i, r) => i[this.itemKey] === r[this.itemKey]);
    },
    /**
     * Apply items updates on muuri
     * @param {?Array<*>} newItems
     * @param {?Array<*>} oldItems
     * @private
     */
    _sync(t = null, e = null) {
      !t || !e || this._remove(t, e).then(() => {
        this.update(), this._add(t, e), tt.setItemsForGridId(this.gridKey, this.copiedItems);
      });
    },
    /**
     * Remove deleted items from muuri
     * @param {Array<*>}  newItems
     * @param {Array<*>}  oldItems
     * @returns {Promise<void>}
     * @private
     */
    _remove(t, e) {
      const i = this._getDiff(e, t);
      if (!i.length)
        return console.log(t, e), Promise.resolve();
      const r = [];
      return i.forEach((n) => {
        const s = this.muuri.getItems().find((o) => n[this.itemKey] + "" === o.getElement().dataset.itemKey);
        s && r.push(s);
      }), r.length ? new Promise((n) => {
        this.muuri.hide(r, {
          onFinish: () => {
            this.muuri.remove(r), i.forEach((s) => {
              const o = this.copiedItems.findIndex(
                (a) => a[this.itemKey] === s[this.itemKey]
              );
              this.copiedItems.splice(o, 1);
            }), n();
          }
        });
      }) : Promise.resolve();
    },
    /**
     * Add new items to muuri
     * @param newItems
     * @param oldItems
     * @private
     */
    _add(t, e) {
      let i = this._getDiff(t, e);
      i = this._getDiff(i, this.copiedItems), i.length && (this.itemKey === nn.key && i.forEach((r) => this._generateItemKey(r)), this.copiedItems = this.copiedItems.concat(i), this.$nextTick(() => {
        i.forEach((r) => {
          const n = document.querySelector(
            `${this.selector} [data-item-key="${r[this.itemKey]}"]`
          );
          this.muuri.add(n, {
            layout: !1,
            active: !1
          });
        }), this.muuri.filter(() => !0);
      }));
    },
    _emitValue(t) {
      this.internallySet = !0, this.$emit("input", t), this.$nextTick(() => {
        this.internallySet = !1, tt.setItemsForGridId(this.gridKey, this.modelValue);
      });
    }
  },
  created() {
    this._setupNonReactiveProps(), this._setupOptions();
  },
  mounted() {
    this._setup(), this._registerEvents();
  },
  beforeUnmount() {
    this._unregisterEvents(), this.$emit("on-destroy", this);
  }
}, _c = ["data-grid-key"], pc = ["data-item-key"], gc = { class: "muuri-item-content" };
function vc(t, e, i, r, n, s) {
  return We(), Yi("div", {
    ref: "muuri",
    class: wi(["muuri-grid", i.className]),
    "data-grid-key": t.gridKey,
    "test-id": "muuri-grid-container"
  }, [
    (We(!0), Yi(Ae, null, $u(n.copiedItems, (o) => (We(), Yi("div", {
      key: o[i.itemKey],
      style: Ei(s._getItemStyles(o)),
      class: "muuri-item",
      "data-item-key": o[i.itemKey],
      "test-id": "muuri-grid-item"
    }, [
      yr("div", gc, [
        Fu(t.$slots, "item", { item: o }, void 0, !0)
      ])
    ], 12, pc))), 128))
  ], 10, _c);
}
const mc = /* @__PURE__ */ fc(dc, [["render", vc], ["__scopeId", "data-v-d0725908"]]);
export {
  Ct as GridEvent,
  mc as default
};
