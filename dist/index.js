"use strict";var y=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var P=y(function(K,p){
var l=require('@stdlib/math-base-assert-is-nan/dist'),A=require('@stdlib/math-base-assert-is-negative-zero/dist');function B(r,a,v,q,t,x,b){var n,o,c,s,u,i,e,m,f;for(n=a.data,o=t.data,c=a.accessors[0],s=t.accessors[0],i=q,e=b,f=0;f<r&&s(o,e)!==0;f++)i+=v,e+=x;if(f===r)return NaN;if(u=c(n,i),l(u))return u;for(f+=1,f;f<r;f++)if(i+=v,e+=x,!s(o,e)){if(m=c(n,i),l(m))return m;(m<u||m===u&&A(m))&&(u=m)}return u}p.exports=B
});var g=y(function(L,O){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),C=require('@stdlib/math-base-assert-is-negative-zero/dist'),j=require('@stdlib/array-base-arraylike2object/dist'),D=P();function E(r,a,v,q,t,x,b){var n,o,c,s,u,i,e;if(r<=0)return NaN;if(s=j(a),u=j(t),s.accessorProtocol||u.accessorProtocol)return D(r,s,v,q,u,x,b);for(o=q,c=b,e=0;e<r&&t[c]!==0;e++)o+=v,c+=x;if(e===r)return NaN;if(n=a[o],Z(n))return n;for(e+=1,e;e<r;e++)if(o+=v,c+=x,!t[c]){if(i=a[o],Z(i))return i;(i<n||i===n&&C(i))&&(n=i)}return n}O.exports=E
});var w=y(function(N,h){
var R=require('@stdlib/strided-base-stride2offset/dist'),F=g();function G(r,a,v,q,t){return F(r,a,v,R(r,v),q,t,R(r,t))}h.exports=G
});var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=w(),I=g();H(z,"ndarray",I);module.exports=z;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
