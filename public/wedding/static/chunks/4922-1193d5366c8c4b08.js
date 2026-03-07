"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4922],
  {
    391: function (o, r, n) {
      var t = n(2265),
        e = n(39109),
        a = n(77685),
        c = n(18390);
      r.Z = (o) => {
        let { space: r, form: n, children: i } = o;
        if (!(0, c.Z)(i)) return null;
        let d = i;
        return (
          n && (d = t.createElement(e.Ux, { override: !0, status: !0 }, d)),
          r && (d = t.createElement(a.BR, null, d)),
          d
        );
      };
    },
    12757: function (o, r, n) {
      n.d(r, {
        F: function () {
          return a;
        },
        Z: function () {
          return e;
        },
      });
      var t = n(61994);
      let e = (o, r, n) =>
          (0, t.W)({
            ["".concat(o, "-status-success")]: "success" === r,
            ["".concat(o, "-status-warning")]: "warning" === r,
            ["".concat(o, "-status-error")]: "error" === r,
            ["".concat(o, "-status-validating")]: "validating" === r,
            ["".concat(o, "-has-feedback")]: n,
          }),
        a = (o, r) => r || o;
    },
    56250: function (o, r, n) {
      var t = n(2265),
        e = n(71744),
        a = n(39109);
      r.Z = (o, r, n) => {
        let c;
        let { variant: i, [o]: d } = t.useContext(e.E_),
          l = t.useContext(a.pg),
          s = null == d ? void 0 : d.variant;
        if (void 0 !== r) c = r;
        else if (!1 === n) c = "borderless";
        else {
          var u, p;
          c =
            null !==
              (p = null !== (u = null != l ? l : s) && void 0 !== u ? u : i) &&
            void 0 !== p
              ? p
              : "outlined";
        }
        let b = e.tr.includes(c);
        return [c, b];
      };
    },
    31282: function (o, r, n) {
      n.d(r, {
        TI: function () {
          return S;
        },
        ik: function () {
          return b;
        },
        nz: function () {
          return s;
        },
        x0: function () {
          return p;
        },
      });
      var t = n(38775),
        e = n(12918),
        a = n(17691),
        c = n(99320),
        i = n(19224),
        d = n(37433),
        l = n(65265);
      let s = (o) => ({
          "&::-moz-placeholder": { opacity: 1 },
          "&::placeholder": { color: o, userSelect: "none" },
          "&:placeholder-shown": { textOverflow: "ellipsis" },
        }),
        u = (o) => {
          let {
            paddingBlockLG: r,
            lineHeightLG: n,
            borderRadiusLG: e,
            paddingInlineLG: a,
          } = o;
          return {
            padding: "".concat((0, t.bf)(r), " ").concat((0, t.bf)(a)),
            fontSize: o.inputFontSizeLG,
            lineHeight: n,
            borderRadius: e,
          };
        },
        p = (o) => ({
          padding: ""
            .concat((0, t.bf)(o.paddingBlockSM), " ")
            .concat((0, t.bf)(o.paddingInlineSM)),
          fontSize: o.inputFontSizeSM,
          borderRadius: o.borderRadiusSM,
        }),
        b = function (o) {
          let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return {
            position: "relative",
            display: "inline-block",
            width: "100%",
            minWidth: 0,
            padding: ""
              .concat((0, t.bf)(o.paddingBlock), " ")
              .concat((0, t.bf)(o.paddingInline)),
            color: o.colorText,
            fontSize: o.inputFontSize,
            lineHeight: o.lineHeight,
            borderRadius: o.borderRadius,
            transition: "all ".concat(o.motionDurationMid),
            ...s(o.colorTextPlaceholder),
            "&-lg": { ...u(o), ...r.largeStyle },
            "&-sm": { ...p(o), ...r.smallStyle },
            "&-rtl, &-textarea-rtl": { direction: "rtl" },
          };
        },
        g = (o) => {
          let { componentCls: r, antCls: n } = o;
          return {
            position: "relative",
            display: "table",
            width: "100%",
            borderCollapse: "separate",
            borderSpacing: 0,
            "&[class*='col-']": {
              paddingInlineEnd: o.paddingXS,
              "&:last-child": { paddingInlineEnd: 0 },
            },
            ["&-lg ".concat(r, ", &-lg > ").concat(r, "-group-addon")]: {
              ...u(o),
            },
            ["&-sm ".concat(r, ", &-sm > ").concat(r, "-group-addon")]: {
              ...p(o),
            },
            ["&-lg ".concat(n, "-select-single")]: {
              height: o.controlHeightLG,
            },
            ["&-sm ".concat(n, "-select-single")]: {
              height: o.controlHeightSM,
            },
            ["> ".concat(r)]: {
              display: "table-cell",
              "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
            },
            ["".concat(r, "-group")]: {
              "&-addon, &-wrap": {
                display: "table-cell",
                width: 1,
                whiteSpace: "nowrap",
                verticalAlign: "middle",
                "&:not(:first-child):not(:last-child)": { borderRadius: 0 },
              },
              "&-wrap > *": { display: "block !important" },
              "&-addon": {
                position: "relative",
                padding: "0 ".concat((0, t.bf)(o.paddingInline)),
                color: o.colorText,
                fontWeight: "normal",
                fontSize: o.inputFontSize,
                textAlign: "center",
                borderRadius: o.borderRadius,
                transition: "all ".concat(o.motionDurationSlow),
                lineHeight: 1,
                ["".concat(n, "-select")]: {
                  margin: ""
                    .concat(
                      (0, t.bf)(o.calc(o.paddingBlock).add(1).mul(-1).equal()),
                      " "
                    )
                    .concat((0, t.bf)(o.calc(o.paddingInline).mul(-1).equal())),
                  ["&"
                    .concat(n, "-select-single:not(")
                    .concat(n, "-select-customize-input):not(")
                    .concat(n, "-pagination-size-changer)")]: {
                    backgroundColor: "inherit",
                    border: ""
                      .concat((0, t.bf)(o.lineWidth), " ")
                      .concat(o.lineType, " transparent"),
                    boxShadow: "none",
                  },
                },
                ["".concat(n, "-cascader-picker")]: {
                  margin: "-9px ".concat(
                    (0, t.bf)(o.calc(o.paddingInline).mul(-1).equal())
                  ),
                  backgroundColor: "transparent",
                  ["".concat(n, "-cascader-input")]: {
                    textAlign: "start",
                    border: 0,
                    boxShadow: "none",
                  },
                },
              },
            },
            [r]: {
              width: "100%",
              marginBottom: 0,
              textAlign: "inherit",
              "&:focus": { zIndex: 1, borderInlineEndWidth: 1 },
              "&:hover": { zIndex: 1, borderInlineEndWidth: 1 },
            },
            ["> "
              .concat(r, ":first-child, ")
              .concat(r, "-group-addon:first-child")]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              ["".concat(n, "-select")]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            ["> ".concat(r, "-affix-wrapper")]: {
              ["&:not(:first-child) ".concat(r)]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
              ["&:not(:last-child) ".concat(r)]: {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
            },
            ["> "
              .concat(r, ":last-child, ")
              .concat(r, "-group-addon:last-child")]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0,
              ["".concat(n, "-select")]: {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
            ["".concat(r, "-affix-wrapper")]: {
              "&:not(:last-child)": {
                borderStartEndRadius: 0,
                borderEndEndRadius: 0,
              },
              "&:not(:first-child)": {
                borderStartStartRadius: 0,
                borderEndStartRadius: 0,
              },
            },
            ["&".concat(r, "-group-compact")]: {
              display: "block",
              ...(0, e.dF)(),
              [""
                .concat(r, "-group-addon, ")
                .concat(r, "-group-wrap, > ")
                .concat(r)]: {
                "&:not(:first-child):not(:last-child)": {
                  borderInlineEndWidth: o.lineWidth,
                  "&:hover, &:focus": { zIndex: 1 },
                },
              },
              "& > *": {
                display: "inline-flex",
                float: "none",
                verticalAlign: "top",
                borderRadius: 0,
              },
              ["\n        & > "
                .concat(r, "-affix-wrapper,\n        & > ")
                .concat(r, "-number-affix-wrapper,\n        & > ")
                .concat(n, "-picker-range\n      ")]: {
                display: "inline-flex",
              },
              "& > *:not(:last-child)": {
                marginInlineEnd: o.calc(o.lineWidth).mul(-1).equal(),
                borderInlineEndWidth: o.lineWidth,
              },
              [r]: { float: "none" },
              ["& > "
                .concat(n, "-select,\n      & > ")
                .concat(n, "-select-auto-complete ")
                .concat(r, ",\n      & > ")
                .concat(n, "-cascader-picker ")
                .concat(r, ",\n      & > ")
                .concat(r, "-group-wrapper ")
                .concat(r)]: {
                borderInlineEndWidth: o.lineWidth,
                borderRadius: 0,
                "&:hover, &:focus": { zIndex: 1 },
              },
              ["& > ".concat(n, "-select-focused")]: { zIndex: 1 },
              ["& > ".concat(n, "-select > ").concat(n, "-select-arrow")]: {
                zIndex: 1,
              },
              ["& > *:first-child,\n      & > "
                .concat(n, "-select:first-child,\n      & > ")
                .concat(n, "-select-auto-complete:first-child ")
                .concat(r, ",\n      & > ")
                .concat(n, "-cascader-picker:first-child ")
                .concat(r)]: {
                borderStartStartRadius: o.borderRadius,
                borderEndStartRadius: o.borderRadius,
              },
              ["& > *:last-child,\n      & > "
                .concat(n, "-select:last-child,\n      & > ")
                .concat(n, "-cascader-picker:last-child ")
                .concat(r, ",\n      & > ")
                .concat(n, "-cascader-picker-focused:last-child ")
                .concat(r)]: {
                borderInlineEndWidth: o.lineWidth,
                borderStartEndRadius: o.borderRadius,
                borderEndEndRadius: o.borderRadius,
              },
              ["& > ".concat(n, "-select-auto-complete ").concat(r)]: {
                verticalAlign: "top",
              },
              ["".concat(r, "-group-wrapper + ").concat(r, "-group-wrapper")]: {
                marginInlineStart: o.calc(o.lineWidth).mul(-1).equal(),
                ["".concat(r, "-affix-wrapper")]: {},
              },
            },
          };
        },
        h = (o) => {
          let {
              componentCls: r,
              controlHeightSM: n,
              lineWidth: t,
              calc: a,
            } = o,
            c = a(n).sub(a(t).mul(2)).sub(16).div(2).equal();
          return {
            [r]: {
              ...(0, e.Wf)(o),
              ...b(o),
              ...(0, l.qG)(o),
              ...(0, l.H8)(o),
              ...(0, l.Mu)(o),
              ...(0, l.vc)(o),
              '&[type="color"]': {
                height: o.controlHeight,
                ["&".concat(r, "-lg")]: { height: o.controlHeightLG },
                ["&".concat(r, "-sm")]: {
                  height: n,
                  paddingTop: c,
                  paddingBottom: c,
                },
              },
              '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration':
                { appearance: "none" },
            },
          };
        },
        f = (o) => {
          let { componentCls: r } = o;
          return {
            ["".concat(r, "-clear-icon")]: {
              margin: 0,
              padding: 0,
              lineHeight: 0,
              color: o.colorTextQuaternary,
              fontSize: o.fontSizeIcon,
              verticalAlign: -1,
              cursor: "pointer",
              transition: "color ".concat(o.motionDurationSlow),
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              "&:hover": { color: o.colorIcon },
              "&:active": { color: o.colorText },
              "&-hidden": { visibility: "hidden" },
              "&-has-suffix": {
                margin: "0 ".concat((0, t.bf)(o.inputAffixPadding)),
              },
            },
          };
        },
        C = (o) => {
          let {
              componentCls: r,
              inputAffixPadding: n,
              colorTextDescription: t,
              motionDurationSlow: e,
              colorIcon: a,
              colorIconHover: c,
              iconCls: i,
            } = o,
            d = "".concat(r, "-affix-wrapper"),
            l = "".concat(r, "-affix-wrapper-disabled");
          return {
            [d]: {
              ...b(o),
              display: "inline-flex",
              "&-focused, &:focus": { zIndex: 1 },
              ["> input".concat(r)]: { padding: 0 },
              ["> input".concat(r, ", > textarea").concat(r)]: {
                fontSize: "inherit",
                border: "none",
                borderRadius: 0,
                outline: "none",
                background: "transparent",
                color: "inherit",
                "&::-ms-reveal": { display: "none" },
                "&:focus": { boxShadow: "none !important" },
              },
              "&::before": {
                display: "inline-block",
                width: 0,
                visibility: "hidden",
                content: '"\\a0"',
              },
              [r]: {
                "&-prefix, &-suffix": {
                  display: "flex",
                  flex: "none",
                  alignItems: "center",
                  "> *:not(:last-child)": { marginInlineEnd: o.paddingXS },
                },
                "&-show-count-suffix": { color: t, direction: "ltr" },
                "&-show-count-has-suffix": { marginInlineEnd: o.paddingXXS },
                "&-prefix": { marginInlineEnd: n },
                "&-suffix": { marginInlineStart: n },
              },
              ...f(o),
              ["".concat(i).concat(r, "-password-icon")]: {
                color: a,
                cursor: "pointer",
                transition: "all ".concat(e),
                "&:hover": { color: c },
              },
            },
            ["".concat(r, "-underlined")]: { borderRadius: 0 },
            [l]: {
              ["".concat(i).concat(r, "-password-icon")]: {
                color: a,
                cursor: "not-allowed",
                "&:hover": { color: a },
              },
            },
          };
        },
        v = (o) => {
          let { componentCls: r, borderRadiusLG: n, borderRadiusSM: t } = o;
          return {
            ["".concat(r, "-group")]: {
              ...(0, e.Wf)(o),
              ...g(o),
              "&-rtl": { direction: "rtl" },
              "&-wrapper": {
                display: "inline-block",
                width: "100%",
                textAlign: "start",
                verticalAlign: "top",
                "&-rtl": { direction: "rtl" },
                "&-lg": {
                  ["".concat(r, "-group-addon")]: {
                    borderRadius: n,
                    fontSize: o.inputFontSizeLG,
                  },
                },
                "&-sm": { ["".concat(r, "-group-addon")]: { borderRadius: t } },
                ...(0, l.ir)(o),
                ...(0, l.S5)(o),
                ["&:not("
                  .concat(r, "-compact-first-item):not(")
                  .concat(r, "-compact-last-item)")
                  .concat(r, "-compact-item")]: {
                  ["".concat(r, ", ").concat(r, "-group-addon")]: {
                    borderRadius: 0,
                  },
                },
                ["&:not("
                  .concat(r, "-compact-last-item)")
                  .concat(r, "-compact-first-item")]: {
                  ["".concat(r, ", ").concat(r, "-group-addon")]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                  },
                },
                ["&:not("
                  .concat(r, "-compact-first-item)")
                  .concat(r, "-compact-last-item")]: {
                  ["".concat(r, ", ").concat(r, "-group-addon")]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0,
                  },
                },
                ["&:not("
                  .concat(r, "-compact-last-item)")
                  .concat(r, "-compact-item")]: {
                  ["".concat(r, "-affix-wrapper")]: {
                    borderStartEndRadius: 0,
                    borderEndEndRadius: 0,
                  },
                },
                ["&:not("
                  .concat(r, "-compact-first-item)")
                  .concat(r, "-compact-item")]: {
                  ["".concat(r, "-affix-wrapper")]: {
                    borderStartStartRadius: 0,
                    borderEndStartRadius: 0,
                  },
                },
              },
            },
          };
        },
        m = (o) => {
          let { componentCls: r } = o;
          return {
            ["".concat(r, "-out-of-range")]: {
              ["&, & input, & textarea, "
                .concat(r, "-show-count-suffix, ")
                .concat(r, "-data-count")]: { color: o.colorError },
            },
          };
        },
        S = (0, c.I$)(
          ["Input", "Shared"],
          (o) => {
            let r = (0, i.IX)(o, (0, d.e)(o));
            return [h(r), C(r)];
          },
          d.T,
          { resetFont: !1 }
        );
      r.ZP = (0, c.I$)(
        ["Input", "Component"],
        (o) => {
          let r = (0, i.IX)(o, (0, d.e)(o));
          return [
            v(r),
            m(r),
            (0, a.c)(r, {
              focus: !0,
              focusElCls: "".concat(r.componentCls, "-affix-wrapper-focused"),
            }),
          ];
        },
        d.T,
        { resetFont: !1 }
      );
    },
    37433: function (o, r, n) {
      n.d(r, {
        T: function () {
          return a;
        },
        e: function () {
          return e;
        },
      });
      var t = n(19224);
      function e(o) {
        return (0, t.IX)(o, { inputAffixPadding: o.paddingXXS });
      }
      let a = (o) => {
        let {
            controlHeight: r,
            fontSize: n,
            lineHeight: t,
            lineWidth: e,
            controlHeightSM: a,
            controlHeightLG: c,
            fontSizeLG: i,
            lineHeightLG: d,
            paddingSM: l,
            controlPaddingHorizontalSM: s,
            controlPaddingHorizontal: u,
            colorFillAlter: p,
            colorPrimaryHover: b,
            colorPrimary: g,
            controlOutlineWidth: h,
            controlOutline: f,
            colorErrorOutline: C,
            colorWarningOutline: v,
            colorBgContainer: m,
            inputFontSize: S,
            inputFontSizeLG: x,
            inputFontSizeSM: B,
          } = o,
          w = S || n,
          E = B || w,
          R = x || i;
        return {
          paddingBlock: Math.max(
            Math.round(((r - w * t) / 2) * 10) / 10 - e,
            0
          ),
          paddingBlockSM: Math.max(
            Math.round(((a - E * t) / 2) * 10) / 10 - e,
            0
          ),
          paddingBlockLG: Math.max(
            Math.ceil(((c - R * d) / 2) * 10) / 10 - e,
            0
          ),
          paddingInline: l - e,
          paddingInlineSM: s - e,
          paddingInlineLG: u - e,
          addonBg: p,
          activeBorderColor: g,
          hoverBorderColor: b,
          activeShadow: "0 0 0 ".concat(h, "px ").concat(f),
          errorActiveShadow: "0 0 0 ".concat(h, "px ").concat(C),
          warningActiveShadow: "0 0 0 ".concat(h, "px ").concat(v),
          hoverBg: m,
          activeBg: m,
          inputFontSize: w,
          inputFontSizeLG: R,
          inputFontSizeSM: E,
        };
      };
    },
    65265: function (o, r, n) {
      n.d(r, {
        $U: function () {
          return i;
        },
        H8: function () {
          return h;
        },
        Mu: function () {
          return p;
        },
        S5: function () {
          return C;
        },
        Xy: function () {
          return c;
        },
        ir: function () {
          return u;
        },
        qG: function () {
          return l;
        },
        vc: function () {
          return S;
        },
      });
      var t = n(38775),
        e = n(19224);
      let a = (o) => ({
          borderColor: o.hoverBorderColor,
          backgroundColor: o.hoverBg,
        }),
        c = (o) => ({
          color: o.colorTextDisabled,
          backgroundColor: o.colorBgContainerDisabled,
          borderColor: o.colorBorder,
          boxShadow: "none",
          cursor: "not-allowed",
          opacity: 1,
          "input[disabled], textarea[disabled]": { cursor: "not-allowed" },
          "&:hover:not([disabled])": {
            ...a(
              (0, e.IX)(o, {
                hoverBorderColor: o.colorBorder,
                hoverBg: o.colorBgContainerDisabled,
              })
            ),
          },
        }),
        i = (o, r) => ({
          background: o.colorBgContainer,
          borderWidth: o.lineWidth,
          borderStyle: o.lineType,
          borderColor: r.borderColor,
          "&:hover": {
            borderColor: r.hoverBorderColor,
            backgroundColor: o.hoverBg,
          },
          "&:focus, &:focus-within": {
            borderColor: r.activeBorderColor,
            boxShadow: r.activeShadow,
            outline: 0,
            backgroundColor: o.activeBg,
          },
        }),
        d = (o, r) => ({
          ["&"
            .concat(o.componentCls, "-status-")
            .concat(r.status, ":not(")
            .concat(o.componentCls, "-disabled)")]: {
            ...i(o, r),
            [""
              .concat(o.componentCls, "-prefix, ")
              .concat(o.componentCls, "-suffix")]: { color: r.affixColor },
          },
          ["&"
            .concat(o.componentCls, "-status-")
            .concat(r.status)
            .concat(o.componentCls, "-disabled")]: {
            borderColor: r.borderColor,
          },
        }),
        l = (o, r) => ({
          "&-outlined": {
            ...i(o, {
              borderColor: o.colorBorder,
              hoverBorderColor: o.hoverBorderColor,
              activeBorderColor: o.activeBorderColor,
              activeShadow: o.activeShadow,
            }),
            ["&".concat(o.componentCls, "-disabled, &[disabled]")]: { ...c(o) },
            ...d(o, {
              status: "error",
              borderColor: o.colorError,
              hoverBorderColor: o.colorErrorBorderHover,
              activeBorderColor: o.colorError,
              activeShadow: o.errorActiveShadow,
              affixColor: o.colorError,
            }),
            ...d(o, {
              status: "warning",
              borderColor: o.colorWarning,
              hoverBorderColor: o.colorWarningBorderHover,
              activeBorderColor: o.colorWarning,
              activeShadow: o.warningActiveShadow,
              affixColor: o.colorWarning,
            }),
            ...r,
          },
        }),
        s = (o, r) => ({
          ["&"
            .concat(o.componentCls, "-group-wrapper-status-")
            .concat(r.status)]: {
            ["".concat(o.componentCls, "-group-addon")]: {
              borderColor: r.addonBorderColor,
              color: r.addonColor,
            },
          },
        }),
        u = (o) => ({
          "&-outlined": {
            ["".concat(o.componentCls, "-group")]: {
              "&-addon": {
                background: o.addonBg,
                border: ""
                  .concat((0, t.bf)(o.lineWidth), " ")
                  .concat(o.lineType, " ")
                  .concat(o.colorBorder),
              },
              "&-addon:first-child": { borderInlineEnd: 0 },
              "&-addon:last-child": { borderInlineStart: 0 },
            },
            ...s(o, {
              status: "error",
              addonBorderColor: o.colorError,
              addonColor: o.colorErrorText,
            }),
            ...s(o, {
              status: "warning",
              addonBorderColor: o.colorWarning,
              addonColor: o.colorWarningText,
            }),
            ["&".concat(o.componentCls, "-group-wrapper-disabled")]: {
              ["".concat(o.componentCls, "-group-addon")]: { ...c(o) },
            },
          },
        }),
        p = (o, r) => {
          let { componentCls: n } = o;
          return {
            "&-borderless": {
              background: "transparent",
              border: "none",
              "&:focus, &:focus-within": { outline: "none" },
              ["&".concat(n, "-disabled, &[disabled]")]: {
                color: o.colorTextDisabled,
                cursor: "not-allowed",
              },
              ["&".concat(n, "-status-error")]: {
                "&, & input, & textarea": { color: o.colorError },
              },
              ["&".concat(n, "-status-warning")]: {
                "&, & input, & textarea": { color: o.colorWarning },
              },
              ...r,
            },
          };
        },
        b = (o, r) => {
          var n;
          return {
            background: r.bg,
            borderWidth: o.lineWidth,
            borderStyle: o.lineType,
            borderColor: "transparent",
            "input&, & input, textarea&, & textarea": {
              color:
                null !== (n = null == r ? void 0 : r.inputColor) && void 0 !== n
                  ? n
                  : "unset",
            },
            "&:hover": { background: r.hoverBg },
            "&:focus, &:focus-within": {
              outline: 0,
              borderColor: r.activeBorderColor,
              backgroundColor: o.activeBg,
            },
          };
        },
        g = (o, r) => ({
          ["&"
            .concat(o.componentCls, "-status-")
            .concat(r.status, ":not(")
            .concat(o.componentCls, "-disabled)")]: {
            ...b(o, r),
            [""
              .concat(o.componentCls, "-prefix, ")
              .concat(o.componentCls, "-suffix")]: { color: r.affixColor },
          },
        }),
        h = (o, r) => ({
          "&-filled": {
            ...b(o, {
              bg: o.colorFillTertiary,
              hoverBg: o.colorFillSecondary,
              activeBorderColor: o.activeBorderColor,
              inputColor: o.colorText,
            }),
            ["&".concat(o.componentCls, "-disabled, &[disabled]")]: { ...c(o) },
            ...g(o, {
              status: "error",
              bg: o.colorErrorBg,
              hoverBg: o.colorErrorBgHover,
              activeBorderColor: o.colorError,
              inputColor: o.colorErrorText,
              affixColor: o.colorError,
            }),
            ...g(o, {
              status: "warning",
              bg: o.colorWarningBg,
              hoverBg: o.colorWarningBgHover,
              activeBorderColor: o.colorWarning,
              inputColor: o.colorWarningText,
              affixColor: o.colorWarning,
            }),
            ...r,
          },
        }),
        f = (o, r) => ({
          ["&"
            .concat(o.componentCls, "-group-wrapper-status-")
            .concat(r.status)]: {
            ["".concat(o.componentCls, "-group-addon")]: {
              background: r.addonBg,
              color: r.addonColor,
            },
          },
        }),
        C = (o) => ({
          "&-filled": {
            ["".concat(o.componentCls, "-group-addon")]: {
              background: o.colorFillTertiary,
              "&:last-child": { position: "static" },
            },
            ...f(o, {
              status: "error",
              addonBg: o.colorErrorBg,
              addonColor: o.colorErrorText,
            }),
            ...f(o, {
              status: "warning",
              addonBg: o.colorWarningBg,
              addonColor: o.colorWarningText,
            }),
            ["&".concat(o.componentCls, "-group-wrapper-disabled")]: {
              ["".concat(o.componentCls, "-group")]: {
                "&-addon": {
                  background: o.colorFillTertiary,
                  color: o.colorTextDisabled,
                },
                "&-addon:first-child": {
                  borderInlineStart: ""
                    .concat((0, t.bf)(o.lineWidth), " ")
                    .concat(o.lineType, " ")
                    .concat(o.colorBorder),
                  borderTop: ""
                    .concat((0, t.bf)(o.lineWidth), " ")
                    .concat(o.lineType, " ")
                    .concat(o.colorBorder),
                  borderBottom: ""
                    .concat((0, t.bf)(o.lineWidth), " ")
                    .concat(o.lineType, " ")
                    .concat(o.colorBorder),
                },
                "&-addon:last-child": {
                  borderInlineEnd: ""
                    .concat((0, t.bf)(o.lineWidth), " ")
                    .concat(o.lineType, " ")
                    .concat(o.colorBorder),
                  borderTop: ""
                    .concat((0, t.bf)(o.lineWidth), " ")
                    .concat(o.lineType, " ")
                    .concat(o.colorBorder),
                  borderBottom: ""
                    .concat((0, t.bf)(o.lineWidth), " ")
                    .concat(o.lineType, " ")
                    .concat(o.colorBorder),
                },
              },
            },
          },
        }),
        v = (o, r) => ({
          background: o.colorBgContainer,
          borderWidth: "".concat((0, t.bf)(o.lineWidth), " 0"),
          borderStyle: "".concat(o.lineType, " none"),
          borderColor: "transparent transparent ".concat(
            r.borderColor,
            " transparent"
          ),
          borderRadius: 0,
          "&:hover": {
            borderColor: "transparent transparent ".concat(
              r.hoverBorderColor,
              " transparent"
            ),
            backgroundColor: o.hoverBg,
          },
          "&:focus, &:focus-within": {
            borderColor: "transparent transparent ".concat(
              r.activeBorderColor,
              " transparent"
            ),
            outline: 0,
            backgroundColor: o.activeBg,
          },
        }),
        m = (o, r) => ({
          ["&"
            .concat(o.componentCls, "-status-")
            .concat(r.status, ":not(")
            .concat(o.componentCls, "-disabled)")]: {
            ...v(o, r),
            [""
              .concat(o.componentCls, "-prefix, ")
              .concat(o.componentCls, "-suffix")]: { color: r.affixColor },
          },
          ["&"
            .concat(o.componentCls, "-status-")
            .concat(r.status)
            .concat(o.componentCls, "-disabled")]: {
            borderColor: "transparent transparent ".concat(
              r.borderColor,
              " transparent"
            ),
          },
        }),
        S = (o, r) => ({
          "&-underlined": {
            ...v(o, {
              borderColor: o.colorBorder,
              hoverBorderColor: o.hoverBorderColor,
              activeBorderColor: o.activeBorderColor,
              activeShadow: o.activeShadow,
            }),
            ["&".concat(o.componentCls, "-disabled, &[disabled]")]: {
              color: o.colorTextDisabled,
              boxShadow: "none",
              cursor: "not-allowed",
              "&:hover": {
                borderColor: "transparent transparent ".concat(
                  o.colorBorder,
                  " transparent"
                ),
              },
            },
            "input[disabled], textarea[disabled]": { cursor: "not-allowed" },
            ...m(o, {
              status: "error",
              borderColor: o.colorError,
              hoverBorderColor: o.colorErrorBorderHover,
              activeBorderColor: o.colorError,
              activeShadow: o.errorActiveShadow,
              affixColor: o.colorError,
            }),
            ...m(o, {
              status: "warning",
              borderColor: o.colorWarning,
              hoverBorderColor: o.colorWarningBorderHover,
              activeBorderColor: o.colorWarning,
              activeShadow: o.warningActiveShadow,
              affixColor: o.colorWarning,
            }),
            ...r,
          },
        });
    },
  },
]);
