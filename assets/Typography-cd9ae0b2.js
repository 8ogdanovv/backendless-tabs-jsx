import{r as l,x as C,g as I,a as R,s as w,f as x,b as i,u as M,y as P,_ as U,j,c as D,d as _}from"./index-02d27784.js";function $(t){return t&&t.ownerDocument||document}function k(t){return $(t).defaultView||window}let y=0;function E(t){const[a,o]=l.useState(t),r=t||a;return l.useEffect(()=>{a==null&&(y+=1,o(`mui-${y}`))},[a]),r}const d=C["useId".toString()];function q(t){if(d!==void 0){const a=d();return t??a}return E(t)}function F(t){return typeof t=="string"}function N(t){return I("MuiTypography",t)}R("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const L=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],V=t=>{const{align:a,gutterBottom:o,noWrap:r,paragraph:e,variant:n,classes:p}=t,s={root:["root",n,t.align!=="inherit"&&`align${x(a)}`,o&&"gutterBottom",r&&"noWrap",e&&"paragraph"]};return _(s,N,p)},z=w("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,a)=>{const{ownerState:o}=t;return[a.root,o.variant&&a[o.variant],o.align!=="inherit"&&a[`align${x(o.align)}`],o.noWrap&&a.noWrap,o.gutterBottom&&a.gutterBottom,o.paragraph&&a.paragraph]}})(({theme:t,ownerState:a})=>i({margin:0},a.variant==="inherit"&&{font:"inherit"},a.variant!=="inherit"&&t.typography[a.variant],a.align!=="inherit"&&{textAlign:a.align},a.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},a.gutterBottom&&{marginBottom:"0.35em"},a.paragraph&&{marginBottom:16})),f={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},A={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},G=t=>A[t]||t,H=l.forwardRef(function(a,o){const r=M({props:a,name:"MuiTypography"}),e=G(r.color),n=P(i({},r,{color:e})),{align:p="inherit",className:s,component:u,gutterBottom:b=!1,noWrap:v=!1,paragraph:g=!1,variant:c="body1",variantMapping:h=f}=n,T=U(n,L),m=i({},n,{align:p,color:e,className:s,component:u,gutterBottom:b,noWrap:v,paragraph:g,variant:c,variantMapping:h}),B=u||(g?"p":h[c]||f[c])||"span",W=V(m);return j.jsx(z,i({as:B,ref:o,ownerState:m,className:D(W.root,s)},T))}),K=H;export{K as T,$ as a,F as i,k as o,q as u};
