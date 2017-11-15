!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e=Array,r=e.prototype,n=Object,o=n.prototype,i=Function.prototype,a=String,u=a.prototype,c=Number,f=c.prototype,s=r.slice,l=r.splice,p=r.push,h=r.unshift,y=r.concat,d=i.call,g=i.apply,b=Math.max,v=Math.min,w=o.toString,m="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,O=Function.prototype.toString,j=function(t){try{return O.call(t),!0}catch(e){return!1}},T="[object Function]",D="[object GeneratorFunction]";t=function(t){if("function"!=typeof t)return!1;if(m)return j(t);var e=w.call(t);return e===T||e===D};var E,x=RegExp.prototype.exec,S=function(t){try{return x.call(t),!0}catch(e){return!1}},_="[object RegExp]";E=function(t){return"object"!=typeof t?!1:m?S(t):w.call(t)===_};var M,I=String.prototype.valueOf,P=function(t){try{return I.call(t),!0}catch(e){return!1}},F="[object String]";M=function(t){return"string"==typeof t?!0:"object"!=typeof t?!1:m?P(t):w.call(t)===F};var U=n.defineProperty&&function(){try{var t={};n.defineProperty(t,"x",{enumerable:!1,value:t});for(var e in t)return!1;return t.x===t}catch(r){return!1}}(),N=function(t){var e;return e=U?function(t,e,r,o){!o&&e in t||n.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(o.hasOwnProperty),k=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},C=c.isNaN||function(t){return t!==t},A={ToInteger:function(t){var e=+t;return C(e)?e=0:0!==e&&e!==1/0&&e!==-(1/0)&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},ToPrimitive:function(e){var r,n,o;if(k(e))return e;if(n=e.valueOf,t(n)&&(r=n.call(e),k(r)))return r;if(o=e.toString,t(o)&&(r=o.call(e),k(r)))return r;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return n(t)},ToUint32:function(t){return t>>>0}},R=function(){};N(i,{bind:function(e){var r=this;if(!t(r))throw new TypeError("Function.prototype.bind called on incompatible "+r);for(var o,i=s.call(arguments,1),a=function(){if(this instanceof o){var t=r.apply(this,y.call(i,s.call(arguments)));return n(t)===t?t:this}return r.apply(e,y.call(i,s.call(arguments)))},u=b(0,r.length-i.length),c=[],f=0;u>f;f++)p.call(c,"$"+f);return o=Function("binder","return function ("+c.join(",")+"){ return binder.apply(this, arguments); }")(a),r.prototype&&(R.prototype=r.prototype,o.prototype=new R,R.prototype=null),o}});var $=d.bind(o.hasOwnProperty),z=d.bind(o.toString),J=d.bind(s),G=g.bind(s),Z=d.bind(u.slice),Y=d.bind(u.split),W=d.bind(u.indexOf),B=d.bind(p),X=d.bind(o.propertyIsEnumerable),H=d.bind(r.sort),L=e.isArray||function(t){return"[object Array]"===z(t)},q=1!==[].unshift(0);N(r,{unshift:function(){return h.apply(this,arguments),this.length}},q),N(e,{isArray:L});var K=n("a"),Q="a"!==K[0]||!(0 in K),V=function(t){var e=!0,r=!0,n=!1;if(t)try{t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")}catch(o){n=!0}return!!t&&!n&&e&&r};N(r,{forEach:function(e){var r,n=A.ToObject(this),o=Q&&M(this)?Y(this,""):n,i=-1,a=A.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++i<a;)i in o&&("undefined"==typeof r?e(o[i],i,n):e.call(r,o[i],i,n))}},!V(r.forEach)),N(r,{map:function(r){var n,o=A.ToObject(this),i=Q&&M(this)?Y(this,""):o,a=A.ToUint32(i.length),u=e(a);if(arguments.length>1&&(n=arguments[1]),!t(r))throw new TypeError("Array.prototype.map callback must be a function");for(var c=0;a>c;c++)c in i&&("undefined"==typeof n?u[c]=r(i[c],c,o):u[c]=r.call(n,i[c],c,o));return u}},!V(r.map)),N(r,{filter:function(e){var r,n,o=A.ToObject(this),i=Q&&M(this)?Y(this,""):o,a=A.ToUint32(i.length),u=[];if(arguments.length>1&&(n=arguments[1]),!t(e))throw new TypeError("Array.prototype.filter callback must be a function");for(var c=0;a>c;c++)c in i&&(r=i[c],("undefined"==typeof n?e(r,c,o):e.call(n,r,c,o))&&B(u,r));return u}},!V(r.filter)),N(r,{every:function(e){var r,n=A.ToObject(this),o=Q&&M(this)?Y(this,""):n,i=A.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.every callback must be a function");for(var a=0;i>a;a++)if(a in o&&!("undefined"==typeof r?e(o[a],a,n):e.call(r,o[a],a,n)))return!1;return!0}},!V(r.every)),N(r,{some:function(e){var r,n=A.ToObject(this),o=Q&&M(this)?Y(this,""):n,i=A.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!t(e))throw new TypeError("Array.prototype.some callback must be a function");for(var a=0;i>a;a++)if(a in o&&("undefined"==typeof r?e(o[a],a,n):e.call(r,o[a],a,n)))return!0;return!1}},!V(r.some));var tt=!1;r.reduce&&(tt="object"==typeof r.reduce.call("es5",function(t,e,r,n){return n})),N(r,{reduce:function(e){var r=A.ToObject(this),n=Q&&M(this)?Y(this,""):r,o=A.ToUint32(n.length);if(!t(e))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,a=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a++];break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;o>a;a++)a in n&&(i=e(i,n[a],a,r));return i}},!tt);var et=!1;r.reduceRight&&(et="object"==typeof r.reduceRight.call("es5",function(t,e,r,n){return n})),N(r,{reduceRight:function(e){var r=A.ToObject(this),n=Q&&M(this)?Y(this,""):r,o=A.ToUint32(n.length);if(!t(e))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var i,a=o-1;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(0>a)return i;do a in n&&(i=e(i,n[a],a,r));while(a--);return i}},!et);var rt=r.indexOf&&-1!==[0,1].indexOf(1,2);N(r,{indexOf:function(t){var e=Q&&M(this)?Y(this,""):A.ToObject(this),r=A.ToUint32(e.length);if(0===r)return-1;var n=0;for(arguments.length>1&&(n=A.ToInteger(arguments[1])),n=n>=0?n:b(0,r+n);r>n;n++)if(n in e&&e[n]===t)return n;return-1}},rt);var nt=r.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);N(r,{lastIndexOf:function(t){var e=Q&&M(this)?Y(this,""):A.ToObject(this),r=A.ToUint32(e.length);if(0===r)return-1;var n=r-1;for(arguments.length>1&&(n=v(n,A.ToInteger(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}},nt);var ot=function(){var t=[1,2],e=t.splice();return 2===t.length&&L(e)&&0===e.length}();N(r,{splice:function(t,e){return 0===arguments.length?[]:l.apply(this,arguments)}},!ot);var it=function(){var t={};return r.splice.call(t,0,0,1),1===t.length}();N(r,{splice:function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=b(A.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&(r=J(arguments),r.length<2?B(r,this.length-t):r[1]=A.ToInteger(e)),l.apply(this,r)}},!it);var at=function(){var t=new e(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),ut=function(){var t=256,e=[];return e[t]="a",e.splice(t+1,0,"b"),"a"===e[t]}();N(r,{splice:function(t,e){for(var r,n=A.ToObject(this),o=[],i=A.ToUint32(n.length),u=A.ToInteger(t),c=0>u?b(i+u,0):v(u,i),f=v(b(A.ToInteger(e),0),i-c),s=0;f>s;)r=a(c+s),$(n,r)&&(o[s]=n[r]),s+=1;var l,p=J(arguments,2),h=p.length;if(f>h){for(s=c;i-f>s;)r=a(s+f),l=a(s+h),$(n,r)?n[l]=n[r]:delete n[l],s+=1;for(s=i;s>i-f+h;)delete n[s-1],s-=1}else if(h>f)for(s=i-f;s>c;)r=a(s+f-1),l=a(s+h-1),$(n,r)?n[l]=n[r]:delete n[l],s-=1;s=c;for(var y=0;y<p.length;++y)n[s]=p[y],s+=1;return n.length=i-f+h,o}},!at||!ut);var ct,ft=r.join;try{ct="1,2,3"!==Array.prototype.join.call("123",",")}catch(st){ct=!0}ct&&N(r,{join:function(t){var e="undefined"==typeof t?",":t;return ft.call(M(this)?Y(this,""):this,e)}},ct);var lt="1,2"!==[1,2].join(void 0);lt&&N(r,{join:function(t){var e="undefined"==typeof t?",":t;return ft.call(this,e)}},lt);var pt=function(t){for(var e=A.ToObject(this),r=A.ToUint32(e.length),n=0;n<arguments.length;)e[r+n]=arguments[n],n+=1;return e.length=r+n,r+n},ht=function(){var t={},e=Array.prototype.push.call(t,void 0);return 1!==e||1!==t.length||"undefined"!=typeof t[0]||!$(t,0)}();N(r,{push:function(t){return L(this)?p.apply(this,arguments):pt.apply(this,arguments)}},ht);var yt=function(){var t=[],e=t.push(void 0);return 1!==e||1!==t.length||"undefined"!=typeof t[0]||!$(t,0)}();N(r,{push:pt},yt),N(r,{slice:function(t,e){var r=M(this)?Y(this,""):this;return G(r,arguments)}},Q);var dt=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(t){}return!1}(),gt=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),bt=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();N(r,{sort:function(e){if("undefined"==typeof e)return H(this);if(!t(e))throw new TypeError("Array.prototype.sort callback must be a function");return H(this,e)}},dt||!bt||!gt);var vt=!{toString:null}.propertyIsEnumerable("toString"),wt=function(){}.propertyIsEnumerable("prototype"),mt=!$("x","0"),Ot=function(t){var e=t.constructor;return e&&e.prototype===t},jt={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0},Tt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!jt["$"+t]&&$(window,t)&&null!==window[t]&&"object"==typeof window[t]&&Ot(window[t])}catch(e){return!0}return!1}(),Dt=function(t){if("undefined"==typeof window||!Tt)return Ot(t);try{return Ot(t)}catch(e){return!1}},Et=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],xt=Et.length,St=function(t){return"[object Arguments]"===z(t)},_t=function(e){return null!==e&&"object"==typeof e&&"number"==typeof e.length&&e.length>=0&&!L(e)&&t(e.callee)},Mt=St(arguments)?St:_t;N(n,{keys:function(e){var r=t(e),n=Mt(e),o=null!==e&&"object"==typeof e,i=o&&M(e);if(!o&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var u=[],c=wt&&r;if(i&&mt||n)for(var f=0;f<e.length;++f)B(u,a(f));if(!n)for(var s in e)c&&"prototype"===s||!$(e,s)||B(u,a(s));if(vt)for(var l=Dt(e),p=0;xt>p;p++){var h=Et[p];l&&"constructor"===h||!$(e,h)||B(u,h)}return u}});var It=n.keys&&function(){return 2===n.keys(arguments).length}(1,2),Pt=n.keys&&function(){var t=n.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),Ft=n.keys;N(n,{keys:function(t){return Ft(Mt(t)?J(t):t)}},!It||Pt);var Ut,Nt,kt=0!==new Date(-0xc782b5b342b24).getUTCMonth(),Ct=new Date(-0x55d318d56a724),At=new Date(14496624e5),Rt="Mon, 01 Jan -45875 11:59:59 GMT"!==Ct.toUTCString(),$t=Ct.getTimezoneOffset();-720>$t?(Ut="Tue Jan 02 -45875"!==Ct.toDateString(),Nt=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(At.toString())):(Ut="Mon Jan 01 -45875"!==Ct.toDateString(),Nt=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(At.toString()));var zt=d.bind(Date.prototype.getFullYear),Jt=d.bind(Date.prototype.getMonth),Gt=d.bind(Date.prototype.getDate),Zt=d.bind(Date.prototype.getUTCFullYear),Yt=d.bind(Date.prototype.getUTCMonth),Wt=d.bind(Date.prototype.getUTCDate),Bt=d.bind(Date.prototype.getUTCDay),Xt=d.bind(Date.prototype.getUTCHours),Ht=d.bind(Date.prototype.getUTCMinutes),Lt=d.bind(Date.prototype.getUTCSeconds),qt=d.bind(Date.prototype.getUTCMilliseconds),Kt=["Sun","Mon","Tue","Wed","Thu","Fri"],Qt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Vt=function(t,e){return Gt(new Date(e,t,0))};N(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=zt(this);return 0>t&&Jt(this)>11?t+1:t},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=zt(this),e=Jt(this);return 0>t&&e>11?0:e},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=zt(this),e=Jt(this),r=Gt(this);if(0>t&&e>11){if(12===e)return r;var n=Vt(0,t+1);return n-r+1}return r},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this);return 0>t&&Yt(this)>11?t+1:t},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this),e=Yt(this);return 0>t&&e>11?0:e},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this),e=Yt(this),r=Wt(this);if(0>t&&e>11){if(12===e)return r;var n=Vt(0,t+1);return n-r+1}return r}},kt),N(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Bt(this),e=Wt(this),r=Yt(this),n=Zt(this),o=Xt(this),i=Ht(this),a=Lt(this);return Kt[t]+", "+(10>e?"0"+e:e)+" "+Qt[r]+" "+n+" "+(10>o?"0"+o:o)+":"+(10>i?"0"+i:i)+":"+(10>a?"0"+a:a)+" GMT"}},kt||Rt),N(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return Kt[t]+" "+Qt[r]+" "+(10>e?"0"+e:e)+" "+n}},kt||Ut),(kt||Nt)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),u=this.getTimezoneOffset(),c=Math.floor(Math.abs(u)/60),f=Math.floor(Math.abs(u)%60);return Kt[t]+" "+Qt[r]+" "+(10>e?"0"+e:e)+" "+n+" "+(10>o?"0"+o:o)+":"+(10>i?"0"+i:i)+":"+(10>a?"0"+a:a)+" GMT"+(u>0?"-":"+")+(10>c?"0"+c:c)+(10>f?"0"+f:f)},U&&n.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var te=-621987552e5,ee="-000001",re=Date.prototype.toISOString&&-1===new Date(te).toISOString().indexOf(ee),ne=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString();N(Date.prototype,{toISOString:function(){if(!isFinite(this))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Zt(this),e=Yt(this);t+=Math.floor(e/12),e=(e%12+12)%12;var r=[e+1,Wt(this),Xt(this),Ht(this),Lt(this)];t=(0>t?"-":t>9999?"+":"")+Z("00000"+Math.abs(t),t>=0&&9999>=t?-4:-6);for(var n=0;n<r.length;++n)r[n]=Z("00"+r[n],-2);return t+"-"+J(r,0,2).join("-")+"T"+J(r,2).join(":")+"."+Z("000"+qt(this),-3)+"Z"}},re||ne);var oe=function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(te).toJSON().indexOf(ee)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}();oe||(Date.prototype.toJSON=function(e){var r=n(this),o=A.ToPrimitive(r);if("number"==typeof o&&!isFinite(o))return null;var i=r.toISOString;if(!t(i))throw new TypeError("toISOString property is not callable");return i.call(r)});var ie=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ae=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),ue=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(ue||ae||!ie){var ce=Math.pow(2,31)-1,fe=C(new Date(1970,0,1,0,0,0,ce+1).getTime());Date=function(t){var e=function(r,n,o,i,u,c,f){var s,l=arguments.length;if(this instanceof t){var p=c,h=f;if(fe&&l>=7&&f>ce){var y=Math.floor(f/ce)*ce,d=Math.floor(y/1e3);p+=d,h-=1e3*d}s=1===l&&a(r)===r?new t(e.parse(r)):l>=7?new t(r,n,o,i,u,p,h):l>=6?new t(r,n,o,i,u,p):l>=5?new t(r,n,o,i,u):l>=4?new t(r,n,o,i):l>=3?new t(r,n,o):l>=2?new t(r,n):l>=1?new t(r):new t}else s=t.apply(this,arguments);return k(s)||N(s,{constructor:e},!0),s},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)},i=function(e){var r=0,n=e;if(fe&&n>ce){var o=Math.floor(n/ce)*ce,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return c(new t(1970,0,1,0,0,r,n))};for(var u in t)$(t,u)&&(e[u]=t[u]);N(e,{now:t.now,UTC:t.UTC},!0),e.prototype=t.prototype,N(e.prototype,{constructor:e},!0);var f=function(e){var n=r.exec(e);if(n){var a,u=c(n[1]),f=c(n[2]||1)-1,s=c(n[3]||1)-1,l=c(n[4]||0),p=c(n[5]||0),h=c(n[6]||0),y=Math.floor(1e3*c(n[7]||0)),d=Boolean(n[4]&&!n[8]),g="-"===n[9]?1:-1,b=c(n[10]||0),v=c(n[11]||0),w=p>0||h>0||y>0;return(w?24:25)>l&&60>p&&60>h&&1e3>y&&f>-1&&12>f&&24>b&&60>v&&s>-1&&s<o(u,f+1)-o(u,f)&&(a=60*(24*(o(u,f)+s)+l+b*g),a=1e3*(60*(a+p+v*g)+h)+y,d&&(a=i(a)),a>=-864e13&&864e13>=a)?a:NaN}return t.parse.apply(this,arguments)};return N(e,{parse:f}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var se=f.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==0xde0b6b3a7640080.toFixed(0)),le={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1,n=e;++r<le.size;)n+=t*le.data[r],le.data[r]=n%le.base,n=Math.floor(n/le.base)},divide:function(t){for(var e=le.size,r=0;--e>=0;)r+=le.data[e],le.data[e]=Math.floor(r/t),r=r%t*le.base},numToString:function(){for(var t=le.size,e="";--t>=0;)if(""!==e||0===t||0!==le.data[t]){var r=a(le.data[t]);""===e?e=r:e+=Z("0000000",0,7-r.length)+r}return e},pow:function Pe(t,e,r){return 0===e?r:e%2===1?Pe(t,e-1,r*t):Pe(t*t,e/2,r)},log:function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}},pe=function(t){var e,r,n,o,i,u,f,s;if(e=c(t),e=C(e)?0:Math.floor(e),0>e||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=c(this),C(r))return"NaN";if(-1e21>=r||r>=1e21)return a(r);if(n="",0>r&&(n="-",r=-r),o="0",r>1e-21)if(i=le.log(r*le.pow(2,69,1))-69,u=0>i?r*le.pow(2,-i,1):r/le.pow(2,i,1),u*=4503599627370496,i=52-i,i>0){for(le.multiply(0,u),f=e;f>=7;)le.multiply(1e7,0),f-=7;for(le.multiply(le.pow(10,f,1),0),f=i-1;f>=23;)le.divide(1<<23),f-=23;le.divide(1<<f),le.multiply(1,1),le.divide(2),o=le.numToString()}else le.multiply(0,u),le.multiply(1<<-i,0),o=le.numToString()+Z("0.00000000000000000000",2,2+e);return e>0?(s=o.length,o=e>=s?n+Z("0.0000000000000000000",0,e-s+2)+o:n+Z(o,0,s-e)+"."+Z(o,s-e)):o=n+o,o};N(f,{toFixed:pe},se);var he=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),ye=f.toPrecision;N(f,{toPrecision:function(t){return"undefined"==typeof t?ye.call(this):ye.call(this,t)}},he),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?!function(){var t="undefined"==typeof/()??/.exec("")[1],e=Math.pow(2,32)-1;u.split=function(r,n){var o=String(this);if("undefined"==typeof r&&0===n)return[];if(!E(r))return Y(this,r,n);var i,a,u,c,f=[],s=(r.ignoreCase?"i":"")+(r.multiline?"m":"")+(r.unicode?"u":"")+(r.sticky?"y":""),l=0,h=new RegExp(r.source,s+"g");t||(i=new RegExp("^"+h.source+"$(?!\\s)",s));var y="undefined"==typeof n?e:A.ToUint32(n);for(a=h.exec(o);a&&(u=a.index+a[0].length,!(u>l&&(B(f,Z(o,l,a.index)),!t&&a.length>1&&a[0].replace(i,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(a[t]=void 0)}),a.length>1&&a.index<o.length&&p.apply(f,J(a,1)),c=a[0].length,l=u,f.length>=y)));)h.lastIndex===a.index&&h.lastIndex++,a=h.exec(o);return l===o.length?(c||!h.test(""))&&B(f,""):B(f,Z(o,l)),f.length>y?J(f,0,y):f}}():"0".split(void 0,0).length&&(u.split=function(t,e){return"undefined"==typeof t&&0===e?[]:Y(this,t,e)});var de=u.replace,ge=function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){B(t,r)}),1===t.length&&"undefined"==typeof t[0]}();ge||(u.replace=function(e,r){var n=t(r),o=E(e)&&/\)[*?]/.test(e.source);if(n&&o){var i=function(t){var n=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,B(i,arguments[n-2],arguments[n-1]),r.apply(this,i)};return de.call(this,e,i)}return de.call(this,e,r)});var be=u.substr,ve="".substr&&"b"!=="0b".substr(-1);N(u,{substr:function(t,e){var r=t;return 0>t&&(r=b(this.length+t,0)),be.call(this,r,e)}},ve);var we="	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",me="​",Oe="["+we+"]",je=new RegExp("^"+Oe+Oe+"*"),Te=new RegExp(Oe+Oe+"*$"),De=u.trim&&(we.trim()||!me.trim());N(u,{trim:function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");return a(this).replace(je,"").replace(Te,"")}},De);var Ee=d.bind(String.prototype.trim),xe=u.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);N(u,{lastIndexOf:function(t){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");for(var e=a(this),r=a(t),n=arguments.length>1?c(arguments[1]):NaN,o=C(n)?1/0:A.ToInteger(n),i=v(b(o,0),e.length),u=r.length,f=i+u;f>0;){f=b(0,f-u);var s=W(Z(e,f,i+u),r);if(-1!==s)return f+s}return-1}},xe);var Se=u.lastIndexOf;if(N(u,{lastIndexOf:function(t){return Se.apply(this,arguments)}},1!==u.lastIndexOf.length),(8!==parseInt(we+"08")||22!==parseInt(we+"0x16"))&&(parseInt=function(t){var e=/^[\-+]?0[xX]/;return function(r,n){var o=Ee(r),i=c(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt)),1/parseFloat("-0")!==-(1/0)&&(parseFloat=function(t){return function(e){var r=Ee(e),n=t(r);return 0===n&&"-"===Z(r,0,1)?-0:n}}(parseFloat)),"RangeError: test"!==String(new RangeError("test"))){var _e=function(){if("undefined"==typeof this||null===this)throw new TypeError("can't convert "+this+" to object");var t=this.name;"undefined"==typeof t?t="Error":"string"!=typeof t&&(t=a(t));var e=this.message;return"undefined"==typeof e?e="":"string"!=typeof e&&(e=a(e)),t?e?t+": "+e:t:e};Error.prototype.toString=_e}if(U){var Me=function(t,e){if(X(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.enumerable=!1,Object.defineProperty(t,e,r)}};Me(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),Me(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){var Ie=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t};RegExp.prototype.toString=Ie}}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e,r,n,o=Function.call,i=Object.prototype,a=o.bind(i.hasOwnProperty),u=o.bind(i.propertyIsEnumerable),c=o.bind(i.toString),f=a(i,"__defineGetter__");f&&(t=o.bind(i.__defineGetter__),e=o.bind(i.__defineSetter__),r=o.bind(i.__lookupGetter__),n=o.bind(i.__lookupSetter__)),Object.getPrototypeOf||(Object.getPrototypeOf=function(t){var e=t.__proto__;return e||null===e?e:"[object Function]"===c(t.constructor)?t.constructor.prototype:t instanceof Object?i:null});var s=function(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(e){return!1}};if(Object.defineProperty){var l=s({}),p="undefined"==typeof document||s(document.createElement("div"));if(!p||!l)var h=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||h){var y="Object.getOwnPropertyDescriptor called on a non-object: ";Object.getOwnPropertyDescriptor=function(t,e){if("object"!=typeof t&&"function"!=typeof t||null===t)throw new TypeError(y+t);if(h)try{return h.call(Object,t,e)}catch(o){}var c;if(!a(t,e))return c;if(c={enumerable:u(t,e),configurable:!0},f){var s=t.__proto__,l=t!==i;l&&(t.__proto__=i);var p=r(t,e),d=n(t,e);if(l&&(t.__proto__=s),p||d)return p&&(c.get=p),d&&(c.set=d),c}return c.value=t[e],c.writable=!0,c}}if(Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)}),!Object.create){var d,g=!({__proto__:null}instanceof Object),b=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(t){return!1}},v=function(){var t,e;return e=new ActiveXObject("htmlfile"),e.write("<script></script>"),e.close(),t=e.parentWindow.Object.prototype,e=null,t},w=function(){var t,e=document.createElement("iframe"),r=document.body||document.documentElement;return e.style.display="none",r.appendChild(e),e.src="javascript:",t=e.contentWindow.Object.prototype,r.removeChild(e),e=null,t};d=g||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var t=b()?v():w();delete t.constructor,delete t.hasOwnProperty,delete t.propertyIsEnumerable,delete t.isPrototypeOf,delete t.toLocaleString,delete t.toString,delete t.valueOf;var e=function(){};return e.prototype=t,d=function(){return new e},new e},Object.create=function(t,e){var r,n=function(){};if(null===t)r=d();else{if("object"!=typeof t&&"function"!=typeof t)throw new TypeError("Object prototype may only be an Object or null");n.prototype=t,r=new n,r.__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r}}var m=function(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(e){return!1}};if(Object.defineProperty){var O=m({}),j="undefined"==typeof document||m(document.createElement("div"));if(!O||!j)var T=Object.defineProperty,D=Object.defineProperties}if(!Object.defineProperty||T){var E="Property description must be an object: ",x="Object.defineProperty called on non-object: ",S="getters & setters can not be defined on this javascript engine";Object.defineProperty=function(o,a,u){if("object"!=typeof o&&"function"!=typeof o||null===o)throw new TypeError(x+o);if("object"!=typeof u&&"function"!=typeof u||null===u)throw new TypeError(E+u);if(T)try{return T.call(Object,o,a,u)}catch(c){}if("value"in u)if(f&&(r(o,a)||n(o,a))){var s=o.__proto__;o.__proto__=i,delete o[a],o[a]=u.value,o.__proto__=s}else o[a]=u.value;else{if(!f&&("get"in u||"set"in u))throw new TypeError(S);"get"in u&&t(o,a,u.get),"set"in u&&e(o,a,u.set)}return o}}(!Object.defineProperties||D)&&(Object.defineProperties=function(t,e){if(D)try{return D.call(Object,t,e)}catch(r){}return Object.keys(e).forEach(function(r){"__proto__"!==r&&Object.defineProperty(t,r,e[r])}),t}),Object.seal||(Object.seal=function(t){if(Object(t)!==t)throw new TypeError("Object.seal can only be called on Objects.");return t}),Object.freeze||(Object.freeze=function(t){if(Object(t)!==t)throw new TypeError("Object.freeze can only be called on Objects.");return t});try{Object.freeze(function(){})}catch(_){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){if(Object(t)!==t)throw new TypeError("Object.preventExtensions can only be called on Objects.");return t}),Object.isSealed||(Object.isSealed=function(t){if(Object(t)!==t)throw new TypeError("Object.isSealed can only be called on Objects.");return!1}),Object.isFrozen||(Object.isFrozen=function(t){if(Object(t)!==t)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1}),Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var e="";a(t,e);)e+="?";t[e]=!0;var r=a(t,e);return delete t[e],r})});