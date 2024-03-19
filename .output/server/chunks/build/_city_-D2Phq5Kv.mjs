import { u as useI18n, c as useRoute, d as useFetch, b as __nuxt_component_1$4, e as __nuxt_component_2$1, a as __nuxt_component_0$2, _ as _export_sfc } from './server.mjs';
import { withAsyncContext, ref, watchEffect, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_3$1, a as __nuxt_component_4$1, b as __nuxt_component_5$1, c as __nuxt_component_6 } from './NativePanners-DRzj7Gh3.mjs';
import { _ as __nuxt_component_2 } from './AllCountries-B-jO_zJ1.mjs';
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

const _sfc_main$9 = {
  __name: "Praying-today",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: []
    }
  },
  setup(__props) {
    const props = __props;
    const prayerTimes = [
      { key: "Fajr", name: "Fajr", icon: "fajr", icon_inverted: "fajr", translation: "infobanner.time1" },
      { key: "Sunrise", name: "Sunrise", icon: "sunrise", icon_inverted: "sunrise", translation: "infobanner.time2" },
      { key: "Dhuhr", name: "Dhuhr", icon: "dhuhr", icon_inverted: "dhuhr-inverted", translation: "infobanner.time3" },
      { key: "Asr", name: "Asr", icon: "asr", icon_inverted: "asr-inverted", translation: "infobanner.time4" },
      { key: "Maghrib", name: "Maghrib", icon: "maghrib", icon_inverted: "maghrib-inverted", translation: "infobanner.time5" },
      { key: "Isha", name: "Isha", icon: "isha", icon_inverted: "isha", translation: "infobanner.time6" }
    ];
    const nextPrayerIndex = computed(() => {
      for (let i = 0; i < prayerTimes.length; i++) {
        if (isNextPrayer(i)) {
          return i;
        }
      }
      return -1;
    });
    function isNextPrayer(index) {
      const now = /* @__PURE__ */ new Date();
      const currentHours = now.getHours();
      const currentMinutes = now.getMinutes();
      const nextPrayer = prayerTimes[index];
      const match = props.data[0].timings[nextPrayer.key].match(/(\d{2}):(\d{2})/);
      const prayerHours = parseInt(match[1], 10);
      const prayerMinutes = parseInt(match[2], 10);
      const currentTimeInMinutes = currentHours * 60 + currentMinutes;
      const prayerTimeInMinutes = prayerHours * 60 + prayerMinutes;
      return prayerTimeInMinutes > currentTimeInMinutes;
    }
    function extractTime(str) {
      const pattern = /(\d{2}:\d{2})/;
      const match = pattern.exec(str);
      return match ? match[0] : "";
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Image = __nuxt_component_1$4;
      if (props.data[0] && props.data[0].timings) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto w-full" }, _attrs))}><div class="w-full overflow-x-auto bg-yellow-50 rounded-xl border border-sec flex justify-between whitespace-nowrap items-center px-"><!--[-->`);
        ssrRenderList(prayerTimes, (prayer, index) => {
          _push(`<div class="${ssrRenderClass([{ "bg-sec ": nextPrayerIndex.value === index }, "cent__col gap-1 py-2 min-w-[110px] px-5 flex-1"])}">`);
          if (nextPrayerIndex.value === index) {
            _push(ssrRenderComponent(_component_Image, {
              isrc: `/svgs/${prayer.icon_inverted}.svg`,
              ialt: prayer.name,
              iclass: "w-10 h-10"
            }, null, _parent));
          } else {
            _push(ssrRenderComponent(_component_Image, {
              isrc: `/svgs/${prayer.icon}.svg`,
              ialt: prayer.name,
              iclass: "w-10 h-10"
            }, null, _parent));
          }
          _push(`<div class="${ssrRenderClass([{ "!text-white ": nextPrayerIndex.value === index }, "text-zinc-500 text-sm font-normal font-['Almarai'] leading-tight"])}">${ssrInterpolate(_ctx.$t(prayer.translation))}</div><div class="${ssrRenderClass([{ "!text-white ": nextPrayerIndex.value === index }, "text-zinc-800 text-base font-medium font-['Roboto'] leading-tight"])}">${ssrInterpolate(extractTime(props.data[0].timings[prayer.key]) || "\u2013")}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Praying-today.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$9;
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><table class="overflow-hidden rounded-xl w-full text-xs whitespace-nowrap mb-0.5 drop-shadow-sm"><thead><tr class="bg-primary text-white h-[33px]">`);
  ssrRenderSlot(_ctx.$slots, "thead", {}, null, _push, _parent);
  _push(`</tr></thead><tbody class="text-zinc-800">`);
  ssrRenderSlot(_ctx.$slots, "tbody", {}, null, _push, _parent);
  _push(`</tbody></table></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {
  __name: "Th",
  __ssrInlineRender: true,
  props: {
    thText: {
      type: String,
      default: ""
    },
    thClass: {
      type: [String, Number],
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<th${ssrRenderAttrs(mergeProps({
        class: ["px-4 font-normal text-start", __props.thClass]
      }, _attrs))}>${ssrInterpolate(_ctx.$t(__props.thText))} `);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</th>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Th.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$7;
const _sfc_main$6 = {
  __name: "Td",
  __ssrInlineRender: true,
  props: {
    tdClass: {
      type: [String, Number],
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<td${ssrRenderAttrs(mergeProps({ class: "px-3" }, _attrs))}><div class="${ssrRenderClass(__props.tdClass)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></td>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Td.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$6;
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full text-stone-500 bg-white rounded-xl border border-gray-300 cent p-2 text-center hover:bg-primary hover:text-white hover:border-primary duration-300" }, _attrs))}><div class="font-normal font-[&#39;Almarai&#39;]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CityLabel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
    to: "/",
    class: "w-full bg-white rounded-xl border border-gray-300 grid grid-cols-5 gap-5 p-3"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="cent"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="flex items-center col-span-4"${_scopeId}><div class="grid"${_scopeId}><div class="text-zinc-800 font-semibold max-md:text-[13px]"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div><div class="text-neutral-400 max-md:text-xs"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "by", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div></div></div>`);
      } else {
        return [
          createVNode("div", { class: "cent" }, [
            renderSlot(_ctx.$slots, "image")
          ]),
          createVNode("div", { class: "flex items-center col-span-4" }, [
            createVNode("div", { class: "grid" }, [
              createVNode("div", { class: "text-zinc-800 font-semibold max-md:text-[13px]" }, [
                renderSlot(_ctx.$slots, "title")
              ]),
              createVNode("div", { class: "text-neutral-400 max-md:text-xs" }, [
                renderSlot(_ctx.$slots, "by")
              ])
            ])
          ])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/trackCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_TrackCard = __nuxt_component_0$1;
  const _component_Image = __nuxt_component_1$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6" }, _attrs))}><h2 class="h__primary">${ssrInterpolate(_ctx.$t("playbanner.heading"))}</h2><div class="tracks__grid"><!--[-->`);
  ssrRenderList(6, (index) => {
    _push(ssrRenderComponent(_component_TrackCard, {
      key: index
    }, {
      image: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Image, {
            isrc: "/play-bar.png",
            ialt: "logo",
            iclass: "h-full rounded"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Image, {
              isrc: "/play-bar.png",
              ialt: "logo",
              iclass: "h-full rounded"
            })
          ];
        }
      }),
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` \u0642\u0627\u0626\u0645\u0629 \u062A\u0634\u063A\u064A\u0644 \u0642\u0631\u0623\u0646 \u062C\u062F\u064A\u062F\u0629 `);
        } else {
          return [
            createTextVNode(" \u0642\u0627\u0626\u0645\u0629 \u062A\u0634\u063A\u064A\u0644 \u0642\u0631\u0623\u0646 \u062C\u062F\u064A\u062F\u0629 ")
          ];
        }
      }),
      by: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` \u0645\u0627\u0647\u0631 \u0627\u0644\u0645\u0639\u064A\u0642\u0644\u064A `);
        } else {
          return [
            createTextVNode(" \u0645\u0627\u0647\u0631 \u0627\u0644\u0645\u0639\u064A\u0642\u0644\u064A ")
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllTracks.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-rows-5 bg-white rounded-xl border border-gray-300 size-full overflow-hidden drop-shadow-sm" }, _attrs))}><div class="row-span-3">`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div><div class="row-span-2 grid gap-2 p-3"><div class="text-zinc-800 text-lg truncate">`);
  ssrRenderSlot(_ctx.$slots, "title", { class: "text-center" }, null, _push, _parent);
  _push(`</div><div class="text-sm text-zinc-500 line-clamp-3">`);
  ssrRenderSlot(_ctx.$slots, "paragraph", { class: "" }, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_ArticleCard = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-6" }, _attrs))}><h2 class="h__primary">${ssrInterpolate(_ctx.$t("trendingbanner.heading"))}</h2><div class="popular__articles__grid"><!--[-->`);
  ssrRenderList(3, (index) => {
    _push(ssrRenderComponent(_component_ArticleCard, {
      key: index
    }, {
      image: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<img class="w-full h-full" src="https://via.placeholder.com/266x185"${_scopeId}>`);
        } else {
          return [
            createVNode("img", {
              class: "w-full h-full",
              src: "https://via.placeholder.com/266x185"
            })
          ];
        }
      }),
      title: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` \u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629 \u0639\u0644\u0649 \u0623\u062E\u0648\u0629 \u0627\u0644\u062F\u064A\u0646 `);
        } else {
          return [
            createTextVNode(" \u0627\u0644\u0645\u062D\u0627\u0641\u0638\u0629 \u0639\u0644\u0649 \u0623\u062E\u0648\u0629 \u0627\u0644\u062F\u064A\u0646 ")
          ];
        }
      }),
      paragraph: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` \u0641\u0645\u0627 \u0623\u0635\u0627\u0628 \u0627\u0644\u0645\u0633\u0644\u0645\u064A\u0646 \u0627\u0644\u064A\u0648\u0645 \u0645\u0646 \u0627\u0644\u062A\u0623\u062E\u0631 \u0648\u0642\u062F \u0643\u0627\u0646\u0648\u0627 \u0641\u064A\u0645\u0627 \u0645\u0636\u0649 \u0633\u0627\u062F\u0629 \u0627\u0644\u0639\u0627\u0645 \u0646\u062A\u064A\u062C\u0629 \u0644\u0644\u062A\u0641\u0631\u0642 \u0648\u0627\u0644\u0627\u062E\u062A\u0644\u0627\u0641 \u0648\u0631\u0643\u0648\u0646\u0647\u0645 \u0625\u0644\u0649 \u0627\u0644\u062F\u0646\u064A\u0627 \u0648\u0632\u062E\u0627\u0631\u0641\u0647\u0627 \u0648\u0627\u0644\u0627\u0634\u062A\u063A\u0627\u0644 `);
        } else {
          return [
            createTextVNode(" \u0641\u0645\u0627 \u0623\u0635\u0627\u0628 \u0627\u0644\u0645\u0633\u0644\u0645\u064A\u0646 \u0627\u0644\u064A\u0648\u0645 \u0645\u0646 \u0627\u0644\u062A\u0623\u062E\u0631 \u0648\u0642\u062F \u0643\u0627\u0646\u0648\u0627 \u0641\u064A\u0645\u0627 \u0645\u0636\u0649 \u0633\u0627\u062F\u0629 \u0627\u0644\u0639\u0627\u0645 \u0646\u062A\u064A\u062C\u0629 \u0644\u0644\u062A\u0641\u0631\u0642 \u0648\u0627\u0644\u0627\u062E\u062A\u0644\u0627\u0641 \u0648\u0631\u0643\u0648\u0646\u0647\u0645 \u0625\u0644\u0649 \u0627\u0644\u062F\u0646\u064A\u0627 \u0648\u0632\u062E\u0627\u0631\u0641\u0647\u0627 \u0648\u0627\u0644\u0627\u0634\u062A\u063A\u0627\u0644 ")
          ];
        }
      }),
      _: 2
    }, _parent));
  });
  _push(`<!--]--></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopularArticlesSec.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
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
      const _component_Add1 = __nuxt_component_3$1;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CityLabel = __nuxt_component_8;
      const _component_AllCountries = __nuxt_component_2;
      const _component_GoogleAds = __nuxt_component_4$1;
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
//# sourceMappingURL=_city_-D2Phq5Kv.mjs.map
