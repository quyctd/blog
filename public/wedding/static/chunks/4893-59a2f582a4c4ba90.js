"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4893],
  {
    64625: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var o = n(2265),
        a = n(61994),
        r = n(13613),
        l = n(71744),
        c = n(12224),
        i = n(23248),
        s = n(62239),
        d = n(52402),
        u = (0, n(99320).I$)(
          "App",
          (e) => {
            let {
              componentCls: t,
              colorText: n,
              fontSize: o,
              lineHeight: a,
              fontFamily: r,
            } = e;
            return {
              [t]: {
                color: n,
                fontSize: o,
                lineHeight: a,
                fontFamily: r,
                ["&".concat(t, "-rtl")]: { direction: "rtl" },
              },
            };
          },
          () => ({})
        );
      let m = (e) => {
        let {
            prefixCls: t,
            children: n,
            className: m,
            rootClassName: p,
            message: g,
            notification: f,
            style: h,
            component: b = "div",
          } = e,
          { direction: v, getPrefixCls: y } = (0, o.useContext)(l.E_),
          x = y("app", t),
          [C, w] = u(x),
          E = (0, a.W)(C, x, m, p, w, { ["".concat(x, "-rtl")]: "rtl" === v }),
          k = (0, o.useContext)(d.J),
          N = o.useMemo(
            () => ({
              message: { ...k.message, ...g },
              notification: { ...k.notification, ...f },
            }),
            [g, f, k.message, k.notification]
          ),
          [S, R] = (0, c.Z)(N.message),
          [I, Z] = (0, s.Z)(N.notification),
          [W, P] = (0, i.Z)(),
          M = o.useMemo(
            () => ({ message: S, notification: I, modal: W }),
            [S, I, W]
          );
        (0, r.ln)("App")(
          !(w && !1 === b),
          "usage",
          "When using cssVar, ensure `component` is assigned a valid React component string."
        );
        let H = !1 === b ? o.Fragment : b;
        return o.createElement(
          d.Z.Provider,
          { value: M },
          o.createElement(
            d.J.Provider,
            { value: N },
            o.createElement(
              H,
              { ...(!1 === b ? void 0 : { className: E, style: h }) },
              P,
              R,
              Z,
              n
            )
          )
        );
      };
      m.useApp = () => o.useContext(d.Z);
      var p = m;
    },
    30621: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return ey;
        },
      });
      var o = n(2265),
        a = n(73627),
        r = n(61994),
        l = n(391),
        c = n(80052),
        i = n(93942),
        s = n(12757),
        d = n(71744),
        u = n(86586),
        m = n(64024),
        p = n(33759),
        g = n(39109),
        f = n(79326),
        h = n(77685),
        b = n(11357),
        v = n(23496),
        y = n(19103),
        x = n(75669),
        C = n(90891),
        w = n(51646),
        E = n(24725);
      let k = o.createContext({}),
        N = o.createContext({});
      var S = n(50330),
        R = (e) => {
          let { prefixCls: t, value: n, onChange: a } = e;
          return o.createElement("div", {
            className: "".concat(t, "-clear"),
            onClick: () => {
              if (a && n && !n.cleared) {
                let e = n.toHsb();
                e.a = 0;
                let t = (0, S.vC)(e);
                (t.cleared = !0), a(t);
              }
            },
          });
        },
        I = n(93834),
        Z = n(33477),
        W = (e) => {
          let {
              prefixCls: t,
              min: n = 0,
              max: a = 100,
              value: l,
              onChange: c,
              className: i,
              formatter: s,
            } = e,
            [d, u] = (0, o.useState)(0),
            m = Number.isNaN(l) ? d : l;
          return o.createElement(Z.Z, {
            className: (0, r.W)("".concat(t, "-steppers"), i),
            min: n,
            max: a,
            value: m,
            formatter: s,
            size: "small",
            onChange: (e) => {
              u(e || 0), null == c || c(e);
            },
          });
        },
        P = (e) => {
          let { prefixCls: t, value: n, onChange: a } = e,
            r = "".concat(t, "-alpha-input"),
            [l, c] = (0, o.useState)(() => (0, S.vC)(n || "#000")),
            i = n || l;
          return o.createElement(W, {
            value: (0, S.uZ)(i),
            prefixCls: t,
            formatter: (e) => "".concat(e, "%"),
            className: r,
            onChange: (e) => {
              let t = i.toHsb();
              t.a = (e || 0) / 100;
              let n = (0, S.vC)(t);
              c(n), null == a || a(n);
            },
          });
        },
        M = n(39454);
      let H = /(^#[\da-f]{6}$)|(^#[\da-f]{8}$)/i,
        z = (e) => H.test("#".concat(e));
      var A = (e) => {
          let { prefixCls: t, value: n, onChange: a } = e,
            [r, l] = (0, o.useState)(() =>
              n ? (0, b.Ot)(n.toHexString()) : void 0
            );
          return (
            (0, o.useEffect)(() => {
              n && l((0, b.Ot)(n.toHexString()));
            }, [n]),
            o.createElement(M.Z, {
              className: "".concat(t, "-hex-input"),
              value: r,
              prefix: "#",
              onChange: (e) => {
                let t = e.target.value;
                l((0, b.Ot)(t)),
                  z((0, b.Ot)(t, !0)) && (null == a || a((0, S.vC)(t)));
              },
              size: "small",
            })
          );
        },
        B = (e) => {
          let { prefixCls: t, value: n, onChange: a } = e,
            r = "".concat(t, "-hsb-input"),
            [l, c] = (0, o.useState)(() => (0, S.vC)(n || "#000")),
            i = n || l,
            s = (e, t) => {
              let n = i.toHsb();
              n[t] = "h" === t ? e : (e || 0) / 100;
              let o = (0, S.vC)(n);
              c(o), null == a || a(o);
            };
          return o.createElement(
            "div",
            { className: r },
            o.createElement(W, {
              max: 360,
              min: 0,
              value: Number(i.toHsb().h),
              prefixCls: t,
              className: r,
              formatter: (e) => (0, S.lx)(e || 0).toString(),
              onChange: (e) => s(Number(e), "h"),
            }),
            o.createElement(W, {
              max: 100,
              min: 0,
              value: 100 * Number(i.toHsb().s),
              prefixCls: t,
              className: r,
              formatter: (e) => "".concat((0, S.lx)(e || 0), "%"),
              onChange: (e) => s(Number(e), "s"),
            }),
            o.createElement(W, {
              max: 100,
              min: 0,
              value: 100 * Number(i.toHsb().b),
              prefixCls: t,
              className: r,
              formatter: (e) => "".concat((0, S.lx)(e || 0), "%"),
              onChange: (e) => s(Number(e), "b"),
            })
          );
        },
        D = (e) => {
          let { prefixCls: t, value: n, onChange: a } = e,
            r = "".concat(t, "-rgb-input"),
            [l, c] = (0, o.useState)(() => (0, S.vC)(n || "#000")),
            i = n || l,
            s = (e, t) => {
              let n = i.toRgb();
              n[t] = e || 0;
              let o = (0, S.vC)(n);
              c(o), null == a || a(o);
            };
          return o.createElement(
            "div",
            { className: r },
            o.createElement(W, {
              max: 255,
              min: 0,
              value: Number(i.toRgb().r),
              prefixCls: t,
              className: r,
              onChange: (e) => s(Number(e), "r"),
            }),
            o.createElement(W, {
              max: 255,
              min: 0,
              value: Number(i.toRgb().g),
              prefixCls: t,
              className: r,
              onChange: (e) => s(Number(e), "g"),
            }),
            o.createElement(W, {
              max: 255,
              min: 0,
              value: Number(i.toRgb().b),
              prefixCls: t,
              className: r,
              onChange: (e) => s(Number(e), "b"),
            })
          );
        };
      let $ = ["hex", "hsb", "rgb"].map((e) => ({
        value: e,
        label: e.toUpperCase(),
      }));
      var O = (e) => {
          let {
              prefixCls: t,
              format: n,
              value: r,
              disabledAlpha: l,
              onFormatChange: c,
              onChange: i,
              disabledFormat: s,
            } = e,
            [d, u] = (0, a.zk)("hex", n),
            m = "".concat(t, "-input"),
            p = (0, o.useMemo)(() => {
              let e = { value: r, prefixCls: t, onChange: i };
              switch (d) {
                case "hsb":
                  return o.createElement(B, { ...e });
                case "rgb":
                  return o.createElement(D, { ...e });
                default:
                  return o.createElement(A, { ...e });
              }
            }, [d, t, r, i]);
          return o.createElement(
            "div",
            { className: "".concat(m, "-container") },
            !s &&
              o.createElement(I.default, {
                value: d,
                variant: "borderless",
                getPopupContainer: (e) => e,
                popupMatchSelectWidth: 68,
                placement: "bottomRight",
                onChange: (e) => {
                  u(e), null == c || c(e);
                },
                className: "".concat(t, "-format-select"),
                size: "small",
                options: $,
              }),
            o.createElement("div", { className: m }, p),
            !l && o.createElement(P, { prefixCls: t, value: r, onChange: i })
          );
        },
        j = n(61336),
        q = n(5149),
        F = n(98097);
      let T = (e) => {
        let {
            prefixCls: t,
            colors: n,
            type: l,
            color: c,
            range: i = !1,
            className: s,
            activeIndex: d,
            onActive: u,
            onDragStart: m,
            onDragChange: p,
            onKeyDelete: g,
            ...f
          } = e,
          h = { ...f, track: !1 },
          b = o.useMemo(() => {
            let e = n
              .map((e) => "".concat(e.color, " ").concat(e.percent, "%"))
              .join(", ");
            return "linear-gradient(90deg, ".concat(e, ")");
          }, [n]),
          v = o.useMemo(
            () =>
              c && l
                ? "alpha" === l
                  ? c.toRgbString()
                  : "hsl(".concat(c.toHsb().h, ", 100%, 50%)")
                : null,
            [c, l]
          ),
          y = (0, a.zX)(m),
          x = (0, a.zX)(p),
          C = o.useMemo(() => ({ onDragStart: y, onDragChange: x }), []),
          w = (0, a.zX)((e, a) => {
            let { onFocus: c, style: i, className: s, onKeyDown: m } = e.props,
              p = { ...i };
            return (
              "gradient" === l && (p.background = (0, S.AO)(n, a.value)),
              o.cloneElement(e, {
                onFocus: (e) => {
                  null == u || u(a.index), null == c || c(e);
                },
                style: p,
                className: (0, r.W)(s, {
                  ["".concat(t, "-slider-handle-active")]: d === a.index,
                }),
                onKeyDown: (e) => {
                  ("Delete" === e.key || "Backspace" === e.key) &&
                    g &&
                    g(a.index),
                    null == m || m(e);
                },
              })
            );
          }),
          E = o.useMemo(() => ({ direction: "ltr", handleRender: w }), []);
        return o.createElement(
          F.Z.Provider,
          { value: E },
          o.createElement(
            j.y.Provider,
            { value: C },
            o.createElement(q.Z, {
              ...h,
              className: (0, r.W)(s, "".concat(t, "-slider")),
              tooltip: { open: !1 },
              range: { editable: i, minCount: 2 },
              styles: {
                rail: { background: b },
                handle: v ? { background: v } : {},
              },
              classNames: {
                rail: "".concat(t, "-slider-rail"),
                handle: "".concat(t, "-slider-handle"),
              },
            })
          )
        );
      };
      function G(e) {
        return (0, y.Z)(e).sort((e, t) => e.percent - t.percent);
      }
      var L = o.memo((e) => {
        let {
            prefixCls: t,
            mode: n,
            onChange: a,
            onChangeComplete: r,
            onActive: l,
            activeIndex: c,
            onGradientDragging: i,
            colors: s,
          } = e,
          d = o.useMemo(
            () =>
              s.map((e) => ({
                percent: e.percent,
                color: e.color.toRgbString(),
              })),
            [s]
          ),
          u = o.useMemo(() => d.map((e) => e.percent), [d]),
          m = o.useRef(d);
        return "gradient" !== n
          ? null
          : o.createElement(T, {
              min: 0,
              max: 100,
              prefixCls: t,
              className: "".concat(t, "-gradient-slider"),
              colors: d,
              color: null,
              value: u,
              range: !0,
              onChangeComplete: (e) => {
                r(new b.y9(d)), c >= e.length && l(e.length - 1), i(!1);
              },
              disabled: !1,
              type: "gradient",
              activeIndex: c,
              onActive: l,
              onDragStart: (e) => {
                let { rawValues: t, draggingIndex: n, draggingValue: o } = e;
                if (t.length > d.length) {
                  let e = (0, S.AO)(d, o),
                    t = (0, y.Z)(d);
                  t.splice(n, 0, { percent: o, color: e }), (m.current = t);
                } else m.current = d;
                i(!0), a(new b.y9(G(m.current)), !0);
              },
              onDragChange: (e) => {
                let { deleteIndex: t, draggingIndex: n, draggingValue: o } = e,
                  r = (0, y.Z)(m.current);
                -1 !== t
                  ? r.splice(t, 1)
                  : ((r[n] = { ...r[n], percent: o }), (r = G(r))),
                  a(new b.y9(r), !0);
              },
              onKeyDelete: (e) => {
                let t = (0, y.Z)(d);
                t.splice(e, 1);
                let n = new b.y9(t);
                a(n), r(n);
              },
            });
      });
      let X = {
        slider: (e) => {
          let { value: t, onChange: n, onChangeComplete: a } = e;
          return o.createElement(T, {
            ...e,
            value: [t],
            onChange: (e) => n(e[0]),
            onChangeComplete: (e) => a(e[0]),
          });
        },
      };
      var _ = () => {
          let e = (0, o.useContext)(k),
            {
              mode: t,
              onModeChange: n,
              modeOptions: a,
              prefixCls: r,
              allowClear: l,
              value: c,
              disabledAlpha: i,
              onChange: s,
              onClear: d,
              onChangeComplete: u,
              activeIndex: m,
              gradientDragging: p,
              ...g
            } = e,
            f = o.useMemo(
              () =>
                c.cleared
                  ? [
                      { percent: 0, color: new b.y9("") },
                      { percent: 100, color: new b.y9("") },
                    ]
                  : c.getColors(),
              [c]
            ),
            h = !c.isGradient(),
            [v, N] = o.useState(c);
          (0, C.Z)(() => {
            if (!h) {
              var e;
              N(null === (e = f[m]) || void 0 === e ? void 0 : e.color);
            }
          }, [h, f, p, m]);
          let I = o.useMemo(() => {
              var e;
              return h
                ? c
                : p
                ? v
                : null === (e = f[m]) || void 0 === e
                ? void 0
                : e.color;
            }, [f, c, m, h, v, p]),
            [Z, W] = o.useState(I),
            [P, M] = (0, w.N)(),
            H = (null == Z ? void 0 : Z.equals(I)) ? I : Z;
          (0, C.Z)(() => {
            W(I);
          }, [P, null == I ? void 0 : I.toHexString()]);
          let z = (e, n) => {
              let o = (0, S.vC)(e);
              if (c.cleared) {
                let e = o.toRgb();
                if (e.r || e.g || e.b || !n) o = (0, S.T7)(o);
                else {
                  let { type: e, value: t = 0 } = n;
                  o = new b.y9({
                    h: "hue" === e ? t : 0,
                    s: 1,
                    b: 1,
                    a: "alpha" === e ? t / 100 : 1,
                  });
                }
              }
              if ("single" === t) return o;
              let a = (0, y.Z)(f);
              return (a[m] = { ...a[m], color: o }), new b.y9(a);
            },
            A = (e, t, n) => {
              let o = z(e, n);
              W(o.isGradient() ? o.getColors()[m].color : o), s(o, t);
            },
            B = (e, t) => {
              u(z(e, t)), M();
            },
            D = null,
            $ = a.length > 1;
          return (
            (l || $) &&
              (D = o.createElement(
                "div",
                { className: "".concat(r, "-operation") },
                $ &&
                  o.createElement(E.Z, {
                    size: "small",
                    options: a,
                    value: t,
                    onChange: n,
                  }),
                o.createElement(R, {
                  prefixCls: r,
                  value: c,
                  onChange: (e) => {
                    s(e), null == d || d();
                  },
                  ...g,
                })
              )),
            o.createElement(
              o.Fragment,
              null,
              D,
              o.createElement(L, { ...e, colors: f }),
              o.createElement(x.ZP, {
                prefixCls: r,
                value: null == H ? void 0 : H.toHsb(),
                disabledAlpha: i,
                onChange: (e, t) => {
                  A(e, !0, t);
                },
                onChangeComplete: (e, t) => {
                  B(e, t);
                },
                components: X,
              }),
              o.createElement(O, {
                value: I,
                onChange: (e) => {
                  s(z(e));
                },
                prefixCls: r,
                disabledAlpha: i,
                ...g,
              })
            )
          );
        },
        U = n(91378),
        V = () => {
          let {
            prefixCls: e,
            value: t,
            presets: n,
            onChange: a,
          } = (0, o.useContext)(N);
          return Array.isArray(n)
            ? o.createElement(U.Z, {
                value: t,
                presets: n,
                prefixCls: e,
                onChange: a,
              })
            : null;
        },
        K = (e) => {
          let {
              prefixCls: t,
              presets: n,
              panelRender: a,
              value: r,
              onChange: l,
              onClear: c,
              allowClear: i,
              disabledAlpha: s,
              mode: d,
              onModeChange: u,
              modeOptions: m,
              onChangeComplete: p,
              activeIndex: g,
              onActive: f,
              format: h,
              onFormatChange: b,
              gradientDragging: y,
              onGradientDragging: x,
              disabledFormat: C,
            } = e,
            w = "".concat(t, "-inner"),
            E = o.useMemo(
              () => ({
                prefixCls: t,
                value: r,
                onChange: l,
                onClear: c,
                allowClear: i,
                disabledAlpha: s,
                mode: d,
                onModeChange: u,
                modeOptions: m,
                onChangeComplete: p,
                activeIndex: g,
                onActive: f,
                format: h,
                onFormatChange: b,
                gradientDragging: y,
                onGradientDragging: x,
                disabledFormat: C,
              }),
              [t, r, l, c, i, s, d, u, m, p, g, f, h, b, y, x, C]
            ),
            S = o.useMemo(
              () => ({ prefixCls: t, value: r, presets: n, onChange: l }),
              [t, r, n, l]
            ),
            R = o.createElement(
              "div",
              { className: "".concat(w, "-content") },
              o.createElement(_, null),
              Array.isArray(n) && o.createElement(v.Z, null),
              o.createElement(V, null)
            );
          return o.createElement(
            k.Provider,
            { value: E },
            o.createElement(
              N.Provider,
              { value: S },
              o.createElement(
                "div",
                { className: w },
                "function" == typeof a
                  ? a(R, { components: { Picker: _, Presets: V } })
                  : R
              )
            )
          );
        },
        Y = n(87011),
        J = n(55274);
      let Q = (0, o.forwardRef)((e, t) => {
        let {
            color: n,
            prefixCls: a,
            open: l,
            disabled: c,
            format: i,
            className: s,
            showText: d,
            activeIndex: u,
            ...m
          } = e,
          p = "".concat(a, "-trigger"),
          g = "".concat(p, "-text"),
          f = "".concat(g, "-cell"),
          [h] = (0, J.Z)("ColorPicker"),
          b = o.useMemo(() => {
            if (!d) return "";
            if ("function" == typeof d) return d(n);
            if (n.cleared) return h.transparent;
            if (n.isGradient())
              return n.getColors().map((e, t) => {
                let n = -1 !== u && u !== t;
                return o.createElement(
                  "span",
                  {
                    key: t,
                    className: (0, r.W)(f, n && "".concat(f, "-inactive")),
                  },
                  e.color.toRgbString(),
                  " ",
                  e.percent,
                  "%"
                );
              });
            let e = n.toHexString().toUpperCase(),
              t = (0, S.uZ)(n);
            switch (i) {
              case "rgb":
                return n.toRgbString();
              case "hsb":
                return n.toHsbString();
              default:
                return t < 100
                  ? "".concat(e.slice(0, 7), ",").concat(t, "%")
                  : e;
            }
          }, [n, i, d, u, h.transparent, f]),
          v = (0, o.useMemo)(
            () =>
              n.cleared
                ? o.createElement(R, { prefixCls: a })
                : o.createElement(x.G5, {
                    prefixCls: a,
                    color: n.toCssString(),
                  }),
            [n, a]
          );
        return o.createElement(
          "div",
          {
            ref: t,
            className: (0, r.W)(p, s, {
              ["".concat(p, "-active")]: l,
              ["".concat(p, "-disabled")]: c,
            }),
            ...(0, Y.Z)(m),
          },
          v,
          d && o.createElement("div", { className: g }, b)
        );
      });
      var ee = n(38775),
        et = n(17691),
        en = n(99320),
        eo = n(19224);
      let ea = (e, t) => ({
        backgroundImage: "conic-gradient("
          .concat(t, " 25%, transparent 25% 50%, ")
          .concat(t, " 50% 75%, transparent 75% 100%)"),
        backgroundSize: "".concat(e, " ").concat(e),
      });
      var er = (e, t) => {
          let {
            componentCls: n,
            borderRadiusSM: o,
            colorPickerInsetShadow: a,
            lineWidth: r,
            colorFillSecondary: l,
          } = e;
          return {
            ["".concat(n, "-color-block")]: {
              position: "relative",
              borderRadius: o,
              width: t,
              height: t,
              boxShadow: a,
              flex: "none",
              ...ea("50%", e.colorFillSecondary),
              ["".concat(n, "-color-block-inner")]: {
                width: "100%",
                height: "100%",
                boxShadow: "inset 0 0 0 ".concat((0, ee.bf)(r), " ").concat(l),
                borderRadius: "inherit",
              },
            },
          };
        },
        el = (e) => {
          let {
            componentCls: t,
            antCls: n,
            fontSizeSM: o,
            lineHeightSM: a,
            colorPickerAlphaInputWidth: r,
            marginXXS: l,
            paddingXXS: c,
            controlHeightSM: i,
            marginXS: s,
            fontSizeIcon: d,
            paddingXS: u,
            colorTextPlaceholder: m,
            colorPickerInputNumberHandleWidth: p,
            lineWidth: g,
          } = e;
          return {
            ["".concat(t, "-input-container")]: {
              display: "flex",
              ["".concat(t, "-steppers").concat(n, "-input-number")]: {
                fontSize: o,
                lineHeight: a,
                padding: 0,
                ["".concat(n, "-input-number-input")]: {
                  paddingInlineStart: c,
                  paddingInlineEnd: 0,
                },
                ["".concat(n, "-input-number-handler-wrap")]: { width: p },
              },
              ["".concat(t, "-steppers").concat(t, "-alpha-input")]: {
                flex: "0 0 ".concat((0, ee.bf)(r)),
                marginInlineStart: l,
              },
              ["".concat(t, "-format-select").concat(n, "-select")]: {
                marginInlineEnd: s,
                width: "auto",
                "&-single": {
                  ["".concat(n, "-select-selector")]: { padding: 0, border: 0 },
                  ["".concat(n, "-select-arrow")]: { insetInlineEnd: 0 },
                  ["".concat(n, "-select-selection-item")]: {
                    paddingInlineEnd: e.calc(d).add(l).equal(),
                    fontSize: o,
                    lineHeight: (0, ee.bf)(i),
                  },
                  ["".concat(n, "-select-item-option-content")]: {
                    fontSize: o,
                    lineHeight: a,
                  },
                  ["".concat(n, "-select-dropdown")]: {
                    ["".concat(n, "-select-item")]: { minHeight: "auto" },
                  },
                },
              },
              ["".concat(t, "-input")]: {
                gap: l,
                alignItems: "center",
                flex: 1,
                width: 0,
                ["".concat(t, "-hsb-input,").concat(t, "-rgb-input")]: {
                  height: i,
                  display: "flex",
                  gap: l,
                  alignItems: "center",
                },
                ["".concat(t, "-steppers")]: { flex: 1 },
                ["".concat(t, "-hex-input").concat(n, "-input-affix-wrapper")]:
                  {
                    flex: 1,
                    padding: "0 ".concat((0, ee.bf)(u)),
                    ["".concat(n, "-input")]: {
                      fontSize: o,
                      textTransform: "uppercase",
                      lineHeight: (0, ee.bf)(
                        e.calc(i).sub(e.calc(g).mul(2)).equal()
                      ),
                    },
                    ["".concat(n, "-input-prefix")]: { color: m },
                  },
              },
            },
          };
        },
        ec = (e) => {
          let {
            componentCls: t,
            controlHeightLG: n,
            borderRadiusSM: o,
            colorPickerInsetShadow: a,
            marginSM: r,
            colorBgElevated: l,
            colorFillSecondary: c,
            lineWidthBold: i,
            colorPickerHandlerSize: s,
          } = e;
          return {
            userSelect: "none",
            ["".concat(t, "-select")]: {
              ["".concat(t, "-palette")]: {
                minHeight: e.calc(n).mul(4).equal(),
                overflow: "hidden",
                borderRadius: o,
              },
              ["".concat(t, "-saturation")]: {
                position: "absolute",
                borderRadius: "inherit",
                boxShadow: a,
                inset: 0,
              },
              marginBottom: r,
            },
            ["".concat(t, "-handler")]: {
              width: s,
              height: s,
              border: "".concat((0, ee.bf)(i), " solid ").concat(l),
              position: "relative",
              borderRadius: "50%",
              cursor: "pointer",
              boxShadow: "".concat(a, ", 0 0 0 1px ").concat(c),
            },
          };
        },
        ei = (e) => {
          let {
            componentCls: t,
            antCls: n,
            colorTextQuaternary: o,
            paddingXXS: a,
            colorPickerPresetColorSize: r,
            fontSizeSM: l,
            colorText: c,
            lineHeightSM: i,
            lineWidth: s,
            borderRadius: d,
            colorFill: u,
            colorWhite: m,
            marginXXS: p,
            paddingXS: g,
            fontHeightSM: f,
          } = e;
          return {
            ["".concat(t, "-presets")]: {
              ["".concat(n, "-collapse-item > ").concat(n, "-collapse-header")]:
                {
                  padding: 0,
                  ["".concat(n, "-collapse-expand-icon")]: {
                    height: f,
                    color: o,
                    paddingInlineEnd: a,
                  },
                },
              ["".concat(n, "-collapse")]: {
                display: "flex",
                flexDirection: "column",
                gap: p,
              },
              [""
                .concat(n, "-collapse-item > ")
                .concat(n, "-collapse-panel > ")
                .concat(n, "-collapse-body")]: {
                padding: "".concat((0, ee.bf)(g), " 0"),
              },
              "&-label": { fontSize: l, color: c, lineHeight: i },
              "&-items": {
                display: "flex",
                flexWrap: "wrap",
                gap: e.calc(p).mul(1.5).equal(),
                ["".concat(t, "-presets-color")]: {
                  position: "relative",
                  cursor: "pointer",
                  width: r,
                  height: r,
                  "&::before": {
                    content: '""',
                    pointerEvents: "none",
                    width: e.calc(r).add(e.calc(s).mul(4)).equal(),
                    height: e.calc(r).add(e.calc(s).mul(4)).equal(),
                    position: "absolute",
                    top: e.calc(s).mul(-2).equal(),
                    insetInlineStart: e.calc(s).mul(-2).equal(),
                    borderRadius: d,
                    border: "".concat((0, ee.bf)(s), " solid transparent"),
                    transition: "border-color "
                      .concat(e.motionDurationMid, " ")
                      .concat(e.motionEaseInBack),
                  },
                  "&:hover::before": { borderColor: u },
                  "&::after": {
                    boxSizing: "border-box",
                    position: "absolute",
                    top: "50%",
                    insetInlineStart: "21.5%",
                    display: "table",
                    width: e.calc(r).div(13).mul(5).equal(),
                    height: e.calc(r).div(13).mul(8).equal(),
                    border: ""
                      .concat((0, ee.bf)(e.lineWidthBold), " solid ")
                      .concat(e.colorWhite),
                    borderTop: 0,
                    borderInlineStart: 0,
                    transform: "rotate(45deg) scale(0) translate(-50%,-50%)",
                    opacity: 0,
                    content: '""',
                    transition: "all "
                      .concat(e.motionDurationFast, " ")
                      .concat(e.motionEaseInBack, ", opacity ")
                      .concat(e.motionDurationFast),
                  },
                  ["&".concat(t, "-presets-color-checked")]: {
                    "&::after": {
                      opacity: 1,
                      borderColor: m,
                      transform: "rotate(45deg) scale(1) translate(-50%,-50%)",
                      transition: "transform "
                        .concat(e.motionDurationMid, " ")
                        .concat(e.motionEaseOutBack, " ")
                        .concat(e.motionDurationFast),
                    },
                    ["&".concat(t, "-presets-color-bright")]: {
                      "&::after": { borderColor: "rgba(0, 0, 0, 0.45)" },
                    },
                  },
                },
              },
              "&-empty": { fontSize: l, color: o },
            },
          };
        },
        es = (e) => {
          let {
              componentCls: t,
              colorPickerInsetShadow: n,
              colorBgElevated: o,
              colorFillSecondary: a,
              lineWidthBold: r,
              colorPickerHandlerSizeSM: l,
              colorPickerSliderHeight: c,
              marginSM: i,
              marginXS: s,
            } = e,
            d = e.calc(l).sub(e.calc(r).mul(2).equal()).equal(),
            u = e.calc(l).add(e.calc(r).mul(2).equal()).equal(),
            m = {
              "&:after": {
                transform: "scale(1)",
                boxShadow: ""
                  .concat(n, ", 0 0 0 1px ")
                  .concat(e.colorPrimaryActive),
              },
            };
          return {
            ["".concat(t, "-slider")]: [
              ea((0, ee.bf)(c), e.colorFillSecondary),
              {
                margin: 0,
                padding: 0,
                height: c,
                borderRadius: e.calc(c).div(2).equal(),
                "&-rail": {
                  height: c,
                  borderRadius: e.calc(c).div(2).equal(),
                  boxShadow: n,
                },
                ["& ".concat(t, "-slider-handle")]: {
                  width: d,
                  height: d,
                  top: 0,
                  borderRadius: "100%",
                  "&:before": {
                    display: "block",
                    position: "absolute",
                    background: "transparent",
                    left: { _skip_check_: !0, value: "50%" },
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: u,
                    height: u,
                    borderRadius: "100%",
                  },
                  "&:after": {
                    width: l,
                    height: l,
                    border: "".concat((0, ee.bf)(r), " solid ").concat(o),
                    boxShadow: "".concat(n, ", 0 0 0 1px ").concat(a),
                    outline: "none",
                    insetInlineStart: e.calc(r).mul(-1).equal(),
                    top: e.calc(r).mul(-1).equal(),
                    background: "transparent",
                    transition: "none",
                  },
                  "&:focus": m,
                },
              },
            ],
            ["".concat(t, "-slider-container")]: {
              display: "flex",
              gap: i,
              marginBottom: i,
              ["".concat(t, "-slider-group")]: {
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
                display: "flex",
                "&-disabled-alpha": { justifyContent: "center" },
              },
            },
            ["".concat(t, "-gradient-slider")]: {
              marginBottom: s,
              ["& ".concat(t, "-slider-handle")]: {
                "&:after": { transform: "scale(0.8)" },
                "&-active, &:focus": m,
              },
            },
          };
        };
      let ed = (e, t, n) => ({
          borderInlineEndWidth: e.lineWidth,
          borderColor: t,
          boxShadow: "0 0 0 "
            .concat((0, ee.bf)(e.controlOutlineWidth), " ")
            .concat(n),
          outline: 0,
        }),
        eu = (e) => {
          let { componentCls: t } = e;
          return {
            "&-rtl": {
              ["".concat(t, "-presets-color")]: {
                "&::after": { direction: "ltr" },
              },
              ["".concat(t, "-clear")]: { "&::after": { direction: "ltr" } },
            },
          };
        },
        em = (e, t, n) => {
          let {
            componentCls: o,
            borderRadiusSM: a,
            lineWidth: r,
            colorSplit: l,
            colorBorder: c,
            red6: i,
          } = e;
          return {
            ["".concat(o, "-clear")]: {
              width: t,
              height: t,
              borderRadius: a,
              border: "".concat((0, ee.bf)(r), " solid ").concat(l),
              position: "relative",
              overflow: "hidden",
              cursor: "inherit",
              transition: "all ".concat(e.motionDurationFast),
              ...n,
              "&::after": {
                content: '""',
                position: "absolute",
                insetInlineEnd: e.calc(r).mul(-1).equal(),
                top: e.calc(r).mul(-1).equal(),
                display: "block",
                width: 40,
                height: 2,
                transformOrigin: "calc(100% - 1px) 1px",
                transform: "rotate(-45deg)",
                backgroundColor: i,
              },
              "&:hover": { borderColor: c },
            },
          };
        },
        ep = (e) => {
          let {
            componentCls: t,
            colorError: n,
            colorWarning: o,
            colorErrorHover: a,
            colorWarningHover: r,
            colorErrorOutline: l,
            colorWarningOutline: c,
          } = e;
          return {
            ["&".concat(t, "-status-error")]: {
              borderColor: n,
              "&:hover": { borderColor: a },
              ["&".concat(t, "-trigger-active")]: { ...ed(e, n, l) },
            },
            ["&".concat(t, "-status-warning")]: {
              borderColor: o,
              "&:hover": { borderColor: r },
              ["&".concat(t, "-trigger-active")]: { ...ed(e, o, c) },
            },
          };
        },
        eg = (e) => {
          let {
            componentCls: t,
            controlHeightLG: n,
            controlHeightSM: o,
            controlHeight: a,
            controlHeightXS: r,
            borderRadius: l,
            borderRadiusSM: c,
            borderRadiusXS: i,
            borderRadiusLG: s,
            fontSizeLG: d,
          } = e;
          return {
            ["&".concat(t, "-lg")]: {
              minWidth: n,
              minHeight: n,
              borderRadius: s,
              ["".concat(t, "-color-block, ").concat(t, "-clear")]: {
                width: a,
                height: a,
                borderRadius: l,
              },
              ["".concat(t, "-trigger-text")]: { fontSize: d },
            },
            ["&".concat(t, "-sm")]: {
              minWidth: o,
              minHeight: o,
              borderRadius: c,
              ["".concat(t, "-color-block, ").concat(t, "-clear")]: {
                width: r,
                height: r,
                borderRadius: i,
              },
              ["".concat(t, "-trigger-text")]: { lineHeight: (0, ee.bf)(r) },
            },
          };
        },
        ef = (e) => {
          let {
            antCls: t,
            componentCls: n,
            colorPickerWidth: o,
            colorPrimary: a,
            motionDurationMid: r,
            colorBgElevated: l,
            colorTextDisabled: c,
            colorText: i,
            colorBgContainerDisabled: s,
            borderRadius: d,
            marginXS: u,
            marginSM: m,
            controlHeight: p,
            controlHeightSM: g,
            colorBgTextActive: f,
            colorPickerPresetColorSize: h,
            colorPickerPreviewSize: b,
            lineWidth: v,
            colorBorder: y,
            paddingXXS: x,
            fontSize: C,
            colorPrimaryHover: w,
            controlOutline: E,
          } = e;
          return [
            {
              [n]: {
                ["".concat(n, "-inner")]: {
                  "&-content": {
                    display: "flex",
                    flexDirection: "column",
                    width: o,
                    ["& > ".concat(t, "-divider")]: {
                      margin: ""
                        .concat((0, ee.bf)(m), " 0 ")
                        .concat((0, ee.bf)(u)),
                    },
                  },
                  ["".concat(n, "-panel")]: { ...ec(e) },
                  ...es(e),
                  ...er(e, b),
                  ...el(e),
                  ...ei(e),
                  ...em(e, h, { marginInlineStart: "auto" }),
                  ["".concat(n, "-operation")]: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: u,
                  },
                },
                "&-trigger": {
                  minWidth: p,
                  minHeight: p,
                  borderRadius: d,
                  border: "".concat((0, ee.bf)(v), " solid ").concat(y),
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "flex-start",
                  justifyContent: "center",
                  transition: "all ".concat(r),
                  background: l,
                  padding: e.calc(x).sub(v).equal(),
                  ["".concat(n, "-trigger-text")]: {
                    marginInlineStart: u,
                    marginInlineEnd: e.calc(u).sub(e.calc(x).sub(v)).equal(),
                    fontSize: C,
                    color: i,
                    alignSelf: "center",
                    "&-cell": {
                      "&:not(:last-child):after": { content: '", "' },
                      "&-inactive": { color: c },
                    },
                  },
                  "&:hover": { borderColor: w },
                  ["&".concat(n, "-trigger-active")]: { ...ed(e, a, E) },
                  "&-disabled": {
                    color: c,
                    background: s,
                    cursor: "not-allowed",
                    "&:hover": { borderColor: f },
                    ["".concat(n, "-trigger-text")]: { color: c },
                  },
                  ...em(e, g),
                  ...er(e, g),
                  ...ep(e),
                  ...eg(e),
                },
                ...eu(e),
              },
            },
            (0, et.c)(e, { focusElCls: "".concat(n, "-trigger-active") }),
          ];
        };
      var eh = (0, en.I$)("ColorPicker", (e) => {
        let { colorTextQuaternary: t, marginSM: n } = e;
        return ef(
          (0, eo.IX)(e, {
            colorPickerWidth: 234,
            colorPickerHandlerSize: 16,
            colorPickerHandlerSizeSM: 12,
            colorPickerAlphaInputWidth: 44,
            colorPickerInputNumberHandleWidth: 16,
            colorPickerPresetColorSize: 24,
            colorPickerInsetShadow: "inset 0 0 1px 0 ".concat(t),
            colorPickerSliderHeight: 8,
            colorPickerPreviewSize: e.calc(8).mul(2).add(n).equal(),
          })
        );
      });
      let eb = (e) => {
          var t, n;
          let {
              mode: i,
              value: v,
              defaultValue: y,
              format: x,
              defaultFormat: C,
              allowClear: w = !1,
              presets: E,
              children: k,
              trigger: N = "click",
              open: R,
              disabled: I,
              placement: Z = "bottomLeft",
              arrow: W = !0,
              panelRender: P,
              showText: M,
              style: H,
              className: z,
              size: A,
              rootClassName: B,
              prefixCls: D,
              styles: $,
              classNames: O,
              disabledAlpha: j = !1,
              onFormatChange: q,
              onChange: F,
              onClear: T,
              onOpenChange: G,
              onChangeComplete: L,
              getPopupContainer: X,
              autoAdjustOverflow: _ = !0,
              destroyTooltipOnHide: U,
              destroyOnHidden: V,
              disabledFormat: Y,
              ...ee
            } = e,
            {
              getPrefixCls: et,
              direction: en,
              className: eo,
              style: ea,
              classNames: er,
              styles: el,
            } = (0, d.dj)("colorPicker"),
            ec = (0, o.useContext)(u.Z),
            ei = null != I ? I : ec,
            es = et("color-picker", D),
            { compactSize: ed, compactItemClassnames: eu } = (0, h.ri)(es, en),
            em = (0, p.Z)((e) => {
              var t;
              return null !== (t = null != A ? A : ed) && void 0 !== t ? t : e;
            }),
            ep = {
              ...e,
              trigger: N,
              allowClear: w,
              autoAdjustOverflow: _,
              disabledAlpha: j,
              arrow: W,
              placement: Z,
              disabled: ei,
              size: em,
            },
            [eg, ef] = (0, c.MW)(
              [er, O],
              [el, $],
              { props: ep },
              { popup: { _default: "root" } }
            ),
            [eb, ev] = (0, a.zk)(!1, R),
            ey = !ei && eb,
            [ex, eC] = (0, a.zk)(C, x),
            [ew, eE, ek, eN, eS] = (function (e, t, n) {
              let [r] = (0, J.Z)("ColorPicker"),
                [l, c] = (0, a.zk)(e, t),
                [i, s] = o.useState("single"),
                [d, u] = o.useMemo(() => {
                  let e = (Array.isArray(n) ? n : [n]).filter((e) => e);
                  e.length || e.push("single");
                  let t = new Set(e),
                    o = [],
                    a = (e, n) => {
                      t.has(e) && o.push({ label: n, value: e });
                    };
                  return (
                    a("single", r.singleColor),
                    a("gradient", r.gradientColor),
                    [o, t]
                  );
                }, [n, r.singleColor, r.gradientColor]),
                [m, p] = o.useState(null),
                g = (0, a.zX)((e) => {
                  p(e), c(e);
                }),
                f = o.useMemo(() => {
                  let e = (0, S.vC)(l || "");
                  return e.equals(m) ? m : e;
                }, [l, m]),
                h = o.useMemo(() => {
                  var e;
                  return u.has(i)
                    ? i
                    : null === (e = d[0]) || void 0 === e
                    ? void 0
                    : e.value;
                }, [u, i, d]);
              return (
                o.useEffect(() => {
                  s(f.isGradient() ? "gradient" : "single");
                }, [f]),
                [f, g, h, s, d]
              );
            })(y, v, i),
            eR = (0, o.useMemo)(() => 100 > (0, S.uZ)(ew), [ew]),
            [eI, eZ] = o.useState(null),
            eW = (e) => {
              if (L) {
                let t = (0, S.vC)(e);
                j && eR && (t = (0, S.T7)(e)), L(t);
              }
            },
            eP = (e, t) => {
              let n = (0, S.vC)(e);
              j && eR && (n = (0, S.T7)(n)),
                eE(n),
                eZ(null),
                F && F(n, n.toCssString()),
                t || eW(n);
            },
            [eM, eH] = o.useState(0),
            [ez, eA] = o.useState(!1),
            { status: eB } = o.useContext(g.aM),
            eD = (0, m.Z)(es),
            [e$, eO] = eh(es, eD),
            ej = (0, r.W)(eg.root, B, eO, eD, { ["".concat(es, "-rtl")]: en }),
            eq = (0, r.W)(
              (0, s.Z)(es, eB),
              {
                ["".concat(es, "-sm")]: "small" === em,
                ["".concat(es, "-lg")]: "large" === em,
              },
              eu,
              eo,
              ej,
              z,
              e$
            ),
            eF = (0, r.W)(
              es,
              ej,
              null === (t = eg.popup) || void 0 === t ? void 0 : t.root
            ),
            eT = { ...ef.root, ...ea, ...H };
          return o.createElement(
            f.Z,
            {
              classNames: { root: eF },
              styles: {
                root: null === (n = ef.popup) || void 0 === n ? void 0 : n.root,
                container: null == $ ? void 0 : $.popupOverlayInner,
              },
              onOpenChange: (e) => {
                (e && ei) || (ev(e), null == G || G(e));
              },
              content: o.createElement(
                l.Z,
                { form: !0 },
                o.createElement(K, {
                  mode: ek,
                  onModeChange: (e) => {
                    if ((eN(e), "single" === e && ew.isGradient()))
                      eH(0), eP(new b.y9(ew.getColors()[0].color)), eZ(ew);
                    else if ("gradient" === e && !ew.isGradient()) {
                      let e = eR ? (0, S.T7)(ew) : ew;
                      eP(
                        new b.y9(
                          eI || [
                            { percent: 0, color: e },
                            { percent: 100, color: e },
                          ]
                        )
                      );
                    }
                  },
                  modeOptions: eS,
                  prefixCls: es,
                  value: ew,
                  allowClear: w,
                  disabled: ei,
                  disabledAlpha: j,
                  presets: E,
                  panelRender: P,
                  format: ex,
                  onFormatChange: (e) => {
                    eC(e), ex !== e && (null == q || q(e));
                  },
                  onChange: eP,
                  onChangeComplete: eW,
                  onClear: T,
                  activeIndex: eM,
                  onActive: eH,
                  gradientDragging: ez,
                  onGradientDragging: eA,
                  disabledFormat: Y,
                })
              ),
              open: ey,
              trigger: N,
              placement: Z,
              arrow: W,
              rootClassName: B,
              getPopupContainer: X,
              autoAdjustOverflow: _,
              destroyOnHidden: null != V ? V : !!U,
            },
            k ||
              o.createElement(Q, {
                activeIndex: ey ? eM : -1,
                open: ey,
                className: eq,
                style: eT,
                prefixCls: es,
                disabled: ei,
                showText: M,
                format: ex,
                ...ee,
                color: ew,
              })
          );
        },
        ev = (0, i.Z)(
          eb,
          void 0,
          (e) => ({ ...e, placement: "bottom", autoAdjustOverflow: !1 }),
          "color-picker",
          (e) => e
        );
      eb._InternalPanelDoNotUseOrYouWillBeFired = ev;
      var ey = eb;
    },
    10868: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return N;
        },
      });
      var o = n(2265),
        a = n(73627),
        r = n(61994),
        l = n(78380),
        c = n(35499),
        i = n(18390),
        s = n(71744),
        d = n(99320),
        u = n(19224);
      let m = ["wrap", "nowrap", "wrap-reverse"],
        p = [
          "flex-start",
          "flex-end",
          "start",
          "end",
          "center",
          "space-between",
          "space-around",
          "space-evenly",
          "stretch",
          "normal",
          "left",
          "right",
        ],
        g = [
          "center",
          "start",
          "end",
          "flex-start",
          "flex-end",
          "self-start",
          "self-end",
          "baseline",
          "normal",
          "stretch",
        ],
        f = (e, t) => {
          let n = !0 === t.wrap ? "wrap" : t.wrap;
          return { ["".concat(e, "-wrap-").concat(n)]: n && m.includes(n) };
        },
        h = (e, t) => {
          let n = {};
          return (
            g.forEach((o) => {
              n["".concat(e, "-align-").concat(o)] = t.align === o;
            }),
            (n["".concat(e, "-align-stretch")] = !t.align && !!t.vertical),
            n
          );
        },
        b = (e, t) => {
          let n = {};
          return (
            p.forEach((o) => {
              n["".concat(e, "-justify-").concat(o)] = t.justify === o;
            }),
            n
          );
        };
      var v = (e, t) => (0, r.W)({ ...f(e, t), ...h(e, t), ...b(e, t) });
      let y = (e) => {
          let { componentCls: t } = e;
          return {
            [t]: {
              display: "flex",
              margin: 0,
              padding: 0,
              "&-vertical": { flexDirection: "column" },
              "&-rtl": { direction: "rtl" },
              "&:empty": { display: "none" },
            },
          };
        },
        x = (e) => {
          let { componentCls: t } = e;
          return {
            [t]: {
              "&-gap-small": { gap: e.flexGapSM },
              "&-gap-middle": { gap: e.flexGap },
              "&-gap-large": { gap: e.flexGapLG },
            },
          };
        },
        C = (e) => {
          let { componentCls: t } = e,
            n = {};
          return (
            m.forEach((e) => {
              n["".concat(t, "-wrap-").concat(e)] = { flexWrap: e };
            }),
            n
          );
        },
        w = (e) => {
          let { componentCls: t } = e,
            n = {};
          return (
            g.forEach((e) => {
              n["".concat(t, "-align-").concat(e)] = { alignItems: e };
            }),
            n
          );
        },
        E = (e) => {
          let { componentCls: t } = e,
            n = {};
          return (
            p.forEach((e) => {
              n["".concat(t, "-justify-").concat(e)] = { justifyContent: e };
            }),
            n
          );
        };
      var k = (0, d.I$)(
          "Flex",
          (e) => {
            let { paddingXS: t, padding: n, paddingLG: o } = e,
              a = (0, u.IX)(e, { flexGapSM: t, flexGap: n, flexGapLG: o });
            return [y(a), x(a), C(a), w(a), E(a)];
          },
          () => ({}),
          { resetStyle: !1 }
        ),
        N = o.forwardRef((e, t) => {
          let {
              prefixCls: n,
              rootClassName: d,
              className: u,
              style: m,
              flex: p,
              gap: g,
              vertical: f,
              orientation: h,
              component: b = "div",
              children: y,
              ...x
            } = e,
            { flex: C, direction: w, getPrefixCls: E } = o.useContext(s.E_),
            N = E("flex", n),
            [S, R] = k(N),
            [, I] = (0, c.R)(
              h,
              null != f ? f : null == C ? void 0 : C.vertical
            ),
            Z = (0, r.W)(
              u,
              d,
              null == C ? void 0 : C.className,
              N,
              S,
              R,
              v(N, e),
              {
                ["".concat(N, "-rtl")]: "rtl" === w,
                ["".concat(N, "-gap-").concat(g)]: (0, l.n)(g),
                ["".concat(N, "-vertical")]: I,
              }
            ),
            W = { ...(null == C ? void 0 : C.style), ...m };
          return (
            (0, i.Z)(p) && (W.flex = p),
            (0, i.Z)(g) && !(0, l.n)(g) && (W.gap = g),
            o.createElement(
              b,
              {
                ref: t,
                className: Z,
                style: W,
                ...(0, a.CE)(x, ["justify", "wrap", "align"]),
              },
              y
            )
          );
        });
    },
    24725: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return P;
        },
      });
      var o = n(2265),
        a = n(1119),
        r = n(26107),
        l = n(26500),
        c = n(90062),
        i = n(61994),
        s = n(77031),
        d = n(90891);
      let u = (e, t) => {
          if (!e) return null;
          let n = {
            left: e.offsetLeft,
            right: e.parentElement.clientWidth - e.clientWidth - e.offsetLeft,
            width: e.clientWidth,
            top: e.offsetTop,
            bottom: e.parentElement.clientHeight - e.clientHeight - e.offsetTop,
            height: e.clientHeight,
          };
          return t
            ? {
                left: 0,
                right: 0,
                width: 0,
                top: n.top,
                bottom: n.bottom,
                height: n.height,
              }
            : {
                left: n.left,
                right: n.right,
                width: n.width,
                top: 0,
                bottom: 0,
                height: 0,
              };
        },
        m = (e) => (void 0 !== e ? `${e}px` : void 0);
      function p(e) {
        let {
            prefixCls: t,
            containerRef: n,
            value: a,
            getValueIndex: r,
            motionName: l,
            onMotionStart: p,
            onMotionEnd: g,
            direction: f,
            vertical: h = !1,
          } = e,
          b = o.useRef(null),
          [v, y] = o.useState(a),
          x = (e) => {
            let o = r(e),
              a = n.current?.querySelectorAll(`.${t}-item`)[o];
            return a?.offsetParent && a;
          },
          [C, w] = o.useState(null),
          [E, k] = o.useState(null);
        (0, d.Z)(() => {
          if (v !== a) {
            let e = x(v),
              t = x(a),
              n = u(e, h),
              o = u(t, h);
            y(a), w(n), k(o), e && t ? p() : g();
          }
        }, [a]);
        let N = o.useMemo(
            () =>
              h ? m(C?.top ?? 0) : "rtl" === f ? m(-C?.right) : m(C?.left),
            [h, f, C]
          ),
          S = o.useMemo(
            () =>
              h ? m(E?.top ?? 0) : "rtl" === f ? m(-E?.right) : m(E?.left),
            [h, f, E]
          );
        return C && E
          ? o.createElement(
              s.ZP,
              {
                visible: !0,
                motionName: l,
                motionAppear: !0,
                onAppearStart: () =>
                  h
                    ? {
                        transform: "translateY(var(--thumb-start-top))",
                        height: "var(--thumb-start-height)",
                      }
                    : {
                        transform: "translateX(var(--thumb-start-left))",
                        width: "var(--thumb-start-width)",
                      },
                onAppearActive: () =>
                  h
                    ? {
                        transform: "translateY(var(--thumb-active-top))",
                        height: "var(--thumb-active-height)",
                      }
                    : {
                        transform: "translateX(var(--thumb-active-left))",
                        width: "var(--thumb-active-width)",
                      },
                onVisibleChanged: () => {
                  w(null), k(null), g();
                },
              },
              ({ className: e, style: n }, a) => {
                let r = {
                    ...n,
                    "--thumb-start-left": N,
                    "--thumb-start-width": m(C?.width),
                    "--thumb-active-left": S,
                    "--thumb-active-width": m(E?.width),
                    "--thumb-start-top": N,
                    "--thumb-start-height": m(C?.height),
                    "--thumb-active-top": S,
                    "--thumb-active-height": m(E?.height),
                  },
                  l = {
                    ref: (0, c.sQ)(b, a),
                    style: r,
                    className: (0, i.W)(`${t}-thumb`, e),
                  };
                return o.createElement("div", l);
              }
            )
          : null;
      }
      let g = ({
          prefixCls: e,
          className: t,
          style: n,
          styles: a,
          classNames: r,
          data: l,
          disabled: c,
          checked: s,
          label: d,
          title: u,
          value: m,
          name: p,
          onChange: g,
          onFocus: f,
          onBlur: h,
          onKeyDown: b,
          onKeyUp: v,
          onMouseDown: y,
          itemRender: x = (e) => e,
        }) =>
          x(
            o.createElement(
              "label",
              {
                className: (0, i.W)(t, { [`${e}-item-disabled`]: c }),
                style: n,
                onMouseDown: y,
              },
              o.createElement("input", {
                name: p,
                className: `${e}-item-input`,
                type: "radio",
                disabled: c,
                checked: s,
                onChange: (e) => {
                  c || g(e, m);
                },
                onFocus: f,
                onBlur: h,
                onKeyDown: b,
                onKeyUp: v,
              }),
              o.createElement(
                "div",
                {
                  className: (0, i.W)(`${e}-item-label`, r?.label),
                  title: u,
                  role: "radio",
                  "aria-checked": s,
                  style: a?.label,
                },
                d
              )
            ),
            { item: l }
          ),
        f = o.forwardRef((e, t) => {
          let {
              prefixCls: n = "rc-segmented",
              direction: s,
              vertical: d,
              options: u = [],
              disabled: m,
              defaultValue: f,
              value: h,
              name: b,
              onChange: v,
              className: y = "",
              style: x,
              styles: C,
              classNames: w,
              motionName: E = "thumb-motion",
              itemRender: k,
              ...N
            } = e,
            S = o.useRef(null),
            R = o.useMemo(() => (0, c.sQ)(S, t), [S, t]),
            I = o.useMemo(
              () =>
                u.map((e) => {
                  if ("object" == typeof e && null !== e) {
                    let t =
                      void 0 !== e.title
                        ? e.title
                        : "object" != typeof e.label
                        ? e.label?.toString()
                        : void 0;
                    return { ...e, title: t };
                  }
                  return {
                    label: e?.toString(),
                    title: e?.toString(),
                    value: e,
                  };
                }),
              [u]
            ),
            [Z, W] = (0, r.Z)(f ?? I[0]?.value, h),
            [P, M] = o.useState(!1),
            H = (e, t) => {
              W(t), v?.(t);
            },
            z = (0, l.Z)(N, ["children"]),
            [A, B] = o.useState(!1),
            [D, $] = o.useState(!1),
            O = () => {
              $(!0);
            },
            j = () => {
              $(!1);
            },
            q = () => {
              B(!1);
            },
            F = (e) => {
              "Tab" === e.key && B(!0);
            },
            T = (e) => {
              let t = I.findIndex((e) => e.value === Z),
                n = I.length,
                o = I[(t + e + n) % n];
              o && (W(o.value), v?.(o.value));
            },
            G = (e) => {
              switch (e.key) {
                case "ArrowLeft":
                case "ArrowUp":
                  T(-1);
                  break;
                case "ArrowRight":
                case "ArrowDown":
                  T(1);
              }
            };
          return o.createElement(
            "div",
            (0, a.Z)(
              {
                role: "radiogroup",
                "aria-label": "segmented control",
                tabIndex: m ? void 0 : 0,
                style: x,
              },
              z,
              {
                className: (0, i.W)(
                  n,
                  {
                    [`${n}-rtl`]: "rtl" === s,
                    [`${n}-disabled`]: m,
                    [`${n}-vertical`]: d,
                  },
                  y
                ),
                ref: R,
              }
            ),
            o.createElement(
              "div",
              { className: `${n}-group` },
              o.createElement(p, {
                vertical: d,
                prefixCls: n,
                value: Z,
                containerRef: S,
                motionName: `${n}-${E}`,
                direction: s,
                getValueIndex: (e) => I.findIndex((t) => t.value === e),
                onMotionStart: () => {
                  M(!0);
                },
                onMotionEnd: () => {
                  M(!1);
                },
              }),
              I.map((e) => {
                let { value: t, disabled: r } = e;
                return o.createElement(
                  g,
                  (0, a.Z)({}, e, {
                    name: b,
                    data: e,
                    itemRender: k,
                    key: t,
                    prefixCls: n,
                    className: (0, i.W)(e.className, `${n}-item`, w?.item, {
                      [`${n}-item-selected`]: t === Z && !P,
                      [`${n}-item-focused`]: D && A && t === Z,
                    }),
                    style: C?.item,
                    classNames: w,
                    styles: C,
                    checked: t === Z,
                    onChange: H,
                    onFocus: O,
                    onBlur: j,
                    onKeyDown: G,
                    onKeyUp: F,
                    onMouseDown: q,
                    disabled: !!m || !!r,
                  })
                );
              })
            )
          );
        });
      var h = n(33799),
        b = n(80052),
        v = n(35499),
        y = n(71744),
        x = n(33759),
        C = n(89970),
        w = n(38775),
        E = n(12918),
        k = n(99320),
        N = n(19224);
      function S(e, t) {
        return {
          ["".concat(e, ", ").concat(e, ":hover, ").concat(e, ":focus")]: {
            color: t.colorTextDisabled,
            cursor: "not-allowed",
          },
        };
      }
      function R(e) {
        return { background: e.itemSelectedBg, boxShadow: e.boxShadowTertiary };
      }
      let I = { overflow: "hidden", ...E.vS },
        Z = (e) => {
          let { componentCls: t } = e,
            n = e
              .calc(e.controlHeight)
              .sub(e.calc(e.trackPadding).mul(2))
              .equal(),
            o = e
              .calc(e.controlHeightLG)
              .sub(e.calc(e.trackPadding).mul(2))
              .equal(),
            a = e
              .calc(e.controlHeightSM)
              .sub(e.calc(e.trackPadding).mul(2))
              .equal();
          return {
            [t]: {
              ...(0, E.Wf)(e),
              display: "inline-block",
              padding: e.trackPadding,
              color: e.itemColor,
              background: e.trackBg,
              borderRadius: e.borderRadius,
              transition: "all ".concat(e.motionDurationMid),
              ...(0, E.Qy)(e),
              ["".concat(t, "-group")]: {
                position: "relative",
                display: "flex",
                alignItems: "stretch",
                justifyItems: "flex-start",
                flexDirection: "row",
                width: "100%",
              },
              ["&".concat(t, "-rtl")]: { direction: "rtl" },
              ["&".concat(t, "-vertical")]: {
                ["".concat(t, "-group")]: { flexDirection: "column" },
                ["".concat(t, "-thumb")]: {
                  width: "100%",
                  height: 0,
                  padding: "0 ".concat((0, w.bf)(e.paddingXXS)),
                },
              },
              ["&".concat(t, "-block")]: { display: "flex" },
              ["&".concat(t, "-block ").concat(t, "-item")]: {
                flex: 1,
                minWidth: 0,
              },
              ["".concat(t, "-item")]: {
                position: "relative",
                textAlign: "center",
                cursor: "pointer",
                transition: "color ".concat(e.motionDurationMid),
                borderRadius: e.borderRadiusSM,
                transform: "translateZ(0)",
                "&-selected": { ...R(e), color: e.itemSelectedColor },
                "&-focused": (0, E.oN)(e),
                "&::after": {
                  content: '""',
                  position: "absolute",
                  zIndex: -1,
                  width: "100%",
                  height: "100%",
                  top: 0,
                  insetInlineStart: 0,
                  borderRadius: "inherit",
                  opacity: 0,
                  transition: "opacity "
                    .concat(e.motionDurationMid, ", background-color ")
                    .concat(e.motionDurationMid),
                  pointerEvents: "none",
                },
                ["&:not("
                  .concat(t, "-item-selected):not(")
                  .concat(t, "-item-disabled)")]: {
                  "&:hover, &:active": { color: e.itemHoverColor },
                  "&:hover::after": {
                    opacity: 1,
                    backgroundColor: e.itemHoverBg,
                  },
                  "&:active::after": {
                    opacity: 1,
                    backgroundColor: e.itemActiveBg,
                  },
                },
                "&-label": {
                  minHeight: n,
                  lineHeight: (0, w.bf)(n),
                  padding: "0 ".concat((0, w.bf)(e.segmentedPaddingHorizontal)),
                  ...I,
                },
                "&-icon + *": {
                  marginInlineStart: e.calc(e.marginSM).div(2).equal(),
                },
                "&-input": {
                  position: "absolute",
                  insetBlockStart: 0,
                  insetInlineStart: 0,
                  width: 0,
                  height: 0,
                  opacity: 0,
                  pointerEvents: "none",
                },
              },
              ["".concat(t, "-thumb")]: {
                ...R(e),
                position: "absolute",
                insetBlockStart: 0,
                insetInlineStart: 0,
                width: 0,
                height: "100%",
                padding: "".concat((0, w.bf)(e.paddingXXS), " 0"),
                borderRadius: e.borderRadiusSM,
                ["& ~ "
                  .concat(t, "-item:not(")
                  .concat(t, "-item-selected):not(")
                  .concat(t, "-item-disabled)::after")]: {
                  backgroundColor: "transparent",
                },
              },
              ["&".concat(t, "-lg")]: {
                borderRadius: e.borderRadiusLG,
                ["".concat(t, "-item-label")]: {
                  minHeight: o,
                  lineHeight: (0, w.bf)(o),
                  padding: "0 ".concat((0, w.bf)(e.segmentedPaddingHorizontal)),
                  fontSize: e.fontSizeLG,
                },
                ["".concat(t, "-item, ").concat(t, "-thumb")]: {
                  borderRadius: e.borderRadius,
                },
              },
              ["&".concat(t, "-sm")]: {
                borderRadius: e.borderRadiusSM,
                ["".concat(t, "-item-label")]: {
                  minHeight: a,
                  lineHeight: (0, w.bf)(a),
                  padding: "0 ".concat(
                    (0, w.bf)(e.segmentedPaddingHorizontalSM)
                  ),
                },
                ["".concat(t, "-item, ").concat(t, "-thumb")]: {
                  borderRadius: e.borderRadiusXS,
                },
              },
              ...S("&-disabled ".concat(t, "-item"), e),
              ...S("".concat(t, "-item-disabled"), e),
              ["".concat(t, "-thumb-motion-appear-active")]: {
                transition: "transform "
                  .concat(e.motionDurationSlow, " ")
                  .concat(e.motionEaseInOut, ", width ")
                  .concat(e.motionDurationSlow, " ")
                  .concat(e.motionEaseInOut),
                willChange: "transform, width",
              },
              ["&".concat(t, "-shape-round")]: {
                borderRadius: 9999,
                ["".concat(t, "-item, ").concat(t, "-thumb")]: {
                  borderRadius: 9999,
                },
              },
            },
          };
        };
      var W = (0, k.I$)(
          "Segmented",
          (e) => {
            let { lineWidth: t, calc: n } = e;
            return Z(
              (0, N.IX)(e, {
                segmentedPaddingHorizontal: n(e.controlPaddingHorizontal)
                  .sub(t)
                  .equal(),
                segmentedPaddingHorizontalSM: n(e.controlPaddingHorizontalSM)
                  .sub(t)
                  .equal(),
              })
            );
          },
          (e) => {
            let {
              colorTextLabel: t,
              colorText: n,
              colorFillSecondary: o,
              colorBgElevated: a,
              colorFill: r,
              lineWidthBold: l,
              colorBgLayout: c,
            } = e;
            return {
              trackPadding: l,
              trackBg: c,
              itemColor: t,
              itemHoverColor: n,
              itemHoverBg: o,
              itemSelectedBg: a,
              itemActiveBg: r,
              itemSelectedColor: n,
            };
          }
        ),
        P = o.forwardRef((e, t) => {
          let n = (0, h.Z)(),
            {
              prefixCls: a,
              className: r,
              rootClassName: l,
              block: c,
              options: s = [],
              size: d = "middle",
              style: u,
              vertical: m,
              orientation: p,
              shape: g = "default",
              name: w = n,
              styles: E,
              classNames: k,
              ...N
            } = e,
            {
              getPrefixCls: S,
              direction: R,
              className: I,
              style: Z,
              classNames: P,
              styles: M,
            } = (0, y.dj)("segmented"),
            H = { ...e, options: s, size: d, shape: g },
            [z, A] = (0, b.MW)([P, k], [M, E], { props: H }),
            B = S("segmented", a),
            [D, $] = W(B),
            O = (0, x.Z)(d),
            j = o.useMemo(
              () =>
                s.map((e) => {
                  if ("object" == typeof e && (null == e ? void 0 : e.icon)) {
                    let { icon: t, label: n, ...a } = e;
                    return {
                      ...a,
                      label: o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                          "span",
                          {
                            className: (0, i.W)(
                              "".concat(B, "-item-icon"),
                              z.icon
                            ),
                            style: A.icon,
                          },
                          t
                        ),
                        n && o.createElement("span", null, n)
                      ),
                    };
                  }
                  return e;
                }),
              [s, B, z.icon, A.icon]
            ),
            [, q] = (0, v.R)(p, m),
            F = (0, i.W)(
              r,
              l,
              I,
              z.root,
              {
                ["".concat(B, "-block")]: c,
                ["".concat(B, "-sm")]: "small" === O,
                ["".concat(B, "-lg")]: "large" === O,
                ["".concat(B, "-vertical")]: q,
                ["".concat(B, "-shape-").concat(g)]: "round" === g,
              },
              D,
              $
            ),
            T = { ...A.root, ...Z, ...u };
          return o.createElement(f, {
            ...N,
            name: w,
            className: F,
            style: T,
            classNames: z,
            styles: A,
            itemRender: (e, t) => {
              let { item: n } = t;
              if (!n.tooltip) return e;
              let a =
                "object" == typeof n.tooltip ? n.tooltip : { title: n.tooltip };
              return o.createElement(C.Z, { ...a }, e);
            },
            options: j,
            ref: t,
            prefixCls: B,
            direction: R,
            vertical: q,
          });
        });
    },
    48805: function (e, t, n) {
      var o = n(2265),
        a = n(93942),
        r = n(7408),
        l = n(22010),
        c = n(56250);
      let { TimePicker: i, RangePicker: s } = r.default,
        d = o.forwardRef((e, t) =>
          o.createElement(s, { ...e, picker: "time", mode: void 0, ref: t })
        ),
        u = o.forwardRef((e, t) => {
          let {
              addon: n,
              renderExtraFooter: a,
              variant: r,
              bordered: s,
              classNames: d,
              styles: u,
              popupClassName: m,
              popupStyle: p,
              ...g
            } = e,
            [f] = (0, c.Z)("timePicker", r, s),
            h = o.useMemo(() => a || n || void 0, [n, a]),
            b = { ...e, variant: f },
            [v, y] = (0, l.Z)("timePicker", d, u, m, p, b);
          return o.createElement(i, {
            ...g,
            mode: void 0,
            ref: t,
            renderExtraFooter: h,
            variant: f,
            classNames: v,
            styles: y,
          });
        }),
        m = (0, a.Z)(u, "popupAlign", void 0, "picker");
      (u._InternalPanelDoNotUseOrYouWillBeFired = m),
        (u.RangePicker = d),
        (u._InternalPanelDoNotUseOrYouWillBeFired = m),
        (t.Z = u);
    },
    86257: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return en;
        },
      });
      var o = n(2265),
        a = n(93454),
        r = n(61994),
        l = n(90891),
        c = n(26107);
      function i(e) {
        return null !== e && "object" == typeof e;
      }
      function s(e, t, n) {
        if (!1 === e || (!1 === t && (!i(e) || !e.closeIcon))) return null;
        let o = "boolean" != typeof t ? t : void 0;
        return i(e)
          ? { ...e, closeIcon: e.closeIcon ?? o }
          : n || e || t
          ? { closeIcon: o }
          : "empty";
      }
      var d = n(31311),
        u = n(28036),
        m = n(33799);
      function p() {
        return (p = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      let g = { fill: "transparent", pointerEvents: "auto" };
      var f = (e) => {
        let {
            prefixCls: t,
            rootClassName: n,
            pos: a,
            showMask: l,
            style: c = {},
            fill: i = "rgba(0,0,0,0.5)",
            open: s,
            animated: d,
            zIndex: f,
            disabledInteraction: h,
            styles: b,
            classNames: v,
            getPopupContainer: y,
          } = e,
          x = (0, m.Z)(),
          C = `${t}-mask-${x}`,
          w = "object" == typeof d ? d?.placeholder : d,
          E =
            "undefined" != typeof navigator &&
            /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          k = !1 === y;
        return o.createElement(
          u.Z,
          { open: s, autoLock: !k, getContainer: y },
          o.createElement(
            "div",
            {
              className: (0, r.W)(`${t}-mask`, n, v?.mask),
              style: {
                position: k ? "absolute" : "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: f,
                pointerEvents: a && !h ? "none" : "auto",
                ...c,
                ...b?.mask,
              },
            },
            l
              ? o.createElement(
                  "svg",
                  { style: { width: "100%", height: "100%" } },
                  o.createElement(
                    "defs",
                    null,
                    o.createElement(
                      "mask",
                      { id: C },
                      o.createElement(
                        "rect",
                        p(
                          { x: "0", y: "0" },
                          E
                            ? { width: "100%", height: "100%" }
                            : { width: "100vw", height: "100vh" },
                          { fill: "white" }
                        )
                      ),
                      a &&
                        o.createElement("rect", {
                          x: a.left,
                          y: a.top,
                          rx: a.radius,
                          width: a.width,
                          height: a.height,
                          fill: "black",
                          className: w ? `${t}-placeholder-animated` : "",
                        })
                    )
                  ),
                  o.createElement("rect", {
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    fill: i,
                    mask: `url(#${C})`,
                  }),
                  a &&
                    o.createElement(
                      o.Fragment,
                      null,
                      o.createElement(
                        "rect",
                        p({}, g, {
                          x: "0",
                          y: "0",
                          width: "100%",
                          height: Math.max(a.top, 0),
                        })
                      ),
                      o.createElement(
                        "rect",
                        p({}, g, {
                          x: "0",
                          y: "0",
                          width: Math.max(a.left, 0),
                          height: "100%",
                        })
                      ),
                      o.createElement(
                        "rect",
                        p({}, g, {
                          x: "0",
                          y: a.top + a.height,
                          width: "100%",
                          height: `calc(100% - ${a.top + a.height}px)`,
                        })
                      ),
                      o.createElement(
                        "rect",
                        p({}, g, {
                          x: a.left + a.width,
                          y: "0",
                          width: `calc(100% - ${a.left + a.width}px)`,
                          height: "100%",
                        })
                      )
                    )
                )
              : null
          )
        );
      };
      let h = [0, 0],
        b = {
          left: { points: ["cr", "cl"], offset: [-8, 0] },
          right: { points: ["cl", "cr"], offset: [8, 0] },
          top: { points: ["bc", "tc"], offset: [0, -8] },
          bottom: { points: ["tc", "bc"], offset: [0, 8] },
          topLeft: { points: ["bl", "tl"], offset: [0, -8] },
          leftTop: { points: ["tr", "tl"], offset: [-8, 0] },
          topRight: { points: ["br", "tr"], offset: [0, -8] },
          rightTop: { points: ["tl", "tr"], offset: [8, 0] },
          bottomRight: { points: ["tr", "br"], offset: [0, 8] },
          rightBottom: { points: ["bl", "br"], offset: [8, 0] },
          bottomLeft: { points: ["tl", "bl"], offset: [0, 8] },
          leftBottom: { points: ["br", "bl"], offset: [-8, 0] },
        };
      function v(e = !1) {
        let t = {};
        return (
          Object.keys(b).forEach((n) => {
            t[n] = { ...b[n], autoArrow: e, targetOffset: h };
          }),
          t
        );
      }
      v();
      var y = n(87011);
      function x() {
        return (x = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      function C(e) {
        let {
            prefixCls: t,
            current: n,
            total: a,
            title: l,
            description: c,
            onClose: i,
            onPrev: s,
            onNext: d,
            onFinish: u,
            className: m,
            closable: p,
            classNames: g,
            styles: f,
          } = e,
          h = (0, y.Z)(p || {}, !0),
          b =
            p?.closeIcon ??
            o.createElement("span", { className: `${t}-close-x` }, "\xd7"),
          v = !!p;
        return o.createElement(
          "div",
          { className: (0, r.W)(`${t}-panel`, m) },
          o.createElement(
            "div",
            {
              className: (0, r.W)(`${t}-section`, g?.section),
              style: f?.section,
            },
            v &&
              o.createElement(
                "button",
                x({ type: "button", onClick: i, "aria-label": "Close" }, h, {
                  className: `${t}-close`,
                }),
                b
              ),
            o.createElement(
              "div",
              {
                className: (0, r.W)(`${t}-header`, g?.header),
                style: f?.header,
              },
              o.createElement(
                "div",
                {
                  className: (0, r.W)(`${t}-title`, g?.title),
                  style: f?.title,
                },
                l
              )
            ),
            o.createElement(
              "div",
              {
                className: (0, r.W)(`${t}-description`, g?.description),
                style: f?.description,
              },
              c
            ),
            o.createElement(
              "div",
              {
                className: (0, r.W)(`${t}-footer`, g?.footer),
                style: f?.footer,
              },
              o.createElement(
                "div",
                { className: `${t}-sliders` },
                a > 1
                  ? [...Array.from({ length: a }).keys()].map((e, t) =>
                      o.createElement("span", {
                        key: e,
                        className: t === n ? "active" : "",
                      })
                    )
                  : null
              ),
              o.createElement(
                "div",
                {
                  className: (0, r.W)(`${t}-actions`, g?.actions),
                  style: f?.actions,
                },
                0 !== n
                  ? o.createElement(
                      "button",
                      { className: `${t}-prev-btn`, onClick: s },
                      "Prev"
                    )
                  : null,
                n === a - 1
                  ? o.createElement(
                      "button",
                      { className: `${t}-finish-btn`, onClick: u },
                      "Finish"
                    )
                  : o.createElement(
                      "button",
                      { className: `${t}-next-btn`, onClick: d },
                      "Next"
                    )
              )
            )
          )
        );
      }
      var w = (e) => {
        let { current: t, renderPanel: n } = e;
        return o.createElement(
          o.Fragment,
          null,
          "function" == typeof n ? n(e, t) : o.createElement(C, e)
        );
      };
      let E = o.forwardRef((e, t) => {
        let {
          open: n,
          autoLock: a,
          getContainer: r,
          domRef: l,
          className: c,
          style: i,
          fallbackDOM: s,
        } = e;
        return (
          o.useImperativeHandle(t, () => l.current || s()),
          o.createElement(
            u.Z,
            { open: n, autoLock: a, getContainer: r },
            o.createElement("div", { ref: l, className: c, style: i })
          )
        );
      });
      function k() {
        return (k = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var o in n)
                  Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
              }
              return e;
            }).apply(this, arguments);
      }
      let N = { left: "50%", top: "50%", width: 1, height: 1 },
        S = { block: "center", inline: "center" };
      var R = (e) => {
          let {
              prefixCls: t = "rc-tour",
              steps: n = [],
              defaultCurrent: i,
              current: u,
              onChange: m,
              onClose: p,
              onFinish: g,
              open: h,
              defaultOpen: b,
              mask: y = !0,
              arrow: x = !0,
              rootClassName: C,
              placement: R,
              renderPanel: I,
              gap: Z,
              animated: W,
              scrollIntoViewOptions: P = S,
              zIndex: M = 1001,
              closeIcon: H,
              closable: z,
              builtinPlacements: A,
              disabledInteraction: B,
              styles: D,
              classNames: $,
              className: O,
              style: j,
              getPopupContainer: q,
              ...F
            } = e,
            T = o.useRef(),
            [G, L] = (0, c.Z)(i || 0, u),
            [X, _] = (0, c.Z)(b, h),
            U = !(G < 0) && !(G >= n.length) && (X ?? !0),
            [V, K] = o.useState(U),
            Y = o.useRef(U);
          (0, l.Z)(() => {
            U && (Y.current || L(0), K(!0)), (Y.current = U);
          }, [U]);
          let {
              target: J,
              placement: Q,
              style: ee,
              arrow: et,
              className: en,
              mask: eo,
              scrollIntoViewOptions: ea = S,
              closeIcon: er,
              closable: el,
            } = n[G] || {},
            ec = o.useMemo(() => {
              let e = s(el, er, !1),
                t = s(z, H, !0);
              return "empty" !== e ? e : t;
            }, [z, H, el, er]),
            ei = U && (eo ?? y),
            es = o.useRef(null),
            ed = !1 === q,
            [eu, em] = (function (e, t, n, a, r, c) {
              let [i, s] = (0, o.useState)(void 0);
              (0, l.Z)(() => {
                s(("function" == typeof e ? e() : e) || null);
              });
              let [u, m] = (0, o.useState)(null),
                p = (0, d.Z)(() => {
                  if (i) {
                    !r &&
                      !(function (e) {
                        let t =
                            window.innerWidth ||
                            document.documentElement.clientWidth,
                          n =
                            window.innerHeight ||
                            document.documentElement.clientHeight,
                          {
                            top: o,
                            right: a,
                            bottom: r,
                            left: l,
                          } = e.getBoundingClientRect();
                        return o >= 0 && l >= 0 && a <= t && r <= n;
                      })(i) &&
                      t &&
                      i.scrollIntoView(a);
                    let {
                        left: e,
                        top: n,
                        width: o,
                        height: l,
                      } = i.getBoundingClientRect(),
                      s = { left: e, top: n, width: o, height: l, radius: 0 };
                    if (r) {
                      let e = c.current?.parentElement?.getBoundingClientRect();
                      e && ((s.left -= e.left), (s.top -= e.top));
                    }
                    m((e) => (JSON.stringify(e) !== JSON.stringify(s) ? s : e));
                  } else m(null);
                }),
                g = (e) =>
                  (Array.isArray(n?.offset) ? n?.offset[e] : n?.offset) ?? 6;
              return (
                (0, l.Z)(
                  () => (
                    p(),
                    window.addEventListener("resize", p),
                    window.addEventListener("scroll", p),
                    () => {
                      window.removeEventListener("resize", p),
                        window.removeEventListener("scroll", p);
                    }
                  ),
                  [i, t, p]
                ),
                [
                  (0, o.useMemo)(() => {
                    var e;
                    if (!u) return u;
                    let t = g(0),
                      o = g(1),
                      a =
                        "number" != typeof (e = n?.radius) || Number.isNaN(e)
                          ? 2
                          : n?.radius;
                    return {
                      left: u.left - t,
                      top: u.top - o,
                      width: u.width + 2 * t,
                      height: u.height + 2 * o,
                      radius: a,
                    };
                  }, [u, n]),
                  i,
                ]
              );
            })(J, h, Z, ea ?? P, ed, es),
            ep = !!em && (void 0 === et ? x : et),
            eg = "object" == typeof ep && ep.pointAtCenter;
          (0, l.Z)(() => {
            T.current?.forceAlign();
          }, [eg, G]);
          let ef = (e) => {
              L(e), m?.(e);
            },
            eh = (0, o.useMemo)(
              () =>
                A
                  ? "function" == typeof A
                    ? A({ arrowPointAtCenter: eg })
                    : A
                  : v(eg),
              [A, eg]
            );
          if (void 0 === em || !V) return null;
          let eb = () => {
              _(!1), p?.(G);
            },
            ev = "boolean" == typeof ei ? void 0 : ei;
          return o.createElement(
            o.Fragment,
            null,
            o.createElement(f, {
              getPopupContainer: q,
              styles: D,
              classNames: $,
              zIndex: M,
              prefixCls: t,
              pos: eu,
              showMask: "boolean" == typeof ei ? ei : !!ei,
              style: ev?.style,
              fill: ev?.color,
              open: U,
              animated: W,
              rootClassName: C,
              disabledInteraction: B,
            }),
            o.createElement(
              a.ZP,
              k({}, F, {
                getPopupContainer: q,
                builtinPlacements: eh,
                ref: T,
                popupStyle: ee,
                popupPlacement: Q ?? R ?? (null === em ? "center" : "bottom"),
                popupVisible: U,
                popupClassName: (0, r.W)(C, en),
                prefixCls: t,
                popup: () =>
                  o.createElement(
                    w,
                    k(
                      {
                        styles: D,
                        classNames: $,
                        arrow: ep,
                        key: "content",
                        prefixCls: t,
                        total: n.length,
                        renderPanel: I,
                        onPrev: () => {
                          ef(G - 1);
                        },
                        onNext: () => {
                          ef(G + 1);
                        },
                        onClose: eb,
                        current: G,
                        onFinish: () => {
                          eb(), g?.();
                        },
                      },
                      n[G],
                      { closable: ec }
                    )
                  ),
                forceRender: !1,
                autoDestroy: !0,
                zIndex: M,
                arrow: !!ep,
              }),
              o.createElement(E, {
                open: U,
                autoLock: !ed,
                getContainer: q,
                domRef: es,
                fallbackDOM: () => em || document.body,
                className: (0, r.W)(O, C, `${t}-target-placeholder`),
                style: {
                  ...(eu || N),
                  position: ed ? "absolute" : "fixed",
                  pointerEvents: "none",
                  ...j,
                },
              })
            )
          );
        },
        I = n(80052),
        Z = n(62236),
        W = n(92736),
        P = n(95140),
        M = n(71744),
        H = n(84560),
        z = n(19103),
        A = n(49638),
        B = n(18390),
        D = n(82383),
        $ = n(55274),
        O = n(97007),
        j = (e) => {
          var t, n;
          let a;
          let {
              stepProps: l,
              current: c,
              type: i,
              indicatorsRender: s,
              actionsRender: d,
            } = e,
            {
              prefixCls: u,
              total: m = 1,
              title: p,
              onClose: g,
              onPrev: f,
              onNext: h,
              onFinish: b,
              cover: v,
              description: x,
              nextButtonProps: C,
              prevButtonProps: w,
              type: E,
              closable: k,
              classNames: N = {},
              styles: S = {},
            } = l,
            R = null != E ? E : i,
            I = (0, y.Z)(null != k ? k : {}, !0),
            [Z] = (0, $.Z)("global", O.Z.global),
            [W] = (0, $.Z)("Tour", O.Z.Tour),
            P = o.createElement(
              "button",
              {
                type: "button",
                onClick: g,
                className: "".concat(u, "-close"),
                "aria-label": null == Z ? void 0 : Z.close,
                ...I,
              },
              (null == k ? void 0 : k.closeIcon) ||
                o.createElement(A.Z, { className: "".concat(u, "-close-icon") })
            ),
            M = c === m - 1,
            H = (0, B.Z)(p)
              ? o.createElement(
                  "div",
                  {
                    className: (0, r.W)("".concat(u, "-header"), N.header),
                    style: S.header,
                  },
                  o.createElement(
                    "div",
                    {
                      className: (0, r.W)("".concat(u, "-title"), N.title),
                      style: S.title,
                    },
                    p
                  )
                )
              : null,
            j = (0, B.Z)(x)
              ? o.createElement(
                  "div",
                  {
                    className: (0, r.W)(
                      "".concat(u, "-description"),
                      N.description
                    ),
                    style: S.description,
                  },
                  x
                )
              : null,
            q = (0, B.Z)(v)
              ? o.createElement(
                  "div",
                  {
                    className: (0, r.W)("".concat(u, "-cover"), N.cover),
                    style: S.cover,
                  },
                  v
                )
              : null;
          a = s
            ? s(c, m)
            : (0, z.Z)(Array.from({ length: m }).keys()).map((e, t) =>
                o.createElement("span", {
                  key: e,
                  className: (0, r.W)(
                    t === c && "".concat(u, "-indicator-active"),
                    "".concat(u, "-indicator"),
                    N.indicator
                  ),
                  style: S.indicator,
                })
              );
          let F = o.createElement(
            o.Fragment,
            null,
            0 !== c
              ? o.createElement(
                  D.Z,
                  {
                    size: "small",
                    type: "default",
                    ghost: "primary" === R,
                    ...w,
                    onClick: () => {
                      var e;
                      null == f || f(),
                        null == w ||
                          null === (e = w.onClick) ||
                          void 0 === e ||
                          e.call(w);
                    },
                    className: (0, r.W)(
                      "".concat(u, "-prev-btn"),
                      null == w ? void 0 : w.className
                    ),
                  },
                  null !== (t = null == w ? void 0 : w.children) && void 0 !== t
                    ? t
                    : null == W
                    ? void 0
                    : W.Previous
                )
              : null,
            o.createElement(
              D.Z,
              {
                size: "small",
                type: "primary" === R ? "default" : "primary",
                ...C,
                onClick: () => {
                  var e;
                  M ? null == b || b() : null == h || h(),
                    null == C ||
                      null === (e = C.onClick) ||
                      void 0 === e ||
                      e.call(C);
                },
                className: (0, r.W)(
                  "".concat(u, "-next-btn"),
                  null == C ? void 0 : C.className
                ),
              },
              null !== (n = null == C ? void 0 : C.children) && void 0 !== n
                ? n
                : M
                ? null == W
                  ? void 0
                  : W.Finish
                : null == W
                ? void 0
                : W.Next
            )
          );
          return o.createElement(
            "div",
            { className: "".concat(u, "-panel") },
            o.createElement(
              "div",
              {
                className: (0, r.W)("".concat(u, "-section"), N.section),
                style: S.section,
              },
              k && P,
              q,
              H,
              j,
              o.createElement(
                "div",
                {
                  className: (0, r.W)("".concat(u, "-footer"), N.footer),
                  style: S.footer,
                },
                m > 1 &&
                  o.createElement(
                    "div",
                    {
                      className: (0, r.W)(
                        "".concat(u, "-indicators"),
                        N.indicators
                      ),
                      style: S.indicators,
                    },
                    a
                  ),
                o.createElement(
                  "div",
                  {
                    className: (0, r.W)("".concat(u, "-actions"), N.actions),
                    style: S.actions,
                  },
                  d ? d(F, { current: c, total: m }) : F
                )
              )
            )
          );
        },
        q = n(53445),
        F = n(93942),
        T = n(19722),
        G = n(20435),
        L = n(38775),
        X = n(13761),
        _ = n(12918),
        U = n(88260),
        V = n(34442),
        K = n(99320),
        Y = n(19224);
      let J = (e) => {
        let {
          componentCls: t,
          padding: n,
          paddingXS: o,
          borderRadius: a,
          borderRadiusXS: r,
          colorPrimary: l,
          colorFill: c,
          indicatorHeight: i,
          indicatorWidth: s,
          boxShadowTertiary: d,
          zIndexPopup: u,
          colorBgElevated: m,
          fontWeightStrong: p,
          marginXS: g,
          colorTextLightSolid: f,
          tourBorderRadius: h,
          colorWhite: b,
          primaryNextBtnHoverBg: v,
          closeBtnSize: y,
          motionDurationSlow: x,
          antCls: C,
          primaryPrevBtnBg: w,
        } = e;
        return [
          {
            [t]: {
              ...(0, _.Wf)(e),
              position: "absolute",
              zIndex: u,
              maxWidth: "fit-content",
              visibility: "visible",
              width: 520,
              "--antd-arrow-background-color": m,
              "&-pure": { maxWidth: "100%", position: "relative" },
              ["&".concat(t, "-hidden")]: { display: "none" },
              ["".concat(t, "-panel")]: { position: "relative" },
              ["".concat(t, "-section")]: {
                textAlign: "start",
                textDecoration: "none",
                borderRadius: h,
                boxShadow: d,
                position: "relative",
                backgroundColor: m,
                border: "none",
                backgroundClip: "padding-box",
                ["".concat(t, "-close")]: {
                  position: "absolute",
                  top: n,
                  insetInlineEnd: n,
                  color: e.colorIcon,
                  background: "none",
                  border: "none",
                  width: y,
                  height: y,
                  borderRadius: e.borderRadiusSM,
                  transition: "background-color "
                    .concat(e.motionDurationMid, ", color ")
                    .concat(e.motionDurationMid),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": {
                    color: e.colorIconHover,
                    backgroundColor: e.colorBgTextHover,
                  },
                  "&:active": { backgroundColor: e.colorBgTextActive },
                  ...(0, _.Qy)(e),
                },
                ["".concat(t, "-cover")]: {
                  textAlign: "center",
                  padding: ""
                    .concat((0, L.bf)(e.calc(n).add(y).add(o).equal()), " ")
                    .concat((0, L.bf)(n), " 0"),
                  img: { width: "100%" },
                },
                ["".concat(t, "-header")]: {
                  padding: ""
                    .concat((0, L.bf)(n), " ")
                    .concat((0, L.bf)(n), " ")
                    .concat((0, L.bf)(o)),
                  width: "calc(100% - ".concat((0, L.bf)(y), ")"),
                  wordBreak: "break-word",
                  ["".concat(t, "-title")]: { fontWeight: p },
                },
                ["".concat(t, "-description")]: {
                  padding: "0 ".concat((0, L.bf)(n)),
                  wordWrap: "break-word",
                },
                ["".concat(t, "-footer")]: {
                  padding: ""
                    .concat((0, L.bf)(o), " ")
                    .concat((0, L.bf)(n), " ")
                    .concat((0, L.bf)(n)),
                  textAlign: "end",
                  borderRadius: "0 0 "
                    .concat((0, L.bf)(r), " ")
                    .concat((0, L.bf)(r)),
                  display: "flex",
                  ["".concat(t, "-indicators")]: {
                    display: "inline-block",
                    ["".concat(t, "-indicator")]: {
                      width: s,
                      height: i,
                      display: "inline-block",
                      borderRadius: "50%",
                      background: c,
                      "&:not(:last-child)": { marginInlineEnd: i },
                      "&-active": { background: l },
                    },
                  },
                  ["".concat(t, "-actions")]: {
                    marginInlineStart: "auto",
                    ["".concat(C, "-btn")]: { marginInlineStart: g },
                  },
                },
              },
              ["".concat(t, "-primary, &").concat(t, "-primary")]: {
                "--antd-arrow-background-color": l,
                ["".concat(t, "-section")]: {
                  color: f,
                  textAlign: "start",
                  textDecoration: "none",
                  backgroundColor: l,
                  borderRadius: a,
                  boxShadow: d,
                  ["".concat(t, "-close")]: { color: f },
                  ["".concat(t, "-indicators")]: {
                    ["".concat(t, "-indicator")]: {
                      background: w,
                      "&-active": { background: f },
                    },
                  },
                  ["".concat(t, "-prev-btn")]: {
                    color: f,
                    borderColor: w,
                    backgroundColor: l,
                    "&:hover": {
                      backgroundColor: w,
                      borderColor: "transparent",
                    },
                  },
                  ["".concat(t, "-next-btn")]: {
                    color: l,
                    borderColor: "transparent",
                    background: b,
                    "&:hover": { background: v },
                  },
                },
              },
            },
            ["".concat(t, "-mask")]: {
              ["".concat(t, "-placeholder-animated")]: {
                transition: "all ".concat(x),
              },
            },
            "&-placement-left,&-placement-leftTop,&-placement-leftBottom,&-placement-right,&-placement-rightTop,&-placement-rightBottom":
              { ["".concat(t, "-section")]: { borderRadius: e.min(h, U.qN) } },
          },
          (0, U.ZP)(e, "var(--antd-arrow-background-color)"),
        ];
      };
      var Q = (0, K.I$)(
          "Tour",
          (e) => {
            let { borderRadiusLG: t } = e;
            return J(
              (0, Y.IX)(e, {
                indicatorWidth: 6,
                indicatorHeight: 6,
                tourBorderRadius: t,
              })
            );
          },
          (e) => ({
            zIndexPopup: e.zIndexPopupBase + 70,
            closeBtnSize: e.fontSize * e.lineHeight,
            primaryPrevBtnBg: new X.t(e.colorTextLightSolid)
              .setA(0.15)
              .toRgbString(),
            primaryNextBtnHoverBg: new X.t(e.colorBgTextHover)
              .onBackground(e.colorWhite)
              .toRgbString(),
            ...(0, U.wZ)({
              contentRadius: e.borderRadiusLG,
              limitVerticalRadius: !0,
            }),
            ...(0, V.w)(e),
          })
        ),
        ee = (0, F.i)((e) => {
          let {
              prefixCls: t,
              current: n = 0,
              total: a = 6,
              className: l,
              style: c,
              type: i,
              closable: s,
              closeIcon: d,
              ...u
            } = e,
            { getPrefixCls: m } = o.useContext(M.E_),
            p = m("tour", t),
            [g, f] = Q(p),
            [h, b] = (0, q.bt)({ closable: s, closeIcon: d }, null, {
              closable: !0,
              closeIconRender: (e) => {
                var t;
                return o.isValidElement(e)
                  ? (0, T.Tm)(e, {
                      className: (0, r.W)(
                        null === (t = e.props) || void 0 === t
                          ? void 0
                          : t.className,
                        "".concat(p, "-close-icon")
                      ),
                    })
                  : e;
              },
            });
          return o.createElement(
            G.t5,
            {
              prefixCls: p,
              hashId: g,
              className: (0, r.W)(
                l,
                "".concat(p, "-pure"),
                i && "".concat(p, "-").concat(i),
                f
              ),
              style: c,
            },
            o.createElement(j, {
              stepProps: {
                ...u,
                prefixCls: p,
                total: a,
                closable: h ? { closeIcon: b } : void 0,
              },
              current: n,
              type: i,
            })
          );
        });
      let et = (e) => {
        let {
            prefixCls: t,
            type: n,
            rootClassName: a,
            indicatorsRender: l,
            actionsRender: c,
            steps: i,
            closeIcon: s,
            classNames: d,
            styles: u,
            className: m,
            style: p,
            ...g
          } = e,
          {
            getPrefixCls: f,
            direction: h,
            closeIcon: b,
            className: v,
            style: y,
            classNames: x,
            styles: C,
          } = (0, M.dj)("tour"),
          w = f("tour", t),
          [E, k] = Q(w),
          [, N] = (0, H.ZP)(),
          S = o.useMemo(
            () =>
              null == i
                ? void 0
                : i.map((e) => {
                    var t;
                    return {
                      ...e,
                      className: (0, r.W)(e.className, {
                        ["".concat(w, "-primary")]:
                          (null !== (t = e.type) && void 0 !== t ? t : n) ===
                          "primary",
                      }),
                    };
                  }),
            [w, i, n]
          ),
          z = { ...e, steps: S },
          [A, B] = (0, I.MW)([x, d], [C, u], { props: z }),
          D = (0, r.W)(
            { ["".concat(w, "-rtl")]: "rtl" === h },
            E,
            k,
            a,
            v,
            A.root,
            m
          ),
          $ = { ...B, mask: { ...B.root, ...B.mask, ...y, ...p } },
          [O, q] = (0, Z.Cn)("Tour", g.zIndex);
        return o.createElement(
          P.Z.Provider,
          { value: q },
          o.createElement(R, {
            ...g,
            styles: $,
            classNames: A,
            closeIcon: null != s ? s : b,
            zIndex: O,
            rootClassName: D,
            prefixCls: w,
            animated: !0,
            renderPanel: (e, t) =>
              o.createElement(j, {
                styles: $,
                classNames: A,
                type: n,
                stepProps: e,
                current: t,
                indicatorsRender: l,
                actionsRender: c,
              }),
            builtinPlacements: (e) => {
              var t;
              return (0, W.Z)({
                arrowPointAtCenter:
                  null === (t = null == e ? void 0 : e.arrowPointAtCenter) ||
                  void 0 === t ||
                  t,
                autoAdjustOverflow: !0,
                offset: N.marginXXS,
                arrowWidth: N.sizePopupArrow,
                borderRadius: N.borderRadius,
              });
            },
            steps: S,
          })
        );
      };
      et._InternalPanelDoNotUseOrYouWillBeFired = ee;
      var en = et;
    },
  },
]);
