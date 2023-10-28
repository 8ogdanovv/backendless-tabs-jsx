import{r as p,g as z,a as _,s as R,_ as r,u as T,b as L,j as u,c as $,d as M,i as ue,f as k,e as I,q as ye,t as xe,A as he,C as Ie}from"./index-06847127.js";import{i as ie,T as Q,a as Ce,o as $e,u as Se}from"./Typography-fae5d60b.js";import{a as se,u as ae,s as Re,c as ke}from"./computeHeight-c242e32f.js";import{B as X,u as Le,a as Be}from"./ButtonBase-5da02f42.js";function Ne(...e){return e.reduce((t,o)=>o==null?t:function(...s){t.apply(this,s),o.apply(this,s)},()=>{})}function Pe(e,t=166){let o;function n(...s){const a=()=>{e.apply(this,s)};clearTimeout(o),o=setTimeout(a,t)}return n.clear=()=>{clearTimeout(o)},n}function ze(e,t){return()=>null}function pe(e,t){var o,n;return p.isValidElement(e)&&t.indexOf((o=e.type.muiName)!=null?o:(n=e.type)==null||(n=n._payload)==null||(n=n.value)==null?void 0:n.muiName)!==-1}function _e(e,t){return()=>null}function Me(e,t,o,n,s){return null}function me({controlled:e,default:t,name:o,state:n="value"}){const{current:s}=p.useRef(e!==void 0),[a,l]=p.useState(t),c=s?e:a,d=p.useCallback(i=>{s||l(i)},[]);return[c,d]}const je=p.createContext({}),j=je;function Te(e){return z("MuiList",e)}_("MuiList",["root","padding","dense","subheader"]);const Oe=["children","className","component","dense","disablePadding","subheader"],Fe=e=>{const{classes:t,disablePadding:o,dense:n,subheader:s}=e;return M({root:["root",!o&&"padding",n&&"dense",s&&"subheader"]},Te,t)},we=R("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,!o.disablePadding&&t.padding,o.dense&&t.dense,o.subheader&&t.subheader]}})(({ownerState:e})=>r({listStyle:"none",margin:0,padding:0,position:"relative"},!e.disablePadding&&{paddingTop:8,paddingBottom:8},e.subheader&&{paddingTop:0})),Ae=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiList"}),{children:s,className:a,component:l="ul",dense:c=!1,disablePadding:d=!1,subheader:i}=n,f=L(n,Oe),v=p.useMemo(()=>({dense:c}),[c]),g=r({},n,{component:l,dense:c,disablePadding:d}),b=Fe(g);return u.jsx(j.Provider,{value:v,children:u.jsxs(we,r({as:l,className:$(b.root,a),ref:o,ownerState:g},f,{children:[i,s]}))})}),Ve=Ae;function Ue(e){return z("MuiListItem",e)}const Ee=_("MuiListItem",["root","container","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","padding","button","secondaryAction","selected"]),G=Ee;function Ge(e){return z("MuiListItemButton",e)}const De=_("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]),D=De,qe=["alignItems","autoFocus","component","children","dense","disableGutters","divider","focusVisibleClassName","selected","className"],He=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters]},We=e=>{const{alignItems:t,classes:o,dense:n,disabled:s,disableGutters:a,divider:l,selected:c}=e,i=M({root:["root",n&&"dense",!a&&"gutters",l&&"divider",s&&"disabled",t==="flex-start"&&"alignItemsFlexStart",c&&"selected"]},Ge,o);return r({},o,i)},Ye=R(X,{shouldForwardProp:e=>ue(e)||e==="classes",name:"MuiListItemButton",slot:"Root",overridesResolver:He})(({theme:e,ownerState:t})=>r({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${D.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${D.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${D.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${D.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${D.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.alignItems==="flex-start"&&{alignItems:"flex-start"},!t.disableGutters&&{paddingLeft:16,paddingRight:16},t.dense&&{paddingTop:4,paddingBottom:4})),Je=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiListItemButton"}),{alignItems:s="center",autoFocus:a=!1,component:l="div",children:c,dense:d=!1,disableGutters:i=!1,divider:f=!1,focusVisibleClassName:v,selected:g=!1,className:b}=n,m=L(n,qe),y=p.useContext(j),x=p.useMemo(()=>({dense:d||y.dense||!1,alignItems:s,disableGutters:i}),[s,y.dense,d,i]),h=p.useRef(null);se(()=>{a&&h.current&&h.current.focus()},[a]);const B=r({},n,{alignItems:s,dense:x.dense,disableGutters:i,divider:f,selected:g}),F=We(B),V=ae(h,o);return u.jsx(j.Provider,{value:x,children:u.jsx(Ye,r({ref:V,href:m.href||m.to,component:(m.href||m.to)&&l==="div"?"button":l,focusVisibleClassName:$(F.focusVisible,v),ownerState:B,className:$(F.root,b)},m,{classes:F,children:c}))})}),Ke=Je;function Qe(e){return z("MuiListItemSecondaryAction",e)}_("MuiListItemSecondaryAction",["root","disableGutters"]);const Xe=["className"],Ze=e=>{const{disableGutters:t,classes:o}=e;return M({root:["root",t&&"disableGutters"]},Qe,o)},et=R("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.disableGutters&&t.disableGutters]}})(({ownerState:e})=>r({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)"},e.disableGutters&&{right:0})),fe=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiListItemSecondaryAction"}),{className:s}=n,a=L(n,Xe),l=p.useContext(j),c=r({},n,{disableGutters:l.disableGutters}),d=Ze(c);return u.jsx(et,r({className:$(d.root,s),ownerState:c,ref:o},a))});fe.muiName="ListItemSecondaryAction";const tt=fe,ot=["className"],nt=["alignItems","autoFocus","button","children","className","component","components","componentsProps","ContainerComponent","ContainerProps","dense","disabled","disableGutters","disablePadding","divider","focusVisibleClassName","secondaryAction","selected","slotProps","slots"],st=(e,t)=>{const{ownerState:o}=e;return[t.root,o.dense&&t.dense,o.alignItems==="flex-start"&&t.alignItemsFlexStart,o.divider&&t.divider,!o.disableGutters&&t.gutters,!o.disablePadding&&t.padding,o.button&&t.button,o.hasSecondaryAction&&t.secondaryAction]},at=e=>{const{alignItems:t,button:o,classes:n,dense:s,disabled:a,disableGutters:l,disablePadding:c,divider:d,hasSecondaryAction:i,selected:f}=e;return M({root:["root",s&&"dense",!l&&"gutters",!c&&"padding",d&&"divider",a&&"disabled",o&&"button",t==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction",f&&"selected"],container:["container"]},Ue,n)},rt=R("div",{name:"MuiListItem",slot:"Root",overridesResolver:st})(({theme:e,ownerState:t})=>r({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left"},!t.disablePadding&&r({paddingTop:8,paddingBottom:8},t.dense&&{paddingTop:4,paddingBottom:4},!t.disableGutters&&{paddingLeft:16,paddingRight:16},!!t.secondaryAction&&{paddingRight:48}),!!t.secondaryAction&&{[`& > .${D.root}`]:{paddingRight:48}},{[`&.${G.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${G.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${G.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${G.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity}},t.alignItems==="flex-start"&&{alignItems:"flex-start"},t.divider&&{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"},t.button&&{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${G.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:k(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:k(e.palette.primary.main,e.palette.action.selectedOpacity)}}},t.hasSecondaryAction&&{paddingRight:48})),it=R("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),ct=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiListItem"}),{alignItems:s="center",autoFocus:a=!1,button:l=!1,children:c,className:d,component:i,components:f={},componentsProps:v={},ContainerComponent:g="li",ContainerProps:{className:b}={},dense:m=!1,disabled:y=!1,disableGutters:x=!1,disablePadding:h=!1,divider:B=!1,focusVisibleClassName:F,secondaryAction:V,selected:ee=!1,slotProps:U={},slots:H={}}=n,te=L(n.ContainerProps,ot),W=L(n,nt),Y=p.useContext(j),S=p.useMemo(()=>({dense:m||Y.dense||!1,alignItems:s,disableGutters:x}),[s,Y.dense,m,x]),q=p.useRef(null);se(()=>{a&&q.current&&q.current.focus()},[a]);const O=p.Children.toArray(c),J=O.length&&pe(O[O.length-1],["ListItemSecondaryAction"]),N=r({},n,{alignItems:s,autoFocus:a,button:l,dense:S.dense,disabled:y,disableGutters:x,disablePadding:h,divider:B,hasSecondaryAction:J,selected:ee}),K=at(N),E=ae(q,o),w=H.root||f.Root||rt,C=U.root||v.root||{},P=r({className:$(K.root,C.className,d),disabled:y},W);let A=i||"li";return l&&(P.component=i||"div",P.focusVisibleClassName=$(G.focusVisible,F),A=X),J?(A=!P.component&&!i?"div":A,g==="li"&&(A==="li"?A="div":P.component==="li"&&(P.component="div")),u.jsx(j.Provider,{value:S,children:u.jsxs(it,r({as:g,className:$(K.container,b),ref:E,ownerState:N},te,{children:[u.jsx(w,r({},C,!ie(w)&&{as:A,ownerState:r({},N,C.ownerState)},P,{children:O})),O.pop()]}))})):u.jsx(j.Provider,{value:S,children:u.jsxs(w,r({},C,{as:A,ref:E},!ie(w)&&{ownerState:r({},N,C.ownerState)},P,{children:[O,V&&u.jsx(tt,{children:V})]}))})}),lt=ct;function dt(e){return z("MuiListItemIcon",e)}_("MuiListItemIcon",["root","alignItemsFlexStart"]);const ut=["className"],pt=e=>{const{alignItems:t,classes:o}=e;return M({root:["root",t==="flex-start"&&"alignItemsFlexStart"]},dt,o)},mt=R("div",{name:"MuiListItemIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.alignItems==="flex-start"&&t.alignItemsFlexStart]}})(({theme:e,ownerState:t})=>r({minWidth:56,color:(e.vars||e).palette.action.active,flexShrink:0,display:"inline-flex"},t.alignItems==="flex-start"&&{marginTop:8})),ft=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiListItemIcon"}),{className:s}=n,a=L(n,ut),l=p.useContext(j),c=r({},n,{alignItems:l.alignItems}),d=pt(c);return u.jsx(mt,r({className:$(d.root,s),ownerState:c,ref:o},a))}),gt=ft;function vt(e){return z("MuiListItemText",e)}const bt=_("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]),ce=bt,yt=["children","className","disableTypography","inset","primary","primaryTypographyProps","secondary","secondaryTypographyProps"],xt=e=>{const{classes:t,inset:o,primary:n,secondary:s,dense:a}=e;return M({root:["root",o&&"inset",a&&"dense",n&&s&&"multiline"],primary:["primary"],secondary:["secondary"]},vt,t)},ht=R("div",{name:"MuiListItemText",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[{[`& .${ce.primary}`]:t.primary},{[`& .${ce.secondary}`]:t.secondary},t.root,o.inset&&t.inset,o.primary&&o.secondary&&t.multiline,o.dense&&t.dense]}})(({ownerState:e})=>r({flex:"1 1 auto",minWidth:0,marginTop:4,marginBottom:4},e.primary&&e.secondary&&{marginTop:6,marginBottom:6},e.inset&&{paddingLeft:56})),It=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiListItemText"}),{children:s,className:a,disableTypography:l=!1,inset:c=!1,primary:d,primaryTypographyProps:i,secondary:f,secondaryTypographyProps:v}=n,g=L(n,yt),{dense:b}=p.useContext(j);let m=d??s,y=f;const x=r({},n,{disableTypography:l,inset:c,primary:!!m,secondary:!!y,dense:b}),h=xt(x);return m!=null&&m.type!==Q&&!l&&(m=u.jsx(Q,r({variant:b?"body2":"body1",className:h.primary,component:i!=null&&i.variant?void 0:"span",display:"block"},i,{children:m}))),y!=null&&y.type!==Q&&!l&&(y=u.jsx(Q,r({variant:"body2",className:h.secondary,color:"text.secondary",display:"block"},v,{children:y}))),u.jsxs(ht,r({className:$(h.root,a),ownerState:x,ref:o},g,{children:[m,y]}))}),Ct=It,$t=p.createContext(void 0),St=$t;function Rt(){return p.useContext(St)}function kt(e){return z("PrivateSwitchBase",e)}_("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Lt=["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","disableFocusRipple","edge","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"],Bt=e=>{const{classes:t,checked:o,disabled:n,edge:s}=e,a={root:["root",o&&"checked",n&&"disabled",s&&`edge${I(s)}`],input:["input"]};return M(a,kt,t)},Nt=R(X)(({ownerState:e})=>r({padding:9,borderRadius:"50%"},e.edge==="start"&&{marginLeft:e.size==="small"?-3:-12},e.edge==="end"&&{marginRight:e.size==="small"?-3:-12})),Pt=R("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),zt=p.forwardRef(function(t,o){const{autoFocus:n,checked:s,checkedIcon:a,className:l,defaultChecked:c,disabled:d,disableFocusRipple:i=!1,edge:f=!1,icon:v,id:g,inputProps:b,inputRef:m,name:y,onBlur:x,onChange:h,onFocus:B,readOnly:F,required:V=!1,tabIndex:ee,type:U,value:H}=t,te=L(t,Lt),[W,Y]=me({controlled:s,default:!!c,name:"SwitchBase",state:"checked"}),S=Rt(),q=C=>{B&&B(C),S&&S.onFocus&&S.onFocus(C)},O=C=>{x&&x(C),S&&S.onBlur&&S.onBlur(C)},J=C=>{if(C.nativeEvent.defaultPrevented)return;const P=C.target.checked;Y(P),h&&h(C,P)};let N=d;S&&typeof N>"u"&&(N=S.disabled);const K=U==="checkbox"||U==="radio",E=r({},t,{checked:W,disabled:N,disableFocusRipple:i,edge:f}),w=Bt(E);return u.jsxs(Nt,r({component:"span",className:$(w.root,l),centerRipple:!0,focusRipple:!i,disabled:N,tabIndex:null,role:void 0,onFocus:q,onBlur:O,ownerState:E,ref:o},te,{children:[u.jsx(Pt,r({autoFocus:n,checked:s,defaultChecked:c,className:w.input,disabled:N,id:K?g:void 0,name:y,onChange:J,readOnly:F,ref:m,required:V,ownerState:E,tabIndex:ee,type:U},U==="checkbox"&&H===void 0?{}:{value:H},b)),W?a:v]}))}),_t=zt;function Mt(e){return z("MuiSvgIcon",e)}_("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const jt=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Tt=e=>{const{color:t,fontSize:o,classes:n}=e,s={root:["root",t!=="inherit"&&`color${I(t)}`,`fontSize${I(o)}`]};return M(s,Mt,n)},Ot=R("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="inherit"&&t[`color${I(o.color)}`],t[`fontSize${I(o.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var o,n,s,a,l,c,d,i,f,v,g,b,m;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:t.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:(o=e.transitions)==null||(n=o.create)==null?void 0:n.call(o,"fill",{duration:(s=e.transitions)==null||(s=s.duration)==null?void 0:s.shorter}),fontSize:{inherit:"inherit",small:((a=e.typography)==null||(l=a.pxToRem)==null?void 0:l.call(a,20))||"1.25rem",medium:((c=e.typography)==null||(d=c.pxToRem)==null?void 0:d.call(c,24))||"1.5rem",large:((i=e.typography)==null||(f=i.pxToRem)==null?void 0:f.call(i,35))||"2.1875rem"}[t.fontSize],color:(v=(g=(e.vars||e).palette)==null||(g=g[t.color])==null?void 0:g.main)!=null?v:{action:(b=(e.vars||e).palette)==null||(b=b.action)==null?void 0:b.active,disabled:(m=(e.vars||e).palette)==null||(m=m.action)==null?void 0:m.disabled,inherit:void 0}[t.color]}}),ge=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiSvgIcon"}),{children:s,className:a,color:l="inherit",component:c="svg",fontSize:d="medium",htmlColor:i,inheritViewBox:f=!1,titleAccess:v,viewBox:g="0 0 24 24"}=n,b=L(n,jt),m=p.isValidElement(s)&&s.type==="svg",y=r({},n,{color:l,component:c,fontSize:d,instanceFontSize:t.fontSize,inheritViewBox:f,viewBox:g,hasSvgAsChild:m}),x={};f||(x.viewBox=g);const h=Tt(y);return u.jsxs(Ot,r({as:c,className:$(h.root,a),focusable:"false",color:i,"aria-hidden":v?void 0:!0,role:v?"img":void 0,ref:o},x,b,m&&s.props,{ownerState:y,children:[m?s.props.children:s,v?u.jsx("title",{children:v}):null]}))});ge.muiName="SvgIcon";const le=ge;function Z(e,t){function o(n,s){return u.jsx(le,r({"data-testid":`${t}Icon`,ref:s},n,{children:e}))}return o.muiName=le.muiName,p.memo(p.forwardRef(o))}const Ft=Z(u.jsx("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),wt=Z(u.jsx("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),At=Z(u.jsx("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function Vt(e){return z("MuiCheckbox",e)}const Ut=_("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary","sizeSmall","sizeMedium"]),oe=Ut,Et=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],Gt=e=>{const{classes:t,indeterminate:o,color:n,size:s}=e,a={root:["root",o&&"indeterminate",`color${I(n)}`,`size${I(s)}`]},l=M(a,Vt,t);return r({},t,l)},Dt=R(_t,{shouldForwardProp:e=>ue(e)||e==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.indeterminate&&t.indeterminate,t[`size${I(o.size)}`],o.color!=="default"&&t[`color${I(o.color)}`]]}})(({theme:e,ownerState:t})=>r({color:(e.vars||e).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${t.color==="default"?e.vars.palette.action.activeChannel:e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:k(t.color==="default"?e.palette.action.active:e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${oe.checked}, &.${oe.indeterminate}`]:{color:(e.vars||e).palette[t.color].main},[`&.${oe.disabled}`]:{color:(e.vars||e).palette.action.disabled}})),qt=u.jsx(wt,{}),Ht=u.jsx(Ft,{}),Wt=u.jsx(At,{}),Yt=p.forwardRef(function(t,o){var n,s;const a=T({props:t,name:"MuiCheckbox"}),{checkedIcon:l=qt,color:c="primary",icon:d=Ht,indeterminate:i=!1,indeterminateIcon:f=Wt,inputProps:v,size:g="medium",className:b}=a,m=L(a,Et),y=i?f:d,x=i?f:l,h=r({},a,{color:c,indeterminate:i,size:g}),B=Gt(h);return u.jsx(Dt,r({type:"checkbox",inputProps:r({"data-indeterminate":i},v),icon:p.cloneElement(y,{fontSize:(n=y.props.fontSize)!=null?n:g}),checkedIcon:p.cloneElement(x,{fontSize:(s=x.props.fontSize)!=null?s:g}),ownerState:h,ref:o,className:$(B.root,b)},m,{classes:B}))}),Jt=Yt;function Kt(e){return z("MuiIconButton",e)}const Qt=_("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),Xt=Qt,Zt=["edge","children","className","color","disabled","disableFocusRipple","size"],eo=e=>{const{classes:t,disabled:o,color:n,edge:s,size:a}=e,l={root:["root",o&&"disabled",n!=="default"&&`color${I(n)}`,s&&`edge${I(s)}`,`size${I(a)}`]};return M(l,Kt,t)},to=R(X,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,o.color!=="default"&&t[`color${I(o.color)}`],o.edge&&t[`edge${I(o.edge)}`],t[`size${I(o.size)}`]]}})(({theme:e,ownerState:t})=>r({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:k(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>{var o;const n=(o=(e.vars||e).palette)==null?void 0:o[t.color];return r({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&r({color:n==null?void 0:n.main},!t.disableRipple&&{"&:hover":r({},n&&{backgroundColor:e.vars?`rgba(${n.mainChannel} / ${e.vars.palette.action.hoverOpacity})`:k(n.main,e.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${Xt.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})}),oo=p.forwardRef(function(t,o){const n=T({props:t,name:"MuiIconButton"}),{edge:s=!1,children:a,className:l,color:c="default",disabled:d=!1,disableFocusRipple:i=!1,size:f="medium"}=n,v=L(n,Zt),g=r({},n,{edge:s,color:c,disabled:d,disableFocusRipple:i,size:f}),b=eo(g);return u.jsx(to,r({className:$(b.root,l),centerRipple:!0,focusRipple:!i,disabled:d,ref:o,ownerState:g},v,{children:a}))}),no=oo;var re={},ve={exports:{}};(function(e){function t(o){return o&&o.__esModule?o:{default:o}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(ve);var so=ve.exports,ne={};const ao={configure:e=>{ye.configure(e)}},ro=Object.freeze(Object.defineProperty({__proto__:null,capitalize:I,createChainedFunction:Ne,createSvgIcon:Z,debounce:Pe,deprecatedPropType:ze,isMuiElement:pe,ownerDocument:Ce,ownerWindow:$e,requirePropFactory:_e,setRef:Re,unstable_ClassNameGenerator:ao,unstable_useEnhancedEffect:se,unstable_useId:Se,unsupportedProp:Me,useControlled:me,useEventCallback:Le,useForkRef:ae,useIsFocusVisible:Be},Symbol.toStringTag,{value:"Module"})),io=xe(ro);var de;function co(){return de||(de=1,function(e){"use client";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=io}(ne)),ne}var lo=so;Object.defineProperty(re,"__esModule",{value:!0});var be=re.default=void 0,uo=lo(co()),po=u,mo=(0,uo.default)((0,po.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Comment");be=re.default=mo;const yo=()=>{const[e,t]=p.useState([]),[o,n]=p.useState(!0),{showFrame:s,isLandscape:a}=p.useContext(he);p.useEffect(()=>{(async()=>{try{const i=await(await fetch("https://dummyjson.com/todos")).json();t(i.todos),n(!1)}catch(d){console.error("Error fetching data:",d)}})()},[]);const l=c=>()=>{const d=e.findIndex(f=>f.id===c.id),i=[...e];d!==-1&&(i[d].completed=!i[d].completed,t(i))};return o?u.jsx(Ie,{}):u.jsx("section",{className:"todos-container",style:ke(s,a,"45dvh","45dvh","calc(69dvh - 5px)","80dvh"),children:u.jsx(Ve,{sx:{width:"100%",minWidth:360,bgcolor:"background.paper"},children:e.map(c=>{const{id:d,todo:i,completed:f}=c,v=`checkbox-list-label-${d}`;return u.jsx(lt,{secondaryAction:u.jsx(no,{edge:"start","aria-label":"comments",children:u.jsx(be,{})}),disablePadding:!0,children:u.jsxs(Ke,{role:void 0,onClick:l(c),dense:!0,children:[u.jsx(gt,{children:u.jsx(Jt,{edge:"end",checked:f,tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":v}})}),u.jsx(Ct,{id:v,primary:i,className:"list-item-text"})]})},d)})})})};export{yo as default};
