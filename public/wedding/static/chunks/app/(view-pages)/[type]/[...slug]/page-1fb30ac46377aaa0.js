(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4189],
  {
    10803: function (e, t, r) {
      Promise.resolve().then(r.bind(r, 62949)),
        Promise.resolve().then(r.bind(r, 62086));
    },
    62949: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var a = r(57437);
      r(2265);
      var n = r(37882);
      function i(e) {
        let { dataPage: t } = e;
        return (0, a.jsx)(n.default, { dataPage: t, viewContext: "go" });
      }
    },
    62086: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return b;
        },
      });
      var a = r(57437),
        n = r(27648),
        i = r(50742),
        l = r(2265),
        o = r(75304),
        s = r(64443),
        c = Object.defineProperty,
        C = Object.defineProperties,
        d = Object.getOwnPropertyDescriptors,
        u = Object.getOwnPropertySymbols,
        m = Object.prototype.hasOwnProperty,
        p = Object.prototype.propertyIsEnumerable,
        f = (e, t, r) =>
          t in e
            ? c(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        h = (e, t) => {
          for (var r in t || (t = {})) m.call(t, r) && f(e, r, t[r]);
          if (u) for (var r of u(t)) p.call(t, r) && f(e, r, t[r]);
          return e;
        },
        y = (e, t) => C(e, d(t));
      let g = (0, l.forwardRef)((e, t) =>
        l.createElement(o.Z, y(h({ ref: t }, e), { weights: s.Z }))
      );
      g.displayName = "TagPrice";
      var x = r(98239),
        L = r(33145),
        v = r(95721),
        w = r(99376);
      function E() {
        let e = (0, w.useRouter)();
        return (0, a.jsx)(i.ZP, {
          type: "default",
          size: "large",
          icon: (0, a.jsx)(v.Z, { weight: "LineDuotone" }),
          onClick: () => e.replace("/"),
          className:
            "w-full sm:w-auto transition-all duration-300 hover:shadow-lg",
          children: "Quay lại trang chủ",
        });
      }
      function b(e) {
        let { errorMessage: t } = e;
        return (0, a.jsxs)("div", {
          className:
            "min-h-screen flex items-center justify-center relative overflow-hidden",
          children: [
            (0, a.jsxs)("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-pink-50",
              children: [
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute top-20 left-20 w-4 h-4 bg-orange-300 rounded-full opacity-60",
                  animate: {
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  },
                  transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
                }),
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute top-40 right-32 w-6 h-6 bg-red-300 rounded-full opacity-50",
                  animate: {
                    y: [0, -30, 0],
                    x: [0, -15, 0],
                    scale: [1, 1.3, 1],
                  },
                  transition: {
                    duration: 4,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }),
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute bottom-32 left-40 w-3 h-3 bg-pink-300 rounded-full opacity-70",
                  animate: {
                    y: [0, -25, 0],
                    x: [0, 20, 0],
                    scale: [1, 1.1, 1],
                  },
                  transition: {
                    duration: 2.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 0.5,
                  },
                }),
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute top-60 right-20 w-5 h-5 bg-orange-400 rounded-full opacity-40",
                  animate: {
                    y: [0, -35, 0],
                    x: [0, -10, 0],
                    scale: [1, 1.4, 1],
                  },
                  transition: {
                    duration: 3.5,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 2,
                  },
                }),
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute bottom-20 right-40 w-4 h-4 bg-red-400 rounded-full opacity-60",
                  animate: {
                    y: [0, -20, 0],
                    x: [0, 15, 0],
                    scale: [1, 1.2, 1],
                  },
                  transition: {
                    duration: 2.8,
                    repeat: 1 / 0,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }),
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-orange-200/30 to-transparent",
                  animate: { scaleX: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] },
                  transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
                }),
                (0, a.jsx)(x.E.div, {
                  className:
                    "absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-red-200/20 to-transparent rounded-full",
                  animate: { scale: [1, 1.2, 1], rotate: [0, 180, 360] },
                  transition: { duration: 8, repeat: 1 / 0, ease: "linear" },
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "relative z-10 p-4",
              children: (0, a.jsx)("div", {
                className: "max-w-4xl w-full",
                children: (0, a.jsx)(x.E.div, {
                  className: "bg-white rounded-2xl shadow-xl p-8 lg:p-12",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: "easeOut" },
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
                    children: [
                      (0, a.jsx)(x.E.div, {
                        className: "flex-1 text-center lg:text-left",
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.8,
                          delay: 0.2,
                          ease: "easeOut",
                        },
                        children: (0, a.jsx)(x.E.div, {
                          className: "relative w-full max-w-md mx-auto lg:mx-0",
                          whileHover: { scale: 1.05 },
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                          children: (0, a.jsx)(x.E.div, {
                            animate: { y: [0, -10, 0] },
                            transition: {
                              duration: 2,
                              repeat: 1 / 0,
                              ease: "easeInOut",
                            },
                            children: (0, a.jsx)("div", {
                              className:
                                "w-full max-w-md mx-auto lg:mx-0 flex items-center justify-center",
                              children: (0, a.jsx)("div", {
                                className:
                                  "w-64 h-64 bg-orange-100 rounded-full flex items-center justify-center",
                                children: (0, a.jsx)(x.E.div, {
                                  animate: {
                                    scale: [1, 1.1, 1],
                                    rotate: [0, 10, -10, 0],
                                  },
                                  transition: {
                                    duration: 3,
                                    repeat: 1 / 0,
                                    ease: "easeInOut",
                                  },
                                  children: (0, a.jsx)(L.default, {
                                    src: "/assets/limit-reached.webp",
                                    alt: "Limit Reached",
                                    width: 400,
                                    height: 400,
                                    className: "w-full h-auto",
                                    priority: !0,
                                    unoptimized: !0,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      (0, a.jsxs)(x.E.div, {
                        className: "flex-1 text-center lg:text-left",
                        initial: { opacity: 0, x: -30 },
                        animate: { opacity: 1, x: 0 },
                        transition: {
                          duration: 0.8,
                          delay: 0.4,
                          ease: "easeOut",
                        },
                        children: [
                          (0, a.jsx)(x.E.h1, {
                            className:
                              "text-4xl lg:text-6xl font-bold text-gray-900 mb-4 mt-0",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 0.6 },
                            children: (0, a.jsx)(x.E.span, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.5, delay: 0.8 },
                              children: "Oops!",
                            }),
                          }),
                          (0, a.jsx)(x.E.h2, {
                            className:
                              "text-2xl lg:text-3xl font-semibold text-orange-600 mb-6",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 0.8 },
                            children: (0, a.jsx)(x.E.span, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.5, delay: 1 },
                              children: "Đ\xe3 đạt giới hạn lượt xem",
                            }),
                          }),
                          (0, a.jsx)(x.E.p, {
                            className:
                              "text-lg text-gray-600 mb-4 max-w-md mx-auto lg:mx-0",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 1 },
                            children: (0, a.jsx)(x.E.span, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.5, delay: 1.2 },
                              children:
                                "Thiệp n\xe0y đ\xe3 đạt giới hạn lượt xem. Để tiếp tục xem thiệp, vui l\xf2ng n\xe2ng cấp g\xf3i để c\xf3 th\xeam lượt xem v\xe0 nhiều t\xednh năng kh\xe1c.",
                            }),
                          }),
                          (0, a.jsxs)(x.E.div, {
                            className:
                              "flex flex-col sm:flex-row gap-4 justify-center lg:justify-start",
                            initial: { opacity: 0, y: 30 },
                            animate: { opacity: 1, y: 0 },
                            transition: {
                              duration: 0.8,
                              delay: 1.2,
                              ease: "easeOut",
                            },
                            children: [
                              (0, a.jsx)(x.E.div, {
                                whileHover: { scale: 1.05, y: -2 },
                                whileTap: { scale: 0.95 },
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                },
                                children: (0, a.jsx)(n.default, {
                                  href: "/pricing",
                                  children: (0, a.jsx)(i.ZP, {
                                    type: "primary",
                                    size: "large",
                                    icon: (0, a.jsx)(g, {
                                      weight: "LineDuotone",
                                    }),
                                    className:
                                      "w-full sm:w-auto transition-all duration-300 hover:shadow-lg",
                                    children: "N\xe2ng cấp g\xf3i ngay",
                                  }),
                                }),
                              }),
                              (0, a.jsx)(x.E.div, {
                                whileHover: { scale: 1.05, y: -2 },
                                whileTap: { scale: 0.95 },
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                },
                                children: (0, a.jsx)(E, {}),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
          ],
        });
      }
    },
    36733: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = r(2265);
      let n = new Map([
        [
          "Bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M20 11.25C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H10.75L10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002L10.75 11.25H20Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              opacity: "0.5",
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M20.75 12C20.75 11.5858 20.4142 11.25 20 11.25H10.75V12.75H20C20.4142 12.75 20.75 12.4142 20.75 12Z",
              fill: "currentColor",
            }),
            a.createElement("path", {
              d: "M10.75 18C10.75 18.3034 10.5673 18.5768 10.287 18.6929C10.0068 18.809 9.68417 18.7449 9.46967 18.5304L3.46967 12.5304C3.32902 12.3897 3.25 12.1989 3.25 12C3.25 11.8011 3.32902 11.6103 3.46967 11.4697L9.46967 5.46969C9.68417 5.25519 10.0068 5.19103 10.287 5.30711C10.5673 5.4232 10.75 5.69668 10.75 6.00002V18Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M4 12L10 6M4 12L10 18M4 12H14.5M20 12H17.5",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Linear",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M20 12H4M4 12L10 6M4 12L10 18",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "LineDuotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              opacity: "0.5",
              d: "M20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25V12.75ZM20 11.25H4V12.75H20V11.25Z",
              fill: "currentColor",
            }),
            a.createElement("path", {
              d: "M10 6L4 12L10 18",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
              strokeLinejoin: "round",
            })
          ),
        ],
        [
          "Outline",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
    },
    64443: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return n;
        },
      });
      var a = r(2265);
      let n = new Map([
        [
          "Bold",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.5988 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848ZM11.1467 14.3284C10.4737 13.6555 10.4794 12.6899 10.8819 11.9247C10.6807 11.6325 10.7101 11.2295 10.9699 10.9697C11.2288 10.7108 11.6298 10.6807 11.9217 10.8795C12.2615 10.6988 12.635 10.6033 13.0071 10.6068C13.4213 10.6107 13.7539 10.9497 13.75 11.3639C13.7461 11.7781 13.4071 12.1107 12.9929 12.1068C12.816 12.1051 12.5835 12.1845 12.3841 12.3839C11.9966 12.7714 12.0985 13.1589 12.2073 13.2678C12.3162 13.3766 12.7037 13.4785 13.0912 13.091C13.8753 12.307 15.2289 12.0467 16.0964 12.9142C16.7694 13.5872 16.7637 14.5528 16.3612 15.318C16.5624 15.6102 16.533 16.0132 16.2732 16.273C16.0143 16.5319 15.6131 16.5619 15.3212 16.3631C14.8643 16.6059 14.3446 16.6969 13.849 16.595C13.4433 16.5117 13.182 16.1152 13.2654 15.7094C13.3487 15.3037 13.7452 15.0424 14.151 15.1257C14.3281 15.1622 14.6137 15.104 14.859 14.8588C15.2465 14.4712 15.1446 14.0837 15.0358 13.9749C14.9269 13.866 14.5394 13.7641 14.1519 14.1517C13.3678 14.9357 12.0142 15.1959 11.1467 14.3284ZM10.021 10.2931C10.802 9.51207 10.802 8.24574 10.021 7.46469C9.23991 6.68364 7.97358 6.68364 7.19253 7.46469C6.41148 8.24574 6.41148 9.51207 7.19253 10.2931C7.97358 11.0742 9.23991 11.0742 10.021 10.2931Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "BoldDuotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              opacity: "0.5",
              d: "M17.9665 6.55812L16.1369 4.72848L16.1369 4.72848C14.5913 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.5988 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.5988 2.85574 7.39057L2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665L6.55813 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665L17.9665 17.9665L17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.5916 20.6555 9.24711 17.9665 6.55813L17.9665 6.55812Z",
              fill: "currentColor",
            }),
            a.createElement("path", {
              d: "M11.1469 14.3284C10.4739 13.6555 10.4796 12.6899 10.882 11.9247C10.6809 11.6325 10.7103 11.2295 10.9701 10.9697C11.2289 10.7108 11.63 10.6807 11.9219 10.8795C12.2617 10.6988 12.6351 10.6033 13.0073 10.6068C13.4215 10.6107 13.7541 10.9497 13.7502 11.3639C13.7462 11.7781 13.4073 12.1107 12.9931 12.1068C12.8162 12.1051 12.5837 12.1845 12.3843 12.3839C11.9968 12.7714 12.0987 13.1589 12.2075 13.2678C12.3164 13.3766 12.7039 13.4785 13.0914 13.091C13.8754 12.307 15.2291 12.0467 16.0966 12.9142C16.7696 13.5872 16.7639 14.5528 16.3614 15.318C16.5625 15.6102 16.5332 16.0132 16.2734 16.273C16.0145 16.5319 15.6133 16.5619 15.3214 16.3631C14.8645 16.6059 14.3448 16.6969 13.8492 16.595C13.4435 16.5117 13.1822 16.1152 13.2655 15.7094C13.3489 15.3037 13.7454 15.0424 14.1512 15.1257C14.3283 15.1622 14.6139 15.104 14.8592 14.8588C15.2467 14.4712 15.1448 14.0837 15.0359 13.9749C14.9271 13.866 14.5396 13.7641 14.1521 14.1517C13.368 14.9357 12.0143 15.1959 11.1469 14.3284Z",
              fill: "currentColor",
            }),
            a.createElement("path", {
              d: "M10.0211 10.2931C10.8022 9.51207 10.8022 8.24574 10.0211 7.46469C9.2401 6.68364 7.97377 6.68364 7.19272 7.46469C6.41167 8.24574 6.41167 9.51207 7.19272 10.2931C7.97377 11.0742 9.2401 11.0742 10.0211 10.2931Z",
              fill: "currentColor",
            })
          ),
        ],
        [
          "Broken",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M15.3893 15.3891C15.9751 14.8033 16.0542 13.9327 15.5661 13.4445C15.0779 12.9564 14.2073 13.0355 13.6215 13.6213C13.0358 14.2071 12.1652 14.2863 11.677 13.7981C11.1888 13.3099 11.268 12.4393 11.8538 11.8536M15.3893 15.3891L15.7429 15.7426M15.3893 15.3891C14.9883 15.7901 14.4539 15.9537 14 15.8604M11.5002 11.5L11.8538 11.8536M11.8538 11.8536C12.185 11.5223 12.6073 11.3531 13 11.3568",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            a.createElement("path", {
              d: "M8.60693 10.8789C9.7115 10.8789 10.6069 9.98348 10.6069 8.87891C10.6069 7.77434 9.7115 6.87891 8.60693 6.87891C7.50236 6.87891 6.60693 7.77434 6.60693 8.87891",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            a.createElement("path", {
              d: "M16.1369 4.72848C14.5914 3.18295 13.8186 2.41018 12.816 2.12264C11.8134 1.83509 10.7485 2.08083 8.61875 2.57231L7.39057 2.85574C5.59881 3.26922 4.70292 3.47597 4.08944 4.08944C3.47597 4.70292 3.26922 5.59881 2.85574 7.39057L2.57231 8.61875C2.08083 10.7485 1.83509 11.8134 2.12264 12.816C2.41018 13.8186 3.18295 14.5914 4.72848 16.1369L6.55812 17.9665C9.24711 20.6555 10.5916 22 12.2623 22C13.933 22 15.2775 20.6555 17.9665 17.9665C20.6555 15.2775 22 13.933 22 12.2623C22 10.9198 21.1319 9.788 19.3957 8",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            })
          ),
        ],
        [
          "Linear",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              d: "M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.5988 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            a.createElement("path", {
              d: "M15.3893 15.3891C15.9751 14.8033 16.0542 13.9327 15.5661 13.4445C15.0779 12.9564 14.2073 13.0355 13.6215 13.6213C13.0358 14.2071 12.1652 14.2863 11.677 13.7981C11.1888 13.3099 11.268 12.4393 11.8538 11.8536M15.3893 15.3891L15.7429 15.7426M15.3893 15.3891C14.9883 15.7901 14.4539 15.9537 14 15.8604M11.5002 11.5L11.8538 11.8536M11.8538 11.8536C12.185 11.5223 12.6073 11.3531 13 11.3568",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            a.createElement("circle", {
              cx: "8.60724",
              cy: "8.87891",
              r: "2",
              transform: "rotate(-45 8.60724 8.87891)",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "LineDuotone",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              opacity: "0.5",
              d: "M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.5988 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z",
              stroke: "currentColor",
              strokeWidth: "1.5",
            }),
            a.createElement("path", {
              d: "M15.3893 15.3891C15.9751 14.8033 16.0542 13.9327 15.5661 13.4445C15.0779 12.9564 14.2073 13.0355 13.6215 13.6213C13.0358 14.2071 12.1652 14.2863 11.677 13.7981C11.1888 13.3099 11.268 12.4393 11.8538 11.8536M15.3893 15.3891L15.7429 15.7426M15.3893 15.3891C14.9883 15.7901 14.4539 15.9537 14 15.8604M11.5002 11.5L11.8538 11.8536M11.8538 11.8536C12.185 11.5223 12.6073 11.3531 13 11.3568",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
            a.createElement("circle", {
              cx: "8.60699",
              cy: "8.87891",
              r: "2",
              transform: "rotate(-45 8.60699 8.87891)",
              stroke: "currentColor",
              strokeWidth: "1.5",
            })
          ),
        ],
        [
          "Outline",
          a.createElement(
            a.Fragment,
            null,
            a.createElement("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M11.2383 2.79888C10.6243 2.88003 9.86602 3.0542 8.7874 3.30311L7.55922 3.58654C6.6482 3.79677 6.02081 3.94252 5.54162 4.10698C5.07899 4.26576 4.81727 4.42228 4.61978 4.61978C4.42228 4.81727 4.26576 5.07899 4.10698 5.54162C3.94252 6.02082 3.79677 6.6482 3.58654 7.55922L3.30311 8.7874C3.0542 9.86602 2.88003 10.6243 2.79888 11.2383C2.71982 11.8365 2.73805 12.2413 2.84358 12.6092C2.94911 12.9772 3.14817 13.3301 3.53226 13.7954C3.92651 14.2731 4.47607 14.8238 5.25882 15.6066L7.08845 17.4362C8.44794 18.7957 9.41533 19.7608 10.247 20.3954C11.0614 21.0167 11.6569 21.25 12.2623 21.25C12.8678 21.25 13.4633 21.0167 14.2776 20.3954C15.1093 19.7608 16.0767 18.7957 17.4362 17.4362C18.7957 16.0767 19.7608 15.1093 20.3954 14.2776C21.0167 13.4633 21.25 12.8678 21.25 12.2623C21.25 11.6569 21.0167 11.0614 20.3954 10.247C19.7608 9.41533 18.7957 8.44794 17.4362 7.08845L15.6066 5.25882C14.8238 4.47607 14.2731 3.92651 13.7954 3.53226C13.3301 3.14817 12.9772 2.94911 12.6092 2.84358C12.2413 2.73805 11.8365 2.71982 11.2383 2.79888ZM11.0418 1.31181C11.7591 1.21701 12.3881 1.21969 13.0227 1.4017C13.6574 1.58372 14.1922 1.91482 14.7502 2.37538C15.2897 2.8206 15.8905 3.42138 16.641 4.17193L18.5368 6.06774C19.8474 7.37835 20.8851 8.41598 21.5879 9.33714C22.311 10.2849 22.75 11.197 22.75 12.2623C22.75 13.3276 22.311 14.2397 21.5879 15.1875C20.8851 16.1087 19.8474 17.1463 18.5368 18.4569L18.4569 18.5368C17.1463 19.8474 16.1087 20.8851 15.1875 21.5879C14.2397 22.311 13.3276 22.75 12.2623 22.75C11.197 22.75 10.2849 22.311 9.33714 21.5879C8.41598 20.8851 7.37833 19.8474 6.06771 18.5368L4.17196 16.641C3.4214 15.8905 2.82061 15.2897 2.37538 14.7502C1.91482 14.1922 1.58372 13.6574 1.4017 13.0227C1.21969 12.3881 1.21701 11.7591 1.31181 11.0418C1.40345 10.3484 1.59451 9.52047 1.83319 8.48622L2.13385 7.18334C2.33302 6.32023 2.49543 5.61639 2.68821 5.05469C2.88955 4.46806 3.14313 3.9751 3.55912 3.55912C3.9751 3.14313 4.46806 2.88955 5.05469 2.68821C5.61639 2.49543 6.32023 2.33302 7.18335 2.13385L8.48622 1.83319C9.52047 1.59451 10.3484 1.40345 11.0418 1.31181ZM9.49092 7.99522C9.00276 7.50706 8.2113 7.50706 7.72315 7.99522C7.23499 8.48337 7.23499 9.27483 7.72315 9.76299C8.2113 10.2511 9.00276 10.2511 9.49092 9.76299C9.97907 9.27483 9.97907 8.48337 9.49092 7.99522ZM6.66249 6.93456C7.73643 5.86062 9.47763 5.86062 10.5516 6.93456C11.6255 8.0085 11.6255 9.7497 10.5516 10.8236C9.47763 11.8976 7.73643 11.8976 6.66249 10.8236C5.58855 9.7497 5.58855 8.0085 6.66249 6.93456ZM12.9929 12.107C12.816 12.1053 12.5835 12.1847 12.3841 12.3841C11.9965 12.7716 12.0985 13.1591 12.2073 13.268C12.3161 13.3768 12.7037 13.4787 13.0912 13.0912C13.8752 12.3071 15.2289 12.0469 16.0964 12.9144C16.7694 13.5874 16.7636 14.553 16.3612 15.3182C16.5623 15.6104 16.533 16.0134 16.2732 16.2732C16.0142 16.5321 15.6131 16.5621 15.3212 16.3633C14.8643 16.6061 14.3445 16.6971 13.849 16.5952C13.4433 16.5119 13.1819 16.1153 13.2653 15.7096C13.3487 15.3039 13.7452 15.0426 14.1509 15.1259C14.3281 15.1623 14.6137 15.1042 14.859 14.859C15.2465 14.4714 15.1446 14.0839 15.0357 13.9751C14.9269 13.8662 14.5394 13.7643 14.1518 14.1518C13.3678 14.9359 12.0141 15.1961 11.1466 14.3286C10.4737 13.6557 10.4794 12.6901 10.8818 11.9248C10.6807 11.6327 10.7101 11.2297 10.9699 10.9699C11.2287 10.711 11.6298 10.6809 11.9216 10.8796C12.2615 10.699 12.6349 10.6035 13.007 10.607C13.4212 10.6109 13.7538 10.9499 13.7499 11.3641C13.746 11.7783 13.4071 12.1109 12.9929 12.107Z",
              fill: "currentColor",
            })
          ),
        ],
      ]);
    },
    75304: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return d;
        },
      });
      var a = r(2265),
        n = Object.defineProperty,
        i = Object.getOwnPropertySymbols,
        l = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable,
        s = (e, t, r) =>
          t in e
            ? n(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        c = (e, t) => {
          for (var r in t || (t = {})) l.call(t, r) && s(e, r, t[r]);
          if (i) for (var r of i(t)) o.call(t, r) && s(e, r, t[r]);
          return e;
        },
        C = (e, t) => {
          var r = {};
          for (var a in e) l.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
          if (null != e && i)
            for (var a of i(e))
              0 > t.indexOf(a) && o.call(e, a) && (r[a] = e[a]);
          return r;
        };
      let d = (0, a.forwardRef)((e, t) => {
        let {
            alt: r,
            color: n = "currentColor",
            size: i = "1em",
            weight: l = "Linear",
            mirrored: o = !1,
            children: s,
            weights: d,
          } = e,
          u = C(e, [
            "alt",
            "color",
            "size",
            "weight",
            "mirrored",
            "children",
            "weights",
          ]);
        return a.createElement(
          "svg",
          c(
            {
              ref: t,
              xmlns: "http://www.w3.org/2000/svg",
              width: i,
              height: i,
              color: n,
              fill: "none",
              viewBox: "0 0 24 24",
              transform: o ? "scale(-1, 1)" : void 0,
            },
            u
          ),
          !!r && a.createElement("title", null, r),
          s,
          d.get(l)
        );
      });
      d.displayName = "SSRBase";
    },
    95721: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return f;
        },
      });
      var a = r(2265),
        n = r(75304),
        i = r(36733),
        l = Object.defineProperty,
        o = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        c = Object.getOwnPropertySymbols,
        C = Object.prototype.hasOwnProperty,
        d = Object.prototype.propertyIsEnumerable,
        u = (e, t, r) =>
          t in e
            ? l(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: r,
              })
            : (e[t] = r),
        m = (e, t) => {
          for (var r in t || (t = {})) C.call(t, r) && u(e, r, t[r]);
          if (c) for (var r of c(t)) d.call(t, r) && u(e, r, t[r]);
          return e;
        },
        p = (e, t) => o(e, s(t));
      let f = (0, a.forwardRef)((e, t) =>
        a.createElement(n.Z, p(m({ ref: t }, e), { weights: i.Z }))
      );
      f.displayName = "ArrowLeft";
    },
  },
  function (e) {
    e.O(
      0,
      [
        8788, 799, 2053, 7360, 134, 7240, 2333, 5501, 6950, 6051, 2516, 4705,
        1994, 9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039,
        8640, 5827, 5909, 8589, 639, 9878, 9486, 5670, 2972, 8364, 3335, 9646,
        3568, 605, 4178, 2752, 2867, 9876, 5878, 7408, 9109, 5149, 4955, 1631,
        4893, 2322, 7627, 2378, 5771, 7550, 4475, 9550, 4299, 1167, 6615, 7882,
        2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 10803));
      }
    ),
      (_N_E = e.O());
  },
]);
