(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2322],
  {
    12808: function (e, t, n) {
      "use strict";
      let i, r, s, o;
      n.d(t, {
        zx: function () {
          return w;
        },
        iV: function () {
          return x;
        },
        GI: function () {
          return iD;
        },
      }),
        n(64784);
      let a = !!(
        "undefined" != typeof window &&
        "undefined" != typeof document &&
        window.document &&
        window.document.createElement
      );
      a && document.addEventListener("touchstart", () => {}, !0),
        n(9423),
        "function" == typeof SuppressedError && SuppressedError;
      var l,
        u,
        c = n(2265),
        d = n(36760),
        h = n.n(d);
      function p() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        let i = {};
        return (
          t.forEach((e) => {
            e &&
              Object.keys(e).forEach((t) => {
                void 0 !== e[t] && (i[t] = e[t]);
              });
          }),
          i
        );
      }
      function f(e, t) {
        let n = Object.assign({}, t.props);
        for (let i in (e.className &&
          (n.className = h()(t.props.className, e.className)),
        e.style &&
          (n.style = Object.assign(Object.assign({}, n.style), e.style)),
        void 0 !== e.tabIndex && (n.tabIndex = e.tabIndex),
        e))
          e.hasOwnProperty(i) &&
            (i.startsWith("data-") || i.startsWith("aria-")) &&
            (n[i] = e[i]);
        return c.cloneElement(t, n);
      }
      n(35943);
      let m = {
          default: "var(--adm-color-weak)",
          primary: "var(--adm-color-primary)",
          white: "var(--adm-color-white)",
        },
        g = { color: "default" },
        v = (0, c.memo)((e) => {
          var t;
          let n = p(g, e);
          return f(
            n,
            c.createElement(
              "div",
              {
                style: {
                  color:
                    null !== (t = m[n.color]) && void 0 !== t ? t : n.color,
                },
                className: h()("adm-loading", "adm-dot-loading"),
              },
              c.createElement(
                "svg",
                {
                  height: "1em",
                  viewBox: "0 0 100 40",
                  style: { verticalAlign: "-0.125em" },
                },
                c.createElement(
                  "g",
                  {
                    stroke: "none",
                    strokeWidth: "1",
                    fill: "none",
                    fillRule: "evenodd",
                  },
                  c.createElement(
                    "g",
                    { transform: "translate(-100.000000, -71.000000)" },
                    c.createElement(
                      "g",
                      { transform: "translate(95.000000, 71.000000)" },
                      c.createElement(
                        "g",
                        { transform: "translate(5.000000, 0.000000)" },
                        [0, 1, 2].map((e) =>
                          c.createElement(
                            "rect",
                            {
                              key: e,
                              fill: "currentColor",
                              x: 20 + 26 * e,
                              y: "16",
                              width: "8",
                              height: "8",
                              rx: "2",
                            },
                            c.createElement("animate", {
                              attributeName: "y",
                              from: "16",
                              to: "16",
                              dur: "2s",
                              begin: "".concat(0.2 * e, "s"),
                              repeatCount: "indefinite",
                              values: "16; 6; 26; 16; 16",
                              keyTimes: "0; 0.1; 0.3; 0.4; 1",
                            })
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        }),
        y = "adm-button",
        b = {
          color: "default",
          fill: "solid",
          block: !1,
          loading: !1,
          loadingIcon: c.createElement(v, { color: "currentColor" }),
          type: "button",
          shape: "default",
          size: "middle",
        };
      var w = (0, c.forwardRef)((e, t) => {
        let n = p(b, e),
          [i, r] = (0, c.useState)(!1),
          s = (0, c.useRef)(null),
          o = "auto" === n.loading ? i : n.loading,
          a = n.disabled || o;
        return (
          (0, c.useImperativeHandle)(t, () => ({
            get nativeElement() {
              return s.current;
            },
          })),
          f(
            n,
            c.createElement(
              "button",
              {
                ref: s,
                type: n.type,
                form: n.form,
                onClick: (e) => {
                  var t, i, s, o;
                  return (
                    (t = void 0),
                    (i = void 0),
                    (s = void 0),
                    (o = function* () {
                      if (!n.onClick) return;
                      let t = n.onClick(e);
                      if (
                        t &&
                        "object" == typeof t &&
                        "function" == typeof t.then
                      )
                        try {
                          r(!0), yield t, r(!1);
                        } catch (e) {
                          throw (r(!1), e);
                        }
                    }),
                    new (s || (s = Promise))(function (e, n) {
                      function r(e) {
                        try {
                          l(o.next(e));
                        } catch (e) {
                          n(e);
                        }
                      }
                      function a(e) {
                        try {
                          l(o.throw(e));
                        } catch (e) {
                          n(e);
                        }
                      }
                      function l(t) {
                        var n;
                        t.done
                          ? e(t.value)
                          : ((n = t.value) instanceof s
                              ? n
                              : new s(function (e) {
                                  e(n);
                                })
                            ).then(r, a);
                      }
                      l((o = o.apply(t, i || [])).next());
                    })
                  );
                },
                className: h()(
                  y,
                  {
                    ["".concat(y, "-").concat(n.color)]: n.color,
                    ["".concat(y, "-block")]: n.block,
                    ["".concat(y, "-disabled")]: a,
                    ["".concat(y, "-fill-outline")]: "outline" === n.fill,
                    ["".concat(y, "-fill-none")]: "none" === n.fill,
                    ["".concat(y, "-mini")]: "mini" === n.size,
                    ["".concat(y, "-small")]: "small" === n.size,
                    ["".concat(y, "-large")]: "large" === n.size,
                    ["".concat(y, "-loading")]: o,
                  },
                  "".concat(y, "-shape-").concat(n.shape)
                ),
                disabled: a,
                onMouseDown: n.onMouseDown,
                onMouseUp: n.onMouseUp,
                onTouchStart: n.onTouchStart,
                onTouchEnd: n.onTouchEnd,
              },
              o
                ? c.createElement(
                    "div",
                    { className: "".concat(y, "-loading-wrapper") },
                    n.loadingIcon,
                    n.loadingText
                  )
                : c.createElement("span", null, n.children)
            )
          )
        );
      });
      let _ = "${label}不是一个有效的${type}",
        k = {
          locale: {
            locale: "zh-CH",
            common: {
              confirm: "确定",
              cancel: "取消",
              loading: "加载中",
              close: "关闭",
            },
            Calendar: {
              title: "日期选择",
              confirm: "确认",
              start: "开始",
              end: "结束",
              startAndEnd: "开始/结束",
              today: "今日",
              markItems: ["一", "二", "三", "四", "五", "六", "日"],
              yearAndMonth: "${year}年${month}月",
            },
            Cascader: { placeholder: "请选择" },
            Dialog: { ok: "我知道了" },
            DatePicker: { tillNow: "至今" },
            ErrorBlock: {
              default: {
                title: "页面遇到一些小问题",
                description: "待会来试试",
              },
              busy: { title: "前方拥堵", description: "刷新试试" },
              disconnected: {
                title: "网络有点忙",
                description: "动动手指帮忙修复",
              },
              empty: {
                title: "没有找到你需要的东西",
                description: "找找其他的吧",
              },
            },
            Form: {
              required: "必填",
              optional: "选填",
              defaultValidateMessages: {
                default: "字段验证错误${label}",
                required: "请输入${label}",
                enum: "${label}必须是其中一个[${enum}]",
                whitespace: "${label}不能为空字符",
                date: {
                  format: "${label}日期格式无效",
                  parse: "${label}不能转换为日期",
                  invalid: "${label}是一个无效日期",
                },
                types: {
                  string: _,
                  method: _,
                  array: _,
                  object: _,
                  number: _,
                  date: _,
                  boolean: _,
                  integer: _,
                  float: _,
                  regexp: _,
                  email: _,
                  url: _,
                  hex: _,
                },
                string: {
                  len: "${label}须为${len}个字符",
                  min: "${label}最少${min}个字符",
                  max: "${label}最多${max}个字符",
                  range: "${label}须在${min}-${max}字符之间",
                },
                number: {
                  len: "${label}必须等于${len}",
                  min: "${label}最小值为${min}",
                  max: "${label}最大值为${max}",
                  range: "${label}须在${min}-${max}之间",
                },
                array: {
                  len: "须为${len}个${label}",
                  min: "最少${min}个${label}",
                  max: "最多${max}个${label}",
                  range: "${label}数量须在${min}-${max}之间",
                },
                pattern: { mismatch: "${label}与模式不匹配${pattern}" },
              },
            },
            ImageUploader: { uploading: "上传中...", upload: "上传" },
            InfiniteScroll: {
              noMore: "没有更多了",
              failedToLoad: "加载失败",
              retry: "重新加载",
            },
            Input: { clear: "清除" },
            Mask: { name: "背景蒙层" },
            Modal: { ok: "我知道了" },
            PasscodeInput: { name: "密码输入框" },
            PullToRefresh: {
              pulling: "下拉刷新",
              canRelease: "释放立即刷新",
              complete: "刷新成功",
            },
            SearchBar: { name: "搜索框" },
            Slider: { name: "滑动输入条" },
            Stepper: { decrease: "减少", increase: "增加" },
            Switch: { name: "开关" },
            Selector: { name: "选择组" },
          },
        },
        S = c.createContext(null);
      function C() {
        var e;
        return null !== (e = (0, c.useContext)(S)) && void 0 !== e ? e : k;
      }
      var x = (e) => {
        let { children: t } = e,
          n = (function (e, t) {
            var n = {};
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                0 > t.indexOf(i) &&
                (n[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var r = 0, i = Object.getOwnPropertySymbols(e);
                r < i.length;
                r++
              )
                0 > t.indexOf(i[r]) &&
                  Object.prototype.propertyIsEnumerable.call(e, i[r]) &&
                  (n[i[r]] = e[i[r]]);
            return n;
          })(e, ["children"]),
          i = C();
        return c.createElement(
          S.Provider,
          { value: Object.assign(Object.assign({}, i), n) },
          t
        );
      };
      n(41308);
      var O =
          "undefined" != typeof window &&
          window.document &&
          window.document.createElement
            ? c.useLayoutEffect
            : c.useEffect,
        P = function () {
          var e = (0, c.useRef)(!1);
          return (
            (0, c.useEffect)(function () {
              return (
                (e.current = !1),
                function () {
                  e.current = !0;
                }
              );
            }, []),
            e
          );
        };
      n(90691);
      let E = a ? window : void 0,
        A = ["scroll", "auto", "overlay"],
        M = !1;
      if (a)
        try {
          let e = {};
          Object.defineProperty(e, "passive", {
            get() {
              M = !0;
            },
          }),
            window.addEventListener("test-passive", null, e);
        } catch (e) {}
      let j = 0,
        I = "adm-overflow-hidden";
      function T(e, t) {
        let n = (function () {
            let e = (0, c.useRef)(0),
              t = (0, c.useRef)(0),
              n = (0, c.useRef)(0),
              i = (0, c.useRef)(0),
              r = (0, c.useRef)(0),
              s = (0, c.useRef)(0),
              o = (0, c.useRef)(""),
              a = () => {
                (n.current = 0),
                  (i.current = 0),
                  (r.current = 0),
                  (s.current = 0),
                  (o.current = "");
              };
            return {
              move: (a) => {
                let l = a.touches[0];
                if (
                  ((n.current = l.clientX < 0 ? 0 : l.clientX - e.current),
                  (i.current = l.clientY - t.current),
                  (r.current = Math.abs(n.current)),
                  (s.current = Math.abs(i.current)),
                  !o.current)
                ) {
                  var u, c;
                  o.current =
                    (u = r.current) > (c = s.current) && u > 10
                      ? "horizontal"
                      : c > u && c > 10
                      ? "vertical"
                      : "";
                }
              },
              start: (n) => {
                a(),
                  (e.current = n.touches[0].clientX),
                  (t.current = n.touches[0].clientY);
              },
              reset: a,
              startX: e,
              startY: t,
              deltaX: n,
              deltaY: i,
              offsetX: r,
              offsetY: s,
              direction: o,
              isVertical: () => "vertical" === o.current,
              isHorizontal: () => "horizontal" === o.current,
            };
          })(),
          i = (i) => {
            n.move(i);
            let r = n.deltaY.current > 0 ? "10" : "01",
              s = (function (e) {
                let t =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : E,
                  n = e;
                for (
                  ;
                  n && n !== t && 1 === n.nodeType && n !== document.body;

                ) {
                  let { overflowY: e } = window.getComputedStyle(n);
                  if (A.includes(e) && n.scrollHeight > n.clientHeight)
                    return n;
                  n = n.parentNode;
                }
                return t;
              })(i.target, e.current);
            if (!s) return;
            if ("strict" === t) {
              let e = (function (e) {
                let t = null == e ? void 0 : e.parentElement;
                for (; t; ) {
                  if (t.clientHeight < t.scrollHeight) return t;
                  t = t.parentElement;
                }
                return null;
              })(i.target);
              if (e === document.body || e === document.documentElement) {
                i.preventDefault();
                return;
              }
            }
            let { scrollHeight: o, offsetHeight: a, scrollTop: l } = s,
              { height: u } = s.getBoundingClientRect(),
              c = "11";
            0 === l
              ? (c = a >= o ? "00" : "01")
              : o <= Math.round(u + l) && (c = "10"),
              "11" !== c &&
                n.isVertical() &&
                !(parseInt(c, 2) & parseInt(r, 2)) &&
                i.cancelable &&
                M &&
                i.preventDefault();
          },
          r = () => {
            document.addEventListener("touchstart", n.start),
              document.addEventListener("touchmove", i, !!M && { passive: !1 }),
              j || document.body.classList.add(I),
              j++;
          },
          s = () => {
            !j ||
              (document.removeEventListener("touchstart", n.start),
              document.removeEventListener("touchmove", i),
              --j || document.body.classList.remove(I));
          };
        (0, c.useEffect)(() => {
          if (t)
            return (
              r(),
              () => {
                s();
              }
            );
        }, [t]);
      }
      let R = X(),
        $ = (e) => K(e, R),
        V = X();
      $.write = (e) => K(e, V);
      let D = X();
      $.onStart = (e) => K(e, D);
      let L = X();
      $.onFrame = (e) => K(e, L);
      let N = X();
      $.onFinish = (e) => K(e, N);
      let z = [];
      $.setTimeout = (e, t) => {
        let n = $.now() + t,
          i = () => {
            let e = z.findIndex((e) => e.cancel == i);
            ~e && z.splice(e, 1), (B -= ~e ? 1 : 0);
          },
          r = { time: n, handler: e, cancel: i };
        return z.splice(F(n), 0, r), (B += 1), Q(), r;
      };
      let F = (e) => ~(~z.findIndex((t) => t.time > e) || ~z.length);
      ($.cancel = (e) => {
        D.delete(e), L.delete(e), N.delete(e), R.delete(e), V.delete(e);
      }),
        ($.sync = (e) => {
          (H = !0), $.batchedUpdates(e), (H = !1);
        }),
        ($.throttle = (e) => {
          let t;
          function n() {
            try {
              e(...t);
            } finally {
              t = null;
            }
          }
          function i(...e) {
            (t = e), $.onStart(n);
          }
          return (
            (i.handler = e),
            (i.cancel = () => {
              D.delete(n), (t = null);
            }),
            i
          );
        });
      let q =
        "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      ($.use = (e) => (q = e)),
        ($.now =
          "undefined" != typeof performance
            ? () => performance.now()
            : Date.now),
        ($.batchedUpdates = (e) => e()),
        ($.catch = console.error),
        ($.frameLoop = "always"),
        ($.advance = () => {
          "demand" !== $.frameLoop
            ? console.warn(
                "Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"
              )
            : G();
        });
      let U = -1,
        B = 0,
        H = !1;
      function K(e, t) {
        H ? (t.delete(e), e(0)) : (t.add(e), Q());
      }
      function Q() {
        U < 0 && ((U = 0), "demand" !== $.frameLoop && q(W));
      }
      function W() {
        ~U && (q(W), $.batchedUpdates(G));
      }
      function G() {
        let e = U,
          t = F((U = $.now()));
        if ((t && (Y(z.splice(0, t), (e) => e.handler()), (B -= t)), !B)) {
          U = -1;
          return;
        }
        D.flush(),
          R.flush(e ? Math.min(64, U - e) : 16.667),
          L.flush(),
          V.flush(),
          N.flush();
      }
      function X() {
        let e = new Set(),
          t = e;
        return {
          add(n) {
            (B += t != e || e.has(n) ? 0 : 1), e.add(n);
          },
          delete: (n) => ((B -= t == e && e.has(n) ? 1 : 0), e.delete(n)),
          flush(n) {
            t.size &&
              ((e = new Set()),
              (B -= t.size),
              Y(t, (t) => t(n) && e.add(t)),
              (B += e.size),
              (t = e));
          },
        };
      }
      function Y(e, t) {
        e.forEach((e) => {
          try {
            t(e);
          } catch (e) {
            $.catch(e);
          }
        });
      }
      function Z() {}
      let J = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          }),
        ee = {
          arr: Array.isArray,
          obj: (e) => !!e && "Object" === e.constructor.name,
          fun: (e) => "function" == typeof e,
          str: (e) => "string" == typeof e,
          num: (e) => "number" == typeof e,
          und: (e) => void 0 === e,
        };
      function et(e, t) {
        if (ee.arr(e)) {
          if (!ee.arr(t) || e.length !== t.length) return !1;
          for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
          return !0;
        }
        return e === t;
      }
      let en = (e, t) => e.forEach(t);
      function ei(e, t, n) {
        if (ee.arr(e)) {
          for (let i = 0; i < e.length; i++) t.call(n, e[i], `${i}`);
          return;
        }
        for (let i in e) e.hasOwnProperty(i) && t.call(n, e[i], i);
      }
      let er = (e) => (ee.und(e) ? [] : ee.arr(e) ? e : [e]);
      function es(e, t) {
        if (e.size) {
          let n = Array.from(e);
          e.clear(), en(n, t);
        }
      }
      let eo = (e, ...t) => es(e, (e) => e(...t)),
        ea = () =>
          "undefined" == typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        el = null,
        eu = !1,
        ec = Z;
      var ed = Object.freeze({
        __proto__: null,
        get createStringInterpolator() {
          return i;
        },
        get to() {
          return r;
        },
        get colors() {
          return el;
        },
        get skipAnimation() {
          return eu;
        },
        get willAdvance() {
          return ec;
        },
        assign: (e) => {
          e.to && (r = e.to),
            e.now && ($.now = e.now),
            void 0 !== e.colors && (el = e.colors),
            null != e.skipAnimation && (eu = e.skipAnimation),
            e.createStringInterpolator && (i = e.createStringInterpolator),
            e.requestAnimationFrame && $.use(e.requestAnimationFrame),
            e.batchedUpdates && ($.batchedUpdates = e.batchedUpdates),
            e.willAdvance && (ec = e.willAdvance),
            e.frameLoop && ($.frameLoop = e.frameLoop);
        },
      });
      let eh = new Set(),
        ep = [],
        ef = [],
        em = 0,
        eg = {
          get idle() {
            return !eh.size && !ep.length;
          },
          start(e) {
            em > e.priority ? (eh.add(e), $.onStart(ev)) : (ey(e), $(ew));
          },
          advance: ew,
          sort(e) {
            if (em) $.onFrame(() => eg.sort(e));
            else {
              let t = ep.indexOf(e);
              ~t && (ep.splice(t, 1), eb(e));
            }
          },
          clear() {
            (ep = []), eh.clear();
          },
        };
      function ev() {
        eh.forEach(ey), eh.clear(), $(ew);
      }
      function ey(e) {
        ep.includes(e) || eb(e);
      }
      function eb(e) {
        ep.splice(
          (function (e, t) {
            let n = e.findIndex(t);
            return n < 0 ? e.length : n;
          })(ep, (t) => t.priority > e.priority),
          0,
          e
        );
      }
      function ew(e) {
        let t = ef;
        for (let n = 0; n < ep.length; n++) {
          let i = ep[n];
          (em = i.priority),
            i.idle || (ec(i), i.advance(e), i.idle || t.push(i));
        }
        return (em = 0), ((ef = ep).length = 0), (ep = t).length > 0;
      }
      let e_ = "[-+]?\\d*\\.?\\d+",
        ek = e_ + "%";
      function eS(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)";
      }
      let eC = RegExp("rgb" + eS(e_, e_, e_)),
        ex = RegExp("rgba" + eS(e_, e_, e_, e_)),
        eO = RegExp("hsl" + eS(e_, ek, ek)),
        eP = RegExp("hsla" + eS(e_, ek, ek, e_)),
        eE = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        eA =
          /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        eM = /^#([0-9a-fA-F]{6})$/,
        ej = /^#([0-9a-fA-F]{8})$/;
      function eI(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6)
          ? e + (t - e) * 6 * n
          : n < 0.5
          ? t
          : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e;
      }
      function eT(e, t, n) {
        let i = n < 0.5 ? n * (1 + t) : n + t - n * t,
          r = 2 * n - i;
        return (
          (Math.round(255 * eI(r, i, e + 1 / 3)) << 24) |
          (Math.round(255 * eI(r, i, e)) << 16) |
          (Math.round(255 * eI(r, i, e - 1 / 3)) << 8)
        );
      }
      function eR(e) {
        let t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t;
      }
      function e$(e) {
        return (((parseFloat(e) % 360) + 360) % 360) / 360;
      }
      function eV(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t);
      }
      function eD(e) {
        let t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100;
      }
      function eL(e) {
        let t;
        let n =
          "number" == typeof e
            ? e >>> 0 === e && e >= 0 && e <= 4294967295
              ? e
              : null
            : (t = eM.exec(e))
            ? parseInt(t[1] + "ff", 16) >>> 0
            : el && void 0 !== el[e]
            ? el[e]
            : (t = eC.exec(e))
            ? ((eR(t[1]) << 24) | (eR(t[2]) << 16) | (eR(t[3]) << 8) | 255) >>>
              0
            : (t = ex.exec(e))
            ? ((eR(t[1]) << 24) |
                (eR(t[2]) << 16) |
                (eR(t[3]) << 8) |
                eV(t[4])) >>>
              0
            : (t = eE.exec(e))
            ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0
            : (t = ej.exec(e))
            ? parseInt(t[1], 16) >>> 0
            : (t = eA.exec(e))
            ? parseInt(
                t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4],
                16
              ) >>> 0
            : (t = eO.exec(e))
            ? (255 | eT(e$(t[1]), eD(t[2]), eD(t[3]))) >>> 0
            : (t = eP.exec(e))
            ? (eT(e$(t[1]), eD(t[2]), eD(t[3])) | eV(t[4])) >>> 0
            : null;
        if (null === n) return e;
        let i = (4278190080 & (n = n || 0)) >>> 24,
          r = (16711680 & n) >>> 16,
          s = (65280 & n) >>> 8,
          o = (255 & n) / 255;
        return `rgba(${i}, ${r}, ${s}, ${o})`;
      }
      let eN = (e, t, n) => {
        if (ee.fun(e)) return e;
        if (ee.arr(e)) return eN({ range: e, output: t, extrapolate: n });
        if (ee.str(e.output[0])) return i(e);
        let r = e.output,
          s = e.range || [0, 1],
          o = e.extrapolateLeft || e.extrapolate || "extend",
          a = e.extrapolateRight || e.extrapolate || "extend",
          l = e.easing || ((e) => e);
        return (t) => {
          let n = (function (e, t) {
            for (var n = 1; n < t.length - 1 && !(t[n] >= e); ++n);
            return n - 1;
          })(t, s);
          return (function (e, t, n, i, r, s, o, a, l) {
            let u = l ? l(e) : e;
            if (u < t) {
              if ("identity" === o) return u;
              "clamp" === o && (u = t);
            }
            if (u > n) {
              if ("identity" === a) return u;
              "clamp" === a && (u = n);
            }
            return i === r
              ? i
              : t === n
              ? e <= t
                ? i
                : r
              : (t === -1 / 0
                  ? (u = -u)
                  : n === 1 / 0
                  ? (u -= t)
                  : (u = (u - t) / (n - t)),
                (u = s(u)),
                i === -1 / 0
                  ? (u = -u)
                  : r === 1 / 0
                  ? (u += i)
                  : (u = u * (r - i) + i),
                u);
          })(t, s[n], s[n + 1], r[n], r[n + 1], l, o, a, e.map);
        };
      };
      function ez() {
        return (ez = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      let eF = Symbol.for("FluidValue.get"),
        eq = Symbol.for("FluidValue.observers"),
        eU = (e) => !!(e && e[eF]),
        eB = (e) => (e && e[eF] ? e[eF]() : e),
        eH = (e) => e[eq] || null;
      function eK(e, t) {
        let n = e[eq];
        n &&
          n.forEach((e) => {
            e.eventObserved ? e.eventObserved(t) : e(t);
          });
      }
      class eQ {
        constructor(e) {
          if (((this[eF] = void 0), (this[eq] = void 0), !e && !(e = this.get)))
            throw Error("Unknown getter");
          eW(this, e);
        }
      }
      let eW = (e, t) => eY(e, eF, t);
      function eG(e, t) {
        if (e[eF]) {
          let n = e[eq];
          n || eY(e, eq, (n = new Set())),
            !n.has(t) &&
              (n.add(t), e.observerAdded && e.observerAdded(n.size, t));
        }
        return t;
      }
      function eX(e, t) {
        let n = e[eq];
        if (n && n.has(t)) {
          let i = n.size - 1;
          i ? n.delete(t) : (e[eq] = null),
            e.observerRemoved && e.observerRemoved(i, t);
        }
      }
      let eY = (e, t, n) =>
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0,
          }),
        eZ = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        eJ =
          /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        e0 = RegExp(`(${eZ.source})(%|[a-z]+)`, "i"),
        e1 = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        e3 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        e2 = (e) => {
          let [t, n] = e9(e);
          if (!t || ea()) return e;
          let i = window
            .getComputedStyle(document.documentElement)
            .getPropertyValue(t);
          if (i) return i.trim();
          if (n && n.startsWith("--")) {
            let e = window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(n);
            if (e) return e;
          } else if (n && e3.test(n)) return e2(n);
          else if (n) return n;
          return e;
        },
        e9 = (e) => {
          let t = e3.exec(e);
          if (!t) return [,];
          let [, n, i] = t;
          return [n, i];
        },
        e5 = (e, t, n, i, r) =>
          `rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(i)}, ${r})`,
        e4 = (e) => {
          s ||
            (s = el
              ? RegExp(`(${Object.keys(el).join("|")})(?!\\w)`, "g")
              : /^\b$/);
          let t = e.output.map((e) =>
              eB(e).replace(e3, e2).replace(eJ, eL).replace(s, eL)
            ),
            n = t.map((e) => e.match(eZ).map(Number)),
            i = n[0]
              .map((e, t) =>
                n.map((e) => {
                  if (!(t in e))
                    throw Error(
                      'The arity of each "output" value must be equal'
                    );
                  return e[t];
                })
              )
              .map((t) => eN(ez({}, e, { output: t })));
          return (e) => {
            var n;
            let r =
                !e0.test(t[0]) &&
                (null == (n = t.find((e) => e0.test(e)))
                  ? void 0
                  : n.replace(eZ, "")),
              s = 0;
            return t[0]
              .replace(eZ, () => `${i[s++](e)}${r || ""}`)
              .replace(e1, e5);
          };
        },
        e7 = "react-spring: ",
        e8 = (e) => {
          let t = !1;
          if ("function" != typeof e)
            throw TypeError(`${e7}once requires a function parameter`);
          return (...n) => {
            t || (e(...n), (t = !0));
          };
        },
        e6 = e8(console.warn),
        te = e8(console.warn);
      function tt(e) {
        return (
          ee.str(e) &&
          ("#" == e[0] ||
            /\d/.test(e) ||
            (!ea() && e3.test(e)) ||
            e in (el || {}))
        );
      }
      new WeakMap(), new WeakMap(), new WeakMap(), new WeakMap();
      let tn = ea() ? c.useEffect : c.useLayoutEffect,
        ti = () => {
          let e = (0, c.useRef)(!1);
          return (
            tn(
              () => (
                (e.current = !0),
                () => {
                  e.current = !1;
                }
              ),
              []
            ),
            e
          );
        };
      function tr() {
        let e = (0, c.useState)()[1],
          t = ti();
        return () => {
          t.current && e(Math.random());
        };
      }
      let ts = (e) => (0, c.useEffect)(e, to),
        to = [];
      function ta(e) {
        let t = (0, c.useRef)();
        return (
          (0, c.useEffect)(() => {
            t.current = e;
          }),
          t.current
        );
      }
      let tl = Symbol.for("Animated:node"),
        tu = (e) => !!e && e[tl] === e,
        tc = (e) => e && e[tl],
        td = (e, t) => J(e, tl, t),
        th = (e) => e && e[tl] && e[tl].getPayload();
      class tp {
        constructor() {
          (this.payload = void 0), td(this, this);
        }
        getPayload() {
          return this.payload || [];
        }
      }
      class tf extends tp {
        constructor(e) {
          super(),
            (this.done = !0),
            (this.elapsedTime = void 0),
            (this.lastPosition = void 0),
            (this.lastVelocity = void 0),
            (this.v0 = void 0),
            (this.durationProgress = 0),
            (this._value = e),
            ee.num(this._value) && (this.lastPosition = this._value);
        }
        static create(e) {
          return new tf(e);
        }
        getPayload() {
          return [this];
        }
        getValue() {
          return this._value;
        }
        setValue(e, t) {
          return (
            ee.num(e) &&
              ((this.lastPosition = e),
              t &&
                ((e = Math.round(e / t) * t),
                this.done && (this.lastPosition = e))),
            this._value !== e && ((this._value = e), !0)
          );
        }
        reset() {
          let { done: e } = this;
          (this.done = !1),
            ee.num(this._value) &&
              ((this.elapsedTime = 0),
              (this.durationProgress = 0),
              (this.lastPosition = this._value),
              e && (this.lastVelocity = null),
              (this.v0 = null));
        }
      }
      class tm extends tf {
        constructor(e) {
          super(0),
            (this._string = null),
            (this._toString = void 0),
            (this._toString = eN({ output: [e, e] }));
        }
        static create(e) {
          return new tm(e);
        }
        getValue() {
          let e = this._string;
          return null == e ? (this._string = this._toString(this._value)) : e;
        }
        setValue(e) {
          if (ee.str(e)) {
            if (e == this._string) return !1;
            (this._string = e), (this._value = 1);
          } else {
            if (!super.setValue(e)) return !1;
            this._string = null;
          }
          return !0;
        }
        reset(e) {
          e && (this._toString = eN({ output: [this.getValue(), e] })),
            (this._value = 0),
            super.reset();
        }
      }
      let tg = { dependencies: null };
      class tv extends tp {
        constructor(e) {
          super(), (this.source = e), this.setValue(e);
        }
        getValue(e) {
          let t = {};
          return (
            ei(this.source, (n, i) => {
              tu(n)
                ? (t[i] = n.getValue(e))
                : eU(n)
                ? (t[i] = eB(n))
                : e || (t[i] = n);
            }),
            t
          );
        }
        setValue(e) {
          (this.source = e), (this.payload = this._makePayload(e));
        }
        reset() {
          this.payload && en(this.payload, (e) => e.reset());
        }
        _makePayload(e) {
          if (e) {
            let t = new Set();
            return ei(e, this._addToPayload, t), Array.from(t);
          }
        }
        _addToPayload(e) {
          tg.dependencies && eU(e) && tg.dependencies.add(e);
          let t = th(e);
          t && en(t, (e) => this.add(e));
        }
      }
      class ty extends tv {
        constructor(e) {
          super(e);
        }
        static create(e) {
          return new ty(e);
        }
        getValue() {
          return this.source.map((e) => e.getValue());
        }
        setValue(e) {
          let t = this.getPayload();
          return e.length == t.length
            ? t.map((t, n) => t.setValue(e[n])).some(Boolean)
            : (super.setValue(e.map(tb)), !0);
        }
      }
      function tb(e) {
        return (tt(e) ? tm : tf).create(e);
      }
      function tw(e) {
        let t = tc(e);
        return t ? t.constructor : ee.arr(e) ? ty : tt(e) ? tm : tf;
      }
      function t_() {
        return (t_ = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      let tk = (e, t) => {
        let n = !ee.fun(e) || (e.prototype && e.prototype.isReactComponent);
        return (0, c.forwardRef)((i, r) => {
          let s = (0, c.useRef)(null),
            o =
              n &&
              (0, c.useCallback)(
                (e) => {
                  s.current = (r && (ee.fun(r) ? r(e) : (r.current = e)), e);
                },
                [r]
              ),
            [a, l] = (function (e, t) {
              let n = new Set();
              return (
                (tg.dependencies = n),
                e.style &&
                  (e = t_({}, e, { style: t.createAnimatedStyle(e.style) })),
                (e = new tv(e)),
                (tg.dependencies = null),
                [e, n]
              );
            })(i, t),
            u = tr(),
            d = () => {
              let e = s.current;
              (!n || e) &&
                !1 === (!!e && t.applyAnimatedValues(e, a.getValue(!0))) &&
                u();
            },
            h = new tS(d, l),
            p = (0, c.useRef)();
          tn(
            () => (
              (p.current = h),
              en(l, (e) => eG(e, h)),
              () => {
                p.current &&
                  (en(p.current.deps, (e) => eX(e, p.current)),
                  $.cancel(p.current.update));
              }
            )
          ),
            (0, c.useEffect)(d, []),
            ts(() => () => {
              let e = p.current;
              en(e.deps, (t) => eX(t, e));
            });
          let f = t.getComponentProps(a.getValue());
          return c.createElement(e, t_({}, f, { ref: o }));
        });
      };
      class tS {
        constructor(e, t) {
          (this.update = e), (this.deps = t);
        }
        eventObserved(e) {
          "change" == e.type && $.write(this.update);
        }
      }
      let tC = Symbol.for("AnimatedComponent"),
        tx = (e) =>
          ee.str(e)
            ? e
            : e && ee.str(e.displayName)
            ? e.displayName
            : (ee.fun(e) && e.name) || null;
      function tO() {
        return (tO = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                  Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
              }
              return e;
            }).apply(this, arguments);
      }
      function tP(e, ...t) {
        return ee.fun(e) ? e(...t) : e;
      }
      let tE = (e, t) =>
          !0 === e || !!(t && e && (ee.fun(e) ? e(t) : er(e).includes(t))),
        tA = (e, t) => (ee.obj(e) ? t && e[t] : e),
        tM = (e, t) =>
          !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        tj = (e) => e,
        tI = (e, t = tj) => {
          let n = tT;
          e.default && !0 !== e.default && (n = Object.keys((e = e.default)));
          let i = {};
          for (let r of n) {
            let n = t(e[r], r);
            ee.und(n) || (i[r] = n);
          }
          return i;
        },
        tT = [
          "config",
          "onProps",
          "onStart",
          "onChange",
          "onPause",
          "onResume",
          "onRest",
        ],
        tR = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1,
        };
      function t$(e) {
        let t = (function (e) {
          let t = {},
            n = 0;
          if (
            (ei(e, (e, i) => {
              !tR[i] && ((t[i] = e), n++);
            }),
            n)
          )
            return t;
        })(e);
        if (t) {
          let n = { to: t };
          return ei(e, (e, i) => i in t || (n[i] = e)), n;
        }
        return tO({}, e);
      }
      function tV(e) {
        return (
          (e = eB(e)),
          ee.arr(e)
            ? e.map(tV)
            : tt(e)
            ? ed.createStringInterpolator({ range: [0, 1], output: [e, e] })(1)
            : e
        );
      }
      function tD(e) {
        return ee.fun(e) || (ee.arr(e) && ee.obj(e[0]));
      }
      let tL = tO(
        {},
        { tension: 170, friction: 26 },
        { mass: 1, damping: 1, easing: (e) => e, clamp: !1 }
      );
      class tN {
        constructor() {
          (this.tension = void 0),
            (this.friction = void 0),
            (this.frequency = void 0),
            (this.damping = void 0),
            (this.mass = void 0),
            (this.velocity = 0),
            (this.restVelocity = void 0),
            (this.precision = void 0),
            (this.progress = void 0),
            (this.duration = void 0),
            (this.easing = void 0),
            (this.clamp = void 0),
            (this.bounce = void 0),
            (this.decay = void 0),
            (this.round = void 0),
            Object.assign(this, tL);
        }
      }
      function tz(e, t) {
        if (ee.und(t.decay)) {
          let n = !ee.und(t.tension) || !ee.und(t.friction);
          (!n && ee.und(t.frequency) && ee.und(t.damping) && ee.und(t.mass)) ||
            ((e.duration = void 0), (e.decay = void 0)),
            n && (e.frequency = void 0);
        } else e.duration = void 0;
      }
      let tF = [];
      class tq {
        constructor() {
          (this.changed = !1),
            (this.values = tF),
            (this.toValues = null),
            (this.fromValues = tF),
            (this.to = void 0),
            (this.from = void 0),
            (this.config = new tN()),
            (this.immediate = !1);
        }
      }
      function tU(
        e,
        { key: t, props: n, defaultProps: i, state: r, actions: s }
      ) {
        return new Promise((o, a) => {
          var l;
          let u, c;
          let d = tE(
            null != (l = n.cancel) ? l : null == i ? void 0 : i.cancel,
            t
          );
          if (d) f();
          else {
            ee.und(n.pause) || (r.paused = tE(n.pause, t));
            let e = null == i ? void 0 : i.pause;
            !0 !== e && (e = r.paused || tE(e, t)),
              (u = tP(n.delay || 0, t)),
              e ? (r.resumeQueue.add(p), s.pause()) : (s.resume(), p());
          }
          function h() {
            r.resumeQueue.add(p),
              r.timeouts.delete(c),
              c.cancel(),
              (u = c.time - $.now());
          }
          function p() {
            u > 0 && !ed.skipAnimation
              ? ((r.delayed = !0),
                (c = $.setTimeout(f, u)),
                r.pauseQueue.add(h),
                r.timeouts.add(c))
              : f();
          }
          function f() {
            r.delayed && (r.delayed = !1),
              r.pauseQueue.delete(h),
              r.timeouts.delete(c),
              e <= (r.cancelId || 0) && (d = !0);
            try {
              s.start(tO({}, n, { callId: e, cancel: d }), o);
            } catch (e) {
              a(e);
            }
          }
        });
      }
      let tB = (e, t) =>
          1 == t.length
            ? t[0]
            : t.some((e) => e.cancelled)
            ? tQ(e.get())
            : t.every((e) => e.noop)
            ? tH(e.get())
            : tK(
                e.get(),
                t.every((e) => e.finished)
              ),
        tH = (e) => ({ value: e, noop: !0, finished: !0, cancelled: !1 }),
        tK = (e, t, n = !1) => ({ value: e, finished: t, cancelled: n }),
        tQ = (e) => ({ value: e, cancelled: !0, finished: !1 });
      function tW(e, t, n, i) {
        let { callId: r, parentId: s, onRest: o } = t,
          { asyncTo: a, promise: l } = n;
        return s || e !== a || t.reset
          ? (n.promise = (async () => {
              let u, c, d;
              (n.asyncId = r), (n.asyncTo = e);
              let h = tI(t, (e, t) => ("onRest" === t ? void 0 : e)),
                p = new Promise((e, t) => ((u = e), (c = t))),
                f = (e) => {
                  let t =
                    (r <= (n.cancelId || 0) && tQ(i)) ||
                    (r !== n.asyncId && tK(i, !1));
                  if (t) throw ((e.result = t), c(e), e);
                },
                m = (e, t) => {
                  let s = new tX(),
                    o = new tY();
                  return (async () => {
                    if (ed.skipAnimation)
                      throw (tG(n), (o.result = tK(i, !1)), c(o), o);
                    f(s);
                    let a = ee.obj(e) ? tO({}, e) : tO({}, t, { to: e });
                    (a.parentId = r),
                      ei(h, (e, t) => {
                        ee.und(a[t]) && (a[t] = e);
                      });
                    let l = await i.start(a);
                    return (
                      f(s),
                      n.paused &&
                        (await new Promise((e) => {
                          n.resumeQueue.add(e);
                        })),
                      l
                    );
                  })();
                };
              if (ed.skipAnimation) return tG(n), tK(i, !1);
              try {
                let t;
                (t = ee.arr(e)
                  ? (async (e) => {
                      for (let t of e) await m(t);
                    })(e)
                  : Promise.resolve(e(m, i.stop.bind(i)))),
                  await Promise.all([t.then(u), p]),
                  (d = tK(i.get(), !0, !1));
              } catch (e) {
                if (e instanceof tX) d = e.result;
                else if (e instanceof tY) d = e.result;
                else throw e;
              } finally {
                r == n.asyncId &&
                  ((n.asyncId = s),
                  (n.asyncTo = s ? a : void 0),
                  (n.promise = s ? l : void 0));
              }
              return (
                ee.fun(o) &&
                  $.batchedUpdates(() => {
                    o(d, i, i.item);
                  }),
                d
              );
            })())
          : l;
      }
      function tG(e, t) {
        es(e.timeouts, (e) => e.cancel()),
          e.pauseQueue.clear(),
          e.resumeQueue.clear(),
          (e.asyncId = e.asyncTo = e.promise = void 0),
          t && (e.cancelId = t);
      }
      class tX extends Error {
        constructor() {
          super(
            "An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."
          ),
            (this.result = void 0);
        }
      }
      class tY extends Error {
        constructor() {
          super("SkipAnimationSignal"), (this.result = void 0);
        }
      }
      let tZ = (e) => e instanceof t0,
        tJ = 1;
      class t0 extends eQ {
        constructor(...e) {
          super(...e),
            (this.id = tJ++),
            (this.key = void 0),
            (this._priority = 0);
        }
        get priority() {
          return this._priority;
        }
        set priority(e) {
          this._priority != e &&
            ((this._priority = e), this._onPriorityChange(e));
        }
        get() {
          let e = tc(this);
          return e && e.getValue();
        }
        to(...e) {
          return ed.to(this, e);
        }
        interpolate(...e) {
          return (
            e6(
              `${e7}The "interpolate" function is deprecated in v9 (use "to" instead)`
            ),
            ed.to(this, e)
          );
        }
        toJSON() {
          return this.get();
        }
        observerAdded(e) {
          1 == e && this._attach();
        }
        observerRemoved(e) {
          0 == e && this._detach();
        }
        _attach() {}
        _detach() {}
        _onChange(e, t = !1) {
          eK(this, { type: "change", parent: this, value: e, idle: t });
        }
        _onPriorityChange(e) {
          this.idle || eg.sort(this),
            eK(this, { type: "priority", parent: this, priority: e });
        }
      }
      let t1 = Symbol.for("SpringPhase"),
        t3 = (e) => (1 & e[t1]) > 0,
        t2 = (e) => (2 & e[t1]) > 0,
        t9 = (e) => (4 & e[t1]) > 0,
        t5 = (e, t) => (t ? (e[t1] |= 3) : (e[t1] &= -3)),
        t4 = (e, t) => (t ? (e[t1] |= 4) : (e[t1] &= -5));
      class t7 extends t0 {
        constructor(e, t) {
          if (
            (super(),
            (this.key = void 0),
            (this.animation = new tq()),
            (this.queue = void 0),
            (this.defaultProps = {}),
            (this._state = {
              paused: !1,
              delayed: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._pendingCalls = new Set()),
            (this._lastCallId = 0),
            (this._lastToId = 0),
            (this._memoizedDuration = 0),
            !ee.und(e) || !ee.und(t))
          ) {
            let n = ee.obj(e) ? tO({}, e) : tO({}, t, { from: e });
            ee.und(n.default) && (n.default = !0), this.start(n);
          }
        }
        get idle() {
          return !(t2(this) || this._state.asyncTo) || t9(this);
        }
        get goal() {
          return eB(this.animation.to);
        }
        get velocity() {
          let e = tc(this);
          return e instanceof tf
            ? e.lastVelocity || 0
            : e.getPayload().map((e) => e.lastVelocity || 0);
        }
        get hasAnimated() {
          return t3(this);
        }
        get isAnimating() {
          return t2(this);
        }
        get isPaused() {
          return t9(this);
        }
        get isDelayed() {
          return this._state.delayed;
        }
        advance(e) {
          let t = !0,
            n = !1,
            i = this.animation,
            { config: r, toValues: s } = i,
            o = th(i.to);
          !o && eU(i.to) && (s = er(eB(i.to))),
            i.values.forEach((a, l) => {
              if (a.done) return;
              let u = a.constructor == tm ? 1 : o ? o[l].lastPosition : s[l],
                c = i.immediate,
                d = u;
              if (!c) {
                let t;
                if (((d = a.lastPosition), r.tension <= 0)) {
                  a.done = !0;
                  return;
                }
                let n = (a.elapsedTime += e),
                  s = i.fromValues[l],
                  o =
                    null != a.v0
                      ? a.v0
                      : (a.v0 = ee.arr(r.velocity)
                          ? r.velocity[l]
                          : r.velocity),
                  h =
                    r.precision ||
                    (s == u ? 0.005 : Math.min(1, 0.001 * Math.abs(u - s)));
                if (ee.und(r.duration)) {
                  if (r.decay) {
                    let e = !0 === r.decay ? 0.998 : r.decay,
                      i = Math.exp(-(1 - e) * n);
                    (d = s + (o / (1 - e)) * (1 - i)),
                      (c = Math.abs(a.lastPosition - d) <= h),
                      (t = o * i);
                  } else {
                    t = null == a.lastVelocity ? o : a.lastVelocity;
                    let n = r.restVelocity || h / 10,
                      i = r.clamp ? 0 : r.bounce,
                      l = !ee.und(i),
                      p = s == u ? a.v0 > 0 : s < u,
                      f = Math.ceil(e / 1);
                    for (
                      let e = 0;
                      e < f &&
                      !(!(Math.abs(t) > n) && (c = Math.abs(u - d) <= h));
                      ++e
                    ) {
                      l && (d == u || d > u == p) && ((t = -t * i), (d = u));
                      let e =
                        (-(1e-6 * r.tension) * (d - u) +
                          -(0.001 * r.friction) * t) /
                        r.mass;
                      (t += 1 * e), (d += 1 * t);
                    }
                  }
                } else {
                  let i = 1;
                  r.duration > 0 &&
                    (this._memoizedDuration !== r.duration &&
                      ((this._memoizedDuration = r.duration),
                      a.durationProgress > 0 &&
                        ((a.elapsedTime = r.duration * a.durationProgress),
                        (n = a.elapsedTime += e))),
                    (i =
                      (i = (r.progress || 0) + n / this._memoizedDuration) > 1
                        ? 1
                        : i < 0
                        ? 0
                        : i),
                    (a.durationProgress = i)),
                    (t =
                      ((d = s + r.easing(i) * (u - s)) - a.lastPosition) / e),
                    (c = 1 == i);
                }
                (a.lastVelocity = t),
                  Number.isNaN(d) &&
                    (console.warn("Got NaN while animating:", this), (c = !0));
              }
              o && !o[l].done && (c = !1),
                c ? (a.done = !0) : (t = !1),
                a.setValue(d, r.round) && (n = !0);
            });
          let a = tc(this),
            l = a.getValue();
          if (t) {
            let e = eB(i.to);
            (l !== e || n) && !r.decay
              ? (a.setValue(e), this._onChange(e))
              : n && r.decay && this._onChange(l),
              this._stop();
          } else n && this._onChange(l);
        }
        set(e) {
          return (
            $.batchedUpdates(() => {
              this._stop(), this._focus(e), this._set(e);
            }),
            this
          );
        }
        pause() {
          this._update({ pause: !0 });
        }
        resume() {
          this._update({ pause: !1 });
        }
        finish() {
          if (t2(this)) {
            let { to: e, config: t } = this.animation;
            $.batchedUpdates(() => {
              this._onStart(), t.decay || this._set(e, !1), this._stop();
            });
          }
          return this;
        }
        update(e) {
          return (this.queue || (this.queue = [])).push(e), this;
        }
        start(e, t) {
          let n;
          return (
            ee.und(e)
              ? ((n = this.queue || []), (this.queue = []))
              : (n = [ee.obj(e) ? e : tO({}, t, { to: e })]),
            Promise.all(n.map((e) => this._update(e))).then((e) => tB(this, e))
          );
        }
        stop(e) {
          let { to: t } = this.animation;
          return (
            this._focus(this.get()),
            tG(this._state, e && this._lastCallId),
            $.batchedUpdates(() => this._stop(t, e)),
            this
          );
        }
        reset() {
          this._update({ reset: !0 });
        }
        eventObserved(e) {
          "change" == e.type
            ? this._start()
            : "priority" == e.type && (this.priority = e.priority + 1);
        }
        _prepareNode(e) {
          let t = this.key || "",
            { to: n, from: i } = e;
          (null == (n = ee.obj(n) ? n[t] : n) || tD(n)) && (n = void 0),
            null == (i = ee.obj(i) ? i[t] : i) && (i = void 0);
          let r = { to: n, from: i };
          return (
            t3(this) ||
              (e.reverse && ([n, i] = [i, n]),
              (i = eB(i)),
              ee.und(i) ? tc(this) || this._set(n) : this._set(i)),
            r
          );
        }
        _update(e, t) {
          let n = tO({}, e),
            { key: i, defaultProps: r } = this;
          n.default &&
            Object.assign(
              r,
              tI(n, (e, t) => (/^on/.test(t) ? tA(e, i) : e))
            ),
            ni(this, n, "onProps"),
            nr(this, "onProps", n, this);
          let s = this._prepareNode(n);
          if (Object.isFrozen(this))
            throw Error(
              "Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?"
            );
          let o = this._state;
          return tU(++this._lastCallId, {
            key: i,
            props: n,
            defaultProps: r,
            state: o,
            actions: {
              pause: () => {
                t9(this) ||
                  (t4(this, !0),
                  eo(o.pauseQueue),
                  nr(
                    this,
                    "onPause",
                    tK(this, t8(this, this.animation.to)),
                    this
                  ));
              },
              resume: () => {
                t9(this) &&
                  (t4(this, !1),
                  t2(this) && this._resume(),
                  eo(o.resumeQueue),
                  nr(
                    this,
                    "onResume",
                    tK(this, t8(this, this.animation.to)),
                    this
                  ));
              },
              start: this._merge.bind(this, s),
            },
          }).then((e) => {
            if (n.loop && e.finished && !(t && e.noop)) {
              let e = t6(n);
              if (e) return this._update(e, !0);
            }
            return e;
          });
        }
        _merge(e, t, n) {
          if (t.cancel) return this.stop(!0), n(tQ(this));
          let i = !ee.und(e.to),
            r = !ee.und(e.from);
          if (i || r) {
            if (!(t.callId > this._lastToId)) return n(tQ(this));
            this._lastToId = t.callId;
          }
          let { key: s, defaultProps: o, animation: a } = this,
            { to: l, from: u } = a,
            { to: c = l, from: d = u } = e;
          r && !i && (!t.default || ee.und(c)) && (c = d),
            t.reverse && ([c, d] = [d, c]);
          let h = !et(d, u);
          h && (a.from = d), (d = eB(d));
          let p = !et(c, l);
          p && this._focus(c);
          let f = tD(t.to),
            { config: m } = a,
            { decay: g, velocity: v } = m;
          (i || r) && (m.velocity = 0),
            t.config &&
              !f &&
              (function (e, t, n) {
                for (let i in (n &&
                  (tz((n = tO({}, n)), t), (t = tO({}, n, t))),
                tz(e, t),
                Object.assign(e, t),
                tL))
                  null == e[i] && (e[i] = tL[i]);
                let { mass: i, frequency: r, damping: s } = e;
                ee.und(r) ||
                  (r < 0.01 && (r = 0.01),
                  s < 0 && (s = 0),
                  (e.tension = Math.pow((2 * Math.PI) / r, 2) * i),
                  (e.friction = (4 * Math.PI * s * i) / r));
              })(
                m,
                tP(t.config, s),
                t.config !== o.config ? tP(o.config, s) : void 0
              );
          let y = tc(this);
          if (!y || ee.und(c)) return n(tK(this, !0));
          let b = ee.und(t.reset)
              ? r && !t.default
              : !ee.und(d) && tE(t.reset, s),
            w = b ? d : this.get(),
            _ = tV(c),
            k = ee.num(_) || ee.arr(_) || tt(_),
            S = !f && (!k || tE(o.immediate || t.immediate, s));
          if (p) {
            let e = tw(c);
            if (e !== y.constructor) {
              if (S) y = this._set(_);
              else
                throw Error(
                  `Cannot animate between ${y.constructor.name} and ${e.name}, as the "to" prop suggests`
                );
            }
          }
          let C = y.constructor,
            x = eU(c),
            O = !1;
          if (!x) {
            let e = b || (!t3(this) && h);
            (p || e) && (x = !(O = et(tV(w), _))),
              ((et(a.immediate, S) || S) &&
                et(m.decay, g) &&
                et(m.velocity, v)) ||
                (x = !0);
          }
          if (
            (O && t2(this) && (a.changed && !b ? (x = !0) : x || this._stop(l)),
            !f &&
              ((x || eU(l)) &&
                ((a.values = y.getPayload()),
                (a.toValues = eU(c) ? null : C == tm ? [1] : er(_))),
              a.immediate == S || ((a.immediate = S), S || b || this._set(l)),
              x))
          ) {
            let { onRest: e } = a;
            en(nn, (e) => ni(this, t, e));
            let i = tK(this, t8(this, l));
            eo(this._pendingCalls, i),
              this._pendingCalls.add(n),
              a.changed &&
                $.batchedUpdates(() => {
                  (a.changed = !b),
                    null == e || e(i, this),
                    b
                      ? tP(o.onRest, i)
                      : null == a.onStart || a.onStart(i, this);
                });
          }
          b && this._set(w),
            f
              ? n(tW(t.to, t, this._state, this))
              : x
              ? this._start()
              : t2(this) && !p
              ? this._pendingCalls.add(n)
              : n(tH(w));
        }
        _focus(e) {
          let t = this.animation;
          e !== t.to &&
            (eH(this) && this._detach(),
            (t.to = e),
            eH(this) && this._attach());
        }
        _attach() {
          let e = 0,
            { to: t } = this.animation;
          eU(t) && (eG(t, this), tZ(t) && (e = t.priority + 1)),
            (this.priority = e);
        }
        _detach() {
          let { to: e } = this.animation;
          eU(e) && eX(e, this);
        }
        _set(e, t = !0) {
          let n = eB(e);
          if (!ee.und(n)) {
            let e = tc(this);
            if (!e || !et(n, e.getValue())) {
              let i = tw(n);
              e && e.constructor == i ? e.setValue(n) : td(this, i.create(n)),
                e &&
                  $.batchedUpdates(() => {
                    this._onChange(n, t);
                  });
            }
          }
          return tc(this);
        }
        _onStart() {
          let e = this.animation;
          e.changed ||
            ((e.changed = !0),
            nr(this, "onStart", tK(this, t8(this, e.to)), this));
        }
        _onChange(e, t) {
          t || (this._onStart(), tP(this.animation.onChange, e, this)),
            tP(this.defaultProps.onChange, e, this),
            super._onChange(e, t);
        }
        _start() {
          let e = this.animation;
          tc(this).reset(eB(e.to)),
            e.immediate || (e.fromValues = e.values.map((e) => e.lastPosition)),
            t2(this) || (t5(this, !0), t9(this) || this._resume());
        }
        _resume() {
          ed.skipAnimation ? this.finish() : eg.start(this);
        }
        _stop(e, t) {
          if (t2(this)) {
            t5(this, !1);
            let n = this.animation;
            en(n.values, (e) => {
              e.done = !0;
            }),
              n.toValues && (n.onChange = n.onPause = n.onResume = void 0),
              eK(this, { type: "idle", parent: this });
            let i = t
              ? tQ(this.get())
              : tK(this.get(), t8(this, null != e ? e : n.to));
            eo(this._pendingCalls, i),
              n.changed && ((n.changed = !1), nr(this, "onRest", i, this));
          }
        }
      }
      function t8(e, t) {
        let n = tV(t);
        return et(tV(e.get()), n);
      }
      function t6(e, t = e.loop, n = e.to) {
        let i = tP(t);
        if (i) {
          let r = !0 !== i && t$(i),
            s = (r || e).reverse,
            o = !r || r.reset;
          return ne(
            tO(
              {},
              e,
              {
                loop: t,
                default: !1,
                pause: void 0,
                to: !s || tD(n) ? n : void 0,
                from: o ? e.from : void 0,
                reset: o,
              },
              r
            )
          );
        }
      }
      function ne(e) {
        let { to: t, from: n } = (e = t$(e)),
          i = new Set();
        return (
          ee.obj(t) && nt(t, i),
          ee.obj(n) && nt(n, i),
          (e.keys = i.size ? Array.from(i) : null),
          e
        );
      }
      function nt(e, t) {
        ei(e, (e, n) => null != e && t.add(n));
      }
      let nn = ["onStart", "onRest", "onChange", "onPause", "onResume"];
      function ni(e, t, n) {
        e.animation[n] = t[n] !== tM(t, n) ? tA(t[n], e.key) : void 0;
      }
      function nr(e, t, ...n) {
        var i, r, s, o;
        null == (i = (r = e.animation)[t]) || i.call(r, ...n),
          null == (s = (o = e.defaultProps)[t]) || s.call(o, ...n);
      }
      let ns = ["onStart", "onChange", "onRest"],
        no = 1;
      class na {
        constructor(e, t) {
          (this.id = no++),
            (this.springs = {}),
            (this.queue = []),
            (this.ref = void 0),
            (this._flush = void 0),
            (this._initialProps = void 0),
            (this._lastAsyncId = 0),
            (this._active = new Set()),
            (this._changed = new Set()),
            (this._started = !1),
            (this._item = void 0),
            (this._state = {
              paused: !1,
              pauseQueue: new Set(),
              resumeQueue: new Set(),
              timeouts: new Set(),
            }),
            (this._events = {
              onStart: new Map(),
              onChange: new Map(),
              onRest: new Map(),
            }),
            (this._onFrame = this._onFrame.bind(this)),
            t && (this._flush = t),
            e && this.start(tO({ default: !0 }, e));
        }
        get idle() {
          return (
            !this._state.asyncTo &&
            Object.values(this.springs).every(
              (e) => e.idle && !e.isDelayed && !e.isPaused
            )
          );
        }
        get item() {
          return this._item;
        }
        set item(e) {
          this._item = e;
        }
        get() {
          let e = {};
          return this.each((t, n) => (e[n] = t.get())), e;
        }
        set(e) {
          for (let t in e) {
            let n = e[t];
            ee.und(n) || this.springs[t].set(n);
          }
        }
        update(e) {
          return e && this.queue.push(ne(e)), this;
        }
        start(e) {
          let { queue: t } = this;
          return (e ? (t = er(e).map(ne)) : (this.queue = []), this._flush)
            ? this._flush(this, t)
            : (nf(this, t), nl(this, t));
        }
        stop(e, t) {
          if ((!!e !== e && (t = e), t)) {
            let n = this.springs;
            en(er(t), (t) => n[t].stop(!!e));
          } else
            tG(this._state, this._lastAsyncId), this.each((t) => t.stop(!!e));
          return this;
        }
        pause(e) {
          if (ee.und(e)) this.start({ pause: !0 });
          else {
            let t = this.springs;
            en(er(e), (e) => t[e].pause());
          }
          return this;
        }
        resume(e) {
          if (ee.und(e)) this.start({ pause: !1 });
          else {
            let t = this.springs;
            en(er(e), (e) => t[e].resume());
          }
          return this;
        }
        each(e) {
          ei(this.springs, e);
        }
        _onFrame() {
          let { onStart: e, onChange: t, onRest: n } = this._events,
            i = this._active.size > 0,
            r = this._changed.size > 0;
          ((i && !this._started) || (r && !this._started)) &&
            ((this._started = !0),
            es(e, ([e, t]) => {
              (t.value = this.get()), e(t, this, this._item);
            }));
          let s = !i && this._started,
            o = r || (s && n.size) ? this.get() : null;
          r &&
            t.size &&
            es(t, ([e, t]) => {
              (t.value = o), e(t, this, this._item);
            }),
            s &&
              ((this._started = !1),
              es(n, ([e, t]) => {
                (t.value = o), e(t, this, this._item);
              }));
        }
        eventObserved(e) {
          if ("change" == e.type)
            this._changed.add(e.parent), e.idle || this._active.add(e.parent);
          else {
            if ("idle" != e.type) return;
            this._active.delete(e.parent);
          }
          $.onFrame(this._onFrame);
        }
      }
      function nl(e, t) {
        return Promise.all(t.map((t) => nu(e, t))).then((t) => tB(e, t));
      }
      async function nu(e, t, n) {
        let { keys: i, to: r, from: s, loop: o, onRest: a, onResolve: l } = t,
          u = ee.obj(t.default) && t.default;
        o && (t.loop = !1),
          !1 === r && (t.to = null),
          !1 === s && (t.from = null);
        let c = ee.arr(r) || ee.fun(r) ? r : void 0;
        c
          ? ((t.to = void 0), (t.onRest = void 0), u && (u.onRest = void 0))
          : en(ns, (n) => {
              let i = t[n];
              if (ee.fun(i)) {
                let r = e._events[n];
                (t[n] = ({ finished: e, cancelled: t }) => {
                  let n = r.get(i);
                  n
                    ? (e || (n.finished = !1), t && (n.cancelled = !0))
                    : r.set(i, {
                        value: null,
                        finished: e || !1,
                        cancelled: t || !1,
                      });
                }),
                  u && (u[n] = t[n]);
              }
            });
        let d = e._state;
        !d.paused === t.pause
          ? ((d.paused = t.pause), eo(t.pause ? d.pauseQueue : d.resumeQueue))
          : d.paused && (t.pause = !0);
        let h = (i || Object.keys(e.springs)).map((n) => e.springs[n].start(t)),
          p = !0 === t.cancel || !0 === tM(t, "cancel");
        (c || (p && d.asyncId)) &&
          h.push(
            tU(++e._lastAsyncId, {
              props: t,
              state: d,
              actions: {
                pause: Z,
                resume: Z,
                start(t, n) {
                  p
                    ? (tG(d, e._lastAsyncId), n(tQ(e)))
                    : ((t.onRest = a), n(tW(c, t, d, e)));
                },
              },
            })
          ),
          d.paused &&
            (await new Promise((e) => {
              d.resumeQueue.add(e);
            }));
        let f = tB(e, await Promise.all(h));
        if (o && f.finished && !(n && f.noop)) {
          let n = t6(t, o, r);
          if (n) return nf(e, [n]), nu(e, n, !0);
        }
        return l && $.batchedUpdates(() => l(f, e, e.item)), f;
      }
      function nc(e, t) {
        let n = tO({}, e.springs);
        return (
          t &&
            en(er(t), (e) => {
              ee.und(e.keys) && (e = ne(e)),
                ee.obj(e.to) || (e = tO({}, e, { to: void 0 })),
                np(n, e, (e) => nh(e));
            }),
          nd(e, n),
          n
        );
      }
      function nd(e, t) {
        ei(t, (t, n) => {
          e.springs[n] || ((e.springs[n] = t), eG(t, e));
        });
      }
      function nh(e, t) {
        let n = new t7();
        return (n.key = e), t && eG(n, t), n;
      }
      function np(e, t, n) {
        t.keys &&
          en(t.keys, (i) => {
            (e[i] || (e[i] = n(i)))._prepareNode(t);
          });
      }
      function nf(e, t) {
        en(t, (t) => {
          np(e.springs, t, (t) => nh(t, e));
        });
      }
      let nm = ["children"],
        ng = (e) => {
          let { children: t } = e,
            n = (function (e, t) {
              if (null == e) return {};
              var n,
                i,
                r = {},
                s = Object.keys(e);
              for (i = 0; i < s.length; i++)
                (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
              return r;
            })(e, nm),
            i = (0, c.useContext)(nv),
            r = n.pause || !!i.pause,
            s = n.immediate || !!i.immediate;
          n = (function (e, t) {
            let [n] = (0, c.useState)(() => ({ inputs: t, result: e() })),
              i = (0, c.useRef)(),
              r = i.current,
              s = r;
            return (
              s
                ? (t &&
                    s.inputs &&
                    (function (e, t) {
                      if (e.length !== t.length) return !1;
                      for (let n = 0; n < e.length; n++)
                        if (e[n] !== t[n]) return !1;
                      return !0;
                    })(t, s.inputs)) ||
                  (s = { inputs: t, result: e() })
                : (s = n),
              (0, c.useEffect)(() => {
                (i.current = s), r == n && (n.inputs = n.result = void 0);
              }, [s]),
              s.result
            );
          })(() => ({ pause: r, immediate: s }), [r, s]);
          let { Provider: o } = nv;
          return c.createElement(o, { value: n }, t);
        },
        nv =
          ((l = {}),
          Object.assign(ng, c.createContext(l)),
          (ng.Provider._context = ng),
          (ng.Consumer._context = ng),
          ng);
      (ng.Provider = nv.Provider), (ng.Consumer = nv.Consumer);
      let ny = () => {
        let e = [],
          t = function (t) {
            te(
              `${e7}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`
            );
            let i = [];
            return (
              en(e, (e, r) => {
                if (ee.und(t)) i.push(e.start());
                else {
                  let s = n(t, e, r);
                  s && i.push(e.start(s));
                }
              }),
              i
            );
          };
        (t.current = e),
          (t.add = function (t) {
            e.includes(t) || e.push(t);
          }),
          (t.delete = function (t) {
            let n = e.indexOf(t);
            ~n && e.splice(n, 1);
          }),
          (t.pause = function () {
            return en(e, (e) => e.pause(...arguments)), this;
          }),
          (t.resume = function () {
            return en(e, (e) => e.resume(...arguments)), this;
          }),
          (t.set = function (t) {
            en(e, (e) => e.set(t));
          }),
          (t.start = function (t) {
            let n = [];
            return (
              en(e, (e, i) => {
                if (ee.und(t)) n.push(e.start());
                else {
                  let r = this._getProps(t, e, i);
                  r && n.push(e.start(r));
                }
              }),
              n
            );
          }),
          (t.stop = function () {
            return en(e, (e) => e.stop(...arguments)), this;
          }),
          (t.update = function (t) {
            return en(e, (e, n) => e.update(this._getProps(t, e, n))), this;
          });
        let n = function (e, t, n) {
          return ee.fun(e) ? e(n, t) : e;
        };
        return (t._getProps = n), t;
      };
      function nb(e, t) {
        let n = ee.fun(e),
          [[i], r] = (function (e, t, n) {
            let i = ee.fun(t) && t;
            i && !n && (n = []);
            let r = (0, c.useMemo)(
                () => (i || 3 == arguments.length ? ny() : void 0),
                []
              ),
              s = (0, c.useRef)(0),
              o = tr(),
              a = (0, c.useMemo)(
                () => ({
                  ctrls: [],
                  queue: [],
                  flush(e, t) {
                    let n = nc(e, t);
                    return !(s.current > 0) ||
                      a.queue.length ||
                      Object.keys(n).some((t) => !e.springs[t])
                      ? new Promise((i) => {
                          nd(e, n),
                            a.queue.push(() => {
                              i(nl(e, t));
                            }),
                            o();
                        })
                      : nl(e, t);
                  },
                }),
                []
              ),
              l = (0, c.useRef)([...a.ctrls]),
              u = [],
              d = ta(e) || 0;
            function h(e, n) {
              for (let r = e; r < n; r++) {
                let e = l.current[r] || (l.current[r] = new na(null, a.flush)),
                  n = i ? i(r, e) : t[r];
                n &&
                  (u[r] = (function (e) {
                    let t = ne(e);
                    return ee.und(t.default) && (t.default = tI(t)), t;
                  })(n));
              }
            }
            (0, c.useMemo)(() => {
              en(l.current.slice(e, d), (e) => {
                var t;
                null == (t = e.ref) || t.delete(e),
                  null == r || r.delete(e),
                  e.stop(!0);
              }),
                (l.current.length = e),
                h(d, e);
            }, [e]),
              (0, c.useMemo)(() => {
                h(0, Math.min(d, e));
              }, n);
            let p = l.current.map((e, t) => nc(e, u[t])),
              f = (0, c.useContext)(ng),
              m = ta(f),
              g =
                f !== m &&
                (function (e) {
                  for (let t in e) return !0;
                  return !1;
                })(f);
            tn(() => {
              s.current++, (a.ctrls = l.current);
              let { queue: e } = a;
              e.length && ((a.queue = []), en(e, (e) => e())),
                en(l.current, (e, t) => {
                  null == r || r.add(e), g && e.start({ default: f });
                  let n = u[t];
                  n &&
                    ((function (e, t) {
                      if (t && e.ref !== t) {
                        var n;
                        null == (n = e.ref) || n.delete(e),
                          t.add(e),
                          (e.ref = t);
                      }
                    })(e, n.ref),
                    e.ref ? e.queue.push(n) : e.start(n));
                });
            }),
              ts(() => () => {
                en(a.ctrls, (e) => e.stop(!0));
              });
            let v = p.map((e) => tO({}, e));
            return r ? [v, r] : v;
          })(1, n ? e : [e], n ? t || [] : t);
        return n || 2 == arguments.length ? [i, r] : i;
      }
      ((u = o || (o = {})).MOUNT = "mount"),
        (u.ENTER = "enter"),
        (u.UPDATE = "update"),
        (u.LEAVE = "leave");
      class nw extends t0 {
        constructor(e, t) {
          super(),
            (this.key = void 0),
            (this.idle = !0),
            (this.calc = void 0),
            (this._active = new Set()),
            (this.source = e),
            (this.calc = eN(...t));
          let n = this._get();
          td(this, tw(n).create(n));
        }
        advance(e) {
          let t = this._get();
          et(t, this.get()) ||
            (tc(this).setValue(t), this._onChange(t, this.idle)),
            !this.idle && nk(this._active) && nS(this);
        }
        _get() {
          let e = ee.arr(this.source)
            ? this.source.map(eB)
            : er(eB(this.source));
          return this.calc(...e);
        }
        _start() {
          this.idle &&
            !nk(this._active) &&
            ((this.idle = !1),
            en(th(this), (e) => {
              e.done = !1;
            }),
            ed.skipAnimation
              ? ($.batchedUpdates(() => this.advance()), nS(this))
              : eg.start(this));
        }
        _attach() {
          let e = 1;
          en(er(this.source), (t) => {
            eU(t) && eG(t, this),
              tZ(t) &&
                (t.idle || this._active.add(t),
                (e = Math.max(e, t.priority + 1)));
          }),
            (this.priority = e),
            this._start();
        }
        _detach() {
          en(er(this.source), (e) => {
            eU(e) && eX(e, this);
          }),
            this._active.clear(),
            nS(this);
        }
        eventObserved(e) {
          "change" == e.type
            ? e.idle
              ? this.advance()
              : (this._active.add(e.parent), this._start())
            : "idle" == e.type
            ? this._active.delete(e.parent)
            : "priority" == e.type &&
              (this.priority = er(this.source).reduce(
                (e, t) => Math.max(e, (tZ(t) ? t.priority : 0) + 1),
                0
              ));
        }
      }
      function n_(e) {
        return !1 !== e.idle;
      }
      function nk(e) {
        return !e.size || Array.from(e).every(n_);
      }
      function nS(e) {
        e.idle ||
          ((e.idle = !0),
          en(th(e), (e) => {
            e.done = !0;
          }),
          eK(e, { type: "idle", parent: e }));
      }
      ed.assign({ createStringInterpolator: e4, to: (e, t) => new nw(e, t) }),
        eg.advance;
      var nC = n(54887);
      function nx(e, t) {
        if (null == e) return {};
        var n,
          i,
          r = {},
          s = Object.keys(e);
        for (i = 0; i < s.length; i++)
          (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r;
      }
      let nO = ["style", "children", "scrollTop", "scrollLeft", "viewBox"],
        nP = /^--/,
        nE = {},
        nA = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        nM = (e, t) => e + t.charAt(0).toUpperCase() + t.substring(1),
        nj = ["Webkit", "Ms", "Moz", "O"];
      nA = Object.keys(nA).reduce(
        (e, t) => (nj.forEach((n) => (e[nM(n, t)] = e[t])), e),
        nA
      );
      let nI = ["x", "y", "z"],
        nT = /^(matrix|translate|scale|rotate|skew)/,
        nR = /^(translate)/,
        n$ = /^(rotate|skew)/,
        nV = (e, t) => (ee.num(e) && 0 !== e ? e + t : e),
        nD = (e, t) =>
          ee.arr(e)
            ? e.every((e) => nD(e, t))
            : ee.num(e)
            ? e === t
            : parseFloat(e) === t;
      class nL extends tv {
        constructor(e) {
          let { x: t, y: n, z: i } = e,
            r = nx(e, nI),
            s = [],
            o = [];
          (t || n || i) &&
            (s.push([t || 0, n || 0, i || 0]),
            o.push((e) => [
              `translate3d(${e.map((e) => nV(e, "px")).join(",")})`,
              nD(e, 0),
            ])),
            ei(r, (e, t) => {
              if ("transform" === t)
                s.push([e || ""]), o.push((e) => [e, "" === e]);
              else if (nT.test(t)) {
                if ((delete r[t], ee.und(e))) return;
                let n = nR.test(t) ? "px" : n$.test(t) ? "deg" : "";
                s.push(er(e)),
                  o.push(
                    "rotate3d" === t
                      ? ([e, t, i, r]) => [
                          `rotate3d(${e},${t},${i},${nV(r, n)})`,
                          nD(r, 0),
                        ]
                      : (e) => [
                          `${t}(${e.map((e) => nV(e, n)).join(",")})`,
                          nD(e, t.startsWith("scale") ? 1 : 0),
                        ]
                  );
              }
            }),
            s.length && (r.transform = new nN(s, o)),
            super(r);
        }
      }
      class nN extends eQ {
        constructor(e, t) {
          super(),
            (this._value = null),
            (this.inputs = e),
            (this.transforms = t);
        }
        get() {
          return this._value || (this._value = this._get());
        }
        _get() {
          let e = "",
            t = !0;
          return (
            en(this.inputs, (n, i) => {
              let r = eB(n[0]),
                [s, o] = this.transforms[i](ee.arr(r) ? r : n.map(eB));
              (e += " " + s), (t = t && o);
            }),
            t ? "none" : e
          );
        }
        observerAdded(e) {
          1 == e && en(this.inputs, (e) => en(e, (e) => eU(e) && eG(e, this)));
        }
        observerRemoved(e) {
          0 == e && en(this.inputs, (e) => en(e, (e) => eU(e) && eX(e, this)));
        }
        eventObserved(e) {
          "change" == e.type && (this._value = null), eK(this, e);
        }
      }
      let nz = ["scrollTop", "scrollLeft"];
      ed.assign({
        batchedUpdates: nC.unstable_batchedUpdates,
        createStringInterpolator: e4,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199,
        },
      });
      let nF = ((
        e,
        {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: n = (e) => new tv(e),
          getComponentProps: i = (e) => e,
        } = {}
      ) => {
        let r = {
            applyAnimatedValues: t,
            createAnimatedStyle: n,
            getComponentProps: i,
          },
          s = (e) => {
            let t = tx(e) || "Anonymous";
            return (
              ((e = ee.str(e)
                ? s[e] || (s[e] = tk(e, r))
                : e[tC] || (e[tC] = tk(e, r))).displayName = `Animated(${t})`),
              e
            );
          };
        return (
          ei(e, (t, n) => {
            ee.arr(e) && (n = tx(t)), (s[n] = s(t));
          }),
          { animated: s }
        );
      })(
        [
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ],
        {
          applyAnimatedValues: function (e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            let n =
                "filter" === e.nodeName ||
                (e.parentNode && "filter" === e.parentNode.nodeName),
              {
                style: i,
                children: r,
                scrollTop: s,
                scrollLeft: o,
                viewBox: a,
              } = t,
              l = nx(t, nO),
              u = Object.values(l),
              c = Object.keys(l).map((t) =>
                n || e.hasAttribute(t)
                  ? t
                  : nE[t] ||
                    (nE[t] = t.replace(
                      /([A-Z])/g,
                      (e) => "-" + e.toLowerCase()
                    ))
              );
            for (let t in (void 0 !== r && (e.textContent = r), i))
              if (i.hasOwnProperty(t)) {
                var d;
                let n =
                  null == (d = i[t]) || "boolean" == typeof d || "" === d
                    ? ""
                    : "number" != typeof d ||
                      0 === d ||
                      nP.test(t) ||
                      (nA.hasOwnProperty(t) && nA[t])
                    ? ("" + d).trim()
                    : d + "px";
                nP.test(t) ? e.style.setProperty(t, n) : (e.style[t] = n);
              }
            c.forEach((t, n) => {
              e.setAttribute(t, u[n]);
            }),
              void 0 !== s && (e.scrollTop = s),
              void 0 !== o && (e.scrollLeft = o),
              void 0 !== a && e.setAttribute("viewBox", a);
          },
          createAnimatedStyle: (e) => new nL(e),
          getComponentProps: (e) => nx(e, nz),
        }
      ).animated;
      function nq(e, t) {
        if (a && e) {
          let n = ("function" == typeof e ? e() : e) || document.body;
          return (0, nC.createPortal)(t, n);
        }
        return t;
      }
      let nU = (e) =>
          !(function (e, t, n) {
            let i = (function (e) {
              let t = (0, c.useRef)(e);
              return e && (t.current = !0), !!t.current;
            })(e);
            return !!t || !!e || (!!i && !n);
          })(e.active, e.forceRender, e.destroyOnClose)
            ? null
            : e.children,
        nB = { click: "onClick", touchstart: "onTouchStart" };
      function nH(e, t) {
        let n = Object.assign({}, t.props);
        for (let i of e) {
          let e = nB[i];
          n[e] = function (n) {
            var i, r;
            n.stopPropagation(),
              null === (r = (i = t.props)[e]) || void 0 === r || r.call(i, n);
          };
        }
        return c.cloneElement(t, n);
      }
      let nK = "adm-mask",
        nQ = { default: 0.55, thin: 0.35, thick: 0.75 },
        nW = { black: "0, 0, 0", white: "255, 255, 255" },
        nG = {
          visible: !0,
          destroyOnClose: !1,
          forceRender: !1,
          color: "black",
          opacity: "default",
          disableBodyScroll: !0,
          getContainer: null,
          stopPropagation: ["click"],
        };
      var nX = (e) => {
        let t = p(nG, e),
          { locale: n } = C(),
          i = (0, c.useRef)(null);
        T(i, t.visible && t.disableBodyScroll);
        let r = (0, c.useMemo)(() => {
            var e;
            let n =
                null !== (e = nQ[t.opacity]) && void 0 !== e ? e : t.opacity,
              i = nW[t.color];
            return i ? "rgba(".concat(i, ", ").concat(n, ")") : t.color;
          }, [t.color, t.opacity]),
          [s, o] = (0, c.useState)(t.visible),
          a = P(),
          { opacity: l } = nb({
            opacity: t.visible ? 1 : 0,
            config: {
              precision: 0.01,
              mass: 1,
              tension: 250,
              friction: 30,
              clamp: !0,
            },
            onStart: () => {
              o(!0);
            },
            onRest: () => {
              var e, n;
              a.current ||
                (o(t.visible),
                t.visible
                  ? null === (e = t.afterShow) || void 0 === e || e.call(t)
                  : null === (n = t.afterClose) || void 0 === n || n.call(t));
            },
          }),
          u = nH(
            t.stopPropagation,
            f(
              t,
              c.createElement(
                nF.div,
                {
                  className: nK,
                  ref: i,
                  "aria-hidden": !0,
                  style: Object.assign(Object.assign({}, t.style), {
                    background: r,
                    opacity: l,
                    display: s ? void 0 : "none",
                  }),
                  onClick: (e) => {
                    var n;
                    e.target === e.currentTarget &&
                      (null === (n = t.onMaskClick) ||
                        void 0 === n ||
                        n.call(t, e));
                  },
                },
                t.onMaskClick &&
                  c.createElement("div", {
                    className: "".concat(nK, "-aria-button"),
                    role: "button",
                    "aria-label": n.Mask.name,
                    onClick: t.onMaskClick,
                  }),
                c.createElement(
                  "div",
                  { className: "".concat(nK, "-content") },
                  t.children
                )
              )
            )
          );
        return c.createElement(
          nU,
          {
            active: s,
            forceRender: t.forceRender,
            destroyOnClose: t.destroyOnClose,
          },
          nq(t.getContainer, u)
        );
      };
      let nY = {
          closeOnMaskClick: !1,
          closeIcon: c.createElement(function (e) {
            return c.createElement(
              "svg",
              Object.assign(
                {
                  width: "1em",
                  height: "1em",
                  viewBox: "0 0 48 48",
                  xmlns: "http://www.w3.org/2000/svg",
                  xmlnsXlink: "http://www.w3.org/1999/xlink",
                },
                e,
                {
                  style: Object.assign({ verticalAlign: "-0.125em" }, e.style),
                  className: ["antd-mobile-icon", e.className]
                    .filter(Boolean)
                    .join(" "),
                }
              ),
              c.createElement(
                "g",
                {
                  id: "CloseOutline-CloseOutline",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                },
                c.createElement(
                  "g",
                  { id: "CloseOutline-编组" },
                  c.createElement("rect", {
                    id: "CloseOutline-矩形",
                    fill: "#FFFFFF",
                    opacity: 0,
                    x: 0,
                    y: 0,
                    width: 48,
                    height: 48,
                  }),
                  c.createElement("path", {
                    d: "M10.6085104,8.11754663 L24.1768397,21.8195031 L24.1768397,21.8195031 L37.7443031,8.1175556 C37.8194278,8.04168616 37.9217669,7.999 38.0285372,7.999 L41.1040268,7.999 C41.3249407,7.999 41.5040268,8.1780861 41.5040268,8.399 C41.5040268,8.50440471 41.4624226,8.60554929 41.3882578,8.68044752 L26.2773302,23.9408235 L26.2773302,23.9408235 L41.5021975,39.3175645 C41.65763,39.4745475 41.6563731,39.7278104 41.4993901,39.8832429 C41.4244929,39.9574004 41.3233534,39.999 41.2179546,39.999 L38.1434012,39.999 C38.0366291,39.999 37.9342885,39.9563124 37.8591634,39.8804408 L24.1768397,26.0621438 L24.1768397,26.0621438 L10.4936501,39.8804497 C10.4185257,39.9563159 10.3161889,39.999 10.2094212,39.999 L7.13584526,39.999 C6.91493136,39.999 6.73584526,39.8199139 6.73584526,39.599 C6.73584526,39.4936017 6.77744443,39.3924627 6.85160121,39.3175656 L22.0763492,23.9408235 L22.0763492,23.9408235 L6.96554081,8.68044639 C6.81010226,8.52346929 6.81134951,8.27020637 6.9683266,8.11476782 C7.04322474,8.04060377 7.14436883,7.999 7.24977299,7.999 L10.3242852,7.999 C10.4310511,7.999 10.5333863,8.04168267 10.6085104,8.11754663 Z",
                    id: "CloseOutline-路径",
                    fill: "currentColor",
                    fillRule: "nonzero",
                  })
                )
              )
            );
          }, null),
          destroyOnClose: !1,
          disableBodyScroll: !0,
          forceRender: !1,
          getContainer: () => document.body,
          mask: !0,
          showCloseButton: !1,
          stopPropagation: ["click"],
          visible: !1,
        },
        nZ = {
          toVector: (e, t) => (
            void 0 === e && (e = t), Array.isArray(e) ? e : [e, e]
          ),
          add: (e, t) => [e[0] + t[0], e[1] + t[1]],
          sub: (e, t) => [e[0] - t[0], e[1] - t[1]],
          addTo(e, t) {
            (e[0] += t[0]), (e[1] += t[1]);
          },
          subTo(e, t) {
            (e[0] -= t[0]), (e[1] -= t[1]);
          },
        };
      function nJ(e, t, n) {
        return 0 === t || Math.abs(t) === 1 / 0
          ? Math.pow(e, 5 * n)
          : (e * t * n) / (t + n * e);
      }
      function n0(e, t, n, i = 0.15) {
        return 0 === i
          ? Math.max(t, Math.min(e, n))
          : e < t
          ? -nJ(t - e, n - t, i) + t
          : e > n
          ? +nJ(e - n, n - t, i) + n
          : e;
      }
      function n1(e, t, n) {
        var i;
        return (
          (t =
            "symbol" ==
            typeof (i = (function (e, t) {
              if ("object" != typeof e || null === e) return e;
              var n = e[Symbol.toPrimitive];
              if (void 0 !== n) {
                var i = n.call(e, t || "default");
                if ("object" != typeof i) return i;
                throw TypeError("@@toPrimitive must return a primitive value.");
              }
              return ("string" === t ? String : Number)(e);
            })(t, "string"))
              ? i
              : String(i)) in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function n3(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t &&
            (i = i.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, i);
        }
        return n;
      }
      function n2(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? n3(Object(n), !0).forEach(function (t) {
                n1(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : n3(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      let n9 = {
        pointer: { start: "down", change: "move", end: "up" },
        mouse: { start: "down", change: "move", end: "up" },
        touch: { start: "start", change: "move", end: "end" },
        gesture: { start: "start", change: "change", end: "end" },
      };
      function n5(e) {
        return e ? e[0].toUpperCase() + e.slice(1) : "";
      }
      let n4 = ["enter", "leave"],
        n7 = ["gotpointercapture", "lostpointercapture"];
      function n8(e) {
        return "touches" in e;
      }
      function n6(e) {
        return n8(e) ? "touch" : "pointerType" in e ? e.pointerType : "mouse";
      }
      function ie(e) {
        return n8(e)
          ? ("touchend" === e.type || "touchcancel" === e.type
              ? e.changedTouches
              : e.targetTouches)[0]
          : e;
      }
      function it(e) {
        let t = ie(e);
        return n8(e) ? t.identifier : t.pointerId;
      }
      function ii(e) {
        let t = ie(e);
        return [t.clientX, t.clientY];
      }
      function ir(e, ...t) {
        return "function" == typeof e ? e(...t) : e;
      }
      function is() {}
      function io(e, t) {
        return Object.assign({}, t, e || {});
      }
      class ia {
        constructor(e, t, n) {
          (this.ctrl = e),
            (this.args = t),
            (this.key = n),
            this.state ||
              ((this.state = {}),
              this.computeValues([0, 0]),
              this.computeInitial(),
              this.init && this.init(),
              this.reset());
        }
        get state() {
          return this.ctrl.state[this.key];
        }
        set state(e) {
          this.ctrl.state[this.key] = e;
        }
        get shared() {
          return this.ctrl.state.shared;
        }
        get eventStore() {
          return this.ctrl.gestureEventStores[this.key];
        }
        get timeoutStore() {
          return this.ctrl.gestureTimeoutStores[this.key];
        }
        get config() {
          return this.ctrl.config[this.key];
        }
        get sharedConfig() {
          return this.ctrl.config.shared;
        }
        get handler() {
          return this.ctrl.handlers[this.key];
        }
        reset() {
          let { state: e, shared: t, ingKey: n, args: i } = this;
          (t[n] = e._active = e.active = e._blocked = e._force = !1),
            (e._step = [!1, !1]),
            (e.intentional = !1),
            (e._movement = [0, 0]),
            (e._distance = [0, 0]),
            (e._direction = [0, 0]),
            (e._delta = [0, 0]),
            (e._bounds = [
              [-1 / 0, 1 / 0],
              [-1 / 0, 1 / 0],
            ]),
            (e.args = i),
            (e.axis = void 0),
            (e.memo = void 0),
            (e.elapsedTime = e.timeDelta = 0),
            (e.direction = [0, 0]),
            (e.distance = [0, 0]),
            (e.overflow = [0, 0]),
            (e._movementBound = [!1, !1]),
            (e.velocity = [0, 0]),
            (e.movement = [0, 0]),
            (e.delta = [0, 0]),
            (e.timeStamp = 0);
        }
        start(e) {
          let t = this.state,
            n = this.config;
          t._active ||
            (this.reset(),
            this.computeInitial(),
            (t._active = !0),
            (t.target = e.target),
            (t.currentTarget = e.currentTarget),
            (t.lastOffset = n.from ? ir(n.from, t) : t.offset),
            (t.offset = t.lastOffset),
            (t.startTime = t.timeStamp = e.timeStamp));
        }
        computeValues(e) {
          let t = this.state;
          (t._values = e), (t.values = this.config.transform(e));
        }
        computeInitial() {
          let e = this.state;
          (e._initial = e._values), (e.initial = e.values);
        }
        compute(e) {
          let { state: t, config: n, shared: i } = this;
          t.args = this.args;
          let r = 0;
          if (
            (e &&
              ((t.event = e),
              n.preventDefault && e.cancelable && t.event.preventDefault(),
              (t.type = e.type),
              (i.touches =
                this.ctrl.pointerIds.size || this.ctrl.touchIds.size),
              (i.locked = !!document.pointerLockElement),
              Object.assign(
                i,
                (function (e) {
                  let t = {};
                  if (
                    ("buttons" in e && (t.buttons = e.buttons), "shiftKey" in e)
                  ) {
                    let { shiftKey: n, altKey: i, metaKey: r, ctrlKey: s } = e;
                    Object.assign(t, {
                      shiftKey: n,
                      altKey: i,
                      metaKey: r,
                      ctrlKey: s,
                    });
                  }
                  return t;
                })(e)
              ),
              (i.down = i.pressed = i.buttons % 2 == 1 || i.touches > 0),
              (r = e.timeStamp - t.timeStamp),
              (t.timeStamp = e.timeStamp),
              (t.elapsedTime = t.timeStamp - t.startTime)),
            t._active)
          ) {
            let e = t._delta.map(Math.abs);
            nZ.addTo(t._distance, e);
          }
          this.axisIntent && this.axisIntent(e);
          let [s, o] = t._movement,
            [a, l] = n.threshold,
            { _step: u, values: c } = t;
          if (
            (n.hasCustomTransform
              ? (!1 === u[0] && (u[0] = Math.abs(s) >= a && c[0]),
                !1 === u[1] && (u[1] = Math.abs(o) >= l && c[1]))
              : (!1 === u[0] && (u[0] = Math.abs(s) >= a && Math.sign(s) * a),
                !1 === u[1] && (u[1] = Math.abs(o) >= l && Math.sign(o) * l)),
            (t.intentional = !1 !== u[0] || !1 !== u[1]),
            !t.intentional)
          )
            return;
          let d = [0, 0];
          if (n.hasCustomTransform) {
            let [e, t] = c;
            (d[0] = !1 !== u[0] ? e - u[0] : 0),
              (d[1] = !1 !== u[1] ? t - u[1] : 0);
          } else
            (d[0] = !1 !== u[0] ? s - u[0] : 0),
              (d[1] = !1 !== u[1] ? o - u[1] : 0);
          this.restrictToAxis && !t._blocked && this.restrictToAxis(d);
          let h = t.offset,
            p = (t._active && !t._blocked) || t.active;
          p &&
            ((t.first = t._active && !t.active),
            (t.last = !t._active && t.active),
            (t.active = i[this.ingKey] = t._active),
            e &&
              (t.first &&
                ("bounds" in n && (t._bounds = ir(n.bounds, t)),
                this.setup && this.setup()),
              (t.movement = d),
              this.computeOffset()));
          let [f, m] = t.offset,
            [[g, v], [y, b]] = t._bounds;
          (t.overflow = [
            f < g ? -1 : f > v ? 1 : 0,
            m < y ? -1 : m > b ? 1 : 0,
          ]),
            (t._movementBound[0] =
              !!t.overflow[0] &&
              (!1 === t._movementBound[0]
                ? t._movement[0]
                : t._movementBound[0])),
            (t._movementBound[1] =
              !!t.overflow[1] &&
              (!1 === t._movementBound[1]
                ? t._movement[1]
                : t._movementBound[1]));
          let w = (t._active && n.rubberband) || [0, 0];
          if (
            ((t.offset = (function (e, [t, n], [i, r]) {
              let [[s, o], [a, l]] = e;
              return [n0(t, s, o, i), n0(n, a, l, r)];
            })(t._bounds, t.offset, w)),
            (t.delta = nZ.sub(t.offset, h)),
            this.computeMovement(),
            p && (!t.last || r > 32))
          ) {
            t.delta = nZ.sub(t.offset, h);
            let e = t.delta.map(Math.abs);
            nZ.addTo(t.distance, e),
              (t.direction = t.delta.map(Math.sign)),
              (t._direction = t._delta.map(Math.sign)),
              !t.first &&
                r > 0 &&
                ((t.velocity = [e[0] / r, e[1] / r]), (t.timeDelta = r));
          }
        }
        emit() {
          let e = this.state,
            t = this.shared,
            n = this.config;
          if (
            (e._active || this.clean(),
            (e._blocked || !e.intentional) && !e._force && !n.triggerAllEvents)
          )
            return;
          let i = this.handler(
            n2(n2(n2({}, t), e), {}, { [this.aliasKey]: e.values })
          );
          void 0 !== i && (e.memo = i);
        }
        clean() {
          this.eventStore.clean(), this.timeoutStore.clean();
        }
      }
      class il extends ia {
        constructor(...e) {
          super(...e), n1(this, "aliasKey", "xy");
        }
        reset() {
          super.reset(), (this.state.axis = void 0);
        }
        init() {
          (this.state.offset = [0, 0]), (this.state.lastOffset = [0, 0]);
        }
        computeOffset() {
          this.state.offset = nZ.add(
            this.state.lastOffset,
            this.state.movement
          );
        }
        computeMovement() {
          this.state.movement = nZ.sub(
            this.state.offset,
            this.state.lastOffset
          );
        }
        axisIntent(e) {
          let t = this.state,
            n = this.config;
          if (!t.axis && e) {
            let i =
              "object" == typeof n.axisThreshold
                ? n.axisThreshold[n6(e)]
                : n.axisThreshold;
            t.axis = (function ([e, t], n) {
              let i = Math.abs(e),
                r = Math.abs(t);
              return i > r && i > n ? "x" : r > i && r > n ? "y" : void 0;
            })(t._movement, i);
          }
          t._blocked =
            ((n.lockDirection || !!n.axis) && !t.axis) ||
            (!!n.axis && n.axis !== t.axis);
        }
        restrictToAxis(e) {
          if (this.config.axis || this.config.lockDirection)
            switch (this.state.axis) {
              case "x":
                e[1] = 0;
                break;
              case "y":
                e[0] = 0;
            }
        }
      }
      let iu = (e) => e,
        ic = {
          enabled: (e = !0) => e,
          eventOptions: (e, t, n) => n2(n2({}, n.shared.eventOptions), e),
          preventDefault: (e = !1) => e,
          triggerAllEvents: (e = !1) => e,
          rubberband(e = 0) {
            switch (e) {
              case !0:
                return [0.15, 0.15];
              case !1:
                return [0, 0];
              default:
                return nZ.toVector(e);
            }
          },
          from: (e) =>
            "function" == typeof e ? e : null != e ? nZ.toVector(e) : void 0,
          transform(e, t, n) {
            let i = e || n.shared.transform;
            return (this.hasCustomTransform = !!i), i || iu;
          },
          threshold: (e) => nZ.toVector(e, 0),
        },
        id = 0,
        ih = n2(
          n2({}, ic),
          {},
          {
            axis(e, t, { axis: n }) {
              if (((this.lockDirection = "lock" === n), !this.lockDirection))
                return n;
            },
            axisThreshold: (e = id) => e,
            bounds(e = {}) {
              if ("function" == typeof e) return (t) => ih.bounds(e(t));
              if ("current" in e) return () => e.current;
              if ("function" == typeof HTMLElement && e instanceof HTMLElement)
                return e;
              let {
                left: t = -1 / 0,
                right: n = 1 / 0,
                top: i = -1 / 0,
                bottom: r = 1 / 0,
              } = e;
              return [
                [t, n],
                [i, r],
              ];
            },
          }
        ),
        ip = {
          ArrowRight: (e, t = 1) => [e * t, 0],
          ArrowLeft: (e, t = 1) => [-1 * e * t, 0],
          ArrowUp: (e, t = 1) => [0, -1 * e * t],
          ArrowDown: (e, t = 1) => [0, e * t],
        };
      class im extends il {
        constructor(...e) {
          super(...e), n1(this, "ingKey", "dragging");
        }
        reset() {
          super.reset();
          let e = this.state;
          (e._pointerId = void 0),
            (e._pointerActive = !1),
            (e._keyboardActive = !1),
            (e._preventScroll = !1),
            (e._delayed = !1),
            (e.swipe = [0, 0]),
            (e.tap = !1),
            (e.canceled = !1),
            (e.cancel = this.cancel.bind(this));
        }
        setup() {
          let e = this.state;
          if (e._bounds instanceof HTMLElement) {
            let t = e._bounds.getBoundingClientRect(),
              n = e.currentTarget.getBoundingClientRect(),
              i = {
                left: t.left - n.left + e.offset[0],
                right: t.right - n.right + e.offset[0],
                top: t.top - n.top + e.offset[1],
                bottom: t.bottom - n.bottom + e.offset[1],
              };
            e._bounds = ih.bounds(i);
          }
        }
        cancel() {
          let e = this.state;
          e.canceled ||
            ((e.canceled = !0),
            (e._active = !1),
            setTimeout(() => {
              this.compute(), this.emit();
            }, 0));
        }
        setActive() {
          this.state._active =
            this.state._pointerActive || this.state._keyboardActive;
        }
        clean() {
          this.pointerClean(),
            (this.state._pointerActive = !1),
            (this.state._keyboardActive = !1),
            super.clean();
        }
        pointerDown(e) {
          let t = this.config,
            n = this.state;
          if (
            null != e.buttons &&
            (Array.isArray(t.pointerButtons)
              ? !t.pointerButtons.includes(e.buttons)
              : -1 !== t.pointerButtons && t.pointerButtons !== e.buttons)
          )
            return;
          let i = this.ctrl.setEventIds(e);
          t.pointerCapture && e.target.setPointerCapture(e.pointerId),
            (i && i.size > 1 && n._pointerActive) ||
              (this.start(e),
              this.setupPointer(e),
              (n._pointerId = it(e)),
              (n._pointerActive = !0),
              this.computeValues(ii(e)),
              this.computeInitial(),
              t.preventScrollAxis && "mouse" !== n6(e)
                ? ((n._active = !1), this.setupScrollPrevention(e))
                : t.delay > 0
                ? (this.setupDelayTrigger(e),
                  t.triggerAllEvents && (this.compute(e), this.emit()))
                : this.startPointerDrag(e));
        }
        startPointerDrag(e) {
          let t = this.state;
          (t._active = !0),
            (t._preventScroll = !0),
            (t._delayed = !1),
            this.compute(e),
            this.emit();
        }
        pointerMove(e) {
          let t = this.state,
            n = this.config;
          if (!t._pointerActive) return;
          let i = it(e);
          if (void 0 !== t._pointerId && i !== t._pointerId) return;
          let r = ii(e);
          if (
            (document.pointerLockElement === e.target
              ? (t._delta = [e.movementX, e.movementY])
              : ((t._delta = nZ.sub(r, t._values)), this.computeValues(r)),
            nZ.addTo(t._movement, t._delta),
            this.compute(e),
            t._delayed && t.intentional)
          ) {
            this.timeoutStore.remove("dragDelay"),
              (t.active = !1),
              this.startPointerDrag(e);
            return;
          }
          if (n.preventScrollAxis && !t._preventScroll) {
            if (!t.axis) return;
            if (
              t.axis === n.preventScrollAxis ||
              "xy" === n.preventScrollAxis
            ) {
              (t._active = !1), this.clean();
              return;
            }
            this.timeoutStore.remove("startPointerDrag"),
              this.startPointerDrag(e);
            return;
          }
          this.emit();
        }
        pointerUp(e) {
          this.ctrl.setEventIds(e);
          try {
            this.config.pointerCapture &&
              e.target.hasPointerCapture(e.pointerId) &&
              e.target.releasePointerCapture(e.pointerId);
          } catch (e) {}
          let t = this.state,
            n = this.config;
          if (!t._active || !t._pointerActive) return;
          let i = it(e);
          if (void 0 !== t._pointerId && i !== t._pointerId) return;
          (this.state._pointerActive = !1), this.setActive(), this.compute(e);
          let [r, s] = t._distance;
          if (
            ((t.tap = r <= n.tapsThreshold && s <= n.tapsThreshold),
            t.tap && n.filterTaps)
          )
            t._force = !0;
          else {
            let [e, i] = t._delta,
              [r, s] = t._movement,
              [o, a] = n.swipe.velocity,
              [l, u] = n.swipe.distance,
              c = n.swipe.duration;
            if (t.elapsedTime < c) {
              let n = Math.abs(e / t.timeDelta),
                c = Math.abs(i / t.timeDelta);
              n > o && Math.abs(r) > l && (t.swipe[0] = Math.sign(e)),
                c > a && Math.abs(s) > u && (t.swipe[1] = Math.sign(i));
            }
          }
          this.emit();
        }
        pointerClick(e) {
          !this.state.tap &&
            e.detail > 0 &&
            (e.preventDefault(), e.stopPropagation());
        }
        setupPointer(e) {
          let t = this.config,
            n = t.device;
          t.pointerLock && e.currentTarget.requestPointerLock(),
            t.pointerCapture ||
              (this.eventStore.add(
                this.sharedConfig.window,
                n,
                "change",
                this.pointerMove.bind(this)
              ),
              this.eventStore.add(
                this.sharedConfig.window,
                n,
                "end",
                this.pointerUp.bind(this)
              ),
              this.eventStore.add(
                this.sharedConfig.window,
                n,
                "cancel",
                this.pointerUp.bind(this)
              ));
        }
        pointerClean() {
          this.config.pointerLock &&
            document.pointerLockElement === this.state.currentTarget &&
            document.exitPointerLock();
        }
        preventScroll(e) {
          this.state._preventScroll && e.cancelable && e.preventDefault();
        }
        setupScrollPrevention(e) {
          (this.state._preventScroll = !1),
            "persist" in e && "function" == typeof e.persist && e.persist();
          let t = this.eventStore.add(
            this.sharedConfig.window,
            "touch",
            "change",
            this.preventScroll.bind(this),
            { passive: !1 }
          );
          this.eventStore.add(this.sharedConfig.window, "touch", "end", t),
            this.eventStore.add(this.sharedConfig.window, "touch", "cancel", t),
            this.timeoutStore.add(
              "startPointerDrag",
              this.startPointerDrag.bind(this),
              this.config.preventScrollDelay,
              e
            );
        }
        setupDelayTrigger(e) {
          (this.state._delayed = !0),
            this.timeoutStore.add(
              "dragDelay",
              () => {
                (this.state._step = [0, 0]), this.startPointerDrag(e);
              },
              this.config.delay
            );
        }
        keyDown(e) {
          let t = ip[e.key];
          if (t) {
            let n = this.state,
              i = e.shiftKey ? 10 : e.altKey ? 0.1 : 1;
            this.start(e),
              (n._delta = t(this.config.keyboardDisplacement, i)),
              (n._keyboardActive = !0),
              nZ.addTo(n._movement, n._delta),
              this.compute(e),
              this.emit();
          }
        }
        keyUp(e) {
          e.key in ip &&
            ((this.state._keyboardActive = !1),
            this.setActive(),
            this.compute(e),
            this.emit());
        }
        bind(e) {
          let t = this.config.device;
          e(t, "start", this.pointerDown.bind(this)),
            this.config.pointerCapture &&
              (e(t, "change", this.pointerMove.bind(this)),
              e(t, "end", this.pointerUp.bind(this)),
              e(t, "cancel", this.pointerUp.bind(this)),
              e("lostPointerCapture", "", this.pointerUp.bind(this))),
            this.config.keys &&
              (e("key", "down", this.keyDown.bind(this)),
              e("key", "up", this.keyUp.bind(this))),
            this.config.filterTaps &&
              e("click", "", this.pointerClick.bind(this), {
                capture: !0,
                passive: !1,
              });
        }
      }
      let ig =
        "undefined" != typeof window &&
        window.document &&
        window.document.createElement;
      function iv() {
        return ig && "ontouchstart" in window;
      }
      let iy = {
          isBrowser: ig,
          gesture: (function () {
            try {
              return "constructor" in GestureEvent;
            } catch (e) {
              return !1;
            }
          })(),
          touch: iv(),
          touchscreen: iv() || (ig && window.navigator.maxTouchPoints > 1),
          pointer: ig && "onpointerdown" in window,
          pointerLock: ig && "exitPointerLock" in window.document,
        },
        ib = 10,
        iw = { mouse: 0, touch: 0, pen: 8 },
        i_ = n2(
          n2({}, ih),
          {},
          {
            device(
              e,
              t,
              { pointer: { touch: n = !1, lock: i = !1, mouse: r = !1 } = {} }
            ) {
              return ((this.pointerLock = i && iy.pointerLock), iy.touch && n)
                ? "touch"
                : this.pointerLock
                ? "mouse"
                : iy.pointer && !r
                ? "pointer"
                : iy.touch
                ? "touch"
                : "mouse";
            },
            preventScrollAxis(e, t, { preventScroll: n }) {
              if (
                ((this.preventScrollDelay =
                  "number" == typeof n
                    ? n
                    : n || (void 0 === n && e)
                    ? 250
                    : void 0),
                iy.touchscreen && !1 !== n)
              )
                return e || (void 0 !== n ? "y" : void 0);
            },
            pointerCapture(
              e,
              t,
              {
                pointer: { capture: n = !0, buttons: i = 1, keys: r = !0 } = {},
              }
            ) {
              return (
                (this.pointerButtons = i),
                (this.keys = r),
                !this.pointerLock && "pointer" === this.device && n
              );
            },
            threshold(
              e,
              t,
              { filterTaps: n = !1, tapsThreshold: i = 3, axis: r }
            ) {
              let s = nZ.toVector(e, n ? i : r ? 1 : 0);
              return (this.filterTaps = n), (this.tapsThreshold = i), s;
            },
            swipe({
              velocity: e = 0.5,
              distance: t = 50,
              duration: n = 250,
            } = {}) {
              return {
                velocity: this.transform(nZ.toVector(e)),
                distance: this.transform(nZ.toVector(t)),
                duration: n,
              };
            },
            delay(e = 0) {
              switch (e) {
                case !0:
                  return 180;
                case !1:
                  return 0;
                default:
                  return e;
              }
            },
            axisThreshold: (e) => (e ? n2(n2({}, iw), e) : iw),
            keyboardDisplacement: (e = ib) => e,
          }
        );
      n2(
        n2({}, ic),
        {},
        {
          device(e, t, { shared: n, pointer: { touch: i = !1 } = {} }) {
            if (n.target && !iy.touch && iy.gesture) return "gesture";
            if (iy.touch && i) return "touch";
            if (iy.touchscreen) {
              if (iy.pointer) return "pointer";
              if (iy.touch) return "touch";
            }
          },
          bounds(e, t, { scaleBounds: n = {}, angleBounds: i = {} }) {
            let r = (e) => {
                let t = io(ir(n, e), { min: -1 / 0, max: 1 / 0 });
                return [t.min, t.max];
              },
              s = (e) => {
                let t = io(ir(i, e), { min: -1 / 0, max: 1 / 0 });
                return [t.min, t.max];
              };
            return "function" != typeof n && "function" != typeof i
              ? [r(), s()]
              : (e) => [r(e), s(e)];
          },
          threshold(e, t, n) {
            return (
              (this.lockDirection = "lock" === n.axis),
              nZ.toVector(e, this.lockDirection ? [0.1, 3] : 0)
            );
          },
          modifierKey: (e) => (void 0 === e ? "ctrlKey" : e),
          pinchOnWheel: (e = !0) => e,
        }
      ),
        n2(n2({}, ih), {}, { mouseOnly: (e = !0) => e }),
        n2(n2({}, ih), {}, { mouseOnly: (e = !0) => e });
      let ik = new Map(),
        iS = new Map(),
        iC = "drag",
        ix = im,
        iO = i_,
        iP = {
          target(e) {
            if (e) return () => ("current" in e ? e.current : e);
          },
          enabled: (e = !0) => e,
          window: (e = iy.isBrowser ? window : void 0) => e,
          eventOptions: ({ passive: e = !0, capture: t = !1 } = {}) => ({
            passive: e,
            capture: t,
          }),
          transform: (e) => e,
        },
        iE = ["target", "eventOptions", "window", "enabled", "transform"];
      function iA(e = {}, t) {
        let n = {};
        for (let [i, r] of Object.entries(t))
          switch (typeof r) {
            case "function":
              n[i] = r.call(n, e[i], i, e);
              break;
            case "object":
              n[i] = iA(e[i], r);
              break;
            case "boolean":
              r && (n[i] = e[i]);
          }
        return n;
      }
      class iM {
        constructor(e, t) {
          n1(this, "_listeners", new Set()),
            (this._ctrl = e),
            (this._gestureKey = t);
        }
        add(e, t, n, i, r) {
          let s = this._listeners,
            o = (function (e, t = "") {
              let n = n9[e];
              return e + ((n && n[t]) || t);
            })(t, n),
            a = n2(
              n2(
                {},
                this._gestureKey
                  ? this._ctrl.config[this._gestureKey].eventOptions
                  : {}
              ),
              r
            );
          e.addEventListener(o, i, a);
          let l = () => {
            e.removeEventListener(o, i, a), s.delete(l);
          };
          return s.add(l), l;
        }
        clean() {
          this._listeners.forEach((e) => e()), this._listeners.clear();
        }
      }
      class ij {
        constructor() {
          n1(this, "_timeouts", new Map());
        }
        add(e, t, n = 140, ...i) {
          this.remove(e), this._timeouts.set(e, window.setTimeout(t, n, ...i));
        }
        remove(e) {
          let t = this._timeouts.get(e);
          t && window.clearTimeout(t);
        }
        clean() {
          this._timeouts.forEach((e) => void window.clearTimeout(e)),
            this._timeouts.clear();
        }
      }
      class iI {
        constructor(e) {
          n1(this, "gestures", new Set()),
            n1(this, "_targetEventStore", new iM(this)),
            n1(this, "gestureEventStores", {}),
            n1(this, "gestureTimeoutStores", {}),
            n1(this, "handlers", {}),
            n1(this, "config", {}),
            n1(this, "pointerIds", new Set()),
            n1(this, "touchIds", new Set()),
            n1(this, "state", {
              shared: { shiftKey: !1, metaKey: !1, ctrlKey: !1, altKey: !1 },
            }),
            e.drag && iT(this, "drag"),
            e.wheel && iT(this, "wheel"),
            e.scroll && iT(this, "scroll"),
            e.move && iT(this, "move"),
            e.pinch && iT(this, "pinch"),
            e.hover && iT(this, "hover");
        }
        setEventIds(e) {
          return n8(e)
            ? ((this.touchIds = new Set(
                Array.from(e.touches)
                  .filter((t) => {
                    var n, i;
                    return (
                      t.target === e.currentTarget ||
                      (null === (n = e.currentTarget) ||
                      void 0 === n ||
                      null === (i = n.contains) ||
                      void 0 === i
                        ? void 0
                        : i.call(n, t.target))
                    );
                  })
                  .map((e) => e.identifier)
              )),
              this.touchIds)
            : "pointerId" in e
            ? ("pointerup" === e.type || "pointercancel" === e.type
                ? this.pointerIds.delete(e.pointerId)
                : "pointerdown" === e.type && this.pointerIds.add(e.pointerId),
              this.pointerIds)
            : void 0;
        }
        applyHandlers(e, t) {
          (this.handlers = e), (this.nativeHandlers = t);
        }
        applyConfig(e, t) {
          this.config = (function (e, t, n = {}) {
            let {
                target: i,
                eventOptions: r,
                window: s,
                enabled: o,
                transform: a,
              } = e,
              l = (function (e, t) {
                if (null == e) return {};
                var n,
                  i,
                  r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                      i,
                      r = {},
                      s = Object.keys(e);
                    for (i = 0; i < s.length; i++)
                      (n = s[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                  })(e, t);
                if (Object.getOwnPropertySymbols) {
                  var s = Object.getOwnPropertySymbols(e);
                  for (i = 0; i < s.length; i++)
                    (n = s[i]),
                      !(t.indexOf(n) >= 0) &&
                        Object.prototype.propertyIsEnumerable.call(e, n) &&
                        (r[n] = e[n]);
                }
                return r;
              })(e, iE);
            if (
              ((n.shared = iA(
                {
                  target: i,
                  eventOptions: r,
                  window: s,
                  enabled: o,
                  transform: a,
                },
                iP
              )),
              t)
            ) {
              let e = iS.get(t);
              n[t] = iA(n2({ shared: n.shared }, l), e);
            } else
              for (let e in l) {
                let t = iS.get(e);
                t && (n[e] = iA(n2({ shared: n.shared }, l[e]), t));
              }
            return n;
          })(e, t, this.config);
        }
        clean() {
          for (let e of (this._targetEventStore.clean(), this.gestures))
            this.gestureEventStores[e].clean(),
              this.gestureTimeoutStores[e].clean();
        }
        effect() {
          return (
            this.config.shared.target && this.bind(),
            () => this._targetEventStore.clean()
          );
        }
        bind(...e) {
          let t;
          let n = this.config.shared,
            i = {};
          if (!n.target || (t = n.target())) {
            if (n.enabled) {
              for (let n of this.gestures) {
                let r = this.config[n],
                  s = iR(i, r.eventOptions, !!t);
                r.enabled && new (ik.get(n))(this, e, n).bind(s);
              }
              let r = iR(i, n.eventOptions, !!t);
              for (let t in this.nativeHandlers)
                r(
                  t,
                  "",
                  (n) =>
                    this.nativeHandlers[t](
                      n2(n2({}, this.state.shared), {}, { event: n, args: e })
                    ),
                  void 0,
                  !0
                );
            }
            for (let e in i)
              i[e] = (function (...e) {
                return 0 === e.length
                  ? is
                  : 1 === e.length
                  ? e[0]
                  : function () {
                      let t;
                      for (let n of e) t = n.apply(this, arguments) || t;
                      return t;
                    };
              })(...i[e]);
            if (!t) return i;
            for (let e in i) {
              let {
                device: n,
                capture: r,
                passive: s,
              } = (function (e) {
                let t = e.substring(2).toLowerCase(),
                  n = !!~t.indexOf("passive");
                n && (t = t.replace("passive", ""));
                let i = n7.includes(t) ? "capturecapture" : "capture",
                  r = !!~t.indexOf(i);
                return (
                  r && (t = t.replace("capture", "")),
                  { device: t, capture: r, passive: n }
                );
              })(e);
              this._targetEventStore.add(t, n, "", i[e], {
                capture: r,
                passive: s,
              });
            }
          }
        }
      }
      function iT(e, t) {
        e.gestures.add(t),
          (e.gestureEventStores[t] = new iM(e, t)),
          (e.gestureTimeoutStores[t] = new ij());
      }
      let iR =
          (e, t, n) =>
          (i, r, s, o = {}, a = !1) => {
            var l, u;
            let c = null !== (l = o.capture) && void 0 !== l ? l : t.capture,
              d = null !== (u = o.passive) && void 0 !== u ? u : t.passive,
              h = a
                ? i
                : (function (e, t = "", n = !1) {
                    let i = n9[e],
                      r = (i && i[t]) || t;
                    return (
                      "on" +
                      n5(e) +
                      n5(r) +
                      (!(function (e = !1, t) {
                        return e && !n4.includes(t);
                      })(n, r)
                        ? ""
                        : "Capture")
                    );
                  })(i, r, c);
            n && d && (h += "Passive"), (e[h] = e[h] || []), e[h].push(s);
          },
        i$ = "adm-popup",
        iV = Object.assign(Object.assign({}, nY), {
          closeOnSwipe: !1,
          position: "bottom",
        });
      var iD = (e) => {
        var t, n;
        let { locale: i, popup: r = {} } = C(),
          s = p(iV, r, e),
          o = h()(
            "".concat(i$, "-body"),
            s.bodyClassName,
            "".concat(i$, "-body-position-").concat(s.position)
          ),
          [a, l] = (0, c.useState)(s.visible),
          u = (0, c.useRef)(null);
        T(u, !!s.disableBodyScroll && !!a && "strict"),
          O(() => {
            s.visible && l(!0);
          }, [s.visible]);
        let d = P(),
          { percent: m } = nb({
            percent: s.visible ? 0 : 100,
            config: { precision: 0.1, mass: 0.4, tension: 300, friction: 30 },
            onRest: () => {
              var e, t;
              d.current ||
                (l(s.visible),
                s.visible
                  ? null === (e = s.afterShow) || void 0 === e || e.call(s)
                  : null === (t = s.afterClose) || void 0 === t || t.call(s));
            },
          }),
          g =
            ((t = (e) => {
              var t;
              let {
                swipe: [, n],
              } = e;
              s.closeOnSwipe &&
                ((1 === n && "bottom" === s.position) ||
                  (-1 === n && "top" === s.position)) &&
                (null === (t = s.onClose) || void 0 === t || t.call(s));
            }),
            (n = {
              axis: "y",
              enabled: ["top", "bottom"].includes(s.position),
            }),
            ik.set(iC, ix),
            iS.set(iC, iO),
            (function (e, t = {}, n, i) {
              let r = c.useMemo(() => new iI(e), []);
              if (
                (r.applyHandlers(e, void 0),
                r.applyConfig(t, n),
                c.useEffect(r.effect.bind(r)),
                c.useEffect(() => r.clean.bind(r), []),
                void 0 === t.target)
              )
                return r.bind.bind(r);
            })({ drag: t }, n || {}, "drag")),
          v = (function (e) {
            let [t, n] = (0, c.useState)(e);
            return (
              O(() => {
                n(e);
              }, [e]),
              t
            );
          })(a && s.visible),
          y = nH(
            s.stopPropagation,
            f(
              s,
              c.createElement(
                "div",
                Object.assign(
                  {
                    className: i$,
                    onClick: s.onClick,
                    style: {
                      display: a ? void 0 : "none",
                      touchAction: ["top", "bottom"].includes(s.position)
                        ? "none"
                        : "auto",
                    },
                  },
                  g()
                ),
                s.mask &&
                  c.createElement(nX, {
                    visible: v,
                    forceRender: s.forceRender,
                    destroyOnClose: s.destroyOnClose,
                    onMaskClick: (e) => {
                      var t, n;
                      null === (t = s.onMaskClick) ||
                        void 0 === t ||
                        t.call(s, e),
                        s.closeOnMaskClick &&
                          (null === (n = s.onClose) ||
                            void 0 === n ||
                            n.call(s));
                    },
                    className: s.maskClassName,
                    style: s.maskStyle,
                    disableBodyScroll: !1,
                    stopPropagation: s.stopPropagation,
                  }),
                c.createElement(
                  nF.div,
                  {
                    className: o,
                    style: Object.assign(Object.assign({}, s.bodyStyle), {
                      pointerEvents: m.to((e) => (0 === e ? "unset" : "none")),
                      transform: m.to((e) =>
                        "bottom" === s.position
                          ? "translate(0, ".concat(e, "%)")
                          : "top" === s.position
                          ? "translate(0, -".concat(e, "%)")
                          : "left" === s.position
                          ? "translate(-".concat(e, "%, 0)")
                          : "right" === s.position
                          ? "translate(".concat(e, "%, 0)")
                          : "none"
                      ),
                    }),
                    ref: u,
                  },
                  s.showCloseButton &&
                    c.createElement(
                      "a",
                      {
                        className: h()(
                          "".concat(i$, "-close-icon"),
                          "adm-plain-anchor"
                        ),
                        onClick: () => {
                          var e;
                          null === (e = s.onClose) || void 0 === e || e.call(s);
                        },
                        role: "button",
                        "aria-label": i.common.close,
                      },
                      s.closeIcon
                    ),
                  s.children
                )
              )
            )
          );
        return c.createElement(
          nU,
          {
            active: a,
            forceRender: s.forceRender,
            destroyOnClose: s.destroyOnClose,
          },
          nq(s.getContainer, y)
        );
      };
    },
    99376: function (e, t, n) {
      "use strict";
      var i = n(35475);
      n.o(i, "useParams") &&
        n.d(t, {
          useParams: function () {
            return i.useParams;
          },
        }),
        n.o(i, "usePathname") &&
          n.d(t, {
            usePathname: function () {
              return i.usePathname;
            },
          }),
        n.o(i, "useRouter") &&
          n.d(t, {
            useRouter: function () {
              return i.useRouter;
            },
          }),
        n.o(i, "useSearchParams") &&
          n.d(t, {
            useSearchParams: function () {
              return i.useSearchParams;
            },
          }),
        n.o(i, "useServerInsertedHTML") &&
          n.d(t, {
            useServerInsertedHTML: function () {
              return i.useServerInsertedHTML;
            },
          });
    },
    9423: function () {},
    35943: function () {},
    90691: function () {},
    41308: function () {},
    64784: function () {},
    36760: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var i = {}.hasOwnProperty;
        function r() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n &&
              (e = s(
                e,
                (function (e) {
                  if ("string" == typeof e || "number" == typeof e) return e;
                  if ("object" != typeof e) return "";
                  if (Array.isArray(e)) return r.apply(null, e);
                  if (
                    e.toString !== Object.prototype.toString &&
                    !e.toString.toString().includes("[native code]")
                  )
                    return e.toString();
                  var t = "";
                  for (var n in e) i.call(e, n) && e[n] && (t = s(t, n));
                  return t;
                })(n)
              ));
          }
          return e;
        }
        function s(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((r.default = r), (e.exports = r))
          : void 0 !==
              (n = function () {
                return r;
              }.apply(t, [])) && (e.exports = n);
      })();
    },
    2894: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return a;
        },
        m: function () {
          return o;
        },
      });
      var i = n(18238),
        r = n(7989),
        s = n(11255),
        o = class extends r.F {
          #e;
          #t;
          #n;
          #i;
          constructor(e) {
            super(),
              (this.#e = e.client),
              (this.mutationId = e.mutationId),
              (this.#n = e.mutationCache),
              (this.#t = []),
              (this.state = e.state || a()),
              this.setOptions(e.options),
              this.scheduleGc();
          }
          setOptions(e) {
            (this.options = e), this.updateGcTime(this.options.gcTime);
          }
          get meta() {
            return this.options.meta;
          }
          addObserver(e) {
            this.#t.includes(e) ||
              (this.#t.push(e),
              this.clearGcTimeout(),
              this.#n.notify({
                type: "observerAdded",
                mutation: this,
                observer: e,
              }));
          }
          removeObserver(e) {
            (this.#t = this.#t.filter((t) => t !== e)),
              this.scheduleGc(),
              this.#n.notify({
                type: "observerRemoved",
                mutation: this,
                observer: e,
              });
          }
          optionalRemove() {
            this.#t.length ||
              ("pending" === this.state.status
                ? this.scheduleGc()
                : this.#n.remove(this));
          }
          continue() {
            return this.#i?.continue() ?? this.execute(this.state.variables);
          }
          async execute(e) {
            let t = () => {
                this.#r({ type: "continue" });
              },
              n = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey,
              };
            this.#i = (0, s.Mz)({
              fn: () =>
                this.options.mutationFn
                  ? this.options.mutationFn(e, n)
                  : Promise.reject(Error("No mutationFn found")),
              onFail: (e, t) => {
                this.#r({ type: "failed", failureCount: e, error: t });
              },
              onPause: () => {
                this.#r({ type: "pause" });
              },
              onContinue: t,
              retry: this.options.retry ?? 0,
              retryDelay: this.options.retryDelay,
              networkMode: this.options.networkMode,
              canRun: () => this.#n.canRun(this),
            });
            let i = "pending" === this.state.status,
              r = !this.#i.canStart();
            try {
              if (i) t();
              else {
                this.#r({ type: "pending", variables: e, isPaused: r }),
                  await this.#n.config.onMutate?.(e, this, n);
                let t = await this.options.onMutate?.(e, n);
                t !== this.state.context &&
                  this.#r({
                    type: "pending",
                    context: t,
                    variables: e,
                    isPaused: r,
                  });
              }
              let s = await this.#i.start();
              return (
                await this.#n.config.onSuccess?.(
                  s,
                  e,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSuccess?.(s, e, this.state.context, n),
                await this.#n.config.onSettled?.(
                  s,
                  null,
                  this.state.variables,
                  this.state.context,
                  this,
                  n
                ),
                await this.options.onSettled?.(
                  s,
                  null,
                  e,
                  this.state.context,
                  n
                ),
                this.#r({ type: "success", data: s }),
                s
              );
            } catch (t) {
              try {
                throw (
                  (await this.#n.config.onError?.(
                    t,
                    e,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onError?.(t, e, this.state.context, n),
                  await this.#n.config.onSettled?.(
                    void 0,
                    t,
                    this.state.variables,
                    this.state.context,
                    this,
                    n
                  ),
                  await this.options.onSettled?.(
                    void 0,
                    t,
                    e,
                    this.state.context,
                    n
                  ),
                  t)
                );
              } finally {
                this.#r({ type: "error", error: t });
              }
            } finally {
              this.#n.runNext(this);
            }
          }
          #r(e) {
            (this.state = ((t) => {
              switch (e.type) {
                case "failed":
                  return {
                    ...t,
                    failureCount: e.failureCount,
                    failureReason: e.error,
                  };
                case "pause":
                  return { ...t, isPaused: !0 };
                case "continue":
                  return { ...t, isPaused: !1 };
                case "pending":
                  return {
                    ...t,
                    context: e.context,
                    data: void 0,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    isPaused: e.isPaused,
                    status: "pending",
                    variables: e.variables,
                    submittedAt: Date.now(),
                  };
                case "success":
                  return {
                    ...t,
                    data: e.data,
                    failureCount: 0,
                    failureReason: null,
                    error: null,
                    status: "success",
                    isPaused: !1,
                  };
                case "error":
                  return {
                    ...t,
                    data: void 0,
                    error: e.error,
                    failureCount: t.failureCount + 1,
                    failureReason: e.error,
                    isPaused: !1,
                    status: "error",
                  };
              }
            })(this.state)),
              i.Vr.batch(() => {
                this.#t.forEach((t) => {
                  t.onMutationUpdate(e);
                }),
                  this.#n.notify({
                    mutation: this,
                    type: "updated",
                    action: e,
                  });
              });
          }
        };
      function a() {
        return {
          context: void 0,
          data: void 0,
          error: null,
          failureCount: 0,
          failureReason: null,
          isPaused: !1,
          status: "idle",
          variables: void 0,
          submittedAt: 0,
        };
      }
    },
  },
]);
