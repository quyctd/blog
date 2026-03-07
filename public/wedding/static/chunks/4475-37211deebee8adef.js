"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4475],
  {
    49637: function (t, e, i) {
      i.d(e, {
        oO: function () {
          return r;
        },
      });
      var n = i(2265),
        s = i(64252);
      function r() {
        let t =
            !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
          e = (0, n.useContext)(s.O);
        if (null === e) return [!0, null];
        let { isPresent: i, onExitComplete: r, register: o } = e,
          a = (0, n.useId)();
        (0, n.useEffect)(() => {
          if (t) return o(a);
        }, [t]);
        let l = (0, n.useCallback)(() => t && r && r(a), [a, r, t]);
        return !i && r ? [!1, l] : [!0];
      }
    },
    58881: function (t, e, i) {
      i.d(e, {
        p: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({});
    },
    45750: function (t, e, i) {
      i.d(e, {
        _: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    64252: function (t, e, i) {
      i.d(e, {
        O: function () {
          return n;
        },
      });
      let n = (0, i(2265).createContext)(null);
    },
    98239: function (t, e, i) {
      let n;
      i.d(e, {
        E: function () {
          return rC;
        },
      });
      var s,
        r = i(2265);
      let o = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        a = new Set(o),
        l = (t) => (180 * t) / Math.PI,
        h = (t) => d(l(Math.atan2(t[1], t[0]))),
        u = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: h,
          rotateZ: h,
          skewX: (t) => l(Math.atan(t[1])),
          skewY: (t) => l(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        d = (t) => ((t %= 360) < 0 && (t += 360), t),
        c = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        p = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        m = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: c,
          scaleY: p,
          scale: (t) => (c(t) + p(t)) / 2,
          rotateX: (t) => d(l(Math.atan2(t[6], t[5]))),
          rotateY: (t) => d(l(Math.atan2(-t[2], t[0]))),
          rotateZ: h,
          rotate: h,
          skewX: (t) => l(Math.atan(t[4])),
          skewY: (t) => l(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function f(t) {
        return t.includes("scale") ? 1 : 0;
      }
      function g(t, e) {
        let i, n;
        if (!t || "none" === t) return f(e);
        let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (s) (i = m), (n = s);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (i = u), (n = e);
        }
        if (!n) return f(e);
        let r = i[e],
          o = n[1].split(",").map(v);
        return "function" == typeof r ? r(o) : o[r];
      }
      let y = (t, e) => {
        let { transform: i = "none" } = getComputedStyle(t);
        return g(i, e);
      };
      function v(t) {
        return parseFloat(t.trim());
      }
      let x = (t) => (e) => "string" == typeof e && e.startsWith(t),
        T = x("--"),
        w = x("var(--"),
        P = (t) => !!w(t) && b.test(t.split("/*")[0].trim()),
        b =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function S({ top: t, left: e, right: i, bottom: n }) {
        return { x: { min: e, max: i }, y: { min: t, max: n } };
      }
      let A = (t, e, i) => t + (e - t) * i;
      function M(t) {
        return void 0 === t || 1 === t;
      }
      function V({ scale: t, scaleX: e, scaleY: i }) {
        return !M(t) || !M(e) || !M(i);
      }
      function E(t) {
        return (
          V(t) ||
          C(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function C(t) {
        var e, i;
        return ((e = t.x) && "0%" !== e) || ((i = t.y) && "0%" !== i);
      }
      function D(t, e, i, n, s) {
        return void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e;
      }
      function k(t, e = 0, i = 1, n, s) {
        (t.min = D(t.min, e, i, n, s)), (t.max = D(t.max, e, i, n, s));
      }
      function R(t, { x: e, y: i }) {
        k(t.x, e.translate, e.scale, e.originPoint),
          k(t.y, i.translate, i.scale, i.originPoint);
      }
      function j(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function L(t, e, i, n, s = 0.5) {
        let r = A(t.min, t.max, s);
        k(t, e, i, r, n);
      }
      function F(t, e) {
        L(t.x, e.x, e.scaleX, e.scale, e.originX),
          L(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function B(t, e) {
        return S(
          (function (t, e) {
            if (!e) return t;
            let i = e({ x: t.left, y: t.top }),
              n = e({ x: t.right, y: t.bottom });
            return { top: i.y, left: i.x, bottom: n.y, right: n.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let O = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...o,
        ]),
        I = (t, e, i) => (i > e ? e : i < t ? t : i),
        U = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        N = { ...U, transform: (t) => I(0, 1, t) },
        $ = { ...U, default: 1 },
        W = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        Y = W("deg"),
        z = W("%"),
        H = W("px"),
        X = W("vh"),
        K = W("vw"),
        q = {
          ...z,
          parse: (t) => z.parse(t) / 100,
          transform: (t) => z.transform(100 * t),
        },
        _ = (t) => (e) => e.test(t),
        G = [U, H, z, Y, K, X, { test: (t) => "auto" === t, parse: (t) => t }],
        Z = (t) => G.find(_(t)),
        J = () => {},
        Q = () => {},
        tt = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        te = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        ti = (t) => t === U || t === H,
        tn = new Set(["x", "y", "z"]),
        ts = o.filter((t) => !tn.has(t)),
        tr = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: i = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(i),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => g(e, "x"),
          y: (t, { transform: e }) => g(e, "y"),
        };
      (tr.translateX = tr.x), (tr.translateY = tr.y);
      let to = (t) => t,
        ta = {},
        tl = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        th = { value: null, addProjectionMetrics: null };
      function tu(t, e) {
        let i = !1,
          n = !0,
          s = { delta: 0, timestamp: 0, isProcessing: !1 },
          r = () => (i = !0),
          o = tl.reduce(
            (t, i) => (
              (t[i] = (function (t, e) {
                let i = new Set(),
                  n = new Set(),
                  s = !1,
                  r = !1,
                  o = new WeakSet(),
                  a = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function h(e) {
                  o.has(e) && (u.schedule(e), t()), l++, e(a);
                }
                let u = {
                  schedule: (t, e = !1, r = !1) => {
                    let a = r && s ? i : n;
                    return e && o.add(t), a.has(t) || a.add(t), t;
                  },
                  cancel: (t) => {
                    n.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((a = t), s)) {
                      r = !0;
                      return;
                    }
                    (s = !0),
                      ([i, n] = [n, i]),
                      i.forEach(h),
                      e && th.value && th.value.frameloop[e].push(l),
                      (l = 0),
                      i.clear(),
                      (s = !1),
                      r && ((r = !1), u.process(t));
                  },
                };
                return u;
              })(r, e ? i : void 0)),
              t
            ),
            {}
          ),
          {
            setup: a,
            read: l,
            resolveKeyframes: h,
            preUpdate: u,
            update: d,
            preRender: c,
            render: p,
            postRender: m,
          } = o,
          f = () => {
            let r = ta.useManualTiming ? s.timestamp : performance.now();
            (i = !1),
              ta.useManualTiming ||
                (s.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(r - s.timestamp, 40), 1)),
              (s.timestamp = r),
              (s.isProcessing = !0),
              a.process(s),
              l.process(s),
              h.process(s),
              u.process(s),
              d.process(s),
              c.process(s),
              p.process(s),
              m.process(s),
              (s.isProcessing = !1),
              i && e && ((n = !1), t(f));
          },
          g = () => {
            (i = !0), (n = !0), s.isProcessing || t(f);
          };
        return {
          schedule: tl.reduce((t, e) => {
            let n = o[e];
            return (
              (t[e] = (t, e = !1, s = !1) => (i || g(), n.schedule(t, e, s))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < tl.length; e++) o[tl[e]].cancel(t);
          },
          state: s,
          steps: o,
        };
      }
      let {
          schedule: td,
          cancel: tc,
          state: tp,
          steps: tm,
        } = tu(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : to,
          !0
        ),
        tf = new Set(),
        tg = !1,
        ty = !1,
        tv = !1;
      function tx() {
        if (ty) {
          let t = Array.from(tf).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            i = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ts.forEach((i) => {
                  let n = t.getValue(i);
                  void 0 !== n &&
                    (e.push([i, n.get()]),
                    n.set(i.startsWith("scale") ? 1 : 0));
                }),
                e
              );
            })(t);
            e.length && (i.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = i.get(t);
              e &&
                e.forEach(([e, i]) => {
                  t.getValue(e)?.set(i);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (ty = !1), (tg = !1), tf.forEach((t) => t.complete(tv)), tf.clear();
      }
      function tT() {
        tf.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (ty = !0);
        });
      }
      class tw {
        constructor(t, e, i, n, s, r = !1) {
          (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = i),
            (this.motionValue = n),
            (this.element = s),
            (this.isAsync = r);
        }
        scheduleResolve() {
          (this.state = "scheduled"),
            this.isAsync
              ? (tf.add(this),
                tg || ((tg = !0), td.read(tT), td.resolveKeyframes(tx)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: i,
            motionValue: n,
          } = this;
          if (null === t[0]) {
            let s = n?.get(),
              r = t[t.length - 1];
            if (void 0 !== s) t[0] = s;
            else if (i && e) {
              let n = i.readValue(e, r);
              null != n && (t[0] = n);
            }
            void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0]);
          }
          !(function (t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
          })(t);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          (this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tf.delete(this);
        }
        cancel() {
          "scheduled" === this.state &&
            (tf.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tP = (t) => /^0[^.\s]+$/u.test(t),
        tb = (t) => Math.round(1e5 * t) / 1e5,
        tS = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tA =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tM = (t, e) => (i) =>
          !!(
            ("string" == typeof i && tA.test(i) && i.startsWith(t)) ||
            (e && null != i && Object.prototype.hasOwnProperty.call(i, e))
          ),
        tV = (t, e, i) => (n) => {
          if ("string" != typeof n) return n;
          let [s, r, o, a] = n.match(tS);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(r),
            [i]: parseFloat(o),
            alpha: void 0 !== a ? parseFloat(a) : 1,
          };
        },
        tE = (t) => I(0, 255, t),
        tC = { ...U, transform: (t) => Math.round(tE(t)) },
        tD = {
          test: tM("rgb", "red"),
          parse: tV("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: i, alpha: n = 1 }) =>
            "rgba(" +
            tC.transform(t) +
            ", " +
            tC.transform(e) +
            ", " +
            tC.transform(i) +
            ", " +
            tb(N.transform(n)) +
            ")",
        },
        tk = {
          test: tM("#"),
          parse: function (t) {
            let e = "",
              i = "",
              n = "",
              s = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (i = t.substring(3, 5)),
                  (n = t.substring(5, 7)),
                  (s = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (i = t.substring(2, 3)),
                  (n = t.substring(3, 4)),
                  (s = t.substring(4, 5)),
                  (e += e),
                  (i += i),
                  (n += n),
                  (s += s)),
              {
                red: parseInt(e, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1,
              }
            );
          },
          transform: tD.transform,
        },
        tR = {
          test: tM("hsl", "hue"),
          parse: tV("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: i, alpha: n = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            z.transform(tb(e)) +
            ", " +
            z.transform(tb(i)) +
            ", " +
            tb(N.transform(n)) +
            ")",
        },
        tj = {
          test: (t) => tD.test(t) || tk.test(t) || tR.test(t),
          parse: (t) =>
            tD.test(t) ? tD.parse(t) : tR.test(t) ? tR.parse(t) : tk.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tD.transform(t)
              : tR.transform(t),
          getAnimatableNone: (t) => {
            let e = tj.parse(t);
            return (e.alpha = 0), tj.transform(e);
          },
        },
        tL =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tF = "number",
        tB = "color",
        tO =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tI(t) {
        let e = t.toString(),
          i = [],
          n = { color: [], number: [], var: [] },
          s = [],
          r = 0,
          o = e
            .replace(
              tO,
              (t) => (
                tj.test(t)
                  ? (n.color.push(r), s.push(tB), i.push(tj.parse(t)))
                  : t.startsWith("var(")
                  ? (n.var.push(r), s.push("var"), i.push(t))
                  : (n.number.push(r), s.push(tF), i.push(parseFloat(t))),
                ++r,
                "${}"
              )
            )
            .split("${}");
        return { values: i, split: o, indexes: n, types: s };
      }
      function tU(t) {
        return tI(t).values;
      }
      function tN(t) {
        let { split: e, types: i } = tI(t),
          n = e.length;
        return (t) => {
          let s = "";
          for (let r = 0; r < n; r++)
            if (((s += e[r]), void 0 !== t[r])) {
              let e = i[r];
              e === tF
                ? (s += tb(t[r]))
                : e === tB
                ? (s += tj.transform(t[r]))
                : (s += t[r]);
            }
          return s;
        };
      }
      let t$ = (t) =>
          "number" == typeof t ? 0 : tj.test(t) ? tj.getAnimatableNone(t) : t,
        tW = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(tS)?.length || 0) + (t.match(tL)?.length || 0) > 0
            );
          },
          parse: tU,
          createTransformer: tN,
          getAnimatableNone: function (t) {
            let e = tU(t);
            return tN(t)(e.map(t$));
          },
        },
        tY = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tz(t) {
        let [e, i] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = i.match(tS) || [];
        if (!n) return t;
        let s = i.replace(n, ""),
          r = tY.has(e) ? 1 : 0;
        return n !== i && (r *= 100), e + "(" + r + s + ")";
      }
      let tH = /\b([a-z-]*)\(.*?\)/gu,
        tX = {
          ...tW,
          getAnimatableNone: (t) => {
            let e = t.match(tH);
            return e ? e.map(tz).join(" ") : t;
          },
        },
        tK = { ...U, transform: Math.round },
        tq = {
          borderWidth: H,
          borderTopWidth: H,
          borderRightWidth: H,
          borderBottomWidth: H,
          borderLeftWidth: H,
          borderRadius: H,
          radius: H,
          borderTopLeftRadius: H,
          borderTopRightRadius: H,
          borderBottomRightRadius: H,
          borderBottomLeftRadius: H,
          width: H,
          maxWidth: H,
          height: H,
          maxHeight: H,
          top: H,
          right: H,
          bottom: H,
          left: H,
          padding: H,
          paddingTop: H,
          paddingRight: H,
          paddingBottom: H,
          paddingLeft: H,
          margin: H,
          marginTop: H,
          marginRight: H,
          marginBottom: H,
          marginLeft: H,
          backgroundPositionX: H,
          backgroundPositionY: H,
          rotate: Y,
          rotateX: Y,
          rotateY: Y,
          rotateZ: Y,
          scale: $,
          scaleX: $,
          scaleY: $,
          scaleZ: $,
          skew: Y,
          skewX: Y,
          skewY: Y,
          distance: H,
          translateX: H,
          translateY: H,
          translateZ: H,
          x: H,
          y: H,
          z: H,
          perspective: H,
          transformPerspective: H,
          opacity: N,
          originX: q,
          originY: q,
          originZ: H,
          zIndex: tK,
          fillOpacity: N,
          strokeOpacity: N,
          numOctaves: tK,
        },
        t_ = {
          ...tq,
          color: tj,
          backgroundColor: tj,
          outlineColor: tj,
          fill: tj,
          stroke: tj,
          borderColor: tj,
          borderTopColor: tj,
          borderRightColor: tj,
          borderBottomColor: tj,
          borderLeftColor: tj,
          filter: tX,
          WebkitFilter: tX,
        },
        tG = (t) => t_[t];
      function tZ(t, e) {
        let i = tG(t);
        return (
          i !== tX && (i = tW),
          i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
        );
      }
      let tJ = new Set(["auto", "none", "0"]);
      class tQ extends tw {
        constructor(t, e, i, n, s) {
          super(t, e, i, n, s, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: i } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let i = 0; i < t.length; i++) {
            let n = t[i];
            if ("string" == typeof n && P((n = n.trim()))) {
              let s = (function t(e, i, n = 1) {
                Q(
                  n <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth"
                );
                let [s, r] = (function (t) {
                  let e = te.exec(t);
                  if (!e) return [,];
                  let [, i, n, s] = e;
                  return [`--${i ?? n}`, s];
                })(e);
                if (!s) return;
                let o = window.getComputedStyle(i).getPropertyValue(s);
                if (o) {
                  let t = o.trim();
                  return tt(t) ? parseFloat(t) : t;
                }
                return P(r) ? t(r, i, n + 1) : r;
              })(n, e.current);
              void 0 !== s && (t[i] = s),
                i === t.length - 1 && (this.finalKeyframe = n);
            }
          }
          if ((this.resolveNoneKeyframes(), !O.has(i) || 2 !== t.length))
            return;
          let [n, s] = t,
            r = Z(n),
            o = Z(s);
          if (r !== o) {
            if (ti(r) && ti(o))
              for (let e = 0; e < t.length; e++) {
                let i = t[e];
                "string" == typeof i && (t[e] = parseFloat(i));
              }
            else tr[i] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            i = [];
          for (let e = 0; e < t.length; e++) {
            var n;
            (null === t[e] ||
              ("number" == typeof (n = t[e])
                ? 0 === n
                : null === n || "none" === n || "0" === n || tP(n))) &&
              i.push(e);
          }
          i.length &&
            (function (t, e, i) {
              let n,
                s = 0;
              for (; s < t.length && !n; ) {
                let e = t[s];
                "string" == typeof e &&
                  !tJ.has(e) &&
                  tI(e).values.length &&
                  (n = t[s]),
                  s++;
              }
              if (n && i) for (let s of e) t[s] = tZ(i, n);
            })(t, i, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: i } = this;
          if (!t || !t.current) return;
          "height" === i && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tr[i](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let n = e[e.length - 1];
          void 0 !== n && t.getValue(i, n).jump(n, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: i } = this;
          if (!t || !t.current) return;
          let n = t.getValue(e);
          n && n.jump(this.measuredOrigin, !1);
          let s = i.length - 1,
            r = i[s];
          (i[s] = tr[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== r &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = r),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, i]) => {
                t.getValue(e).set(i);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let t0 = (t) => !!(t && t.getVelocity);
      function t1() {
        n = void 0;
      }
      let t5 = {
        now: () => (
          void 0 === n &&
            t5.set(
              tp.isProcessing || ta.useManualTiming
                ? tp.timestamp
                : performance.now()
            ),
          n
        ),
        set: (t) => {
          (n = t), queueMicrotask(t1);
        },
      };
      function t2(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function t3(t, e) {
        let i = t.indexOf(e);
        i > -1 && t.splice(i, 1);
      }
      class t4 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return t2(this.subscriptions, t), () => t3(this.subscriptions, t);
        }
        notify(t, e, i) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, i);
            else
              for (let s = 0; s < n; s++) {
                let n = this.subscriptions[s];
                n && n(t, e, i);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let t9 = (t) => !isNaN(parseFloat(t)),
        t6 = { current: void 0 };
      class t7 {
        constructor(t, e = {}) {
          (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = t5.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t5.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = t9(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new t4());
          let i = this.events[t].add(e);
          return "change" === t
            ? () => {
                i(),
                  td.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : i;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, i) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - i);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set()),
            this.dependents.add(t);
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return t6.current && t6.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t5.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let i = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            i ? (1e3 / i) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function t8(t, e) {
        return new t7(t, e);
      }
      let et = [...G, tj, tW],
        ee = (t) => et.find(_(t)),
        { schedule: ei, cancel: en } = tu(queueMicrotask, !1),
        es = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        er = {};
      for (let t in es) er[t] = { isEnabled: (e) => es[t].some((t) => !!e[t]) };
      let eo = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ea = () => ({ x: eo(), y: eo() }),
        el = () => ({ min: 0, max: 0 }),
        eh = () => ({ x: el(), y: el() });
      var eu = i(44563);
      let ed = { current: null },
        ec = { current: !1 },
        ep = new WeakMap();
      function em(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function ef(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let eg = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        ey = ["initial", ...eg];
      function ev(t) {
        return em(t.animate) || ey.some((e) => ef(t[e]));
      }
      function ex(t) {
        return !!(ev(t) || t.variants);
      }
      function eT(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, i) => {
            (e[0][i] = t.get()), (e[1][i] = t.getVelocity());
          }),
          e
        );
      }
      function ew(t, e, i, n) {
        if ("function" == typeof e) {
          let [s, r] = eT(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [s, r] = eT(n);
          e = e(void 0 !== i ? i : t.custom, s, r);
        }
        return e;
      }
      let eP = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class eb {
        scrapeMotionValuesFromProps(t, e, i) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tw),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t5.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), td.render(this.render, !1, !0));
            });
          let { latestValues: a, renderState: l } = r;
          (this.latestValues = a),
            (this.baseTarget = { ...a }),
            (this.initialValues = e.initial ? { ...a } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = i),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = o),
            (this.blockInitialAnimation = !!s),
            (this.isControllingVariants = ev(e)),
            (this.isVariantNode = ex(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: h, ...u } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in u) {
            let e = u[t];
            void 0 !== a[t] && t0(e) && e.set(a[t]);
          }
        }
        mount(t) {
          (this.current = t),
            ep.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ec.current ||
              (function () {
                if (((ec.current = !0), eu.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (ed.current = t.matches);
                    t.addEventListener("change", e), e();
                  } else ed.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || ed.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          tc(this.notifyUpdate),
          tc(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t);
        }
        removeChild(t) {
          this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t);
        }
        bindToMotionValue(t, e) {
          let i;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let n = a.has(t);
          n && this.onBindTransform && this.onBindTransform();
          let s = e.on("change", (e) => {
            (this.latestValues[t] = e),
              this.props.onUpdate && td.preRender(this.notifyUpdate),
              n && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender();
          });
          window.MotionCheckAppearSync &&
            (i = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              s(), i && i(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in er) {
            let e = er[t];
            if (!e) continue;
            let { isEnabled: i, Feature: n } = e;
            if (
              (!this.features[t] &&
                n &&
                i(this.props) &&
                (this.features[t] = new n(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : eh();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < eP.length; e++) {
            let i = eP[e];
            this.propEventSubscriptions[i] &&
              (this.propEventSubscriptions[i](),
              delete this.propEventSubscriptions[i]);
            let n = t["on" + i];
            n && (this.propEventSubscriptions[i] = this.on(i, n));
          }
          (this.prevMotionValues = (function (t, e, i) {
            for (let n in e) {
              let s = e[n],
                r = i[n];
              if (t0(s)) t.addValue(n, s);
              else if (t0(r)) t.addValue(n, t8(s, { owner: t }));
              else if (r !== s) {
                if (t.hasValue(n)) {
                  let e = t.getValue(n);
                  !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(n);
                  t.addValue(n, t8(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in i) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let i = this.values.get(t);
          e !== i &&
            (i && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let i = this.values.get(t);
          return (
            void 0 === i &&
              void 0 !== e &&
              ((i = t8(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, i)),
            i
          );
        }
        readValue(t, e) {
          let i =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != i &&
              ("string" == typeof i && (tt(i) || tP(i))
                ? (i = parseFloat(i))
                : !ee(i) && tW.test(e) && (i = tZ(t, e)),
              this.setBaseTarget(t, t0(i) ? i.get() : i)),
            t0(i) ? i.get() : i
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e;
          let { initial: i } = this.props;
          if ("string" == typeof i || "object" == typeof i) {
            let n = ew(this.props, i, this.presenceContext?.custom);
            n && (e = n[t]);
          }
          if (i && void 0 !== e) return e;
          let n = this.getBaseTargetFromProps(this.props, t);
          return void 0 === n || t0(n)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : n;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new t4()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          ei.render(this.render);
        }
      }
      class eS extends eb {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tQ);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: i }) {
          delete e[t], delete i[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          t0(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      let eA = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        eM = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        eV = o.length;
      function eE(t, e, i) {
        let { style: n, vars: s, transformOrigin: r } = t,
          l = !1,
          h = !1;
        for (let t in e) {
          let i = e[t];
          if (a.has(t)) {
            l = !0;
            continue;
          }
          if (T(t)) {
            s[t] = i;
            continue;
          }
          {
            let e = eA(i, tq[t]);
            t.startsWith("origin") ? ((h = !0), (r[t] = e)) : (n[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || i
              ? (n.transform = (function (t, e, i) {
                  let n = "",
                    s = !0;
                  for (let r = 0; r < eV; r++) {
                    let a = o[r],
                      l = t[a];
                    if (void 0 === l) continue;
                    let h = !0;
                    if (
                      !(h =
                        "number" == typeof l
                          ? l === (a.startsWith("scale") ? 1 : 0)
                          : 0 === parseFloat(l)) ||
                      i
                    ) {
                      let t = eA(l, tq[a]);
                      if (!h) {
                        s = !1;
                        let e = eM[a] || a;
                        n += `${e}(${t}) `;
                      }
                      i && (e[a] = t);
                    }
                  }
                  return (
                    (n = n.trim()),
                    i ? (n = i(e, s ? "" : n)) : s && (n = "none"),
                    n
                  );
                })(e, t.transform, i))
              : n.transform && (n.transform = "none")),
          h)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: i = 0 } = r;
          n.transformOrigin = `${t} ${e} ${i}`;
        }
      }
      function eC(t, { style: e, vars: i }, n, s) {
        let r;
        let o = t.style;
        for (r in e) o[r] = e[r];
        for (r in (s?.applyProjectionStyles(o, n), i)) o.setProperty(r, i[r]);
      }
      let eD = {};
      function ek(t, { layout: e, layoutId: i }) {
        return (
          a.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== i) && (!!eD[t] || "opacity" === t))
        );
      }
      function eR(t, e, i) {
        let { style: n } = t,
          s = {};
        for (let r in n)
          (t0(n[r]) ||
            (e.style && t0(e.style[r])) ||
            ek(r, t) ||
            i?.getValue(r)?.liveStyle !== void 0) &&
            (s[r] = n[r]);
        return s;
      }
      class ej extends eS {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = eC);
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) return this.projection?.isProjecting ? f(e) : y(t, e);
          {
            let i = window.getComputedStyle(t),
              n = (T(e) ? i.getPropertyValue(e) : i[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return B(t, e);
        }
        build(t, e, i) {
          eE(t, e, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eR(t, e, i);
        }
      }
      let eL = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eF = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eB = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function eO(
        t,
        {
          attrX: e,
          attrY: i,
          attrScale: n,
          pathLength: s,
          pathSpacing: r = 1,
          pathOffset: o = 0,
          ...a
        },
        l,
        h,
        u
      ) {
        if ((eE(t, a, h), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: c } = t;
        d.transform && ((c.transform = d.transform), delete d.transform),
          (c.transform || d.transformOrigin) &&
            ((c.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          c.transform &&
            ((c.transformBox = u?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== i && (d.y = i),
          void 0 !== n && (d.scale = n),
          void 0 !== s &&
            (function (t, e, i = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let r = s ? eF : eB;
              t[r.offset] = H.transform(-n);
              let o = H.transform(e),
                a = H.transform(i);
              t[r.array] = `${o} ${a}`;
            })(d, s, r, o, !1);
      }
      let eI = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        eU = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function eN(t, e, i) {
        let n = eR(t, e, i);
        for (let i in t)
          (t0(t[i]) || t0(e[i])) &&
            (n[
              -1 !== o.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i
            ] = t[i]);
        return n;
      }
      class e$ extends eS {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = eh);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (a.has(e)) {
            let t = tG(e);
            return (t && t.default) || 0;
          }
          return (e = eI.has(e) ? e : eL(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, i) {
          return eN(t, e, i);
        }
        build(t, e, i) {
          eO(t, e, this.isSVGTag, i.transformTemplate, i.style);
        }
        renderInstance(t, e, i, n) {
          !(function (t, e, i, n) {
            for (let i in (eC(t, e, void 0, n), e.attrs))
              t.setAttribute(eI.has(i) ? i : eL(i), e.attrs[i]);
          })(t, e, 0, n);
        }
        mount(t) {
          (this.isSVGTag = eU(t.tagName)), super.mount(t);
        }
      }
      let eW = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function eY(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (eW.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ez = i(57437),
        eH = i(58881);
      let eX = (0, r.createContext)({ strict: !1 });
      var eK = i(45750);
      let eq = (0, r.createContext)({});
      function e_(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let eG = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function eZ(t, e, i) {
        for (let n in e) t0(e[n]) || ek(n, i) || (t[n] = e[n]);
      }
      let eJ = () => ({ ...eG(), attrs: {} }),
        eQ = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function e0(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          eQ.has(t)
        );
      }
      let e1 = (t) => !e0(t);
      try {
        (s = require("@emotion/is-prop-valid").default),
          "function" == typeof s &&
            (e1 = (t) => (t.startsWith("on") ? !e0(t) : s(t)));
      } catch {}
      var e5 = i(64252),
        e2 = i(53576);
      function e3(t) {
        return t0(t) ? t.get() : t;
      }
      let e4 = (t) => (e, i) => {
          let n = (0, r.useContext)(eq),
            s = (0, r.useContext)(e5.O),
            o = () =>
              (function (t, e, i, n) {
                let { scrapeMotionValuesFromProps: s, createRenderState: r } =
                  t;
                return {
                  latestValues: (function (t, e, i, n) {
                    let s = {},
                      r = n(t, {});
                    for (let t in r) s[t] = e3(r[t]);
                    let { initial: o, animate: a } = t,
                      l = ev(t),
                      h = ex(t);
                    e &&
                      h &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let u = !!i && !1 === i.initial,
                      d = (u = u || !1 === o) ? a : o;
                    if (d && "boolean" != typeof d && !em(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let i = 0; i < e.length; i++) {
                        let n = ew(t, e[i]);
                        if (n) {
                          let { transitionEnd: t, transition: e, ...i } = n;
                          for (let t in i) {
                            let e = i[t];
                            if (Array.isArray(e)) {
                              let t = u ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (s[t] = e);
                          }
                          for (let e in t) s[e] = t[e];
                        }
                      }
                    }
                    return s;
                  })(e, i, n, s),
                  renderState: r(),
                };
              })(t, e, n, s);
          return i ? o() : (0, e2.h)(o);
        },
        e9 = e4({ scrapeMotionValuesFromProps: eR, createRenderState: eG }),
        e6 = e4({ scrapeMotionValuesFromProps: eN, createRenderState: eJ }),
        e7 = Symbol.for("motionComponentSymbol");
      function e8(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let it = "data-" + eL("framerAppearId"),
        ie = (0, r.createContext)({});
      var ii = i(11534);
      function is(t) {
        var e, i;
        let { forwardMotionProps: n = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          s = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0;
        s &&
          (function (t) {
            for (let e in t) er[e] = { ...er[e], ...t[e] };
          })(s);
        let a = eY(t) ? e6 : e9;
        function l(e, i) {
          var s;
          let l;
          let h = {
              ...(0, r.useContext)(eK._),
              ...e,
              layoutId: (function (t) {
                let { layoutId: e } = t,
                  i = (0, r.useContext)(eH.p).id;
                return i && void 0 !== e ? i + "-" + e : e;
              })(e),
            },
            { isStatic: u } = h,
            d = (function (t) {
              let { initial: e, animate: i } = (function (t, e) {
                if (ev(t)) {
                  let { initial: e, animate: i } = t;
                  return {
                    initial: !1 === e || ef(e) ? e : void 0,
                    animate: ef(i) ? i : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, r.useContext)(eq));
              return (0, r.useMemo)(
                () => ({ initial: e, animate: i }),
                [e_(e), e_(i)]
              );
            })(e),
            c = a(e, u);
          if (!u && eu.j) {
            (0, r.useContext)(eX).strict;
            let e = (function (t) {
              let { drag: e, layout: i } = er;
              if (!e && !i) return {};
              let n = { ...e, ...i };
              return {
                MeasureLayout:
                  (null == e ? void 0 : e.isEnabled(t)) ||
                  (null == i ? void 0 : i.isEnabled(t))
                    ? n.MeasureLayout
                    : void 0,
                ProjectionNode: n.ProjectionNode,
              };
            })(h);
            (l = e.MeasureLayout),
              (d.visualElement = (function (t, e, i, n, s) {
                var o, a, l, h;
                let { visualElement: u } = (0, r.useContext)(eq),
                  d = (0, r.useContext)(eX),
                  c = (0, r.useContext)(e5.O),
                  p = (0, r.useContext)(eK._).reducedMotion,
                  m = (0, r.useRef)(null);
                (n = n || d.renderer),
                  !m.current &&
                    n &&
                    (m.current = n(t, {
                      visualState: e,
                      parent: u,
                      props: i,
                      presenceContext: c,
                      blockInitialAnimation: !!c && !1 === c.initial,
                      reducedMotionConfig: p,
                    }));
                let f = m.current,
                  g = (0, r.useContext)(ie);
                f &&
                  !f.projection &&
                  s &&
                  ("html" === f.type || "svg" === f.type) &&
                  (function (t, e, i, n) {
                    let {
                      layoutId: s,
                      layout: r,
                      drag: o,
                      dragConstraints: a,
                      layoutScroll: l,
                      layoutRoot: h,
                      layoutCrossfade: u,
                    } = e;
                    (t.projection = new i(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent)
                    )),
                      t.projection.setOptions({
                        layoutId: s,
                        layout: r,
                        alwaysMeasureLayout: !!o || (a && e8(a)),
                        visualElement: t,
                        animationType: "string" == typeof r ? r : "both",
                        initialPromotionConfig: n,
                        crossfade: u,
                        layoutScroll: l,
                        layoutRoot: h,
                      });
                  })(m.current, i, s, g);
                let y = (0, r.useRef)(!1);
                (0, r.useInsertionEffect)(() => {
                  f && y.current && f.update(i, c);
                });
                let v = i[it],
                  x = (0, r.useRef)(
                    !!v &&
                      !(null === (o = (a = window).MotionHandoffIsComplete) ||
                      void 0 === o
                        ? void 0
                        : o.call(a, v)) &&
                      (null ===
                        (l = (h = window).MotionHasOptimisedAnimation) ||
                      void 0 === l
                        ? void 0
                        : l.call(h, v))
                  );
                return (
                  (0, ii.L)(() => {
                    f &&
                      ((y.current = !0),
                      (window.MotionIsMounted = !0),
                      f.updateFeatures(),
                      f.scheduleRenderMicrotask(),
                      x.current &&
                        f.animationState &&
                        f.animationState.animateChanges());
                  }),
                  (0, r.useEffect)(() => {
                    f &&
                      (!x.current &&
                        f.animationState &&
                        f.animationState.animateChanges(),
                      x.current &&
                        (queueMicrotask(() => {
                          var t, e;
                          null ===
                            (t = (e = window).MotionHandoffMarkAsComplete) ||
                            void 0 === t ||
                            t.call(e, v);
                        }),
                        (x.current = !1)),
                      (f.enteringChildren = void 0));
                  }),
                  f
                );
              })(t, c, h, o, e.ProjectionNode));
          }
          return (0, ez.jsxs)(eq.Provider, {
            value: d,
            children: [
              l && d.visualElement
                ? (0, ez.jsx)(l, { visualElement: d.visualElement, ...h })
                : null,
              (function (t, e, i, n, s) {
                let { latestValues: o } = n,
                  a =
                    arguments.length > 5 &&
                    void 0 !== arguments[5] &&
                    arguments[5],
                  l = (
                    eY(t)
                      ? function (t, e, i, n) {
                          let s = (0, r.useMemo)(() => {
                            let i = eJ();
                            return (
                              eO(i, e, eU(n), t.transformTemplate, t.style),
                              { ...i.attrs, style: { ...i.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            eZ(e, t.style, t), (s.style = { ...e, ...s.style });
                          }
                          return s;
                        }
                      : function (t, e) {
                          let i = {},
                            n = (function (t, e) {
                              let i = t.style || {},
                                n = {};
                              return (
                                eZ(n, i, t),
                                Object.assign(
                                  n,
                                  (function (t, e) {
                                    let { transformTemplate: i } = t;
                                    return (0, r.useMemo)(() => {
                                      let t = eG();
                                      return (
                                        eE(t, e, i),
                                        Object.assign({}, t.vars, t.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                n
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((i.draggable = !1),
                              (n.userSelect =
                                n.WebkitUserSelect =
                                n.WebkitTouchCallout =
                                  "none"),
                              (n.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : "pan-".concat("x" === t.drag ? "y" : "x"))),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (i.tabIndex = 0),
                            (i.style = n),
                            i
                          );
                        }
                  )(e, o, s, t),
                  h = (function (t, e, i) {
                    let n = {};
                    for (let s in t)
                      ("values" !== s || "object" != typeof t.values) &&
                        (e1(s) ||
                          (!0 === i && e0(s)) ||
                          (!e && !e0(s)) ||
                          (t.draggable && s.startsWith("onDrag"))) &&
                        (n[s] = t[s]);
                    return n;
                  })(e, "string" == typeof t, a),
                  u = t !== r.Fragment ? { ...h, ...l, ref: i } : {},
                  { children: d } = e,
                  c = (0, r.useMemo)(() => (t0(d) ? d.get() : d), [d]);
                return (0, r.createElement)(t, { ...u, children: c });
              })(
                t,
                e,
                ((s = d.visualElement),
                (0, r.useCallback)(
                  (t) => {
                    t && c.onMount && c.onMount(t),
                      s && (t ? s.mount(t) : s.unmount()),
                      i &&
                        ("function" == typeof i
                          ? i(t)
                          : e8(i) && (i.current = t));
                  },
                  [s]
                )),
                c,
                u,
                n
              ),
            ],
          });
        }
        l.displayName = "motion.".concat(
          "string" == typeof t
            ? t
            : "create(".concat(
                null !==
                  (i =
                    null !== (e = t.displayName) && void 0 !== e
                      ? e
                      : t.name) && void 0 !== i
                  ? i
                  : "",
                ")"
              )
        );
        let h = (0, r.forwardRef)(l);
        return (h[e7] = t), h;
      }
      function ir(t, e, i) {
        let n = t.getProps();
        return ew(n, e, void 0 !== i ? i : n.custom, t);
      }
      function io(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      let ia = (t) => Array.isArray(t);
      function il(t, e) {
        let i = t.getValue("willChange");
        if (t0(i) && i.add) return i.add(e);
        if (!i && ta.WillChange) {
          let i = new ta.WillChange("auto");
          t.addValue("willChange", i), i.add(e);
        }
      }
      function ih(t) {
        (t.duration = 0), (t.type = "keyframes");
      }
      let iu = (t, e) => (i) => e(t(i)),
        id = (...t) => t.reduce(iu),
        ic = (t) => 1e3 * t,
        ip = (t) => t / 1e3,
        im = { layout: 0, mainThread: 0, waapi: 0 };
      function ig(t, e, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6)
          ? t + (e - t) * 6 * i
          : i < 0.5
          ? e
          : i < 2 / 3
          ? t + (e - t) * (2 / 3 - i) * 6
          : t;
      }
      function iy(t, e) {
        return (i) => (i > 0 ? e : t);
      }
      let iv = (t, e, i) => {
          let n = t * t,
            s = i * (e * e - n) + n;
          return s < 0 ? 0 : Math.sqrt(s);
        },
        ix = [tk, tD, tR],
        iT = (t) => ix.find((e) => e.test(t));
      function iw(t) {
        let e = iT(t);
        if (
          (J(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            "color-not-animatable"
          ),
          !e)
        )
          return !1;
        let i = e.parse(t);
        return (
          e === tR &&
            (i = (function ({ hue: t, saturation: e, lightness: i, alpha: n }) {
              (t /= 360), (i /= 100);
              let s = 0,
                r = 0,
                o = 0;
              if ((e /= 100)) {
                let n = i < 0.5 ? i * (1 + e) : i + e - i * e,
                  a = 2 * i - n;
                (s = ig(a, n, t + 1 / 3)),
                  (r = ig(a, n, t)),
                  (o = ig(a, n, t - 1 / 3));
              } else s = r = o = i;
              return {
                red: Math.round(255 * s),
                green: Math.round(255 * r),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(i)),
          i
        );
      }
      let iP = (t, e) => {
          let i = iw(t),
            n = iw(e);
          if (!i || !n) return iy(t, e);
          let s = { ...i };
          return (t) => (
            (s.red = iv(i.red, n.red, t)),
            (s.green = iv(i.green, n.green, t)),
            (s.blue = iv(i.blue, n.blue, t)),
            (s.alpha = A(i.alpha, n.alpha, t)),
            tD.transform(s)
          );
        },
        ib = new Set(["none", "hidden"]);
      function iS(t, e) {
        return (i) => A(t, e, i);
      }
      function iA(t) {
        return "number" == typeof t
          ? iS
          : "string" == typeof t
          ? P(t)
            ? iy
            : tj.test(t)
            ? iP
            : iE
          : Array.isArray(t)
          ? iM
          : "object" == typeof t
          ? tj.test(t)
            ? iP
            : iV
          : iy;
      }
      function iM(t, e) {
        let i = [...t],
          n = i.length,
          s = t.map((t, i) => iA(t)(t, e[i]));
        return (t) => {
          for (let e = 0; e < n; e++) i[e] = s[e](t);
          return i;
        };
      }
      function iV(t, e) {
        let i = { ...t, ...e },
          n = {};
        for (let s in i)
          void 0 !== t[s] && void 0 !== e[s] && (n[s] = iA(t[s])(t[s], e[s]));
        return (t) => {
          for (let e in n) i[e] = n[e](t);
          return i;
        };
      }
      let iE = (t, e) => {
        let i = tW.createTransformer(e),
          n = tI(t),
          s = tI(e);
        return n.indexes.var.length === s.indexes.var.length &&
          n.indexes.color.length === s.indexes.color.length &&
          n.indexes.number.length >= s.indexes.number.length
          ? (ib.has(t) && !s.values.length) || (ib.has(e) && !n.values.length)
            ? ib.has(t)
              ? (i) => (i <= 0 ? t : e)
              : (i) => (i >= 1 ? e : t)
            : id(
                iM(
                  (function (t, e) {
                    let i = [],
                      n = { color: 0, var: 0, number: 0 };
                    for (let s = 0; s < e.values.length; s++) {
                      let r = e.types[s],
                        o = t.indexes[r][n[r]],
                        a = t.values[o] ?? 0;
                      (i[s] = a), n[r]++;
                    }
                    return i;
                  })(n, s),
                  s.values
                ),
                i
              )
          : (J(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different"
            ),
            iy(t, e));
      };
      function iC(t, e, i) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof i
          ? A(t, e, i)
          : iA(t)(t, e);
      }
      let iD = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: (t = !0) => td.update(e, t),
            stop: () => tc(e),
            now: () => (tp.isProcessing ? tp.timestamp : t5.now()),
          };
        },
        ik = (t, e, i = 10) => {
          let n = "",
            s = Math.max(Math.round(e / i), 2);
          for (let e = 0; e < s; e++)
            n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
          return `linear(${n.substring(0, n.length - 2)})`;
        };
      function iR(t) {
        let e = 0,
          i = t.next(e);
        for (; !i.done && e < 2e4; ) (e += 50), (i = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function ij(t, e, i) {
        var n, s;
        let r = Math.max(e - 5, 0);
        return (n = i - t(r)), (s = e - r) ? (1e3 / s) * n : 0;
      }
      let iL = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function iF(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let iB = ["duration", "bounce"],
        iO = ["stiffness", "damping", "mass"];
      function iI(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function iU(t = iL.visualDuration, e = iL.bounce) {
        let i;
        let n =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: s, restDelta: r } = n,
          o = n.keyframes[0],
          a = n.keyframes[n.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: h,
            damping: u,
            mass: d,
            duration: c,
            velocity: p,
            isResolvedFromDuration: m,
          } = (function (t) {
            let e = {
              velocity: iL.velocity,
              stiffness: iL.stiffness,
              damping: iL.damping,
              mass: iL.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!iI(t, iO) && iI(t, iB)) {
              if (t.visualDuration) {
                let i = (2 * Math.PI) / (1.2 * t.visualDuration),
                  n = i * i,
                  s = 2 * I(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(n);
                e = { ...e, mass: iL.mass, stiffness: n, damping: s };
              } else {
                let i = (function ({
                  duration: t = iL.duration,
                  bounce: e = iL.bounce,
                  velocity: i = iL.velocity,
                  mass: n = iL.mass,
                }) {
                  let s, r;
                  J(
                    t <= ic(iL.maxDuration),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit"
                  );
                  let o = 1 - e;
                  (o = I(iL.minDamping, iL.maxDamping, o)),
                    (t = I(iL.minDuration, iL.maxDuration, ip(t))),
                    o < 1
                      ? ((s = (e) => {
                          let n = e * o,
                            s = n * t;
                          return 0.001 - ((n - i) / iF(e, o)) * Math.exp(-s);
                        }),
                        (r = (e) => {
                          let n = e * o * t,
                            r = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            a = iF(Math.pow(e, 2), o);
                          return (
                            ((n * i + i - r) *
                              Math.exp(-n) *
                              (-s(e) + 0.001 > 0 ? -1 : 1)) /
                            a
                          );
                        }))
                      : ((s = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - i) * t + 1)),
                        (r = (e) => t * t * (i - e) * Math.exp(-e * t)));
                  let a = (function (t, e, i) {
                    let n = i;
                    for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                    return n;
                  })(s, r, 5 / t);
                  if (((t = ic(t)), isNaN(a)))
                    return {
                      stiffness: iL.stiffness,
                      damping: iL.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(a, 2) * n;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(n * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...i, mass: iL.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...n, velocity: -ip(n.velocity || 0) }),
          f = p || 0,
          g = u / (2 * Math.sqrt(h * d)),
          y = a - o,
          v = ip(Math.sqrt(h / d)),
          x = 5 > Math.abs(y);
        if (
          (s || (s = x ? iL.restSpeed.granular : iL.restSpeed.default),
          r || (r = x ? iL.restDelta.granular : iL.restDelta.default),
          g < 1)
        ) {
          let t = iF(v, g);
          i = (e) =>
            a -
            Math.exp(-g * v * e) *
              (((f + g * v * y) / t) * Math.sin(t * e) + y * Math.cos(t * e));
        } else if (1 === g)
          i = (t) => a - Math.exp(-v * t) * (y + (f + v * y) * t);
        else {
          let t = v * Math.sqrt(g * g - 1);
          i = (e) => {
            let i = Math.exp(-g * v * e),
              n = Math.min(t * e, 300);
            return (
              a -
              (i * ((f + g * v * y) * Math.sinh(n) + t * y * Math.cosh(n))) / t
            );
          };
        }
        let T = {
          calculatedDuration: (m && c) || null,
          next: (t) => {
            let e = i(t);
            if (m) l.done = t >= c;
            else {
              let n = 0 === t ? f : 0;
              g < 1 && (n = 0 === t ? ic(f) : ij(i, t, e));
              let o = Math.abs(n) <= s,
                h = Math.abs(a - e) <= r;
              l.done = o && h;
            }
            return (l.value = l.done ? a : e), l;
          },
          toString: () => {
            let t = Math.min(iR(T), 2e4),
              e = ik((e) => T.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return T;
      }
      function iN({
        keyframes: t,
        velocity: e = 0,
        power: i = 0.8,
        timeConstant: n = 325,
        bounceDamping: s = 10,
        bounceStiffness: r = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: h = 0.5,
        restSpeed: u,
      }) {
        let d, c;
        let p = t[0],
          m = { done: !1, value: p },
          f = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          y = i * e,
          v = p + y,
          x = void 0 === o ? v : o(v);
        x !== v && (y = x - p);
        let T = (t) => -y * Math.exp(-t / n),
          w = (t) => x + T(t),
          P = (t) => {
            let e = T(t),
              i = w(t);
            (m.done = Math.abs(e) <= h), (m.value = m.done ? x : i);
          },
          b = (t) => {
            f(m.value) &&
              ((d = t),
              (c = iU({
                keyframes: [m.value, g(m.value)],
                velocity: ij(w, t, m.value),
                damping: s,
                stiffness: r,
                restDelta: h,
                restSpeed: u,
              })));
          };
        return (
          b(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (c || void 0 !== d || ((e = !0), P(t), b(t)),
              void 0 !== d && t >= d)
                ? c.next(t - d)
                : (e || P(t), m);
            },
          }
        );
      }
      iU.applyToOptions = (t) => {
        let e = (function (t, e = 100, i) {
          let n = i({ ...t, keyframes: [0, e] }),
            s = Math.min(iR(n), 2e4);
          return {
            type: "keyframes",
            ease: (t) => n.next(s * t).value / e,
            duration: ip(s),
          };
        })(t, 100, iU);
        return (
          (t.ease = e.ease),
          (t.duration = ic(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let i$ = (t, e, i) =>
        (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
      function iW(t, e, i, n) {
        if (t === e && i === n) return to;
        let s = (e) =>
          (function (t, e, i, n, s) {
            let r, o;
            let a = 0;
            do
              (r = i$((o = e + (i - e) / 2), n, s) - t) > 0 ? (i = o) : (e = o);
            while (Math.abs(r) > 1e-7 && ++a < 12);
            return o;
          })(e, 0, 1, t, i);
        return (t) => (0 === t || 1 === t ? t : i$(s(t), e, n));
      }
      let iY = iW(0.42, 0, 1, 1),
        iz = iW(0, 0, 0.58, 1),
        iH = iW(0.42, 0, 0.58, 1),
        iX = (t) => Array.isArray(t) && "number" != typeof t[0],
        iK = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        iq = (t) => (e) => 1 - t(1 - e),
        i_ = iW(0.33, 1.53, 0.69, 0.99),
        iG = iq(i_),
        iZ = iK(iG),
        iJ = (t) =>
          (t *= 2) < 1 ? 0.5 * iG(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        iQ = (t) => 1 - Math.sin(Math.acos(t)),
        i0 = iq(iQ),
        i1 = iK(iQ),
        i5 = (t) => Array.isArray(t) && "number" == typeof t[0],
        i2 = {
          linear: to,
          easeIn: iY,
          easeInOut: iH,
          easeOut: iz,
          circIn: iQ,
          circInOut: i1,
          circOut: i0,
          backIn: iG,
          backInOut: iZ,
          backOut: i_,
          anticipate: iJ,
        },
        i3 = (t) => "string" == typeof t,
        i4 = (t) => {
          if (i5(t)) {
            Q(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length"
            );
            let [e, i, n, s] = t;
            return iW(e, i, n, s);
          }
          return i3(t)
            ? (Q(
                void 0 !== i2[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type"
              ),
              i2[t])
            : t;
        },
        i9 = (t, e, i) => {
          let n = e - t;
          return 0 === n ? 1 : (i - t) / n;
        };
      function i6({
        duration: t = 300,
        keyframes: e,
        times: i,
        ease: n = "easeInOut",
      }) {
        let s = iX(n) ? n.map(i4) : i4(n),
          r = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: i = !0, ease: n, mixer: s } = {}) {
            let r = t.length;
            if (
              (Q(
                r === e.length,
                "Both input and output ranges must be the same length",
                "range-length"
              ),
              1 === r)
            )
              return () => e[0];
            if (2 === r && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[r - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let a = (function (t, e, i) {
                let n = [],
                  s = i || ta.mix || iC,
                  r = t.length - 1;
                for (let i = 0; i < r; i++) {
                  let r = s(t[i], t[i + 1]);
                  e && (r = id(Array.isArray(e) ? e[i] || to : e, r)),
                    n.push(r);
                }
                return n;
              })(e, n, s),
              l = a.length,
              h = (i) => {
                if (o && i < t[0]) return e[0];
                let n = 0;
                if (l > 1) for (; n < t.length - 2 && !(i < t[n + 1]); n++);
                let s = i9(t[n], t[n + 1], i);
                return a[n](s);
              };
            return i ? (e) => h(I(t[0], t[r - 1], e)) : h;
          })(
            (i && i.length === e.length
              ? i
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let i = t[t.length - 1];
                      for (let n = 1; n <= e; n++) {
                        let s = i9(0, e, n);
                        t.push(A(i, 1, s));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(s)
                ? s
                : e.map(() => s || iH).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((r.value = o(e)), (r.done = e >= t), r),
        };
      }
      let i7 = (t) => null !== t;
      function i8(t, { repeat: e, repeatType: i = "loop" }, n, s = 1) {
        let r = t.filter(i7),
          o = s < 0 || (e && "loop" !== i && e % 2 == 1) ? 0 : r.length - 1;
        return o && void 0 !== n ? n : r[o];
      }
      let nt = { decay: iN, inertia: iN, tween: i6, keyframes: i6, spring: iU };
      function ne(t) {
        "string" == typeof t.type && (t.type = nt[t.type]);
      }
      class ni {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let nn = (t) => t / 100;
      class ns extends ni {
        constructor(t) {
          super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              t && t.updatedAt !== t5.now() && this.tick(t5.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.());
            }),
            im.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause();
        }
        initAnimation() {
          let { options: t } = this;
          ne(t);
          let {
              type: e = i6,
              repeat: i = 0,
              repeatDelay: n = 0,
              repeatType: s,
              velocity: r = 0,
            } = t,
            { keyframes: o } = t,
            a = e || i6;
          a !== i6 &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = id(nn, iC(o[0], o[1]))), (o = [0, 100]));
          let l = a({ ...t, keyframes: o });
          "mirror" === s &&
            (this.mirroredGenerator = a({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -r,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = iR(l));
          let { calculatedDuration: h } = l;
          (this.calculatedDuration = h),
            (this.resolvedDuration = h + n),
            (this.totalDuration = this.resolvedDuration * (i + 1) - n),
            (this.generator = l);
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: i,
            totalDuration: n,
            mixKeyframes: s,
            mirroredGenerator: r,
            resolvedDuration: o,
            calculatedDuration: a,
          } = this;
          if (null === this.startTime) return i.next(0);
          let {
            delay: l = 0,
            keyframes: h,
            repeat: u,
            repeatType: d,
            repeatDelay: c,
            type: p,
            onUpdate: m,
            finalKeyframe: f,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - n / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t);
          let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            y = this.playbackSpeed >= 0 ? g < 0 : g > n;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = n);
          let v = this.currentTime,
            x = i;
          if (u) {
            let t = Math.min(this.currentTime, n) / o,
              e = Math.floor(t),
              i = t % 1;
            !i && t >= 1 && (i = 1),
              1 === i && e--,
              (e = Math.min(e, u + 1)) % 2 &&
                ("reverse" === d
                  ? ((i = 1 - i), c && (i -= c / o))
                  : "mirror" === d && (x = r)),
              (v = I(0, 1, i) * o);
          }
          let T = y ? { done: !1, value: h[0] } : x.next(v);
          s && (T.value = s(T.value));
          let { done: w } = T;
          y ||
            null === a ||
            (w =
              this.playbackSpeed >= 0
                ? this.currentTime >= n
                : this.currentTime <= 0);
          let P =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && w));
          return (
            P && p !== iN && (T.value = i8(h, this.options, f, this.speed)),
            m && m(T.value),
            P && this.finish(),
            T
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return ip(this.calculatedDuration);
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + ip(t);
        }
        get time() {
          return ip(this.currentTime);
        }
        set time(t) {
          (t = ic(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(t5.now());
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = ip(this.currentTime));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = iD, startTime: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.();
          let i = this.driver.now();
          "finished" === this.state
            ? (this.updateFinished(), (this.startTime = i))
            : null !== this.holdTime
            ? (this.startTime = i - this.holdTime)
            : this.startTime || (this.startTime = e ?? i),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          (this.state = "paused"),
            this.updateTime(t5.now()),
            (this.holdTime = this.currentTime);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.();
        }
        cancel() {
          (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            im.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let nr = (t) => t.startsWith("--");
      function no(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let na = no(() => void 0 !== window.ScrollTimeline),
        nl = {},
        nh = (function (t, e) {
          let i = no(t);
          return () => nl[e] ?? i();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        nu = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
        nd = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: nu([0, 0.65, 0.55, 1]),
          circOut: nu([0.55, 0, 1, 0.45]),
          backIn: nu([0.31, 0.01, 0.66, -0.59]),
          backOut: nu([0.33, 1.53, 0.69, 0.99]),
        };
      function nc(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class np extends ni {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: i,
            keyframes: n,
            pseudoElement: s,
            allowFlatten: r = !1,
            finalKeyframe: o,
            onComplete: a,
          } = t;
          (this.isPseudoElement = !!s),
            (this.allowFlatten = r),
            (this.options = t),
            Q(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring"
            );
          let l = (function ({ type: t, ...e }) {
            return nc(t) && nh()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          (this.animation = (function (
            t,
            e,
            i,
            {
              delay: n = 0,
              duration: s = 300,
              repeat: r = 0,
              repeatType: o = "loop",
              ease: a = "easeOut",
              times: l,
            } = {},
            h
          ) {
            let u = { [e]: i };
            l && (u.offset = l);
            let d = (function t(e, i) {
              if (e)
                return "function" == typeof e
                  ? nh()
                    ? ik(e, i)
                    : "ease-out"
                  : i5(e)
                  ? nu(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, i) || nd.easeOut)
                  : nd[e];
            })(a, s);
            Array.isArray(d) && (u.easing = d), th.value && im.waapi++;
            let c = {
              delay: n,
              duration: s,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: r + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            h && (c.pseudoElement = h);
            let p = t.animate(u, c);
            return (
              th.value &&
                p.finished.finally(() => {
                  im.waapi--;
                }),
              p
            );
          })(e, i, n, l, s)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !s)) {
                let t = i8(n, this.options, o, this.speed);
                this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : nr(i)
                  ? e.style.setProperty(i, t)
                  : (e.style[i] = t),
                  this.animation.cancel();
              }
              a?.(), this.notifyFinished();
            });
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          return ip(
            Number(this.animation.effect?.getComputedTiming?.().duration || 0)
          );
        }
        get iterationDuration() {
          let { delay: t = 0 } = this.options || {};
          return this.duration + ip(t);
        }
        get time() {
          return ip(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          (this.finishedTime = null), (this.animation.currentTime = ic(t));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t);
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && na())
            ? ((this.animation.timeline = t), to)
            : e(this);
        }
      }
      let nm = { anticipate: iJ, backInOut: iZ, circInOut: i1 };
      class nf extends np {
        constructor(t) {
          "string" == typeof t.ease && t.ease in nm && (t.ease = nm[t.ease]),
            ne(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t);
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: i,
            onComplete: n,
            element: s,
            ...r
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return;
          }
          let o = new ns({ ...r, autoplay: !1 }),
            a = ic(this.finishedTime ?? this.time);
          e.setWithVelocity(o.sample(a - 10).value, o.sample(a).value, 10),
            o.stop();
        }
      }
      let ng = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tW.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        ny = new Set(["opacity", "clipPath", "filter", "transform"]),
        nv = no(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class nx extends ni {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: i = "keyframes",
          repeat: n = 0,
          repeatDelay: s = 0,
          repeatType: r = "loop",
          keyframes: o,
          name: a,
          motionValue: l,
          element: h,
          ...u
        }) {
          super(),
            (this.stop = () => {
              this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel();
            }),
            (this.createdAt = t5.now());
          let d = {
              autoplay: t,
              delay: e,
              type: i,
              repeat: n,
              repeatDelay: s,
              repeatType: r,
              name: a,
              motionValue: l,
              element: h,
              ...u,
            },
            c = h?.KeyframeResolver || tw;
          (this.keyframeResolver = new c(
            o,
            (t, e, i) => this.onKeyframesResolved(t, e, d, !i),
            a,
            l,
            h
          )),
            this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, i, n) {
          this.keyframeResolver = void 0;
          let {
            name: s,
            type: r,
            velocity: o,
            delay: a,
            isHandoff: l,
            onUpdate: h,
          } = i;
          (this.resolvedAt = t5.now()),
            !(function (t, e, i, n) {
              let s = t[0];
              if (null === s) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let r = t[t.length - 1],
                o = ng(s, e),
                a = ng(r, e);
              return (
                J(
                  o === a,
                  `You are trying to animate ${e} from "${s}" to "${r}". "${
                    o ? r : s
                  }" is not an animatable value.`,
                  "value-not-animatable"
                ),
                !!o &&
                  !!a &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let i = 0; i < t.length; i++)
                      if (t[i] !== e) return !0;
                  })(t) ||
                    (("spring" === i || nc(i)) && n))
              );
            })(t, s, r, o) &&
              ((ta.instantAnimations || !a) && h?.(i8(t, i, e)),
              (t[0] = t[t.length - 1]),
              ih(i),
              (i.repeat = 0));
          let u = {
              startTime: n
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...i,
              keyframes: t,
            },
            d =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: i,
                  repeatDelay: n,
                  repeatType: s,
                  damping: r,
                  type: o,
                } = t;
                if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                let { onUpdate: a, transformTemplate: l } = e.owner.getProps();
                return (
                  nv() &&
                  i &&
                  ny.has(i) &&
                  ("transform" !== i || !l) &&
                  !a &&
                  !n &&
                  "mirror" !== s &&
                  0 !== r &&
                  "inertia" !== o
                );
              })(u)
                ? new nf({ ...u, element: u.motionValue.owner.current })
                : new ns(u);
          d.finished.then(() => this.notifyFinished()).catch(to),
            this.pendingTimeline &&
              ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = d);
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tv = !0),
              tT(),
              tx(),
              (tv = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get iterationDuration() {
          return this.animation.iterationDuration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel();
        }
      }
      let nT = (t) => null !== t,
        nw = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        nP = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        nb = { type: "keyframes", duration: 0.8 },
        nS = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        nA = (t, { keyframes: e }) =>
          e.length > 2
            ? nb
            : a.has(t)
            ? t.startsWith("scale")
              ? nP(e[1])
              : nw
            : nS,
        nM =
          (t, e, i, n = {}, s, r) =>
          (o) => {
            let a = io(n, t) || {},
              l = a.delay || n.delay || 0,
              { elapsed: h = 0 } = n;
            h -= ic(l);
            let u = {
              keyframes: Array.isArray(i) ? i : [null, i],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...a,
              delay: -h,
              onUpdate: (t) => {
                e.set(t), a.onUpdate && a.onUpdate(t);
              },
              onComplete: () => {
                o(), a.onComplete && a.onComplete();
              },
              name: t,
              motionValue: e,
              element: r ? void 0 : s,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: i,
              staggerChildren: n,
              staggerDirection: s,
              repeat: r,
              repeatType: o,
              repeatDelay: a,
              from: l,
              elapsed: h,
              ...u
            }) {
              return !!Object.keys(u).length;
            })(a) && Object.assign(u, nA(t, u)),
              u.duration && (u.duration = ic(u.duration)),
              u.repeatDelay && (u.repeatDelay = ic(u.repeatDelay)),
              void 0 !== u.from && (u.keyframes[0] = u.from);
            let d = !1;
            if (
              ((!1 !== u.type && (0 !== u.duration || u.repeatDelay)) ||
                (ih(u), 0 !== u.delay || (d = !0)),
              (ta.instantAnimations || ta.skipAnimations) &&
                ((d = !0), ih(u), (u.delay = 0)),
              (u.allowFlatten = !a.type && !a.ease),
              d && !r && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: i = "loop" }, n) {
                let s = t.filter(nT),
                  r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                return s[r];
              })(u.keyframes, a);
              if (void 0 !== t) {
                td.update(() => {
                  u.onUpdate(t), u.onComplete();
                });
                return;
              }
            }
            return a.isSync ? new ns(u) : new nx(u);
          };
      function nV(t, e, { delay: i = 0, transitionOverride: n, type: s } = {}) {
        let {
          transition: r = t.getDefaultTransition(),
          transitionEnd: o,
          ...a
        } = e;
        n && (r = n);
        let l = [],
          h = s && t.animationState && t.animationState.getState()[s];
        for (let e in a) {
          let n = t.getValue(e, t.latestValues[e] ?? null),
            s = a[e];
          if (
            void 0 === s ||
            (h &&
              (function ({ protectedKeys: t, needsAnimating: e }, i) {
                let n = t.hasOwnProperty(i) && !0 !== e[i];
                return (e[i] = !1), n;
              })(h, e))
          )
            continue;
          let o = { delay: i, ...io(r || {}, e) },
            u = n.get();
          if (
            void 0 !== u &&
            !n.isAnimating &&
            !Array.isArray(s) &&
            s === u &&
            !o.velocity
          )
            continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let i = t.props[it];
            if (i) {
              let t = window.MotionHandoffAnimation(i, e, td);
              null !== t && ((o.startTime = t), (d = !0));
            }
          }
          il(t, e),
            n.start(
              nM(
                e,
                n,
                s,
                t.shouldReduceMotion && O.has(e) ? { type: !1 } : o,
                t,
                d
              )
            );
          let c = n.animation;
          c && l.push(c);
        }
        return (
          o &&
            Promise.all(l).then(() => {
              td.update(() => {
                o &&
                  (function (t, e) {
                    let {
                      transitionEnd: i = {},
                      transition: n = {},
                      ...s
                    } = ir(t, e) || {};
                    for (let e in (s = { ...s, ...i })) {
                      var r;
                      let i = ia((r = s[e])) ? r[r.length - 1] || 0 : r;
                      t.hasValue(e)
                        ? t.getValue(e).set(i)
                        : t.addValue(e, t8(i));
                    }
                  })(t, o);
              });
            }),
          l
        );
      }
      function nE(t, e, i, n = 0, s = 1) {
        let r = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          a = (o - 1) * n;
        return "function" == typeof i ? i(r, o) : 1 === s ? r * n : a - r * n;
      }
      function nC(t, e, i = {}) {
        let n = ir(
            t,
            e,
            "exit" === i.type ? t.presenceContext?.custom : void 0
          ),
          { transition: s = t.getDefaultTransition() || {} } = n || {};
        i.transitionOverride && (s = i.transitionOverride);
        let r = n ? () => Promise.all(nV(t, n, i)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: r = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = s;
                  return (function (t, e, i = 0, n = 0, s = 0, r = 1, o) {
                    let a = [];
                    for (let l of t.variantChildren)
                      l.notify("AnimationStart", e),
                        a.push(
                          nC(l, e, {
                            ...o,
                            delay:
                              i +
                              ("function" == typeof n ? 0 : n) +
                              nE(t.variantChildren, l, n, s, r),
                          }).then(() => l.notify("AnimationComplete", e))
                        );
                    return Promise.all(a);
                  })(t, e, n, r, o, a, i);
                }
              : () => Promise.resolve(),
          { when: a } = s;
        if (!a) return Promise.all([r(), o(i.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [r, o] : [o, r];
          return t().then(() => e());
        }
      }
      function nD(t, e) {
        if (!Array.isArray(e)) return !1;
        let i = e.length;
        if (i !== t.length) return !1;
        for (let n = 0; n < i; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      let nk = ey.length,
        nR = [...eg].reverse(),
        nj = eg.length;
      function nL(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function nF() {
        return {
          animate: nL(!0),
          whileInView: nL(),
          whileHover: nL(),
          whileTap: nL(),
          whileDrag: nL(),
          whileFocus: nL(),
          exit: nL(),
        };
      }
      class nB {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class nO extends nB {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: i }) =>
                        (function (t, e, i = {}) {
                          let n;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            n = Promise.all(e.map((e) => nC(t, e, i)));
                          else if ("string" == typeof e) n = nC(t, e, i);
                          else {
                            let s =
                              "function" == typeof e ? ir(t, e, i.custom) : e;
                            n = Promise.all(nV(t, s, i));
                          }
                          return n.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, i)
                      )
                    ),
                  i = nF(),
                  n = !0,
                  s = (e) => (i, n) => {
                    let s = ir(
                      t,
                      n,
                      "exit" === e ? t.presenceContext?.custom : void 0
                    );
                    if (s) {
                      let { transition: t, transitionEnd: e, ...n } = s;
                      i = { ...i, ...n, ...e };
                    }
                    return i;
                  };
                function r(r) {
                  let { props: o } = t,
                    a =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let i = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (i.initial = e.props.initial),
                            i
                          );
                        }
                        let i = {};
                        for (let t = 0; t < nk; t++) {
                          let n = ey[t],
                            s = e.props[n];
                          (ef(s) || !1 === s) && (i[n] = s);
                        }
                        return i;
                      })(t.parent) || {},
                    l = [],
                    h = new Set(),
                    u = {},
                    d = 1 / 0;
                  for (let e = 0; e < nj; e++) {
                    var c;
                    let p = nR[e],
                      m = i[p],
                      f = void 0 !== o[p] ? o[p] : a[p],
                      g = ef(f),
                      y = p === r ? m.isActive : null;
                    !1 === y && (d = e);
                    let v = f === a[p] && f !== o[p] && g;
                    if (
                      (v && n && t.manuallyAnimateOnMount && (v = !1),
                      (m.protectedKeys = { ...u }),
                      (!m.isActive && null === y) ||
                        (!f && !m.prevProp) ||
                        em(f) ||
                        "boolean" == typeof f)
                    )
                      continue;
                    let x =
                        ((c = m.prevProp),
                        "string" == typeof f
                          ? f !== c
                          : !!Array.isArray(f) && !nD(f, c)),
                      T =
                        x || (p === r && m.isActive && !v && g) || (e > d && g),
                      w = !1,
                      P = Array.isArray(f) ? f : [f],
                      b = P.reduce(s(p), {});
                    !1 === y && (b = {});
                    let { prevResolvedValues: S = {} } = m,
                      A = { ...S, ...b },
                      M = (e) => {
                        (T = !0),
                          h.has(e) && ((w = !0), h.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let i = t.getValue(e);
                        i && (i.liveStyle = !1);
                      };
                    for (let t in A) {
                      let e = b[t],
                        i = S[t];
                      if (!u.hasOwnProperty(t))
                        (ia(e) && ia(i) ? nD(e, i) : e === i)
                          ? void 0 !== e && h.has(t)
                            ? M(t)
                            : (m.protectedKeys[t] = !0)
                          : null != e
                          ? M(t)
                          : h.add(t);
                    }
                    (m.prevProp = f),
                      (m.prevResolvedValues = b),
                      m.isActive && (u = { ...u, ...b }),
                      n && t.blockInitialAnimation && (T = !1);
                    let V = v && x,
                      E = !V || w;
                    T &&
                      E &&
                      l.push(
                        ...P.map((e) => {
                          let i = { type: p };
                          if (
                            "string" == typeof e &&
                            n &&
                            !V &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: n } = t,
                              s = ir(n, e);
                            if (n.enteringChildren && s) {
                              let { delayChildren: e } = s.transition || {};
                              i.delay = nE(n.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: i };
                        })
                      );
                  }
                  if (h.size) {
                    let e = {};
                    if ("boolean" != typeof o.initial) {
                      let i = ir(
                        t,
                        Array.isArray(o.initial) ? o.initial[0] : o.initial
                      );
                      i && i.transition && (e.transition = i.transition);
                    }
                    h.forEach((i) => {
                      let n = t.getBaseTarget(i),
                        s = t.getValue(i);
                      s && (s.liveStyle = !0), (e[i] = n ?? null);
                    }),
                      l.push({ animation: e });
                  }
                  let p = !!l.length;
                  return (
                    n &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (p = !1),
                    (n = !1),
                    p ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: r,
                  setActive: function (e, n) {
                    if (i[e].isActive === n) return Promise.resolve();
                    t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, n)
                    ),
                      (i[e].isActive = n);
                    let s = r(e);
                    for (let t in i) i[t].protectedKeys = {};
                    return s;
                  },
                  setAnimateFunction: function (i) {
                    e = i(t);
                  },
                  getState: () => i,
                  reset: () => {
                    i = nF();
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          em(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.();
        }
      }
      let nI = 0;
      class nU extends nB {
        constructor() {
          super(...arguments), (this.id = nI++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: i } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === i) return;
          let n = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            n.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let nN = { x: !1, y: !1 };
      function n$(t, e, i, n = { passive: !0 }) {
        return t.addEventListener(e, i, n), () => t.removeEventListener(e, i);
      }
      let nW = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function nY(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let nz = (t) => (e) => nW(e) && t(e, nY(e));
      function nH(t, e, i, n) {
        return n$(t, e, nz(i), n);
      }
      function nX(t) {
        return t.max - t.min;
      }
      function nK(t, e, i, n = 0.5) {
        (t.origin = n),
          (t.originPoint = A(e.min, e.max, t.origin)),
          (t.scale = nX(i) / nX(e)),
          (t.translate = A(i.min, i.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function nq(t, e, i, n) {
        nK(t.x, e.x, i.x, n ? n.originX : void 0),
          nK(t.y, e.y, i.y, n ? n.originY : void 0);
      }
      function n_(t, e, i) {
        (t.min = i.min + e.min), (t.max = t.min + nX(e));
      }
      function nG(t, e, i) {
        (t.min = e.min - i.min), (t.max = t.min + nX(e));
      }
      function nZ(t, e, i) {
        nG(t.x, e.x, i.x), nG(t.y, e.y, i.y);
      }
      function nJ(t) {
        return [t("x"), t("y")];
      }
      let nQ = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        n0 = (t, e) => Math.abs(t - e);
      class n1 {
        constructor(
          t,
          e,
          {
            transformPagePoint: i,
            contextWindow: n = window,
            dragSnapToOrigin: s = !1,
            distanceThreshold: r = 3,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              var t, e;
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let i = n3(this.lastMoveEventInfo, this.history),
                n = null !== this.startEvent,
                s =
                  ((t = i.offset),
                  (e = { x: 0, y: 0 }),
                  Math.sqrt(n0(t.x, e.x) ** 2 + n0(t.y, e.y) ** 2) >=
                    this.distanceThreshold);
              if (!n && !s) return;
              let { point: r } = i,
                { timestamp: o } = tp;
              this.history.push({ ...r, timestamp: o });
              let { onStart: a, onMove: l } = this.handlers;
              n ||
                (a && a(this.lastMoveEvent, i),
                (this.startEvent = this.lastMoveEvent)),
                l && l(this.lastMoveEvent, i);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = n5(e, this.transformPagePoint)),
                td.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: i,
                onSessionEnd: n,
                resumeAnimation: s,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && s && s(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let r = n3(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : n5(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && i && i(t, r), n && n(t, r);
            }),
            !nW(t))
          )
            return;
          (this.dragSnapToOrigin = s),
            (this.handlers = e),
            (this.transformPagePoint = i),
            (this.distanceThreshold = r),
            (this.contextWindow = n || window);
          let o = n5(nY(t), this.transformPagePoint),
            { point: a } = o,
            { timestamp: l } = tp;
          this.history = [{ ...a, timestamp: l }];
          let { onSessionStart: h } = e;
          h && h(t, n3(o, this.history)),
            (this.removeListeners = id(
              nH(this.contextWindow, "pointermove", this.handlePointerMove),
              nH(this.contextWindow, "pointerup", this.handlePointerUp),
              nH(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), tc(this.updatePoint);
        }
      }
      function n5(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function n2(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function n3({ point: t }, e) {
        return {
          point: t,
          delta: n2(t, n4(e)),
          offset: n2(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let i = t.length - 1,
              n = null,
              s = n4(t);
            for (
              ;
              i >= 0 && ((n = t[i]), !(s.timestamp - n.timestamp > ic(0.1)));

            )
              i--;
            if (!n) return { x: 0, y: 0 };
            let r = ip(s.timestamp - n.timestamp);
            if (0 === r) return { x: 0, y: 0 };
            let o = { x: (s.x - n.x) / r, y: (s.y - n.y) / r };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function n4(t) {
        return t[t.length - 1];
      }
      function n9(t, e, i) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0,
        };
      }
      function n6(t, e) {
        let i = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([i, n] = [n, i]), { min: i, max: n }
        );
      }
      function n7(t, e, i) {
        return { min: n8(t, e), max: n8(t, i) };
      }
      function n8(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let st = new WeakMap();
      class se {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = eh()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: i } = {}) {
          let { presenceContext: n } = this.visualElement;
          if (n && !1 === n.isPresent) return;
          let { dragSnapToOrigin: s } = this.getProps();
          this.panSession = new n1(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: i } = this.getProps();
                i ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(nY(t).point);
              },
              onStart: (t, e) => {
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: s,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === i || "y" === i
                      ? nN[i]
                        ? null
                        : ((nN[i] = !0),
                          () => {
                            nN[i] = !1;
                          })
                      : nN.x || nN.y
                      ? null
                      : ((nN.x = nN.y = !0),
                        () => {
                          nN.x = nN.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  nJ((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (z.test(e)) {
                      let { projection: i } = this.visualElement;
                      if (i && i.layout) {
                        let n = i.layout.layoutBox[t];
                        if (n) {
                          let t = nX(n);
                          e = (parseFloat(e) / 100) * t;
                        }
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  s && td.postRender(() => s(t, e)),
                  il(this.visualElement, "transform");
                let { animationState: r } = this.visualElement;
                r && r.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                (this.latestPointerEvent = t), (this.latestPanInfo = e);
                let {
                  dragPropagation: i,
                  dragDirectionLock: n,
                  onDirectionLock: s,
                  onDrag: r,
                } = this.getProps();
                if (!i && !this.openDragLock) return;
                let { offset: o } = e;
                if (n && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let i = null;
                    return (
                      Math.abs(t.y) > e
                        ? (i = "y")
                        : Math.abs(t.x) > e && (i = "x"),
                      i
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      s &&
                      s(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  r && r(t, e);
              },
              onSessionEnd: (t, e) => {
                (this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  this.stop(t, e),
                  (this.latestPointerEvent = null),
                  (this.latestPanInfo = null);
              },
              resumeAnimation: () =>
                nJ(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play()
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: s,
              distanceThreshold: i,
              contextWindow: nQ(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let i = t || this.latestPointerEvent,
            n = e || this.latestPanInfo,
            s = this.isDragging;
          if ((this.cancel(), !s || !n || !i)) return;
          let { velocity: r } = n;
          this.startAnimation(r);
          let { onDragEnd: o } = this.getProps();
          o && td.postRender(() => o(i, n));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: i } = this.getProps();
          !i &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, i) {
          let { drag: n } = this.getProps();
          if (!i || !si(t, n, this.currentDirection)) return;
          let s = this.getAxisMotionValue(t),
            r = this.originPoint[t] + i[t];
          this.constraints &&
            this.constraints[t] &&
            (r = (function (t, { min: e, max: i }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? A(e, t, n.min) : Math.max(t, e))
                  : void 0 !== i &&
                    t > i &&
                    (t = n ? A(i, t, n.max) : Math.min(t, i)),
                t
              );
            })(r, this.constraints[t], this.elastic[t])),
            s.set(r);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            i =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            n = this.constraints;
          t && e8(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && i
            ? (this.constraints = (function (
                t,
                { top: e, left: i, bottom: n, right: s }
              ) {
                return { x: n9(t.x, i, s), y: n9(t.y, e, n) };
              })(i.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: n7(t, "left", "right"), y: n7(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              i &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              nJ((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let i = {};
                    return (
                      void 0 !== e.min && (i.min = e.min - t.min),
                      void 0 !== e.max && (i.max = e.max - t.min),
                      i
                    );
                  })(i.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: i } =
            this.getProps();
          if (!e || !e8(e)) return !1;
          let n = e.current;
          Q(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref"
          );
          let { projection: s } = this.visualElement;
          if (!s || !s.layout) return !1;
          let r = (function (t, e, i) {
              let n = B(t, i),
                { scroll: s } = e;
              return s && (j(n.x, s.offset.x), j(n.y, s.offset.y)), n;
            })(n, s.root, this.visualElement.getTransformPagePoint()),
            o = { x: n6((t = s.layout.layoutBox).x, r.x), y: n6(t.y, r.y) };
          if (i) {
            let t = i(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = S(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: i,
              dragElastic: n,
              dragTransition: s,
              dragSnapToOrigin: r,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {};
          return Promise.all(
            nJ((o) => {
              if (!si(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              r && (l = { min: 0, max: 0 });
              let h = {
                type: "inertia",
                velocity: i ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...l,
              };
              return this.startAxisValueAnimation(o, h);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let i = this.getAxisMotionValue(t);
          return (
            il(this.visualElement, t),
            i.start(nM(t, i, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          nJ((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          nJ((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            i = this.visualElement.getProps();
          return (
            i[e] ||
            this.visualElement.getValue(
              t,
              (i.initial ? i.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          nJ((e) => {
            let { drag: i } = this.getProps();
            if (!si(e, i, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              s = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: i, max: r } = n.layout.layoutBox[e];
              s.set(t[e] - A(i, r, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: i } = this.visualElement;
          if (!e8(e) || !i || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          nJ((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let i = e.get();
              n[t] = (function (t, e) {
                let i = 0.5,
                  n = nX(t),
                  s = nX(e);
                return (
                  s > n
                    ? (i = i9(e.min, e.max - n, t.min))
                    : n > s && (i = i9(t.min, t.max - s, e.min)),
                  I(0, 1, i)
                );
              })({ min: i, max: i }, this.constraints[t]);
            }
          });
          let { transformTemplate: s } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = s ? s({}, "") : "none"),
            i.root && i.root.updateScroll(),
            i.updateLayout(),
            this.resolveConstraints(),
            nJ((e) => {
              if (!si(e, t, null)) return;
              let i = this.getAxisMotionValue(e),
                { min: s, max: r } = this.constraints[e];
              i.set(A(s, r, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          st.set(this.visualElement, this);
          let t = nH(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: i = !0 } = this.getProps();
              e && i && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              e8(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: i } = this.visualElement,
            n = i.addEventListener("measure", e);
          i && !i.layout && (i.root && i.root.updateScroll(), i.updateLayout()),
            td.read(e);
          let s = n$(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            r = i.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (nJ((e) => {
                    let i = this.getAxisMotionValue(e);
                    i &&
                      ((this.originPoint[e] += t[e].translate),
                      i.set(i.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), t(), n(), r && r();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: i = !1,
              dragPropagation: n = !1,
              dragConstraints: s = !1,
              dragElastic: r = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: i,
            dragPropagation: n,
            dragConstraints: s,
            dragElastic: r,
            dragMomentum: o,
          };
        }
      }
      function si(t, e, i) {
        return (!0 === e || e === t) && (null === i || i === t);
      }
      class sn extends nB {
        constructor(t) {
          super(t),
            (this.removeGroupControls = to),
            (this.removeListeners = to),
            (this.controls = new se(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || to);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let ss = (t) => (e, i) => {
        t && td.postRender(() => t(e, i));
      };
      class sr extends nB {
        constructor() {
          super(...arguments), (this.removePointerDownListener = to);
        }
        onPointerDown(t) {
          this.session = new n1(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nQ(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: i,
            onPanEnd: n,
          } = this.node.getProps();
          return {
            onSessionStart: ss(t),
            onStart: ss(e),
            onMove: i,
            onEnd: (t, e) => {
              delete this.session, n && td.postRender(() => n(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = nH(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var so = i(49637);
      let sa = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function sl(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let sh = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!H.test(t)) return t;
              t = parseFloat(t);
            }
            let i = sl(t, e.target.x),
              n = sl(t, e.target.y);
            return `${i}% ${n}%`;
          },
        },
        su = !1;
      class sd extends r.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
              layoutId: n,
            } = this.props,
            { projection: s } = t;
          !(function (t) {
            for (let e in t) (eD[e] = t[e]), T(e) && (eD[e].isCSSVariable = !0);
          })(sp),
            s &&
              (e.group && e.group.add(s),
              i && i.register && n && i.register(s),
              su && s.root.didUpdate(),
              s.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              s.setOptions({
                ...s.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (sa.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: i,
              drag: n,
              isPresent: s,
            } = this.props,
            { projection: r } = i;
          return (
            r &&
              ((r.isPresent = s),
              (su = !0),
              n || t.layoutDependency !== e || void 0 === e || t.isPresent !== s
                ? r.willUpdate()
                : this.safeToRemove(),
              t.isPresent === s ||
                (s
                  ? r.promote()
                  : r.relegate() ||
                    td.postRender(() => {
                      let t = r.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ei.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: i,
            } = this.props,
            { projection: n } = t;
          (su = !0),
            n &&
              (n.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(n),
              i && i.deregister && i.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function sc(t) {
        let [e, i] = (0, so.oO)(),
          n = (0, r.useContext)(eH.p);
        return (0, ez.jsx)(sd, {
          ...t,
          layoutGroup: n,
          switchLayoutGroup: (0, r.useContext)(ie),
          isPresent: e,
          safeToRemove: i,
        });
      }
      let sp = {
        borderRadius: {
          ...sh,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: sh,
        borderTopRightRadius: sh,
        borderBottomLeftRadius: sh,
        borderBottomRightRadius: sh,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: i }) => {
            let n = tW.parse(t);
            if (n.length > 5) return t;
            let s = tW.createTransformer(t),
              r = "number" != typeof n[0] ? 1 : 0,
              o = i.x.scale * e.x,
              a = i.y.scale * e.y;
            (n[0 + r] /= o), (n[1 + r] /= a);
            let l = A(o, a, 0.5);
            return (
              "number" == typeof n[2 + r] && (n[2 + r] /= l),
              "number" == typeof n[3 + r] && (n[3 + r] /= l),
              s(n)
            );
          },
        },
      };
      var sm = i(41464);
      function sf(t) {
        return (0, sm.K)(t) && "ownerSVGElement" in t;
      }
      let sg = (t, e) => t.depth - e.depth;
      class sy {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          t2(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          t3(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(sg),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let sv = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        sx = sv.length,
        sT = (t) => ("string" == typeof t ? parseFloat(t) : t),
        sw = (t) => "number" == typeof t || H.test(t);
      function sP(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let sb = sA(0, 0.5, i0),
        sS = sA(0.5, 0.95, to);
      function sA(t, e, i) {
        return (n) => (n < t ? 0 : n > e ? 1 : i(i9(t, e, n)));
      }
      function sM(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function sV(t, e) {
        sM(t.x, e.x), sM(t.y, e.y);
      }
      function sE(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function sC(t, e, i, n, s) {
        return (
          (t -= e),
          (t = n + (1 / i) * (t - n)),
          void 0 !== s && (t = n + (1 / s) * (t - n)),
          t
        );
      }
      function sD(t, e, [i, n, s], r, o) {
        !(function (t, e = 0, i = 1, n = 0.5, s, r = t, o = t) {
          if (
            (z.test(e) &&
              ((e = parseFloat(e)), (e = A(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let a = A(r.min, r.max, n);
          t === r && (a -= e),
            (t.min = sC(t.min, e, i, a, s)),
            (t.max = sC(t.max, e, i, a, s));
        })(t, e[i], e[n], e[s], e.scale, r, o);
      }
      let sk = ["x", "scaleX", "originX"],
        sR = ["y", "scaleY", "originY"];
      function sj(t, e, i, n) {
        sD(t.x, e, sk, i ? i.x : void 0, n ? n.x : void 0),
          sD(t.y, e, sR, i ? i.y : void 0, n ? n.y : void 0);
      }
      function sL(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function sF(t) {
        return sL(t.x) && sL(t.y);
      }
      function sB(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function sO(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function sI(t, e) {
        return sO(t.x, e.x) && sO(t.y, e.y);
      }
      function sU(t) {
        return nX(t.x) / nX(t.y);
      }
      function sN(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class s$ {
        constructor() {
          this.members = [];
        }
        add(t) {
          t2(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (t3(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let i = this.members.findIndex((e) => t === e);
          if (0 === i) return !1;
          for (let t = i; t >= 0; t--) {
            let i = this.members[t];
            if (!1 !== i.isPresent) {
              e = i;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let i = this.lead;
          if (t !== i && ((this.prevLead = i), (this.lead = t), t.show(), i)) {
            i.instance && i.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = i),
              e && (t.resumeFrom.preserveOpacity = !0),
              i.snapshot &&
                ((t.snapshot = i.snapshot),
                (t.snapshot.latestValues =
                  i.animationValues || i.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && i.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: i } = t;
            e.onExitComplete && e.onExitComplete(),
              i && i.options.onExitComplete && i.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let sW = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        sY = ["", "X", "Y", "Z"],
        sz = 0;
      function sH(t, e, i, n) {
        let { latestValues: s } = e;
        s[t] && ((i[t] = s[t]), e.setStaticValue(t, 0), n && (n[t] = 0));
      }
      function sX({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: i,
        checkIsScrollRoot: n,
        resetTransform: s,
      }) {
        return class {
          constructor(t = {}, i = e?.()) {
            (this.id = sz++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  th.value &&
                    (sW.nodes =
                      sW.calculatedTargetDeltas =
                      sW.calculatedProjections =
                        0),
                  this.nodes.forEach(s_),
                  this.nodes.forEach(s5),
                  this.nodes.forEach(s2),
                  this.nodes.forEach(sG),
                  th.addProjectionMetrics && th.addProjectionMetrics(sW);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = i ? i.root || i : this),
              (this.path = i ? [...i.path, i] : []),
              (this.parent = i),
              (this.depth = i ? i.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new sy());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new t4()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let i = this.eventHandlers.get(t);
            i && i.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            (this.isSVG = sf(e) && !(sf(e) && "svg" === e.tagName)),
              (this.instance = e);
            let { layoutId: i, layout: n, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (n || i) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let i;
              let n = 0,
                s = () => (this.root.updateBlockedByResize = !1);
              td.read(() => {
                n = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  t !== n &&
                    ((n = t),
                    (this.root.updateBlockedByResize = !0),
                    i && i(),
                    (i = (function (t, e) {
                      let i = t5.now(),
                        n = ({ timestamp: e }) => {
                          let s = e - i;
                          s >= 250 && (tc(n), t(s - 250));
                        };
                      return td.setup(n, !0), () => tc(n);
                    })(s, 0)),
                    sa.hasAnimatedSinceResize &&
                      ((sa.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(s1)));
                });
            }
            i && this.root.registerSharedNode(i, this),
              !1 !== this.options.animate &&
                s &&
                (i || n) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: i,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let r =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        s8,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !sI(this.targetLayout, n),
                      h = !e && i;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      h ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...io(r, "layout"), onPlay: o, onComplete: a };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, h);
                    } else
                      e || s1(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              tc(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(s3),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: i } = e.options;
                  if (!i) return;
                  let n = i.props[it];
                  if (window.MotionHasOptimisedAnimation(n, "transform")) {
                    let { layout: t, layoutId: i } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      n,
                      "transform",
                      td,
                      !(t || i)
                    );
                  }
                  let { parent: s } = e;
                  s && !s.hasCheckedOptimisedAppear && t(s);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: i } = this.options;
            if (void 0 === e && !i) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(sJ);
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(sQ);
              return;
            }
            (this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(s0),
                  this.nodes.forEach(sK),
                  this.nodes.forEach(sq))
                : this.nodes.forEach(sQ),
              this.clearAllSnapshots();
            let t = t5.now();
            (tp.delta = I(0, 1e3 / 60, t - tp.timestamp)),
              (tp.timestamp = t),
              (tp.isProcessing = !0),
              tm.update.process(tp),
              tm.preRender.process(tp),
              tm.render.process(tp),
              (tp.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ei.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(sZ), this.sharedNodes.forEach(s4);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              td.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            td.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                nX(this.snapshot.measuredBox.x) ||
                nX(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = eh()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = n(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: i(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!s) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !sF(this.projectionDelta),
              i = this.getTransformTemplate(),
              n = i ? i(this.latestValues, "") : void 0,
              r = n !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || E(this.latestValues) || r) &&
              (s(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let i = this.measurePageBox(),
              n = this.removeElementScroll(i);
            return (
              t && (n = this.removeTransform(n)),
              ri((e = n).x),
              ri(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: i,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return eh();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(rs))) {
              let { scroll: t } = this.root;
              t && (j(e.x, t.offset.x), j(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = eh();
            if ((sV(e, t), this.scroll?.wasRoot)) return e;
            for (let i = 0; i < this.path.length; i++) {
              let n = this.path[i],
                { scroll: s, options: r } = n;
              n !== this.root &&
                s &&
                r.layoutScroll &&
                (s.wasRoot && sV(e, t), j(e.x, s.offset.x), j(e.y, s.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let i = eh();
            sV(i, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                F(i, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                E(n.latestValues) && F(i, n.latestValues);
            }
            return E(this.latestValues) && F(i, this.latestValues), i;
          }
          removeTransform(t) {
            let e = eh();
            sV(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              if (!i.instance || !E(i.latestValues)) continue;
              V(i.latestValues) && i.updateSnapshot();
              let n = eh();
              sV(n, i.measurePageBox()),
                sj(
                  e,
                  i.latestValues,
                  i.snapshot ? i.snapshot.layoutBox : void 0,
                  n
                );
            }
            return E(this.latestValues) && sj(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== tp.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let i = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (i && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (this.layout && (n || s)) {
              if (
                ((this.resolvedRelativeTargetAt = tp.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = eh()),
                    (this.relativeTargetOrigin = eh()),
                    nZ(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    sV(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = eh()), (this.targetWithTransforms = eh())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var r, o, a;
                  this.forceRelativeParentToResolveTarget(),
                    (r = this.target),
                    (o = this.relativeTarget),
                    (a = this.relativeParent.target),
                    n_(r.x, o.x, a.x),
                    n_(r.y, o.y, a.y);
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : sV(this.target, this.layout.layoutBox),
                      R(this.target, this.targetDelta))
                    : sV(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = eh()),
                      (this.relativeTargetOrigin = eh()),
                      nZ(this.relativeTargetOrigin, this.target, t.target),
                      sV(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                th.value && sW.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              V(this.parent.latestValues) ||
              C(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              i = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (i = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (i = !1),
              this.resolvedRelativeTargetAt === tp.timestamp && (i = !1),
              i)
            )
              return;
            let { layout: n, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(n || s))
            )
              return;
            sV(this.layoutCorrected, this.layout.layoutBox);
            let r = this.treeScale.x,
              o = this.treeScale.y;
            !(function (t, e, i, n = !1) {
              let s, r;
              let o = i.length;
              if (o) {
                e.x = e.y = 1;
                for (let a = 0; a < o; a++) {
                  r = (s = i[a]).projectionDelta;
                  let { visualElement: o } = s.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (n &&
                      s.options.layoutScroll &&
                      s.scroll &&
                      s !== s.root &&
                      F(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
                    r && ((e.x *= r.x.scale), (e.y *= r.y.scale), R(t, r)),
                    n && E(s.latestValues) && F(t, s.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = eh()));
            let { target: a } = t;
            if (!a) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (sE(this.prevProjectionDelta.x, this.projectionDelta.x),
                sE(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              nq(
                this.projectionDelta,
                this.layoutCorrected,
                a,
                this.latestValues
              ),
              (this.treeScale.x === r &&
                this.treeScale.y === o &&
                sN(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                sN(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", a)),
              th.value && sW.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = ea()),
              (this.projectionDelta = ea()),
              (this.projectionDeltaWithTransform = ea());
          }
          setAnimationOrigin(t, e = !1) {
            let i;
            let n = this.snapshot,
              s = n ? n.latestValues : {},
              r = { ...this.latestValues },
              o = ea();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = eh(),
              l =
                (n ? n.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              h = this.getStack(),
              u = !h || h.members.length <= 1,
              d = !!(
                l &&
                !u &&
                !0 === this.options.crossfade &&
                !this.path.some(s7)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (s9(o.x, t.x, n),
                  s9(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var h, c, p, m;
                  nZ(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (p = this.relativeTarget),
                    (m = this.relativeTargetOrigin),
                    s6(p.x, m.x, a.x, n),
                    s6(p.y, m.y, a.y, n),
                    i &&
                      ((h = this.relativeTarget),
                      (c = i),
                      sB(h.x, c.x) && sB(h.y, c.y)) &&
                      (this.isProjectionDirty = !1),
                    i || (i = eh()),
                    sV(i, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = r),
                  (function (t, e, i, n, s, r) {
                    s
                      ? ((t.opacity = A(0, i.opacity ?? 1, sb(n))),
                        (t.opacityExit = A(e.opacity ?? 1, 0, sS(n))))
                      : r && (t.opacity = A(e.opacity ?? 1, i.opacity ?? 1, n));
                    for (let s = 0; s < sx; s++) {
                      let r = `border${sv[s]}Radius`,
                        o = sP(e, r),
                        a = sP(i, r);
                      (void 0 !== o || void 0 !== a) &&
                        (o || (o = 0),
                        a || (a = 0),
                        0 === o || 0 === a || sw(o) === sw(a)
                          ? ((t[r] = Math.max(A(sT(o), sT(a), n), 0)),
                            (z.test(a) || z.test(o)) && (t[r] += "%"))
                          : (t[r] = a));
                    }
                    (e.rotate || i.rotate) &&
                      (t.rotate = A(e.rotate || 0, i.rotate || 0, n));
                  })(r, s, this.latestValues, n, d, u)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                (tc(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = td.update(() => {
                (sa.hasAnimatedSinceResize = !0),
                  im.layout++,
                  this.motionValue || (this.motionValue = t8(0)),
                  (this.currentAnimation = (function (t, e, i) {
                    let n = t0(t) ? t : t8(t);
                    return n.start(nM("", n, e, i)), n.animation;
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      im.layout--;
                    },
                    onComplete: () => {
                      im.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: i,
                layout: n,
                latestValues: s,
              } = t;
            if (e && i && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                rn(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                i = this.target || eh();
                let e = nX(this.layout.layoutBox.x);
                (i.x.min = t.target.x.min), (i.x.max = i.x.min + e);
                let n = nX(this.layout.layoutBox.y);
                (i.y.min = t.target.y.min), (i.y.max = i.y.min + n);
              }
              sV(e, i),
                F(e, s),
                nq(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  s
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new s$()),
              this.sharedNodes.get(t).add(e);
            let i = e.options.initialPromotionConfig;
            e.promote({
              transition: i ? i.transition : void 0,
              preserveFollowOpacity:
                i && i.shouldPreserveFollowOpacity
                  ? i.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: i,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, i),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: i } = t;
            if (
              ((i.z ||
                i.rotate ||
                i.rotateX ||
                i.rotateY ||
                i.rotateZ ||
                i.skewX ||
                i.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let n = {};
            i.z && sH("z", t, n, this.animationValues);
            for (let e = 0; e < sY.length; e++)
              sH(`rotate${sY[e]}`, t, n, this.animationValues),
                sH(`skew${sY[e]}`, t, n, this.animationValues);
            for (let e in (t.render(), n))
              t.setStaticValue(e, n[e]),
                this.animationValues && (this.animationValues[e] = n[e]);
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let i = this.getTransformTemplate();
            if (this.needsReset) {
              (this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = e3(e?.pointerEvents) || ""),
                (t.transform = i ? i(this.latestValues, "") : "none");
              return;
            }
            let n = this.getLead();
            if (!this.projectionDelta || !this.layout || !n.target) {
              this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = e3(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !E(this.latestValues) &&
                  ((t.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1));
              return;
            }
            t.visibility = "";
            let s = n.animationValues || n.latestValues;
            this.applyTransformsToTarget();
            let r = (function (t, e, i) {
              let n = "",
                s = t.x.translate / e.x,
                r = t.y.translate / e.y,
                o = i?.z || 0;
              if (
                ((s || r || o) && (n = `translate3d(${s}px, ${r}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (n += `scale(${1 / e.x}, ${1 / e.y}) `),
                i)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: s,
                  rotateY: r,
                  skewX: o,
                  skewY: a,
                } = i;
                t && (n = `perspective(${t}px) ${n}`),
                  e && (n += `rotate(${e}deg) `),
                  s && (n += `rotateX(${s}deg) `),
                  r && (n += `rotateY(${r}deg) `),
                  o && (n += `skewX(${o}deg) `),
                  a && (n += `skewY(${a}deg) `);
              }
              let a = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== a || 1 !== l) && (n += `scale(${a}, ${l})`), n || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, s);
            i && (r = i(s, r)), (t.transform = r);
            let { x: o, y: a } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${
              100 * a.origin
            }% 0`),
            n.animationValues
              ? (t.opacity =
                  n === this
                    ? s.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : s.opacityExit)
              : (t.opacity =
                  n === this
                    ? void 0 !== s.opacity
                      ? s.opacity
                      : ""
                    : void 0 !== s.opacityExit
                    ? s.opacityExit
                    : 0),
            eD)) {
              if (void 0 === s[e]) continue;
              let { correct: i, applyTo: o, isCSSVariable: a } = eD[e],
                l = "none" === r ? s[e] : i(s[e], n);
              if (o) {
                let e = o.length;
                for (let i = 0; i < e; i++) t[o[i]] = l;
              } else
                a
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                n === this ? e3(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(sJ),
              this.root.sharedNodes.clear();
          }
        };
      }
      function sK(t) {
        t.updateLayout();
      }
      function sq(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: i, measuredBox: n } = t.layout,
            { animationType: s } = t.options,
            r = e.source !== t.layout.source;
          "size" === s
            ? nJ((t) => {
                let n = r ? e.measuredBox[t] : e.layoutBox[t],
                  s = nX(n);
                (n.min = i[t].min), (n.max = n.min + s);
              })
            : rn(s, e.layoutBox, i) &&
              nJ((n) => {
                let s = r ? e.measuredBox[n] : e.layoutBox[n],
                  o = nX(i[n]);
                (s.max = s.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = ea();
          nq(o, i, e.layoutBox);
          let a = ea();
          r
            ? nq(a, t.applyTransform(n, !0), e.measuredBox)
            : nq(a, i, e.layoutBox);
          let l = !sF(o),
            h = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: s, layout: r } = n;
              if (s && r) {
                let o = eh();
                nZ(o, e.layoutBox, s.layoutBox);
                let a = eh();
                nZ(a, i, r.layoutBox),
                  sI(o, a) || (h = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: i,
            snapshot: e,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: h,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function s_(t) {
        th.value && sW.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function sG(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function sZ(t) {
        t.clearSnapshot();
      }
      function sJ(t) {
        t.clearMeasurements();
      }
      function sQ(t) {
        t.isLayoutDirty = !1;
      }
      function s0(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function s1(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function s5(t) {
        t.resolveTargetDelta();
      }
      function s2(t) {
        t.calcProjection();
      }
      function s3(t) {
        t.resetSkewAndRotation();
      }
      function s4(t) {
        t.removeLeadSnapshot();
      }
      function s9(t, e, i) {
        (t.translate = A(e.translate, 0, i)),
          (t.scale = A(e.scale, 1, i)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function s6(t, e, i, n) {
        (t.min = A(e.min, i.min, n)), (t.max = A(e.max, i.max, n));
      }
      function s7(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let s8 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        rt = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        re = rt("applewebkit/") && !rt("chrome/") ? Math.round : to;
      function ri(t) {
        (t.min = re(t.min)), (t.max = re(t.max));
      }
      function rn(t, e, i) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(sU(e) - sU(i))))
        );
      }
      function rs(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let rr = sX({
          attachResizeListener: (t, e) => n$(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        ro = { current: void 0 },
        ra = sX({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!ro.current) {
              let t = new rr({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (ro.current = t);
            }
            return ro.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      function rl(t, e) {
        let i = (function (t, e, i) {
            if (t instanceof EventTarget) return [t];
            if ("string" == typeof t) {
              let e = document,
                i = void 0 ?? e.querySelectorAll(t);
              return i ? Array.from(i) : [];
            }
            return Array.from(t);
          })(t),
          n = new AbortController();
        return [i, { passive: !0, ...e, signal: n.signal }, () => n.abort()];
      }
      function rh(t) {
        return !("touch" === t.pointerType || nN.x || nN.y);
      }
      function ru(t, e, i) {
        let { props: n } = t;
        t.animationState &&
          n.whileHover &&
          t.animationState.setActive("whileHover", "Start" === i);
        let s = n["onHover" + i];
        s && td.postRender(() => s(e, nY(e)));
      }
      class rd extends nB {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = rl(t, i),
                o = (t) => {
                  if (!rh(t)) return;
                  let { target: i } = t,
                    n = e(i, t);
                  if ("function" != typeof n || !i) return;
                  let r = (t) => {
                    rh(t) && (n(t), i.removeEventListener("pointerleave", r));
                  };
                  i.addEventListener("pointerleave", r, s);
                };
              return (
                n.forEach((t) => {
                  t.addEventListener("pointerenter", o, s);
                }),
                r
              );
            })(
              t,
              (t, e) => (
                ru(this.node, e, "Start"), (t) => ru(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class rc extends nB {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = id(
            n$(this.node.current, "focus", () => this.onFocus()),
            n$(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var rp = i(13537);
      let rm = (t, e) => !!e && (t === e || rm(t, e.parentElement)),
        rf = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        rg = new WeakSet();
      function ry(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function rv(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let rx = (t, e) => {
        let i = t.currentTarget;
        if (!i) return;
        let n = ry(() => {
          if (rg.has(i)) return;
          rv(i, "down");
          let t = ry(() => {
            rv(i, "up");
          });
          i.addEventListener("keyup", t, e),
            i.addEventListener("blur", () => rv(i, "cancel"), e);
        });
        i.addEventListener("keydown", n, e),
          i.addEventListener(
            "blur",
            () => i.removeEventListener("keydown", n),
            e
          );
      };
      function rT(t) {
        return nW(t) && !(nN.x || nN.y);
      }
      function rw(t, e, i) {
        let { props: n } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          n.whileTap &&
          t.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && td.postRender(() => s(e, nY(e)));
      }
      class rP extends nB {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, i = {}) {
              let [n, s, r] = rl(t, i),
                o = (t) => {
                  let n = t.currentTarget;
                  if (!rT(t)) return;
                  rg.add(n);
                  let r = e(n, t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", a),
                        window.removeEventListener("pointercancel", l),
                        rg.has(n) && rg.delete(n),
                        rT(t) && "function" == typeof r && r(t, { success: e });
                    },
                    a = (t) => {
                      o(
                        t,
                        n === window ||
                          n === document ||
                          i.useGlobalTarget ||
                          rm(n, t.target)
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", a, s),
                    window.addEventListener("pointercancel", l, s);
                };
              return (
                n.forEach((t) => {
                  (i.useGlobalTarget ? window : t).addEventListener(
                    "pointerdown",
                    o,
                    s
                  ),
                    (0, rp.R)(t) &&
                      (t.addEventListener("focus", (t) => rx(t, s)),
                      rf.has(t.tagName) ||
                        -1 !== t.tabIndex ||
                        t.hasAttribute("tabindex") ||
                        (t.tabIndex = 0));
                }),
                r
              );
            })(
              t,
              (t, e) => (
                rw(this.node, e, "Start"),
                (t, { success: e }) => rw(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let rb = new WeakMap(),
        rS = new WeakMap(),
        rA = (t) => {
          let e = rb.get(t.target);
          e && e(t);
        },
        rM = (t) => {
          t.forEach(rA);
        },
        rV = { some: 0, all: 1 };
      class rE extends nB {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: i, amount: n = "some", once: s } = t,
            r = {
              root: e ? e.current : void 0,
              rootMargin: i,
              threshold: "number" == typeof n ? n : rV[n],
            };
          return (function (t, e, i) {
            let n = (function ({ root: t, ...e }) {
              let i = t || document;
              rS.has(i) || rS.set(i, {});
              let n = rS.get(i),
                s = JSON.stringify(e);
              return (
                n[s] ||
                  (n[s] = new IntersectionObserver(rM, { root: t, ...e })),
                n[s]
              );
            })(e);
            return (
              rb.set(t, i),
              n.observe(t),
              () => {
                rb.delete(t), n.unobserve(t);
              }
            );
          })(this.node.current, r, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), s && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: i, onViewportLeave: n } =
                this.node.getProps(),
              r = e ? i : n;
            r && r(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (i) => t[i] !== e[i];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let rC = (function (t, e) {
        if ("undefined" == typeof Proxy) return is;
        let i = new Map(),
          n = (i, n) => is(i, n, t, e);
        return new Proxy((t, e) => n(t, e), {
          get: (s, r) =>
            "create" === r
              ? n
              : (i.has(r) || i.set(r, is(r, void 0, t, e)), i.get(r)),
        });
      })(
        {
          animation: { Feature: nO },
          exit: { Feature: nU },
          inView: { Feature: rE },
          tap: { Feature: rP },
          focus: { Feature: rc },
          hover: { Feature: rd },
          pan: { Feature: sr },
          drag: { Feature: sn, ProjectionNode: ra, MeasureLayout: sc },
          layout: { ProjectionNode: ra, MeasureLayout: sc },
        },
        (t, e) =>
          eY(t) ? new e$(e) : new ej(e, { allowProjection: t !== r.Fragment })
      );
    },
    44563: function (t, e, i) {
      i.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof window;
    },
    53576: function (t, e, i) {
      i.d(e, {
        h: function () {
          return s;
        },
      });
      var n = i(2265);
      function s(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    11534: function (t, e, i) {
      i.d(e, {
        L: function () {
          return s;
        },
      });
      var n = i(2265);
      let s = i(44563).j ? n.useLayoutEffect : n.useEffect;
    },
    13537: function (t, e, i) {
      i.d(e, {
        R: function () {
          return s;
        },
      });
      var n = i(41464);
      function s(t) {
        return (0, n.K)(t) && "offsetHeight" in t;
      }
    },
    41464: function (t, e, i) {
      i.d(e, {
        K: function () {
          return n;
        },
      });
      function n(t) {
        return "object" == typeof t && null !== t;
      }
    },
  },
]);
