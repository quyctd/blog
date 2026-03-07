(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    8434: function (e, r, t) {
      Promise.resolve().then(t.bind(t, 14888)),
        Promise.resolve().then(t.bind(t, 98087)),
        Promise.resolve().then(t.bind(t, 47239)),
        Promise.resolve().then(t.t.bind(t, 88003, 23)),
        Promise.resolve().then(t.t.bind(t, 63505, 23)),
        Promise.resolve().then(t.t.bind(t, 32647, 23)),
        Promise.resolve().then(t.t.bind(t, 49499, 23)),
        Promise.resolve().then(t.t.bind(t, 61316, 23)),
        Promise.resolve().then(t.t.bind(t, 52527, 23)),
        Promise.resolve().then(t.t.bind(t, 25606, 23)),
        Promise.resolve().then(t.bind(t, 85794)),
        Promise.resolve().then(t.bind(t, 1570)),
        Promise.resolve().then(t.bind(t, 91115)),
        Promise.resolve().then(t.t.bind(t, 69268, 23)),
        Promise.resolve().then(t.t.bind(t, 36113, 23));
    },
    85794: function (e, r, t) {
      "use strict";
      t.d(r, {
        default: function () {
          return i;
        },
      });
      var n = t(2265),
        o = t(15491),
        s = t(21247);
      function i() {
        let e = (0, n.useRef)(!1);
        return (
          (0, n.useEffect)(() => {
            if (e.current) return;
            e.current = !0;
            let r = s.X.NEXT_PUBLIC_CLARITY_PROJECT_ID || "vqyzv56fqt";
            r && o.Z.init(r);
          }, []),
          null
        );
      }
    },
    1570: function (e, r, t) {
      "use strict";
      var n = t(57437),
        o = t(50742),
        s = t(2265);
      class i extends s.Component {
        static getDerivedStateFromError(e) {
          return { hasError: !0, error: e };
        }
        componentDidCatch(e, r) {
          console.error("ErrorBoundary caught an error:", e, r);
        }
        render() {
          return this.state.hasError
            ? this.props.fallback
              ? (0, n.jsx)(this.props.fallback, {
                  error: this.state.error,
                  resetError: this.resetError,
                })
              : (0, n.jsx)("div", {
                  className:
                    "flex flex-col items-center justify-center min-h-[400px] p-6",
                  children: (0, n.jsxs)("div", {
                    className: "text-center",
                    children: [
                      (0, n.jsx)("h2", {
                        className: "text-2xl text-gray-900 mb-4 mt-0",
                        children: "Oops! Đ\xe3 c\xf3 lỗi xảy ra",
                      }),
                      (0, n.jsx)("p", {
                        className: "text-gray-600 mb-6",
                        children:
                          "Đ\xe3 c\xf3 lỗi kh\xf4ng mong muốn xảy ra. Vui l\xf2ng thử lại.",
                      }),
                      (0, n.jsx)(o.ZP, {
                        onClick: this.resetError,
                        children: "Thử lại",
                      }),
                    ],
                  }),
                })
            : this.props.children;
        }
        constructor(e) {
          super(e),
            (this.resetError = () => {
              this.setState({ hasError: !1, error: null });
            }),
            (this.state = { hasError: !1, error: null });
        }
      }
      r.default = i;
    },
    21247: function (e, r, t) {
      "use strict";
      t.d(r, {
        X: function () {
          return i;
        },
      });
      var n = t(44673),
        o = t(8491),
        s = t(25566);
      let i = (0, n.D)({
        server: { DATABASE_URL: o.ZPm.string().optional() },
        client: {
          NEXT_PUBLIC_APP_URL: o.ZPm.string().optional(),
          NEXT_PUBLIC_API_URL: o.ZPm.string().optional(),
          NEXT_PUBLIC_CLARITY_PROJECT_ID: o.ZPm.string().optional(),
        },
        shared: {
          NODE_ENV: o.ZPm.enum([
            "test",
            "development",
            "production",
          ]).optional(),
        },
        runtimeEnv: {
          DATABASE_URL: s.env.DATABASE_URL,
          NEXT_PUBLIC_APP_URL: "https://zenlove.me",
          NODE_ENV: "production",
          NEXT_PUBLIC_API_URL: "https://api.zenlove.me",
          NEXT_PUBLIC_CLARITY_PROJECT_ID: "vqyzv56fqt",
        },
      });
    },
    91115: function (e, r, t) {
      "use strict";
      t.d(r, {
        default: function () {
          return f;
        },
      });
      var n = t(57437),
        o = t(2265),
        s = t(47213),
        i = t(64625),
        l = t(12808);
      let a = {
        algorithm: [t(2651).Z.defaultAlgorithm],
        token: {
          fontSize: 16,
          borderRadius: 10,
          colorPrimary: "#ff4874",
          colorInfo: "#ff4874",
          colorTextBase: "#0f172a",
          fontFamily:
            "var(--font-plus-jakarta), 'Plus Jakarta Sans', sans-serif",
          zIndexBase: 1e8,
          zIndexPopupBase: 100000010,
        },
        components: {
          Modal: { zIndexBase: 1e8, zIndexPopupBase: 1e8 },
          Select: {
            zIndexBase: 100000010,
            zIndexPopupBase: 100000010,
            zIndexPopup: 100000010,
          },
          Tabs: {
            inkBarColor: "rgb(255,72,116)",
            itemSelectedColor: "rgb(255,72,116)",
          },
          DatePicker: { zIndexPopup: 100000010 },
          Dropdown: { zIndexBase: 100000010, zIndexPopup: 100000010 },
          Tooltip: { zIndexPopup: 99999999999 },
          Popover: { zIndexPopup: 100000020 },
          Popconfirm: { zIndexPopup: 100000020 },
          Message: { zIndexPopup: 99999999999 },
          Notification: { zIndexPopup: 99999999999 },
          Tour: { zIndexPopup: 99999999999 },
        },
      };
      var c = t(48091),
        u = t(80605),
        d = t(54114),
        h = t(29827);
      function p(e) {
        let { children: r } = e,
          [t] = (0, o.useState)(
            () =>
              new d.S({
                defaultOptions: {
                  queries: {
                    staleTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                  },
                },
              })
          );
        return (0, n.jsx)(h.aH, { client: t, children: r });
      }
      var P = t(63047);
      let m = (e) => {
        let { children: r } = e;
        return (0, n.jsx)(P.Y, { children: r });
      };
      function f(e) {
        let { children: r } = e;
        return (0, n.jsx)(u.SessionProvider, {
          refetchOnWindowFocus: !1,
          children: (0, n.jsx)(p, {
            children: (0, n.jsx)(m, {
              children: (0, n.jsx)(c.n, {
                children: (0, n.jsx)(s.ZP, {
                  theme: a,
                  children: (0, n.jsx)(l.iV, {
                    children: (0, n.jsx)(i.Z, { children: r }),
                  }),
                }),
              }),
            }),
          }),
        });
      }
    },
    36113: function () {},
    69268: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        602, 1247, 9637, 8788, 2680, 7825, 7512, 9161, 2160, 4530, 6677, 2383,
        7213, 9763, 6815, 9816, 5827, 605, 2322, 7550, 8495, 7525, 2971, 2117,
        1744,
      ],
      function () {
        return e((e.s = 8434));
      }
    ),
      (_N_E = e.O());
  },
]);
