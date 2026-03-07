(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4240],
  {
    66394: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 60022));
    },
    60022: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return g;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(39486),
        s = n(53743),
        l = n(96931),
        o = n(1994),
        u = n(50742),
        d = n(7296),
        c = n(85839),
        m = n(59945),
        p = n(84985),
        v = n(99376);
      let { Text: y } = r.default;
      function g(e) {
        var t, n, r;
        let {} = e,
          g = (0, v.useRouter)(),
          { isViewLimitReached: f, limits: h, usage: x } = (0, p.z)(),
          [w, b] = (0, i.useState)(!1),
          [S, T] = (0, i.useState)(!1),
          N =
            null !==
              (n =
                null == h
                  ? void 0
                  : null === (t = h.limits) || void 0 === t
                  ? void 0
                  : t.maxViews) && void 0 !== n
              ? n
              : 0,
          q =
            null !== (r = null == x ? void 0 : x.totalViews) && void 0 !== r
              ? r
              : 0;
        (0, i.useEffect)(() => {
          h && x && !w && !S && f && (b(!0), T(!0));
        }, [h, x, f, w, S]);
        let j = () => {
          b(!1);
        };
        return f
          ? (0, a.jsx)(s.default, {
              title: (0, a.jsxs)("div", {
                className: "flex items-center gap-2",
                children: [
                  (0, a.jsx)(d.Z, {
                    weight: "BoldDuotone",
                    className: "w-6 h-6 text-orange-500",
                  }),
                  (0, a.jsx)("span", { children: "Hết lượt xem thiệp" }),
                ],
              }),
              open: w,
              onCancel: j,
              footer: null,
              width: 500,
              centered: !0,
              children: (0, a.jsxs)("div", {
                className: "space-y-4",
                children: [
                  (0, a.jsx)(l.Z, {
                    className: "bg-orange-50 border-orange-200",
                    children: (0, a.jsxs)("div", {
                      className: "text-center space-y-2",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-orange-600 text-lg font-semibold",
                          children: "Bạn đ\xe3 hết lượt xem thiệp!",
                        }),
                        (0, a.jsx)(y, {
                          type: "secondary",
                          children:
                            "Để kh\xf4ng bị gi\xe1n đoạn dịch vụ, vui l\xf2ng n\xe2ng cấp g\xf3i của bạn.",
                        }),
                      ],
                    }),
                  }),
                  h &&
                    x &&
                    (0, a.jsx)(l.Z, {
                      children: (0, a.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                              (0, a.jsx)(y, {
                                strong: !0,
                                children: "Lượt xem đ\xe3 sử dụng",
                              }),
                              (0, a.jsxs)(y, {
                                children: [
                                  q.toLocaleString(),
                                  " / ",
                                  N.toLocaleString(),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsx)(o.Z, {
                            percent: Math.min(N > 0 ? (q / N) * 100 : 0, 100),
                            status: f ? "exception" : "normal",
                            strokeColor: f ? "#ff4d4f" : "#1890ff",
                            showInfo: !1,
                          }),
                          (0, a.jsxs)("div", {
                            className: "grid grid-cols-2 gap-4 mt-4",
                            children: [
                              (0, a.jsxs)("div", {
                                className:
                                  "text-center p-3 bg-gray-50 rounded-lg",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-2xl font-bold text-gray-900",
                                    children: q.toLocaleString(),
                                  }),
                                  (0, a.jsx)(y, {
                                    type: "secondary",
                                    className: "text-sm",
                                    children: "Đ\xe3 sử dụng",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "text-center p-3 bg-red-50 rounded-lg",
                                children: [
                                  (0, a.jsx)("div", {
                                    className:
                                      "text-2xl font-bold text-red-600",
                                    children: Math.max(
                                      N - q,
                                      0
                                    ).toLocaleString(),
                                  }),
                                  (0, a.jsx)(y, {
                                    type: "secondary",
                                    className: "text-sm",
                                    children: "C\xf2n lại",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  (null == h ? void 0 : h.basePlan) &&
                    (0, a.jsx)(l.Z, {
                      children: (0, a.jsxs)("div", {
                        className: "flex items-center gap-3",
                        children: [
                          (0, a.jsx)(c.Z, {
                            weight: "BoldDuotone",
                            className: "w-8 h-8",
                            style: {
                              color:
                                "PREMIUM" === h.basePlan
                                  ? "#faad14"
                                  : "#8c8c8c",
                            },
                          }),
                          (0, a.jsxs)("div", {
                            children: [
                              (0, a.jsxs)(y, {
                                strong: !0,
                                children: ["G\xf3i hiện tại: ", h.basePlan],
                              }),
                              (0, a.jsx)("br", {}),
                              (0, a.jsxs)(y, {
                                type: "secondary",
                                className: "text-sm",
                                children: [
                                  "Giới hạn ",
                                  N.toLocaleString(),
                                  " lượt xem",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  (0, a.jsxs)("div", {
                    className: "flex gap-3 pt-4",
                    children: [
                      (0, a.jsx)(u.ZP, {
                        type: "primary",
                        size: "large",
                        icon: (0, a.jsx)(m.Z, { weight: "Linear" }),
                        onClick: () => {
                          j(), g.push("/pricing");
                        },
                        className: "flex-1",
                        children: "N\xe2ng cấp g\xf3i ngay",
                      }),
                      (0, a.jsx)(u.ZP, {
                        size: "large",
                        onClick: () => {
                          j(), g.push("/pricing");
                        },
                        className: "flex-1",
                        children: "Xem c\xe1c g\xf3i",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "text-center pt-2",
                    children: (0, a.jsx)(y, {
                      type: "secondary",
                      className: "text-xs",
                      children:
                        "N\xe2ng cấp g\xf3i để c\xf3 th\xeam lượt xem v\xe0 nhiều t\xednh năng kh\xe1c",
                    }),
                  }),
                ],
              }),
            })
          : null;
      }
    },
    35502: function (e, t, n) {
      "use strict";
      n.d(t, {
        $T: function () {
          return o;
        },
        DG: function () {
          return u;
        },
        EV: function () {
          return m;
        },
        MT: function () {
          return v;
        },
        W_: function () {
          return p;
        },
        b: function () {
          return d;
        },
        nM: function () {
          return c;
        },
        xe: function () {
          return l;
        },
      });
      var a = n(71632),
        i = n(29827),
        r = n(21770);
      let s = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
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
      function u() {
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
      function c() {
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
      function v() {
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
            var a, i, r, s, l, o, u, d, c;
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
                        null === (u = e.limits) || void 0 === u
                          ? void 0
                          : u.maxViews) && void 0 !== d
                      ? d
                      : 0,
                  a = null !== (c = t.totalViews) && void 0 !== c ? c : 0;
                return { max: n, used: a, remaining: Math.max(n - a, 0) };
              }
            }
          },
        };
      }
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
          return y;
        },
        FF: function () {
          return w;
        },
        QJ: function () {
          return g;
        },
        VV: function () {
          return S;
        },
        WY: function () {
          return r;
        },
        Yb: function () {
          return T;
        },
        eD: function () {
          return x;
        },
        fR: function () {
          return h;
        },
        zE: function () {
          return v;
        },
      });
      var a,
        i,
        r,
        s,
        l = n(71632),
        o = n(58962),
        u = n(29827),
        d = n(21770),
        c = n(33818),
        m = n(35502);
      let p = (0, c.g)("https://www.quyctd.dev/wedding/api");
      function v() {
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
      function y() {
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
      function g() {
        let e = (0, u.NL)(),
          t = (0, m.xe)(),
          n = (0, m.$T)();
        return (0, d.D)({
          mutationFn: async (e) => {
            var a, i, r, s;
            let { templateId: l, data: o } = e,
              [u, d] = await Promise.all([t.refetch(), n.refetch()]),
              c =
                null === (i = u.data) || void 0 === i
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
            if ("number" == typeof c && m >= c)
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
      function h(e) {
        return (0, l.a)({
          queryKey: ["admin-template", e],
          queryFn: async () => (await p("/v1/admin/templates/".concat(e))).data,
          enabled: !!e,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function x() {
        let e = (0, u.NL)();
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
        let e = (0, u.NL)();
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
        let e = (0, u.NL)();
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
      function S() {
        let e = (0, u.NL)();
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
      function T(e) {
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
      async function u() {
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
                if ((t = await u())) {
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
                let u = e.config;
                if (
                  (null === (r = e.response) || void 0 === r
                    ? void 0
                    : r.status) === 401 &&
                  !u._retry
                ) {
                  u._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      r = await e.getSession(),
                      s = null == r ? void 0 : r.accessToken,
                      l = null == r ? void 0 : r.error;
                    if (s && !l && s !== a)
                      return (
                        (a = s),
                        (i = o(s) || Date.now() + 3e5),
                        u.headers &&
                          (u.headers.Authorization = "Bearer ".concat(s)),
                        t.request(u)
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
        8640, 5831, 5827, 639, 9486, 6931, 9278, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 66394));
      }
    ),
      (_N_E = e.O());
  },
]);
