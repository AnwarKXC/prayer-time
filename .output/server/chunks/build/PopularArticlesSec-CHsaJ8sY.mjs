import { _ as _export_sfc, e as __nuxt_component_1$4, a as __nuxt_component_0$2 } from './server.mjs';
import { useSSRContext, computed, mergeProps, withCtx, createVNode, createTextVNode, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$8 = {
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
          _push(`<div class="${ssrRenderClass([{ "!text-white ": nextPrayerIndex.value === index }, "text-zinc-500 text-sm font-normal font-['Almarai'] leading-tight"])}">${ssrInterpolate(_ctx.$t(prayer.translation))}</div><div class="${ssrRenderClass([{ "!text-white ": nextPrayerIndex.value === index }, "text-zinc-800 text-base font-medium font-['Roboto'] leading-tight"])}">${ssrInterpolate(props.data[0].timings[prayer.key] || "\u2013")}</div></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Praying-today.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$8;
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-auto" }, _attrs))}><table class="overflow-hidden rounded-xl w-full text-xs whitespace-nowrap mb-0.5 drop-shadow-sm"><thead><tr class="bg-primary text-white h-[33px]">`);
  ssrRenderSlot(_ctx.$slots, "thead", {}, null, _push, _parent);
  _push(`</tr></thead><tbody class="text-zinc-800">`);
  ssrRenderSlot(_ctx.$slots, "tbody", {}, null, _push, _parent);
  _push(`</tbody></table></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Table.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Th.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$6;
const _sfc_main$5 = {
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Td.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$5;
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full text-stone-500 bg-white rounded-xl border border-gray-300 cent p-2 text-center hover:bg-primary hover:text-white hover:border-primary duration-300" }, _attrs))}><div class="font-normal font-[&#39;Almarai&#39;]">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CityLabel.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = {};
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/trackCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllTracks.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-rows-5 bg-white rounded-xl border border-gray-300 size-full overflow-hidden drop-shadow-sm" }, _attrs))}><div class="row-span-3">`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div><div class="row-span-2 grid gap-2 p-3"><div class="text-zinc-800 text-lg truncate">`);
  ssrRenderSlot(_ctx.$slots, "title", { class: "text-center" }, null, _push, _parent);
  _push(`</div><div class="text-sm text-zinc-500 line-clamp-3">`);
  ssrRenderSlot(_ctx.$slots, "paragraph", { class: "" }, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ArticleCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PopularArticlesSec.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_1 as _, __nuxt_component_3 as a, __nuxt_component_4 as b, __nuxt_component_5 as c, __nuxt_component_8 as d, __nuxt_component_11 as e, __nuxt_component_12 as f };
//# sourceMappingURL=PopularArticlesSec-CHsaJ8sY.mjs.map
