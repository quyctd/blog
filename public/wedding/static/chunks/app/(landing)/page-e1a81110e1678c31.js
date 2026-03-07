(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [818],
  {
    33289: function (e, t, n) {
      Promise.resolve().then(n.t.bind(n, 72972, 23)),
        Promise.resolve().then(n.bind(n, 72670)),
        Promise.resolve().then(n.bind(n, 18782)),
        Promise.resolve().then(n.bind(n, 56746)),
        Promise.resolve().then(n.bind(n, 45793)),
        Promise.resolve().then(n.bind(n, 25908)),
        Promise.resolve().then(n.bind(n, 11135)),
        Promise.resolve().then(n.bind(n, 51098));
    },
    55672: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(57437);
      n(2265);
      var a = n(80605),
        s = n(99376),
        r = n(71118),
        l = n(61273);
      function o() {
        let e = (0, s.useSearchParams)().get("callbackUrl") || "/dashboard",
          t = async () => {
            await (0, a.signIn)("google", { callbackUrl: e });
          },
          n = async () => {
            await (0, a.signIn)("facebook", { callbackUrl: e });
          };
        return (0, i.jsxs)("div", {
          className: "flex gap-4",
          children: [
            (0, i.jsx)("button", {
              type: "button",
              className:
                "group relative flex items-stretch justify-center p-0.5 text-center font-medium w-full border rounded-xl",
              onClick: t,
              disabled: !1,
              children: (0, i.jsxs)("span", {
                className:
                  "flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm",
                children: [(0, i.jsx)(r.JM8, {}), "Google"],
              }),
            }),
            (0, i.jsx)("button", {
              type: "button",
              className:
                "group relative flex items-stretch justify-center p-0.5 text-center font-medium w-full border rounded-xl",
              onClick: n,
              disabled: !1,
              children: (0, i.jsxs)("span", {
                className:
                  "flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm",
                children: [
                  (0, i.jsx)(l.pnU, { className: "text-blue-500" }),
                  "Facebook",
                ],
              }),
            }),
          ],
        });
      }
    },
    72670: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return g;
        },
      });
      var i = n(57437),
        a = n(29),
        s = n.n(a),
        r = n(2265),
        l = n(19764),
        o = n(10476),
        c = n(71298),
        d = n(73630),
        h = n(50742),
        u = n(33145);
      function m(e) {
        let { page: t, enableBlur: n = !1 } = e,
          a = (0, c.ZP)(),
          s = a.isMobile || a.isTablet ? 220 : 310,
          l = (0, r.useRef)(null),
          o = (0, r.useRef)(null),
          [m, g] = (0, r.useState)(0),
          [p, v] = (0, r.useState)(0.6);
        return (
          (0, r.useEffect)(() => {
            let e = o.current,
              t = l.current;
            if (!e || !t) return;
            let n = () => {
              let n = e.naturalWidth || e.width,
                i = e.naturalHeight || e.height;
              if (!n || !i) {
                g(0), v(0.6);
                return;
              }
              let a = Math.max(
                0,
                (e.clientWidth || e.width || t.clientWidth) / (n / i) - s
              );
              g(a), v(Math.max(0.4, a / 120));
            };
            return (
              e.complete ? n() : (e.onload = n),
              window.addEventListener("resize", n),
              () => window.removeEventListener("resize", n)
            );
          }, [t.thumbnailKey, s]),
          (0, i.jsx)("div", {
            ref: l,
            style: {
              "--img-scroll-height": "".concat(m, "px"),
              "--scroll-duration": "".concat(p, "s"),
              "--container-height": "".concat(s, "px"),
            },
            children: (0, i.jsxs)("div", {
              className: "template-item transition relative group",
              role: "article",
              "aria-label": t.name,
              children: [
                (0, i.jsxs)("div", {
                  className: "template-item-image",
                  style: { height: "var(--container-height)" },
                  children: [
                    (0, i.jsx)("div", {
                      className: "template-item-image-inner",
                      children: (0, i.jsx)(u.default, {
                        ref: o,
                        src: t.thumbnailKey
                          ? (0, d.ud)(t.thumbnailKey, !0)
                          : (0, d.ud)("assets/thumb_default.png", !0),
                        alt: "Thiệp cưới online",
                        title: "Xem thiệp",
                        loading: "lazy",
                        decoding: "async",
                        className:
                          "template-item-image-inner-img !object-cover !h-full !w-full",
                        width: 100,
                        height: 100,
                      }),
                    }),
                    n &&
                      (0, i.jsx)("div", {
                        className: "template-item-blur-overlay",
                      }),
                  ],
                }),
                (0, i.jsx)("h3", { className: "sr-only", children: t.name }),
                (0, i.jsx)("div", {
                  className:
                    "absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 pb-4",
                  children: (0, i.jsx)("div", {
                    className: "flex gap-2 items-center flex-col",
                    children: (0, i.jsx)("div", {
                      children: (0, i.jsx)(h.ZP, {
                        onClick: () => {
                          var e;
                          let n = "/show/".concat(
                            null !== (e = t.slugShow) && void 0 !== e ? e : ""
                          );
                          window.open(n, "_blank", "noopener,noreferrer");
                        },
                        type: "primary",
                        className: "!rounded-full !bg-primary/80 !text-sm",
                        "aria-label": "Mở trang thiệp ".concat(
                          t.name,
                          " trong tab mới"
                        ),
                        children: "Xem",
                      }),
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
      function g(e) {
        let { items: t, withNavigation: n = !0, autoplay: a = !1 } = e,
          c = (0, r.useMemo)(() => [o.Rv, o.W_, o.tl, o.pt], []),
          d = (0, r.useRef)(null),
          h = (0, r.useMemo)(() => {
            if (!t || 0 === t.length) return [];
            if (t.length >= 8) return t;
            let e = [];
            for (let n = 0; n < 8; n++) e.push(t[n % t.length]);
            return e;
          }, [t]);
        return (0, i.jsxs)("div", {
          className: "jsx-f1d7d94d1704595a top-up",
          children: [
            (0, i.jsx)(l.tq, {
              modules: c,
              slidesPerView: "auto",
              loop: h.length > 1,
              spaceBetween: 16,
              freeMode: !1,
              centeredSlides: !1,
              slideToClickedSlide: !0,
              roundLengths: !0,
              speed: 350,
              navigation: !1,
              pagination: !1,
              watchOverflow: !0,
              autoplay: !!a &&
                h.length > 1 && { delay: 3e3, disableOnInteraction: !1 },
              onInit: (e) => {
                e.slides.forEach((e) => {
                  e.style.width =
                    window.innerWidth < 640
                      ? "150px"
                      : (window.innerWidth, "210px");
                });
              },
              breakpoints: {
                0: { spaceBetween: 8 },
                640: { spaceBetween: 16 },
                1024: { spaceBetween: 16 },
              },
              onBeforeInit: (e) => {
                d.current = e;
              },
              role: "list",
              "aria-label": "Danh s\xe1ch thiệp đ\xe3 chia sẻ",
              children: h.map((e, t) =>
                (0, i.jsx)(
                  l.o5,
                  {
                    role: "listitem",
                    onMouseEnter: () => {
                      var e;
                      return null === (e = d.current) || void 0 === e
                        ? void 0
                        : e.autoplay.stop();
                    },
                    onMouseLeave: () => {
                      var e;
                      return null === (e = d.current) || void 0 === e
                        ? void 0
                        : e.autoplay.start();
                    },
                    children: (0, i.jsx)("div", {
                      className: "jsx-f1d7d94d1704595a slide-inner",
                      children: (0, i.jsx)(m, { page: e, enableBlur: !0 }),
                    }),
                  },
                  e.id + t
                )
              ),
            }),
            (0, i.jsx)(s(), {
              id: "f1d7d94d1704595a",
              children:
                ".top-up{overflow:hidden}.swiper-slide{overflow:visible;position:relative;z-index:0}.swiper-slide:hover{z-index:99!important}.slide-inner{padding:10px 0}",
            }),
            n &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "jsx-f1d7d94d1704595a arrow-left arrow-com left-0",
                    children: (0, i.jsx)("button", {
                      "aria-label": "Trang trước",
                      onClick: () => {
                        var e;
                        return null === (e = d.current) || void 0 === e
                          ? void 0
                          : e.slidePrev();
                      },
                      className:
                        "jsx-f1d7d94d1704595a arrow-btn p-2 rounded-full bg-white shadow-md",
                      children: (0, i.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": !0,
                        className: "jsx-f1d7d94d1704595a h-6 w-6 text-gray-700",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M15 19l-7-7 7-7",
                          className: "jsx-f1d7d94d1704595a",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "jsx-f1d7d94d1704595a arrow-com arrow-right right-0",
                    children: (0, i.jsx)("button", {
                      "aria-label": "Trang tiếp",
                      onClick: () => {
                        var e;
                        return null === (e = d.current) || void 0 === e
                          ? void 0
                          : e.slideNext();
                      },
                      className:
                        "jsx-f1d7d94d1704595a arrow-btn p-2 rounded-full bg-white shadow-md",
                      children: (0, i.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        "aria-hidden": !0,
                        className: "jsx-f1d7d94d1704595a h-6 w-6 text-gray-700",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M9 5l7 7-7 7",
                          className: "jsx-f1d7d94d1704595a",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    18782: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return l;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(27648),
        r = n(72329);
      function l() {
        let [e, t] = (0, a.useState)(null),
          n = [
            {
              key: "1",
              question: "@quyctd l\xe0 g\xec?",
              answer:
                "@quyctd personal website",
              answerLines: [
                "@quyctd personal website",
              ],
            },
          ],
          l = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: n.map((e) => ({
              "@type": "Question",
              name: e.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: Array.isArray(e.answerLines)
                  ? e.answerLines.join("\n")
                  : e.answer,
              },
            })),
          };
        return (0, i.jsx)("section", {
          id: "faq",
          className:
            "bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 md:py-20",
          role: "region",
          "aria-labelledby": "faq-heading",
          children: (0, i.jsxs)("div", {
            className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.2fr)] items-start",
                children: [
                  (0, i.jsxs)("div", {
                    className: "space-y-6",
                    children: [
                      (0, i.jsxs)("div", {
                        className:
                          "inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 shadow-sm ring-1 ring-slate-200",
                        children: [
                          (0, i.jsx)("span", {
                            className:
                              "h-1.5 w-1.5 rounded-full bg-zen-primary",
                          }),
                          (0, i.jsx)("span", {
                            className:
                              "text-xs font-medium uppercase tracking-[0.18em] text-slate-700",
                            children: "FAQ \xb7 @quyctd",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "space-y-3",
                        children: [
                          (0, i.jsx)("h2", {
                            id: "faq-heading",
                            className:
                              "text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900",
                            children: "C\xe1c c\xe2u hỏi thường gặp",
                          }),
                          (0, i.jsx)("p", {
                            className:
                              "text-sm md:text-base text-slate-600 leading-relaxed max-w-xl",
                            children:
                              "Tất cả thắc mắc về việc tạo thiệp cưới online, gửi thiệp, nhận qu\xe0 mừng v\xe0 quản l\xfd kh\xe1ch mời tr\xean @quyctd đều được giải đ\xe1p tại đ\xe2y. Nếu vẫn c\xf2n băn khoăn, @quyctd lu\xf4n sẵn s\xe0ng hỗ trợ bạn.",
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "grid grid-cols-2 gap-4 max-w-md",
                        children: [
                          (0, i.jsxs)("div", {
                            className:
                              "group relative overflow-hidden rounded-2xl bg-white/90 px-4 py-3 shadow-md shadow-zen-primary/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-zen-primary/30",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "pointer-events-none absolute inset-0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-zen-primary/10 via-rose-300/10 to-amber-300/10",
                              }),
                              (0, i.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-xs font-medium text-slate-500 m-0",
                                    children: "Trải nghiệm hiện đại",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "mt-1 mb-0 text-sm font-semibold text-slate-900",
                                    children: "Thiệp online, qu\xe0 online",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className:
                              "group relative overflow-hidden rounded-2xl bg-white/90 px-4 py-3 shadow-md shadow-zen-primary/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-zen-primary/30",
                            children: [
                              (0, i.jsx)("div", {
                                className:
                                  "pointer-events-none absolute inset-0 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-emerald-300/10 via-zen-primary/10 to-sky-300/10",
                              }),
                              (0, i.jsxs)("div", {
                                className: "relative",
                                children: [
                                  (0, i.jsx)("p", {
                                    className:
                                      "text-xs font-medium text-slate-500 m-0",
                                    children: "Bảo mật & minh bạch",
                                  }),
                                  (0, i.jsx)("p", {
                                    className:
                                      "mt-1 mb-0 text-sm font-semibold text-slate-900",
                                    children:
                                      "Theo d\xf5i qu\xe0 tặng dễ d\xe0ng",
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex flex-wrap items-center gap-3 pt-2",
                        children: [
                          (0, i.jsx)("span", {
                            className:
                              "text-xs font-medium uppercase tracking-[0.18em] text-slate-500",
                            children: "Cần hỗ trợ th\xeam?",
                          }),
                          (0, i.jsxs)(s.default, {
                            className:
                              "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-900 shadow-sm transition-all duration-200 hover:border-zen-primary/40 hover:bg-zen-primary/5 hover:text-zen-primary",
                            href: "https://fb.com/zenlove.me",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            "aria-label":
                              "Li\xean hệ Zenlove tr\xean Facebook (mở trong tab mới)",
                            title: "Li\xean hệ Zenlove tr\xean Facebook",
                            children: [
                              "Zeny ơi, gi\xfap t\xf4i",
                              (0, i.jsx)(r.Z, {
                                weight: "BoldDuotone",
                                size: 16,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-zen-primary/5 via-rose-100/40 to-white blur-2xl",
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "faq-collapse-container mx-auto max-w-xl rounded-3xl bg-white/90 p-4 md:p-5 shadow-xl shadow-slate-900/5 ring-1 ring-slate-100 backdrop-blur",
                        children: [
                          (0, i.jsx)("h3", {
                            className: "sr-only",
                            children:
                              "Danh mục c\xe2u hỏi thường gặp về @quyctd",
                          }),
                          (0, i.jsx)("div", {
                            className: "divide-y divide-slate-100",
                            children: n.map((n) => {
                              let a = e === n.key;
                              return (0, i.jsxs)(
                                "div",
                                {
                                  children: [
                                    (0, i.jsxs)("button", {
                                      type: "button",
                                      onClick: () =>
                                        t((e) => (e === n.key ? null : n.key)),
                                      className:
                                        "flex w-full items-center justify-between gap-4 py-3 text-left md:py-3.5",
                                      "aria-expanded": a,
                                      "aria-controls": "faq-a-".concat(n.key),
                                      id: "faq-q-".concat(n.key),
                                      children: [
                                        (0, i.jsx)("span", {
                                          className:
                                            "text-sm md:text-base ".concat(
                                              a
                                                ? "font-semibold text-slate-900"
                                                : "font-medium text-slate-900"
                                            ),
                                          children: n.question,
                                        }),
                                        (0, i.jsx)("span", {
                                          className:
                                            "inline-flex h-7 w-7 items-center justify-center text-base leading-none transition-colors ".concat(
                                              a
                                                ? "text-zen-primary"
                                                : "text-slate-400"
                                            ),
                                          "aria-hidden": "true",
                                          children: a ? "−" : "+",
                                        }),
                                      ],
                                    }),
                                    a &&
                                      (0, i.jsx)("div", {
                                        id: "faq-a-".concat(n.key),
                                        "aria-labelledby": "faq-q-".concat(
                                          n.key
                                        ),
                                        className: "pb-3 md:pb-4",
                                        children: Array.isArray(n.answerLines)
                                          ? (0, i.jsx)("div", {
                                              className: "space-y-1.5",
                                              children: n.answerLines.map(
                                                (e, t) =>
                                                  (0, i.jsx)(
                                                    "p",
                                                    {
                                                      className:
                                                        "text-sm md:text-base leading-relaxed text-slate-700 m-0",
                                                      children: e,
                                                    },
                                                    t
                                                  )
                                              ),
                                            })
                                          : (0, i.jsx)("p", {
                                              className:
                                                "text-sm md:text-base leading-relaxed text-slate-700 m-0",
                                              children: n.answer,
                                            }),
                                      }),
                                  ],
                                },
                                n.key
                              );
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: { __html: JSON.stringify(l) },
              }),
            ],
          }),
        });
      }
    },
    56746: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return d;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(59646),
        r = n(19764),
        l = n(10476),
        o = n(34577);
      let c = [
        {
          title: "Thiết kế k\xe9o thả nhanh ch\xf3ng",
          description:
            "Chỉ cần v\xe0i thao t\xe1c đơn giản, dễ d\xe0ng chỉnh sửa th\xf4ng tin bạn c\xf3 thể tạo v\xe0 gửi thiệp cưới ngay lập tức m\xe0 kh\xf4ng mất thời gian chờ đợi in ấn.",
          icon: "solar:widget-5-bold-duotone",
          iconColor: "text-blue-500",
        },
      ];
      function d() {
        let e = (0, a.useMemo)(() => [l.Rv, l.W_, l.tl, l.pt], []),
          t = (0, o.a)("(max-width: 768px)");
        return (0, i.jsx)("section", {
          id: "features",
          className: "pt-6 py-12 bg-white",
          role: "region",
          "aria-labelledby": "features-heading",
          children: (0, i.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 md:px-0",
            children: [
              (0, i.jsx)("h2", {
                id: "features-heading",
                className: "sr-only",
                children: "T\xednh năng nổi bật của @quyctd",
              }),
              !t &&
                (0, i.jsx)("div", {
                  className:
                    "hidden md:grid md:grid-cols-4 gap-4 px-4 md:px-8 features-section-list",
                  role: "list",
                  "aria-labelledby": "features-heading",
                  children: c.map((e, t) =>
                    (0, i.jsxs)(
                      "article",
                      {
                        className:
                          "feature-item bg-white p-6 rounded-lg shadow-sm h-full relative group overflow-hidden",
                        tabIndex: 0,
                        "aria-label": ""
                          .concat(e.title, ": ")
                          .concat(e.description),
                        role: "listitem",
                        "aria-roledescription": "feature",
                        children: [
                          (0, i.jsx)(s.Icon, {
                            icon: e.icon,
                            width: 100,
                            height: 100,
                            className: "absolute bottom-2 right-2 ".concat(
                              e.iconColor,
                              " opacity-20 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-30 pointer-events-none rotate-12"
                            ),
                            style: { zIndex: 0 },
                          }),
                          (0, i.jsxs)("div", {
                            className: "relative",
                            style: { zIndex: 1 },
                            children: [
                              (0, i.jsx)("h3", {
                                className:
                                  "text-lg md:text-xl mb-3 leading-tight m-0",
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className:
                                  "text-sm md:text-base leading-relaxed text-gray-700 m-0",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              t &&
                (0, i.jsx)(r.tq, {
                  modules: e,
                  loop: !1,
                  spaceBetween: 16,
                  slidesPerView: 1,
                  className:
                    "!p-4 !mx-auto features-section-list block md:hidden",
                  autoplay: { delay: 3500, disableOnInteraction: !1 },
                  navigation: !1,
                  pagination: !1,
                  "aria-labelledby": "features-heading",
                  role: "list",
                  children: c.map((e, t) =>
                    (0, i.jsx)(
                      r.o5,
                      {
                        "aria-roledescription": "feature",
                        role: "listitem",
                        children: (0, i.jsxs)("article", {
                          className:
                            "feature-item bg-white p-6 rounded-lg shadow-sm h-full relative group overflow-hidden",
                          tabIndex: 0,
                          "aria-label": ""
                            .concat(e.title, ": ")
                            .concat(e.description),
                          children: [
                            (0, i.jsx)(s.Icon, {
                              icon: e.icon,
                              width: 100,
                              height: 100,
                              className: "absolute bottom-2 right-2 ".concat(
                                e.iconColor,
                                " opacity-20 transition-transform duration-200 group-hover:scale-110 group-hover:opacity-30 pointer-events-none rotate-12"
                              ),
                              style: { zIndex: 0 },
                            }),
                            (0, i.jsxs)("div", {
                              className: "relative",
                              style: { zIndex: 1 },
                              children: [
                                (0, i.jsx)("h3", {
                                  className:
                                    "text-lg md:text-xl mb-3 leading-tight m-0",
                                  children: e.title,
                                }),
                                (0, i.jsx)("p", {
                                  className:
                                    "text-sm md:text-base leading-relaxed text-gray-700 m-0",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
              (0, i.jsx)("noscript", {
                children: (0, i.jsx)("div", {
                  className:
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6",
                  children: c.map((e, t) =>
                    (0, i.jsxs)(
                      "article",
                      {
                        className: "p-4 rounded-lg border",
                        "aria-label": ""
                          .concat(e.title, " — ")
                          .concat(e.description),
                        children: [
                          (0, i.jsx)("h3", {
                            className: "text-lg mb-2 mt-0",
                            children: e.title,
                          }),
                          (0, i.jsx)("p", {
                            className: "text-sm text-gray-600 m-0",
                            children: e.description,
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
        });
      }
    },
    45793: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return C;
        },
      });
      var i = n(57437),
        a = n(33145),
        s = n(2265),
        r = n(57586),
        l = n(98239),
        o = n(14127),
        c = n(46819),
        d = n(80605),
        h = n(99376),
        u = n(11840),
        m = n(19878),
        g = n(34029),
        p = n(53743),
        v = n(88589),
        x = n(4156),
        f = n(50742),
        y = n(55672),
        b = n(53720),
        w = n(50828),
        j = n(67009);
      function N(e) {
        let { open: t, onClose: n, defaultMode: a = "login" } = e,
          [r] = m.Z.useForm(),
          [o, c] = (0, s.useState)(a),
          [N, k] = (0, s.useState)(!1),
          [C, T] = (0, s.useState)(null),
          S = (0, w.mr)(),
          P = (0, h.useRouter)();
        (0, s.useEffect)(() => {
          t && (c(a), r.resetFields(), T(null));
        }, [t, a, r]),
          (0, s.useEffect)(() => {
            o && (r.resetFields(), T(null));
          }, [o, r]);
        let q = async (e) => {
            k(!0), T(null);
            try {
              let t = await (0, d.signIn)("credentials", {
                redirect: !1,
                email: e.email,
                password: e.password,
                callbackUrl: b.H1,
              });
              if (null == t ? void 0 : t.error) {
                T("Email hoặc mật khẩu kh\xf4ng đ\xfang."),
                  g.ZP.error("Đăng nhập thất bại"),
                  k(!1);
                return;
              }
              (null == t ? void 0 : t.ok) &&
                (g.ZP.success("Đăng nhập th\xe0nh c\xf4ng"),
                r.resetFields(),
                n(),
                P.push(b.H1),
                P.refresh());
            } catch (e) {
              console.error("Login error:", e),
                T("Đ\xe3 c\xf3 lỗi xảy ra. Vui l\xf2ng thử lại."),
                g.ZP.error("Đăng nhập thất bại"),
                k(!1);
            }
          },
          L = async (e) => {
            let t = j.gY.safeParse(e);
            if (!t.success) {
              var i, a;
              let e =
                (null ===
                  (i = (
                    null !== (a = t.error.issues) && void 0 !== a ? a : []
                  )[0]) || void 0 === i
                  ? void 0
                  : i.message) ||
                "Dữ liệu kh\xf4ng hợp lệ. Vui l\xf2ng kiểm tra lại.";
              g.ZP.error(e);
              return;
            }
            let { name: s, email: l, password: o, terms: h } = t.data;
            k(!0), T(null);
            try {
              await S.mutateAsync(
                { name: s, email: l, password: o, terms: h },
                {
                  onSuccess: async () => {
                    let e = await (0, d.signIn)("credentials", {
                      redirect: !1,
                      email: l,
                      password: o,
                      callbackUrl: b.H1,
                    });
                    if (null == e ? void 0 : e.error) {
                      g.ZP.warning(
                        "Đăng k\xfd th\xe0nh c\xf4ng! Vui l\xf2ng đăng nhập."
                      ),
                        c("login"),
                        k(!1);
                      return;
                    }
                    (null == e ? void 0 : e.ok) &&
                      (g.ZP.success("Đăng k\xfd & đăng nhập th\xe0nh c\xf4ng!"),
                      r.resetFields(),
                      n(),
                      P.push(b.H1),
                      P.refresh());
                  },
                  onError: (e) => {
                    let t =
                      e instanceof Error
                        ? e.message
                        : "Đ\xe3 xảy ra lỗi. Vui l\xf2ng thử lại.";
                    if ("User already exists" === t) {
                      T(
                        "Email đ\xe3 tồn tại. Vui l\xf2ng đăng nhập bằng email/mật khẩu."
                      ),
                        g.ZP.error(
                          "Email đ\xe3 tồn tại. Vui l\xf2ng đăng nhập bằng email/mật khẩu."
                        ),
                        k(!1);
                      return;
                    }
                    T(t), g.ZP.error(t), k(!1);
                  },
                }
              );
            } catch (e) {
              console.error("Register error:", e), k(!1);
            }
          };
        return (0, i.jsx)(p.default, {
          open: t,
          onCancel: n,
          footer: null,
          width: 500,
          centered: !0,
          destroyOnHidden: !0,
          className: "auth-modal",
          children: (0, i.jsx)(l.E.div, {
            className: "w-full",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, ease: "easeOut" },
            children: (0, i.jsxs)("div", {
              className: "flex flex-col gap-2 p-0 w-full",
              children: [
                (0, i.jsx)("div", {
                  className: "mx-auto",
                  children: (0, i.jsx)(u.Z, {}),
                }),
                (0, i.jsx)("p", {
                  className: "text-sm text-center text-dark my-2",
                  children: "login" === o ? "Đăng nhập" : "Đăng k\xfd",
                }),
                C &&
                  (0, i.jsx)("div", {
                    className:
                      "text-sm text-center text-red-500 bg-red-50 p-2 rounded",
                    children: C,
                  }),
                "login" === o
                  ? (0, i.jsxs)(m.Z, {
                      form: r,
                      name: "login-form",
                      autoComplete: "off",
                      layout: "vertical",
                      onFinish: q,
                      className: "space-y-1",
                      children: [
                        (0, i.jsx)("label", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Email",
                        }),
                        (0, i.jsx)(m.Z.Item, {
                          name: "email",
                          rules: [
                            {
                              required: !0,
                              message: "Vui l\xf2ng nhập email.",
                            },
                            {
                              type: "email",
                              message: "Email kh\xf4ng hợp lệ.",
                            },
                          ],
                          className: "!mb-2 !mt-2",
                          children: (0, i.jsx)(v.default, {
                            placeholder: "Email",
                            size: "large",
                            disabled: N,
                          }),
                        }),
                        (0, i.jsx)("label", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Mật khẩu",
                        }),
                        (0, i.jsx)(m.Z.Item, {
                          name: "password",
                          rules: [
                            {
                              required: !0,
                              message: "Vui l\xf2ng nhập mật khẩu.",
                            },
                            {
                              min: 6,
                              message:
                                "Mật khẩu phải c\xf3 \xedt nhất 6 k\xfd tự.",
                            },
                          ],
                          className: "!mb-2 !mt-2",
                          children: (0, i.jsx)(v.default.Password, {
                            placeholder: "Mật khẩu",
                            size: "large",
                            disabled: N,
                          }),
                        }),
                        (0, i.jsxs)("div", {
                          className: "flex items-center justify-between",
                          children: [
                            (0, i.jsx)(m.Z.Item, {
                              name: "remember",
                              valuePropName: "checked",
                              className: "!mb-2 !mt-2",
                              children: (0, i.jsx)(x.Z, {
                                disabled: N,
                                children: "Lưu đăng nhập",
                              }),
                            }),
                            (0, i.jsx)("a", {
                              href: "/forgot-password",
                              className:
                                "text-primary hover:text-primary/80 text-sm",
                              onClick: (e) => {
                                e.preventDefault(),
                                  n(),
                                  (window.location.href = "/forgot-password");
                              },
                              children: "Qu\xean mật khẩu?",
                            }),
                          ],
                        }),
                        (0, i.jsx)(f.ZP, {
                          type: "primary",
                          htmlType: "submit",
                          className: "w-full !bg-primary",
                          size: "large",
                          loading: N,
                          children: "Đăng nhập",
                        }),
                      ],
                    })
                  : (0, i.jsxs)(m.Z, {
                      form: r,
                      name: "register-form",
                      autoComplete: "off",
                      layout: "vertical",
                      onFinish: L,
                      className: "space-y-1",
                      children: [
                        (0, i.jsx)("label", {
                          className: "text-sm font-medium text-gray-900",
                          children: "T\xean của bạn",
                        }),
                        (0, i.jsx)(m.Z.Item, {
                          name: "name",
                          rules: [
                            {
                              required: !0,
                              message: "Vui l\xf2ng nhập t\xean của bạn.",
                            },
                            {
                              min: 2,
                              message:
                                "T\xean phải c\xf3 \xedt nhất 2 k\xfd tự.",
                            },
                            {
                              max: 50,
                              message:
                                "T\xean kh\xf4ng được vượt qu\xe1 50 k\xfd tự.",
                            },
                          ],
                          className: "!mb-2 !mt-2",
                          children: (0, i.jsx)(v.default, {
                            placeholder: "T\xean của bạn",
                            size: "large",
                            disabled: N,
                          }),
                        }),
                        (0, i.jsx)("label", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Email",
                        }),
                        (0, i.jsx)(m.Z.Item, {
                          name: "email",
                          rules: [
                            {
                              required: !0,
                              message: "Vui l\xf2ng nhập email.",
                            },
                            {
                              type: "email",
                              message: "Email kh\xf4ng hợp lệ.",
                            },
                          ],
                          className: "!mb-2 !mt-2",
                          children: (0, i.jsx)(v.default, {
                            placeholder: "Email",
                            size: "large",
                            disabled: N,
                          }),
                        }),
                        (0, i.jsx)("label", {
                          className: "text-sm font-medium text-gray-900",
                          children: "Mật khẩu",
                        }),
                        (0, i.jsx)(m.Z.Item, {
                          name: "password",
                          rules: [
                            {
                              required: !0,
                              message: "Vui l\xf2ng nhập mật khẩu.",
                            },
                            {
                              min: 6,
                              message:
                                "Mật khẩu phải c\xf3 \xedt nhất 6 k\xfd tự.",
                            },
                          ],
                          className: "!mb-2 !mt-2",
                          children: (0, i.jsx)(v.default.Password, {
                            placeholder: "••••••••",
                            size: "large",
                            disabled: N,
                          }),
                        }),
                        (0, i.jsx)(m.Z.Item, {
                          name: "terms",
                          valuePropName: "checked",
                          rules: [
                            {
                              validator: (e, t) =>
                                t
                                  ? Promise.resolve()
                                  : Promise.reject(
                                      Error(
                                        "Vui l\xf2ng đồng \xfd với c\xe1c điều khoản v\xe0 điều kiện."
                                      )
                                    ),
                            },
                          ],
                          className: "!pb-2 !mb-2",
                          children: (0, i.jsxs)(x.Z, {
                            disabled: N,
                            children: [
                              "T\xf4i đồng \xfd với",
                              " ",
                              (0, i.jsx)("a", {
                                href: "/terms-of-service",
                                className: "text-primary hover:text-primary/80",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: "điều khoản v\xe0 điều kiện",
                              }),
                              " ",
                              "của @quyctd",
                            ],
                          }),
                        }),
                        (0, i.jsx)(f.ZP, {
                          type: "primary",
                          htmlType: "submit",
                          className: "w-full !bg-primary",
                          size: "large",
                          loading: N,
                          children: "Đăng k\xfd",
                        }),
                      ],
                    }),
                (0, i.jsxs)("div", {
                  className: "relative my-4 text-center",
                  children: [
                    (0, i.jsx)("hr", { className: "my-3" }),
                    (0, i.jsx)("span", {
                      className:
                        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white text-sm px-2 text-gray-400",
                      children: "hoặc",
                    }),
                  ],
                }),
                (0, i.jsx)(y.Z, {}),
                (0, i.jsxs)("div", {
                  className:
                    "flex gap-2 text-base text-ld font-medium mt-6 items-center justify-center",
                  children: [
                    (0, i.jsx)("p", {
                      children:
                        "login" === o
                          ? "Bạn chưa c\xf3 t\xe0i khoản?"
                          : "Bạn đ\xe3 c\xf3 t\xe0i khoản?",
                    }),
                    (0, i.jsx)("button", {
                      type: "button",
                      className:
                        "text-primary hover:text-primary/80 text-sm font-medium",
                      onClick: () => {
                        c("login" === o ? "register" : "login"),
                          r.resetFields(),
                          T(null);
                      },
                      children:
                        "login" === o ? "Tạo t\xe0i khoản" : "Đăng nhập",
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      let k = [
        "sinh nhật",
        "đ\xe1m cưới",
        "t\xe2n gia",
        "kỷ niệm",
        "tốt nghiệp",
        "lời ch\xfac",
        "sự kiện",
      ];
      function C() {
        let [e, t] = (0, s.useState)(0),
          [n, u] = (0, s.useState)(!1),
          { data: m, status: g } = (0, d.useSession)(),
          p = (0, h.useRouter)();
        return (
          (0, s.useEffect)(() => {
            let e = setInterval(() => {
              t((e) => (e + 1) % k.length);
            }, 2e3);
            return () => clearInterval(e);
          }, []),
          (0, i.jsx)("section", {
            id: "home",
            children: (0, i.jsxs)("div", {
              className:
                "relative mt-1 md:mt-2.5 px-0 py-12 md:px-0 md:py-6 max-w-7xl mx-auto sm:px-6 lg:px-8 rounded-[10px]",
              children: [
                (0, i.jsxs)("div", {
                  className: "backgroundWrp",
                  children: [
                    (0, i.jsx)("div", {
                      className: "imgWrp animate-hero-img-scroll",
                      children: (0, i.jsx)(a.default, {
                        src: "/assets/images/hero-pc.png",
                        alt: "Thiệp cưới online miễn ph\xed đẹp nhất - Zenlove",
                        title: "Tạo thiệp cưới online sang trọng v\xe0 tinh tế",
                        width: 1083,
                        height: 1169,
                        sizes:
                          "(max-width: 1290px) 90vw, (max-width: 1920px) 95vw, 100vw",
                        priority: !0,
                        decoding: "async",
                        className: "",
                        style: { width: "100%", height: "auto" },
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "imgWrp animate-hero-img-scroll",
                      children: (0, i.jsx)(a.default, {
                        src: "/assets/images/hero-pc.png",
                        alt: "Mẫu thiệp cưới online đẹp - Website thiệp cưới miễn ph\xed",
                        title: "Thiệp cưới điện tử hiện đại với Zenlove",
                        width: 1083,
                        height: 1169,
                        sizes:
                          "(max-width: 1290px) 90vw, (max-width: 1920px) 95vw, 100vw",
                        priority: !0,
                        decoding: "async",
                        className: "",
                        style: { width: "100%", height: "auto" },
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: "gradientWrp" }),
                (0, i.jsx)("div", {
                  className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                  children: (0, i.jsxs)("div", {
                    className: "contentWrp animate-hero-content",
                    children: [
                      (0, i.jsxs)("h1", {
                        className:
                          "text-left text-3xl sm:text-2xl md:text-[3.5rem] leading-tight md:leading-none tracking-tight m-0 text-gray-900",
                        children: [
                          "Ch\xfang t\xf4i đang thay đổi c\xe1ch gửi lời mời",
                          " ",
                          (0, i.jsx)("span", {
                            className: "inline-block align-baseline w-auto",
                            children: (0, i.jsxs)("span", {
                              className: "relative inline-block align-baseline",
                              children: [
                                (0, i.jsx)("span", {
                                  "aria-hidden": !0,
                                  className:
                                    "invisible select-none text-zen-primary whitespace-nowrap",
                                  children: "tốt nghiệp",
                                }),
                                (0, i.jsx)("span", {
                                  className: "absolute inset-0 inline-block",
                                  children: (0, i.jsx)(r.M, {
                                    mode: "popLayout",
                                    initial: !1,
                                    children: (0, i.jsx)(
                                      l.E.span,
                                      {
                                        initial: { y: "100%", opacity: 0 },
                                        animate: { y: 0, opacity: 1 },
                                        exit: { y: "-100%", opacity: 0 },
                                        transition: {
                                          duration: 0.45,
                                          ease: "easeOut",
                                        },
                                        className:
                                          "text-zen-primary whitespace-nowrap",
                                        "aria-live": "polite",
                                        children: k[e],
                                      },
                                      e
                                    ),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          (0, i.jsxs)("div", {
                            className: "relative block",
                            children: [
                              (0, i.jsx)("span", { children: "với " }),
                              (0, i.jsxs)("span", {
                                className: "text-zen-primary highlight",
                                children: [
                                  "@quyctd",
                                  (0, i.jsx)("div", {
                                    className:
                                      "absolute top-1 -right-4 animate-heartBeat",
                                    "aria-hidden": !0,
                                    children: (0, i.jsx)(o.Z, {
                                      weight: "LineDuotone",
                                      className: "h-4 w-4 md:h-6 md:w-6",
                                      color: "#e54153",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsx)("h2", {
                        className: "sr-only",
                        children:
                          "Tạo v\xe0 gửi thiệp mời online nhanh ch\xf3ng bằng @quyctd",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-left text-base md:max-w-[635px] md:text-[1.125rem] mt-6 relative m-0 max-w-none leading-8",
                        children:
                          "@quyctd l\xe0 ứng dụng tạo thiệp online đột ph\xe1 — thay v\xec gửi thiệp giấy truyền thống qua tay, giờ đ\xe2y bạn c\xf3 thể gửi thiệp mời chỉ qua một đường link.",
                      }),
                      (0, i.jsx)("p", {
                        className:
                          "text-left text-base md:max-w-[635px] md:text-[1.125rem] relative max-w-none leading-8 mt-1",
                        children:
                          "@quyctd c\xf3 nhiều mẫu thiệp đa dạng v\xe0 t\xednh năng t\xf9y chỉnh linh hoạt, gi\xfap bạn tiết kiệm thời gian v\xe0 chi ph\xed in ấn, đồng thời lưu giữ kỷ niệm thật đ\xe1ng nhớ.",
                      }),
                      (0, i.jsx)("div", {
                        className: "mt-6 flex justify-center md:justify-start",
                        children: (0, i.jsxs)("button", {
                          onClick: () => {
                            "loading" !== g &&
                              ("authenticated" === g && m
                                ? p.push("/dashboard")
                                : u(!0));
                          },
                          disabled: "loading" === g,
                          className:
                            "bg-zen-primary !hover:bg-red-600 text-white hover:text-white px-10 py-3.5 rounded-full font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-1 disabled:opacity-50 disabled:cursor-not-allowed",
                          "aria-label": "Bắt đầu tạo thiệp c\xf9ng @quyctd",
                          id: "hero-btn-start",
                          children: [
                            (0, i.jsx)("span", {
                              className: "text-lg font-bold tracking-wider",
                              children: "Bắt đầu",
                            }),
                            (0, i.jsx)(c.Z, {
                              weight: "LineDuotone",
                              size: 20,
                              className: "inline-block animate-phone-ring",
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(N, {
                        open: n,
                        onClose: () => u(!1),
                        defaultMode: "login",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    25908: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return h;
        },
      });
      var i = n(57437),
        a = n(61316),
        s = n.n(a),
        r = n(33145),
        l = n(2265),
        o = n(19764),
        c = n(10476),
        d = n(34577);
      function h() {
        let e = (0, l.useMemo)(() => [c.Rv, c.W_, c.tl, c.pt], []),
          t = [
            {
              title: "Mất nhiều thời gian",
              description: "để gửi tận tay tất cả thiệp mời",
              image: "/assets/images/landing/it1.png",
            },
            {
              title: "Kh\xf4ng đủ chia sẻ th\xe0nh \xfd",
              description: "khi d\xf9ng tin nhắn v\xe0 ảnh chụp thiệp",
              image: "/assets/images/landing/it2.png",
            },
            {
              title: "Kh\xf4ng biết số kh\xe1ch mời tham dự",
              description: "một c\xe1ch ch\xednh x\xe1c",
              image: "/assets/images/landing/it3.png",
            },
          ],
          n = (0, d.a)("(max-width: 768px)");
        return (0, i.jsx)("section", {
          id: "problems",
          className: "bg-white py-12",
          children: (0, i.jsxs)("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ",
            children: [
              !n &&
                (0, i.jsx)(i.Fragment, {
                  children: (0, i.jsx)("div", {
                    className: "hidden md:block",
                    children: (0, i.jsx)("div", {
                      className: "relative flex items-center justify-center",
                      children: (0, i.jsxs)("div", {
                        className: "flex items-start gap-4",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "text-right space-y-2.5",
                            children: [
                              (0, i.jsx)("h3", {
                                className: "text-3xl text-gray-900 m-0",
                                children: "BẠN ĐANG C\xd3 KẾ HOẠCH",
                              }),
                              (0, i.jsx)("h3", {
                                className: "text-3xl",
                                children: "MỜI TIỆC",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("div", {
                            className: "flex items-baseline",
                            children: [
                              (0, i.jsxs)("span", {
                                className:
                                  "text-[#e54153] tracking-wide leading-none font-semibold italic ".concat(
                                    s().className
                                  ),
                                style: { fontSize: "6rem", lineHeight: "0.8" },
                                children: [
                                  "100",
                                  (0, i.jsx)("span", {
                                    className:
                                      "text-[#e54153] leading-none align-super italic ".concat(
                                        s().className
                                      ),
                                    style: {
                                      fontSize: "4rem",
                                      lineHeight: "0",
                                      marginLeft: "0.5rem",
                                    },
                                    children: "+",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("span", {
                                className: "sr-only",
                                children: "Hơn 100 kh\xe1ch mời",
                              }),
                              (0, i.jsx)("span", {
                                className: "text-3xl font-heading",
                                children: "KH\xc1CH",
                              }),
                            ],
                          }),
                          (0, i.jsxs)("svg", {
                            viewBox: "0 0 220 185",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "problems-icon",
                            children: [
                              (0, i.jsxs)("g", {
                                clipPath: "url(#clip0_10_81)",
                                children: [
                                  (0, i.jsx)("path", {
                                    d: "M31.3241 62.7815C47.4635 55.8776 67.585 56.5652 83.0467 61.6266C97.8573 66.5229 115.035 77.868 113.291 94.3852C112.678 100.421 108.063 106.435 100.768 105.188C93.9868 104.054 90.938 97.9703 92.9528 91.9158C98.5647 75.6789 123.856 76.9771 136.611 81.4172C144.737 84.211 151.779 88.7664 157.359 94.7104C162.423 100.23 167.259 107.599 167.512 115.271C167.587 116.382 165.503 116.765 165.12 115.772C162.966 110.485 161.428 105.273 158.08 100.546C154.56 95.6785 149.88 91.4617 144.557 88.3198C133.877 81.9458 117.705 78.0889 104.705 83.6874C97.9159 86.8044 90.623 96.8478 98.5558 101.58C101.784 103.556 106.332 103.161 108.672 99.7793C110.876 96.6564 110.918 92.4965 110.248 89.2311C107.871 75.7418 93.2766 67.137 80.114 63.1637C72.6759 60.9353 64.7316 59.833 56.7603 59.8806C48.1051 59.9828 40.1454 61.8905 31.811 64.0454C30.9571 64.2687 30.5397 63.1854 31.3241 62.7815Z",
                                    fill: "#E54153",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M26.8188 64.5063C42.6587 53.4698 63.5876 51.9837 80.4944 58.3565C88.6223 61.4603 95.8017 66.0668 102.029 71.5558C108.325 77.2254 114.938 84.3276 117.145 92.4953C118.652 98.2374 117.039 108.385 108.353 109.017C100.728 109.658 92.7503 103.285 91.5465 96.805C90.2345 89.4343 96.83 82.7657 104.169 80.163C112.942 77.0116 123.043 78.2208 131.404 80.4064C149.772 85.0805 164.938 97.61 171.233 113.95C171.824 115.485 169.164 116.814 168.573 115.279C163.812 103.531 154.685 93.8695 142.809 87.7461C136.7 84.6981 129.981 82.5054 122.825 81.6192C114.676 80.5954 104.685 80.5871 98.1883 86.5965C91.0113 93.2806 94.5876 101.649 102.205 105.259C106.666 107.384 111.695 107.323 114.058 102.172C115.947 97.9262 114.823 93.1772 113.02 89.4128C107.06 77.2955 94.3353 66.8353 81.1978 61.4021C64.9034 54.4841 43.9338 54.9499 28.0244 65.8058C27.1048 66.4686 25.8316 65.2986 26.8188 64.5063Z",
                                    fill: "#E54153",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M153.739 106.663C157.135 108.159 160.329 110.044 163.488 111.839C164.998 112.711 166.577 113.454 168.088 114.325C168.808 114.671 172.211 117.098 173.03 116.784C173.439 116.628 173.549 112.338 173.58 111.808C173.775 110.18 173.936 108.461 174.131 106.832C174.521 103.575 174.291 99.6233 175.811 96.5551C176.317 95.429 177.959 95.4219 178.274 96.5444C178.835 98.6089 178.302 100.885 177.973 103.082C177.647 105.59 177.423 108.058 177.096 110.566C176.803 112.854 177.35 118.238 174.485 119.646C171.722 121.014 167.935 117.284 165.876 116.208C161.378 113.683 156.573 111.275 152.415 108.412C151.316 107.694 152.504 106.203 153.739 106.663Z",
                                    fill: "#E54153",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M154.556 106.039C157.752 108.234 160.269 111.414 163.124 113.947C166.496 116.903 169.97 119.821 173.749 122.31C172.862 122.753 171.975 123.196 171.088 123.639C171.61 119.503 172.029 115.406 172.174 111.207C172.286 107.228 171.3 102.84 172.131 98.8964C172.397 97.7584 174.445 96.9744 174.932 98.2383C176.289 101.759 175.804 106.296 175.725 110.055C175.582 114.564 175.199 119.061 174.475 123.586C174.278 124.905 172.503 125.481 171.471 124.633C168.134 121.766 164.628 119.069 161.461 116.034C158.536 113.321 155.199 110.454 153.296 107.039C152.951 106.447 153.903 105.564 154.556 106.039Z",
                                    fill: "#E54153",
                                  }),
                                  (0, i.jsx)("path", {
                                    d: "M153.511 103.021C160.704 109.797 167.897 116.574 175.294 123.272C174.27 123.664 173.314 123.927 172.29 124.319C173.356 119.767 174.388 115.125 175.18 110.471C175.871 106.166 175.637 101.594 177.082 97.4151C177.519 96.1084 179.675 96.2153 179.922 97.4673C180.736 101.714 179.502 106.745 178.708 111.089C177.881 115.652 176.917 120.165 175.611 124.705C175.242 125.882 173.465 126.148 172.81 125.363C165.854 118.288 158.866 111.433 151.809 104.397C150.742 103.459 152.547 102.043 153.511 103.021Z",
                                    fill: "#E54153",
                                  }),
                                ],
                              }),
                              (0, i.jsx)("defs", {
                                children: (0, i.jsx)("clipPath", {
                                  id: "clip0_10_81",
                                  children: (0, i.jsx)("rect", {
                                    width: "186.388",
                                    height: "125.768",
                                    fill: "white",
                                    transform:
                                      "matrix(0.933901 -0.357532 0.359486 0.93315 0.45723 67.1399)",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              n &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("div", {
                      className: "block md:hidden",
                      children: (0, i.jsx)("div", {
                        className: "relative flex items-center justify-center",
                        children: (0, i.jsxs)("div", {
                          className: "flex flex-col items-center",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "text-center",
                              children: [
                                (0, i.jsx)("h3", {
                                  className: "text-2xl text-gray-900 m-0",
                                  children: "BẠN ĐANG",
                                }),
                                (0, i.jsx)("h3", {
                                  className: "text-2xl m-0",
                                  children: "C\xd3 KẾ HOẠCH MỜI TIỆC",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "text-center flex items-baseline justify-center",
                              children: [
                                (0, i.jsxs)("span", {
                                  className:
                                    "text-[#e54153] tracking-wide leading-none font-semibold italic ".concat(
                                      s().className
                                    ),
                                  style: {
                                    fontSize: "5rem",
                                    lineHeight: "0.8",
                                  },
                                  children: [
                                    "100",
                                    (0, i.jsx)("span", {
                                      className:
                                        "text-[#e54153] leading-none align-super italic ".concat(
                                          s().className
                                        ),
                                      style: {
                                        fontSize: "4rem",
                                        lineHeight: "0",
                                        marginLeft: "0.5rem",
                                      },
                                      children: "+",
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("span", {
                                  className: "sr-only",
                                  children: "Hơn 100 kh\xe1ch mời",
                                }),
                                (0, i.jsx)("span", {
                                  className: "text-2xl font-heading",
                                  children: "KH\xc1CH",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("svg", {
                              viewBox: "0 0 220 185",
                              fill: "none",
                              xmlns: "http://www.w3.org/2000/svg",
                              className: "problems-icon-mobile",
                              children: [
                                (0, i.jsxs)("g", {
                                  clipPath: "url(#clip0_10_81)",
                                  children: [
                                    (0, i.jsx)("path", {
                                      d: "M31.3241 62.7815C47.4635 55.8776 67.585 56.5652 83.0467 61.6266C97.8573 66.5229 115.035 77.868 113.291 94.3852C112.678 100.421 108.063 106.435 100.768 105.188C93.9868 104.054 90.938 97.9703 92.9528 91.9158C98.5647 75.6789 123.856 76.9771 136.611 81.4172C144.737 84.211 151.779 88.7664 157.359 94.7104C162.423 100.23 167.259 107.599 167.512 115.271C167.587 116.382 165.503 116.765 165.12 115.772C162.966 110.485 161.428 105.273 158.08 100.546C154.56 95.6785 149.88 91.4617 144.557 88.3198C133.877 81.9458 117.705 78.0889 104.705 83.6874C97.9159 86.8044 90.623 96.8478 98.5558 101.58C101.784 103.556 106.332 103.161 108.672 99.7793C110.876 96.6564 110.918 92.4965 110.248 89.2311C107.871 75.7418 93.2766 67.137 80.114 63.1637C72.6759 60.9353 64.7316 59.833 56.7603 59.8806C48.1051 59.9828 40.1454 61.8905 31.811 64.0454C30.9571 64.2687 30.5397 63.1854 31.3241 62.7815Z",
                                      fill: "#E54153",
                                    }),
                                    (0, i.jsx)("path", {
                                      d: "M26.8188 64.5063C42.6587 53.4698 63.5876 51.9837 80.4944 58.3565C88.6223 61.4603 95.8017 66.0668 102.029 71.5558C108.325 77.2254 114.938 84.3276 117.145 92.4953C118.652 98.2374 117.039 108.385 108.353 109.017C100.728 109.658 92.7503 103.285 91.5465 96.805C90.2345 89.4343 96.83 82.7657 104.169 80.163C112.942 77.0116 123.043 78.2208 131.404 80.4064C149.772 85.0805 164.938 97.61 171.233 113.95C171.824 115.485 169.164 116.814 168.573 115.279C163.812 103.531 154.685 93.8695 142.809 87.7461C136.7 84.6981 129.981 82.5054 122.825 81.6192C114.676 80.5954 104.685 80.5871 98.1883 86.5965C91.0113 93.2806 94.5876 101.649 102.205 105.259C106.666 107.384 111.695 107.323 114.058 102.172C115.947 97.9262 114.823 93.1772 113.02 89.4128C107.06 77.2955 94.3353 66.8353 81.1978 61.4021C64.9034 54.4841 43.9338 54.9499 28.0244 65.8058C27.1048 66.4686 25.8316 65.2986 26.8188 64.5063Z",
                                      fill: "#E54153",
                                    }),
                                    (0, i.jsx)("path", {
                                      d: "M153.739 106.663C157.135 108.159 160.329 110.044 163.488 111.839C164.998 112.711 166.577 113.454 168.088 114.325C168.808 114.671 172.211 117.098 173.03 116.784C173.439 116.628 173.549 112.338 173.58 111.808C173.775 110.18 173.936 108.461 174.131 106.832C174.521 103.575 174.291 99.6233 175.811 96.5551C176.317 95.429 177.959 95.4219 178.274 96.5444C178.835 98.6089 178.302 100.885 177.973 103.082C177.647 105.59 177.423 108.058 177.096 110.566C176.803 112.854 177.35 118.238 174.485 119.646C171.722 121.014 167.935 117.284 165.876 116.208C161.378 113.683 156.573 111.275 152.415 108.412C151.316 107.694 152.504 106.203 153.739 106.663Z",
                                      fill: "#E54153",
                                    }),
                                    (0, i.jsx)("path", {
                                      d: "M154.556 106.039C157.752 108.234 160.269 111.414 163.124 113.947C166.496 116.903 169.97 119.821 173.749 122.31C172.862 122.753 171.975 123.196 171.088 123.639C171.61 119.503 172.029 115.406 172.174 111.207C172.286 107.228 171.3 102.84 172.131 98.8964C172.397 97.7584 174.445 96.9744 174.932 98.2383C176.289 101.759 175.804 106.296 175.725 110.055C175.582 114.564 175.199 119.061 174.475 123.586C174.278 124.905 172.503 125.481 171.471 124.633C168.134 121.766 164.628 119.069 161.461 116.034C158.536 113.321 155.199 110.454 153.296 107.039C152.951 106.447 153.903 105.564 154.556 106.039Z",
                                      fill: "#E54153",
                                    }),
                                    (0, i.jsx)("path", {
                                      d: "M153.511 103.021C160.704 109.797 167.897 116.574 175.294 123.272C174.27 123.664 173.314 123.927 172.29 124.319C173.356 119.767 174.388 115.125 175.18 110.471C175.871 106.166 175.637 101.594 177.082 97.4151C177.519 96.1084 179.675 96.2153 179.922 97.4673C180.736 101.714 179.502 106.745 178.708 111.089C177.881 115.652 176.917 120.165 175.611 124.705C175.242 125.882 173.465 126.148 172.81 125.363C165.854 118.288 158.866 111.433 151.809 104.397C150.742 103.459 152.547 102.043 153.511 103.021Z",
                                      fill: "#E54153",
                                    }),
                                  ],
                                }),
                                (0, i.jsx)("defs", {
                                  children: (0, i.jsx)("clipPath", {
                                    id: "clip0_10_81",
                                    children: (0, i.jsx)("rect", {
                                      width: "186.388",
                                      height: "125.768",
                                      fill: "white",
                                      transform:
                                        "matrix(0.933901 -0.357532 0.359486 0.93315 0.45723 67.1399)",
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                    (0, i.jsx)("h2", {
                      id: "problems-heading",
                      className:
                        "text-center mt-0 md:mt-6 text-[#e54153] uppercase tracking-wide text-lg md:text-2xl",
                      children: "Nhưng c\xf3 nhiều vấn đề phải bận t\xe2m?",
                    }),
                  ],
                }),
              !n &&
                (0, i.jsx)("div", {
                  className:
                    "hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-2 md:mt-8 px-4 md:px-8",
                  children: t.map((e, t) =>
                    (0, i.jsxs)(
                      "div",
                      {
                        className:
                          "bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300",
                        children: [
                          (0, i.jsx)(r.default, {
                            src: e.image,
                            alt: e.title,
                            title: e.title + " " + e.description,
                            width: 153,
                            height: 134,
                            sizes: "115px",
                            style: {
                              width: "115px",
                              height: "auto",
                              objectFit: "contain",
                            },
                          }),
                          (0, i.jsxs)("div", {
                            children: [
                              (0, i.jsx)("h3", {
                                className: "text-sm m-0",
                                children: e.title,
                              }),
                              (0, i.jsx)("p", {
                                className: "text-sm text-gray-600 m-0",
                                children: e.description,
                              }),
                            ],
                          }),
                        ],
                      },
                      t
                    )
                  ),
                }),
              n &&
                (0, i.jsx)(o.tq, {
                  modules: e,
                  loop: !1,
                  spaceBetween: 16,
                  slidesPerView: 1,
                  className: "!p-4 !mx-auto !max-w-5xl mt-2 block md:hidden",
                  autoplay: !0,
                  children: t.map((e, t) =>
                    (0, i.jsx)(
                      o.o5,
                      {
                        children: (0, i.jsxs)("div", {
                          className:
                            "bg-white rounded-lg shadow-lg p-6 text-center flex flex-col items-center gap-4 hover:scale-105 transition-all duration-300",
                          children: [
                            (0, i.jsx)(r.default, {
                              unoptimized: !0,
                              src: e.image,
                              alt: e.title,
                              width: 153,
                              height: 134,
                              sizes: "115px",
                              style: {
                                width: "115px",
                                height: "auto",
                                objectFit: "contain",
                              },
                            }),
                            (0, i.jsxs)("div", {
                              children: [
                                (0, i.jsx)("h3", {
                                  className: "text-sm m-0",
                                  children: e.title,
                                }),
                                (0, i.jsx)("p", {
                                  className: "text-sm text-gray-600 m-0",
                                  children: e.description,
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                }),
            ],
          }),
        });
      }
    },
    11135: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return h;
        },
      });
      var i = n(57437),
        a = n(29),
        s = n.n(a),
        r = n(2265),
        l = n(19764),
        o = n(10476),
        c = n(7999),
        d = n(29565);
      function h(e) {
        let { items: t, withNavigation: n = !0, autoplay: a = !1 } = e,
          h = (0, r.useMemo)(() => [o.Rv, o.W_, o.tl, o.pt], []),
          u = (0, r.useRef)(null),
          m = (0, r.useMemo)(() => {
            if (!t || 0 === t.length) return [];
            if (t.length >= 8) return t;
            let e = [];
            for (let n = 0; n < 8; n++) e.push(t[n % t.length]);
            return e;
          }, [t]),
          g = (e) => {
            let t;
            switch (e.templateType) {
              case "free":
              default:
                t = c.WY.free;
                break;
              case "basic":
                t = c.WY.basic;
                break;
              case "premium":
                t = c.WY.premium;
            }
            return { ...e, templateType: t };
          };
        return (0, i.jsxs)("div", {
          className: "jsx-4bdcdae212a5d0b5 top-up",
          children: [
            (0, i.jsx)(l.tq, {
              modules: h,
              slidesPerView: "auto",
              loop: m.length > 1,
              spaceBetween: 16,
              freeMode: !1,
              centeredSlides: !1,
              slideToClickedSlide: !0,
              roundLengths: !0,
              speed: 350,
              navigation: !1,
              pagination: !1,
              watchOverflow: !0,
              autoplay: !!a &&
                m.length > 1 && { delay: 3e3, disableOnInteraction: !1 },
              onInit: (e) => {
                e.slides.forEach((e) => {
                  e.style.width = "210px";
                });
              },
              breakpoints: {
                0: { spaceBetween: 8 },
                640: { spaceBetween: 16 },
                1024: { spaceBetween: 16 },
              },
              onBeforeInit: (e) => {
                u.current = e;
              },
              role: "list",
              "aria-label": "Danh s\xe1ch mẫu thiệp",
              children: m.map((e, t) =>
                (0, i.jsx)(
                  l.o5,
                  {
                    role: "listitem",
                    onMouseEnter: () => {
                      var e;
                      return null === (e = u.current) || void 0 === e
                        ? void 0
                        : e.autoplay.stop();
                    },
                    onMouseLeave: () => {
                      var e;
                      return null === (e = u.current) || void 0 === e
                        ? void 0
                        : e.autoplay.start();
                    },
                    children: (0, i.jsx)("div", {
                      className: "jsx-4bdcdae212a5d0b5 slide-inner",
                      children: (0, i.jsx)(d.Z, {
                        template: g(e),
                        showUseTemplate: !0,
                      }),
                    }),
                  },
                  e.id + t
                )
              ),
            }),
            (0, i.jsx)(s(), {
              id: "4bdcdae212a5d0b5",
              children:
                ".top-up{overflow:hidden}.swiper-slide{overflow:visible;position:relative;z-index:0}.swiper-slide:hover{z-index:99!important}.slide-inner{padding:10px 0}",
            }),
            n &&
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "jsx-4bdcdae212a5d0b5 arrow-left arrow-com left-0",
                    children: (0, i.jsx)("button", {
                      "aria-label": "Trang trước",
                      onClick: () => {
                        var e;
                        return null === (e = u.current) || void 0 === e
                          ? void 0
                          : e.slidePrev();
                      },
                      className:
                        "jsx-4bdcdae212a5d0b5 arrow-btn p-2 rounded-full bg-white shadow-md",
                      children: (0, i.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "jsx-4bdcdae212a5d0b5 h-6 w-6 text-gray-700",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M15 19l-7-7 7-7",
                          className: "jsx-4bdcdae212a5d0b5",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "jsx-4bdcdae212a5d0b5 arrow-com arrow-right right-0",
                    children: (0, i.jsx)("button", {
                      "aria-label": "Trang tiếp",
                      onClick: () => {
                        var e;
                        return null === (e = u.current) || void 0 === e
                          ? void 0
                          : e.slideNext();
                      },
                      className:
                        "jsx-4bdcdae212a5d0b5 arrow-btn p-2 rounded-full bg-white shadow-md",
                      children: (0, i.jsx)("svg", {
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        className: "jsx-4bdcdae212a5d0b5 h-6 w-6 text-gray-700",
                        children: (0, i.jsx)("path", {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M9 5l7 7-7 7",
                          className: "jsx-4bdcdae212a5d0b5",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
          ],
        });
      }
    },
    51098: function (e, t, n) {
      "use strict";
      n.d(t, {
        SmoothScrollProvider: function () {
          return r;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(89096);
      let r = (e) => {
        let {
            children: t,
            lerp: n = 0.1,
            speedMultiplier: r = 1,
            className: l = "",
            disableOnMobile: o = !0,
          } = e,
          c = (0, a.useRef)(null),
          d = (0, a.useRef)(null),
          [h, u] = (0, a.useState)(!1),
          m = (0, a.useCallback)(() => {
            let e = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
              ).matches,
              t = window.innerWidth < 1200,
              n = !e && !(o && t);
            requestAnimationFrame(() => u(n));
          }, [o]);
        return (
          (0, a.useEffect)(
            () => (
              m(),
              window.addEventListener("resize", m),
              () => window.removeEventListener("resize", m)
            ),
            [m]
          ),
          (0, a.useEffect)(() => {
            if (!h) return;
            let e = new s.Z({
              lerp: n,
              duration: 1 / Math.max(r, 0.1),
              smoothWheel: !0,
            });
            c.current = e;
            let t = (n) => {
              e.raf(n), (d.current = requestAnimationFrame(t));
            };
            return (
              (d.current = requestAnimationFrame(t)),
              () => {
                d.current && cancelAnimationFrame(d.current),
                  e.destroy(),
                  (c.current = null);
              }
            );
          }, [n, r, h]),
          (0, a.useEffect)(() => {
            let e = function (t) {
              let n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0;
              if (!t || n > 10) return;
              let i = t.replace("#", ""),
                a = document.getElementById(i);
              if (!a) {
                requestAnimationFrame(() => e(t, n + 1));
                return;
              }
              requestAnimationFrame(() => {
                let e = c.current;
                e
                  ? e.scrollTo(a, { offset: 0 })
                  : a.scrollIntoView({ behavior: "smooth", block: "start" });
              });
            };
            e(window.location.hash);
            let t = () => e(window.location.hash);
            window.addEventListener("hashchange", t);
            let n = (t) => {
              var n;
              let i =
                null === (n = t.target) || void 0 === n
                  ? void 0
                  : n.closest("a");
              if (!i) return;
              let a = i.getAttribute("href");
              if (!a) return;
              let s = a.startsWith("#")
                ? new URL(window.location.href.split("#")[0] + a)
                : (() => {
                    try {
                      return new URL(a, window.location.href);
                    } catch (e) {
                      return null;
                    }
                  })();
              s &&
                s.hash &&
                s.pathname === window.location.pathname &&
                (t.preventDefault(),
                history.pushState
                  ? history.pushState(null, "", s.hash)
                  : (window.location.hash = s.hash),
                e(s.hash));
            };
            return (
              window.addEventListener("click", n),
              () => {
                window.removeEventListener("hashchange", t),
                  window.removeEventListener("click", n);
              }
            );
          }, []),
          (0, i.jsx)("div", { className: l, children: t })
        );
      };
    },
    29565: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return j;
        },
      });
      var i = n(57437),
        a = n(2265),
        s = n(50742),
        r = n(89970),
        l = n(34029),
        o = n(24198),
        c = n(7296),
        d = n(52991),
        h = n(73630),
        u = n(9109),
        m = n(53743),
        g = n(12808),
        p = n(99376),
        v = n(47835),
        x = n.n(v),
        f = n(99718),
        y = n(34577);
      function b(e) {
        var t;
        let { template: n, onClose: v } = e,
          b = (0, p.useRouter)(),
          [w, j] = (0, a.useState)(!1),
          [N, k] = (0, a.useState)(!1),
          { closePanel: C } = (0, d.u)(),
          T = (0, p.usePathname)(),
          S = (0, f.TR)(),
          P = (0, f.Yo)(),
          q = (0, f.aJ)(),
          L = !!(null === (t = S.data) || void 0 === t
            ? void 0
            : t.includes(n.id)),
          E = (0, y.a)("(max-width: 768px)");
        (0, a.useEffect)(() => {
          k(!0);
        }, []);
        let Z = async () => {
            try {
              j(!0),
                T.includes(n.id)
                  ? (l.ZP.info("Hiện tại bạn đang chỉnh sửa mẫu thiệp n\xe0y!"),
                    j(!1))
                  : (l.ZP.loading({
                      key: "using-template",
                      type: "loading",
                      content: "Đang chuyển hướng...",
                      duration: 0,
                    }),
                    setTimeout(() => {
                      l.ZP.destroy("using-template"),
                        b.replace("/design-template/".concat(n.id)),
                        j(!1),
                        C();
                    }, 1e3));
            } catch (e) {
              console.log(e), j(!1);
            }
          },
          M =
            '<p class="m-0 text-sm text-gray-500"><strong>Thiết kế:</strong> Đa dạng phong c\xe1ch, chuẩn thẩm mỹ cao.</p>\n<p class="m-0 text-sm mt-2 text-gray-500"><strong>Thao t\xe1c:</strong> Chỉnh sửa trực quan, kh\xf4ng cần kinh nghiệm thiết kế.</p>\n<p class="m-0 text-sm mt-2 text-gray-500"><strong>Chia sẻ:</strong> Đa nền tảng (Mạng x\xe3 hội, tin nhắn) chỉ với một đường link.</p>\n<p class="m-0 text-sm mt-2 text-gray-500"><strong>Tương th\xedch:</strong> Hiển thị ho\xe0n hảo 100% tr\xean mọi thiết bị di động.</p>',
          I = (0, i.jsx)("div", {
            className: "relative",
            children: (0, i.jsx)("div", {
              className: "max-w-5xl p-0 overflow-hidden",
              children: (0, i.jsxs)("div", {
                className: "flex flex-col md:flex-row ".concat(
                  E ? "" : "h-[75vh]"
                ),
                children: [
                  (0, i.jsxs)("div", {
                    className:
                      "w-full md:w-1/2 bg-base-200 flex items-center justify-center ".concat(
                        E ? "h-[50vh] flex-shrink-0" : "h-full",
                        " p-4 md:p-6 mt-5 md:mt-0"
                      ),
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "text-pink-400 font-semibold mb-2 flex items-center justify-between w-full absolute top-2 left-1 py-0.5 z-20",
                        children: (0, i.jsx)(r.Z, {
                          title: L
                            ? "Đ\xe3 trong y\xeau th\xedch"
                            : "Th\xeam v\xe0o y\xeau th\xedch",
                          children: (0, i.jsx)("button", {
                            className:
                              "ml-2 flex items-center justify-center text-pink-500",
                            "aria-label": "Th\xeam v\xe0o y\xeau th\xedch",
                            disabled: P.isPending || q.isPending,
                            onClick: () => {
                              L
                                ? q.mutate(
                                    { templateId: n.id },
                                    {
                                      onSuccess: () =>
                                        l.ZP.success(
                                          "Đ\xe3 bỏ khỏi y\xeau th\xedch"
                                        ),
                                      onError: (e) => {
                                        let t =
                                          (null == e ? void 0 : e.message) ||
                                          "Kh\xf4ng thể bỏ khỏi y\xeau th\xedch";
                                        l.ZP.error(t);
                                      },
                                    }
                                  )
                                : P.mutate(
                                    { templateId: n.id },
                                    {
                                      onSuccess: () =>
                                        l.ZP.success(
                                          "Đ\xe3 th\xeam v\xe0o y\xeau th\xedch"
                                        ),
                                      onError: (e) => {
                                        let t =
                                          (null == e ? void 0 : e.message) ||
                                          "Kh\xf4ng thể th\xeam v\xe0o y\xeau th\xedch";
                                        l.ZP.error(t);
                                      },
                                    }
                                  );
                            },
                            children: (0, i.jsx)(o.Z, {
                              weight: L ? "BoldDuotone" : "LineDuotone",
                              size: 25,
                              className: "text-[#ff4d6d]",
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "absolute top-2 right-2 z-20",
                        children: (0, i.jsxs)("div", {
                          className: "flex flex-col gap-1 items-end",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "text-white rounded-full text-xs font-medium flex items-center px-2 py-1",
                              style: { background: "rgb(255, 77, 109)" },
                              children: [
                                (0, i.jsx)(o.Z, {
                                  weight: "LineDuotone",
                                  size: 14,
                                  className: "mr-1",
                                }),
                                n.likeCount,
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "bg-blue-500 text-white rounded-full text-xs font-medium flex items-center px-2 py-1",
                              children: [
                                (0, i.jsx)(c.Z, {
                                  className: "mr-1 w-[14px] h-[14px]",
                                }),
                                n.viewCount,
                              ],
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className:
                          "iframe-preview bg-white rounded-lg overflow-hidden shadow-md w-full relative",
                        style: {
                          width: "90%",
                          height: E ? "50vh" : "70vh",
                          overflow: "hidden",
                        },
                        children: (0, i.jsx)("iframe", {
                          src: ""
                            .concat("https://zenlove.me", "/template-preview/")
                            .concat(n.slug || n.id),
                          title: "Xem trước mẫu thiệp",
                          allowFullScreen: !0,
                          style: {
                            width: "166.67%",
                            height: "166.67%",
                            transform: "scale(0.6)",
                            transformOrigin: "left top",
                            border: "none",
                            visibility: "visible",
                          },
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "w-full md:w-1/2 p-4 pb-0 md:p-8 flex flex-col "
                      .concat(E ? "" : "h-full", " ")
                      .concat(E ? "" : "overflow-y-auto", " ")
                      .concat(
                        E ? "" : "justify-between",
                        " border-l-0 md:border-l"
                      ),
                    children: [
                      (0, i.jsx)("div", {
                        className: "mb-2 md:mb-4",
                        children: (0, i.jsx)("div", {
                          className: "template-description",
                          dangerouslySetInnerHTML: {
                            __html: x().sanitize(
                              (null == n ? void 0 : n.description) || M
                            ),
                          },
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className:
                          "hidden md:flex mb-4 justify-center flex-row gap-2",
                        children: [
                          (0, i.jsx)(r.Z, {
                            title: "Xem trực tiếp",
                            children: (0, i.jsx)(s.ZP, {
                              onClick: () => {
                                window.open(
                                  ""
                                    .concat(
                                      "https://zenlove.me",
                                      "/template-preview/"
                                    )
                                    .concat(n.slug || n.id),
                                  "_blank"
                                );
                              },
                              children: "Xem trực tiếp",
                            }),
                          }),
                          (0, i.jsx)(r.Z, {
                            title: "Sử dụng",
                            children: (0, i.jsx)(s.ZP, {
                              type: "primary",
                              onClick: Z,
                              loading: w,
                              children: w ? "Đang sử dụng..." : "Sử dụng",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("div", {
                        className: "hidden md:flex flex-col items-center",
                        children: [
                          (0, i.jsx)(u.Z, {
                            errorLevel: "H",
                            value: ""
                              .concat(
                                "https://zenlove.me",
                                "/template-preview/"
                              )
                              .concat(n.slug || n.id),
                            icon: (0, h.ud)("assets/logo.png"),
                          }),
                          (0, i.jsx)("p", {
                            className: "text-gray-500 text-sm my-2",
                            children:
                              "Qu\xe9t m\xe3 QR để xem tr\xean điện thoại",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          }),
          z = () => {
            k(!1),
              setTimeout(() => {
                v();
              }, 300);
          },
          D = (0, i.jsxs)("div", {
            className: "relative h-full flex flex-col overflow-hidden",
            children: [
              (0, i.jsxs)("div", {
                className:
                  "w-full bg-base-200 flex items-center justify-center h-[55vh] flex-shrink-0 p-4 relative mt-2 md:mt-0",
                children: [
                  (0, i.jsx)("div", {
                    className:
                      "text-pink-400 font-semibold mb-2 flex items-center justify-between w-full absolute top-2 left-1 py-0.5 z-20",
                    children: (0, i.jsx)(r.Z, {
                      title: L
                        ? "Đ\xe3 trong y\xeau th\xedch"
                        : "Th\xeam v\xe0o y\xeau th\xedch",
                      children: (0, i.jsx)("button", {
                        className:
                          "ml-2 flex items-center justify-center text-pink-500",
                        "aria-label": "Th\xeam v\xe0o y\xeau th\xedch",
                        disabled: P.isPending || q.isPending,
                        onClick: () => {
                          L
                            ? q.mutate(
                                { templateId: n.id },
                                {
                                  onSuccess: () =>
                                    l.ZP.success(
                                      "Đ\xe3 bỏ khỏi y\xeau th\xedch"
                                    ),
                                  onError: (e) => {
                                    let t =
                                      (null == e ? void 0 : e.message) ||
                                      "Kh\xf4ng thể bỏ khỏi y\xeau th\xedch";
                                    l.ZP.error(t);
                                  },
                                }
                              )
                            : P.mutate(
                                { templateId: n.id },
                                {
                                  onSuccess: () =>
                                    l.ZP.success(
                                      "Đ\xe3 th\xeam v\xe0o y\xeau th\xedch"
                                    ),
                                  onError: (e) => {
                                    let t =
                                      (null == e ? void 0 : e.message) ||
                                      "Kh\xf4ng thể th\xeam v\xe0o y\xeau th\xedch";
                                    l.ZP.error(t);
                                  },
                                }
                              );
                        },
                        children: (0, i.jsx)(o.Z, {
                          weight: L ? "BoldDuotone" : "LineDuotone",
                          size: 25,
                          className: "text-[#ff4d6d]",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "absolute top-2 right-2 z-20",
                    children: (0, i.jsxs)("div", {
                      className: "flex flex-col gap-1 items-end",
                      children: [
                        (0, i.jsxs)("div", {
                          className:
                            "text-white rounded-full text-xs font-medium flex items-center px-2 py-1",
                          style: { background: "rgb(255, 77, 109)" },
                          children: [
                            (0, i.jsx)(o.Z, {
                              weight: "LineDuotone",
                              size: 14,
                              className: "mr-1",
                            }),
                            n.likeCount,
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className:
                            "bg-blue-500 text-white rounded-full text-xs font-medium flex items-center px-2 py-1",
                          children: [
                            (0, i.jsx)(c.Z, {
                              className: "mr-1 w-[14px] h-[14px]",
                            }),
                            n.viewCount,
                          ],
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className:
                      "iframe-preview bg-white rounded-lg overflow-hidden shadow-md w-full relative",
                    style: {
                      width: "60vw",
                      height: "55vh",
                      overflow: "hidden",
                    },
                    children: (0, i.jsx)("iframe", {
                      src: ""
                        .concat("https://zenlove.me", "/template-preview/")
                        .concat(n.slug || n.id),
                      title: "Xem trước mẫu thiệp",
                      allowFullScreen: !0,
                      style: {
                        width: "166.67%",
                        height: "166.67%",
                        transform: "scale(0.6)",
                        transformOrigin: "left top",
                        border: "none",
                        visibility: "visible",
                      },
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "flex-1 overflow-y-auto min-h-0 p-4",
                style: { paddingBottom: "80px" },
                children: (0, i.jsx)("div", {
                  className: "template-description",
                  dangerouslySetInnerHTML: {
                    __html: x().sanitize(
                      (null == n ? void 0 : n.description) || M
                    ),
                  },
                }),
              }),
              (0, i.jsx)("div", {
                className:
                  "absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 z-50 shadow-lg",
                children: (0, i.jsxs)("div", {
                  className: "flex gap-2",
                  children: [
                    (0, i.jsx)(s.ZP, {
                      className: "flex-1",
                      onClick: () => {
                        window.open(
                          ""
                            .concat("https://zenlove.me", "/template-preview/")
                            .concat(n.slug || n.id),
                          "_blank"
                        );
                      },
                      children: "Xem trực tiếp",
                    }),
                    (0, i.jsx)(s.ZP, {
                      type: "primary",
                      className: "flex-1",
                      onClick: Z,
                      loading: w,
                      children: w ? "Đang sử dụng..." : "Sử dụng",
                    }),
                  ],
                }),
              }),
            ],
          });
        return E
          ? (0, i.jsx)(g.GI, {
              visible: N,
              onClose: z,
              onMaskClick: z,
              position: "bottom",
              showCloseButton: !0,
              bodyStyle: {
                height: "85vh",
                overflow: "hidden",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
                padding: 0,
              },
              className: "!z-[9999999999]",
              children: D,
            })
          : (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(m.default, {
                open: N,
                destroyOnHidden: !0,
                onCancel: z,
                closable: !1,
                footer: null,
                width: 800,
                centered: !0,
                styles: { container: { padding: 0 } },
                children: I,
              }),
            });
      }
      var w = n(33145);
      function j(e) {
        var t;
        let { template: n, showUseTemplate: d = !0 } = e,
          u = (0, a.useRef)(null),
          m = (0, a.useRef)(null),
          [g, p] = (0, a.useState)(336),
          [v, x] = (0, a.useState)(0),
          [y, j] = (0, a.useState)(!1),
          N = (0, f.TR)(),
          k = (0, f.Yo)(),
          C = (0, f.aJ)(),
          T = !!(null === (t = N.data) || void 0 === t
            ? void 0
            : t.includes(n.id));
        (0, a.useEffect)(() => {
          let e = u.current;
          if (!e) return;
          let t = null,
            n = () => {
              let e = u.current;
              if (!e) return;
              let t = e.getBoundingClientRect().width;
              if (!t) return;
              let n = Math.floor(1.47 * t);
              p((e) => (e === n ? e : n));
            },
            i = () => {
              t && cancelAnimationFrame(t), (t = requestAnimationFrame(n));
            };
          if ((i(), "undefined" != typeof ResizeObserver)) {
            let n = new ResizeObserver(i);
            return (
              n.observe(e),
              () => {
                n.disconnect(), t && cancelAnimationFrame(t);
              }
            );
          }
          return (
            window.addEventListener("resize", i),
            () => {
              window.removeEventListener("resize", i),
                t && cancelAnimationFrame(t);
            }
          );
        }, []),
          (0, a.useEffect)(() => {
            let e = m.current;
            e && (e.complete ? S(e) : (e.onload = () => S(e)));
          }, [n.longThumbnailKey, g]);
        let S = (e) => {
            if (!e.naturalWidth || !e.naturalHeight) return;
            let t = e.naturalWidth / e.naturalHeight;
            x(Math.max(0, (e.clientWidth || e.width) / t - g));
          },
          P = {
            type: n.templateType
              ? String(n.templateType).toLowerCase()
              : "free",
            text: n.templateType
              ? String(n.templateType).toUpperCase()
              : "FREE",
          },
          q = n.longThumbnailKey
            ? (0, h.ud)(n.longThumbnailKey)
            : (0, h.ud)("/assets/no_preview_1.png");
        return (0, i.jsxs)("div", {
          style: {
            "--image-scroll-height": "".concat(v, "px"),
            "--scroll-duration": "".concat(v / 120, "s"),
            "--container-height": "".concat(g, "px"),
          },
          className: "infrastructure",
          children: [
            (0, i.jsxs)("div", {
              style: { width: "100%", borderRadius: 10 },
              className: "invitation finger transition",
              children: [
                (0, i.jsxs)("div", {
                  ref: u,
                  className: "image",
                  children: [
                    P &&
                      (0, i.jsx)("div", {
                        className: "badge badge-".concat(
                          P.type,
                          " badge-right"
                        ),
                        children: P.text,
                      }),
                    (0, i.jsx)("div", {
                      className: "el-image elImage",
                      children: (0, i.jsx)(w.default, {
                        ref: m,
                        src: q,
                        alt: "Thiệp cưới online miễn ph\xed - ".concat(
                          n.name,
                          " | @quyctd"
                        ),
                        title: "Xem v\xe0 t\xf9y chỉnh ".concat(
                          n.name,
                          " miễn ph\xed"
                        ),
                        className: "el-image__inner",
                        width: 100,
                        height: 100,
                        loading: "lazy",
                        decoding: "async",
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  children: (0, i.jsxs)("div", {
                    className:
                      "absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100",
                    children: [
                      (0, i.jsx)("div", {
                        className:
                          "absolute inset-0 flex items-end justify-center pb-4",
                        children:
                          d &&
                          (0, i.jsx)(s.ZP, {
                            onClick: () => j(!0),
                            type: "primary",
                            className: "!rounded-full !bg-primary/80 !text-sm",
                            id: "view-template-btn",
                            children: "Xem mẫu",
                          }),
                      }),
                      (0, i.jsx)("div", {
                        className: "absolute top-1 left-1 py-0.5",
                        children: (0, i.jsx)(r.Z, {
                          title: T
                            ? "Đ\xe3 trong y\xeau th\xedch"
                            : "Th\xeam v\xe0o y\xeau th\xedch",
                          children: (0, i.jsx)("button", {
                            id: "favorite-template-btn",
                            className:
                              "ml-2 flex items-center justify-center text-pink-500 z-10",
                            "aria-label": T
                              ? "Bỏ y\xeau th\xedch"
                              : "Th\xeam v\xe0o y\xeau th\xedch",
                            "aria-pressed": T,
                            title: T
                              ? "Đ\xe3 trong y\xeau th\xedch"
                              : "Th\xeam v\xe0o y\xeau th\xedch",
                            disabled: k.isPending || C.isPending,
                            onClick: () => {
                              T
                                ? C.mutate(
                                    { templateId: n.id },
                                    {
                                      onSuccess: () =>
                                        l.ZP.success(
                                          "Đ\xe3 bỏ khỏi y\xeau th\xedch"
                                        ),
                                      onError: (e) => {
                                        let t =
                                          (null == e ? void 0 : e.message) ||
                                          "Kh\xf4ng thể bỏ khỏi y\xeau th\xedch";
                                        l.ZP.error(t);
                                      },
                                    }
                                  )
                                : k.mutate(
                                    { templateId: n.id },
                                    {
                                      onSuccess: () =>
                                        l.ZP.success(
                                          "Đ\xe3 th\xeam v\xe0o y\xeau th\xedch"
                                        ),
                                      onError: (e) => {
                                        let t =
                                          (null == e ? void 0 : e.message) ||
                                          "Kh\xf4ng thể th\xeam v\xe0o y\xeau th\xedch";
                                        l.ZP.error(t);
                                      },
                                    }
                                  );
                            },
                            children: (0, i.jsx)(o.Z, {
                              weight: T ? "BoldDuotone" : "LineDuotone",
                              size: 25,
                              className: "text-[#ff4d6d]",
                              "aria-hidden": !0,
                            }),
                          }),
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "absolute top-2 right-2",
                        children: (0, i.jsxs)("div", {
                          className: "flex flex-col gap-1 items-end",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "text-white rounded-full text-xs font-medium flex items-center px-2 py-1 bg-[#ff4d6d]",
                              children: [
                                (0, i.jsx)(o.Z, {
                                  weight: "LineDuotone",
                                  size: 14,
                                  className: "mr-1",
                                  "aria-hidden": !0,
                                }),
                                n.likeCount,
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className:
                                "bg-blue-500 text-white rounded-full text-xs font-medium flex items-center px-2 py-1",
                              children: [
                                (0, i.jsx)(c.Z, {
                                  weight: "LineDuotone",
                                  size: 14,
                                  className: "mr-1",
                                  "aria-hidden": !0,
                                }),
                                n.viewCount,
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
            y && (0, i.jsx)(b, { template: n, onClose: () => j(!1) }),
          ],
        });
      }
    },
    11840: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = n(57437),
        a = n(27648);
      n(2265);
      var s = n(89689);
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
    89689: function (e, t, n) {
      "use strict";
      n.d(t, {
        KZ: function () {
          return i;
        },
        U: function () {
          return a;
        },
      });
      let i = "1.26.3a6",
        a = (function (e) {
          let t = [];
          for (let i of e
            .trim()
            .split(/\n\s*\n/)
            .filter((e) => e.trim())) {
            let e = i.split("\n").map((e) => e.trim()),
              a = { changes: [] };
            for (let t of e)
              if (t.startsWith("version:"))
                a.version = t.replace("version:", "").trim();
              else if (t.startsWith("date:")) {
                let e = t.replace("date:", "").trim(),
                  [n, i, s] = e.split("-");
                n && i && s
                  ? (a.date = "".concat(s, "-").concat(i, "-").concat(n))
                  : (a.date = e);
              } else if (t.startsWith("+")) {
                let e = t.substring(1).trim(),
                  i = e.indexOf(":");
                if (i > 0) {
                  let t = e.substring(0, i).trim(),
                    s = e
                      .substring(i + 1)
                      .trim()
                      .replace(/\//g, "\n");
                  if ("feature" === t || "improvement" === t || "fix" === t) {
                    var n;
                    null === (n = a.changes) ||
                      void 0 === n ||
                      n.push({ type: t, description: s });
                  }
                }
              }
            a.version &&
              a.date &&
              a.changes &&
              t.push({ version: a.version, date: a.date, changes: a.changes });
          }
          return t;
        })(
          "\nversion:1.26.3a6\ndate:06-03-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug v3a3.\n\nversion:1.26.3a3\ndate:03-03-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi v1a30,v1a27, v2a16.\n\nversion:1.26.2a23\ndate:23-02-2026\nchanges:\n+ feature: Th\xeam t\xednh năng x\xf3a nền ảnh tự động.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.2a22\ndate:22-02-2026\nchanges:\n+ improvement: Cải thiện giao diện/Hỗ trợ ng\xf4n ngữ EN-VI cho RSVP v\xe0 Countdown.\n+ fix: Sửa lỗi bug v1a16/Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n\nversion:1.26.2a16\ndate:16-02-2026\nchanges:\n+ feature: Th\xeam t\xednh năng quản l\xfd nhạc ri\xeang của bạn.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.2a5\ndate:05-02-2026\nchanges:\n+ fix: Sửa lỗi bug v1a30,v1a27/Sửa lỗi k\xe9o chọn nhiều phần tử ở phi\xean bản PC/Loại bỏ Tour/Sửa lỗi tải ảnh l\xean hệ thống/Sửa lỗi kiểm tra ảnh trước khi x\xf3a trong tr\xecnh thiết kế.\n+ feature: Th\xeam t\xednh năng chỉnh thứ tự lớp/Căn chỉnh phần tử h\xe0ng loạt/Th\xeam t\xednh năng ph\xf3ng to-thu nhỏ/Ưu đ\xe3i tết 2026.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a30\ndate:30-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug v1a27.\n\nversion:1.26.1a27\ndate:27-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Cập nhật biểu ngữ x\xe1c nhận tham dự, thay đổi cơ chế thống k\xea RSVP/Fix bug v1a24,v1a8.\n\nversion:1.26.1a24\ndate:24-01-2026\nchanges:\n+ feature: Th\xeam th\xf4ng b\xe1o.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a13\ndate:13-01-2026\nchanges:\n+ feature: Th\xeam thư viện thiết kế sẵn.\n+ improvement: Cải thiện giao diện.\n\nversion:1.26.1a12\ndate:12-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Fix lỗi chọn nhiều phần tử khi k\xe9o thả phi\xean bản PC/Sửa lỗi sao ch\xe9p phần tử/Sửa lỗi th\xeam phần tử.\n\nversion:1.26.1a8\ndate:08-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n\nversion:1.26.1a1\ndate:06-01-2026\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.26a1\ndate:26-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng AI Text Editor.\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.24a2\ndate:24-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi cache.\n\nversion:1.12.23a1\ndate:23-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng n\xe2ng cấp giới hạn v\xe0 mua add-on.\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.21a1\ndate:21-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.12.17a1\ndate:17-12-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi feedback.\n\nversion:1.12.14a3\ndate:14-12-2025\nchanges:\n+ improvement: Cải thiện hiệu năng/Cải thiện giao diện.\n\nversion:1.12.14a1\ndate:14-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng tạo chữ k\xfd v\xe0o thiệp.\n+ fix: Sửa lỗi xem trước tr\xean tr\xecnh thiết kế/Sửa lỗi bug kh\xf4i phục bản sao lưu từ template.\n+ improvement: Cải thiện hiệu năng.\n\nversion:1.12.11a2\ndate:11-12-2025\nchanges:\n+ improvement: Cải thiện hiệu năng.\n+ fix: Fix lỗi cuộn trang tr\xean điện thoại khi xem thiệp/Fix lỗi trang chi tiết thiệp.\n\nversion:1.12.9a5\ndate:09-12-2025\nchanges:\n+ fix: Sửa lỗi gửi form x\xe1c nhận tham dự/Sửa lỗi lịch hiển thị.\n\nversion:1.12.9a4\ndate:09-12-2025\nchanges:\n+ fix: Fix lỗi feedback.\n\nversion:1.12.5a2\ndate:06-12-2025\nchanges:\n+ fix: Sửa lỗi hiển thị danh s\xe1ch lời ch\xfac/Th\xeam bộ lọc từ ngữ xấu.\n\nversion:1.12.5a1\ndate:05-12-2025\nchanges:\n+ improvement: N\xe2ng cấp hạ tầng CDN.\n+ fix: Sửa lỗi khi xem thiệp trong thư viện thiệp mẫu.\n\nversion:1.12.4a2\ndate:04-12-2025\nchanges:\n+ feature: Th\xeam t\xednh năng quản l\xfd ng\xe2n h\xe0ng/Th\xeam t\xednh năng y\xeau cầu r\xfat tiền từ qu\xe0 tặng/Lịch sử nhận qu\xe0 tặng.\n+ improvement: Tối ưu hiển thị danh s\xe1ch thiệp/Tối ưu trang xem thiệp.\n\nversion:1.12.2a4\ndate:02-12-2025\nchanges:\n+ feature: Th\xeam hiệu ứng mở m\xe0n mới/Th\xeam mẫu cắt ảnh mới/Sửa lỗi tải nhạc. \n\nversion:1.12.2a2\ndate:02-12-2025\nchanges:\n+ improvement: Cập nhật wallet/N\xe2ng cấp hạ tầng CDN.\n\nversion:1.11.29b3\ndate:29-11-2025\nchanges:\n+ improvement: N\xe2ng cấp hạ tầng CDN.\n\nversion:1.11.28b2\ndate:28-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi header.\n\nversion:1.11.28b1\ndate:28-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n\nversion:1.11.27b2\ndate:27-11-2025\nchanges:\n+ fix: Sửa lỗi header.\n\nversion:1.11.27b1\ndate:27-11-2025\nchanges:\n+ improvement: Cải thiện giao diện.\n+ fix: Sửa lỗi 24b1.\n\nversion:1.11.24b1\ndate:24-11-2025\nchanges:\n+ feature: Th\xeam t\xednh năng tặng qu\xe0.\n\nversion:1.11.23b1\ndate:23-11-2025\nchanges:\n+ fix: Sửa lại lỗi tự động sao lưu thiệp.\n+ feature: Th\xeam t\xednh năng \xe1p dụng m\xe3 giảm gi\xe1 khi n\xe2ng cấp g\xf3i/Th\xeam t\xednh năng quản l\xfd số dư Points v\xe0 Credits (AI Features).\n\nversion:1.11.22b1\ndate:22-11-2025\nchanges:\n+ feature: Th\xeam tọa độ bản đồ, tự động lấy tọa độ từ địa chỉ/Th\xeam plugin lời nhắc th\xeam v\xe0o lịch.\n+ fix: Sửa lỗi xuất bản thiệp.\n\nversion:1.11.21b3\ndate:21-11-2025\nchanges:\n+ fix: Sửa lỗi hiển thị danh s\xe1ch b\xe0i h\xe1t/Sửa lỗi th\xf4ng b\xe1o lặp bản sao lưu.\n+ improvement: Cải thiện hiệu suất.\n\nversion:1.11.21b2\ndate:21-11-2025\nchanges:\n+ fix: Sửa lỗi khi k\xe9o thả tự do từ thanh c\xf4ng cụ tr\xean phi\xean bản PC\n\nversion:1.11.21b1\ndate:21-11-2025\nchanges:\n+ feature: Th\xeam t\xednh năng auto-save v\xe0 sao lưu tự động/Th\xeam t\xednh năng chọn nhiều node c\xf9ng l\xfac (bao gồm cả giữ chuột b\xf4i đen)/Th\xeam t\xednh năng k\xe9o thả tự do từ thanh c\xf4ng cụ tr\xean PC/Th\xeam t\xednh năng xem changelog\n+ improvement: Cải thiện hiệu suất render cho c\xe1c node phức tạp\n+ fix: Sửa lỗi kh\xf4ng lưu được thiệp/Sửa lỗi hiển thị chưa đ\xfang khi chọn nhiều node c\xf9ng l\xfac\n\n"
        );
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
          return u;
        },
        MT: function () {
          return g;
        },
        W_: function () {
          return m;
        },
        b: function () {
          return d;
        },
        nM: function () {
          return h;
        },
        xe: function () {
          return l;
        },
      });
      var i = n(71632),
        a = n(29827),
        s = n(21770);
      let r = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function l(e) {
        var t;
        return (0, i.a)({
          queryKey: ["addons", "user-limits"],
          queryFn: async () => (await r("/v1/addons/user/limit")).data,
          staleTime: 6e4,
          enabled:
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
          retry: 2,
        });
      }
      function o(e) {
        var t, n;
        let a = l({
          enabled:
            null === (t = null == e ? void 0 : e.enabled) || void 0 === t || t,
        });
        return (0, i.a)({
          queryKey: ["addons", "user-usage"],
          queryFn: async () => (await r("/v1/addons/user/usage")).data,
          staleTime: 6e4,
          enabled:
            (null === (n = null == e ? void 0 : e.enabled) ||
              void 0 === n ||
              n) &&
            "success" === a.status,
          retry: 2,
        });
      }
      function c() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, i.a)({
          queryKey: ["addons", "products", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.category && t.append("category", e.category),
              e.page && t.append("page", e.page.toString()),
              e.limit && t.append("limit", e.limit.toString());
            let n = t.toString();
            return (
              await r("/v1/addons/products".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          retry: 2,
        });
      }
      function d() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await r("/v1/addons/purchase", {
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
      function h() {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, i.a)({
          queryKey: ["admin-addons", e],
          queryFn: async () => {
            let t = new URLSearchParams();
            e.category && t.append("category", e.category),
              void 0 !== e.isActive &&
                t.append("isActive", e.isActive.toString());
            let n = t.toString();
            return (await r("/v1/admin/addons".concat(n ? "?".concat(n) : "")))
              .data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
          retry: 2,
        });
      }
      function u() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await r("/v1/admin/addons", {
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
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let { id: t, data: n } = e;
            return (
              await r("/v1/admin/addons/".concat(t), {
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
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) => (
            await r("/v1/admin/addons/".concat(e), { method: "DELETE" }), e
          ),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["admin-addons"] }),
              e.invalidateQueries({ queryKey: ["addons", "products"] });
          },
        });
      }
    },
    50828: function (e, t, n) {
      "use strict";
      n.d(t, {
        H4: function () {
          return h;
        },
        Io: function () {
          return d;
        },
        Pi: function () {
          return o;
        },
        hU: function () {
          return u;
        },
        mr: function () {
          return c;
        },
      });
      var i = n(71632),
        a = n(29827),
        s = n(21770),
        r = n(80605);
      let l = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function o() {
        let e =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          { status: t } = (0, r.useSession)();
        return (0, i.a)({
          queryKey: ["me"],
          queryFn: async () => (await l("/v1/users/me")).data,
          enabled: e && "authenticated" === t,
          retry: (e, t) =>
            !(t instanceof Error && t.message.includes("Unauthorized")) &&
            e < 3,
          staleTime: 3e5,
        });
      }
      function c() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/auth/register", {
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
      function d() {
        let { update: e } = (0, r.useSession)(),
          t = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            (
              await l("/v1/users/me", {
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
      function h() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            await l("/v1/auth/resend-verification", {
              method: "POST",
              body: JSON.stringify({ email: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
      function u() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) =>
            await l("/v1/auth/verify-email", {
              method: "POST",
              body: JSON.stringify({ token: e }),
            }),
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["me"] });
          },
        });
      }
    },
    71298: function (e, t, n) {
      "use strict";
      var i = n(2265);
      t.ZP = () => {
        let [e, t] = (0, i.useState)({
          isMobile: !1,
          isTablet: !1,
          isDesktop: !1,
          isIOS: !1,
          isAndroid: !1,
          isWindows: !1,
          isMacOS: !1,
          isLinux: !1,
          isSafari: !1,
          isChrome: !1,
          isFirefox: !1,
          isEdge: !1,
          isOpera: !1,
          screenWidth: 0,
          screenHeight: 0,
          viewportWidth: 0,
          viewportHeight: 0,
          orientation: "portrait",
          isTouchDevice: !1,
          devicePixelRatio: 1,
          userAgent: "",
          platform: "",
          language: "",
          onLine: !0,
          cookieEnabled: !1,
        });
        return (
          (0, i.useEffect)(() => {
            let e = () => {
              var e;
              let n = navigator.userAgent.toLowerCase(),
                i =
                  (null === (e = navigator.platform) || void 0 === e
                    ? void 0
                    : e.toLowerCase()) || "",
                a = window.screen.width,
                s = window.screen.height,
                r = window.innerWidth,
                l = window.innerHeight,
                o =
                  /iphone|ipad|ipod/.test(n) ||
                  ("macintel" === i && navigator.maxTouchPoints > 1),
                c = /android/.test(n),
                d = /win/.test(i),
                h = /mac/.test(i) && !o,
                u = /linux/.test(i),
                m = /safari/.test(n) && !/chrome/.test(n),
                g = /chrome/.test(n) && !/edge/.test(n) && !/opr/.test(n),
                p = /firefox/.test(n),
                v = /edg/.test(n),
                x = /opr/.test(n) || /opera/.test(n),
                f =
                  "ontouchstart" in window ||
                  navigator.maxTouchPoints > 0 ||
                  navigator.msMaxTouchPoints > 0,
                y = window.devicePixelRatio || 1,
                b = navigator.onLine,
                w = navigator.cookieEnabled,
                j = navigator.language || navigator.userLanguage;
              t({
                isMobile: r <= 768,
                isTablet: r > 768 && r <= 1024,
                isDesktop: r > 1024,
                isIOS: o,
                isAndroid: c,
                isWindows: d,
                isMacOS: h,
                isLinux: u,
                isSafari: m,
                isChrome: g,
                isFirefox: p,
                isEdge: v,
                isOpera: x,
                screenWidth: a,
                screenHeight: s,
                viewportWidth: r,
                viewportHeight: l,
                orientation: r > l ? "landscape" : "portrait",
                isTouchDevice: f,
                devicePixelRatio: y,
                userAgent: navigator.userAgent,
                platform: navigator.platform || "",
                language: j,
                onLine: b,
                cookieEnabled: w,
              });
            };
            e();
            let n = () => {
                e();
              },
              i = () => {
                e();
              },
              a = () => {
                e();
              };
            return (
              window.addEventListener("resize", n),
              window.addEventListener("orientationchange", i),
              window.addEventListener("online", a),
              window.addEventListener("offline", a),
              () => {
                window.removeEventListener("resize", n),
                  window.removeEventListener("orientationchange", i),
                  window.removeEventListener("online", a),
                  window.removeEventListener("offline", a);
              }
            );
          }, []),
          e
        );
      };
    },
    34577: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return a;
        },
      });
      var i = n(2265);
      function a(e) {
        let [t, n] = i.useState(!1);
        return (
          i.useEffect(() => {
            function t(e) {
              n(e.matches);
            }
            let i = matchMedia(e);
            return (
              i.addEventListener("change", t),
              n(i.matches),
              () => i.removeEventListener("change", t)
            );
          }, [e]),
          t
        );
      }
    },
    52991: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return a;
        },
      });
      var i = n(54030);
      let a = () => {
        let e = (0, i.SE)();
        return {
          activePanel: e.activePanel,
          panelModes: e.panelModes,
          openPanel: e.openPanel,
          closePanel: e.closePanel,
          closeAndResetPanel: e.closeAndResetPanel,
          resetPanelMode: e.resetPanelMode,
          togglePanel: e.togglePanel,
          isPanelActive: e.isPanelActive,
          getPanelMode: e.getPanelMode,
          isTextActive: () => e.isPanelActive("text"),
          isImageActive: () => e.isPanelActive("image"),
          isBackgroundActive: () => e.isPanelActive("background"),
          isMusicActive: () => e.isPanelActive("music"),
          isStockActive: () => e.isPanelActive("stock"),
          isUtilityActive: () => e.isPanelActive("utility"),
          isAnimationActive: () => e.isPanelActive("animation"),
          getImageMode: () => e.getPanelMode("image"),
          getStockMode: () => e.getPanelMode("stock"),
        };
      };
    },
    99718: function (e, t, n) {
      "use strict";
      n.d(t, {
        MK: function () {
          return c;
        },
        TR: function () {
          return o;
        },
        Yo: function () {
          return d;
        },
        aJ: function () {
          return h;
        },
      });
      var i = n(71632),
        a = n(29827),
        s = n(21770),
        r = n(80605);
      let l = (0, n(33818).g)("https://www.quyctd.dev/wedding/api");
      function o(e) {
        var t;
        let { status: n } = (0, r.useSession)();
        return (0, i.a)({
          queryKey: ["favorite-template-ids"],
          queryFn: async () =>
            (await l("/v1/users/favorites/templates/ids")).data,
          staleTime: 3e5,
          gcTime: 6e5,
          enabled:
            (null === (t = null == e ? void 0 : e.enabled) ||
              void 0 === t ||
              t) &&
            "authenticated" === n,
          initialData: null == e ? void 0 : e.initialData,
          refetchOnMount: !1,
          retry: (e, t) =>
            !(t instanceof Error && t.message.includes("Unauthorized")) &&
            e < 3,
        });
      }
      function c(e) {
        var t;
        let { status: n } = (0, r.useSession)();
        return (0, i.a)({
          queryKey: ["favorite-templates"],
          queryFn: async () => (await l("/v1/users/favorites/templates")).data,
          staleTime: 3e5,
          gcTime: 6e5,
          enabled:
            (null === (t = null == e ? void 0 : e.enabled) ||
              void 0 === t ||
              t) &&
            "authenticated" === n,
          initialData: null == e ? void 0 : e.initialData,
          refetchOnMount: !1,
          retry: (e, t) =>
            !(t instanceof Error && t.message.includes("Unauthorized")) &&
            e < 3,
        });
      }
      function d() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let { templateId: t } = e;
            return (
              await l("/v1/users/favorites/templates", {
                method: "POST",
                body: JSON.stringify({ templateId: t }),
              })
            ).data;
          },
          onMutate: async (t) => {
            let { templateId: n } = t;
            await e.cancelQueries({ queryKey: ["favorite-template-ids"] });
            let i = e.getQueryData(["favorite-template-ids"]);
            if (i) {
              let t = i.includes(n) ? i : [...i, n];
              e.setQueryData(["favorite-template-ids"], t);
            }
            return { previousIds: i };
          },
          onError: (t, n, i) => {
            (null == i ? void 0 : i.previousIds) &&
              e.setQueryData(["favorite-template-ids"], i.previousIds);
          },
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["favorite-template-ids"] }),
              e.invalidateQueries({ queryKey: ["favorite-templates"] });
          },
        });
      }
      function h() {
        let e = (0, a.NL)();
        return (0, s.D)({
          mutationFn: async (e) => {
            let { templateId: t } = e;
            return (
              await l("/v1/users/favorites/templates/".concat(t), {
                method: "DELETE",
              })
            ).data;
          },
          onMutate: async (t) => {
            let { templateId: n } = t;
            await e.cancelQueries({ queryKey: ["favorite-template-ids"] });
            let i = e.getQueryData(["favorite-template-ids"]);
            if (i) {
              let t = i.filter((e) => e !== n);
              e.setQueryData(["favorite-template-ids"], t);
            }
            return { previousIds: i };
          },
          onError: (t, n, i) => {
            (null == i ? void 0 : i.previousIds) &&
              e.setQueryData(["favorite-template-ids"], i.previousIds);
          },
          onSuccess: () => {
            e.invalidateQueries({ queryKey: ["favorite-template-ids"] }),
              e.invalidateQueries({ queryKey: ["favorite-templates"] });
          },
        });
      }
    },
    7999: function (e, t, n) {
      "use strict";
      n.d(t, {
        $2: function () {
          return w;
        },
        Ac: function () {
          return x;
        },
        DA: function () {
          return p;
        },
        FF: function () {
          return b;
        },
        QJ: function () {
          return v;
        },
        VV: function () {
          return j;
        },
        WY: function () {
          return s;
        },
        Yb: function () {
          return N;
        },
        eD: function () {
          return y;
        },
        fR: function () {
          return f;
        },
        zE: function () {
          return g;
        },
      });
      var i,
        a,
        s,
        r,
        l = n(71632),
        o = n(58962),
        c = n(29827),
        d = n(21770),
        h = n(33818),
        u = n(35502);
      let m = (0, h.g)("https://www.quyctd.dev/wedding/api");
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
      function p() {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          n = arguments.length > 1 ? arguments[1] : void 0;
        return (0, o.N)({
          queryKey: ["templates-infinite", t],
          queryFn: async (e) => {
            let { pageParam: n = 1 } = e,
              i = new URLSearchParams();
            i.append("page", String(n)),
              t.limit && i.append("limit", String(t.limit)),
              t.search && i.append("search", t.search),
              t.categoryId && i.append("categoryId", t.categoryId),
              t.templateType &&
                i.append("templateType", String(t.templateType)),
              void 0 !== t.isActive && i.append("isActive", String(t.isActive)),
              t.sortBy && i.append("sortBy", t.sortBy),
              t.sortOrder && i.append("sortOrder", t.sortOrder);
            let a = i.toString();
            return (await m("/v1/templates".concat(a ? "?".concat(a) : "")))
              .data;
          },
          getNextPageParam: (e, t) => {
            var n;
            let i = t.length;
            return i <
              ((null === (n = e.meta) || void 0 === n
                ? void 0
                : n.totalPages) || 1)
              ? i + 1
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
          t = (0, u.xe)(),
          n = (0, u.$T)();
        return (0, d.D)({
          mutationFn: async (e) => {
            var i, a, s, r;
            let { templateId: l, data: o } = e,
              [c, d] = await Promise.all([t.refetch(), n.refetch()]),
              h =
                null === (a = c.data) || void 0 === a
                  ? void 0
                  : null === (i = a.limits) || void 0 === i
                  ? void 0
                  : i.maxPages,
              u =
                null !==
                  (r =
                    null === (s = d.data) || void 0 === s
                      ? void 0
                      : s.pagesCount) && void 0 !== r
                  ? r
                  : 0;
            if ("number" == typeof h && u >= h)
              throw Error(
                "Bạn đ\xe3 đạt giới hạn số thiệp cho g\xf3i hiện tại, vui l\xf2ng n\xe2ng cấp g\xf3i để tạo th\xeam thiệp."
              );
            return (
              await m("/v1/templates/".concat(l, "/use"), {
                method: "POST",
                body: JSON.stringify(o),
              })
            ).data;
          },
          onSuccess: async (i, a) => {
            e.invalidateQueries({ queryKey: ["templates"] }),
              e.invalidateQueries({ queryKey: ["pages"] }),
              await Promise.all([t.refetch(), n.refetch()]),
              e.setQueryData(["page", i.pageId], {
                page: null,
                statistics: null,
              });
          },
          onError: (e) => {
            var t, n, i;
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
                : null === (i = e.message) || void 0 === i
                ? void 0
                : i.includes("Page expired")) ||
              (null == e ? void 0 : e.status) === 400
            )
              throw Error(
                "Thiệp của bạn đ\xe3 hết hạn, vui l\xf2ng n\xe2ng cấp g\xf3i để tiếp tục sử dụng"
              );
          },
        });
      }
      function x() {
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
              await m("/v1/admin/templates".concat(n ? "?".concat(n) : ""))
            ).data;
          },
          staleTime: 3e5,
          gcTime: 6e5,
        });
      }
      function f(e) {
        return (0, l.a)({
          queryKey: ["admin-template", e],
          queryFn: async () => (await m("/v1/admin/templates/".concat(e))).data,
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
      function b() {
        let e = (0, c.NL)();
        return (0, d.D)({
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
      function w() {
        let e = (0, c.NL)();
        return (0, d.D)({
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
      ((i = s || (s = {})).free = "free"),
        (i.basic = "basic"),
        (i.premium = "premium"),
        (i.hot = "hot"),
        (i.new = "new"),
        ((a = r || (r = {})).free = "FREE"),
        (a.basic = "BASIC"),
        (a.premium = "PREMIUM"),
        (a.hot = "HOT"),
        (a.new = "NEW");
    },
    33818: function (e, t, n) {
      "use strict";
      let i, a;
      n.d(t, {
        g: function () {
          return d;
        },
      });
      var s = n(83464),
        r = n(82957).Buffer;
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
                      let i = e.charCodeAt(n).toString(16).padStart(2, "0");
                      t += "%" + i;
                    }
                    return decodeURIComponent(t);
                  }
                  return r.from(n, "base64").toString("utf-8");
                } catch (e) {
                  return "";
                }
              })(t[1]),
              i = JSON.parse(n);
            if ("number" == typeof i.exp) return 1e3 * i.exp;
          } catch (e) {}
      }
      async function c() {
        return i && a && Date.now() + 3e5 < a
          ? i
          : (l ||
              (l = (async () => {
                try {
                  let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                    t = await e.getSession(),
                    s = null == t ? void 0 : t.accessToken;
                  return (i = s), (a = o(s) || Date.now() + 36e5), s;
                } catch (e) {
                  (i = void 0), (a = void 0);
                  return;
                } finally {
                  l = null;
                }
              })()),
            l);
      }
      function d(e) {
        let t = (function (e) {
          let t = s.Z.create({ baseURL: e, timeout: 3e4 });
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
                var s, r, l;
                let c = e.config;
                if (
                  (null === (s = e.response) || void 0 === s
                    ? void 0
                    : s.status) === 401 &&
                  !c._retry
                ) {
                  c._retry = !0;
                  try {
                    let e = await n.e(605).then(n.t.bind(n, 80605, 23)),
                      s = await e.getSession(),
                      r = null == s ? void 0 : s.accessToken,
                      l = null == s ? void 0 : s.error;
                    if (r && !l && r !== i)
                      return (
                        (i = r),
                        (a = o(r) || Date.now() + 3e5),
                        c.headers &&
                          (c.headers.Authorization = "Bearer ".concat(r)),
                        t.request(c)
                      );
                    (i = void 0),
                      (a = void 0),
                      await e.signOut({ redirect: !1 });
                  } catch (e) {}
                  return Promise.reject(Error("Unauthorized"));
                }
                return Promise.reject(
                  Error(
                    (null === (l = e.response) || void 0 === l
                      ? void 0
                      : null === (r = l.data) || void 0 === r
                      ? void 0
                      : r.message) ||
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
            let i = {
              method: (null == n ? void 0 : n.method) || "GET",
              data: null == n ? void 0 : n.body,
              headers: null == n ? void 0 : n.headers,
            };
            return (await t.request({ url: e, ...i })).data;
          } catch (e) {
            throw e;
          }
        };
      }
    },
    53720: function (e, t, n) {
      "use strict";
      n.d(t, {
        H1: function () {
          return i;
        },
      });
      let i = "/dashboard";
    },
    67009: function (e, t, n) {
      "use strict";
      n.d(t, {
        NZ: function () {
          return s;
        },
        gY: function () {
          return a;
        },
        pS: function () {
          return r;
        },
      });
      var i = n(47550);
      i.object({
        email: i.string().email("Email kh\xf4ng hợp lệ"),
        password: i
          .string()
          .min(6, "Mật khẩu phải c\xf3 \xedt nhất 6 k\xfd tự"),
      });
      let a = i.object({
        name: i.string().min(1, "T\xean kh\xf4ng được để trống"),
        email: i.string().email("Email kh\xf4ng hợp lệ"),
        password: i
          .string()
          .min(6, "Mật khẩu phải c\xf3 \xedt nhất 6 k\xfd tự"),
        terms: i
          .boolean()
          .refine(
            (e) => e,
            "Vui l\xf2ng đồng \xfd với c\xe1c điều khoản v\xe0 điều kiện"
          ),
      });
      i.object({ email: i.string().email("Email kh\xf4ng hợp lệ") }),
        i.object({
          name: i.string().min(1, "T\xean kh\xf4ng được để trống"),
          phone: i.string().optional(),
          bio: i.string().optional(),
          avatar: i.string().optional(),
          password: i.string().optional(),
          currentPassword: i.string().optional(),
          newPassword: i.string().optional(),
        });
      let s = i.object({
          code: i
            .string()
            .min(1, "M\xe3 g\xf3i kh\xf4ng được để trống")
            .max(20, "M\xe3 g\xf3i kh\xf4ng được qu\xe1 20 k\xfd tự"),
          name: i
            .string()
            .min(1, "T\xean g\xf3i kh\xf4ng được để trống")
            .max(100, "T\xean g\xf3i kh\xf4ng được qu\xe1 100 k\xfd tự"),
          price: i
            .number()
            .min(0, "Gi\xe1 phải >= 0")
            .max(1e8, "Gi\xe1 kh\xf4ng được qu\xe1 100 triệu VND"),
          discount: i
            .number()
            .min(0, "Giảm gi\xe1 phải >= 0")
            .max(100, "Giảm gi\xe1 kh\xf4ng được qu\xe1 100%")
            .optional(),
          sort: i
            .number()
            .min(0, "Thứ tự phải >= 0")
            .max(1e3, "Thứ tự kh\xf4ng được qu\xe1 1000")
            .optional(),
          config: i.record(i.string(), i.unknown()),
          isActive: i.boolean().optional(),
        }),
        r = i.object({
          name: i
            .string()
            .min(1, "T\xean g\xf3i kh\xf4ng được để trống")
            .max(100, "T\xean g\xf3i kh\xf4ng được qu\xe1 100 k\xfd tự")
            .optional(),
          price: i
            .number()
            .min(0, "Gi\xe1 phải >= 0")
            .max(1e8, "Gi\xe1 kh\xf4ng được qu\xe1 100 triệu VND")
            .optional(),
          discount: i
            .number()
            .min(0, "Giảm gi\xe1 phải >= 0")
            .max(100, "Giảm gi\xe1 kh\xf4ng được qu\xe1 100%")
            .optional(),
          sort: i
            .number()
            .min(0, "Thứ tự phải >= 0")
            .max(1e3, "Thứ tự kh\xf4ng được qu\xe1 1000")
            .optional(),
          config: i.record(i.string(), i.unknown()).optional(),
          isActive: i.boolean().optional(),
        });
    },
    54030: function (e, t, n) {
      "use strict";
      n.d(t, {
        SE: function () {
          return i;
        },
      });
      let i = (0, n(3011).U)((e, t) => ({
        activePanel: null,
        panelModes: {
          stock: { mode: "", targetId: null },
          image: { mode: "", targetId: null },
        },
        openPanel: function (n) {
          let i =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "",
            a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : null;
          e({
            activePanel: n,
            panelModes: { ...t().panelModes, [n]: { mode: i, targetId: a } },
          });
        },
        closePanel: () => e({ activePanel: null }),
        resetPanelMode: (n) => {
          e({
            panelModes: {
              ...t().panelModes,
              [n]: { mode: "", targetId: null },
            },
          });
        },
        closeAndResetPanel: (n) => {
          e({
            activePanel: null,
            panelModes: {
              ...t().panelModes,
              [n]: { mode: "", targetId: null },
            },
          });
        },
        togglePanel: (n) => {
          t().activePanel === n
            ? e({ activePanel: null })
            : e({ activePanel: n });
        },
        isPanelActive: (e) => t().activePanel === e,
        getPanelMode: (e) => t().panelModes[e] || { mode: "", targetId: null },
      }));
    },
    73630: function (e, t, n) {
      "use strict";
      n.d(t, {
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
          return v;
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
      var i = n(61994),
        a = n(53335);
      n(25566);
      let s = () => "https://zenlove.me",
        r = new Set(["crop", "width", "height", "fit", "format", "quality"]);
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
      function h(e) {
        let t = Number(e);
        return Number.isFinite(t) && Number.isInteger(t) && t >= 1 && t <= 100;
      }
      function u(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = "https://www.quyctd.dev/wedding/cdn";
        n || console.warn("NEXT_PUBLIC_CDN_URL is not defined."),
          e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [i, a] = e.split("?"),
          s = new URLSearchParams(null != a ? a : ""),
          u = new URLSearchParams();
        for (let [e, t] of s.entries()) {
          if (!r.has(e)) {
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
              (n = h(t)) ||
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
          n && u.set(e, t);
        }
        t && (u.set("format", "webp"), u.set("quality", "80"));
        let m = u.toString();
        return ""
          .concat(n.replace(/\/+$/, ""), "/")
          .concat(i)
          .concat(m ? "?".concat(m) : "");
      }
      function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        e || (e = "/assets/thumb_default.png"),
          e.startsWith("/") && (e = e.slice(1));
        let [n, i] = e.split("?"),
          a = new URLSearchParams(null != i ? i : ""),
          s = new URLSearchParams();
        for (let [e, t] of a.entries()) {
          if (!r.has(e)) {
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
              (n = h(t)) ||
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
        let u = s.toString();
        return ""
          .concat("https://www.quyctd.dev/wedding/cdn-resource".replace(/\/+$/, ""), "/")
          .concat(n)
          .concat(u ? "?".concat(u) : "");
      }
      function g() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return (0, a.m6)((0, i.W)(t));
      }
      let p = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return u(e, t);
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
      function x(e) {
        let t = e.getFullYear(),
          n = e.getMonth(),
          i = e.getDate(),
          a = new Date(t, n, 1).getDay(),
          s = 0 === a ? 6 : a - 1,
          r = new Date(t, n + 1, 0).getDate(),
          l = [];
        for (let e = 0; e < s; e++) l.push({ type: "empty" });
        for (let e = 1; e <= r; e++) {
          let t = e === i;
          l.push({ type: "day", date: e, isSelected: t });
        }
        return l;
      }
    },
  },
  function (e) {
    e.O(
      0,
      [
        1247, 8788, 7240, 680, 9161, 2160, 4530, 6677, 2383, 7213, 4922, 9763,
        7405, 2039, 6815, 9816, 5831, 5827, 8651, 8589, 9878, 2972, 3335, 9646,
        605, 5878, 9109, 2322, 8734, 7550, 4475, 4244, 6573, 2971, 2117, 1744,
      ],
      function () {
        return e((e.s = 33289));
      }
    ),
      (_N_E = e.O());
  },
]);
