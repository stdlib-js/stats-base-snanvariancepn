// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function n(r,a,i,f,s){var o,u,d,m,l,N,p,j,v,b,c,h,x,y;if(o=s,r<8){for(c=0,h=0,y=0;y<r;y++)(x=i[o])==x&&(c=t(c+x),h+=1),o+=f;return a[0]=t(a[0]+c),a[1]+=h,a}if(r<=128){for(u=0,d=0,m=0,l=0,N=0,p=0,j=0,v=0,h=0,b=r%8,y=0;y<r-b;y+=8)(x=i[o])==x&&(u=t(u+x),h+=1),(x=i[o+=f])==x&&(d=t(d+x),h+=1),(x=i[o+=f])==x&&(m=t(m+x),h+=1),(x=i[o+=f])==x&&(l=t(l+x),h+=1),(x=i[o+=f])==x&&(N=t(N+x),h+=1),(x=i[o+=f])==x&&(p=t(p+x),h+=1),(x=i[o+=f])==x&&(j=t(j+x),h+=1),(x=i[o+=f])==x&&(v=t(v+x),h+=1),o+=f;for(c=t(t(t(u+d)+t(m+l))+t(t(N+p)+t(j+v)));y<r;y++)(x=i[o])==x&&(c=t(c+x),h+=1),o+=f;return a[0]=t(a[0]+c),a[1]+=h,a}return h=e(r/2),t(n(h-=h%8,a,i,f,o)+n(r-h,a,i,f,o+h*f))}var a=[0,0];function i(r,e,i,f){var s,o,u,d,m,l,N,p,j;if(r<=0)return NaN;if(1===r||0===f)return(N=i[0])==N&&r-e>0?0:NaN;if(o=f<0?(1-r)*f:0,a[0]=0,a[1]=0,n(r,a,i,f,o),(d=(p=a[1])-e)<=0)return NaN;for(s=t(a[0]/p),u=0,m=0,j=0;j<r;j++)(N=i[o])==N&&(l=t(N-s),u=t(u+t(l*l)),m=t(m+l),p+=1),o+=f;return t(t(u/d)-t(t(m/p)*t(m/d)))}var f=[0,0];function s(r,e,a,i,s){var o,u,d,m,l,N,p,j,v;if(r<=0)return NaN;if(1===r||0===i)return(p=a[s])==p&&r-e>0?0:NaN;if(u=s,f[0]=0,f[1]=0,n(r,f,a,i,u),(m=(j=f[1])-e)<=0)return NaN;for(o=t(f[0]/j),d=0,l=0,v=0;v<r;v++)(p=a[u])==p&&(N=t(p-o),d=t(d+t(N*N)),l=t(l+N),j+=1),u+=i;return t(t(d/m)-t(t(l/j)*t(l/m)))}r(i,"ndarray",s);export{i as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
