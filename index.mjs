// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.0-esm/index.mjs";var n=128;function a(r,i,f,s,o){var u,d,m,l,v,N,p,j,b,c,h,x,y,g;if(u=o,r<8){for(h=0,x=0,g=0;g<r;g++)(y=f[u])==y&&(h=t(h+y),x+=1),u+=s;return i[0]=t(i[0]+h),i[1]+=x,i}if(r<=n){for(d=0,m=0,l=0,v=0,N=0,p=0,j=0,b=0,x=0,c=r%8,g=0;g<r-c;g+=8)(y=f[u])==y&&(d=t(d+y),x+=1),(y=f[u+=s])==y&&(m=t(m+y),x+=1),(y=f[u+=s])==y&&(l=t(l+y),x+=1),(y=f[u+=s])==y&&(v=t(v+y),x+=1),(y=f[u+=s])==y&&(N=t(N+y),x+=1),(y=f[u+=s])==y&&(p=t(p+y),x+=1),(y=f[u+=s])==y&&(j=t(j+y),x+=1),(y=f[u+=s])==y&&(b=t(b+y),x+=1),u+=s;for(h=t(t(t(d+m)+t(l+v))+t(t(N+p)+t(j+b)));g<r;g++)(y=f[u])==y&&(h=t(h+y),x+=1),u+=s;return i[0]=t(i[0]+h),i[1]+=x,i}return x=e(r/2),t(a(x-=x%8,i,f,s,u)+a(r-x,i,f,s,u+x*s))}var i=[0,0];function f(r,e,n,f){var s,o,u,d,m,l,v,N,p;if(r<=0)return NaN;if(1===r||0===f)return(v=n[0])==v&&r-e>0?0:NaN;if(o=f<0?(1-r)*f:0,i[0]=0,i[1]=0,a(r,i,n,f,o),(d=(N=i[1])-e)<=0)return NaN;for(s=t(i[0]/N),u=0,m=0,p=0;p<r;p++)(v=n[o])==v&&(l=t(v-s),u=t(u+t(l*l)),m=t(m+l),N+=1),o+=f;return t(t(u/d)-t(t(m/N)*t(m/d)))}var s=[0,0];function o(r,e,n,i,f){var o,u,d,m,l,v,N,p,j;if(r<=0)return NaN;if(1===r||0===i)return(N=n[f])==N&&r-e>0?0:NaN;if(u=f,s[0]=0,s[1]=0,a(r,s,n,i,u),(m=(p=s[1])-e)<=0)return NaN;for(o=t(s[0]/p),d=0,l=0,j=0;j<r;j++)(N=n[u])==N&&(v=t(N-o),d=t(d+t(v*v)),l=t(l+v),p+=1),u+=i;return t(t(d/m)-t(t(l/p)*t(l/m)))}r(f,"ndarray",o);export{f as default,o as ndarray};
//# sourceMappingURL=index.mjs.map
