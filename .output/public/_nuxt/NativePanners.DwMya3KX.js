import {
   A as B,
   C as w,
   G as $,
   o,
   c,
   a as t,
   t as h,
   E as s,
   b as x,
   w as v,
   d as z,
   e as N,
   _ as C,
   z as D,
   J as L,
   F as k,
   s as j,
   v as M,
   y as F,
} from "./entry.Ds3c6svF.js"
const I = { class: "min-h-[244px] bg-white rounded-xl border border-gray-200 main__banner" },
   P = { class: "cent h-full w-full" },
   V = { class: "relative md:grid grid-cols-4 p-4 gap-1 w-full" },
   q = { class: "md:col-span-3 flex items-center size-full" },
   E = { class: "grid gap-4" },
   R = { class: "text-zinc-700 md:text-[15px] text-[13px] font-normal font-['Almarai']" },
   S = { class: "h__primary max-w-[600px] max-md:max-w-[500px] leading-10" },
   T = { class: "flex" },
   G = {
      class: "flex md:justify-center justify-end items-center max-md:absolute rtl:left-0 ltr:right-0 bottom-0 max-md:size-[120px] max-xs:size-[90px] size-full ltr:scale-x-[-1] transform max-md:mx-4 md:w-full",
   },
   J = ["src"],
   O = {
      __name: "Add1",
      async setup(g) {
         let e, r
         const { locale: f } = B(),
            _ = "https://cms.prayer-now.com",
            b = "/api/landing-page?locale[0]=",
            { data: l } =
               (([e, r] = w(() => $(_ + b + f.value, "$KLLiPgUiit"))), (e = await e), r(), e),
            p = l.value.data.attributes.branding,
            m = l.value.data.attributes.banners_native.filter(
               (n) => n.active === !0 && n.location === "top",
            ),
            y = Math.floor(Math.random() * m.length),
            a = m[y]
         return (n, d) => {
            const u = N
            return (
               o(),
               c("div", I, [
                  t("div", P, [
                     t("div", V, [
                        t("div", q, [
                           t("div", E, [
                              t("div", R, h(s(a).sub_title), 1),
                              t("h2", S, h(s(a).title), 1),
                              t("div", T, [
                                 x(
                                    u,
                                    {
                                       to: s(p).link_download,
                                       target: "_blank",
                                       class: "bg-primary text-white btn__primary",
                                    },
                                    { default: v(() => [z(h(s(p).title_download), 1)]), _: 1 },
                                    8,
                                    ["to"],
                                 ),
                              ]),
                           ]),
                        ]),
                        t("div", G, [
                           t(
                              "img",
                              {
                                 src: s(_) + s(a).image.data.attributes.url,
                                 alt: "",
                                 class: "rounded w-full",
                              },
                              null,
                              8,
                              J,
                           ),
                        ]),
                     ]),
                  ]),
               ])
            )
         }
      },
   },
   It = O,
   U = {},
   K = {
      class: "size-full text-[#333333] rounded-2xl border border-gray-200 p-4 px-4 grid grid-rows-3 justify-center items-center gap-1 hover:bg-primary duration-300 hover:text-white hover:drop-shadow",
   },
   X = { class: "row-span-2" },
   Y = { class: "text-center" }
function H(g, e) {
   return (
      o(),
      c("div", K, [
         t("div", X, [D(g.$slots, "image")]),
         t("p", Y, [D(g.$slots, "text", { class: "text-center" })]),
      ])
   )
}
const Q = C(U, [["render", H]]),
   W = {},
   Z = { "aria-label": "pagenation" },
   tt = L(
      '<ul class="flex items-center max-sm:justify-center gap-2 md:h-8 h-[30px] text-sm"><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Previous</span><svg class="md:w-2.5 w-2 md:h-2.5 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg></a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">1</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">2</a></li><li><a href="#" aria-current="page" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">3</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">4</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">5</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-e-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Next</span><svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg></a></li></ul>',
      1,
   ),
   et = [tt]
