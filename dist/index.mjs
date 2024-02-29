var qn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Es = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
Es.exports;
(function(e, n) {
  (function() {
    var r, o = "4.17.21", u = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", h = "Expected a function", d = "Invalid `variable` option passed into `_.template`", v = "__lodash_hash_undefined__", w = 500, x = "__lodash_placeholder__", S = 1, N = 2, P = 4, F = 1, I = 2, A = 1, M = 2, L = 4, W = 8, C = 16, G = 32, Y = 64, ot = 128, ct = 256, it = 512, we = 30, Et = "...", Bt = 800, Ne = 16, It = 1, ki = 2, fr = 3, Pe = 1 / 0, Ee = 9007199254740991, hr = 17976931348623157e292, xi = NaN, $t = 4294967295, Qc = $t - 1, jc = $t >>> 1, t_ = [
      ["ary", ot],
      ["bind", A],
      ["bindKey", M],
      ["curry", W],
      ["curryRight", C],
      ["flip", it],
      ["partial", G],
      ["partialRight", Y],
      ["rearg", ct]
    ], qi = "[object Arguments]", cr = "[object Array]", e_ = "[object AsyncFunction]", xn = "[object Boolean]", An = "[object Date]", i_ = "[object DOMException]", _r = "[object Error]", dr = "[object Function]", lu = "[object GeneratorFunction]", xe = "[object Map]", In = "[object Number]", n_ = "[object Null]", Ge = "[object Object]", fu = "[object Promise]", r_ = "[object Proxy]", Tn = "[object RegExp]", Ae = "[object Set]", Dn = "[object String]", pr = "[object Symbol]", s_ = "[object Undefined]", Rn = "[object WeakMap]", o_ = "[object WeakSet]", bn = "[object ArrayBuffer]", Ui = "[object DataView]", Zs = "[object Float32Array]", Js = "[object Float64Array]", Qs = "[object Int8Array]", js = "[object Int16Array]", to = "[object Int32Array]", eo = "[object Uint8Array]", io = "[object Uint8ClampedArray]", no = "[object Uint16Array]", ro = "[object Uint32Array]", a_ = /\b__p \+= '';/g, u_ = /\b(__p \+=) '' \+/g, l_ = /(__e\(.*?\)|\b__t\)) \+\n'';/g, hu = /&(?:amp|lt|gt|quot|#39);/g, cu = /[&<>"']/g, f_ = RegExp(hu.source), h_ = RegExp(cu.source), c_ = /<%-([\s\S]+?)%>/g, __ = /<%([\s\S]+?)%>/g, _u = /<%=([\s\S]+?)%>/g, d_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, p_ = /^\w*$/, g_ = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, so = /[\\^$.*+?()[\]{}|]/g, v_ = RegExp(so.source), oo = /^\s+/, m_ = /\s/, y_ = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, S_ = /\{\n\/\* \[wrapped with (.+)\] \*/, w_ = /,? & /, E_ = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, x_ = /[()=,{}\[\]\/\s]/, A_ = /\\(\\)?/g, I_ = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, du = /\w*$/, T_ = /^[-+]0x[0-9a-f]+$/i, D_ = /^0b[01]+$/i, R_ = /^\[object .+?Constructor\]$/, b_ = /^0o[0-7]+$/i, O_ = /^(?:0|[1-9]\d*)$/, L_ = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, gr = /($^)/, C_ = /['\n\r\u2028\u2029\\]/g, vr = "\\ud800-\\udfff", N_ = "\\u0300-\\u036f", P_ = "\\ufe20-\\ufe2f", M_ = "\\u20d0-\\u20ff", pu = N_ + P_ + M_, gu = "\\u2700-\\u27bf", vu = "a-z\\xdf-\\xf6\\xf8-\\xff", W_ = "\\xac\\xb1\\xd7\\xf7", F_ = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", H_ = "\\u2000-\\u206f", Y_ = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", mu = "A-Z\\xc0-\\xd6\\xd8-\\xde", yu = "\\ufe0e\\ufe0f", Su = W_ + F_ + H_ + Y_, ao = "['’]", V_ = "[" + vr + "]", wu = "[" + Su + "]", mr = "[" + pu + "]", Eu = "\\d+", B_ = "[" + gu + "]", xu = "[" + vu + "]", Au = "[^" + vr + Su + Eu + gu + vu + mu + "]", uo = "\\ud83c[\\udffb-\\udfff]", G_ = "(?:" + mr + "|" + uo + ")", Iu = "[^" + vr + "]", lo = "(?:\\ud83c[\\udde6-\\uddff]){2}", fo = "[\\ud800-\\udbff][\\udc00-\\udfff]", $i = "[" + mu + "]", Tu = "\\u200d", Du = "(?:" + xu + "|" + Au + ")", X_ = "(?:" + $i + "|" + Au + ")", Ru = "(?:" + ao + "(?:d|ll|m|re|s|t|ve))?", bu = "(?:" + ao + "(?:D|LL|M|RE|S|T|VE))?", Ou = G_ + "?", Lu = "[" + yu + "]?", k_ = "(?:" + Tu + "(?:" + [Iu, lo, fo].join("|") + ")" + Lu + Ou + ")*", q_ = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", U_ = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Cu = Lu + Ou + k_, $_ = "(?:" + [B_, lo, fo].join("|") + ")" + Cu, z_ = "(?:" + [Iu + mr + "?", mr, lo, fo, V_].join("|") + ")", K_ = RegExp(ao, "g"), Z_ = RegExp(mr, "g"), ho = RegExp(uo + "(?=" + uo + ")|" + z_ + Cu, "g"), J_ = RegExp([
      $i + "?" + xu + "+" + Ru + "(?=" + [wu, $i, "$"].join("|") + ")",
      X_ + "+" + bu + "(?=" + [wu, $i + Du, "$"].join("|") + ")",
      $i + "?" + Du + "+" + Ru,
      $i + "+" + bu,
      U_,
      q_,
      Eu,
      $_
    ].join("|"), "g"), Q_ = RegExp("[" + Tu + vr + pu + yu + "]"), j_ = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, td = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], ed = -1, dt = {};
    dt[Zs] = dt[Js] = dt[Qs] = dt[js] = dt[to] = dt[eo] = dt[io] = dt[no] = dt[ro] = !0, dt[qi] = dt[cr] = dt[bn] = dt[xn] = dt[Ui] = dt[An] = dt[_r] = dt[dr] = dt[xe] = dt[In] = dt[Ge] = dt[Tn] = dt[Ae] = dt[Dn] = dt[Rn] = !1;
    var _t = {};
    _t[qi] = _t[cr] = _t[bn] = _t[Ui] = _t[xn] = _t[An] = _t[Zs] = _t[Js] = _t[Qs] = _t[js] = _t[to] = _t[xe] = _t[In] = _t[Ge] = _t[Tn] = _t[Ae] = _t[Dn] = _t[pr] = _t[eo] = _t[io] = _t[no] = _t[ro] = !0, _t[_r] = _t[dr] = _t[Rn] = !1;
    var id = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, nd = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, rd = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, sd = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, od = parseFloat, ad = parseInt, Nu = typeof qn == "object" && qn && qn.Object === Object && qn, ud = typeof self == "object" && self && self.Object === Object && self, Lt = Nu || ud || Function("return this")(), co = n && !n.nodeType && n, Ai = co && !0 && e && !e.nodeType && e, Pu = Ai && Ai.exports === co, _o = Pu && Nu.process, ue = function() {
      try {
        var m = Ai && Ai.require && Ai.require("util").types;
        return m || _o && _o.binding && _o.binding("util");
      } catch {
      }
    }(), Mu = ue && ue.isArrayBuffer, Wu = ue && ue.isDate, Fu = ue && ue.isMap, Hu = ue && ue.isRegExp, Yu = ue && ue.isSet, Vu = ue && ue.isTypedArray;
    function te(m, T, E) {
      switch (E.length) {
        case 0:
          return m.call(T);
        case 1:
          return m.call(T, E[0]);
        case 2:
          return m.call(T, E[0], E[1]);
        case 3:
          return m.call(T, E[0], E[1], E[2]);
      }
      return m.apply(T, E);
    }
    function ld(m, T, E, V) {
      for (var $ = -1, at = m == null ? 0 : m.length; ++$ < at; ) {
        var Dt = m[$];
        T(V, Dt, E(Dt), m);
      }
      return V;
    }
    function le(m, T) {
      for (var E = -1, V = m == null ? 0 : m.length; ++E < V && T(m[E], E, m) !== !1; )
        ;
      return m;
    }
    function fd(m, T) {
      for (var E = m == null ? 0 : m.length; E-- && T(m[E], E, m) !== !1; )
        ;
      return m;
    }
    function Bu(m, T) {
      for (var E = -1, V = m == null ? 0 : m.length; ++E < V; )
        if (!T(m[E], E, m))
          return !1;
      return !0;
    }
    function ni(m, T) {
      for (var E = -1, V = m == null ? 0 : m.length, $ = 0, at = []; ++E < V; ) {
        var Dt = m[E];
        T(Dt, E, m) && (at[$++] = Dt);
      }
      return at;
    }
    function yr(m, T) {
      var E = m == null ? 0 : m.length;
      return !!E && zi(m, T, 0) > -1;
    }
    function po(m, T, E) {
      for (var V = -1, $ = m == null ? 0 : m.length; ++V < $; )
        if (E(T, m[V]))
          return !0;
      return !1;
    }
    function gt(m, T) {
      for (var E = -1, V = m == null ? 0 : m.length, $ = Array(V); ++E < V; )
        $[E] = T(m[E], E, m);
      return $;
    }
    function ri(m, T) {
      for (var E = -1, V = T.length, $ = m.length; ++E < V; )
        m[$ + E] = T[E];
      return m;
    }
    function go(m, T, E, V) {
      var $ = -1, at = m == null ? 0 : m.length;
      for (V && at && (E = m[++$]); ++$ < at; )
        E = T(E, m[$], $, m);
      return E;
    }
    function hd(m, T, E, V) {
      var $ = m == null ? 0 : m.length;
      for (V && $ && (E = m[--$]); $--; )
        E = T(E, m[$], $, m);
      return E;
    }
    function vo(m, T) {
      for (var E = -1, V = m == null ? 0 : m.length; ++E < V; )
        if (T(m[E], E, m))
          return !0;
      return !1;
    }
    var cd = mo("length");
    function _d(m) {
      return m.split("");
    }
    function dd(m) {
      return m.match(E_) || [];
    }
    function Gu(m, T, E) {
      var V;
      return E(m, function($, at, Dt) {
        if (T($, at, Dt))
          return V = at, !1;
      }), V;
    }
    function Sr(m, T, E, V) {
      for (var $ = m.length, at = E + (V ? 1 : -1); V ? at-- : ++at < $; )
        if (T(m[at], at, m))
          return at;
      return -1;
    }
    function zi(m, T, E) {
      return T === T ? Td(m, T, E) : Sr(m, Xu, E);
    }
    function pd(m, T, E, V) {
      for (var $ = E - 1, at = m.length; ++$ < at; )
        if (V(m[$], T))
          return $;
      return -1;
    }
    function Xu(m) {
      return m !== m;
    }
    function ku(m, T) {
      var E = m == null ? 0 : m.length;
      return E ? So(m, T) / E : xi;
    }
    function mo(m) {
      return function(T) {
        return T == null ? r : T[m];
      };
    }
    function yo(m) {
      return function(T) {
        return m == null ? r : m[T];
      };
    }
    function qu(m, T, E, V, $) {
      return $(m, function(at, Dt, ht) {
        E = V ? (V = !1, at) : T(E, at, Dt, ht);
      }), E;
    }
    function gd(m, T) {
      var E = m.length;
      for (m.sort(T); E--; )
        m[E] = m[E].value;
      return m;
    }
    function So(m, T) {
      for (var E, V = -1, $ = m.length; ++V < $; ) {
        var at = T(m[V]);
        at !== r && (E = E === r ? at : E + at);
      }
      return E;
    }
    function wo(m, T) {
      for (var E = -1, V = Array(m); ++E < m; )
        V[E] = T(E);
      return V;
    }
    function vd(m, T) {
      return gt(T, function(E) {
        return [E, m[E]];
      });
    }
    function Uu(m) {
      return m && m.slice(0, Zu(m) + 1).replace(oo, "");
    }
    function ee(m) {
      return function(T) {
        return m(T);
      };
    }
    function Eo(m, T) {
      return gt(T, function(E) {
        return m[E];
      });
    }
    function On(m, T) {
      return m.has(T);
    }
    function $u(m, T) {
      for (var E = -1, V = m.length; ++E < V && zi(T, m[E], 0) > -1; )
        ;
      return E;
    }
    function zu(m, T) {
      for (var E = m.length; E-- && zi(T, m[E], 0) > -1; )
        ;
      return E;
    }
    function md(m, T) {
      for (var E = m.length, V = 0; E--; )
        m[E] === T && ++V;
      return V;
    }
    var yd = yo(id), Sd = yo(nd);
    function wd(m) {
      return "\\" + sd[m];
    }
    function Ed(m, T) {
      return m == null ? r : m[T];
    }
    function Ki(m) {
      return Q_.test(m);
    }
    function xd(m) {
      return j_.test(m);
    }
    function Ad(m) {
      for (var T, E = []; !(T = m.next()).done; )
        E.push(T.value);
      return E;
    }
    function xo(m) {
      var T = -1, E = Array(m.size);
      return m.forEach(function(V, $) {
        E[++T] = [$, V];
      }), E;
    }
    function Ku(m, T) {
      return function(E) {
        return m(T(E));
      };
    }
    function si(m, T) {
      for (var E = -1, V = m.length, $ = 0, at = []; ++E < V; ) {
        var Dt = m[E];
        (Dt === T || Dt === x) && (m[E] = x, at[$++] = E);
      }
      return at;
    }
    function wr(m) {
      var T = -1, E = Array(m.size);
      return m.forEach(function(V) {
        E[++T] = V;
      }), E;
    }
    function Id(m) {
      var T = -1, E = Array(m.size);
      return m.forEach(function(V) {
        E[++T] = [V, V];
      }), E;
    }
    function Td(m, T, E) {
      for (var V = E - 1, $ = m.length; ++V < $; )
        if (m[V] === T)
          return V;
      return -1;
    }
    function Dd(m, T, E) {
      for (var V = E + 1; V--; )
        if (m[V] === T)
          return V;
      return V;
    }
    function Zi(m) {
      return Ki(m) ? bd(m) : cd(m);
    }
    function Ie(m) {
      return Ki(m) ? Od(m) : _d(m);
    }
    function Zu(m) {
      for (var T = m.length; T-- && m_.test(m.charAt(T)); )
        ;
      return T;
    }
    var Rd = yo(rd);
    function bd(m) {
      for (var T = ho.lastIndex = 0; ho.test(m); )
        ++T;
      return T;
    }
    function Od(m) {
      return m.match(ho) || [];
    }
    function Ld(m) {
      return m.match(J_) || [];
    }
    var Cd = function m(T) {
      T = T == null ? Lt : Ji.defaults(Lt.Object(), T, Ji.pick(Lt, td));
      var E = T.Array, V = T.Date, $ = T.Error, at = T.Function, Dt = T.Math, ht = T.Object, Ao = T.RegExp, Nd = T.String, fe = T.TypeError, Er = E.prototype, Pd = at.prototype, Qi = ht.prototype, xr = T["__core-js_shared__"], Ar = Pd.toString, ft = Qi.hasOwnProperty, Md = 0, Ju = function() {
        var t = /[^.]+$/.exec(xr && xr.keys && xr.keys.IE_PROTO || "");
        return t ? "Symbol(src)_1." + t : "";
      }(), Ir = Qi.toString, Wd = Ar.call(ht), Fd = Lt._, Hd = Ao(
        "^" + Ar.call(ft).replace(so, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Tr = Pu ? T.Buffer : r, oi = T.Symbol, Dr = T.Uint8Array, Qu = Tr ? Tr.allocUnsafe : r, Rr = Ku(ht.getPrototypeOf, ht), ju = ht.create, tl = Qi.propertyIsEnumerable, br = Er.splice, el = oi ? oi.isConcatSpreadable : r, Ln = oi ? oi.iterator : r, Ii = oi ? oi.toStringTag : r, Or = function() {
        try {
          var t = Oi(ht, "defineProperty");
          return t({}, "", {}), t;
        } catch {
        }
      }(), Yd = T.clearTimeout !== Lt.clearTimeout && T.clearTimeout, Vd = V && V.now !== Lt.Date.now && V.now, Bd = T.setTimeout !== Lt.setTimeout && T.setTimeout, Lr = Dt.ceil, Cr = Dt.floor, Io = ht.getOwnPropertySymbols, Gd = Tr ? Tr.isBuffer : r, il = T.isFinite, Xd = Er.join, kd = Ku(ht.keys, ht), Rt = Dt.max, Mt = Dt.min, qd = V.now, Ud = T.parseInt, nl = Dt.random, $d = Er.reverse, To = Oi(T, "DataView"), Cn = Oi(T, "Map"), Do = Oi(T, "Promise"), ji = Oi(T, "Set"), Nn = Oi(T, "WeakMap"), Pn = Oi(ht, "create"), Nr = Nn && new Nn(), tn = {}, zd = Li(To), Kd = Li(Cn), Zd = Li(Do), Jd = Li(ji), Qd = Li(Nn), Pr = oi ? oi.prototype : r, Mn = Pr ? Pr.valueOf : r, rl = Pr ? Pr.toString : r;
      function c(t) {
        if (yt(t) && !z(t) && !(t instanceof et)) {
          if (t instanceof he)
            return t;
          if (ft.call(t, "__wrapped__"))
            return of(t);
        }
        return new he(t);
      }
      var en = /* @__PURE__ */ function() {
        function t() {
        }
        return function(i) {
          if (!mt(i))
            return {};
          if (ju)
            return ju(i);
          t.prototype = i;
          var s = new t();
          return t.prototype = r, s;
        };
      }();
      function Mr() {
      }
      function he(t, i) {
        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
      }
      c.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: c_,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: __,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: _u,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: c
        }
      }, c.prototype = Mr.prototype, c.prototype.constructor = c, he.prototype = en(Mr.prototype), he.prototype.constructor = he;
      function et(t) {
        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = $t, this.__views__ = [];
      }
      function jd() {
        var t = new et(this.__wrapped__);
        return t.__actions__ = zt(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = zt(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = zt(this.__views__), t;
      }
      function tp() {
        if (this.__filtered__) {
          var t = new et(this);
          t.__dir__ = -1, t.__filtered__ = !0;
        } else
          t = this.clone(), t.__dir__ *= -1;
        return t;
      }
      function ep() {
        var t = this.__wrapped__.value(), i = this.__dir__, s = z(t), a = i < 0, l = s ? t.length : 0, _ = _g(0, l, this.__views__), p = _.start, g = _.end, y = g - p, D = a ? g : p - 1, R = this.__iteratees__, O = R.length, H = 0, B = Mt(y, this.__takeCount__);
        if (!s || !a && l == y && B == y)
          return Rl(t, this.__actions__);
        var k = [];
        t:
          for (; y-- && H < B; ) {
            D += i;
            for (var J = -1, q = t[D]; ++J < O; ) {
              var tt = R[J], nt = tt.iteratee, re = tt.type, kt = nt(q);
              if (re == ki)
                q = kt;
              else if (!kt) {
                if (re == It)
                  continue t;
                break t;
              }
            }
            k[H++] = q;
          }
        return k;
      }
      et.prototype = en(Mr.prototype), et.prototype.constructor = et;
      function Ti(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var a = t[i];
          this.set(a[0], a[1]);
        }
      }
      function ip() {
        this.__data__ = Pn ? Pn(null) : {}, this.size = 0;
      }
      function np(t) {
        var i = this.has(t) && delete this.__data__[t];
        return this.size -= i ? 1 : 0, i;
      }
      function rp(t) {
        var i = this.__data__;
        if (Pn) {
          var s = i[t];
          return s === v ? r : s;
        }
        return ft.call(i, t) ? i[t] : r;
      }
      function sp(t) {
        var i = this.__data__;
        return Pn ? i[t] !== r : ft.call(i, t);
      }
      function op(t, i) {
        var s = this.__data__;
        return this.size += this.has(t) ? 0 : 1, s[t] = Pn && i === r ? v : i, this;
      }
      Ti.prototype.clear = ip, Ti.prototype.delete = np, Ti.prototype.get = rp, Ti.prototype.has = sp, Ti.prototype.set = op;
      function Xe(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var a = t[i];
          this.set(a[0], a[1]);
        }
      }
      function ap() {
        this.__data__ = [], this.size = 0;
      }
      function up(t) {
        var i = this.__data__, s = Wr(i, t);
        if (s < 0)
          return !1;
        var a = i.length - 1;
        return s == a ? i.pop() : br.call(i, s, 1), --this.size, !0;
      }
      function lp(t) {
        var i = this.__data__, s = Wr(i, t);
        return s < 0 ? r : i[s][1];
      }
      function fp(t) {
        return Wr(this.__data__, t) > -1;
      }
      function hp(t, i) {
        var s = this.__data__, a = Wr(s, t);
        return a < 0 ? (++this.size, s.push([t, i])) : s[a][1] = i, this;
      }
      Xe.prototype.clear = ap, Xe.prototype.delete = up, Xe.prototype.get = lp, Xe.prototype.has = fp, Xe.prototype.set = hp;
      function ke(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.clear(); ++i < s; ) {
          var a = t[i];
          this.set(a[0], a[1]);
        }
      }
      function cp() {
        this.size = 0, this.__data__ = {
          hash: new Ti(),
          map: new (Cn || Xe)(),
          string: new Ti()
        };
      }
      function _p(t) {
        var i = zr(this, t).delete(t);
        return this.size -= i ? 1 : 0, i;
      }
      function dp(t) {
        return zr(this, t).get(t);
      }
      function pp(t) {
        return zr(this, t).has(t);
      }
      function gp(t, i) {
        var s = zr(this, t), a = s.size;
        return s.set(t, i), this.size += s.size == a ? 0 : 1, this;
      }
      ke.prototype.clear = cp, ke.prototype.delete = _p, ke.prototype.get = dp, ke.prototype.has = pp, ke.prototype.set = gp;
      function Di(t) {
        var i = -1, s = t == null ? 0 : t.length;
        for (this.__data__ = new ke(); ++i < s; )
          this.add(t[i]);
      }
      function vp(t) {
        return this.__data__.set(t, v), this;
      }
      function mp(t) {
        return this.__data__.has(t);
      }
      Di.prototype.add = Di.prototype.push = vp, Di.prototype.has = mp;
      function Te(t) {
        var i = this.__data__ = new Xe(t);
        this.size = i.size;
      }
      function yp() {
        this.__data__ = new Xe(), this.size = 0;
      }
      function Sp(t) {
        var i = this.__data__, s = i.delete(t);
        return this.size = i.size, s;
      }
      function wp(t) {
        return this.__data__.get(t);
      }
      function Ep(t) {
        return this.__data__.has(t);
      }
      function xp(t, i) {
        var s = this.__data__;
        if (s instanceof Xe) {
          var a = s.__data__;
          if (!Cn || a.length < u - 1)
            return a.push([t, i]), this.size = ++s.size, this;
          s = this.__data__ = new ke(a);
        }
        return s.set(t, i), this.size = s.size, this;
      }
      Te.prototype.clear = yp, Te.prototype.delete = Sp, Te.prototype.get = wp, Te.prototype.has = Ep, Te.prototype.set = xp;
      function sl(t, i) {
        var s = z(t), a = !s && Ci(t), l = !s && !a && hi(t), _ = !s && !a && !l && on(t), p = s || a || l || _, g = p ? wo(t.length, Nd) : [], y = g.length;
        for (var D in t)
          (i || ft.call(t, D)) && !(p && // Safari 9 has enumerable `arguments.length` in strict mode.
          (D == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          l && (D == "offset" || D == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          _ && (D == "buffer" || D == "byteLength" || D == "byteOffset") || // Skip index properties.
          ze(D, y))) && g.push(D);
        return g;
      }
      function ol(t) {
        var i = t.length;
        return i ? t[Ho(0, i - 1)] : r;
      }
      function Ap(t, i) {
        return Kr(zt(t), Ri(i, 0, t.length));
      }
      function Ip(t) {
        return Kr(zt(t));
      }
      function Ro(t, i, s) {
        (s !== r && !De(t[i], s) || s === r && !(i in t)) && qe(t, i, s);
      }
      function Wn(t, i, s) {
        var a = t[i];
        (!(ft.call(t, i) && De(a, s)) || s === r && !(i in t)) && qe(t, i, s);
      }
      function Wr(t, i) {
        for (var s = t.length; s--; )
          if (De(t[s][0], i))
            return s;
        return -1;
      }
      function Tp(t, i, s, a) {
        return ai(t, function(l, _, p) {
          i(a, l, s(l), p);
        }), a;
      }
      function al(t, i) {
        return t && We(i, bt(i), t);
      }
      function Dp(t, i) {
        return t && We(i, Zt(i), t);
      }
      function qe(t, i, s) {
        i == "__proto__" && Or ? Or(t, i, {
          configurable: !0,
          enumerable: !0,
          value: s,
          writable: !0
        }) : t[i] = s;
      }
      function bo(t, i) {
        for (var s = -1, a = i.length, l = E(a), _ = t == null; ++s < a; )
          l[s] = _ ? r : la(t, i[s]);
        return l;
      }
      function Ri(t, i, s) {
        return t === t && (s !== r && (t = t <= s ? t : s), i !== r && (t = t >= i ? t : i)), t;
      }
      function ce(t, i, s, a, l, _) {
        var p, g = i & S, y = i & N, D = i & P;
        if (s && (p = l ? s(t, a, l, _) : s(t)), p !== r)
          return p;
        if (!mt(t))
          return t;
        var R = z(t);
        if (R) {
          if (p = pg(t), !g)
            return zt(t, p);
        } else {
          var O = Wt(t), H = O == dr || O == lu;
          if (hi(t))
            return Ll(t, g);
          if (O == Ge || O == qi || H && !l) {
            if (p = y || H ? {} : Zl(t), !g)
              return y ? rg(t, Dp(p, t)) : ng(t, al(p, t));
          } else {
            if (!_t[O])
              return l ? t : {};
            p = gg(t, O, g);
          }
        }
        _ || (_ = new Te());
        var B = _.get(t);
        if (B)
          return B;
        _.set(t, p), Tf(t) ? t.forEach(function(q) {
          p.add(ce(q, i, s, q, t, _));
        }) : Af(t) && t.forEach(function(q, tt) {
          p.set(tt, ce(q, i, s, tt, t, _));
        });
        var k = D ? y ? Ko : zo : y ? Zt : bt, J = R ? r : k(t);
        return le(J || t, function(q, tt) {
          J && (tt = q, q = t[tt]), Wn(p, tt, ce(q, i, s, tt, t, _));
        }), p;
      }
      function Rp(t) {
        var i = bt(t);
        return function(s) {
          return ul(s, t, i);
        };
      }
      function ul(t, i, s) {
        var a = s.length;
        if (t == null)
          return !a;
        for (t = ht(t); a--; ) {
          var l = s[a], _ = i[l], p = t[l];
          if (p === r && !(l in t) || !_(p))
            return !1;
        }
        return !0;
      }
      function ll(t, i, s) {
        if (typeof t != "function")
          throw new fe(h);
        return Xn(function() {
          t.apply(r, s);
        }, i);
      }
      function Fn(t, i, s, a) {
        var l = -1, _ = yr, p = !0, g = t.length, y = [], D = i.length;
        if (!g)
          return y;
        s && (i = gt(i, ee(s))), a ? (_ = po, p = !1) : i.length >= u && (_ = On, p = !1, i = new Di(i));
        t:
          for (; ++l < g; ) {
            var R = t[l], O = s == null ? R : s(R);
            if (R = a || R !== 0 ? R : 0, p && O === O) {
              for (var H = D; H--; )
                if (i[H] === O)
                  continue t;
              y.push(R);
            } else
              _(i, O, a) || y.push(R);
          }
        return y;
      }
      var ai = Wl(Me), fl = Wl(Lo, !0);
      function bp(t, i) {
        var s = !0;
        return ai(t, function(a, l, _) {
          return s = !!i(a, l, _), s;
        }), s;
      }
      function Fr(t, i, s) {
        for (var a = -1, l = t.length; ++a < l; ) {
          var _ = t[a], p = i(_);
          if (p != null && (g === r ? p === p && !ne(p) : s(p, g)))
            var g = p, y = _;
        }
        return y;
      }
      function Op(t, i, s, a) {
        var l = t.length;
        for (s = Z(s), s < 0 && (s = -s > l ? 0 : l + s), a = a === r || a > l ? l : Z(a), a < 0 && (a += l), a = s > a ? 0 : Rf(a); s < a; )
          t[s++] = i;
        return t;
      }
      function hl(t, i) {
        var s = [];
        return ai(t, function(a, l, _) {
          i(a, l, _) && s.push(a);
        }), s;
      }
      function Ct(t, i, s, a, l) {
        var _ = -1, p = t.length;
        for (s || (s = mg), l || (l = []); ++_ < p; ) {
          var g = t[_];
          i > 0 && s(g) ? i > 1 ? Ct(g, i - 1, s, a, l) : ri(l, g) : a || (l[l.length] = g);
        }
        return l;
      }
      var Oo = Fl(), cl = Fl(!0);
      function Me(t, i) {
        return t && Oo(t, i, bt);
      }
      function Lo(t, i) {
        return t && cl(t, i, bt);
      }
      function Hr(t, i) {
        return ni(i, function(s) {
          return Ke(t[s]);
        });
      }
      function bi(t, i) {
        i = li(i, t);
        for (var s = 0, a = i.length; t != null && s < a; )
          t = t[Fe(i[s++])];
        return s && s == a ? t : r;
      }
      function _l(t, i, s) {
        var a = i(t);
        return z(t) ? a : ri(a, s(t));
      }
      function Gt(t) {
        return t == null ? t === r ? s_ : n_ : Ii && Ii in ht(t) ? cg(t) : Ig(t);
      }
      function Co(t, i) {
        return t > i;
      }
      function Lp(t, i) {
        return t != null && ft.call(t, i);
      }
      function Cp(t, i) {
        return t != null && i in ht(t);
      }
      function Np(t, i, s) {
        return t >= Mt(i, s) && t < Rt(i, s);
      }
      function No(t, i, s) {
        for (var a = s ? po : yr, l = t[0].length, _ = t.length, p = _, g = E(_), y = 1 / 0, D = []; p--; ) {
          var R = t[p];
          p && i && (R = gt(R, ee(i))), y = Mt(R.length, y), g[p] = !s && (i || l >= 120 && R.length >= 120) ? new Di(p && R) : r;
        }
        R = t[0];
        var O = -1, H = g[0];
        t:
          for (; ++O < l && D.length < y; ) {
            var B = R[O], k = i ? i(B) : B;
            if (B = s || B !== 0 ? B : 0, !(H ? On(H, k) : a(D, k, s))) {
              for (p = _; --p; ) {
                var J = g[p];
                if (!(J ? On(J, k) : a(t[p], k, s)))
                  continue t;
              }
              H && H.push(k), D.push(B);
            }
          }
        return D;
      }
      function Pp(t, i, s, a) {
        return Me(t, function(l, _, p) {
          i(a, s(l), _, p);
        }), a;
      }
      function Hn(t, i, s) {
        i = li(i, t), t = tf(t, i);
        var a = t == null ? t : t[Fe(de(i))];
        return a == null ? r : te(a, t, s);
      }
      function dl(t) {
        return yt(t) && Gt(t) == qi;
      }
      function Mp(t) {
        return yt(t) && Gt(t) == bn;
      }
      function Wp(t) {
        return yt(t) && Gt(t) == An;
      }
      function Yn(t, i, s, a, l) {
        return t === i ? !0 : t == null || i == null || !yt(t) && !yt(i) ? t !== t && i !== i : Fp(t, i, s, a, Yn, l);
      }
      function Fp(t, i, s, a, l, _) {
        var p = z(t), g = z(i), y = p ? cr : Wt(t), D = g ? cr : Wt(i);
        y = y == qi ? Ge : y, D = D == qi ? Ge : D;
        var R = y == Ge, O = D == Ge, H = y == D;
        if (H && hi(t)) {
          if (!hi(i))
            return !1;
          p = !0, R = !1;
        }
        if (H && !R)
          return _ || (_ = new Te()), p || on(t) ? $l(t, i, s, a, l, _) : fg(t, i, y, s, a, l, _);
        if (!(s & F)) {
          var B = R && ft.call(t, "__wrapped__"), k = O && ft.call(i, "__wrapped__");
          if (B || k) {
            var J = B ? t.value() : t, q = k ? i.value() : i;
            return _ || (_ = new Te()), l(J, q, s, a, _);
          }
        }
        return H ? (_ || (_ = new Te()), hg(t, i, s, a, l, _)) : !1;
      }
      function Hp(t) {
        return yt(t) && Wt(t) == xe;
      }
      function Po(t, i, s, a) {
        var l = s.length, _ = l, p = !a;
        if (t == null)
          return !_;
        for (t = ht(t); l--; ) {
          var g = s[l];
          if (p && g[2] ? g[1] !== t[g[0]] : !(g[0] in t))
            return !1;
        }
        for (; ++l < _; ) {
          g = s[l];
          var y = g[0], D = t[y], R = g[1];
          if (p && g[2]) {
            if (D === r && !(y in t))
              return !1;
          } else {
            var O = new Te();
            if (a)
              var H = a(D, R, y, t, i, O);
            if (!(H === r ? Yn(R, D, F | I, a, O) : H))
              return !1;
          }
        }
        return !0;
      }
      function pl(t) {
        if (!mt(t) || Sg(t))
          return !1;
        var i = Ke(t) ? Hd : R_;
        return i.test(Li(t));
      }
      function Yp(t) {
        return yt(t) && Gt(t) == Tn;
      }
      function Vp(t) {
        return yt(t) && Wt(t) == Ae;
      }
      function Bp(t) {
        return yt(t) && es(t.length) && !!dt[Gt(t)];
      }
      function gl(t) {
        return typeof t == "function" ? t : t == null ? Jt : typeof t == "object" ? z(t) ? yl(t[0], t[1]) : ml(t) : Yf(t);
      }
      function Mo(t) {
        if (!Gn(t))
          return kd(t);
        var i = [];
        for (var s in ht(t))
          ft.call(t, s) && s != "constructor" && i.push(s);
        return i;
      }
      function Gp(t) {
        if (!mt(t))
          return Ag(t);
        var i = Gn(t), s = [];
        for (var a in t)
          a == "constructor" && (i || !ft.call(t, a)) || s.push(a);
        return s;
      }
      function Wo(t, i) {
        return t < i;
      }
      function vl(t, i) {
        var s = -1, a = Kt(t) ? E(t.length) : [];
        return ai(t, function(l, _, p) {
          a[++s] = i(l, _, p);
        }), a;
      }
      function ml(t) {
        var i = Jo(t);
        return i.length == 1 && i[0][2] ? Ql(i[0][0], i[0][1]) : function(s) {
          return s === t || Po(s, t, i);
        };
      }
      function yl(t, i) {
        return jo(t) && Jl(i) ? Ql(Fe(t), i) : function(s) {
          var a = la(s, t);
          return a === r && a === i ? fa(s, t) : Yn(i, a, F | I);
        };
      }
      function Yr(t, i, s, a, l) {
        t !== i && Oo(i, function(_, p) {
          if (l || (l = new Te()), mt(_))
            Xp(t, i, p, s, Yr, a, l);
          else {
            var g = a ? a(ea(t, p), _, p + "", t, i, l) : r;
            g === r && (g = _), Ro(t, p, g);
          }
        }, Zt);
      }
      function Xp(t, i, s, a, l, _, p) {
        var g = ea(t, s), y = ea(i, s), D = p.get(y);
        if (D) {
          Ro(t, s, D);
          return;
        }
        var R = _ ? _(g, y, s + "", t, i, p) : r, O = R === r;
        if (O) {
          var H = z(y), B = !H && hi(y), k = !H && !B && on(y);
          R = y, H || B || k ? z(g) ? R = g : xt(g) ? R = zt(g) : B ? (O = !1, R = Ll(y, !0)) : k ? (O = !1, R = Cl(y, !0)) : R = [] : kn(y) || Ci(y) ? (R = g, Ci(g) ? R = bf(g) : (!mt(g) || Ke(g)) && (R = Zl(y))) : O = !1;
        }
        O && (p.set(y, R), l(R, y, a, _, p), p.delete(y)), Ro(t, s, R);
      }
      function Sl(t, i) {
        var s = t.length;
        if (s)
          return i += i < 0 ? s : 0, ze(i, s) ? t[i] : r;
      }
      function wl(t, i, s) {
        i.length ? i = gt(i, function(_) {
          return z(_) ? function(p) {
            return bi(p, _.length === 1 ? _[0] : _);
          } : _;
        }) : i = [Jt];
        var a = -1;
        i = gt(i, ee(X()));
        var l = vl(t, function(_, p, g) {
          var y = gt(i, function(D) {
            return D(_);
          });
          return { criteria: y, index: ++a, value: _ };
        });
        return gd(l, function(_, p) {
          return ig(_, p, s);
        });
      }
      function kp(t, i) {
        return El(t, i, function(s, a) {
          return fa(t, a);
        });
      }
      function El(t, i, s) {
        for (var a = -1, l = i.length, _ = {}; ++a < l; ) {
          var p = i[a], g = bi(t, p);
          s(g, p) && Vn(_, li(p, t), g);
        }
        return _;
      }
      function qp(t) {
        return function(i) {
          return bi(i, t);
        };
      }
      function Fo(t, i, s, a) {
        var l = a ? pd : zi, _ = -1, p = i.length, g = t;
        for (t === i && (i = zt(i)), s && (g = gt(t, ee(s))); ++_ < p; )
          for (var y = 0, D = i[_], R = s ? s(D) : D; (y = l(g, R, y, a)) > -1; )
            g !== t && br.call(g, y, 1), br.call(t, y, 1);
        return t;
      }
      function xl(t, i) {
        for (var s = t ? i.length : 0, a = s - 1; s--; ) {
          var l = i[s];
          if (s == a || l !== _) {
            var _ = l;
            ze(l) ? br.call(t, l, 1) : Bo(t, l);
          }
        }
        return t;
      }
      function Ho(t, i) {
        return t + Cr(nl() * (i - t + 1));
      }
      function Up(t, i, s, a) {
        for (var l = -1, _ = Rt(Lr((i - t) / (s || 1)), 0), p = E(_); _--; )
          p[a ? _ : ++l] = t, t += s;
        return p;
      }
      function Yo(t, i) {
        var s = "";
        if (!t || i < 1 || i > Ee)
          return s;
        do
          i % 2 && (s += t), i = Cr(i / 2), i && (t += t);
        while (i);
        return s;
      }
      function Q(t, i) {
        return ia(jl(t, i, Jt), t + "");
      }
      function $p(t) {
        return ol(an(t));
      }
      function zp(t, i) {
        var s = an(t);
        return Kr(s, Ri(i, 0, s.length));
      }
      function Vn(t, i, s, a) {
        if (!mt(t))
          return t;
        i = li(i, t);
        for (var l = -1, _ = i.length, p = _ - 1, g = t; g != null && ++l < _; ) {
          var y = Fe(i[l]), D = s;
          if (y === "__proto__" || y === "constructor" || y === "prototype")
            return t;
          if (l != p) {
            var R = g[y];
            D = a ? a(R, y, g) : r, D === r && (D = mt(R) ? R : ze(i[l + 1]) ? [] : {});
          }
          Wn(g, y, D), g = g[y];
        }
        return t;
      }
      var Al = Nr ? function(t, i) {
        return Nr.set(t, i), t;
      } : Jt, Kp = Or ? function(t, i) {
        return Or(t, "toString", {
          configurable: !0,
          enumerable: !1,
          value: ca(i),
          writable: !0
        });
      } : Jt;
      function Zp(t) {
        return Kr(an(t));
      }
      function _e(t, i, s) {
        var a = -1, l = t.length;
        i < 0 && (i = -i > l ? 0 : l + i), s = s > l ? l : s, s < 0 && (s += l), l = i > s ? 0 : s - i >>> 0, i >>>= 0;
        for (var _ = E(l); ++a < l; )
          _[a] = t[a + i];
        return _;
      }
      function Jp(t, i) {
        var s;
        return ai(t, function(a, l, _) {
          return s = i(a, l, _), !s;
        }), !!s;
      }
      function Vr(t, i, s) {
        var a = 0, l = t == null ? a : t.length;
        if (typeof i == "number" && i === i && l <= jc) {
          for (; a < l; ) {
            var _ = a + l >>> 1, p = t[_];
            p !== null && !ne(p) && (s ? p <= i : p < i) ? a = _ + 1 : l = _;
          }
          return l;
        }
        return Vo(t, i, Jt, s);
      }
      function Vo(t, i, s, a) {
        var l = 0, _ = t == null ? 0 : t.length;
        if (_ === 0)
          return 0;
        i = s(i);
        for (var p = i !== i, g = i === null, y = ne(i), D = i === r; l < _; ) {
          var R = Cr((l + _) / 2), O = s(t[R]), H = O !== r, B = O === null, k = O === O, J = ne(O);
          if (p)
            var q = a || k;
          else
            D ? q = k && (a || H) : g ? q = k && H && (a || !B) : y ? q = k && H && !B && (a || !J) : B || J ? q = !1 : q = a ? O <= i : O < i;
          q ? l = R + 1 : _ = R;
        }
        return Mt(_, Qc);
      }
      function Il(t, i) {
        for (var s = -1, a = t.length, l = 0, _ = []; ++s < a; ) {
          var p = t[s], g = i ? i(p) : p;
          if (!s || !De(g, y)) {
            var y = g;
            _[l++] = p === 0 ? 0 : p;
          }
        }
        return _;
      }
      function Tl(t) {
        return typeof t == "number" ? t : ne(t) ? xi : +t;
      }
      function ie(t) {
        if (typeof t == "string")
          return t;
        if (z(t))
          return gt(t, ie) + "";
        if (ne(t))
          return rl ? rl.call(t) : "";
        var i = t + "";
        return i == "0" && 1 / t == -Pe ? "-0" : i;
      }
      function ui(t, i, s) {
        var a = -1, l = yr, _ = t.length, p = !0, g = [], y = g;
        if (s)
          p = !1, l = po;
        else if (_ >= u) {
          var D = i ? null : ug(t);
          if (D)
            return wr(D);
          p = !1, l = On, y = new Di();
        } else
          y = i ? [] : g;
        t:
          for (; ++a < _; ) {
            var R = t[a], O = i ? i(R) : R;
            if (R = s || R !== 0 ? R : 0, p && O === O) {
              for (var H = y.length; H--; )
                if (y[H] === O)
                  continue t;
              i && y.push(O), g.push(R);
            } else
              l(y, O, s) || (y !== g && y.push(O), g.push(R));
          }
        return g;
      }
      function Bo(t, i) {
        return i = li(i, t), t = tf(t, i), t == null || delete t[Fe(de(i))];
      }
      function Dl(t, i, s, a) {
        return Vn(t, i, s(bi(t, i)), a);
      }
      function Br(t, i, s, a) {
        for (var l = t.length, _ = a ? l : -1; (a ? _-- : ++_ < l) && i(t[_], _, t); )
          ;
        return s ? _e(t, a ? 0 : _, a ? _ + 1 : l) : _e(t, a ? _ + 1 : 0, a ? l : _);
      }
      function Rl(t, i) {
        var s = t;
        return s instanceof et && (s = s.value()), go(i, function(a, l) {
          return l.func.apply(l.thisArg, ri([a], l.args));
        }, s);
      }
      function Go(t, i, s) {
        var a = t.length;
        if (a < 2)
          return a ? ui(t[0]) : [];
        for (var l = -1, _ = E(a); ++l < a; )
          for (var p = t[l], g = -1; ++g < a; )
            g != l && (_[l] = Fn(_[l] || p, t[g], i, s));
        return ui(Ct(_, 1), i, s);
      }
      function bl(t, i, s) {
        for (var a = -1, l = t.length, _ = i.length, p = {}; ++a < l; ) {
          var g = a < _ ? i[a] : r;
          s(p, t[a], g);
        }
        return p;
      }
      function Xo(t) {
        return xt(t) ? t : [];
      }
      function ko(t) {
        return typeof t == "function" ? t : Jt;
      }
      function li(t, i) {
        return z(t) ? t : jo(t, i) ? [t] : sf(lt(t));
      }
      var Qp = Q;
      function fi(t, i, s) {
        var a = t.length;
        return s = s === r ? a : s, !i && s >= a ? t : _e(t, i, s);
      }
      var Ol = Yd || function(t) {
        return Lt.clearTimeout(t);
      };
      function Ll(t, i) {
        if (i)
          return t.slice();
        var s = t.length, a = Qu ? Qu(s) : new t.constructor(s);
        return t.copy(a), a;
      }
      function qo(t) {
        var i = new t.constructor(t.byteLength);
        return new Dr(i).set(new Dr(t)), i;
      }
      function jp(t, i) {
        var s = i ? qo(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.byteLength);
      }
      function tg(t) {
        var i = new t.constructor(t.source, du.exec(t));
        return i.lastIndex = t.lastIndex, i;
      }
      function eg(t) {
        return Mn ? ht(Mn.call(t)) : {};
      }
      function Cl(t, i) {
        var s = i ? qo(t.buffer) : t.buffer;
        return new t.constructor(s, t.byteOffset, t.length);
      }
      function Nl(t, i) {
        if (t !== i) {
          var s = t !== r, a = t === null, l = t === t, _ = ne(t), p = i !== r, g = i === null, y = i === i, D = ne(i);
          if (!g && !D && !_ && t > i || _ && p && y && !g && !D || a && p && y || !s && y || !l)
            return 1;
          if (!a && !_ && !D && t < i || D && s && l && !a && !_ || g && s && l || !p && l || !y)
            return -1;
        }
        return 0;
      }
      function ig(t, i, s) {
        for (var a = -1, l = t.criteria, _ = i.criteria, p = l.length, g = s.length; ++a < p; ) {
          var y = Nl(l[a], _[a]);
          if (y) {
            if (a >= g)
              return y;
            var D = s[a];
            return y * (D == "desc" ? -1 : 1);
          }
        }
        return t.index - i.index;
      }
      function Pl(t, i, s, a) {
        for (var l = -1, _ = t.length, p = s.length, g = -1, y = i.length, D = Rt(_ - p, 0), R = E(y + D), O = !a; ++g < y; )
          R[g] = i[g];
        for (; ++l < p; )
          (O || l < _) && (R[s[l]] = t[l]);
        for (; D--; )
          R[g++] = t[l++];
        return R;
      }
      function Ml(t, i, s, a) {
        for (var l = -1, _ = t.length, p = -1, g = s.length, y = -1, D = i.length, R = Rt(_ - g, 0), O = E(R + D), H = !a; ++l < R; )
          O[l] = t[l];
        for (var B = l; ++y < D; )
          O[B + y] = i[y];
        for (; ++p < g; )
          (H || l < _) && (O[B + s[p]] = t[l++]);
        return O;
      }
      function zt(t, i) {
        var s = -1, a = t.length;
        for (i || (i = E(a)); ++s < a; )
          i[s] = t[s];
        return i;
      }
      function We(t, i, s, a) {
        var l = !s;
        s || (s = {});
        for (var _ = -1, p = i.length; ++_ < p; ) {
          var g = i[_], y = a ? a(s[g], t[g], g, s, t) : r;
          y === r && (y = t[g]), l ? qe(s, g, y) : Wn(s, g, y);
        }
        return s;
      }
      function ng(t, i) {
        return We(t, Qo(t), i);
      }
      function rg(t, i) {
        return We(t, zl(t), i);
      }
      function Gr(t, i) {
        return function(s, a) {
          var l = z(s) ? ld : Tp, _ = i ? i() : {};
          return l(s, t, X(a, 2), _);
        };
      }
      function nn(t) {
        return Q(function(i, s) {
          var a = -1, l = s.length, _ = l > 1 ? s[l - 1] : r, p = l > 2 ? s[2] : r;
          for (_ = t.length > 3 && typeof _ == "function" ? (l--, _) : r, p && Xt(s[0], s[1], p) && (_ = l < 3 ? r : _, l = 1), i = ht(i); ++a < l; ) {
            var g = s[a];
            g && t(i, g, a, _);
          }
          return i;
        });
      }
      function Wl(t, i) {
        return function(s, a) {
          if (s == null)
            return s;
          if (!Kt(s))
            return t(s, a);
          for (var l = s.length, _ = i ? l : -1, p = ht(s); (i ? _-- : ++_ < l) && a(p[_], _, p) !== !1; )
            ;
          return s;
        };
      }
      function Fl(t) {
        return function(i, s, a) {
          for (var l = -1, _ = ht(i), p = a(i), g = p.length; g--; ) {
            var y = p[t ? g : ++l];
            if (s(_[y], y, _) === !1)
              break;
          }
          return i;
        };
      }
      function sg(t, i, s) {
        var a = i & A, l = Bn(t);
        function _() {
          var p = this && this !== Lt && this instanceof _ ? l : t;
          return p.apply(a ? s : this, arguments);
        }
        return _;
      }
      function Hl(t) {
        return function(i) {
          i = lt(i);
          var s = Ki(i) ? Ie(i) : r, a = s ? s[0] : i.charAt(0), l = s ? fi(s, 1).join("") : i.slice(1);
          return a[t]() + l;
        };
      }
      function rn(t) {
        return function(i) {
          return go(Ff(Wf(i).replace(K_, "")), t, "");
        };
      }
      function Bn(t) {
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return new t();
            case 1:
              return new t(i[0]);
            case 2:
              return new t(i[0], i[1]);
            case 3:
              return new t(i[0], i[1], i[2]);
            case 4:
              return new t(i[0], i[1], i[2], i[3]);
            case 5:
              return new t(i[0], i[1], i[2], i[3], i[4]);
            case 6:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
            case 7:
              return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
          }
          var s = en(t.prototype), a = t.apply(s, i);
          return mt(a) ? a : s;
        };
      }
      function og(t, i, s) {
        var a = Bn(t);
        function l() {
          for (var _ = arguments.length, p = E(_), g = _, y = sn(l); g--; )
            p[g] = arguments[g];
          var D = _ < 3 && p[0] !== y && p[_ - 1] !== y ? [] : si(p, y);
          if (_ -= D.length, _ < s)
            return Xl(
              t,
              i,
              Xr,
              l.placeholder,
              r,
              p,
              D,
              r,
              r,
              s - _
            );
          var R = this && this !== Lt && this instanceof l ? a : t;
          return te(R, this, p);
        }
        return l;
      }
      function Yl(t) {
        return function(i, s, a) {
          var l = ht(i);
          if (!Kt(i)) {
            var _ = X(s, 3);
            i = bt(i), s = function(g) {
              return _(l[g], g, l);
            };
          }
          var p = t(i, s, a);
          return p > -1 ? l[_ ? i[p] : p] : r;
        };
      }
      function Vl(t) {
        return $e(function(i) {
          var s = i.length, a = s, l = he.prototype.thru;
          for (t && i.reverse(); a--; ) {
            var _ = i[a];
            if (typeof _ != "function")
              throw new fe(h);
            if (l && !p && $r(_) == "wrapper")
              var p = new he([], !0);
          }
          for (a = p ? a : s; ++a < s; ) {
            _ = i[a];
            var g = $r(_), y = g == "wrapper" ? Zo(_) : r;
            y && ta(y[0]) && y[1] == (ot | W | G | ct) && !y[4].length && y[9] == 1 ? p = p[$r(y[0])].apply(p, y[3]) : p = _.length == 1 && ta(_) ? p[g]() : p.thru(_);
          }
          return function() {
            var D = arguments, R = D[0];
            if (p && D.length == 1 && z(R))
              return p.plant(R).value();
            for (var O = 0, H = s ? i[O].apply(this, D) : R; ++O < s; )
              H = i[O].call(this, H);
            return H;
          };
        });
      }
      function Xr(t, i, s, a, l, _, p, g, y, D) {
        var R = i & ot, O = i & A, H = i & M, B = i & (W | C), k = i & it, J = H ? r : Bn(t);
        function q() {
          for (var tt = arguments.length, nt = E(tt), re = tt; re--; )
            nt[re] = arguments[re];
          if (B)
            var kt = sn(q), se = md(nt, kt);
          if (a && (nt = Pl(nt, a, l, B)), _ && (nt = Ml(nt, _, p, B)), tt -= se, B && tt < D) {
            var At = si(nt, kt);
            return Xl(
              t,
              i,
              Xr,
              q.placeholder,
              s,
              nt,
              At,
              g,
              y,
              D - tt
            );
          }
          var Re = O ? s : this, Je = H ? Re[t] : t;
          return tt = nt.length, g ? nt = Tg(nt, g) : k && tt > 1 && nt.reverse(), R && y < tt && (nt.length = y), this && this !== Lt && this instanceof q && (Je = J || Bn(Je)), Je.apply(Re, nt);
        }
        return q;
      }
      function Bl(t, i) {
        return function(s, a) {
          return Pp(s, t, i(a), {});
        };
      }
      function kr(t, i) {
        return function(s, a) {
          var l;
          if (s === r && a === r)
            return i;
          if (s !== r && (l = s), a !== r) {
            if (l === r)
              return a;
            typeof s == "string" || typeof a == "string" ? (s = ie(s), a = ie(a)) : (s = Tl(s), a = Tl(a)), l = t(s, a);
          }
          return l;
        };
      }
      function Uo(t) {
        return $e(function(i) {
          return i = gt(i, ee(X())), Q(function(s) {
            var a = this;
            return t(i, function(l) {
              return te(l, a, s);
            });
          });
        });
      }
      function qr(t, i) {
        i = i === r ? " " : ie(i);
        var s = i.length;
        if (s < 2)
          return s ? Yo(i, t) : i;
        var a = Yo(i, Lr(t / Zi(i)));
        return Ki(i) ? fi(Ie(a), 0, t).join("") : a.slice(0, t);
      }
      function ag(t, i, s, a) {
        var l = i & A, _ = Bn(t);
        function p() {
          for (var g = -1, y = arguments.length, D = -1, R = a.length, O = E(R + y), H = this && this !== Lt && this instanceof p ? _ : t; ++D < R; )
            O[D] = a[D];
          for (; y--; )
            O[D++] = arguments[++g];
          return te(H, l ? s : this, O);
        }
        return p;
      }
      function Gl(t) {
        return function(i, s, a) {
          return a && typeof a != "number" && Xt(i, s, a) && (s = a = r), i = Ze(i), s === r ? (s = i, i = 0) : s = Ze(s), a = a === r ? i < s ? 1 : -1 : Ze(a), Up(i, s, a, t);
        };
      }
      function Ur(t) {
        return function(i, s) {
          return typeof i == "string" && typeof s == "string" || (i = pe(i), s = pe(s)), t(i, s);
        };
      }
      function Xl(t, i, s, a, l, _, p, g, y, D) {
        var R = i & W, O = R ? p : r, H = R ? r : p, B = R ? _ : r, k = R ? r : _;
        i |= R ? G : Y, i &= ~(R ? Y : G), i & L || (i &= ~(A | M));
        var J = [
          t,
          i,
          l,
          B,
          O,
          k,
          H,
          g,
          y,
          D
        ], q = s.apply(r, J);
        return ta(t) && ef(q, J), q.placeholder = a, nf(q, t, i);
      }
      function $o(t) {
        var i = Dt[t];
        return function(s, a) {
          if (s = pe(s), a = a == null ? 0 : Mt(Z(a), 292), a && il(s)) {
            var l = (lt(s) + "e").split("e"), _ = i(l[0] + "e" + (+l[1] + a));
            return l = (lt(_) + "e").split("e"), +(l[0] + "e" + (+l[1] - a));
          }
          return i(s);
        };
      }
      var ug = ji && 1 / wr(new ji([, -0]))[1] == Pe ? function(t) {
        return new ji(t);
      } : pa;
      function kl(t) {
        return function(i) {
          var s = Wt(i);
          return s == xe ? xo(i) : s == Ae ? Id(i) : vd(i, t(i));
        };
      }
      function Ue(t, i, s, a, l, _, p, g) {
        var y = i & M;
        if (!y && typeof t != "function")
          throw new fe(h);
        var D = a ? a.length : 0;
        if (D || (i &= ~(G | Y), a = l = r), p = p === r ? p : Rt(Z(p), 0), g = g === r ? g : Z(g), D -= l ? l.length : 0, i & Y) {
          var R = a, O = l;
          a = l = r;
        }
        var H = y ? r : Zo(t), B = [
          t,
          i,
          s,
          a,
          l,
          R,
          O,
          _,
          p,
          g
        ];
        if (H && xg(B, H), t = B[0], i = B[1], s = B[2], a = B[3], l = B[4], g = B[9] = B[9] === r ? y ? 0 : t.length : Rt(B[9] - D, 0), !g && i & (W | C) && (i &= ~(W | C)), !i || i == A)
          var k = sg(t, i, s);
        else
          i == W || i == C ? k = og(t, i, g) : (i == G || i == (A | G)) && !l.length ? k = ag(t, i, s, a) : k = Xr.apply(r, B);
        var J = H ? Al : ef;
        return nf(J(k, B), t, i);
      }
      function ql(t, i, s, a) {
        return t === r || De(t, Qi[s]) && !ft.call(a, s) ? i : t;
      }
      function Ul(t, i, s, a, l, _) {
        return mt(t) && mt(i) && (_.set(i, t), Yr(t, i, r, Ul, _), _.delete(i)), t;
      }
      function lg(t) {
        return kn(t) ? r : t;
      }
      function $l(t, i, s, a, l, _) {
        var p = s & F, g = t.length, y = i.length;
        if (g != y && !(p && y > g))
          return !1;
        var D = _.get(t), R = _.get(i);
        if (D && R)
          return D == i && R == t;
        var O = -1, H = !0, B = s & I ? new Di() : r;
        for (_.set(t, i), _.set(i, t); ++O < g; ) {
          var k = t[O], J = i[O];
          if (a)
            var q = p ? a(J, k, O, i, t, _) : a(k, J, O, t, i, _);
          if (q !== r) {
            if (q)
              continue;
            H = !1;
            break;
          }
          if (B) {
            if (!vo(i, function(tt, nt) {
              if (!On(B, nt) && (k === tt || l(k, tt, s, a, _)))
                return B.push(nt);
            })) {
              H = !1;
              break;
            }
          } else if (!(k === J || l(k, J, s, a, _))) {
            H = !1;
            break;
          }
        }
        return _.delete(t), _.delete(i), H;
      }
      function fg(t, i, s, a, l, _, p) {
        switch (s) {
          case Ui:
            if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
              return !1;
            t = t.buffer, i = i.buffer;
          case bn:
            return !(t.byteLength != i.byteLength || !_(new Dr(t), new Dr(i)));
          case xn:
          case An:
          case In:
            return De(+t, +i);
          case _r:
            return t.name == i.name && t.message == i.message;
          case Tn:
          case Dn:
            return t == i + "";
          case xe:
            var g = xo;
          case Ae:
            var y = a & F;
            if (g || (g = wr), t.size != i.size && !y)
              return !1;
            var D = p.get(t);
            if (D)
              return D == i;
            a |= I, p.set(t, i);
            var R = $l(g(t), g(i), a, l, _, p);
            return p.delete(t), R;
          case pr:
            if (Mn)
              return Mn.call(t) == Mn.call(i);
        }
        return !1;
      }
      function hg(t, i, s, a, l, _) {
        var p = s & F, g = zo(t), y = g.length, D = zo(i), R = D.length;
        if (y != R && !p)
          return !1;
        for (var O = y; O--; ) {
          var H = g[O];
          if (!(p ? H in i : ft.call(i, H)))
            return !1;
        }
        var B = _.get(t), k = _.get(i);
        if (B && k)
          return B == i && k == t;
        var J = !0;
        _.set(t, i), _.set(i, t);
        for (var q = p; ++O < y; ) {
          H = g[O];
          var tt = t[H], nt = i[H];
          if (a)
            var re = p ? a(nt, tt, H, i, t, _) : a(tt, nt, H, t, i, _);
          if (!(re === r ? tt === nt || l(tt, nt, s, a, _) : re)) {
            J = !1;
            break;
          }
          q || (q = H == "constructor");
        }
        if (J && !q) {
          var kt = t.constructor, se = i.constructor;
          kt != se && "constructor" in t && "constructor" in i && !(typeof kt == "function" && kt instanceof kt && typeof se == "function" && se instanceof se) && (J = !1);
        }
        return _.delete(t), _.delete(i), J;
      }
      function $e(t) {
        return ia(jl(t, r, lf), t + "");
      }
      function zo(t) {
        return _l(t, bt, Qo);
      }
      function Ko(t) {
        return _l(t, Zt, zl);
      }
      var Zo = Nr ? function(t) {
        return Nr.get(t);
      } : pa;
      function $r(t) {
        for (var i = t.name + "", s = tn[i], a = ft.call(tn, i) ? s.length : 0; a--; ) {
          var l = s[a], _ = l.func;
          if (_ == null || _ == t)
            return l.name;
        }
        return i;
      }
      function sn(t) {
        var i = ft.call(c, "placeholder") ? c : t;
        return i.placeholder;
      }
      function X() {
        var t = c.iteratee || _a;
        return t = t === _a ? gl : t, arguments.length ? t(arguments[0], arguments[1]) : t;
      }
      function zr(t, i) {
        var s = t.__data__;
        return yg(i) ? s[typeof i == "string" ? "string" : "hash"] : s.map;
      }
      function Jo(t) {
        for (var i = bt(t), s = i.length; s--; ) {
          var a = i[s], l = t[a];
          i[s] = [a, l, Jl(l)];
        }
        return i;
      }
      function Oi(t, i) {
        var s = Ed(t, i);
        return pl(s) ? s : r;
      }
      function cg(t) {
        var i = ft.call(t, Ii), s = t[Ii];
        try {
          t[Ii] = r;
          var a = !0;
        } catch {
        }
        var l = Ir.call(t);
        return a && (i ? t[Ii] = s : delete t[Ii]), l;
      }
      var Qo = Io ? function(t) {
        return t == null ? [] : (t = ht(t), ni(Io(t), function(i) {
          return tl.call(t, i);
        }));
      } : ga, zl = Io ? function(t) {
        for (var i = []; t; )
          ri(i, Qo(t)), t = Rr(t);
        return i;
      } : ga, Wt = Gt;
      (To && Wt(new To(new ArrayBuffer(1))) != Ui || Cn && Wt(new Cn()) != xe || Do && Wt(Do.resolve()) != fu || ji && Wt(new ji()) != Ae || Nn && Wt(new Nn()) != Rn) && (Wt = function(t) {
        var i = Gt(t), s = i == Ge ? t.constructor : r, a = s ? Li(s) : "";
        if (a)
          switch (a) {
            case zd:
              return Ui;
            case Kd:
              return xe;
            case Zd:
              return fu;
            case Jd:
              return Ae;
            case Qd:
              return Rn;
          }
        return i;
      });
      function _g(t, i, s) {
        for (var a = -1, l = s.length; ++a < l; ) {
          var _ = s[a], p = _.size;
          switch (_.type) {
            case "drop":
              t += p;
              break;
            case "dropRight":
              i -= p;
              break;
            case "take":
              i = Mt(i, t + p);
              break;
            case "takeRight":
              t = Rt(t, i - p);
              break;
          }
        }
        return { start: t, end: i };
      }
      function dg(t) {
        var i = t.match(S_);
        return i ? i[1].split(w_) : [];
      }
      function Kl(t, i, s) {
        i = li(i, t);
        for (var a = -1, l = i.length, _ = !1; ++a < l; ) {
          var p = Fe(i[a]);
          if (!(_ = t != null && s(t, p)))
            break;
          t = t[p];
        }
        return _ || ++a != l ? _ : (l = t == null ? 0 : t.length, !!l && es(l) && ze(p, l) && (z(t) || Ci(t)));
      }
      function pg(t) {
        var i = t.length, s = new t.constructor(i);
        return i && typeof t[0] == "string" && ft.call(t, "index") && (s.index = t.index, s.input = t.input), s;
      }
      function Zl(t) {
        return typeof t.constructor == "function" && !Gn(t) ? en(Rr(t)) : {};
      }
      function gg(t, i, s) {
        var a = t.constructor;
        switch (i) {
          case bn:
            return qo(t);
          case xn:
          case An:
            return new a(+t);
          case Ui:
            return jp(t, s);
          case Zs:
          case Js:
          case Qs:
          case js:
          case to:
          case eo:
          case io:
          case no:
          case ro:
            return Cl(t, s);
          case xe:
            return new a();
          case In:
          case Dn:
            return new a(t);
          case Tn:
            return tg(t);
          case Ae:
            return new a();
          case pr:
            return eg(t);
        }
      }
      function vg(t, i) {
        var s = i.length;
        if (!s)
          return t;
        var a = s - 1;
        return i[a] = (s > 1 ? "& " : "") + i[a], i = i.join(s > 2 ? ", " : " "), t.replace(y_, `{
/* [wrapped with ` + i + `] */
`);
      }
      function mg(t) {
        return z(t) || Ci(t) || !!(el && t && t[el]);
      }
      function ze(t, i) {
        var s = typeof t;
        return i = i ?? Ee, !!i && (s == "number" || s != "symbol" && O_.test(t)) && t > -1 && t % 1 == 0 && t < i;
      }
      function Xt(t, i, s) {
        if (!mt(s))
          return !1;
        var a = typeof i;
        return (a == "number" ? Kt(s) && ze(i, s.length) : a == "string" && i in s) ? De(s[i], t) : !1;
      }
      function jo(t, i) {
        if (z(t))
          return !1;
        var s = typeof t;
        return s == "number" || s == "symbol" || s == "boolean" || t == null || ne(t) ? !0 : p_.test(t) || !d_.test(t) || i != null && t in ht(i);
      }
      function yg(t) {
        var i = typeof t;
        return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
      }
      function ta(t) {
        var i = $r(t), s = c[i];
        if (typeof s != "function" || !(i in et.prototype))
          return !1;
        if (t === s)
          return !0;
        var a = Zo(s);
        return !!a && t === a[0];
      }
      function Sg(t) {
        return !!Ju && Ju in t;
      }
      var wg = xr ? Ke : va;
      function Gn(t) {
        var i = t && t.constructor, s = typeof i == "function" && i.prototype || Qi;
        return t === s;
      }
      function Jl(t) {
        return t === t && !mt(t);
      }
      function Ql(t, i) {
        return function(s) {
          return s == null ? !1 : s[t] === i && (i !== r || t in ht(s));
        };
      }
      function Eg(t) {
        var i = jr(t, function(a) {
          return s.size === w && s.clear(), a;
        }), s = i.cache;
        return i;
      }
      function xg(t, i) {
        var s = t[1], a = i[1], l = s | a, _ = l < (A | M | ot), p = a == ot && s == W || a == ot && s == ct && t[7].length <= i[8] || a == (ot | ct) && i[7].length <= i[8] && s == W;
        if (!(_ || p))
          return t;
        a & A && (t[2] = i[2], l |= s & A ? 0 : L);
        var g = i[3];
        if (g) {
          var y = t[3];
          t[3] = y ? Pl(y, g, i[4]) : g, t[4] = y ? si(t[3], x) : i[4];
        }
        return g = i[5], g && (y = t[5], t[5] = y ? Ml(y, g, i[6]) : g, t[6] = y ? si(t[5], x) : i[6]), g = i[7], g && (t[7] = g), a & ot && (t[8] = t[8] == null ? i[8] : Mt(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = l, t;
      }
      function Ag(t) {
        var i = [];
        if (t != null)
          for (var s in ht(t))
            i.push(s);
        return i;
      }
      function Ig(t) {
        return Ir.call(t);
      }
      function jl(t, i, s) {
        return i = Rt(i === r ? t.length - 1 : i, 0), function() {
          for (var a = arguments, l = -1, _ = Rt(a.length - i, 0), p = E(_); ++l < _; )
            p[l] = a[i + l];
          l = -1;
          for (var g = E(i + 1); ++l < i; )
            g[l] = a[l];
          return g[i] = s(p), te(t, this, g);
        };
      }
      function tf(t, i) {
        return i.length < 2 ? t : bi(t, _e(i, 0, -1));
      }
      function Tg(t, i) {
        for (var s = t.length, a = Mt(i.length, s), l = zt(t); a--; ) {
          var _ = i[a];
          t[a] = ze(_, s) ? l[_] : r;
        }
        return t;
      }
      function ea(t, i) {
        if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
          return t[i];
      }
      var ef = rf(Al), Xn = Bd || function(t, i) {
        return Lt.setTimeout(t, i);
      }, ia = rf(Kp);
      function nf(t, i, s) {
        var a = i + "";
        return ia(t, vg(a, Dg(dg(a), s)));
      }
      function rf(t) {
        var i = 0, s = 0;
        return function() {
          var a = qd(), l = Ne - (a - s);
          if (s = a, l > 0) {
            if (++i >= Bt)
              return arguments[0];
          } else
            i = 0;
          return t.apply(r, arguments);
        };
      }
      function Kr(t, i) {
        var s = -1, a = t.length, l = a - 1;
        for (i = i === r ? a : i; ++s < i; ) {
          var _ = Ho(s, l), p = t[_];
          t[_] = t[s], t[s] = p;
        }
        return t.length = i, t;
      }
      var sf = Eg(function(t) {
        var i = [];
        return t.charCodeAt(0) === 46 && i.push(""), t.replace(g_, function(s, a, l, _) {
          i.push(l ? _.replace(A_, "$1") : a || s);
        }), i;
      });
      function Fe(t) {
        if (typeof t == "string" || ne(t))
          return t;
        var i = t + "";
        return i == "0" && 1 / t == -Pe ? "-0" : i;
      }
      function Li(t) {
        if (t != null) {
          try {
            return Ar.call(t);
          } catch {
          }
          try {
            return t + "";
          } catch {
          }
        }
        return "";
      }
      function Dg(t, i) {
        return le(t_, function(s) {
          var a = "_." + s[0];
          i & s[1] && !yr(t, a) && t.push(a);
        }), t.sort();
      }
      function of(t) {
        if (t instanceof et)
          return t.clone();
        var i = new he(t.__wrapped__, t.__chain__);
        return i.__actions__ = zt(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
      }
      function Rg(t, i, s) {
        (s ? Xt(t, i, s) : i === r) ? i = 1 : i = Rt(Z(i), 0);
        var a = t == null ? 0 : t.length;
        if (!a || i < 1)
          return [];
        for (var l = 0, _ = 0, p = E(Lr(a / i)); l < a; )
          p[_++] = _e(t, l, l += i);
        return p;
      }
      function bg(t) {
        for (var i = -1, s = t == null ? 0 : t.length, a = 0, l = []; ++i < s; ) {
          var _ = t[i];
          _ && (l[a++] = _);
        }
        return l;
      }
      function Og() {
        var t = arguments.length;
        if (!t)
          return [];
        for (var i = E(t - 1), s = arguments[0], a = t; a--; )
          i[a - 1] = arguments[a];
        return ri(z(s) ? zt(s) : [s], Ct(i, 1));
      }
      var Lg = Q(function(t, i) {
        return xt(t) ? Fn(t, Ct(i, 1, xt, !0)) : [];
      }), Cg = Q(function(t, i) {
        var s = de(i);
        return xt(s) && (s = r), xt(t) ? Fn(t, Ct(i, 1, xt, !0), X(s, 2)) : [];
      }), Ng = Q(function(t, i) {
        var s = de(i);
        return xt(s) && (s = r), xt(t) ? Fn(t, Ct(i, 1, xt, !0), r, s) : [];
      });
      function Pg(t, i, s) {
        var a = t == null ? 0 : t.length;
        return a ? (i = s || i === r ? 1 : Z(i), _e(t, i < 0 ? 0 : i, a)) : [];
      }
      function Mg(t, i, s) {
        var a = t == null ? 0 : t.length;
        return a ? (i = s || i === r ? 1 : Z(i), i = a - i, _e(t, 0, i < 0 ? 0 : i)) : [];
      }
      function Wg(t, i) {
        return t && t.length ? Br(t, X(i, 3), !0, !0) : [];
      }
      function Fg(t, i) {
        return t && t.length ? Br(t, X(i, 3), !0) : [];
      }
      function Hg(t, i, s, a) {
        var l = t == null ? 0 : t.length;
        return l ? (s && typeof s != "number" && Xt(t, i, s) && (s = 0, a = l), Op(t, i, s, a)) : [];
      }
      function af(t, i, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var l = s == null ? 0 : Z(s);
        return l < 0 && (l = Rt(a + l, 0)), Sr(t, X(i, 3), l);
      }
      function uf(t, i, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var l = a - 1;
        return s !== r && (l = Z(s), l = s < 0 ? Rt(a + l, 0) : Mt(l, a - 1)), Sr(t, X(i, 3), l, !0);
      }
      function lf(t) {
        var i = t == null ? 0 : t.length;
        return i ? Ct(t, 1) : [];
      }
      function Yg(t) {
        var i = t == null ? 0 : t.length;
        return i ? Ct(t, Pe) : [];
      }
      function Vg(t, i) {
        var s = t == null ? 0 : t.length;
        return s ? (i = i === r ? 1 : Z(i), Ct(t, i)) : [];
      }
      function Bg(t) {
        for (var i = -1, s = t == null ? 0 : t.length, a = {}; ++i < s; ) {
          var l = t[i];
          a[l[0]] = l[1];
        }
        return a;
      }
      function ff(t) {
        return t && t.length ? t[0] : r;
      }
      function Gg(t, i, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var l = s == null ? 0 : Z(s);
        return l < 0 && (l = Rt(a + l, 0)), zi(t, i, l);
      }
      function Xg(t) {
        var i = t == null ? 0 : t.length;
        return i ? _e(t, 0, -1) : [];
      }
      var kg = Q(function(t) {
        var i = gt(t, Xo);
        return i.length && i[0] === t[0] ? No(i) : [];
      }), qg = Q(function(t) {
        var i = de(t), s = gt(t, Xo);
        return i === de(s) ? i = r : s.pop(), s.length && s[0] === t[0] ? No(s, X(i, 2)) : [];
      }), Ug = Q(function(t) {
        var i = de(t), s = gt(t, Xo);
        return i = typeof i == "function" ? i : r, i && s.pop(), s.length && s[0] === t[0] ? No(s, r, i) : [];
      });
      function $g(t, i) {
        return t == null ? "" : Xd.call(t, i);
      }
      function de(t) {
        var i = t == null ? 0 : t.length;
        return i ? t[i - 1] : r;
      }
      function zg(t, i, s) {
        var a = t == null ? 0 : t.length;
        if (!a)
          return -1;
        var l = a;
        return s !== r && (l = Z(s), l = l < 0 ? Rt(a + l, 0) : Mt(l, a - 1)), i === i ? Dd(t, i, l) : Sr(t, Xu, l, !0);
      }
      function Kg(t, i) {
        return t && t.length ? Sl(t, Z(i)) : r;
      }
      var Zg = Q(hf);
      function hf(t, i) {
        return t && t.length && i && i.length ? Fo(t, i) : t;
      }
      function Jg(t, i, s) {
        return t && t.length && i && i.length ? Fo(t, i, X(s, 2)) : t;
      }
      function Qg(t, i, s) {
        return t && t.length && i && i.length ? Fo(t, i, r, s) : t;
      }
      var jg = $e(function(t, i) {
        var s = t == null ? 0 : t.length, a = bo(t, i);
        return xl(t, gt(i, function(l) {
          return ze(l, s) ? +l : l;
        }).sort(Nl)), a;
      });
      function tv(t, i) {
        var s = [];
        if (!(t && t.length))
          return s;
        var a = -1, l = [], _ = t.length;
        for (i = X(i, 3); ++a < _; ) {
          var p = t[a];
          i(p, a, t) && (s.push(p), l.push(a));
        }
        return xl(t, l), s;
      }
      function na(t) {
        return t == null ? t : $d.call(t);
      }
      function ev(t, i, s) {
        var a = t == null ? 0 : t.length;
        return a ? (s && typeof s != "number" && Xt(t, i, s) ? (i = 0, s = a) : (i = i == null ? 0 : Z(i), s = s === r ? a : Z(s)), _e(t, i, s)) : [];
      }
      function iv(t, i) {
        return Vr(t, i);
      }
      function nv(t, i, s) {
        return Vo(t, i, X(s, 2));
      }
      function rv(t, i) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var a = Vr(t, i);
          if (a < s && De(t[a], i))
            return a;
        }
        return -1;
      }
      function sv(t, i) {
        return Vr(t, i, !0);
      }
      function ov(t, i, s) {
        return Vo(t, i, X(s, 2), !0);
      }
      function av(t, i) {
        var s = t == null ? 0 : t.length;
        if (s) {
          var a = Vr(t, i, !0) - 1;
          if (De(t[a], i))
            return a;
        }
        return -1;
      }
      function uv(t) {
        return t && t.length ? Il(t) : [];
      }
      function lv(t, i) {
        return t && t.length ? Il(t, X(i, 2)) : [];
      }
      function fv(t) {
        var i = t == null ? 0 : t.length;
        return i ? _e(t, 1, i) : [];
      }
      function hv(t, i, s) {
        return t && t.length ? (i = s || i === r ? 1 : Z(i), _e(t, 0, i < 0 ? 0 : i)) : [];
      }
      function cv(t, i, s) {
        var a = t == null ? 0 : t.length;
        return a ? (i = s || i === r ? 1 : Z(i), i = a - i, _e(t, i < 0 ? 0 : i, a)) : [];
      }
      function _v(t, i) {
        return t && t.length ? Br(t, X(i, 3), !1, !0) : [];
      }
      function dv(t, i) {
        return t && t.length ? Br(t, X(i, 3)) : [];
      }
      var pv = Q(function(t) {
        return ui(Ct(t, 1, xt, !0));
      }), gv = Q(function(t) {
        var i = de(t);
        return xt(i) && (i = r), ui(Ct(t, 1, xt, !0), X(i, 2));
      }), vv = Q(function(t) {
        var i = de(t);
        return i = typeof i == "function" ? i : r, ui(Ct(t, 1, xt, !0), r, i);
      });
      function mv(t) {
        return t && t.length ? ui(t) : [];
      }
      function yv(t, i) {
        return t && t.length ? ui(t, X(i, 2)) : [];
      }
      function Sv(t, i) {
        return i = typeof i == "function" ? i : r, t && t.length ? ui(t, r, i) : [];
      }
      function ra(t) {
        if (!(t && t.length))
          return [];
        var i = 0;
        return t = ni(t, function(s) {
          if (xt(s))
            return i = Rt(s.length, i), !0;
        }), wo(i, function(s) {
          return gt(t, mo(s));
        });
      }
      function cf(t, i) {
        if (!(t && t.length))
          return [];
        var s = ra(t);
        return i == null ? s : gt(s, function(a) {
          return te(i, r, a);
        });
      }
      var wv = Q(function(t, i) {
        return xt(t) ? Fn(t, i) : [];
      }), Ev = Q(function(t) {
        return Go(ni(t, xt));
      }), xv = Q(function(t) {
        var i = de(t);
        return xt(i) && (i = r), Go(ni(t, xt), X(i, 2));
      }), Av = Q(function(t) {
        var i = de(t);
        return i = typeof i == "function" ? i : r, Go(ni(t, xt), r, i);
      }), Iv = Q(ra);
      function Tv(t, i) {
        return bl(t || [], i || [], Wn);
      }
      function Dv(t, i) {
        return bl(t || [], i || [], Vn);
      }
      var Rv = Q(function(t) {
        var i = t.length, s = i > 1 ? t[i - 1] : r;
        return s = typeof s == "function" ? (t.pop(), s) : r, cf(t, s);
      });
      function _f(t) {
        var i = c(t);
        return i.__chain__ = !0, i;
      }
      function bv(t, i) {
        return i(t), t;
      }
      function Zr(t, i) {
        return i(t);
      }
      var Ov = $e(function(t) {
        var i = t.length, s = i ? t[0] : 0, a = this.__wrapped__, l = function(_) {
          return bo(_, t);
        };
        return i > 1 || this.__actions__.length || !(a instanceof et) || !ze(s) ? this.thru(l) : (a = a.slice(s, +s + (i ? 1 : 0)), a.__actions__.push({
          func: Zr,
          args: [l],
          thisArg: r
        }), new he(a, this.__chain__).thru(function(_) {
          return i && !_.length && _.push(r), _;
        }));
      });
      function Lv() {
        return _f(this);
      }
      function Cv() {
        return new he(this.value(), this.__chain__);
      }
      function Nv() {
        this.__values__ === r && (this.__values__ = Df(this.value()));
        var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
        return { done: t, value: i };
      }
      function Pv() {
        return this;
      }
      function Mv(t) {
        for (var i, s = this; s instanceof Mr; ) {
          var a = of(s);
          a.__index__ = 0, a.__values__ = r, i ? l.__wrapped__ = a : i = a;
          var l = a;
          s = s.__wrapped__;
        }
        return l.__wrapped__ = t, i;
      }
      function Wv() {
        var t = this.__wrapped__;
        if (t instanceof et) {
          var i = t;
          return this.__actions__.length && (i = new et(this)), i = i.reverse(), i.__actions__.push({
            func: Zr,
            args: [na],
            thisArg: r
          }), new he(i, this.__chain__);
        }
        return this.thru(na);
      }
      function Fv() {
        return Rl(this.__wrapped__, this.__actions__);
      }
      var Hv = Gr(function(t, i, s) {
        ft.call(t, s) ? ++t[s] : qe(t, s, 1);
      });
      function Yv(t, i, s) {
        var a = z(t) ? Bu : bp;
        return s && Xt(t, i, s) && (i = r), a(t, X(i, 3));
      }
      function Vv(t, i) {
        var s = z(t) ? ni : hl;
        return s(t, X(i, 3));
      }
      var Bv = Yl(af), Gv = Yl(uf);
      function Xv(t, i) {
        return Ct(Jr(t, i), 1);
      }
      function kv(t, i) {
        return Ct(Jr(t, i), Pe);
      }
      function qv(t, i, s) {
        return s = s === r ? 1 : Z(s), Ct(Jr(t, i), s);
      }
      function df(t, i) {
        var s = z(t) ? le : ai;
        return s(t, X(i, 3));
      }
      function pf(t, i) {
        var s = z(t) ? fd : fl;
        return s(t, X(i, 3));
      }
      var Uv = Gr(function(t, i, s) {
        ft.call(t, s) ? t[s].push(i) : qe(t, s, [i]);
      });
      function $v(t, i, s, a) {
        t = Kt(t) ? t : an(t), s = s && !a ? Z(s) : 0;
        var l = t.length;
        return s < 0 && (s = Rt(l + s, 0)), is(t) ? s <= l && t.indexOf(i, s) > -1 : !!l && zi(t, i, s) > -1;
      }
      var zv = Q(function(t, i, s) {
        var a = -1, l = typeof i == "function", _ = Kt(t) ? E(t.length) : [];
        return ai(t, function(p) {
          _[++a] = l ? te(i, p, s) : Hn(p, i, s);
        }), _;
      }), Kv = Gr(function(t, i, s) {
        qe(t, s, i);
      });
      function Jr(t, i) {
        var s = z(t) ? gt : vl;
        return s(t, X(i, 3));
      }
      function Zv(t, i, s, a) {
        return t == null ? [] : (z(i) || (i = i == null ? [] : [i]), s = a ? r : s, z(s) || (s = s == null ? [] : [s]), wl(t, i, s));
      }
      var Jv = Gr(function(t, i, s) {
        t[s ? 0 : 1].push(i);
      }, function() {
        return [[], []];
      });
      function Qv(t, i, s) {
        var a = z(t) ? go : qu, l = arguments.length < 3;
        return a(t, X(i, 4), s, l, ai);
      }
      function jv(t, i, s) {
        var a = z(t) ? hd : qu, l = arguments.length < 3;
        return a(t, X(i, 4), s, l, fl);
      }
      function tm(t, i) {
        var s = z(t) ? ni : hl;
        return s(t, ts(X(i, 3)));
      }
      function em(t) {
        var i = z(t) ? ol : $p;
        return i(t);
      }
      function im(t, i, s) {
        (s ? Xt(t, i, s) : i === r) ? i = 1 : i = Z(i);
        var a = z(t) ? Ap : zp;
        return a(t, i);
      }
      function nm(t) {
        var i = z(t) ? Ip : Zp;
        return i(t);
      }
      function rm(t) {
        if (t == null)
          return 0;
        if (Kt(t))
          return is(t) ? Zi(t) : t.length;
        var i = Wt(t);
        return i == xe || i == Ae ? t.size : Mo(t).length;
      }
      function sm(t, i, s) {
        var a = z(t) ? vo : Jp;
        return s && Xt(t, i, s) && (i = r), a(t, X(i, 3));
      }
      var om = Q(function(t, i) {
        if (t == null)
          return [];
        var s = i.length;
        return s > 1 && Xt(t, i[0], i[1]) ? i = [] : s > 2 && Xt(i[0], i[1], i[2]) && (i = [i[0]]), wl(t, Ct(i, 1), []);
      }), Qr = Vd || function() {
        return Lt.Date.now();
      };
      function am(t, i) {
        if (typeof i != "function")
          throw new fe(h);
        return t = Z(t), function() {
          if (--t < 1)
            return i.apply(this, arguments);
        };
      }
      function gf(t, i, s) {
        return i = s ? r : i, i = t && i == null ? t.length : i, Ue(t, ot, r, r, r, r, i);
      }
      function vf(t, i) {
        var s;
        if (typeof i != "function")
          throw new fe(h);
        return t = Z(t), function() {
          return --t > 0 && (s = i.apply(this, arguments)), t <= 1 && (i = r), s;
        };
      }
      var sa = Q(function(t, i, s) {
        var a = A;
        if (s.length) {
          var l = si(s, sn(sa));
          a |= G;
        }
        return Ue(t, a, i, s, l);
      }), mf = Q(function(t, i, s) {
        var a = A | M;
        if (s.length) {
          var l = si(s, sn(mf));
          a |= G;
        }
        return Ue(i, a, t, s, l);
      });
      function yf(t, i, s) {
        i = s ? r : i;
        var a = Ue(t, W, r, r, r, r, r, i);
        return a.placeholder = yf.placeholder, a;
      }
      function Sf(t, i, s) {
        i = s ? r : i;
        var a = Ue(t, C, r, r, r, r, r, i);
        return a.placeholder = Sf.placeholder, a;
      }
      function wf(t, i, s) {
        var a, l, _, p, g, y, D = 0, R = !1, O = !1, H = !0;
        if (typeof t != "function")
          throw new fe(h);
        i = pe(i) || 0, mt(s) && (R = !!s.leading, O = "maxWait" in s, _ = O ? Rt(pe(s.maxWait) || 0, i) : _, H = "trailing" in s ? !!s.trailing : H);
        function B(At) {
          var Re = a, Je = l;
          return a = l = r, D = At, p = t.apply(Je, Re), p;
        }
        function k(At) {
          return D = At, g = Xn(tt, i), R ? B(At) : p;
        }
        function J(At) {
          var Re = At - y, Je = At - D, Vf = i - Re;
          return O ? Mt(Vf, _ - Je) : Vf;
        }
        function q(At) {
          var Re = At - y, Je = At - D;
          return y === r || Re >= i || Re < 0 || O && Je >= _;
        }
        function tt() {
          var At = Qr();
          if (q(At))
            return nt(At);
          g = Xn(tt, J(At));
        }
        function nt(At) {
          return g = r, H && a ? B(At) : (a = l = r, p);
        }
        function re() {
          g !== r && Ol(g), D = 0, a = y = l = g = r;
        }
        function kt() {
          return g === r ? p : nt(Qr());
        }
        function se() {
          var At = Qr(), Re = q(At);
          if (a = arguments, l = this, y = At, Re) {
            if (g === r)
              return k(y);
            if (O)
              return Ol(g), g = Xn(tt, i), B(y);
          }
          return g === r && (g = Xn(tt, i)), p;
        }
        return se.cancel = re, se.flush = kt, se;
      }
      var um = Q(function(t, i) {
        return ll(t, 1, i);
      }), lm = Q(function(t, i, s) {
        return ll(t, pe(i) || 0, s);
      });
      function fm(t) {
        return Ue(t, it);
      }
      function jr(t, i) {
        if (typeof t != "function" || i != null && typeof i != "function")
          throw new fe(h);
        var s = function() {
          var a = arguments, l = i ? i.apply(this, a) : a[0], _ = s.cache;
          if (_.has(l))
            return _.get(l);
          var p = t.apply(this, a);
          return s.cache = _.set(l, p) || _, p;
        };
        return s.cache = new (jr.Cache || ke)(), s;
      }
      jr.Cache = ke;
      function ts(t) {
        if (typeof t != "function")
          throw new fe(h);
        return function() {
          var i = arguments;
          switch (i.length) {
            case 0:
              return !t.call(this);
            case 1:
              return !t.call(this, i[0]);
            case 2:
              return !t.call(this, i[0], i[1]);
            case 3:
              return !t.call(this, i[0], i[1], i[2]);
          }
          return !t.apply(this, i);
        };
      }
      function hm(t) {
        return vf(2, t);
      }
      var cm = Qp(function(t, i) {
        i = i.length == 1 && z(i[0]) ? gt(i[0], ee(X())) : gt(Ct(i, 1), ee(X()));
        var s = i.length;
        return Q(function(a) {
          for (var l = -1, _ = Mt(a.length, s); ++l < _; )
            a[l] = i[l].call(this, a[l]);
          return te(t, this, a);
        });
      }), oa = Q(function(t, i) {
        var s = si(i, sn(oa));
        return Ue(t, G, r, i, s);
      }), Ef = Q(function(t, i) {
        var s = si(i, sn(Ef));
        return Ue(t, Y, r, i, s);
      }), _m = $e(function(t, i) {
        return Ue(t, ct, r, r, r, i);
      });
      function dm(t, i) {
        if (typeof t != "function")
          throw new fe(h);
        return i = i === r ? i : Z(i), Q(t, i);
      }
      function pm(t, i) {
        if (typeof t != "function")
          throw new fe(h);
        return i = i == null ? 0 : Rt(Z(i), 0), Q(function(s) {
          var a = s[i], l = fi(s, 0, i);
          return a && ri(l, a), te(t, this, l);
        });
      }
      function gm(t, i, s) {
        var a = !0, l = !0;
        if (typeof t != "function")
          throw new fe(h);
        return mt(s) && (a = "leading" in s ? !!s.leading : a, l = "trailing" in s ? !!s.trailing : l), wf(t, i, {
          leading: a,
          maxWait: i,
          trailing: l
        });
      }
      function vm(t) {
        return gf(t, 1);
      }
      function mm(t, i) {
        return oa(ko(i), t);
      }
      function ym() {
        if (!arguments.length)
          return [];
        var t = arguments[0];
        return z(t) ? t : [t];
      }
      function Sm(t) {
        return ce(t, P);
      }
      function wm(t, i) {
        return i = typeof i == "function" ? i : r, ce(t, P, i);
      }
      function Em(t) {
        return ce(t, S | P);
      }
      function xm(t, i) {
        return i = typeof i == "function" ? i : r, ce(t, S | P, i);
      }
      function Am(t, i) {
        return i == null || ul(t, i, bt(i));
      }
      function De(t, i) {
        return t === i || t !== t && i !== i;
      }
      var Im = Ur(Co), Tm = Ur(function(t, i) {
        return t >= i;
      }), Ci = dl(/* @__PURE__ */ function() {
        return arguments;
      }()) ? dl : function(t) {
        return yt(t) && ft.call(t, "callee") && !tl.call(t, "callee");
      }, z = E.isArray, Dm = Mu ? ee(Mu) : Mp;
      function Kt(t) {
        return t != null && es(t.length) && !Ke(t);
      }
      function xt(t) {
        return yt(t) && Kt(t);
      }
      function Rm(t) {
        return t === !0 || t === !1 || yt(t) && Gt(t) == xn;
      }
      var hi = Gd || va, bm = Wu ? ee(Wu) : Wp;
      function Om(t) {
        return yt(t) && t.nodeType === 1 && !kn(t);
      }
      function Lm(t) {
        if (t == null)
          return !0;
        if (Kt(t) && (z(t) || typeof t == "string" || typeof t.splice == "function" || hi(t) || on(t) || Ci(t)))
          return !t.length;
        var i = Wt(t);
        if (i == xe || i == Ae)
          return !t.size;
        if (Gn(t))
          return !Mo(t).length;
        for (var s in t)
          if (ft.call(t, s))
            return !1;
        return !0;
      }
      function Cm(t, i) {
        return Yn(t, i);
      }
      function Nm(t, i, s) {
        s = typeof s == "function" ? s : r;
        var a = s ? s(t, i) : r;
        return a === r ? Yn(t, i, r, s) : !!a;
      }
      function aa(t) {
        if (!yt(t))
          return !1;
        var i = Gt(t);
        return i == _r || i == i_ || typeof t.message == "string" && typeof t.name == "string" && !kn(t);
      }
      function Pm(t) {
        return typeof t == "number" && il(t);
      }
      function Ke(t) {
        if (!mt(t))
          return !1;
        var i = Gt(t);
        return i == dr || i == lu || i == e_ || i == r_;
      }
      function xf(t) {
        return typeof t == "number" && t == Z(t);
      }
      function es(t) {
        return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Ee;
      }
      function mt(t) {
        var i = typeof t;
        return t != null && (i == "object" || i == "function");
      }
      function yt(t) {
        return t != null && typeof t == "object";
      }
      var Af = Fu ? ee(Fu) : Hp;
      function Mm(t, i) {
        return t === i || Po(t, i, Jo(i));
      }
      function Wm(t, i, s) {
        return s = typeof s == "function" ? s : r, Po(t, i, Jo(i), s);
      }
      function Fm(t) {
        return If(t) && t != +t;
      }
      function Hm(t) {
        if (wg(t))
          throw new $(f);
        return pl(t);
      }
      function Ym(t) {
        return t === null;
      }
      function Vm(t) {
        return t == null;
      }
      function If(t) {
        return typeof t == "number" || yt(t) && Gt(t) == In;
      }
      function kn(t) {
        if (!yt(t) || Gt(t) != Ge)
          return !1;
        var i = Rr(t);
        if (i === null)
          return !0;
        var s = ft.call(i, "constructor") && i.constructor;
        return typeof s == "function" && s instanceof s && Ar.call(s) == Wd;
      }
      var ua = Hu ? ee(Hu) : Yp;
      function Bm(t) {
        return xf(t) && t >= -Ee && t <= Ee;
      }
      var Tf = Yu ? ee(Yu) : Vp;
      function is(t) {
        return typeof t == "string" || !z(t) && yt(t) && Gt(t) == Dn;
      }
      function ne(t) {
        return typeof t == "symbol" || yt(t) && Gt(t) == pr;
      }
      var on = Vu ? ee(Vu) : Bp;
      function Gm(t) {
        return t === r;
      }
      function Xm(t) {
        return yt(t) && Wt(t) == Rn;
      }
      function km(t) {
        return yt(t) && Gt(t) == o_;
      }
      var qm = Ur(Wo), Um = Ur(function(t, i) {
        return t <= i;
      });
      function Df(t) {
        if (!t)
          return [];
        if (Kt(t))
          return is(t) ? Ie(t) : zt(t);
        if (Ln && t[Ln])
          return Ad(t[Ln]());
        var i = Wt(t), s = i == xe ? xo : i == Ae ? wr : an;
        return s(t);
      }
      function Ze(t) {
        if (!t)
          return t === 0 ? t : 0;
        if (t = pe(t), t === Pe || t === -Pe) {
          var i = t < 0 ? -1 : 1;
          return i * hr;
        }
        return t === t ? t : 0;
      }
      function Z(t) {
        var i = Ze(t), s = i % 1;
        return i === i ? s ? i - s : i : 0;
      }
      function Rf(t) {
        return t ? Ri(Z(t), 0, $t) : 0;
      }
      function pe(t) {
        if (typeof t == "number")
          return t;
        if (ne(t))
          return xi;
        if (mt(t)) {
          var i = typeof t.valueOf == "function" ? t.valueOf() : t;
          t = mt(i) ? i + "" : i;
        }
        if (typeof t != "string")
          return t === 0 ? t : +t;
        t = Uu(t);
        var s = D_.test(t);
        return s || b_.test(t) ? ad(t.slice(2), s ? 2 : 8) : T_.test(t) ? xi : +t;
      }
      function bf(t) {
        return We(t, Zt(t));
      }
      function $m(t) {
        return t ? Ri(Z(t), -Ee, Ee) : t === 0 ? t : 0;
      }
      function lt(t) {
        return t == null ? "" : ie(t);
      }
      var zm = nn(function(t, i) {
        if (Gn(i) || Kt(i)) {
          We(i, bt(i), t);
          return;
        }
        for (var s in i)
          ft.call(i, s) && Wn(t, s, i[s]);
      }), Of = nn(function(t, i) {
        We(i, Zt(i), t);
      }), ns = nn(function(t, i, s, a) {
        We(i, Zt(i), t, a);
      }), Km = nn(function(t, i, s, a) {
        We(i, bt(i), t, a);
      }), Zm = $e(bo);
      function Jm(t, i) {
        var s = en(t);
        return i == null ? s : al(s, i);
      }
      var Qm = Q(function(t, i) {
        t = ht(t);
        var s = -1, a = i.length, l = a > 2 ? i[2] : r;
        for (l && Xt(i[0], i[1], l) && (a = 1); ++s < a; )
          for (var _ = i[s], p = Zt(_), g = -1, y = p.length; ++g < y; ) {
            var D = p[g], R = t[D];
            (R === r || De(R, Qi[D]) && !ft.call(t, D)) && (t[D] = _[D]);
          }
        return t;
      }), jm = Q(function(t) {
        return t.push(r, Ul), te(Lf, r, t);
      });
      function t0(t, i) {
        return Gu(t, X(i, 3), Me);
      }
      function e0(t, i) {
        return Gu(t, X(i, 3), Lo);
      }
      function i0(t, i) {
        return t == null ? t : Oo(t, X(i, 3), Zt);
      }
      function n0(t, i) {
        return t == null ? t : cl(t, X(i, 3), Zt);
      }
      function r0(t, i) {
        return t && Me(t, X(i, 3));
      }
      function s0(t, i) {
        return t && Lo(t, X(i, 3));
      }
      function o0(t) {
        return t == null ? [] : Hr(t, bt(t));
      }
      function a0(t) {
        return t == null ? [] : Hr(t, Zt(t));
      }
      function la(t, i, s) {
        var a = t == null ? r : bi(t, i);
        return a === r ? s : a;
      }
      function u0(t, i) {
        return t != null && Kl(t, i, Lp);
      }
      function fa(t, i) {
        return t != null && Kl(t, i, Cp);
      }
      var l0 = Bl(function(t, i, s) {
        i != null && typeof i.toString != "function" && (i = Ir.call(i)), t[i] = s;
      }, ca(Jt)), f0 = Bl(function(t, i, s) {
        i != null && typeof i.toString != "function" && (i = Ir.call(i)), ft.call(t, i) ? t[i].push(s) : t[i] = [s];
      }, X), h0 = Q(Hn);
      function bt(t) {
        return Kt(t) ? sl(t) : Mo(t);
      }
      function Zt(t) {
        return Kt(t) ? sl(t, !0) : Gp(t);
      }
      function c0(t, i) {
        var s = {};
        return i = X(i, 3), Me(t, function(a, l, _) {
          qe(s, i(a, l, _), a);
        }), s;
      }
      function _0(t, i) {
        var s = {};
        return i = X(i, 3), Me(t, function(a, l, _) {
          qe(s, l, i(a, l, _));
        }), s;
      }
      var d0 = nn(function(t, i, s) {
        Yr(t, i, s);
      }), Lf = nn(function(t, i, s, a) {
        Yr(t, i, s, a);
      }), p0 = $e(function(t, i) {
        var s = {};
        if (t == null)
          return s;
        var a = !1;
        i = gt(i, function(_) {
          return _ = li(_, t), a || (a = _.length > 1), _;
        }), We(t, Ko(t), s), a && (s = ce(s, S | N | P, lg));
        for (var l = i.length; l--; )
          Bo(s, i[l]);
        return s;
      });
      function g0(t, i) {
        return Cf(t, ts(X(i)));
      }
      var v0 = $e(function(t, i) {
        return t == null ? {} : kp(t, i);
      });
      function Cf(t, i) {
        if (t == null)
          return {};
        var s = gt(Ko(t), function(a) {
          return [a];
        });
        return i = X(i), El(t, s, function(a, l) {
          return i(a, l[0]);
        });
      }
      function m0(t, i, s) {
        i = li(i, t);
        var a = -1, l = i.length;
        for (l || (l = 1, t = r); ++a < l; ) {
          var _ = t == null ? r : t[Fe(i[a])];
          _ === r && (a = l, _ = s), t = Ke(_) ? _.call(t) : _;
        }
        return t;
      }
      function y0(t, i, s) {
        return t == null ? t : Vn(t, i, s);
      }
      function S0(t, i, s, a) {
        return a = typeof a == "function" ? a : r, t == null ? t : Vn(t, i, s, a);
      }
      var Nf = kl(bt), Pf = kl(Zt);
      function w0(t, i, s) {
        var a = z(t), l = a || hi(t) || on(t);
        if (i = X(i, 4), s == null) {
          var _ = t && t.constructor;
          l ? s = a ? new _() : [] : mt(t) ? s = Ke(_) ? en(Rr(t)) : {} : s = {};
        }
        return (l ? le : Me)(t, function(p, g, y) {
          return i(s, p, g, y);
        }), s;
      }
      function E0(t, i) {
        return t == null ? !0 : Bo(t, i);
      }
      function x0(t, i, s) {
        return t == null ? t : Dl(t, i, ko(s));
      }
      function A0(t, i, s, a) {
        return a = typeof a == "function" ? a : r, t == null ? t : Dl(t, i, ko(s), a);
      }
      function an(t) {
        return t == null ? [] : Eo(t, bt(t));
      }
      function I0(t) {
        return t == null ? [] : Eo(t, Zt(t));
      }
      function T0(t, i, s) {
        return s === r && (s = i, i = r), s !== r && (s = pe(s), s = s === s ? s : 0), i !== r && (i = pe(i), i = i === i ? i : 0), Ri(pe(t), i, s);
      }
      function D0(t, i, s) {
        return i = Ze(i), s === r ? (s = i, i = 0) : s = Ze(s), t = pe(t), Np(t, i, s);
      }
      function R0(t, i, s) {
        if (s && typeof s != "boolean" && Xt(t, i, s) && (i = s = r), s === r && (typeof i == "boolean" ? (s = i, i = r) : typeof t == "boolean" && (s = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = Ze(t), i === r ? (i = t, t = 0) : i = Ze(i)), t > i) {
          var a = t;
          t = i, i = a;
        }
        if (s || t % 1 || i % 1) {
          var l = nl();
          return Mt(t + l * (i - t + od("1e-" + ((l + "").length - 1))), i);
        }
        return Ho(t, i);
      }
      var b0 = rn(function(t, i, s) {
        return i = i.toLowerCase(), t + (s ? Mf(i) : i);
      });
      function Mf(t) {
        return ha(lt(t).toLowerCase());
      }
      function Wf(t) {
        return t = lt(t), t && t.replace(L_, yd).replace(Z_, "");
      }
      function O0(t, i, s) {
        t = lt(t), i = ie(i);
        var a = t.length;
        s = s === r ? a : Ri(Z(s), 0, a);
        var l = s;
        return s -= i.length, s >= 0 && t.slice(s, l) == i;
      }
      function L0(t) {
        return t = lt(t), t && h_.test(t) ? t.replace(cu, Sd) : t;
      }
      function C0(t) {
        return t = lt(t), t && v_.test(t) ? t.replace(so, "\\$&") : t;
      }
      var N0 = rn(function(t, i, s) {
        return t + (s ? "-" : "") + i.toLowerCase();
      }), P0 = rn(function(t, i, s) {
        return t + (s ? " " : "") + i.toLowerCase();
      }), M0 = Hl("toLowerCase");
      function W0(t, i, s) {
        t = lt(t), i = Z(i);
        var a = i ? Zi(t) : 0;
        if (!i || a >= i)
          return t;
        var l = (i - a) / 2;
        return qr(Cr(l), s) + t + qr(Lr(l), s);
      }
      function F0(t, i, s) {
        t = lt(t), i = Z(i);
        var a = i ? Zi(t) : 0;
        return i && a < i ? t + qr(i - a, s) : t;
      }
      function H0(t, i, s) {
        t = lt(t), i = Z(i);
        var a = i ? Zi(t) : 0;
        return i && a < i ? qr(i - a, s) + t : t;
      }
      function Y0(t, i, s) {
        return s || i == null ? i = 0 : i && (i = +i), Ud(lt(t).replace(oo, ""), i || 0);
      }
      function V0(t, i, s) {
        return (s ? Xt(t, i, s) : i === r) ? i = 1 : i = Z(i), Yo(lt(t), i);
      }
      function B0() {
        var t = arguments, i = lt(t[0]);
        return t.length < 3 ? i : i.replace(t[1], t[2]);
      }
      var G0 = rn(function(t, i, s) {
        return t + (s ? "_" : "") + i.toLowerCase();
      });
      function X0(t, i, s) {
        return s && typeof s != "number" && Xt(t, i, s) && (i = s = r), s = s === r ? $t : s >>> 0, s ? (t = lt(t), t && (typeof i == "string" || i != null && !ua(i)) && (i = ie(i), !i && Ki(t)) ? fi(Ie(t), 0, s) : t.split(i, s)) : [];
      }
      var k0 = rn(function(t, i, s) {
        return t + (s ? " " : "") + ha(i);
      });
      function q0(t, i, s) {
        return t = lt(t), s = s == null ? 0 : Ri(Z(s), 0, t.length), i = ie(i), t.slice(s, s + i.length) == i;
      }
      function U0(t, i, s) {
        var a = c.templateSettings;
        s && Xt(t, i, s) && (i = r), t = lt(t), i = ns({}, i, a, ql);
        var l = ns({}, i.imports, a.imports, ql), _ = bt(l), p = Eo(l, _), g, y, D = 0, R = i.interpolate || gr, O = "__p += '", H = Ao(
          (i.escape || gr).source + "|" + R.source + "|" + (R === _u ? I_ : gr).source + "|" + (i.evaluate || gr).source + "|$",
          "g"
        ), B = "//# sourceURL=" + (ft.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ed + "]") + `
`;
        t.replace(H, function(q, tt, nt, re, kt, se) {
          return nt || (nt = re), O += t.slice(D, se).replace(C_, wd), tt && (g = !0, O += `' +
__e(` + tt + `) +
'`), kt && (y = !0, O += `';
` + kt + `;
__p += '`), nt && (O += `' +
((__t = (` + nt + `)) == null ? '' : __t) +
'`), D = se + q.length, q;
        }), O += `';
`;
        var k = ft.call(i, "variable") && i.variable;
        if (!k)
          O = `with (obj) {
` + O + `
}
`;
        else if (x_.test(k))
          throw new $(d);
        O = (y ? O.replace(a_, "") : O).replace(u_, "$1").replace(l_, "$1;"), O = "function(" + (k || "obj") + `) {
` + (k ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (g ? ", __e = _.escape" : "") + (y ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + O + `return __p
}`;
        var J = Hf(function() {
          return at(_, B + "return " + O).apply(r, p);
        });
        if (J.source = O, aa(J))
          throw J;
        return J;
      }
      function $0(t) {
        return lt(t).toLowerCase();
      }
      function z0(t) {
        return lt(t).toUpperCase();
      }
      function K0(t, i, s) {
        if (t = lt(t), t && (s || i === r))
          return Uu(t);
        if (!t || !(i = ie(i)))
          return t;
        var a = Ie(t), l = Ie(i), _ = $u(a, l), p = zu(a, l) + 1;
        return fi(a, _, p).join("");
      }
      function Z0(t, i, s) {
        if (t = lt(t), t && (s || i === r))
          return t.slice(0, Zu(t) + 1);
        if (!t || !(i = ie(i)))
          return t;
        var a = Ie(t), l = zu(a, Ie(i)) + 1;
        return fi(a, 0, l).join("");
      }
      function J0(t, i, s) {
        if (t = lt(t), t && (s || i === r))
          return t.replace(oo, "");
        if (!t || !(i = ie(i)))
          return t;
        var a = Ie(t), l = $u(a, Ie(i));
        return fi(a, l).join("");
      }
      function Q0(t, i) {
        var s = we, a = Et;
        if (mt(i)) {
          var l = "separator" in i ? i.separator : l;
          s = "length" in i ? Z(i.length) : s, a = "omission" in i ? ie(i.omission) : a;
        }
        t = lt(t);
        var _ = t.length;
        if (Ki(t)) {
          var p = Ie(t);
          _ = p.length;
        }
        if (s >= _)
          return t;
        var g = s - Zi(a);
        if (g < 1)
          return a;
        var y = p ? fi(p, 0, g).join("") : t.slice(0, g);
        if (l === r)
          return y + a;
        if (p && (g += y.length - g), ua(l)) {
          if (t.slice(g).search(l)) {
            var D, R = y;
            for (l.global || (l = Ao(l.source, lt(du.exec(l)) + "g")), l.lastIndex = 0; D = l.exec(R); )
              var O = D.index;
            y = y.slice(0, O === r ? g : O);
          }
        } else if (t.indexOf(ie(l), g) != g) {
          var H = y.lastIndexOf(l);
          H > -1 && (y = y.slice(0, H));
        }
        return y + a;
      }
      function j0(t) {
        return t = lt(t), t && f_.test(t) ? t.replace(hu, Rd) : t;
      }
      var ty = rn(function(t, i, s) {
        return t + (s ? " " : "") + i.toUpperCase();
      }), ha = Hl("toUpperCase");
      function Ff(t, i, s) {
        return t = lt(t), i = s ? r : i, i === r ? xd(t) ? Ld(t) : dd(t) : t.match(i) || [];
      }
      var Hf = Q(function(t, i) {
        try {
          return te(t, r, i);
        } catch (s) {
          return aa(s) ? s : new $(s);
        }
      }), ey = $e(function(t, i) {
        return le(i, function(s) {
          s = Fe(s), qe(t, s, sa(t[s], t));
        }), t;
      });
      function iy(t) {
        var i = t == null ? 0 : t.length, s = X();
        return t = i ? gt(t, function(a) {
          if (typeof a[1] != "function")
            throw new fe(h);
          return [s(a[0]), a[1]];
        }) : [], Q(function(a) {
          for (var l = -1; ++l < i; ) {
            var _ = t[l];
            if (te(_[0], this, a))
              return te(_[1], this, a);
          }
        });
      }
      function ny(t) {
        return Rp(ce(t, S));
      }
      function ca(t) {
        return function() {
          return t;
        };
      }
      function ry(t, i) {
        return t == null || t !== t ? i : t;
      }
      var sy = Vl(), oy = Vl(!0);
      function Jt(t) {
        return t;
      }
      function _a(t) {
        return gl(typeof t == "function" ? t : ce(t, S));
      }
      function ay(t) {
        return ml(ce(t, S));
      }
      function uy(t, i) {
        return yl(t, ce(i, S));
      }
      var ly = Q(function(t, i) {
        return function(s) {
          return Hn(s, t, i);
        };
      }), fy = Q(function(t, i) {
        return function(s) {
          return Hn(t, s, i);
        };
      });
      function da(t, i, s) {
        var a = bt(i), l = Hr(i, a);
        s == null && !(mt(i) && (l.length || !a.length)) && (s = i, i = t, t = this, l = Hr(i, bt(i)));
        var _ = !(mt(s) && "chain" in s) || !!s.chain, p = Ke(t);
        return le(l, function(g) {
          var y = i[g];
          t[g] = y, p && (t.prototype[g] = function() {
            var D = this.__chain__;
            if (_ || D) {
              var R = t(this.__wrapped__), O = R.__actions__ = zt(this.__actions__);
              return O.push({ func: y, args: arguments, thisArg: t }), R.__chain__ = D, R;
            }
            return y.apply(t, ri([this.value()], arguments));
          });
        }), t;
      }
      function hy() {
        return Lt._ === this && (Lt._ = Fd), this;
      }
      function pa() {
      }
      function cy(t) {
        return t = Z(t), Q(function(i) {
          return Sl(i, t);
        });
      }
      var _y = Uo(gt), dy = Uo(Bu), py = Uo(vo);
      function Yf(t) {
        return jo(t) ? mo(Fe(t)) : qp(t);
      }
      function gy(t) {
        return function(i) {
          return t == null ? r : bi(t, i);
        };
      }
      var vy = Gl(), my = Gl(!0);
      function ga() {
        return [];
      }
      function va() {
        return !1;
      }
      function yy() {
        return {};
      }
      function Sy() {
        return "";
      }
      function wy() {
        return !0;
      }
      function Ey(t, i) {
        if (t = Z(t), t < 1 || t > Ee)
          return [];
        var s = $t, a = Mt(t, $t);
        i = X(i), t -= $t;
        for (var l = wo(a, i); ++s < t; )
          i(s);
        return l;
      }
      function xy(t) {
        return z(t) ? gt(t, Fe) : ne(t) ? [t] : zt(sf(lt(t)));
      }
      function Ay(t) {
        var i = ++Md;
        return lt(t) + i;
      }
      var Iy = kr(function(t, i) {
        return t + i;
      }, 0), Ty = $o("ceil"), Dy = kr(function(t, i) {
        return t / i;
      }, 1), Ry = $o("floor");
      function by(t) {
        return t && t.length ? Fr(t, Jt, Co) : r;
      }
      function Oy(t, i) {
        return t && t.length ? Fr(t, X(i, 2), Co) : r;
      }
      function Ly(t) {
        return ku(t, Jt);
      }
      function Cy(t, i) {
        return ku(t, X(i, 2));
      }
      function Ny(t) {
        return t && t.length ? Fr(t, Jt, Wo) : r;
      }
      function Py(t, i) {
        return t && t.length ? Fr(t, X(i, 2), Wo) : r;
      }
      var My = kr(function(t, i) {
        return t * i;
      }, 1), Wy = $o("round"), Fy = kr(function(t, i) {
        return t - i;
      }, 0);
      function Hy(t) {
        return t && t.length ? So(t, Jt) : 0;
      }
      function Yy(t, i) {
        return t && t.length ? So(t, X(i, 2)) : 0;
      }
      return c.after = am, c.ary = gf, c.assign = zm, c.assignIn = Of, c.assignInWith = ns, c.assignWith = Km, c.at = Zm, c.before = vf, c.bind = sa, c.bindAll = ey, c.bindKey = mf, c.castArray = ym, c.chain = _f, c.chunk = Rg, c.compact = bg, c.concat = Og, c.cond = iy, c.conforms = ny, c.constant = ca, c.countBy = Hv, c.create = Jm, c.curry = yf, c.curryRight = Sf, c.debounce = wf, c.defaults = Qm, c.defaultsDeep = jm, c.defer = um, c.delay = lm, c.difference = Lg, c.differenceBy = Cg, c.differenceWith = Ng, c.drop = Pg, c.dropRight = Mg, c.dropRightWhile = Wg, c.dropWhile = Fg, c.fill = Hg, c.filter = Vv, c.flatMap = Xv, c.flatMapDeep = kv, c.flatMapDepth = qv, c.flatten = lf, c.flattenDeep = Yg, c.flattenDepth = Vg, c.flip = fm, c.flow = sy, c.flowRight = oy, c.fromPairs = Bg, c.functions = o0, c.functionsIn = a0, c.groupBy = Uv, c.initial = Xg, c.intersection = kg, c.intersectionBy = qg, c.intersectionWith = Ug, c.invert = l0, c.invertBy = f0, c.invokeMap = zv, c.iteratee = _a, c.keyBy = Kv, c.keys = bt, c.keysIn = Zt, c.map = Jr, c.mapKeys = c0, c.mapValues = _0, c.matches = ay, c.matchesProperty = uy, c.memoize = jr, c.merge = d0, c.mergeWith = Lf, c.method = ly, c.methodOf = fy, c.mixin = da, c.negate = ts, c.nthArg = cy, c.omit = p0, c.omitBy = g0, c.once = hm, c.orderBy = Zv, c.over = _y, c.overArgs = cm, c.overEvery = dy, c.overSome = py, c.partial = oa, c.partialRight = Ef, c.partition = Jv, c.pick = v0, c.pickBy = Cf, c.property = Yf, c.propertyOf = gy, c.pull = Zg, c.pullAll = hf, c.pullAllBy = Jg, c.pullAllWith = Qg, c.pullAt = jg, c.range = vy, c.rangeRight = my, c.rearg = _m, c.reject = tm, c.remove = tv, c.rest = dm, c.reverse = na, c.sampleSize = im, c.set = y0, c.setWith = S0, c.shuffle = nm, c.slice = ev, c.sortBy = om, c.sortedUniq = uv, c.sortedUniqBy = lv, c.split = X0, c.spread = pm, c.tail = fv, c.take = hv, c.takeRight = cv, c.takeRightWhile = _v, c.takeWhile = dv, c.tap = bv, c.throttle = gm, c.thru = Zr, c.toArray = Df, c.toPairs = Nf, c.toPairsIn = Pf, c.toPath = xy, c.toPlainObject = bf, c.transform = w0, c.unary = vm, c.union = pv, c.unionBy = gv, c.unionWith = vv, c.uniq = mv, c.uniqBy = yv, c.uniqWith = Sv, c.unset = E0, c.unzip = ra, c.unzipWith = cf, c.update = x0, c.updateWith = A0, c.values = an, c.valuesIn = I0, c.without = wv, c.words = Ff, c.wrap = mm, c.xor = Ev, c.xorBy = xv, c.xorWith = Av, c.zip = Iv, c.zipObject = Tv, c.zipObjectDeep = Dv, c.zipWith = Rv, c.entries = Nf, c.entriesIn = Pf, c.extend = Of, c.extendWith = ns, da(c, c), c.add = Iy, c.attempt = Hf, c.camelCase = b0, c.capitalize = Mf, c.ceil = Ty, c.clamp = T0, c.clone = Sm, c.cloneDeep = Em, c.cloneDeepWith = xm, c.cloneWith = wm, c.conformsTo = Am, c.deburr = Wf, c.defaultTo = ry, c.divide = Dy, c.endsWith = O0, c.eq = De, c.escape = L0, c.escapeRegExp = C0, c.every = Yv, c.find = Bv, c.findIndex = af, c.findKey = t0, c.findLast = Gv, c.findLastIndex = uf, c.findLastKey = e0, c.floor = Ry, c.forEach = df, c.forEachRight = pf, c.forIn = i0, c.forInRight = n0, c.forOwn = r0, c.forOwnRight = s0, c.get = la, c.gt = Im, c.gte = Tm, c.has = u0, c.hasIn = fa, c.head = ff, c.identity = Jt, c.includes = $v, c.indexOf = Gg, c.inRange = D0, c.invoke = h0, c.isArguments = Ci, c.isArray = z, c.isArrayBuffer = Dm, c.isArrayLike = Kt, c.isArrayLikeObject = xt, c.isBoolean = Rm, c.isBuffer = hi, c.isDate = bm, c.isElement = Om, c.isEmpty = Lm, c.isEqual = Cm, c.isEqualWith = Nm, c.isError = aa, c.isFinite = Pm, c.isFunction = Ke, c.isInteger = xf, c.isLength = es, c.isMap = Af, c.isMatch = Mm, c.isMatchWith = Wm, c.isNaN = Fm, c.isNative = Hm, c.isNil = Vm, c.isNull = Ym, c.isNumber = If, c.isObject = mt, c.isObjectLike = yt, c.isPlainObject = kn, c.isRegExp = ua, c.isSafeInteger = Bm, c.isSet = Tf, c.isString = is, c.isSymbol = ne, c.isTypedArray = on, c.isUndefined = Gm, c.isWeakMap = Xm, c.isWeakSet = km, c.join = $g, c.kebabCase = N0, c.last = de, c.lastIndexOf = zg, c.lowerCase = P0, c.lowerFirst = M0, c.lt = qm, c.lte = Um, c.max = by, c.maxBy = Oy, c.mean = Ly, c.meanBy = Cy, c.min = Ny, c.minBy = Py, c.stubArray = ga, c.stubFalse = va, c.stubObject = yy, c.stubString = Sy, c.stubTrue = wy, c.multiply = My, c.nth = Kg, c.noConflict = hy, c.noop = pa, c.now = Qr, c.pad = W0, c.padEnd = F0, c.padStart = H0, c.parseInt = Y0, c.random = R0, c.reduce = Qv, c.reduceRight = jv, c.repeat = V0, c.replace = B0, c.result = m0, c.round = Wy, c.runInContext = m, c.sample = em, c.size = rm, c.snakeCase = G0, c.some = sm, c.sortedIndex = iv, c.sortedIndexBy = nv, c.sortedIndexOf = rv, c.sortedLastIndex = sv, c.sortedLastIndexBy = ov, c.sortedLastIndexOf = av, c.startCase = k0, c.startsWith = q0, c.subtract = Fy, c.sum = Hy, c.sumBy = Yy, c.template = U0, c.times = Ey, c.toFinite = Ze, c.toInteger = Z, c.toLength = Rf, c.toLower = $0, c.toNumber = pe, c.toSafeInteger = $m, c.toString = lt, c.toUpper = z0, c.trim = K0, c.trimEnd = Z0, c.trimStart = J0, c.truncate = Q0, c.unescape = j0, c.uniqueId = Ay, c.upperCase = ty, c.upperFirst = ha, c.each = df, c.eachRight = pf, c.first = ff, da(c, function() {
        var t = {};
        return Me(c, function(i, s) {
          ft.call(c.prototype, s) || (t[s] = i);
        }), t;
      }(), { chain: !1 }), c.VERSION = o, le(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
        c[t].placeholder = c;
      }), le(["drop", "take"], function(t, i) {
        et.prototype[t] = function(s) {
          s = s === r ? 1 : Rt(Z(s), 0);
          var a = this.__filtered__ && !i ? new et(this) : this.clone();
          return a.__filtered__ ? a.__takeCount__ = Mt(s, a.__takeCount__) : a.__views__.push({
            size: Mt(s, $t),
            type: t + (a.__dir__ < 0 ? "Right" : "")
          }), a;
        }, et.prototype[t + "Right"] = function(s) {
          return this.reverse()[t](s).reverse();
        };
      }), le(["filter", "map", "takeWhile"], function(t, i) {
        var s = i + 1, a = s == It || s == fr;
        et.prototype[t] = function(l) {
          var _ = this.clone();
          return _.__iteratees__.push({
            iteratee: X(l, 3),
            type: s
          }), _.__filtered__ = _.__filtered__ || a, _;
        };
      }), le(["head", "last"], function(t, i) {
        var s = "take" + (i ? "Right" : "");
        et.prototype[t] = function() {
          return this[s](1).value()[0];
        };
      }), le(["initial", "tail"], function(t, i) {
        var s = "drop" + (i ? "" : "Right");
        et.prototype[t] = function() {
          return this.__filtered__ ? new et(this) : this[s](1);
        };
      }), et.prototype.compact = function() {
        return this.filter(Jt);
      }, et.prototype.find = function(t) {
        return this.filter(t).head();
      }, et.prototype.findLast = function(t) {
        return this.reverse().find(t);
      }, et.prototype.invokeMap = Q(function(t, i) {
        return typeof t == "function" ? new et(this) : this.map(function(s) {
          return Hn(s, t, i);
        });
      }), et.prototype.reject = function(t) {
        return this.filter(ts(X(t)));
      }, et.prototype.slice = function(t, i) {
        t = Z(t);
        var s = this;
        return s.__filtered__ && (t > 0 || i < 0) ? new et(s) : (t < 0 ? s = s.takeRight(-t) : t && (s = s.drop(t)), i !== r && (i = Z(i), s = i < 0 ? s.dropRight(-i) : s.take(i - t)), s);
      }, et.prototype.takeRightWhile = function(t) {
        return this.reverse().takeWhile(t).reverse();
      }, et.prototype.toArray = function() {
        return this.take($t);
      }, Me(et.prototype, function(t, i) {
        var s = /^(?:filter|find|map|reject)|While$/.test(i), a = /^(?:head|last)$/.test(i), l = c[a ? "take" + (i == "last" ? "Right" : "") : i], _ = a || /^find/.test(i);
        l && (c.prototype[i] = function() {
          var p = this.__wrapped__, g = a ? [1] : arguments, y = p instanceof et, D = g[0], R = y || z(p), O = function(tt) {
            var nt = l.apply(c, ri([tt], g));
            return a && H ? nt[0] : nt;
          };
          R && s && typeof D == "function" && D.length != 1 && (y = R = !1);
          var H = this.__chain__, B = !!this.__actions__.length, k = _ && !H, J = y && !B;
          if (!_ && R) {
            p = J ? p : new et(this);
            var q = t.apply(p, g);
            return q.__actions__.push({ func: Zr, args: [O], thisArg: r }), new he(q, H);
          }
          return k && J ? t.apply(this, g) : (q = this.thru(O), k ? a ? q.value()[0] : q.value() : q);
        });
      }), le(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
        var i = Er[t], s = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", a = /^(?:pop|shift)$/.test(t);
        c.prototype[t] = function() {
          var l = arguments;
          if (a && !this.__chain__) {
            var _ = this.value();
            return i.apply(z(_) ? _ : [], l);
          }
          return this[s](function(p) {
            return i.apply(z(p) ? p : [], l);
          });
        };
      }), Me(et.prototype, function(t, i) {
        var s = c[i];
        if (s) {
          var a = s.name + "";
          ft.call(tn, a) || (tn[a] = []), tn[a].push({ name: i, func: s });
        }
      }), tn[Xr(r, M).name] = [{
        name: "wrapper",
        func: r
      }], et.prototype.clone = jd, et.prototype.reverse = tp, et.prototype.value = ep, c.prototype.at = Ov, c.prototype.chain = Lv, c.prototype.commit = Cv, c.prototype.next = Nv, c.prototype.plant = Mv, c.prototype.reverse = Wv, c.prototype.toJSON = c.prototype.valueOf = c.prototype.value = Fv, c.prototype.first = c.prototype.head, Ln && (c.prototype[Ln] = Pv), c;
    }, Ji = Cd();
    Ai ? ((Ai.exports = Ji)._ = Ji, co._ = Ji) : Lt._ = Ji;
  }).call(qn);
})(Es, Es.exports);
var Bf = Es.exports;
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
var Ws = {}, Mi = typeof Map == "function" ? /* @__PURE__ */ new Map() : null, Ye = "swap", Bi = "move", Vy = "synchronize", mi = "layoutStart", Gf = "layoutEnd", Xf = "layoutAbort", kf = "add", qf = "remove", By = "showStart", Gy = "showEnd", Qn = "hideStart", Xy = "hideEnd", Uf = "filter", $f = "sort", xs = "move", As = "send", yi = "beforeSend", Is = "receive", Ts = "beforeReceive", ky = "dragInit", qy = "dragStart", Uy = "dragMove", $y = "dragScroll", zy = "dragEnd", Ky = "dragReleaseStart", jn = "dragReleaseEnd", Zy = "destroy", Rh = "ontouchstart" in window, Ba = !!window.PointerEvent, Ga = !!window.navigator.msPointerEnabled, Jy = 16777216;
function Se() {
  this._events = {}, this._queue = [], this._counter = 0, this._clearOnEmit = !1;
}
Se.prototype.on = function(e, n) {
  if (!this._events || !e || !n)
    return this;
  var r = this._events[e];
  return r || (r = this._events[e] = []), r.push(n), this;
};
Se.prototype.off = function(e, n) {
  if (!this._events || !e || !n)
    return this;
  var r = this._events[e];
  if (!r || !r.length)
    return this;
  for (var o; (o = r.indexOf(n)) !== -1; )
    r.splice(o, 1);
  return this;
};
Se.prototype.clear = function(e) {
  if (!this._events || !e)
    return this;
  var n = this._events[e];
  return n && (n.length = 0, delete this._events[e]), this;
};
Se.prototype.emit = function(e) {
  if (!this._events || !e)
    return this._clearOnEmit = !1, this;
  var n = this._events[e];
  if (!n || !n.length)
    return this._clearOnEmit = !1, this;
  var r = this._queue, o = r.length, u = arguments.length - 1, f;
  u > 3 && (f = [], f.push.apply(f, arguments), f.shift()), r.push.apply(r, n), this._clearOnEmit && (n.length = 0, this._clearOnEmit = !1), ++this._counter;
  for (var h = o, d = r.length; h < d; h++)
    if (u === 0 ? r[h]() : u === 1 ? r[h](arguments[1]) : u === 2 ? r[h](arguments[1], arguments[2]) : u === 3 ? r[h](arguments[1], arguments[2], arguments[3]) : r[h].apply(null, f), !this._events)
      return this;
  return --this._counter, this._counter || (r.length = 0), this;
};
Se.prototype.burst = function() {
  return this._events ? (this._clearOnEmit = !0, this.emit.apply(this, arguments), this) : this;
};
Se.prototype.countListeners = function(e) {
  if (!this._events)
    return 0;
  var n = this._events[e];
  return n ? n.length : 0;
};
Se.prototype.destroy = function() {
  return this._events ? (this._queue.length = this._counter = 0, this._events = null, this) : this;
};
var Fs = Ba ? "pointerout" : Ga ? "MSPointerOut" : "", Qy = 100;
function wi(e) {
  Fs && (this._dragger = e, this._timeout = null, this._outEvent = null, this._isActive = !1, this._addBehaviour = this._addBehaviour.bind(this), this._removeBehaviour = this._removeBehaviour.bind(this), this._onTimeout = this._onTimeout.bind(this), this._resetData = this._resetData.bind(this), this._onStart = this._onStart.bind(this), this._onOut = this._onOut.bind(this), this._dragger.on("start", this._onStart));
}
wi.prototype._addBehaviour = function() {
  this._isActive || (this._isActive = !0, this._dragger.on("move", this._resetData), this._dragger.on("cancel", this._removeBehaviour), this._dragger.on("end", this._removeBehaviour), window.addEventListener(Fs, this._onOut));
};
wi.prototype._removeBehaviour = function() {
  this._isActive && (this._dragger.off("move", this._resetData), this._dragger.off("cancel", this._removeBehaviour), this._dragger.off("end", this._removeBehaviour), window.removeEventListener(Fs, this._onOut), this._resetData(), this._isActive = !1);
};
wi.prototype._resetData = function() {
  window.clearTimeout(this._timeout), this._timeout = null, this._outEvent = null;
};
wi.prototype._onStart = function(e) {
  e.pointerType !== "mouse" && this._addBehaviour();
};
wi.prototype._onOut = function(e) {
  this._dragger._getTrackedTouch(e) && (this._resetData(), this._outEvent = e, this._timeout = window.setTimeout(this._onTimeout, Qy));
};
wi.prototype._onTimeout = function() {
  var e = this._outEvent;
  this._resetData(), this._dragger.isActive() && this._dragger._onCancel(e);
};
wi.prototype.destroy = function() {
  Fs && (this._dragger.off("start", this._onStart), this._removeBehaviour());
};
var ma = ["", "webkit", "moz", "ms", "o", "Webkit", "Moz", "MS", "O"], zf = {};
function Hs(e, n) {
  var r = zf[n] || "";
  if (r)
    return r;
  for (var o = n[0].toUpperCase() + n.slice(1), u = 0; u < ma.length; ) {
    if (r = ma[u] ? ma[u] + o : n, r in e)
      return zf[n] = r, r;
    ++u;
  }
  return "";
}
function bh() {
  var e = !1;
  try {
    var n = Object.defineProperty({}, "passive", {
      get: function() {
        e = !0;
      }
    });
    window.addEventListener("testPassive", null, n), window.removeEventListener("testPassive", null, n);
  } catch {
  }
  return e;
}
var Ys = window.navigator.userAgent.toLowerCase(), jy = Ys.indexOf("edge") > -1, tS = Ys.indexOf("trident") > -1, eS = Ys.indexOf("firefox") > -1, iS = Ys.indexOf("android") > -1, pi = bh() ? { passive: !0 } : !1, Oh = "touchAction", rs = Hs(document.documentElement.style, Oh), nS = "auto";
function b(e, n) {
  this._element = e, this._emitter = new Se(), this._isDestroyed = !1, this._cssProps = {}, this._touchAction = "", this._isActive = !1, this._pointerId = null, this._startTime = 0, this._startX = 0, this._startY = 0, this._currentX = 0, this._currentY = 0, this._onStart = this._onStart.bind(this), this._onMove = this._onMove.bind(this), this._onCancel = this._onCancel.bind(this), this._onEnd = this._onEnd.bind(this), this._edgeHack = null, (jy || tS) && (Ba || Ga) && (this._edgeHack = new wi(this)), this.setCssProps(n), this._touchAction || this.setTouchAction(nS), e.addEventListener("dragstart", b._preventDefault, !1), e.addEventListener(b._inputEvents.start, this._onStart, pi);
}
b._pointerEvents = {
  start: "pointerdown",
  move: "pointermove",
  cancel: "pointercancel",
  end: "pointerup"
};
b._msPointerEvents = {
  start: "MSPointerDown",
  move: "MSPointerMove",
  cancel: "MSPointerCancel",
  end: "MSPointerUp"
};
b._touchEvents = {
  start: "touchstart",
  move: "touchmove",
  cancel: "touchcancel",
  end: "touchend"
};
b._mouseEvents = {
  start: "mousedown",
  move: "mousemove",
  cancel: "",
  end: "mouseup"
};
b._inputEvents = function() {
  return Rh ? b._touchEvents : Ba ? b._pointerEvents : Ga ? b._msPointerEvents : b._mouseEvents;
}();
b._emitter = new Se();
b._emitterEvents = {
  start: "start",
  move: "move",
  end: "end",
  cancel: "cancel"
};
b._activeInstances = [];
b._preventDefault = function(e) {
  e.preventDefault && e.cancelable !== !1 && e.preventDefault();
};
b._activateInstance = function(e) {
  var n = b._activeInstances.indexOf(e);
  n > -1 || (b._activeInstances.push(e), b._emitter.on(b._emitterEvents.move, e._onMove), b._emitter.on(b._emitterEvents.cancel, e._onCancel), b._emitter.on(b._emitterEvents.end, e._onEnd), b._activeInstances.length === 1 && b._bindListeners());
};
b._deactivateInstance = function(e) {
  var n = b._activeInstances.indexOf(e);
  n !== -1 && (b._activeInstances.splice(n, 1), b._emitter.off(b._emitterEvents.move, e._onMove), b._emitter.off(b._emitterEvents.cancel, e._onCancel), b._emitter.off(b._emitterEvents.end, e._onEnd), b._activeInstances.length || b._unbindListeners());
};
b._bindListeners = function() {
  window.addEventListener(b._inputEvents.move, b._onMove, pi), window.addEventListener(b._inputEvents.end, b._onEnd, pi), b._inputEvents.cancel && window.addEventListener(b._inputEvents.cancel, b._onCancel, pi);
};
b._unbindListeners = function() {
  window.removeEventListener(b._inputEvents.move, b._onMove, pi), window.removeEventListener(b._inputEvents.end, b._onEnd, pi), b._inputEvents.cancel && window.removeEventListener(b._inputEvents.cancel, b._onCancel, pi);
};
b._getEventPointerId = function(e) {
  return typeof e.pointerId == "number" ? e.pointerId : e.changedTouches ? e.changedTouches[0] ? e.changedTouches[0].identifier : null : 1;
};
b._getTouchById = function(e, n) {
  if (typeof e.pointerId == "number")
    return e.pointerId === n ? e : null;
  if (e.changedTouches) {
    for (var r = 0; r < e.changedTouches.length; r++)
      if (e.changedTouches[r].identifier === n)
        return e.changedTouches[r];
    return null;
  }
  return e;
};
b._onMove = function(e) {
  b._emitter.emit(b._emitterEvents.move, e);
};
b._onCancel = function(e) {
  b._emitter.emit(b._emitterEvents.cancel, e);
};
b._onEnd = function(e) {
  b._emitter.emit(b._emitterEvents.end, e);
};
b.prototype._reset = function() {
  this._pointerId = null, this._startTime = 0, this._startX = 0, this._startY = 0, this._currentX = 0, this._currentY = 0, this._isActive = !1, b._deactivateInstance(this);
};
b.prototype._createEvent = function(e, n) {
  var r = this._getTrackedTouch(n);
  return {
    // Hammer.js compatibility interface.
    type: e,
    srcEvent: n,
    distance: this.getDistance(),
    deltaX: this.getDeltaX(),
    deltaY: this.getDeltaY(),
    deltaTime: e === b._emitterEvents.start ? 0 : this.getDeltaTime(),
    isFirst: e === b._emitterEvents.start,
    isFinal: e === b._emitterEvents.end || e === b._emitterEvents.cancel,
    pointerType: n.pointerType || (n.touches ? "touch" : "mouse"),
    // Partial Touch API interface.
    identifier: this._pointerId,
    screenX: r.screenX,
    screenY: r.screenY,
    clientX: r.clientX,
    clientY: r.clientY,
    pageX: r.pageX,
    pageY: r.pageY,
    target: r.target
  };
};
b.prototype._emit = function(e, n) {
  this._emitter.emit(e, this._createEvent(e, n));
};
b.prototype._getTrackedTouch = function(e) {
  return this._pointerId === null ? null : b._getTouchById(e, this._pointerId);
};
b.prototype._onStart = function(e) {
  if (!this._isDestroyed && this._pointerId === null && (this._pointerId = b._getEventPointerId(e), this._pointerId !== null)) {
    var n = this._getTrackedTouch(e);
    this._startX = this._currentX = n.clientX, this._startY = this._currentY = n.clientY, this._startTime = Date.now(), this._isActive = !0, this._emit(b._emitterEvents.start, e), this._isActive && b._activateInstance(this);
  }
};
b.prototype._onMove = function(e) {
  var n = this._getTrackedTouch(e);
  n && (this._currentX = n.clientX, this._currentY = n.clientY, this._emit(b._emitterEvents.move, e));
};
b.prototype._onCancel = function(e) {
  this._getTrackedTouch(e) && (this._emit(b._emitterEvents.cancel, e), this._reset());
};
b.prototype._onEnd = function(e) {
  this._getTrackedTouch(e) && (this._emit(b._emitterEvents.end, e), this._reset());
};
b.prototype.isActive = function() {
  return this._isActive;
};
b.prototype.setTouchAction = function(e) {
  this._touchAction = e, rs && (this._cssProps[rs] = "", this._element.style[rs] = e), Rh && (this._element.removeEventListener(b._touchEvents.start, b._preventDefault, !0), (this._element.style[rs] !== e || eS && iS) && this._element.addEventListener(b._touchEvents.start, b._preventDefault, !0));
};
b.prototype.setCssProps = function(e) {
  if (e) {
    var n = this._cssProps, r = this._element, o, u;
    for (o in n)
      r.style[o] = n[o], delete n[o];
    for (o in e)
      if (e[o]) {
        if (o === Oh) {
          this.setTouchAction(e[o]);
          continue;
        }
        u = Hs(r.style, o), u && (n[u] = "", r.style[u] = e[o]);
      }
  }
};
b.prototype.getDeltaX = function() {
  return this._currentX - this._startX;
};
b.prototype.getDeltaY = function() {
  return this._currentY - this._startY;
};
b.prototype.getDistance = function() {
  var e = this.getDeltaX(), n = this.getDeltaY();
  return Math.sqrt(e * e + n * n);
};
b.prototype.getDeltaTime = function() {
  return this._startTime ? Date.now() - this._startTime : 0;
};
b.prototype.on = function(e, n) {
  this._emitter.on(e, n);
};
b.prototype.off = function(e, n) {
  this._emitter.off(e, n);
};
b.prototype.destroy = function() {
  if (!this._isDestroyed) {
    var e = this._element;
    this._edgeHack && this._edgeHack.destroy(), this._reset(), this._emitter.destroy(), e.removeEventListener(b._inputEvents.start, this._onStart, pi), e.removeEventListener("dragstart", b._preventDefault, !1), e.removeEventListener(b._touchEvents.start, b._preventDefault, !0);
    for (var n in this._cssProps)
      e.style[n] = this._cssProps[n], delete this._cssProps[n];
    this._element = null, this._isDestroyed = !0;
  }
};
var rS = 1e3 / 60, sS = (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
  return this.setTimeout(function() {
    e(Date.now());
  }, rS);
}).bind(window);
function Vs(e) {
  this._nextStep = null, this._lanes = [], this._stepQueue = [], this._stepCallbacks = {}, this._step = this._step.bind(this);
  for (var n = 0; n < e; n++)
    this._lanes.push(new Xa());
}
Vs.prototype._step = function(e) {
  var n = this._lanes, r = this._stepQueue, o = this._stepCallbacks, u, f, h, d, v, w;
  for (this._nextStep = null, u = 0; u < n.length; u++) {
    for (d = n[u].queue, v = n[u].callbacks, w = n[u].indices, f = 0; f < d.length; f++)
      h = d[f], h && (r.push(h), o[h] = v[h], delete v[h], delete w[h]);
    d.length = 0;
  }
  for (u = 0; u < r.length; u++)
    h = r[u], o[h] && o[h](e), delete o[h];
  r.length = 0;
};
Vs.prototype.add = function(e, n, r) {
  this._lanes[e].add(n, r), this._nextStep || (this._nextStep = sS(this._step));
};
Vs.prototype.remove = function(e, n) {
  this._lanes[e].remove(n);
};
function Xa() {
  this.queue = [], this.indices = {}, this.callbacks = {};
}
Xa.prototype.add = function(e, n) {
  var r = this.indices[e];
  r !== void 0 && (this.queue[r] = void 0), this.queue.push(e), this.callbacks[e] = n, this.indices[e] = this.queue.length - 1;
};
Xa.prototype.remove = function(e) {
  var n = this.indices[e];
  n !== void 0 && (this.queue[n] = void 0, delete this.callbacks[e], delete this.indices[e]);
};
var Lh = "layoutRead", Ch = "layoutWrite", Nh = "visibilityRead", Ph = "visibilityWrite", Mh = "dragStartRead", Wh = "dragStartWrite", Fh = "dragMoveRead", Hh = "dragMoveWrite", Yh = "dragScrollRead", Vh = "dragScrollWrite", Bh = "dragSortRead", Gh = "placeholderLayoutRead", Xh = "placeholderLayoutWrite", kh = "placeholderResizeWrite", qh = "autoScrollRead", Uh = "autoScrollWrite", $h = "debounceRead", Ht = 0, zh = 1, Yt = 2, rt = new Vs(3);
function oS(e, n, r) {
  rt.add(Ht, Lh + e, n), rt.add(Yt, Ch + e, r);
}
function Kh(e) {
  rt.remove(Ht, Lh + e), rt.remove(Yt, Ch + e);
}
function aS(e, n, r) {
  rt.add(Ht, Nh + e, n), rt.add(Yt, Ph + e, r);
}
function Zh(e) {
  rt.remove(Ht, Nh + e), rt.remove(Yt, Ph + e);
}
function uS(e, n, r) {
  rt.add(Ht, Mh + e, n), rt.add(Yt, Wh + e, r);
}
function Jh(e) {
  rt.remove(Ht, Mh + e), rt.remove(Yt, Wh + e);
}
function lS(e, n, r) {
  rt.add(Ht, Fh + e, n), rt.add(Yt, Hh + e, r);
}
function Qh(e) {
  rt.remove(Ht, Fh + e), rt.remove(Yt, Hh + e);
}
function fS(e, n, r) {
  rt.add(Ht, Yh + e, n), rt.add(Yt, Vh + e, r);
}
function jh(e) {
  rt.remove(Ht, Yh + e), rt.remove(Yt, Vh + e);
}
function Bs(e, n) {
  rt.add(zh, Bh + e, n);
}
function hS(e) {
  rt.remove(zh, Bh + e);
}
function cS(e, n, r) {
  rt.add(Ht, Gh + e, n), rt.add(Yt, Xh + e, r);
}
function tc(e) {
  rt.remove(Ht, Gh + e), rt.remove(Yt, Xh + e);
}
function _S(e, n) {
  rt.add(Yt, kh + e, n);
}
function dS(e) {
  rt.remove(Yt, kh + e);
}
function ec(e, n) {
  rt.add(Ht, qh, e), rt.add(Yt, Uh, n);
}
function pS() {
  rt.remove(Ht, qh), rt.remove(Yt, Uh);
}
function gS(e, n) {
  rt.add(Ht, $h + e, n);
}
function vS(e) {
  rt.remove(Ht, $h + e);
}
var St = 1, Ot = 2, wn = 4, ka = 8, tr = St | ka, er = St | wn, ir = Ot | ka, Ds = Ot | wn, mS = "function";
function j(e) {
  return typeof e === mS;
}
var ss = typeof WeakMap == "function" ? /* @__PURE__ */ new WeakMap() : null;
function Qt(e, n) {
  var r = ss && ss.get(e);
  return r || (r = window.getComputedStyle(e, null), ss && ss.set(e, r)), r.getPropertyValue(n);
}
function ve(e, n) {
  return parseFloat(Qt(e, n)) || 0;
}
var Gi = document.documentElement, yS = document.body, os = { value: 0, offset: 0 };
function ic(e) {
  return e === window || e === Gi || e === yS ? window : e;
}
function nr(e) {
  return e === window ? e.pageXOffset : e.scrollLeft;
}
function rr(e) {
  return e === window ? e.pageYOffset : e.scrollTop;
}
function nc(e) {
  return e === window ? Gi.scrollWidth - Gi.clientWidth : e.scrollWidth - e.clientWidth;
}
function rc(e) {
  return e === window ? Gi.scrollHeight - Gi.clientHeight : e.scrollHeight - e.clientHeight;
}
function sc(e, n) {
  if (n = n || {}, e === window)
    n.width = Gi.clientWidth, n.height = Gi.clientHeight, n.left = 0, n.right = n.width, n.top = 0, n.bottom = n.height;
  else {
    var r = e.getBoundingClientRect(), o = e.clientLeft || ve(e, "border-left-width"), u = e.clientTop || ve(e, "border-top-width");
    n.width = e.clientWidth, n.height = e.clientHeight, n.left = r.left + o, n.right = n.left + n.width, n.top = r.top + u, n.bottom = n.top + n.height;
  }
  return n;
}
function ar(e) {
  return e._drag._getGrid()._settings.dragAutoScroll;
}
function SS(e) {
  e._drag && e._drag._prepareScroll();
}
function wS(e) {
  if (!(!e._drag || !e._isActive)) {
    var n = e._drag;
    n._scrollDiffX = n._scrollDiffY = 0, e._setTranslate(n._left, n._top);
  }
}
function Ra(e, n, r, o) {
  return os.value = Math.min(o / 2, e), os.offset = Math.max(0, r + os.value * 2 + o * n - o) / 2, os;
}
function ti() {
  this.reset();
}
ti.prototype.reset = function() {
  this.isActive && this.onStop(), this.item = null, this.element = null, this.isActive = !1, this.isEnding = !1, this.direction = null, this.value = null, this.maxValue = 0, this.threshold = 0, this.distance = 0, this.speed = 0, this.duration = 0, this.action = null;
};
ti.prototype.hasReachedEnd = function() {
  return wn & this.direction ? this.value >= this.maxValue : this.value <= 0;
};
ti.prototype.computeCurrentScrollValue = function() {
  return this.value === null ? St & this.direction ? nr(this.element) : rr(this.element) : Math.max(0, Math.min(this.value, this.maxValue));
};
ti.prototype.computeNextScrollValue = function(e) {
  var n = this.speed * (e / 1e3), r = wn & this.direction ? this.value + n : this.value - n;
  return Math.max(0, Math.min(r, this.maxValue));
};
ti.prototype.computeSpeed = /* @__PURE__ */ function() {
  var e = {
    direction: null,
    threshold: 0,
    distance: 0,
    value: 0,
    maxValue: 0,
    deltaTime: 0,
    duration: 0,
    isEnding: !1
  };
  return function(n) {
    var r = this.item, o = ar(r).speed;
    return j(o) ? (e.direction = this.direction, e.threshold = this.threshold, e.distance = this.distance, e.value = this.value, e.maxValue = this.maxValue, e.duration = this.duration, e.speed = this.speed, e.deltaTime = n, e.isEnding = this.isEnding, o(r, this.element, e)) : o;
  };
}();
ti.prototype.tick = function(e) {
  return this.isActive || (this.isActive = !0, this.onStart()), this.value = this.computeCurrentScrollValue(), this.speed = this.computeSpeed(e), this.value = this.computeNextScrollValue(e), this.duration += e, this.value;
};
ti.prototype.onStart = function() {
  var e = this.item, n = ar(e).onStart;
  j(n) && n(e, this.element, this.direction);
};
ti.prototype.onStop = function() {
  var e = this.item, n = ar(e).onStop;
  j(n) && n(e, this.element, this.direction), e._drag && e._drag.sort();
};
function En() {
  this.element = null, this.requestX = null, this.requestY = null, this.scrollLeft = 0, this.scrollTop = 0;
}
En.prototype.reset = function() {
  this.requestX && (this.requestX.action = null), this.requestY && (this.requestY.action = null), this.element = null, this.requestX = null, this.requestY = null, this.scrollLeft = 0, this.scrollTop = 0;
};
En.prototype.addRequest = function(e) {
  St & e.direction ? (this.removeRequest(this.requestX), this.requestX = e) : (this.removeRequest(this.requestY), this.requestY = e), e.action = this;
};
En.prototype.removeRequest = function(e) {
  e && (this.requestX === e ? (this.requestX = null, e.action = null) : this.requestY === e && (this.requestY = null, e.action = null));
};
En.prototype.computeScrollValues = function() {
  this.scrollLeft = this.requestX ? this.requestX.value : nr(this.element), this.scrollTop = this.requestY ? this.requestY.value : rr(this.element);
};
En.prototype.scroll = function() {
  var e = this.element;
  e && (e.scrollTo ? e.scrollTo(this.scrollLeft, this.scrollTop) : (e.scrollLeft = this.scrollLeft, e.scrollTop = this.scrollTop));
};
function sr(e, n) {
  this.pool = [], this.createItem = e, this.releaseItem = n;
}
sr.prototype.pick = function() {
  return this.pool.pop() || this.createItem();
};
sr.prototype.release = function(e) {
  this.releaseItem(e), this.pool.indexOf(e) === -1 && this.pool.push(e);
};
sr.prototype.reset = function() {
  this.pool.length = 0;
};
function ES(e, n) {
  return !(e.left + e.width <= n.left || n.left + n.width <= e.left || e.top + e.height <= n.top || n.top + n.height <= e.top);
}
function xS(e, n) {
  if (!ES(e, n))
    return 0;
  var r = Math.min(e.left + e.width, n.left + n.width) - Math.max(e.left, n.left), o = Math.min(e.top + e.height, n.top + n.height) - Math.max(e.top, n.top);
  return r * o;
}
function Rs(e, n) {
  var r = xS(e, n);
  if (!r)
    return 0;
  var o = Math.min(e.width, n.width) * Math.min(e.height, n.height);
  return r / o * 100;
}
var oc = {
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}, ac = {
  width: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};
