(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6648],
  {
    45166: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 44447));
    },
    16223: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(57437);
      n(2265);
      var a = n(59646),
        i = n(53936);
      function o(e) {
        let {
          notification: t,
          onClick: n,
          showBorder: o = !0,
          iconSize: c = 24,
          gap: s = 4,
          padding: l = 4,
          iconContainerSize: u = 12,
        } = e;
        return (0, r.jsxs)("div", {
          className:
            "flex items-start cursor-pointer transition-colors hover:bg-gray-50 ".concat(
              o ? "border-b border-gray-100" : ""
            ),
          style: {
            gap: "".concat(0.25 * s, "rem"),
            padding: "".concat(0.25 * l, "rem"),
          },
          onClick: () => (null == n ? void 0 : n(t)),
          children: [
            (0, r.jsx)("div", {
              className: "shrink-0",
              children: (0, r.jsx)("div", {
                className: "rounded-full flex items-center justify-center",
                style: {
                  backgroundColor: (0, i.gs)(t.type),
                  height: "".concat(0.25 * u, "rem"),
                  width: "".concat(0.25 * u, "rem"),
                },
                children: (0, r.jsx)(a.Icon, {
                  icon: (0, i.vq)(t.type),
                  width: c,
                  height: c,
                  style: { color: (0, i.PT)(t.type) },
                }),
              }),
            }),
            (0, r.jsxs)("div", {
              className: "flex-1 min-w-0",
              children: [
                (0, r.jsx)("div", {
                  className: "text-gray-900 text-sm leading-relaxed",
                  children:
                    t.type === i.k$.SYSTEM_ANNOUNCEMENT
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-semibold",
                              children: "Hệ thống",
                            }),
                            " ",
                            t.content,
                          ],
                        })
                      : t.user
                      ? (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsx)("span", {
                              className: "font-semibold",
                              children: t.user.name,
                            }),
                            " ",
                            t.content,
                          ],
                        })
                      : t.content,
                }),
                (0, r.jsx)("div", {
                  className: "text-xs text-gray-500 mt-1",
                  children: (0, i.c9)(t.createdAt),
                }),
              ],
            }),
            !t.isRead &&
              (0, r.jsx)("div", {
                className: "flex-shrink-0",
                children: (0, r.jsx)("div", {
                  className: "w-2 h-2 bg-red-500 rounded-full",
                }),
              }),
          ],
        });
      }
    },
    44447: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        });
      var r = n(57437),
        a = n(2265),
        i = n(1014),
        o = n(50742),
        c = n(65091),
        s = n(34029),
        l = n(48651),
        u = n(85180),
        d = n(83410),
        h = n(35713),
        A = n(59646),
        f = n(53936),
        g = n(16223),
        m = n(99376);
      function p() {
        let e = (0, m.useRouter)(),
          [t, n] = (0, a.useState)(!1),
          { data: i, isLoading: c } = (0, f.zn)({ page: 1, limit: 15 }),
          { data: p } = (0, f.O4)(),
          E = (0, f.fH)(),
          b = (null == i ? void 0 : i.data) || [],
          x = (null == p ? void 0 : p.count) || 0,
          v = async () => {
            try {
              await E.mutateAsync(),
                s.ZP.success(
                  "Đ\xe3 đ\xe1nh dấu tất cả th\xf4ng b\xe1o l\xe0 đ\xe3 đọc"
                );
            } catch (e) {
              s.ZP.error("C\xf3 lỗi xảy ra khi đ\xe1nh dấu đ\xe3 đọc");
            }
          },
          y = (t) => {
            n(!1),
              t.actionUrl
                ? e.push(t.actionUrl)
                : e.push("/dashboard/notifications");
          },
          N = (0, r.jsxs)("div", {
            className:
              "w-80 max-h-96 bg-white shadow-lg flex flex-col rounded-xl border border-gray-200",
            children: [
              (0, r.jsxs)("div", {
                className:
                  "p-3 rounded-t-2xl border-b border-gray-200 flex items-center justify-between bg-white sticky top-0 z-10",
                children: [
                  (0, r.jsx)("h4", {
                    className: "m-0",
                    children: "Th\xf4ng b\xe1o",
                  }),
                  x > 0 &&
                    (0, r.jsxs)(o.ZP, {
                      type: "text",
                      onClick: v,
                      loading: E.isPending,
                      className: "p-0 h-auto text-sm",
                      children: [
                        (0, r.jsx)(A.Icon, {
                          icon: "charm:tick-double",
                          width: 16,
                          height: 16,
                        }),
                        " Đọc tất cả",
                      ],
                    }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "flex-1 overflow-y-auto",
                children: (0, r.jsx)(l.Z, {
                  spinning: c,
                  children:
                    0 === b.length
                      ? (0, r.jsx)("div", {
                          className: "p-6",
                          children: (0, r.jsx)(u.Z, {
                            description: "Chưa c\xf3 th\xf4ng b\xe1o n\xe0o",
                            image: u.Z.PRESENTED_IMAGE_SIMPLE,
                            className: "m-0",
                          }),
                        })
                      : (0, r.jsx)("div", {
                          children: b.map((e, t) =>
                            (0, r.jsx)(
                              g.Z,
                              {
                                notification: e,
                                onClick: y,
                                showBorder: t !== b.length - 1,
                                iconSize: 18,
                                iconContainerSize: 8,
                                gap: 3,
                                padding: 3,
                              },
                              e.id
                            )
                          ),
                        }),
                }),
              }),
              b.length > 0 &&
                (0, r.jsx)("div", {
                  className:
                    "p-1 rounded-b-2xl border-t border-gray-200 text-center bg-white sticky bottom-0 z-10 ",
                  children: (0, r.jsx)(o.ZP, {
                    type: "text",
                    onClick: () => {
                      n(!1), e.push("/dashboard/notifications");
                    },
                    className: "w-full",
                    children: "Xem tất cả th\xf4ng b\xe1o",
                  }),
                }),
            ],
          });
        return (0, r.jsx)("div", {
          className: "hidden md:block",
          children: (0, r.jsx)(d.Z, {
            popupRender: () => N,
            trigger: ["click", "hover"],
            open: t,
            onOpenChange: n,
            children: (0, r.jsx)(o.ZP, {
              type: "text",
              className: "flex items-center justify-center",
              size: "middle",
              children: (0, r.jsx)(h.Z, {
                count: x > 0 ? x : 0,
                size: "small",
                offset: [-2, 2],
                children: (0, r.jsx)(A.Icon, {
                  icon: "solar:bell-line-duotone",
                  width: 20,
                  height: 20,
                  className: "text-gray-700",
                }),
              }),
            }),
          }),
        });
      }
      var E = n(24153),
        b = n(93843);
      function x(e) {
        let { onOpenMenu: t } = e,
          [n, i] = (0, a.useState)(!1);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("header", {
              className: "hidden md:block sticky top-0 z-[5] bg-white",
              children: (0, r.jsx)("nav", {
                className:
                  "rounded-none bg-transparent py-3 px-4 md:py-4 md:px-8",
                children: (0, r.jsx)("div", {
                  className:
                    "mx-auto flex flex-wrap items-center justify-between",
                  children: (0, r.jsxs)("div", {
                    className: "flex gap-3 items-center justify-between w-full",
                    children: [
                      (0, r.jsx)("div", {
                        className: "flex gap-2 items-center",
                        children: (0, r.jsx)("span", {
                          className:
                            "h-10 w-10 flex text-black xl:hidden rounded-full justify-center items-center hover:bg-primary/10 hover:text-primary cursor-pointer",
                          onClick: () => (null == t ? void 0 : t()),
                          children: (0, r.jsx)(E.Z, {
                            weight: "LineDuotone",
                            className: "w-6 h-6",
                          }),
                        }),
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex gap-4 items-center",
                        children: [
                          (0, r.jsx)(p, {}),
                          (0, r.jsx)(o.ZP, {
                            type: "text",
                            icon: (0, r.jsx)(A.Icon, {
                              icon: "mdi:math-log",
                              width: 20,
                              height: 20,
                            }),
                            onClick: () => i(!0),
                            className: "flex items-center justify-center",
                            size: "large",
                          }),
                          (0, r.jsx)(c.Z, {}),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
            }),
            (0, r.jsx)(b.Z, { open: n, onClose: () => i(!1) }),
          ],
        });
      }
      var v = n(80605),
        y = n(92190),
        N = n(50828),
        I = n(29),
        C = n.n(I);
      function w(e) {
        let {
            icon: t,
            activeIcon: n,
            label: a,
            href: i,
            action: o,
            badgeCount: c,
          } = e,
          s = (0, m.useRouter)(),
          l = (0, m.usePathname)(),
          u =
            !!i && ("/dashboard" === i ? "/dashboard" === l : l.startsWith(i)),
          d = u && n ? n : t;
        return (0, r.jsx)("button", {
          className:
            "flex flex-col items-center justify-center flex-1 h-full transition-all duration-200 ".concat(
              u ? "text-primary" : "text-gray-600 hover:text-primary"
            ),
          onClick: () => {
            if ("function" == typeof o) {
              o();
              return;
            }
            i && s.push(i);
          },
          children:
            a && "Tạo thiệp" === a
              ? (0, r.jsxs)("div", {
                  className: "flex flex-col items-center -mt-[40px]",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "bg-primary flex items-center justify-center rounded-full text-white font-base mb-4 shadow-lg w-11 h-11",
                      children: (0, r.jsx)(A.Icon, {
                        icon: d,
                        className: "text-white",
                        height: 30,
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className: "text-[10px] font-medium uppercase mt-1",
                      children: a,
                    }),
                  ],
                })
              : (0, r.jsxs)(r.Fragment, {
                  children: [
                    (0, r.jsx)(h.Z, {
                      count: c && c > 0 ? c : 0,
                      size: "small",
                      offset: [-4, 4],
                      children: (0, r.jsx)(A.Icon, {
                        icon: d,
                        height: 24,
                        className: "mb-1 hover:text-primary ".concat(
                          u ? "scale-110 text-primary" : "",
                          " transition-transform"
                        ),
                      }),
                    }),
                    (0, r.jsx)("span", {
                      className: "text-[10px] font-medium ".concat(
                        u ? "font-semibold" : ""
                      ),
                      children: a,
                    }),
                  ],
                }),
        });
      }
      var R = n(30528),
        j = n(79408),
        D = n(12808);
      function S(e) {
        return (0, r.jsx)(y.Z, {
          closeIcon: null,
          footer: !1,
          placement: e.placement || "bottom",
          onClose: e.onClose,
          open: e.open,
          size: "auto",
          mask: !0,
          style: { borderTopLeftRadius: "12px", borderTopRightRadius: "12px" },
          styles: { body: { padding: "16px" } },
          children: e.children,
        });
      }
      function T(e) {
        let { visible: t, onClose: n } = e,
          a = (0, m.useRouter)(),
          i = (e) => {
            n(),
              setTimeout(() => {
                a.push(e);
              }, 200);
          },
          o = [
            {
              key: "blank",
              title: "Thiết kế trống",
              desc: "Bắt đầu với một canvas trống tự do thiết kế",
              icon: (0, r.jsx)(R.Z, {
                size: 32,
                weight: "LineDuotone",
                color: "#1890ff",
              }),
              route: "/design/new-blank",
            },
            {
              key: "template",
              title: "Mẫu c\xf3 sẵn",
              desc: "Bắt đầu với c\xe1c mẫu c\xf3 sẵn của ch\xfang t\xf4i",
              icon: (0, r.jsx)(j.Z, {
                weight: "LineDuotone",
                size: 32,
                color: "#52c41a",
              }),
              route: "/templates",
            },
          ];
        return (0, r.jsx)(r.Fragment, {
          children: (0, r.jsxs)(S, {
            placement: "bottom",
            onClose: n,
            open: t,
            children: [
              (0, r.jsxs)("div", {
                className: "flex items-center justify-between mb-4",
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex-1 min-w-0 pr-2",
                    children: [
                      (0, r.jsx)("h3", {
                        className: "leading-6 m-0 text-lg",
                        children: "Tạo thiết kế mới",
                      }),
                      (0, r.jsx)("p", {
                        className: "text-gray-600 text-xs mt-0.5 mb-0",
                        children: "Chọn loại thiết kế bạn muốn tạo",
                      }),
                    ],
                  }),
                  (0, r.jsx)("button", {
                    type: "button",
                    className:
                      "rounded-md p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 flex-shrink-0",
                    onClick: () => n(),
                    children: (0, r.jsx)(A.Icon, {
                      icon: "solar:close-circle-bold-duotone",
                      className: "w-8 h-8",
                    }),
                  }),
                ],
              }),
              (0, r.jsx)("div", {
                className: "grid grid-cols-2 gap-2",
                children: o.map((e) => {
                  let t = "";
                  return (
                    "blank" === e.key &&
                      (t = "bg-gradient-to-br from-blue-100 to-purple-100"),
                    "template" === e.key &&
                      (t = "bg-gradient-to-br from-green-100 to-blue-100"),
                    (0, r.jsxs)(
                      "div",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: () => i(e.route),
                        className:
                          "group cursor-pointer rounded-xl border border-gray-200 p-3 hover:border-primary hover:shadow-lg transition-all duration-200",
                        children: [
                          (0, r.jsx)("div", {
                            className:
                              "h-20 w-full rounded-lg mb-4 flex items-center justify-center ".concat(
                                t,
                                " group-hover:scale-105 transition-transform duration-200"
                              ),
                            children: (0, r.jsx)("span", {
                              className:
                                "iconify text-gray-600 group-hover:text-primary transition-colors duration-200 text-6xl flex items-center justify-center",
                              children: e.icon,
                            }),
                          }),
                          (0, r.jsxs)("div", {
                            children: [
                              (0, r.jsx)("h4", {
                                className: "text-lg text-gray-900 mb-1 mt-0",
                                children: e.title,
                              }),
                              (0, r.jsx)("p", {
                                className: "text-sm text-gray-600 mb-2 mt-0",
                                children: e.desc,
                              }),
                              (0, r.jsx)("p", {
                                className: "text-xs text-gray-500 mt-0",
                                children: "T\xf9y chỉnh",
                              }),
                            ],
                          }),
                        ],
                      },
                      e.key
                    )
                  );
                }),
              }),
              (0, r.jsxs)("div", {
                className:
                  "relative rounded-2xl border border-primary/30 mt-6 mb-2 p-4 bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 flex flex-col items-start text-left",
                children: [
                  (0, r.jsx)("span", {
                    className:
                      "absolute -top-3 -right-4 z-10 rounded-full bg-yellow-200 text-black font-bold text-xs px-3 py-1 shadow-md select-none uppercase tracking-widest pointer-events-none",
                    children: "ADS",
                  }),
                  (0, r.jsx)("div", {
                    className:
                      "mb-2 text-md text-primary font-bold flex flex-col items-center gap-2",
                    children: (0, r.jsx)("span", {
                      className: "text-center",
                      children: "BẠN MUỐN TẠO THIỆP CƯỚI CHUY\xcaN NGHIỆP?",
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "text-gray-700 font-normal mb-4 text-sm",
                    children:
                      "Bạn đang bận rộn chuẩn bị cho ng\xe0y cưới v\xe0 chưa kịp l\xe0m thiệp cưới online? Đừng lo, @quyctd sẽ gi\xfap bạn c\xf3 ngay một chiếc thiệp cưới xinh xắn, độc đ\xe1o v\xe0 đầy cảm x\xfac!",
                  }),
                  (0, r.jsx)(D.zx, {
                    type: "button",
                    className: "!rounded-full !w-full !bg-primary !text-white",
                    onClick: () => {
                      window.open(
                        "https://www.facebook.com/quyctd/",
                        "_blank"
                      ),
                        n();
                    },
                    children: "Li\xean hệ facebook",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function L(e) {
        let { onOpenSidebar: t } = e,
          [n, i] = (0, a.useState)(!1),
          { data: o } = (0, f.O4)(),
          c = (null == o ? void 0 : o.count) || 0;
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(C(), {
              id: "90bcc4bf7ae7c24d",
              children:
                '.bgMenuMobile.jsx-90bcc4bf7ae7c24d{background:url("data:image/png;base64,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")no-repeat 50%;-webkit-background-size:contain;-moz-background-size:contain;-o-background-size:contain;background-size:contain;content:"";height:60px;width:100%;z-index:101;padding-bottom:env(safe-area-inset-bottom)}.bgMenuMobile.jsx-90bcc4bf7ae7c24d:before{left:0}.bgMenuMobile.jsx-90bcc4bf7ae7c24d:after,.bgMenuMobile.jsx-90bcc4bf7ae7c24d:before{background-color:#fff;border-top:1px solid#f1f1f1;content:"";height:100%;position:absolute;top:0;width:41vw;z-index:-1}.bgMenuMobile.jsx-90bcc4bf7ae7c24d:after{right:0}',
            }),
            (0, r.jsx)("div", {
              className:
                "jsx-90bcc4bf7ae7c24d md:hidden fixed bottom-0 left-0 right-0 z-50 bgMenuMobile",
              children: (0, r.jsx)("div", {
                className:
                  "jsx-90bcc4bf7ae7c24d flex items-center justify-around h-16 px-2",
                children: [
                  {
                    icon: "solar:widget-add-line-duotone",
                    activeIcon: "solar:widget-add-bold-duotone",
                    label: "Tổng quan",
                    href: "/dashboard",
                  },
                  {
                    icon: "solar:document-text-line-duotone",
                    activeIcon: "solar:document-text-bold-duotone",
                    label: "Thiệp của t\xf4i",
                    href: "/dashboard/pages",
                  },
                  {
                    icon: "tabler:plus",
                    activeIcon: "tabler:plus",
                    label: "Tạo thiệp",
                    action: () => {
                      i(!0);
                    },
                  },
                  {
                    icon: "solar:bell-line-duotone",
                    activeIcon: "solar:bell-bold-duotone",
                    label: "Th\xf4ng b\xe1o",
                    href: "/dashboard/notifications",
                    badgeCount: c,
                  },
                  {
                    icon: "solar:hamburger-menu-line-duotone",
                    activeIcon: "solar:hamburger-menu-bold-duotone",
                    label: "Menu",
                    action: t,
                  },
                ].map((e) => (0, r.jsx)(w, { ...e }, e.label)),
              }),
            }),
            (0, r.jsx)(T, { visible: n, onClose: () => i(!1) }),
          ],
        });
      }
      var P = n(89689);
      function k(e) {
        let { children: t } = e,
          { status: n } = (0, v.useSession)(),
          { data: o, isLoading: c } = (0, N.Pi)(),
          s = (0, m.usePathname)(),
          u = (0, m.useRouter)(),
          [d, h] = (0, a.useState)(!1);
        return ((0, a.useEffect)(() => {
          let e =
            (null == s ? void 0 : s.startsWith("/dashboard")) &&
            !s.startsWith("/dashboard/verify");
          "authenticated" === n &&
            !c &&
            o &&
            !1 === o.isActive &&
            e &&
            u.replace("/dashboard/verify");
        }, [n, c, o, s, u]),
        "loading" === n)
          ? (0, r.jsx)("div", {
              className:
                "flex justify-center items-center h-screen absolute top-0 left-0 right-0 bottom-0 bg-white z-50",
              children: (0, r.jsx)(l.Z, { size: "large" }),
            })
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsx)("div", {
                  className: "flex w-full min-h-screen",
                  children: (0, r.jsxs)("div", {
                    className: "page-wrapper flex w-full",
                    children: [
                      (0, r.jsx)("div", {
                        className: "xl:block hidden",
                        children: (0, r.jsx)(i.Z, {}),
                      }),
                      (0, r.jsxs)("div", {
                        className: "page-content w-full bg-white dark:bg-dark",
                        children: [
                          (0, r.jsx)(x, { onOpenMenu: () => h(!0) }),
                          (0, r.jsx)("div", {
                            className:
                              "bg-gray-100 mx-2 rounded-lg min-h-screen my-2 md:my-0",
                            children: (0, r.jsx)("div", {
                              className:
                                "container mx-auto py-8 dashboard-wrapper mb-24 md:mb-0",
                              children: (0, r.jsxs)("div", {
                                className: "px-2 py-4 md:p-4",
                                children: [
                                  t,
                                  (0, r.jsxs)("p", {
                                    className:
                                      "block md:hidden text-xs text-gray-500 m-0 text-center italic",
                                    children: ["Phi\xean bản: v", P.KZ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, r.jsx)(L, { onOpenSidebar: () => h(!0) }),
                (0, r.jsx)(
                  y.Z,
                  {
                    placement: "left",
                    closable: !1,
                    onClose: () => h(!1),
                    open: d,
                    size: 260,
                    styles: { body: { padding: 0 } },
                    children: (0, r.jsx)(i.Z, {
                      mobile: !0,
                      onClose: () => h(!1),
                    }),
                  },
                  "sidebar-mobile"
                ),
              ],
            });
      }
    },
    50828: function (e, t, n) {
      "use strict";
      n.d(t, {
        H4: function () {
          return d;
        },
        Io: function () {
          return u;
        },
        Pi: function () {
          return s;
        },
        hU: function () {
          return h;
        },
        mr: function () {
          return l;
        },
      });
      var r = n(71632),
        a = n(29827),
        i = n(21770),
        o = n(80605);
      let c = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function s() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { status: t } = (0, o.useSession)();
        return (0, r.a)({
          queryKey: ["me"],
          queryFn: async () => (await c("/v1/users/me")).data,
          enabled: e && "authenticated" === t,
          retry: (e, t) =>
            !(t instanceof Error && t.message.includes("Unauthorized")) &&
            e < 3,
          staleTime: 3e5,
        });
      }
      function l() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await c("/v1/auth/register", {
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
      function u() {
        let { update: e } = (0, o.useSession)(),
          t = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await c("/v1/users/me", {
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
      function d() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            await c("/v1/auth/resend-verification", {
              method: "POST",
              body: JSON.stringify({ email: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function h() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            await c("/v1/auth/verify-email", {
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
          return a;
        },
      });
      var r = n(2265);
      function a(e) {
        let [t, n] = r.useState(!1);
        return (
          r.useEffect(() => {
            function t(e) {
              n(e.matches);
            }
            let r = matchMedia(e);
            return (
              r.addEventListener("change", t),
              n(r.matches),
              () => r.removeEventListener("change", t)
            );
          }, [e]),
          t
        );
      }
    },
    53936: function (e, t, n) {
      "use strict";
      n.d(t, {
        Br: function () {
          return E;
        },
        E1: function () {
          return h;
        },
        KK: function () {
          return N;
        },
        O4: function () {
          return d;
        },
        PT: function () {
          return v;
        },
        c9: function () {
          return p;
        },
        eZ: function () {
          return f;
        },
        fH: function () {
          return A;
        },
        gs: function () {
          return y;
        },
        k$: function () {
          return a;
        },
        li: function () {
          return x;
        },
        oS: function () {
          return m;
        },
        tX: function () {
          return g;
        },
        vq: function () {
          return b;
        },
        zn: function () {
          return u;
        },
      });
      var r,
        a,
        i = n(2265),
        o = n(71632),
        c = n(29827),
        s = n(21770);
      let l = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function u() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, o.a)({
          queryKey: ["notifications", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              void 0 !== e.isRead && t.append("isRead", String(e.isRead));
            let n = t.toString();
            return (await l("/v1/notifications".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function d() {
        let e = (0, c.NL)(),
          t = (0, i.useRef)(null),
          n = (0, o.a)({
            queryKey: ["notifications", "unread-count"],
            queryFn: async () =>
              (await l("/v1/notifications/unread-count")).data,
            staleTime: 3e4,
            gcTime: 12e4,
            refetchInterval: 3e4,
          }),
          r = n.data;
        return (
          (0, i.useEffect)(() => {
            var n, a;
            if (!r) return;
            let i = null !== (n = r.count) && void 0 !== n ? n : 0;
            i !== (null !== (a = t.current) && void 0 !== a ? a : 0) &&
              i > 0 &&
              e.invalidateQueries({ queryKey: ["notifications"] }),
              (t.current = i);
          }, [r, e]),
          n
        );
      }
      function h() {
        let e = (0, c.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/notifications/".concat(e, "/read"), {
                method: "PATCH",
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["notifications"] }),
              e.invalidateQueries({
                queryKey: ["notifications", "unread-count"],
              });
          },
        });
      }
      function A() {
        let e = (0, c.NL)();
        return (0, s.D)({
          mutationFn: async () =>
            (await l("/v1/notifications/read-all", { method: "PATCH" })).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["notifications"] }),
              e.invalidateQueries({
                queryKey: ["notifications", "unread-count"],
              });
          },
        });
      }
      function f() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, o.a)({
          queryKey: ["admin-notifications", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              void 0 !== e.isRead && t.append("isRead", String(e.isRead));
            let n = t.toString();
            return (
              await l("/v1/admin/notifications".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function g() {
        let e = (0, c.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/admin/notifications/send", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["notifications"] }),
              e.invalidateQueries({
                queryKey: ["notifications", "unread-count"],
              });
          },
        });
      }
      function m() {
        let e = (0, c.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/admin/notifications/broadcast", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["notifications"] }),
              e.invalidateQueries({
                queryKey: ["notifications", "unread-count"],
              });
          },
        });
      }
      function p(e) {
        let t = new Date(e),
          n = Math.floor((new Date().getTime() - t.getTime()) / 1e3);
        return n < 60
          ? "Vừa xong"
          : n < 3600
          ? "".concat(Math.floor(n / 60), " ph\xfat trước")
          : n < 86400
          ? "".concat(Math.floor(n / 3600), " giờ trước")
          : n < 604800
          ? "".concat(Math.floor(n / 86400), " ng\xe0y trước")
          : t.toLocaleDateString("vi-VN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });
      }
      function E(e) {
        switch (e) {
          case "ORDER_PAID":
            return "Thanh to\xe1n th\xe0nh c\xf4ng";
          case "ORDER_FAILED":
            return "Thanh to\xe1n thất bại";
          case "ORDER_CANCELLED":
            return "Đơn h\xe0ng bị hủy";
          case "MESSAGE_RECEIVED":
            return "Lời ch\xfac mới";
          case "GIFT_RECEIVED":
            return "Qu\xe0 tặng mới";
          case "RSVP_RECEIVED":
            return "X\xe1c nhận tham dự mới";
          case "SIGNATURE_RECEIVED":
            return "Chữ k\xfd mới";
          case "SYSTEM_ANNOUNCEMENT":
            return "Th\xf4ng b\xe1o hệ thống";
          default:
            return "Th\xf4ng b\xe1o";
        }
      }
      function b(e) {
        switch (e) {
          case "ORDER_PAID":
            return "solar:check-circle-bold-duotone";
          case "ORDER_FAILED":
            return "solar:close-circle-bold-duotone";
          case "ORDER_CANCELLED":
            return "solar:danger-triangle-bold-duotone";
          case "MESSAGE_RECEIVED":
            return "solar:chat-round-dots-bold-duotone";
          case "GIFT_RECEIVED":
            return "solar:gift-bold-duotone";
          case "RSVP_RECEIVED":
            return "solar:calendar-bold-duotone";
          case "SIGNATURE_RECEIVED":
            return "solar:pen-new-square-bold-duotone";
          default:
            return "solar:bell-bold-duotone";
        }
      }
      function x(e) {
        switch (e) {
          case "ORDER_PAID":
            return "success";
          case "ORDER_FAILED":
            return "error";
          case "ORDER_CANCELLED":
            return "warning";
          case "MESSAGE_RECEIVED":
          case "GIFT_RECEIVED":
          case "RSVP_RECEIVED":
          case "SIGNATURE_RECEIVED":
            return "info";
          default:
            return "default";
        }
      }
      function v(e) {
        switch (e) {
          case "ORDER_PAID":
            return "#52c41a";
          case "ORDER_FAILED":
            return "#ff4d4f";
          case "ORDER_CANCELLED":
            return "#faad14";
          case "MESSAGE_RECEIVED":
          default:
            return "#1890ff";
          case "GIFT_RECEIVED":
            return "#eb2f96";
          case "RSVP_RECEIVED":
            return "#13c2c2";
          case "SIGNATURE_RECEIVED":
            return "#722ed1";
          case "SYSTEM_ANNOUNCEMENT":
            return "#fa8c16";
        }
      }
      function y(e) {
        switch (e) {
          case "ORDER_PAID":
            return "#f6ffed";
          case "ORDER_FAILED":
            return "#fff1f0";
          case "ORDER_CANCELLED":
            return "#fffbe6";
          case "MESSAGE_RECEIVED":
          default:
            return "#e6f7ff";
          case "GIFT_RECEIVED":
            return "#fff0f6";
          case "RSVP_RECEIVED":
            return "#e6fffb";
          case "SIGNATURE_RECEIVED":
            return "#f9f0ff";
          case "SYSTEM_ANNOUNCEMENT":
            return "#fff7e6";
        }
      }
      function N(e) {
        return e.title && 0 !== e.title.trim().length
          ? e.title.length > 200
            ? {
                isValid: !1,
                error: "Ti\xeau đề kh\xf4ng được vượt qu\xe1 200 k\xfd tự",
              }
            : e.content && 0 !== e.content.trim().length
            ? e.content.length > 1e3
              ? {
                  isValid: !1,
                  error: "Nội dung kh\xf4ng được vượt qu\xe1 1000 k\xfd tự",
                }
              : e.type
              ? "userIds" in e && 0 === e.userIds.length
                ? {
                    isValid: !1,
                    error: "Phải chọn \xedt nhất một user để gửi notification",
                  }
                : e.actionUrl && e.actionUrl.length > 500
                ? {
                    isValid: !1,
                    error:
                      "URL h\xe0nh động kh\xf4ng được vượt qu\xe1 500 k\xfd tự",
                  }
                : e.actionLabel && e.actionLabel.length > 50
                ? {
                    isValid: !1,
                    error:
                      "Label h\xe0nh động kh\xf4ng được vượt qu\xe1 50 k\xfd tự",
                  }
                : { isValid: !0 }
              : { isValid: !1, error: "Loại notification l\xe0 bắt buộc" }
            : { isValid: !1, error: "Nội dung kh\xf4ng được để trống" }
          : { isValid: !1, error: "Ti\xeau đề kh\xf4ng được để trống" };
      }
      ((r = a || (a = {})).ORDER_PAID = "ORDER_PAID"),
        (r.ORDER_FAILED = "ORDER_FAILED"),
        (r.ORDER_CANCELLED = "ORDER_CANCELLED"),
        (r.MESSAGE_RECEIVED = "MESSAGE_RECEIVED"),
        (r.GIFT_RECEIVED = "GIFT_RECEIVED"),
        (r.RSVP_RECEIVED = "RSVP_RECEIVED"),
        (r.SIGNATURE_RECEIVED = "SIGNATURE_RECEIVED"),
        (r.SYSTEM_ANNOUNCEMENT = "SYSTEM_ANNOUNCEMENT");
    },
    40526: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return a;
        },
      });
      var r = n(50828);
      let a = () => {
        let { data: e, isLoading: t } = (0, r.Pi)();
        return { role: (null == e ? void 0 : e.role) || "USER", isLoading: t };
      };
    },
    33818: function (e, t, n) {
      "use strict";
      let r, a;
      n.d(t, {
        g: function () {
          return u;
        },
      });
      var i = n(83464),
        o = n(82957).Buffer;
      let c = null;
      function s(e) {
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
                      let r = e.charCodeAt(n).toString(16).padStart(2, "0");
                      t += "%" + r;
                    }
                    return decodeURIComponent(t);
                  }
                  return o.from(n, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              r = JSON.parse(n);
            if ("number" == typeof r.exp) return 1e3 * r.exp;
          } catch (e) {}
      }
      async function l() {
        return r && a && Date.now() + 3e5 < a
          ? r
          : (c ||
              (c = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    i = null == t ? void 0 : t.accessToken;
                  return (r = i), (a = s(i) || Date.now() + 36e5), i;
                } catch (e) {
                  (r = void 0), (a = void 0);
                  return;
                } finally {
                  c = null;
                }
              })()),
            c);
      }
      function u(e) {
        let t = (function (e) {
          let t = i.Z.create({ baseURL: e, timeout: 3e4 });
          return (
            t.interceptors.request.use(
              async (e) => {
                let t;
                if ((t = await l())) {
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
                var i, o, c;
                let l = e.config;
                if (
                  (null === (i = e.response) || void 0 === i
                    ? void 0
                    : i.status) === 401 &&
                  !l._retry
                ) {
                  l._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      i = await e.getSession(),
                      o = null == i ? void 0 : i.accessToken,
                      c = null == i ? void 0 : i.error;
                    if (o && !c && o !== r)
                      return (
                        (r = o),
                        (a = s(o) || Date.now() + 3e5),
                        l.headers &&
                          (l.headers.Authorization = "Bearer ".concat(o)),
                        t.request(l)
                      );
                    (r = void 0),
                      (a = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (c = e.response) || void 0 === c
                      ? void 0
                      : null === (o = c.data) || void 0 === o
                      ? void 0
                      : o.message) ||
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
            let r = {
              method: (null == n ? void 0 : n.method) || "GET",
              data: null == n ? void 0 : n.body,
              headers: null == n ? void 0 : n.headers,
            };
            return (await t.request({ url: e, ...r })).data;
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
          return h;
        },
        SV: function () {
          return i;
        },
        Yb: function () {
          return g;
        },
        aW: function () {
          return m;
        },
        cn: function () {
          return f;
        },
        sZ: function () {
          return p;
        },
        ud: function () {
          return A;
        },
      });
      var r = n(61994),
        a = n(53335);
      n(25566);
      let i = () => "https://zenlove.me",
        o = new Set(["crop", "width", "height", "fit", "format", "quality"]);
      function c(e) {
        let t = e.split(",");
        return (
          4 === t.length &&
          t.every((e) => {
            let t = Number(e);
            return Number.isFinite(t) && Number.isInteger(t) && t >= 0;
          })
        );
      }
      function s(e) {
        return ["cover", "contain", "fill", "inside", "outside"].includes(e);
      }
      function l(e) {
        return ["webp", "avif", "jpeg", "png", "gif"].includes(e);
      }
      function u(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t > 0;
      }
      function d(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t >= 1 && t <= 100;
      }
      function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = "https://www.quyctd.dev/wedding/cdn";
        n || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [r, a] = e.split("?"),
          i = new URLSearchParams(null != a ? a : ""),
          h = new URLSearchParams();
        for (let [e, t] of i.entries()) {
          if (!o.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let n = !0;
          switch (e) {
            case "crop":
              (n = c(t)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    t,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (n = u(t)) ||
                console.warn(
                  "Invalid "
                    .concat(e, ' value "')
                    .concat(t, '", expected positive integer')
                );
              break;
            case "fit":
              (n = s(t)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    t,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (n = l(t)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    t,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (n = d(t)) ||
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
          n && h.set(e, t);
        }
        t && (h.set("format", "webp"), h.set("quality", "80"));
        let A = h.toString();
        return ""
          .concat(n.replace(/\/+$/, ""), "/")
          .concat(r)
          .concat(A ? "?".concat(A) : "");
      }
      function A(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, r] = e.split("?"),
          a = new URLSearchParams(null != r ? r : ""),
          i = new URLSearchParams();
        for (let [e, t] of a.entries()) {
          if (!o.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let n = !0;
          switch (e) {
            case "crop":
              (n = c(t)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    t,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (n = u(t)) ||
                console.warn(
                  "Invalid "
                    .concat(e, ' value "')
                    .concat(t, '", expected positive integer')
                );
              break;
            case "fit":
              (n = s(t)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    t,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (n = l(t)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    t,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (n = d(t)) ||
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
        let h = i.toString();
        return ""
          .concat("https://www.quyctd.dev/wedding/cdn-resource".replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(h ? "?".concat(h) : "");
      }
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, a.m6)((0, r.W)(t));
      }
      let g = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return h(e, t);
        },
        m = {
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
          r = e.getDate(),
          a = new Date(t, n, 1).getDay(),
          i = 0 === a ? 6 : a - 1,
          o = new Date(t, n + 1, 0).getDate(),
          c = [];
        for (let e = 0; e < i; e++) c.push({ type: "empty" });
        for (let e = 1; e <= o; e++) {
          let t = e === r;
          c.push({ type: "day", date: e, isSelected: t });
        }
        return c;
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        8788, 7240, 9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897,
        2039, 6815, 9816, 8640, 5831, 5827, 8651, 9486, 5670, 2972, 3335, 9646,
        605, 4178, 1631, 2322, 8487, 7729, 8119, 975, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 45166));
      }
    ),
      (_N_E = e.O());
  },
]);
