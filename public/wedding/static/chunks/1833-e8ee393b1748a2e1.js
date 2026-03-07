"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1833, 6931],
  {
    96931: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return w;
        },
      });
      var r = n(2265),
        o = n(73627),
        a = n(61994),
        i = n(80052),
        c = n(71744),
        s = n(33759),
        l = n(56250),
        d = n(50337),
        u = n(50639),
        h = (t) => {
          let { prefixCls: e, className: n, hoverable: o = !0, ...i } = t,
            { getPrefixCls: s } = r.useContext(c.E_),
            l = s("card", e),
            d = (0, a.W)("".concat(l, "-grid"), n, {
              ["".concat(l, "-grid-hoverable")]: o,
            });
          return r.createElement("div", { ...i, className: d });
        },
        C = n(38775),
        p = n(12918),
        m = n(99320),
        f = n(19224);
      let b = (t) => {
          let {
            antCls: e,
            componentCls: n,
            headerHeight: r,
            headerPadding: o,
            tabsMarginBottom: a,
          } = t;
          return {
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            minHeight: r,
            marginBottom: -1,
            padding: "0 ".concat((0, C.bf)(o)),
            color: t.colorTextHeading,
            fontWeight: t.fontWeightStrong,
            fontSize: t.headerFontSize,
            background: t.headerBg,
            borderBottom: ""
              .concat((0, C.bf)(t.lineWidth), " ")
              .concat(t.lineType, " ")
              .concat(t.colorBorderSecondary),
            borderRadius: ""
              .concat((0, C.bf)(t.borderRadiusLG), " ")
              .concat((0, C.bf)(t.borderRadiusLG), " 0 0"),
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
                .concat(n, "-typography,\n          > ")
                .concat(n, "-typography-edit-content\n        ")]: {
                insetInlineStart: 0,
                marginTop: 0,
                marginBottom: 0,
              },
            },
            ["".concat(e, "-tabs-top")]: {
              clear: "both",
              marginBottom: a,
              color: t.colorText,
              fontWeight: "normal",
              fontSize: t.fontSize,
              "&-bar": {
                borderBottom: ""
                  .concat((0, C.bf)(t.lineWidth), " ")
                  .concat(t.lineType, " ")
                  .concat(t.colorBorderSecondary),
              },
            },
          };
        },
        g = (t) => {
          let {
            cardPaddingBase: e,
            colorBorderSecondary: n,
            cardShadow: r,
            lineWidth: o,
          } = t;
          return {
            width: "33.33%",
            padding: e,
            border: 0,
            borderRadius: 0,
            boxShadow: "\n      "
              .concat((0, C.bf)(o), " 0 0 0 ")
              .concat(n, ",\n      0 ")
              .concat((0, C.bf)(o), " 0 0 ")
              .concat(n, ",\n      ")
              .concat((0, C.bf)(o), " ")
              .concat((0, C.bf)(o), " 0 0 ")
              .concat(n, ",\n      ")
              .concat((0, C.bf)(o), " 0 0 0 ")
              .concat(n, " inset,\n      0 ")
              .concat((0, C.bf)(o), " 0 0 ")
              .concat(n, " inset;\n    "),
            transition: "all ".concat(t.motionDurationMid),
            "&-hoverable:hover": {
              position: "relative",
              zIndex: 1,
              boxShadow: r,
            },
          };
        },
        y = (t) => {
          let {
            componentCls: e,
            iconCls: n,
            actionsLiMargin: r,
            cardActionsIconSize: o,
            colorBorderSecondary: a,
            actionsBg: i,
          } = t;
          return {
            margin: 0,
            padding: 0,
            listStyle: "none",
            background: i,
            borderTop: ""
              .concat((0, C.bf)(t.lineWidth), " ")
              .concat(t.lineType, " ")
              .concat(a),
            display: "flex",
            borderRadius: "0 0 "
              .concat((0, C.bf)(t.borderRadiusLG), " ")
              .concat((0, C.bf)(t.borderRadiusLG)),
            ...(0, p.dF)(),
            "& > li": {
              margin: r,
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
                ["a:not(".concat(e, "-btn), > ").concat(n)]: {
                  display: "inline-block",
                  width: "100%",
                  color: t.colorIcon,
                  lineHeight: (0, C.bf)(t.fontHeight),
                  transition: "color ".concat(t.motionDurationMid),
                  "&:hover": { color: t.colorPrimary },
                },
                ["> ".concat(n)]: {
                  fontSize: o,
                  lineHeight: (0, C.bf)(t.calc(o).mul(t.lineHeight).equal()),
                },
              },
              "&:not(:last-child)": {
                borderInlineEnd: ""
                  .concat((0, C.bf)(t.lineWidth), " ")
                  .concat(t.lineType, " ")
                  .concat(a),
              },
            },
          };
        },
        v = (t) => ({
          margin: "".concat(
            (0, C.bf)(t.calc(t.marginXXS).mul(-1).equal()),
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
        E = (t) => {
          let {
            componentCls: e,
            colorFillAlter: n,
            headerPadding: r,
            bodyPadding: o,
          } = t;
          return {
            ["".concat(e, "-head")]: {
              padding: "0 ".concat((0, C.bf)(r)),
              background: n,
              "&-title": { fontSize: t.fontSize },
            },
            ["".concat(e, "-body")]: {
              padding: ""
                .concat((0, C.bf)(t.padding), " ")
                .concat((0, C.bf)(o)),
            },
          };
        },
        k = (t) => {
          let { componentCls: e } = t;
          return {
            overflow: "hidden",
            ["".concat(e, "-body")]: { userSelect: "none" },
          };
        },
        M = (t) => {
          let {
            componentCls: e,
            cardShadow: n,
            cardHeadPadding: r,
            colorBorderSecondary: o,
            boxShadowTertiary: a,
            bodyPadding: i,
            extraColor: c,
          } = t;
          return {
            [e]: {
              ...(0, p.Wf)(t),
              position: "relative",
              background: t.colorBgContainer,
              borderRadius: t.borderRadiusLG,
              ["&:not(".concat(e, "-bordered)")]: { boxShadow: a },
              ["".concat(e, "-head")]: b(t),
              ["".concat(e, "-extra")]: {
                marginInlineStart: "auto",
                color: c,
                fontWeight: "normal",
                fontSize: t.fontSize,
              },
              ["".concat(e, "-body")]: {
                padding: i,
                borderRadius: "0 0 "
                  .concat((0, C.bf)(t.borderRadiusLG), " ")
                  .concat((0, C.bf)(t.borderRadiusLG)),
              },
              ["".concat(e, "-grid")]: g(t),
              ["".concat(e, "-cover")]: {
                "> *": {
                  display: "block",
                  width: "100%",
                  borderRadius: ""
                    .concat((0, C.bf)(t.borderRadiusLG), " ")
                    .concat((0, C.bf)(t.borderRadiusLG), " 0 0"),
                },
              },
              ["".concat(e, "-actions")]: y(t),
              ["".concat(e, "-meta")]: v(t),
            },
            ["".concat(e, "-bordered")]: {
              border: ""
                .concat((0, C.bf)(t.lineWidth), " ")
                .concat(t.lineType, " ")
                .concat(o),
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
              "&:hover": { borderColor: "transparent", boxShadow: n },
            },
            ["".concat(e, "-contain-grid")]: {
              borderRadius: ""
                .concat((0, C.bf)(t.borderRadiusLG), " ")
                .concat((0, C.bf)(t.borderRadiusLG), " 0 0 "),
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
                  paddingTop: r,
                },
              },
            },
            ["".concat(e, "-type-inner")]: E(t),
            ["".concat(e, "-loading")]: k(t),
            ["".concat(e, "-rtl")]: { direction: "rtl" },
          };
        },
        S = (t) => {
          let {
            componentCls: e,
            bodyPaddingSM: n,
            headerPaddingSM: r,
            headerHeightSM: o,
            headerFontSizeSM: a,
          } = t;
          return {
            ["".concat(e, "-small")]: {
              ["> ".concat(e, "-head")]: {
                minHeight: o,
                padding: "0 ".concat((0, C.bf)(r)),
                fontSize: a,
                ["> ".concat(e, "-head-wrapper")]: {
                  ["> ".concat(e, "-extra")]: { fontSize: t.fontSize },
                },
              },
              ["> ".concat(e, "-body")]: { padding: n },
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
      var x = (0, m.I$)(
        "Card",
        (t) => {
          let e = (0, f.IX)(t, {
            cardShadow: t.boxShadowCard,
            cardHeadPadding: t.padding,
            cardPaddingBase: t.paddingLG,
            cardActionsIconSize: t.fontSize,
          });
          return [M(e), S(e)];
        },
        (t) => {
          var e, n;
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
              null !== (n = t.headerPadding) && void 0 !== n ? n : t.paddingLG,
          };
        }
      );
      let V = (t) => {
          let { actionClasses: e, actions: n = [], actionStyle: o } = t;
          return r.createElement(
            "ul",
            { className: e, style: o },
            n.map((t, e) =>
              r.createElement(
                "li",
                {
                  style: { width: "".concat(100 / n.length, "%") },
                  key: "action-".concat(e),
                },
                r.createElement("span", null, t)
              )
            )
          );
        },
        W = r.forwardRef((t, e) => {
          let n;
          let {
              prefixCls: C,
              className: p,
              rootClassName: m,
              style: f,
              extra: b,
              headStyle: g = {},
              bodyStyle: y = {},
              title: v,
              loading: E,
              bordered: k,
              variant: M,
              size: S,
              type: W,
              cover: w,
              actions: L,
              tabList: R,
              children: Z,
              activeTabKey: O,
              defaultActiveTabKey: H,
              tabBarExtraContent: P,
              hoverable: z,
              tabProps: N = {},
              classNames: F,
              styles: G,
              ...B
            } = t,
            {
              getPrefixCls: I,
              direction: T,
              className: D,
              style: j,
              classNames: A,
              styles: K,
            } = (0, c.dj)("card"),
            [q] = (0, l.Z)("card", M, k),
            _ = (0, s.Z)(S),
            U = { ...t, size: _, variant: q, loading: E },
            [X, Y] = (0, i.MW)([A, F], [K, G], { props: U }),
            $ = r.useMemo(
              () =>
                (0, o.qo)(Z).some((t) => r.isValidElement(t) && t.type === h),
              [Z]
            ),
            Q = I("card", C),
            [J, tt] = x(Q),
            te = r.createElement(
              d.Z,
              { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
              Z
            ),
            tn = void 0 !== O,
            tr = {
              ...N,
              [tn ? "activeKey" : "defaultActiveKey"]: tn ? O : H,
              tabBarExtraContent: P,
            },
            to = _ && "default" !== _ ? _ : "large",
            ta = R
              ? r.createElement(u.default, {
                  size: to,
                  ...tr,
                  className: "".concat(Q, "-head-tabs"),
                  onChange: (e) => {
                    var n;
                    null === (n = t.onTabChange) ||
                      void 0 === n ||
                      n.call(t, e);
                  },
                  items: R.map((t) => {
                    let { tab: e, ...n } = t;
                    return { label: e, ...n };
                  }),
                })
              : null;
          if (v || b || ta) {
            let t = (0, a.W)("".concat(Q, "-head"), X.header),
              e = (0, a.W)("".concat(Q, "-head-title"), X.title),
              o = (0, a.W)("".concat(Q, "-extra"), X.extra),
              i = { ...g, ...Y.header };
            n = r.createElement(
              "div",
              { className: t, style: i },
              r.createElement(
                "div",
                { className: "".concat(Q, "-head-wrapper") },
                v &&
                  r.createElement("div", { className: e, style: Y.title }, v),
                b && r.createElement("div", { className: o, style: Y.extra }, b)
              ),
              ta
            );
          }
          let ti = (0, a.W)("".concat(Q, "-cover"), X.cover),
            tc = w
              ? r.createElement("div", { className: ti, style: Y.cover }, w)
              : null,
            ts = (0, a.W)("".concat(Q, "-body"), X.body),
            tl = { ...y, ...Y.body },
            td = r.createElement(
              "div",
              { className: ts, style: tl },
              E ? te : Z
            ),
            tu = (0, a.W)("".concat(Q, "-actions"), X.actions),
            th = (null == L ? void 0 : L.length)
              ? r.createElement(V, {
                  actionClasses: tu,
                  actionStyle: Y.actions,
                  actions: L,
                })
              : null,
            tC = (0, o.CE)(B, ["onTabChange"]),
            tp = (0, a.W)(
              Q,
              D,
              {
                ["".concat(Q, "-loading")]: E,
                ["".concat(Q, "-bordered")]: "borderless" !== q,
                ["".concat(Q, "-hoverable")]: z,
                ["".concat(Q, "-contain-grid")]: $,
                ["".concat(Q, "-contain-tabs")]: null == R ? void 0 : R.length,
                ["".concat(Q, "-").concat(_)]: _,
                ["".concat(Q, "-type-").concat(W)]: !!W,
                ["".concat(Q, "-rtl")]: "rtl" === T,
              },
              p,
              m,
              J,
              tt,
              X.root
            ),
            tm = { ...Y.root, ...j, ...f };
          return r.createElement(
            "div",
            { ref: e, ...tC, className: tp, style: tm },
            n,
            tc,
            td,
            th
          );
        });
      (W.Grid = h),
        (W.Meta = (t) => {
          let {
              prefixCls: e,
              className: n,
              avatar: o,
              title: s,
              description: l,
              style: d,
              classNames: u,
              styles: h,
              ...C
            } = t,
            {
              getPrefixCls: p,
              className: m,
              style: f,
              classNames: b,
              styles: g,
            } = (0, c.dj)("cardMeta"),
            y = p("card", e),
            v = "".concat(y, "-meta"),
            [E, k] = (0, i.MW)([b, u], [g, h], { props: t }),
            M = (0, a.W)(v, n, m, E.root),
            S = { ...f, ...k.root, ...d },
            x = (0, a.W)("".concat(v, "-avatar"), E.avatar),
            V = (0, a.W)("".concat(v, "-title"), E.title),
            W = (0, a.W)("".concat(v, "-description"), E.description),
            w = (0, a.W)("".concat(v, "-section"), E.section),
            L = o
              ? r.createElement("div", { className: x, style: k.avatar }, o)
              : null,
            R = s
              ? r.createElement("div", { className: V, style: k.title }, s)
              : null,
            Z = l
              ? r.createElement(
                  "div",
                  { className: W, style: k.description },
                  l
                )
              : null,
            O =
              R || Z
                ? r.createElement(
                    "div",
                    { className: w, style: k.section },
                    R,
                    Z
                  )
                : null;
          return r.createElement("div", { ...C, className: M, style: S }, L, O);
        });
      var w = W;
    },
    53743: function (t, e, n) {
      n.d(e, {
        default: function () {
          return y;
        },
      });
      var r = n(42535),
        o = n(50815),
        a = n(74079),
        i = n(2265),
        c = n(28975),
        s = n(61994),
        l = n(93942),
        d = n(71744),
        u = n(64024),
        h = n(85695),
        C = n(90024),
        p = n(4065),
        m = (0, l.i)((t) => {
          let {
              prefixCls: e,
              className: n,
              closeIcon: r,
              closable: o,
              type: a,
              title: l,
              children: m,
              footer: f,
              ...b
            } = t,
            { getPrefixCls: g } = i.useContext(d.E_),
            y = g(),
            v = e || g("modal"),
            E = (0, u.Z)(y),
            [k, M] = (0, p.ZP)(v, E),
            S = "".concat(v, "-confirm"),
            x = {};
          return (
            (x = a
              ? {
                  closable: null != o && o,
                  title: "",
                  footer: "",
                  children: i.createElement(h.O, {
                    ...t,
                    prefixCls: v,
                    confirmPrefixCls: S,
                    rootPrefixCls: y,
                    content: m,
                  }),
                }
              : {
                  closable: null == o || o,
                  title: l,
                  footer: null !== f && i.createElement(C.$, { ...t }),
                  children: m,
                }),
            i.createElement(c.s, {
              prefixCls: v,
              className: (0, s.W)(
                k,
                "".concat(v, "-pure-panel"),
                a && S,
                a && "".concat(S, "-").concat(a),
                n,
                M,
                E
              ),
              ...b,
              closeIcon: (0, C.b)(v, r),
              closable: o,
              ...x,
            })
          );
        }),
        f = n(23248);
      function b(t) {
        return (0, r.ZP)((0, r.uW)(t));
      }
      let g = a.Z;
      (g.useModal = f.Z),
        (g.info = function (t) {
          return (0, r.ZP)((0, r.cw)(t));
        }),
        (g.success = function (t) {
          return (0, r.ZP)((0, r.vq)(t));
        }),
        (g.error = function (t) {
          return (0, r.ZP)((0, r.AQ)(t));
        }),
        (g.warning = b),
        (g.warn = b),
        (g.confirm = function (t) {
          return (0, r.ZP)((0, r.Au)(t));
        }),
        (g.destroyAll = function () {
          for (; o.Z.length; ) {
            let t = o.Z.pop();
            t && t();
          }
        }),
        (g.config = r.ai),
        (g._InternalPanelDoNotUseOrYouWillBeFired = m);
      var y = g;
    },
    96397: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return m;
        },
      });
      var r = n(2265),
        o = n(59214);
      let a = new Map([
        [
          "Bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z",
              fill: "currentColor",
            }),
            r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M22 12C22 11.161 22 10.4153 21.9871 9.75H2.0129C2 10.4153 2 11.161 2 12V14C2 17.7712 2 19.6569 3.17157 20.8284C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.8284C22 19.6569 22 17.7712 22 14V12ZM14 12.25C13.0335 12.25 12.25 13.0335 12.25 14V16C12.25 16.9665 13.0335 17.75 14 17.75C14.9665 17.75 15.75 16.9665 15.75 16V14C15.75 13.0335 14.9665 12.25 14 12.25ZM14 13.75C13.8619 13.75 13.75 13.8619 13.75 14V16C13.75 16.1381 13.8619 16.25 14 16.25C14.1381 16.25 14.25 16.1381 14.25 16V14C14.25 13.8619 14.1381 13.75 14 13.75ZM10.787 12.3071C11.0673 12.4232 11.25 12.6967 11.25 13V17C11.25 17.4142 10.9142 17.75 10.5 17.75C10.0858 17.75 9.75 17.4142 9.75 17V14.8107L9.53033 15.0303C9.23744 15.3232 8.76256 15.3232 8.46967 15.0303C8.17678 14.7374 8.17678 14.2626 8.46967 13.9697L9.96967 12.4697C10.1842 12.2552 10.5068 12.191 10.787 12.3071Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M6.96006 2C7.37758 2 7.71605 2.30996 7.71605 2.69231V4.08883C8.38663 4.07692 9.13829 4.07692 9.98402 4.07692H14.016C14.8617 4.07692 15.6134 4.07692 16.284 4.08883V2.69231C16.284 2.30996 16.6224 2 17.0399 2C17.4575 2 17.7959 2.30996 17.7959 2.69231V4.15008C19.2468 4.25647 20.1992 4.51758 20.899 5.15838C21.5987 5.79917 21.8838 6.67139 22 8V9H2V8C2.11618 6.67139 2.4013 5.79917 3.10104 5.15838C3.80079 4.51758 4.75323 4.25647 6.20406 4.15008V2.69231C6.20406 2.30996 6.54253 2 6.96006 2Z",
              fill: "currentColor",
            }),
            r.createElement("path", {
              opacity: "0.5",
              d: "M22 14V12C22 11.161 21.9873 9.66527 21.9744 9H2.00586C1.99296 9.66527 2.00564 11.161 2.00564 12V14C2.00564 17.7712 2.00564 19.6569 3.17688 20.8284C4.34813 22 6.23321 22 10.0034 22H14.0023C17.7724 22 19.6575 22 20.8288 20.8284C22 19.6569 22 17.7712 22 14Z",
              fill: "currentColor",
            }),
            r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M14 12.25C13.0335 12.25 12.25 13.0335 12.25 14V16C12.25 16.9665 13.0335 17.75 14 17.75C14.9665 17.75 15.75 16.9665 15.75 16V14C15.75 13.0335 14.9665 12.25 14 12.25ZM14 13.75C13.8619 13.75 13.75 13.862 13.75 14V16C13.75 16.1381 13.8619 16.25 14 16.25C14.1381 16.25 14.25 16.1381 14.25 16V14C14.25 13.862 14.1381 13.75 14 13.75Z",
              fill: "currentColor",
            }),
            r.createElement("path", {
              d: "M11.25 13C11.25 12.6967 11.0673 12.4232 10.787 12.3071C10.5068 12.191 10.1842 12.2552 9.96967 12.4697L8.46967 13.9697C8.17678 14.2626 8.17678 14.7375 8.46967 15.0304C8.76256 15.3232 9.23744 15.3232 9.53033 15.0304L9.75 14.8107V17C9.75 17.4142 10.0858 17.75 10.5 17.75C10.9142 17.75 11.25 17.4142 11.25 17V13Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M7 4V2.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M17 4V2.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M9 14.5L10.5 13V17",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            r.createElement("path", {
              d: "M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M21.5 9H16.625H10.75M2 9H5.875",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C20.1752 21.4816 19.3001 21.7706 18 21.8985",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            r.createElement("path", {
              d: "M7 4V2.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M17 4V2.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M9 14.5L10.5 13V17",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            r.createElement("path", {
              d: "M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M2.5 9H21.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              d: "M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            r.createElement("path", {
              opacity: "0.5",
              d: "M7 4V2.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              opacity: "0.5",
              d: "M17 4V2.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              opacity: "0.5",
              d: "M2 9H22",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            r.createElement("path", {
              d: "M9 14.5L10.5 13V17",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            }),
            r.createElement("path", {
              d: "M13 16V14C13 13.4477 13.4477 13 14 13C14.5523 13 15 13.4477 15 14V16C15 16.5523 14.5523 17 14 17C13.4477 17 13 16.5523 13 16Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Outline",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 1.75C7.41421 1.75 7.75 2.08579 7.75 2.5V3.26272C8.41203 3.24999 9.1414 3.24999 9.94358 3.25H14.0564C14.8586 3.24999 15.588 3.24999 16.25 3.26272V2.5C16.25 2.08579 16.5858 1.75 17 1.75C17.4142 1.75 17.75 2.08579 17.75 2.5V3.32709C18.0099 3.34691 18.2561 3.37182 18.489 3.40313C19.6614 3.56076 20.6104 3.89288 21.3588 4.64124C22.1071 5.38961 22.4392 6.33855 22.5969 7.51098C22.6472 7.88567 22.681 8.29459 22.7037 8.74007C22.7337 8.82106 22.75 8.90861 22.75 9C22.75 9.06932 22.7406 9.13644 22.723 9.20016C22.75 10.0021 22.75 10.9128 22.75 11.9436V14.0564C22.75 15.8942 22.75 17.3498 22.5969 18.489C22.4392 19.6614 22.1071 20.6104 21.3588 21.3588C20.6104 22.1071 19.6614 22.4392 18.489 22.5969C17.3498 22.75 15.8942 22.75 14.0564 22.75H9.94359C8.10583 22.75 6.65019 22.75 5.51098 22.5969C4.33856 22.4392 3.38961 22.1071 2.64124 21.3588C1.89288 20.6104 1.56076 19.6614 1.40314 18.489C1.24997 17.3498 1.24998 15.8942 1.25 14.0564V11.9436C1.24999 10.9127 1.24998 10.0021 1.27701 9.20017C1.25941 9.13645 1.25 9.06932 1.25 9C1.25 8.90862 1.26634 8.82105 1.29627 8.74006C1.31895 8.29458 1.35276 7.88566 1.40314 7.51098C1.56076 6.33856 1.89288 5.38961 2.64124 4.64124C3.38961 3.89288 4.33856 3.56076 5.51098 3.40313C5.7439 3.37182 5.99006 3.34691 6.25 3.32709V2.5C6.25 2.08579 6.58579 1.75 7 1.75ZM2.76309 9.75C2.75032 10.4027 2.75 11.146 2.75 12V14C2.75 15.9068 2.75159 17.2615 2.88976 18.2892C3.02502 19.2952 3.27869 19.8749 3.7019 20.2981C4.12511 20.7213 4.70476 20.975 5.71085 21.1102C6.73851 21.2484 8.09318 21.25 10 21.25H14C15.9068 21.25 17.2615 21.2484 18.2892 21.1102C19.2952 20.975 19.8749 20.7213 20.2981 20.2981C20.7213 19.8749 20.975 19.2952 21.1102 18.2892C21.2484 17.2615 21.25 15.9068 21.25 14V12C21.25 11.146 21.2497 10.4027 21.2369 9.75H2.76309ZM21.1683 8.25H2.83168C2.8477 8.06061 2.86685 7.88123 2.88976 7.71085C3.02502 6.70476 3.27869 6.12511 3.7019 5.7019C4.12511 5.27869 4.70476 5.02502 5.71085 4.88976C6.73851 4.75159 8.09318 4.75 10 4.75H14C15.9068 4.75 17.2615 4.75159 18.2892 4.88976C19.2952 5.02502 19.8749 5.27869 20.2981 5.7019C20.7213 6.12511 20.975 6.70476 21.1102 7.71085C21.1331 7.88123 21.1523 8.06061 21.1683 8.25ZM10.787 12.3071C11.0673 12.4232 11.25 12.6967 11.25 13V17C11.25 17.4142 10.9142 17.75 10.5 17.75C10.0858 17.75 9.75 17.4142 9.75 17V14.8107L9.53033 15.0303C9.23744 15.3232 8.76256 15.3232 8.46967 15.0303C8.17678 14.7374 8.17678 14.2626 8.46967 13.9697L9.96967 12.4697C10.1842 12.2552 10.5068 12.191 10.787 12.3071ZM14 13.75C13.8619 13.75 13.75 13.8619 13.75 14V16C13.75 16.1381 13.8619 16.25 14 16.25C14.1381 16.25 14.25 16.1381 14.25 16V14C14.25 13.8619 14.1381 13.75 14 13.75ZM12.25 14C12.25 13.0335 13.0335 12.25 14 12.25C14.9665 12.25 15.75 13.0335 15.75 14V16C15.75 16.9665 14.9665 17.75 14 17.75C13.0335 17.75 12.25 16.9665 12.25 16V14Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
      var i = Object.defineProperty,
        c = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        h = (t, e, n) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        C = (t, e) => {
          for (var n in e || (e = {})) d.call(e, n) && h(t, n, e[n]);
          if (l) for (var n of l(e)) u.call(e, n) && h(t, n, e[n]);
          return t;
        },
        p = (t, e) => c(t, s(e));
      let m = (0, r.forwardRef)((t, e) =>
        r.createElement(o.Z, p(C({ ref: e }, t), { weights: a }))
      );
      m.displayName = "CalendarDate";
    },
    27639: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return m;
        },
      });
      var r = n(2265),
        o = n(59214),
        a = n(41750),
        i = Object.defineProperty,
        c = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        l = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        u = Object.prototype.propertyIsEnumerable,
        h = (t, e, n) =>
          e in t
            ? i(t, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (t[e] = n),
        C = (t, e) => {
          for (var n in e || (e = {})) d.call(e, n) && h(t, n, e[n]);
          if (l) for (var n of l(e)) u.call(e, n) && h(t, n, e[n]);
          return t;
        },
        p = (t, e) => c(t, s(e));
      let m = (0, r.forwardRef)((t, e) =>
        r.createElement(o.Z, p(C({ ref: e }, t), { weights: a.Z }))
      );
      m.displayName = "User";
    },
    41750: function (t, e, n) {
      n.d(e, {
        Z: function () {
          return o;
        },
      });
      var r = n(2265);
      let o = new Map([
        [
          "Bold",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("circle", {
              cx: "12",
              cy: "6",
              r: "4",
              fill: "currentColor",
            }),
            r.createElement("path", {
              d: "M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("circle", {
              cx: "12",
              cy: "6",
              r: "4",
              fill: "currentColor",
            }),
            r.createElement("path", {
              opacity: "0.5",
              d: "M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("circle", {
              cx: "12",
              cy: "6",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            r.createElement("path", {
              d: "M19.9975 18C20 17.8358 20 17.669 20 17.5C20 15.0147 16.4183 13 12 13C7.58172 13 4 15.0147 4 17.5C4 19.9853 4 22 12 22C14.231 22 15.8398 21.8433 17 21.5634",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("circle", {
              cx: "12",
              cy: "6",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            r.createElement("path", {
              d: "M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "LineDuotone",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("circle", {
              cx: "12",
              cy: "6",
              r: "4",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            r.createElement("path", {
              opacity: "0.5",
              d: "M20 17.5C20 19.9853 20 22 12 22C4 22 4 19.9853 4 17.5C4 15.0147 7.58172 13 12 13C16.4183 13 20 15.0147 20 17.5Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "Outline",
          r.createElement(
            r.Fragment,
            null,
            r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.0001 1.25C9.37678 1.25 7.25013 3.37665 7.25013 6C7.25013 8.62335 9.37678 10.75 12.0001 10.75C14.6235 10.75 16.7501 8.62335 16.7501 6C16.7501 3.37665 14.6235 1.25 12.0001 1.25ZM8.75013 6C8.75013 4.20507 10.2052 2.75 12.0001 2.75C13.7951 2.75 15.2501 4.20507 15.2501 6C15.2501 7.79493 13.7951 9.25 12.0001 9.25C10.2052 9.25 8.75013 7.79493 8.75013 6Z",
              fill: "currentColor",
            }),
            r.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
    },
    2894: function (t, e, n) {
      n.d(e, {
        R: function () {
          return c;
        },
        m: function () {
          return i;
        },
      });
      var r = n(18238),
        o = n(7989),
        a = n(11255),
        i = class extends o.F {
          #t;
          #e;
          #n;
          #r;
          constructor(t) {
            super(),
              (this.#t = t.client),
              (this.mutationId = t.mutationId),
              (this.#n = t.mutationCache),
              (this.#e = []),
              (this.state = t.state || c()),
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
            return this.#r?.continue() ?? this.execute(this.state.variables);
          }
          async execute(t) {
            let e = () => {
                this.#o({ type: "continue" });
              },
              n = {
                client: this.#t,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#r = (0, a.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(t, n)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (t, e) => {
                this.#o({ type: "failed", failureCount: t, error: e });
              },
              onPause: () => {
                this.#o({ type: "pause" });
              },
              onContinue: e,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#n.canRun(this),
            });
            let r = "pending" === this.state.status,
              o = !this.#r.canStart();
            try {
              if (r) e();
              else {
                this.#o({ type: "pending", variables: t, isPaused: o }),
                  await this.#n.config.onMutate?.(t, this, n);
                let e = await this.options.onMutate?.(t, n);
                e !== this.state.context &&
                  this.#o({
                    type: "pending",
                    context: e,
                    variables: t,
                    isPaused: o,
                  });
              }
              let a = await this.#r.start();
              return (
                await this.#n.config.onSuccess?.(
                  a,
                  t,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(a, t, this.state.context, n),
                await this.#n.config.onSettled?.(
                  a,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  a,
                  null,
                  t,
                  this.state.context,
                  n
                ),
                this.#o({ type: "success", data: a }),
                a
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
                this.#o({ type: "error", error: e });
              }
            } finally {
              this.#n.runNext(this);
            }
          }
          #o(t) {
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
              r.Vr.batch(() => {
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
      function c() {
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
          return d;
        },
      });
      var r = n(2265),
        o = n(2894),
        a = n(18238),
        i = n(24112),
        c = n(45345),
        s = class extends i.l {
          #t;
          #a = void 0;
          #i;
          #c;
          constructor(t, e) {
            super(),
              (this.#t = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#s();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, c.VS)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#i,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, c.Ym)(e.mutationKey) !== (0, c.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#i?.state.status === "pending" &&
                  this.#i.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#i?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#s(), this.#l(t);
          }
          getCurrentResult() {
            return this.#a;
          }
          reset() {
            this.#i?.removeObserver(this),
              (this.#i = void 0),
              this.#s(),
              this.#l();
          }
          mutate(t, e) {
            return (
              (this.#c = e),
              this.#i?.removeObserver(this),
              (this.#i = this.#t
                .getMutationCache()
                .build(this.#t, this.options)),
              this.#i.addObserver(this),
              this.#i.execute(t)
            );
          }
          #s() {
            let t = this.#i?.state ?? (0, o.R)();
            this.#a = {
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
            a.Vr.batch(() => {
              if (this.#c && this.hasListeners()) {
                let e = this.#a.variables,
                  n = this.#a.context,
                  r = {
                    client: this.#t,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                t?.type === "success"
                  ? (this.#c.onSuccess?.(t.data, e, n, r),
                    this.#c.onSettled?.(t.data, null, e, n, r))
                  : t?.type === "error" &&
                    (this.#c.onError?.(t.error, e, n, r),
                    this.#c.onSettled?.(void 0, t.error, e, n, r));
              }
              this.listeners.forEach((t) => {
                t(this.#a);
              });
            });
          }
        },
        l = n(29827);
      function d(t, e) {
        let n = (0, l.NL)(e),
          [o] = r.useState(() => new s(n, t));
        r.useEffect(() => {
          o.setOptions(t);
        }, [o, t]);
        let i = r.useSyncExternalStore(
            r.useCallback((t) => o.subscribe(a.Vr.batchCalls(t)), [o]),
            () => o.getCurrentResult(),
            () => o.getCurrentResult()
          ),
          d = r.useCallback(
            (t, e) => {
              o.mutate(t, e).catch(c.ZT);
            },
            [o]
          );
        if (i.error && (0, c.L3)(o.options.throwOnError, [i.error]))
          throw i.error;
        return { ...i, mutate: d, mutateAsync: i.mutate };
      }
    },
  },
]);
