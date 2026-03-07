(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3248],
  {
    61485: function (e, t, s) {
      Promise.resolve().then(s.bind(s, 99946));
    },
    99946: function (e, t, s) {
      "use strict";
      s.d(t, {
        default: function () {
          return K;
        },
      });
      var n = s(57437),
        a = s(2265),
        r = s(34029),
        i = s(53743),
        c = s(51653),
        l = s(50742),
        o = s(48651),
        d = s(29271),
        h = s(5657),
        m = s(96931),
        x = s(45235),
        u = s(54771),
        g = s(96397),
        p = s(40619);
      function f(e) {
        let { totalMessages: t, latestMessage: s, loading: a = !1 } = e;
        return (0, n.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          children: [
            (0, n.jsx)(m.Z, {
              loading: a,
              className:
                "!bg-gradient-to-r !from-blue-500 !to-blue-600 !text-white !border-0 !shadow-lg",
              children: (0, n.jsx)(x.Z, {
                title: (0, n.jsxs)("div", {
                  className: "flex items-center space-x-1 text-blue-100",
                  children: [
                    (0, n.jsx)(u.Z, { weight: "BoldDuotone", size: 24 }),
                    (0, n.jsx)("span", { children: "Tổng lời ch\xfac" }),
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
                suffix: (0, n.jsx)("span", {
                  className: "text-blue-100 text-sm",
                  children: "lời ch\xfac",
                }),
              }),
            }),
            (0, n.jsx)(m.Z, {
              loading: a,
              className:
                "!bg-gradient-to-r !from-green-500 !to-green-600 !text-white !border-0 !shadow-lg",
              children: (0, n.jsxs)("div", {
                className: "space-y-2",
                children: [
                  (0, n.jsxs)("div", {
                    className: "flex items-center space-x-1 text-green-100",
                    children: [
                      (0, n.jsx)(g.Z, { weight: "BoldDuotone", size: 24 }),
                      (0, n.jsx)("span", { children: "Lời ch\xfac mới nhất" }),
                    ],
                  }),
                  s
                    ? (0, n.jsxs)("div", {
                        className: "space-y-1",
                        children: [
                          (0, n.jsx)("div", {
                            className: "text-white text-lg font-bold",
                            children: (0, h.B_)(s.createdAt),
                          }),
                          (0, n.jsxs)("div", {
                            className: "text-green-100 text-sm truncate",
                            children: [
                              '"',
                              s.content.slice(0, 50),
                              s.content.length > 50 ? "..." : "",
                              '"',
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className: "text-green-100 text-xs",
                            children: s.nameUser || "Ẩn danh",
                          }),
                        ],
                      })
                    : (0, n.jsx)("div", {
                        className: "text-green-100 text-sm",
                        children: "Chưa c\xf3 lời ch\xfac n\xe0o",
                      }),
                ],
              }),
            }),
            (0, n.jsx)(m.Z, {
              loading: a,
              className:
                "!bg-gradient-to-r !from-purple-500 !to-purple-600 !text-white !border-0 !shadow-lg",
              children: (0, n.jsx)(x.Z, {
                title: (0, n.jsxs)("div", {
                  className: "flex items-center space-x-1 text-purple-100",
                  children: [
                    (0, n.jsx)(p.Z, { weight: "BoldDuotone", size: 24 }),
                    (0, n.jsx)("span", { children: "Thiệp nhận lời ch\xfac" }),
                  ],
                }),
                value: s ? 1 : 0,
                styles: {
                  content: {
                    color: "white",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  },
                },
                suffix: (0, n.jsx)("span", {
                  className: "text-purple-100 text-sm",
                  children: "thiệp",
                }),
              }),
            }),
          ],
        });
      }
      var y = s(27648),
        j = s(91652),
        v = s(24783),
        N = s(89970),
        w = s(867),
        b = s(4156),
        Z = s(2297),
        k = s(71096),
        S = s.n(k),
        D = s(27639),
        T = s(36746),
        z = s(25892),
        B = s(34577);
      function C(e) {
        let { message: t, selected: s, onSelect: a, onDelete: r } = e;
        return (0, n.jsxs)("div", {
          className: "bg-white rounded-xl border border-gray-100 p-3 shadow-sm",
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-start gap-3",
              children: [
                (0, n.jsx)(b.Z, {
                  checked: s,
                  onChange: (e) => a(t.id, e.target.checked),
                  className: "mt-1",
                }),
                (0, n.jsxs)("div", {
                  className: "flex-1 min-w-0",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center justify-between gap-2",
                      children: [
                        (0, n.jsx)("span", {
                          className:
                            "font-semibold text-gray-900 text-sm truncate",
                          children: t.nameUser || "Ẩn danh",
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "flex items-center text-xs text-gray-400 flex-shrink-0",
                          children: [
                            (0, n.jsx)(g.Z, {
                              weight: "LineDuotone",
                              size: 12,
                              className: "mr-1",
                            }),
                            (0, n.jsx)("span", {
                              children: (0, h.B_)(t.createdAt),
                            }),
                          ],
                        }),
                      ],
                    }),
                    t.pageName &&
                      t.pageId &&
                      (0, n.jsxs)(y.default, {
                        href: "/dashboard/pages/".concat(t.pageId),
                        className:
                          "flex items-center text-xs text-blue-500 mt-0.5 hover:text-blue-600",
                        children: [
                          (0, n.jsx)(T.Z, {
                            weight: "LineDuotone",
                            size: 12,
                            className: "mr-1",
                          }),
                          (0, n.jsx)("span", {
                            className: "truncate",
                            children: t.pageName,
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)("div", {
              className: "mt-2 ml-6 pl-3 border-l-2 border-pink-100",
              children: (0, n.jsxs)("div", {
                className: "flex items-start gap-2",
                children: [
                  (0, n.jsx)(u.Z, {
                    weight: "LineDuotone",
                    size: 14,
                    className: "text-pink-400 mt-0.5 flex-shrink-0",
                  }),
                  (0, n.jsx)("p", {
                    className:
                      "text-sm text-gray-700 m-0 line-clamp-3 break-words",
                    children: t.content,
                  }),
                ],
              }),
            }),
            (0, n.jsx)("div", {
              className:
                "flex items-center justify-end mt-1 pt-2 border-t border-gray-50",
              children: (0, n.jsx)(w.Z, {
                title: "X\xe1c nhận x\xf3a",
                description:
                  "Bạn c\xf3 chắc chắn muốn x\xf3a lời ch\xfac n\xe0y?",
                onConfirm: () => (null == r ? void 0 : r(t)),
                okText: "X\xf3a",
                cancelText: "Hủy",
                children: (0, n.jsx)(l.ZP, {
                  type: "text",
                  danger: !0,
                  size: "small",
                  icon: (0, n.jsx)(z.Z, { weight: "BoldDuotone", size: 18 }),
                  className:
                    "!text-red-500 hover:!text-red-600 hover:!bg-red-50",
                }),
              }),
            }),
          ],
        });
      }
      function L(e) {
        let { data: t, loading: s = !1, onDelete: r, onBulkDelete: i } = e,
          c = (0, B.a)("(max-width: 768px)"),
          [d, m] = (0, a.useState)([]),
          x = [
            {
              title: "Người gửi",
              dataIndex: "nameUser",
              key: "nameUser",
              width: 200,
              render: (e, t) =>
                (0, n.jsxs)("div", {
                  className: "flex items-center space-x-3",
                  children: [
                    (0, n.jsx)(j.Z, {
                      src: t.imageUser,
                      icon: (0, n.jsx)(D.Z, {
                        weight: "LineDuotone",
                        size: 22,
                      }),
                      size: 40,
                      className: "!flex-shrink-0 !border !border-gray-200",
                    }),
                    (0, n.jsxs)("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        (0, n.jsx)("div", {
                          className: "font-medium text-gray-900 truncate",
                          children: e || "Ẩn danh",
                        }),
                        t.pageName &&
                          (0, n.jsxs)("div", {
                            className: "text-sm text-gray-500 truncate",
                            children: ["Từ: ", t.pageName],
                          }),
                      ],
                    }),
                  ],
                }),
            },
            {
              title: "Nội dung lời ch\xfac",
              dataIndex: "content",
              key: "content",
              render: (e) =>
                (0, n.jsx)("div", {
                  className: "max-w-xs",
                  children: (0, n.jsxs)("div", {
                    className: "flex items-start space-x-2",
                    children: [
                      (0, n.jsx)(u.Z, {
                        weight: "LineDuotone",
                        size: 16,
                        className: "text-gray-400 mt-1 flex-shrink-0",
                      }),
                      (0, n.jsx)("div", {
                        className: "min-w-0 flex-1",
                        children: (0, n.jsx)("p", {
                          className:
                            "text-sm text-gray-900 line-clamp-3 break-words m-0",
                          children: e,
                        }),
                      }),
                    ],
                  }),
                }),
            },
            {
              title: "Thiệp",
              dataIndex: "pageName",
              key: "pageName",
              width: 150,
              render: (e, t) =>
                (0, n.jsx)("div", {
                  className: "space-y-1",
                  children:
                    e && t.pageId
                      ? (0, n.jsxs)(y.default, {
                          href: "/dashboard/pages/".concat(t.pageId),
                          className:
                            "block hover:bg-gray-50 p-2 rounded-md transition-colors",
                          children: [
                            (0, n.jsxs)("div", {
                              className:
                                "flex items-center text-sm text-gray-600 hover:text-blue-600",
                              children: [
                                (0, n.jsx)(T.Z, {
                                  weight: "LineDuotone",
                                  size: 16,
                                  className: "mr-1",
                                }),
                                (0, n.jsx)("span", {
                                  className: "truncate",
                                  title: e,
                                  children: e,
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "text-xs text-gray-400 font-mono",
                              children: ["ID: ", t.pageId.slice(0, 8), "..."],
                            }),
                          ],
                        })
                      : (0, n.jsx)("div", {
                          className: "p-2",
                          children: (0, n.jsx)("span", {
                            className: "text-gray-400 text-sm",
                            children: "Kh\xf4ng x\xe1c định",
                          }),
                        }),
                }),
            },
            {
              title: "Thời gian",
              dataIndex: "createdAt",
              key: "createdAt",
              width: 120,
              render: (e) =>
                (0, n.jsxs)("div", {
                  className: "space-y-1",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex items-center text-sm text-gray-600",
                      children: [
                        (0, n.jsx)(g.Z, {
                          weight: "LineDuotone",
                          size: 16,
                          className: "mr-1",
                        }),
                        (0, n.jsx)("span", { children: (0, h.B_)(e) }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "text-xs text-gray-400",
                      children: S()(e).format("DD/MM/YYYY HH:mm"),
                    }),
                  ],
                }),
            },
            {
              title: "H\xe0nh động",
              key: "actions",
              width: 120,
              render: (e, t) =>
                (0, n.jsx)(v.Z, {
                  size: "small",
                  children: (0, n.jsx)(N.Z, {
                    title: "X\xf3a lời ch\xfac",
                    children: (0, n.jsx)(w.Z, {
                      title: "X\xe1c nhận x\xf3a",
                      description:
                        "Bạn c\xf3 chắc chắn muốn x\xf3a lời ch\xfac n\xe0y?",
                      onConfirm: () => (null == r ? void 0 : r(t)),
                      okText: "X\xf3a",
                      cancelText: "Hủy",
                      children: (0, n.jsx)(l.ZP, {
                        type: "text",
                        danger: !0,
                        icon: (0, n.jsx)(z.Z, {
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
            d.length > 0 && i && (i(d), m([]));
          },
          f = (e, t) => {
            m(t ? [...d, e] : d.filter((t) => t !== e));
          },
          k = (e) => {
            e ? m(t.map((e) => e.id)) : m([]);
          },
          L = () =>
            0 === d.length
              ? null
              : (0, n.jsx)("div", {
                  className:
                    "mb-4 p-3 bg-white border border-gray-200 rounded-lg",
                  children: (0, n.jsxs)("div", {
                    className:
                      "flex items-center justify-between flex-wrap gap-2",
                    children: [
                      (0, n.jsxs)("span", {
                        className: "text-gray-700 text-sm",
                        children: ["Đ\xe3 chọn ", d.length, " lời ch\xfac"],
                      }),
                      (0, n.jsxs)(v.Z, {
                        size: "small",
                        children: [
                          (0, n.jsx)(l.ZP, {
                            danger: !0,
                            size: "small",
                            onClick: p,
                            disabled: !i,
                            className: "rounded-md",
                            children: "X\xf3a đ\xe3 chọn",
                          }),
                          (0, n.jsx)(l.ZP, {
                            size: "small",
                            onClick: () => m([]),
                            className: "rounded-md",
                            children: "Bỏ chọn",
                          }),
                        ],
                      }),
                    ],
                  }),
                });
        return c
          ? (0, n.jsxs)("div", {
              className: "space-y-3",
              children: [
                (0, n.jsxs)("div", {
                  className: "flex items-center justify-between p-2",
                  children: [
                    (0, n.jsx)(b.Z, {
                      checked: t.length > 0 && d.length === t.length,
                      indeterminate: d.length > 0 && d.length < t.length,
                      onChange: (e) => k(e.target.checked),
                      children: (0, n.jsx)("span", {
                        className: "text-gray-600 text-sm",
                        children:
                          d.length > 0
                            ? "Đ\xe3 chọn "
                                .concat(d.length, "/")
                                .concat(t.length)
                            : "Chọn tất cả",
                      }),
                    }),
                    (0, n.jsxs)("span", {
                      className: "text-gray-500 text-sm",
                      children: [t.length, " lời ch\xfac"],
                    }),
                  ],
                }),
                L(),
                s
                  ? (0, n.jsx)("div", {
                      className: "flex justify-center py-12",
                      children: (0, n.jsx)(o.Z, { size: "large" }),
                    })
                  : 0 === t.length
                  ? (0, n.jsxs)("div", {
                      className: "text-center py-12",
                      children: [
                        (0, n.jsx)(u.Z, {
                          weight: "LineDuotone",
                          size: 64,
                          className: "mx-auto text-gray-300 mb-4",
                        }),
                        (0, n.jsx)("h4", {
                          className: "!text-gray-500 !mb-2",
                          children: "Kh\xf4ng c\xf3 lời ch\xfac n\xe0o",
                        }),
                        (0, n.jsx)("p", {
                          className: "text-gray-400",
                          children: "Bạn chưa nhận được lời ch\xfac n\xe0o.",
                        }),
                      ],
                    })
                  : (0, n.jsx)("div", {
                      className: "space-y-3",
                      children: t.map((e) =>
                        (0, n.jsx)(
                          C,
                          {
                            message: e,
                            selected: d.includes(e.id),
                            onSelect: f,
                            onDelete: r,
                          },
                          e.id
                        )
                      ),
                    }),
              ],
            })
          : (0, n.jsxs)(n.Fragment, {
              children: [
                L(),
                (0, n.jsx)(Z.Z, {
                  columns: x,
                  dataSource: t,
                  loading: s,
                  rowKey: "id",
                  pagination: !1,
                  scroll: { x: 1e3 },
                  className: "!border-0 !shadow-none",
                  rowSelection: {
                    selectedRowKeys: d,
                    onChange: (e) => {
                      m(e);
                    },
                  },
                  locale: {
                    emptyText: (0, n.jsxs)("div", {
                      className: "text-center py-12",
                      children: [
                        (0, n.jsx)(u.Z, {
                          weight: "LineDuotone",
                          size: 64,
                          className: "mx-auto text-gray-300 mb-4",
                        }),
                        (0, n.jsx)("h4", {
                          className: "!text-gray-500 !mb-2",
                          children: "Kh\xf4ng c\xf3 lời ch\xfac n\xe0o",
                        }),
                        (0, n.jsx)("p", {
                          className: "text-gray-400",
                          children: "Bạn chưa nhận được lời ch\xfac n\xe0o.",
                        }),
                      ],
                    }),
                  },
                }),
              ],
            });
      }
      var q = s(35174);
      function P(e) {
        let {
            current: t,
            total: s,
            pageSize: a,
            loading: r = !1,
            onPageChange: i,
          } = e,
          c = (0, B.a)("(max-width: 768px)");
        return 0 === s
          ? null
          : (0, n.jsx)(q.Z, {
              current: t,
              total: s,
              pageSize: a,
              loading: r,
              onPageChange: i,
              showSizeChanger: !c,
              showQuickJumper: !1,
              showTotal: !c,
              showItemCount: !c,
              itemName: "lời ch\xfac",
              className: "user-messages-pagination",
            });
      }
      var U = s(71823);
      function K() {
        var e;
        let [t, s] = (0, a.useState)({
            page: 1,
            limit: 10,
            sortBy: "createdAt",
            sortOrder: "desc",
          }),
          { data: m, isLoading: x, error: g, refetch: p } = (0, h.DJ)(t),
          y = (0, h.RQ)();
        (0, a.useCallback)((e) => {
          s(e);
        }, []);
        let j = (0, a.useCallback)((e, t) => {
            s((s) => ({ ...s, page: e, limit: t }));
          }, []),
          v = (0, a.useCallback)(
            (e) => {
              y.mutate(e.id, {
                onSuccess: () => {
                  r.ZP.success("Tin nhắn đ\xe3 được x\xf3a th\xe0nh c\xf4ng!"),
                    p();
                },
                onError: (e) => {
                  console.error("Delete message error:", e),
                    r.ZP.error("C\xf3 lỗi xảy ra khi x\xf3a tin nhắn");
                },
              });
            },
            [y, p]
          ),
          N = (0, a.useCallback)(
            (e) => {
              i.default.confirm({
                title: "X\xe1c nhận x\xf3a nhiều tin nhắn",
                icon: (0, n.jsx)(d.Z, {}),
                content: (0, n.jsxs)("div", {
                  className: "space-y-3",
                  children: [
                    (0, n.jsxs)("p", {
                      children: [
                        "Bạn c\xf3 chắc chắn muốn x\xf3a ",
                        (0, n.jsx)("strong", { children: e.length }),
                        " tin nhắn?",
                      ],
                    }),
                    (0, n.jsx)(c.Z, {
                      message: "Cảnh b\xe1o",
                      description:
                        "H\xe0nh động n\xe0y sẽ x\xf3a c\xe1c tin nhắn khỏi hệ thống. Kh\xf4ng thể ho\xe0n t\xe1c!",
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
                    for (let t of e) await y.mutateAsync(t);
                    r.ZP.success(
                      "Đ\xe3 x\xf3a th\xe0nh c\xf4ng ".concat(
                        e.length,
                        " tin nhắn!"
                      )
                    ),
                      p();
                  } catch (e) {
                    console.error("Bulk delete error:", e),
                      r.ZP.error("C\xf3 lỗi xảy ra khi x\xf3a tin nhắn");
                  }
                },
              });
            },
            [y, p]
          ),
          w = (0, a.useCallback)(() => {
            p();
          }, [p]);
        return g
          ? (0, n.jsx)("div", {
              className: "p-6",
              children: (0, n.jsx)(c.Z, {
                message: "Lỗi tải dữ liệu",
                description:
                  "Kh\xf4ng thể tải dữ liệu tin nhắn. Vui l\xf2ng thử lại sau.",
                type: "error",
                showIcon: !0,
                action: (0, n.jsx)(l.ZP, {
                  size: "small",
                  danger: !0,
                  onClick: () => window.location.reload(),
                  children: "Tải lại trang",
                }),
              }),
            })
          : (0, n.jsxs)("div", {
              className: "space-y-6",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-col md:flex-row gap-2 justify-between items-start",
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsxs)("h1", {
                          className:
                            "text-2xl text-gray-900 mb-2 flex items-center gap-1 mt-0",
                          children: [
                            (0, n.jsx)(u.Z, {
                              weight: "BoldDuotone",
                              color: "#ff4874",
                              size: 24,
                            }),
                            "Lời Ch\xfac Của T\xf4i",
                          ],
                        }),
                        (0, n.jsx)("p", {
                          className: "text-gray-600 m-0",
                          children:
                            "Quản l\xfd v\xe0 xem tất cả lời ch\xfac từ c\xe1c thiệp của bạn",
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "flex items-center space-x-3",
                      children: (0, n.jsx)(l.ZP, {
                        icon: (0, n.jsx)(U.Z, { weight: "BoldDuotone" }),
                        onClick: w,
                        loading: x,
                        children: "L\xe0m mới",
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)(f, {
                  totalMessages: (null == m ? void 0 : m.meta.total) || 0,
                  latestMessage:
                    null == m
                      ? void 0
                      : null === (e = m.items) || void 0 === e
                      ? void 0
                      : e[0],
                  loading: x,
                }),
                (0, n.jsxs)("div", {
                  className:
                    "bg-white rounded-lg shadow-sm border border-gray-200",
                  children: [
                    (0, n.jsx)(o.Z, {
                      spinning: x,
                      children: (0, n.jsx)(L, {
                        data: (null == m ? void 0 : m.items) || [],
                        loading: x,
                        onDelete: v,
                        onBulkDelete: N,
                      }),
                    }),
                    m &&
                      (0, n.jsx)(P, {
                        current: m.meta.page,
                        total: m.meta.total,
                        pageSize: m.meta.limit,
                        loading: x,
                        onPageChange: j,
                      }),
                  ],
                }),
              ],
            });
      }
    },
    35174: function (e, t, s) {
      "use strict";
      s.d(t, {
        Z: function () {
          return c;
        },
      });
      var n = s(57437);
      s(2265);
      var a = s(39486),
        r = s(64170);
      let { Text: i } = a.default;
      function c(e) {
        let {
          current: t,
          total: s,
          pageSize: a,
          loading: c = !1,
          onPageChange: l,
          showSizeChanger: o = !0,
          showQuickJumper: d = !1,
          showTotal: h = !0,
          showItemCount: m = !0,
          className: x = "",
          itemName: u = "mục",
        } = e;
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow ".concat(
              x
            ),
          children: [
            m &&
              (0, n.jsx)("div", {
                className: "flex items-center space-x-4",
                children: (0, n.jsxs)(i, {
                  className: "text-gray-600",
                  children: ["Tổng ", s, " ", u],
                }),
              }),
            (0, n.jsx)("div", {
              className: "flex items-center space-x-4",
              children: (0, n.jsx)(r.Z, {
                current: t,
                total: s,
                pageSize: a,
                showSizeChanger: o,
                showQuickJumper: d,
                showTotal: h
                  ? (e, t) =>
                      "".concat(t[0], "-").concat(t[1], " của ").concat(e)
                  : void 0,
                onChange: (e, t) => {
                  l(e, t || a);
                },
                disabled: c,
                className: "pagination-component",
              }),
            }),
          ],
        });
      }
    },
    34577: function (e, t, s) {
      "use strict";
      s.d(t, {
        a: function () {
          return a;
        },
      });
      var n = s(2265);
      function a(e) {
        let [t, s] = n.useState(!1);
        return (
          n.useEffect(() => {
            function t(e) {
              s(e.matches);
            }
            let n = matchMedia(e);
            return (
              n.addEventListener("change", t),
              s(n.matches),
              () => n.removeEventListener("change", t)
            );
          }, [e]),
          t
        );
      }
    },
    5657: function (e, t, s) {
      "use strict";
      s.d(t, {
        B_: function () {
          return u;
        },
        DJ: function () {
          return d;
        },
        RQ: function () {
          return h;
        },
        UN: function () {
          return x;
        },
        Vu: function () {
          return l;
        },
        aW: function () {
          return o;
        },
        bL: function () {
          return m;
        },
        gu: function () {
          return c;
        },
      });
      var n = s(29827),
        a = s(21770),
        r = s(71632);
      let i = (0, s(33818).g)("https://api.zenlove.me");
      function c() {
        let e = (0, n.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            (
              await i("/v1/messages", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: (t, s) => {
            e.invalidateQueries({ queryKey: ["messages", s.pageId] }),
              e.invalidateQueries({ queryKey: ["user-messages"] });
          },
        });
      }
      function l(e) {
        return (0, r.a)({
          queryKey: ["messages", e],
          queryFn: async () =>
            e
              ? (await i("/v1/messages/".concat(e))).data
              : { success: !0, messages: [] },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function o(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, r.a)({
          queryKey: ["user-page-messages", e, t],
          queryFn: async () => {
            if (!e)
              return {
                items: [],
                meta: { total: 0, page: 1, limit: 10, totalPages: 0 },
              };
            let s = new URLSearchParams();
            t.page && s.append("page", String(t.page)),
              t.limit && s.append("limit", String(t.limit)),
              t.nameUser && s.append("nameUser", t.nameUser),
              t.search && s.append("search", t.search),
              t.sortBy && s.append("sortBy", t.sortBy),
              t.sortOrder && s.append("sortOrder", t.sortOrder);
            let n = s.toString(),
              a = "/v1/messages/user/".concat(e).concat(n ? "?".concat(n) : "");
            return (await i(a)).data;
          },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function d() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.a)({
          queryKey: ["user-messages", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.nameUser && t.append("nameUser", e.nameUser),
              e.search && t.append("search", e.search),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let s = t.toString();
            return (await i("/v1/messages/user".concat(s ? "?".concat(s) : "")))
              .data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function h() {
        let e = (0, n.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            (await i("/v1/messages/user/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["user-messages"] }),
              e.invalidateQueries({ queryKey: ["user-page-messages"] }),
              e.invalidateQueries({ queryKey: ["messages"] }),
              e.invalidateQueries({ queryKey: ["admin-messages"] });
          },
        });
      }
      function m() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, r.a)({
          queryKey: ["admin-messages", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.nameUser && t.append("nameUser", e.nameUser),
              e.search && t.append("search", e.search),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let s = t.toString();
            return (
              await i("/v1/messages/admin/all".concat(s ? "?".concat(s) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function x() {
        let e = (0, n.NL)();
        return (0, a.D)({
          mutationFn: async (e) =>
            (await i("/v1/messages/admin/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-messages"] }),
              e.invalidateQueries({ queryKey: ["user-messages"] }),
              e.invalidateQueries({ queryKey: ["user-page-messages"] }),
              e.invalidateQueries({ queryKey: ["messages"] });
          },
        });
      }
      function u(e) {
        let t = new Date(e),
          s = Math.floor((new Date().getTime() - t.getTime()) / 1e3);
        return s < 60
          ? "Vừa xong"
          : s < 3600
          ? "".concat(Math.floor(s / 60), " ph\xfat trước")
          : s < 86400
          ? "".concat(Math.floor(s / 3600), " giờ trước")
          : s < 604800
          ? "".concat(Math.floor(s / 86400), " ng\xe0y trước")
          : t.toLocaleDateString("vi-VN");
      }
    },
    33818: function (e, t, s) {
      "use strict";
      let n, a;
      s.d(t, {
        g: function () {
          return d;
        },
      });
      var r = s(83464),
        i = s(82957).Buffer;
      let c = null;
      function l(e) {
        if (e)
          try {
            let t = e.split(".");
            if (3 !== t.length) return;
            let s = (function (e) {
                try {
                  let t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    s = t + "===".slice(0, (4 - (t.length % 4)) % 4);
                  if ("function" == typeof atob) {
                    let e = atob(s),
                      t = "";
                    for (let s = 0; s < e.length; s++) {
                      let n = e.charCodeAt(s).toString(16).padStart(2, "0");
                      t += "%" + n;
                    }
                    return decodeURIComponent(t);
                  }
                  return i.from(s, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              n = JSON.parse(s);
            if ("number" == typeof n.exp) return 1e3 * n.exp;
          } catch (e) {}
      }
      async function o() {
        return n && a && Date.now() + 3e5 < a
          ? n
          : (c ||
              (c = (async () => {
                try {
                  let e = await s.e(605).then(s.t.bind(s, 80605, 23)),
                    t = await e.getSession(),
                    r = null == t ? void 0 : t.accessToken;
                  return (n = r), (a = l(r) || Date.now() + 36e5), r;
                } catch (e) {
                  (n = void 0), (a = void 0);
                  return;
                } finally {
                  c = null;
                }
              })()),
            c);
      }
      function d(e) {
        let t = (function (e) {
          let t = r.Z.create({ baseURL: e, timeout: 3e4 });
          return (
            t.interceptors.request.use(
              async (e) => {
                let t;
                if ((t = await o())) {
                  let s = e.headers;
                  s && "function" == typeof s.set
                    ? s.set("Authorization", "Bearer ".concat(t))
                    : s &&
                      "object" == typeof s &&
                      (s.Authorization = "Bearer ".concat(t));
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
                var r, i, c;
                let o = e.config;
                if (
                  (null === (r = e.response) || void 0 === r
                    ? void 0
                    : r.status) === 401 &&
                  !o._retry
                ) {
                  o._retry = !0;
                  try {
                    let e = await s.e(605).then(s.t.bind(s, 80605, 23)),
                      r = await e.getSession(),
                      i = null == r ? void 0 : r.accessToken,
                      c = null == r ? void 0 : r.error;
                    if (i && !c && i !== n)
                      return (
                        (n = i),
                        (a = l(i) || Date.now() + 3e5),
                        o.headers &&
                          (o.headers.Authorization = "Bearer ".concat(i)),
                        t.request(o)
                      );
                    (n = void 0),
                      (a = void 0),
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
        return async function (e, s) {
          try {
            let n = {
              method: (null == s ? void 0 : s.method) || "GET",
              data: null == s ? void 0 : s.body,
              headers: null == s ? void 0 : s.headers,
            };
            return (await t.request({ url: e, ...n })).data;
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
        9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039, 6815,
        9816, 8640, 5831, 5827, 5909, 8651, 639, 9486, 5670, 4170, 2972, 8364,
        2297, 1833, 5765, 2594, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 61485));
      }
    ),
      (_N_E = e.O());
  },
]);
