import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { _ as _export_sfc, u as useI18n, d as useFetch, e as __nuxt_component_1$4, a as __nuxt_component_0$2$1 } from './server.mjs';
import { useSSRContext, mergeProps, withAsyncContext, ref, computed, unref, withCtx, createVNode, createTextVNode, toDisplayString, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _imports_2, a as _imports_3 } from './share-Dwbb_BxC.mjs';
import { _ as __nuxt_component_0$2, a as __nuxt_component_3, b as __nuxt_component_5, c as __nuxt_component_6 } from './NativePanners-BdrjfFjV.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-white rounded-xl border border-gray-300 grid grid-cols-5 gap-3 p-3" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "cent"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "image", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "image")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<div class="flex items-center col-span-4"><div class="grid gap-1.5 w-full">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "text-zinc-800 font-semibold max-md:text-[13px]"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "title", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "title")
        ];
      }
    }),
    _: 3
  }, _parent));
  ssrRenderSlot(_ctx.$slots, "share", {}, null, _push, _parent);
  _push(`</div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/trackAuthor.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);
const _imports_0 = "" + publicAssetsURL("svgs/headphone.svg");
const _sfc_main$1 = {
  __name: "QuranMainSection",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { locale } = useI18n();
    const dashboard = "https://dev.apix.prayer-now.com/api/quran/";
    const { data: playlist } = ([__temp, __restore] = withAsyncContext(() => useFetch(dashboard + "get-playlists?locale=" + locale.value, "$7cQwosm5NZ")), __temp = await __temp, __restore(), __temp);
    const playlistData = ref(playlist.value.result.data);
    console.log(playlistData.value);
    const items = ref([
      { id: 1, name: "\u0645\u0627\u0647\u0631 \u0628\u0646 \u062D\u0645\u062F \u0627\u0644\u0645\u0639\u064A\u0642\u0644\u064A" },
      { id: 2, name: "\u0639\u0628\u062F \u0627\u0644\u0644\u0647 \u0627\u0644\u062E\u0644\u064A\u0641\u064A" },
      { id: 14, name: "\u0645\u062D\u0645\u062F \u0646\u0648\u0631 \u0627\u0644\u0643\u062A\u0628\u064A" },
      { id: 3, name: "\u0639\u0644\u064A \u0628\u0646 \u0639\u0628\u062F \u0627\u0644\u0644\u0647 \u062C\u0627\u0628\u0631" },
      { id: 4, name: "\u062E\u0627\u0644\u062F \u0628\u0646 \u0639\u0644\u064A \u0627\u0644\u063A\u0627\u0645\u062F\u064A" },
      { id: 5, name: "\u0639\u0644\u064A \u0628\u0646 \u0639\u0628\u062F \u0627\u0644\u0631\u062D\u0645\u0646 \u0627\u0644\u062D\u0630\u064A\u0641\u064A" },
      { id: 6, name: "\u064A\u0627\u0633\u0631 \u0628\u0646 \u0631\u0627\u0634\u062F \u0627\u0644\u062F\u0648\u0633\u0631\u064A" },
      { id: 7, name: "\u0633\u0639\u0648\u062F \u0628\u0646 \u0625\u0628\u0631\u0627\u0647\u064A\u0645 \u0622\u0644 \u0634\u0631\u064A\u0645" },
      { id: 11, name: "\u0641\u064A\u0635\u0644 \u0628\u0646 \u062C\u0645\u064A\u0644 \u063A\u0632\u0627\u0648\u064A" },
      { id: 13, name: "\u0628\u0646\u062F\u0631 \u0628\u0646 \u0639\u0628\u062F \u0627\u0644\u0639\u0632\u064A\u0632 \u0628\u0644\u064A\u0644\u0629" },
      { id: 8, name: "\u0639\u0628\u062F \u0627\u0644\u0644\u0647 \u0628\u0646 \u0639\u0628\u062F \u0627\u0644\u063A\u0646\u064A \u062E\u064A\u0627\u0637" },
      { id: 9, name: "\u0635\u0627\u0644\u062D \u0628\u0646 \u0639\u0628\u062F \u0627\u0644\u0644\u0647 \u0628\u0646 \u062D\u0645\u064A\u062F" },
      { id: 10, name: "\u0623\u062D\u0645\u062F \u0628\u0646 \u0639\u0628\u062F \u0627\u0644\u0644\u0647 \u0628\u0646 \u062D\u0645\u064A\u062F" }
    ]);
    const arabicAlphabet = "\u0627\u0628\u062A\u062B\u062C\u062D\u062E\u062F\u0630\u0631\u0632\u0633\u0634\u0635\u0636\u0637\u0638\u0639\u063A\u0641\u0642\u0643\u0644\u0645\u0646\u0647\u0648\u064A".split("");
    const sortedData = ref([...items.value]);
    const selectedChar = ref("");
    computed(() => {
      if (!selectedChar.value)
        return sortedData.value;
      const processedChar = selectedChar.value.normalize("NFD").replace(/[\u064b-\u0652]/g, "");
      return sortedData.value.filter((item) => {
        const normalizedItemName = item.name.normalize("NFD").replace(/[\u064b-\u0652]/g, "");
        return normalizedItemName.startsWith(processedChar) || processedChar === "\u0627" && (normalizedItemName.startsWith("\u0627") || normalizedItemName.startsWith("\u0623"));
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_trackAuthor = __nuxt_component_0$1;
      const _component_Image = __nuxt_component_1$4;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start" }, _attrs))}><div class="flex justify-between items-center gap-4"><h2 class="shrink-0 h__primary leading-10"> \u0643\u0644 \u0627\u0644\u0634\u064A\u0648\u062E</h2><input type="search" name="" class="md:min-w-72 max-xs:w-40 focus:border-primary outline-none border-2" placeholder="\u0627\u0628\u062D\u062B \u0639\u0646 \u0627\u0644\u0642\u0631\u0627\u0621\u060C  ..."></div><div class="alphabitic__grid"><button class="col-span-3 bg-[#FCD465] text-primary border rounded cent p-1 hover:text-white hover:bg-primary">\u0643\u0644 \u0627\u0644\u0634\u064A\u0648\u062E</button><!--[-->`);
      ssrRenderList(unref(arabicAlphabet), (char) => {
        _push(`<button class="${ssrRenderClass([selectedChar.value === char ? "bg-primary text-white" : "", "border rounded-md cent p-1 hover:text-white hover:bg-primary"])}">${ssrInterpolate(char)}</button>`);
      });
      _push(`<!--]--></div><div class="h-[0px] -mt-4 border border-gray-300"></div><div class="grid gap-6 -mt-8"><div class="">`);
      if (selectedChar.value) {
        _push(`<div class="w-9 h-9 border rounded-md cent text-white bg-primary"><span>${ssrInterpolate(selectedChar.value || "\u0643\u0644 \u0627\u0644\u0634\u064A\u0648\u062E")}</span></div>`);
      } else {
        _push(`<div class="border rounded-md w-fit h-9 px-3 text-white bg-primary flex items-center"><span>\u0643\u0644 \u0627\u0644\u0634\u064A\u0648\u062E </span></div>`);
      }
      _push(`</div><div>`);
      if (sortedData.value.length > 0) {
        _push(`<div class="tracks__grid"><!--[-->`);
        ssrRenderList(sortedData.value, (item) => {
          _push(ssrRenderComponent(_component_trackAuthor, {
            key: item.id
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
                _push2(`${ssrInterpolate(item.name)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(item.name), 1)
                ];
              }
            }),
            share: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex justify-between gap-4 w-full text-neutral-500"${_scopeId}><div class="flex justify-center items-center gap-2"${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt=""${_scopeId}><div class="flex gap-1 items-center"${_scopeId}><span${_scopeId}>${ssrInterpolate(200)}</span><span${_scopeId}>\u062A\u0634\u063A\u064A\u0644</span></div></div><div class="flex justify-center items-center gap-3"${_scopeId}><button${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="w-4 h-4"${_scopeId}></button><button${_scopeId}><img${ssrRenderAttr("src", _imports_3)} alt="" class="w-4 h-4"${_scopeId}></button></div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex justify-between gap-4 w-full text-neutral-500" }, [
                    createVNode("div", { class: "flex justify-center items-center gap-2" }, [
                      createVNode("img", {
                        src: _imports_0,
                        alt: ""
                      }),
                      createVNode("div", { class: "flex gap-1 items-center" }, [
                        createVNode("span", null, toDisplayString(200)),
                        createVNode("span", null, "\u062A\u0634\u063A\u064A\u0644")
                      ])
                    ]),
                    createVNode("div", { class: "flex justify-center items-center gap-3" }, [
                      createVNode("button", null, [
                        createVNode("img", {
                          src: _imports_2,
                          alt: "",
                          class: "w-4 h-4"
                        })
                      ]),
                      createVNode("button", {
                        onClick: _ctx.toggleModal
                      }, [
                        createVNode("img", {
                          src: _imports_3,
                          alt: "",
                          class: "w-4 h-4"
                        })
                      ], 8, ["onClick"])
                    ])
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<div class="text-primary font-semibold text-center"> \u0644\u0627 \u064A\u0648\u062C\u062F \u0646\u062A\u0627\u064A\u0654\u062C </div>`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuranMainSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$1;
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_QuranMainSection = __nuxt_component_0;
  const _component_Add1 = __nuxt_component_0$2;
  const _component_GoogleAds = __nuxt_component_3;
  const _component_PrayerFeature = __nuxt_component_5;
  const _component_NativePanners = __nuxt_component_6;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid gap-6" }, _attrs))}><div><img class="w-full h-[244px] rounded-xl border border-gray-300" src="https://via.placeholder.com/909x244"></div>`);
  _push(ssrRenderComponent(_component_QuranMainSection, null, null, _parent));
  _push(ssrRenderComponent(_component_Add1, null, null, _parent));
  _push(ssrRenderComponent(_component_GoogleAds, null, null, _parent));
  _push(ssrRenderComponent(_component_PrayerFeature, null, null, _parent));
  _push(ssrRenderComponent(_component_NativePanners, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/app/quran/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-YIoa4N4L.mjs.map
