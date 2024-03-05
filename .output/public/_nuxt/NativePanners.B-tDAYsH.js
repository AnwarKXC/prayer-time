import{_ as B,o as r,c,a as t,t as h,b as d,H as M,y as F,z as N,J as V,A as z,C as w,G as $,F as k,s as j,v as A,w as b,d as D,E as i,e as I}from"./entry.DlsYjrRN.js";const P={},T={class:"min-h-[244px] bg-white rounded-xl border border-gray-200 main__banner"},q={class:"cent h-full"},E={class:"relative md:grid grid-cols-4 p-4 gap-1"},L={class:"md:col-span-3 flex items-center size-full"},R={class:"grid gap-4"},S=t("div",{class:"text-zinc-700 md:text-[15px] text-[13px] font-normal font-['Almarai']"}," احصل على تنبيه مواقيت الصلاة على هاتفك مجانًا. ",-1),G={class:"h__primary max-w-[600px] max-md:max-w-[500px] leading-10"},J={class:""},H={class:"flex md:justify-center justify-end items-center max-md:absolute rtl:left-0 ltr:right-0 bottom-0 max-md:size-[120px] max-xs:size-[90px] size-full ltr:scale-x-[-1] transform p-1 md:w-full"};function O(_,e){const s=M,p=F;return r(),c("div",T,[t("div",q,[t("div",E,[t("div",L,[t("div",R,[S,t("h2",G,h(_.$t("mobilebanner.heading")),1),t("div",J,[d(s,{buttonText:"header.headerbtn",buttonClass:"bg-primary text-white btn__primary  "})])])]),t("div",H,[d(p,{isrc:"/banner-ads-bg-top.png",ialt:"logo",iclass:""})])])])])}const Pt=B(P,[["render",O]]),U={},X={class:"size-full text-[#333333] rounded-2xl border border-gray-200 p-4 px-4 grid grid-rows-3 justify-center items-center gap-1 hover:bg-primary duration-300 hover:text-white hover:drop-shadow"},Y={class:"row-span-2"},K={class:"text-center"};function Q(_,e){return r(),c("div",X,[t("div",Y,[N(_.$slots,"image")]),t("p",K,[N(_.$slots,"text",{class:"text-center"})])])}const W=B(U,[["render",Q]]),Z={},tt={"aria-label":"pagenation"},et=V('<ul class="flex items-center max-sm:justify-center gap-2 md:h-8 h-[30px] text-sm"><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-s-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Previous</span><svg class="md:w-2.5 w-2 md:h-2.5 h-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"></path></svg></a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">1</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">2</a></li><li><a href="#" aria-current="page" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">3</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">4</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 hover:bg-primary duration-300 hover:text-white rounded-md font-semibold pt-1">5</a></li><li><a href="#" class="flex items-center justify-center md:px-3 px-2.5 md:h-8 h-[30px] leading-tight text-primary bg-white border border-gray-300 rounded-e-lg hover:bg-primary duration-300 hover:text-white"><span class="sr-only">Next</span><svg class="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg></a></li></ul>',1),st=[et];function at(_,e){return r(),c("nav",tt,st)}const rt=B(Z,[["render",at]]),nt={class:"bg-white rounded-xl border border-gray-200 px-4 flex justify-between flex-col gap-4 py-6"},ot={class:"grid gap-4"},it={class:"flex justify-between items-center gap-4 flex-wrap"},ct={class:"h__primary"},lt={class:"flex md:gap-[21px] gap-4 text-[#828282] flex-wrap"},dt={class:"country__grid"},_t=["src"],pt={__name:"AllCountries",async setup(_){let e,s;const{locale:p}=z(),x="/api/prayer-time-countries/?locale[0]=",v="/api/prayer-time-regions?locale[0]=",m="https://cms.prayer-now.com",{data:u}=([e,s]=w(()=>$(m+v+p.value,"$bEX2bdNytm")),e=await e,s(),e),{data:g}=([e,s]=w(()=>$(m+x+p.value,"$gB3TferGDD")),e=await e,s(),e);return(y,a)=>{const o=I,l=W,f=rt;return r(),c("div",nt,[t("div",ot,[t("div",it,[t("h2",ct,h(y.$t("allcountries.heading")),1),t("div",lt,[(r(!0),c(k,null,j(i(u).data,n=>(r(),A(o,{to:"",class:"text-primary region_active border-b-2",key:n.id},{default:b(()=>[D(h(n.attributes.title),1)]),_:2},1024))),128))])]),t("div",dt,[(r(!0),c(k,null,j(i(g).data,n=>{var C;return r(),A(o,{to:"/"+n.attributes.api_country_code+"/"+n.id+"/"+((C=n.attributes.default_prayer_time_city.data)==null?void 0:C.attributes.api_city_code),key:n.id},{default:b(()=>[d(l,null,{image:b(()=>[t("img",{src:i(m)+n.attributes.flag.data.attributes.url,alt:"",class:"size-[64px] aspect-square rounded-full"},null,8,_t)]),text:b(()=>[D(h(n.attributes.name),1)]),_:2},1024)]),_:2},1032,["to"])}),128))])]),d(f)])}}},Tt=pt,mt={},ht={class:"flex gap-4 justify-center flex-wrap"},xt=t("img",{class:"w-[284px] h-[236px] lg:hidden",src:"https://via.placeholder.com/284x236"},null,-1),ut=t("img",{class:"w-[284px] h-[236px] max-sm:hidden",src:"https://via.placeholder.com/284x236"},null,-1);function gt(_,e){return r(),c("div",ht,[(r(),c(k,null,j(2,s=>t("img",{class:"w-[284px] h-[236px] max-lg:hidden",src:"https://via.placeholder.com/284x236",key:s})),64)),xt,ut])}const qt=B(mt,[["render",gt]]),ft={class:"bg-white rounded-xl border border-gray-200 px-4 py-6 grid gap-10 content-start"},bt=t("div",{class:"cent cent__col"},[t("h2",{class:"h__primary"},"مزايا براير ناو."),t("p",{class:"w-[236px] h-6 text-zinc-500 text-xs font-normal leading-[35px]"}," احصل على تنبيه مواقيت الصلاة على هاتفك مجانًا.")],-1),vt={class:"grid md:grid-cols-3 gap-4 gap-y-10"},yt=["src","alt"],wt={class:"text-center text-indigo-900 text-[25px] font-normal"},$t={class:"md:max-w-[229px] max-w-72 text-center text-neutral-500 text-xs font-normal leading-5"},kt={__name:"PrayerFeature",async setup(_){let e,s;const{locale:p}=z(),x="https://cms.prayer-now.com",v="/api/landing-page?locale[0]=",{data:m}=([e,s]=w(()=>$(x+v+p.value,"$kVFq4nY7UB")),e=await e,s(),e);function u(a){for(let o=a.length-1;o>0;o--){const l=Math.floor(Math.random()*(o+1));[a[o],a[l]]=[a[l],a[o]]}return a}const g=m.value.data.attributes.features.filter(a=>a.active===!0);u(g);const y=g.slice(0,3);return(a,o)=>(r(),c("div",ft,[bt,t("div",vt,[(r(!0),c(k,null,j(i(y),(l,f)=>(r(),c("div",{class:"grid grid-rows-3 justify-center items-center",key:f},[t("img",{src:i(x)+l.icon.data.attributes.url,alt:l.icon.data.attributes.name,class:"rounded-sm max-w-[60px] max-h-[60px] justify-self-center"},null,8,yt),t("div",wt,h(l.title),1),t("div",$t,h(l.description),1)]))),128))])]))}},Et=kt,jt={class:"bg-white rounded-[10px] border border-gray-200 px-4 py-6"},Bt={class:"grid md:grid-cols-2 gap-2"},zt={class:"flex items-center"},Ct={class:"grid gap-2 max-md:justify-items-center"},Nt={class:"max-md:text-center text-zinc-700 text-[15px] font-normal"},At={class:"h__primary max-md:text-center"},Dt={class:"w-full flex gap-3 items-center flex-wrap justify-center mt-4"},Ft={class:"cent"},It=["src"],Mt={__name:"NativePanners",async setup(_){let e,s;const{locale:p}=z(),x="https://cms.prayer-now.com",v="/api/landing-page?locale[0]=",{data:m}=([e,s]=w(()=>$(x+v+p.value,"$8vRqDRoJpl")),e=await e,s(),e),u=m.value.data.attributes.branding,g=m.value.data.attributes.banners_native.filter(o=>o.active===!0),y=Math.floor(Math.random()*g.length),a=g[y];return(o,l)=>{const f=F,n=I;return r(),c("div",jt,[t("div",Bt,[t("div",zt,[t("div",Ct,[t("p",Nt,h(i(a).sub_title),1),t("h2",At,h(i(a).title),1),t("div",Dt,[d(n,{to:i(u).link_download_google_play,target:"_blank"},{default:b(()=>[d(f,{isrc:"/svgs/google-store.svg",ialt:"google play",iclass:" max-w-[140px] min-h-[41px] duration-300 hover:scale-105"})]),_:1},8,["to"]),d(n,{to:i(u).link_download_apple,target:"_blank"},{default:b(()=>[d(f,{isrc:"/svgs/app-store.svg",ialt:"app store",iclass:" max-w-[140px] min-h-[41px] duration-300 hover:scale-105"})]),_:1},8,["to"]),d(n,{to:i(u).link_download_app_gallery,target:"_blank"},{default:b(()=>[d(f,{isrc:"/huawei-appgalley.jpg",ialt:"app store",iclass:" max-w-[140px] min-h-[41px] duration-300 hover:scale-105"})]),_:1},8,["to"])])])]),t("div",Ft,[t("img",{src:i(x)+i(a).image.data.attributes.url,alt:"",class:"rounded"},null,8,It)])])])}}},Lt=Mt;export{Pt as _,Tt as a,qt as b,Et as c,Lt as d,rt as e};