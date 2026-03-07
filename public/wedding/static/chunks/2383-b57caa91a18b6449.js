"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2383],
  {
    75669: function (e, t, o) {
      o.d(t, {
        Il: function () {
          return l;
        },
        G5: function () {
          return v;
        },
        ZP: function () {
          return k;
        },
      });
      var n = o(2265),
        r = o(13761);
      let a = (e) => Math.round(Number(e || 0)),
        c = (e) => {
          if (e instanceof r.t) return e;
          if (e && "object" == typeof e && "h" in e && "b" in e) {
            let { b: t, ...o } = e;
            return { ...o, v: t };
          }
          return "string" == typeof e && /hsb/.test(e)
            ? e.replace(/hsb/, "hsv")
            : e;
        };
      class l extends r.t {
        constructor(e) {
          super(c(e));
        }
        toHsbString() {
          let e = this.toHsb(),
            t = a(100 * e.s),
            o = a(100 * e.b),
            n = a(e.h),
            r = e.a,
            c = `hsb(${n}, ${t}%, ${o}%)`,
            l = `hsba(${n}, ${t}%, ${o}%, ${r.toFixed(0 === r ? 0 : 2)})`;
          return 1 === r ? c : l;
        }
        toHsb() {
          let { v: e, ...t } = this.toHsv();
          return { ...t, b: e, a: this.a };
        }
      }
      let i = (e) => (e instanceof l ? e : new l(e)),
        s = i("#1677ff"),
        d = (e) => {
          let {
              offset: t,
              targetRef: o,
              containerRef: n,
              color: r,
              type: a,
            } = e,
            { width: c, height: l } = n.current.getBoundingClientRect(),
            { width: s, height: d } = o.current.getBoundingClientRect(),
            u = s / 2,
            m = (t.x + u) / c,
            v = 1 - (t.y + d / 2) / l,
            g = r.toHsb(),
            p = ((t.x + u) / c) * 360;
          if (a)
            switch (a) {
              case "hue":
                return i({ ...g, h: p <= 0 ? 0 : p });
              case "alpha":
                return i({ ...g, a: m <= 0 ? 0 : m });
            }
          return i({ h: g.h, s: m <= 0 ? 0 : m, b: v >= 1 ? 1 : v, a: g.a });
        },
        u = (e, t) => {
          let o = e.toHsb();
          switch (t) {
            case "hue":
              return { x: (o.h / 360) * 100, y: 50 };
            case "alpha":
              return { x: 100 * e.a, y: 50 };
            default:
              return { x: 100 * o.s, y: (1 - o.b) * 100 };
          }
        };
      var m = o(61994),
        v = ({
          color: e,
          prefixCls: t,
          className: o,
          style: r,
          onClick: a,
        }) => {
          let c = `${t}-color-block`;
          return n.createElement(
            "div",
            { className: (0, m.W)(c, o), style: r, onClick: a },
            n.createElement("div", {
              className: `${c}-inner`,
              style: { background: e },
            })
          );
        },
        g = function (e) {
          let {
              targetRef: t,
              containerRef: o,
              direction: r,
              onDragChange: a,
              onDragChangeComplete: c,
              calculate: l,
              color: i,
              disabledDrag: s,
            } = e,
            [d, u] = (0, n.useState)({ x: 0, y: 0 }),
            m = (0, n.useRef)(null),
            v = (0, n.useRef)(null);
          (0, n.useEffect)(() => {
            u(l());
          }, [i]),
            (0, n.useEffect)(
              () => () => {
                document.removeEventListener("mousemove", m.current),
                  document.removeEventListener("mouseup", v.current),
                  document.removeEventListener("touchmove", m.current),
                  document.removeEventListener("touchend", v.current),
                  (m.current = null),
                  (v.current = null);
              },
              []
            );
          let g = (e) => {
              let { pageX: n, pageY: c } = (function (e) {
                  let t = "touches" in e ? e.touches[0] : e,
                    o =
                      document.documentElement.scrollLeft ||
                      document.body.scrollLeft ||
                      window.pageXOffset,
                    n =
                      document.documentElement.scrollTop ||
                      document.body.scrollTop ||
                      window.pageYOffset;
                  return { pageX: t.pageX - o, pageY: t.pageY - n };
                })(e),
                {
                  x: l,
                  y: i,
                  width: s,
                  height: u,
                } = o.current.getBoundingClientRect(),
                { width: m, height: v } = t.current.getBoundingClientRect(),
                g = {
                  x: Math.max(0, Math.min(n - l, s)) - m / 2,
                  y: "x" === r ? d.y : Math.max(0, Math.min(c - i, u)) - v / 2,
                };
              if ((0 === m && 0 === v) || m !== v) return !1;
              a?.(g);
            },
            p = (e) => {
              e.preventDefault(), g(e);
            },
            f = (e) => {
              e.preventDefault(),
                document.removeEventListener("mousemove", m.current),
                document.removeEventListener("mouseup", v.current),
                document.removeEventListener("touchmove", m.current),
                document.removeEventListener("touchend", v.current),
                (m.current = null),
                (v.current = null),
                c?.();
            };
          return [
            d,
            (e) => {
              document.removeEventListener("mousemove", m.current),
                document.removeEventListener("mouseup", v.current),
                s ||
                  (g(e),
                  document.addEventListener("mousemove", p),
                  document.addEventListener("mouseup", f),
                  document.addEventListener("touchmove", p),
                  document.addEventListener("touchend", f),
                  (m.current = p),
                  (v.current = f));
            },
          ];
        },
        p = o(73627),
        f = ({ size: e = "default", color: t, prefixCls: o }) =>
          n.createElement("div", {
            className: (0, m.W)(`${o}-handler`, {
              [`${o}-handler-sm`]: "small" === e,
            }),
            style: { backgroundColor: t },
          }),
        b = ({ children: e, style: t, prefixCls: o }) =>
          n.createElement(
            "div",
            {
              className: `${o}-palette`,
              style: { position: "relative", ...t },
            },
            e
          );
      let h = (0, n.forwardRef)((e, t) => {
        let { children: o, x: r, y: a } = e;
        return n.createElement(
          "div",
          {
            ref: t,
            style: {
              position: "absolute",
              left: `${r}%`,
              top: `${a}%`,
              zIndex: 1,
              transform: "translate(-50%, -50%)",
            },
          },
          o
        );
      });
      var y = ({
          color: e,
          onChange: t,
          prefixCls: o,
          onChangeComplete: r,
          disabled: a,
        }) => {
          let c = (0, n.useRef)(),
            l = (0, n.useRef)(),
            i = (0, n.useRef)(e),
            s = (0, p.zX)((o) => {
              let n = d({ offset: o, targetRef: l, containerRef: c, color: e });
              (i.current = n), t(n);
            }),
            [m, v] = g({
              color: e,
              containerRef: c,
              targetRef: l,
              calculate: () => u(e),
              onDragChange: s,
              onDragChangeComplete: () => r?.(i.current),
              disabledDrag: a,
            });
          return n.createElement(
            "div",
            {
              ref: c,
              className: `${o}-select`,
              onMouseDown: v,
              onTouchStart: v,
            },
            n.createElement(
              b,
              { prefixCls: o },
              n.createElement(
                h,
                { x: m.x, y: m.y, ref: l },
                n.createElement(f, { color: e.toRgbString(), prefixCls: o })
              ),
              n.createElement("div", {
                className: `${o}-saturation`,
                style: {
                  backgroundColor: `hsl(${e.toHsb().h},100%, 50%)`,
                  backgroundImage:
                    "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))",
                },
              })
            )
          );
        },
        x = (e, t) => {
          let [o, r] = (0, p.zk)(e, t);
          return [(0, n.useMemo)(() => i(o), [o]), r];
        },
        C = ({
          colors: e,
          children: t,
          direction: o = "to right",
          type: r,
          prefixCls: a,
        }) => {
          let c = (0, n.useMemo)(
            () =>
              e
                .map((t, o) => {
                  let n = i(t);
                  return (
                    "alpha" === r &&
                      o === e.length - 1 &&
                      (n = new l(n.setA(1))),
                    n.toRgbString()
                  );
                })
                .join(","),
            [e, r]
          );
          return n.createElement(
            "div",
            {
              className: `${a}-gradient`,
              style: {
                position: "absolute",
                inset: 0,
                background: `linear-gradient(${o}, ${c})`,
              },
            },
            t
          );
        },
        E = (e) => {
          let {
              prefixCls: t,
              colors: o,
              disabled: r,
              onChange: a,
              onChangeComplete: c,
              color: i,
              type: s,
            } = e,
            v = (0, n.useRef)(null),
            y = (0, n.useRef)(null),
            x = (0, n.useRef)(i),
            E = (e) => ("hue" === s ? e.getHue() : 100 * e.a),
            S = (0, p.zX)((e) => {
              let t = d({
                offset: e,
                targetRef: y,
                containerRef: v,
                color: i,
                type: s,
              });
              (x.current = t), a(E(t));
            }),
            [w, k] = g({
              color: i,
              targetRef: y,
              containerRef: v,
              calculate: () => u(i, s),
              onDragChange: S,
              onDragChangeComplete() {
                c(E(x.current));
              },
              direction: "x",
              disabledDrag: r,
            }),
            N = n.useMemo(() => {
              if ("hue" === s) {
                let e = i.toHsb();
                return (e.s = 1), (e.b = 1), (e.a = 1), new l(e);
              }
              return i;
            }, [i, s]),
            R = n.useMemo(() => o.map((e) => `${e.color} ${e.percent}%`), [o]);
          return n.createElement(
            "div",
            {
              ref: v,
              className: (0, m.W)(`${t}-slider`, `${t}-slider-${s}`),
              onMouseDown: k,
              onTouchStart: k,
            },
            n.createElement(
              b,
              { prefixCls: t },
              n.createElement(
                h,
                { x: w.x, y: w.y, ref: y },
                n.createElement(f, {
                  size: "small",
                  color: N.toHexString(),
                  prefixCls: t,
                })
              ),
              n.createElement(C, { colors: R, type: s, prefixCls: t })
            )
          );
        };
      function S() {
        return (S = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var o = arguments[t];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (e[n] = o[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      let w = [
        { color: "rgb(255, 0, 0)", percent: 0 },
        { color: "rgb(255, 255, 0)", percent: 17 },
        { color: "rgb(0, 255, 0)", percent: 33 },
        { color: "rgb(0, 255, 255)", percent: 50 },
        { color: "rgb(0, 0, 255)", percent: 67 },
        { color: "rgb(255, 0, 255)", percent: 83 },
        { color: "rgb(255, 0, 0)", percent: 100 },
      ];
      var k = (0, n.forwardRef)((e, t) => {
        let {
            value: o,
            defaultValue: r,
            prefixCls: a = "rc-color-picker",
            onChange: c,
            onChangeComplete: i,
            className: d,
            style: u,
            panelRender: g,
            disabledAlpha: p = !1,
            disabled: f = !1,
            components: b,
          } = e,
          [h] = n.useMemo(() => {
            let { slider: e } = b || {};
            return [e || E];
          }, [b]),
          [C, k] = x(r || s, o),
          N = (0, n.useMemo)(() => C.setA(1).toRgbString(), [C]),
          R = (e, t) => {
            o || k(e), c?.(e, t);
          },
          I = (e) => new l(C.setHue(e)),
          H = (e) => new l(C.setA(e / 100)),
          B = (0, m.W)(`${a}-panel`, d, { [`${a}-panel-disabled`]: f }),
          L = { prefixCls: a, disabled: f, color: C },
          A = n.createElement(
            n.Fragment,
            null,
            n.createElement(y, S({ onChange: R }, L, { onChangeComplete: i })),
            n.createElement(
              "div",
              { className: `${a}-slider-container` },
              n.createElement(
                "div",
                {
                  className: (0, m.W)(`${a}-slider-group`, {
                    [`${a}-slider-group-disabled-alpha`]: p,
                  }),
                },
                n.createElement(
                  h,
                  S({}, L, {
                    type: "hue",
                    colors: w,
                    min: 0,
                    max: 359,
                    value: C.getHue(),
                    onChange: (e) => {
                      R(I(e), { type: "hue", value: e });
                    },
                    onChangeComplete: (e) => {
                      i && i(I(e));
                    },
                  })
                ),
                !p &&
                  n.createElement(
                    h,
                    S({}, L, {
                      type: "alpha",
                      colors: [
                        { percent: 0, color: "rgba(255, 0, 4, 0)" },
                        { percent: 100, color: N },
                      ],
                      min: 0,
                      max: 100,
                      value: 100 * C.a,
                      onChange: (e) => {
                        R(H(e), { type: "alpha", value: e });
                      },
                      onChangeComplete: (e) => {
                        i && i(H(e));
                      },
                    })
                  )
              ),
              n.createElement(v, { color: C.toRgbString(), prefixCls: a })
            )
          );
        return n.createElement(
          "div",
          { className: B, style: u, ref: t },
          "function" == typeof g ? g(A) : A
        );
      });
    },
    51783: function (e, t, o) {
      o.d(t, {
        s: function () {
          return a;
        },
        v: function () {
          return c;
        },
      });
      var n = o(34040);
      let r = "__rc_react_root__";
      function a(e, t) {
        let o = t[r] || (0, n.createRoot)(t);
        o.render(e), (t[r] = o);
      }
      async function c(e) {
        return Promise.resolve().then(() => {
          e[r]?.unmount(), delete e[r];
        });
      }
    },
    19722: function (e, t, o) {
      o.d(t, {
        M2: function () {
          return r;
        },
        Tm: function () {
          return c;
        },
        wm: function () {
          return a;
        },
      });
      var n = o(2265);
      function r(e) {
        return e && n.isValidElement(e) && e.type === n.Fragment;
      }
      let a = (e, t, o) =>
        n.isValidElement(e)
          ? n.cloneElement(e, "function" == typeof o ? o(e.props || {}) : o)
          : t;
      function c(e, t) {
        return a(e, e, t);
      }
    },
    6694: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return C;
        },
      });
      var n = o(2265),
        r = o(19436),
        a = o(90062),
        c = o(61994),
        l = o(71744),
        i = o(19722),
        s = (0, o(99320).A1)("Wave", (e) => {
          let { componentCls: t, colorPrimary: o } = e;
          return {
            [t]: {
              position: "absolute",
              background: "transparent",
              pointerEvents: "none",
              boxSizing: "border-box",
              color: "var(--wave-color, ".concat(o, ")"),
              boxShadow: "0 0 0 0 currentcolor",
              opacity: 0.2,
              "&.wave-motion-appear": {
                transition: [
                  "box-shadow 0.4s ".concat(e.motionEaseOutCirc),
                  "opacity 2s ".concat(e.motionEaseOutCirc),
                ].join(","),
                "&-active": { boxShadow: "0 0 0 6px currentcolor", opacity: 0 },
                "&.wave-quick": {
                  transition: [
                    "box-shadow "
                      .concat(e.motionDurationSlow, " ")
                      .concat(e.motionEaseInOut),
                    "opacity "
                      .concat(e.motionDurationSlow, " ")
                      .concat(e.motionEaseInOut),
                  ].join(","),
                },
              },
            },
          };
        }),
        d = o(73627),
        u = o(72014),
        m = o(84560),
        v = o(34709),
        g = o(77031),
        p = o(51783);
      function f(e) {
        return (
          e &&
          "string" == typeof e &&
          "#fff" !== e &&
          "#ffffff" !== e &&
          "rgb(255, 255, 255)" !== e &&
          "rgba(255, 255, 255, 1)" !== e &&
          !/rgba\((?:\d*, ){3}0\)/.test(e) &&
          "transparent" !== e &&
          "canvastext" !== e
        );
      }
      function b(e) {
        return Number.isNaN(e) ? 0 : e;
      }
      let h = (e) => {
        let { className: t, target: o, component: r, colorSource: l } = e,
          i = n.useRef(null),
          [s, d] = n.useState(null),
          [m, h] = n.useState([]),
          [y, x] = n.useState(0),
          [C, E] = n.useState(0),
          [S, w] = n.useState(0),
          [k, N] = n.useState(0),
          [R, I] = n.useState(!1),
          H = {
            left: y,
            top: C,
            width: S,
            height: k,
            borderRadius: m.map((e) => "".concat(e, "px")).join(" "),
          };
        function B() {
          let e = getComputedStyle(o);
          d(
            (function (e) {
              var t;
              let o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null,
                n = getComputedStyle(e),
                { borderTopColor: r, borderColor: a, backgroundColor: c } = n;
              return o && f(n[o])
                ? n[o]
                : null !== (t = [r, a, c].find(f)) && void 0 !== t
                ? t
                : null;
            })(o, l)
          );
          let t = "static" === e.position,
            { borderLeftWidth: n, borderTopWidth: r } = e;
          x(t ? o.offsetLeft : b(-Number.parseFloat(n))),
            E(t ? o.offsetTop : b(-Number.parseFloat(r))),
            w(o.offsetWidth),
            N(o.offsetHeight);
          let {
            borderTopLeftRadius: a,
            borderTopRightRadius: c,
            borderBottomLeftRadius: i,
            borderBottomRightRadius: s,
          } = e;
          h([a, c, s, i].map((e) => b(Number.parseFloat(e))));
        }
        if (
          (s && (H["--wave-color"] = s),
          n.useEffect(() => {
            if (o) {
              let e;
              let t = (0, u.Z)(() => {
                B(), I(!0);
              });
              return (
                "undefined" != typeof ResizeObserver &&
                  (e = new ResizeObserver(B)).observe(o),
                () => {
                  u.Z.cancel(t), null == e || e.disconnect();
                }
              );
            }
          }, [o]),
          !R)
        )
          return null;
        let L =
          ("Checkbox" === r || "Radio" === r) &&
          (null == o ? void 0 : o.classList.contains(v.A));
        return n.createElement(
          g.ZP,
          {
            visible: !0,
            motionAppear: !0,
            motionName: "wave-motion",
            motionDeadline: 5e3,
            onAppearEnd: (e, t) => {
              if (t.deadline || "opacity" === t.propertyName) {
                var o;
                let e =
                  null === (o = i.current) || void 0 === o
                    ? void 0
                    : o.parentElement;
                (0, p.v)(e).then(() => {
                  null == e || e.remove();
                });
              }
              return !1;
            },
          },
          (e, o) => {
            let { className: r } = e;
            return n.createElement("div", {
              ref: (0, a.sQ)(i, o),
              className: (0, c.W)(t, r, { "wave-quick": L }),
              style: H,
            });
          }
        );
      };
      var y = (e, t) => {
          var o;
          let { component: r } = t;
          if (
            "Checkbox" === r &&
            !(null === (o = e.querySelector("input")) || void 0 === o
              ? void 0
              : o.checked)
          )
            return;
          let a = document.createElement("div");
          (a.style.position = "absolute"),
            (a.style.left = "0px"),
            (a.style.top = "0px"),
            null == e || e.insertBefore(a, null == e ? void 0 : e.firstChild),
            (0, p.s)(n.createElement(h, { ...t, target: e }), a);
        },
        x = (e, t, o, r) => {
          let { wave: a } = n.useContext(l.E_),
            [, c, i] = (0, m.ZP)(),
            s = (0, d.zX)((n) => {
              let l = e.current;
              if ((null == a ? void 0 : a.disabled) || !l) return;
              let s = l.querySelector(".".concat(v.A)) || l,
                { showEffect: d } = a || {};
              (d || y)(s, {
                className: t,
                token: c,
                component: o,
                event: n,
                hashId: i,
                colorSource: r,
              });
            }),
            g = n.useRef(null);
          return (
            n.useEffect(
              () => () => {
                u.Z.cancel(g.current);
              },
              []
            ),
            (e) => {
              u.Z.cancel(g.current),
                (g.current = (0, u.Z)(() => {
                  s(e);
                }));
            }
          );
        },
        C = (e) => {
          let { children: t, disabled: o, component: d, colorSource: u } = e,
            { getPrefixCls: m } = (0, n.useContext)(l.E_),
            v = (0, n.useRef)(null),
            g = m("wave"),
            [, p] = s(g),
            f = x(v, (0, c.W)(g, p), d, u);
          if (
            (n.useEffect(() => {
              let e = v.current;
              if (!e || e.nodeType !== window.Node.ELEMENT_NODE || o) return;
              let t = (t) => {
                !(0, r.Z)(t.target) ||
                  !e.getAttribute ||
                  e.getAttribute("disabled") ||
                  e.disabled ||
                  (e.className.includes("disabled") &&
                    !e.className.includes("disabled:")) ||
                  "true" === e.getAttribute("aria-disabled") ||
                  e.className.includes("-leave") ||
                  f(t);
              };
              return (
                e.addEventListener("click", t, !0),
                () => {
                  e.removeEventListener("click", t, !0);
                }
              );
            }, [o]),
            !n.isValidElement(t))
          )
            return null != t ? t : null;
          let b = (0, a.Yr)(t) ? (0, a.sQ)((0, a.C4)(t), v) : v;
          return (0, i.Tm)(t, { ref: b });
        };
    },
    34709: function (e, t, o) {
      o.d(t, {
        A: function () {
          return r;
        },
      });
      var n = o(71744);
      let r = "".concat(n.Rf, "-wave-target");
    },
    82383: function (e, t, o) {
      o.d(t, {
        Z: function () {
          return Q;
        },
      });
      var n = o(2265),
        r = o(73627),
        a = o(90891),
        c = o(61994),
        l = o(80052),
        i = o(18390),
        s = o(6694),
        d = o(71744),
        u = o(86586),
        m = o(33759),
        v = o(77685),
        g = o(84560);
      let p = n.createContext(void 0);
      var f = o(51248),
        b = o(61935),
        h = o(77031);
      let y = (0, n.forwardRef)((e, t) => {
          let { className: o, style: r, children: a, prefixCls: l } = e,
            i = (0, c.W)("".concat(l, "-icon"), o);
          return n.createElement("span", { ref: t, className: i, style: r }, a);
        }),
        x = (0, n.forwardRef)((e, t) => {
          let { prefixCls: o, className: r, style: a, iconClassName: l } = e,
            i = (0, c.W)("".concat(o, "-loading-icon"), r);
          return n.createElement(
            y,
            { prefixCls: o, className: i, style: a, ref: t },
            n.createElement(b.Z, { className: l })
          );
        }),
        C = () => ({ width: 0, opacity: 0, transform: "scale(0)" }),
        E = (e) => ({
          width: e.scrollWidth,
          opacity: 1,
          transform: "scale(1)",
        });
      var S = (e) => {
          let {
            prefixCls: t,
            loading: o,
            existIcon: r,
            className: a,
            style: l,
            mount: i,
          } = e;
          return r
            ? n.createElement(x, { prefixCls: t, className: a, style: l })
            : n.createElement(
                h.ZP,
                {
                  visible: !!o,
                  motionName: "".concat(t, "-loading-icon-motion"),
                  motionAppear: !i,
                  motionEnter: !i,
                  motionLeave: !i,
                  removeOnLeave: !0,
                  onAppearStart: C,
                  onAppearActive: E,
                  onEnterStart: C,
                  onEnterActive: E,
                  onLeaveStart: E,
                  onLeaveActive: C,
                },
                (e, o) => {
                  let { className: r, style: i } = e,
                    s = { ...l, ...i };
                  return n.createElement(x, {
                    prefixCls: t,
                    className: (0, c.W)(a, r),
                    style: s,
                    ref: o,
                  });
                }
              );
        },
        w = o(38775),
        k = o(12918),
        N = o(19224),
        R = o(99320);
      let I = (e, t) => ({
        ["> span, > ".concat(e)]: {
          "&:not(:last-child)": {
            ["&, & > ".concat(e)]: {
              "&:not(:disabled)": { borderInlineEndColor: t },
            },
          },
          "&:not(:first-child)": {
            ["&, & > ".concat(e)]: {
              "&:not(:disabled)": { borderInlineStartColor: t },
            },
          },
        },
      });
      var H = (e) => {
          let {
            componentCls: t,
            fontSize: o,
            lineWidth: n,
            groupBorderColor: r,
            colorErrorHover: a,
          } = e;
          return {
            ["".concat(t, "-group")]: [
              {
                position: "relative",
                display: "inline-flex",
                ["> span, > ".concat(t)]: {
                  "&:not(:last-child)": {
                    ["&, & > ".concat(t)]: {
                      borderStartEndRadius: 0,
                      borderEndEndRadius: 0,
                    },
                  },
                  "&:not(:first-child)": {
                    marginInlineStart: e.calc(n).mul(-1).equal(),
                    ["&, & > ".concat(t)]: {
                      borderStartStartRadius: 0,
                      borderEndStartRadius: 0,
                    },
                  },
                },
                [t]: {
                  position: "relative",
                  zIndex: 1,
                  "&:hover, &:focus, &:active": { zIndex: 2 },
                  "&[disabled]": { zIndex: 0 },
                },
                ["".concat(t, "-icon-only")]: { fontSize: o },
              },
              I("".concat(t, "-primary"), r),
              I("".concat(t, "-danger"), a),
            ],
          };
        },
        B = o(11357),
        L = o(91378),
        A = o(1319),
        M = o(53454),
        z = o(17431);
      let $ = (e) => {
          let { paddingInline: t, onlyIconSize: o, borderColorDisabled: n } = e;
          return (0, N.IX)(e, {
            buttonPaddingHorizontal: t,
            buttonPaddingVertical: 0,
            buttonIconOnlyFontSize: o,
            colorBorderDisabled: n,
          });
        },
        W = (e) => {
          var t, o, n, r, a, c;
          let l =
              null !== (t = e.contentFontSize) && void 0 !== t ? t : e.fontSize,
            i =
              null !== (o = e.contentFontSizeSM) && void 0 !== o
                ? o
                : e.fontSize,
            s =
              null !== (n = e.contentFontSizeLG) && void 0 !== n
                ? n
                : e.fontSizeLG,
            d =
              null !== (r = e.contentLineHeight) && void 0 !== r
                ? r
                : (0, A.D)(l),
            u =
              null !== (a = e.contentLineHeightSM) && void 0 !== a
                ? a
                : (0, A.D)(i),
            m =
              null !== (c = e.contentLineHeightLG) && void 0 !== c
                ? c
                : (0, A.D)(s),
            v = (0, L.U)(new B.y9(e.colorBgSolid), "#fff") ? "#000" : "#fff",
            g = M.i.reduce(
              (t, o) => ({
                ...t,
                ["".concat(o, "ShadowColor")]: "0 "
                  .concat((0, w.bf)(e.controlOutlineWidth), " 0 ")
                  .concat((0, z.Z)(e["".concat(o, "1")], e.colorBgContainer)),
              }),
              {}
            ),
            p = e.colorBgContainerDisabled,
            f = e.colorBgContainerDisabled;
          return {
            ...g,
            fontWeight: 400,
            iconGap: e.marginXS,
            defaultShadow: "0 "
              .concat(e.controlOutlineWidth, "px 0 ")
              .concat(e.controlTmpOutline),
            primaryShadow: "0 "
              .concat(e.controlOutlineWidth, "px 0 ")
              .concat(e.controlOutline),
            dangerShadow: "0 "
              .concat(e.controlOutlineWidth, "px 0 ")
              .concat(e.colorErrorOutline),
            primaryColor: e.colorTextLightSolid,
            dangerColor: e.colorTextLightSolid,
            borderColorDisabled: e.colorBorderDisabled,
            defaultGhostColor: e.colorBgContainer,
            ghostBg: "transparent",
            defaultGhostBorderColor: e.colorBgContainer,
            paddingInline: e.paddingContentHorizontal - e.lineWidth,
            paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
            paddingInlineSM: 8 - e.lineWidth,
            onlyIconSize: "inherit",
            onlyIconSizeSM: "inherit",
            onlyIconSizeLG: "inherit",
            groupBorderColor: e.colorPrimaryHover,
            linkHoverBg: "transparent",
            textTextColor: e.colorText,
            textTextHoverColor: e.colorText,
            textTextActiveColor: e.colorText,
            textHoverBg: e.colorFillTertiary,
            defaultColor: e.colorText,
            defaultBg: e.colorBgContainer,
            defaultBorderColor: e.colorBorder,
            defaultBorderColorDisabled: e.colorBorder,
            defaultHoverBg: e.colorBgContainer,
            defaultHoverColor: e.colorPrimaryHover,
            defaultHoverBorderColor: e.colorPrimaryHover,
            defaultActiveBg: e.colorBgContainer,
            defaultActiveColor: e.colorPrimaryActive,
            defaultActiveBorderColor: e.colorPrimaryActive,
            solidTextColor: v,
            contentFontSize: l,
            contentFontSizeSM: i,
            contentFontSizeLG: s,
            contentLineHeight: d,
            contentLineHeightSM: u,
            contentLineHeightLG: m,
            paddingBlock: Math.max(
              (e.controlHeight - l * d) / 2 - e.lineWidth,
              0
            ),
            paddingBlockSM: Math.max(
              (e.controlHeightSM - i * u) / 2 - e.lineWidth,
              0
            ),
            paddingBlockLG: Math.max(
              (e.controlHeightLG - s * m) / 2 - e.lineWidth,
              0
            ),
            defaultBgDisabled: p,
            dashedBgDisabled: f,
          };
        };
      var Z = (e) => {
        let { componentCls: t, antCls: o } = e,
          n = (0, R.o_)(o, "btn");
        return {
          [t]: [
            {
              [n("border-width")]: "1px",
              [n("border-color")]: "#000",
              [n("border-color-hover")]: "var(".concat(n("border-color"), ")"),
              [n("border-color-active")]: "var(".concat(n("border-color"), ")"),
              [n("border-color-disabled")]: "var(".concat(
                n("border-color"),
                ")"
              ),
              [n("border-style")]: "solid",
              [n("text-color")]: "#000",
              [n("text-color-hover")]: "var(".concat(n("text-color"), ")"),
              [n("text-color-active")]: "var(".concat(n("text-color"), ")"),
              [n("text-color-disabled")]: "var(".concat(n("text-color"), ")"),
              [n("bg-color")]: "#ddd",
              [n("bg-color-hover")]: "var(".concat(n("bg-color"), ")"),
              [n("bg-color-active")]: "var(".concat(n("bg-color"), ")"),
              [n("bg-color-disabled")]: e.colorBgContainerDisabled,
              [n("bg-color-container")]: e.colorBgContainer,
              [n("shadow")]: "none",
            },
            {
              border: "var("
                .concat(n("border-width"), ") var(")
                .concat(n("border-style"), ") var(")
                .concat(n("border-color"), ")"),
              color: "var(".concat(n("text-color"), ")"),
              backgroundColor: "var(".concat(n("bg-color"), ")"),
              ["&:not(:disabled):not(".concat(t, "-disabled)")]: {
                "&:hover": {
                  border: "var("
                    .concat(n("border-width"), ") var(")
                    .concat(n("border-style"), ") var(")
                    .concat(n("border-color-hover"), ")"),
                  color: "var(".concat(n("text-color-hover"), ")"),
                  backgroundColor: "var(".concat(n("bg-color-hover"), ")"),
                },
                "&:active": {
                  border: "var("
                    .concat(n("border-width"), ") var(")
                    .concat(n("border-style"), ") var(")
                    .concat(n("border-color-active"), ")"),
                  color: "var(".concat(n("text-color-active"), ")"),
                  backgroundColor: "var(".concat(n("bg-color-active"), ")"),
                },
              },
            },
            {
              ["&".concat(t, "-variant-solid")]: {
                [n("solid-bg-color")]: "var(".concat(n("color-base"), ")"),
                [n("solid-bg-color-hover")]: "var(".concat(
                  n("color-hover"),
                  ")"
                ),
                [n("solid-bg-color-active")]: "var(".concat(
                  n("color-active"),
                  ")"
                ),
                [n("border-color")]: "transparent",
                [n("text-color")]: e.colorTextLightSolid,
                [n("bg-color")]: "var(".concat(n("solid-bg-color"), ")"),
                [n("bg-color-hover")]: "var(".concat(
                  n("solid-bg-color-hover"),
                  ")"
                ),
                [n("bg-color-active")]: "var(".concat(
                  n("solid-bg-color-active"),
                  ")"
                ),
                boxShadow: "var(".concat(n("shadow"), ")"),
              },
              ["&"
                .concat(t, "-variant-outlined, &")
                .concat(t, "-variant-dashed")]: {
                [n("border-color")]: "var(".concat(n("color-base"), ")"),
                [n("border-color-hover")]: "var(".concat(n("color-hover"), ")"),
                [n("border-color-active")]: "var(".concat(
                  n("color-active"),
                  ")"
                ),
                [n("bg-color")]: "var(".concat(n("bg-color-container"), ")"),
                [n("text-color")]: "var(".concat(n("color-base"), ")"),
                [n("text-color-hover")]: "var(".concat(n("color-hover"), ")"),
                [n("text-color-active")]: "var(".concat(n("color-active"), ")"),
                boxShadow: "var(".concat(n("shadow"), ")"),
              },
              ["&".concat(t, "-variant-dashed")]: {
                [n("border-style")]: "dashed",
                [n("bg-color-disabled")]: e.dashedBgDisabled,
              },
              ["&".concat(t, "-variant-filled")]: {
                [n("border-color")]: "transparent",
                [n("text-color")]: "var(".concat(n("color-base"), ")"),
                [n("bg-color")]: "var(".concat(n("color-light"), ")"),
                [n("bg-color-hover")]: "var(".concat(
                  n("color-light-hover"),
                  ")"
                ),
                [n("bg-color-active")]: "var(".concat(
                  n("color-light-active"),
                  ")"
                ),
              },
              ["&".concat(t, "-variant-text, &").concat(t, "-variant-link")]: {
                [n("border-color")]: "transparent",
                [n("text-color")]: "var(".concat(n("color-base"), ")"),
                [n("text-color-hover")]: "var(".concat(n("color-hover"), ")"),
                [n("text-color-active")]: "var(".concat(n("color-active"), ")"),
                [n("bg-color")]: "transparent",
                [n("bg-color-hover")]: "transparent",
                [n("bg-color-active")]: "transparent",
                ["&:disabled, &".concat(e.componentCls, "-disabled")]: {
                  background: "transparent",
                  borderColor: "transparent",
                },
              },
              ["&".concat(t, "-variant-text")]: {
                [n("bg-color-hover")]: "var(".concat(n("color-light"), ")"),
                [n("bg-color-active")]: "var(".concat(
                  n("color-light-active"),
                  ")"
                ),
              },
            },
            {
              ["&".concat(t, "-variant-link")]: {
                [n("color-base")]: e.colorLink,
                [n("color-hover")]: e.colorLinkHover,
                [n("color-active")]: e.colorLinkActive,
              },
              ["&".concat(t, "-color-primary")]: {
                [n("color-base")]: e.colorPrimary,
                [n("color-hover")]: e.colorPrimaryHover,
                [n("color-active")]: e.colorPrimaryActive,
                [n("color-light")]: e.colorPrimaryBg,
                [n("color-light-hover")]: e.colorPrimaryBgHover,
                [n("color-light-active")]: e.colorPrimaryBorder,
                [n("shadow")]: e.primaryShadow,
                ["&".concat(t, "-variant-solid")]: {
                  [n("text-color")]: e.primaryColor,
                  [n("text-color-hover")]: "var(".concat(n("text-color"), ")"),
                  [n("text-color-active")]: "var(".concat(n("text-color"), ")"),
                },
              },
              ["&".concat(t, "-color-dangerous")]: {
                [n("color-base")]: e.colorError,
                [n("color-hover")]: e.colorErrorHover,
                [n("color-active")]: e.colorErrorActive,
                [n("color-light")]: e.colorErrorBg,
                [n("color-light-hover")]: e.colorErrorBgFilledHover,
                [n("color-light-active")]: e.colorErrorBgActive,
                [n("shadow")]: e.dangerShadow,
                ["&".concat(t, "-variant-solid")]: {
                  [n("text-color")]: e.dangerColor,
                  [n("text-color-hover")]: "var(".concat(n("text-color"), ")"),
                  [n("text-color-active")]: "var(".concat(n("text-color"), ")"),
                },
              },
              ["&".concat(t, "-color-default")]: {
                [n("solid-bg-color")]: e.colorBgSolid,
                [n("solid-bg-color-hover")]: e.colorBgSolidHover,
                [n("solid-bg-color-active")]: e.colorBgSolidActive,
                [n("color-base")]: e.defaultBorderColor,
                [n("color-hover")]: e.defaultHoverBorderColor,
                [n("color-active")]: e.defaultActiveBorderColor,
                [n("color-light")]: e.colorFillTertiary,
                [n("color-light-hover")]: e.colorFillSecondary,
                [n("color-light-active")]: e.colorFill,
                [n("text-color")]: e.colorText,
                [n("text-color-hover")]: e.defaultHoverBorderColor,
                [n("text-color-active")]: e.defaultActiveBorderColor,
                [n("shadow")]: e.defaultShadow,
                ["&".concat(t, "-variant-solid")]: {
                  [n("text-color")]: e.solidTextColor,
                  [n("text-color-hover")]: "var(".concat(n("text-color"), ")"),
                  [n("text-color-active")]: "var(".concat(n("text-color"), ")"),
                },
                ["&"
                  .concat(t, "-variant-filled, &")
                  .concat(t, "-variant-text")]: {
                  [n("text-color-hover")]: "var(".concat(n("text-color"), ")"),
                  [n("text-color-active")]: "var(".concat(n("text-color"), ")"),
                },
                ["&"
                  .concat(t, "-variant-outlined, &")
                  .concat(t, "-variant-dashed")]: {
                  [n("bg-color-hover")]: e.defaultHoverBg,
                  [n("bg-color-active")]: e.defaultActiveBg,
                },
                ["&".concat(t, "-background-ghost")]: {
                  ["&"
                    .concat(t, "-variant-outlined, &")
                    .concat(t, "-variant-dashed")]: {
                    [n("text-color")]: e.defaultGhostColor,
                    [n("border-color")]: e.defaultGhostBorderColor,
                  },
                },
              },
            },
            M.i.map((o) => {
              let r = e["".concat(o, "6")],
                a = e["".concat(o, "1")],
                c = e["".concat(o, "5")],
                l = e["".concat(o, "2")],
                i = e["".concat(o, "3")],
                s = e["".concat(o, "7")],
                d = e["".concat(o, "ShadowColor")];
              return {
                ["&".concat(t, "-color-").concat(o)]: {
                  [n("color-base")]: r,
                  [n("color-hover")]: c,
                  [n("color-active")]: s,
                  [n("color-light")]: a,
                  [n("color-light-hover")]: l,
                  [n("color-light-active")]: i,
                  [n("shadow")]: d,
                },
              };
            }),
            {
              ["&:disabled, &".concat(e.componentCls, "-disabled")]: {
                cursor: "not-allowed",
                borderColor: e.colorBorderDisabled,
                background: "var(".concat(n("bg-color-disabled"), ")"),
                color: e.colorTextDisabled,
                boxShadow: "none",
              },
            },
            {
              ["&".concat(t, "-background-ghost")]: {
                [n("bg-color")]: "transparent",
                [n("shadow")]: "none",
              },
            },
          ],
        };
      };
      let O = (e) => {
          let {
            componentCls: t,
            iconCls: o,
            fontWeight: n,
            opacityLoading: r,
            motionDurationSlow: a,
            motionEaseInOut: c,
            iconGap: l,
            calc: i,
          } = e;
          return {
            [t]: {
              outline: "none",
              position: "relative",
              display: "inline-flex",
              gap: l,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: n,
              whiteSpace: "nowrap",
              textAlign: "center",
              backgroundImage: "none",
              cursor: "pointer",
              transition: "all "
                .concat(e.motionDurationMid, " ")
                .concat(e.motionEaseInOut),
              userSelect: "none",
              touchAction: "manipulation",
              "&:disabled > *": { pointerEvents: "none" },
              ["".concat(t, "-icon > svg")]: (0, k.Ro)(),
              "> a": { color: "currentColor" },
              "&:not(:disabled)": (0, k.Qy)(e),
              ["&".concat(t, "-two-chinese-chars::first-letter")]: {
                letterSpacing: "0.34em",
              },
              ["&".concat(t, "-two-chinese-chars > *:not(").concat(o, ")")]: {
                marginInlineEnd: "-0.34em",
                letterSpacing: "0.34em",
              },
              ["&".concat(t, "-icon-only")]: {
                paddingInline: 0,
                ["&".concat(t, "-compact-item")]: { flex: "none" },
              },
              ["&".concat(t, "-loading")]: { opacity: r, cursor: "default" },
              ["".concat(t, "-loading-icon")]: {
                transition: ["width", "opacity", "margin"]
                  .map((e) => "".concat(e, " ").concat(a, " ").concat(c))
                  .join(","),
              },
              ["&:not(".concat(t, "-icon-end)")]: {
                ["".concat(t, "-loading-icon-motion")]: {
                  "&-appear-start, &-enter-start": {
                    marginInlineEnd: i(l).mul(-1).equal(),
                  },
                  "&-appear-active, &-enter-active": { marginInlineEnd: 0 },
                  "&-leave-start": { marginInlineEnd: 0 },
                  "&-leave-active": { marginInlineEnd: i(l).mul(-1).equal() },
                },
              },
              "&-icon-end": {
                flexDirection: "row-reverse",
                ["".concat(t, "-loading-icon-motion")]: {
                  "&-appear-start, &-enter-start": {
                    marginInlineStart: i(l).mul(-1).equal(),
                  },
                  "&-appear-active, &-enter-active": { marginInlineStart: 0 },
                  "&-leave-start": { marginInlineStart: 0 },
                  "&-leave-active": { marginInlineStart: i(l).mul(-1).equal() },
                },
              },
            },
          };
        },
        P = (e) => ({
          minWidth: e.controlHeight,
          paddingInline: 0,
          borderRadius: "50%",
        }),
        T = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            {
              componentCls: o,
              controlHeight: n,
              fontSize: r,
              borderRadius: a,
              buttonPaddingHorizontal: c,
              iconCls: l,
              buttonPaddingVertical: i,
              buttonIconOnlyFontSize: s,
            } = e;
          return [
            {
              [t]: {
                fontSize: r,
                height: n,
                padding: "".concat((0, w.bf)(i), " ").concat((0, w.bf)(c)),
                borderRadius: a,
                ["&".concat(o, "-icon-only")]: {
                  width: n,
                  [l]: { fontSize: s },
                },
              },
            },
            { ["".concat(o).concat(o, "-circle").concat(t)]: P(e) },
            {
              ["".concat(o).concat(o, "-round").concat(t)]: {
                borderRadius: e.controlHeight,
                ["&:not(".concat(o, "-icon-only)")]: {
                  paddingInline: e.buttonPaddingHorizontal,
                },
              },
            },
          ];
        },
        D = (e) =>
          T((0, N.IX)(e, { fontSize: e.contentFontSize }), e.componentCls),
        G = (e) =>
          T(
            (0, N.IX)(e, {
              controlHeight: e.controlHeightSM,
              fontSize: e.contentFontSizeSM,
              padding: e.paddingXS,
              buttonPaddingHorizontal: e.paddingInlineSM,
              buttonPaddingVertical: 0,
              borderRadius: e.borderRadiusSM,
              buttonIconOnlyFontSize: e.onlyIconSizeSM,
            }),
            "".concat(e.componentCls, "-sm")
          ),
        F = (e) =>
          T(
            (0, N.IX)(e, {
              controlHeight: e.controlHeightLG,
              fontSize: e.contentFontSizeLG,
              buttonPaddingHorizontal: e.paddingInlineLG,
              buttonPaddingVertical: 0,
              borderRadius: e.borderRadiusLG,
              buttonIconOnlyFontSize: e.onlyIconSizeLG,
            }),
            "".concat(e.componentCls, "-lg")
          ),
        j = (e) => {
          let { componentCls: t } = e;
          return { [t]: { ["&".concat(t, "-block")]: { width: "100%" } } };
        };
      var _ = (0, R.I$)(
          "Button",
          (e) => {
            let t = $(e);
            return [O(t), D(t), G(t), F(t), j(t), Z(t), H(t)];
          },
          W,
          {
            unitless: {
              fontWeight: !0,
              contentLineHeight: !0,
              contentLineHeightSM: !0,
              contentLineHeightLG: !0,
            },
          }
        ),
        q = o(17691);
      let X = (e) => {
        let {
            componentCls: t,
            colorPrimaryHover: o,
            lineWidth: n,
            calc: r,
          } = e,
          a = r(n).mul(-1).equal(),
          c = (e) => {
            let r = ""
                .concat(t, "-compact")
                .concat(e ? "-vertical" : "", "-item"),
              c = "".concat(r).concat(t, "-primary:not([disabled])");
            return {
              [r]: { transition: "none" },
              ["".concat(c, " + ").concat(c, "::before")]: {
                position: "absolute",
                top: e ? a : 0,
                insetInlineStart: e ? 0 : a,
                backgroundColor: o,
                content: '""',
                width: e ? "100%" : n,
                height: e ? n : "100%",
              },
            };
          };
        return { ...c(), ...c(!0) };
      };
      var V = (0, R.bk)(
        ["Button", "compact"],
        (e) => {
          let t = $(e);
          return [
            (0, q.c)(t),
            (function (e) {
              var t, o;
              let n = "".concat(e.componentCls, "-compact-vertical");
              return {
                [n]: {
                  ...((t = e.componentCls),
                  {
                    ["&-item:not(".concat(n, "-last-item)")]: {
                      marginBottom: e.calc(e.lineWidth).mul(-1).equal(),
                    },
                    ["&-item:not(".concat(t, "-status-success)")]: {
                      zIndex: 2,
                    },
                    "&-item": {
                      "&:hover,&:focus,&:active": { zIndex: 3 },
                      "&[disabled]": { zIndex: 0 },
                    },
                  }),
                  ...((o = e.componentCls),
                  {
                    ["&-item:not("
                      .concat(n, "-first-item):not(")
                      .concat(n, "-last-item)")]: { borderRadius: 0 },
                    ["&-item"
                      .concat(n, "-first-item:not(")
                      .concat(n, "-last-item)")]: {
                      ["&, &".concat(o, "-sm, &").concat(o, "-lg")]: {
                        borderEndEndRadius: 0,
                        borderEndStartRadius: 0,
                      },
                    },
                    ["&-item"
                      .concat(n, "-last-item:not(")
                      .concat(n, "-first-item)")]: {
                      ["&, &".concat(o, "-sm, &").concat(o, "-lg")]: {
                        borderStartStartRadius: 0,
                        borderStartEndRadius: 0,
                      },
                    },
                  }),
                },
              };
            })(t),
            X(t),
          ];
        },
        W
      );
      let K = {
          default: ["default", "outlined"],
          primary: ["primary", "solid"],
          dashed: ["default", "dashed"],
          link: ["link", "link"],
          text: ["default", "text"],
        },
        U = n.forwardRef((e, t) => {
          var o, g, b;
          let h;
          let {
              _skipSemantic: x,
              loading: C = !1,
              prefixCls: E,
              color: w,
              variant: k,
              type: N,
              danger: R = !1,
              shape: I,
              size: H,
              disabled: B,
              className: L,
              rootClassName: A,
              children: M,
              icon: z,
              iconPosition: $,
              iconPlacement: W,
              ghost: Z = !1,
              block: O = !1,
              htmlType: P = "button",
              classNames: T,
              styles: D,
              style: G,
              autoInsertSpace: F,
              autoFocus: j,
              ...q
            } = e,
            X = (0, r.qo)(M),
            U = N || "default",
            { button: Q } = n.useContext(d.E_),
            Y = I || (null == Q ? void 0 : Q.shape) || "default",
            [J, ee] = (0, n.useMemo)(() => {
              if (w && k) return [w, k];
              if (N || R) {
                let e = K[U] || [];
                return R ? ["danger", e[1]] : e;
              }
              return (null == Q ? void 0 : Q.color) &&
                (null == Q ? void 0 : Q.variant)
                ? [Q.color, Q.variant]
                : ["default", "outlined"];
            }, [
              w,
              k,
              N,
              R,
              null == Q ? void 0 : Q.color,
              null == Q ? void 0 : Q.variant,
              U,
            ]),
            [et, eo] = (0, n.useMemo)(
              () => (Z && "solid" === ee ? [J, "outlined"] : [J, ee]),
              [J, ee, Z]
            ),
            en = "danger" === et,
            er = en ? "dangerous" : et,
            {
              getPrefixCls: ea,
              direction: ec,
              autoInsertSpace: el,
              className: ei,
              style: es,
              classNames: ed,
              styles: eu,
            } = (0, d.dj)("button"),
            em = null === (o = null != F ? F : el) || void 0 === o || o,
            ev = ea("btn", E),
            [eg, ep] = _(ev),
            ef = (0, n.useContext)(u.Z),
            eb = null != B ? B : ef,
            eh = (0, n.useContext)(p),
            ey = (0, n.useMemo)(
              () =>
                (function (e) {
                  if ("object" == typeof e && e) {
                    let t = null == e ? void 0 : e.delay;
                    return {
                      loading:
                        (t = Number.isNaN(t) || "number" != typeof t ? 0 : t) <=
                        0,
                      delay: t,
                    };
                  }
                  return { loading: !!e, delay: 0 };
                })(C),
              [C]
            ),
            [ex, eC] = (0, n.useState)(ey.loading),
            [eE, eS] = (0, n.useState)(!1),
            ew = (0, n.useRef)(null),
            ek = (0, r.x1)(t, ew),
            eN = 1 === X.length && !z && !(0, f.Dn)(eo),
            eR = (0, n.useRef)(!0);
          n.useEffect(
            () => (
              (eR.current = !1),
              () => {
                eR.current = !0;
              }
            ),
            []
          ),
            (0, a.Z)(() => {
              let e = null;
              return (
                ey.delay > 0
                  ? (e = setTimeout(() => {
                      (e = null), eC(!0);
                    }, ey.delay))
                  : eC(ey.loading),
                function () {
                  e && (clearTimeout(e), (e = null));
                }
              );
            }, [ey.delay, ey.loading]),
            (0, n.useEffect)(() => {
              if (!ew.current || !em) return;
              let e = ew.current.textContent || "";
              eN && (0, f.aG)(e) ? eE || eS(!0) : eE && eS(!1);
            }),
            (0, n.useEffect)(() => {
              j && ew.current && ew.current.focus();
            }, []);
          let eI = n.useCallback(
              (t) => {
                var o;
                if (ex || eb) {
                  t.preventDefault();
                  return;
                }
                null === (o = e.onClick) || void 0 === o || o.call(e, t);
              },
              [e.onClick, ex, eb]
            ),
            { compactSize: eH, compactItemClassnames: eB } = (0, v.ri)(ev, ec),
            eL = (0, m.Z)((e) => {
              var t, o;
              return null !==
                (o =
                  null !== (t = null != H ? H : eH) && void 0 !== t ? t : eh) &&
                void 0 !== o
                ? o
                : e;
            }),
            eA =
              eL &&
              null !== (g = { large: "lg", small: "sm", middle: void 0 }[eL]) &&
              void 0 !== g
                ? g
                : "",
            eM = ex ? "loading" : z,
            ez = null !== (b = null != W ? W : $) && void 0 !== b ? b : "start",
            e$ = (0, r.CE)(q, ["navigate"]),
            eW = {
              ...e,
              type: U,
              color: et,
              variant: eo,
              danger: en,
              shape: Y,
              size: eL,
              disabled: eb,
              loading: ex,
              iconPlacement: ez,
            },
            [eZ, eO] = (0, l.MW)([x ? void 0 : ed, T], [x ? void 0 : eu, D], {
              props: eW,
            }),
            eP = (0, c.W)(
              ev,
              eg,
              ep,
              {
                ["".concat(ev, "-").concat(Y)]:
                  "default" !== Y && "square" !== Y && Y,
                ["".concat(ev, "-").concat(U)]: U,
                ["".concat(ev, "-dangerous")]: R,
                ["".concat(ev, "-color-").concat(er)]: er,
                ["".concat(ev, "-variant-").concat(eo)]: eo,
                ["".concat(ev, "-").concat(eA)]: eA,
                ["".concat(ev, "-icon-only")]: !M && 0 !== M && !!eM,
                ["".concat(ev, "-background-ghost")]: Z && !(0, f.Dn)(eo),
                ["".concat(ev, "-loading")]: ex,
                ["".concat(ev, "-two-chinese-chars")]: eE && em && !ex,
                ["".concat(ev, "-block")]: O,
                ["".concat(ev, "-rtl")]: "rtl" === ec,
                ["".concat(ev, "-icon-end")]: "end" === ez,
              },
              eB,
              L,
              A,
              ei,
              eZ.root
            ),
            eT = { ...eO.root, ...es, ...G },
            eD = { className: eZ.icon, style: eO.icon },
            eG = (e) => n.createElement(y, { prefixCls: ev, ...eD }, e),
            eF = n.createElement(S, {
              existIcon: !!z,
              prefixCls: ev,
              loading: ex,
              mount: eR.current,
              ...eD,
            });
          h =
            z && !ex
              ? eG(z)
              : C && "object" == typeof C && C.icon
              ? eG(C.icon)
              : eF;
          let ej = (0, i.Z)(M)
            ? (0, f.hU)(M, eN && em, eO.content, eZ.content)
            : null;
          if (void 0 !== e$.href)
            return n.createElement(
              "a",
              {
                ...e$,
                className: (0, c.W)(eP, { ["".concat(ev, "-disabled")]: eb }),
                href: eb ? void 0 : e$.href,
                style: eT,
                onClick: eI,
                ref: ek,
                tabIndex: eb ? -1 : 0,
                "aria-disabled": eb,
              },
              h,
              ej
            );
          let e_ = n.createElement(
            "button",
            {
              ...q,
              type: P,
              className: eP,
              style: eT,
              onClick: eI,
              disabled: eb,
              ref: ek,
            },
            h,
            ej,
            eB && n.createElement(V, { prefixCls: ev })
          );
          return (
            (0, f.Dn)(eo) ||
              (e_ = n.createElement(
                s.Z,
                { component: "Button", disabled: ex },
                e_
              )),
            e_
          );
        });
      (U.Group = (e) => {
        let { getPrefixCls: t, direction: o } = n.useContext(d.E_),
          { prefixCls: r, size: a, className: l, ...i } = e,
          s = t("btn-group", r),
          [, , u] = (0, g.ZP)(),
          m = n.useMemo(() => {
            switch (a) {
              case "large":
                return "lg";
              case "small":
                return "sm";
              default:
                return "";
            }
          }, [a]),
          v = (0, c.W)(
            s,
            {
              ["".concat(s, "-").concat(m)]: m,
              ["".concat(s, "-rtl")]: "rtl" === o,
            },
            l,
            u
          );
        return n.createElement(
          p.Provider,
          { value: a },
          n.createElement("div", { ...i, className: v })
        );
      }),
        (U.__ANT_BUTTON = !0);
      var Q = U;
    },
    51248: function (e, t, o) {
      o.d(t, {
        Dn: function () {
          return v;
        },
        aG: function () {
          return d;
        },
        hU: function () {
          return g;
        },
        nx: function () {
          return u;
        },
      });
      var n = o(19103),
        r = o(2265),
        a = o(61994),
        c = o(18390),
        l = o(19722),
        i = o(53454);
      let s = /^[\u4E00-\u9FA5]{2}$/,
        d = s.test.bind(s);
      function u(e) {
        return "danger" === e ? { danger: !0 } : { type: e };
      }
      function m(e) {
        return "string" == typeof e;
      }
      function v(e) {
        return "text" === e || "link" === e;
      }
      function g(e, t, o, n) {
        let i = !1,
          s = [];
        return (
          r.Children.forEach(e, (e) => {
            let t = typeof e,
              o = "string" === t || "number" === t;
            if (i && o) {
              let t = s.length - 1,
                o = s[t];
              s[t] = "".concat(o).concat(e);
            } else s.push(e);
            i = o;
          }),
          r.Children.map(s, (e) =>
            (function (e, t, o, n) {
              if (!(0, c.Z)(e) || "" === e) return;
              let i = t ? " " : "";
              return "string" != typeof e &&
                "number" != typeof e &&
                m(e.type) &&
                d(e.props.children)
                ? (0, l.Tm)(e, (e) => ({
                    ...e,
                    children: e.children.split("").join(i),
                    className: n,
                    style: o,
                  }))
                : m(e)
                ? r.createElement(
                    "span",
                    { className: n, style: o },
                    d(e) ? e.split("").join(i) : e
                  )
                : (0, l.M2)(e)
                ? r.createElement("span", { className: n, style: o }, e)
                : (0, l.Tm)(e, (e) => ({
                    ...e,
                    className: (0, a.W)(e.className, n) || void 0,
                    style: { ...e.style, ...o },
                  }));
            })(e, t, o, n)
          )
        );
      }
      ["default", "primary", "danger"].concat((0, n.Z)(i.i));
    },
    1435: function (e, t, o) {
      o.d(t, {
        default: function () {
          return W;
        },
      });
      var n = o(2265),
        r = o(77565),
        a = o(1119),
        c = o(61994),
        l = o(73627),
        i = o(71134),
        s = o(70372),
        d = o(77031),
        u = o(74576);
      let m = n.forwardRef((e, t) => {
          let {
              prefixCls: o,
              forceRender: r,
              className: a,
              style: l,
              children: i,
              isActive: s,
              role: d,
              classNames: u,
              styles: m,
            } = e,
            [v, g] = n.useState(s || r);
          return (n.useEffect(() => {
            (r || s) && g(!0);
          }, [r, s]),
          v)
            ? n.createElement(
                "div",
                {
                  ref: t,
                  className: (0, c.W)(
                    `${o}-panel`,
                    { [`${o}-panel-active`]: s, [`${o}-panel-inactive`]: !s },
                    a
                  ),
                  style: l,
                  role: d,
                },
                n.createElement(
                  "div",
                  { className: (0, c.W)(`${o}-body`, u?.body), style: m?.body },
                  i
                )
              )
            : null;
        }),
        v = n.forwardRef((e, t) => {
          let {
              showArrow: o = !0,
              headerClass: r,
              isActive: l,
              onItemClick: i,
              forceRender: s,
              className: v,
              classNames: g = {},
              styles: p = {},
              prefixCls: f,
              collapsible: b,
              accordion: h,
              panelKey: y,
              extra: x,
              header: C,
              expandIcon: E,
              openMotion: S,
              destroyOnHidden: w,
              children: k,
              ...N
            } = e,
            R = "disabled" === b,
            I = {
              onClick: () => {
                i?.(y);
              },
              onKeyDown: (e) => {
                ("Enter" === e.key ||
                  e.keyCode === u.default.ENTER ||
                  e.which === u.default.ENTER) &&
                  i?.(y);
              },
              role: h ? "tab" : "button",
              "aria-expanded": l,
              "aria-disabled": R,
              tabIndex: R ? -1 : 0,
            },
            H =
              "function" == typeof E
                ? E(e)
                : n.createElement("i", { className: "arrow" }),
            B =
              H &&
              n.createElement(
                "div",
                (0, a.Z)(
                  {
                    className: (0, c.W)(`${f}-expand-icon`, g?.icon),
                    style: p?.icon,
                  },
                  ["header", "icon"].includes(b) ? I : {}
                ),
                H
              ),
            L = (0, c.W)(
              `${f}-item`,
              { [`${f}-item-active`]: l, [`${f}-item-disabled`]: R },
              v
            ),
            A = {
              className: (0, c.W)(
                r,
                `${f}-header`,
                { [`${f}-collapsible-${b}`]: !!b },
                g?.header
              ),
              style: p?.header,
              ...(["header", "icon"].includes(b) ? {} : I),
            };
          return n.createElement(
            "div",
            (0, a.Z)({}, N, { ref: t, className: L }),
            n.createElement(
              "div",
              A,
              o && B,
              n.createElement(
                "span",
                (0, a.Z)(
                  {
                    className: (0, c.W)(`${f}-title`, g?.title),
                    style: p?.title,
                  },
                  "header" === b ? I : {}
                ),
                C
              ),
              null != x &&
                "boolean" != typeof x &&
                n.createElement("div", { className: `${f}-extra` }, x)
            ),
            n.createElement(
              d.ZP,
              (0, a.Z)(
                { visible: l, leavedClassName: `${f}-panel-hidden` },
                S,
                { forceRender: s, removeOnLeave: w }
              ),
              ({ className: e, style: t }, o) =>
                n.createElement(
                  m,
                  {
                    ref: o,
                    prefixCls: f,
                    className: e,
                    classNames: g,
                    style: t,
                    styles: p,
                    isActive: l,
                    forceRender: s,
                    role: h ? "tabpanel" : void 0,
                  },
                  k
                )
            )
          );
        }),
        g = (e, t) => {
          let {
            prefixCls: o,
            accordion: r,
            collapsible: c,
            destroyOnHidden: l,
            onItemClick: i,
            activeKey: s,
            openMotion: d,
            expandIcon: u,
            classNames: m,
            styles: g,
          } = t;
          return e.map((e, t) => {
            let {
                children: p,
                label: f,
                key: b,
                collapsible: h,
                onItemClick: y,
                destroyOnHidden: x,
                ...C
              } = e,
              E = String(b ?? t),
              S = h ?? c,
              w = !1;
            return (
              (w = r ? s[0] === E : s.indexOf(E) > -1),
              n.createElement(
                v,
                (0, a.Z)({}, C, {
                  classNames: m,
                  styles: g,
                  prefixCls: o,
                  key: E,
                  panelKey: E,
                  isActive: w,
                  accordion: r,
                  openMotion: d,
                  expandIcon: u,
                  header: f,
                  collapsible: S,
                  onItemClick: (e) => {
                    "disabled" !== S && (i(e), y?.(e));
                  },
                  destroyOnHidden: x ?? l,
                }),
                p
              )
            );
          });
        },
        p = (e, t, o) => {
          if (!e) return null;
          let {
              prefixCls: r,
              accordion: a,
              collapsible: c,
              destroyOnHidden: l,
              onItemClick: i,
              activeKey: s,
              openMotion: d,
              expandIcon: u,
              classNames: m,
              styles: v,
            } = o,
            g = e.key || String(t),
            {
              header: p,
              headerClass: f,
              destroyOnHidden: b,
              collapsible: h,
              onItemClick: y,
            } = e.props,
            x = !1;
          x = a ? s[0] === g : s.indexOf(g) > -1;
          let C = h ?? c,
            E = {
              key: g,
              panelKey: g,
              header: p,
              headerClass: f,
              classNames: m,
              styles: v,
              isActive: x,
              prefixCls: r,
              destroyOnHidden: b ?? l,
              openMotion: d,
              accordion: a,
              children: e.props.children,
              onItemClick: (e) => {
                "disabled" !== C && (i(e), y?.(e));
              },
              expandIcon: u,
              collapsible: C,
            };
          return "string" == typeof e.type
            ? e
            : (Object.keys(E).forEach((e) => {
                void 0 === E[e] && delete E[e];
              }),
              n.cloneElement(e, E));
        };
      var f = o(87011);
      function b(e) {
        let t = e;
        if (!Array.isArray(t)) {
          let e = typeof t;
          t = "number" === e || "string" === e ? [t] : [];
        }
        return t.map((e) => String(e));
      }
      var h = Object.assign(
        n.forwardRef((e, t) => {
          var o;
          let {
              prefixCls: r = "rc-collapse",
              destroyOnHidden: d = !1,
              style: u,
              accordion: m,
              className: v,
              children: h,
              collapsible: y,
              openMotion: x,
              expandIcon: C,
              activeKey: E,
              defaultActiveKey: S,
              onChange: w,
              items: k,
              classNames: N,
              styles: R,
            } = e,
            I = (0, c.W)(r, v),
            [H, B] = (0, l.zk)(S, E),
            L = b(H),
            A = (0, l.zX)((e) => {
              let t = b(e);
              B(t), w?.(t);
            });
          (0, i.ZP)(
            !h,
            "[rc-collapse] `children` will be removed in next major version. Please use `items` instead."
          );
          let M =
            ((o = {
              prefixCls: r,
              accordion: m,
              openMotion: x,
              expandIcon: C,
              collapsible: y,
              destroyOnHidden: d,
              onItemClick: (e) => {
                m
                  ? A(L[0] === e ? [] : [e])
                  : A(L.includes(e) ? L.filter((t) => t !== e) : [...L, e]);
              },
              activeKey: L,
              classNames: N,
              styles: R,
            }),
            Array.isArray(k) ? g(k, o) : (0, s.Z)(h).map((e, t) => p(e, t, o)));
          return n.createElement(
            "div",
            (0, a.Z)(
              { ref: t, className: I, style: u, role: m ? "tablist" : void 0 },
              (0, f.Z)(e, { aria: !0, data: !0 })
            ),
            M
          );
        }),
        { Panel: v }
      );
      let { Panel: y } = h;
      var x = o(80052),
        C = o(68710),
        E = o(19722),
        S = o(71744),
        w = o(33759);
      let k = n.forwardRef((e, t) => {
        let { getPrefixCls: o } = n.useContext(S.E_),
          { prefixCls: r, className: a, showArrow: l = !0 } = e,
          i = o("collapse", r),
          s = (0, c.W)({ ["".concat(i, "-no-arrow")]: !l }, a);
        return n.createElement(h.Panel, {
          ref: t,
          ...e,
          prefixCls: i,
          className: s,
        });
      });
      var N = o(38775),
        R = o(12918),
        I = o(63074),
        H = o(99320),
        B = o(19224);
      let L = (e) => {
          let {
              componentCls: t,
              contentBg: o,
              padding: n,
              headerBg: r,
              headerPadding: a,
              collapseHeaderPaddingSM: c,
              collapseHeaderPaddingLG: l,
              collapsePanelBorderRadius: i,
              lineWidth: s,
              lineType: d,
              colorBorder: u,
              colorText: m,
              colorTextHeading: v,
              colorTextDisabled: g,
              fontSizeLG: p,
              lineHeight: f,
              lineHeightLG: b,
              marginSM: h,
              paddingSM: y,
              paddingLG: x,
              paddingXS: C,
              motionDurationSlow: E,
              fontSizeIcon: S,
              contentPadding: w,
              fontHeight: k,
              fontHeightLG: I,
            } = e,
            H = ""
              .concat((0, N.bf)(s), " ")
              .concat(d, " ")
              .concat(u);
          return {
            [t]: {
              ...(0, R.Wf)(e),
              backgroundColor: r,
              border: H,
              borderRadius: i,
              "&-rtl": { direction: "rtl" },
              ["& > ".concat(t, "-item")]: {
                borderBottom: H,
                "&:first-child": {
                  ["\n            &,\n            & > ".concat(t, "-header")]: {
                    borderRadius: ""
                      .concat((0, N.bf)(i), " ")
                      .concat((0, N.bf)(i), " 0 0"),
                  },
                },
                "&:last-child": {
                  ["\n            &,\n            & > ".concat(t, "-header")]: {
                    borderRadius: "0 0 "
                      .concat((0, N.bf)(i), " ")
                      .concat((0, N.bf)(i)),
                  },
                },
                ["> ".concat(t, "-header")]: {
                  position: "relative",
                  display: "flex",
                  flexWrap: "nowrap",
                  alignItems: "flex-start",
                  padding: a,
                  color: v,
                  lineHeight: f,
                  cursor: "pointer",
                  transition: "all ".concat(E, ", visibility 0s"),
                  ...(0, R.Qy)(e),
                  ["> ".concat(t, "-title")]: { flex: "auto" },
                  ["".concat(t, "-expand-icon")]: {
                    height: k,
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: h,
                  },
                  ["".concat(t, "-arrow")]: {
                    ...(0, R.Ro)(),
                    fontSize: S,
                    transition: "transform ".concat(E),
                    svg: { transition: "transform ".concat(E) },
                  },
                  ["".concat(t, "-title")]: { marginInlineEnd: "auto" },
                },
                ["".concat(t, "-collapsible-header")]: {
                  cursor: "default",
                  ["".concat(t, "-title")]: { flex: "none", cursor: "pointer" },
                  ["".concat(t, "-expand-icon")]: { cursor: "pointer" },
                },
                ["".concat(t, "-collapsible-icon")]: {
                  cursor: "unset",
                  ["".concat(t, "-expand-icon")]: { cursor: "pointer" },
                },
              },
              ["".concat(t, "-panel")]: {
                color: m,
                backgroundColor: o,
                borderTop: H,
                ["& > ".concat(t, "-body")]: { padding: w },
                "&-hidden": { display: "none" },
              },
              "&-small": {
                ["> ".concat(t, "-item")]: {
                  ["> ".concat(t, "-header")]: {
                    padding: c,
                    paddingInlineStart: C,
                    ["> ".concat(t, "-expand-icon")]: {
                      marginInlineStart: e.calc(y).sub(C).equal(),
                    },
                  },
                  ["> ".concat(t, "-panel > ").concat(t, "-body")]: {
                    padding: y,
                  },
                },
              },
              "&-large": {
                ["> ".concat(t, "-item")]: {
                  fontSize: p,
                  lineHeight: b,
                  ["> ".concat(t, "-header")]: {
                    padding: l,
                    paddingInlineStart: n,
                    ["> ".concat(t, "-expand-icon")]: {
                      height: I,
                      marginInlineStart: e.calc(x).sub(n).equal(),
                    },
                  },
                  ["> ".concat(t, "-panel > ").concat(t, "-body")]: {
                    padding: x,
                  },
                },
              },
              ["".concat(t, "-item:last-child")]: {
                borderBottom: 0,
                ["> ".concat(t, "-panel")]: {
                  borderRadius: "0 0 "
                    .concat((0, N.bf)(i), " ")
                    .concat((0, N.bf)(i)),
                },
              },
              ["& ".concat(t, "-item-disabled > ").concat(t, "-header")]: {
                "\n          &,\n          & > .arrow\n        ": {
                  color: g,
                  cursor: "not-allowed",
                },
              },
              ["&".concat(t, "-icon-placement-end")]: {
                ["& > ".concat(t, "-item")]: {
                  ["> ".concat(t, "-header")]: {
                    ["".concat(t, "-expand-icon")]: {
                      order: 1,
                      marginInlineEnd: 0,
                      marginInlineStart: h,
                    },
                  },
                },
              },
            },
          };
        },
        A = (e) => {
          let { componentCls: t } = e,
            o = "> "
              .concat(t, "-item > ")
              .concat(t, "-header ")
              .concat(t, "-arrow");
          return {
            ["".concat(t, "-rtl")]: { [o]: { transform: "rotate(180deg)" } },
          };
        },
        M = (e) => {
          let {
            componentCls: t,
            headerBg: o,
            borderlessContentPadding: n,
            borderlessContentBg: r,
            colorBorder: a,
          } = e;
          return {
            ["".concat(t, "-borderless")]: {
              backgroundColor: o,
              border: 0,
              ["> ".concat(t, "-item")]: {
                borderBottom: "1px solid ".concat(a),
              },
              ["\n        > "
                .concat(t, "-item:last-child,\n        > ")
                .concat(t, "-item:last-child ")
                .concat(t, "-header\n      ")]: { borderRadius: 0 },
              ["> ".concat(t, "-item:last-child")]: { borderBottom: 0 },
              ["> ".concat(t, "-item > ").concat(t, "-panel")]: {
                backgroundColor: r,
                borderTop: 0,
              },
              ["> "
                .concat(t, "-item > ")
                .concat(t, "-panel > ")
                .concat(t, "-body")]: { padding: n },
            },
          };
        },
        z = (e) => {
          let { componentCls: t, paddingSM: o } = e;
          return {
            ["".concat(t, "-ghost")]: {
              backgroundColor: "transparent",
              border: 0,
              ["> ".concat(t, "-item")]: {
                borderBottom: 0,
                ["> ".concat(t, "-panel")]: {
                  backgroundColor: "transparent",
                  border: 0,
                  ["> ".concat(t, "-body")]: { paddingBlock: o },
                },
              },
            },
          };
        };
      var $ = (0, H.I$)(
          "Collapse",
          (e) => {
            let t = (0, B.IX)(e, {
              collapseHeaderPaddingSM: ""
                .concat((0, N.bf)(e.paddingXS), " ")
                .concat((0, N.bf)(e.paddingSM)),
              collapseHeaderPaddingLG: ""
                .concat((0, N.bf)(e.padding), " ")
                .concat((0, N.bf)(e.paddingLG)),
              collapsePanelBorderRadius: e.borderRadiusLG,
            });
            return [L(t), M(t), z(t), A(t), (0, I.Z)(t)];
          },
          (e) => ({
            headerPadding: ""
              .concat(e.paddingSM, "px ")
              .concat(e.padding, "px"),
            headerBg: e.colorFillAlter,
            contentPadding: "".concat(e.padding, "px 16px"),
            contentBg: e.colorBgContainer,
            borderlessContentPadding: ""
              .concat(e.paddingXXS, "px 16px ")
              .concat(e.padding, "px"),
            borderlessContentBg: "transparent",
          })
        ),
        W = Object.assign(
          n.forwardRef((e, t) => {
            var o;
            let {
                getPrefixCls: a,
                direction: i,
                expandIcon: s,
                className: d,
                style: u,
                classNames: m,
                styles: v,
              } = (0, S.dj)("collapse"),
              {
                prefixCls: g,
                className: p,
                rootClassName: f,
                style: b,
                bordered: y = !0,
                ghost: k,
                size: N,
                expandIconPlacement: R,
                expandIconPosition: I,
                children: H,
                destroyInactivePanel: B,
                destroyOnHidden: L,
                expandIcon: A,
                classNames: M,
                styles: z,
              } = e,
              W = (0, w.Z)((e) => {
                var t;
                return null !== (t = null != N ? N : e) && void 0 !== t
                  ? t
                  : "middle";
              }),
              Z = a("collapse", g),
              O = a(),
              [P, T] = $(Z),
              D =
                null !== (o = null != R ? R : I) && void 0 !== o ? o : "start",
              G = { ...e, size: W, bordered: y, expandIconPlacement: D },
              [F, j] = (0, x.MW)([m, M], [v, z], { props: G }),
              _ = null != A ? A : s,
              q = n.useCallback(
                function () {
                  let e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    t =
                      "function" == typeof _
                        ? _(e)
                        : n.createElement(r.Z, {
                            rotate: e.isActive
                              ? "rtl" === i
                                ? -90
                                : 90
                              : void 0,
                            "aria-label": e.isActive ? "expanded" : "collapsed",
                          });
                  return (0, E.Tm)(t, () => {
                    var e;
                    return {
                      className: (0, c.W)(
                        null == t
                          ? void 0
                          : null === (e = t.props) || void 0 === e
                          ? void 0
                          : e.className,
                        "".concat(Z, "-arrow")
                      ),
                    };
                  });
                },
                [_, Z, i]
              ),
              X = (0, c.W)(
                "".concat(Z, "-icon-placement-").concat(D),
                {
                  ["".concat(Z, "-borderless")]: !y,
                  ["".concat(Z, "-rtl")]: "rtl" === i,
                  ["".concat(Z, "-ghost")]: !!k,
                  ["".concat(Z, "-").concat(W)]: "middle" !== W,
                },
                d,
                p,
                f,
                P,
                T,
                F.root
              ),
              V = n.useMemo(
                () => ({
                  ...(0, C.Z)(O),
                  motionAppear: !1,
                  leavedClassName: "".concat(Z, "-panel-hidden"),
                }),
                [O, Z]
              ),
              K = n.useMemo(() => (H ? (0, l.qo)(H).map((e) => e) : null), [H]);
            return n.createElement(
              h,
              {
                ref: t,
                openMotion: V,
                ...(0, l.CE)(e, ["rootClassName"]),
                expandIcon: q,
                prefixCls: Z,
                className: X,
                style: { ...j.root, ...u, ...b },
                classNames: F,
                styles: j,
                destroyOnHidden: null != L ? L : B,
              },
              K
            );
          }),
          { Panel: k }
        );
    },
    11357: function (e, t, o) {
      o.d(t, {
        Ot: function () {
          return c;
        },
        y9: function () {
          return i;
        },
      });
      var n = o(76405),
        r = o(25049),
        a = o(75669);
      let c = (e, t) =>
          (null == e ? void 0 : e.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6)) ||
          "",
        l = (e, t) => (e ? c(e, t) : ""),
        i = (0, r.Z)(
          function e(t) {
            if (((0, n.Z)(this, e), (this.cleared = !1), t instanceof e)) {
              var o;
              (this.metaColor = t.metaColor.clone()),
                (this.colors =
                  null === (o = t.colors) || void 0 === o
                    ? void 0
                    : o.map((t) => ({
                        color: new e(t.color),
                        percent: t.percent,
                      }))),
                (this.cleared = t.cleared);
              return;
            }
            let r = Array.isArray(t);
            r && t.length
              ? ((this.colors = t.map((t) => {
                  let { color: o, percent: n } = t;
                  return { color: new e(o), percent: n };
                })),
                (this.metaColor = new a.Il(this.colors[0].color.metaColor)))
              : (this.metaColor = new a.Il(r ? "" : t)),
              (t && (!r || this.colors)) ||
                ((this.metaColor = this.metaColor.setA(0)),
                (this.cleared = !0));
          },
          [
            {
              key: "toHsb",
              value: function () {
                return this.metaColor.toHsb();
              },
            },
            {
              key: "toHsbString",
              value: function () {
                return this.metaColor.toHsbString();
              },
            },
            {
              key: "toHex",
              value: function () {
                return l(this.toHexString(), this.metaColor.a < 1);
              },
            },
            {
              key: "toHexString",
              value: function () {
                return this.metaColor.toHexString();
              },
            },
            {
              key: "toRgb",
              value: function () {
                return this.metaColor.toRgb();
              },
            },
            {
              key: "toRgbString",
              value: function () {
                return this.metaColor.toRgbString();
              },
            },
            {
              key: "isGradient",
              value: function () {
                return !!this.colors && !this.cleared;
              },
            },
            {
              key: "getColors",
              value: function () {
                return this.colors || [{ color: this, percent: 0 }];
              },
            },
            {
              key: "toCssString",
              value: function () {
                let { colors: e } = this;
                if (e) {
                  let t = e
                    .map((e) =>
                      ""
                        .concat(e.color.toRgbString(), " ")
                        .concat(e.percent, "%")
                    )
                    .join(", ");
                  return "linear-gradient(90deg, ".concat(t, ")");
                }
                return this.metaColor.toRgbString();
              },
            },
            {
              key: "equals",
              value: function (e) {
                return (
                  !!e &&
                  this.isGradient() === e.isGradient() &&
                  (this.isGradient()
                    ? this.colors.length === e.colors.length &&
                      this.colors.every((t, o) => {
                        let n = e.colors[o];
                        return (
                          t.percent === n.percent && t.color.equals(n.color)
                        );
                      })
                    : this.toHexString() === e.toHexString())
                );
              },
            },
          ]
        );
    },
    91378: function (e, t, o) {
      o.d(t, {
        U: function () {
          return u;
        },
      });
      var n = o(2265),
        r = o(75669),
        a = o(61994),
        c = o(1435),
        l = o(55274),
        i = o(84560),
        s = o(50330);
      let d = (e) => e.map((e) => ((e.colors = e.colors.map(s.vC)), e)),
        u = (e, t) => {
          let { r: o, g: n, b: a, a: c } = e.toRgb(),
            l = new r.Il(e.toRgbString()).onBackground(t).toHsv();
          return c <= 0.5 ? l.v > 0.5 : 0.299 * o + 0.587 * n + 0.114 * a > 192;
        },
        m = (e, t) => {
          var o;
          let n = null !== (o = e.key) && void 0 !== o ? o : t;
          return "panel-".concat(n);
        };
      t.Z = (e) => {
        let { prefixCls: t, presets: o, value: v, onChange: g } = e,
          [p] = (0, l.Z)("ColorPicker"),
          [, f] = (0, i.ZP)(),
          b = (0, n.useMemo)(() => d(o), [o]),
          h = "".concat(t, "-presets"),
          y = (0, n.useMemo)(
            () =>
              b.reduce((e, t, o) => {
                let { defaultOpen: n = !0 } = t;
                return n && e.push(m(t, o)), e;
              }, []),
            [b]
          ),
          x = (e) => {
            null == g || g(e);
          },
          C = b.map((e, o) => {
            var c;
            return {
              key: m(e, o),
              label: n.createElement(
                "div",
                { className: "".concat(h, "-label") },
                null == e ? void 0 : e.label
              ),
              children: n.createElement(
                "div",
                { className: "".concat(h, "-items") },
                Array.isArray(null == e ? void 0 : e.colors) &&
                  (null === (c = e.colors) || void 0 === c
                    ? void 0
                    : c.length) > 0
                  ? e.colors.map((e, o) => {
                      let c = (0, s.vC)(e);
                      return n.createElement(r.G5, {
                        key: "preset-".concat(o, "-").concat(e.toHexString()),
                        color: c.toCssString(),
                        prefixCls: t,
                        className: (0, a.W)("".concat(h, "-color"), {
                          ["".concat(h, "-color-checked")]:
                            e.toCssString() ===
                            (null == v ? void 0 : v.toCssString()),
                          ["".concat(h, "-color-bright")]: u(
                            e,
                            f.colorBgElevated
                          ),
                        }),
                        onClick: () => x(e),
                      });
                    })
                  : n.createElement(
                      "span",
                      { className: "".concat(h, "-empty") },
                      p.presetEmpty
                    )
              ),
            };
          });
        return n.createElement(
          "div",
          { className: h },
          n.createElement(c.default, {
            defaultActiveKey: y,
            ghost: !0,
            items: C,
          })
        );
      };
    },
    50330: function (e, t, o) {
      o.d(t, {
        AO: function () {
          return d;
        },
        T7: function () {
          return s;
        },
        lx: function () {
          return l;
        },
        uZ: function () {
          return i;
        },
        vC: function () {
          return c;
        },
      });
      var n = o(19103),
        r = o(75669),
        a = o(11357);
      let c = (e) => (e instanceof a.y9 ? e : new a.y9(e)),
        l = (e) => Math.round(Number(e || 0)),
        i = (e) => l(100 * e.toHsb().a),
        s = (e, t) => {
          let o = e.toRgb();
          if (!o.r && !o.g && !o.b) {
            let o = e.toHsb();
            return (o.a = t || 1), c(o);
          }
          return (o.a = t || 1), c(o);
        },
        d = (e, t) => {
          let o = [{ percent: 0, color: e[0].color }].concat((0, n.Z)(e), [
            { percent: 100, color: e[e.length - 1].color },
          ]);
          for (let e = 0; e < o.length - 1; e += 1) {
            let n = o[e].percent,
              a = o[e + 1].percent,
              c = o[e].color,
              l = o[e + 1].color;
            if (n <= t && t <= a) {
              let e = a - n;
              if (0 === e) return c;
              let o = ((t - n) / e) * 100,
                i = new r.Il(c),
                s = new r.Il(l);
              return i.mix(s, o).toRgbString();
            }
          }
          return "";
        };
    },
    63074: function (e, t) {
      t.Z = (e) => ({
        [e.componentCls]: {
          ["".concat(e.antCls, "-motion-collapse-legacy")]: {
            overflow: "hidden",
            "&-active": {
              transition: "height "
                .concat(e.motionDurationMid, " ")
                .concat(e.motionEaseInOut, ",\n        opacity ")
                .concat(e.motionDurationMid, " ")
                .concat(e.motionEaseInOut, " !important"),
            },
          },
          ["".concat(e.antCls, "-motion-collapse")]: {
            overflow: "hidden",
            transition: "height "
              .concat(e.motionDurationMid, " ")
              .concat(e.motionEaseInOut, ",\n        opacity ")
              .concat(e.motionDurationMid, " ")
              .concat(e.motionEaseInOut, " !important"),
          },
        },
      });
    },
    53454: function (e, t, o) {
      o.d(t, {
        i: function () {
          return n;
        },
      });
      let n = [
        "blue",
        "purple",
        "cyan",
        "green",
        "magenta",
        "pink",
        "red",
        "orange",
        "yellow",
        "volcano",
        "geekblue",
        "lime",
        "gold",
      ];
    },
  },
]);
