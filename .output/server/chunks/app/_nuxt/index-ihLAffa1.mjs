import { _ as __nuxt_component_0, a as __nuxt_component_2, b as __nuxt_component_3, c as __nuxt_component_5, d as __nuxt_component_6, e as __nuxt_component_2$1 } from './NativePanners-MRM9seZB.mjs';
import { _ as _export_sfc, g as __nuxt_component_1$1, u as useI18n, e as useFetch, a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, mergeProps, withAsyncContext, unref, withCtx, createVNode, createTextVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full rounded-2xl border border-gray-200 py-2 px-5 grid grid-rows-3 justify-center items-center hover:bg-primary duration-300 hover:text-white hover:drop-shadow text-[#333333]" }, _attrs))}><div class="row-span-2">`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div><p class="text-center">`);
  ssrRenderSlot(_ctx.$slots, "text", { class: "text-center" }, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CityCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$1 = {
  __name: "AllCapitals",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const getAllCapitals = "/api/prayer-time-cities/?filters[is_capital][$eq]=true&locale[0]=";
    const domain = "https://cms.prayer-now.com";
    const { data: capitals } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + getAllCapitals + locale.value + "&isHardPopulate=true", "$PwYquliu6X")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CityCard = __nuxt_component_1;
      const _component_Pagination = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 flex justify-between flex-col gap-4" }, _attrs))}><div class="grid gap-4"><h2 class="h__primary">${ssrInterpolate(_ctx.$t("citiesbanner.heading"))}</h2><div class="capitals__grid">`);
      if (unref(capitals)) {
        _push(`<!--[-->`);
        ssrRenderList(unref(capitals).data, (city) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: "/" + city.attributes.prayer_time_country.data.attributes.api_country_code + "/" + city.attributes.prayer_time_country.data.id + "/" + city.attributes.api_city_code,
            key: city.id
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_CityCard, null, {
                  image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<img${ssrRenderAttr("src", unref(domain) + city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url)} alt="" class="size-[64px] rounded-full"${_scopeId2}>`);
                    } else {
                      return [
                        createVNode("img", {
                          src: unref(domain) + city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url,
                          alt: "",
                          class: "size-[64px] rounded-full"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  text: withCtx((_2, _push3, _parent3, _scopeId2) => {
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
                  createVNode(_component_CityCard, null, {
                    image: withCtx(() => [
                      createVNode("img", {
                        src: unref(domain) + city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url,
                        alt: "",
                        class: "size-[64px] rounded-full"
                      }, null, 8, ["src"])
                    ]),
                    text: withCtx(() => [
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
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_Pagination, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllCapitals.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Add1 = __nuxt_component_0;
  const _component_Search = __nuxt_component_1$1;
  const _component_AllCountries = __nuxt_component_2;
  const _component_GoogleAds = __nuxt_component_3;
  const _component_AllCapitals = __nuxt_component_4;
  const _component_PrayerFeature = __nuxt_component_5;
  const _component_NativePanners = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Add1, null, null, _parent));
  _push(`<div class="relative"><div class="bg-white rounded-xl border border-gray-200 flex items-center p-3 gap-[15px]">`);
  _push(ssrRenderComponent(_component_Search, null, null, _parent));
  _push(`</div></div>`);
  _push(ssrRenderComponent(_component_AllCountries, null, null, _parent));
  _push(ssrRenderComponent(_component_GoogleAds, null, null, _parent));
  _push(ssrRenderComponent(_component_AllCapitals, null, null, _parent));
  _push(ssrRenderComponent(_component_PrayerFeature, null, null, _parent));
  _push(ssrRenderComponent(_component_NativePanners, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-ihLAffa1.mjs.map
