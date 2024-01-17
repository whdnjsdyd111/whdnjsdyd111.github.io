"use strict";(self.webpackChunkwyj_lab=self.webpackChunkwyj_lab||[]).push([[9593],{3905:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>k});var a=e(67294);function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function o(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){i(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function r(t,n){if(null==t)return{};var e,a,i=function(t,n){if(null==t)return{};var e,a,i={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(i[e]=t[e]);return i}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(i[e]=t[e])}return i}var s=a.createContext({}),u=function(t){var n=a.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):o(o({},n),t)),e},p=function(t){var n=u(t.components);return a.createElement(s.Provider,{value:n},t.children)},g="mdxType",m={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(t,n){var e=t.components,i=t.mdxType,l=t.originalType,s=t.parentName,p=r(t,["components","mdxType","originalType","parentName"]),g=u(e),c=i,k=g["".concat(s,".").concat(c)]||g[c]||m[c]||l;return e?a.createElement(k,o(o({ref:n},p),{},{components:e})):a.createElement(k,o({ref:n},p))}));function k(t,n){var e=arguments,i=n&&n.mdxType;if("string"==typeof t||i){var l=e.length,o=new Array(l);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=t,r[g]="string"==typeof t?t:i,o[1]=r;for(var u=2;u<l;u++)o[u]=e[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,e)}c.displayName="MDXCreateElement"},90271:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>u});var a=e(87462),i=(e(67294),e(3905));const l={slug:"Flan-T5",title:"Scaling Instruction-Finetuned Language Models",tags:["Flan-T5","T5","NLP","Multi-Task"]},o=void 0,r={unversionedId:"Paper/NLP/Multi-Task/2022-10-Flan-T5",id:"Paper/NLP/Multi-Task/2022-10-Flan-T5",title:"Scaling Instruction-Finetuned Language Models",description:"\ub17c\ubb38 \ubc0f \uc774\ubbf8\uc9c0 \ucd9c\ucc98 :",source:"@site/docs/Paper/NLP/Multi-Task/2022-10-Flan-T5.md",sourceDirName:"Paper/NLP/Multi-Task",slug:"/Paper/NLP/Multi-Task/Flan-T5",permalink:"/docs/Paper/NLP/Multi-Task/Flan-T5",draft:!1,editUrl:"https://github.com/whdnjsdyd111/whdnjsdyd111.github.io/tree/master/docs/docs/Paper/NLP/Multi-Task/2022-10-Flan-T5.md",tags:[{label:"Flan-T5",permalink:"/docs/tags/flan-t-5"},{label:"T5",permalink:"/docs/tags/t-5"},{label:"NLP",permalink:"/docs/tags/nlp"},{label:"Multi-Task",permalink:"/docs/tags/multi-task"}],version:"current",frontMatter:{slug:"Flan-T5",title:"Scaling Instruction-Finetuned Language Models",tags:["Flan-T5","T5","NLP","Multi-Task"]},sidebar:"tutorialSidebar",previous:{title:"Chain-of-Thought Prompting Elicits Reasoning in Large Language Models",permalink:"/docs/Paper/NLP/Multi-Task/Chain-of-Thought"},next:{title:"CodeT5+: Open Code Large Language Models for Code Understanding and Generation",permalink:"/docs/Paper/NLP/Multi-Task/CodeT5+"}},s={},u=[{value:"2.1. Finetuning Data",id:"21-finetuning-data",level:2},{value:"Task mixtures.",id:"task-mixtures",level:3},{value:"Chain-of-thought finetuning mixture.",id:"chain-of-thought-finetuning-mixture",level:3},{value:"Templates and formatting.",id:"templates-and-formatting",level:3},{value:"2.2. Finetuning procedure",id:"22-finetuning-procedure",level:2},{value:"2.3. Evaluation Protocol",id:"23-evaluation-protocol",level:3},{value:"Evaluation benchmarks.",id:"evaluation-benchmarks",level:3},{value:"Evaluation mathods and metrics.",id:"evaluation-mathods-and-metrics",level:3},{value:"4.1. Finetuning on chain-of-thought improves reasoning on held-out tasks",id:"41-finetuning-on-chain-of-thought-improves-reasoning-on-held-out-tasks",level:2},{value:"4.2. Some chain-of-thought data is needed to maintain reasoning ability",id:"42-some-chain-of-thought-data-is-needed-to-maintain-reasoning-ability",level:2},{value:"4.3. Unlocking zero-shot reasoning",id:"43-unlocking-zero-shot-reasoning",level:2},{value:"Scaling curves for instruction finetuning",id:"scaling-curves-for-instruction-finetuning",level:2},{value:"CoT finetuning is critical for reasoning abilities",id:"cot-finetuning-is-critical-for-reasoning-abilities",level:2},{value:"Instruction finetuning generalizes across models",id:"instruction-finetuning-generalizes-across-models",level:2},{value:"Instruction finetuning improves usability and mitigates some potential harms",id:"instruction-finetuning-improves-usability-and-mitigates-some-potential-harms",level:2},{value:"Instruction finetuning is relatively compute-efficient",id:"instruction-finetuning-is-relatively-compute-efficient",level:2}],p={toc:u},g="wrapper";function m(t){let{components:n,...l}=t;return(0,i.kt)(g,(0,a.Z)({},p,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\ub17c\ubb38 \ubc0f \uc774\ubbf8\uc9c0 \ucd9c\ucc98 : ",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/pdf/2210.11416.pdf"},"https://arxiv.org/pdf/2210.11416.pdf")),(0,i.kt)("h1",{id:"abstract"},"Abstract"),(0,i.kt)("p",null,"instruction \uc73c\ub85c finetuning \ud55c \ubaa8\ub378\uc740 \ubaa8\ub378 \uc131\ub2a5\uc774\ub098 unseen task \uc5d0 \ub300\ud55c \uc0dd\uc131 \ub2a5\ub825\uc744 \ud5a5\uc0c1 \uc2dc\ud0a8\ub2e4."),(0,i.kt)("p",null,"\uc800\uc790\ub294 \ub2e4\uc74c ",(0,i.kt)("strong",{parentName:"p"},"instruction finetuning")," \uc744 \ud0d0\uad6c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"scailing the number of tasks"),(0,i.kt)("li",{parentName:"ol"},"scailing the model size"),(0,i.kt)("li",{parentName:"ol"},"finetuning on chain-of-thought data")),(0,i.kt)("p",null,"\uc800\uc790\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ub2e4\uc591\ud55c \ubaa8\ub378"),"(PaLM, T5, U-PaLM), ",(0,i.kt)("strong",{parentName:"p"},"prompt setups"),"(zero/few-shot, CoT), ",(0,i.kt)("strong",{parentName:"p"},"evaluation benchmarks")," \uc5d0 \ub300\ud574, \uadf9\uc815\uc778 \uc131\ub2a5 \ud5a5\uc0c1\uc744 \ubcf4\uc774\ub294 \uac83\uc744 \ubc1c\uacac"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 1",src:e(76424).Z,width:"1348",height:"687"})),(0,i.kt)("h1",{id:"1-introduction"},"1. Introduction"),(0,i.kt)("p",null,"\uc800\uc790\ub294 instruction finetuning \uc758 \ub450 \uac00\uc9c0\ub97c \uc811\uadfc"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"instruction finetuning \uc758 scaling \uc601\ud5a5",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"task \uc218\uc640 model size \uac00 \ud568\uaed8 \uc798 \ud655\uc7a5 \ub418\ub294 \uac83 \ubc1c\uacac"))),(0,i.kt)("li",{parentName:"ol"},"instruction finetuning \uc758 \ucd94\ub860 \uc791\uc5c5 \uc218\ud589 \ub2a5\ub825",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"CoT (chain-of-thought) \ub97c \ud3ec\ud568\ud558\uc9c0 \uc54a\uc740 instruction finetuning \uc740 CoT \ud3c9\uac00\uc5d0 \uc800\ud558\ub97c \uc77c\uc73c\ud0b4"),(0,i.kt)("li",{parentName:"ul"},"9\uac1c\uc758 CoT dataset \uc744 \ucd94\uac00\ud558\ub2c8 \ubaa8\ub4e0 \ud3c9\uac00\uc5d0 \ub300\ud574 \ub354 \ub098\uc740 \uc131\ub2a5\uc744 \ubcf4\uc784")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table 1",src:e(21554).Z,width:"1264",height:"612"})),(0,i.kt)("p",null,"540B \uc758 Flan-PaLM \uc744 \ud6c8\ub828(1.8K Tasks, CoT data)\ud55c \uacb0\uacfc "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Massive Multi-task Language Understanding (MMLU) \uc5d0 \ub300\ud574 75.2% \ub2ec\uc131"),(0,i.kt)("li",{parentName:"ul"},"PaLM \uacfc \ube44\uad50\ud558\uc5ec TyDiQA \uc5d0 one-shot \uc73c\ub85c 14.9% \ud5a5\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"instruction finetuning Flan-T5 \ubaa8\ub378\uc740 zero-shot, few-shot \ubc0f CoT \ub2a5\ub825\uc774 T5 \ubcf4\ub2e4 \ub6f0\uc5b4\ub0a8"),(0,i.kt)("li",{parentName:"ul"},"Flan-T5 11B \ub294 T5 11B \ubcf4\ub2e4 \uc2ed\uc758 \uc790\ub9ac \ub354 \ub6f0\uc5b4\ub098\uba70 BIG-Bench task \uc5d0\uc11c PaLM 62B \ubcf4\ub2e4 \ub6f0\uc5b4\ub0a8")),(0,i.kt)("p",null,"\uc804\uccb4\uc801\uc73c\ub85c instruction tuning \ub294 model, prompting, evaluation \uc804\uc5ed\uc5d0\uc11c \uc131\ub2a5\uc774 \ud5a5\uc0c1"),(0,i.kt)("h1",{id:"2-flan-finetuning"},"2. Flan Finetuning"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 2",src:e(81293).Z,width:"797",height:"642"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 3",src:e(29075).Z,width:"1196",height:"647"})),(0,i.kt)("p",null,"Fig 2 \uc640 \uac19\uc740 \ub370\uc774\ud130 \uc18c\uc2a4\ub97c \ubaa8\uc544 Fig 3 \uacfc \uac19\uc740 \uc5ec\ub7ec instruction template \uc73c\ub85c instruction finetuning"),(0,i.kt)("p",null,"\uc774 \ud504\ub85c\uc138\uc2a4\ub294 ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Flan")),' \uc774\uba70 \uc774\ub7ec\ud55c \uacfc\uc815\uc73c\ub85c finetuning \ub41c \ubaa8\ub378 \uc55e\uc5d0 "Flan" \uc744 \ubd99\uc778\ub2e4. (e.g. Flan-T5)'),(0,i.kt)("h2",{id:"21-finetuning-data"},"2.1. Finetuning Data"),(0,i.kt)("h3",{id:"task-mixtures"},"Task mixtures."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"[Finetuned Language Models Are Zero-Shot Learners]")," \uc740 instruction \uacfc \ud568\uaed8 finetuning \uc758 task \uc218\ub97c \ub298\ub824 unseen task \uc5d0 \ub300\ud55c \uc77c\ubc18\ud654\ub97c \ud5a5\uc0c1 \uc2dc\ucf30\ub2e4."),(0,i.kt)("p",null,"\ubcf8 \ub17c\ubb38\uc5d0\uc120, \uc774\uc804 \uc5f0\uad6c\uc758 Muffin (80 tasks), T0-SF (193 tasks), NIV2 (1554 tasks) \ubc0f CoT \ub97c \uacb0\ud569\ud558\uc5ec 1,836 task \ub85c \ud655\uc7a5"),(0,i.kt)("h3",{id:"chain-of-thought-finetuning-mixture"},"Chain-of-thought finetuning mixture."),(0,i.kt)("p",null,"CoT annotation \uc744 \ud3ec\ud568\ud558\uc5ec, CoT \uc5d0 \ub300\ud55c finetuning \uc774  unseen task \uc5d0 \ub300\ud55c \ucd94\ub860 \uc131\ub2a5 \ud5a5\uc0c1\uc2dc\ud0a4\ub294\uc9c0 \uc870\uc0ac"),(0,i.kt)("p",null,"9 \uac00\uc9c0 \ub370\uc774\ud130\uc14b\uc758 \ud63c\ud569\uc744 \ub9cc\ub4e4\uba70, \uc774\uc5d0 arithmetic reasoning, multi-hop reasoning, natural language inference \ub4f1\uc744 \ud3ec\ud568\ud55c\ub2e4."),(0,i.kt)("h3",{id:"templates-and-formatting"},"Templates and formatting."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Muffin, T0-SF \ubc0f NIV2 \uc758 \uacbd\uc6b0, \ub370\uc774\ud130\uc14b \ucc3d\uc791\uc790\uac00 \ub9cc\ub4e0 instructional template \uc744 \uc0ac\uc6a9"),(0,i.kt)("li",{parentName:"ul"},"CoT \uc758 \uacbd\uc6b0, 9 \uac00\uc9c0 \ub370\uc774\ud130\uc14b \uac01\uac01\uc5d0 10 \uac1c\uc758 instruction template \uc218\ub3d9 \uc791\uc131"),(0,i.kt)("li",{parentName:"ul"},'few-shot template \uc0dd\uc131\uc5d0\ub294, "Q:/""A" \uac19\uc774 \ub2e4\uc591\ud55c examplar \uad6c\ubd84\uc744 \uc791\uc131\ud558\uba70, \uc774\ub97c \ubb34\uc791\uc704 example level \ub85c \uc801\uc6a9 (Fig 3)')),(0,i.kt)("h2",{id:"22-finetuning-procedure"},"2.2. Finetuning procedure"),(0,i.kt)("p",null,"T5, PaLM, U-PaLM \ub4f1 \ub2e4\uc591\ud55c \ubaa8\ub378\uc5d0 instruction finetuning \uc744 \uc801\uc6a9"),(0,i.kt)("p",null,"\uac01 \ubaa8\ub378\ub4e4\uc758 \ud559\uc2b5 \uc808\ucc28\ub294 learning rate, batch size, dropout, finetuning step \ub4f1 \uc77c\ubd80 hyperparameter \ub97c \uc81c\uc678\ud558\uace0 \ub3d9\uc77c\ud558\uac8c \uc801\uc6a9"),(0,i.kt)("p",null,"\uc77c\uc815\ud55c schedule \ubc0f Adafactor optimizer \uc0ac\uc6a9"),(0,i.kt)("p",null,"multiple training example \uc744 single sequence \uc5d0 \uacb0\ud569\ud558\uae30 \uc704\ud574 ",(0,i.kt)("strong",{parentName:"p"},"[T5]")," \uc758 packing \uc744 \uc0ac\uc6a9\ud588\uc73c\uba70, input \uacfc target \uc744 eos sequence token \uc744 \uc0ac\uc6a9\ud558\uc5ec \ubd84\ub9ac\ud55c\ub2e4."),(0,i.kt)("p",null,"optimal step \uc740 held-out-tasks \uc758 periodic evaluation (\ubaa8\ub378 \ud06c\uae30\uc5d0 \ub530\ub77c 2k ~ 10k step \ub9c8\ub2e4) \ub97c \uae30\ubc18\uc73c\ub85c \uc120\ud0dd\ub428."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table 2",src:e(17575).Z,width:"1023",height:"480"})),(0,i.kt)("h3",{id:"23-evaluation-protocol"},"2.3. Evaluation Protocol"),(0,i.kt)("h3",{id:"evaluation-benchmarks"},"Evaluation benchmarks."),(0,i.kt)("p",null,"Flan-PaLM \uc758 world knowledge \ubc0f reasoning task \uc131\ub2a5 \ud3c9\uac00\ub97c \uc704\ud574 finetuning \uc5d0 \ud3ec\ud568\ud558\uc9c0 \uc54a\uc740 held-out-task \uc5d0 \ud3c9\uac00"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"MMLU : mathematics, history, medicine \ub4f1 57 task \uc758 exam question \ud3ec\ud568"),(0,i.kt)("li",{parentName:"ol"},"BBH : BIG-Bench \ub85c\ubd80\ud130 23 challenging task \ud3ec\ud568"),(0,i.kt)("li",{parentName:"ol"},"TyDiQA : QA benchmark \ub85c, 8 typologically language \ud3ec\ud568"),(0,i.kt)("li",{parentName:"ol"},"MGSM : math \ub2e8\uc5b4 \ubb38\uc81c\ub85c 10 languages \ud3ec\ud568")),(0,i.kt)("h3",{id:"evaluation-mathods-and-metrics"},"Evaluation mathods and metrics."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MMLU (five-shot), BBH (three-shot) : direct prompting \uc744 \ud1b5\ud55c answer \uc608\uce21 \ubc0f CoT prompting \uc744 \ud1b5\ud55c \ucd94\ub860 \ub2a5\ub825 \ubaa8\ub450 \ud3c9\uac00 "),(0,i.kt)("li",{parentName:"ul"},"TyDiQA (one-shot) : \ubcf5\uc7a1\ud55c \ucd94\ub860\uc744 \uc694\uad6c\ud558\uc9c0 \uc54a\uc544, direct prompting exact-match \uc810\uc218\ub97c \uce21\uc815"),(0,i.kt)("li",{parentName:"ul"},"MGSM (8-shot) : direct prompting \uc131\ub2a5\uc774 \ub0ae\uc544, CoT prompting \uc815\ud655\ub3c4\ub9cc \uce21\uc815")),(0,i.kt)("p",null,"\ub610\ud55c BIG-Bench \uc5d0 \ub530\ub978 ",(0,i.kt)("strong",{parentName:"p"},"normalized average")," metric (macro-average) \uc744 \ubcf4\uace0."),(0,i.kt)("h1",{id:"3-scaling-to-540b-parameters-and-18k-tasks"},"3. Scaling to 540B parameters and 1.8K tasks"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 4",src:e(6092).Z,width:"809",height:"451"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table 3",src:e(84426).Z,width:"813",height:"535"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ubaa8\ub378 \uc0ac\uc774\uc988 \ubc0f finetuning task \uc218\uc5d0 \ub300\ud55c scaling \ud6a8\uacfc \uac80\ud1a0",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"PaLM \ubaa8\ub378 8B, 62B \ubc0f 540B \uc5d0 \ub300\ud574 \uc2e4\ud5d8"),(0,i.kt)("li",{parentName:"ul"},"CoT, Muffin, T0-SF \ubc0f NIV2 \ub97c \uc21c\ucc28\uc801\uc73c\ub85c \ucd94\uac00\ud558\uc5ec mixture"),(0,i.kt)("li",{parentName:"ul"},"multi-task instruction fietuning \ubc0f no finetuning \uc744 \ube44\uad50\ud558\uc5ec 9.4% ~ 15.5% \uc758 \uc131\ub2a5 \ud5a5\uc0c1"))),(0,i.kt)("li",{parentName:"ol"},"finetuning task \ub97c \ub298\ub9ac\uba74 \uc131\ub2a5 \ud5a5\uc0c1\uc774 \uc788\uc9c0\ub9cc, \ucd5c\ub300 282 tasks \uc5d0\uc11c \ub098\ud0c0\ub098\uba70, \uc5ec\uae30\uc5d4 \ub450 \uac00\uc9c0 \uc774\uc720\uac00 \uc788\uc74c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\ucd94\uac00 task \uac00 \ud2b9\ubcc4\ud788 \ub2e4\uc591\ud558\uc9c0 \uc54a\uc544 \uc0c8\ub85c\uc6b4 knowledge \ub97c \uc81c\uacf5\ud560 \uc218 \uc5c6\uc74c"),(0,i.kt)("li",{parentName:"ul"},"\uc774\ubbf8 pretraining \uc5d0\uc11c \uc54c\uace0 \uc788\ub358 knowledge \ub77c\uc11c \ud070 \ub3c4\uc6c0\uc774 \ub418\uc9c0 \uc54a\uc74c"))),(0,i.kt)("li",{parentName:"ol"},"\ubaa8\ub378 \uc0ac\uc774\uc988\ub97c \ud55c \ub2e8\uacc4\uc529 \ud655\uc7a5\ud558\ub294 \uac83 (8B \u2192 62B or 62B \u2192 540B)\uc774 finetuning \ubc0f non-finetuning \ubaa8\ub450 \uc131\ub2a5 \ud5a5\uc0c1")),(0,i.kt)("h1",{id:"4-finetuning-with-chain-of-thought-annotations"},"4. Finetuning with chain-of-thought annotations"),(0,i.kt)("p",null,"instruction finetuning mixture \uc5d0 CoT \ub97c \ud3ec\ud568\ud55c \ud6a8\uacfc\ub97c \ud0d0\uad6c"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c \uc774\uc804 \ubaa8\ub378\uc744 \ub2a5\uac00\ud558\ub294 Flan-PaLM \uc758 \ud5a5\uc0c1\ub41c \ucd94\ub860 \ub2a5\ub825"),(0,i.kt)("li",{parentName:"ol"},"CoT finetuning data \ub97c \uc81c\uac70\ud558\uace0 CoT \uc5c6\uc774 finetuning \uc218\ud589 \uc2dc \uc2e4\uc81c\ub85c \ucd94\ub860 \ub2a5\ub825 \ud558\ub77d"),(0,i.kt)("li",{parentName:"ol"},'CoT finetuning \uac00 \uc5b4\ub824\uc6b4 BIG-Bench task \uc5d0\uc11c "let\'s think step-by-step" \uc73c\ub85c zero-shot \ucd94\ub860\uc774 \uac00\ub2a5\ud55c \uac83\uc744 \ubcf4\uc5ec\uc90c')),(0,i.kt)("h2",{id:"41-finetuning-on-chain-of-thought-improves-reasoning-on-held-out-tasks"},"4.1. Finetuning on chain-of-thought improves reasoning on held-out tasks"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Table 4",src:e(53223).Z,width:"810",height:"377"})),(0,i.kt)("p",null,"\uc800\uc790\ub294 CoT annotation \uc744 9 \uac1c\uc758 \ub370\uc774\ud130\uc14b finetuning mixture \uc5d0 \ud3ec\ud568\uc2dc\ud0a4\ub294 \uac83\uc774 \ucd94\ub860 \ub2a5\ub825\uc744 \ud5a5\uc0c1\uc2dc\ucf1c \uc8fc\ub294 \uac83\uc744 \ubcf4\uc5ec\uc900\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CoT prompting \uc774 ",(0,i.kt)("strong",{parentName:"li"},"[self-consistency]")," \uc640 \uacb0\ud569\ud558\uc5ec \uc5ec\ub7ec \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c SOTA \ub97c \ub2ec\uc131",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"MMLU \uc5d0\uc11c Flan-PaLM 540B \uc740 75.2% \ub2ec\uc131"),(0,i.kt)("li",{parentName:"ul"},"\ub2e4\uad6d\uc5b4 math problem \uc778 MGSM \uc5d0\uc11c CoT + SC \ub85c \ud06c\uac8c \uac1c\uc120\ud558\uc5ec SOTA \ub2ec\uc131"),(0,i.kt)("li",{parentName:"ul"},"GSM8K \uc5d0\uc11c Flan-PaLM + CoT + SC \uac00 83.9% \ub85c SOTA \ub2ec\uc131"))),(0,i.kt)("li",{parentName:"ul"},"\uc800\uc790\ub294 \ud2b9\uc815 \ud2b9\ud654\ub41c \ubaa8\ub378\uacfc \ube44\uad50\ud558\uc5ec Flan-PaLM \uc774 SOTA \ub97c \ub2ec\uc131\ud558\uc9c0 \uc54a\uc740 \uc810\ub3c4 \uc8fc\ubaa9",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"symbolic \uc870\uc791\ub9cc \uc694\uad6c\ub418\ub294 BBH-algo \uc758 \uacbd\uc6b0, CoT + SC \ub85c\ub3c4 \ub2a5\uac00\ud558\uc9c0 \ubabb\ud568"),(0,i.kt)("li",{parentName:"ul"},"one-shot TyDiQA \uc5d0\uc11c PaLM \ubcf4\ub2e4 \uc131\ub2a5\uc740 \ub192\uc9c0\ub9cc SOTA \ubaa8\ub378\uacfc\ub294 \ube44\uad50\ud560 \uc218\uc900\uc774 \uc544\ub2d8")))),(0,i.kt)("h2",{id:"42-some-chain-of-thought-data-is-needed-to-maintain-reasoning-ability"},"4.2. Some chain-of-thought data is needed to maintain reasoning ability"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 5",src:e(22018).Z,width:"790",height:"414"})),(0,i.kt)("p",null,"\ub2e4\uc74c\uc73c\ub85c\ub294, instruction finetuning \uc5d0 9\uac1c\uc758 CoT \ub370\uc774\ud130\uc14b\uc744 \uc81c\uac70\ud574 \ubcf8\ub2e4."),(0,i.kt)("p",null,"CoT \ubc0f non-CoT fintuning \uc744 \uacb0\ud569\ud55c \uac83\uc774 \uc774 CoT \ub9cc finetuning \ud55c \uac83 \ubcf4\ub2e4 \uc131\ub2a5\uc774 \uc88b\uc558\ub2e4. \uc774\ub97c \ud1b5\ud574 non-CoT task \uc5d0\uc11c\uc758 \uc131\ub2a5\uc744 \uc800\ud558\uc2dc\ud0a4\uc9c0 \uc54a\uc74c\uc744 \ud655\uc778"),(0,i.kt)("p",null,"Fig 5-\uc67c\ucabd \uc5d0\uc11c \uc911\uc694\ud55c \uc810\uc740 CoT \uc5d0 \ub300\ud55c finetuning \uc774 \ucd94\ub860 \ub2a5\ub825 \uc720\uc9c0\uc5d0 \uc911\uc694\ud558\ub2e8 \uac83\uc744 \ubcf4\uc5ec\uc900\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Non-CoT \ub9cc finetuning \ud558\ub294 \uac83\uc740 CoT \uc131\ub2a5\uc744 \uc0c1\ub2f9\ud788 \uc800\ud558"),(0,i.kt)("li",{parentName:"ul"},"unseen task \uac00 finetuning task \uc640 \ub3d9\uc77c\ud55c ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"prompting paradigm"))," (i.e. non-CoT, CoT)\uc5d0 \uc18d\ud560 \ub54c, instruction tuning \uc774 \ud6a8\uacfc\uc801\uc73c\ub85c \uc131\ub2a5 \ud5a5\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"\uc989, non-CoT \ubc0f CoT \ub370\uc774\ud130 \ubaa8\ub450 \ubaa8\ub378 \ud5a5\uc0c1\uc5d0 \ud544\uc694")),(0,i.kt)("h2",{id:"43-unlocking-zero-shot-reasoning"},"4.3. Unlocking zero-shot reasoning"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 6",src:e(74891).Z,width:"814",height:"437"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 7",src:e(28191).Z,width:"797",height:"580"})),(0,i.kt)("p",null,"exemplar \ub97c \ud3ec\ud568\ud558\uac70\ub098 \ud3ec\ud568\ud558\uc9c0 \uc54a\uc740 CoT \ub370\uc774\ud130\uc5d0 \ub300\ud55c instruction finetuning \uc758 \ucd5c\uc885 \uc774\uc810\uc740 \ubaa8\ub378\uc774 zero-shot \uc138\ud305\uc5d0 \ub300\ud55c CoT \ucd94\ub860\uc744 \uc218\ud589\ud558\ub294 \uac83\uc774\ub2e4."),(0,i.kt)("p",null,'Fig 6 \uc5d0\uc11c 23\uac1c\uc758 unseen challenging \uc778 BBH \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c Flan-PaLM \uc774 "let\'s think step-by-step" \uad6c\ubb38\uc744 \uc0ac\uc6a9\ud558\uc5ec CoT \ucd94\ub860 \uc218\ud589 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ucf30\ub2e4.'),(0,i.kt)("p",null,"Fig 7 \uc5d0\uc11c PaLM \ubc0f Flan-PaLM \uc758 zero-shot \uc744 \ubcf4\uc5ec\uc900\ub2e4."),(0,i.kt)("h1",{id:"5-putting-it-all-together"},"5. Putting it all together"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 6",src:e(51442).Z,width:"929",height:"838"})),(0,i.kt)("p",null,"instruction finetuning \uc758 \uc77c\ubc18\ud654\ub97c \ub2e4\uc591\ud55c \uc0ac\uc774\uc988, \uc544\ud0a4\ud14d\ucc98 \ubc0f training objective \uc758 \uc5ec\ub7ec \ubaa8\ub378\uc744 \uc801\uc6a9\ud558\uc5ec \ubcf4\uc5ec\uc900\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"decoder-only \uc544\ud0a4\ud14d\ucc98\uc778 PaLM \uc5d0 \ub300\ud56d\ud558\uc5ec encoder-decoder \uc544\ud0a4\ud14d\ucc98\uc778 ",(0,i.kt)("strong",{parentName:"li"},"T5")," \ub97c instruction finetuning"),(0,i.kt)("li",{parentName:"ul"},"PaLM 62B \ubaa8\ub378\uc5d0 500B token \uc744 pretraining \ud55c ",(0,i.kt)("strong",{parentName:"li"},"cont-PaLM")," \uc744 instruction tuning"),(0,i.kt)("li",{parentName:"ul"},"PaLM 540B \uc5d0 UL2 objective \ub85c 20k \ucd94\uac00\uc801\uc778 step \uc73c\ub85c pretraining \ud55c U-PaLM")),(0,i.kt)("p",null,"instruction finetuning \uc740 \ubaa8\ub4e0 model \uc5d0 \ube44\ud574 \ud070 \ub9c8\uc9c4\uc73c\ub85c normalized average \uac00 \ud5a5\uc0c1"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"instruction finetuning \ud558\uc9c0 \uc54a\uc740 T5 \uc758 \uacbd\uc6b0"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"LM-adapted model \uc744 \uc0ac\uc6a9\ud558\uc5ec standard language modeling objective \ub85c 100B \ucd94\uac00 \ud1a0\ud070\uc73c\ub85c \ud6c8\ub828"),(0,i.kt)("li",{parentName:"ul"},"T5 \ub294 non-finetuned \ubaa8\ub378\uacfc \ube44\uad50\ud558\uc5ec instruction- finetuning \uc740 \uc774\uc810\uc744 \uc5bb\uc74c"),(0,i.kt)("li",{parentName:"ul"},"\uc704 \uacb0\uacfc\ub85c \ub2e4\uc74c\uc744 \uc5bb\uc74c",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"3B \uc758 Flan-T5-XL : MMLU 52.4% score"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"instruction finetuning \ubc0f UL2 continued pre-training \uc744 \uacb0\ud569\ud55c U-PaLM model \uc0ac\uc6a9"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"instruction \ubc0f UL2 continued pre-training \uc740 model scale \uc744 \uc99d\uac00\uc2dc\ud0a4\uc9c0 \uc54a\uace0 \uc131\ub2a5\uc744 \ud5a5\uc0c1\uc2dc\ud0a4\ub294 compute-efficient method")))),(0,i.kt)("h1",{id:"6-usability-evaluation-of-open-ended-generation"},"6. Usability evaluation of open-ended generation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Figure 8",src:e(49819).Z,width:"523",height:"469"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"figure 9",src:e(50568).Z,width:"907",height:"504"})),(0,i.kt)("p",null,"190\uac1c \uc608\uc81c\ub85c \uad6c\uc131\ub41c \ud3c9\uac00 \uc0dd\uc131"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"5\uac00\uc9c0 \uce74\ud14c\uace0\ub9ac (creativity, reasoning over contexts, complex reasoning, planning \ubc0f explanation) \uac01\uac01 20\uac1c question \ud3ec\ud568",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},'60\uac1c examples (complex reasoning, planning \ubc0f explanation) \uc5d0\ub294 CoT \uad6c\ubb38 (e.g. "let\'s think step-by-step") \uc0dd\uc131\ud558\uc5ec CoT zero-shot \uac00\ub2a5 \uc5ec\ubd80 \ud3c9\uac00'),(0,i.kt)("li",{parentName:"ul"},"160\uac1c zero-shot input \uc5d0 instruction finetuning \uc5c6\uc774 \uc798 \uc218\ud589\ub418\ub294 30\uac1c few-shot \uc744 \ud3ec\ud568")))),(0,i.kt)("hr",null),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"temperature sampling \uc740 ",(0,i.kt)("span",{parentName:"li",className:"math math-inline"},(0,i.kt)("span",{parentName:"span",className:"katex"},(0,i.kt)("span",{parentName:"span",className:"katex-mathml"},(0,i.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,i.kt)("semantics",{parentName:"math"},(0,i.kt)("mrow",{parentName:"semantics"},(0,i.kt)("mi",{parentName:"mrow"},"\u03c4"),(0,i.kt)("mo",{parentName:"mrow"},"="),(0,i.kt)("mn",{parentName:"mrow"},"0.7")),(0,i.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"\\tau = 0.7")))),(0,i.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.4306em"}}),(0,i.kt)("span",{parentName:"span",className:"mord mathnormal",style:{marginRight:"0.1132em"}},"\u03c4"),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,i.kt)("span",{parentName:"span",className:"mrel"},"="),(0,i.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,i.kt)("span",{parentName:"span",className:"base"},(0,i.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,i.kt)("span",{parentName:"span",className:"mord"},"0.7")))))," \ub85c \uc124\uc815\ud558\uc5ec 5\uac1c\uc758 response \ub97c \ub79c\ub364\uc73c\ub85c \uc120\ud0dd"),(0,i.kt)("li",{parentName:"ol"},"length normalization \uc5c6\uc774 log probability score \ub85c rank \ub9e4\uae40"),(0,i.kt)("li",{parentName:"ol"},"score \uc808\ubc18 \uc704\ub85c\ub9cc \uc120\ud0dd\ud558\ub294 filtering step \ud6c4, best score \uc120\ud0dd",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc774 \ub2e8\uacc4\ub85c, \uc6d0\uce58 \uc54a\ub294 \ubc18\ubcf5 \uc0dd\uc131\uc744 \uc81c\uac70"),(0,i.kt)("li",{parentName:"ul"},"\uc608\ub85c 5\uac1c\uc758 \uc0dd\uc131\uc758 log probability \uac00 -20 \uc774\uba74, -3 \uc740 \ubc18\ubcf5 \uc0dd\uc131\uc77c \ud655\ub960\uc774 \ub192\uc544 \uc81c\uac70")))),(0,i.kt)("hr",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uacb0\uacfc, \ud3c9\uac00\uc790\ub4e4\uc740 PaLM \ubc0f Flan-PaLM \uc758 190\uac1c examples \uc5d0 \ub300\ud574, Fla-PaLM \uc0dd\uc131\uc774 79% \uc758 \uc120\ud638\ub3c4\ub97c \ubcf4\uc784"),(0,i.kt)("li",{parentName:"ul"},"\ubaa8\ub4e0 zero-shot \uc5d0 \ub300\ud574\uc120 Flan-PaLM \uc774 \ud070 \ud3ed\uc73c\ub85c \uc120\ud638\ub3c4\uac00 \ub192\uc74c"),(0,i.kt)("li",{parentName:"ul"},"CoT \uad6c\ubb38\uc744 \uc0ac\uc6a9\ud55c \uacbd\uc6b0, Flan-PaLM \uc774 10% \uc815\ub3c4 \uc99d\uac00"),(0,i.kt)("li",{parentName:"ul"},"few-shot \uc758 \uacbd\uc6b0, \ube44\uad50\ud560\ub9cc\ud55c \uc131\ub2a5\uc740 \uc5c6\uc5c8\ub2e4.")),(0,i.kt)("hr",null),(0,i.kt)("p",null,"instruction finetuning \ub41c \ubaa8\ub378\uc774 open-ended zero-shot input \uc5d0 \ub354 \uc88b\uc740 \uc751\ub2f5\uc744 \ud560 \uc218 \uc788\ub294 \ub2a5\ub825\uc740 ","[Training language models to follow instructions with human feedback, InstructGPT]"," \uc5d0\uc11c finetuning LM \uc774 human feedback \uc73c\ub85c \uac15\ud654\ud559\uc2b5\ud558\uc5ec human evaluation \uc744 \uac1c\uc120\uc2dc\ud0a4\ub294 \uac83\uacfc \uc77c\uad00\uc131 \uc788\ub2e4."),(0,i.kt)("p",null,"\ub610\ud55c PaLM \uc758 \uc0dd\uc131\uc744 \ubcf4\uba74, pretraining on next-token prediction objective \ub9cc\uc73c\ub85c \uac15\ub825\ud55c \uc131\ub2a5\uc744 \ubcf4\uc774\uc9c0\ub9cc \uc88b\uc740 zero-shot \uc744 \ucda9\ubd84\ud788 \ud65c\uc6a9\ud558\uc9c0 \ubabb\ud568\uc744 \ubcfc \uc218 \uc788\ub2e4."),(0,i.kt)("p",null,"PaLM \uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc9c4 \ubd88\ud544\uc694\ud55c \ud589\ub3d9\uc740 \ub2e4\uc74c\uc744 \ud3ec\ud568\ud55c\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\uc9c8\ubb38\uc5d0 \ub2f5\ubcc0\ud558\ub294 \ub300\uc2e0 \uad00\ub828\ub41c \ud14d\uc2a4\ud2b8 \uacc4\uc18d \uc0dd\uc131"),(0,i.kt)("li",{parentName:"ul"},"\uc785\ub825 \uc9c8\ubb38\uc744 \uc57d\uac04 \uc218\uc815\ud558\uc5ec \ubc18\ubcf5"),(0,i.kt)("li",{parentName:"ul"},"\ud14d\uc2a4\ud2b8 \uc0dd\uc131\uc744 \uba48\ucd94\ub294 \uc2dc\uc810\uc744 \ubaa8\ub984")),(0,i.kt)("h1",{id:"7-discussion"},"7. Discussion"),(0,i.kt)("p",null,"\ubcf8 \uc5f0\uad6c\ub294 instruction finetuning \uc744 \ud655\uc7a5"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"finetuning task \uc218 \ud655\uc7a5"),(0,i.kt)("li",{parentName:"ol"},"\ubaa8\ub378 \uc0ac\uc774\uc988 \ud655\uc7a5"),(0,i.kt)("li",{parentName:"ol"},"CoT \ub370\uc774\ud130\uc5d0 finetuning")),(0,i.kt)("p",null,"instruction-finetuned model \uacb0\uacfc few-shot, zero-shot \ubc0f CoT \ub4f1 \uc804\uc5ed\uc5d0 \uc131\ub2a5 \ud5a5\uc0c1"),(0,i.kt)("p",null,"\ub2e4\uc74c\uc740 \ub17c\ubb38 \uc694\uc57d\uc774\ub2e4."),(0,i.kt)("h2",{id:"scaling-curves-for-instruction-finetuning"},"Scaling curves for instruction finetuning"),(0,i.kt)("p",null,"instruction finetuning \uc758 \ud575\uc2ec \ud0a4\ub294 \ubaa8\ub378 \uc0ac\uc774\uc988 \ubc0f finetuning task \uc218 \ud655\uc7a5\uc774 \uc131\ub2a5 \ud5a5\uc0c1\uc73c\ub85c \uc774\uc5b4\uc9c4\ub2e4\ub294 \uac83"),(0,i.kt)("p",null,"\uc800\uc790\ub294 scaling curve \ub97c \uadf8\ub838\uc744 \ub54c, \ubaa8\ub378 \uc0ac\uc774\uc988 \ubc0f task \uc218\ub97c \ubaa8\ub450 \ud655\uc7a5\ud558\uba74 \uacc4\uc18d \uc131\ub2a5\uc774 \ud5a5\uc0c1\ub420 \uac83\uc774\ub77c \uc608\uc0c1 \ud588\uc9c0\ub9cc, \uc55e\uc11c 282 task \uc640 1,836 task \uac00 \ud070 \ucc28\uc774\uac00 \uc5c6\ub294 \uac83\uc73c\ub85c \ubcf4\uc544, \ub204\uc801 \uc218\ub97c \ub354\ud560 \uc218\ub85d \uc774\ub4dd\uc774 \uc904\uc5b4\ub4dc\ub294 \uacbd\ud5a5\uc774 \uc788\ub2e4.  "),(0,i.kt)("p",null,"instruction finetuning \uc744 \ud558\uc9c0 \uc54a\uc740 \ubaa8\ub378 \ub300\ube44\ud558\uc5ec \uc218\ud589\ud55c \ubaa8\ub378\uc740 \uac1c\uc120 \ud3ed\uc774 \uac10\uc18c\ud558\uc9c0 \uc54a\ub294 \uac83\uc73c\ub85c \ubcf4\uc544 \uc758\ubbf8\uc788\uc740 \uc5ed\ud560\uc744 \uacc4\uc18d \ud560 \uac83\uc73c\ub85c \ubcf4\uc784."),(0,i.kt)("h2",{id:"cot-finetuning-is-critical-for-reasoning-abilities"},"CoT finetuning is critical for reasoning abilities"),(0,i.kt)("p",null,"CoT finetuning \uc740 \ucd94\ub860 \ub2a5\ub825\uc5d0 \uc911\uc694\ud55c\ub370, \uc774\uc804 \uc5f0\uad6c\uc5d0\uc120 unseen non-CoT task \uc5d0 \ub300\ud55c non-CoT finetuning \uc774 \uc131\ub2a5 \ud5a5\uc0c1\ub418\ub294 \uac83\uc744 \ubcf4\uc600\uc9c0\ub9cc, \ubcf8 \ub17c\ubb38\uc5d0\uc120 \uc774\ub85c \uc778\ud574 CoT task \uc5d0 \uc131\ub2a5 \uc800\ud558\uac00 \ubc1c\uc0dd\ud558\ub294 \uac83\uc744 \ubc1c\uacac"),(0,i.kt)("p",null,"\ud574\uacb0\ucc45\uc73c\ub85c non-Cot \ubc0f CoT \ub370\uc774\ud130\uc5d0 jointly finetuning \uc744 \uc218\ud589"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"non-CoT \uc131\ub2a5\uc744 \uc720\uc9c0\ud558\uba70 \ub354 \ub098\uc740 CoT \uc131\ub2a5\uc744 \uac00\ub2a5\ucf00 \ud568"),(0,i.kt)("li",{parentName:"ul"},"\ud070 \ubaa8\ub378\uc5d0 \ub300\ud55c CoT finetuning \uc774 held-out task \uc5d0\uc11c\uc758 \uc131\ub2a5\uc744 \uac1c\uc120\ud558\uba70 non-CoT \uc791\uc5c5\uc758 \uc131\ub2a5 \ud5a5\uc0c1 \uc720\uc9c0")),(0,i.kt)("h2",{id:"instruction-finetuning-generalizes-across-models"},"Instruction finetuning generalizes across models"),(0,i.kt)("p",null,"\ub2e4\uc591\ud55c \ubaa8\ub378 (decoder-only, encoder-decoder), \uc0ac\uc774\uc988 (T5-80M ~ PaLM-540B) \ubc0f pre-training objectives (causal LM, span corruption \ubc0f prefix LM + span corruption)\uc5d0 instruction finetuning \uc744 \uc801\uc6a9\ud558\uc5ec, \uc77c\ubc18\ud654\ub97c \uad00\ucc30"),(0,i.kt)("p",null,"\uc774\ub294 decoder-only \ubc0f encoder-decoder \uc5d0 \ud6a8\uacfc\uc801\uc784\uc744 \ubcf4\uc5ec\uc90c."),(0,i.kt)("p",null,"\ub610\ud55c instruction finetuning \uc774 UL2R \uacfc \uacb0\ud569\ud558\uc5ec \uac15\ub825\ud55c \ubaa8\ub378 (Flan-U-PaLM)\uc744 \ub9cc\ub4dc\ub294 \ub370 \uc798 \uacb0\ud569\ub418\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90c"),(0,i.kt)("h2",{id:"instruction-finetuning-improves-usability-and-mitigates-some-potential-harms"},"Instruction finetuning improves usability and mitigates some potential harms"),(0,i.kt)("p",null,"pre-trained checkpoint \uc9c1\uc811\uc0ac\uc6a9\ud558\uba74 non-experts \uc5d0 challeng"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"next token prediction objective \ub9cc\uc73c\ub85c \uc5b8\uc81c \uc0dd\uc131\uc744 \uba48\ucd9c\uc9c0 \ubaa8\ub984"),(0,i.kt)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uacc4\uc18d \uc0dd\uc131\ud558\ub294 \uc2e4\uc218\ub97c \uc800\uc9c0\ub984")),(0,i.kt)("p",null,"Flan-PaLM \ucd9c\ub825\uc740 human evaluation \uc5d0\uc11c \uc0c1\ub2f9\ud55c \uacb0\uacfc\ub97c \ubcf4\uc784 (complex reasoning, planning \ub4f1\uc758 CoT)."),(0,i.kt)("p",null,"\uc720\ud574\ud55c \uc5b8\uc5b4 \ud53c\ud574\ub97c \uce21\uc815\ud558\ub294 \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c\ub3c4 PaLM \ubcf4\ub2e4 \uc6b0\uc218\ud55c \uacb0\uacfc\ub97c \ubcf4\uc784"),(0,i.kt)("p",null,"\uc774\ub97c \ud1b5\ud574 instruction finetuning \uc774 \uc778\uac04\uc758 \uc120\ud638\uc640 \uc77c\uce58\ud558\ub294 \ucd9c\ub825\uc744 \uc0dd\uc131\ud558\ub294 \uac83\uc744 \ubc1c\uacac"),(0,i.kt)("h2",{id:"instruction-finetuning-is-relatively-compute-efficient"},"Instruction finetuning is relatively compute-efficient"),(0,i.kt)("p",null,"LM \ud06c\uae30 \ud655\uc7a5\uc740 \uc131\ub2a5 \ud5a5\uc0c1\uc5d0 \uc2e0\ub8b0\uc801\uc774\uc9c0\ub9cc, \uc0c1\ub2f9\ud55c \uacc4\uc0b0\ub7c9\uc774 \ud544\uc694"),(0,i.kt)("p",null,"instruction finetuning \uc740 \uc0c1\ub300\uc801\uc73c\ub85c \uc801\uc740 \uc591\uc758 \ucef4\ud4e8\ud305\uc73c\ub85c \uc131\ub2a5\uc744 \uac1c\uc120\uc2dc\ud0a8\ub2e4."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PaLM 540B \uc758 \uacbd\uc6b0, instruction finetuning \uc740 pre-training \uc758 0.2% \ub9cc \ud544\uc694, \uc804\ubc18\uc5d0 \uac78\uccd0 \ud3c9\uade0 9.4% \ud5a5\uc0c1"),(0,i.kt)("li",{parentName:"ul"},"instruction finetuning \uc740 \uc791\uc740 \ubaa8\ub378\ub85c\ub3c4 \uc6b0\uc218\ud55c \uc131\ub2a5\uc744 \ub0c4")),(0,i.kt)("h1",{id:"9-conclusions"},"9. Conclusions"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"instruction finetuning")," \uc73c\ub85c \ud655\uc7a5\ud558\uc5ec ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Flan-PaLM"))," \uc744 \uc744 \ud6c8\ub828"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"540B parameter \ub85c \ud655\uc7a5"),(0,i.kt)("li",{parentName:"ol"},"1.8K finetuning task \ub85c \ud655\uc7a5"),(0,i.kt)("li",{parentName:"ol"},"chain-of-thought (CoT) \ud3ec\ud568")),(0,i.kt)("p",null,"\uc2e4\ud5d8 \uacb0\uacfc \ubaa8\ub378 \uc131\ub2a5\uc774 \ud06c\uac8c \ud5a5\uc0c1"),(0,i.kt)("p",null,"\uc774\uc804 \uc5f0\uad6c\uc5d0\uc120 instruction finetuning \uc774 CoT task \uc5d0 \uc131\ub2a5 \uc800\ud558\ub97c \uc77c\uc73c\ud0a4\uc9c0\ub9cc, CoT \ub97c \ud3ec\ud568\ud558\uc5ec jointly finetuning \ud55c \uacb0\uacfc CoT \ubc0f \uc804\uccb4 \ud3c9\uac00\uc5d0 \uc131\ub2a5 \ud5a5\uc0c1"))}m.isMDXComponent=!0},76424:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-1-b421646bc4dac3dd22135ee7a3fc0c93.png"},74891:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-10-87718d4133988e329991f5e8ff96d518.png"},28191:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-11-072af3283eb76530bc38676940dd78cc.png"},51442:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-12-645f840bd97c584b7fa2cf311d14e7ae.png"},49819:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-13-6f2a53818f4d84e18438a4ac4c873f60.png"},50568:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-14-a96b1f1039ae4c8dbb42864d728bfdc1.png"},21554:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-2-74ea7200a0878d84841441d2bdd2b674.png"},81293:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-3-237b6dd87369399fbd82ba6e6ae53eef.png"},29075:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-4-91048c8935de161ab5d738d3f59e2daa.png"},17575:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-5-e7e48c6d3b77c5008254d1697a55dae3.png"},6092:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-6-055dddf8b00be05de464f90d556b16e7.png"},84426:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-7-96503958db11881caaa7d859adcc68ee.png"},53223:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-8-f6236678314cc0dfeed74d45ea966eb6.png"},22018:(t,n,e)=>{e.d(n,{Z:()=>a});const a=e.p+"assets/images/image-9-97c25cf35bee04b4c1a4f80563f51c71.png"}}]);