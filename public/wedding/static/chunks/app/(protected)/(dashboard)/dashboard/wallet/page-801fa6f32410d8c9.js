(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5613],
  {
    80934: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 16e3));
    },
    16e3: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return E;
        },
      });
      var i = n(57437),
        s = n(2265),
        a = n(47451),
        r = n(69410),
        l = n(96931),
        c = n(50337),
        o = n(50742),
        d = n(45235),
        h = n(51653),
        u = n(48651),
        g = n(85180),
        x = n(64170),
        m = n(50828),
        f = n(27648),
        p = n(83669),
        y = n(9738);
      let v = [
        {
          code: "FREE",
          name: "G\xf3i Miễn ph\xed",
          icon: "\uD83C\uDF81",
          giftPercentage: "0%",
          transactionFee: "Ph\xed giao dịch & duy tr\xec hệ thống",
          features: [
            {
              key: "free-card",
              label: "Thiệp online ho\xe0n to\xe0n miễn ph\xed",
              value: !0,
            },
            {
              key: "gift-display",
              label: "Hiển thị qu\xe0 tặng tr\xean thiệp",
              value: !0,
            },
            {
              key: "receive-gifts",
              label: "Nhận lời ch\xfac từ mọi người",
              value: !0,
            },
            {
              key: "gift-value",
              label:
                "Gi\xe1 trị qu\xe0 tặng sẽ được sử dụng cho cổng thanh to\xe1n v\xe0 duy tr\xec dịch vụ miễn ph\xed",
              value: !0,
            },
          ],
        },
        {
          code: "BASIC",
          name: "G\xf3i Basic",
          icon: "⭐",
          giftPercentage: "50%",
          transactionFee: "Ph\xed giao dịch & cổng thanh to\xe1n 50%",
          features: [
            {
              key: "free-card",
              label: "Thiệp online ho\xe0n to\xe0n miễn ph\xed",
              value: !0,
            },
            {
              key: "gift-display",
              label: "Hiển thị qu\xe0 tặng tr\xean thiệp",
              value: !0,
            },
            {
              key: "receive-gifts",
              label: "Nhận lời ch\xfac từ mọi người",
              value: !0,
            },
            {
              key: "gift-value",
              label: "Nhận gi\xe1 trị qu\xe0 tặng",
              value: "Nhận 50% gi\xe1 trị qu\xe0 tặng",
            },
            {
              key: "withdraw",
              label: "R\xfat tiền về t\xe0i khoản ng\xe2n h\xe0ng",
              value: !0,
            },
          ],
        },
        {
          code: "PREMIUM",
          name: "G\xf3i Premium",
          icon: "\uD83D\uDC8E",
          giftPercentage: "100%",
          transactionFee: "Kh\xf4ng mất ph\xed giao dịch",
          features: [
            {
              key: "free-card",
              label: "Thiệp online ho\xe0n to\xe0n miễn ph\xed",
              value: !0,
            },
            {
              key: "gift-display",
              label: "Hiển thị qu\xe0 tặng tr\xean thiệp",
              value: !0,
            },
            {
              key: "receive-gifts",
              label: "Nhận lời ch\xfac từ mọi người",
              value: !0,
            },
            {
              key: "gift-value",
              label: "Nhận gi\xe1 trị qu\xe0 tặng",
              value: "Nhận 100% gi\xe1 trị qu\xe0 tặng",
            },
            {
              key: "withdraw",
              label: "R\xfat tiền về t\xe0i khoản ng\xe2n h\xe0ng",
              value: !0,
            },
          ],
        },
      ];
      function j(e) {
        let { currentPlan: t = "FREE" } = e,
          n = (e) => t === e,
          s = (e) =>
            "FREE" === t
              ? "FREE" === e.code
                ? {
                    text: "N\xe2ng cấp l\xean Basic",
                    disabled: !1,
                    href: "/payment/upgrade?plan=BASIC",
                  }
                : {
                    text: "N\xe2ng cấp",
                    disabled: !1,
                    href: "/payment/upgrade?plan=".concat(e.code),
                  }
              : "FREE" === e.code
              ? {
                  text: "G\xf3i n\xe0y kh\xf4ng thể n\xe2ng cấp",
                  disabled: !0,
                  href: null,
                }
              : n(e.code)
              ? { text: "G\xf3i hiện tại", disabled: !0, href: null }
              : {
                  text: "N\xe2ng cấp",
                  disabled: !1,
                  href: "/payment/upgrade?plan=".concat(e.code),
                };
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("h2", {
              className: "text-xl m-4",
              children: "Bảng quy đổi c\xe1c g\xf3i dịch vụ",
            }),
            (0, i.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: v.map((e) => {
                let t = n(e.code);
                return (0, i.jsxs)(
                  "div",
                  {
                    className:
                      "rounded-2xl transition-all duration-300 p-6 relative border-2 flex flex-col "
                        .concat(
                          t
                            ? "border-green-500 shadow-lg shadow-green-500/25"
                            : "BASIC" === e.code
                            ? "border-blue-500 hover:shadow-lg hover:shadow-blue-500/25"
                            : "PREMIUM" === e.code
                            ? "border-orange-500 hover:shadow-lg hover:shadow-orange-500/25"
                            : "border-yellow-500 hover:shadow-lg hover:shadow-yellow-500/25",
                          " "
                        )
                        .concat(
                          t
                            ? "bg-green-500/5"
                            : "BASIC" === e.code
                            ? "bg-blue-500/5"
                            : "PREMIUM" === e.code
                            ? "bg-orange-500/5"
                            : "bg-yellow-500/5"
                        ),
                    children: [
                      t &&
                        (0, i.jsx)("div", {
                          className:
                            "absolute -top-3 left-1/2 transform -translate-x-1/2",
                          children: (0, i.jsxs)("span", {
                            className:
                              "bg-green-500 text-white text-sm font-semibold px-4 py-1 rounded-full flex items-center gap-2",
                            children: [(0, i.jsx)(p.Z, {}), "G\xf3i hiện tại"],
                          }),
                        }),
                      (0, i.jsx)("div", {
                        className: "mb-4",
                        children: (0, i.jsxs)("div", {
                          className: "mb-4 flex flex-col gap-1 items-center",
                          children: [
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("div", {
                                className: "text-4xl",
                                children: e.icon,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("div", {
                                className: "text-gray-900 text-xl",
                                children: e.name,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsxs)("h3", {
                                className: "text-3xl text-gray-800 m-0",
                                children: [e.giftPercentage, " qu\xe0 tặng"],
                              }),
                            }),
                            (0, i.jsx)("div", {
                              children: (0, i.jsx)("div", {
                                className: "text-sm text-gray-700",
                                children: e.transactionFee,
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "mb-6 space-y-3 flex-grow",
                        children: (0, i.jsx)("ul", {
                          className: "space-y-3",
                          children: e.features.map((e) =>
                            (0, i.jsx)(
                              "li",
                              {
                                className: "flex items-start gap-2 text-sm",
                                children:
                                  "boolean" == typeof e.value
                                    ? (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          e.value
                                            ? (0, i.jsx)(y.Z, {
                                                className:
                                                  "text-green-500 text-lg mt-0.5 flex-shrink-0",
                                              })
                                            : (0, i.jsx)("span", {
                                                className:
                                                  "text-gray-300 text-lg mt-0.5 flex-shrink-0",
                                                children: "-",
                                              }),
                                          (0, i.jsx)("span", {
                                            className: "text-gray-700 ".concat(
                                              e.value ? "" : "opacity-60"
                                            ),
                                            children: e.label,
                                          }),
                                        ],
                                      })
                                    : (0, i.jsxs)(i.Fragment, {
                                        children: [
                                          (0, i.jsx)(y.Z, {
                                            className:
                                              "text-green-500 text-lg mt-0.5 flex-shrink-0",
                                          }),
                                          (0, i.jsxs)("div", {
                                            children: [
                                              (0, i.jsx)("div", {
                                                className:
                                                  "text-gray-700 font-medium",
                                                children: e.label,
                                              }),
                                              (0, i.jsx)("div", {
                                                className:
                                                  "text-xs text-gray-500 mt-1",
                                                children: e.value,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                              },
                              e.key
                            )
                          ),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "mt-auto",
                        children: (() => {
                          let t = s(e);
                          return t.disabled
                            ? (0, i.jsx)("button", {
                                disabled: !0,
                                className:
                                  "w-full bg-gray-300 text-gray-500 px-4 py-2 rounded-lg text-sm font-medium cursor-not-allowed flex items-center justify-center gap-2",
                                children: t.text,
                              })
                            : (0, i.jsx)(f.default, {
                                href: t.href,
                                className: "block",
                                children: (0, i.jsx)("button", {
                                  className:
                                    "w-full bg-zen-primary hover:bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2",
                                  children: t.text,
                                }),
                              });
                        })(),
                      }),
                    ],
                  },
                  e.code
                );
              }),
            }),
          ],
        });
      }
      var b = n(59646),
        N = n(24419),
        w = n(11068),
        S = n(99376);
      function E() {
        var e, t, n, f;
        let p = (0, S.useRouter)(),
          { data: y, isLoading: v } = (0, m.Pi)(),
          [E, C] = (0, s.useState)(1),
          {
            data: k,
            isLoading: Z,
            error: q,
          } = (0, N.o)({ page: E, limit: 10, types: ["points", "credits"] });
        if (v)
          return (0, i.jsxs)(a.Z, {
            gutter: [16, 16],
            className: "mb-6",
            children: [
              (0, i.jsx)(r.Z, {
                xs: 24,
                sm: 12,
                children: (0, i.jsx)(l.Z, {
                  children: (0, i.jsx)(c.Z, {
                    active: !0,
                    paragraph: { rows: 4 },
                  }),
                }),
              }),
              (0, i.jsx)(r.Z, {
                xs: 24,
                sm: 12,
                children: (0, i.jsx)(l.Z, {
                  children: (0, i.jsx)(c.Z, {
                    active: !0,
                    paragraph: { rows: 4 },
                  }),
                }),
              }),
            ],
          });
        let P =
            null !== (t = null == y ? void 0 : y.points) && void 0 !== t
              ? t
              : 0,
          D =
            null !== (n = null == y ? void 0 : y.credits) && void 0 !== n
              ? n
              : 0,
          A =
            null !==
              (f =
                null == y
                  ? void 0
                  : null === (e = y.plan) || void 0 === e
                  ? void 0
                  : e.code) && void 0 !== f
              ? f
              : "FREE",
          T =
            P *
            ((e) => {
              switch (e.toUpperCase()) {
                case "FREE":
                default:
                  return 0;
                case "BASIC":
                  return 0.5;
                case "PREMIUM":
                  return 1;
              }
            })(A);
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)("h1", {
              className:
                "text-2xl text-gray-900 mb-2 flex items-center gap-1 mt-0",
              children: "V\xed của t\xf4i",
            }),
            (0, i.jsx)("p", {
              className: "text-gray-500 mb-6 m-0",
              children: "Quản l\xfd số dư points v\xe0 credits của bạn",
            }),
            (0, i.jsxs)(a.Z, {
              gutter: [16, 16],
              className: "mb-6",
              children: [
                (0, i.jsx)(r.Z, {
                  xs: 24,
                  sm: 8,
                  children: (0, i.jsxs)(l.Z, {
                    className: "h-full relative",
                    children: [
                      (0, i.jsx)("div", {
                        className: "absolute top-4 right-4",
                        children: (0, i.jsx)(o.ZP, {
                          type: "primary",
                          size: "small",
                          onClick: () => p.push("/dashboard/withdraws"),
                          children: "R\xfat tiền",
                        }),
                      }),
                      (0, i.jsx)(d.Z, {
                        title: "Points",
                        suffix: (0, i.jsx)(b.Icon, {
                          icon: "noto:heart-suit",
                          width: 20,
                          height: 20,
                        }),
                        value: P,
                        styles: {
                          content: {
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "#ff4d4f",
                          },
                        },
                      }),
                    ],
                  }),
                }),
                (0, i.jsx)(r.Z, {
                  xs: 24,
                  sm: 8,
                  children: (0, i.jsx)(l.Z, {
                    className: "h-full",
                    children: (0, i.jsx)(d.Z, {
                      title: "Số dư quy đổi",
                      suffix: "đ",
                      value: Math.floor(10 * T).toLocaleString("vi-VN"),
                      styles: {
                        content: {
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#1e53e3",
                        },
                      },
                    }),
                  }),
                }),
                (0, i.jsx)(r.Z, {
                  xs: 24,
                  sm: 8,
                  children: (0, i.jsx)(l.Z, {
                    className: "h-full",
                    children: (0, i.jsx)(d.Z, {
                      title: "T\xedn dụng (Credits)",
                      suffix: (0, i.jsx)(b.Icon, {
                        icon: "emojione-v1:lightning-mood",
                        width: 20,
                        height: 20,
                      }),
                      value: D,
                      styles: {
                        content: {
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#fbb11c",
                        },
                      },
                    }),
                  }),
                }),
              ],
            }),
            (0, i.jsxs)(l.Z, {
              className: "!mb-6",
              title: "Lịch sử điểm & t\xedn dụng",
              children: [
                q &&
                  (0, i.jsx)("div", {
                    className: "mb-4",
                    children: (0, i.jsx)(h.Z, {
                      type: "error",
                      message: "Kh\xf4ng thể tải lịch sử hoạt động v\xed",
                      description:
                        "Vui l\xf2ng thử lại sau hoặc tải lại trang.",
                      showIcon: !0,
                    }),
                  }),
                (0, i.jsx)(u.Z, {
                  spinning: Z,
                  children:
                    Z || (k && 0 !== k.items.length)
                      ? (0, i.jsx)(w.Z, {
                          data: (null == k ? void 0 : k.items) || [],
                          loading: Z,
                          types: ["points", "credits"],
                        })
                      : (0, i.jsx)("div", {
                          className: "py-4",
                          children: (0, i.jsx)(g.Z, {
                            description:
                              "Chưa c\xf3 hoạt động n\xe0o li\xean quan đến points hoặc t\xedn dụng",
                          }),
                        }),
                }),
                k &&
                  k.meta.total > 10 &&
                  (0, i.jsx)("div", {
                    className: "mt-4 flex justify-center",
                    children: (0, i.jsx)(x.Z, {
                      current: k.meta.page,
                      pageSize: k.meta.limit,
                      total: k.meta.total,
                      onChange: (e) => C(e),
                      size: "default",
                      showSizeChanger: !1,
                    }),
                  }),
              ],
            }),
            (0, i.jsxs)(l.Z, {
              className: "!mb-6",
              children: [
                (0, i.jsx)("h2", {
                  className: "text-xl mb-4 m-0",
                  children: "Th\xf4ng tin chi tiết",
                }),
                (0, i.jsxs)("div", {
                  className: "space-y-4",
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("strong", {
                          className: "!text-[#ff4d4f]",
                          children: "Points",
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "mt-2 ml-3 space-y-1 text-sm list-disc list-inside",
                          children: [
                            (0, i.jsx)("li", {
                              children:
                                "Đơn vị t\xedch lũy từ c\xe1c qu\xe0 tặng m\xe0 bạn nhận được từ bạn b\xe8 th\xf4ng qua thiệp online của bạn.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "C\xf3 thể quy đổi th\xe0nh credits để sử dụng cho c\xe1c t\xednh năng AI.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "C\xf3 thể quy đổi th\xe0nh tiền mặt để r\xfat về t\xe0i khoản ng\xe2n h\xe0ng theo bảng ph\xed quy đổi ph\xeda dưới.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("strong", {
                          className: "!text-[#1e53e3]",
                          children: "Số dư quy đổi",
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "mt-2 ml-3 space-y-1 text-sm list-disc list-inside",
                          children: [
                            (0, i.jsx)("li", {
                              children:
                                "Số dư quy đổi từ points của bạn theo bảng ph\xed quy đổi ph\xeda dưới.",
                            }),
                            (0, i.jsxs)("li", {
                              children: [
                                "Thanh to\xe1n linh hoạt khi đạt ngưỡng",
                                " ",
                                (0, i.jsx)("strong", {
                                  className: "!font-bold",
                                  children: "50.000 Points",
                                }),
                                ", bạn c\xf3 thể y\xeau cầu r\xfat tiền về t\xe0i khoản ng\xe2n h\xe0ng.",
                              ],
                            }),
                            (0, i.jsxs)("li", {
                              children: [
                                "Số dư quy đổi chỉ được t\xednh",
                                " ",
                                (0, i.jsx)("b", {
                                  className: "!font-bold",
                                  children:
                                    "sau khi bạn n\xe2ng cấp g\xf3i Basic trở l\xean",
                                }),
                                ". C\xe1c phần qu\xe0 tặng",
                                " ",
                                (0, i.jsx)("b", {
                                  className: "!font-bold",
                                  children:
                                    "trước đ\xf3 sẽ kh\xf4ng được t\xednh",
                                }),
                                " v\xe0o số dư quy đổi.",
                              ],
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Ch\xfang t\xf4i c\xf3 quyền từ chối thanh to\xe1n nếu ph\xe1t hiện vi phạm quy tắc thanh to\xe1n.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)("strong", {
                          className: "!text-[#fbb11c]",
                          children: "T\xedn dụng (Credits)",
                        }),
                        (0, i.jsxs)("ul", {
                          className:
                            "mt-2 ml-3 space-y-1 text-sm list-disc list-inside",
                          children: [
                            (0, i.jsx)("li", {
                              children:
                                "Đơn vị t\xedch hợp với AI API để sử dụng cho c\xe1c t\xednh năng AI.",
                            }),
                            (0, i.jsx)("li", {
                              children:
                                "Kh\xf4ng thể quy đổi th\xe0nh points hoặc số dư quy đổi.",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: "flex justify-end mt-4",
                  children: (0, i.jsx)("div", {
                    className: "text-sm text-gray-500 italic",
                    children: "Ng\xe0y cập nhật cuối: 02:20:25 -02/12/2025",
                  }),
                }),
              ],
            }),
            (0, i.jsx)(j, { currentPlan: A }),
          ],
        });
      }
    },
    11068: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var i = n(57437);
      n(2265);
      var s = n(48651),
        a = n(85180),
        r = n(47502),
        l = n(47341),
        c = n(32864),
        o = n(12108),
        d = n(33051),
        h = n(54771),
        u = n(63589),
        g = n(20360),
        x = n(13473),
        m = n(85839),
        f = n(36746),
        p = n(96397),
        y = n(56621),
        v = n(27648);
      function j(e) {
        var t;
        let { activity: n } = e,
          {
            icon: s,
            bgColor: a,
            iconColor: j,
          } = (t = n.rawAction).includes("MESSAGE") || t.includes("MESSAGES")
            ? {
                icon: (0, i.jsx)(h.Z, { weight: "BoldDuotone", size: 20 }),
                bgColor: "bg-gray-100",
                iconColor: "text-red-500",
              }
            : t.includes("RSVP")
            ? {
                icon: (0, i.jsx)(u.Z, { weight: "BoldDuotone", size: 20 }),
                bgColor: "bg-gray-100",
                iconColor: "text-green-500",
              }
            : t.includes("GIFT")
            ? {
                icon: (0, i.jsx)(g.Z, { weight: "BoldDuotone", size: 20 }),
                bgColor: "bg-pink-50",
                iconColor: "text-pink-500",
              }
            : t.includes("POINTS") || t.includes("CREDITS")
            ? {
                icon: (0, i.jsx)(x.Z, { weight: "BoldDuotone", size: 20 }),
                bgColor: "bg-yellow-50",
                iconColor: "text-yellow-600",
              }
            : t.includes("PLAN")
            ? {
                icon: (0, i.jsx)(m.Z, { weight: "BoldDuotone", size: 20 }),
                bgColor: "bg-blue-50",
                iconColor: "text-blue-500",
              }
            : {
                icon: (0, i.jsx)(f.Z, { weight: "BoldDuotone", size: 20 }),
                bgColor: "bg-gray-50",
                iconColor: "text-gray-500",
              },
          b = (() => {
            var e;
            if (!(null === (e = n.page) || void 0 === e ? void 0 : e.id))
              return null;
            let t = n.rawAction.toUpperCase();
            return t.includes("RSVP")
              ? "/dashboard/pages/".concat(n.page.id, "/rsvp")
              : t.includes("MESSAGE") || t.includes("MESSAGES")
              ? "/dashboard/pages/".concat(n.page.id, "/messages")
              : "/dashboard/pages/".concat(n.page.id);
          })(),
          N = (0, i.jsxs)("div", {
            className: "flex items-start gap-3 w-full",
            children: [
              (0, i.jsx)("div", {
                className: ""
                  .concat(a, " rounded-full p-2.5 flex-shrink-0 ")
                  .concat(j),
                children: s,
              }),
              (0, i.jsxs)("div", {
                className: "flex-1 min-w-0",
                children: [
                  (0, i.jsx)("div", {
                    className: "mb-1",
                    children: (0, i.jsx)("p", {
                      className:
                        "text-sm font-semibold text-gray-900 m-0 line-clamp-2 break-words",
                      children: n.content,
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "flex items-center text-xs text-gray-400 mb-1",
                    children: [
                      (0, i.jsx)(p.Z, {
                        weight: "LineDuotone",
                        size: 12,
                        className: "mr-1",
                      }),
                      (0, i.jsx)("span", {
                        children: ((e) => {
                          let t = new Date(e),
                            n = new Date(),
                            i = (0, r.X)(n, t);
                          if (i < 1) return "Vừa xong";
                          if (i < 60) return "".concat(i, " ph\xfat trước");
                          let s = (0, l.A)(n, t);
                          if (s < 24) return "".concat(s, " giờ trước");
                          let a = (0, c.j)(n, t);
                          return a < 30
                            ? "".concat(a, " ng\xe0y trước")
                            : (0, o.WU)(t, "dd/MM/yyyy HH:mm", {
                                locale: d.vi,
                              });
                        })(n.createdAt),
                      }),
                    ],
                  }),
                  n.page &&
                    n.page.id &&
                    (0, i.jsxs)("div", {
                      className: "flex items-center text-xs text-blue-500",
                      children: [
                        (0, i.jsx)(f.Z, {
                          weight: "LineDuotone",
                          size: 12,
                          className: "mr-1 flex-shrink-0",
                        }),
                        (0, i.jsx)("span", {
                          className: "truncate",
                          children: n.page.name || "Trang kh\xf4ng t\xean",
                        }),
                      ],
                    }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex-shrink-0 text-gray-300 mt-1",
                children: (0, i.jsx)(y.Z, { weight: "LineDuotone", size: 20 }),
              }),
            ],
          });
        return b
          ? (0, i.jsx)(v.default, {
              href: b,
              className: "block",
              children: (0, i.jsx)("div", {
                className:
                  "bg-white rounded-xl border border-gray-100 p-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer",
                children: N,
              }),
            })
          : (0, i.jsx)("div", {
              className:
                "bg-white rounded-xl border border-gray-100 p-3 shadow-sm",
              children: N,
            });
      }
      function b(e) {
        let { data: t, loading: n = !1, types: r } = e,
          l =
            r && r.length > 0
              ? t.filter((e) =>
                  r.includes(
                    (function (e) {
                      switch (e) {
                        case "RECEIVED_GIFT":
                          return "gift";
                        case "POINTS_UPDATE":
                        case "POINTS_UPDATED_BY_ADMIN":
                          return "points";
                        case "CREDITS_UPDATE":
                        case "CREDITS_UPDATED_BY_ADMIN":
                          return "credits";
                        default:
                          return "plan";
                      }
                    })(e.rawAction)
                  )
                )
              : t;
        return (0, i.jsx)("div", {
          className: "space-y-3",
          children: n
            ? (0, i.jsx)("div", {
                className: "flex justify-center py-12",
                children: (0, i.jsx)(s.Z, { size: "large" }),
              })
            : 0 === l.length
            ? (0, i.jsx)("div", {
                className: "py-6",
                children: (0, i.jsx)(a.Z, {
                  description: "Chưa c\xf3 hoạt động n\xe0o gần đ\xe2y",
                }),
              })
            : (0, i.jsx)("div", {
                className: "space-y-3",
                children: l.map((e) => (0, i.jsx)(j, { activity: e }, e.id)),
              }),
        });
      }
    },
    50828: function (e, t, n) {
      "use strict";
      n.d(t, {
        H4: function () {
          return h;
        },
        Io: function () {
          return d;
        },
        Pi: function () {
          return c;
        },
        hU: function () {
          return u;
        },
        mr: function () {
          return o;
        },
      });
      var i = n(71632),
        s = n(29827),
        a = n(21770),
        r = n(80605);
      let l = (0, n(33818).g)("https://api.zenlove.me");
      function c() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { status: t } = (0, r.useSession)();
        return (0, i.a)({
          queryKey: ["me"],
          queryFn: async () => (await l("/v1/users/me")).data,
          enabled: e && "authenticated" === t,
          retry: (e, t) =>
            !(t instanceof Error && t.message.includes("Unauthorized")) &&
            e < 3,
          staleTime: 3e5,
        });
      }
      function o() {
        let e = (0, s.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/auth/register", {
                method: "POST",
                body: JSON.stringify({
                  name: e.name,
                  email: e.email,
                  password: e.password,
                }),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function d() {
        let { update: e } = (0, r.useSession)(),
          t = (0, s.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/users/me", {
                method: "PATCH",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: (n) => {
            try {
              null == e || e({ user: n });
            } catch (e) {}
            t.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function h() {
        let e = (0, s.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            await l("/v1/auth/resend-verification", {
              method: "POST",
              body: JSON.stringify({ email: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function u() {
        let e = (0, s.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            await l("/v1/auth/verify-email", {
              method: "POST",
              body: JSON.stringify({ token: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
    },
    24419: function (e, t, n) {
      "use strict";
      n.d(t, {
        o: function () {
          return a;
        },
      });
      var i = n(71632);
      let s = (0, n(33818).g)("https://api.zenlove.me");
      function a() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          { page: t = 1, limit: n = 10, types: a } = e;
        return (0, i.a)({
          queryKey: ["recent-activity", { page: t, limit: n, types: a }],
          queryFn: async () => {
            let e = new URLSearchParams();
            t && e.append("page", String(t)),
              n && e.append("limit", String(n)),
              a && "string" == typeof a
                ? e.append("types", a)
                : Array.isArray(a) &&
                  a.length > 0 &&
                  e.append("types", a.join(","));
            let i = e.toString();
            return (
              await s("/v1/recent-activity".concat(i ? "?".concat(i) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
    },
    33818: function (e, t, n) {
      "use strict";
      let i, s;
      n.d(t, {
        g: function () {
          return d;
        },
      });
      var a = n(83464),
        r = n(82957).Buffer;
      let l = null;
      function c(e) {
        if (e)
          try {
            let t = e.split(".");
            if (3 !== t.length) return;
            let n = (function (e) {
                try {
                  let t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    n = t + "===".slice(0, (4 - (t.length % 4)) % 4);
                  if ("function" == typeof atob) {
                    let e = atob(n),
                      t = "";
                    for (let n = 0; n < e.length; n++) {
                      let i = e.charCodeAt(n).toString(16).padStart(2, "0");
                      t += "%" + i;
                    }
                    return decodeURIComponent(t);
                  }
                  return r.from(n, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              i = JSON.parse(n);
            if ("number" == typeof i.exp) return 1e3 * i.exp;
          } catch (e) {}
      }
      async function o() {
        return i && s && Date.now() + 3e5 < s
          ? i
          : (l ||
              (l = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    a = null == t ? void 0 : t.accessToken;
                  return (i = a), (s = c(a) || Date.now() + 36e5), a;
                } catch (e) {
                  (i = void 0), (s = void 0);
                  return;
                } finally {
                  l = null;
                }
              })()),
            l);
      }
      function d(e) {
        let t = (function (e) {
          let t = a.Z.create({ baseURL: e, timeout: 3e4 });
          return (
            t.interceptors.request.use(
              async (e) => {
                let t;
                if ((t = await o())) {
                  let n = e.headers;
                  n && "function" == typeof n.set
                    ? n.set("Authorization", "Bearer ".concat(t))
                    : n &&
                      "object" == typeof n &&
                      (n.Authorization = "Bearer ".concat(t));
                }
                if (!(e.data instanceof FormData)) {
                  let t = e.headers;
                  t && "function" == typeof t.set
                    ? t.set("Content-Type", "application/json")
                    : t &&
                      "object" == typeof t &&
                      (t["Content-Type"] = "application/json");
                }
                return e;
              },
              (e) => Promise.reject(e)
            ),
            t.interceptors.response.use(
              (e) => e,
              async (e) => {
                var a, r, l;
                let o = e.config;
                if (
                  (null === (a = e.response) || void 0 === a
                    ? void 0
                    : a.status) === 401 &&
                  !o._retry
                ) {
                  o._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      a = await e.getSession(),
                      r = null == a ? void 0 : a.accessToken,
                      l = null == a ? void 0 : a.error;
                    if (r && !l && r !== i)
                      return (
                        (i = r),
                        (s = c(r) || Date.now() + 3e5),
                        o.headers &&
                          (o.headers.Authorization = "Bearer ".concat(r)),
                        t.request(o)
                      );
                    (i = void 0),
                      (s = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (l = e.response) || void 0 === l
                      ? void 0
                      : null === (r = l.data) || void 0 === r
                      ? void 0
                      : r.message) ||
                      e.message ||
                      "Request failed"
                  )
                );
              }
            ),
            t
          );
        })(e);
        return async function (e, n) {
          try {
            let i = {
              method: (null == n ? void 0 : n.method) || "GET",
              data: null == n ? void 0 : n.body,
              headers: null == n ? void 0 : n.headers,
            };
            return (await t.request({ url: e, ...i })).data;
          } catch (e) {
            throw e;
          }
        };
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 6815, 8640,
        5909, 8651, 639, 4170, 2972, 9646, 605, 4178, 6931, 8487, 6543, 2777,
        2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 80934));
      }
    ),
      (_N_E = e.O());
  },
]);
