"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6815],
  {
    55726: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return r;
        },
      });
      var n = a(2265),
        l = {
          icon: {
            tag: "svg",
            attrs: { viewBox: "64 64 896 896", focusable: "false" },
            children: [
              {
                tag: "path",
                attrs: {
                  d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z",
                },
              },
            ],
          },
          name: "info-circle",
          theme: "filled",
        },
        c = a(55015);
      function o() {
        return (o = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var a = arguments[e];
                for (var n in a)
                  Object.prototype.hasOwnProperty.call(a, n) && (t[n] = a[n]);
              }
              return t;
            }).apply(this, arguments);
      }
      var r = n.forwardRef((t, e) =>
        n.createElement(c.Z, o({}, t, { ref: e, icon: l }))
      );
    },
    50337: function (t, e, a) {
      a.d(e, {
        Z: function () {
          return M;
        },
      });
      var n = a(2265),
        l = a(61994),
        c = a(80052),
        o = a(71744),
        r = (t) => {
          let { prefixCls: e, className: a, style: c, size: o, shape: r } = t,
            i = (0, l.W)({
              ["".concat(e, "-lg")]: "large" === o,
              ["".concat(e, "-sm")]: "small" === o,
            }),
            s = (0, l.W)({
              ["".concat(e, "-circle")]: "circle" === r,
              ["".concat(e, "-square")]: "square" === r,
              ["".concat(e, "-round")]: "round" === r,
            }),
            d = n.useMemo(
              () =>
                "number" == typeof o
                  ? { width: o, height: o, lineHeight: "".concat(o, "px") }
                  : {},
              [o]
            );
          return n.createElement("span", {
            className: (0, l.W)(e, i, s, a),
            style: { ...d, ...c },
          });
        },
        i = a(38775),
        s = a(99320),
        d = a(19224);
      let u = new i.E4("ant-skeleton-loading", {
          "0%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0 50%" },
        }),
        m = (t) => ({ height: t, lineHeight: (0, i.bf)(t) }),
        g = (t) => ({ width: t, ...m(t) }),
        h = (t) => ({
          background: t.skeletonLoadingBackground,
          backgroundSize: "400% 100%",
          animationName: u,
          animationDuration: t.skeletonLoadingMotionDuration,
          animationTimingFunction: "ease",
          animationIterationCount: "infinite",
        }),
        p = (t, e) => ({
          width: e(t).mul(5).equal(),
          minWidth: e(t).mul(5).equal(),
          ...m(t),
        }),
        v = (t) => {
          let {
            skeletonAvatarCls: e,
            gradientFromColor: a,
            controlHeight: n,
            controlHeightLG: l,
            controlHeightSM: c,
          } = t;
          return {
            [e]: {
              display: "inline-block",
              verticalAlign: "top",
              background: a,
              ...g(n),
            },
            ["".concat(e).concat(e, "-circle")]: { borderRadius: "50%" },
            ["".concat(e).concat(e, "-lg")]: { ...g(l) },
            ["".concat(e).concat(e, "-sm")]: { ...g(c) },
          };
        },
        k = (t) => {
          let {
            controlHeight: e,
            borderRadiusSM: a,
            skeletonInputCls: n,
            controlHeightLG: l,
            controlHeightSM: c,
            gradientFromColor: o,
            calc: r,
          } = t;
          return {
            [n]: {
              display: "inline-block",
              verticalAlign: "top",
              background: o,
              borderRadius: a,
              ...p(e, r),
            },
            ["".concat(n, "-lg")]: { ...p(l, r) },
            ["".concat(n, "-sm")]: { ...p(c, r) },
          };
        },
        b = (t) => {
          let {
            gradientFromColor: e,
            borderRadiusSM: a,
            imageSizeBase: n,
            calc: l,
          } = t;
          return {
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            verticalAlign: "middle",
            background: e,
            borderRadius: a,
            ...g(l(n).mul(2).equal()),
          };
        },
        f = (t) => ({ [t.skeletonNodeCls]: { ...b(t) } }),
        y = (t) => {
          let { skeletonImageCls: e, imageSizeBase: a, calc: n } = t;
          return {
            [e]: {
              ...b(t),
              ["".concat(e, "-path")]: { fill: "#bfbfbf" },
              ["".concat(e, "-svg")]: {
                ...g(a),
                maxWidth: n(a).mul(4).equal(),
                maxHeight: n(a).mul(4).equal(),
              },
              ["".concat(e, "-svg").concat(e, "-svg-circle")]: {
                borderRadius: "50%",
              },
            },
            ["".concat(e).concat(e, "-circle")]: { borderRadius: "50%" },
          };
        },
        C = (t, e, a) => {
          let { skeletonButtonCls: n } = t;
          return {
            ["".concat(a).concat(n, "-circle")]: {
              width: e,
              minWidth: e,
              borderRadius: "50%",
            },
            ["".concat(a).concat(n, "-round")]: { borderRadius: e },
          };
        },
        w = (t, e) => ({
          width: e(t).mul(2).equal(),
          minWidth: e(t).mul(2).equal(),
          ...m(t),
        }),
        E = (t) => {
          let {
            borderRadiusSM: e,
            skeletonButtonCls: a,
            controlHeight: n,
            controlHeightLG: l,
            controlHeightSM: c,
            gradientFromColor: o,
            calc: r,
          } = t;
          return {
            [a]: {
              display: "inline-block",
              verticalAlign: "top",
              background: o,
              borderRadius: e,
              width: r(n).mul(2).equal(),
              minWidth: r(n).mul(2).equal(),
              ...w(n, r),
            },
            ...C(t, n, a),
            ["".concat(a, "-lg")]: { ...w(l, r) },
            ...C(t, l, "".concat(a, "-lg")),
            ["".concat(a, "-sm")]: { ...w(c, r) },
            ...C(t, c, "".concat(a, "-sm")),
          };
        },
        N = (t) => {
          let {
            componentCls: e,
            skeletonAvatarCls: a,
            skeletonTitleCls: n,
            skeletonParagraphCls: l,
            skeletonButtonCls: c,
            skeletonInputCls: o,
            skeletonNodeCls: r,
            skeletonImageCls: i,
            controlHeight: s,
            controlHeightLG: d,
            controlHeightSM: u,
            gradientFromColor: m,
            padding: p,
            marginSM: b,
            borderRadius: C,
            titleHeight: w,
            blockRadius: N,
            paragraphLiHeight: x,
            controlHeightXS: q,
            paragraphMarginTop: W,
          } = t;
          return {
            [e]: {
              display: "table",
              width: "100%",
              ["".concat(e, "-header")]: {
                display: "table-cell",
                paddingInlineEnd: p,
                verticalAlign: "top",
                [a]: {
                  display: "inline-block",
                  verticalAlign: "top",
                  background: m,
                  ...g(s),
                },
                ["".concat(a, "-circle")]: { borderRadius: "50%" },
                ["".concat(a, "-lg")]: { ...g(d) },
                ["".concat(a, "-sm")]: { ...g(u) },
              },
              ["".concat(e, "-section")]: {
                display: "table-cell",
                width: "100%",
                verticalAlign: "top",
                [n]: {
                  width: "100%",
                  height: w,
                  background: m,
                  borderRadius: N,
                  ["+ ".concat(l)]: { marginBlockStart: u },
                },
                [l]: {
                  padding: 0,
                  "> li": {
                    width: "100%",
                    height: x,
                    listStyle: "none",
                    background: m,
                    borderRadius: N,
                    "+ li": { marginBlockStart: q },
                  },
                },
                ["".concat(
                  l,
                  "> li:last-child:not(:first-child):not(:nth-child(2))"
                )]: { width: "61%" },
              },
              ["&-round ".concat(e, "-section")]: {
                ["".concat(n, ", ").concat(l, " > li")]: { borderRadius: C },
              },
            },
            ["".concat(e, "-with-avatar ").concat(e, "-section")]: {
              [n]: {
                marginBlockStart: b,
                ["+ ".concat(l)]: { marginBlockStart: W },
              },
            },
            ["".concat(e).concat(e, "-element")]: {
              display: "inline-block",
              width: "auto",
              ...E(t),
              ...v(t),
              ...k(t),
              ...f(t),
              ...y(t),
            },
            ["".concat(e).concat(e, "-block")]: {
              width: "100%",
              [c]: { width: "100%" },
              [o]: { width: "100%" },
            },
            ["".concat(e).concat(e, "-active")]: {
              ["\n        "
                .concat(n, ",\n        ")
                .concat(l, " > li,\n        ")
                .concat(a, ",\n        ")
                .concat(c, ",\n        ")
                .concat(o, ",\n        ")
                .concat(r, ",\n        ")
                .concat(i, "\n      ")]: { ...h(t) },
            },
          };
        };
      var x = (0, s.I$)(
          "Skeleton",
          (t) => {
            let { componentCls: e, calc: a } = t;
            return N(
              (0, d.IX)(t, {
                skeletonAvatarCls: "".concat(e, "-avatar"),
                skeletonTitleCls: "".concat(e, "-title"),
                skeletonParagraphCls: "".concat(e, "-paragraph"),
                skeletonButtonCls: "".concat(e, "-button"),
                skeletonInputCls: "".concat(e, "-input"),
                skeletonNodeCls: "".concat(e, "-node"),
                skeletonImageCls: "".concat(e, "-image"),
                imageSizeBase: a(t.controlHeight).mul(1.5).equal(),
                borderRadius: 100,
                skeletonLoadingBackground: "linear-gradient(90deg, "
                  .concat(t.gradientFromColor, " 25%, ")
                  .concat(t.gradientToColor, " 37%, ")
                  .concat(t.gradientFromColor, " 63%)"),
                skeletonLoadingMotionDuration: "1.4s",
              })
            );
          },
          (t) => {
            let { colorFillContent: e, colorFill: a } = t;
            return {
              color: e,
              colorGradientEnd: a,
              gradientFromColor: e,
              gradientToColor: a,
              titleHeight: t.controlHeight / 2,
              blockRadius: t.borderRadiusSM,
              paragraphMarginTop: t.marginLG + t.marginXXS,
              paragraphLiHeight: t.controlHeight / 2,
            };
          },
          {
            deprecatedTokens: [
              ["color", "gradientFromColor"],
              ["colorGradientEnd", "gradientToColor"],
            ],
          }
        ),
        q = (t) => {
          let {
              prefixCls: e,
              className: a,
              classNames: c,
              rootClassName: r,
              internalClassName: i,
              style: s,
              styles: d,
              active: u,
              children: m,
            } = t,
            { getPrefixCls: g } = n.useContext(o.E_),
            h = g("skeleton", e),
            [p, v] = x(h),
            k = (0, l.W)(
              h,
              "".concat(h, "-element"),
              { ["".concat(h, "-active")]: u },
              p,
              null == c ? void 0 : c.root,
              a,
              r,
              v
            );
          return n.createElement(
            "div",
            { className: k, style: null == d ? void 0 : d.root },
            n.createElement(
              "div",
              {
                className: (0, l.W)(
                  null == c ? void 0 : c.content,
                  i || "".concat(h, "-node")
                ),
                style: { ...(null == d ? void 0 : d.content), ...s },
              },
              m
            )
          );
        };
      let W = (t, e) => {
        let { width: a, rows: n = 2 } = e;
        return Array.isArray(a) ? a[t] : n - 1 === t ? a : void 0;
      };
      var R = (t) => {
          let { prefixCls: e, className: a, style: c, rows: o = 0 } = t,
            r = Array.from({ length: o }).map((e, a) =>
              n.createElement("li", { key: a, style: { width: W(a, t) } })
            );
          return n.createElement(
            "ul",
            { className: (0, l.W)(e, a), style: c },
            r
          );
        },
        z = (t) => {
          let { prefixCls: e, className: a, width: c, style: o } = t;
          return n.createElement("h3", {
            className: (0, l.W)(e, a),
            style: { width: c, ...o },
          });
        };
      function A(t) {
        return t && "object" == typeof t ? t : {};
      }
      let B = (t) => {
        let {
            prefixCls: e,
            loading: a,
            className: i,
            rootClassName: s,
            classNames: d,
            style: u,
            styles: m,
            children: g,
            avatar: h = !1,
            title: p = !0,
            paragraph: v = !0,
            active: k,
            round: b,
          } = t,
          {
            getPrefixCls: f,
            direction: y,
            className: C,
            style: w,
            classNames: E,
            styles: N,
          } = (0, o.dj)("skeleton"),
          q = f("skeleton", e),
          [W, B] = x(q),
          M = { ...t, avatar: h, title: p, paragraph: v },
          [S, I] = (0, c.MW)([E, d], [N, m], { props: M });
        if (a || !("loading" in t)) {
          let t, e;
          let a = !!h,
            c = !!p,
            o = !!v;
          if (a) {
            let e = {
              className: S.avatar,
              prefixCls: "".concat(q, "-avatar"),
              ...(c && !o
                ? { size: "large", shape: "square" }
                : { size: "large", shape: "circle" }),
              ...A(h),
              style: I.avatar,
            };
            t = n.createElement(
              "div",
              {
                className: (0, l.W)(S.header, "".concat(q, "-header")),
                style: I.header,
              },
              n.createElement(r, { ...e })
            );
          }
          if (c || o) {
            let t, r;
            if (c) {
              let e = {
                className: S.title,
                prefixCls: "".concat(q, "-title"),
                ...(!a && o
                  ? { width: "38%" }
                  : a && o
                  ? { width: "50%" }
                  : {}),
                ...A(p),
                style: I.title,
              };
              t = n.createElement(z, { ...e });
            }
            if (o) {
              let t = {
                className: S.paragraph,
                prefixCls: "".concat(q, "-paragraph"),
                ...(function (t, e) {
                  let a = {};
                  return (
                    (t && e) || (a.width = "61%"),
                    !t && e ? (a.rows = 3) : (a.rows = 2),
                    a
                  );
                })(a, c),
                ...A(v),
                style: I.paragraph,
              };
              r = n.createElement(R, { ...t });
            }
            e = n.createElement(
              "div",
              {
                className: (0, l.W)(S.section, "".concat(q, "-section")),
                style: I.section,
              },
              t,
              r
            );
          }
          let d = (0, l.W)(
            q,
            {
              ["".concat(q, "-with-avatar")]: a,
              ["".concat(q, "-active")]: k,
              ["".concat(q, "-rtl")]: "rtl" === y,
              ["".concat(q, "-round")]: b,
            },
            S.root,
            C,
            i,
            s,
            W,
            B
          );
          return n.createElement(
            "div",
            { className: d, style: { ...I.root, ...w, ...u } },
            t,
            e
          );
        }
        return null != g ? g : null;
      };
      (B.Button = (t) => {
        let {
            prefixCls: e,
            className: a,
            rootClassName: c,
            classNames: i,
            active: s,
            style: d,
            styles: u,
            block: m = !1,
            size: g = "default",
            ...h
          } = t,
          { getPrefixCls: p } = n.useContext(o.E_),
          v = p("skeleton", e),
          [k, b] = x(v),
          f = (0, l.W)(
            v,
            "".concat(v, "-element"),
            { ["".concat(v, "-active")]: s, ["".concat(v, "-block")]: m },
            null == i ? void 0 : i.root,
            a,
            c,
            k,
            b
          );
        return n.createElement(
          "div",
          { className: f, style: null == u ? void 0 : u.root },
          n.createElement(r, {
            prefixCls: "".concat(v, "-button"),
            className: null == i ? void 0 : i.content,
            style: { ...(null == u ? void 0 : u.content), ...d },
            size: g,
            ...h,
          })
        );
      }),
        (B.Avatar = (t) => {
          let {
              prefixCls: e,
              className: a,
              classNames: c,
              rootClassName: i,
              active: s,
              style: d,
              styles: u,
              shape: m = "circle",
              size: g = "default",
              ...h
            } = t,
            { getPrefixCls: p } = n.useContext(o.E_),
            v = p("skeleton", e),
            [k, b] = x(v),
            f = (0, l.W)(
              v,
              "".concat(v, "-element"),
              { ["".concat(v, "-active")]: s },
              null == c ? void 0 : c.root,
              a,
              i,
              k,
              b
            );
          return n.createElement(
            "div",
            { className: f, style: null == u ? void 0 : u.root },
            n.createElement(r, {
              prefixCls: "".concat(v, "-avatar"),
              className: null == c ? void 0 : c.content,
              style: { ...(null == u ? void 0 : u.content), ...d },
              shape: m,
              size: g,
              ...h,
            })
          );
        }),
        (B.Input = (t) => {
          let {
              prefixCls: e,
              className: a,
              classNames: c,
              rootClassName: i,
              active: s,
              block: d,
              style: u,
              styles: m,
              size: g = "default",
              ...h
            } = t,
            { getPrefixCls: p } = n.useContext(o.E_),
            v = p("skeleton", e),
            [k, b] = x(v),
            f = (0, l.W)(
              v,
              "".concat(v, "-element"),
              { ["".concat(v, "-active")]: s, ["".concat(v, "-block")]: d },
              null == c ? void 0 : c.root,
              a,
              i,
              k,
              b
            );
          return n.createElement(
            "div",
            { className: f, style: null == m ? void 0 : m.root },
            n.createElement(r, {
              prefixCls: "".concat(v, "-input"),
              className: null == c ? void 0 : c.content,
              style: { ...(null == m ? void 0 : m.content), ...u },
              size: g,
              ...h,
            })
          );
        }),
        (B.Image = (t) => {
          let { getPrefixCls: e } = n.useContext(o.E_),
            a = e("skeleton", t.prefixCls);
          return n.createElement(
            q,
            { ...t, internalClassName: "".concat(a, "-image") },
            n.createElement(
              "svg",
              {
                viewBox: "0 0 1098 1024",
                xmlns: "http://www.w3.org/2000/svg",
                className: "".concat(a, "-image-svg"),
              },
              n.createElement("title", null, "Image placeholder"),
              n.createElement("path", {
                d: "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z",
                className: "".concat(a, "-image-path"),
              })
            )
          );
        }),
        (B.Node = q);
      var M = B;
    },
  },
]);
