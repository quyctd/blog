(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3922],
  {
    54160: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 71693));
    },
    71693: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return K;
        },
      });
      var a = n(57437),
        r = n(2265),
        s = n(34029),
        i = n(53743),
        c = n(51653),
        l = n(50742),
        o = n(48651),
        d = n(29271),
        u = n(55824),
        h = n(96931),
        g = n(45235),
        m = n(60121),
        x = n(96397),
        p = n(40619);
      function f(e) {
        let { totalSignatures: t, latestSignature: n, loading: r = !1 } = e;
        return (0, a.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [
            (0, a.jsx)(h.Z, {
              loading: r,
              className:
                "!bg-gradient-to-r !from-blue-500 !to-blue-600 !text-white !border-0 !shadow-lg",
              children: (0, a.jsx)(g.Z, {
                title: (0, a.jsxs)("div", {
                  className: "flex items-center space-x-1 text-blue-100",
                  children: [
                    (0, a.jsx)(m.Z, { weight: "BoldDuotone", size: 24 }),
                    (0, a.jsx)("span", { children: "Tổng chữ k\xfd" }),
                  ],
                }),
                value: t,
                styles: {
                  content: {
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  },
                },
                suffix: (0, a.jsx)("span", {
                  className: "text-blue-100 text-sm",
                  children: "chữ k\xfd",
                }),
              }),
            }),
            (0, a.jsx)(h.Z, {
              loading: r,
              className:
                "!bg-gradient-to-r !from-green-500 !to-green-600 !text-white !border-0 !shadow-lg",
              children: (0, a.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex items-center space-x-1 text-green-100",
                    children: [
                      (0, a.jsx)(x.Z, { weight: "BoldDuotone", size: 24 }),
                      (0, a.jsx)("span", { children: "Chữ k\xfd mới nhất" }),
                    ],
                  }),
                  n && n.createdAt
                    ? (0, a.jsxs)("div", {
                        className: "space-y-1",
                        children: [
                          (0, a.jsx)("div", {
                            className: "text-white text-lg font-bold",
                            children: (0, u.kh)(n.createdAt),
                          }),
                          (0, a.jsxs)("div", {
                            className: "text-green-100 text-sm",
                            children: [
                              "Vị tr\xed: X: ",
                              parseFloat(n.posX).toFixed(1),
                              ", Y:",
                              " ",
                              parseFloat(n.posY).toFixed(1),
                            ],
                          }),
                          n.pageName &&
                            (0, a.jsx)("div", {
                              className: "text-green-100 text-xs",
                              children: n.pageName,
                            }),
                        ],
                      })
                    : (0, a.jsx)("div", {
                        className: "text-green-100 text-sm",
                        children: "Chưa c\xf3 chữ k\xfd n\xe0o",
                      }),
                ],
              }),
            }),
            (0, a.jsx)(h.Z, {
              loading: r,
              className:
                "!bg-gradient-to-r !from-purple-500 !to-purple-600 !text-white !border-0 !shadow-lg",
              children: (0, a.jsx)(g.Z, {
                title: (0, a.jsxs)("div", {
                  className: "flex items-center space-x-1 text-purple-100",
                  children: [
                    (0, a.jsx)(p.Z, { weight: "BoldDuotone", size: 24 }),
                    (0, a.jsx)("span", { children: "Thiệp nhận chữ k\xfd" }),
                  ],
                }),
                value: n ? 1 : 0,
                styles: {
                  content: {
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  },
                },
                suffix: (0, a.jsx)("span", {
                  className: "text-purple-100 text-sm",
                  children: "thiệp",
                }),
              }),
            }),
          ],
        });
      }
      var v = n(27648),
        y = n(6417),
        w = n(24783),
        j = n(89970),
        b = n(867),
        N = n(4156),
        k = n(2297),
        S = n(73630),
        Z = n(71096),
        D = n.n(Z),
        T = n(36746),
        C = n(25892),
        E = n(59646),
        I = n(34577);
      function L(e) {
        let { signature: t, selected: n, onSelect: r, onDelete: s } = e,
          i = (0, S.ud)(t.imageKey);
        return (0, a.jsxs)("div", {
          className: "bg-white rounded-xl border border-gray-100 p-3 shadow-sm",
          children: [
            (0, a.jsxs)("div", {
              className: "flex items-start gap-3",
              children: [
                (0, a.jsx)(N.Z, {
                  checked: n,
                  onChange: (e) => r(t.id, e.target.checked),
                  className: "mt-1",
                }),
                (0, a.jsx)("div", {
                  className: "flex-shrink-0",
                  children: (0, a.jsx)(y.Z, {
                    src: i,
                    alt: "Signature",
                    width: 60,
                    height: 45,
                    className:
                      "!object-contain !rounded !border !border-gray-200",
                    fallback: "/default-avatar.png",
                    preview: { mask: "Xem" },
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "flex-1 min-w-0",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center justify-between gap-2",
                    children: [
                      t.pageName && t.pageId
                        ? (0, a.jsxs)(v.default, {
                            href: "/dashboard/pages/".concat(t.pageId),
                            className:
                              "flex items-center text-sm text-blue-500 hover:text-blue-600 truncate",
                            children: [
                              (0, a.jsx)(T.Z, {
                                weight: "LineDuotone",
                                size: 14,
                                className: "mr-1 flex-shrink-0",
                              }),
                              (0, a.jsx)("span", {
                                className: "truncate",
                                children: t.pageName,
                              }),
                            ],
                          })
                        : (0, a.jsx)("span", {
                            className: "text-gray-400 text-sm",
                            children: "Kh\xf4ng x\xe1c định",
                          }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center text-xs text-gray-400 flex-shrink-0",
                        children: [
                          (0, a.jsx)(x.Z, {
                            weight: "LineDuotone",
                            size: 12,
                            className: "mr-1",
                          }),
                          (0, a.jsx)("span", {
                            children: t.createdAt
                              ? (0, u.kh)(t.createdAt)
                              : "N/A",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className:
                "flex items-center justify-end mt-1 pt-2 border-t border-gray-50",
              children: (0, a.jsx)(b.Z, {
                title: "X\xe1c nhận x\xf3a",
                description:
                  "Bạn c\xf3 chắc chắn muốn x\xf3a chữ k\xfd n\xe0y?",
                onConfirm: () => (null == s ? void 0 : s(t)),
                okText: "X\xf3a",
                cancelText: "Hủy",
                children: (0, a.jsx)(l.ZP, {
                  type: "text",
                  danger: !0,
                  size: "small",
                  icon: (0, a.jsx)(C.Z, { weight: "BoldDuotone", size: 18 }),
                  className:
                    "!text-red-500 hover:!text-red-600 hover:!bg-red-50",
                }),
              }),
            }),
          ],
        });
      }
      function z(e) {
        let { data: t, loading: n = !1, onDelete: s, onBulkDelete: i } = e,
          c = (0, I.a)("(max-width: 768px)"),
          [d, h] = (0, r.useState)([]),
          g = [
            {
              title: "Chữ k\xfd",
              dataIndex: "imageKey",
              key: "imageKey",
              width: 150,
              render: (e) => {
                let t = (0, S.ud)(e);
                return (0, a.jsx)("div", {
                  className: "flex items-center justify-center",
                  children: (0, a.jsx)(y.Z, {
                    src: t,
                    alt: "Signature",
                    width: 80,
                    height: 60,
                    className: "object-contain rounded border border-gray-200",
                    fallback: "/default-avatar.png",
                    preview: { mask: "Xem ảnh" },
                  }),
                });
              },
            },
            {
              title: "Thiệp",
              dataIndex: "pageName",
              key: "pageName",
              width: 200,
              render: (e, t) =>
                (0, a.jsx)("div", {
                  className: "space-y-1",
                  children:
                    e && t.pageId
                      ? (0, a.jsxs)(v.default, {
                          href: "/dashboard/pages/".concat(t.pageId),
                          className:
                            "block hover:bg-gray-50 p-2 rounded-md transition-colors",
                          children: [
                            (0, a.jsxs)("div", {
                              className:
                                "flex items-center text-sm text-gray-600 hover:text-blue-600",
                              children: [
                                (0, a.jsx)(T.Z, {
                                  weight: "LineDuotone",
                                  size: 16,
                                  className: "mr-1",
                                }),
                                (0, a.jsx)("span", {
                                  className: "truncate",
                                  title: e,
                                  children: e,
                                }),
                              ],
                            }),
                            (0, a.jsxs)("div", {
                              className: "text-xs text-gray-400 font-mono",
                              children: ["ID: ", t.pageId.slice(0, 8), "..."],
                            }),
                          ],
                        })
                      : (0, a.jsx)("div", {
                          className: "p-2",
                          children: (0, a.jsx)("span", {
                            className: "text-gray-400 text-sm",
                            children: "Kh\xf4ng x\xe1c định",
                          }),
                        }),
                }),
            },
            {
              title: "Vị tr\xed",
              key: "position",
              width: 150,
              render: (e, t) =>
                (0, a.jsx)("div", {
                  className: "space-y-1",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center text-sm text-gray-600",
                    children: [
                      (0, a.jsx)(E.Icon, {
                        icon: "iconoir:position",
                        width: 16,
                        height: 16,
                        className: "mr-1",
                      }),
                      (0, a.jsxs)("span", {
                        children: [
                          "X: ",
                          parseFloat(t.posX).toFixed(2),
                          ", Y:",
                          " ",
                          parseFloat(t.posY).toFixed(2),
                        ],
                      }),
                    ],
                  }),
                }),
            },
            {
              title: "Thời gian",
              dataIndex: "createdAt",
              key: "createdAt",
              width: 150,
              render: (e) =>
                e
                  ? (0, a.jsxs)("div", {
                      className: "space-y-1",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex items-center text-sm text-gray-600",
                          children: [
                            (0, a.jsx)(x.Z, {
                              weight: "LineDuotone",
                              size: 16,
                              className: "mr-1",
                            }),
                            (0, a.jsx)("span", { children: (0, u.kh)(e) }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: "text-xs text-gray-400",
                          children: D()(e).format("DD/MM/YYYY HH:mm"),
                        }),
                      ],
                    })
                  : (0, a.jsx)("span", {
                      className: "text-gray-400",
                      children: "Kh\xf4ng x\xe1c định",
                    }),
            },
            {
              title: "H\xe0nh động",
              key: "actions",
              width: 120,
              render: (e, t) =>
                (0, a.jsx)(w.Z, {
                  size: "small",
                  children: (0, a.jsx)(j.Z, {
                    title: "X\xf3a chữ k\xfd",
                    children: (0, a.jsx)(b.Z, {
                      title: "X\xe1c nhận x\xf3a",
                      description:
                        "Bạn c\xf3 chắc chắn muốn x\xf3a chữ k\xfd n\xe0y?",
                      onConfirm: () => (null == s ? void 0 : s(t)),
                      okText: "X\xf3a",
                      cancelText: "Hủy",
                      children: (0, a.jsx)(l.ZP, {
                        type: "text",
                        danger: !0,
                        icon: (0, a.jsx)(C.Z, {
                          weight: "BoldDuotone",
                          size: 24,
                        }),
                        size: "small",
                        className:
                          "!text-red-500 hover:!text-red-600 hover:!bg-red-50",
                      }),
                    }),
                  }),
                }),
            },
          ],
          p = () => {
            d.length > 0 && i && (i(d), h([]));
          },
          f = (e, t) => {
            h(t ? [...d, e] : d.filter((t) => t !== e));
          },
          Z = (e) => {
            e ? h(t.map((e) => e.id)) : h([]);
          },
          z = () =>
            0 === d.length
              ? null
              : (0, a.jsx)("div", {
                  className:
                    "mb-4 p-3 bg-white border border-gray-200 rounded-lg",
                  children: (0, a.jsxs)("div", {
                    className:
                      "flex items-center justify-between flex-wrap gap-2",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "text-gray-700 text-sm",
                        children: ["Đ\xe3 chọn ", d.length, " chữ k\xfd"],
                      }),
                      (0, a.jsxs)(w.Z, {
                        size: "small",
                        children: [
                          (0, a.jsx)(l.ZP, {
                            danger: !0,
                            size: "small",
                            onClick: p,
                            disabled: !i,
                            className: "rounded-md",
                            children: "X\xf3a đ\xe3 chọn",
                          }),
                          (0, a.jsx)(l.ZP, {
                            size: "small",
                            onClick: () => h([]),
                            className: "rounded-md",
                            children: "Bỏ chọn",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
          q = () =>
            (0, a.jsxs)("div", {
              className: "text-center py-12",
              children: [
                (0, a.jsx)(m.Z, {
                  weight: "LineDuotone",
                  size: 64,
                  className: "mx-auto text-gray-300 mb-4",
                }),
                (0, a.jsx)("h4", {
                  className: "!text-gray-500 !mb-2",
                  children: "Kh\xf4ng c\xf3 chữ k\xfd n\xe0o",
                }),
                (0, a.jsx)("p", {
                  className: "text-gray-400",
                  children: "Bạn chưa nhận được chữ k\xfd n\xe0o.",
                }),
              ],
            });
        return c
          ? (0, a.jsxs)("div", {
              className: "space-y-3",
              children: [
                (0, a.jsxs)("div", {
                  className: "flex items-center justify-between p-2",
                  children: [
                    (0, a.jsx)(N.Z, {
                      checked: t.length > 0 && d.length === t.length,
                      indeterminate: d.length > 0 && d.length < t.length,
                      onChange: (e) => Z(e.target.checked),
                      children: (0, a.jsx)("span", {
                        className: "text-gray-600 text-sm",
                        children:
                          d.length > 0
                            ? "Đ\xe3 chọn "
                                .concat(d.length, "/")
                                .concat(t.length)
                            : "Chọn tất cả",
                      }),
                    }),
                    (0, a.jsxs)("span", {
                      className: "text-gray-500 text-sm",
                      children: [t.length, " chữ k\xfd"],
                    }),
                  ],
                }),
                z(),
                n
                  ? (0, a.jsx)("div", {
                      className: "flex justify-center py-12",
                      children: (0, a.jsx)(o.Z, { size: "large" }),
                    })
                  : 0 === t.length
                  ? q()
                  : (0, a.jsx)("div", {
                      className: "space-y-3",
                      children: t.map((e) =>
                        (0, a.jsx)(
                          L,
                          {
                            signature: e,
                            selected: d.includes(e.id),
                            onSelect: f,
                            onDelete: s,
                          },
                          e.id
                        )
                      ),
                    }),
              ],
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                z(),
                (0, a.jsx)(k.Z, {
                  columns: g,
                  dataSource: t,
                  loading: n,
                  rowKey: "id",
                  pagination: !1,
                  scroll: { x: 1e3 },
                  className: "!border-0 !shadow-none",
                  rowSelection: {
                    selectedRowKeys: d,
                    onChange: (e) => {
                      h(e);
                    },
                  },
                  locale: { emptyText: q() },
                }),
              ],
            });
      }
      var q = n(35174);
      function B(e) {
        let {
            current: t,
            total: n,
            pageSize: r,
            loading: s = !1,
            onPageChange: i,
          } = e,
          c = (0, I.a)("(max-width: 768px)");
        return 0 === n
          ? null
          : (0, a.jsx)(q.Z, {
              current: t,
              total: n,
              pageSize: r,
              loading: s,
              onPageChange: i,
              showSizeChanger: !c,
              showQuickJumper: !1,
              showTotal: !c,
              showItemCount: !c,
              itemName: "chữ k\xfd",
              className: "user-signatures-pagination",
            });
      }
      var P = n(71823);
      function K() {
        var e;
        let [t, n] = (0, r.useState)({
            page: 1,
            limit: 10,
            sortBy: "createdAt",
            sortOrder: "desc",
          }),
          { data: h, isLoading: g, error: x, refetch: p } = (0, u.ju)(t),
          v = (0, u.pG)(),
          y = (0, r.useCallback)((e, t) => {
            n((n) => ({ ...n, page: e, limit: t }));
          }, []),
          w = (0, r.useCallback)(
            (e) => {
              v.mutate(e.id, {
                onSuccess: () => {
                  s.ZP.success("Chữ k\xfd đ\xe3 được x\xf3a th\xe0nh c\xf4ng!"),
                    p();
                },
                onError: (e) => {
                  console.error("Delete signature error:", e),
                    s.ZP.error("C\xf3 lỗi xảy ra khi x\xf3a chữ k\xfd");
                },
              });
            },
            [v, p]
          ),
          j = (0, r.useCallback)(
            (e) => {
              i.default.confirm({
                title: "X\xe1c nhận x\xf3a nhiều chữ k\xfd",
                icon: (0, a.jsx)(d.Z, {}),
                content: (0, a.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, a.jsxs)("p", {
                      children: [
                        "Bạn c\xf3 chắc chắn muốn x\xf3a ",
                        (0, a.jsx)("strong", { children: e.length }),
                        " ",
                        "chữ k\xfd?",
                      ],
                    }),
                    (0, a.jsx)(c.Z, {
                      message: "Cảnh b\xe1o",
                      description:
                        "H\xe0nh động n\xe0y sẽ x\xf3a c\xe1c chữ k\xfd khỏi hệ thống. Kh\xf4ng thể ho\xe0n t\xe1c!",
                      type: "warning",
                      showIcon: !0,
                    }),
                  ],
                }),
                okText: "X\xf3a",
                okType: "danger",
                cancelText: "Hủy",
                onOk: async () => {
                  try {
                    for (let t of e) await v.mutateAsync(t);
                    s.ZP.success(
                      "Đ\xe3 x\xf3a th\xe0nh c\xf4ng ".concat(
                        e.length,
                        " chữ k\xfd!"
                      )
                    ),
                      p();
                  } catch (e) {
                    console.error("Bulk delete error:", e),
                      s.ZP.error("C\xf3 lỗi xảy ra khi x\xf3a chữ k\xfd");
                  }
                },
              });
            },
            [v, p]
          ),
          b = (0, r.useCallback)(() => {
            p();
          }, [p]);
        return x
          ? (0, a.jsx)("div", {
              className: "p-6",
              children: (0, a.jsx)(c.Z, {
                message: "Lỗi tải dữ liệu",
                description:
                  "Kh\xf4ng thể tải dữ liệu chữ k\xfd. Vui l\xf2ng thử lại sau.",
                type: "error",
                showIcon: !0,
                action: (0, a.jsx)(l.ZP, {
                  size: "small",
                  danger: !0,
                  onClick: () => window.location.reload(),
                  children: "Tải lại trang",
                }),
              }),
            })
          : (0, a.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row gap-2 justify-between items-start",
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsxs)("h1", {
                          className:
                            "text-2xl text-gray-900 mb-2 flex items-center gap-1 mt-0",
                          children: [
                            (0, a.jsx)(m.Z, {
                              weight: "BoldDuotone",
                              color: "#ff4874",
                              size: 24,
                            }),
                            "Chữ k\xfd kh\xe1ch mời",
                          ],
                        }),
                        (0, a.jsx)("p", {
                          className: "text-gray-600 m-0",
                          children:
                            "Quản l\xfd v\xe0 xem tất cả chữ k\xfd kh\xe1ch mời từ c\xe1c thiệp của bạn",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className: "flex items-center space-x-3",
                      children: (0, a.jsx)(l.ZP, {
                        icon: (0, a.jsx)(P.Z, { weight: "BoldDuotone" }),
                        onClick: b,
                        loading: g,
                        children: "L\xe0m mới",
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)(f, {
                  totalSignatures: (null == h ? void 0 : h.meta.total) || 0,
                  latestSignature:
                    null == h
                      ? void 0
                      : null === (e = h.items) || void 0 === e
                      ? void 0
                      : e[0],
                  loading: g,
                }),
                (0, a.jsxs)("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-gray-200",
                  children: [
                    (0, a.jsx)(o.Z, {
                      spinning: g,
                      children: (0, a.jsx)(z, {
                        data: (null == h ? void 0 : h.items) || [],
                        loading: g,
                        onDelete: w,
                        onBulkDelete: j,
                      }),
                    }),
                    h &&
                      (0, a.jsx)(B, {
                        current: h.meta.page,
                        total: h.meta.total,
                        pageSize: h.meta.limit,
                        loading: g,
                        onPageChange: y,
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
          return c;
        },
      });
      var a = n(57437);
      n(2265);
      var r = n(39486),
        s = n(64170);
      let { Text: i } = r.default;
      function c(e) {
        let {
          current: t,
          total: n,
          pageSize: r,
          loading: c = !1,
          onPageChange: l,
          showSizeChanger: o = !0,
          showQuickJumper: d = !1,
          showTotal: u = !0,
          showItemCount: h = !0,
          className: g = "",
          itemName: m = "mục",
        } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow ".concat(
              g
            ),
          children: [
            h &&
              (0, a.jsx)("div", {
                className: "flex items-center space-x-4",
                children: (0, a.jsxs)(i, {
                  className: "text-gray-600",
                  children: ["Tổng ", n, " ", m],
                }),
              }),
            (0, a.jsx)("div", {
              className: "flex items-center space-x-4",
              children: (0, a.jsx)(s.Z, {
                current: t,
                total: n,
                pageSize: r,
                showSizeChanger: o,
                showQuickJumper: d,
                showTotal: u
                  ? (e, t) =>
                      "".concat(t[0], "-").concat(t[1], " của ").concat(e)
                  : void 0,
                onChange: (e, t) => {
                  l(e, t || r);
                },
                disabled: c,
                className: "pagination-component",
              }),
            }),
          ],
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
    55824: function (e, t, n) {
      "use strict";
      n.d(t, {
        Aw: function () {
          return c;
        },
        EC: function () {
          return g;
        },
        IL: function () {
          return h;
        },
        dM: function () {
          return l;
        },
        ju: function () {
          return d;
        },
        kh: function () {
          return m;
        },
        oY: function () {
          return o;
        },
        pG: function () {
          return u;
        },
      });
      var a = n(29827),
        r = n(21770),
        s = n(71632);
      let i = (0, n(33818).g)("https://api.zenlove.me");
      class c extends Error {
        constructor(e, t) {
          super(e), (this.name = "RateLimitError"), (this.remainingTime = t);
        }
      }
      function l() {
        let e = (0, a.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let t = e.signature.replace(/^data:image\/\w+;base64,/, "");
            try {
              return await i("/v1/public/signatures", {
                method: "POST",
                body: JSON.stringify({ ...e, signature: t }),
              });
            } catch (e) {
              var n, a, r, s, l;
              if (
                (null == e
                  ? void 0
                  : null === (n = e.response) || void 0 === n
                  ? void 0
                  : n.status) === 429 ||
                (null == e
                  ? void 0
                  : null === (a = e.message) || void 0 === a
                  ? void 0
                  : a.includes("Qu\xe1 nhiều y\xeau cầu")) ||
                (null == e
                  ? void 0
                  : null === (r = e.message) || void 0 === r
                  ? void 0
                  : r.includes("Too Many Requests"))
              ) {
                let t =
                  (null == e
                    ? void 0
                    : null === (l = e.response) || void 0 === l
                    ? void 0
                    : null === (s = l.data) || void 0 === s
                    ? void 0
                    : s.remainingTime) ||
                  (function (e) {
                    let t = e.match(/sau\s+(\d+)\s+giây/i);
                    if (t && t[1]) return parseInt(t[1], 10);
                  })((null == e ? void 0 : e.message) || "") ||
                  60;
                throw new c(
                  "Qu\xe1 nhiều y\xeau cầu. Vui l\xf2ng thử lại sau ".concat(
                    t,
                    " gi\xe2y."
                  ),
                  t
                );
              }
              throw e;
            }
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({ queryKey: ["signatures", n.pageId] }),
              e.invalidateQueries({ queryKey: ["user-signatures"] }),
              e.invalidateQueries({ queryKey: ["user-page-signatures"] }),
              e.invalidateQueries({ queryKey: ["admin-signatures"] });
          },
          onError: (e) => {
            if (e instanceof c) throw e;
            throw Error(
              e instanceof Error
                ? e.message.includes("Trang kh\xf4ng tồn tại")
                  ? "Trang kh\xf4ng tồn tại hoặc chưa được publish"
                  : e.message.includes("Invalid base64")
                  ? "Định dạng ảnh chữ k\xfd kh\xf4ng hợp lệ"
                  : e.message
                : "C\xf3 lỗi xảy ra khi tạo chữ k\xfd"
            );
          },
        });
      }
      function o(e) {
        return (0, s.a)({
          queryKey: ["signatures", e],
          queryFn: async () => {
            if (!e) return [];
            try {
              let t = (await i("/v1/public/signatures/".concat(e))).data || [];
              return Array.isArray(t) ? t : [];
            } catch (e) {
              return console.error("Error fetching signatures:", e), [];
            }
          },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function d() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, s.a)({
          queryKey: ["user-signatures", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (
              await i("/v1/signatures/user".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function u() {
        let e = (0, a.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (await i("/v1/signatures/user/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["user-signatures"] }),
              e.invalidateQueries({ queryKey: ["user-page-signatures"] }),
              e.invalidateQueries({ queryKey: ["signatures"] }),
              e.invalidateQueries({ queryKey: ["admin-signatures"] });
          },
          onError: (e) => {
            throw Error(
              e instanceof Error
                ? e.message.includes("Kh\xf4ng c\xf3 quyền")
                  ? "Bạn kh\xf4ng c\xf3 quyền x\xf3a chữ k\xfd n\xe0y"
                  : e.message
                : "C\xf3 lỗi xảy ra khi x\xf3a chữ k\xfd"
            );
          },
        });
      }
      function h() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, s.a)({
          queryKey: ["admin-signatures", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (
              await i("/v1/admin/signatures/all".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function g() {
        let e = (0, a.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (await i("/v1/admin/signatures/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-signatures"] }),
              e.invalidateQueries({ queryKey: ["user-signatures"] }),
              e.invalidateQueries({ queryKey: ["user-page-signatures"] }),
              e.invalidateQueries({ queryKey: ["signatures"] });
          },
        });
      }
      function m(e) {
        if (!e) return "Kh\xf4ng x\xe1c định";
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
          : t.toLocaleDateString("vi-VN");
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
      var s = n(83464),
        i = n(82957).Buffer;
      let c = null;
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
                  return i.from(n, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              a = JSON.parse(n);
            if ("number" == typeof a.exp) return 1e3 * a.exp;
          } catch (e) {}
      }
      async function o() {
        return a && r && Date.now() + 3e5 < r
          ? a
          : (c ||
              (c = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    s = null == t ? void 0 : t.accessToken;
                  return (a = s), (r = l(s) || Date.now() + 36e5), s;
                } catch (e) {
                  (a = void 0), (r = void 0);
                  return;
                } finally {
                  c = null;
                }
              })()),
            c);
      }
      function d(e) {
        let t = (function (e) {
          let t = s.Z.create({ baseURL: e, timeout: 3e4 });
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
                var s, i, c;
                let o = e.config;
                if (
                  (null === (s = e.response) || void 0 === s
                    ? void 0
                    : s.status) === 401 &&
                  !o._retry
                ) {
                  o._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      s = await e.getSession(),
                      i = null == s ? void 0 : s.accessToken,
                      c = null == s ? void 0 : s.error;
                    if (i && !c && i !== a)
                      return (
                        (a = i),
                        (r = l(i) || Date.now() + 3e5),
                        o.headers &&
                          (o.headers.Authorization = "Bearer ".concat(i)),
                        t.request(o)
                      );
                    (a = void 0),
                      (r = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (c = e.response) || void 0 === c
                      ? void 0
                      : null === (i = c.data) || void 0 === i
                      ? void 0
                      : i.message) ||
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
          return h;
        },
        SV: function () {
          return s;
        },
        Yb: function () {
          return x;
        },
        aW: function () {
          return p;
        },
        cn: function () {
          return m;
        },
        sZ: function () {
          return f;
        },
        ud: function () {
          return g;
        },
      });
      var a = n(61994),
        r = n(53335);
      n(25566);
      let s = () => "https://zenlove.me",
        i = new Set(["crop", "width", "height", "fit", "format", "quality"]);
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
      function l(e) {
        return ["cover", "contain", "fill", "inside", "outside"].includes(e);
      }
      function o(e) {
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
      function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = "https://cdn.zenlove.me";
        n || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [a, r] = e.split("?"),
          s = new URLSearchParams(null != r ? r : ""),
          h = new URLSearchParams();
        for (let [e, t] of s.entries()) {
          if (!i.has(e)) {
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
              (n = o(t)) ||
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
          n && h.set(e, t);
        }
        t && (h.set("format", "webp"), h.set("quality", "80"));
        let g = h.toString();
        return ""
          .concat(n.replace(/\/+$/, ""), "/")
          .concat(a)
          .concat(g ? "?".concat(g) : "");
      }
      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, a] = e.split("?"),
          r = new URLSearchParams(null != a ? a : ""),
          s = new URLSearchParams();
        for (let [e, t] of r.entries()) {
          if (!i.has(e)) {
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
              (n = o(t)) ||
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
          n && s.set(e, t);
        }
        t && (s.set("format", "webp"), s.set("quality", "80"));
        let h = s.toString();
        return ""
          .concat("https://cdn-resource.zenlove.me".replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(h ? "?".concat(h) : "");
      }
      function m() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, r.m6)((0, a.W)(t));
      }
      let x = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return h(e, t);
        },
        p = {
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
          r = new Date(t, n, 1).getDay(),
          s = 0 === r ? 6 : r - 1,
          i = new Date(t, n + 1, 0).getDate(),
          c = [];
        for (let e = 0; e < s; e++) c.push({ type: "empty" });
        for (let e = 1; e <= i; e++) {
          let t = e === a;
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
        9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039, 6815,
        9816, 8640, 5831, 5827, 5909, 8651, 639, 9486, 5670, 4170, 2972, 8364,
        2297, 3335, 9646, 3568, 5765, 4183, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 54160));
      }
    ),
      (_N_E = e.O());
  },
]);
