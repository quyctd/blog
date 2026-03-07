(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7882],
  {
    37882: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return eK;
        },
      });
      var a = n(57437),
        i = n(2265),
        r = n(33986),
        s = n(92151),
        o = n(95929),
        l = n(73630),
        c = n(89970),
        d = n(9109),
        u = n(67404),
        m = n(32489);
      function f(e) {
        let { children: t, dataPage: n, width: r } = e,
          [s, o] = (0, i.useState)(!0);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("div", {
              id: "zen-app",
              style: {
                backgroundColor: "rgb(240, 242, 245)",
                height: "100vh",
                width: "100vw",
                paddingTop: "5vh",
              },
              children: (0, a.jsx)("div", {
                style: {
                  width: "".concat(r, "px"),
                  maxWidth: "500px",
                  height: "90vh",
                  margin: "auto",
                  position: "relative",
                  outline: "1px solid rgb(224, 224, 224)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 10px 0px",
                  borderRadius: "5px",
                  overflow: "hidden",
                },
                className: "zen-desktop-app",
                children: t,
              }),
            }),
            !s &&
              (0, a.jsx)(c.Z, {
                title: "Hiện QR",
                children: (0, a.jsxs)("div", {
                  className: "qrFloatingButton",
                  onClick: () => o(!s),
                  title: s ? "Ẩn QR" : "Hiện QR",
                  "aria-label": s ? "Hide QR" : "Show QR",
                  children: [
                    (0, a.jsx)(u.Z, { className: "w-5 h-5" }),
                    (0, a.jsx)("span", {
                      className: "text-xs",
                      children: "QR",
                    }),
                  ],
                }),
              }),
            (0, a.jsx)("div", {
              className: "qrCodeShow transition ".concat(
                s ? "block" : "hidden"
              ),
              children: (0, a.jsxs)("div", {
                className: "qrCodeShowContent",
                children: [
                  (0, a.jsx)(c.Z, {
                    title: "Ẩn QR",
                    children: (0, a.jsx)("div", {
                      className: "qrToggleButton",
                      onClick: () => o(!s),
                      children: (0, a.jsx)(m.Z, { className: "w-5 h-5" }),
                    }),
                  }),
                  (0, a.jsx)("p", {
                    className: "text-gray-500 text-xs text-center m-0",
                    children: "Qu\xe9t m\xe3 QR để",
                  }),
                  (0, a.jsx)(d.Z, {
                    errorLevel: "H",
                    value: ""
                      .concat("https://zenlove.me", "/s/")
                      .concat(n.page.slug || n.page.identifier),
                    icon: (0, l.ud)("assets/logo.png"),
                    size: 100,
                    iconSize: 25,
                    className: "!p-1.5",
                    title: "Qu\xe9t m\xe3 QR để xem tr\xean điện thoại",
                  }),
                  (0, a.jsx)("p", {
                    className: "text-gray-500 text-xs text-center m-0",
                    children: "xem tr\xean điện thoại",
                  }),
                ],
              }),
            }),
          ],
        });
      }
      function x(e) {
        let { children: t } = e;
        return (0, a.jsx)(a.Fragment, { children: t });
      }
      var h = n(29),
        p = n.n(h);
      function g(e) {
        let { children: t, isMobile: n, isMenuOpen: i } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(p(), {
              id: "d7ce47abc9c1c3f3",
              children:
                "#zen-app-view{height:100%}#zen-app-view.mobile{height:100vh!important;overflow:visible!important}#zen-app-view.desktop{overflow:hidden!important;max-width:500px!important}",
            }),
            (0, a.jsx)("div", {
              id: "zen-app-view",
              "data-menu-open": i,
              className:
                "jsx-d7ce47abc9c1c3f3 " +
                ""
                  .concat(n ? "mobile" : "desktop", " ")
                  .concat(i ? "" : "menu-closed"),
              children: t,
            }),
          ],
        });
      }
      n(96533);
      var b = n(58293),
        v = n(45168);
      let y = 1e6,
        k = {
          acquire: () => (y += 1),
          bringToFront: () => (y += 1),
          release() {},
        };
      var w = n(26580);
      function j(e) {
        let { show: t, nodeRef: n, children: r, toggle: s } = e,
          o = (0, i.useRef)(),
          { zIndex: l, bringToFront: c } = (function (e) {
            let [t, n] = (0, i.useState)(0),
              a = (0, i.useRef)(!1);
            return (
              (0, i.useEffect)(() => {
                e && !a.current && (n(k.acquire()), (a.current = !0)),
                  e || (a.current = !1);
              }, [e]),
              {
                zIndex: t,
                bringToFront: () => {
                  n(k.bringToFront());
                },
              }
            );
          })(t);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(w.Z, {
              nodeRef: o,
              in: t,
              timeout: 300,
              classNames: "fade-cover",
              mountOnEnter: !0,
              unmountOnExit: !0,
              appear: !1,
              children: (0, a.jsx)("div", {
                ref: o,
                className: "drawer-cover",
                onClick: s,
                style: { zIndex: 999 },
              }),
            }),
            (0, a.jsx)(w.Z, {
              nodeRef: n,
              in: t,
              timeout: 300,
              classNames: "fade-drawer",
              mountOnEnter: !0,
              unmountOnExit: !0,
              appear: !1,
              children: (0, a.jsx)("div", {
                ref: n,
                className: "drawer-container",
                style: { zIndex: 99999999 },
                children: r,
              }),
            }),
          ],
        });
      }
      var N = n(33145),
        z = n(22744),
        C = n(34029),
        D = n(48651),
        S = n(61273),
        E = n(67776),
        A = n(37780),
        T = n(61935),
        F = n(5657),
        L = n(34814);
      let P = [
          "vcl",
          "vkl",
          "cc",
          "vl",
          "đm",
          "dm",
          "lồn",
          "đụ",
          "đ\xedt",
          "đĩ",
          "địt",
          "cặc",
          "v\xe3i",
          "đ\xe9o",
          "buồi",
        ],
        R = [
          "đồ ch\xf3",
          "ch\xf3 m\xe1",
          "con ch\xf3",
          "thằng ch\xf3",
          "\xf3c ch\xf3",
          "đồ ngu",
          "thằng ngu",
        ],
        I = [
          "clgt",
          "đmm",
          "dmm",
          "dcm",
          "dcmm",
          "đcm",
          "đcmm",
          "địt mẹ",
          "dit me",
          "du ma",
          "đụ m\xe1",
          "đụ mẹ",
          "con đĩ",
          "đồ đĩ",
          "buscu",
          "loz",
          "lồz",
          "ngu si",
          "ngu ngốc",
          "khốn nạn",
          "mất dạy",
          "bố l\xe1o",
          "fuck",
          "fucking",
          "shit",
          "bitch",
          "asshole",
          "bastard",
          "damn",
          "pussy",
          "dick",
          "cock",
          "cunt",
          "whore",
          "slut",
          "fck",
          "fuk",
          "bullshit",
          "motherfucker",
          "mofo",
        ],
        M = [
          /\bl[oò0ọ]n\b/gi,
          /đ[iì1!ị]t\s*m[eẹéè]/gi,
          /d[iì1!ị]t\s*m[eẹéè]/gi,
          /đ[mụuùú]\s*m[áaạàả]/gi,
          /d[mụuùú]\s*m[áaạàả]/gi,
          /\bf[u*]ck/gi,
          /\bsh[i1!]t/gi,
          /\bb[i1!]tch/gi,
        ];
      function B(e) {
        return !(function (e) {
          if (!e || "string" != typeof e) return !1;
          let t = e
            .toLowerCase()
            .trim()
            .replace(/\s+/g, " ")
            .replace(/[_\-\.]/g, "");
          for (let e of P) if (t.includes(e)) return !0;
          for (let e of R) if (t.includes(e)) return !0;
          for (let e of I) if (t.includes(e)) return !0;
          for (let t of M) if (t.test(e)) return !0;
          return !1;
        })(e)
          ? { isValid: !0 }
          : {
              isValid: !1,
              error:
                "Nội dung chứa từ ngữ kh\xf4ng ph\xf9 hợp. Vui l\xf2ng sửa lại.",
            };
      }
      function O(e) {
        let {
            onClose: t,
            pageId: n = "quy-hai-220326",
            onAddMessage: r,
            messagesList: s,
            viewContext: o = "go",
          } = e,
          [c, d] = (0, i.useState)(!1),
          [u, m] = (0, i.useState)(""),
          [f, x] = (0, i.useState)(""),
          [h, p] = (0, i.useState)(!1),
          g = (0, i.useRef)(null),
          [b, v] = (0, i.useState)(!1),
          { guestName: y } = (0, L.B)(),
          [k, w] = (0, i.useState)(null),
          [P, R] = (0, i.useState)(null);
        (0, i.useEffect)(() => {
          let e = localStorage.getItem("zenUser-".concat(n)) || y;
          e && m(e);
        }, [n, y]);
        let I = (0, F.gu)(),
          M = async () => {
            if ("go" !== o) {
              C.ZP.info("Trang demo kh\xf4ng thể gửi lời ch\xfac!");
              return;
            }
            if (!u || !f) {
              C.ZP.error("Vui l\xf2ng nhập t\xean của bạn v\xe0 lời ch\xfac");
              return;
            }
            let e = B(u);
            if (!e.isValid) {
              w(e.error || null),
                C.ZP.error(e.error || "T\xean chứa từ ngữ kh\xf4ng ph\xf9 hợp");
              return;
            }
            w(null);
            let a = B(f);
            if (!a.isValid) {
              R(a.error || null),
                C.ZP.error(
                  a.error || "Lời ch\xfac chứa từ ngữ kh\xf4ng ph\xf9 hợp"
                );
              return;
            }
            R(null), d(!0);
            try {
              await I.mutate({ nameUser: u, content: f, pageId: "quy-hai-220326" }),
                r({ nameUser: u, content: f }),
                C.ZP.success("Gửi lời ch\xfac th\xe0nh c\xf4ng"),
                localStorage.setItem("zenUser-".concat(n), u);
            } catch (e) {
              console.log(e), C.ZP.error("Gửi lời ch\xfac thất bại");
            } finally {
              d(!1);
            }
            t();
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(j, {
              show: h,
              nodeRef: g,
              toggle: () => p(!h),
              children: (0, a.jsxs)("div", {
                className: "blessing-list-msg",
                children: [
                  (0, a.jsxs)("div", {
                    className: "blessing-list-title",
                    children: [
                      (0, a.jsx)("span", { children: "Lời Ch\xfac" }),
                      (0, a.jsx)("div", {
                        className: "blessing-list-close",
                        onClick: () => p(!h),
                        children: (0, a.jsx)(z.B4e, {}),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "blessing-list-content",
                    children: (0, a.jsx)("ul", {
                      children: s.map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            children: [
                              (0, a.jsx)(N.default, {
                                src: "/assets/images/avatar-default.png",
                                alt: "avatar",
                                className: "blessing-list-content-item-avatar",
                                width: 0,
                                height: 0,
                                unoptimized: !0,
                              }),
                              (0, a.jsxs)("div", {
                                className: "blessing-list-content-item-info",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "m-0",
                                    children: e.nameUser,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "m-0",
                                    children: e.content,
                                  }),
                                ],
                              }),
                            ],
                          },
                          t
                        )
                      ),
                    }),
                  }),
                ],
              }),
            }),
            (0, a.jsx)("div", {
              className: "blessing-box-popup",
              children: (0, a.jsxs)("div", {
                className: "blessing-box",
                children: [
                  (0, a.jsx)(N.default, {
                    priority: !0,
                    unoptimized: !0,
                    src: (0, l.ud)("assets/bless-logo.png"),
                    alt: "blessing heart",
                    className: "blessing-img",
                    width: 0,
                    height: 0,
                  }),
                  (0, a.jsx)("div", {
                    className: "blessing-title",
                    children: "LỜI CH\xdaC",
                  }),
                  (0, a.jsx)("span", {
                    className: "close-btn",
                    onClick: t,
                    children: (0, a.jsx)(z.B4e, {}),
                  }),
                  (0, a.jsxs)("div", {
                    className: "blessing-form",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "blessing-form-item",
                        children: [
                          k &&
                            (0, a.jsx)("div", {
                              className: "blessing-form-error name",
                              children: k,
                            }),
                          (0, a.jsx)("input", {
                            placeholder: "Nhập t\xean của bạn",
                            className: "blessing-form-input ".concat(
                              k ? "error" : ""
                            ),
                            value: u,
                            onChange: (e) => {
                              let t = e.target.value;
                              if ((m(t), t.trim())) {
                                let e = B(t);
                                e.isValid ? w(null) : w(e.error || null);
                              } else w(null);
                            },
                            disabled: b,
                          }),
                          !u &&
                            (0, a.jsx)("span", {
                              className: "blessing-form-input-clear",
                              onClick: () => {
                                v(!0),
                                  setTimeout(() => {
                                    v(!1),
                                      m(
                                        (function () {
                                          let e = [
                                              "\uD83E\uDD52",
                                              "\uD83E\uDD86",
                                              "\uD83C\uDF5C",
                                              "\uD83D\uDC0C",
                                              "\uD83D\uDC12",
                                              "\uD83C\uDF2D",
                                              "\uD83E\uDEBF",
                                              "\uD83E\uDDC4",
                                              "\uD83E\uDD5F",
                                              "\uD83D\uDC38",
                                              "\uD83E\uDD96",
                                              "\uD83D\uDC14",
                                              "\uD83E\uDDC3",
                                              "\uD83D\uDC1F",
                                              "\uD83E\uDD77",
                                              "\uD83C\uDF55",
                                              "\uD83D\uDC32",
                                              "\uD83D\uDC3C",
                                              "☕",
                                              "\uD83E\uDD84",
                                            ],
                                            t = [
                                              "Dưa Leo",
                                              "Vịt Cười",
                                              "M\xec G\xf3i",
                                              "Ốc S\xean",
                                              "Khỉ Gi\xe0",
                                              "X\xfac X\xedch",
                                              "Ngỗng Lạc",
                                              "Tỏi Đơn",
                                              "B\xe1nh Bao",
                                              "Ếch Ngồi",
                                              "Khủng Long",
                                              "G\xe0 Trống",
                                              "Nước \xc9p",
                                              "C\xe1 Mập",
                                              "Vịt Ninja",
                                              "Pizza Phồng",
                                              "Rồng Con",
                                              "Gấu Tr\xfac",
                                              "C\xe0 Ph\xea",
                                              "Kỳ L\xe2n",
                                            ],
                                            n =
                                              e[
                                                Math.floor(
                                                  Math.random() * e.length
                                                )
                                              ],
                                            a =
                                              t[
                                                Math.floor(
                                                  Math.random() * t.length
                                                )
                                              ];
                                          return ""
                                            .concat(n, " ")
                                            .concat(a, " ")
                                            .concat(
                                              Math.floor(9999 * Math.random()) +
                                                1
                                            );
                                        })()
                                      );
                                  }, Math.floor(1e3 * Math.random()) + 500);
                              },
                              children: b
                                ? (0, a.jsx)(D.Z, { size: "small" })
                                : (0, a.jsx)(A.Moc, {
                                    className:
                                      "w-6 h-6 text-ai-text hover:text-ai-hover ",
                                  }),
                            }),
                          u &&
                            (0, a.jsx)("span", {
                              className: "blessing-form-input-clear",
                              onClick: () => {
                                localStorage.removeItem("zenUser-".concat(n)),
                                  m("");
                              },
                              children: (0, a.jsx)(S.fVU, {
                                className: "w-6 h-4 text-gray-500",
                              }),
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "blessing-form-item",
                        children: [
                          (0, a.jsx)("textarea", {
                            placeholder:
                              "Nhập lời ch\xfac cho ch\xfang m\xecnh",
                            className: "blessing-form-textarea ".concat(
                              P ? "error" : ""
                            ),
                            value: f,
                            onChange: (e) => {
                              let t = e.target.value;
                              if ((x(t), t.trim())) {
                                let e = B(t);
                                e.isValid ? R(null) : R(e.error || null);
                              } else R(null);
                            },
                            disabled: b,
                          }),
                          P &&
                            (0, a.jsx)("div", {
                              className: "blessing-form-error",
                              children: P,
                            }),
                          !f &&
                            (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("span", {
                                className: "blessing-form-textarea-sparkles",
                                onClick: () => {
                                  v(!0),
                                    setTimeout(() => {
                                      v(!1),
                                        x(
                                          (function () {
                                            let e = [
                                                "\uD83D\uDC8D",
                                                "\uD83C\uDF39",
                                                "\uD83D\uDD4A️",
                                                "\uD83C\uDFE1",
                                                "\uD83D\uDC69‍❤️‍\uD83D\uDC68",
                                                "\uD83C\uDFE0",
                                                "✨",
                                                "❤️",
                                                "\uD83C\uDF6F",
                                                "⚓",
                                                "\uD83C\uDF89",
                                                "\uD83D\uDC96",
                                                "\uD83D\uDC75\uD83D\uDC74",
                                                "\uD83E\uDD1D",
                                                "\uD83C\uDF08",
                                                "\uD83D\uDC68‍\uD83D\uDC69‍\uD83D\uDC67‍\uD83D\uDC66",
                                                "\uD83C\uDF5A\uD83E\uDD58",
                                                "\uD83D\uDE02\uD83D\uDC9E",
                                                "\uD83D\uDC76",
                                                "\uD83C\uDF1F",
                                              ],
                                              t = [
                                                "Ch\xfac hai bạn trăm năm hạnh ph\xfac, thủy chung son sắt.",
                                                "Ch\xfac cho t\xecnh y\xeau h\xf4m nay m\xe3i tỏa s\xe1ng, gắn kết bền l\xe2u.",
                                                "Nguyện ch\xfac hai bạn lu\xf4n b\xean nhau vượt qua mọi s\xf3ng gi\xf3.",
                                                "Hạnh ph\xfac h\xf4m nay sẽ l\xe0 nền tảng vững chắc cho tương lai vi\xean m\xe3n.",
                                                "Trăm năm t\xecnh vi\xean m\xe3n, bạc đầu nghĩa phu th\xea.",
                                                "Ch\xfac hai bạn x\xe2y dựng tổ ấm nhỏ đầy ắp tiếng cười.",
                                                "Ch\xfac cho mỗi ng\xe0y b\xean nhau l\xe0 một ng\xe0y \xfd nghĩa.",
                                                "T\xecnh y\xeau của hai bạn l\xe0 minh chứng đẹp nhất cho hạnh ph\xfac.",
                                                "Ch\xfac cho cuộc sống h\xf4n nh\xe2n lu\xf4n ngọt ng\xe0o như ng\xe0y đầu.",
                                                "Mong hai bạn m\xe3i l\xe0 bến đỗ b\xecnh y\xean của nhau.",
                                                "Ch\xfac mừng hạnh ph\xfac đ\xf4i uy\xean ương!",
                                                "Trăm năm b\xean nhau, hạnh ph\xfac dạt d\xe0o.",
                                                "Y\xeau nhau đến bạc đầu, thương nhau đến răng long.",
                                                "M\xe3i m\xe3i đồng h\xe0nh, c\xf9ng nhau hạnh ph\xfac.",
                                                "Ng\xe0y h\xf4m nay l\xe0 khởi đầu cho một h\xe0nh tr\xecnh y\xeau thương.",
                                                "Ch\xfac hai bạn “đầu bạc răng long, con đ\xe0n ch\xe1u đống”!",
                                                "Ch\xfac cho “cơm l\xe0nh canh ngọt, vợ chồng son sắt”!",
                                                "Hạnh ph\xfac bền l\xe2u, c\xe3i nhau cũng… mau l\xe0m l\xe0nh!",
                                                "Ch\xfac hai bạn sớm c\xf3 “thi\xean thần nhỏ” đ\xe1ng y\xeau.",
                                                "M\xe3i l\xe0 cặp đ\xf4i “đẹp từ trong ra ngo\xe0i, hạnh ph\xfac từ trong ra tim”!",
                                                "Ch\xfac hai bạn m\xe3i l\xe0 cặp đ\xf4i “đẹp từ trong ra ngo\xe0i, hạnh ph\xfac từ trong ra tim”!",
                                              ],
                                              n =
                                                e[
                                                  Math.floor(
                                                    Math.random() * e.length
                                                  )
                                                ],
                                              a =
                                                t[
                                                  Math.floor(
                                                    Math.random() * t.length
                                                  )
                                                ];
                                            return "".concat(n, " ").concat(a);
                                          })()
                                        );
                                    }, Math.floor(1e3 * Math.random()) + 500);
                                },
                                children: b
                                  ? (0, a.jsx)(D.Z, { size: "small" })
                                  : (0, a.jsx)(A.Moc, {
                                      className:
                                        "w-6 h-6 text-ai-text hover:text-ai-hover ",
                                    }),
                              }),
                            }),
                          (0, a.jsx)("span", {
                            className: "blessing-form-textarea-list",
                            onClick: () => p(!h),
                            children: (0, a.jsx)(E.eSk, {
                              className: "w-6 h-6 text-gray-500",
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("button", {
                        className: "blessing-form-button",
                        onClick: M,
                        children: c
                          ? (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(T.Z, { spin: !0 }),
                                " Đang gửi...",
                              ],
                            })
                          : (0, a.jsxs)(a.Fragment, {
                              children: [
                                (0, a.jsx)(z.D6S, { className: "w-5 h-5" }),
                                " Gửi lời ch\xfac",
                              ],
                            }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
          ],
        });
      }
      let G = {
        wedding: [
          {
            nameUser: "Linh",
            content:
              "✨ Đồng t\xe2m đồng l\xf2ng, x\xe2y đắp tổ ấm thịnh vượng!",
          },
          { nameUser: "H\xe0", content: "Ch\xfac mừng hạnh ph\xfac!" },
          {
            nameUser: "Huy",
            content: "Ch\xfac hai bạn trăm năm hạnh ph\xfac!",
          },
          { nameUser: "Chanh", content: "Ch\xfac mừng hạnh ph\xfac trăm năm!" },
          {
            nameUser: "Chinh",
            content: "Ch\xfac hai bạn trăm năm hạnh ph\xfac!",
          },
        ],
        birthday: [
          {
            nameUser: "Mai",
            content:
              "\uD83C\uDF82 Ch\xfac mừng sinh nhật! Tuổi mới hạnh ph\xfac v\xe0 th\xe0nh c\xf4ng!",
          },
          {
            nameUser: "Nam",
            content:
              "\uD83C\uDF89 Ch\xfac bạn sinh nhật vui vẻ, nhiều niềm vui!",
          },
          {
            nameUser: "Lan",
            content: "\uD83C\uDF81 Tuổi mới đầy may mắn v\xe0 sức khỏe nh\xe9!",
          },
          {
            nameUser: "H\xf9ng",
            content:
              "\uD83C\uDF1F Ch\xfac mừng sinh nhật! Mong mọi điều tốt đẹp đến với bạn!",
          },
          {
            nameUser: "Hoa",
            content:
              "\uD83D\uDC90 Sinh nhật vui vẻ! Ch\xfac bạn lu\xf4n hạnh ph\xfac!",
          },
        ],
        graduation: [
          {
            nameUser: "An",
            content:
              "\uD83C\uDF93 Ch\xfac mừng tốt nghiệp! Ch\xfac bạn th\xe0nh c\xf4ng tr\xean con đường mới!",
          },
          {
            nameUser: "B\xecnh",
            content:
              "\uD83D\uDCDC Ch\xfac mừng! Tương lai tươi s\xe1ng đang chờ bạn!",
          },
          {
            nameUser: "Chi",
            content:
              "\uD83C\uDF1F Tốt nghiệp l\xe0 khởi đầu mới, ch\xfac bạn lu\xf4n th\xe0nh c\xf4ng!",
          },
          {
            nameUser: "Dũng",
            content:
              "\uD83C\uDF89 Ch\xfac mừng tốt nghiệp! H\xe3y theo đuổi đam m\xea của m\xecnh!",
          },
          {
            nameUser: "Eva",
            content:
              "✨ Ch\xfac bạn lu\xf4n tự tin v\xe0 đạt được những mục ti\xeau lớn!",
          },
        ],
        event: [
          {
            nameUser: "Giang",
            content:
              "\uD83C\uDF8A Ch\xfac mừng sự kiện! Mong mọi thứ diễn ra su\xf4n sẻ!",
          },
          {
            nameUser: "Huyền",
            content: "\uD83C\uDF88 Ch\xfac sự kiện th\xe0nh c\xf4ng rực rỡ!",
          },
          {
            nameUser: "Khang",
            content:
              "\uD83C\uDFAA Ch\xfac mừng! Hy vọng bạn c\xf3 những trải nghiệm tuyệt vời!",
          },
          {
            nameUser: "Linh",
            content: "\uD83C\uDF81 Ch\xfac mừng sự kiện đặc biệt của bạn!",
          },
          {
            nameUser: "Minh",
            content:
              "\uD83C\uDF1F Mong sự kiện diễn ra thật \xfd nghĩa v\xe0 vui vẻ!",
          },
        ],
        newyear: [
          {
            nameUser: "Tuấn",
            content:
              "\uD83C\uDF7B G\xe1c lại deadline, đ\xeam nay anh em m\xecnh 'tới bến' nh\xe9!",
          },
          {
            nameUser: "Lan",
            content:
              "\uD83D\uDC83 Ch\xfac mọi người ăn chơi thả ga, năm mới tiền v\xe0o như nước!",
          },
          {
            nameUser: "H\xf9ng",
            content:
              "\uD83D\uDE80 Tạm biệt năm cũ, ch\xfac team m\xecnh năm sau KPI tự chạy, lương tự tăng!",
          },
          {
            nameUser: "Trang",
            content:
              "\uD83E\uDD42 Cụng ly v\xec một năm đ\xe3 nỗ lực hết m\xecnh. Tất ni\xean vui vẻ nha cả nh\xe0!",
          },
          {
            nameUser: "Đạt",
            content:
              "\uD83E\uDDE7 Năm hết Tết đến, ch\xfac anh chị em sức khỏe dồi d\xe0o, vạn sự như \xfd!",
          },
        ],
        default: [
          {
            nameUser: "Linh",
            content:
              "✨ Đồng t\xe2m đồng l\xf2ng, x\xe2y đắp tổ ấm thịnh vượng!",
          },
          { nameUser: "H\xe0", content: "Ch\xfac mừng hạnh ph\xfac!" },
          {
            nameUser: "Huy",
            content: "Ch\xfac hai bạn trăm năm hạnh ph\xfac!",
          },
          { nameUser: "Chanh", content: "Ch\xfac mừng hạnh ph\xfac trăm năm!" },
          {
            nameUser: "Chinh",
            content: "Ch\xfac hai bạn trăm năm hạnh ph\xfac!",
          },
        ],
      };
      function V(e) {
        var t, n;
        let {
            isMenuOpen: r,
            messages: s,
            viewContext: o = "go",
            categoryName: l,
          } = e,
          c =
            G[
              (0, i.useMemo)(
                () =>
                  (function (e) {
                    if (!e) return "default";
                    let t = e.toLowerCase();
                    return /cưới|wedding|marriage|hôn nhân/i.test(t)
                      ? "wedding"
                      : /sinh nhật|birthday|chúc mừng sinh nhật/i.test(t)
                      ? "birthday"
                      : /tốt nghiệp|graduation|tốt nghiệp|ra trường/i.test(t)
                      ? "graduation"
                      : /sự kiện|event|kỷ niệm|anniversary/i.test(t)
                      ? "event"
                      : /năm mới|new year|tết đến|tết mới|tất niên|tết/i.test(t)
                      ? "newyear"
                      : "default";
                  })(l),
                [l]
              )
            ],
          d = (0, i.useMemo)(
            () =>
              "go" === o
                ? s && Array.isArray(s) && s.length > 0
                  ? s
                  : []
                : "show" === o && s && Array.isArray(s) && s.length > 0
                ? s
                : c,
            [o, s, c]
          ),
          u = (0, i.useRef)(null),
          m = (0, i.useRef)([]),
          [f, x] = (0, i.useState)([]),
          [h, p] = (0, i.useState)(0),
          [g, b] = (0, i.useState)(0),
          v = (e) => (e < 0 ? 0 : e > 1 ? 1 : e),
          y = (e) => {
            let t = v(e);
            return t * t * (3 - 2 * t);
          };
        m.current.length !== d.length &&
          (m.current = Array(d.length)
            .fill(null)
            .map((e, t) => m.current[t] || i.createRef()));
        let k = () => {
          let e = m.current.map((e) => {
              let t = null == e ? void 0 : e.current;
              return t ? (t.offsetHeight || 0) + 6 : 0;
            }),
            t = e.reduce((e, t) => e + t, 0);
          x(e), p(t);
        };
        (0, i.useLayoutEffect)(() => {
          if (!r) return;
          k();
          let e = requestAnimationFrame(k);
          return () => cancelAnimationFrame(e);
        }, [d.length, r]),
          (0, i.useEffect)(() => {
            if (!r) return;
            let e = () => k();
            return (
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, [r, d.length]);
        let w = (0, i.useMemo)(() => {
          let e = [],
            t = 0;
          for (let n = 0; n < f.length; n++) e.push(t), (t += f[n] || 0);
          return e;
        }, [f]);
        (0, i.useEffect)(() => {
          if (!r || !h) return;
          let e = 0,
            t = performance.now(),
            n = (a) => {
              let i = Math.max(0, a - t) / 1e3;
              (t = a),
                b((e) => {
                  let t = e + 24 * i;
                  return t >= h ? t % h : t;
                }),
                (e = requestAnimationFrame(n));
            };
          return (e = requestAnimationFrame(n)), () => cancelAnimationFrame(e);
        }, [r, h]);
        let j =
            null !==
              (n =
                null === (t = u.current) || void 0 === t
                  ? void 0
                  : t.clientHeight) && void 0 !== n
              ? n
              : 180,
          N = (e) => {
            let t = f[e] || 0,
              n = w[e] || 0;
            if (!h || !j || !t) return { top: "".concat(n, "px"), opacity: 1 };
            let a = n - g,
              i = (a = ((a % h) + h) % h) - 20,
              r = y((i + t) / 64),
              s = y((j - i) / 64);
            return { top: "".concat(i, "px"), opacity: Math.min(r, s, 1) };
          };
        return (0, a.jsx)("div", {
          id: "blessing-msg-list",
          ref: u,
          className: r ? "" : "hide-toolbar",
          children: d.map((e, t) =>
            (0, a.jsx)(
              "div",
              {
                className: "blessing-msg",
                ref: m.current[t],
                style: N(t),
                children: (0, a.jsxs)("span", {
                  className: "blessing-text",
                  children: [
                    (0, a.jsx)("strong", { children: e.nameUser }),
                    ": ",
                    e.content,
                  ],
                }),
              },
              t
            )
          ),
        });
      }
      var U = n(50946),
        q = n(74112),
        Q = n(18104),
        K = n(3011);
      let Z = {
          gifts: [],
          giftsMap: {},
          receivedGiftList: [],
          selectedGift: null,
          checkoutGift: null,
          currentGiftType: "gift",
          giftCashMoney: null,
          isGiftListVisible: !1,
          isAnimationPreviewVisible: !1,
          isExiting: !1,
          isCheckoutModalOpen: !1,
          currentIndex: null,
          isLoading: !1,
          checkoutSenderName: "",
        },
        H = (0, K.U)((e, t) => ({
          ...Z,
          fetchGifts: async () => {
            e({ isLoading: !0 });
            try {
              e({ isLoading: !1 });
            } catch (t) {
              console.error("Error fetching gifts:", t), e({ isLoading: !1 });
            }
          },
          setReceivedGiftList: (n) => {
            e({ receivedGiftList: n });
            let { currentIndex: a } = t();
            n.length > 0 && null === a && e({ currentIndex: 0 });
          },
          addReceivedGift: (n) => {
            let { receivedGiftList: a, currentIndex: i } = t(),
              r = [...a, n];
            e({ receivedGiftList: r }),
              null === i && r.length > 0 && e({ currentIndex: r.length - 1 });
          },
          selectGiftItem: (t) => {
            e({ selectedGift: t, isAnimationPreviewVisible: !!t });
          },
          setGiftType: (t) => {
            e({ currentGiftType: t });
          },
          setGiftCashMoney: (t) => {
            e({ giftCashMoney: t });
          },
          showAnimationPreview: () => {
            e({ isAnimationPreviewVisible: !0 });
          },
          hideAnimationPreview: () => {
            e({ isAnimationPreviewVisible: !1, isExiting: !1 });
          },
          toggleGiftList: (t) => {
            e((e) => {
              let n = void 0 !== t ? t : !e.isGiftListVisible,
                a = n || !e.isCheckoutModalOpen;
              return {
                isGiftListVisible: n,
                isAnimationPreviewVisible: !!n && e.isAnimationPreviewVisible,
                selectedGift: a ? null : e.selectedGift,
              };
            });
          },
          hideGiftList: () => {
            e({ isGiftListVisible: !1, isAnimationPreviewVisible: !1 });
          },
          setIsExiting: (t) => {
            e({ isExiting: t });
          },
          setCheckoutModalOpen: (t) => {
            e({ isCheckoutModalOpen: t });
          },
          setCheckoutSenderName: (t) => {
            e({ checkoutSenderName: t });
          },
          setCheckoutGift: (t) => {
            e({ checkoutGift: t });
          },
          setCurrentIndex: (t) => {
            e({ currentIndex: t });
          },
          playNextGift: () => {
            let { receivedGiftList: n, currentIndex: a } = t();
            null !== a &&
              (a + 1 >= n.length
                ? e({ currentIndex: null })
                : e({ currentIndex: a + 1 }));
          },
          getCurrentPlayingGift: () => {
            let { receivedGiftList: e, currentIndex: n } = t();
            return null !== n && e[n] ? e[n] : null;
          },
          reset: () => {
            e(Z);
          },
        }));
      function J() {
        let e = H((e) => e.selectedGift),
          t = H((e) => e.isAnimationPreviewVisible),
          r = H((e) => e.isCheckoutModalOpen),
          s = H((e) => e.hideAnimationPreview),
          o = H((e) => e.setIsExiting),
          c = H((e) => e.selectGiftItem),
          d = (0, i.useRef)(null),
          u = (0, i.useRef)(!1),
          m = (0, i.useRef)(!1),
          f = (0, i.useCallback)(async () => {
            if (null == e ? void 0 : e.dataKey)
              try {
                let {
                    Parser: t,
                    Player: a,
                    Downloader: i,
                  } = await n.e(2345).then(n.t.bind(n, 62345, 23)),
                  r = (0, l.ud)(e.dataKey);
                if (d.current) {
                  try {
                    d.current.stop(), d.current.clear();
                  } catch (e) {
                    console.warn("Error cleaning up previous player:", e);
                  }
                  d.current = null;
                }
                let f = document.getElementById("zenlove-canvas-preview");
                if (!f) {
                  console.error(
                    "Canvas element not found: zenlove-canvas-preview"
                  );
                  return;
                }
                let x = new i(),
                  h = await x.get(r),
                  p = new t(),
                  g = await p.do(h),
                  b = new a(f);
                (d.current = b),
                  (u.current = !1),
                  (m.current = !1),
                  b.set({
                    loop: 2,
                    fillMode: "forwards",
                    playMode: "forwards",
                    startFrame: 0,
                    endFrame: 0,
                  }),
                  (b.onStart = () => {
                    m.current = !1;
                  }),
                  (b.onEnd = () => {
                    (m.current = !0),
                      (u.current = !0),
                      d.current &&
                        d.current.__timeoutId &&
                        clearTimeout(d.current.__timeoutId),
                      y();
                  }),
                  (b.onFrame = () => {}),
                  (b.onPause = () => {}),
                  (b.onResume = () => {});
                let v = !1,
                  y = () => {
                    if (!v) {
                      (v = !0), (m.current = !0), (u.current = !0);
                      try {
                        d.current && d.current.clear(),
                          o(!0),
                          setTimeout(() => {
                            o(!1),
                              s(),
                              c(null),
                              (d.current = null),
                              (u.current = !1),
                              (m.current = !1),
                              (v = !1);
                          }, 500);
                      } catch (e) {
                        console.error("Error in cleanup:", e),
                          s(),
                          c(null),
                          (d.current = null),
                          (u.current = !1),
                          (m.current = !1),
                          (v = !1);
                      }
                    }
                  };
                await b.mount(g), await b.start();
                let k = (g.frames / 30) * 1e3,
                  w = setTimeout(() => {
                    m.current || u.current || y();
                  }, Math.max(2 * k, 5e3));
                d.current.__timeoutId = w;
              } catch (e) {
                if (
                  (console.error("Error in playAnimation:", e),
                  s(),
                  c(null),
                  d.current)
                ) {
                  try {
                    d.current.clear();
                  } catch (e) {
                    console.warn("Error clearing player on error:", e);
                  }
                  d.current = null;
                }
              }
          }, [e, s, c, o]);
        (0, i.useEffect)(() => {
          if (e && t) f();
          else if (!e && !t && d.current) {
            try {
              d.current.stop(), d.current.clear();
            } catch (e) {
              console.warn("Error cleaning up player:", e);
            }
            d.current = null;
          }
          return () => {
            if (d.current) {
              try {
                d.current.stop(), d.current.clear();
              } catch (e) {
                console.warn("Error cleaning up player on unmount:", e);
              }
              d.current = null;
            }
          };
        }, [e, t, f]);
        let x = !e || !t || r;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("canvas", {
              id: "zenlove-canvas-preview",
              className:
                "jsx-adb879738f97f610 " + ((x ? "hidden" : "visible") || ""),
            }),
            (0, a.jsx)(p(), {
              id: "adb879738f97f610",
              children:
                "#zenlove-canvas-preview.jsx-adb879738f97f610{position:absolute;width:100%;height:auto;background-color:transparent;top:-15vh;left:0;-webkit-transition:visibility.2s,opacity.2s;-moz-transition:visibility.2s,opacity.2s;-o-transition:visibility.2s,opacity.2s;transition:visibility.2s,opacity.2s}.hidden.jsx-adb879738f97f610{visibility:hidden;opacity:0}.visible.jsx-adb879738f97f610{visibility:visible;opacity:1}@media screen and (max-height:700px){#zenlove-canvas-preview.jsx-adb879738f97f610{top:-30vh!important}}",
            }),
          ],
        });
      }
      function _(e) {
        let {
            bgUrl: t,
            thumbUrl: n,
            senderName: i,
            senderAvatar: r = "/default-avatar.png",
            giftTitle: s,
            giftText: o = "",
            isExiting: l = !1,
            animationDuration: c = 5,
            zIndex: d = 1e3,
            className: u = "",
            variant: m = "default",
          } = e,
          f = "checkout" === m,
          x = f
            ? {
                position: "relative",
                top: 0,
                left: 0,
                zIndex: d,
                width: "100%",
                maxWidth: "300px",
                margin: "0 auto",
              }
            : { position: "absolute", top: "-60px", left: "14px", zIndex: d },
          h = f ? "60px" : "48px",
          g = f ? "44px" : "37px",
          b = f ? "8px" : "6px",
          v = f ? "80px" : "73px",
          y = f ? "-20px" : "-17px",
          k = f ? "-8px" : "-7px",
          w = f ? "180px" : "150px",
          j = f ? "60px" : "48px";
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              style: x,
              className:
                p().dynamic([["13e3dc3b6f5a954f", [c]]]) +
                " " +
                "animate-slide-gift ".concat(u, " ").concat(l ? "exit" : ""),
              children: [
                (0, a.jsx)("img", {
                  src: t,
                  alt: "slide bg",
                  style: { width: "100%", height: h },
                  className:
                    p().dynamic([["13e3dc3b6f5a954f", [c]]]) +
                    " animate-slide-gift-img",
                }),
                (0, a.jsxs)("div", {
                  style: {
                    width: "100%",
                    height: h,
                    display: "flex",
                    alignItems: "center",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    overflow: "hidden",
                    borderRadius: "48px",
                  },
                  className:
                    p().dynamic([["13e3dc3b6f5a954f", [c]]]) + " s-message",
                  children: [
                    (0, a.jsx)("div", {
                      style: {
                        width: g,
                        height: g,
                        borderRadius: "50%",
                        border: "1px solid hsla(0,0%,100%,0.5)",
                        marginLeft: b,
                        overflow: "hidden",
                      },
                      className:
                        p().dynamic([["13e3dc3b6f5a954f", [c]]]) + " s-head",
                      children: (0, a.jsx)("img", {
                        src: r,
                        alt: "avatar",
                        style: {
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        },
                        className: p().dynamic([["13e3dc3b6f5a954f", [c]]]),
                      }),
                    }),
                    (0, a.jsxs)("div", {
                      style: { marginLeft: b },
                      className:
                        p().dynamic([["13e3dc3b6f5a954f", [c]]]) + " s-content",
                      children: [
                        (0, a.jsx)("div", {
                          style: {
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#fff",
                            textAlign: "left",
                            ...(f && {
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }),
                          },
                          className:
                            p().dynamic([["13e3dc3b6f5a954f", [c]]]) +
                            " s-name",
                          children: i,
                        }),
                        (0, a.jsxs)("div", {
                          style: {
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#fff",
                            textAlign: "left",
                            ...(f && {
                              whiteSpace: "nowrap",
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                            }),
                          },
                          className:
                            p().dynamic([["13e3dc3b6f5a954f", [c]]]) +
                            " s-gift",
                          children: [s, o],
                        }),
                      ],
                    }),
                    (0, a.jsx)("img", {
                      src: "/bg-gray.png",
                      alt: "highlight",
                      style: {
                        width: w,
                        height: j,
                        position: "absolute",
                        top: 0,
                      },
                      className:
                        p().dynamic([["13e3dc3b6f5a954f", [c]]]) +
                        " animate-highlight-effect",
                    }),
                  ],
                }),
                (0, a.jsx)("img", {
                  src: n,
                  alt: "gift thumb",
                  style: {
                    width: v,
                    height: v,
                    position: "absolute",
                    top: y,
                    right: k,
                  },
                  className:
                    p().dynamic([["13e3dc3b6f5a954f", [c]]]) + " s-gift-img",
                }),
              ],
            }),
            (0, a.jsx)(p(), {
              id: "13e3dc3b6f5a954f",
              dynamic: [c],
              children:
                ".animate-slide-gift.__jsx-style-dynamic-selector{-webkit-animation:giftSlideInLeft linear "
                  .concat(c, "s both;-moz-animation:giftSlideInLeft linear ")
                  .concat(c, "s both;-o-animation:giftSlideInLeft linear ")
                  .concat(c, "s both;animation:giftSlideInLeft linear ")
                  .concat(
                    c,
                    "s both}.animate-slide-gift.exit.__jsx-style-dynamic-selector{-webkit-animation:giftSlideOutRight.5s ease-out forwards;-moz-animation:giftSlideOutRight.5s ease-out forwards;-o-animation:giftSlideOutRight.5s ease-out forwards;animation:giftSlideOutRight.5s ease-out forwards}.animate-slide-gift-img.__jsx-style-dynamic-selector{width:210px;height:48px}.animate-highlight-effect.__jsx-style-dynamic-selector{-webkit-animation:around 1.5s linear infinite alternate;-moz-animation:around 1.5s linear infinite alternate;-o-animation:around 1.5s linear infinite alternate;animation:around 1.5s linear infinite alternate}@-webkit-keyframes giftSlideInLeft{0%{-webkit-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}100%{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}}@-moz-keyframes giftSlideInLeft{0%{-moz-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-moz-transform:translatex(0);transform:translatex(0);opacity:1}100%{-moz-transform:translatex(0);transform:translatex(0);opacity:1}}@-o-keyframes giftSlideInLeft{0%{-o-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-o-transform:translatex(0);transform:translatex(0);opacity:1}100%{-o-transform:translatex(0);transform:translatex(0);opacity:1}}@keyframes giftSlideInLeft{0%{-webkit-transform:translatex(-400px);-moz-transform:translatex(-400px);-o-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}100%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}}@-webkit-keyframes giftSlideOutRight{from{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}to{-webkit-transform:translatex(400px);transform:translatex(400px);opacity:0}}@-moz-keyframes giftSlideOutRight{from{-moz-transform:translatex(0);transform:translatex(0);opacity:1}to{-moz-transform:translatex(400px);transform:translatex(400px);opacity:0}}@-o-keyframes giftSlideOutRight{from{-o-transform:translatex(0);transform:translatex(0);opacity:1}to{-o-transform:translatex(400px);transform:translatex(400px);opacity:0}}@keyframes giftSlideOutRight{from{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}to{-webkit-transform:translatex(400px);-moz-transform:translatex(400px);-o-transform:translatex(400px);transform:translatex(400px);opacity:0}}@-webkit-keyframes around{0%{left:-120px}to{left:239px}}@-moz-keyframes around{0%{left:-120px}to{left:239px}}@-o-keyframes around{0%{left:-120px}to{left:239px}}@keyframes around{0%{left:-120px}to{left:239px}}"
                  ),
            }),
          ],
        });
      }
      function W(e) {
        let { currentGift: t, delayBeforePlay: r = 0 } = e,
          s = H((e) => e.selectedGift),
          o = H((e) => e.isGiftListVisible),
          c = H((e) => e.isCheckoutModalOpen),
          d = H((e) => e.playNextGift),
          [u, m] = (0, i.useState)(!1),
          [f, x] = (0, i.useState)(!1),
          h = (0, i.useRef)(null),
          g = null == t ? void 0 : t.gift,
          b = g ? (0, l.ud)(g.dataKey) : null,
          v = g ? (0, l.ud)(g.thumbKey) : null,
          y = g ? (0, l.ud)(g.bgKey) : null,
          k = null == g ? void 0 : g.title,
          w = async () => {
            if (b && g.dataKey)
              try {
                if ((m(!0), h.current)) {
                  try {
                    h.current.stop(), h.current.clear();
                  } catch (e) {
                    console.warn("Error cleaning up previous player:", e);
                  }
                  h.current = null;
                }
                let e = document.getElementById("zenlove-canvas");
                if (!e) {
                  console.error("Canvas element not found: zenlove-canvas");
                  return;
                }
                let {
                    Parser: t,
                    Player: a,
                    Downloader: i,
                  } = await n.e(2345).then(n.t.bind(n, 62345, 23)),
                  r = new i(),
                  s = await r.get(b),
                  o = new t(),
                  l = await o.do(s),
                  c = new a(e);
                (h.current = c),
                  c.set({
                    loop: 2,
                    fillMode: "forwards",
                    playMode: "forwards",
                    startFrame: 0,
                    endFrame: 0,
                  }),
                  await c.mount(l);
                let u = !1,
                  f = () => {
                    if (!u) {
                      (u = !0),
                        h.current &&
                          h.current.__timeoutId &&
                          clearTimeout(h.current.__timeoutId);
                      try {
                        x(!0),
                          setTimeout(() => {
                            m(!1), x(!1), d();
                          }, 500);
                      } catch (e) {
                        console.error("Error in handleAnimationEnd:", e),
                          m(!1),
                          d();
                      }
                    }
                  };
                (c.onEnd = f), await c.start();
                let p = (l.frames / 30) * 1e3,
                  g = setTimeout(() => {
                    u || f();
                  }, Math.max(2 * p, 5e3));
                h.current.__timeoutId = g;
              } catch (e) {
                console.error("Error playing SVGA:", e), m(!1), d();
              }
          };
        if (
          ((0, i.useEffect)(() => {
            if (t && g) {
              if (r > 0) {
                let e = setTimeout(() => {
                  w();
                }, r);
                return () => clearTimeout(e);
              }
              return (
                w(),
                () => {
                  if (h.current) {
                    try {
                      h.current.stop(), h.current.clear();
                    } catch (e) {
                      console.warn("Error cleaning up player on unmount:", e);
                    }
                    h.current = null;
                  }
                }
              );
            }
          }, [t, r]),
          (0, i.useEffect)(() => {
            var e, t, n, a;
            if (h.current) {
              if (s || o || c)
                try {
                  null === (e = (t = h.current).pause) ||
                    void 0 === e ||
                    e.call(t);
                } catch (e) {
                  console.warn("Error pausing player:", e);
                }
              else
                try {
                  null === (n = (a = h.current).resume) ||
                    void 0 === n ||
                    n.call(a);
                } catch (e) {
                  console.warn("Error resuming player:", e);
                }
            }
          }, [s, o, c]),
          !t)
        )
          return null;
        let j = u && !o && !c;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            j &&
              y &&
              v &&
              k &&
              (0, a.jsx)(_, {
                bgUrl: y,
                thumbUrl: v,
                senderName: t.senderName || "Người gửi",
                senderAvatar: t.senderAvatar,
                giftTitle: "gửi ".concat(k),
                isExiting: f,
                animationDuration: 7,
                zIndex: 2,
              }),
            j &&
              t.content &&
              (0, a.jsx)("div", {
                className: "jsx-793e924a18e0097d s-gift-message",
                children: t.content,
              }),
            (0, a.jsx)(p(), {
              id: "793e924a18e0097d",
              children:
                ".s-gift-message.jsx-793e924a18e0097d{position:absolute;top:-160px;left:50%;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-moz-transform:translatex(-50%)translatey(15px);-o-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px);z-index:1000;padding:0 20px;width:100%;text-align:center;font-size:16px;font-weight:500;color:#fff;-webkit-letter-spacing:.3px;-moz-letter-spacing:.3px;-ms-letter-spacing:.3px;letter-spacing:.3px;line-height:1.5;-webkit-animation:messageAppear 1s ease-out forwards;-moz-animation:messageAppear 1s ease-out forwards;-o-animation:messageAppear 1s ease-out forwards;animation:messageAppear 1s ease-out forwards;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);-webkit-text-stroke:.5px#000}@-webkit-keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}@-moz-keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);-moz-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-moz-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}@-o-keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);-o-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-o-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}@keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);-moz-transform:translatex(-50%)translatey(30px);-o-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-moz-transform:translatex(-50%)translatey(15px);-o-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}",
            }),
          ],
        });
      }
      function X(e) {
        let { currentGift: t, delayBeforePlay: n = 0 } = e,
          r = H((e) => e.currentIndex),
          s = H((e) => e.playNextGift),
          o = H((e) => e.isGiftListVisible),
          c = H((e) => e.isCheckoutModalOpen),
          [d, u] = (0, i.useState)(!1),
          { gift: m, senderName: f, senderAvatar: x, content: h } = t,
          g = (0, l.ud)(m.thumbKey),
          b = (0, l.ud)(m.bgKey);
        return ((0, i.useEffect)(() => {
          if ((u(!1), n > 0)) {
            let e = setTimeout(() => {
              u(!0);
            }, n);
            return () => clearTimeout(e);
          }
          u(!0);
        }, [n, t.id]),
        (0, i.useEffect)(() => {
          if (null === r || !d) return;
          let e = setTimeout(() => {
            s();
          }, 6e3);
          return () => clearTimeout(e);
        }, [r, d, s]),
        !d || o || c)
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "jsx-29326308deefcb5 minigift-display-wrapper",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "jsx-29326308deefcb5 minigift-slide",
                      children: [
                        (0, a.jsx)("img", {
                          src: b,
                          alt: "slide bg",
                          style: { width: "210px", height: "48px" },
                          className: "jsx-29326308deefcb5 minigift-slide-bg",
                        }),
                        (0, a.jsxs)("div", {
                          className: "jsx-29326308deefcb5 minigift-slide-info",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "jsx-29326308deefcb5 gift-giver-avatar",
                              children: (0, a.jsx)("img", {
                                src: x || "/default-avatar.png",
                                alt: "avatar",
                                className: "jsx-29326308deefcb5",
                              }),
                            }),
                            (0, a.jsxs)("div", {
                              className: "jsx-29326308deefcb5 minigift-content",
                              children: [
                                (0, a.jsx)("div", {
                                  className:
                                    "jsx-29326308deefcb5 minigift-sender-name",
                                  children: f || "Người gửi",
                                }),
                                (0, a.jsx)("div", {
                                  className:
                                    "jsx-29326308deefcb5 minigift-message",
                                  children: h || "gửi ".concat(m.title),
                                }),
                              ],
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "jsx-29326308deefcb5 minigift-thumb-wrapper",
                              children: (0, a.jsx)("img", {
                                src: g,
                                alt: "gift thumb",
                                className: "jsx-29326308deefcb5 minigift-thumb",
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)("img", {
                          src: "/bg-gray.png",
                          alt: "highlight",
                          style: {
                            width: "150px",
                            height: "48px",
                            position: "absolute",
                            top: 0,
                          },
                          className:
                            "jsx-29326308deefcb5 animate-highlight-effect",
                        }),
                      ],
                    }),
                    h &&
                      (0, a.jsx)("div", {
                        className: "jsx-29326308deefcb5 s-gift-message",
                        children: h,
                      }),
                  ],
                }),
                (0, a.jsx)(p(), {
                  id: "29326308deefcb5",
                  children:
                    ".minigift-display-wrapper.jsx-29326308deefcb5{position:absolute;top:-60px;left:14px;z-index:2;display:block}.minigift-slide.jsx-29326308deefcb5{position:relative;-webkit-border-radius:50px;-moz-border-radius:50px;border-radius:50px;overflow:hidden;-webkit-animation:giftSlideInLeft linear 6.5s both;-moz-animation:giftSlideInLeft linear 6.5s both;-o-animation:giftSlideInLeft linear 6.5s both;animation:giftSlideInLeft linear 6.5s both}.minigift-slide-bg.jsx-29326308deefcb5{width:210px;height:48px;position:absolute;top:0;left:0}.minigift-slide-info.jsx-29326308deefcb5{position:relative;color:white;font-size:12px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding:2px 0;width:210px;height:48px}.gift-giver-avatar.jsx-29326308deefcb5{width:37px;height:37px;border:1px solid hsla(0,0%,100%,.5);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;margin-left:6px;overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0}.gift-giver-avatar.jsx-29326308deefcb5 img.jsx-29326308deefcb5{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.minigift-content.jsx-29326308deefcb5{text-align:left;margin-left:6px;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;overflow:hidden}.minigift-sender-name.jsx-29326308deefcb5{font-size:14px;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.minigift-message.jsx-29326308deefcb5{font-size:11px;font-weight:700;color:#fff;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis}.minigift-thumb-wrapper.jsx-29326308deefcb5{min-width:73px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:-7px}.minigift-thumb.jsx-29326308deefcb5{width:73px;height:73px;position:absolute;top:-17px;right:-7px}.s-gift-message.jsx-29326308deefcb5{position:absolute;top:-160px;left:50%;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-moz-transform:translatex(-50%)translatey(15px);-o-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px);z-index:1000;padding:0 20px;width:100%;text-align:center;font-size:16px;font-weight:500;color:#fff;-webkit-letter-spacing:.3px;-moz-letter-spacing:.3px;-ms-letter-spacing:.3px;letter-spacing:.3px;line-height:1.5;-webkit-animation:messageAppear 1s ease-out forwards;-moz-animation:messageAppear 1s ease-out forwards;-o-animation:messageAppear 1s ease-out forwards;animation:messageAppear 1s ease-out forwards;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);-webkit-text-stroke:.5px#000}@-webkit-keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}@-moz-keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);-moz-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-moz-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}@-o-keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);-o-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-o-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}@keyframes messageAppear{from{opacity:0;-webkit-transform:translatex(-50%)translatey(30px);-ms-transform:translatex(-50%)translatey(30px);-moz-transform:translatex(-50%)translatey(30px);-o-transform:translatex(-50%)translatey(30px);transform:translatex(-50%)translatey(30px)}to{opacity:1;-webkit-transform:translatex(-50%)translatey(15px);-ms-transform:translatex(-50%)translatey(15px);-moz-transform:translatex(-50%)translatey(15px);-o-transform:translatex(-50%)translatey(15px);transform:translatex(-50%)translatey(15px)}}.animate-highlight-effect.jsx-29326308deefcb5{-webkit-animation:around 1.5s linear infinite alternate;-moz-animation:around 1.5s linear infinite alternate;-o-animation:around 1.5s linear infinite alternate;animation:around 1.5s linear infinite alternate}@-webkit-keyframes giftSlideInLeft{0%{-webkit-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-webkit-transform:translatex(0);transform:translatex(0);opacity:1}100%{opacity:0}}@-moz-keyframes giftSlideInLeft{0%{-moz-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-moz-transform:translatex(0);transform:translatex(0);opacity:1}100%{opacity:0}}@-o-keyframes giftSlideInLeft{0%{-o-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-o-transform:translatex(0);transform:translatex(0);opacity:1}100%{opacity:0}}@keyframes giftSlideInLeft{0%{-webkit-transform:translatex(-400px);-moz-transform:translatex(-400px);-o-transform:translatex(-400px);transform:translatex(-400px);opacity:1}10%,90%{-webkit-transform:translatex(0);-moz-transform:translatex(0);-o-transform:translatex(0);transform:translatex(0);opacity:1}100%{opacity:0}}@-webkit-keyframes around{0%{left:-120px}to{left:239px}}@-moz-keyframes around{0%{left:-120px}to{left:239px}}@-o-keyframes around{0%{left:-120px}to{left:239px}}@keyframes around{0%{left:-120px}to{left:239px}}",
                }),
              ],
            });
      }
      var Y = n(71632);
      let $ = (0, n(33818).g)("https://api.zenlove.me");
      function ee(e) {
        var t;
        let { pageId: n, isTemplatePreview: r = !1 } = e,
          s = H((e) => e.receivedGiftList),
          o = H((e) => e.currentIndex),
          l = H((e) => e.isGiftListVisible),
          c = H((e) => e.isCheckoutModalOpen),
          d = H((e) => e.setReceivedGiftList),
          { data: u } =
            ((t = { enabled: !!n && !r }),
            (0, Y.a)({
              queryKey: ["page-received-gifts", n],
              queryFn: async () => {
                if (!n) return [];
                try {
                  var e;
                  let t = await $("/v1/gifts/".concat(n, "/received")),
                    a =
                      (null === (e = t.data) || void 0 === e
                        ? void 0
                        : e.gifts) || [],
                    i = new Set(a.map((e) => e.giftCode)),
                    r = Array.from(i).map((e) => $("/v1/gifts/".concat(e))),
                    s = await Promise.all(r),
                    o = new Map();
                  s.forEach((e) => {
                    e.success && e.data && o.set(e.data.code, e.data);
                  });
                  let l = [];
                  for (let e of a) {
                    let t = o.get(e.giftCode);
                    if (!t) {
                      console.warn(
                        'Gift with code "'.concat(
                          e.giftCode,
                          '" not found, skipping'
                        )
                      );
                      continue;
                    }
                    l.push({
                      id: e.id,
                      gift: t,
                      senderName: e.senderName || void 0,
                      senderAvatar: e.senderAvatar || void 0,
                      content: e.giftMessage || void 0,
                      timestamp: Date.now(),
                      giftType: e.giftType,
                    });
                  }
                  return l;
                } catch (e) {
                  return console.error("Error fetching received gifts:", e), [];
                }
              },
              enabled: !!n && (null == t ? void 0 : t.enabled) !== !1,
              staleTime: 6e4,
              gcTime: 3e5,
            }));
        (0, i.useEffect)(() => {
          u ? d(u) : r && d([]);
        }, [u, r, d]);
        let m = null !== o && s[o] ? s[o] : null,
          f =
            null === o
              ? 0
              : 0 === o
              ? 1e3
              : 2500 + Math.min((o - 1) * 300, 2500);
        return l || c
          ? null
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "jsx-26335977bd616dac received-gifts-wrapper",
                  children:
                    m &&
                    (() => {
                      if (!m) return null;
                      let e =
                        m.giftType ||
                        ("animated" === m.gift.type && m.gift.dataKey
                          ? "animated"
                          : "static");
                      return "cash" === e || "static" === e
                        ? (0, a.jsx)(X, { currentGift: m, delayBeforePlay: f })
                        : (0, a.jsx)(W, { currentGift: m, delayBeforePlay: f });
                    })(),
                }),
                (0, a.jsx)(p(), {
                  id: "26335977bd616dac",
                  children:
                    ".received-gifts-wrapper.jsx-26335977bd616dac{position:absolute;z-index:9999988;bottom:250px;display:block;width:100%;pointer-events:none}",
                }),
              ],
            });
      }
      function et() {
        let e = H((e) => e.selectedGift),
          t = H((e) => e.isExiting),
          n = H((e) => e.giftCashMoney),
          i = H((e) => e.currentGiftType),
          r = H((e) => e.isGiftListVisible);
        if (!e || !r || t) return null;
        let { title: s, thumbKey: o, bgKey: c } = e,
          d = (0, l.ud)(o),
          u = (0, l.ud)(c),
          m =
            "cash" === i && n ? " ".concat(n.toLocaleString("vi-VN"), "đ") : "";
        return (0, a.jsx)(_, {
          bgUrl: u,
          thumbUrl: d,
          senderName: "[T\xean bạn]",
          giftTitle: "Gửi ".concat(s),
          giftText: m,
          isExiting: t,
          animationDuration: 5,
          zIndex: 1e3,
          className: "gift-minibar capitalize",
        });
      }
      function en() {
        let { isPaymentModalOpen: e = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = H((e) => e.selectedGift),
          n = H((e) => e.isGiftListVisible),
          i = H((e) => e.isAnimationPreviewVisible),
          r = H((e) => e.isCheckoutModalOpen),
          s = H((e) => e.receivedGiftList),
          o = H((e) => e.currentIndex),
          l = null !== o && void 0 !== s[o];
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              id: "zenlove-animation-box",
              className:
                "jsx-5a7acb9570b61bf2 " +
                ((!((t && i) || l) || r || e ? "hidden" : "visible") || ""),
              children: [
                (0, a.jsx)("canvas", {
                  id: "zenlove-canvas",
                  className:
                    "jsx-5a7acb9570b61bf2 " +
                    ((t || n ? "hidden" : "visible") || ""),
                }),
                (0, a.jsx)(J, {}),
              ],
            }),
            (0, a.jsx)(p(), {
              id: "5a7acb9570b61bf2",
              children:
                "#zenlove-animation-box.jsx-5a7acb9570b61bf2{position:absolute;left:0;top:0;width:100%;height:38rem;z-index:9999998;pointer-events:none}#zenlove-canvas.jsx-5a7acb9570b61bf2{position:absolute;width:100%;height:auto;background-color:transparent;top:-15vh;left:0;-webkit-transition:visibility.2s,opacity.2s;-moz-transition:visibility.2s,opacity.2s;-o-transition:visibility.2s,opacity.2s;transition:visibility.2s,opacity.2s}.hidden.jsx-5a7acb9570b61bf2{visibility:hidden;opacity:0}.visible.jsx-5a7acb9570b61bf2{visibility:visible;opacity:1}@media screen and (max-height:700px){#zenlove-canvas.jsx-5a7acb9570b61bf2{top:-30vh!important}}",
            }),
          ],
        });
      }
      var ea = n(94716),
        ei = n(59646);
      function er(e) {
        let { viewContext: t, ownerName: n, pageId: r } = e,
          s = H((e) => e.selectedGift),
          [o, l] = (0, i.useState)(""),
          c = H((e) => e.setCheckoutModalOpen),
          d = H((e) => e.setCheckoutSenderName),
          u = H((e) => e.setCheckoutGift),
          { guestName: m } = (0, L.B)();
        (0, i.useEffect)(() => {
          let e = localStorage.getItem("zenUser-".concat(r)) || m;
          e && l(e);
        }, [r, m]);
        let f = "template-preview" === t || "show" === t,
          x = () => {
            if (f) {
              C.ZP.warning("Kh\xf4ng thể gửi qu\xe0 trong chế độ xem mẫu");
              return;
            }
            if (!o.trim()) {
              C.ZP.warning("Vui l\xf2ng nhập t\xean của bạn");
              return;
            }
            if (!s) {
              C.ZP.warning("Vui l\xf2ng chọn qu\xe0 tặng");
              return;
            }
            o.trim() && localStorage.setItem("zenUser-".concat(r), o.trim()),
              d(o.trim()),
              u(s),
              c(!0);
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("div", {
              className: "jsx-27d4d4e760360cbb gift-give-foot",
              children: [
                (0, a.jsxs)("div", {
                  className: "jsx-27d4d4e760360cbb give-tip",
                  children: [
                    "H\xe3y để những m\xf3n qu\xe0 xinh đẹp n\xe0y mang niềm vui bất ngờ đến với",
                    " ",
                    (0, a.jsx)("strong", {
                      className: "jsx-27d4d4e760360cbb",
                      children: n || "người nhận",
                    }),
                    " nha",
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "jsx-27d4d4e760360cbb give-username",
                  children: [
                    (0, a.jsx)("div", {
                      className: "jsx-27d4d4e760360cbb gift_input",
                      children: (0, a.jsx)("input", {
                        type: "text",
                        placeholder: "T\xean của bạn",
                        value: o,
                        onChange: (e) => l(e.target.value),
                        onKeyDown: (e) => {
                          "Enter" === e.key && x();
                        },
                        className: "jsx-27d4d4e760360cbb",
                      }),
                    }),
                    (0, a.jsx)("button", {
                      onClick: x,
                      className: "jsx-27d4d4e760360cbb zenlove-btn rounded",
                      children: "Gửi",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(p(), {
              id: "27d4d4e760360cbb",
              children:
                ".gift-give-foot.jsx-27d4d4e760360cbb{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;padding-bottom:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-shadow:0 -.3rem .8rem 0 rgba(0,0,0,.08);-moz-box-shadow:0 -.3rem .8rem 0 rgba(0,0,0,.08);box-shadow:0 -.3rem .8rem 0 rgba(0,0,0,.08);-webkit-border-radius:.6rem .6rem 0 0;-moz-border-radius:.6rem .6rem 0 0;border-radius:.6rem .6rem 0 0;background:#fff}.give-tip.jsx-27d4d4e760360cbb{font-size:12px;color:#999;margin-top:8px;text-align:center;padding:0 15px}.give-username.jsx-27d4d4e760360cbb{margin-top:10px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:10px;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:0 15px;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.gift_input.jsx-27d4d4e760360cbb{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.gift_input.jsx-27d4d4e760360cbb input.jsx-27d4d4e760360cbb{text-align:center;border:1px solid#ff4969;height:40px;background:#f7f8f9;font-size:14px;-webkit-border-radius:30px;-moz-border-radius:30px;border-radius:30px;width:100%;outline:none;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 15px}.gift_input.jsx-27d4d4e760360cbb input.jsx-27d4d4e760360cbb:focus{border-color:#ed5566;background:#fff}.zenlove-btn.jsx-27d4d4e760360cbb{background:#ed5566;color:#fff;border:none;cursor:pointer;height:40px;padding:0 20px;font-size:14px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-transition:background.2s ease;-moz-transition:background.2s ease;-o-transition:background.2s ease;transition:background.2s ease}.zenlove-btn.jsx-27d4d4e760360cbb:hover{background:#e04455}.zenlove-btn.jsx-27d4d4e760360cbb:active{background:#d43d4e}.rounded.jsx-27d4d4e760360cbb{-webkit-border-radius:40px;-moz-border-radius:40px;border-radius:40px}",
            }),
          ],
        });
      }
      function es(e) {
        let { viewContext: t, ownerName: n, pageId: r } = e,
          {
            data: s,
            isLoading: o,
            error: c,
          } = (0, ea.xs)({ limit: 100, sortBy: "price", sortOrder: "asc" }),
          d = (0, i.useMemo)(
            () => (null == s ? void 0 : s.items) || [],
            [null == s ? void 0 : s.items]
          ),
          u = H((e) => e.selectedGift),
          m = H((e) => e.selectGiftItem),
          f = (0, i.useRef)(null),
          x = (e) => {
            m(e);
          };
        return ((0, i.useEffect)(() => {
          if (u && d.length > 0 && f.current) {
            let e = document.querySelector('[data-index="'.concat(u.id, '"]'));
            if (e && f.current) {
              let t = e.getBoundingClientRect(),
                n = f.current.getBoundingClientRect(),
                a = t.top - n.top - (n.height - t.height) / 2;
              f.current.scrollTo({
                top: f.current.scrollTop + a,
                behavior: "smooth",
              });
            }
          }
        }, [u, d]),
        o)
          ? (0, a.jsx)("div", {
              className: "bar-gift-box",
              children: (0, a.jsx)("div", {
                className: "loading",
                children: (0, a.jsx)("p", {
                  className: "text-gray-500 text-sm",
                  children: "Đang tải qu\xe0 tặng...",
                }),
              }),
            })
          : c
          ? (0, a.jsx)("div", {
              className: "bar-gift-box",
              children: (0, a.jsx)("div", {
                className: "error",
                children: (0, a.jsx)("p", {
                  className: "text-red-500 text-sm",
                  children: "Kh\xf4ng thể tải danh s\xe1ch qu\xe0 tặng",
                }),
              }),
            })
          : 0 === d.length
          ? (0, a.jsx)("div", {
              className: "gift-box",
              children: (0, a.jsx)("div", {
                className: "flex justify-center items-center py-12",
                children: (0, a.jsx)("p", {
                  className: "text-gray-500 text-sm m-0",
                  children: "Chưa c\xf3 qu\xe0 tặng n\xe0o",
                }),
              }),
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsxs)("div", {
                  className: "jsx-eef7de7001bd787d bar-gift-box",
                  children: [
                    (0, a.jsx)("div", {
                      ref: f,
                      className: "jsx-eef7de7001bd787d bar-gift-list",
                      children: (0, a.jsx)("div", {
                        className: "jsx-eef7de7001bd787d gift-ul",
                        children: d.map((e) => {
                          let t = (0, l.ud)(e.thumbKey),
                            n = (null == u ? void 0 : u.id) === e.id;
                          return (0, a.jsxs)(
                            "div",
                            {
                              "data-index": e.id,
                              onClick: () => x(e),
                              className:
                                "jsx-eef7de7001bd787d " +
                                "gift-li ".concat(n ? "active" : ""),
                              children: [
                                t
                                  ? (0, a.jsx)(N.default, {
                                      src: t,
                                      alt: e.title,
                                      width: 64,
                                      height: 64,
                                      className: "gift-image",
                                      unoptimized: !0,
                                    })
                                  : (0, a.jsx)("div", {
                                      className:
                                        "jsx-eef7de7001bd787d gift-image-placeholder",
                                      children: (0, a.jsx)("span", {
                                        className: "jsx-eef7de7001bd787d",
                                        children: "\uD83C\uDF81",
                                      }),
                                    }),
                                (0, a.jsx)("div", {
                                  className: "jsx-eef7de7001bd787d title",
                                  children: e.title,
                                }),
                                (0, a.jsxs)("div", {
                                  className: "jsx-eef7de7001bd787d price",
                                  children: [
                                    e.price.toLocaleString("vi-VN"),
                                    " ",
                                    (0, a.jsx)(ei.Icon, {
                                      icon: "noto:heart-suit",
                                      width: 14,
                                      height: 14,
                                    }),
                                  ],
                                }),
                              ],
                            },
                            e.id
                          );
                        }),
                      }),
                    }),
                    (0, a.jsx)(er, { viewContext: t, ownerName: n, pageId: r }),
                  ],
                }),
                (0, a.jsx)(p(), {
                  id: "eef7de7001bd787d",
                  children:
                    ".bar-gift-box.jsx-eef7de7001bd787d{position:relative;background:#fff}.bar-gift-list.jsx-eef7de7001bd787d{position:relative;height:250px;padding:5px 0 10px 0;overflow-y:scroll;-ms-scroll-chaining:none;overscroll-behavior:contain}.gift-ul.jsx-eef7de7001bd787d{width:100%;display:grid;grid-template-columns:repeat(4,1fr);row-gap:3px;padding:0 15px}.gift-li.jsx-eef7de7001bd787d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-flow:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-flow:column;flex-flow:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;position:relative;overflow:hidden;padding:3px;cursor:pointer;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;border:1px solid transparent;-webkit-transition:all.2s ease;-moz-transition:all.2s ease;-o-transition:all.2s ease;transition:all.2s ease}.gift-li.jsx-eef7de7001bd787d:hover{-webkit-transform:translatey(-2px);-moz-transform:translatey(-2px);-ms-transform:translatey(-2px);-o-transform:translatey(-2px);transform:translatey(-2px);-webkit-box-shadow:0 4px 8px rgba(0,0,0,.1);-moz-box-shadow:0 4px 8px rgba(0,0,0,.1);box-shadow:0 4px 8px rgba(0,0,0,.1)}.gift-li.active.jsx-eef7de7001bd787d{background:#fff4f6;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;outline:1px solid#ed5566}.gift-image.jsx-eef7de7001bd787d{width:4rem;height:4rem;-o-object-fit:contain;object-fit:contain}.gift-image-placeholder.jsx-eef7de7001bd787d{width:4rem;height:4rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:2rem}.title.jsx-eef7de7001bd787d{font-size:11px;color:#666;margin-top:5px;white-space:nowrap;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;text-align:center;width:80px}.price.jsx-eef7de7001bd787d{font-size:.6rem;color:#999;margin-top:.15rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:2px}.loading.jsx-eef7de7001bd787d,.error.jsx-eef7de7001bd787d{height:250px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.error.jsx-eef7de7001bd787d{color:red}",
                }),
              ],
            });
      }
      var eo = n(88589),
        el = n(53743),
        ec = n(50742),
        ed = n(55846),
        eu = n(13377);
      let { TextArea: em } = eo.default,
        ef = ["/default-avatar.png", "/assets/images/avatar-default.png"];
      function ex(e) {
        var t;
        let {
            open: n,
            onClose: r,
            gift: s,
            senderName: o,
            pageId: c,
            viewContext: d = "go",
            onCheckout: u,
          } = e,
          [m, f] = (0, i.useState)(""),
          [x, h] = (0, i.useState)(ef[0]),
          [g, b] = (0, i.useState)(!1),
          [v, y] = (0, i.useState)(o),
          [k, w] = (0, i.useState)(!1);
        if (
          ((0, i.useEffect)(() => {
            n && o && y(o);
          }, [n, o]),
          (0, i.useEffect)(() => {
            n || (f(""), h(ef[0]), w(!1));
          }, [n]),
          !s)
        )
          return null;
        let j = (0, l.ud)(s.thumbKey),
          z = (0, l.ud)(s.bgKey),
          C = async () => {
            if (s) {
              b(!0);
              try {
                await u({
                  gift: s,
                  senderName: v,
                  message: m.trim(),
                  avatar: x,
                  pageId: c = "quy-hai-220326",
                });
              } catch (e) {
                console.error("Checkout error:", e);
              } finally {
                b(!1);
              }
            }
          };
        return (0, a.jsxs)(el.default, {
          title: "X\xe1c nhận gửi qu\xe0",
          open: n,
          onCancel: void 0,
          footer: null,
          width: 400,
          closable: !1,
          maskClosable: !1,
          keyboard: !1,
          destroyOnHidden: !1,
          zIndex: 99999999,
          centered: !0,
          children: [
            (0, a.jsxs)("div", {
              className: "jsx-c0be9bf0abc81cf0 checkout-modal-content",
              children: [
                (0, a.jsx)("div", {
                  className: "jsx-c0be9bf0abc81cf0 checkout-gift-preview",
                  children: (0, a.jsx)(_, {
                    bgUrl: z,
                    thumbUrl: j,
                    senderName: v,
                    senderAvatar: x,
                    giftTitle: m.trim() || "gửi ".concat(s.title),
                    animationDuration: 0,
                    zIndex: 1,
                    variant: "checkout",
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: "jsx-c0be9bf0abc81cf0 checkout-gift-info",
                  children: [
                    (0, a.jsx)("div", {
                      className: "jsx-c0be9bf0abc81cf0 checkout-gift-title",
                      children: s.title,
                    }),
                    (0, a.jsxs)("div", {
                      className: "jsx-c0be9bf0abc81cf0 checkout-gift-price",
                      children: [
                        (0, a.jsxs)("span", {
                          className:
                            "jsx-c0be9bf0abc81cf0 checkout-gift-price-coin",
                          children: [
                            null === (t = s.price) || void 0 === t
                              ? void 0
                              : t.toLocaleString("vi-VN"),
                            " ",
                            (0, a.jsx)(ei.Icon, { icon: "noto:heart-suit" }),
                          ],
                        }),
                        (0, a.jsxs)("span", {
                          className:
                            "jsx-c0be9bf0abc81cf0 checkout-gift-price-vnd",
                          children: [
                            "≈ ",
                            (s.price ? 10 * s.price : 0).toLocaleString(
                              "vi-VN"
                            ),
                            "đ",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "jsx-c0be9bf0abc81cf0 checkout-form-item",
                  children: [
                    (0, a.jsx)("label", {
                      className: "jsx-c0be9bf0abc81cf0 checkout-label",
                      children: "Người gửi",
                    }),
                    k
                      ? (0, a.jsx)("div", {
                          className:
                            "jsx-c0be9bf0abc81cf0 checkout-sender-edit",
                          children: (0, a.jsx)(eo.default, {
                            value: v,
                            onChange: (e) => y(e.target.value),
                            onPressEnter: () => w(!1),
                            onBlur: () => w(!1),
                            placeholder: "Nhập t\xean của bạn",
                            maxLength: 50,
                            disabled: g,
                            autoFocus: !0,
                          }),
                        })
                      : (0, a.jsxs)("div", {
                          className:
                            "jsx-c0be9bf0abc81cf0 checkout-sender-display",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "jsx-c0be9bf0abc81cf0 checkout-sender-name",
                              children: v || "Chưa c\xf3 t\xean",
                            }),
                            (0, a.jsx)(ec.ZP, {
                              type: "text",
                              size: "small",
                              icon: (0, a.jsx)(eu.Z, {}),
                              onClick: () => w(!0),
                              disabled: g,
                              className: "checkout-edit-name-btn",
                              children: "Sửa t\xean",
                            }),
                          ],
                        }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "jsx-c0be9bf0abc81cf0 checkout-form-item",
                  children: [
                    (0, a.jsx)("label", {
                      className: "jsx-c0be9bf0abc81cf0 checkout-label",
                      children: "Tin nhắn (t\xf9y chọn)",
                    }),
                    (0, a.jsx)(em, {
                      rows: 3,
                      placeholder: "Nhập lời nhắn cho người nhận...",
                      value: m,
                      onChange: (e) => f(e.target.value),
                      maxLength: 100,
                      showCount: !0,
                      disabled: g,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "jsx-c0be9bf0abc81cf0 checkout-form-item",
                  children: [
                    (0, a.jsx)("label", {
                      className: "jsx-c0be9bf0abc81cf0 checkout-label",
                      children: "Ảnh đại diện",
                    }),
                    (0, a.jsx)(ed.ZP.Group, {
                      value: x,
                      onChange: (e) => h(e.target.value),
                      disabled: g,
                      className: "checkout-avatar-group",
                      children: ef.map((e, t) =>
                        (0, a.jsx)(
                          ed.ZP,
                          {
                            value: e,
                            className: "checkout-avatar-radio",
                            children: (0, a.jsx)("div", {
                              className:
                                "jsx-c0be9bf0abc81cf0 checkout-avatar-option",
                              children: (0, a.jsx)(N.default, {
                                src: e,
                                alt: "Avatar ".concat(t + 1),
                                width: 40,
                                height: 40,
                                className: "checkout-avatar-img",
                                unoptimized: !0,
                              }),
                            }),
                          },
                          t
                        )
                      ),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: "jsx-c0be9bf0abc81cf0 checkout-actions",
                  children: [
                    (0, a.jsx)(ec.ZP, {
                      className: "checkout-button-cancel",
                      onClick: r,
                      disabled: g,
                      size: "large",
                      children: "Hủy",
                    }),
                    (0, a.jsx)(ec.ZP, {
                      type: "primary",
                      size: "large",
                      onClick: C,
                      disabled: g || "template-preview" === d || "show" === d,
                      className: "checkout-button",
                      icon: g ? (0, a.jsx)(T.Z, {}) : null,
                      title:
                        "template-preview" === d || "show" === d
                          ? "Trang demo kh\xf4ng thể thanh to\xe1n"
                          : void 0,
                      children: g ? "Đang xử l\xfd..." : "Thanh to\xe1n",
                    }),
                  ],
                }),
              ],
            }),
            (0, a.jsx)(p(), {
              id: "c0be9bf0abc81cf0",
              children:
                ".checkout-modal-content.jsx-c0be9bf0abc81cf0{padding:10px 0}.checkout-gift-preview.jsx-c0be9bf0abc81cf0{margin-bottom:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.checkout-gift-info.jsx-c0be9bf0abc81cf0{text-align:center;margin-bottom:20px;padding:15px;background:#f7f8f9;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px}.checkout-gift-title.jsx-c0be9bf0abc81cf0{font-size:18px;font-weight:700;color:#333;margin-bottom:8px}.checkout-gift-price.jsx-c0be9bf0abc81cf0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px}.checkout-gift-price-coin.jsx-c0be9bf0abc81cf0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:4px;font-size:18px;font-weight:700;color:#ed5566}.checkout-gift-price-vnd.jsx-c0be9bf0abc81cf0{font-size:14px;font-weight:500;color:#999}.checkout-form-item.jsx-c0be9bf0abc81cf0{margin-bottom:20px}.checkout-label.jsx-c0be9bf0abc81cf0{display:block;font-size:14px;font-weight:600;color:#333;margin-bottom:8px}.checkout-sender-display.jsx-c0be9bf0abc81cf0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;gap:8px;padding:10px;background:#f7f8f9;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.checkout-sender-name.jsx-c0be9bf0abc81cf0{font-size:14px;font-weight:600;color:#333;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1}.checkout-edit-name-btn.jsx-c0be9bf0abc81cf0{padding:0;height:auto;font-size:12px;color:#ed5566}.checkout-edit-name-btn.jsx-c0be9bf0abc81cf0:hover{color:#e04455}.checkout-sender-edit.jsx-c0be9bf0abc81cf0{width:100%}.checkout-avatar-group.jsx-c0be9bf0abc81cf0{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.checkout-avatar-radio.jsx-c0be9bf0abc81cf0{margin:0!important}.checkout-avatar-option.jsx-c0be9bf0abc81cf0{width:50px;height:50px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;border:2px solid transparent;-webkit-transition:all.2s;-moz-transition:all.2s;-o-transition:all.2s;transition:all.2s}.checkout-avatar-radio.jsx-c0be9bf0abc81cf0 .ant-radio-checked+.checkout-avatar-option.jsx-c0be9bf0abc81cf0{border-color:#ed5566}.checkout-avatar-img.jsx-c0be9bf0abc81cf0{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.checkout-actions.jsx-c0be9bf0abc81cf0{margin-top:24px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;gap:12px;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center}.checkout-button-cancel.jsx-c0be9bf0abc81cf0{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:45px;background:#f5f5f5;border:1px solid#d9d9d9;-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;font-size:16px;font-weight:600;color:#333}.checkout-button-cancel.jsx-c0be9bf0abc81cf0:hover{background:#e8e8e8!important;border-color:#bfbfbf!important}.checkout-button-cancel.jsx-c0be9bf0abc81cf0:active{background:#d9d9d9!important}.checkout-button.jsx-c0be9bf0abc81cf0{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;height:45px;background:#ed5566;border:none;-webkit-border-radius:25px;-moz-border-radius:25px;border-radius:25px;font-size:16px;font-weight:600}.checkout-button.jsx-c0be9bf0abc81cf0:hover{background:#e04455!important}.checkout-button.jsx-c0be9bf0abc81cf0:active{background:#d43d4e!important}",
            }),
          ],
        });
      }
      var eh = n(50337),
        ep = n(80605);
      let eg = (e) => {
        switch (e) {
          case "pending":
            return { label: "Đang chờ", className: "text-orange-600" };
          case "cancelled":
            return { label: "Đ\xe3 hủy", className: "text-red-600" };
          case "paid":
            return {
              label: "Đ\xe3 thanh to\xe1n",
              className: "text-green-600",
            };
          case "failed":
            return { label: "Thất bại", className: "text-red-600" };
          default:
            return { label: e, className: "text-gray-600" };
        }
      };
      function eb(e) {
        var t, n, r, s, o, l;
        let {
            open: c,
            onClose: d,
            paymentId: u,
            paymentData: m,
            onPaymentSuccess: f,
          } = e,
          { update: x } = (0, ep.useSession)(),
          h = (0, q.z_)(u, { enabled: c && !!u, refetchInterval: 5e3 }),
          p = {
            data: h.data || m,
            error: h.error,
            isLoading: h.isLoading && !m,
            isRefetching: h.isRefetching,
          },
          g = (0, q.sT)(),
          [b, v] = (0, i.useState)(!1),
          [y, k] = (0, i.useState)(600),
          w = (0, i.useRef)(null),
          j = (0, i.useRef)(void 0),
          N = (0, i.useRef)(g);
        (0, i.useEffect)(() => {
          N.current = g;
        }, [g]),
          (0, i.useEffect)(() => {
            var e;
            j.current =
              null === (e = p.data) || void 0 === e ? void 0 : e.orderId;
          }, [null === (t = p.data) || void 0 === t ? void 0 : t.orderId]),
          (0, i.useEffect)(() => {
            if (!c || !u) {
              w.current && (clearInterval(w.current), (w.current = null));
              return;
            }
            return (
              k(600),
              v(!1),
              w.current && clearInterval(w.current),
              (w.current = setInterval(() => {
                k((e) => {
                  if (e <= 0) {
                    let e = j.current;
                    return e && N.current.mutate(String(e)), 0;
                  }
                  return e - 1;
                });
              }, 1e3)),
              () => {
                w.current && (clearInterval(w.current), (w.current = null));
              }
            );
          }, [c, u, 600]),
          (0, i.useEffect)(() => {
            0 === y &&
              !b &&
              c &&
              (v(!0), C.ZP.error("Thời gian thanh to\xe1n đ\xe3 hết hạn"), d());
          }, [y, b, c, d]),
          (0, i.useEffect)(() => {
            var e;
            if (!c) return;
            let t = null === (e = p.data) || void 0 === e ? void 0 : e.status;
            t &&
              ("paid" === t &&
                (x(),
                C.ZP.success("Thanh to\xe1n th\xe0nh c\xf4ng!"),
                f && f(),
                d()),
              ("failed" === t || "cancelled" === t) &&
                (C.ZP.error("Thanh to\xe1n thất bại"), d()));
          }, [
            null === (n = p.data) || void 0 === n ? void 0 : n.status,
            c,
            d,
            f,
            x,
          ]);
        let z = Math.floor(y / 60)
            .toString()
            .padStart(2, "0"),
          D = (y % 60).toString().padStart(2, "0"),
          S = p.data;
        return (0, a.jsx)(el.default, {
          title: "Thanh to\xe1n qu\xe0 tặng",
          open: c,
          onCancel: void 0,
          footer: null,
          width: 600,
          closable: !1,
          maskClosable: !1,
          keyboard: !1,
          centered: !0,
          children: S
            ? (0, a.jsxs)("div", {
                className: "payment-modal-content",
                children: [
                  S.gift &&
                    (0, a.jsxs)("div", {
                      className: "mb-4 p-4 bg-gray-50 rounded-lg",
                      children: [
                        (0, a.jsx)("div", {
                          className: "text-sm text-gray-500 mb-1",
                          children: "Qu\xe0 tặng",
                        }),
                        (0, a.jsx)("div", {
                          className: "text-lg font-semibold",
                          children: S.gift.title,
                        }),
                      ],
                    }),
                  (0, a.jsxs)("div", {
                    className:
                      "mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-gray-600",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [
                          (0, a.jsxs)("div", {
                            children: [
                              "Trạng th\xe1i:",
                              " ",
                              (0, a.jsx)("b", {
                                className: eg(S.status).className,
                                children: eg(S.status).label,
                              }),
                              " ",
                              "\xb7 Thời gian c\xf2n lại: ",
                              z,
                              ":",
                              D,
                              0 === y &&
                                (0, a.jsx)("span", {
                                  className: "ml-2 text-red-600 font-semibold",
                                  children: "(expired)",
                                }),
                            ],
                          }),
                          p.isRefetching &&
                            (0, a.jsx)("span", {
                              className: "text-xs text-blue-500 animate-pulse",
                              children: "(Đang kiểm tra...)",
                            }),
                        ],
                      }),
                      "pending" === S.status &&
                        (0, a.jsx)("button", {
                          onClick: () => {
                            (null == S ? void 0 : S.orderId) &&
                              el.default.confirm({
                                title: "X\xe1c nhận hủy giao dịch",
                                content:
                                  "Bạn c\xf3 chắc chắn muốn hủy giao dịch n\xe0y? H\xe0nh động n\xe0y kh\xf4ng thể ho\xe0n t\xe1c.",
                                okText: "Hủy giao dịch",
                                cancelText: "Giữ giao dịch",
                                okButtonProps: { danger: !0 },
                                zIndex: 999999998,
                                onOk: async () => {
                                  try {
                                    await g.mutateAsync(String(S.orderId)),
                                      C.ZP.success("Đ\xe3 hủy giao dịch."),
                                      d();
                                  } catch (e) {
                                    C.ZP.error(
                                      "Hủy giao dịch thất bại. Vui l\xf2ng thử lại."
                                    );
                                  }
                                },
                              });
                          },
                          className:
                            "px-4 py-2 text-sm rounded-md border border-gray-300 hover:bg-gray-50",
                          children: "Hủy giao dịch",
                        }),
                    ],
                  }),
                  y > 0 &&
                    600 - y >= 180 &&
                    (0, a.jsx)("div", {
                      className:
                        "mb-4 p-4 rounded-md border border-red-200 bg-red-50 text-sm text-red-700",
                      children:
                        "Lưu \xfd: Nếu bạn đ\xe3 thanh to\xe1n m\xe0 sau 3-5 ph\xfat vẫn chưa được x\xe1c nhận, vui l\xf2ng li\xean hệ đội ngũ hỗ trợ.",
                    }),
                  (0, a.jsx)("div", {
                    className: "bg-white rounded-xl shadow p-5 mb-6",
                    children: (0, a.jsxs)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 gap-6 items-center",
                      children: [
                        (0, a.jsxs)("div", {
                          className: "text-center",
                          children: [
                            (0, a.jsx)("h3", {
                              className: "mb-3",
                              children: "Qu\xe9t m\xe3 QR để thanh to\xe1n",
                            }),
                            S.qrCodeUrl
                              ? (0, a.jsx)("img", {
                                  src: S.qrCodeUrl,
                                  alt: "QR Code",
                                  className:
                                    "mx-auto w-56 h-56 border rounded-lg",
                                })
                              : (0, a.jsx)("div", {
                                  className: "text-sm text-gray-500",
                                  children: "Kh\xf4ng c\xf3 QR code",
                                }),
                            (0, a.jsx)("div", {
                              className: "text-xs text-gray-500 mt-2 mb-0",
                              children:
                                "Mở app ng\xe2n h\xe0ng v\xe0 qu\xe9t m\xe3 QR",
                            }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          children: (0, a.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex justify-between",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-gray-500",
                                    children: "Số tiền",
                                  }),
                                  (0, a.jsxs)("span", {
                                    className: "font-semibold text-red-600",
                                    children: [
                                      S.amount.toLocaleString("vi-VN"),
                                      " VND",
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex justify-between items-center gap-3",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-gray-500",
                                    children: "Nội dung",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      (0, a.jsx)("span", {
                                        className: "font-mono text-gray-800",
                                        children: S.description,
                                      }),
                                      (0, a.jsx)("button", {
                                        onClick: () => {
                                          navigator.clipboard.writeText(
                                            S.description
                                          ),
                                            C.ZP.success(
                                              "Đ\xe3 copy nội dung chuyển khoản v\xe0o clipboard."
                                            );
                                        },
                                        className:
                                          "text-xs px-2 py-1 border rounded hover:bg-gray-50",
                                        children: "Copy",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "bg-white rounded-xl shadow p-5 mb-6",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "mb-4 mt-0",
                        children: "Hoặc chuyển khoản thủ c\xf4ng",
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-gray-500",
                                children: "Ng\xe2n h\xe0ng",
                              }),
                              (0, a.jsx)("span", {
                                className: "font-medium",
                                children:
                                  (null === (r = S.meta) || void 0 === r
                                    ? void 0
                                    : r.bankName) || "MBBank",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex justify-between items-center gap-3",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-gray-500",
                                children: "Số t\xe0i khoản",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "font-mono",
                                    children:
                                      (null === (s = S.meta) || void 0 === s
                                        ? void 0
                                        : s.accountNumber) || "",
                                  }),
                                  (null === (o = S.meta) || void 0 === o
                                    ? void 0
                                    : o.accountNumber) &&
                                    (0, a.jsx)("button", {
                                      onClick: () => {
                                        var e;
                                        navigator.clipboard.writeText(
                                          String(
                                            null === (e = S.meta) ||
                                              void 0 === e
                                              ? void 0
                                              : e.accountNumber
                                          )
                                        ),
                                          C.ZP.success(
                                            "Đ\xe3 copy số t\xe0i khoản v\xe0o clipboard."
                                          );
                                      },
                                      className:
                                        "text-xs px-2 py-1 border rounded hover:bg-gray-50",
                                      children: "Copy",
                                    }),
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-gray-500",
                                children: "T\xean t\xe0i khoản",
                              }),
                              (0, a.jsx)("span", {
                                className: "font-medium",
                                children:
                                  (null === (l = S.meta) || void 0 === l
                                    ? void 0
                                    : l.accountName) || "",
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className: "flex justify-between",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-gray-500",
                                children: "Số tiền",
                              }),
                              (0, a.jsxs)("span", {
                                className: "font-semibold text-red-600",
                                children: [
                                  S.amount.toLocaleString("vi-VN"),
                                  " VND",
                                ],
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex justify-between items-center gap-3 sm:col-span-2",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-gray-500",
                                children: "Nội dung",
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "font-mono",
                                    children: S.description,
                                  }),
                                  (0, a.jsx)("button", {
                                    onClick: () => {
                                      navigator.clipboard.writeText(
                                        S.description
                                      ),
                                        C.ZP.success(
                                          "Đ\xe3 copy nội dung chuyển khoản v\xe0o clipboard."
                                        );
                                    },
                                    className:
                                      "text-xs px-2 py-1 border rounded hover:bg-gray-50",
                                    children: "Copy",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: "text-xs text-red-500 mt-3",
                        children:
                          "*Vui l\xf2ng chuyển khoản đ\xfang nội dung v\xe0 số tiền để hệ thống tự động x\xe1c nhận.",
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "text-xs text-gray-500",
                    children:
                      "Nếu bạn đ\xe3 chuyển khoản, hệ thống sẽ tự động x\xe1c nhận trong 1-3 ph\xfat.",
                  }),
                ],
              })
            : (0, a.jsx)("div", {
                className: "p-6",
                children: (0, a.jsx)(eh.Z, { active: !0 }),
              }),
        });
      }
      var ev = n(49416);
      let ey =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAACXBIWXMAAEJwAABCcAFu8l9tAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAqBSURBVHgB7VrdblvHEZ45pBQbaGHqCcKiD2AlLyA6DxD7thcB7aI/MdDUdoHU6EVr+qIojMKVDDQQGjkW3da6ll+goZ8g1BOIfgLRrQG5ErmT2d2Z2TlHTOIkjvO7icnzs2fP7PfNfDO7FMKCdry53auw1QeCHgK8ShQQCcYENKYAD9vvXNqFH9qJdvD29V6LQj8EZNyoC8QtwB6DNw4AD1c+uH0CN/QntLndpVZ7mx+KwMeneZx0J/9PBMijUQiPW7P/n8NrlyfwQ4ODX7672qqqdYaoBxEjyFhF0OIXkoE3CfP5GyvDjYk+awQcvfdgtd2m//DhSn4wDcQH8XnKI0EaWd6RetxceufSTfietoOrVzvto1NXQqCBAkkhgkOUCUjYAZDeTERM24i9H937217qkK4nz1/6iO930Hm7PZROCVEYVTISBQQTPhq0r/ziPnyPWpSbCnEbAbsCGAjuKN6LQE45QDCNQAJOA4XXYyS042DUWv6QPzs8IKsLJceXJ/R9mBlGSpchkpF4ZUVCzhE0nG3cZf07vvldl6WD31zvtam6wVPvMVhgapHQVVgoa4fIN0YyQgIzwsc+SyuM2z0+fgPp3oPzNIddsFAhWBA2egOpkJLOS7Tk60zRsAXfPSIOrg66S/PjGzzVi0TF40FlJjbLl3IeMivNvAAmLnQO51v/HjJB/UKA0JciAWoSVAaSG6QB4YjJshT/ux/mcGf5978aw7e4/e/qoAfz2Q2e6JqCqQTk5CjXYme7htYva3wgwR3BkcAXhxjuPviIFeUshxMKmqpABrr2pgx4vhcy6JJ8hIxEHDRYHlUVDtu/+/W3Jkewt3faGPrswRd4Aj03lzzfEIi0gEm6X5y1kJLPDU+5jkR6FPV+gmFrh7QjWrLVZ7UMhXq4WSL2CZtcCKYP1r00jJK4z48/4rHvL717eQTfwJa8HcIFyIrQKck13zfPz1cRk8RQTro5ClAjIC4Ach4Oi+QcLELo7k6IHUJebIGiGD0ccz2V8kit8gEQT89rBUyiQznBq44FDb/sIdJDCil6zOcj9oCHy0ezEQ6uTeFraMnTAVaxBRcYpz7b24mGZyBtspjmWvdg8/6MiyRfKuWn3FdnFQkpOOo3hvd39vkVXZ9AyBX6wmTR+ZKESzLQyqlEQPl2xDmj8niJ+VhS0SP+3qMwG3HeGJ8eXJvAV9AOrw+6xwSrFVRrFeEqQ92rA6qKEdAkI2IWgku2DErQe2VeKr0uL5DNX6ogUXbDha+MOQnvDPmhvoEDRVKwAW4DRLHWVsdYqlefgAioSZo5RIoMUCKSbOVkM60Ax6y14znBk4q3QTiQpy3+N4dn09ODP0ya4B4MBp1T8EoHDgFmAF3Wh25VVWcwhFUeuMsYMvBwJojEpqZark4hAJGTHWjMRQwvc3H5oK7zArYBD+CrIXFmxv79nTX2xRFYIjcgNTegsSvEmg5akjb/yc8bmI0+J/QvLtKDFQpoGAhBFMxwakxAJwdgSufGF3OChDmUBWSaQRC9BkOjVChiE5qpodiU7Awn5gKuGhLjTHILeSYp6cHoCC3EC/ne1oMPKWZ71xFqiVVtCR5w03mqJSv1GBT2XTlrnma5IBtawCvRlkJd8kYJWycFyYNFfqkRnSQ1RZ0ID5qXCvPaeB5C4Tp7T+4O8mGFiFOLBQ5WbHEOQ7V7k85w4ydVOplVl/hzagNaw+JSGrpo88rS40hCqZk0KceumHwKRPBRmEmwpOSdv0HVy+aVo8O0uUxC30albjNrAczb9FbRAm3Z9ykZT2K1RkA6RdCsGm1FmTZB0XYAGxMBqDa+qBQYcranJiuyNNyUT8/Fg0QAXv4Z16PU47EPwMMP0BjXgSybRoi+lz2FMi9BPeKZp6NMKYgoJKNaqWRYX/C4gJKSJy4SpLGuRUhm1j0DgqcJbSYm726516gEAbjIlQ55NJIJm+RkLzUUZLVqpMlFFAvi7SkPeU53RCuD7e239qowe5277GMB3U3WYQbF6bMrIxXwqeQPzOairI1Nv3XyKOQU1ix6wOrduiMoYWSQJONQPAJLP2elHmJxjJI4TOFzvGKWRYtj8boyhCNMvAbBLZeyVVR3HHvLmAd8jcEf1+1stPnmvwb83B/jcHFzDiX4EqghY5fygVpVBBi0aiLSsM3nRc9Bk6cQWn5zsAlrVLuFnK0oAUrZGFTcQTa7yHtmbS9GrqXyFwr4Ts9T2FCqkqwEdVNL7xK+CHzpCmXtkKsfSSwmVzzqE6xwcGbr9p0m1tUC/KF1+a0B0uyn/PgQY02j+Ijj2ssVQ5EZgUKqZ0myqdbBtAfr30FQq6DkmkmrSQmIN2HTudNR8a8cTe6eA1G6QhlbEhi4ISnVO/V8ZOlG9SzHs1MG0HD21qmfSLg+onl4bRH49cl8Qpttbl9kAP/EJHfBvVjKMedRxVtdpVMkx9+HUrk0dNmiBxqVg/bNHl2W9+qtVrvLc27lLZDrarxEBCl+VgGB7eM3KhdRH0eIr3QSHuby2m8/hPDzlbu3R5+G72cSYES8x0SAEkHup0qy6LYcmmt/mbRAAbV9Jfs2qQ+SI7ifIlqUj7xkg9Tyds3vSiJoSOb3K5kqJ6IR9dK0br9foCnwlp1reaxJfrZ1ilgNzvzj1h14jvbcBKTh17c7YRmusKf0+exVKZMVE+81EhluAVQ8UuRcckM5hxPP2GSDSixo4e7ficUZnIcXUJUkuVJfGAYq+z1NQqEeVU271NiQHW7KFzbCqaM7Kxsbz7239bkI0Ha4vt1ttUKvitIEoWs53zwkCD7BJlBPaJYRF4Jl4NS+g8lckqIgz8azYOgJwDK6kEN+DMBCqKxqbetAblVp+BpRKe+lBOifSV9hyiYx8M8+F/DavhABvh2tf3CxhfRbNmaV6ETF0tBLzQ0WJXLdZKxseHm9js3vueRqCwQQc8ZFe/HY2Iux8WRM0AUZ1b3dyNaUTaKJMjV+yYgHHR4vHT78IsBr+9IEaDte3+qxN/S53HqTPXwFyo9BsuQt4a5ElIlnqRWRTuMR0ULQ0u6sYhLIxNw0iiyySlQoQaAO0ZAl2XGIdgbb67EP0H1//jjg739WMN/98d9vjeAFtBdGgLaYJ+Z0dJ7t7XNe7cnsNVEZ8FgqJSrSkUM9GSZJtBFJianUO3hP9kmSoCRFAEeokkkyfH330nJK6l2TRb4/4uu7s/bT+1/G2xe1F06Ab4d/2ey2lqHHiL3JE1njaa5ASZIGsLhk3pLGUrl4DdbncvdASPWEaqDniMACNBRZkVdJpKEyQT5xZ7ue8DhjNm93Vv33hYPu21dKQLMd/nWz15qH8zzLs/zqNU3CaA7X/O3B6TL5xA2FFACrZghKLnAJWfMOuSRv28QWGRh/oYM9iJ4OMF7ZGLyUX+leKgG+0WC78+yVp6tswFn+t8be343HUr1gLnOSOtg+O/nSMA1C4GWrkUS1VMzngfJqPP0WQLz5iCOsYDwP873Z/OUB3mxfGwGf1J7+eX21FeJf6FVnmYROlf44GLqyMdSNfTD94WtJ7Fr68tHjnGj4FzXi7XWCyRxC/EVtf0bh8RLOx6dvDSbwDWofA3iI8R5uorGPAAAAAElFTkSuQmCC";
      function ek(e) {
        var t, n;
        let { pageData: r, viewContext: s = "go", onAddGift: o } = e,
          c =
            null == r
              ? void 0
              : null === (t = r.toolbarSettings) || void 0 === t
              ? void 0
              : t.qrBank,
          d = Array.isArray(c) && c.length > 0,
          u = (0, i.useMemo)(
            () =>
              Array.isArray(c)
                ? c.map((e) => {
                    let t = (e.displayName || "").toLowerCase(),
                      n = "groom";
                    return (
                      "bride" === e.id ||
                      t.includes("c\xf4 d\xe2u") ||
                      t.includes("co dau") ||
                      t.includes("bride")
                        ? (n = "bride")
                        : ("groom" === e.id ||
                            t.includes("ch\xfa rể") ||
                            t.includes("chu re") ||
                            t.includes("groom")) &&
                          (n = "groom"),
                      { ...e, type: n }
                    );
                  })
                : [],
            [c]
          ),
          [m, f] = (0, i.useState)(() => (d ? "qr" : "gift"));
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(p(), {
              id: "40328694c8ff74b3",
              children:
                ".gift-box-popup .select-type{width:100%;height:3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-moz-box-pack:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly}.gift-box-popup .select-type .option{width:auto;height:1.75rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;font-size:1rem;color:#999;position:relative;margin-top:-.25rem;cursor:pointer;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}.gift-box-popup .select-type .option.active{font-size:1.2rem;font-weight:700;color:#ed5566}.gift-box-popup .select-type .option.active img{display:block}.gift-box-popup .select-type .option img{width:1.125rem;height:.375rem;position:absolute;bottom:-.5rem;display:none;-webkit-transition:all.3s ease;-moz-transition:all.3s ease;-o-transition:all.3s ease;transition:all.3s ease}",
            }),
            (0, a.jsxs)("div", {
              className: "jsx-40328694c8ff74b3 gift-box-popup",
              children: [
                (0, a.jsxs)("div", {
                  className: "jsx-40328694c8ff74b3 select-type",
                  children: [
                    d &&
                      (0, a.jsxs)("div", {
                        onClick: () => f("qr"),
                        className:
                          "jsx-40328694c8ff74b3 " +
                          ((0, l.cn)("option", "qr" === m && "active") || ""),
                        children: [
                          "QR Chuyển Khoản",
                          (0, a.jsx)("img", {
                            alt: "",
                            src: ey,
                            className: "jsx-40328694c8ff74b3",
                          }),
                        ],
                      }),
                  ],
                }),
                d &&
                  "qr" === m &&
                  (0, a.jsxs)("div", {
                    className: "jsx-40328694c8ff74b3 w-full py-4 px-1",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "jsx-40328694c8ff74b3 flex justify-center mb-2 mx-4",
                        children: (0, a.jsx)("p", {
                          className:
                            "jsx-40328694c8ff74b3 text-sm text-gray-500 m-0",
                          children:
                            "Qu\xe9t QR code để gửi y\xeau thương trực tiếp tới:",
                        }),
                      }),
                      (0, a.jsx)(ev.Z, {
                        accounts: u,
                        title: "Gửi Qu\xe0 Mừng",
                        isPreview: "go" !== s,
                      }),
                    ],
                  }),
                "gift" === m &&
                  (0, a.jsx)(es, {
                    viewContext: s,
                    ownerName:
                      (null == r
                        ? void 0
                        : null === (n = r.user) || void 0 === n
                        ? void 0
                        : n.name) ||
                      (null == r ? void 0 : r.userName) ||
                      void 0,
                    pageId: (null == r ? void 0 : r.identifier) || "preview",
                  }),
                "gift" === m && (0, a.jsx)(et, {}),
              ],
            }),
          ],
        });
      }
      function ew(e) {
        var t, n, r, s, o, d, u, f, x, h;
        let {
            dataPage: p,
            viewContext: g = "go",
            shouldPreventScroll: y = !1,
            iconRsvpToolbar: k = !0,
            idRsvpBox: w = null,
            isMenuOpen: z,
            setIsMenuOpen: D,
          } = e,
          [S, E] = (0, i.useState)(!y);
        (0, i.useEffect)(() => {
          if (!y) {
            E(!0);
            return;
          }
          let e = () => {
            E(!0);
          };
          return (
            window.addEventListener("envelope-opened", e),
            () => window.removeEventListener("envelope-opened", e)
          );
        }, [y]);
        let [A, T] = (0, i.useState)(
            (null == p
              ? void 0
              : null === (t = p.statistics) || void 0 === t
              ? void 0
              : t.likeCount) || 0
          ),
          [L, P] = (0, i.useState)(!0),
          R = void 0 !== z ? z : L,
          I = void 0 !== D ? D : P,
          M = (0, i.useRef)(null),
          B = (0, i.useRef)(null),
          G = (0, i.useRef)(),
          [K, Z] = (0, i.useState)(!1),
          [J, _] = (0, i.useState)(!1),
          [W, X] = (0, i.useState)([]),
          Y = H((e) => e.selectGiftItem),
          $ = H((e) => e.showAnimationPreview),
          et = H((e) => e.toggleGiftList),
          ea = H((e) => e.isCheckoutModalOpen),
          ei = H((e) => e.setCheckoutModalOpen),
          er = H((e) => e.checkoutGift),
          es = H((e) => e.checkoutSenderName),
          eo = H((e) => e.addReceivedGift),
          el = (0, q.UG)(),
          [ec, ed] = (0, i.useState)(!1),
          [eu, em] = (0, i.useState)(""),
          [ef, eh] = (0, i.useState)(null),
          [ep, eg] = (0, i.useState)(null),
          ev = "template-preview" !== g,
          { data: ey } = (0, F.Vu)(
            ev ? (null == p ? void 0 : p.page.identifier) : void 0
          ),
          ew = (0, U.lv)(),
          ej = (0, U.il)(),
          { data: eN } = (0, Q.L_)({ isActive: !0, limit: 100 }),
          ez = (0, i.useMemo)(() => {
            var e;
            let t =
              null == p
                ? void 0
                : null === (e = p.page) || void 0 === e
                ? void 0
                : e.categoryId;
            if (!t || !(null == eN ? void 0 : eN.items)) return null;
            let n = eN.items.find((e) => e.id === t);
            return (null == n ? void 0 : n.name) || null;
          }, [
            null == p
              ? void 0
              : null === (n = p.page) || void 0 === n
              ? void 0
              : n.categoryId,
            null == eN ? void 0 : eN.items,
          ]),
          eC =
            (null == p
              ? void 0
              : null === (r = p.page) || void 0 === r
              ? void 0
              : r.toolbarSettings) || {},
          { messageBox: eD = !0, likeBtn: eS = !0, giftBtn: eE = !0 } = eC,
          eA = null !== (h = eC.removeWatermark) && void 0 !== h && h;
        "go" !== g && ((eD = !0), (eS = !0), (eE = !0));
        let [eT, eF] = (0, i.useState)(
          "https://cdn-resource.zenlove.me/assets/logo.png"
        );
        (0, i.useEffect)(() => {
          var e, t, n, a;
          "go" === g &&
            (async () => {
              await ew.mutate({ id: null == p ? void 0 : p.page.identifier });
            })(),
            ev &&
              (async () => {
                X((null == ey ? void 0 : ey.messages) || []);
              })(),
            (null == p
              ? void 0
              : null === (e = p.page) || void 0 === e
              ? void 0
              : e.thumbnailKey) &&
              ((
                null == p
                  ? void 0
                  : null === (n = p.page) || void 0 === n
                  ? void 0
                  : null === (t = n.thumbnailKey) || void 0 === t
                  ? void 0
                  : t.includes("assets/thumb_default.png")
              )
                ? eF("https://cdn-resource.zenlove.me/assets/logo.png")
                : eF(
                    (0, l.$B)(
                      null == p
                        ? void 0
                        : null === (a = p.page) || void 0 === a
                        ? void 0
                        : a.thumbnailKey
                    )
                  ));
        }, [p, ey, g, ev]),
          (0, i.useEffect)(() => {
            eE || eS || eD || I(!1);
          }, [eE, eS, eD, I]);
        let eL = (0, i.useCallback)(() => {
            if (!w) return;
            let e = document.querySelector('[data-node-id="'.concat(w, '"]'));
            if (e) {
              let t = document.querySelector(".custom-scrollbar");
              if (t) {
                let n = e.getBoundingClientRect(),
                  a = t.getBoundingClientRect(),
                  i = n.top - a.top + t.scrollTop - 100;
                t.scrollTo({ top: Math.max(0, i), behavior: "smooth" });
              } else e.scrollIntoView({ behavior: "smooth", block: "center" });
            }
          }, [w]),
          eP = async () => {
            if (!M.current) return;
            if ((M.current.classList.add("shake"), "go" !== g)) {
              var e;
              C.ZP.info("Trang demo kh\xf4ng thể gửi lượt th\xedch!"),
                null === (e = M.current) ||
                  void 0 === e ||
                  e.classList.remove("shake");
              return;
            }
            let t = JSON.parse(localStorage.getItem("likes") || "{}");
            if (t[null == p ? void 0 : p.page.identifier]) {
              C.ZP.warning(
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)("b", {
                      children: "Bạn đ\xe3 gửi lượt th\xedch rồi!",
                    }),
                    " ",
                    (0, a.jsx)("br", {}),
                    "H\xe3y ",
                    (0, a.jsx)("b", { children: "để lại lời ch\xfac" }),
                    " hoặc ",
                    (0, a.jsx)("b", { children: "m\xf3n qu\xe0 đặc biệt" }),
                    " tới ch\xfang m\xecnh nh\xe9!",
                  ],
                })
              ),
                setTimeout(() => {
                  var e;
                  null === (e = M.current) ||
                    void 0 === e ||
                    e.classList.remove("shake");
                }, 1e3);
              return;
            }
            T(A + 1),
              C.ZP.success(
                "Uiii! Cảm ơn bạn đ\xe3 r\xe0nh thời gian gh\xe9 thăm lời mời của ch\xfang m\xecnh nh\xe9!"
              );
            try {
              await ej.mutate({ id: null == p ? void 0 : p.page.identifier }),
                t[null == p ? void 0 : p.page.identifier] ||
                  (t[null == p ? void 0 : p.page.identifier] = !0),
                localStorage.setItem("likes", JSON.stringify(t));
            } catch (e) {
              throw (console.log(e), Error("Failed to like page"));
            }
            setTimeout(() => {
              var e;
              null === (e = M.current) ||
                void 0 === e ||
                e.classList.remove("shake");
            }, 1e3);
          };
        return ((0, i.useEffect)(() => {
          (ea || ec) && Z(!1);
        }, [ea, ec]),
        (0, i.useEffect)(() => {
          K ? et(!0) : et(!1);
        }, [K, et]),
        S)
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(j, {
                  show: K && !ea && !ec,
                  nodeRef: B,
                  toggle: () => Z(!K),
                  children: (0, a.jsx)(ek, {
                    pageData: null == p ? void 0 : p.page,
                    onAddGift: (e) => {
                      Y(e), $();
                    },
                    viewContext: g,
                  }),
                }),
                (0, a.jsx)(j, {
                  show: J,
                  nodeRef: G,
                  toggle: () => _(!J),
                  children: (0, a.jsx)(O, {
                    onClose: () => _(!J),
                    pageId: "quy-hai-220326",
                    onAddMessage: (e) => X((t) => [e, ...t]),
                    messagesList: W,
                    viewContext: g,
                  }),
                }),
                eD &&
                  (0, a.jsx)(V, {
                    isMenuOpen: R,
                    messages: W,
                    viewContext: g,
                    categoryName: ez,
                  }),
                eE &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(en, { isPaymentModalOpen: ec }),
                      (0, a.jsx)(ee, {
                        pageId: "quy-hai-220326",
                      }),
                      (0, a.jsx)(ex, {
                        open: ea,
                        onClose: () => {
                          ei(!1), H.getState().setCheckoutGift(null);
                        },
                        gift: er,
                        senderName: es,
                        pageId: "quy-hai-220326",
                        viewContext: g,
                        onCheckout: async (e) => {
                          try {
                            C.ZP.loading("Đang xử l\xfd thanh to\xe1n...", 0);
                            let t = await el.mutateAsync({
                              gift: e.gift,
                              pageId: "quy-hai-220326",
                              senderName: e.senderName,
                              message: e.message,
                              avatar: e.avatar,
                            });
                            C.ZP.destroy(),
                              C.ZP.success("Đ\xe3 tạo đơn thanh to\xe1n"),
                              eg({
                                gift: e.gift,
                                senderName: e.senderName,
                                senderAvatar: e.avatar,
                                message: e.message,
                              }),
                              ei(!1),
                              em(t.id),
                              eh(t),
                              ed(!0);
                          } catch (e) {
                            C.ZP.destroy(),
                              console.error("Checkout error:", e),
                              C.ZP.error(
                                e instanceof Error
                                  ? e.message
                                  : "C\xf3 lỗi xảy ra khi tạo đơn thanh to\xe1n"
                              );
                          }
                        },
                      }),
                      (0, a.jsx)(eb, {
                        open: ec,
                        onClose: () => {
                          ed(!1), em(""), eh(null), eg(null);
                        },
                        paymentId: eu,
                        paymentData: ef,
                        onPaymentSuccess: () => {
                          ep &&
                            (eo({
                              id: "checkout-"
                                .concat(Date.now(), "-")
                                .concat(
                                  Math.random().toString(36).substr(2, 9)
                                ),
                              gift: ep.gift,
                              senderName: ep.senderName,
                              senderAvatar: ep.senderAvatar,
                              content: ep.message || void 0,
                              timestamp: Date.now(),
                              giftType:
                                "animated" === ep.gift.type && ep.gift.dataKey
                                  ? "animated"
                                  : "static",
                            }),
                            Z(!1),
                            H.getState().setCheckoutGift(null),
                            eg(null));
                        },
                      }),
                    ],
                  }),
                (0, a.jsx)("div", {
                  id: "zen-toolbar",
                  className: R ? "block" : "hidden",
                  children: (0, a.jsx)("div", {
                    className: "toolbar",
                    children: (0, a.jsxs)("div", {
                      className: "bar-items",
                      children: [
                        k &&
                          w &&
                          (0, a.jsx)(c.Z, {
                            title: "X\xe1c nhận tham dự",
                            children: (0, a.jsx)("div", {
                              className: "bar-rsvp-btn",
                              onClick: eL,
                            }),
                          }),
                        eE &&
                          (0, a.jsx)("div", {
                            className: "bar-gift-btn",
                            onClick: () => Z(!K),
                          }),
                        eD &&
                          (0, a.jsxs)("div", {
                            className: "bar-msg-btn",
                            onClick: () => _(!J),
                            children: [
                              (0, a.jsx)("span", {
                                children: "Để lại lời ch\xfac...",
                              }),
                              (0, a.jsx)(v.IKI, { className: "w-4 h-4" }),
                            ],
                          }),
                        eS &&
                          (0, a.jsx)("div", {
                            className: "bar-like-btn",
                            ref: M,
                            onClick: () => eP(),
                            children: (0, a.jsx)("div", {
                              className: "like-count",
                              children: A,
                            }),
                          }),
                      ],
                    }),
                  }),
                }),
                (eE || eS || eD) &&
                  (0, a.jsx)("div", {
                    className: "toolbar-toggle-button",
                    onClick: () => I(!R),
                    children: R
                      ? (0, a.jsxs)("div", {
                          className: "menu-v2",
                          children: [
                            (0, a.jsx)(m.Z, { className: "icon-svg" }),
                          ],
                        })
                      : (0, a.jsxs)("div", {
                          className: "menu-v2",
                          children: [
                            (0, a.jsx)(b.Z, {
                              className: "icon-svg",
                              size: 22,
                            }),
                          ],
                        }),
                  }),
                !eA &&
                  (0, a.jsx)("div", {
                    className: "watermark ".concat(R ? "" : "hide-toolbar"),
                    children: (0, a.jsx)("div", {
                      className: "watermark-content",
                      children: (0, a.jsxs)("span", {
                        children: [
                          "Built with",
                          (0, a.jsx)("a", {
                            href: "https://zenlove.me",
                            title: "Quy & Hai - Wedding\xed",
                            className: "watermark-link",
                            children: "Zenlove",
                          }),
                        ],
                      }),
                    }),
                  }),
              ],
            })
          : null;
      }
      let ej = (0, K.U)((e) => ({
        currentMusic: null,
        setCurrentMusic: (t) => e({ currentMusic: t }),
        parsePageData: (e) => ({
          audioKey: e.audioKey || "",
          audioTitle: e.audioTitle || "Nhạc nền",
          audioDuration: e.audioDuration || 180,
          audioIcon: e.audioIcon || "music-note",
          audioIconColor: e.audioIconColor || "#fff",
        }),
      }));
      function eN(e) {
        let { pageData: t, children: n } = e,
          a = ej((e) => e.setCurrentMusic),
          i = ej((e) => e.parsePageData),
          r = ej((e) => e.currentMusic);
        !r && t && a(i(t));
        let s = r || i(t || {});
        return "function" == typeof n ? n({ currentMusic: s }) : n;
      }
      function ez(e) {
        let { onClick: t, playing: n, audioIcon: i, audioIconColor: r } = e;
        return (0, a.jsxs)("div", {
          id: "audio-control-wrapper",
          onClick: t,
          className: "jsx-a854f2d5112313dd",
          children: [
            (0, a.jsxs)("div", {
              className:
                "jsx-a854f2d5112313dd " +
                "audio-toggle ".concat(n ? "mrotate" : ""),
              children: [
                (0, a.jsx)("img", {
                  src: ""
                    .concat("https://cdn-resource.zenlove.me", "/assets/")
                    .concat(i, ".png"),
                  alt: "music icon",
                  title: "Nhạc nền",
                  style: { backgroundColor: r },
                  className: "jsx-a854f2d5112313dd music-icon",
                }),
                !n &&
                  (0, a.jsx)("div", {
                    className: "jsx-a854f2d5112313dd icon-cancel",
                    children: (0, a.jsx)("div", {
                      className: "jsx-a854f2d5112313dd icon-line",
                    }),
                  }),
              ],
            }),
            (0, a.jsx)(p(), {
              id: "a854f2d5112313dd",
              children:
                "#audio-control-wrapper.jsx-a854f2d5112313dd{position:absolute;right:10px;top:10px;z-index:1000;width:30px;height:30px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer}.audio-toggle.jsx-a854f2d5112313dd{width:100%;height:100%;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;background:rgba(165,165,165,.2);-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden}.audio-toggle.mrotate.jsx-a854f2d5112313dd{-webkit-animation:mrotate 5s linear infinite;-moz-animation:mrotate 5s linear infinite;-o-animation:mrotate 5s linear infinite;animation:mrotate 5s linear infinite}.music-icon.jsx-a854f2d5112313dd{display:block;width:100%;height:100%}.icon-cancel.jsx-a854f2d5112313dd{position:absolute;width:100%;height:100%;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;overflow:hidden;padding-top:15px}.icon-line.jsx-a854f2d5112313dd{-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);-o-transform:rotate(45deg);transform:rotate(45deg);width:100%;height:1px;background:#fff}@-webkit-keyframes mrotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes mrotate{to{-moz-transform:rotate(1turn);transform:rotate(1turn)}}@-o-keyframes mrotate{to{-o-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mrotate{to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);-o-transform:rotate(1turn);transform:rotate(1turn)}}",
            }),
          ],
        });
      }
      let eC = (0, i.memo)(function (e) {
        let { currentMusic: t, autoplay: n = !0 } = e;
        if (!t) return null;
        let { audioKey: r, audioIcon: s, audioIconColor: o } = t,
          [l, c] = (0, i.useState)(!1),
          d = (0, i.useRef)(null),
          [u, m] = (0, i.useState)(!1);
        (0, i.useEffect)(() => {
          d.current && d.current.load();
        }, [r]),
          (0, i.useEffect)(() => {
            let e = !0,
              t = async () => {
                if (d.current && e)
                  try {
                    (d.current.volume = 0.5), await d.current.play(), c(!0);
                  } catch (e) {
                    console.error("Auto-play failed:", e);
                  }
              };
            return (
              n && t(),
              () => {
                (e = !1), d.current && l && d.current.pause();
              }
            );
          }, []),
          (0, i.useEffect)(() => {
            let e = ["mousedown", "keydown", "touchstart", "scroll"],
              t = () => {
                !u &&
                  d.current &&
                  !l &&
                  n &&
                  d.current
                    .play()
                    .then(() => {
                      c(!0), m(!0);
                    })
                    .catch((e) => {
                      console.error("Play after interaction failed:", e);
                    });
              };
            return (
              e.forEach((e) => {
                document.addEventListener(e, t, { once: !0 });
              }),
              () => {
                e.forEach((e) => {
                  document.removeEventListener(e, t);
                });
              }
            );
          }, [l, u, n]);
        let f = (0, i.useCallback)(() => {
          c(
            (e) => (
              d.current &&
                (e
                  ? d.current.pause()
                  : d.current.play().catch((e) => {
                      console.error("Play failed:", e);
                    })),
              !e
            )
          );
        }, []);
        if (!r) return null;
        let x = r.startsWith("mp3/")
          ? "".concat("https://cdn-music.zenlove.me", "/").concat(r)
          : "".concat("https://cdn.zenlove.me", "/").concat(r);
        return (0,
        a.jsxs)(a.Fragment, { children: [(0, a.jsx)(ez, { onClick: f, playing: l, audioIcon: s || "music-1", audioIconColor: o || "rgb(145, 143, 143)" }), (0, a.jsx)("audio", { src: x, ref: d, loop: !0, preload: "auto" })] });
      });
      var eD = n(34577),
        eS = n(60121),
        eE = n(24198),
        eA = n(99718);
      function eT(e) {
        let {
            children: t,
            isProcessing: n = !1,
            className: r = "",
            scrollSpeed: s = 0.06,
            initialDelay: o = 1e3,
            rootBackground: c = "#fff",
            shouldPreventScroll: d = !1,
            isLayoutReady: u = !1,
            enabled: m = !0,
          } = e,
          f = (0, i.useRef)(null),
          x = (0, i.useRef)(null),
          h = (0, i.useRef)(!1),
          p = (0, i.useRef)(m),
          [g, b] = (0, i.useState)(m),
          [v, y] = (0, i.useState)(!1),
          [k, w] = (0, i.useState)(d);
        (0, i.useEffect)(() => {
          p.current = g;
        }, [g]),
          (0, i.useEffect)(() => {
            d || w(!1);
          }, [d]);
        let j = (0, i.useCallback)(() => {
          if (!f.current || !p.current) return;
          let e = performance.now(),
            t = (n) => {
              if (!f.current || !p.current) return;
              let a = n - e,
                i = f.current;
              if (
                (i.scrollTo({ top: i.scrollTop + a * s, behavior: "auto" }),
                i.scrollTop >= i.scrollHeight - i.clientHeight)
              ) {
                b(!1);
                return;
              }
              (e = n), (x.current = requestAnimationFrame(t));
            };
          x.current = requestAnimationFrame(t);
        }, [s]);
        return (
          (0, i.useEffect)(() => {
            if (!d) return;
            let e = () => {
              y(!0), w(!1);
            };
            return (
              window.addEventListener("envelope-opened", e),
              () => window.removeEventListener("envelope-opened", e)
            );
          }, [d]),
          (0, i.useEffect)(() => {
            if (!n && !h.current && m && !1 !== u && (!d || v)) {
              let e = setTimeout(() => {
                (h.current = !0), (p.current = !0), b(!0), j();
              }, o);
              return () => clearTimeout(e);
            }
          }, [n, o, d, v, u, m, j]),
          (0, i.useEffect)(() => {
            let e = f.current;
            if (!e) return;
            let t = (e) => {
                if (k) {
                  e.preventDefault();
                  return;
                }
                g &&
                  (b(!1),
                  x.current &&
                    (cancelAnimationFrame(x.current), (x.current = null)));
              },
              n = (e) => {
                k && e.preventDefault();
              };
            return (
              e.addEventListener("wheel", t, { passive: !1 }),
              e.addEventListener("touchmove", n, { passive: !1 }),
              () => {
                e.removeEventListener("wheel", t),
                  e.removeEventListener("touchmove", n);
              }
            );
          }, [k, g]),
          (0, i.useEffect)(
            () => () => {
              x.current &&
                (cancelAnimationFrame(x.current), (x.current = null)),
                b(!1);
            },
            []
          ),
          (0, a.jsxs)("div", {
            ref: f,
            className: "relative overflow-x-hidden ".concat(r),
            style: {
              backgroundColor: c || "#fff",
              overflowY: k ? "hidden" : "auto",
              touchAction: k ? "none" : "auto",
            },
            onTouchStart: () => {
              !k &&
                g &&
                (b(!1),
                x.current &&
                  (cancelAnimationFrame(x.current), (x.current = null)));
            },
            children: [
              m &&
                !g &&
                !k &&
                (0, a.jsx)("img", {
                  src: "".concat((0, l.ud)("assets/icons/play-icon-3.png")),
                  alt: "Bật tự động cuộn",
                  id: "auto-scroll-play",
                  title: "Bật tự động cuộn",
                  onClick: () => {
                    f.current && ((p.current = !0), b(!0), j());
                  },
                  className:
                    "fixed w-8 h-8 md:w-10 md:h-10 top-2.5 left-2.5 !z-[99999] cursor-pointer hover:scale-105",
                }),
              t,
            ],
          })
        );
      }
      function eF(e) {
        let { duration: t = 4e3, leftImage: n, rightImage: r, onFinish: s } = e,
          [o, l] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            let e = setTimeout(() => l(!0), 300),
              n = setTimeout(() => s && s(), t);
            return () => {
              clearTimeout(e), clearTimeout(n);
            };
          }, [t, s]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              "aria-hidden": !0,
              className: "jsx-c77e73f52b92e69d card-opening-root",
              children: [
                (0, a.jsx)("link", {
                  rel: "preload",
                  as: "image",
                  href: n,
                  className: "jsx-c77e73f52b92e69d",
                }),
                (0, a.jsx)("link", {
                  rel: "preload",
                  as: "image",
                  href: r,
                  className: "jsx-c77e73f52b92e69d",
                }),
                (0, a.jsxs)("div", {
                  className:
                    "jsx-c77e73f52b92e69d " +
                    "card-opening-container ".concat(o ? "open" : ""),
                  children: [
                    (0, a.jsx)("div", {
                      style: {
                        backgroundImage: "url(".concat(n, ")"),
                        "--a": "".concat(t, "ms"),
                      },
                      className: "jsx-c77e73f52b92e69d panel left",
                    }),
                    (0, a.jsx)("div", {
                      style: {
                        backgroundImage: "url(".concat(r, ")"),
                        "--a": "".concat(t, "ms"),
                      },
                      className: "jsx-c77e73f52b92e69d panel right",
                    }),
                  ],
                }),
                (0, a.jsx)(p(), {
                  id: "c77e73f52b92e69d",
                  children:
                    ".card-opening-root.jsx-c77e73f52b92e69d{position:fixed;inset:0;z-index:999999;pointer-events:none}.card-opening-container.jsx-c77e73f52b92e69d{position:fixed;inset:0;overflow:hidden}.panel.jsx-c77e73f52b92e69d{position:absolute;inset:0;-webkit-background-size:cover;-moz-background-size:cover;-o-background-size:cover;background-size:cover;background-position:center;-webkit-transition:-webkit-transform var(--a)ease-in-out;-moz-transition:-moz-transform var(--a)ease-in-out;-o-transition:-o-transform var(--a)ease-in-out;transition:-webkit-transform var(--a)ease-in-out;transition:-moz-transform var(--a)ease-in-out;transition:-o-transform var(--a)ease-in-out;transition:transform var(--a)ease-in-out}.panel.left.jsx-c77e73f52b92e69d{z-index:2}.panel.right.jsx-c77e73f52b92e69d{z-index:1}.card-opening-container.open.jsx-c77e73f52b92e69d .left.jsx-c77e73f52b92e69d{-webkit-transform:translatex(-100%);-moz-transform:translatex(-100%);-ms-transform:translatex(-100%);-o-transform:translatex(-100%);transform:translatex(-100%)}.card-opening-container.open.jsx-c77e73f52b92e69d .right.jsx-c77e73f52b92e69d{-webkit-transform:translatex(100%);-moz-transform:translatex(100%);-ms-transform:translatex(100%);-o-transform:translatex(100%);transform:translatex(100%)}",
                }),
              ],
            }),
          })
        );
      }
      function eL(e) {
        let {
            duration: t = 4e3,
            imageUrl: n,
            title: r = "Wedding Day",
            subtitle: s = "Xin mời xem thiệp cưới của ch\xfang m\xecnh nha",
            onFinish: o,
          } = e,
          [l, c] = (0, i.useState)(!0),
          [d, u] = (0, i.useState)(!1),
          [m, f] = (0, i.useState)(""),
          x = (0, i.useRef)(0),
          h = (0, i.useRef)(null),
          g = (0, i.useRef)(null);
        return ((0, i.useEffect)(() => {
          let e = setTimeout(() => u(!0), Math.max(0, t - 500)),
            n = setTimeout(() => {
              c(!1), o && o();
            }, t);
          return () => {
            clearTimeout(e), clearTimeout(n);
          };
        }, [t, o]),
        (0, i.useEffect)(
          () => (
            f(""),
            (x.current = 0),
            g.current && (clearInterval(g.current), (g.current = null)),
            (h.current = setTimeout(() => {
              g.current = setInterval(() => {
                (x.current += 1),
                  f(s.slice(0, x.current)),
                  x.current >= s.length && clearInterval(g.current);
              }, 80);
            }, 500)),
            () => {
              clearTimeout(h.current), clearInterval(g.current);
            }
          ),
          [s]
        ),
        l)
          ? (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)("div", {
                "aria-hidden": !0,
                className:
                  "jsx-815e42db529e1ea6 " +
                  "animated-image-overlay-root ".concat(d ? "exiting" : ""),
                children: [
                  (0, a.jsxs)("div", {
                    className: "jsx-815e42db529e1ea6 animated-background",
                    children: [
                      (0, a.jsx)("div", {
                        className: "jsx-815e42db529e1ea6 stars stars-1",
                      }),
                      (0, a.jsx)("div", {
                        className: "jsx-815e42db529e1ea6 stars stars-2",
                      }),
                      (0, a.jsx)("div", {
                        className: "jsx-815e42db529e1ea6 stars stars-3",
                      }),
                      (0, a.jsx)("div", {
                        className: "jsx-815e42db529e1ea6 gradient-overlay",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "jsx-815e42db529e1ea6 " +
                      "animated-image-container ".concat(d ? "exiting" : ""),
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "jsx-815e42db529e1ea6 text-block title-block",
                        children: (0, a.jsx)("h1", {
                          className: "jsx-815e42db529e1ea6 main-title",
                          children: r,
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "jsx-815e42db529e1ea6 animated-image-wrapper",
                        children: (0, a.jsx)("img", {
                          src: n,
                          alt: "Opening",
                          className: "jsx-815e42db529e1ea6 animated-image",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className:
                          "jsx-815e42db529e1ea6 text-block subtitle-block",
                        children: (0, a.jsxs)("p", {
                          className: "jsx-815e42db529e1ea6 subtitle-text",
                          children: [
                            m,
                            (0, a.jsx)("span", {
                              className: "jsx-815e42db529e1ea6 typing-cursor",
                              children: "|",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(p(), {
                    id: "815e42db529e1ea6",
                    children:
                      ".animated-image-overlay-root.jsx-815e42db529e1ea6{position:fixed;inset:0;z-index:99999;pointer-events:none}.animated-background.jsx-815e42db529e1ea6{position:fixed;top:0;left:0;width:100vw;height:100vh;background:-webkit-linear-gradient(315deg,#820000 0%,#5a0000 50%,#3a0000 100%);background:-moz-linear-gradient(315deg,#820000 0%,#5a0000 50%,#3a0000 100%);background:-o-linear-gradient(315deg,#820000 0%,#5a0000 50%,#3a0000 100%);background:linear-gradient(135deg,#820000 0%,#5a0000 50%,#3a0000 100%);z-index:9998;overflow:hidden}.animated-image-container.jsx-815e42db529e1ea6{position:fixed;inset:0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;gap:20px;z-index:10001;-webkit-transition:opacity.5s,-webkit-transform.5s;-moz-transition:opacity.5s,-moz-transform.5s;-o-transition:opacity.5s,-o-transform.5s;transition:opacity.5s,-webkit-transform.5s;transition:opacity.5s,-moz-transform.5s;transition:opacity.5s,-o-transform.5s;transition:opacity.5s,transform.5s;pointer-events:none}.animated-image-container.exiting.jsx-815e42db529e1ea6{opacity:0;-webkit-transform:scale(.95);-moz-transform:scale(.95);-ms-transform:scale(.95);-o-transform:scale(.95);transform:scale(.95)}.animated-image-wrapper.jsx-815e42db529e1ea6{max-width:40vw;max-height:40vh;overflow:hidden}.animated-image.jsx-815e42db529e1ea6{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;-webkit-border-radius:8px;-moz-border-radius:8px;border-radius:8px}.main-title.jsx-815e42db529e1ea6{color:#fff;font-family:serif;font-size:3rem;text-shadow:2px 2px 6px rgba(0,0,0,.6)}.subtitle-text.jsx-815e42db529e1ea6{color:#fff;max-width:80vw;text-align:center;font-size:1.1rem}.typing-cursor.jsx-815e42db529e1ea6{margin-left:6px;font-weight:700;-webkit-animation:blink 1s steps(2)infinite;-moz-animation:blink 1s steps(2)infinite;-o-animation:blink 1s steps(2)infinite;animation:blink 1s steps(2)infinite}@-webkit-keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}@-moz-keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}@-o-keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}@keyframes blink{0%,50%{opacity:1}51%,100%{opacity:0}}@media(max-width:768px){.animated-image-wrapper.jsx-815e42db529e1ea6{max-width:70vw;max-height:50vh}.main-title.jsx-815e42db529e1ea6{font-size:2.2rem}}",
                  }),
                ],
              }),
            })
          : null;
      }
      var eP = i.memo(
          function (e) {
            var t, n, r, s, o, c, d, u, m, h, p, b, v, y, k, w, j, N, z;
            let {
                children: D,
                dataPage: S,
                viewContext: E = "go",
                width: A,
                hasEnvelope: T,
                preventScrollUntilOpened: F,
                layout: P,
                isLayoutReady: R,
              } = e,
              I = (0, eD.a)("(max-width: 768px)"),
              [M, B] = (0, i.useState)(!0),
              [O, G] = (0, i.useState)(!0),
              V = (0, eA.TR)(),
              U = (0, eA.Yo)(),
              q = (0, eA.aJ)(),
              [Q, K] = (0, i.useState)(
                !!(null == S
                  ? void 0
                  : null === (n = S.page) || void 0 === n
                  ? void 0
                  : null === (t = n.toolbarSettings) || void 0 === t
                  ? void 0
                  : t.openingEffect)
              ),
              [Z, H] = (0, i.useState)(!1),
              J = () => {
                H(!0), K(!1);
              },
              _ =
                (null == S
                  ? void 0
                  : null === (s = S.page) || void 0 === s
                  ? void 0
                  : null === (r = s.toolbarSettings) || void 0 === r
                  ? void 0
                  : r.openingEffect) || null,
              W = (0, i.useMemo)(() => {
                if (!_) return null;
                let e = 1e3 * ((null == _ ? void 0 : _.duration) || 4);
                if ("animated-image" === _.type)
                  return (0, a.jsx)(eL, {
                    duration: e,
                    imageUrl: (0, l.ud)(_.imageUrl),
                    title: _.title,
                    subtitle: _.subtitle,
                    onFinish: J,
                  });
                if ("curtain" === _.type) {
                  let t = (0, l.ud)(
                      "assets/opening-effects/".concat(_.id, "-left.webp")
                    ),
                    n = (0, l.ud)(
                      "assets/opening-effects/".concat(_.id, "-right.webp")
                    );
                  return (0, a.jsx)(eF, {
                    duration: e,
                    leftImage: t,
                    rightImage: n,
                    onFinish: J,
                  });
                }
                return null;
              }, [_]);
            (0, i.useEffect)(() => {
              B(!1);
            }, []);
            let X = (0, i.useMemo)(
                () =>
                  ("object" == typeof _ &&
                    !!_ &&
                    Object.keys(_).length > 0 &&
                    !Z) ||
                  (T && F),
                [T, F, Z, _]
              ),
              Y = (0, i.useMemo)(
                () =>
                  (function e(t, n) {
                    if (!t || "object" != typeof t)
                      return {
                        hasRsvpBox: !1,
                        iconRsvpToolbar: !0,
                        idRsvpBox: null,
                      };
                    let a = null == t ? void 0 : t.type,
                      i = null == a ? void 0 : a.resolvedName;
                    if ("RsvpBox" === i || "RsvpBoxV2" === i) {
                      let e = ((null == t ? void 0 : t.props) || {})
                        .iconRsvpToolbar;
                      return {
                        hasRsvpBox: !0,
                        iconRsvpToolbar: null == e || e,
                        idRsvpBox: n || null,
                      };
                    }
                    let r = t.nodes;
                    if (r && Array.isArray(r))
                      for (let n of r) {
                        let a = t[n];
                        if (a) {
                          let t = e(a, n);
                          if (t.hasRsvpBox) return t;
                        }
                      }
                    if (!n) {
                      for (let n in t)
                        if (
                          t.hasOwnProperty(n) &&
                          "nodes" !== n &&
                          "type" !== n &&
                          "props" !== n &&
                          "object" == typeof t[n] &&
                          null !== t[n]
                        ) {
                          let a = e(t[n], n);
                          if (a.hasRsvpBox) return a;
                        }
                    }
                    return {
                      hasRsvpBox: !1,
                      iconRsvpToolbar: !1,
                      idRsvpBox: null,
                    };
                  })(P),
                [P]
              ),
              $ = Y.iconRsvpToolbar,
              ee = Y.idRsvpBox,
              et = (0, i.useMemo)(() => (I ? x : f), [I]),
              en = (0, i.useMemo)(
                () => (I ? {} : { dataPage: S, width: A }),
                [I, S, A]
              );
            if (M) return null;
            let ea =
                "show" === E
                  ? null == S
                    ? void 0
                    : null === (o = S.page) || void 0 === o
                    ? void 0
                    : o.templateId
                  : null == S
                  ? void 0
                  : null === (c = S.page) || void 0 === c
                  ? void 0
                  : c.id,
              ei = !!(
                ea &&
                (null === (d = V.data) || void 0 === d
                  ? void 0
                  : d.includes(ea))
              );
            return (0, a.jsx)(a.Fragment, {
              children: (0, a.jsxs)(L.C, {
                dataPage: S,
                children: [
                  (0, a.jsx)(et, {
                    ...en,
                    children: (0, a.jsxs)(g, {
                      isMobile: I,
                      isMenuOpen: O,
                      children: [
                        Q && W,
                        (0, a.jsx)(eN, {
                          pageData: {
                            audioKey:
                              (null == S
                                ? void 0
                                : null === (m = S.page) || void 0 === m
                                ? void 0
                                : null === (u = m.audioSettings) || void 0 === u
                                ? void 0
                                : u.musicId) || "",
                            audioTitle:
                              (null == S
                                ? void 0
                                : null === (p = S.page) || void 0 === p
                                ? void 0
                                : null === (h = p.audioSettings) || void 0 === h
                                ? void 0
                                : h.musicTitle) || "Nhạc nền",
                            audioDuration:
                              (null == S
                                ? void 0
                                : null === (v = S.page) || void 0 === v
                                ? void 0
                                : null === (b = v.audioSettings) || void 0 === b
                                ? void 0
                                : b.musicDuration) || 180,
                            audioIcon: "mp3/icons/".concat(
                              (null == S
                                ? void 0
                                : null === (k = S.page) || void 0 === k
                                ? void 0
                                : null === (y = k.audioSettings) || void 0 === y
                                ? void 0
                                : y.musicIcon) || "music-1"
                            ),
                            audioIconColor:
                              (null == S
                                ? void 0
                                : null === (j = S.page) || void 0 === j
                                ? void 0
                                : null === (w = j.audioSettings) || void 0 === w
                                ? void 0
                                : w.musicBg) || "rgb(145, 143, 143)",
                          },
                          children: (e) => {
                            let { currentMusic: t } = e;
                            return (0, a.jsx)(eC, { currentMusic: t });
                          },
                        }),
                        (0, a.jsx)(eT, {
                          className: "custom-scrollbar ".concat("h-full"),
                          isProcessing: !1,
                          scrollSpeed: 0.06,
                          initialDelay: 2e3,
                          rootBackground:
                            (null == P
                              ? void 0
                              : null === (z = P.ROOT) || void 0 === z
                              ? void 0
                              : null === (N = z.props) || void 0 === N
                              ? void 0
                              : N.backgroundColor) || "#fff",
                          shouldPreventScroll: X,
                          isLayoutReady: R,
                          children: D,
                        }),
                        (0, a.jsx)(ew, {
                          dataPage: S,
                          viewContext: E,
                          shouldPreventScroll: X,
                          iconRsvpToolbar: $,
                          idRsvpBox: ee,
                          isMenuOpen: O,
                          setIsMenuOpen: G,
                        }),
                      ],
                    }),
                  }),
                  "go" !== E &&
                    ea &&
                    (0, a.jsxs)("div", {
                      className: "fixed top-2 left-2 z-[99998]",
                      children: [
                        (0, a.jsx)("button", {
                          className:
                            "z-40 flex items-center justify-center ".concat(
                              I ? "w-8 h-8 mb-1" : "w-full px-2 py-1 mb-2",
                              " bg-white bg-opacity-70 backdrop-blur-sm rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200"
                            ),
                          onClick: () => {
                            window.open(
                              "/design-template/".concat(ea),
                              "_blank"
                            );
                          },
                          "aria-label": "Chỉnh sửa mẫu n\xe0y",
                          children: I
                            ? (0, a.jsx)(eS.Z, {
                                weight: "BoldDuotone",
                                size: 20,
                              })
                            : (0, a.jsx)(a.Fragment, {
                                children: "Chỉnh sửa mẫu n\xe0y",
                              }),
                        }),
                        (0, a.jsx)("button", {
                          className:
                            "flex w-8 h-8 top-3 right-3 z-40 items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm rounded-full shadow-md hover:bg-opacity-90 transition-all duration-200",
                          "aria-label": "Th\xeam v\xe0o y\xeau th\xedch",
                          disabled: U.isPending || q.isPending,
                          onClick: () => {
                            ea &&
                              (ei
                                ? q.mutate(
                                    { templateId: ea },
                                    {
                                      onSuccess: () =>
                                        C.ZP.success(
                                          "Đ\xe3 bỏ khỏi y\xeau th\xedch"
                                        ),
                                      onError: (e) => {
                                        let t =
                                          (null == e ? void 0 : e.message) ||
                                          "Kh\xf4ng thể bỏ khỏi y\xeau th\xedch";
                                        C.ZP.error(t);
                                      },
                                    }
                                  )
                                : U.mutate(
                                    { templateId: ea },
                                    {
                                      onSuccess: () =>
                                        C.ZP.success(
                                          "Đ\xe3 th\xeam v\xe0o y\xeau th\xedch"
                                        ),
                                      onError: (e) => {
                                        let t =
                                          (null == e ? void 0 : e.message) ||
                                          "Kh\xf4ng thể th\xeam v\xe0o y\xeau th\xedch";
                                        C.ZP.error(t);
                                      },
                                    }
                                  ));
                          },
                          children: (0, a.jsx)(eE.Z, {
                            weight: ei ? "BoldDuotone" : "LineDuotone",
                            size: 20,
                            className: "text-[#ff4d6d]",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
            });
          },
          (e, t) => {
            var n, a, i, r;
            return (
              e.hasEnvelope === t.hasEnvelope &&
              e.preventScrollUntilOpened === t.preventScrollUntilOpened &&
              e.viewContext === t.viewContext &&
              e.width === t.width &&
              e.isLayoutReady === t.isLayoutReady &&
              (null === (a = e.dataPage) || void 0 === a
                ? void 0
                : null === (n = a.page) || void 0 === n
                ? void 0
                : n.id) ===
                (null === (r = t.dataPage) || void 0 === r
                  ? void 0
                  : null === (i = r.page) || void 0 === i
                  ? void 0
                  : i.id) &&
              e.children === t.children &&
              e.layout === t.layout
            );
          }
        ),
        eR = n(12231),
        eI = n.n(eR),
        eO = () => {
          return (0, a.jsx)(a.Fragment, { children: null });
        },
        eG = n(21247);
      let eV = {
        ...s.ZP,
        Container: (e) => (0, a.jsx)(s.W2, { ...e, isWebview: !0 }),
      };
      function eU(e) {
        return "page" in e || "statistics" in e;
      }
      function eq(e) {
        return eU(e) ? e.page : e;
      }
      function eQ(e) {
        var t, n;
        let {
            layout: s,
            dataPage: l,
            isLoading: c,
            width: d,
            viewContext: u = "go",
            isLayoutReady: m,
          } = e,
          { loadSettings: f } = (0, o.J)(),
          x = eq(l);
        (0, i.useEffect)(() => {
          if (l) {
            let e = setTimeout(() => {
              x.audioSettings && f(x.audioSettings);
            }, 0);
            return () => clearTimeout(e);
          }
        }, [l, f, x.audioSettings]);
        let h = eU(l) ? l : { page: eq(l), statistics: null, guest: null },
          p = (0, i.useMemo)(
            () =>
              (function e(t) {
                if (!t || "object" != typeof t)
                  return { hasEnvelope: !1, preventScrollUntilOpened: !1 };
                let n = null == t ? void 0 : t.type;
                if ("EnvelopeBox" === (null == n ? void 0 : n.resolvedName)) {
                  var a, i;
                  let e = (null == t ? void 0 : t.props) || {};
                  return {
                    hasEnvelope: !0,
                    preventScrollUntilOpened:
                      null ===
                        (i =
                          null !== (a = e.preventScrollUntilOpened) &&
                          void 0 !== a
                            ? a
                            : e.envelopeScrollUntilOpened) ||
                      void 0 === i ||
                      i,
                  };
                }
                let r = t.nodes;
                if (r && Array.isArray(r))
                  for (let n of r) {
                    let a = t[n];
                    if (a) {
                      let t = e(a);
                      if (t.hasEnvelope) return t;
                    }
                  }
                for (let n in t)
                  if (
                    t.hasOwnProperty(n) &&
                    "nodes" !== n &&
                    "object" == typeof t[n] &&
                    null !== t[n]
                  ) {
                    let a = e(t[n]);
                    if (a.hasEnvelope) return a;
                  }
                return { hasEnvelope: !1, preventScrollUntilOpened: !1 };
              })(s),
            [s]
          ),
          g = p.hasEnvelope,
          b = p.preventScrollUntilOpened;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)("h1", {
              className: "sr-only",
              children:
                "Thiệp cưới online - ".concat(
                  null == h
                    ? void 0
                    : null === (t = h.page) || void 0 === t
                    ? void 0
                    : t.name,
                  " @quyctd"
                ) || 0,
            }),
            (0, a.jsx)("h2", {
              className: "sr-only",
              children:
                (null == h
                  ? void 0
                  : null === (n = h.page) || void 0 === n
                  ? void 0
                  : n.description) ||
                "Thiệp mời online nhanh ch\xf3ng",
            }),
            (0, a.jsxs)(eP, {
              dataPage: h,
              viewContext: u,
              width: d,
              hasEnvelope: g,
              preventScrollUntilOpened: b,
              layout: s,
              isLayoutReady: m,
              children: [
                c &&
                  (0, a.jsx)("div", {
                    className:
                      "absolute inset-0 bg-white z-50 flex items-center justify-center",
                    children: (0, a.jsx)(eO, {}),
                  }),
                !c && (0, a.jsx)(r.RQ, { data: s }),
              ],
            }),
            (0, a.jsx)("a", {
              href: "".concat(eG.X.NEXT_PUBLIC_APP_URL, "/templates"),
              title: "mẫu thiệp cưới online",
              className: "sr-only",
              children: "thiệp cưới online",
            }),
            (0, a.jsx)("a", {
              href: "".concat(eG.X.NEXT_PUBLIC_APP_URL),
              title: "zenlove.me",
              className: "sr-only",
              children: "zenlove.me",
            }),
          ],
        });
      }
      function eK(e) {
        let { dataPage: t, viewContext: n = "go" } = e,
          s = (0, eD.a)("(max-width: 768px)"),
          o = i.useMemo(() => {
            let e = null;
            if (!(e = t.page ? t.page.pageData : t.pageData)) return null;
            try {
              let t = eI().decompress(e, { inputEncoding: "Base64" });
              return JSON.parse(t);
            } catch (e) {
              return console.error("Failed to parse templateData:", e), null;
            }
          }, [t]),
          [l, c] = (0, i.useState)(!0),
          [d, u] = (0, i.useState)(o),
          [m, f] = (0, i.useState)(0),
          [x, h] = (0, i.useState)(!1);
        return (
          (0, i.useEffect)(() => {
            u(o);
          }, [o]),
          (0, i.useEffect)(() => {
            if (!s) {
              let e = () => {
                let e = Math.round(0.9 * window.innerHeight * 0.55);
                f(e > 500 ? 500 : e);
              };
              return (
                e(),
                window.addEventListener("resize", e),
                () => window.removeEventListener("resize", e)
              );
            }
          }, [s]),
          (0, i.useEffect)(() => {
            if (d && d.ROOT && m) {
              if (s)
                (() => {
                  var e, t;
                  c(!0);
                  let n = d.ROOT.props || {},
                    a =
                      parseInt(
                        null !== (e = n.width) && void 0 !== e ? e : 0,
                        10
                      ) || 0,
                    i =
                      parseInt(
                        null !== (t = n.height) && void 0 !== t ? t : 0,
                        10
                      ) || 0,
                    r = window.innerWidth > 500 ? 500 : window.innerWidth,
                    s = a > 0 ? r / a : 1,
                    o = Math.max(i * s, window.innerHeight),
                    l = Object.entries(d).reduce((e, t) => {
                      let [n, a] = t;
                      if (!a || !a.props) return (e[n] = a), e;
                      let {
                          top: i,
                          left: r,
                          width: o,
                          height: l,
                          fontSize: c,
                          padding: d,
                          borderRadius: u,
                          ...m
                        } = a.props,
                        f = {
                          ...m,
                          top: i ? Number(i) * s : Number(i),
                          left: r ? Number(r) * s : Number(r),
                          width: o ? Number(o) * s : Number(o),
                          height: "auto" === l ? l : Number(l) * s,
                          fontSize: c ? Number(c) * s : Number(c),
                          fontGoc: c,
                          scale: s,
                          padding: d ? d.map((e) => e * s) : d,
                          borderRadius: u ? u.map((e) => e * s) : u,
                        };
                      return (e[n] = { ...a, props: f }), e;
                    }, {}),
                    { editorViewportWidth: m, ...f } = d.ROOT.props || {};
                  (l.ROOT = {
                    ...d.ROOT,
                    props: { ...f, width: r, height: o },
                  }),
                    u(l),
                    setTimeout(() => {
                      c(!1),
                        setTimeout(() => {
                          h(!0);
                        }, 500);
                    }, 1e3);
                })();
              else {
                let e = () => {
                  var e;
                  c(!0);
                  let t = d.ROOT.props || {},
                    n = t.editorViewportWidth
                      ? parseInt(t.editorViewportWidth)
                      : parseInt(t.width),
                    a =
                      parseInt(
                        null !== (e = t.height) && void 0 !== e ? e : 0,
                        10
                      ) || 0,
                    i = m / n,
                    r = Math.max(a * i, 0.9 * window.innerHeight),
                    s = Object.entries(d).reduce((e, t) => {
                      let [n, a] = t;
                      if (!a || !a.props) return (e[n] = a), e;
                      let {
                          top: r,
                          left: s,
                          width: o,
                          height: l,
                          fontSize: c,
                          padding: d,
                          borderRadius: u,
                          ...m
                        } = a.props,
                        f = {
                          ...m,
                          top: r ? Number(r) * i : Number(r),
                          left: s ? Number(s) * i : Number(s),
                          width: o ? Number(o) * i : Number(o),
                          height: "auto" === l ? l : Number(l) * i,
                          fontSize: c ? Number(c) * i : Number(c),
                          scale: i,
                          padding: d ? d.map((e) => e * i) : d,
                          borderRadius: u ? u.map((e) => e * i) : u,
                        };
                      return (e[n] = { ...a, props: f }), e;
                    }, {}),
                    { editorViewportWidth: o, ...l } = d.ROOT.props || {};
                  (s.ROOT = {
                    ...d.ROOT,
                    props: { ...l, width: m, height: r },
                  }),
                    u(s),
                    setTimeout(() => {
                      c(!1),
                        setTimeout(() => {
                          h(!0);
                        }, 200);
                    }, 1e3);
                };
                return (
                  window.addEventListener("resize", e),
                  e(),
                  () => window.removeEventListener("resize", e)
                );
              }
            }
          }, [m, s]),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(r.ML, {
              enabled: !1,
              resolver: eV,
              children: (0, a.jsx)(eQ, {
                layout: d,
                dataPage: t,
                isLoading: l,
                width: m,
                viewContext: n,
                isLayoutReady: x,
              }),
            }),
          })
        );
      }
    },
    94716: function (e, t, n) {
      "use strict";
      n.d(t, {
        FA: function () {
          return f;
        },
        Gt: function () {
          return m;
        },
        H7: function () {
          return u;
        },
        Kv: function () {
          return p;
        },
        Q7: function () {
          return d;
        },
        _P: function () {
          return l;
        },
        hx: function () {
          return c;
        },
        tc: function () {
          return x;
        },
        uy: function () {
          return h;
        },
        xs: function () {
          return o;
        },
      });
      var a = n(71632),
        i = n(29827),
        r = n(21770);
      let s = (0, n(33818).g)("https://api.zenlove.me");
      function o() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.a)({
          queryKey: ["gifts", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.type && t.append("type", e.type),
              e.search && t.append("search", e.search),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (await s("/v1/gifts".concat(n ? "?".concat(n) : ""))).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function l() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.a)({
          queryKey: ["gifts", "admin", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.page && t.append("page", String(e.page)),
              e.limit && t.append("limit", String(e.limit)),
              e.type && t.append("type", e.type),
              e.search && t.append("search", e.search),
              void 0 !== e.isActive && t.append("isActive", String(e.isActive)),
              e.sortBy && t.append("sortBy", e.sortBy),
              e.sortOrder && t.append("sortOrder", e.sortOrder);
            let n = t.toString();
            return (await s("/v1/gifts".concat(n ? "?".concat(n) : ""))).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function c() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let t = new FormData();
            return (
              t.append("bgFile", e.bgFile),
              t.append("dataFile", e.dataFile),
              t.append("thumbFile", e.thumbFile),
              t.append("code", e.code.trim().toLowerCase()),
              t.append("title", e.title),
              e.type && t.append("type", e.type),
              void 0 !== e.price && t.append("price", String(e.price)),
              void 0 !== e.isActive && t.append("isActive", String(e.isActive)),
              (await s("/v1/gifts/upload", { method: "POST", body: t })).data
            );
          },
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["gifts"] }),
              e.invalidateQueries({ queryKey: ["gifts", "admin"] });
          },
          onError: (e) => {
            var t, n;
            if (
              (null == e
                ? void 0
                : null === (t = e.message) || void 0 === t
                ? void 0
                : t.includes("File type not allowed")) ||
              (null == e ? void 0 : e.status) === 400
            )
              throw Error(
                "Loại file kh\xf4ng được hỗ trợ. Background v\xe0 thumbnail: JPEG, PNG, WebP, GIF (tối đa 10MB). Binary file: .bin (tối đa 50MB)"
              );
            if (
              (null == e
                ? void 0
                : null === (n = e.message) || void 0 === n
                ? void 0
                : n.includes("File size exceeds")) ||
              (null == e ? void 0 : e.status) === 400
            )
              throw Error(
                "K\xedch thước file vượt qu\xe1 giới hạn. Background/thumbnail: 10MB, Binary: 50MB"
              );
            if ((null == e ? void 0 : e.status) === 401)
              throw Error(
                "Phi\xean đăng nhập đ\xe3 hết hạn, vui l\xf2ng đăng nhập lại"
              );
            if ((null == e ? void 0 : e.status) === 403)
              throw Error(
                "Bạn kh\xf4ng c\xf3 quyền thực hiện thao t\xe1c n\xe0y (ADMIN role required)"
              );
            if ((null == e ? void 0 : e.status) === 409)
              throw Error(
                "M\xe3 gift đ\xe3 tồn tại. Vui l\xf2ng sử dụng m\xe3 kh\xe1c"
              );
          },
        });
      }
      function d() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await s("/v1/gifts/".concat(t), {
                method: "PUT",
                body: JSON.stringify(n),
              })
            ).data;
          },
          onSuccess: (t, n) => {
            e.invalidateQueries({ queryKey: ["gift", n.id] }),
              e.invalidateQueries({ queryKey: ["gift", "admin", n.id] }),
              e.invalidateQueries({ queryKey: ["gifts"] }),
              e.invalidateQueries({ queryKey: ["gifts", "admin"] });
          },
          onError: (e) => {
            if ((null == e ? void 0 : e.status) === 401)
              throw Error(
                "Phi\xean đăng nhập đ\xe3 hết hạn, vui l\xf2ng đăng nhập lại"
              );
            if ((null == e ? void 0 : e.status) === 403)
              throw Error(
                "Bạn kh\xf4ng c\xf3 quyền thực hiện thao t\xe1c n\xe0y (ADMIN role required)"
              );
            if ((null == e ? void 0 : e.status) === 404)
              throw Error("Kh\xf4ng t\xecm thấy gift");
          },
        });
      }
      function u() {
        let e = (0, i.NL)();
        return (0, r.D)({
          mutationFn: async (e) =>
            await s("/v1/gifts/".concat(e), { method: "DELETE" }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["gifts"] }),
              e.invalidateQueries({ queryKey: ["gifts", "admin"] });
          },
          onError: (e) => {
            if ((null == e ? void 0 : e.status) === 401)
              throw Error(
                "Phi\xean đăng nhập đ\xe3 hết hạn, vui l\xf2ng đăng nhập lại"
              );
            if ((null == e ? void 0 : e.status) === 403)
              throw Error(
                "Bạn kh\xf4ng c\xf3 quyền thực hiện thao t\xe1c n\xe0y (ADMIN role required)"
              );
            if ((null == e ? void 0 : e.status) === 404)
              throw Error("Kh\xf4ng t\xecm thấy gift hoặc đ\xe3 bị x\xf3a");
          },
        });
      }
      function m(e) {
        return new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(e);
      }
      function f(e) {
        switch (e) {
          case "animated":
            return "Animated";
          case "static":
            return "Static";
          default:
            return "Kh\xf4ng x\xe1c định";
        }
      }
      function x(e) {
        return e ? "Đang hoạt động" : "Kh\xf4ng hoạt động";
      }
      function h(e) {
        return e ? "#87d068" : "#d9d9d9";
      }
      function p(e) {
        if (!e.code || 0 === e.code.trim().length)
          return { isValid: !1, error: "M\xe3 gift l\xe0 bắt buộc" };
        if (e.code.length > 50)
          return {
            isValid: !1,
            error: "M\xe3 gift kh\xf4ng được vượt qu\xe1 50 k\xfd tự",
          };
        if (!e.title || 0 === e.title.trim().length)
          return { isValid: !1, error: "Ti\xeau đề gift l\xe0 bắt buộc" };
        if (e.title.length > 200)
          return {
            isValid: !1,
            error: "Ti\xeau đề gift kh\xf4ng được vượt qu\xe1 200 k\xfd tự",
          };
        if (!e.bgFile)
          return { isValid: !1, error: "File background l\xe0 bắt buộc" };
        if (!e.dataFile)
          return { isValid: !1, error: "File data l\xe0 bắt buộc" };
        if (!e.thumbFile)
          return { isValid: !1, error: "File thumbnail l\xe0 bắt buộc" };
        let t = [
          "image/jpeg",
          "image/jpg",
          "image/png",
          "image/webp",
          "image/gif",
        ];
        return t.includes(e.bgFile.type)
          ? t.includes(e.thumbFile.type)
            ? e.bgFile.size > 10485760
              ? { isValid: !1, error: "File background vượt qu\xe1 10MB" }
              : e.thumbFile.size > 10485760
              ? { isValid: !1, error: "File thumbnail vượt qu\xe1 10MB" }
              : e.dataFile.size > 52428800
              ? { isValid: !1, error: "File data vượt qu\xe1 50MB" }
              : void 0 !== e.price && e.price < 0
              ? { isValid: !1, error: "Gi\xe1 gift phải lớn hơn hoặc bằng 0" }
              : e.type && "animated" !== e.type && "static" !== e.type
              ? {
                  isValid: !1,
                  error:
                    "Loại gift kh\xf4ng hợp lệ. Chỉ chấp nhận: animated, static",
                }
              : { isValid: !0 }
            : {
                isValid: !1,
                error:
                  "File thumbnail kh\xf4ng hợp lệ. Chỉ chấp nhận: JPEG, PNG, WebP, GIF",
              }
          : {
              isValid: !1,
              error:
                "File background kh\xf4ng hợp lệ. Chỉ chấp nhận: JPEG, PNG, WebP, GIF",
            };
      }
    },
    5657: function (e, t, n) {
      "use strict";
      n.d(t, {
        B_: function () {
          return x;
        },
        DJ: function () {
          return d;
        },
        RQ: function () {
          return u;
        },
        UN: function () {
          return f;
        },
        Vu: function () {
          return l;
        },
        aW: function () {
          return c;
        },
        bL: function () {
          return m;
        },
        gu: function () {
          return o;
        },
      });
      var a = n(29827),
        i = n(21770),
        r = n(71632);
      let s = (0, n(33818).g)("https://api.zenlove.me");
      function o() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (
              await s("/v1/messages", {
                method: "POST",
                body: JSON.stringify(e),
              })
            ).data,
          onSuccess: (t, n) => {
            e.invalidateQueries({ queryKey: ["messages", n.pageId] }),
              e.invalidateQueries({ queryKey: ["user-messages"] });
          },
        });
      }
      function l(e) {
        return (0, r.a)({
          queryKey: ["messages", e],
          queryFn: async () =>
            e
              ? (await s("/v1/messages/".concat(e))).data
              : { success: !0, messages: [] },
          enabled: !!e,
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function c(e) {
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
            let n = new URLSearchParams();
            t.page && n.append("page", String(t.page)),
              t.limit && n.append("limit", String(t.limit)),
              t.nameUser && n.append("nameUser", t.nameUser),
              t.search && n.append("search", t.search),
              t.sortBy && n.append("sortBy", t.sortBy),
              t.sortOrder && n.append("sortOrder", t.sortOrder);
            let a = n.toString(),
              i = "/v1/messages/user/".concat(e).concat(a ? "?".concat(a) : "");
            return (await s(i)).data;
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
            let n = t.toString();
            return (await s("/v1/messages/user".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function u() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (await s("/v1/messages/user/".concat(e), { method: "DELETE" }))
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
            let n = t.toString();
            return (
              await s("/v1/messages/admin/all".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 12e4,
          gcTime: 3e5,
        });
      }
      function f() {
        let e = (0, a.NL)();
        return (0, i.D)({
          mutationFn: async (e) =>
            (await s("/v1/messages/admin/".concat(e), { method: "DELETE" }))
              .data,
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-messages"] }),
              e.invalidateQueries({ queryKey: ["user-messages"] }),
              e.invalidateQueries({ queryKey: ["user-page-messages"] }),
              e.invalidateQueries({ queryKey: ["messages"] });
          },
        });
      }
      function x(e) {
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
    74112: function (e, t, n) {
      "use strict";
      n.d(t, {
        UG: function () {
          return o;
        },
        YN: function () {
          return d;
        },
        sT: function () {
          return c;
        },
        xi: function () {
          return s;
        },
        z_: function () {
          return l;
        },
      });
      var a = n(21770),
        i = n(71632);
      let r = (0, n(33818).g)("https://api.zenlove.me");
      function s() {
        return (0, a.D)({
          mutationFn: async (e) => {
            let { planId: t, discountCode: n } = e;
            return (
              await r("/v1/plans/".concat(t, "/purchase"), {
                method: "POST",
                body: JSON.stringify(n ? { discountCode: n } : {}),
              })
            ).data;
          },
        });
      }
      function o() {
        return (0, a.D)({
          mutationFn: async (e) =>
            (
              await r("/v1/gifts/".concat(e.gift.id, "/checkout"), {
                method: "POST",
                body: JSON.stringify({
                  gift: e.gift,
                  pageId: "quy-hai-220326",
                  senderName: e.senderName,
                  message: e.message,
                  avatar: e.avatar,
                }),
              })
            ).data,
        });
      }
      function l(e, t) {
        var n, a;
        return (0, i.a)({
          queryKey: ["payment", e],
          queryFn: async () => (await r("/v1/payments/".concat(e))).data,
          enabled:
            !!e &&
            (null === (n = null == t ? void 0 : t.enabled) ||
              void 0 === n ||
              n),
          refetchInterval:
            null !== (a = null == t ? void 0 : t.refetchInterval) &&
            void 0 !== a
              ? a
              : 5e3,
          refetchIntervalInBackground: !0,
          staleTime: 0,
          gcTime: 3e5,
        });
      }
      function c() {
        return (0, a.D)({
          mutationFn: async (e) =>
            await r("/v1/orders/".concat(e, "/cancel"), { method: "POST" }),
        });
      }
      function d() {
        return (0, a.D)({
          mutationFn: async (e) => {
            var t, n;
            let a =
                null !== (t = null == e ? void 0 : e.page) && void 0 !== t
                  ? t
                  : 1,
              i =
                null !== (n = null == e ? void 0 : e.limit) && void 0 !== n
                  ? n
                  : 10;
            return (await r("/v1/orders?page=".concat(a, "&limit=").concat(i)))
              .data;
          },
        });
      }
    },
    21247: function (e, t, n) {
      "use strict";
      n.d(t, {
        X: function () {
          return s;
        },
      });
      var a = n(44673),
        i = n(8491),
        r = n(25566);
      let s = (0, a.D)({
        server: { DATABASE_URL: i.ZPm.string().optional() },
        client: {
          NEXT_PUBLIC_APP_URL: i.ZPm.string().optional(),
          NEXT_PUBLIC_API_URL: i.ZPm.string().optional(),
          NEXT_PUBLIC_CLARITY_PROJECT_ID: i.ZPm.string().optional(),
        },
        shared: {
          NODE_ENV: i.ZPm.enum([
            "test",
            "development",
            "production",
          ]).optional(),
        },
        runtimeEnv: {
          DATABASE_URL: r.env.DATABASE_URL,
          NEXT_PUBLIC_APP_URL: "https://zenlove.me",
          NODE_ENV: "production",
          NEXT_PUBLIC_API_URL: "https://api.zenlove.me",
          NEXT_PUBLIC_CLARITY_PROJECT_ID: "vqyzv56fqt",
        },
      });
    },
    96533: function () {},
  },
]);
