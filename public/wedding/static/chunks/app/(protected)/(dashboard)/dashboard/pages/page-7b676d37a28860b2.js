(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4354],
  {
    78435: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 73075));
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
      var i = n(39486),
        r = n(53743),
        s = n(59646);
      let { Title: l, Text: o } = i.default;
      function c(e) {
        let { open: t, onClose: n, onUpgradePackage: i, onBuyAddons: c } = e;
        return (0, a.jsx)(r.default, {
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
              (0, a.jsx)(l, {
                level: 3,
                className: "!mb-2 !mt-0 !text-center !text-gray-900 !font-bold",
                children: "N\xe2ng cấp giới hạn",
              }),
              (0, a.jsx)(o, {
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
                      null == i || i(), n();
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
                          (0, a.jsx)(l, {
                            level: 5,
                            className:
                              "!mb-1.5 !mt-0 !text-gray-900 !font-semibold !text-base",
                            children: "N\xe2ng cấp g\xf3i",
                          }),
                          (0, a.jsx)(o, {
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
                          (0, a.jsx)(l, {
                            level: 5,
                            className:
                              "!mb-1.5 !mt-0 !text-gray-900 !font-semibold !text-base",
                            children: "Mua Add-ons",
                          }),
                          (0, a.jsx)(o, {
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
    73075: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return L;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(4156),
        s = n(96931),
        l = n(50337),
        o = n(80009),
        c = n(89970),
        d = n(34029),
        u = n(50742),
        m = n(50946),
        p = n(73630),
        g = n(12108),
        h = n(33051),
        v = n(7296),
        f = n(30528),
        x = n(5217),
        y = n(99376);
      function w(e) {
        let {
            data: t,
            loading: n,
            selectedItems: w = [],
            onSelectItem: b,
            onSelectAll: j,
            onClickItem: N,
            totalCount: S,
            onDeleteSelected: k,
            deletingSelected: T = !1,
            onCreateNew: C,
          } = e,
          [I, P] = (0, i.useState)(null),
          q = (0, y.useRouter)(),
          D = (e) =>
            e === m.ti.published
              ? "green"
              : e === m.ti.expired
              ? "red"
              : "warning";
        return (0, a.jsxs)("div", {
          className: "space-y-4",
          children: [
            t.length > 0 &&
              (0, a.jsxs)("div", {
                className:
                  "flex items-center justify-between p-4 bg-gray-50 rounded-lg",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      (0, a.jsxs)(r.Z, {
                        checked: t.length > 0 && w.length === t.length,
                        indeterminate: w.length > 0 && w.length < t.length,
                        onChange: (e) =>
                          null == j ? void 0 : j(e.target.checked),
                        children: [
                          "Chọn tất cả (",
                          w.length,
                          "/",
                          t.length,
                          ")",
                        ],
                      }),
                      w.length > 0 &&
                        (0, a.jsx)("button", {
                          type: "button",
                          onClick: () => (null == k ? void 0 : k()),
                          disabled: T,
                          className:
                            "px-3 py-1.5 text-sm rounded text-white ".concat(
                              T
                                ? "bg-red-400 cursor-not-allowed"
                                : "bg-red-500 hover:bg-red-600"
                            ),
                          children: T
                            ? "Đang x\xf3a..."
                            : "X\xf3a (".concat(w.length, ")"),
                        }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "text-sm text-gray-600",
                    children: [null != S ? S : t.length, " thiệp"],
                  }),
                ],
              }),
            (0, a.jsxs)("div", {
              className:
                "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              children: [
                n &&
                  0 === t.length &&
                  Array.from({ length: 4 }).map((e, t) =>
                    (0, a.jsxs)(
                      s.Z,
                      {
                        styles: { body: { padding: 0 } },
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "relative aspect-[16/9] overflow-hidden bg-gray-100",
                            children: (0, a.jsx)("div", {
                              className:
                                "absolute inset-0 flex items-center justify-center",
                              children: (0, a.jsx)(l.Z.Image, { active: !0 }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "px-3 pt-2 pb-3",
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex items-start justify-between gap-2",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "min-w-0 space-y-2",
                                  children: [
                                    (0, a.jsx)(l.Z.Input, {
                                      active: !0,
                                      size: "small",
                                      style: { width: "100%", marginBottom: 4 },
                                    }),
                                    (0, a.jsx)(l.Z.Input, {
                                      active: !0,
                                      size: "small",
                                      style: { width: "70%" },
                                    }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex items-center gap-1 shrink-0",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-7 h-7 rounded-full bg-gray-200",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-7 h-7 rounded-full bg-gray-200",
                                    }),
                                    (0, a.jsx)("div", {
                                      className:
                                        "w-7 h-7 rounded-full bg-gray-200",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      },
                      "skeleton-".concat(t)
                    )
                  ),
                t.map((e) => {
                  var t, n;
                  let i = I === e.id,
                    l = w.includes(e.id);
                  return (0, a.jsx)(
                    s.Z,
                    {
                      hoverable: !0,
                      styles: { body: { padding: 0 } },
                      className:
                        "relative transition-all duration-200 overflow-hidden cursor-pointer "
                          .concat(
                            l ? "ring-2 ring-blue-500 shadow-lg" : "",
                            " "
                          )
                          .concat(i ? "shadow-lg scale-105" : ""),
                      onMouseEnter: () => P(e.id),
                      onMouseLeave: () => P(null),
                      onClick: (t) => {
                        !t.target.closest(".ant-checkbox") && N && N(e);
                      },
                      cover: (0, a.jsxs)("div", {
                        className:
                          "relative aspect-[16/9] overflow-hidden bg-gray-100",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "w-full h-full flex items-center justify-center",
                            children: (0, a.jsx)("img", {
                              src: (0, p.$B)(e.thumbnailKey || "", !0),
                              alt: e.name,
                              className:
                                "max-w-full max-h-full w-full h-full object-cover lazy-load",
                              onError: (e) => {
                                let t = e.currentTarget;
                                (t.onerror = null),
                                  (t.src = "/assets/thumb_default.png");
                              },
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "absolute top-2 left-2 z-10",
                            children: (0, a.jsx)(r.Z, {
                              checked: l,
                              onChange: (t) =>
                                null == b ? void 0 : b(e.id, t.target.checked),
                              className: "backdrop-blur-sm",
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "absolute top-2 right-2 z-10",
                            children: (0, a.jsx)(o.Z, {
                              color: D(e.status),
                              className: "text-xs",
                              children:
                                e.status === m.ti.published
                                  ? "Đ\xe3 xuất bản"
                                  : e.status === m.ti.draft
                                  ? "Nh\xe1p"
                                  : "Hết hạn",
                            }),
                          }),
                          i &&
                            (0, a.jsxs)("div", {
                              className:
                                "absolute inset-0 bg-black/45 flex flex-col items-center justify-between rounded-lg",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute inset-0 flex items-center justify-center pointer-events-none",
                                  children: (0, a.jsx)("div", {
                                    className:
                                      "px-4 py-2 text-sm md:text-base lg:text-lg font-medium text-white",
                                    children: "Xem chi tiết",
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "absolute bottom-0 w-full p-2 text-white text-left bg-gradient-to-t from-black/70 via-black/20 to-transparent",
                                  children: (0, a.jsxs)("div", {
                                    className: "text-xs text-gray-300 truncate",
                                    children: [
                                      "Cập nhật",
                                      " ",
                                      (0, g.WU)(
                                        new Date(e.updatedAt),
                                        "dd/MM/yyyy HH:mm",
                                        { locale: h.vi }
                                      ),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                        ],
                      }),
                      children: (0, a.jsx)("div", {
                        className: "px-3 pt-2 pb-3",
                        children: (0, a.jsxs)("div", {
                          className: "flex items-start justify-between gap-2",
                          children: [
                            (0, a.jsxs)("div", {
                              className: "min-w-0",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "text-sm font-medium text-gray-900 truncate",
                                  title: e.name,
                                  children: e.name,
                                }),
                                (0, a.jsxs)("div", {
                                  className: "text-xs text-gray-500 truncate",
                                  title:
                                    null !== (t = e.slug) && void 0 !== t
                                      ? t
                                      : e.id,
                                  children: [
                                    "/",
                                    null !== (n = e.slug) && void 0 !== n
                                      ? n
                                      : e.id,
                                  ],
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "flex items-center gap-1 shrink-0",
                              children: [
                                (0, a.jsx)(c.Z, {
                                  title: "Xem thiệp",
                                  children: (0, a.jsx)("button", {
                                    type: "button",
                                    className:
                                      "w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition",
                                    "aria-label": "Xem thiệp",
                                    onClick: (t) => {
                                      t.stopPropagation();
                                      let n = "/s/".concat(e.slug || e.id);
                                      window.open(
                                        n,
                                        "_blank",
                                        "noopener,noreferrer"
                                      );
                                    },
                                    children: (0, a.jsx)(v.Z, {
                                      weight: "BoldDuotone",
                                      className: "w-3.5 h-3.5",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(c.Z, {
                                  title: "Mở tr\xecnh chỉnh sửa",
                                  children: (0, a.jsx)("button", {
                                    type: "button",
                                    className:
                                      "w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition",
                                    "aria-label": "Mở tr\xecnh chỉnh sửa",
                                    onClick: (t) => {
                                      t.stopPropagation(),
                                        q.push("/design/".concat(e.id));
                                    },
                                    children: (0, a.jsx)(f.Z, {
                                      weight: "BoldDuotone",
                                      className: "w-3.5 h-3.5",
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(c.Z, {
                                  title: "Sao ch\xe9p link thiệp",
                                  children: (0, a.jsx)("button", {
                                    type: "button",
                                    className:
                                      "w-7 h-7 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition",
                                    "aria-label": "Sao ch\xe9p link thiệp",
                                    onClick: async (t) => {
                                      t.stopPropagation();
                                      try {
                                        let t = e.slug || e.id,
                                          n = ""
                                            .concat("https://zenlove.me", "/s/")
                                            .concat(t);
                                        await navigator.clipboard.writeText(n),
                                          d.ZP.success(
                                            "Đ\xe3 sao ch\xe9p link thiệp"
                                          );
                                      } catch (e) {
                                        d.ZP.error(
                                          "Kh\xf4ng thể sao ch\xe9p link thiệp"
                                        );
                                      }
                                    },
                                    children: (0, a.jsx)(x.Z, {
                                      weight: "BoldDuotone",
                                      className: "w-3.5 h-3.5",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    e.id
                  );
                }),
              ],
            }),
            !n &&
              0 === t.length &&
              (0, a.jsxs)("div", {
                className: "text-center py-12",
                children: [
                  (0, a.jsx)("div", {
                    className: "mb-2 flex justify-center items-center",
                    children: (0, a.jsx)(x.Z, {
                      weight: "LineDuotone",
                      size: 60,
                      color: "#0f4159",
                    }),
                  }),
                  (0, a.jsx)("h3", {
                    className: "text-lg mt-0 text-gray-900 mb-2",
                    children: "Kh\xf4ng c\xf3 thiệp n\xe0o",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-gray-500",
                    children: "Tạo thiệp đầu ti\xean để bắt đầu sử dụng",
                  }),
                  (0, a.jsx)("div", {
                    className: "mt-4",
                    children: (0, a.jsx)(u.ZP, {
                      type: "primary",
                      onClick: () => (null == C ? void 0 : C()),
                      icon: (0, a.jsx)(f.Z, { weight: "Linear" }),
                      children: "Tạo thiệp mới",
                    }),
                  }),
                ],
              }),
          ],
        });
      }
      var b = n(1994),
        j = n(84985);
      function N(e) {
        let { loading: t = !1 } = e,
          { limits: n, usage: i, getRemainingLimit: r } = (0, j.z)(),
          l = r("view"),
          o = l.max,
          c = l.used,
          d = l.remaining,
          u = !o || o <= 0,
          m = u ? 0 : Math.min(100, (c / o) * 100),
          p = t || (!n && !i);
        return (0, a.jsxs)(s.Z, {
          className: "w-full group overflow-hidden",
          styles: { body: { padding: "16px", position: "relative" } },
          children: [
            (0, a.jsx)(v.Z, {
              weight: "BoldDuotone",
              className:
                "w-24 h-24 text-blue-400 opacity-15 pointer-events-none absolute bottom-2 right-2.5 -rotate-12 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-30",
              style: { zIndex: 0 },
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-1 md:gap-4 relative",
              style: { zIndex: 1 },
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-row gap-1 md:gap-3 md:flex-row justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "w-full md:w-[70%]",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-base md:text-lg text-gray-900 m-0",
                          children: "Thống k\xea lượt xem",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "hidden md:block text-sm text-gray-600 m-0",
                          children:
                            "Theo d\xf5i tổng lượt xem từ c\xe1c thiệp của bạn.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-right",
                      children: [
                        p
                          ? (0, a.jsx)("div", {
                              className:
                                "mt-1 h-6 w-24 bg-gray-100 rounded animate-pulse",
                            })
                          : (0, a.jsx)("div", {
                              className:
                                "mt-1 text-2xl font-bold text-gray-900",
                              children: c.toLocaleString("vi-VN"),
                            }),
                        (0, a.jsx)("div", {
                          className:
                            "hidden md:block text-xs tracking-wide text-gray-500",
                          children: p
                            ? "—"
                            : u
                            ? "Kh\xf4ng giới hạn"
                            : "/ ".concat(
                                o.toLocaleString("vi-VN"),
                                " lượt xem"
                              ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "space-y-0 md:space-y-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-between text-xs md:text-sm text-gray-600",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)("span", {
                            className: "font-medium",
                            children: "Đ\xe3 sử dụng",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "text-xs md:text-sm text-gray-600",
                          children:
                            p || u
                              ? "—"
                              : "".concat(m.toFixed(1).replace(".", ","), "%"),
                        }),
                      ],
                    }),
                    p
                      ? (0, a.jsx)("div", {
                          className:
                            "h-3 w-full bg-gray-100 rounded-full overflow-hidden",
                          children: (0, a.jsx)("div", {
                            className: "h-full w-1/2 bg-gray-200 animate-pulse",
                          }),
                        })
                      : (0, a.jsx)(b.Z, {
                          className: "!m-0",
                          percent: u ? 0 : Number(m.toFixed(1)),
                          showInfo: !1,
                          status:
                            !u && c >= o && o > 0 ? "exception" : "normal",
                          strokeColor:
                            !u && c >= o && o > 0 ? "#ff4d4f" : "#1677ff",
                        }),
                    !p &&
                      !u &&
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between text-xs text-gray-500",
                        children: [
                          (0, a.jsxs)("span", {
                            children: [
                              "Đ\xe3 sử dụng:",
                              " ",
                              (0, a.jsxs)("span", {
                                className: "font-medium text-gray-700",
                                children: [c.toLocaleString("vi-VN"), " lượt"],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("span", {
                            children: [
                              "C\xf2n lại:",
                              " ",
                              (0, a.jsxs)("span", {
                                className: "font-medium ".concat(
                                  d <= 0 ? "text-red-500" : "text-gray-700"
                                ),
                                children: [d.toLocaleString("vi-VN"), " lượt"],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var S = n(63589);
      function k(e) {
        let { loading: t = !1 } = e,
          { limits: n, usage: i, getRemainingLimit: r } = (0, j.z)(),
          l = r("page"),
          o = l.max,
          c = l.used,
          d = l.remaining,
          u = !o || o <= 0,
          m = u ? 0 : Math.min(100, (c / o) * 100),
          p = t || (!n && !i);
        return (0, a.jsxs)(s.Z, {
          className: "w-full group overflow-hidden",
          styles: { body: { padding: "16px", position: "relative" } },
          children: [
            (0, a.jsx)(S.Z, {
              weight: "BoldDuotone",
              className:
                "w-24 h-24 text-indigo-400 opacity-15 pointer-events-none absolute bottom-2 right-2.5 -rotate-12 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-30",
              style: { zIndex: 0 },
            }),
            (0, a.jsxs)("div", {
              className: "flex flex-col gap-1 md:gap-4 relative",
              style: { zIndex: 1 },
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-row gap-1 md:gap-3 md:flex-row justify-between",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "w-full md:w-[70%]",
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-base md:text-lg text-gray-900 m-0",
                          children: "Thống k\xea số lượng thiệp",
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "hidden md:block text-sm text-gray-600 m-0",
                          children:
                            "Theo d\xf5i số thiệp đ\xe3 tạo v\xe0 giới hạn g\xf3i hiện tại của bạn.",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className: "text-right",
                      children: [
                        p
                          ? (0, a.jsx)("div", {
                              className:
                                "mt-1 h-6 w-24 bg-gray-100 rounded animate-pulse",
                            })
                          : (0, a.jsx)("div", {
                              className:
                                "mt-1 text-2xl font-bold text-gray-900",
                              children: c.toLocaleString("vi-VN"),
                            }),
                        (0, a.jsx)("div", {
                          className:
                            "hidden md:block text-xs tracking-wide text-gray-500",
                          children: p
                            ? "—"
                            : u
                            ? "Kh\xf4ng giới hạn"
                            : "/ ".concat(o.toLocaleString("vi-VN"), " thiệp"),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "space-y-0 md:space-y-1",
                  children: [
                    (0, a.jsxs)("div", {
                      className:
                        "flex items-center justify-between text-xs md:text-sm text-gray-600",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)("span", {
                            className: "font-medium",
                            children: "Đ\xe3 sử dụng",
                          }),
                        }),
                        (0, a.jsx)("div", {
                          className: "text-xs md:text-sm text-gray-600",
                          children:
                            p || u
                              ? "—"
                              : "".concat(m.toFixed(1).replace(".", ","), "%"),
                        }),
                      ],
                    }),
                    p
                      ? (0, a.jsx)("div", {
                          className:
                            "h-3 w-full bg-gray-100 rounded-full overflow-hidden",
                          children: (0, a.jsx)("div", {
                            className: "h-full w-1/2 bg-gray-200 animate-pulse",
                          }),
                        })
                      : (0, a.jsx)(b.Z, {
                          className: "!m-0",
                          percent: u ? 0 : Number(m.toFixed(1)),
                          showInfo: !1,
                          status:
                            !u && c >= o && o > 0 ? "exception" : "normal",
                          strokeColor:
                            !u && c >= o && o > 0 ? "#ff4d4f" : "#6366f1",
                        }),
                    !p &&
                      !u &&
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-between text-xs text-gray-500",
                        children: [
                          (0, a.jsxs)("span", {
                            children: [
                              "Đ\xe3 sử dụng:",
                              " ",
                              (0, a.jsxs)("span", {
                                className: "font-medium text-gray-700",
                                children: [c.toLocaleString("vi-VN"), " thiệp"],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("span", {
                            children: [
                              "C\xf2n lại:",
                              " ",
                              (0, a.jsxs)("span", {
                                className: "font-medium ".concat(
                                  d <= 0 ? "text-red-500" : "text-gray-700"
                                ),
                                children: [d.toLocaleString("vi-VN"), " thiệp"],
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
      var T = n(85839),
        C = n(93935),
        I = n(18998);
      function P() {
        let e = (0, y.useRouter)(),
          [t, n] = (0, i.useState)(!1);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(s.Z, {
              className:
                "w-full !border-orange-300 !bg-gradient-to-r !from-orange-50 !via-amber-50 !to-yellow-50 group overflow-hidden",
              styles: { body: { padding: "14px", position: "relative" } },
              children: [
                (0, a.jsx)(T.Z, {
                  weight: "BoldDuotone",
                  className:
                    "w-24 h-24 text-yellow-400 opacity-15 pointer-events-none absolute bottom-2 right-2.5 -rotate-12 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-30",
                  style: { zIndex: 0 },
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col gap-2 items-center justify-center text-center relative",
                  style: { zIndex: 1 },
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)("h2", {
                          className: "text-base md:text-lg text-gray-900 m-0",
                          children: "Kh\xf4ng giới hạn",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-sm text-gray-600 m-0",
                          children:
                            "N\xe2ng cấp giới hạn v\xe0 mở kh\xf3a th\xeam nhiều t\xednh năng th\xfa vị cho thiệp của bạn.",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "mt-1",
                      children: (0, a.jsxs)(u.ZP, {
                        type: "primary",
                        size: "middle",
                        onClick: () => n(!0),
                        className:
                          "!rounded-full !px-5 !h-9 !bg-orange-500 hover:!bg-orange-600 !border-none !shadow-md flex items-center gap-1",
                        children: [
                          (0, a.jsx)("span", {
                            className:
                              "text-xs font-medium uppercase tracking-wide",
                            children: "N\xe2ng cấp g\xf3i",
                          }),
                          (0, a.jsx)(C.Z, {
                            weight: "BoldDuotone",
                            className: "w-4 h-4",
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(I.Z, {
              open: t,
              onClose: () => n(!1),
              onUpgradePackage: () => {
                e.push("/pricing?ref=page_manager");
              },
              onBuyAddons: () => {
                e.push("/dashboard/addons");
              },
            }),
          ],
        });
      }
      var q = n(35174),
        D = n(53743);
      function L() {
        let e = (0, y.useRouter)(),
          t = async () => {
            e.replace("/design/new-blank");
          },
          [n, r] = (0, i.useState)(1),
          [s, l] = (0, i.useState)(12),
          [o, c] = (0, i.useState)(""),
          [p, g] = (0, i.useState)(""),
          [h, v] = (0, i.useState)([]),
          x = (0, i.useMemo)(
            () => ({
              page: n,
              limit: s,
              search: o || void 0,
              status: p || void 0,
            }),
            [n, s, o, p]
          ),
          { data: b, isLoading: j, refetch: S, isFetching: T } = (0, m.Qt)(x),
          C = (0, m.Kc)(),
          [I, L] = (0, i.useState)(!1),
          K = (null == b ? void 0 : b.meta.total) || 0,
          E = (null == b ? void 0 : b.items) || [];
        return (0, a.jsxs)("div", {
          className: "space-y-4",
          children: [
            (0, a.jsxs)("div", {
              className:
                "flex flex-col gap-3 md:flex-row md:items-center md:justify-between",
              children: [
                (0, a.jsxs)("div", {
                  className: "min-w-0",
                  children: [
                    (0, a.jsx)("h1", {
                      className: "text-2xl text-gray-900 truncate m-0",
                      children: "Thiệp của t\xf4i",
                    }),
                    (0, a.jsx)("p", {
                      className: "text-gray-600 mt-2 mb-0",
                      children: "Quản l\xfd v\xe0 theo d\xf5i thiệp của bạn.",
                    }),
                  ],
                }),
                (0, a.jsx)(u.ZP, {
                  type: "primary",
                  size: "large",
                  className: "w-full md:w-auto",
                  onClick: t,
                  loading: !1,
                  icon: (0, a.jsx)(f.Z, { weight: "Linear" }),
                  children: "Tạo thiệp mới",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-[2fr_2fr_1fr] gap-3",
              children: [
                (0, a.jsx)(N, { loading: j || T }),
                (0, a.jsx)(k, { loading: j || T }),
                (0, a.jsx)(P, {}),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "bg-white rounded-lg shadow p-4",
              children: [
                (0, a.jsx)("div", {
                  children: (0, a.jsx)(w, {
                    data: E,
                    loading: j || T,
                    selectedItems: h,
                    onSelectItem: (e, t) => {
                      v((n) => {
                        let a = new Set(n);
                        return t ? a.add(e) : a.delete(e), Array.from(a);
                      });
                    },
                    onSelectAll: (e) => {
                      if (!(null == E ? void 0 : E.length)) {
                        v([]);
                        return;
                      }
                      v(e ? E.map((e) => e.id) : []);
                    },
                    totalCount: K,
                    deletingSelected: I,
                    onCreateNew: t,
                    onClickItem: (t) => {
                      e.push("/dashboard/pages/".concat(t.id));
                    },
                    onDeleteSelected: () => {
                      0 !== h.length &&
                        D.default.confirm({
                          title: "X\xe1c nhận x\xf3a",
                          content: "Bạn c\xf3 chắc muốn x\xf3a ".concat(
                            h.length,
                            " thiệp đ\xe3 chọn? H\xe0nh động n\xe0y kh\xf4ng thể ho\xe0n t\xe1c."
                          ),
                          okText: "X\xf3a",
                          okButtonProps: { danger: !0 },
                          cancelText: "Hủy",
                          onOk: async () => {
                            try {
                              L(!0),
                                await Promise.allSettled(
                                  h.map((e) => C.mutateAsync(e))
                                ),
                                v([]),
                                await S(),
                                d.ZP.success(
                                  "Đ\xe3 x\xf3a c\xe1c thiệp đ\xe3 chọn"
                                );
                            } catch (e) {
                              console.error(e),
                                d.ZP.error(
                                  "X\xf3a thất bại, vui l\xf2ng thử lại"
                                );
                            } finally {
                              L(!1);
                            }
                          },
                        });
                    },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "mt-4",
                  children: (0, a.jsx)(q.Z, {
                    current: n,
                    total: K,
                    pageSize: s,
                    loading: j || T,
                    onPageChange: (e, t) => {
                      r(e), l(t);
                    },
                    itemName: "thiệp",
                  }),
                }),
              ],
            }),
          ],
        });
      }
    },
    35174: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = n(57437);
      n(2265);
      var i = n(39486),
        r = n(64170);
      let { Text: s } = i.default;
      function l(e) {
        let {
          current: t,
          total: n,
          pageSize: i,
          loading: l = !1,
          onPageChange: o,
          showSizeChanger: c = !0,
          showQuickJumper: d = !1,
          showTotal: u = !0,
          showItemCount: m = !0,
          className: p = "",
          itemName: g = "mục",
        } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow ".concat(
              p
            ),
          children: [
            m &&
              (0, a.jsx)("div", {
                className: "flex items-center space-x-4",
                children: (0, a.jsxs)(s, {
                  className: "text-gray-600",
                  children: ["Tổng ", n, " ", g],
                }),
              }),
            (0, a.jsx)("div", {
              className: "flex items-center space-x-4",
              children: (0, a.jsx)(r.Z, {
                current: t,
                total: n,
                pageSize: i,
                showSizeChanger: c,
                showQuickJumper: d,
                showTotal: u
                  ? (e, t) =>
                      "".concat(t[0], "-").concat(t[1], " của ").concat(e)
                  : void 0,
                onChange: (e, t) => {
                  o(e, t || i);
                },
                disabled: l,
                className: "pagination-component",
              }),
            }),
          ],
        });
      }
    },
    35502: function (e, t, n) {
      "use strict";
      n.d(t, {
        $T: function () {
          return o;
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
          return p;
        },
        b: function () {
          return d;
        },
        nM: function () {
          return u;
        },
        xe: function () {
          return l;
        },
      });
      var a = n(71632),
        i = n(29827),
        r = n(21770);
      let s = (0, n(33818).g)("https://api.zenlove.me");
      function l(e) {
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
      function o(e) {
        var t, n;
        let i = l({
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
            "success" === i.status,
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
        let e = (0, i.NL)();
        return (0, r.D)({
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
        let e = (0, i.NL)();
        return (0, r.D)({
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
      function p() {
        let e = (0, i.NL)();
        return (0, r.D)({
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
        let e = (0, i.NL)();
        return (0, r.D)({
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
    84985: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return s;
        },
      });
      var a = n(35502),
        i = n(7999),
        r = n(11266);
      function s() {
        let { data: e } = (0, a.xe)(),
          { data: t } = (0, a.$T)(),
          n = () => {
            if (e && t) {
              var n, a, i;
              let r =
                null !==
                  (a =
                    null === (n = e.limits) || void 0 === n
                      ? void 0
                      : n.maxViews) && void 0 !== a
                  ? a
                  : 0;
              return (
                0 ===
                  Math.max(
                    r - (null !== (i = t.totalViews) && void 0 !== i ? i : 0),
                    0
                  ) && r > 0
              );
            }
            return !1;
          },
          s = () => {
            if (e && t) {
              var n, a, i;
              let r =
                null !==
                  (a =
                    null === (n = e.limits) || void 0 === n
                      ? void 0
                      : n.maxPages) && void 0 !== a
                  ? a
                  : 0;
              return (
                0 ===
                  Math.max(
                    r - (null !== (i = t.pagesCount) && void 0 !== i ? i : 0),
                    0
                  ) && r > 0
              );
            }
            return !1;
          },
          l = () => {
            if (e && t) {
              var n, a, i;
              let r =
                null !==
                  (a =
                    null === (n = e.limits) || void 0 === n
                      ? void 0
                      : n.maxImages) && void 0 !== a
                  ? a
                  : 0;
              return (
                0 ===
                  Math.max(
                    r - (null !== (i = t.imagesCount) && void 0 !== i ? i : 0),
                    0
                  ) && r > 0
              );
            }
            return !1;
          };
        return {
          isViewLimitReached: n(),
          checkViewLimit: n,
          isPageLimitReached: s(),
          checkPageLimit: s,
          isImageLimitReached: l(),
          checkImageLimit: l,
          limits: e,
          usage: t,
          canUseTemplateType: (t) => {
            var n, a;
            if (t === i.WY.free) return !0;
            let s =
                (null == e
                  ? void 0
                  : null === (n = e.limits) || void 0 === n
                  ? void 0
                  : n.features) || {},
              l =
                (null == e
                  ? void 0
                  : null === (a = e.basePlan) || void 0 === a
                  ? void 0
                  : a.toUpperCase()) || "FREE",
              o = (0, r.Ql)(s);
            if ("premium" === o) return !0;
            if ("basic" === o) return t !== i.WY.premium;
            switch (l) {
              case "PREMIUM":
                return !0;
              case "BASIC":
                return t !== i.WY.premium;
              default:
                return !1;
            }
          },
          checkFeatureAccess: (t) => {
            var n;
            let a =
              (null == e
                ? void 0
                : null === (n = e.limits) || void 0 === n
                ? void 0
                : n.features) || {};
            return (0, r._k)(a, t);
          },
          getRemainingLimit: (n) => {
            var a, i, r, s, l, o, c, d, u;
            if (!e || !t) return { max: 0, used: 0, remaining: 0 };
            switch (n) {
              case "page": {
                let n =
                    null !==
                      (i =
                        null === (a = e.limits) || void 0 === a
                          ? void 0
                          : a.maxPages) && void 0 !== i
                      ? i
                      : 0,
                  s = null !== (r = t.pagesCount) && void 0 !== r ? r : 0;
                return { max: n, used: s, remaining: Math.max(n - s, 0) };
              }
              case "image": {
                let n =
                    null !==
                      (l =
                        null === (s = e.limits) || void 0 === s
                          ? void 0
                          : s.maxImages) && void 0 !== l
                      ? l
                      : 0,
                  a = null !== (o = t.imagesCount) && void 0 !== o ? o : 0;
                return { max: n, used: a, remaining: Math.max(n - a, 0) };
              }
              case "view": {
                let n =
                    null !==
                      (d =
                        null === (c = e.limits) || void 0 === c
                          ? void 0
                          : c.maxViews) && void 0 !== d
                      ? d
                      : 0,
                  a = null !== (u = t.totalViews) && void 0 !== u ? u : 0;
                return { max: n, used: a, remaining: Math.max(n - a, 0) };
              }
            }
          },
        };
      }
    },
    50946: function (e, t, n) {
      "use strict";
      n.d(t, {
        F1: function () {
          return v;
        },
        Kc: function () {
          return f;
        },
        Qt: function () {
          return m;
        },
        RT: function () {
          return h;
        },
        il: function () {
          return y;
        },
        lv: function () {
          return w;
        },
        qt: function () {
          return p;
        },
        ti: function () {
          return i;
        },
        vq: function () {
          return g;
        },
        yB: function () {
          return x;
        },
      });
      var a,
        i,
        r = n(71632),
        s = n(29827),
        l = n(21770),
        o = n(33818),
        c = n(35502),
        d = n(2265);
      let u = (0, o.g)("https://api.zenlove.me");
      function m() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.a)({
          queryKey: ["pages", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.search && t.append("search", e.search),
              e.status && t.append("status", String(e.status)),
              e.categoryId && t.append("categoryId", e.categoryId),
              void 0 !== e.isActive && t.append("isActive", String(e.isActive)),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (await u("/v1/pages".concat(n ? "?".concat(n) : ""))).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function p(e) {
        return (0, r.a)({
          queryKey: ["page", e],
          queryFn: async () => (await u("/v1/pages/".concat(e))).data,
          enabled: !!e,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function g() {
        let e = (0, s.NL)(),
          t = (0, c.xe)(),
          n = (0, c.$T)();
        return (0, l.D)({
          mutationFn: async (e) => {
            var a, i, r, s;
            let [l, o] = await Promise.all([t.refetch(), n.refetch()]),
              c =
                null === (i = l.data) || void 0 === i
                  ? void 0
                  : null === (a = i.limits) || void 0 === a
                  ? void 0
                  : a.maxPages,
              d =
                null !==
                  (s =
                    null === (r = o.data) || void 0 === r
                      ? void 0
                      : r.pagesCount) && void 0 !== s
                  ? s
                  : 0;
            if ("number" == typeof c && d >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await u("/v1/pages", { method: "POST", body: JSON.stringify(e) })
            ).data;
          },
          onSuccess: async (a) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), n.refetch()]),
              e.setQueryData(["page", a.id], { page: a, statistics: null });
          },
        });
      }
      function h() {
        let e = (0, s.NL)();
        return (0, l.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await u("/v1/pages/".concat(t), {
                method: "PUT",
                body: JSON.stringify(n),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.setQueryData(["page", n.id], (e) =>
              e
                ? { ...e, page: { ...e.page, ...t } }
                : { page: t, statistics: null }
            ),
              e.setQueriesData({ queryKey: ["pages"] }, (e) =>
                e
                  ? {
                      ...e,
                      items: e.items.map((e) =>
                        e.id === n.id ? { ...e, ...t } : e
                      ),
                    }
                  : e
              );
          },
        });
      }
      function v() {
        let e = (0, s.NL)();
        return (0, l.D)({
          mutationFn: async (e) =>
            (
              await u("/v1/pages/update", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: (t, n) => {
            (0, d.startTransition)(() => {
              e.setQueryData(["page", n.id], (e) =>
                e
                  ? { ...e, page: { ...e.page, ...t } }
                  : {
                      page: t,
                      statistics: {
                        commentsCount: 0,
                        likeCount: t.likeCount || 0,
                        viewCount: t.viewCount || 0,
                        giftCount: 0,
                        comments: [],
                      },
                    }
              ),
                e.setQueriesData({ queryKey: ["pages"] }, (e) =>
                  e
                    ? {
                        ...e,
                        items: e.items.map((e) =>
                          e.id === n.id ? { ...e, ...t } : e
                        ),
                      }
                    : e
                );
            });
          },
          onError: (t) => {
            var n;
            ((null == t
              ? void 0
              : null === (n = t.message) || void 0 === n
              ? void 0
              : n.includes("Page expired")) ||
              (null == t ? void 0 : t.status) === 400) &&
              (e.invalidateQueries({ queryKey: ["pages"] }),
              (null == t ? void 0 : t.pageId) &&
                e.invalidateQueries({ queryKey: ["page", t.pageId] }));
          },
        });
      }
      function f() {
        let e = (0, s.NL)();
        return (0, l.D)({
          mutationFn: async (e) => (
            await u("/v1/pages/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: (t) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              e.removeQueries({ queryKey: ["page", t] });
          },
        });
      }
      function x() {
        let e = (0, s.NL)(),
          t = (0, c.xe)(),
          n = (0, c.$T)();
        return (0, l.D)({
          mutationFn: async (e) => {
            var a, i, r, s;
            let [l, o] = await Promise.all([t.refetch(), n.refetch()]),
              c =
                null === (i = l.data) || void 0 === i
                  ? void 0
                  : null === (a = i.limits) || void 0 === a
                  ? void 0
                  : a.maxPages,
              d =
                null !==
                  (s =
                    null === (r = o.data) || void 0 === r
                      ? void 0
                      : r.pagesCount) && void 0 !== s
                  ? s
                  : 0;
            if ("number" == typeof c && d >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await u("/v1/pages/".concat(e, "/duplicate"), { method: "POST" })
            ).data;
          },
          onSuccess: async (a) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), n.refetch()]),
              e.setQueryData(["page", a.id], { page: a, statistics: null });
          },
        });
      }
      function y() {
        let e = (0, s.NL)();
        return (0, l.D)({
          mutationFn: async (e) => {
            let t = await fetch(
              ""
                .concat("https://api.zenlove.me", "/v1/pages/")
                .concat(e.id, "/like"),
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              }
            );
            if (!t.ok) throw Error("HTTP error! status: ".concat(t.status));
            return await t.json();
          },
          onSuccess: (t, n) => {
            e.setQueryData(["page", n.id], (e) =>
              e
                ? {
                    ...e,
                    page: { ...e.page, likeCount: t.likeCount },
                    statistics: { ...e.statistics, likeCount: t.likeCount },
                  }
                : e
            ),
              e.setQueriesData({ queryKey: ["pages"] }, (e) =>
                e
                  ? {
                      ...e,
                      items: e.items.map((e) =>
                        e.id === n.id ? { ...e, likeCount: t.likeCount } : e
                      ),
                    }
                  : e
              );
          },
          onError: (e) => {
            (null == e ? void 0 : e.status) === 429
              ? console.warn("Rate limited for like action")
              : (null == e ? void 0 : e.status) === 404 &&
                console.error("Page not found for like action");
          },
        });
      }
      function w() {
        let e = (0, s.NL)();
        return (0, l.D)({
          mutationFn: async (e) => {
            let t = await fetch(
              ""
                .concat("https://api.zenlove.me", "/v1/pages/")
                .concat(e.id, "/view"),
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
              }
            );
            if (!t.ok) throw Error("HTTP error! status: ".concat(t.status));
            return await t.json();
          },
          onSuccess: (t, n) => {
            e.setQueryData(["page", n.id], (e) =>
              e
                ? {
                    ...e,
                    page: { ...e.page, viewCount: t.viewCount },
                    statistics: { ...e.statistics, viewCount: t.viewCount },
                  }
                : e
            ),
              e.setQueriesData({ queryKey: ["pages"] }, (e) =>
                e
                  ? {
                      ...e,
                      items: e.items.map((e) =>
                        e.id === n.id ? { ...e, viewCount: t.viewCount } : e
                      ),
                    }
                  : e
              );
          },
          onError: (e) => {
            (null == e ? void 0 : e.status) === 429
              ? console.warn("Rate limited for view action")
              : (null == e ? void 0 : e.status) === 404 &&
                console.error("Page not found for view action");
          },
        });
      }
      ((a = i || (i = {})).draft = "draft"),
        (a.published = "published"),
        (a.expired = "expired");
    },
    7999: function (e, t, n) {
      "use strict";
      n.d(t, {
        $2: function () {
          return b;
        },
        Ac: function () {
          return f;
        },
        DA: function () {
          return h;
        },
        FF: function () {
          return w;
        },
        QJ: function () {
          return v;
        },
        VV: function () {
          return j;
        },
        WY: function () {
          return r;
        },
        Yb: function () {
          return N;
        },
        eD: function () {
          return y;
        },
        fR: function () {
          return x;
        },
        zE: function () {
          return g;
        },
      });
      var a,
        i,
        r,
        s,
        l = n(71632),
        o = n(58962),
        c = n(29827),
        d = n(21770),
        u = n(33818),
        m = n(35502);
      let p = (0, u.g)("https://api.zenlove.me");
      function g() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        return (0, l.a)({
          queryKey: ["templates", t],
          queryFn: async () => {
            let e = new URLSearchParams();
            t.page && e.append("page", String(t.page)),
              t.limit && e.append("limit", String(t.limit)),
              t.search && e.append("search", t.search),
              t.categoryId && e.append("categoryId", t.categoryId),
              t.templateType &&
                e.append("templateType", String(t.templateType)),
              void 0 !== t.isActive && e.append("isActive", String(t.isActive)),
              t.sortBy && e.append("sortBy", t.sortBy),
              t.sortOrder && e.append("sortOrder", t.sortOrder);
            let n = e.toString();
            return (await p("/v1/templates".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          enabled:
            null === (e = null == n ? void 0 : n.enabled) || void 0 === e || e,
          initialData: null == n ? void 0 : n.initialData,
          refetchOnMount: !1,
        });
      }
      function h() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        return (0, o.N)({
          queryKey: ["templates-infinite", t],
          queryFn: async (e) => {
            let { pageParam: n = 1 } = e,
              a = new URLSearchParams();
            a.append("page", String(n)),
              t.limit && a.append("limit", String(t.limit)),
              t.search && a.append("search", t.search),
              t.categoryId && a.append("categoryId", t.categoryId),
              t.templateType &&
                a.append("templateType", String(t.templateType)),
              void 0 !== t.isActive && a.append("isActive", String(t.isActive)),
              t.sortBy && a.append("sortBy", t.sortBy),
              t.sortOrder && a.append("sortOrder", t.sortOrder);
            let i = a.toString();
            return (await p("/v1/templates".concat(i ? "?".concat(i) : "")))
              .data;
          },
          getNextPageParam: (e, t) => {
            var n;
            let a = t.length;
            return a <
              ((null === (n = e.meta) || void 0 === n
                ? void 0
                : n.totalPages) || 1)
              ? a + 1
              : void 0;
          },
          initialPageParam: 1,
          staleTime: 3e5,
          gcTime: 6e5,
          enabled:
            null === (e = null == n ? void 0 : n.enabled) || void 0 === e || e,
          refetchOnMount: !1,
        });
      }
      function v() {
        let e = (0, c.NL)(),
          t = (0, m.xe)(),
          n = (0, m.$T)();
        return (0, d.D)({
          mutationFn: async (e) => {
            var a, i, r, s;
            let { templateId: l, data: o } = e,
              [c, d] = await Promise.all([t.refetch(), n.refetch()]),
              u =
                null === (i = c.data) || void 0 === i
                  ? void 0
                  : null === (a = i.limits) || void 0 === a
                  ? void 0
                  : a.maxPages,
              m =
                null !==
                  (s =
                    null === (r = d.data) || void 0 === r
                      ? void 0
                      : r.pagesCount) && void 0 !== s
                  ? s
                  : 0;
            if ("number" == typeof u && m >= u)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await p("/v1/templates/".concat(l, "/use"), {
                method: "POST",
                body: JSON.stringify(o),
              })
            ).data;
          },
          onSuccess: async (a, i) => {
            e.invalidateQueries({ queryKey: ["templates"] }),
              e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), n.refetch()]),
              e.setQueryData(["page", a.pageId], {
                page: null,
                statistics: null,
              });
          },
          onError: (e) => {
            var t, n, a;
            if (
              (null == e
                ? void 0
                : null === (t = e.message) || void 0 === t
                ? void 0
                : t.includes("Template not found")) ||
              (null == e ? void 0 : e.status) === 404
            )
              throw Error("Template kh\xf4ng tồn tại hoặc đ\xe3 bị x\xf3a");
            if (
              (null == e
                ? void 0
                : null === (n = e.message) || void 0 === n
                ? void 0
                : n.includes(
                    "You do not have permission to use this template type"
                  )) ||
              (null == e ? void 0 : e.status) === 403
            )
              throw Error(
                "Bạn kh\xf4ng c\xf3 quyền sử dụng template n\xe0y. Vui l\xf2ng n\xe2ng cấp g\xf3i để sử dụng template n\xe2ng cao."
              );
            if (
              (null == e
                ? void 0
                : null === (a = e.message) || void 0 === a
                ? void 0
                : a.includes("Page expired")) ||
              (null == e ? void 0 : e.status) === 400
            )
              throw Error(
                "Thiệp của bạn đ\xe3 hết hạn, vui l\xf2ng n\xe2ng cấp g\xf3i để tiếp tục sử dụng"
              );
          },
        });
      }
      function f() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, l.a)({
          queryKey: ["admin-templates", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.search && t.append("search", e.search),
              e.categoryId && t.append("categoryId", e.categoryId),
              e.templateType &&
                t.append("templateType", String(e.templateType)),
              void 0 !== e.isActive && t.append("isActive", String(e.isActive)),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (
              await p("/v1/admin/templates".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function x(e) {
        return (0, l.a)({
          queryKey: ["admin-template", e],
          queryFn: async () => (await p("/v1/admin/templates/".concat(e))).data,
          enabled: !!e,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function y() {
        let e = (0, c.NL)();
        return (0, d.D)({
          mutationFn: async (e) =>
            (
              await p("/v1/admin/templates", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-templates"] }),
              e.invalidateQueries({ queryKey: ["templates"] });
          },
        });
      }
      function w() {
        let e = (0, c.NL)();
        return (0, d.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await p("/v1/admin/templates/".concat(t), {
                method: "PUT",
                body: JSON.stringify(n),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.setQueryData(["admin-template", n.id], t),
              e.setQueriesData({ queryKey: ["admin-templates"] }, (e) =>
                e
                  ? {
                      ...e,
                      items: e.items.map((e) =>
                        e.id === n.id ? { ...e, ...t } : e
                      ),
                    }
                  : e
              ),
              t.isActive &&
                e.setQueriesData({ queryKey: ["templates"] }, (e) =>
                  e
                    ? {
                        ...e,
                        items: e.items.map((e) =>
                          e.id === n.id ? { ...e, ...t } : e
                        ),
                      }
                    : e
                ),
              e.invalidateQueries({ queryKey: ["templates"] });
          },
        });
      }
      function b() {
        let e = (0, c.NL)();
        return (0, d.D)({
          mutationFn: async (e) => (
            await p("/v1/admin/templates/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: (t) => {
            e.invalidateQueries({ queryKey: ["admin-templates"] }),
              e.invalidateQueries({ queryKey: ["templates"] }),
              e.removeQueries({ queryKey: ["admin-template", t] }),
              e.removeQueries({ queryKey: ["template", t] });
          },
        });
      }
      function j() {
        let e = (0, c.NL)();
        return (0, d.D)({
          mutationFn: async (e) => {
            let t = new FormData();
            return (
              t.append("file", e.file),
              t.append("uploadType", e.uploadType),
              t.append("templateId", e.templateId),
              (
                await p("/v1/admin/templates/upload", {
                  method: "POST",
                  body: t,
                })
              ).data
            );
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({ queryKey: ["admin-templates"] }),
              e.invalidateQueries({ queryKey: ["templates"] }),
              e.invalidateQueries({
                queryKey: ["admin-template", n.templateId],
              }),
              e.invalidateQueries({ queryKey: ["template", n.templateId] });
          },
        });
      }
      function N(e) {
        switch (e) {
          case "free":
          default:
            return "Miễn ph\xed";
          case "basic":
            return "Cơ bản";
          case "premium":
            return "Cao cấp";
        }
      }
      ((a = r || (r = {})).free = "free"),
        (a.basic = "basic"),
        (a.premium = "premium"),
        (a.hot = "hot"),
        (a.new = "new"),
        ((i = s || (s = {})).free = "FREE"),
        (i.basic = "BASIC"),
        (i.premium = "PREMIUM"),
        (i.hot = "HOT"),
        (i.new = "NEW");
    },
    33818: function (e, t, n) {
      "use strict";
      let a, i;
      n.d(t, {
        g: function () {
          return d;
        },
      });
      var r = n(83464),
        s = n(82957).Buffer;
      let l = null;
      function o(e) {
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
        return a && i && Date.now() + 3e5 < i
          ? a
          : (l ||
              (l = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    r = null == t ? void 0 : t.accessToken;
                  return (a = r), (i = o(r) || Date.now() + 36e5), r;
                } catch (e) {
                  (a = void 0), (i = void 0);
                  return;
                } finally {
                  l = null;
                }
              })()),
            l);
      }
      function d(e) {
        let t = (function (e) {
          let t = r.Z.create({ baseURL: e, timeout: 3e4 });
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
                var r, s, l;
                let c = e.config;
                if (
                  (null === (r = e.response) || void 0 === r
                    ? void 0
                    : r.status) === 401 &&
                  !c._retry
                ) {
                  c._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      r = await e.getSession(),
                      s = null == r ? void 0 : r.accessToken,
                      l = null == r ? void 0 : r.error;
                    if (s && !l && s !== a)
                      return (
                        (a = s),
                        (i = o(s) || Date.now() + 3e5),
                        c.headers &&
                          (c.headers.Authorization = "Bearer ".concat(s)),
                        t.request(c)
                      );
                    (a = void 0),
                      (i = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (l = e.response) || void 0 === l
                      ? void 0
                      : null === (s = l.data) || void 0 === s
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
          return r;
        },
        Yb: function () {
          return h;
        },
        aW: function () {
          return v;
        },
        cn: function () {
          return g;
        },
        sZ: function () {
          return f;
        },
        ud: function () {
          return p;
        },
      });
      var a = n(61994),
        i = n(53335);
      n(25566);
      let r = () => "https://zenlove.me",
        s = new Set(["crop", "width", "height", "fit", "format", "quality"]);
      function l(e) {
        let t = e.split(",");
        return (
          4 === t.length &&
          t.every((e) => {
            let t = Number(e);
            return Number.isFinite(t) && Number.isInteger(t) && t >= 0;
          })
        );
      }
      function o(e) {
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
          n = "https://cdn.zenlove.me";
        n || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [a, i] = e.split("?"),
          r = new URLSearchParams(null != i ? i : ""),
          m = new URLSearchParams();
        for (let [e, t] of r.entries()) {
          if (!s.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let n = !0;
          switch (e) {
            case "crop":
              (n = l(t)) ||
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
              (n = o(t)) ||
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
        let p = m.toString();
        return ""
          .concat(n.replace(/\/+$/, ""), "/")
          .concat(a)
          .concat(p ? "?".concat(p) : "");
      }
      function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, a] = e.split("?"),
          i = new URLSearchParams(null != a ? a : ""),
          r = new URLSearchParams();
        for (let [e, t] of i.entries()) {
          if (!s.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let n = !0;
          switch (e) {
            case "crop":
              (n = l(t)) ||
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
              (n = o(t)) ||
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
          n && r.set(e, t);
        }
        t && (r.set("format", "webp"), r.set("quality", "80"));
        let m = r.toString();
        return ""
          .concat("https://cdn-resource.zenlove.me".replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(m ? "?".concat(m) : "");
      }
      function g() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, i.m6)((0, a.W)(t));
      }
      let h = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return m(e, t);
        },
        v = {
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
      function f(e) {
        let t = e.getFullYear(),
          n = e.getMonth(),
          a = e.getDate(),
          i = new Date(t, n, 1).getDay(),
          r = 0 === i ? 6 : i - 1,
          s = new Date(t, n + 1, 0).getDate(),
          l = [];
        for (let e = 0; e < r; e++) l.push({ type: "empty" });
        for (let e = 1; e <= s; e++) {
          let t = e === a;
          l.push({ type: "day", date: e, isSelected: t });
        }
        return l;
      }
    },
    11266: function (e, t, n) {
      "use strict";
      function a(e, t) {
        if (!e) return 0;
        let n = e[t.startsWith("limit_") ? t : "limit_".concat(t)];
        return "number" == typeof n ? n : parseInt(String(n), 10) || 0;
      }
      function i(e, t) {
        if (!e) return !1;
        let n = e[t.startsWith("enable_") ? t : "enable_".concat(t)];
        return !0 === n || "true" === n;
      }
      function r(e) {
        if (!e) return 6;
        let t = e.config_duration_months;
        return "number" == typeof t ? t : parseInt(String(t), 10) || 6;
      }
      function s(e) {
        if (!e) return "free";
        let t = String(e.config_template_access || "free").toLowerCase();
        return "premium" === t ? "premium" : "basic" === t ? "basic" : "free";
      }
      function l(e) {
        return e.startsWith("limit_")
          ? "limit"
          : e.startsWith("enable_")
          ? "enable"
          : e.startsWith("config_")
          ? "config"
          : "unknown";
      }
      n.d(t, {
        Ql: function () {
          return s;
        },
        _k: function () {
          return i;
        },
        iX: function () {
          return a;
        },
        sD: function () {
          return l;
        },
        zz: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(
      0,
      [
        9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039, 6815,
        9816, 8640, 5831, 5827, 5909, 639, 9486, 4170, 3335, 9646, 4178, 6931,
        2820, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 78435));
      }
    ),
      (_N_E = e.O());
  },
]);
