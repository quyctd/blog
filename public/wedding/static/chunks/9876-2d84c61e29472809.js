"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9876],
  {
    22623: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(2265),
        r = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z",
                },
              },
            ],
          },
          name: "minus",
          theme: "outlined",
        },
        a = t(55015);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var o = i.forwardRef((e, n) =>
        i.createElement(a.Z, c({}, e, { ref: n, icon: r }))
      );
    },
    59352: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var i = t(2265),
        r = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z",
                },
              },
            ],
          },
          name: "up",
          theme: "outlined",
        },
        a = t(55015);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      var o = i.forwardRef((e, n) =>
        i.createElement(a.Z, c({}, e, { ref: n, icon: r }))
      );
    },
    33477: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return eo;
        },
      });
      var i = t(2265),
        r = t(96473),
        a = t(22623),
        c = t(70464),
        o = t(59352),
        l = t(76405),
        u = t(25049),
        s = t(11993);
      function d() {
        return "function" == typeof BigInt;
      }
      function f(e) {
        return (!e && 0 !== e && !Number.isNaN(e)) || !String(e).trim();
      }
      function h(e) {
        var n = e.trim(),
          t = n.startsWith("-");
        t && (n = n.slice(1)),
          (n = n
            .replace(/(\.\d*[^0])0*$/, "$1")
            .replace(/\.0*$/, "")
            .replace(/^0+/, "")).startsWith(".") && (n = "0".concat(n));
        var i = n || "0",
          r = i.split("."),
          a = r[0] || "0",
          c = r[1] || "0";
        "0" === a && "0" === c && (t = !1);
        var o = t ? "-" : "";
        return {
          negative: t,
          negativeStr: o,
          trimStr: i,
          integerStr: a,
          decimalStr: c,
          fullStr: "".concat(o).concat(i),
        };
      }
      function m(e) {
        var n = String(e);
        return !Number.isNaN(Number(n)) && n.includes("e");
      }
      function g(e) {
        var n = String(e);
        if (m(e)) {
          var t = Number(n.slice(n.indexOf("e-") + 2)),
            i = n.match(/\.(\d+)/);
          return null != i && i[1] && (t += i[1].length), t;
        }
        return n.includes(".") && b(n) ? n.length - n.indexOf(".") - 1 : 0;
      }
      function p(e) {
        var n = String(e);
        if (m(e)) {
          if (e > Number.MAX_SAFE_INTEGER)
            return String(d() ? BigInt(e).toString() : Number.MAX_SAFE_INTEGER);
          if (e < Number.MIN_SAFE_INTEGER)
            return String(d() ? BigInt(e).toString() : Number.MIN_SAFE_INTEGER);
          n = e.toFixed(g(n));
        }
        return h(n).fullStr;
      }
      function b(e) {
        return "number" == typeof e
          ? !Number.isNaN(e)
          : !!e &&
              (/^\s*-?\d+(\.\d+)?\s*$/.test(e) ||
                /^\s*-?\d+\.\s*$/.test(e) ||
                /^\s*-?\.\d+\s*$/.test(e));
      }
      var v = (function () {
          function e(n) {
            if (
              ((0, l.Z)(this, e),
              (0, s.Z)(this, "origin", ""),
              (0, s.Z)(this, "negative", void 0),
              (0, s.Z)(this, "integer", void 0),
              (0, s.Z)(this, "decimal", void 0),
              (0, s.Z)(this, "decimalLen", void 0),
              (0, s.Z)(this, "empty", void 0),
              (0, s.Z)(this, "nan", void 0),
              f(n))
            ) {
              this.empty = !0;
              return;
            }
            if (((this.origin = String(n)), "-" === n || Number.isNaN(n))) {
              this.nan = !0;
              return;
            }
            var t = n;
            if (
              (m(t) && (t = Number(t)),
              b((t = "string" == typeof t ? t : p(t))))
            ) {
              var i = h(t);
              this.negative = i.negative;
              var r = i.trimStr.split(".");
              this.integer = BigInt(r[0]);
              var a = r[1] || "0";
              (this.decimal = BigInt(a)), (this.decimalLen = a.length);
            } else this.nan = !0;
          }
          return (
            (0, u.Z)(e, [
              {
                key: "getMark",
                value: function () {
                  return this.negative ? "-" : "";
                },
              },
              {
                key: "getIntegerStr",
                value: function () {
                  return this.integer.toString();
                },
              },
              {
                key: "getDecimalStr",
                value: function () {
                  return this.decimal.toString().padStart(this.decimalLen, "0");
                },
              },
              {
                key: "alignDecimal",
                value: function (e) {
                  return BigInt(
                    ""
                      .concat(this.getMark())
                      .concat(this.getIntegerStr())
                      .concat(this.getDecimalStr().padEnd(e, "0"))
                  );
                },
              },
              {
                key: "negate",
                value: function () {
                  var n = new e(this.toString());
                  return (n.negative = !n.negative), n;
                },
              },
              {
                key: "cal",
                value: function (n, t, i) {
                  var r = Math.max(
                      this.getDecimalStr().length,
                      n.getDecimalStr().length
                    ),
                    a = t(this.alignDecimal(r), n.alignDecimal(r)).toString(),
                    c = i(r),
                    o = h(a),
                    l = o.negativeStr,
                    u = o.trimStr,
                    s = "".concat(l).concat(u.padStart(c + 1, "0"));
                  return new e(
                    "".concat(s.slice(0, -c), ".").concat(s.slice(-c))
                  );
                },
              },
              {
                key: "add",
                value: function (n) {
                  if (this.isInvalidate()) return new e(n);
                  var t = new e(n);
                  return t.isInvalidate()
                    ? this
                    : this.cal(
                        t,
                        function (e, n) {
                          return e + n;
                        },
                        function (e) {
                          return e;
                        }
                      );
                },
              },
              {
                key: "multi",
                value: function (n) {
                  var t = new e(n);
                  return this.isInvalidate() || t.isInvalidate()
                    ? new e(NaN)
                    : this.cal(
                        t,
                        function (e, n) {
                          return e * n;
                        },
                        function (e) {
                          return 2 * e;
                        }
                      );
                },
              },
              {
                key: "isEmpty",
                value: function () {
                  return this.empty;
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return this.nan;
                },
              },
              {
                key: "isInvalidate",
                value: function () {
                  return this.isEmpty() || this.isNaN();
                },
              },
              {
                key: "equals",
                value: function (e) {
                  return (
                    this.toString() === (null == e ? void 0 : e.toString())
                  );
                },
              },
              {
                key: "lessEquals",
                value: function (e) {
                  return 0 >= this.add(e.negate().toString()).toNumber();
                },
              },
              {
                key: "toNumber",
                value: function () {
                  return this.isNaN() ? NaN : Number(this.toString());
                },
              },
              {
                key: "toString",
                value: function () {
                  var e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  return e
                    ? this.isInvalidate()
                      ? ""
                      : h(
                          ""
                            .concat(this.getMark())
                            .concat(this.getIntegerStr(), ".")
                            .concat(this.getDecimalStr())
                        ).fullStr
                    : this.origin;
                },
              },
            ]),
            e
          );
        })(),
        S = (function () {
          function e(n) {
            if (
              ((0, l.Z)(this, e),
              (0, s.Z)(this, "origin", ""),
              (0, s.Z)(this, "number", void 0),
              (0, s.Z)(this, "empty", void 0),
              f(n))
            ) {
              this.empty = !0;
              return;
            }
            (this.origin = String(n)), (this.number = Number(n));
          }
          return (
            (0, u.Z)(e, [
              {
                key: "negate",
                value: function () {
                  return new e(-this.toNumber());
                },
              },
              {
                key: "add",
                value: function (n) {
                  if (this.isInvalidate()) return new e(n);
                  var t = Number(n);
                  if (Number.isNaN(t)) return this;
                  var i = this.number + t;
                  if (i > Number.MAX_SAFE_INTEGER)
                    return new e(Number.MAX_SAFE_INTEGER);
                  if (i < Number.MIN_SAFE_INTEGER)
                    return new e(Number.MIN_SAFE_INTEGER);
                  var r = Math.max(g(this.number), g(t));
                  return new e(i.toFixed(r));
                },
              },
              {
                key: "multi",
                value: function (n) {
                  var t = Number(n);
                  if (this.isInvalidate() || Number.isNaN(t)) return new e(NaN);
                  var i = this.number * t;
                  if (i > Number.MAX_SAFE_INTEGER)
                    return new e(Number.MAX_SAFE_INTEGER);
                  if (i < Number.MIN_SAFE_INTEGER)
                    return new e(Number.MIN_SAFE_INTEGER);
                  var r = Math.max(g(this.number), g(t));
                  return new e(i.toFixed(r));
                },
              },
              {
                key: "isEmpty",
                value: function () {
                  return this.empty;
                },
              },
              {
                key: "isNaN",
                value: function () {
                  return Number.isNaN(this.number);
                },
              },
              {
                key: "isInvalidate",
                value: function () {
                  return this.isEmpty() || this.isNaN();
                },
              },
              {
                key: "equals",
                value: function (e) {
                  return (
                    this.toNumber() === (null == e ? void 0 : e.toNumber())
                  );
                },
              },
              {
                key: "lessEquals",
                value: function (e) {
                  return 0 >= this.add(e.negate().toString()).toNumber();
                },
              },
              {
                key: "toNumber",
                value: function () {
                  return this.number;
                },
              },
              {
                key: "toString",
                value: function () {
                  var e =
                    !(arguments.length > 0) ||
                    void 0 === arguments[0] ||
                    arguments[0];
                  return e
                    ? this.isInvalidate()
                      ? ""
                      : p(this.number)
                    : this.origin;
                },
              },
            ]),
            e
          );
        })();
      function N(e) {
        return d() ? new v(e) : new S(e);
      }
      function E(e, n, t) {
        var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if ("" === e) return "";
        var r = h(e),
          a = r.negativeStr,
          c = r.integerStr,
          o = r.decimalStr,
          l = "".concat(n).concat(o),
          u = "".concat(a).concat(c);
        if (t >= 0) {
          var s = Number(o[t]);
          return s >= 5 && !i
            ? E(
                N(e)
                  .add(
                    ""
                      .concat(a, "0.")
                      .concat("0".repeat(t))
                      .concat(10 - s)
                  )
                  .toString(),
                n,
                t,
                i
              )
            : 0 === t
            ? u
            : "".concat(u).concat(n).concat(o.padEnd(t, "0").slice(0, t));
        }
        return ".0" === l ? u : "".concat(u).concat(l);
      }
      var I = t(90891),
        y = t(61994),
        w = t(71134),
        k = t(72014);
      function x({
        prefixCls: e,
        action: n,
        children: t,
        disabled: r,
        className: a,
        style: c,
        onStep: o,
      }) {
        let l = "up" === n,
          u = i.useRef(),
          s = i.useRef([]),
          d = () => {
            clearTimeout(u.current);
          },
          f = (e) => {
            e.preventDefault(),
              d(),
              o(l, "handler"),
              (u.current = setTimeout(function e() {
                o(l, "handler"), (u.current = setTimeout(e, 200));
              }, 600));
          };
        i.useEffect(
          () => () => {
            d(),
              s.current.forEach((e) => {
                k.Z.cancel(e);
              });
          },
          []
        );
        let h = `${e}-action`,
          m = (0, y.W)(h, `${h}-${n}`, { [`${h}-${n}-disabled`]: r }, a),
          g = () => s.current.push((0, k.Z)(d));
        return i.createElement(
          "span",
          {
            unselectable: "on",
            role: "button",
            onMouseUp: g,
            onMouseLeave: g,
            onMouseDown: (e) => {
              f(e);
            },
            "aria-label": l ? "Increase Value" : "Decrease Value",
            "aria-disabled": r,
            className: m,
            style: c,
          },
          t ||
            i.createElement("span", {
              unselectable: "on",
              className: `${e}-action-${n}-inner`,
            })
        );
      }
      function M(e) {
        let n = "number" == typeof e ? p(e) : h(e).fullStr;
        return n.includes(".")
          ? h(n.replace(/(\d)\.(\d)/g, "$1$2.")).fullStr
          : e + "0";
      }
      var Z = t(73627),
        C = t(91557),
        A = () => {
          let e = (0, i.useRef)(0),
            n = () => {
              k.Z.cancel(e.current);
            };
          return (
            (0, i.useEffect)(() => n, []),
            (t) => {
              n(),
                (e.current = (0, k.Z)(() => {
                  t();
                }));
            }
          );
        };
      function R() {
        return (R = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      let W = (e, n) => (e || n.isEmpty() ? n.toString() : n.toNumber()),
        $ = (e) => {
          let n = N(e);
          return n.isInvalidate() ? null : n;
        },
        D = i.forwardRef((e, n) => {
          let {
              mode: t = "input",
              prefixCls: r = "rc-input-number",
              className: a,
              style: c,
              classNames: o,
              styles: l,
              min: u,
              max: s,
              step: d = 1,
              defaultValue: f,
              value: h,
              disabled: m,
              readOnly: v,
              upHandler: S,
              downHandler: k,
              keyboard: D,
              changeOnWheel: _ = !1,
              controls: q = !0,
              prefix: O,
              suffix: B,
              stringMode: T,
              parser: F,
              formatter: H,
              precision: z,
              decimalSeparator: P,
              onChange: L,
              onInput: j,
              onPressEnter: X,
              onStep: G,
              onMouseDown: U,
              onClick: V,
              onMouseUp: K,
              onMouseLeave: Q,
              onMouseMove: Y,
              onMouseEnter: J,
              onMouseOut: ee,
              changeOnBlur: en = !0,
              ...et
            } = e,
            [ei, er] = i.useState(!1),
            ea = i.useRef(!1),
            ec = i.useRef(!1),
            eo = i.useRef(!1),
            el = i.useRef(null),
            eu = i.useRef(null);
          i.useImperativeHandle(n, () => {
            var e, n;
            return (
              (e = eu.current),
              (n = {
                focus: (e) => {
                  (0, C.nH)(eu.current, e);
                },
                blur: () => {
                  eu.current?.blur();
                },
                nativeElement: el.current,
              }),
              "undefined" != typeof Proxy && e
                ? new Proxy(e, {
                    get(e, t) {
                      if (n[t]) return n[t];
                      let i = e[t];
                      return "function" == typeof i ? i.bind(e) : i;
                    },
                  })
                : e
            );
          });
          let [es, ed] = i.useState(() => N(h ?? f)),
            ef = i.useCallback(
              (e, n) => (n ? void 0 : z >= 0 ? z : Math.max(g(e), g(d))),
              [z, d]
            ),
            eh = i.useCallback(
              (e) => {
                let n = String(e);
                if (F) return F(n);
                let t = n;
                return P && (t = t.replace(P, ".")), t.replace(/[^\w.-]+/g, "");
              },
              [F, P]
            ),
            em = i.useRef(""),
            eg = i.useCallback(
              (e, n) => {
                if (H)
                  return H(e, { userTyping: n, input: String(em.current) });
                let t = "number" == typeof e ? p(e) : e;
                if (!n) {
                  let e = ef(t, n);
                  b(t) && (P || e >= 0) && (t = E(t, P || ".", e));
                }
                return t;
              },
              [H, ef, P]
            ),
            [ep, eb] = i.useState(() => {
              let e = f ?? h;
              return es.isInvalidate() &&
                ["string", "number"].includes(typeof e)
                ? Number.isNaN(e)
                  ? ""
                  : e
                : eg(es.toString(), !1);
            });
          function ev(e, n) {
            eb(eg(e.isInvalidate() ? e.toString(!1) : e.toString(!n), n));
          }
          em.current = ep;
          let eS = i.useMemo(() => $(s), [s, z]),
            eN = i.useMemo(() => $(u), [u, z]),
            eE = i.useMemo(
              () => !(!eS || !es || es.isInvalidate()) && eS.lessEquals(es),
              [eS, es]
            ),
            eI = i.useMemo(
              () => !(!eN || !es || es.isInvalidate()) && es.lessEquals(eN),
              [eN, es]
            ),
            [ey, ew] = (function (e, n) {
              let t = (0, i.useRef)(null);
              return [
                function () {
                  try {
                    let { selectionStart: n, selectionEnd: i, value: r } = e,
                      a = r.substring(0, n),
                      c = r.substring(i);
                    t.current = {
                      start: n,
                      end: i,
                      value: r,
                      beforeTxt: a,
                      afterTxt: c,
                    };
                  } catch (e) {}
                },
                function () {
                  if (e && t.current && n)
                    try {
                      let { value: n } = e,
                        { beforeTxt: i, afterTxt: r, start: a } = t.current,
                        c = n.length;
                      if (n.startsWith(i)) c = i.length;
                      else if (n.endsWith(r))
                        c = n.length - t.current.afterTxt.length;
                      else {
                        let e = i[a - 1],
                          t = n.indexOf(e, a - 1);
                        -1 !== t && (c = t + 1);
                      }
                      e.setSelectionRange(c, c);
                    } catch (e) {
                      (0, w.ZP)(
                        !1,
                        `Something warning of cursor restore. Please fire issue about this: ${e.message}`
                      );
                    }
                },
              ];
            })(eu.current, ei),
            ek = (e) =>
              eS && !e.lessEquals(eS)
                ? eS
                : eN && !eN.lessEquals(e)
                ? eN
                : null,
            ex = (e) => !ek(e),
            eM = (e, n) => {
              let t = e,
                i = ex(t) || t.isEmpty();
              if (
                (t.isEmpty() || n || ((t = ek(t) || t), (i = !0)),
                !v && !m && i)
              ) {
                let e = t.toString(),
                  i = ef(e, n);
                if (
                  (i >= 0 &&
                    !ex((t = N(E(e, ".", i)))) &&
                    (t = N(E(e, ".", i, !0))),
                  !t.equals(es))
                ) {
                  var r;
                  (r = t),
                    void 0 === h && ed(r),
                    L?.(t.isEmpty() ? null : W(T, t)),
                    void 0 === h && ev(t, n);
                }
                return t;
              }
              return es;
            },
            eZ = A(),
            eC = (e) => {
              if ((ey(), (em.current = e), eb(e), !ec.current)) {
                let n = N(eh(e));
                n.isNaN() || eM(n, !0);
              }
              j?.(e),
                eZ(() => {
                  let n = e;
                  F || (n = e.replace(/。/g, ".")), n !== e && eC(n);
                });
            },
            eA = (0, Z.zX)((e, n) => {
              if ((e && eE) || (!e && eI)) return;
              ea.current = !1;
              let t = N(eo.current ? M(d) : d);
              e || (t = t.negate());
              let i = eM((es || N(0)).add(t.toString()), !1);
              G?.(W(T, i), {
                offset: eo.current ? M(d) : d,
                type: e ? "up" : "down",
                emitter: n,
              }),
                eu.current?.focus();
            }),
            eR = (e) => {
              let n;
              let t = N(eh(ep));
              (n = t.isNaN() ? eM(es, e) : eM(t, e)),
                void 0 !== h ? ev(es, !1) : n.isNaN() || ev(n, !1);
            };
          i.useEffect(() => {
            if (_ && ei) {
              let e = (e) => {
                  eA(e.deltaY < 0, "wheel"), e.preventDefault();
                },
                n = eu.current;
              if (n)
                return (
                  n.addEventListener("wheel", e, { passive: !1 }),
                  () => n.removeEventListener("wheel", e)
                );
            }
          }),
            (0, I.o)(() => {
              es.isInvalidate() || ev(es, !1);
            }, [z, H]),
            (0, I.o)(() => {
              let e = N(h);
              ed(e);
              let n = N(eh(ep));
              (e.equals(n) && ea.current && !H) || ev(e, ea.current);
            }, [h]),
            (0, I.o)(() => {
              H && ew();
            }, [ep]);
          let eW = {
              prefixCls: r,
              onStep: eA,
              className: o?.action,
              style: l?.action,
            },
            e$ = i.createElement(
              x,
              R({}, eW, { action: "up", disabled: eE }),
              S
            ),
            eD = i.createElement(
              x,
              R({}, eW, { action: "down", disabled: eI }),
              k
            );
          return i.createElement(
            "div",
            {
              ref: el,
              className: (0, y.W)(r, `${r}-mode-${t}`, a, o?.root, {
                [`${r}-focused`]: ei,
                [`${r}-disabled`]: m,
                [`${r}-readonly`]: v,
                [`${r}-not-a-number`]: es.isNaN(),
                [`${r}-out-of-range`]: !es.isInvalidate() && !ex(es),
              }),
              style: { ...l?.root, ...c },
              onMouseDown: (e) => {
                eu.current &&
                  e.target !== eu.current &&
                  (eu.current.focus(), e.preventDefault()),
                  U?.(e);
              },
              onMouseUp: K,
              onMouseLeave: Q,
              onMouseMove: Y,
              onMouseEnter: J,
              onMouseOut: ee,
              onClick: V,
              onFocus: () => {
                er(!0);
              },
              onBlur: () => {
                en && eR(!1), er(!1), (ea.current = !1);
              },
              onKeyDown: (e) => {
                let { key: n, shiftKey: t } = e;
                (ea.current = !0),
                  (eo.current = t),
                  "Enter" === n &&
                    (ec.current || (ea.current = !1), eR(!1), X?.(e)),
                  !1 !== D &&
                    !ec.current &&
                    ["Up", "ArrowUp", "Down", "ArrowDown"].includes(n) &&
                    (eA("Up" === n || "ArrowUp" === n, "keyboard"),
                    e.preventDefault());
              },
              onKeyUp: () => {
                (ea.current = !1), (eo.current = !1);
              },
              onCompositionStart: () => {
                ec.current = !0;
              },
              onCompositionEnd: () => {
                (ec.current = !1), eC(eu.current.value);
              },
              onBeforeInput: () => {
                ea.current = !0;
              },
            },
            "spinner" === t && q && eD,
            void 0 !== O &&
              i.createElement(
                "div",
                {
                  className: (0, y.W)(`${r}-prefix`, o?.prefix),
                  style: l?.prefix,
                },
                O
              ),
            i.createElement(
              "input",
              R(
                {
                  autoComplete: "off",
                  role: "spinbutton",
                  "aria-valuemin": u,
                  "aria-valuemax": s,
                  "aria-valuenow": es.isInvalidate() ? null : es.toString(),
                  step: d,
                  ref: eu,
                  className: (0, y.W)(`${r}-input`, o?.input),
                  style: l?.input,
                  value: ep,
                  onChange: (e) => {
                    eC(e.target.value);
                  },
                  disabled: m,
                  readOnly: v,
                },
                et
              )
            ),
            void 0 !== B &&
              i.createElement(
                "div",
                {
                  className: (0, y.W)(`${r}-suffix`, o?.suffix),
                  style: l?.suffix,
                },
                B
              ),
            "spinner" === t && q && e$,
            "input" === t &&
              q &&
              i.createElement(
                "div",
                {
                  className: (0, y.W)(`${r}-actions`, o?.actions),
                  style: l?.actions,
                },
                e$,
                eD
              )
          );
        });
      var _ = t(391),
        q = t(80052),
        O = t(12757),
        B = t(47213),
        T = t(71744),
        F = t(86586),
        H = t(64024),
        z = t(33759),
        P = t(39109),
        L = t(56250),
        j = t(80603),
        X = t(77685),
        G = t(38775),
        U = t(31282),
        V = t(37433),
        K = t(65265),
        Q = t(12918),
        Y = t(17691),
        J = t(99320),
        ee = t(19224),
        en = t(13761);
      let et = (e) => {
          let {
              componentCls: n,
              lineWidth: t,
              lineType: i,
              borderRadius: r,
              inputFontSizeSM: a,
              inputFontSizeLG: c,
              colorError: o,
              paddingInlineSM: l,
              paddingBlockSM: u,
              paddingBlockLG: s,
              paddingInlineLG: d,
              colorIcon: f,
              motionDurationMid: h,
              handleHoverColor: m,
              handleOpacity: g,
              paddingInline: p,
              paddingBlock: b,
              handleBg: v,
              handleActiveBg: S,
              inputAffixPadding: N,
              borderRadiusSM: E,
              controlWidth: I,
              handleBorderColor: y,
              filledHandleBg: w,
              lineHeightLG: k,
            } = e,
            x = ""
              .concat((0, G.bf)(t), " ")
              .concat(i, " ")
              .concat(y);
          return [
            {
              [n]: {
                ...(0, Q.Wf)(e),
                ...(0, U.ik)(e),
                "--input-number-input-padding-block": (0, G.bf)(b),
                "--input-number-input-padding-inline": (0, G.bf)(p),
                display: "inline-flex",
                width: I,
                margin: 0,
                paddingBlock: 0,
                borderRadius: r,
                ...(0, K.qG)(e, {
                  ["".concat(n, "-actions")]: {
                    background: v,
                    ["".concat(n, "-action-down")]: { borderBlockStart: x },
                  },
                }),
                ...(0, K.H8)(e, {
                  ["".concat(n, "-actions")]: {
                    background: w,
                    ["".concat(n, "-action-down")]: { borderBlockStart: x },
                  },
                  "&:focus-within": {
                    ["".concat(n, "-actions")]: { background: v },
                  },
                }),
                ...(0, K.vc)(e, {
                  ["".concat(n, "-actions")]: {
                    background: v,
                    ["".concat(n, "-action-down")]: { borderBlockStart: x },
                  },
                }),
                ...(0, K.Mu)(e),
                "&-rtl": {
                  direction: "rtl",
                  ["".concat(n, "-input")]: { direction: "rtl" },
                },
                ["&".concat(n, "-out-of-range")]: {
                  ["".concat(n, "-input")]: { color: o },
                },
                ["".concat(n, "-input")]: {
                  ...(0, Q.Wf)(e),
                  width: "100%",
                  paddingBlock: "var(--input-number-input-padding-block)",
                  textAlign: "start",
                  backgroundColor: "transparent",
                  border: 0,
                  borderRadius: r,
                  outline: 0,
                  transition: "all ".concat(h, " linear"),
                  appearance: "textfield",
                  fontSize: "inherit",
                  lineHeight: "inherit",
                  ...(0, U.nz)(e.colorTextPlaceholder),
                  '&[type="number"]::-webkit-inner-spin-button, &[type="number"]::-webkit-outer-spin-button':
                    { margin: 0, appearance: "none" },
                },
                ["&:hover "
                  .concat(n, "-handler-wrap, &-focused ")
                  .concat(n, "-handler-wrap")]: {
                  width: e.handleWidth,
                  opacity: 1,
                },
                ["&-disabled ".concat(n, "-input")]: {
                  cursor: "not-allowed",
                  color: e.colorTextDisabled,
                },
              },
            },
            {
              [n]: {
                ["\n          "
                  .concat(n, "-action-up-disabled,\n          ")
                  .concat(n, "-action-down-disabled\n        ")]: {
                  cursor: "not-allowed",
                },
                ["".concat(n, "-action")]: {
                  ...(0, Q.Ro)(),
                  userSelect: "none",
                  overflow: "hidden",
                  fontWeight: "bold",
                  lineHeight: 0,
                  textAlign: "center",
                  cursor: "pointer",
                  transition: "all ".concat(h, " linear"),
                  "&:active": { background: S },
                  "&:hover": { color: m },
                },
                "&-mode-input": {
                  overflow: "hidden",
                  ["".concat(n, "-actions")]: {
                    position: "absolute",
                    insetBlockStart: 0,
                    insetInlineEnd: 0,
                    width: e.handleVisibleWidth,
                    opacity: g,
                    height: "100%",
                    borderRadius: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    transition: "all ".concat(h),
                    overflow: "hidden",
                    ["".concat(n, "-action")]: {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "auto",
                      height: "40%",
                      marginInlineEnd: 0,
                      fontSize: e.handleFontSize,
                    },
                  },
                  ["&:hover "
                    .concat(n, "-actions, &-focused ")
                    .concat(n, "-actions")]: {
                    width: e.handleWidth,
                    opacity: 1,
                  },
                  ["".concat(n, "-action")]: {
                    color: f,
                    height: "50%",
                    borderInlineStart: x,
                    "&:hover": { height: "60%" },
                  },
                  ["&".concat(n, "-disabled, &").concat(n, "-readonly")]: {
                    ["".concat(n, "-actions")]: { display: "none" },
                  },
                },
                ["&".concat(n, "-mode-spinner")]: {
                  padding: 0,
                  width: "auto",
                  ["".concat(n, "-action")]: {
                    flex: "none",
                    paddingInline: "var(--input-number-input-padding-inline)",
                    "&-up": { borderInlineStart: x },
                    "&-down": { borderInlineEnd: x },
                  },
                  ["".concat(n, "-input")]: {
                    textAlign: "center",
                    paddingInline: "var(--input-number-input-padding-inline)",
                  },
                },
              },
            },
            {
              [n]: {
                "&-lg": {
                  "--input-number-input-padding-block": (0, G.bf)(s),
                  "--input-number-input-padding-inline": (0, G.bf)(d),
                  paddingBlock: 0,
                  fontSize: c,
                  lineHeight: k,
                },
                "&-sm": {
                  "--input-number-input-padding-block": (0, G.bf)(u),
                  "--input-number-input-padding-inline": (0, G.bf)(l),
                  paddingBlock: 0,
                  fontSize: a,
                  borderRadius: E,
                },
              },
            },
            {
              [n]: {
                ["".concat(n, "-prefix, ").concat(n, "-suffix")]: {
                  display: "flex",
                  flex: "none",
                  alignItems: "center",
                  alignSelf: "center",
                  pointerEvents: "none",
                },
                ["".concat(n, "-prefix")]: { marginInlineEnd: N },
                ["".concat(n, "-suffix")]: {
                  height: "100%",
                  marginInlineStart: N,
                  transition: "margin ".concat(h),
                },
                ["&:hover:not(".concat(n, "-without-controls)")]: {
                  ["".concat(n, "-suffix")]: { marginInlineEnd: e.handleWidth },
                },
              },
            },
          ];
        },
        ei = (e) => {
          let { componentCls: n, antCls: t } = e;
          return {
            ["".concat(n, "-addon")]: {
              ["&:has(".concat(t, "-select)")]: { border: 0, padding: 0 },
            },
          };
        };
      var er = (0, J.I$)(
        "InputNumber",
        (e) => {
          let n = (0, ee.IX)(e, (0, V.e)(e));
          return [et(n), ei(n), (0, Y.c)(n)];
        },
        (e) => {
          var n;
          let t = null !== (n = e.handleVisible) && void 0 !== n ? n : "auto",
            i = e.controlHeightSM - 2 * e.lineWidth;
          return {
            ...(0, V.T)(e),
            controlWidth: 90,
            handleWidth: i,
            handleFontSize: e.fontSize / 2,
            handleVisible: t,
            handleActiveBg: e.colorFillAlter,
            handleBg: e.colorBgContainer,
            filledHandleBg: new en.t(e.colorFillSecondary)
              .onBackground(e.colorBgContainer)
              .toHexString(),
            handleHoverColor: e.colorPrimary,
            handleBorderColor: e.colorBorder,
            handleOpacity: !0 === t ? 1 : 0,
            handleVisibleWidth: !0 === t ? i : 0,
          };
        },
        { unitless: { handleOpacity: !0 }, resetFont: !1 }
      );
      let ea = i.forwardRef((e, n) => {
          let t = i.useRef(null);
          i.useImperativeHandle(n, () => t.current);
          let {
              rootClassName: l,
              size: u,
              disabled: s,
              prefixCls: d,
              addonBefore: f,
              addonAfter: h,
              prefix: m,
              suffix: g,
              bordered: p,
              readOnly: b,
              status: v,
              controls: S = !0,
              variant: N,
              className: E,
              style: I,
              classNames: w,
              styles: k,
              mode: x,
              ...M
            } = e,
            {
              direction: Z,
              className: C,
              style: A,
              styles: R,
              classNames: W,
            } = (0, T.dj)("inputNumber"),
            $ = i.useMemo(
              () => !!S && !e.disabled && !e.readOnly && S,
              [S, e.disabled, e.readOnly]
            ),
            { compactSize: _, compactItemClassnames: B } = (0, X.ri)(d, Z),
            H =
              "spinner" === x
                ? i.createElement(r.Z, null)
                : i.createElement(o.Z, null),
            j =
              "spinner" === x
                ? i.createElement(a.Z, null)
                : i.createElement(c.Z, null);
          "object" == typeof $ && ((H = $.upIcon || H), (j = $.downIcon || j));
          let {
              hasFeedback: G,
              isFormItemInput: U,
              feedbackIcon: V,
            } = i.useContext(P.aM),
            K = (0, z.Z)((e) => {
              var n;
              return null !== (n = null != u ? u : _) && void 0 !== n ? n : e;
            }),
            Q = i.useContext(F.Z),
            Y = null != s ? s : Q,
            [J, ee] = (0, L.Z)("inputNumber", N, p),
            en = G && i.createElement(i.Fragment, null, V),
            et = { ...e, size: K, disabled: Y, controls: $ },
            [ei, er] = (0, q.MW)([W, w], [R, k], { props: et });
          return i.createElement(D, {
            ref: t,
            mode: x,
            disabled: Y,
            className: (0, y.W)(E, l, ei.root, C, B, (0, O.Z)(d, v, G), {
              ["".concat(d, "-").concat(J)]: ee,
              ["".concat(d, "-lg")]: "large" === K,
              ["".concat(d, "-sm")]: "small" === K,
              ["".concat(d, "-rtl")]: "rtl" === Z,
              ["".concat(d, "-in-form-item")]: U,
              ["".concat(d, "-without-controls")]: !$,
            }),
            style: { ...er.root, ...A, ...I },
            upHandler: H,
            downHandler: j,
            prefixCls: d,
            readOnly: b,
            controls: "boolean" == typeof $ ? $ : void 0,
            prefix: m,
            suffix: en || g,
            classNames: ei,
            styles: er,
            ...M,
          });
        }),
        ec = i.forwardRef((e, n) => {
          let {
              addonBefore: t,
              addonAfter: r,
              prefixCls: a,
              className: c,
              status: o,
              rootClassName: l,
              ...u
            } = e,
            { getPrefixCls: s } = (0, T.dj)("inputNumber"),
            d = s("input-number", a),
            { status: f } = i.useContext(P.aM),
            h = (0, O.F)(f, o),
            m = (0, H.Z)(d),
            [g, p] = er(d, m),
            b = t || r,
            v = i.createElement(ea, {
              ref: n,
              ...u,
              prefixCls: d,
              status: h,
              className: (0, y.W)(p, m, g, c),
              rootClassName: b ? void 0 : l,
            });
          if (b) {
            let n = (n) =>
                n
                  ? i.createElement(
                      j.Z,
                      {
                        className: (0, y.W)("".concat(d, "-addon"), p, g),
                        variant: e.variant,
                        disabled: e.disabled,
                        status: h,
                      },
                      i.createElement(_.Z, { form: !0 }, n)
                    )
                  : null,
              a = n(t),
              c = n(r);
            return i.createElement(X.ZP, { rootClassName: l }, a, v, c);
          }
          return v;
        });
      ec._InternalPanelDoNotUseOrYouWillBeFired = (e) =>
        i.createElement(
          B.ZP,
          { theme: { components: { InputNumber: { handleVisible: !0 } } } },
          i.createElement(ec, { ...e })
        );
      var eo = ec;
    },
    53743: function (e, n, t) {
      t.d(n, {
        default: function () {
          return S;
        },
      });
      var i = t(42535),
        r = t(50815),
        a = t(74079),
        c = t(2265),
        o = t(28975),
        l = t(61994),
        u = t(93942),
        s = t(71744),
        d = t(64024),
        f = t(85695),
        h = t(90024),
        m = t(4065),
        g = (0, u.i)((e) => {
          let {
              prefixCls: n,
              className: t,
              closeIcon: i,
              closable: r,
              type: a,
              title: u,
              children: g,
              footer: p,
              ...b
            } = e,
            { getPrefixCls: v } = c.useContext(s.E_),
            S = v(),
            N = n || v("modal"),
            E = (0, d.Z)(S),
            [I, y] = (0, m.ZP)(N, E),
            w = "".concat(N, "-confirm"),
            k = {};
          return (
            (k = a
              ? {
                  closable: null != r && r,
                  title: "",
                  footer: "",
                  children: c.createElement(f.O, {
                    ...e,
                    prefixCls: N,
                    confirmPrefixCls: w,
                    rootPrefixCls: S,
                    content: g,
                  }),
                }
              : {
                  closable: null == r || r,
                  title: u,
                  footer: null !== p && c.createElement(h.$, { ...e }),
                  children: g,
                }),
            c.createElement(o.s, {
              prefixCls: N,
              className: (0, l.W)(
                I,
                "".concat(N, "-pure-panel"),
                a && w,
                a && "".concat(w, "-").concat(a),
                t,
                y,
                E
              ),
              ...b,
              closeIcon: (0, h.b)(N, i),
              closable: r,
              ...k,
            })
          );
        }),
        p = t(23248);
      function b(e) {
        return (0, i.ZP)((0, i.uW)(e));
      }
      let v = a.Z;
      (v.useModal = p.Z),
        (v.info = function (e) {
          return (0, i.ZP)((0, i.cw)(e));
        }),
        (v.success = function (e) {
          return (0, i.ZP)((0, i.vq)(e));
        }),
        (v.error = function (e) {
          return (0, i.ZP)((0, i.AQ)(e));
        }),
        (v.warning = b),
        (v.warn = b),
        (v.confirm = function (e) {
          return (0, i.ZP)((0, i.Au)(e));
        }),
        (v.destroyAll = function () {
          for (; r.Z.length; ) {
            let e = r.Z.pop();
            e && e();
          }
        }),
        (v.config = i.ai),
        (v._InternalPanelDoNotUseOrYouWillBeFired = g);
      var S = v;
    },
    80336: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(2265),
        r = t(61935),
        a = t(61994),
        c = t(26107),
        o = t(74576);
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var i in t)
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      let u = i.forwardRef(
        (
          {
            prefixCls: e = "rc-switch",
            className: n,
            checked: t,
            defaultChecked: r,
            disabled: u,
            loadingIcon: s,
            checkedChildren: d,
            unCheckedChildren: f,
            onClick: h,
            onChange: m,
            onKeyDown: g,
            styles: p,
            classNames: b,
            ...v
          },
          S
        ) => {
          let [N, E] = (0, c.Z)(r ?? !1, t);
          function I(e, n) {
            let t = N;
            return u || (E((t = e)), m?.(t, n)), t;
          }
          let y = (0, a.W)(e, n, { [`${e}-checked`]: N, [`${e}-disabled`]: u });
          return i.createElement(
            "button",
            l({}, v, {
              type: "button",
              role: "switch",
              "aria-checked": N,
              disabled: u,
              className: y,
              ref: S,
              onKeyDown: function (e) {
                e.which === o.default.LEFT
                  ? I(!1, e)
                  : e.which === o.default.RIGHT && I(!0, e),
                  g?.(e);
              },
              onClick: function (e) {
                let n = I(!N, e);
                h?.(n, e);
              },
            }),
            s,
            i.createElement(
              "span",
              { className: `${e}-inner` },
              i.createElement(
                "span",
                {
                  className: (0, a.W)(`${e}-inner-checked`, b?.content),
                  style: p?.content,
                },
                d
              ),
              i.createElement(
                "span",
                {
                  className: (0, a.W)(`${e}-inner-unchecked`, b?.content),
                  style: p?.content,
                },
                f
              )
            )
          );
        }
      );
      u.displayName = "Switch";
      var s = t(73627),
        d = t(80052),
        f = t(6694),
        h = t(71744),
        m = t(86586),
        g = t(33759),
        p = t(38775),
        b = t(13761),
        v = t(12918),
        S = t(99320),
        N = t(19224);
      let E = (e) => {
          let {
              componentCls: n,
              trackHeightSM: t,
              trackPadding: i,
              trackMinWidthSM: r,
              innerMinMarginSM: a,
              innerMaxMarginSM: c,
              handleSizeSM: o,
              calc: l,
            } = e,
            u = "".concat(n, "-inner"),
            s = (0, p.bf)(l(o).add(l(i).mul(2)).equal()),
            d = (0, p.bf)(l(c).mul(2).equal());
          return {
            [n]: {
              ["&".concat(n, "-small")]: {
                minWidth: r,
                height: t,
                lineHeight: (0, p.bf)(t),
                ["".concat(n, "-inner")]: {
                  paddingInlineStart: c,
                  paddingInlineEnd: a,
                  ["".concat(u, "-checked, ").concat(u, "-unchecked")]: {
                    minHeight: t,
                  },
                  ["".concat(u, "-checked")]: {
                    marginInlineStart: "calc(-100% + "
                      .concat(s, " - ")
                      .concat(d, ")"),
                    marginInlineEnd: "calc(100% - "
                      .concat(s, " + ")
                      .concat(d, ")"),
                  },
                  ["".concat(u, "-unchecked")]: {
                    marginTop: l(t).mul(-1).equal(),
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                  },
                },
                ["".concat(n, "-handle")]: { width: o, height: o },
                ["".concat(n, "-loading-icon")]: {
                  top: l(l(o).sub(e.switchLoadingIconSize)).div(2).equal(),
                  fontSize: e.switchLoadingIconSize,
                },
                ["&".concat(n, "-checked")]: {
                  ["".concat(n, "-inner")]: {
                    paddingInlineStart: a,
                    paddingInlineEnd: c,
                    ["".concat(u, "-checked")]: {
                      marginInlineStart: 0,
                      marginInlineEnd: 0,
                    },
                    ["".concat(u, "-unchecked")]: {
                      marginInlineStart: "calc(100% - "
                        .concat(s, " + ")
                        .concat(d, ")"),
                      marginInlineEnd: "calc(-100% + "
                        .concat(s, " - ")
                        .concat(d, ")"),
                    },
                  },
                  ["".concat(n, "-handle")]: {
                    insetInlineStart: "calc(100% - ".concat(
                      (0, p.bf)(l(o).add(i).equal()),
                      ")"
                    ),
                  },
                },
                ["&:not(".concat(n, "-disabled):active")]: {
                  ["&:not(".concat(n, "-checked) ").concat(u)]: {
                    ["".concat(u, "-unchecked")]: {
                      marginInlineStart: l(e.marginXXS).div(2).equal(),
                      marginInlineEnd: l(e.marginXXS).mul(-1).div(2).equal(),
                    },
                  },
                  ["&".concat(n, "-checked ").concat(u)]: {
                    ["".concat(u, "-checked")]: {
                      marginInlineStart: l(e.marginXXS).mul(-1).div(2).equal(),
                      marginInlineEnd: l(e.marginXXS).div(2).equal(),
                    },
                  },
                },
              },
            },
          };
        },
        I = (e) => {
          let { componentCls: n, handleSize: t, calc: i } = e;
          return {
            [n]: {
              ["".concat(n, "-loading-icon").concat(e.iconCls)]: {
                position: "relative",
                top: i(i(t).sub(e.fontSize)).div(2).equal(),
                color: e.switchLoadingIconColor,
                verticalAlign: "top",
              },
              ["&".concat(n, "-checked ").concat(n, "-loading-icon")]: {
                color: e.switchColor,
              },
            },
          };
        },
        y = (e) => {
          let {
              componentCls: n,
              trackPadding: t,
              handleBg: i,
              handleShadow: r,
              handleSize: a,
              calc: c,
            } = e,
            o = "".concat(n, "-handle");
          return {
            [n]: {
              [o]: {
                position: "absolute",
                top: t,
                insetInlineStart: t,
                width: a,
                height: a,
                transition: "all ".concat(e.switchDuration, " ease-in-out"),
                "&::before": {
                  position: "absolute",
                  top: 0,
                  insetInlineEnd: 0,
                  bottom: 0,
                  insetInlineStart: 0,
                  backgroundColor: i,
                  borderRadius: c(a).div(2).equal(),
                  boxShadow: r,
                  transition: "all ".concat(e.switchDuration, " ease-in-out"),
                  content: '""',
                },
              },
              ["&".concat(n, "-checked ").concat(o)]: {
                insetInlineStart: "calc(100% - ".concat(
                  (0, p.bf)(c(a).add(t).equal()),
                  ")"
                ),
              },
              ["&:not(".concat(n, "-disabled):active")]: {
                ["".concat(o, "::before")]: {
                  insetInlineEnd: e.switchHandleActiveInset,
                  insetInlineStart: 0,
                },
                ["&".concat(n, "-checked ").concat(o, "::before")]: {
                  insetInlineEnd: 0,
                  insetInlineStart: e.switchHandleActiveInset,
                },
              },
            },
          };
        },
        w = (e) => {
          let {
              componentCls: n,
              trackHeight: t,
              trackPadding: i,
              innerMinMargin: r,
              innerMaxMargin: a,
              handleSize: c,
              calc: o,
            } = e,
            l = "".concat(n, "-inner"),
            u = (0, p.bf)(o(c).add(o(i).mul(2)).equal()),
            s = (0, p.bf)(o(a).mul(2).equal());
          return {
            [n]: {
              [l]: {
                display: "block",
                overflow: "hidden",
                borderRadius: 100,
                height: "100%",
                paddingInlineStart: a,
                paddingInlineEnd: r,
                transition: "padding-inline-start "
                  .concat(e.switchDuration, " ease-in-out, padding-inline-end ")
                  .concat(e.switchDuration, " ease-in-out"),
                ["".concat(l, "-checked, ").concat(l, "-unchecked")]: {
                  display: "block",
                  color: e.colorTextLightSolid,
                  fontSize: e.fontSizeSM,
                  transition: "margin-inline-start "
                    .concat(
                      e.switchDuration,
                      " ease-in-out, margin-inline-end "
                    )
                    .concat(e.switchDuration, " ease-in-out"),
                  pointerEvents: "none",
                  minHeight: t,
                },
                ["".concat(l, "-checked")]: {
                  marginInlineStart: "calc(-100% + "
                    .concat(u, " - ")
                    .concat(s, ")"),
                  marginInlineEnd: "calc(100% - "
                    .concat(u, " + ")
                    .concat(s, ")"),
                },
                ["".concat(l, "-unchecked")]: {
                  marginTop: o(t).mul(-1).equal(),
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                },
              },
              ["&".concat(n, "-checked ").concat(l)]: {
                paddingInlineStart: r,
                paddingInlineEnd: a,
                ["".concat(l, "-checked")]: {
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                },
                ["".concat(l, "-unchecked")]: {
                  marginInlineStart: "calc(100% - "
                    .concat(u, " + ")
                    .concat(s, ")"),
                  marginInlineEnd: "calc(-100% + "
                    .concat(u, " - ")
                    .concat(s, ")"),
                },
              },
              ["&:not(".concat(n, "-disabled):active")]: {
                ["&:not(".concat(n, "-checked) ").concat(l)]: {
                  ["".concat(l, "-unchecked")]: {
                    marginInlineStart: o(i).mul(2).equal(),
                    marginInlineEnd: o(i).mul(-1).mul(2).equal(),
                  },
                },
                ["&".concat(n, "-checked ").concat(l)]: {
                  ["".concat(l, "-checked")]: {
                    marginInlineStart: o(i).mul(-1).mul(2).equal(),
                    marginInlineEnd: o(i).mul(2).equal(),
                  },
                },
              },
            },
          };
        },
        k = (e) => {
          let { componentCls: n, trackHeight: t, trackMinWidth: i } = e;
          return {
            [n]: {
              ...(0, v.Wf)(e),
              position: "relative",
              display: "inline-block",
              boxSizing: "border-box",
              minWidth: i,
              height: t,
              lineHeight: (0, p.bf)(t),
              verticalAlign: "middle",
              background: e.colorTextQuaternary,
              border: "0",
              borderRadius: 100,
              cursor: "pointer",
              transition: "all ".concat(e.motionDurationMid),
              userSelect: "none",
              ["&:hover:not(".concat(n, "-disabled)")]: {
                background: e.colorTextTertiary,
              },
              ...(0, v.Qy)(e),
              ["&".concat(n, "-checked")]: {
                background: e.switchColor,
                ["&:hover:not(".concat(n, "-disabled)")]: {
                  background: e.colorPrimaryHover,
                },
              },
              ["&".concat(n, "-loading, &").concat(n, "-disabled")]: {
                cursor: "not-allowed",
                opacity: e.switchDisabledOpacity,
                "*": { boxShadow: "none", cursor: "not-allowed" },
              },
              ["&".concat(n, "-rtl")]: { direction: "rtl" },
            },
          };
        };
      var x = (0, S.I$)(
        "Switch",
        (e) => {
          let n = (0, N.IX)(e, {
            switchDuration: e.motionDurationMid,
            switchColor: e.colorPrimary,
            switchDisabledOpacity: e.opacityLoading,
            switchLoadingIconSize: e.calc(e.fontSizeIcon).mul(0.75).equal(),
            switchLoadingIconColor: "rgba(0, 0, 0, ".concat(
              e.opacityLoading,
              ")"
            ),
            switchHandleActiveInset: "-30%",
          });
          return [k(n), w(n), y(n), I(n), E(n)];
        },
        (e) => {
          let {
              fontSize: n,
              lineHeight: t,
              controlHeight: i,
              colorWhite: r,
            } = e,
            a = n * t,
            c = i / 2,
            o = a - 4,
            l = c - 4;
          return {
            trackHeight: a,
            trackHeightSM: c,
            trackMinWidth: 2 * o + 8,
            trackMinWidthSM: 2 * l + 4,
            trackPadding: 2,
            handleBg: r,
            handleSize: o,
            handleSizeSM: l,
            handleShadow: "0 2px 4px 0 ".concat(
              new b.t("#00230b").setA(0.2).toRgbString()
            ),
            innerMinMargin: o / 2,
            innerMaxMargin: o + 2 + 4,
            innerMinMarginSM: l / 2,
            innerMaxMarginSM: l + 2 + 4,
          };
        }
      );
      let M = i.forwardRef((e, n) => {
        var t;
        let {
            prefixCls: c,
            size: o,
            disabled: l,
            loading: p,
            className: b,
            rootClassName: v,
            style: S,
            checked: N,
            value: E,
            defaultChecked: I,
            defaultValue: y,
            onChange: w,
            styles: k,
            classNames: M,
            ...Z
          } = e,
          [C, A] = (0, s.zk)(
            null !== (t = null != I ? I : y) && void 0 !== t && t,
            null != N ? N : E
          ),
          {
            getPrefixCls: R,
            direction: W,
            className: $,
            style: D,
            classNames: _,
            styles: q,
          } = (0, h.dj)("switch"),
          O = i.useContext(m.Z),
          B = (null != l ? l : O) || p,
          T = R("switch", c),
          F = i.createElement(
            "div",
            { className: "".concat(T, "-handle") },
            p &&
              i.createElement(r.Z, { className: "".concat(T, "-loading-icon") })
          ),
          [H, z] = x(T),
          P = (0, g.Z)(o),
          L = { ...e, size: P, disabled: B },
          [j, X] = (0, d.MW)([_, M], [q, k], { props: L }),
          G = (0, a.W)(
            $,
            {
              ["".concat(T, "-small")]: "small" === P,
              ["".concat(T, "-loading")]: p,
              ["".concat(T, "-rtl")]: "rtl" === W,
            },
            b,
            v,
            j.root,
            H,
            z
          ),
          U = { ...X.root, ...D, ...S };
        return i.createElement(
          f.Z,
          { component: "Switch", disabled: B },
          i.createElement(u, {
            ...Z,
            classNames: j,
            styles: X,
            checked: C,
            onChange: function () {
              for (var e = arguments.length, n = Array(e), t = 0; t < e; t++)
                n[t] = arguments[t];
              A(n[0]), null == w || w(...n);
            },
            prefixCls: T,
            className: G,
            style: U,
            disabled: B,
            ref: n,
            loadingIcon: F,
          })
        );
      });
      M.__ANT_SWITCH = !0;
      var Z = M;
    },
  },
]);
