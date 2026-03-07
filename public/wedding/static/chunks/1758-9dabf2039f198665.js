"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1758],
  {
    35713: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return S;
        },
      });
      var C = r(2265),
        n = r(77031),
        o = r(61994),
        l = r(93350),
        a = r(80052),
        c = r(18390),
        i = r(19722),
        d = r(71744);
      let u = (e) => {
        let t;
        let { prefixCls: r, value: n, current: l, offset: a = 0 } = e;
        return (
          a &&
            (t = { position: "absolute", top: "".concat(a, "00%"), left: 0 }),
          C.createElement(
            "span",
            {
              style: t,
              className: (0, o.W)("".concat(r, "-only-unit"), { current: l }),
            },
            n
          )
        );
      };
      var s = (e) => {
        let t, r;
        let { prefixCls: n, count: o, value: l } = e,
          a = Number(l),
          c = Math.abs(o),
          [i, d] = C.useState(a),
          [s, p] = C.useState(c),
          m = () => {
            d(a), p(c);
          };
        if (
          (C.useEffect(() => {
            let e = setTimeout(m, 1e3);
            return () => clearTimeout(e);
          }, [a]),
          i === a || Number.isNaN(a) || Number.isNaN(i))
        )
          (t = [C.createElement(u, { ...e, key: a, current: !0 })]),
            (r = { transition: "none" });
        else {
          t = [];
          let n = a + 10,
            o = [];
          for (let e = a; e <= n; e += 1) o.push(e);
          let l = s < c ? 1 : -1,
            d = o.findIndex((e) => e % 10 === i);
          (t = (l < 0 ? o.slice(0, d + 1) : o.slice(d)).map((t, r) =>
            C.createElement(u, {
              ...e,
              key: t,
              value: t % 10,
              offset: l < 0 ? r - d : r,
              current: r === d,
            })
          )),
            (r = {
              transform: "translateY(".concat(
                -(function (e, t, r) {
                  let C = e,
                    n = 0;
                  for (; (C + 10) % 10 !== t; ) (C += r), (n += r);
                  return n;
                })(i, a, l),
                "00%)"
              ),
            });
        }
        return C.createElement(
          "span",
          { className: "".concat(n, "-only"), style: r, onTransitionEnd: m },
          t
        );
      };
      let p = C.forwardRef((e, t) => {
        let {
            prefixCls: r,
            count: n,
            className: l,
            motionClassName: a,
            style: c,
            title: u,
            show: p,
            component: m = "sup",
            children: L,
            ...h
          } = e,
          { getPrefixCls: M } = C.useContext(d.E_),
          f = M("scroll-number", r),
          E = {
            ...h,
            "data-show": p,
            style: c,
            className: (0, o.W)(f, l, a),
            title: u,
          },
          k = n;
        if (n && Number(n) % 1 == 0) {
          let e = String(n).split("");
          k = C.createElement(
            "bdi",
            null,
            e.map((t, r) =>
              C.createElement(s, {
                prefixCls: f,
                count: Number(n),
                value: t,
                key: e.length - r,
              })
            )
          );
        }
        return ((null == c ? void 0 : c.borderColor) &&
          (E.style = {
            ...c,
            boxShadow: "0 0 0 1px ".concat(c.borderColor, " inset"),
          }),
        L)
          ? (0, i.Tm)(L, (e) => ({
              className: (0, o.W)(
                "".concat(f, "-custom-component"),
                null == e ? void 0 : e.className,
                a
              ),
            }))
          : C.createElement(m, { ...E, ref: t }, k);
      });
      var m = r(38775),
        L = r(12918),
        h = r(18536),
        M = r(19224),
        f = r(99320);
      let E = new m.E4("antStatusProcessing", {
          "0%": { transform: "scale(0.8)", opacity: 0.5 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        }),
        k = new m.E4("antZoomBadgeIn", {
          "0%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
          "100%": { transform: "scale(1) translate(50%, -50%)" },
        }),
        Z = new m.E4("antZoomBadgeOut", {
          "0%": { transform: "scale(1) translate(50%, -50%)" },
          "100%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
        }),
        g = new m.E4("antNoWrapperZoomBadgeIn", {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)" },
        }),
        b = new m.E4("antNoWrapperZoomBadgeOut", {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)", opacity: 0 },
        }),
        H = new m.E4("antBadgeLoadingCircle", {
          "0%": { transformOrigin: "50%" },
          "100%": {
            transform: "translate(50%, -50%) rotate(360deg)",
            transformOrigin: "50%",
          },
        }),
        y = (e) => {
          let {
              componentCls: t,
              iconCls: r,
              antCls: C,
              badgeShadowSize: n,
              textFontSize: o,
              textFontSizeSM: l,
              statusSize: a,
              dotSize: c,
              textFontWeight: i,
              indicatorHeight: d,
              indicatorHeightSM: u,
              marginXS: s,
              calc: p,
            } = e,
            M = "".concat(C, "-scroll-number"),
            f = (0, h.Z)(e, (e, r) => {
              let { darkColor: C } = r;
              return {
                ["&".concat(t, " ").concat(t, "-color-").concat(e)]: {
                  background: C,
                  ["&:not(".concat(t, "-count)")]: { color: C },
                  "a:hover &": { background: C },
                },
              };
            });
          return {
            [t]: {
              ...(0, L.Wf)(e),
              position: "relative",
              display: "inline-block",
              width: "fit-content",
              lineHeight: 1,
              ["".concat(t, "-count")]: {
                display: "inline-flex",
                justifyContent: "center",
                zIndex: e.indicatorZIndex,
                minWidth: d,
                height: d,
                color: e.badgeTextColor,
                fontWeight: i,
                fontSize: o,
                lineHeight: (0, m.bf)(d),
                whiteSpace: "nowrap",
                textAlign: "center",
                background: e.badgeColor,
                borderRadius: p(d).div(2).equal(),
                boxShadow: "0 0 0 "
                  .concat((0, m.bf)(n), " ")
                  .concat(e.badgeShadowColor),
                transition: "background ".concat(e.motionDurationMid),
                a: { color: e.badgeTextColor },
                "a:hover": { color: e.badgeTextColor },
                "a:hover &": { background: e.badgeColorHover },
              },
              ["".concat(t, "-count-sm")]: {
                minWidth: u,
                height: u,
                fontSize: l,
                lineHeight: (0, m.bf)(u),
                borderRadius: p(u).div(2).equal(),
              },
              ["".concat(t, "-multiple-words")]: {
                padding: "0 ".concat((0, m.bf)(e.paddingXS)),
                bdi: { unicodeBidi: "plaintext" },
              },
              ["".concat(t, "-dot")]: {
                zIndex: e.indicatorZIndex,
                width: c,
                minWidth: c,
                height: c,
                background: e.badgeColor,
                borderRadius: "100%",
                boxShadow: "0 0 0 "
                  .concat((0, m.bf)(n), " ")
                  .concat(e.badgeShadowColor),
              },
              [""
                .concat(t, "-count, ")
                .concat(t, "-dot, ")
                .concat(M, "-custom-component")]: {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                transform: "translate(50%, -50%)",
                transformOrigin: "100% 0%",
                ["&".concat(r, "-spin")]: {
                  animationName: H,
                  animationDuration: "1s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                },
              },
              ["&".concat(t, "-status")]: {
                lineHeight: "inherit",
                verticalAlign: "baseline",
                ["".concat(t, "-status-dot")]: {
                  position: "relative",
                  top: -1,
                  display: "inline-block",
                  width: a,
                  height: a,
                  verticalAlign: "middle",
                  borderRadius: "50%",
                },
                ["".concat(t, "-status-success")]: {
                  backgroundColor: e.colorSuccess,
                },
                ["".concat(t, "-status-processing")]: {
                  overflow: "visible",
                  color: e.colorInfo,
                  backgroundColor: e.colorInfo,
                  borderColor: "currentcolor",
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    width: "100%",
                    height: "100%",
                    borderWidth: n,
                    borderStyle: "solid",
                    borderColor: "inherit",
                    borderRadius: "50%",
                    animationName: E,
                    animationDuration: e.badgeProcessingDuration,
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                    content: '""',
                  },
                },
                ["".concat(t, "-status-default")]: {
                  backgroundColor: e.colorTextPlaceholder,
                },
                ["".concat(t, "-status-error")]: {
                  backgroundColor: e.colorError,
                },
                ["".concat(t, "-status-warning")]: {
                  backgroundColor: e.colorWarning,
                },
                ["".concat(t, "-status-text")]: {
                  marginInlineStart: s,
                  color: e.colorText,
                  fontSize: e.fontSize,
                },
              },
              ...f,
              ["".concat(t, "-zoom-appear, ").concat(t, "-zoom-enter")]: {
                animationName: k,
                animationDuration: e.motionDurationSlow,
                animationTimingFunction: e.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["".concat(t, "-zoom-leave")]: {
                animationName: Z,
                animationDuration: e.motionDurationSlow,
                animationTimingFunction: e.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["&".concat(t, "-not-a-wrapper")]: {
                ["".concat(t, "-zoom-appear, ").concat(t, "-zoom-enter")]: {
                  animationName: g,
                  animationDuration: e.motionDurationSlow,
                  animationTimingFunction: e.motionEaseOutBack,
                },
                ["".concat(t, "-zoom-leave")]: {
                  animationName: b,
                  animationDuration: e.motionDurationSlow,
                  animationTimingFunction: e.motionEaseOutBack,
                },
                ["&:not(".concat(t, "-status)")]: { verticalAlign: "middle" },
                ["".concat(M, "-custom-component, ").concat(t, "-count")]: {
                  transform: "none",
                },
                ["".concat(M, "-custom-component, ").concat(M)]: {
                  position: "relative",
                  top: "auto",
                  display: "block",
                  transformOrigin: "50% 50%",
                },
              },
              [M]: {
                overflow: "hidden",
                transition: "all "
                  .concat(e.motionDurationMid, " ")
                  .concat(e.motionEaseOutBack),
                ["".concat(M, "-only")]: {
                  position: "relative",
                  display: "inline-block",
                  height: d,
                  transition: "all "
                    .concat(e.motionDurationSlow, " ")
                    .concat(e.motionEaseOutBack),
                  WebkitTransformStyle: "preserve-3d",
                  WebkitBackfaceVisibility: "hidden",
                  ["> p".concat(M, "-only-unit")]: {
                    height: d,
                    margin: 0,
                    WebkitTransformStyle: "preserve-3d",
                    WebkitBackfaceVisibility: "hidden",
                  },
                },
                ["".concat(M, "-symbol")]: { verticalAlign: "top" },
              },
              "&-rtl": {
                direction: "rtl",
                [""
                  .concat(t, "-count, ")
                  .concat(t, "-dot, ")
                  .concat(M, "-custom-component")]: {
                  transform: "translate(-50%, -50%)",
                },
              },
            },
          };
        },
        v = (e) => {
          let {
              fontHeight: t,
              lineWidth: r,
              marginXS: C,
              colorBorderBg: n,
            } = e,
            o = e.colorTextLightSolid,
            l = e.colorError,
            a = e.colorErrorHover;
          return (0, M.IX)(e, {
            badgeFontHeight: t,
            badgeShadowSize: r,
            badgeTextColor: o,
            badgeColor: l,
            badgeColorHover: a,
            badgeShadowColor: n,
            badgeProcessingDuration: "1.2s",
            badgeRibbonOffset: C,
            badgeRibbonCornerTransform: "scaleY(0.75)",
            badgeRibbonCornerFilter: "brightness(75%)",
          });
        },
        w = (e) => {
          let { fontSize: t, lineHeight: r, fontSizeSM: C, lineWidth: n } = e;
          return {
            indicatorZIndex: "auto",
            indicatorHeight: Math.round(t * r) - 2 * n,
            indicatorHeightSM: t,
            dotSize: C / 2,
            textFontSize: C,
            textFontSizeSM: C,
            textFontWeight: "normal",
            statusSize: C / 2,
          };
        };
      var O = (0, f.I$)("Badge", (e) => y(v(e)), w);
      let W = C.forwardRef((e, t) => {
          let {
              prefixCls: r,
              scrollNumberPrefixCls: u,
              children: s,
              status: m,
              text: L,
              color: h,
              count: M = null,
              overflowCount: f = 99,
              dot: E = !1,
              size: k = "default",
              title: Z,
              offset: g,
              style: b,
              className: H,
              rootClassName: y,
              classNames: v,
              styles: w,
              showZero: W = !1,
              ...V
            } = e,
            {
              getPrefixCls: R,
              direction: S,
              className: j,
              style: I,
              classNames: F,
              styles: P,
            } = (0, d.dj)("badge"),
            x = R("badge", r),
            [N, D] = O(x),
            B = { ...e, overflowCount: f, size: k, dot: E, showZero: W },
            [T, z] = (0, a.MW)([F, v], [P, w], { props: B }),
            q = M > f ? "".concat(f, "+") : M,
            A = "0" === q || 0 === q || "0" === L || 0 === L,
            X = null === M || (A && !W),
            G = ((0, c.Z)(m) || (0, c.Z)(h)) && X,
            $ = (0, c.Z)(m) || !A,
            _ = E && !A,
            Q = _ ? "" : q,
            U = (0, C.useMemo)(
              () =>
                (((!(0, c.Z)(Q) || "" === Q) && (!(0, c.Z)(L) || "" === L)) ||
                  (A && !W)) &&
                !_,
              [Q, A, W, _, L]
            ),
            Y = (0, C.useRef)(M);
          U || (Y.current = M);
          let K = Y.current,
            J = (0, C.useRef)(Q);
          U || (J.current = Q);
          let ee = J.current,
            et = (0, C.useRef)(_);
          U || (et.current = _);
          let er = (0, C.useMemo)(() => {
              if (!g) return { ...I, ...b };
              let e = Number.parseInt(g[0], 10);
              return { marginTop: g[1], insetInlineEnd: -e, ...I, ...b };
            }, [g, b, I]),
            eC =
              null != Z
                ? Z
                : "string" == typeof K || "number" == typeof K
                ? K
                : void 0,
            en = !U && (0 === L ? W : !!L && !0 !== L),
            eo = en
              ? C.createElement(
                  "span",
                  { className: "".concat(x, "-status-text") },
                  L
                )
              : null,
            el =
              K && "object" == typeof K
                ? (0, i.Tm)(K, (e) => ({ style: { ...er, ...e.style } }))
                : void 0,
            ea = (0, l.o2)(h, !1),
            ec = (0, o.W)(T.indicator, {
              ["".concat(x, "-status-dot")]: G,
              ["".concat(x, "-status-").concat(m)]: !!m,
              ["".concat(x, "-color-").concat(h)]: ea,
            }),
            ei = {};
          h && !ea && ((ei.color = h), (ei.background = h));
          let ed = (0, o.W)(
            x,
            {
              ["".concat(x, "-status")]: G,
              ["".concat(x, "-not-a-wrapper")]: !s,
              ["".concat(x, "-rtl")]: "rtl" === S,
            },
            H,
            y,
            j,
            T.root,
            N,
            D
          );
          if (!s && G && (L || $ || !X)) {
            let e = er.color;
            return C.createElement(
              "span",
              { ...V, className: ed, style: { ...z.root, ...er } },
              C.createElement("span", {
                className: ec,
                style: { ...z.indicator, ...ei },
              }),
              en &&
                C.createElement(
                  "span",
                  {
                    style: { color: e },
                    className: "".concat(x, "-status-text"),
                  },
                  L
                )
            );
          }
          return C.createElement(
            "span",
            { ref: t, ...V, className: ed, style: z.root },
            s,
            C.createElement(
              n.ZP,
              {
                visible: !U,
                motionName: "".concat(x, "-zoom"),
                motionAppear: !1,
                motionDeadline: 1e3,
              },
              (e) => {
                let { className: t } = e,
                  r = R("scroll-number", u),
                  n = et.current,
                  l = (0, o.W)(T.indicator, {
                    ["".concat(x, "-dot")]: n,
                    ["".concat(x, "-count")]: !n,
                    ["".concat(x, "-count-sm")]: "small" === k,
                    ["".concat(x, "-multiple-words")]:
                      !n && ee && ee.toString().length > 1,
                    ["".concat(x, "-status-").concat(m)]: !!m,
                    ["".concat(x, "-color-").concat(h)]: ea,
                  }),
                  a = { ...z.indicator, ...er };
                return (
                  h && !ea && ((a = a || {}).background = h),
                  C.createElement(
                    p,
                    {
                      prefixCls: r,
                      show: !U,
                      motionClassName: t,
                      className: l,
                      count: ee,
                      title: eC,
                      style: a,
                      key: "scrollNumber",
                    },
                    el
                  )
                );
              }
            ),
            eo
          );
        }),
        V = (e) => {
          let {
              antCls: t,
              badgeFontHeight: r,
              marginXS: C,
              badgeRibbonOffset: n,
              calc: o,
            } = e,
            l = "".concat(t, "-ribbon"),
            a = (0, h.Z)(e, (e, t) => {
              let { darkColor: r } = t;
              return {
                ["&".concat(l, "-color-").concat(e)]: {
                  background: r,
                  color: r,
                },
              };
            });
          return {
            ["".concat(t, "-ribbon-wrapper")]: { position: "relative" },
            [l]: {
              ...(0, L.Wf)(e),
              position: "absolute",
              top: C,
              padding: "0 ".concat((0, m.bf)(e.paddingXS)),
              color: e.colorPrimary,
              lineHeight: (0, m.bf)(r),
              whiteSpace: "nowrap",
              backgroundColor: e.colorPrimary,
              borderRadius: e.borderRadiusSM,
              ["".concat(l, "-content")]: { color: e.badgeTextColor },
              ["".concat(l, "-corner")]: {
                position: "absolute",
                top: "100%",
                width: n,
                height: n,
                color: "currentcolor",
                border: "".concat((0, m.bf)(o(n).div(2).equal()), " solid"),
                transform: e.badgeRibbonCornerTransform,
                transformOrigin: "top",
                filter: e.badgeRibbonCornerFilter,
              },
              ...a,
              ["&".concat(l, "-placement-end")]: {
                insetInlineEnd: o(n).mul(-1).equal(),
                borderEndEndRadius: 0,
                ["".concat(l, "-corner")]: {
                  insetInlineEnd: 0,
                  borderInlineEndColor: "transparent",
                  borderBlockEndColor: "transparent",
                },
              },
              ["&".concat(l, "-placement-start")]: {
                insetInlineStart: o(n).mul(-1).equal(),
                borderEndStartRadius: 0,
                ["".concat(l, "-corner")]: {
                  insetInlineStart: 0,
                  borderBlockEndColor: "transparent",
                  borderInlineStartColor: "transparent",
                },
              },
              "&-rtl": { direction: "rtl" },
            },
          };
        };
      var R = (0, f.I$)(["Badge", "Ribbon"], (e) => V(v(e)), w);
      W.Ribbon = (e) => {
        let {
            className: t,
            prefixCls: r,
            style: n,
            color: c,
            children: i,
            text: u,
            placement: s = "end",
            rootClassName: p,
            styles: m,
            classNames: L,
          } = e,
          {
            getPrefixCls: h,
            direction: M,
            className: f,
            style: E,
            classNames: k,
            styles: Z,
          } = (0, d.dj)("ribbon"),
          g = h("ribbon", r),
          b = "".concat(g, "-wrapper"),
          [H, y] = R(g, b),
          v = { ...e, placement: s },
          [w, O] = (0, a.MW)([k, L], [Z, m], { props: v }),
          W = (0, l.o2)(c, !1),
          V = (0, o.W)(
            g,
            "".concat(g, "-placement-").concat(s),
            {
              ["".concat(g, "-rtl")]: "rtl" === M,
              ["".concat(g, "-color-").concat(c)]: W,
            },
            t,
            f,
            w.indicator
          ),
          S = {},
          j = {};
        return (
          c && !W && ((S.background = c), (j.color = c)),
          C.createElement(
            "div",
            { className: (0, o.W)(b, p, H, y, w.root), style: O.root },
            i,
            C.createElement(
              "div",
              {
                className: (0, o.W)(V, H),
                style: { ...S, ...O.indicator, ...E, ...n },
              },
              C.createElement(
                "span",
                {
                  className: (0, o.W)("".concat(g, "-content"), w.content),
                  style: O.content,
                },
                u
              ),
              C.createElement("div", {
                className: "".concat(g, "-corner"),
                style: j,
              })
            )
          )
        );
      };
      var S = W;
    },
    50742: function (e, t, r) {
      var C = r(82383);
      t.ZP = C.Z;
    },
    10868: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return y;
        },
      });
      var C = r(2265),
        n = r(73627),
        o = r(61994),
        l = r(78380),
        a = r(35499),
        c = r(18390),
        i = r(71744),
        d = r(99320),
        u = r(19224);
      let s = ["wrap", "nowrap", "wrap-reverse"],
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
        m = [
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
        L = (e, t) => {
          let r = !0 === t.wrap ? "wrap" : t.wrap;
          return { ["".concat(e, "-wrap-").concat(r)]: r && s.includes(r) };
        },
        h = (e, t) => {
          let r = {};
          return (
            m.forEach((C) => {
              r["".concat(e, "-align-").concat(C)] = t.align === C;
            }),
            (r["".concat(e, "-align-stretch")] = !t.align && !!t.vertical),
            r
          );
        },
        M = (e, t) => {
          let r = {};
          return (
            p.forEach((C) => {
              r["".concat(e, "-justify-").concat(C)] = t.justify === C;
            }),
            r
          );
        };
      var f = (e, t) => (0, o.W)({ ...L(e, t), ...h(e, t), ...M(e, t) });
      let E = (e) => {
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
        k = (e) => {
          let { componentCls: t } = e;
          return {
            [t]: {
              "&-gap-small": { gap: e.flexGapSM },
              "&-gap-middle": { gap: e.flexGap },
              "&-gap-large": { gap: e.flexGapLG },
            },
          };
        },
        Z = (e) => {
          let { componentCls: t } = e,
            r = {};
          return (
            s.forEach((e) => {
              r["".concat(t, "-wrap-").concat(e)] = { flexWrap: e };
            }),
            r
          );
        },
        g = (e) => {
          let { componentCls: t } = e,
            r = {};
          return (
            m.forEach((e) => {
              r["".concat(t, "-align-").concat(e)] = { alignItems: e };
            }),
            r
          );
        },
        b = (e) => {
          let { componentCls: t } = e,
            r = {};
          return (
            p.forEach((e) => {
              r["".concat(t, "-justify-").concat(e)] = { justifyContent: e };
            }),
            r
          );
        };
      var H = (0, d.I$)(
          "Flex",
          (e) => {
            let { paddingXS: t, padding: r, paddingLG: C } = e,
              n = (0, u.IX)(e, { flexGapSM: t, flexGap: r, flexGapLG: C });
            return [E(n), k(n), Z(n), g(n), b(n)];
          },
          () => ({}),
          { resetStyle: !1 }
        ),
        y = C.forwardRef((e, t) => {
          let {
              prefixCls: r,
              rootClassName: d,
              className: u,
              style: s,
              flex: p,
              gap: m,
              vertical: L,
              orientation: h,
              component: M = "div",
              children: E,
              ...k
            } = e,
            { flex: Z, direction: g, getPrefixCls: b } = C.useContext(i.E_),
            y = b("flex", r),
            [v, w] = H(y),
            [, O] = (0, a.R)(
              h,
              null != L ? L : null == Z ? void 0 : Z.vertical
            ),
            W = (0, o.W)(
              u,
              d,
              null == Z ? void 0 : Z.className,
              y,
              v,
              w,
              f(y, e),
              {
                ["".concat(y, "-rtl")]: "rtl" === g,
                ["".concat(y, "-gap-").concat(m)]: (0, l.n)(m),
                ["".concat(y, "-vertical")]: O,
              }
            ),
            V = { ...(null == Z ? void 0 : Z.style), ...s };
          return (
            (0, c.Z)(p) && (V.flex = p),
            (0, c.Z)(m) && !(0, l.n)(m) && (V.gap = m),
            C.createElement(
              M,
              {
                ref: t,
                className: W,
                style: V,
                ...(0, n.CE)(k, ["justify", "wrap", "align"]),
              },
              E
            )
          );
        });
    },
    80336: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return O;
        },
      });
      var C = r(2265),
        n = r(61935),
        o = r(61994),
        l = r(26107),
        a = r(74576);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var C in r)
                  Object.prototype.hasOwnProperty.call(r, C) && (e[C] = r[C]);
              }
              return e;
            }).apply(this, arguments);
      }
      let i = C.forwardRef(
        (
          {
            prefixCls: e = "rc-switch",
            className: t,
            checked: r,
            defaultChecked: n,
            disabled: i,
            loadingIcon: d,
            checkedChildren: u,
            unCheckedChildren: s,
            onClick: p,
            onChange: m,
            onKeyDown: L,
            styles: h,
            classNames: M,
            ...f
          },
          E
        ) => {
          let [k, Z] = (0, l.Z)(n ?? !1, r);
          function g(e, t) {
            let r = k;
            return i || (Z((r = e)), m?.(r, t)), r;
          }
          let b = (0, o.W)(e, t, { [`${e}-checked`]: k, [`${e}-disabled`]: i });
          return C.createElement(
            "button",
            c({}, f, {
              type: "button",
              role: "switch",
              "aria-checked": k,
              disabled: i,
              className: b,
              ref: E,
              onKeyDown: function (e) {
                e.which === a.default.LEFT
                  ? g(!1, e)
                  : e.which === a.default.RIGHT && g(!0, e),
                  L?.(e);
              },
              onClick: function (e) {
                let t = g(!k, e);
                p?.(t, e);
              },
            }),
            d,
            C.createElement(
              "span",
              { className: `${e}-inner` },
              C.createElement(
                "span",
                {
                  className: (0, o.W)(`${e}-inner-checked`, M?.content),
                  style: h?.content,
                },
                u
              ),
              C.createElement(
                "span",
                {
                  className: (0, o.W)(`${e}-inner-unchecked`, M?.content),
                  style: h?.content,
                },
                s
              )
            )
          );
        }
      );
      i.displayName = "Switch";
      var d = r(73627),
        u = r(80052),
        s = r(6694),
        p = r(71744),
        m = r(86586),
        L = r(33759),
        h = r(38775),
        M = r(13761),
        f = r(12918),
        E = r(99320),
        k = r(19224);
      let Z = (e) => {
          let {
              componentCls: t,
              trackHeightSM: r,
              trackPadding: C,
              trackMinWidthSM: n,
              innerMinMarginSM: o,
              innerMaxMarginSM: l,
              handleSizeSM: a,
              calc: c,
            } = e,
            i = "".concat(t, "-inner"),
            d = (0, h.bf)(c(a).add(c(C).mul(2)).equal()),
            u = (0, h.bf)(c(l).mul(2).equal());
          return {
            [t]: {
              ["&".concat(t, "-small")]: {
                minWidth: n,
                height: r,
                lineHeight: (0, h.bf)(r),
                ["".concat(t, "-inner")]: {
                  paddingInlineStart: l,
                  paddingInlineEnd: o,
                  ["".concat(i, "-checked, ").concat(i, "-unchecked")]: {
                    minHeight: r,
                  },
                  ["".concat(i, "-checked")]: {
                    marginInlineStart: "calc(-100% + "
                      .concat(d, " - ")
                      .concat(u, ")"),
                    marginInlineEnd: "calc(100% - "
                      .concat(d, " + ")
                      .concat(u, ")"),
                  },
                  ["".concat(i, "-unchecked")]: {
                    marginTop: c(r).mul(-1).equal(),
                    marginInlineStart: 0,
                    marginInlineEnd: 0,
                  },
                },
                ["".concat(t, "-handle")]: { width: a, height: a },
                ["".concat(t, "-loading-icon")]: {
                  top: c(c(a).sub(e.switchLoadingIconSize)).div(2).equal(),
                  fontSize: e.switchLoadingIconSize,
                },
                ["&".concat(t, "-checked")]: {
                  ["".concat(t, "-inner")]: {
                    paddingInlineStart: o,
                    paddingInlineEnd: l,
                    ["".concat(i, "-checked")]: {
                      marginInlineStart: 0,
                      marginInlineEnd: 0,
                    },
                    ["".concat(i, "-unchecked")]: {
                      marginInlineStart: "calc(100% - "
                        .concat(d, " + ")
                        .concat(u, ")"),
                      marginInlineEnd: "calc(-100% + "
                        .concat(d, " - ")
                        .concat(u, ")"),
                    },
                  },
                  ["".concat(t, "-handle")]: {
                    insetInlineStart: "calc(100% - ".concat(
                      (0, h.bf)(c(a).add(C).equal()),
                      ")"
                    ),
                  },
                },
                ["&:not(".concat(t, "-disabled):active")]: {
                  ["&:not(".concat(t, "-checked) ").concat(i)]: {
                    ["".concat(i, "-unchecked")]: {
                      marginInlineStart: c(e.marginXXS).div(2).equal(),
                      marginInlineEnd: c(e.marginXXS).mul(-1).div(2).equal(),
                    },
                  },
                  ["&".concat(t, "-checked ").concat(i)]: {
                    ["".concat(i, "-checked")]: {
                      marginInlineStart: c(e.marginXXS).mul(-1).div(2).equal(),
                      marginInlineEnd: c(e.marginXXS).div(2).equal(),
                    },
                  },
                },
              },
            },
          };
        },
        g = (e) => {
          let { componentCls: t, handleSize: r, calc: C } = e;
          return {
            [t]: {
              ["".concat(t, "-loading-icon").concat(e.iconCls)]: {
                position: "relative",
                top: C(C(r).sub(e.fontSize)).div(2).equal(),
                color: e.switchLoadingIconColor,
                verticalAlign: "top",
              },
              ["&".concat(t, "-checked ").concat(t, "-loading-icon")]: {
                color: e.switchColor,
              },
            },
          };
        },
        b = (e) => {
          let {
              componentCls: t,
              trackPadding: r,
              handleBg: C,
              handleShadow: n,
              handleSize: o,
              calc: l,
            } = e,
            a = "".concat(t, "-handle");
          return {
            [t]: {
              [a]: {
                position: "absolute",
                top: r,
                insetInlineStart: r,
                width: o,
                height: o,
                transition: "all ".concat(e.switchDuration, " ease-in-out"),
                "&::before": {
                  position: "absolute",
                  top: 0,
                  insetInlineEnd: 0,
                  bottom: 0,
                  insetInlineStart: 0,
                  backgroundColor: C,
                  borderRadius: l(o).div(2).equal(),
                  boxShadow: n,
                  transition: "all ".concat(e.switchDuration, " ease-in-out"),
                  content: '""',
                },
              },
              ["&".concat(t, "-checked ").concat(a)]: {
                insetInlineStart: "calc(100% - ".concat(
                  (0, h.bf)(l(o).add(r).equal()),
                  ")"
                ),
              },
              ["&:not(".concat(t, "-disabled):active")]: {
                ["".concat(a, "::before")]: {
                  insetInlineEnd: e.switchHandleActiveInset,
                  insetInlineStart: 0,
                },
                ["&".concat(t, "-checked ").concat(a, "::before")]: {
                  insetInlineEnd: 0,
                  insetInlineStart: e.switchHandleActiveInset,
                },
              },
            },
          };
        },
        H = (e) => {
          let {
              componentCls: t,
              trackHeight: r,
              trackPadding: C,
              innerMinMargin: n,
              innerMaxMargin: o,
              handleSize: l,
              calc: a,
            } = e,
            c = "".concat(t, "-inner"),
            i = (0, h.bf)(a(l).add(a(C).mul(2)).equal()),
            d = (0, h.bf)(a(o).mul(2).equal());
          return {
            [t]: {
              [c]: {
                display: "block",
                overflow: "hidden",
                borderRadius: 100,
                height: "100%",
                paddingInlineStart: o,
                paddingInlineEnd: n,
                transition: "padding-inline-start "
                  .concat(e.switchDuration, " ease-in-out, padding-inline-end ")
                  .concat(e.switchDuration, " ease-in-out"),
                ["".concat(c, "-checked, ").concat(c, "-unchecked")]: {
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
                  minHeight: r,
                },
                ["".concat(c, "-checked")]: {
                  marginInlineStart: "calc(-100% + "
                    .concat(i, " - ")
                    .concat(d, ")"),
                  marginInlineEnd: "calc(100% - "
                    .concat(i, " + ")
                    .concat(d, ")"),
                },
                ["".concat(c, "-unchecked")]: {
                  marginTop: a(r).mul(-1).equal(),
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                },
              },
              ["&".concat(t, "-checked ").concat(c)]: {
                paddingInlineStart: n,
                paddingInlineEnd: o,
                ["".concat(c, "-checked")]: {
                  marginInlineStart: 0,
                  marginInlineEnd: 0,
                },
                ["".concat(c, "-unchecked")]: {
                  marginInlineStart: "calc(100% - "
                    .concat(i, " + ")
                    .concat(d, ")"),
                  marginInlineEnd: "calc(-100% + "
                    .concat(i, " - ")
                    .concat(d, ")"),
                },
              },
              ["&:not(".concat(t, "-disabled):active")]: {
                ["&:not(".concat(t, "-checked) ").concat(c)]: {
                  ["".concat(c, "-unchecked")]: {
                    marginInlineStart: a(C).mul(2).equal(),
                    marginInlineEnd: a(C).mul(-1).mul(2).equal(),
                  },
                },
                ["&".concat(t, "-checked ").concat(c)]: {
                  ["".concat(c, "-checked")]: {
                    marginInlineStart: a(C).mul(-1).mul(2).equal(),
                    marginInlineEnd: a(C).mul(2).equal(),
                  },
                },
              },
            },
          };
        },
        y = (e) => {
          let { componentCls: t, trackHeight: r, trackMinWidth: C } = e;
          return {
            [t]: {
              ...(0, f.Wf)(e),
              position: "relative",
              display: "inline-block",
              boxSizing: "border-box",
              minWidth: C,
              height: r,
              lineHeight: (0, h.bf)(r),
              verticalAlign: "middle",
              background: e.colorTextQuaternary,
              border: "0",
              borderRadius: 100,
              cursor: "pointer",
              transition: "all ".concat(e.motionDurationMid),
              userSelect: "none",
              ["&:hover:not(".concat(t, "-disabled)")]: {
                background: e.colorTextTertiary,
              },
              ...(0, f.Qy)(e),
              ["&".concat(t, "-checked")]: {
                background: e.switchColor,
                ["&:hover:not(".concat(t, "-disabled)")]: {
                  background: e.colorPrimaryHover,
                },
              },
              ["&".concat(t, "-loading, &").concat(t, "-disabled")]: {
                cursor: "not-allowed",
                opacity: e.switchDisabledOpacity,
                "*": { boxShadow: "none", cursor: "not-allowed" },
              },
              ["&".concat(t, "-rtl")]: { direction: "rtl" },
            },
          };
        };
      var v = (0, E.I$)(
        "Switch",
        (e) => {
          let t = (0, k.IX)(e, {
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
          return [y(t), H(t), b(t), g(t), Z(t)];
        },
        (e) => {
          let {
              fontSize: t,
              lineHeight: r,
              controlHeight: C,
              colorWhite: n,
            } = e,
            o = t * r,
            l = C / 2,
            a = o - 4,
            c = l - 4;
          return {
            trackHeight: o,
            trackHeightSM: l,
            trackMinWidth: 2 * a + 8,
            trackMinWidthSM: 2 * c + 4,
            trackPadding: 2,
            handleBg: n,
            handleSize: a,
            handleSizeSM: c,
            handleShadow: "0 2px 4px 0 ".concat(
              new M.t("#00230b").setA(0.2).toRgbString()
            ),
            innerMinMargin: a / 2,
            innerMaxMargin: a + 2 + 4,
            innerMinMarginSM: c / 2,
            innerMaxMarginSM: c + 2 + 4,
          };
        }
      );
      let w = C.forwardRef((e, t) => {
        var r;
        let {
            prefixCls: l,
            size: a,
            disabled: c,
            loading: h,
            className: M,
            rootClassName: f,
            style: E,
            checked: k,
            value: Z,
            defaultChecked: g,
            defaultValue: b,
            onChange: H,
            styles: y,
            classNames: w,
            ...O
          } = e,
          [W, V] = (0, d.zk)(
            null !== (r = null != g ? g : b) && void 0 !== r && r,
            null != k ? k : Z
          ),
          {
            getPrefixCls: R,
            direction: S,
            className: j,
            style: I,
            classNames: F,
            styles: P,
          } = (0, p.dj)("switch"),
          x = C.useContext(m.Z),
          N = (null != c ? c : x) || h,
          D = R("switch", l),
          B = C.createElement(
            "div",
            { className: "".concat(D, "-handle") },
            h &&
              C.createElement(n.Z, { className: "".concat(D, "-loading-icon") })
          ),
          [T, z] = v(D),
          q = (0, L.Z)(a),
          A = { ...e, size: q, disabled: N },
          [X, G] = (0, u.MW)([F, w], [P, y], { props: A }),
          $ = (0, o.W)(
            j,
            {
              ["".concat(D, "-small")]: "small" === q,
              ["".concat(D, "-loading")]: h,
              ["".concat(D, "-rtl")]: "rtl" === S,
            },
            M,
            f,
            X.root,
            T,
            z
          ),
          _ = { ...G.root, ...I, ...E };
        return C.createElement(
          s.Z,
          { component: "Switch", disabled: N },
          C.createElement(i, {
            ...O,
            classNames: X,
            styles: G,
            checked: W,
            onChange: function () {
              for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
              V(t[0]), null == H || H(...t);
            },
            prefixCls: D,
            className: $,
            style: _,
            disabled: N,
            ref: t,
            loadingIcon: B,
          })
        );
      });
      w.__ANT_SWITCH = !0;
      var O = w;
    },
    99376: function (e, t, r) {
      var C = r(35475);
      r.o(C, "useParams") &&
        r.d(t, {
          useParams: function () {
            return C.useParams;
          },
        }),
        r.o(C, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return C.usePathname;
            },
          }),
        r.o(C, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return C.useRouter;
            },
          }),
        r.o(C, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return C.useSearchParams;
            },
          }),
        r.o(C, "useServerInsertedHTML") &&
          r.d(t, {
            useServerInsertedHTML: function () {
              return C.useServerInsertedHTML;
            },
          });
    },
    27635: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 1.25C11.5858 1.25 11.25 1.58579 11.25 2V12.9726L9.56944 11.0119C9.29988 10.6974 8.8264 10.661 8.51191 10.9306C8.19741 11.2001 8.16099 11.6736 8.43056 11.9881L11.4306 15.4881C11.573 15.6543 11.7811 15.75 12 15.75C12.2189 15.75 12.427 15.6543 12.5694 15.4881L15.5694 11.9881C15.839 11.6736 15.8026 11.2001 15.4881 10.9306C15.1736 10.661 14.7001 10.6974 14.4306 11.0119L12.75 12.9726L12.75 2C12.75 1.58579 12.4142 1.25 12 1.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.25 9V9.37828C14.9836 9.11973 15.8312 9.2491 16.4642 9.79167C17.4077 10.6004 17.517 12.0208 16.7083 12.9643L13.7083 16.4643C13.2808 16.963 12.6568 17.25 12 17.25C11.3431 17.25 10.7191 16.963 10.2916 16.4643L7.29163 12.9643C6.48293 12.0208 6.5922 10.6004 7.53568 9.79167C8.16868 9.2491 9.01637 9.11973 9.74996 9.37828V9H8C5.17157 9 3.75736 9 2.87868 9.87868C2 10.7574 2 12.1716 2 15V16C2 18.8284 2 20.2426 2.87868 21.1213C3.75736 22 5.17157 22 7.99999 22H16C18.8284 22 20.2426 22 21.1213 21.1213C22 20.2426 22 18.8284 22 16V15C22 12.1716 22 10.7574 21.1213 9.87868C20.2426 9 18.8284 9 16 9H14.25Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M22 16.0003V15.0003C22 12.1718 21.9998 10.7581 21.1211 9.8794C20.2424 9.00072 18.8282 9.00072 15.9998 9.00072H7.99977C5.17135 9.00072 3.75713 9.00072 2.87845 9.8794C2 10.7579 2 12.1711 2 14.9981V15.0003V16.0003C2 18.8287 2 20.2429 2.87868 21.1216C3.75736 22.0003 5.17157 22.0003 8 22.0003H16H16C18.8284 22.0003 20.2426 22.0003 21.1213 21.1216C22 20.2429 22 18.8287 22 16.0003Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 1.25C11.5858 1.25 11.25 1.58579 11.25 2L11.25 12.9726L9.56943 11.0119C9.29986 10.6974 8.82639 10.661 8.51189 10.9306C8.1974 11.2001 8.16098 11.6736 8.43054 11.9881L11.4305 15.4881C11.573 15.6543 11.781 15.75 12 15.75C12.2189 15.75 12.4269 15.6543 12.5694 15.4881L15.5694 11.9881C15.839 11.6736 15.8026 11.2001 15.4881 10.9306C15.1736 10.661 14.7001 10.6974 14.4305 11.0119L12.75 12.9726L12.75 2C12.75 1.58579 12.4142 1.25 12 1.25Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M12 2L12 15M12 15L9 11.5M12 15L15 11.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M12 2L12 15M12 15L9 11.5M12 15L15 11.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M17 9.00195C19.175 9.01406 20.3529 9.11051 21.1213 9.8789C22 10.7576 22 12.1718 22 15.0002V16.0002C22 18.8286 22 20.2429 21.1213 21.1215C20.2426 22.0002 18.8284 22.0002 16 22.0002H8C5.17157 22.0002 3.75736 22.0002 2.87868 21.1215C2 20.2429 2 18.8286 2 16.0002L2 15.0002C2 12.1718 2 10.7576 2.87868 9.87889C3.64706 9.11051 4.82497 9.01406 7 9.00195",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M12 2L12 15M12 15L9 11.5M12 15L15 11.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 1.25C12.4142 1.25 12.75 1.58579 12.75 2V12.9726L14.4306 11.0119C14.7001 10.6974 15.1736 10.661 15.4881 10.9306C15.8026 11.2001 15.839 11.6736 15.5694 11.9881L12.5694 15.4881C12.427 15.6543 12.2189 15.75 12 15.75C11.7811 15.75 11.573 15.6543 11.4306 15.4881L8.43056 11.9881C8.16099 11.6736 8.19741 11.2001 8.51191 10.9306C8.8264 10.661 9.29988 10.6974 9.56944 11.0119L11.25 12.9726V2C11.25 1.58579 11.5858 1.25 12 1.25ZM6.99583 8.25196C7.41003 8.24966 7.74768 8.58357 7.74999 8.99778C7.7523 9.41199 7.41838 9.74964 7.00418 9.75194C5.91068 9.75803 5.1356 9.78643 4.54735 9.89448C3.98054 9.99859 3.65246 10.1658 3.40901 10.4092C3.13225 10.686 2.9518 11.0746 2.85315 11.8083C2.75159 12.5637 2.75 13.5648 2.75 15.0002V16.0002C2.75 17.4356 2.75159 18.4367 2.85315 19.1921C2.9518 19.9259 3.13225 20.3144 3.40901 20.5912C3.68577 20.868 4.07435 21.0484 4.80812 21.1471C5.56347 21.2486 6.56458 21.2502 8 21.2502H16C17.4354 21.2502 18.4365 21.2486 19.1919 21.1471C19.9257 21.0484 20.3142 20.868 20.591 20.5912C20.8678 20.3144 21.0482 19.9259 21.1469 19.1921C21.2484 18.4367 21.25 17.4356 21.25 16.0002V15.0002C21.25 13.5648 21.2484 12.5637 21.1469 11.8083C21.0482 11.0746 20.8678 10.686 20.591 10.4092C20.3475 10.1658 20.0195 9.99859 19.4527 9.89448C18.8644 9.78643 18.0893 9.75803 16.9958 9.75194C16.5816 9.74964 16.2477 9.41199 16.25 8.99778C16.2523 8.58357 16.59 8.24966 17.0042 8.25196C18.0857 8.25799 18.9871 8.28387 19.7236 8.41916C20.4816 8.55839 21.1267 8.82364 21.6517 9.34857C22.2536 9.95048 22.5125 10.7084 22.6335 11.6085C22.75 12.4754 22.75 13.5778 22.75 14.9453V16.0551C22.75 17.4227 22.75 18.525 22.6335 19.392C22.5125 20.2921 22.2536 21.0499 21.6517 21.6519C21.0497 22.2538 20.2919 22.5127 19.3918 22.6337C18.5248 22.7503 17.4225 22.7502 16.0549 22.7502H7.94513C6.57754 22.7502 5.47522 22.7503 4.60825 22.6337C3.70814 22.5127 2.95027 22.2538 2.34835 21.6519C1.74643 21.0499 1.48754 20.2921 1.36652 19.392C1.24996 18.525 1.24998 17.4227 1.25 16.0551V14.9453C1.24998 13.5778 1.24996 12.4754 1.36652 11.6085C1.48754 10.7084 1.74643 9.95048 2.34835 9.34857C2.87328 8.82363 3.51835 8.55839 4.27635 8.41916C5.01291 8.28387 5.9143 8.25798 6.99583 8.25196Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "Download";
    },
    89895: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.6982 3.7536C16.6292 3.29889 17.6651 3.04415 18.5283 3.46151C18.9884 3.68399 19.3067 4.05664 19.4993 4.50023C19.6743 4.90322 19.7456 5.36164 19.7497 5.83576C19.7532 6.23436 19.7093 6.66491 19.6252 7.11782C19.4982 7.80246 19.2778 8.5467 18.9815 9.32271C18.9505 9.40394 18.9069 9.47667 18.8538 9.53952C19.0391 9.60206 19.2198 9.66638 19.3959 9.73238L19.3975 9.73299C19.4442 9.75052 19.4954 9.77 19.5413 9.7877C19.6747 9.83919 19.8052 9.89165 19.9328 9.94504C20.2587 10.0815 20.5652 10.224 20.8498 10.3719C21.1424 10.5239 21.4155 10.6833 21.6655 10.8499C22.5277 11.4244 23.2702 12.1904 23.3452 13.1462C23.3852 13.6557 23.224 14.1185 22.9381 14.5086C22.6784 14.8629 22.3186 15.1558 21.9113 15.3985C21.5689 15.6025 21.1749 15.7818 20.7415 15.9377C20.0862 16.1733 19.3325 16.3585 18.513 16.4941C18.1043 16.5617 17.7182 16.2853 17.6506 15.8766C17.5829 15.4679 17.8594 15.0818 18.2681 15.0142C18.8299 14.9212 19.3338 14.8067 19.7749 14.676L19.78 14.6744C20.346 14.5064 20.8017 14.3136 21.1435 14.1099C21.4378 13.9346 21.6227 13.766 21.7283 13.6219C21.8336 13.4782 21.8578 13.3649 21.8498 13.2636C21.8313 13.0276 21.6028 12.6106 20.8337 12.0982C20.6351 11.9658 20.4097 11.8336 20.1583 11.703L18.862 11.1341C17.1091 10.478 14.7612 9.97604 12.1765 9.79571C11.8557 9.77333 11.5395 9.75647 11.2284 9.74492C10.812 10.2712 10.4009 10.8295 10.0015 11.4152C9.25782 12.5061 8.633 13.5782 8.13606 14.5844C8.45075 14.7636 8.59751 15.1499 8.46595 15.4997C8.32318 15.8793 7.90557 16.0752 7.52427 15.9464C7.29807 16.5091 7.11978 17.0399 6.99138 17.5285C6.97786 17.5799 6.96495 17.6307 6.95263 17.6808L6.95042 17.6901C6.75486 18.489 6.71186 19.115 6.78051 19.5518C6.80715 19.7214 6.84709 19.8469 6.89314 19.9404C6.96347 20.0829 7.04805 20.1512 7.1206 20.1871L7.12451 20.189C7.16777 20.2099 7.22113 20.2276 7.28814 20.2385C7.41072 20.2586 7.57881 20.2562 7.80007 20.2085C8.19983 20.1224 8.70682 19.9032 9.30101 19.5308C9.43826 19.4448 9.57893 19.3514 9.72266 19.2508C9.96229 19.0829 10.2097 18.8955 10.4631 18.6891L11.6385 17.734C11.96 17.4728 12.4323 17.5217 12.6935 17.8431C12.9547 18.1646 12.9059 18.637 12.5844 18.8982L11.4101 19.8524C11.1314 20.0793 10.8551 20.2889 10.5831 20.4794C10.4199 20.5937 10.2579 20.7014 10.0975 20.8019C9.41995 21.2265 8.7471 21.5389 8.11598 21.6749C7.75962 21.7516 7.39685 21.7764 7.04538 21.7188C6.84837 21.6865 6.65532 21.6283 6.47154 21.5394L6.4552 21.5314C5.72572 21.1703 5.38971 20.4583 5.2878 19.7107C5.18681 18.9698 5.29353 18.0875 5.54064 17.1472C5.68116 16.6126 5.87154 16.0425 6.10862 15.4467L5.60186 15.2678C5.26534 15.1416 4.94497 15.0088 4.6433 14.8701C4.46223 14.7868 4.28756 14.7012 4.11986 14.6134C3.41152 14.2425 2.80234 13.8191 2.36659 13.3428C2.12054 13.0738 1.91616 12.7731 1.78864 12.4405C1.71717 12.2541 1.67005 12.058 1.65408 11.8545L1.65274 11.8364C1.59654 11.0244 2.04186 10.3751 2.63601 9.90997C3.22481 9.44904 4.04044 9.09617 4.97697 8.83525C6.46452 8.42082 8.38686 8.20311 10.5287 8.22755C11.5421 7.01274 12.5875 5.96465 13.5885 5.1496L13.5898 5.1485C13.6285 5.11705 13.6712 5.0826 13.7096 5.05194C13.8213 4.96273 13.9325 4.87649 14.0429 4.7933C14.3251 4.58067 14.6028 4.38799 14.874 4.21681C15.1529 4.04083 15.4283 3.88542 15.6982 3.7536ZM12.4458 8.31129C14.2717 8.44839 16.0099 8.74028 17.5361 9.14469C17.5219 9.02764 17.5352 8.90552 17.5802 8.78771C17.7833 8.25569 17.9386 7.76283 18.0482 7.31596L18.0495 7.3108C18.1899 6.73733 18.2532 6.24661 18.2498 5.84877C18.2468 5.5062 18.1945 5.26149 18.1234 5.09761C18.0525 4.93426 17.9668 4.85617 17.8753 4.81193C17.6622 4.70886 17.1869 4.69585 16.3565 5.10143C16.142 5.20618 15.9141 5.33413 15.6746 5.48531L14.5295 6.31768C13.8598 6.86356 13.1546 7.53546 12.4458 8.31129ZM9.34834 9.73983C7.80002 9.79171 6.4427 9.98403 5.37954 10.2802C5.32831 10.2945 5.27795 10.309 5.22846 10.3236L5.21936 10.3264C4.43085 10.5605 3.8687 10.8391 3.52614 11.1187C3.39316 11.2273 3.3049 11.3251 3.24739 11.412C3.15984 11.5446 3.14357 11.6521 3.14916 11.7328L3.14948 11.7372C3.15324 11.7851 3.1649 11.8401 3.18921 11.9035C3.23368 12.0194 3.32061 12.1633 3.47338 12.3303C3.74939 12.6321 4.19441 12.9593 4.81563 13.2845C4.95911 13.3596 5.11071 13.434 5.27013 13.5073C5.53592 13.6296 5.82259 13.7486 6.12856 13.8633L6.71725 14.0711C7.26311 12.9456 7.95082 11.7604 8.76214 10.5703C8.95455 10.288 9.15016 10.011 9.34834 9.73983Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.6987 3.7536C16.6297 3.29889 17.6656 3.04415 18.5288 3.46151C18.9889 3.68399 19.3072 4.05664 19.4998 4.50023C19.6748 4.90322 19.7461 5.36164 19.7502 5.83576C19.7537 6.23436 19.7098 6.66491 19.6257 7.11782C19.4986 7.80246 19.2783 8.5467 18.982 9.32271C18.951 9.40394 18.9074 9.47667 18.8543 9.53952C19.0395 9.60206 19.2203 9.66638 19.3964 9.73238L19.398 9.73299C19.4447 9.75052 19.4959 9.77 19.5418 9.7877C19.6752 9.83919 19.8057 9.89165 19.9333 9.94504C20.2592 10.0815 20.5657 10.224 20.8503 10.3719C21.1429 10.5239 21.416 10.6833 21.666 10.8499C22.5282 11.4244 23.2707 12.1904 23.3457 13.1462C23.3857 13.6557 23.2245 14.1185 22.9386 14.5086C22.6789 14.8629 22.3191 15.1558 21.9118 15.3985C21.5693 15.6025 21.1754 15.7818 20.742 15.9377C20.0867 16.1733 19.3329 16.3585 18.5134 16.4941C18.1048 16.5617 17.7187 16.2853 17.6511 15.8766C17.5834 15.4679 17.8599 15.0818 18.2685 15.0142C18.8304 14.9212 19.3343 14.8067 19.7754 14.676L19.7805 14.6744C20.3465 14.5064 20.8022 14.3136 21.1439 14.1099C21.4382 13.9346 21.6232 13.766 21.7288 13.6219C21.834 13.4782 21.8583 13.3649 21.8503 13.2636C21.8318 13.0276 21.6033 12.6106 20.8342 12.0982C20.6356 11.9658 20.4102 11.8336 20.1588 11.703L18.8625 11.1341C17.1096 10.478 14.7616 9.97604 12.177 9.79571C11.8562 9.77333 11.54 9.75647 11.2289 9.74492C10.8125 10.2712 10.4013 10.8295 10.002 11.4152C9.25831 12.5061 8.63349 13.5782 8.13654 14.5844C8.45124 14.7636 8.598 15.1499 8.46644 15.4997C8.32367 15.8793 7.90606 16.0752 7.52476 15.9464C7.29856 16.5091 7.12027 17.0399 6.99187 17.5285C6.97835 17.5799 6.96544 17.6307 6.95312 17.6808L6.95091 17.6901C6.75535 18.489 6.71235 19.115 6.78099 19.5518C6.80764 19.7214 6.84758 19.8469 6.89363 19.9404C6.96396 20.0829 7.04854 20.1512 7.12109 20.1871L7.125 20.189C7.16826 20.2099 7.22162 20.2276 7.28863 20.2385C7.41121 20.2586 7.5793 20.2562 7.80056 20.2085C8.20032 20.1224 8.7073 19.9032 9.3015 19.5308C9.43875 19.4448 9.57941 19.3514 9.72315 19.2508C9.96278 19.0829 10.2101 18.8955 10.4636 18.6891L11.639 17.734C11.9604 17.4728 12.4328 17.5217 12.694 17.8431C12.9552 18.1646 12.9064 18.637 12.5849 18.8982L11.4106 19.8524C11.1319 20.0793 10.8556 20.2889 10.5836 20.4794C10.4204 20.5937 10.2584 20.7014 10.098 20.8019C9.42044 21.2265 8.74759 21.5389 8.11647 21.6749C7.7601 21.7516 7.39734 21.7764 7.04586 21.7188C6.84886 21.6865 6.65581 21.6283 6.47203 21.5394L6.45569 21.5314C5.72621 21.1703 5.3902 20.4583 5.28829 19.7107C5.18729 18.9698 5.29402 18.0875 5.54113 17.1472C5.68165 16.6126 5.87203 16.0425 6.10911 15.4467L5.60235 15.2678C5.26583 15.1416 4.94545 15.0088 4.64378 14.8701C4.46272 14.7868 4.28805 14.7012 4.12035 14.6134C3.41201 14.2425 2.80283 13.8191 2.36708 13.3428C2.12103 13.0738 1.91665 12.7731 1.78913 12.4405C1.71765 12.2541 1.67054 12.058 1.65457 11.8545L1.65322 11.8364C1.59703 11.0244 2.04235 10.3751 2.6365 9.90997C3.2253 9.44904 4.04092 9.09617 4.97746 8.83525C6.46501 8.42082 8.38735 8.20311 10.5292 8.22755C11.5426 7.01274 12.588 5.96465 13.5889 5.1496L13.5903 5.1485C13.629 5.11705 13.6717 5.0826 13.7101 5.05194C13.8218 4.96273 13.9329 4.87649 14.0434 4.7933C14.3256 4.58067 14.6033 4.38799 14.8745 4.21681C15.1534 4.04083 15.4288 3.88542 15.6987 3.7536ZM12.4463 8.31129C14.2722 8.44839 16.0104 8.74028 17.5366 9.14469C17.5224 9.02764 17.5357 8.90552 17.5807 8.78771C17.7838 8.25569 17.9391 7.76283 18.0487 7.31596L18.05 7.3108C18.1903 6.73733 18.2537 6.24661 18.2503 5.84877C18.2473 5.5062 18.195 5.26149 18.1239 5.09761C18.053 4.93426 17.9673 4.85617 17.8758 4.81193C17.6627 4.70886 17.1874 4.69585 16.357 5.10143C16.1425 5.20618 15.9146 5.33413 15.6751 5.48531L14.5299 6.31768C13.8603 6.86356 13.1551 7.53546 12.4463 8.31129ZM9.34882 9.73983C7.8005 9.79171 6.44319 9.98403 5.38003 10.2802C5.32879 10.2945 5.27844 10.309 5.22895 10.3236L5.21984 10.3264C4.43134 10.5605 3.86918 10.8391 3.52662 11.1187C3.39365 11.2273 3.30539 11.3251 3.24787 11.412C3.16033 11.5446 3.14406 11.6521 3.14964 11.7328L3.14997 11.7372C3.15373 11.7851 3.16539 11.8401 3.1897 11.9035C3.23417 12.0194 3.3211 12.1633 3.47386 12.3303C3.74987 12.6321 4.1949 12.9593 4.81612 13.2845C4.9596 13.3596 5.1112 13.434 5.27062 13.5073C5.5364 13.6296 5.82308 13.7486 6.12905 13.8633L6.71774 14.0711C7.2636 12.9456 7.9513 11.7604 8.76262 10.5703C8.95504 10.288 9.15065 10.011 9.34882 9.73983Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M21.9953 13.5202L21.2481 13.5855L21.9953 13.5202ZM11.6958 9.11988L11.7644 8.37303L11.6958 9.11988ZM2.00472 11.684L2.75187 11.6187L2.00472 11.684ZM21.7428 14.381L21.1343 13.9426L21.7428 14.381ZM2.09486 12.0645L2.795 11.7956H2.795L2.09486 12.0645ZM2.52818 12.7426L3.0878 12.2432L2.52818 12.7426ZM4.07073 13.8946L3.70888 14.5515H3.70888L4.07073 13.8946ZM4.76127 10.2561C5.1599 10.1436 5.39184 9.72919 5.27932 9.33056C5.16679 8.93192 4.75242 8.69998 4.35378 8.81251L4.76127 10.2561ZM7.4702 15.9948C7.87022 16.1023 8.28165 15.8652 8.38917 15.4652C8.49669 15.0652 8.25957 14.6537 7.85955 14.5462L7.4702 15.9948ZM2.25716 10.8233L2.86569 11.2617L2.86569 11.2617L2.25716 10.8233ZM21.9051 13.1397L21.205 13.4086L21.9051 13.1397ZM21.4718 12.4617L20.9122 12.961L21.4718 12.4617ZM19.9293 11.3096L20.2911 10.6527V10.6527L19.9293 11.3096ZM16.5298 9.20941C16.1298 9.1019 15.7183 9.33902 15.6108 9.73903C15.5033 10.139 15.7404 10.5505 16.1404 10.658L16.5298 9.20941ZM8.33087 16.2098C8.73441 16.3032 9.13727 16.0518 9.23068 15.6483C9.32409 15.2447 9.07268 14.8419 8.66913 14.7484L8.33087 16.2098ZM18.396 15.1476C17.9896 15.2274 17.7248 15.6217 17.8047 16.0281C17.8846 16.4346 18.2788 16.6993 18.6853 16.6194L18.396 15.1476ZM7.96374 8.2781C7.55001 8.29813 7.23085 8.64976 7.25088 9.06349C7.27091 9.47722 7.62254 9.79638 8.03626 9.77635L7.96374 8.2781ZM22.7424 13.4549C22.6596 12.507 21.9299 11.7294 21.0716 11.1335L20.2162 12.3656C20.9828 12.8979 21.2259 13.3314 21.2481 13.5855L22.7424 13.4549ZM21.0716 11.1335C19.1329 9.78749 15.6203 8.7272 11.7644 8.37303L11.6272 9.86674C15.3616 10.2098 18.58 11.2297 20.2162 12.3656L21.0716 11.1335ZM19.6463 16.3917C20.7988 16.0664 21.8119 15.5682 22.3514 14.8194L21.1343 13.9426C20.9013 14.266 20.3052 14.6471 19.2388 14.9481L19.6463 16.3917ZM22.3514 14.8194C22.6343 14.4267 22.7868 13.9627 22.7424 13.4549L21.2481 13.5855C21.2576 13.6937 21.2327 13.806 21.1343 13.9426L22.3514 14.8194ZM1.25756 11.7493C1.27527 11.9519 1.32326 12.1473 1.39472 12.3334L2.795 11.7956C2.7691 11.7282 2.75632 11.6696 2.75187 11.6187L1.25756 11.7493ZM1.39472 12.3334C1.52223 12.6654 1.72455 12.9684 1.96856 13.2419L3.0878 12.2432C2.93276 12.0695 2.8423 11.9188 2.795 11.7956L1.39472 12.3334ZM1.96856 13.2419C2.40103 13.7266 3.00495 14.1638 3.70888 14.5515L4.43259 13.2377C3.81414 12.897 3.36749 12.5567 3.0878 12.2432L1.96856 13.2419ZM3.70888 14.5515C4.15237 14.7958 4.64619 15.0263 5.18026 15.2405L5.73861 13.8482C5.2518 13.653 4.81442 13.448 4.43259 13.2377L3.70888 14.5515ZM4.35378 8.81251C3.47512 9.06053 2.70631 9.4011 2.15313 9.85549C1.588 10.3197 1.18871 10.9611 1.25756 11.7493L2.75187 11.6187C2.73931 11.4749 2.78788 11.2753 3.10524 11.0146C3.43454 10.7441 3.98285 10.4758 4.76127 10.2561L4.35378 8.81251ZM21.0716 11.1335C20.4541 10.7047 19.6876 10.3118 18.8198 9.96378L18.2615 11.356C19.0574 11.6752 19.7165 12.0187 20.2162 12.3656L21.0716 11.1335ZM3.70887 14.5515C4.72605 15.1118 6.017 15.6042 7.4702 15.9948L7.85955 14.5462C6.48709 14.1773 5.31601 13.7243 4.43259 13.2377L3.70887 14.5515ZM1.25756 11.7493C1.34037 12.6972 2.07003 13.4748 2.92837 14.0708L3.78382 12.8386C3.01723 12.3064 2.77407 11.8728 2.75187 11.6187L1.25756 11.7493ZM4.35378 8.81251C3.20132 9.13781 2.18807 9.63607 1.64863 10.3849L2.86569 11.2617C3.0987 10.9382 3.69484 10.5571 4.76127 10.2561L4.35378 8.81251ZM1.64863 10.3849C1.36577 10.7775 1.2132 11.2414 1.25756 11.7492L2.75187 11.6187C2.74242 11.5105 2.76726 11.3983 2.86569 11.2617L1.64863 10.3849ZM22.7424 13.4549C22.7247 13.2522 22.6767 13.0569 22.6053 12.8708L21.205 13.4086C21.2309 13.4761 21.2437 13.5346 21.2481 13.5855L22.7424 13.4549ZM22.6053 12.8708C22.4778 12.5388 22.2754 12.2358 22.0314 11.9623L20.9122 12.961C21.0672 13.1348 21.1577 13.2855 21.205 13.4086L22.6053 12.8708ZM22.0314 11.9623C21.599 11.4777 20.995 11.0404 20.2911 10.6527L19.5674 11.9666C20.1859 12.3072 20.6325 12.6475 20.9122 12.961L22.0314 11.9623ZM20.2911 10.6527C19.8476 10.4084 19.3539 10.178 18.8198 9.96378L18.2615 11.356C18.7482 11.5512 19.1856 11.7562 19.5674 11.9666L20.2911 10.6527ZM19.6463 16.3917C20.525 16.1437 21.2937 15.8031 21.8469 15.3487C22.412 14.8845 22.8113 14.2431 22.7424 13.4549L21.2481 13.5855C21.2607 13.7293 21.2121 13.9289 20.8948 14.1896C20.5655 14.4601 20.0172 14.7284 19.2388 14.9481L19.6463 16.3917ZM2.92837 14.0708C3.54595 14.4995 4.3125 14.8924 5.18026 15.2405L5.73861 13.8482C4.94263 13.529 4.28349 13.1855 3.78381 12.8386L2.92837 14.0708ZM20.2911 10.6527C19.274 10.0924 17.983 9.6 16.5298 9.20941L16.1404 10.658C17.5129 11.0269 18.684 11.4799 19.5674 11.9666L20.2911 10.6527ZM2.92837 14.0708C4.19478 14.95 6.11586 15.6971 8.33087 16.2098L8.66913 14.7484C6.54758 14.2574 4.83166 13.5661 3.78382 12.8386L2.92837 14.0708ZM18.6853 16.6194C19.8304 16.3943 20.8262 16.0508 21.5432 15.573C22.2607 15.0948 22.8237 14.3848 22.7424 13.4549L21.2481 13.5855C21.2621 13.746 21.1959 14.0018 20.7114 14.3248C20.2263 14.6481 19.4472 14.941 18.396 15.1476L18.6853 16.6194ZM11.7644 8.37303C10.4184 8.24939 9.13637 8.22134 7.96374 8.2781L8.03626 9.77635C9.1339 9.72321 10.3456 9.74902 11.6272 9.86674L11.7644 8.37303Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M15.2744 4.85061C15.5336 4.68703 15.7852 4.54535 16.0274 4.42706C16.9081 3.99692 17.6637 3.87605 18.2019 4.13627C18.4777 4.26963 18.6797 4.495 18.8114 4.79847C18.9345 5.08191 18.9963 5.43347 18.9998 5.84181M15.2744 4.85061C13.46 5.99564 11.2763 8.21359 9.38191 10.9923M15.2744 4.85061C14.8855 5.09602 14.4797 5.39073 14.0634 5.72967M6.78798 20.8588C6.79135 20.8604 6.79472 20.8621 6.79811 20.8637C6.91163 20.9186 7.03483 20.9566 7.16684 20.9782C7.40386 21.0171 7.66929 21.0035 7.95811 20.9412C8.47355 20.8302 9.06346 20.5644 9.69933 20.1659C9.84815 20.0727 9.9995 19.9721 10.153 19.8646C10.4088 19.6855 10.6706 19.4869 10.9367 19.2703L12.1115 18.3157M6.78798 20.8588C5.96226 20.4501 5.80688 19.2073 6.22201 17.5113M6.78798 20.8588C5.4601 20.2015 5.86563 17.3872 7.58996 14M18.7781 7.48866C18.9285 6.87418 19.004 6.31919 18.9998 5.84181M18.9998 5.84181C19.0073 6.69799 18.7585 7.80381 18.281 9.05476",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M21.9953 13.5202C21.9428 12.9192 21.4564 12.3136 20.6439 11.7496M21.9953 13.5202C22.0222 13.8282 21.9335 14.1163 21.7428 14.381C21.3566 14.9171 20.552 15.3568 19.4425 15.6699C21.0996 15.2022 22.0767 14.4522 21.9953 13.5202ZM21.9953 13.5202C21.9842 13.3934 21.9538 13.2665 21.9051 13.1397C21.8177 12.9121 21.6713 12.6853 21.4718 12.4617C21.1157 12.0626 20.5905 11.6738 19.9293 11.3096M21.9953 13.5202C22.0905 14.6106 20.7369 15.4518 18.5406 15.8835M20.6439 11.7496C18.8565 10.5086 15.491 9.46848 11.6958 9.11988C6.17557 8.61283 1.83672 9.76081 2.00472 11.684M20.6439 11.7496C20.0853 11.3617 19.3725 10.9935 18.5406 10.6599C19.0511 10.8646 19.5166 11.0823 19.9293 11.3096M2.00472 11.684C2.01579 11.8108 2.04618 11.9377 2.09486 12.0645C2.18227 12.2921 2.32866 12.5189 2.52818 12.7426C2.88426 13.1416 3.40955 13.5304 4.07073 13.8946M2.00472 11.684C1.9233 10.752 2.90044 10.0021 4.55752 9.5343C3.44808 9.84747 2.64339 10.2871 2.25716 10.8233C2.06651 11.0879 1.97781 11.376 2.00472 11.684ZM2.00472 11.684C2.05722 12.285 2.54363 12.8906 3.35609 13.4547M4.07073 13.8946C4.4834 14.1219 4.949 14.3396 5.45943 14.5444C4.62756 14.2107 3.91472 13.8425 3.35609 13.4547M4.07073 13.8946C5.02103 14.418 6.25205 14.8908 7.66488 15.2705M3.35609 13.4547C4.51322 14.258 6.33172 14.9772 8.5 15.4791M19.9293 11.3096C18.979 10.7862 17.748 10.3134 16.3351 9.93371",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M15.2744 4.85061C15.5336 4.68703 15.7852 4.54535 16.0274 4.42706C16.9081 3.99692 17.6637 3.87605 18.2019 4.13627C18.4777 4.26963 18.6797 4.495 18.8114 4.79847C18.9345 5.08191 18.9963 5.43347 18.9998 5.84181M15.2744 4.85061C13.46 5.99564 11.2763 8.21359 9.38191 10.9923C6.23903 15.6024 5.08058 20.0137 6.78798 20.8588M15.2744 4.85061C14.8855 5.09602 14.4797 5.39073 14.0634 5.72967M6.78798 20.8588C6.79135 20.8604 6.79472 20.8621 6.79811 20.8637C6.91163 20.9186 7.03483 20.9566 7.16684 20.9782C7.40386 21.0171 7.66929 21.0035 7.95811 20.9412C8.47355 20.8302 9.06346 20.5644 9.69933 20.1659C9.84815 20.0727 9.9995 19.9721 10.153 19.8646C10.4088 19.6855 10.6706 19.4869 10.9367 19.2703L12.1115 18.3157M6.78798 20.8588C5.96226 20.4501 5.80688 19.2073 6.22201 17.5113M18.7781 7.48866C18.9285 6.87418 19.004 6.31919 18.9998 5.84181M18.9998 5.84181C19.0073 6.69799 18.7585 7.80381 18.281 9.05476",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M21.9953 13.5202C21.9428 12.9192 21.4564 12.3136 20.6439 11.7496M21.9953 13.5202C22.0222 13.8282 21.9335 14.1163 21.7428 14.381C21.3566 14.9171 20.552 15.3568 19.4425 15.6699C21.0996 15.2022 22.0767 14.4522 21.9953 13.5202ZM21.9953 13.5202C21.9842 13.3934 21.9538 13.2665 21.9051 13.1397C21.8177 12.9121 21.6713 12.6853 21.4718 12.4617C21.1157 12.0626 20.5905 11.6738 19.9293 11.3096M21.9953 13.5202C22.0905 14.6106 20.7369 15.4518 18.5406 15.8835M20.6439 11.7496C18.8565 10.5086 15.491 9.46848 11.6958 9.11988C6.17557 8.61283 1.83672 9.76081 2.00472 11.684M20.6439 11.7496C20.0853 11.3617 19.3725 10.9935 18.5406 10.6599C19.0511 10.8646 19.5166 11.0823 19.9293 11.3096M2.00472 11.684C2.01579 11.8108 2.04618 11.9377 2.09486 12.0645C2.18227 12.2921 2.32866 12.5189 2.52818 12.7426C2.88426 13.1416 3.40955 13.5304 4.07073 13.8946M2.00472 11.684C1.9233 10.752 2.90044 10.0021 4.55752 9.5343C3.44808 9.84747 2.64339 10.2871 2.25716 10.8233C2.06651 11.0879 1.97781 11.376 2.00472 11.684ZM2.00472 11.684C2.05722 12.285 2.54363 12.8906 3.35609 13.4547M4.07073 13.8946C4.4834 14.1219 4.949 14.3396 5.45943 14.5444C4.62756 14.2107 3.91472 13.8425 3.35609 13.4547M4.07073 13.8946C5.02103 14.418 6.25205 14.8908 7.66488 15.2705M3.35609 13.4547C4.51322 14.258 6.33172 14.9772 8.5 15.4791M19.9293 11.3096C18.979 10.7862 17.748 10.3134 16.3351 9.93371",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M15.2744 4.85061C15.5336 4.68703 15.7852 4.54535 16.0274 4.42706C16.9081 3.99692 17.6637 3.87605 18.2019 4.13627C18.4777 4.26963 18.6797 4.495 18.8114 4.79847C18.9345 5.08191 18.9963 5.43347 18.9998 5.84181M15.2744 4.85061C13.46 5.99564 11.2763 8.21359 9.38191 10.9923C6.23903 15.6024 5.08058 20.0137 6.78798 20.8588M15.2744 4.85061C14.8855 5.09602 14.4797 5.39073 14.0634 5.72967M6.78798 20.8588C6.79135 20.8604 6.79472 20.8621 6.79811 20.8637C6.91163 20.9186 7.03483 20.9566 7.16684 20.9782C7.40386 21.0171 7.66929 21.0035 7.95811 20.9412C8.47355 20.8302 9.06346 20.5644 9.69933 20.1659C9.84815 20.0727 9.9995 19.9721 10.153 19.8646C10.4088 19.6855 10.6706 19.4869 10.9367 19.2703L12.1115 18.3157M6.78798 20.8588C5.96226 20.4501 5.80688 19.2073 6.22201 17.5113M18.7781 7.48866C18.9285 6.87418 19.004 6.31919 18.9998 5.84181M18.9998 5.84181C19.0073 6.69799 18.7585 7.80381 18.281 9.05476",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M21.9953 13.5202C21.9428 12.9192 21.4564 12.3136 20.6439 11.7496M21.9953 13.5202C22.0222 13.8282 21.9335 14.1163 21.7428 14.381C21.3566 14.9171 20.552 15.3568 19.4425 15.6699C21.0996 15.2022 22.0767 14.4522 21.9953 13.5202ZM21.9953 13.5202C21.9842 13.3934 21.9538 13.2665 21.9051 13.1397C21.8177 12.9121 21.6713 12.6853 21.4718 12.4617C21.1157 12.0626 20.5905 11.6738 19.9293 11.3096M21.9953 13.5202C22.0905 14.6106 20.7369 15.4518 18.5406 15.8835M20.6439 11.7496C18.8565 10.5086 15.491 9.46848 11.6958 9.11988C6.17557 8.61283 1.83672 9.76081 2.00472 11.684M20.6439 11.7496C20.0853 11.3617 19.3725 10.9935 18.5406 10.6599C19.0511 10.8646 19.5166 11.0823 19.9293 11.3096M2.00472 11.684C2.01579 11.8108 2.04618 11.9377 2.09486 12.0645C2.18227 12.2921 2.32866 12.5189 2.52818 12.7426C2.88426 13.1416 3.40955 13.5304 4.07073 13.8946M2.00472 11.684C1.9233 10.752 2.90044 10.0021 4.55752 9.5343C3.44808 9.84747 2.64339 10.2871 2.25716 10.8233C2.06651 11.0879 1.97781 11.376 2.00472 11.684ZM2.00472 11.684C2.05722 12.285 2.54363 12.8906 3.35609 13.4547M4.07073 13.8946C4.4834 14.1219 4.949 14.3396 5.45943 14.5444C4.62756 14.2107 3.91472 13.8425 3.35609 13.4547M4.07073 13.8946C5.02103 14.418 6.25205 14.8908 7.66488 15.2705M3.35609 13.4547C4.51322 14.258 6.33172 14.9772 8.5 15.4791M19.9293 11.3096C18.979 10.7862 17.748 10.3134 16.3351 9.93371",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M15.2744 4.85061C15.5336 4.68703 15.7852 4.54535 16.0274 4.42706C16.9081 3.99692 17.6637 3.87605 18.2019 4.13627C18.4777 4.26963 18.6797 4.495 18.8114 4.79847C18.9345 5.08191 18.9963 5.43347 18.9998 5.84181M15.2744 4.85061C13.46 5.99564 11.2763 8.21359 9.38191 10.9923C6.23903 15.6024 5.08058 20.0137 6.78798 20.8588M15.2744 4.85061C14.8855 5.09602 14.4797 5.39073 14.0634 5.72967M6.78798 20.8588C6.79135 20.8604 6.79472 20.8621 6.79811 20.8637C6.91163 20.9186 7.03483 20.9566 7.16684 20.9782C7.40386 21.0171 7.66929 21.0035 7.95811 20.9412C8.47355 20.8302 9.06346 20.5644 9.69933 20.1659C9.84815 20.0727 9.9995 19.9721 10.153 19.8646C10.4088 19.6855 10.6706 19.4869 10.9367 19.2703L12.1115 18.3157M6.78798 20.8588C5.96226 20.4501 5.80688 19.2073 6.22201 17.5113M18.7781 7.48866C18.9285 6.87418 19.004 6.31919 18.9998 5.84181M18.9998 5.84181C19.0073 6.69799 18.7585 7.80381 18.281 9.05476",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M11.7647 14.2813C11.7509 13.3709 11.7441 12.9157 12.0311 12.75C12.3181 12.5843 12.7089 12.8178 13.4905 13.2849L13.6927 13.4058C13.9148 13.5385 14.0258 13.6048 14.1481 13.6203C14.2705 13.6358 14.3902 13.5986 14.6298 13.5242L14.8479 13.4565C15.6908 13.1947 16.1123 13.0638 16.3656 13.2978C16.619 13.5318 16.5364 13.9757 16.3713 14.8635L16.3286 15.0932C16.2817 15.3455 16.2582 15.4716 16.286 15.5949C16.3139 15.7181 16.3898 15.8245 16.5418 16.0372L16.6801 16.2309C17.2148 16.9795 17.4821 17.3538 17.3517 17.6641C17.2213 17.9745 16.7794 18.0153 15.8958 18.0969L15.6672 18.118C15.4161 18.1412 15.2906 18.1528 15.1854 18.2135C15.0803 18.2742 15.0075 18.3771 14.8619 18.583L14.7293 18.7704C14.2168 19.4948 13.9605 19.8571 13.6266 19.8148C13.2926 19.7726 13.1021 19.354 12.7211 18.5166L12.6226 18.3C12.5143 18.062 12.4602 17.943 12.3674 17.8573C12.2745 17.7716 12.1536 17.7288 11.9116 17.6433L11.6914 17.5655C10.8399 17.2646 10.4142 17.1141 10.3383 16.7777C10.2623 16.4413 10.5864 16.1418 11.2345 15.5426L11.4022 15.3876C11.5864 15.2174 11.6785 15.1322 11.7263 15.0186C11.774 14.9049 11.7721 14.7755 11.7682 14.5168L11.7647 14.2813Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "StarRings";
    },
    35822: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M20 13.75C20 13.3358 19.6642 13 19.25 13H16.25C15.8358 13 15.5 13.3358 15.5 13.75V20.5H14V4.25C14 3.52169 13.9984 3.05091 13.9518 2.70403C13.908 2.37872 13.8374 2.27676 13.7803 2.21967C13.7232 2.16258 13.6213 2.09197 13.296 2.04823C12.9491 2.00159 12.4783 2 11.75 2C11.0217 2 10.5509 2.00159 10.204 2.04823C9.87872 2.09197 9.77676 2.16258 9.71967 2.21967C9.66258 2.27676 9.59196 2.37872 9.54823 2.70403C9.50159 3.05091 9.5 3.52169 9.5 4.25V20.5H8V8.75C8 8.33579 7.66421 8 7.25 8H4.25C3.83579 8 3.5 8.33579 3.5 8.75V20.5H2H1.75C1.33579 20.5 1 20.8358 1 21.25C1 21.6642 1.33579 22 1.75 22H21.75C22.1642 22 22.5 21.6642 22.5 21.25C22.5 20.8358 22.1642 20.5 21.75 20.5H21.5H20V13.75Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14 20.5V4.25C14 3.52169 13.9984 3.05091 13.9518 2.70403C13.908 2.37872 13.8374 2.27676 13.7803 2.21967C13.7232 2.16258 13.6213 2.09197 13.296 2.04823C12.9491 2.00159 12.4783 2 11.75 2C11.0217 2 10.5509 2.00159 10.204 2.04823C9.87872 2.09197 9.77676 2.16258 9.71967 2.21967C9.66258 2.27676 9.59197 2.37872 9.54823 2.70403C9.50159 3.05091 9.5 3.52169 9.5 4.25V20.5H14Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.7",
              d: "M8 8.75C8 8.33579 7.66421 8 7.25 8H4.25C3.83579 8 3.5 8.33579 3.5 8.75V20.5H8V8.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.7",
              d: "M20 13.75C20 13.3358 19.6642 13 19.25 13H16.25C15.8358 13 15.5 13.3358 15.5 13.75V20.5H20V13.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M1.75 20.5C1.33579 20.5 1 20.8358 1 21.25C1 21.6642 1.33579 22 1.75 22H21.75C22.1642 22 22.5 21.6642 22.5 21.25C22.5 20.8358 22.1642 20.5 21.75 20.5H21.5H20H15.5H14H9.5H8H3.5H2H1.75Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M22 22H2",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M21 22V14.5C21 13.6716 20.3284 13 19.5 13H16.5C15.6716 13 15 13.6716 15 14.5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M15 22V9M9 22V5C9 3.58579 9 2.87868 9.43934 2.43934C9.87868 2 10.5858 2 12 2C13.4142 2 14.1213 2 14.5607 2.43934C15 2.87868 15 3.58579 15 5V5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            C.createElement("path", {
              d: "M9 22V9.5C9 8.67157 8.32843 8 7.5 8H4.5C3.67157 8 3 8.67157 3 9.5V16M3 22V19.75",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M22 22H2",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M21 22V14.5C21 13.6716 20.3284 13 19.5 13H16.5C15.6716 13 15 13.6716 15 14.5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M15 22V5C15 3.58579 15 2.87868 14.5607 2.43934C14.1213 2 13.4142 2 12 2C10.5858 2 9.87868 2 9.43934 2.43934C9 2.87868 9 3.58579 9 5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M9 22V9.5C9 8.67157 8.32843 8 7.5 8H4.5C3.67157 8 3 8.67157 3 9.5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M22 22H2",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M21 22V14.5C21 13.6716 20.3284 13 19.5 13H16.5C15.6716 13 15 13.6716 15 14.5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M15 22V5C15 3.58579 15 2.87868 14.5607 2.43934C14.1213 2 13.4142 2 12 2C10.5858 2 9.87868 2 9.43934 2.43934C9 2.87868 9 3.58579 9 5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M9 22V9.5C9 8.67157 8.32843 8 7.5 8H4.5C3.67157 8 3 8.67157 3 9.5V22",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.0494 1.25H11.9506C11.2858 1.24997 10.7129 1.24994 10.2542 1.31161C9.76252 1.37771 9.29126 1.52677 8.90901 1.90901C8.52676 2.29126 8.3777 2.76252 8.31161 3.25416C8.24993 3.7129 8.24996 4.28577 8.25 4.95063L8.25 7.37804C8.01542 7.29512 7.76298 7.25001 7.5 7.25001H4.5C3.25736 7.25001 2.25 8.25737 2.25 9.50001V21.25H2C1.58579 21.25 1.25 21.5858 1.25 22C1.25 22.4142 1.58579 22.75 2 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H21.75V14.5C21.75 13.2574 20.7426 12.25 19.5 12.25H16.5C16.237 12.25 15.9846 12.2951 15.75 12.378L15.75 4.95064C15.75 4.28577 15.7501 3.71291 15.6884 3.25416C15.6223 2.76252 15.4732 2.29126 15.091 1.90902C14.7087 1.52677 14.2375 1.37771 13.7458 1.31161C13.2871 1.24994 12.7142 1.24997 12.0494 1.25ZM20.25 21.25V14.5C20.25 14.0858 19.9142 13.75 19.5 13.75H16.5C16.0858 13.75 15.75 14.0858 15.75 14.5V21.25H20.25ZM14.25 21.25V5.00001C14.25 4.2717 14.2484 3.80091 14.2018 3.45403C14.158 3.12873 14.0874 3.02677 14.0303 2.96967C13.9732 2.91258 13.8713 2.84197 13.546 2.79823C13.1991 2.7516 12.7283 2.75001 12 2.75001C11.2717 2.75001 10.8009 2.7516 10.454 2.79823C10.1287 2.84197 10.0268 2.91258 9.96967 2.96968C9.91258 3.02677 9.84197 3.12873 9.79823 3.45403C9.75159 3.80091 9.75 4.2717 9.75 5.00001V21.25H14.25ZM8.25 21.25V9.50001C8.25 9.08579 7.91421 8.75001 7.5 8.75001H4.5C4.08579 8.75001 3.75 9.08579 3.75 9.50001V21.25H8.25Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "Chart";
    },
    54771: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214),
        o = r(2119),
        l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o.Z }))
      );
      L.displayName = "ChatSquareLike";
    },
    77673: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22ZM14.4743 8.419C14.7952 8.68094 14.8429 9.15341 14.581 9.47428L8.86671 16.4743C8.72427 16.6488 8.51096 16.75 8.28571 16.75C8.06047 16.75 7.84716 16.6488 7.70472 16.4743L5.419 13.6743C5.15707 13.3534 5.20484 12.8809 5.52572 12.619C5.84659 12.3571 6.31906 12.4048 6.581 12.7257L8.28571 14.814L13.419 8.52572C13.6809 8.20484 14.1534 8.15707 14.4743 8.419ZM18.4743 8.41901C18.7952 8.68095 18.8429 9.15342 18.581 9.47429L12.8665 16.4743C12.7152 16.6596 12.4846 16.7617 12.2457 16.7489C12.0068 16.7362 11.7883 16.6103 11.6575 16.4099L11.3719 15.9724C11.1455 15.6256 11.2432 15.1608 11.5901 14.9344C11.7939 14.8014 12.0384 14.7803 12.2514 14.8558L17.419 8.52571C17.681 8.20484 18.1534 8.15707 18.4743 8.41901Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M18.581 9.47431C18.843 9.15344 18.7952 8.68098 18.4743 8.41903C18.1534 8.15709 17.681 8.20486 17.419 8.52573L12.2514 14.8559C12.0385 14.7803 11.7939 14.8014 11.5901 14.9345C11.2432 15.1609 11.1456 15.6256 11.372 15.9724L11.6575 16.4099C11.7883 16.6103 12.0068 16.7362 12.2457 16.749C12.4846 16.7617 12.7153 16.6597 12.8666 16.4743L18.581 9.47431Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.581 9.47431C14.843 9.15343 14.7952 8.68097 14.4743 8.41903C14.1534 8.15709 13.681 8.20487 13.419 8.52574L8.28574 14.814L6.58102 12.7257C6.31908 12.4049 5.84662 12.3571 5.52574 12.619C5.20487 12.881 5.15709 13.3534 5.41903 13.6743L7.70474 16.4743C7.84718 16.6488 8.0605 16.75 8.28574 16.75C8.51098 16.75 8.7243 16.6488 8.86673 16.4743L14.581 9.47431Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M4.56499 12.4068C4.29258 12.0947 3.81879 12.0626 3.50676 12.335C3.19472 12.6074 3.1626 13.0812 3.43501 13.3932L4.56499 12.4068ZM7.14286 16.5L6.57787 16.9932C6.7203 17.1564 6.92629 17.25 7.14286 17.25C7.35942 17.25 7.56542 17.1564 7.70784 16.9932L7.14286 16.5ZM15.565 7.99324C15.8374 7.68121 15.8053 7.20742 15.4932 6.93501C15.1812 6.6626 14.7074 6.69472 14.435 7.00676L15.565 7.99324ZM10.5064 11.5068C10.234 11.8188 10.2662 12.2926 10.5782 12.565C10.8902 12.8374 11.364 12.8053 11.6364 12.4932L10.5064 11.5068ZM9.67213 14.7432C9.94454 14.4312 9.91242 13.9574 9.60039 13.685C9.28835 13.4126 8.81457 13.4447 8.54215 13.7568L9.67213 14.7432ZM3.43501 13.3932L6.57787 16.9932L7.70784 16.0068L4.56499 12.4068L3.43501 13.3932ZM7.70784 16.9932L9.67213 14.7432L8.54215 13.7568L6.57787 16.0068L7.70784 16.9932ZM11.6364 12.4932L13.6007 10.2432L12.4707 9.25676L10.5064 11.5068L11.6364 12.4932ZM13.6007 10.2432L15.565 7.99324L14.435 7.00676L12.4707 9.25676L13.6007 10.2432Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M20.0002 7.5625L15.7144 12.0625M11.0002 16L11.4286 16.5625L13.5715 14.3125",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M4 12.9L7.14286 16.5L15 7.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            C.createElement("path", {
              d: "M20 7.5625L11.4283 16.5625L11 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M4 12.9L7.14286 16.5L15 7.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            C.createElement("path", {
              d: "M20.0002 7.5625L11.4286 16.5625L11.0002 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M15.4933 6.93502C15.8053 7.20743 15.8374 7.68122 15.565 7.99325L7.70786 16.9933C7.56543 17.1564 7.35943 17.25 7.14287 17.25C6.9263 17.25 6.72031 17.1564 6.57788 16.9933L3.43502 13.3933C3.16261 13.0812 3.19473 12.6074 3.50677 12.335C3.8188 12.0626 4.29259 12.0947 4.565 12.4068L7.14287 15.3596L14.435 7.00677C14.7074 6.69473 15.1812 6.66261 15.4933 6.93502Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.5175 7.01946C20.8174 7.30513 20.829 7.77986 20.5433 8.07981L11.9716 17.0798C11.8201 17.2389 11.6065 17.3235 11.3872 17.3114C11.1679 17.2993 10.9649 17.1917 10.8318 17.0169L10.4035 16.4544C10.1526 16.1249 10.2163 15.6543 10.5458 15.4034C10.8289 15.1878 11.2161 15.2044 11.4787 15.4223L19.4571 7.04531C19.7428 6.74537 20.2175 6.73379 20.5175 7.01946Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "CheckRead";
    },
    73665: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12ZM17.4545 6.90343C17.784 7.15446 17.8476 7.62505 17.5966 7.95453L10.7394 16.9545C10.6029 17.1337 10.393 17.2421 10.1678 17.2496C9.94266 17.2571 9.72604 17.163 9.57787 16.9932L6.43501 13.3932C6.1626 13.0812 6.19472 12.6074 6.50676 12.335C6.81879 12.0626 7.29258 12.0947 7.56499 12.4068L10.1033 15.3143L16.4034 7.04547C16.6545 6.71599 17.1251 6.65239 17.4545 6.90343Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M20.5355 20.5355C22 19.0711 22 16.714 22 12C22 7.28595 22 4.92893 20.5355 3.46447C19.0711 2 16.714 2 12 2C7.28595 2 4.92893 2 3.46447 3.46447C2 4.92893 2 7.28595 2 12C2 16.714 2 19.0711 3.46447 20.5355C4.92893 22 7.28595 22 12 22C16.714 22 19.0711 22 20.5355 20.5355Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M17.4545 6.90347C17.784 7.1545 17.8476 7.62509 17.5966 7.95457L10.7394 16.9546C10.6029 17.1338 10.393 17.2421 10.1678 17.2496C9.94267 17.2571 9.72605 17.163 9.57788 16.9933L6.43502 13.3933C6.16261 13.0812 6.19473 12.6075 6.50677 12.3351C6.8188 12.0626 7.29259 12.0948 7.565 12.4068L10.1034 15.3144L16.4034 7.04551C16.6545 6.71603 17.1251 6.65243 17.4545 6.90347Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M7 12.9L10.1429 16.5L12.1071 14.25M18 7.5L14.0714 12",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M7 12.9L10.1429 16.5L18 7.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M7 12.9L10.1429 16.5L18 7.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.4933 6.93502C18.8053 7.20743 18.8374 7.68122 18.565 7.99325L10.7079 16.9933C10.5654 17.1564 10.3594 17.25 10.1429 17.25C9.9263 17.25 9.72031 17.1564 9.57788 16.9933L6.43502 13.3933C6.16261 13.0812 6.19473 12.6074 6.50677 12.335C6.8188 12.0626 7.29259 12.0947 7.565 12.4068L10.1429 15.3596L17.435 7.00677C17.7074 6.69473 18.1812 6.66261 18.4933 6.93502Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "Unread";
    },
    43635: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.5249 2H16.5932C17.477 1.99999 18.1897 1.99999 18.7635 2.05454C19.3552 2.1108 19.8707 2.22996 20.3343 2.51405C20.8037 2.80168 21.1983 3.19632 21.486 3.6657C21.77 4.12929 21.8892 4.64482 21.9455 5.23653C22 5.8103 22 6.52304 22 7.40683V7.47517C22 8.05587 22 8.54048 21.9626 8.9341C21.9235 9.34559 21.8386 9.72907 21.623 10.0808C21.4121 10.425 21.1227 10.7144 20.7785 10.9254C20.4267 11.1409 20.0433 11.2258 19.6318 11.2649C19.2382 11.3024 18.7535 11.3023 18.1728 11.3023L17.0679 11.3023C16.2321 11.3024 15.5352 11.3024 14.9819 11.228C14.3979 11.1495 13.8706 10.9768 13.4469 10.5531C13.0232 10.1294 12.8505 9.60212 12.772 9.01812C12.6976 8.46484 12.6976 7.76789 12.6977 6.93209L12.6977 5.82725C12.6977 5.24654 12.6976 4.76185 12.7351 4.36823C12.7742 3.95674 12.8591 3.57325 13.0746 3.22152C13.2856 2.87731 13.575 2.5879 13.9192 2.37697C14.2709 2.16142 14.6544 2.07653 15.0659 2.0374C15.4595 1.99998 15.9442 1.99999 16.5249 2ZM17.3488 7.81395C16.8694 7.81395 16.6297 7.81395 16.4604 7.69385C16.4007 7.65148 16.3485 7.59933 16.3061 7.5396C16.186 7.37034 16.186 7.13061 16.186 6.65117C16.186 6.17173 16.186 5.93199 16.3061 5.76273C16.3485 5.703 16.4007 5.65085 16.4604 5.60847C16.6297 5.48837 16.8694 5.48837 17.3488 5.48837C17.8283 5.48837 18.068 5.48837 18.2373 5.60847C18.297 5.65085 18.3491 5.703 18.3915 5.76273C18.5116 5.93199 18.5116 6.17171 18.5116 6.65116C18.5116 7.13061 18.5116 7.37034 18.3915 7.5396C18.3491 7.59933 18.297 7.65148 18.2373 7.69385C18.068 7.81395 17.8283 7.81395 17.3488 7.81395Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.0808 2.37697C9.72907 2.16142 9.34559 2.07653 8.9341 2.0374C8.54047 1.99998 8.05583 1.99999 7.4751 2H7.40684C6.52307 1.99999 5.81029 1.99999 5.23653 2.05454C4.64482 2.1108 4.12929 2.22996 3.6657 2.51405C3.19632 2.80168 2.80168 3.19632 2.51405 3.6657C2.22996 4.12929 2.1108 4.64482 2.05454 5.23653C1.99999 5.81029 1.99999 6.52302 2 7.40679V7.47506C1.99999 8.05579 1.99998 8.54047 2.0374 8.9341C2.07653 9.34559 2.16142 9.72907 2.37697 10.0808C2.5879 10.425 2.87731 10.7144 3.22152 10.9254C3.57325 11.1409 3.95674 11.2258 4.36823 11.2649C4.76183 11.3024 5.24643 11.3023 5.82711 11.3023L6.93209 11.3023C7.76787 11.3024 8.46484 11.3024 9.01812 11.228C9.60212 11.1495 10.1294 10.9768 10.5531 10.5531C10.9768 10.1294 11.1495 9.60212 11.228 9.01812C11.3024 8.46484 11.3024 7.7679 11.3023 6.93212L11.3023 5.82726C11.3023 5.24658 11.3024 4.76183 11.2649 4.36823C11.2258 3.95674 11.1409 3.57325 10.9254 3.22152C10.7144 2.87731 10.425 2.5879 10.0808 2.37697ZM5.76273 7.69385C5.93199 7.81395 6.17171 7.81395 6.65116 7.81395C7.13061 7.81395 7.37034 7.81395 7.5396 7.69385C7.59933 7.65148 7.65148 7.59933 7.69385 7.5396C7.81395 7.37034 7.81395 7.13061 7.81395 6.65116C7.81395 6.17171 7.81395 5.93199 7.69385 5.76273C7.65148 5.703 7.59933 5.65085 7.5396 5.60847C7.37034 5.48837 7.13061 5.48837 6.65116 5.48837C6.17171 5.48837 5.93199 5.48837 5.76273 5.60847C5.703 5.65085 5.65085 5.703 5.60847 5.76273C5.48837 5.93199 5.48837 6.17171 5.48837 6.65116C5.48837 7.13061 5.48837 7.37034 5.60847 7.5396C5.65085 7.59933 5.703 7.65148 5.76273 7.69385Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.01812 12.772C9.60212 12.8505 10.1294 13.0232 10.5531 13.4469C10.9768 13.8706 11.1495 14.3979 11.228 14.9819C11.3024 15.5352 11.3024 16.2321 11.3023 17.0679L11.3023 18.1728C11.3023 18.7535 11.3024 19.2382 11.2649 19.6318C11.2258 20.0433 11.1409 20.4267 10.9254 20.7785C10.7144 21.1227 10.425 21.4121 10.0808 21.623C9.72907 21.8386 9.34559 21.9235 8.9341 21.9626C8.54048 22 8.05577 22 7.47507 22H7.40683C6.52304 22 5.8103 22 5.23653 21.9455C4.64482 21.8892 4.12929 21.77 3.6657 21.486C3.19632 21.1983 2.80168 20.8037 2.51405 20.3343C2.22996 19.8707 2.1108 19.3552 2.05454 18.7635C1.99999 18.1897 1.99999 17.477 2 16.5932V16.5249C1.99999 15.9442 1.99998 15.4595 2.0374 15.0659C2.07653 14.6544 2.16142 14.2709 2.37697 13.9192C2.5879 13.575 2.87731 13.2856 3.22152 13.0746C3.57325 12.8591 3.95674 12.7742 4.36823 12.7351C4.76184 12.6976 5.24648 12.6977 5.82717 12.6977L6.93209 12.6977C7.76789 12.6976 8.46484 12.6976 9.01812 12.772ZM6.65116 18.5116C6.17171 18.5116 5.93199 18.5116 5.76273 18.3915C5.703 18.3491 5.65085 18.297 5.60847 18.2373C5.48837 18.068 5.48837 17.8283 5.48837 17.3488C5.48837 16.8694 5.48837 16.6297 5.60847 16.4604C5.65085 16.4007 5.703 16.3485 5.76273 16.3061C5.93199 16.186 6.17171 16.186 6.65115 16.186C7.13059 16.186 7.37034 16.186 7.5396 16.3061C7.59933 16.3485 7.65148 16.4007 7.69385 16.4604C7.81395 16.6297 7.81395 16.8694 7.81395 17.3488C7.81395 17.8283 7.81395 18.068 7.69385 18.2373C7.65148 18.297 7.59933 18.3491 7.5396 18.3915C7.37034 18.5116 7.13061 18.5116 6.65116 18.5116Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M12.6977 16.6155V16.6512H14.093C14.093 15.9834 14.0939 15.5351 14.1286 15.1933C14.1622 14.8632 14.2216 14.7107 14.289 14.6098C14.3738 14.4828 14.4828 14.3738 14.6098 14.289C14.7107 14.2216 14.8632 14.1622 15.1933 14.1286C15.5351 14.0939 15.9834 14.093 16.6512 14.093H18.5116V12.6977H16.6155C15.9926 12.6977 15.4729 12.6976 15.0521 12.7404C14.6117 12.7853 14.203 12.8827 13.8346 13.1288C13.5553 13.3154 13.3154 13.5553 13.1288 13.8346C12.8827 14.203 12.7853 14.6117 12.7404 15.0521C12.6976 15.4729 12.6977 15.9926 12.6977 16.6155Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M22 18.5351V18.5116H20.6046C20.6046 18.9546 20.6043 19.2519 20.5886 19.4821C20.5733 19.706 20.5459 19.8151 20.5161 19.8868C20.3981 20.1718 20.1718 20.3981 19.8868 20.5161C19.8151 20.5459 19.706 20.5733 19.4821 20.5886C19.2519 20.6043 18.9546 20.6046 18.5116 20.6046H16.6512V22H18.5351C18.9486 22 19.2937 22 19.5771 21.9807C19.8721 21.9606 20.1507 21.9172 20.4208 21.8053C21.0476 21.5456 21.5456 21.0476 21.8053 20.4208C21.9172 20.1507 21.9606 19.8721 21.9807 19.5771C22 19.2937 22 18.9486 22 18.5351Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.093 21.3023C14.093 21.6876 13.7807 22 13.3953 22C13.01 22 12.6977 21.6876 12.6977 21.3023V18.5116H14.093V21.3023Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M21.3023 12.6977C20.917 12.6977 20.6046 13.01 20.6046 13.3953V16.6512H22V13.3953C22 13.01 21.6876 12.6977 21.3023 12.6977Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.0761 16.6173C16 16.8011 16 17.0341 16 17.5C16 17.9659 16 18.1989 16.0761 18.3827C16.1776 18.6277 16.3723 18.8224 16.6173 18.9239C16.8011 19 17.0341 19 17.5 19C17.9659 19 18.1989 19 18.3827 18.9239C18.6277 18.8224 18.8224 18.6277 18.9239 18.3827C19 18.1989 19 17.9659 19 17.5C19 17.0341 19 16.8011 18.9239 16.6173C18.8224 16.3723 18.6277 16.1776 18.3827 16.0761C18.1989 16 17.9659 16 17.5 16C17.0341 16 16.8011 16 16.6173 16.0761C16.3723 16.1776 16.1776 16.3723 16.0761 16.6173Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement(
              "g",
              { opacity: "0.5" },
              C.createElement("path", {
                d: "M10.5531 13.4469C10.1294 13.0232 9.60212 12.8505 9.01812 12.772C8.46484 12.6976 7.76789 12.6976 6.93209 12.6977L5.82717 12.6977C5.24648 12.6977 4.76184 12.6976 4.36823 12.7351C3.95674 12.7742 3.57325 12.8591 3.22152 13.0746C2.87731 13.2856 2.5879 13.575 2.37697 13.9192C2.16142 14.2709 2.07653 14.6544 2.0374 15.0659C1.99998 15.4595 1.99999 15.9442 2 16.5249V16.5932C1.99999 17.477 1.99999 18.1897 2.05454 18.7635C2.1108 19.3552 2.22996 19.8707 2.51405 20.3343C2.80168 20.8037 3.19632 21.1983 3.6657 21.486C4.12929 21.77 4.64482 21.8892 5.23653 21.9455C5.8103 22 6.52304 22 7.40683 22H7.47507C8.05577 22 8.54048 22 8.9341 21.9626C9.34559 21.9235 9.72907 21.8386 10.0808 21.623C10.425 21.4121 10.7144 21.1227 10.9254 20.7785C11.1409 20.4267 11.2258 20.0433 11.2649 19.6318C11.3024 19.2382 11.3023 18.7535 11.3023 18.1728L11.3023 17.0679C11.3024 16.2321 11.3024 15.5352 11.228 14.9819C11.1495 14.3979 10.9768 13.8706 10.5531 13.4469Z",
                fill: "currentColor",
              }),
              C.createElement("path", {
                d: "M8.9341 2.0374C9.34559 2.07653 9.72907 2.16142 10.0808 2.37697C10.425 2.5879 10.7144 2.87731 10.9254 3.22152C11.1409 3.57325 11.2258 3.95674 11.2649 4.36823C11.3024 4.76183 11.3023 5.24658 11.3023 5.82726L11.3023 6.93212C11.3024 7.7679 11.3024 8.46484 11.228 9.01812C11.1495 9.60212 10.9768 10.1294 10.5531 10.5531C10.1294 10.9768 9.60212 11.1495 9.01812 11.228C8.46484 11.3024 7.76787 11.3024 6.93209 11.3023L5.82711 11.3023C5.24643 11.3023 4.76183 11.3024 4.36823 11.2649C3.95674 11.2258 3.57325 11.1409 3.22152 10.9254C2.87731 10.7144 2.5879 10.425 2.37697 10.0808C2.16142 9.72907 2.07653 9.34559 2.0374 8.9341C1.99998 8.54047 1.99999 8.05579 2 7.47506V7.40679C1.99999 6.52302 1.99999 5.81029 2.05454 5.23653C2.1108 4.64482 2.22996 4.12929 2.51405 3.6657C2.80168 3.19632 3.19632 2.80168 3.6657 2.51405C4.12929 2.22996 4.64482 2.1108 5.23653 2.05454C5.81029 1.99999 6.52307 1.99999 7.40684 2H7.4751C8.05583 1.99999 8.54047 1.99998 8.9341 2.0374Z",
                fill: "currentColor",
              }),
              C.createElement("path", {
                d: "M16.5932 2H16.5249C15.9442 1.99999 15.4595 1.99998 15.0659 2.0374C14.6544 2.07653 14.2709 2.16142 13.9192 2.37697C13.575 2.5879 13.2856 2.87731 13.0746 3.22152C12.8591 3.57325 12.7742 3.95674 12.7351 4.36823C12.6976 4.76185 12.6977 5.24654 12.6977 5.82725L12.6977 6.93209C12.6976 7.76789 12.6976 8.46484 12.772 9.01812C12.8505 9.60212 13.0232 10.1294 13.4469 10.5531C13.8706 10.9768 14.3979 11.1495 14.9819 11.228C15.5352 11.3024 16.2321 11.3024 17.0679 11.3023L18.1728 11.3023C18.7535 11.3023 19.2382 11.3024 19.6318 11.2649C20.0433 11.2258 20.4267 11.1409 20.7785 10.9254C21.1227 10.7144 21.4121 10.425 21.623 10.0808C21.8386 9.72907 21.9235 9.34559 21.9626 8.9341C22 8.54048 22 8.05587 22 7.47517V7.40683C22 6.52304 22 5.8103 21.9455 5.23653C21.8892 4.64482 21.77 4.12929 21.486 3.6657C21.1983 3.19632 20.8037 2.80168 20.3343 2.51405C19.8707 2.22996 19.3552 2.1108 18.7635 2.05454C18.1897 1.99999 17.477 1.99999 16.5932 2Z",
                fill: "currentColor",
              })
            ),
            C.createElement("path", {
              opacity: "0.4",
              d: "M14.0926 21.3024C14.0926 21.6877 13.7803 22.0001 13.3949 22.0001C13.0096 22.0001 12.6973 21.6877 12.6973 21.3024V18.5117H14.0926V21.3024Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M21.3022 12.6978C20.9169 12.6978 20.6045 13.0101 20.6045 13.3954V16.6512H21.9998V13.3954C21.9998 13.0101 21.6875 12.6978 21.3022 12.6978Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.0761 16.6173C16 16.8011 16 17.0341 16 17.5C16 17.9659 16 18.1989 16.0761 18.3827C16.1776 18.6277 16.3723 18.8224 16.6173 18.9239C16.8011 19 17.0341 19 17.5 19C17.9659 19 18.1989 19 18.3827 18.9239C18.6277 18.8224 18.8224 18.6277 18.9239 18.3827C19 18.1989 19 17.9659 19 17.5C19 17.0341 19 16.8011 18.9239 16.6173C18.8224 16.3723 18.6277 16.1776 18.3827 16.0761C18.1989 16 17.9659 16 17.5 16C17.0341 16 16.8011 16 16.6173 16.0761C16.3723 16.1776 16.1776 16.3723 16.0761 16.6173Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.7",
              d: "M21.9992 18.5352V18.5117H20.6039C20.6039 18.9547 20.6035 19.252 20.5878 19.4822C20.5725 19.7061 20.5451 19.8152 20.5154 19.8869C20.3974 20.1718 20.171 20.3982 19.8861 20.5162C19.8143 20.546 19.7053 20.5734 19.4813 20.5887C19.2511 20.6044 18.9538 20.6047 18.5109 20.6047H16.6504V22.0001H18.5344C18.9478 22.0001 19.293 22.0001 19.5763 21.9808C19.8713 21.9606 20.1499 21.9173 20.42 21.8054C21.0469 21.5457 21.5449 21.0477 21.8045 20.4209C21.9164 20.1508 21.9598 19.8722 21.9799 19.5772C21.9992 19.2938 21.9992 18.9487 21.9992 18.5352Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.6",
              d: "M12.6973 16.6156V16.6512H14.0926C14.0926 15.9835 14.0935 15.5352 14.1282 15.1934C14.1618 14.8633 14.2212 14.7108 14.2886 14.6099C14.3734 14.4829 14.4824 14.3739 14.6094 14.2891C14.7103 14.2217 14.8628 14.1623 15.1929 14.1287C15.5347 14.0939 15.983 14.0931 16.6508 14.0931H18.5112V12.6978H16.6151C15.9922 12.6977 15.4725 12.6977 15.0517 12.7405C14.6113 12.7853 14.2025 12.8827 13.8342 13.1289C13.5549 13.3155 13.315 13.5553 13.1284 13.8347C12.8823 14.203 12.7848 14.6118 12.74 15.0522C12.6972 15.473 12.6973 15.9927 12.6973 16.6156Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M5.50821 18.6903C5.72656 18.8452 6.03581 18.8452 6.6543 18.8452C7.27278 18.8452 7.58203 18.8452 7.80038 18.6903C7.87743 18.6356 7.9447 18.5683 7.99937 18.4913C8.1543 18.2729 8.1543 17.9637 8.1543 17.3452C8.1543 16.7267 8.1543 16.4175 7.99937 16.1991C7.9447 16.1221 7.87743 16.0548 7.80038 16.0001C7.58203 15.8452 7.27276 15.8452 6.65428 15.8452C6.0358 15.8452 5.72656 15.8452 5.50821 16.0001C5.43117 16.0548 5.36389 16.1221 5.30923 16.1991C5.1543 16.4175 5.1543 16.7267 5.1543 17.3452C5.1543 17.9637 5.1543 18.2729 5.30923 18.4913C5.36389 18.5683 5.43117 18.6356 5.50821 18.6903Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M6.6543 8.15479C6.03581 8.15479 5.72656 8.15479 5.50821 7.99986C5.43117 7.94519 5.36389 7.87792 5.30923 7.80087C5.1543 7.58252 5.1543 7.27327 5.1543 6.65479C5.1543 6.0363 5.1543 5.72705 5.30923 5.5087C5.36389 5.43165 5.43117 5.36438 5.50821 5.30971C5.72656 5.15479 6.03581 5.15479 6.6543 5.15479C7.27278 5.15479 7.58203 5.15479 7.80038 5.30971C7.87743 5.36438 7.9447 5.43165 7.99937 5.5087C8.1543 5.72705 8.1543 6.0363 8.1543 6.65479C8.1543 7.27327 8.1543 7.58252 7.99937 7.80087C7.9447 7.87792 7.87743 7.94519 7.80038 7.99986C7.58203 8.15479 7.27278 8.15479 6.6543 8.15479Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.1996 8C16.418 8.15493 16.7272 8.15493 17.3457 8.15493C17.9642 8.15493 18.2734 8.15493 18.4918 8C18.5688 7.94533 18.6361 7.87806 18.6908 7.80101C18.8457 7.58266 18.8457 7.27342 18.8457 6.65493C18.8457 6.03644 18.8457 5.7272 18.6908 5.50885C18.6361 5.4318 18.5688 5.36453 18.4918 5.30986C18.2734 5.15493 17.9642 5.15493 17.3457 5.15493C16.7272 5.15493 16.418 5.15493 16.1996 5.30986C16.1226 5.36453 16.0553 5.4318 16.0006 5.50885C15.8457 5.7272 15.8457 6.03647 15.8457 6.65494C15.8457 7.27342 15.8457 7.58266 16.0006 7.80101C16.0553 7.87806 16.1226 7.94533 16.1996 8Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M2 16.9C2 15.5906 2 14.9359 2.29472 14.455C2.45963 14.1859 2.68589 13.9596 2.955 13.7947C3.43594 13.5 4.09063 13.5 5.4 13.5H6.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5V18.6C10.5 19.9094 10.5 20.5641 10.2053 21.045C10.0404 21.3141 9.81411 21.5404 9.545 21.7053C9.06406 22 8.40937 22 7.1 22C5.13594 22 4.15391 22 3.4325 21.5579C3.02884 21.3106 2.68945 20.9712 2.44208 20.5675",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M22 7.1C22 8.40937 22 9.06406 21.7053 9.545C21.5404 9.81411 21.3141 10.0404 21.045 10.2053C20.5641 10.5 19.9094 10.5 18.6 10.5H17.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5V5.4C13.5 4.09063 13.5 3.43594 13.7947 2.955C13.9596 2.68589 14.1859 2.45963 14.455 2.29472C14.9359 2 15.5906 2 16.9 2C18.8641 2 19.8461 2 20.5675 2.44208C20.9712 2.68945 21.3106 3.02884 21.5579 3.4325",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M16.5 6.25C16.5 5.73459 16.5 5.47689 16.6291 5.29493C16.6747 5.23072 16.7307 5.17466 16.7949 5.12911C16.9769 5 17.2346 5 17.75 5C18.2654 5 18.5231 5 18.7051 5.12911C18.7693 5.17466 18.8253 5.23072 18.8709 5.29493C19 5.47689 19 5.73459 19 6.25C19 6.76541 19 7.02311 18.8709 7.20507C18.8253 7.26928 18.7693 7.32534 18.7051 7.37089C18.5231 7.5 18.2654 7.5 17.75 7.5C17.2346 7.5 16.9769 7.5 16.7949 7.37089C16.7307 7.32534 16.6747 7.26928 16.6291 7.20507C16.5 7.02311 16.5 6.76541 16.5 6.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M12.75 22C12.75 22.4142 13.0858 22.75 13.5 22.75C13.9142 22.75 14.25 22.4142 14.25 22H12.75ZM14.3889 13.8371L14.8055 14.4607L14.8055 14.4607L14.3889 13.8371ZM13.8371 14.3889L13.2135 13.9722L13.2135 13.9722L13.8371 14.3889ZM19 12.75H17V14.25H19V12.75ZM12.75 19V22H14.25V19H12.75ZM17 12.75C16.3134 12.75 15.742 12.7491 15.281 12.796C14.8075 12.8441 14.3682 12.9489 13.9722 13.2135L14.8055 14.4607C14.914 14.3882 15.078 14.3244 15.4328 14.2883C15.8002 14.2509 16.2822 14.25 17 14.25V12.75ZM14.25 17C14.25 16.2822 14.2509 15.8002 14.2883 15.4328C14.3244 15.078 14.3882 14.914 14.4607 14.8055L13.2135 13.9722C12.9489 14.3682 12.8441 14.8075 12.796 15.281C12.7491 15.742 12.75 16.3134 12.75 17H14.25ZM13.9722 13.2135C13.6719 13.4141 13.4141 13.6719 13.2135 13.9722L14.4607 14.8055C14.5519 14.669 14.669 14.5519 14.8055 14.4607L13.9722 13.2135Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M22.75 13.5C22.75 13.0858 22.4142 12.75 22 12.75C21.5858 12.75 21.25 13.0858 21.25 13.5H22.75ZM20.7654 21.8478L21.0524 22.5407L21.0524 22.5407L20.7654 21.8478ZM21.8478 20.7654L21.1548 20.4784V20.4784L21.8478 20.7654ZM17 22.75H19V21.25H17V22.75ZM22.75 17V13.5H21.25V17H22.75ZM19 22.75C19.4557 22.75 19.835 22.7504 20.1454 22.7292C20.4625 22.7076 20.762 22.661 21.0524 22.5407L20.4784 21.1548C20.4012 21.1868 20.284 21.2163 20.0433 21.2327C19.7958 21.2496 19.4762 21.25 19 21.25V22.75ZM21.25 19C21.25 19.4762 21.2496 19.7958 21.2327 20.0433C21.2163 20.284 21.1868 20.4012 21.1548 20.4784L22.5407 21.0524C22.661 20.762 22.7076 20.4625 22.7292 20.1454C22.7504 19.835 22.75 19.4557 22.75 19H21.25ZM21.0524 22.5407C21.7262 22.2616 22.2616 21.7262 22.5407 21.0524L21.1548 20.4784C21.028 20.7846 20.7846 21.028 20.4784 21.1549L21.0524 22.5407Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M2 7.1C2 5.13594 2 4.15391 2.44208 3.4325C2.68945 3.02884 3.02884 2.68945 3.4325 2.44208C4.15391 2 5.13594 2 7.1 2C8.40937 2 9.06406 2 9.545 2.29472C9.81411 2.45963 10.0404 2.68589 10.2053 2.955C10.5 3.43594 10.5 4.09063 10.5 5.4V6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5H5.4C4.09063 10.5 3.43594 10.5 2.955 10.2053C2.68589 10.0404 2.45963 9.81411 2.29472 9.545C2 9.06406 2 8.40937 2 7.1Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M5 6.25C5 5.73459 5 5.47689 5.12911 5.29493C5.17466 5.23072 5.23072 5.17466 5.29493 5.12911C5.47689 5 5.73459 5 6.25 5C6.76541 5 7.02311 5 7.20507 5.12911C7.26928 5.17466 7.32534 5.23072 7.37089 5.29493C7.5 5.47689 7.5 5.73459 7.5 6.25C7.5 6.76541 7.5 7.02311 7.37089 7.20507C7.32534 7.26928 7.26928 7.32534 7.20507 7.37089C7.02311 7.5 6.76541 7.5 6.25 7.5C5.73459 7.5 5.47689 7.5 5.29493 7.37089C5.23072 7.32534 5.17466 7.26928 5.12911 7.20507C5 7.02311 5 6.76541 5 6.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M5 17.75C5 17.2346 5 16.9769 5.12911 16.7949C5.17466 16.7307 5.23072 16.6747 5.29493 16.6291C5.47689 16.5 5.73459 16.5 6.25 16.5C6.76541 16.5 7.02311 16.5 7.20507 16.6291C7.26928 16.6747 7.32534 16.7307 7.37089 16.7949C7.5 16.9769 7.5 17.2346 7.5 17.75C7.5 18.2654 7.5 18.5231 7.37089 18.7051C7.32534 18.7693 7.26928 18.8253 7.20507 18.8709C7.02311 19 6.76541 19 6.25 19C5.73459 19 5.47689 19 5.29493 18.8709C5.23072 18.8253 5.17466 18.7693 5.12911 18.7051C5 18.5231 5 18.2654 5 17.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16 17.75C16 17.0478 16 16.6967 16.1685 16.4444C16.2415 16.3352 16.3352 16.2415 16.4444 16.1685C16.6967 16 17.0478 16 17.75 16C18.4522 16 18.8033 16 19.0556 16.1685C19.1648 16.2415 19.2585 16.3352 19.3315 16.4444C19.5 16.6967 19.5 17.0478 19.5 17.75C19.5 18.4522 19.5 18.8033 19.3315 19.0556C19.2585 19.1648 19.1648 19.2585 19.0556 19.3315C18.8033 19.5 18.4522 19.5 17.75 19.5C17.0478 19.5 16.6967 19.5 16.4444 19.3315C16.3352 19.2585 16.2415 19.1648 16.1685 19.0556C16 18.8033 16 18.4522 16 17.75Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M2 16.9C2 15.5906 2 14.9359 2.29472 14.455C2.45963 14.1859 2.68589 13.9596 2.955 13.7947C3.43594 13.5 4.09063 13.5 5.4 13.5H6.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5V18.6C10.5 19.9094 10.5 20.5641 10.2053 21.045C10.0404 21.3141 9.81411 21.5404 9.545 21.7053C9.06406 22 8.40937 22 7.1 22C5.13594 22 4.15391 22 3.4325 21.5579C3.02884 21.3106 2.68945 20.9712 2.44208 20.5675C2 19.8461 2 18.8641 2 16.9Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M13.5 5.4C13.5 4.09063 13.5 3.43594 13.7947 2.955C13.9596 2.68589 14.1859 2.45963 14.455 2.29472C14.9359 2 15.5906 2 16.9 2C18.8641 2 19.8461 2 20.5675 2.44208C20.9712 2.68945 21.3106 3.02884 21.5579 3.4325C22 4.15391 22 5.13594 22 7.1C22 8.40937 22 9.06406 21.7053 9.545C21.5404 9.81411 21.3141 10.0404 21.045 10.2053C20.5641 10.5 19.9094 10.5 18.6 10.5H17.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5V5.4Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M16.5 6.25C16.5 5.73459 16.5 5.47689 16.6291 5.29493C16.6747 5.23072 16.7307 5.17466 16.7949 5.12911C16.9769 5 17.2346 5 17.75 5C18.2654 5 18.5231 5 18.7051 5.12911C18.7693 5.17466 18.8253 5.23072 18.8709 5.29493C19 5.47689 19 5.73459 19 6.25C19 6.76541 19 7.02311 18.8709 7.20507C18.8253 7.26928 18.7693 7.32534 18.7051 7.37089C18.5231 7.5 18.2654 7.5 17.75 7.5C17.2346 7.5 16.9769 7.5 16.7949 7.37089C16.7307 7.32534 16.6747 7.26928 16.6291 7.20507C16.5 7.02311 16.5 6.76541 16.5 6.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M12.75 22C12.75 22.4142 13.0858 22.75 13.5 22.75C13.9142 22.75 14.25 22.4142 14.25 22H12.75ZM14.3889 13.8371L14.8055 14.4607L14.8055 14.4607L14.3889 13.8371ZM13.8371 14.3889L13.2135 13.9722L13.2135 13.9722L13.8371 14.3889ZM19 12.75H17V14.25H19V12.75ZM12.75 19V22H14.25V19H12.75ZM17 12.75C16.3134 12.75 15.742 12.7491 15.281 12.796C14.8075 12.8441 14.3682 12.9489 13.9722 13.2135L14.8055 14.4607C14.914 14.3882 15.078 14.3244 15.4328 14.2883C15.8002 14.2509 16.2822 14.25 17 14.25V12.75ZM14.25 17C14.25 16.2822 14.2509 15.8002 14.2883 15.4328C14.3244 15.078 14.3882 14.914 14.4607 14.8055L13.2135 13.9722C12.9489 14.3682 12.8441 14.8075 12.796 15.281C12.7491 15.742 12.75 16.3134 12.75 17H14.25ZM13.9722 13.2135C13.6719 13.4141 13.4141 13.6719 13.2135 13.9722L14.4607 14.8055C14.5519 14.669 14.669 14.5519 14.8055 14.4607L13.9722 13.2135Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M22.75 13.5C22.75 13.0858 22.4142 12.75 22 12.75C21.5858 12.75 21.25 13.0858 21.25 13.5H22.75ZM20.7654 21.8478L21.0524 22.5407L21.0524 22.5407L20.7654 21.8478ZM21.8478 20.7654L21.1548 20.4784V20.4784L21.8478 20.7654ZM17 22.75H19V21.25H17V22.75ZM22.75 17V13.5H21.25V17H22.75ZM19 22.75C19.4557 22.75 19.835 22.7504 20.1454 22.7292C20.4625 22.7076 20.762 22.661 21.0524 22.5407L20.4784 21.1548C20.4012 21.1868 20.284 21.2163 20.0433 21.2327C19.7958 21.2496 19.4762 21.25 19 21.25V22.75ZM21.25 19C21.25 19.4762 21.2496 19.7958 21.2327 20.0433C21.2163 20.284 21.1868 20.4012 21.1548 20.4784L22.5407 21.0524C22.661 20.762 22.7076 20.4625 22.7292 20.1454C22.7504 19.835 22.75 19.4557 22.75 19H21.25ZM21.0524 22.5407C21.7262 22.2616 22.2616 21.7262 22.5407 21.0524L21.1548 20.4784C21.028 20.7846 20.7846 21.028 20.4784 21.1549L21.0524 22.5407Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M2 7.1C2 5.13594 2 4.15391 2.44208 3.4325C2.68945 3.02884 3.02884 2.68945 3.4325 2.44208C4.15391 2 5.13594 2 7.1 2C8.40937 2 9.06406 2 9.545 2.29472C9.81411 2.45963 10.0404 2.68589 10.2053 2.955C10.5 3.43594 10.5 4.09063 10.5 5.4V6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5H5.4C4.09063 10.5 3.43594 10.5 2.955 10.2053C2.68589 10.0404 2.45963 9.81411 2.29472 9.545C2 9.06406 2 8.40937 2 7.1Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M5 6.25C5 5.73459 5 5.47689 5.12911 5.29493C5.17466 5.23072 5.23072 5.17466 5.29493 5.12911C5.47689 5 5.73459 5 6.25 5C6.76541 5 7.02311 5 7.20507 5.12911C7.26928 5.17466 7.32534 5.23072 7.37089 5.29493C7.5 5.47689 7.5 5.73459 7.5 6.25C7.5 6.76541 7.5 7.02311 7.37089 7.20507C7.32534 7.26928 7.26928 7.32534 7.20507 7.37089C7.02311 7.5 6.76541 7.5 6.25 7.5C5.73459 7.5 5.47689 7.5 5.29493 7.37089C5.23072 7.32534 5.17466 7.26928 5.12911 7.20507C5 7.02311 5 6.76541 5 6.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M5 17.75C5 17.2346 5 16.9769 5.12911 16.7949C5.17466 16.7307 5.23072 16.6747 5.29493 16.6291C5.47689 16.5 5.73459 16.5 6.25 16.5C6.76541 16.5 7.02311 16.5 7.20507 16.6291C7.26928 16.6747 7.32534 16.7307 7.37089 16.7949C7.5 16.9769 7.5 17.2346 7.5 17.75C7.5 18.2654 7.5 18.5231 7.37089 18.7051C7.32534 18.7693 7.26928 18.8253 7.20507 18.8709C7.02311 19 6.76541 19 6.25 19C5.73459 19 5.47689 19 5.29493 18.8709C5.23072 18.8253 5.17466 18.7693 5.12911 18.7051C5 18.5231 5 18.2654 5 17.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16 17.75C16 17.0478 16 16.6967 16.1685 16.4444C16.2415 16.3352 16.3352 16.2415 16.4444 16.1685C16.6967 16 17.0478 16 17.75 16C18.4522 16 18.8033 16 19.0556 16.1685C19.1648 16.2415 19.2585 16.3352 19.3315 16.4444C19.5 16.6967 19.5 17.0478 19.5 17.75C19.5 18.4522 19.5 18.8033 19.3315 19.0556C19.2585 19.1648 19.1648 19.2585 19.0556 19.3315C18.8033 19.5 18.4522 19.5 17.75 19.5C17.0478 19.5 16.6967 19.5 16.4444 19.3315C16.3352 19.2585 16.2415 19.1648 16.1685 19.0556C16 18.8033 16 18.4522 16 17.75Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M2 16.9C2 15.5906 2 14.9359 2.29472 14.455C2.45963 14.1859 2.68589 13.9596 2.955 13.7947C3.43594 13.5 4.09063 13.5 5.4 13.5H6.5C8.38562 13.5 9.32843 13.5 9.91421 14.0858C10.5 14.6716 10.5 15.6144 10.5 17.5V18.6C10.5 19.9094 10.5 20.5641 10.2053 21.045C10.0404 21.3141 9.81411 21.5404 9.545 21.7053C9.06406 22 8.40937 22 7.1 22C5.13594 22 4.15391 22 3.4325 21.5579C3.02884 21.3106 2.68945 20.9712 2.44208 20.5675C2 19.8461 2 18.8641 2 16.9Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M13.5 5.4C13.5 4.09063 13.5 3.43594 13.7947 2.955C13.9596 2.68589 14.1859 2.45963 14.455 2.29472C14.9359 2 15.5906 2 16.9 2C18.8641 2 19.8461 2 20.5675 2.44208C20.9712 2.68945 21.3106 3.02884 21.5579 3.4325C22 4.15391 22 5.13594 22 7.1C22 8.40937 22 9.06406 21.7053 9.545C21.5404 9.81411 21.3141 10.0404 21.045 10.2053C20.5641 10.5 19.9094 10.5 18.6 10.5H17.5C15.6144 10.5 14.6716 10.5 14.0858 9.91421C13.5 9.32843 13.5 8.38562 13.5 6.5V5.4Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M16.5 6.25C16.5 5.73459 16.5 5.47689 16.6291 5.29493C16.6747 5.23072 16.7307 5.17466 16.7949 5.12911C16.9769 5 17.2346 5 17.75 5C18.2654 5 18.5231 5 18.7051 5.12911C18.7693 5.17466 18.8253 5.23072 18.8709 5.29493C19 5.47689 19 5.73459 19 6.25C19 6.76541 19 7.02311 18.8709 7.20507C18.8253 7.26928 18.7693 7.32534 18.7051 7.37089C18.5231 7.5 18.2654 7.5 17.75 7.5C17.2346 7.5 16.9769 7.5 16.7949 7.37089C16.7307 7.32534 16.6747 7.26928 16.6291 7.20507C16.5 7.02311 16.5 6.76541 16.5 6.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M19 13.5H17C15.5955 13.5 14.8933 13.5 14.3889 13.8371C14.1705 13.983 13.983 14.1705 13.8371 14.3889C13.5 14.8933 13.5 15.5955 13.5 17",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M12.75 22C12.75 22.4142 13.0858 22.75 13.5 22.75C13.9142 22.75 14.25 22.4142 14.25 22H12.75ZM12.75 19V22H14.25V19H12.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M17 22H19C19.9319 22 20.3978 22 20.7654 21.8478C21.2554 21.6448 21.6448 21.2554 21.8478 20.7654C22 20.3978 22 19.9319 22 19",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinejoin: "round",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M22.75 13.5C22.75 13.0858 22.4142 12.75 22 12.75C21.5858 12.75 21.25 13.0858 21.25 13.5H22.75ZM22.75 17V13.5H21.25V17H22.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M2 7.1C2 5.13594 2 4.15391 2.44208 3.4325C2.68945 3.02884 3.02884 2.68945 3.4325 2.44208C4.15391 2 5.13594 2 7.1 2C8.40937 2 9.06406 2 9.545 2.29472C9.81411 2.45963 10.0404 2.68589 10.2053 2.955C10.5 3.43594 10.5 4.09063 10.5 5.4V6.5C10.5 8.38562 10.5 9.32843 9.91421 9.91421C9.32843 10.5 8.38562 10.5 6.5 10.5H5.4C4.09063 10.5 3.43594 10.5 2.955 10.2053C2.68589 10.0404 2.45963 9.81411 2.29472 9.545C2 9.06406 2 8.40937 2 7.1Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M5 6.25C5 5.73459 5 5.47689 5.12911 5.29493C5.17466 5.23072 5.23072 5.17466 5.29493 5.12911C5.47689 5 5.73459 5 6.25 5C6.76541 5 7.02311 5 7.20507 5.12911C7.26928 5.17466 7.32534 5.23072 7.37089 5.29493C7.5 5.47689 7.5 5.73459 7.5 6.25C7.5 6.76541 7.5 7.02311 7.37089 7.20507C7.32534 7.26928 7.26928 7.32534 7.20507 7.37089C7.02311 7.5 6.76541 7.5 6.25 7.5C5.73459 7.5 5.47689 7.5 5.29493 7.37089C5.23072 7.32534 5.17466 7.26928 5.12911 7.20507C5 7.02311 5 6.76541 5 6.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M5 17.75C5 17.2346 5 16.9769 5.12911 16.7949C5.17466 16.7307 5.23072 16.6747 5.29493 16.6291C5.47689 16.5 5.73459 16.5 6.25 16.5C6.76541 16.5 7.02311 16.5 7.20507 16.6291C7.26928 16.6747 7.32534 16.7307 7.37089 16.7949C7.5 16.9769 7.5 17.2346 7.5 17.75C7.5 18.2654 7.5 18.5231 7.37089 18.7051C7.32534 18.7693 7.26928 18.8253 7.20507 18.8709C7.02311 19 6.76541 19 6.25 19C5.73459 19 5.47689 19 5.29493 18.8709C5.23072 18.8253 5.17466 18.7693 5.12911 18.7051C5 18.5231 5 18.2654 5 17.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M16 17.75C16 17.0478 16 16.6967 16.1685 16.4444C16.2415 16.3352 16.3352 16.2415 16.4444 16.1685C16.6967 16 17.0478 16 17.75 16C18.4522 16 18.8033 16 19.0556 16.1685C19.1648 16.2415 19.2585 16.3352 19.3315 16.4444C19.5 16.6967 19.5 17.0478 19.5 17.75C19.5 18.4522 19.5 18.8033 19.3315 19.0556C19.2585 19.1648 19.1648 19.2585 19.0556 19.3315C18.8033 19.5 18.4522 19.5 17.75 19.5C17.0478 19.5 16.6967 19.5 16.4444 19.3315C16.3352 19.2585 16.2415 19.1648 16.1685 19.0556C16 18.8033 16 18.4522 16 17.75Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M5.12911 5.29493C5 5.47689 5 5.73459 5 6.25C5 6.76541 5 7.02311 5.12911 7.20507C5.17467 7.26928 5.23073 7.32534 5.29493 7.37089C5.47689 7.5 5.73459 7.5 6.25 7.5C6.76541 7.5 7.02311 7.5 7.20507 7.37089C7.26928 7.32534 7.32534 7.26928 7.37089 7.20507C7.5 7.02311 7.5 6.76541 7.5 6.25C7.5 5.73459 7.5 5.47689 7.37089 5.29493C7.32534 5.23073 7.26928 5.17467 7.20507 5.12911C7.02311 5 6.76541 5 6.25 5C5.73459 5 5.47689 5 5.29493 5.12911C5.23073 5.17467 5.17467 5.23073 5.12911 5.29493Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.70415 1.29021C9.14651 1.33227 9.55876 1.42353 9.93687 1.65524C10.3069 1.88199 10.618 2.1931 10.8448 2.56313C11.0765 2.94125 11.1677 3.35349 11.2098 3.79585C11.25 4.21899 11.25 4.73995 11.25 5.36422L11.25 6.552C11.25 7.45046 11.2501 8.19971 11.1701 8.79448C11.0857 9.42228 10.9 9.98908 10.4445 10.4445C9.98908 10.9 9.42228 11.0857 8.79448 11.1701C8.19971 11.2501 7.4505 11.25 6.55203 11.25L5.3643 11.25C4.74004 11.25 4.21899 11.25 3.79585 11.2098C3.35349 11.1677 2.94125 11.0765 2.56313 10.8448C2.1931 10.618 1.88199 10.3069 1.65524 9.93687C1.42353 9.55876 1.33227 9.14651 1.29021 8.70415C1.24997 8.281 1.24999 7.76 1.25 7.13571V7.06235C1.24999 6.11229 1.24998 5.34606 1.30863 4.72927C1.36911 4.09318 1.49721 3.53898 1.8026 3.04063C2.11181 2.53605 2.53605 2.11181 3.04063 1.8026C3.53898 1.49721 4.09318 1.36911 4.72927 1.30863C5.34607 1.24998 6.11227 1.24999 7.06233 1.25H7.13569C7.75999 1.24999 8.281 1.24997 8.70415 1.29021ZM8.56217 2.78347C8.21845 2.75079 7.76921 2.75 7.1 2.75C6.10345 2.75 5.4087 2.75079 4.87125 2.80189C4.34496 2.85193 4.04744 2.94487 3.82438 3.08156C3.52163 3.26709 3.26709 3.52163 3.08156 3.82438C2.94487 4.04744 2.85193 4.34496 2.80189 4.87125C2.75079 5.4087 2.75 6.10345 2.75 7.1C2.75 7.76921 2.75079 8.21845 2.78347 8.56217C2.81509 8.89473 2.87119 9.0503 2.9342 9.15312C3.03727 9.32132 3.17868 9.46273 3.34688 9.5658C3.4497 9.62881 3.60527 9.68491 3.93783 9.71653C4.28155 9.74921 4.73079 9.75 5.4 9.75H6.5C7.46401 9.75 8.11157 9.74841 8.59461 9.68347C9.05607 9.62142 9.25357 9.5142 9.38389 9.38389C9.5142 9.25357 9.62142 9.05607 9.68347 8.59461C9.74841 8.11157 9.75 7.46401 9.75 6.5V5.4C9.75 4.73079 9.74921 4.28155 9.71653 3.93783C9.68491 3.60527 9.62881 3.4497 9.5658 3.34688C9.46273 3.17868 9.32132 3.03727 9.15312 2.9342C9.0503 2.87119 8.89473 2.81509 8.56217 2.78347Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.6291 5.29493C16.5 5.47689 16.5 5.73459 16.5 6.25C16.5 6.76541 16.5 7.02311 16.6291 7.20507C16.6747 7.26928 16.7307 7.32534 16.7949 7.37089C16.9769 7.5 17.2346 7.5 17.75 7.5C18.2654 7.5 18.5231 7.5 18.7051 7.37089C18.7693 7.32534 18.8253 7.26928 18.8709 7.20507C19 7.02311 19 6.76541 19 6.25C19 5.73459 19 5.47689 18.8709 5.29493C18.8253 5.23073 18.7693 5.17467 18.7051 5.12911C18.5231 5 18.2654 5 17.75 5C17.2346 5 16.9769 5 16.7949 5.12911C16.7307 5.17467 16.6747 5.23073 16.6291 5.29493Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.8643 1.25H16.9377C17.8877 1.24999 18.6539 1.24998 19.2707 1.30863C19.9068 1.36911 20.461 1.49721 20.9594 1.8026C21.464 2.11181 21.8882 2.53605 22.1974 3.04063C22.5028 3.53898 22.6309 4.09318 22.6914 4.72927C22.75 5.34607 22.75 6.11227 22.75 7.06234V7.1357C22.75 7.76 22.75 8.281 22.7098 8.70415C22.6677 9.14651 22.5765 9.55876 22.3448 9.93687C22.118 10.3069 21.8069 10.618 21.4369 10.8448C21.0588 11.0765 20.6465 11.1677 20.2042 11.2098C19.781 11.25 19.2601 11.25 18.6359 11.25L17.448 11.25C16.5495 11.25 15.8003 11.2501 15.2055 11.1701C14.5777 11.0857 14.0109 10.9 13.5555 10.4445C13.1 9.98908 12.9143 9.42228 12.8299 8.79448C12.7499 8.1997 12.75 7.45048 12.75 6.552V5.36431C12.75 4.74001 12.75 4.21901 12.7902 3.79585C12.8323 3.35349 12.9235 2.94125 13.1552 2.56313C13.382 2.1931 13.6931 1.88199 14.0631 1.65524C14.4412 1.42353 14.8535 1.33227 15.2959 1.29021C15.719 1.24997 16.24 1.24999 16.8643 1.25ZM15.4378 2.78347C15.1053 2.81509 14.9497 2.87119 14.8469 2.9342C14.6787 3.03727 14.5373 3.17868 14.4342 3.34688C14.3712 3.4497 14.3151 3.60527 14.2835 3.93783C14.2508 4.28155 14.25 4.73079 14.25 5.4V6.5C14.25 7.46401 14.2516 8.11157 14.3165 8.59461C14.3786 9.05607 14.4858 9.25357 14.6161 9.38389C14.7464 9.5142 14.9439 9.62142 15.4054 9.68347C15.8884 9.74841 16.536 9.75 17.5 9.75H18.6C19.2692 9.75 19.7184 9.74921 20.0622 9.71653C20.3947 9.68491 20.5503 9.62881 20.6531 9.5658C20.8213 9.46273 20.9627 9.32132 21.0658 9.15312C21.1288 9.0503 21.1849 8.89473 21.2165 8.56217C21.2492 8.21845 21.25 7.76921 21.25 7.1C21.25 6.10345 21.2492 5.4087 21.1981 4.87125C21.1481 4.34496 21.0551 4.04744 20.9184 3.82438C20.7329 3.52163 20.4784 3.26709 20.1756 3.08156C19.9526 2.94487 19.655 2.85193 19.1288 2.80189C18.5913 2.75079 17.8966 2.75 16.9 2.75C16.2308 2.75 15.7816 2.75079 15.4378 2.78347Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M5 17.75C5 17.2346 5 16.9769 5.12911 16.7949C5.17467 16.7307 5.23073 16.6747 5.29493 16.6291C5.47689 16.5 5.73459 16.5 6.25 16.5C6.76541 16.5 7.02311 16.5 7.20507 16.6291C7.26928 16.6747 7.32534 16.7307 7.37089 16.7949C7.5 16.9769 7.5 17.2346 7.5 17.75C7.5 18.2654 7.5 18.5231 7.37089 18.7051C7.32534 18.7693 7.26928 18.8253 7.20507 18.8709C7.02311 19 6.76541 19 6.25 19C5.73459 19 5.47689 19 5.29493 18.8709C5.23073 18.8253 5.17467 18.7693 5.12911 18.7051C5 18.5231 5 18.2654 5 17.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8.79448 12.8299C9.42228 12.9143 9.98908 13.1 10.4445 13.5555C10.9 14.0109 11.0857 14.5777 11.1701 15.2055C11.2501 15.8003 11.25 16.5495 11.25 17.448L11.25 18.6357C11.25 19.2599 11.25 19.781 11.2098 20.2042C11.1677 20.6465 11.0765 21.0588 10.8448 21.4369C10.618 21.8069 10.3069 22.118 9.93687 22.3448C9.55876 22.5765 9.14651 22.6677 8.70415 22.7098C8.281 22.75 7.76 22.75 7.1357 22.75H7.06234C6.11227 22.75 5.34607 22.75 4.72927 22.6914C4.09318 22.6309 3.53898 22.5028 3.04063 22.1974C2.53605 21.8882 2.11181 21.464 1.8026 20.9594C1.49721 20.461 1.36911 19.9068 1.30863 19.2707C1.24998 18.6539 1.24999 17.8877 1.25 16.9377V16.8643C1.24999 16.24 1.24997 15.719 1.29021 15.2959C1.33227 14.8535 1.42353 14.4412 1.65524 14.0631C1.88199 13.6931 2.1931 13.382 2.56313 13.1552C2.94125 12.9235 3.35349 12.8323 3.79585 12.7902C4.21901 12.75 4.74001 12.75 5.36431 12.75H6.552C7.45048 12.75 8.1997 12.7499 8.79448 12.8299ZM8.59461 14.3165C8.11157 14.2516 7.46401 14.25 6.5 14.25H5.4C4.73079 14.25 4.28155 14.2508 3.93783 14.2835C3.60527 14.3151 3.4497 14.3712 3.34688 14.4342C3.17868 14.5373 3.03727 14.6787 2.9342 14.8469C2.87119 14.9497 2.81509 15.1053 2.78347 15.4378C2.75079 15.7816 2.75 16.2308 2.75 16.9C2.75 17.8966 2.75079 18.5913 2.80189 19.1288C2.85193 19.655 2.94487 19.9526 3.08156 20.1756C3.26709 20.4784 3.52163 20.7329 3.82438 20.9184C4.04744 21.0551 4.34496 21.1481 4.87125 21.1981C5.4087 21.2492 6.10345 21.25 7.1 21.25C7.76921 21.25 8.21845 21.2492 8.56217 21.2165C8.89473 21.1849 9.0503 21.1288 9.15312 21.0658C9.32132 20.9627 9.46273 20.8213 9.5658 20.6531C9.62881 20.5503 9.68491 20.3947 9.71653 20.0622C9.74921 19.7184 9.75 19.2692 9.75 18.6V17.5C9.75 16.536 9.74841 15.8884 9.68347 15.4054C9.62142 14.9439 9.5142 14.7464 9.38389 14.6161C9.25357 14.4858 9.05607 14.3786 8.59461 14.3165Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.9617 12.75L19 12.75V14.25H17C16.2822 14.25 15.8002 14.2509 15.4328 14.2883C15.078 14.3244 14.914 14.3882 14.8055 14.4607C14.6691 14.5519 14.5519 14.6691 14.4607 14.8055C14.3882 14.914 14.3244 15.078 14.2883 15.4328C14.2509 15.8002 14.25 16.2822 14.25 17H12.75L12.75 16.9617C12.75 16.2921 12.75 15.7333 12.796 15.281C12.8442 14.8075 12.9489 14.3682 13.2135 13.9722C13.4141 13.6719 13.6719 13.4141 13.9722 13.2135C14.3682 12.9489 14.8075 12.8442 15.281 12.796C15.7333 12.75 16.2921 12.75 16.9617 12.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M12.75 22V19H14.25V22C14.25 22.4142 13.9142 22.75 13.5 22.75C13.0858 22.75 12.75 22.4142 12.75 22Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M22.75 13.5C22.75 13.0858 22.4142 12.75 22 12.75C21.5858 12.75 21.25 13.0858 21.25 13.5V17H22.75V13.5Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M21.25 19C21.25 19.4762 21.2496 19.7958 21.2327 20.0433C21.2163 20.284 21.1868 20.4012 21.1549 20.4784C21.028 20.7846 20.7846 21.028 20.4784 21.1549C20.4012 21.1868 20.284 21.2163 20.0433 21.2327C19.7958 21.2496 19.4762 21.25 19 21.25H17V22.75H19.0253C19.4697 22.75 19.8408 22.75 20.1454 22.7292C20.4625 22.7076 20.762 22.661 21.0524 22.5407C21.7262 22.2616 22.2616 21.7262 22.5407 21.0524C22.661 20.762 22.7076 20.4625 22.7292 20.1454C22.75 19.8408 22.75 19.4698 22.75 19.0253V19H21.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.1685 16.4444C16 16.6967 16 17.0478 16 17.75C16 18.4522 16 18.8033 16.1685 19.0556C16.2415 19.1648 16.3352 19.2585 16.4444 19.3315C16.6967 19.5 17.0478 19.5 17.75 19.5C18.4522 19.5 18.8033 19.5 19.0556 19.3315C19.1648 19.2585 19.2585 19.1648 19.3315 19.0556C19.5 18.8033 19.5 18.4522 19.5 17.75C19.5 17.0478 19.5 16.6967 19.3315 16.4444C19.2585 16.3352 19.1648 16.2415 19.0556 16.1685C18.8033 16 18.4522 16 17.75 16C17.0478 16 16.6967 16 16.4444 16.1685C16.3352 16.2415 16.2415 16.3352 16.1685 16.4444Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "QrCode";
    },
    65286: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1.25 9C1.25 5.27208 4.27208 2.25 8 2.25H12C15.7279 2.25 18.75 5.27208 18.75 9C18.75 12.7279 15.7279 15.75 12 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H12C14.8995 14.25 17.25 11.8995 17.25 9C17.25 6.10051 14.8995 3.75 12 3.75H8C5.10051 3.75 2.75 6.10051 2.75 9C2.75 10.3451 3.25487 11.5705 4.08664 12.4998C4.36288 12.8085 4.33662 13.2826 4.02797 13.5589C3.71933 13.8351 3.24518 13.8088 2.96894 13.5002C1.90054 12.3065 1.25 10.7283 1.25 9ZM12 9.75C9.10051 9.75 6.75 12.1005 6.75 15C6.75 17.8995 9.10051 20.25 12 20.25H16C18.8995 20.25 21.25 17.8995 21.25 15C21.25 13.6549 20.7451 12.4295 19.9134 11.5002C19.6371 11.1915 19.6634 10.7174 19.972 10.4411C20.2807 10.1649 20.7548 10.1912 21.0311 10.4998C22.0995 11.6935 22.75 13.2717 22.75 15C22.75 18.7279 19.7279 21.75 16 21.75H12C8.27208 21.75 5.25 18.7279 5.25 15C5.25 11.2721 8.27208 8.25 12 8.25H14C14.4142 8.25 14.75 8.58579 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75H12Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M8 2.25C4.27208 2.25 1.25 5.27208 1.25 9C1.25 10.7283 1.90054 12.3065 2.96894 13.5002C3.24518 13.8088 3.71933 13.8351 4.02797 13.5589C4.33662 13.2826 4.36288 12.8085 4.08664 12.4998C3.25487 11.5705 2.75 10.3451 2.75 9C2.75 6.10051 5.10051 3.75 8 3.75H12C14.8995 3.75 17.25 6.10051 17.25 9C17.25 11.8995 14.8995 14.25 12 14.25H10C9.58579 14.25 9.25 14.5858 9.25 15C9.25 15.4142 9.58579 15.75 10 15.75H12C15.7279 15.75 18.75 12.7279 18.75 9C18.75 5.27208 15.7279 2.25 12 2.25H8Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M6.75 15C6.75 12.1005 9.10051 9.75 12 9.75H14C14.4142 9.75 14.75 9.41421 14.75 9C14.75 8.58579 14.4142 8.25 14 8.25H12C8.27208 8.25 5.25 11.2721 5.25 15C5.25 18.7279 8.27208 21.75 12 21.75H16C19.7279 21.75 22.75 18.7279 22.75 15C22.75 13.2717 22.0995 11.6935 21.0311 10.4998C20.7548 10.1912 20.2807 10.1649 19.972 10.4411C19.6634 10.7174 19.6371 11.1915 19.9134 11.5002C20.7451 12.4295 21.25 13.6549 21.25 15C21.25 17.8995 18.8995 20.25 16 20.25H12C9.10051 20.25 6.75 17.8995 6.75 15Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13M16 21C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11M12 21C8.68629 21 6 18.3137 6 15C6 11.6863 8.68629 9 12 9H14",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13M14 9H12C8.68629 9 6 11.6863 6 15C6 18.3137 8.68629 21 12 21H16C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M14 9H12C8.68629 9 6 11.6863 6 15C6 18.3137 8.68629 21 12 21H16C19.3137 21 22 18.3137 22 15C22 13.4633 21.4223 12.0615 20.4722 11",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M10 15H12C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3H8C4.68629 3 2 5.68629 2 9C2 10.5367 2.57771 11.9385 3.52779 13",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M1.25 9C1.25 5.27208 4.27208 2.25 8 2.25H12C15.7279 2.25 18.75 5.27208 18.75 9C18.75 12.7279 15.7279 15.75 12 15.75H10C9.58579 15.75 9.25 15.4142 9.25 15C9.25 14.5858 9.58579 14.25 10 14.25H12C14.8995 14.25 17.25 11.8995 17.25 9C17.25 6.10051 14.8995 3.75 12 3.75H8C5.10051 3.75 2.75 6.10051 2.75 9C2.75 10.3451 3.25487 11.5705 4.08664 12.4998C4.36288 12.8085 4.33662 13.2826 4.02797 13.5589C3.71933 13.8351 3.24518 13.8088 2.96894 13.5002C1.90054 12.3065 1.25 10.7283 1.25 9ZM12 9.75C9.10051 9.75 6.75 12.1005 6.75 15C6.75 17.8995 9.10051 20.25 12 20.25H16C18.8995 20.25 21.25 17.8995 21.25 15C21.25 13.6549 20.7451 12.4295 19.9134 11.5002C19.6371 11.1915 19.6634 10.7174 19.972 10.4411C20.2807 10.1649 20.7548 10.1912 21.0311 10.4998C22.0995 11.6935 22.75 13.2717 22.75 15C22.75 18.7279 19.7279 21.75 16 21.75H12C8.27208 21.75 5.25 18.7279 5.25 15C5.25 11.2721 8.27208 8.25 12 8.25H14C14.4142 8.25 14.75 8.58579 14.75 9C14.75 9.41421 14.4142 9.75 14 9.75H12Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "LinkRound";
    },
    47098: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M4.04537 5.49167L5.49167 4.04537C6.85525 2.68179 7.53704 2 8.38426 2C9.23148 2 9.91327 2.68179 11.2769 4.04537L8.86636 6.45586L4.04537 11.2769L4.04536 11.2768C2.68179 9.91327 2 9.23148 2 8.38426C2 7.53704 2.68179 6.85525 4.04537 5.49167L4.04537 5.49167Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M19.9546 18.5083L18.5083 19.9546C17.1448 21.3182 16.463 22 15.6157 22C14.7685 22 14.0867 21.3182 12.7232 19.9546L12.7231 19.9546L17.5441 15.1336L19.9546 12.7231C21.3182 14.0867 22 14.7685 22 15.6157C22 16.463 21.3182 17.1448 19.9546 18.5083Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M11.4001 18.1612L11.4001 18.1612L18.796 10.7653C17.7894 10.3464 16.5972 9.6582 15.4697 8.53068C14.342 7.40298 13.6537 6.21058 13.2348 5.2039L5.83882 12.5999L5.83879 12.5999C5.26166 13.1771 4.97307 13.4657 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L7.47918 20.5844C8.25351 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5343 19.0269 10.823 18.7383 11.4001 18.1612Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3999 4.03882C14.4121 4.0755 14.4246 4.11268 14.4377 4.15035C14.7628 5.0875 15.3763 6.31601 16.5303 7.47002C17.6843 8.62403 18.9128 9.23749 19.85 9.56262C19.8875 9.57563 19.9245 9.58817 19.961 9.60026L20.8482 8.71306Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M20.8487 8.71306C22.3844 7.17735 22.3844 4.68748 20.8487 3.15178C19.313 1.61607 16.8231 1.61607 15.2874 3.15178L14.4004 4.03882C14.4125 4.0755 14.4251 4.11268 14.4382 4.15035C14.7633 5.0875 15.3768 6.31601 16.5308 7.47002C17.6848 8.62403 18.9133 9.23749 19.8505 9.56262C19.888 9.57563 19.925 9.58817 19.9615 9.60026L20.8487 8.71306Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.4386 4L14.4004 4.03819C14.4125 4.07487 14.4251 4.11206 14.4382 4.14973C14.7633 5.08687 15.3768 6.31538 16.5308 7.4694C17.6848 8.62341 18.9133 9.23686 19.8505 9.56199C19.8876 9.57489 19.9243 9.58733 19.9606 9.59933L11.4001 18.1598C10.823 18.7369 10.5343 19.0255 10.2162 19.2737C9.84082 19.5665 9.43469 19.8175 9.00498 20.0223C8.6407 20.1959 8.25351 20.3249 7.47918 20.583L3.39584 21.9442C3.01478 22.0712 2.59466 21.972 2.31063 21.688C2.0266 21.4039 1.92743 20.9838 2.05445 20.6028L3.41556 16.5194C3.67368 15.7451 3.80273 15.3579 3.97634 14.9936C4.18114 14.5639 4.43213 14.1578 4.7249 13.7824C4.97307 13.4643 5.26165 13.1757 5.83874 12.5986L14.4386 4Z",
              fill: "currentColor",
            }),
            C.createElement(
              "g",
              { opacity: "0.5" },
              C.createElement("path", {
                d: "M5.49167 4.04537L4.04537 5.49167C2.68179 6.85525 2 7.53704 2 8.38426C2 9.23148 2.68179 9.91327 4.04536 11.2768L5.60303 12.8345C5.67593 12.7614 5.75423 12.6831 5.83871 12.5986L12.8349 5.60343L11.2769 4.04537C9.91327 2.68179 9.23148 2 8.38426 2C7.53704 2 6.85525 2.68179 5.49167 4.04537Z",
                fill: "currentColor",
              }),
              C.createElement("path", {
                d: "M18.3957 11.1642L11.4001 18.1598C11.3156 18.2443 11.2372 18.3226 11.1641 18.3956L12.7231 19.9546C14.0867 21.3182 14.7685 22 15.6157 22C16.463 22 17.1448 21.3182 18.5083 19.9546L19.9546 18.5083C21.3182 17.1448 22 16.463 22 15.6157C22 14.7685 21.3182 14.0867 19.9546 12.7231L18.3957 11.1642Z",
                fill: "currentColor",
              })
            ),
            C.createElement("path", {
              d: "M20.1085 12.8771L18.9394 14.0462C18.6465 14.3391 18.6465 14.814 18.9394 15.1069C19.2323 15.3997 19.7072 15.3997 20.0001 15.1069L21.1502 13.9567C20.8715 13.6441 20.5243 13.2932 20.1085 12.8771Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M9.76586 2.61279L8.4394 3.93926C8.1465 4.23215 8.1465 4.70702 8.4394 4.99992C8.73229 5.29281 9.20716 5.29281 9.50006 4.99992L10.8653 3.63468C10.4395 3.21214 10.0847 2.87151 9.76586 2.61279Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M13.2535 19.4243C12.9606 19.1314 12.4857 19.1314 12.1928 19.4243C11.8999 19.7172 11.8999 20.1921 12.1928 20.485L13.2535 19.4243ZM15.6157 22V21.25V22ZM4.04537 5.49167L4.5757 6.022H4.5757L4.04537 5.49167ZM3.51504 11.8072C3.80794 12.1001 4.28281 12.1001 4.5757 11.8072C4.8686 11.5143 4.8686 11.0394 4.5757 10.7465L3.51504 11.8072ZM11.2769 4.04537L11.8072 4.5757C11.9478 4.43505 12.0269 4.24428 12.0269 4.04537C12.0269 3.84646 11.9478 3.65569 11.8072 3.51504L11.2769 4.04537ZM5.49167 4.04537L4.96134 3.51504L4.96134 3.51504L5.49167 4.04537ZM19.9546 12.7231L20.485 12.1928C20.3443 12.0522 20.1535 11.9731 19.9546 11.9731C19.7557 11.9731 19.565 12.0522 19.4243 12.1928L19.9546 12.7231ZM22 15.6157H22.75H22ZM8.33603 5.92553C8.04314 6.21843 8.04314 6.6933 8.33603 6.98619C8.62892 7.27909 9.1038 7.27909 9.39669 6.98619L8.33603 5.92553ZM17.0138 14.6033C16.7209 14.8962 16.7209 15.3711 17.0138 15.664C17.3067 15.9569 17.7816 15.9569 18.0745 15.664L17.0138 14.6033ZM18.4868 21.0343C18.7819 20.7435 18.7854 20.2687 18.4947 19.9736C18.204 19.6786 17.7291 19.675 17.4341 19.9657L18.4868 21.0343ZM19.9274 17.473C19.6363 17.7677 19.6393 18.2426 19.934 18.5336C20.2287 18.8247 20.7036 18.8217 20.9946 18.527L19.9274 17.473ZM4.96134 3.51504L3.51504 4.96134L4.5757 6.022L6.022 4.5757L4.96134 3.51504ZM12.1928 20.485C12.8596 21.1518 13.4119 21.7063 13.9081 22.0849C14.4217 22.4767 14.9622 22.75 15.6157 22.75V21.25C15.422 21.25 15.1981 21.1824 14.818 20.8924C14.4206 20.5892 13.9503 20.1211 13.2535 19.4243L12.1928 20.485ZM3.51504 4.96134C2.84824 5.62814 2.29367 6.18046 1.91508 6.67666C1.52328 7.19018 1.25 7.73073 1.25 8.38426H2.75C2.75 8.19057 2.81761 7.96662 3.10761 7.58654C3.41081 7.18914 3.87892 6.71878 4.5757 6.022L3.51504 4.96134ZM4.5757 10.7465C3.87892 10.0497 3.41081 9.57937 3.10761 9.18198C2.81761 8.8019 2.75 8.57795 2.75 8.38426H1.25C1.25 9.03779 1.52328 9.57835 1.91508 10.0919C2.29367 10.5881 2.84824 11.1404 3.51504 11.8072L4.5757 10.7465ZM11.8072 3.51504C11.1404 2.84824 10.5881 2.29367 10.0919 1.91508C9.57835 1.52328 9.03779 1.25 8.38426 1.25V2.75C8.57795 2.75 8.8019 2.81761 9.18199 3.10761C9.57938 3.41081 10.0497 3.87892 10.7465 4.5757L11.8072 3.51504ZM6.022 4.5757C6.71878 3.87892 7.18914 3.41081 7.58654 3.10761C7.96662 2.81762 8.19057 2.75 8.38426 2.75V1.25C7.73073 1.25 7.19018 1.52328 6.67666 1.91508C6.18046 2.29367 5.62814 2.84824 4.96134 3.51504L6.022 4.5757ZM19.4243 13.2535C20.1211 13.9503 20.5892 14.4206 20.8924 14.818C21.1824 15.1981 21.25 15.422 21.25 15.6157H22.75C22.75 14.9622 22.4767 14.4217 22.0849 13.9081C21.7063 13.4119 21.1518 12.8596 20.485 12.1928L19.4243 13.2535ZM10.7465 3.51504L8.33603 5.92553L9.39669 6.98619L11.8072 4.5757L10.7465 3.51504ZM19.4243 12.1928L17.0138 14.6033L18.0745 15.664L20.485 13.2535L19.4243 12.1928ZM17.4341 19.9657C16.9239 20.4684 16.5635 20.7975 16.2586 21.0043C15.9715 21.199 15.784 21.25 15.6157 21.25V22.75C16.173 22.75 16.6504 22.551 17.1005 22.2457C17.5329 21.9525 17.982 21.5316 18.4868 21.0343L17.4341 19.9657ZM20.9946 18.527C21.504 18.0112 21.9345 17.5549 22.2339 17.1178C22.5457 16.6628 22.75 16.1805 22.75 15.6157H21.25C21.25 15.7859 21.1978 15.9762 20.9966 16.2699C20.783 16.5815 20.4439 16.9499 19.9274 17.473L20.9946 18.527Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L12 6.43872M19.9213 9.63993L14.6607 14.9006L11.5613 18L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021M2.32181 19.8021L3.41556 16.5208C3.67368 15.7465 3.80273 15.3593 3.97634 14.995C4.18114 14.5653 4.43213 14.1592 4.7249 13.7838C4.97308 13.4656 5.26166 13.1771 5.83882 12.5999L8.5 9.93872",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M13.2535 19.4243C12.9606 19.1314 12.4857 19.1314 12.1928 19.4243C11.8999 19.7172 11.8999 20.1921 12.1928 20.485L13.2535 19.4243ZM18.5083 19.9546L19.0387 20.485L18.5083 19.9546ZM4.04537 5.49167L4.5757 6.022H4.5757L4.04537 5.49167ZM3.51504 11.8072C3.80794 12.1001 4.28281 12.1001 4.5757 11.8072C4.8686 11.5143 4.8686 11.0394 4.5757 10.7465L3.51504 11.8072ZM11.2769 4.04537L11.8072 4.5757C11.9478 4.43505 12.0269 4.24428 12.0269 4.04537C12.0269 3.84646 11.9478 3.65569 11.8072 3.51504L11.2769 4.04537ZM5.49167 4.04537L4.96134 3.51504L4.96134 3.51504L5.49167 4.04537ZM19.9546 12.7231L20.485 12.1928C20.3443 12.0522 20.1535 11.9731 19.9546 11.9731C19.7557 11.9731 19.565 12.0522 19.4243 12.1928L19.9546 12.7231ZM19.9546 18.5083L19.4243 17.978L19.9546 18.5083ZM8.33603 5.92553C8.04314 6.21843 8.04314 6.6933 8.33603 6.98619C8.62892 7.27909 9.1038 7.27909 9.39669 6.98619L8.33603 5.92553ZM17.0138 14.6033C16.7209 14.8962 16.7209 15.3711 17.0138 15.664C17.3067 15.9569 17.7816 15.9569 18.0745 15.664L17.0138 14.6033ZM4.96134 3.51504L3.51504 4.96134L4.5757 6.022L6.022 4.5757L4.96134 3.51504ZM19.0387 20.485L20.485 19.0387L19.4243 17.978L17.978 19.4243L19.0387 20.485ZM12.1928 20.485C12.8596 21.1518 13.4119 21.7063 13.9081 22.0849C14.4217 22.4767 14.9622 22.75 15.6157 22.75V21.25C15.422 21.25 15.1981 21.1824 14.818 20.8924C14.4206 20.5892 13.9503 20.1211 13.2535 19.4243L12.1928 20.485ZM17.978 19.4243C17.2812 20.1211 16.8109 20.5892 16.4135 20.8924C16.0334 21.1824 15.8094 21.25 15.6157 21.25V22.75C16.2693 22.75 16.8098 22.4767 17.3233 22.0849C17.8195 21.7063 18.3719 21.1518 19.0387 20.485L17.978 19.4243ZM3.51504 4.96134C2.84824 5.62814 2.29367 6.18046 1.91508 6.67666C1.52328 7.19018 1.25 7.73073 1.25 8.38426H2.75C2.75 8.19057 2.81761 7.96662 3.10761 7.58654C3.41081 7.18914 3.87892 6.71878 4.5757 6.022L3.51504 4.96134ZM4.5757 10.7465C3.87892 10.0497 3.41081 9.57937 3.10761 9.18198C2.81761 8.8019 2.75 8.57795 2.75 8.38426H1.25C1.25 9.03779 1.52328 9.57835 1.91508 10.0919C2.29367 10.5881 2.84824 11.1404 3.51504 11.8072L4.5757 10.7465ZM11.8072 3.51504C11.1404 2.84824 10.5881 2.29367 10.0919 1.91508C9.57835 1.52328 9.03779 1.25 8.38426 1.25V2.75C8.57795 2.75 8.8019 2.81761 9.18199 3.10761C9.57938 3.41081 10.0497 3.87892 10.7465 4.5757L11.8072 3.51504ZM6.022 4.5757C6.71878 3.87892 7.18914 3.41081 7.58654 3.10761C7.96662 2.81762 8.19057 2.75 8.38426 2.75V1.25C7.73073 1.25 7.19018 1.52328 6.67666 1.91508C6.18046 2.29367 5.62814 2.84824 4.96134 3.51504L6.022 4.5757ZM19.4243 13.2535C20.1211 13.9503 20.5892 14.4206 20.8924 14.818C21.1824 15.1981 21.25 15.422 21.25 15.6157H22.75C22.75 14.9622 22.4767 14.4217 22.0849 13.9081C21.7063 13.4119 21.1518 12.8596 20.485 12.1928L19.4243 13.2535ZM20.485 19.0387C21.1518 18.3719 21.7063 17.8195 22.0849 17.3233C22.4767 16.8098 22.75 16.2693 22.75 15.6157H21.25C21.25 15.8094 21.1824 16.0334 20.8924 16.4135C20.5892 16.8109 20.1211 17.2812 19.4243 17.978L20.485 19.0387ZM10.7465 3.51504L8.33603 5.92553L9.39669 6.98619L11.8072 4.5757L10.7465 3.51504ZM19.4243 12.1928L17.0138 14.6033L18.0745 15.664L20.485 13.2535L19.4243 12.1928Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.58917 19L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L5 21.4108L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M13.2535 19.4243C12.9606 19.1314 12.4857 19.1314 12.1928 19.4243C11.8999 19.7172 11.8999 20.1921 12.1928 20.485L13.2535 19.4243ZM18.5083 19.9546L19.0387 20.485L18.5083 19.9546ZM4.04537 5.49167L4.5757 6.022H4.5757L4.04537 5.49167ZM3.51504 11.8072C3.80794 12.1001 4.28281 12.1001 4.5757 11.8072C4.8686 11.5143 4.8686 11.0394 4.5757 10.7465L3.51504 11.8072ZM11.2769 4.04537L11.8072 4.5757C11.9478 4.43505 12.0269 4.24428 12.0269 4.04537C12.0269 3.84646 11.9478 3.65569 11.8072 3.51504L11.2769 4.04537ZM5.49167 4.04537L4.96134 3.51504L4.96134 3.51504L5.49167 4.04537ZM19.9546 12.7231L20.485 12.1928C20.3443 12.0522 20.1535 11.9731 19.9546 11.9731C19.7557 11.9731 19.565 12.0522 19.4243 12.1928L19.9546 12.7231ZM19.9546 18.5083L19.4243 17.978L19.9546 18.5083ZM8.33603 5.92553C8.04314 6.21843 8.04314 6.6933 8.33603 6.98619C8.62892 7.27909 9.1038 7.27909 9.39669 6.98619L8.33603 5.92553ZM17.0138 14.6033C16.7209 14.8962 16.7209 15.3711 17.0138 15.664C17.3067 15.9569 17.7816 15.9569 18.0745 15.664L17.0138 14.6033ZM4.96134 3.51504L3.51504 4.96134L4.5757 6.022L6.022 4.5757L4.96134 3.51504ZM19.0387 20.485L20.485 19.0387L19.4243 17.978L17.978 19.4243L19.0387 20.485ZM12.1928 20.485C12.8596 21.1518 13.4119 21.7063 13.9081 22.0849C14.4217 22.4767 14.9622 22.75 15.6157 22.75V21.25C15.422 21.25 15.1981 21.1824 14.818 20.8924C14.4206 20.5892 13.9503 20.1211 13.2535 19.4243L12.1928 20.485ZM17.978 19.4243C17.2812 20.1211 16.8109 20.5892 16.4135 20.8924C16.0334 21.1824 15.8094 21.25 15.6157 21.25V22.75C16.2693 22.75 16.8098 22.4767 17.3233 22.0849C17.8195 21.7063 18.3719 21.1518 19.0387 20.485L17.978 19.4243ZM3.51504 4.96134C2.84824 5.62814 2.29367 6.18046 1.91508 6.67666C1.52328 7.19018 1.25 7.73073 1.25 8.38426H2.75C2.75 8.19057 2.81761 7.96662 3.10761 7.58654C3.41081 7.18914 3.87892 6.71878 4.5757 6.022L3.51504 4.96134ZM4.5757 10.7465C3.87892 10.0497 3.41081 9.57937 3.10761 9.18198C2.81761 8.8019 2.75 8.57795 2.75 8.38426H1.25C1.25 9.03779 1.52328 9.57835 1.91508 10.0919C2.29367 10.5881 2.84824 11.1404 3.51504 11.8072L4.5757 10.7465ZM11.8072 3.51504C11.1404 2.84824 10.5881 2.29367 10.0919 1.91508C9.57835 1.52328 9.03779 1.25 8.38426 1.25V2.75C8.57795 2.75 8.8019 2.81761 9.18199 3.10761C9.57938 3.41081 10.0497 3.87892 10.7465 4.5757L11.8072 3.51504ZM6.022 4.5757C6.71878 3.87892 7.18914 3.41081 7.58654 3.10761C7.96662 2.81762 8.19057 2.75 8.38426 2.75V1.25C7.73073 1.25 7.19018 1.52328 6.67666 1.91508C6.18046 2.29367 5.62814 2.84824 4.96134 3.51504L6.022 4.5757ZM19.4243 13.2535C20.1211 13.9503 20.5892 14.4206 20.8924 14.818C21.1824 15.1981 21.25 15.422 21.25 15.6157H22.75C22.75 14.9622 22.4767 14.4217 22.0849 13.9081C21.7063 13.4119 21.1518 12.8596 20.485 12.1928L19.4243 13.2535ZM20.485 19.0387C21.1518 18.3719 21.7063 17.8195 22.0849 17.3233C22.4767 16.8098 22.75 16.2693 22.75 15.6157H21.25C21.25 15.8094 21.1824 16.0334 20.8924 16.4135C20.5892 16.8109 20.1211 17.2812 19.4243 17.978L20.485 19.0387ZM10.7465 3.51504L8.33603 5.92553L9.39669 6.98619L11.8072 4.5757L10.7465 3.51504ZM19.4243 12.1928L17.0138 14.6033L18.0745 15.664L20.485 13.2535L19.4243 12.1928Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M4.19792 21.6782L5 21.4108L7.47918 20.5844C8.25352 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178L14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.58917 19L2.32181 19.8021M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M14.3601 4.07861C14.3601 4.07861 14.476 6.04823 16.2139 7.78613C17.9518 9.52403 19.9214 9.63989 19.9214 9.63989",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.58656 3.10761C7.18916 3.41081 6.7188 3.87892 6.02202 4.5757L4.57572 6.022C3.87894 6.71878 3.41083 7.18914 3.10763 7.58654C2.81764 7.96662 2.75002 8.19057 2.75002 8.38426C2.75002 8.57795 2.81764 8.8019 3.10763 9.18198C3.41083 9.57937 3.87894 10.0497 4.57572 10.7465C4.86862 11.0394 4.86862 11.5143 4.57572 11.8072C4.28283 12.1001 3.80796 12.1001 3.51506 11.8072L3.47816 11.7703C2.8278 11.12 2.28668 10.5789 1.9151 10.0919C1.5233 9.57835 1.25002 9.03779 1.25002 8.38426C1.25002 7.73073 1.5233 7.19018 1.9151 6.67666C2.28668 6.18964 2.8278 5.64856 3.47816 4.99824C3.49042 4.98598 3.50272 4.97368 3.51506 4.96134L4.96136 3.51504C4.97369 3.50271 4.98599 3.49041 4.99825 3.47815C5.64857 2.82778 6.18966 2.28666 6.67668 1.91508C7.1902 1.52328 7.73075 1.25 8.38428 1.25C9.03781 1.25 9.57837 1.52328 10.0919 1.91508C10.5789 2.28666 11.12 2.82778 11.7703 3.47814L11.8072 3.51504C11.9479 3.65569 12.0269 3.84646 12.0269 4.04537C12.0269 4.24428 11.9479 4.43505 11.8072 4.5757L9.39671 6.98619C9.10382 7.27909 8.62894 7.27909 8.33605 6.98619C8.04316 6.6933 8.04316 6.21843 8.33605 5.92553L10.215 4.04659C9.79407 3.63157 9.46901 3.32658 9.18201 3.10761C8.80192 2.81761 8.57797 2.75 8.38428 2.75C8.19059 2.75 7.96664 2.81762 7.58656 3.10761ZM19.9547 11.9731C20.1536 11.9731 20.3443 12.0522 20.485 12.1928L20.5219 12.2297C21.1722 12.88 21.7134 13.4211 22.0849 13.9081C22.4767 14.4217 22.75 14.9622 22.75 15.6157C22.75 16.2693 22.4767 16.8098 22.0849 17.3233C21.7134 17.8104 21.1722 18.3514 20.5219 19.0018L19.0018 20.5219C18.3515 21.1722 17.8104 21.7133 17.3234 22.0849C16.8098 22.4767 16.2693 22.75 15.6158 22.75C14.9622 22.75 14.4217 22.4767 13.9082 22.0849C13.4211 21.7133 12.8801 21.1722 12.2297 20.5219L12.1928 20.485C11.8999 20.1921 11.8999 19.7172 12.1928 19.4243C12.4857 19.1314 12.9606 19.1314 13.2535 19.4243C13.9503 20.1211 14.4206 20.5892 14.818 20.8924C15.1981 21.1824 15.4221 21.25 15.6158 21.25C15.8095 21.25 16.0334 21.1824 16.4135 20.8924C16.8109 20.5892 17.2812 20.1211 17.978 19.4243L19.4243 17.978C20.1211 17.2812 20.5892 16.8109 20.8924 16.4135C21.1824 16.0334 21.25 15.8094 21.25 15.6157C21.25 15.422 21.1824 15.1981 20.8924 14.818C20.6734 14.531 20.3685 14.206 19.9534 13.785L18.0745 15.664C17.7816 15.9569 17.3067 15.9569 17.0138 15.664C16.7209 15.3711 16.7209 14.8962 17.0138 14.6033L19.4243 12.1928C19.565 12.0522 19.7557 11.9731 19.9547 11.9731Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.7566 2.62145C16.5852 0.792851 19.55 0.792851 21.3786 2.62145C23.2072 4.45005 23.2072 7.41479 21.3786 9.24339L11.8933 18.7287C11.3514 19.2706 11.0323 19.5897 10.6774 19.8665C10.2592 20.1927 9.80655 20.4725 9.32766 20.7007C8.92136 20.8943 8.49334 21.037 7.76623 21.2793L4.43511 22.3897L3.63303 22.6571C2.98247 22.8739 2.26522 22.7046 1.78032 22.2197C1.29542 21.7348 1.1261 21.0175 1.34296 20.367L2.72068 16.2338C2.96303 15.5067 3.10568 15.0787 3.29932 14.6724C3.52755 14.1935 3.80727 13.7409 4.13354 13.3226C4.41035 12.9677 4.72939 12.6487 5.27137 12.1067L14.7566 2.62145ZM20.3179 3.68211C19.0751 2.4393 17.0601 2.4393 15.8173 3.68211L15.1554 4.34404C15.1896 4.519 15.2474 4.75684 15.3438 5.03487C15.561 5.66083 15.9712 6.48288 16.7442 7.25585C17.5171 8.02881 18.3392 8.43903 18.9651 8.6562C19.2432 8.75266 19.481 8.81046 19.656 8.84466L20.3179 8.18272C21.5607 6.93991 21.5607 4.92492 20.3179 3.68211ZM18.4393 10.0614C17.6506 9.78321 16.6346 9.26763 15.6835 8.31651C14.7324 7.36538 14.2168 6.34939 13.9387 5.56075L6.36917 13.1302C5.77951 13.7199 5.52959 13.9716 5.3163 14.2451C5.05704 14.5775 4.83476 14.9371 4.65341 15.3177C4.50421 15.6307 4.3908 15.9669 4.12709 16.758L3.17992 19.5995L4.40051 20.8201L7.24203 19.8729C8.03314 19.6092 8.36927 19.4958 8.68233 19.3466C9.06287 19.1653 9.42252 18.943 9.75492 18.6837C10.0284 18.4704 10.2801 18.2205 10.8698 17.6308L18.4393 10.0614Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "RulerCrossPen";
    },
    43372: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214),
        o = r(25971),
        l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o.Z }))
      );
      L.displayName = "CheckCircle";
    },
    23860: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M20.5 6H3.49988",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M9.5 11L10 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M14.5 11L14 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M20.5001 6H3.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M9.5 11L10 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M14.5 11L14 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M20.5001 6H3.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M9.5 11L10 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M14.5 11L14 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M12 2.75C11.0215 2.75 10.1871 3.37503 9.87787 4.24993C9.73983 4.64047 9.31134 4.84517 8.9208 4.70713C8.53026 4.56909 8.32557 4.1406 8.46361 3.75007C8.97804 2.29459 10.3661 1.25 12 1.25C13.634 1.25 15.022 2.29459 15.5365 3.75007C15.6745 4.1406 15.4698 4.56909 15.0793 4.70713C14.6887 4.84517 14.2602 4.64047 14.1222 4.24993C13.813 3.37503 12.9785 2.75 12 2.75Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H20.5001C20.9143 5.25 21.2501 5.58579 21.2501 6C21.2501 6.41421 20.9143 6.75 20.5001 6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M5.91508 8.45011C5.88753 8.03681 5.53015 7.72411 5.11686 7.75166C4.70356 7.77921 4.39085 8.13659 4.41841 8.54989L4.88186 15.5016C4.96735 16.7844 5.03641 17.8205 5.19838 18.6336C5.36678 19.4789 5.6532 20.185 6.2448 20.7384C6.83639 21.2919 7.55994 21.5307 8.41459 21.6425C9.23663 21.75 10.2751 21.75 11.5607 21.75H12.4395C13.7251 21.75 14.7635 21.75 15.5856 21.6425C16.4402 21.5307 17.1638 21.2919 17.7554 20.7384C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9637 17.8205 19.0328 16.7844 19.1183 15.5016L19.5818 8.54989C19.6093 8.13659 19.2966 7.77921 18.8833 7.75166C18.47 7.72411 18.1126 8.03681 18.0851 8.45011L17.6251 15.3492C17.5353 16.6971 17.4712 17.6349 17.3307 18.3405C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8988 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8988 7.26957 19.6431C6.99616 19.3873 6.80583 19.025 6.66948 18.3405C6.52891 17.6349 6.46488 16.6971 6.37503 15.3492L5.91508 8.45011Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M9.42546 10.2537C9.83762 10.2125 10.2051 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29502 16.4868 9.25381 16.0746L8.75381 11.0746C8.71259 10.6625 9.0133 10.2949 9.42546 10.2537Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M15.2464 11.0746C15.2876 10.6625 14.9869 10.2949 14.5747 10.2537C14.1626 10.2125 13.795 10.5132 13.7538 10.9254L13.2538 15.9254C13.2126 16.3375 13.5133 16.7051 13.9255 16.7463C14.3376 16.7875 14.7051 16.4868 14.7464 16.0746L15.2464 11.0746Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "TrashBinMinimalistic";
    },
    94053: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4ZM13.25 9C13.25 8.58579 13.5858 8.25 14 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9C19.75 9.41421 19.4142 9.75 19 9.75H14C13.5858 9.75 13.25 9.41421 13.25 9ZM14.25 12C14.25 11.5858 14.5858 11.25 15 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H15C14.5858 12.75 14.25 12.4142 14.25 12ZM15.25 15C15.25 14.5858 15.5858 14.25 16 14.25H19C19.4142 14.25 19.75 14.5858 19.75 15C19.75 15.4142 19.4142 15.75 19 15.75H16C15.5858 15.75 15.25 15.4142 15.25 15ZM11 9C11 10.1046 10.1046 11 9 11C7.89543 11 7 10.1046 7 9C7 7.89543 7.89543 7 9 7C10.1046 7 11 7.89543 11 9ZM9 17C13 17 13 16.1046 13 15C13 13.8954 11.2091 13 9 13C6.79086 13 5 13.8954 5 15C5 16.1046 5 17 9 17Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M13.25 9C13.25 8.58579 13.5858 8.25 14 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9C19.75 9.41421 19.4142 9.75 19 9.75H14C13.5858 9.75 13.25 9.41421 13.25 9Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M14.25 12C14.25 11.5858 14.5858 11.25 15 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H15C14.5858 12.75 14.25 12.4142 14.25 12Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M15.25 15C15.25 14.5858 15.5858 14.25 16 14.25H19C19.4142 14.25 19.75 14.5858 19.75 15C19.75 15.4142 19.4142 15.75 19 15.75H16C15.5858 15.75 15.25 15.4142 15.25 15Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M9 17C13 17 13 16.1046 13 15C13 13.8954 11.2091 13 9 13C6.79086 13 5 13.8954 5 15C5 16.1046 5 17 9 17Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9",
              cy: "9",
              r: "2",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.298 5.64118 21.5794 6.2255 21.748 7",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M19 12H15",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M19 9H14",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M19 15H16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9",
              cy: "9",
              r: "2",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M19 12H15",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M19 9H14",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M19 15H16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9",
              cy: "9",
              r: "2",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M13 15C13 16.1046 13 17 9 17C5 17 5 16.1046 5 15C5 13.8954 6.79086 13 9 13C11.2091 13 13 13.8954 13 15Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M19 12H15",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M19 9H14",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              opacity: "0.9",
              d: "M19 15H16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9 6.25C7.48122 6.25 6.25 7.48122 6.25 9C6.25 10.5188 7.48122 11.75 9 11.75C10.5188 11.75 11.75 10.5188 11.75 9C11.75 7.48122 10.5188 6.25 9 6.25ZM7.75 9C7.75 8.30965 8.30965 7.75 9 7.75C9.69036 7.75 10.25 8.30965 10.25 9C10.25 9.69036 9.69036 10.25 9 10.25C8.30965 10.25 7.75 9.69036 7.75 9Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9 12.25C7.80424 12.25 6.68461 12.4907 5.83616 12.915C5.03258 13.3168 4.25 14.0106 4.25 15L4.24987 15.0625C4.24834 15.5728 4.24576 16.4322 5.06023 17.0218C5.43818 17.2953 5.9369 17.4698 6.55469 17.581C7.1782 17.6932 7.97721 17.75 9 17.75C10.0228 17.75 10.8218 17.6932 11.4453 17.581C12.0631 17.4698 12.5618 17.2953 12.9398 17.0218C13.7542 16.4322 13.7517 15.5728 13.7501 15.0625L13.75 15C13.75 14.0106 12.9674 13.3168 12.1638 12.915C11.3154 12.4907 10.1958 12.25 9 12.25ZM5.75 15C5.75 14.8848 5.86285 14.5787 6.50698 14.2566C7.10625 13.957 7.98662 13.75 9 13.75C10.0134 13.75 10.8937 13.957 11.493 14.2566C12.1371 14.5787 12.25 14.8848 12.25 15C12.25 15.6045 12.2115 15.6972 12.0602 15.8067C11.9382 15.895 11.6869 16.0134 11.1797 16.1047C10.6782 16.1949 9.97721 16.25 9 16.25C8.02279 16.25 7.3218 16.1949 6.82031 16.1047C6.31311 16.0134 6.06182 15.895 5.93977 15.8067C5.78849 15.6972 5.75 15.6045 5.75 15Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M19 12.75C19.4142 12.75 19.75 12.4142 19.75 12C19.75 11.5858 19.4142 11.25 19 11.25H15C14.5858 11.25 14.25 11.5858 14.25 12C14.25 12.4142 14.5858 12.75 15 12.75H19Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M19.75 9C19.75 9.41422 19.4142 9.75 19 9.75H14C13.5858 9.75 13.25 9.41422 13.25 9C13.25 8.58579 13.5858 8.25 14 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M19 15.75C19.4142 15.75 19.75 15.4142 19.75 15C19.75 14.5858 19.4142 14.25 19 14.25H16C15.5858 14.25 15.25 14.5858 15.25 15C15.25 15.4142 15.5858 15.75 16 15.75H19Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65018 22.75 10.1058 22.75 11.9435V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0565 20.75H9.94359C8.10585 20.75 6.65018 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10583 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02503 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02503 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02503 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02503 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "UserId";
    },
    70311: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return L;
        },
      });
      var C = r(2265),
        n = r(59214);
      let o = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9.00098",
              cy: "6",
              r: "4",
              fill: "currentColor",
            }),
            C.createElement("ellipse", {
              cx: "9.00098",
              cy: "17.001",
              rx: "7",
              ry: "4",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M20.9996 17.0005C20.9996 18.6573 18.9641 20.0004 16.4788 20.0004C17.211 19.2001 17.7145 18.1955 17.7145 17.0018C17.7145 15.8068 17.2098 14.8013 16.4762 14.0005C18.9615 14.0005 20.9996 15.3436 20.9996 17.0005Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M17.9996 6.00073C17.9996 7.65759 16.6565 9.00073 14.9996 9.00073C14.6383 9.00073 14.292 8.93687 13.9712 8.81981C14.4443 7.98772 14.7145 7.02522 14.7145 5.99962C14.7145 4.97477 14.4447 4.01294 13.9722 3.18127C14.2927 3.06446 14.6387 3.00073 14.9996 3.00073C16.6565 3.00073 17.9996 4.34388 17.9996 6.00073Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              opacity: "0.4",
              cx: "15",
              cy: "6",
              r: "3",
              fill: "currentColor",
            }),
            C.createElement("ellipse", {
              opacity: "0.4",
              cx: "16",
              cy: "17",
              rx: "5",
              ry: "3",
              fill: "currentColor",
            }),
            C.createElement("circle", {
              cx: "9.00098",
              cy: "6",
              r: "4",
              fill: "currentColor",
            }),
            C.createElement("ellipse", {
              cx: "9.00098",
              cy: "17.001",
              rx: "7",
              ry: "4",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9",
              cy: "6",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M5.88915 20.5843C6.82627 20.8504 7.88256 21 9 21C12.866 21 16 19.2091 16 17C16 14.7909 12.866 13 9 13C5.13401 13 2 14.7909 2 17C2 17.3453 2.07657 17.6804 2.22053 18",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("path", {
              d: "M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9",
              cy: "6",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M15 9C16.6569 9 18 7.65685 18 6C18 4.34315 16.6569 3 15 3",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            C.createElement("ellipse", {
              cx: "9",
              cy: "17",
              rx: "7",
              ry: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "9",
              cy: "6",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M12.5 4.3411C13.0375 3.53275 13.9565 3 15 3C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9C13.9565 9 13.0375 8.46725 12.5 7.6589",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("ellipse", {
              cx: "9",
              cy: "17",
              rx: "7",
              ry: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              opacity: "0.5",
              d: "M18 14C19.7542 14.3847 21 15.3589 21 16.5C21 17.5293 19.9863 18.4229 18.5 18.8704",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9 1.25C6.37665 1.25 4.25 3.37665 4.25 6C4.25 8.62335 6.37665 10.75 9 10.75C11.6234 10.75 13.75 8.62335 13.75 6C13.75 3.37665 11.6234 1.25 9 1.25ZM5.75 6C5.75 4.20507 7.20507 2.75 9 2.75C10.7949 2.75 12.25 4.20507 12.25 6C12.25 7.79493 10.7949 9.25 9 9.25C7.20507 9.25 5.75 7.79493 5.75 6Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M15 2.25C14.5858 2.25 14.25 2.58579 14.25 3C14.25 3.41421 14.5858 3.75 15 3.75C16.2426 3.75 17.25 4.75736 17.25 6C17.25 7.24264 16.2426 8.25 15 8.25C14.5858 8.25 14.25 8.58579 14.25 9C14.25 9.41421 14.5858 9.75 15 9.75C17.0711 9.75 18.75 8.07107 18.75 6C18.75 3.92893 17.0711 2.25 15 2.25Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.67815 13.5204C5.07752 12.7208 6.96067 12.25 9 12.25C11.0393 12.25 12.9225 12.7208 14.3219 13.5204C15.7 14.3079 16.75 15.5101 16.75 17C16.75 18.4899 15.7 19.6921 14.3219 20.4796C12.9225 21.2792 11.0393 21.75 9 21.75C6.96067 21.75 5.07752 21.2792 3.67815 20.4796C2.3 19.6921 1.25 18.4899 1.25 17C1.25 15.5101 2.3 14.3079 3.67815 13.5204ZM4.42236 14.8228C3.26701 15.483 2.75 16.2807 2.75 17C2.75 17.7193 3.26701 18.517 4.42236 19.1772C5.55649 19.8253 7.17334 20.25 9 20.25C10.8267 20.25 12.4435 19.8253 13.5776 19.1772C14.733 18.517 15.25 17.7193 15.25 17C15.25 16.2807 14.733 15.483 13.5776 14.8228C12.4435 14.1747 10.8267 13.75 9 13.75C7.17334 13.75 5.55649 14.1747 4.42236 14.8228Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M18.1607 13.2674C17.7561 13.1787 17.3561 13.4347 17.2674 13.8393C17.1787 14.2439 17.4347 14.6439 17.8393 14.7326C18.6317 14.9064 19.2649 15.2048 19.6829 15.5468C20.1014 15.8892 20.25 16.2237 20.25 16.5C20.25 16.7507 20.1294 17.045 19.7969 17.3539C19.462 17.665 18.9475 17.9524 18.2838 18.1523C17.8871 18.2717 17.6624 18.69 17.7818 19.0867C17.9013 19.4833 18.3196 19.708 18.7162 19.5886C19.5388 19.3409 20.2743 18.9578 20.8178 18.4529C21.3637 17.9457 21.75 17.2786 21.75 16.5C21.75 15.6352 21.2758 14.912 20.6328 14.3859C19.9893 13.8593 19.1225 13.4783 18.1607 13.2674Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var l = Object.defineProperty,
        a = Object.defineProperties,
        c = Object.getOwnPropertyDescriptors,
        i = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        p = (e, t) => {
          for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) u.call(t, r) && s(e, r, t[r]);
          return e;
        },
        m = (e, t) => a(e, c(t));
      let L = (0, C.forwardRef)((e, t) =>
        C.createElement(n.Z, m(p({ ref: t }, e), { weights: o }))
      );
      L.displayName = "UsersGroupRounded";
    },
    25971: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var C = r(2265);
      let n = new Map([
        [
          "Bold",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              opacity: "0.5",
              d: "M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              d: "M16.0303 8.96967C16.3232 9.26256 16.3232 9.73744 16.0303 10.0303L11.0303 15.0303C10.7374 15.3232 10.2626 15.3232 9.96967 15.0303L7.96967 13.0303C7.67678 12.7374 7.67678 12.2626 7.96967 11.9697C8.26256 11.6768 8.73744 11.6768 9.03033 11.9697L10.5 13.4393L12.7348 11.2045L14.9697 8.96967C15.2626 8.67678 15.7374 8.67678 16.0303 8.96967Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M8.5 12.5L10.5 14.5L15.5 9.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            C.createElement("path", {
              d: "M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M8.5 12.5L10.5 14.5L15.5 9.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("circle", {
              opacity: "0.5",
              cx: "12",
              cy: "12",
              r: "10",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            C.createElement("path", {
              d: "M8.5 12.5L10.5 14.5L15.5 9.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Outline",
          C.createElement(
            C.Fragment,
            null,
            C.createElement("path", {
              d: "M16.0303 10.0303C16.3232 9.73744 16.3232 9.26256 16.0303 8.96967C15.7374 8.67678 15.2626 8.67678 14.9697 8.96967L10.5 13.4393L9.03033 11.9697C8.73744 11.6768 8.26256 11.6768 7.96967 11.9697C7.67678 12.2626 7.67678 12.7374 7.96967 13.0303L9.96967 15.0303C10.2626 15.3232 10.7374 15.3232 11.0303 15.0303L16.0303 10.0303Z",
              fill: "currentColor",
            }),
            C.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
    },
  },
]);
