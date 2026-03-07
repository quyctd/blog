(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7539],
  {
    26430: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(2265),
        o = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "defs",
                attrs: {},
                children: [{ tag: "style", attrs: {} }],
              },
              {
                tag: "path",
                attrs: {
                  d: "M899.1 869.6l-53-305.6H864c14.4 0 26-11.6 26-26V346c0-14.4-11.6-26-26-26H618V138c0-14.4-11.6-26-26-26H432c-14.4 0-26 11.6-26 26v182H160c-14.4 0-26 11.6-26 26v192c0 14.4 11.6 26 26 26h17.9l-53 305.6a25.95 25.95 0 0025.6 30.4h723c1.5 0 3-.1 4.4-.4a25.88 25.88 0 0021.2-30zM204 390h272V182h72v208h272v104H204V390zm468 440V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H416V674c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v156H202.8l45.1-260H776l45.1 260H672z",
                },
              },
            ],
          },
          name: "clear",
          theme: "outlined",
        },
        a = r(55015);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var i = n.forwardRef((e, t) =>
        n.createElement(a.Z, c({}, e, { ref: t, icon: o }))
      );
    },
    29271: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      var n = r(2265),
        o = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z",
                },
              },
              {
                tag: "path",
                attrs: {
                  d: "M464 688a48 48 0 1096 0 48 48 0 10-96 0zm24-112h48c4.4 0 8-3.6 8-8V296c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8z",
                },
              },
            ],
          },
          name: "exclamation-circle",
          theme: "outlined",
        },
        a = r(55015);
      function c() {
        return (c = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      var i = n.forwardRef((e, t) =>
        n.createElement(a.Z, c({}, e, { ref: t, icon: o }))
      );
    },
    35713: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return D;
        },
      });
      var n = r(2265),
        o = r(77031),
        a = r(61994),
        c = r(93350),
        i = r(80052),
        l = r(18390),
        s = r(19722),
        C = r(71744);
      let u = (e) => {
        let t;
        let { prefixCls: r, value: o, current: c, offset: i = 0 } = e;
        return (
          i &&
            (t = { position: "absolute", top: "".concat(i, "00%"), left: 0 }),
          n.createElement(
            "span",
            {
              style: t,
              className: (0, a.W)("".concat(r, "-only-unit"), { current: c }),
            },
            o
          )
        );
      };
      var d = (e) => {
        let t, r;
        let { prefixCls: o, count: a, value: c } = e,
          i = Number(c),
          l = Math.abs(a),
          [s, C] = n.useState(i),
          [d, m] = n.useState(l),
          p = () => {
            C(i), m(l);
          };
        if (
          (n.useEffect(() => {
            let e = setTimeout(p, 1e3);
            return () => clearTimeout(e);
          }, [i]),
          s === i || Number.isNaN(i) || Number.isNaN(s))
        )
          (t = [n.createElement(u, { ...e, key: i, current: !0 })]),
            (r = { transition: "none" });
        else {
          t = [];
          let o = i + 10,
            a = [];
          for (let e = i; e <= o; e += 1) a.push(e);
          let c = d < l ? 1 : -1,
            C = a.findIndex((e) => e % 10 === s);
          (t = (c < 0 ? a.slice(0, C + 1) : a.slice(C)).map((t, r) =>
            n.createElement(u, {
              ...e,
              key: t,
              value: t % 10,
              offset: c < 0 ? r - C : r,
              current: r === C,
            })
          )),
            (r = {
              transform: "translateY(".concat(
                -(function (e, t, r) {
                  let n = e,
                    o = 0;
                  for (; (n + 10) % 10 !== t; ) (n += r), (o += r);
                  return o;
                })(s, i, c),
                "00%)"
              ),
            });
        }
        return n.createElement(
          "span",
          { className: "".concat(o, "-only"), style: r, onTransitionEnd: p },
          t
        );
      };
      let m = n.forwardRef((e, t) => {
        let {
            prefixCls: r,
            count: o,
            className: c,
            motionClassName: i,
            style: l,
            title: u,
            show: m,
            component: p = "sup",
            children: f,
            ...h
          } = e,
          { getPrefixCls: L } = n.useContext(C.E_),
          M = L("scroll-number", r),
          b = {
            ...h,
            "data-show": m,
            style: l,
            className: (0, a.W)(M, c, i),
            title: u,
          },
          g = o;
        if (o && Number(o) % 1 == 0) {
          let e = String(o).split("");
          g = n.createElement(
            "bdi",
            null,
            e.map((t, r) =>
              n.createElement(d, {
                prefixCls: M,
                count: Number(o),
                value: t,
                key: e.length - r,
              })
            )
          );
        }
        return ((null == l ? void 0 : l.borderColor) &&
          (b.style = {
            ...l,
            boxShadow: "0 0 0 1px ".concat(l.borderColor, " inset"),
          }),
        f)
          ? (0, s.Tm)(f, (e) => ({
              className: (0, a.W)(
                "".concat(M, "-custom-component"),
                null == e ? void 0 : e.className,
                i
              ),
            }))
          : n.createElement(p, { ...b, ref: t }, g);
      });
      var p = r(38775),
        f = r(12918),
        h = r(18536),
        L = r(19224),
        M = r(99320);
      let b = new p.E4("antStatusProcessing", {
          "0%": { transform: "scale(0.8)", opacity: 0.5 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        }),
        g = new p.E4("antZoomBadgeIn", {
          "0%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
          "100%": { transform: "scale(1) translate(50%, -50%)" },
        }),
        k = new p.E4("antZoomBadgeOut", {
          "0%": { transform: "scale(1) translate(50%, -50%)" },
          "100%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
        }),
        y = new p.E4("antNoWrapperZoomBadgeIn", {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)" },
        }),
        E = new p.E4("antNoWrapperZoomBadgeOut", {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)", opacity: 0 },
        }),
        v = new p.E4("antBadgeLoadingCircle", {
          "0%": { transformOrigin: "50%" },
          "100%": {
            transform: "translate(50%, -50%) rotate(360deg)",
            transformOrigin: "50%",
          },
        }),
        Z = (e) => {
          let {
              componentCls: t,
              iconCls: r,
              antCls: n,
              badgeShadowSize: o,
              textFontSize: a,
              textFontSizeSM: c,
              statusSize: i,
              dotSize: l,
              textFontWeight: s,
              indicatorHeight: C,
              indicatorHeightSM: u,
              marginXS: d,
              calc: m,
            } = e,
            L = "".concat(n, "-scroll-number"),
            M = (0, h.Z)(e, (e, r) => {
              let { darkColor: n } = r;
              return {
                ["&".concat(t, " ").concat(t, "-color-").concat(e)]: {
                  background: n,
                  ["&:not(".concat(t, "-count)")]: { color: n },
                  "a:hover &": { background: n },
                },
              };
            });
          return {
            [t]: {
              ...(0, f.Wf)(e),
              position: "relative",
              display: "inline-block",
              width: "fit-content",
              lineHeight: 1,
              ["".concat(t, "-count")]: {
                display: "inline-flex",
                justifyContent: "center",
                zIndex: e.indicatorZIndex,
                minWidth: C,
                height: C,
                color: e.badgeTextColor,
                fontWeight: s,
                fontSize: a,
                lineHeight: (0, p.bf)(C),
                whiteSpace: "nowrap",
                textAlign: "center",
                background: e.badgeColor,
                borderRadius: m(C).div(2).equal(),
                boxShadow: "0 0 0 "
                  .concat((0, p.bf)(o), " ")
                  .concat(e.badgeShadowColor),
                transition: "background ".concat(e.motionDurationMid),
                a: { color: e.badgeTextColor },
                "a:hover": { color: e.badgeTextColor },
                "a:hover &": { background: e.badgeColorHover },
              },
              ["".concat(t, "-count-sm")]: {
                minWidth: u,
                height: u,
                fontSize: c,
                lineHeight: (0, p.bf)(u),
                borderRadius: m(u).div(2).equal(),
              },
              ["".concat(t, "-multiple-words")]: {
                padding: "0 ".concat((0, p.bf)(e.paddingXS)),
                bdi: { unicodeBidi: "plaintext" },
              },
              ["".concat(t, "-dot")]: {
                zIndex: e.indicatorZIndex,
                width: l,
                minWidth: l,
                height: l,
                background: e.badgeColor,
                borderRadius: "100%",
                boxShadow: "0 0 0 "
                  .concat((0, p.bf)(o), " ")
                  .concat(e.badgeShadowColor),
              },
              [""
                .concat(t, "-count, ")
                .concat(t, "-dot, ")
                .concat(L, "-custom-component")]: {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                transform: "translate(50%, -50%)",
                transformOrigin: "100% 0%",
                ["&".concat(r, "-spin")]: {
                  animationName: v,
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
                  width: i,
                  height: i,
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
                    borderWidth: o,
                    borderStyle: "solid",
                    borderColor: "inherit",
                    borderRadius: "50%",
                    animationName: b,
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
                  marginInlineStart: d,
                  color: e.colorText,
                  fontSize: e.fontSize,
                },
              },
              ...M,
              ["".concat(t, "-zoom-appear, ").concat(t, "-zoom-enter")]: {
                animationName: g,
                animationDuration: e.motionDurationSlow,
                animationTimingFunction: e.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["".concat(t, "-zoom-leave")]: {
                animationName: k,
                animationDuration: e.motionDurationSlow,
                animationTimingFunction: e.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["&".concat(t, "-not-a-wrapper")]: {
                ["".concat(t, "-zoom-appear, ").concat(t, "-zoom-enter")]: {
                  animationName: y,
                  animationDuration: e.motionDurationSlow,
                  animationTimingFunction: e.motionEaseOutBack,
                },
                ["".concat(t, "-zoom-leave")]: {
                  animationName: E,
                  animationDuration: e.motionDurationSlow,
                  animationTimingFunction: e.motionEaseOutBack,
                },
                ["&:not(".concat(t, "-status)")]: { verticalAlign: "middle" },
                ["".concat(L, "-custom-component, ").concat(t, "-count")]: {
                  transform: "none",
                },
                ["".concat(L, "-custom-component, ").concat(L)]: {
                  position: "relative",
                  top: "auto",
                  display: "block",
                  transformOrigin: "50% 50%",
                },
              },
              [L]: {
                overflow: "hidden",
                transition: "all "
                  .concat(e.motionDurationMid, " ")
                  .concat(e.motionEaseOutBack),
                ["".concat(L, "-only")]: {
                  position: "relative",
                  display: "inline-block",
                  height: C,
                  transition: "all "
                    .concat(e.motionDurationSlow, " ")
                    .concat(e.motionEaseOutBack),
                  WebkitTransformStyle: "preserve-3d",
                  WebkitBackfaceVisibility: "hidden",
                  ["> p".concat(L, "-only-unit")]: {
                    height: C,
                    margin: 0,
                    WebkitTransformStyle: "preserve-3d",
                    WebkitBackfaceVisibility: "hidden",
                  },
                },
                ["".concat(L, "-symbol")]: { verticalAlign: "top" },
              },
              "&-rtl": {
                direction: "rtl",
                [""
                  .concat(t, "-count, ")
                  .concat(t, "-dot, ")
                  .concat(L, "-custom-component")]: {
                  transform: "translate(-50%, -50%)",
                },
              },
            },
          };
        },
        H = (e) => {
          let {
              fontHeight: t,
              lineWidth: r,
              marginXS: n,
              colorBorderBg: o,
            } = e,
            a = e.colorTextLightSolid,
            c = e.colorError,
            i = e.colorErrorHover;
          return (0, L.IX)(e, {
            badgeFontHeight: t,
            badgeShadowSize: r,
            badgeTextColor: a,
            badgeColor: c,
            badgeColorHover: i,
            badgeShadowColor: o,
            badgeProcessingDuration: "1.2s",
            badgeRibbonOffset: n,
            badgeRibbonCornerTransform: "scaleY(0.75)",
            badgeRibbonCornerFilter: "brightness(75%)",
          });
        },
        w = (e) => {
          let { fontSize: t, lineHeight: r, fontSizeSM: n, lineWidth: o } = e;
          return {
            indicatorZIndex: "auto",
            indicatorHeight: Math.round(t * r) - 2 * o,
            indicatorHeightSM: t,
            dotSize: n / 2,
            textFontSize: n,
            textFontSizeSM: n,
            textFontWeight: "normal",
            statusSize: n / 2,
          };
        };
      var O = (0, M.I$)("Badge", (e) => Z(H(e)), w);
      let S = n.forwardRef((e, t) => {
          let {
              prefixCls: r,
              scrollNumberPrefixCls: u,
              children: d,
              status: p,
              text: f,
              color: h,
              count: L = null,
              overflowCount: M = 99,
              dot: b = !1,
              size: g = "default",
              title: k,
              offset: y,
              style: E,
              className: v,
              rootClassName: Z,
              classNames: H,
              styles: w,
              showZero: S = !1,
              ...$
            } = e,
            {
              getPrefixCls: W,
              direction: D,
              className: N,
              style: R,
              classNames: V,
              styles: F,
            } = (0, C.dj)("badge"),
            P = W("badge", r),
            [j, x] = O(P),
            I = { ...e, overflowCount: M, size: g, dot: b, showZero: S },
            [T, B] = (0, i.MW)([V, H], [F, w], { props: I }),
            z = L > M ? "".concat(M, "+") : L,
            _ = "0" === z || 0 === z || "0" === f || 0 === f,
            Y = null === L || (_ && !S),
            A = ((0, l.Z)(p) || (0, l.Z)(h)) && Y,
            q = (0, l.Z)(p) || !_,
            U = b && !_,
            J = U ? "" : z,
            X = (0, n.useMemo)(
              () =>
                (((!(0, l.Z)(J) || "" === J) && (!(0, l.Z)(f) || "" === f)) ||
                  (_ && !S)) &&
                !U,
              [J, _, S, U, f]
            ),
            Q = (0, n.useRef)(L);
          X || (Q.current = L);
          let G = Q.current,
            K = (0, n.useRef)(J);
          X || (K.current = J);
          let ee = K.current,
            et = (0, n.useRef)(U);
          X || (et.current = U);
          let er = (0, n.useMemo)(() => {
              if (!y) return { ...R, ...E };
              let e = Number.parseInt(y[0], 10);
              return { marginTop: y[1], insetInlineEnd: -e, ...R, ...E };
            }, [y, E, R]),
            en =
              null != k
                ? k
                : "string" == typeof G || "number" == typeof G
                ? G
                : void 0,
            eo = !X && (0 === f ? S : !!f && !0 !== f),
            ea = eo
              ? n.createElement(
                  "span",
                  { className: "".concat(P, "-status-text") },
                  f
                )
              : null,
            ec =
              G && "object" == typeof G
                ? (0, s.Tm)(G, (e) => ({ style: { ...er, ...e.style } }))
                : void 0,
            ei = (0, c.o2)(h, !1),
            el = (0, a.W)(T.indicator, {
              ["".concat(P, "-status-dot")]: A,
              ["".concat(P, "-status-").concat(p)]: !!p,
              ["".concat(P, "-color-").concat(h)]: ei,
            }),
            es = {};
          h && !ei && ((es.color = h), (es.background = h));
          let eC = (0, a.W)(
            P,
            {
              ["".concat(P, "-status")]: A,
              ["".concat(P, "-not-a-wrapper")]: !d,
              ["".concat(P, "-rtl")]: "rtl" === D,
            },
            v,
            Z,
            N,
            T.root,
            j,
            x
          );
          if (!d && A && (f || q || !Y)) {
            let e = er.color;
            return n.createElement(
              "span",
              { ...$, className: eC, style: { ...B.root, ...er } },
              n.createElement("span", {
                className: el,
                style: { ...B.indicator, ...es },
              }),
              eo &&
                n.createElement(
                  "span",
                  {
                    style: { color: e },
                    className: "".concat(P, "-status-text"),
                  },
                  f
                )
            );
          }
          return n.createElement(
            "span",
            { ref: t, ...$, className: eC, style: B.root },
            d,
            n.createElement(
              o.ZP,
              {
                visible: !X,
                motionName: "".concat(P, "-zoom"),
                motionAppear: !1,
                motionDeadline: 1e3,
              },
              (e) => {
                let { className: t } = e,
                  r = W("scroll-number", u),
                  o = et.current,
                  c = (0, a.W)(T.indicator, {
                    ["".concat(P, "-dot")]: o,
                    ["".concat(P, "-count")]: !o,
                    ["".concat(P, "-count-sm")]: "small" === g,
                    ["".concat(P, "-multiple-words")]:
                      !o && ee && ee.toString().length > 1,
                    ["".concat(P, "-status-").concat(p)]: !!p,
                    ["".concat(P, "-color-").concat(h)]: ei,
                  }),
                  i = { ...B.indicator, ...er };
                return (
                  h && !ei && ((i = i || {}).background = h),
                  n.createElement(
                    m,
                    {
                      prefixCls: r,
                      show: !X,
                      motionClassName: t,
                      className: c,
                      count: ee,
                      title: en,
                      style: i,
                      key: "scrollNumber",
                    },
                    ec
                  )
                );
              }
            ),
            ea
          );
        }),
        $ = (e) => {
          let {
              antCls: t,
              badgeFontHeight: r,
              marginXS: n,
              badgeRibbonOffset: o,
              calc: a,
            } = e,
            c = "".concat(t, "-ribbon"),
            i = (0, h.Z)(e, (e, t) => {
              let { darkColor: r } = t;
              return {
                ["&".concat(c, "-color-").concat(e)]: {
                  background: r,
                  color: r,
                },
              };
            });
          return {
            ["".concat(t, "-ribbon-wrapper")]: { position: "relative" },
            [c]: {
              ...(0, f.Wf)(e),
              position: "absolute",
              top: n,
              padding: "0 ".concat((0, p.bf)(e.paddingXS)),
              color: e.colorPrimary,
              lineHeight: (0, p.bf)(r),
              whiteSpace: "nowrap",
              backgroundColor: e.colorPrimary,
              borderRadius: e.borderRadiusSM,
              ["".concat(c, "-content")]: { color: e.badgeTextColor },
              ["".concat(c, "-corner")]: {
                position: "absolute",
                top: "100%",
                width: o,
                height: o,
                color: "currentcolor",
                border: "".concat((0, p.bf)(a(o).div(2).equal()), " solid"),
                transform: e.badgeRibbonCornerTransform,
                transformOrigin: "top",
                filter: e.badgeRibbonCornerFilter,
              },
              ...i,
              ["&".concat(c, "-placement-end")]: {
                insetInlineEnd: a(o).mul(-1).equal(),
                borderEndEndRadius: 0,
                ["".concat(c, "-corner")]: {
                  insetInlineEnd: 0,
                  borderInlineEndColor: "transparent",
                  borderBlockEndColor: "transparent",
                },
              },
              ["&".concat(c, "-placement-start")]: {
                insetInlineStart: a(o).mul(-1).equal(),
                borderEndStartRadius: 0,
                ["".concat(c, "-corner")]: {
                  insetInlineStart: 0,
                  borderBlockEndColor: "transparent",
                  borderInlineStartColor: "transparent",
                },
              },
              "&-rtl": { direction: "rtl" },
            },
          };
        };
      var W = (0, M.I$)(["Badge", "Ribbon"], (e) => $(H(e)), w);
      S.Ribbon = (e) => {
        let {
            className: t,
            prefixCls: r,
            style: o,
            color: l,
            children: s,
            text: u,
            placement: d = "end",
            rootClassName: m,
            styles: p,
            classNames: f,
          } = e,
          {
            getPrefixCls: h,
            direction: L,
            className: M,
            style: b,
            classNames: g,
            styles: k,
          } = (0, C.dj)("ribbon"),
          y = h("ribbon", r),
          E = "".concat(y, "-wrapper"),
          [v, Z] = W(y, E),
          H = { ...e, placement: d },
          [w, O] = (0, i.MW)([g, f], [k, p], { props: H }),
          S = (0, c.o2)(l, !1),
          $ = (0, a.W)(
            y,
            "".concat(y, "-placement-").concat(d),
            {
              ["".concat(y, "-rtl")]: "rtl" === L,
              ["".concat(y, "-color-").concat(l)]: S,
            },
            t,
            M,
            w.indicator
          ),
          D = {},
          N = {};
        return (
          l && !S && ((D.background = l), (N.color = l)),
          n.createElement(
            "div",
            { className: (0, a.W)(E, m, v, Z, w.root), style: O.root },
            s,
            n.createElement(
              "div",
              {
                className: (0, a.W)($, v),
                style: { ...D, ...O.indicator, ...b, ...o },
              },
              n.createElement(
                "span",
                {
                  className: (0, a.W)("".concat(y, "-content"), w.content),
                  style: O.content,
                },
                u
              ),
              n.createElement("div", {
                className: "".concat(y, "-corner"),
                style: N,
              })
            )
          )
        );
      };
      var D = S;
    },
    71096: function (e) {
      var t;
      (t = function () {
        "use strict";
        var e = "millisecond",
          t = "second",
          r = "minute",
          n = "hour",
          o = "week",
          a = "month",
          c = "quarter",
          i = "year",
          l = "date",
          s = "Invalid Date",
          C =
            /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
          u =
            /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
          d = function (e, t, r) {
            var n = String(e);
            return !n || n.length >= t
              ? e
              : "" + Array(t + 1 - n.length).join(r) + e;
          },
          m = "en",
          p = {};
        p[m] = {
          name: "en",
          weekdays:
            "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
          months:
            "January_February_March_April_May_June_July_August_September_October_November_December".split(
              "_"
            ),
          ordinal: function (e) {
            var t = ["th", "st", "nd", "rd"],
              r = e % 100;
            return "[" + e + (t[(r - 20) % 10] || t[r] || "th") + "]";
          },
        };
        var f = "$isDayjsObject",
          h = function (e) {
            return e instanceof g || !(!e || !e[f]);
          },
          L = function e(t, r, n) {
            var o;
            if (!t) return m;
            if ("string" == typeof t) {
              var a = t.toLowerCase();
              p[a] && (o = a), r && ((p[a] = r), (o = a));
              var c = t.split("-");
              if (!o && c.length > 1) return e(c[0]);
            } else {
              var i = t.name;
              (p[i] = t), (o = i);
            }
            return !n && o && (m = o), o || (!n && m);
          },
          M = function (e, t) {
            if (h(e)) return e.clone();
            var r = "object" == typeof t ? t : {};
            return (r.date = e), (r.args = arguments), new g(r);
          },
          b = {
            s: d,
            z: function (e) {
              var t = -e.utcOffset(),
                r = Math.abs(t);
              return (
                (t <= 0 ? "+" : "-") +
                d(Math.floor(r / 60), 2, "0") +
                ":" +
                d(r % 60, 2, "0")
              );
            },
            m: function e(t, r) {
              if (t.date() < r.date()) return -e(r, t);
              var n = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                o = t.clone().add(n, a),
                c = r - o < 0,
                i = t.clone().add(n + (c ? -1 : 1), a);
              return +(-(n + (r - o) / (c ? o - i : i - o)) || 0);
            },
            a: function (e) {
              return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
            },
            p: function (s) {
              return (
                {
                  M: a,
                  y: i,
                  w: o,
                  d: "day",
                  D: l,
                  h: n,
                  m: r,
                  s: t,
                  ms: e,
                  Q: c,
                }[s] ||
                String(s || "")
                  .toLowerCase()
                  .replace(/s$/, "")
              );
            },
            u: function (e) {
              return void 0 === e;
            },
          };
        (b.l = L),
          (b.i = h),
          (b.w = function (e, t) {
            return M(e, {
              locale: t.$L,
              utc: t.$u,
              x: t.$x,
              $offset: t.$offset,
            });
          });
        var g = (function () {
            function d(e) {
              (this.$L = L(e.locale, null, !0)),
                this.parse(e),
                (this.$x = this.$x || e.x || {}),
                (this[f] = !0);
            }
            var m = d.prototype;
            return (
              (m.parse = function (e) {
                (this.$d = (function (e) {
                  var t = e.date,
                    r = e.utc;
                  if (null === t) return new Date(NaN);
                  if (b.u(t)) return new Date();
                  if (t instanceof Date) return new Date(t);
                  if ("string" == typeof t && !/Z$/i.test(t)) {
                    var n = t.match(C);
                    if (n) {
                      var o = n[2] - 1 || 0,
                        a = (n[7] || "0").substring(0, 3);
                      return r
                        ? new Date(
                            Date.UTC(
                              n[1],
                              o,
                              n[3] || 1,
                              n[4] || 0,
                              n[5] || 0,
                              n[6] || 0,
                              a
                            )
                          )
                        : new Date(
                            n[1],
                            o,
                            n[3] || 1,
                            n[4] || 0,
                            n[5] || 0,
                            n[6] || 0,
                            a
                          );
                    }
                  }
                  return new Date(t);
                })(e)),
                  this.init();
              }),
              (m.init = function () {
                var e = this.$d;
                (this.$y = e.getFullYear()),
                  (this.$M = e.getMonth()),
                  (this.$D = e.getDate()),
                  (this.$W = e.getDay()),
                  (this.$H = e.getHours()),
                  (this.$m = e.getMinutes()),
                  (this.$s = e.getSeconds()),
                  (this.$ms = e.getMilliseconds());
              }),
              (m.$utils = function () {
                return b;
              }),
              (m.isValid = function () {
                return this.$d.toString() !== s;
              }),
              (m.isSame = function (e, t) {
                var r = M(e);
                return this.startOf(t) <= r && r <= this.endOf(t);
              }),
              (m.isAfter = function (e, t) {
                return M(e) < this.startOf(t);
              }),
              (m.isBefore = function (e, t) {
                return this.endOf(t) < M(e);
              }),
              (m.$g = function (e, t, r) {
                return b.u(e) ? this[t] : this.set(r, e);
              }),
              (m.unix = function () {
                return Math.floor(this.valueOf() / 1e3);
              }),
              (m.valueOf = function () {
                return this.$d.getTime();
              }),
              (m.startOf = function (e, c) {
                var s = this,
                  C = !!b.u(c) || c,
                  u = b.p(e),
                  d = function (e, t) {
                    var r = b.w(
                      s.$u ? Date.UTC(s.$y, t, e) : new Date(s.$y, t, e),
                      s
                    );
                    return C ? r : r.endOf("day");
                  },
                  m = function (e, t) {
                    return b.w(
                      s
                        .toDate()
                        [e].apply(
                          s.toDate("s"),
                          (C ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                        ),
                      s
                    );
                  },
                  p = this.$W,
                  f = this.$M,
                  h = this.$D,
                  L = "set" + (this.$u ? "UTC" : "");
                switch (u) {
                  case i:
                    return C ? d(1, 0) : d(31, 11);
                  case a:
                    return C ? d(1, f) : d(0, f + 1);
                  case o:
                    var M = this.$locale().weekStart || 0,
                      g = (p < M ? p + 7 : p) - M;
                    return d(C ? h - g : h + (6 - g), f);
                  case "day":
                  case l:
                    return m(L + "Hours", 0);
                  case n:
                    return m(L + "Minutes", 1);
                  case r:
                    return m(L + "Seconds", 2);
                  case t:
                    return m(L + "Milliseconds", 3);
                  default:
                    return this.clone();
                }
              }),
              (m.endOf = function (e) {
                return this.startOf(e, !1);
              }),
              (m.$set = function (o, c) {
                var s,
                  C = b.p(o),
                  u = "set" + (this.$u ? "UTC" : ""),
                  d = (((s = {}).day = u + "Date"),
                  (s[l] = u + "Date"),
                  (s[a] = u + "Month"),
                  (s[i] = u + "FullYear"),
                  (s[n] = u + "Hours"),
                  (s[r] = u + "Minutes"),
                  (s[t] = u + "Seconds"),
                  (s[e] = u + "Milliseconds"),
                  s)[C],
                  m = "day" === C ? this.$D + (c - this.$W) : c;
                if (C === a || C === i) {
                  var p = this.clone().set(l, 1);
                  p.$d[d](m),
                    p.init(),
                    (this.$d = p.set(l, Math.min(this.$D, p.daysInMonth())).$d);
                } else d && this.$d[d](m);
                return this.init(), this;
              }),
              (m.set = function (e, t) {
                return this.clone().$set(e, t);
              }),
              (m.get = function (e) {
                return this[b.p(e)]();
              }),
              (m.add = function (e, c) {
                var l,
                  s = this;
                e = Number(e);
                var C = b.p(c),
                  u = function (t) {
                    var r = M(s);
                    return b.w(r.date(r.date() + Math.round(t * e)), s);
                  };
                if (C === a) return this.set(a, this.$M + e);
                if (C === i) return this.set(i, this.$y + e);
                if ("day" === C) return u(1);
                if (C === o) return u(7);
                var d =
                    (((l = {})[r] = 6e4), (l[n] = 36e5), (l[t] = 1e3), l)[C] ||
                    1,
                  m = this.$d.getTime() + e * d;
                return b.w(m, this);
              }),
              (m.subtract = function (e, t) {
                return this.add(-1 * e, t);
              }),
              (m.format = function (e) {
                var t = this,
                  r = this.$locale();
                if (!this.isValid()) return r.invalidDate || s;
                var n = e || "YYYY-MM-DDTHH:mm:ssZ",
                  o = b.z(this),
                  a = this.$H,
                  c = this.$m,
                  i = this.$M,
                  l = r.weekdays,
                  C = r.months,
                  d = r.meridiem,
                  m = function (e, r, o, a) {
                    return (e && (e[r] || e(t, n))) || o[r].slice(0, a);
                  },
                  p = function (e) {
                    return b.s(a % 12 || 12, e, "0");
                  },
                  f =
                    d ||
                    function (e, t, r) {
                      var n = e < 12 ? "AM" : "PM";
                      return r ? n.toLowerCase() : n;
                    };
                return n.replace(u, function (e, n) {
                  return (
                    n ||
                    (function (e) {
                      switch (e) {
                        case "YY":
                          return String(t.$y).slice(-2);
                        case "YYYY":
                          return b.s(t.$y, 4, "0");
                        case "M":
                          return i + 1;
                        case "MM":
                          return b.s(i + 1, 2, "0");
                        case "MMM":
                          return m(r.monthsShort, i, C, 3);
                        case "MMMM":
                          return m(C, i);
                        case "D":
                          return t.$D;
                        case "DD":
                          return b.s(t.$D, 2, "0");
                        case "d":
                          return String(t.$W);
                        case "dd":
                          return m(r.weekdaysMin, t.$W, l, 2);
                        case "ddd":
                          return m(r.weekdaysShort, t.$W, l, 3);
                        case "dddd":
                          return l[t.$W];
                        case "H":
                          return String(a);
                        case "HH":
                          return b.s(a, 2, "0");
                        case "h":
                          return p(1);
                        case "hh":
                          return p(2);
                        case "a":
                          return f(a, c, !0);
                        case "A":
                          return f(a, c, !1);
                        case "m":
                          return String(c);
                        case "mm":
                          return b.s(c, 2, "0");
                        case "s":
                          return String(t.$s);
                        case "ss":
                          return b.s(t.$s, 2, "0");
                        case "SSS":
                          return b.s(t.$ms, 3, "0");
                        case "Z":
                          return o;
                      }
                      return null;
                    })(e) ||
                    o.replace(":", "")
                  );
                });
              }),
              (m.utcOffset = function () {
                return -(15 * Math.round(this.$d.getTimezoneOffset() / 15));
              }),
              (m.diff = function (e, l, s) {
                var C,
                  u = this,
                  d = b.p(l),
                  m = M(e),
                  p = (m.utcOffset() - this.utcOffset()) * 6e4,
                  f = this - m,
                  h = function () {
                    return b.m(u, m);
                  };
                switch (d) {
                  case i:
                    C = h() / 12;
                    break;
                  case a:
                    C = h();
                    break;
                  case c:
                    C = h() / 3;
                    break;
                  case o:
                    C = (f - p) / 6048e5;
                    break;
                  case "day":
                    C = (f - p) / 864e5;
                    break;
                  case n:
                    C = f / 36e5;
                    break;
                  case r:
                    C = f / 6e4;
                    break;
                  case t:
                    C = f / 1e3;
                    break;
                  default:
                    C = f;
                }
                return s ? C : b.a(C);
              }),
              (m.daysInMonth = function () {
                return this.endOf(a).$D;
              }),
              (m.$locale = function () {
                return p[this.$L];
              }),
              (m.locale = function (e, t) {
                if (!e) return this.$L;
                var r = this.clone(),
                  n = L(e, t, !0);
                return n && (r.$L = n), r;
              }),
              (m.clone = function () {
                return b.w(this.$d, this);
              }),
              (m.toDate = function () {
                return new Date(this.valueOf());
              }),
              (m.toJSON = function () {
                return this.isValid() ? this.toISOString() : null;
              }),
              (m.toISOString = function () {
                return this.$d.toISOString();
              }),
              (m.toString = function () {
                return this.$d.toUTCString();
              }),
              d
            );
          })(),
          k = g.prototype;
        return (
          (M.prototype = k),
          [
            ["$ms", e],
            ["$s", t],
            ["$m", r],
            ["$H", n],
            ["$W", "day"],
            ["$M", a],
            ["$y", i],
            ["$D", l],
          ].forEach(function (e) {
            k[e[1]] = function (t) {
              return this.$g(t, e[0], e[1]);
            };
          }),
          (M.extend = function (e, t) {
            return e.$i || (e(t, g, M), (e.$i = !0)), M;
          }),
          (M.locale = L),
          (M.isDayjs = h),
          (M.unix = function (e) {
            return M(1e3 * e);
          }),
          (M.en = p[m]),
          (M.Ls = p),
          (M.p = {}),
          M
        );
      }),
        (e.exports = t());
    },
    99376: function (e, t, r) {
      "use strict";
      var n = r(35475);
      r.o(n, "useParams") &&
        r.d(t, {
          useParams: function () {
            return n.useParams;
          },
        }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          }),
        r.o(n, "useServerInsertedHTML") &&
          r.d(t, {
            useServerInsertedHTML: function () {
              return n.useServerInsertedHTML;
            },
          });
    },
    71823: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(2265),
        o = r(59214);
      let a = new Map([
        [
          "Bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M20.8411 10.4666C20.549 10.1778 20.0789 10.1778 19.7867 10.4666L18.1005 12.1333C17.8841 12.3471 17.8184 12.6703 17.9339 12.9517C18.0495 13.233 18.3235 13.4167 18.6277 13.4167H19.5268C19.1455 17.2462 15.8759 20.25 11.8828 20.25C9.10026 20.25 6.66586 18.7903 5.31796 16.6061C5.10042 16.2536 4.63833 16.1442 4.28583 16.3618C3.93334 16.5793 3.82393 17.0414 4.04146 17.3939C5.65407 20.007 8.56406 21.75 11.8828 21.75C16.6906 21.75 20.6475 18.0892 21.0331 13.4167H22.0002C22.3043 13.4167 22.5783 13.233 22.6939 12.9517C22.8095 12.6703 22.7437 12.3471 22.5274 12.1333L20.8411 10.4666Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M12.0789 2.25C7.2854 2.25 3.34478 5.913 2.96055 10.5833H2.00002C1.69614 10.5833 1.42229 10.7667 1.30655 11.0477C1.19081 11.3287 1.25606 11.6517 1.47178 11.8657L3.15159 13.5324C3.444 13.8225 3.91567 13.8225 4.20808 13.5324L5.88789 11.8657C6.10361 11.6517 6.16886 11.3287 6.05312 11.0477C5.93738 10.7667 5.66353 10.5833 5.35965 10.5833H4.4668C4.84652 6.75167 8.10479 3.75 12.0789 3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0002 7.42199 20.1104 6.96007 19.8934 6.60721C18.2871 3.99427 15.3873 2.25 12.0789 2.25Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M20.8412 10.4666C20.5491 10.1778 20.0789 10.1778 19.7868 10.4666L18.1005 12.1333C17.8842 12.3471 17.8185 12.6703 17.934 12.9517C18.0496 13.233 18.3236 13.4167 18.6278 13.4167H19.5269C19.1456 17.2462 15.876 20.25 11.8828 20.25C9.10034 20.25 6.66595 18.7903 5.31804 16.6061C5.10051 16.2536 4.63841 16.1442 4.28591 16.3618C3.93342 16.5793 3.82401 17.0414 4.04154 17.3939C5.65416 20.007 8.56414 21.75 11.8828 21.75C16.6907 21.75 20.6476 18.0892 21.0332 13.4167H22.0002C22.3044 13.4167 22.5784 13.233 22.694 12.9517C22.8096 12.6703 22.7438 12.3471 22.5275 12.1333L20.8412 10.4666Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M3.67981 11.3333H2.92981H3.67981ZM3.67981 13L3.15157 13.5324C3.44398 13.8225 3.91565 13.8225 4.20805 13.5324L3.67981 13ZM5.88787 11.8657C6.18191 11.574 6.18377 11.0991 5.89203 10.8051C5.60029 10.511 5.12542 10.5092 4.83138 10.8009L5.88787 11.8657ZM2.52824 10.8009C2.2342 10.5092 1.75933 10.511 1.46759 10.8051C1.17585 11.0991 1.17772 11.574 1.47176 11.8657L2.52824 10.8009ZM18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0001 7.42199 20.1103 6.96007 19.8934 6.60721L18.6156 7.39279ZM16.8931 3.60787C16.5403 3.39077 16.0784 3.50074 15.8613 3.8535C15.6442 4.20626 15.7541 4.66822 16.1069 4.88532L16.8931 3.60787ZM12.4633 3.75939C12.877 3.77966 13.2288 3.46071 13.2491 3.047C13.2694 2.63328 12.9504 2.28146 12.5367 2.26119L12.4633 3.75939ZM12.0789 2.25C7.03155 2.25 2.92981 6.3112 2.92981 11.3333H4.42981C4.42981 7.15072 7.84884 3.75 12.0789 3.75V2.25ZM2.92981 11.3333L2.92981 13H4.42981L4.42981 11.3333H2.92981ZM4.20805 13.5324L5.88787 11.8657L4.83138 10.8009L3.15157 12.4676L4.20805 13.5324ZM4.20805 12.4676L2.52824 10.8009L1.47176 11.8657L3.15157 13.5324L4.20805 12.4676ZM19.8934 6.60721C19.1441 5.38846 18.1143 4.35941 16.8931 3.60787L16.1069 4.88532C17.1287 5.51419 17.9899 6.37506 18.6156 7.39279L19.8934 6.60721ZM12.5367 2.26119C12.385 2.25376 12.2323 2.25 12.0789 2.25V3.75C12.2078 3.75 12.336 3.75316 12.4633 3.75939L12.5367 2.26119Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M11.8825 21V21.75V21ZM20.3137 12.6667H21.0637H20.3137ZM20.3137 11L20.8409 10.4666C20.5487 10.1778 20.0786 10.1778 19.7864 10.4666L20.3137 11ZM18.1002 12.1333C17.8056 12.4244 17.8028 12.8993 18.094 13.1939C18.3852 13.4885 18.86 13.4913 19.1546 13.2001L18.1002 12.1333ZM21.4727 13.2001C21.7673 13.4913 22.2421 13.4885 22.5333 13.1939C22.8245 12.8993 22.8217 12.4244 22.5271 12.1332L21.4727 13.2001ZM5.31769 16.6061C5.10016 16.2536 4.63806 16.1442 4.28557 16.3618C3.93307 16.5793 3.82366 17.0414 4.0412 17.3939L5.31769 16.6061ZM11.5331 20.2423C11.1193 20.224 10.769 20.5447 10.7507 20.9585C10.7325 21.3723 11.0531 21.7226 11.4669 21.7408L11.5331 20.2423ZM7.11292 20.4296C7.4677 20.6433 7.92861 20.529 8.14239 20.1742C8.35617 19.8195 8.24186 19.3586 7.88708 19.1448L7.11292 20.4296ZM11.8825 21.75C16.9448 21.75 21.0637 17.6915 21.0637 12.6667H19.5637C19.5637 16.8466 16.133 20.25 11.8825 20.25V21.75ZM21.0637 12.6667V11H19.5637V12.6667H21.0637ZM19.7864 10.4666L18.1002 12.1333L19.1546 13.2001L20.8409 11.5334L19.7864 10.4666ZM19.7864 11.5334L21.4727 13.2001L22.5271 12.1332L20.8409 10.4666L19.7864 11.5334ZM11.4669 21.7408C11.6047 21.7469 11.7433 21.75 11.8825 21.75V20.25C11.7653 20.25 11.6488 20.2474 11.5331 20.2423L11.4669 21.7408ZM4.0412 17.3939C4.80569 18.6327 5.86106 19.6752 7.11292 20.4296L7.88708 19.1448C6.83872 18.5131 5.95602 17.6405 5.31769 16.6061L4.0412 17.3939Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Linear",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M3.67981 11.3333H2.92981H3.67981ZM3.67981 13L3.15157 13.5324C3.44398 13.8225 3.91565 13.8225 4.20805 13.5324L3.67981 13ZM5.88787 11.8657C6.18191 11.574 6.18377 11.0991 5.89203 10.8051C5.60029 10.511 5.12542 10.5092 4.83138 10.8009L5.88787 11.8657ZM2.52824 10.8009C2.2342 10.5092 1.75933 10.511 1.46759 10.8051C1.17585 11.0991 1.17772 11.574 1.47176 11.8657L2.52824 10.8009ZM18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0001 7.42199 20.1103 6.96007 19.8934 6.60721L18.6156 7.39279ZM12.0789 2.25C7.03155 2.25 2.92981 6.3112 2.92981 11.3333H4.42981C4.42981 7.15072 7.84884 3.75 12.0789 3.75V2.25ZM2.92981 11.3333L2.92981 13H4.42981L4.42981 11.3333H2.92981ZM4.20805 13.5324L5.88787 11.8657L4.83138 10.8009L3.15157 12.4676L4.20805 13.5324ZM4.20805 12.4676L2.52824 10.8009L1.47176 11.8657L3.15157 13.5324L4.20805 12.4676ZM19.8934 6.60721C18.287 3.99427 15.3873 2.25 12.0789 2.25V3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279L19.8934 6.60721Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M20.3139 11L20.8411 10.4666C20.549 10.1778 20.0788 10.1778 19.7867 10.4666L20.3139 11ZM18.1004 12.1333C17.8058 12.4244 17.8031 12.8993 18.0942 13.1939C18.3854 13.4885 18.8603 13.4913 19.1549 13.2001L18.1004 12.1333ZM21.4729 13.2001C21.7675 13.4913 22.2424 13.4885 22.5335 13.1939C22.8247 12.8993 22.822 12.4244 22.5274 12.1332L21.4729 13.2001ZM5.31794 16.6061C5.1004 16.2536 4.6383 16.1442 4.28581 16.3618C3.93331 16.5793 3.82391 17.0414 4.04144 17.3939L5.31794 16.6061ZM11.8827 21.75C16.9451 21.75 21.0639 17.6915 21.0639 12.6667H19.5639C19.5639 16.8466 16.1332 20.25 11.8827 20.25V21.75ZM21.0639 12.6667V11H19.5639V12.6667H21.0639ZM19.7867 10.4666L18.1004 12.1333L19.1549 13.2001L20.8411 11.5334L19.7867 10.4666ZM19.7867 11.5334L21.4729 13.2001L22.5274 12.1332L20.8411 10.4666L19.7867 11.5334ZM4.04144 17.3939C5.65405 20.007 8.56403 21.75 11.8827 21.75V20.25C9.10023 20.25 6.66584 18.7903 5.31794 16.6061L4.04144 17.3939Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "LineDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M12.0789 3V2.25V3ZM3.67981 11.3333H2.92981H3.67981ZM3.67981 13L3.15157 13.5324C3.44398 13.8225 3.91565 13.8225 4.20805 13.5324L3.67981 13ZM5.88787 11.8657C6.18191 11.574 6.18377 11.0991 5.89203 10.8051C5.60029 10.511 5.12542 10.5092 4.83138 10.8009L5.88787 11.8657ZM2.52824 10.8009C2.2342 10.5092 1.75933 10.511 1.46759 10.8051C1.17585 11.0991 1.17772 11.574 1.47176 11.8657L2.52824 10.8009ZM18.6156 7.39279C18.8325 7.74565 19.2944 7.85585 19.6473 7.63892C20.0001 7.42199 20.1103 6.96007 19.8934 6.60721L18.6156 7.39279ZM12.0789 2.25C7.03155 2.25 2.92981 6.3112 2.92981 11.3333H4.42981C4.42981 7.15072 7.84884 3.75 12.0789 3.75V2.25ZM2.92981 11.3333L2.92981 13H4.42981L4.42981 11.3333H2.92981ZM4.20805 13.5324L5.88787 11.8657L4.83138 10.8009L3.15157 12.4676L4.20805 13.5324ZM4.20805 12.4676L2.52824 10.8009L1.47176 11.8657L3.15157 13.5324L4.20805 12.4676ZM19.8934 6.60721C18.287 3.99427 15.3873 2.25 12.0789 2.25V3.75C14.8484 3.75 17.2727 5.20845 18.6156 7.39279L19.8934 6.60721Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M11.8825 21V21.75V21ZM20.3137 12.6667H21.0637H20.3137ZM20.3137 11L20.8409 10.4666C20.5487 10.1778 20.0786 10.1778 19.7864 10.4666L20.3137 11ZM18.1002 12.1333C17.8056 12.4244 17.8028 12.8993 18.094 13.1939C18.3852 13.4885 18.86 13.4913 19.1546 13.2001L18.1002 12.1333ZM21.4727 13.2001C21.7673 13.4913 22.2421 13.4885 22.5333 13.1939C22.8245 12.8993 22.8217 12.4244 22.5271 12.1332L21.4727 13.2001ZM5.31769 16.6061C5.10016 16.2536 4.63806 16.1442 4.28557 16.3618C3.93307 16.5793 3.82366 17.0414 4.0412 17.3939L5.31769 16.6061ZM11.8825 21.75C16.9448 21.75 21.0637 17.6915 21.0637 12.6667H19.5637C19.5637 16.8466 16.133 20.25 11.8825 20.25V21.75ZM21.0637 12.6667V11H19.5637V12.6667H21.0637ZM19.7864 10.4666L18.1002 12.1333L19.1546 13.2001L20.8409 11.5334L19.7864 10.4666ZM19.7864 11.5334L21.4727 13.2001L22.5271 12.1332L20.8409 10.4666L19.7864 11.5334ZM4.0412 17.3939C5.65381 20.007 8.56379 21.75 11.8825 21.75V20.25C9.09999 20.25 6.6656 18.7903 5.31769 16.6061L4.0412 17.3939Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Outline",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M2.93077 11.2003C3.00244 6.23968 7.07619 2.25 12.0789 2.25C15.3873 2.25 18.287 3.99427 19.8934 6.60721C20.1103 6.96007 20.0001 7.42199 19.6473 7.63892C19.2944 7.85585 18.8325 7.74565 18.6156 7.39279C17.2727 5.20845 14.8484 3.75 12.0789 3.75C7.8945 3.75 4.50372 7.0777 4.431 11.1982L4.83138 10.8009C5.12542 10.5092 5.60029 10.511 5.89203 10.8051C6.18377 11.0991 6.18191 11.574 5.88787 11.8657L4.20805 13.5324C3.91565 13.8225 3.44398 13.8225 3.15157 13.5324L1.47176 11.8657C1.17772 11.574 1.17585 11.0991 1.46759 10.8051C1.75933 10.5111 2.2342 10.5092 2.52824 10.8009L2.93077 11.2003ZM19.7864 10.4666C20.0786 10.1778 20.5487 10.1778 20.8409 10.4666L22.5271 12.1333C22.8217 12.4244 22.8245 12.8993 22.5333 13.1939C22.2421 13.4885 21.7673 13.4913 21.4727 13.2001L21.0628 12.7949C20.9934 17.7604 16.9017 21.75 11.8825 21.75C8.56379 21.75 5.65381 20.007 4.0412 17.3939C3.82366 17.0414 3.93307 16.5793 4.28557 16.3618C4.63806 16.1442 5.10016 16.2536 5.31769 16.6061C6.6656 18.7903 9.09999 20.25 11.8825 20.25C16.0887 20.25 19.4922 16.9171 19.5625 12.7969L19.1546 13.2001C18.86 13.4913 18.3852 13.4885 18.094 13.1939C17.8028 12.8993 17.8056 12.4244 18.1002 12.1333L19.7864 10.4666Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var c = Object.defineProperty,
        i = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        d = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && d(e, r, t[r]);
          if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
          return e;
        },
        p = (e, t) => i(e, l(t));
      let f = (0, n.forwardRef)((e, t) =>
        n.createElement(o.Z, p(m({ ref: t }, e), { weights: a }))
      );
      f.displayName = "Refresh";
    },
    40499: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(2265),
        o = r(59214);
      let a = new Map([
        [
          "Bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20 9.80145V13.8676C20 17.7013 20 19.6181 18.8284 20.809C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.809C4 19.6181 4 17.7013 4 13.8676V9.80145C4 5.96782 4 4.051 5.17157 2.86005C5.54739 2.47801 5.99669 2.21852 6.55813 2.04228C6.91142 1.93137 7.28557 2.08933 7.5 2.39265C7.55391 2.47485 7.60506 2.55304 7.65377 2.62751C8.28829 3.59749 8.50937 3.93544 9.02215 4.25936C9.13195 4.32871 9.24604 4.39078 9.36371 4.44518C9.95547 4.71873 10.637 4.71873 12 4.71873C13.363 4.71873 14.0445 4.71873 14.6363 4.44518C14.754 4.39078 14.8681 4.32871 14.9778 4.25936C15.4906 3.93544 15.7117 3.59749 16.3462 2.62752C16.3949 2.55305 16.4461 2.47485 16.5 2.39265C16.6992 2.08835 17.0639 1.92644 17.4105 2.03256C17.9866 2.20895 18.4456 2.47093 18.8284 2.86005C20 4.051 20 5.96782 20 9.80145ZM9 18.2294C8.58579 18.2294 8.25 18.567 8.25 18.9835C8.25 19.4 8.58579 19.7376 9 19.7376H15C15.4142 19.7376 15.75 19.4 15.75 18.9835C15.75 18.567 15.4142 18.2294 15 18.2294H9Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              opacity: "0.5",
              d: "M20 9.80145V13.8676C20 17.7013 20 19.6181 18.8284 20.809C17.6569 22 15.7712 22 12 22H12H12C8.22876 22 6.34314 22 5.17157 20.809C4 19.6181 4 17.7013 4 13.8676V9.80145C4 5.96782 4 4.051 5.17157 2.86005C5.54739 2.47801 5.99669 2.21852 6.55813 2.04228C6.91142 1.93137 7.28557 2.08933 7.5 2.39265L7.65377 2.62751C8.28829 3.59749 8.50937 3.93544 9.02215 4.25936C9.13195 4.32871 9.24604 4.39078 9.36371 4.44518C9.95547 4.71873 10.637 4.71873 12 4.71873C13.363 4.71873 14.0445 4.71873 14.6363 4.44518C14.754 4.39078 14.8681 4.32871 14.9778 4.25936C15.4906 3.93544 15.7117 3.59749 16.3462 2.62752L16.5 2.39265C16.6992 2.08835 17.0639 1.92644 17.4105 2.03256C17.9866 2.20895 18.4456 2.47093 18.8284 2.86005C20 4.051 20 5.96782 20 9.80145Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M8.25 18.9836C8.25 18.5671 8.58579 18.2295 9 18.2295H15C15.4142 18.2295 15.75 18.5671 15.75 18.9836C15.75 19.4001 15.4142 19.7377 15 19.7377H9C8.58579 19.7377 8.25 19.4001 8.25 18.9836Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M20 14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M15 19H9",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M16.7481 2.37793L16.664 2.5041C15.908 3.63818 15.5299 4.20525 14.9778 4.54836C14.868 4.61658 14.7539 4.67764 14.6362 4.73115C14.0444 5.00025 13.3629 5.00025 11.9999 5.00025C10.6369 5.00025 9.95539 5.00025 9.36363 4.73115C9.24596 4.67764 9.13187 4.61658 9.02207 4.54836C8.46992 4.20524 8.09189 3.6382 7.33582 2.5041L7.25171 2.37793",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            n.createElement("path", {
              d: "M15 19H9",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M16.7484 2.37793L16.6643 2.5041C15.9082 3.63818 15.5302 4.20525 14.978 4.54836C14.8682 4.61658 14.7541 4.67764 14.6365 4.73115C14.0447 5.00025 13.3632 5.00025 12.0002 5.00025C10.6371 5.00025 9.95564 5.00025 9.36387 4.73115C9.2462 4.67764 9.13211 4.61658 9.02232 4.54836C8.47016 4.20524 8.09213 3.6382 7.33606 2.5041L7.25195 2.37793",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M4 10C4 6.22876 4 4.34315 5.17157 3.17157C6.34315 2 8.22876 2 12 2C15.7712 2 17.6569 2 18.8284 3.17157C20 4.34315 20 6.22876 20 10V14C20 17.7712 20 19.6569 18.8284 20.8284C17.6569 22 15.7712 22 12 22C8.22876 22 6.34315 22 5.17157 20.8284C4 19.6569 4 17.7712 4 14V10Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M15 19H9",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M16.7481 2.37793L16.664 2.5041C15.908 3.63818 15.5299 4.20525 14.9778 4.54836C14.868 4.61658 14.7539 4.67764 14.6362 4.73115C14.0444 5.00025 13.3629 5.00025 11.9999 5.00025C10.6369 5.00025 9.95539 5.00025 9.36363 4.73115C9.24596 4.67764 9.13187 4.61658 9.02207 4.54836C8.46992 4.20524 8.09189 3.6382 7.33582 2.5041L7.25171 2.37793",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.9436 1.25H12.0564C13.8942 1.24998 15.3498 1.24997 16.489 1.40314C17.6614 1.56076 18.6104 1.89288 19.3588 2.64124C20.1071 3.38961 20.4392 4.33856 20.5969 5.51098C20.75 6.65019 20.75 8.10583 20.75 9.94359V14.0564C20.75 15.8942 20.75 17.3498 20.5969 18.489C20.4392 19.6614 20.1071 20.6104 19.3588 21.3588C18.6104 22.1071 17.6614 22.4392 16.489 22.5969C15.3498 22.75 13.8942 22.75 12.0564 22.75H11.9436C10.1058 22.75 8.65019 22.75 7.51098 22.5969C6.33856 22.4392 5.38961 22.1071 4.64124 21.3588C3.89288 20.6104 3.56076 19.6614 3.40314 18.489C3.24997 17.3498 3.24998 15.8942 3.25 14.0564V9.94358C3.24998 8.10582 3.24997 6.65019 3.40314 5.51098C3.56076 4.33856 3.89288 3.38961 4.64124 2.64124C5.38961 1.89288 6.33856 1.56076 7.51098 1.40314C8.65019 1.24997 10.1058 1.24998 11.9436 1.25ZM6.81398 3.07317C6.32495 3.21933 5.97972 3.42409 5.7019 3.7019C5.27869 4.12511 5.02502 4.70476 4.88976 5.71085C4.75159 6.73851 4.75 8.09318 4.75 10V14C4.75 15.9068 4.75159 17.2615 4.88976 18.2892C5.02502 19.2952 5.27869 19.8749 5.7019 20.2981C6.12511 20.7213 6.70476 20.975 7.71085 21.1102C8.73851 21.2484 10.0932 21.25 12 21.25C13.9068 21.25 15.2615 21.2484 16.2892 21.1102C17.2952 20.975 17.8749 20.7213 18.2981 20.2981C18.7213 19.8749 18.975 19.2952 19.1102 18.2892C19.2484 17.2615 19.25 15.9068 19.25 14V10C19.25 8.09318 19.2484 6.73851 19.1102 5.71085C18.975 4.70476 18.7213 4.12511 18.2981 3.7019C18.0203 3.42409 17.6751 3.21933 17.186 3.07317C16.5243 4.06685 16.0616 4.75765 15.3737 5.18514C15.2365 5.27042 15.0938 5.34674 14.9468 5.41363C14.2046 5.75112 13.367 5.75069 12.1604 5.75006C12.1077 5.75003 12.0542 5.75 12 5.75C11.9458 5.75 11.8923 5.75003 11.8396 5.75006C10.633 5.75069 9.79542 5.75112 9.05325 5.41363C8.90616 5.34674 8.76355 5.27042 8.62631 5.18514C7.93836 4.75765 7.47571 4.06686 6.81398 3.07317ZM8.45129 2.81609C8.89537 3.45963 9.1279 3.73081 9.418 3.91108C9.50035 3.96225 9.58592 4.00805 9.67417 4.04818C10.0831 4.23412 10.5676 4.25 12 4.25C13.4324 4.25 13.9169 4.23412 14.3258 4.04818C14.4141 4.00804 14.4997 3.96225 14.582 3.91108C14.8721 3.73081 15.1046 3.45963 15.5487 2.81609C14.6285 2.75096 13.4807 2.75 12 2.75C10.5193 2.75 9.37152 2.75096 8.45129 2.81609ZM8.25 19C8.25 18.5858 8.58579 18.25 9 18.25H15C15.4142 18.25 15.75 18.5858 15.75 19C15.75 19.4142 15.4142 19.75 15 19.75H9C8.58579 19.75 8.25 19.4142 8.25 19Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var c = Object.defineProperty,
        i = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        d = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && d(e, r, t[r]);
          if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
          return e;
        },
        p = (e, t) => i(e, l(t));
      let f = (0, n.forwardRef)((e, t) =>
        n.createElement(o.Z, p(m({ ref: t }, e), { weights: a }))
      );
      f.displayName = "IPhone";
    },
    72142: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(2265),
        o = r(59214);
      let a = new Map([
        [
          "Bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157ZM18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2837 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60271 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              opacity: "0.5",
              d: "M14.2 3H9.8C5.65164 3 3.57746 3 2.28873 4.31802C1 5.63604 1 7.75736 1 12C1 16.2426 1 18.364 2.28873 19.682C3.57746 21 5.65164 21 9.8 21H14.2C18.3484 21 20.4225 21 21.7113 19.682C23 18.364 23 16.2426 23 12C23 7.75736 23 5.63604 21.7113 4.31802C20.4225 3 18.3484 3 14.2 3Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M19.1284 8.03302C19.4784 7.74133 19.5257 7.22112 19.234 6.87109C18.9423 6.52106 18.4221 6.47377 18.0721 6.76546L15.6973 8.74444C14.671 9.59966 13.9585 10.1915 13.357 10.5784C12.7747 10.9529 12.3798 11.0786 12.0002 11.0786C11.6206 11.0786 11.2258 10.9529 10.6435 10.5784C10.0419 10.1915 9.32941 9.59966 8.30315 8.74444L5.92837 6.76546C5.57834 6.47377 5.05812 6.52106 4.76643 6.87109C4.47474 7.22112 4.52204 7.74133 4.87206 8.03302L7.28821 10.0465C8.2632 10.859 9.05344 11.5176 9.75091 11.9661C10.4775 12.4334 11.185 12.7286 12.0002 12.7286C12.8154 12.7286 13.523 12.4334 14.2495 11.9661C14.947 11.5176 15.7372 10.859 16.7122 10.0465L19.1284 8.03302Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C21.4816 5.82475 21.7706 6.69989 21.8985 8",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M18 8L15.8411 9.79908C14.0045 11.3296 13.0861 12.0949 12 12.0949C11.3507 12.0949 10.7614 11.8214 10 11.2744M6 8L6.9 8.75L7.8 9.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            n.createElement("path", {
              d: "M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              opacity: "0.5",
              d: "M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            n.createElement("path", {
              d: "M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908L18 8",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.94358 3.25H14.0564C15.8942 3.24998 17.3498 3.24997 18.489 3.40314C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33856 22.5969 7.51098C22.75 8.65019 22.75 10.1058 22.75 11.9436V12.0564C22.75 13.8942 22.75 15.3498 22.5969 16.489C22.4392 17.6614 22.1071 18.6104 21.3588 19.3588C20.6104 20.1071 19.6614 20.4392 18.489 20.5969C17.3498 20.75 15.8942 20.75 14.0564 20.75H9.94359C8.10583 20.75 6.65019 20.75 5.51098 20.5969C4.33856 20.4392 3.38961 20.1071 2.64124 19.3588C1.89288 18.6104 1.56076 17.6614 1.40314 16.489C1.24997 15.3498 1.24998 13.8942 1.25 12.0564V11.9436C1.24998 10.1058 1.24997 8.65019 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40314C6.65019 3.24997 8.10582 3.24998 9.94358 3.25ZM5.71085 4.88976C4.70476 5.02502 4.12511 5.27869 3.7019 5.7019C3.27869 6.12511 3.02502 6.70476 2.88976 7.71085C2.75159 8.73851 2.75 10.0932 2.75 12C2.75 13.9068 2.75159 15.2615 2.88976 16.2892C3.02502 17.2952 3.27869 17.8749 3.7019 18.2981C4.12511 18.7213 4.70476 18.975 5.71085 19.1102C6.73851 19.2484 8.09318 19.25 10 19.25H14C15.9068 19.25 17.2615 19.2484 18.2892 19.1102C19.2952 18.975 19.8749 18.7213 20.2981 18.2981C20.7213 17.8749 20.975 17.2952 21.1102 16.2892C21.2484 15.2615 21.25 13.9068 21.25 12C21.25 10.0932 21.2484 8.73851 21.1102 7.71085C20.975 6.70476 20.7213 6.12511 20.2981 5.7019C19.8749 5.27869 19.2952 5.02502 18.2892 4.88976C17.2615 4.75159 15.9068 4.75 14 4.75H10C8.09318 4.75 6.73851 4.75159 5.71085 4.88976ZM5.42383 7.51986C5.68901 7.20165 6.16193 7.15866 6.48014 7.42383L8.63903 9.22291C9.57199 10.0004 10.2197 10.5384 10.7666 10.8901C11.2959 11.2306 11.6549 11.3449 12 11.3449C12.3451 11.3449 12.7041 11.2306 13.2334 10.8901C13.7803 10.5384 14.428 10.0004 15.361 9.22291L17.5199 7.42383C17.8381 7.15866 18.311 7.20165 18.5762 7.51986C18.8413 7.83807 18.7983 8.31099 18.4801 8.57617L16.2836 10.4066C15.3973 11.1452 14.6789 11.7439 14.0448 12.1517C13.3843 12.5765 12.7411 12.8449 12 12.8449C11.2589 12.8449 10.6157 12.5765 9.95518 12.1517C9.32112 11.7439 8.60272 11.1452 7.71636 10.4066L5.51986 8.57617C5.20165 8.31099 5.15866 7.83807 5.42383 7.51986Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var c = Object.defineProperty,
        i = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        d = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && d(e, r, t[r]);
          if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
          return e;
        },
        p = (e, t) => i(e, l(t));
      let f = (0, n.forwardRef)((e, t) =>
        n.createElement(o.Z, p(m({ ref: t }, e), { weights: a }))
      );
      f.displayName = "Letter";
    },
    63589: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(2265),
        o = r(59214);
      let a = new Map([
        [
          "Bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.3521 10.5208L18.6357 15.6701C17.4255 19.3008 16.8204 21.1161 15.933 21.6319C15.0889 22.1227 14.0463 22.1227 13.2022 21.6319C12.3148 21.1161 11.7097 19.3008 10.4995 15.6701C10.3052 15.0872 10.208 14.7957 10.0449 14.5521C9.88687 14.316 9.68404 14.1131 9.44793 13.9551C9.2043 13.792 8.91282 13.6948 8.32987 13.5005C4.69923 12.2903 2.88392 11.6852 2.36806 10.7978C1.87731 9.95369 1.87731 8.91112 2.36806 8.06698C2.88392 7.17964 4.69923 6.57453 8.32987 5.36432L13.4792 3.64788C17.9776 2.14842 20.2268 1.39869 21.414 2.58595C22.6013 3.77322 21.8516 6.02242 20.3521 10.5208ZM13.0457 10.9022C12.7544 10.6077 12.7571 10.1328 13.0516 9.84153L17.2621 5.67742C17.5566 5.38615 18.0315 5.38878 18.3227 5.6833C18.614 5.97781 18.6114 6.45267 18.3169 6.74394L14.1063 10.9081C13.8118 11.1993 13.337 11.1967 13.0457 10.9022Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              opacity: "0.5",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.3521 10.5208L18.6357 15.6701C17.4255 19.3008 16.8204 21.1161 15.933 21.6319C15.0889 22.1227 14.0463 22.1227 13.2022 21.6319C12.3148 21.1161 11.7097 19.3008 10.4995 15.6701C10.3052 15.0872 10.208 14.7957 10.0449 14.5521C9.88687 14.316 9.68404 14.1131 9.44793 13.9551C9.2043 13.792 8.91282 13.6948 8.32987 13.5005C4.69923 12.2903 2.88392 11.6852 2.36806 10.7978C1.87731 9.95369 1.87731 8.91112 2.36806 8.06698C2.88392 7.17964 4.69923 6.57453 8.32987 5.36432L13.4792 3.64788C17.9776 2.14842 20.2268 1.39869 21.414 2.58595C22.6013 3.77322 21.8516 6.02242 20.3521 10.5208Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M13.0458 10.9024C12.7546 10.6079 12.7572 10.1331 13.0517 9.84179L17.2622 5.67768C17.5568 5.38641 18.0316 5.38904 18.3229 5.68355C18.6142 5.97807 18.6115 6.45293 18.317 6.7442L14.1065 10.9083C13.812 11.1996 13.3371 11.1969 13.0458 10.9024Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M18.6357 15.6701C17.4255 19.3008 16.8204 21.1161 15.933 21.6319C15.0889 22.1227 14.0463 22.1227 13.2022 21.6319C12.3148 21.1161 11.7097 19.3008 10.4995 15.6701C10.3052 15.0872 10.208 14.7957 10.0449 14.5521C9.88687 14.316 9.68404 14.1131 9.44793 13.9551C9.2043 13.792 8.91282 13.6948 8.32987 13.5005C4.69923 12.2903 2.88392 11.6852 2.36806 10.7978C1.87731 9.95369 1.87731 8.91112 2.36806 8.06698C2.88392 7.17964 4.69923 6.57453 8.32987 5.36432M20.0257 11.5L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L12.4228 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M17.7894 6.21088L13.5789 10.375",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            n.createElement("path", {
              d: "M17.7896 6.21088L13.5791 10.375",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M18.6357 15.6701L20.3521 10.5208C21.8516 6.02242 22.6013 3.77322 21.414 2.58595C20.2268 1.39869 17.9776 2.14842 13.4792 3.64788L8.32987 5.36432C4.69923 6.57453 2.88392 7.17964 2.36806 8.06698C1.87731 8.91112 1.87731 9.95369 2.36806 10.7978C2.88392 11.6852 4.69923 12.2903 8.32987 13.5005C8.91282 13.6948 9.2043 13.792 9.44793 13.9551C9.68404 14.1131 9.88687 14.316 10.0449 14.5521C10.208 14.7957 10.3052 15.0872 10.4995 15.6701C11.7097 19.3008 12.3148 21.1161 13.2022 21.6319C14.0463 22.1227 15.0889 22.1227 15.933 21.6319C16.8204 21.1161 17.4255 19.3008 18.6357 15.6701Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M17.7894 6.21088L13.5789 10.375",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M18.1437 3.63083C16.9737 3.83896 15.3964 4.36262 13.1827 5.10051L8.17141 6.77094C6.39139 7.36428 5.1021 7.79468 4.19146 8.182C3.23939 8.58693 2.90071 8.86919 2.79071 9.0584C2.45191 9.64118 2.45191 10.361 2.79071 10.9437C2.90071 11.1329 3.23939 11.4152 4.19146 11.8201C5.1021 12.2075 6.39139 12.6379 8.17141 13.2312C8.19952 13.2406 8.22727 13.2498 8.25468 13.2589C8.74086 13.4206 9.11881 13.5464 9.44395 13.764C9.75719 13.9737 10.0263 14.2428 10.236 14.5561C10.4536 14.8812 10.5794 15.2592 10.7411 15.7453C10.7502 15.7727 10.7594 15.8005 10.7688 15.8286C11.3621 17.6086 11.7925 18.8979 12.1799 19.8085C12.5848 20.7606 12.867 21.0993 13.0563 21.2093C13.639 21.5481 14.3588 21.5481 14.9416 21.2093C15.1308 21.0993 15.4131 20.7606 15.818 19.8085C16.2053 18.8979 16.6357 17.6086 17.2291 15.8286L18.8995 10.8173C19.6374 8.60363 20.161 7.02627 20.3692 5.85629C20.5783 4.68074 20.4185 4.1814 20.1185 3.88146C19.8186 3.58152 19.3193 3.42171 18.1437 3.63083ZM17.8746 2.11797C19.1768 1.88632 20.3496 1.93941 21.2051 2.79491C22.0606 3.65041 22.1137 4.82322 21.882 6.12542C21.6518 7.41975 21.0903 9.10415 20.3794 11.2367L18.6745 16.3515C18.096 18.0869 17.6465 19.4354 17.232 20.41C16.8322 21.35 16.3882 22.1457 15.7139 22.5377C14.6537 23.1541 13.3442 23.1541 12.284 22.5377C11.6096 22.1457 11.1657 21.35 10.7658 20.41C10.3513 19.4354 9.90184 18.0869 9.32338 16.3515L9.31105 16.3145C9.10838 15.7065 9.04661 15.5416 8.95909 15.4109C8.86114 15.2646 8.73545 15.1389 8.58913 15.0409C8.4584 14.9534 8.29348 14.8916 7.68549 14.689L7.64845 14.6766C5.91306 14.0982 4.56463 13.6487 3.59005 13.2342C2.64996 12.8343 1.85431 12.3904 1.46228 11.716C0.845907 10.6558 0.845908 9.34634 1.46228 8.28611C1.85431 7.61177 2.64996 7.16781 3.59005 6.76797C4.56464 6.35345 5.91309 5.90397 7.64852 5.3255L12.7633 3.62057C14.8959 2.9097 16.5803 2.34822 17.8746 2.11797ZM17.6807 6.32532C17.9791 6.62702 17.9764 7.11348 17.6747 7.41185L13.5771 11.4643C13.2754 11.7627 12.7889 11.76 12.4905 11.4583C12.1921 11.1566 12.1948 10.6701 12.4965 10.3718L16.5942 6.3193C16.8959 6.02092 17.3823 6.02362 17.6807 6.32532Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var c = Object.defineProperty,
        i = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        d = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && d(e, r, t[r]);
          if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
          return e;
        },
        p = (e, t) => i(e, l(t));
      let f = (0, n.forwardRef)((e, t) =>
        n.createElement(o.Z, p(m({ ref: t }, e), { weights: a }))
      );
      f.displayName = "Plain3";
    },
    23860: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var n = r(2265),
        o = r(59214);
      let a = new Map([
        [
          "Bold",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.5956 22H12.4044C15.1871 22 16.5785 22 17.4831 21.1141C18.3878 20.2281 18.4803 18.7749 18.6654 15.8685L18.9321 11.6806C19.0326 10.1036 19.0828 9.31511 18.6289 8.81545C18.1751 8.31579 17.4087 8.31579 15.876 8.31579H8.12404C6.59127 8.31579 5.82488 8.31579 5.37105 8.81545C4.91722 9.31511 4.96744 10.1036 5.06788 11.6806L5.33459 15.8685C5.5197 18.7749 5.61225 20.2281 6.51689 21.1141C7.42153 22 8.81289 22 11.5956 22ZM10.2463 12.1885C10.2051 11.7546 9.83753 11.4381 9.42537 11.4815C9.01321 11.5249 8.71251 11.9117 8.75372 12.3456L9.25372 17.6087C9.29494 18.0426 9.66247 18.3591 10.0746 18.3157C10.4868 18.2724 10.7875 17.8855 10.7463 17.4516L10.2463 12.1885ZM14.5746 11.4815C14.9868 11.5249 15.2875 11.9117 15.2463 12.3456L14.7463 17.6087C14.7051 18.0426 14.3375 18.3591 13.9254 18.3157C13.5132 18.2724 13.2125 17.8855 13.2537 17.4516L13.7537 12.1885C13.7949 11.7546 14.1625 11.4381 14.5746 11.4815Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M11.5956 22.0001H12.4044C15.1871 22.0001 16.5785 22.0001 17.4831 21.1142C18.3878 20.2283 18.4803 18.7751 18.6654 15.8686L18.9321 11.6807C19.0326 10.1037 19.0828 9.31524 18.6289 8.81558C18.1751 8.31592 17.4087 8.31592 15.876 8.31592H8.12405C6.59127 8.31592 5.82488 8.31592 5.37105 8.81558C4.91722 9.31524 4.96744 10.1037 5.06788 11.6807L5.33459 15.8686C5.5197 18.7751 5.61225 20.2283 6.51689 21.1142C7.42153 22.0001 8.81289 22.0001 11.5956 22.0001Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M9.42543 11.4815C9.83759 11.4381 10.2051 11.7547 10.2463 12.1885L10.7463 17.4517C10.7875 17.8855 10.4868 18.2724 10.0747 18.3158C9.66253 18.3592 9.29499 18.0426 9.25378 17.6088L8.75378 12.3456C8.71256 11.9118 9.01327 11.5249 9.42543 11.4815Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14.5747 11.4815C14.9868 11.5249 15.2875 11.9118 15.2463 12.3456L14.7463 17.6088C14.7051 18.0426 14.3376 18.3592 13.9254 18.3158C13.5133 18.2724 13.2126 17.8855 13.2538 17.4517L13.7538 12.1885C13.795 11.7547 14.1625 11.4381 14.5747 11.4815Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M20.5 6H3.49988",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5M18.8334 8.5L18.6334 11.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M9.5 11L10 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M14.5 11L14 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M9.1709 4C9.58273 2.83481 10.694 2 12.0002 2C13.3064 2 14.4177 2.83481 14.8295 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M20.5001 6H3.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M9.5 11L10 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M14.5 11L14 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              opacity: "0.5",
              d: "M9.17065 4C9.58249 2.83481 10.6937 2 11.9999 2C13.3062 2 14.4174 2.83481 14.8292 4",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M20.5001 6H3.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              d: "M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
              opacity: "0.5",
              d: "M9.5 11L10 16",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            n.createElement("path", {
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
          n.createElement(
            n.Fragment,
            null,
            n.createElement("path", {
              d: "M12 2.75C11.0215 2.75 10.1871 3.37503 9.87787 4.24993C9.73983 4.64047 9.31134 4.84517 8.9208 4.70713C8.53026 4.56909 8.32557 4.1406 8.46361 3.75007C8.97804 2.29459 10.3661 1.25 12 1.25C13.634 1.25 15.022 2.29459 15.5365 3.75007C15.6745 4.1406 15.4698 4.56909 15.0793 4.70713C14.6887 4.84517 14.2602 4.64047 14.1222 4.24993C13.813 3.37503 12.9785 2.75 12 2.75Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M2.75 6C2.75 5.58579 3.08579 5.25 3.5 5.25H20.5001C20.9143 5.25 21.2501 5.58579 21.2501 6C21.2501 6.41421 20.9143 6.75 20.5001 6.75H3.5C3.08579 6.75 2.75 6.41421 2.75 6Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M5.91508 8.45011C5.88753 8.03681 5.53015 7.72411 5.11686 7.75166C4.70356 7.77921 4.39085 8.13659 4.41841 8.54989L4.88186 15.5016C4.96735 16.7844 5.03641 17.8205 5.19838 18.6336C5.36678 19.4789 5.6532 20.185 6.2448 20.7384C6.83639 21.2919 7.55994 21.5307 8.41459 21.6425C9.23663 21.75 10.2751 21.75 11.5607 21.75H12.4395C13.7251 21.75 14.7635 21.75 15.5856 21.6425C16.4402 21.5307 17.1638 21.2919 17.7554 20.7384C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9637 17.8205 19.0328 16.7844 19.1183 15.5016L19.5818 8.54989C19.6093 8.13659 19.2966 7.77921 18.8833 7.75166C18.47 7.72411 18.1126 8.03681 18.0851 8.45011L17.6251 15.3492C17.5353 16.6971 17.4712 17.6349 17.3307 18.3405C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8988 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32255 20.2485 8.60915 20.1552C7.91715 20.0647 7.54299 19.8988 7.26957 19.6431C6.99616 19.3873 6.80583 19.025 6.66948 18.3405C6.52891 17.6349 6.46488 16.6971 6.37503 15.3492L5.91508 8.45011Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M9.42546 10.2537C9.83762 10.2125 10.2051 10.5132 10.2464 10.9254L10.7464 15.9254C10.7876 16.3375 10.4869 16.7051 10.0747 16.7463C9.66256 16.7875 9.29502 16.4868 9.25381 16.0746L8.75381 11.0746C8.71259 10.6625 9.0133 10.2949 9.42546 10.2537Z",
              fill: "currentColor",
            }),
            n.createElement("path", {
              d: "M15.2464 11.0746C15.2876 10.6625 14.9869 10.2949 14.5747 10.2537C14.1626 10.2125 13.795 10.5132 13.7538 10.9254L13.2538 15.9254C13.2126 16.3375 13.5133 16.7051 13.9255 16.7463C14.3376 16.7875 14.7051 16.4868 14.7464 16.0746L15.2464 11.0746Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var c = Object.defineProperty,
        i = Object.defineProperties,
        l = Object.getOwnPropertyDescriptors,
        s = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        d = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && d(e, r, t[r]);
          if (s) for (var r of s(t)) u.call(t, r) && d(e, r, t[r]);
          return e;
        },
        p = (e, t) => i(e, l(t));
      let f = (0, n.forwardRef)((e, t) =>
        n.createElement(o.Z, p(m({ ref: t }, e), { weights: a }))
      );
      f.displayName = "TrashBinMinimalistic";
    },
  },
]);
