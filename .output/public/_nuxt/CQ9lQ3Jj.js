import{u as U,q as W,s as F,r as D,v as Z,x as tt,c as d,a as t,t as a,y as r,z as b,d as o,F as h,A as j,b as e,B as w,w as _,C as L,D as et,o as l,E as at,G as nt,e as st}from"./D2kxQvCt.js";import{_ as ot,a as it,b as rt,c as lt,d as ct,e as dt,f as _t}from"./ChisI25f.js";import{_ as ut,a as mt,b as gt,c as ht}from"./B4wozZrk.js";import{_ as pt}from"./BlpVMOUb.js";const ft={class:"grid gap-6"},bt=t("div",null,[t("img",{class:"w-full h-[244px] rounded-[10px] border border-gray-300",src:"https://via.placeholder.com/909x244"})],-1),vt={class:"bg-white rounded-[10px] border border-gray-200 grid gap-6 px-4 py-6"},xt={class:"h__primary"},yt=t("div",{class:"h-[0px] rotate-180 border border-stone-300"},null,-1),wt={class:"grid md:grid-cols-2 gap-4 items-center"},$t={class:"flex gap-3 items-center"},kt={class:"w-16 h-16 rounded-lg border border-gray-200 p-1.5 cent overflow-hidden"},At=["src","alt"],Tt={class:"grid gap-2"},zt={class:"text-zinc-700 text-[17px] font-bold font-['Almarai'] leading-tight"},Ct={class:"text-zinc-800 text-xs font-normal font-['Almarai'] leading-tight"},Dt={class:"grid gap-2"},jt={class:"flex gap-2 items-center"},Bt={class:"text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight"},Ft={class:"flex gap-2 items-center"},Lt={class:"text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight"},Nt={class:"grid md:grid-cols-3 gap-4"},It={class:"flex gap-2"},Mt={class:"text-teal-900 text-sm font-bold font-['Almarai'] leading-tight"},Pt={class:"text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight"},St={class:"flex gap-2 md:justify-center"},Vt={class:"text-teal-900 text-sm font-bold font-['Almarai'] leading-tight"},Et=t("div",{class:"text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight"}," شافعي، حنبلي، مالكي",-1),qt={class:"flex gap-2"},Ot={class:"text-teal-900 text-sm font-bold font-['Almarai'] leading-tight"},Gt=t("div",{class:"text-zinc-800 text-sm font-normal font-['Almarai'] leading-tight"}," تنسيق 24 ساعة",-1),Ht={class:"flex gap-2 items-center"},Xt={class:"text-zinc-700 text-lg font-bold font-['Almarai'] leading-tight"},Jt={class:"text-zinc-500 text-xs font-normal font-['Almarai'] leading-tight"},Kt={class:"h__primary"},Rt={class:"overflow-x-auto pb-1"},Yt={class:"flex gap-4 whitespace-nowrap text-zinc-500"},Qt={class:"bg-white rounded-[10px] border border-gray-200 px-4 py-6 grid gap-6"},Ut={class:"h__primary"},Wt={class:"city__label__grid"},ie={__name:"[city]",async setup(Zt){let p,$;const{locale:N}=U(),T="https://cms.prayer-now.com",I="http://api.aladhan.com/v1/calendarByCity?city=",v=W(),{data:k,error:te,refresh:ee}=([p,$]=F(()=>L(I+v.params.id+"&country="+v.params.country,{watch:v.params.city},"$dOKslVFzLf")),p=await p,$(),p),B=new Date,z=D(M(B)),c=D([]);function M(n){const i=g=>g.toString().padStart(2,"0");return`${i(n.getDate())}-${i(n.getMonth()+1)}-${n.getFullYear()}`}Z(()=>{P()});function P(){c.value=k.value.data.filter(n=>n.date.gregorian.date===z.value)}const S="/api/prayer-time-cities/?isHardPopulate=true&filters[prayer_time_country][id][$eq]=",{data:u}=([p,$]=F(()=>L(T+S+v.params.city+"&locale[0]="+N.value,"$XOTXjHJLzA")),p=await p,$(),p),C=B.getDate(),m=D(C<=7?0:C<=14?7:C<=21?14:21),V=tt(()=>{const n=m.value,i=k.value.data.length;if(n>=21)return k.value.data.slice(n);{const g=Math.min(n+7,i);return k.value.data.slice(n,g)}});function x(n){const g=/(\d{2}:\d{2})/.exec(n);return g?g[0]:""}return console.log(u.value.data),(n,i)=>{const g=nt,E=ot,A=et,f=rt,y=lt,q=it,O=ut,G=ct,H=st,X=pt,J=mt,K=dt,R=_t,Y=gt,Q=ht;return l(),d("div",ft,[bt,t("div",vt,[t("h2",xt,a(n.$t("infobanner.topheading")),1),yt,t("div",wt,[t("div",$t,[t("div",kt,[r(u).data[0].attributes.prayer_time_country.data.attributes.flag.data.attributes?(l(),d("img",{key:0,src:r(T)+r(u).data[0].attributes.prayer_time_country.data.attributes.flag.data.attributes.url,alt:r(T)+r(u).data[0].attributes.prayer_time_country.data.attributes.flag.data.attributes.alternativeText,class:"aspect-square rounded-full"},null,8,At)):b("",!0)]),t("div",Tt,[t("div",zt,[o(a(n.$t("infobanner.countryheading"))+" ",1),r(u).data[0]?(l(),d(h,{key:0},[o(a(n.$t(r(u).data[0].attributes.prayer_time_country.data.attributes.name)),1)],64)):b("",!0)]),t("div",Ct,[o(a(n.$t("infobanner.countrysubheading"))+" ",1),r(u).data[0]?(l(!0),d(h,{key:0},j(r(u).data,s=>(l(),d(h,{key:s.id},[s.attributes.is_capital?(l(),d(h,{key:0},[o(a(n.$t(s.attributes.title)),1)],64)):b("",!0)],64))),128)):b("",!0)])])]),t("div",Dt,[t("div",jt,[e(g,{isrc:"/svgs/e7datheat.svg",ialt:"country",iclass:" w-4 h-4"}),t("div",Bt,[o(a(n.$t("infobanner.para1"))+" ",1),c.value[0]?(l(),d(h,{key:0},[o(a(c.value[0].meta.timezone),1)],64)):b("",!0)])]),t("div",Ft,[e(g,{isrc:"/svgs/cleander.svg",ialt:"country",iclass:" w-4 h-4"}),t("div",Lt,[c.value[0]?(l(),d(h,{key:0},[o(a(c.value[0].date.hijri.weekday.ar)+"  "+a(c.value[0].date.hijri.day)+"  "+a(c.value[0].date.hijri.month.ar)+"  "+a(c.value[0].date.hijri.year)+"  "+a(n.$t("infobanner.para2"))+"  "+a(c.value[0].date.gregorian.date)+"  ",1)],64)):b("",!0)])])])]),t("div",Nt,[t("div",It,[t("div",Mt,a(n.$t("infobanner.calpara")),1),t("div",Pt,[c.value[0]?(l(),d(h,{key:0},[o(a(c.value[0].meta.method.name),1)],64)):b("",!0)])]),t("div",St,[t("div",Vt,a(n.$t("infobanner.doctrinepara")),1),Et]),t("div",qt,[t("div",Ot,a(n.$t("infobanner.timestyle")),1),Gt])]),t("div",Ht,[t("div",Xt,a(n.$t("infobanner.timepara")),1),t("div",Jt,a(n.$t("infobanner.timingsubheading")),1)]),e(E,{data:c.value},null,8,["data"]),t("h2",Kt,a(n.$t("infobanner.monthsubheading")),1),t("div",Rt,[t("div",Yt,[e(A,{buttonText:"infobanner.week1",buttonClass:" flex-1 btn__primary bg-zinc-100  font-semibold hover:bg-sec hover:text-white",onClick:i[0]||(i[0]=s=>m.value=0),class:w(m.value===0?"!bg-sec text-white":"")},null,8,["class"]),e(A,{buttonText:"infobanner.week2",buttonClass:"flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",onClick:i[1]||(i[1]=s=>m.value=7),class:w(m.value===7?"!bg-sec text-white":"")},null,8,["class"]),e(A,{buttonText:"infobanner.week3",buttonClass:"flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",onClick:i[2]||(i[2]=s=>m.value=14),class:w(m.value===14?"!bg-sec text-white":"")},null,8,["class"]),e(A,{buttonText:"infobanner.week4",buttonClass:"flex-1 btn__primary bg-zinc-100  font-semibold  hover:bg-sec hover:text-white",onClick:i[3]||(i[3]=s=>m.value=21),class:w(m.value===21?"!bg-sec text-white":"")},null,8,["class"])])]),e(q,null,{thead:_(()=>[e(f,{thText:"infobanner.date"}),e(f,{thText:"infobanner.time1"}),e(f,{thText:"infobanner.time2"}),e(f,{thText:"infobanner.time3"}),e(f,{thText:"infobanner.time4"}),e(f,{thText:"infobanner.time5"}),e(f,{thText:"infobanner.time6"})]),tbody:_(()=>[(l(!0),d(h,null,j(r(V),s=>(l(),d("tr",{class:w(["h-[45px] border-b",z.value===s.date.gregorian.date?"!bg-yellow-50 ":""]),key:s},[e(f,{thClass:" bg-gray-100 font-semibold ",class:w(z.value===s.date.gregorian.date?"!bg-yellow-50 ":"")},{default:_(()=>[o(a(s.date.gregorian.date),1)]),_:2},1032,["class"]),e(y,null,{default:_(()=>[o(a(x(s.timings.Fajr)),1)]),_:2},1024),e(y,null,{default:_(()=>[o(a(x(s.timings.Sunrise)),1)]),_:2},1024),e(y,null,{default:_(()=>[o(a(x(s.timings.Dhuhr)),1)]),_:2},1024),e(y,null,{default:_(()=>[o(a(x(s.timings.Asr)),1)]),_:2},1024),e(y,null,{default:_(()=>[o(a(x(s.timings.Maghrib)),1)]),_:2},1024),e(y,null,{default:_(()=>[o(a(x(s.timings.Isha)),1)]),_:2},1024)],2))),128))]),_:1})]),e(O),t("div",Qt,[t("h2",Ut,a(n.$t("citiescounrybanner.heading")),1),t("div",Wt,[(l(!0),d(h,null,j(r(u).data,s=>(l(),at(H,{to:"/app/prayer-time/"+r(v).params.country+"/"+s.attributes.slug+"/"+r(v).params.city,key:s.id,class:"w-full"},{default:_(()=>[e(G,null,{default:_(()=>[o(a(s.attributes.title),1)]),_:2},1024)]),_:2},1032,["to"]))),128))])]),e(X),e(J),e(K),e(R),e(Y),e(Q)])}}};export{ie as default};