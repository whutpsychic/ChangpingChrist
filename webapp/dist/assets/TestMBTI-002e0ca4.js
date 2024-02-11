import{i as H,d as M,j as b,k as Ue,l as Qe,m as J,e as c,q as j,s as w,v as D,x as He,y as K,z,A as qe,B as we,C as Se,D as je,I as Te,E as fe,G as Ve,H as ve,J as Be,K as Ye,L as Ge,M as Ce,O as We,P as xe,Q as Ze,R as Xe,S as Ie,T as ke,U as et,V as Pe,W as Ee,X as Oe,Y as tt,Z as nt,$ as ot,a0 as st,a1 as at,F as Ne,a2 as oe,a3 as lt,a4 as $e,a5 as it,a6 as ct,g as Fe,a7 as rt,a8 as ut,a9 as me,aa as dt,ab as ft,ac as vt,ad as Bt,c as xt,w as V,ae as Y,a as t,t as A,af as L,ag as y,u as ht,o as _t,ah as Z,p as mt,b as gt,N as At,_ as yt}from"./index-7ec13598.js";const[ze,ge]=H("action-bar"),De=Symbol(ze),pt={placeholder:Boolean,safeAreaInsetBottom:J};var bt=M({name:ze,props:pt,setup(e,{slots:n}){const o=b(),r=Ue(o,ge),{linkChildren:s}=Qe(De);s();const u=()=>{var x;return c("div",{ref:o,class:[ge(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(x=n.default)==null?void 0:x.call(n)])};return()=>e.placeholder?r(u):u()}});const qt=j(bt);let wt=2e3;const St=()=>++wt,[Tt,ee]=H("loading"),Ct=Array(12).fill(null).map((e,n)=>c("i",{class:ee("line",String(n+1))},null)),It=c("svg",{class:ee("circular"),viewBox:"25 25 50 50"},[c("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),kt={size:K,type:z("circular"),color:String,vertical:Boolean,textSize:K,textColor:String};var Pt=M({name:Tt,props:kt,setup(e,{slots:n}){const o=w(()=>D({color:e.color},He(e.size))),r=()=>{const u=e.type==="spinner"?Ct:It;return c("span",{class:ee("spinner",e.type),style:o.value},[n.icon?n.icon():u])},s=()=>{var u;if(n.default)return c("span",{class:ee("text"),style:{fontSize:qe(e.textSize),color:(u=e.textColor)!=null?u:e.color}},[n.default()])};return()=>{const{type:u,vertical:x}=e;return c("div",{class:ee([u,{vertical:x}]),"aria-live":"polite","aria-busy":!0},[r(),s()])}}});const Et=j(Pt),[Ot,G]=H("button"),Nt=D({},we,{tag:z("button"),text:String,icon:String,type:z("default"),size:z("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:z("button"),loadingSize:K,loadingText:String,loadingType:String,iconPosition:z("left")});var $t=M({name:Ot,props:Nt,emits:["click"],setup(e,{emit:n,slots:o}){const r=Se(),s=()=>o.loading?o.loading():c(Et,{size:e.loadingSize,type:e.loadingType,class:G("loading")},null),u=()=>{if(e.loading)return s();if(o.icon)return c("div",{class:G("icon")},[o.icon()]);if(e.icon)return c(Te,{name:e.icon,class:G("icon"),classPrefix:e.iconPrefix},null)},x=()=>{let B;if(e.loading?B=e.loadingText:B=o.default?o.default():e.text,B)return c("span",{class:G("text")},[B])},v=()=>{const{color:B,plain:m}=e;if(B){const g={color:m?B:"white"};return m||(g.background=B),B.includes("gradient")?g.border=0:g.borderColor=B,g}},C=B=>{e.loading?fe(B):e.disabled||(n("click",B),r())};return()=>{const{tag:B,type:m,size:g,block:k,round:P,plain:F,square:O,loading:I,disabled:f,hairline:_,nativeType:T,iconPosition:q}=e,E=[G([m,g,{plain:F,block:k,round:P,square:O,loading:I,disabled:f,hairline:_}]),{[je]:_}];return c(B,{type:T,class:E,style:v(),disabled:f,onClick:C},{default:()=>[c("div",{class:G("content")},[q==="left"&&u(),x(),q==="right"&&u()])]})}}});const se=j($t),[Ft,zt]=H("action-bar-button"),Dt=D({},we,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var Jt=M({name:Ft,props:Dt,setup(e,{slots:n}){const o=Se(),{parent:r,index:s}=Ve(De),u=w(()=>{if(r){const v=r.children[s.value-1];return!(v&&"isButton"in v)}}),x=w(()=>{if(r){const v=r.children[s.value+1];return!(v&&"isButton"in v)}});return ve({isButton:!0}),()=>{const{type:v,icon:C,text:B,color:m,loading:g,disabled:k}=e;return c(se,{class:zt([v,{last:x.value,first:u.value}]),size:"large",type:v,icon:C,color:m,loading:g,disabled:k,onClick:o},{default:()=>[n.default?n.default():B]})}}});const Ae=j(Jt),he={show:Boolean,zIndex:K,overlay:J,duration:K,teleport:[String,Object],lockScroll:J,lazyRender:J,beforeClose:Function,overlayStyle:Object,overlayClass:Be,transitionAppear:Boolean,closeOnClickOverlay:J},Rt=Object.keys(he);let X=0;const ye="van-overflow-hidden";function Lt(e,n){const o=Ye(),r="01",s="10",u=m=>{o.move(m);const g=o.deltaY.value>0?s:r,k=Ze(m.target,e.value),{scrollHeight:P,offsetHeight:F,scrollTop:O}=k;let I="11";O===0?I=F>=P?"00":"01":O+F>=P&&(I="10"),I!=="11"&&o.isVertical()&&!(parseInt(I,2)&parseInt(g,2))&&fe(m,!0)},x=()=>{document.addEventListener("touchstart",o.start),document.addEventListener("touchmove",u,{passive:!1}),X||document.body.classList.add(ye),X++},v=()=>{X&&(document.removeEventListener("touchstart",o.start),document.removeEventListener("touchmove",u),X--,X||document.body.classList.remove(ye))},C=()=>n()&&x(),B=()=>n()&&v();Ge(C),Ce(B),We(B),xe(n,m=>{m?x():v()})}function Je(e){const n=b(!1);return xe(e,o=>{o&&(n.value=o)},{immediate:!0}),o=>()=>n.value?o():null}const pe=()=>{var e;const{scopeId:n}=((e=Xe())==null?void 0:e.vnode)||{};return n?{[n]:""}:null},[Kt,Mt]=H("overlay"),Ut={show:Boolean,zIndex:K,duration:K,className:Be,lockScroll:J,lazyRender:J,customStyle:Object};var Qt=M({name:Kt,props:Ut,setup(e,{slots:n}){const o=b(),r=Je(()=>e.show||!e.lazyRender),s=x=>{e.lockScroll&&fe(x,!0)},u=r(()=>{var x;const v=D(et(e.zIndex),e.customStyle);return Pe(e.duration)&&(v.animationDuration=`${e.duration}s`),Ee(c("div",{ref:o,style:v,class:[Mt(),e.className]},[(x=n.default)==null?void 0:x.call(n)]),[[Oe,e.show]])});return Ie("touchmove",s,{target:o}),()=>c(ke,{name:"van-fade",appear:!0},{default:u})}});const Ht=j(Qt),jt=D({},he,{round:Boolean,position:z("center"),closeIcon:z("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:z("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[Vt,be]=H("popup");var Yt=M({name:Vt,inheritAttrs:!1,props:jt,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:o,slots:r}){let s,u;const x=b(),v=b(),C=Je(()=>e.show||!e.lazyRender),B=w(()=>{const h={zIndex:x.value};if(Pe(e.duration)){const N=e.position==="center"?"animationDuration":"transitionDuration";h[N]=`${e.duration}s`}return h}),m=()=>{s||(s=!0,x.value=e.zIndex!==void 0?+e.zIndex:St(),n("open"))},g=()=>{s&&$e(e.beforeClose,{done(){s=!1,n("close"),n("update:show",!1)}})},k=h=>{n("clickOverlay",h),e.closeOnClickOverlay&&g()},P=()=>{if(e.overlay)return c(Ht,oe({show:e.show,class:e.overlayClass,zIndex:x.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0},pe(),{onClick:k}),{default:r["overlay-content"]})},F=h=>{n("clickCloseIcon",h),g()},O=()=>{if(e.closeable)return c(Te,{role:"button",tabindex:0,name:e.closeIcon,class:[be("close-icon",e.closeIconPosition),it],classPrefix:e.iconPrefix,onClick:F},null)};let I;const f=()=>{I&&clearTimeout(I),I=setTimeout(()=>{n("opened")})},_=()=>n("closed"),T=h=>n("keydown",h),q=C(()=>{var h;const{round:N,position:U,safeAreaInsetTop:Q,safeAreaInsetBottom:W}=e;return Ee(c("div",oe({ref:v,style:B.value,role:"dialog",tabindex:0,class:[be({round:N,[U]:U}),{"van-safe-area-top":Q,"van-safe-area-bottom":W}],onKeydown:T},o,pe()),[(h=r.default)==null?void 0:h.call(r),O()]),[[Oe,e.show]])}),E=()=>{const{position:h,transition:N,transitionAppear:U}=e,Q=h==="center"?"van-fade":`van-popup-slide-${h}`;return c(ke,{name:N||Q,appear:U,onAfterEnter:f,onAfterLeave:_},{default:q})};return xe(()=>e.show,h=>{h&&!s&&(m(),o.tabindex===0&&lt(()=>{var N;(N=v.value)==null||N.focus()})),!h&&s&&(s=!1,n("close"))}),ve({popupRef:v}),Lt(v,()=>e.show&&e.lockScroll),Ie("popstate",()=>{e.closeOnPopstate&&(g(),u=!1)}),tt(()=>{e.show&&m()}),nt(()=>{u&&(n("update:show",!0),u=!1)}),Ce(()=>{e.show&&e.teleport&&(g(),u=!0)}),ot(st,()=>e.show),()=>e.teleport?c(at,{to:e.teleport},{default:()=>[P(),E()]}):c(Ne,null,[P(),E()])}});const Re=j(Yt);function Gt(){const e=Fe({show:!1}),n=s=>{e.show=s},o=s=>{D(e,s,{transitionAppear:!0}),n(!0)},r=()=>n(!1);return ve({open:o,close:r,toggle:n}),{open:o,close:r,state:e,toggle:n}}function Wt(e){const n=ct(e),o=document.createElement("div");return document.body.appendChild(o),{instance:n.mount(o),unmount(){n.unmount(),document.body.removeChild(o)}}}const[Zt,$,te]=H("dialog"),Xt=D({},he,{title:String,theme:String,width:K,message:[String,Function],callback:Function,allowHtml:Boolean,className:Be,transition:z("van-dialog-bounce"),messageAlign:String,closeOnPopstate:J,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:J,closeOnClickOverlay:Boolean}),en=[...Rt,"transition","closeOnPopstate"];var Le=M({name:Zt,props:Xt,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:n,slots:o}){const r=b(),s=Fe({confirm:!1,cancel:!1}),u=f=>n("update:show",f),x=f=>{var _;u(!1),(_=e.callback)==null||_.call(e,f)},v=f=>()=>{e.show&&(n(f),e.beforeClose?(s[f]=!0,$e(e.beforeClose,{args:[f],done(){x(f),s[f]=!1},canceled(){s[f]=!1}})):x(f))},C=v("cancel"),B=v("confirm"),m=rt(f=>{var _,T;if(f.target!==((T=(_=r.value)==null?void 0:_.popupRef)==null?void 0:T.value))return;({Enter:e.showConfirmButton?B:me,Escape:e.showCancelButton?C:me})[f.key](),n("keydown",f)},["enter","esc"]),g=()=>{const f=o.title?o.title():e.title;if(f)return c("div",{class:$("header",{isolated:!e.message&&!o.default})},[f])},k=f=>{const{message:_,allowHtml:T,messageAlign:q}=e,E=$("message",{"has-title":f,[q]:q}),h=dt(_)?_():_;return T&&typeof h=="string"?c("div",{class:E,innerHTML:h},null):c("div",{class:E},[h])},P=()=>{if(o.default)return c("div",{class:$("content")},[o.default()]);const{title:f,message:_,allowHtml:T}=e;if(_){const q=!!(f||o.title);return c("div",{key:T?1:0,class:$("content",{isolated:!q})},[k(q)])}},F=()=>c("div",{class:[vt,$("footer")]},[e.showCancelButton&&c(se,{size:"large",text:e.cancelButtonText||te("cancel"),class:$("cancel"),style:{color:e.cancelButtonColor},loading:s.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&c(se,{size:"large",text:e.confirmButtonText||te("confirm"),class:[$("confirm"),{[ft]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:s.confirm,disabled:e.confirmButtonDisabled,onClick:B},null)]),O=()=>c(qt,{class:$("footer")},{default:()=>[e.showCancelButton&&c(Ae,{type:"warning",text:e.cancelButtonText||te("cancel"),class:$("cancel"),color:e.cancelButtonColor,loading:s.cancel,disabled:e.cancelButtonDisabled,onClick:C},null),e.showConfirmButton&&c(Ae,{type:"danger",text:e.confirmButtonText||te("confirm"),class:$("confirm"),color:e.confirmButtonColor,loading:s.confirm,disabled:e.confirmButtonDisabled,onClick:B},null)]}),I=()=>o.footer?o.footer():e.theme==="round-button"?O():F();return()=>{const{width:f,title:_,theme:T,message:q,className:E}=e;return c(Re,oe({ref:r,role:"dialog",class:[$([T]),E],style:{width:qe(f)},tabindex:0,"aria-labelledby":_||q,onKeydown:m,"onUpdate:show":u},ut(e,en)),{default:()=>[g(),P(),I()]})}}});let de;const tn={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let nn=D({},tn);function on(){({instance:de}=Wt({setup(){const{state:n,toggle:o}=Gt();return()=>c(Le,oe(n,{"onUpdate:show":o}),null)}}))}function sn(e){return Bt?new Promise((n,o)=>{de||on(),de.open(D({},nn,e,{callback:r=>{(r==="confirm"?n:o)(r)}}))}):Promise.resolve(void 0)}const an=e=>sn(D({showCancelButton:!0},e));j(Le);const ne=[{index:1,question:"在平常的宴会中，你通常比较习惯于",A:"和很少的人交谈、聊天，包括陌生人",B:"只和少数人事的人交谈"},{index:2,question:"你比较",A:"喜欢实际的事物多于运用想象力",B:"重视想象来探索事物的意义"},{index:3,question:"你认为何者说的对",A:"太多用想象容易忽略实际",B:"若是生活总是按照常规做事"},{index:4,question:"下列何者影响你较深",A:"做事讲求原则",B:"情感、情绪及人际关系"},{index:5,question:"你比较容易",A:"能以理说服别人，令人无话可说",B:"容易被别人感动"},{index:6,question:"在工作上，你通常喜欢",A:"有一定的期限和适当的进度表",B:"没有一定的时间表，只要能完成就可以"},{index:7,question:"在选择事物时，你比较多是",A:"常谨慎小心的加以选择",B:"容易行动或随当时的心境而定"},{index:8,question:"在一般宴会中，你大多是",A:"很晚才走，二期精神总是不错",B:"较早走，不然会感到精神愈来愈疲惫"},{index:9,question:"你比较容易受哪一种人吸引",A:"感官的、明达的、注重实际的人",B:"富有想象力的人"},{index:10,question:"下列何者比较引起你的兴趣",A:"实际上已经发生的事",B:"将来有可能发生的事"},{index:11,question:"在评断别人时，你比较容易受到何者的支配",A:"原则问题：注重规定与原则",B:"处境问题：看情形办事可因人而异"},{index:12,question:"你处事为人比较倾向",A:"客观、重视目标、对事不对人",B:"重视人际关系，对人不对事"},{index:13,question:"你通常比较",A:"遵守时间、较准时",B:"对时间比较随性"},{index:14,question:"何者令你较觉得苦恼",A:"事情没照进度做完",B:"工作都完成，没有新任务"},{index:15,question:"在参加的社团中，你比较",A:"属于消息灵通人士",B:"不太知道周围发生了什么事情"},{index:16,question:"对于日常事情的处理，你通常喜欢",A:"按照一般人的做法去做",B:"按照自己创新的方法去做"},{index:17,question:"你若写文章，你会",A:"平铺直叙，按事实说、不拐弯抹角",B:"用隐喻或比喻的写法来加强表达"},{index:18,question:"何者比较像你",A:"思想前后一致",B:"和谐的人际关系"},{index:19,question:"你平时比较喜欢",A:"逻辑推理（做理性分析）",B:"价值判断（作情绪选择）"},{index:20,question:"你喜欢让事情",A:"尘埃落定，确定下来",B:"保持弹性，不一定向左或向右"},{index:21,question:"你认为你比较",A:"认真而又决断力",B:"随意而安"},{index:22,question:"在打电话前你",A:"很少先计划要说些什么",B:"常常事先准备并想想要说些什么"},{index:23,question:"一件事实",A:"就是说明事实本身而已",B:"事实背后可以代表某些意义"},{index:24,question:"凭空想象是",A:"有点令人苦恼",B:"相当引人入胜的"},{index:25,question:"你通常是个",A:"头脑相当冷静、清晰的人",B:"十分古道热肠、富感情的人"},{index:26,question:"哪一种情况你认为比较糟糕",A:"不公平、不公义、不公正",B:"残酷无情、无怜悯心、无同情心"},{index:27,question:"你通常希望事情的进行路线",A:"经过仔细的挑选、计划、选择",B:"大概方向即可，不经意的，碰碰运气的"},{index:28,question:"你觉得何者较好",A:"购物时能买到想要的东西",B:"购物时东西多样化，有较多的选择性"},{index:29,question:"你在人群里面",A:"主动找人谈话、主动带出话题",B:"常安静、等着别人找你谈话"},{index:30,question:"你觉得一般人所谓的“常识”",A:"通常是蛮可靠，不太会有问题的",B:"通常是有待商榷、值得怀疑"},{index:31,question:"你觉得自己通常是",A:"有耐心处理固定的工作",B:"对每天固定的工作不太有耐心"},{index:32,question:"在决定某件事情时你比较",A:"依循一定的标准或原则来决定",B:"以个人的喜好与感觉来决定"},{index:33,question:"你认为你比较",A:"坚决果断",B:"温和文雅，平易近人"},{index:34,question:"你认为你自己倾向于",A:"具有组织能力、办事有方法",B:"有调适力及让别人愿意去做事的能力"},{index:35,question:"下列何者会让你比较舒服",A:"事情相当明确，有脉络可循",B:"事情有弹性，有磋商余地"},{index:36,question:"与别人心得、非例常性的交往令你",A:"感到喜欢、兴奋而精力充沛",B:"感到勉强、伤神"},{index:37,question:"你通常是个",A:"比较注重实际事物的人",B:"比较富于幻想的人"},{index:38,question:"你通常比较",A:"注意别人能做什么",B:"注意到别人怎么看一个问题"},{index:39,question:"何者令你比较满意",A:"把整件事情讨论地十分彻底",B:"讨论一件事，能达成共识、彼此和气"},{index:40,question:"你比较受到什么的支配",A:"头脑、理性",B:"心肠、感觉"},{index:41,question:"你比较倾向怎么的工作",A:"有明确的计划、有清楚的契约",B:"没有明确规定、自然地、非正式的"},{index:42,question:"你通常会期望事情",A:"有秩序的、有规则的出现",B:"随机、随性、自由的出现"},{index:43,question:"你认为",A:"朋友可以很多，但交往不必太深入",B:"朋友不必多，但交往要较为深入"},{index:44,question:"你行事为人比较容易",A:"实事求是，就事论事",B:"太快下结论，常与事实有出入"},{index:45,question:"何者你较有兴趣",A:"生产及分配",B:"研究与设计"},{index:46,question:"你认为何者是较大的恭维",A:"你是个非常有逻辑的人",B:"你是个非常富有感情的人"},{index:47,question:"你觉得自己较属于哪种特质",A:"毅然决然、意志坚定不摇动",B:"全心投入、忠实的、充满热忱的"},{index:48,question:"你通常比较倾向于",A:"确定、不随意变更的陈述",B:"提案式的、暂时性、准备性的陈述"},{index:49,question:"你觉得何时比较舒坦",A:"做出正确的判断",B:"让事情自然发展"},{index:50,question:"你通常与陌生人",A:"很容易交谈，可以谈很多",B:"可以交谈，但只说一些话"},{index:51,question:"你比较相信你自己的",A:"经验",B:"预感、第六感"},{index:52,question:"你觉得自己",A:"较为实际、实用甚于发明创造",B:"有发明创造的能力甚于实际应用"},{index:53,question:"哪一种人比较令你欣赏",A:"有清楚理智的人",B:"具有强烈情感的人"},{index:54,question:"你比较倾向于",A:"公平、公义",B:"公平、公义"},{index:55,question:"何者比较像你",A:"确定事情都有安排与计划",B:"随性、船到桥头自然直"},{index:56,question:"在人际关系上大多数的事应该",A:"再协商或谈判",B:"不经意，随遇而安"},{index:57,question:"电话铃响的时候，你会",A:"马上第一个去接",B:"希望别人去接"},{index:58,question:"你认为自己哪一点较值得欣赏",A:"具有强烈的现实感",B:"具有强烈的想象力"},{index:59,question:"你比较容易",A:"注意基本、重要的、原理的事",B:"注意寓意、弦外之音"},{index:60,question:"下列何者是较大的错误",A:"太热情、动感情、多情",B:"太注重客观"},{index:61,question:"你认为自己基本上是一个",A:"硬的、冷静、脚踏实地的人",B:"软的、性情温和的人"},{index:62,question:"你比较喜欢哪一种情景",A:"有计划的、有进度表的",B:"没有计划的、没有进度表"},{index:63,question:"你是个比较将事情",A:"例行化多于幻想、遐想、奇想",B:"于幻想、遐想、奇想多于照例行事"},{index:64,question:"你觉得你比较",A:"较放得开，让人容易接近",B:"较保守，与人有些微隔阂或保持距离"},{index:65,question:"在写作时你比较喜欢",A:"详实不夸张、实实在在地描写",B:"用比喻、象征性、修饰的描写"},{index:66,question:"何者对你而言较容易",A:"运用别人的长处",B:"认同别人的想法"},{index:67,question:"你比较",A:"有清楚的理智",B:"有同情心"},{index:68,question:"你认为何者是较大的过错",A:"不分青红皂白、善恶不分",B:"爱批评别人"},{index:69,question:"你过去的生活比较多",A:"经过计划的事",B:"没有经过计划的事"},{index:70,question:"你是个比较将事情",A:"深思熟虑的人",B:"让事情自生自发的人"},{index:71,question:"你通常",A:"容易表达自己的感受",B:"隐藏自己的感受于内心"},{index:72,question:"你比较倾向于",A:"遵照传统做法",B:"容易在传统外考虑创新"},{index:73,question:"何者比较引起你的开心",A:"细节，见树不见林",B:"整体，见林不见树"},{index:74,question:"与同事人际关系搞不好时你",A:"仍能坚守岗位做自己该做的事",B:"很难专心工作"},{index:75,question:"何者你感到比较容易",A:"做出一个合理的评估",B:"讲出一句适当的安慰话"},{index:76,question:"何者比较像你",A:"集结资料，做出决定",B:"难做决定，因不知何时资料才算足够"},{index:77,question:"你比较倾向",A:"用固定、稳定的方法做工作",B:"用新鲜、创新的方法去做"},{index:78,question:"你比较花多一点的时间去注意",A:"外面的人与事",B:"自己内在的思想与计划"},{index:79,question:"你认为自己常会注意到",A:"桌上的盆栽或墙上新挂的图画",B:"对周围环境的变化不会太敏感"},{index:80,question:"你比较是属于",A:"我稳定、可以长期信任的人",B:"依靠灵感行事的人"},{index:81,question:"你需要做抉择时，下列何者优先",A:"忠实、忠诚、值得信赖",B:"圆通、机敏、圆滑，避免冲突"},{index:82,question:"你说话属于",A:"简洁、扼要、简明、概括的",B:"善表达、表现、富有表情的"},{index:83,question:"你的生活较接近",A:"凡物皆放定位与保持秩序",B:"随意摆放，不拘小节"},{index:84,question:"何者对你而言比较适应",A:"最工作计划、按照计划行事",B:"水来土掩、兵来将挡"},{index:85,question:"你觉得自己比较倾向",A:"外向一些，注意力不会集中太久",B:"内向一些，能长时间只做一件事"},{index:86,question:"你容易",A:"对太复杂的事情感到挫折",B:"容易看出字与符号的意义"},{index:87,question:"系列的动作你很容易做的不错",A:"对于查对、检查之类的事情",B:"容易想出解决事情的方法"},{index:88,question:"何者对你而言是真的",A:"容易被缺乏逻辑的话激怒",B:"对人充满热忱"},{index:89,question:"哪一项比较像你",A:"不太注意自己的言行是否使人感到不舒服",B:"喜欢人甚于事情或点子"},{index:90,question:"你喜欢",A:"规定得很清楚的工作",B:"把不喜欢的事情尽量拖延"},{index:91,question:"你容易处理",A:"按照计划的事情",B:"突然发生、未预期的事情或意外"}],S=e=>(mt("data-v-186cad31"),e=e(),gt(),e),ln=S(()=>t("p",{class:"title"},"MBTI 性格测试",-1)),cn={class:"page-content"},rn=S(()=>t("p",{class:"prehead"},"• 精力支配：外向 E — 内向 I",-1)),un=S(()=>t("p",{class:"prehead"},"• 认识世界：实感 S — 直觉 N",-1)),dn=S(()=>t("p",{class:"prehead"},"• 判断事物：思维 T — 情感 F",-1)),fn=S(()=>t("p",{class:"prehead"},"• 生活态度：判断 J — 知觉 P",-1)),vn=S(()=>t("div",{style:{height:"10px"}},null,-1)),Bn=S(()=>t("p",{class:"description"},"你天生的个性是什么呢?从个性测验中你可以找到一些线索，虽然它没有像梅尔博士的性向测验那样复杂精密，但至少它提供了有用的的工具，使你能开始了解自己的个性。",-1)),xn=S(()=>t("p",{class:"description"},"本测验题以The Keirsey & Johnson Temperament Sorter(柯西与强生个性性向量表)为主，加上Celebrate my Soul一书作者Dr. Reginald Johnson上课讲义与笔者所设计的题目综合编着而成。",-1)),hn={class:"operator"},_n={class:"main-body"},mn={class:"question-body"},gn=S(()=>t("div",{style:{height:"40px"}},null,-1)),An={class:"nextbtn"},yn={class:"page-content"},pn=S(()=>t("p",{class:"title"},"MBTI 测试结果",-1)),bn=S(()=>t("div",{style:{height:"20px"}},null,-1)),qn=S(()=>t("p",{class:"content"},"您的答题情况（共计91题）：",-1)),wn={class:"content"},Sn={class:"content"},Tn={class:"calculated-bar"},Cn={class:"twice-group-can"},In={class:"upper-letter"},kn={class:"upper-letter"},Pn={class:"upper-letter"},En={class:"calculated-bar"},On={class:"twice-group-can"},Nn={class:"upper-letter"},$n={class:"upper-letter"},Fn={class:"upper-letter"},zn={class:"calculated-bar"},Dn={class:"twice-group-can"},Jn={class:"upper-letter"},Rn={class:"upper-letter"},Ln={class:"upper-letter"},Kn={class:"calculated-bar"},Mn={class:"twice-group-can"},Un={class:"upper-letter"},Qn={class:"upper-letter"},Hn={class:"upper-letter"},jn={class:"calculated-bar should-wrap"},Vn={class:"result-text"},Yn={class:"result-tb"},Gn=S(()=>t("td",null,"思考型",-1)),Wn=S(()=>t("td",null,"感觉型",-1)),Zn=S(()=>t("td",null,"官觉型",-1)),Xn=S(()=>t("td",null,"直觉型",-1)),eo=M({__name:"TestMBTI",setup(e){const n=ht(),o=b(!0),r=b(0),s=[],u=b(""),x=b(!1),v=b(!0),C=b(!1),B=b(!1),m=b(!1),g=b(!1),k=b(!1),P=b(!1),F=()=>{an({title:"警告",message:"如果您现在退出的话，将不会保留您之前的答题记录，确认退出吗？"}).then(()=>{n.back()}).catch(()=>{})},O=w(()=>L(r)>=ne.length-1),I=w(()=>s.filter(a=>a.a==="A").map(a=>a.index)),f=w(()=>s.filter(a=>a.a==="B").map(a=>a.index)),_=[1,8,15,22,29,36,43,50,57,64,71,78,85],T=[2,9,16,23,30,37,44,51,58,65,72,79,86],q=[3,10,17,24,31,38,45,52,59,66,73,80,87],E=[4,11,18,25,32,39,46,53,60,67,74,81,88],h=[5,12,19,26,33,40,47,54,61,68,75,82,89],N=[6,13,20,27,34,41,48,55,62,69,76,83,90],U=[7,14,21,28,35,42,49,56,63,70,77,84,91],Q=w(()=>{let a=0;return _.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),a}),W=w(()=>{let a=0;return _.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),a}),ae=w(()=>{let a=0;return T.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),q.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),a}),le=w(()=>{let a=0;return T.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),q.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),a}),ie=w(()=>{let a=0;return E.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),h.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),a}),ce=w(()=>{let a=0;return E.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),h.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),a}),re=w(()=>{let a=0;return N.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),U.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="A"&&a++}),a}),ue=w(()=>{let a=0;return N.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),U.forEach(i=>{let l=s.find(d=>d.index===i);l&&l.a==="B"&&a++}),a}),p=w(()=>{let a="";return Q.value>=W.value?a+="E":a+="I",ae.value>=le.value?a+="S":a+="N",ie.value>=ce.value?a+="T":a+="F",re.value>=ue.value?a+="J":a+="P",a}),Ke=()=>{s.push({index:L(r)+1,a:L(u)}),u.value="",L(O)?Me():r.value++},Me=()=>{x.value=!0,setTimeout(()=>{C.value=!0},560),setTimeout(()=>{B.value=!0},1500),setTimeout(()=>{m.value=!0},2500),setTimeout(()=>{g.value=!0},3500),setTimeout(()=>{v.value=!1},4e3),setTimeout(()=>{k.value=!0},4500),setTimeout(()=>{P.value=!0},5500)};return(a,i)=>{const l=At,d=se,_e=Re;return _t(),xt(Ne,null,[c(l,{"safe-area-inset-top":"",title:"MBTI 性格测试","left-arrow":"",onClickLeft:F}),c(_e,{show:o.value,"onUpdate:show":i[1]||(i[1]=R=>o.value=R),position:"bottom",style:Y({height:"calc(100%)"})},{default:V(()=>[ln,t("div",cn,[rn,un,dn,fn,vn,Bn,xn,t("div",hn,[c(d,{type:"primary",onClick:i[0]||(i[0]=R=>o.value=!1)},{default:V(()=>[Z("开始测试")]),_:1})])])]),_:1},8,["show","style"]),t("div",_n,[t("p",mn,A(`${r.value+1}. ${L(ne)[r.value].question}`),1),t("div",{class:y(`selector-can${u.value==="A"?" active":""}`),onClick:i[2]||(i[2]=R=>u.value="A")},[t("span",null,A(`A. ${L(ne)[r.value].A}`),1)],2),t("div",{class:y(`selector-can${u.value==="B"?" active":""}`),onClick:i[3]||(i[3]=R=>u.value="B")},[t("span",null,A(`B. ${L(ne)[r.value].B}`),1)],2),gn,t("div",An,[c(d,{type:"primary",onClick:Ke,block:"",disabled:!u.value,size:"large"},{default:V(()=>[Z(A(O.value?"交卷并查看答案":"下一题"),1)]),_:1},8,["disabled"])])]),c(_e,{show:x.value,"onUpdate:show":i[6]||(i[6]=R=>x.value=R),position:"right",style:{height:"100%"}},{default:V(()=>[t("div",yn,[pn,c(d,{type:"primary",block:"",onClick:i[4]||(i[4]=R=>v.value=!v.value)},{default:V(()=>[Z(A(v.value?"隐藏细节":"显示细节"),1)]),_:1}),bn,t("div",{class:y(`${v.value?"details":"details hide"}`)},[qn,t("p",wn,"选A的题目："+A(I.value.join("、")),1),t("p",Sn,"选B的题目："+A(f.value.join("、")),1)],2),t("div",Tn,[t("div",Cn,[t("p",In,"E -> "+A(Q.value),1),t("p",kn,"I -> "+A(W.value),1)]),t("p",Pn," -> "+A(Q.value>=W.value?"E":"I"),1),t("div",{class:"msk",style:Y(`left:${C.value?"100%":"0"}`)},null,4)]),t("div",En,[t("div",On,[t("p",Nn,"S -> "+A(ae.value),1),t("p",$n,"N -> "+A(le.value),1)]),t("p",Fn," -> "+A(ae.value>=le.value?"S":"N"),1),t("div",{class:"msk",style:Y(`left:${B.value?"100%":"0"}`)},null,4)]),t("div",zn,[t("div",Dn,[t("p",Jn,"T -> "+A(ie.value),1),t("p",Rn,"F -> "+A(ce.value),1)]),t("p",Ln," -> "+A(ie.value>=ce.value?"T":"F"),1),t("div",{class:"msk",style:Y(`left:${m.value?"100%":"0"}`)},null,4)]),t("div",Kn,[t("div",Mn,[t("p",Un,"J -> "+A(re.value),1),t("p",Qn,"P -> "+A(ue.value),1)]),t("p",Hn," -> "+A(re.value>=ue.value?"J":"P"),1),t("div",{class:"msk",style:Y(`left:${g.value?"100%":"0"}`)},null,4)]),t("div",jn,[t("p",Vn,[Z(" 您的测试结果为： "),t("span",null,A(p.value),1)]),t("table",Yn,[t("tr",null,[Gn,t("td",{class:y(p.value==="ISTP"?"is-result":"")},"ISTP",2),t("td",{class:y(p.value==="INTP"?"is-result":"")},"INTP",2),t("td",{class:y(p.value==="ESTJ"?"is-result":"")},"ESTJ",2),t("td",{class:y(p.value==="ENTJ"?"is-result":"")},"ENTJ",2)]),t("tr",null,[Wn,t("td",{class:y(p.value==="ISFP"?"is-result":"")},"ISFP",2),t("td",{class:y(p.value==="INFP"?"is-result":"")},"INFP",2),t("td",{class:y(p.value==="ENFJ"?"is-result":"")},"ENFJ",2),t("td",{class:y(p.value==="ESFJ"?"is-result":"")},"ESFJ",2)]),t("tr",null,[Zn,t("td",{class:y(p.value==="ISTJ"?"is-result":"")},"ISTJ",2),t("td",{class:y(p.value==="ISFJ"?"is-result":"")},"ISFJ",2),t("td",{class:y(p.value==="ESTP"?"is-result":"")},"ESTP",2),t("td",{class:y(p.value==="ESFP"?"is-result":"")},"ESFP",2)]),t("tr",null,[Xn,t("td",{class:y(p.value==="INTJ"?"is-result":"")},"INTJ",2),t("td",{class:y(p.value==="INFJ"?"is-result":"")},"INFJ",2),t("td",{class:y(p.value==="ENTP"?"is-result":"")},"ENTP",2),t("td",{class:y(p.value==="ENFP"?"is-result":"")},"ENFP",2)])]),t("div",{class:"msk",style:Y(`left:${k.value?"100%":"0"}`)},null,4)]),c(d,{type:"primary",class:y(P.value?"backbtn":"backbtn hide"),block:"",onClick:i[5]||(i[5]=R=>{L(n).back()})},{default:V(()=>[Z("返回")]),_:1},8,["class"])])]),_:1},8,["show"])],64)}}});const no=yt(eo,[["__scopeId","data-v-186cad31"]]);export{no as default};