function at(g, e) {
   return o(), c("nav", Z, et)
}
const st = C(W, [["render", at]]),
   nt = {
      class: "bg-white rounded-xl border border-gray-200 px-4 flex justify-between flex-col gap-4 py-6",
   },
   rt = { class: "grid gap-4" },
   ot = { class: "flex justify-between items-center gap-4 flex-wrap" },
   it = { class: "h__primary" },
   ct = { class: "flex md:gap-[21px] gap-4 text-[#828282] flex-wrap" },
   lt = { class: "country__grid" },
   dt = ["src"],
   _t = {
      __name: "AllCountries",
      async setup(g) {
         let e, r
         const { locale: f } = B(),
            _ = "/api/prayer-time-countries/?locale[0]=",
            b = "/api/prayer-time-regions?locale[0]=",
            l = "https://cms.prayer-now.com",
            { data: p } =
               (([e, r] = w(() => $(l + b + f.value, "$bEX2bdNytm"))), (e = await e), r(), e),
            { data: m } =
               (([e, r] = w(() => $(l + _ + f.value, "$gB3TferGDD"))), (e = await e), r(), e)
         return (y, a) => {
            const n = N,
               d = Q,
               u = st
            return (
               o(),
               c("div", nt, [
                  t("div", rt, [
                     t("div", ot, [
                        t("h2", it, h(y.$t("allcountries.heading")), 1),
                        t("div", ct, [
                           (o(!0),
                           c(
                              k,
                              null,
                              j(
                                 s(p).data,
                                 (i) => (
                                    o(),
                                    M(
                                       n,
                                       {
                                          to: "",
                                          class: "text-primary region_active border-b-2",
                                          key: i.id,
                                       },
                                       { default: v(() => [z(h(i.attributes.title), 1)]), _: 2 },
                                       1024,
                                    )
                                 ),
                              ),
                              128,
                           )),
                        ]),
                     ]),
                     t("div", lt, [
                        (o(!0),
                        c(
                           k,
                           null,
                           j(s(m).data, (i) => {
                              var A
                              return (
                                 o(),
                                 M(
                                    n,
                                    {
                                       to:
                                          "/app/" +
                                          i.attributes.api_country_code +
                                          "/" +
                                          i.id +
                                          "/" +
                                          ((A = i.attributes.default_prayer_time_city.data) == null
                                             ? void 0
                                             : A.attributes.api_city_code),
                                       key: i.id,
                                    },
                                    {
                                       default: v(() => [
                                          x(
                                             d,
                                             null,
                                             {
                                                image: v(() => [
                                                   t(
                                                      "img",
                                                      {
                                                         src:
                                                            s(l) +
                                                            i.attributes.flag.data.attributes.url,
                                                         alt: "",
                                                         class: "size-[64px] aspect-square rounded-full",
                                                      },
                                                      null,
                                                      8,
                                                      dt,
                                                   ),
                                                ]),
                                                text: v(() => [z(h(i.attributes.name), 1)]),
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
                              )
                           }),
                           128,
                        )),
                     ]),
                  ]),
                  x(u),
               ])
            )
         }
      },
   },
   Pt = _t,
   pt = {},
   mt = { class: "flex gap-4 justify-center flex-wrap" },
   ht = t(
      "img",
      { class: "w-[284px] h-[236px] lg:hidden", src: "https://via.placeholder.com/284x236" },
      null,
      -1,
   ),
   ut = t(
      "img",
      { class: "w-[284px] h-[236px] max-sm:hidden", src: "https://via.placeholder.com/284x236" },
      null,
      -1,
   )
function xt(g, e) {
   return (
      o(),
      c("div", mt, [
         (o(),
         c(
            k,
            null,
            j(2, (r) =>
               t("img", {
                  class: "w-[284px] h-[236px] max-lg:hidden",
                  src: "https://via.placeholder.com/284x236",
                  key: r,
               }),
            ),
            64,
         )),
         ht,
         ut,
      ])
   )
}
const Vt = C(pt, [["render", xt]]),
   gt = { class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start" },
   ft = t(
      "div",
      { class: "cent cent__col" },
      [
         t("h2", { class: "h__primary" }, "مزايا براير ناو."),
         t(
            "p",
            { class: "w-[236px] h-6 text-zinc-500 text-xs font-normal leading-[35px]" },
            " احصل على تنبيه مواقيت الصلاة على هاتفك مجانًا.",
         ),
      ],
      -1,
   ),
   vt = { class: "grid md:grid-cols-3 gap-4 gap-y-10" },
   bt = ["src", "alt"],
   yt = { class: "text-center text-indigo-900 text-[25px] font-normal" },
   wt = {
      class: "md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5",
   },
   $t = {
      __name: "PrayerFeature",
      async setup(g) {
         let e, r
         const { locale: f } = B(),
            _ = "https://cms.prayer-now.com",
            b = "/api/landing-page?locale[0]=",
            { data: l } =
               (([e, r] = w(() => $(_ + b + f.value, "$kVFq4nY7UB"))), (e = await e), r(), e)
         function p(a) {
            for (let n = a.length - 1; n > 0; n--) {
               const d = Math.floor(Math.random() * (n + 1))
               ;[a[n], a[d]] = [a[d], a[n]]
            }
            return a
         }
         const m = l.value.data.attributes.features.filter((a) => a.active === !0)
         p(m)
         const y = m.slice(0, 3)
         return (a, n) => (
            o(),
            c("div", gt, [
               ft,
               t("div", vt, [
                  (o(!0),
                  c(
                     k,
                     null,
                     j(
                        s(y),
                        (d, u) => (
                           o(),
                           c(
                              "div",
                              { class: "grid grid-rows-3 justify-center items-center", key: u },
                              [
                                 t(
                                    "img",
                                    {
                                       src: s(_) + d.icon.data.attributes.url,
                                       alt: d.icon.data.attributes.name,
                                       class: "rounded-sm max-w-[60px] max-h-[60px] justify-self-center",
                                    },
                                    null,
                                    8,
                                    bt,
                                 ),
                                 t("div", yt, h(d.title), 1),
                                 t("div", wt, h(d.description), 1),
                              ],
                           )
                        ),
                     ),
                     128,
                  )),
               ]),
            ])
         )
      },
   },
   qt = $t,
   kt = { class: "bg-white rounded-xl border border-gray-200 px-4 py-6" },
   jt = { class: "grid md:grid-cols-2 gap-2" },
   Bt = { class: "flex items-center" },
   zt = { class: "grid gap-2 max-md:justify-items-center" },
   Nt = { class: "max-md:text-center text-zinc-700 text-[15px] font-normal" },
   Ct = { class: "h__primary max-md:text-center" },
   At = { class: "w-full flex gap-3 items-center flex-wrap justify-center mt-4" },
   Dt = { class: "cent" },
   Mt = ["src"],
   Lt = {
      __name: "NativePanners",
      async setup(g) {
         let e, r
         const { locale: f } = B(),
            _ = "https://cms.prayer-now.com",
            b = "/api/landing-page?locale[0]=",
            { data: l } =
               (([e, r] = w(() => $(_ + b + f.value, "$8vRqDRoJpl"))), (e = await e), r(), e),
            p = l.value.data.attributes.branding,
            m = l.value.data.attributes.banners_native.filter(
               (n) => n.active === !0 && n.location === "bottom",
            ),
            y = Math.floor(Math.random() * m.length),
            a = m[y]
         return (n, d) => {
            const u = F,
               i = N
            return (
               o(),
               c("div", kt, [
                  t("div", jt, [
                     t("div", Bt, [
                        t("div", zt, [
                           t("p", Nt, h(s(a).sub_title), 1),
                           t("h2", Ct, h(s(a).title), 1),
                           t("div", At, [
                              x(
                                 i,
                                 { to: s(p).link_download_google_play, target: "_blank" },
                                 {
                                    default: v(() => [
                                       x(u, {
                                          isrc: "/svgs/google-store.svg",
                                          ialt: "google play",
                                          iclass:
                                             " max-w-[140px] min-h-[41px] duration-300 hover:scale-105",
                                       }),
                                    ]),
                                    _: 1,
                                 },
                                 8,
                                 ["to"],
                              ),
                              x(
                                 i,
                                 { to: s(p).link_download_apple, target: "_blank" },
                                 {
                                    default: v(() => [
                                       x(u, {
                                          isrc: "/svgs/app-store.svg",
                                          ialt: "app store",
                                          iclass:
                                             " max-w-[140px] min-h-[41px] duration-300 hover:scale-105",
                                       }),
                                    ]),
                                    _: 1,
                                 },
                                 8,
                                 ["to"],
                              ),
                              x(
                                 i,
                                 { to: s(p).link_download_app_gallery, target: "_blank" },
                                 {
                                    default: v(() => [
                                       x(u, {
                                          isrc: "/huawei-appgalley.jpg",
                                          ialt: "app store",
                                          iclass:
                                             " max-w-[140px] min-h-[41px] duration-300 hover:scale-105",
                                       }),
                                    ]),
                                    _: 1,
                                 },
                                 8,
                                 ["to"],
                              ),
                           ]),
                        ]),
                     ]),
                     t("div", Dt, [
                        t(
                           "img",
                           {
                              src: s(_) + s(a).image.data.attributes.url,
                              alt: "",
                              class: "rounded",
                           },
                           null,
                           8,
                           Mt,
                        ),
                     ]),
                  ]),
               ])
            )
         }
      },
   },
   Et = Lt
export { It as _, Pt as a, Vt as b, qt as c, Et as d, st as e }
