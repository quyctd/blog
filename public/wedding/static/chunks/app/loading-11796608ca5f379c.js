(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8555],
  {
    63371: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 66287));
    },
    19722: function (e, n, t) {
      "use strict";
      t.d(n, {
        M2: function () {
          return i;
        },
        Tm: function () {
          return s;
        },
        wm: function () {
          return u;
        },
      });
      var r = t(2265);
      function i(e) {
        return e && r.isValidElement(e) && e.type === r.Fragment;
      }
      let u = (e, n, t) =>
        r.isValidElement(e)
          ? r.cloneElement(e, "function" == typeof t ? t(e.props || {}) : t)
          : n;
      function s(e, n) {
        return u(e, e, n);
      }
    },
    66287: function (e, n, t) {
      "use strict";
      t.r(n);
      var r = t(57437),
        i = t(48651);
      n.default = () =>
        (0, r.jsx)("div", {
          className:
            "flex justify-center items-center h-screen absolute top-0 left-0 right-0 bottom-0 bg-white z-50",
          children: (0, r.jsx)(i.Z, { size: "large" }),
        });
    },
  },
  function (e) {
    e.O(0, [9161, 8651, 2971, 2117, 1744], function () {
      return e((e.s = 63371));
    }),
      (_N_E = e.O());
  },
]);
