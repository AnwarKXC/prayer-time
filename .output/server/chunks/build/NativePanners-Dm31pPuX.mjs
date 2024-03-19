import { _ as _export_sfc, u as useI18n, c as useFetch, a as __nuxt_component_0$2, d as __nuxt_component_1$4 } from './server.mjs';
import { useSSRContext, withAsyncContext, unref, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$3 = {
  __name: "Add1",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const domain = "https://cms.prayer-now.com";
    const landing = "/api/landing-page?locale[0]=";
    const { data: landingData } = ([__temp, __restore] = withAsyncContext(() => useFetch(domain + landing + locale.value, "$KLLiPgUiit")), __temp = await __temp, __restore(), __temp);
    const links = landingData.value.data.attributes.branding;
    const activeBanners = landingData.value.data.attributes.banners_native.filter((item) => item.active === true && item.location === "top");
    const randomIndex = Math.floor(Math.random() * activeBanners.length);
    const activeOne = activeBanners[randomIndex];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      const _component_NuxtLink = __nuxt_component_0$2;
      if (unref(activeOne)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-[244px] bg-white rounded-xl border border-gray-200 main__banner" }, _attrs))}><div class="cent h-full w-full"><div class="relative md:grid grid-cols-4 p-4 gap-1 w-full"><div class="md:col-span-3 flex items-center size-full"><div class="grid gap-4">`);
        if (unref(activeOne)) {
          _push(`<div class="text-zinc-700 md:text-[15px] text-[13px] font-normal font-[&#39;Almarai&#39;]">${ssrInterpolate((_a = unref(activeOne)) == null ? void 0 : _a.sub_title)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<h2 class="h__primary max-w-[600px] max-md:max-w-[500px] leading-10">${ssrInterpolate((_b = unref(activeOne)) == null ? void 0 : _b.title)}</h2><div class="flex">`);
        if (unref(links) && unref(links).link_download) {
          _push(ssrRenderComponent(_component_NuxtLink, {
            to: unref(links).link_download,
            target: "_blank",
            class: "bg-primary text-white btn__primary"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`${ssrInterpolate((_a2 = unref(links)) == null ? void 0 : _a2.title_download)}`);
              } else {
                return [
                  createTextVNode(toDisplayString((_b2 = unref(links)) == null ? void 0 : _b2.title_download), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="flex md:justify-center justify-end items-center max-md:absolute rtl:left-0 ltr:right-0 bottom-0 max-md:size-[120px] max-xs:size-[90px] size-full ltr:scale-x-[-1] transform max-md:mx-4 md:w-full">`);
        if (unref(activeOne) && unref(activeOne).image && unref(activeOne).image.data && unref(activeOne).image.data.attributes && unref(activeOne).image.data.attributes.url) {
          _push(`<img${ssrRenderAttr("src", unref(activeOne).image.data.attributes.url)} alt="" class="rounded w-full">`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Add1.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$3;
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
    const activeBanners = landingData.value.data.attributes.features.filter((item) => item.active === true);
    const randomThreeItems = activeBanners;
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(randomThreeItems) && unref(randomThreeItems).length > 0) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start" }, _attrs))}><div class="cent cent__col"><h2 class="h__primary">\u0645\u0632\u0627\u064A\u0627 \u0628\u0631\u0627\u064A\u0631 \u0646\u0627\u0648.</h2><p class="w-[236px] h-6 text-zinc-500 text-xs font-normal leading-[35px]"> \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062A\u0646\u0628\u064A\u0647 \u0645\u0648\u0627\u0642\u064A\u062A \u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0645\u062C\u0627\u0646\u064B\u0627.</p></div><div class="flex justify-evenly gap-8 flex-wrap gap-y-12"><!--[-->`);
        ssrRenderList(unref(randomThreeItems), (item, index) => {
          _push(`<div class="shrink-0 grid grid-rows-3 justify-center items-center">`);
          if (item && item.icon) {
            _push(`<img${ssrRenderAttr("src", item.icon.data.attributes.url)}${ssrRenderAttr("alt", item.icon.data.attributes.name)} class="rounded-sm max-w-[60px] max-h-[60px] justify-self-center">`);
          } else {
            _push(`<!---->`);
          }
          if (item) {
            _push(`<div class="text-center text-indigo-900 text-[25px] font-normal">${ssrInterpolate(item.title)}</div>`);
          } else {
            _push(`<!---->`);
          }
          if (item) {
            _push(`<div class="md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5">${ssrInterpolate(item.description)}</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
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
    const activeBanners = landingData.value.data.attributes.banners_native.filter((item) => item.active === true && item.location === "bottom");
    const randomIndex = Math.floor(Math.random() * activeBanners.length);
    const activeOne = activeBanners[randomIndex];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$2;
      const _component_Image = __nuxt_component_1$4;
      if (unref(activeOne) && unref(activeBanners).length > 0 && unref(activeOne).sub_title && unref(activeOne).title && unref(activeOne).image.data.attributes.url) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6" }, _attrs))}><div class="grid md:grid-cols-2 md:gap-2 gap-8"><div class="w-full flex items-center max-md:justify-center"><div class="grid gap-2 max-md:justify-items-center"><p class="max-md:text-center text-zinc-700 text-[15px] font-normal">${ssrInterpolate(unref(activeOne).sub_title)}</p><h2 class="h__primary max-md:text-center">${ssrInterpolate(unref(activeOne).title)}</h2><div class="w-full flex gap-3 items-center flex-wrap justify-center mt-4">`);
        if (unref(links).link_download_google_play) {
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
        } else {
          _push(`<!---->`);
        }
        if (unref(links).link_download_apple) {
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
        } else {
          _push(`<!---->`);
        }
        if (unref(links).link_download_app_gallery) {
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
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="cent"><img${ssrRenderAttr("src", unref(activeOne).image.data.attributes.url)} alt="" class="rounded"></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
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

export { __nuxt_component_0 as _, __nuxt_component_3 as a, __nuxt_component_5 as b, __nuxt_component_6 as c };
//# sourceMappingURL=NativePanners-Dm31pPuX.mjs.map
