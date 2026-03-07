"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9109],
  {
    89245: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var r = n(2265),
        i = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92 290 92 102.3 279.5 102 511.5 101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1 1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 00-10.1 4.8c-1.8 5-3.8 10-5.9 14.9-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 01655.9 829c-42.3 17.9-87.4 27-133.8 27-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 01279 755.2a342.16 342.16 0 01-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4 31.6-31.6 68.4-56.4 109.3-73.8 42.3-17.9 87.4-27 133.8-27 46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 01109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z",
                },
              },
            ],
          },
          name: "reload",
          theme: "outlined",
        },
        o = n(55015);
      function a() {
        return (a = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var l = r.forwardRef((e, t) =>
        r.createElement(o.Z, a({}, e, { ref: t, icon: i }))
      );
    },
    9109: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return q;
        },
      });
      var r = n(2265),
        i = n(29062);
      function o(e, t) {
        var n =
          ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (!n) {
          if (
            Array.isArray(e) ||
            (n = (0, i.Z)(e)) ||
            (t && e && "number" == typeof e.length)
          ) {
            n && (e = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= e.length
                  ? { done: !0 }
                  : { done: !1, value: e[r++] };
              },
              e: function (e) {
                throw e;
              },
              f: o,
            };
          }
          throw TypeError(
            "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
          );
        }
        var a,
          l = !0,
          s = !1;
        return {
          s: function () {
            n = n.call(e);
          },
          n: function () {
            var e = n.next();
            return (l = e.done), e;
          },
          e: function (e) {
            (s = !0), (a = e);
          },
          f: function () {
            try {
              l || null == n.return || n.return();
            } finally {
              if (s) throw a;
            }
          },
        };
      }
      var a = n(76405),
        l = n(25049),
        s = n(11993);
      function u(e, t, n) {
        if (t < 0 || t > 31 || e >>> t != 0)
          throw RangeError("Value out of range");
        for (var r = t - 1; r >= 0; r--) n.push((e >>> r) & 1);
      }
      function c(e, t) {
        return ((e >>> t) & 1) != 0;
      }
      function h(e) {
        if (!e) throw Error("Assertion error");
      }
      var d = (function () {
        function e(t, n) {
          (0, a.Z)(this, e),
            (0, s.Z)(this, "modeBits", void 0),
            (0, s.Z)(this, "numBitsCharCount", void 0),
            (this.modeBits = t),
            (this.numBitsCharCount = n);
        }
        return (
          (0, l.Z)(e, [
            {
              key: "numCharCountBits",
              value: function (e) {
                return this.numBitsCharCount[Math.floor((e + 7) / 17)];
              },
            },
          ]),
          e
        );
      })();
      (0, s.Z)(d, "NUMERIC", new d(1, [10, 12, 14])),
        (0, s.Z)(d, "ALPHANUMERIC", new d(2, [9, 11, 13])),
        (0, s.Z)(d, "BYTE", new d(4, [8, 16, 16])),
        (0, s.Z)(d, "KANJI", new d(8, [8, 10, 12])),
        (0, s.Z)(d, "ECI", new d(7, [0, 0, 0]));
      var f = (0, l.Z)(function e(t, n) {
        (0, a.Z)(this, e),
          (0, s.Z)(this, "ordinal", void 0),
          (0, s.Z)(this, "formatBits", void 0),
          (this.ordinal = t),
          (this.formatBits = n);
      });
      (0, s.Z)(f, "LOW", new f(0, 1)),
        (0, s.Z)(f, "MEDIUM", new f(1, 0)),
        (0, s.Z)(f, "QUARTILE", new f(2, 3)),
        (0, s.Z)(f, "HIGH", new f(3, 2));
      var v = (function () {
        function e(t, n, r) {
          if (
            ((0, a.Z)(this, e),
            (0, s.Z)(this, "mode", void 0),
            (0, s.Z)(this, "numChars", void 0),
            (0, s.Z)(this, "bitData", void 0),
            (this.mode = t),
            (this.numChars = n),
            (this.bitData = r),
            n < 0)
          )
            throw RangeError("Invalid argument");
          this.bitData = r.slice();
        }
        return (
          (0, l.Z)(
            e,
            [
              {
                key: "getData",
                value: function () {
                  return this.bitData.slice();
                },
              },
            ],
            [
              {
                key: "makeBytes",
                value: function (t) {
                  var n,
                    r = [],
                    i = o(t);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var a = n.value;
                      u(a, 8, r);
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                  return new e(d.BYTE, t.length, r);
                },
              },
              {
                key: "makeNumeric",
                value: function (t) {
                  if (!e.isNumeric(t))
                    throw RangeError("String contains non-numeric characters");
                  for (var n = [], r = 0; r < t.length; ) {
                    var i = Math.min(t.length - r, 3);
                    u(parseInt(t.substring(r, r + i), 10), 3 * i + 1, n),
                      (r += i);
                  }
                  return new e(d.NUMERIC, t.length, n);
                },
              },
              {
                key: "makeAlphanumeric",
                value: function (t) {
                  if (!e.isAlphanumeric(t))
                    throw RangeError(
                      "String contains unencodable characters in alphanumeric mode"
                    );
                  var n,
                    r = [];
                  for (n = 0; n + 2 <= t.length; n += 2) {
                    var i = 45 * e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n));
                    u(
                      (i += e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n + 1))),
                      11,
                      r
                    );
                  }
                  return (
                    n < t.length &&
                      u(e.ALPHANUMERIC_CHARSET.indexOf(t.charAt(n)), 6, r),
                    new e(d.ALPHANUMERIC, t.length, r)
                  );
                },
              },
              {
                key: "makeSegments",
                value: function (t) {
                  return "" == t
                    ? []
                    : e.isNumeric(t)
                    ? [e.makeNumeric(t)]
                    : e.isAlphanumeric(t)
                    ? [e.makeAlphanumeric(t)]
                    : [e.makeBytes(e.toUtf8ByteArray(t))];
                },
              },
              {
                key: "makeEci",
                value: function (t) {
                  var n = [];
                  if (t < 0)
                    throw RangeError("ECI assignment value out of range");
                  if (t < 128) u(t, 8, n);
                  else if (t < 16384) u(2, 2, n), u(t, 14, n);
                  else if (t < 1e6) u(6, 3, n), u(t, 21, n);
                  else throw RangeError("ECI assignment value out of range");
                  return new e(d.ECI, 0, n);
                },
              },
              {
                key: "isNumeric",
                value: function (t) {
                  return e.NUMERIC_REGEX.test(t);
                },
              },
              {
                key: "isAlphanumeric",
                value: function (t) {
                  return e.ALPHANUMERIC_REGEX.test(t);
                },
              },
              {
                key: "getTotalBits",
                value: function (e, t) {
                  var n,
                    r = 0,
                    i = o(e);
                  try {
                    for (i.s(); !(n = i.n()).done; ) {
                      var a = n.value,
                        l = a.mode.numCharCountBits(t);
                      if (a.numChars >= 1 << l) return 1 / 0;
                      r += 4 + l + a.bitData.length;
                    }
                  } catch (e) {
                    i.e(e);
                  } finally {
                    i.f();
                  }
                  return r;
                },
              },
              {
                key: "toUtf8ByteArray",
                value: function (e) {
                  for (var t = encodeURI(e), n = [], r = 0; r < t.length; r++)
                    "%" != t.charAt(r)
                      ? n.push(t.charCodeAt(r))
                      : (n.push(parseInt(t.substring(r + 1, r + 3), 16)),
                        (r += 2));
                  return n;
                },
              },
            ]
          ),
          e
        );
      })();
      (0, s.Z)(v, "NUMERIC_REGEX", /^[0-9]*$/),
        (0, s.Z)(v, "ALPHANUMERIC_REGEX", /^[A-Z0-9 $%*+.\/:-]*$/),
        (0, s.Z)(
          v,
          "ALPHANUMERIC_CHARSET",
          "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"
        );
      var g = (function () {
        function e(t, n, r, i) {
          (0, a.Z)(this, e),
            (0, s.Z)(this, "size", void 0),
            (0, s.Z)(this, "mask", void 0),
            (0, s.Z)(this, "modules", []),
            (0, s.Z)(this, "isFunction", []),
            (0, s.Z)(this, "version", void 0),
            (0, s.Z)(this, "errorCorrectionLevel", void 0);
          var o = i;
          if (
            ((this.version = t),
            (this.errorCorrectionLevel = n),
            t < e.MIN_VERSION || t > e.MAX_VERSION)
          )
            throw RangeError("Version value out of range");
          if (o < -1 || o > 7) throw RangeError("Mask value out of range");
          this.size = 4 * t + 17;
          for (var l = [], u = 0; u < this.size; u++) l.push(!1);
          for (var c = 0; c < this.size; c++)
            this.modules.push(l.slice()), this.isFunction.push(l.slice());
          this.drawFunctionPatterns();
          var d = this.addEccAndInterleave(r);
          if ((this.drawCodewords(d), -1 == o))
            for (var f = 1e9, v = 0; v < 8; v++) {
              this.applyMask(v), this.drawFormatBits(v);
              var g = this.getPenaltyScore();
              g < f && ((o = v), (f = g)), this.applyMask(v);
            }
          h(0 <= o && o <= 7),
            (this.mask = o),
            this.applyMask(o),
            this.drawFormatBits(o),
            (this.isFunction = []);
        }
        return (
          (0, l.Z)(
            e,
            [
              {
                key: "getModule",
                value: function (e, t) {
                  return (
                    0 <= e &&
                    e < this.size &&
                    0 <= t &&
                    t < this.size &&
                    this.modules[t][e]
                  );
                },
              },
              {
                key: "getModules",
                value: function () {
                  return this.modules;
                },
              },
              {
                key: "drawFunctionPatterns",
                value: function () {
                  for (var e = 0; e < this.size; e++)
                    this.setFunctionModule(6, e, e % 2 == 0),
                      this.setFunctionModule(e, 6, e % 2 == 0);
                  this.drawFinderPattern(3, 3),
                    this.drawFinderPattern(this.size - 4, 3),
                    this.drawFinderPattern(3, this.size - 4);
                  for (
                    var t = this.getAlignmentPatternPositions(),
                      n = t.length,
                      r = 0;
                    r < n;
                    r++
                  )
                    for (var i = 0; i < n; i++)
                      (0 == r && 0 == i) ||
                        (0 == r && i == n - 1) ||
                        (r == n - 1 && 0 == i) ||
                        this.drawAlignmentPattern(t[r], t[i]);
                  this.drawFormatBits(0), this.drawVersion();
                },
              },
              {
                key: "drawFormatBits",
                value: function (e) {
                  for (
                    var t = (this.errorCorrectionLevel.formatBits << 3) | e,
                      n = t,
                      r = 0;
                    r < 10;
                    r++
                  )
                    n = (n << 1) ^ ((n >>> 9) * 1335);
                  var i = ((t << 10) | n) ^ 21522;
                  h(i >>> 15 == 0);
                  for (var o = 0; o <= 5; o++)
                    this.setFunctionModule(8, o, c(i, o));
                  this.setFunctionModule(8, 7, c(i, 6)),
                    this.setFunctionModule(8, 8, c(i, 7)),
                    this.setFunctionModule(7, 8, c(i, 8));
                  for (var a = 9; a < 15; a++)
                    this.setFunctionModule(14 - a, 8, c(i, a));
                  for (var l = 0; l < 8; l++)
                    this.setFunctionModule(this.size - 1 - l, 8, c(i, l));
                  for (var s = 8; s < 15; s++)
                    this.setFunctionModule(8, this.size - 15 + s, c(i, s));
                  this.setFunctionModule(8, this.size - 8, !0);
                },
              },
              {
                key: "drawVersion",
                value: function () {
                  if (!(this.version < 7)) {
                    for (var e = this.version, t = 0; t < 12; t++)
                      e = (e << 1) ^ ((e >>> 11) * 7973);
                    var n = (this.version << 12) | e;
                    h(n >>> 18 == 0);
                    for (var r = 0; r < 18; r++) {
                      var i = c(n, r),
                        o = this.size - 11 + (r % 3),
                        a = Math.floor(r / 3);
                      this.setFunctionModule(o, a, i),
                        this.setFunctionModule(a, o, i);
                    }
                  }
                },
              },
              {
                key: "drawFinderPattern",
                value: function (e, t) {
                  for (var n = -4; n <= 4; n++)
                    for (var r = -4; r <= 4; r++) {
                      var i = Math.max(Math.abs(r), Math.abs(n)),
                        o = e + r,
                        a = t + n;
                      0 <= o &&
                        o < this.size &&
                        0 <= a &&
                        a < this.size &&
                        this.setFunctionModule(o, a, 2 != i && 4 != i);
                    }
                },
              },
              {
                key: "drawAlignmentPattern",
                value: function (e, t) {
                  for (var n = -2; n <= 2; n++)
                    for (var r = -2; r <= 2; r++)
                      this.setFunctionModule(
                        e + r,
                        t + n,
                        1 != Math.max(Math.abs(r), Math.abs(n))
                      );
                },
              },
              {
                key: "setFunctionModule",
                value: function (e, t, n) {
                  (this.modules[t][e] = n), (this.isFunction[t][e] = !0);
                },
              },
              {
                key: "addEccAndInterleave",
                value: function (t) {
                  var n = this.version,
                    r = this.errorCorrectionLevel;
                  if (t.length != e.getNumDataCodewords(n, r))
                    throw RangeError("Invalid argument");
                  for (
                    var i = e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],
                      o = e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],
                      a = Math.floor(e.getNumRawDataModules(n) / 8),
                      l = i - (a % i),
                      s = Math.floor(a / i),
                      u = [],
                      c = e.reedSolomonComputeDivisor(o),
                      d = 0,
                      f = 0;
                    d < i;
                    d++
                  ) {
                    var v = t.slice(f, f + s - o + (d < l ? 0 : 1));
                    f += v.length;
                    var g = e.reedSolomonComputeRemainder(v, c);
                    d < l && v.push(0), u.push(v.concat(g));
                  }
                  for (
                    var m = [],
                      y = function (e) {
                        u.forEach(function (t, n) {
                          (e != s - o || n >= l) && m.push(t[e]);
                        });
                      },
                      E = 0;
                    E < u[0].length;
                    E++
                  )
                    y(E);
                  return h(m.length == a), m;
                },
              },
              {
                key: "drawCodewords",
                value: function (t) {
                  if (
                    t.length !=
                    Math.floor(e.getNumRawDataModules(this.version) / 8)
                  )
                    throw RangeError("Invalid argument");
                  for (var n = 0, r = this.size - 1; r >= 1; r -= 2) {
                    6 == r && (r = 5);
                    for (var i = 0; i < this.size; i++)
                      for (var o = 0; o < 2; o++) {
                        var a = r - o,
                          l = ((r + 1) & 2) == 0 ? this.size - 1 - i : i;
                        !this.isFunction[l][a] &&
                          n < 8 * t.length &&
                          ((this.modules[l][a] = c(t[n >>> 3], 7 - (7 & n))),
                          n++);
                      }
                  }
                  h(n == 8 * t.length);
                },
              },
              {
                key: "applyMask",
                value: function (e) {
                  if (e < 0 || e > 7)
                    throw RangeError("Mask value out of range");
                  for (var t = 0; t < this.size; t++)
                    for (var n = 0; n < this.size; n++) {
                      var r = void 0;
                      switch (e) {
                        case 0:
                          r = (n + t) % 2 == 0;
                          break;
                        case 1:
                          r = t % 2 == 0;
                          break;
                        case 2:
                          r = n % 3 == 0;
                          break;
                        case 3:
                          r = (n + t) % 3 == 0;
                          break;
                        case 4:
                          r = (Math.floor(n / 3) + Math.floor(t / 2)) % 2 == 0;
                          break;
                        case 5:
                          r = ((n * t) % 2) + ((n * t) % 3) == 0;
                          break;
                        case 6:
                          r = (((n * t) % 2) + ((n * t) % 3)) % 2 == 0;
                          break;
                        case 7:
                          r = (((n + t) % 2) + ((n * t) % 3)) % 2 == 0;
                          break;
                        default:
                          throw Error("Unreachable");
                      }
                      !this.isFunction[t][n] &&
                        r &&
                        (this.modules[t][n] = !this.modules[t][n]);
                    }
                },
              },
              {
                key: "getPenaltyScore",
                value: function () {
                  for (var t = 0, n = 0; n < this.size; n++) {
                    for (
                      var r = !1, i = 0, a = [0, 0, 0, 0, 0, 0, 0], l = 0;
                      l < this.size;
                      l++
                    )
                      this.modules[n][l] == r
                        ? 5 == ++i
                          ? (t += e.PENALTY_N1)
                          : i > 5 && t++
                        : (this.finderPenaltyAddHistory(i, a),
                          r ||
                            (t +=
                              this.finderPenaltyCountPatterns(a) *
                              e.PENALTY_N3),
                          (r = this.modules[n][l]),
                          (i = 1));
                    t +=
                      this.finderPenaltyTerminateAndCount(r, i, a) *
                      e.PENALTY_N3;
                  }
                  for (var s = 0; s < this.size; s++) {
                    for (
                      var u = !1, c = 0, d = [0, 0, 0, 0, 0, 0, 0], f = 0;
                      f < this.size;
                      f++
                    )
                      this.modules[f][s] == u
                        ? 5 == ++c
                          ? (t += e.PENALTY_N1)
                          : c > 5 && t++
                        : (this.finderPenaltyAddHistory(c, d),
                          u ||
                            (t +=
                              this.finderPenaltyCountPatterns(d) *
                              e.PENALTY_N3),
                          (u = this.modules[f][s]),
                          (c = 1));
                    t +=
                      this.finderPenaltyTerminateAndCount(u, c, d) *
                      e.PENALTY_N3;
                  }
                  for (var v = 0; v < this.size - 1; v++)
                    for (var g = 0; g < this.size - 1; g++) {
                      var m = this.modules[v][g];
                      m == this.modules[v][g + 1] &&
                        m == this.modules[v + 1][g] &&
                        m == this.modules[v + 1][g + 1] &&
                        (t += e.PENALTY_N2);
                    }
                  var y,
                    E = 0,
                    C = o(this.modules);
                  try {
                    for (C.s(); !(y = C.n()).done; )
                      E = y.value.reduce(function (e, t) {
                        return e + (t ? 1 : 0);
                      }, E);
                  } catch (e) {
                    C.e(e);
                  } finally {
                    C.f();
                  }
                  var p = this.size * this.size,
                    M = Math.ceil(Math.abs(20 * E - 10 * p) / p) - 1;
                  return (
                    h(0 <= M && M <= 9),
                    h(0 <= (t += M * e.PENALTY_N4) && t <= 2568888),
                    t
                  );
                },
              },
              {
                key: "getAlignmentPatternPositions",
                value: function () {
                  if (1 == this.version) return [];
                  for (
                    var e = Math.floor(this.version / 7) + 2,
                      t =
                        32 == this.version
                          ? 26
                          : 2 * Math.ceil((4 * this.version + 4) / (2 * e - 2)),
                      n = [6],
                      r = this.size - 7;
                    n.length < e;
                    r -= t
                  )
                    n.splice(1, 0, r);
                  return n;
                },
              },
              {
                key: "finderPenaltyCountPatterns",
                value: function (e) {
                  var t = e[1];
                  h(t <= 3 * this.size);
                  var n =
                    t > 0 &&
                    e[2] == t &&
                    e[3] == 3 * t &&
                    e[4] == t &&
                    e[5] == t;
                  return (
                    (n && e[0] >= 4 * t && e[6] >= t ? 1 : 0) +
                    (n && e[6] >= 4 * t && e[0] >= t ? 1 : 0)
                  );
                },
              },
              {
                key: "finderPenaltyTerminateAndCount",
                value: function (e, t, n) {
                  var r = t;
                  return (
                    e && (this.finderPenaltyAddHistory(r, n), (r = 0)),
                    (r += this.size),
                    this.finderPenaltyAddHistory(r, n),
                    this.finderPenaltyCountPatterns(n)
                  );
                },
              },
              {
                key: "finderPenaltyAddHistory",
                value: function (e, t) {
                  var n = e;
                  0 == t[0] && (n += this.size), t.pop(), t.unshift(n);
                },
              },
            ],
            [
              {
                key: "encodeText",
                value: function (t, n) {
                  var r = v.makeSegments(t);
                  return e.encodeSegments(r, n);
                },
              },
              {
                key: "encodeBinary",
                value: function (t, n) {
                  var r = v.makeBytes(t);
                  return e.encodeSegments([r], n);
                },
              },
              {
                key: "encodeSegments",
                value: function (t, n) {
                  var r =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : 1,
                    i =
                      arguments.length > 3 && void 0 !== arguments[3]
                        ? arguments[3]
                        : 40,
                    a =
                      arguments.length > 4 && void 0 !== arguments[4]
                        ? arguments[4]
                        : -1,
                    l =
                      !(arguments.length > 5) ||
                      void 0 === arguments[5] ||
                      arguments[5];
                  if (
                    !(e.MIN_VERSION <= r && r <= i && i <= e.MAX_VERSION) ||
                    a < -1 ||
                    a > 7
                  )
                    throw RangeError("Invalid value");
                  for (E = r; ; E++) {
                    var s = 8 * e.getNumDataCodewords(E, n),
                      c = v.getTotalBits(t, E);
                    if (c <= s) {
                      C = c;
                      break;
                    }
                    if (E >= i) throw RangeError("Data too long");
                  }
                  for (
                    var d = n, g = 0, m = [f.MEDIUM, f.QUARTILE, f.HIGH];
                    g < m.length;
                    g++
                  ) {
                    var y = m[g];
                    l && C <= 8 * e.getNumDataCodewords(E, y) && (d = y);
                  }
                  var E,
                    C,
                    p,
                    M = [],
                    w = o(t);
                  try {
                    for (w.s(); !(p = w.n()).done; ) {
                      var R = p.value;
                      u(R.mode.modeBits, 4, M),
                        u(R.numChars, R.mode.numCharCountBits(E), M);
                      var k,
                        A = o(R.getData());
                      try {
                        for (A.s(); !(k = A.n()).done; ) {
                          var N = k.value;
                          M.push(N);
                        }
                      } catch (e) {
                        A.e(e);
                      } finally {
                        A.f();
                      }
                    }
                  } catch (e) {
                    w.e(e);
                  } finally {
                    w.f();
                  }
                  h(M.length == C);
                  var b = 8 * e.getNumDataCodewords(E, d);
                  h(M.length <= b),
                    u(0, Math.min(4, b - M.length), M),
                    u(0, (8 - (M.length % 8)) % 8, M),
                    h(M.length % 8 == 0);
                  for (var S = 236; M.length < b; S ^= 253) u(S, 8, M);
                  for (var I = []; 8 * I.length < M.length; ) I.push(0);
                  return (
                    M.forEach(function (e, t) {
                      I[t >>> 3] |= e << (7 - (7 & t));
                    }),
                    new e(E, d, I, a)
                  );
                },
              },
              {
                key: "getNumRawDataModules",
                value: function (t) {
                  if (t < e.MIN_VERSION || t > e.MAX_VERSION)
                    throw RangeError("Version number out of range");
                  var n = (16 * t + 128) * t + 64;
                  if (t >= 2) {
                    var r = Math.floor(t / 7) + 2;
                    (n -= (25 * r - 10) * r - 55), t >= 7 && (n -= 36);
                  }
                  return h(208 <= n && n <= 29648), n;
                },
              },
              {
                key: "getNumDataCodewords",
                value: function (t, n) {
                  return (
                    Math.floor(e.getNumRawDataModules(t) / 8) -
                    e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t] *
                      e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]
                  );
                },
              },
              {
                key: "reedSolomonComputeDivisor",
                value: function (t) {
                  if (t < 1 || t > 255) throw RangeError("Degree out of range");
                  for (var n = [], r = 0; r < t - 1; r++) n.push(0);
                  n.push(1);
                  for (var i = 1, o = 0; o < t; o++) {
                    for (var a = 0; a < n.length; a++)
                      (n[a] = e.reedSolomonMultiply(n[a], i)),
                        a + 1 < n.length && (n[a] ^= n[a + 1]);
                    i = e.reedSolomonMultiply(i, 2);
                  }
                  return n;
                },
              },
              {
                key: "reedSolomonComputeRemainder",
                value: function (t, n) {
                  var r,
                    i = n.map(function () {
                      return 0;
                    }),
                    a = o(t);
                  try {
                    for (a.s(); !(r = a.n()).done; )
                      !(function () {
                        var t = r.value ^ i.shift();
                        i.push(0),
                          n.forEach(function (n, r) {
                            i[r] ^= e.reedSolomonMultiply(n, t);
                          });
                      })();
                  } catch (e) {
                    a.e(e);
                  } finally {
                    a.f();
                  }
                  return i;
                },
              },
              {
                key: "reedSolomonMultiply",
                value: function (e, t) {
                  if (e >>> 8 != 0 || t >>> 8 != 0)
                    throw RangeError("Byte out of range");
                  for (var n = 0, r = 7; r >= 0; r--)
                    n = (n << 1) ^ ((n >>> 7) * 285) ^ (((t >>> r) & 1) * e);
                  return h(n >>> 8 == 0), n;
                },
              },
            ]
          ),
          e
        );
      })();
      (0, s.Z)(g, "MIN_VERSION", 1),
        (0, s.Z)(g, "MAX_VERSION", 40),
        (0, s.Z)(g, "PENALTY_N1", 3),
        (0, s.Z)(g, "PENALTY_N2", 3),
        (0, s.Z)(g, "PENALTY_N3", 40),
        (0, s.Z)(g, "PENALTY_N4", 10),
        (0, s.Z)(g, "ECC_CODEWORDS_PER_BLOCK", [
          [
            -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24,
            28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28,
            28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
            28, 28, 28, 28, 28, 28, 28,
          ],
          [
            -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24,
            28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30,
            28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
            30, 30, 30, 30, 30, 30, 30,
          ],
        ]),
        (0, s.Z)(g, "NUM_ERROR_CORRECTION_BLOCKS", [
          [
            -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8,
            9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22,
            24, 25,
          ],
          [
            -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14,
            16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40,
            43, 45, 47, 49,
          ],
          [
            -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21,
            20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56,
            59, 62, 65, 68,
          ],
          [
            -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21,
            25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63,
            66, 70, 74, 77, 81,
          ],
        ]);
      var m = { L: f.LOW, M: f.MEDIUM, Q: f.QUARTILE, H: f.HIGH },
        y = "#FFFFFF",
        E = "#000000",
        C = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            n = [];
          return (
            e.forEach(function (e, r) {
              var i = null;
              e.forEach(function (o, a) {
                if (!o && null !== i) {
                  n.push(
                    "M"
                      .concat(i + t, " ")
                      .concat(r + t, "h")
                      .concat(a - i, "v1H")
                      .concat(i + t, "z")
                  ),
                    (i = null);
                  return;
                }
                if (a === e.length - 1) {
                  if (!o) return;
                  null === i
                    ? n.push(
                        "M"
                          .concat(a + t, ",")
                          .concat(r + t, " h1v1H")
                          .concat(a + t, "z")
                      )
                    : n.push(
                        "M"
                          .concat(i + t, ",")
                          .concat(r + t, " h")
                          .concat(a + 1 - i, "v1H")
                          .concat(i + t, "z")
                      );
                  return;
                }
                o && null === i && (i = a);
              });
            }),
            n.join("")
          );
        },
        p = function (e, t) {
          return e.slice().map(function (e, n) {
            return n < t.y || n >= t.y + t.h
              ? e
              : e.map(function (e, n) {
                  return (n < t.x || n >= t.x + t.w) && e;
                });
          });
        },
        M = function (e, t, n, r) {
          if (null == r) return null;
          var i = e.length + 2 * n,
            o = Math.floor(0.1 * t),
            a = i / t,
            l = (r.width || o) * a,
            s = (r.height || o) * a,
            u = null == r.x ? e.length / 2 - l / 2 : r.x * a,
            c = null == r.y ? e.length / 2 - s / 2 : r.y * a,
            h = null == r.opacity ? 1 : r.opacity,
            d = null;
          if (r.excavate) {
            var f = Math.floor(u),
              v = Math.floor(c);
            d = {
              x: f,
              y: v,
              w: Math.ceil(l + u - f),
              h: Math.ceil(s + c - v),
            };
          }
          return {
            x: u,
            y: c,
            h: s,
            w: l,
            excavation: d,
            opacity: h,
            crossOrigin: r.crossOrigin,
          };
        },
        w = (function () {
          try {
            new Path2D().addPath(new Path2D());
          } catch (e) {
            return !1;
          }
          return !0;
        })(),
        R = n(1119),
        k = n(31686),
        A = n(67673),
        N = n(10902),
        b = n(19103),
        S = function (e) {
          var t = e.value,
            n = e.level,
            i = e.minVersion,
            o = e.includeMargin,
            a = e.marginSize,
            l = e.imageSettings,
            s = e.size,
            u = e.boostLevel,
            c = r.useMemo(
              function () {
                var e = (Array.isArray(t) ? t : [t]).reduce(function (e, t) {
                  return e.push.apply(e, (0, b.Z)(v.makeSegments(t))), e;
                }, []);
                return g.encodeSegments(e, m[n], i, void 0, void 0, u);
              },
              [t, n, i, u]
            );
          return r.useMemo(
            function () {
              var e = c.getModules(),
                t = null != a ? Math.max(Math.floor(a), 0) : o ? 4 : 0,
                n = e.length + 2 * t,
                r = M(e, s, t, l);
              return {
                cells: e,
                margin: t,
                numCells: n,
                calculatedImageSettings: r,
                qrcode: c,
              };
            },
            [c, s, l, o, a]
          );
        },
        I = [
          "value",
          "size",
          "level",
          "bgColor",
          "fgColor",
          "includeMargin",
          "minVersion",
          "marginSize",
          "style",
          "imageSettings",
          "boostLevel",
        ],
        P = r.forwardRef(function (e, t) {
          var n = e.value,
            i = e.size,
            o = void 0 === i ? 128 : i,
            a = e.level,
            l = e.bgColor,
            s = void 0 === l ? y : l,
            u = e.fgColor,
            c = void 0 === u ? E : u,
            h = e.includeMargin,
            d = e.minVersion,
            f = e.marginSize,
            v = e.style,
            g = e.imageSettings,
            m = e.boostLevel,
            M = (0, N.Z)(e, I),
            b = null == g ? void 0 : g.src,
            P = r.useRef(null),
            Z = r.useRef(null),
            O = r.useCallback(
              function (e) {
                (P.current = e),
                  "function" == typeof t ? t(e) : t && (t.current = e);
              },
              [t]
            ),
            z = r.useState(!1),
            _ = (0, A.Z)(z, 2)[1],
            x = S({
              value: n,
              level: void 0 === a ? "L" : a,
              minVersion: void 0 === d ? 1 : d,
              includeMargin: void 0 !== h && h,
              marginSize: f,
              imageSettings: g,
              size: o,
              boostLevel: m,
            }),
            L = x.margin,
            B = x.cells,
            F = x.numCells,
            T = x.calculatedImageSettings;
          r.useEffect(function () {
            if (P.current) {
              var e = P.current,
                t = e.getContext("2d");
              if (t) {
                var n = B,
                  r = Z.current,
                  i =
                    null != T &&
                    null !== r &&
                    r.complete &&
                    0 !== r.naturalHeight &&
                    0 !== r.naturalWidth;
                i && null != T.excavation && (n = p(B, T.excavation));
                var a = window.devicePixelRatio || 1;
                e.height = e.width = o * a;
                var l = (o / F) * a;
                t.scale(l, l),
                  (t.fillStyle = s),
                  t.fillRect(0, 0, F, F),
                  (t.fillStyle = c),
                  w
                    ? t.fill(new Path2D(C(n, L)))
                    : B.forEach(function (e, n) {
                        e.forEach(function (e, r) {
                          e && t.fillRect(r + L, n + L, 1, 1);
                        });
                      }),
                  T && (t.globalAlpha = T.opacity),
                  i && t.drawImage(r, T.x + L, T.y + L, T.w, T.h);
              }
            }
          }),
            r.useEffect(
              function () {
                _(!1);
              },
              [b]
            );
          var D = (0, k.Z)({ height: o, width: o }, v),
            H = null;
          return (
            null != b &&
              (H = r.createElement("img", {
                alt: "QR-Code",
                src: b,
                key: b,
                style: { display: "none" },
                onLoad: function () {
                  _(!0);
                },
                ref: Z,
                crossOrigin: null == T ? void 0 : T.crossOrigin,
              })),
            r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "canvas",
                (0, R.Z)(
                  { style: D, height: o, width: o, ref: O, role: "img" },
                  M
                )
              ),
              H
            )
          );
        }),
        Z = [
          "value",
          "size",
          "level",
          "bgColor",
          "fgColor",
          "includeMargin",
          "minVersion",
          "title",
          "marginSize",
          "imageSettings",
          "boostLevel",
        ],
        O = r.forwardRef(function (e, t) {
          var n = e.value,
            i = e.size,
            o = void 0 === i ? 128 : i,
            a = e.level,
            l = e.bgColor,
            s = e.fgColor,
            u = e.includeMargin,
            c = e.minVersion,
            h = e.title,
            d = e.marginSize,
            f = e.imageSettings,
            v = e.boostLevel,
            g = (0, N.Z)(e, Z),
            m = S({
              value: n,
              level: void 0 === a ? "L" : a,
              minVersion: void 0 === c ? 1 : c,
              includeMargin: void 0 !== u && u,
              marginSize: d,
              imageSettings: f,
              size: o,
              boostLevel: v,
            }),
            M = m.margin,
            w = m.cells,
            k = m.numCells,
            A = m.calculatedImageSettings,
            b = w,
            I = null;
          null != f &&
            null != A &&
            (null != A.excavation && (b = p(w, A.excavation)),
            (I = r.createElement("image", {
              href: f.src,
              height: A.h,
              width: A.w,
              x: A.x + M,
              y: A.y + M,
              preserveAspectRatio: "none",
              opacity: A.opacity,
              crossOrigin: A.crossOrigin,
            })));
          var P = C(b, M);
          return r.createElement(
            "svg",
            (0, R.Z)(
              {
                height: o,
                width: o,
                viewBox: "0 0 ".concat(k, " ").concat(k),
                ref: t,
                role: "img",
              },
              g
            ),
            !!h && r.createElement("title", null, h),
            r.createElement("path", {
              fill: void 0 === l ? y : l,
              d: "M0,0 h".concat(k, "v").concat(k, "H0z"),
              shapeRendering: "crispEdges",
            }),
            r.createElement("path", {
              fill: void 0 === s ? E : s,
              d: P,
              shapeRendering: "crispEdges",
            }),
            I
          );
        }),
        z = n(73627),
        _ = n(87011),
        x = n(61994),
        L = n(80052),
        B = n(71744),
        F = n(55274),
        T = n(84560),
        D = n(89245),
        H = n(82383),
        U = n(48651);
      let V = r.createElement(U.Z, null);
      function Y(e) {
        let {
            prefixCls: t,
            locale: n,
            onRefresh: i,
            statusRender: o,
            status: a,
          } = e,
          l = {
            expired: r.createElement(
              r.Fragment,
              null,
              r.createElement(
                "p",
                { className: "".concat(t, "-expired") },
                null == n ? void 0 : n.expired
              ),
              i &&
                r.createElement(
                  H.Z,
                  {
                    type: "link",
                    icon: r.createElement(D.Z, null),
                    onClick: i,
                  },
                  null == n ? void 0 : n.refresh
                )
            ),
            loading: V,
            scanned: r.createElement(
              "p",
              { className: "".concat(t, "-scanned") },
              null == n ? void 0 : n.scanned
            ),
          };
        return (null != o ? o : (e) => l[e.status])({
          status: a,
          locale: n,
          onRefresh: i,
        });
      }
      var W = n(38775),
        Q = n(13761),
        j = n(12918),
        X = n(99320),
        G = n(19224);
      let K = (e) => {
        let { componentCls: t, lineWidth: n, lineType: r, colorSplit: i } = e;
        return {
          [t]: {
            ...(0, j.Wf)(e),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: e.paddingSM,
            backgroundColor: e.colorWhite,
            borderRadius: e.borderRadiusLG,
            border: ""
              .concat((0, W.bf)(n), " ")
              .concat(r, " ")
              .concat(i),
            position: "relative",
            overflow: "hidden",
            ["& > ".concat(t, "-cover")]: {
              position: "absolute",
              insetBlockStart: 0,
              insetInlineStart: 0,
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              color: e.colorText,
              lineHeight: e.lineHeight,
              background: e.QRCodeCoverBackgroundColor,
              textAlign: "center",
              ["& > ".concat(t, "-expired, & > ").concat(t, "-scanned")]: {
                color: e.QRCodeTextColor,
              },
            },
            "> canvas": { alignSelf: "stretch", flex: "auto", minWidth: 0 },
            "&-icon": { marginBlockEnd: e.marginXS, fontSize: e.controlHeight },
          },
          ["".concat(t, "-borderless")]: {
            borderColor: "transparent",
            padding: 0,
            borderRadius: 0,
          },
        };
      };
      var $ = (0, X.I$)(
          "QRCode",
          (e) => K((0, G.IX)(e, { QRCodeTextColor: e.colorText })),
          (e) => ({
            QRCodeCoverBackgroundColor: new Q.t(e.colorBgContainer)
              .setA(0.96)
              .toRgbString(),
          })
        ),
        q = (e) => {
          var t, n, i, o;
          let [, a] = (0, T.ZP)(),
            {
              value: l,
              type: s = "canvas",
              icon: u = "",
              size: c = 160,
              iconSize: h,
              color: d = a.colorText,
              errorLevel: f = "M",
              status: v = "active",
              bordered: g = !0,
              onRefresh: m,
              style: y,
              className: E,
              rootClassName: C,
              prefixCls: p,
              bgColor: M = "transparent",
              statusRender: w,
              classNames: R,
              styles: k,
              boostLevel: A,
              ...N
            } = e,
            {
              getPrefixCls: b,
              className: S,
              style: I,
              classNames: Z,
              styles: D,
            } = (0, B.dj)("qrcode"),
            H = {
              ...e,
              bgColor: M,
              type: s,
              size: c,
              status: v,
              bordered: g,
              errorLevel: f,
            },
            [U, V] = (0, L.MW)([Z, R], [D, k], { props: H }),
            W = b("qrcode", p),
            [Q, j] = $(W),
            X = {
              src: u,
              x: void 0,
              y: void 0,
              height:
                "number" == typeof h
                  ? h
                  : null !== (t = null == h ? void 0 : h.height) && void 0 !== t
                  ? t
                  : 40,
              width:
                "number" == typeof h
                  ? h
                  : null !== (n = null == h ? void 0 : h.width) && void 0 !== n
                  ? n
                  : 40,
              excavate: !0,
              crossOrigin: "anonymous",
            },
            G = (0, _.Z)(N, !0),
            K = (0, z.CE)(N, Object.keys(G)),
            q = {
              value: l,
              size: c,
              level: f,
              bgColor: M,
              fgColor: d,
              style: {
                width: null == y ? void 0 : y.width,
                height: null == y ? void 0 : y.height,
              },
              imageSettings: u ? X : void 0,
              boostLevel: A,
              ...G,
            },
            [J] = (0, F.Z)("QRCode");
          if (!l) return null;
          let ee = (0, x.W)(W, E, C, Q, j, S, U.root, {
              ["".concat(W, "-borderless")]: !g,
            }),
            et = {
              backgroundColor: M,
              ...V.root,
              ...I,
              ...y,
              width:
                null !== (i = null == y ? void 0 : y.width) && void 0 !== i
                  ? i
                  : c,
              height:
                null !== (o = null == y ? void 0 : y.height) && void 0 !== o
                  ? o
                  : c,
            };
          return r.createElement(
            "div",
            { ...K, className: ee, style: et },
            "active" !== v &&
              r.createElement(
                "div",
                {
                  className: (0, x.W)("".concat(W, "-cover"), U.cover),
                  style: V.cover,
                },
                r.createElement(Y, {
                  prefixCls: W,
                  locale: J,
                  status: v,
                  onRefresh: m,
                  statusRender: w,
                })
              ),
            "canvas" === s
              ? r.createElement(P, { ...q })
              : r.createElement(O, { ...q })
          );
        };
    },
    10902: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      var r = n(74610);
      function i(e, t) {
        if (null == e) return {};
        var n,
          i,
          o = (0, r.Z)(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (i = 0; i < a.length; i++)
            (n = a[i]),
              -1 === t.indexOf(n) &&
                {}.propertyIsEnumerable.call(e, n) &&
                (o[n] = e[n]);
        }
        return o;
      }
    },
    74610: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
    },
  },
]);
