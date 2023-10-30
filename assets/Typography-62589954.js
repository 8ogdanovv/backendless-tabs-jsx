import{r as v,b as G,j as d,A as L}from"./index-67450591.js";import{_ as k,b as i,q as V,t as H,v as K,w as q,j as J,c as B,g as I,a as W,p as E,s as $,f as C,x as U,u as A,d as F,y as Z,T as O,C as Q}from"./DummyComponent-e04c6d84.js";function X(t){return t&&t.ownerDocument||document}function Bt(t){return X(t).defaultView||window}let T=0;function Y(t){const[r,e]=v.useState(t),o=t||r;return v.useEffect(()=>{r==null&&(T+=1,e(`mui-${T}`))},[r]),o}const w=G["useId".toString()];function Mt(t){if(w!==void 0){const r=w();return t??r}return Y(t)}const tt=["sx"],rt=t=>{var r,e;const o={systemProps:{},otherProps:{}},n=(r=t==null||(e=t.theme)==null?void 0:e.unstable_sxConfig)!=null?r:V;return Object.keys(t).forEach(s=>{n[s]?o.systemProps[s]=t[s]:o.otherProps[s]=t[s]}),o};function z(t){const{sx:r}=t,e=k(t,tt),{systemProps:o,otherProps:n}=rt(e);let s;return Array.isArray(r)?s=[o,...r]:typeof r=="function"?s=(...u)=>{const a=r(...u);return H(a)?i({},o,a):o}:s=i({},o,r),i({},n,{sx:s})}const et=["className","component"];function ot(t={}){const{themeId:r,defaultTheme:e,defaultClassName:o="MuiBox-root",generateClassName:n}=t,s=K("div",{shouldForwardProp:a=>a!=="theme"&&a!=="sx"&&a!=="as"})(q);return v.forwardRef(function(x,h){const c=J(e),p=z(x),{className:f,component:l="div"}=p,g=k(p,et);return d.jsx(s,i({as:l,ref:h,className:B(f,n?n(o):o),theme:r&&c[r]||c},g))})}function st(t){return I("MuiCircularProgress",t)}W("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const at=["className","color","disableShrink","size","style","thickness","value","variant"];let S=t=>t,N,R,_,j;const m=44,nt=E(N||(N=S`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),it=E(R||(R=S`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),ct=t=>{const{classes:r,variant:e,color:o,disableShrink:n}=t,s={root:["root",e,`color${C(o)}`],svg:["svg"],circle:["circle",`circle${C(e)}`,n&&"circleDisableShrink"]};return F(s,st,r)},lt=$("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,r[e.variant],r[`color${C(e.color)}`]]}})(({ownerState:t,theme:r})=>i({display:"inline-block"},t.variant==="determinate"&&{transition:r.transitions.create("transform")},t.color!=="inherit"&&{color:(r.vars||r).palette[t.color].main}),({ownerState:t})=>t.variant==="indeterminate"&&U(_||(_=S`
      animation: ${0} 1.4s linear infinite;
    `),nt)),ut=$("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(t,r)=>r.svg})({display:"block"}),ht=$("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.circle,r[`circle${C(e.variant)}`],e.disableShrink&&r.circleDisableShrink]}})(({ownerState:t,theme:r})=>i({stroke:"currentColor"},t.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},t.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:t})=>t.variant==="indeterminate"&&!t.disableShrink&&U(j||(j=S`
      animation: ${0} 1.4s ease-in-out infinite;
    `),it)),pt=v.forwardRef(function(r,e){const o=A({props:r,name:"MuiCircularProgress"}),{className:n,color:s="primary",disableShrink:u=!1,size:a=40,style:x,thickness:h=3.6,value:c=0,variant:p="indeterminate"}=o,f=k(o,at),l=i({},o,{color:s,disableShrink:u,size:a,thickness:h,value:c,variant:p}),g=ct(l),y={},b={},P={};if(p==="determinate"){const M=2*Math.PI*((m-h)/2);y.strokeDasharray=M.toFixed(3),P["aria-valuenow"]=Math.round(c),y.strokeDashoffset=`${((100-c)/100*M).toFixed(3)}px`,b.transform="rotate(-90deg)"}return d.jsx(lt,i({className:B(g.root,n),style:i({width:a,height:a},b,x),ownerState:l,ref:e,role:"progressbar"},P,f,{children:d.jsx(ut,{className:g.svg,ownerState:l,viewBox:`${m/2} ${m/2} ${m} ${m}`,children:d.jsx(ht,{className:g.circle,style:y,ownerState:l,cx:m,cy:m,r:(m-h)/2,fill:"none",strokeWidth:h})})}))}),mt=pt,dt=Z(),ft=ot({themeId:O,defaultTheme:dt,defaultClassName:"MuiBox-root",generateClassName:Q.generate}),gt=ft;function Tt(){const{showFrame:t}=v.useContext(L);return d.jsx("div",{className:"loader-container",style:{top:t?"65dvh":"44dvh"},children:d.jsx(gt,{sx:{display:"flex"},children:d.jsx(mt,{})})})}function wt(t){return typeof t=="string"}function xt(t){return I("MuiTypography",t)}W("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const yt=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],vt=t=>{const{align:r,gutterBottom:e,noWrap:o,paragraph:n,variant:s,classes:u}=t,a={root:["root",s,t.align!=="inherit"&&`align${C(r)}`,e&&"gutterBottom",o&&"noWrap",n&&"paragraph"]};return F(a,xt,u)},Ct=$("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:e}=t;return[r.root,e.variant&&r[e.variant],e.align!=="inherit"&&r[`align${C(e.align)}`],e.noWrap&&r.noWrap,e.gutterBottom&&r.gutterBottom,e.paragraph&&r.paragraph]}})(({theme:t,ownerState:r})=>i({margin:0},r.variant==="inherit"&&{font:"inherit"},r.variant!=="inherit"&&t.typography[r.variant],r.align!=="inherit"&&{textAlign:r.align},r.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},r.gutterBottom&&{marginBottom:"0.35em"},r.paragraph&&{marginBottom:16})),D={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},bt={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},Pt=t=>bt[t]||t,kt=v.forwardRef(function(r,e){const o=A({props:r,name:"MuiTypography"}),n=Pt(o.color),s=z(i({},o,{color:n})),{align:u="inherit",className:a,component:x,gutterBottom:h=!1,noWrap:c=!1,paragraph:p=!1,variant:f="body1",variantMapping:l=D}=s,g=k(s,yt),y=i({},s,{align:u,color:n,className:a,component:x,gutterBottom:h,noWrap:c,paragraph:p,variant:f,variantMapping:l}),b=x||(p?"p":l[f]||D[f])||"span",P=vt(y);return d.jsx(Ct,i({as:b,ref:e,ownerState:y,className:B(P.root,a)},g))}),Nt=kt;export{Tt as C,Nt as T,X as a,ot as c,wt as i,Bt as o,Mt as u};
