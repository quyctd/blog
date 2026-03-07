"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2777],
  {
    83669: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return r;
        },
      });
      var a = n(2265),
        i = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
            ],
          },
          name: "check-circle",
          theme: "outlined",
        },
        s = n(55015);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var a in n)
                  Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
              }
              return t;
            }).apply(this, arguments);
      }
      var r = a.forwardRef((t, e) =>
        a.createElement(s.Z, o({}, t, { ref: e, icon: i }))
      );
    },
    91557: function (t, e, n) {
      n.d(e, {
        nH: function () {
          return o;
        },
        tS: function () {
          return s;
        },
      }),
        n(2265);
      var a = n(19436);
      function i(t, e = !1) {
        if ((0, a.Z)(t)) {
          let n = t.nodeName.toLowerCase(),
            a =
              ["input", "select", "textarea", "button"].includes(n) ||
              t.isContentEditable ||
              ("a" === n && !!t.getAttribute("href")),
            i = t.getAttribute("tabindex"),
            s = Number(i),
            o = null;
          return (
            i && !Number.isNaN(s) ? (o = s) : a && null === o && (o = 0),
            a && t.disabled && (o = null),
            null !== o && (o >= 0 || (e && o < 0))
          );
        }
        return !1;
      }
      function s(t, e = !1) {
        let n = [...t.querySelectorAll("*")].filter((t) => i(t, e));
        return i(t, e) && n.unshift(t), n;
      }
      function o(t, e) {
        if (!t) return;
        t.focus(e);
        let { cursor: n } = e || {};
        if (
          n &&
          (t instanceof HTMLInputElement || t instanceof HTMLTextAreaElement)
        ) {
          let e = t.value.length;
          switch (n) {
            case "start":
              t.setSelectionRange(0, 0);
              break;
            case "end":
              t.setSelectionRange(e, e);
              break;
            default:
              t.setSelectionRange(0, e);
          }
        }
      }
    },
    69410: function (t, e, n) {
      var a = n(54998);
      e.Z = a.Z;
    },
    62807: function (t, e, n) {
      let a = (0, n(2265).createContext)({});
      e.Z = a;
    },
    54998: function (t, e, n) {
      var a = n(2265),
        i = n(61994),
        s = n(71744),
        o = n(62807),
        r = n(96776);
      function c(t) {
        return "auto" === t
          ? "1 1 auto"
          : "number" == typeof t
          ? "".concat(t, " ").concat(t, " auto")
          : /^\d+(\.\d+)?(px|em|rem|%)$/.test(t)
          ? "0 0 ".concat(t)
          : t;
      }
      let l = ["xs", "sm", "md", "lg", "xl", "xxl"],
        u = a.forwardRef((t, e) => {
          let { getPrefixCls: n, direction: u } = a.useContext(s.E_),
            { gutter: h, wrap: d } = a.useContext(o.Z),
            {
              prefixCls: f,
              span: p,
              order: m,
              offset: v,
              push: y,
              pull: x,
              className: b,
              children: g,
              flex: w,
              style: C,
              ...E
            } = t,
            M = n("col", f),
            [S, R] = (0, r.cG)(M),
            I = {},
            O = {};
          l.forEach((e) => {
            let n = {},
              a = t[e];
            "number" == typeof a
              ? (n.span = a)
              : "object" == typeof a && (n = a || {}),
              delete E[e],
              (O = {
                ...O,
                ["".concat(M, "-").concat(e, "-").concat(n.span)]:
                  void 0 !== n.span,
                ["".concat(M, "-").concat(e, "-order-").concat(n.order)]:
                  n.order || 0 === n.order,
                ["".concat(M, "-").concat(e, "-offset-").concat(n.offset)]:
                  n.offset || 0 === n.offset,
                ["".concat(M, "-").concat(e, "-push-").concat(n.push)]:
                  n.push || 0 === n.push,
                ["".concat(M, "-").concat(e, "-pull-").concat(n.pull)]:
                  n.pull || 0 === n.pull,
                ["".concat(M, "-rtl")]: "rtl" === u,
              }),
              n.flex &&
                ((O["".concat(M, "-").concat(e, "-flex")] = !0),
                (I["--".concat(M, "-").concat(e, "-flex")] = c(n.flex)));
          });
          let N = (0, i.W)(
              M,
              {
                ["".concat(M, "-").concat(p)]: void 0 !== p,
                ["".concat(M, "-order-").concat(m)]: m,
                ["".concat(M, "-offset-").concat(v)]: v,
                ["".concat(M, "-push-").concat(y)]: y,
                ["".concat(M, "-pull-").concat(x)]: x,
              },
              b,
              O,
              S,
              R
            ),
            k = {};
          if (null == h ? void 0 : h[0]) {
            let t =
              "number" == typeof h[0]
                ? "".concat(h[0] / 2, "px")
                : "calc(".concat(h[0], " / 2)");
            k.paddingInline = t;
          }
          return (
            w && ((k.flex = c(w)), !1 !== d || k.minWidth || (k.minWidth = 0)),
            a.createElement(
              "div",
              { ...E, style: { ...k, ...C, ...I }, className: N, ref: e },
              g
            )
          );
        });
      e.Z = u;
    },
    58184: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return i;
        },
      });
      var a = n(6543);
      function i(t, e) {
        let n = [void 0, void 0],
          i = Array.isArray(t) ? t : [t, void 0],
          s = e || { xs: !0, sm: !0, md: !0, lg: !0, xl: !0, xxl: !0 };
        return (
          i.forEach((t, e) => {
            if ("object" == typeof t && null !== t)
              for (let i = 0; i < a.c4.length; i++) {
                let o = a.c4[i];
                if (s[o] && void 0 !== t[o]) {
                  n[e] = t[o];
                  break;
                }
              }
            else n[e] = t;
          }),
          n
        );
      }
    },
    10295: function (t, e, n) {
      var a = n(2265),
        i = n(61994),
        s = n(6543),
        o = n(71744),
        r = n(28617),
        c = n(58184),
        l = n(62807),
        u = n(96776);
      function h(t, e) {
        let [n, i] = a.useState("string" == typeof t ? t : ""),
          o = () => {
            if (("string" == typeof t && i(t), "object" == typeof t))
              for (let n = 0; n < s.c4.length; n++) {
                let a = s.c4[n];
                if (!e || !e[a]) continue;
                let o = t[a];
                if (void 0 !== o) {
                  i(o);
                  return;
                }
              }
          };
        return (
          a.useEffect(() => {
            o();
          }, [JSON.stringify(t), e]),
          n
        );
      }
      let d = a.forwardRef((t, e) => {
        let {
            prefixCls: n,
            justify: s,
            align: d,
            className: f,
            style: p,
            children: m,
            gutter: v = 0,
            wrap: y,
            ...x
          } = t,
          { getPrefixCls: b, direction: g } = a.useContext(o.E_),
          w = (0, r.Z)(!0, null),
          C = h(d, w),
          E = h(s, w),
          M = b("row", n),
          [S, R] = (0, u.VM)(M),
          I = (0, c.Z)(v, w),
          O = (0, i.W)(
            M,
            {
              ["".concat(M, "-no-wrap")]: !1 === y,
              ["".concat(M, "-").concat(E)]: E,
              ["".concat(M, "-").concat(C)]: C,
              ["".concat(M, "-rtl")]: "rtl" === g,
            },
            f,
            S,
            R
          ),
          N = {};
        if (null == I ? void 0 : I[0]) {
          let t =
            "number" == typeof I[0]
              ? "".concat(-(I[0] / 2), "px")
              : "calc(".concat(I[0], " / -2)");
          N.marginInline = t;
        }
        let [k, Z] = I;
        N.rowGap = Z;
        let W = a.useMemo(() => ({ gutter: [k, Z], wrap: y }), [k, Z, y]);
        return a.createElement(
          l.Z.Provider,
          { value: W },
          a.createElement(
            "div",
            { ...x, className: O, style: { ...N, ...p }, ref: e },
            m
          )
        );
      });
      e.Z = d;
    },
    96776: function (t, e, n) {
      n.d(e, {
        VM: function () {
          return u;
        },
        cG: function () {
          return d;
        },
        hd: function () {
          return h;
        },
      });
      var a = n(38775),
        i = n(99320),
        s = n(19224);
      let o = (t) => {
          let { componentCls: e } = t;
          return {
            [e]: { position: "relative", maxWidth: "100%", minHeight: 1 },
          };
        },
        r = (t, e) => {
          let { prefixCls: n, componentCls: a, gridColumns: i } = t,
            s = {};
          for (let t = i; t >= 0; t--)
            0 === t
              ? ((s["".concat(a).concat(e, "-").concat(t)] = {
                  display: "none",
                }),
                (s["".concat(a, "-push-").concat(t)] = {
                  insetInlineStart: "auto",
                }),
                (s["".concat(a, "-pull-").concat(t)] = {
                  insetInlineEnd: "auto",
                }),
                (s["".concat(a).concat(e, "-push-").concat(t)] = {
                  insetInlineStart: "auto",
                }),
                (s["".concat(a).concat(e, "-pull-").concat(t)] = {
                  insetInlineEnd: "auto",
                }),
                (s["".concat(a).concat(e, "-offset-").concat(t)] = {
                  marginInlineStart: 0,
                }),
                (s["".concat(a).concat(e, "-order-").concat(t)] = { order: 0 }))
              : ((s["".concat(a).concat(e, "-").concat(t)] = [
                  { "--ant-display": "block", display: "block" },
                  {
                    display: "var(--ant-display)",
                    flex: "0 0 ".concat((t / i) * 100, "%"),
                    maxWidth: "".concat((t / i) * 100, "%"),
                  },
                ]),
                (s["".concat(a).concat(e, "-push-").concat(t)] = {
                  insetInlineStart: "".concat((t / i) * 100, "%"),
                }),
                (s["".concat(a).concat(e, "-pull-").concat(t)] = {
                  insetInlineEnd: "".concat((t / i) * 100, "%"),
                }),
                (s["".concat(a).concat(e, "-offset-").concat(t)] = {
                  marginInlineStart: "".concat((t / i) * 100, "%"),
                }),
                (s["".concat(a).concat(e, "-order-").concat(t)] = {
                  order: t,
                }));
          return (
            (s["".concat(a).concat(e, "-flex")] = {
              flex: "var(--".concat(n).concat(e, "-flex)"),
            }),
            s
          );
        },
        c = (t, e) => r(t, e),
        l = (t, e, n) => ({
          ["@media (min-width: ".concat((0, a.bf)(e), ")")]: { ...c(t, n) },
        }),
        u = (0, i.I$)(
          "Grid",
          (t) => {
            let { componentCls: e } = t;
            return {
              [e]: {
                display: "flex",
                flexFlow: "row wrap",
                minWidth: 0,
                "&::before, &::after": { display: "flex" },
                "&-no-wrap": { flexWrap: "nowrap" },
                "&-start": { justifyContent: "flex-start" },
                "&-center": { justifyContent: "center" },
                "&-end": { justifyContent: "flex-end" },
                "&-space-between": { justifyContent: "space-between" },
                "&-space-around": { justifyContent: "space-around" },
                "&-space-evenly": { justifyContent: "space-evenly" },
                "&-top": { alignItems: "flex-start" },
                "&-middle": { alignItems: "center" },
                "&-bottom": { alignItems: "flex-end" },
              },
            };
          },
          () => ({})
        ),
        h = (t) => ({
          xs: t.screenXSMin,
          sm: t.screenSMMin,
          md: t.screenMDMin,
          lg: t.screenLGMin,
          xl: t.screenXLMin,
          xxl: t.screenXXLMin,
        }),
        d = (0, i.I$)(
          "Grid",
          (t) => {
            let e = (0, s.IX)(t, { gridColumns: 24 }),
              n = h(e);
            return (
              delete n.xs,
              [
                o(e),
                c(e, ""),
                c(e, "-xs"),
                Object.keys(n)
                  .map((t) => l(e, n[t], "-".concat(t)))
                  .reduce((t, e) => ({ ...t, ...e }), {}),
              ]
            );
          },
          () => ({})
        );
    },
    47451: function (t, e, n) {
      var a = n(10295);
      e.Z = a.Z;
    },
    45235: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return C;
        },
      });
      var a = n(2265),
        i = n(73627),
        s = n(19722),
        o = n(87011),
        r = n(61994),
        c = n(80052),
        l = n(71744),
        u = n(50337),
        h = (t) => {
          let e;
          let {
            value: n,
            formatter: i,
            precision: s,
            decimalSeparator: o,
            groupSeparator: r = "",
            prefixCls: c,
          } = t;
          if ("function" == typeof i) e = i(n);
          else {
            let t = String(n),
              i = t.match(/^(-?)(\d*)(\.(\d+))?$/);
            if (i && "-" !== t) {
              let t = i[1],
                n = i[2] || "0",
                l = i[4] || "";
              (n = n.replace(/\B(?=(\d{3})+(?!\d))/g, r)),
                "number" == typeof s &&
                  (l = l.padEnd(s, "0").slice(0, s > 0 ? s : 0)),
                l && (l = "".concat(o).concat(l)),
                (e = [
                  a.createElement(
                    "span",
                    {
                      key: "int",
                      className: "".concat(c, "-content-value-int"),
                    },
                    t,
                    n
                  ),
                  l &&
                    a.createElement(
                      "span",
                      {
                        key: "decimal",
                        className: "".concat(c, "-content-value-decimal"),
                      },
                      l
                    ),
                ]);
            } else e = t;
          }
          return a.createElement(
            "span",
            { className: "".concat(c, "-content-value") },
            e
          );
        },
        d = n(12918),
        f = n(99320),
        p = n(19224);
      let m = (t) => {
        let {
          componentCls: e,
          marginXXS: n,
          padding: a,
          colorTextDescription: i,
          titleFontSize: s,
          colorTextHeading: o,
          contentFontSize: r,
          fontFamily: c,
        } = t;
        return {
          [e]: {
            ...(0, d.Wf)(t),
            ["".concat(e, "-header")]: {
              paddingBottom: n,
              ["".concat(e, "-title")]: { color: i, fontSize: s },
            },
            ["".concat(e, "-skeleton")]: { paddingTop: a },
            ["".concat(e, "-content")]: {
              color: o,
              fontSize: r,
              fontFamily: c,
              ["".concat(e, "-content-value")]: {
                display: "inline-block",
                direction: "ltr",
              },
              ["".concat(e, "-content-prefix, ").concat(e, "-content-suffix")]:
                { display: "inline-block" },
              ["".concat(e, "-content-prefix")]: { marginInlineEnd: n },
              ["".concat(e, "-content-suffix")]: { marginInlineStart: n },
            },
          },
        };
      };
      var v = (0, f.I$)(
        "Statistic",
        (t) => m((0, p.IX)(t, {})),
        (t) => {
          let { fontSizeHeading3: e, fontSize: n } = t;
          return { titleFontSize: n, contentFontSize: e };
        }
      );
      let y = a.forwardRef((t, e) => {
          let {
              prefixCls: n,
              className: i,
              rootClassName: s,
              style: d,
              valueStyle: f,
              value: p = 0,
              title: m,
              valueRender: y,
              prefix: x,
              suffix: b,
              loading: g = !1,
              formatter: w,
              precision: C,
              decimalSeparator: E = ".",
              groupSeparator: M = ",",
              onMouseEnter: S,
              onMouseLeave: R,
              styles: I,
              classNames: O,
              ...N
            } = t,
            {
              getPrefixCls: k,
              direction: Z,
              className: W,
              style: j,
              classNames: L,
              styles: P,
            } = (0, l.dj)("statistic"),
            T = k("statistic", n),
            [G, A] = v(T),
            D = {
              ...t,
              decimalSeparator: E,
              groupSeparator: M,
              loading: g,
              value: p,
            },
            [z, H] = (0, c.MW)([L, O], [P, I], { props: D }),
            F = a.createElement(h, {
              decimalSeparator: E,
              groupSeparator: M,
              prefixCls: T,
              formatter: w,
              precision: C,
              value: p,
            }),
            K = (0, r.W)(
              T,
              { ["".concat(T, "-rtl")]: "rtl" === Z },
              W,
              i,
              s,
              z.root,
              G,
              A
            ),
            X = (0, r.W)("".concat(T, "-header"), z.header),
            V = (0, r.W)("".concat(T, "-title"), z.title),
            _ = (0, r.W)("".concat(T, "-content"), z.content),
            $ = (0, r.W)("".concat(T, "-content-prefix"), z.prefix),
            U = (0, r.W)("".concat(T, "-content-suffix"), z.suffix),
            B = a.useRef(null);
          a.useImperativeHandle(e, () => ({ nativeElement: B.current }));
          let Y = (0, o.Z)(N, { aria: !0, data: !0 });
          return a.createElement(
            "div",
            {
              ...Y,
              className: K,
              style: { ...H.root, ...j, ...d },
              ref: B,
              onMouseEnter: S,
              onMouseLeave: R,
            },
            m &&
              a.createElement(
                "div",
                { className: X, style: H.header },
                a.createElement("div", { className: V, style: H.title }, m)
              ),
            a.createElement(
              u.Z,
              {
                paragraph: !1,
                loading: g,
                className: "".concat(T, "-skeleton"),
                active: !0,
              },
              a.createElement(
                "div",
                { className: _, style: { ...f, ...H.content } },
                x &&
                  a.createElement("span", { className: $, style: H.prefix }, x),
                y ? y(F) : F,
                b &&
                  a.createElement("span", { className: U, style: H.suffix }, b)
              )
            )
          );
        }),
        x = [
          ["Y", 31536e6],
          ["M", 2592e6],
          ["D", 864e5],
          ["H", 36e5],
          ["m", 6e4],
          ["s", 1e3],
          ["S", 1],
        ],
        b = 1e3 / 60;
      var g = (t) => {
          let {
              value: e,
              format: n = "HH:mm:ss",
              onChange: o,
              onFinish: r,
              type: c,
              ...l
            } = t,
            u = "countdown" === c,
            [h, d] = a.useState(null),
            f = (0, i.zX)(() => {
              let t = Date.now(),
                n = new Date(e).getTime();
              return (
                d({}),
                null == o || o(u ? n - t : t - n),
                !u || !(n < t) || (null == r || r(), !1)
              );
            });
          return (
            a.useEffect(() => {
              let t;
              let e = () => {
                window.clearInterval(t);
              };
              return (
                (t = window.setInterval(() => {
                  f() || window.clearInterval(t);
                }, b)),
                () => {
                  e();
                }
              );
            }, [e, u]),
            a.useEffect(() => {
              d({});
            }, []),
            a.createElement(y, {
              ...l,
              value: e,
              valueRender: (t) => (0, s.Tm)(t, { title: void 0 }),
              formatter: (t, e) =>
                h
                  ? (function (t, e, n) {
                      let { format: a = "" } = e,
                        i = new Date(t).getTime(),
                        s = Date.now();
                      return (function (t, e) {
                        let n = t,
                          a = /\[[^\]]*]/g,
                          i = (e.match(a) || []).map((t) => t.slice(1, -1)),
                          s = e.replace(a, "[]"),
                          o = x.reduce((t, e) => {
                            let [a, i] = e;
                            if (t.includes(a)) {
                              let e = Math.floor(n / i);
                              return (
                                (n -= e * i),
                                t.replace(
                                  RegExp("".concat(a, "+"), "g"),
                                  (t) => {
                                    let n = t.length;
                                    return e.toString().padStart(n, "0");
                                  }
                                )
                              );
                            }
                            return t;
                          }, s),
                          r = 0;
                        return o.replace(a, () => {
                          let t = i[r];
                          return (r += 1), t;
                        });
                      })(n ? Math.max(i - s, 0) : Math.max(s - i, 0), a);
                    })(t, { ...e, format: n }, u)
                  : "-",
            })
          );
        },
        w = a.memo((t) => a.createElement(g, { ...t, type: "countdown" }));
      (y.Timer = g), (y.Countdown = w);
      var C = y;
    },
    2894: function (t, e, n) {
      n.d(e, {
        R: function () {
          return r;
        },
        m: function () {
          return o;
        },
      });
      var a = n(18238),
        i = n(7989),
        s = n(11255),
        o = class extends i.F {
          #t;
          #e;
          #n;
          #a;
          constructor(t) {
            super(),
              (this.#t = t.client),
              (this.mutationId = t.mutationId),
              (this.#n = t.mutationCache),
              (this.#e = []),
              (this.state = t.state || r()),
              this.setOptions(t.options),
              this.scheduleGc();
          }
          setOptions(t) {
            (this.options = t), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(t) {
            this.#e.includes(t) ||
              (this.#e.push(t),
              this.clearGcTimeout(),
              this.#n.notify({
                type: "observerAdded",
                mutation: this,
                observer: t,
              }));
          }
          removeObserver(t) {
            (this.#e = this.#e.filter((e) => e !== t)),
              this.scheduleGc(),
              this.#n.notify({
                type: "observerRemoved",
                mutation: this,
                observer: t,
              });
          }
          optionalRemove() {
            this.#e.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#n.remove(this));
          }
          continue() {
            return this.#a?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
                this.#i({ type: "continue" });
              },
              n = {
                client: this.#t,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#a = (0, s.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t, n)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#i({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#i({ type: "pause" });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#n.canRun(this),
            });
            let a = "pending" === this.state.status,
              i = !this.#a.canStart();
            try {
              if (a) e();
              else {
                this.#i({ type: "pending", variables: t, isPaused: i }),
                  await this.#n.config.onMutate?.(t, this, n);
                let e = await this.options.onMutate?.(t, n);
                e !== this.state.context &&
                  this.#i({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: i,
                  });
              }
              let s = await this.#a.start();
              return (
                await this.#n.config.onSuccess?.(
                  s,
                  t,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(s, t, this.state.context, n),
                await this.#n.config.onSettled?.(
                  s,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  s,
                  null,
                  t,
                  this.state.context,
                  n
                ),
                this.#i({ type: "success", data: s }),
                s
              );
            } catch (e) {
              try {
                throw (
                  (await this.#n.config.onError?.(
                    e,
                    t,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onError?.(e, t, this.state.context, n),
                  await this.#n.config.onSettled?.(
                    void 0,
                    e,
                    this.state.variables,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    e,
                    t,
                    this.state.context,
                    n
                  ),
                  e)
                );
              } finally {
                this.#i({ type: "error", error: e });
              }
            } finally {
              this.#n.runNext(this);
            }
          }
          #i(t) {
            (this.state = ((e) => {
              switch (t.type) {
                case "failed":
                  return {
                    ...e,
                    failureCount: t.failureCount,
                    failureReason: t.error,
                  };
                case "pause":
                  return { ...e, isPaused: !0 };
                case "continue":
                  return { ...e, isPaused: !1 };
                case "pending":
                  return {
                    ...e,
                    context: t.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: t.isPaused,
                    status: "pending",
                    variables: t.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...e,
                    data: t.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...e,
                    data: void 0,
                    error: t.error,
                    failureCount: e.failureCount + 1,
                    failureReason: t.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              a.Vr.batch(() => {
                this.#e.forEach((e) => {
                  e.onMutationUpdate(t);
                }),
                  this.#n.notify({
                    mutation: this,
                    type: "updated",
                    action: t,
                  });
              });
          }
        };
      function r() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
    21770: function (t, e, n) {
      n.d(e, {
        D: function () {
          return u;
        },
      });
      var a = n(2265),
        i = n(2894),
        s = n(18238),
        o = n(24112),
        r = n(45345),
        c = class extends o.l {
          #t;
          #s = void 0;
          #o;
          #r;
          constructor(t, e) {
            super(),
              (this.#t = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#c();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, r.VS)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#o,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, r.Ym)(e.mutationKey) !== (0, r.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#o?.state.status === "pending" &&
                  this.#o.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#o?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#c(), this.#l(t);
          }
          getCurrentResult() {
            return this.#s;
          }
          reset() {
            this.#o?.removeObserver(this),
              (this.#o = void 0),
              this.#c(),
              this.#l();
          }
          mutate(t, e) {
            return (
              (this.#r = e),
              this.#o?.removeObserver(this),
              (this.#o = this.#t
                .getMutationCache()
                .build(this.#t, this.options)),
              this.#o.addObserver(this),
              this.#o.execute(t)
            );
          }
          #c() {
            let t = this.#o?.state ?? (0, i.R)();
            this.#s = {
              ...t,
              isPending: "pending" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #l(t) {
            s.Vr.batch(() => {
              if (this.#r && this.hasListeners()) {
                let e = this.#s.variables,
                  n = this.#s.context,
                  a = {
                    client: this.#t,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                t?.type === "success"
                  ? (this.#r.onSuccess?.(t.data, e, n, a),
                    this.#r.onSettled?.(t.data, null, e, n, a))
                  : t?.type === "error" &&
                    (this.#r.onError?.(t.error, e, n, a),
                    this.#r.onSettled?.(void 0, t.error, e, n, a));
              }
              this.listeners.forEach((t) => {
                t(this.#s);
              });
            });
          }
        },
        l = n(29827);
      function u(t, e) {
        let n = (0, l.NL)(e),
          [i] = a.useState(() => new c(n, t));
        a.useEffect(() => {
          i.setOptions(t);
        }, [i, t]);
        let o = a.useSyncExternalStore(
            a.useCallback((t) => i.subscribe(s.Vr.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          u = a.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(r.ZT);
            },
            [i]
          );
        if (o.error && (0, r.L3)(i.options.throwOnError, [o.error]))
          throw o.error;
        return { ...o, mutate: u, mutateAsync: o.mutate };
      }
    },
  },
]);
