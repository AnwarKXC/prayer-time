import { j as fetchDefaults, _ as _export_sfc, g as asyncDataDefaults, k as useRequestFetch, u as useI18n, h as useNuxtApp, c as createError, a as __nuxt_component_0$2, e as __nuxt_component_2$2, b as __nuxt_component_0$3 } from '../server.mjs';
import { computed, toValue, reactive, useSSRContext, ref, shallowRef, toRef, getCurrentInstance, onServerPrefetch, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { z as hash } from '../../nitro/node-server.mjs';

const _sfc_main$6 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
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
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
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
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "pagenation" }, _attrs))}><ul class="flex items-center max-sm:justify-center gap-2 md:h-8 h-[30px] text-sm"><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Previous</span><svg class="md:w-2.5 w-2 md:h-2.5 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg></a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">1</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">2</a></li><li><a href="#" aria-current="page" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">3</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">4</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">5</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-e-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Next</span><svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg></a></li></ul></nav>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$3]]);
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h, _i;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => null;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const hasCachedData = () => ![null, void 0].includes(options.getCachedData(key));
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = null;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref((_i = options.getCachedData(key)) != null ? _i : options.default()),
      pending: ref(!hasCachedData()),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle")
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if ((opts._initial || nuxtApp.isHydrating && opts._initial !== false) && hasCachedData()) {
      return Promise.resolve(options.getCachedData(key));
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then((_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = null;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => {
    let r = request;
    if (typeof r === "function") {
      r = r();
    }
    return toValue(r);
  });
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller);
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    if (timeoutLength) {
      setTimeout(() => controller.abort(), timeoutLength);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
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
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
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
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Image = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10" }, _attrs))}><div class="cent cent__col"><h2 class="h__primary">\u0645\u0632\u0627\u064A\u0627 \u0628\u0631\u0627\u064A\u0631 \u0646\u0627\u0648.</h2><p class="w-[236px] h-6 text-zinc-500 text-xs font-normal leading-[35px]"> \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062A\u0646\u0628\u064A\u0647 \u0645\u0648\u0627\u0642\u064A\u062A \u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0645\u062C\u0627\u0646\u064B\u0627.</p></div><div class="grid md:grid-cols-3 gap-4 gap-y-10"><div class="cent cent__col gap-3">`);
  _push(ssrRenderComponent(_component_Image, {
    isrc: "/svgs/prayer-ad.svg",
    ialt: "logo",
    iclass: ""
  }, null, _parent));
  _push(`<div class="text-center text-indigo-900 text-[25px] font-normal leading-[33px]"> \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0635\u0644\u0627\u0629</div><div class="md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5"> \u064A\u0647\u062F\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0642 \u0625\u0644\u0649 \u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0637\u0644\u0627\u0628 \u0639\u0644\u0649 \u062D\u0641\u0638 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645. \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0630\u064A\u0646 \u064A\u0631\u063A\u0628\u0648\u0646 \u0641\u064A \u062D\u0641\u0638 \u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u0642\u0631\u0622\u0646 \u0623\u0648 \u0643\u0644\u0647.</div></div><div class="cent cent__col gap-3">`);
  _push(ssrRenderComponent(_component_Image, {
    isrc: "/svgs/quranad.svg",
    ialt: "logo",
    iclass: ""
  }, null, _parent));
  _push(`<div class="text-center text-indigo-900 text-[25px] font-normal leading-[33px]"> \u0642\u0631\u0623\u0629 \u0627\u0644\u0642\u0631\u0622\u0646</div><div class="md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5"> \u064A\u0647\u062F\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0642 \u0625\u0644\u0649 \u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0637\u0644\u0627\u0628 \u0639\u0644\u0649 \u062D\u0641\u0638 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645. \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0630\u064A\u0646 \u064A\u0631\u063A\u0628\u0648\u0646 \u0641\u064A \u062D\u0641\u0638 \u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u0642\u0631\u0622\u0646 \u0623\u0648 \u0643\u0644\u0647.</div></div><div class="cent cent__col gap-3">`);
  _push(ssrRenderComponent(_component_Image, {
    isrc: "/svgs/prayer-ad.svg",
    ialt: "logo",
    iclass: ""
  }, null, _parent));
  _push(`<div class="text-center text-indigo-900 text-[25px] font-normal leading-[33px]"> \u0623\u0648\u0642\u0627\u062A \u0627\u0644\u0635\u0644\u0627\u0629</div><div class="md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5"> \u064A\u0647\u062F\u0641 \u0647\u0630\u0627 \u0627\u0644\u0645\u0633\u0627\u0642 \u0625\u0644\u0649 \u0645\u0633\u0627\u0639\u062F\u0629 \u0627\u0644\u0637\u0644\u0627\u0628 \u0639\u0644\u0649 \u062D\u0641\u0638 \u0627\u0644\u0642\u0631\u0622\u0646 \u0627\u0644\u0643\u0631\u064A\u0645. \u0627\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0630\u064A\u0646 \u064A\u0631\u063A\u0628\u0648\u0646 \u0641\u064A \u062D\u0641\u0638 \u062C\u0632\u0621 \u0645\u0646 \u0627\u0644\u0642\u0631\u0622\u0646 \u0623\u0648 \u0643\u0644\u0647.</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrayerFeature.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Image = __nuxt_component_0$3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[10px] border border-gray-200 px-4 py-6" }, _attrs))}><div class="grid md:grid-cols-2 gap-4"><div class="cent"><div class="grid gap-2 max-md:justify-items-center"><p class="max-md:text-center text-zinc-700 text-[15px] font-normal"> \u0627\u062D\u0635\u0644 \u0639\u0644\u0649 \u062A\u0646\u0628\u064A\u0647 \u0645\u0648\u0627\u0642\u064A\u062A \u0627\u0644\u0635\u0644\u0627\u0629 \u0639\u0644\u0649 \u0647\u0627\u062A\u0641\u0643 \u0645\u062C\u0627\u0646\u064B\u0627.</p><h2 class="h__primary max-md:text-center">\u0641\u0627\u062A\u062A\u0643 \u0635\u0644\u0627\u062A\u0643 \u0645\u0631\u0629 \u0623\u062E\u0631\u0649\u061F \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0633\u0627\u0639\u062F\u0643 \u062A\u0637\u0628\u064A\u0642 \u0628\u0631\u0627\u064A\u0631 \u0646\u0627\u0648.</h2><div class="flex gap-5 items-center mt-4">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://play.google.com/store/apps",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Image, {
          isrc: "/svgs/google-store.svg",
          ialt: "logo",
          iclass: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Image, {
            isrc: "/svgs/google-store.svg",
            ialt: "logo",
            iclass: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "https://apps.apple.com/ug/developer/apple/id284417353?mt=12",
    target: "_blank"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Image, {
          isrc: "/svgs/app-store.svg",
          ialt: "logo",
          iclass: ""
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Image, {
            isrc: "/svgs/app-store.svg",
            ialt: "logo",
            iclass: ""
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div><div>`);
  _push(ssrRenderComponent(_component_Image, {
    isrc: "/banner-ads-bg-bottom.png",
    ialt: "logo",
    iclass: ""
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Add4.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a, __nuxt_component_3 as b, __nuxt_component_5 as c, __nuxt_component_6 as d, __nuxt_component_2$1 as e, useFetch as u };
//# sourceMappingURL=Add4-Ccn-Ej9v.mjs.map
