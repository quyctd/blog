(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [783],
  {
    31187: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 86112));
    },
    50209: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(57437),
        i = n(59646),
        a = n(85839),
        l = n(2265),
        r = n(99376),
        c = n(18998);
      function o(e) {
        let { info: t = "dashboard" } = e,
          n = (0, r.useRouter)(),
          [o, d] = (0, l.useState)(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("div", {
              className:
                "px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-lime-50 to-green-50 rounded-xl mb-4 cursor-pointer hover:from-lime-100 hover:to-green-100 transition-all duration-200",
              onClick: () => d(!0),
              children: (0, s.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, s.jsxs)("div", {
                    className: " flex items-center gap-3 flex-1",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center flex-shrink-0",
                        children: (0, s.jsx)(a.Z, {
                          weight: "BoldDuotone",
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          (0, s.jsx)("h3", {
                            className: "text-sm md:text-base mb-0.5 mt-0",
                            children: "N\xe2ng cấp giới hạn",
                          }),
                          (0, s.jsx)("p", {
                            className: "text-gray-600 text-xs md:text-sm m-0",
                            children:
                              "Tăng giới hạn số lượng thiệp mời v\xe0 số lượng lượt xem nhiều hơn.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)(i.Icon, {
                    icon: "line-md:arrow-right",
                    className: "text-lg text-gray-400 flex-shrink-0",
                  }),
                ],
              }),
            }),
            (0, s.jsx)(c.Z, {
              open: o,
              onClose: () => d(!1),
              onUpgradePackage: () => {
                n.push("/pricing?ref=".concat(t));
              },
              onBuyAddons: () => {
                n.push("/dashboard/addons");
              },
            }),
          ],
        });
      }
    },
    18998: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(57437);
      n(2265);
      var i = n(39486),
        a = n(53743),
        l = n(59646);
      let { Title: r, Text: c } = i.default;
      function o(e) {
        let { open: t, onClose: n, onUpgradePackage: i, onBuyAddons: o } = e;
        return (0, s.jsx)(a.default, {
          open: t,
          onCancel: n,
          footer: null,
          closable: !1,
          width: 500,
          centered: !0,
          destroyOnHidden: !0,
          maskClosable: !0,
          className: "upgrade-limit-modal [&_.ant-modal-content]:rounded-2xl",
          styles: { body: { padding: "40px 32px 32px" } },
          zIndex: 99999999999,
          children: (0, s.jsxs)("div", {
            className: "flex flex-col items-center relative",
            children: [
              (0, s.jsx)("button", {
                onClick: n,
                className:
                  "absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-400 hover:text-gray-600 z-10",
                "aria-label": "Đ\xf3ng",
                children: (0, s.jsx)(l.Icon, {
                  icon: "solar:close-circle-bold",
                  className: "w-5 h-5",
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  "w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  }),
                  (0, s.jsx)(l.Icon, {
                    icon: "solar:star-fall-bold-duotone",
                    className: "w-12 h-12 text-white relative z-10",
                  }),
                ],
              }),
              (0, s.jsx)(r, {
                level: 3,
                className: "!mb-2 !mt-0 !text-center !text-gray-900 !font-bold",
                children: "N\xe2ng cấp giới hạn",
              }),
              (0, s.jsx)(c, {
                type: "secondary",
                className:
                  "text-sm md:text-base mb-8 text-center max-w-md block",
                children: "Chọn c\xe1ch bạn muốn mở rộng giới hạn sử dụng",
              }),
              (0, s.jsxs)("div", {
                className: "w-full space-y-3",
                children: [
                  (0, s.jsxs)("button", {
                    onClick: () => {
                      null == i || i(), n();
                    },
                    className:
                      "w-full bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border border-blue-200 hover:border-blue-300 rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-lg group cursor-pointer active:scale-[0.98]",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200",
                        children: (0, s.jsx)(l.Icon, {
                          icon: "solar:star-bold-duotone",
                          className: "w-7 h-7 text-white",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex-1 text-left min-w-0",
                        children: [
                          (0, s.jsx)(r, {
                            level: 5,
                            className:
                              "!mb-1.5 !mt-0 !text-gray-900 !font-semibold !text-base",
                            children: "N\xe2ng cấp g\xf3i",
                          }),
                          (0, s.jsx)(c, {
                            className:
                              "text-sm text-gray-600 leading-relaxed block",
                            children:
                              "N\xe2ng cấp l\xean g\xf3i cao cấp hơn để c\xf3 giới hạn lớn hơn",
                          }),
                        ],
                      }),
                      (0, s.jsx)(l.Icon, {
                        icon: "solar:alt-arrow-right-bold",
                        className:
                          "w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0",
                      }),
                    ],
                  }),
                  (0, s.jsxs)("button", {
                    onClick: () => {
                      null == o || o(), n();
                    },
                    className:
                      "w-full bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200 hover:border-purple-300 rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-lg group cursor-pointer active:scale-[0.98]",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200",
                        children: (0, s.jsx)(l.Icon, {
                          icon: "solar:shop-2-bold-duotone",
                          className: "w-7 h-7 text-white",
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex-1 text-left min-w-0",
                        children: [
                          (0, s.jsx)(r, {
                            level: 5,
                            className:
                              "!mb-1.5 !mt-0 !text-gray-900 !font-semibold !text-base",
                            children: "Mua Add-ons",
                          }),
                          (0, s.jsx)(c, {
                            className:
                              "text-sm text-gray-600 leading-relaxed block",
                            children:
                              "Mua th\xeam add-ons để mở rộng giới hạn theo nhu cầu",
                          }),
                        ],
                      }),
                      (0, s.jsx)(l.Icon, {
                        icon: "solar:alt-arrow-right-bold",
                        className:
                          "w-6 h-6 text-purple-600 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    86112: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return eR;
        },
      });
      var s = n(57437),
        i = n(2265),
        a = n(99376),
        l = n(29827),
        r = n(50946),
        c = n(18104),
        o = n(34029),
        d = n(19878),
        h = n(53743),
        m = n(50742),
        u = n(51653),
        x = n(81400),
        g = n(96931),
        p = n(50337),
        f = n(47451),
        v = n(69410),
        j = n(88589),
        b = n(76188),
        y = n(35713),
        N = n(1994),
        w = n(73630),
        k = n(35502),
        Z = n(50828),
        C = n(27648),
        P = n(49638),
        L = n(89970),
        T = n(80336),
        S = n(34577),
        I = n(10123),
        D = n(42536),
        z = n(13333),
        R = n(7296),
        B = n(88785),
        E = n(47098),
        K = n(23860),
        q = n(71823),
        F = n(96397),
        U = n(73665),
        _ = n(43635),
        O = n(89895),
        A = n(77673),
        Q = n(61897),
        M = n(65286),
        V = n(59945),
        G = n(45235),
        X = n(35822),
        W = n(24198),
        H = n(54771),
        Y = n(20360);
      function $(e) {
        let {
            viewCount: t = 0,
            likeCount: n = 0,
            commentCount: i = 0,
            giftCount: l = 0,
            loading: r = !1,
            pageId: c = "quy-hai-220326",
          } = e,
          o = (0, a.useRouter)();
        return (0, s.jsx)(g.Z, {
          title: "Thống k\xea tương t\xe1c",
          className: "w-full",
          loading: r,
          extra:
            c &&
            (0, s.jsx)(m.ZP, {
              type: "default",
              onClick: () => o.push("/dashboard/pages/".concat(c, "/messages")),
              icon: (0, s.jsx)(X.Z, {
                weight: "LineDuotone",
                color: "#0f4159",
              }),
              children: (0, s.jsx)("span", {
                className: "hidden md:inline",
                children: "Xem chi tiết",
              }),
            }),
          children: (0, s.jsxs)(f.Z, {
            gutter: [16, 16],
            children: [
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(R.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#3b82f6",
                          }),
                          (0, s.jsx)("span", { children: "Lượt xem" }),
                        ],
                      }),
                      value: t,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#3b82f6",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#3b82f6",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "Tổng số lượt xem trang",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(W.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#ef4444",
                          }),
                          (0, s.jsx)("span", { children: "Lượt th\xedch" }),
                        ],
                      }),
                      value: n,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#ef4444",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#ef4444",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "Số lượt th\xedch nhận được",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(H.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#10b981",
                          }),
                          (0, s.jsx)("span", { children: "Lời ch\xfac" }),
                        ],
                      }),
                      value: i,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#10b981",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#10b981",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "Số lời ch\xfac nhận được",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(Y.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#f59e0b",
                          }),
                          (0, s.jsx)("span", { children: "Qu\xe0 tặng" }),
                        ],
                      }),
                      value: l,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#f59e0b",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#f59e0b",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "Số qu\xe0 tặng nhận được",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var J = n(63589),
        ee = n(43372),
        et = n(64506),
        en = n(27639),
        es = n(18585);
      function ei(e) {
        let { pageId: t, loading: n = !1 } = e,
          i = (0, a.useRouter)(),
          { data: l, isLoading: r } = (0, es.lT)(t),
          c = l || {
            totalResponses: 0,
            attending: 0,
            notAttending: 0,
            totalAttendeeCount: 0,
          };
        return (0, s.jsx)(g.Z, {
          title: "Thống k\xea người tham dự",
          className: "w-full",
          loading: n || r,
          extra:
            t &&
            (0, s.jsx)(m.ZP, {
              type: "default",
              onClick: () => i.push("/dashboard/pages/".concat(t, "/rsvp")),
              icon: (0, s.jsx)(J.Z, {
                weight: "LineDuotone",
                color: "#0f4159",
              }),
              children: (0, s.jsx)("span", {
                className: "hidden md:inline",
                children: "Xem chi tiết",
              }),
            }),
          children: (0, s.jsxs)(f.Z, {
            gutter: [16, 16],
            children: [
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 12,
                md: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(J.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#3b82f6",
                          }),
                          (0, s.jsx)("span", { children: "Tổng lượt" }),
                        ],
                      }),
                      value: c.totalResponses,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#3b82f6",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#3b82f6",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "Tổng số RSVP",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 12,
                md: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(ee.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#10b981",
                          }),
                          (0, s.jsx)("span", { children: "Sẽ tham dự" }),
                        ],
                      }),
                      value: c.attending,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#10b981",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#10b981",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "X\xe1c nhận tham dự",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 12,
                md: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(et.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#ef4444",
                          }),
                          (0, s.jsx)("span", { children: "Kh\xf4ng tham dự" }),
                        ],
                      }),
                      value: c.notAttending,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#ef4444",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#ef4444",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "RSVP kh\xf4ng tham dự",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(v.Z, {
                xs: 12,
                sm: 12,
                md: 6,
                children: (0, s.jsxs)("div", {
                  className: "text-center",
                  children: [
                    (0, s.jsx)(G.Z, {
                      title: (0, s.jsxs)("div", {
                        className:
                          "flex items-center justify-center gap-2 text-gray-600",
                        children: [
                          (0, s.jsx)(en.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#f59e0b",
                          }),
                          (0, s.jsx)("span", { children: "Tổng số người" }),
                        ],
                      }),
                      value: c.totalAttendeeCount,
                      formatter: (e) => (0, I.uY)(Number(e)),
                      styles: {
                        content: {
                          color: "#f59e0b",
                          fontSize: "24px",
                          fontWeight: "bold",
                        },
                      },
                    }),
                    (0, s.jsx)(y.Z, {
                      color: "#f59e0b",
                      text: (0, s.jsx)("span", {
                        className: "text-xs text-gray-500",
                        children: "Tổng người tham dự",
                      }),
                      status: "processing",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var ea = n(24783),
        el = n(70311),
        er = n(96473),
        ec = n(23639),
        eo = n(6520),
        ed = n(12662),
        eh = n(84985),
        em = n(39486),
        eu = n(6417),
        ex = n(94053),
        eg = n(9395);
      function ep(e) {
        let { open: t, onClose: n, hasAccess: i = !1 } = e,
          a = [
            {
              src: (0, w.ud)("assets/modules/guest/guest-name_1.webp"),
              alt: "Tạo danh s\xe1ch kh\xe1ch mời 1",
              description: "1. Tạo danh s\xe1ch kh\xe1ch mời",
            },
            {
              src: (0, w.ud)("assets/modules/guest/guest-name_2.webp"),
              alt: "Tạo danh s\xe1ch kh\xe1ch mời 2",
              description: "2. Thiệp hiển thị t\xean kh\xe1ch mời",
            },
            {
              src: (0, w.ud)("assets/modules/guest/guest-name_3.webp"),
              alt: "Tạo danh s\xe1ch kh\xe1ch mời 3",
              description: "3. Theo d\xf5i danh s\xe1ch kh\xe1ch mời",
            },
          ];
        return (0, s.jsx)(h.default, {
          title: (0, s.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              (0, s.jsx)("div", {
                className:
                  "w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center",
                children: (0, s.jsx)(ex.Z, {
                  weight: "LineDuotone",
                  className: "w-4 h-4 text-blue-600",
                }),
              }),
              (0, s.jsx)("div", {
                children: (0, s.jsx)(em.default.Title, {
                  level: 4,
                  className: "!m-0",
                  children: "T\xean kh\xe1ch mời tự động",
                }),
              }),
            ],
          }),
          open: t,
          onCancel: n,
          footer: null,
          width: 1e3,
          className: "guest-name-modal",
          centered: !0,
          children: (0, s.jsxs)("div", {
            className: "text-center",
            children: [
              (0, s.jsx)("p", {
                className: "text-gray-600 mt-4 text-sm mb-0 italic",
                children:
                  "Tạo 1 mẫu thiệp duy nhất nhưng gửi cho mỗi kh\xe1ch mời một link ri\xeang. Khi kh\xe1ch mời truy cập link, thiệp sẽ tự động hiển thị t\xean của họ. Bạn sẽ kh\xf4ng cần tạo nhiều thiệp kh\xe1c nhau.",
              }),
              (0, s.jsx)("div", {
                className:
                  "grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mt-4 md:mt-3",
                children: a.map((e) =>
                  (0, s.jsxs)(
                    "div",
                    {
                      className: "space-y-1",
                      children: [
                        (0, s.jsx)(eu.Z, {
                          src: e.src,
                          alt: e.alt,
                          className: "w-full rounded-lg border shadow-sm",
                          width: "auto",
                          height: "auto",
                        }),
                        (0, s.jsx)("p", {
                          className: "text-md md:text-sm text-gray-600",
                          children: e.description,
                        }),
                      ],
                    },
                    e.alt
                  )
                ),
              }),
              (0, s.jsxs)("div", {
                className: "text-start my-4",
                children: [
                  (0, s.jsx)(em.default.Text, {
                    strong: !0,
                    className: "text-base block mb-3",
                    children: "Lợi \xedch của t\xednh năng:",
                  }),
                  (0, s.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3",
                    children: [
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsx)(ee.Z, {
                            weight: "LineDuotone",
                            className: "w-5 h-5 text-green-600",
                          }),
                          (0, s.jsx)(em.default.Text, {
                            children: "Kh\xf4ng giới hạn số lượng link tạo",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsx)(ee.Z, {
                            weight: "LineDuotone",
                            className: "w-5 h-5 text-green-600",
                          }),
                          (0, s.jsx)(em.default.Text, {
                            children: "Theo d\xf5i trạng th\xe1i nhận thiệp",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsx)(ee.Z, {
                            weight: "LineDuotone",
                            className: "w-5 h-5 text-green-600",
                          }),
                          (0, s.jsx)(em.default.Text, {
                            children: "Kh\xe1ch mời cảm thấy được sự tinh tế",
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, s.jsx)(ee.Z, {
                            weight: "LineDuotone",
                            className: "w-5 h-5 text-green-600",
                          }),
                          (0, s.jsx)(em.default.Text, {
                            children: "Tăng tương t\xe1c cho thiệp",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              !i &&
                (0, s.jsxs)("div", {
                  className:
                    "bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex items-center gap-3 mb-3",
                      children: [
                        (0, s.jsx)(eg.Z, {
                          weight: "LineDuotone",
                          className: "w-6 h-6 text-yellow-600",
                        }),
                        (0, s.jsx)(em.default.Text, {
                          strong: !0,
                          className: "text-base",
                          children: "N\xe2ng cấp để sử dụng t\xednh năng",
                        }),
                      ],
                    }),
                    (0, s.jsx)(em.default.Text, {
                      className: "text-sm text-gray-600 block mb-4",
                      children:
                        "T\xednh năng n\xe0y c\xf3 sẵn trong g\xf3i Basic trở l\xean",
                    }),
                    (0, s.jsxs)("div", {
                      className: "flex gap-2",
                      children: [
                        (0, s.jsx)(m.ZP, {
                          type: "primary",
                          size: "large",
                          className: "flex-1",
                          onClick: () => {
                            window.open(
                              "/pricing?ref=design-page&feature=enable_guest",
                              "_blank"
                            );
                          },
                          children: "N\xe2ng cấp ngay",
                        }),
                        (0, s.jsx)(m.ZP, {
                          size: "large",
                          onClick: n,
                          children: "Đ\xf3ng",
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          }),
        });
      }
      var ef = n(53530),
        ev = n(64512);
      function ej(e) {
        let { pageId: t, loading: n, guestData: l } = e,
          r = (0, a.useRouter)(),
          [c, d] = (0, i.useState)(!1),
          [h, u] = (0, i.useState)(!1),
          [x, p] = (0, i.useState)(!1),
          { checkFeatureAccess: f } = (0, eh.z)(),
          v = (0, S.a)("(max-width: 768px)"),
          j = f("enable_guest"),
          { data: b, isLoading: y } = (0, ed.ik)(t, {
            page: 1,
            limit: 6,
            sortBy: "createdAt",
            sortOrder: "desc",
          }),
          N = l
            ? {
                total: l.totalGuest,
                pending:
                  l.totalGuest -
                  l.totalGuestViewed -
                  l.totalGuestAccepted -
                  l.totalGuestRejected,
                viewed: l.totalGuestViewed,
                accepted: l.totalGuestAccepted,
                rejected: l.totalGuestRejected,
                totalViews: l.totalViews,
                totalLikes: 0,
              }
            : (null == b ? void 0 : b.items)
            ? (0, ed.oQ)(b.items)
            : {
                total: 0,
                pending: 0,
                viewed: 0,
                accepted: 0,
                rejected: 0,
                totalViews: 0,
                totalLikes: 0,
              },
          w = () => {
            j ? d(!0) : p(!0);
          },
          k = async (e, t) => {
            try {
              let n = (0, ed.Im)(e);
              await navigator.clipboard.writeText(n),
                o.ZP.success("Đ\xe3 sao ch\xe9p link của ".concat(t));
            } catch (e) {
              o.ZP.error("Kh\xf4ng thể sao ch\xe9p link");
            }
          },
          Z = (e) => {
            let t = (0, ed.Im)(e);
            window.open(t, "_blank");
          };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(g.Z, {
              title: (0, s.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, s.jsx)("span", { children: "Quản l\xfd kh\xe1ch mời" }),
                  (0, s.jsx)(L.Z, {
                    title: "Chi tiết t\xednh năng",
                    children: (0, s.jsx)(Q.Z, {
                      weight: "LineDuotone",
                      size: 24,
                      color: "#0f4159",
                      onClick: () => p(!0),
                    }),
                  }),
                ],
              }),
              className: "w-full",
              loading: n || y,
              extra:
                t &&
                (0, s.jsxs)(ea.Z, {
                  children: [
                    (0, s.jsx)(m.ZP, {
                      type: "primary",
                      icon: (0, s.jsx)(er.Z, {}),
                      onClick: w,
                      children: (0, s.jsx)("span", {
                        className: "hidden md:inline",
                        children: "Tạo",
                      }),
                    }),
                    (0, s.jsx)(m.ZP, {
                      type: "default",
                      onClick: () =>
                        r.push("/dashboard/pages/".concat(t, "/guest")),
                      icon: (0, s.jsx)(el.Z, {
                        weight: "LineDuotone",
                        color: "#0f4159",
                      }),
                      children: (0, s.jsx)("span", {
                        className: "hidden md:inline",
                        children: "Xem danh s\xe1ch",
                      }),
                    }),
                  ],
                }),
              children:
                (null == b ? void 0 : b.items) && b.items.length > 0
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-3 gap-3 overflow-y-auto max-h-[300px]",
                          children: b.items.slice(0, 6).map((e) => {
                            let t = (0, ed.Im)(e.code);
                            return (0, s.jsxs)(
                              "div",
                              {
                                className:
                                  "relative p-2 bg-gradient-to-br from-gray-50 to-white border ".concat(
                                    (() => {
                                      switch (e.status) {
                                        case ed.n9.accepted:
                                          return "border-green-500";
                                        case ed.n9.pending:
                                          return "";
                                        case ed.n9.rejected:
                                          return "border-red-500";
                                        case ed.n9.viewed:
                                          return "";
                                        default:
                                          return "border-gray-200";
                                      }
                                    })(),
                                    " rounded-lg hover:shadow-sm transition-all cursor-pointer group"
                                  ),
                                onClick: () => Z(e.code),
                                children: [
                                  (0, s.jsxs)("div", {
                                    className:
                                      "flex items-start justify-between mb-1",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "flex-1 min-w-0",
                                        children: (0, s.jsx)("h4", {
                                          className:
                                            "text-gray-900 text-sm truncate m-0",
                                          children: e.name,
                                        }),
                                      }),
                                      (0, s.jsxs)(ea.Z, {
                                        size: 4,
                                        className:
                                          "flex-shrink-0 transition-opacity ".concat(
                                            v
                                              ? "opacity-100"
                                              : "opacity-0 group-hover:opacity-100"
                                          ),
                                        onClick: (e) => e.stopPropagation(),
                                        children: [
                                          (0, s.jsx)(m.ZP, {
                                            type: "text",
                                            icon: (0, s.jsx)(ec.Z, {}),
                                            onClick: () => k(e.code, e.name),
                                            size: "small",
                                            className:
                                              "h-6 w-6 p-0 text-gray-400 hover:text-blue-600 hover:bg-blue-50",
                                          }),
                                          (0, s.jsx)(m.ZP, {
                                            type: "text",
                                            icon: (0, s.jsx)(eo.Z, {}),
                                            onClick: () => Z(e.code),
                                            size: "small",
                                            className:
                                              "h-6 w-6 p-0 text-gray-400 hover:text-green-600 hover:bg-green-50",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "flex items-center gap-2 p-2 bg-white rounded border border-gray-100",
                                    children: (0, s.jsx)("div", {
                                      className: "flex-1 min-w-0",
                                      children: (0, s.jsx)("div", {
                                        className:
                                          "text-xs text-gray-600 font-mono truncate",
                                        children: t.replace(/^https?:\/\//, ""),
                                      }),
                                    }),
                                  }),
                                ],
                              },
                              e.id
                            );
                          }),
                        }),
                        N.total > 3 &&
                          (0, s.jsx)("div", {
                            className: "mt-2 text-center",
                            children: (0, s.jsxs)(m.ZP, {
                              type: "link",
                              onClick: () =>
                                r.push("/dashboard/pages/".concat(t, "/guest")),
                              className: "!text-sm",
                              children: ["Xem tất cả (", N.total, " kh\xe1ch)"],
                            }),
                          }),
                      ],
                    })
                  : (0, s.jsxs)("div", {
                      className:
                        "text-center py-8 text-gray-500 flex flex-col items-center gap-2",
                      children: [
                        (0, s.jsx)("span", {
                          children: "Chưa c\xf3 lời mời n\xe0o.",
                        }),
                        (0, s.jsx)(m.ZP, {
                          type: "primary",
                          onClick: w,
                          icon: (0, s.jsx)(er.Z, {}),
                          children: (0, s.jsx)("span", {
                            className: "hidden md:inline",
                            children: "Tạo lời mời đầu ti\xean",
                          }),
                        }),
                      ],
                    }),
            }),
            (0, s.jsx)(ep, { open: x, onClose: () => p(!1), hasAccess: j }),
            (0, s.jsx)(ef.Z, {
              open: c,
              onCancel: () => d(!1),
              pageId: "quy-hai-220326" || "",
            }),
            (0, s.jsx)(ev.Z, {
              open: h,
              onClose: () => u(!1),
              pageId: "quy-hai-220326" || "",
              pageName: l ? "page" : void 0,
            }),
          ],
        });
      }
      var eb = n(70450),
        ey = n(27635),
        eN = n(9109);
      function ew(e) {
        let { url: t, name: n, open: a, onCancel: l } = e,
          [r, c] = (0, i.useState)(!1),
          d = (e, t) => {
            let n = document.createElement("a");
            (n.download = t),
              (n.href = e),
              document.body.appendChild(n),
              n.click(),
              document.body.removeChild(n);
          },
          u = async () => {
            var e;
            c(!0);
            let t =
              null === (e = document.getElementById("qrcode-container")) ||
              void 0 === e
                ? void 0
                : e.querySelector("canvas");
            if (!t) {
              o.ZP.error("Kh\xf4ng t\xecm thấy QR code!");
              return;
            }
            try {
              t.toBlob(async (e) => {
                if (!e) {
                  o.ZP.error("Kh\xf4ng thể tạo ảnh QR code!");
                  return;
                }
                await navigator.clipboard.write([
                  new ClipboardItem({ "image/png": e }),
                ]),
                  o.ZP.success("Đ\xe3 sao ch\xe9p QR code v\xe0o clipboard!");
              }, "image/png"),
                c(!1);
            } catch (e) {
              o.ZP.error("Kh\xf4ng thể sao ch\xe9p QR code!"), c(!1);
            }
          };
        return (0, s.jsx)(h.default, {
          title: (0, s.jsxs)("div", {
            className: "flex items-center gap-2",
            children: [
              (0, s.jsx)(_.Z, {
                weight: "BoldDuotone",
                color: "#0f4159",
                size: 24,
              }),
              (0, s.jsxs)("span", { children: ["QR Code - ", n] }),
            ],
          }),
          open: a,
          onCancel: l,
          footer: (0, s.jsx)(s.Fragment, {
            children: (0, s.jsxs)("div", {
              className: "flex items-center gap-2 justify-center",
              children: [
                (0, s.jsx)(m.ZP, {
                  type: "default",
                  icon: (0, s.jsx)(B.Z, {
                    weight: "LineDuotone",
                    color: "#0f4159",
                  }),
                  onClick: u,
                  loading: r,
                  children: "Sao ch\xe9p Ảnh",
                }),
                (0, s.jsx)(m.ZP, {
                  type: "primary",
                  icon: (0, s.jsx)(ey.Z, {
                    weight: "LineDuotone",
                    color: "#0f4159",
                  }),
                  onClick: () => {
                    var e;
                    c(!0);
                    let t =
                      null ===
                        (e = document.getElementById("qrcode-container")) ||
                      void 0 === e
                        ? void 0
                        : e.querySelector("canvas");
                    t &&
                      (d(
                        t.toDataURL("image/png"),
                        "qrcode-".concat(Date.now(), ".png")
                      ),
                      o.ZP.success("Đ\xe3 tải xuống QR code!"),
                      c(!1));
                  },
                  loading: r,
                  children: "Tải xuống",
                }),
              ],
            }),
          }),
          children: (0, s.jsxs)("div", {
            className: "flex flex-col items-center gap-4 py-6",
            children: [
              (0, s.jsx)("div", {
                style: {
                  padding: "20px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
                },
                id: "qrcode-container",
                children: (0, s.jsx)(eN.Z, {
                  value: t,
                  type: "canvas",
                  size: 350,
                  color: "#000000",
                }),
              }),
              (0, s.jsx)("div", {
                className: "w-full p-4 rounded-lg",
                style: {
                  background: "rgb(240, 245, 255)",
                  border: "1px solid rgb(173, 198, 255)",
                },
                children: (0, s.jsx)("div", {
                  className: " flex gap-2",
                  children: (0, s.jsxs)("div", {
                    className: " text-xs text-gray-700",
                    children: [
                      (0, s.jsx)("div", {
                        className: "font-semibold mb-2 text-sm text-gray-800",
                        children: "\uD83D\uDCA1 \xdd tưởng sử dụng QR code:",
                      }),
                      (0, s.jsxs)("div", {
                        className: "space-y-2",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "flex items-start gap-2",
                            children: [
                              (0, s.jsx)("span", {
                                className: "text-blue-600 font-medium",
                                children: "•",
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  (0, s.jsx)("strong", {
                                    children: "Thiệp giấy:",
                                  }),
                                  " In QR v\xe0o thiệp mời để kh\xe1ch xem thiệp online v\xe0 gửi lời ch\xfac ngay",
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-start gap-2",
                            children: [
                              (0, s.jsx)("span", {
                                className: "text-blue-600 font-medium",
                                children: "•",
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  (0, s.jsx)("strong", {
                                    children: "Ảnh cưới:",
                                  }),
                                  " Th\xeam QR v\xe0o ảnh cưới để lưu giữ kỷ niệm, kh\xe1ch qu\xe9t để gửi lời ch\xfac",
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-start gap-2",
                            children: [
                              (0, s.jsx)("span", {
                                className: "text-blue-600 font-medium",
                                children: "•",
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  (0, s.jsx)("strong", {
                                    children: "Cổng hoa/Backdrop:",
                                  }),
                                  " In QR lớn để kh\xe1ch qu\xe9t v\xe0 tương t\xe1c ngay tại tiệc",
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "flex items-start gap-2",
                            children: [
                              (0, s.jsx)("span", {
                                className: "text-blue-600 font-medium",
                                children: "•",
                              }),
                              (0, s.jsxs)("span", {
                                children: [
                                  (0, s.jsx)("strong", {
                                    children: "Standee:",
                                  }),
                                  " Đặt QR ở lối v\xe0o, kh\xe1ch qu\xe9t để check-in v\xe0 gửi lời ch\xfac",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
      var ek = n(50209),
        eZ = n(50810),
        eC = n(59646),
        eP = n(14631),
        eL = n(11266);
      let eT = {
          "thiep-cuoi": {
            name: "thiệp cưới",
            message:
              "Đừng để gi\xe1n đoạn ng\xe0y trọng đại của bạn! Thiệp cưới online cần hoạt động ổn định để kh\xe1ch mời c\xf3 thể xem v\xe0 gửi tới những lời ch\xfac \xfd nghĩa.",
            icon: "solar:heart-bold",
            color: "#ff6b9d",
          },
          "thiep-sinh-nhat": {
            name: "thiệp sinh nhật",
            message:
              "Đừng để gi\xe1n đoạn bữa tiệc sinh nhật! H\xe3y đảm bảo kh\xe1ch mời lu\xf4n c\xf3 thể truy cập thiệp v\xe0 gửi lời ch\xfac.",
            icon: "solar:cake-minimalistic-bold",
            color: "#4ecdc4",
          },
          "thiep-tot-nghiep": {
            name: "thiệp tốt nghiệp",
            message:
              "Đừng để gi\xe1n đoạn kỷ niệm tốt nghiệp quan trọng! Chia sẻ niềm vui với bạn b\xe8 v\xe0 gia đ\xecnh một c\xe1ch trọn vẹn.",
            icon: "solar:diploma-verified-bold",
            color: "#45b7d1",
          },
          "su-kien": {
            name: "thiệp sự kiện",
            message:
              "Đừng để gi\xe1n đoạn sự kiện quan trọng của bạn! Đảm bảo kh\xe1ch mời lu\xf4n c\xf3 thể truy cập th\xf4ng tin sự kiện.",
            icon: "solar:calendar-mark-bold",
            color: "#96ceb4",
          },
          "ky-niem": {
            name: "thiệp kỷ niệm",
            message:
              "Đừng để gi\xe1n đoạn những kỷ niệm đẹp! Lưu giữ v\xe0 chia sẻ những khoảnh khắc \xfd nghĩa một c\xe1ch trọn vẹn.",
            icon: "solar:camera-bold",
            color: "#feca57",
          },
          "loi-chuc": {
            name: "thiệp lời ch\xfac",
            message:
              "Đừng để gi\xe1n đoạn những lời ch\xfac \xfd nghĩa! H\xe3y đảm bảo mọi người lu\xf4n c\xf3 thể gửi v\xe0 nhận lời ch\xfac.",
            icon: "solar:letter-bold",
            color: "#ff9ff3",
          },
        },
        eS = {
          name: "thiệp online",
          message:
            "Đừng để gi\xe1n đoạn thiệp quan trọng của bạn! H\xe3y n\xe2ng cấp để đảm bảo thiệp lu\xf4n hoạt động ổn định.",
          icon: "solar:document-text-bold",
          color: "#6c5ce7",
        };
      function eI(e) {
        if (e <= 0) return "-";
        if (e < 12) return "".concat(e, " th\xe1ng");
        let t = Math.floor(e / 12);
        return 1 === t ? "1 năm" : "".concat(t, " năm");
      }
      function eD(e) {
        var t;
        let { visible: n, onClose: l, categoryId: r } = e,
          c = (0, a.useRouter)(),
          [o, d] = (0, i.useState)(!1),
          { data: u } = (0, eP.x)(),
          x = (0, i.useCallback)(
            (e) => {
              l(),
                c.push(
                  "/payment/upgrade?plan=".concat(
                    e.toUpperCase(),
                    "&utm_source=export_after"
                  )
                );
            },
            [l, c]
          );
        (0, i.useEffect)(() => {
          let e = () => d(window.innerWidth <= 768);
          return (
            e(),
            window.addEventListener("resize", e),
            () => window.removeEventListener("resize", e)
          );
        }, []);
        let g = null !== (t = eT[r || ""]) && void 0 !== t ? t : eS,
          p = (0, i.useMemo)(() => {
            let e =
                null == u
                  ? void 0
                  : u.find((e) => {
                      var t;
                      return (
                        (null === (t = e.code) || void 0 === t
                          ? void 0
                          : t.toUpperCase()) === "FREE"
                      );
                    }),
              t =
                null == u
                  ? void 0
                  : u.find((e) => {
                      var t;
                      return (
                        (null === (t = e.code) || void 0 === t
                          ? void 0
                          : t.toUpperCase()) === "BASIC"
                      );
                    }),
              n =
                null == u
                  ? void 0
                  : u.find((e) => {
                      var t;
                      return (
                        (null === (t = e.code) || void 0 === t
                          ? void 0
                          : t.toUpperCase()) === "PREMIUM"
                      );
                    }),
              s = (e) => {
                var t, n;
                if (!e) return { price: 0, original: 0, discount: 0 };
                let s = null !== (t = e.price) && void 0 !== t ? t : 0,
                  i = null !== (n = e.discount) && void 0 !== n ? n : 0;
                return {
                  price: Math.max(Math.round(s - (s * i) / 100), 0),
                  original: s,
                  discount: i,
                };
              };
            return {
              free: {
                views: (0, eL.iX)(null == e ? void 0 : e.config, "view"),
                images: (0, eL.iX)(null == e ? void 0 : e.config, "image"),
                duration: eI((0, eL.zz)(null == e ? void 0 : e.config)),
              },
              basic: {
                ...s(t),
                views: (0, eL.iX)(null == t ? void 0 : t.config, "view"),
                images: (0, eL.iX)(null == t ? void 0 : t.config, "image"),
                duration: eI((0, eL.zz)(null == t ? void 0 : t.config)),
              },
              premium: {
                ...s(n),
                views: (0, eL.iX)(null == n ? void 0 : n.config, "view"),
                images: (0, eL.iX)(null == n ? void 0 : n.config, "image"),
                duration: eI((0, eL.zz)(null == n ? void 0 : n.config)),
              },
            };
          }, [u]);
        return (0, s.jsx)(h.default, {
          open: n,
          onCancel: l,
          footer: null,
          centered: !0,
          width: o ? "100%" : 720,
          closable: !0,
          maskClosable: !0,
          styles: { body: { padding: 0 } },
          className: "export-after-modal",
          children: (0, s.jsxs)("div", {
            className: "max-h-[90vh] overflow-y-auto",
            children: [
              (0, s.jsxs)("div", {
                className:
                  "relative overflow-hidden px-6 pt-8 pb-6 rounded-2xl",
                style: {
                  background: "linear-gradient(135deg, "
                    .concat(g.color, "18 0%, ")
                    .concat(g.color, "08 100%)"),
                  borderBottom: "2px solid ".concat(g.color, "30"),
                },
                children: [
                  (0, s.jsx)("div", {
                    className: "absolute top-4 right-4 opacity-20",
                    children: (0, s.jsx)(eC.Icon, {
                      icon: g.icon,
                      className: "text-6xl",
                      style: { color: g.color },
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 text-sm font-medium mb-4",
                        style: { color: g.color },
                        children: [
                          (0, s.jsx)(eC.Icon, { icon: "solar:star-bold" }),
                          "Ch\xfac mừng bạn đ\xe3 xuất bản!",
                        ],
                      }),
                      (0, s.jsxs)("h2", {
                        className: "text-xl md:text-2xl text-gray-800 m-0 mb-2",
                        children: ["Bảo vệ ", g.name, " của bạn"],
                      }),
                      (0, s.jsx)("p", {
                        className:
                          "text-gray-600 text-sm md:text-base m-0 max-w-lg",
                        children: g.message,
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className:
                  "mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200 flex gap-3",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center",
                    children: (0, s.jsx)(eC.Icon, {
                      icon: "solar:danger-triangle-bold",
                      className: "text-lg text-amber-600",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("p", {
                        className: "font-semibold text-amber-900 m-0 mb-0.5",
                        children:
                          p.free.views > 0
                            ? "G\xf3i Free chỉ c\xf3 ".concat(
                                p.free.views.toLocaleString(),
                                " lượt xem"
                              )
                            : "G\xf3i Free c\xf3 giới hạn lượt xem",
                      }),
                      (0, s.jsxs)("p", {
                        className: "text-sm text-amber-800 m-0 opacity-90",
                        children: [
                          "Khi đạt giới hạn, ",
                          g.name,
                          " sẽ kh\xf4ng thể truy cập. Kh\xe1ch mời kh\xf4ng xem được thiệp v\xe0 gửi lời ch\xfac.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "mt-6 mb-4",
                children: [
                  (0, s.jsx)("p", {
                    className:
                      "text-base font-bold text-gray-800 mb-4 tracking-tight",
                    children: "Chọn g\xf3i ph\xf9 hợp với bạn",
                  }),
                  (0, s.jsxs)("div", {
                    className: "grid ".concat(
                      o ? "grid-cols-1" : "grid-cols-2",
                      " gap-4"
                    ),
                    children: [
                      (0, s.jsxs)("div", {
                        className:
                          "relative rounded-2xl border border-blue-400 bg-white p-5 shadow-md hover:shadow-blue-200/40 transition-shadow",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "absolute -top-2.5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full",
                            children: "Lựa chọn phổ biến",
                          }),
                          (0, s.jsx)("h3", {
                            className: "text-lg text-gray-800 mt-1 mb-3",
                            children: "Basic",
                          }),
                          (0, s.jsx)("div", {
                            className: "mb-4",
                            children:
                              0 === p.basic.original
                                ? (0, s.jsx)("span", {
                                    className:
                                      "text-2xl font-bold text-green-600",
                                    children: "Miễn ph\xed",
                                  })
                                : p.basic.discount > 0
                                ? (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex items-center gap-2 flex-wrap",
                                        children: (0, s.jsxs)("span", {
                                          className:
                                            "text-2xl font-bold text-blue-600",
                                          children: [
                                            p.basic.price.toLocaleString(
                                              "vi-VN"
                                            ),
                                            "đ",
                                          ],
                                        }),
                                      }),
                                      (0, s.jsxs)("span", {
                                        className:
                                          "text-sm text-gray-500 line-through",
                                        children: [
                                          p.basic.original.toLocaleString(
                                            "vi-VN"
                                          ),
                                          "đ",
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, s.jsxs)("span", {
                                    className:
                                      "text-2xl font-bold text-blue-600",
                                    children: [
                                      p.basic.original.toLocaleString("vi-VN"),
                                      "đ",
                                    ],
                                  }),
                          }),
                          (0, s.jsxs)("ul", {
                            className: "space-y-1.5 text-sm text-gray-600 mb-4",
                            children: [
                              (0, s.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(eC.Icon, {
                                    icon: "solar:check-circle-bold",
                                    className: "text-blue-500 text-base",
                                  }),
                                  p.basic.views > 0
                                    ? "".concat(
                                        p.basic.views.toLocaleString(),
                                        " lượt xem"
                                      )
                                    : "Lượt xem trang",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(eC.Icon, {
                                    icon: "solar:check-circle-bold",
                                    className: "text-blue-500 text-base",
                                  }),
                                  p.basic.images > 0
                                    ? "".concat(
                                        p.basic.images.toLocaleString(),
                                        " ảnh/thiệp"
                                      )
                                    : "Ảnh tải l\xean",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(eC.Icon, {
                                    icon: "solar:check-circle-bold",
                                    className: "text-blue-500 text-base",
                                  }),
                                  "Lưu trữ ",
                                  p.basic.duration,
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)(m.ZP, {
                            block: !0,
                            size: "large",
                            onClick: () => x("basic"),
                            className:
                              "h-11 font-semibold border-2 border-blue-500 text-blue-600 bg-white hover:bg-blue-50 hover:border-blue-600",
                            children: [
                              (0, s.jsx)(eC.Icon, {
                                icon: "solar:medal-star-bold",
                                className: "mr-2",
                              }),
                              "Chọn Basic",
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          "relative rounded-2xl border border-orange-400 bg-white p-5 shadow-md hover:shadow-orange-200/40 transition-shadow",
                        children: [
                          (0, s.jsx)("span", {
                            className:
                              "absolute -top-2.5 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full",
                            children: "Ưu đ\xe3i đặc biệt",
                          }),
                          (0, s.jsx)("h3", {
                            className: "text-lg text-gray-800 mt-1 mb-3",
                            children: "Premium",
                          }),
                          (0, s.jsx)("div", {
                            className: "mb-4",
                            children:
                              0 === p.premium.original
                                ? (0, s.jsx)("span", {
                                    className:
                                      "text-2xl font-bold text-green-600",
                                    children: "Miễn ph\xed",
                                  })
                                : p.premium.discount > 0
                                ? (0, s.jsxs)("div", {
                                    children: [
                                      (0, s.jsx)("div", {
                                        className:
                                          "flex items-center gap-2 flex-wrap",
                                        children: (0, s.jsxs)("span", {
                                          className:
                                            "text-2xl font-bold text-orange-500",
                                          children: [
                                            p.premium.price.toLocaleString(
                                              "vi-VN"
                                            ),
                                            "đ",
                                          ],
                                        }),
                                      }),
                                      (0, s.jsxs)("span", {
                                        className:
                                          "text-sm text-gray-500 line-through",
                                        children: [
                                          p.premium.original.toLocaleString(
                                            "vi-VN"
                                          ),
                                          "đ",
                                        ],
                                      }),
                                    ],
                                  })
                                : (0, s.jsxs)("span", {
                                    className:
                                      "text-2xl font-bold text-orange-500",
                                    children: [
                                      p.premium.original.toLocaleString(
                                        "vi-VN"
                                      ),
                                      "đ",
                                    ],
                                  }),
                          }),
                          (0, s.jsxs)("ul", {
                            className: "space-y-1.5 text-sm text-gray-600 mb-4",
                            children: [
                              (0, s.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(eC.Icon, {
                                    icon: "solar:check-circle-bold",
                                    className: "text-orange-500 text-base",
                                  }),
                                  p.premium.views > 0
                                    ? "".concat(
                                        p.premium.views.toLocaleString(),
                                        " lượt xem"
                                      )
                                    : "Lượt xem trang",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(eC.Icon, {
                                    icon: "solar:check-circle-bold",
                                    className: "text-orange-500 text-base",
                                  }),
                                  p.premium.images > 0
                                    ? "".concat(
                                        p.premium.images.toLocaleString(),
                                        " ảnh/thiệp"
                                      )
                                    : "Ảnh tải l\xean",
                                ],
                              }),
                              (0, s.jsxs)("li", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, s.jsx)(eC.Icon, {
                                    icon: "solar:check-circle-bold",
                                    className: "text-orange-500 text-base",
                                  }),
                                  "Lưu trữ ",
                                  p.premium.duration,
                                ],
                              }),
                            ],
                          }),
                          (0, s.jsxs)(m.ZP, {
                            type: "primary",
                            block: !0,
                            size: "large",
                            onClick: () => x("premium"),
                            className:
                              "h-11 font-semibold bg-gradient-to-r from-orange-500 to-orange-600 border-0 hover:from-orange-600 hover:to-orange-700",
                            children: [
                              (0, s.jsx)(eC.Icon, {
                                icon: "solar:crown-bold",
                                className: "mr-2",
                              }),
                              "Chọn Premium",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("p", {
                    className:
                      "text-center text-xs text-orange-600 mt-4 font-medium",
                    children: "⏰ Ưu đ\xe3i c\xf3 thời hạn — Tiết kiệm đến 50%",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      let ez = { "0%": "#87d068", "100%": "#ffe58f" };
      function eR() {
        var e, t, n, G, X, W, H, Y, J, ee, et, en, es, ea, el, er;
        let ec = (0, S.a)("(max-width: 768px)"),
          eo = (0, a.useParams)(),
          ed = (0, a.useRouter)(),
          eh = (0, a.useSearchParams)(),
          em = null == eo ? void 0 : eo.id,
          eu = (0, l.NL)(),
          [ex, eg] = i.useState(!1),
          [ep, ef] = i.useState(!1),
          {
            data: ev,
            isLoading: ey,
            isFetching: eN,
            error: eC,
          } = (0, r.qt)(em),
          eP = (0, r.RT)(),
          eL = (0, r.yB)(),
          eT = (0, r.Kc)(),
          eS = (0, k.xe)({
            enabled: !!(null == ev
              ? void 0
              : null === (e = ev.page) || void 0 === e
              ? void 0
              : e.id),
          }),
          eI = (0, k.$T)({
            enabled: !!(null == ev
              ? void 0
              : null === (t = ev.page) || void 0 === t
              ? void 0
              : t.id),
          }),
          { data: eR } = (0, Z.Pi)(),
          [eB, eE] = i.useState(!1),
          { data: eK } = (0, c.L_)({ isActive: !0, limit: 100 });
        i.useEffect(() => {
          if (eC && !ex) {
            let e =
              (null == eC ? void 0 : eC.message) ||
              "Trang kh\xf4ng tồn tại hoặc bạn kh\xf4ng c\xf3 quyền xem";
            o.ZP.error(e), ed.replace("/dashboard/pages");
          }
        }, [eC, ed, ex]),
          (0, i.useEffect)(() => {
            var e, t, n;
            if (!em || ey || "1" !== eh.get("new") || void 0 === eR) return;
            let s =
                null == eR
                  ? void 0
                  : null === (n = eR.plan) || void 0 === n
                  ? void 0
                  : null === (t = n.code) || void 0 === t
                  ? void 0
                  : null === (e = t.toUpperCase) || void 0 === e
                  ? void 0
                  : e.call(t),
              i = new URL(window.location.href);
            i.searchParams.delete("new"),
              window.history.replaceState({}, "", i.pathname + i.search),
              "FREE" === s && ef(!0);
          }, [em, ey, eh, eR]);
        let eq = ey || eN,
          eF = null == ev ? void 0 : ev.page,
          eU = null == ev ? void 0 : ev.statistics,
          e_ = i.useMemo(() => {
            if (
              !(null == eF ? void 0 : eF.categoryId) ||
              !(null == eK ? void 0 : eK.items)
            )
              return "";
            let e = eK.items.find((e) => e.id === eF.categoryId);
            return (null == e ? void 0 : e.name) || "";
          }, [null == eF ? void 0 : eF.categoryId, eK]),
          eO = i.useMemo(() => {
            var e;
            if (
              !(null == eF ? void 0 : eF.categoryId) ||
              !(null == eK ? void 0 : eK.items)
            )
              return;
            let t = eK.items.find((e) => e.id === eF.categoryId);
            return null !== (e = null == t ? void 0 : t.idCat) && void 0 !== e
              ? e
              : void 0;
          }, [null == eF ? void 0 : eF.categoryId, eK]),
          [eA, eQ] = i.useState(!1),
          [eM, eV] = i.useState((null == eF ? void 0 : eF.name) || ""),
          [eG, eX] = i.useState(!1),
          [eW, eH] = i.useState(!1);
        (0, i.useEffect)(() => {
          (null == eF ? void 0 : eF.name) &&
            (document.title = "".concat(eF.name, " | quyctd"));
        }, [null == eF ? void 0 : eF.name]);
        let [eY] = d.Z.useForm();
        i.useEffect(() => {
          eV((null == eF ? void 0 : eF.name) || "");
        }, [null == eF ? void 0 : eF.name]);
        let e$ = async () => {
            if (!em) return;
            let e = (eM || "").trim();
            if (!e) {
              o.ZP.warning("T\xean kh\xf4ng được để trống");
              return;
            }
            try {
              await eP.mutateAsync({ id: em, data: { name: e } }),
                o.ZP.success("Đ\xe3 cập nhật t\xean thiệp"),
                eQ(!1);
            } catch (e) {
              o.ZP.error(
                (null == e ? void 0 : e.message) || "Cập nhật thất bại"
              );
            }
          },
          eJ = async (e) => {
            if (em)
              try {
                await eP.mutateAsync({
                  id: em,
                  data: { status: e ? r.ti.published : r.ti.draft },
                }),
                  o.ZP.success(
                    "Đ\xe3 ".concat(
                      e ? "xuất bản" : "chuyển về nh\xe1p",
                      " thiệp"
                    )
                  );
              } catch (e) {
                o.ZP.error(
                  (null == e ? void 0 : e.message) ||
                    "Cập nhật trạng th\xe1i thất bại"
                );
              }
          },
          e0 = async (e) => {
            if (em)
              try {
                await eP.mutateAsync({ id: em, data: { slug: e.slug } }),
                  o.ZP.success("Đ\xe3 cập nhật URL t\xf9y chỉnh"),
                  eX(!1),
                  eY.resetFields();
              } catch (e) {
                o.ZP.error(
                  (null == e ? void 0 : e.message) || "Cập nhật URL thất bại"
                );
              }
          },
          e1 =
            null !==
              (J =
                null === (G = eS.data) || void 0 === G
                  ? void 0
                  : null === (n = G.limits) || void 0 === n
                  ? void 0
                  : n.maxViews) && void 0 !== J
              ? J
              : 0,
          e2 =
            null !==
              (et =
                null !==
                  (ee =
                    null === (X = eI.data) || void 0 === X
                      ? void 0
                      : X.totalViews) && void 0 !== ee
                  ? ee
                  : null == eU
                  ? void 0
                  : eU.viewCount) && void 0 !== et
              ? et
              : 0,
          e5 = Math.max(0, (e1 || 0) - (e2 || 0)),
          e4 = e1 ? Math.min(100, Math.round(((e2 || 0) / e1) * 100)) : 0,
          e6 = (null == eF ? void 0 : eF.expirationDate)
            ? new Date(eF.expirationDate)
            : void 0,
          e3 = new Date(),
          e9 = e6 ? Math.max(0, e6.getTime() - e3.getTime()) : 0,
          e8 = e6 ? Math.floor(e9 / 864e5) : void 0,
          e7 =
            e6 && (null == eF ? void 0 : eF.createdAt)
              ? Math.floor(
                  (e6.getTime() - new Date(eF.createdAt).getTime()) / 864e5
                )
              : 0,
          te = e7 > 0 ? e7 - (e8 || 0) : 0,
          tt = e7 > 0 ? Math.min(100, Math.round((te / e7) * 100)) : 0,
          tn = async () => {
            if (em)
              try {
                let e = await eL.mutateAsync(em);
                o.ZP.success("Đ\xe3 nh\xe2n bản thiệp"),
                  ed.push("/dashboard/pages/".concat(e.id));
              } catch (e) {
                o.ZP.error(
                  (null == e ? void 0 : e.message) ||
                    "Nh\xe2n bản thiệp thất bại"
                );
              }
          },
          ts = async () => {
            if (em) {
              eE(!0);
              try {
                await eP.mutateAsync({ id: em, data: {} }),
                  o.ZP.success("Đ\xe3 kiểm tra thiệp");
              } catch (e) {
                (null == e ? void 0 : e.message.includes("Page expired"))
                  ? o.ZP.error(
                      "Thiệp đ\xe3 hết hạn, vui l\xf2ng gia hạn thời gian sử dụng."
                    )
                  : o.ZP.error(
                      (null == e ? void 0 : e.message) || "Kiểm tra thất bại"
                    );
              }
            }
          },
          [ti, ta] = i.useState(!1),
          tl = ""
            .concat("https://zenlove.me", "/s/")
            .concat(
              (null == eF ? void 0 : eF.slug) || (null == eF ? void 0 : eF.id)
            ),
          tr = e_ && e_.toLowerCase().includes("cưới");
        return (0, s.jsxs)("div", {
          className: "space-y-3 md:space-y-4",
          children: [
            (0, s.jsx)(eZ.Z, {
              showBack: !0,
              items: [
                {
                  href: "/dashboard",
                  title: "Trang chủ",
                  icon: "solar:home-smile-bold",
                },
                {
                  href: "/dashboard/pages",
                  title: "Thiệp của t\xf4i",
                  icon: "solar:document-bold",
                },
                {
                  title: "".concat(
                    (null == eF ? void 0 : eF.name) || "Chi tiết thiệp"
                  ),
                },
              ],
            }),
            (0, s.jsxs)("div", {
              className:
                "flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3",
              children: [
                (0, s.jsx)("div", {
                  className: "flex items-center gap-2 bg-lightgray",
                  children: (0, s.jsx)("h1", {
                    className:
                      "flex-1 text-lg md:text-2xl m-0 max-w-[200px] md:max-w-[400px] truncate",
                    children:
                      (null == eF ? void 0 : eF.name) || "Chi tiết thiệp",
                  }),
                }),
                (0, s.jsx)("div", {
                  className: "flex items-center gap-2",
                  children:
                    em &&
                    (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsxs)(m.ZP, {
                          type: "primary",
                          onClick: () =>
                            window.open(
                              ""
                                .concat("https://zenlove.me", "/s/")
                                .concat(
                                  (null == eF ? void 0 : eF.slug) ||
                                    (null == eF ? void 0 : eF.id)
                                ),
                              "_blank"
                            ),
                          icon: (0, s.jsx)(R.Z, {
                            weight: "LineDuotone",
                            color: "#0f4159",
                          }),
                          disabled:
                            (null == eF ? void 0 : eF.status) === r.ti.expired,
                          children: [
                            (0, s.jsx)("span", {
                              className: "hidden md:inline",
                              children: "Xem trang",
                            }),
                            (0, s.jsx)("span", {
                              className: "inline md:hidden",
                              children: "Xem",
                            }),
                          ],
                        }),
                        (0, s.jsx)(m.ZP, {
                          type: "primary",
                          onClick: tn,
                          icon: (0, s.jsx)(B.Z, {
                            weight: "LineDuotone",
                            color: "#0f4159",
                          }),
                          children: (0, s.jsx)("span", {
                            className: "",
                            children: "Nh\xe2n bản",
                          }),
                        }),
                        (0, s.jsxs)(m.ZP, {
                          type: "primary",
                          onClick: () => ed.push("/design/".concat(em)),
                          icon: (0, s.jsx)(E.Z, {
                            weight: "LineDuotone",
                            color: "#0f4159",
                          }),
                          disabled:
                            (null == eF ? void 0 : eF.status) === r.ti.expired,
                          children: [
                            (0, s.jsx)("span", {
                              className: "hidden md:inline",
                              children: "Chỉnh sửa",
                            }),
                            (0, s.jsx)("span", {
                              className: "inline md:hidden",
                              children: "Sửa",
                            }),
                          ],
                        }),
                        (0, s.jsx)(m.ZP, {
                          type: "default",
                          danger: !0,
                          onClick: () => {
                            em &&
                              h.default.confirm({
                                title: "X\xe1c nhận x\xf3a thiệp",
                                content: (0, s.jsxs)("div", {
                                  className: "space-y-2",
                                  children: [
                                    (0, s.jsxs)("p", {
                                      children: [
                                        "Bạn c\xf3 chắc chắn muốn x\xf3a thiệp",
                                        " ",
                                        (0, s.jsxs)("strong", {
                                          children: [
                                            '"',
                                            null == eF ? void 0 : eF.name,
                                            '"',
                                          ],
                                        }),
                                        " kh\xf4ng?",
                                      ],
                                    }),
                                    (0, s.jsx)("p", {
                                      className: "text-red-500 text-sm",
                                      children:
                                        "⚠️ H\xe0nh động n\xe0y kh\xf4ng thể ho\xe0n t\xe1c!",
                                    }),
                                  ],
                                }),
                                okText: "X\xf3a",
                                cancelText: "Hủy",
                                okType: "danger",
                                icon: (0, s.jsx)(z.Z, {
                                  weight: "BoldDuotone",
                                  size: 24,
                                  color: "#d42717",
                                }),
                                onOk: async () => {
                                  try {
                                    eg(!0),
                                      eu.cancelQueries({
                                        queryKey: ["page", em],
                                      }),
                                      await eT.mutateAsync(em),
                                      eu.removeQueries({
                                        queryKey: ["page", em],
                                      }),
                                      o.ZP.success("Đ\xe3 x\xf3a thiệp"),
                                      ed.replace("/dashboard/pages");
                                  } catch (e) {
                                    eg(!1),
                                      o.ZP.error(
                                        (null == e ? void 0 : e.message) ||
                                          "X\xf3a thiệp thất bại"
                                      );
                                  }
                                },
                              });
                          },
                          icon: (0, s.jsx)(K.Z, {
                            weight: "LineDuotone",
                            color: "#0f4159",
                          }),
                          children: (0, s.jsx)("span", {
                            className: "hidden md:inline",
                            children: "X\xf3a",
                          }),
                        }),
                      ],
                    }),
                }),
              ],
            }),
            !eq &&
              eF &&
              (null == eF ? void 0 : eF.status) === r.ti.expired &&
              (0, s.jsx)(u.Z, {
                className:
                  "!flex flex-col gap-2 items-center text-center md:text-left md:flex-row md:gap-0",
                message:
                  "Thiệp đ\xe3 hết hạn, bạn c\xf3 thể gia hạn thời gian sử dụng để tiếp tục sử dụng thiệp n\xe0y.",
                type: "error",
                showIcon: !ec,
                action: (0, s.jsxs)("div", {
                  className: "flex items-center gap-2",
                  children: [
                    !eB &&
                      (0, s.jsx)(m.ZP, {
                        type: "primary",
                        onClick: ts,
                        icon: (0, s.jsx)(q.Z, {
                          weight: "LineDuotone",
                          color: "#0f4159",
                        }),
                        loading: eq,
                        children: "Kiểm tra",
                      }),
                    (0, s.jsx)(m.ZP, {
                      type: "primary",
                      onClick: () => ed.push("/dashboard/pages"),
                      icon: (0, s.jsx)(F.Z, {
                        weight: "LineDuotone",
                        color: "#0f4159",
                      }),
                      children: "Gia hạn",
                    }),
                  ],
                }),
              }),
            (0, s.jsx)(x.Z, {
              content: (null == eF ? void 0 : eF.status) === r.ti.expired && [
                "@quyctd",
                "Hết hạn",
              ],
              children: (0, s.jsx)(g.Z, {
                children: eq
                  ? (0, s.jsxs)("div", {
                      className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                      children: [
                        (0, s.jsx)(p.Z.Image, {
                          active: !0,
                          style: { width: "100%", height: 260 },
                        }),
                        (0, s.jsx)("div", {
                          className: "md:col-span-2 space-y-3",
                          children: (0, s.jsx)(p.Z, {
                            active: !0,
                            paragraph: { rows: 6 },
                          }),
                        }),
                      ],
                    })
                  : eF
                  ? (0, s.jsxs)(f.Z, {
                      gutter: 24,
                      children: [
                        eA
                          ? (0, s.jsx)(v.Z, {
                              span: 24,
                              children: (0, s.jsxs)("div", {
                                className: "flex items-center gap-2 mb-4",
                                children: [
                                  (0, s.jsx)(j.default, {
                                    value: eM,
                                    onChange: (e) => eV(e.target.value),
                                    size: "large",
                                    className: "flex-1",
                                    placeholder: "Nhập t\xean thiệp",
                                  }),
                                  (0, s.jsx)(m.ZP, {
                                    type: "primary",
                                    size: "large",
                                    shape: "circle",
                                    icon: (0, s.jsx)(U.Z, {
                                      weight: "LineDuotone",
                                      color: "#0f4159",
                                      className: "w-8 h-8 !block",
                                    }),
                                    loading: eP.isPending,
                                    onClick: e$,
                                  }),
                                  (0, s.jsx)(m.ZP, {
                                    size: "large",
                                    shape: "circle",
                                    icon: (0, s.jsx)(P.Z, {}),
                                    onClick: () => {
                                      eQ(!1), eV(eF.name);
                                    },
                                  }),
                                ],
                              }),
                            })
                          : null,
                        (0, s.jsx)(v.Z, {
                          xs: 24,
                          lg: 7,
                          children: (0, s.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              !eA &&
                                (0, s.jsx)("div", {
                                  className:
                                    "flex items-center justify-between gap-2",
                                  children: (0, s.jsxs)("div", {
                                    className:
                                      "flex-1 flex items-center gap-2 min-w-0",
                                    children: [
                                      (0, s.jsx)("div", {
                                        className: "text-lg font-semibold",
                                        children: eF.name,
                                      }),
                                      (0, s.jsx)(L.Z, {
                                        title: "Sửa t\xean",
                                        children: (0, s.jsx)(m.ZP, {
                                          shape: "circle",
                                          icon: (0, s.jsx)(E.Z, {
                                            weight: "LineDuotone",
                                            color: "#0f4159",
                                          }),
                                          onClick: () => eQ(!0),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                              (0, s.jsxs)("div", {
                                className:
                                  "relative aspect-video bg-gray-100 rounded flex items-center justify-center overflow-hidden",
                                children: [
                                  (0, s.jsx)("img", {
                                    src: eF.thumbnailKey
                                      ? (0, w.$B)(eF.thumbnailKey || "", !0)
                                      : "/assets/thumb_default.png",
                                    alt: eF.name,
                                    className:
                                      "max-w-full max-h-full object-contain",
                                    onError: (e) => {
                                      let t = e.currentTarget;
                                      (t.onerror = null),
                                        (t.src = "/assets/thumb_default.png");
                                    },
                                  }),
                                  (0, s.jsx)(L.Z, {
                                    title: "Thay ảnh đại diện",
                                    children: (0, s.jsx)(m.ZP, {
                                      shape: "circle",
                                      className:
                                        "!absolute !bottom-2 !right-2 !shadow !bg-white/60",
                                      icon: (0, s.jsx)(E.Z, {
                                        weight: "LineDuotone",
                                        color: "#0f4159",
                                      }),
                                      onClick: () => eH(!0),
                                    }),
                                  }),
                                ],
                              }),
                              (0, s.jsx)("p", {
                                className: "text-xs text-gray-500",
                                children:
                                  "Đ\xe2y l\xe0 ảnh đại diện của thiệp sẽ hiển thị khi được chia sẻ tr\xean Facebook, Zalo, Messenger hoặc c\xe1c mạng x\xe3 hội kh\xe1c.",
                              }),
                              (0, s.jsx)(g.Z, {
                                className:
                                  "hover:scale-105 transition-all duration-300 hover:border-primary cursor-pointer group",
                                styles: { body: { padding: "15px" } },
                                onClick: () => ta(!0),
                                children: (0, s.jsxs)("div", {
                                  className:
                                    "qr-content flex items-center gap-3",
                                  children: [
                                    (0, s.jsx)("div", {
                                      className:
                                        "flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-all duration-300",
                                      children: (0, s.jsx)(_.Z, {
                                        weight: "BoldDuotone",
                                        color: "#0f4159",
                                        size: 24,
                                        className:
                                          "group-hover:scale-110 transition-all duration-300",
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className: "flex-1 min-w-0",
                                      children: [
                                        (0, s.jsx)("div", {
                                          className:
                                            "font-medium text-gray-900 text-sm",
                                          children: "QR Code cho thiệp",
                                        }),
                                        (0, s.jsx)("div", {
                                          className: "text-gray-500 text-xs",
                                          children:
                                            "Tải QR để in v\xe0o thiệp giấy, ảnh cưới...",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              tr &&
                                (0, s.jsxs)(s.Fragment, {
                                  children: [
                                    " ",
                                    (0, s.jsx)(g.Z, {
                                      className:
                                        "hover:scale-105 transition-all duration-300 hover:border-primary cursor-pointer group",
                                      styles: { body: { padding: "15px" } },
                                      onClick: () => {
                                        em &&
                                          ed.push(
                                            "/dashboard/pages/".concat(
                                              em,
                                              "/tips"
                                            )
                                          );
                                      },
                                      children: (0, s.jsxs)("div", {
                                        className:
                                          "qr-content flex items-center gap-3",
                                        children: [
                                          (0, s.jsx)("div", {
                                            className:
                                              "flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 group-hover:bg-primary/20 transition-all duration-300",
                                            children: (0, s.jsx)(O.Z, {
                                              weight: "BoldDuotone",
                                              color: "#e74694",
                                              size: 24,
                                              className:
                                                "group-hover:scale-110 transition-all duration-300",
                                            }),
                                          }),
                                          (0, s.jsxs)("div", {
                                            className: "flex-1 min-w-0",
                                            children: [
                                              (0, s.jsx)("div", {
                                                className:
                                                  "font-medium text-gray-900 text-sm",
                                                children: "Tips chia sẻ thiệp",
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  "text-gray-500 text-xs",
                                                children:
                                                  "Tips để chia sẻ thiệp đến với bạn b\xe8.",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(v.Z, {
                          xs: 24,
                          lg: 17,
                          className: ec ? "mt-4 pt-2 border-t" : "",
                          children: (0, s.jsxs)(b.Z, {
                            size: "small",
                            column: 1,
                            styles: { label: { width: 160, fontWeight: 500 } },
                            layout: ec ? "vertical" : "horizontal",
                            children: [
                              (0, s.jsx)(b.Z.Item, {
                                label: "URL Thiệp",
                                children: (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-3",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, s.jsx)(C.default, {
                                              href: "/s/".concat(
                                                eF.slug || eF.id
                                              ),
                                              className:
                                                "text-blue-600 break-all",
                                              children: ""
                                                .concat(
                                                  "https://zenlove.me",
                                                  "/s/"
                                                )
                                                .concat(eF.slug || eF.id),
                                            }),
                                            (0, s.jsx)(L.Z, {
                                              title: "Sao ch\xe9p URL",
                                              children: (0, s.jsx)(m.ZP, {
                                                size: "small",
                                                type: "text",
                                                icon: (0, s.jsx)(B.Z, {
                                                  weight: "LineDuotone",
                                                  color: "#0f4159",
                                                }),
                                                onClick: () => {
                                                  navigator.clipboard.writeText(
                                                    ""
                                                      .concat(
                                                        "https://zenlove.me",
                                                        "/s/"
                                                      )
                                                      .concat(eF.slug || eF.id)
                                                  ),
                                                    o.ZP.success(
                                                      "Đ\xe3 sao ch\xe9p URL"
                                                    );
                                                },
                                              }),
                                            }),
                                          ],
                                        }),
                                        eF.slug
                                          ? (0, s.jsxs)("div", {
                                              className:
                                                "text-xs text-gray-500 mt-1 flex items-center gap-1",
                                              children: [
                                                (0, s.jsx)(A.Z, {
                                                  weight: "LineDuotone",
                                                  size: 24,
                                                  color: "#87d068",
                                                }),
                                                (0, s.jsx)("span", {
                                                  children:
                                                    "Đ\xe3 t\xf9y chỉnh URL",
                                                }),
                                                (0, s.jsx)(L.Z, {
                                                  title:
                                                    "Nếu bạn muốn sửa lại URL, vui l\xf2ng li\xean hệ hỗ trợ!",
                                                  children: (0, s.jsx)(Q.Z, {
                                                    weight: "LineDuotone",
                                                    size: 20,
                                                    color: "#d42717",
                                                  }),
                                                }),
                                              ],
                                            })
                                          : (0, s.jsx)("div", {
                                              className:
                                                "text-xs text-gray-500 mt-1",
                                              children:
                                                "Đang sử dụng URL mặc định, bạn c\xf3 thể t\xf9y chỉnh để c\xe1 nh\xe2n h\xf3a v\xe0 dễ nhớ hơn!",
                                            }),
                                      ],
                                    }),
                                    !eF.slug &&
                                      (0, s.jsx)("div", {
                                        children: (0, s.jsx)(L.Z, {
                                          title:
                                            "T\xf9y chỉnh URL để c\xe1 nh\xe2n h\xf3a v\xe0 dễ nhớ hơn!",
                                          children: (0, s.jsx)(m.ZP, {
                                            size: "small",
                                            icon: (0, s.jsx)(M.Z, {
                                              weight: "LineDuotone",
                                              color: "#0f4159",
                                            }),
                                            onClick: () => eX(!0),
                                            disabled:
                                              (null == eF
                                                ? void 0
                                                : eF.status) === r.ti.expired,
                                            children: "T\xf9y chỉnh URL",
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                              }),
                              (0, s.jsxs)(b.Z.Item, {
                                label: "Thời gian tạo",
                                children: [
                                  "l\xfac",
                                  " ",
                                  new Date(eF.createdAt).toLocaleString(
                                    "vi-VN",
                                    { hour12: !1 }
                                  ),
                                ],
                              }),
                              (0, s.jsxs)(b.Z.Item, {
                                label: "Cập nhật lần cuối",
                                children: [
                                  "l\xfac",
                                  " ",
                                  new Date(eF.updatedAt).toLocaleString(
                                    "vi-VN",
                                    { hour12: !1 }
                                  ),
                                ],
                              }),
                              (0, s.jsx)(b.Z.Item, {
                                label: "Trạng th\xe1i",
                                children: (0, s.jsx)("div", {
                                  className: "flex items-center gap-2",
                                  children:
                                    (null == eF ? void 0 : eF.status) ===
                                    r.ti.expired
                                      ? (0, s.jsx)(y.Z, { count: "Hết hạn" })
                                      : (0, s.jsx)(T.Z, {
                                          checked:
                                            (null == eF
                                              ? void 0
                                              : eF.status) === r.ti.published,
                                          onChange: eJ,
                                          loading: eP.isPending,
                                          checkedChildren: "Đ\xe3 xuất bản",
                                          unCheckedChildren: "Nh\xe1p",
                                        }),
                                }),
                              }),
                              (0, s.jsx)(b.Z.Item, {
                                label: "Giới hạn",
                                children: (0, s.jsxs)("div", {
                                  className: "flex flex-col gap-5 w-full",
                                  children: [
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "text-md font-medium flex items-center gap-1",
                                          children: [
                                            (0, s.jsx)(R.Z, {
                                              weight: "BoldDuotone",
                                              size: 24,
                                              color: "#3b82f6",
                                            }),
                                            " ",
                                            "Lượt xem",
                                          ],
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex items-center justify-between text-xs text-gray-600 mt-1",
                                          children: [
                                            (0, s.jsxs)("div", {
                                              className:
                                                "!text-sm text-blue-500 font-medium",
                                              children: [
                                                "C\xf2n ",
                                                (0, I.uY)(e5),
                                                " lượt xem",
                                              ],
                                            }),
                                            (0, s.jsxs)("div", {
                                              children: [e4, "%"],
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)(N.Z, {
                                          percent: e4,
                                          showInfo: !1,
                                          strokeColor: ez,
                                          status:
                                            e4 >= 100 ? "success" : "active",
                                        }),
                                        (0, s.jsxs)("div", {
                                          className:
                                            "flex flex-col md:flex-row justify-between md:items-center",
                                          children: [
                                            (0, s.jsx)(y.Z, {
                                              color: "#22c55e",
                                              text: (0, s.jsxs)("span", {
                                                className:
                                                  "text-xs text-gray-600",
                                                children: [
                                                  "Lượt xem trang n\xe0y:",
                                                  " ",
                                                  (0, I.uY)(
                                                    null !==
                                                      (en =
                                                        null == eU
                                                          ? void 0
                                                          : eU.viewCount) &&
                                                      void 0 !== en
                                                      ? en
                                                      : 0
                                                  ),
                                                ],
                                              }),
                                              status: "processing",
                                            }),
                                            (0, s.jsx)(y.Z, {
                                              color: "#22c55e",
                                              text: (0, s.jsxs)("span", {
                                                className:
                                                  "text-xs text-gray-600",
                                                children: [
                                                  "Tổng to\xe0n bộ lượt xem:",
                                                  " ",
                                                  (0, I.uY)(
                                                    null != e2 ? e2 : 0
                                                  ),
                                                ],
                                              }),
                                              status: "processing",
                                            }),
                                            (0, s.jsx)(y.Z, {
                                              color: "#22c55e",
                                              text: (0, s.jsxs)("span", {
                                                className:
                                                  "text-xs text-gray-600",
                                                children: [
                                                  "Giới hạn: ",
                                                  (0, I.uY)(
                                                    null != e1 ? e1 : 0
                                                  ),
                                                ],
                                              }),
                                              status: "processing",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, s.jsxs)("div", {
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className:
                                            "text-md font-medium flex items-center gap-1",
                                          children: [
                                            (0, s.jsx)(F.Z, {
                                              weight: "BoldDuotone",
                                              size: 24,
                                              color: "#87d068",
                                            }),
                                            "Thời hạn trang",
                                          ],
                                        }),
                                        e6
                                          ? (0, s.jsxs)(s.Fragment, {
                                              children: [
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center justify-between text-xs text-gray-600 mt-1",
                                                  children: [
                                                    (0, s.jsxs)("div", {
                                                      children: [
                                                        "C\xf2n ",
                                                        e8,
                                                        " ng\xe0y",
                                                      ],
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      children: [tt, "%"],
                                                    }),
                                                  ],
                                                }),
                                                (0, s.jsx)(N.Z, {
                                                  percent: tt,
                                                  showInfo: !1,
                                                  strokeColor: ez,
                                                  status:
                                                    tt >= 100
                                                      ? "success"
                                                      : "active",
                                                }),
                                                (0, s.jsxs)("div", {
                                                  className:
                                                    "flex items-center justify-between gap-2 text-xs mt-1",
                                                  children: [
                                                    (0, s.jsx)(y.Z, {
                                                      color: "#87d068",
                                                      text: (0, s.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-xs text-gray-600",
                                                          children: [
                                                            "Ng\xe0y tạo:",
                                                            " ",
                                                            new Date(
                                                              eF.createdAt
                                                            ).toLocaleDateString(
                                                              "vi-VN"
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                      status: "processing",
                                                    }),
                                                    (0, s.jsx)(y.Z, {
                                                      color: "#d42717",
                                                      text: (0, s.jsxs)(
                                                        "span",
                                                        {
                                                          className:
                                                            "text-xs text-gray-600",
                                                          children: [
                                                            "Hết hạn:",
                                                            " ",
                                                            e6.toLocaleDateString(
                                                              "vi-VN"
                                                            ),
                                                          ],
                                                        }
                                                      ),
                                                      status: "processing",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            })
                                          : (0, s.jsx)("div", {
                                              className:
                                                "text-xs text-gray-500",
                                              children:
                                                "Kh\xf4ng c\xf3 thời hạn",
                                            }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className: "flex flex-col gap-2",
                                      children: (0, s.jsx)(u.Z, {
                                        type: "warning",
                                        title:
                                          "Bạn c\xf3 thể n\xe2ng cấp g\xf3i hoặc mua th\xeam add-on để tăng giới hạn v\xe0 thời hạn sử dụng.",
                                        className:
                                          "!flex !flex-col !items-start !gap-2",
                                        action: (0, s.jsxs)("div", {
                                          className: "flex gap-2 flex-wrap",
                                          children: [
                                            (0, s.jsx)(m.ZP, {
                                              type: "primary",
                                              onClick: () =>
                                                ed.push(
                                                  "/pricing?ref=page-detail"
                                                ),
                                              children: "N\xe2ng cấp g\xf3i",
                                            }),
                                            (0, s.jsx)(m.ZP, {
                                              onClick: () =>
                                                ed.push("/dashboard/addons"),
                                              children:
                                                "Gia hạn thời gian/lượt xem",
                                            }),
                                          ],
                                        }),
                                      }),
                                    }),
                                    (0, s.jsxs)("div", {
                                      className:
                                        "flex items-center justify-between gap-2 text-sm",
                                      children: [
                                        (0, s.jsxs)("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            (0, s.jsx)("span", {
                                              className: "text-gray-600",
                                              children: "G\xf3i hiện tại:",
                                            }),
                                            (0, s.jsx)("span", {
                                              className:
                                                "px-2 py-0.5 rounded-md font-bold",
                                              style: {
                                                backgroundColor: (0, D.r$)(
                                                  null == eR
                                                    ? void 0
                                                    : null === (W = eR.plan) ||
                                                      void 0 === W
                                                    ? void 0
                                                    : W.code
                                                ).backgroundColor,
                                                color: (0, D.r$)(
                                                  null == eR
                                                    ? void 0
                                                    : null === (H = eR.plan) ||
                                                      void 0 === H
                                                    ? void 0
                                                    : H.code
                                                ).textColor,
                                              },
                                              children:
                                                (null == eR
                                                  ? void 0
                                                  : null === (Y = eR.plan) ||
                                                    void 0 === Y
                                                  ? void 0
                                                  : Y.name) || "FREE",
                                            }),
                                          ],
                                        }),
                                        (0, s.jsx)(m.ZP, {
                                          type: "link",
                                          className: "p-0",
                                          icon: (0, s.jsx)(V.Z, {
                                            weight: "BoldDuotone",
                                            size: 24,
                                            color: "#3b82f6",
                                          }),
                                          onClick: () =>
                                            window.open(
                                              "/pricing?ref=page-detail",
                                              "_blank"
                                            ),
                                          children: "N\xe2ng cấp",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    })
                  : (0, s.jsx)("div", {
                      className: "text-center py-16",
                      children: "Kh\xf4ng t\xecm thấy thiệp.",
                    }),
              }),
            }),
            (0, s.jsx)(ek.Z, { info: "page-detail" }),
            eF &&
              (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)(ej, {
                    pageId: "quy-hai-220326",
                    loading: eq,
                    guestData: null == ev ? void 0 : ev.guest,
                  }),
                  (0, s.jsx)($, {
                    viewCount:
                      null !== (es = null == eU ? void 0 : eU.viewCount) &&
                      void 0 !== es
                        ? es
                        : 0,
                    likeCount:
                      null !== (ea = null == eU ? void 0 : eU.likeCount) &&
                      void 0 !== ea
                        ? ea
                        : 0,
                    commentCount:
                      null !== (el = null == eU ? void 0 : eU.commentsCount) &&
                      void 0 !== el
                        ? el
                        : 0,
                    giftCount:
                      null !== (er = null == eU ? void 0 : eU.giftCount) &&
                      void 0 !== er
                        ? er
                        : 0,
                    loading: eq,
                    pageId: "quy-hai-220326",
                  }),
                  (0, s.jsx)(ei, { pageId: "quy-hai-220326", loading: eq }),
                ],
              }),
            (0, s.jsx)(h.default, {
              title: "T\xf9y chỉnh URL",
              open: eG,
              onCancel: () => {
                eX(!1), eY.resetFields();
              },
              footer: null,
              width: 700,
              children: (0, s.jsxs)("div", {
                className: "space-y-4",
                children: [
                  (0, s.jsx)(u.Z, {
                    type: "warning",
                    description: (0, s.jsx)("span", {
                      className: "text-base text-gray-600",
                      children:
                        "URL chỉ được t\xf9y chỉnh một lần duy nhất v\xe0 kh\xf4ng thể thay đổi sau đ\xf3.",
                    }),
                    showIcon: !0,
                    icon: (0, s.jsx)(z.Z, {
                      weight: "BoldDuotone",
                      size: 24,
                      color: "#0f4159",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    children: [
                      (0, s.jsx)("div", {
                        className: " text-md font-medium text-gray-700 mb-2",
                        children: "URL hiện tại:",
                      }),
                      (0, s.jsx)("div", {
                        className: " ",
                        children: ""
                          .concat("https://zenlove.me", "/s/")
                          .concat(
                            (null == eF ? void 0 : eF.slug) ||
                              (null == eF ? void 0 : eF.id)
                          ),
                      }),
                    ],
                  }),
                  (0, s.jsxs)(d.Z, {
                    form: eY,
                    onFinish: e0,
                    layout: "vertical",
                    children: [
                      (0, s.jsxs)("div", {
                        className: " text-md font-medium text-gray-700 mb-2",
                        children: [
                          "URL mới:",
                          " ",
                          (0, s.jsx)("span", {
                            className: "text-xs text-gray-500 mt-1 italic",
                            children:
                              "URL chỉ được chứa chữ c\xe1i, số v\xe0 dấu gạch ngang",
                          }),
                        ],
                      }),
                      (0, s.jsx)(d.Z.Item, {
                        name: "slug",
                        rules: [
                          {
                            required: !0,
                            message: "Vui l\xf2ng nhập URL t\xf9y chỉnh",
                          },
                          {
                            pattern: /^[a-zA-Z0-9-]+$/,
                            message:
                              "URL chỉ được chứa chữ c\xe1i, số v\xe0 dấu gạch ngang",
                          },
                          {
                            min: 3,
                            message: "URL phải c\xf3 \xedt nhất 3 k\xfd tự",
                          },
                          {
                            max: 50,
                            message: "URL kh\xf4ng được qu\xe1 50 k\xfd tự",
                          },
                        ],
                        children: (0, s.jsx)(j.default, {
                          prefix: "".concat("https://zenlove.me", "/s/"),
                          placeholder: "nhap-url-cua-ban",
                          disabled: eP.isPending,
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "flex justify-end gap-2",
                        children: [
                          (0, s.jsx)(m.ZP, {
                            onClick: () => {
                              eX(!1), eY.resetFields();
                            },
                            disabled: eP.isPending,
                            children: "Hủy",
                          }),
                          (0, s.jsx)(m.ZP, {
                            type: "primary",
                            htmlType: "submit",
                            loading: eP.isPending,
                            children: "Cập nhật",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, s.jsx)(eb.Z, {
              open: eW,
              onOpenChange: eH,
              onSelect: async (e) => {
                if (em && e)
                  try {
                    await eP.mutateAsync({ id: em, data: { thumbnailKey: e } }),
                      o.ZP.success("Đ\xe3 cập nhật ảnh đại diện"),
                      eH(!1);
                  } catch (e) {
                    o.ZP.error(
                      (null == e ? void 0 : e.message) ||
                        "Cập nhật ảnh đại diện thất bại"
                    );
                  }
              },
            }),
            (0, s.jsx)(ew, {
              url: tl,
              name: (null == eF ? void 0 : eF.name) || "",
              open: ti,
              onCancel: () => ta(!1),
            }),
            (0, s.jsx)(eD, {
              visible: ep,
              onClose: () => ef(!1),
              categoryId: eO,
              pageName: null == eF ? void 0 : eF.name,
            }),
          ],
        });
      }
    },
    53530: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var s = n(57437),
        i = n(12662),
        a = n(59646),
        l = n(19878),
        r = n(34029),
        c = n(53743),
        o = n(89970),
        d = n(93834),
        h = n(88589),
        m = n(50742);
      function u(e) {
        let { pageId: t, open: n, onCancel: u } = e,
          [x] = l.Z.useForm(),
          g = l.Z.useWatch("name", x),
          p = l.Z.useWatch("greeting", x),
          f = l.Z.useWatch("custom_greeting", x),
          v = (0, i.xM)(),
          j = async (e) => {
            try {
              await v.mutateAsync({
                pageIdOrSlug: t,
                data: {
                  name: e.name,
                  greeting:
                    "custom" === e.greeting ? e.custom_greeting : e.greeting,
                  contact: e.contact || void 0,
                  which: e.which || void 0,
                },
              }),
                r.ZP.success("Đ\xe3 tạo lời mời th\xe0nh c\xf4ng!"),
                x.resetFields(),
                u();
            } catch (e) {
              r.ZP.error(
                (null == e ? void 0 : e.message) ||
                  "C\xf3 lỗi xảy ra khi tạo lời mời"
              );
            }
          };
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)(c.default, {
            title: "Th\xeam kh\xe1ch mời",
            open: n,
            onCancel: u,
            footer: null,
            width: 500,
            destroyOnHidden: !0,
            children: [
              g &&
                (0, s.jsxs)("div", {
                  className:
                    "bg-white text-black p-2 rounded-md mb-2 border border-gray-200 flex flex-row items-center gap-1 shadow-sm",
                  children: [
                    (0, s.jsx)("span", {
                      children: (0, s.jsx)(o.Z, {
                        title: "Đ\xe2y l\xe0 nội dung được xem trước",
                        children: (0, s.jsx)(a.Icon, {
                          icon: "solar:eye-bold-duotone",
                          className: "w-4 h-4",
                        }),
                      }),
                    }),
                    (0, s.jsxs)("span", {
                      className: "text-xs",
                      children: [
                        "custom" === p && f
                          ? "".concat(f, " ")
                          : p && "custom" !== p
                          ? "".concat(p, " ")
                          : "",
                        g,
                        " ...",
                      ],
                    }),
                  ],
                }),
              (0, s.jsxs)(l.Z, {
                form: x,
                onFinish: j,
                layout: "vertical",
                requiredMark: !1,
                className: "[&_.ant-form-item]:mb-3",
                children: [
                  (0, s.jsx)(l.Z.Item, {
                    name: "greeting",
                    label: "Lời mời",
                    rules: [
                      { required: !0, message: "Vui l\xf2ng nhập lời mời" },
                    ],
                    children: (0, s.jsx)(d.default, {
                      getPopupContainer: (e) =>
                        e.closest(".ant-modal-body") || document.body,
                      placeholder: "Chọn lời mời",
                      options: [
                        { label: "Th\xe2n mời", value: "Th\xe2n mời" },
                        { label: "K\xednh mời", value: "K\xednh mời" },
                        { label: "K\xednh gửi", value: "K\xednh gửi" },
                        { label: "Th\xe2n gửi", value: "Th\xe2n gửi" },
                        {
                          label: "Tr\xe2n trọng k\xednh gửi",
                          value: "Tr\xe2n trọng k\xednh gửi",
                        },
                        {
                          label: "Tr\xe2n trọng k\xednh mời",
                          value: "Tr\xe2n trọng k\xednh mời",
                        },
                        {
                          label: "Tr\xe2n trọng gửi đến",
                          value: "Tr\xe2n trọng gửi đến",
                        },
                        {
                          label: "Ch\xe2n th\xe0nh gửi đến",
                          value: "Ch\xe2n th\xe0nh gửi đến",
                        },
                        { label: "Gửi tới", value: "Gửi tới" },
                        { label: "Gửi đến", value: "Gửi đến" },
                        { label: "D\xe0nh cho", value: "D\xe0nh cho" },
                        { label: "T\xf9y chỉnh", value: "custom" },
                      ],
                    }),
                  }),
                  (0, s.jsx)(l.Z.Item, {
                    name: "name",
                    label: "T\xean kh\xe1ch mời",
                    rules: [
                      {
                        required: !0,
                        message: "Vui l\xf2ng nhập t\xean kh\xe1ch mời",
                      },
                    ],
                    children: (0, s.jsx)(h.default, {
                      placeholder: "Nhập t\xean kh\xe1ch mời",
                    }),
                  }),
                  (0, s.jsx)(l.Z.Item, {
                    name: "contact",
                    label: "Li\xean hệ (t\xf9y chọn)",
                    children: (0, s.jsx)(h.default, {
                      placeholder: "Số điện thoại hoặc email",
                    }),
                  }),
                  (0, s.jsx)(l.Z.Item, {
                    name: "which",
                    label: "Ph\xe2n loại (t\xf9y chọn)",
                    children: (0, s.jsxs)(d.default, {
                      getPopupContainer: (e) =>
                        e.closest(".ant-modal-body") || document.body,
                      placeholder: "Chọn ph\xe2n loại",
                      children: [
                        (0, s.jsx)(d.default.Option, {
                          value: "Nh\xe0 trai",
                          children: "Nh\xe0 trai",
                        }),
                        (0, s.jsx)(d.default.Option, {
                          value: "Nh\xe0 g\xe1i",
                          children: "Nh\xe0 g\xe1i",
                        }),
                        (0, s.jsx)(d.default.Option, {
                          value: "Bạn b\xe8",
                          children: "Bạn b\xe8",
                        }),
                        (0, s.jsx)(d.default.Option, {
                          value: "Đồng nghiệp",
                          children: "Đồng nghiệp",
                        }),
                        (0, s.jsx)(d.default.Option, {
                          value: "Họ h\xe0ng",
                          children: "Họ h\xe0ng",
                        }),
                      ],
                    }),
                  }),
                  "custom" === p &&
                    (0, s.jsx)(l.Z.Item, {
                      name: "custom_greeting",
                      label: "Lời mời t\xf9y chỉnh",
                      children: (0, s.jsx)(h.default, {
                        placeholder: "VD: Xin gửi, Tr\xe2n trọng mời,..",
                      }),
                    }),
                  (0, s.jsx)(l.Z.Item, {
                    className: "mb-0 mt-4",
                    children: (0, s.jsxs)("div", {
                      className: "flex justify-end gap-2",
                      children: [
                        (0, s.jsx)(m.ZP, { onClick: u, children: "Hủy" }),
                        (0, s.jsx)(m.ZP, {
                          type: "primary",
                          htmlType: "submit",
                          loading: v.isPending,
                          children: "Tạo",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      n(2265);
    },
    64512: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(57437);
      n(2265);
      var i = n(34029),
        a = n(53743),
        l = n(50742),
        r = n(73879),
        c = n(12662);
      function o(e) {
        let { open: t, onClose: n, pageId: o, pageName: d } = e,
          h = (0, c.Bk)(),
          m = async () => {
            try {
              let e = await h.mutateAsync({ pageIdOrSlug: o }),
                t = window.URL.createObjectURL(e),
                s = document.createElement("a");
              s.href = t;
              let a = new Date(),
                l = a.toISOString().split("T")[0],
                r = a.toTimeString().split(" ")[0].replace(/:/g, "-"),
                c = (d || "page").replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
              (s.download = "guest-"
                .concat(c, "-")
                .concat(r, "-")
                .concat(l, ".xlsx")),
                document.body.appendChild(s),
                s.click(),
                document.body.removeChild(s),
                window.URL.revokeObjectURL(t),
                i.ZP.success("Đ\xe3 xuất file Excel th\xe0nh c\xf4ng!"),
                n();
            } catch (e) {
              console.error("Export error:", e),
                i.ZP.error("C\xf3 lỗi xảy ra khi xuất file");
            }
          };
        return (0, s.jsx)(a.default, {
          title: "Xuất danh s\xe1ch kh\xe1ch mời",
          open: t,
          onCancel: n,
          footer: null,
          width: 500,
          children: (0, s.jsxs)("div", {
            className: "space-y-4",
            children: [
              (0, s.jsx)("div", {
                className: "text-center",
                children: (0, s.jsx)(r.Z, {
                  style: { fontSize: 48, color: "#1890ff" },
                }),
              }),
              (0, s.jsxs)("div", {
                className: "text-center",
                children: [
                  (0, s.jsx)("p", {
                    className: "text-lg font-medium mb-2",
                    children:
                      "Bạn c\xf3 muốn xuất danh s\xe1ch kh\xe1ch mời ra file Excel kh\xf4ng?",
                  }),
                  (0, s.jsx)("p", {
                    className: "text-gray-600 text-sm",
                    children:
                      "File sẽ được tải xuống tự động sau khi xuất th\xe0nh c\xf4ng.",
                  }),
                ],
              }),
              (0, s.jsxs)("div", {
                className: "flex justify-center gap-2",
                children: [
                  (0, s.jsx)(l.ZP, {
                    onClick: n,
                    disabled: h.isPending,
                    children: "Hủy",
                  }),
                  (0, s.jsx)(l.ZP, {
                    type: "primary",
                    icon: (0, s.jsx)(r.Z, {}),
                    onClick: m,
                    loading: h.isPending,
                    children: h.isPending ? "Đang xuất..." : "Xuất Excel",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    50810: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var s = n(57437),
        i = n(2265),
        a = n(27648),
        l = n(99376),
        r = n(59646),
        c = n(89970);
      function o(e) {
        let { items: t, showBack: n = !1 } = e,
          o = (0, l.useRouter)();
        return (0, s.jsxs)("div", {
          className: "flex items-center gap-2",
          children: [
            n &&
              (0, s.jsx)("div", {
                className: "flex-shrink-0",
                children: (0, s.jsx)(c.Z, {
                  title: "Quay lại",
                  children: (0, s.jsx)("button", {
                    onClick: () => {
                      o.back();
                    },
                    className:
                      "flex items-center justify-center w-7 h-7 bg-white rounded border border-gray-300 hover:border-primary hover:bg-gray-50 transition-colors group",
                    "aria-label": "Go back",
                    children: (0, s.jsx)(r.Icon, {
                      icon: "solar:arrow-left-linear",
                      className:
                        "w-4 h-4 text-black/85 group-hover:text-primary transition-colors",
                    }),
                  }),
                }),
              }),
            (0, s.jsx)("nav", {
              className: "flex items-center gap-2 flex-wrap",
              "aria-label": "Breadcrumb",
              children: t.map((e, n) => {
                let l = n === t.length - 1,
                  c = 0 === n;
                return (0, s.jsxs)(
                  i.Fragment,
                  {
                    children: [
                      !c &&
                        (0, s.jsx)("span", {
                          className: "text-gray-500",
                          children: "/",
                        }),
                      (0, s.jsxs)("div", {
                        className: "flex items-center gap-1",
                        children: [
                          e.icon &&
                            (0, s.jsx)(r.Icon, {
                              icon: e.icon,
                              className: "w-4 h-4 flex-shrink-0 ".concat(
                                l ? "text-black" : "text-gray-500"
                              ),
                            }),
                          e.href && !l
                            ? (0, s.jsx)(a.default, {
                                href: e.href,
                                className:
                                  "text-sm break-words hover:text-primary ".concat(
                                    l
                                      ? "text-black/85 font-medium"
                                      : "text-gray-500"
                                  ),
                                children: e.title,
                              })
                            : (0, s.jsx)("span", {
                                className: "text-sm break-words ".concat(
                                  l
                                    ? "text-black/85 font-medium"
                                    : "text-gray-500"
                                ),
                                children: e.title,
                              }),
                        ],
                      }),
                    ],
                  },
                  n
                );
              }),
            }),
          ],
        });
      }
    },
    12662: function (e, t, n) {
      "use strict";
      n.d(t, {
        Bk: function () {
          return f;
        },
        Ge: function () {
          return j;
        },
        Im: function () {
          return y;
        },
        Kt: function () {
          return p;
        },
        hZ: function () {
          return v;
        },
        ik: function () {
          return h;
        },
        l5: function () {
          return x;
        },
        n9: function () {
          return i;
        },
        oQ: function () {
          return b;
        },
        rW: function () {
          return u;
        },
        vm: function () {
          return g;
        },
        xM: function () {
          return m;
        },
      });
      var s,
        i,
        a = n(71632),
        l = n(29827),
        r = n(21770),
        c = n(33818),
        o = n(80605);
      let d = (0, c.g)("https://www.quyctd.dev/wedding/api");
      function h(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, a.a)({
          queryKey: ["user-page-guest-invitations", e, t],
          queryFn: async () => {
            if (!e)
              return {
                items: [],
                meta: {
                  page: 1,
                  limit: 10,
                  total: 0,
                  totalPages: 0,
                  hasNext: !1,
                  hasPrev: !1,
                },
              };
            let n = new URLSearchParams();
            t.page && n.append("page", String(t.page)),
              t.limit && n.append("limit", String(t.limit)),
              t.status && n.append("status", t.status),
              t.search && n.append("search", t.search),
              void 0 !== t.isSent && n.append("isSent", String(t.isSent)),
              t.sortBy && n.append("sortBy", t.sortBy),
              t.sortOrder && n.append("sortOrder", t.sortOrder);
            let s = n.toString(),
              i = "/v1/user/guest-invitations/"
                .concat(e, "/all")
                .concat(s ? "?".concat(s) : "");
            return (await d(i)).data;
          },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function m() {
        let e = (0, l.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { pageIdOrSlug: t, data: n } = e;
            return (
              await d("/v1/user/guest-invitations/".concat(t), {
                method: "POST",
                body: JSON.stringify(n),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({
              queryKey: ["user-page-guest-invitations", n.pageIdOrSlug],
            }),
              e.invalidateQueries({ queryKey: ["admin-guest-invitations"] });
          },
          onError: (e) => {
            throw Error(
              e instanceof Error
                ? e.message.includes(
                    "Page must be active, published, and not expired to manage guest invitations"
                  )
                  ? "Thiệp phải được k\xedch hoạt, đ\xe3 xuất bản v\xe0 chưa hết hạn để quản l\xfd lời mời kh\xe1ch mời"
                  : e.message
                : "C\xf3 lỗi xảy ra khi tạo lời mời kh\xe1ch mời"
            );
          },
        });
      }
      function u() {
        let e = (0, l.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { pageIdOrSlug: t, data: n } = e;
            return (
              await d("/v1/user/guest-invitations/".concat(t, "/bulk"), {
                method: "POST",
                body: JSON.stringify(n),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({
              queryKey: ["user-page-guest-invitations", n.pageIdOrSlug],
            }),
              e.invalidateQueries({ queryKey: ["admin-guest-invitations"] });
          },
          onError: (e) => {
            throw Error(
              e instanceof Error
                ? e.message.includes(
                    "Page must be active, published, and not expired to manage guest invitations"
                  )
                  ? "Thiệp phải được k\xedch hoạt, đ\xe3 xuất bản v\xe0 chưa hết hạn để quản l\xfd lời mời kh\xe1ch mời"
                  : e.message
                : "C\xf3 lỗi xảy ra khi tạo lời mời kh\xe1ch mời h\xe0ng loạt"
            );
          },
        });
      }
      function x() {
        let e = (0, l.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { pageIdOrSlug: t, id: n, data: s } = e;
            return (
              await d("/v1/user/guest-invitations/".concat(t, "/").concat(n), {
                method: "PUT",
                body: JSON.stringify(s),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({
              queryKey: ["user-page-guest-invitations", n.pageIdOrSlug],
            }),
              e.invalidateQueries({ queryKey: ["admin-guest-invitations"] });
          },
        });
      }
      function g() {
        let e = (0, l.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { pageIdOrSlug: t, ids: n } = e;
            return (
              await d("/v1/user/guest-invitations/".concat(t), {
                method: "DELETE",
                body: JSON.stringify({ ids: n }),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({
              queryKey: ["user-page-guest-invitations", n.pageIdOrSlug],
            }),
              e.invalidateQueries({ queryKey: ["admin-guest-invitations"] });
          },
        });
      }
      function p() {
        let e = (0, l.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { pageIdOrSlug: t, file: n } = e,
              s = new FormData();
            return (
              s.append("file", n),
              (
                await d("/v1/user/guest-invitations/import/".concat(t), {
                  method: "POST",
                  body: s,
                })
              ).data
            );
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({
              queryKey: ["user-page-guest-invitations", n.pageIdOrSlug],
            }),
              e.invalidateQueries({ queryKey: ["admin-guest-invitations"] });
          },
        });
      }
      function f() {
        return (0, r.D)({
          mutationFn: async (e) => {
            var t;
            let { pageIdOrSlug: n, filters: s } = e,
              i = await fetch(
                ""
                  .concat(
                    "https://www.quyctd.dev/wedding/api",
                    "/v1/user/guest-invitations/export/"
                  )
                  .concat(n),
                {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: "Bearer ".concat(
                      (null === (t = await (0, o.getSession)()) || void 0 === t
                        ? void 0
                        : t.accessToken) || ""
                    ),
                  },
                  body: JSON.stringify(s || {}),
                }
              );
            if (!i.ok) throw Error("HTTP error! status: ".concat(i.status));
            return await i.blob();
          },
        });
      }
      function v(e) {
        switch (e) {
          case "pending":
            return "Chưa xem";
          case "viewed":
            return "Đ\xe3 xem";
          case "accepted":
            return "C\xf3 tham dự";
          case "rejected":
            return "Kh\xf4ng tham dự";
          default:
            return "Kh\xf4ng x\xe1c định";
        }
      }
      function j(e) {
        switch (e) {
          case "pending":
            return "#faad14";
          case "viewed":
            return "#108ee9";
          case "accepted":
            return "#87d068";
          case "rejected":
            return "#f50";
          default:
            return "#d9d9d9";
        }
      }
      function b(e) {
        let t = {
          total: e.length,
          pending: 0,
          viewed: 0,
          accepted: 0,
          rejected: 0,
          totalViews: 0,
          totalLikes: 0,
        };
        return (
          e.forEach((e) => {
            switch (e.status) {
              case "pending":
                t.pending++;
                break;
              case "viewed":
                t.viewed++;
                break;
              case "accepted":
                t.accepted++;
                break;
              case "rejected":
                t.rejected++;
            }
            (t.totalViews += e.viewCount), (t.totalLikes += e.likeCount);
          }),
          t
        );
      }
      function y(e, t) {
        return "".concat(t || "https://zenlove.me", "/invite/").concat(e);
      }
      ((s = i || (i = {})).pending = "pending"),
        (s.viewed = "viewed"),
        (s.accepted = "accepted"),
        (s.rejected = "rejected");
    },
    14631: function (e, t, n) {
      "use strict";
      n.d(t, {
        x: function () {
          return a;
        },
      });
      var s = n(71632);
      let i = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function a() {
        return (0, s.a)({
          queryKey: ["plans"],
          queryFn: async () => (await i("/v1/plans")).data,
          staleTime: 3e5,
          retry: 3,
        });
      }
    },
    42536: function (e, t, n) {
      "use strict";
      function s(e) {
        if (!e) return { backgroundColor: "#fef3c7", textColor: "#92400e" };
        switch (e.toUpperCase()) {
          case "FREE":
            return { backgroundColor: "#fef3c7", textColor: "#92400e" };
          case "BASIC":
            return { backgroundColor: "#dbeafe", textColor: "#1e40af" };
          case "PREMIUM":
            return { backgroundColor: "#f3e8ff", textColor: "#7c3aed" };
          case "PRO":
            return { backgroundColor: "#ecfdf5", textColor: "#166534" };
          case "ENTERPRISE":
            return { backgroundColor: "#fef2f2", textColor: "#dc2626" };
          default:
            return { backgroundColor: "#f3f4f6", textColor: "#374151" };
        }
      }
      function i(e) {
        return e.startsWith("limit_")
          ? 1
          : e.startsWith("config_")
          ? 2
          : (e.startsWith("enable_"), 3);
      }
      function a(e, t) {
        let n = new Map();
        return (
          t &&
            t.length > 0 &&
            t.forEach((e) => {
              n.set(e.code, e.order);
            }),
          e.sort((e, t) => {
            let [s] = e,
              [a] = t,
              l = i(s),
              r = i(a);
            if (l !== r) return l - r;
            let c = n.get(s),
              o = n.get(a);
            return void 0 !== c && void 0 !== o
              ? c - o
              : void 0 !== c
              ? -1
              : void 0 !== o
              ? 1
              : s.localeCompare(a);
          })
        );
      }
      function l(e, t, n) {
        let s = (function (e, t) {
          if (t && t.length > 0) {
            let n = t.find((t) => t.code === e);
            if (n) return n.name;
          }
          return e;
        })(e, n);
        if ("boolean" == typeof t)
          return "".concat(s, ": ").concat(t ? "✓" : "✗");
        if ("true" === t || "false" === t)
          return "".concat(s, ": ").concat("true" === t ? "✓" : "✗");
        if ("config_duration_months" === e) {
          let e = Number(t);
          if (!Number.isNaN(e))
            return e >= 12
              ? "".concat(s, ": ").concat(Math.floor(e / 12), " năm")
              : "".concat(s, ": ").concat(e, " th\xe1ng");
        }
        if ("limit_image" === e) return "".concat(s, ": ").concat(t, " ảnh");
        if ("limit_page" === e) return "".concat(s, ": ").concat(t, " thiệp");
        if ("limit_view" === e) {
          let e = Number(t);
          if (!Number.isNaN(e))
            return e >= 1e3
              ? "".concat(s, ": ").concat((e / 1e3).toFixed(0), "K lượt")
              : "".concat(s, ": ").concat(e.toLocaleString(), " lượt");
        }
        if ("limit_guest" === e) return "".concat(s, ": ").concat(t, " người");
        if ("config_template_access" === e) {
          let e = String(t);
          return ""
            .concat(s, ": ")
            .concat(
              {
                basic: "Cơ bản",
                premium: "To\xe0n bộ",
                all: "Tất cả",
                none: "Kh\xf4ng c\xf3",
                free: "Miễn ph\xed",
              }[e] || e
            );
        }
        return "".concat(s, ": ").concat(String(t));
      }
      n.d(t, {
        G0: function () {
          return a;
        },
        nV: function () {
          return l;
        },
        r$: function () {
          return s;
        },
      });
    },
    10123: function (e, t, n) {
      "use strict";
      function s(e) {
        return e.toLocaleString("vi-VN");
      }
      n.d(t, {
        uY: function () {
          return s;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        799, 9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039,
        6815, 9816, 8640, 5831, 5827, 5909, 8651, 8589, 639, 9878, 9486, 2972,
        3335, 9646, 3568, 605, 2752, 9109, 474, 7627, 8487, 4914, 1833, 1758,
        4299, 1167, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 31187));
      }
    ),
      (_N_E = e.O());
  },
]);
