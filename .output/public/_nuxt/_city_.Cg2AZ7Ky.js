import {
   q as R,
   o as a,
   c as i,
   a as t,
   F as g,
   s as M,
   u as p,
   v as B,
   t as e,
   x as z,
   y as V,
   d as l,
   z as f,
   _ as S,
   w as d,
   e as Y,
   b as n,
   A as it,
   B as ct,
   C as G,
   r as L,
   D as lt,
   E as m,
   G as O,
   H as dt,
} from "./entry.Ds3c6svF.js"
import { _ as _t, a as ut, b as ht, c as mt, d as gt } from "./NativePanners.DwMya3KX.js"
const pt = { key: 0, class: "overflow-hidden" },
   ft = {
      class: "w-full overflow-x-auto bg-yellow-50 rounded-xl border border-sec flex justify-between whitespace-nowrap items-center",
   },
   bt = {
      __name: "Praying-today",
      props: { data: { type: Object, default: [] } },
      setup(o) {
         const r = o,
            _ = [
               {
                  key: "Fajr",
                  name: "Fajr",
                  icon: "fajr",
                  icon_inverted: "fajr",
                  translation: "infobanner.time1",
               },
               {
                  key: "Sunrise",
                  name: "Sunrise",
                  icon: "sunrise",
                  icon_inverted: "sunrise",
                  translation: "infobanner.time2",
               },
               {
                  key: "Dhuhr",
                  name: "Dhuhr",
                  icon: "dhuhr",
                  icon_inverted: "dhuhr-inverted",
                  translation: "infobanner.time3",
               },
               {
                  key: "Asr",
                  name: "Asr",
                  icon: "asr",
                  icon_inverted: "asr-inverted",
                  translation: "infobanner.time4",
               },
               {
                  key: "Maghrib",
                  name: "Maghrib",
                  icon: "maghrib",
                  icon_inverted: "maghrib-inverted",
                  translation: "infobanner.time5",
               },
               {
                  key: "Isha",
                  name: "Isha",
                  icon: "isha",
                  icon_inverted: "isha",
                  translation: "infobanner.time6",
               },
            ],
            b = R(() => {
               for (let v = 0; v < _.length; v++) if (I(v)) return v
               return -1
            })
         function I(v) {
            const x = new Date(),
               y = x.getHours(),
               $ = x.getMinutes(),
               T = _[v],
               P = r.data[0].timings[T.key].match(/(\d{2}):(\d{2})/),
               N = parseInt(P[1], 10),
               u = parseInt(P[2], 10),
               E = y * 60 + $
            return N * 60 + u > E
         }
         return (v, x) => {
            const y = V
            return r.data[0]
               ? (a(),
                 i("div", pt, [
                    t("div", ft, [
                       (a(),
                       i(
                          g,
                          null,
                          M(_, ($, T) =>
                             t(
                                "div",
                                {
                                   key: T,
                                   class: p([
                                      "cent__col gap-1 py-2 min-w-[110px] px-5",
                                      { "bg-sec ": b.value === T },
                                   ]),
                                },
                                [
                                   b.value === T
                                      ? (a(),
                                        B(
                                           y,
                                           {
                                              key: 0,
                                              isrc: `/svgs/${$.icon_inverted}.svg`,
                                              ialt: $.name,
                                              iclass: "w-10 h-10",
                                           },
                                           null,
                                           8,
                                           ["isrc", "ialt"],
                                        ))
                                      : (a(),
                                        B(
                                           y,
                                           {
                                              key: 1,
                                              isrc: `/svgs/${$.icon}.svg`,
                                              ialt: $.name,
                                              iclass: "w-10 h-10",
                                           },
                                           null,
                                           8,
                                           ["isrc", "ialt"],
                                        )),
                                   t(
                                      "div",
                                      {
                                         class: p([
                                            { "!text-white ": b.value === T },
                                            "text-right text-zinc-500 text-sm font-normal font-['Almarai'] leading-tight",
                                         ]),
                                      },
                                      e(v.$t($.translation)),
                                      3,
                                   ),
                                   t(
                                      "div",
                                      {
                                         class: p([
                                            { "!text-white ": b.value === T },
                                            "text-right text-zinc-800 text-base font-medium font-['Roboto'] leading-tight",
                                         ]),
                                      },
                                      e(r.data[0].timings[$.key]),
                                      3,
                                   ),
                                ],
                                2,
                             ),
                          ),
                          64,
                       )),
                    ]),
                 ]))
               : z("", !0)
         }
      },
   },
   vt = bt,
   xt = {
      __name: "Th",
      props: {
         thText: { type: String, default: "" },
         thClass: { type: [String, Number], default: "" },
      },
      setup(o) {
         return (r, _) => (
            a(),
            i(
               "th",
               { class: p(["px-4 font-normal text-start", o.thClass]) },
               [l(e(r.$t(o.thText)) + " ", 1), f(r.$slots, "default")],
               2,
            )
         )
      },
   },
   yt = xt,
   $t = { class: "px-3" },
   wt = {
      __name: "Td",
      props: { tdClass: { type: [String, Number], default: "" } },
      setup(o) {
         return (r, _) => (
            a(), i("td", $t, [t("div", { class: p(o.tdClass) }, [f(r.$slots, "default")], 2)])
         )
      },
   },
   kt = wt,
   Tt = {},
   At = { class: "overflow-x-auto" },
   Ct = {
      class: "overflow-hidden rounded-xl w-full text-xs whitespace-nowrap mb-0.5 drop-shadow-sm",
   },
   zt = { class: "bg-primary text-white h-[33px]" },
   It = { class: "text-zinc-800" }
