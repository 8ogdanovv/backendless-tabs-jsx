import{r as t}from"./index-02d27784.js";function u(e,n){typeof e=="function"?e(n):e&&(e.current=n)}const f=typeof window<"u"?t.useLayoutEffect:t.useEffect,s=f;function r(...e){return t.useMemo(()=>e.every(n=>n==null)?null:n=>{e.forEach(o=>{u(o,n)})},e)}export{s as a,u as s,r as u};
