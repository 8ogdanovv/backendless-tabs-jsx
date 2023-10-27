import{r as p,g as h,a as $,s as y,_ as l,u as m,b as T,j as r,c as C,d as z,e as u,l as K,f,h as Y,i as Z,k as oo,A as ao}from"./index-df72259a.js";import{c as eo}from"./computeHeight-69ff791d.js";import{B as to}from"./ButtonBase-024798c6.js";const no=o=>{let a;return o<1?a=5.11916*o**2:a=4.5*Math.log(o+1)+2,(a/100).toFixed(2)},A=no,so=p.createContext(),F=so;function ro(o){return h("MuiTable",o)}$("MuiTable",["root","stickyHeader"]);const io=["className","component","padding","size","stickyHeader"],lo=o=>{const{classes:a,stickyHeader:e}=o;return z({root:["root",e&&"stickyHeader"]},ro,a)},co=y("table",{name:"MuiTable",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.stickyHeader&&a.stickyHeader]}})(({theme:o,ownerState:a})=>l({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":l({},o.typography.body2,{padding:o.spacing(2),color:(o.vars||o).palette.text.secondary,textAlign:"left",captionSide:"bottom"})},a.stickyHeader&&{borderCollapse:"separate"})),O="table",po=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiTable"}),{className:i,component:n=O,padding:c="normal",size:s="medium",stickyHeader:d=!1}=t,v=T(t,io),b=l({},t,{component:n,padding:c,size:s,stickyHeader:d}),x=lo(b),B=p.useMemo(()=>({padding:c,size:s,stickyHeader:d}),[c,s,d]);return r.jsx(F.Provider,{value:B,children:r.jsx(co,l({as:n,role:n===O?null:"table",ref:e,className:C(x.root,i),ownerState:b},v))})}),uo=po,vo=p.createContext(),E=vo;function bo(o){return h("MuiTableBody",o)}$("MuiTableBody",["root"]);const go=["className","component"],xo=o=>{const{classes:a}=o;return z({root:["root"]},bo,a)},fo=y("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(o,a)=>a.root})({display:"table-row-group"}),yo={variant:"body"},_="tbody",Co=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiTableBody"}),{className:i,component:n=_}=t,c=T(t,go),s=l({},t,{component:n}),d=xo(s);return r.jsx(E.Provider,{value:yo,children:r.jsx(fo,l({className:C(d.root,i),as:n,ref:e,role:n===_?null:"rowgroup",ownerState:s},c))})}),ho=Co;function $o(o){return h("MuiTableCell",o)}const mo=$("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),To=mo,zo=["align","className","component","padding","scope","size","sortDirection","variant"],Ro=o=>{const{classes:a,variant:e,align:t,padding:i,size:n,stickyHeader:c}=o,s={root:["root",e,c&&"stickyHeader",t!=="inherit"&&`align${u(t)}`,i!=="normal"&&`padding${u(i)}`,`size${u(n)}`]};return z(s,$o,a)},ko=y("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,a[e.variant],a[`size${u(e.size)}`],e.padding!=="normal"&&a[`padding${u(e.padding)}`],e.align!=="inherit"&&a[`align${u(e.align)}`],e.stickyHeader&&a.stickyHeader]}})(({theme:o,ownerState:a})=>l({},o.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:o.vars?`1px solid ${o.vars.palette.TableCell.border}`:`1px solid
    ${o.palette.mode==="light"?K(f(o.palette.divider,1),.88):Y(f(o.palette.divider,1),.68)}`,textAlign:"left",padding:16},a.variant==="head"&&{color:(o.vars||o).palette.text.primary,lineHeight:o.typography.pxToRem(24),fontWeight:o.typography.fontWeightMedium},a.variant==="body"&&{color:(o.vars||o).palette.text.primary},a.variant==="footer"&&{color:(o.vars||o).palette.text.secondary,lineHeight:o.typography.pxToRem(21),fontSize:o.typography.pxToRem(12)},a.size==="small"&&{padding:"6px 16px",[`&.${To.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},a.padding==="checkbox"&&{width:48,padding:"0 0 0 4px"},a.padding==="none"&&{padding:0},a.align==="left"&&{textAlign:"left"},a.align==="center"&&{textAlign:"center"},a.align==="right"&&{textAlign:"right",flexDirection:"row-reverse"},a.align==="justify"&&{textAlign:"justify"},a.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:(o.vars||o).palette.background.default})),Mo=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiTableCell"}),{align:i="inherit",className:n,component:c,padding:s,scope:d,size:v,sortDirection:b,variant:x}=t,B=T(t,zo),g=p.useContext(F),R=p.useContext(E),P=R&&R.variant==="head";let k;c?k=c:k=P?"th":"td";let M=d;k==="td"?M=void 0:!M&&P&&(M="col");const j=x||R&&R.variant,I=l({},t,{align:i,component:k,padding:s||(g&&g.padding?g.padding:"normal"),size:v||(g&&g.size?g.size:"medium"),sortDirection:b,stickyHeader:j==="head"&&g&&g.stickyHeader,variant:j}),W=Ro(I);let S=null;return b&&(S=b==="asc"?"ascending":"descending"),r.jsx(ko,l({as:k,ref:e,className:C(W.root,n),"aria-sort":S,scope:M,ownerState:I},B))}),N=Mo;function No(o){return h("MuiTableContainer",o)}$("MuiTableContainer",["root"]);const Bo=["className","component"],jo=o=>{const{classes:a}=o;return z({root:["root"]},No,a)},Io=y("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(o,a)=>a.root})({width:"100%",overflowX:"auto"}),Ho=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiTableContainer"}),{className:i,component:n="div"}=t,c=T(t,Bo),s=l({},t,{component:n}),d=jo(s);return r.jsx(Io,l({ref:e,as:n,className:C(d.root,i),ownerState:s},c))}),Po=Ho;function So(o){return h("MuiTableHead",o)}$("MuiTableHead",["root"]);const Uo=["className","component"],wo=o=>{const{classes:a}=o;return z({root:["root"]},So,a)},Eo=y("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(o,a)=>a.root})({display:"table-header-group"}),Wo={variant:"head"},L="thead",Ao=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiTableHead"}),{className:i,component:n=L}=t,c=T(t,Uo),s=l({},t,{component:n}),d=wo(s);return r.jsx(E.Provider,{value:Wo,children:r.jsx(Eo,l({as:n,className:C(d.root,i),ref:e,role:n===L?null:"rowgroup",ownerState:s},c))})}),Oo=Ao;function _o(o){return h("MuiTableRow",o)}const Lo=$("MuiTableRow",["root","selected","hover","head","footer"]),q=Lo,qo=["className","component","hover","selected"],Do=o=>{const{classes:a,selected:e,hover:t,head:i,footer:n}=o;return z({root:["root",e&&"selected",t&&"hover",i&&"head",n&&"footer"]},_o,a)},Vo=y("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,e.head&&a.head,e.footer&&a.footer]}})(({theme:o})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${q.hover}:hover`]:{backgroundColor:(o.vars||o).palette.action.hover},[`&.${q.selected}`]:{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})`:f(o.palette.primary.main,o.palette.action.selectedOpacity),"&:hover":{backgroundColor:o.vars?`rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))`:f(o.palette.primary.main,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity)}}})),D="tr",Fo=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiTableRow"}),{className:i,component:n=D,hover:c=!1,selected:s=!1}=t,d=T(t,qo),v=p.useContext(E),b=l({},t,{component:n,hover:c,selected:s,head:v&&v.variant==="head",footer:v&&v.variant==="footer"}),x=Do(b);return r.jsx(Vo,l({as:n,ref:e,className:C(x.root,i),role:n===D?null:"row",ownerState:b},d))}),V=Fo;function Go(o){return h("MuiPaper",o)}$("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Jo=["className","component","elevation","square","variant"],Qo=o=>{const{square:a,elevation:e,variant:t,classes:i}=o,n={root:["root",t,!a&&"rounded",t==="elevation"&&`elevation${e}`]};return z(n,Go,i)},Xo=y("div",{name:"MuiPaper",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,a[e.variant],!e.square&&a.rounded,e.variant==="elevation"&&a[`elevation${e.elevation}`]]}})(({theme:o,ownerState:a})=>{var e;return l({backgroundColor:(o.vars||o).palette.background.paper,color:(o.vars||o).palette.text.primary,transition:o.transitions.create("box-shadow")},!a.square&&{borderRadius:o.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.divider}`},a.variant==="elevation"&&l({boxShadow:(o.vars||o).shadows[a.elevation]},!o.vars&&o.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${f("#fff",A(a.elevation))}, ${f("#fff",A(a.elevation))})`},o.vars&&{backgroundImage:(e=o.vars.overlays)==null?void 0:e[a.elevation]}))}),Ko=p.forwardRef(function(a,e){const t=m({props:a,name:"MuiPaper"}),{className:i,component:n="div",elevation:c=1,square:s=!1,variant:d="elevation"}=t,v=T(t,Jo),b=l({},t,{component:n,elevation:c,square:s,variant:d}),x=Qo(b);return r.jsx(Xo,l({as:n,ownerState:b,className:C(x.root,i),ref:e},v))}),Yo=Ko;function Zo(o){return h("MuiButton",o)}const oa=$("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),w=oa,aa=p.createContext({}),ea=aa,ta=p.createContext(void 0),na=ta,sa=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],ra=o=>{const{color:a,disableElevation:e,fullWidth:t,size:i,variant:n,classes:c}=o,s={root:["root",n,`${n}${u(a)}`,`size${u(i)}`,`${n}Size${u(i)}`,a==="inherit"&&"colorInherit",e&&"disableElevation",t&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${u(i)}`],endIcon:["endIcon",`iconSize${u(i)}`]},d=z(s,Zo,c);return l({},c,d)},G=o=>l({},o.size==="small"&&{"& > *:nth-of-type(1)":{fontSize:18}},o.size==="medium"&&{"& > *:nth-of-type(1)":{fontSize:20}},o.size==="large"&&{"& > *:nth-of-type(1)":{fontSize:22}}),ia=y(to,{shouldForwardProp:o=>Z(o)||o==="classes",name:"MuiButton",slot:"Root",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.root,a[e.variant],a[`${e.variant}${u(e.color)}`],a[`size${u(e.size)}`],a[`${e.variant}Size${u(e.size)}`],e.color==="inherit"&&a.colorInherit,e.disableElevation&&a.disableElevation,e.fullWidth&&a.fullWidth]}})(({theme:o,ownerState:a})=>{var e,t;const i=o.palette.mode==="light"?o.palette.grey[300]:o.palette.grey[800],n=o.palette.mode==="light"?o.palette.grey.A100:o.palette.grey[700];return l({},o.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":l({textDecoration:"none",backgroundColor:o.vars?`rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})`:f(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="text"&&a.color!=="inherit"&&{backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:f(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="outlined"&&a.color!=="inherit"&&{border:`1px solid ${(o.vars||o).palette[a.color].main}`,backgroundColor:o.vars?`rgba(${o.vars.palette[a.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})`:f(o.palette[a.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},a.variant==="contained"&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:n,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},a.variant==="contained"&&a.color!=="inherit"&&{backgroundColor:(o.vars||o).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[a.color].main}}),"&:active":l({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[8]}),[`&.${w.focusVisible}`]:l({},a.variant==="contained"&&{boxShadow:(o.vars||o).shadows[6]}),[`&.${w.disabled}`]:l({color:(o.vars||o).palette.action.disabled},a.variant==="outlined"&&{border:`1px solid ${(o.vars||o).palette.action.disabledBackground}`},a.variant==="contained"&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})},a.variant==="text"&&{padding:"6px 8px"},a.variant==="text"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main},a.variant==="outlined"&&{padding:"5px 15px",border:"1px solid currentColor"},a.variant==="outlined"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].main,border:o.vars?`1px solid rgba(${o.vars.palette[a.color].mainChannel} / 0.5)`:`1px solid ${f(o.palette[a.color].main,.5)}`},a.variant==="contained"&&{color:o.vars?o.vars.palette.text.primary:(e=(t=o.palette).getContrastText)==null?void 0:e.call(t,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:i,boxShadow:(o.vars||o).shadows[2]},a.variant==="contained"&&a.color!=="inherit"&&{color:(o.vars||o).palette[a.color].contrastText,backgroundColor:(o.vars||o).palette[a.color].main},a.color==="inherit"&&{color:"inherit",borderColor:"currentColor"},a.size==="small"&&a.variant==="text"&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="text"&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="outlined"&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="outlined"&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},a.size==="small"&&a.variant==="contained"&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},a.size==="large"&&a.variant==="contained"&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},a.fullWidth&&{width:"100%"})},({ownerState:o})=>o.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${w.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${w.disabled}`]:{boxShadow:"none"}}),la=y("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.startIcon,a[`iconSize${u(e.size)}`]]}})(({ownerState:o})=>l({display:"inherit",marginRight:8,marginLeft:-4},o.size==="small"&&{marginLeft:-2},G(o))),ca=y("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.endIcon,a[`iconSize${u(e.size)}`]]}})(({ownerState:o})=>l({display:"inherit",marginRight:-4,marginLeft:8},o.size==="small"&&{marginRight:-2},G(o))),da=p.forwardRef(function(a,e){const t=p.useContext(ea),i=p.useContext(na),n=oo(t,a),c=m({props:n,name:"MuiButton"}),{children:s,color:d="primary",component:v="button",className:b,disabled:x=!1,disableElevation:B=!1,disableFocusRipple:g=!1,endIcon:R,focusVisibleClassName:P,fullWidth:k=!1,size:M="medium",startIcon:j,type:I,variant:W="text"}=c,S=T(c,sa),U=l({},c,{color:d,component:v,disabled:x,disableElevation:B,disableFocusRipple:g,fullWidth:k,size:M,type:I,variant:W}),H=ra(U),J=j&&r.jsx(la,{className:H.startIcon,ownerState:U,children:j}),Q=R&&r.jsx(ca,{className:H.endIcon,ownerState:U,children:R}),X=i||"";return r.jsxs(ia,l({ownerState:U,className:C(t.className,H.root,b,X),component:v,disabled:x,focusRipple:!g,focusVisibleClassName:C(H.focusVisible,P),ref:e,type:I},S,{classes:H,children:[J,s,Q]}))}),pa=da,ga=()=>{const[o,a]=p.useState([]),[e,t]=p.useState(!1),{showFrame:i,isLandscape:n}=p.useContext(ao);p.useEffect(()=>{e||(async()=>{const v=await(await fetch("https://dummyjson.com/quotes")).json();a(v.quotes),t(!0)})()},[e]);const c=(s,d)=>{navigator.clipboard.writeText(d),s.target.innerText="Copied!",setTimeout(()=>{s.target.innerText=" Copy "},2e3)};return r.jsx("div",{className:"table-container",children:r.jsx(Po,{component:Yo,children:r.jsxs(uo,{sx:{minWidth:440},stickyHeader:!0,"aria-label":"simple table",children:[r.jsx("section",{className:"table-head",children:r.jsx(Oo,{children:r.jsxs(V,{className:"flex-row",children:[r.jsx(N,{className:"flex-grow",children:r.jsx("b",{children:"Quote"})}),r.jsx(N,{align:"right",className:"flex-end",children:r.jsx("b",{children:"Author"})}),r.jsx(N,{align:"right",className:"flex-end",children:r.jsx("b",{children:"Actions"})})]})})}),r.jsx("section",{style:eo(i,n,"calc(37dvh)","calc(42dvh - 6px)","calc(62dvh)","calc(77dvh - 6px)"),className:"table-body",children:r.jsx(ho,{children:o.map(s=>r.jsxs(V,{children:[r.jsx(N,{component:"th",scope:"row",children:r.jsx("span",{className:"table-quote",children:s.quote})}),r.jsx(N,{align:"right",children:s.author}),r.jsx(N,{align:"right",children:r.jsx(pa,{onClick:d=>c(d,s.quote),className:"copy-button",children:" Copy "})})]},s.id))})})]})})})};export{ga as default};
