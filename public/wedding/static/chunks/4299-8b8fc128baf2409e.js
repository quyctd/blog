"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4299],
  {
    35502: function (e, t, n) {
      n.d(t, {
        $T: function () {
          return l;
        },
        DG: function () {
          return d;
        },
        EV: function () {
          return p;
        },
        MT: function () {
          return v;
        },
        W_: function () {
          return m;
        },
        b: function () {
          return s;
        },
        nM: function () {
          return c;
        },
        xe: function () {
          return u;
        },
      });
      var a = n(71632),
        i = n(29827),
        r = n(21770);
      let o = (0, n(33818).g)("https://api.zenlove.me");
      function u(e) {
        var t;
        return (0, a.a)({
          queryKey: ["addons", "user-limits"],
          queryFn: async () => (await o("/v1/addons/user/limit")).data,
          staleTime: 6e4,
          enabled:
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
          retry: 2,
        });
      }
      function l(e) {
        var t, n;
        let i = u({
          enabled:
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
        });
        return (0, a.a)({
          queryKey: ["addons", "user-usage"],
          queryFn: async () => (await o("/v1/addons/user/usage")).data,
          staleTime: 6e4,
          enabled:
            (null === (n = null == e ? void 0 : e.enabled) ||
              void 0 === n ||
              n) &&
            "success" === i.status,
          retry: 2,
        });
      }
      function d() {
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
              await o("/v1/addons/products".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          retry: 2,
        });
      }
      function s() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (
              await o("/v1/addons/purchase", {
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
            return (await o("/v1/admin/addons".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          retry: 2,
        });
      }
      function p() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (
              await o("/v1/admin/addons", {
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
      function m() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await o("/v1/admin/addons/".concat(t), {
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
            await o("/v1/admin/addons/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-addons"] }),
              e.invalidateQueries({ queryKey: ["addons", "products"] });
          },
        });
      }
    },
    14398: function (e, t, n) {
      n.d(t, {
        Ah: function () {
          return u;
        },
        eG: function () {
          return l;
        },
        qP: function () {
          return d;
        },
      });
      var a = n(29827),
        i = n(21770),
        r = n(58962);
      let o = (0, n(33818).g)("https://api.zenlove.me");
      function u() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) => {
            let t = new FormData();
            return (
              t.append("file", e.file),
              t.append("templateId", e.templateId),
              (await o("/v1/admin/file-upload", { method: "POST", body: t }))
                .data
            );
          },
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-file-upload"] });
          },
          onError: (e) => {
            var t, n, a;
            if (
              (null == e
                ? void 0
                : null === (t = e.message) || void 0 === t
                ? void 0
                : t.includes("File type not allowed")) ||
              (null == e ? void 0 : e.status) === 400
            )
              throw Error(
                "Loại file kh\xf4ng được hỗ trợ. Chỉ chấp nhận: JPEG, PNG, WebP, GIF, SVG (tối đa 5MB)"
              );
            if (
              (null == e
                ? void 0
                : null === (n = e.message) || void 0 === n
                ? void 0
                : n.includes("File size exceeds")) ||
              (null == e ? void 0 : e.status) === 400
            )
              throw Error("K\xedch thước file vượt qu\xe1 5MB");
            if (
              (null == e
                ? void 0
                : null === (a = e.message) || void 0 === a
                ? void 0
                : a.includes("Template not found")) ||
              (null == e ? void 0 : e.status) === 404
            )
              throw Error("Template kh\xf4ng tồn tại");
            if ((null == e ? void 0 : e.status) === 401)
              throw Error(
                "Phi\xean đăng nhập đ\xe3 hết hạn, vui l\xf2ng đăng nhập lại"
              );
            if ((null == e ? void 0 : e.status) === 403)
              throw Error(
                "Bạn kh\xf4ng c\xf3 quyền thực hiện thao t\xe1c n\xe0y"
              );
          },
        });
      }
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = arguments.length > 1 ? arguments[1] : void 0;
        return (0, r.N)({
          queryKey: ["admin-file-upload-infinite", e],
          queryFn: async (t) => {
            let { pageParam: n = 1 } = t,
              a = new URLSearchParams();
            a.append("page", n.toString()),
              e.templateId && a.append("templateId", e.templateId),
              e.limit && a.append("limit", e.limit.toString());
            let i = a.toString();
            return (
              await o("/v1/admin/file-upload".concat(i ? "?".concat(i) : ""))
            ).data;
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
          enabled: (null == t ? void 0 : t.enabled) !== !1,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function d() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (await o("/v1/admin/file-upload/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-file-upload"] }),
              e.invalidateQueries({ queryKey: ["admin-file-upload-infinite"] });
          },
          onError: (e) => {
            var t;
            if (
              (null == e
                ? void 0
                : null === (t = e.message) || void 0 === t
                ? void 0
                : t.includes("File not found")) ||
              (null == e ? void 0 : e.status) === 404
            )
              throw Error("File kh\xf4ng tồn tại hoặc đ\xe3 bị x\xf3a");
            if ((null == e ? void 0 : e.status) === 401)
              throw Error(
                "Phi\xean đăng nhập đ\xe3 hết hạn, vui l\xf2ng đăng nhập lại"
              );
            if ((null == e ? void 0 : e.status) === 403)
              throw Error(
                "Bạn kh\xf4ng c\xf3 quyền thực hiện thao t\xe1c n\xe0y"
              );
          },
        });
      }
    },
    61802: function (e, t, n) {
      n.d(t, {
        R6: function () {
          return d;
        },
        Wv: function () {
          return c;
        },
        Xq: function () {
          return s;
        },
        kR: function () {
          return p;
        },
        to: function () {
          return l;
        },
      });
      var a = n(29827),
        i = n(71632),
        r = n(58962),
        o = n(21770);
      let u = (0, n(33818).g)("https://api.zenlove.me");
      function l() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.NL)();
        return (0, i.a)({
          queryKey: ["file-uploads", e],
          queryFn: async () => {
            let n = new URLSearchParams();
            e.page && n.append("page", e.page.toString()),
              e.limit && n.append("limit", e.limit.toString()),
              e.fileType && n.append("fileType", e.fileType),
              e.userId && n.append("userId", e.userId),
              e.search && n.append("search", e.search),
              e.sortBy && n.append("sortBy", e.sortBy),
              e.sortOrder && n.append("sortOrder", e.sortOrder);
            let a = n.toString(),
              i = await u(
                "/v1/file-upload/all/images".concat(a ? "?".concat(a) : "")
              );
            return (
              t.invalidateQueries({ queryKey: ["addons", "user-usage"] }),
              t.invalidateQueries({ queryKey: ["addons", "user-limits"] }),
              i.data
            );
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function d() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0,
          i = (0, a.NL)();
        return (0, r.N)({
          queryKey: ["file-uploads-infinite", t],
          queryFn: async (e) => {
            let { pageParam: n = 1 } = e,
              a = new URLSearchParams();
            a.append("page", n.toString()),
              t.limit && a.append("limit", t.limit.toString()),
              t.fileType && a.append("fileType", t.fileType),
              t.userId && a.append("userId", t.userId),
              t.search && a.append("search", t.search),
              t.sortBy && a.append("sortBy", t.sortBy),
              t.sortOrder && a.append("sortOrder", t.sortOrder);
            let r = a.toString(),
              o = await u(
                "/v1/file-upload/all/images".concat(r ? "?".concat(r) : "")
              );
            return (
              1 === n &&
                (i.invalidateQueries({ queryKey: ["addons", "user-usage"] }),
                i.invalidateQueries({ queryKey: ["addons", "user-limits"] })),
              o.data
            );
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
        });
      }
      function s() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = (0, a.NL)();
        return (0, r.N)({
          queryKey: ["user-images-infinite", e],
          queryFn: async (n) => {
            let { pageParam: a = 1 } = n,
              i = new URLSearchParams();
            i.append("page", a.toString()),
              e.limit && i.append("limit", e.limit.toString()),
              e.fileType && i.append("fileType", e.fileType),
              e.userId && i.append("userId", e.userId),
              e.search && i.append("search", e.search),
              e.sortBy && i.append("sortBy", e.sortBy),
              e.sortOrder && i.append("sortOrder", e.sortOrder);
            let r = i.toString(),
              o = await u(
                "/v1/file-upload/images".concat(r ? "?".concat(r) : "")
              );
            return (
              1 === a &&
                (t.invalidateQueries({ queryKey: ["addons", "user-usage"] }),
                t.invalidateQueries({ queryKey: ["addons", "user-limits"] })),
              o.data
            );
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
        });
      }
      function c() {
        let e = (0, a.NL)();
        return (0, o.D)({
          mutationFn: async (e) =>
            await u("/v1/file-upload/images/".concat(e), { method: "DELETE" }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["file-uploads"] });
          },
        });
      }
      function p() {
        let e = (0, a.NL)();
        return (0, o.D)({
          mutationFn: async (e) => {
            let t = new FormData();
            return (
              t.append("file", e.file),
              e.userId && t.append("userId", e.userId),
              await u("/v1/file-upload", { method: "POST", body: t })
            );
          },
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["file-uploads"] });
          },
        });
      }
    },
    84985: function (e, t, n) {
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var a = n(35502),
        i = n(7999),
        r = n(11266);
      function o() {
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
          o = () => {
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
          u = () => {
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
          isPageLimitReached: o(),
          checkPageLimit: o,
          isImageLimitReached: u(),
          checkImageLimit: u,
          limits: e,
          usage: t,
          canUseTemplateType: (t) => {
            var n, a;
            if (t === i.WY.free) return !0;
            let o =
                (null == e
                  ? void 0
                  : null === (n = e.limits) || void 0 === n
                  ? void 0
                  : n.features) || {},
              u =
                (null == e
                  ? void 0
                  : null === (a = e.basePlan) || void 0 === a
                  ? void 0
                  : a.toUpperCase()) || "FREE",
              l = (0, r.Ql)(o);
            if ("premium" === l) return !0;
            if ("basic" === l) return t !== i.WY.premium;
            switch (u) {
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
            var a, i, r, o, u, l, d, s, c;
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
                  o = null !== (r = t.pagesCount) && void 0 !== r ? r : 0;
                return { max: n, used: o, remaining: Math.max(n - o, 0) };
              }
              case "image": {
                let n =
                    null !==
                      (u =
                        null === (o = e.limits) || void 0 === o
                          ? void 0
                          : o.maxImages) && void 0 !== u
                      ? u
                      : 0,
                  a = null !== (l = t.imagesCount) && void 0 !== l ? l : 0;
                return { max: n, used: a, remaining: Math.max(n - a, 0) };
              }
              case "view": {
                let n =
                    null !==
                      (s =
                        null === (d = e.limits) || void 0 === d
                          ? void 0
                          : d.maxViews) && void 0 !== s
                      ? s
                      : 0,
                  a = null !== (c = t.totalViews) && void 0 !== c ? c : 0;
                return { max: n, used: a, remaining: Math.max(n - a, 0) };
              }
            }
          },
        };
      }
    },
    34577: function (e, t, n) {
      n.d(t, {
        a: function () {
          return i;
        },
      });
      var a = n(2265);
      function i(e) {
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
    7999: function (e, t, n) {
      n.d(t, {
        $2: function () {
          return T;
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
          return q;
        },
        WY: function () {
          return r;
        },
        Yb: function () {
          return b;
        },
        eD: function () {
          return S;
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
        o,
        u = n(71632),
        l = n(58962),
        d = n(29827),
        s = n(21770),
        c = n(33818),
        p = n(35502);
      let m = (0, c.g)("https://api.zenlove.me");
      function v() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        return (0, u.a)({
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
            return (await m("/v1/templates".concat(n ? "?".concat(n) : "")))
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
        return (0, l.N)({
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
            return (await m("/v1/templates".concat(i ? "?".concat(i) : "")))
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
        let e = (0, d.NL)(),
          t = (0, p.xe)(),
          n = (0, p.$T)();
        return (0, s.D)({
          mutationFn: async (e) => {
            var a, i, r, o;
            let { templateId: u, data: l } = e,
              [d, s] = await Promise.all([t.refetch(), n.refetch()]),
              c =
                null === (i = d.data) || void 0 === i
                  ? void 0
                  : null === (a = i.limits) || void 0 === a
                  ? void 0
                  : a.maxPages,
              p =
                null !==
                  (o =
                    null === (r = s.data) || void 0 === r
                      ? void 0
                      : r.pagesCount) && void 0 !== o
                  ? o
                  : 0;
            if ("number" == typeof c && p >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await m("/v1/templates/".concat(u, "/use"), {
                method: "POST",
                body: JSON.stringify(l),
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
        return (0, u.a)({
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
              await m("/v1/admin/templates".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function h(e) {
        return (0, u.a)({
          queryKey: ["admin-template", e],
          queryFn: async () => (await m("/v1/admin/templates/".concat(e))).data,
          enabled: !!e,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function S() {
        let e = (0, d.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await m("/v1/admin/templates", {
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
        let e = (0, d.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await m("/v1/admin/templates/".concat(t), {
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
      function T() {
        let e = (0, d.NL)();
        return (0, s.D)({
          mutationFn: async (e) => (
            await m("/v1/admin/templates/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: (t) => {
            e.invalidateQueries({ queryKey: ["admin-templates"] }),
              e.invalidateQueries({ queryKey: ["templates"] }),
              e.removeQueries({ queryKey: ["admin-template", t] }),
              e.removeQueries({ queryKey: ["template", t] });
          },
        });
      }
      function q() {
        let e = (0, d.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let t = new FormData();
            return (
              t.append("file", e.file),
              t.append("uploadType", e.uploadType),
              t.append("templateId", e.templateId),
              (
                await m("/v1/admin/templates/upload", {
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
      function b(e) {
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
        ((i = o || (o = {})).free = "FREE"),
        (i.basic = "BASIC"),
        (i.premium = "PREMIUM"),
        (i.hot = "HOT"),
        (i.new = "NEW");
    },
    33818: function (e, t, n) {
      let a, i;
      n.d(t, {
        g: function () {
          return s;
        },
      });
      var r = n(83464),
        o = n(82957).Buffer;
      let u = null;
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
                  return o.from(n, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              a = JSON.parse(n);
            if ("number" == typeof a.exp) return 1e3 * a.exp;
          } catch (e) {}
      }
      async function d() {
        return a && i && Date.now() + 3e5 < i
          ? a
          : (u ||
              (u = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    r = null == t ? void 0 : t.accessToken;
                  return (a = r), (i = l(r) || Date.now() + 36e5), r;
                } catch (e) {
                  (a = void 0), (i = void 0);
                  return;
                } finally {
                  u = null;
                }
              })()),
            u);
      }
      function s(e) {
        let t = (function (e) {
          let t = r.Z.create({ baseURL: e, timeout: 3e4 });
          return (
            t.interceptors.request.use(
              async (e) => {
                let t;
                if ((t = await d())) {
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
                var r, o, u;
                let d = e.config;
                if (
                  (null === (r = e.response) || void 0 === r
                    ? void 0
                    : r.status) === 401 &&
                  !d._retry
                ) {
                  d._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      r = await e.getSession(),
                      o = null == r ? void 0 : r.accessToken,
                      u = null == r ? void 0 : r.error;
                    if (o && !u && o !== a)
                      return (
                        (a = o),
                        (i = l(o) || Date.now() + 3e5),
                        d.headers &&
                          (d.headers.Authorization = "Bearer ".concat(o)),
                        t.request(d)
                      );
                    (a = void 0),
                      (i = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (u = e.response) || void 0 === u
                      ? void 0
                      : null === (o = u.data) || void 0 === o
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
      function o(e) {
        if (!e) return "free";
        let t = String(e.config_template_access || "free").toLowerCase();
        return "premium" === t ? "premium" : "basic" === t ? "basic" : "free";
      }
      function u(e) {
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
          return o;
        },
        _k: function () {
          return i;
        },
        iX: function () {
          return a;
        },
        sD: function () {
          return u;
        },
        zz: function () {
          return r;
        },
      });
    },
  },
]);