function st() {
  this._isDestroyed = !1, this._isTicking = !1, this._tickTime = 0, this._tickDeltaTime = 0, this._items = [], this._actions = [], this._requests = {}, this._requests[St] = {}, this._requests[Ot] = {}, this._requestOverlapCheck = {}, this._dragPositions = {}, this._dragDirections = {}, this._overlapCheckInterval = 150, this._requestPool = new sr(
    function() {
      return new ti();
    },
    function(e) {
      e.reset();
    }
  ), this._actionPool = new sr(
    function() {
      return new En();
    },
    function(e) {
      e.reset();
    }
  ), this._readTick = this._readTick.bind(this), this._writeTick = this._writeTick.bind(this);
}
st.AXIS_X = St;
st.AXIS_Y = Ot;
st.FORWARD = wn;
st.BACKWARD = ka;
st.LEFT = tr;
st.RIGHT = er;
st.UP = ir;
st.DOWN = Ds;
st.smoothSpeed = function(e, n, r) {
  return function(o, u, f) {
    var h = 0;
    if (!f.isEnding)
      if (f.threshold > 0) {
        var d = f.threshold - Math.max(0, f.distance);
        h = e / f.threshold * d;
      } else
        h = e;
    var v = f.speed, w = h;
    return v === h ? w : v < h ? (w = v + n * (f.deltaTime / 1e3), Math.min(h, w)) : (w = v - r * (f.deltaTime / 1e3), Math.max(h, w));
  };
};
st.pointerHandle = function(e) {
  var n = { left: 0, top: 0, width: 0, height: 0 }, r = e || 1;
  return function(o, u, f, h, d, v, w) {
    return n.left = v - r * 0.5, n.top = w - r * 0.5, n.width = r, n.height = r, n;
  };
};
st.prototype._readTick = function(e) {
  this._isDestroyed || (e && this._tickTime ? (this._tickDeltaTime = e - this._tickTime, this._tickTime = e, this._updateRequests(), this._updateActions()) : (this._tickTime = e, this._tickDeltaTime = 0));
};
st.prototype._writeTick = function() {
  this._isDestroyed || (this._applyActions(), ec(this._readTick, this._writeTick));
};
st.prototype._startTicking = function() {
  this._isTicking = !0, ec(this._readTick, this._writeTick);
};
st.prototype._stopTicking = function() {
  this._isTicking = !1, this._tickTime = 0, this._tickDeltaTime = 0, pS();
};
st.prototype._getItemHandleRect = function(e, n, r) {
  var o = e._drag;
  if (n) {
    var u = o._dragMoveEvent || o._dragStartEvent, f = n(
      e,
      o._clientX,
      o._clientY,
      e._width,
      e._height,
      u.clientX,
      u.clientY
    );
    r.left = f.left, r.top = f.top, r.width = f.width, r.height = f.height;
  } else
    r.left = o._clientX, r.top = o._clientY, r.width = e._width, r.height = e._height;
  return r.right = r.left + r.width, r.bottom = r.top + r.height, r;
};
st.prototype._requestItemScroll = function(e, n, r, o, u, f, h) {
  var d = this._requests[n], v = d[e._id];
  v ? (v.element !== r || v.direction !== o) && v.reset() : v = this._requestPool.pick(), v.item = e, v.element = r, v.direction = o, v.threshold = u, v.distance = f, v.maxValue = h, d[e._id] = v;
};
st.prototype._cancelItemScroll = function(e, n) {
  var r = this._requests[n], o = r[e._id];
  o && (o.action && o.action.removeRequest(o), this._requestPool.release(o), delete r[e._id]);
};
st.prototype._checkItemOverlap = function(e, n, r) {
  var o = ar(e), u = j(o.targets) ? o.targets(e) : o.targets, f = o.threshold, h = o.safeZone;
  if (!u || !u.length) {
    n && this._cancelItemScroll(e, St), r && this._cancelItemScroll(e, Ot);
    return;
  }
  var d = this._dragDirections[e._id], v = d[0], w = d[1];
  if (!v && !w) {
    n && this._cancelItemScroll(e, St), r && this._cancelItemScroll(e, Ot);
    return;
  }
  for (var x = this._getItemHandleRect(e, o.handle, oc), S = ac, N = null, P = null, F = !0, I = !0, A = 0, M = 0, L = null, W = null, C = 0, G = 0, Y = 0, ot = null, ct = -1 / 0, it = 0, we = 0, Et = null, Bt = 0, Ne = 0, It = null, ki = -1 / 0, fr = 0, Pe = 0, Ee = null, hr = 0, xi = 0, $t = 0; $t < u.length; $t++)
    N = u[$t], F = n && v && N.axis !== Ot, I = r && w && N.axis !== St, M = N.priority || 0, !((!F || M < ct) && (!I || M < ki)) && (P = ic(N.element || N), G = F ? nc(P) : -1, Y = I ? rc(P) : -1, !(!G && !Y) && (S = sc(P, S), A = Rs(x, S), !(A <= 0) && (F && M >= ct && G > 0 && (M > ct || A > we) && (W = null, L = Ra(
      typeof N.threshold == "number" ? N.threshold : f,
      h,
      x.width,
      S.width
    ), v === er ? (C = S.right + L.offset - x.right, C <= L.value && nr(P) < G && (W = er)) : v === tr && (C = x.left - (S.left - L.offset), C <= L.value && nr(P) > 0 && (W = tr)), W !== null && (ot = P, ct = M, it = L.value, we = A, Et = W, Bt = C, Ne = G)), I && M >= ki && Y > 0 && (M > ki || A > Pe) && (W = null, L = Ra(
      typeof N.threshold == "number" ? N.threshold : f,
      h,
      x.height,
      S.height
    ), w === Ds ? (C = S.bottom + L.offset - x.bottom, C <= L.value && rr(P) < Y && (W = Ds)) : w === ir && (C = x.top - (S.top - L.offset), C <= L.value && rr(P) > 0 && (W = ir)), W !== null && (It = P, ki = M, fr = L.value, Pe = A, Ee = W, hr = C, xi = Y)))));
  n && (ot ? this._requestItemScroll(
    e,
    St,
    ot,
    Et,
    it,
    Bt,
    Ne
  ) : this._cancelItemScroll(e, St)), r && (It ? this._requestItemScroll(
    e,
    Ot,
    It,
    Ee,
    fr,
    hr,
    xi
  ) : this._cancelItemScroll(e, Ot));
};
st.prototype._updateScrollRequest = function(e) {
  for (var n = e.item, r = ar(n), o = j(r.targets) ? r.targets(n) : r.targets, u = o && o.length || 0, f = r.threshold, h = r.safeZone, d = this._getItemHandleRect(n, r.handle, oc), v = ac, w = null, x = null, S = !1, N = null, P = null, F = null, I = null, A = null, M = null, L = 0; L < u; L++)
    if (w = o[L], x = ic(w.element || w), x === e.element) {
      if (S = !!(St & e.direction), S) {
        if (w.axis === Ot)
          continue;
      } else if (w.axis === St)
        continue;
      if (A = S ? nc(x) : rc(x), A <= 0 || (v = sc(x, v), N = Rs(d, v), N <= 0) || (P = Ra(
        typeof w.threshold == "number" ? w.threshold : f,
        h,
        S ? d.width : d.height,
        S ? v.width : v.height
      ), e.direction === tr ? F = d.left - (v.left - P.offset) : e.direction === er ? F = v.right + P.offset - d.right : e.direction === ir ? F = d.top - (v.top - P.offset) : F = v.bottom + P.offset - d.bottom, F > P.value) || (I = S ? nr(x) : rr(x), M = wn & e.direction ? I >= A : I <= 0, M))
        break;
      return e.maxValue = A, e.threshold = P.value, e.distance = F, e.isEnding = !1, !0;
    }
  return r.smoothStop === !0 && e.speed > 0 ? (M === null && (M = e.hasReachedEnd()), e.isEnding = !M) : e.isEnding = !1, e.isEnding;
};
st.prototype._updateRequests = function() {
  for (var e = this._items, n = this._requests[St], r = this._requests[Ot], o, u, f, h, d, v, w, x = 0; x < e.length; x++)
    o = e[x], h = this._requestOverlapCheck[o._id], d = h > 0 && this._tickTime - h > this._overlapCheckInterval, v = !0, u = n[o._id], u && u.isActive && (v = !this._updateScrollRequest(u), v && (d = !0, this._cancelItemScroll(o, St))), w = !0, f = r[o._id], f && f.isActive && (w = !this._updateScrollRequest(f), w && (d = !0, this._cancelItemScroll(o, Ot))), d && (this._requestOverlapCheck[o._id] = 0, this._checkItemOverlap(o, v, w));
};
st.prototype._requestAction = function(e, n) {
  for (var r = this._actions, o = n === St, u = null, f = 0; f < r.length; f++) {
    if (u = r[f], e.element !== u.element) {
      u = null;
      continue;
    }
    if (o ? u.requestX : u.requestY) {
      this._cancelItemScroll(e.item, n);
      return;
    }
    break;
  }
  u || (u = this._actionPool.pick()), u.element = e.element, u.addRequest(e), e.tick(this._tickDeltaTime), r.push(u);
};
st.prototype._updateActions = function() {
  var e = this._items, n = this._requests, r = this._actions, o, u, f, h;
  for (h = 0; h < e.length; h++)
    o = e[h]._id, u = n[St][o], f = n[Ot][o], u && this._requestAction(u, St), f && this._requestAction(f, Ot);
  for (h = 0; h < r.length; h++)
    r[h].computeScrollValues();
};
st.prototype._applyActions = function() {
  var e = this._actions, n = this._items, r;
  if (e.length) {
    for (r = 0; r < e.length; r++)
      e[r].scroll(), this._actionPool.release(e[r]);
    for (e.length = 0, r = 0; r < n.length; r++)
      SS(n[r]);
    for (r = 0; r < n.length; r++)
      wS(n[r]);
  }
};
st.prototype._updateDragDirection = function(e) {
  var n = this._dragPositions[e._id], r = this._dragDirections[e._id], o = e._drag._left, u = e._drag._top;
  if (n.length) {
    var f = n[0], h = n[1];
    r[0] = o > f ? er : o < f ? tr : r[0] || 0, r[1] = u > h ? Ds : u < h ? ir : r[1] || 0;
  }
  n[0] = o, n[1] = u;
};
st.prototype.addItem = function(e) {
  if (!this._isDestroyed) {
    var n = this._items.indexOf(e);
    n === -1 && (this._items.push(e), this._requestOverlapCheck[e._id] = this._tickTime, this._dragDirections[e._id] = [0, 0], this._dragPositions[e._id] = [], this._isTicking || this._startTicking());
  }
};
st.prototype.updateItem = function(e) {
  this._isDestroyed || this._dragDirections[e._id] && (this._updateDragDirection(e), this._requestOverlapCheck[e._id] || (this._requestOverlapCheck[e._id] = this._tickTime));
};
st.prototype.removeItem = function(e) {
  if (!this._isDestroyed) {
    var n = this._items.indexOf(e);
    if (n !== -1) {
      var r = e._id, o = this._requests[St][r];
      o && (this._cancelItemScroll(e, St), delete this._requests[St][r]);
      var u = this._requests[Ot][r];
      u && (this._cancelItemScroll(e, Ot), delete this._requests[Ot][r]), delete this._requestOverlapCheck[r], delete this._dragPositions[r], delete this._dragDirections[r], this._items.splice(n, 1), this._isTicking && !this._items.length && this._stopTicking();
    }
  }
};
st.prototype.isItemScrollingX = function(e) {
  var n = this._requests[St][e._id];
  return !!(n && n.isActive);
};
st.prototype.isItemScrollingY = function(e) {
  var n = this._requests[Ot][e._id];
  return !!(n && n.isActive);
};
st.prototype.isItemScrolling = function(e) {
  return this.isItemScrollingX(e) || this.isItemScrollingY(e);
};
st.prototype.destroy = function() {
  if (!this._isDestroyed) {
    for (var e = this._items.slice(0), n = 0; n < e.length; n++)
      this.removeItem(e[n]);
    this._actions.length = 0, this._requestPool.reset(), this._actionPool.reset(), this._isDestroyed = !0;
  }
};
var un = window.Element.prototype, AS = un.matches || un.matchesSelector || un.webkitMatchesSelector || un.mozMatchesSelector || un.msMatchesSelector || un.oMatchesSelector || function() {
  return !1;
};
function Gs(e, n) {
  return AS.call(e, n);
}
function ae(e, n) {
  n && (e.classList ? e.classList.add(n) : Gs(e, "." + n) || (e.className += " " + n));
}
var Kf = [], IS = "number";
function qa(e, n, r) {
  var o = typeof r === IS ? r : -1;
  o < 0 && (o = e.length - o + 1), e.splice.apply(e, Kf.concat(o, 0, n)), Kf.length = 0;
}
function vn(e, n, r) {
  var o = Math.max(0, e.length - 1 + (r || 0));
  return n > o ? o : n < 0 ? Math.max(o + n + 1, 0) : n;
}
function uc(e, n, r) {
  if (!(e.length < 2)) {
    var o = vn(e, n), u = vn(e, r);
    o !== u && e.splice(u, 0, e.splice(o, 1)[0]);
  }
}
function lc(e, n, r) {
  if (!(e.length < 2)) {
    var o = vn(e, n), u = vn(e, r), f;
    o !== u && (f = e[o], e[o] = e[u], e[u] = f);
  }
}
var Ve = Hs(document.documentElement.style, "transform") || "transform", TS = /([A-Z])/g, DS = /^(webkit-|moz-|ms-|o-)/, RS = /^(-m-s-)/;
function ba(e) {
  var n = e.replace(TS, "-$1").toLowerCase();
  return n = n.replace(DS, "-$1"), n = n.replace(RS, "-ms-"), n;
}
var fc = ba(Ve), bS = "none", OS = "inline", LS = "none", CS = "display";
function NS(e) {
  var n = Qt(e, fc);
  if (!n || n === bS)
    return !1;
  var r = Qt(e, CS);
  return !(r === OS || r === LS);
}
function Oa(e) {
  for (var n = document, r = e || n; r && r !== n && Qt(r, "position") === "static" && !NS(r); )
    r = r.parentElement || n;
  return r;
}
var ya = {}, Sa = {}, Ni = {};
function Zf(e, n) {
  var r = n || {}, o;
  return r.left = 0, r.top = 0, e === document || (r.left = window.pageXOffset || 0, r.top = window.pageYOffset || 0, e.self === window.self) || (o = e.getBoundingClientRect(), r.left += o.left, r.top += o.top, r.left += ve(e, "border-left-width"), r.top += ve(e, "border-top-width")), r;
}
function mn(e, n, r) {
  return Ni.left = 0, Ni.top = 0, e === n || r && (e = Oa(e), n = Oa(n), e === n) || (Zf(e, ya), Zf(n, Sa), Ni.left = Sa.left - ya.left, Ni.top = Sa.top - ya.top), Ni;
}
function wa(e) {
  return e === "auto" || e === "scroll" || e === "overlay";
}
function PS(e) {
  return wa(Qt(e, "overflow")) || wa(Qt(e, "overflow-x")) || wa(Qt(e, "overflow-y"));
}
function Jf(e, n) {
  for (n = n || []; e && e !== document; ) {
    if (e.getRootNode && e instanceof DocumentFragment) {
      e = e.getRootNode().host;
      continue;
    }
    PS(e) && n.push(e), e = e.parentNode;
  }
  return n.push(window), n;
}
var ln = {}, MS = "none", WS = /^matrix3d/, FS = /([^,]*,){4}/, HS = /([^,]*,){12}/, YS = /[^,]*,/;
function je(e) {
  ln.x = 0, ln.y = 0;
  var n = Qt(e, fc);
  if (!n || n === MS)
    return ln;
  var r = WS.test(n), o = n.replace(r ? HS : FS, ""), u = o.replace(YS, "");
  return ln.x = parseFloat(o) || 0, ln.y = parseFloat(u) || 0, ln;
}
function Ft(e, n) {
  n && (e.classList ? e.classList.remove(n) : Gs(e, "." + n) && (e.className = (" " + e.className + " ").replace(" " + n + " ", " ").trim()));
}
var VS = /^(iPad|iPhone|iPod)/.test(window.navigator.platform) || /^Mac/.test(window.navigator.platform) && window.navigator.maxTouchPoints > 1, bs = 0, La = 1, Os = 2, hc = bh() ? { passive: !0 } : !1;
function U(e) {
  var n = e._element, r = e.getGrid(), o = r._settings;
  this._item = e, this._gridId = r._id, this._isDestroyed = !1, this._isMigrating = !1, this._startPredicate = j(o.dragStartPredicate) ? o.dragStartPredicate : U.defaultStartPredicate, this._startPredicateState = bs, this._startPredicateResult = void 0, this._isSortNeeded = !1, this._sortTimer = void 0, this._blockedSortIndex = null, this._sortX1 = 0, this._sortX2 = 0, this._sortY1 = 0, this._sortY2 = 0, this._reset(), this._preStartCheck = this._preStartCheck.bind(this), this._preEndCheck = this._preEndCheck.bind(this), this._onScroll = this._onScroll.bind(this), this._prepareStart = this._prepareStart.bind(this), this._applyStart = this._applyStart.bind(this), this._prepareMove = this._prepareMove.bind(this), this._applyMove = this._applyMove.bind(this), this._prepareScroll = this._prepareScroll.bind(this), this._applyScroll = this._applyScroll.bind(this), this._handleSort = this._handleSort.bind(this), this._handleSortDelayed = this._handleSortDelayed.bind(this), this._handle = o.dragHandle && n.querySelector(o.dragHandle) || n, this._dragger = new b(this._handle, o.dragCssProps), this._dragger.on("start", this._preStartCheck), this._dragger.on("move", this._preStartCheck), this._dragger.on("cancel", this._preEndCheck), this._dragger.on("end", this._preEndCheck);
}
U.autoScroller = new st();
U.defaultStartPredicate = function(e, n, r) {
  var o = e._drag;
  if (n.isFirst && n.srcEvent.button || !VS && n.isFirst && n.srcEvent.isTrusted === !0 && n.srcEvent.defaultPrevented === !1 && n.srcEvent.cancelable === !1)
    return !1;
  if (n.isFinal) {
    o._finishStartPredicate(n);
    return;
  }
  var u = o._startPredicateData;
  if (!u) {
    var f = r || o._getGrid()._settings.dragStartPredicate || {};
    o._startPredicateData = u = {
      distance: Math.max(f.distance, 0) || 0,
      delay: Math.max(f.delay, 0) || 0
    };
  }
  return u.delay && (u.event = n, u.delayTimer || (u.delayTimer = window.setTimeout(function() {
    u.delay = 0, o._resolveStartPredicate(u.event) && (o._forceResolveStartPredicate(u.event), o._resetStartPredicate());
  }, u.delay))), o._resolveStartPredicate(n);
};
U.defaultSortPredicate = /* @__PURE__ */ function() {
  var e = {}, n = {}, r = {}, o = [], u = 1, f = 100;
  function h(d, v, w) {
    var x = null, S = v._settings.dragSort, N = -1, P, F, I, A, M, L, W, C, G, Y;
    if (S === !0 ? (o[0] = v, F = o) : j(S) && (F = S.call(v, d)), !F || !Array.isArray(F) || !F.length)
      return x;
    for (Y = 0; Y < F.length; Y++)
      if (I = F[Y], !I._isDestroyed) {
        for (I._updateBoundingRect(), L = Math.max(0, I._left), W = Math.max(0, I._top), C = Math.min(window.innerWidth, I._right), G = Math.min(window.innerHeight, I._bottom), A = I._element.parentNode; A && A !== document && A !== document.documentElement && A !== document.body; ) {
          if (A.getRootNode && A instanceof DocumentFragment) {
            A = A.getRootNode().host;
            continue;
          }
          if (Qt(A, "overflow") !== "visible" && (M = A.getBoundingClientRect(), L = Math.max(L, M.left), W = Math.max(W, M.top), C = Math.min(C, M.right), G = Math.min(G, M.bottom)), Qt(A, "position") === "fixed")
            break;
          A = A.parentNode;
        }
        L >= C || W >= G || (n.left = L, n.top = W, n.width = C - L, n.height = G - W, P = Rs(e, n), P > w && P > N && (N = P, x = I));
      }
    return o.length = 0, x;
  }
  return function(d, v) {
    var w = d._drag, x = w._getGrid(), S = v && typeof v.threshold == "number" ? v.threshold : 50, N = v && v.action === Ye ? Ye : Bi, P = v && v.migrateAction === Ye ? Ye : Bi;
    S = Math.min(Math.max(S, u), f), e.width = d._width, e.height = d._height, e.left = w._clientX, e.top = w._clientY;
    var F = h(d, x, S);
    if (!F)
      return null;
    var I = d.getGrid() !== F, A = 0, M = 0, L = 0, W = -1, C = !1, G, Y, ot;
    for (F === x ? (e.left = w._gridX + d._marginLeft, e.top = w._gridY + d._marginTop) : (F._updateBorders(1, 0, 1, 0), A = F._left + F._borderLeft, M = F._top + F._borderTop), ot = 0; ot < F._items.length; ot++)
      G = F._items[ot], !(!G._isActive || G === d) && (C = !0, n.width = G._width, n.height = G._height, n.left = G._left + G._marginLeft + A, n.top = G._top + G._marginTop + M, Y = Rs(e, n), Y > L && (W = ot, L = Y));
    return I && L < S && (W = C ? W : 0, L = S), L >= S ? (r.grid = F, r.index = W, r.action = I ? P : N, r) : null;
  };
}();
U.prototype.stop = function() {
  if (this._isActive) {
    if (this._isMigrating) {
      this._finishMigration();
      return;
    }
    var e = this._item, n = e._id;
    if (U.autoScroller.removeItem(e), Jh(n), Qh(n), jh(n), this._cancelSort(), this._isStarted) {
      this._unbindScrollListeners();
      var r = e._element, o = this._getGrid(), u = o._settings.itemDraggingClass;
      r.parentNode !== o._element && (o._element.appendChild(r), e._setTranslate(this._gridX, this._gridY), u && r.clientWidth), Ft(r, u);
    }
    this._reset();
  }
};
U.prototype.sort = function(e) {
  var n = this._item;
  this._isActive && n._isActive && this._dragMoveEvent && (e === !0 ? this._handleSort() : Bs(n._id, this._handleSort));
};
U.prototype.destroy = function() {
  this._isDestroyed || (this.stop(), this._dragger.destroy(), U.autoScroller.removeItem(this._item), this._isDestroyed = !0);
};
U.prototype._getGrid = function() {
  return Ws[this._gridId] || null;
};
U.prototype._reset = function() {
  this._isActive = !1, this._isStarted = !1, this._container = null, this._containingBlock = null, this._dragStartEvent = null, this._dragMoveEvent = null, this._dragPrevMoveEvent = null, this._scrollEvent = null, this._scrollers = [], this._left = 0, this._top = 0, this._gridX = 0, this._gridY = 0, this._clientX = 0, this._clientY = 0, this._scrollDiffX = 0, this._scrollDiffY = 0, this._moveDiffX = 0, this._moveDiffY = 0, this._containerDiffX = 0, this._containerDiffY = 0;
};
U.prototype._bindScrollListeners = function() {
  var e = this._getGrid()._element, n = this._container, r = this._scrollers, o, u;
  if (r.length = 0, Jf(this._item._element.parentNode, r), n !== e)
    for (o = [], Jf(e, o), u = 0; u < o.length; u++)
      r.indexOf(o[u]) < 0 && r.push(o[u]);
  for (u = 0; u < r.length; u++)
    r[u].addEventListener("scroll", this._onScroll, hc);
};
U.prototype._unbindScrollListeners = function() {
  var e = this._scrollers, n;
  for (n = 0; n < e.length; n++)
    e[n].removeEventListener("scroll", this._onScroll, hc);
  e.length = 0;
};
U.prototype._resolveStartPredicate = function(e) {
  var n = this._startPredicateData;
  if (!(e.distance < n.distance || n.delay))
    return this._resetStartPredicate(), !0;
};
U.prototype._forceResolveStartPredicate = function(e) {
  !this._isDestroyed && this._startPredicateState === La && (this._startPredicateState = Os, this._onStart(e));
};
U.prototype._finishStartPredicate = function(e) {
  var n = this._item._element, r = Math.abs(e.deltaX) < 2 && Math.abs(e.deltaY) < 2 && e.deltaTime < 200;
  this._resetStartPredicate(), r && BS(n);
};
U.prototype._resetHeuristics = function(e, n) {
  this._blockedSortIndex = null, this._sortX1 = this._sortX2 = e, this._sortY1 = this._sortY2 = n;
};
U.prototype._checkHeuristics = function(e, n) {
  var r = this._getGrid()._settings.dragSortHeuristics, o = r.minDragDistance;
  if (o <= 0)
    return this._blockedSortIndex = null, !0;
  var u = e - this._sortX2, f = n - this._sortY2, h = o > 3 && r.minBounceBackAngle > 0;
  if (h || (this._blockedSortIndex = null), Math.abs(u) > o || Math.abs(f) > o) {
    if (h) {
      var d = Math.atan2(u, f), v = Math.atan2(this._sortX2 - this._sortX1, this._sortY2 - this._sortY1), w = Math.atan2(Math.sin(d - v), Math.cos(d - v));
      Math.abs(w) > r.minBounceBackAngle && (this._blockedSortIndex = null);
    }
    return this._sortX1 = this._sortX2, this._sortY1 = this._sortY2, this._sortX2 = e, this._sortY2 = n, !0;
  }
  return !1;
};
U.prototype._resetStartPredicate = function() {
  var e = this._startPredicateData;
  e && (e.delayTimer && (e.delayTimer = window.clearTimeout(e.delayTimer)), this._startPredicateData = null);
};
U.prototype._handleSort = function() {
  if (this._isActive) {
    var e = this._getGrid()._settings;
    if (!e.dragSort || !e.dragAutoScroll.sortDuringScroll && U.autoScroller.isItemScrolling(this._item)) {
      this._sortX1 = this._sortX2 = this._gridX, this._sortY1 = this._sortY2 = this._gridY, this._isSortNeeded = !0, this._sortTimer !== void 0 && (this._sortTimer = window.clearTimeout(this._sortTimer));
      return;
    }
    var n = this._checkHeuristics(this._gridX, this._gridY);
    if (!(!this._isSortNeeded && !n)) {
      var r = e.dragSortHeuristics.sortInterval;
      r <= 0 || this._isSortNeeded ? (this._isSortNeeded = !1, this._sortTimer !== void 0 && (this._sortTimer = window.clearTimeout(this._sortTimer)), this._checkOverlap()) : this._sortTimer === void 0 && (this._sortTimer = window.setTimeout(this._handleSortDelayed, r));
    }
  }
};
U.prototype._handleSortDelayed = function() {
  this._isSortNeeded = !0, this._sortTimer = void 0, Bs(this._item._id, this._handleSort);
};
U.prototype._cancelSort = function() {
  this._isSortNeeded = !1, this._sortTimer !== void 0 && (this._sortTimer = window.clearTimeout(this._sortTimer)), hS(this._item._id);
};
U.prototype._finishSort = function() {
  var e = this._getGrid()._settings.dragSort, n = e && (this._isSortNeeded || this._sortTimer !== void 0);
  this._cancelSort(), n && this._checkOverlap();
};
U.prototype._checkOverlap = function() {
  if (this._isActive) {
    var e = this._item, n = this._getGrid()._settings, r, o, u, f, h, d, v, w;
    j(n.dragSortPredicate) ? r = n.dragSortPredicate(e, this._dragMoveEvent) : r = U.defaultSortPredicate(e, n.dragSortPredicate), !(!r || typeof r.index != "number") && (v = r.action === Ye ? Ye : Bi, o = e.getGrid(), f = r.grid || o, w = o !== f, u = o._items.indexOf(e), h = vn(
      f._items,
      r.index,
      w && v === Bi ? 1 : 0
    ), !(!w && h === this._blockedSortIndex) && (w ? (this._blockedSortIndex = null, d = f._items[h], o._hasListeners(yi) && o._emit(yi, {
      item: e,
      fromGrid: o,
      fromIndex: u,
      toGrid: f,
      toIndex: h
    }), f._hasListeners(Ts) && f._emit(Ts, {
      item: e,
      fromGrid: o,
      fromIndex: u,
      toGrid: f,
      toIndex: h
    }), e._gridId = f._id, this._isMigrating = e._gridId !== this._gridId, o._items.splice(u, 1), qa(f._items, e, h), e._sortData = null, o._hasListeners(As) && o._emit(As, {
      item: e,
      fromGrid: o,
      fromIndex: u,
      toGrid: f,
      toIndex: h
    }), f._hasListeners(Is) && f._emit(Is, {
      item: e,
      fromGrid: o,
      fromIndex: u,
      toGrid: f,
      toIndex: h
    }), v === Ye && d && d.isActive() && f._items.indexOf(d) > -1 && f.send(d, o, u, {
      appendTo: this._container || document.body,
      layoutSender: !1,
      layoutReceiver: !1
    }), o.layout(), f.layout()) : u !== h && (this._blockedSortIndex = u, (v === Ye ? lc : uc)(
      o._items,
      u,
      h
    ), o._hasListeners(xs) && o._emit(xs, {
      item: e,
      fromIndex: u,
      toIndex: h,
      action: v
    }), o.layout())));
  }
};
U.prototype._finishMigration = function() {
  var e = this._item, n = e._dragRelease, r = e._element, o = e._isActive, u = e.getGrid(), f = u._element, h = u._settings, d = h.dragContainer || f, v = this._getGrid()._settings, w = r.parentNode, x = o ? v.itemVisibleClass : v.itemHiddenClass, S = o ? h.itemVisibleClass : h.itemHiddenClass, N, P;
  this._isMigrating = !1, this.destroy(), v.itemClass !== h.itemClass && (Ft(r, v.itemClass), ae(r, h.itemClass)), x !== S && (Ft(r, x), ae(r, S)), d !== w && (d.appendChild(r), P = mn(w, d, !0), N = je(r), N.x -= P.left, N.y -= P.top), e._refreshDimensions(), P = mn(d, f, !0), n._containerDiffX = P.left, n._containerDiffY = P.top, e._drag = h.dragEnabled ? new U(e) : null, d !== w && e._setTranslate(N.x, N.y), e._visibility.setStyles(o ? h.visibleStyles : h.hiddenStyles), n.start();
};
U.prototype._preStartCheck = function(e) {
  this._startPredicateState === bs && (this._startPredicateState = La), this._startPredicateState === La ? (this._startPredicateResult = this._startPredicate(this._item, e), this._startPredicateResult === !0 ? (this._startPredicateState = Os, this._onStart(e)) : this._startPredicateResult === !1 && (this._resetStartPredicate(e), this._dragger._reset(), this._startPredicateState = bs)) : this._startPredicateState === Os && this._isActive && this._onMove(e);
};
U.prototype._preEndCheck = function(e) {
  var n = this._startPredicateState === Os;
  this._startPredicate(this._item, e), this._startPredicateState = bs, !(!n || !this._isActive) && (this._isStarted ? this._onEnd(e) : this.stop());
};
U.prototype._onStart = function(e) {
  var n = this._item;
  n._isActive && (this._isActive = !0, this._dragStartEvent = e, U.autoScroller.addItem(n), uS(n._id, this._prepareStart, this._applyStart));
};
U.prototype._prepareStart = function() {
  if (this._isActive) {
    var e = this._item;
    if (e._isActive) {
      var n = e._element, r = this._getGrid(), o = r._settings, u = r._element, f = o.dragContainer || u, h = Oa(f), d = je(n), v = n.getBoundingClientRect(), w = f !== u;
      if (this._container = f, this._containingBlock = h, this._clientX = v.left, this._clientY = v.top, this._left = this._gridX = d.x, this._top = this._gridY = d.y, this._scrollDiffX = this._scrollDiffY = 0, this._moveDiffX = this._moveDiffY = 0, this._resetHeuristics(this._gridX, this._gridY), w) {
        var x = mn(h, u);
        this._containerDiffX = x.left, this._containerDiffY = x.top;
      }
    }
  }
};
U.prototype._applyStart = function() {
  if (this._isActive) {
    var e = this._item;
    if (e._isActive) {
      var n = this._getGrid(), r = e._element, o = e._dragRelease, u = e._migrate, f = this._container !== n._element;
      e.isPositioning() && e._layout.stop(!0, this._left, this._top), u._isActive && (this._left -= u._containerDiffX, this._top -= u._containerDiffY, this._gridX -= u._containerDiffX, this._gridY -= u._containerDiffY, u.stop(!0, this._left, this._top)), e.isReleasing() && o._reset(), n._settings.dragPlaceholder.enabled && e._dragPlaceholder.create(), this._isStarted = !0, n._emit(ky, e, this._dragStartEvent), f && (r.parentNode === this._container ? (this._gridX -= this._containerDiffX, this._gridY -= this._containerDiffY) : (this._left += this._containerDiffX, this._top += this._containerDiffY, this._container.appendChild(r), e._setTranslate(this._left, this._top))), ae(r, n._settings.itemDraggingClass), this._bindScrollListeners(), n._emit(qy, e, this._dragStartEvent);
    }
  }
};
U.prototype._onMove = function(e) {
  var n = this._item;
  if (!n._isActive) {
    this.stop();
    return;
  }
  this._dragMoveEvent = e, lS(n._id, this._prepareMove, this._applyMove), Bs(n._id, this._handleSort);
};
U.prototype._prepareMove = function() {
  if (this._isActive) {
    var e = this._item;
    if (e._isActive) {
      var n = this._getGrid()._settings, r = n.dragAxis, o = this._dragMoveEvent, u = this._dragPrevMoveEvent || this._dragStartEvent || o;
      if (r !== "y") {
        var f = o.clientX - u.clientX;
        this._left = this._left - this._moveDiffX + f, this._gridX = this._gridX - this._moveDiffX + f, this._clientX = this._clientX - this._moveDiffX + f, this._moveDiffX = f;
      }
      if (r !== "x") {
        var h = o.clientY - u.clientY;
        this._top = this._top - this._moveDiffY + h, this._gridY = this._gridY - this._moveDiffY + h, this._clientY = this._clientY - this._moveDiffY + h, this._moveDiffY = h;
      }
      this._dragPrevMoveEvent = o;
    }
  }
};
U.prototype._applyMove = function() {
  if (this._isActive) {
    var e = this._item;
    e._isActive && (this._moveDiffX = this._moveDiffY = 0, e._setTranslate(this._left, this._top), this._getGrid()._emit(Uy, e, this._dragMoveEvent), U.autoScroller.updateItem(e));
  }
};
U.prototype._onScroll = function(e) {
  var n = this._item;
  if (!n._isActive) {
    this.stop();
    return;
  }
  this._scrollEvent = e, fS(n._id, this._prepareScroll, this._applyScroll), Bs(n._id, this._handleSort);
};
U.prototype._prepareScroll = function() {
  if (this._isActive) {
    var e = this._item;
    if (e._isActive) {
      var n = e._element, r = this._getGrid(), o = r._element, u = n.getBoundingClientRect();
      if (this._container !== o) {
        var f = mn(this._containingBlock, o);
        this._containerDiffX = f.left, this._containerDiffY = f.top;
      }
      var h = this._clientX - this._moveDiffX - u.left;
      this._left = this._left - this._scrollDiffX + h, this._scrollDiffX = h;
      var d = this._clientY - this._moveDiffY - u.top;
      this._top = this._top - this._scrollDiffY + d, this._scrollDiffY = d, this._gridX = this._left - this._containerDiffX, this._gridY = this._top - this._containerDiffY;
    }
  }
};
U.prototype._applyScroll = function() {
  if (this._isActive) {
    var e = this._item;
    e._isActive && (this._scrollDiffX = this._scrollDiffY = 0, e._setTranslate(this._left, this._top), this._getGrid()._emit($y, e, this._scrollEvent));
  }
};
U.prototype._onEnd = function(e) {
  var n = this._item, r = n._element, o = this._getGrid(), u = o._settings, f = n._dragRelease;
  if (!n._isActive) {
    this.stop();
    return;
  }
  Jh(n._id), Qh(n._id), jh(n._id), this._finishSort(), this._unbindScrollListeners(), f._containerDiffX = this._containerDiffX, f._containerDiffY = this._containerDiffY, this._reset(), Ft(r, u.itemDraggingClass), U.autoScroller.removeItem(n), o._emit(zy, n, e), this._isMigrating ? this._finishMigration() : f.start();
};
function BS(e) {
  if (e.tagName.toLowerCase() === "a") {
    var n = e.getAttribute("href");
    if (n) {
      var r = e.getAttribute("target");
      r && r !== "_self" ? window.open(n, r) : window.location.href = n;
    }
  }
}
function cc(e, n) {
  var r = {}, o, u;
  if (Array.isArray(n))
    for (u = 0; u < n.length; u++)
      o = n[u], r[o] = Qt(e, ba(o));
  else
    for (o in n)
      r[o] = Qt(e, ba(o));
  return r;
}
var GS = /^(webkit|moz|ms|o|Webkit|Moz|MS|O)(?=[A-Z])/, Qf = {};
function XS(e) {
  var n = Qf[e];
  return n || (n = e.replace(GS, ""), n !== e && (n = n[0].toLowerCase() + n.slice(1)), Qf[e] = n, n);
}
var kS = "[native code]";
function qS(e) {
  var n = window.Symbol;
  return !!(e && j(n) && j(n.toString) && n(e).toString().indexOf(kS) > -1);
}
function yn(e, n) {
  for (var r in n)
    e.style[r] = n[r];
}
var US = !!(Element && j(Element.prototype.animate)), jf = !!(Element && qS(Element.prototype.animate));
function Be(e) {
  this._element = e, this._animation = null, this._duration = 0, this._easing = "", this._callback = null, this._props = [], this._values = [], this._isDestroyed = !1, this._onFinish = this._onFinish.bind(this);
}
Be.prototype.start = function(e, n, r) {
  if (!this._isDestroyed) {
    var o = this._element, u = r || {};
    if (!US) {
      yn(o, n), this._callback = j(u.onFinish) ? u.onFinish : null, this._onFinish();
      return;
    }
    var f = this._animation, h = this._props, d = this._values, v = u.duration || 300, w = u.easing || "ease", x = !1, S, N, P;
    if (f && (N = 0, (v !== this._duration || w !== this._easing) && (x = !0), !x)) {
      for (S in n)
        if (++N, P = h.indexOf(S), P === -1 || n[S] !== d[P]) {
          x = !0;
          break;
        }
      N !== h.length && (x = !0);
    }
    if (x && f.cancel(), this._callback = j(u.onFinish) ? u.onFinish : null, !(f && !x)) {
      h.length = d.length = 0;
      for (S in n)
        h.push(S), d.push(n[S]);
      this._duration = v, this._easing = w, this._animation = o.animate(
        [
          th(e, jf),
          th(n, jf)
        ],
        {
          duration: v,
          easing: w
        }
      ), this._animation.onfinish = this._onFinish, yn(o, n);
    }
  }
};
Be.prototype.stop = function() {
  this._isDestroyed || !this._animation || (this._animation.cancel(), this._animation = this._callback = null, this._props.length = this._values.length = 0);
};
Be.prototype.getCurrentStyles = function() {
  return cc(element, currentProps);
};
Be.prototype.isAnimating = function() {
  return !!this._animation;
};
Be.prototype.destroy = function() {
  this._isDestroyed || (this.stop(), this._element = null, this._isDestroyed = !0);
};
Be.prototype._onFinish = function() {
  var e = this._callback;
  this._animation = this._callback = null, this._props.length = this._values.length = 0, e && e();
};
function th(e, n) {
  var r = {};
  for (var o in e)
    r[n ? o : XS(o)] = e[o];
  return r;
}
function gi(e, n) {
  return "translateX(" + e + "px) translateY(" + n + "px)";
}
function Vt(e) {
  this._item = e, this._animation = new Be(), this._element = null, this._className = "", this._didMigrate = !1, this._resetAfterLayout = !1, this._left = 0, this._top = 0, this._transX = 0, this._transY = 0, this._nextTransX = 0, this._nextTransY = 0, this._setupAnimation = this._setupAnimation.bind(this), this._startAnimation = this._startAnimation.bind(this), this._updateDimensions = this._updateDimensions.bind(this), this._onLayoutStart = this._onLayoutStart.bind(this), this._onLayoutEnd = this._onLayoutEnd.bind(this), this._onReleaseEnd = this._onReleaseEnd.bind(this), this._onMigrate = this._onMigrate.bind(this), this._onHide = this._onHide.bind(this);
}
Vt.prototype._updateDimensions = function() {
  this.isActive() && yn(this._element, {
    width: this._item._width + "px",
    height: this._item._height + "px"
  });
};
Vt.prototype._onLayoutStart = function(e, n) {
  var r = this._item;
  if (e.indexOf(r) === -1) {
    this.reset();
    return;
  }
  var o = r._left, u = r._top, f = this._left, h = this._top;
  if (this._left = o, this._top = u, !(!n && !this._didMigrate && f === o && h === u)) {
    var d = o + r._marginLeft, v = u + r._marginTop, w = r.getGrid(), x = !n && w._settings.layoutDuration > 0;
    if (!x || this._didMigrate) {
      tc(r._id), this._element.style[Ve] = gi(d, v), this._animation.stop(), this._didMigrate && (w.getElement().appendChild(this._element), this._didMigrate = !1);
      return;
    }
    this._nextTransX = d, this._nextTransY = v, cS(r._id, this._setupAnimation, this._startAnimation);
  }
};
Vt.prototype._setupAnimation = function() {
  if (this.isActive()) {
    var e = je(this._element);
    this._transX = e.x, this._transY = e.y;
  }
};
Vt.prototype._startAnimation = function() {
  if (this.isActive()) {
    var e = this._animation, n = this._transX, r = this._transY, o = this._nextTransX, u = this._nextTransY;
    if (n === o && r === u) {
      e.isAnimating() && (this._element.style[Ve] = gi(o, u), e.stop());
      return;
    }
    var f = this._item.getGrid()._settings, h = {}, d = {};
    h[Ve] = gi(n, r), d[Ve] = gi(o, u), e.start(h, d, {
      duration: f.layoutDuration,
      easing: f.layoutEasing,
      onFinish: this._onLayoutEnd
    });
  }
};
Vt.prototype._onLayoutEnd = function() {
  this._resetAfterLayout && this.reset();
};
Vt.prototype._onReleaseEnd = function(e) {
  if (e._id === this._item._id) {
    if (!this._animation.isAnimating()) {
      this.reset();
      return;
    }
    this._resetAfterLayout = !0;
  }
};
Vt.prototype._onMigrate = function(e) {
  if (e.item === this._item) {
    var n = this._item.getGrid(), r = e.toGrid;
    n.off(jn, this._onReleaseEnd), n.off(mi, this._onLayoutStart), n.off(yi, this._onMigrate), n.off(Qn, this._onHide), r.on(jn, this._onReleaseEnd), r.on(mi, this._onLayoutStart), r.on(yi, this._onMigrate), r.on(Qn, this._onHide), this._didMigrate = !0;
  }
};
Vt.prototype._onHide = function(e) {
  e.indexOf(this._item) > -1 && this.reset();
};
Vt.prototype.create = function() {
  if (this.isActive()) {
    this._resetAfterLayout = !1;
    return;
  }
  var e = this._item, n = e.getGrid(), r = n._settings, o = this._animation;
  this._left = e._left, this._top = e._top;
  var u;
  j(r.dragPlaceholder.createElement) ? u = r.dragPlaceholder.createElement(e) : u = document.createElement("div"), this._element = u, o._element = u, this._className = r.itemPlaceholderClass || "", this._className && ae(u, this._className), yn(u, {
    position: "absolute",
    left: "0px",
    top: "0px",
    width: e._width + "px",
    height: e._height + "px"
  }), u.style[Ve] = gi(
    e._left + e._marginLeft,
    e._top + e._marginTop
  ), n.on(mi, this._onLayoutStart), n.on(jn, this._onReleaseEnd), n.on(yi, this._onMigrate), n.on(Qn, this._onHide), j(r.dragPlaceholder.onCreate) && r.dragPlaceholder.onCreate(e, u), n.getElement().appendChild(u);
};
Vt.prototype.reset = function() {
  if (this.isActive()) {
    var e = this._element, n = this._item, r = n.getGrid(), o = r._settings, u = this._animation;
    this._resetAfterLayout = !1, tc(n._id), dS(n._id), u.stop(), u._element = null, r.off(jn, this._onReleaseEnd), r.off(mi, this._onLayoutStart), r.off(yi, this._onMigrate), r.off(Qn, this._onHide), this._className && (Ft(e, this._className), this._className = ""), e.parentNode.removeChild(e), this._element = null, j(o.dragPlaceholder.onRemove) && o.dragPlaceholder.onRemove(n, e);
  }
};
Vt.prototype.isActive = function() {
  return !!this._element;
};
Vt.prototype.getElement = function() {
  return this._element;
};
Vt.prototype.updateDimensions = function() {
  this.isActive() && _S(this._item._id, this._updateDimensions);
};
Vt.prototype.destroy = function() {
  this.reset(), this._animation.destroy(), this._item = this._animation = null;
};
function Ei(e) {
  this._item = e, this._isActive = !1, this._isDestroyed = !1, this._isPositioningStarted = !1, this._containerDiffX = 0, this._containerDiffY = 0;
}
Ei.prototype.start = function() {
  if (!(this._isDestroyed || this._isActive)) {
    var e = this._item, n = e.getGrid(), r = n._settings;
    this._isActive = !0, ae(e._element, r.itemReleasingClass), r.dragRelease.useDragContainer || this._placeToGrid(), n._emit(Ky, e), n._nextLayoutData || e._layout.start(!1);
  }
};
Ei.prototype.stop = function(e, n, r) {
  if (!(this._isDestroyed || !this._isActive)) {
    var o = this._item, u = o.getGrid();
    !e && (n === void 0 || r === void 0) && (n = o._left, r = o._top);
    var f = this._placeToGrid(n, r);
    this._reset(f), e || u._emit(jn, o);
  }
};
Ei.prototype.isJustReleased = function() {
  return this._isActive && this._isPositioningStarted === !1;
};
Ei.prototype.destroy = function() {
  this._isDestroyed || (this.stop(!0), this._item = null, this._isDestroyed = !0);
};
Ei.prototype._placeToGrid = function(e, n) {
  if (!this._isDestroyed) {
    var r = this._item, o = r._element, u = r.getGrid()._element, f = !1;
    if (o.parentNode !== u) {
      if (e === void 0 || n === void 0) {
        var h = je(o);
        e = h.x - this._containerDiffX, n = h.y - this._containerDiffY;
      }
      u.appendChild(o), r._setTranslate(e, n), f = !0;
    }
    return this._containerDiffX = 0, this._containerDiffY = 0, f;
  }
};
Ei.prototype._reset = function(e) {
  if (!this._isDestroyed) {
    var n = this._item, r = n.getGrid()._settings.itemReleasingClass;
    this._isActive = !1, this._isPositioningStarted = !1, this._containerDiffX = 0, this._containerDiffY = 0, r && (e && n._element.clientWidth, Ft(n._element, r));
  }
};
var eh = 2;
function ei(e) {
  var n = e._element, r = n.style;
  this._item = e, this._isActive = !1, this._isDestroyed = !1, this._isInterrupted = !1, this._currentStyles = {}, this._targetStyles = {}, this._nextLeft = 0, this._nextTop = 0, this._offsetLeft = 0, this._offsetTop = 0, this._skipNextAnimation = !1, this._animOptions = {
    onFinish: this._finish.bind(this),
    duration: 0,
    easing: 0
  }, r.left = "0px", r.top = "0px", e._setTranslate(0, 0), this._animation = new Be(n), this._queue = "layout-" + e._id, this._setupAnimation = this._setupAnimation.bind(this), this._startAnimation = this._startAnimation.bind(this);
}
ei.prototype.start = function(e, n) {
  if (!this._isDestroyed) {
    var r = this._item, o = r._dragRelease, u = r.getGrid()._settings, f = this._isActive, h = o.isJustReleased(), d = h ? u.dragRelease.duration : u.layoutDuration, v = h ? u.dragRelease.easing : u.layoutEasing, w = !e && !this._skipNextAnimation && d > 0;
    if (f && (Kh(r._id), r._emitter.burst(this._queue, !0, r)), h && (o._isPositioningStarted = !0), j(n) && r._emitter.on(this._queue, n), this._skipNextAnimation = !1, !w) {
      this._updateOffsets(), r._setTranslate(this._nextLeft, this._nextTop), this._animation.stop(), this._finish();
      return;
    }
    this._animation.isAnimating() && (this._animation._animation.onfinish = null), this._isActive = !0, this._animOptions.easing = v, this._animOptions.duration = d, this._isInterrupted = f, oS(r._id, this._setupAnimation, this._startAnimation);
  }
};
ei.prototype.stop = function(e, n, r) {
  if (!(this._isDestroyed || !this._isActive)) {
    var o = this._item;
    if (Kh(o._id), this._animation.isAnimating()) {
      if (n === void 0 || r === void 0) {
        var u = je(o._element);
        n = u.x, r = u.y;
      }
      o._setTranslate(n, r), this._animation.stop();
    }
    Ft(o._element, o.getGrid()._settings.itemPositioningClass), this._isActive = !1, e && o._emitter.burst(this._queue, !0, o);
  }
};
ei.prototype.destroy = function() {
  if (!this._isDestroyed) {
    var e = this._item._element.style;
    this.stop(!0, 0, 0), this._item._emitter.clear(this._queue), this._animation.destroy(), e[Ve] = "", e.left = "", e.top = "", this._item = null, this._currentStyles = null, this._targetStyles = null, this._animOptions = null, this._isDestroyed = !0;
  }
};
ei.prototype._updateOffsets = function() {
  if (!this._isDestroyed) {
    var e = this._item, n = e._migrate, r = e._dragRelease;
    this._offsetLeft = r._isActive ? r._containerDiffX : n._isActive ? n._containerDiffX : 0, this._offsetTop = r._isActive ? r._containerDiffY : n._isActive ? n._containerDiffY : 0, this._nextLeft = this._item._left + this._offsetLeft, this._nextTop = this._item._top + this._offsetTop;
  }
};
ei.prototype._finish = function() {
  if (!this._isDestroyed) {
    var e = this._item, n = e._migrate, r = e._dragRelease;
    e._tX = this._nextLeft, e._tY = this._nextTop, this._isActive && (this._isActive = !1, Ft(e._element, e.getGrid()._settings.itemPositioningClass)), r._isActive && r.stop(), n._isActive && n.stop(), e._emitter.burst(this._queue, !1, e);
  }
};
ei.prototype._setupAnimation = function() {
  var e = this._item;
  if (e._tX === void 0 || e._tY === void 0) {
    var n = je(e._element);
    e._tX = n.x, e._tY = n.y;
  }
};
ei.prototype._startAnimation = function() {
  var e = this._item, n = e.getGrid()._settings, r = this._animOptions.duration <= 0;
  this._updateOffsets();
  var o = Math.abs(e._left - (e._tX - this._offsetLeft)), u = Math.abs(e._top - (e._tY - this._offsetTop));
  if (r || o < eh && u < eh) {
    (o || u || this._isInterrupted) && e._setTranslate(this._nextLeft, this._nextTop), this._animation.stop(), this._finish();
    return;
  }
  this._isInterrupted || ae(e._element, n.itemPositioningClass), this._currentStyles[Ve] = gi(e._tX, e._tY), this._targetStyles[Ve] = gi(this._nextLeft, this._nextTop), e._tX = e._tY = void 0, this._animation.start(this._currentStyles, this._targetStyles, this._animOptions);
};
function ur(e) {
  this._item = e, this._isActive = !1, this._isDestroyed = !1, this._container = !1, this._containerDiffX = 0, this._containerDiffY = 0;
}
ur.prototype.start = function(e, n, r) {
  if (!this._isDestroyed) {
    var o = this._item, u = o._element, f = o.isActive(), h = o.isVisible(), d = o.getGrid(), v = d._settings, w = e._settings, x = e._element, S = e._items, N = d._items.indexOf(o), P = r || document.body, F, I, A, M, L, W, C, G, Y, ot;
    if (typeof n == "number")
      F = vn(S, n, 1);
    else {
      if (I = e.getItem(n), !I)
        return;
      F = S.indexOf(I);
    }
    (o.isPositioning() || this._isActive || o.isReleasing()) && (W = je(u), C = W.x, G = W.y), o.isPositioning() && o._layout.stop(!0, C, G), this._isActive && (C -= this._containerDiffX, G -= this._containerDiffY, this.stop(!0, C, G)), o.isReleasing() && (C -= o._dragRelease._containerDiffX, G -= o._dragRelease._containerDiffY, o._dragRelease.stop(!0, C, G)), o._visibility.stop(!0), o._drag && o._drag.destroy(), d._hasListeners(yi) && d._emit(yi, {
      item: o,
      fromGrid: d,
      fromIndex: N,
      toGrid: e,
      toIndex: F
    }), e._hasListeners(Ts) && e._emit(Ts, {
      item: o,
      fromGrid: d,
      fromIndex: N,
      toGrid: e,
      toIndex: F
    }), v.itemClass !== w.itemClass && (Ft(u, v.itemClass), ae(u, w.itemClass)), Y = h ? v.itemVisibleClass : v.itemHiddenClass, ot = h ? w.itemVisibleClass : w.itemHiddenClass, Y !== ot && (Ft(u, Y), ae(u, ot)), d._items.splice(N, 1), qa(S, o, F), o._gridId = e._id, f ? (A = u.parentNode, P !== A && (P.appendChild(u), M = mn(P, A, !0), W || (W = je(u), C = W.x, G = W.y), o._setTranslate(C + M.left, G + M.top))) : x.appendChild(u), o._visibility.setStyles(
      h ? w.visibleStyles : w.hiddenStyles
    ), f && (L = mn(P, x, !0)), o._refreshDimensions(), o._sortData = null, o._drag = w.dragEnabled ? new U(o) : null, f ? (this._isActive = !0, this._container = P, this._containerDiffX = L.left, this._containerDiffY = L.top) : (this._isActive = !1, this._container = null, this._containerDiffX = 0, this._containerDiffY = 0), d._hasListeners(As) && d._emit(As, {
      item: o,
      fromGrid: d,
      fromIndex: N,
      toGrid: e,
      toIndex: F
    }), e._hasListeners(Is) && e._emit(Is, {
      item: o,
      fromGrid: d,
      fromIndex: N,
      toGrid: e,
      toIndex: F
    });
  }
};
ur.prototype.stop = function(e, n, r) {
  if (!(this._isDestroyed || !this._isActive)) {
    var o = this._item, u = o._element, f = o.getGrid(), h = f._element, d;
    this._container !== h && ((n === void 0 || r === void 0) && (e ? (d = je(u), n = d.x - this._containerDiffX, r = d.y - this._containerDiffY) : (n = o._left, r = o._top)), h.appendChild(u), o._setTranslate(n, r)), this._isActive = !1, this._container = null, this._containerDiffX = 0, this._containerDiffY = 0;
  }
};
ur.prototype.destroy = function() {
  this._isDestroyed || (this.stop(!0), this._item = null, this._isDestroyed = !0);
};
function Le(e) {
  var n = e._isActive, r = e._element, o = r.children[0], u = e.getGrid()._settings;
  if (!o)
    throw new Error("No valid child element found within item element.");
  this._item = e, this._isDestroyed = !1, this._isHidden = !n, this._isHiding = !1, this._isShowing = !1, this._childElement = o, this._currentStyleProps = [], this._animation = new Be(o), this._queue = "visibility-" + e._id, this._finishShow = this._finishShow.bind(this), this._finishHide = this._finishHide.bind(this), r.style.display = n ? "" : "none", ae(r, n ? u.itemVisibleClass : u.itemHiddenClass), this.setStyles(n ? u.visibleStyles : u.hiddenStyles);
}
Le.prototype.show = function(e, n) {
  if (!this._isDestroyed) {
    var r = this._item, o = r._element, u = j(n) ? n : null, f = r.getGrid(), h = f._settings;
    if (!this._isShowing && !this._isHidden) {
      u && u(!1, r);
      return;
    }
    if (this._isShowing && !e) {
      u && r._emitter.on(this._queue, u);
      return;
    }
    this._isShowing || (r._emitter.burst(this._queue, !0, r), Ft(o, h.itemHiddenClass), ae(o, h.itemVisibleClass), this._isHiding || (o.style.display = "")), u && r._emitter.on(this._queue, u), this._isShowing = !0, this._isHiding = this._isHidden = !1, this._startAnimation(!0, e, this._finishShow);
  }
};
Le.prototype.hide = function(e, n) {
  if (!this._isDestroyed) {
    var r = this._item, o = r._element, u = j(n) ? n : null, f = r.getGrid(), h = f._settings;
    if (!this._isHiding && this._isHidden) {
      u && u(!1, r);
      return;
    }
    if (this._isHiding && !e) {
      u && r._emitter.on(this._queue, u);
      return;
    }
    this._isHiding || (r._emitter.burst(this._queue, !0, r), ae(o, h.itemHiddenClass), Ft(o, h.itemVisibleClass)), u && r._emitter.on(this._queue, u), this._isHidden = this._isHiding = !0, this._isShowing = !1, this._startAnimation(!1, e, this._finishHide);
  }
};
Le.prototype.stop = function(e) {
  if (!this._isDestroyed && !(!this._isHiding && !this._isShowing)) {
    var n = this._item;
    Zh(n._id), this._animation.stop(), e && n._emitter.burst(this._queue, !0, n);
  }
};
Le.prototype.setStyles = function(e) {
  var n = this._childElement, r = this._currentStyleProps;
  this._removeCurrentStyles();
  for (var o in e)
    r.push(o), n.style[o] = e[o];
};
Le.prototype.destroy = function() {
  if (!this._isDestroyed) {
    var e = this._item, n = e._element, r = e.getGrid(), o = r._settings;
    this.stop(!0), e._emitter.clear(this._queue), this._animation.destroy(), this._removeCurrentStyles(), Ft(n, o.itemVisibleClass), Ft(n, o.itemHiddenClass), n.style.display = "", this._isHiding = this._isShowing = !1, this._isDestroyed = this._isHidden = !0;
  }
};
Le.prototype._startAnimation = function(e, n, r) {
  if (!this._isDestroyed) {
    var o = this._item, u = this._animation, f = this._childElement, h = o.getGrid()._settings, d = e ? h.visibleStyles : h.hiddenStyles, v = e ? h.showDuration : h.hideDuration, w = e ? h.showEasing : h.hideEasing, x = n || v <= 0, S;
    if (!d) {
      r && r();
      return;
    }
    if (Zh(o._id), x) {
      yn(f, d), u.stop(), r && r();
      return;
    }
    u.isAnimating() && (u._animation.onfinish = null), aS(
      o._id,
      function() {
        S = cc(f, d);
      },
      function() {
        u.start(S, d, {
          duration: v,
          easing: w,
          onFinish: r
        });
      }
    );
  }
};
Le.prototype._finishShow = function() {
  this._isHidden || (this._isShowing = !1, this._item._emitter.burst(this._queue, !1, this._item));
};
Le.prototype._finishHide = function() {
  if (this._isHidden) {
    var e = this._item;
    this._isHiding = !1, e._layout.stop(!0, 0, 0), e._element.style.display = "none", e._emitter.burst(this._queue, !1, e);
  }
};
Le.prototype._removeCurrentStyles = function() {
  for (var e = this._childElement, n = this._currentStyleProps, r = 0; r < n.length; r++)
    e.style[n[r]] = "";
  n.length = 0;
};
var $S = 0;
function _c() {
  return ++$S;
}
function vt(e, n, r) {
  var o = e._settings;
  if (Mi) {
    if (Mi.has(n))
      throw new Error("You can only create one Muuri Item per element!");
    Mi.set(n, this);
  }
  this._id = _c(), this._gridId = e._id, this._element = n, this._isDestroyed = !1, this._left = 0, this._top = 0, this._width = 0, this._height = 0, this._marginLeft = 0, this._marginRight = 0, this._marginTop = 0, this._marginBottom = 0, this._tX = void 0, this._tY = void 0, this._sortData = null, this._emitter = new Se(), n.parentNode !== e._element && e._element.appendChild(n), ae(n, o.itemClass), typeof r != "boolean" && (r = Qt(n, "display") !== "none"), this._isActive = r, this._visibility = new Le(this), this._layout = new ei(this), this._migrate = new ur(this), this._drag = o.dragEnabled ? new U(this) : null, this._dragRelease = new Ei(this), this._dragPlaceholder = new Vt(this);
}
vt.prototype.getGrid = function() {
  return Ws[this._gridId];
};
vt.prototype.getElement = function() {
  return this._element;
};
vt.prototype.getWidth = function() {
  return this._width;
};
vt.prototype.getHeight = function() {
  return this._height;
};
vt.prototype.getMargin = function() {
  return {
    left: this._marginLeft,
    right: this._marginRight,
    top: this._marginTop,
    bottom: this._marginBottom
  };
};
vt.prototype.getPosition = function() {
  return {
    left: this._left,
    top: this._top
  };
};
vt.prototype.isActive = function() {
  return this._isActive;
};
vt.prototype.isVisible = function() {
  return !!this._visibility && !this._visibility._isHidden;
};
vt.prototype.isShowing = function() {
  return !!(this._visibility && this._visibility._isShowing);
};
vt.prototype.isHiding = function() {
  return !!(this._visibility && this._visibility._isHiding);
};
vt.prototype.isPositioning = function() {
  return !!(this._layout && this._layout._isActive);
};
vt.prototype.isDragging = function() {
  return !!(this._drag && this._drag._isActive);
};
vt.prototype.isReleasing = function() {
  return !!(this._dragRelease && this._dragRelease._isActive);
};
vt.prototype.isDestroyed = function() {
  return this._isDestroyed;
};
vt.prototype._refreshDimensions = function(e) {
  if (!this._isDestroyed && !(e !== !0 && this._visibility._isHidden)) {
    var n = this._element, r = this._dragPlaceholder, o = n.getBoundingClientRect();
    this._width = o.width, this._height = o.height, this._marginLeft = Math.max(0, ve(n, "margin-left")), this._marginRight = Math.max(0, ve(n, "margin-right")), this._marginTop = Math.max(0, ve(n, "margin-top")), this._marginBottom = Math.max(0, ve(n, "margin-bottom")), r && r.updateDimensions();
  }
};
vt.prototype._refreshSortData = function() {
  if (!this._isDestroyed) {
    var e = this._sortData = {}, n = this.getGrid()._settings.sortData, r;
    for (r in n)
      e[r] = n[r](this, this._element);
  }
};
vt.prototype._addToLayout = function(e, n) {
  this._isActive !== !0 && (this._isActive = !0, this._left = e || 0, this._top = n || 0);
};
vt.prototype._removeFromLayout = function() {
  this._isActive !== !1 && (this._isActive = !1, this._left = 0, this._top = 0);
};
vt.prototype._canSkipLayout = function(e, n) {
  return this._left === e && this._top === n && !this._migrate._isActive && !this._layout._skipNextAnimation && !this._dragRelease.isJustReleased();
};
vt.prototype._setTranslate = function(e, n) {
  return this._tX === e && this._tY === n ? !1 : (this._tX = e, this._tY = n, this._element.style[Ve] = gi(e, n), !0);
};
vt.prototype._destroy = function(e) {
  if (!this._isDestroyed) {
    var n = this._element, r = this.getGrid(), o = r._settings;
    this._dragPlaceholder.destroy(), this._dragRelease.destroy(), this._migrate.destroy(), this._layout.destroy(), this._visibility.destroy(), this._drag && this._drag.destroy(), this._emitter.destroy(), Ft(n, o.itemClass), e && n.parentNode.removeChild(n), Mi && Mi.delete(n), this._isActive = !1, this._isDestroyed = !0;
  }
};
function dc(e) {
  var n = 1, r = 2, o = 4, u = 8, f = 16, h = 1e-3, d = 0.5;
  function v(I) {
    return ((I * 1e3 + 0.5 << 0) / 10 << 0) / 100;
  }
  function w() {
    this.currentRects = [], this.nextRects = [], this.rectTarget = {}, this.rectStore = [], this.slotSizes = [], this.rectId = 0, this.slotIndex = -1, this.slotData = { left: 0, top: 0, width: 0, height: 0 }, this.sortRectsLeftTop = this.sortRectsLeftTop.bind(this), this.sortRectsTopLeft = this.sortRectsTopLeft.bind(this);
  }
  if (w.prototype.computeLayout = function(I, A) {
    var M = I.items, L = I.slots, W = !!(A & n), C = !!(A & r), G = !!(A & o), Y = !!(A & u), ot = !!(A & f), ct = typeof M[0] == "number", it, we, Et, Bt, Ne, It;
    if (!M.length)
      return I;
    for (we = ct ? 2 : 1, it = 0; it < M.length; it += we)
      ct ? (Bt = M[it], Ne = M[it + 1]) : (Et = M[it], Bt = Et._width + Et._marginLeft + Et._marginRight, Ne = Et._height + Et._marginTop + Et._marginBottom), ot && (Bt = v(Bt), Ne = v(Ne)), It = this.computeNextSlot(I, Bt, Ne, W, C), C ? It.left + It.width > I.width && (I.width = It.left + It.width) : It.top + It.height > I.height && (I.height = It.top + It.height), L[++this.slotIndex] = It.left, L[++this.slotIndex] = It.top, (G || Y) && this.slotSizes.push(It.width, It.height);
    if (G)
      for (it = 0; it < L.length; it += 2)
        L[it] = I.width - (L[it] + this.slotSizes[it]);
    if (Y)
      for (it = 1; it < L.length; it += 2)
        L[it] = I.height - (L[it] + this.slotSizes[it]);
    return this.slotSizes.length = 0, this.currentRects.length = 0, this.nextRects.length = 0, this.rectStore.length = 0, this.rectId = 0, this.slotIndex = -1, I;
  }, w.prototype.computeNextSlot = function(I, A, M, L, W) {
    var C = this.slotData, G = this.currentRects, Y = this.nextRects, ot = !1, ct, it, we, Et, Bt;
    for (Y.length = 0, C.left = null, C.top = null, C.width = A, C.height = M, Et = 0; Et < G.length; Et++)
      if (it = G[Et], !!it && (ct = this.getRect(it), C.width <= ct.width + h && C.height <= ct.height + h)) {
        C.left = ct.left, C.top = ct.top;
        break;
      }
    if (C.left === null && (W ? (C.left = I.width, C.top = 0) : (C.left = 0, C.top = I.height), L || (ot = !0)), !W && C.top + C.height > I.height + h && (C.left > d && Y.push(this.addRect(0, I.height, C.left, 1 / 0)), C.left + C.width < I.width - d && Y.push(
      this.addRect(
        C.left + C.width,
        I.height,
        I.width - C.left - C.width,
        1 / 0
      )
    ), I.height = C.top + C.height), W && C.left + C.width > I.width + h && (C.top > d && Y.push(this.addRect(I.width, 0, 1 / 0, C.top)), C.top + C.height < I.height - d && Y.push(
      this.addRect(
        I.width,
        C.top + C.height,
        1 / 0,
        I.height - C.top - C.height
      )
    ), I.width = C.left + C.width), !ot) {
      for (L && (Et = 0); Et < G.length; Et++)
        if (it = G[Et], !!it)
          for (ct = this.getRect(it), we = this.splitRect(ct, C), Bt = 0; Bt < we.length; Bt++)
            it = we[Bt], ct = this.getRect(it), (W ? ct.left + h < I.width - h : ct.top + h < I.height - h) && Y.push(it);
    }
    return Y.length > 1 && this.purgeRects(Y).sort(W ? this.sortRectsLeftTop : this.sortRectsTopLeft), this.currentRects = Y, this.nextRects = G, C;
  }, w.prototype.addRect = function(I, A, M, L) {
    var W = ++this.rectId;
    return this.rectStore[W] = I || 0, this.rectStore[++this.rectId] = A || 0, this.rectStore[++this.rectId] = M || 0, this.rectStore[++this.rectId] = L || 0, W;
  }, w.prototype.getRect = function(I, A) {
    return A || (A = this.rectTarget), A.left = this.rectStore[I] || 0, A.top = this.rectStore[++I] || 0, A.width = this.rectStore[++I] || 0, A.height = this.rectStore[++I] || 0, A;
  }, w.prototype.splitRect = /* @__PURE__ */ function() {
    var I = [], A = 0, M = 0;
    return function(L, W) {
      return I.length = 0, L.left + L.width <= W.left + h || W.left + W.width <= L.left + h || L.top + L.height <= W.top + h || W.top + W.height <= L.top + h ? (I.push(this.addRect(L.left, L.top, L.width, L.height)), I) : (A = W.left - L.left, A >= d && I.push(this.addRect(L.left, L.top, A, L.height)), A = L.left + L.width - (W.left + W.width), A >= d && I.push(this.addRect(W.left + W.width, L.top, A, L.height)), M = W.top - L.top, M >= d && I.push(this.addRect(L.left, L.top, L.width, M)), M = L.top + L.height - (W.top + W.height), M >= d && I.push(this.addRect(L.left, W.top + W.height, L.width, M)), I);
    };
  }(), w.prototype.isRectAWithinRectB = function(I, A) {
    return I.left + h >= A.left && I.top + h >= A.top && I.left + I.width - h <= A.left + A.width && I.top + I.height - h <= A.top + A.height;
  }, w.prototype.purgeRects = /* @__PURE__ */ function() {
    var I = {}, A = {};
    return function(M) {
      for (var L = M.length, W; L--; )
        if (W = M.length, !!M[L]) {
          for (this.getRect(M[L], I); W--; )
            if (!(!M[W] || L === W) && (this.getRect(M[W], A), this.isRectAWithinRectB(I, A))) {
              M[L] = 0;
              break;
            }
        }
      return M;
    };
  }(), w.prototype.sortRectsTopLeft = /* @__PURE__ */ function() {
    var I = {}, A = {};
    return function(M, L) {
      return this.getRect(M, I), this.getRect(L, A), I.top < A.top && I.top + h < A.top ? -1 : I.top > A.top && I.top - h > A.top ? 1 : I.left < A.left && I.left + h < A.left ? -1 : I.left > A.left && I.left - h > A.left ? 1 : 0;
    };
  }(), w.prototype.sortRectsLeftTop = /* @__PURE__ */ function() {
    var I = {}, A = {};
    return function(M, L) {
      return this.getRect(M, I), this.getRect(L, A), I.left < A.left && I.left + h < A.left ? -1 : I.left > A.left && I.left - h < A.left ? 1 : I.top < A.top && I.top + h < A.top ? -1 : I.top > A.top && I.top - h > A.top ? 1 : 0;
    };
  }(), e) {
    var x = 1, S = 2, N = 3, P = 4, F = new w();
    self.onmessage = function(I) {
      var A = new Float32Array(I.data), M = A.subarray(P, A.length), L = new Float32Array(M.length), W = A[N], C = {
        items: M,
        slots: L,
        width: A[x],
        height: A[S]
      };
      F.computeLayout(C, W), A[x] = C.width, A[S] = C.height, A.set(C.slots, P), postMessage(A.buffer, [A.buffer]);
    };
  }
  return w;
}
var ih = dc(), _n = null, vs = [];
function zS(e, n) {
  var r = [];
  if (e > 0) {
    _n || (_n = URL.createObjectURL(
      new Blob(["(" + dc.toString() + ")(true)"], {
        type: "application/javascript"
      })
    ));
    for (var o = 0, u; o < e; o++)
      u = new Worker(_n), n && (u.onmessage = n), r.push(u), vs.push(u);
  }
  return r;
}
function KS(e) {
  for (var n, r, o = 0; o < e.length; o++)
    n = e[o], n.onmessage = null, n.onerror = null, n.onmessageerror = null, n.terminate(), r = vs.indexOf(n), r > -1 && vs.splice(r, 1);
  _n && !vs.length && (URL.revokeObjectURL(_n), _n = null);
}
function ZS() {
  return !!(window.Worker && window.URL && window.Blob);
}
var nh = 1, Ls = 2, rh = 4, sh = 8, oh = 16, pc = 0, gc = 1, vc = 2, JS = 3, Ca = 4;
function ii(e, n) {
  if (this._options = 0, this._processor = null, this._layoutQueue = [], this._layouts = {}, this._layoutCallbacks = {}, this._layoutWorkers = {}, this._layoutWorkerData = {}, this._workers = [], this._onWorkerMessage = this._onWorkerMessage.bind(this), this.setOptions(n), e = typeof e == "number" ? Math.max(0, e) : 0, e && ZS())
    try {
      this._workers = zS(e, this._onWorkerMessage);
    } catch {
      this._processor = new ih();
    }
  else
    this._processor = new ih();
}
ii.prototype._sendToWorker = function() {
  if (!(!this._layoutQueue.length || !this._workers.length)) {
    var e = this._layoutQueue.shift(), n = this._workers.pop(), r = this._layoutWorkerData[e];
    delete this._layoutWorkerData[e], this._layoutWorkers[e] = n, n.postMessage(r.buffer, [r.buffer]);
  }
};
ii.prototype._onWorkerMessage = function(e) {
  var n = new Float32Array(e.data), r = n[pc], o = this._layouts[r], u = this._layoutCallbacks[r], f = this._layoutWorkers[r];
  o && delete this._layouts[r], u && delete this._layoutCallbacks[r], f && delete this._layoutWorkers[r], o && u && (o.width = n[gc], o.height = n[vc], o.slots = n.subarray(Ca, n.length), this._finalizeLayout(o), u(o)), f && (this._workers.push(f), this._sendToWorker());
};
ii.prototype._finalizeLayout = function(e) {
  var n = e._grid, r = e._settings & Ls, o = n._boxSizing === "border-box";
  return delete e._grid, delete e._settings, e.styles = {}, r ? e.styles.width = (o ? e.width + n._borderLeft + n._borderRight : e.width) + "px" : e.styles.height = (o ? e.height + n._borderTop + n._borderBottom : e.height) + "px", e;
};
ii.prototype.setOptions = function(e) {
  if (e) {
    var n;
    typeof e.fillGaps == "boolean" ? n = e.fillGaps ? nh : 0 : n = this._options & nh;
    var r;
    typeof e.horizontal == "boolean" ? r = e.horizontal ? Ls : 0 : r = this._options & Ls;
    var o;
    typeof e.alignRight == "boolean" ? o = e.alignRight ? rh : 0 : o = this._options & rh;
    var u;
    typeof e.alignBottom == "boolean" ? u = e.alignBottom ? sh : 0 : u = this._options & sh;
    var f;
    typeof e.rounding == "boolean" ? f = e.rounding ? oh : 0 : f = this._options & oh, this._options = n | r | o | u | f;
  }
};
ii.prototype.createLayout = function(e, n, r, o, u, f) {
  if (this._layouts[n])
    throw new Error("A layout with the provided id is currently being processed.");
  var h = this._options & Ls, d = {
    id: n,
    items: r,
    slots: null,
    width: h ? 0 : o,
    height: h ? u : 0,
    // Temporary data, which will be removed before sending the layout data
    // outside of Packer's context.
    _grid: e,
    _settings: this._options
  };
  if (!r.length) {
    d.slots = [], this._finalizeLayout(d), f(d);
    return;
  }
  if (this._processor) {
    d.slots = window.Float32Array ? new Float32Array(r.length * 2) : new Array(r.length * 2), this._processor.computeLayout(d, d._settings), this._finalizeLayout(d), f(d);
    return;
  }
  var v = new Float32Array(Ca + r.length * 2);
  v[pc] = n, v[gc] = d.width, v[vc] = d.height, v[JS] = d._settings;
  var w, x, S;
  for (w = 0, x = Ca - 1, S; w < r.length; w++)
    S = r[w], v[++x] = S._width + S._marginLeft + S._marginRight, v[++x] = S._height + S._marginTop + S._marginBottom;
  return this._layoutQueue.push(n), this._layouts[n] = d, this._layoutCallbacks[n] = f, this._layoutWorkerData[n] = v, this._sendToWorker(), this.cancelLayout.bind(this, n);
};
ii.prototype.cancelLayout = function(e) {
  var n = this._layouts[e];
  if (n && (delete this._layouts[e], delete this._layoutCallbacks[e], this._layoutWorkerData[e])) {
    delete this._layoutWorkerData[e];
    var r = this._layoutQueue.indexOf(e);
    r > -1 && this._layoutQueue.splice(r, 1);
  }
};
ii.prototype.destroy = function() {
  for (var e in this._layoutWorkers)
    this._workers.push(this._layoutWorkers[e]);
  KS(this._workers), this._workers.length = 0, this._layoutQueue.length = 0, this._layouts = {}, this._layoutCallbacks = {}, this._layoutWorkers = {}, this._layoutWorkerData = {};
};
var QS = 0;
function jS(e, n) {
  var r = ++QS, o = 0, u = 0, f = !1, h = function(d) {
    f || (u && (o -= d - u), u = d, o > 0 ? gS(r, h) : (o = u = 0, e()));
  };
  return function(d) {
    if (!f) {
      if (n <= 0) {
        d !== !0 && e();
        return;
      }
      if (d === !0) {
        f = !0, o = u = 0, h = void 0, vS(r);
        return;
      }
      o <= 0 ? (o = n, h(0)) : o = n;
    }
  };
}
var tw = "[object HTMLCollection]", ew = "[object NodeList]";
function Ua(e) {
  var n = Object.prototype.toString.call(e);
  return n === tw || n === ew;
}
var iw = "object", nw = "[object Object]", rw = Object.prototype.toString;
function ah(e) {
  return typeof e === iw && rw.call(e) === nw;
}
function sw() {
}
function ow(e) {
  return Ua(e) ? Array.prototype.slice.call(e) : Array.prototype.concat(e);
}
var mc = "number", Xs = "string", Si = "instant", Ea = 0;
function K(e, n) {
  typeof e === Xs && (e = document.querySelector(e));
  var r = e.getRootNode ? e.getRootNode({ composed: !0 }) === document : document.body.contains(e);
  if (!r || e === document.documentElement)
    throw new Error("Container element must be an existing DOM element.");
  var o = aw(K.defaultOptions, n);
  o.visibleStyles = uh(o.visibleStyles), o.hiddenStyles = uh(o.hiddenStyles), j(o.dragSort) || (o.dragSort = !!o.dragSort), this._id = _c(), this._element = e, this._settings = o, this._isDestroyed = !1, this._items = [], this._layout = {
    id: 0,
    items: [],
    slots: []
  }, this._isLayoutFinished = !0, this._nextLayoutData = null, this._emitter = new Se(), this._onLayoutDataReceived = this._onLayoutDataReceived.bind(this), Ws[this._id] = this, ae(e, o.containerClass), lw(this, o.layoutOnResize), this.add(uw(e, o.items), { layout: !1 }), o.layoutOnInit && this.layout(!0);
}
K.Item = vt;
K.ItemLayout = ei;
K.ItemVisibility = Le;
K.ItemMigrate = ur;
K.ItemDrag = U;
K.ItemDragRelease = Ei;
K.ItemDragPlaceholder = Vt;
K.Emitter = Se;
K.Animator = Be;
K.Dragger = b;
K.Packer = ii;
K.AutoScroller = st;
K.defaultPacker = new ii(2);
K.defaultOptions = {
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
    action: Bi,
    migrateAction: Bi
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
    speed: st.smoothSpeed(1e3, 2e3, 2500),
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
K.prototype.on = function(e, n) {
  return this._emitter.on(e, n), this;
};
K.prototype.off = function(e, n) {
  return this._emitter.off(e, n), this;
};
K.prototype.getElement = function() {
  return this._element;
};
K.prototype.getItem = function(e) {
  if (this._isDestroyed || !e && e !== 0)
    return null;
  if (typeof e === mc)
    return this._items[e > -1 ? e : this._items.length + e] || null;
  if (e instanceof vt)
    return e._gridId === this._id ? e : null;
  if (Mi) {
    var n = Mi.get(e);
    return n && n._gridId === this._id ? n : null;
  } else
    for (var r = 0; r < this._items.length; r++)
      if (this._items[r]._element === e)
        return this._items[r];
  return null;
};
K.prototype.getItems = function(e) {
  if (this._isDestroyed || e === void 0)
    return this._items.slice(0);
  var n = [], r, o;
  if (Array.isArray(e) || Ua(e))
    for (r = 0; r < e.length; r++)
      o = this.getItem(e[r]), o && n.push(o);
  else
    o = this.getItem(e), o && n.push(o);
  return n;
};
K.prototype.refreshItems = function(e, n) {
  if (this._isDestroyed)
    return this;
  var r = e || this._items, o, u, f, h;
  if (n === !0)
    for (h = [], o = 0; o < r.length; o++)
      u = r[o], !u.isVisible() && !u.isHiding() && (f = u.getElement().style, f.visibility = "hidden", f.display = "", h.push(f));
  for (o = 0; o < r.length; o++)
    r[o]._refreshDimensions(n);
  if (n === !0) {
    for (o = 0; o < h.length; o++)
      f = h[o], f.visibility = "", f.display = "none";
    h.length = 0;
  }
  return this;
};
K.prototype.refreshSortData = function(e) {
  if (this._isDestroyed)
    return this;
  for (var n = e || this._items, r = 0; r < n.length; r++)
    n[r]._refreshSortData();
  return this;
};
K.prototype.synchronize = function() {
  if (this._isDestroyed)
    return this;
  var e = this._items;
  if (!e.length)
    return this;
  for (var n, r, o = 0; o < e.length; o++)
    r = e[o]._element, r.parentNode === this._element && (n = n || document.createDocumentFragment(), n.appendChild(r));
  return n ? (this._element.appendChild(n), this._emit(Vy), this) : this;
};
K.prototype.layout = function(e, n) {
  if (this._isDestroyed)
    return this;
  var r = this._nextLayoutData;
  r && j(r.cancel) && r.cancel(), Ea = Ea % Jy + 1;
  var o = Ea;
  this._nextLayoutData = {
    id: o,
    instant: e,
    onFinish: n,
    cancel: null
  };
  for (var u = this._items, f = [], h = 0; h < u.length; h++)
    u[h]._isActive && f.push(u[h]);
  this._refreshDimensions();
  var d = this._width - this._borderLeft - this._borderRight, v = this._height - this._borderTop - this._borderBottom, w = this._settings.layout, x;
  return j(w) ? x = w(
    this,
    o,
    f,
    d,
    v,
    this._onLayoutDataReceived
  ) : (K.defaultPacker.setOptions(w), x = K.defaultPacker.createLayout(
    this,
    o,
    f,
    d,
    v,
    this._onLayoutDataReceived
  )), j(x) && this._nextLayoutData && this._nextLayoutData.id === o && (this._nextLayoutData.cancel = x), this;
};
K.prototype.add = function(e, n) {
  if (this._isDestroyed || !e)
    return [];
  var r = ow(e);
  if (!r.length)
    return r;
  var o = n || {}, u = o.layout ? o.layout : o.layout === void 0, f = this._items, h = !1, d, v, w, x;
  for (x = 0; x < r.length; x++)
    v = r[x], v.parentNode !== this._element && (d = d || document.createDocumentFragment(), d.appendChild(v));
  for (d && this._element.appendChild(d), x = 0; x < r.length; x++)
    v = r[x], w = r[x] = new vt(this, v, o.active), w._isActive && (h = !0, w._layout._skipNextAnimation = !0);
  for (x = 0; x < r.length; x++)
    w = r[x], w._refreshDimensions(), w._refreshSortData();
  return qa(f, r, o.index), this._hasListeners(kf) && this._emit(kf, r.slice(0)), h && u && this.layout(u === Si, j(u) ? u : void 0), r;
};
K.prototype.remove = function(e, n) {
  if (this._isDestroyed || !e.length)
    return [];
  var r = n || {}, o = r.layout ? r.layout : r.layout === void 0, u = !1, f = this.getItems(), h = [], d = [], v, w, x;
  for (x = 0; x < e.length; x++)
    w = e[x], !w._isDestroyed && (v = this._items.indexOf(w), v !== -1 && (w._isActive && (u = !0), h.push(w), d.push(f.indexOf(w)), w._destroy(r.removeElements), this._items.splice(v, 1)));
  return this._hasListeners(qf) && this._emit(qf, h.slice(0), d), u && o && this.layout(o === Si, j(o) ? o : void 0), h;
};
K.prototype.show = function(e, n) {
  return !this._isDestroyed && e.length && this._setItemsVisibility(e, !0, n), this;
};
K.prototype.hide = function(e, n) {
  return !this._isDestroyed && e.length && this._setItemsVisibility(e, !1, n), this;
};
K.prototype.filter = function(e, n) {
  if (this._isDestroyed || !this._items.length)
    return this;
  var r = [], o = [], u = typeof e === Xs, f = j(e), h = n || {}, d = h.instant === !0, v = h.syncWithLayout, w = h.layout ? h.layout : h.layout === void 0, x = j(h.onFinish) ? h.onFinish : null, S = -1, N = sw, P, F;
  if (x && (N = function() {
    ++S && x(r.slice(0), o.slice(0));
  }), f || u)
    for (F = 0; F < this._items.length; F++)
      P = this._items[F], (f ? e(P) : Gs(P._element, e)) ? r.push(P) : o.push(P);
  return r.length ? this.show(r, {
    instant: d,
    syncWithLayout: v,
    onFinish: N,
    layout: !1
  }) : N(), o.length ? this.hide(o, {
    instant: d,
    syncWithLayout: v,
    onFinish: N,
    layout: !1
  }) : N(), (r.length || o.length) && (this._hasListeners(Uf) && this._emit(Uf, r.slice(0), o.slice(0)), w && this.layout(w === Si, j(w) ? w : void 0)), this;
};
K.prototype.sort = /* @__PURE__ */ function() {
  var e, n, r, o;
  function u(h, d) {
    for (var v = 0, w, x, S, N, P = 0; P < e.length; P++)
      if (w = e[P][0], x = e[P][1], S = (h._sortData ? h : h._refreshSortData())._sortData[w], N = (d._sortData ? d : d._refreshSortData())._sortData[w], x === "desc" || !x && n ? v = N < S ? -1 : N > S ? 1 : 0 : v = S < N ? -1 : S > N ? 1 : 0, v)
        return v;
    return v || (o || (o = lh(r)), v = n ? as(o, d, h) : as(o, h, d)), v;
  }
  function f(h, d) {
    var v = n ? -e(h, d) : e(h, d);
    return v || (o || (o = lh(r)), v = n ? as(o, d, h) : as(o, h, d)), v;
  }
  return function(h, d) {
    if (this._isDestroyed || this._items.length < 2)
      return this;
    var v = this._items, w = d || {}, x = w.layout ? w.layout : w.layout === void 0;
    if (n = !!w.descending, r = v.slice(0), o = null, j(h))
      e = h, v.sort(f);
    else if (typeof h === Xs)
      e = h.trim().split(" ").filter(function(S) {
        return S;
      }).map(function(S) {
        return S.split(":");
      }), v.sort(u);
    else if (Array.isArray(h))
      v.length = 0, v.push.apply(v, h);
    else
      throw e = n = r = o = null, new Error("Invalid comparer argument provided.");
    return this._hasListeners($f) && this._emit($f, v.slice(0), r), x && this.layout(x === Si, j(x) ? x : void 0), e = n = r = o = null, this;
  };
}();
K.prototype.move = function(e, n, r) {
  if (this._isDestroyed || this._items.length < 2)
    return this;
  var o = this._items, u = r || {}, f = u.layout ? u.layout : u.layout === void 0, h = u.action === Ye, d = h ? Ye : Bi, v = this.getItem(e), w = this.getItem(n), x, S;
  return v && w && v !== w && (x = o.indexOf(v), S = o.indexOf(w), h ? lc(o, x, S) : uc(o, x, S), this._hasListeners(xs) && this._emit(xs, {
    item: v,
    fromIndex: x,
    toIndex: S,
    action: d
  }), f && this.layout(f === Si, j(f) ? f : void 0)), this;
};
K.prototype.send = function(e, n, r, o) {
  if (this._isDestroyed || n._isDestroyed || this === n)
    return this;
  if (e = this.getItem(e), !e)
    return this;
  var u = o || {}, f = u.appendTo || document.body, h = u.layoutSender ? u.layoutSender : u.layoutSender === void 0, d = u.layoutReceiver ? u.layoutReceiver : u.layoutReceiver === void 0;
  return e._migrate.start(n, r, f), e._migrate._isActive && e._isActive && (h && this.layout(
    h === Si,
    j(h) ? h : void 0
  ), d && n.layout(
    d === Si,
    j(d) ? d : void 0
  )), this;
};
K.prototype.destroy = function(e) {
  if (this._isDestroyed)
    return this;
  var n = this._element, r = this._items.slice(0), o = this._layout && this._layout.styles || {}, u, f;
  for (fw(this), u = 0; u < r.length; u++)
    r[u]._destroy(e);
  this._items.length = 0, Ft(n, this._settings.containerClass);
  for (f in o)
    n.style[f] = "";
  return this._emit(Zy), this._emitter.destroy(), delete Ws[this._id], this._isDestroyed = !0, this;
};
K.prototype._emit = function() {
  this._isDestroyed || this._emitter.emit.apply(this._emitter, arguments);
};
K.prototype._hasListeners = function(e) {
  return this._isDestroyed ? !1 : this._emitter.countListeners(e) > 0;
};
K.prototype._updateBoundingRect = function() {
  var e = this._element, n = e.getBoundingClientRect();
  this._width = n.width, this._height = n.height, this._left = n.left, this._top = n.top, this._right = n.right, this._bottom = n.bottom;
};
K.prototype._updateBorders = function(e, n, r, o) {
  var u = this._element;
  e && (this._borderLeft = ve(u, "border-left-width")), n && (this._borderRight = ve(u, "border-right-width")), r && (this._borderTop = ve(u, "border-top-width")), o && (this._borderBottom = ve(u, "border-bottom-width"));
};
K.prototype._refreshDimensions = function() {
  this._updateBoundingRect(), this._updateBorders(1, 1, 1, 1), this._boxSizing = Qt(this._element, "box-sizing");
};
K.prototype._onLayoutDataReceived = /* @__PURE__ */ function() {
  var e = [];
  return function(n) {
    if (!(this._isDestroyed || !this._nextLayoutData || this._nextLayoutData.id !== n.id)) {
      var r = this, o = this._nextLayoutData.instant, u = this._nextLayoutData.onFinish, f = n.items.length, h = f, d, v, w, x;
      for (this._nextLayoutData = null, !this._isLayoutFinished && this._hasListeners(Xf) && this._emit(Xf, this._layout.items.slice(0)), this._layout = n, e.length = 0, x = 0; x < f; x++) {
        if (d = n.items[x], !d) {
          --h;
          continue;
        }
        if (v = n.slots[x * 2], w = n.slots[x * 2 + 1], d._canSkipLayout(v, w)) {
          --h;
          continue;
        }
        d._left = v, d._top = w, d.isActive() && !d.isDragging() ? e.push(d) : --h;
      }
      if (n.styles && yn(this._element, n.styles), !(this._hasListeners(mi) && (this._emit(mi, n.items.slice(0), o === !0), this._layout.id !== n.id))) {
        var S = function() {
          if (!(--h > 0)) {
            var N = r._layout.id !== n.id, P = j(o) ? o : u;
            N || (r._isLayoutFinished = !0), j(P) && P(n.items.slice(0), N), !N && r._hasListeners(Gf) && r._emit(Gf, n.items.slice(0));
          }
        };
        if (!e.length)
          return S(), this;
        for (this._isLayoutFinished = !1, x = 0; x < e.length && this._layout.id === n.id; x++)
          e[x]._layout.start(o === !0, S);
        return this._layout.id === n.id && (e.length = 0), this;
      }
    }
  };
}();
K.prototype._setItemsVisibility = function(e, n, r) {
  var o = this, u = e.slice(0), f = r || {}, h = f.instant === !0, d = f.onFinish, v = f.layout ? f.layout : f.layout === void 0, w = u.length, x = n ? By : Qn, S = n ? Gy : Xy, N = n ? "show" : "hide", P = !1, F = [], I = [], A, M;
  if (!w) {
    j(d) && d(u);
    return;
  }
  for (M = 0; M < u.length; M++)
    A = u[M], (n && !A._isActive || !n && A._isActive) && (P = !0), A._layout._skipNextAnimation = !!(n && !A._isActive), n && A._visibility._isHidden && I.push(A), n ? A._addToLayout() : A._removeFromLayout();
  I.length && (this.refreshItems(I, !0), I.length = 0);
  function L() {
    for (P && f.syncWithLayout !== !1 && o.off(mi, L), o._hasListeners(x) && o._emit(x, u.slice(0)), M = 0; M < u.length; M++) {
      if (u[M]._gridId !== o._id) {
        --w < 1 && (j(d) && d(F.slice(0)), o._hasListeners(S) && o._emit(S, F.slice(0)));
        continue;
      }
      u[M]._visibility[N](h, function(W, C) {
        W || F.push(C), --w < 1 && (j(d) && d(F.slice(0)), o._hasListeners(S) && o._emit(S, F.slice(0)));
      });
    }
  }
  P && f.syncWithLayout !== !1 ? this.on(mi, L) : L(), P && v && this.layout(v === Si, j(v) ? v : void 0);
};
function aw(e, n) {
  var r = zn({}, e);
  return n && (r = zn(r, n)), n && n.visibleStyles ? r.visibleStyles = n.visibleStyles : e && e.visibleStyles && (r.visibleStyles = e.visibleStyles), n && n.hiddenStyles ? r.hiddenStyles = n.hiddenStyles : e && e.hiddenStyles && (r.hiddenStyles = e.hiddenStyles), r;
}
function zn(e, n) {
  var r = Object.keys(n), o = r.length, u, f, h;
  for (h = 0; h < o; h++) {
    if (f = r[h], u = ah(n[f]), ah(e[f]) && u) {
      e[f] = zn(zn({}, e[f]), n[f]);
      continue;
    }
    if (u) {
      e[f] = zn({}, n[f]);
      continue;
    }
    if (Array.isArray(n[f])) {
      e[f] = n[f].slice(0);
      continue;
    }
    e[f] = n[f];
  }
  return e;
}
function uw(e, n) {
  if (n === "*")
    return e.children;
  if (typeof n === Xs) {
    for (var r = [], o = e.children, u = 0; u < o.length; u++)
      Gs(o[u], n) && r.push(o[u]);
    return r;
  }
  return Array.isArray(n) || Ua(n) ? n : [];
}
function lw(e, n) {
  typeof n !== mc && (n = n === !0 ? 0 : -1), n >= 0 && (e._resizeHandler = jS(function() {
    e.refreshItems().layout();
  }, n), window.addEventListener("resize", e._resizeHandler));
}
function fw(e) {
  e._resizeHandler && (e._resizeHandler(!0), window.removeEventListener("resize", e._resizeHandler), e._resizeHandler = null);
}
function uh(e) {
  var n = {}, r = document.documentElement.style, o, u;
  for (o in e)
    e[o] && (u = Hs(r, o), u && (n[u] = e[o]));
  return n;
}
function lh(e) {
  for (var n = {}, r = 0; r < e.length; r++)
    n[e[r]._id] = r;
  return n;
}
function as(e, n, r) {
  var o = e[n._id], u = e[r._id];
  return o - u;
}
var us, hw = new Uint8Array(16);
function cw() {
  if (!us && (us = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !us))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return us(hw);
}
const _w = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function dw(e) {
  return typeof e == "string" && _w.test(e);
}
var Nt = [];
for (var xa = 0; xa < 256; ++xa)
  Nt.push((xa + 256).toString(16).substr(1));
function pw(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = (Nt[e[n + 0]] + Nt[e[n + 1]] + Nt[e[n + 2]] + Nt[e[n + 3]] + "-" + Nt[e[n + 4]] + Nt[e[n + 5]] + "-" + Nt[e[n + 6]] + Nt[e[n + 7]] + "-" + Nt[e[n + 8]] + Nt[e[n + 9]] + "-" + Nt[e[n + 10]] + Nt[e[n + 11]] + Nt[e[n + 12]] + Nt[e[n + 13]] + Nt[e[n + 14]] + Nt[e[n + 15]]).toLowerCase();
  if (!dw(r))
    throw TypeError("Stringified UUID is invalid");
  return r;
}
function Aa(e, n, r) {
  e = e || {};
  var o = e.random || (e.rng || cw)();
  if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, n) {
    r = r || 0;
    for (var u = 0; u < 16; ++u)
      n[r + u] = o[u];
    return n;
  }
  return pw(o);
}
const Pi = {
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
class gw {
  constructor() {
    this._store = /* @__PURE__ */ new Map(), this._itemStore = /* @__PURE__ */ new Map(), this._draggingGridItem = null, this._draggingItem = null;
  }
  /**
   * @param {number} gridId
   * @param {Array<*>} items
   */
  setItemsForGridId(n, r) {
    this._itemStore.set(n, r);
  }
  /**
   * @param {Muuri.Item} value
   */
  setDraggingGridItem(n) {
    this._draggingGridItem = n;
  }
  /**
   * @param {*} value
   */
  setDraggingItem(n) {
    this._draggingItem = n;
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
  addGrid(n, r) {
    const o = n + "";
    this._store.has(o) || this._store.set(o + "", []), this._store.get(o).push(r);
  }
  /**
   * @param {Array<string>} groupIds
   * @param {Muuri} grid
   */
  addGridToGroups(n, r) {
    n.forEach((o) => this.addGrid(o, r));
  }
  /**
   * @param {Array<string>} group
   * @returns {*}
   */
  getGrids(n) {
    let r = [];
    return n.forEach((o) => r = r.concat(this._store.get(o + ""))), r;
  }
  clear() {
    this._store = /* @__PURE__ */ new Map(), this._itemStore = /* @__PURE__ */ new Map(), this._draggingGridItem = null, this._draggingItem = null;
  }
}
const ge = new gw(), fh = {
  key: "_$muuri_id"
}, hh = {
  width: "100px",
  height: "100px"
}, vw = {
  selector: ".muuri-item:first-child"
};
/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function mw(e, n) {
  const r = new Set(e.split(","));
  return n ? (o) => r.has(o.toLowerCase()) : (o) => r.has(o);
}
const He = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, yw = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], hn = () => {
}, Sw = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ce = Object.assign, ww = Object.prototype.hasOwnProperty, Tt = (e, n) => ww.call(e, n), pt = Array.isArray, dn = (e) => qs(e) === "[object Map]", Ew = (e) => qs(e) === "[object Set]", Pt = (e) => typeof e == "function", me = (e) => typeof e == "string", ks = (e) => typeof e == "symbol", Ut = (e) => e !== null && typeof e == "object", xw = (e) => (Ut(e) || Pt(e)) && Pt(e.then) && Pt(e.catch), Aw = Object.prototype.toString, qs = (e) => Aw.call(e), yc = (e) => qs(e).slice(8, -1), Iw = (e) => qs(e) === "[object Object]", $a = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Tw = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (r) => n[r] || (n[r] = e(r));
}, Dw = Tw((e) => e.charAt(0).toUpperCase() + e.slice(1)), Sn = (e, n) => !Object.is(e, n), Rw = (e, n, r) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    value: r
  });
};
let ch;
const Sc = () => ch || (ch = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Us(e) {
  if (pt(e)) {
    const n = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r], u = me(o) ? Cw(o) : Us(o);
      if (u)
        for (const f in u)
          n[f] = u[f];
    }
    return n;
  } else if (me(e) || Ut(e))
    return e;
}
const bw = /;(?![^(]*\))/g, Ow = /:([^]+)/, Lw = /\/\*[^]*?\*\//g;
function Cw(e) {
  const n = {};
  return e.replace(Lw, "").split(bw).forEach((r) => {
    if (r) {
      const o = r.split(Ow);
      o.length > 1 && (n[o[0].trim()] = o[1].trim());
    }
  }), n;
}
function $s(e) {
  let n = "";
  if (me(e))
    n = e;
  else if (pt(e))
    for (let r = 0; r < e.length; r++) {
      const o = $s(e[r]);
      o && (n += o + " ");
    }
  else if (Ut(e))
    for (const r in e)
      e[r] && (n += r + " ");
  return n.trim();
}
/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function _h(e, ...n) {
  console.warn(`[Vue warn] ${e}`, ...n);
}
let Nw;
function Pw(e, n = Nw) {
  n && n.active && n.effects.push(e);
}
let Kn;
class Mw {
  constructor(n, r, o, u) {
    this.fn = n, this.trigger = r, this.scheduler = o, this.active = !0, this.deps = [], this._dirtyLevel = 4, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, Pw(this, u);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1, za();
      for (let n = 0; n < this._depsLength; n++) {
        const r = this.deps[n];
        if (r.computed && (Ww(r.computed), this._dirtyLevel >= 4))
          break;
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), Ka();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(n) {
    this._dirtyLevel = n ? 4 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let n = Wi, r = Kn;
    try {
      return Wi = !0, Kn = this, this._runnings++, dh(this), this.fn();
    } finally {
      ph(this), this._runnings--, Kn = r, Wi = n;
    }
  }
  stop() {
    var n;
    this.active && (dh(this), ph(this), (n = this.onStop) == null || n.call(this), this.active = !1);
  }
}
function Ww(e) {
  return e.value;
}
function dh(e) {
  e._trackId++, e._depsLength = 0;
}
function ph(e) {
  if (e.deps.length > e._depsLength) {
    for (let n = e._depsLength; n < e.deps.length; n++)
      wc(e.deps[n], e);
    e.deps.length = e._depsLength;
  }
}
function wc(e, n) {
  const r = e.get(n);
  r !== void 0 && n._trackId !== r && (e.delete(n), e.size === 0 && e.cleanup());
}
let Wi = !0, Na = 0;
const Ec = [];
function za() {
  Ec.push(Wi), Wi = !1;
}
function Ka() {
  const e = Ec.pop();
  Wi = e === void 0 ? !0 : e;
}
function Za() {
  Na++;
}
function Ja() {
  for (Na--; !Na && Pa.length; )
    Pa.shift()();
}
function Fw(e, n, r) {
  var o;
  if (n.get(e) !== e._trackId) {
    n.set(e, e._trackId);
    const u = e.deps[e._depsLength];
    u !== n ? (u && wc(u, e), e.deps[e._depsLength++] = n) : e._depsLength++, process.env.NODE_ENV !== "production" && ((o = e.onTrack) == null || o.call(e, Ce({ effect: e }, r)));
  }
}
const Pa = [];
function Hw(e, n, r) {
  var o;
  Za();
  for (const u of e.keys()) {
    let f;
    u._dirtyLevel < n && (f ?? (f = e.get(u) === u._trackId)) && (u._shouldSchedule || (u._shouldSchedule = u._dirtyLevel === 0), u._dirtyLevel = n), u._shouldSchedule && (f ?? (f = e.get(u) === u._trackId)) && (process.env.NODE_ENV !== "production" && ((o = u.onTrigger) == null || o.call(u, Ce({ effect: u }, r))), u.trigger(), (!u._runnings || u.allowRecurse) && u._dirtyLevel !== 2 && (u._shouldSchedule = !1, u.scheduler && Pa.push(u.scheduler)));
  }
  Ja();
}
const Yw = (e, n) => {
  const r = /* @__PURE__ */ new Map();
  return r.cleanup = e, r.computed = n, r;
}, Ma = /* @__PURE__ */ new WeakMap(), Fi = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), Wa = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function jt(e, n, r) {
  if (Wi && Kn) {
    let o = Ma.get(e);
    o || Ma.set(e, o = /* @__PURE__ */ new Map());
    let u = o.get(r);
    u || o.set(r, u = Yw(() => o.delete(r))), Fw(
      Kn,
      u,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: n,
        key: r
      } : void 0
    );
  }
}
function vi(e, n, r, o, u, f) {
  const h = Ma.get(e);
  if (!h)
    return;
  let d = [];
  if (n === "clear")
    d = [...h.values()];
  else if (r === "length" && pt(e)) {
    const v = Number(o);
    h.forEach((w, x) => {
      (x === "length" || !ks(x) && x >= v) && d.push(w);
    });
  } else
    switch (r !== void 0 && d.push(h.get(r)), n) {
      case "add":
        pt(e) ? $a(r) && d.push(h.get("length")) : (d.push(h.get(Fi)), dn(e) && d.push(h.get(Wa)));
        break;
      case "delete":
        pt(e) || (d.push(h.get(Fi)), dn(e) && d.push(h.get(Wa)));
        break;
      case "set":
        dn(e) && d.push(h.get(Fi));
        break;
    }
  Za();
  for (const v of d)
    v && Hw(
      v,
      4,
      process.env.NODE_ENV !== "production" ? {
        target: e,
        type: n,
        key: r,
        newValue: o,
        oldValue: u,
        oldTarget: f
      } : void 0
    );
  Ja();
}
const Vw = /* @__PURE__ */ mw("__proto__,__v_isRef,__isVue"), xc = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ks)
), gh = /* @__PURE__ */ Bw();
function Bw() {
  const e = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((n) => {
    e[n] = function(...r) {
      const o = ut(this);
      for (let f = 0, h = this.length; f < h; f++)
        jt(o, "get", f + "");
      const u = o[n](...r);
      return u === -1 || u === !1 ? o[n](...r.map(ut)) : u;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((n) => {
    e[n] = function(...r) {
      za(), Za();
      const o = ut(this)[n].apply(this, r);
      return Ja(), Ka(), o;
    };
  }), e;
}
function Gw(e) {
  const n = ut(this);
  return jt(n, "has", e), n.hasOwnProperty(e);
}
class Ac {
  constructor(n = !1, r = !1) {
    this._isReadonly = n, this._shallow = r;
  }
  get(n, r, o) {
    const u = this._isReadonly, f = this._shallow;
    if (r === "__v_isReactive")
      return !u;
    if (r === "__v_isReadonly")
      return u;
    if (r === "__v_isShallow")
      return f;
    if (r === "__v_raw")
      return o === (u ? f ? bc : Rc : f ? eE : Dc).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(o) ? n : void 0;
    const h = pt(n);
    if (!u) {
      if (h && Tt(gh, r))
        return Reflect.get(gh, r, o);
      if (r === "hasOwnProperty")
        return Gw;
    }
    const d = Reflect.get(n, r, o);
    return (ks(r) ? xc.has(r) : Vw(r)) || (u || jt(n, "get", r), f) ? d : ye(d) ? h && $a(r) ? d : d.value : Ut(d) ? u ? Lc(d) : Oc(d) : d;
  }
}
class Xw extends Ac {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, r, o, u) {
    let f = n[r];
    if (!this._shallow) {
      const v = Xi(f);
      if (!pn(o) && !Xi(o) && (f = ut(f), o = ut(o)), !pt(n) && ye(f) && !ye(o))
        return v ? !1 : (f.value = o, !0);
    }
    const h = pt(n) && $a(r) ? Number(r) < n.length : Tt(n, r), d = Reflect.set(n, r, o, u);
    return n === ut(u) && (h ? Sn(o, f) && vi(n, "set", r, o, f) : vi(n, "add", r, o)), d;
  }
  deleteProperty(n, r) {
    const o = Tt(n, r), u = n[r], f = Reflect.deleteProperty(n, r);
    return f && o && vi(n, "delete", r, void 0, u), f;
  }
  has(n, r) {
    const o = Reflect.has(n, r);
    return (!ks(r) || !xc.has(r)) && jt(n, "has", r), o;
  }
  ownKeys(n) {
    return jt(
      n,
      "iterate",
      pt(n) ? "length" : Fi
    ), Reflect.ownKeys(n);
  }
}
class Ic extends Ac {
  constructor(n = !1) {
    super(!0, n);
  }
  set(n, r) {
    return process.env.NODE_ENV !== "production" && _h(
      `Set operation on key "${String(r)}" failed: target is readonly.`,
      n
    ), !0;
  }
  deleteProperty(n, r) {
    return process.env.NODE_ENV !== "production" && _h(
      `Delete operation on key "${String(r)}" failed: target is readonly.`,
      n
    ), !0;
  }
}
const kw = /* @__PURE__ */ new Xw(), qw = /* @__PURE__ */ new Ic(), Uw = /* @__PURE__ */ new Ic(!0), Qa = (e) => e, zs = (e) => Reflect.getPrototypeOf(e);
function ls(e, n, r = !1, o = !1) {
  e = e.__v_raw;
  const u = ut(e), f = ut(n);
  r || (Sn(n, f) && jt(u, "get", n), jt(u, "get", f));
  const { has: h } = zs(u), d = o ? Qa : r ? iu : eu;
  if (h.call(u, n))
    return d(e.get(n));
  if (h.call(u, f))
    return d(e.get(f));
  e !== u && e.get(n);
}
function fs(e, n = !1) {
  const r = this.__v_raw, o = ut(r), u = ut(e);
  return n || (Sn(e, u) && jt(o, "has", e), jt(o, "has", u)), e === u ? r.has(e) : r.has(e) || r.has(u);
}
function hs(e, n = !1) {
  return e = e.__v_raw, !n && jt(ut(e), "iterate", Fi), Reflect.get(e, "size", e);
}
function vh(e) {
  e = ut(e);
  const n = ut(this);
  return zs(n).has.call(n, e) || (n.add(e), vi(n, "add", e, e)), this;
}
function mh(e, n) {
  n = ut(n);
  const r = ut(this), { has: o, get: u } = zs(r);
  let f = o.call(r, e);
  f ? process.env.NODE_ENV !== "production" && Tc(r, o, e) : (e = ut(e), f = o.call(r, e));
  const h = u.call(r, e);
  return r.set(e, n), f ? Sn(n, h) && vi(r, "set", e, n, h) : vi(r, "add", e, n), this;
}
function yh(e) {
  const n = ut(this), { has: r, get: o } = zs(n);
  let u = r.call(n, e);
  u ? process.env.NODE_ENV !== "production" && Tc(n, r, e) : (e = ut(e), u = r.call(n, e));
  const f = o ? o.call(n, e) : void 0, h = n.delete(e);
  return u && vi(n, "delete", e, void 0, f), h;
}
function Sh() {
  const e = ut(this), n = e.size !== 0, r = process.env.NODE_ENV !== "production" ? dn(e) ? new Map(e) : new Set(e) : void 0, o = e.clear();
  return n && vi(e, "clear", void 0, void 0, r), o;
}
function cs(e, n) {
  return function(o, u) {
    const f = this, h = f.__v_raw, d = ut(h), v = n ? Qa : e ? iu : eu;
    return !e && jt(d, "iterate", Fi), h.forEach((w, x) => o.call(u, v(w), v(x), f));
  };
}
function _s(e, n, r) {
  return function(...o) {
    const u = this.__v_raw, f = ut(u), h = dn(f), d = e === "entries" || e === Symbol.iterator && h, v = e === "keys" && h, w = u[e](...o), x = r ? Qa : n ? iu : eu;
    return !n && jt(
      f,
      "iterate",
      v ? Wa : Fi
    ), {
      // iterator protocol
      next() {
        const { value: S, done: N } = w.next();
        return N ? { value: S, done: N } : {
          value: d ? [x(S[0]), x(S[1])] : x(S),
          done: N
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ci(e) {
  return function(...n) {
    if (process.env.NODE_ENV !== "production") {
      const r = n[0] ? `on key "${n[0]}" ` : "";
      console.warn(
        `${Dw(e)} operation ${r}failed: target is readonly.`,
        ut(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function $w() {
  const e = {
    get(f) {
      return ls(this, f);
    },
    get size() {
      return hs(this);
    },
    has: fs,
    add: vh,
    set: mh,
    delete: yh,
    clear: Sh,
    forEach: cs(!1, !1)
  }, n = {
    get(f) {
      return ls(this, f, !1, !0);
    },
    get size() {
      return hs(this);
    },
    has: fs,
    add: vh,
    set: mh,
    delete: yh,
    clear: Sh,
    forEach: cs(!1, !0)
  }, r = {
    get(f) {
      return ls(this, f, !0);
    },
    get size() {
      return hs(this, !0);
    },
    has(f) {
      return fs.call(this, f, !0);
    },
    add: ci("add"),
    set: ci("set"),
    delete: ci("delete"),
    clear: ci("clear"),
    forEach: cs(!0, !1)
  }, o = {
    get(f) {
      return ls(this, f, !0, !0);
    },
    get size() {
      return hs(this, !0);
    },
    has(f) {
      return fs.call(this, f, !0);
    },
    add: ci("add"),
    set: ci("set"),
    delete: ci("delete"),
    clear: ci("clear"),
    forEach: cs(!0, !0)
  };
  return ["keys", "values", "entries", Symbol.iterator].forEach((f) => {
    e[f] = _s(
      f,
      !1,
      !1
    ), r[f] = _s(
      f,
      !0,
      !1
    ), n[f] = _s(
      f,
      !1,
      !0
    ), o[f] = _s(
      f,
      !0,
      !0
    );
  }), [
    e,
    r,
    n,
    o
  ];
}
const [
  zw,
  Kw,
  Zw,
  Jw
] = /* @__PURE__ */ $w();
function ja(e, n) {
  const r = n ? e ? Jw : Zw : e ? Kw : zw;
  return (o, u, f) => u === "__v_isReactive" ? !e : u === "__v_isReadonly" ? e : u === "__v_raw" ? o : Reflect.get(
    Tt(r, u) && u in o ? r : o,
    u,
    f
  );
}
const Qw = {
  get: /* @__PURE__ */ ja(!1, !1)
}, jw = {
  get: /* @__PURE__ */ ja(!0, !1)
}, tE = {
  get: /* @__PURE__ */ ja(!0, !0)
};
function Tc(e, n, r) {
  const o = ut(r);
  if (o !== r && n.call(e, o)) {
    const u = yc(e);
    console.warn(
      `Reactive ${u} contains both the raw and reactive versions of the same object${u === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Dc = /* @__PURE__ */ new WeakMap(), eE = /* @__PURE__ */ new WeakMap(), Rc = /* @__PURE__ */ new WeakMap(), bc = /* @__PURE__ */ new WeakMap();
function iE(e) {
  switch (e) {
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
function nE(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : iE(yc(e));
}
function Oc(e) {
  return Xi(e) ? e : tu(
    e,
    !1,
    kw,
    Qw,
    Dc
  );
}
function Lc(e) {
  return tu(
    e,
    !0,
    qw,
    jw,
    Rc
  );
}
function ds(e) {
  return tu(
    e,
    !0,
    Uw,
    tE,
    bc
  );
}
function tu(e, n, r, o, u) {
  if (!Ut(e))
    return process.env.NODE_ENV !== "production" && console.warn(`value cannot be made reactive: ${String(e)}`), e;
  if (e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const f = u.get(e);
  if (f)
    return f;
  const h = nE(e);
  if (h === 0)
    return e;
  const d = new Proxy(
    e,
    h === 2 ? o : r
  );
  return u.set(e, d), d;
}
function Hi(e) {
  return Xi(e) ? Hi(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Xi(e) {
  return !!(e && e.__v_isReadonly);
}
function pn(e) {
  return !!(e && e.__v_isShallow);
}
function Fa(e) {
  return Hi(e) || Xi(e);
}
function ut(e) {
  const n = e && e.__v_raw;
  return n ? ut(n) : e;
}
function rE(e) {
  return Object.isExtensible(e) && Rw(e, "__v_skip", !0), e;
}
const eu = (e) => Ut(e) ? Oc(e) : e, iu = (e) => Ut(e) ? Lc(e) : e;
function ye(e) {
  return !!(e && e.__v_isRef === !0);
}
function sE(e) {
  return ye(e) ? e.value : e;
}
const oE = {
  get: (e, n, r) => sE(Reflect.get(e, n, r)),
  set: (e, n, r, o) => {
    const u = e[n];
    return ye(u) && !ye(r) ? (u.value = r, !0) : Reflect.set(e, n, r, o);
  }
};
function aE(e) {
  return Hi(e) ? e : new Proxy(e, oE);
}
/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Yi = [];
function uE(e) {
  Yi.push(e);
}
function lE() {
  Yi.pop();
}
function wt(e, ...n) {
  za();
  const r = Yi.length ? Yi[Yi.length - 1].component : null, o = r && r.appContext.config.warnHandler, u = fE();
  if (o)
    Vi(
      o,
      r,
      11,
      [
        e + n.join(""),
        r && r.proxy,
        u.map(
          ({ vnode: f }) => `at <${Zc(r, f.type)}>`
        ).join(`
`),
        u
      ]
    );
  else {
    const f = [`[Vue warn]: ${e}`, ...n];
    u.length && f.push(`
`, ...hE(u)), console.warn(...f);
  }
  Ka();
}
function fE() {
  let e = Yi[Yi.length - 1];
  if (!e)
    return [];
  const n = [];
  for (; e; ) {
    const r = n[0];
    r && r.vnode === e ? r.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return n;
}
function hE(e) {
  const n = [];
  return e.forEach((r, o) => {
    n.push(...o === 0 ? [] : [`
`], ...cE(r));
  }), n;
}
function cE({ vnode: e, recurseCount: n }) {
  const r = n > 0 ? `... (${n} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, u = ` at <${Zc(
    e.component,
    e.type,
    o
  )}`, f = ">" + r;
  return e.props ? [u, ..._E(e.props), f] : [u + f];
}
function _E(e) {
  const n = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((o) => {
    n.push(...Cc(o, e[o]));
  }), r.length > 3 && n.push(" ..."), n;
}
function Cc(e, n, r) {
  return me(n) ? (n = JSON.stringify(n), r ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? r ? n : [`${e}=${n}`] : ye(n) ? (n = Cc(e, ut(n.value), !0), r ? n : [`${e}=Ref<`, n, ">"]) : Pt(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = ut(n), r ? n : [`${e}=`, n]);
}
const Nc = {
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
function Vi(e, n, r, o) {
  try {
    return o ? e(...o) : e();
  } catch (u) {
    nu(u, n, r);
  }
}
function ms(e, n, r, o) {
  if (Pt(e)) {
    const f = Vi(e, n, r, o);
    return f && xw(f) && f.catch((h) => {
      nu(h, n, r);
    }), f;
  }
  const u = [];
  for (let f = 0; f < e.length; f++)
    u.push(ms(e[f], n, r, o));
  return u;
}
function nu(e, n, r, o = !0) {
  const u = n ? n.vnode : null;
  if (n) {
    let f = n.parent;
    const h = n.proxy, d = process.env.NODE_ENV !== "production" ? Nc[r] : `https://vuejs.org/error-reference/#runtime-${r}`;
    for (; f; ) {
      const w = f.ec;
      if (w) {
        for (let x = 0; x < w.length; x++)
          if (w[x](e, h, d) === !1)
            return;
      }
      f = f.parent;
    }
    const v = n.appContext.config.errorHandler;
    if (v) {
      Vi(
        v,
        null,
        10,
        [e, h, d]
      );
      return;
    }
  }
  dE(e, r, u, o);
}
function dE(e, n, r, o = !0) {
  if (process.env.NODE_ENV !== "production") {
    const u = Nc[n];
    if (r && uE(r), wt(`Unhandled error${u ? ` during execution of ${u}` : ""}`), r && lE(), o)
      throw e;
    console.error(e);
  } else
    console.error(e);
}
let Cs = !1, Ha = !1;
const be = [];
let di = 0;
const gn = [];
let Qe = null, _i = 0;
const Pc = /* @__PURE__ */ Promise.resolve();
let ru = null;
const pE = 100;
function gE(e) {
  const n = ru || Pc;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function vE(e) {
  let n = di + 1, r = be.length;
  for (; n < r; ) {
    const o = n + r >>> 1, u = be[o], f = or(u);
    f < e || f === e && u.pre ? n = o + 1 : r = o;
  }
  return n;
}
function su(e) {
  (!be.length || !be.includes(
    e,
    Cs && e.allowRecurse ? di + 1 : di
  )) && (e.id == null ? be.push(e) : be.splice(vE(e.id), 0, e), Mc());
}
function Mc() {
  !Cs && !Ha && (Ha = !0, ru = Pc.then(Fc));
}
function Wc(e) {
  pt(e) ? gn.push(...e) : (!Qe || !Qe.includes(
    e,
    e.allowRecurse ? _i + 1 : _i
  )) && gn.push(e), Mc();
}
function mE(e) {
  if (gn.length) {
    const n = [...new Set(gn)].sort(
      (r, o) => or(r) - or(o)
    );
    if (gn.length = 0, Qe) {
      Qe.push(...n);
      return;
    }
    for (Qe = n, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), _i = 0; _i < Qe.length; _i++)
      process.env.NODE_ENV !== "production" && Hc(e, Qe[_i]) || Qe[_i]();
    Qe = null, _i = 0;
  }
}
const or = (e) => e.id == null ? 1 / 0 : e.id, yE = (e, n) => {
  const r = or(e) - or(n);
  if (r === 0) {
    if (e.pre && !n.pre)
      return -1;
    if (n.pre && !e.pre)
      return 1;
  }
  return r;
};
function Fc(e) {
  Ha = !1, Cs = !0, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), be.sort(yE);
  const n = process.env.NODE_ENV !== "production" ? (r) => Hc(e, r) : hn;
  try {
    for (di = 0; di < be.length; di++) {
      const r = be[di];
      if (r && r.active !== !1) {
        if (process.env.NODE_ENV !== "production" && n(r))
          continue;
        Vi(r, null, 14);
      }
    }
  } finally {
    di = 0, be.length = 0, mE(e), Cs = !1, ru = null, (be.length || gn.length) && Fc(e);
  }
}
function Hc(e, n) {
  if (!e.has(n))
    e.set(n, 1);
  else {
    const r = e.get(n);
    if (r > pE) {
      const o = n.ownerInstance, u = o && Kc(o.type);
      return nu(
        `Maximum recursive updates exceeded${u ? ` in component <${u}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      e.set(n, r + 1);
  }
}
const Un = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (Sc().__VUE_HMR_RUNTIME__ = {
  createRecord: Ia(SE),
  rerender: Ia(wE),
  reload: Ia(EE)
});
const Ns = /* @__PURE__ */ new Map();
function SE(e, n) {
  return Ns.has(e) ? !1 : (Ns.set(e, {
    initialDef: Zn(n),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Zn(e) {
  return Jc(e) ? e.__vccOpts : e;
}
function wE(e, n) {
  const r = Ns.get(e);
  r && (r.initialDef.render = n, [...r.instances].forEach((o) => {
    n && (o.render = n, Zn(o.type).render = n), o.renderCache = [], o.effect.dirty = !0, o.update();
  }));
}
function EE(e, n) {
  const r = Ns.get(e);
  if (!r)
    return;
  n = Zn(n), wh(r.initialDef, n);
  const o = [...r.instances];
  for (const u of o) {
    const f = Zn(u.type);
    Un.has(f) || (f !== r.initialDef && wh(f, n), Un.add(f)), u.appContext.propsCache.delete(u.type), u.appContext.emitsCache.delete(u.type), u.appContext.optionsCache.delete(u.type), u.ceReload ? (Un.add(f), u.ceReload(n.styles), Un.delete(f)) : u.parent ? (u.parent.effect.dirty = !0, su(u.parent.update)) : u.appContext.reload ? u.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Wc(() => {
    for (const u of o)
      Un.delete(
        Zn(u.type)
      );
  });
}
function wh(e, n) {
  Ce(e, n);
  for (const r in e)
    r !== "__file" && !(r in n) && delete e[r];
}
function Ia(e) {
  return (n, r) => {
    try {
      return e(n, r);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let fn, ps = [];
function Yc(e, n) {
  var r, o;
  fn = e, fn ? (fn.enabled = !0, ps.forEach(({ event: u, args: f }) => fn.emit(u, ...f)), ps = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  !((o = (r = window.navigator) == null ? void 0 : r.userAgent) != null && o.includes("jsdom")) ? ((n.__VUE_DEVTOOLS_HOOK_REPLAY__ = n.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((f) => {
    Yc(f, n);
  }), setTimeout(() => {
    fn || (n.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ps = []);
  }, 3e3)) : ps = [];
}
let oe = null, xE = null;
const AE = Symbol.for("v-ndc"), IE = (e) => e.__isSuspense;
function TE(e, n) {
  n && n.pendingBranch ? pt(e) ? n.effects.push(...e) : n.effects.push(e) : Wc(e);
}
const DE = Symbol.for("v-scx"), RE = () => {
  {
    const e = BE(DE);
    return e || process.env.NODE_ENV !== "production" && wt(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
}, gs = {};
function bE(e, n, {
  immediate: r,
  deep: o,
  flush: u,
  once: f,
  onTrack: h,
  onTrigger: d
} = He) {
  if (n && f) {
    const Y = n;
    n = (...ot) => {
      Y(...ot), G();
    };
  }
  process.env.NODE_ENV !== "production" && o !== void 0 && typeof o == "number" && wt(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !n && (r !== void 0 && wt(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && wt(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), f !== void 0 && wt(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const v = (Y) => {
    wt(
      "Invalid watch source: ",
      Y,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, w = Ks, x = (Y) => o === !0 ? Y : (
    // for deep: false, only traverse root-level properties
    cn(Y, o === !1 ? 1 : void 0)
  );
  let S, N = !1, P = !1;
  if (ye(e) ? (S = () => e.value, N = pn(e)) : Hi(e) ? (S = () => x(e), N = !0) : pt(e) ? (P = !0, N = e.some((Y) => Hi(Y) || pn(Y)), S = () => e.map((Y) => {
    if (ye(Y))
      return Y.value;
    if (Hi(Y))
      return x(Y);
    if (Pt(Y))
      return Vi(Y, w, 2);
    process.env.NODE_ENV !== "production" && v(Y);
  })) : Pt(e) ? n ? S = () => Vi(e, w, 2) : S = () => (F && F(), ms(
    e,
    w,
    3,
    [I]
  )) : (S = hn, process.env.NODE_ENV !== "production" && v(e)), n && o) {
    const Y = S;
    S = () => cn(Y());
  }
  let F, I = (Y) => {
    F = C.onStop = () => {
      Vi(Y, w, 4), F = C.onStop = void 0;
    };
  }, A;
  if (zc)
    if (I = hn, n ? r && ms(n, w, 3, [
      S(),
      P ? [] : void 0,
      I
    ]) : S(), u === "sync") {
      const Y = RE();
      A = Y.__watcherHandles || (Y.__watcherHandles = []);
    } else
      return hn;
  let M = P ? new Array(e.length).fill(gs) : gs;
  const L = () => {
    if (!(!C.active || !C.dirty))
      if (n) {
        const Y = C.run();
        (o || N || (P ? Y.some((ot, ct) => Sn(ot, M[ct])) : Sn(Y, M))) && (F && F(), ms(n, w, 3, [
          Y,
          // pass undefined as the old value when it's changed for the first time
          M === gs ? void 0 : P && M[0] === gs ? [] : M,
          I
        ]), M = Y);
      } else
        C.run();
  };
  L.allowRecurse = !!n;
  let W;
  u === "sync" ? W = L : u === "post" ? W = () => Dh(L, w && w.suspense) : (L.pre = !0, w && (L.id = w.uid), W = () => su(L));
  const C = new Mw(S, hn, W), G = () => {
    C.stop();
  };
  return process.env.NODE_ENV !== "production" && (C.onTrack = h, C.onTrigger = d), n ? r ? L() : M = C.run() : u === "post" ? Dh(
    C.run.bind(C),
    w && w.suspense
  ) : C.run(), A && A.push(G), G;
}
function OE(e, n, r) {
  const o = this.proxy, u = me(e) ? e.includes(".") ? LE(o, e) : () => o[e] : e.bind(o, o);
  let f;
  Pt(n) ? f = n : (f = n.handler, r = n);
  const h = ZE(this), d = bE(u, f.bind(o), r);
  return h(), d;
}
function LE(e, n) {
  const r = n.split(".");
  return () => {
    let o = e;
    for (let u = 0; u < r.length && o; u++)
      o = o[r[u]];
    return o;
  };
}
function cn(e, n, r = 0, o) {
  if (!Ut(e) || e.__v_skip)
    return e;
  if (n && n > 0) {
    if (r >= n)
      return e;
    r++;
  }
  if (o = o || /* @__PURE__ */ new Set(), o.has(e))
    return e;
  if (o.add(e), ye(e))
    cn(e.value, n, r, o);
  else if (pt(e))
    for (let u = 0; u < e.length; u++)
      cn(e[u], n, r, o);
  else if (Ew(e) || dn(e))
    e.forEach((u) => {
      cn(u, n, r, o);
    });
  else if (Iw(e))
    for (const u in e)
      cn(e[u], n, r, o);
  return e;
}
const CE = (e) => !!e.type.__asyncLoader;
function NE(e, n, r, o) {
  let u;
  const f = r && r[o];
  if (pt(e) || me(e)) {
    u = new Array(e.length);
    for (let h = 0, d = e.length; h < d; h++)
      u[h] = n(e[h], h, void 0, f && f[h]);
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && wt(`The v-for range expect an integer value but got ${e}.`), u = new Array(e);
    for (let h = 0; h < e; h++)
      u[h] = n(h + 1, h, void 0, f && f[h]);
  } else if (Ut(e))
    if (e[Symbol.iterator])
      u = Array.from(
        e,
        (h, d) => n(h, d, void 0, f && f[d])
      );
    else {
      const h = Object.keys(e);
      u = new Array(h.length);
      for (let d = 0, v = h.length; d < v; d++) {
        const w = h[d];
        u[d] = n(e[w], w, d, f && f[d]);
      }
    }
  else
    u = [];
  return r && (r[o] = u), u;
}
function PE(e, n, r = {}, o, u) {
  if (oe.isCE || oe.parent && CE(oe.parent) && oe.parent.isCE)
    return n !== "default" && (r.name = n), au("slot", r, o && o());
  let f = e[n];
  process.env.NODE_ENV !== "production" && f && f.length > 1 && (wt(
    "SSR-optimized slot function detected in a non-SSR-optimized render function. You need to mark this component with $dynamic-slots in the parent template."
  ), f = () => []), f && f._c && (f._d = !1), Ss();
  const h = f && Vc(f(r)), d = qE(
    lr,
    {
      key: r.key || // slot content array of a dynamic conditional slot may have a branch
      // key attached in the `createSlots` helper, respect that
      h && h.key || `_${n}`
    },
    h || (o ? o() : []),
    h && e._ === 1 ? 64 : -2
  );
  return !u && d.scopeId && (d.slotScopeIds = [d.scopeId + "-s"]), f && f._c && (f._d = !0), d;
}
function Vc(e) {
  return e.some((n) => Xc(n) ? !(n.type === Bc || n.type === lr && !Vc(n.children)) : !0) ? e : null;
}
const Ya = (e) => e ? JE(e) ? QE(e) || e.proxy : Ya(e.parent) : null, Jn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ce(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ds(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ds(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ds(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ds(e.refs) : e.refs,
    $parent: (e) => Ya(e.parent),
    $root: (e) => Ya(e.root),
    $emit: (e) => e.emit,
    $options: (e) => FE(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      e.effect.dirty = !0, su(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gE.bind(e.proxy)),
    $watch: (e) => OE.bind(e)
  })
), ME = (e) => e === "_" || e === "$", Ta = (e, n) => e !== He && !e.__isScriptSetup && Tt(e, n), WE = {
  get({ _: e }, n) {
    const { ctx: r, setupState: o, data: u, props: f, accessCache: h, type: d, appContext: v } = e;
    if (process.env.NODE_ENV !== "production" && n === "__isVue")
      return !0;
    let w;
    if (n[0] !== "$") {
      const P = h[n];
      if (P !== void 0)
        switch (P) {
          case 1:
            return o[n];
          case 2:
            return u[n];
          case 4:
            return r[n];
          case 3:
            return f[n];
        }
      else {
        if (Ta(o, n))
          return h[n] = 1, o[n];
        if (u !== He && Tt(u, n))
          return h[n] = 2, u[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (w = e.propsOptions[0]) && Tt(w, n)
        )
          return h[n] = 3, f[n];
        if (r !== He && Tt(r, n))
          return h[n] = 4, r[n];
        h[n] = 0;
      }
    }
    const x = Jn[n];
    let S, N;
    if (x)
      return n === "$attrs" ? (jt(e, "get", n), process.env.NODE_ENV !== "production" && void 0) : process.env.NODE_ENV !== "production" && n === "$slots" && jt(e, "get", n), x(e);
    if (
      // css module (injected by vue-loader)
      (S = d.__cssModules) && (S = S[n])
    )
      return S;
    if (r !== He && Tt(r, n))
      return h[n] = 4, r[n];
    if (
      // global properties
      N = v.config.globalProperties, Tt(N, n)
    )
      return N[n];
    process.env.NODE_ENV !== "production" && oe && (!me(n) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    n.indexOf("__v") !== 0) && (u !== He && ME(n[0]) && Tt(u, n) ? wt(
      `Property ${JSON.stringify(
        n
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === oe && wt(
      `Property ${JSON.stringify(n)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, n, r) {
    const { data: o, setupState: u, ctx: f } = e;
    return Ta(u, n) ? (u[n] = r, !0) : process.env.NODE_ENV !== "production" && u.__isScriptSetup && Tt(u, n) ? (wt(`Cannot mutate <script setup> binding "${n}" from Options API.`), !1) : o !== He && Tt(o, n) ? (o[n] = r, !0) : Tt(e.props, n) ? (process.env.NODE_ENV !== "production" && wt(`Attempting to mutate prop "${n}". Props are readonly.`), !1) : n[0] === "$" && n.slice(1) in e ? (process.env.NODE_ENV !== "production" && wt(
      `Attempting to mutate public property "${n}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && n in e.appContext.config.globalProperties ? Object.defineProperty(f, n, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : f[n] = r, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: r, ctx: o, appContext: u, propsOptions: f }
  }, h) {
    let d;
    return !!r[h] || e !== He && Tt(e, h) || Ta(n, h) || (d = f[0]) && Tt(d, h) || Tt(o, h) || Tt(Jn, h) || Tt(u.config.globalProperties, h);
  },
  defineProperty(e, n, r) {
    return r.get != null ? e._.accessCache[n] = 0 : Tt(r, "value") && this.set(e, n, r.value, null), Reflect.defineProperty(e, n, r);
  }
};
process.env.NODE_ENV !== "production" && (WE.ownKeys = (e) => (wt(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Eh(e) {
  return pt(e) ? e.reduce(
    (n, r) => (n[r] = null, n),
    {}
  ) : e;
}
function FE(e) {
  const n = e.type, { mixins: r, extends: o } = n, {
    mixins: u,
    optionsCache: f,
    config: { optionMergeStrategies: h }
  } = e.appContext, d = f.get(n);
  let v;
  return d ? v = d : !u.length && !r && !o ? v = n : (v = {}, u.length && u.forEach(
    (w) => Ps(v, w, h, !0)
  ), Ps(v, n, h)), Ut(n) && f.set(n, v), v;
}
function Ps(e, n, r, o = !1) {
  const { mixins: u, extends: f } = n;
  f && Ps(e, f, r, !0), u && u.forEach(
    (h) => Ps(e, h, r, !0)
  );
  for (const h in n)
    if (o && h === "expose")
      process.env.NODE_ENV !== "production" && wt(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const d = HE[h] || r && r[h];
      e[h] = d ? d(e[h], n[h]) : n[h];
    }
  return e;
}
const HE = {
  data: xh,
  props: Ih,
  emits: Ih,
  // objects
  methods: $n,
  computed: $n,
  // lifecycle
  beforeCreate: qt,
  created: qt,
  beforeMount: qt,
  mounted: qt,
  beforeUpdate: qt,
  updated: qt,
  beforeDestroy: qt,
  beforeUnmount: qt,
  destroyed: qt,
  unmounted: qt,
  activated: qt,
  deactivated: qt,
  errorCaptured: qt,
  serverPrefetch: qt,
  // assets
  components: $n,
  directives: $n,
  // watch
  watch: VE,
  // provide / inject
  provide: xh,
  inject: YE
};
function xh(e, n) {
  return n ? e ? function() {
    return Ce(
      Pt(e) ? e.call(this, this) : e,
      Pt(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function YE(e, n) {
  return $n(Ah(e), Ah(n));
}
function Ah(e) {
  if (pt(e)) {
    const n = {};
    for (let r = 0; r < e.length; r++)
      n[e[r]] = e[r];
    return n;
  }
  return e;
}
function qt(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function $n(e, n) {
  return e ? Ce(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Ih(e, n) {
  return e ? pt(e) && pt(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : Ce(
    /* @__PURE__ */ Object.create(null),
    Eh(e),
    Eh(n ?? {})
  ) : n;
}
function VE(e, n) {
  if (!e)
    return n;
  if (!n)
    return e;
  const r = Ce(/* @__PURE__ */ Object.create(null), e);
  for (const o in n)
    r[o] = qt(e[o], n[o]);
  return r;
}
let Th = null;
function BE(e, n, r = !1) {
  const o = Ks || oe;
  if (o || Th) {
    const u = o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : Th._context.provides;
    if (u && e in u)
      return u[e];
    if (arguments.length > 1)
      return r && Pt(n) ? n.call(o && o.proxy) : n;
    process.env.NODE_ENV !== "production" && wt(`injection "${String(e)}" not found.`);
  } else
    process.env.NODE_ENV !== "production" && wt("inject() can only be used inside setup() or functional components.");
}
const Dh = TE, GE = (e) => e.__isTeleport, lr = Symbol.for("v-fgt"), XE = Symbol.for("v-txt"), Bc = Symbol.for("v-cmt"), ys = [];
let Oe = null;
function Ss(e = !1) {
  ys.push(Oe = e ? null : []);
}
function kE() {
  ys.pop(), Oe = ys[ys.length - 1] || null;
}
function Gc(e) {
  return e.dynamicChildren = Oe || yw, kE(), Oe && Oe.push(e), e;
}
function Da(e, n, r, o, u, f) {
  return Gc(
    ou(
      e,
      n,
      r,
      o,
      u,
      f,
      !0
    )
  );
}
function qE(e, n, r, o, u) {
  return Gc(
    au(
      e,
      n,
      r,
      o,
      u,
      !0
    )
  );
}
function Xc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
const UE = (...e) => Uc(
  ...e
), kc = "__vInternal", qc = ({ key: e }) => e ?? null, ws = ({
  ref: e,
  ref_key: n,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || ye(e) || Pt(e) ? { i: oe, r: e, k: n, f: !!r } : e : null);
function ou(e, n = null, r = null, o = 0, u = null, f = e === lr ? 0 : 1, h = !1, d = !1) {
  const v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && qc(n),
    ref: n && ws(n),
    scopeId: xE,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: f,
    patchFlag: o,
    dynamicProps: u,
    dynamicChildren: null,
    appContext: null,
    ctx: oe
  };
  return d ? (uu(v, r), f & 128 && e.normalize(v)) : r && (v.shapeFlag |= me(r) ? 8 : 16), process.env.NODE_ENV !== "production" && v.key !== v.key && wt("VNode created with invalid key (NaN). VNode type:", v.type), // avoid a block node from tracking itself
  !h && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (v.patchFlag > 0 || f & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  v.patchFlag !== 32 && Oe.push(v), v;
}
const au = process.env.NODE_ENV !== "production" ? UE : Uc;
function Uc(e, n = null, r = null, o = 0, u = null, f = !1) {
  if ((!e || e === AE) && (process.env.NODE_ENV !== "production" && !e && wt(`Invalid vnode type when creating vnode: ${e}.`), e = Bc), Xc(e)) {
    const d = Ms(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return r && uu(d, r), !f && Oe && (d.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = d : Oe.push(d)), d.patchFlag |= -2, d;
  }
  if (Jc(e) && (e = e.__vccOpts), n) {
    n = $E(n);
    let { class: d, style: v } = n;
    d && !me(d) && (n.class = $s(d)), Ut(v) && (Fa(v) && !pt(v) && (v = Ce({}, v)), n.style = Us(v));
  }
  const h = me(e) ? 1 : IE(e) ? 128 : GE(e) ? 64 : Ut(e) ? 4 : Pt(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && h & 4 && Fa(e) && (e = ut(e), wt(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), ou(
    e,
    n,
    r,
    o,
    u,
    h,
    f,
    !0
  );
}
function $E(e) {
  return e ? Fa(e) || kc in e ? Ce({}, e) : e : null;
}
function Ms(e, n, r = !1) {
  const { props: o, ref: u, patchFlag: f, children: h } = e, d = n ? KE(o || {}, n) : o;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && qc(d),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && u ? pt(u) ? u.concat(ws(n)) : [u, ws(n)] : ws(n)
    ) : u,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && f === -1 && pt(h) ? h.map($c) : h,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: n && e.type !== lr ? f === -1 ? 16 : f | 16 : f,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Ms(e.ssContent),
    ssFallback: e.ssFallback && Ms(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
}
function $c(e) {
  const n = Ms(e);
  return pt(e.children) && (n.children = e.children.map($c)), n;
}
function zE(e = " ", n = 0) {
  return au(XE, null, e, n);
}
function uu(e, n) {
  let r = 0;
  const { shapeFlag: o } = e;
  if (n == null)
    n = null;
  else if (pt(n))
    r = 16;
  else if (typeof n == "object")
    if (o & 65) {
      const u = n.default;
      u && (u._c && (u._d = !1), uu(e, u()), u._c && (u._d = !0));
      return;
    } else {
      r = 32;
      const u = n._;
      !u && !(kc in n) ? n._ctx = oe : u === 3 && oe && (oe.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else
    Pt(n) ? (n = { default: n, _ctx: oe }, r = 32) : (n = String(n), o & 64 ? (r = 16, n = [zE(n)]) : r = 8);
  e.children = n, e.shapeFlag |= r;
}
function KE(...e) {
  const n = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (const u in o)
      if (u === "class")
        n.class !== o.class && (n.class = $s([n.class, o.class]));
      else if (u === "style")
        n.style = Us([n.style, o.style]);
      else if (Sw(u)) {
        const f = n[u], h = o[u];
        h && f !== h && !(pt(f) && f.includes(h)) && (n[u] = f ? [].concat(f, h) : h);
      } else
        u !== "" && (n[u] = o[u]);
  }
  return n;
}
let Ks = null, Va;
{
  const e = Sc(), n = (r, o) => {
    let u;
    return (u = e[r]) || (u = e[r] = []), u.push(o), (f) => {
      u.length > 1 ? u.forEach((h) => h(f)) : u[0](f);
    };
  };
  Va = n(
    "__VUE_INSTANCE_SETTERS__",
    (r) => Ks = r
  ), n(
    "__VUE_SSR_SETTERS__",
    (r) => zc = r
  );
}
const ZE = (e) => {
  const n = Ks;
  return Va(e), e.scope.on(), () => {
    e.scope.off(), Va(n);
  };
};
function JE(e) {
  return e.vnode.shapeFlag & 4;
}
let zc = !1;
function QE(e) {
  if (e.exposed)
    return e.exposeProxy || (e.exposeProxy = new Proxy(aE(rE(e.exposed)), {
      get(n, r) {
        if (r in n)
          return n[r];
        if (r in Jn)
          return Jn[r](e);
      },
      has(n, r) {
        return r in n || r in Jn;
      }
    }));
}
const jE = /(?:^|[-_])(\w)/g, t1 = (e) => e.replace(jE, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Kc(e, n = !0) {
  return Pt(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Zc(e, n, r = !1) {
  let o = Kc(n);
  if (!o && n.__file) {
    const u = n.__file.match(/([^/\\]+)\.\w+$/);
    u && (o = u[1]);
  }
  if (!o && e && e.parent) {
    const u = (f) => {
      for (const h in f)
        if (f[h] === n)
          return h;
    };
    o = u(
      e.components || e.parent.type.components
    ) || u(e.appContext.components);
  }
  return o ? t1(o) : r ? "App" : "Anonymous";
}
function Jc(e) {
  return Pt(e) && "__vccOpts" in e;
}
function e1() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, n = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, u = {
    header(S) {
      return Ut(S) ? S.__isVue ? ["div", e, "VueInstance"] : ye(S) ? [
        "div",
        {},
        ["span", e, x(S)],
        "<",
        d(S.value),
        ">"
      ] : Hi(S) ? [
        "div",
        {},
        ["span", e, pn(S) ? "ShallowReactive" : "Reactive"],
        "<",
        d(S),
        `>${Xi(S) ? " (readonly)" : ""}`
      ] : Xi(S) ? [
        "div",
        {},
        ["span", e, pn(S) ? "ShallowReadonly" : "Readonly"],
        "<",
        d(S),
        ">"
      ] : null : null;
    },
    hasBody(S) {
      return S && S.__isVue;
    },
    body(S) {
      if (S && S.__isVue)
        return [
          "div",
          {},
          ...f(S.$)
        ];
    }
  };
  function f(S) {
    const N = [];
    S.type.props && S.props && N.push(h("props", ut(S.props))), S.setupState !== He && N.push(h("setup", S.setupState)), S.data !== He && N.push(h("data", ut(S.data)));
    const P = v(S, "computed");
    P && N.push(h("computed", P));
    const F = v(S, "inject");
    return F && N.push(h("injected", F)), N.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: S }]
    ]), N;
  }
  function h(S, N) {
    return N = Ce({}, N), Object.keys(N).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        S
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(N).map((P) => [
          "div",
          {},
          ["span", o, P + ": "],
          d(N[P], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function d(S, N = !0) {
    return typeof S == "number" ? ["span", n, S] : typeof S == "string" ? ["span", r, JSON.stringify(S)] : typeof S == "boolean" ? ["span", o, S] : Ut(S) ? ["object", { object: N ? ut(S) : S }] : ["span", r, String(S)];
  }
  function v(S, N) {
    const P = S.type;
    if (Pt(P))
      return;
    const F = {};
    for (const I in S.ctx)
      w(P, I, N) && (F[I] = S.ctx[I]);
    return F;
  }
  function w(S, N, P) {
    const F = S[P];
    if (pt(F) && F.includes(N) || Ut(F) && N in F || S.extends && w(S.extends, N, P) || S.mixins && S.mixins.some((I) => w(I, N, P)))
      return !0;
  }
  function x(S) {
    return pn(S) ? "ShallowRef" : S.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(u) : window.devtoolsFormatters = [u];
}
process.env.NODE_ENV;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* vue v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function i1() {
  e1();
}
process.env.NODE_ENV !== "production" && i1();
const n1 = (e, n) => {
  const r = e.__vccOpts || e;
  for (const [o, u] of n)
    r[o] = u;
  return r;
}, r1 = {
  name: "Vuuri",
  props: {
    /**
     * Optional class name to add to the grid. If not, one will be provided
     */
    className: {
      type: String,
      required: !1,
      default: () => `class${Aa().replace(/-/g, "")}`
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
      default: () => fh.key
    },
    /**
     * Callback to fetch a dynamic width based on item
     */
    getItemWidth: {
      type: Function,
      required: !1,
      default: () => hh.width
    },
    /**
     * Callback to fetch a dynamic height based on item
     */
    getItemHeight: {
      type: Function,
      required: !1,
      default: () => hh.height
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
      default: vw.select
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
      handler(e) {
        this.internallySet || this._sync(e, this.copiedItems);
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
      this.muuri = new K(this.selector, this.muuriOptions), this.groupId && ge.addGrid(this.groupId, this.muuri), this.groupIds && ge.addGridToGroups(this.groupIds, this.muuri), this.observer = new ResizeObserver(() => {
        this._resizeOnLoad();
      }), this.observer.observe(this.$refs.muuri), this._sync(this.modelValue, []), this.$nextTick(() => {
        ge.setItemsForGridId(this.gridKey, this.modelValue);
      });
    },
    /**
     * @private
     */
    _setupNonReactiveProps() {
      this.muuri = void 0, this.observer = void 0, this.gridKey = Aa().replace(/-/g, "");
    },
    /**
     * Creates the options object for Muuri
     * @private
     */
    _setupOptions() {
      if (this.dragEnabled && (this.muuriOptions = { ...this._generateDragOptions(), ...this.muuriOptions }), this.groupId || this.groupIds) {
        let e = [];
        this.groupId && e.push(this.groupId), this.groupIds && (e = e.concat(this.groupIds)), this.muuriOptions.dragSort = () => ge.getGrids(e);
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
          createElement(e) {
            return e.getElement().cloneNode(!0);
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
      Object.values(Pi).forEach((e) => {
        this.events[e] = (...n) => {
          this.$emit(e, ...n);
        }, this.muuri.on(e, this.events[e]), e === Pi.dragStart && this.muuri.on(e, this._onDragStart), e === Pi.send && this.muuri.on(e, this._onItemSend), e === Pi.receive && this.muuri.on(e, this._onItemReceive), e === Pi.move && this.muuri.on(e, this._onItemMove), e === Pi.dragEnd && this.muuri.on(e, this._onDragEnd);
      });
    },
    /**
     * Unregister Muuri events
     * @private
     */
    _unregisterEvents() {
      Object.values(Pi).forEach((e) => {
        this.muuri.off(e, this.events[e]), delete this.events[e];
      });
    },
    /**
     * Listener when dragging begins
     * @type {Muuri.Item} item
     * @private
     */
    _onDragStart(e) {
      ge.setDraggingGridItem(e);
    },
    /**
     * Listener when item moves within the same grid
     * @type {Muuri.Item} item
     * @private
     */
    _onItemMove({ item: e }) {
      const n = this._reOrderWithItem(e);
      this._emitValue(n);
    },
    /**
     * Listener when item leaves its original grid
     * @type {Muuri.Item} item
     * @private
     */
    _onItemSend({ item: e }) {
      const n = this.modelValue.findIndex((o) => o[this.itemKey] == e.getElement().dataset.itemKey), r = this.modelValue.splice(n, 1)[0];
      ge.setDraggingItem(r), this._emitValue(this.modelValue);
    },
    /**
     * Listener when item enters a new grid
     * @private
     */
    _onItemReceive() {
      const e = ge.getDraggingItem();
      this.modelValue.push(e);
      const n = this._reOrderWithItem(ge.getDraggingGridItem());
      this._emitValue(n);
    },
    /**
     * Listener when dragging ends
     */
    _onDragEnd() {
      ge.setDraggingGridItem(null), ge.setDraggingItem(null);
    },
    /**
     * Makes sure the items order is updated with value
     * @type {Muuri.Item} item
     * @private
     */
    _reOrderWithItem(e) {
      const n = e.getGrid();
      let r = 0;
      const o = n.getItems().reduce((u, f) => (u[f.getElement().dataset.itemKey] = r, r += 1, u), {});
      return this.modelValue.reduce((u, f) => (u[o[f[this.itemKey]]] = f, u), []);
    },
    /**
     * Styles for each grid item
     * @private
     */
    _getItemStyles(e) {
      return {
        width: this.getItemWidth(e),
        height: this.getItemHeight(e)
      };
    },
    /**
     * Creates a unique identifier for the item based its property values
     * and adds a uuid
     * @param item
     * @returns {string}
     * @private
     */
    _generateItemKey(e) {
      e._$muuri_id = Aa();
    },
    /**
     * Callback used to resize the muuri grid
     * @private
     */
    _resizeOnLoad: Bf.debounce(function() {
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
    _getDiff(e, n) {
      return Bf.differenceWith(e, n, (r, o) => r[this.itemKey] === o[this.itemKey]);
    },
    /**
     * Apply items updates on muuri
     * @param {?Array<*>} newItems
     * @param {?Array<*>} oldItems
     * @private
     */
    _sync(e = null, n = null) {
      !e || !n || this._remove(e, n).then(() => {
        this.update(), this._add(e, n), ge.setItemsForGridId(this.gridKey, this.copiedItems);
      });
    },
    /**
     * Remove deleted items from muuri
     * @param {Array<*>}  newItems
     * @param {Array<*>}  oldItems
     * @returns {Promise<void>}
     * @private
     */
    _remove(e, n) {
      const r = this._getDiff(n, e);
      if (!r.length)
        return Promise.resolve();
      const o = [];
      return r.forEach((u) => {
        const f = this.muuri.getItems().find((h) => u[this.itemKey] + "" === h.getElement().dataset.itemKey);
        f && o.push(f);
      }), o.length ? new Promise((u) => {
        this.muuri.hide(o, {
          onFinish: () => {
            this.muuri.remove(o), r.forEach((f) => {
              const h = this.copiedItems.findIndex((d) => d.id === f.id);
              this.copiedItems.splice(h, 1);
            }), u();
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
    _add(e, n) {
      let r = this._getDiff(e, n);
      r = this._getDiff(r, this.copiedItems), r.length && (this.itemKey === fh.key && r.forEach((o) => this._generateItemKey(o)), this.copiedItems = this.copiedItems.concat(r), this.$nextTick(() => {
        r.forEach((o) => {
          const u = document.querySelector(`${this.selector} [data-item-key="${o[this.itemKey]}"]`);
          this.muuri.add(u, {
            layout: !1,
            active: !1
          });
        }), this.muuri.filter(() => !0);
      }));
    },
    _emitValue(e) {
      this.internallySet = !0, this.$emit("input", e), this.$nextTick(() => {
        this.internallySet = !1, ge.setItemsForGridId(this.gridKey, this.modelValue);
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
}, s1 = ["data-grid-key"], o1 = ["data-item-key"], a1 = { class: "muuri-item-content" };
function u1(e, n, r, o, u, f) {
  return Ss(), Da("div", {
    ref: "muuri",
    class: $s(["muuri-grid", r.className]),
    "data-grid-key": e.gridKey,
    "test-id": "muuri-grid-container"
  }, [
    (Ss(!0), Da(lr, null, NE(u.copiedItems, (h) => (Ss(), Da("div", {
      key: h[r.itemKey],
      style: Us(f._getItemStyles(h)),
      class: "muuri-item",
      "data-item-key": h[r.itemKey],
      "test-id": "muuri-grid-item"
    }, [
      ou("div", a1, [
        PE(e.$slots, "item", { item: h }, void 0, !0)
      ])
    ], 12, o1))), 128))
  ], 10, s1);
}
const l1 = /* @__PURE__ */ n1(r1, [["render", u1], ["__scopeId", "data-v-26051b99"]]);
export {
  Pi as GridEvent,
  l1 as default
};
