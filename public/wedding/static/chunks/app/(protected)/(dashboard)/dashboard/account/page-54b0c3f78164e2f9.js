(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4041],
  {
    43512: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 91077));
    },
    91077: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return E;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(39486),
        l = n(19878),
        o = n(34029),
        s = n(82867),
        c = n(96931),
        u = n(50742),
        d = n(91652),
        h = n(89970),
        m = n(88589),
        f = n(7408),
        p = n(27648),
        g = n(80605),
        v = n(53743),
        w = n(22574);
      function x(e) {
        let {
            visible: t,
            onCancel: n,
            onConfirm: r,
            imageFile: l,
            aspect: s = 1,
            isUploading: c = !1,
          } = e,
          [d, h] = (0, i.useState)(void 0),
          [m, f] = (0, i.useState)(!1),
          p = (0, i.useRef)(null),
          [g, x] = (0, i.useState)(!1),
          [y, b] = (0, i.useState)(null),
          j = (0, i.useCallback)(async () => {
            if (!p.current || !d) throw Error("No crop data available");
            let e = p.current,
              t = document.createElement("canvas"),
              n = t.getContext("2d");
            if (!n) throw Error("No 2d context");
            let a = e.naturalWidth / e.width,
              i = e.naturalHeight / e.height;
            return (
              (t.width = d.width),
              (t.height = d.height),
              n.drawImage(
                e,
                d.x * a,
                d.y * i,
                d.width * a,
                d.height * i,
                0,
                0,
                d.width,
                d.height
              ),
              new Promise((e) => {
                t.toBlob((t) => {
                  if (!t) throw Error("Canvas is empty");
                  e(new File([t], "avatar.png", { type: "image/png" }));
                }, "image/png");
              })
            );
          }, [d]),
          P = async () => {
            if (!d) {
              o.ZP.error("Vui l\xf2ng chọn v\xf9ng ảnh để crop");
              return;
            }
            f(!0);
            try {
              let e = await j();
              r(e), y && (URL.revokeObjectURL(y), b(null));
            } catch (e) {
              console.error("Crop error:", e),
                o.ZP.error("C\xf3 lỗi xảy ra khi xử l\xfd ảnh");
            } finally {
              f(!1);
            }
          },
          N = () => {
            h(void 0), x(!1), y && (URL.revokeObjectURL(y), b(null)), n();
          };
        return (
          (0, i.useEffect)(() => {
            t && l
              ? (h(void 0),
                x(!1),
                y && URL.revokeObjectURL(y),
                b(URL.createObjectURL(l)))
              : !t && y && (URL.revokeObjectURL(y), b(null));
          }, [t, null == l ? void 0 : l.name, null == l ? void 0 : l.size]),
          (0, i.useEffect)(
            () => () => {
              y && URL.revokeObjectURL(y);
            },
            []
          ),
          (0, a.jsx)(v.default, {
            title: "Crop ảnh đại diện",
            open: t,
            onCancel: N,
            footer: [
              (0, a.jsx)(u.ZP, { onClick: N, children: "Hủy" }, "cancel"),
              (0, a.jsx)(
                u.ZP,
                {
                  type: "primary",
                  loading: m || c,
                  onClick: P,
                  disabled: !d || c,
                  children: c
                    ? "Đang upload..."
                    : m
                    ? "Đang xử l\xfd..."
                    : "X\xe1c nhận",
                },
                "confirm"
              ),
            ],
            width: 600,
            destroyOnHidden: !0,
            children: (0, a.jsxs)("div", {
              className: "flex flex-col items-center gap-4",
              children: [
                (0, a.jsxs)("div", {
                  className: "text-sm text-gray-600 mb-2",
                  children: [
                    "K\xe9o để chọn v\xf9ng ảnh muốn sử dụng l\xe0m ảnh đại diện",
                    !g &&
                      (0, a.jsx)("span", {
                        className: "block text-xs mt-1",
                        children: "Đang tải ảnh...",
                      }),
                    (0, a.jsx)("span", {
                      className: "block text-xs mt-1 text-blue-600",
                      children: "Ảnh sẽ được upload tự động sau khi crop",
                    }),
                  ],
                }),
                l &&
                  y &&
                  (0, a.jsx)(w.ZP, {
                    crop: d,
                    onChange: (e) => {
                      if (e && p.current) {
                        let { width: t, height: n } = p.current;
                        h({
                          ...e,
                          x: Math.max(0, Math.min(e.x, t - e.width)),
                          y: Math.max(0, Math.min(e.y, n - e.height)),
                          width: Math.min(e.width, t - e.x),
                          height: Math.min(e.height, n - e.y),
                        });
                      } else h(e);
                    },
                    aspect: 1,
                    circularCrop: !0,
                    className: "w-full",
                    children: (0, a.jsx)("img", {
                      ref: p,
                      src: y,
                      alt: "Crop preview",
                      style: { maxHeight: "70vh" },
                      onLoad: (e) => {
                        let { width: t, height: n } = e.currentTarget,
                          a = Math.min(0.8 * Math.min(t, n), t, n),
                          i = Math.max(0, Math.min((t - a) / 2, t - a)),
                          r = Math.max(0, Math.min((n - a) / 2, n - a));
                        h({
                          aspect: 1,
                          unit: "px",
                          width: a,
                          height: a,
                          x: i,
                          y: r,
                        }),
                          x(!0);
                      },
                    }),
                  }),
              ],
            }),
          })
        );
      }
      n(83814);
      var y = n(73630),
        b = n(50828),
        j = n(71096),
        P = n.n(j),
        N = n(10032),
        k = n(85839),
        S = n(33818);
      let { Title: Z, Text: C } = r.default,
        I = (0, S.g)("https://api.zenlove.me");
      function E() {
        var e, t, n, r, v;
        let [w] = l.Z.useForm(),
          [j, S] = (0, i.useState)(!1),
          [Z, E] = (0, i.useState)(""),
          [M, O] = (0, i.useState)(!1),
          [U, D] = (0, i.useState)(null),
          { data: T } = (0, b.Pi)(),
          _ = (0, b.Io)(),
          R =
            (null == T ? void 0 : T.provider) !== "local" &&
            !(null == T ? void 0 : T.hasPassword);
        (0, i.useEffect)(() => {
          T &&
            (w.setFieldsValue({
              email: T.email || "",
              name: T.name || "",
              phone: T.phone || "",
              dateOfBirth: T.dateOfBirth ? P()(T.dateOfBirth) : null,
              bio: T.bio || "",
            }),
            (null == T ? void 0 : T.avatar)
              ? E(
                  (null == T ? void 0 : T.avatar)
                    ? (null == T
                        ? void 0
                        : T.avatar.includes("googleusercontent.com")) ||
                      (null == T ? void 0 : T.avatar.includes("fbsbx.com"))
                      ? null == T
                        ? void 0
                        : T.avatar
                      : (0, y.$B)(null == T ? void 0 : T.avatar, !0)
                    : "/assets/images/avatar-default.png"
                )
              : E(""));
        }, [T, w]);
        let F = async (e) => {
            if (T) {
              S(!0);
              try {
                let { name: t, dateOfBirth: n, bio: a, phone: i } = e,
                  r = {
                    name: t || "",
                    dateOfBirth: n ? n.format("YYYY-MM-DD") : "",
                    bio: a || "",
                    phone: i || "",
                  };
                await _.mutate(r, {
                  onSuccess: () => {
                    o.ZP.success("Cập nhật th\xf4ng tin th\xe0nh c\xf4ng");
                  },
                  onError: (e) => {
                    o.ZP.error(
                      (null == e ? void 0 : e.message) ||
                        "Cập nhật th\xf4ng tin thất bại"
                    );
                  },
                });
              } catch (e) {
                o.ZP.error(
                  (null == e ? void 0 : e.message) || "Cập nhật thất bại"
                );
              } finally {
                S(!1);
              }
            }
          },
          q = async (e) => {
            O(!1), D(null), S(!0);
            try {
              var t;
              let n = new FormData();
              n.append("file", e);
              let a = await I("/v1/users/avatar", { method: "PATCH", body: n });
              if (null == a ? void 0 : a.error)
                throw Error(
                  (null == a ? void 0 : a.message) || "Upload failed"
                );
              (null == a
                ? void 0
                : null === (t = a.data) || void 0 === t
                ? void 0
                : t.key) && E((0, y.$B)(a.data.key)),
                o.ZP.success("Cập nhật ảnh đại diện th\xe0nh c\xf4ng!");
            } catch (e) {
              o.ZP.error(
                e instanceof Error
                  ? e.message
                  : "Cập nhật ảnh đại diện thất bại"
              );
            } finally {
              S(!1);
            }
          };
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)("h1", {
              className:
                "text-2xl text-gray-900 mb-2 flex items-center gap-1 mt-0",
              children: "C\xe0i đặt t\xe0i khoản",
            }),
            (0, a.jsx)(c.Z, {
              children: (0, a.jsxs)("div", {
                className: "flex flex-col md:flex-row md:items-center gap-4",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex-1 text-center md:text-left",
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "flex items-center justify-center md:justify-start gap-2 mb-2",
                        children: [
                          (0, a.jsx)(k.Z, {
                            weight: "BoldDuotone",
                            className: "w-6 h-6 md:w-5 md:h-5",
                            style: {
                              color:
                                (null == T
                                  ? void 0
                                  : null === (e = T.plan) || void 0 === e
                                  ? void 0
                                  : e.code) === "PREMIUM" ||
                                (null == T
                                  ? void 0
                                  : null === (t = T.plan) || void 0 === t
                                  ? void 0
                                  : t.code) === "BASIC"
                                  ? "#faad14"
                                  : "#333333",
                            },
                          }),
                          (0, a.jsx)("h2", {
                            className: "text-lg text-gray-900 m-0",
                            children: "Quản l\xfd Plan",
                          }),
                        ],
                      }),
                      (0, a.jsxs)(C, {
                        type: "secondary",
                        className: "block font-bold",
                        children: [
                          (0, a.jsx)("strong", {
                            style: {
                              color:
                                (null == T
                                  ? void 0
                                  : null === (n = T.plan) || void 0 === n
                                  ? void 0
                                  : n.code) === "PREMIUM" ||
                                (null == T
                                  ? void 0
                                  : null === (r = T.plan) || void 0 === r
                                  ? void 0
                                  : r.code) === "BASIC"
                                  ? "#faad14"
                                  : "#333333",
                            },
                            children:
                              null == T
                                ? void 0
                                : null === (v = T.plan) || void 0 === v
                                ? void 0
                                : v.code,
                          }),
                          " ",
                          "- Quản l\xfd g\xf3i dịch vụ v\xe0 n\xe2ng cấp",
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "w-full md:w-auto",
                    children: (0, a.jsx)(p.default, {
                      href: "/pricing",
                      children: (0, a.jsx)(u.ZP, {
                        type: "primary",
                        icon: (0, a.jsx)(k.Z, { weight: "Linear" }),
                        className: "w-full md:w-auto",
                        size: "large",
                        children: "N\xe2ng cấp",
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-6 mt-4",
              children: [
                (0, a.jsx)(c.Z, {
                  title: "Th\xf4ng tin c\xe1 nh\xe2n",
                  loading: !T,
                  children: (0, a.jsxs)(l.Z, {
                    layout: "vertical",
                    form: w,
                    onFinish: F,
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center flex-col gap-4 mb-4",
                        children: [
                          (0, a.jsx)(d.Z, {
                            size: 150,
                            src: Z || "/assets/images/avatar-default.png",
                          }),
                          (0, a.jsx)(s.default, {
                            maxCount: 1,
                            beforeUpload: (e) =>
                              [
                                "image/jpeg",
                                "image/jpg",
                                "image/png",
                                "image/webp",
                              ].includes(e.type)
                                ? e.size > 2097152
                                  ? (o.ZP.error("Ảnh vượt qu\xe1 2MB"),
                                    s.default.LIST_IGNORE)
                                  : (D(e), O(!0), !1)
                                : (o.ZP.error("Chỉ chấp nhận ảnh JPG/PNG/WebP"),
                                  s.default.LIST_IGNORE),
                            showUploadList: !1,
                            accept: "image/png,image/jpeg,image/webp",
                            children: (0, a.jsx)(h.Z, {
                              trigger: ["hover"],
                              title: "Dung lượng ≤ 2MB, định dạng JPG/PNG/WebP",
                              children: (0, a.jsx)(u.ZP, {
                                icon: (0, a.jsx)(N.Z, { weight: "Linear" }),
                                children: "Chọn ảnh",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)(l.Z.Item, {
                        name: "email",
                        label: "Email",
                        className: "!mb-3",
                        children: (0, a.jsx)(m.default, {
                          disabled: !0,
                          placeholder: "Email",
                        }),
                      }),
                      (0, a.jsx)(l.Z.Item, {
                        name: "name",
                        label: "T\xean hiển thị",
                        rules: [
                          {
                            required: !0,
                            message: "Vui l\xf2ng nhập t\xean hiển thị",
                          },
                        ],
                        className: "!mb-3",
                        children: (0, a.jsx)(m.default, {
                          placeholder: "T\xean hiển thị",
                        }),
                      }),
                      (0, a.jsx)(l.Z.Item, {
                        name: "phone",
                        label: "Số điện thoại",
                        className: "!mb-3",
                        children: (0, a.jsx)(m.default, {
                          placeholder: "Số điện thoại",
                        }),
                      }),
                      (0, a.jsx)(l.Z.Item, {
                        name: "dateOfBirth",
                        label: "Ng\xe0y sinh",
                        className: "!mb-3",
                        children: (0, a.jsx)(f.default, {
                          className: "w-full",
                          format: "YYYY-MM-DD",
                        }),
                      }),
                      (0, a.jsx)(l.Z.Item, {
                        name: "bio",
                        label: "Bio",
                        className: "!mb-3",
                        children: (0, a.jsx)(m.default.TextArea, {
                          placeholder: "Bio",
                        }),
                      }),
                      (0, a.jsx)(u.ZP, {
                        type: "primary",
                        htmlType: "submit",
                        loading: j,
                        children: "Cập nhật th\xf4ng tin",
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(c.Z, {
                  title: R ? "Thiết lập mật khẩu" : "Đổi mật khẩu",
                  loading: !T,
                  children: (0, a.jsx)(L, { passwordEnabled: !R, user: T }),
                }),
              ],
            }),
            (0, a.jsx)(x, {
              visible: M,
              onCancel: () => {
                O(!1), D(null);
              },
              onConfirm: q,
              imageFile: U,
              aspect: 1,
              isUploading: j,
            }),
            (0, a.jsx)("div", {
              className: "md:hidden mt-6 pb-8",
              children: (0, a.jsx)("button", {
                type: "button",
                onClick: async () => {
                  await (0, g.signOut)({ redirect: !1 }),
                    o.ZP.success("Đăng xuất th\xe0nh c\xf4ng"),
                    (window.location.href = "/");
                },
                className:
                  "w-full py-3 px-4 rounded-xl font-bold text-[#DD3333] bg-white border border-[#F6D0D0] hover:bg-[#FEF2F2] active:opacity-90 transition-colors",
                children: "Đăng xuất",
              }),
            }),
          ],
        });
      }
      function L(e) {
        let { passwordEnabled: t, user: n } = e,
          [i] = l.Z.useForm(),
          r = (0, b.Io)();
        return (0, a.jsxs)(l.Z, {
          layout: "vertical",
          form: i,
          onFinish: (e) => {
            let {
              currentPassword: a,
              newPassword: l,
              confirmPassword: s,
            } = e || {};
            if (l !== s) {
              o.ZP.error("Mật khẩu x\xe1c nhận kh\xf4ng khớp");
              return;
            }
            let c = {
              name: (null == n ? void 0 : n.name) || "",
              newPassword: l,
            };
            t && (c.currentPassword = a),
              r.mutate(c, {
                onSuccess: () => {
                  o.ZP.success(
                    t
                      ? "Cập nhật mật khẩu th\xe0nh c\xf4ng"
                      : "Thiết lập mật khẩu th\xe0nh c\xf4ng"
                  ),
                    i.resetFields();
                },
                onError: (e) => {
                  let t =
                    e instanceof Error
                      ? e.message
                      : "Cập nhật mật khẩu thất bại";
                  o.ZP.error(t);
                },
              });
          },
          children: [
            t &&
              (0, a.jsx)(l.Z.Item, {
                name: "currentPassword",
                label: "Mật khẩu hiện tại",
                rules: [
                  {
                    required: !0,
                    message: "Vui l\xf2ng nhập mật khẩu hiện tại",
                  },
                ],
                className: "!mb-3",
                children: (0, a.jsx)(m.default.Password, {
                  placeholder: "Mật khẩu hiện tại",
                }),
              }),
            (0, a.jsx)(l.Z.Item, {
              name: "newPassword",
              label: "Mật khẩu mới",
              rules: [
                { required: !0, message: "Vui l\xf2ng nhập mật khẩu mới" },
                {
                  pattern:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "\xcdt nhất 8 k\xfd tự, 1 chữ hoa, 1 k\xfd tự đặc biệt, 1 số",
                },
              ],
              className: "!mb-3",
              children: (0, a.jsx)(m.default.Password, {
                placeholder: "Mật khẩu mới",
              }),
            }),
            (0, a.jsx)(l.Z.Item, {
              name: "confirmPassword",
              label: "X\xe1c nhận mật khẩu mới",
              dependencies: ["newPassword"],
              rules: [
                { required: !0, message: "Vui l\xf2ng x\xe1c nhận mật khẩu" },
              ],
              className: "!mb-3",
              children: (0, a.jsx)(m.default.Password, {
                placeholder: "X\xe1c nhận mật khẩu mới",
              }),
            }),
            (0, a.jsx)(u.ZP, {
              type: "primary",
              htmlType: "submit",
              className: "w-full",
              loading: r.isPending,
              children: t ? "Cập nhật mật khẩu" : "Thiết lập mật khẩu",
            }),
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
          return c;
        },
      });
      var a = n(71632),
        i = n(29827),
        r = n(21770),
        l = n(80605);
      let o = (0, n(33818).g)("https://api.zenlove.me");
      function s() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { status: t } = (0, l.useSession)();
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
        let { update: e } = (0, l.useSession)(),
          t = (0, i.NL)();
        return (0, r.D)({
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
      function h() {
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
    33818: function (e, t, n) {
      "use strict";
      let a, i;
      n.d(t, {
        g: function () {
          return u;
        },
      });
      var r = n(83464),
        l = n(82957).Buffer;
      let o = null;
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
                      let a = e.charCodeAt(n).toString(16).padStart(2, "0");
                      t += "%" + a;
                    }
                    return decodeURIComponent(t);
                  }
                  return l.from(n, "base64").toString("utf-8");
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
          : (o ||
              (o = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    r = null == t ? void 0 : t.accessToken;
                  return (a = r), (i = s(r) || Date.now() + 36e5), r;
                } catch (e) {
                  (a = void 0), (i = void 0);
                  return;
                } finally {
                  o = null;
                }
              })()),
            o);
      }
      function u(e) {
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
                var r, l, o;
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
                      l = null == r ? void 0 : r.accessToken,
                      o = null == r ? void 0 : r.error;
                    if (l && !o && l !== a)
                      return (
                        (a = l),
                        (i = s(l) || Date.now() + 3e5),
                        c.headers &&
                          (c.headers.Authorization = "Bearer ".concat(l)),
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
                    (null === (o = e.response) || void 0 === o
                      ? void 0
                      : null === (l = o.data) || void 0 === l
                      ? void 0
                      : l.message) ||
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
          return r;
        },
        Yb: function () {
          return p;
        },
        aW: function () {
          return g;
        },
        cn: function () {
          return f;
        },
        sZ: function () {
          return v;
        },
        ud: function () {
          return m;
        },
      });
      var a = n(61994),
        i = n(53335);
      n(25566);
      let r = () => "https://zenlove.me",
        l = new Set(["crop", "width", "height", "fit", "format", "quality"]);
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
      function s(e) {
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
      function h(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = "https://cdn.zenlove.me";
        n || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [a, i] = e.split("?"),
          r = new URLSearchParams(null != i ? i : ""),
          h = new URLSearchParams();
        for (let [e, t] of r.entries()) {
          if (!l.has(e)) {
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
              (n = c(t)) ||
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
        let m = h.toString();
        return ""
          .concat(n.replace(/\/+$/, ""), "/")
          .concat(a)
          .concat(m ? "?".concat(m) : "");
      }
      function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, a] = e.split("?"),
          i = new URLSearchParams(null != a ? a : ""),
          r = new URLSearchParams();
        for (let [e, t] of i.entries()) {
          if (!l.has(e)) {
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
              (n = c(t)) ||
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
          n && r.set(e, t);
        }
        t && (r.set("format", "webp"), r.set("quality", "80"));
        let h = r.toString();
        return ""
          .concat("https://cdn-resource.zenlove.me".replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(h ? "?".concat(h) : "");
      }
      function f() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, i.m6)((0, a.W)(t));
      }
      let p = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return h(e, t);
        },
        g = {
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
      function v(e) {
        let t = e.getFullYear(),
          n = e.getMonth(),
          a = e.getDate(),
          i = new Date(t, n, 1).getDay(),
          r = 0 === i ? 6 : i - 1,
          l = new Date(t, n + 1, 0).getDate(),
          o = [];
        for (let e = 0; e < r; e++) o.push({ type: "empty" });
        for (let e = 1; e <= l; e++) {
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
        5558, 9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763, 7405, 7897, 2039,
        6815, 9816, 8640, 5831, 5827, 8589, 639, 9878, 9486, 2972, 3335, 605,
        2752, 2867, 7408, 9867, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 43512));
      }
    ),
      (_N_E = e.O());
  },
]);
