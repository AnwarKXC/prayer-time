import { _ as _export_sfc, u as useI18n, e as useFetch, f as __nuxt_component_2$2, b as __nuxt_component_0$3, a as __nuxt_component_0$2 } from '../server.mjs';
import { useSSRContext, mergeProps, withAsyncContext, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';

const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Button = __nuxt_component_2$2;
  const _component_Image = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[244px] bg-white rounded-xl border border-gray-200 main__banner" }, _attrs))}><div class="cent h-full"><div class="relative md:grid grid-cols-4 p-4 gap-1"><div class="md:col-span-3 flex items-center size-full"><div class="grid gap-4"><div class="text-zinc-700 md:text-[15px] text-[13px] font-normal font-[&#39;Almarai&#39;]"> \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062A\u0646\u0628\u064A\u0647 \u0645\u0648\u0627\u0642\u064A\u062A \u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0645\u062C\u0627\u0646\u064B\u0627. </div><h2 class="h__primary max-w-[600px] max-md:max-w-[500px] leading-10">${ssrInterpolate(_ctx.$t(
    "mobilebanner.heading"
  ))}</h2><div class="">`);
  _push(ssrRenderComponent(_component_Button, {
    buttonText: "header.headerbtn",
    buttonClass: "bg-primary text-white btn__primary  "
  }, null, _parent));
  _push(`</div></div></div><div class="flex md:justify-center justify-end items-center max-md:absolute rtl:left-0 ltr:right-0 bottom-0 max-md:size-[120px] max-xs:size-[90px] size-full ltr:scale-x-[-1] transform p-1 md:w-full">`);
  _push(ssrRenderComponent(_component_Image, {
    isrc: "/banner-ads-bg-top.png",
    ialt: "logo",
    iclass: ""
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Add1.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "size-full text-[#333333] rounded-2xl border border-gray-200 p-4 px-4 grid grid-rows-3 justify-center items-center gap-1 hover:bg-primary duration-300 hover:text-white hover:drop-shadow" }, _attrs))}><div class="row-span-2">`);
  ssrRenderSlot(_ctx.$slots, "image", {}, null, _push, _parent);
  _push(`</div><p class="text-center">`);
  ssrRenderSlot(_ctx.$slots, "text", { class: "text-center" }, null, _push, _parent);
  _push(`</p></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CountryCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "pagenation" }, _attrs))}><ul class="flex items-center max-sm:justify-center gap-2 md:h-8 h-[30px] text-sm"><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Previous</span><svg class="md:w-2.5 w-2 md:h-2.5 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg></a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">1</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">2</a></li><li><a href="#" aria-current="page" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">3</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">4</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">5</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-e-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Next</span><svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg></a></li></ul></nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {
  __name: "AllCountries",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const getAllCountrys = "/api/prayer-time-countries/?locale[0]=";
    const getAllRegions = "/api/prayer-time-regions?locale[0]=";
    const domain = "https://cms.prayer-now.com";
    const { data: regions } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + getAllRegions + locale.value, "$bEX2bdNytm")), __temp = await __temp, __restore(), __temp);
    const { data: countries } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + getAllCountrys + locale.value, "$gB3TferGDD")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_CountryCard = __nuxt_component_1;
      const _component_Pagination = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 flex justify-between flex-col gap-4 py-6" }, _attrs))}><div class="grid gap-4"><div class="flex justify-between items-center gap-4 flex-wrap"><h2 class="h__primary">${ssrInterpolate(_ctx.$t("allcountries.heading"))}</h2><div class="flex md:gap-[21px] gap-4 text-[#828282] flex-wrap"><!--[-->`);
      ssrRenderList(unref(regions).data, (res) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "",
          class: "text-primary region_active border-b-2",
          key: res.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(res.attributes.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(res.attributes.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><div class="country__grid"><!--[-->`);
      ssrRenderList(unref(countries).data, (res) => {
        var _a;
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/" + res.attributes.api_country_code + "/" + res.id + "/" + ((_a = res.attributes.default_prayer_time_city.data) == null ? void 0 : _a.attributes.api_city_code),
          key: res.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_CountryCard, null, {
                image: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<img${ssrRenderAttr("src", unref(domain) + res.attributes.flag.data.attributes.url)} alt="" class="size-[64px] aspect-square rounded-full"${_scopeId2}>`);
                  } else {
                    return [
                      createVNode("img", {
                        src: unref(domain) + res.attributes.flag.data.attributes.url,
                        alt: "",
                        class: "size-[64px] aspect-square rounded-full"
                      }, null, 8, ["src"])
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
                    createVNode("img", {
                      src: unref(domain) + res.attributes.flag.data.attributes.url,
                      alt: "",
                      class: "size-[64px] aspect-square rounded-full"
                    }, null, 8, ["src"])
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
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_Pagination, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AllCountries.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = _sfc_main$3;
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex gap-4 justify-center flex-wrap" }, _attrs))}><!--[-->`);
  ssrRenderList(2, (index) => {
    _push(`<img class="w-[284px] h-[236px] max-lg:hidden" src="https://via.placeholder.com/284x236">`);
  });
  _push(`<!--]--><img class="w-[284px] h-[236px] lg:hidden" src="https://via.placeholder.com/284x236"><img class="w-[284px] h-[236px] max-sm:hidden" src="https://via.placeholder.com/284x236"></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GoogleAds.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "PrayerFeature",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const domain = "https://cms.prayer-now.com";
    const landing = "/api/landing-page?locale[0]=";
    const { data: landingData } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + landing + locale.value, "$kVFq4nY7UB")), __temp = await __temp, __restore(), __temp);
    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    const activeBanners = landingData.value.data.attributes.features.filter((item) => item.active === true);
    shuffle(activeBanners);
    const randomThreeItems = activeBanners.slice(0, 3);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start" }, _attrs))}><div class="cent cent__col"><h2 class="h__primary">\u0645\u0632\u0627\u064A\u0627 \u0628\u0631\u0627\u064A\u0631 \u0646\u0627\u0648.</h2><p class="w-[236px] h-6 text-zinc-500 text-xs font-normal leading-[35px]"> \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062A\u0646\u0628\u064A\u0647 \u0645\u0648\u0627\u0642\u064A\u062A \u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0645\u062C\u0627\u0646\u064B\u0627.</p></div><div class="grid md:grid-cols-3 gap-4 gap-y-10"><!--[-->`);
      ssrRenderList(unref(randomThreeItems), (item, index) => {
        _push(`<div class="grid grid-rows-3 justify-center items-center"><img${ssrRenderAttr("src", unref(domain) + item.icon.data.attributes.url)}${ssrRenderAttr("alt", item.icon.data.attributes.name)} class="rounded-sm max-w-[60px] max-h-[60px] justify-self-center"><div class="text-center text-indigo-900 text-[25px] font-normal">${ssrInterpolate(item.title)}</div><div class="md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5">${ssrInterpolate(item.description)}</div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrayerFeature.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = _sfc_main$1;
const _sfc_main = {
  __name: "NativePanners",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const domain = "https://cms.prayer-now.com";
    const landing = "/api/landing-page?locale[0]=";
    const { data: landingData } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + landing + locale.value, "$8vRqDRoJpl")), __temp = await __temp, __restore(), __temp);
    const links = landingData.value.data.attributes.branding;
    const activeBanners = landingData.value.data.attributes.banners_native.filter((item) => item.active === true);
    const randomIndex = Math.floor(Math.random() * activeBanners.length);
    const activeOne = activeBanners[randomIndex];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Image = __nuxt_component_0$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[10px] border border-gray-200 px-4 py-6" }, _attrs))}><div class="grid md:grid-cols-2 gap-2"><div class="flex items-center"><div class="grid gap-2 max-md:justify-items-center"><p class="max-md:text-center text-zinc-700 text-[15px] font-normal">${ssrInterpolate(unref(activeOne).sub_title)}</p><h2 class="h__primary max-md:text-center">${ssrInterpolate(unref(activeOne).title)}</h2><div class="w-full flex gap-3 items-center flex-wrap justify-center mt-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(links).link_download_google_play,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Image, {
              isrc: "/svgs/google-store.svg",
              ialt: "google play",
              iclass: " max-w-[140px] min-h-[41px] duration-300 hover:scale-105"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Image, {
                isrc: "/svgs/google-store.svg",
                ialt: "google play",
                iclass: " max-w-[140px] min-h-[41px] duration-300 hover:scale-105"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(links).link_download_apple,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Image, {
              isrc: "/svgs/app-store.svg",
              ialt: "app store",
              iclass: " max-w-[140px] min-h-[41px] duration-300 hover:scale-105"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Image, {
                isrc: "/svgs/app-store.svg",
                ialt: "app store",
                iclass: " max-w-[140px] min-h-[41px] duration-300 hover:scale-105"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: unref(links).link_download_app_gallery,
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Image, {
              isrc: "/huawei-appgalley.jpg",
              ialt: "app store",
              iclass: " max-w-[140px] min-h-[41px] duration-300 hover:scale-105"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Image, {
                isrc: "/huawei-appgalley.jpg",
                ialt: "app store",
                iclass: " max-w-[140px] min-h-[41px] duration-300 hover:scale-105"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="cent"><img${ssrRenderAttr("src", unref(domain) + unref(activeOne).image.data.attributes.url)} alt="" class="rounded"></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NativePanners.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main;

export { __nuxt_component_0 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_5 as c, __nuxt_component_6 as d, __nuxt_component_2$1 as e };
//# sourceMappingURL=NativePanners-MRM9seZB.mjs.map
