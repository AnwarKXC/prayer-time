import { _ as __nuxt_component_0, a as __nuxt_component_3, b as __nuxt_component_5, c as __nuxt_component_6 } from './NativePanners-BdrjfFjV.mjs';
import { _ as _export_sfc, g as __nuxt_component_1 } from './server.mjs';
import { _ as __nuxt_component_2 } from './AllCountries-C6Gegf6s.mjs';
import { _ as __nuxt_component_4 } from './AllCapitals-Oq8ZzxmK.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Add1 = __nuxt_component_0;
  const _component_Search = __nuxt_component_1;
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
//# sourceMappingURL=index-D_U8EdTD.mjs.map
