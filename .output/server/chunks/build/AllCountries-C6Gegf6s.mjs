import { u as useI18n, a as __nuxt_component_0$2, _ as _export_sfc } from './server.mjs';
import { useSSRContext, ref, mergeProps, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "size-full text-[#333333] rounded-2xl border border-gray-200 p-4 px-4 grid grid-rows-3 justify-center items-center gap-1 hover:bg-primary duration-300 hover:text-white hover:drop-shadow" }, _attrs))}><div class="row-span-2">`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div><p class="text-center">`);
  ssrRenderSlot(_ctx.$slots, "text", { class: "text-center" }, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountryCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "pagenation" }, _attrs))}><ul class="flex items-center max-sm:justify-center gap-2 md:h-8 h-[30px] text-sm"><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Previous</span><svg class="md:w-2.5 w-2 md:h-2.5 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg></a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">1</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">2</a></li><li><a href="#" aria-current="page" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">3</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">4</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">5</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-e-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Next</span><svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg></a></li></ul></nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AllCountries",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const regions = ref(null);
    const countries = ref(null);
    const region = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CountryCard = __nuxt_component_1;
      const _component_Pagination = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 flex justify-between flex-col gap-4 py-6" }, _attrs))}><div class="grid gap-4">`);
      if (((_b = (_a = regions.value) == null ? void 0 : _a.data) == null ? void 0 : _b.length) > 0) {
        _push(`<div class="flex justify-between items-center gap-4 flex-wrap"><h2 class="h__primary">${ssrInterpolate(_ctx.$t("allcountries.heading"))}</h2>`);
        if (((_d = (_c = regions.value) == null ? void 0 : _c.data) == null ? void 0 : _d.length) > 0) {
          _push(`<div class="flex md:gap-[21px] gap-4 text-[#828282] flex-wrap"><!--[-->`);
          ssrRenderList(((_e = regions.value) == null ? void 0 : _e.data) || [], (res) => {
            var _a2;
            _push(`<button class="${ssrRenderClass([res.id === region.value ? "region_active" : "", "text-primary region border-b-2 border-transparent"])}">${ssrInterpolate((_a2 = res == null ? void 0 : res.attributes) == null ? void 0 : _a2.title)}</button>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (countries.value && countries.value.data.length > 0) {
        _push(`<div class="country__grid"><!--[-->`);
        ssrRenderList(countries.value.data, (res) => {
          var _a2, _b2;
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: `/app/prayer-time/${res.attributes.slug}/${(_a2 = res.attributes.default_prayer_time_city.data) == null ? void 0 : _a2.attributes.slug}/${res.id}/${res.attributes.api_country_code}/${(_b2 = res.attributes.default_prayer_time_city.data) == null ? void 0 : _b2.attributes.api_city_code}`,
            key: res.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_CountryCard, null, {
                  image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (res && res.attributes.flag && res.attributes.flag.data && res.attributes.flag.data.attributes && res.attributes.flag.data.attributes.url) {
                        _push3(`<img${ssrRenderAttr("src", res.attributes.flag.data.attributes.url)} alt="" class="size-[64px] aspect-square rounded-full"${_scopeId2}>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        res && res.attributes.flag && res.attributes.flag.data && res.attributes.flag.data.attributes && res.attributes.flag.data.attributes.url ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: res.attributes.flag.data.attributes.url,
                          alt: "",
                          class: "size-[64px] aspect-square rounded-full"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
                      ];
                    }
                  }),
                  text: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`${ssrInterpolate(res.attributes.name)}`);
                    } else {
                      return [
                        createTextVNode(toDisplayString(res.attributes.name), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_CountryCard, null, {
                    image: withCtx(() => [
                      res && res.attributes.flag && res.attributes.flag.data && res.attributes.flag.data.attributes && res.attributes.flag.data.attributes.url ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: res.attributes.flag.data.attributes.url,
                        alt: "",
                        class: "size-[64px] aspect-square rounded-full"
                      }, null, 8, ["src"])) : createCommentVNode("", true)
                    ]),
                    text: withCtx(() => [
                      createTextVNode(toDisplayString(res.attributes.name), 1)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (countries.value && countries.value.data && countries.value.data.length > 14) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_Pagination, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllCountries.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main;

export { __nuxt_component_2 as _, __nuxt_component_2$1 as a };
//# sourceMappingURL=AllCountries-C6Gegf6s.mjs.map
