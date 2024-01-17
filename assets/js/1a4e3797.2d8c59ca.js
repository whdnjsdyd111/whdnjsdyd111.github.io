"use strict";(self.webpackChunkwyj_lab=self.webpackChunkwyj_lab||[]).push([[7920],{88824:(e,t,a)=>{a.d(t,{c:()=>u});var r=a(67294),n=a(52263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},51473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var r=a(67294),n=a(52263),l=a(70179),s=a(35742),c=a(39960),o=a(95999),u=a(88824),m=a(86010),h=a(16550),i=a(10412);const p=function(){const e=(0,h.k6)(),t=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),r=i.Z.canUseDOM?new URLSearchParams(t.search):null,l=r?.get("q")||"",s=r?.get("ctx")||"",c=r?.get("version")||"",o=e=>{const a=new URLSearchParams(t.search);return e?a.set("q",e):a.delete("q"),a};return{searchValue:l,searchContext:s,searchVersion:c,updateSearchPath:t=>{const a=o(t);e.replace({search:a.toString()})},updateSearchContext:a=>{const r=new URLSearchParams(t.search);r.set("ctx",a),e.replace({search:r.toString()})},generateSearchPageLink:e=>{const t=o(e);return`${a}search?${t.toString()}`}}};var g=a(90022),d=a(98202),f=a(82539),y=a(10726),E=a(91073),S=a(80311),C=a(73926),I=a(61029);const x={searchContextInput:"searchContextInput_mXoe",searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr",searchQueryColumn:"searchQueryColumn_q7nx",searchContextColumn:"searchContextColumn_oWAF"};function w(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:a,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,r.useState)(a),[E,C]=(0,r.useState)(),[w,R]=(0,r.useState)(),P=`${e}${c}`,b=(0,r.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,r.useEffect)((()=>{h(f),E&&(f?E(f,(e=>{R(e)})):R(void 0))}),[f,E]);const _=(0,r.useCallback)((e=>{y(e.target.value)}),[]);return(0,r.useEffect)((()=>{a&&a!==f&&y(a)}),[a]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.w)(P,l);C((()=>(0,d.v)(e,t,100)))}()}),[l,P]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,b)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,b),r.createElement("div",{className:"row"},r.createElement("div",{className:(0,m.Z)("col",{[x.searchQueryColumn]:Array.isArray(I.Kc),"col--9":Array.isArray(I.Kc),"col--12":!Array.isArray(I.Kc)})},r.createElement("input",{type:"search",name:"q",className:x.searchQueryInput,"aria-label":"Search",onChange:_,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(I.Kc)?r.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",x.searchContextColumn)},r.createElement("select",{name:"search-context",className:x.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},r.createElement("option",{value:""},I.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),I.Kc.map((e=>r.createElement("option",{key:e,value:e},e))))):null),!E&&f&&r.createElement("div",null,r.createElement(S.Z,null)),w&&(w.length>0?r.createElement("p",null,t(w.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:w.length}))):r.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,w&&w.map((e=>r.createElement(v,{key:e.document.i,searchResult:e}))))))}function v(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const o=0===a,u=2===a,m=(o?t.b:n.b).slice(),h=u?t.s:t.t;o||m.push(n.t);let i="";if(I.vc&&l.length>0){const e=new URLSearchParams;for(const t of l)e.append("_highlight",t);i=`?${e.toString()}`}return r.createElement("article",{className:x.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+i+(t.h||""),dangerouslySetInnerHTML:{__html:u?(0,f.C)(h,l):(0,y.o)(h,(0,E.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:x.searchResultItemPath},(0,C.e)(m)),u&&r.createElement("p",{className:x.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.o)(t.t,(0,E.m)(s,"t"),l,100)}}))}const R=function(){return r.createElement(l.Z,null,r.createElement(w,null))}}}]);