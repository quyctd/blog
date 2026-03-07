(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7670],
  {
    10944: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 16319));
    },
    16319: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return P;
        },
      });
      var a = n(57437),
        r = n(35502),
        i = n(50828),
        s = n(50337);
      n(2265);
      var o = n(96931),
        l = n(45235),
        c = n(1994),
        d = n(51653),
        u = n(47451),
        m = n(69410),
        h = n(35291),
        g = n(85012),
        f = n(3566),
        x = n(7296),
        p = n(34577),
        b = n(59646);
      let v = (e) => {
        let {
            title: t,
            icon: n,
            current: r,
            max: i,
            unit: s = "",
            color: d = "#1890ff",
          } = e,
          u = (0, p.a)("(max-width: 768px)"),
          m = i > 0 ? Math.round((r / i) * 100) : 0,
          h = Math.max(i - r, 0),
          g = "#7cb305";
        return (
          m >= 90 ? (g = "#ff4d4f") : m >= 70 && (g = "#d46b08"),
          (0, a.jsxs)(o.Z, {
            className: "h-full",
            styles: { body: { padding: "12px 16px" } },
            children: [
              (0, a.jsx)("div", {
                className: "flex items-center justify-between mb-2 md:mb-4",
                children: (0, a.jsxs)("div", {
                  className: "flex items-center gap-1",
                  children: [
                    (0, a.jsx)("div", {
                      style: { color: d },
                      className: "text-[16px] md:text-xl",
                      children: n,
                    }),
                    (0, a.jsx)("div", {
                      className: "text-[12px] font-bold md:text-xl m-0",
                      children: t,
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className: "space-y-0 md:space-y-3",
                children: [
                  (0, a.jsx)(l.Z, {
                    value: r,
                    suffix: s,
                    styles: {
                      content: {
                        fontSize: u ? "12px" : "28px",
                        fontWeight: u ? "semibold" : "bold",
                      },
                    },
                  }),
                  (0, a.jsxs)("div", {
                    className: "space-y-0 md:space-y-2",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "hidden md:flex justify-between text-sm text-gray-600",
                        children: [
                          (0, a.jsxs)("span", {
                            children: ["Đ\xe3 sử dụng: ", r.toLocaleString()],
                          }),
                          (0, a.jsxs)("span", {
                            children: ["Giới hạn: ", i.toLocaleString()],
                          }),
                        ],
                      }),
                      (0, a.jsx)(c.Z, {
                        percent: m,
                        strokeColor: g,
                        railColor: "#f0f0f0",
                        showInfo: !1,
                        size: "small",
                      }),
                      (0, a.jsxs)("div", {
                        className: "hidden md:flex justify-between text-sm",
                        children: [
                          (0, a.jsxs)("span", {
                            className: "font-medium",
                            children: [m, "% đ\xe3 sử dụng"],
                          }),
                          (0, a.jsxs)("span", {
                            className: "text-gray-500",
                            children: ["C\xf2n lại: ", h.toLocaleString()],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      };
      var y = (e) => {
          let { limits: t, usage: n, isLoading: r, error: i } = e;
          if (i)
            return (0, a.jsx)(d.Z, {
              message: "Lỗi tải dữ liệu thống k\xea",
              description:
                "Kh\xf4ng thể tải th\xf4ng tin sử dụng. Vui l\xf2ng thử lại sau.",
              type: "error",
              icon: (0, a.jsx)(h.Z, {}),
              showIcon: !0,
              className: "mb-6",
            });
          if (r)
            return (0, a.jsx)(u.Z, {
              gutter: [16, 16],
              className: "mb-6",
              children: [1, 2, 3].map((e) =>
                (0, a.jsx)(
                  m.Z,
                  {
                    xs: 24,
                    sm: 12,
                    lg: 8,
                    children: (0, a.jsx)(o.Z, {
                      className: "h-full",
                      children: (0, a.jsx)(s.Z, {
                        active: !0,
                        paragraph: { rows: 4 },
                      }),
                    }),
                  },
                  e
                )
              ),
            });
          if (!t || !n)
            return (0, a.jsx)(d.Z, {
              message: "Kh\xf4ng c\xf3 dữ liệu",
              description:
                "Kh\xf4ng thể tải th\xf4ng tin giới hạn v\xe0 sử dụng.",
              type: "warning",
              showIcon: !0,
              className: "mb-6",
            });
          let { limits: l } = t,
            { imagesCount: c, pagesCount: p, totalViews: y } = n;
          return (0, a.jsxs)("div", {
            className:
              "p-4 px-4 py-3 bg-white mb-4 overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:rounded-2xl md:shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
            children: [
              (0, a.jsxs)("h2", {
                className: "text-base md:text-xl mb-4 m-0 flex items-end gap-2",
                children: [
                  (0, a.jsx)(b.Icon, {
                    icon: "mynaui:chart-line",
                    className: "w-5 h-5 text-blue-500 md:w-6 md:h-6",
                  }),
                  (0, a.jsx)("span", { children: "Thống k\xea sử dụng" }),
                ],
              }),
              (0, a.jsxs)(u.Z, {
                gutter: [8, 8],
                children: [
                  (0, a.jsx)(m.Z, {
                    xs: 8,
                    sm: 12,
                    lg: 8,
                    children: (0, a.jsx)(v, {
                      title: "H\xecnh ảnh",
                      icon: (0, a.jsx)(g.Z, {}),
                      current: c,
                      max: (null == l ? void 0 : l.maxImages) || 0,
                      unit: "ảnh",
                      color: "#1890ff",
                    }),
                  }),
                  (0, a.jsx)(m.Z, {
                    xs: 8,
                    sm: 12,
                    lg: 8,
                    children: (0, a.jsx)(v, {
                      title: "Thiệp",
                      icon: (0, a.jsx)(f.Z, {}),
                      current: p,
                      max: (null == l ? void 0 : l.maxPages) || 0,
                      unit: "thiệp",
                      color: "#52c41a",
                    }),
                  }),
                  (0, a.jsx)(m.Z, {
                    xs: 8,
                    sm: 12,
                    lg: 8,
                    children: (0, a.jsx)(v, {
                      title: "Lượt xem",
                      icon: (0, a.jsx)(x.Z, {}),
                      current: y,
                      max: (null == l ? void 0 : l.maxViews) || 0,
                      unit: "lượt",
                      color: "#722ed1",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        w = n(80605),
        j = n(99376);
      function N(e) {
        let { icon: t, label: n, href: r, color: i } = e,
          s = (0, j.useRouter)();
        return (0, a.jsxs)("div", {
          className: "flex flex-col items-center cursor-pointer group",
          onClick: () => {
            s.replace(r);
          },
          children: [
            (0, a.jsx)("div", {
              className:
                "w-12 h-12 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center mb-2 group-active:scale-95 transition-transform",
              children: (0, a.jsx)(b.Icon, { icon: t, color: i, height: 24 }),
            }),
            (0, a.jsx)("span", {
              className: "text-gray-900 font-medium text-center text-xs",
              children: n,
            }),
          ],
        });
      }
      function S() {
        return (0, a.jsx)("div", {
          className:
            "block md:hidden px-4 py-3 bg-white mb-4 overflow-hidden rounded-2xl  shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:rounded-2xl md:shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
          children: (0, a.jsx)("div", {
            className: "grid grid-cols-4 gap-4",
            children: [
              {
                icon: "solar:document-text-bold-duotone",
                label: "Thiệp của t\xf4i",
                href: "/dashboard/pages",
                color: "#1890ff",
              },
              {
                icon: "solar:chat-square-like-bold-duotone",
                label: "Lời ch\xfac",
                href: "/dashboard/messages",
                color: "#13c2c2",
              },
              {
                icon: "solar:plain-3-bold-duotone",
                label: "Tham dự",
                href: "/dashboard/rsvp",
                color: "#faad14",
              },
              {
                icon: "solar:gift-bold-duotone",
                label: "Qu\xe0 tặng",
                href: "/dashboard/received-gifts",
                color: "#f5222d",
              },
              {
                icon: "solar:gallery-edit-bold-duotone",
                label: "Mẫu thiệp",
                href: "/templates",
                color: "#faad14",
              },
              {
                icon: "solar:wallet-2-bold-duotone",
                label: "V\xed",
                href: "/dashboard/wallet",
                color: "#13c2c2",
              },
              {
                icon: "solar:crown-bold-duotone",
                label: "G\xf3i dịch vụ",
                href: "/pricing",
                color: "#faad14",
              },
              {
                icon: "solar:headphones-round-sound-bold-duotone",
                label: "Hỗ trợ",
                href: "/contact",
                color: "#3f83f8",
              },
            ].map((e) => (0, a.jsx)(N, { ...e }, e.href)),
          }),
        });
      }
      var _ = n(50209);
      function k() {
        return (0, a.jsxs)("div", {
          className:
            "px-4 py-3 bg-white mb-4 overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:rounded-2xl md:shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
          children: [
            (0, a.jsxs)("h3", {
              className:
                "mb-4 text-base md:text-lg m-0 flex items-center gap-2",
              children: [
                (0, a.jsx)(b.Icon, {
                  icon: "arcticons:gfx-tool-for-pubg-bgmi",
                  className: "w-5 h-5 text-blue-500 md:w-6 md:h-6",
                }),
                (0, a.jsx)("span", { children: "C\xf4ng cụ phổ biến" }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "grid grid-cols-4 gap-4",
              children: [
                {
                  icon: "solar:home-smile-angle-bold-duotone",
                  label: "Trang chủ",
                  href: "/",
                  color: "#1890ff",
                },
                {
                  icon: "solar:library-bold-duotone",
                  label: "Mẫu thiệp",
                  href: "/templates",
                  color: "#13c2c2",
                },
                {
                  icon: "solar:heart-bold-duotone",
                  label: "Mẫu y\xeau th\xedch",
                  href: "/favorites",
                  color: "#faad14",
                },
                {
                  icon: "solar:gift-bold-duotone",
                  label: "Thiệp kh\xe1ch h\xe0ng",
                  href: "/thiep-online/khach-hang",
                  color: "#f5222d",
                },
                {
                  icon: "solar:crown-bold-duotone",
                  label: "G\xf3i dịch vụ",
                  href: "/pricing",
                  color: "#faad14",
                },
                {
                  icon: "solar:headphones-round-sound-bold-duotone",
                  label: "Hỗ trợ",
                  href: "/contact",
                  color: "#3f83f8",
                },
                {
                  icon: "solar:document-bold-duotone",
                  label: "Blog",
                  href: "/blog",
                  color: "#f5222d",
                },
                {
                  icon: "solar:play-circle-bold-duotone",
                  label: "Hướng dẫn",
                  href: "https://www.youtube.com/@zenlove.thieponline",
                  color: "#13c2c2",
                },
              ].map((e) => (0, a.jsx)(N, { ...e }, e.href)),
            }),
          ],
        });
      }
      var D = n(35713),
        I = n(91652),
        T = n(85839),
        L = n(73630),
        q = n(71096),
        C = n.n(q),
        E = n(27648);
      function Z(e) {
        let { user: t, me: n } = e,
          r = (0, j.useRouter)(),
          i =
            (null == t ? void 0 : t.plan) === "PREMIUM" ||
            (null == t ? void 0 : t.plan) === "BASIC",
          s = (null == t ? void 0 : t.avatar)
            ? t.avatar.includes("googleusercontent.com") ||
              t.avatar.includes("fbsbx.com")
              ? t.avatar
              : (0, L.$B)(t.avatar, !0)
            : "/assets/images/avatar-default.png",
          { lead: o, rest: l } = (function () {
            let e = new Date().getHours(),
              t = {
                earlyMorning: {
                  lead: "Ch\xe0o ng\xe0y mới!",
                  rest: "C\xf9ng tạo n\xean những tấm thiệp đầy cảm x\xfac nh\xe9 ✨",
                },
                lunchTime: {
                  lead: "Trưa rồi,",
                  rest: "nhớ ăn uống đầy đủ để c\xf3 sức s\xe1ng tạo nha \uD83C\uDF71",
                },
                afternoon: {
                  lead: "Chiều an l\xe0nh!",
                  rest: "Hy vọng mọi kh\xe2u chuẩn bị của bạn đều su\xf4n sẻ \uD83D\uDC8C",
                },
                evening: {
                  lead: "Buổi tối ấm \xe1p!",
                  rest: "D\xe0nh ch\xfat thời gian xem lại thiết kế c\xf9ng người thương nh\xe9 \uD83C\uDF77",
                },
                lateNight: {
                  lead: "Đ\xeam đ\xe3 muộn.",
                  rest: "H\xe3y nghỉ ngơi để rạng rỡ nhất trong ng\xe0y vui nh\xe9 \uD83D\uDE34",
                },
              };
            return e >= 5 && e < 11
              ? t.earlyMorning
              : e >= 11 && e < 14
              ? t.lunchTime
              : e >= 14 && e < 18
              ? t.afternoon
              : e >= 18 && e < 22
              ? t.evening
              : t.lateNight;
          })(),
          c = (null == t ? void 0 : t.name) || "User";
        return (0, a.jsxs)("div", {
          className:
            "mb-4 overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:rounded-2xl md:shadow-[0_4px_20px_rgba(0,0,0,0.06)]",
          children: [
            (0, a.jsx)(E.default, {
              href: "/dashboard/account",
              title: "Xem th\xf4ng tin t\xe0i khoản",
              children: (0, a.jsxs)("div", {
                className: "flex items-center gap-4 p-4 md:p-5",
                children: [
                  (0, a.jsx)("div", {
                    className: "relative flex-shrink-0",
                    children: (0, a.jsx)(D.Z, {
                      size: "small",
                      color: "gold",
                      count: i
                        ? (0, a.jsx)(T.Z, {
                            weight: "BoldDuotone",
                            size: 20,
                            color: "#faad14",
                            className: "md:w-5 md:h-5",
                          })
                        : "",
                      offset: [-2, 2],
                      className: "rounded-full",
                      children: (0, a.jsx)("div", {
                        className:
                          "rounded-full ring-2 ring-white/80 shadow-lg",
                        children: (0, a.jsx)(I.Z, {
                          src: s,
                          size: 52,
                          className:
                            "border-0 md:[&_.ant-avatar]:!w-14 md:[&_.ant-avatar]:!h-14",
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "min-w-0 flex-1",
                    children: [
                      (0, a.jsxs)("p", {
                        className: "text-sm text-gray-600 m-0 leading-snug",
                        children: [
                          o,
                          " ",
                          (0, a.jsx)("span", {
                            className: "font-semibold text-gray-900",
                            children: c,
                          }),
                          " ",
                          "ơi,",
                        ],
                      }),
                      (0, a.jsx)("p", {
                        className:
                          "mt-1 text-sm text-gray-500 m-0 leading-snug",
                        children: l,
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className:
                "border-t border-gray-100 bg-gray-50/60 px-4 py-3 md:px-5 md:py-4",
              children: (0, a.jsxs)("div", {
                className:
                  "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    onClick: () => r.push("/pricing?utm_source=dashboard"),
                    children: [
                      (0, a.jsx)("span", {
                        className: (0, L.cn)(
                          "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
                          i
                            ? "bg-amber-100 text-amber-800"
                            : "bg-gray-200 text-gray-600"
                        ),
                        children: null == t ? void 0 : t.plan,
                      }),
                      (null == n ? void 0 : n.planExpiresAt) &&
                        C()(n.planExpiresAt).isValid() &&
                        (0, a.jsxs)("span", {
                          className: "text-xs text-gray-500",
                          children: [
                            "Hết hạn ",
                            C()(n.planExpiresAt).format("DD/MM/YYYY"),
                          ],
                        }),
                    ],
                  }),
                  (0, a.jsxs)("button", {
                    type: "button",
                    onClick: () => r.push("/pricing?utm_source=dashboard"),
                    id: "upgrade-btn-dashboard",
                    className:
                      "flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#ff4874] px-3 py-2 text-sm font-semibold text-white shadow-sm active:opacity-90 sm:w-auto sm:min-w-[120px]",
                    children: [
                      (0, a.jsx)(T.Z, { weight: "Linear", size: 18 }),
                      "N\xe2ng cấp",
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function P() {
        let { data: e, status: t } = (0, w.useSession)(),
          n = null == e ? void 0 : e.user,
          { data: o } = (0, i.Pi)(),
          { data: l, isLoading: c, error: d } = (0, r.xe)(),
          { data: u, isLoading: m, error: h } = (0, r.$T)();
        return "loading" !== t && ("authenticated" !== t || n)
          ? (0, a.jsx)(a.Fragment, {
              children:
                "authenticated" === t &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(Z, { user: n, me: o }),
                    (0, a.jsx)(S, {}),
                    (0, a.jsx)(_.Z, { info: "dashboard" }),
                    (0, a.jsx)(y, {
                      limits: l,
                      usage: u,
                      isLoading: c || m,
                      error: d || h,
                    }),
                    (0, a.jsx)(k, {}),
                  ],
                }),
            })
          : (0, a.jsx)(s.Z, { active: !0 });
      }
    },
    50209: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(57437),
        r = n(59646),
        i = n(85839),
        s = n(2265),
        o = n(99376),
        l = n(18998);
      function c(e) {
        let { info: t = "dashboard" } = e,
          n = (0, o.useRouter)(),
          [c, d] = (0, s.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              className:
                "px-4 py-3 md:px-6 md:py-4 bg-gradient-to-r from-lime-50 to-green-50 rounded-xl mb-4 cursor-pointer hover:from-lime-100 hover:to-green-100 transition-all duration-200",
              onClick: () => d(!0),
              children: (0, a.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, a.jsxs)("div", {
                    className: " flex items-center gap-3 flex-1",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-10 h-10 rounded-xl bg-gradient-to-br from-lime-500 to-green-600 flex items-center justify-center flex-shrink-0",
                        children: (0, a.jsx)(i.Z, {
                          weight: "BoldDuotone",
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex-1 min-w-0",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-sm md:text-base mb-0.5 mt-0",
                            children: "N\xe2ng cấp giới hạn",
                          }),
                          (0, a.jsx)("p", {
                            className: "text-gray-600 text-xs md:text-sm m-0",
                            children:
                              "Tăng giới hạn số lượng thiệp mời v\xe0 số lượng lượt xem nhiều hơn.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.Icon, {
                    icon: "line-md:arrow-right",
                    className: "text-lg text-gray-400 flex-shrink-0",
                  }),
                ],
              }),
            }),
            (0, a.jsx)(l.Z, {
              open: c,
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
          return c;
        },
      });
      var a = n(57437);
      n(2265);
      var r = n(39486),
        i = n(53743),
        s = n(59646);
      let { Title: o, Text: l } = r.default;
      function c(e) {
        let { open: t, onClose: n, onUpgradePackage: r, onBuyAddons: c } = e;
        return (0, a.jsx)(i.default, {
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
          children: (0, a.jsxs)("div", {
            className: "flex flex-col items-center relative",
            children: [
              (0, a.jsx)("button", {
                onClick: n,
                className:
                  "absolute top-0 right-0 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 active:bg-gray-200 transition-all duration-200 text-gray-400 hover:text-gray-600 z-10",
                "aria-label": "Đ\xf3ng",
                children: (0, a.jsx)(s.Icon, {
                  icon: "solar:close-circle-bold",
                  className: "w-5 h-5",
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-24 h-24 rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 flex items-center justify-center mb-6 shadow-xl relative overflow-hidden group",
                children: [
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                  }),
                  (0, a.jsx)(s.Icon, {
                    icon: "solar:star-fall-bold-duotone",
                    className: "w-12 h-12 text-white relative z-10",
                  }),
                ],
              }),
              (0, a.jsx)(o, {
                level: 3,
                className: "!mb-2 !mt-0 !text-center !text-gray-900 !font-bold",
                children: "N\xe2ng cấp giới hạn",
              }),
              (0, a.jsx)(l, {
                type: "secondary",
                className:
                  "text-sm md:text-base mb-8 text-center max-w-md block",
                children: "Chọn c\xe1ch bạn muốn mở rộng giới hạn sử dụng",
              }),
              (0, a.jsxs)("div", {
                className: "w-full space-y-3",
                children: [
                  (0, a.jsxs)("button", {
                    onClick: () => {
                      null == r || r(), n();
                    },
                    className:
                      "w-full bg-gradient-to-br from-blue-50 to-cyan-50 hover:from-blue-100 hover:to-cyan-100 border border-blue-200 hover:border-blue-300 rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-lg group cursor-pointer active:scale-[0.98]",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200",
                        children: (0, a.jsx)(s.Icon, {
                          icon: "solar:star-bold-duotone",
                          className: "w-7 h-7 text-white",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex-1 text-left min-w-0",
                        children: [
                          (0, a.jsx)(o, {
                            level: 5,
                            className:
                              "!mb-1.5 !mt-0 !text-gray-900 !font-semibold !text-base",
                            children: "N\xe2ng cấp g\xf3i",
                          }),
                          (0, a.jsx)(l, {
                            className:
                              "text-sm text-gray-600 leading-relaxed block",
                            children:
                              "N\xe2ng cấp l\xean g\xf3i cao cấp hơn để c\xf3 giới hạn lớn hơn",
                          }),
                        ],
                      }),
                      (0, a.jsx)(s.Icon, {
                        icon: "solar:alt-arrow-right-bold",
                        className:
                          "w-6 h-6 text-blue-600 group-hover:translate-x-1 transition-transform duration-200 flex-shrink-0",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("button", {
                    onClick: () => {
                      null == c || c(), n();
                    },
                    className:
                      "w-full bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 border border-purple-200 hover:border-purple-300 rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:shadow-lg group cursor-pointer active:scale-[0.98]",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200",
                        children: (0, a.jsx)(s.Icon, {
                          icon: "solar:shop-2-bold-duotone",
                          className: "w-7 h-7 text-white",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex-1 text-left min-w-0",
                        children: [
                          (0, a.jsx)(o, {
                            level: 5,
                            className:
                              "!mb-1.5 !mt-0 !text-gray-900 !font-semibold !text-base",
                            children: "Mua Add-ons",
                          }),
                          (0, a.jsx)(l, {
                            className:
                              "text-sm text-gray-600 leading-relaxed block",
                            children:
                              "Mua th\xeam add-ons để mở rộng giới hạn theo nhu cầu",
                          }),
                        ],
                      }),
                      (0, a.jsx)(s.Icon, {
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
    35502: function (e, t, n) {
      "use strict";
      n.d(t, {
        $T: function () {
          return l;
        },
        DG: function () {
          return c;
        },
        EV: function () {
          return m;
        },
        MT: function () {
          return g;
        },
        W_: function () {
          return h;
        },
        b: function () {
          return d;
        },
        nM: function () {
          return u;
        },
        xe: function () {
          return o;
        },
      });
      var a = n(71632),
        r = n(29827),
        i = n(21770);
      let s = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function o(e) {
        var t;
        return (0, a.a)({
          queryKey: ["addons", "user-limits"],
          queryFn: async () => (await s("/v1/addons/user/limit")).data,
          staleTime: 6e4,
          enabled:
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
          retry: 2,
        });
      }
      function l(e) {
        var t, n;
        let r = o({
          enabled:
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
        });
        return (0, a.a)({
          queryKey: ["addons", "user-usage"],
          queryFn: async () => (await s("/v1/addons/user/usage")).data,
          staleTime: 6e4,
          enabled:
            (null === (n = null == e ? void 0 : e.enabled) ||
              void 0 === n ||
              n) &&
            "success" === r.status,
          retry: 2,
        });
      }
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.a)({
          queryKey: ["addons", "products", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.category && t.append("category", e.category),
              e.page && t.append("page", e.page.toString()),
              e.limit && t.append("limit", e.limit.toString());
            let n = t.toString();
            return (
              await s("/v1/addons/products".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          retry: 2,
        });
      }
      function d() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await s("/v1/addons/purchase", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["addons", "user-limits"] }),
              e.invalidateQueries({ queryKey: ["addons", "user-usage"] }),
              e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function u() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.a)({
          queryKey: ["admin-addons", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.category && t.append("category", e.category),
              void 0 !== e.isActive &&
                t.append("isActive", e.isActive.toString());
            let n = t.toString();
            return (await s("/v1/admin/addons".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          retry: 2,
        });
      }
      function m() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await s("/v1/admin/addons", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-addons"] }),
              e.invalidateQueries({ queryKey: ["addons", "products"] });
          },
        });
      }
      function h() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await s("/v1/admin/addons/".concat(t), {
                method: "PUT",
                body: JSON.stringify(n),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({ queryKey: ["admin-addons"] }),
              e.invalidateQueries({ queryKey: ["admin-addons", n.id] }),
              e.invalidateQueries({ queryKey: ["addons", "products"] });
          },
        });
      }
      function g() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) => (
            await s("/v1/admin/addons/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-addons"] }),
              e.invalidateQueries({ queryKey: ["addons", "products"] });
          },
        });
      }
    },
    50828: function (e, t, n) {
      "use strict";
      n.d(t, {
        H4: function () {
          return u;
        },
        Io: function () {
          return d;
        },
        Pi: function () {
          return l;
        },
        hU: function () {
          return m;
        },
        mr: function () {
          return c;
        },
      });
      var a = n(71632),
        r = n(29827),
        i = n(21770),
        s = n(80605);
      let o = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function l() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { status: t } = (0, s.useSession)();
        return (0, a.a)({
          queryKey: ["me"],
          queryFn: async () => (await o("/v1/users/me")).data,
          enabled: e && "authenticated" === t,
          retry: (e, t) =>
            !(t instanceof Error && t.message.includes("Unauthorized")) &&
            e < 3,
          staleTime: 3e5,
        });
      }
      function c() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await o("/v1/auth/register", {
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
        let { update: e } = (0, s.useSession)(),
          t = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await o("/v1/users/me", {
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
      function u() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            await o("/v1/auth/resend-verification", {
              method: "POST",
              body: JSON.stringify({ email: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function m() {
        let e = (0, r.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            await o("/v1/auth/verify-email", {
              method: "POST",
              body: JSON.stringify({ token: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
    },
    34577: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return r;
        },
      });
      var a = n(2265);
      function r(e) {
        let [t, n] = a.useState(!1);
        return (
          a.useEffect(() => {
            function t(e) {
              n(e.matches);
            }
            let a = matchMedia(e);
            return (
              a.addEventListener("change", t),
              n(a.matches),
              () => a.removeEventListener("change", t)
            );
          }, [e]),
          t
        );
      }
    },
    33818: function (e, t, n) {
      "use strict";
      let a, r;
      n.d(t, {
        g: function () {
          return d;
        },
      });
      var i = n(83464),
        s = n(82957).Buffer;
      let o = null;
      function l(e) {
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
                      let a = e.charCodeAt(n).toString(16).padStart(2, "0");
                      t += "%" + a;
                    }
                    return decodeURIComponent(t);
                  }
                  return s.from(n, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              a = JSON.parse(n);
            if ("number" == typeof a.exp) return 1e3 * a.exp;
          } catch (e) {}
      }
      async function c() {
        return a && r && Date.now() + 3e5 < r
          ? a
          : (o ||
              (o = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    i = null == t ? void 0 : t.accessToken;
                  return (a = i), (r = l(i) || Date.now() + 36e5), i;
                } catch (e) {
                  (a = void 0), (r = void 0);
                  return;
                } finally {
                  o = null;
                }
              })()),
            o);
      }
      function d(e) {
        let t = (function (e) {
          let t = i.Z.create({ baseURL: e, timeout: 3e4 });
          return (
            t.interceptors.request.use(
              async (e) => {
                let t;
                if ((t = await c())) {
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
                var i, s, o;
                let c = e.config;
                if (
                  (null === (i = e.response) || void 0 === i
                    ? void 0
                    : i.status) === 401 &&
                  !c._retry
                ) {
                  c._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      i = await e.getSession(),
                      s = null == i ? void 0 : i.accessToken,
                      o = null == i ? void 0 : i.error;
                    if (s && !o && s !== a)
                      return (
                        (a = s),
                        (r = l(s) || Date.now() + 3e5),
                        c.headers &&
                          (c.headers.Authorization = "Bearer ".concat(s)),
                        t.request(c)
                      );
                    (a = void 0),
                      (r = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (o = e.response) || void 0 === o
                      ? void 0
                      : null === (s = o.data) || void 0 === s
                      ? void 0
                      : s.message) ||
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
            let a = {
              method: (null == n ? void 0 : n.method) || "GET",
              data: null == n ? void 0 : n.body,
              headers: null == n ? void 0 : n.headers,
            };
            return (await t.request({ url: e, ...a })).data;
          } catch (e) {
            throw e;
          }
        };
      }
    },
    73630: function (e, t, n) {
      "use strict";
      n.d(t, {
        $B: function () {
          return m;
        },
        SV: function () {
          return i;
        },
        Yb: function () {
          return f;
        },
        aW: function () {
          return x;
        },
        cn: function () {
          return g;
        },
        sZ: function () {
          return p;
        },
        ud: function () {
          return h;
        },
      });
      var a = n(61994),
        r = n(53335);
      n(25566);
      let i = () => "https://zenlove.me",
        s = new Set(["crop", "width", "height", "fit", "format", "quality"]);
      function o(e) {
        let t = e.split(",");
        return (
          4 === t.length &&
          t.every((e) => {
            let t = Number(e);
            return Number.isFinite(t) && Number.isInteger(t) && t >= 0;
          })
        );
      }
      function l(e) {
        return ["cover", "contain", "fill", "inside", "outside"].includes(e);
      }
      function c(e) {
        return ["webp", "avif", "jpeg", "png", "gif"].includes(e);
      }
      function d(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t > 0;
      }
      function u(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t >= 1 && t <= 100;
      }
      function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = "https://www.quyctd.dev/wedding/cdn";
        n || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [a, r] = e.split("?"),
          i = new URLSearchParams(null != r ? r : ""),
          m = new URLSearchParams();
        for (let [e, t] of i.entries()) {
          if (!s.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let n = !0;
          switch (e) {
            case "crop":
              (n = o(t)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    t,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (n = d(t)) ||
                console.warn(
                  "Invalid "
                    .concat(e, ' value "')
                    .concat(t, '", expected positive integer')
                );
              break;
            case "fit":
              (n = l(t)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    t,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (n = c(t)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    t,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (n = u(t)) ||
                console.warn(
                  'Invalid quality value "'.concat(
                    t,
                    '", expected integer 1-100'
                  )
                );
              break;
            default:
              n = !1;
          }
          n && m.set(e, t);
        }
        t && (m.set("format", "webp"), m.set("quality", "80"));
        let h = m.toString();
        return ""
          .concat(n.replace(/\/+$/, ""), "/")
          .concat(a)
          .concat(h ? "?".concat(h) : "");
      }
      function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, a] = e.split("?"),
          r = new URLSearchParams(null != a ? a : ""),
          i = new URLSearchParams();
        for (let [e, t] of r.entries()) {
          if (!s.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let n = !0;
          switch (e) {
            case "crop":
              (n = o(t)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    t,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (n = d(t)) ||
                console.warn(
                  "Invalid "
                    .concat(e, ' value "')
                    .concat(t, '", expected positive integer')
                );
              break;
            case "fit":
              (n = l(t)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    t,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (n = c(t)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    t,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (n = u(t)) ||
                console.warn(
                  'Invalid quality value "'.concat(
                    t,
                    '", expected integer 1-100'
                  )
                );
              break;
            default:
              n = !1;
          }
          n && i.set(e, t);
        }
        t && (i.set("format", "webp"), i.set("quality", "80"));
        let m = i.toString();
        return ""
          .concat("https://www.quyctd.dev/wedding/cdn-resource".replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(m ? "?".concat(m) : "");
      }
      function g() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.m6)((0, a.W)(t));
      }
      let f = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return m(e, t);
        },
        x = {
          MAX_SIZE: 10485760,
          MAX_MUSIC_SIZE: 52428800,
          ALLOWED_IMAGE_TYPES: [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp",
            "image/gif",
            "image/svg+xml",
          ],
          ALLOWED_DOCUMENT_TYPES: [
            "application/pdf",
            "text/plain",
            "application/msword",
          ],
          ALLOWED_VIDEO_TYPES: ["video/mp4", "video/webm", "video/ogg"],
          ALLOWED_MUSIC_TYPES: [
            "audio/mpeg",
            "audio/mp3",
            "audio/mpeg3",
            "audio/mp4",
            "audio/x-m4a",
            "audio/aac",
            "audio/wav",
            "audio/wave",
            "audio/x-wav",
          ],
        };
      function p(e) {
        let t = e.getFullYear(),
          n = e.getMonth(),
          a = e.getDate(),
          r = new Date(t, n, 1).getDay(),
          i = 0 === r ? 6 : r - 1,
          s = new Date(t, n + 1, 0).getDate(),
          o = [];
        for (let e = 0; e < i; e++) o.push({ type: "empty" });
        for (let e = 1; e <= s; e++) {
          let t = e === a;
          o.push({ type: "day", date: e, isSelected: t });
        }
        return o;
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039, 6815,
        8640, 5831, 5827, 639, 9486, 2972, 3335, 9646, 605, 6931, 5874, 5584,
        2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 10944));
      }
    ),
      (_N_E = e.O());
  },
]);
