"use strict";var y=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var P=y(function(K,p){
var l=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-assert-is-negative-zero/dist');function B(r,e,n,q,t,x,b){var u,o,c,s,v,i,a,m,f;for(u=e.data,o=t.data,c=e.accessors[0],s=t.accessors[0],i=q,a=b,f=0;f<r&&s(o,a)!==0;f++)i+=n,a+=x;if(f===r)return NaN;if(v=c(u,i),l(v))return v;for(f+=1,f;f<r;f++)if(i+=n,a+=x,!s(o,a)){if(m=c(u,i),l(m))return m;(m<v||m===v&&A(m))&&(v=m)}return v}p.exports=B
});var g=y(function(L,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=P();function E(r,e,n,q,t,x,b){var u,o,c,s,v,i,a;if(r<=0)return NaN;if(s=j(e),v=j(t),s.accessorProtocol||v.accessorProtocol)return D(r,s,n,q,v,x,b);for(o=q,c=b,a=0;a<r&&t[c]!==0;a++)o+=n,c+=x;if(a===r)return NaN;if(u=e[o],Z(u))return u;for(a+=1,a;a<r;a++)if(o+=n,c+=x,!t[c]){if(i=e[o],Z(i))return i;(i<u||i===u&&C(i))&&(u=i)}return u}O.exports=E
});var w=y(function(N,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=g();function G(r,e,n,q,t){return F(r,e,n,R(r,n),q,t,R(r,t))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=g();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
