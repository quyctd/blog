"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9736, 6931],
  {
    38434: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = o(2265),
        a = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z",
                },
              },
            ],
          },
          name: "file-text",
          theme: "outlined",
        },
        c = o(55015);
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var l = n.forwardRef((t, e) =>
        n.createElement(c.Z, r({}, t, { ref: e, icon: a }))
      );
    },
    79237: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return l;
        },
      });
      var n = o(2265),
        a = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z",
                },
              },
            ],
          },
          name: "vertical-align-top",
          theme: "outlined",
        },
        c = o(55015);
      function r() {
        return (r = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var o = arguments[e];
                for (var n in o)
                  Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var l = n.forwardRef((t, e) =>
        n.createElement(c.Z, r({}, t, { ref: e, icon: a }))
      );
    },
    6733: function (t, e, o) {
      var n = o(19103),
        a = o(72014);
      e.Z = function (t) {
        let e = null,
          o = (o) => () => {
            (e = null), t.apply(void 0, (0, n.Z)(o));
          },
          c = function () {
            for (var t = arguments.length, n = Array(t), c = 0; c < t; c++)
              n[c] = arguments[c];
            null === e && (e = (0, a.Z)(o(n)));
          };
        return (
          (c.cancel = () => {
            a.Z.cancel(e), (e = null);
          }),
          c
        );
      };
    },
    91652: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return N;
        },
      });
      var n = o(2265),
        a = o(25532),
        c = o(90062),
        r = o(61994),
        l = o(6543),
        i = o(71744),
        s = o(64024),
        d = o(33759),
        m = o(28617);
      let u = n.createContext({});
      var g = o(38775),
        p = o(12918),
        f = o(99320),
        b = o(19224);
      let h = (t) => {
          let {
              antCls: e,
              componentCls: o,
              iconCls: n,
              avatarBg: a,
              avatarColor: c,
              containerSize: r,
              containerSizeLG: l,
              containerSizeSM: i,
              textFontSize: s,
              textFontSizeLG: d,
              textFontSizeSM: m,
              iconFontSize: u,
              iconFontSizeLG: f,
              iconFontSizeSM: b,
              borderRadius: h,
              borderRadiusLG: v,
              borderRadiusSM: y,
              lineWidth: S,
              lineType: x,
            } = t,
            E = (t, e, a, c) => ({
              width: t,
              height: t,
              borderRadius: "50%",
              fontSize: e,
              ["&".concat(o, "-square")]: { borderRadius: c },
              ["&".concat(o, "-icon")]: {
                fontSize: a,
                ["> ".concat(n)]: { margin: 0 },
              },
            });
          return {
            [o]: {
              ...(0, p.Wf)(t),
              position: "relative",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
              color: c,
              whiteSpace: "nowrap",
              textAlign: "center",
              verticalAlign: "middle",
              background: a,
              border: "".concat((0, g.bf)(S), " ").concat(x, " transparent"),
              "&-image": { background: "transparent" },
              ["".concat(e, "-image-img")]: { display: "block" },
              ...E(r, s, u, h),
              "&-lg": { ...E(l, d, f, v) },
              "&-sm": { ...E(i, m, b, y) },
              "> img": {
                display: "block",
                width: "100%",
                height: "100%",
                objectFit: "cover",
              },
            },
          };
        },
        v = (t) => {
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
          return [h(n), v(n)];
        },
        (t) => {
          let {
            controlHeight: e,
            controlHeightLG: o,
            controlHeightSM: n,
            fontSize: a,
            fontSizeLG: c,
            fontSizeXL: r,
            fontSizeHeading3: l,
            marginXS: i,
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
            iconFontSize: Math.round((c + r) / 2),
            iconFontSizeLG: l,
            iconFontSizeSM: a,
            groupSpace: s,
            groupOverlapping: -i,
            groupBorderColor: d,
          };
        }
      );
      let S = n.forwardRef((t, e) => {
        let o;
        let {
            prefixCls: g,
            shape: p,
            size: f,
            src: b,
            srcSet: h,
            icon: v,
            className: S,
            rootClassName: x,
            style: E,
            alt: C,
            draggable: k,
            children: N,
            crossOrigin: z,
            gap: w = 4,
            onError: W,
            ...I
          } = t,
          [B, T] = n.useState(1),
          [M, Z] = n.useState(!1),
          [R, H] = n.useState(!0),
          L = n.useRef(null),
          D = n.useRef(null),
          P = (0, c.sQ)(e, L),
          { getPrefixCls: F, className: G, style: O } = (0, i.dj)("avatar"),
          j = n.useContext(u),
          q = () => {
            if (!D.current || !L.current) return;
            let t = D.current.offsetWidth,
              e = L.current.offsetWidth;
            0 !== t &&
              0 !== e &&
              2 * w < e &&
              T(e - 2 * w < t ? (e - 2 * w) / t : 1);
          };
        n.useEffect(() => {
          Z(!0);
        }, []),
          n.useEffect(() => {
            H(!0), T(1);
          }, [b]),
          n.useEffect(q, [w]);
        let X = (0, d.Z)((t) => {
            var e, o;
            return null !==
              (o =
                null !== (e = null != f ? f : null == j ? void 0 : j.size) &&
                void 0 !== e
                  ? e
                  : t) && void 0 !== o
              ? o
              : "default";
          }),
          A = Object.keys(("object" == typeof X && X) || {}).some((t) =>
            ["xs", "sm", "md", "lg", "xl", "xxl"].includes(t)
          ),
          _ = (0, m.Z)(A),
          V = n.useMemo(() => {
            if ("object" != typeof X) return {};
            let t = X[l.c4.find((t) => _[t])];
            return t
              ? { width: t, height: t, fontSize: t && (v || N) ? t / 2 : 18 }
              : {};
          }, [_, X, v, N]),
          $ = F("avatar", g),
          Q = (0, s.Z)($),
          [Y, J] = y($, Q),
          U = (0, r.W)({
            ["".concat($, "-lg")]: "large" === X,
            ["".concat($, "-sm")]: "small" === X,
          }),
          K = n.isValidElement(b),
          tt = p || (null == j ? void 0 : j.shape) || "circle",
          te = (0, r.W)(
            $,
            U,
            G,
            "".concat($, "-").concat(tt),
            {
              ["".concat($, "-image")]: K || (b && R),
              ["".concat($, "-icon")]: !!v,
            },
            J,
            Q,
            S,
            x,
            Y
          ),
          to =
            "number" == typeof X
              ? { width: X, height: X, fontSize: v ? X / 2 : 18 }
              : {};
        if ("string" == typeof b && R)
          o = n.createElement("img", {
            src: b,
            draggable: k,
            srcSet: h,
            onError: () => {
              !1 !== (null == W ? void 0 : W()) && H(!1);
            },
            alt: C,
            crossOrigin: z,
          });
        else if (K) o = b;
        else if (v) o = v;
        else if (M || 1 !== B) {
          let t = "scale(".concat(B, ")");
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
          { ...I, style: { ...to, ...V, ...O, ...E }, className: te, ref: P },
          o
        );
      });
      var x = o(73627),
        E = o(19722),
        C = o(79326);
      let k = (t) => {
        let { size: e, shape: o } = n.useContext(u),
          a = n.useMemo(
            () => ({ size: t.size || e, shape: t.shape || o }),
            [t.size, t.shape, e, o]
          );
        return n.createElement(u.Provider, { value: a }, t.children);
      };
      S.Group = (t) => {
        let { getPrefixCls: e, direction: o } = n.useContext(i.E_),
          {
            prefixCls: a,
            className: c,
            rootClassName: l,
            style: d,
            maxCount: m,
            maxStyle: u,
            size: g,
            shape: p,
            maxPopoverPlacement: f,
            maxPopoverTrigger: b,
            children: h,
            max: v,
          } = t,
          N = e("avatar", a),
          z = "".concat(N, "-group"),
          w = (0, s.Z)(N),
          [W, I] = y(N, w),
          B = (0, r.W)(
            z,
            { ["".concat(z, "-rtl")]: "rtl" === o },
            I,
            w,
            c,
            l,
            W
          ),
          T = (0, x.qo)(h).map((t, e) =>
            (0, E.Tm)(t, { key: "avatar-key-".concat(e) })
          ),
          M = (null == v ? void 0 : v.count) || m,
          Z = T.length;
        if (M && M < Z) {
          var R, H, L;
          let t = T.slice(0, M),
            e = T.slice(M, Z),
            o = (null == v ? void 0 : v.style) || u,
            a =
              (null == v
                ? void 0
                : null === (R = v.popover) || void 0 === R
                ? void 0
                : R.trigger) ||
              b ||
              "hover",
            c =
              (null == v
                ? void 0
                : null === (H = v.popover) || void 0 === H
                ? void 0
                : H.placement) ||
              f ||
              "top",
            l = {
              content: e,
              ...(null == v ? void 0 : v.popover),
              placement: c,
              trigger: a,
              rootClassName: (0, r.W)(
                "".concat(z, "-popover"),
                null == v
                  ? void 0
                  : null === (L = v.popover) || void 0 === L
                  ? void 0
                  : L.rootClassName
              ),
            };
          return (
            t.push(
              n.createElement(
                C.Z,
                { key: "avatar-popover-key", destroyOnHidden: !0, ...l },
                n.createElement(S, { style: o }, "+".concat(Z - M))
              )
            ),
            n.createElement(
              k,
              { shape: p, size: g },
              n.createElement("div", { className: B, style: d }, t)
            )
          );
        }
        return n.createElement(
          k,
          { shape: p, size: g },
          n.createElement("div", { className: B, style: d }, T)
        );
      };
      var N = S;
    },
    35713: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return M;
        },
      });
      var n = o(2265),
        a = o(77031),
        c = o(61994),
        r = o(93350),
        l = o(80052),
        i = o(18390),
        s = o(19722),
        d = o(71744);
      let m = (t) => {
        let e;
        let { prefixCls: o, value: a, current: r, offset: l = 0 } = t;
        return (
          l &&
            (e = { position: "absolute", top: "".concat(l, "00%"), left: 0 }),
          n.createElement(
            "span",
            {
              style: e,
              className: (0, c.W)("".concat(o, "-only-unit"), { current: r }),
            },
            a
          )
        );
      };
      var u = (t) => {
        let e, o;
        let { prefixCls: a, count: c, value: r } = t,
          l = Number(r),
          i = Math.abs(c),
          [s, d] = n.useState(l),
          [u, g] = n.useState(i),
          p = () => {
            d(l), g(i);
          };
        if (
          (n.useEffect(() => {
            let t = setTimeout(p, 1e3);
            return () => clearTimeout(t);
          }, [l]),
          s === l || Number.isNaN(l) || Number.isNaN(s))
        )
          (e = [n.createElement(m, { ...t, key: l, current: !0 })]),
            (o = { transition: "none" });
        else {
          e = [];
          let a = l + 10,
            c = [];
          for (let t = l; t <= a; t += 1) c.push(t);
          let r = u < i ? 1 : -1,
            d = c.findIndex((t) => t % 10 === s);
          (e = (r < 0 ? c.slice(0, d + 1) : c.slice(d)).map((e, o) =>
            n.createElement(m, {
              ...t,
              key: e,
              value: e % 10,
              offset: r < 0 ? o - d : o,
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
                })(s, l, r),
                "00%)"
              ),
            });
        }
        return n.createElement(
          "span",
          { className: "".concat(a, "-only"), style: o, onTransitionEnd: p },
          e
        );
      };
      let g = n.forwardRef((t, e) => {
        let {
            prefixCls: o,
            count: a,
            className: r,
            motionClassName: l,
            style: i,
            title: m,
            show: g,
            component: p = "sup",
            children: f,
            ...b
          } = t,
          { getPrefixCls: h } = n.useContext(d.E_),
          v = h("scroll-number", o),
          y = {
            ...b,
            "data-show": g,
            style: i,
            className: (0, c.W)(v, r, l),
            title: m,
          },
          S = a;
        if (a && Number(a) % 1 == 0) {
          let t = String(a).split("");
          S = n.createElement(
            "bdi",
            null,
            t.map((e, o) =>
              n.createElement(u, {
                prefixCls: v,
                count: Number(a),
                value: e,
                key: t.length - o,
              })
            )
          );
        }
        return ((null == i ? void 0 : i.borderColor) &&
          (y.style = {
            ...i,
            boxShadow: "0 0 0 1px ".concat(i.borderColor, " inset"),
          }),
        f)
          ? (0, s.Tm)(f, (t) => ({
              className: (0, c.W)(
                "".concat(v, "-custom-component"),
                null == t ? void 0 : t.className,
                l
              ),
            }))
          : n.createElement(p, { ...y, ref: e }, S);
      });
      var p = o(38775),
        f = o(12918),
        b = o(18536),
        h = o(19224),
        v = o(99320);
      let y = new p.E4("antStatusProcessing", {
          "0%": { transform: "scale(0.8)", opacity: 0.5 },
          "100%": { transform: "scale(2.4)", opacity: 0 },
        }),
        S = new p.E4("antZoomBadgeIn", {
          "0%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
          "100%": { transform: "scale(1) translate(50%, -50%)" },
        }),
        x = new p.E4("antZoomBadgeOut", {
          "0%": { transform: "scale(1) translate(50%, -50%)" },
          "100%": { transform: "scale(0) translate(50%, -50%)", opacity: 0 },
        }),
        E = new p.E4("antNoWrapperZoomBadgeIn", {
          "0%": { transform: "scale(0)", opacity: 0 },
          "100%": { transform: "scale(1)" },
        }),
        C = new p.E4("antNoWrapperZoomBadgeOut", {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)", opacity: 0 },
        }),
        k = new p.E4("antBadgeLoadingCircle", {
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
              textFontSize: c,
              textFontSizeSM: r,
              statusSize: l,
              dotSize: i,
              textFontWeight: s,
              indicatorHeight: d,
              indicatorHeightSM: m,
              marginXS: u,
              calc: g,
            } = t,
            h = "".concat(n, "-scroll-number"),
            v = (0, b.Z)(t, (t, o) => {
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
                fontSize: c,
                lineHeight: (0, p.bf)(d),
                whiteSpace: "nowrap",
                textAlign: "center",
                background: t.badgeColor,
                borderRadius: g(d).div(2).equal(),
                boxShadow: "0 0 0 "
                  .concat((0, p.bf)(a), " ")
                  .concat(t.badgeShadowColor),
                transition: "background ".concat(t.motionDurationMid),
                a: { color: t.badgeTextColor },
                "a:hover": { color: t.badgeTextColor },
                "a:hover &": { background: t.badgeColorHover },
              },
              ["".concat(e, "-count-sm")]: {
                minWidth: m,
                height: m,
                fontSize: r,
                lineHeight: (0, p.bf)(m),
                borderRadius: g(m).div(2).equal(),
              },
              ["".concat(e, "-multiple-words")]: {
                padding: "0 ".concat((0, p.bf)(t.paddingXS)),
                bdi: { unicodeBidi: "plaintext" },
              },
              ["".concat(e, "-dot")]: {
                zIndex: t.indicatorZIndex,
                width: i,
                minWidth: i,
                height: i,
                background: t.badgeColor,
                borderRadius: "100%",
                boxShadow: "0 0 0 "
                  .concat((0, p.bf)(a), " ")
                  .concat(t.badgeShadowColor),
              },
              [""
                .concat(e, "-count, ")
                .concat(e, "-dot, ")
                .concat(h, "-custom-component")]: {
                position: "absolute",
                top: 0,
                insetInlineEnd: 0,
                transform: "translate(50%, -50%)",
                transformOrigin: "100% 0%",
                ["&".concat(o, "-spin")]: {
                  animationName: k,
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
                  width: l,
                  height: l,
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
                  marginInlineStart: u,
                  color: t.colorText,
                  fontSize: t.fontSize,
                },
              },
              ...v,
              ["".concat(e, "-zoom-appear, ").concat(e, "-zoom-enter")]: {
                animationName: S,
                animationDuration: t.motionDurationSlow,
                animationTimingFunction: t.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["".concat(e, "-zoom-leave")]: {
                animationName: x,
                animationDuration: t.motionDurationSlow,
                animationTimingFunction: t.motionEaseOutBack,
                animationFillMode: "both",
              },
              ["&".concat(e, "-not-a-wrapper")]: {
                ["".concat(e, "-zoom-appear, ").concat(e, "-zoom-enter")]: {
                  animationName: E,
                  animationDuration: t.motionDurationSlow,
                  animationTimingFunction: t.motionEaseOutBack,
                },
                ["".concat(e, "-zoom-leave")]: {
                  animationName: C,
                  animationDuration: t.motionDurationSlow,
                  animationTimingFunction: t.motionEaseOutBack,
                },
                ["&:not(".concat(e, "-status)")]: { verticalAlign: "middle" },
                ["".concat(h, "-custom-component, ").concat(e, "-count")]: {
                  transform: "none",
                },
                ["".concat(h, "-custom-component, ").concat(h)]: {
                  position: "relative",
                  top: "auto",
                  display: "block",
                  transformOrigin: "50% 50%",
                },
              },
              [h]: {
                overflow: "hidden",
                transition: "all "
                  .concat(t.motionDurationMid, " ")
                  .concat(t.motionEaseOutBack),
                ["".concat(h, "-only")]: {
                  position: "relative",
                  display: "inline-block",
                  height: d,
                  transition: "all "
                    .concat(t.motionDurationSlow, " ")
                    .concat(t.motionEaseOutBack),
                  WebkitTransformStyle: "preserve-3d",
                  WebkitBackfaceVisibility: "hidden",
                  ["> p".concat(h, "-only-unit")]: {
                    height: d,
                    margin: 0,
                    WebkitTransformStyle: "preserve-3d",
                    WebkitBackfaceVisibility: "hidden",
                  },
                },
                ["".concat(h, "-symbol")]: { verticalAlign: "top" },
              },
              "&-rtl": {
                direction: "rtl",
                [""
                  .concat(e, "-count, ")
                  .concat(e, "-dot, ")
                  .concat(h, "-custom-component")]: {
                  transform: "translate(-50%, -50%)",
                },
              },
            },
          };
        },
        z = (t) => {
          let {
              fontHeight: e,
              lineWidth: o,
              marginXS: n,
              colorBorderBg: a,
            } = t,
            c = t.colorTextLightSolid,
            r = t.colorError,
            l = t.colorErrorHover;
          return (0, h.IX)(t, {
            badgeFontHeight: e,
            badgeShadowSize: o,
            badgeTextColor: c,
            badgeColor: r,
            badgeColorHover: l,
            badgeShadowColor: a,
            badgeProcessingDuration: "1.2s",
            badgeRibbonOffset: n,
            badgeRibbonCornerTransform: "scaleY(0.75)",
            badgeRibbonCornerFilter: "brightness(75%)",
          });
        },
        w = (t) => {
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
      var W = (0, v.I$)("Badge", (t) => N(z(t)), w);
      let I = n.forwardRef((t, e) => {
          let {
              prefixCls: o,
              scrollNumberPrefixCls: m,
              children: u,
              status: p,
              text: f,
              color: b,
              count: h = null,
              overflowCount: v = 99,
              dot: y = !1,
              size: S = "default",
              title: x,
              offset: E,
              style: C,
              className: k,
              rootClassName: N,
              classNames: z,
              styles: w,
              showZero: I = !1,
              ...B
            } = t,
            {
              getPrefixCls: T,
              direction: M,
              className: Z,
              style: R,
              classNames: H,
              styles: L,
            } = (0, d.dj)("badge"),
            D = T("badge", o),
            [P, F] = W(D),
            G = { ...t, overflowCount: v, size: S, dot: y, showZero: I },
            [O, j] = (0, l.MW)([H, z], [L, w], { props: G }),
            q = h > v ? "".concat(v, "+") : h,
            X = "0" === q || 0 === q || "0" === f || 0 === f,
            A = null === h || (X && !I),
            _ = ((0, i.Z)(p) || (0, i.Z)(b)) && A,
            V = (0, i.Z)(p) || !X,
            $ = y && !X,
            Q = $ ? "" : q,
            Y = (0, n.useMemo)(
              () =>
                (((!(0, i.Z)(Q) || "" === Q) && (!(0, i.Z)(f) || "" === f)) ||
                  (X && !I)) &&
                !$,
              [Q, X, I, $, f]
            ),
            J = (0, n.useRef)(h);
          Y || (J.current = h);
          let U = J.current,
            K = (0, n.useRef)(Q);
          Y || (K.current = Q);
          let tt = K.current,
            te = (0, n.useRef)($);
          Y || (te.current = $);
          let to = (0, n.useMemo)(() => {
              if (!E) return { ...R, ...C };
              let t = Number.parseInt(E[0], 10);
              return { marginTop: E[1], insetInlineEnd: -t, ...R, ...C };
            }, [E, C, R]),
            tn =
              null != x
                ? x
                : "string" == typeof U || "number" == typeof U
                ? U
                : void 0,
            ta = !Y && (0 === f ? I : !!f && !0 !== f),
            tc = ta
              ? n.createElement(
                  "span",
                  { className: "".concat(D, "-status-text") },
                  f
                )
              : null,
            tr =
              U && "object" == typeof U
                ? (0, s.Tm)(U, (t) => ({ style: { ...to, ...t.style } }))
                : void 0,
            tl = (0, r.o2)(b, !1),
            ti = (0, c.W)(O.indicator, {
              ["".concat(D, "-status-dot")]: _,
              ["".concat(D, "-status-").concat(p)]: !!p,
              ["".concat(D, "-color-").concat(b)]: tl,
            }),
            ts = {};
          b && !tl && ((ts.color = b), (ts.background = b));
          let td = (0, c.W)(
            D,
            {
              ["".concat(D, "-status")]: _,
              ["".concat(D, "-not-a-wrapper")]: !u,
              ["".concat(D, "-rtl")]: "rtl" === M,
            },
            k,
            N,
            Z,
            O.root,
            P,
            F
          );
          if (!u && _ && (f || V || !A)) {
            let t = to.color;
            return n.createElement(
              "span",
              { ...B, className: td, style: { ...j.root, ...to } },
              n.createElement("span", {
                className: ti,
                style: { ...j.indicator, ...ts },
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
            { ref: e, ...B, className: td, style: j.root },
            u,
            n.createElement(
              a.ZP,
              {
                visible: !Y,
                motionName: "".concat(D, "-zoom"),
                motionAppear: !1,
                motionDeadline: 1e3,
              },
              (t) => {
                let { className: e } = t,
                  o = T("scroll-number", m),
                  a = te.current,
                  r = (0, c.W)(O.indicator, {
                    ["".concat(D, "-dot")]: a,
                    ["".concat(D, "-count")]: !a,
                    ["".concat(D, "-count-sm")]: "small" === S,
                    ["".concat(D, "-multiple-words")]:
                      !a && tt && tt.toString().length > 1,
                    ["".concat(D, "-status-").concat(p)]: !!p,
                    ["".concat(D, "-color-").concat(b)]: tl,
                  }),
                  l = { ...j.indicator, ...to };
                return (
                  b && !tl && ((l = l || {}).background = b),
                  n.createElement(
                    g,
                    {
                      prefixCls: o,
                      show: !Y,
                      motionClassName: e,
                      className: r,
                      count: tt,
                      title: tn,
                      style: l,
                      key: "scrollNumber",
                    },
                    tr
                  )
                );
              }
            ),
            tc
          );
        }),
        B = (t) => {
          let {
              antCls: e,
              badgeFontHeight: o,
              marginXS: n,
              badgeRibbonOffset: a,
              calc: c,
            } = t,
            r = "".concat(e, "-ribbon"),
            l = (0, b.Z)(t, (t, e) => {
              let { darkColor: o } = e;
              return {
                ["&".concat(r, "-color-").concat(t)]: {
                  background: o,
                  color: o,
                },
              };
            });
          return {
            ["".concat(e, "-ribbon-wrapper")]: { position: "relative" },
            [r]: {
              ...(0, f.Wf)(t),
              position: "absolute",
              top: n,
              padding: "0 ".concat((0, p.bf)(t.paddingXS)),
              color: t.colorPrimary,
              lineHeight: (0, p.bf)(o),
              whiteSpace: "nowrap",
              backgroundColor: t.colorPrimary,
              borderRadius: t.borderRadiusSM,
              ["".concat(r, "-content")]: { color: t.badgeTextColor },
              ["".concat(r, "-corner")]: {
                position: "absolute",
                top: "100%",
                width: a,
                height: a,
                color: "currentcolor",
                border: "".concat((0, p.bf)(c(a).div(2).equal()), " solid"),
                transform: t.badgeRibbonCornerTransform,
                transformOrigin: "top",
                filter: t.badgeRibbonCornerFilter,
              },
              ...l,
              ["&".concat(r, "-placement-end")]: {
                insetInlineEnd: c(a).mul(-1).equal(),
                borderEndEndRadius: 0,
                ["".concat(r, "-corner")]: {
                  insetInlineEnd: 0,
                  borderInlineEndColor: "transparent",
                  borderBlockEndColor: "transparent",
                },
              },
              ["&".concat(r, "-placement-start")]: {
                insetInlineStart: c(a).mul(-1).equal(),
                borderEndStartRadius: 0,
                ["".concat(r, "-corner")]: {
                  insetInlineStart: 0,
                  borderBlockEndColor: "transparent",
                  borderInlineStartColor: "transparent",
                },
              },
              "&-rtl": { direction: "rtl" },
            },
          };
        };
      var T = (0, v.I$)(["Badge", "Ribbon"], (t) => B(z(t)), w);
      I.Ribbon = (t) => {
        let {
            className: e,
            prefixCls: o,
            style: a,
            color: i,
            children: s,
            text: m,
            placement: u = "end",
            rootClassName: g,
            styles: p,
            classNames: f,
          } = t,
          {
            getPrefixCls: b,
            direction: h,
            className: v,
            style: y,
            classNames: S,
            styles: x,
          } = (0, d.dj)("ribbon"),
          E = b("ribbon", o),
          C = "".concat(E, "-wrapper"),
          [k, N] = T(E, C),
          z = { ...t, placement: u },
          [w, W] = (0, l.MW)([S, f], [x, p], { props: z }),
          I = (0, r.o2)(i, !1),
          B = (0, c.W)(
            E,
            "".concat(E, "-placement-").concat(u),
            {
              ["".concat(E, "-rtl")]: "rtl" === h,
              ["".concat(E, "-color-").concat(i)]: I,
            },
            e,
            v,
            w.indicator
          ),
          M = {},
          Z = {};
        return (
          i && !I && ((M.background = i), (Z.color = i)),
          n.createElement(
            "div",
            { className: (0, c.W)(C, g, k, N, w.root), style: W.root },
            s,
            n.createElement(
              "div",
              {
                className: (0, c.W)(B, k),
                style: { ...M, ...W.indicator, ...y, ...a },
              },
              n.createElement(
                "span",
                {
                  className: (0, c.W)("".concat(E, "-content"), w.content),
                  style: W.content,
                },
                m
              ),
              n.createElement("div", {
                className: "".concat(E, "-corner"),
                style: Z,
              })
            )
          )
        );
      };
      var M = I;
    },
    96931: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return W;
        },
      });
      var n = o(2265),
        a = o(73627),
        c = o(61994),
        r = o(80052),
        l = o(71744),
        i = o(33759),
        s = o(56250),
        d = o(50337),
        m = o(50639),
        u = (t) => {
          let { prefixCls: e, className: o, hoverable: a = !0, ...r } = t,
            { getPrefixCls: i } = n.useContext(l.E_),
            s = i("card", e),
            d = (0, c.W)("".concat(s, "-grid"), o, {
              ["".concat(s, "-grid-hoverable")]: a,
            });
          return n.createElement("div", { ...r, className: d });
        },
        g = o(38775),
        p = o(12918),
        f = o(99320),
        b = o(19224);
      let h = (t) => {
          let {
            antCls: e,
            componentCls: o,
            headerHeight: n,
            headerPadding: a,
            tabsMarginBottom: c,
          } = t;
          return {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: n,
            marginBottom: -1,
            padding: "0 ".concat((0, g.bf)(a)),
            color: t.colorTextHeading,
            fontWeight: t.fontWeightStrong,
            fontSize: t.headerFontSize,
            background: t.headerBg,
            borderBottom: ""
              .concat((0, g.bf)(t.lineWidth), " ")
              .concat(t.lineType, " ")
              .concat(t.colorBorderSecondary),
            borderRadius: ""
              .concat((0, g.bf)(t.borderRadiusLG), " ")
              .concat((0, g.bf)(t.borderRadiusLG), " 0 0"),
            ...(0, p.dF)(),
            "&-wrapper": {
              width: "100%",
              display: "flex",
              alignItems: "center",
            },
            "&-title": {
              display: "inline-block",
              flex: 1,
              ...p.vS,
              ["\n          > "
                .concat(o, "-typography,\n          > ")
                .concat(o, "-typography-edit-content\n        ")]: {
                insetInlineStart: 0,
                marginTop: 0,
                marginBottom: 0,
              },
            },
            ["".concat(e, "-tabs-top")]: {
              clear: "both",
              marginBottom: c,
              color: t.colorText,
              fontWeight: "normal",
              fontSize: t.fontSize,
              "&-bar": {
                borderBottom: ""
                  .concat((0, g.bf)(t.lineWidth), " ")
                  .concat(t.lineType, " ")
                  .concat(t.colorBorderSecondary),
              },
            },
          };
        },
        v = (t) => {
          let {
            cardPaddingBase: e,
            colorBorderSecondary: o,
            cardShadow: n,
            lineWidth: a,
          } = t;
          return {
            width: "33.33%",
            padding: e,
            border: 0,
            borderRadius: 0,
            boxShadow: "\n      "
              .concat((0, g.bf)(a), " 0 0 0 ")
              .concat(o, ",\n      0 ")
              .concat((0, g.bf)(a), " 0 0 ")
              .concat(o, ",\n      ")
              .concat((0, g.bf)(a), " ")
              .concat((0, g.bf)(a), " 0 0 ")
              .concat(o, ",\n      ")
              .concat((0, g.bf)(a), " 0 0 0 ")
              .concat(o, " inset,\n      0 ")
              .concat((0, g.bf)(a), " 0 0 ")
              .concat(o, " inset;\n    "),
            transition: "all ".concat(t.motionDurationMid),
            "&-hoverable:hover": {
              position: "relative",
              zIndex: 1,
              boxShadow: n,
            },
          };
        },
        y = (t) => {
          let {
            componentCls: e,
            iconCls: o,
            actionsLiMargin: n,
            cardActionsIconSize: a,
            colorBorderSecondary: c,
            actionsBg: r,
          } = t;
          return {
            margin: 0,
            padding: 0,
            listStyle: "none",
            background: r,
            borderTop: ""
              .concat((0, g.bf)(t.lineWidth), " ")
              .concat(t.lineType, " ")
              .concat(c),
            display: "flex",
            borderRadius: "0 0 "
              .concat((0, g.bf)(t.borderRadiusLG), " ")
              .concat((0, g.bf)(t.borderRadiusLG)),
            ...(0, p.dF)(),
            "& > li": {
              margin: n,
              color: t.colorTextDescription,
              textAlign: "center",
              "> span": {
                position: "relative",
                display: "block",
                minWidth: t.calc(t.cardActionsIconSize).mul(2).equal(),
                fontSize: t.fontSize,
                lineHeight: t.lineHeight,
                cursor: "pointer",
                "&:hover": {
                  color: t.colorPrimary,
                  transition: "color ".concat(t.motionDurationMid),
                },
                ["a:not(".concat(e, "-btn), > ").concat(o)]: {
                  display: "inline-block",
                  width: "100%",
                  color: t.colorIcon,
                  lineHeight: (0, g.bf)(t.fontHeight),
                  transition: "color ".concat(t.motionDurationMid),
                  "&:hover": { color: t.colorPrimary },
                },
                ["> ".concat(o)]: {
                  fontSize: a,
                  lineHeight: (0, g.bf)(t.calc(a).mul(t.lineHeight).equal()),
                },
              },
              "&:not(:last-child)": {
                borderInlineEnd: ""
                  .concat((0, g.bf)(t.lineWidth), " ")
                  .concat(t.lineType, " ")
                  .concat(c),
              },
            },
          };
        },
        S = (t) => ({
          margin: "".concat(
            (0, g.bf)(t.calc(t.marginXXS).mul(-1).equal()),
            " 0"
          ),
          display: "flex",
          ...(0, p.dF)(),
          "&-avatar": { paddingInlineEnd: t.padding },
          "&-section": {
            overflow: "hidden",
            flex: 1,
            "> div:not(:last-child)": { marginBottom: t.marginXS },
          },
          "&-title": {
            color: t.colorTextHeading,
            fontWeight: t.fontWeightStrong,
            fontSize: t.fontSizeLG,
            ...p.vS,
          },
          "&-description": { color: t.colorTextDescription },
        }),
        x = (t) => {
          let {
            componentCls: e,
            colorFillAlter: o,
            headerPadding: n,
            bodyPadding: a,
          } = t;
          return {
            ["".concat(e, "-head")]: {
              padding: "0 ".concat((0, g.bf)(n)),
              background: o,
              "&-title": { fontSize: t.fontSize },
            },
            ["".concat(e, "-body")]: {
              padding: ""
                .concat((0, g.bf)(t.padding), " ")
                .concat((0, g.bf)(a)),
            },
          };
        },
        E = (t) => {
          let { componentCls: e } = t;
          return {
            overflow: "hidden",
            ["".concat(e, "-body")]: { userSelect: "none" },
          };
        },
        C = (t) => {
          let {
            componentCls: e,
            cardShadow: o,
            cardHeadPadding: n,
            colorBorderSecondary: a,
            boxShadowTertiary: c,
            bodyPadding: r,
            extraColor: l,
          } = t;
          return {
            [e]: {
              ...(0, p.Wf)(t),
              position: "relative",
              background: t.colorBgContainer,
              borderRadius: t.borderRadiusLG,
              ["&:not(".concat(e, "-bordered)")]: { boxShadow: c },
              ["".concat(e, "-head")]: h(t),
              ["".concat(e, "-extra")]: {
                marginInlineStart: "auto",
                color: l,
                fontWeight: "normal",
                fontSize: t.fontSize,
              },
              ["".concat(e, "-body")]: {
                padding: r,
                borderRadius: "0 0 "
                  .concat((0, g.bf)(t.borderRadiusLG), " ")
                  .concat((0, g.bf)(t.borderRadiusLG)),
              },
              ["".concat(e, "-grid")]: v(t),
              ["".concat(e, "-cover")]: {
                "> *": {
                  display: "block",
                  width: "100%",
                  borderRadius: ""
                    .concat((0, g.bf)(t.borderRadiusLG), " ")
                    .concat((0, g.bf)(t.borderRadiusLG), " 0 0"),
                },
              },
              ["".concat(e, "-actions")]: y(t),
              ["".concat(e, "-meta")]: S(t),
            },
            ["".concat(e, "-bordered")]: {
              border: ""
                .concat((0, g.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(a),
              ["".concat(e, "-cover")]: {
                marginTop: -1,
                marginInlineStart: -1,
                marginInlineEnd: -1,
              },
            },
            ["".concat(e, "-hoverable")]: {
              cursor: "pointer",
              transition: "box-shadow "
                .concat(t.motionDurationMid, ", border-color ")
                .concat(t.motionDurationMid),
              "&:hover": { borderColor: "transparent", boxShadow: o },
            },
            ["".concat(e, "-contain-grid")]: {
              borderRadius: ""
                .concat((0, g.bf)(t.borderRadiusLG), " ")
                .concat((0, g.bf)(t.borderRadiusLG), " 0 0 "),
              ["".concat(e, "-body")]: { display: "flex", flexWrap: "wrap" },
              ["&:not(".concat(e, "-loading) ").concat(e, "-body")]: {
                marginBlockStart: t.calc(t.lineWidth).mul(-1).equal(),
                marginInlineStart: t.calc(t.lineWidth).mul(-1).equal(),
                padding: 0,
              },
            },
            ["".concat(e, "-contain-tabs")]: {
              ["> div".concat(e, "-head")]: {
                minHeight: 0,
                ["".concat(e, "-head-title, ").concat(e, "-extra")]: {
                  paddingTop: n,
                },
              },
            },
            ["".concat(e, "-type-inner")]: x(t),
            ["".concat(e, "-loading")]: E(t),
            ["".concat(e, "-rtl")]: { direction: "rtl" },
          };
        },
        k = (t) => {
          let {
            componentCls: e,
            bodyPaddingSM: o,
            headerPaddingSM: n,
            headerHeightSM: a,
            headerFontSizeSM: c,
          } = t;
          return {
            ["".concat(e, "-small")]: {
              ["> ".concat(e, "-head")]: {
                minHeight: a,
                padding: "0 ".concat((0, g.bf)(n)),
                fontSize: c,
                ["> ".concat(e, "-head-wrapper")]: {
                  ["> ".concat(e, "-extra")]: { fontSize: t.fontSize },
                },
              },
              ["> ".concat(e, "-body")]: { padding: o },
            },
            ["".concat(e, "-small").concat(e, "-contain-tabs")]: {
              ["> ".concat(e, "-head")]: {
                ["".concat(e, "-head-title, ").concat(e, "-extra")]: {
                  paddingTop: 0,
                  display: "flex",
                  alignItems: "center",
                },
              },
            },
          };
        };
      var N = (0, f.I$)(
        "Card",
        (t) => {
          let e = (0, b.IX)(t, {
            cardShadow: t.boxShadowCard,
            cardHeadPadding: t.padding,
            cardPaddingBase: t.paddingLG,
            cardActionsIconSize: t.fontSize,
          });
          return [C(e), k(e)];
        },
        (t) => {
          var e, o;
          return {
            headerBg: "transparent",
            headerFontSize: t.fontSizeLG,
            headerFontSizeSM: t.fontSize,
            headerHeight: t.fontSizeLG * t.lineHeightLG + 2 * t.padding,
            headerHeightSM: t.fontSize * t.lineHeight + 2 * t.paddingXS,
            actionsBg: t.colorBgContainer,
            actionsLiMargin: "".concat(t.paddingSM, "px 0"),
            tabsMarginBottom: -t.padding - t.lineWidth,
            extraColor: t.colorText,
            bodyPaddingSM: 12,
            headerPaddingSM: 12,
            bodyPadding:
              null !== (e = t.bodyPadding) && void 0 !== e ? e : t.paddingLG,
            headerPadding:
              null !== (o = t.headerPadding) && void 0 !== o ? o : t.paddingLG,
          };
        }
      );
      let z = (t) => {
          let { actionClasses: e, actions: o = [], actionStyle: a } = t;
          return n.createElement(
            "ul",
            { className: e, style: a },
            o.map((t, e) =>
              n.createElement(
                "li",
                {
                  style: { width: "".concat(100 / o.length, "%") },
                  key: "action-".concat(e),
                },
                n.createElement("span", null, t)
              )
            )
          );
        },
        w = n.forwardRef((t, e) => {
          let o;
          let {
              prefixCls: g,
              className: p,
              rootClassName: f,
              style: b,
              extra: h,
              headStyle: v = {},
              bodyStyle: y = {},
              title: S,
              loading: x,
              bordered: E,
              variant: C,
              size: k,
              type: w,
              cover: W,
              actions: I,
              tabList: B,
              children: T,
              activeTabKey: M,
              defaultActiveTabKey: Z,
              tabBarExtraContent: R,
              hoverable: H,
              tabProps: L = {},
              classNames: D,
              styles: P,
              ...F
            } = t,
            {
              getPrefixCls: G,
              direction: O,
              className: j,
              style: q,
              classNames: X,
              styles: A,
            } = (0, l.dj)("card"),
            [_] = (0, s.Z)("card", C, E),
            V = (0, i.Z)(k),
            $ = { ...t, size: V, variant: _, loading: x },
            [Q, Y] = (0, r.MW)([X, D], [A, P], { props: $ }),
            J = n.useMemo(
              () =>
                (0, a.qo)(T).some((t) => n.isValidElement(t) && t.type === u),
              [T]
            ),
            U = G("card", g),
            [K, tt] = N(U),
            te = n.createElement(
              d.Z,
              { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
              T
            ),
            to = void 0 !== M,
            tn = {
              ...L,
              [to ? "activeKey" : "defaultActiveKey"]: to ? M : Z,
              tabBarExtraContent: R,
            },
            ta = V && "default" !== V ? V : "large",
            tc = B
              ? n.createElement(m.default, {
                  size: ta,
                  ...tn,
                  className: "".concat(U, "-head-tabs"),
                  onChange: (e) => {
                    var o;
                    null === (o = t.onTabChange) ||
                      void 0 === o ||
                      o.call(t, e);
                  },
                  items: B.map((t) => {
                    let { tab: e, ...o } = t;
                    return { label: e, ...o };
                  }),
                })
              : null;
          if (S || h || tc) {
            let t = (0, c.W)("".concat(U, "-head"), Q.header),
              e = (0, c.W)("".concat(U, "-head-title"), Q.title),
              a = (0, c.W)("".concat(U, "-extra"), Q.extra),
              r = { ...v, ...Y.header };
            o = n.createElement(
              "div",
              { className: t, style: r },
              n.createElement(
                "div",
                { className: "".concat(U, "-head-wrapper") },
                S &&
                  n.createElement("div", { className: e, style: Y.title }, S),
                h && n.createElement("div", { className: a, style: Y.extra }, h)
              ),
              tc
            );
          }
          let tr = (0, c.W)("".concat(U, "-cover"), Q.cover),
            tl = W
              ? n.createElement("div", { className: tr, style: Y.cover }, W)
              : null,
            ti = (0, c.W)("".concat(U, "-body"), Q.body),
            ts = { ...y, ...Y.body },
            td = n.createElement(
              "div",
              { className: ti, style: ts },
              x ? te : T
            ),
            tm = (0, c.W)("".concat(U, "-actions"), Q.actions),
            tu = (null == I ? void 0 : I.length)
              ? n.createElement(z, {
                  actionClasses: tm,
                  actionStyle: Y.actions,
                  actions: I,
                })
              : null,
            tg = (0, a.CE)(F, ["onTabChange"]),
            tp = (0, c.W)(
              U,
              j,
              {
                ["".concat(U, "-loading")]: x,
                ["".concat(U, "-bordered")]: "borderless" !== _,
                ["".concat(U, "-hoverable")]: H,
                ["".concat(U, "-contain-grid")]: J,
                ["".concat(U, "-contain-tabs")]: null == B ? void 0 : B.length,
                ["".concat(U, "-").concat(V)]: V,
                ["".concat(U, "-type-").concat(w)]: !!w,
                ["".concat(U, "-rtl")]: "rtl" === O,
              },
              p,
              f,
              K,
              tt,
              Q.root
            ),
            tf = { ...Y.root, ...q, ...b };
          return n.createElement(
            "div",
            { ref: e, ...tg, className: tp, style: tf },
            o,
            tl,
            td,
            tu
          );
        });
      (w.Grid = u),
        (w.Meta = (t) => {
          let {
              prefixCls: e,
              className: o,
              avatar: a,
              title: i,
              description: s,
              style: d,
              classNames: m,
              styles: u,
              ...g
            } = t,
            {
              getPrefixCls: p,
              className: f,
              style: b,
              classNames: h,
              styles: v,
            } = (0, l.dj)("cardMeta"),
            y = p("card", e),
            S = "".concat(y, "-meta"),
            [x, E] = (0, r.MW)([h, m], [v, u], { props: t }),
            C = (0, c.W)(S, o, f, x.root),
            k = { ...b, ...E.root, ...d },
            N = (0, c.W)("".concat(S, "-avatar"), x.avatar),
            z = (0, c.W)("".concat(S, "-title"), x.title),
            w = (0, c.W)("".concat(S, "-description"), x.description),
            W = (0, c.W)("".concat(S, "-section"), x.section),
            I = a
              ? n.createElement("div", { className: N, style: E.avatar }, a)
              : null,
            B = i
              ? n.createElement("div", { className: z, style: E.title }, i)
              : null,
            T = s
              ? n.createElement(
                  "div",
                  { className: w, style: E.description },
                  s
                )
              : null,
            M =
              B || T
                ? n.createElement(
                    "div",
                    { className: W, style: E.section },
                    B,
                    T
                  )
                : null;
          return n.createElement("div", { ...g, className: C, style: k }, I, M);
        });
      var W = w;
    },
    13088: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return F;
        },
      });
      var n = o(2265),
        a = o(79237),
        c = o(77031),
        r = o(90062),
        l = o(61994),
        i = o(50289),
        s = o(18370),
        d = o(6733),
        m = o(71744);
      let u = n.createContext(null);
      var g = o(38434),
        p = o(73627),
        f = o(31591),
        b = o(80052),
        h = o(62236),
        v = o(35713),
        y = o(82383),
        S = o(64024),
        x = o(89970),
        E = o(11699),
        C = o(99320),
        k = o(19224),
        N = o(38775),
        z = (t) => {
          let {
              componentCls: e,
              floatButtonSize: o,
              iconCls: n,
              antCls: a,
              floatButtonIconSize: c,
            } = t,
            r = (0, C.o_)(a, "float-btn"),
            l = "".concat(e, "-badge"),
            i = Math.SQRT2,
            s = (i - 1) / i,
            d = t.calc(t.borderRadius).mul(s).equal(),
            m = t.calc(t.controlHeight).div(2).mul(s).equal();
          return {
            [e]: [
              { [r("size")]: (0, N.bf)(o) },
              {
                flexDirection: "column",
                margin: 0,
                padding: "".concat((0, N.bf)(t.paddingXXS), " 0"),
                width: "var(".concat(r("size"), ")"),
                minHeight: "var(".concat(r("size"), ")"),
                height: "auto",
                wordBreak: "break-word",
                whiteSpace: "normal",
                gap: t.calc(t.paddingXXS).div(2).equal(),
                "&-rtl": { direction: "rtl" },
                ["&".concat(e, "-individual")]: {
                  position: "fixed",
                  zIndex: t.zIndexPopupBase,
                  insetInlineEnd: t.floatButtonInsetInlineEnd,
                  bottom: t.floatButtonInsetBlockEnd,
                  boxShadow: t.boxShadowSecondary,
                },
                ["&".concat(e, "-pure")]: {
                  position: "relative",
                  inset: "auto",
                },
                "&:empty": { display: "none" },
                ["".concat(e, "-icon")]: { lineHeight: 1 },
                ["&".concat(e, "-icon-only")]: { [n]: { fontSize: c } },
                ["".concat(e, "-content")]: { fontSize: t.fontSizeSM },
                [l]: {
                  position: "absolute",
                  top: 0,
                  insetInlineEnd: 0,
                  ["&:not(".concat(l, "-dot)")]: {
                    transform: "translate(50%, -50%)",
                  },
                },
                ["&-rtl ".concat(l, ":not(").concat(l, "-dot)")]: {
                  transform: "translate(-50%, -50%)",
                },
                "&-square": {
                  ["".concat(l, "-dot")]: { marginTop: d, marginInlineEnd: d },
                },
                "&-circle": { [l]: { marginTop: m, marginInlineEnd: m } },
              },
            ],
          };
        },
        w = o(12918),
        W = (t) => {
          let {
              componentCls: e,
              antCls: o,
              floatButtonSize: n,
              padding: a,
            } = t,
            c = "".concat(e, "-group"),
            r = "".concat(c, "-list"),
            l = (0, C.o_)(o, "float-btn");
          return {
            [c]: [
              {
                [l("list-transform-start")]: "translate(0,".concat(
                  (0, N.bf)(n),
                  ")"
                ),
                [l("list-trigger-offset")]: "calc("
                  .concat((0, N.bf)(n), " + ")
                  .concat((0, N.bf)(a), ")"),
              },
              {
                ...(0, w.Wf)(t),
                position: "fixed",
                zIndex: t.zIndexPopupBase,
                insetInlineEnd: t.floatButtonInsetInlineEnd,
                bottom: t.floatButtonInsetBlockEnd,
                gap: a,
                "&-rtl": { direction: "rtl" },
                ["&".concat(e, "-pure")]: {
                  position: "relative",
                  inset: "auto",
                },
                [e]: { position: "relative", inset: "auto" },
              },
              {
                ["&:not(".concat(c, "-individual) ").concat(r)]: {
                  boxShadow: t.boxShadowSecondary,
                },
                ["&".concat(c, "-individual ").concat(r)]: { gap: a },
                ["&-menu-mode ".concat(r)]: { position: "absolute" },
                [r]: {
                  borderRadius: t.borderRadiusLG,
                  "&-motion": {
                    transition: "all ".concat(t.motionDurationSlow),
                    "&-enter, &-appear": {
                      opacity: 0,
                      transform: l("list-transform-start", !0),
                      "&-active": { opacity: 1, transform: "translate(0, 0)" },
                    },
                    "&-leave": {
                      "&-active": {
                        opacity: 0,
                        transform: l("list-transform-start", !0),
                      },
                    },
                  },
                },
                "&-top": { [r]: { bottom: l("list-trigger-offset", !0) } },
                "&-bottom": {
                  [r]: {
                    [l("list-transform-start")]: "translate(0, calc(".concat(
                      (0, N.bf)(n),
                      " * -1))"
                    ),
                    top: l("list-trigger-offset", !0),
                  },
                },
                "&-left": {
                  [r]: {
                    [l("list-transform-start")]: "translate(".concat(
                      (0, N.bf)(n),
                      ", 0)"
                    ),
                    right: l("list-trigger-offset", !0),
                  },
                },
                "&-right": {
                  [r]: {
                    [l("list-transform-start")]: "translate(calc(".concat(
                      (0, N.bf)(n),
                      " * -1), 0)"
                    ),
                    left: l("list-trigger-offset", !0),
                  },
                },
              },
            ],
          };
        },
        I = (0, C.I$)(
          "FloatButton",
          (t) => {
            let {
                controlHeightLG: e,
                marginXXL: o,
                marginLG: n,
                fontSizeIcon: a,
                calc: c,
              } = t,
              r = (0, k.IX)(t, {
                floatButtonIconSize: c(a).mul(1.5).equal(),
                floatButtonSize: e,
                floatButtonInsetBlockEnd: o,
                floatButtonInsetInlineEnd: n,
              });
            return [z(r), W(r), (0, E.J$)(t)];
          },
          () => ({}),
          { order: -998 }
        );
      let B = "float-btn",
        T = n.forwardRef((t, e) => {
          let {
              prefixCls: o,
              className: a,
              rootClassName: c,
              style: r,
              type: i = "default",
              shape: s = "circle",
              icon: d,
              description: E,
              content: C,
              tooltip: k,
              badge: N = {},
              classNames: z,
              styles: w,
              ...W
            } = t,
            { getPrefixCls: T, direction: M } = n.useContext(m.E_),
            Z = n.useContext(u),
            R = T(B, o),
            H = (0, S.Z)(R),
            { shape: L, individual: D, classNames: P, styles: F } = Z || {},
            G = L || s,
            O = null != C ? C : E,
            j = { ...t, type: i, shape: G },
            [q, X] = I(R, H),
            A = n.useMemo(
              () => ({
                icon: "".concat(R, "-icon"),
                content: "".concat(R, "-content"),
              }),
              [R]
            ),
            [_, V] = (0, b.MW)([A, P, z], [F, w], { props: j }),
            $ = O || d ? d : n.createElement(g.Z, null),
            [Q] = (0, h.Cn)("FloatButton", null == r ? void 0 : r.zIndex),
            Y = { ...r, zIndex: Q },
            J = (0, p.CE)(N, ["title", "children", "status", "text"]),
            U =
              "badge" in t &&
              n.createElement(v.Z, {
                ...J,
                className: (0, l.W)(J.className, "".concat(R, "-badge"), {
                  ["".concat(R, "-badge-dot")]: J.dot,
                }),
              }),
            K = (0, f.Z)(k),
            tt = n.createElement(
              y.Z,
              {
                ...W,
                ref: e,
                className: (0, l.W)(
                  q,
                  X,
                  H,
                  R,
                  a,
                  c,
                  "".concat(R, "-").concat(i),
                  "".concat(R, "-").concat(G),
                  {
                    ["".concat(R, "-rtl")]: "rtl" === M,
                    ["".concat(R, "-individual")]: null == D || D,
                    ["".concat(R, "-icon-only")]: !O,
                  }
                ),
                classNames: _,
                styles: V,
                style: Y,
                shape: G,
                type: i,
                size: "large",
                icon: $,
                _skipSemantic: !0,
              },
              O,
              U
            );
          return K && (tt = n.createElement(x.Z, { ...K }, tt)), tt;
        }),
        M = n.createElement(a.Z, null),
        Z = n.forwardRef((t, e) => {
          var o, a;
          let { backTopIcon: g } = (0, m.dj)("floatButton"),
            {
              prefixCls: p,
              className: f,
              type: b = "default",
              shape: h = "circle",
              visibilityHeight: v = 400,
              icon: y,
              target: S,
              onClick: x,
              duration: E = 450,
              ...C
            } = t,
            k = null !== (a = null != y ? y : g) && void 0 !== a ? a : M,
            [N, z] = (0, n.useState)(0 === v),
            w = n.useRef(null);
          n.useImperativeHandle(e, () => ({ nativeElement: w.current }));
          let W = () => {
              var t;
              return (
                (null === (t = w.current) || void 0 === t
                  ? void 0
                  : t.ownerDocument) || window
              );
            },
            I = (0, d.Z)((t) => {
              z((0, i.Z)(t.target) >= v);
            });
          (0, n.useEffect)(() => {
            let t = (S || W)();
            return (
              I({ target: t }),
              null == t || t.addEventListener("scroll", I),
              () => {
                I.cancel(), null == t || t.removeEventListener("scroll", I);
              }
            );
          }, [S]);
          let Z = (t) => {
              (0, s.Z)(0, { getContainer: S || W, duration: E }),
                null == x || x(t);
            },
            { getPrefixCls: R } = (0, n.useContext)(m.E_),
            H = R(B, p),
            L = R(),
            D = {
              prefixCls: H,
              icon: k,
              type: b,
              shape:
                (null === (o = (0, n.useContext)(u)) || void 0 === o
                  ? void 0
                  : o.shape) || h,
              ...C,
            };
          return n.createElement(
            c.ZP,
            { visible: N, motionName: "".concat(L, "-fade") },
            (t, e) => {
              let { className: o } = t;
              return n.createElement(T, {
                ref: (0, r.sQ)(w, e),
                ...D,
                onClick: Z,
                className: (0, l.W)(f, o),
              });
            }
          );
        });
      var R = o(49638),
        H = o(10868),
        L = o(24783),
        D = (t) => {
          var e;
          let {
              prefixCls: o,
              className: a,
              style: r,
              classNames: i,
              styles: s,
              rootClassName: d,
              shape: f = "circle",
              type: v = "default",
              placement: y,
              icon: x = n.createElement(g.Z, null),
              closeIcon: E,
              trigger: C,
              children: k,
              onOpenChange: N,
              open: z,
              onClick: w,
              ...W
            } = t,
            {
              direction: M,
              getPrefixCls: Z,
              closeIcon: D,
              classNames: P,
              styles: F,
              className: G,
              style: O,
            } = (0, m.dj)("floatButtonGroup"),
            j =
              null !== (e = null != E ? E : D) && void 0 !== e
                ? e
                : n.createElement(R.Z, null),
            q = Z(B, o),
            X = (0, S.Z)(q),
            [A, _] = I(q, X),
            V = "".concat(q, "-group"),
            $ = C && ["click", "hover"].includes(C),
            [Q] = (0, h.Cn)("FloatButton", null == r ? void 0 : r.zIndex),
            Y = n.useRef(null),
            J = ["top", "left", "right", "bottom"].includes(y) ? y : "top",
            [U, K] = (0, p.zk)(!1, z),
            tt = "hover" === C,
            te = "click" === C,
            to = (0, p.zX)((t) => {
              U !== t && (K(t), null == N || N(t));
            });
          n.useEffect(() => {
            if (te) {
              let t = (t) => {
                var e;
                (null !== (e = Y.current) &&
                  void 0 !== e &&
                  e.contains(t.target)) ||
                  to(!1);
              };
              return (
                document.addEventListener("click", t, { capture: !0 }),
                () => document.removeEventListener("click", t, { capture: !0 })
              );
            }
          }, [te]);
          let tn = "circle" === f,
            ta = { ...t, shape: f, type: v, placement: J },
            [tc, tr] = (0, b.MW)([P, i], [F, s], { props: ta }),
            tl = n.useMemo(
              () => ({
                shape: f,
                individual: tn,
                classNames: {
                  root: tc.item,
                  icon: tc.itemIcon,
                  content: tc.itemContent,
                },
                styles: {
                  root: tr.item,
                  icon: tr.itemIcon,
                  content: tr.itemContent,
                },
              }),
              [f, tn, tc, tr]
            ),
            ti = n.useMemo(
              () => ({
                ...tl,
                individual: !0,
                classNames: {
                  root: tc.trigger,
                  icon: tc.triggerIcon,
                  content: tc.triggerContent,
                },
                styles: {
                  root: tr.trigger,
                  icon: tr.triggerIcon,
                  content: tr.triggerContent,
                },
              }),
              [tl, tc, tr]
            ),
            ts = "".concat(V, "-list"),
            td = (t) => {
              let e = "top" === J || "bottom" === J,
                o = { className: (0, l.W)(ts, tc.list, t), style: tr.list };
              return tn
                ? n.createElement(H.Z, { vertical: e, ...o }, k)
                : n.createElement(L.Z.Compact, { vertical: e, ...o }, k);
            };
          return n.createElement(
            u.Provider,
            { value: tl },
            n.createElement(
              "div",
              {
                className: (0, l.W)(V, A, _, X, G, tc.root, a, d, {
                  ["".concat(V, "-rtl")]: "rtl" === M,
                  ["".concat(V, "-individual")]: tn,
                  ["".concat(V, "-").concat(J)]: $,
                  ["".concat(V, "-menu-mode")]: $,
                }),
                style: { ...O, zIndex: Q, ...tr.root, ...r },
                ref: Y,
                onMouseEnter: () => {
                  tt && to(!0);
                },
                onMouseLeave: () => {
                  tt && to(!1);
                },
              },
              $
                ? n.createElement(
                    c.ZP,
                    { visible: U, motionName: "".concat(ts, "-motion") },
                    (t) => {
                      let { className: e } = t;
                      return td(e);
                    }
                  )
                : td(),
              $ &&
                n.createElement(
                  u.Provider,
                  { value: ti },
                  n.createElement(T, {
                    type: v,
                    icon: U ? j : x,
                    "aria-label": t["aria-label"],
                    className: "".concat(V, "-trigger"),
                    onClick: (t) => {
                      te && to(!U), null == w || w(t);
                    },
                    ...W,
                  })
                )
            )
          );
        };
      let P = (t) => {
        let { backTop: e, ...o } = t;
        return e
          ? n.createElement(Z, { ...o, visibilityHeight: 0 })
          : n.createElement(T, { ...o });
      };
      (T.BackTop = Z),
        (T.Group = D),
        (T._InternalPanelDoNotUseOrYouWillBeFired = (t) => {
          let {
              className: e,
              items: o,
              classNames: a,
              styles: c,
              prefixCls: r,
              ...i
            } = t,
            { getPrefixCls: s } = n.useContext(m.E_),
            d = s(B, r),
            u = "".concat(d, "-pure");
          return o
            ? n.createElement(
                D,
                { className: (0, l.W)(e, u), classNames: a, styles: c, ...i },
                o.map((t, e) => n.createElement(P, { key: e, ...t }))
              )
            : n.createElement(P, {
                className: (0, l.W)(e, u),
                classNames: a,
                styles: c,
                ...i,
              });
        });
      var F = T;
    },
    35631: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return I;
        },
      });
      var n = o(19103),
        a = o(2265),
        c = o(61994),
        r = o(53253),
        l = o(6543),
        i = o(71744),
        s = o(91086),
        d = o(33759),
        m = o(10295),
        u = o(28617),
        g = o(64170),
        p = o(48651);
      let f = a.createContext({});
      f.Consumer;
      var b = o(73627),
        h = o(19722),
        v = o(54998);
      let y = a.forwardRef((t, e) => {
        let {
            prefixCls: o,
            children: n,
            actions: r,
            extra: l,
            styles: s,
            className: d,
            classNames: m,
            colStyle: u,
            ...g
          } = t,
          { grid: p, itemLayout: y } = (0, a.useContext)(f),
          { getPrefixCls: S, list: x } = (0, a.useContext)(i.E_),
          E = (t) => {
            var e, o;
            return (0, c.W)(
              null == x
                ? void 0
                : null === (o = x.item) || void 0 === o
                ? void 0
                : null === (e = o.classNames) || void 0 === e
                ? void 0
                : e[t],
              null == m ? void 0 : m[t]
            );
          },
          C = (t) => {
            var e, o;
            return {
              ...(null == x
                ? void 0
                : null === (o = x.item) || void 0 === o
                ? void 0
                : null === (e = o.styles) || void 0 === e
                ? void 0
                : e[t]),
              ...(null == s ? void 0 : s[t]),
            };
          },
          k = S("list", o),
          N =
            r &&
            r.length > 0 &&
            a.createElement(
              "ul",
              {
                className: (0, c.W)("".concat(k, "-item-action"), E("actions")),
                key: "actions",
                style: C("actions"),
              },
              r.map((t, e) =>
                a.createElement(
                  "li",
                  { key: "".concat(k, "-item-action-").concat(e) },
                  t,
                  e !== r.length - 1 &&
                    a.createElement("em", {
                      className: "".concat(k, "-item-action-split"),
                    })
                )
              )
            ),
          z = a.createElement(
            p ? "div" : "li",
            {
              ...g,
              ...(p ? {} : { ref: e }),
              className: (0, c.W)(
                "".concat(k, "-item"),
                {
                  ["".concat(k, "-item-no-flex")]: !("vertical" === y
                    ? !!l
                    : !(() => {
                        let t = (0, b.qo)(n);
                        return (
                          t.some((t) => "string" == typeof t) && t.length > 1
                        );
                      })()),
                },
                d
              ),
            },
            "vertical" === y && l
              ? [
                  a.createElement(
                    "div",
                    { className: "".concat(k, "-item-main"), key: "content" },
                    n,
                    N
                  ),
                  a.createElement(
                    "div",
                    {
                      className: (0, c.W)(
                        "".concat(k, "-item-extra"),
                        E("extra")
                      ),
                      key: "extra",
                      style: C("extra"),
                    },
                    l
                  ),
                ]
              : [n, N, (0, h.Tm)(l, { key: "extra" })]
          );
        return p ? a.createElement(v.Z, { ref: e, flex: 1, style: u }, z) : z;
      });
      y.Meta = (t) => {
        let {
            prefixCls: e,
            className: o,
            avatar: n,
            title: r,
            description: l,
            ...s
          } = t,
          { getPrefixCls: d } = (0, a.useContext)(i.E_),
          m = d("list", e),
          u = (0, c.W)("".concat(m, "-item-meta"), o),
          g = a.createElement(
            "div",
            { className: "".concat(m, "-item-meta-content") },
            r &&
              a.createElement(
                "h4",
                { className: "".concat(m, "-item-meta-title") },
                r
              ),
            l &&
              a.createElement(
                "div",
                { className: "".concat(m, "-item-meta-description") },
                l
              )
          );
        return a.createElement(
          "div",
          { ...s, className: u },
          n &&
            a.createElement(
              "div",
              { className: "".concat(m, "-item-meta-avatar") },
              n
            ),
          (r || l) && g
        );
      };
      var S = o(38775),
        x = o(12918),
        E = o(99320),
        C = o(19224);
      let k = (t) => {
          let {
              listBorderedCls: e,
              componentCls: o,
              paddingLG: n,
              margin: a,
              itemPaddingSM: c,
              itemPaddingLG: r,
              marginLG: l,
              borderRadiusLG: i,
            } = t,
            s = (0, S.bf)(t.calc(i).sub(t.lineWidth).equal());
          return {
            [e]: {
              border: ""
                .concat((0, S.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(t.colorBorder),
              borderRadius: i,
              ["".concat(o, "-header")]: {
                borderRadius: "".concat(s, " ").concat(s, " 0 0"),
              },
              ["".concat(o, "-footer")]: {
                borderRadius: "0 0 ".concat(s, " ").concat(s),
              },
              [""
                .concat(o, "-header,")
                .concat(o, "-footer,")
                .concat(o, "-item")]: { paddingInline: n },
              ["".concat(o, "-pagination")]: {
                margin: "".concat((0, S.bf)(a), " ").concat((0, S.bf)(l)),
              },
            },
            ["".concat(e).concat(o, "-sm")]: {
              [""
                .concat(o, "-item,")
                .concat(o, "-header,")
                .concat(o, "-footer")]: { padding: c },
            },
            ["".concat(e).concat(o, "-lg")]: {
              [""
                .concat(o, "-item,")
                .concat(o, "-header,")
                .concat(o, "-footer")]: { padding: r },
            },
          };
        },
        N = (t) => {
          let {
            componentCls: e,
            screenSM: o,
            screenMD: n,
            marginLG: a,
            marginSM: c,
            margin: r,
          } = t;
          return {
            ["@media screen and (max-width:".concat(n, "px)")]: {
              [e]: {
                ["".concat(e, "-item")]: {
                  ["".concat(e, "-item-action")]: { marginInlineStart: a },
                },
              },
              ["".concat(e, "-vertical")]: {
                ["".concat(e, "-item")]: {
                  ["".concat(e, "-item-extra")]: { marginInlineStart: a },
                },
              },
            },
            ["@media screen and (max-width: ".concat(o, "px)")]: {
              [e]: {
                ["".concat(e, "-item")]: {
                  flexWrap: "wrap",
                  ["".concat(e, "-action")]: { marginInlineStart: c },
                },
              },
              ["".concat(e, "-vertical")]: {
                ["".concat(e, "-item")]: {
                  flexWrap: "wrap-reverse",
                  ["".concat(e, "-item-main")]: { minWidth: t.contentWidth },
                  ["".concat(e, "-item-extra")]: {
                    margin: "auto auto ".concat((0, S.bf)(r)),
                  },
                },
              },
            },
          };
        },
        z = (t) => {
          let {
            componentCls: e,
            antCls: o,
            controlHeight: n,
            minHeight: a,
            paddingSM: c,
            marginLG: r,
            padding: l,
            itemPadding: i,
            colorPrimary: s,
            itemPaddingSM: d,
            itemPaddingLG: m,
            paddingXS: u,
            margin: g,
            colorText: p,
            colorTextDescription: f,
            motionDurationSlow: b,
            lineWidth: h,
            headerBg: v,
            footerBg: y,
            emptyTextPadding: E,
            metaMarginBottom: C,
            avatarMarginRight: k,
            titleMarginBottom: N,
            descriptionFontSize: z,
          } = t;
          return {
            [e]: {
              ...(0, x.Wf)(t),
              position: "relative",
              "--rc-virtual-list-scrollbar-bg": t.colorSplit,
              "*": { outline: "none" },
              ["".concat(e, "-header")]: { background: v },
              ["".concat(e, "-footer")]: { background: y },
              ["".concat(e, "-header, ").concat(e, "-footer")]: {
                paddingBlock: c,
              },
              ["".concat(e, "-pagination")]: {
                marginBlockStart: r,
                ["".concat(o, "-pagination-options")]: { textAlign: "start" },
              },
              ["".concat(e, "-spin")]: { minHeight: a, textAlign: "center" },
              ["".concat(e, "-items")]: {
                margin: 0,
                padding: 0,
                listStyle: "none",
              },
              ["".concat(e, "-item")]: {
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: i,
                color: p,
                ["".concat(e, "-item-meta")]: {
                  display: "flex",
                  flex: 1,
                  alignItems: "flex-start",
                  maxWidth: "100%",
                  ["".concat(e, "-item-meta-avatar")]: { marginInlineEnd: k },
                  ["".concat(e, "-item-meta-content")]: {
                    flex: "1 0",
                    width: 0,
                    color: p,
                  },
                  ["".concat(e, "-item-meta-title")]: {
                    margin: "0 0 ".concat((0, S.bf)(t.marginXXS), " 0"),
                    color: p,
                    fontSize: t.fontSize,
                    lineHeight: t.lineHeight,
                    "> a": {
                      color: p,
                      transition: "all ".concat(b),
                      "&:hover": { color: s },
                    },
                  },
                  ["".concat(e, "-item-meta-description")]: {
                    color: f,
                    fontSize: z,
                    lineHeight: t.lineHeight,
                  },
                },
                ["".concat(e, "-item-action")]: {
                  flex: "0 0 auto",
                  marginInlineStart: t.marginXXL,
                  padding: 0,
                  fontSize: 0,
                  listStyle: "none",
                  "& > li": {
                    position: "relative",
                    display: "inline-block",
                    padding: "0 ".concat((0, S.bf)(u)),
                    color: f,
                    fontSize: t.fontSize,
                    lineHeight: t.lineHeight,
                    textAlign: "center",
                    "&:first-child": { paddingInlineStart: 0 },
                  },
                  ["".concat(e, "-item-action-split")]: {
                    position: "absolute",
                    insetBlockStart: "50%",
                    insetInlineEnd: 0,
                    width: h,
                    height: t
                      .calc(t.fontHeight)
                      .sub(t.calc(t.marginXXS).mul(2))
                      .equal(),
                    transform: "translateY(-50%)",
                    backgroundColor: t.colorSplit,
                  },
                },
              },
              ["".concat(e, "-empty")]: {
                padding: "".concat((0, S.bf)(l), " 0"),
                color: f,
                fontSize: t.fontSizeSM,
                textAlign: "center",
              },
              ["".concat(e, "-empty-text")]: {
                padding: E,
                color: t.colorTextDisabled,
                fontSize: t.fontSize,
                textAlign: "center",
              },
              ["".concat(e, "-item-no-flex")]: { display: "block" },
            },
            ["".concat(e, "-grid ").concat(o, "-col > ").concat(e, "-item")]: {
              display: "block",
              maxWidth: "100%",
              marginBlockEnd: g,
              paddingBlock: 0,
              borderBlockEnd: "none",
            },
            ["".concat(e, "-vertical ").concat(e, "-item")]: {
              alignItems: "initial",
              ["".concat(e, "-item-main")]: { display: "block", flex: 1 },
              ["".concat(e, "-item-extra")]: { marginInlineStart: r },
              ["".concat(e, "-item-meta")]: {
                marginBlockEnd: C,
                ["".concat(e, "-item-meta-title")]: {
                  marginBlockStart: 0,
                  marginBlockEnd: N,
                  color: p,
                  fontSize: t.fontSizeLG,
                  lineHeight: t.lineHeightLG,
                },
              },
              ["".concat(e, "-item-action")]: {
                marginBlockStart: l,
                marginInlineStart: "auto",
                "> li": {
                  padding: "0 ".concat((0, S.bf)(l)),
                  "&:first-child": { paddingInlineStart: 0 },
                },
              },
            },
            ["".concat(e, "-split ").concat(e, "-item")]: {
              borderBlockEnd: ""
                .concat((0, S.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(t.colorSplit),
              "&:last-child": { borderBlockEnd: "none" },
            },
            ["".concat(e, "-split ").concat(e, "-header")]: {
              borderBlockEnd: ""
                .concat((0, S.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(t.colorSplit),
            },
            ["".concat(e, "-split").concat(e, "-empty ").concat(e, "-footer")]:
              {
                borderTop: ""
                  .concat((0, S.bf)(t.lineWidth), " ")
                  .concat(t.lineType, " ")
                  .concat(t.colorSplit),
              },
            ["".concat(e, "-loading ").concat(e, "-spin-nested-loading")]: {
              minHeight: n,
            },
            [""
              .concat(e, "-split")
              .concat(e, "-something-after-last-item ")
              .concat(o, "-spin-container > ")
              .concat(e, "-items > ")
              .concat(e, "-item:last-child")]: {
              borderBlockEnd: ""
                .concat((0, S.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(t.colorSplit),
            },
            ["".concat(e, "-lg ").concat(e, "-item")]: { padding: m },
            ["".concat(e, "-sm ").concat(e, "-item")]: { padding: d },
            ["".concat(e, ":not(").concat(e, "-vertical)")]: {
              ["".concat(e, "-item-no-flex")]: {
                ["".concat(e, "-item-action")]: { float: "right" },
              },
            },
          };
        };
      var w = (0, E.I$)(
        "List",
        (t) => {
          let e = (0, C.IX)(t, {
            listBorderedCls: "".concat(t.componentCls, "-bordered"),
            minHeight: t.controlHeightLG,
          });
          return [z(e), k(e), N(e)];
        },
        (t) => ({
          contentWidth: 220,
          itemPadding: "".concat((0, S.bf)(t.paddingContentVertical), " 0"),
          itemPaddingSM: ""
            .concat((0, S.bf)(t.paddingContentVerticalSM), " ")
            .concat((0, S.bf)(t.paddingContentHorizontal)),
          itemPaddingLG: ""
            .concat((0, S.bf)(t.paddingContentVerticalLG), " ")
            .concat((0, S.bf)(t.paddingContentHorizontalLG)),
          headerBg: "transparent",
          footerBg: "transparent",
          emptyTextPadding: t.padding,
          metaMarginBottom: t.padding,
          avatarMarginRight: t.padding,
          titleMarginBottom: t.paddingSM,
          descriptionFontSize: t.fontSize,
        })
      );
      let W = a.forwardRef((t, e) => {
        let {
            pagination: o = !1,
            prefixCls: b,
            bordered: h = !1,
            split: v = !0,
            className: y,
            rootClassName: S,
            style: x,
            children: E,
            itemLayout: C,
            loadMore: k,
            grid: N,
            dataSource: z = [],
            size: W,
            header: I,
            footer: B,
            loading: T = !1,
            rowKey: M,
            renderItem: Z,
            locale: R,
            ...H
          } = t,
          L = o && "object" == typeof o ? o : {},
          [D, P] = a.useState(L.defaultCurrent || 1),
          [F, G] = a.useState(L.defaultPageSize || 10),
          {
            getPrefixCls: O,
            direction: j,
            className: q,
            style: X,
          } = (0, i.dj)("list"),
          { renderEmpty: A } = a.useContext(i.E_),
          _ = (t) => (e, n) => {
            if ((P(e), G(n), o)) {
              var a;
              null == o ||
                null === (a = o[t]) ||
                void 0 === a ||
                a.call(o, e, n);
            }
          },
          V = _("onChange"),
          $ = _("onShowSizeChange"),
          Q = !!(k || o || B),
          Y = O("list", b),
          [J, U] = w(Y),
          K = T;
        "boolean" == typeof K && (K = { spinning: K });
        let tt = !!(null == K ? void 0 : K.spinning),
          te = (0, d.Z)(W),
          to = "";
        switch (te) {
          case "large":
            to = "lg";
            break;
          case "small":
            to = "sm";
        }
        let tn = (0, c.W)(
            Y,
            {
              ["".concat(Y, "-vertical")]: "vertical" === C,
              ["".concat(Y, "-").concat(to)]: to,
              ["".concat(Y, "-split")]: v,
              ["".concat(Y, "-bordered")]: h,
              ["".concat(Y, "-loading")]: tt,
              ["".concat(Y, "-grid")]: !!N,
              ["".concat(Y, "-something-after-last-item")]: Q,
              ["".concat(Y, "-rtl")]: "rtl" === j,
            },
            q,
            y,
            S,
            J,
            U
          ),
          ta = (0, r.Z)(
            { current: 1, total: 0, position: "bottom" },
            { total: z.length, current: D, pageSize: F },
            o || {}
          ),
          tc = Math.ceil(ta.total / ta.pageSize);
        ta.current = Math.min(ta.current, tc);
        let tr =
            o &&
            a.createElement(
              "div",
              { className: (0, c.W)("".concat(Y, "-pagination")) },
              a.createElement(g.Z, {
                align: "end",
                ...ta,
                onChange: V,
                onShowSizeChange: $,
              })
            ),
          tl = (0, n.Z)(z);
        o &&
          z.length > (ta.current - 1) * ta.pageSize &&
          (tl = (0, n.Z)(z).splice(
            (ta.current - 1) * ta.pageSize,
            ta.pageSize
          ));
        let ti = Object.keys(N || {}).some((t) =>
            ["xs", "sm", "md", "lg", "xl", "xxl"].includes(t)
          ),
          ts = (0, u.Z)(ti),
          td = a.useMemo(() => {
            for (let t = 0; t < l.c4.length; t += 1) {
              let e = l.c4[t];
              if (ts[e]) return e;
            }
          }, [ts]),
          tm = a.useMemo(() => {
            if (!N) return;
            let t = td && N[td] ? N[td] : N.column;
            if (t)
              return {
                width: "".concat(100 / t, "%"),
                maxWidth: "".concat(100 / t, "%"),
              };
          }, [JSON.stringify(N), td]),
          tu = tt && a.createElement("div", { style: { minHeight: 53 } });
        if (tl.length > 0) {
          let t = tl.map((t, e) => {
            let o;
            return Z
              ? ((o = "function" == typeof M ? M(t) : M ? t[M] : t.key) ||
                  (o = "list-item-".concat(e)),
                a.createElement(a.Fragment, { key: o }, Z(t, e)))
              : null;
          });
          tu = N
            ? a.createElement(
                m.Z,
                { gutter: N.gutter },
                a.Children.map(t, (t) =>
                  a.createElement(
                    "div",
                    { key: null == t ? void 0 : t.key, style: tm },
                    t
                  )
                )
              )
            : a.createElement("ul", { className: "".concat(Y, "-items") }, t);
        } else
          E ||
            tt ||
            (tu = a.createElement(
              "div",
              { className: "".concat(Y, "-empty-text") },
              (null == R ? void 0 : R.emptyText) ||
                (null == A ? void 0 : A("List")) ||
                a.createElement(s.Z, { componentName: "List" })
            ));
        let tg = ta.position,
          tp = a.useMemo(
            () => ({ grid: N, itemLayout: C }),
            [JSON.stringify(N), C]
          );
        return a.createElement(
          f.Provider,
          { value: tp },
          a.createElement(
            "div",
            { ref: e, style: { ...X, ...x }, className: tn, ...H },
            ("top" === tg || "both" === tg) && tr,
            I &&
              a.createElement("div", { className: "".concat(Y, "-header") }, I),
            a.createElement(p.Z, { ...K }, tu, E),
            B &&
              a.createElement("div", { className: "".concat(Y, "-footer") }, B),
            k || (("bottom" === tg || "both" === tg) && tr)
          )
        );
      });
      W.Item = y;
      var I = W;
    },
    80009: function (t, e, o) {
      o.d(e, {
        Z: function () {
          return H;
        },
      });
      var n = o(2265),
        a = o(73627),
        c = o(61994),
        r = o(80052),
        l = o(53445),
        i = o(19722),
        s = o(6694),
        d = o(71744),
        m = o(86586),
        u = o(38775),
        g = o(13761),
        p = o(11357),
        f = o(91378),
        b = o(12918),
        h = o(19224),
        v = o(99320);
      let y = (t) => {
          let {
              paddingXXS: e,
              lineWidth: o,
              tagPaddingHorizontal: n,
              componentCls: a,
              calc: c,
            } = t,
            r = c(n).sub(o).equal(),
            l = c(e).sub(o).equal();
          return {
            [a]: {
              ...(0, b.Wf)(t),
              display: "inline-block",
              height: "auto",
              paddingInline: r,
              fontSize: t.tagFontSize,
              lineHeight: t.tagLineHeight,
              whiteSpace: "nowrap",
              backgroundColor: t.defaultBg,
              border: ""
                .concat((0, u.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(t.colorBorder),
              borderRadius: t.borderRadiusSM,
              opacity: 1,
              transition: "all ".concat(t.motionDurationMid),
              textAlign: "start",
              position: "relative",
              ["&".concat(a, "-rtl")]: { direction: "rtl" },
              "&, a, a:hover": { color: t.defaultColor },
              ["".concat(a, "-close-icon")]: {
                marginInlineStart: l,
                fontSize: t.tagIconSize,
                color: t.colorIcon,
                cursor: "pointer",
                transition: "all ".concat(t.motionDurationMid),
                "&:hover": { color: t.colorTextHeading },
              },
              "&-checkable": {
                backgroundColor: "transparent",
                borderColor: "transparent",
                cursor: "pointer",
                ["&:not(".concat(a, "-checkable-checked):hover")]: {
                  color: t.colorPrimary,
                  backgroundColor: t.colorFillSecondary,
                },
                "&:active, &-checked": { color: t.colorTextLightSolid },
                "&-checked": {
                  backgroundColor: t.colorPrimary,
                  "&:hover": { backgroundColor: t.colorPrimaryHover },
                },
                "&:active": { backgroundColor: t.colorPrimaryActive },
                "&-disabled": {
                  cursor: "not-allowed",
                  ["&:not(".concat(a, "-checkable-checked)")]: {
                    color: t.colorTextDisabled,
                    "&:hover": { backgroundColor: "transparent" },
                  },
                  ["&".concat(a, "-checkable-checked")]: {
                    color: t.colorTextDisabled,
                    backgroundColor: t.colorBgContainerDisabled,
                  },
                  "&:hover, &:active": {
                    backgroundColor: t.colorBgContainerDisabled,
                    color: t.colorTextDisabled,
                  },
                  ["&:not(".concat(a, "-checkable-checked):hover")]: {
                    color: t.colorTextDisabled,
                  },
                },
                "&-group": {
                  display: "flex",
                  flexWrap: "wrap",
                  gap: t.paddingXS,
                },
              },
              "&-hidden": { display: "none" },
              ["> ".concat(t.iconCls, " + span, > span + ").concat(t.iconCls)]:
                { marginInlineStart: r },
            },
            ["&".concat(t.componentCls, "-solid")]: {
              borderColor: "transparent",
              color: t.colorTextLightSolid,
              backgroundColor: t.colorBgSolid,
              ["&".concat(a, "-default")]: { color: t.solidTextColor },
            },
            ["".concat(a, "-filled")]: {
              borderColor: "transparent",
              backgroundColor: t.tagBorderlessBg,
            },
            ["&".concat(a, "-disabled")]: {
              color: t.colorTextDisabled,
              cursor: "not-allowed",
              backgroundColor: t.colorBgContainerDisabled,
              a: {
                cursor: "not-allowed",
                pointerEvents: "none",
                color: t.colorTextDisabled,
                "&:hover": { color: t.colorTextDisabled },
              },
              "a&": { "&:hover, &:active": { color: t.colorTextDisabled } },
              ["&".concat(a, "-outlined")]: {
                borderColor: t.colorBorderDisabled,
              },
              ["&".concat(a, "-solid, &").concat(a, "-filled")]: {
                color: t.colorTextDisabled,
                ["".concat(a, "-close-icon")]: { color: t.colorTextDisabled },
              },
              ["".concat(a, "-close-icon")]: {
                cursor: "not-allowed",
                color: t.colorTextDisabled,
                "&:hover": { color: t.colorTextDisabled },
              },
            },
          };
        },
        S = (t) => {
          let { lineWidth: e, fontSizeIcon: o, calc: n } = t,
            a = t.fontSizeSM;
          return (0, h.IX)(t, {
            tagFontSize: a,
            tagLineHeight: (0, u.bf)(n(t.lineHeightSM).mul(a).equal()),
            tagIconSize: n(o).sub(n(e).mul(2)).equal(),
            tagPaddingHorizontal: 8,
            tagBorderlessBg: t.defaultBg,
          });
        },
        x = (t) => {
          let e = (0, f.U)(new p.y9(t.colorBgSolid), "#fff") ? "#000" : "#fff";
          return {
            defaultBg: new g.t(t.colorFillQuaternary)
              .onBackground(t.colorBgContainer)
              .toHexString(),
            defaultColor: t.colorText,
            solidTextColor: e,
          };
        };
      var E = (0, v.I$)("Tag", (t) => y(S(t)), x);
      let C = n.forwardRef((t, e) => {
        let {
            prefixCls: o,
            style: a,
            className: r,
            checked: l,
            children: i,
            icon: s,
            onChange: u,
            onClick: g,
            disabled: p,
            ...f
          } = t,
          { getPrefixCls: b, tag: h } = n.useContext(d.E_),
          v = n.useContext(m.Z),
          y = null != p ? p : v,
          S = b("tag", o),
          [x, C] = E(S),
          k = (0, c.W)(
            S,
            "".concat(S, "-checkable"),
            {
              ["".concat(S, "-checkable-checked")]: l,
              ["".concat(S, "-checkable-disabled")]: y,
            },
            null == h ? void 0 : h.className,
            r,
            x,
            C
          );
        return n.createElement(
          "span",
          {
            ...f,
            ref: e,
            style: { ...a, ...(null == h ? void 0 : h.style) },
            className: k,
            onClick: (t) => {
              y || (null == u || u(!l), null == g || g(t));
            },
          },
          s,
          n.createElement("span", null, i)
        );
      });
      var k = o(19103),
        N = o(87011),
        z = o(64024);
      let w = n.forwardRef(function (t, e) {
        let {
            id: o,
            prefixCls: l,
            rootClassName: i,
            className: s,
            style: m,
            classNames: u,
            styles: g,
            disabled: p,
            options: f,
            value: b,
            defaultValue: h,
            onChange: v,
            multiple: y,
            ...S
          } = t,
          {
            getPrefixCls: x,
            direction: w,
            className: W,
            style: I,
            classNames: B,
            styles: T,
          } = (0, d.dj)("tag"),
          M = x("tag", l),
          Z = "".concat(M, "-checkable-group"),
          R = (0, z.Z)(M),
          [H, L] = E(M, R),
          [D, P] = (0, r.MW)([B, u], [T, g], { props: t }),
          F = (0, n.useMemo)(
            () =>
              (f || []).map((t) =>
                t && "object" == typeof t ? t : { value: t, label: t }
              ),
            [f]
          ),
          [G, O] = (0, a.zk)(h, b),
          j = (t, e) => {
            let o = null;
            if (y) {
              let n = G || [];
              o = t
                ? [].concat((0, k.Z)(n), [e.value])
                : n.filter((t) => t !== e.value);
            } else o = t ? e.value : null;
            O(o), null == v || v(o);
          },
          q = n.useRef(null);
        (0, n.useImperativeHandle)(e, () => ({ nativeElement: q.current }));
        let X = (0, N.Z)(S, { aria: !0, data: !0 });
        return n.createElement(
          "div",
          {
            ...X,
            className: (0, c.W)(
              Z,
              W,
              i,
              {
                ["".concat(Z, "-disabled")]: p,
                ["".concat(Z, "-rtl")]: "rtl" === w,
              },
              H,
              L,
              s,
              D.root
            ),
            style: { ...I, ...P.root, ...m },
            id: o,
            ref: q,
          },
          F.map((t) =>
            n.createElement(
              C,
              {
                key: t.value,
                className: (0, c.W)("".concat(Z, "-item"), D.item),
                style: P.item,
                checked: y ? (G || []).includes(t.value) : G === t.value,
                onChange: (e) => j(e, t),
                disabled: p,
              },
              t.label
            )
          )
        );
      });
      var W = o(93350),
        I = o(18536);
      let B = (t) =>
        (0, I.Z)(t, (e, o) => {
          let {
            textColor: n,
            lightBorderColor: a,
            lightColor: c,
            darkColor: r,
          } = o;
          return {
            [""
              .concat(t.componentCls)
              .concat(t.componentCls, "-")
              .concat(e, ":not(")
              .concat(t.componentCls, "-disabled)")]: {
              ["&".concat(t.componentCls, "-outlined")]: {
                backgroundColor: c,
                borderColor: a,
                color: n,
              },
              ["&".concat(t.componentCls, "-solid")]: {
                backgroundColor: r,
                borderColor: r,
                color: t.colorTextLightSolid,
              },
              ["&".concat(t.componentCls, "-filled")]: {
                backgroundColor: c,
                color: n,
              },
            },
          };
        });
      var T = (0, v.bk)(["Tag", "preset"], (t) => B(S(t)), x);
      let M = (t, e, o) => {
        let n =
          "string" != typeof o ? o : o.charAt(0).toUpperCase() + o.slice(1);
        return {
          [""
            .concat(t.componentCls)
            .concat(t.componentCls, "-")
            .concat(e, ":not(")
            .concat(t.componentCls, "-disabled)")]: {
            ["&".concat(t.componentCls, "-outlined")]: {
              backgroundColor: t["color".concat(n, "Bg")],
              borderColor: t["color".concat(n, "Border")],
              color: t["color".concat(o)],
            },
            ["&".concat(t.componentCls, "-solid")]: {
              backgroundColor: t["color".concat(o)],
              borderColor: t["color".concat(o)],
            },
            ["&".concat(t.componentCls, "-filled")]: {
              backgroundColor: t["color".concat(n, "Bg")],
              color: t["color".concat(o)],
            },
          },
        };
      };
      var Z = (0, v.bk)(
        ["Tag", "status"],
        (t) => {
          let e = S(t);
          return [
            M(e, "success", "Success"),
            M(e, "processing", "Info"),
            M(e, "error", "Error"),
            M(e, "warning", "Warning"),
          ];
        },
        x
      );
      let R = n.forwardRef((t, e) => {
        var o;
        let {
            prefixCls: u,
            className: p,
            rootClassName: f,
            style: b,
            children: h,
            icon: v,
            color: y,
            variant: S,
            onClose: x,
            bordered: C,
            disabled: k,
            href: N,
            target: z,
            styles: w,
            classNames: I,
            ...B
          } = t,
          {
            getPrefixCls: M,
            direction: R,
            className: H,
            variant: L,
            style: D,
            classNames: P,
            styles: F,
          } = (0, d.dj)("tag"),
          [G, O, j, q, X] = (function (t, e) {
            let { color: o, variant: a, bordered: c } = t;
            return n.useMemo(() => {
              let t;
              let n = null == o ? void 0 : o.endsWith("-inverse");
              t = a || (n ? "solid" : !1 === c ? "filled" : e || "filled");
              let r = n ? (null == o ? void 0 : o.replace("-inverse", "")) : o,
                l = (0, W.o2)(o),
                i = (0, W.yT)(o),
                s = {};
              if (!l && !i && r) {
                if ("solid" === t) s.backgroundColor = o;
                else {
                  let e = new g.t(r).toHsl();
                  (e.l = 0.95),
                    (s.backgroundColor = new g.t(e).toHexString()),
                    (s.color = o),
                    "outlined" === t && (s.borderColor = o);
                }
              }
              return [t, r, l, i, s];
            }, [o, a, c, e]);
          })(t, L),
          A = j || q,
          _ = n.useContext(m.Z),
          V = null != k ? k : _,
          { tag: $ } = n.useContext(d.E_),
          [Q, Y] = n.useState(!0),
          J = (0, a.CE)(B, ["closeIcon", "closable"]),
          U = {
            ...t,
            color: O,
            variant: G,
            disabled: V,
            href: N,
            target: z,
            icon: v,
          },
          [K, tt] = (0, r.MW)([P, I], [F, w], { props: U }),
          te = n.useMemo(() => {
            let t = { ...tt.root, ...D, ...b };
            return V || (t = { ...X, ...t }), t;
          }, [tt.root, D, b, X, V]),
          to = M("tag", u),
          [tn, ta] = E(to),
          tc = (0, c.W)(
            to,
            H,
            K.root,
            "".concat(to, "-").concat(G),
            {
              ["".concat(to, "-").concat(O)]: A,
              ["".concat(to, "-hidden")]: !Q,
              ["".concat(to, "-rtl")]: "rtl" === R,
              ["".concat(to, "-disabled")]: V,
            },
            p,
            f,
            tn,
            ta
          ),
          tr = (t) => {
            !V &&
              (t.stopPropagation(),
              null == x || x(t),
              t.defaultPrevented || Y(!1));
          },
          [, tl] = (0, l.bt)((0, l.wz)(t), (0, l.wz)($), {
            closable: !1,
            closeIconRender: (t) => {
              let e = n.createElement(
                "span",
                { className: "".concat(to, "-close-icon"), onClick: tr },
                t
              );
              return (0, i.wm)(t, e, (t) => ({
                onClick: (e) => {
                  var o;
                  null == t ||
                    null === (o = t.onClick) ||
                    void 0 === o ||
                    o.call(t, e),
                    tr(e);
                },
                className: (0, c.W)(
                  null == t ? void 0 : t.className,
                  "".concat(to, "-close-icon")
                ),
              }));
            },
          }),
          ti = "function" == typeof B.onClick || (h && "a" === h.type),
          ts = (0, i.Tm)(v, {
            className: (0, c.W)(
              n.isValidElement(v)
                ? null === (o = v.props) || void 0 === o
                  ? void 0
                  : o.className
                : "",
              K.icon
            ),
            style: tt.icon,
          }),
          td = ts
            ? n.createElement(
                n.Fragment,
                null,
                ts,
                h &&
                  n.createElement(
                    "span",
                    { className: K.content, style: tt.content },
                    h
                  )
              )
            : h,
          tm = n.createElement(
            N ? "a" : "span",
            {
              ...J,
              ref: e,
              className: tc,
              style: te,
              href: V ? void 0 : N,
              target: z,
              onClick: V ? void 0 : J.onClick,
              ...(N && V ? { "aria-disabled": !0 } : {}),
            },
            td,
            tl,
            j && n.createElement(T, { key: "preset", prefixCls: to }),
            q && n.createElement(Z, { key: "status", prefixCls: to })
          );
        return ti ? n.createElement(s.Z, { component: "Tag" }, tm) : tm;
      });
      (R.CheckableTag = C), (R.CheckableTagGroup = w);
      var H = R;
    },
  },
]);
