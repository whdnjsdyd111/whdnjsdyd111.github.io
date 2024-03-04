"use strict";(self.webpackChunkwyj_lab=self.webpackChunkwyj_lab||[]).push([[5304],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),u=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=u(t.components);return n.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),s=u(a),c=r,g=s["".concat(p,".").concat(c)]||s[c]||d[c]||o;return a?n.createElement(g,l(l({ref:e},m),{},{components:a})):n.createElement(g,l({ref:e},m))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[s]="string"==typeof t?t:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},66802:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const o={slug:"PromptDA",title:"PromptDA : Label-guided Data Augmentation for Prompt-based Few Shot Learners",tags:["PEFT","prompt tuning","soft prompt","data augmentation"]},l=void 0,i={unversionedId:"Paper/NLP/Augmentation/2023-05-PromptDA",id:"Paper/NLP/Augmentation/2023-05-PromptDA",title:"PromptDA : Label-guided Data Augmentation for Prompt-based Few Shot Learners",description:"\ub17c\ubb38 \ubc0f \uc774\ubbf8\uc9c0 \ucd9c\ucc98 :",source:"@site/docs/Paper/NLP/Augmentation/2023-05-PromptDA.md",sourceDirName:"Paper/NLP/Augmentation",slug:"/Paper/NLP/Augmentation/PromptDA",permalink:"/docs/Paper/NLP/Augmentation/PromptDA",draft:!1,editUrl:"https://github.com/whdnjsdyd111/whdnjsdyd111.github.io/tree/master/docs/docs/Paper/NLP/Augmentation/2023-05-PromptDA.md",tags:[{label:"PEFT",permalink:"/docs/tags/peft"},{label:"prompt tuning",permalink:"/docs/tags/prompt-tuning"},{label:"soft prompt",permalink:"/docs/tags/soft-prompt"},{label:"data augmentation",permalink:"/docs/tags/data-augmentation"}],version:"current",frontMatter:{slug:"PromptDA",title:"PromptDA : Label-guided Data Augmentation for Prompt-based Few Shot Learners",tags:["PEFT","prompt tuning","soft prompt","data augmentation"]},sidebar:"tutorialSidebar",previous:{title:"Prismer: A Vision-Language Model with An Esemble of Experts",permalink:"/docs/Paper/Computer Vision/Vision-Language/Prismer"},next:{title:"Attention Is All You Need",permalink:"/docs/Paper/NLP/Model/Transformer"}},p={},u=[],m={toc:u},s="wrapper";function d(t){let{components:e,...a}=t;return(0,r.kt)(s,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ub17c\ubb38 \ubc0f \uc774\ubbf8\uc9c0 \ucd9c\ucc98 : ",(0,r.kt)("a",{parentName:"p",href:"https://aclanthology.org/2023.eacl-main.41.pdf"},"https://aclanthology.org/2023.eacl-main.41.pdf")),(0,r.kt)("h1",{id:"abstract"},"Abstract"),(0,r.kt)("p",null,"\ubcf8 \ub17c\ubb38\uc740 low-resource Natural Language Understanding (NLU) task \uc5d0 \ucd08\uc810\uc744 \ub460,"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prompt"),"-based ",(0,r.kt)("strong",{parentName:"p"},"D"),"ata ",(0,r.kt)("strong",{parentName:"p"},"A"),"ugmentation model (",(0,r.kt)("strong",{parentName:"p"},"promptDA"),") \ub97c \uc81c\uc548"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"frozen Pre-trained Language Model (PLMs) \uc5d0 small-sacle ",(0,r.kt)("em",{parentName:"li"},"Soft Prompt")," (\uc608; trainable vector) \ub9cc \ud6c8\ub828"),(0,r.kt)("li",{parentName:"ul"},"\uc0ac\ub78c\uc774 ",(0,r.kt)("em",{parentName:"li"},"unlabeled in-domain data")," \uc744 \uc218\uc9d1\ud558\ub294 \uc218\uace0\ub97c \ub35c\uace0 \uc0dd\uc131\ub41c \uc778\uacf5 \ub370\uc774\ud130\uc758 \uc9c8\uc744 \uc720\uc9c0"),(0,r.kt)("li",{parentName:"ul"},"PromptDA \ub294 \ub450 \uac00\uc9c0 \uce21\uba74\uc73c\ub85c \uc778\uacf5 \ub370\uc774\ud130 \uc0dd\uc131\ud558\uba70 NLU \ubaa8\ub378\ub85c low-quality data \ud544\ud130\ub9c1"),(0,r.kt)("li",{parentName:"ul"},"\ub124 \uac00\uc9c0 \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c \uc2e4\ud5d8\ud558\uc5ec, ",(0,r.kt)("em",{parentName:"li"},"unlabeled in-domain data")," \ub97c \uc0ac\uc6a9\ud558\ub294 SOTA semi-supervised model \ub97c \ud3ec\ud568\ud55c baselinbe \ubcf4\ub2e4 PromptDA \ub85c \uc0dd\uc131\ub41c \uc778\uacf5 \ub370\uc774\ud130\uac00 \uc131\ub2a5 \ub2a5\uac00"),(0,r.kt)("li",{parentName:"ul"},"PromptDA \uc758 \uc778\uacf5 \ub370\uc774\ud130\ub294 ",(0,r.kt)("em",{parentName:"li"},"unlabeled in-domain data")," \uc640\ub3c4 \uc0c1\ud638\ubcf4\uc644\uc801\uc774\ub2e4.")),(0,r.kt)("p",null,"\uacb0\uacfc\uc801\uc73c\ub85c NLU \ubaa8\ub378\uc740 \uc778\uacf5 \ub370\uc774\ud130\uc640 \uacb0\ud569\ud558\uc5ec \ub354\uc6b1 \ud5a5\uc0c1\ub418\uc5c8\ub2e4."),(0,r.kt)("h1",{id:"1-introduction"},"1. Introduction"),(0,r.kt)("p",null,"Deep neural networks \ub294 SOTA \uc131\ub2a5 \ub2ec\uc131\uc744 \uc704\ud574\uc120 large-scale high-quality labeled training data \uac00 \ud544\uc694\ud558\uc9c0\ub9cc, \ub9ce\uc740 \uc0c1\ud669\uc5d0\uc11c labeled data \uad6c\uc131\uc740 \uc5b4\ub835\ub2e4."),(0,r.kt)("p",null,"\ubcf8 \ub17c\ubb38\uc740 sentence classification \ubc0f sequence labelling task \ub97c \ud3ec\ud568\ud55c low-resource NLU task \ub97c \uc5f0\uad6c"),(0,r.kt)("p",null,'\uc774\uc804 \uc5f0\uad6c\ub4e4\uc740 NLU model \ud559\uc2b5\uc744 \uc704\ud574 \ucd94\uac00\uc801\uc778 "labeled data" \ub97c \ubcf4\ud1b5 \uc0dd\uc131\ud55c\ub2e4.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Wang et al (2021a) : unlabeled in-domain data \ub85c\ubd80\ud130 ",(0,r.kt)("em",{parentName:"li"},"pseudo labelled training data")," \uc0dd\uc131\uc744 \uc704\ud574 ",(0,r.kt)("em",{parentName:"li"},"self-training")),(0,r.kt)("li",{parentName:"ul"},"Xu et al (2021) : general corpus \ub85c\ubd80\ud130 domain-specific unlabeled data \ucd94\ucd9c"),(0,r.kt)("li",{parentName:"ul"},"Wei and Zou (2019); Dai and Adel (2020) : \ub79c\ub364 \ub3d9\uc758\uc5b4 \uad50\uccb4 \uac19\uc740 automatic heuristic rules \uc744 \uc0ac\uc6a9\ud558\uc5ec small training data \ud655\uc7a5")),(0,r.kt)("p",null,"\ud558\uc9c0\ub9cc \uc704 \uacfc\uc815\uc740 \ubb38\ubc95\uc801\uc774\ub098 \uc758\ubbf8\uc801\uc73c\ub85c \uc798\ubabb\ub41c \ub370\uc774\ud130\uac00 \uc0dd\uc131\ub418\uc5b4 \ud14d\uc2a4\ud2b8\ub97c \uc65c\uace1\ud560 \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"\uc704 \ub51c\ub808\ub9c8\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574, low-resource setting \uc5d0\uc11c data augmentation \uc744 \uc704\ud574 LM \ubc0f PLMs \uc5d0 \uc758\uc9c0\ud558\ub294 \uae30\uc874 \uc5f0\uad6c\ub3c4 \uc788\ub2e4."),(0,r.kt)("p",null,"labeled data \uac00 \uc8fc\uc5b4\uc9c0\uba74, \uc0ac\ub78c\uc758 \ub178\ub825 \uc5c6\uc774 PLMs \ub97c fine-tuning \ud558\uc5ec \uc0c8\ub85c\uc6b4 \uc778\uacf5 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc800\uc790\ub294 small training data (100 sample \ubbf8\ub9cc)\uc5d0\uc11c \uc9c1\uc811 all parameter fine-tuning\uc740 over-fitting \uc744 \uc77c\uc73c\ud0ac \uc218 \uc788\uc73c\uba70, \ub2e8\uc21c\ud788 instance \ub97c \uae30\uc5b5\ud560 \uc218 \uc788\ub2e4\uace0 \uc8fc\uc7a5. \uacb0\uacfc\uc801\uc73c\ub85c \uc778\uacf5 \ub370\uc774\ud130\ub294 original instance \uc640 \uc720\uc0ac\ud560 \uc218 \uc788\uc73c\uba70 NLU model \uc5d0 new training signal \uc744 \uc81c\uacf5\ud560 \uc218 \uc5c6\ub2e4."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\ucd5c\uadfc prompt-tuning \uc774 \uc81c\uc548\ub418\uc5b4, \uc804\uccb4 \ubaa8\ub378 \ub300\uc2e0 ",(0,r.kt)("em",{parentName:"p"},"soft prompt")," (\uc989, PLMs input \uc5d0 prepended continuous vectors) \uc5d0\ub9cc back-propagate \ud55c\ub2e4."),(0,r.kt)("p",null,"\uc774\ub294 full model tuning \uacfc competitive \ud558\uba74\uc11c\ub3c4 parameter \ub97c \uc0c1\ub2f9\ud788 \uc904\uc77c \uc218 \uc788\ub2e4."),(0,r.kt)("p",null,"\ub530\ub77c\uc11c, prompt tuning \uc740 low-resource generative fine-tuning \uc758 over-fitting \uc774\uc288\ub97c \ud53c\ud558\uae30\uc5d0 \uc801\ud569\ud558\ub2e4."),(0,r.kt)("p",null,"\uc774\uc5d0 \uc601\uac10\uc744 \ubc1b\uc544 \uc800\uc790\ub294 ",(0,r.kt)("strong",{parentName:"p"},"Prompt"),"-based ",(0,r.kt)("strong",{parentName:"p"},"D"),"ata ",(0,r.kt)("strong",{parentName:"p"},"A"),"ugmentation model (",(0,r.kt)("strong",{parentName:"p"},"PromptDA"),") \uc81c\uc548"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"pmls \uc804\uccb4\ub97c \uace0\uc815\ud55c \ucc44, small labeled training data \uc5d0 fine-tuning \ud560 \ub54c \ucd94\uac00\uc801\uc778 soft prompts \ub9cc tuning",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"soft prompt initialization \uc774 fine-tuning \uc5d0 \uc0c1\ub2f9\ud788 \uc601\ud5a5\uc744 \uc8fc\ub294 \uac83\uc744 \uad00\ucc30. \ud2b9\ud788 low-resource situation"))),(0,r.kt)("li",{parentName:"ul"},"data augmentation task \ub97c \uc704\ud55c prompt parameter \ub97c \ub354 \uc798 \ucd08\uae30\ud654\ud558\uae30 \uc704\ud574, PLMs \uc758 pre-training corpus")),(0,r.kt)("p",null,"\ub370\uc774\ud130 \uc99d\uac15 \uc791\uc5c5\uc744 \uc704\ud574 \ud504\ub86c\ud504\ud2b8 \ub9e4\uac1c\ubcc0\uc218\ub97c \ub354 \uc798 \ucd08\uae30\ud654\ud558\uae30 \uc704\ud574, \uc6b0\ub9ac\ub294 PLMs\uc758 \uc0ac\uc804 \ud6c8\ub828 \ub9d0\ubb49\uce58\uc5d0\uc11c \ud504\ub86c\ud504\ud2b8 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc9c1\uc811 \uc0ac\uc804 \ud6c8\ub828\ud558\ub294 \uc791\uc5c5\uc5d0 \ub300\ud574 \uacfc\uc81c \uc911\ub9bd\uc801\uc778 \ub3d9\uc758\uc5b4 \ud0a4\uc6cc\ub4dc\uc5d0\uc11c \ubb38\uc7a5 \uc0ac\uc804 \ud6c8\ub828 \uc791\uc5c5\uc744 \uc81c\uc548\ud569\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \ubd80\ubd84 \uc870\uac01 \uc815\ubcf4(\uc608: \ud0a4\uc6cc\ub4dc)\uc5d0\uc11c \uc804\uccb4 \ud6c8\ub828 \uc0d8\ud50c\uc744 \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc744 \ubaa8\ubc29\ud569\ub2c8\ub2e4. \uc774\uc804 \uc5f0\uad6c(Ding et al., 2020; Yang et al., 2020; Anaby-Tavor et al., 2020)\uc640 \uc720\uc0ac\ud558\uac8c, \uc6b0\ub9ac\ub294 \ucd9c\ub825 \ud0dc\uadf8\uc5d0 \uc870\uac74\uc744 \uac78\uc5b4 \uc644\uc804\ud55c \ud569\uc131 \ub370\uc774\ud130\ub97c \uc0dd\uc131\ud558\ub3c4\ub85d PLMs\ub97c \uc138\ubc00 \uc870\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub97c \ucd9c\ub825 \ubdf0 \uc0dd\uc131(Output View Generation)\uc774\ub77c\uace0 \ud569\ub2c8\ub2e4. \uc0dd\uc131\ub41c \uc0d8\ud50c\uc758 \ub2e4\uc591\uc131\uc744 \uc99d\uac00\uc2dc\ud0a4\uae30 \uc704\ud574, \uc6b0\ub9ac\ub294 \uc785\ub825 \ubdf0 \uc0dd\uc131(Input View Generation)\uc774\ub77c\ub294 \ub610 \ub2e4\ub978 \uc138\ubc00 \uc870\uc815 \uc0dd\uc131 \uc791\uc5c5\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc740 \uc0d8\ud50c\uc5d0\uc11c \ucd94\ucd9c\ub41c \ud0a4\uc6cc\ub4dc\ub97c \uc785\ub825\uc73c\ub85c, \uc0d8\ud50c\uc744 \ucd9c\ub825\uc73c\ub85c \ucde8\ud569\ub2c8\ub2e4. \uc791\uc740 \ud6c8\ub828 \ub370\uc774\ud130\ub85c\ubd80\ud130 \ud6c8\ub828\ub41c NLG \ubaa8\ub378\uc740 \uc5ec\uc804\ud788 \ub0ae\uc740 \ud488\uc9c8\uc758 \uc0d8\ud50c\uc744 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \uac00\ub2a5\uc131\uc774 \uc788\uc73c\ubbc0\ub85c, \uc0dd\uc131\ub41c \uc0d8\ud50c\uc744 \ud544\ud130\ub9c1\ud558\uae30 \uc704\ud574 NLU \uc77c\uad00\uc131 \ud544\ud130\ub9c1(Anaby-Tavor et al., 2020)\uc744 \ud65c\uc6a9\ud569\ub2c8\ub2e4.\n\uc6b0\ub9ac\ub294 \ub124 \uac00\uc9c0 \ubca4\uce58\ub9c8\ud06c\uc5d0\uc11c \uc2e4\ud5d8\uc744 \uc2e4\uc2dc\ud588\uc2b5\ub2c8\ub2e4: \uc2dc\ud000\uc2a4 \ub77c\ubca8\ub9c1 \uc791\uc5c5 CoNLL03 (Tjong Kim Sang and De Meulder, 2003) \ubc0f Wikiann (Pan et al., 2017), \ubb38\uc7a5 \ubd84\ub958 \uc791\uc5c5 SST-2 (Socher et al., 2013) \ubc0f RT (Pang and Lee, 2005). \uc2e4\ud5d8 \uacb0\uacfc, PromDA\ub85c\ubd80\ud130 \ud569\uc131\ub41c \ub370\uc774\ud130\ub85c \ud6c8\ub828\ub41c NLU \ubaa8\ub378\uc774 \uc77c\ub828\uc758 \uacbd\uc7c1\ub825 \uc788\ub294 \uae30\uc900 \ubaa8\ub378\uc744 \uc77c\uad00\ub418\uac8c \ub2a5\uac00\ud55c\ub2e4\ub294 \uac83\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \uc774\ub294 \uc2dc\ud000\uc2a4 \ub77c\ubca8\ub9c1 \uc791\uc5c5\uc5d0\uc11c \ucd5c\ucca8\ub2e8 \uc900\uc9c0\ub3c4\ud615 NLU \ubaa8\ub378 MetaST (Wang et al., 2021a)\uc744 \ud3ec\ud568\ud569\ub2c8\ub2e4. \uac8c\ub2e4\uac00, PromDA\ub85c\ubd80\ud130\uc758 \ud569\uc131 \ub370\uc774\ud130\uac00 \ub808\uc774\ube14\uc774 \uc5c6\ub294 \ub3c4\uba54\uc778 \ub370\uc774\ud130\uc640\ub3c4 \uc0c1\ud638 \ubcf4\uc644\uc801\uc784\uc744 \ubc1c\uacac\ud588\uc2b5\ub2c8\ub2e4. \ub450 \uac00\uc9c0 \ub370\uc774\ud130\ub97c \uacb0\ud569\ud558\uba74 NLU \ubaa8\ub378\uc758 \uc131\ub2a5\uc744 \ub354\uc6b1 \ud5a5\uc0c1\uc2dc\ud0ac \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub9c8\uc9c0\ub9c9\uc73c\ub85c, \ub2e4\uc591\uc131 \ubd84\uc11d \ubc0f \uc0ac\ub840 \uc5f0\uad6c\ub97c \uc2e4\uc2dc\ud558\uc5ec PromDA\ub85c\ubd80\ud130\uc758 \ud569\uc131 \ub370\uc774\ud130 \ud488\uc9c8\uc744 \ub354 \ud655\uc778\ud569\ub2c8\ub2e4. \uc800\ud76c\uc758 \uc18c\uc2a4 \ucf54\ub4dc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/GaryYufei/PromDA"},"https://github.com/GaryYufei/PromDA")," \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);