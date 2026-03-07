(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9160],
  {
    74508: function (a, t, e) {
      Promise.resolve().then(e.bind(e, 6991));
    },
    6991: function (a, t, e) {
      "use strict";
      e.d(t, {
        default: function () {
          return u;
        },
      });
      var i = e(57437),
        n = e(33145),
        s = e(27648),
        l = e(50742),
        r = e(25698),
        o = e(95721);
      function d() {
        return (0, i.jsx)(l.ZP, {
          type: "default",
          size: "large",
          icon: (0, i.jsx)(o.Z, { weight: "LineDuotone" }),
          onClick: () => window.history.back(),
          className:
            "w-full sm:w-auto transition-all duration-300 hover:shadow-lg",
          children: "Trở về trang trước",
        });
      }
      var c = e(98239);
      function u() {
        return (0, i.jsxs)("div", {
          className:
            "min-h-screen flex items-center justify-center relative overflow-hidden",
          children: [
            (0, i.jsxs)("div", {
              className:
                "absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50",
              children: [
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute top-20 left-20 w-4 h-4 bg-pink-300 rounded-full opacity-60",
                  animate: {
                    y: [0, -20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.2, 1],
                  },
                  transition: { duration: 3, repeat: 1 / 0, ease: "easeInOut" },
                }),
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute top-40 right-32 w-6 h-6 bg-purple-300 rounded-full opacity-50",
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
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute bottom-32 left-40 w-3 h-3 bg-blue-300 rounded-full opacity-70",
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
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute top-60 right-20 w-5 h-5 bg-pink-400 rounded-full opacity-40",
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
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute bottom-20 right-40 w-4 h-4 bg-purple-400 rounded-full opacity-60",
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
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-200/30 to-transparent",
                  animate: { scaleX: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] },
                  transition: { duration: 4, repeat: 1 / 0, ease: "easeInOut" },
                }),
                (0, i.jsx)(c.E.div, {
                  className:
                    "absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-200/20 to-transparent rounded-full",
                  animate: { scale: [1, 1.2, 1], rotate: [0, 180, 360] },
                  transition: { duration: 8, repeat: 1 / 0, ease: "linear" },
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: "relative z-10 p-4",
              children: (0, i.jsx)("div", {
                className: "max-w-4xl w-full",
                children: (0, i.jsx)(c.E.div, {
                  className: "bg-white rounded-2xl shadow-xl p-8 lg:p-12",
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, ease: "easeOut" },
                  children: (0, i.jsxs)("div", {
                    className:
                      "flex flex-col lg:flex-row items-center gap-8 lg:gap-12",
                    children: [
                      (0, i.jsx)(c.E.div, {
                        className: "flex-1 text-center lg:text-left",
                        initial: { opacity: 0, y: 30 },
                        animate: { opacity: 1, y: 0 },
                        transition: {
                          duration: 0.8,
                          delay: 0.2,
                          ease: "easeOut",
                        },
                        children: (0, i.jsx)(c.E.div, {
                          className: "relative w-full max-w-md mx-auto lg:mx-0",
                          whileHover: { scale: 1.05 },
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 20,
                          },
                          children: (0, i.jsx)(c.E.div, {
                            animate: { y: [0, -10, 0] },
                            transition: {
                              duration: 2,
                              repeat: 1 / 0,
                              ease: "easeInOut",
                            },
                            children: (0, i.jsx)(n.default, {
                              src: "/assets/404.webp",
                              alt: "404 Not Found",
                              width: 400,
                              height: 400,
                              className: "w-full h-auto",
                              priority: !0,
                              unoptimized: !0,
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsxs)(c.E.div, {
                        className: "flex-1 text-center lg:text-left",
                        initial: { opacity: 0, x: -30 },
                        animate: { opacity: 1, x: 0 },
                        transition: {
                          duration: 0.8,
                          delay: 0.4,
                          ease: "easeOut",
                        },
                        children: [
                          (0, i.jsx)(c.E.h1, {
                            className:
                              "text-4xl lg:text-6xl font-bold text-gray-900 mb-4 mt-0",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 0.6 },
                            children: (0, i.jsx)(c.E.span, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.5, delay: 0.8 },
                              children: "Oops!",
                            }),
                          }),
                          (0, i.jsx)(c.E.h2, {
                            className:
                              "text-2xl lg:text-3xl font-semibold text-gray-700 mb-6",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 0.8 },
                            children: (0, i.jsx)(c.E.span, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.5, delay: 1 },
                              children: "Trang kh\xf4ng tồn tại",
                            }),
                          }),
                          (0, i.jsx)(c.E.p, {
                            className:
                              "text-lg text-gray-600 mb-8 max-w-md mx-auto lg:mx-0",
                            initial: { opacity: 0, y: 20 },
                            animate: { opacity: 1, y: 0 },
                            transition: { duration: 0.6, delay: 1 },
                            children: (0, i.jsx)(c.E.span, {
                              initial: { opacity: 0 },
                              animate: { opacity: 1 },
                              transition: { duration: 0.5, delay: 1.2 },
                              children:
                                "C\xf3 vẻ như trang bạn đang t\xecm kiếm kh\xf4ng tồn tại hoặc đ\xe3 hết hạn. H\xe3y kiểm tra lại URL hoặc quay lại trang chủ.",
                            }),
                          }),
                          (0, i.jsxs)(c.E.div, {
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
                              (0, i.jsx)(c.E.div, {
                                whileHover: { scale: 1.05, y: -2 },
                                whileTap: { scale: 0.95 },
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                },
                                children: (0, i.jsx)(s.default, {
                                  href: "/",
                                  children: (0, i.jsx)(l.ZP, {
                                    type: "primary",
                                    size: "large",
                                    icon: (0, i.jsx)(r.Z, {
                                      weight: "LineDuotone",
                                    }),
                                    className:
                                      "w-full sm:w-auto transition-all duration-300 hover:shadow-lg",
                                    children: "Quay lại trang chủ",
                                  }),
                                }),
                              }),
                              (0, i.jsx)(c.E.div, {
                                whileHover: { scale: 1.05, y: -2 },
                                whileTap: { scale: 0.95 },
                                transition: {
                                  type: "spring",
                                  stiffness: 300,
                                  damping: 20,
                                },
                                children: (0, i.jsx)(d, {}),
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
  },
  function (a) {
    a.O(
      0,
      [9161, 2160, 2383, 2972, 5878, 4475, 2129, 2971, 2117, 1744],
      function () {
        return a((a.s = 74508));
      }
    ),
      (_N_E = a.O());
  },
]);
