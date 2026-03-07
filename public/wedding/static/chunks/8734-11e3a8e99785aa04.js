(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8734],
  {
    47866: function (t) {
      "use strict";
      let {
          entries: e,
          setPrototypeOf: n,
          isFrozen: r,
          getPrototypeOf: i,
          getOwnPropertyDescriptor: o,
        } = Object,
        { freeze: a, seal: l, create: s } = Object,
        { apply: c, construct: u } = "undefined" != typeof Reflect && Reflect;
      a ||
        (a = function (t) {
          return t;
        }),
        l ||
          (l = function (t) {
            return t;
          }),
        c ||
          (c = function (t, e) {
            for (
              var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2;
              i < n;
              i++
            )
              r[i - 2] = arguments[i];
            return t.apply(e, r);
          }),
        u ||
          (u = function (t) {
            for (
              var e = arguments.length, n = Array(e > 1 ? e - 1 : 0), r = 1;
              r < e;
              r++
            )
              n[r - 1] = arguments[r];
            return new t(...n);
          });
      let m = v(Array.prototype.forEach),
        p = v(Array.prototype.lastIndexOf),
        f = v(Array.prototype.pop),
        d = v(Array.prototype.push),
        h = v(Array.prototype.splice),
        g = v(String.prototype.toLowerCase),
        y = v(String.prototype.toString),
        T = v(String.prototype.match),
        E = v(String.prototype.replace),
        b = v(String.prototype.indexOf),
        A = v(String.prototype.trim),
        _ = v(Object.prototype.hasOwnProperty),
        S = v(RegExp.prototype.test),
        N =
          ((X = TypeError),
          function () {
            for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return u(X, e);
          });
      function v(t) {
        return function (e) {
          e instanceof RegExp && (e.lastIndex = 0);
          for (
            var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), i = 1;
            i < n;
            i++
          )
            r[i - 1] = arguments[i];
          return c(t, e, r);
        };
      }
      function O(t, e) {
        let i =
          arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : g;
        n && n(t, null);
        let o = e.length;
        for (; o--; ) {
          let n = e[o];
          if ("string" == typeof n) {
            let t = i(n);
            t !== n && (r(e) || (e[o] = t), (n = t));
          }
          t[n] = !0;
        }
        return t;
      }
      function w(t) {
        let n = s(null);
        for (let [r, i] of e(t))
          _(t, r) &&
            (Array.isArray(i)
              ? (n[r] = (function (t) {
                  for (let e = 0; e < t.length; e++) _(t, e) || (t[e] = null);
                  return t;
                })(i))
              : i && "object" == typeof i && i.constructor === Object
              ? (n[r] = w(i))
              : (n[r] = i));
        return n;
      }
      function R(t, e) {
        for (; null !== t; ) {
          let n = o(t, e);
          if (n) {
            if (n.get) return v(n.get);
            if ("function" == typeof n.value) return v(n.value);
          }
          t = i(t);
        }
        return function () {
          return null;
        };
      }
      let C = a([
          "a",
          "abbr",
          "acronym",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "bdi",
          "bdo",
          "big",
          "blink",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "center",
          "cite",
          "code",
          "col",
          "colgroup",
          "content",
          "data",
          "datalist",
          "dd",
          "decorator",
          "del",
          "details",
          "dfn",
          "dialog",
          "dir",
          "div",
          "dl",
          "dt",
          "element",
          "em",
          "fieldset",
          "figcaption",
          "figure",
          "font",
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
          "img",
          "input",
          "ins",
          "kbd",
          "label",
          "legend",
          "li",
          "main",
          "map",
          "mark",
          "marquee",
          "menu",
          "menuitem",
          "meter",
          "nav",
          "nobr",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "search",
          "section",
          "select",
          "shadow",
          "slot",
          "small",
          "source",
          "spacer",
          "span",
          "strike",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "template",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "tr",
          "track",
          "tt",
          "u",
          "ul",
          "var",
          "video",
          "wbr",
        ]),
        x = a([
          "svg",
          "a",
          "altglyph",
          "altglyphdef",
          "altglyphitem",
          "animatecolor",
          "animatemotion",
          "animatetransform",
          "circle",
          "clippath",
          "defs",
          "desc",
          "ellipse",
          "enterkeyhint",
          "exportparts",
          "filter",
          "font",
          "g",
          "glyph",
          "glyphref",
          "hkern",
          "image",
          "inputmode",
          "line",
          "lineargradient",
          "marker",
          "mask",
          "metadata",
          "mpath",
          "part",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialgradient",
          "rect",
          "slot",
          "stop",
          "style",
          "switch",
          "symbol",
          "text",
          "textpath",
          "title",
          "tref",
          "tspan",
          "view",
          "vkern",
        ]),
        L = a([
          "feBlend",
          "feColorMatrix",
          "feComponentTransfer",
          "feComposite",
          "feConvolveMatrix",
          "feDiffuseLighting",
          "feDisplacementMap",
          "feDistantLight",
          "feDropShadow",
          "feFlood",
          "feFuncA",
          "feFuncB",
          "feFuncG",
          "feFuncR",
          "feGaussianBlur",
          "feImage",
          "feMerge",
          "feMergeNode",
          "feMorphology",
          "feOffset",
          "fePointLight",
          "feSpecularLighting",
          "feSpotLight",
          "feTile",
          "feTurbulence",
        ]),
        M = a([
          "animate",
          "color-profile",
          "cursor",
          "discard",
          "font-face",
          "font-face-format",
          "font-face-name",
          "font-face-src",
          "font-face-uri",
          "foreignobject",
          "hatch",
          "hatchpath",
          "mesh",
          "meshgradient",
          "meshpatch",
          "meshrow",
          "missing-glyph",
          "script",
          "set",
          "solidcolor",
          "unknown",
          "use",
        ]),
        k = a([
          "math",
          "menclose",
          "merror",
          "mfenced",
          "mfrac",
          "mglyph",
          "mi",
          "mlabeledtr",
          "mmultiscripts",
          "mn",
          "mo",
          "mover",
          "mpadded",
          "mphantom",
          "mroot",
          "mrow",
          "ms",
          "mspace",
          "msqrt",
          "mstyle",
          "msub",
          "msup",
          "msubsup",
          "mtable",
          "mtd",
          "mtext",
          "mtr",
          "munder",
          "munderover",
          "mprescripts",
        ]),
        D = a([
          "maction",
          "maligngroup",
          "malignmark",
          "mlongdiv",
          "mscarries",
          "mscarry",
          "msgroup",
          "mstack",
          "msline",
          "msrow",
          "semantics",
          "annotation",
          "annotation-xml",
          "mprescripts",
          "none",
        ]),
        I = a(["#text"]),
        U = a([
          "accept",
          "action",
          "align",
          "alt",
          "autocapitalize",
          "autocomplete",
          "autopictureinpicture",
          "autoplay",
          "background",
          "bgcolor",
          "border",
          "capture",
          "cellpadding",
          "cellspacing",
          "checked",
          "cite",
          "class",
          "clear",
          "color",
          "cols",
          "colspan",
          "controls",
          "controlslist",
          "coords",
          "crossorigin",
          "datetime",
          "decoding",
          "default",
          "dir",
          "disabled",
          "disablepictureinpicture",
          "disableremoteplayback",
          "download",
          "draggable",
          "enctype",
          "enterkeyhint",
          "exportparts",
          "face",
          "for",
          "headers",
          "height",
          "hidden",
          "high",
          "href",
          "hreflang",
          "id",
          "inert",
          "inputmode",
          "integrity",
          "ismap",
          "kind",
          "label",
          "lang",
          "list",
          "loading",
          "loop",
          "low",
          "max",
          "maxlength",
          "media",
          "method",
          "min",
          "minlength",
          "multiple",
          "muted",
          "name",
          "nonce",
          "noshade",
          "novalidate",
          "nowrap",
          "open",
          "optimum",
          "part",
          "pattern",
          "placeholder",
          "playsinline",
          "popover",
          "popovertarget",
          "popovertargetaction",
          "poster",
          "preload",
          "pubdate",
          "radiogroup",
          "readonly",
          "rel",
          "required",
          "rev",
          "reversed",
          "role",
          "rows",
          "rowspan",
          "spellcheck",
          "scope",
          "selected",
          "shape",
          "size",
          "sizes",
          "slot",
          "span",
          "srclang",
          "start",
          "src",
          "srcset",
          "step",
          "style",
          "summary",
          "tabindex",
          "title",
          "translate",
          "type",
          "usemap",
          "valign",
          "value",
          "width",
          "wrap",
          "xmlns",
          "slot",
        ]),
        P = a([
          "accent-height",
          "accumulate",
          "additive",
          "alignment-baseline",
          "amplitude",
          "ascent",
          "attributename",
          "attributetype",
          "azimuth",
          "basefrequency",
          "baseline-shift",
          "begin",
          "bias",
          "by",
          "class",
          "clip",
          "clippathunits",
          "clip-path",
          "clip-rule",
          "color",
          "color-interpolation",
          "color-interpolation-filters",
          "color-profile",
          "color-rendering",
          "cx",
          "cy",
          "d",
          "dx",
          "dy",
          "diffuseconstant",
          "direction",
          "display",
          "divisor",
          "dur",
          "edgemode",
          "elevation",
          "end",
          "exponent",
          "fill",
          "fill-opacity",
          "fill-rule",
          "filter",
          "filterunits",
          "flood-color",
          "flood-opacity",
          "font-family",
          "font-size",
          "font-size-adjust",
          "font-stretch",
          "font-style",
          "font-variant",
          "font-weight",
          "fx",
          "fy",
          "g1",
          "g2",
          "glyph-name",
          "glyphref",
          "gradientunits",
          "gradienttransform",
          "height",
          "href",
          "id",
          "image-rendering",
          "in",
          "in2",
          "intercept",
          "k",
          "k1",
          "k2",
          "k3",
          "k4",
          "kerning",
          "keypoints",
          "keysplines",
          "keytimes",
          "lang",
          "lengthadjust",
          "letter-spacing",
          "kernelmatrix",
          "kernelunitlength",
          "lighting-color",
          "local",
          "marker-end",
          "marker-mid",
          "marker-start",
          "markerheight",
          "markerunits",
          "markerwidth",
          "maskcontentunits",
          "maskunits",
          "max",
          "mask",
          "media",
          "method",
          "mode",
          "min",
          "name",
          "numoctaves",
          "offset",
          "operator",
          "opacity",
          "order",
          "orient",
          "orientation",
          "origin",
          "overflow",
          "paint-order",
          "path",
          "pathlength",
          "patterncontentunits",
          "patterntransform",
          "patternunits",
          "points",
          "preservealpha",
          "preserveaspectratio",
          "primitiveunits",
          "r",
          "rx",
          "ry",
          "radius",
          "refx",
          "refy",
          "repeatcount",
          "repeatdur",
          "restart",
          "result",
          "rotate",
          "scale",
          "seed",
          "shape-rendering",
          "slope",
          "specularconstant",
          "specularexponent",
          "spreadmethod",
          "startoffset",
          "stddeviation",
          "stitchtiles",
          "stop-color",
          "stop-opacity",
          "stroke-dasharray",
          "stroke-dashoffset",
          "stroke-linecap",
          "stroke-linejoin",
          "stroke-miterlimit",
          "stroke-opacity",
          "stroke",
          "stroke-width",
          "style",
          "surfacescale",
          "systemlanguage",
          "tabindex",
          "tablevalues",
          "targetx",
          "targety",
          "transform",
          "transform-origin",
          "text-anchor",
          "text-decoration",
          "text-rendering",
          "textlength",
          "type",
          "u1",
          "u2",
          "unicode",
          "values",
          "viewbox",
          "visibility",
          "version",
          "vert-adv-y",
          "vert-origin-x",
          "vert-origin-y",
          "width",
          "word-spacing",
          "wrap",
          "writing-mode",
          "xchannelselector",
          "ychannelselector",
          "x",
          "x1",
          "x2",
          "xmlns",
          "y",
          "y1",
          "y2",
          "z",
          "zoomandpan",
        ]),
        z = a([
          "accent",
          "accentunder",
          "align",
          "bevelled",
          "close",
          "columnsalign",
          "columnlines",
          "columnspan",
          "denomalign",
          "depth",
          "dir",
          "display",
          "displaystyle",
          "encoding",
          "fence",
          "frame",
          "height",
          "href",
          "id",
          "largeop",
          "length",
          "linethickness",
          "lspace",
          "lquote",
          "mathbackground",
          "mathcolor",
          "mathsize",
          "mathvariant",
          "maxsize",
          "minsize",
          "movablelimits",
          "notation",
          "numalign",
          "open",
          "rowalign",
          "rowlines",
          "rowspacing",
          "rowspan",
          "rspace",
          "rquote",
          "scriptlevel",
          "scriptminsize",
          "scriptsizemultiplier",
          "selection",
          "separator",
          "separators",
          "stretchy",
          "subscriptshift",
          "supscriptshift",
          "symmetric",
          "voffset",
          "width",
          "xmlns",
        ]),
        H = a([
          "xlink:href",
          "xml:id",
          "xlink:title",
          "xml:space",
          "xmlns:xlink",
        ]),
        F = l(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
        W = l(/<%[\w\W]*|[\w\W]*%>/gm),
        G = l(/\$\{[\w\W]*/gm),
        B = l(/^data-[\-\w.\u00B7-\uFFFF]+$/),
        Y = l(/^aria-[\-\w]+$/),
        j = l(
          /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
        ),
        K = l(/^(?:\w+script|data):/i),
        q = l(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
        V = l(/^html$/i);
      var X,
        $ = Object.freeze({
          __proto__: null,
          ARIA_ATTR: Y,
          ATTR_WHITESPACE: q,
          CUSTOM_ELEMENT: l(/^[a-z][.\w]*(-[.\w]+)+$/i),
          DATA_ATTR: B,
          DOCTYPE_NAME: V,
          ERB_EXPR: W,
          IS_ALLOWED_URI: j,
          IS_SCRIPT_OR_DATA: K,
          MUSTACHE_EXPR: F,
          TMPLIT_EXPR: G,
        });
      let Z = {
          element: 1,
          text: 3,
          progressingInstruction: 7,
          comment: 8,
          document: 9,
        },
        J = function (t, e) {
          if ("object" != typeof t || "function" != typeof t.createPolicy)
            return null;
          let n = null,
            r = "data-tt-policy-suffix";
          e && e.hasAttribute(r) && (n = e.getAttribute(r));
          let i = "dompurify" + (n ? "#" + n : "");
          try {
            return t.createPolicy(i, {
              createHTML: (t) => t,
              createScriptURL: (t) => t,
            });
          } catch (t) {
            return (
              console.warn(
                "TrustedTypes policy " + i + " could not be created."
              ),
              null
            );
          }
        },
        Q = function () {
          return {
            afterSanitizeAttributes: [],
            afterSanitizeElements: [],
            afterSanitizeShadowDOM: [],
            beforeSanitizeAttributes: [],
            beforeSanitizeElements: [],
            beforeSanitizeShadowDOM: [],
            uponSanitizeAttribute: [],
            uponSanitizeElement: [],
            uponSanitizeShadowNode: [],
          };
        };
      var tt = (function t() {
        let n,
          r =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "undefined" == typeof window
              ? null
              : window,
          i = (e) => t(e);
        if (
          ((i.version = "3.2.7"),
          (i.removed = []),
          !r || !r.document || r.document.nodeType !== Z.document || !r.Element)
        )
          return (i.isSupported = !1), i;
        let { document: o } = r,
          l = o,
          c = l.currentScript,
          {
            DocumentFragment: u,
            HTMLTemplateElement: v,
            Node: F,
            Element: W,
            NodeFilter: G,
            NamedNodeMap: B = r.NamedNodeMap || r.MozNamedAttrMap,
            HTMLFormElement: Y,
            DOMParser: K,
            trustedTypes: q,
          } = r,
          X = W.prototype,
          tt = R(X, "cloneNode"),
          te = R(X, "remove"),
          tn = R(X, "nextSibling"),
          tr = R(X, "childNodes"),
          ti = R(X, "parentNode");
        if ("function" == typeof v) {
          let t = o.createElement("template");
          t.content && t.content.ownerDocument && (o = t.content.ownerDocument);
        }
        let to = "",
          {
            implementation: ta,
            createNodeIterator: tl,
            createDocumentFragment: ts,
            getElementsByTagName: tc,
          } = o,
          { importNode: tu } = l,
          tm = Q();
        i.isSupported =
          "function" == typeof e &&
          "function" == typeof ti &&
          ta &&
          void 0 !== ta.createHTMLDocument;
        let {
            MUSTACHE_EXPR: tp,
            ERB_EXPR: tf,
            TMPLIT_EXPR: td,
            DATA_ATTR: th,
            ARIA_ATTR: tg,
            IS_SCRIPT_OR_DATA: ty,
            ATTR_WHITESPACE: tT,
            CUSTOM_ELEMENT: tE,
          } = $,
          { IS_ALLOWED_URI: tb } = $,
          tA = null,
          t_ = O({}, [...C, ...x, ...L, ...k, ...I]),
          tS = null,
          tN = O({}, [...U, ...P, ...z, ...H]),
          tv = Object.seal(
            s(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null,
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1,
              },
            })
          ),
          tO = null,
          tw = null,
          tR = !0,
          tC = !0,
          tx = !1,
          tL = !0,
          tM = !1,
          tk = !0,
          tD = !1,
          tI = !1,
          tU = !1,
          tP = !1,
          tz = !1,
          tH = !1,
          tF = !0,
          tW = !1,
          tG = !0,
          tB = !1,
          tY = {},
          tj = null,
          tK = O({}, [
            "annotation-xml",
            "audio",
            "colgroup",
            "desc",
            "foreignobject",
            "head",
            "iframe",
            "math",
            "mi",
            "mn",
            "mo",
            "ms",
            "mtext",
            "noembed",
            "noframes",
            "noscript",
            "plaintext",
            "script",
            "style",
            "svg",
            "template",
            "thead",
            "title",
            "video",
            "xmp",
          ]),
          tq = null,
          tV = O({}, ["audio", "video", "img", "source", "image", "track"]),
          tX = null,
          t$ = O({}, [
            "alt",
            "class",
            "for",
            "id",
            "label",
            "name",
            "pattern",
            "placeholder",
            "role",
            "summary",
            "title",
            "value",
            "style",
            "xmlns",
          ]),
          tZ = "http://www.w3.org/1998/Math/MathML",
          tJ = "http://www.w3.org/2000/svg",
          tQ = "http://www.w3.org/1999/xhtml",
          t0 = tQ,
          t1 = !1,
          t2 = null,
          t3 = O({}, [tZ, tJ, tQ], y),
          t8 = O({}, ["mi", "mo", "mn", "ms", "mtext"]),
          t9 = O({}, ["annotation-xml"]),
          t4 = O({}, ["title", "style", "font", "a", "script"]),
          t7 = null,
          t6 = ["application/xhtml+xml", "text/html"],
          t5 = null,
          et = null,
          ee = o.createElement("form"),
          en = function (t) {
            return t instanceof RegExp || t instanceof Function;
          },
          er = function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (!et || et !== t) {
              if (
                ((t && "object" == typeof t) || (t = {}),
                (t = w(t)),
                (t5 =
                  "application/xhtml+xml" ===
                  (t7 =
                    -1 === t6.indexOf(t.PARSER_MEDIA_TYPE)
                      ? "text/html"
                      : t.PARSER_MEDIA_TYPE)
                    ? y
                    : g),
                (tA = _(t, "ALLOWED_TAGS") ? O({}, t.ALLOWED_TAGS, t5) : t_),
                (tS = _(t, "ALLOWED_ATTR") ? O({}, t.ALLOWED_ATTR, t5) : tN),
                (t2 = _(t, "ALLOWED_NAMESPACES")
                  ? O({}, t.ALLOWED_NAMESPACES, y)
                  : t3),
                (tX = _(t, "ADD_URI_SAFE_ATTR")
                  ? O(w(t$), t.ADD_URI_SAFE_ATTR, t5)
                  : t$),
                (tq = _(t, "ADD_DATA_URI_TAGS")
                  ? O(w(tV), t.ADD_DATA_URI_TAGS, t5)
                  : tV),
                (tj = _(t, "FORBID_CONTENTS")
                  ? O({}, t.FORBID_CONTENTS, t5)
                  : tK),
                (tO = _(t, "FORBID_TAGS") ? O({}, t.FORBID_TAGS, t5) : w({})),
                (tw = _(t, "FORBID_ATTR") ? O({}, t.FORBID_ATTR, t5) : w({})),
                (tY = !!_(t, "USE_PROFILES") && t.USE_PROFILES),
                (tR = !1 !== t.ALLOW_ARIA_ATTR),
                (tC = !1 !== t.ALLOW_DATA_ATTR),
                (tx = t.ALLOW_UNKNOWN_PROTOCOLS || !1),
                (tL = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR),
                (tM = t.SAFE_FOR_TEMPLATES || !1),
                (tk = !1 !== t.SAFE_FOR_XML),
                (tD = t.WHOLE_DOCUMENT || !1),
                (tP = t.RETURN_DOM || !1),
                (tz = t.RETURN_DOM_FRAGMENT || !1),
                (tH = t.RETURN_TRUSTED_TYPE || !1),
                (tU = t.FORCE_BODY || !1),
                (tF = !1 !== t.SANITIZE_DOM),
                (tW = t.SANITIZE_NAMED_PROPS || !1),
                (tG = !1 !== t.KEEP_CONTENT),
                (tB = t.IN_PLACE || !1),
                (tb = t.ALLOWED_URI_REGEXP || j),
                (t0 = t.NAMESPACE || tQ),
                (t8 = t.MATHML_TEXT_INTEGRATION_POINTS || t8),
                (t9 = t.HTML_INTEGRATION_POINTS || t9),
                (tv = t.CUSTOM_ELEMENT_HANDLING || {}),
                t.CUSTOM_ELEMENT_HANDLING &&
                  en(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) &&
                  (tv.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),
                t.CUSTOM_ELEMENT_HANDLING &&
                  en(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) &&
                  (tv.attributeNameCheck =
                    t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),
                t.CUSTOM_ELEMENT_HANDLING &&
                  "boolean" ==
                    typeof t.CUSTOM_ELEMENT_HANDLING
                      .allowCustomizedBuiltInElements &&
                  (tv.allowCustomizedBuiltInElements =
                    t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),
                tM && (tC = !1),
                tz && (tP = !0),
                tY &&
                  ((tA = O({}, I)),
                  (tS = []),
                  !0 === tY.html && (O(tA, C), O(tS, U)),
                  !0 === tY.svg && (O(tA, x), O(tS, P), O(tS, H)),
                  !0 === tY.svgFilters && (O(tA, L), O(tS, P), O(tS, H)),
                  !0 === tY.mathMl && (O(tA, k), O(tS, z), O(tS, H))),
                t.ADD_TAGS &&
                  (tA === t_ && (tA = w(tA)), O(tA, t.ADD_TAGS, t5)),
                t.ADD_ATTR &&
                  (tS === tN && (tS = w(tS)), O(tS, t.ADD_ATTR, t5)),
                t.ADD_URI_SAFE_ATTR && O(tX, t.ADD_URI_SAFE_ATTR, t5),
                t.FORBID_CONTENTS &&
                  (tj === tK && (tj = w(tj)), O(tj, t.FORBID_CONTENTS, t5)),
                tG && (tA["#text"] = !0),
                tD && O(tA, ["html", "head", "body"]),
                tA.table && (O(tA, ["tbody"]), delete tO.tbody),
                t.TRUSTED_TYPES_POLICY)
              ) {
                if ("function" != typeof t.TRUSTED_TYPES_POLICY.createHTML)
                  throw N(
                    'TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.'
                  );
                if ("function" != typeof t.TRUSTED_TYPES_POLICY.createScriptURL)
                  throw N(
                    'TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.'
                  );
                to = (n = t.TRUSTED_TYPES_POLICY).createHTML("");
              } else
                void 0 === n && (n = J(q, c)),
                  null !== n &&
                    "string" == typeof to &&
                    (to = n.createHTML(""));
              a && a(t), (et = t);
            }
          },
          ei = O({}, [...x, ...L, ...M]),
          eo = O({}, [...k, ...D]),
          ea = function (t) {
            let e = ti(t);
            (e && e.tagName) || (e = { namespaceURI: t0, tagName: "template" });
            let n = g(t.tagName),
              r = g(e.tagName);
            return (
              !!t2[t.namespaceURI] &&
              (t.namespaceURI === tJ
                ? e.namespaceURI === tQ
                  ? "svg" === n
                  : e.namespaceURI === tZ
                  ? "svg" === n && ("annotation-xml" === r || t8[r])
                  : !!ei[n]
                : t.namespaceURI === tZ
                ? e.namespaceURI === tQ
                  ? "math" === n
                  : e.namespaceURI === tJ
                  ? "math" === n && t9[r]
                  : !!eo[n]
                : t.namespaceURI === tQ
                ? (e.namespaceURI !== tJ || !!t9[r]) &&
                  (e.namespaceURI !== tZ || !!t8[r]) &&
                  !eo[n] &&
                  (t4[n] || !ei[n])
                : "application/xhtml+xml" === t7 && !!t2[t.namespaceURI])
            );
          },
          el = function (t) {
            d(i.removed, { element: t });
            try {
              ti(t).removeChild(t);
            } catch (e) {
              te(t);
            }
          },
          es = function (t, e) {
            try {
              d(i.removed, { attribute: e.getAttributeNode(t), from: e });
            } catch (t) {
              d(i.removed, { attribute: null, from: e });
            }
            if ((e.removeAttribute(t), "is" === t)) {
              if (tP || tz)
                try {
                  el(e);
                } catch (t) {}
              else
                try {
                  e.setAttribute(t, "");
                } catch (t) {}
            }
          },
          ec = function (t) {
            let e = null,
              r = null;
            if (tU) t = "<remove></remove>" + t;
            else {
              let e = T(t, /^[\r\n\t ]+/);
              r = e && e[0];
            }
            "application/xhtml+xml" === t7 &&
              t0 === tQ &&
              (t =
                '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' +
                t +
                "</body></html>");
            let i = n ? n.createHTML(t) : t;
            if (t0 === tQ)
              try {
                e = new K().parseFromString(i, t7);
              } catch (t) {}
            if (!e || !e.documentElement) {
              e = ta.createDocument(t0, "template", null);
              try {
                e.documentElement.innerHTML = t1 ? to : i;
              } catch (t) {}
            }
            let a = e.body || e.documentElement;
            return (t &&
              r &&
              a.insertBefore(o.createTextNode(r), a.childNodes[0] || null),
            t0 === tQ)
              ? tc.call(e, tD ? "html" : "body")[0]
              : tD
              ? e.documentElement
              : a;
          },
          eu = function (t) {
            return tl.call(
              t.ownerDocument || t,
              t,
              G.SHOW_ELEMENT |
                G.SHOW_COMMENT |
                G.SHOW_TEXT |
                G.SHOW_PROCESSING_INSTRUCTION |
                G.SHOW_CDATA_SECTION,
              null
            );
          },
          em = function (t) {
            return (
              t instanceof Y &&
              ("string" != typeof t.nodeName ||
                "string" != typeof t.textContent ||
                "function" != typeof t.removeChild ||
                !(t.attributes instanceof B) ||
                "function" != typeof t.removeAttribute ||
                "function" != typeof t.setAttribute ||
                "string" != typeof t.namespaceURI ||
                "function" != typeof t.insertBefore ||
                "function" != typeof t.hasChildNodes)
            );
          },
          ep = function (t) {
            return "function" == typeof F && t instanceof F;
          };
        function ef(t, e, n) {
          m(t, (t) => {
            t.call(i, e, n, et);
          });
        }
        let ed = function (t) {
            let e = null;
            if ((ef(tm.beforeSanitizeElements, t, null), em(t)))
              return el(t), !0;
            let n = t5(t.nodeName);
            if (
              (ef(tm.uponSanitizeElement, t, { tagName: n, allowedTags: tA }),
              (tk &&
                t.hasChildNodes() &&
                !ep(t.firstElementChild) &&
                S(/<[/\w!]/g, t.innerHTML) &&
                S(/<[/\w!]/g, t.textContent)) ||
                t.nodeType === Z.progressingInstruction ||
                (tk && t.nodeType === Z.comment && S(/<[/\w]/g, t.data)))
            )
              return el(t), !0;
            if (!tA[n] || tO[n]) {
              if (
                !tO[n] &&
                eg(n) &&
                ((tv.tagNameCheck instanceof RegExp && S(tv.tagNameCheck, n)) ||
                  (tv.tagNameCheck instanceof Function && tv.tagNameCheck(n)))
              )
                return !1;
              if (tG && !tj[n]) {
                let e = ti(t) || t.parentNode,
                  n = tr(t) || t.childNodes;
                if (n && e) {
                  let r = n.length;
                  for (let i = r - 1; i >= 0; --i) {
                    let r = tt(n[i], !0);
                    (r.__removalCount = (t.__removalCount || 0) + 1),
                      e.insertBefore(r, tn(t));
                  }
                }
              }
              return el(t), !0;
            }
            return (t instanceof W && !ea(t)) ||
              (("noscript" === n || "noembed" === n || "noframes" === n) &&
                S(/<\/no(script|embed|frames)/i, t.innerHTML))
              ? (el(t), !0)
              : (tM &&
                  t.nodeType === Z.text &&
                  ((e = t.textContent),
                  m([tp, tf, td], (t) => {
                    e = E(e, t, " ");
                  }),
                  t.textContent !== e &&
                    (d(i.removed, { element: t.cloneNode() }),
                    (t.textContent = e))),
                ef(tm.afterSanitizeElements, t, null),
                !1);
          },
          eh = function (t, e, n) {
            if (tF && ("id" === e || "name" === e) && (n in o || n in ee))
              return !1;
            if (tC && !tw[e] && S(th, e));
            else if (tR && S(tg, e));
            else if (!tS[e] || tw[e]) {
              if (
                !(
                  (eg(t) &&
                    ((tv.tagNameCheck instanceof RegExp &&
                      S(tv.tagNameCheck, t)) ||
                      (tv.tagNameCheck instanceof Function &&
                        tv.tagNameCheck(t))) &&
                    ((tv.attributeNameCheck instanceof RegExp &&
                      S(tv.attributeNameCheck, e)) ||
                      (tv.attributeNameCheck instanceof Function &&
                        tv.attributeNameCheck(e, t)))) ||
                  ("is" === e &&
                    tv.allowCustomizedBuiltInElements &&
                    ((tv.tagNameCheck instanceof RegExp &&
                      S(tv.tagNameCheck, n)) ||
                      (tv.tagNameCheck instanceof Function &&
                        tv.tagNameCheck(n))))
                )
              )
                return !1;
            } else if (tX[e]);
            else if (S(tb, E(n, tT, "")));
            else if (
              ("src" === e || "xlink:href" === e || "href" === e) &&
              "script" !== t &&
              0 === b(n, "data:") &&
              tq[t]
            );
            else if (tx && !S(ty, E(n, tT, "")));
            else if (n) return !1;
            return !0;
          },
          eg = function (t) {
            return "annotation-xml" !== t && T(t, tE);
          },
          ey = function (t) {
            ef(tm.beforeSanitizeAttributes, t, null);
            let { attributes: e } = t;
            if (!e || em(t)) return;
            let r = {
                attrName: "",
                attrValue: "",
                keepAttr: !0,
                allowedAttributes: tS,
                forceKeepAttr: void 0,
              },
              o = e.length;
            for (; o--; ) {
              let { name: a, namespaceURI: l, value: s } = e[o],
                c = t5(a),
                u = "value" === a ? s : A(s);
              if (
                ((r.attrName = c),
                (r.attrValue = u),
                (r.keepAttr = !0),
                (r.forceKeepAttr = void 0),
                ef(tm.uponSanitizeAttribute, t, r),
                (u = r.attrValue),
                tW &&
                  ("id" === c || "name" === c) &&
                  (es(a, t), (u = "user-content-" + u)),
                (tk && S(/((--!?|])>)|<\/(style|title|textarea)/i, u)) ||
                  ("attributename" === c && T(u, "href")))
              ) {
                es(a, t);
                continue;
              }
              if (r.forceKeepAttr) continue;
              if (!r.keepAttr || (!tL && S(/\/>/i, u))) {
                es(a, t);
                continue;
              }
              tM &&
                m([tp, tf, td], (t) => {
                  u = E(u, t, " ");
                });
              let p = t5(t.nodeName);
              if (!eh(p, c, u)) {
                es(a, t);
                continue;
              }
              if (
                n &&
                "object" == typeof q &&
                "function" == typeof q.getAttributeType
              ) {
                if (l);
                else
                  switch (q.getAttributeType(p, c)) {
                    case "TrustedHTML":
                      u = n.createHTML(u);
                      break;
                    case "TrustedScriptURL":
                      u = n.createScriptURL(u);
                  }
              }
              if (u !== s)
                try {
                  l ? t.setAttributeNS(l, a, u) : t.setAttribute(a, u),
                    em(t) ? el(t) : f(i.removed);
                } catch (e) {
                  es(a, t);
                }
            }
            ef(tm.afterSanitizeAttributes, t, null);
          },
          eT = function t(e) {
            let n = null,
              r = eu(e);
            for (ef(tm.beforeSanitizeShadowDOM, e, null); (n = r.nextNode()); )
              ef(tm.uponSanitizeShadowNode, n, null),
                ed(n),
                ey(n),
                n.content instanceof u && t(n.content);
            ef(tm.afterSanitizeShadowDOM, e, null);
          };
        return (
          (i.sanitize = function (t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = null,
              o = null,
              a = null,
              s = null;
            if (((t1 = !t) && (t = "<!-->"), "string" != typeof t && !ep(t))) {
              if ("function" == typeof t.toString) {
                if ("string" != typeof (t = t.toString()))
                  throw N("dirty is not a string, aborting");
              } else throw N("toString is not a function");
            }
            if (!i.isSupported) return t;
            if (
              (tI || er(e),
              (i.removed = []),
              "string" == typeof t && (tB = !1),
              tB)
            ) {
              if (t.nodeName) {
                let e = t5(t.nodeName);
                if (!tA[e] || tO[e])
                  throw N(
                    "root node is forbidden and cannot be sanitized in-place"
                  );
              }
            } else if (t instanceof F)
              (o = (r = ec("<!---->")).ownerDocument.importNode(t, !0))
                .nodeType === Z.element && "BODY" === o.nodeName
                ? (r = o)
                : "HTML" === o.nodeName
                ? (r = o)
                : r.appendChild(o);
            else {
              if (!tP && !tM && !tD && -1 === t.indexOf("<"))
                return n && tH ? n.createHTML(t) : t;
              if (!(r = ec(t))) return tP ? null : tH ? to : "";
            }
            r && tU && el(r.firstChild);
            let c = eu(tB ? t : r);
            for (; (a = c.nextNode()); )
              ed(a), ey(a), a.content instanceof u && eT(a.content);
            if (tB) return t;
            if (tP) {
              if (tz)
                for (s = ts.call(r.ownerDocument); r.firstChild; )
                  s.appendChild(r.firstChild);
              else s = r;
              return (
                (tS.shadowroot || tS.shadowrootmode) && (s = tu.call(l, s, !0)),
                s
              );
            }
            let p = tD ? r.outerHTML : r.innerHTML;
            return (
              tD &&
                tA["!doctype"] &&
                r.ownerDocument &&
                r.ownerDocument.doctype &&
                r.ownerDocument.doctype.name &&
                S(V, r.ownerDocument.doctype.name) &&
                (p = "<!DOCTYPE " + r.ownerDocument.doctype.name + ">\n" + p),
              tM &&
                m([tp, tf, td], (t) => {
                  p = E(p, t, " ");
                }),
              n && tH ? n.createHTML(p) : p
            );
          }),
          (i.setConfig = function () {
            let t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            er(t), (tI = !0);
          }),
          (i.clearConfig = function () {
            (et = null), (tI = !1);
          }),
          (i.isValidAttribute = function (t, e, n) {
            return et || er({}), eh(t5(t), t5(e), n);
          }),
          (i.addHook = function (t, e) {
            "function" == typeof e && d(tm[t], e);
          }),
          (i.removeHook = function (t, e) {
            if (void 0 !== e) {
              let n = p(tm[t], e);
              return -1 === n ? void 0 : h(tm[t], n, 1)[0];
            }
            return f(tm[t]);
          }),
          (i.removeHooks = function (t) {
            tm[t] = [];
          }),
          (i.removeAllHooks = function () {
            tm = Q();
          }),
          i
        );
      })();
      t.exports = tt;
    },
    47835: function (t, e, n) {
      t.exports =
        window.DOMPurify || (window.DOMPurify = n(47866).default || n(47866));
    },
    21770: function (t, e, n) {
      "use strict";
      n.d(e, {
        D: function () {
          return u;
        },
      });
      var r = n(2265),
        i = n(2894),
        o = n(18238),
        a = n(24112),
        l = n(45345),
        s = class extends a.l {
          #t;
          #e = void 0;
          #n;
          #r;
          constructor(t, e) {
            super(),
              (this.#t = t),
              this.setOptions(e),
              this.bindMethods(),
              this.#i();
          }
          bindMethods() {
            (this.mutate = this.mutate.bind(this)),
              (this.reset = this.reset.bind(this));
          }
          setOptions(t) {
            let e = this.options;
            (this.options = this.#t.defaultMutationOptions(t)),
              (0, l.VS)(this.options, e) ||
                this.#t
                  .getMutationCache()
                  .notify({
                    type: "observerOptionsUpdated",
                    mutation: this.#n,
                    observer: this,
                  }),
              e?.mutationKey &&
              this.options.mutationKey &&
              (0, l.Ym)(e.mutationKey) !== (0, l.Ym)(this.options.mutationKey)
                ? this.reset()
                : this.#n?.state.status === "pending" &&
                  this.#n.setOptions(this.options);
          }
          onUnsubscribe() {
            this.hasListeners() || this.#n?.removeObserver(this);
          }
          onMutationUpdate(t) {
            this.#i(), this.#o(t);
          }
          getCurrentResult() {
            return this.#e;
          }
          reset() {
            this.#n?.removeObserver(this),
              (this.#n = void 0),
              this.#i(),
              this.#o();
          }
          mutate(t, e) {
            return (
              (this.#r = e),
              this.#n?.removeObserver(this),
              (this.#n = this.#t
                .getMutationCache()
                .build(this.#t, this.options)),
              this.#n.addObserver(this),
              this.#n.execute(t)
            );
          }
          #i() {
            let t = this.#n?.state ?? (0, i.R)();
            this.#e = {
              ...t,
              isPending: "pending" === t.status,
              isSuccess: "success" === t.status,
              isError: "error" === t.status,
              isIdle: "idle" === t.status,
              mutate: this.mutate,
              reset: this.reset,
            };
          }
          #o(t) {
            o.Vr.batch(() => {
              if (this.#r && this.hasListeners()) {
                let e = this.#e.variables,
                  n = this.#e.context,
                  r = {
                    client: this.#t,
                    meta: this.options.meta,
                    mutationKey: this.options.mutationKey,
                  };
                t?.type === "success"
                  ? (this.#r.onSuccess?.(t.data, e, n, r),
                    this.#r.onSettled?.(t.data, null, e, n, r))
                  : t?.type === "error" &&
                    (this.#r.onError?.(t.error, e, n, r),
                    this.#r.onSettled?.(void 0, t.error, e, n, r));
              }
              this.listeners.forEach((t) => {
                t(this.#e);
              });
            });
          }
        },
        c = n(29827);
      function u(t, e) {
        let n = (0, c.NL)(e),
          [i] = r.useState(() => new s(n, t));
        r.useEffect(() => {
          i.setOptions(t);
        }, [i, t]);
        let a = r.useSyncExternalStore(
            r.useCallback((t) => i.subscribe(o.Vr.batchCalls(t)), [i]),
            () => i.getCurrentResult(),
            () => i.getCurrentResult()
          ),
          u = r.useCallback(
            (t, e) => {
              i.mutate(t, e).catch(l.ZT);
            },
            [i]
          );
        if (a.error && (0, l.L3)(i.options.throwOnError, [a.error]))
          throw a.error;
        return { ...a, mutate: u, mutateAsync: a.mutate };
      }
    },
  },
]);
