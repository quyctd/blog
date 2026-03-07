"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [474],
  {
    69410: function (e, t, n) {
      var a = n(54998);
      t.Z = a.Z;
    },
    76188: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var a = n(2265),
        l = n(61994),
        o = n(80052),
        c = n(6543),
        r = n(71744),
        i = n(33759),
        s = n(28617),
        d = { xxl: 3, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 };
      let m = a.createContext(null);
      var u = n(73627);
      let p = (e) =>
        (0, u.qo)(e).map((e) => ({
          ...(null == e ? void 0 : e.props),
          key: e.key,
        }));
      var f = (e, t) => {
          let [n, l] = (0, a.useMemo)(() => {
            let n, a, l, o;
            return (
              (n = []),
              (a = []),
              (l = !1),
              (o = 0),
              t
                .filter((e) => e)
                .forEach((t) => {
                  let { filled: c, ...r } = t;
                  if (c) {
                    a.push(r), n.push(a), (a = []), (o = 0);
                    return;
                  }
                  let i = e - o;
                  (o += t.span || 1) >= e
                    ? (o > e
                        ? ((l = !0), a.push({ ...r, span: i }))
                        : a.push(r),
                      n.push(a),
                      (a = []),
                      (o = 0))
                    : a.push(r);
                }),
              a.length > 0 && n.push(a),
              [
                (n = n.map((t) => {
                  let n = t.reduce((e, t) => e + (t.span || 1), 0);
                  if (n < e) {
                    let a = t[t.length - 1];
                    a.span = e - (n - (a.span || 1));
                  }
                  return t;
                })),
                l,
              ]
            );
          }, [t, e]);
          return n;
        },
        b = n(18390),
        h = (e) => {
          let {
              itemPrefixCls: t,
              component: n,
              span: c,
              className: r,
              style: i,
              labelStyle: s,
              contentStyle: d,
              bordered: u,
              label: p,
              content: f,
              colon: h,
              type: g,
              styles: v,
              classNames: y,
            } = e,
            { classNames: x, styles: E } = a.useContext(m),
            [w, S] = (0, o.MW)([x, y], [E, v], { props: e }),
            M = { ...s, ...S.label },
            N = { ...d, ...S.content };
          return u
            ? a.createElement(
                n,
                {
                  colSpan: c,
                  style: i,
                  className: (0, l.W)(r, {
                    ["".concat(t, "-item-").concat(g)]:
                      "label" === g || "content" === g,
                    [w.label]: w.label && "label" === g,
                    [w.content]: w.content && "content" === g,
                  }),
                },
                (0, b.Z)(p) && a.createElement("span", { style: M }, p),
                (0, b.Z)(f) && a.createElement("span", { style: N }, f)
              )
            : a.createElement(
                n,
                {
                  className: (0, l.W)("".concat(t, "-item"), r),
                  style: i,
                  colSpan: c,
                },
                a.createElement(
                  "div",
                  { className: "".concat(t, "-item-container") },
                  (0, b.Z)(p) &&
                    a.createElement(
                      "span",
                      {
                        style: M,
                        className: (0, l.W)(
                          "".concat(t, "-item-label"),
                          w.label,
                          { ["".concat(t, "-item-no-colon")]: !h }
                        ),
                      },
                      p
                    ),
                  (0, b.Z)(f) &&
                    a.createElement(
                      "span",
                      {
                        style: N,
                        className: (0, l.W)(
                          "".concat(t, "-item-content"),
                          w.content
                        ),
                      },
                      f
                    )
                )
              );
        };
      function g(e, t, n) {
        let { colon: l, prefixCls: o, bordered: c } = t,
          {
            component: r,
            type: i,
            showLabel: s,
            showContent: d,
            labelStyle: m,
            contentStyle: u,
            styles: p,
          } = n;
        return e.map((e, t) => {
          let {
            label: n,
            children: f,
            prefixCls: b = o,
            className: g,
            style: v,
            labelStyle: y,
            contentStyle: x,
            span: E = 1,
            key: w,
            styles: S,
            classNames: M,
          } = e;
          return "string" == typeof r
            ? a.createElement(h, {
                key: "".concat(i, "-").concat(w || t),
                className: g,
                style: v,
                classNames: M,
                styles: {
                  label: {
                    ...m,
                    ...(null == p ? void 0 : p.label),
                    ...y,
                    ...(null == S ? void 0 : S.label),
                  },
                  content: {
                    ...u,
                    ...(null == p ? void 0 : p.content),
                    ...x,
                    ...(null == S ? void 0 : S.content),
                  },
                },
                span: E,
                colon: l,
                component: r,
                itemPrefixCls: b,
                bordered: c,
                label: s ? n : null,
                content: d ? f : null,
                type: i,
              })
            : [
                a.createElement(h, {
                  key: "label-".concat(w || t),
                  className: g,
                  style: {
                    ...m,
                    ...(null == p ? void 0 : p.label),
                    ...v,
                    ...y,
                    ...(null == S ? void 0 : S.label),
                  },
                  span: 1,
                  colon: l,
                  component: r[0],
                  itemPrefixCls: b,
                  bordered: c,
                  label: n,
                  type: "label",
                }),
                a.createElement(h, {
                  key: "content-".concat(w || t),
                  className: g,
                  style: {
                    ...u,
                    ...(null == p ? void 0 : p.content),
                    ...v,
                    ...x,
                    ...(null == S ? void 0 : S.content),
                  },
                  span: 2 * E - 1,
                  component: r[1],
                  itemPrefixCls: b,
                  bordered: c,
                  content: f,
                  type: "content",
                }),
              ];
        });
      }
      var v = (e) => {
          let t = a.useContext(m),
            { prefixCls: n, vertical: l, row: o, index: c, bordered: r } = e;
          return l
            ? a.createElement(
                a.Fragment,
                null,
                a.createElement(
                  "tr",
                  { key: "label-".concat(c), className: "".concat(n, "-row") },
                  g(o, e, {
                    component: "th",
                    type: "label",
                    showLabel: !0,
                    ...t,
                  })
                ),
                a.createElement(
                  "tr",
                  {
                    key: "content-".concat(c),
                    className: "".concat(n, "-row"),
                  },
                  g(o, e, {
                    component: "td",
                    type: "content",
                    showContent: !0,
                    ...t,
                  })
                )
              )
            : a.createElement(
                "tr",
                { key: c, className: "".concat(n, "-row") },
                g(o, e, {
                  component: r ? ["th", "td"] : "td",
                  type: "item",
                  showLabel: !0,
                  showContent: !0,
                  ...t,
                })
              );
        },
        y = n(38775),
        x = n(12918),
        E = n(99320),
        w = n(19224);
      let S = (e) => {
          let { componentCls: t, labelBg: n } = e;
          return {
            ["&".concat(t, "-bordered")]: {
              ["> ".concat(t, "-view")]: {
                border: ""
                  .concat((0, y.bf)(e.lineWidth), " ")
                  .concat(e.lineType, " ")
                  .concat(e.colorSplit),
                "> table": { tableLayout: "auto" },
                ["".concat(t, "-row")]: {
                  borderBottom: ""
                    .concat((0, y.bf)(e.lineWidth), " ")
                    .concat(e.lineType, " ")
                    .concat(e.colorSplit),
                  "&:first-child": {
                    "> th:first-child, > td:first-child": {
                      borderStartStartRadius: e.borderRadiusLG,
                    },
                  },
                  "&:last-child": {
                    borderBottom: "none",
                    "> th:first-child, > td:first-child": {
                      borderEndStartRadius: e.borderRadiusLG,
                    },
                  },
                  ["> "
                    .concat(t, "-item-label, > ")
                    .concat(t, "-item-content")]: {
                    padding: ""
                      .concat((0, y.bf)(e.padding), " ")
                      .concat((0, y.bf)(e.paddingLG)),
                    borderInlineEnd: ""
                      .concat((0, y.bf)(e.lineWidth), " ")
                      .concat(e.lineType, " ")
                      .concat(e.colorSplit),
                    "&:last-child": { borderInlineEnd: "none" },
                  },
                  ["> ".concat(t, "-item-label")]: {
                    color: e.colorTextSecondary,
                    backgroundColor: n,
                    "&::after": { display: "none" },
                  },
                },
              },
              ["&".concat(t, "-middle")]: {
                ["".concat(t, "-row")]: {
                  ["> "
                    .concat(t, "-item-label, > ")
                    .concat(t, "-item-content")]: {
                    padding: ""
                      .concat((0, y.bf)(e.paddingSM), " ")
                      .concat((0, y.bf)(e.paddingLG)),
                  },
                },
              },
              ["&".concat(t, "-small")]: {
                ["".concat(t, "-row")]: {
                  ["> "
                    .concat(t, "-item-label, > ")
                    .concat(t, "-item-content")]: {
                    padding: ""
                      .concat((0, y.bf)(e.paddingXS), " ")
                      .concat((0, y.bf)(e.padding)),
                  },
                },
              },
            },
          };
        },
        M = (e) => {
          let {
            componentCls: t,
            extraColor: n,
            itemPaddingBottom: a,
            itemPaddingEnd: l,
            colonMarginRight: o,
            colonMarginLeft: c,
            titleMarginBottom: r,
          } = e;
          return {
            [t]: {
              ...(0, x.Wf)(e),
              ...S(e),
              "&-rtl": { direction: "rtl" },
              ["".concat(t, "-header")]: {
                display: "flex",
                alignItems: "center",
                marginBottom: r,
              },
              ["".concat(t, "-title")]: {
                ...x.vS,
                flex: "auto",
                color: e.titleColor,
                fontWeight: e.fontWeightStrong,
                fontSize: e.fontSizeLG,
                lineHeight: e.lineHeightLG,
              },
              ["".concat(t, "-extra")]: {
                marginInlineStart: "auto",
                color: n,
                fontSize: e.fontSize,
              },
              ["".concat(t, "-view")]: {
                width: "100%",
                borderRadius: e.borderRadiusLG,
                table: {
                  width: "100%",
                  tableLayout: "fixed",
                  borderCollapse: "collapse",
                },
              },
              ["".concat(t, "-row")]: {
                "> th, > td": { paddingBottom: a, paddingInlineEnd: l },
                "> th:last-child, > td:last-child": { paddingInlineEnd: 0 },
                "&:last-child": {
                  borderBottom: "none",
                  "> th, > td": { paddingBottom: 0 },
                },
              },
              ["".concat(t, "-item-label")]: {
                color: e.labelColor,
                fontWeight: "normal",
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                textAlign: "start",
                "&::after": {
                  content: '":"',
                  position: "relative",
                  top: -0.5,
                  marginInline: ""
                    .concat((0, y.bf)(c), " ")
                    .concat((0, y.bf)(o)),
                },
                ["&".concat(t, "-item-no-colon::after")]: { content: '""' },
              },
              ["".concat(t, "-item-no-label")]: {
                "&::after": { margin: 0, content: '""' },
              },
              ["".concat(t, "-item-content")]: {
                display: "table-cell",
                flex: 1,
                color: e.contentColor,
                fontSize: e.fontSize,
                lineHeight: e.lineHeight,
                wordBreak: "break-word",
                overflowWrap: "break-word",
              },
              ["".concat(t, "-item")]: {
                paddingBottom: 0,
                verticalAlign: "top",
                "&-container": {
                  display: "flex",
                  ["".concat(t, "-item-label")]: {
                    display: "inline-flex",
                    alignItems: "baseline",
                  },
                  ["".concat(t, "-item-content")]: {
                    display: "inline-flex",
                    alignItems: "baseline",
                    minWidth: "1em",
                  },
                },
              },
              "&-middle": {
                ["".concat(t, "-row")]: {
                  "> th, > td": { paddingBottom: e.paddingSM },
                },
              },
              "&-small": {
                ["".concat(t, "-row")]: {
                  "> th, > td": { paddingBottom: e.paddingXS },
                },
              },
            },
          };
        };
      var N = (0, E.I$)(
        "Descriptions",
        (e) => M((0, w.IX)(e, {})),
        (e) => ({
          labelBg: e.colorFillAlter,
          labelColor: e.colorTextTertiary,
          titleColor: e.colorText,
          titleMarginBottom: e.fontSizeSM * e.lineHeightSM,
          itemPaddingBottom: e.padding,
          itemPaddingEnd: e.padding,
          colonMarginRight: e.marginXS,
          colonMarginLeft: e.marginXXS / 2,
          contentColor: e.colorText,
          extraColor: e.colorText,
        })
      );
      let k = (e) => {
        let {
            prefixCls: t,
            title: n,
            extra: u,
            column: b,
            colon: h = !0,
            bordered: g,
            layout: y,
            children: x,
            className: E,
            rootClassName: w,
            style: S,
            size: M,
            labelStyle: k,
            contentStyle: C,
            styles: W,
            items: I,
            classNames: Z,
            ...z
          } = e,
          {
            getPrefixCls: B,
            direction: L,
            className: R,
            style: T,
            classNames: A,
            styles: H,
          } = (0, r.dj)("descriptions"),
          P = B("descriptions", t),
          X = (0, s.Z)(),
          D = a.useMemo(() => {
            var e;
            return "number" == typeof b
              ? b
              : null !== (e = (0, c.m9)(X, { ...d, ...b })) && void 0 !== e
              ? e
              : 3;
          }, [X, b]),
          G = (function (e, t, n) {
            let l = a.useMemo(() => t || p(n), [t, n]);
            return a.useMemo(
              () =>
                l.map((t) => {
                  let { span: n, ...a } = t;
                  return "filled" === n
                    ? { ...a, filled: !0 }
                    : {
                        ...a,
                        span: "number" == typeof n ? n : (0, c.m9)(e, n),
                      };
                }),
              [l, e]
            );
          })(X, I, x),
          j = (0, i.Z)(M),
          F = f(D, G),
          [O, $] = N(P),
          _ = { ...e, column: D, items: G, size: j },
          [q, U] = (0, o.MW)([A, Z], [H, W], { props: _ }),
          Y = a.useMemo(
            () => ({
              labelStyle: k,
              contentStyle: C,
              styles: { label: U.label, content: U.content },
              classNames: {
                label: (0, l.W)(q.label),
                content: (0, l.W)(q.content),
              },
            }),
            [k, C, U.label, U.content, q.label, q.content]
          );
        return a.createElement(
          m.Provider,
          { value: Y },
          a.createElement(
            "div",
            {
              className: (0, l.W)(
                P,
                R,
                q.root,
                {
                  ["".concat(P, "-").concat(j)]: j && "default" !== j,
                  ["".concat(P, "-bordered")]: !!g,
                  ["".concat(P, "-rtl")]: "rtl" === L,
                },
                E,
                w,
                O,
                $
              ),
              style: { ...T, ...U.root, ...S },
              ...z,
            },
            (n || u) &&
              a.createElement(
                "div",
                {
                  className: (0, l.W)("".concat(P, "-header"), q.header),
                  style: U.header,
                },
                n &&
                  a.createElement(
                    "div",
                    {
                      className: (0, l.W)("".concat(P, "-title"), q.title),
                      style: U.title,
                    },
                    n
                  ),
                u &&
                  a.createElement(
                    "div",
                    {
                      className: (0, l.W)("".concat(P, "-extra"), q.extra),
                      style: U.extra,
                    },
                    u
                  )
              ),
            a.createElement(
              "div",
              { className: "".concat(P, "-view") },
              a.createElement(
                "table",
                null,
                a.createElement(
                  "tbody",
                  null,
                  F.map((e, t) =>
                    a.createElement(v, {
                      key: t,
                      index: t,
                      colon: h,
                      prefixCls: P,
                      vertical: "vertical" === y,
                      bordered: g,
                      row: e,
                    })
                  )
                )
              )
            )
          )
        );
      };
      k.Item = (e) => e.children;
      var C = k;
    },
    47451: function (e, t, n) {
      var a = n(10295);
      t.Z = a.Z;
    },
    45235: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return w;
        },
      });
      var a = n(2265),
        l = n(73627),
        o = n(19722),
        c = n(87011),
        r = n(61994),
        i = n(80052),
        s = n(71744),
        d = n(50337),
        m = (e) => {
          let t;
          let {
            value: n,
            formatter: l,
            precision: o,
            decimalSeparator: c,
            groupSeparator: r = "",
            prefixCls: i,
          } = e;
          if ("function" == typeof l) t = l(n);
          else {
            let e = String(n),
              l = e.match(/^(-?)(\d*)(\.(\d+))?$/);
            if (l && "-" !== e) {
              let e = l[1],
                n = l[2] || "0",
                s = l[4] || "";
              (n = n.replace(/\B(?=(\d{3})+(?!\d))/g, r)),
                "number" == typeof o &&
                  (s = s.padEnd(o, "0").slice(0, o > 0 ? o : 0)),
                s && (s = "".concat(c).concat(s)),
                (t = [
                  a.createElement(
                    "span",
                    {
                      key: "int",
                      className: "".concat(i, "-content-value-int"),
                    },
                    e,
                    n
                  ),
                  s &&
                    a.createElement(
                      "span",
                      {
                        key: "decimal",
                        className: "".concat(i, "-content-value-decimal"),
                      },
                      s
                    ),
                ]);
            } else t = e;
          }
          return a.createElement(
            "span",
            { className: "".concat(i, "-content-value") },
            t
          );
        },
        u = n(12918),
        p = n(99320),
        f = n(19224);
      let b = (e) => {
        let {
          componentCls: t,
          marginXXS: n,
          padding: a,
          colorTextDescription: l,
          titleFontSize: o,
          colorTextHeading: c,
          contentFontSize: r,
          fontFamily: i,
        } = e;
        return {
          [t]: {
            ...(0, u.Wf)(e),
            ["".concat(t, "-header")]: {
              paddingBottom: n,
              ["".concat(t, "-title")]: { color: l, fontSize: o },
            },
            ["".concat(t, "-skeleton")]: { paddingTop: a },
            ["".concat(t, "-content")]: {
              color: c,
              fontSize: r,
              fontFamily: i,
              ["".concat(t, "-content-value")]: {
                display: "inline-block",
                direction: "ltr",
              },
              ["".concat(t, "-content-prefix, ").concat(t, "-content-suffix")]:
                { display: "inline-block" },
              ["".concat(t, "-content-prefix")]: { marginInlineEnd: n },
              ["".concat(t, "-content-suffix")]: { marginInlineStart: n },
            },
          },
        };
      };
      var h = (0, p.I$)(
        "Statistic",
        (e) => b((0, f.IX)(e, {})),
        (e) => {
          let { fontSizeHeading3: t, fontSize: n } = e;
          return { titleFontSize: n, contentFontSize: t };
        }
      );
      let g = a.forwardRef((e, t) => {
          let {
              prefixCls: n,
              className: l,
              rootClassName: o,
              style: u,
              valueStyle: p,
              value: f = 0,
              title: b,
              valueRender: g,
              prefix: v,
              suffix: y,
              loading: x = !1,
              formatter: E,
              precision: w,
              decimalSeparator: S = ".",
              groupSeparator: M = ",",
              onMouseEnter: N,
              onMouseLeave: k,
              styles: C,
              classNames: W,
              ...I
            } = e,
            {
              getPrefixCls: Z,
              direction: z,
              className: B,
              style: L,
              classNames: R,
              styles: T,
            } = (0, s.dj)("statistic"),
            A = Z("statistic", n),
            [H, P] = h(A),
            X = {
              ...e,
              decimalSeparator: S,
              groupSeparator: M,
              loading: x,
              value: f,
            },
            [D, G] = (0, i.MW)([R, W], [T, C], { props: X }),
            j = a.createElement(m, {
              decimalSeparator: S,
              groupSeparator: M,
              prefixCls: A,
              formatter: E,
              precision: w,
              value: f,
            }),
            F = (0, r.W)(
              A,
              { ["".concat(A, "-rtl")]: "rtl" === z },
              B,
              l,
              o,
              D.root,
              H,
              P
            ),
            O = (0, r.W)("".concat(A, "-header"), D.header),
            $ = (0, r.W)("".concat(A, "-title"), D.title),
            _ = (0, r.W)("".concat(A, "-content"), D.content),
            q = (0, r.W)("".concat(A, "-content-prefix"), D.prefix),
            U = (0, r.W)("".concat(A, "-content-suffix"), D.suffix),
            Y = a.useRef(null);
          a.useImperativeHandle(t, () => ({ nativeElement: Y.current }));
          let J = (0, c.Z)(I, { aria: !0, data: !0 });
          return a.createElement(
            "div",
            {
              ...J,
              className: F,
              style: { ...G.root, ...L, ...u },
              ref: Y,
              onMouseEnter: N,
              onMouseLeave: k,
            },
            b &&
              a.createElement(
                "div",
                { className: O, style: G.header },
                a.createElement("div", { className: $, style: G.title }, b)
              ),
            a.createElement(
              d.Z,
              {
                paragraph: !1,
                loading: x,
                className: "".concat(A, "-skeleton"),
                active: !0,
              },
              a.createElement(
                "div",
                { className: _, style: { ...p, ...G.content } },
                v &&
                  a.createElement("span", { className: q, style: G.prefix }, v),
                g ? g(j) : j,
                y &&
                  a.createElement("span", { className: U, style: G.suffix }, y)
              )
            )
          );
        }),
        v = [
          ["Y", 31536e6],
          ["M", 2592e6],
          ["D", 864e5],
          ["H", 36e5],
          ["m", 6e4],
          ["s", 1e3],
          ["S", 1],
        ],
        y = 1e3 / 60;
      var x = (e) => {
          let {
              value: t,
              format: n = "HH:mm:ss",
              onChange: c,
              onFinish: r,
              type: i,
              ...s
            } = e,
            d = "countdown" === i,
            [m, u] = a.useState(null),
            p = (0, l.zX)(() => {
              let e = Date.now(),
                n = new Date(t).getTime();
              return (
                u({}),
                null == c || c(d ? n - e : e - n),
                !d || !(n < e) || (null == r || r(), !1)
              );
            });
          return (
            a.useEffect(() => {
              let e;
              let t = () => {
                window.clearInterval(e);
              };
              return (
                (e = window.setInterval(() => {
                  p() || window.clearInterval(e);
                }, y)),
                () => {
                  t();
                }
              );
            }, [t, d]),
            a.useEffect(() => {
              u({});
            }, []),
            a.createElement(g, {
              ...s,
              value: t,
              valueRender: (e) => (0, o.Tm)(e, { title: void 0 }),
              formatter: (e, t) =>
                m
                  ? (function (e, t, n) {
                      let { format: a = "" } = t,
                        l = new Date(e).getTime(),
                        o = Date.now();
                      return (function (e, t) {
                        let n = e,
                          a = /\[[^\]]*]/g,
                          l = (t.match(a) || []).map((e) => e.slice(1, -1)),
                          o = t.replace(a, "[]"),
                          c = v.reduce((e, t) => {
                            let [a, l] = t;
                            if (e.includes(a)) {
                              let t = Math.floor(n / l);
                              return (
                                (n -= t * l),
                                e.replace(
                                  RegExp("".concat(a, "+"), "g"),
                                  (e) => {
                                    let n = e.length;
                                    return t.toString().padStart(n, "0");
                                  }
                                )
                              );
                            }
                            return e;
                          }, o),
                          r = 0;
                        return c.replace(a, () => {
                          let e = l[r];
                          return (r += 1), e;
                        });
                      })(n ? Math.max(l - o, 0) : Math.max(o - l, 0), a);
                    })(e, { ...t, format: n }, d)
                  : "-",
            })
          );
        },
        E = a.memo((e) => a.createElement(x, { ...e, type: "countdown" }));
      (g.Timer = x), (g.Countdown = E);
      var w = g;
    },
    81400: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return S;
        },
      });
      var a = n(19103),
        l = n(2265);
      n(31311), n(90891), n(90062);
      var o = n(47462);
      let c = {
        subtree: !0,
        childList: !0,
        attributeFilter: ["style", "class"],
      };
      var r = (e, t, n = c) => {
          l.useEffect(() => {
            let a;
            if (!(0, o.Z)() || !e) return;
            let l = Array.isArray(e) ? e : [e];
            return (
              "MutationObserver" in window &&
                ((a = new MutationObserver(t)),
                l.forEach((e) => {
                  a.observe(e, n);
                })),
              () => {
                a?.takeRecords(), a?.disconnect();
              }
            );
          }, [n, e]);
        },
        i = n(73627),
        s = n(61994),
        d = n(30341),
        m = n(71744),
        u = n(84560),
        p = n(19248);
      let f = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1,
            a = document.createElement("canvas"),
            l = a.getContext("2d"),
            o = e * n,
            c = t * n;
          return (
            a.setAttribute("width", "".concat(o, "px")),
            a.setAttribute("height", "".concat(c, "px")),
            l.save(),
            [l, a, o, c]
          );
        },
        b = (e, t, n) => [
          e * Math.cos(n) - t * Math.sin(n),
          e * Math.sin(n) + t * Math.cos(n),
        ];
      var h = () =>
          l.useCallback((e, t, n, a, l, o, c, r) => {
            let [i, s, m, u] = f(a, l, n);
            if (e instanceof HTMLImageElement) i.drawImage(e, 0, 0, m, u);
            else {
              let {
                  color: t,
                  fontSize: a,
                  fontStyle: c,
                  fontWeight: r,
                  fontFamily: s,
                  textAlign: u,
                } = o,
                p = Number(a) * n;
              (i.font = ""
                .concat(c, " normal ")
                .concat(r, " ")
                .concat(p, "px/")
                .concat(l, "px ")
                .concat(s)),
                (i.fillStyle = t),
                (i.textAlign = u),
                (i.textBaseline = "top");
              let f = (0, d.Z)(e);
              null == f ||
                f.forEach((e, t) => {
                  i.fillText(null != e ? e : "", m / 2, t * (p + 3 * n));
                });
            }
            let p = (Math.PI / 180) * Number(t),
              h = Math.max(a, l),
              [g, v, y] = f(h, h, n);
            g.translate(y / 2, y / 2),
              g.rotate(p),
              m > 0 && u > 0 && g.drawImage(s, -m / 2, -u / 2);
            let x = 0,
              E = 0,
              w = 0,
              S = 0,
              M = m / 2,
              N = u / 2;
            [
              [0 - M, 0 - N],
              [0 + M, 0 - N],
              [0 + M, 0 + N],
              [0 - M, 0 + N],
            ].forEach((e) => {
              let [t, n] = e,
                [a, l] = b(t, n, p);
              (x = Math.min(x, a)),
                (E = Math.max(E, a)),
                (w = Math.min(w, l)),
                (S = Math.max(S, l));
            });
            let k = x + y / 2,
              C = w + y / 2,
              W = E - x,
              I = S - w,
              Z = c * n,
              z = r * n,
              B = (W + Z) * 2,
              L = I + z,
              [R, T] = f(B, L),
              A = function () {
                let e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0;
                R.drawImage(v, k, C, W, I, e, t, W, I);
              };
            return (
              A(),
              A(W + Z, -I / 2 - z / 2),
              A(W + Z, +I / 2 + z / 2),
              [T.toDataURL(), B / n, L / n]
            );
          }, []),
        g = n(72014),
        v = n(13653);
      let y = (e, t) => {
          let n = !1;
          return (
            e.removedNodes.length &&
              (n = Array.from(e.removedNodes).some((e) => t(e))),
            "attributes" === e.type && t(e.target) && (n = !0),
            n
          );
        },
        x = { visibility: "visible !important" };
      function E(e, t) {
        return e.size === t.size ? e : t;
      }
      let w = { position: "relative", overflow: "hidden" };
      var S = (e) => {
        var t, n;
        let {
            zIndex: o = 9,
            rotate: c = -22,
            width: f,
            height: b,
            image: S,
            content: M,
            font: N = {},
            style: k,
            className: C,
            rootClassName: W,
            gap: I = [100, 100],
            offset: Z,
            children: z,
            inherit: B = !0,
            onRemove: L,
          } = e,
          { className: R, style: T } = (0, m.dj)("watermark"),
          A = { ...w, ...T, ...k },
          [, H] = (0, u.ZP)(),
          {
            color: P = H.colorFill,
            fontSize: X = H.fontSizeLG,
            fontWeight: D = "normal",
            fontStyle: G = "normal",
            fontFamily: j = "sans-serif",
            textAlign: F = "center",
          } = N,
          [O = 100, $ = 100] = I,
          _ = O / 2,
          q = $ / 2,
          U = null !== (t = null == Z ? void 0 : Z[0]) && void 0 !== t ? t : _,
          Y = null !== (n = null == Z ? void 0 : Z[1]) && void 0 !== n ? n : q,
          J = l.useMemo(() => {
            let e = {
                zIndex: o,
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
                backgroundRepeat: "repeat",
              },
              t = U - _,
              n = Y - q;
            return (
              t > 0 &&
                ((e.left = "".concat(t, "px")),
                (e.width = "calc(100% - ".concat(t, "px)")),
                (t = 0)),
              n > 0 &&
                ((e.top = "".concat(n, "px")),
                (e.height = "calc(100% - ".concat(n, "px)")),
                (n = 0)),
              (e.backgroundPosition = "".concat(t, "px ").concat(n, "px")),
              e
            );
          }, [o, U, _, Y, q]),
          [K, Q] = l.useState(),
          [V, ee] = l.useState(() => new Set()),
          et = l.useMemo(
            () => [].concat(K ? [K] : [], (0, a.Z)(Array.from(V))),
            [K, V]
          ),
          en = (e) => {
            let t = 120,
              n = 64;
            if (!S && e.measureText) {
              e.font = "".concat(Number(X), "px ").concat(j);
              let l = (0, d.Z)(M),
                o = l.map((t) => {
                  let n = e.measureText(t);
                  return [
                    n.width,
                    n.fontBoundingBoxAscent + n.fontBoundingBoxDescent,
                  ];
                });
              (t = Math.ceil(
                Math.max.apply(Math, (0, a.Z)(o.map((e) => e[0])))
              )),
                (n =
                  Math.ceil(
                    Math.max.apply(Math, (0, a.Z)(o.map((e) => e[1])))
                  ) *
                    l.length +
                  (l.length - 1) * 3);
            }
            return [null != f ? f : t, null != b ? b : n];
          },
          ea = h(),
          el = (function () {
            let e = l.useRef([null, null]);
            return (t, n) => {
              let a = t.map((e) =>
                e instanceof HTMLElement || Number.isNaN(e) ? "" : e
              );
              return (
                (0, v.Z)(e.current[0], a) || (e.current = [a, n()]),
                e.current[1]
              );
            };
          })(),
          [eo, ec] = l.useState(null),
          er = (function (e) {
            let t = l.useRef(!1),
              n = l.useRef(null),
              a = (0, i.zX)(e);
            return () => {
              t.current ||
                ((t.current = !0),
                a(),
                (n.current = (0, g.Z)(() => {
                  t.current = !1;
                })));
            };
          })(() => {
            let e = document.createElement("canvas").getContext("2d");
            if (e) {
              let t = window.devicePixelRatio || 1,
                [n, a] = en(e),
                l = (e) => {
                  let l = [
                      e || "",
                      c,
                      t,
                      n,
                      a,
                      {
                        color: P,
                        fontSize: X,
                        fontStyle: G,
                        fontWeight: D,
                        fontFamily: j,
                        textAlign: F,
                      },
                      O,
                      $,
                    ],
                    [o, r] = el(l, () => ea.apply(void 0, l));
                  ec([o, r]);
                };
              if (S) {
                let e = new Image();
                (e.onload = () => {
                  l(e);
                }),
                  (e.onerror = () => {
                    l(M);
                  }),
                  (e.crossOrigin = "anonymous"),
                  (e.referrerPolicy = "no-referrer"),
                  (e.src = S);
              } else l(M);
            }
          }),
          [ei, es, ed] = (function (e, t) {
            let n = l.useRef(new Map()),
              a = (0, i.zX)(t);
            return [
              (l, o, c) => {
                if (c) {
                  var r;
                  let i = n.current.get(c);
                  if (!i) {
                    let e = document.createElement("div");
                    n.current.set(c, e);
                  }
                  let s = n.current.get(c);
                  s.setAttribute(
                    "style",
                    Object.keys(
                      (r = {
                        ...e,
                        backgroundImage: "url('".concat(l, "')"),
                        backgroundSize: "".concat(Math.floor(o), "px"),
                        ...x,
                      })
                    )
                      .map((e) =>
                        ""
                          .concat(
                            e.replace(/([A-Z])/g, "-$1").toLowerCase(),
                            ": "
                          )
                          .concat(r[e], ";")
                      )
                      .join(" ")
                  ),
                    s.removeAttribute("class"),
                    s.removeAttribute("hidden"),
                    s.parentElement !== c && (i && t && a(), c.append(s));
                }
                return n.current.get(c);
              },
              (e) => {
                let t = n.current.get(e);
                t && e && e.removeChild(t), n.current.delete(e);
              },
              (e) => Array.from(n.current.values()).includes(e),
            ];
          })(J, L);
        (0, l.useEffect)(() => {
          eo &&
            et.forEach((e) => {
              ei(eo[0], eo[1], e);
            });
        }, [eo, et]),
          r(
            et,
            (0, i.zX)((e) => {
              e.forEach((e) => {
                if (y(e, ed)) er();
                else if (e.target === K && "style" === e.attributeName) {
                  let e = Object.keys(w);
                  for (let t = 0; t < e.length; t += 1) {
                    let n = e[t],
                      a = A[n],
                      l = K.style[n];
                    a && a !== l && (K.style[n] = a);
                  }
                }
              });
            })
          ),
          (0, l.useEffect)(er, [
            c,
            o,
            f,
            b,
            S,
            M,
            P,
            X,
            D,
            G,
            j,
            F,
            O,
            $,
            U,
            Y,
          ]);
        let em = l.useMemo(
            () => ({
              add: (e) => {
                ee((t) => {
                  let n = new Set(t);
                  return n.add(e), E(t, n);
                });
              },
              remove: (e) => {
                es(e),
                  ee((t) => {
                    let n = new Set(t);
                    return n.delete(e), E(t, n);
                  });
              },
            }),
            []
          ),
          eu = B ? l.createElement(p.Z.Provider, { value: em }, z) : z;
        return l.createElement(
          "div",
          { ref: Q, className: (0, s.W)(C, R, W), style: A },
          eu
        );
      };
    },
  },
]);
