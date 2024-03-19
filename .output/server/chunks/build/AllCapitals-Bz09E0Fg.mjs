import { u as useI18n, c as useFetch, a as __nuxt_component_0$2, _ as _export_sfc } from './server.mjs';
import { useSSRContext, withAsyncContext, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { a as __nuxt_component_2$1 } from './AllCountries-B-jO_zJ1.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full rounded-2xl border border-gray-200 py-2 px-5 grid grid-rows-3 justify-center items-center hover:bg-primary duration-300 hover:text-white hover:drop-shadow text-[#333333]" }, _attrs))}><div class="row-span-2">`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div><p class="text-center">`);
  ssrRenderSlot(_ctx.$slots, "text", { class: "text-center" }, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CityCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "AllCapitals",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const getAllCapitals = "/api/prayer-time-cities/?filters[is_capital][$eq]=true&locale[0]=";
    const domain = "https://cms.prayer-now.com";
    const { data: capitals } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + getAllCapitals + locale.value + "&isHardPopulate=true", "$PwYquliu6X")), __temp = await __temp, __restore(), __temp);
    function getCitySlug(city) {
      if (!city || !city.attributes || !city.attributes.prayer_time_country || !city.attributes.prayer_time_country.data) {
        return "";
      }
      return `/app/prayer-time/${city.attributes.prayer_time_country.data.attributes.slug}/${city.attributes.slug}/${city.attributes.prayer_time_country.data.id}/${city.attributes.prayer_time_country.data.attributes.api_country_code}/${city.attributes.api_city_code + "/" + city.data.id}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CityCard = __nuxt_component_1;
      const _component_Pagination = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 flex justify-between flex-col gap-4" }, _attrs))}><div class="grid gap-4"><h2 class="h__primary">${ssrInterpolate(_ctx.$t("citiesbanner.heading"))}</h2><div class="capitals__grid">`);
      if (unref(capitals) && unref(capitals).data) {
        _push(`<!--[-->`);
        ssrRenderList(unref(capitals).data, (city) => {
          _push(ssrRenderComponent(_component_NuxtLink, {
            key: city.id,
            to: getCitySlug(city)
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_CityCard, null, {
                  image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      if (city && city.attributes && city.attributes.prayer_time_country && city.attributes.prayer_time_country.data && city.attributes.prayer_time_country.data.attributes && city.attributes.prayer_time_country.data.attributes.flag && city.attributes.prayer_time_country.data.attributes.flag.data && city.attributes.prayer_time_country.data.attributes.flag.data.attributes) {
                        _push3(`<img${ssrRenderAttr("src", city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url)} alt="" class="size-[64px] rounded-full"${_scopeId2}>`);
                      } else {
                        _push3(`<!---->`);
                      }
                    } else {
                      return [
                        city && city.attributes && city.attributes.prayer_time_country && city.attributes.prayer_time_country.data && city.attributes.prayer_time_country.data.attributes && city.attributes.prayer_time_country.data.attributes.flag && city.attributes.prayer_time_country.data.attributes.flag.data && city.attributes.prayer_time_country.data.attributes.flag.data.attributes ? (openBlock(), createBlock("img", {
                          key: 0,
                          src: city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url,
                          alt: "",
                          class: "size-[64px] rounded-full"
                        }, null, 8, ["src"])) : createCommentVNode("", true)
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
                      city && city.attributes && city.attributes.prayer_time_country && city.attributes.prayer_time_country.data && city.attributes.prayer_time_country.data.attributes && city.attributes.prayer_time_country.data.attributes.flag && city.attributes.prayer_time_country.data.attributes.flag.data && city.attributes.prayer_time_country.data.attributes.flag.data.attributes ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: city.attributes.prayer_time_country.data.attributes.flag.data.attributes.url,
                        alt: "",
                        class: "size-[64px] rounded-full"
                      }, null, 8, ["src"])) : createCommentVNode("", true)
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
      if (unref(capitals) && unref(capitals).data.length > 14) {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllCapitals.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_4 = _sfc_main;

export { __nuxt_component_4 as _ };
//# sourceMappingURL=AllCapitals-Bz09E0Fg.mjs.map