function jt(o, r) {
   return (
      a(),
      i("div", At, [
         t("table", Ct, [
            t("thead", null, [t("tr", zt, [f(o.$slots, "thead")])]),
            t("tbody", It, [f(o.$slots, "tbody")]),
         ]),
      ])
   )
}
const Dt = S(Tt, [["render", jt]]),
   Mt = {},
   St = {
      class: "w-full h-full text-stone-500 bg-white rounded-xl border border-gray-300 cent p-2 text-center hover:bg-primary hover:text-white hover:border-primary duration-300",
   },
   Pt = { class: "font-normal font-['Almarai']" }
function Nt(o, r) {
   return a(), i("div", St, [t("div", Pt, [f(o.$slots, "default")])])
}
const Ft = S(Mt, [["render", Nt]]),
   Bt = {},
   Et = { class: "cent" },
   Ht = { class: "flex items-center col-span-4" },
   Lt = { class: "grid" },
   Vt = { class: "text-zinc-800 font-semibold" },
   qt = { class: "text-neutral-400" }
function Gt(o, r) {
   const _ = Y
   return (
      a(),
      B(
         _,
         {
            to: "/",
            class: "w-full h-[77px] bg-white rounded-xl border border-gray-300 grid grid-cols-5 gap-5 p-3",
         },
         {
            default: d(() => [
               t("div", Et, [f(o.$slots, "image")]),
               t("div", Ht, [
                  t("div", Lt, [
                     t("div", Vt, [f(o.$slots, "title")]),
                     t("div", qt, [f(o.$slots, "by")]),
                  ]),
               ]),
            ]),
            _: 3,
         },
      )
   )
}
const Ot = S(Bt, [["render", Gt]]),
   Rt = {},
   Yt = { class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6" },
   Jt = { class: "h__primary" },
   Kt = { class: "tracks__grid" }
function Qt(o, r) {
   const _ = V,
      b = Ot
   return (
      a(),
      i("div", Yt, [
         t("h2", Jt, e(o.$t("playbanner.heading")), 1),
         t("div", Kt, [
            (a(),
            i(
               g,
               null,
               M(6, (I) =>
                  n(
                     b,
                     { key: I },
                     {
                        image: d(() => [
                           n(_, { isrc: "/play-bar.png", ialt: "logo", iclass: "h-full rounded" }),
                        ]),
                        title: d(() => [l(" قائمة تشغيل قرأن جديدة ")]),
                        by: d(() => [l(" ماهر المعيقلي ")]),
                        _: 2,
                     },
                     1024,
                  ),
               ),
               64,
            )),
         ]),
      ])
   )
}
const Ut = S(Rt, [["render", Qt]]),
   Wt = {},
   Xt = {
      class: "grid grid-rows-5 bg-white rounded-xl border border-gray-300 size-full overflow-hidden drop-shadow-sm",
   },
   Zt = { class: "row-span-3" },
   te = { class: "row-span-2 grid gap-2 p-3" },
   ee = { class: "text-zinc-800 text-lg truncate" },
   ne = { class: "text-sm text-zinc-500 line-clamp-3" }
function se(o, r) {
   return (
      a(),
      i("div", Xt, [
         t("div", Zt, [f(o.$slots, "image")]),
         t("div", te, [
            t("div", ee, [f(o.$slots, "title", { class: "text-center" })]),
            t("div", ne, [f(o.$slots, "paragraph", { class: "" })]),
         ]),
      ])
   )
}
const ae = S(Wt, [["render", se]]),
   oe = {},
   re = { class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6" },
   ie = { class: "h__primary" },
   ce = { class: "popular__articles__grid" },
   le = t("img", { class: "w-full h-full", src: "https://via.placeholder.com/266x185" }, null, -1)
function de(o, r) {
   const _ = ae
   return (
      a(),
      i("div", re, [
         t("h2", ie, e(o.$t("trendingbanner.heading")), 1),
         t("div", ce, [
            (a(),
            i(
               g,
               null,
               M(3, (b) =>
                  n(
                     _,
                     { key: b },
                     {
                        image: d(() => [le]),
                        title: d(() => [l(" المحافظة على أخوة الدين ")]),
                        paragraph: d(() => [
                           l(
                              " فما أصاب المسلمين اليوم من التأخر وقد كانوا فيما مضى سادة العام نتيجة للتفرق والاختلاف وركونهم إلى الدنيا وزخارفها والاشتغال ",
                           ),
                        ]),
                        _: 2,
                     },
                     1024,
                  ),
               ),
               64,
            )),
         ]),
      ])
   )
}
const _e = S(oe, [["render", de]]),
   ue = { class: "grid gap-6" },
   he = t(
      "div",
      null,
      [
         t("img", {
            class: "w-full h-[244px] rounded-xl border border-gray-300",
            src: "https://via.placeholder.com/909x244",
         }),
      ],
      -1,
   ),
   me = { class: "bg-white rounded-xl border border-gray-200 grid gap-6 px-4 py-6" },
   ge = { class: "h__primary" },
   pe = t("div", { class: "h-[0px] rotate-180 border border-stone-300" }, null, -1),
   fe = { class: "grid md:grid-cols-2 gap-4 items-center" },
   be = { class: "flex gap-3 items-center" },
   ve = { class: "w-16 h-16 rounded-lg border border-gray-200 p-1.5 cent overflow-hidden" },
   xe = ["src", "alt"],
   ye = { class: "grid gap-2" },
   $e = { class: "text-zinc-700 text-[17px] font-bold font-['Almarai'] leading-tight" },
   we = { class: "text-zinc-800 text-xs font-normal font-['Almarai'] leading-tight" },
   ke = { class: "grid gap-2" },
   Te = { class: "flex gap-2 items-center" },
   Ae = { class: "text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight" },
   Ce = { class: "flex gap-2 items-center" },
   ze = { class: "text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight" },
   Ie = { class: "grid md:grid-cols-3 gap-4" },
   je = { class: "flex gap-2" },
   De = { class: "text-teal-900 text-sm font-bold font-['Almarai'] leading-tight" },
   Me = { class: "text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight" },
   Se = { class: "flex gap-2 md:justify-center" },
   Pe = { class: "text-teal-900 text-sm font-bold font-['Almarai'] leading-tight" },
   Ne = t(
      "div",
      { class: "text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight" },
      " شافعي، حنبلي، مالكي",
      -1,
   ),
   Fe = { class: "flex gap-2" },
   Be = { class: "text-teal-900 text-sm font-bold font-['Almarai'] leading-tight" },
   Ee = t(
      "div",
      { class: "text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight" },
      " تنسيق 24 ساعة",
      -1,
   ),
   He = { class: "flex gap-2 items-center" },
   Le = { class: "text-zinc-700 text-lg font-bold font-['Almarai'] leading-tight" },
   Ve = { class: "text-zinc-500 text-xs font-normal font-['Almarai'] leading-tight" },
   qe = { class: "h__primary" },
   Ge = { class: "overflow-x-auto pb-1" },
   Oe = { class: "flex gap-4 whitespace-nowrap text-zinc-500" },
   Re = { class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6" },
   Ye = { class: "h__primary" },
   Je = { class: "city__label__grid" },
   Ke = "05:03 (EET)",
   We = {
      __name: "[city]",
      async setup(o) {
         let r, _
         const { locale: b } = it(),
            I = "https://cms.prayer-now.com",
            v = "http://api.aladhan.com/v1/calendarByCity?city=",
            x = ct(),
            {
               data: y,
               error: $,
               refresh: T,
            } = (([r, _] = G(() =>
               O(v + "&country=" + x.params.country, { watch: x.params.city }, "$ljHd9FVP5o"),
            )),
            (r = await r),
            _(),
            r),
            P = new Date(),
            N = L(E(P)),
            u = L([])
         function E(s) {
            const h = (k) => k.toString().padStart(2, "0")
            return `${h(s.getDate())}-${h(s.getMonth() + 1)}-${s.getFullYear()}`
         }
         lt(() => {
            q()
         })
         function q() {
            u.value = y.value.data.filter((s) => s.date.gregorian.date === N.value)
         }
         const J =
               "/api/prayer-time-cities/?isHardPopulate=true&filters[prayer_time_country][id][$eq]=",
            { data: A } =
               (([r, _] = G(() => O(I + J + x.params.id + "&locale[0]=" + b.value, "$vGhPyrTOp7"))),
               (r = await r),
               _(),
               r),
            H = P.getDate(),
            w = L(H <= 7 ? 0 : H <= 14 ? 7 : H <= 21 ? 14 : 21),
            K = R(() => {
               const s = w.value,
                  h = y.value.data.length
               if (s >= 21) return y.value.data.slice(s)
               {
                  const k = Math.min(s + 7, h)
                  return y.value.data.slice(s, k)
               }
            })
         function j(s) {
            const k = /(\d{2}:\d{2})/.exec(s)
            return k ? k[0] : ""
         }
         const Q = j(Ke)
         return (
            console.log(Q),
            (s, h) => {
               const k = V,
                  U = vt,
                  F = dt,
                  C = yt,
                  D = kt,
                  W = Dt,
                  X = _t,
                  Z = Ft,
                  tt = Y,
                  et = ut,
                  nt = ht,
                  st = Ut,
                  at = _e,
                  ot = mt,
                  rt = gt
               return (
                  a(),
                  i("div", ue, [
                     he,
                     t("div", me, [
                        t("h2", ge, e(s.$t("infobanner.topheading")), 1),
                        pe,
                        t("div", fe, [
                           t("div", be, [
                              t("div", ve, [
                                 m(A).data[0].attributes.prayer_time_country.data.attributes.flag
                                    .data.attributes
                                    ? (a(),
                                      i(
                                         "img",
                                         {
                                            key: 0,
                                            src:
                                               m(I) +
                                               m(A).data[0].attributes.prayer_time_country.data
                                                  .attributes.flag.data.attributes.url,
                                            alt:
                                               m(I) +
                                               m(A).data[0].attributes.prayer_time_country.data
                                                  .attributes.flag.data.attributes.alternativeText,
                                            class: "aspect-square rounded-full",
                                         },
                                         null,
                                         8,
                                         xe,
                                      ))
                                    : z("", !0),
                              ]),
                              t("div", ye, [
                                 t("div", $e, [
                                    l(e(s.$t("infobanner.countryheading")) + " ", 1),
                                    m(A).data[0]
                                       ? (a(),
                                         i(
                                            g,
                                            { key: 0 },
                                            [
                                               l(
                                                  e(
                                                     s.$t(
                                                        m(A).data[0].attributes.prayer_time_country
                                                           .data.attributes.name,
                                                     ),
                                                  ),
                                                  1,
                                               ),
                                            ],
                                            64,
                                         ))
                                       : z("", !0),
                                 ]),
                                 t("div", we, [
                                    l(e(s.$t("infobanner.countrysubheading")) + " ", 1),
                                    m(A).data[0]
                                       ? (a(!0),
                                         i(
                                            g,
                                            { key: 0 },
                                            M(
                                               m(A).data,
                                               (c) => (
                                                  a(),
                                                  i(
                                                     g,
                                                     { key: c.id },
                                                     [
                                                        c.attributes.is_capital
                                                           ? (a(),
                                                             i(
                                                                g,
                                                                { key: 0 },
                                                                [l(e(s.$t(c.attributes.title)), 1)],
                                                                64,
                                                             ))
                                                           : z("", !0),
                                                     ],
                                                     64,
                                                  )
                                               ),
                                            ),
                                            128,
                                         ))
                                       : z("", !0),
                                 ]),
                              ]),
                           ]),
                           t("div", ke, [
                              t("div", Te, [
                                 n(k, {
                                    isrc: "/svgs/e7datheat.svg",
                                    ialt: "country",
                                    iclass: " w-4 h-4",
                                 }),
                                 t("div", Ae, [
                                    l(e(s.$t("infobanner.para1")) + " ", 1),
                                    u.value[0]
                                       ? (a(),
                                         i(g, { key: 0 }, [l(e(u.value[0].meta.timezone), 1)], 64))
                                       : z("", !0),
                                 ]),
                              ]),
                              t("div", Ce, [
                                 n(k, {
                                    isrc: "/svgs/cleander.svg",
                                    ialt: "country",
                                    iclass: " w-4 h-4",
                                 }),
                                 t("div", ze, [
                                    u.value[0]
                                       ? (a(),
                                         i(
                                            g,
                                            { key: 0 },
                                            [
                                               l(
                                                  e(u.value[0].date.hijri.weekday.ar) +
                                                     "  " +
                                                     e(u.value[0].date.hijri.day) +
                                                     "  " +
                                                     e(u.value[0].date.hijri.month.ar) +
                                                     "  " +
                                                     e(u.value[0].date.hijri.year) +
                                                     "  " +
                                                     e(s.$t("infobanner.para2")) +
                                                     "  " +
                                                     e(u.value[0].date.gregorian.date) +
                                                     "  ",
                                                  1,
                                               ),
                                            ],
                                            64,
                                         ))
                                       : z("", !0),
                                 ]),
                              ]),
                           ]),
                        ]),
                        t("div", Ie, [
                           t("div", je, [
                              t("div", De, e(s.$t("infobanner.calpara")), 1),
                              t("div", Me, [
                                 u.value[0]
                                    ? (a(),
                                      i(g, { key: 0 }, [l(e(u.value[0].meta.method.name), 1)], 64))
                                    : z("", !0),
                              ]),
                           ]),
                           t("div", Se, [t("div", Pe, e(s.$t("infobanner.doctrinepara")), 1), Ne]),
                           t("div", Fe, [t("div", Be, e(s.$t("infobanner.timestyle")), 1), Ee]),
                        ]),
                        t("div", He, [
                           t("div", Le, e(s.$t("infobanner.timepara")), 1),
                           t("div", Ve, e(s.$t("infobanner.timingsubheading")), 1),
                        ]),
                        n(U, { data: u.value }, null, 8, ["data"]),
                        t("h2", qe, e(s.$t("infobanner.monthsubheading")), 1),
                        t("div", Ge, [
                           t("div", Oe, [
                              n(
                                 F,
                                 {
                                    buttonText: "infobanner.week1",
                                    buttonClass:
                                       " flex-1 btn__primary bg-zinc-100  font-semibold hover:bg-sec hover:text-white",
                                    onClick: h[0] || (h[0] = (c) => (w.value = 0)),
                                    class: p(w.value === 0 ? "!bg-sec text-white" : ""),
                                 },
                                 null,
                                 8,
                                 ["class"],
                              ),
                              n(
                                 F,
                                 {
                                    buttonText: "infobanner.week2",
                                    buttonClass:
                                       "flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",
                                    onClick: h[1] || (h[1] = (c) => (w.value = 7)),
                                    class: p(w.value === 7 ? "!bg-sec text-white" : ""),
                                 },
                                 null,
                                 8,
                                 ["class"],
                              ),
                              n(
                                 F,
                                 {
                                    buttonText: "infobanner.week3",
                                    buttonClass:
                                       "flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",
                                    onClick: h[2] || (h[2] = (c) => (w.value = 14)),
                                    class: p(w.value === 14 ? "!bg-sec text-white" : ""),
                                 },
                                 null,
                                 8,
                                 ["class"],
                              ),
                              n(
                                 F,
                                 {
                                    buttonText: "infobanner.week4",
                                    buttonClass:
                                       "flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",
                                    onClick: h[3] || (h[3] = (c) => (w.value = 21)),
                                    class: p(w.value === 21 ? "!bg-sec text-white" : ""),
                                 },
                                 null,
                                 8,
                                 ["class"],
                              ),
                           ]),
                        ]),
                        n(W, null, {
                           thead: d(() => [
                              n(C, { thText: "infobanner.date" }),
                              n(C, { thText: "infobanner.time1" }),
                              n(C, { thText: "infobanner.time2" }),
                              n(C, { thText: "infobanner.time3" }),
                              n(C, { thText: "infobanner.time4" }),
                              n(C, { thText: "infobanner.time5" }),
                              n(C, { thText: "infobanner.time6" }),
                           ]),
                           tbody: d(() => [
                              (a(!0),
                              i(
                                 g,
                                 null,
                                 M(
                                    m(K),
                                    (c) => (
                                       a(),
                                       i(
                                          "tr",
                                          {
                                             class: p([
                                                "h-[45px] border-b",
                                                N.value === c.date.gregorian.date
                                                   ? "!bg-yellow-50 "
                                                   : "",
                                             ]),
                                             key: c,
                                          },
                                          [
                                             n(
                                                C,
                                                {
                                                   thClass: " bg-gray-100 font-semibold ",
                                                   class: p(
                                                      N.value === c.date.gregorian.date
                                                         ? "!bg-yellow-50 "
                                                         : "",
                                                   ),
                                                },
                                                {
                                                   default: d(() => [
                                                      l(e(c.date.gregorian.date), 1),
                                                   ]),
                                                   _: 2,
                                                },
                                                1032,
                                                ["class"],
                                             ),
                                             n(
                                                D,
                                                null,
                                                {
                                                   default: d(() => [l(e(j(c.timings.Fajr)), 1)]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                             n(
                                                D,
                                                null,
                                                {
                                                   default: d(() => [
                                                      l(e(j(c.timings.Sunrise)), 1),
                                                   ]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                             n(
                                                D,
                                                null,
                                                {
                                                   default: d(() => [l(e(j(c.timings.Dhuhr)), 1)]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                             n(
                                                D,
                                                null,
                                                {
                                                   default: d(() => [l(e(j(c.timings.Asr)), 1)]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                             n(
                                                D,
                                                null,
                                                {
                                                   default: d(() => [
                                                      l(e(j(c.timings.Maghrib)), 1),
                                                   ]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                             n(
                                                D,
                                                null,
                                                {
                                                   default: d(() => [l(e(j(c.timings.Isha)), 1)]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                          ],
                                          2,
                                       )
                                    ),
                                 ),
                                 128,
                              )),
                           ]),
                           _: 1,
                        }),
                     ]),
                     n(X),
                     t("div", Re, [
                        t("h2", Ye, e(s.$t("citiescounrybanner.heading")), 1),
                        t("div", Je, [
                           (a(!0),
                           i(
                              g,
                              null,
                              M(
                                 m(A).data,
                                 (c) => (
                                    a(),
                                    B(
                                       tt,
                                       {
                                          to:
                                             "/app/" +
                                             m(x).params.country +
                                             "/" +
                                             m(x).params.id +
                                             "/" +
                                             c.id,
                                          key: c.id,
                                          class: "w-full",
                                       },
                                       {
                                          default: d(() => [
                                             n(
                                                Z,
                                                null,
                                                {
                                                   default: d(() => [l(e(c.attributes.title), 1)]),
                                                   _: 2,
                                                },
                                                1024,
                                             ),
                                          ]),
                                          _: 2,
                                       },
                                       1032,
                                       ["to"],
                                    )
                                 ),
                              ),
                              128,
                           )),
                        ]),
                     ]),
                     n(et),
                     n(nt),
                     n(st),
                     n(at),
                     n(ot),
                     n(rt),
                  ])
               )
            }
         )
      },
   }
export { We as default }
