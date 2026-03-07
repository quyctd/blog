"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9797],
  {
    35174: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var a = n(57437);
      n(2265);
      var r = n(39486),
        i = n(64170);
      let { Text: o } = r.default;
      function s(e) {
        let {
          current: t,
          total: n,
          pageSize: r,
          loading: s = !1,
          onPageChange: u,
          showSizeChanger: c = !0,
          showQuickJumper: d = !1,
          showTotal: l = !0,
          showItemCount: p = !0,
          className: y = "",
          itemName: g = "mục",
        } = e;
        return (0, a.jsxs)("div", {
          className:
            "flex flex-col sm:flex-row justify-between items-center gap-4 p-4 bg-white rounded-lg shadow ".concat(
              y
            ),
          children: [
            p &&
              (0, a.jsx)("div", {
                className: "flex items-center space-x-4",
                children: (0, a.jsxs)(o, {
                  className: "text-gray-600",
                  children: ["Tổng ", n, " ", g],
                }),
              }),
            (0, a.jsx)("div", {
              className: "flex items-center space-x-4",
              children: (0, a.jsx)(i.Z, {
                current: t,
                total: n,
                pageSize: r,
                showSizeChanger: c,
                showQuickJumper: d,
                showTotal: l
                  ? (e, t) =>
                      "".concat(t[0], "-").concat(t[1], " của ").concat(e)
                  : void 0,
                onChange: (e, t) => {
                  u(e, t || r);
                },
                disabled: s,
                className: "pagination-component",
              }),
            }),
          ],
        });
      }
    },
    35502: function (e, t, n) {
      n.d(t, {
        $T: function () {
          return u;
        },
        DG: function () {
          return c;
        },
        EV: function () {
          return p;
        },
        MT: function () {
          return g;
        },
        W_: function () {
          return y;
        },
        b: function () {
          return d;
        },
        nM: function () {
          return l;
        },
        xe: function () {
          return s;
        },
      });
      var a = n(71632),
        r = n(29827),
        i = n(21770);
      let o = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function s(e) {
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
      function u(e) {
        var t, n;
        let r = s({
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
              await o("/v1/addons/products".concat(n ? "?".concat(n) : ""))
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
      function l() {
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
        let e = (0, r.NL)();
        return (0, i.D)({
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
      function y() {
        let e = (0, r.NL)();
        return (0, i.D)({
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
      function g() {
        let e = (0, r.NL)();
        return (0, i.D)({
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
    34577: function (e, t, n) {
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
    50946: function (e, t, n) {
      n.d(t, {
        F1: function () {
          return f;
        },
        Kc: function () {
          return m;
        },
        Qt: function () {
          return p;
        },
        RT: function () {
          return v;
        },
        il: function () {
          return w;
        },
        lv: function () {
          return S;
        },
        qt: function () {
          return y;
        },
        ti: function () {
          return r;
        },
        vq: function () {
          return g;
        },
        yB: function () {
          return h;
        },
      });
      var a,
        r,
        i = n(71632),
        o = n(29827),
        s = n(21770),
        u = n(33818),
        c = n(35502),
        d = n(2265);
      let l = (0, u.g)("https://www.quyctd.dev/wedding/api");
      function p() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, i.a)({
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
            return (await l("/v1/pages".concat(n ? "?".concat(n) : ""))).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function y(e) {
        return (0, i.a)({
          queryKey: ["page", e],
          queryFn: async () => (await l("/v1/pages/".concat(e))).data,
          enabled: !!e,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function g() {
        let e = (0, o.NL)(),
          t = (0, c.xe)(),
          n = (0, c.$T)();
        return (0, s.D)({
          mutationFn: async (e) => {
            var a, r, i, o;
            let [s, u] = await Promise.all([t.refetch(), n.refetch()]),
              c =
                null === (r = s.data) || void 0 === r
                  ? void 0
                  : null === (a = r.limits) || void 0 === a
                  ? void 0
                  : a.maxPages,
              d =
                null !==
                  (o =
                    null === (i = u.data) || void 0 === i
                      ? void 0
                      : i.pagesCount) && void 0 !== o
                  ? o
                  : 0;
            if ("number" == typeof c && d >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await l("/v1/pages", { method: "POST", body: JSON.stringify(e) })
            ).data;
          },
          onSuccess: async (a) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), n.refetch()]),
              e.setQueryData(["page", a.id], { page: a, statistics: null });
          },
        });
      }
      function v() {
        let e = (0, o.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await l("/v1/pages/".concat(t), {
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
      function f() {
        let e = (0, o.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/pages/update", {
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
      function m() {
        let e = (0, o.NL)();
        return (0, s.D)({
          mutationFn: async (e) => (
            await l("/v1/pages/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: (t) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              e.removeQueries({ queryKey: ["page", t] });
          },
        });
      }
      function h() {
        let e = (0, o.NL)(),
          t = (0, c.xe)(),
          n = (0, c.$T)();
        return (0, s.D)({
          mutationFn: async (e) => {
            var a, r, i, o;
            let [s, u] = await Promise.all([t.refetch(), n.refetch()]),
              c =
                null === (r = s.data) || void 0 === r
                  ? void 0
                  : null === (a = r.limits) || void 0 === a
                  ? void 0
                  : a.maxPages,
              d =
                null !==
                  (o =
                    null === (i = u.data) || void 0 === i
                      ? void 0
                      : i.pagesCount) && void 0 !== o
                  ? o
                  : 0;
            if ("number" == typeof c && d >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await l("/v1/pages/".concat(e, "/duplicate"), { method: "POST" })
            ).data;
          },
          onSuccess: async (a) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), n.refetch()]),
              e.setQueryData(["page", a.id], { page: a, statistics: null });
          },
        });
      }
      function w() {
        let e = (0, o.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let t = await fetch(
              ""
                .concat("https://www.quyctd.dev/wedding/api", "/v1/pages/")
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
      function S() {
        let e = (0, o.NL)();
        return null;
      }
      ((a = r || (r = {})).draft = "draft"),
        (a.published = "published"),
        (a.expired = "expired");
    },
    18585: function (e, t, n) {
      n.d(t, {
        Fp: function () {
          return g;
        },
        IY: function () {
          return y;
        },
        Kc: function () {
          return p;
        },
        M4: function () {
          return m;
        },
        S6: function () {
          return r;
        },
        Ul: function () {
          return h;
        },
        _k: function () {
          return v;
        },
        iD: function () {
          return w;
        },
        iF: function () {
          return f;
        },
        iz: function () {
          return c;
        },
        lT: function () {
          return d;
        },
        t3: function () {
          return S;
        },
        ti: function () {
          return l;
        },
      });
      var a,
        r,
        i = n(29827),
        o = n(21770),
        s = n(71632);
      let u = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function c() {
        let e = (0, i.NL)();
        return (0, o.D)({
          mutationFn: async (e) =>
            (await u("/v1/rsvp", { method: "POST", body: JSON.stringify(e) }))
              .data,
          onSuccess: (t, n) => {
            e.invalidateQueries({ queryKey: ["rsvp", n.pageId] }),
              e.invalidateQueries({ queryKey: ["user-rsvp"] }),
              e.invalidateQueries({ queryKey: ["admin-rsvp"] });
          },
        });
      }
      function d(e) {
        return (0, s.a)({
          queryKey: ["page-rsvp-stats", e],
          queryFn: async () =>
            e ? (await u("/v1/pages/".concat(e, "/rsvp"))).data : null,
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function l(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, s.a)({
          queryKey: ["user-page-rsvp", e, t],
          queryFn: async () => {
            if (!e)
              return {
                data: [],
                pagination: { page: 1, limit: 10, total: 0, totalPages: 0 },
              };
            let n = new URLSearchParams();
            t.page && n.append("page", String(t.page)),
              t.limit && n.append("limit", String(t.limit)),
              t.search && n.append("search", t.search),
              t.confirm && n.append("confirm", t.confirm),
              t.pageId && n.append("pageId", t.pageId),
              t.sortBy && n.append("sortBy", t.sortBy),
              t.sortOrder && n.append("sortOrder", t.sortOrder);
            let a = n.toString(),
              r = "/v1/rsvp/user/".concat(e).concat(a ? "?".concat(a) : "");
            return (await u(r)).data;
          },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function p() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, s.a)({
          queryKey: ["user-rsvp", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.search && t.append("search", e.search),
              e.confirm && t.append("confirm", e.confirm),
              e.pageId && t.append("pageId", e.pageId),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (await u("/v1/rsvp/user/all".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function y() {
        let e = (0, i.NL)();
        return (0, o.D)({
          mutationFn: async (e) =>
            (await u("/v1/rsvp/user/".concat(e), { method: "DELETE" })).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["user-rsvp"] }),
              e.invalidateQueries({ queryKey: ["user-page-rsvp"] }),
              e.invalidateQueries({ queryKey: ["rsvp"] }),
              e.invalidateQueries({ queryKey: ["admin-rsvp"] });
          },
        });
      }
      function g() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, s.a)({
          queryKey: ["admin-rsvp", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.search && t.append("search", e.search),
              e.confirm && t.append("confirm", e.confirm),
              e.pageId && t.append("pageId", e.pageId),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (
              await u("/v1/rsvp/admin/all".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function v() {
        let e = (0, i.NL)();
        return (0, o.D)({
          mutationFn: async (e) =>
            (await u("/v1/rsvp/admin/".concat(e), { method: "DELETE" })).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-rsvp"] }),
              e.invalidateQueries({ queryKey: ["user-rsvp"] }),
              e.invalidateQueries({ queryKey: ["user-page-rsvp"] }),
              e.invalidateQueries({ queryKey: ["rsvp"] });
          },
        });
      }
      function f(e) {
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
      function m(e) {
        switch (e) {
          case "yes":
            return "C\xf3 tham dự";
          case "no":
            return "Kh\xf4ng tham dự";
          default:
            return "Chưa x\xe1c nhận";
        }
      }
      function h(e) {
        switch (e) {
          case "yes":
            return "success";
          case "no":
            return "error";
          default:
            return "default";
        }
      }
      function w(e) {
        let t = Number(e);
        return 0 === t ? "1 người" : "".concat(t, " người");
      }
      function S(e) {
        let t = {
          total: e.length,
          confirmed: 0,
          declined: 0,
          pending: 0,
          totalAttendees: 0,
        };
        return (
          e.forEach((e) => {
            if ("yes" === e.confirm) {
              t.confirmed++;
              let n = parseInt(e.attendees || "0", 10);
              t.totalAttendees += isNaN(n) ? 0 : n;
            } else "no" === e.confirm ? t.declined++ : t.pending++;
          }),
          t
        );
      }
      ((a = r || (r = {})).yes = "yes"), (a.no = "no");
    },
    33818: function (e, t, n) {
      let a, r;
      n.d(t, {
        g: function () {
          return d;
        },
      });
      var i = n(83464),
        o = n(82957).Buffer;
      let s = null;
      function u(e) {
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
      async function c() {
        return a && r && Date.now() + 3e5 < r
          ? a
          : (s ||
              (s = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    i = null == t ? void 0 : t.accessToken;
                  return (a = i), (r = u(i) || Date.now() + 36e5), i;
                } catch (e) {
                  (a = void 0), (r = void 0);
                  return;
                } finally {
                  s = null;
                }
              })()),
            s);
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
                var i, o, s;
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
                      o = null == i ? void 0 : i.accessToken,
                      s = null == i ? void 0 : i.error;
                    if (o && !s && o !== a)
                      return (
                        (a = o),
                        (r = u(o) || Date.now() + 3e5),
                        c.headers &&
                          (c.headers.Authorization = "Bearer ".concat(o)),
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
                    (null === (s = e.response) || void 0 === s
                      ? void 0
                      : null === (o = s.data) || void 0 === o
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
    10123: function (e, t, n) {
      n.d(t, {
        uY: function () {
          return a;
        },
      });
      function a(e) {
        return e.toLocaleString("vi-VN");
      }
    },
  },
]);
