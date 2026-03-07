"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5874],
  {
    92570: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => (t ? ("function" == typeof t ? t() : t) : null);
    },
    91652: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return N;
        },
      });
      var n = o(2265),
        a = o(25532),
        r = o(90062),
        c = o(61994),
        i = o(6543),
        l = o(71744),
        s = o(64024),
        d = o(33759),
        u = o(28617);
      let m = n.createContext({});
      var p = o(38775),
        g = o(12918),
        f = o(99320),
        b = o(19224);
      let v = (t) => {
          let {
              antCls: e,
              componentCls: o,
              iconCls: n,
              avatarBg: a,
              avatarColor: r,
              containerSize: c,
              containerSizeLG: i,
              containerSizeSM: l,
              textFontSize: s,
              textFontSizeLG: d,
              textFontSizeSM: u,
              iconFontSize: m,
              iconFontSizeLG: f,
              iconFontSizeSM: b,
              borderRadius: v,
              borderRadiusLG: h,
              borderRadiusSM: y,
              lineWidth: E,
              lineType: w,
            } = t,
            x = (t, e, a, r) => ({
              width: t,
              height: t,
              borderRadius: "50%",
              fontSize: e,
              ["&".concat(o, "-square")]: { borderRadius: r },
              ["&".concat(o, "-icon")]: {
                fontSize: a,
                ["> ".concat(n)]: { margin: 0 },
              },
            });
          return {
            [o]: {
              ...(0, g.Wf)(t),
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              color: r,
              whiteSpace: "nowrap",
              textAlign: "center",
              verticalAlign: "middle",
              background: a,
              border: "".concat((0, p.bf)(E), " ").concat(w, " transparent"),
              "&-image": { background: "transparent" },
              ["".concat(e, "-image-img")]: { display: "block" },
              ...x(c, s, m, v),
              "&-lg": { ...x(i, d, f, h) },
              "&-sm": { ...x(l, u, b, y) },
              "> img": {
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            },
          };
        },
        h = (t) => {
          let {
            componentCls: e,
            groupBorderColor: o,
            groupOverlapping: n,
            groupSpace: a,
          } = t;
          return {
            ["".concat(e, "-group")]: {
              display: "inline-flex",
              [e]: { borderColor: o },
              "> *:not(:first-child)": { marginInlineStart: n },
            },
            ["".concat(e, "-group-popover")]: {
              ["".concat(e, " + ").concat(e)]: { marginInlineStart: a },
            },
          };
        };
      var y = (0, f.I$)(
        "Avatar",
        (t) => {
          let { colorTextLightSolid: e, colorTextPlaceholder: o } = t,
            n = (0, b.IX)(t, { avatarBg: o, avatarColor: e });
          return [v(n), h(n)];
        },
        (t) => {
          let {
            controlHeight: e,
            controlHeightLG: o,
            controlHeightSM: n,
            fontSize: a,
            fontSizeLG: r,
            fontSizeXL: c,
            fontSizeHeading3: i,
            marginXS: l,
            marginXXS: s,
            colorBorderBg: d,
          } = t;
          return {
            containerSize: e,
            containerSizeLG: o,
            containerSizeSM: n,
            textFontSize: a,
            textFontSizeLG: a,
            textFontSizeSM: a,
            iconFontSize: Math.round((r + c) / 2),
            iconFontSizeLG: i,
            iconFontSizeSM: a,
            groupSpace: s,
            groupOverlapping: -l,
            groupBorderColor: d,
          };
        }
      );
      let E = n.forwardRef((t, e) => {
        let o;
        let {
            prefixCls: p,
            shape: g,
            size: f,
            src: b,
            srcSet: v,
            icon: h,
            className: E,
            rootClassName: w,
            style: x,
            alt: S,
            draggable: C,
            children: N,
            crossOrigin: k,
            gap: W = 4,
            onError: z,
            ...Z
          } = t,
          [I, R] = n.useState(1),
          [T, B] = n.useState(!1),
          [M, F] = n.useState(!0),
          O = n.useRef(null),
          D = n.useRef(null),
          P = (0, r.sQ)(e, O),
          { getPrefixCls: j, className: _, style: A } = (0, l.dj)("avatar"),
          H = n.useContext(m),
          q = () => {
            if (!D.current || !O.current) return;
            let t = D.current.offsetWidth,
              e = O.current.offsetWidth;
            0 !== t &&
              0 !== e &&
              2 * W < e &&
              R(e - 2 * W < t ? (e - 2 * W) / t : 1);
          };
        n.useEffect(() => {
          B(!0);
        }, []),
          n.useEffect(() => {
            F(!0), R(1);
          }, [b]),
          n.useEffect(q, [W]);
        let V = (0, d.Z)((t) => {
            var e, o;
            return null !==
              (o =
                null !== (e = null != f ? f : null == H ? void 0 : H.size) &&
                void 0 !== e
                  ? e
                  : t) && void 0 !== o
              ? o
              : "default";
          }),
          L = Object.keys(("object" == typeof V && V) || {}).some((t) =>
            ["xs", "sm", "md", "lg", "xl", "xxl"].includes(t)
          ),
          G = (0, u.Z)(L),
          X = n.useMemo(() => {
            if ("object" != typeof V) return {};
            let t = V[i.c4.find((t) => G[t])];
            return t
              ? { width: t, height: t, fontSize: t && (h || N) ? t / 2 : 18 }
              : {};
          }, [G, V, h, N]),
          $ = j("avatar", p),
          Y = (0, s.Z)($),
          [K, Q] = y($, Y),
          U = (0, c.W)({
            ["".concat($, "-lg")]: "large" === V,
            ["".concat($, "-sm")]: "small" === V,
          }),
          J = n.isValidElement(b),
          tt = g || (null == H ? void 0 : H.shape) || "circle",
          te = (0, c.W)(
            $,
            U,
            _,
            "".concat($, "-").concat(tt),
            {
              ["".concat($, "-image")]: J || (b && M),
              ["".concat($, "-icon")]: !!h,
            },
            Q,
            Y,
            E,
            w,
            K
          ),
          to =
            "number" == typeof V
              ? { width: V, height: V, fontSize: h ? V / 2 : 18 }
              : {};
        if ("string" == typeof b && M)
          o = n.createElement("img", {
            src: b,
            draggable: C,
            srcSet: v,
            onError: () => {
              !1 !== (null == z ? void 0 : z()) && F(!1);
            },
            alt: S,
            crossOrigin: k,
          });
        else if (J) o = b;
        else if (h) o = h;
        else if (T || 1 !== I) {
          let t = "scale(".concat(I, ")");
          o = n.createElement(
            a.Z,
            { onResize: q },
            n.createElement(
              "span",
              {
                className: "".concat($, "-string"),
                ref: D,
                style: { msTransform: t, WebkitTransform: t, transform: t },
              },
              N
            )
          );
        } else
          o = n.createElement(
            "span",
            {
              className: "".concat($, "-string"),
              style: { opacity: 0 },
              ref: D,
            },
            N
          );
        return n.createElement(
          "span",
          { ...Z, style: { ...to, ...X, ...A, ...x }, className: te, ref: P },
          o
        );
      });
      var w = o(73627),
        x = o(19722),
        S = o(79326);
      let C = (t) => {
        let { size: e, shape: o } = n.useContext(m),
          a = n.useMemo(
            () => ({ size: t.size || e, shape: t.shape || o }),
            [t.size, t.shape, e, o]
          );
        return n.createElement(m.Provider, { value: a }, t.children);
      };
      E.Group = (t) => {
        let { getPrefixCls: e, direction: o } = n.useContext(l.E_),
          {
            prefixCls: a,
            className: r,
            rootClassName: i,
            style: d,
            maxCount: u,
            maxStyle: m,
            size: p,
            shape: g,
            maxPopoverPlacement: f,
            maxPopoverTrigger: b,
            children: v,
            max: h,
          } = t,
          N = e("avatar", a),
          k = "".concat(N, "-group"),
          W = (0, s.Z)(N),
          [z, Z] = y(N, W),
          I = (0, c.W)(
            k,
            { ["".concat(k, "-rtl")]: "rtl" === o },
            Z,
            W,
            r,
            i,
            z
          ),
          R = (0, w.qo)(v).map((t, e) =>
            (0, x.Tm)(t, { key: "avatar-key-".concat(e) })
          ),
          T = (null == h ? void 0 : h.count) || u,
          B = R.length;
        if (T && T < B) {
          var M, F, O;
          let t = R.slice(0, T),
            e = R.slice(T, B),
            o = (null == h ? void 0 : h.style) || m,
            a =
              (null == h
                ? void 0
                : null === (M = h.popover) || void 0 === M
                ? void 0
                : M.trigger) ||
              b ||
              "hover",
            r =
              (null == h
                ? void 0
                : null === (F = h.popover) || void 0 === F
                ? void 0
                : F.placement) ||
              f ||
              "top",
            i = {
              content: e,
              ...(null == h ? void 0 : h.popover),
              placement: r,
              trigger: a,
              rootClassName: (0, c.W)(
                "".concat(k, "-popover"),
                null == h
                  ? void 0
                  : null === (O = h.popover) || void 0 === O
                  ? void 0
                  : O.rootClassName
              ),
            };
          return (
            t.push(
              n.createElement(
                S.Z,
                { key: "avatar-popover-key", destroyOnHidden: !0, ...i },
                n.createElement(E, { style: o }, "+".concat(B - T))
              )
            ),
            n.createElement(
              C,
              { shape: g, size: p },
              n.createElement("div", { className: I, style: d }, t)
            )
          );
        }
        return n.createElement(
          C,
          { shape: g, size: p },
          n.createElement("div", { className: I, style: d }, R)
        );
      };
      var N = E;
    },
    35713: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return T;
        },
      });
      var n = o(2265),
        a = o(77031),
        r = o(61994),
        c = o(93350),
        i = o(80052),
        l = o(18390),
        s = o(19722),
        d = o(71744);
      let u = (t) => {
        let e;
        let { prefixCls: o, value: a, current: c, offset: i = 0 } = t;
        return (
          i &&
            (e = { position: "absolute", top: "".concat(i, "00%"), left: 0 }),
          n.createElement(
            "span",
            {
              style: e,
              className: (0, r.W)("".concat(o, "-only-unit"), { current: c }),
            },
            a
          )
        );
      };
      var m = (t) => {
        let e, o;
        let { prefixCls: a, count: r, value: c } = t,
          i = Number(c),
          l = Math.abs(r),
          [s, d] = n.useState(i),
          [m, p] = n.useState(l),
          g = () => {
            d(i), p(l);
          };
        if (
          (n.useEffect(() => {
            let t = setTimeout(g, 1e3);
            return () => clearTimeout(t);
          }, [i]),
          s === i || Number.isNaN(i) || Number.isNaN(s))
        )
          (e = [n.createElement(u, { ...t, key: i, current: !0 })]),
            (o = { transition: "none" });
        else {
          e = [];
          let a = i + 10,
            r = [];
          for (let t = i; t <= a; t += 1) r.push(t);
          let c = m < l ? 1 : -1,
            d = r.findIndex((t) => t % 10 === s);
          (e = (c < 0 ? r.slice(0, d + 1) : r.slice(d)).map((e, o) =>
            n.createElement(u, {
              ...t,
              key: e,
              value: e % 10,
              offset: c < 0 ? o - d : o,
              current: o === d,
            })
          )),
            (o = {
              transform: "translateY(".concat(
                -(function (t, e, o) {
                  let n = t,
                    a = 0;
                  for (; (n + 10) % 10 !== e; ) (n += o), (a += o);
                  return a;
                })(s, i, c),
                "00%)"
              ),
            });
        }
        return n.createElement(
          "span",
          { className: "".concat(a, "-only"), style: o, onTransitionEnd: g },
          e
        );
      };
      let p = n.forwardRef((t, e) => {
        let {
            prefixCls: o,
            count: a,
            className: c,
            motionClassName: i,
            style: l,
            title: u,
            show: p,
            component: g = "sup",
            children: f,
            ...b
          } = t,
          { getPrefixCls: v } = n.useContext(d.E_),
          h = v("scroll-number", o),
          y = {
            ...b,
            "data-show": p,
            style: l,
            className: (0, r.W)(h, c, i),
            title: u,
          },
          E = a;
        if (a && Number(a) % 1 == 0) {
          let t = String(a).split("");
          E = n.createElement(
            "bdi",
            null,
            t.map((e, o) =>
              n.createElement(m, {
                prefixCls: h,
                count: Number(a),
                value: e,
                key: t.length - o,
              })
            )
          );
        }
        return ((null == l ? void 0 : l.borderColor) &&
          (y.style = {
            ...l,
            boxShadow: "0 0 0 1px ".concat(l.borderColor, " inset"),
          }),
        f)
          ? (0, s.Tm)(f, (t) => ({
              className: (0, r.W)(
                "".concat(h, "-custom-component"),
                null == t ? void 0 : t.className,
                i
              ),
            }))
          : n.createElement(g, { ...y, ref: e }, E);
      });
      var g = o(38775),
        f = o(12918),
        b = o(18536),
        v = o(19224),
        h = o(99320);
      let y = new g.E4("antStatusProcessing", {
          "0%": { transform: "scale(0.8)", opacity: 0.5 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        }),
        E = new g.E4("antZoomBadgeIn", {
          "0%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
          "100%": { transform: "scale(1) translate(50%, -50%)" },
        }),
        w = new g.E4("antZoomBadgeOut", {
          "0%": { transform: "scale(1) translate(50%, -50%)" },
          "100%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
        }),
        x = new g.E4("antNoWrapperZoomBadgeIn", {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)" },
        }),
        S = new g.E4("antNoWrapperZoomBadgeOut", {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)", opacity: 0 },
        }),
        C = new g.E4("antBadgeLoadingCircle", {
          "0%": { transformOrigin: "50%" },
          "100%": {
            transform: "translate(50%, -50%) rotate(360deg)",
            transformOrigin: "50%",
          },
        }),
        N = (t) => {
          let {
              componentCls: e,
              iconCls: o,
              antCls: n,
              badgeShadowSize: a,
              textFontSize: r,
              textFontSizeSM: c,
              statusSize: i,
              dotSize: l,
              textFontWeight: s,
              indicatorHeight: d,
              indicatorHeightSM: u,
              marginXS: m,
              calc: p,
            } = t,
            v = "".concat(n, "-scroll-number"),
            h = (0, b.Z)(t, (t, o) => {
              let { darkColor: n } = o;
              return {
                ["&".concat(e, " ").concat(e, "-color-").concat(t)]: {
                  background: n,
                  ["&:not(".concat(e, "-count)")]: { color: n },
                  "a:hover &": { background: n },
                },
              };
            });
          return {
            [e]: {
              ...(0, f.Wf)(t),
              position: "relative",
              display: "inline-block",
              width: "fit-content",
              lineHeight: 1,
              ["".concat(e, "-count")]: {
                display: "inline-flex",
                justifyContent: "center",
                zIndex: t.indicatorZIndex,
                minWidth: d,
                height: d,
                color: t.badgeTextColor,
                fontWeight: s,
                fontSize: r,
                lineHeight: (0, g.bf)(d),
                whiteSpace: "nowrap",
                textAlign: "center",
                background: t.badgeColor,
                borderRadius: p(d).div(2).equal(),
                boxShadow: "0 0 0 "
                  .concat((0, g.bf)(a), " ")
                  .concat(t.badgeShadowColor),
                transition: "background ".concat(t.motionDurationMid),
                a: { color: t.badgeTextColor },
                "a:hover": { color: t.badgeTextColor },
                "a:hover &": { background: t.badgeColorHover },
              },
              ["".concat(e, "-count-sm")]: {
                minWidth: u,
                height: u,
                fontSize: c,
                lineHeight: (0, g.bf)(u),
                borderRadius: p(u).div(2).equal(),
              },
              ["".concat(e, "-multiple-words")]: {
                padding: "0 ".concat((0, g.bf)(t.paddingXS)),
                bdi: { unicodeBidi: "plaintext" },
              },
              ["".concat(e, "-dot")]: {
                zIndex: t.indicatorZIndex,
                width: l,
                minWidth: l,
                height: l,
                background: t.badgeColor,
                borderRadius: "100%",
                boxShadow: "0 0 0 "
                  .concat((0, g.bf)(a), " ")
                  .concat(t.badgeShadowColor),
              },
              [""
                .concat(e, "-count, ")
                .concat(e, "-dot, ")
                .concat(v, "-custom-component")]: {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                transform: "translate(50%, -50%)",
                transformOrigin: "100% 0%",
                ["&".concat(o, "-spin")]: {
                  animationName: C,
                  animationDuration: "1s",
                  animationIterationCount: "infinite",
                  animationTimingFunction: "linear",
                },
              },
              ["&".concat(e, "-status")]: {
                lineHeight: "inherit",
                verticalAlign: "baseline",
                ["".concat(e, "-status-dot")]: {
                  position: "relative",
                  top: -1,
                  display: "inline-block",
                  width: i,
                  height: i,
                  verticalAlign: "middle",
                  borderRadius: "50%",
                },
                ["".concat(e, "-status-success")]: {
                  backgroundColor: t.colorSuccess,
                },
                ["".concat(e, "-status-processing")]: {
                  overflow: "visible",
                  color: t.colorInfo,
                  backgroundColor: t.colorInfo,
                  borderColor: "currentcolor",
                  "&::after": {
                    position: "absolute",
                    top: 0,
                    insetInlineStart: 0,
                    width: "100%",
                    height: "100%",
                    borderWidth: a,
                    borderStyle: "solid",
                    borderColor: "inherit",
                    borderRadius: "50%",
                    animationName: y,
                    animationDuration: t.badgeProcessingDuration,
                    animationIterationCount: "infinite",
                    animationTimingFunction: "ease-in-out",
                    content: '""',
                  },
                },
                ["".concat(e, "-status-default")]: {
                  backgroundColor: t.colorTextPlaceholder,
                },
                ["".concat(e, "-status-error")]: {
                  backgroundColor: t.colorError,
                },
                ["".concat(e, "-status-warning")]: {
                  backgroundColor: t.colorWarning,
                },
                ["".concat(e, "-status-text")]: {
                  marginInlineStart: m,
                  color: t.colorText,
                  fontSize: t.fontSize,
                },
              },
              ...h,
              ["".concat(e, "-zoom-appear, ").concat(e, "-zoom-enter")]: {
                animationName: E,
                animationDuration: t.motionDurationSlow,
                animationTimingFunction: t.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["".concat(e, "-zoom-leave")]: {
                animationName: w,
                animationDuration: t.motionDurationSlow,
                animationTimingFunction: t.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["&".concat(e, "-not-a-wrapper")]: {
                ["".concat(e, "-zoom-appear, ").concat(e, "-zoom-enter")]: {
                  animationName: x,
                  animationDuration: t.motionDurationSlow,
                  animationTimingFunction: t.motionEaseOutBack,
                },
                ["".concat(e, "-zoom-leave")]: {
                  animationName: S,
                  animationDuration: t.motionDurationSlow,
                  animationTimingFunction: t.motionEaseOutBack,
                },
                ["&:not(".concat(e, "-status)")]: { verticalAlign: "middle" },
                ["".concat(v, "-custom-component, ").concat(e, "-count")]: {
                  transform: "none",
                },
                ["".concat(v, "-custom-component, ").concat(v)]: {
                  position: "relative",
                  top: "auto",
                  display: "block",
                  transformOrigin: "50% 50%",
                },
              },
              [v]: {
                overflow: "hidden",
                transition: "all "
                  .concat(t.motionDurationMid, " ")
                  .concat(t.motionEaseOutBack),
                ["".concat(v, "-only")]: {
                  position: "relative",
                  display: "inline-block",
                  height: d,
                  transition: "all "
                    .concat(t.motionDurationSlow, " ")
                    .concat(t.motionEaseOutBack),
                  WebkitTransformStyle: "preserve-3d",
                  WebkitBackfaceVisibility: "hidden",
                  ["> p".concat(v, "-only-unit")]: {
                    height: d,
                    margin: 0,
                    WebkitTransformStyle: "preserve-3d",
                    WebkitBackfaceVisibility: "hidden",
                  },
                },
                ["".concat(v, "-symbol")]: { verticalAlign: "top" },
              },
              "&-rtl": {
                direction: "rtl",
                [""
                  .concat(e, "-count, ")
                  .concat(e, "-dot, ")
                  .concat(v, "-custom-component")]: {
                  transform: "translate(-50%, -50%)",
                },
              },
            },
          };
        },
        k = (t) => {
          let {
              fontHeight: e,
              lineWidth: o,
              marginXS: n,
              colorBorderBg: a,
            } = t,
            r = t.colorTextLightSolid,
            c = t.colorError,
            i = t.colorErrorHover;
          return (0, v.IX)(t, {
            badgeFontHeight: e,
            badgeShadowSize: o,
            badgeTextColor: r,
            badgeColor: c,
            badgeColorHover: i,
            badgeShadowColor: a,
            badgeProcessingDuration: "1.2s",
            badgeRibbonOffset: n,
            badgeRibbonCornerTransform: "scaleY(0.75)",
            badgeRibbonCornerFilter: "brightness(75%)",
          });
        },
        W = (t) => {
          let { fontSize: e, lineHeight: o, fontSizeSM: n, lineWidth: a } = t;
          return {
            indicatorZIndex: "auto",
            indicatorHeight: Math.round(e * o) - 2 * a,
            indicatorHeightSM: e,
            dotSize: n / 2,
            textFontSize: n,
            textFontSizeSM: n,
            textFontWeight: "normal",
            statusSize: n / 2,
          };
        };
      var z = (0, h.I$)("Badge", (t) => N(k(t)), W);
      let Z = n.forwardRef((t, e) => {
          let {
              prefixCls: o,
              scrollNumberPrefixCls: u,
              children: m,
              status: g,
              text: f,
              color: b,
              count: v = null,
              overflowCount: h = 99,
              dot: y = !1,
              size: E = "default",
              title: w,
              offset: x,
              style: S,
              className: C,
              rootClassName: N,
              classNames: k,
              styles: W,
              showZero: Z = !1,
              ...I
            } = t,
            {
              getPrefixCls: R,
              direction: T,
              className: B,
              style: M,
              classNames: F,
              styles: O,
            } = (0, d.dj)("badge"),
            D = R("badge", o),
            [P, j] = z(D),
            _ = { ...t, overflowCount: h, size: E, dot: y, showZero: Z },
            [A, H] = (0, i.MW)([F, k], [O, W], { props: _ }),
            q = v > h ? "".concat(h, "+") : v,
            V = "0" === q || 0 === q || "0" === f || 0 === f,
            L = null === v || (V && !Z),
            G = ((0, l.Z)(g) || (0, l.Z)(b)) && L,
            X = (0, l.Z)(g) || !V,
            $ = y && !V,
            Y = $ ? "" : q,
            K = (0, n.useMemo)(
              () =>
                (((!(0, l.Z)(Y) || "" === Y) && (!(0, l.Z)(f) || "" === f)) ||
                  (V && !Z)) &&
                !$,
              [Y, V, Z, $, f]
            ),
            Q = (0, n.useRef)(v);
          K || (Q.current = v);
          let U = Q.current,
            J = (0, n.useRef)(Y);
          K || (J.current = Y);
          let tt = J.current,
            te = (0, n.useRef)($);
          K || (te.current = $);
          let to = (0, n.useMemo)(() => {
              if (!x) return { ...M, ...S };
              let t = Number.parseInt(x[0], 10);
              return { marginTop: x[1], insetInlineEnd: -t, ...M, ...S };
            }, [x, S, M]),
            tn =
              null != w
                ? w
                : "string" == typeof U || "number" == typeof U
                ? U
                : void 0,
            ta = !K && (0 === f ? Z : !!f && !0 !== f),
            tr = ta
              ? n.createElement(
                  "span",
                  { className: "".concat(D, "-status-text") },
                  f
                )
              : null,
            tc =
              U && "object" == typeof U
                ? (0, s.Tm)(U, (t) => ({ style: { ...to, ...t.style } }))
                : void 0,
            ti = (0, c.o2)(b, !1),
            tl = (0, r.W)(A.indicator, {
              ["".concat(D, "-status-dot")]: G,
              ["".concat(D, "-status-").concat(g)]: !!g,
              ["".concat(D, "-color-").concat(b)]: ti,
            }),
            ts = {};
          b && !ti && ((ts.color = b), (ts.background = b));
          let td = (0, r.W)(
            D,
            {
              ["".concat(D, "-status")]: G,
              ["".concat(D, "-not-a-wrapper")]: !m,
              ["".concat(D, "-rtl")]: "rtl" === T,
            },
            C,
            N,
            B,
            A.root,
            P,
            j
          );
          if (!m && G && (f || X || !L)) {
            let t = to.color;
            return n.createElement(
              "span",
              { ...I, className: td, style: { ...H.root, ...to } },
              n.createElement("span", {
                className: tl,
                style: { ...H.indicator, ...ts },
              }),
              ta &&
                n.createElement(
                  "span",
                  {
                    style: { color: t },
                    className: "".concat(D, "-status-text"),
                  },
                  f
                )
            );
          }
          return n.createElement(
            "span",
            { ref: e, ...I, className: td, style: H.root },
            m,
            n.createElement(
              a.ZP,
              {
                visible: !K,
                motionName: "".concat(D, "-zoom"),
                motionAppear: !1,
                motionDeadline: 1e3,
              },
              (t) => {
                let { className: e } = t,
                  o = R("scroll-number", u),
                  a = te.current,
                  c = (0, r.W)(A.indicator, {
                    ["".concat(D, "-dot")]: a,
                    ["".concat(D, "-count")]: !a,
                    ["".concat(D, "-count-sm")]: "small" === E,
                    ["".concat(D, "-multiple-words")]:
                      !a && tt && tt.toString().length > 1,
                    ["".concat(D, "-status-").concat(g)]: !!g,
                    ["".concat(D, "-color-").concat(b)]: ti,
                  }),
                  i = { ...H.indicator, ...to };
                return (
                  b && !ti && ((i = i || {}).background = b),
                  n.createElement(
                    p,
                    {
                      prefixCls: o,
                      show: !K,
                      motionClassName: e,
                      className: c,
                      count: tt,
                      title: tn,
                      style: i,
                      key: "scrollNumber",
                    },
                    tc
                  )
                );
              }
            ),
            tr
          );
        }),
        I = (t) => {
          let {
              antCls: e,
              badgeFontHeight: o,
              marginXS: n,
              badgeRibbonOffset: a,
              calc: r,
            } = t,
            c = "".concat(e, "-ribbon"),
            i = (0, b.Z)(t, (t, e) => {
              let { darkColor: o } = e;
              return {
                ["&".concat(c, "-color-").concat(t)]: {
                  background: o,
                  color: o,
                },
              };
            });
          return {
            ["".concat(e, "-ribbon-wrapper")]: { position: "relative" },
            [c]: {
              ...(0, f.Wf)(t),
              position: "absolute",
              top: n,
              padding: "0 ".concat((0, g.bf)(t.paddingXS)),
              color: t.colorPrimary,
              lineHeight: (0, g.bf)(o),
              whiteSpace: "nowrap",
              backgroundColor: t.colorPrimary,
              borderRadius: t.borderRadiusSM,
              ["".concat(c, "-content")]: { color: t.badgeTextColor },
              ["".concat(c, "-corner")]: {
                position: "absolute",
                top: "100%",
                width: a,
                height: a,
                color: "currentcolor",
                border: "".concat((0, g.bf)(r(a).div(2).equal()), " solid"),
                transform: t.badgeRibbonCornerTransform,
                transformOrigin: "top",
                filter: t.badgeRibbonCornerFilter,
              },
              ...i,
              ["&".concat(c, "-placement-end")]: {
                insetInlineEnd: r(a).mul(-1).equal(),
                borderEndEndRadius: 0,
                ["".concat(c, "-corner")]: {
                  insetInlineEnd: 0,
                  borderInlineEndColor: "transparent",
                  borderBlockEndColor: "transparent",
                },
              },
              ["&".concat(c, "-placement-start")]: {
                insetInlineStart: r(a).mul(-1).equal(),
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
      var R = (0, h.I$)(["Badge", "Ribbon"], (t) => I(k(t)), W);
      Z.Ribbon = (t) => {
        let {
            className: e,
            prefixCls: o,
            style: a,
            color: l,
            children: s,
            text: u,
            placement: m = "end",
            rootClassName: p,
            styles: g,
            classNames: f,
          } = t,
          {
            getPrefixCls: b,
            direction: v,
            className: h,
            style: y,
            classNames: E,
            styles: w,
          } = (0, d.dj)("ribbon"),
          x = b("ribbon", o),
          S = "".concat(x, "-wrapper"),
          [C, N] = R(x, S),
          k = { ...t, placement: m },
          [W, z] = (0, i.MW)([E, f], [w, g], { props: k }),
          Z = (0, c.o2)(l, !1),
          I = (0, r.W)(
            x,
            "".concat(x, "-placement-").concat(m),
            {
              ["".concat(x, "-rtl")]: "rtl" === v,
              ["".concat(x, "-color-").concat(l)]: Z,
            },
            e,
            h,
            W.indicator
          ),
          T = {},
          B = {};
        return (
          l && !Z && ((T.background = l), (B.color = l)),
          n.createElement(
            "div",
            { className: (0, r.W)(S, p, C, N, W.root), style: z.root },
            s,
            n.createElement(
              "div",
              {
                className: (0, r.W)(I, C),
                style: { ...T, ...z.indicator, ...y, ...a },
              },
              n.createElement(
                "span",
                {
                  className: (0, r.W)("".concat(x, "-content"), W.content),
                  style: z.content,
                },
                u
              ),
              n.createElement("div", {
                className: "".concat(x, "-corner"),
                style: B,
              })
            )
          )
        );
      };
      var T = Z;
    },
    20435: function (t, e, o) {
      o.d(e, {
        aV: function () {
          return d;
        },
        t5: function () {
          return u;
        },
      });
      var n = o(2265),
        a = o(51115),
        r = o(61994),
        c = o(92570),
        i = o(80052),
        l = o(71744),
        s = o(72262);
      let d = (t) => {
          let {
            title: e,
            content: o,
            prefixCls: a,
            classNames: c,
            styles: i,
          } = t;
          return e || o
            ? n.createElement(
                n.Fragment,
                null,
                e &&
                  n.createElement(
                    "div",
                    {
                      className: (0, r.W)(
                        "".concat(a, "-title"),
                        null == c ? void 0 : c.title
                      ),
                      style: null == i ? void 0 : i.title,
                    },
                    e
                  ),
                o &&
                  n.createElement(
                    "div",
                    {
                      className: (0, r.W)(
                        "".concat(a, "-content"),
                        null == c ? void 0 : c.content
                      ),
                      style: null == i ? void 0 : i.content,
                    },
                    o
                  )
              )
            : null;
        },
        u = (t) => {
          let {
              hashId: e,
              prefixCls: o,
              className: l,
              style: s,
              placement: u = "top",
              title: m,
              content: p,
              children: g,
              classNames: f,
              styles: b,
            } = t,
            v = (0, c.Z)(m),
            h = (0, c.Z)(p),
            y = { ...t, placement: u },
            [E, w] = (0, i.MW)([f], [b], { props: y }),
            x = (0, r.W)(
              e,
              o,
              "".concat(o, "-pure"),
              "".concat(o, "-placement-").concat(u),
              l
            );
          return n.createElement(
            "div",
            { className: x, style: s },
            n.createElement("div", { className: "".concat(o, "-arrow") }),
            n.createElement(
              a.G,
              { ...t, className: e, prefixCls: o, classNames: E, styles: w },
              g ||
                n.createElement(d, {
                  prefixCls: o,
                  title: v,
                  content: h,
                  classNames: E,
                  styles: w,
                })
            )
          );
        };
      e.ZP = (t) => {
        let { prefixCls: e, className: o, ...a } = t,
          { getPrefixCls: c } = n.useContext(l.E_),
          i = c("popover", e),
          [d, m] = (0, s.Z)(i);
        return n.createElement(u, {
          ...a,
          prefixCls: i,
          hashId: d,
          className: (0, r.W)(o, m),
        });
      };
    },
    79326: function (t, e, o) {
      var n = o(2265),
        a = o(73627),
        r = o(74576),
        c = o(61994),
        i = o(92570),
        l = o(80052),
        s = o(68710),
        d = o(19722),
        u = o(71744),
        m = o(89970),
        p = o(2331),
        g = o(20435),
        f = o(72262);
      let b = n.forwardRef((t, e) => {
        var o;
        let {
            prefixCls: b,
            title: v,
            content: h,
            overlayClassName: y,
            placement: E = "top",
            trigger: w,
            children: x,
            mouseEnterDelay: S = 0.1,
            mouseLeaveDelay: C = 0.1,
            onOpenChange: N,
            overlayStyle: k = {},
            styles: W,
            classNames: z,
            motion: Z,
            arrow: I,
            ...R
          } = t,
          {
            getPrefixCls: T,
            className: B,
            style: M,
            classNames: F,
            styles: O,
            arrow: D,
            trigger: P,
          } = (0, u.dj)("popover"),
          j = T("popover", b),
          [_, A] = (0, f.Z)(j),
          H = T(),
          q = (0, p.Z)(I, D),
          V = w || P || "hover",
          L = {
            ...t,
            placement: E,
            trigger: V,
            mouseEnterDelay: S,
            mouseLeaveDelay: C,
            overlayStyle: k,
            styles: W,
            classNames: z,
          },
          [G, X] = (0, l.MW)([F, z], [O, W], { props: L }),
          $ = (0, c.W)(y, _, A, B, G.root),
          [Y, K] = (0, a.zk)(
            null !== (o = t.defaultOpen) && void 0 !== o && o,
            t.open
          ),
          Q = (t, e) => {
            K(t), null == N || N(t, e);
          },
          U = (t) => {
            t.keyCode === r.default.ESC && Q(!1, t);
          },
          J = (0, i.Z)(v),
          tt = (0, i.Z)(h);
        return n.createElement(
          m.Z,
          {
            unique: !1,
            arrow: q,
            placement: E,
            trigger: V,
            mouseEnterDelay: S,
            mouseLeaveDelay: C,
            ...R,
            prefixCls: j,
            classNames: { root: $, container: G.container, arrow: G.arrow },
            styles: {
              root: { ...X.root, ...M, ...k },
              container: X.container,
              arrow: X.arrow,
            },
            ref: e,
            open: Y,
            onOpenChange: (t) => {
              Q(t);
            },
            overlay:
              J || tt
                ? n.createElement(g.aV, {
                    prefixCls: j,
                    title: J,
                    content: tt,
                    classNames: G,
                    styles: X,
                  })
                : null,
            motion: {
              motionName: (0, s.m)(
                H,
                "zoom-big",
                "string" == typeof (null == Z ? void 0 : Z.motionName)
                  ? null == Z
                    ? void 0
                    : Z.motionName
                  : void 0
              ),
            },
            "data-popover-inject": !0,
          },
          (0, d.Tm)(x, {
            onKeyDown: (t) => {
              if ((0, n.isValidElement)(x)) {
                var e, o;
                null == x ||
                  null === (e = (o = x.props).onKeyDown) ||
                  void 0 === e ||
                  e.call(o, t);
              }
              U(t);
            },
          })
        );
      });
      (b._InternalPanelDoNotUseOrYouWillBeFired = g.ZP), (e.Z = b);
    },
    72262: function (t, e, o) {
      var n = o(12918),
        a = o(691),
        r = o(88260),
        c = o(34442),
        i = o(53454),
        l = o(99320),
        s = o(19224);
      let d = (t) => {
          let {
            componentCls: e,
            popoverColor: o,
            titleMinWidth: a,
            fontWeightStrong: c,
            innerPadding: i,
            boxShadowSecondary: l,
            colorTextHeading: s,
            borderRadiusLG: d,
            zIndexPopup: u,
            titleMarginBottom: m,
            colorBgElevated: p,
            popoverBg: g,
            titleBorderBottom: f,
            innerContentPadding: b,
            titlePadding: v,
          } = t;
          return [
            {
              [e]: {
                ...(0, n.Wf)(t),
                position: "absolute",
                top: 0,
                left: { _skip_check_: !0, value: 0 },
                zIndex: u,
                fontWeight: "normal",
                whiteSpace: "normal",
                textAlign: "start",
                cursor: "auto",
                userSelect: "text",
                "--valid-offset-x":
                  "var(--arrow-offset-horizontal, var(--arrow-x))",
                transformOrigin:
                  "var(--valid-offset-x, 50%) var(--arrow-y, 50%)",
                "--antd-arrow-background-color": p,
                width: "max-content",
                maxWidth: "100vw",
                "&-rtl": { direction: "rtl" },
                "&-hidden": { display: "none" },
                ["".concat(e, "-content")]: { position: "relative" },
                ["".concat(e, "-container")]: {
                  backgroundColor: g,
                  backgroundClip: "padding-box",
                  borderRadius: d,
                  boxShadow: l,
                  padding: i,
                },
                ["".concat(e, "-title")]: {
                  minWidth: a,
                  marginBottom: m,
                  color: s,
                  fontWeight: c,
                  borderBottom: f,
                  padding: v,
                },
                ["".concat(e, "-content")]: { color: o, padding: b },
              },
            },
            (0, r.ZP)(t, "var(--antd-arrow-background-color)"),
            {
              ["".concat(e, "-pure")]: {
                position: "relative",
                maxWidth: "none",
                margin: t.sizePopupArrow,
                display: "inline-block",
              },
            },
          ];
        },
        u = (t) => {
          let { componentCls: e } = t;
          return {
            [e]: i.i.map((o) => {
              let n = t["".concat(o, "6")];
              return {
                ["&".concat(e, "-").concat(o)]: {
                  "--antd-arrow-background-color": n,
                  ["".concat(e, "-inner")]: { backgroundColor: n },
                  ["".concat(e, "-arrow")]: { background: "transparent" },
                },
              };
            }),
          };
        };
      e.Z = (0, l.I$)(
        "Popover",
        (t) => {
          let { colorBgElevated: e, colorText: o } = t,
            n = (0, s.IX)(t, { popoverBg: e, popoverColor: o });
          return [d(n), u(n), (0, a._y)(n, "zoom-big")];
        },
        (t) => {
          let {
              lineWidth: e,
              controlHeight: o,
              fontHeight: n,
              padding: a,
              wireframe: i,
              zIndexPopupBase: l,
              borderRadiusLG: s,
              marginXS: d,
              lineType: u,
              colorSplit: m,
              paddingSM: p,
            } = t,
            g = o - n;
          return {
            titleMinWidth: 177,
            zIndexPopup: l + 30,
            ...(0, c.w)(t),
            ...(0, r.wZ)({ contentRadius: s, limitVerticalRadius: !0 }),
            innerPadding: i ? 0 : 12,
            titleMarginBottom: i ? 0 : d,
            titlePadding: i
              ? ""
                  .concat(g / 2, "px ")
                  .concat(a, "px ")
                  .concat(g / 2 - e, "px")
              : 0,
            titleBorderBottom: i
              ? "".concat(e, "px ").concat(u, " ").concat(m)
              : "none",
            innerContentPadding: i ? "".concat(p, "px ").concat(a, "px") : 0,
          };
        },
        {
          resetStyle: !1,
          deprecatedTokens: [
            ["width", "titleMinWidth"],
            ["minWidth", "titleMinWidth"],
          ],
        }
      );
    },
  },
]);
