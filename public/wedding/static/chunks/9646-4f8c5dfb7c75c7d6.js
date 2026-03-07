"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9646],
  {
    59646: function (e, t, n) {
      let r;
      n.r(t),
        n.d(t, {
          Icon: function () {
            return ex;
          },
          InlineIcon: function () {
            return ek;
          },
          _api: function () {
            return ew;
          },
          addAPIProvider: function () {
            return B;
          },
          addCollection: function () {
            return O;
          },
          addIcon: function () {
            return E;
          },
          buildIcon: function () {
            return A;
          },
          calculateSize: function () {
            return M;
          },
          getIcon: function () {
            return F;
          },
          iconLoaded: function () {
            return S;
          },
          listIcons: function () {
            return y;
          },
          loadIcon: function () {
            return eo;
          },
          loadIcons: function () {
            return ei;
          },
          replaceIDs: function () {
            return $;
          },
          setCustomIconLoader: function () {
            return ec;
          },
          setCustomIconsLoader: function () {
            return el;
          },
        });
      var i,
        o = n(2265);
      let l = Object.freeze({ left: 0, top: 0, width: 16, height: 16 }),
        c = Object.freeze({ rotate: 0, vFlip: !1, hFlip: !1 }),
        a = Object.freeze({ ...l, ...c }),
        u = Object.freeze({ ...a, body: "", hidden: !1 });
      function f(e, t) {
        let n = (function (e, t) {
          let n = {};
          !e.hFlip != !t.hFlip && (n.hFlip = !0),
            !e.vFlip != !t.vFlip && (n.vFlip = !0);
          let r = ((e.rotate || 0) + (t.rotate || 0)) % 4;
          return r && (n.rotate = r), n;
        })(e, t);
        for (let r in u)
          r in c
            ? r in e && !(r in n) && (n[r] = c[r])
            : r in t
            ? (n[r] = t[r])
            : r in e && (n[r] = e[r]);
        return n;
      }
      function s(e, t) {
        let n = [];
        if ("object" != typeof e || "object" != typeof e.icons) return n;
        e.not_found instanceof Array &&
          e.not_found.forEach((e) => {
            t(e, null), n.push(e);
          });
        let r = (function (e, t) {
          let n = e.icons,
            r = e.aliases || Object.create(null),
            i = Object.create(null);
          return (
            Object.keys(n)
              .concat(Object.keys(r))
              .forEach(function e(t) {
                if (n[t]) return (i[t] = []);
                if (!(t in i)) {
                  i[t] = null;
                  let n = r[t] && r[t].parent,
                    o = n && e(n);
                  o && (i[t] = [n].concat(o));
                }
                return i[t];
              }),
            i
          );
        })(e);
        for (let i in r) {
          let o = r[i];
          o &&
            (t(
              i,
              (function (e, t, n) {
                let r = e.icons,
                  i = e.aliases || Object.create(null),
                  o = {};
                function l(e) {
                  o = f(r[e] || i[e], o);
                }
                return l(t), n.forEach(l), f(e, o);
              })(e, i, o)
            ),
            n.push(i));
        }
        return n;
      }
      let d = { provider: "", aliases: {}, not_found: {}, ...l };
      function p(e, t) {
        for (let n in t) if (n in e && typeof e[n] != typeof t[n]) return !1;
        return !0;
      }
      function h(e) {
        if (
          "object" != typeof e ||
          null === e ||
          "string" != typeof e.prefix ||
          !e.icons ||
          "object" != typeof e.icons ||
          !p(e, d)
        )
          return null;
        let t = e.icons;
        for (let e in t) {
          let n = t[e];
          if (!e || "string" != typeof n.body || !p(n, u)) return null;
        }
        let n = e.aliases || Object.create(null);
        for (let e in n) {
          let r = n[e],
            i = r.parent;
          if (!e || "string" != typeof i || (!t[i] && !n[i]) || !p(r, u))
            return null;
        }
        return e;
      }
      let g = Object.create(null);
      function m(e, t) {
        let n = g[e] || (g[e] = Object.create(null));
        return (
          n[t] ||
          (n[t] = {
            provider: e,
            prefix: t,
            icons: Object.create(null),
            missing: new Set(),
          })
        );
      }
      function b(e, t) {
        return h(t)
          ? s(t, (t, n) => {
              n ? (e.icons[t] = n) : e.missing.add(t);
            })
          : [];
      }
      function y(e, t) {
        let n = [];
        return (
          ("string" == typeof e ? [e] : Object.keys(g)).forEach((e) => {
            ("string" == typeof e && "string" == typeof t
              ? [t]
              : Object.keys(g[e] || {})
            ).forEach((t) => {
              let r = m(e, t);
              n = n.concat(
                Object.keys(r.icons).map(
                  (n) => ("" !== e ? "@" + e + ":" : "") + t + ":" + n
                )
              );
            });
          }),
          n
        );
      }
      let v = /^[a-z0-9]+(-[a-z0-9]+)*$/,
        x = function (e, t, n) {
          let r =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "",
            i = e.split(":");
          if ("@" === e.slice(0, 1)) {
            if (i.length < 2 || i.length > 3) return null;
            r = i.shift().slice(1);
          }
          if (i.length > 3 || !i.length) return null;
          if (i.length > 1) {
            let e = i.pop(),
              n = i.pop(),
              o = { provider: i.length > 0 ? i[0] : r, prefix: n, name: e };
            return t && !k(o) ? null : o;
          }
          let o = i[0],
            l = o.split("-");
          if (l.length > 1) {
            let e = { provider: r, prefix: l.shift(), name: l.join("-") };
            return t && !k(e) ? null : e;
          }
          if (n && "" === r) {
            let e = { provider: r, prefix: "", name: o };
            return t && !k(e, n) ? null : e;
          }
          return null;
        },
        k = (e, t) => !!e && !!(((t && "" === e.prefix) || e.prefix) && e.name),
        w = !1;
      function j(e) {
        return "boolean" == typeof e && (w = e), w;
      }
      function I(e) {
        let t = "string" == typeof e ? x(e, !0, w) : e;
        if (t) {
          let e = m(t.provider, t.prefix),
            n = t.name;
          return e.icons[n] || (e.missing.has(n) ? null : void 0);
        }
      }
      function E(e, t) {
        let n = x(e, !0, w);
        if (!n) return !1;
        let r = m(n.provider, n.prefix);
        return t
          ? (function (e, t, n) {
              try {
                if ("string" == typeof n.body)
                  return (e.icons[t] = { ...n }), !0;
              } catch (e) {}
              return !1;
            })(r, n.name, t)
          : (r.missing.add(n.name), !0);
      }
      function O(e, t) {
        if ("object" != typeof e) return !1;
        if (
          ("string" != typeof t && (t = e.provider || ""), w && !t && !e.prefix)
        ) {
          let t = !1;
          return (
            h(e) &&
              ((e.prefix = ""),
              s(e, (e, n) => {
                E(e, n) && (t = !0);
              })),
            t
          );
        }
        let n = e.prefix;
        return !!k({ prefix: n, name: "a" }) && !!b(m(t, n), e);
      }
      function S(e) {
        return !!I(e);
      }
      function F(e) {
        let t = I(e);
        return t ? { ...a, ...t } : t;
      }
      let T = Object.freeze({ width: null, height: null }),
        C = Object.freeze({ ...T, ...c }),
        L = /(-?[0-9.]*[0-9]+[0-9.]*)/g,
        P = /^-?[0-9.]*[0-9]+[0-9.]*$/g;
      function M(e, t, n) {
        if (1 === t) return e;
        if (((n = n || 100), "number" == typeof e))
          return Math.ceil(e * t * n) / n;
        if ("string" != typeof e) return e;
        let r = e.split(L);
        if (null === r || !r.length) return e;
        let i = [],
          o = r.shift(),
          l = P.test(o);
        for (;;) {
          if (l) {
            let e = parseFloat(o);
            isNaN(e) ? i.push(o) : i.push(Math.ceil(e * t * n) / n);
          } else i.push(o);
          if (void 0 === (o = r.shift())) return i.join("");
          l = !l;
        }
      }
      let _ = (e) => "unset" === e || "undefined" === e || "none" === e;
      function A(e, t) {
        let n, r;
        let i = { ...a, ...e },
          o = { ...C, ...t },
          l = { left: i.left, top: i.top, width: i.width, height: i.height },
          c = i.body;
        [i, o].forEach((e) => {
          let t;
          let n = [],
            r = e.hFlip,
            i = e.vFlip,
            o = e.rotate;
          switch (
            (r
              ? i
                ? (o += 2)
                : (n.push(
                    "translate(" +
                      (l.width + l.left).toString() +
                      " " +
                      (0 - l.top).toString() +
                      ")"
                  ),
                  n.push("scale(-1 1)"),
                  (l.top = l.left = 0))
              : i &&
                (n.push(
                  "translate(" +
                    (0 - l.left).toString() +
                    " " +
                    (l.height + l.top).toString() +
                    ")"
                ),
                n.push("scale(1 -1)"),
                (l.top = l.left = 0)),
            o < 0 && (o -= 4 * Math.floor(o / 4)),
            (o %= 4))
          ) {
            case 1:
              n.unshift(
                "rotate(90 " +
                  (t = l.height / 2 + l.top).toString() +
                  " " +
                  t.toString() +
                  ")"
              );
              break;
            case 2:
              n.unshift(
                "rotate(180 " +
                  (l.width / 2 + l.left).toString() +
                  " " +
                  (l.height / 2 + l.top).toString() +
                  ")"
              );
              break;
            case 3:
              n.unshift(
                "rotate(-90 " +
                  (t = l.width / 2 + l.left).toString() +
                  " " +
                  t.toString() +
                  ")"
              );
          }
          o % 2 == 1 &&
            (l.left !== l.top && ((t = l.left), (l.left = l.top), (l.top = t)),
            l.width !== l.height &&
              ((t = l.width), (l.width = l.height), (l.height = t))),
            n.length &&
              (c = (function (e, t, n) {
                var r, i;
                let o = (function (e) {
                  let t =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : "defs",
                    n = "",
                    r = e.indexOf("<" + t);
                  for (; r >= 0; ) {
                    let i = e.indexOf(">", r),
                      o = e.indexOf("</" + t);
                    if (-1 === i || -1 === o) break;
                    let l = e.indexOf(">", o);
                    if (-1 === l) break;
                    (n += e.slice(i + 1, o).trim()),
                      (e = e.slice(0, r).trim() + e.slice(l + 1));
                  }
                  return { defs: n, content: e };
                })(e);
                return (
                  (r = o.defs),
                  (i = t + o.content + n),
                  r ? "<defs>" + r + "</defs>" + i : i
                );
              })(c, '<g transform="' + n.join(" ") + '">', "</g>"));
        });
        let u = o.width,
          f = o.height,
          s = l.width,
          d = l.height;
        null === u
          ? (n = M((r = null === f ? "1em" : "auto" === f ? d : f), s / d))
          : ((n = "auto" === u ? s : u),
            (r = null === f ? M(n, d / s) : "auto" === f ? d : f));
        let p = {},
          h = (e, t) => {
            _(t) || (p[e] = t.toString());
          };
        h("width", n), h("height", r);
        let g = [l.left, l.top, s, d];
        return (
          (p.viewBox = g.join(" ")), { attributes: p, viewBox: g, body: c }
        );
      }
      let z = /\sid="(\S+)"/g,
        N =
          "IconifyId" +
          Date.now().toString(16) +
          ((16777216 * Math.random()) | 0).toString(16),
        R = 0;
      function $(e) {
        let t,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N,
          r = [];
        for (; (t = z.exec(e)); ) r.push(t[1]);
        if (!r.length) return e;
        let i =
          "suffix" + ((16777216 * Math.random()) | Date.now()).toString(16);
        return (
          r.forEach((t) => {
            let r = "function" == typeof n ? n(t) : n + (R++).toString(),
              o = t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            e = e.replace(
              RegExp('([#;"])(' + o + ')([")]|\\.[a-z])', "g"),
              "$1" + r + i + "$3"
            );
          }),
          (e = e.replace(RegExp(i, "g"), ""))
        );
      }
      let D = Object.create(null);
      function U(e) {
        return D[e] || D[""];
      }
      function H(e) {
        let t;
        if ("string" == typeof e.resources) t = [e.resources];
        else if (!((t = e.resources) instanceof Array) || !t.length)
          return null;
        return {
          resources: t,
          path: e.path || "/",
          maxURL: e.maxURL || 500,
          rotate: e.rotate || 750,
          timeout: e.timeout || 5e3,
          random: !0 === e.random,
          index: e.index || 0,
          dataAfterTimeout: !1 !== e.dataAfterTimeout,
        };
      }
      let q = Object.create(null),
        Q = ["https://api.simplesvg.com", "https://api.unisvg.com"],
        J = [];
      for (; Q.length > 0; )
        1 === Q.length
          ? J.push(Q.shift())
          : Math.random() > 0.5
          ? J.push(Q.shift())
          : J.push(Q.pop());
      function B(e, t) {
        let n = H(t);
        return null !== n && ((q[e] = n), !0);
      }
      q[""] = H({ resources: ["https://api.iconify.design"].concat(J) });
      let W = (() => {
        let e;
        try {
          if (((e = fetch), "function" == typeof e)) return e;
        } catch (e) {}
      })();
      function X(e, t) {
        e.forEach((e) => {
          let n = e.loaderCallbacks;
          n && (e.loaderCallbacks = n.filter((e) => e.id !== t));
        });
      }
      let G = 0,
        K = {
          resources: [],
          index: 0,
          timeout: 2e3,
          rotate: 750,
          random: !1,
          dataAfterTimeout: !1,
        };
      function V(e) {
        let t = { ...K, ...e },
          n = [];
        function r() {
          n = n.filter((e) => "pending" === e().status);
        }
        return {
          query: function (e, i, o) {
            let l = (function (e, t, n, r) {
              let i, o;
              let l = e.resources.length,
                c = e.random ? Math.floor(Math.random() * l) : e.index;
              if (e.random) {
                let t = e.resources.slice(0);
                for (i = []; t.length > 1; ) {
                  let e = Math.floor(Math.random() * t.length);
                  i.push(t[e]), (t = t.slice(0, e).concat(t.slice(e + 1)));
                }
                i = i.concat(t);
              } else i = e.resources.slice(c).concat(e.resources.slice(0, c));
              let a = Date.now(),
                u = "pending",
                f = 0,
                s = null,
                d = [],
                p = [];
              function h() {
                s && (clearTimeout(s), (s = null));
              }
              function g() {
                "pending" === u && (u = "aborted"),
                  h(),
                  d.forEach((e) => {
                    "pending" === e.status && (e.status = "aborted");
                  }),
                  (d = []);
              }
              function m(e, t) {
                t && (p = []), "function" == typeof e && p.push(e);
              }
              function b() {
                (u = "failed"),
                  p.forEach((e) => {
                    e(void 0, o);
                  });
              }
              function y() {
                d.forEach((e) => {
                  "pending" === e.status && (e.status = "aborted");
                }),
                  (d = []);
              }
              return (
                "function" == typeof r && p.push(r),
                setTimeout(function r() {
                  if ("pending" !== u) return;
                  h();
                  let l = i.shift();
                  if (void 0 === l) {
                    if (d.length) {
                      s = setTimeout(() => {
                        h(), "pending" === u && (y(), b());
                      }, e.timeout);
                      return;
                    }
                    b();
                    return;
                  }
                  let c = {
                    status: "pending",
                    resource: l,
                    callback: (t, n) => {
                      !(function (t, n, l) {
                        let c = "success" !== n;
                        switch (((d = d.filter((e) => e !== t)), u)) {
                          case "pending":
                            break;
                          case "failed":
                            if (c || !e.dataAfterTimeout) return;
                            break;
                          default:
                            return;
                        }
                        if ("abort" === n) {
                          (o = l), b();
                          return;
                        }
                        if (c) {
                          (o = l), d.length || (i.length ? r() : b());
                          return;
                        }
                        if ((h(), y(), !e.random)) {
                          let n = e.resources.indexOf(t.resource);
                          -1 !== n && n !== e.index && (e.index = n);
                        }
                        (u = "completed"),
                          p.forEach((e) => {
                            e(l);
                          });
                      })(c, t, n);
                    },
                  };
                  d.push(c),
                    f++,
                    (s = setTimeout(r, e.rotate)),
                    n(l, t, c.callback);
                }),
                function () {
                  return {
                    startTime: a,
                    payload: t,
                    status: u,
                    queriesSent: f,
                    queriesPending: d.length,
                    subscribe: m,
                    abort: g,
                  };
                }
              );
            })(t, e, i, (e, t) => {
              r(), o && o(e, t);
            });
            return n.push(l), l;
          },
          find: function (e) {
            return n.find((t) => e(t)) || null;
          },
          setIndex: (e) => {
            t.index = e;
          },
          getIndex: () => t.index,
          cleanup: r,
        };
      }
      function Y() {}
      let Z = Object.create(null);
      function ee(e, t, n) {
        let r, i;
        if ("string" == typeof e) {
          let t = U(e);
          if (!t) return n(void 0, 424), Y;
          i = t.send;
          let o = (function (e) {
            if (!Z[e]) {
              let t = q[e];
              if (!t) return;
              let n = V(t);
              Z[e] = { config: t, redundancy: n };
            }
            return Z[e];
          })(e);
          o && (r = o.redundancy);
        } else {
          let t = H(e);
          if (t) {
            r = V(t);
            let n = U(e.resources ? e.resources[0] : "");
            n && (i = n.send);
          }
        }
        return r && i ? r.query(t, i, n)().abort : (n(void 0, 424), Y);
      }
      function et() {}
      function en(e, t, n) {
        function r() {
          let n = e.pendingIcons;
          t.forEach((t) => {
            n && n.delete(t), e.icons[t] || e.missing.add(t);
          });
        }
        if (n && "object" == typeof n)
          try {
            if (!b(e, n).length) {
              r();
              return;
            }
          } catch (e) {
            console.error(e);
          }
        r(),
          e.iconsLoaderFlag ||
            ((e.iconsLoaderFlag = !0),
            setTimeout(() => {
              (e.iconsLoaderFlag = !1),
                e.pendingCallbacksFlag ||
                  ((e.pendingCallbacksFlag = !0),
                  setTimeout(() => {
                    e.pendingCallbacksFlag = !1;
                    let t = e.loaderCallbacks ? e.loaderCallbacks.slice(0) : [];
                    if (!t.length) return;
                    let n = !1,
                      r = e.provider,
                      i = e.prefix;
                    t.forEach((t) => {
                      let o = t.icons,
                        l = o.pending.length;
                      (o.pending = o.pending.filter((t) => {
                        if (t.prefix !== i) return !0;
                        let l = t.name;
                        if (e.icons[l])
                          o.loaded.push({ provider: r, prefix: i, name: l });
                        else {
                          if (!e.missing.has(l)) return (n = !0), !0;
                          o.missing.push({ provider: r, prefix: i, name: l });
                        }
                        return !1;
                      })),
                        o.pending.length !== l &&
                          (n || X([e], t.id),
                          t.callback(
                            o.loaded.slice(0),
                            o.missing.slice(0),
                            o.pending.slice(0),
                            t.abort
                          ));
                    });
                  }));
            }));
      }
      function er(e, t) {
        e instanceof Promise
          ? e
              .then((e) => {
                t(e);
              })
              .catch(() => {
                t(null);
              })
          : t(e);
      }
      let ei = (e, t) => {
          let n, r;
          let i = (function (e) {
            let t = { loaded: [], missing: [], pending: [] },
              n = Object.create(null);
            e.sort((e, t) =>
              e.provider !== t.provider
                ? e.provider.localeCompare(t.provider)
                : e.prefix !== t.prefix
                ? e.prefix.localeCompare(t.prefix)
                : e.name.localeCompare(t.name)
            );
            let r = { provider: "", prefix: "", name: "" };
            return (
              e.forEach((e) => {
                if (
                  r.name === e.name &&
                  r.prefix === e.prefix &&
                  r.provider === e.provider
                )
                  return;
                r = e;
                let i = e.provider,
                  o = e.prefix,
                  l = e.name,
                  c = n[i] || (n[i] = Object.create(null)),
                  a = c[o] || (c[o] = m(i, o));
                (l in a.icons
                  ? t.loaded
                  : "" === o || a.missing.has(l)
                  ? t.missing
                  : t.pending
                ).push({ provider: i, prefix: o, name: l });
              }),
              t
            );
          })(
            (function (e) {
              let t =
                  !(arguments.length > 1) ||
                  void 0 === arguments[1] ||
                  arguments[1],
                n =
                  arguments.length > 2 &&
                  void 0 !== arguments[2] &&
                  arguments[2],
                r = [];
              return (
                e.forEach((e) => {
                  let i = "string" == typeof e ? x(e, t, n) : e;
                  i && r.push(i);
                }),
                r
              );
            })(e, !0, j())
          );
          if (!i.pending.length) {
            let e = !0;
            return (
              t &&
                setTimeout(() => {
                  e && t(i.loaded, i.missing, i.pending, et);
                }),
              () => {
                e = !1;
              }
            );
          }
          let o = Object.create(null),
            l = [];
          return (
            i.pending.forEach((e) => {
              let { provider: t, prefix: i } = e;
              if (i === r && t === n) return;
              (n = t), (r = i), l.push(m(t, i));
              let c = o[t] || (o[t] = Object.create(null));
              c[i] || (c[i] = []);
            }),
            i.pending.forEach((e) => {
              let { provider: t, prefix: n, name: r } = e,
                i = m(t, n),
                l = i.pendingIcons || (i.pendingIcons = new Set());
              l.has(r) || (l.add(r), o[t][n].push(r));
            }),
            l.forEach((e) => {
              let t = o[e.provider][e.prefix];
              t.length &&
                (e.iconsToLoad
                  ? (e.iconsToLoad = e.iconsToLoad.concat(t).sort())
                  : (e.iconsToLoad = t),
                e.iconsQueueFlag ||
                  ((e.iconsQueueFlag = !0),
                  setTimeout(() => {
                    e.iconsQueueFlag = !1;
                    let { provider: t, prefix: n } = e,
                      r = e.iconsToLoad;
                    if ((delete e.iconsToLoad, !r || !r.length)) return;
                    let i = e.loadIcon;
                    if (e.loadIcons && (r.length > 1 || !i)) {
                      er(e.loadIcons(r, n, t), (t) => {
                        en(e, r, t);
                      });
                      return;
                    }
                    if (i) {
                      r.forEach((r) => {
                        er(i(r, n, t), (t) => {
                          let i = t ? { prefix: n, icons: { [r]: t } } : null;
                          en(e, [r], i);
                        });
                      });
                      return;
                    }
                    let { valid: o, invalid: l } = (function (e) {
                      let t = [],
                        n = [];
                      return (
                        e.forEach((e) => {
                          (e.match(v) ? t : n).push(e);
                        }),
                        { valid: t, invalid: n }
                      );
                    })(r);
                    if ((l.length && en(e, l, null), !o.length)) return;
                    let c = n.match(v) ? U(t) : null;
                    if (!c) {
                      en(e, o, null);
                      return;
                    }
                    c.prepare(t, n, o).forEach((n) => {
                      ee(t, n, (t) => {
                        en(e, n.icons, t);
                      });
                    });
                  })));
            }),
            t
              ? (function (e, t, n) {
                  let r = G++,
                    i = X.bind(null, n, r);
                  if (!t.pending.length) return i;
                  let o = { id: r, icons: t, callback: e, abort: i };
                  return (
                    n.forEach((e) => {
                      (e.loaderCallbacks || (e.loaderCallbacks = [])).push(o);
                    }),
                    i
                  );
                })(t, i, l)
              : et
          );
        },
        eo = (e) =>
          new Promise((t, n) => {
            let r = "string" == typeof e ? x(e, !0) : e;
            if (!r) {
              n(e);
              return;
            }
            ei([r || e], (i) => {
              if (i.length && r) {
                let e = I(r);
                if (e) {
                  t({ ...a, ...e });
                  return;
                }
              }
              n(e);
            });
          });
      function el(e, t, n) {
        m(n || "", t).loadIcons = e;
      }
      function ec(e, t, n) {
        m(n || "", t).loadIcon = e;
      }
      let ea = /[\s,]+/,
        eu = { ...C, inline: !1 },
        ef = {
          xmlns: "http://www.w3.org/2000/svg",
          xmlnsXlink: "http://www.w3.org/1999/xlink",
          "aria-hidden": !0,
          role: "img",
        },
        es = { display: "inline-block" },
        ed = { backgroundColor: "currentColor" },
        ep = { backgroundColor: "transparent" },
        eh = { Image: "var(--svg)", Repeat: "no-repeat", Size: "100% 100%" },
        eg = { WebkitMask: ed, mask: ed, background: ep };
      for (let e in eg) {
        let t = eg[e];
        for (let n in eh) t[e + n] = eh[n];
      }
      let em = { ...eu, inline: !0 };
      function eb(e) {
        return e + (e.match(/^[-0-9.]+$/) ? "px" : "");
      }
      let ey = (e, t, n) => {
        let i = t.inline ? em : eu,
          l = (function (e, t) {
            let n = { ...e };
            for (let e in t) {
              let r = t[e],
                i = typeof r;
              e in T
                ? (null === r || (r && ("string" === i || "number" === i))) &&
                  (n[e] = r)
                : i === typeof n[e] && (n[e] = "rotate" === e ? r % 4 : r);
            }
            return n;
          })(i, t),
          c = t.mode || "svg",
          a = {},
          u = t.style || {},
          f = { ...("svg" === c ? ef : {}) };
        if (n) {
          let e = x(n, !1, !0);
          if (e) {
            let t = ["iconify"];
            for (let n of ["provider", "prefix"])
              e[n] && t.push("iconify--" + e[n]);
            f.className = t.join(" ");
          }
        }
        for (let e in t) {
          let n = t[e];
          if (void 0 !== n)
            switch (e) {
              case "icon":
              case "style":
              case "children":
              case "onLoad":
              case "mode":
              case "ssr":
              case "fallback":
                break;
              case "_ref":
                f.ref = n;
                break;
              case "className":
                f[e] = (f[e] ? f[e] + " " : "") + n;
                break;
              case "inline":
              case "hFlip":
              case "vFlip":
                l[e] = !0 === n || "true" === n || 1 === n;
                break;
              case "flip":
                "string" == typeof n &&
                  (function (e, t) {
                    t.split(ea).forEach((t) => {
                      switch (t.trim()) {
                        case "horizontal":
                          e.hFlip = !0;
                          break;
                        case "vertical":
                          e.vFlip = !0;
                      }
                    });
                  })(l, n);
                break;
              case "color":
                a.color = n;
                break;
              case "rotate":
                "string" == typeof n
                  ? (l[e] = (function (e) {
                      let t =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 0,
                        n = e.replace(/^-?[0-9.]*/, "");
                      function r(e) {
                        for (; e < 0; ) e += 4;
                        return e % 4;
                      }
                      if ("" === n) {
                        let t = parseInt(e);
                        return isNaN(t) ? 0 : r(t);
                      }
                      if (n !== e) {
                        let t = 0;
                        switch (n) {
                          case "%":
                            t = 25;
                            break;
                          case "deg":
                            t = 90;
                        }
                        if (t) {
                          let i = parseFloat(e.slice(0, e.length - n.length));
                          return isNaN(i) ? 0 : (i /= t) % 1 == 0 ? r(i) : 0;
                        }
                      }
                      return t;
                    })(n))
                  : "number" == typeof n && (l[e] = n);
                break;
              case "ariaHidden":
              case "aria-hidden":
                !0 !== n && "true" !== n && delete f["aria-hidden"];
                break;
              default:
                void 0 === i[e] && (f[e] = n);
            }
        }
        let s = A(e, l),
          d = s.attributes;
        if ((l.inline && (a.verticalAlign = "-0.125em"), "svg" === c)) {
          var p;
          (f.style = { ...a, ...u }), Object.assign(f, d);
          let e = 0,
            n = t.id;
          return (
            "string" == typeof n && (n = n.replace(/-/g, "_")),
            (f.dangerouslySetInnerHTML = {
              __html:
                ((p = $(s.body, n ? () => n + "ID" + e++ : "iconifyReact")),
                void 0 === r &&
                  (function () {
                    try {
                      r = window.trustedTypes.createPolicy("iconify", {
                        createHTML: (e) => e,
                      });
                    } catch (e) {
                      r = null;
                    }
                  })(),
                r ? r.createHTML(p) : p),
            }),
            (0, o.createElement)("svg", f)
          );
        }
        let { body: h, width: g, height: m } = e,
          b = "mask" === c || ("bg" !== c && -1 !== h.indexOf("currentColor")),
          y = (function (e, t) {
            let n =
              -1 === e.indexOf("xlink:")
                ? ""
                : ' xmlns:xlink="http://www.w3.org/1999/xlink"';
            for (let e in t) n += " " + e + '="' + t[e] + '"';
            return (
              '<svg xmlns="http://www.w3.org/2000/svg"' + n + ">" + e + "</svg>"
            );
          })(h, { ...d, width: g + "", height: m + "" });
        return (
          (f.style = {
            ...a,
            "--svg":
              'url("data:image/svg+xml,' +
              y
                .replace(/"/g, "'")
                .replace(/%/g, "%25")
                .replace(/#/g, "%23")
                .replace(/</g, "%3C")
                .replace(/>/g, "%3E")
                .replace(/\s+/g, " ") +
              '")',
            width: eb(d.width),
            height: eb(d.height),
            ...es,
            ...(b ? ed : ep),
            ...u,
          }),
          (0, o.createElement)("span", f)
        );
      };
      if (
        (j(!0),
        (i = {
          prepare: (e, t, n) => {
            let r = [],
              i = (function (e, t) {
                let n;
                let r = q[e];
                if (!r) return 0;
                if (r.maxURL) {
                  let e = 0;
                  r.resources.forEach((t) => {
                    e = Math.max(e, t.length);
                  }),
                    (n =
                      r.maxURL -
                      e -
                      r.path.length -
                      (t + ".json?icons=").length);
                } else n = 0;
                return n;
              })(e, t),
              o = "icons",
              l = { type: o, provider: e, prefix: t, icons: [] },
              c = 0;
            return (
              n.forEach((n, a) => {
                (c += n.length + 1) >= i &&
                  a > 0 &&
                  (r.push(l),
                  (l = { type: o, provider: e, prefix: t, icons: [] }),
                  (c = n.length)),
                  l.icons.push(n);
              }),
              r.push(l),
              r
            );
          },
          send: (e, t, n) => {
            if (!W) {
              n("abort", 424);
              return;
            }
            let r = (function (e) {
              if ("string" == typeof e) {
                let t = q[e];
                if (t) return t.path;
              }
              return "/";
            })(t.provider);
            switch (t.type) {
              case "icons":
                r +=
                  t.prefix +
                  ".json?" +
                  new URLSearchParams({ icons: t.icons.join(",") }).toString();
                break;
              case "custom": {
                let e = t.uri;
                r += "/" === e.slice(0, 1) ? e.slice(1) : e;
                break;
              }
              default:
                n("abort", 400);
                return;
            }
            let i = 503;
            W(e + r)
              .then((e) => {
                let t = e.status;
                if (200 !== t) {
                  setTimeout(() => {
                    n(404 === t ? "abort" : "next", t);
                  });
                  return;
                }
                return (i = 501), e.json();
              })
              .then((e) => {
                if ("object" != typeof e || null === e) {
                  setTimeout(() => {
                    404 === e ? n("abort", e) : n("next", i);
                  });
                  return;
                }
                setTimeout(() => {
                  n("success", e);
                });
              })
              .catch(() => {
                n("next", i);
              });
          },
        }),
        (D[""] = i),
        "undefined" != typeof document && "undefined" != typeof window)
      ) {
        let e = window;
        if (void 0 !== e.IconifyPreload) {
          let t = e.IconifyPreload,
            n = "Invalid IconifyPreload syntax.";
          "object" == typeof t &&
            null !== t &&
            (t instanceof Array ? t : [t]).forEach((e) => {
              try {
                ("object" != typeof e ||
                  null === e ||
                  e instanceof Array ||
                  "object" != typeof e.icons ||
                  "string" != typeof e.prefix ||
                  !O(e)) &&
                  console.error(n);
              } catch (e) {
                console.error(n);
              }
            });
        }
        if (void 0 !== e.IconifyProviders) {
          let t = e.IconifyProviders;
          if ("object" == typeof t && null !== t)
            for (let e in t) {
              let n = "IconifyProviders[" + e + "] is invalid.";
              try {
                let r = t[e];
                if ("object" != typeof r || !r || void 0 === r.resources)
                  continue;
                B(e, r) || console.error(n);
              } catch (e) {
                console.error(n);
              }
            }
        }
      }
      function ev(e) {
        let [t, n] = (0, o.useState)(!!e.ssr),
          [r, i] = (0, o.useState)({}),
          [l, c] = (0, o.useState)(
            (function (t) {
              if (t) {
                let t = e.icon;
                if ("object" == typeof t) return { name: "", data: t };
                let n = I(t);
                if (n) return { name: t, data: n };
              }
              return { name: "" };
            })(!!e.ssr)
          );
        function u() {
          let e = r.callback;
          e && (e(), i({}));
        }
        function f(e) {
          if (JSON.stringify(l) !== JSON.stringify(e)) return u(), c(e), !0;
        }
        (0, o.useEffect)(() => (n(!0), u), []),
          (0, o.useEffect)(() => {
            t &&
              (function t() {
                var n;
                let r = e.icon;
                if ("object" == typeof r) {
                  f({ name: "", data: r });
                  return;
                }
                let o = I(r);
                f({ name: r, data: o }) &&
                  (void 0 === o
                    ? i({ callback: ei([r], t) })
                    : o &&
                      (null === (n = e.onLoad) ||
                        void 0 === n ||
                        n.call(e, r)));
              })();
          }, [e.icon, t]);
        let { name: s, data: d } = l;
        return d
          ? ey({ ...a, ...d }, e, s)
          : e.children
          ? e.children
          : e.fallback
          ? e.fallback
          : (0, o.createElement)("span", {});
      }
      let ex = (0, o.forwardRef)((e, t) => ev({ ...e, _ref: t })),
        ek = (0, o.forwardRef)((e, t) => ev({ inline: !0, ...e, _ref: t })),
        ew = {
          getAPIConfig: function (e) {
            return q[e];
          },
          setAPIModule: function (e, t) {
            D[e] = t;
          },
          sendAPIQuery: ee,
          setFetch: function (e) {
            W = e;
          },
          getFetch: function () {
            return W;
          },
          listAPIProviders: function () {
            return Object.keys(q);
          },
        };
    },
  },
]);
