(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1167],
  {
    70450: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return N;
        },
      });
      var n = a(57437),
        i = a(2265),
        r = a(53743),
        s = a(50742),
        o = a(48651),
        l = a(34029),
        c = a(73630),
        u = a(72566);
      a(76052);
      var d = a(10868),
        p = a(79320);
      let g = [
        { label: "3:2", value: 1.5, width: 1200, height: 800 },
        { label: "16:9", value: 16 / 9, width: 1200, height: 675 },
        { label: "4:3", value: 4 / 3, width: 1200, height: 900 },
      ];
      function m(e) {
        var t;
        let { imageUrl: a, onCrop: s, isOpen: m, onOpenChange: h } = e,
          v = (0, i.useRef)(null),
          [f, y] = (0, i.useState)(1.5),
          [w, b] = (0, i.useState)(!1),
          x = a ? a.split("?")[0] : void 0,
          S = a ? new URLSearchParams(a.split("?")[1]) : null,
          N = S ? S.get("crop") : null,
          T = N ? N.split(",").map(Number) : null,
          k = T ? { left: T[0], top: T[1], width: T[2], height: T[3] } : null;
        (0, i.useEffect)(() => {
          m && b(!1);
        }, [m]);
        let P = (e) => {
          var t;
          y(e),
            (null === (t = v.current) || void 0 === t ? void 0 : t.cropper) &&
              v.current.cropper.setAspectRatio(e);
        };
        return (0, n.jsx)(d.Z, {
          vertical: !0,
          gap: "middle",
          align: "flex-start",
          children: (0, n.jsx)(r.default, {
            title: "Cắt ảnh đại diện thiệp",
            centered: !0,
            open: m,
            onOk: () => {
              var e;
              let t =
                null === (e = v.current) || void 0 === e ? void 0 : e.cropper;
              if (!t) {
                l.ZP.error("Cropper chưa sẵn s\xe0ng");
                return;
              }
              try {
                let e = t.getCropBoxData(),
                  a = t.getCanvasData(),
                  n = t.getImageData(),
                  i = n.naturalWidth / a.width,
                  r = n.naturalHeight / a.height,
                  o = Math.max(0, Math.round((e.left - a.left) * i)),
                  c = Math.max(0, Math.round((e.top - a.top) * r)),
                  u = Math.min(n.naturalWidth - o, Math.round(e.width * i)),
                  d = Math.min(n.naturalHeight - c, Math.round(e.height * r));
                if (
                  o + u > n.naturalWidth ||
                  c + d > n.naturalHeight ||
                  u <= 0 ||
                  d <= 0
                ) {
                  console.error("Invalid crop calculation:", {
                    cropX: o,
                    cropY: c,
                    cropWidth: u,
                    cropHeight: d,
                    naturalWidth: n.naturalWidth,
                    naturalHeight: n.naturalHeight,
                  }),
                    l.ZP.error("T\xednh to\xe1n v\xf9ng cắt kh\xf4ng hợp lệ");
                  return;
                }
                let p = "?crop="
                    .concat(o, ",")
                    .concat(c, ",")
                    .concat(u, ",")
                    .concat(d),
                  g = "".concat(x).concat(p);
                s({ croppedImageUrl: g }),
                  h(!1),
                  l.ZP.success("Cắt ảnh th\xe0nh c\xf4ng!");
              } catch (e) {
                console.error("Error cropping image:", e),
                  l.ZP.error("Lỗi khi cắt ảnh");
              }
            },
            okText: "X\xe1c nhận",
            onCancel: () => h(!1),
            cancelText: "Hủy",
            width: 1e3,
            destroyOnHidden: !0,
            maskClosable: !1,
            children: (0, n.jsxs)("div", {
              className: "flex flex-col gap-4",
              children: [
                (0, n.jsx)("div", {
                  className:
                    "controls-container bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-100",
                  children: (0, n.jsxs)("div", {
                    className: "flex flex-col gap-2",
                    children: [
                      (0, n.jsxs)("div", {
                        className: "flex items-center justify-between mb-2",
                        children: [
                          (0, n.jsxs)("span", {
                            className: "text-sm font-medium text-gray-700",
                            children: [
                              (0, n.jsx)(p.Z, {
                                weight: "BoldDuotone",
                                className: "w-4 h-4 inline-block",
                              }),
                              " ",
                              "Tỉ lệ khung cắt",
                            ],
                          }),
                          (0, n.jsx)("div", {
                            className:
                              "text-xs text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full",
                            children:
                              null === (t = g.find((e) => e.value === f)) ||
                              void 0 === t
                                ? void 0
                                : t.label,
                          }),
                        ],
                      }),
                      (0, n.jsx)("div", {
                        className: "grid grid-cols-3 gap-2",
                        children: g.map((e) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className: (0, c.cn)(
                                "relative cursor-pointer rounded-md border transition-all duration-200 hover:shadow-sm",
                                "border-gray-200 bg-white hover:border-blue-300",
                                (isNaN(f) && isNaN(e.value)) || f === e.value
                                  ? "border-blue-500 bg-blue-500 text-white shadow-md"
                                  : "border-gray-200 bg-white hover:border-blue-300"
                              ),
                              onClick: () => P(e.value),
                              children: (0, n.jsxs)("div", {
                                className: "p-2 text-center",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: (0, c.cn)(
                                      "text-base font-semibold mb-0.5",
                                      (isNaN(f) && isNaN(e.value)) ||
                                        f === e.value
                                        ? "text-white"
                                        : "text-gray-800"
                                    ),
                                    children: e.label,
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: (0, c.cn)(
                                      "text-xs text-gray-500",
                                      (isNaN(f) && isNaN(e.value)) ||
                                        f === e.value
                                        ? "text-white"
                                        : "text-gray-500"
                                    ),
                                    children: [e.width, "\xd7", e.height],
                                  }),
                                ],
                              }),
                            },
                            e.value
                          )
                        ),
                      }),
                    ],
                  }),
                }),
                (0, n.jsxs)("div", {
                  className: "crop-container",
                  children: [
                    !w && (0, n.jsx)(o.Z, {}),
                    (0, n.jsx)("div", {
                      className: "crop-wrapper",
                      children:
                        m && x
                          ? (0, n.jsx)(u.Z, {
                              ref: v,
                              src: (0, c.ud)(x),
                              style: {
                                height: "50vh",
                                maxHeight: "500px",
                                width: "100%",
                              },
                              viewMode: 1,
                              aspectRatio: f,
                              initialAspectRatio: NaN,
                              guides: !0,
                              center: !0,
                              background: !1,
                              autoCropArea: k ? 1 : 0.8,
                              checkCrossOrigin: !0,
                              dragMode: "move",
                              cropBoxMovable: !0,
                              cropBoxResizable: !0,
                              toggleDragModeOnDblclick: !1,
                              minContainerWidth: 100,
                              minContainerHeight: 100,
                              ready: () => {
                                var e;
                                let t =
                                  null === (e = v.current) || void 0 === e
                                    ? void 0
                                    : e.cropper;
                                if (!t || !k) {
                                  b(!0);
                                  return;
                                }
                                try {
                                  let e = t.getImageData(),
                                    a = t.getCanvasData(),
                                    n = a.width / e.naturalWidth,
                                    i = a.height / e.naturalHeight,
                                    r = e.naturalWidth - k.width,
                                    s = e.naturalHeight - k.height;
                                  if (
                                    k.left < 0 ||
                                    k.left > r ||
                                    k.top < 0 ||
                                    k.top > s ||
                                    k.width <= 0 ||
                                    k.height <= 0 ||
                                    k.left + k.width > e.naturalWidth ||
                                    k.top + k.height > e.naturalHeight
                                  ) {
                                    console.warn(
                                      "Invalid crop data, using default crop area"
                                    ),
                                      l.ZP.warning(
                                        "Dữ liệu crop kh\xf4ng hợp lệ, sử dụng v\xf9ng mặc định"
                                      ),
                                      b(!0);
                                    return;
                                  }
                                  let o = {
                                    left: a.left + k.left * n,
                                    top: a.top + k.top * i,
                                    width: k.width * n,
                                    height: k.height * i,
                                  };
                                  t.setCropBoxData(o),
                                    k.width,
                                    k.height,
                                    y(1.5);
                                } catch (e) {
                                  console.error(
                                    "Error setting initial crop:",
                                    e
                                  ),
                                    l.ZP.error(
                                      "Lỗi khi thiết lập v\xf9ng cắt ban đầu"
                                    );
                                }
                                b(!0);
                              },
                              crop: (e) => {},
                            })
                          : null,
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className:
                    "bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200 hidden md:block",
                  children: (0, n.jsx)("div", {
                    className: "flex items-start space-x-3",
                    children: (0, n.jsxs)("div", {
                      className: "flex-1",
                      children: [
                        (0, n.jsx)("span", {
                          className:
                            "text-sm font-medium text-purple-800 mb-2 block",
                          children: "Hướng dẫn sử dụng",
                        }),
                        (0, n.jsxs)("div", {
                          className: "space-y-2 text-xs text-purple-700",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsx)("span", {
                                  className:
                                    "w-2 h-2 bg-purple-400 rounded-full",
                                }),
                                (0, n.jsx)("span", {
                                  children:
                                    "Thumbnail sẽ được cắt theo tỉ lệ đ\xe3 chọn để tối ưu hiển thị",
                                }),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "flex items-center space-x-2",
                              children: [
                                (0, n.jsx)("span", {
                                  className:
                                    "w-2 h-2 bg-purple-400 rounded-full",
                                }),
                                (0, n.jsx)("span", {
                                  children:
                                    "K\xe9o v\xe0 điều chỉnh khung h\xecnh để chọn v\xf9ng ảnh mong muốn",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var h = a(61802),
        v = a(596),
        f = a(71823),
        y = a(6211),
        w = a(99376),
        b = a(14398),
        x = a(57186),
        S = a(50828);
      function N(e) {
        let { open: t, onOpenChange: a, onSelect: u, targetUserId: d } = e,
          [p, g] = (0, i.useState)([]),
          [N, T] = (0, i.useState)(null),
          [k, P] = (0, i.useState)(!1),
          q = (0, x.k)((e) => e.pageUserId),
          D = (0, w.usePathname)(),
          {
            isAdminTemplateDesign: j,
            templateIdFromSlug: I,
            isAdminPageDesign: C,
          } = (0, i.useMemo)(() => {
            let e =
                "string" == typeof D && /\/admin\/templates\/design\//.test(D),
              t =
                "string" == typeof D
                  ? D.match(/\/admin\/templates\/design\/([^\/?#]+)/)
                  : null,
              a = "string" == typeof D && /\/admin\/pages\/design\//.test(D);
            return {
              isAdminTemplateDesign: !!e && !!(null == t ? void 0 : t[1]),
              templateIdFromSlug: null == t ? void 0 : t[1],
              isAdminPageDesign: !!a,
            };
          }, [D]),
          K = null != d ? d : C && q ? q : void 0,
          { data: E } = (0, S.Pi)(),
          L = (null == E ? void 0 : E.role) === "ADMIN",
          B = (0, h.Xq)({ limit: 10 }),
          O = (0, b.eG)(
            { templateId: I, limit: 10 },
            { enabled: j && !!I && L }
          ),
          U = (0, h.R6)({ limit: 10, userId: K || void 0 }, { enabled: !!K }),
          Q = j && !!I && L,
          F = !Q && !!K,
          {
            data: A,
            isLoading: M,
            fetchNextPage: Z,
            hasNextPage: _,
            isFetchingNextPage: R,
            refetch: z,
            isRefetching: W,
          } = Q ? O : F ? U : B;
        (0, i.useEffect)(() => {
          if (t && !M && A) {
            var e;
            g(
              (null !== (e = A.pages) && void 0 !== e ? e : [])
                .flatMap((e) => e.items)
                .map((e) => ({
                  id: e.id,
                  file_key: e.fileKey,
                  file_size: e.fileSize,
                  cdnUrl: "".concat(
                    (0, c.Yb)(e.fileKey),
                    "?width=200&height=200&format=webp"
                  ),
                }))
            );
          }
        }, [t, A, M, j, F, K]);
        let H = p.reduce((e, t) => e + (t.file_size || 0), 0),
          Y = M && 0 === p.length,
          G = (M && p.length > 0) || W;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(r.default, {
              open: t,
              onCancel: () => a(!1),
              closeIcon: !1,
              title: (0, n.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                  (0, n.jsx)("span", { children: "Chọn h\xecnh đại diện" }),
                  (0, n.jsx)(s.ZP, {
                    type: "text",
                    size: "small",
                    icon: (0, n.jsx)(f.Z, {}),
                    onClick: () => z(),
                    loading: W,
                    title: "L\xe0m mới danh s\xe1ch ảnh",
                    children: "L\xe0m mới",
                  }),
                ],
              }),
              width: 600,
              footer: [
                (0, n.jsx)(
                  s.ZP,
                  { onClick: () => a(!1), children: "Hủy" },
                  "cancel"
                ),
                (0, n.jsx)(
                  s.ZP,
                  {
                    type: "primary",
                    onClick: () => {
                      N && P(!0);
                    },
                    disabled: !N,
                    children: "Chọn",
                  },
                  "select"
                ),
              ],
              children: Y
                ? (0, n.jsx)("div", {
                    className: "flex justify-center py-8",
                    children: (0, n.jsx)(o.Z, { size: "large" }),
                  })
                : (0, n.jsxs)("div", {
                    className: "relative",
                    children: [
                      G &&
                        (0, n.jsx)("div", {
                          className:
                            "absolute inset-0 z-10 flex items-center justify-center bg-white/70",
                          children: (0, n.jsx)(o.Z, {}),
                        }),
                      (0, n.jsx)("div", {
                        className:
                          "grid grid-cols-4 gap-3 max-h-64 overflow-y-auto",
                        children: p.map((e) =>
                          (0, n.jsx)(
                            "div",
                            {
                              className:
                                "border-2 rounded-lg relative cursor-pointer overflow-hidden w-full h-24 ".concat(
                                  (null == N ? void 0 : N.id) === e.id
                                    ? "border-red-500"
                                    : "border-gray-200"
                                ),
                              onClick: () => T(e),
                              children: (0, n.jsx)("img", {
                                src: e.cdnUrl,
                                alt: e.file_key,
                                className: "w-full h-full object-cover",
                              }),
                            },
                            e.id
                          )
                        ),
                      }),
                      0 === p.length &&
                        !G &&
                        (0, n.jsx)("div", {
                          className: "flex justify-center items-center py-8",
                          children: (0, n.jsx)(v.Z, { size: 24 }),
                        }),
                      _ &&
                        (0, n.jsx)("div", {
                          className: "flex justify-center mt-4",
                          children: (0, n.jsx)(s.ZP, {
                            type: "default",
                            loading: R,
                            onClick: () => Z(),
                            icon: (0, n.jsx)(y.Z, { weight: "LineDuotone" }),
                            children: R ? "Đang tải..." : "Th\xeam",
                          }),
                        }),
                      !_ &&
                        p.length > 0 &&
                        (0, n.jsx)("div", {
                          className:
                            "text-center py-4 text-gray-500 text-xs italic",
                          children: "Đ\xe3 hiển thị tất cả ảnh.",
                        }),
                      (0, n.jsx)("div", {
                        className: "mt-3",
                        children: (0, n.jsxs)("div", {
                          className: "text-xs text-gray-500",
                          children: [
                            "Tổng ",
                            p.length,
                            " ảnh (",
                            ((e) => {
                              if (0 === e) return "0 Bytes";
                              let t = Math.floor(Math.log(e) / Math.log(1024));
                              return (
                                parseFloat((e / Math.pow(1024, t)).toFixed(2)) +
                                " " +
                                ["Bytes", "KB", "MB", "GB"][t]
                              );
                            })(H),
                            ")",
                          ],
                        }),
                      }),
                    ],
                  }),
            }),
            k &&
              N &&
              (0, n.jsx)(m, {
                imageUrl: N.file_key,
                onCrop: (e) => {
                  let { croppedImageUrl: t } = e,
                    a = new URLSearchParams(t.split("?")[1]).get("crop");
                  if (a) {
                    let [, , e, n] = a.split(",").map(Number);
                    if (e > 0 && n > 0) {
                      u(t), P(!1);
                      return;
                    }
                  }
                  l.ZP.error(
                    "Kh\xf4ng thể lấy th\xf4ng tin k\xedch thước từ URL đ\xe3 cắt!"
                  );
                },
                isOpen: k,
                onOpenChange: P,
              }),
          ],
        });
      }
    },
    596: function (e, t, a) {
      "use strict";
      a.d(t, {
        Z: function () {
          return r;
        },
      });
      var n = a(57437);
      a(2265);
      var i = a(61935);
      function r(e) {
        let { size: t = 24, color: a = "var(--color-zen-primary)" } = e;
        return (0, n.jsx)(i.Z, { style: { fontSize: t, color: a }, spin: !0 });
      }
    },
    50828: function (e, t, a) {
      "use strict";
      a.d(t, {
        H4: function () {
          return d;
        },
        Io: function () {
          return u;
        },
        Pi: function () {
          return l;
        },
        hU: function () {
          return p;
        },
        mr: function () {
          return c;
        },
      });
      var n = a(71632),
        i = a(29827),
        r = a(21770),
        s = a(80605);
      let o = (0, a(33818).g)("https://www.quyctd.dev/wedding/api");
      function l() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { status: t } = (0, s.useSession)();
        return (0, n.a)({
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
        let e = (0, i.NL)();
        return (0, r.D)({
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
      function u() {
        let { update: e } = (0, s.useSession)(),
          t = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (
              await o("/v1/users/me", {
                method: "PATCH",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: (a) => {
            try {
              null == e || e({ user: a });
            } catch (e) {}
            t.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function d() {
        let e = (0, i.NL)();
        return (0, r.D)({
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
      function p() {
        let e = (0, i.NL)();
        return (0, r.D)({
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
    18104: function (e, t, a) {
      "use strict";
      a.d(t, {
        GZ: function () {
          return l;
        },
        HL: function () {
          return c;
        },
        L_: function () {
          return o;
        },
        Ny: function () {
          return u;
        },
        P9: function () {
          return d;
        },
        y0: function () {
          return p;
        },
      });
      var n = a(71632),
        i = a(29827),
        r = a(21770);
      let s = (0, a(33818).g)("https://www.quyctd.dev/wedding/api");
      function o() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.a)({
          queryKey: ["categories", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.search && t.append("search", e.search),
              void 0 !== e.isActive &&
                t.append("isActive", e.isActive.toString()),
              e.page && t.append("page", e.page.toString()),
              e.limit && t.append("limit", e.limit.toString()),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let a = t.toString();
            return null;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, n.a)({
          queryKey: ["admin-categories", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.search && t.append("search", e.search),
              void 0 !== e.isActive &&
                t.append("isActive", e.isActive.toString()),
              e.page && t.append("page", e.page.toString()),
              e.limit && t.append("limit", e.limit.toString()),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let a = t.toString();
            return (
              await s("/v1/admin/categories".concat(a ? "?".concat(a) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function c() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (
              await s("/v1/admin/categories", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["categories"] }),
              e.invalidateQueries({ queryKey: ["admin-categories"] });
          },
        });
      }
      function u() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { id: t, data: a } = e;
            return (
              await s("/v1/admin/categories/".concat(t), {
                method: "PATCH",
                body: JSON.stringify(a),
              })
            ).data;
          },
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["categories"] }),
              e.invalidateQueries({ queryKey: ["admin-categories"] });
          },
        });
      }
      function d() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            (await s("/v1/admin/categories/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["categories"] }),
              e.invalidateQueries({ queryKey: ["admin-categories"] });
          },
        });
      }
      function p() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            await Promise.allSettled(
              e.map((e) =>
                s("/v1/admin/categories/".concat(e), { method: "DELETE" })
              )
            ),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["categories"] }),
              e.invalidateQueries({ queryKey: ["admin-categories"] });
          },
        });
      }
    },
    50946: function (e, t, a) {
      "use strict";
      a.d(t, {
        F1: function () {
          return v;
        },
        Kc: function () {
          return f;
        },
        Qt: function () {
          return p;
        },
        RT: function () {
          return h;
        },
        il: function () {
          return w;
        },
        lv: function () {
          return b;
        },
        qt: function () {
          return g;
        },
        ti: function () {
          return i;
        },
        vq: function () {
          return m;
        },
        yB: function () {
          return y;
        },
      });
      var n,
        i,
        r = a(71632),
        s = a(29827),
        o = a(21770),
        l = a(33818),
        c = a(35502),
        u = a(2265);
      let d = (0, l.g)("https://www.quyctd.dev/wedding/api");
      function p() {
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
            let a = t.toString();
            return (await d("/v1/pages".concat(a ? "?".concat(a) : ""))).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function g(e) {
        return (0, r.a)({
          queryKey: ["page", e],
          queryFn: async () => (await d("/v1/pages/".concat(e))).data,
          enabled: !!e,
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function m() {
        let e = (0, s.NL)(),
          t = (0, c.xe)(),
          a = (0, c.$T)();
        return (0, o.D)({
          mutationFn: async (e) => {
            var n, i, r, s;
            let [o, l] = await Promise.all([t.refetch(), a.refetch()]),
              c =
                null === (i = o.data) || void 0 === i
                  ? void 0
                  : null === (n = i.limits) || void 0 === n
                  ? void 0
                  : n.maxPages,
              u =
                null !==
                  (s =
                    null === (r = l.data) || void 0 === r
                      ? void 0
                      : r.pagesCount) && void 0 !== s
                  ? s
                  : 0;
            if ("number" == typeof c && u >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await d("/v1/pages", { method: "POST", body: JSON.stringify(e) })
            ).data;
          },
          onSuccess: async (n) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), a.refetch()]),
              e.setQueryData(["page", n.id], { page: n, statistics: null });
          },
        });
      }
      function h() {
        let e = (0, s.NL)();
        return (0, o.D)({
          mutationFn: async (e) => {
            let { id: t, data: a } = e;
            return (
              await d("/v1/pages/".concat(t), {
                method: "PUT",
                body: JSON.stringify(a),
              })
            ).data;
          },
          onSuccess: (t, a) => {
            e.setQueryData(["page", a.id], (e) =>
              e
                ? { ...e, page: { ...e.page, ...t } }
                : { page: t, statistics: null }
            ),
              e.setQueriesData({ queryKey: ["pages"] }, (e) =>
                e
                  ? {
                      ...e,
                      items: e.items.map((e) =>
                        e.id === a.id ? { ...e, ...t } : e
                      ),
                    }
                  : e
              );
          },
        });
      }
      function v() {
        let e = (0, s.NL)();
        return (0, o.D)({
          mutationFn: async (e) =>
            (
              await d("/v1/pages/update", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: (t, a) => {
            (0, u.startTransition)(() => {
              e.setQueryData(["page", a.id], (e) =>
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
                          e.id === a.id ? { ...e, ...t } : e
                        ),
                      }
                    : e
                );
            });
          },
          onError: (t) => {
            var a;
            ((null == t
              ? void 0
              : null === (a = t.message) || void 0 === a
              ? void 0
              : a.includes("Page expired")) ||
              (null == t ? void 0 : t.status) === 400) &&
              (e.invalidateQueries({ queryKey: ["pages"] }),
              (null == t ? void 0 : t.pageId) &&
                e.invalidateQueries({ queryKey: ["page", t.pageId] }));
          },
        });
      }
      function f() {
        let e = (0, s.NL)();
        return (0, o.D)({
          mutationFn: async (e) => (
            await d("/v1/pages/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: (t) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              e.removeQueries({ queryKey: ["page", t] });
          },
        });
      }
      function y() {
        let e = (0, s.NL)(),
          t = (0, c.xe)(),
          a = (0, c.$T)();
        return (0, o.D)({
          mutationFn: async (e) => {
            var n, i, r, s;
            let [o, l] = await Promise.all([t.refetch(), a.refetch()]),
              c =
                null === (i = o.data) || void 0 === i
                  ? void 0
                  : null === (n = i.limits) || void 0 === n
                  ? void 0
                  : n.maxPages,
              u =
                null !==
                  (s =
                    null === (r = l.data) || void 0 === r
                      ? void 0
                      : r.pagesCount) && void 0 !== s
                  ? s
                  : 0;
            if ("number" == typeof c && u >= c)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await d("/v1/pages/".concat(e, "/duplicate"), { method: "POST" })
            ).data;
          },
          onSuccess: async (n) => {
            e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), a.refetch()]),
              e.setQueryData(["page", n.id], { page: n, statistics: null });
          },
        });
      }
      function w() {
        let e = (0, s.NL)();
        return (0, o.D)({
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
          onSuccess: (t, a) => {
            e.setQueryData(["page", a.id], (e) =>
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
                        e.id === a.id ? { ...e, likeCount: t.likeCount } : e
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
      function b() {
        let e = (0, s.NL)();
        return null;
      }
      ((n = i || (i = {})).draft = "draft"),
        (n.published = "published"),
        (n.expired = "expired");
    },
    18585: function (e, t, a) {
      "use strict";
      a.d(t, {
        Fp: function () {
          return m;
        },
        IY: function () {
          return g;
        },
        Kc: function () {
          return p;
        },
        M4: function () {
          return f;
        },
        S6: function () {
          return i;
        },
        Ul: function () {
          return y;
        },
        _k: function () {
          return h;
        },
        iD: function () {
          return w;
        },
        iF: function () {
          return v;
        },
        iz: function () {
          return c;
        },
        lT: function () {
          return u;
        },
        t3: function () {
          return b;
        },
        ti: function () {
          return d;
        },
      });
      var n,
        i,
        r = a(29827),
        s = a(21770),
        o = a(71632);
      let l = (0, a(33818).g)("https://www.quyctd.dev/wedding/api");
      function c() {
        let e = (0, r.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (await l("/v1/rsvp", { method: "POST", body: JSON.stringify(e) }))
              .data,
          onSuccess: (t, a) => {
            e.invalidateQueries({ queryKey: ["rsvp", a.pageId] }),
              e.invalidateQueries({ queryKey: ["user-rsvp"] }),
              e.invalidateQueries({ queryKey: ["admin-rsvp"] });
          },
        });
      }
      function u(e) {
        return (0, o.a)({
          queryKey: ["page-rsvp-stats", e],
          queryFn: async () =>
            e ? (await l("/v1/pages/".concat(e, "/rsvp"))).data : null,
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function d(e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, o.a)({
          queryKey: ["user-page-rsvp", e, t],
          queryFn: async () => {
            if (!e)
              return {
                data: [],
                pagination: { page: 1, limit: 10, total: 0, totalPages: 0 },
              };
            let a = new URLSearchParams();
            t.page && a.append("page", String(t.page)),
              t.limit && a.append("limit", String(t.limit)),
              t.search && a.append("search", t.search),
              t.confirm && a.append("confirm", t.confirm),
              t.pageId && a.append("pageId", t.pageId),
              t.sortBy && a.append("sortBy", t.sortBy),
              t.sortOrder && a.append("sortOrder", t.sortOrder);
            let n = a.toString(),
              i = "/v1/rsvp/user/".concat(e).concat(n ? "?".concat(n) : "");
            return (await l(i)).data;
          },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function p() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, o.a)({
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
            let a = t.toString();
            return (await l("/v1/rsvp/user/all".concat(a ? "?".concat(a) : "")))
              .data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function g() {
        let e = (0, r.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (await l("/v1/rsvp/user/".concat(e), { method: "DELETE" })).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["user-rsvp"] }),
              e.invalidateQueries({ queryKey: ["user-page-rsvp"] }),
              e.invalidateQueries({ queryKey: ["rsvp"] }),
              e.invalidateQueries({ queryKey: ["admin-rsvp"] });
          },
        });
      }
      function m() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, o.a)({
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
            let a = t.toString();
            return (
              await l("/v1/rsvp/admin/all".concat(a ? "?".concat(a) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function h() {
        let e = (0, r.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (await l("/v1/rsvp/admin/".concat(e), { method: "DELETE" })).data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-rsvp"] }),
              e.invalidateQueries({ queryKey: ["user-rsvp"] }),
              e.invalidateQueries({ queryKey: ["user-page-rsvp"] }),
              e.invalidateQueries({ queryKey: ["rsvp"] });
          },
        });
      }
      function v(e) {
        let t = new Date(e),
          a = Math.floor((new Date().getTime() - t.getTime()) / 1e3);
        return a < 60
          ? "Vừa xong"
          : a < 3600
          ? "".concat(Math.floor(a / 60), " ph\xfat trước")
          : a < 86400
          ? "".concat(Math.floor(a / 3600), " giờ trước")
          : a < 604800
          ? "".concat(Math.floor(a / 86400), " ng\xe0y trước")
          : t.toLocaleDateString("vi-VN");
      }
      function f(e) {
        switch (e) {
          case "yes":
            return "C\xf3 tham dự";
          case "no":
            return "Kh\xf4ng tham dự";
          default:
            return "Chưa x\xe1c nhận";
        }
      }
      function y(e) {
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
      function b(e) {
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
              let a = parseInt(e.attendees || "0", 10);
              t.totalAttendees += isNaN(a) ? 0 : a;
            } else "no" === e.confirm ? t.declined++ : t.pending++;
          }),
          t
        );
      }
      ((n = i || (i = {})).yes = "yes"), (n.no = "no");
    },
    57186: function (e, t, a) {
      "use strict";
      a.d(t, {
        k: function () {
          return s;
        },
      });
      var n = a(7999),
        i = a(3011);
      let r = { messageBox: !0, likeBtn: !0, giftBtn: !0, removeWatermark: !1 },
        s = (0, i.U)((e, t) => ({
          pageId: null,
          pageUserId: null,
          pageUserName: "",
          pageUserEmail: "",
          pageName: "",
          pageDescription: "",
          pageStatus: "draft",
          pageSlug: "",
          categoryId: "",
          pageThumbnail: "",
          pageCreatedAt: "",
          pageExpirationDate: "",
          showInGallery: !1,
          toolbarSettings: { ...r },
          audioSettings: null,
          templateType: n.WY.free,
          loadFromPage: (t) => {
            var a, i, s, o, l, c, u, d, p, g, m, h, v, f, y, w, b, x;
            let S;
            if (!t) return;
            let N = t.toolbarSettings || {};
            if (N.qrBank) {
              if (Array.isArray(N.qrBank) || "object" != typeof N.qrBank)
                Array.isArray(N.qrBank) && (S = N.qrBank);
              else {
                let e = N.qrBank;
                (S = []),
                  e.groom &&
                    (e.groom.qrKey ||
                      e.groom.nameBank ||
                      e.groom.numberBank ||
                      e.groom.name) &&
                    S.push({
                      id: "groom",
                      displayName: "Ch\xfa rể",
                      name: e.groom.name || "",
                      bank: e.groom.nameBank || "",
                      accountNumber: e.groom.numberBank || "",
                      qrKey: e.groom.qrKey || "",
                    }),
                  e.bride &&
                    (e.bride.qrKey ||
                      e.bride.nameBank ||
                      e.bride.numberBank ||
                      e.bride.name) &&
                    S.push({
                      id: "bride",
                      displayName: "C\xf4 d\xe2u",
                      name: e.bride.name || "",
                      bank: e.bride.nameBank || "",
                      accountNumber: e.bride.numberBank || "",
                      qrKey: e.bride.qrKey || "",
                    });
              }
            }
            e({
              pageId: "quy-hai-220326",
              pageUserId: null !== (o = t.userId) && void 0 !== o ? o : null,
              pageUserName:
                null !==
                  (c =
                    null !== (l = t.userName) && void 0 !== l
                      ? l
                      : null === (a = t.user) || void 0 === a
                      ? void 0
                      : a.name) && void 0 !== c
                  ? c
                  : "",
              pageUserEmail:
                null !==
                  (d =
                    null !== (u = t.userEmail) && void 0 !== u
                      ? u
                      : null === (i = t.user) || void 0 === i
                      ? void 0
                      : i.email) && void 0 !== d
                  ? d
                  : "",
              pageName: null !== (p = t.name) && void 0 !== p ? p : "",
              pageDescription:
                null !== (g = t.description) && void 0 !== g ? g : "",
              pageStatus: null !== (m = t.status) && void 0 !== m ? m : "draft",
              pageSlug: null !== (h = t.slug) && void 0 !== h ? h : "",
              categoryId: null !== (v = t.categoryId) && void 0 !== v ? v : "",
              pageThumbnail:
                null !== (f = t.thumbnailKey) && void 0 !== f ? f : "",
              pageCreatedAt:
                null !== (y = t.createdAt) && void 0 !== y ? y : "",
              pageExpirationDate:
                null !== (w = t.expirationDate) && void 0 !== w ? w : "",
              showInGallery:
                null !== (b = t.showInGallery) && void 0 !== b && b,
              toolbarSettings: { ...r, ...N, qrBank: S },
              audioSettings: t.audioSettings || null,
              templateType:
                null !== (x = t.templateType) && void 0 !== x ? x : n.WY.free,
            });
          },
          setPageName: (t) => e({ pageName: null != t ? t : "" }),
          setPageUserId: (t) => e({ pageUserId: null != t ? t : null }),
          setPageUserName: (t) => e({ pageUserName: null != t ? t : "" }),
          setPageUserEmail: (t) => e({ pageUserEmail: null != t ? t : "" }),
          setCategoryId: (t) => e({ categoryId: null != t ? t : "" }),
          setPageDescription: (t) => e({ pageDescription: null != t ? t : "" }),
          setPageStatus: (t) => e({ pageStatus: null != t ? t : "draft" }),
          setPageThumbnail: (t) => e({ pageThumbnail: null != t ? t : "" }),
          setTemplateType: (t) =>
            e({ templateType: null != t ? t : n.WY.free }),
          setShowInGallery: (t) => e({ showInGallery: t }),
          updateToolbarSettings: (t) => {
            e((e) => ({
              toolbarSettings: { ...e.toolbarSettings, ...(t || {}) },
            }));
          },
          setAudioSettings: (t) => e({ audioSettings: t || null }),
          getToolbarSettings: () => t().toolbarSettings,
          getAudioSettings: () => t().audioSettings,
          getPageName: () => t().pageName,
          getPageDescription: () => t().pageDescription,
          getCategoryId: () => t().categoryId,
          getPageUserId: () => t().pageUserId,
          getPageUserName: () => t().pageUserName,
          getPageUserEmail: () => t().pageUserEmail,
          getPageStatus: () => t().pageStatus,
          getPageThumbnail: () => t().pageThumbnail,
          getTemplateType: () => t().templateType,
          getPageCreatedAt: () => t().pageCreatedAt,
          getPageExpirationDate: () => t().pageExpirationDate,
          getShowInGallery: () => t().showInGallery,
        }));
    },
    73630: function (e, t, a) {
      "use strict";
      a.d(t, {
        $B: function () {
          return p;
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
          return m;
        },
        sZ: function () {
          return f;
        },
        ud: function () {
          return g;
        },
      });
      var n = a(61994),
        i = a(53335);
      a(25566);
      let r = () => "https://zenlove.me",
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
      function u(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t > 0;
      }
      function d(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t >= 1 && t <= 100;
      }
      function p(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a = "https://cdn.zenlove.me";
        a || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, i] = e.split("?"),
          r = new URLSearchParams(null != i ? i : ""),
          p = new URLSearchParams();
        for (let [e, t] of r.entries()) {
          if (!s.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let a = !0;
          switch (e) {
            case "crop":
              (a = o(t)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    t,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (a = u(t)) ||
                console.warn(
                  "Invalid "
                    .concat(e, ' value "')
                    .concat(t, '", expected positive integer')
                );
              break;
            case "fit":
              (a = l(t)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    t,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (a = c(t)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    t,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (a = d(t)) ||
                console.warn(
                  'Invalid quality value "'.concat(
                    t,
                    '", expected integer 1-100'
                  )
                );
              break;
            default:
              a = !1;
          }
          a && p.set(e, t);
        }
        t && (p.set("format", "webp"), p.set("quality", "80"));
        let g = p.toString();
        return ""
          .concat(a.replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(g ? "?".concat(g) : "");
      }
      function g(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [a, n] = e.split("?"),
          i = new URLSearchParams(null != n ? n : ""),
          r = new URLSearchParams();
        for (let [e, t] of i.entries()) {
          if (!s.has(e)) {
            console.warn('Ignoring unknown param "'.concat(e, '"'));
            continue;
          }
          let a = !0;
          switch (e) {
            case "crop":
              (a = o(t)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    t,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (a = u(t)) ||
                console.warn(
                  "Invalid "
                    .concat(e, ' value "')
                    .concat(t, '", expected positive integer')
                );
              break;
            case "fit":
              (a = l(t)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    t,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (a = c(t)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    t,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (a = d(t)) ||
                console.warn(
                  'Invalid quality value "'.concat(
                    t,
                    '", expected integer 1-100'
                  )
                );
              break;
            default:
              a = !1;
          }
          a && r.set(e, t);
        }
        t && (r.set("format", "webp"), r.set("quality", "80"));
        let p = r.toString();
        return ""
          .concat("https://cdn-resource.zenlove.me".replace(/\/+$/, ""), "/")
          .concat(a)
          .concat(p ? "?".concat(p) : "");
      }
      function m() {
        for (var e = arguments.length, t = Array(e), a = 0; a < e; a++)
          t[a] = arguments[a];
        return (0, i.m6)((0, n.W)(t));
      }
      let h = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return p(e, t);
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
          a = e.getMonth(),
          n = e.getDate(),
          i = new Date(t, a, 1).getDay(),
          r = 0 === i ? 6 : i - 1,
          s = new Date(t, a + 1, 0).getDate(),
          o = [];
        for (let e = 0; e < r; e++) o.push({ type: "empty" });
        for (let e = 1; e <= s; e++) {
          let t = e === n;
          o.push({ type: "day", date: e, isSelected: t });
        }
        return o;
      }
    },
    76052: function () {},
  },
]);
