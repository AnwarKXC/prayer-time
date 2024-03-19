import { u as useI18n, b as useRoute, c as useFetch, d as __nuxt_component_1$4, e as __nuxt_component_2$1, a as __nuxt_component_0$2 } from './server.mjs';
import { _ as __nuxt_component_1, a as __nuxt_component_3, b as __nuxt_component_4, c as __nuxt_component_5, d as __nuxt_component_8, e as __nuxt_component_11, f as __nuxt_component_12 } from './PopularArticlesSec-Blu9HflY.mjs';
import { _ as __nuxt_component_0, a as __nuxt_component_3$1, b as __nuxt_component_5$1, c as __nuxt_component_6 } from './NativePanners-Dm31pPuX.mjs';
import { _ as __nuxt_component_2 } from './AllCountries-B-jO_zJ1.mjs';
import { withAsyncContext, ref, watchEffect, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main = {
  __name: "[city]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const domain = "https://cms.prayer-now.com";
    const times = "http://api.aladhan.com/v1/calendarByCity?city=";
    const getAllCitiesInCountry = "/api/prayer-time-cities/?isHardPopulate=true&filters[prayer_time_country][id][$eq]=";
    const route = useRoute();
    const { data: cities } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + getAllCitiesInCountry + route.params.countryKey + "&locale[0]=" + locale.value, "$IPHooOusaW")), __temp = await __temp, __restore(), __temp);
    console.log(domain + getAllCitiesInCountry + route.params.countryKey + "&locale[0]=" + locale.value);
    const cleander = ref([]);
    async function fetchData() {
      try {
        const res = await $fetch(times + route.params.cityid + "&country=" + route.params.cityKey);
        return await res;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    }
    async function fetching() {
      const data = await fetchData();
      if (data) {
        cleander.value = data;
        filterEntries();
      }
    }
    watchEffect(() => {
      fetching();
    });
    const currentDate = /* @__PURE__ */ new Date();
    const formattedDate = ref(formatDate(currentDate));
    const filteredEntries = ref([]);
    function formatDate(date) {
      const pad = (val) => val.toString().padStart(2, "0");
      return `${pad(date.getDate())}-${pad(date.getMonth() + 1)}-${date.getFullYear()}`;
    }
    function filterEntries() {
      if (cleander.value && cleander.value.data) {
        filteredEntries.value = cleander.value.data.filter((day) => {
          return day.date.gregorian.date === formattedDate.value;
        });
      } else {
        filteredEntries.value = [];
      }
    }
    const dayOfMonth = currentDate.getDate();
    const startIndex = ref(dayOfMonth <= 7 ? 0 : dayOfMonth <= 14 ? 7 : dayOfMonth <= 21 ? 14 : 21);
    const displayedData = computed(() => {
      if (!cleander.value || !cleander.value.data || !Array.isArray(cleander.value.data) || cleander.value.data.length === 0) {
        return [];
      }
      const start = startIndex.value;
      const dataLength = cleander.value.data.length;
      if (start >= 21) {
        return cleander.value.data.slice(start, dataLength);
      } else {
        const end = Math.min(start + 7, dataLength);
        return cleander.value.data.slice(start, end);
      }
    });
    function extractTime(str) {
      const pattern = /(\d{2}:\d{2})/;
      const match = pattern.exec(str);
      return match ? match[0] : "";
    }
    console.log(route);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g;
      const _component_Image = __nuxt_component_1$4;
      const _component_PrayingToday = __nuxt_component_1;
      const _component_Button = __nuxt_component_2$1;
      const _component_Table = __nuxt_component_3;
      const _component_Th = __nuxt_component_4;
      const _component_Td = __nuxt_component_5;
      const _component_Add1 = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CityLabel = __nuxt_component_8;
      const _component_AllCountries = __nuxt_component_2;
      const _component_GoogleAds = __nuxt_component_3$1;
      const _component_AllTracks = __nuxt_component_11;
      const _component_PopularArticlesSec = __nuxt_component_12;
      const _component_PrayerFeature = __nuxt_component_5$1;
      const _component_NativePanners = __nuxt_component_6;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6" }, _attrs))}><div><img class="w-full h-[244px] rounded-xl border border-gray-300" src="https://via.placeholder.com/909x244"></div><div class="bg-white rounded-xl border border-gray-200 grid gap-6 px-4 py-6"><h2 class="h__primary">${ssrInterpolate(_ctx.$t("infobanner.topheading"))}</h2><div class="h-[0px] rotate-180 border border-stone-300"></div><div class="grid md:grid-cols-2 gap-4 items-center"><div class="flex gap-3 items-center"><div class="w-16 h-16 rounded-lg border border-gray-200 p-1.5 cent overflow-hidden">`);
      if ((_g = (_f = (_e = (_d = (_c = (_b = (_a = unref(cities).data[0]) == null ? void 0 : _a.attributes) == null ? void 0 : _b.prayer_time_country) == null ? void 0 : _c.data) == null ? void 0 : _d.attributes) == null ? void 0 : _e.flag) == null ? void 0 : _f.data) == null ? void 0 : _g.attributes) {
        _push(`<img${ssrRenderAttr("src", unref(cities).data[0].attributes.prayer_time_country.data.attributes.flag.data.attributes.url || "")}${ssrRenderAttr("alt", unref(cities).data[0].attributes.prayer_time_country.data.attributes.flag.data.attributes.alternativeText || "")} class="aspect-square rounded-full">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="grid gap-2"><div class="text-zinc-700 text-[17px] font-bold font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.countryheading"))} `);
      if (unref(cities).data && unref(cities).data[0]) {
        _push(`<!--[-->${ssrInterpolate(_ctx.$t(
          unref(cities).data[0].attributes.prayer_time_country.data.attributes.name
        ))}<!--]-->`);
      } else {
        _push(`<!--[--> No Data Found <!--]-->`);
      }
      _push(`</div>`);
      if (unref(cities).data) {
        _push(`<div class="text-zinc-800 text-xs font-normal font-[&#39;Almarai&#39;] leading-tight"><!--[-->`);
        ssrRenderList(unref(cities).data, (city) => {
          _push(`<div class="cent">`);
          if (city.id == unref(route).params.city) {
            _push(`<!--[-->`);
            if (city.attributes.is_capital) {
              _push(`<span>${ssrInterpolate(_ctx.$t("infobanner.countrysubheading"))} \xA0 </span>`);
            } else {
              _push(`<span>${ssrInterpolate(_ctx.$t("infobanner.countrysubheading2"))} \xA0 </span>`);
            }
            _push(`<span>${ssrInterpolate(city.attributes.title)}</span><!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="grid gap-2">`);
      if (filteredEntries.value[0] && filteredEntries.value[0].meta) {
        _push(`<div class="flex gap-2 items-center">`);
        _push(ssrRenderComponent(_component_Image, {
          isrc: "/svgs/e7datheat.svg",
          ialt: "country",
          iclass: " w-4 h-4"
        }, null, _parent));
        _push(`<div class="text-zinc-800 text-sm font-normal font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.para1"))} ${ssrInterpolate(filteredEntries.value[0].meta.timezone)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-2 items-center">`);
      _push(ssrRenderComponent(_component_Image, {
        isrc: "/svgs/cleander.svg",
        ialt: "country",
        iclass: " w-4 h-4"
      }, null, _parent));
      _push(`<div class="text-zinc-800 text-sm font-normal font-[&#39;Almarai&#39;] leading-tight">`);
      if (filteredEntries.value[0]) {
        _push(`<!--[-->${ssrInterpolate(filteredEntries.value[0].date.hijri.weekday.ar)}\xA0 ${ssrInterpolate(filteredEntries.value[0].date.hijri.day)}\xA0 ${ssrInterpolate(filteredEntries.value[0].date.hijri.month.ar)}\xA0 ${ssrInterpolate(filteredEntries.value[0].date.hijri.year)}\xA0 ${ssrInterpolate(_ctx.$t("infobanner.para2"))}\xA0 ${ssrInterpolate(filteredEntries.value[0].date.gregorian.date)}\xA0 <!--]-->`);
      } else {
        _push(`<!--[--> No Data Found <!--]-->`);
      }
      _push(`</div></div></div></div>`);
      if (filteredEntries.value[0]) {
        _push(`<div class="grid md:grid-cols-3 gap-4"><div class="flex gap-2"><div class="text-teal-900 text-sm font-bold font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.calpara"))}</div><div class="text-zinc-800 text-sm font-normal font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(filteredEntries.value[0].meta.method.name)}</div></div><div class="flex gap-2 md:justify-center"><div class="text-teal-900 text-sm font-bold font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.doctrinepara"))}</div><div class="text-zinc-800 text-sm font-normal font-[&#39;Almarai&#39;] leading-tight"> \u0634\u0627\u0641\u0639\u064A\u060C \u062D\u0646\u0628\u0644\u064A\u060C \u0645\u0627\u0644\u0643\u064A</div></div><div class="flex gap-2"><div class="text-teal-900 text-sm font-bold font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.timestyle"))}</div><div class="text-zinc-800 text-sm font-normal font-[&#39;Almarai&#39;] leading-tight"> \u062A\u0646\u0633\u064A\u0642 24 \u0633\u0627\u0639\u0629</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="flex gap-2 items-center"><div class="text-zinc-700 text-lg font-bold font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.timepara"))}</div><div class="text-zinc-500 text-xs font-normal font-[&#39;Almarai&#39;] leading-tight">${ssrInterpolate(_ctx.$t("infobanner.timingsubheading"))}</div></div>`);
      if (filteredEntries.value.length) {
        _push(`<div class="overflow-hidden px-1">`);
        _push(ssrRenderComponent(_component_PrayingToday, {
          data: filteredEntries.value
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div><p class="text-zinc-500 text-sm font-normal font-[&#39;Almarai&#39;] leading-tight"> No Data Found </p></div>`);
      }
      _push(`<h2 class="h__primary">${ssrInterpolate(_ctx.$t("infobanner.monthsubheading"))}</h2><div class="overflow-x-auto pb-1"><div class="flex gap-4 whitespace-nowrap text-zinc-500">`);
      _push(ssrRenderComponent(_component_Button, {
        buttonText: "infobanner.week1",
        buttonClass: " flex-1 btn__primary bg-zinc-100  font-semibold hover:bg-sec hover:text-white",
        onClick: ($event) => startIndex.value = 0,
        class: startIndex.value === 0 ? "!bg-sec text-white" : ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        buttonText: "infobanner.week2",
        buttonClass: "flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",
        onClick: ($event) => startIndex.value = 7,
        class: startIndex.value === 7 ? "!bg-sec text-white" : ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        buttonText: "infobanner.week3",
        buttonClass: "flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",
        onClick: ($event) => startIndex.value = 14,
        class: startIndex.value === 14 ? "!bg-sec text-white" : ""
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        buttonText: "infobanner.week4",
        buttonClass: "flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",
        onClick: ($event) => startIndex.value = 21,
        class: startIndex.value === 21 ? "!bg-sec text-white" : ""
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Table, null, {
        thead: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.date" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.time1" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.time2" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.time3" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.time4" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.time5" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Th, { thText: "infobanner.time6" }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Th, { thText: "infobanner.date" }),
              createVNode(_component_Th, { thText: "infobanner.time1" }),
              createVNode(_component_Th, { thText: "infobanner.time2" }),
              createVNode(_component_Th, { thText: "infobanner.time3" }),
              createVNode(_component_Th, { thText: "infobanner.time4" }),
              createVNode(_component_Th, { thText: "infobanner.time5" }),
              createVNode(_component_Th, { thText: "infobanner.time6" })
            ];
          }
        }),
        tbody: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(displayedData)) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(displayedData), (day) => {
                _push2(`<tr class="${ssrRenderClass([formattedDate.value === day.date.gregorian.date ? "!bg-yellow-50 " : "", "h-[45px] border-b"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_Th, {
                  thClass: " bg-gray-100 font-semibold ",
                  class: formattedDate.value === day.date.gregorian.date ? "!bg-yellow-50 " : ""
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(day.date.gregorian.date)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(day.date.gregorian.date), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Td, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(extractTime(day.timings.Fajr))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(extractTime(day.timings.Fajr)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Td, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(extractTime(day.timings.Sunrise))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(extractTime(day.timings.Sunrise)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Td, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(extractTime(day.timings.Dhuhr))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(extractTime(day.timings.Dhuhr)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Td, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(extractTime(day.timings.Asr))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(extractTime(day.timings.Asr)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Td, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(extractTime(day.timings.Maghrib))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(extractTime(day.timings.Maghrib)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_Td, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(extractTime(day.timings.Isha))}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(extractTime(day.timings.Isha)), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</tr>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<tr class="flex items-center justify-center h-full"${_scopeId}><td colspan="7" class="text-xl"${_scopeId}>No Data Found</td></tr>`);
            }
          } else {
            return [
              unref(displayedData) ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(displayedData), (day) => {
                return openBlock(), createBlock("tr", {
                  class: ["h-[45px] border-b", formattedDate.value === day.date.gregorian.date ? "!bg-yellow-50 " : ""],
                  key: day
                }, [
                  createVNode(_component_Th, {
                    thClass: " bg-gray-100 font-semibold ",
                    class: formattedDate.value === day.date.gregorian.date ? "!bg-yellow-50 " : ""
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(day.date.gregorian.date), 1)
                    ]),
                    _: 2
                  }, 1032, ["class"]),
                  createVNode(_component_Td, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(extractTime(day.timings.Fajr)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_Td, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(extractTime(day.timings.Sunrise)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_Td, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(extractTime(day.timings.Dhuhr)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_Td, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(extractTime(day.timings.Asr)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_Td, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(extractTime(day.timings.Maghrib)), 1)
                    ]),
                    _: 2
                  }, 1024),
                  createVNode(_component_Td, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(extractTime(day.timings.Isha)), 1)
                    ]),
                    _: 2
                  }, 1024)
                ], 2);
              }), 128)) : (openBlock(), createBlock("tr", {
                key: 1,
                class: "flex items-center justify-center h-full"
              }, [
                createVNode("td", {
                  colspan: "7",
                  class: "text-xl"
                }, "No Data Found")
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Add1, null, null, _parent));
      if (unref(cities) && unref(cities).data.length) {
        _push(`<div class="bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6"><h2 class="h__primary">${ssrInterpolate(_ctx.$t("citiescounrybanner.heading"))}</h2><div class="city__label__grid"><!--[-->`);
        ssrRenderList(unref(cities).data, (city) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/app/prayer-time/" + unref(route).params.country + "/" + city.attributes.slug + "/" + unref(route).params.countryKey + "/" + unref(route).params.cityKey + "/" + city.attributes.api_city_code + "/" + city.id,
            key: city.id,
            class: "w-full"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_CityLabel, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(city.attributes.title)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(city.attributes.title), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_CityLabel, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(city.attributes.title), 1)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_AllCountries, null, null, _parent));
      _push(ssrRenderComponent(_component_GoogleAds, null, null, _parent));
      _push(ssrRenderComponent(_component_AllTracks, null, null, _parent));
      _push(ssrRenderComponent(_component_PopularArticlesSec, null, null, _parent));
      _push(ssrRenderComponent(_component_PrayerFeature, null, null, _parent));
      _push(ssrRenderComponent(_component_NativePanners, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/prayer-time/[country]/[id]/[countryKey]/[cityKey]/[cityid]/[city].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_city_-BlW54rvX.mjs.map
