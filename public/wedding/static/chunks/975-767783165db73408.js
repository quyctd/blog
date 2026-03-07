"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [975],
  {
    93843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return g;
        },
      });
      var i = t(57437),
        a = t(53743),
        s = t(92934),
        l = t(70525),
        r = t(47260);
      t(2265);
      var c = t(12108),
        h = t(33051),
        o = t(89689),
        d = t(59646);
      let m = (e) => {
          switch (e) {
            case "feature":
              return (0, i.jsx)(s.Z, { className: "w-4 h-4 text-green-600" });
            case "improvement":
              return (0, i.jsx)(l.Z, { className: "w-4 h-4 text-blue-600" });
            case "fix":
              return (0, i.jsx)(r.Z, { className: "w-4 h-4 text-orange-600" });
            default:
              return null;
          }
        },
        x = (e) => {
          switch (e) {
            case "feature":
              return "T\xednh năng mới";
            case "improvement":
              return "Cải thiện";
            case "fix":
              return "Sửa lỗi";
            default:
              return "";
          }
        };
      function g(e) {
        let { open: n, onClose: t } = e,
          s = (e) => {
            try {
              let n = new Date(e);
              return (0, c.WU)(n, "dd/MM/yyyy", { locale: h.vi });
            } catch (n) {
              return e;
            }
          };
        return (0, i.jsx)(a.default, {
          title: (0, i.jsxs)("div", {
            className: "flex items-center gap-3 relative",
            children: [
              (0, i.jsx)("div", {
                className:
                  "w-10 h-10 bg-zen-primary/10 rounded-full flex items-center justify-center",
                children: (0, i.jsx)(d.Icon, {
                  icon: "mdi:math-log",
                  width: 20,
                  height: 20,
                }),
              }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsxs)("span", {
                    className:
                      "text-xs italic text-gray-500 m-0 font-normal absolute bottom-0 right-0",
                    children: ["v", o.KZ],
                  }),
                  (0, i.jsx)("h3", {
                    className: "text-lg m-0 font-normal",
                    children: "Cập nhật mới",
                  }),
                  (0, i.jsx)("p", {
                    className: "text-sm text-gray-500 m-0 font-normal",
                    children: "Xem c\xe1c thay đổi v\xe0 cải tiến mới nhất",
                  }),
                ],
              }),
            ],
          }),
          open: n,
          onCancel: t,
          footer: null,
          width: 700,
          className: "changelog-modal",
          children: (0, i.jsxs)("div", {
            className: "mt-4 max-h-[65vh] overflow-y-auto",
            children: [
              (0, i.jsx)("div", {
                className: "flex flex-col gap-4",
                children: o.U.map((e, n) =>
                  (0, i.jsxs)(
                    "div",
                    {
                      className:
                        "bg-gray-50/50 rounded-lg p-4 border border-gray-200/50",
                      children: [
                        (0, i.jsx)("div", {
                          className: "flex items-center justify-between mb-3",
                          children: (0, i.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [
                              (0, i.jsxs)("span", {
                                className:
                                  "px-2.5 py-1 bg-zen-primary text-white text-xs font-semibold rounded-full",
                                children: ["v", e.version],
                              }),
                              (0, i.jsx)("span", {
                                className: "text-sm text-gray-500",
                                children: s(e.date),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "changes-list",
                          children: e.changes.map((e, n) =>
                            (0, i.jsxs)(
                              "div",
                              {
                                className:
                                  "flex items-start gap-2.5 p-2 rounded-md hover:bg-white/50 transition-colors",
                                children: [
                                  (0, i.jsx)("div", {
                                    className: "mt-0.5 flex-shrink-0",
                                    children: m(e.type),
                                  }),
                                  (0, i.jsxs)("div", {
                                    className: "flex-1 min-w-0",
                                    children: [
                                      (0, i.jsx)("div", {
                                        className:
                                          "flex items-center gap-2 mb-1",
                                        children: (0, i.jsx)("span", {
                                          className:
                                            "text-xs font-bold text-gray-600 uppercase tracking-wider",
                                          children: x(e.type),
                                        }),
                                      }),
                                      (0, i.jsx)("div", {
                                        className: "text-sm text-gray-700",
                                        children: e.description
                                          .split("\n")
                                          .map((e, n) =>
                                            (0, i.jsx)(
                                              "p",
                                              { className: "m-0", children: e },
                                              n
                                            )
                                          ),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              n
                            )
                          ),
                        }),
                      ],
                    },
                    n
                  )
                ),
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 right-0 h-10 bg-white rounded-b-lg",
                children: (0, i.jsx)("div", {
                  className: "flex items-center justify-center",
                  children: (0, i.jsxs)("p", {
                    className: "text-xs text-gray-500 text-center m-0",
                    children: [
                      "Cảm ơn bạn đ\xe3 xem",
                      " ",
                      (0, i.jsx)(d.Icon, {
                        icon: "mdi:heart",
                        width: 16,
                        height: 16,
                        className: "text-red-500 inline-block",
                      }),
                      "!",
                      (0, i.jsx)("br", {}),
                      "Ch\xfang t\xf4i lu\xf4n cố gắng cải thiện trải nghiệm của bạn.",
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }
    },
    1014: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return V;
        },
      });
      var i = t(57437),
        a = t(91257),
        s = t(11840),
        l = t(40526),
        r = t(70464),
        c = t(77565),
        h = t(45391),
        o = t(38434),
        d = t(59195),
        m = t(61340),
        x = t(75488),
        g = t(48998),
        u = t(5945),
        p = t(54020),
        f = t(29428),
        v = t(25980),
        b = t(2261),
        j = t(15883),
        N = t(55322),
        y = t(40312),
        w = t(62670),
        k = t(5649),
        Z = t(3566),
        C = t(63589),
        T = t(20360),
        S = t(27979),
        z = t(98910),
        L = t(30528),
        I = t(88205),
        D = t(90391),
        M = t(62585),
        P = t(2265),
        B = t(99376),
        Q = t(53743),
        q = t(39486),
        F = t(50742),
        R = t(61273),
        A = t(79408);
      let W = [
        {
          key: "blank",
          title: "Thiết kế trống",
          desc: "Bắt đầu với một canvas trống tự do thiết kế",
          icon: (0, i.jsx)(L.Z, {
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
          icon: (0, i.jsx)(A.Z, {
            weight: "LineDuotone",
            size: 32,
            color: "#52c41a",
          }),
          route: "/templates",
        },
      ];
      var U = (e) => {
          let { open: n, onClose: t } = e,
            a = (0, B.useRouter)(),
            s = (e) => {
              t(),
                setTimeout(() => {
                  a.push(e);
                }, 200);
            };
          return (0, i.jsxs)(Q.default, {
            open: n,
            onCancel: t,
            footer: null,
            closable: !0,
            centered: !0,
            width: 600,
            title: (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(q.default.Title, {
                  level: 4,
                  className: "!m-0 flex items-center gap-2 font-bold",
                  children: [
                    (0, i.jsx)(L.Z, { weight: "LineDuotone", size: 22 }),
                    "Tạo thiết kế mới",
                  ],
                }),
                (0, i.jsx)(q.default.Text, {
                  type: "secondary",
                  className: "!text-gray-600 !font-normal",
                  children: "Chọn loại thiết kế bạn muốn tạo",
                }),
              ],
            }),
            children: [
              (0, i.jsx)("div", {
                className: "mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 mb-8",
                children: W.map((e) => {
                  let n = "";
                  return (
                    "blank" === e.key &&
                      (n = "bg-gradient-to-br from-blue-100 to-purple-100"),
                    "template" === e.key &&
                      (n = "bg-gradient-to-br from-green-100 to-blue-100"),
                    (0, i.jsxs)(
                      "div",
                      {
                        role: "button",
                        tabIndex: 0,
                        onClick: () => s(e.route),
                        className:
                          "group cursor-pointer rounded-xl border border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all duration-200",
                        children: [
                          (0, i.jsx)("div", {
                            className:
                              "h-32 w-full rounded-lg mb-4 flex items-center justify-center ".concat(
                                n,
                                " group-hover:scale-105 transition-transform duration-200"
                              ),
                            children: (0, i.jsx)("span", {
                              className:
                                "iconify text-gray-600 group-hover:text-primary transition-colors duration-200 text-6xl flex items-center justify-center",
                              children: e.icon,
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("h4", {
                                className: "text-lg text-gray-900 mb-1 mt-0",
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className: "text-sm text-gray-600 mb-2 mt-0",
                                children: e.desc,
                              }),
                              (0, i.jsx)("p", {
                                className: "text-xs text-gray-500 mt-0",
                                children: "T\xf9y chỉnh",
                              }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className:
                              "mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200",
                            children: (0, i.jsxs)("div", {
                              className:
                                "flex items-center text-primary text-sm font-medium",
                              children: [
                                (0, i.jsx)("span", {
                                  children:
                                    "blank" === e.key
                                      ? "Chọn thiết kế n\xe0y"
                                      : "Xem c\xe1c mẫu c\xf3 sẵn",
                                }),
                                (0, i.jsx)("svg", {
                                  xmlns: "http://www.w3.org/2000/svg",
                                  className: "ml-2 h-4 w-4",
                                  fill: "none",
                                  viewBox: "0 0 24 24",
                                  stroke: "currentColor",
                                  children: (0, i.jsx)("path", {
                                    fill: "currentColor",
                                    fillRule: "evenodd",
                                    d: "M13.47 5.47a.75.75 0 0 1 1.06 0l6 6a.75.75 0 0 1 0 1.06l-6 6a.75.75 0 1 1-1.06-1.06l4.72-4.72H4a.75.75 0 0 1 0-1.5h14.19l-4.72-4.72a.75.75 0 0 1 0-1.06",
                                    clipRule: "evenodd",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      e.key
                    )
                  );
                }),
              }),
              (0, i.jsxs)("div", {
                className:
                  "relative rounded-2xl border border-primary/30 mt-6 mb-2 p-6 bg-gradient-to-r from-blue-50 via-pink-50 to-purple-50 flex flex-col items-start text-left",
                children: [
                  (0, i.jsx)("span", {
                    className:
                      "absolute -top-3 -right-4 z-10 rounded-full bg-yellow-200 text-black font-bold text-xs px-3 py-1 shadow-md select-none uppercase tracking-widest pointer-events-none",
                    children: "ADS",
                  }),
                  (0, i.jsxs)("div", {
                    className:
                      "mb-2 text-xl md:text-xl text-primary font-bold flex items-center gap-2",
                    children: [
                      (0, i.jsx)("span", {
                        className: "text-xl",
                        children: "\uD83D\uDD25",
                      }),
                      (0, i.jsx)("span", {
                        children: "BẠN MUỐN TẠO THIỆP CƯỚI CHUY\xcaN NGHIỆP? ",
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", {
                    className: "text-gray-700 font-normal mb-4 text-base",
                    children:
                      "Thiệp cưới xinh xắn, độc đ\xe1o v\xe0 đầy cảm x\xfac!",
                  }),
                  (0, i.jsx)(F.ZP, {
                    type: "primary",
                    icon: (0, i.jsx)(R.Am9, { size: 16 }),
                    className: "!rounded-full !w-full",
                    onClick: () => {
                      window.open(
                        "https://www.facebook.com/quyctd/",
                        "_blank"
                      ),
                        t();
                    },
                    children: "Li\xean hệ facebook",
                  }),
                ],
              }),
            ],
          });
        },
        E = t(59646);
      function H(e) {
        var n;
        let { item: t, onClose: s } = e,
          [l, h] = (0, P.useState)(!1),
          o = (0, B.usePathname)(),
          d =
            null === (n = t.subItems) || void 0 === n
              ? void 0
              : n.some((e) => (e.exact ? o === e.href : o.startsWith(e.href)));
        return (
          (0, P.useEffect)(() => {
            d && h(!0);
          }, [d]),
          (0, i.jsxs)("div", {
            className: "flex flex-col",
            children: [
              (0, i.jsxs)("button", {
                type: "button",
                onClick: (e) => {
                  e.preventDefault(), h(!l);
                },
                className:
                  "menu-item flex items-center justify-between px-4 py-2 text-gray-900 rounded-lg hover:text-primary ".concat(
                    d
                      ? "active shadow-lg bg-primary text-white hover:text-white"
                      : ""
                  ),
                children: [
                  (0, i.jsxs)("div", {
                    className: "flex items-center",
                    children: [
                      t.icon,
                      (0, i.jsx)("span", {
                        className: "ms-3",
                        children: t.label,
                      }),
                    ],
                  }),
                  l
                    ? (0, i.jsx)(r.Z, { className: "text-xs ms-2" })
                    : (0, i.jsx)(c.Z, { className: "text-xs ms-2" }),
                ],
              }),
              l &&
                t.subItems &&
                (0, i.jsx)("div", {
                  className: "flex flex-col gap-1 mt-1",
                  children: t.subItems.map((e) => {
                    let n = e.exact ? o === e.href : o.startsWith(e.href);
                    return (0, i.jsxs)(
                      a.Z,
                      {
                        href: e.href,
                        exact: e.exact,
                        className:
                          "menu-item flex items-center px-4 py-2 text-gray-900 rounded-lg hover:text-primary pl-8 ".concat(
                            n
                              ? "active shadow-lg bg-primary text-white hover:text-white"
                              : ""
                          ),
                        activeClassName:
                          "active shadow-lg bg-primary text-white hover:text-white",
                        onClick: s,
                        children: [
                          e.icon,
                          (0, i.jsx)("span", {
                            className: "ms-3",
                            children: e.label,
                          }),
                        ],
                      },
                      e.href
                    );
                  }),
                }),
            ],
          })
        );
      }
      function V(e) {
        let { mobile: n = !1, onClose: t } = e,
          { role: r, isLoading: c } = (0, l.q)(),
          [B, Q] = (0, P.useState)(!1),
          q = [
            {
              caption: "Tổng quan",
              items: [
                {
                  href: "/dashboard",
                  label: "Tổng quan",
                  icon: (0, i.jsx)(I.Z, { weight: "Linear", size: 16 }),
                  exact: !0,
                },
                {
                  href: "/dashboard/pages",
                  label: "Thiệp của t\xf4i",
                  icon: (0, i.jsx)(Z.Z, { weight: "Linear", size: 16 }),
                  exact: !1,
                },
              ],
            },
            {
              caption: "Lời ch\xfac & Qu\xe0 tặng",
              items: [
                {
                  href: "/dashboard/messages",
                  label: "Lời ch\xfac",
                  icon: (0, i.jsx)(D.Z, { weight: "Linear", size: 16 }),
                  exact: !0,
                },
                {
                  href: "/dashboard/rsvp",
                  label: "X\xe1c nhận tham dự",
                  description: "Quản l\xfd người tham dự",
                  icon: (0, i.jsx)(C.Z, { weight: "Linear", size: 16 }),
                  exact: !0,
                },
                {
                  href: "/dashboard/received-gifts",
                  label: "Qu\xe0 tặng",
                  icon: (0, i.jsx)(T.Z, { weight: "Linear", size: 16 }),
                  exact: !0,
                },
                {
                  href: "/dashboard/signatures",
                  label: "Chữ k\xfd kh\xe1ch mời",
                  icon: (0, i.jsx)(E.Icon, {
                    icon: "tabler:signature",
                    width: 16,
                    height: 16,
                  }),
                  exact: !0,
                },
              ],
            },
            {
              caption: "T\xe0i khoản",
              items: [
                {
                  href: "/dashboard/account",
                  label: "Th\xf4ng tin t\xe0i khoản",
                  icon: (0, i.jsx)(M.Z, { weight: "Linear", size: 16 }),
                  exact: !0,
                },
                {
                  href: "/dashboard/wallet",
                  label: "V\xed của t\xf4i",
                  icon: (0, i.jsx)(E.Icon, {
                    icon: "solar:wallet-2-linear",
                    width: 16,
                    height: 16,
                  }),
                  exact: !0,
                },
              ],
            },
          ],
          F = [
            {
              caption: "Quản trị vi\xean",
              items: [
                {
                  href: "/admin",
                  label: "Thống k\xea",
                  icon: (0, i.jsx)(h.Z, {}),
                  exact: !0,
                },
                {
                  href: "/admin/pages",
                  label: "Thiệp v\xe0 Mẫu",
                  icon: (0, i.jsx)(Z.Z, { weight: "Linear", size: 16 }),
                  exact: !1,
                  subItems: [
                    {
                      href: "/admin/pages",
                      label: "Quản l\xfd Thiệp",
                      icon: (0, i.jsx)(Z.Z, { weight: "Linear", size: 16 }),
                      exact: !0,
                    },
                    {
                      href: "/admin/templates",
                      label: "Templates",
                      icon: (0, i.jsx)(o.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/pages/categories",
                      label: "Danh mục Thiệp",
                      icon: (0, i.jsx)(d.Z, {}),
                      exact: !0,
                    },
                  ],
                },
                {
                  href: "/admin/websites",
                  label: "Quản l\xfd Website",
                  icon: (0, i.jsx)(Z.Z, { weight: "Linear", size: 16 }),
                  exact: !1,
                  subItems: [
                    {
                      href: "/admin/websites",
                      label: "Quản l\xfd Website",
                      icon: (0, i.jsx)(Z.Z, { weight: "Linear", size: 16 }),
                      exact: !0,
                    },
                    {
                      href: "/admin/websites/categories",
                      label: "Danh mục Website",
                      icon: (0, i.jsx)(d.Z, {}),
                      exact: !0,
                    },
                  ],
                },
                {
                  href: "/admin/messages",
                  label: "Thống K\xea",
                  icon: (0, i.jsx)(m.Z, {}),
                  exact: !1,
                  subItems: [
                    {
                      href: "/admin/messages",
                      label: "Messages",
                      icon: (0, i.jsx)(m.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/received-gifts",
                      label: "Qu\xe0 tặng",
                      icon: (0, i.jsx)(T.Z, { weight: "Linear", size: 16 }),
                      exact: !0,
                    },
                    {
                      href: "/admin/rsvp",
                      label: "RSVP",
                      icon: (0, i.jsx)(S.Z, { weight: "Linear", size: 16 }),
                      exact: !0,
                    },
                    {
                      href: "/admin/signatures",
                      label: "Chữ k\xfd",
                      icon: (0, i.jsx)(x.Z, {}),
                      exact: !0,
                    },
                  ],
                },
                {
                  href: "/admin/blogs",
                  label: "Blog",
                  icon: (0, i.jsx)(o.Z, {}),
                  exact: !1,
                  subItems: [
                    {
                      href: "/admin/blogs/posts",
                      label: "Quản l\xfd B\xe0i viết",
                      icon: (0, i.jsx)(o.Z, {}),
                      exact: !1,
                    },
                    {
                      href: "/admin/blogs/categories",
                      label: "Danh mục Blog",
                      icon: (0, i.jsx)(d.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/blogs/tags",
                      label: "Tags Blog",
                      icon: (0, i.jsx)(g.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/media",
                      label: "Media Library",
                      icon: (0, i.jsx)(u.Z, {}),
                      exact: !0,
                    },
                  ],
                },
                {
                  href: "/admin/stocks",
                  label: "Resources",
                  icon: (0, i.jsx)(p.Z, {}),
                  exact: !1,
                  subItems: [
                    {
                      href: "/admin/stocks",
                      label: "Stocks",
                      icon: (0, i.jsx)(p.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/fonts",
                      label: "Fonts",
                      icon: (0, i.jsx)(f.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/music",
                      label: "Music",
                      icon: (0, i.jsx)(v.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/files-upload",
                      label: "Files Upload",
                      icon: (0, i.jsx)(u.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/gifts",
                      label: "Gifts",
                      icon: (0, i.jsx)(b.Z, {}),
                      exact: !0,
                    },
                  ],
                },
                {
                  href: "/admin/users",
                  label: "Quản l\xfd",
                  icon: (0, i.jsx)(j.Z, {}),
                  exact: !1,
                  subItems: [
                    {
                      href: "/admin/users",
                      label: "Danh s\xe1ch người d\xf9ng",
                      icon: (0, i.jsx)(j.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/plans",
                      label: "Danh s\xe1ch Plan",
                      icon: (0, i.jsx)(N.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/features",
                      label: "Quản l\xfd T\xednh Năng",
                      icon: (0, i.jsx)(N.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/coupon",
                      label: "M\xe3 giảm gi\xe1",
                      icon: (0, i.jsx)(g.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/orders",
                      label: "Quản l\xfd đơn h\xe0ng",
                      icon: (0, i.jsx)(y.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/payments",
                      label: "Quản l\xfd thanh to\xe1n",
                      icon: (0, i.jsx)(w.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/withdraws",
                      label: "Quản l\xfd R\xfat Tiền",
                      icon: (0, i.jsx)(w.Z, {}),
                      exact: !0,
                    },
                    {
                      href: "/admin/addons",
                      label: "Quản l\xfd Addons",
                      icon: (0, i.jsx)(E.Icon, {
                        icon: "clarity:plugin-line",
                        width: 16,
                        height: 16,
                      }),
                      exact: !0,
                    },
                    {
                      href: "/admin/notifications",
                      label: "Quản l\xfd Th\xf4ng b\xe1o",
                      icon: (0, i.jsx)(k.Z, {}),
                      exact: !0,
                    },
                  ],
                },
                {
                  href: "/admin/recent-activity",
                  label: "Lịch sử hoạt động",
                  icon: (0, i.jsx)(z.Z, { weight: "Linear", size: 16 }),
                  exact: !0,
                },
              ],
            },
          ];
        return (0, i.jsx)("div", {
          className: "flex",
          children: (0, i.jsx)("nav", {
            className: "h-full w-64 fixed menu-sidebar bg-white z-[10] ".concat(
              ""
            ),
            children: (0, i.jsxs)("div", {
              className: "bg-white rounded-none",
              children: [
                (0, i.jsx)("div", {
                  className: "py-4 brand-logo",
                  children: (0, i.jsx)(s.Z, {}),
                }),
                (0, i.jsx)("div", {
                  className: "h-full px-3 py-4 overflow-y-auto sidebar",
                  children: (0, i.jsxs)("div", {
                    className: "flex flex-col gap-3 md:gap-4",
                    children: [
                      q.map((e, n) =>
                        (0, i.jsxs)(
                          "div",
                          {
                            className: "flex flex-col gap-2",
                            children: [
                              (0, i.jsx)("div", {
                                className: "text-link text-xs caption",
                                children: e.caption,
                              }),
                              e.items.map((e) =>
                                (0, i.jsxs)(
                                  P.Fragment,
                                  {
                                    children: [
                                      (0, i.jsxs)(a.Z, {
                                        href: e.href,
                                        exact: e.exact,
                                        className:
                                          "menu-item flex items-center px-4 py-2 text-gray-900 rounded-lg hover:text-primary group",
                                        activeClassName:
                                          "active shadow-lg bg-primary text-white hover:text-white",
                                        onClick: t,
                                        children: [
                                          e.icon,
                                          (0, i.jsx)("div", {
                                            className: "ms-3 flex flex-col",
                                            children: (0, i.jsxs)("span", {
                                              children: [" ", e.label],
                                            }),
                                          }),
                                        ],
                                      }),
                                      0 === n &&
                                        "Thiệp của t\xf4i" === e.label &&
                                        (0, i.jsxs)("button", {
                                          type: "button",
                                          className:
                                            "menu-item flex items-center px-4 py-2 text-gray-900 rounded-lg hover:text-primary",
                                          onClick: () => Q(!0),
                                          children: [
                                            (0, i.jsx)(L.Z, {
                                              weight: "Linear",
                                              size: 16,
                                            }),
                                            (0, i.jsx)("span", {
                                              className: "ms-3",
                                              children: "Tạo thiết kế",
                                            }),
                                          ],
                                        }),
                                    ],
                                  },
                                  e.href
                                )
                              ),
                            ],
                          },
                          n
                        )
                      ),
                      (0, i.jsx)(U, { open: B, onClose: () => Q(!1) }),
                      "ADMIN" === r &&
                        !c &&
                        F.map((e, n) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, i.jsx)("div", {
                                  className: "text-link text-xs caption",
                                  children: e.caption,
                                }),
                                e.items.map((e) =>
                                  (0, i.jsx)(
                                    P.Fragment,
                                    {
                                      children: e.subItems
                                        ? (0, i.jsx)(H, { item: e, onClose: t })
                                        : (0, i.jsxs)(a.Z, {
                                            href: e.href,
                                            exact: e.exact,
                                            className:
                                              "menu-item flex items-center px-4 py-2 text-gray-900 rounded-lg hover:text-primary",
                                            activeClassName:
                                              "active shadow-lg bg-primary text-white hover:text-white",
                                            onClick: t,
                                            children: [
                                              e.icon,
                                              (0, i.jsx)("span", {
                                                className: "ms-3",
                                                children: e.label,
                                              }),
                                            ],
                                          }),
                                    },
                                    e.href
                                  )
                                ),
                              ],
                            },
                            n
                          )
                        ),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    65091: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var i = t(57437),
        a = t(34577),
        s = t(34029),
        l = t(50337),
        r = t(91652),
        c = t(83410),
        h = t(35713),
        o = t(27648);
      t(2265);
      var d = t(73630),
        m = t(80605),
        x = t(99376),
        g = t(85839),
        u = t(25394),
        p = t(24198),
        f = t(34169),
        v = t(87044);
      function b(e) {
        let { showFull: n = !1 } = e,
          t = (0, a.a)("(min-width: 1024px)"),
          b = (0, x.useRouter)(),
          { data: j, status: N } = (0, m.useSession)(),
          y = null == j ? void 0 : j.user,
          w = async () => {
            await (0, m.signOut)({ redirect: !1 }),
              s.ZP.success("Đăng xuất th\xe0nh c\xf4ng"),
              b.push("/"),
              b.refresh();
          };
        if ("loading" === N)
          return (0, i.jsx)(l.Z.Avatar, { active: !0, size: 40 });
        let k = (null == y ? void 0 : y.name) || "Guest",
          Z = k.length > 18 ? "".concat(k.slice(0, 18), "…") : k,
          C = (null == y ? void 0 : y.avatar)
            ? (null == y
                ? void 0
                : y.avatar.includes("googleusercontent.com")) ||
              (null == y ? void 0 : y.avatar.includes("fbsbx.com"))
              ? null == y
                ? void 0
                : y.avatar
              : (0, d.$B)(null == y ? void 0 : y.avatar, !0)
            : "/assets/images/avatar-default.png",
          T = [
            {
              key: "header",
              disabled: !0,
              label: (0, i.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                  (0, i.jsx)(r.Z, {
                    src: C,
                    size: 50,
                    alt: (null == y ? void 0 : y.name) || "User Avatar",
                  }),
                  (0, i.jsxs)("div", {
                    className: "ml-2 min-w-[150px]",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "font-bold text-xl text-black truncate flex items-center gap-2",
                        title: k,
                        children: [
                          (null == y ? void 0 : y.plan) === "BASIC" ||
                          (null == y ? void 0 : y.plan) === "PREMIUM"
                            ? (0, i.jsx)(g.Z, {
                                weight: "BoldDuotone",
                                size: 24,
                                color: "#faad14",
                              })
                            : "",
                          Z,
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "text-xs text-black-500",
                        children: (null == y ? void 0 : y.email) || "no email",
                      }),
                    ],
                  }),
                ],
              }),
            },
            { type: "divider" },
            {
              key: "dashboard",
              label: (0, i.jsx)(o.default, {
                href: "/dashboard",
                "aria-label": "Trang tổng quan",
                title: "Trang tổng quan",
                children: (0, i.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, i.jsx)(u.Z, { weight: "Linear" }),
                    (0, i.jsx)("span", {
                      className: "ml-2 text-sm",
                      children: "Trang tổng quan",
                    }),
                  ],
                }),
              }),
            },
            {
              key: "favorites",
              label: (0, i.jsx)(o.default, {
                href: "/favorites",
                "aria-label": "Mẫu thiệp y\xeau th\xedch",
                title: "Mẫu thiệp y\xeau th\xedch",
                children: (0, i.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, i.jsx)(p.Z, { weight: "Linear" }),
                    (0, i.jsx)("span", {
                      className: "ml-2 text-sm",
                      children: "Mẫu thiệp y\xeau th\xedch",
                    }),
                  ],
                }),
              }),
            },
            {
              key: "account",
              label: (0, i.jsx)(o.default, {
                href: "/dashboard/account",
                "aria-label": "C\xe0i đặt t\xe0i khoản",
                title: "C\xe0i đặt t\xe0i khoản",
                children: (0, i.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, i.jsx)(f.Z, { weight: "Linear" }),
                    (0, i.jsx)("span", {
                      className: "ml-2 text-sm",
                      children: "C\xe0i đặt t\xe0i khoản",
                    }),
                  ],
                }),
              }),
            },
            {
              key: "logout",
              danger: !0,
              label: (0, i.jsxs)("span", {
                className: "flex items-center",
                children: [
                  (0, i.jsx)(v.Z, { weight: "Linear" }),
                  (0, i.jsx)("span", {
                    className: "ml-2 text-sm",
                    children: "Đăng xuất",
                  }),
                ],
              }),
            },
          ];
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)(c.Z, {
            trigger: t ? ["hover"] : ["click"],
            menu: {
              items: T,
              onClick: (e) => {
                let { key: n } = e;
                "logout" === n && w();
              },
            },
            children: n
              ? (0, i.jsxs)("div", {
                  className: "flex items-center justify-center gap-1",
                  children: [
                    (0, i.jsx)(h.Z, {
                      size: "small",
                      color: "gold",
                      count:
                        (null == y ? void 0 : y.plan) === "PREMIUM" ||
                        (null == y ? void 0 : y.plan) === "BASIC"
                          ? (0, i.jsx)(g.Z, {
                              weight: "BoldDuotone",
                              size: 22,
                              color: "#faad14",
                            })
                          : "",
                      offset: [-2, 2],
                      className: "!border rounded-full",
                      children: (0, i.jsx)(r.Z, { src: C, size: 50 }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "ml-2 min-w-[150px]",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "font-bold text-base text-black truncate flex items-center gap-2",
                          title: k,
                          children: Z,
                        }),
                        (0, i.jsx)("div", {
                          className: "text-xs text-black-500",
                          children:
                            (null == y ? void 0 : y.email) || "no email",
                        }),
                      ],
                    }),
                  ],
                })
              : (0, i.jsx)(h.Z, {
                  size: "small",
                  color: "gold",
                  count:
                    (null == y ? void 0 : y.plan) === "PREMIUM" ||
                    (null == y ? void 0 : y.plan) === "BASIC"
                      ? (0, i.jsx)(g.Z, {
                          weight: "BoldDuotone",
                          size: 22,
                          color: "#faad14",
                        })
                      : "",
                  offset: [-2, 2],
                  className: "!border rounded-full",
                  children: (0, i.jsx)(r.Z, { src: C, size: 40 }),
                }),
          }),
        });
      }
    },
    91257: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(57437),
        a = t(27648),
        s = t(99376);
      function l(e) {
        let {
            href: n,
            children: t,
            className: l = "menu-item",
            activeClassName: r = "active",
            exact: c = !1,
            isActive: h,
            onClick: o,
            title: d,
            ...m
          } = e,
          x = (0, s.usePathname)(),
          g = ("function" == typeof h ? h(x) : c ? x === n : x.startsWith(n))
            ? "".concat(l, " ").concat(r)
            : l;
        return (0, i.jsx)(a.default, {
          href: n,
          className: g,
          ...m,
          title: d || "",
          onClick: o,
          children: t,
        });
      }
    },
    11840: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var i = t(57437),
        a = t(27648);
      t(2265);
      var s = t(89689);
      function l() {
        return (0, i.jsx)(a.default, {
          href: "/",
          "aria-label": "Quy & Hai - Wedding",
          title: "Quy & Hai - Wedding\xed",
          children: (0, i.jsxs)("div", {
            className:
              "group relative flex items-center justify-center cursor-pointer",
            children: [
              (0, i.jsx)("img", {
                src: "/assets/og.png",
                className: "h-7 mr-2 md:h-9",
                alt: "Quy & Hai - Wedding\xed",
                title: "@quyctd - Thiệp cưới online đẹp nhất",
              }),
              (0, i.jsx)("img", {
                src: "https://www.quyctd.dev/wedding/cdn-resource/assets/logo/logo-zenlove-text-dark.svg",
                className: "h-4 mr-3 md:h-5",
                alt: "Website thiệp cưới online",
                title: "@quyctd - Thiệp cưới điện tử đẹp nhất",
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute -top-1.5 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out",
                children: (0, i.jsxs)("span", {
                  className:
                    "text-xs text-gray-500 font-mono bg-white/80 px-1 py-0.5 rounded",
                  children: ["v", s.KZ],
                }),
              }),
            ],
          }),
        });
      }
    },
    89689: function (e, n, t) {
      t.d(n, {
        KZ: function () {
          return i;
        },
        U: function () {
          return a;
        },
      });
      let i = "1.26.3a6",
        a = (function (e) {
          let n = [];
          for (let i of e
            .trim()
            .split(/\n\s*\n/)
            .filter((e) => e.trim())) {
            let e = i.split("\n").map((e) => e.trim()),
              a = { changes: [] };
            for (let n of e)
              if (n.startsWith("version:"))
                a.version = n.replace("version:", "").trim();
              else if (n.startsWith("date:")) {
                let e = n.replace("date:", "").trim(),
                  [t, i, s] = e.split("-");
                t && i && s
                  ? (a.date = "".concat(s, "-").concat(i, "-").concat(t))
                  : (a.date = e);
              } else if (n.startsWith("+")) {
                let e = n.substring(1).trim(),
                  i = e.indexOf(":");
                if (i > 0) {
                  let n = e.substring(0, i).trim(),
                    s = e
                      .substring(i + 1)
                      .trim()
                      .replace(/\//g, "\n");
                  if ("feature" === n || "improvement" === n || "fix" === n) {
                    var t;
                    null === (t = a.changes) ||
                      void 0 === t ||
                      t.push({ type: n, description: s });
                  }
                }
              }
            a.version &&
              a.date &&
              a.changes &&
              n.push({ version: a.version, date: a.date, changes: a.changes });
          }
          return n;
        })(
          "\nversion:1.26.3a6\ndate:06-03-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug v3a3.\n\nversion:1.26.3a3\ndate:03-03-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi v1a30,v1a27, v2a16.\n\nversion:1.26.2a23\ndate:23-02-2026\nchanges:\n+ feature: Th\xeam t\xednh năng x\xf3a nền ảnh tự động.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.2a22\ndate:22-02-2026\nchanges:\n+ improvement: Cải thiện giao diện/Hỗ trợ ng\xf4n ngữ EN-VI cho RSVP v\xe0 Countdown.\n+ fix: Sửa lỗi bug v1a16/Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n\nversion:1.26.2a16\ndate:16-02-2026\nchanges:\n+ feature: Th\xeam t\xednh năng quản l\xfd nhạc ri\xeang của bạn.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.2a5\ndate:05-02-2026\nchanges:\n+ fix: Sửa lỗi bug v1a30,v1a27/Sửa lỗi k\xe9o chọn nhiều phần tử ở phi\xean bản PC/Loại bỏ Tour/Sửa lỗi tải ảnh l\xean hệ thống/Sửa lỗi kiểm tra ảnh trước khi x\xf3a trong tr\xecnh thiết kế.\n+ feature: Th\xeam t\xednh năng chỉnh thứ tự lớp/Căn chỉnh phần tử h\xe0ng loạt/Th\xeam t\xednh năng ph\xf3ng to-thu nhỏ/Ưu đ\xe3i tết 2026.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a30\ndate:30-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug v1a27.\n\nversion:1.26.1a27\ndate:27-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Cập nhật biểu ngữ x\xe1c nhận tham dự, thay đổi cơ chế thống k\xea RSVP/Fix bug v1a24,v1a8.\n\nversion:1.26.1a24\ndate:24-01-2026\nchanges:\n+ feature: Th\xeam th\xf4ng b\xe1o.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a13\ndate:13-01-2026\nchanges:\n+ feature: Th\xeam thư viện thiết kế sẵn.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a12\ndate:12-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Fix lỗi chọn nhiều phần tử khi k\xe9o thả phi\xean bản PC/Sửa lỗi sao ch\xe9p phần tử/Sửa lỗi th\xeam phần tử.\n\nversion:1.26.1a8\ndate:08-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n\nversion:1.26.1a1\ndate:06-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.26a1\ndate:26-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng AI Text Editor.\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.24a2\ndate:24-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi cache.\n\nversion:1.12.23a1\ndate:23-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng n\xe2ng cấp giới hạn v\xe0 mua add-on.\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.21a1\ndate:21-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.17a1\ndate:17-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi feedback.\n\nversion:1.12.14a3\ndate:14-12-2025\nchanges:\n+ improvement: Cải thiện hiệu năng/Cải thiện giao diện.\n\nversion:1.12.14a1\ndate:14-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng tạo chữ k\xfd v\xe0o thiệp.\n+ fix: Sửa lỗi xem trước tr\xean tr\xecnh thiết kế/Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n+ improvement: Cải thiện hiệu năng.\n\nversion:1.12.11a2\ndate:11-12-2025\nchanges:\n+ improvement: Cải thiện hiệu năng.\n+ fix: Fix lỗi cuộn trang tr\xean điện thoại khi xem thiệp/Fix lỗi trang chi tiết thiệp.\n\nversion:1.12.9a5\ndate:09-12-2025\nchanges:\n+ fix: Sửa lỗi gửi form x\xe1c nhận tham dự/Sửa lỗi lịch hiển thị.\n\nversion:1.12.9a4\ndate:09-12-2025\nchanges:\n+ fix: Fix lỗi feedback.\n\nversion:1.12.5a2\ndate:06-12-2025\nchanges:\n+ fix: Sửa lỗi hiển thị danh s\xe1ch lời ch\xfac/Th\xeam bộ lọc từ ngữ xấu.\n\nversion:1.12.5a1\ndate:05-12-2025\nchanges:\n+ improvement: N\xe2ng cấp hạ tầng CDN.\n+ fix: Sửa lỗi khi xem thiệp trong thư viện thiệp mẫu.\n\nversion:1.12.4a2\ndate:04-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng quản l\xfd ng\xe2n h\xe0ng/Th\xeam t\xednh năng y\xeau cầu r\xfat tiền từ qu\xe0 tặng/Lịch sử nhận qu\xe0 tặng.\n+ improvement: Tối ưu hiển thị danh s\xe1ch thiệp/Tối ưu trang xem thiệp.\n\nversion:1.12.2a4\ndate:02-12-2025\nchanges:\n+ feature: Th\xeam hiệu ứng mở m\xe0n mới/Th\xeam mẫu cắt ảnh mới/Sửa lỗi tải nhạc. \n\nversion:1.12.2a2\ndate:02-12-2025\nchanges:\n+ improvement: Cập nhật wallet/N\xe2ng cấp hạ tầng CDN.\n\nversion:1.11.29b3\ndate:29-11-2025\nchanges:\n+ improvement: N\xe2ng cấp hạ tầng CDN.\n\nversion:1.11.28b2\ndate:28-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi header.\n\nversion:1.11.28b1\ndate:28-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.11.27b2\ndate:27-11-2025\nchanges:\n+ fix: Sửa lỗi header.\n\nversion:1.11.27b1\ndate:27-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi 24b1.\n\nversion:1.11.24b1\ndate:24-11-2025\nchanges:\n+ feature: Th\xeam t\xednh năng tặng qu\xe0.\n\nversion:1.11.23b1\ndate:23-11-2025\nchanges:\n+ fix: Sửa lại lỗi tự động sao lưu thiệp.\n+ feature: Th\xeam t\xednh năng \xe1p dụng m\xe3 giảm gi\xe1 khi n\xe2ng cấp g\xf3i/Th\xeam t\xednh năng quản l\xfd số dư Points v\xe0 Credits (AI Features).\n\nversion:1.11.22b1\ndate:22-11-2025\nchanges:\n+ feature: Th\xeam tọa độ bản đồ, tự động lấy tọa độ từ địa chỉ/Th\xeam plugin lời nhắc th\xeam v\xe0o lịch.\n+ fix: Sửa lỗi xuất bản thiệp.\n\nversion:1.11.21b3\ndate:21-11-2025\nchanges:\n+ fix: Sửa lỗi hiển thị danh s\xe1ch b\xe0i h\xe1t/Sửa lỗi th\xf4ng b\xe1o lặp bản sao lưu.\n+ improvement: Cải thiện hiệu suất.\n\nversion:1.11.21b2\ndate:21-11-2025\nchanges:\n+ fix: Sửa lỗi khi k\xe9o thả tự do từ thanh c\xf4ng cụ tr\xean phi\xean bản PC\n\nversion:1.11.21b1\ndate:21-11-2025\nchanges:\n+ feature: Th\xeam t\xednh năng auto-save v\xe0 sao lưu tự động/Th\xeam t\xednh năng chọn nhiều node c\xf9ng l\xfac (bao gồm cả giữ chuột b\xf4i đen)/Th\xeam t\xednh năng k\xe9o thả tự do từ thanh c\xf4ng cụ tr\xean PC/Th\xeam t\xednh năng xem changelog\n+ improvement: Cải thiện hiệu suất render cho c\xe1c node phức tạp\n+ fix: Sửa lỗi kh\xf4ng lưu được thiệp/Sửa lỗi hiển thị chưa đ\xfang khi chọn nhiều node c\xf9ng l\xfac\n\n"
        );
    },
  },
]);
