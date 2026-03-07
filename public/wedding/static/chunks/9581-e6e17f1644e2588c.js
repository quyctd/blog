"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9581],
  {
    4835: function (n, e, t) {
      t.d(e, {
        default: function () {
          return p;
        },
      });
      var i = t(57437),
        a = t(2265),
        s = t(27648),
        r = t(73630),
        o = t(48580),
        l = t(11840),
        c = t(91257),
        h = t(80605),
        d = t(65091),
        u = t(50337);
      function m(n) {
        let {
          href: e,
          label: t,
          isMenuOpen: a,
          setIsMenuOpen: o,
          className: l,
          ref: c,
        } = n;
        return (0, i.jsx)(s.default, {
          href: e,
          className: (0, r.cn)(
            "block text-zen-black hover:text-zen-primary py-3 px-4 text-base font-medium transition-all duration-200",
            a ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
            l
          ),
          style: { transitionDelay: a ? "100ms" : "0ms" },
          onClick: () => o(!1),
          children: t,
        });
      }
      var g = t(32768);
      function p() {
        let { status: n } = (0, h.useSession)(),
          [e, t] = (0, a.useState)(!1),
          [p, f] = (0, a.useState)(!1),
          x = (0, a.useRef)(null),
          v = (0, a.useRef)(null),
          b = (0, a.useRef)(null),
          w = (0, a.useRef)(null);
        (0, a.useEffect)(() => {
          let n = x.current;
          if (!n) return;
          let e = () => {
            var e;
            let t = window.visualViewport,
              i =
                null !== (e = null == t ? void 0 : t.offsetTop) && void 0 !== e
                  ? e
                  : 0;
            n.style.setProperty(
              "--vv-offset-top",
              "".concat(Math.max(0, Math.round(i)), "px")
            );
          };
          e();
          let t = window.visualViewport;
          return (
            null == t || t.addEventListener("resize", e),
            null == t || t.addEventListener("scroll", e),
            window.addEventListener("orientationchange", e),
            () => {
              null == t || t.removeEventListener("resize", e),
                null == t || t.removeEventListener("scroll", e),
                window.removeEventListener("orientationchange", e);
            }
          );
        }, []),
          (0, a.useEffect)(() => {
            let n = () => f(window.scrollY > 50);
            return (
              window.addEventListener("scroll", n),
              () => window.removeEventListener("scroll", n)
            );
          }, []),
          (0, a.useEffect)(() => {
            if (e)
              (document.body.style.overflow = "hidden"),
                setTimeout(() => {
                  var n;
                  null === (n = w.current) || void 0 === n || n.focus();
                }, 60);
            else {
              var n;
              (document.body.style.overflow = "unset"),
                null === (n = v.current) || void 0 === n || n.focus();
            }
            return () => {
              document.body.style.overflow = "unset";
            };
          }, [e]),
          (0, a.useEffect)(() => {
            if (!e) return;
            let n = (n) => {
              if (("Escape" === n.key && t(!1), "Tab" === n.key)) {
                let e = b.current;
                if (!e) return;
                let t = e.querySelectorAll(
                  'a, button, input, [tabindex]:not([tabindex="-1"])'
                );
                if (!t.length) return;
                let i = t[0],
                  a = t[t.length - 1];
                n.shiftKey && document.activeElement === i
                  ? (n.preventDefault(), a.focus())
                  : n.shiftKey ||
                    document.activeElement !== a ||
                    (n.preventDefault(), i.focus());
              }
            };
            return (
              window.addEventListener("keydown", n),
              () => window.removeEventListener("keydown", n)
            );
          }, [e]);
        let j = [
          { label: "Trang chủ", href: "/", exact: !0 },
          { label: "Mẫu thiệp", href: "/templates", exact: !0 },
          {
            label: "Thiệp đ\xe3 tạo",
            href: "/thiep-online/khach-hang",
            exact: !0,
          },
          { label: "G\xf3i dịch vụ", href: "/pricing", exact: !0 },
          { label: "Li\xean hệ", href: "/contact", exact: !0 },
        ];
        return (0, i.jsx)(i.Fragment, {
          children: (0, i.jsx)("header", {
            ref: x,
            className: "fixed left-0 right-0 z-[999] px-2.5 sm:px-6 lg:px-8",
            role: "navigation",
            style: {
              top: "calc(var(--vv-offset-top, 0px) + env(safe-area-inset-top, 0px))",
            },
            children: (0, i.jsxs)("div", {
              className: (0, r.cn)(
                "mx-auto transition-all duration-700 mt-2 ",
                p ? "max-w-5xl" : "max-w-7xl"
              ),
              children: [
                (0, i.jsxs)("div", {
                  className: (0, r.cn)(
                    "flex justify-between items-center transition-all duration-300 h-14 rounded-full border bg-white/80 backdrop-blur border-[#e6ced4] shadow-[0_12px_35px_rgba(16,24,40,0.08)] px-4 md:px-6",
                    " "
                  ),
                  children: [
                    (0, i.jsxs)("div", {
                      className:
                        "hidden lg:flex w-full justify-between items-center",
                      children: [
                        (0, i.jsx)("div", {
                          className: "flex-shrink-0",
                          children: (0, i.jsx)(l.Z, {}),
                        }),
                        (0, i.jsx)("nav", {
                          "aria-label": "Main navigation",
                          children: (0, i.jsx)("ul", {
                            className: "flex space-x-8",
                            children: j.map((n) =>
                              (0, i.jsx)(
                                "li",
                                {
                                  children: (0, i.jsx)(c.Z, {
                                    href: n.href,
                                    exact: n.exact,
                                    className:
                                      "text-sm font-medium text-zen-black hover:text-zen-primary hover:font-bold transition-all duration-200 hover:scale-105",
                                    activeClassName:
                                      "text-zen-primary font-bold scale-105",
                                    title: n.label,
                                    children: n.label,
                                  }),
                                },
                                n.href
                              )
                            ),
                          }),
                        }),
                        (0, i.jsx)("div", {
                          className: "flex items-center space-x-4",
                          children:
                            "loading" === n
                              ? (0, i.jsx)(u.Z.Avatar, { active: !0, size: 40 })
                              : "authenticated" === n
                              ? (0, i.jsx)(d.Z, {})
                              : (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsx)(s.default, {
                                      href: "/login",
                                      "aria-label": "Đăng nhập",
                                      title: "Đăng nhập",
                                      id: "login-btn-desktop",
                                      className:
                                        "px-3 py-2 text-sm font-medium text-zen-black hover:text-zen-primary transition-all duration-300 hover:scale-105",
                                      children: "Đăng nhập",
                                    }),
                                    (0, i.jsx)(s.default, {
                                      href: "/register",
                                      "aria-label": "Đăng k\xfd",
                                      title: "Đăng k\xfd",
                                      id: "register-btn-desktop",
                                      className:
                                        "bg-zen-primary hover:bg-red-600 text-white hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg",
                                      children: "Đăng k\xfd",
                                    }),
                                  ],
                                }),
                        }),
                      ],
                    }),
                    (0, i.jsxs)("div", {
                      className:
                        "lg:hidden flex w-full justify-between items-center",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "flex items-center space-x-2.5 md:space-x-4",
                          children: [
                            (0, i.jsx)("button", {
                              ref: v,
                              onClick: () => t((n) => !n),
                              className: (0, r.cn)(
                                "focus:outline-none text-zen-black hover:text-zen-primary transition-colors w-10 h-10 min-h-10 bg-gray-100 rounded-full flex justify-center items-center"
                              ),
                              "aria-label": "Mở menu",
                              "aria-expanded": e,
                              "aria-controls": "mobile-menu",
                              children: (0, i.jsx)(o.Z, {
                                weight: "LineDuotone",
                                className: "h-6 w-6",
                              }),
                            }),
                            (0, i.jsx)(l.Z, {}),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: "flex items-center",
                          children:
                            "loading" === n
                              ? (0, i.jsx)(u.Z.Avatar, { active: !0, size: 32 })
                              : "authenticated" === n
                              ? (0, i.jsx)(d.Z, {})
                              : (0, i.jsx)(s.default, {
                                  href: "/login",
                                  id: "login-btn-mobile",
                                  className:
                                    "px-3 py-2 text-sm font-medium text-zen-black hover:text-zen-primary transition-colors",
                                  children: "Đăng nhập",
                                }),
                        }),
                      ],
                    }),
                  ],
                }),
                e &&
                  (0, i.jsxs)("div", {
                    className:
                      "lg:hidden fixed inset-0 z-[99999] w-screen h-screen isolate",
                    "aria-hidden": e ? "false" : "true",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "fixed inset-0 bg-black bg-opacity-50 transition-all duration-300 z-0 w-screen h-screen",
                        onClick: () => t(!1),
                      }),
                      (0, i.jsx)("aside", {
                        id: "mobile-menu",
                        ref: b,
                        className:
                          "fixed top-0 left-0 h-screen w-80 max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-out animate-slide-in z-10 border-r border-gray-200 isolate",
                        role: "dialog",
                        "aria-modal": "true",
                        "aria-label": "Menu ch\xednh",
                        children: (0, i.jsxs)("div", {
                          className: "flex flex-col h-full",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "flex items-center justify-between py-2.5 px-4 border-b",
                              children: [
                                (0, i.jsx)(l.Z, {}),
                                (0, i.jsx)("button", {
                                  onClick: () => t(!1),
                                  className:
                                    "text-gray-400 hover:text-gray-600 transition-colors w-10 h-10 min-h-10 bg-gray-100 rounded-full flex justify-center items-center",
                                  "aria-label": "Đ\xf3ng menu",
                                  children: (0, i.jsx)(g.bjh, {
                                    className: "h-5 w-5",
                                  }),
                                }),
                              ],
                            }),
                            (0, i.jsx)("nav", {
                              className: "flex-1 pt-2",
                              "aria-label": "Menu ch\xednh (di động)",
                              children: (0, i.jsx)("ul", {
                                className: "space-y-1 px-4",
                                children: j.map((n, a) =>
                                  (0, i.jsx)(
                                    "li",
                                    {
                                      children: (0, i.jsx)(m, {
                                        href: n.href,
                                        label: n.label,
                                        isMenuOpen: e,
                                        setIsMenuOpen: t,
                                        className:
                                          "font-semibold block w-full py-3",
                                        ref: 0 === a ? w : void 0,
                                      }),
                                    },
                                    n.href
                                  )
                                ),
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: (0, r.cn)(
                                "py-2.5 px-4 border-t space-y-3 transition-all duration-200"
                              ),
                              children:
                                "loading" === n
                                  ? (0, i.jsx)(u.Z.Avatar, {
                                      active: !0,
                                      size: 40,
                                    })
                                  : "authenticated" === n
                                  ? (0, i.jsx)(d.Z, { showFull: !0 })
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(s.default, {
                                          href: "/login",
                                          id: "login-btn-sidebar",
                                          className:
                                            "block w-full text-center text-zen-black hover:text-zen-primary py-3 text-base font-medium transition-colors",
                                          onClick: () => t(!1),
                                          children: "Đăng nhập",
                                        }),
                                        (0, i.jsx)(s.default, {
                                          href: "/register",
                                          id: "register-btn-sidebar",
                                          className:
                                            "block w-full text-center bg-zen-primary hover:bg-red-600 text-white py-3 rounded-lg text-base font-medium transition-colors",
                                          onClick: () => t(!1),
                                          children: "Đăng k\xfd",
                                        }),
                                      ],
                                    }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              ],
            }),
          }),
        });
      }
    },
    65091: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return b;
        },
      });
      var i = t(57437),
        a = t(34577),
        s = t(34029),
        r = t(50337),
        o = t(91652),
        l = t(83410),
        c = t(35713),
        h = t(27648);
      t(2265);
      var d = t(73630),
        u = t(80605),
        m = t(99376),
        g = t(85839),
        p = t(25394),
        f = t(24198),
        x = t(34169),
        v = t(87044);
      function b(n) {
        let { showFull: e = !1 } = n,
          t = (0, a.a)("(min-width: 1024px)"),
          b = (0, m.useRouter)(),
          { data: w, status: j } = (0, u.useSession)(),
          k = null == w ? void 0 : w.user,
          y = async () => {
            await (0, u.signOut)({ redirect: !1 }),
              s.ZP.success("Đăng xuất th\xe0nh c\xf4ng"),
              b.push("/"),
              b.refresh();
          };
        if ("loading" === j)
          return (0, i.jsx)(r.Z.Avatar, { active: !0, size: 40 });
        let N = (null == k ? void 0 : k.name) || "Guest",
          C = N.length > 18 ? "".concat(N.slice(0, 18), "…") : N,
          S = (null == k ? void 0 : k.avatar)
            ? (null == k
                ? void 0
                : k.avatar.includes("googleusercontent.com")) ||
              (null == k ? void 0 : k.avatar.includes("fbsbx.com"))
              ? null == k
                ? void 0
                : k.avatar
              : (0, d.$B)(null == k ? void 0 : k.avatar, !0)
            : "/assets/images/avatar-default.png",
          z = [
            {
              key: "header",
              disabled: !0,
              label: (0, i.jsxs)("div", {
                className: "flex items-center justify-center gap-2",
                children: [
                  (0, i.jsx)(o.Z, {
                    src: S,
                    size: 50,
                    alt: (null == k ? void 0 : k.name) || "User Avatar",
                  }),
                  (0, i.jsxs)("div", {
                    className: "ml-2 min-w-[150px]",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "font-bold text-xl text-black truncate flex items-center gap-2",
                        title: N,
                        children: [
                          (null == k ? void 0 : k.plan) === "BASIC" ||
                          (null == k ? void 0 : k.plan) === "PREMIUM"
                            ? (0, i.jsx)(g.Z, {
                                weight: "BoldDuotone",
                                size: 24,
                                color: "#faad14",
                              })
                            : "",
                          C,
                        ],
                      }),
                      (0, i.jsx)("div", {
                        className: "text-xs text-black-500",
                        children: (null == k ? void 0 : k.email) || "no email",
                      }),
                    ],
                  }),
                ],
              }),
            },
            { type: "divider" },
            {
              key: "dashboard",
              label: (0, i.jsx)(h.default, {
                href: "/dashboard",
                "aria-label": "Trang tổng quan",
                title: "Trang tổng quan",
                children: (0, i.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, i.jsx)(p.Z, { weight: "Linear" }),
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
              label: (0, i.jsx)(h.default, {
                href: "/favorites",
                "aria-label": "Mẫu thiệp y\xeau th\xedch",
                title: "Mẫu thiệp y\xeau th\xedch",
                children: (0, i.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, i.jsx)(f.Z, { weight: "Linear" }),
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
              label: (0, i.jsx)(h.default, {
                href: "/dashboard/account",
                "aria-label": "C\xe0i đặt t\xe0i khoản",
                title: "C\xe0i đặt t\xe0i khoản",
                children: (0, i.jsxs)("span", {
                  className: "flex items-center",
                  children: [
                    (0, i.jsx)(x.Z, { weight: "Linear" }),
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
          children: (0, i.jsx)(l.Z, {
            trigger: t ? ["hover"] : ["click"],
            menu: {
              items: z,
              onClick: (n) => {
                let { key: e } = n;
                "logout" === e && y();
              },
            },
            children: e
              ? (0, i.jsxs)("div", {
                  className: "flex items-center justify-center gap-1",
                  children: [
                    (0, i.jsx)(c.Z, {
                      size: "small",
                      color: "gold",
                      count:
                        (null == k ? void 0 : k.plan) === "PREMIUM" ||
                        (null == k ? void 0 : k.plan) === "BASIC"
                          ? (0, i.jsx)(g.Z, {
                              weight: "BoldDuotone",
                              size: 22,
                              color: "#faad14",
                            })
                          : "",
                      offset: [-2, 2],
                      className: "!border rounded-full",
                      children: (0, i.jsx)(o.Z, { src: S, size: 50 }),
                    }),
                    (0, i.jsxs)("div", {
                      className: "ml-2 min-w-[150px]",
                      children: [
                        (0, i.jsx)("div", {
                          className:
                            "font-bold text-base text-black truncate flex items-center gap-2",
                          title: N,
                          children: C,
                        }),
                        (0, i.jsx)("div", {
                          className: "text-xs text-black-500",
                          children:
                            (null == k ? void 0 : k.email) || "no email",
                        }),
                      ],
                    }),
                  ],
                })
              : (0, i.jsx)(c.Z, {
                  size: "small",
                  color: "gold",
                  count:
                    (null == k ? void 0 : k.plan) === "PREMIUM" ||
                    (null == k ? void 0 : k.plan) === "BASIC"
                      ? (0, i.jsx)(g.Z, {
                          weight: "BoldDuotone",
                          size: 22,
                          color: "#faad14",
                        })
                      : "",
                  offset: [-2, 2],
                  className: "!border rounded-full",
                  children: (0, i.jsx)(o.Z, { src: S, size: 40 }),
                }),
          }),
        });
      }
    },
    27746: function (n, e, t) {
      t.d(e, {
        default: function () {
          return p;
        },
      });
      var i = t(57437),
        a = t(2265),
        s = t(53743),
        r = t(50742),
        o = t(73630),
        l = t(30272),
        c = t(64506),
        h = t(72142),
        d = t(35419),
        u = t(14490),
        m = t(61273);
      if ("undefined" != typeof document) {
        let n = document.createElement("style");
        (n.textContent =
          '\n  @keyframes assistant-pulse {\n    0%, 100% {\n      transform: scale(1);\n      box-shadow: 0 0 0 0 rgba(229, 65, 83, 0.7);\n    }\n    50% {\n      transform: scale(1.05);\n      box-shadow: 0 0 0 10px rgba(229, 65, 83, 0);\n    }\n  }\n  \n  @keyframes assistant-ripple {\n    0% {\n      transform: scale(0);\n      opacity: 1;\n    }\n    100% {\n      transform: scale(2);\n      opacity: 0;\n    }\n  }\n  \n  @keyframes shine {\n    0% {\n      left: -100%;\n    }\n    100% {\n      left: 100%;\n    }\n  }\n  \n  .assistant-pulse {\n    animation: assistant-pulse 2s infinite;\n  }\n  \n  .assistant-ripple {\n    animation: assistant-ripple 2s infinite;\n  }\n  \n  .assistant-ripple-delay {\n    animation: assistant-ripple 2s infinite 1s;\n  }\n\n  /* Back to Top Button Styles - Blue gradient */\n  .floating-back-to-top {\n    background: linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%);\n    box-shadow: 0 2px 8px rgba(59, 130, 246, 0.25),\n      0 1px 4px rgba(59, 130, 246, 0.15);\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n    aspect-ratio: 1;\n    min-width: 44px;\n    min-height: 44px;\n    width: 44px;\n    height: 44px;\n    border: none;\n  }\n\n  .floating-back-to-top::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.25),\n      transparent\n    );\n    transition: left 0.4s ease;\n  }\n\n  .floating-back-to-top:hover {\n    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.35),\n      0 2px 6px rgba(59, 130, 246, 0.25);\n    background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);\n  }\n\n  .floating-back-to-top:hover::before {\n    left: 100%;\n  }\n\n  .floating-back-to-top:active {\n    transform: scale(0.95);\n    box-shadow: 0 1px 4px rgba(59, 130, 246, 0.3);\n  }\n\n  .floating-back-to-top:focus {\n    outline: none;\n    ring: 2px;\n    ring-color: rgba(59, 130, 246, 0.4);\n    ring-offset: 2px;\n  }\n\n  /* Assistant Button Styles - Pink/Red gradient */\n  .floating-assistant-btn {\n    background: linear-gradient(135deg, #e54153 0%, #ff6ea1 100%);\n    box-shadow: 0 2px 8px rgba(229, 65, 83, 0.25),\n      0 1px 4px rgba(229, 65, 83, 0.15);\n    position: relative;\n    overflow: hidden;\n    border-radius: 50%;\n    aspect-ratio: 1;\n    min-width: 44px;\n    min-height: 44px;\n    width: 44px;\n    height: 44px;\n    border: none;\n  }\n\n  .floating-assistant-btn::before {\n    content: "";\n    position: absolute;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(\n      90deg,\n      transparent,\n      rgba(255, 255, 255, 0.25),\n      transparent\n    );\n    transition: left 0.4s ease;\n  }\n\n  .floating-assistant-btn:hover {\n    box-shadow: 0 4px 12px rgba(229, 65, 83, 0.35),\n      0 2px 6px rgba(229, 65, 83, 0.25);\n    background: linear-gradient(135deg, #ff5568 0%, #ff7fb3 100%);\n  }\n\n  .floating-assistant-btn:hover::before {\n    left: 100%;\n  }\n\n  .floating-assistant-btn:active {\n    transform: scale(0.95) rotate(12deg);\n    box-shadow: 0 1px 4px rgba(229, 65, 83, 0.3);\n  }\n\n  .floating-assistant-btn:focus {\n    outline: none;\n    ring: 2px;\n    ring-color: rgba(229, 65, 83, 0.4);\n    ring-offset: 2px;\n  }\n\n  /* Container positioning - s\xe1t m\xe9p phải */\n  .floating-actions-container {\n    right: 16px;\n  }\n\n  /* Responsive */\n  @media (max-width: 640px) {\n    .floating-actions-container {\n      right: 12px;\n    }\n\n    .floating-back-to-top,\n    .floating-assistant-btn {\n      width: 40px !important;\n      height: 40px !important;\n      min-width: 40px;\n      min-height: 40px;\n    }\n  }\n\n  @media (max-width: 480px) {\n    .floating-actions-container {\n      right: 8px;\n    }\n\n    .floating-back-to-top,\n    .floating-assistant-btn {\n      width: 36px !important;\n      height: 36px !important;\n      min-width: 36px;\n      min-height: 36px;\n    }\n  }\n\n  @media (max-width: 360px) {\n    .floating-actions-container {\n      right: 4px;\n    }\n  }\n'),
          document.head.appendChild(n);
      }
      function g(n) {
        let { isOpen: e, onClose: t, className: a } = n,
          u = (n) => {
            switch (n) {
              case "facebook":
                window.open("https://www.facebook.com/quyctd/", "_blank");
                break;
              case "email":
                window.open("mailto:quy.dc98@gmail.com");
                break;
              case "instagram":
                window.open("https://www.instagram.com/quyctd/", "_blank");
                break;
              case "tiktok":
                window.open("https://www.tiktok.com/@quyctd/", "_blank");
                break;
              case "templates":
                window.open("/templates", "_blank");
            }
            t();
          };
        return (0, i.jsx)(s.default, {
          open: e,
          onCancel: t,
          footer: null,
          width: 500,
          className: (0, o.cn)("assistant-modal", a),
          title: (0, i.jsxs)("div", {
            className: "flex items-center gap-3",
            children: [
              (0, i.jsx)("div", {
                className:
                  "w-10 h-10 bg-zen-primary rounded-full flex items-center justify-center",
                children: (0, i.jsx)(l.Z, {
                  weight: "BoldDuotone",
                  color: "white",
                  size: 24,
                }),
              }),
              (0, i.jsxs)("div", {
                children: [
                  (0, i.jsx)("h3", {
                    className: "text-lg m-0 !font-normal",
                    children: "Trợ l\xfd @quyctd",
                  }),
                  (0, i.jsx)("p", {
                    className: "text-sm text-gray-500 m-0",
                    children: "Ch\xfang t\xf4i sẵn s\xe0ng hỗ trợ bạn!",
                  }),
                ],
              }),
            ],
          }),
          closeIcon: (0, i.jsx)(c.Z, { weight: "BoldDuotone", size: 16 }),
          children: (0, i.jsxs)("div", {
            className: "space-y-6",
            children: [
              (0, i.jsxs)("div", {
                className: "text-center space-y-4",
                children: [
                  (0, i.jsxs)("h1", {
                    className:
                      "text-primary text-lg text-center leading-relaxed m-0",
                    children: [
                      "Bạn kh\xf4ng c\xf3 thời gian ",
                      (0, i.jsx)("br", {}),
                      "hoặc gặp kh\xf3 khăn trong việc tạo thiệp?",
                    ],
                  }),
                  (0, i.jsx)("p", {
                    className: "text-gray-700 leading-relaxed m-0",
                    children: "Li\xean hệ với ch\xfang t\xf4i ngay!",
                  }),
                  (0, i.jsxs)("div", {
                    className: "grid grid-cols-2 gap-3",
                    children: [
                      (0, i.jsx)(r.ZP, {
                        onClick: () => u("facebook"),
                        className:
                          "flex items-center justify-center gap-2 h-12",
                        icon: (0, i.jsx)(m.Am9, { size: 16 }),
                        children: "Facebook",
                      }),
                      (0, i.jsx)(r.ZP, {
                        onClick: () => u("instagram"),
                        className:
                          "flex items-center justify-center gap-2 h-12",
                        icon: (0, i.jsx)(m.Zf_, { size: 16 }),
                        children: "Instagram",
                      }),
                      (0, i.jsx)(r.ZP, {
                        onClick: () => u("tiktok"),
                        className:
                          "flex items-center justify-center gap-2 h-12",
                        icon: (0, i.jsx)(m.nTm, { size: 16 }),
                        children: "TikTok",
                      }),
                      (0, i.jsx)(r.ZP, {
                        onClick: () => u("email"),
                        className:
                          "flex items-center justify-center gap-2 h-12",
                        icon: (0, i.jsx)(h.Z, {
                          weight: "BoldDuotone",
                          size: 16,
                        }),
                        children: "Email",
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: "border-t border-gray-200" }),
              (0, i.jsxs)("div", {
                className: "text-center space-y-4",
                children: [
                  (0, i.jsx)("p", {
                    className: "text-gray-700 leading-relaxed m-0",
                    children:
                      "Bạn đang bận rộn v\xe0 cần giải ph\xe1p nhanh ch\xf3ng? Ch\xfang t\xf4i hiểu những kh\xf3 khăn trong việc tạo thiệp cưới v\xe0 đ\xe3 chuẩn bị sẵn những mẫu thiệp đẹp, chuy\xean nghiệp để bạn c\xf3 thể lựa chọn v\xe0 t\xf9y chỉnh dễ d\xe0ng.",
                  }),
                  (0, i.jsx)(r.ZP, {
                    onClick: () => u("templates"),
                    className:
                      "w-full h-12 bg-zen-primary hover:bg-red-600 text-white",
                    icon: (0, i.jsx)(d.Z, { weight: "BoldDuotone", size: 16 }),
                    children: "Tham khảo trước mẫu thiệp",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function p(n) {
        let {
            className: e,
            position: t = "bottom-right",
            threshold: s = 300,
            showWhenSidebarPinned: r = !1,
          } = n,
          [c, h] = (0, a.useState)(!1),
          [d, m] = (0, a.useState)(!1),
          [p, f] = (0, a.useState)(!1);
        return (
          (0, a.useEffect)(() => {
            let n = () => {
                h(
                  (window.pageYOffset || document.documentElement.scrollTop) > s
                );
              },
              e = () => {
                m(!!document.querySelector('[data-sidebar-pinned="true"]'));
              },
              t = () => {
                m(
                  document.querySelectorAll(
                    ".pinned, .fixed-sidebar, .sticky-sidebar"
                  ).length > 0
                );
              };
            window.addEventListener("scroll", n),
              window.addEventListener("resize", e),
              n(),
              e(),
              t();
            let i = setInterval(() => {
              e(), t();
            }, 1e3);
            return () => {
              window.removeEventListener("scroll", n),
                window.removeEventListener("resize", e),
                clearInterval(i);
            };
          }, [s]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsxs)("div", {
                className: (0, o.cn)(
                  "fixed z-50 flex flex-col gap-4",
                  {
                    "bottom-right": "bottom-20 floating-actions-container",
                    "bottom-left": "bottom-20 left-4",
                  }[t],
                  e
                ),
                children: [
                  (c || (r && d)) &&
                    (0, i.jsx)("button", {
                      onClick: () => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      },
                      className: (0, o.cn)(
                        "floating-back-to-top",
                        "transition-all duration-300 ease-in-out",
                        "flex items-center justify-center text-white",
                        "hover:scale-110",
                        "focus:outline-none focus:ring-2 focus:ring-offset-2",
                        "animate-in fade-in-0 slide-in-from-bottom-2"
                      ),
                      "aria-label": "Quay lại đầu trang",
                      title: "Quay lại đầu trang",
                      children: (0, i.jsx)(u.Z, {
                        weight: "BoldDuotone",
                        size: 20,
                      }),
                    }),
                  (0, i.jsxs)("div", {
                    className: "relative group",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute right-16 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-50",
                        children: (0, i.jsxs)("div", {
                          className:
                            "bg-gray-900 text-white text-sm px-3 py-2 rounded-lg shadow-lg whitespace-nowrap",
                          children: [
                            "Cần gi\xfap đỡ? Click v\xe0o đ\xe2y!",
                            (0, i.jsx)("div", {
                              className:
                                "absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900",
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 rounded-full opacity-30 assistant-ripple",
                        style: { backgroundColor: "#e54153" },
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 rounded-full opacity-20 assistant-ripple-delay",
                        style: { backgroundColor: "#e54153" },
                      }),
                      (0, i.jsx)("button", {
                        onClick: () => {
                          f(!0);
                        },
                        className: (0, o.cn)(
                          "floating-assistant-btn",
                          "relative transition-all duration-300 ease-in-out",
                          "flex items-center justify-center text-white",
                          "hover:scale-110",
                          "focus:outline-none focus:ring-2 focus:ring-offset-2",
                          "assistant-pulse hover:animate-none",
                          "transform hover:rotate-12"
                        ),
                        "aria-label": "Trợ l\xfd hỗ trợ",
                        title: "Cần gi\xfap đỡ? Click v\xe0o đ\xe2y!",
                        children: (0, i.jsx)(l.Z, {
                          weight: "BoldDuotone",
                          size: 20,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(g, { isOpen: p, onClose: () => f(!1) }),
            ],
          })
        );
      }
    },
    91257: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = t(57437),
        a = t(27648),
        s = t(99376);
      function r(n) {
        let {
            href: e,
            children: t,
            className: r = "menu-item",
            activeClassName: o = "active",
            exact: l = !1,
            isActive: c,
            onClick: h,
            title: d,
            ...u
          } = n,
          m = (0, s.usePathname)(),
          g = ("function" == typeof c ? c(m) : l ? m === e : m.startsWith(e))
            ? "".concat(r, " ").concat(o)
            : r;
        return (0, i.jsx)(a.default, {
          href: e,
          className: g,
          ...u,
          title: d || "",
          onClick: h,
          children: t,
        });
      }
    },
    11840: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = t(57437),
        a = t(27648);
      t(2265);
      var s = t(89689);
      function r() {
        return (0, i.jsx)(a.default, {
          href: "/",
          "aria-label": "Quy & Hai - Wedding\xed",
          title: "Quy & Hai - Wedding\xed",
          children: (0, i.jsxs)("div", {
            className:
              "group relative flex items-center justify-center cursor-pointer",
            children: [
              (0, i.jsx)("img", {
                src: "/assets/og.png",
                className: "h-7 mr-2 md:h-9",
                alt: "Quy & Hai - Wedding\xed",
                title: "Zenlove - Tạo thiệp cưới online đẹp nhất",
              }),
              (0, i.jsx)("img", {
                src: "https://www.quyctd.dev/wedding/cdn-resource/assets/logo/logo-zenlove-text-dark.svg",
                className: "h-4 mr-3 md:h-5",
                alt: "Zenlove - Website thiệp cưới online miễn ph\xed",
                title: "Zenlove - Thiệp cưới điện tử đẹp v\xe0 hiện đại",
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
    89689: function (n, e, t) {
      t.d(e, {
        KZ: function () {
          return i;
        },
        U: function () {
          return a;
        },
      });
      let i = "1.26.3a6",
        a = (function (n) {
          let e = [];
          for (let i of n
            .trim()
            .split(/\n\s*\n/)
            .filter((n) => n.trim())) {
            let n = i.split("\n").map((n) => n.trim()),
              a = { changes: [] };
            for (let e of n)
              if (e.startsWith("version:"))
                a.version = e.replace("version:", "").trim();
              else if (e.startsWith("date:")) {
                let n = e.replace("date:", "").trim(),
                  [t, i, s] = n.split("-");
                t && i && s
                  ? (a.date = "".concat(s, "-").concat(i, "-").concat(t))
                  : (a.date = n);
              } else if (e.startsWith("+")) {
                let n = e.substring(1).trim(),
                  i = n.indexOf(":");
                if (i > 0) {
                  let e = n.substring(0, i).trim(),
                    s = n
                      .substring(i + 1)
                      .trim()
                      .replace(/\//g, "\n");
                  if ("feature" === e || "improvement" === e || "fix" === e) {
                    var t;
                    null === (t = a.changes) ||
                      void 0 === t ||
                      t.push({ type: e, description: s });
                  }
                }
              }
            a.version &&
              a.date &&
              a.changes &&
              e.push({ version: a.version, date: a.date, changes: a.changes });
          }
          return e;
        })(
          "\nversion:1.26.3a6\ndate:06-03-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug v3a3.\n\nversion:1.26.3a3\ndate:03-03-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi v1a30,v1a27, v2a16.\n\nversion:1.26.2a23\ndate:23-02-2026\nchanges:\n+ feature: Th\xeam t\xednh năng x\xf3a nền ảnh tự động.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.2a22\ndate:22-02-2026\nchanges:\n+ improvement: Cải thiện giao diện/Hỗ trợ ng\xf4n ngữ EN-VI cho RSVP v\xe0 Countdown.\n+ fix: Sửa lỗi bug v1a16/Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n\nversion:1.26.2a16\ndate:16-02-2026\nchanges:\n+ feature: Th\xeam t\xednh năng quản l\xfd nhạc ri\xeang của bạn.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.2a5\ndate:05-02-2026\nchanges:\n+ fix: Sửa lỗi bug v1a30,v1a27/Sửa lỗi k\xe9o chọn nhiều phần tử ở phi\xean bản PC/Loại bỏ Tour/Sửa lỗi tải ảnh l\xean hệ thống/Sửa lỗi kiểm tra ảnh trước khi x\xf3a trong tr\xecnh thiết kế.\n+ feature: Th\xeam t\xednh năng chỉnh thứ tự lớp/Căn chỉnh phần tử h\xe0ng loạt/Th\xeam t\xednh năng ph\xf3ng to-thu nhỏ/Ưu đ\xe3i tết 2026.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a30\ndate:30-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug v1a27.\n\nversion:1.26.1a27\ndate:27-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Cập nhật biểu ngữ x\xe1c nhận tham dự, thay đổi cơ chế thống k\xea RSVP/Fix bug v1a24,v1a8.\n\nversion:1.26.1a24\ndate:24-01-2026\nchanges:\n+ feature: Th\xeam th\xf4ng b\xe1o.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a13\ndate:13-01-2026\nchanges:\n+ feature: Th\xeam thư viện thiết kế sẵn.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a12\ndate:12-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Fix lỗi chọn nhiều phần tử khi k\xe9o thả phi\xean bản PC/Sửa lỗi sao ch\xe9p phần tử/Sửa lỗi th\xeam phần tử.\n\nversion:1.26.1a8\ndate:08-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n\nversion:1.26.1a1\ndate:06-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.26a1\ndate:26-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng AI Text Editor.\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.24a2\ndate:24-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi cache.\n\nversion:1.12.23a1\ndate:23-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng n\xe2ng cấp giới hạn v\xe0 mua add-on.\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.21a1\ndate:21-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.17a1\ndate:17-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi feedback.\n\nversion:1.12.14a3\ndate:14-12-2025\nchanges:\n+ improvement: Cải thiện hiệu năng/Cải thiện giao diện.\n\nversion:1.12.14a1\ndate:14-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng tạo chữ k\xfd v\xe0o thiệp.\n+ fix: Sửa lỗi xem trước tr\xean tr\xecnh thiết kế/Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n+ improvement: Cải thiện hiệu năng.\n\nversion:1.12.11a2\ndate:11-12-2025\nchanges:\n+ improvement: Cải thiện hiệu năng.\n+ fix: Fix lỗi cuộn trang tr\xean điện thoại khi xem thiệp/Fix lỗi trang chi tiết thiệp.\n\nversion:1.12.9a5\ndate:09-12-2025\nchanges:\n+ fix: Sửa lỗi gửi form x\xe1c nhận tham dự/Sửa lỗi lịch hiển thị.\n\nversion:1.12.9a4\ndate:09-12-2025\nchanges:\n+ fix: Fix lỗi feedback.\n\nversion:1.12.5a2\ndate:06-12-2025\nchanges:\n+ fix: Sửa lỗi hiển thị danh s\xe1ch lời ch\xfac/Th\xeam bộ lọc từ ngữ xấu.\n\nversion:1.12.5a1\ndate:05-12-2025\nchanges:\n+ improvement: N\xe2ng cấp hạ tầng CDN.\n+ fix: Sửa lỗi khi xem thiệp trong thư viện thiệp mẫu.\n\nversion:1.12.4a2\ndate:04-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng quản l\xfd ng\xe2n h\xe0ng/Th\xeam t\xednh năng y\xeau cầu r\xfat tiền từ qu\xe0 tặng/Lịch sử nhận qu\xe0 tặng.\n+ improvement: Tối ưu hiển thị danh s\xe1ch thiệp/Tối ưu trang xem thiệp.\n\nversion:1.12.2a4\ndate:02-12-2025\nchanges:\n+ feature: Th\xeam hiệu ứng mở m\xe0n mới/Th\xeam mẫu cắt ảnh mới/Sửa lỗi tải nhạc. \n\nversion:1.12.2a2\ndate:02-12-2025\nchanges:\n+ improvement: Cập nhật wallet/N\xe2ng cấp hạ tầng CDN.\n\nversion:1.11.29b3\ndate:29-11-2025\nchanges:\n+ improvement: N\xe2ng cấp hạ tầng CDN.\n\nversion:1.11.28b2\ndate:28-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi header.\n\nversion:1.11.28b1\ndate:28-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.11.27b2\ndate:27-11-2025\nchanges:\n+ fix: Sửa lỗi header.\n\nversion:1.11.27b1\ndate:27-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi 24b1.\n\nversion:1.11.24b1\ndate:24-11-2025\nchanges:\n+ feature: Th\xeam t\xednh năng tặng qu\xe0.\n\nversion:1.11.23b1\ndate:23-11-2025\nchanges:\n+ fix: Sửa lại lỗi tự động sao lưu thiệp.\n+ feature: Th\xeam t\xednh năng \xe1p dụng m\xe3 giảm gi\xe1 khi n\xe2ng cấp g\xf3i/Th\xeam t\xednh năng quản l\xfd số dư Points v\xe0 Credits (AI Features).\n\nversion:1.11.22b1\ndate:22-11-2025\nchanges:\n+ feature: Th\xeam tọa độ bản đồ, tự động lấy tọa độ từ địa chỉ/Th\xeam plugin lời nhắc th\xeam v\xe0o lịch.\n+ fix: Sửa lỗi xuất bản thiệp.\n\nversion:1.11.21b3\ndate:21-11-2025\nchanges:\n+ fix: Sửa lỗi hiển thị danh s\xe1ch b\xe0i h\xe1t/Sửa lỗi th\xf4ng b\xe1o lặp bản sao lưu.\n+ improvement: Cải thiện hiệu suất.\n\nversion:1.11.21b2\ndate:21-11-2025\nchanges:\n+ fix: Sửa lỗi khi k\xe9o thả tự do từ thanh c\xf4ng cụ tr\xean phi\xean bản PC\n\nversion:1.11.21b1\ndate:21-11-2025\nchanges:\n+ feature: Th\xeam t\xednh năng auto-save v\xe0 sao lưu tự động/Th\xeam t\xednh năng chọn nhiều node c\xf9ng l\xfac (bao gồm cả giữ chuột b\xf4i đen)/Th\xeam t\xednh năng k\xe9o thả tự do từ thanh c\xf4ng cụ tr\xean PC/Th\xeam t\xednh năng xem changelog\n+ improvement: Cải thiện hiệu suất render cho c\xe1c node phức tạp\n+ fix: Sửa lỗi kh\xf4ng lưu được thiệp/Sửa lỗi hiển thị chưa đ\xfang khi chọn nhiều node c\xf9ng l\xfac\n\n"
        );
    },
    34577: function (n, e, t) {
      t.d(e, {
        a: function () {
          return a;
        },
      });
      var i = t(2265);
      function a(n) {
        let [e, t] = i.useState(!1);
        return (
          i.useEffect(() => {
            function e(n) {
              t(n.matches);
            }
            let i = matchMedia(n);
            return (
              i.addEventListener("change", e),
              t(i.matches),
              () => i.removeEventListener("change", e)
            );
          }, [n]),
          e
        );
      }
    },
    73630: function (n, e, t) {
      t.d(e, {
        $B: function () {
          return u;
        },
        SV: function () {
          return s;
        },
        Yb: function () {
          return p;
        },
        aW: function () {
          return f;
        },
        cn: function () {
          return g;
        },
        sZ: function () {
          return x;
        },
        ud: function () {
          return m;
        },
      });
      var i = t(61994),
        a = t(53335);
      t(25566);
      let s = () => "https://zenlove.me",
        r = new Set(["crop", "width", "height", "fit", "format", "quality"]);
      function o(n) {
        let e = n.split(",");
        return (
          4 === e.length &&
          e.every((n) => {
            let e = Number(n);
            return Number.isFinite(e) && Number.isInteger(e) && e >= 0;
          })
        );
      }
      function l(n) {
        return ["cover", "contain", "fill", "inside", "outside"].includes(n);
      }
      function c(n) {
        return ["webp", "avif", "jpeg", "png", "gif"].includes(n);
      }
      function h(n) {
        let e = Number(n);
        return Number.isFinite(e) && Number.isInteger(e) && e > 0;
      }
      function d(n) {
        let e = Number(n);
        return Number.isFinite(e) && Number.isInteger(e) && e >= 1 && e <= 100;
      }
      function u(n) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          t = "https://www.quyctd.dev/wedding/cdn";
        t || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          n || (n = "/assets/thumb_default.png"),
          n.startsWith("/") && (n = n.slice(1));
        let [i, a] = n.split("?"),
          s = new URLSearchParams(null != a ? a : ""),
          u = new URLSearchParams();
        for (let [n, e] of s.entries()) {
          if (!r.has(n)) {
            console.warn('Ignoring unknown param "'.concat(n, '"'));
            continue;
          }
          let t = !0;
          switch (n) {
            case "crop":
              (t = o(e)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    e,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (t = h(e)) ||
                console.warn(
                  "Invalid "
                    .concat(n, ' value "')
                    .concat(e, '", expected positive integer')
                );
              break;
            case "fit":
              (t = l(e)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    e,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (t = c(e)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    e,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (t = d(e)) ||
                console.warn(
                  'Invalid quality value "'.concat(
                    e,
                    '", expected integer 1-100'
                  )
                );
              break;
            default:
              t = !1;
          }
          t && u.set(n, e);
        }
        e && (u.set("format", "webp"), u.set("quality", "80"));
        let m = u.toString();
        return ""
          .concat(t.replace(/\/+$/, ""), "/")
          .concat(i)
          .concat(m ? "?".concat(m) : "");
      }
      function m(n) {
        let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        n || (n = "/assets/thumb_default.png"),
          n.startsWith("/") && (n = n.slice(1));
        let [t, i] = n.split("?"),
          a = new URLSearchParams(null != i ? i : ""),
          s = new URLSearchParams();
        for (let [n, e] of a.entries()) {
          if (!r.has(n)) {
            console.warn('Ignoring unknown param "'.concat(n, '"'));
            continue;
          }
          let t = !0;
          switch (n) {
            case "crop":
              (t = o(e)) ||
                console.warn(
                  'Invalid crop value "'.concat(
                    e,
                    '", expected "x,y,width,height" with integers >=0'
                  )
                );
              break;
            case "width":
            case "height":
              (t = h(e)) ||
                console.warn(
                  "Invalid "
                    .concat(n, ' value "')
                    .concat(e, '", expected positive integer')
                );
              break;
            case "fit":
              (t = l(e)) ||
                console.warn(
                  'Invalid fit value "'.concat(
                    e,
                    '", allowed: cover, contain, fill, inside, outside'
                  )
                );
              break;
            case "format":
              (t = c(e)) ||
                console.warn(
                  'Invalid format value "'.concat(
                    e,
                    '", allowed: webp, avif, jpeg, png, gif'
                  )
                );
              break;
            case "quality":
              (t = d(e)) ||
                console.warn(
                  'Invalid quality value "'.concat(
                    e,
                    '", expected integer 1-100'
                  )
                );
              break;
            default:
              t = !1;
          }
          t && s.set(n, e);
        }
        e && (s.set("format", "webp"), s.set("quality", "80"));
        let u = s.toString();
        return ""
          .concat("https://www.quyctd.dev/wedding/cdn-resource".replace(/\/+$/, ""), "/")
          .concat(t)
          .concat(u ? "?".concat(u) : "");
      }
      function g() {
        for (var n = arguments.length, e = Array(n), t = 0; t < n; t++)
          e[t] = arguments[t];
        return (0, a.m6)((0, i.W)(e));
      }
      let p = function (n) {
          let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return u(n, e);
        },
        f = {
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
      function x(n) {
        let e = n.getFullYear(),
          t = n.getMonth(),
          i = n.getDate(),
          a = new Date(e, t, 1).getDay(),
          s = 0 === a ? 6 : a - 1,
          r = new Date(e, t + 1, 0).getDate(),
          o = [];
        for (let n = 0; n < s; n++) o.push({ type: "empty" });
        for (let n = 1; n <= r; n++) {
          let e = n === i;
          o.push({ type: "day", date: n, isSelected: e });
        }
        return o;
      }
    },
  },
]);
