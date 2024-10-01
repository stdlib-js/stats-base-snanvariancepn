"use strict";var C=function(v,e){return function(){return e||v((e={exports:{}}).exports,e),e.exports}};var K=C(function($,A){
var u=require('@stdlib/number-float64-base-to-float32/dist'),g=require('@stdlib/math-base-special-floor/dist'),h=128;function F(v,e,i,n,R){var a,t,c,o,p,q,s,l,E,T,O,f,r,y;if(a=R,v<8){for(O=0,f=0,y=0;y<v;y++)r=i[a],r===r&&(O=u(O+r),f+=1),a+=n;return e[0]=u(e[0]+O),e[1]+=f,e}if(v<=h){for(t=0,c=0,o=0,p=0,q=0,s=0,l=0,E=0,f=0,T=v%8,y=0;y<v-T;y+=8)r=i[a],r===r&&(t=u(t+r),f+=1),a+=n,r=i[a],r===r&&(c=u(c+r),f+=1),a+=n,r=i[a],r===r&&(o=u(o+r),f+=1),a+=n,r=i[a],r===r&&(p=u(p+r),f+=1),a+=n,r=i[a],r===r&&(q=u(q+r),f+=1),a+=n,r=i[a],r===r&&(s=u(s+r),f+=1),a+=n,r=i[a],r===r&&(l=u(l+r),f+=1),a+=n,r=i[a],r===r&&(E=u(E+r),f+=1),a+=n;for(O=u(u(u(t+c)+u(o+p))+u(u(q+s)+u(l+E))),y;y<v;y++)r=i[a],r===r&&(O=u(O+r),f+=1),a+=n;return e[0]=u(e[0]+O),e[1]+=f,e}return f=g(v/2),f-=f%8,u(F(f,e,i,n,a)+F(v-f,e,i,n,a+f*n))}A.exports=F
});var W=C(function(N,P){
var m=require('@stdlib/number-float64-base-to-float32/dist'),k=K(),j=[0,0];function z(v,e,i,n){var R,a,t,c,o,p,q,s,l;if(v<=0)return NaN;if(v===1||n===0)return q=i[0],q===q&&v-e>0?0:NaN;if(n<0?a=(1-v)*n:a=0,j[0]=0,j[1]=0,k(v,j,i,n,a),s=j[1],c=s-e,c<=0)return NaN;for(R=m(j[0]/s),t=0,o=0,l=0;l<v;l++)q=i[a],q===q&&(p=m(q-R),t=m(t+m(p*p)),o=m(o+p),s+=1),a+=n;return m(m(t/c)-m(m(o/s)*m(o/c)))}P.exports=z
});var B=C(function(x,_){
var M=require('@stdlib/number-float64-base-to-float32/dist'),D=K(),w=[0,0];function G(v,e,i,n,R){var a,t,c,o,p,q,s,l,E;if(v<=0)return NaN;if(v===1||n===0)return s=i[R],s===s&&v-e>0?0:NaN;if(t=R,w[0]=0,w[1]=0,D(v,w,i,n,t),l=w[1],o=l-e,o<=0)return NaN;for(a=M(w[0]/l),c=0,p=0,E=0;E<v;E++)s=i[t],s===s&&(q=M(s-a),c=M(c+M(q*q)),p=M(p+q),l+=1),t+=n;return M(M(c/o)-M(M(p/l)*M(p/o)))}_.exports=G
});var Z=C(function(d,L){
var H=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),I=W(),J=B();H(I,"ndarray",J);L.exports=I
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),V=require('@stdlib/assert-is-error/dist'),X=Z(),S,b=U(Q(__dirname,"./native.js"));V(b)?S=X:S=b;module.exports=S;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
